import React from "react";

const styles = {
    nobullet: {
        listStyle: "none"
    }
}
function Resume() {
return(
    <>
    <h1>Resume</h1>
    <p className="text-center">This is where resume information would go</p>
    <p className="text-center">if I wanted to put my personal details online</p>
    <ul style={styles.nobullet}>
        <li><h3>Work History</h3></li>
        <ul>
        <li>Worked at a place from a date to another date</li>
        <ul>
            <li>Did some things</li>
            <li>Did some other things</li>
        </ul>
        <li>Worked at a different place from some earlier date to another date</li>
        </ul>
        <li><h3>Education</h3></li>
            <ul>
                <li>Northwestern University Coding Bootcamp August - November 2022</li>
                <li>Previous Education</li>
            </ul>
    </ul>
    </>
)
}

export default Resume;