const apiUrl = 'https://meme-api.com/gimme';
let image = '';

async function newMeme1() {
    await fetch(`https://meme-api.com/gimme/russian_memes_only`).then((response) => response.json()).then((data) => {
        image = data.url;
        console.log(data);
        ;
    });
    document.getElementById("meme1").setAttribute('src', image);
}
async function newMeme2() {
    await fetch(`https://meme-api.com/gimme/MinecraftMemes`).then((response) => response.json()).then((data) => {
        image = data.url;
        console.log(data);
        ;
    });
    document.getElementById("meme1").setAttribute('src', image);
}
async function newMeme3() {
    await fetch(`https://meme-api.com/gimme/memes`).then((response) => response.json()).then((data) => {
        image = data.url;
        console.log(data);
        ;
    });
    document.getElementById("meme1").setAttribute('src', image);
}
async function newMeme4() {
    await fetch(`https://meme-api.com/gimme/WitcherMemes`).then((response) => response.json()).then((data) => {
        image = data.url;
        console.log(data);
        ;
    });
    document.getElementById("meme1").setAttribute('src', image);
}
async function newMeme5() {
    await fetch(`https://meme-api.com/gimme/AniMem`).then((response) => response.json()).then((data) => {
        image = data.url;
        console.log(data);
        ;
    });
    document.getElementById("meme1").setAttribute('src', image);
}