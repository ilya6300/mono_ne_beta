"use strict";
// Переменные
export const cellAttackContainer = document.querySelector(
  ".cell-attack-container"
);
export const cellAttackContainerCellNameWindows = document.querySelectorAll(
  "#cell-attack-container--cell-name"
);
export const cellAttackContainerPlayerName = document.querySelectorAll(
  "#cell-attack-container-player-name"
);
export const cellAttackContainerPlayerGold = document.querySelectorAll(
  "#cell-attack-container-player-gold"
);
export const cellAttackContainerPlayerAttack = document.querySelectorAll(
  "#cell-attack-container-player-attack"
);
export const cellAttackContainerPlayerHp = document.querySelectorAll(
  "#cell-attack-container-player-hp"
);
export const cellAttackContainerPlayerArmor = document.querySelectorAll(
  "#cell-attack-container-player-armor"
);
export const cellAttackContainerPlayerAuthority = document.querySelectorAll(
  "#cell-attack-container-player-authority"
);
export const cellAttackContainerCellName = document.querySelector(
  "#cell-attack-container-cell-name"
);
export const cellAttackContainerCellGoldPrice = document.querySelector(
  "#cell-attack-container-cell-gold-price"
);
export const cellAttackContainerCellAttack = document.querySelector(
  "#cell-attack-container-cell-attack"
);
export const cellAttackContainerCellHp = document.querySelector(
  "#cell-attack-container-cell-hp"
);
export const cellInterfaceArmorContainer = document.querySelector(
  ".cell-interface-armor-container"
);
export const cellAttackContainerCellArmor = document.querySelector(
  "#cell-attack-container-cell-armor"
);
export const cellAttackContainerCellAuthority = document.querySelector(
  "#cell-attack-container-cell-authority"
);
export const cellAttackContainerCellBonus = document.querySelector(
  "#cell-attack-container-cell-bonus"
);
export const cellAttackSaleCell = document.querySelector(
  "#cell-attack-sale-cell"
);
export const cellAttackAttackCell = document.querySelector(
  "#cell-attack-attack-cell"
);
export const cellAttackExitCell = document.querySelector(
  "#cell-attack-exit-cell"
);
export const cellAttackContainerLog = document.querySelector(
  "#cell-attack-container-log"
);
const cellContractColumn2Img = document.querySelector('.cell-contract-column-2__img');
const tournament = document.querySelector(".tournament");
const tournamentBtnBit = document.querySelector("#tournament_btn__bit");
const tournamentBtnExit = document.querySelector("#tournament_btn__exit");
const tournamentLog = document.querySelector("#tournament_log");
const tournamentBiContainer = document.querySelector("#tournament_bit__container");
const tournamentExitContainer = document.querySelector("#tournament_exit__container");
const cellContractContainer = document.querySelector('.cell-contract-container');
const cellContarctContainerCellBonus = document.querySelector('#cell-contarct-container-cell-bonus');
const btnHireling = document.querySelector('#btn-hireling');
const btnHirelingClosed = document.querySelector('#btn-hireling_closed');
import {
  collectionCell,
  checkColorCardPlayer,
  recalculationCardPlayer,
  overlappingBox,
  checkColorCardCollectionBirch,
  checkColorCardCollectionPurple,
  cleckAmountCollectionBirch,
  cleckAmountCollectionPurple,
  cleckAmountCollectionBrown,
  cleckAmountCollectionOrange,
  cleckAmountCollectionYollow,
  cleckAmountCollectionGreen,
  cleckAmountCollectionRed,
  cleckAmountCollectionBlue,
  checkColorCardCollectionBrown,
  checkColorCardCollectionOrange,
  checkColorCardCollectionYollow,
  checkColorCardCollectionGreen,
  checkColorCardCollectionRed,
  checkColorCardCollectionBlue,
  removeAttributePlayerColor,
} from "./cell.js";

import {
  stepMovePlayer,
  endPosition,
  collectionPlayer,
  playerInterfaceGold,
  getAttributePlayers,
  log,
  // flagSpace,
} from "./app.js";
import {generationCardEvent } from "./card-event.js";
let infoPrice;
let applyImgCell;
let applyBorderCell;
// Функция приобретения карты
const applyMasterCell = () => {
  // Меняем Цену покупки на цену оплаты
  infoPrice = document.querySelector(
    "#cell-" + (endPosition + 1) + "-unit--price--info"
  );
  infoPrice.innerText = "Цена оплаты: ";
  // Присвоение владельца карте
  collectionCell[endPosition].master = collectionPlayer[stepMovePlayer].name;
  cellAttackContainerCellName.innerText = collectionCell[endPosition].master;
  // Получение параметров из карты и передача их игроку
  collectionPlayer[stepMovePlayer].startMoney = collectionPlayer[stepMovePlayer].startMoney +
    collectionCell[endPosition].bonusMoney;
  collectionPlayer[stepMovePlayer].attack = collectionPlayer[stepMovePlayer].attack +
    collectionCell[endPosition].bonusAttack;
  collectionPlayer[stepMovePlayer].hp = collectionPlayer[stepMovePlayer].hp + collectionCell[endPosition].bonusHp;
  collectionPlayer[stepMovePlayer].armor = collectionPlayer[stepMovePlayer].armor +
    collectionCell[endPosition].bonusArmor;
  collectionPlayer[stepMovePlayer].authority = collectionPlayer[stepMovePlayer].authority +
    collectionCell[endPosition].bonusAuthority;
  // Запись характеристик в карту
  // Собираем div с изображением
  applyImgCell = document.querySelector("#cell-" + (endPosition + 1) + "-unit");
  applyBorderCell = document.querySelector("#cell-" + (endPosition + 1));
  applyImgCell.style.background = collectionPlayer[stepMovePlayer].img;
  applyBorderCell.style.boxShadow= '0px 9px 9px 0px' + collectionPlayer[stepMovePlayer].color;
  // Выводим в лог, что куплена клетка
  log.innerHTML +=
    collectionPlayer[stepMovePlayer].name +
    " приобрёл(а) " +
    collectionCell[endPosition].name +
    "<br>";
};
// Функция рассчёта атаки на клетку
const randomAttackCollection = [1, 2, 3, 4, 5, 6];
let getRandomAttack;
let randomAttack;
let playerVScellAttackPlayer;
let playerVScellAttackCell;
// Функция 50% шанс
let getRandom50vs50;
let random50vs50;
const collectionRandom50vs50 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const random50vs50Function = () => {
  getRandom50vs50 = Math.floor(Math.random() * collectionRandom50vs50.length);
  random50vs50 = collectionRandom50vs50[getRandom50vs50];
};
// функция от одного до шести
const randomAttackFunction = () => {
  getRandomAttack = Math.floor(Math.random() * randomAttackCollection.length);
  randomAttack = randomAttackCollection[getRandomAttack];
};
const calculationBattle = (defend) => {
  // функция от одного до шести
  randomAttackFunction();
  playerVScellAttackPlayer = ((collectionPlayer[stepMovePlayer].attack + randomAttack) * (1 - defend.armor)) - defend.hp;
  cellAttackContainerLog.innerHTML = collectionPlayer[stepMovePlayer].name + " атаковал " + '"' +
    defend.name + '"' + "<br>";
  cellAttackContainerLog.innerHTML += collectionPlayer[stepMovePlayer].name + " бросил кубик " +
    randomAttack + " + " + collectionPlayer[stepMovePlayer].attack + " (базовая атака игрока) - " + defend.hp + " здоровье " + defend.name + "<br>";
  if (playerVScellAttackPlayer >= 0) {
    cellAttackContainerLog.innerHTML += collectionPlayer[stepMovePlayer].name + " победил.";
    cellAttackSaleCell.classList.add("hidden");
    cellAttackAttackCell.classList.add("hidden");
   
    // Вычитание параметров из игрока и передача их игроку
    // Вычитание
    defend.startMoney = defend.startMoney - collectionCell[endPosition].bonusMoney;
    defend.attack = defend.attack - collectionCell[endPosition].bonusAttack;
    defend.hp = defend.hp - collectionCell[endPosition].bonusHp;
    defend.armor = defend.armor - collectionCell[endPosition].bonusArmor;
    defend.authority = defend.authority - collectionCell[endPosition].bonusAuthority;
    // снимаем фулл статы
      removeAttributePlayerColor(collectionCell[endPosition].color, defend);
      // Функции
      applyMasterCell();
      // Функция получения атрибутов игркоов
      getAttributePlayers();
      // Функция записи атрибутов от игрока в краты
      recalculationCardPlayer();
      // Проверка цвета карт
      checkColorCardPlayerGeneral();
      getAttributePlayers();
  } else {
    randomAttackFunction();
    playerVScellAttackCell = collectionPlayer[stepMovePlayer].hp - ((defend.attack + randomAttack) * (1 - collectionPlayer[stepMovePlayer].armor));
    cellAttackContainerLog.innerHTML += "Войска " + defend.name + " бросили кубик " +
      randomAttack + " + базовая атака " + defend.attack + " - здоровье " +
      collectionPlayer[stepMovePlayer].name + " " + collectionPlayer[stepMovePlayer].hp +
      " и " + (collectionPlayer[stepMovePlayer].armor * 100) + "% брони " + "<br>";
    if (1 > playerVScellAttackCell) {
      cellAttackContainerLog.innerHTML += collectionPlayer[stepMovePlayer].name + " потерпел поражение";
      cellAttackSaleCell.classList.add("hidden");
      cellAttackAttackCell.classList.add("hidden");
      collectionPlayer[stepMovePlayer].hp = collectionPlayer[stepMovePlayer].hp - 1;
      cellAttackContainerLog.innerHTML += 'Теряет "-1" к здоровью' + "<br>";
      if (defend === playerDefend) {
        collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money -
          collectionPlayer[searchPlayer].startMoney / 2;
        cellAttackContainerLog.innerHTML += "и заплатил " + playerDefend.startMoney / 2 + " золотых" + "<br>";
        playerDefend.money = playerDefend.money + playerDefend.startMoney / 2;
         winner = 1;
      }
      getAttributePlayers();
      recalculationCardPlayer();
    } else {
      return;
    }
  }
  // Функция получения атрибутов игркоов
  getAttributePlayers();
  // Функция записи атрибутов от игрока в краты
  recalculationCardPlayer();
};
let m;
let cellDefend;
let playerDefend;
let searchPlayer;
export let playerName;
export let indexPlayer;
export let bankrupt;
let winner = 0;
const checkBankruptPlayerNeutralCard = (playerBankrut) => {
for (let b = 0; b < collectionCell.length; b++) {
  if (collectionPlayer[playerBankrut].name === collectionCell[b].master) {
    // let returnNeutralCardMaster = document.querySelector("#cell-" + (b + 1) + "-master");
    // let returnNeutralCardAuthority = document.querySelector(
    //   "#cell-" + (b + 1) + "-unit-container--stat---authority---stat"
    // );
    // returnNeutralCardMaster.innerText = "Нейтральный";
    // returnNeutralCardAuthority.innerText = "0";
    if (collectionCell[b].type === 1) {
      collectionCell[b].master = "Нет";
      collectionCell[b].authority = 0;
      let returnNeutralCardMaster = document.querySelector("#cell-" + (b + 1) + "-master");
      // applyImgCell = document.querySelector("#cell-" + (b + 1) + "-unit");
      applyBorderCell = document.querySelector("#cell-" + (b + 1));
      // applyImgCell.style.background = "url(../img/NPS/b1.jpg) 120%/120%;";
      applyBorderCell.style.boxShadow = "none";
      returnNeutralCardMaster.innerText = "Нейтральный"
    } else if (collectionCell[b].type === 2) {
      collectionCell[b].master = "Нейтральный";
    }
  }  
}
  // Функция получения атрибутов игркоов
  getAttributePlayers();
  // Функция записи атрибутов от игрока в краты
  recalculationCardPlayer();
}
// Функция проверка на банкротсво
const checkBankruptPlayer = () => {
  for (bankrupt = 0; bankrupt < collectionPlayer.length; bankrupt++) {
    if (collectionPlayer[bankrupt].money <= 0) {
      // Удаляем объект из массива по индексу
      collectionPlayer[bankrupt].bankrupt = 1;
      if (collectionPlayer[bankrupt].bankrupt == 1) {
        console.log(collectionPlayer[bankrupt].name + "- банкрот");
        collectionPlayer[bankrupt].obj.style.background = "";
        collectionPlayer[bankrupt].interface.style.display = "none";
        checkBankruptPlayerNeutralCard(bankrupt);
      }
    }
    if (collectionPlayer[bankrupt].hp <= 0) {
      // Удаляем объект из массива по индексу
      collectionPlayer[bankrupt].bankrupt = 1;
      if (collectionPlayer[bankrupt].bankrupt == 1) {
        console.log(collectionPlayer[bankrupt].name + "- повержен");
        collectionPlayer[bankrupt].obj.style.background = "";
        collectionPlayer[bankrupt].interface.style.display = "none";
        checkBankruptPlayerNeutralCard(bankrupt);
      }
    }
  }
};
// Функция проверки на цвет карт
const checkColorCardPlayerGeneral = () => {
  checkColorCardPlayer("березовый", 0, 0, 0, 650, checkColorCardCollectionBirch, cleckAmountCollectionBirch);
  checkColorCardPlayer("пурпурный", 0, 3, 0, 0, checkColorCardCollectionPurple, cleckAmountCollectionPurple);
  checkColorCardPlayer("коричневый", 2, 0, 0, 0, checkColorCardCollectionBrown, cleckAmountCollectionBrown);
  checkColorCardPlayer("оранжевый", 0, 3, 0, 300, checkColorCardCollectionOrange, cleckAmountCollectionOrange);
  checkColorCardPlayer("жёлтый", 0, 3, 2, 0, checkColorCardCollectionYollow, cleckAmountCollectionYollow);
  checkColorCardPlayer("зелёный", 3, 5, 0, 0, checkColorCardCollectionGreen, cleckAmountCollectionGreen);
  checkColorCardPlayer("красный", 2, 6, 0, 500, checkColorCardCollectionRed, cleckAmountCollectionRed);
  checkColorCardPlayer("синий", 4, 4, 2, 500, checkColorCardCollectionBlue, cleckAmountCollectionBlue);
  console.log('cleckAmountCollectionBirch JS interaction - ' + cleckAmountCollectionBirch);
};
//
export const interactionColorCard = () => {
  cellAttackContainerLog.innerText = "";
  if (collectionCell[endPosition].type == 1 && collectionCell[endPosition].master == collectionPlayer[stepMovePlayer].name) {
    log.innerHTML += "Клетка " + collectionCell[endPosition].name + " уже принадлежит вам" + "<br>";
  } else if (collectionCell[endPosition].type == 1 && collectionCell[endPosition].master === "Нейтральный") {
    setTimeout(() => {
      cellAttackContainer.classList.remove("hidden");
      overlappingBox.classList.remove("hidden");
      cellAttackSaleCell.classList.remove("hidden");
      cellAttackAttackCell.classList.remove("hidden");
    }, 500);
    // Имя клетки
    forContainer();
    // Характеристики клетки
    cellAttackContainerCellName.innerText = collectionCell[endPosition].master;
    cellAttackContainerCellGoldPrice.innerText = collectionCell[endPosition].price;
    cellAttackContainerCellAttack.innerText = collectionCell[endPosition].attack;
    cellAttackContainerCellHp.innerText = collectionCell[endPosition].hp;
    cellAttackContainerCellAuthority.innerText = collectionCell[endPosition].authority;
    cellAttackContainerCellBonus.innerText = collectionCell[endPosition].bonus;
  } else if (collectionCell[endPosition].type == "tournament") {
    // flagSpace = 99;
    tournamentLog.innerText = "";
    tournament.style.display = "block";
    tournamentBtnBit.onclick = () => {
      if (collectionPlayer[stepMovePlayer].money >= 2000) {
        collectionPlayer[stepMovePlayer].money =
          collectionPlayer[stepMovePlayer].money - 2000;
        random50vs50Function();
        if (random50vs50 >= 5) {
          collectionPlayer[stepMovePlayer].authority = collectionPlayer[stepMovePlayer].authority + 1;
          tournamentLog.innerText = "Вы выиграли туринр и получили +1 к влиянию";
          tournamentBtnBit.style.display = "none";
        } else {
          tournamentLog.innerText = "Вы проиграли туринр";
          tournamentBtnBit.style.display = "none";
        }
        getAttributePlayers();
        recalculationCardPlayer();
      }
    };
    tournamentBtnExit.onclick = () => {
      tournamentBtnBit.style.display = "block";
      tournament.style.display = "none";
      // flagSpace = 2;
    };
    // Если карта принадлежит другому игроку
  } else if (
    collectionCell[endPosition].type == 1 &&
    collectionCell[endPosition].master !== "Нейтральный"
  ) {
    // Перебераем и ищим владельца карты
    for (m = 0; m < collectionPlayer.length; m++) {
      if (collectionPlayer[m].name == collectionCell[endPosition].master) {
        playerDefend = collectionPlayer[m];
        setTimeout(() => {
          cellAttackContainer.classList.remove("hidden");
          overlappingBox.classList.remove("hidden");
          cellAttackSaleCell.classList.remove("hidden");
          cellAttackAttackCell.classList.remove("hidden");
          cellAttackSaleCell.style.display = "none";
        }, 500);
        // Имя клетки
        forContainer ();
        // Характеристики защищяющегося
        cellAttackContainerCellName.innerText = playerDefend.name;
        cellAttackContainerCellGoldPrice.innerText = playerDefend.startMoney / 2;
        cellAttackContainerCellAttack.innerText = playerDefend.attack;
        cellAttackContainerCellHp.innerText = playerDefend.hp;
        cellInterfaceArmorContainer.style.display = "block";
        cellAttackContainerCellArmor.innerText = playerDefend.armor;
        cellAttackContainerCellAuthority.innerText = playerDefend.authority;
        cellAttackContainerCellBonus.innerText = collectionCell[endPosition].bonus;
      }
    }
  }
  //   Купить карту
  cellAttackSaleCell.onclick = () => {
    if (
      // Недостаточно денег на покупку карты
      collectionPlayer[stepMovePlayer].money < collectionCell[endPosition].price) {
      cellAttackContainerLog.innerText = "Недостаточно золота. Для приобретения необходимо - " + collectionCell[endPosition].price + ". А " + 
      collectionPlayer[stepMovePlayer].name +
        " имеет в наличие только - " +
        collectionPlayer[stepMovePlayer].money;
    } else if (
        // Достаточно денег для приобретения карты
      collectionPlayer[stepMovePlayer].authority >= collectionCell[endPosition].authority) {
      // Вычитаем деньги за покупку
      collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money - collectionCell[endPosition].price;
      playerInterfaceGold.innerText = collectionPlayer[stepMovePlayer].money;
      // Скрываем / показываем окно действий
      cellAttackContainer.classList.add("hidden");
      overlappingBox.classList.add("hidden");

      // Функции
      applyMasterCell();
      // Функция получения атрибутов игркоов
      getAttributePlayers();
      // Функция записи атрибутов от игрока в краты
      recalculationCardPlayer();
      // Проверка цвета карт
      checkColorCardPlayerGeneral();
      getAttributePlayers();
    } else {
      cellAttackContainerLog.innerText =
        "Вам не хватает авторитета, для покупки данной карты.";
    }
  };
  //   Закрыть окошко
  // Платим деньги другому игроку
  cellAttackExitCell.onclick = () => {
    if (collectionCell[endPosition].master !== "Нейтральный") {
      playerName = collectionCell[endPosition].master;
      searchPlayer = collectionPlayer.map((indexPlayer) => indexPlayer.name).indexOf(playerName);
       if (winner === 1) {
        cellAttackContainer.classList.add("hidden");
        overlappingBox.classList.add("hidden");
        cellAttackSaleCell.style.display = "block";
        cellAttackAttackCell.style.display = "block";
        cellInterfaceArmorContainer.style.display = "none";
        cellAttackSaleCell.style.display = "block";
        checkBankruptPlayer();
      } else {
        collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money -
        collectionPlayer[searchPlayer].startMoney / 2;
      cellAttackContainerLog.innerHTML += "и заплатил " + searchPlayer.startMoney / 2 + " золотых" + "<br>";
      collectionPlayer[searchPlayer].money = collectionPlayer[searchPlayer].money + collectionPlayer[searchPlayer].startMoney / 2;
        cellAttackContainer.classList.add("hidden");
        overlappingBox.classList.add("hidden");
        cellAttackSaleCell.style.display = "block";
        cellAttackAttackCell.style.display = "block";
        cellInterfaceArmorContainer.style.display = "none";
        cellAttackSaleCell.style.display = "block";
        checkBankruptPlayer();
      }
      // 
      winner = 0;
console.log('winner - ' + winner);

      //
      getAttributePlayers();
      recalculationCardPlayer();
    }

    cellAttackContainer.classList.add("hidden");
    overlappingBox.classList.add("hidden");
    cellAttackSaleCell.style.display = "block";
    cellAttackAttackCell.style.display = "block";
    cellInterfaceArmorContainer.style.display = "none";
    cellAttackSaleCell.style.display = "block";
    checkBankruptPlayer();
  };
  //   Атаковать карту
  cellAttackAttackCell.onclick = () => {
    // Поиск индекса игрока в массиве
    playerName = collectionCell[endPosition].master;
    searchPlayer = collectionPlayer.map((indexPlayer) => indexPlayer.name).indexOf(playerName);
    //
    cellDefend = collectionCell[endPosition];
    if (
      collectionPlayer[stepMovePlayer].authority >= collectionCell[endPosition].authority && collectionCell[endPosition].master === "Нейтральный") {
      calculationBattle(cellDefend);
    } else if (
      collectionPlayer[stepMovePlayer].authority >= collectionPlayer[searchPlayer].authority && collectionCell[endPosition].master !== "Нейтральный"
    ) {
      calculationBattle(playerDefend);
    } else {
      cellAttackContainerLog.innerText = "Вам не хватает авторитета, для атаки " + collectionCell[endPosition].name;
    }
  };
};
// Контрактные карты
export const interactionContractCard = () => {
if (collectionCell[endPosition].type === 2 && collectionCell[endPosition].master === "Нейтральный") {
  setTimeout(() => {
    cellContractContainer.classList.remove("hidden");
    overlappingBox.classList.remove("hidden");
  }, 500);
   // Имя клетки
   forContainer ();
   console.log('endPosition - ' + endPosition)
   if (collectionCell[endPosition] === collectionCell[3]
     || collectionCell[endPosition] === collectionCell[32]
     || collectionCell[endPosition] === collectionCell[21]) {
    cellContractColumn2Img.style.background = 'url(../img/NPS/icon-blacksmith-color.png) 100%/100%';
     } else if (endPosition === 13) {
      cellContractColumn2Img.style.background = 'url(../img/NPS/clan-color.png) 100%/100%';
     }
     cellContarctContainerCellBonus.innerText = collectionCell[endPosition].bonus;
} else if (collectionCell[endPosition].type === 2 && collectionCell[endPosition].master !== "Нейтральный") {
  // Заключен контракт с другим игроком  
}
btnHireling.onclick = () => {
  collectionCell[endPosition].master = collectionPlayer[stepMovePlayer].name;
  collectionPlayer[stepMovePlayer].consumption = collectionPlayer[stepMovePlayer].consumption + collectionCell[endPosition].contractMoney;
    // Получение параметров из карты и передача их игроку
    collectionPlayer[stepMovePlayer].startMoney = collectionPlayer[stepMovePlayer].startMoney +
    collectionCell[endPosition].bonusMoney;
  collectionPlayer[stepMovePlayer].attack = collectionPlayer[stepMovePlayer].attack +
    collectionCell[endPosition].bonusAttack;
  collectionPlayer[stepMovePlayer].hp = collectionPlayer[stepMovePlayer].hp + collectionCell[endPosition].bonusHp;
  collectionPlayer[stepMovePlayer].armor = collectionPlayer[stepMovePlayer].armor +
    collectionCell[endPosition].bonusArmor;
  collectionPlayer[stepMovePlayer].authority = collectionPlayer[stepMovePlayer].authority +
    collectionCell[endPosition].bonusAuthority;
  // Функция получения атрибутов игркоов
getAttributePlayers();
// Функция записи атрибутов от игрока в краты
recalculationCardPlayer();
// Проверка цвета карт
checkColorCardPlayerGeneral();
getAttributePlayers();
cellContractContainer.classList.add("hidden");
overlappingBox.classList.add("hidden");
}
btnHirelingClosed.onclick = () => {
  cellContractContainer.classList.add("hidden");
  overlappingBox.classList.add("hidden");
}
}
// Карты события 
export const interactionEventCard = () => {
  if (collectionCell[endPosition].type === 3) {
    setTimeout(() => {
      generationCardEvent();
    }, 500);
  }}
// 
const forContainer = () => {
  cellAttackContainerCellNameWindows.forEach(cellAttackContainerCellNameWindowsAll => {
    cellAttackContainerCellNameWindowsAll.innerText = collectionCell[endPosition].name;

  });
// Характеристики игрока
cellAttackContainerPlayerName.forEach(cellAttackContainerPlayerNameAll => {
    cellAttackContainerPlayerNameAll.innerText = collectionPlayer[stepMovePlayer].name;
    });
    cellAttackContainerPlayerGold.forEach(cellAttackContainerPlayerGoldAll => {
      cellAttackContainerPlayerGoldAll.innerText = collectionPlayer[stepMovePlayer].money;
 });
 cellAttackContainerPlayerAttack.forEach(cellAttackContainerPlayerAttackAll => {
  cellAttackContainerPlayerAttackAll.innerText = collectionPlayer[stepMovePlayer].attack;
});
cellAttackContainerPlayerHp.forEach(cellAttackContainerPlayerHpAll => {
  cellAttackContainerPlayerHpAll.innerText = collectionPlayer[stepMovePlayer].hp;
});
cellAttackContainerPlayerArmor.forEach(cellAttackContainerPlayerArmorAll => {
  cellAttackContainerPlayerArmorAll.innerText = (collectionPlayer[stepMovePlayer].armor);
});
cellAttackContainerPlayerAuthority.forEach(cellAttackContainerPlayerAuthorityAll => {
  cellAttackContainerPlayerAuthorityAll.innerText = collectionPlayer[stepMovePlayer].authority; 
});
}