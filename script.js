// Your JS goes here
// Your JS goes here
document.addEventListener('DOMContentLoaded', () => {

    // AGILE MVP = copy from stack overflow without really learning
    setTimeout(function() {
        location.reload(document);
    }, 2000);

    // let gradientShit = 'background: linear-gradient(#e66465, #9198e5)';
    // let gradient = document.getElementsByTagName('body');
    // gradient.style.gradientShit
    document.body.style.backgroundColor = 'blue';

    // let colorToggle = 0;
    let randomColor1;
    let randomColor2;
    let randomColor3;
    let randomColorString;
    let opacity = .1;
    
    for (let i = 0; i < 81; i++) {
        // colorToggle ++;
        opacity += .02;
        randomColor1 = Math.floor(Math.random() * 256);
        randomColor2 = Math.floor(Math.random() * 256);
        randomColor3 = Math.floor(Math.random() * 256);
        randomColorString = `${randomColor1}, ${randomColor2}, ${randomColor3}, ${opacity}`
        const tile = document.createElement('div');
        document.body.appendChild(tile);
        // if (i % 2 === 0) {
        //     tile.style.backgroundColor = 'red';
        // } else {
        //     tile.style.backgroundColor = 'black';
        // };
        tile.style.backgroundColor = `rgba(${randomColorString})`;
        tile.style.cssFloat = 'left';
        tile.style.width = '11.1%'
        tile.style.paddingBottom = '11.1%';
    };

})