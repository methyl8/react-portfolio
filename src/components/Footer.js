import React, {useState} from "react";

function Footer() {
    const [github, setGithub] = useState('www.github.com/methyl8')
    return (
        <>
            <ul>
                <li><a href={github} target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
        </>
    )
}

export default Footer;