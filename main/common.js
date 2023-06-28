function typewriter(text, container, speed, mute = false) {
  let i = 0;
  return new Promise((resolve) => {
    function type() {
      if (i < text.length) {
        container.textContent += text.charAt(i);
        i++;
        let ran = Math.floor(Math.random() * typesfxs.length);
        if (!mute) {playSound(typesfxs[ran])};
        setTimeout(type, speed);
      }
      else if (i === text.length) {
        resolve();
      }
    }
    type();
  })
}

function switchPages(pageTo) {
  return new Promise((resolve) => {
    window.location.href = pageTo;
    resolve();
  })
}

function show(item) {
  return new Promise((resolve) => {
    item.classList.remove("hidden");
    resolve();
  })
}

function hide(item) {
  return new Promise((resolve) => {
    item.classList.add("hidden");
    resolve();
  })
}

function reverseTypewriter(letters, container, speed, mute = false) {
  return new Promise((resolve) => {
    function reverseType() {
      if (letters > 0) {
        let text = container.textContent;
        text = text.slice(0, text.length - 1);
        container.textContent = text;
        letters--;
        let ran = Math.floor(Math.random() * typesfxs.length);
        if (!mute) {playSound(typesfxs[ran])};
        setTimeout(reverseType, speed)
      }
      else if (letters === 0) {
        resolve();
      }
    }
    reverseType();
  })
}

function playSound(audioFile) {
  return new Promise ((resolve) => {
    let audio = new Audio(audioFile);
    audio.addEventListener("ended", () => {resolve();});
    audio.play();
  });
}

async function playLine(array, number, container, speed, wait) {
  return new Promise((resolve) => {
    let index = number - 1;
    playSound(array[index].file);
    typewriter(array[index].caption, container, speed, true)
      .then(() => sleep(wait))
      .then(() => resolve());
  });
  }

function sleep (ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}

function clearLines (cont, cont2, cont3, wait) {
  return new Promise((resolve) => {
    cont.textContent = "";
    cont2.textContent = "";
    cont3.textContent = "";
    resolve();
    })
}

const typesfxs = [
  "assets/audio/sfxs/typewriter/T01.mp3",
  "assets/audio/sfxs/typewriter/T02.mp3",
  "assets/audio/sfxs/typewriter/T03.mp3",
  "assets/audio/sfxs/typewriter/T04.mp3",
  "assets/audio/sfxs/typewriter/T05.mp3",
  "assets/audio/sfxs/typewriter/T06.mp3",
  "assets/audio/sfxs/typewriter/T07.mp3",
  "assets/audio/sfxs/typewriter/T08.mp3"
]

const rileyLines = [
  {file: "assets/audio/lines/riley/R01.mp3",
   caption: "RILEY: Freedom!!"},
  {file: "assets/audio/lines/riley/R023.mp3",
   caption: "RILEY: For sure. I'll text you... Alright, there's my ride, goodbye."},
  {file: "assets/audio/lines/riley/R04.mp3",
   caption: "RILEY (INTERNAL MONOLOUGE/IM): I...I can't.. Ugh... ARGHH... Wh- why did I even to make plans when all I want to do over the summer break is sleep and cry and... I don't wanna be a bad friend but... Why did I say something I can't fufill? I'm so stupid..."},
  {file: "assets/audio/lines/riley/R05.mp3",
   caption: "RILEY: O- oh nothing... It's nothing..."},
  {file: "assets/audio/lines/riley/R06.mp3",
   caption: "RILEY (IM): What are yo- what? I'm not delusional and just depressed and my mom is going to be absolutely FINE."},
  {file: "assets/audio/lines/riley/R07.mp3",
   caption: "RILEY (IM): We got home fine, you see? You're- you're the delusional one."},
  {file: "assets/audio/lines/riley/R08.mp3",
   caption: "RILEY (IM): For the last time, I- I did not choose this. I- I'm going to kill myself..."},
  {file: "assets/audio/lines/riley/R09.mp3",
   caption: "RILEY (IM): I HATE it here."},
  {file: "assets/audio/lines/riley/R10.mp3",
   caption: "RILEY (IM): Ho- wha- I- if I lacked the energy tha- that seems quit- kinda contridicting, don't you think?"},
  {file: "assets/audio/lines/riley/R10n.mp3",
   caption: "RILEY (IM): U- I- I can't... I can't with this. Wh- why doesn't anything work for me? Am I broken? Am I beyond repair?"},
  {file: "assets/audio/lines/riley/R11.mp3",
   caption: "RILEY (IM): I... I- I just want this to stop. Can I- can I just die?"},
  {file: "assets/audio/lines/riley/R12.mp3",
   caption: "RILEY (IM): But... What... What about the people I care about? I... I haven't done everything I want to do in this world. I... I haven't made it a better place..."},
  {file: "assets/audio/lines/riley/R13.mp3",
   caption: "RILEY (IM): Exactly why we need to change that, huh?"},
  {file: "assets/audio/lines/riley/R14.mp3",
   caption: "RILEY (IM): Fine... what do I write though?"},
  {file: "assets/audio/lines/riley/R15.mp3",
   caption: "RILEY (IM): O- okay, okay, I get the point"},
  {file: "assets/audio/lines/riley/R16.mp3",
   caption: "RILEY: Eh? He- what? What? Nonononono, let's work this ouu-"}
]

const depressionLines = [
  {file: "assets/audio/lines/depression/D01.mp3",
  caption: "DEPRESSION (ONLY HEARD BY RILEY): YOU USELESS KID! You can't even talk to your own mother about your situation! Ungrateful brat you are..."},
  {file: "assets/audio/lines/depression/D02.mp3",
  caption: "DEPRESSION: Wh- why can't you just be like a regular person? Why do you have to do this to yourself? Why do yo- why are you like this? Everyone else is happy. Why did you choose depression?"},
  {file: "assets/audio/lines/depression/D03.mp3",
  caption: "DEPRESSION: Is there something wrong with you? Why didn't that work? Y- you're so useless you can't even do anything so simple as write or draw? Even a stick figure or something... You... You... You're so... You're such a waste."},
  {file: "assets/audio/lines/depression/D04.mp3",
  caption: "DEPRESSION: You're such a waste of resources. Just die already."},
  {file: "assets/audio/lines/depression/D05.mp3",
  caption: "DEPRESSION: Yes you are! You should kill yourself already. The world doesn't need you!"},
  {file: "assets/audio/lines/depression/D06.mp3",
  caption: "DEPRESSION: Y- You useless, crazy, idiot! Why do you believe these kinds of things?"},
  {file: "assets/audio/lines/depression/D07.mp3",
  caption: "DEPRESSION: Just... just do it. No one cares, no one likes you, the world will just be a better place without you. Down some poison or something; I don't care!"},
  {file: "assets/audio/lines/depression/D08.mp3",
  caption: "DEPRESSION: Well, it'll be a better place with you gone. Besides, why should you make this world better if all it's done to you is inflict misery?"},
  {file: "assets/audio/lines/depression/D09.mp3",
  caption: "DEPRESSION: There's nothing left for you, anyways. You hav- you've run out of potential, kid."},
  {file: "assets/audio/lines/depression/D10.mp3",
  caption: "DEPRESSION: Just write a note and that'll be good enough."},
  {file: "assets/audio/lines/depression/D11.mp3",
  caption: "DEPRESSION: You see how useless you are? You can't even write such a simple note."},
  {file: "assets/audio/lines/depression/D12.mp3",
  caption: "DEPRESSION: You- you're gonna chicken out again? I can't with you..."}
]

const ocdLines = [
  {file: "assets/audio/lines/ocd/O01.mp3",
  caption: "OCD (ONLY HEARD BY RILEY): What if you int- your- your- what if you get your mom into a car crash because you're acting so delusional and she's distracted and concerned?!"},
  {file: "assets/audio/lines/ocd/O02.mp3",
  caption: "OCD: There's someone in your room gonna murder you! Check the place!"}
]

const momLines = [
  {file: "assets/audio/lines/mom/MAll.mp3",
  caption: "MOM: Riley? Is everything good back there?"}
]

const friendLines = [
  {file: "assets/audio/lines/friend/F01.mp3",
  caption: "FRIEND: YESSSS!"},
  {file: "assets/audio/lines/friend/F02.mp3",
  caption: "FRIEND: Alright, Riley, cya soon! We gotta make plans over the summer!"},
  {file: "assets/audio/lines/friend/F03.mp3",
  caption: "FRIEND: Alright, bye!"}
]