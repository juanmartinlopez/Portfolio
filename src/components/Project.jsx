import { useTranslation } from 'react-i18next';
import adoraimage from '../assets/images/adoralogo.png';
import casitadelhorneroimage from '../assets/images/casitadelhornero.png';

function Project() {
    const { t } = useTranslation();

    const projects = [
        {
            name: "Asociación Docentes del Reino",
            description: t("descriptionADORA"),
            image: adoraimage,
            urlCodeFront: "https://github.com/juanmaxx2/docentesdelreinofront",
            urlCodeBack: "https://github.com/juanmaxx2/adoraBack",
            urlPage: "https://adora.netlify.app/home",
        },
        {
            name: "Casitas del Hornero",
            description: t("descriptionCasitasDelHornero"),
            image: casitadelhorneroimage,
            urlCodeFront: "https://github.com/juanmaxx2/La-Casita-del-Hornero",
            urlCodeBack: "https://github.com/EzeTorcetta/las-casitas-del-hornero-Back",
            urlPage: "https://la-casita-del-hornero.vercel.app",
        },
    ];

    return (
        <div className="flex flex-col items-center md:p-10 w-full max-w-7xl mx-auto">
            <div className="w-full h-auto md:h-170 overflow-y-auto scrollbar-thin scrollbar-thumb-background scrollbar-track-gray-100 rounded-lg">
                {projects.map((project, index) => (
                    <div key={index} className="w-full bg-gray-100 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row gap-4 items-center mb-4">
                        {/* Imagen */}
                        <img
                            src={project.image || "https://via.placeholder.com/100"}
                            alt={project.name}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover"
                        />

                        {/* Contenido */}
                        <div className="flex-1 w-full md:w-auto">
                            <h2 className="text-lg font-semibold text-gray-800">{project.name}</h2>
                            <p className="text-sm text-gray-600">{project.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <a href={project.urlCodeFront} target="_blank" rel="noopener noreferrer" className="bg-background text-white px-3 py-1 rounded-md text-sm">Código Frontend</a>
                                <a href={project.urlCodeBack} target="_blank" rel="noopener noreferrer" className="bg-background text-white px-3 py-1 rounded-md text-sm">Código Backend</a>
                                {project.urlPage && (
                                    <a href={project.urlPage} target="_blank" rel="noopener noreferrer" className="bg-background text-white px-3 py-1 rounded-md text-sm">Visitar Página</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;