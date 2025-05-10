import React from "react";
import DefaultLayout from '../../components/DefaultLayout.js';
import Template1 from './Template1';
import Template2 from './Template2';
import { useParams } from "react-router-dom";

function Templates() {
    const params = useParams()
    const getTemplate=()=>{
        switch(params.id)
        {
            case '1' : {
                return <Template1 />
            }
            case '2' : {
                return <Template2 />
            }
        }
    }
    return (
        <DefaultLayout>
            {getTemplate()} 
        </DefaultLayout>
    )
}

export default Templates;