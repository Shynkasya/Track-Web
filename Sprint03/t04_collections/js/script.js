const guestList = new WeakSet();
guest1 = {name: "Olesia"}
guest2 = {name: "Olesia1"}
guest3 = {name: "Olesia2"}
guest4 = {name: "Olesia3"}
guest5 = {name: "Olesia4"}
guestList.add(guest1);
guestList.add(guest2);
guestList.add(guest3);
guestList.add(guest4);
guestList.add(guest5);
if(guestList.has(guest5) == true) console.log("GuestListTest1 Add success") 
else console.log("GuestListTest1 Add failed");
if(guestList.has({name: "Sasha"}) == false) console.log("GuestListTest2 Search success") 
else console.log("GuestListTest2 Search failed");
guestList.delete(guest5);
if(guestList.has(guest5) == false) console.log("GuestListTest3 Deleting success") 
else console.log("GuestListTest3 Deleting failed");



let menu = new Map();
menu.set("Miska Rice", 9999.5);
menu.set("Kura", 10000.8);
menu.set("Pork", 875.3);
menu.set("Coffee", 5.99);
menu.set("Chiken", 105.75);

if(menu.has("Miska Rice") == true) console.log("MenuTest1 Add success") 
else console.log("MenuTest1 Add failed");
if(menu.get("Miska Rice") == 9999.5) console.log("MenuTest2 Get price success") 
else console.log("MenuTest2 Get price failed");
menu.delete("Pork");
if(menu.has("Pork") == false) console.log("MenuTest3 Deleting success") 
else console.log("MenuTest3 Deleting failed");
if(menu.size == 4) console.log("MenuTest4 Get size success") 
else console.log("MenuTest4 Get size failed");
menu.clear();
if(menu.size == 0) console.log("MenuTest4 Clear success") 
else console.log("MenuTest4 Clear failed");




let bankVault = new WeakMap();
let vault1 = { id: "Olesia_box" };
let vault2 = { id: "Olesia1_box" };
let vault3 = { id: "Olesia2_box" };
let vault4 = { id: "Olesia3_box" };
let vault5 = { id: "Olesia4_box" };
bankVault.set(vault1, "1000 dollar");
bankVault.set(vault2, "32100 euro");
bankVault.set(vault3, "545 Hryvnia");
bankVault.set(vault4, "787 cent");
bankVault.set(vault5, "67867 coin");
if(bankVault.get(vault1) == "1000 dollar") console.log("BankVaultTest1 Get content success") 
else console.log("BankVaultTest1 Get content failed");





let coinCollection = new Set();
coinCollection.add("Hryvnia");
coinCollection.add("Dollar cent");
coinCollection.add("Euro cent");
coinCollection.add("Yuan");
coinCollection.add("Yen");
if(coinCollection.has("Euro cent") == true) console.log("CoinCollectionTest1 Add success") 
else console.log("CoinCollectionTest1 Add failed");
coinCollection.delete("Euro cent");
if(coinCollection.has("Euro cent") == false) console.log("CoinCollectionTest2 Remove success") 
else console.log("CoinCollectionTest2 Remove failed");
if(coinCollection.size == 4) console.log("CoinCollectionTest3 Size success") 
else console.log("CoinCollectionTest3 Size failed");
//coinCollection.forEach(coin => console.log(coin));