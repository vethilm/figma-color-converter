"use strict";
// This shows the HTML page in "ui.html".
figma.showUI(__html__);

function decimalToHex(x: number): string {
    let val = Math.floor(x / 16);
    let r = x % 16;
    let remainder
    switch (r) {
        case 10:
            remainder = 'A';
            break;
        case 11:
            remainder = 'B';
            break;
        case 12:
            remainder = 'C';
            break;
        case 13:
            remainder = 'D';
            break;
        case 14:
            remainder = 'E';
            break;
        case 15:
            remainder = 'F';
            break;
    }
    return val + "" + remainder;
}

function rgbToHex(r: number, g: number, b: number): string {
    const red = decimalToHex(r);
    const green = decimalToHex(g);
    const blue = decimalToHex(b);
    return "#" + red + green + blue;
}

function findHue(r: number, g: number, b: number, max: number, min: number): number {
    let h = 0;
    if (max === r) {
        console.log("red");
        h = (g - b) / (max - min) % 6;
    } else if (max === g) {
        console.log('green');
        h = 2 + (b - r) / (max - min);
    } else {
        console.log("blue");
        h = 4 + (r - g) / (max - min);
    }
    h *= 60;
    // if the hue has a negative degree 
    if (h < 0) {
        h = 360 + h;
    }
    return Math.round(h);
}

function rgbToHsl(r: number, g: number, b: number): void {
    // set rgb values 0-1
    r /= 255;
    g /= 255;
    b /= 255;
    console.log(r + " " + g + " " + b);
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const diff = max - min;
    const h = findHue(r, g, b, max, min);
    // find luminance  
    const l = Math.round((max + min) / 2 * 100);
    // find saturation
    let s = 0;
    if (max === min) {
        s = 0;
    } else if (l <= 0.5) {
        s = (diff) / (max + min);
    } else if (l > 0.5) {
        s = (diff) / (2 - diff);
    }
    s = Math.round(s * 100);
    console.log("h:" + h + " s:" + s + " l:" + l);
}

function rgbToHsb(r: number, g: number, b: number): string {
    // set rgb values 0-1
    r /= 255;
    g /= 255;
    b /= 255;
    console.log(r + " " + g + " " + b);
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const h = findHue(r, g, b, max, min);
    const diff = max - min;
    let s = 0;
    if (max !== 0) {
        s = Math.round((diff / max) * 100);
    }
    const bValue = Math.round(max * 100);
    return ("h:" + h + " s:" + s + " b:" + bValue);
}

(async () => {
    const hex = figma.createText();
    const fontName = { family: "inter", style: "regular" };
    await figma.loadFontAsync(fontName);
    const r = 3;
    const g = 93;
    const b = 99;
    hex.characters = rgbToHex(r, g, b);
    hex.fontSize = 18;
    hex.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
})();

figma.ui.onmessage = (msg) => {
    if (msg.type === 'create-palette') {
        const r = 3;
        const g = 93;
        const b = 99;
        rgbToHsl(r, g, b);
        console.log(rgbToHex(r, g, b));
        console.log(rgbToHsb(r, g, b));
    }

    figma.closePlugin();
};

