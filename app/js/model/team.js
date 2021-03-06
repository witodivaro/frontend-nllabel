const teamData = [
    {
        name: 'NightLoud',
        position: 'Основатель NL Label',
        description: 'Nightloud основал собственный лейбл в 2020 году, в возрасте 17 лет. В этот лейбл вложена вся его мечта - помочь молодым музыкантам пробраться на вершины музыкальных олимпов. И он готов действовать.',
        img: './img/skrillex-photo-desktop@1x.png',
    },
    {
        name: "Arseniy 'EPAM' Solaridze",
        position: 'Хип-хопер',
        description: 'Арсений всегда знал, что успешные хип-хоп исполнители - это те, что записывают музыку от души. Именно поэтому в его музыке можно прочувствовать все фибры его внутреннего состояния, и именно поэтому его так обожают фанаты!',
        img: './img/arseniy-solaridze-photo-desktop.jpg',
    },
    {
        name: 'Wito Divaro',
        position: 'Фристайлер',
        description: 'Wito Divaro начал свою карьеру хип-хоп фристайлера, в шутку записав пару треков. Он стал неотъемлимой частью команды Nightloud\'а, и теперь красуется на одном из этих слайдов!',
        img: './img/witodivaro-photo-desktop.jpg',
    },
    {
        name: "Maxim Plaxa",
        position: 'Гитарист',
        description: 'Максим Плакса - представитель эмо сообщества. Этот парень знает толк в музыке, а потому исполняет её на высшем уровне! Его умению ловко дёргать струны своими пальцами позавидует любая девушка!',
        img: './img/maxim-plaxa.png',
    },
    {
        name: "Amin Goma",
        position: 'Самир-Али',
        description: 'Гома Эль-Амин Самир-Али',
        img: './img/amin-goma.jpg',
    },
]

export default class Team {
    constructor() {
        this._data = teamData;
    }

    getData() {
        return this._data;
    }
}