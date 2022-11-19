const myplayers = [
    {
      player: "freya",
      color: "purple",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.e1vuvTtXUL1VD4-MuZy0zgHaLa?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "kara",
      color: "yellow",
      role: "support",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/a/9/a99996f2e53ca0ed2f64e89880776cf399804fdd_2_429x748.jpeg",
    },
    {
      player: "thor",
      color: "yellow",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.UuqjpOB-T9AjVCVropfotgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "malosi",
      color: "yellow",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.vz5RQ5MIH4UjaQt3zOdp5wHaK8?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "malosi2",
      color: "yellow",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.vz5RQ5MIH4UjaQt3zOdp5wHaK8?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "onyx",
      color: "purple",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.b1E055IkzxUGvUCWWC6h6AHaO7?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "panthar",
      color: "purple",
      role: "hitter",
      url: "https://empires-and-puzzles.info/wp-content/uploads/2018/04/5-Panter-Guardian.jpg",
    },
    {
      player: "cobalt",
      color: "blue",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.-6fFteFlxOzN2YbaFwMLvQHaPE?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "athena",
      color: "blue",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/e/1/e1f376cbcd3263f6f4e41d5656548358ab60b74d_2_426x750.jpeg",
    },
    {
      player: "tarlak",
      color: "green",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.iwKFqcSxYw0amumnBf1uvAHaKz?w=114&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "quenell",
      color: "green",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/1/b/1b55aff167b45978da2e896827583e4e515c3dc2_2_478x750.jpeg",
    },
    {
      player: "frigg",
      color: "green",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.o87rlofw7jpfl0VNebAdqQHaLw?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "evelyn",
      color: "green",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.yMDHmI0wRyTGzl3I1vdM0QAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "evelyn2",
      color: "green",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.yMDHmI0wRyTGzl3I1vdM0QAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "marjana",
      color: "red",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.ePsnPrtJ6SS3uq9Ho1I_kAAAAA?w=186&h=296&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "marjana2",
      color: "red",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.ePsnPrtJ6SS3uq9Ho1I_kAAAAA?w=186&h=296&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "santa-claus",
      color: "red",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.HgooW5kD7a9iFUfpj4cIKAAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "hannah",
      color: "purple",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.s47-6-ts_m-Y2uKsoHCHMAHaKz?w=117&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "congalach",
      color: "green",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/original/3X/3/3/3310707ac8c8a0c83570e347f25eed39e5f03b98.jpeg",
    },
    {
      player: "garnet",
      color: "red",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.ck2PH7Z3l2R2EWIPDZ33LAHaKz?w=130&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "loki",
      color: "blue",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.Wl5VzQoFWNvLDY2-M8cijgHaLV?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "loki2",
      color: "blue",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.Wl5VzQoFWNvLDY2-M8cijgHaLV?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "clarissa",
      color: "purple",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.xC7Ldzv1dgQvXBJ2D_DgDgHaK6?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "kageburado",
      color: "purple",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.uJze2O1d2CeIDA1789uYqwHaKz?w=113&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "poseidon",
      color: "yellow",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.1YMZLkuKZmRU1hoeqgnNNwAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "skadi",
      color: "blue",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.RFlHmpLrCAK6cs2DrH7jpgHaMM?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "ladyofthelake",
      color: "green",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.t4E78WMlvzbWXNW00BjJgAHaLv?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "el-naddaha",
      color: "green",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/d/f/df1bc1098d1ae8bb601c0882e8da975c597842fb_2_462x750.jpeg",
    },
    {
      player: "krampos",
      color: "blue",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.nOBJyqKjMqNXKgOAHmLmjAHaMM?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "esme",
      color: "blue",
      role: "support",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/5/f/5fe2ebe61b97147bacb4b4860375216db3713984_2_478x750.jpeg",
    },
    {
      player: "cristobal",
      color: "green",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/2/0/2063e2f2a628addce8633ae3d9620e33304ad92d_2_417x750.jpeg",
    },
    {
      player: "elizabeth",
      color: "red",
      role: "hitter",
      url: "data:image/jpeg;base64,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",
    },
    {
      player: "arfanias",
      color: "purple",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/8/3/8311dbfeaaab971f9aa97f0cb2df26bc57dd5c7d_2_480x750.jpeg",
    },
    {
      player: "viscaro",
      color: "purple",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/4/c/4c844858962a19234cfcd30c402079313dcf7158_2_480x748.jpeg",
    },
    {
      player: "iris",
      color: "blue",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/3/e/3eaab40ff208fb027582c9c4318146f871d934f1_2_484x750.jpeg",
    },
    {
      player: "mica",
      color: "yellow",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.mqEmwUlM34zmTKZXoDWZIgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "hanitra",
      color: "yellow",
      role: "support",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/3/a/3a017e1bbe65b8de240be99a2081cfeaf4f78f88_2_486x750.jpeg",
    },
    {
      player: "tyr",
      color: "red",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.BHPADvMs5fGapg5u5NfAywHaLi?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "mitsuko",
      color: "red",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.unOHgkbX3cI3MG3cIEemZwHaMW?w=115&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "telluria",
      color: "green",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.n2bNZ18VEmaz3GoqQmBCoAHaL0?w=114&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "raffaele",
      color: "blue",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.XRLSDOg59fscumLMnHSSjgHaK3?w=128&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "kingston",
      color: "green",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.ynOsbwDhaYw3bzru2HTqOgHaL9?w=115&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "kingston2",
      color: "green",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.ynOsbwDhaYw3bzru2HTqOgHaL9?w=115&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "grazul",
      color: "red",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.xnzf4V3F4erhBgHwqL8R_QHaL_?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "joon",
      color: "yellow",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.bU6wD_8u7WNBLfFBDi6PfgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "aegir",
      color: "blue",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.GM3ATUDVvXnPBRO5d1aaiAAAAA?w=115&h=183&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "quintus",
      color: "purple",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.tLD1tfmP6bonj2SVhq1pcAAAAA?w=110&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "azlar",
      color: "red",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.sVkh0hV-T7qsgZkvz3WB2QAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "norns",
      color: "yellow",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.DiwUxvAbrC3FgC0TGnXhIwHaLJ?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "fenrir",
      color: "blue",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.Lruq81SH2DK4sGOFS4B6wgHaLc?w=186&h=287&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "ursena",
      color: "purple",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.pIz3b0gZ3kMlWRvi38_ogAHaKz?w=129&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "franz",
      color: "green",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/5/a/5a39e328cf985c78cb8173f24b3c0750e45148b8_2_477x750.jpeg",
    },
    {
      player: "rigard",
      color: "purple",
      role: "support",
      url: "https://th.bing.com/th/id/OIP._ePKzvpYUa4aBVPCdccXGgHaNK?w=115&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "rigard2",
      color: "purple",
      role: "support",
      url: "https://th.bing.com/th/id/OIP._ePKzvpYUa4aBVPCdccXGgHaNK?w=115&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "rigard3",
      color: "purple",
      role: "support",
      url: "https://th.bing.com/th/id/OIP._ePKzvpYUa4aBVPCdccXGgHaNK?w=115&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "rigard4",
      color: "purple",
      role: "support",
      url: "https://th.bing.com/th/id/OIP._ePKzvpYUa4aBVPCdccXGgHaNK?w=115&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "sergei",
      color: "purple",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.yIEP63txeIzr3cvo3VWnAAHaKz?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "kiril",
      color: "blue",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.jkErz57dVjC52jP5kLZIHAHaKz?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "junaid",
      color: "red",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/original/3X/4/4/449959ebc0829c56070fee73f4cf9f22ef41d826.jpeg",
    },
    {
      player: "junaid2",
      color: "red",
      role: "hitter",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/original/3X/4/4/449959ebc0829c56070fee73f4cf9f22ef41d826.jpeg",
    },
    {
      player: "frank",
      color: "blue",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.64d9UW_0D6w-pYZQIXDz4gHaKz?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "ferant",
      color: "red",
      role: "support",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/e/4/e49d7e06529644fe4282804d9da96781d8603416_2_475x750.jpeg",
    },
    {
      player: "almur",
      color: "green",
      role: "hitter",
      url: "https://th.bing.com/th/id/OIP.YZKr-YdqvK9Qyuz8YmstcQHaNL?w=186&h=331&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "proteus",
      color: "purple",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.HwJfQkQGJXQgF1B29BTO5gAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "hansel",
      color: "green",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.JaDPz59guUAP4owy9gmtIQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "hansel2",
      color: "green",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.JaDPz59guUAP4owy9gmtIQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "wang-yuanji",
      color: "yellow",
      role: "support",
      url: "https://aws1.discourse-cdn.com/smallgiantgames/original/3X/a/9/a905e0ba433fcc004d5e4c9af9ff684da0501ddc.jpeg",
    },
    {
      player: "gullinbursti",
      color: "yellow",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.Bty5jkIg2sW8xGMEwrkpsQHaLv?w=186&h=295&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      player: "gullinbursti2",
      color: "yellow",
      role: "support",
      url: "https://th.bing.com/th/id/OIP.Bty5jkIg2sW8xGMEwrkpsQHaLv?w=186&h=295&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
  ];

  // assigning checkbox and radio variables
  const purplePlayersCheckbox = document.getElementById("purple-player");
  const yellowPlayersCheckbox = document.getElementById("yellow-player");
  const bluePlayersCheckbox = document.getElementById("blue-player");
  const greenPlayersCheckbox = document.getElementById("green-player");
  const redPlayersCheckbox = document.getElementById("red-player");
  const bothPlayersRadio = document.getElementById("both");
  const hitterPlayersRadio = document.getElementById("hitter");
  const supportPlayersRadio = document.getElementById("support");

  //assigning team variables
  const teamOne = document.getElementById("team-one");
  const teamTwo = document.getElementById("team-two");
  const teamThree = document.getElementById("team-three");
  const teamFour = document.getElementById("team-four");
  const teamFive = document.getElementById("team-five");
  const teamSix = document.getElementById("team-six");
  let teamOneCount = 0;
  let teamTwoCount = 0;
  let teamThreeCount = 0;
  let teamFourCount = 0;
  let teamFiveCount = 0;
  let teamSixCount = 0;

  // assiging other variables
  const playerFormElement = document.getElementById("player-color-form");
  const divPlayers = document.querySelector(".players");

  // creating elements from player array
  function heroColors(heroColor) {
    for (let i = 0; i < myplayers.length; i++) {
      if (myplayers[i].color == heroColor) {
        const newGuy = document.createElement("img");
        newGuy.setAttribute("src", myplayers[i].url);
        newGuy.setAttribute("class", "hero");
        newGuy.classList.add(heroColor);
        newGuy.classList.add(myplayers[i].role);
        newGuy.setAttribute("alt", myplayers[i].player);
        newGuy.setAttribute("id", myplayers[i].player);
        divPlayers.appendChild(newGuy);
      }
    }
  }

  // Event Listeners on checkboxes
  purplePlayersCheckbox.addEventListener("click", function () {
    if (purplePlayersCheckbox.checked) {
      heroColors("purple");
    } else {
      const removeGuy = document.querySelectorAll(".purple");
      removeGuy.forEach(guy => {
        guy.remove();
      });
    }
  });

  yellowPlayersCheckbox.addEventListener("click", function () {
    if (yellowPlayersCheckbox.checked) {
      heroColors("yellow");
    } else {
      const removeGuy = document.querySelectorAll(".yellow");
      removeGuy.forEach(guy => {
        guy.remove();
      });
    }
  });

  bluePlayersCheckbox.addEventListener("click", function () {
    if (bluePlayersCheckbox.checked) {
      heroColors("blue");
    } else {
      const removeGuy = document.querySelectorAll(".blue");
      removeGuy.forEach(guy => {
        guy.remove();
      });
    }
  });

  greenPlayersCheckbox.addEventListener("click", function () {
    if (greenPlayersCheckbox.checked) {
      heroColors("green");
    } else {
      const removeGuy = document.querySelectorAll(".green");
      removeGuy.forEach(guy => {
        guy.remove();
      });
    }
  });

  redPlayersCheckbox.addEventListener("click", function () {
    if (redPlayersCheckbox.checked) {
      heroColors("red");
    } else {
      const removeGuy = document.querySelectorAll(".red");
      removeGuy.forEach(guy => {
        guy.remove();
      });
    }
  });

  // event listeners on radio buttons
  hitterPlayersRadio.addEventListener("click", function () {
    const removeRole = document.querySelectorAll(".hero");
    removeRole.forEach(guy => {
      guy.remove();
    });
    playerConferm();
    playerRoles();
  });

  supportPlayersRadio.addEventListener("click", function () {
    const removeRole = document.querySelectorAll(".hero");
    removeRole.forEach(guy => {
      guy.remove();
    });
    playerConferm();
    playerRoles();
  });

  bothPlayersRadio.addEventListener("click", function () {
    playerRoles();
  });

  // organizing based on role change
  function playerRoles() {
    if (bothPlayersRadio.checked) {
      const removeRole = document.querySelectorAll(".hero");
      removeRole.forEach(guy => {
        guy.remove();
      });
      playerConferm();
    }
    if (hitterPlayersRadio.checked) {
      const removeRole = document.querySelectorAll(".support");
      removeRole.forEach(guy => {
        guy.remove();
      });
    }
    if (supportPlayersRadio.checked) {
      const removeRole = document.querySelectorAll(".hitter");
      removeRole.forEach(guy => {
        guy.remove();
      });
    }
  }

  function playerConferm() {
    if (purplePlayersCheckbox.checked) {
      heroColors("purple");
    }
    if (yellowPlayersCheckbox.checked) {
      heroColors("yellow");
    }
    if (bluePlayersCheckbox.checked) {
      heroColors("blue");
    }
    if (greenPlayersCheckbox.checked) {
      heroColors("green");
    }
    if (redPlayersCheckbox.checked) {
      heroColors("red");
    }
  }

  // changing classes on player element and on player array, so players are not duplicated
  function changeClassesForTeams(playerOnTeam) {
    if (playerOnTeam.classList.contains("purple")) {
      playerOnTeam.classList.remove("purple");
      playerOnTeam.classList.add("purplePlayer");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerOnTeam.id == myplayers[i].player) {
          myplayers[i].color = "purplePlayer";
        }
      }
    }
    if (playerOnTeam.classList.contains("yellow")) {
      playerOnTeam.classList.remove("yellow");
      playerOnTeam.classList.add("yellowPlayer");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerOnTeam.id == myplayers[i].player) {
          myplayers[i].color = "yellowPlayer";
        }
      }
    }
    if (playerOnTeam.classList.contains("blue")) {
      playerOnTeam.classList.remove("blue");
      playerOnTeam.classList.add("bluePlayer");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerOnTeam.id == myplayers[i].player) {
          myplayers[i].color = "bluePlayer";
        }
      }
    }
    if (playerOnTeam.classList.contains("green")) {
      playerOnTeam.classList.remove("green");
      playerOnTeam.classList.add("greenPlayer");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerOnTeam.id == myplayers[i].player) {
          myplayers[i].color = "greenPlayer";
        }
      }
    }
    if (playerOnTeam.classList.contains("red")) {
      playerOnTeam.classList.remove("red");
      playerOnTeam.classList.add("redPlayer");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerOnTeam.id == myplayers[i].player) {
          myplayers[i].color = "redPlayer";
        }
      }
    }
    if (playerOnTeam.classList.contains("hitter")) {
      playerOnTeam.classList.remove("hitter");
      playerOnTeam.classList.add("hitterTeam");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerOnTeam.id == myplayers[i].player) {
          myplayers[i].role = "hitterTeam";
        }
      }
    }
    if (playerOnTeam.classList.contains("support")) {
      playerOnTeam.classList.remove("support");
      playerOnTeam.classList.add("supportTeam");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerOnTeam.id == myplayers[i].player) {
          myplayers[i].role = "supportTeam";
        }
      }
    }
    if (playerOnTeam.classList.contains("hero")) {
      playerOnTeam.classList.remove("hero");
      playerOnTeam.classList.add("teamHero");
    }
  }

  // change classes back when removing from teams
  function changeClassesBack(playerTossedBack) {
    if (playerTossedBack.classList.contains("teamHero")) {
      playerTossedBack.classList.remove("teamHero");
      playerTossedBack.classList.add("hero");
    }
    if (playerTossedBack.classList.contains("supportTeam")) {
      playerTossedBack.classList.remove("supportTeam");
      playerTossedBack.classList.add("support");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerTossedBack.id == myplayers[i].player) {
          myplayers[i].role = "support";
        }
      }
    }
    if (playerTossedBack.classList.contains("hitterTeam")) {
      playerTossedBack.classList.remove("hitterTeam");
      playerTossedBack.classList.add("hitter");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerTossedBack.id == myplayers[i].player) {
          myplayers[i].role = "hitter";
        }
      }
    }
    if (playerTossedBack.classList.contains("purplePlayer")) {
      playerTossedBack.classList.remove("purplePlayer");
      playerTossedBack.classList.add("purple");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerTossedBack.id == myplayers[i].player) {
          myplayers[i].color = "purple";
        }
      }
    }
    if (playerTossedBack.classList.contains("yellowPlayer")) {
      playerTossedBack.classList.remove("yellowPlayer");
      playerTossedBack.classList.add("yellow");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerTossedBack.id == myplayers[i].player) {
          myplayers[i].color = "yellow";
        }
      }
    }
    if (playerTossedBack.classList.contains("bluePlayer")) {
      playerTossedBack.classList.remove("bluePlayer");
      playerTossedBack.classList.add("blue");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerTossedBack.id == myplayers[i].player) {
          myplayers[i].color = "blue";
        }
      }
    }
    if (playerTossedBack.classList.contains("greenPlayer")) {
      playerTossedBack.classList.remove("greenPlayer");
      playerTossedBack.classList.add("green");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerTossedBack.id == myplayers[i].player) {
          myplayers[i].color = "green";
        }
      }
    }
    if (playerTossedBack.classList.contains("redPlayer")) {
      playerTossedBack.classList.remove("redPlayer");
      playerTossedBack.classList.add("red");
      for (let i = 0; i < myplayers.length; i++) {
        if (playerTossedBack.id == myplayers[i].player) {
          myplayers[i].color = "red";
        }
      }
    }
  }

  // event listener on available players, moving players to teams. team capacity is 5 players
  divPlayers.addEventListener("click", function (e) {
    if (teamOneCount < 5) {
      const movePlayer = document.getElementById(e.target.id);
      teamOne.appendChild(movePlayer);
      teamOneCount++;
      changeClassesForTeams(movePlayer);
    } else if (teamTwoCount < 5) {
      const movePlayer = document.getElementById(e.target.id);
      teamTwo.appendChild(movePlayer);
      teamTwoCount++;
      changeClassesForTeams(movePlayer);
    } else if (teamThreeCount < 5) {
      const movePlayer = document.getElementById(e.target.id);
      teamThree.appendChild(movePlayer);
      teamThreeCount++;
      changeClassesForTeams(movePlayer);
    } else if (teamFourCount < 5) {
      const movePlayer = document.getElementById(e.target.id);
      teamFour.appendChild(movePlayer);
      teamFourCount++;
      changeClassesForTeams(movePlayer);
    } else if (teamFiveCount < 5) {
      const movePlayer = document.getElementById(e.target.id);
      teamFive.appendChild(movePlayer);
      teamFiveCount++;
      changeClassesForTeams(movePlayer);
    } else if (teamSixCount < 5) {
      const movePlayer = document.getElementById(e.target.id);
      teamSix.appendChild(movePlayer);
      teamSixCount++;
      changeClassesForTeams(movePlayer);
    } else {
      alert("All teams are full");
    }
  });

  teamOne.addEventListener("click", function (e) {
    const movePlayer = document.getElementById(e.target.id);
    divPlayers.appendChild(movePlayer);
    teamOneCount--;
    changeClassesBack(movePlayer);
  });

  teamTwo.addEventListener("click", function (e) {
    const movePlayer = document.getElementById(e.target.id);
    divPlayers.appendChild(movePlayer);
    teamTwoCount--;
    changeClassesBack(movePlayer);
  });

  teamThree.addEventListener("click", function (e) {
    const movePlayer = document.getElementById(e.target.id);
    divPlayers.appendChild(movePlayer);
    teamThreeCount--;
    changeClassesBack(movePlayer);
  });

  teamFour.addEventListener("click", function (e) {
    const movePlayer = document.getElementById(e.target.id);
    divPlayers.appendChild(movePlayer);
    teamFourCount--;
    changeClassesBack(movePlayer);
  });

  teamFive.addEventListener("click", function (e) {
    const movePlayer = document.getElementById(e.target.id);
    divPlayers.appendChild(movePlayer);
    teamFiveCount--;
    changeClassesBack(movePlayer);
  });

  teamSix.addEventListener("click", function (e) {
    const movePlayer = document.getElementById(e.target.id);
    divPlayers.appendChild(movePlayer);
    teamSixCount--;
    changeClassesBack(movePlayer);
  });
