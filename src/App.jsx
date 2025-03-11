import { Profile, Information } from './sections';
import { useTranslation } from 'react-i18next';

function App() {
    const { i18n } = useTranslation(); // Accedemos a i18n para cambiar el idioma

    // Función para cambiar el idioma
    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // Cambia el idioma a 'es' o 'en'
    };

    return (
        <div className="bg-background min-h-screen w-screen flex flex-col lg:flex-row items-center justify-center lg:justify-around p-4 lg:p-0">
            {/* Botón de cambio de idioma (posición fija) */}
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')} // Alterna entre 'es' y 'en'
                    className="bg-second text-white px-4 py-2 rounded-full text-sm hover:bg-second-dark transition-colors"
                >
                    {i18n.language === 'es' ? 'EN' : 'ES'} {/* Muestra 'EN' si el idioma es español, y 'ES' si es inglés */}
                </button>
            </div>

            {/* Perfil (arriba en móvil, izquierda en desktop) */}
            <div className="w-full lg:w-auto">
                <Profile />
            </div>

            {/* Información (debajo en móvil, derecha en desktop) */}
            <div className="w-full lg:w-auto mt-5 md:mt-0">
                <Information />
            </div>
        </div>
    );
}

export default App;