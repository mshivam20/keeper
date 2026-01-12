import React from "react";

const date =new Date();

const year=date.getFullYear();

function Footer(){
    return <p class="footer">
        copyright @{year}
    </p>
}

export default Footer;