import React from 'react'

function Alert({alert}) {

    let color = (alert.type === "Success") ? "success" : "danger";
  
    const capitalize=(word)=>{
       const lower=word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    alert && <div className={`alert alert-${color} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(alert.type)}</strong>: {alert.msg}
   </div>
  )
}

export default Alert;
