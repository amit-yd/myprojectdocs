import React, { useState } from "react";
import Installdosanddonts from '../../../docs/_partials/installupgrade/_install_dos_and_donts.md';

export default function DosAndDonts({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <p>Here's a list of dos, don'ts and points to remember when you install or upgrade TeamForge.</p>
            <button
                type="button"
                className="btn btn-primary btn-xs light-blue-bg"
                data-toggle="collapse"
                href="#beforeYouBegin"
                aria-expanded="false"
                aria-controls="beforeYouBegin"
                onClick={() => setIsOpen(prevState => !prevState)}
            >
                Click to Show/Hide
            </button>
            {isOpen && <Installdosanddonts />}
        </>
    );
}