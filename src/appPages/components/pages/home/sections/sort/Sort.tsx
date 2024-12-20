"use client";
import { useFilterStore } from "@/appPages/stores/searchStore";
import scss from "./Sort.module.scss";

const Sort = () => {
	const {
		selectedType,  
		setSelectedType,
		resetFilters,
	} = useFilterStore();

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
					{/* Type Buttons */}
					<div className={scss.btn}>
						<div className="filter-description">
							<button onClick={resetFilters}  style={getButtonStyle(selectedType === "")}>
								Все ноутбуки
							</button>
						</div>
						<button
							style={getButtonStyle(selectedType === "lenovo")}
							onClick={() => handleTypeClick("lenovo")}>
							lenovo
						</button>
						<button
							style={getButtonStyle(selectedType === "acer")}
							onClick={() => handleTypeClick("acer")}>
							acer
						</button>
						<button
							style={getButtonStyle(selectedType === "hp")}
							onClick={() => handleTypeClick("hp")}>
							hp
						</button>
						<button
							style={getButtonStyle(selectedType === "dell")}
							onClick={() => handleTypeClick("dell")}>
							dell
						</button>
						<button
							style={getButtonStyle(selectedType === "asus")}
							onClick={() => handleTypeClick("asus")}>
							asus
						</button>
						<button
							style={getButtonStyle(selectedType === "mac")}
							onClick={() => handleTypeClick("mac")}>
							mac
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sort;
