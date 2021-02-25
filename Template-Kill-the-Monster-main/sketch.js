const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
image1 = loadImage("im/GamingBackground.png")
image2 = loadAnimation("im/Monster-01.png","im/Monster-02.png")
image3 = loadAnimation("im/Superhero-01.png","im/Superhero-02.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(image1);

}

