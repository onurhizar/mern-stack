import React from 'react'

function BasicAlert(props) {
    const {type, text} = props;
    let _className = "";
    switch (type) {
        case "success":
            _className = "alert alert-success";
            break;
        case "warning":
            _className = "alert alert-warning";
            break;
        case "danger":
            _className = "alert alert-danger";
            break;
        default:
            _className = "alert alert-primary";
            break;
    }

    return (
        <div className={_className} role="alert">
            {text}
        </div>
    );
}

export default BasicAlert
