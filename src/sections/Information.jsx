import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Project, Technology, Training } from "../components";

function Information() {
    const { t } = useTranslation();
    const [selectedComponent, setSelectedComponent] = useState("Technology");

    const buttons = [
        { key: "Technology", label: t("technologyButton") },
        { key: "Project", label: t("projectButton") },
        { key: "Training", label: t("trainingButton") },
    ];

    return (
        <div className="bg-background-second h-auto md:h-210 max-w-full md:w-300 rounded-2xl shadow-lg">
            {/* Botones de navegación */}
            <div className="flex flex-col md:flex-row justify-around w-full space-y-4 md:space-y-0 md:space-x-4 pt-10">
                {buttons.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setSelectedComponent(key)}
                        className={`text-lg md:text-xl py-2 px-4 rounded-full font-family-primary border-2 transition
                        ${selectedComponent === key
                                ? "bg-second text-white border-second hover:bg-transparent hover:text-second"
                                : "bg-transparent text-second border-second hover:bg-second hover:text-white"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Componente seleccionado */}
            <div className="mt-6 md:mt-10">
                {selectedComponent === "Technology" && <Technology />}
                {selectedComponent === "Project" && <Project />}
                {selectedComponent === "Training" && <Training />}
            </div>
        </div>
    );
}

export default Information;