
window.translations = {
    es: translationsES,
    en: translationsEN
};

window.changeLanguage = function (lang) {
    document.querySelectorAll("[data-translate-key]").forEach(elem => {
        const key = elem.getAttribute("data-translate-key");
        elem.textContent = window.translations[lang][key];
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-change-lang]');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            window.changeLanguage(this.getAttribute('data-change-lang'));
        });
    });
    window.changeLanguage('en');
});