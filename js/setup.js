var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list'); // список похожих персонажей
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content; // шаблон

var wizardName = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var wizardFamilyName = ["Да марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var wizardCoatColor = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var wizardEyesColor = ["black", "red", "blue", "eyllow", "green"];

var random = function (arr) {
    for (i = 0; i < arr.length; i++) {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }
};

var wizards = [
    {
        name: random(wizardName) + " " + random(wizardFamilyName),
        coatColor: random(wizardCoatColor),
        eyesColor: random(wizardEyesColor)
    },
    {
        name: random(wizardName) + " " + random(wizardFamilyName),
        coatColor: random(wizardCoatColor),
        eyesColor: random(wizardEyesColor)
    },
    {
        name: random(wizardName) + " " + random(wizardFamilyName),
        coatColor: random(wizardCoatColor),
        eyesColor: random(wizardEyesColor)
    },
    {
        name: random(wizardName) + " " + random(wizardFamilyName),
        coatColor: random(wizardCoatColor),
        eyesColor: random(wizardEyesColor)
    }
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true); // Делаем копию шаблона
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name; // Добавляем имена волшебникам
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor; // Добавляем цвета мантии
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor; // Добавляем цвет глаз 
  similarListElement.appendChild(wizardElement);
}
