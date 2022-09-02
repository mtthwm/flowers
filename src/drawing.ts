interface DrawingEndpoint {
    x:Number,
    y:Number
}

export const setStemColor = (ctx, flower) => {
    ctx.strokeStyle = '#42f554';
};

export const setStemSize = (ctx, flower) => {
    const maxWidth = 20;
    ctx.lineWidth = maxWidth * flower.stemSize;
};

export const drawStem: DrawingEndpoint = (ctx, flower, origin) => {
    const maxHeight = 100;

    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(origin.x,  origin.y - (flower.stemHeight * maxHeight));
    ctx.stroke();

};

export const drawFlower = (ctx, flower, origin) => {
    const maxRadius = 30;
    ctx.moveTo(origin.x, origin.y);
    ctx.beginPath();
    ctx.strokeStyle = '#FFFF00';
    ctx.fillStyle = '#FFFF00';
    ctx.arc(250, 250, flower.pistilRadius * maxRadius, 0, 2 * Math.PI);
    ctx.fill();
}