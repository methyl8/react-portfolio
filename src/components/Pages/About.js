import React from "react";
import "../assets/css/aboutStyle.css"
import profilePic from "../assets/images/profile.jpg"

function About() {
    return (
        <>
            <h1 className="text-center">About Me</h1>
            <img alt="Profile" src={profilePic} className="about-img" />
            <p className="mx-4">A shovel is a tool for digging, lifting, and moving bulk materials, such as soil, coal, gravel, snow, sand, or ore.
                Most shovels are hand tools consisting of a broad blade fixed to a medium-length handle. Shovel blades are usually made of sheet steel or hard plastics and are very strong. Shovel handles are usually made of wood (especially specific varieties such as ash or maple) or glass-reinforced plastic (fiberglass).
                Hand shovel blades made of sheet steel usually have a folded seam or hem at the back to make a socket for the handle. This fold also commonly provides extra rigidity to the blade. The handles are usually riveted in place. A T-piece is commonly fitted to the end of the handle to aid grip and control where the shovel is designed for moving soil and heavy materials. These designs can all be easily mass-produced.
                The term shovel also applies to larger excavating machines called power shovels, which serve the same purpose—digging, lifting, and moving material. Although such modern power shovels as front-end loaders and excavators (including tractors that feature a loading bucket on one end and a backhoe for digging and placing material on the other) descend from steam shovels and perform similar work they are not classified as shovels.
                Hand shovels have been adapted for many different tasks and environments. They can be optimized for a single task or designed as cross-over or compromise multitaskers. They are very useful in agriculture.</p>
        </>
    )
}

export default About;

