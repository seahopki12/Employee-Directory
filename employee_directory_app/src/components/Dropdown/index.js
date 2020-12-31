import React from "react";

function Dropdown(props) {
    const name = props.dropdownName;

    return (
        <div class="btn-group">
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {name} By
            </button>
            <ul class="dropdown-menu">
                ...
            </ul>
        </div>
    )
}

export default Dropdown;