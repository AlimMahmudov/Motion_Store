"use client";
import { useFilterStore } from "@/appPages/stores/sortStore";
import scss from "./Sort.module.scss";
import { useGetLaptopsQuery } from "@/redux/api/laptops";

const Sort = () => {
  const { selectedType, setSelectedType, resetFilters } = useFilterStore();

  const { data } = useGetLaptopsQuery();
  console.log(data, "sort");

  // Получение уникальных брендов
  const uniqueBrands = data
    ? Array.from(new Set(data.map((el) => el.brand)))
    : [];

  const handleTypeClick = (type: string) => {
    setSelectedType(selectedType === type ? "" : type);
  };

  const getButtonStyle = (isSelected: boolean) => ({
    backgroundColor: isSelected ? "#080077" : "white",
    color: isSelected ? "white" : "black",
    border: "solid 2px #dfdfdf",

    padding: "10px 40px",
    margin: "5px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "all 0.3s ease",
  });

  return (
    <div className={scss.Sort}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.btn}>
            <div className="filter-description">
              <button
                onClick={resetFilters}
                style={getButtonStyle(selectedType === "")}
              >
                Все ноутбуки
              </button>
            </div>

            {uniqueBrands.map((brand, index) => (
              <div key={index} className="filter-description">
                <button
                  style={getButtonStyle(selectedType === brand)}
                  onClick={() => handleTypeClick(brand)}
                >
                  {brand}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
