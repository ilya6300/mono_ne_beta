"use strict";
import {
  collectionPlayer,
  stepMovePlayer,
  getAttributePlayers,
  log,
} from "./app.js";


// Переменные id карт
const cell1StartObj = document.querySelector("#cell-1-start");
const cell2Obj = document.querySelector("#cell-2");
const cell3Obj = document.querySelector("#cell-3");
const cell4Obj = document.querySelector("#cell-4");
const cell5Obj = document.querySelector("#cell-5");
const cell6Obj = document.querySelector("#cell-6");
const cell7Obj = document.querySelector("#cell-7");
const cell8Obj = document.querySelector("#cell-8");
const cell9Obj = document.querySelector("#cell-9");
const cell10Obj = document.querySelector("#cell-10");
const cell11Obj = document.querySelector("#cell-11");
const cell12Obj = document.querySelector("#cell-12");
const cell13Obj = document.querySelector("#cell-13");
const cell14Obj = document.querySelector("#cell-14");
const cell15Obj = document.querySelector("#cell-15");
const cell16Obj = document.querySelector("#cell-16");
const cell17Obj = document.querySelector("#cell-17");
const cell18Obj = document.querySelector("#cell-18");
const cell19Obj = document.querySelector("#cell-19");
const cell20Obj = document.querySelector("#cell-20");
const cell21Obj = document.querySelector("#cell-21");
const cell22Obj = document.querySelector("#cell-22");
const cell23Obj = document.querySelector("#cell-23");
const cell24Obj = document.querySelector("#cell-24");
const cell25Obj = document.querySelector("#cell-25");
const cell26Obj = document.querySelector("#cell-26");
const cell27Obj = document.querySelector("#cell-27");
const cell28Obj = document.querySelector("#cell-28");
const cell29Obj = document.querySelector("#cell-29");
const cell30Obj = document.querySelector("#cell-30");
const cell31Obj = document.querySelector("#cell-31");
const cell32Obj = document.querySelector("#cell-32");
const cell33Obj = document.querySelector("#cell-33");
const cell34Obj = document.querySelector("#cell-34");
const cell35Obj = document.querySelector("#cell-35");
const cell36Obj = document.querySelector("#cell-36");
//  Переменные классов
export const cardTopBottom = document.querySelectorAll(".card-top-bottom");
export const cardRight = document.querySelectorAll(".card-right");
export const cardLeft = document.querySelectorAll(".card-left");
export const overlappingBox = document.querySelector(".overlapping-box");
// Переменные id характеристик карт в html
// Клетка 2
export const cellMaster2 = document.querySelector("#cell-2-master");
export const cellUnit2 = document.querySelector("#cell-2-unit");
export const cellUnitContainerStatAttackStat2 = document.querySelector(
  "#cell-2-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat2 = document.querySelector(
  "#cell-2-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat2 = document.querySelector(
  "#cell-2-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo2 = document.querySelector(
  "#cell-2-unit--price--info"
);
export const cellUnitPrice2 = document.querySelector("#cell-2-unit--price");
// Клетка 3
export const cellMaster3 = document.querySelector("#cell-3-master");
export const cellUnit3 = document.querySelector("#cell-3-unit");
export const cellUnitContainerStatAttackStat3 = document.querySelector(
  "#cell-3-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat3 = document.querySelector(
  "#cell-3-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat3 = document.querySelector(
  "#cell-3-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo3 = document.querySelector(
  "#cell-3-unit--price--info"
);
export const cellUnitPrice3 = document.querySelector("#cell-3-unit--price");
// Клетка 5
export const cellMaster5 = document.querySelector("#cell-5-master");
export const cellUnit5 = document.querySelector("#cell-5-unit");
export const cellUnitContainerStatAttackStat5 = document.querySelector(
  "#cell-5-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat5 = document.querySelector(
  "#cell-5-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat5 = document.querySelector(
  "#cell-5-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo5 = document.querySelector(
  "#cell-5-unit--price--info"
);
export const cellUnitPrice5 = document.querySelector("#cell-5-unit--price");
// Клетка 6
export const cellMaster6 = document.querySelector("#cell-6-master");
export const cellUnit6 = document.querySelector("#cell-6-unit");
export const cellUnitContainerStatAttackStat6 = document.querySelector(
  "#cell-6-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat6 = document.querySelector(
  "#cell-6-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat6 = document.querySelector(
  "#cell-6-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo6 = document.querySelector(
  "#cell-6-unit--price--info"
);
export const cellUnitPrice6 = document.querySelector("#cell-6-unit--price");
// Клетка 8
export const cellMaster8 = document.querySelector("#cell-8-master");
export const cellUnit8 = document.querySelector("#cell-8-unit");
export const cellUnitContainerStatAttackStat8 = document.querySelector(
  "#cell-8-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat8 = document.querySelector(
  "#cell-8-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat8 = document.querySelector(
  "#cell-8-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo8 = document.querySelector(
  "#cell-8-unit--price--info"
);
export const cellUnitPrice8 = document.querySelector("#cell-8-unit--price");
// Клетка 9
export const cellMaster9 = document.querySelector("#cell-9-master");
export const cellUnit9 = document.querySelector("#cell-9-unit");
export const cellUnitContainerStatAttackStat9 = document.querySelector(
  "#cell-9-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat9 = document.querySelector(
  "#cell-9-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat9 = document.querySelector(
  "#cell-9-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo9 = document.querySelector(
  "#cell-9-unit--price--info"
);
export const cellUnitPrice9 = document.querySelector("#cell-9-unit--price");
// Клетка 11
export const cellMaster11 = document.querySelector("#cell-11-master");
export const cellUnit11 = document.querySelector("#cell-11-unit");
export const cellUnitContainerStatAttackStat11 = document.querySelector(
  "#cell-11-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat11 = document.querySelector(
  "#cell-11-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat11 = document.querySelector(
  "#cell-11-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo11 = document.querySelector(
  "#cell-11-unit--price--info"
);
export const cellUnitPrice11 = document.querySelector("#cell-11-unit--price");
// Клетка 13
export const cellMaster13 = document.querySelector("#cell-13-master");
export const cellUnit13 = document.querySelector("#cell-13-unit");
export const cellUnitContainerStatAttackStat13 = document.querySelector(
  "#cell-13-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat13 = document.querySelector(
  "#cell-13-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat13 = document.querySelector(
  "#cell-13-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo13 = document.querySelector(
  "#cell-13-unit--price--info"
);
export const cellUnitPrice13 = document.querySelector("#cell-13-unit--price");
// Клетка 15
export const cellMaster15 = document.querySelector("#cell-15-master");
export const cellUnit15 = document.querySelector("#cell-15-unit");
export const cellUnitContainerStatAttackStat15 = document.querySelector(
  "#cell-15-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat15 = document.querySelector(
  "#cell-15-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat15 = document.querySelector(
  "#cell-15-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo15 = document.querySelector(
  "#cell-15-unit--price--info"
);
export const cellUnitPrice15 = document.querySelector("#cell-15-unit--price");
// Клетка 16
export const cellMaster16 = document.querySelector("#cell-16-master");
export const cellUnit16 = document.querySelector("#cell-16-unit");
export const cellUnitContainerStatAttackStat16 = document.querySelector(
  "#cell-16-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat16 = document.querySelector(
  "#cell-16-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat16 = document.querySelector(
  "#cell-16-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo16 = document.querySelector(
  "#cell-16-unit--price--info"
);
export const cellUnitPrice16 = document.querySelector("#cell-16-unit--price");
// Клетка 18
export const cellMaster18 = document.querySelector("#cell-18-master");
export const cellUnit18 = document.querySelector("#cell-18-unit");
export const cellUnitContainerStatAttackStat18 = document.querySelector(
  "#cell-18-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat18 = document.querySelector(
  "#cell-18-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat18 = document.querySelector(
  "#cell-18-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo18 = document.querySelector(
  "#cell-18-unit--price--info"
);
export const cellUnitPrice18 = document.querySelector("#cell-18-unit--price");
// Клетка 20
export const cellMaster20 = document.querySelector("#cell-20-master");
export const cellUnit20 = document.querySelector("#cell-20-unit");
export const cellUnitContainerStatAttackStat20 = document.querySelector(
  "#cell-20-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat20 = document.querySelector(
  "#cell-20-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat20 = document.querySelector(
  "#cell-20-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo20 = document.querySelector(
  "#cell-20-unit--price--info"
);
export const cellUnitPrice20 = document.querySelector("#cell-20-unit--price");
// Клетка 21
export const cellMaster21 = document.querySelector("#cell-21-master");
export const cellUnit21 = document.querySelector("#cell-21-unit");
export const cellUnitContainerStatAttackStat21 = document.querySelector(
  "#cell-21-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat21 = document.querySelector(
  "#cell-21-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat21 = document.querySelector(
  "#cell-21-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo21 = document.querySelector(
  "#cell-21-unit--price--info"
);
export const cellUnitPrice21 = document.querySelector("#cell-21-unit--price");
// Клетка 23
export const cellMaster23 = document.querySelector("#cell-23-master");
export const cellUnit23 = document.querySelector("#cell-23-unit");
export const cellUnitContainerStatAttackStat23 = document.querySelector(
  "#cell-23-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat23 = document.querySelector(
  "#cell-23-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat23 = document.querySelector(
  "#cell-23-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo23 = document.querySelector(
  "#cell-23-unit--price--info"
);
export const cellUnitPrice23 = document.querySelector("#cell-23-unit--price");
// Клетка 25
export const cellMaster25 = document.querySelector("#cell-25-master");
export const cellUnit25 = document.querySelector("#cell-25-unit");
export const cellUnitContainerStatAttackStat25 = document.querySelector(
  "#cell-25-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat25 = document.querySelector(
  "#cell-25-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat25 = document.querySelector(
  "#cell-25-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo25 = document.querySelector(
  "#cell-25-unit--price--info"
);
export const cellUnitPrice25 = document.querySelector("#cell-25-unit--price");
// Клетка 26
export const cellMaster26 = document.querySelector("#cell-26-master");
export const cellUnit26 = document.querySelector("#cell-26-unit");
export const cellUnitContainerStatAttackStat26 = document.querySelector(
  "#cell-26-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat26 = document.querySelector(
  "#cell-26-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat26 = document.querySelector(
  "#cell-26-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo26 = document.querySelector(
  "#cell-26-unit--price--info"
);
export const cellUnitPrice26 = document.querySelector("#cell-26-unit--price");
// Клетка 27
export const cellMaster27 = document.querySelector("#cell-27-master");
export const cellUnit27 = document.querySelector("#cell-27-unit");
export const cellUnitContainerStatAttackStat27 = document.querySelector(
  "#cell-27-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat27 = document.querySelector(
  "#cell-27-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat27 = document.querySelector(
  "#cell-27-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo27 = document.querySelector(
  "#cell-27-unit--price--info"
);
export const cellUnitPrice27 = document.querySelector("#cell-27-unit--price");
// Клетка 29
export const cellMaster29 = document.querySelector("#cell-29-master");
export const cellUnit29 = document.querySelector("#cell-29-unit");
export const cellUnitContainerStatAttackStat29 = document.querySelector(
  "#cell-29-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat29 = document.querySelector(
  "#cell-29-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat29 = document.querySelector(
  "#cell-29-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo29 = document.querySelector(
  "#cell-29-unit--price--info"
);
export const cellUnitPrice29 = document.querySelector("#cell-29-unit--price");
// Клетка 30
export const cellMaster30 = document.querySelector("#cell-30-master");
export const cellUnit30 = document.querySelector("#cell-30-unit");
export const cellUnitContainerStatAttackStat30 = document.querySelector(
  "#cell-30-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat30 = document.querySelector(
  "#cell-30-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat30 = document.querySelector(
  "#cell-30-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo30 = document.querySelector(
  "#cell-30-unit--price--info"
);
export const cellUnitPrice30 = document.querySelector("#cell-30-unit--price");
// Клетка 32
export const cellMaster32 = document.querySelector("#cell-32-master");
export const cellUnit32 = document.querySelector("#cell-32-unit");
export const cellUnitContainerStatAttackStat32 = document.querySelector(
  "#cell-32-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat32 = document.querySelector(
  "#cell-32-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat32 = document.querySelector(
  "#cell-32-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo32 = document.querySelector(
  "#cell-32-unit--price--info"
);
export const cellUnitPrice32 = document.querySelector("#cell-32-unit--price");
// Клетка 34
export const cellMaster34 = document.querySelector("#cell-34-master");
export const cellUnit34 = document.querySelector("#cell-34-unit");
export const cellUnitContainerStatAttackStat34 = document.querySelector(
  "#cell-34-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat34 = document.querySelector(
  "#cell-34-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat34 = document.querySelector(
  "#cell-34-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo34 = document.querySelector(
  "#cell-34-unit--price--info"
);
export const cellUnitPrice34 = document.querySelector("#cell-34-unit--price");
// Клетка 36
export const cellMaster36 = document.querySelector("#cell-36-master");
export const cellUnit36 = document.querySelector("#cell-36-unit");
export const cellUnitContainerStatAttackStat36 = document.querySelector(
  "#cell-36-unit-container--stat---attack---stat"
);
export const cellUnitContainerStatHpStat36 = document.querySelector(
  "#cell-36-unit-container--stat---hp---stat"
);
export const cellUnitContainerStatAuthorityStat36 = document.querySelector(
  "#cell-36-unit-container--stat---authority---stat"
);
export const cellUnitPriceInfo36 = document.querySelector(
  "#cell-36-unit--price--info"
);
export const cellUnitPrice36 = document.querySelector("#cell-36-unit--price");

// Клетки как объекты
// Типы:
// 1 - Игровая карта
export const cell1Start = {
  obj: cell1StartObj,
  type: 0,
  name: "Старт",
};
export const cell2 = {
  obj: cell2Obj,
  type: 1,
  name: "Забытое поселение",
  color: "березовый",
  master: "Нейтральный",
  attack: 2,
  hp: 7,
  authority: 0,
  price: 700,
  toll: 0,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 1,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  img: "",
  bonus: '+1 к здоровью',
};
export const cell3 = {
  obj: cell3Obj,
  type: 1,
  name: "Старый торговец",
  color: "березовый",
  master: "Нейтральный",
  attack: 3,
  hp: 6,
  authority: 0,
  price: 750,
  toll: 0,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 150,
  bonusAuthority: 0,
  colorIdBirch: 1,
  img: "",
  bonus: '+150 к золоту',
};
export const cell4 = {
  obj: cell4Obj,
  type: 2,
  name: "Кузнец. Тяжёлая броня",
  master: "Нейтральный",
  contractMoney: 250,
  bonusAttack: 0,
  bonusHp: 2,
  bonusArmor: 0.2,
  bonusMoney: 0,
  bonusAuthority: 0,
  bonus: "+20 к броне и +2 к здоровью",
  // tag: 'heavy',
};
export const cell5 = {
  obj: cell5Obj,
  type: 1,
  name: "Покои вожака",
  color: "березовый",
  master: "Нейтральный",
  attack: 3,
  hp: 7,
  authority: 0,
  price: 900,
  toll: 0,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 1,
  colorIdBirch: 1,
  img: "",
  bonus: '+1 к авторитету',
};
export const cell6 = {
  obj: cell6Obj,
  type: 1,
  name: "Земля ополченцев",
  color: "пурпурный",
  master: "Нейтральный",
  attack: 4,
  hp: 7,
  authority: 0,
  price: 1100,
  toll: 0,
  armor: 0,
  bonusAttack: 1,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdPurple: 1,
  img: "",
  bonus: '+1 к атаке',
};
export const cell7 = {
  obj: cell7Obj,
  type: 3,
  name: "'Ктетка 7'",
};
export const cell8 = {
  obj: cell8Obj,
  type: 1,
  name: "Роща шамана",
  color: "пурпурный",
  master: "Нейтральный",
  attack: 2,
  hp: 9,
  authority: 0,
  price: 1000,
  toll: 0,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 1,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdPurple: 1,
  img: "",
  bonus: '+1 к здоровью',
};
export const cell9 = {
  obj: cell9Obj,
  type: 1,
  name: "Рудник",
  color: "пурпурный",
  master: "Нейтральный",
  attack: 3,
  hp: 8,
  authority: 0,
  price: 1000,
  toll: 0,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 250,
  bonusAuthority: 0,
  colorIdPurple: 1,
  img: "",
  bonus: '+250 к золоту',
};
export const cell10 = {
  obj: cell10Obj,
  type: 'tournament',
  name: "Турнирная арена",
};
export const cell11 = {
  obj: cell11Obj,
  type: 1,
  name: "Тренировочный лагерь",
  color: "коричневый",
  master: "Нейтральный",
  attack: 5,
  hp: 8,
  authority: 0,
  price: 1500,
  toll: 0,
  armor: 0,
  bonusAttack: 1,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdBrown: 1,
  img: "",
  bonus: '+1 к атаке',
};
export const cell12 = {
  obj: cell12Obj,
  type: 3,
  name: "'Ктетка 12'",
};
export const cell13 = {
  obj: cell13Obj,
  type: 1,
  name: "Рынок около арены",
  color: "коричневый",
  master: "Нейтральный",
  attack: 4,
  hp: 9,
  authority: 0,
  price: 1300,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 250,
  bonusAuthority: 0,
  colorIdBrown: 1,
  img: "",
  bonus: '+250 к золоту',
};
export const cell14 = {
  obj: cell14Obj,
  type: 2,
  name: "Знямяносец",
  master: "Нейтральный",
  contractMoney: 150,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 1,
  bonus: "+1 к влиянию",
  // tag: 'heavy',
};
export const cell15 = {
  obj: cell15Obj,
  type: 1,
  name: "Покои чемпиона арены",
  color: "оранжевый",
  master: "Нейтральный",
  attack: 7,
  hp: 10,
  authority: 0,
  price: 2000,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 1,
  colorIdOrange: 1,
  img: "",
  bonus: '+1 к авторитету',
};
export const cell16 = {
  obj: cell16Obj,
  type: 1,
  name: "Дом знахаря",
  color: "оранжевый",
  master: "Нейтральный",
  attack: 5,
  hp: 10,
  authority: 0,
  price: 1400,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 1,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdOrange: 1,
  img: "",
  bonus: '+1 к здоровью',
};
export const cell17 = {
  obj: cell17Obj,
  type: 3,
  name: "'Ктетка 17'",
};
export const cell18 = {
  obj: cell18Obj,
  type: 1,
  name: "Площадь славы",
  color: "оранжевый",
  master: "Нейтральный",
  attack: 7,
  hp: 10,
  authority: 0,
  price: 2200,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 1,
  colorIdOrange: 1,
  img: "",
  bonus: '+1 к авторитету',
};
export const cell19 = {
  obj: cell19Obj,
  type: 0,
  name: "'Ктетка 19'",
};
export const cell20 = {
  obj: cell20Obj,
  type: 1,
  name: "Торговый морской порт",
  color: "жёлтый",
  master: "Нейтральный",
  attack: 8,
  hp: 9,
  authority: 0,
  price: 1900,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 500,
  bonusAuthority: 0,
  colorIdYellow: 1,
  img: "",
  bonus: '+500 к золоту',
};
export const cell21 = {
  obj: cell21Obj,
  type: 1,
  name: "Бастион стражи морского порта",
  color: "жёлтый",
  master: "Нейтральный",
  attack: 8,
  hp: 11,
  authority: 0,
  price: 2100,
  armor: 0,
  bonusAttack: 1,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdYellow: 1,
  img: "",
  bonus: '+1 к атаке',
};
export const cell22 = {
  obj: cell22Obj,
  type: 2,
  name: "Кузнец. Лёгкая броня",
  master: "Нейтральный",
  contractMoney: 200,
  bonusAttack: 1,
  bonusHp: 2,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  bonus: "+1 к атаке и +2 к здоровью",
  // tag: 'heavy',
};
export const cell23 = {
  obj: cell23Obj,
  type: 1,
  name: "Секретный полигон",
  color: "жёлтый",
  master: "Нейтральный",
  attack: 9,
  hp: 11,
  authority: 0,
  price: 2200,
  armor: 0,
  bonusAttack: 1,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdYellow: 1,
  img: "",
  bonus: '+1 к акатке',
};
export const cell24 = {
  obj: cell24Obj,
  type: 3,
  name: "'Ктетка 24'",
};
export const cell25 = {
  obj: cell25Obj,
  type: 1,
  name: "Морской военный госпиталь",
  color: "зелёный",
  master: "Нейтральный",
  attack: 6,
  hp: 12,
  authority: 1,
  price: 2000,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 2,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdGreen: 1,
  img: "",
  bonus: '+2 к здоровью',
};
export const cell26 = {
  obj: cell26Obj,
  type: 1,
  name: "Центральный морской рынок",
  color: "зелёный",
  master: "Нейтральный",
  attack: 9,
  hp: 11,
  authority: 1,
  price: 2100,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 550,
  bonusAuthority: 0,
  colorIdGreen: 1,
  img: "",
  bonus: '+550 к золоту',
};
export const cell27 = {
  obj: cell27Obj,
  type: 1,
  name: "Цитадель морского порта",
  color: "зелёный",
  master: "Нейтральный",
  attack: 10,
  hp: 12,
  authority: 1,
  price: 2800,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 1,
  colorIdGreen: 1,
  img: "",
  bonus: '+2 к авторитету',
};
export const cell28 = {
  obj: cell28Obj,
  type: 0,
  name: "'Ктетка 28'",
};
export const cell29 = {
  obj: cell29Obj,
  type: 1,
  name: "Королевский горнизон",
  color: "красный",
  master: "Нейтральный",
  attack: 11,
  hp: 14,
  authority: 2,
  price: 3100,
  armor: 0,
  bonusAttack: 2,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdRed: 1,
  img: "",
  bonus: '+2 к атаке',
};
export const cell30 = {
  obj: cell30Obj,
  type: 1,
  name: "'Святилище королевства",
  color: "красный",
  master: "Нейтральный",
  attack: 11,
  hp: 12,
  authority: 2,
  price: 3200,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 2,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdRed: 1,
  img: "",
  bonus: '+2 к здоровью',
};
export const cell31 = {
  obj: cell31Obj,
  type: 3,
  name: "'Ктетка 31'",
};
export const cell32 = {
  obj: cell32Obj,
  type: 1,
  name: "Королевские сады",
  color: "красный",
  master: "Нейтральный",
  attack: 13,
  hp: 12,
  authority: 2,
  price: 3500,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 2,
  colorIdRed: 1,
  img: "",
  bonus: '+2 к авторитету',
};
export const cell33 = {
  obj: cell33Obj,
  type: 2,
  name: "Кузнец-оруженосец",
  master: "Нейтральный",
  contractMoney: 300,
  bonusAttack: 3,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  bonus: "+3 к атаке",
  // tag: 'heavy',
};
export const cell34 = {
  obj: cell34Obj,
  type: 1,
  name: "Казармы королевской армии",
  color: "синий",
  master: "Нейтральный",
  attack: 15,
  hp: 15,
  authority: 4,
  price: 4500,
  armor: 0,
  bonusAttack: 3,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 0,
  colorIdBlue: 1,
  img: "",
  bonus: '+3 к атаке',
};
export const cell35 = {
  obj: cell35Obj,
  type: 3,
  name: "'Ктетка 35'",
};
export const cell36 = {
  obj: cell36Obj,
  type: 1,
  name: "Королевкий замок",
  color: "синий",
  master: "Нейтральный",
  attack: 18,
  hp: 15,
  authority: 5,
  price: 5500,
  armor: 0,
  bonusAttack: 0,
  bonusHp: 0,
  bonusArmor: 0,
  bonusMoney: 0,
  bonusAuthority: 3,
  colorIdBlue: 1,
  img: "",
  bonus: '+3 к атаке',
};
// Массив из клеток
export const collectionCell = [
  cell1Start,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
  cell7,
  cell8,
  cell9,
  cell10,
  cell11,
  cell12,
  cell13,
  cell14,
  cell15,
  cell16,
  cell17,
  cell18,
  cell19,
  cell20,
  cell21,
  cell22,
  cell23,
  cell24,
  cell25,
  cell26,
  cell27,
  cell28,
  cell29,
  cell30,
  cell31,
  cell32,
  cell33,
  cell34,
  cell35,
  cell36,
];
// Функции масштабирвоание клеток
export const scaleCellTopBottom = () => {
  cardTopBottom.forEach(function (cardTopBottomAll) {
    cardTopBottomAll.addEventListener("click", function () {
      cardTopBottomAll.classList.toggle("show-card-top-bottom");
      overlappingBox.classList.toggle("hidden");
    });
  });
};

export const scaleCellRight = () => {
  cardRight.forEach(function (cardRightAll) {
    cardRightAll.addEventListener("click", function () {
      cardRightAll.classList.toggle("show-card-right");
      overlappingBox.classList.toggle("hidden");
    });
  });
};

export const scaleCellLeft = () => {
  cardLeft.forEach(function (cardLeftAll) {
    cardLeftAll.addEventListener("click", function () {
      cardLeftAll.classList.toggle("show-card-left");
      overlappingBox.classList.toggle("hidden");
    });
  });
};

// Функция интеграции характеристик в карты
let cellMaster;
let cellUnitContainerStatAttackStat;
let cellUnitContainerStatHpStat;
let cellUnitContainerStatAuthorityStat;
let cellUnitPrice;
let i;
export const integrationStatCardStartGame = () => {
  // Фор
  for (i = 0; i < 36; i++) {
    if (collectionCell[i].type == 1 || collectionCell[i].type == 1) {
      cellMaster = document.querySelector("#cell-" + (i + 1) + "-master");
      cellUnitContainerStatAttackStat = document.querySelector(
        "#cell-" + (i + 1) + "-unit-container--stat---attack---stat"
      );
      cellUnitContainerStatHpStat = document.querySelector(
        "#cell-" + (i + 1) + "-unit-container--stat---hp---stat"
      );
      cellUnitContainerStatAuthorityStat = document.querySelector(
        "#cell-" + (i + 1) + "-unit-container--stat---authority---stat"
      );
      cellUnitPrice = document.querySelector(
        "#cell-" + (i + 1) + "-unit--price"
      );
      cellMaster.innerText = collectionCell[i].master;
      cellUnitContainerStatAttackStat.innerText = collectionCell[i].attack;
      cellUnitContainerStatHpStat.innerText = collectionCell[i].hp;
      cellUnitContainerStatAuthorityStat.innerText = collectionCell[i].authority;
      cellUnitPrice.innerText = collectionCell[i].price;
    }
  }
};
export const recalculationCardPlayer = () => {
  for (i = 0; i < 36; i++) {
    if ((collectionCell[i].type == 1 || collectionCell[i].type == 2) && collectionCell[i].master == collectionPlayer[stepMovePlayer].name) {
        cellMaster = document.querySelector("#cell-" + (i + 1) + "-master");
      cellUnitContainerStatAttackStat = document.querySelector(
        "#cell-" + (i + 1) + "-unit-container--stat---attack---stat"
      );
      cellUnitContainerStatHpStat = document.querySelector(
        "#cell-" + (i + 1) + "-unit-container--stat---hp---stat"
      );
      cellUnitContainerStatAuthorityStat = document.querySelector(
        "#cell-" + (i + 1) + "-unit-container--stat---authority---stat"
      );
      cellUnitPrice = document.querySelector(
        "#cell-" + (i + 1) + "-unit--price"
      );
      cellMaster.innerText = collectionPlayer[stepMovePlayer].name;
      if (collectionCell[i].type == 1) {
        cellUnitContainerStatAttackStat.innerText = collectionPlayer[stepMovePlayer].attack;
        cellUnitContainerStatHpStat.innerText = collectionPlayer[stepMovePlayer].hp;
        cellUnitContainerStatAuthorityStat.innerText = collectionPlayer[stepMovePlayer].authority;
        cellUnitPrice.innerText = collectionPlayer[stepMovePlayer].startMoney / 2;
      } 
    }
  }
};
// Перебор карт одного цвета у одного владельца
export const checkColorCardCollectionBirch = [];
export const checkColorCardCollectionPurple = [];
export const checkColorCardCollectionBrown = [];
export const checkColorCardCollectionOrange = [];
export const checkColorCardCollectionYollow = [];
export const checkColorCardCollectionGreen = [];
export const checkColorCardCollectionRed = [];
export const checkColorCardCollectionBlue = [];
export let cleckAmountCollectionBirch = 0;
export let cleckAmountCollectionPurple = 0;
export let cleckAmountCollectionBrown = 0;
export let cleckAmountCollectionOrange = 0;
export let cleckAmountCollectionYollow = 0;
export let cleckAmountCollectionGreen = 0;
export let cleckAmountCollectionRed = 0;
export let cleckAmountCollectionBlue = 0;
let cleckAmountCollectionBirchMaster;
let cleckAmountCollectionPurpleMaster;
let cleckAmountCollectionBrownMaster;
let cleckAmountCollectionOrangeMaster;
let cleckAmountCollectionYollowMaster;
let cleckAmountCollectionGreenMaster;
let cleckAmountCollectionRedMaster;
let cleckAmountCollectionBlueMaster;
export let elColorMaster;
export let elColorName;
let playerName;
let searchPlayer;
let colorCollection;
// Проверка на цвет при присваеванию переменной
const checkColorFunction = (colorFunction) => {
  if (colorFunction === "березовый") {
    cleckAmountCollectionBirch = 1;
  }  
  else if (colorFunction === "пурпурный") {
    cleckAmountCollectionPurple = 1

  }
  else if (colorFunction === "коричневый") {
    cleckAmountCollectionBrown = 1

  }
  else if (colorFunction === "оранжевый") {
    cleckAmountCollectionOrange = 1

  }
  else if (colorFunction === "жёлтый") {
    cleckAmountCollectionYollow = 1

  }
  else if (colorFunction === "зелёный") {
    cleckAmountCollectionGreen = 1

  }
  else if (colorFunction === "красный") {
    cleckAmountCollectionRed = 1

  }
  else if (colorFunction === "синий") {
    cleckAmountCollectionBlue = 1

  }
  else {
    console.log('Цвет не равен');
  }
}

export const checkColorCardPlayer = (checkColor, fullSetAttack, fullSetHp, fullSetAuthority, fullStartMoney, collection, checkColorLet) => {
elColorName = collectionPlayer[stepMovePlayer].name;
collectionCell.forEach(elColor => {
  if (elColor.color == checkColor) {
    collection.push(elColor);
    elColorMaster = elColor;
    colorCollection = elColor.color;
      }
  });
       if (collection.every(elColorMaster => elColorMaster.master === elColorName) && elColorMaster.master !== "Нейтральный" && checkColorLet !== 1) {
      playerName = elColorMaster.master;
       searchPlayer = collectionPlayer.map(indexPlayer => indexPlayer.name).indexOf(playerName);
      collectionPlayer[searchPlayer].attack = collectionPlayer[searchPlayer].attack + fullSetAttack;
      collectionPlayer[searchPlayer].hp = collectionPlayer[searchPlayer].hp + fullSetHp;
      collectionPlayer[searchPlayer].authority = collectionPlayer[searchPlayer].authority + fullSetAuthority;
      collectionPlayer[searchPlayer].startMoney = collectionPlayer[searchPlayer].startMoney + fullStartMoney;
      // Записываем владельца 
if (checkColor === "березовый") {
  cleckAmountCollectionBirchMaster = searchPlayer;
}
if (checkColor === "пурпурный") {
  cleckAmountCollectionPurpleMaster = searchPlayer;
}
if (checkColor === "коричневый") {
  cleckAmountCollectionBrownMaster = searchPlayer;
}
if (checkColor === "оранжевый") {
  cleckAmountCollectionOrangeMaster = searchPlayer;
}
if (checkColor === "жёлтый") {
  cleckAmountCollectionYollowMaster = searchPlayer;
}
if (checkColor === "зелёный") {
  cleckAmountCollectionGreenMaster = searchPlayer;
}
if (checkColor === "красный") {
  cleckAmountCollectionRedMaster = searchPlayer;
}
if (checkColor === "синий") {
  cleckAmountCollectionBlueMaster = searchPlayer;
}
// 
// Проверка на цвет при присваеванию переменной
checkColorFunction(colorCollection);
 } 
};
export const removeAttributePlayerColor = (checkColor, removeAttributeMaster) => {
 if (checkColor === "березовый" && cleckAmountCollectionBirch === 1) {
 cleckAmountCollectionBirch = 0;
 collectionPlayer[removeAttributeMaster].startMoney = removeAttributeMaster.startMoney - 650;
 // Вычитаем характеристики у старого владельца
 removeAttributePlayerColor (cleckAmountCollectionBirchMaster);    
 }
 if (checkColor === "пурпурный" && cleckAmountCollectionPurple === 1) {
  cleckAmountCollectionPurple = 0;
  collectionPlayer[removeAttributeMaster].hp = removeAttributeMaster.hp - 3;
// Вычитаем характеристики у старого владельца
removeAttributePlayerColor (cleckAmountCollectionPurpleMaster);    
}
 if (checkColor === "коричневый" && cleckAmountCollectionBrown === 1) {
  cleckAmountCollectionBrown = 0;
  removeAttributeMaster.attack = removeAttributeMaster.attack - 2;
 // Вычитаем характеристики у старого владельца
 removeAttributePlayerColor (cleckAmountCollectionBrownMaster);   
}
if (checkColor === "оранжевый" && cleckAmountCollectionOrange === 1) {
  cleckAmountCollectionOrange = 0;
  removeAttributeMaster.hp = removeAttributeMaster.hp - 3;
 removeAttributeMaster.hp = removeAttributeMaster.startMoney - 300;
 // Вычитаем характеристики у старого владельца
 removeAttributePlayerColor (cleckAmountCollectionOrangeMaster);    
}
if (checkColor === "жёлтый" && cleckAmountCollectionYollow === 1) {
  cleckAmountCollectionYollow = 0;
  removeAttributeMaster.hp = removeAttributeMaster.hp - 3;
removeAttributeMaster.hp = removeAttributeMaster.authority - 2;
// Вычитаем характеристики у старого владельца
removeAttributePlayerColor (cleckAmountCollectionYollowMaster);    
}
if (checkColor === "зелёный" && cleckAmountCollectionGreen === 1) {
  cleckAmountCollectionGreen = 0;
  removeAttributeMaster.hp = removeAttributeMaster.hp - 5;
  removeAttributeMaster.attack = removeAttributeMaster.attack - 3;
// Вычитаем характеристики у старого владельца
removeAttributePlayerColor (cleckAmountCollectionGreenMaster);    
}
if (checkColor === "красный" && cleckAmountCollectionRed === 1) {
  cleckAmountCollectionRed = 0;
  removeAttributeMaster.attack = removeAttributeMaster.attack - 2;
  removeAttributeMaster.hp = removeAttributeMaster.hp - 6;
  removeAttributeMaster.hp = removeAttributeMaster.startMoney - 500;
// Вычитаем характеристики у старого владельца
removeAttributePlayerColor (cleckAmountCollectionRedMaster);    
}
if (checkColor === "синий" && cleckAmountCollectionBlue === 1) {
  cleckAmountCollectionBlue = 0;
  removeAttributeMaster.attack = removeAttributeMaster.attack - 4;
  removeAttributeMaster.hp = removeAttributeMaster.hp - 4;
  removeAttributeMaster.hp = removeAttributeMaster.authority - 2;
  removeAttributeMaster.hp = removeAttributeMaster.startMoney - 500;
// Вычитаем характеристики у старого владельца
removeAttributePlayerColor (cleckAmountCollectionBlueMaster);    
        }
      }
// 
// Отбор и показ карт в руке игрока
export const containerPlayerCard = document.querySelector('#container-player-card');
export const containerPlayerCardFlex = document.querySelector('.container-player-card-flex');
const playerOneInterfaceCard = document.querySelector('#player-1-interface__card');
const playerTwoInterfaceCard = document.querySelector('#player-2-interface__card');
const playerThreeInterfaceCard = document.querySelector('#player-3-interface__card');
const playerFourInterfaceCard = document.querySelector('#player-4-interface__card');
const containerPlayerCardClosed = document.querySelector('#container-player-card__closed');
// Отбор карт
export let showCardHand;
export let showCardHandClone;
const collectionBreak = [];
let breakContract;
let s;
let breakCard;
let breakContract4;
let breakContract14;
let breakContract22;
let breakContract33;
const showCardHandFunction = (indexPlayer) => {
  containerPlayerCardFlex.innerHTML = '';
  for (s = 0; s < 36; s++) {
    if ((collectionCell[s].type === 1|| collectionCell[s].type === 2) && collectionCell[s].master === collectionPlayer[indexPlayer].name) {
      showCardHand = document.querySelector("#cell-" + (s + 1));
      showCardHandClone = showCardHand.cloneNode(true);
      containerPlayerCardFlex.append(showCardHandClone);
      if ((s >= 10 && s <= 17) || (s >= 27 && s <= 36)) {
        showCardHandClone.classList.add('show-card-transform');
        showCardHandClone.classList.remove('card-right');
        showCardHandClone.classList.remove('card-left');
      } else {
        showCardHandClone.classList.add('show-card-norm');
        showCardHandClone.classList.remove('card-top-bottom');
      }
    }
    if (collectionCell[s].type === 2){
      breakContract = document.querySelector("#cell-" + (s + 1) + "-contract");
      breakContract.style.display='block';
      console.log(collectionCell[s]);
  // Разрыв контракта с картами начало
breakContract4 = document.querySelector("#cell-4-contract");
breakContract14 = document.querySelector("#cell-14-contract");
breakContract22 = document.querySelector("#cell-22-contract");
breakContract33 = document.querySelector("#cell-33-contract");
  const breakContractFunction = (stepCollection, cell) => {    
  collectionPlayer[stepMovePlayer].money = collectionPlayer[stepMovePlayer].money - collectionCell[stepCollection].contractMoney;
  collectionPlayer[stepMovePlayer].consumption = collectionPlayer[stepMovePlayer].consumption - collectionCell[stepCollection].contractMoney;
  breakContract4.style.display='none';
  breakContract14.style.display='none';
  breakContract22.style.display='none';
  breakContract33.style.display='none';
  // Получение параметров из карты и передача их игроку
  collectionPlayer[stepMovePlayer].attack = collectionPlayer[stepMovePlayer].attack - collectionCell[stepCollection].bonusAttack;
  collectionPlayer[stepMovePlayer].hp = collectionPlayer[stepMovePlayer].hp - collectionCell[stepCollection].bonusHp;
  collectionPlayer[stepMovePlayer].armor = collectionPlayer[stepMovePlayer].armor - collectionCell[stepCollection].bonusArmor;
  collectionPlayer[stepMovePlayer].authority = collectionPlayer[stepMovePlayer].authority - collectionCell[stepCollection].bonusAuthority;
      // Функция получения атрибутов игркоов
getAttributePlayers();
// Функция записи атрибутов от игрока в краты
recalculationCardPlayer();
containerPlayerCard.style.display='none';
overlappingBox.classList.add("hidden");
containerPlayerCardFlex.innerHTML = '';
breakCard =  document.querySelector('#cell-' + cell + '-master');
collectionCell[stepCollection].master = "Нейтральный";
breakCard.innerText = "Нейтральный";
  }
  breakContract4.onclick = () => { 
    if (collectionPlayer[stepMovePlayer].name === collectionCell[3].master) {
      breakContractFunction(3, 4);
    } else {
log.innerHTML += "Вы не можете разорвать контракт с этим наёмником, так как, контракт заключён с " + collectionCell[3].master + '<br>';
log.scrollBy(100, 100);
 }
}
// 
  breakContract14.onclick = () => {
    if (collectionPlayer[stepMovePlayer].name === collectionCell[13].master) {
  breakContractFunction(13, 14); 
} else {
  log.innerHTML += "Вы не можете разорвать контракт с этим наёмником, так как, контракт заключён с " + collectionCell[13].master + '<br>';
  log.scrollBy(100, 100);
   }
 }
 breakContract22.onclick = () => {
  if (collectionPlayer[stepMovePlayer].name === collectionCell[21].master) {
  breakContractFunction(21, 22); 
} else {
  log.innerHTML += "Вы не можете разорвать контракт с этим наёмником, так как, контракт заключён с " + collectionCell[21].master + '<br>';
  log.scrollBy(100, 100);
   }
}
breakContract33.onclick = () => {
  if (collectionPlayer[stepMovePlayer].name === collectionCell[32].master) {
  breakContractFunction(32, 33); 
} else {
  log.innerHTML += "Вы не можете разорвать контракт с этим наёмником, так как, контракт заключён с " + collectionCell[32].master + '<br>';
  log.scrollBy(100, 100);
   }
}
// Разрыв контракта с картами конец
}

      }
    }
  // }}
// Нажатие кнопки карт в интерфейсе игрока. Через вложенную функцию
playerOneInterfaceCard.onclick = () => {
  containerPlayerCard.style.display='block';
  overlappingBox.classList.remove("hidden");
  showCardHandFunction(0);
};
playerTwoInterfaceCard.onclick = () => {
  containerPlayerCard.style.display='block';
  overlappingBox.classList.remove("hidden");
  showCardHandFunction(1);
};
playerThreeInterfaceCard.onclick = () => {
  containerPlayerCard.style.display='block';
  overlappingBox.classList.remove("hidden");
  showCardHandFunction(2);
};
playerFourInterfaceCard.onclick = () => {
  containerPlayerCard.style.display='block';
  overlappingBox.classList.remove("hidden");
  showCardHandFunction(3);
};
containerPlayerCardClosed.onclick = () => {
  containerPlayerCard.style.display='none';
  overlappingBox.classList.add("hidden");
  containerPlayerCardFlex.innerHTML = '';
  breakContract4.style.display='none';
  breakContract14.style.display='none';
  breakContract22.style.display='none';
  breakContract33.style.display='none';
}