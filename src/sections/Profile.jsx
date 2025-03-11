import { useTranslation } from "react-i18next";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import image from "../assets/images/Yo.png";

function Profile() {
    const { t, i18n } = useTranslation(); // Añadimos i18n para acceder al idioma actual

    const url = {
        github: "https://github.com/juanmaxx2",
        linkedin: "https://www.linkedin.com/in/juan-martin-lopez-frau/",
        mail: "juanmartinlopezfrau@gmail.com",
    };

    // Definimos los enlaces de descarga según el idioma
    const downloadLinks = {
        en: "https://drive.google.com/file/d/1q_BvXnXMsrVU-TETiMvj-11beVzkUoER/view?usp=sharing",
        es: "https://drive.google.com/file/d/1jTP6WUp6lcWOu8BVAStSXSjg9oUkGn6h/view?usp=sharing",
    };

    // Obtenemos el enlace de descarga según el idioma actual
    const downloadLink = downloadLinks[i18n.language] || downloadLinks.es;

    return (
        <div className="bg-background-second w-full md:w-110 h-auto md:h-210 p-6 flex flex-col justify-around items-center text-center rounded-2xl shadow-lg">
            {/* Imagen */}
            <img
                src={image || "https://via.placeholder.com/200"}
                alt="Foto"
                className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-gray-300"
            />

            {/* Nombre */}
            <h1 className="mt-4 text-xl md:text-2xl font-semibold font-family-primary">
                Juan Martín López Frau
            </h1>

            {/* Subtítulos */}
            <h2 className="text-second font-medium mt-2 text-sm md:text-base font-family-secundary">
                Estudiante de la Licenciatura en Ciencias de la Computación
            </h2>
            <h3 className="text-second font-medium text-sm md:text-base font-family-secundary">
                Full Stack Developer
            </h3>

            {/* Descripción */}
            <p className="mt-4 text-gray-600 text-xs md:text-sm px-4 font-family-secundary">
                Soy una persona comprometida, con experiencia en desarrollo de software, apasionado por el aprendizaje continuo y la resolución de problemas.
                Destaco por mi capacidad para trabajar en equipo y adaptarme a entornos dinámicos, logrando cumplir objetivos y aportar valor a los proyectos.
            </p>

            {/* Iconos de redes */}
            <div className="mt-4 flex w-full justify-around">
                <a href={url.github} target="_blank" rel="noopener noreferrer">
                    <VscGithubAlt size={35} className="text-second hover:text-second-dark" />
                </a>
                <a href={url.linkedin} target="_blank" rel="noopener noreferrer">
                    <SlSocialLinkedin size={35} className="text-second hover:text-second-dark" />
                </a>
                <a href={`mailto:${url.mail}`}>
                    <GoMail size={35} className="text-second hover:text-second-dark" />
                </a>
            </div>

            {/* Botón de descarga */}
            <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
            >
                <button className="bg-second text-white border-2 text-lg md:text-xl py-2 px-4 rounded-full transition font-family-primary hover:bg-transparent hover:text-second border-second">
                    {t("download")}
                </button>
            </a>
        </div>
    );
}

export default Profile;
