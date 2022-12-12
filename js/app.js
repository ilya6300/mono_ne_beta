"use strict";

// Временные переменные и функции начало

const testButtonBegin = document.querySelector("#test-button-begin");

// Врнменнные переменные и функции конец
const selectPlayersLog = document.querySelector("#select-players-log");
const rollButton = document.querySelector("#rollButton");
const endTurn = document.querySelector("#end-turn");
export const log = document.querySelector("#log");
const playerOneInterfaceAvatar = document.querySelector(
  "#player-1-interface__avatar"
);
const playerTwoInterfaceAvatar = document.querySelector(
  "#player-2-interface__avatar"
);
const playerThreeInterfaceAvatar = document.querySelector(
  "#player-3-interface__avatar"
);
const playerFourInterfaceAvatar = document.querySelector(
  "#player-4-interface__avatar"
);
// режим разработчика панель начало
const cheatPanel = document.querySelector("#cheat-panel");
const btnCheatPanel = document.querySelector("#btn-cheat-panel");
let cheatPanelMinNumber = document.querySelector("#cheat-panel--min-number");
let cheatPanelMaxNumber = document.querySelector("#cheat-panel--max-number");
const cheatPanelMinButton = document.querySelector("#cheat-panel--min-btn");
const cheatPanelMaxButton = document.querySelector("#cheat-panel--max-btn");
// статы
let cheatPanelAttackNumber = document.querySelector(
  "#cheat-panel--attack-number"
);
const cheatPanelAttackBtn = document.querySelector("#cheat-panel--attack-btn");
let cheatPanelHpNumber = document.querySelector("#cheat-panel--hp-number");
const cheatPanelHpBtn = document.querySelector("#cheat-panel--hp-btn");
let cheatPanelArmorNumber = document.querySelector(
  "#cheat-panel--armor-number"
);
const cheatPanelArmorBtn = document.querySelector("#cheat-panel--armor-btn");
let cheatPanelAuthorityNumber = document.querySelector(
  "#cheat-panel--authority-number"
);
const cheatPanelAuthorityBtn = document.querySelector(
  "#cheat-panel--authority-btn"
);
let cheatPanelGoldNumber = document.querySelector("#cheat-panel--gold-number");
const cheatPanelGoldBtn = document.querySelector("#cheat-panel--gold-btn");
let minRoll = 2;
let maxRoll = 12;
// Показать/убрать панель разработчика
const pressShiftCheatPanel = () => {
  document.addEventListener('keyup', function (event) {
    if (event.key === "Shift") {
      btnCheatPanel.classList.toggle('hidden');
      console.log('Волшебная кнопка');
    }
  })
}
// 
btnCheatPanel.onclick = () => {
  cheatPanel.classList.toggle("hidden");
};
cheatPanelMinButton.onclick = () => {
  minRoll = Number(cheatPanelMinNumber.value);
  cheatPanelMinNumber.value = "";
};
cheatPanelMaxButton.onclick = () => {
  maxRoll = Number(cheatPanelMaxNumber.value);
  cheatPanelMaxNumber.value = "";
};
// Статы
cheatPanelAttackBtn.onclick = () => {
  // cheatPanelAttackNumber = Number(cheatPanelAttackNumber.value);
  collectionPlayer[stepMovePlayer].attack = Number(
    cheatPanelAttackNumber.value
  );
  // Функция получения атрибутов игркоов
  getAttributePlayers();
  // Функция записи атрибутов от игрока в краты
  recalculationCardPlayer();
  cheatPanelAttackNumber.value = "";
};
cheatPanelHpBtn.onclick = () => {
  collectionPlayer[stepMovePlayer].hp = Number(cheatPanelHpNumber.value);
  // Функция получения атрибутов игркоов
  getAttributePlayers();
  // Функция записи атрибутов от игрока в краты
  recalculationCardPlayer();
  cheatPanelHpNumber.value = "";
};
cheatPanelArmorBtn.onclick = () => {
  collectionPlayer[stepMovePlayer].armor = Number(cheatPanelArmorNumber.value);
  // Функция получения атрибутов игркоов
  getAttributePlayers();
  // Функция записи атрибутов от игрока в краты
  recalculationCardPlayer();
  cheatPanelArmorNumber.value = "";
};
cheatPanelAuthorityBtn.onclick = () => {
  collectionPlayer[stepMovePlayer].authority = Number(
    cheatPanelAuthorityNumber.value
  );
  // Функция получения атрибутов игркоов
  getAttributePlayers();
  // Функция записи атрибутов от игрока в краты
  recalculationCardPlayer();
  cheatPanelAuthorityNumber.value = "";
};
cheatPanelGoldBtn.onclick = () => {
  collectionPlayer[stepMovePlayer].money = Number(cheatPanelGoldNumber.value);
  // Функция получения атрибутов игркоов
  getAttributePlayers();
  // Функция записи атрибутов от игрока в краты
  recalculationCardPlayer();
  cheatPanelGoldNumber.value = "";
};
// Получить характеристики героя
let cheatPanelAttackGet = document.querySelector("#cheat-panel--attack-get");
let cheatPanelHpGet = document.querySelector("#cheat-panel--hp-get");
let cheatPanelArmorGet = document.querySelector("#cheat-panel--armor-get");
let cheatPanelAuthorityGet = document.querySelector("#cheat-panel--authority-get");
let cheatPanelGoldGet = document.querySelector("#cheat-panel--gold-get");
let cheatPanelStartGoldGet = document.querySelector("#cheat-panel--start-gold-get");
const cheatPanelGetAttributePlayer = document.querySelector("#cheat-panel--get-attribute-player");
cheatPanelGetAttributePlayer.onclick = () => {
  cheatPanelAttackGet.value = collectionPlayer[stepMovePlayer].attack;
  cheatPanelHpGet.value = collectionPlayer[stepMovePlayer].hp;
  cheatPanelArmorGet.value = collectionPlayer[stepMovePlayer].armor;
  cheatPanelAuthorityGet.value = collectionPlayer[stepMovePlayer].authority;
  cheatPanelGoldGet.value = collectionPlayer[stepMovePlayer].money;
  cheatPanelStartGoldGet.value = collectionPlayer[stepMovePlayer].startMoney;
};
// ПолучитPхараMристиG клтки
let cheatPanelGetAttributeCell = document.querySelector("#cheat-panel--get-attribute-cell");
let cheatPanelMasterGetCell = document.querySelector("#cheat-panel--master-get-cell");
let cheatPanelAttackGetCell = document.querySelector("#cheat-panel--attack-get-cell");
let cheatPanelHpGetCell = document.querySelector("#cheat-panel--hp-get-cell");
let cheatPanelAuthorityGetCell = document.querySelector("#cheat-panel--authority-get-cell");
cheatPanelGetAttributeCell.onclick = () => {
cheatPanelMasterGetCell.value = collectionCell[endPosition].master;
cheatPanelAttackGetCell.value = collectionCell[endPosition].attack;
cheatPanelHpGetCell.value = collectionCell[endPosition].hp;
cheatPanelAuthorityGetCell.value = collectionCell[endPosition].authority;
}
// режим разработчика панель конец
// Значения поля
import {
  collectionCell,
  scaleCellTopBottom,
  scaleCellRight,
  scaleCellLeft,
  integrationStatCardStartGame,
  containerPlayerCard,
  containerPlayerCardFlex,
  overlappingBox,
  recalculationCardPlayer,
} from "./cell.js";
import {
  interactionColorCard,
  interactionContractCard,
  interactionEventCard,
  bankrupt,
  cellAttackContainer,
} from "./interaction.js";
import { onLoadCardEvent } from "./card-event.js";
// рандом
let randomRoll;
let startPosition = 0;
export let endPosition = startPosition;
let more;
let calculation = 0;
let start;

// Движение игрока начало
let moveTaimer;
let getCoordinats;
export let stepMovePlayer;
// Начало игры на поле

function getCoords(newPlayerCoordinats) {
  moveTaimer = setInterval(() => {
    calculation = calculation + 1;
    endPosition = endPosition + 1;
    getCoordinats = collectionCell[endPosition].obj.getBoundingClientRect();
    if (calculation !== randomRoll) {
      newPlayerCoordinats.style.top = getCoordinats.top + "px";
      newPlayerCoordinats.style.left = getCoordinats.left + "px";
    } else if (calculation === randomRoll) {
      newPlayerCoordinats.style.top = getCoordinats.top + "px";
      newPlayerCoordinats.style.left = getCoordinats.left + "px";
      log.innerHTML +=
        collectionPlayer[stepMovePlayer].name +
        " останавливается на клетке - " +
        collectionCell[endPosition].name +
        "<br>";
      flagSpace = 99;
      interactionColorCard();
      interactionContractCard();
      interactionEventCard();
      setTimeout(() => {
        endTurn.classList.remove("deactivation");
        setTimeout(() => {
          flagSpace = 2;
        }, 500);
      }, 1000);
      log.scrollBy(100, 100);
      clearInterval(moveTaimer);
    }
  }, 500);
}

// Функция до старта

function getCoordsBeforeStart(newPlayerCoordinats) {
  if (endPosition !== 35) {
    moveTaimer = setInterval(() => {
      calculation = calculation + 1;
      endPosition = endPosition + 1;
      getCoordinats = collectionCell[endPosition].obj.getBoundingClientRect();
      if (calculation !== start) {
        newPlayerCoordinats.style.top = getCoordinats.top + "px";
        newPlayerCoordinats.style.left = getCoordinats.left + "px";
      } else if (calculation === start) {
        newPlayerCoordinats.style.top = getCoordinats.top + "px";
        newPlayerCoordinats.style.left = getCoordinats.left + "px";
        getCoordsStart(collectionPlayer[stepMovePlayer].obj);
        setTimeout(() => {
          endTurn.classList.remove("deactivation");
          setTimeout(() => {
            flagSpace = 2;
          }, 500);
        }, 1000);

        log.scrollBy(100, 100);
        clearInterval(moveTaimer);
      }
    }, 500);
  } else if (endPosition == 35) {
    getCoordsStart(collectionPlayer[stepMovePlayer].obj);
  } else if (endPosition + randomRoll == collectionCell.length) {
    moveTaimer = setInterval(() => {
      calculation = calculation + 1;
      endPosition = endPosition + 1;
      getCoordinats = collectionCell[0].obj.getBoundingClientRect();
      newPlayerCoordinats.style.top = getCoordinats.top + "px";
      newPlayerCoordinats.style.left = getCoordinats.left + "px";
      setTimeout(() => {
        endTurn.classList.remove("deactivation");
        setTimeout(() => {
          flagSpace = 2;
        }, 500);
      }, 1000);

      log.scrollBy(100, 100);
      clearInterval(moveTaimer);
    }, 500);
  }
}

// Функция на старт

function getCoordsStart(newPlayerCoordinats) {
  endPosition = 0;
  calculation = 0;
  setTimeout(() => {
    console.log("Минуя старт!");
    // расчёт начисления за старт
    getCoordinats = collectionCell[0].obj.getBoundingClientRect();
    collectionPlayer[stepMovePlayer].money =
      collectionPlayer[stepMovePlayer].money +
      collectionPlayer[stepMovePlayer].startMoney -
      collectionPlayer[stepMovePlayer].consumption;
    log.innerHTML +=
      collectionPlayer[stepMovePlayer].name +
      " получает - " +
      (collectionPlayer[stepMovePlayer].startMoney -
        collectionPlayer[stepMovePlayer].consumption) +
      " за проход круга" +
      "<br>";
    log.scrollBy(100, 100);
    getAttributePlayers();
    newPlayerCoordinats.style.top = getCoordinats.top + "px";
    newPlayerCoordinats.style.left = getCoordinats.left + "px";
    // Бонус за 5 кругов
    collectionPlayer[stepMovePlayer].round++;
    console.log(
      "collectionPlayer[stepMovePlayer].round - " +
        collectionPlayer[stepMovePlayer].round
    );
    bonusPlayerRound();
    //
    if (more >= 1) {
      setTimeout(() => {
        getCoordsAfterStart(collectionPlayer[stepMovePlayer].obj);
      }, 500);
    } else return;
  }, 500);
}

// Функция движения после старта

function getCoordsAfterStart(newPlayerCoordinats) {
  moveTaimer = setInterval(() => {
    calculation = calculation + 1;
    endPosition = endPosition + 1;
    getCoordinats = collectionCell[endPosition].obj.getBoundingClientRect();
    if (calculation !== more) {
      newPlayerCoordinats.style.top = getCoordinats.top + "px";
      newPlayerCoordinats.style.left = getCoordinats.left + "px";
    } else if (calculation === more) {
      newPlayerCoordinats.style.top = getCoordinats.top + "px";
      newPlayerCoordinats.style.left = getCoordinats.left + "px";
      log.innerHTML +=
        collectionPlayer[stepMovePlayer].name +
        " останавливается на клетке - " +
        collectionCell[endPosition].name +
        "<br>";
      log.scrollBy(100, 100);
      setTimeout(() => {
        endTurn.classList.remove("deactivation");
        setTimeout(() => {
          flagSpace = 2;
        }, 500);
      }, 1000);

      clearInterval(moveTaimer);
      flagSpace = 99;
      interactionColorCard();
      interactionContractCard();
      interactionEventCard();
    }
  }, 500);
}

// Чисто на старт

// Функция движения
// рандом
const getRandomRoll = (min, max) => {
  randomRoll = Math.floor(min + Math.random() * (max + 1 - min));
};
function movePlayer() {
  console.log("minRoll " + minRoll);
  console.log("maxRoll " + maxRoll);
  getRandomRoll(minRoll, maxRoll);
  console.log(randomRoll);
  log.innerHTML +=
    collectionPlayer[stepMovePlayer].name +
    " бросил кубик и выпало: " +
    randomRoll +
    "<br>";
  log.scrollBy(100, 100);
  if (endPosition + randomRoll < collectionCell.length) {
    getCoords(collectionPlayer[stepMovePlayer].obj);
    startPosition = endPosition;
  } else if (collectionCell.length < endPosition + randomRoll) {
    start = collectionCell.length - 1 - endPosition;
    more = endPosition + randomRoll - collectionCell.length;
    getCoordsBeforeStart(collectionPlayer[stepMovePlayer].obj);
  } else if ((collectionCell.length = endPosition + randomRoll)) {
    start = collectionCell.length - 1 - endPosition;
    getCoordsBeforeStart(collectionPlayer[stepMovePlayer].obj);
  }
}
export let flagSpace = 99;
const pressKeyboard = () => {
  console.log("Подготовка к пробелу");
  document.addEventListener("keyup", function (e) {
    if (e.keyCode == "32") {
      functionKeyboardSpace();
      flagSpace = 99;
    }
  });
};
// Бросить кубик
const rollButtonFunction = () => {
  rollButton.classList.toggle("deactivation");
  endTurn.classList.add("deactivation");
  console.log("ходит - " + collectionPlayer[stepMovePlayer].name);
  endPosition = collectionPlayer[stepMovePlayer].endPosition;
  more = 0;
  calculation = 0;
  movePlayer();
  flagSpace = 99;
};
rollButton.onclick = function () {
  rollButtonFunction();
};

// Завершить ход
let bankruptTimerID;

const endTurnFunction = () => {
  rollButton.classList.toggle("deactivation");
  endTurn.classList.add("deactivation");
  collectionPlayer[stepMovePlayer].endPosition = endPosition;
  //
  bankruptTimerID = setInterval(() => {
    if (stepMovePlayer + 1 == collectionPlayer.length) {
      stepMovePlayer = 0;
    } else {
      stepMovePlayer++;
    }
    if (collectionPlayer[stepMovePlayer].bankrupt === 0) {
      log.innerHTML +=
        collectionPlayer[stepMovePlayer].name + " бросай кубики" + "<br>";
      log.scrollBy(100, 100);
      clearInterval(bankruptTimerID);
    }
  }, 100);
  setTimeout(() => {
    flagSpace = 1;
  }, 500);
};
endTurn.onclick = function () {
  endTurnFunction();
};
// Движение игрока конец
// Игроки начало
// Выбор играков меню начало
const playerOneObj = document.querySelector("#player-1");
const playerTwoObj = document.querySelector("#player-2");
const playerThreeObj = document.querySelector("#player-3");
const playerFourObj = document.querySelector("#player-4");

const testConfirmSelect = document.querySelector("#test-confirm-select");
const randomNamePlayerOne = document.querySelector("#random-name-player-one");
const playerOneSelectId = document.querySelector("#player-one-select-id");
const addPlayerOne = document.querySelector("#add-player-one");

const randomNamePlayerTwo = document.querySelector("#random-name-player-two");
const playerTwoSelectId = document.querySelector("#player-two-select-id");
const addPlayerTwo = document.querySelector("#add-player-two");

const randomNamePlayerThree = document.querySelector(
  "#random-name-player-three"
);
const playerThreeSelectId = document.querySelector("#player-three-select-id");
const addPlayerThree = document.querySelector("#add-player-three");

const randomNamePlayerFour = document.querySelector("#random-name-player-four");
const playerFourSelectId = document.querySelector("#player-four-select-id");
const addPlayerFour = document.querySelector("#add-player-four");

let getRandomName;
let randomNamePlayer;
let correctionRandomNameInterval;
let confirm;
let confirmTest;
const cardFigure = document.querySelectorAll(".card-figure");

export const playerOne = {
  created: 1,
  name: "",
  avatar: playerOneInterfaceAvatar,
  obj: playerOneObj,
  // money: 5000,
  money: 5000,
  startMoney: 1000,
  endPosition: 0,
  attack: 4,
  hp: 7,
  armor: 0,
  authority: 0,
  consumption: 0,
  img: "",
  bankrupt: 0,
  color: "#1c17e6",
  round: 0,
  interface: document.querySelector(".player-1-interface"),
};
export const playerTwo = {
  created: 0,
  // name: '',
  // obj: playerTwoObj,
  // money: '5000',
};
export const playerThree = {
  created: 0,
  // name: '',
  // obj: playerThreeObj,
  // money: '5000',
};
export const playerFour = {
  created: 0,
  // name: '',
  // obj: playerFourObj,
  // money: '5000',
};
const collectionRandomName = [
  "На пафосе",
  "Понторез",
  "Киборг",
  'Участник шоу "Дом-2"',
  "Алёша",
  "Самый умный",
  "Кирпич",
  "Барсик",
  "Предприниматель",
  "Джони",
  "Пробитый",
  "Добряк",
  "Злой утёнок",
  "Критующий",
  "Усейн Болт",
  "Стиляга",
  "Безотказный",
  "Рок-звезда",
  "Ниндзя",
  "Ребёнок",
  "Отец троих детей",
  "Фитоняшка",
  "Блогер",
  "Дворник",
  "Терминатор",
  "Спортсмен",
  "Шоумен",
  "Безработный",
  "Игнат",
  "Анжела",
  "Двоечник из Шаолиня",
  "Внук Шанг-Цунга",
  "Кунг-фу пёс",
];
export const collectionPlayer = [playerOne];

// Интрефейс игроков начало
export let playerInterfaceName;
export let playerInterfaceGold;
export let playerInterfaceAttack;
export let playerInterfaceHp;
export let playerInterfaceArmor;
export let playerInterfaceAuthority;
export let playerInterfaceGoldStart;

let p;
// Функция получения атрибутов игркоов
export const getAttributePlayers = () => {
  for (p = 0; p < collectionPlayer.length; p++) {
    playerInterfaceName = document.querySelector(
      "#player-" + (p + 1) + "-interface-name"
    );
    playerInterfaceGold = document.querySelector(
      "#player-" + (p + 1) + "-interface-gold"
    );
    playerInterfaceAttack = document.querySelector(
      "#player-" + (p + 1) + "-interface-attack"
    );
    playerInterfaceHp = document.querySelector(
      "#player-" + (p + 1) + "-interface-hp"
    );
    playerInterfaceArmor = document.querySelector(
      "#player-" + (p + 1) + "-interface-armor"
    );
    playerInterfaceAuthority = document.querySelector(
      "#player-" + (p + 1) + "-interface-authority"
    );
    playerInterfaceGoldStart = document.querySelector(
      "#player-" + (p + 1) + "-interface-gold-start"
    );
    playerInterfaceName.innerText = collectionPlayer[p].name;
    playerInterfaceGold.innerText = collectionPlayer[p].money;
    playerInterfaceAttack.innerText = collectionPlayer[p].attack;
    playerInterfaceHp.innerText = collectionPlayer[p].hp;
    playerInterfaceArmor.innerText = collectionPlayer[p].armor * 100 + "%";
    playerInterfaceAuthority.innerText = collectionPlayer[p].authority;
    playerInterfaceGoldStart.innerText = collectionPlayer[p].startMoney;
  }
};

// Выбор фигурок игроков
// let stepCollectionPlayers;
export let stepPlayer;
const logSelect = ["Добро пожаловать, игроки!"];
let logMessage;
let confirmClass;

// Функция логирования при выборе игроков
function logSelectMessageFunction(playerThisName) {
  logMessage = playerThisName + ", выбери свою фигурку.";
  logSelect.push(logMessage);
}

const stepPlayerSelectF = () => {
  // Выбор фигурок
  cardFigure.forEach((cardFigureElement) => {
    cardFigureElement.addEventListener("click", function (event) {
      // Убираем у всех карточек фигур стиль, чтобы их можно было выбрать

      // Собираем элемент id в полноценный #id
      confirm = event.target.getAttribute("id");
      confirmTest = document.querySelector("#" + confirm);
      confirmClass = document.querySelector("#" + confirm + "Class");
      // Выводим информацию в лог
      // Применение к фигурке стиля, чтобы его нельзя было выбрать
      if (
        !confirmTest.classList.contains("select-confirm") &&
        !confirmTest.classList.contains("min")
      ) {
        // confirmTest.classList.add("select-confirm");
        collectionPlayer[stepPlayer].obj.style.background = "url(./img/" + confirm + ".png) 120%/70% no-repeat";
        collectionPlayer[stepPlayer].img = "url(./img/" + confirm + ".png) 150%/100% no-repeat";
        collectionPlayer[stepPlayer].avatar.style.background = "url(./img/" + confirm + ".png) 150%/100% no-repeat";
        collectionPlayer[stepPlayer].img = "url(./img/" + confirm + ".png) 150%/100% no-repeat";
      } else if (
        !confirmTest.classList.contains("select-confirm") &&
        confirmTest.classList.contains("min")
      ) {
        // confirmTest.classList.add("select-confirm");
        collectionPlayer[stepPlayer].obj.style.background = "url(./img/" + confirm + ".png) 100%/100% no-repeat";
        collectionPlayer[stepPlayer].img = "url(./img/" + confirm + ".png) 150%/100% no-repeat";
        collectionPlayer[stepPlayer].avatar.style.background = "url(./img/" + confirm + ".png) 150%/100% no-repeat";
        collectionPlayer[stepPlayer].img = "url(./img/" + confirm + ".png) 150%/100% no-repeat";
      }
    });

    // Подтвердить выбор
    testConfirmSelect.onclick = function () {
      // Если фигурка выбрана
      if (collectionPlayer[stepPlayer].obj.style.background !== "") {
        confirmTest.classList.add("select-confirm");
        confirmClass.style.display = "none";
        selectPlayersLog.innerHTML +=
          collectionPlayer[stepPlayer].name + " выбрал - " + confirm + "<br>";
        selectPlayersLog.scrollBy(100, 100);
        stepPlayer++;
        if (stepPlayer + 1 <= collectionPlayer.length) {
          selectPlayersLog.innerHTML +=
            collectionPlayer[stepPlayer].name +
            ", выбери свою фигурку." +
            "<br>";
          selectPlayersLog.scrollBy(100, 100);
          stepPlayerSelectF();
        } else {
          selectPlayersLog.innerHTML += "Игра начнётся через:" + "<br>";
          let startGameGo = 4;
          let startGameTimer = setInterval(() => {
            startGameGo--;
            selectPlayersLog.innerHTML += startGameGo + "<br>";
            selectPlayersLog.scrollBy(100, 100);
          }, 1000);
          setTimeout(() => {
            clearInterval(startGameTimer);
            selectPlayers.style.display = "none";
            stepMovePlayer = 0;
            log.innerHTML += "Добро пожаловать на поле!" + "<br>";
            log.innerHTML +=
              "Игрок " + playerOne.name + ", бросай кубик!" + "<br>";
            setTimeout(() => {
              flagSpace = 1;
            }, 500);
          }, 3000);
          console.log("Запускаем игру");
          onLoadCardEvent();
          selectPlayersLog.scrollBy(100, 100);
          getAttributePlayers();
        }
      } else {
        selectPlayersLog.innerHTML +=
          "Внимание! " +
          collectionPlayer[stepPlayer].name +
          ", выбери свою фигурку." +
          "<br>";
        selectPlayersLog.scrollBy(100, 100);
        return;
      }
    };
  });
};

const selectFigureStart = () => {
  stepPlayer = 0;
  stepPlayerSelectF(collectionPlayer[stepPlayer].obj);
  logSelectMessageFunction(playerOne.name);
  logSelect.forEach((logSelectElement) => {
    selectPlayersLog.innerHTML += logSelectElement + "<br>";
  });
};

// Количество игроков и их имена

randomNamePlayerOne.onclick = () => {
  getRandomName = Math.floor(Math.random() * collectionRandomName.length);
  randomNamePlayer = collectionRandomName[getRandomName];
  if (
    randomNamePlayer !== playerFour.name &&
    randomNamePlayer !== playerTwo.name &&
    randomNamePlayer !== playerThree.name
  ) {
    playerOneSelectId.value = randomNamePlayer;
    playerOne.name = randomNamePlayer;
  } else {
    correctionRandomNameInterval = setInterval(() => {
      if (
        randomNamePlayer !== playerFour.name &&
        randomNamePlayer !== playerTwo.name &&
        randomNamePlayer !== playerThree.name
      ) {
        playerOneSelectId.value = randomNamePlayer;
        playerOne.name = randomNamePlayer;
        clearInterval(correctionRandomNameInterval);
      } else {
        getRandomName = Math.floor(Math.random() * collectionRandomName.length);
        randomNamePlayer = collectionRandomName[getRandomName];
        playerOneSelectId.value = randomNamePlayer;
        playerOne.name = randomNamePlayer;
      }
    }, 20);
  }
  addPlayerOne.style.background = "url(../img/icon/user.png)";
};

addPlayerTwo.onclick = () => {
  if (playerTwo.created == 0) {
    collectionPlayer.push(playerTwo);
    addPlayerThree.style.display = "block";
    playerTwo.created = 1;
    // Стилизация
    playerTwoObj.style.display = "block";
    // player2Interface.style.display = "flex";
    randomNamePlayerTwo.style.display = "block";
    playerTwoSelectId.style.display = "block";
    addPlayerTwo.style.background = "url(../img/icon/minus.png) 32px/32px";
    // Наполнение объекта
    playerTwo.name = "";
    playerTwo.avatar = playerTwoInterfaceAvatar;
    playerTwo.money = 5000;
    playerTwo.startMoney = 1000;
    playerTwo.obj = playerTwoObj;
    playerTwo.endPosition = 0;
    playerTwo.attack = 4;
    playerTwo.hp = 7;
    playerTwo.armor = 0;
    playerTwo.authority = 0;
    playerTwo.consumption = 0;
    playerTwo.img = "";
    playerTwo.bankrupt = 0;
    playerTwo.color = "#198d16";
    playerTwo.round = 0;
    playerTwo.interface = document.querySelector(".player-2-interface");
    playerTwo.interface.style.display = "flex";
    // Случайное имя
    randomNamePlayerTwo.onclick = () => {
      getRandomName = Math.floor(Math.random() * collectionRandomName.length);
      randomNamePlayer = collectionRandomName[getRandomName];
      if (
        randomNamePlayer !== playerFour.name &&
        randomNamePlayer !== playerOne.name &&
        randomNamePlayer !== playerThree.name
      ) {
        playerTwoSelectId.value = randomNamePlayer;
        playerTwo.name = randomNamePlayer;
      } else {
        correctionRandomNameInterval = setInterval(() => {
          if (
            randomNamePlayer !== playerFour.name &&
            randomNamePlayer !== playerOne.name &&
            randomNamePlayer !== playerThree.name
          ) {
            playerTwoSelectId.value = randomNamePlayer;
            playerTwo.name = randomNamePlayer;
            clearInterval(correctionRandomNameInterval);
          } else {
            getRandomName = Math.floor(
              Math.random() * collectionRandomName.length
            );
            randomNamePlayer = collectionRandomName[getRandomName];
            playerTwoSelectId.value = randomNamePlayer;
            playerTwo.name = randomNamePlayer;
          }
        }, 20);
      }
    };
  } else {
    playerTwo.interface.style.display = "none";
    collectionPlayer.pop(playerTwo);
    addPlayerThree.style.display = "none";
    playerTwo.created = 0;
    // Стилизация
    playerTwoObj.style.display = "none";
    delete playerTwo.obj;
    randomNamePlayerTwo.style.display = "none";
    playerTwoSelectId.style.display = "none";
    addPlayerTwo.style.background = "url(../img/icon/add_player.png) 32px/32px";
    // Наполнение объекта
    playerTwoSelectId.value = "";
    delete playerTwo.name;
    delete playerTwo.endPosition;
    playerTwo.maney = 5000;
  }
};

addPlayerThree.onclick = () => {
  if (playerThree.created == 0) {
    collectionPlayer.push(playerThree);
    addPlayerTwo.style.pointerEvents = "none";
    addPlayerFour.style.display = "block";
    playerThree.created = 1;
    // Стилизация
    playerThreeObj.style.display = "block";
    // player3Interface.style.display = "flex";
    randomNamePlayerThree.style.display = "block";
    playerThreeSelectId.style.display = "block";
    addPlayerThree.style.background = "url(../img/icon/minus.png)";
    // Наполнение объекта
    playerThreeSelectId.value = "";
    playerThree.name = "";
    playerThree.avatar = playerThreeInterfaceAvatar;
    playerThree.money = 5000;
    playerThree.startMoney = 1000;
    playerThree.endPosition = 0;
    playerThree.obj = playerThreeObj;
    playerThree.attack = 4;
    playerThree.hp = 7;
    playerThree.armor = 0;
    playerThree.authority = 0;
    playerThree.consumption = 0;
    playerThree.img = "";
    playerThree.bankrupt = 0;
    playerThree.color = "#c211d6";
    playerThree.round = 0;
    playerThree.interface = document.querySelector(".player-3-interface");
    playerThree.interface.style.display = "flex";
    // Случайное имя
    randomNamePlayerThree.onclick = () => {
      getRandomName = Math.floor(Math.random() * collectionRandomName.length);
      randomNamePlayer = collectionRandomName[getRandomName];
      if (
        randomNamePlayer !== playerFour.name &&
        randomNamePlayer !== playerTwo.name &&
        randomNamePlayer !== playerOne.name
      ) {
        playerThreeSelectId.value = randomNamePlayer;
        playerThree.name = randomNamePlayer;
      } else {
        correctionRandomNameInterval = setInterval(() => {
          if (
            randomNamePlayer !== playerFour.name &&
            randomNamePlayer !== playerTwo.name &&
            randomNamePlayer !== playerOne.name
          ) {
            playerThreeSelectId.value = randomNamePlayer;
            playerThree.name = randomNamePlayer;
            clearInterval(correctionRandomNameInterval);
          } else {
            getRandomName = Math.floor(
              Math.random() * collectionRandomName.length
            );
            randomNamePlayer = collectionRandomName[getRandomName];
            playerThreeSelectId.value = randomNamePlayer;
            playerThree.name = randomNamePlayer;
          }
        }, 20);
      }
    };
  } else {
    playerThree.interface.style.display = "none";
    collectionPlayer.pop(playerThree);
    addPlayerFour.style.display = "none";
    addPlayerTwo.style.pointerEvents = "visible";
    playerThree.created = 0;
    // Стилизация
    playerThreeObj.style.display = "none";
    randomNamePlayerThree.style.display = "none";
    playerThreeSelectId.style.display = "none";
    addPlayerThree.style.background = "url(../img/icon/add_player.png) 32px/32px";
    // Наполнение объекта
    playerThreeSelectId.value = "";
    delete playerThree.name;
    delete playerThree.obj;
    delete playerThree.endPosition;
    playerThree.maney = 5000;
  }
};

addPlayerFour.onclick = () => {
  if (playerFour.created == 0) {
    collectionPlayer.push(playerFour);
    addPlayerThree.style.pointerEvents = "none";
    playerFour.created = 1;
    // стилизация
    playerFourObj.style.display = "block";
    // player4Interface.style.display = "flex";
    randomNamePlayerFour.style.display = "block";
    playerFourSelectId.style.display = "block";
    addPlayerFour.style.background = "url(../img/icon/minus.png)";
    // Наполнение объекта
    playerFour.name = "";
    playerFour.avatar = playerFourInterfaceAvatar;
    playerFour.money = 5000;
    playerFour.startMoney = 1000;
    playerFour.obj = playerFourObj;
    playerFour.endPosition = 0;
    playerFour.attack = 4;
    playerFour.hp = 7;
    playerFour.armor = 0;
    playerFour.authority = 0;
    playerFour.consumption = 0;
    playerFour.img = "";
    playerFour.bankrupt = 0;
    playerFour.color = "#f2ff00d9";
    playerFour.round = 0;
    playerFour.interface = document.querySelector(".player-4-interface");
    playerFour.interface.style.display = "flex";
    // Случайное имя
    randomNamePlayerFour.onclick = () => {
      getRandomName = Math.floor(Math.random() * collectionRandomName.length);
      randomNamePlayer = collectionRandomName[getRandomName];
      if (
        randomNamePlayer !== playerOne.name &&
        randomNamePlayer !== playerTwo.name &&
        randomNamePlayer !== playerThree.name
      ) {
        playerFourSelectId.value = randomNamePlayer;
        playerFour.name = randomNamePlayer;
      } else {
        correctionRandomNameInterval = setInterval(() => {
          if (
            randomNamePlayer !== playerOne.name &&
            randomNamePlayer !== playerTwo.name &&
            randomNamePlayer !== playerThree.name
          ) {
            playerFourSelectId.value = randomNamePlayer;
            playerFour.name = randomNamePlayer;
            clearInterval(correctionRandomNameInterval);
          } else {
            getRandomName = Math.floor(
              Math.random() * collectionRandomName.length
            );
            randomNamePlayer = collectionRandomName[getRandomName];
            playerFourSelectId.value = randomNamePlayer;
            playerFour.name = randomNamePlayer;
          }
        }, 20);
      }
    };
  } else {
    playerFour.interface.style.display = "none";
    collectionPlayer.pop(playerFour);
    addPlayerThree.style.pointerEvents = "visible";
    playerFour.created = 0;
    // Стилизация
    playerFourObj.style.display = "none";
    randomNamePlayerFour.style.display = "none";
    playerFourSelectId.style.display = "none";
    addPlayerFour.style.background = "url(../img/icon/add_player.png) 32px/32px";
    // Наполнение объекта
    playerFourSelectId.value = "";
    delete playerFour.name;
    delete playerFour.obj;
    delete playerFour.endPosition;
    playerFour.maney = 5000;
  }
};

// Выбор игроков конец

// Нажатие на кнопку "Начать игру" создание персонажей и отклонение от координат, подсчёт велечины массива

const errorName = document.querySelector("#error-name");
// let errorNameTimeID;
const checkPlayerContainer = document.querySelector(".check-player-container");
const selectPlayers = document.querySelector("#select-players");

const checkCreaterPlayer = (thisPlayer, thisPlayerValue) => {
  if (thisPlayer.created == 1) {
    thisPlayer.name = thisPlayerValue.value;
  }
};
testButtonBegin.onclick = () => {
  playerOne.name = playerOneSelectId.value;
  checkCreaterPlayer(playerTwo, playerTwoSelectId);
  checkCreaterPlayer(playerThree, playerThreeSelectId);
  checkCreaterPlayer(playerFour, playerFourSelectId);
  if (
    playerOne.name != "" &&
    playerTwo.name != "" &&
    playerThree.name != "" &&
    playerFour.name != ""
  ) {
    playerOne.name = playerOneSelectId.value;
    playerTwo.name = playerTwoSelectId.value;
    // checkPlayer = collectionPlayer.length;
    checkPlayerContainer.style.display = "none";
    selectPlayers.style.display = "block";
    selectFigureStart();
  } else {
    errorName.innerText = "Не все игроки заполнили имя";
    errorNameTimeID = setTimeout(() => {
      errorName.innerText = "";
    }, 2000);
  }
};

// Игроки конец

let showAvatar;
let showAvatarClone;
// Увеличить автар игрока
playerOneInterfaceAvatar.onclick = () => {
  containerPlayerCardFlex.innerHTML = "";
  overlappingBox.classList.remove("hidden");
  showAvatar = playerOneInterfaceAvatar;
  showAvatarClone = showAvatar.cloneNode(true);
  containerPlayerCardFlex.append(showAvatarClone);
  showAvatarClone.classList.add("scale-avatar");
  containerPlayerCard.style.display = "block";
};
playerTwoInterfaceAvatar.onclick = () => {
  containerPlayerCardFlex.innerHTML = "";
  overlappingBox.classList.remove("hidden");
  showAvatar = playerTwoInterfaceAvatar;
  showAvatarClone = showAvatar.cloneNode(true);
  containerPlayerCardFlex.append(showAvatarClone);
  showAvatarClone.classList.add("scale-avatar");
  containerPlayerCard.style.display = "block";
};
playerThreeInterfaceAvatar.onclick = () => {
  containerPlayerCardFlex.innerHTML = "";
  overlappingBox.classList.remove("hidden");
  showAvatar = playerThreeInterfaceAvatar;
  showAvatarClone = showAvatar.cloneNode(true);
  containerPlayerCardFlex.append(showAvatarClone);
  showAvatarClone.classList.add("scale-avatar");
  containerPlayerCard.style.display = "block";
};
playerFourInterfaceAvatar.onclick = () => {
  containerPlayerCardFlex.innerHTML = "";
  overlappingBox.classList.remove("hidden");
  showAvatar = playerFourInterfaceAvatar;
  showAvatarClone = showAvatar.cloneNode(true);
  containerPlayerCardFlex.append(showAvatarClone);
  showAvatarClone.classList.add("scale-avatar");
  containerPlayerCard.style.display = "block";
};
const interfaceContainer = document.querySelector('.interface-container');
const showInterface = document.querySelector('#show-interface');
// 
showInterface.onclick = () => {
  if (!interfaceContainer.classList.contains('interface-hidden')) {
    interfaceContainer.classList.remove('interface-show');
    interfaceContainer.classList.add('interface-hidden');
    showInterface.innerText = 'Показать интерфейс';
  } else {
    interfaceContainer.classList.remove('interface-hidden');
    interfaceContainer.classList.add('interface-show'); 
    showInterface.innerText = 'Скрыть интерфейс';
  } 
}

//
// Интерфейс игроков конец
// Бонусы за круги начало
const containerBonusRound = document.querySelector(".container-bonus-round");
let roundStartPlayerLog = document.querySelector("#round-start-player-log");
const roundStartPlayerSpanAttack = document.querySelector(
  "#round-start-player-span-attack"
);
const roundStartPlayerSpanHp = document.querySelector(
  "#round-start-player-span-hp"
);
const roundStartPlayerSpanAuthority = document.querySelector(
  "#round-start-player-span-authority"
);
const roundStartPlayerSpanGold = document.querySelector(
  "#round-start-player-span-gold"
);
const bonusPlayerRound = () => {
  if (Number.isInteger(collectionPlayer[stepMovePlayer].round / 5)) {
    containerBonusRound.classList.remove("hidden");
    overlappingBox.classList.remove("hidden");
    roundStartPlayerLog.innerHTML =
      "Поздравляю вы прошли старт " +
      collectionPlayer[stepMovePlayer].round +
      " раз!" +
      "<br>" +
      "Выбери свой подарок!";
    //
    roundStartPlayerSpanAttack.onclick = () => {
      collectionPlayer[stepMovePlayer].attack =
        collectionPlayer[stepMovePlayer].attack + 1;
      // Функция получения атрибутов игркоов
      getAttributePlayers();
      // Функция записи атрибутов от игрока в краты
      recalculationCardPlayer();
      log.innerHTML +=
        collectionPlayer[stepMovePlayer].name +
        " стал сильнее и выбрал атаку." +
        "<br>";
      containerBonusRound.classList.add("hidden");
      overlappingBox.classList.add("hidden");
    };
    //
    roundStartPlayerSpanHp.onclick = () => {
      collectionPlayer[stepMovePlayer].hp =
        collectionPlayer[stepMovePlayer].hp + 2;
      // Функция получения атрибутов игркоов
      getAttributePlayers();
      // Функция записи атрибутов от игрока в краты
      recalculationCardPlayer();
      log.innerHTML +=
        collectionPlayer[stepMovePlayer].name +
        " стал сильнее и выбрал здоровье." +
        "<br>";
      containerBonusRound.classList.add("hidden");
      overlappingBox.classList.add("hidden");
    };
    //
    roundStartPlayerSpanAuthority.onclick = () => {
      collectionPlayer[stepMovePlayer].authority =
        collectionPlayer[stepMovePlayer].authority + 1;
      // Функция получения атрибутов игркоов
      getAttributePlayers();
      // Функция записи атрибутов от игрока в краты
      recalculationCardPlayer();
      log.innerHTML +=
        collectionPlayer[stepMovePlayer].name + " стал влиятельнее." + "<br>";
      containerBonusRound.classList.add("hidden");
      overlappingBox.classList.add("hidden");
    };
    //
    roundStartPlayerSpanGold.onclick = () => {
      collectionPlayer[stepMovePlayer].money =
        collectionPlayer[stepMovePlayer].money + 2000;
      // Функция получения атрибутов игркоов
      getAttributePlayers();
      // Функция записи атрибутов от игрока в краты
      recalculationCardPlayer();
      log.innerHTML +=
        collectionPlayer[stepMovePlayer].name + " стал богаче." + "<br>";
      containerBonusRound.classList.add("hidden");
      overlappingBox.classList.add("hidden");
    };
  }
};
// Бонусы за круги конец
// Загрузка документа/окна

window.onload = () => {
  addPlayerOne.style.background = "url(./img/icon/user.png)";
  scaleCellTopBottom();
  scaleCellRight();
  scaleCellLeft();
  integrationStatCardStartGame();
  pressShiftCheatPanel();
  pressKeyboard();
};
