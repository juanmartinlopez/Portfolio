import { useTranslation } from "react-i18next";

function Training() {
    const { t } = useTranslation()
    const timeline = [
        {
            year: "2019",
            title: t("secondaryEducation"),
            institution: "Saint Paul Colegio Bilingüe",
        },
        {
            year: "2020 - Actual",
            title: t("Bachelor"),
            institution: "Universidad Nacional de San Juan",
        },
        {
            year: "2021",
            title: "HTML5 & CSS",
            institution: "Conectar Empleo",
        },
        {
            year: "Feb 2023 - Junio 2023",
            title: t("develop"),
            institution: "SoyHenry",
        },
    ]

    return (
        <div className="relative p-10">
            {/* Línea vertical */}
            <div className="absolute left-1/2 h-max w-1 bg-gray-200 transform -translate-x-1/2"></div>

            {timeline.map((item, index) => (
                <div
                    key={index}
                    className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-between mb-8 w-full`}
                >
                    {/* Contenido */}
                    <div className={`w-5/12 p-4 rounded-lg shadow-md ${index % 2 === 0 ? "bg-background text-white" : "bg-gray-100"}`}>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm">{item.institution}</p>
                    </div>

                    {/* Punto en la línea */}
                    <div className="w-1/12 flex justify-center">
                        <div className="w-6 h-6 bg-background rounded-full border-4 border-white"></div>
                    </div>

                    {/* Año */}
                    <div className="w-5/12 p-4">
                        <p className={`font-bold text-lg ${index % 2 === 0 ? "text-right" : "text-left"}`}>{item.year}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Training;