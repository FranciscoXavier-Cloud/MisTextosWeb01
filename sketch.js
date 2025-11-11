// Variable global para el objeto p5
let s;

// La función setup() se llama una vez al inicio, como en Processing
function setup() {
    // 1. Crear el lienzo: Lo ponemos dentro del contenedor que definiremos en HTML
    let canvas = createCanvas(200, 200); 
    canvas.parent('p5-container'); // Asocia el lienzo al ID del contenedor
    
    background(255); // Fondo blanco
    frameRate(30); // 30 cuadros por segundo
    
    s = new BouncingCircle();
}

// La función draw() se llama continuamente, como en Processing
function draw() {
    // Limpiamos el lienzo en cada frame
    background(255, 255, 255, 50); // El 50 le da un efecto de rastro (motion blur)
    
    s.move();
    s.display();
}

// Clase para el círculo que rebota (muy similar a las clases de Processing)
class BouncingCircle {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.r = 20;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebotar en los bordes
        if (this.x + this.r > width || this.x - this.r < 0) {
            this.vx *= -1;
        }
        if (this.y + this.r > height || this.y - this.r < 0) {
            this.vy *= -1;
        }
    }

    display() {
        fill(0); // Negro
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}