import { useState } from "react";

export default function UserInput({onChange}){

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial">Initial Investment</label> 
                    <input onChange={(e)=>onChange("initialInvestment",e.target.value)} id="initial" type="number"></input>
                </p>
                <p>
                    <label htmlFor="annual">Annual Investment</label> 
                    <input onChange={(e)=>onChange("annualInvestment",e.target.value)} id="annual" type="number"></input>
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="return">Expected Return</label> 
                    <input onChange={(e)=>onChange("expectedReturn",e.target.value)} id="return" type="number"></input>
                </p>
                <p>
                    <label htmlFor="duration">Duration</label> 
                    <input onChange={(e)=>onChange("duration",e.target.value)} id="duration" type="number"></input>
                </p>
            </div>
        </section>
    )
}