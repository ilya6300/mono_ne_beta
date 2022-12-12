"use strict";
// Переменные
const conatinerSimpleEvent = document.querySelector('.conatiner-simple-event');
const simpleEventTitle = document.querySelector('#simple-event-title');
const simpleEventText = document.querySelector('#simple-event-text');
const simpleEventButton = document.querySelector('#simple-event-btn');
const simpleEventObject4 = document.querySelector('.simple-event-object4');
const overlappingBoxOpasity = document.querySelector('.overlapping-box-opasity');
import { stepMovePlayer, collectionPlayer,getAttributePlayers, log} from "./app.js";
import { overlappingBox,recalculationCardPlayer } from "./cell.js";
let simpleEventCollection = [];
class cardEvent {
    constructor(title, text) {
      this.title = title;
      this.text = text; 
    }
    eventFunction() {
    }
}
// Шаблоны событий карт
// На здоровье
class SimpleEventAddHp2 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].hp = collectionPlayer[stepMovePlayer].hp + 2;

    }
}
class SimpleEventAddHp1 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].hp = collectionPlayer[stepMovePlayer].hp + 1;
    }
}
class SimpleEventRemoveHp1 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].hp = collectionPlayer[stepMovePlayer].hp - 1;
    }
}
// На атаку
class SimpleEventAddAttack1 extends cardEvent {
    evenetFunction() {
         collectionPlayer[stepMovePlayer].attack = collectionPlayer[stepMovePlayer].attack + 1;
    }
}
class SimpleEventRemoveAttack1 extends cardEvent {
    evenetFunction() {
         collectionPlayer[stepMovePlayer].attack = collectionPlayer[stepMovePlayer].attack - 1;
    }
}
// На золото
class SimpleEventAddGold1500 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money + 1500;
    }
}
class SimpleEventAddGold1000 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money + 1000;
    }
}
class SimpleEventAddGold500 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money + 500;
    }
}
class SimpleEventRemoveGold800 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money - 800;
    }
}
class SimpleEventRemoveGold450 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money - 450;
    }
}
// На броню
class SimpleEventAddArmor10 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].armor = collectionPlayer[stepMovePlayer].armor + 0.1;
    }
}
// Комбо
class SimpleEventAddAttack1RemoveGold300 extends cardEvent {
    evenetFunction() {
        collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money - 300;
        collectionPlayer[stepMovePlayer].attack = collectionPlayer[stepMovePlayer].attack + 1;
    }
}


// Создание карт
const simpleEventNo1 = new SimpleEventAddHp2('Шаман-травник', 'Шаман-старейшина открыл вам древнюю тайну трав + 2 здоровью', 2);
const simpleEventNo2 = new SimpleEventRemoveHp1('Болезнь', 'Вы подхватили болезнь - 1 здоровью');
const simpleEventNo3 = new SimpleEventAddHp1('Шаман-травник', 'Ваш знакомый шаман показал вам удивительную траву и её целебные свойства + 1 здоровью');
const simpleEventNo4 = new SimpleEventAddGold1500('Наследство', 'Вы получаете наследство + 1500 золота');
const simpleEventNo5 = new SimpleEventAddGold500('Ставка сыграла!', 'Вы поставили на турнирной арене на гладиатора, и ваша ставка сыграла. Заберите + 500 золота');
const simpleEventNo6 = new SimpleEventRemoveGold800('Вор!', 'На одной из карт ваших владений завёлся вор, ваши убытки составили - 800 золота');
const simpleEventNo7 = new SimpleEventAddAttack1RemoveGold300('Новое оружие', 'Ваше оружие уже совсем износилось, старый знакомый кузнец сковал вам новое за символическую плату - 300 золотых. + 1 к атаке');
const simpleEventNo8 = new SimpleEventAddAttack1('Тактик', 'В таверне вы познакомились с ветераном Великой войны. Он раскрыл вам секрет военной хитрости + 1 к атаке');
const simpleEventNo9 = new SimpleEventRemoveAttack1('Гадюка', 'Вы слышите шипение за спиной, ядовитая змея вцепилась в вашу боевую руку. Последствие яда удалось устранить, но слабость в руке осталась - 1 к атаке');
const simpleEventNo10 = new SimpleEventRemoveHp1('Засада', 'Вы угодили в засаду местных варваров, вам удалось отбиться, но ценой собственного здоровья - 1 к здоровью');
const simpleEventNo11 = new SimpleEventAddHp1('Тренировка', 'За долгие годы тренировок и войн, вы закалили своё здоровье + 1 здоровью');
const simpleEventNo12 = new SimpleEventAddAttack1('Опыт', 'За долгие годы тренировок и войн, вы отточили своё мастерство + 1 к атаке');
const simpleEventNo13 = new SimpleEventAddGold1000('Щедрый торговец', 'В одно из ваших владений заезжал очень богатый торговец, вы продали ему часть своих запасов + 1000 золота');
const simpleEventNo14 = new SimpleEventRemoveGold450('Пагубные привычки', 'После очередной битвы, вы зашли в таверну и пропустили одну кружечку, потом вторую, а затем и третью... - 450 золота');
const simpleEventNo15 = new SimpleEventAddGold500('Удача леприкона', 'Вы находите увесистый мешок золота + 500 золота');
const simpleEventNo16 = new SimpleEventAddArmor10('Рисковый спор', 'В таверне вы поспорили с пьяным легионером, и он проспорил вам свой нагрудник из закалённой стали + 10 к броне');
const simpleEventNo17 = new SimpleEventAddArmor10('Рисковый спор', 'В таверне вы поспорили с пьяным легионером, и он проспорил вам свои перчатки и сапоги из закалённой стали + 10 к броне');
const simpleEventNo18 = new SimpleEventAddArmor10('Рисковый спор', 'В таверне вы поспорили с пьяным легионером, и он проспорил вам свой шлем и щит из закалённой стали + 10 к броне');
const simpleEventNo19 = new SimpleEventRemoveGold800('Рисковый спор', 'В таверне вы поспорили с пьяным легионером, и проиграли спор - 800 золота');
const simpleEventNo20 = new SimpleEventAddGold1000('Жандарм', 'Двое чужаков в таверне, начали приставать к дочери хозяина. Вы выпроводили два пьяных тела на улицу и хозяин таверны вас вознаградил + 1000 золота');
// Загрузка страницы
let stepEventCard = 0;
export const onLoadCardEvent = () => {
    // Добавляем карты события в массив
    simpleEventCollection.push(simpleEventNo1, simpleEventNo2, simpleEventNo3, simpleEventNo4, simpleEventNo5, simpleEventNo6, simpleEventNo7, simpleEventNo8, simpleEventNo9, simpleEventNo10, simpleEventNo11, simpleEventNo12, simpleEventNo13, simpleEventNo14, simpleEventNo15, simpleEventNo16, simpleEventNo17, simpleEventNo18, simpleEventNo19, simpleEventNo20);
    // Перемешиваем массив
    simpleEventCollection.sort(()=>Math.random()-0.5);
    console.log(simpleEventCollection);
}
export const generationCardEvent = () => {
    overlappingBoxOpasity.classList.remove('hidden');
// Заполняем карту
    simpleEventObject4.classList.toggle('take-card-event');
    setTimeout(() => {
        simpleEventTitle.innerText = simpleEventCollection[stepEventCard].title;
        simpleEventText.innerText = simpleEventCollection[stepEventCard].text;
        conatinerSimpleEvent.classList.remove('hidden');
        overlappingBox.classList.remove('hidden');
    }, 1800);
}
simpleEventButton.onclick = () => {
    simpleEventObject4.classList.toggle('take-card-event');
    simpleEventCollection[stepEventCard].evenetFunction();
    conatinerSimpleEvent.classList.add('hidden');
    overlappingBox.classList.add('hidden');
    overlappingBoxOpasity.classList.add('hidden');
   // Функция получения атрибутов игркоов
   getAttributePlayers();
   // Функция записи атрибутов от игрока в краты
   recalculationCardPlayer();
   log.innerHTML += simpleEventCollection[stepEventCard].text + "<br>";
if ((stepEventCard + 1) < simpleEventCollection.length) {
    stepEventCard++;
} else {
    console.log('stepEventCard до - ' + stepEventCard);
    simpleEventCollection.sort(()=>Math.random()-0.5);
    stepEventCard = 0;
    console.log('stepEventCard после - ' + stepEventCard);
}
}