alert('Это викторина по географии.\nЗа каждый правильный ответ даётся 10 баллов. В поле ввода данных необходимо ввести букву, соответствующую выбранному варианту ответа.')
let points = 0;
if (prompt('1. Государство Боливия расположено: \nа) в центральной Африке;\nб) в Северной Америке;\nв) в Южной Америке;\nг) в юго-восточной Азии.') == "в") {
    points += 10;
};
if (prompt('2. Какой океан самый большой? \nа) Тихий;\nб) Атлантический;\nв) Индийский;\nг) Северный Ледовитый.') == "а") {
    points += 10;
}
if (prompt('3. Наибольшей численностью пожилых людей (старше 60 лет) отличаются страны:\nа) СНГ;\nб) Западной Европы;\nв) Латинской Америки;\nг) Северной Америки.') == "б") {
    points += 10;
}
if (prompt('4. Выбрать строку, где все государства обладают богатыми лесными ресурсами:\nа) Россия, Канада, Бразилия;\nб) Бразилия, Япония, Монголия;\nв) Россия, Польша, Китай;\nг) США, Италия, Алжир.') == "а") {
    points += 10;
}
if (prompt('5. Какая из перечисленных городских агломераций является наиболее крупной по численности населения?\nа) Стамбул;\nб) Лондон;\nв) Пекин;\nг) Мехико.') == "в") {
    points += 10;
}
if (prompt('6. Главный морской порт Европы - это:\nа) Лондон;\nб) Гамбург;\nв) Роттердам;\nг) Вена.') == "в") {
    points += 10;
}
if (prompt('7. Главный показатель высокого уровня экономического развития:\nа) численность населения;\nб) ВВП на душу населения;\nв) плотность населения;\nг) цены на газеты и журналы.') == "б") {
    points += 10;
}
if (prompt('8. Организация ОПЕК объединяет:\nа) страны Востока;\nб) страны Азии;\nв) страны – экспортеры нефти;\nг) новые индустриальные страны.') == "в") {
    points += 10;
}
if (prompt('9. Регион – главная «горячая точка» мира:\n\nа) Европа;\nб) Южная Америка;\nв) Ближний Восток;\nг) Австралия.') == "в") {
    points += 10;
}
if (prompt('10. Укажите главную отрасль промышленности Европы:\nа) топливная промышленность;\nб) черная металлургия;\nв) машиностроение;\nг) пищевая промышленность.') == "в") {
    points += 10;
}
if (points == 100) {
    alert('Вы набрали ' + points + ' баллов из 100 возможных.\nВы — знаток географии!');
} else {
    alert('Вы набрали ' + points + ' баллов из 100 возможных.\n');
}