import React from "react";
export default function Contact(){
    return(
<>
<div id="contact">
<form  className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched ng-submitted"><label  htmlFor="userName" className="position-relative top-0 __top"> </label>
    <input  id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" /><label  htmlFor="userAge" className="position-relative top-0 __top"></label>
    <input  id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" /><label  htmlFor="userEmail" className="position-relative top-0 __top"></label>
    <input  id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" /><label htmlFor="userPassword" className="position-relative top-0 __top"></label>
    <input  id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
    <button  className="btn mt-4 text-white" style={{backgroundColor: '#1abc9c'}}> send Message </button></form>
</div>
</>
)
}

