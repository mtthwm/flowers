import {drawFlower, drawStem, setStemColor, setStemSize} from './src/drawing';

window.onload = () => {
    const flower = {
        stemHeight: 0.5,
        stemSize: 0.5,
        pistilRadius: 0.5,
    }
    const canvas:HTMLCanvasElement = document.getElementById('main-canvas') as HTMLCanvasElement;
    if (canvas)
    {
        const ctx = canvas.getContext('2d');

        if (ctx)
        {
            createControls(flower);
        
            setInterval(() => draw(ctx, flower), 16);
        }
    }
};

const createControls = (flower) => {
    const container = document.getElementById('controls-container');

    if (container)
    {
        for (let [key, value] of Object.entries(flower)) {        
            const slider = document.createElement('input');
            slider.type = 'range';
            slider.id = `slider-${key}`;
            slider.value = (Number(value) * 100).toFixed(2);
            slider.min = '0';
            slider.max = '100';
            slider.addEventListener('input', event => {
                flower[key] = Number(slider.value) / 100.0;
            });
    
            const label = document.createElement('label');
            label.htmlFor = slider.id;
            label.textContent = key;
    
            const div = document.createElement('div');
    
            div.appendChild(slider);
            div.appendChild(label);
    
            container.appendChild(div);
        }
    }
}

const draw = (ctx, flower) => {
    ctx.clearRect(0, 0, 500, 500);

    const origin = {x: 250, y: 250}

    setStemColor(ctx, flower);
    setStemSize(ctx, flower);
    drawStem(ctx, flower, origin);
    drawFlower(ctx, flower, origin);
};