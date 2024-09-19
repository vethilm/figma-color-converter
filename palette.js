
function  generateExtendedPalette(h,s,b){
    var satArr = []
    var brightArr = []
    //set midtone
    satArr[4]=s;
    brightArr[4]=b;

    //set first and last shades
    satArr[8]=.95;
    satArr [0]=.1
    brightArr[8]=10;
    brightArr[0]=.1

    satArr[2]=(satArr[0]+satArr[4]) / 2
    satArr[1]=(satArr[0]+satArr[2]) / 2
    satArr[3]=(satArr[2]+satArr[4]) / 2
    satArr[6]=(satArr[8]+satArr[4]) / 2
    satArr[7]=(satArr[8]+satArr[6]) / 2
    satArr[5]=(satArr[6]+satArr[4]) / 2

    brightArr[2]=(brightArr[0]+brightArr[4]) / 2
    brightArr[1]=(brightArr[0]+brightArr[2]) / 2
    brightArr[3]=(brightArr[2]+brightArr[4]) / 2
    brightArr[6]=(brightArr[8]+brightArr[4]) / 2
    brightArr[7]=(brightArr[8]+brightArr[6]) / 2
    brightArr[5]=(brightArr[6]+brightArr[4]) / 2

    //0-4,1-3,4-8,5-7
    
    console.log("s:"+satArr +"\nl: "+brightArr)
}

   // const rect = figma.createRectangle();
        // rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
        // console.log("rect");

// get starter color - any type->hsl
// -------- make another extention for converting colors?
// get first and last - hsl
// get midtones
/*
    
*/
// convert to rgb
// create rectangles
// add to page
/*
sources:
https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/

*/ 