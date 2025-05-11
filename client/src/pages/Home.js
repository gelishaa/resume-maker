import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import templateImage from '../resources/templates/template1.png';
import templateImage2 from '../resources/templates/template2.png';
import '../resources/templates.css';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const templates = [
        {
            title: 'Simple Resume',
            image: templateImage,
        },
    {
      title: "Modern Resume",
      image: templateImage2,
    },
  ];
    return (
        <DefaultLayout>
            <div className="row home">
                {templates.map((template, index) => {
                    return (
                    <div className="col-md-4 ">
                        <div className="template">
                            <img src={template.image} height='330' alt="" style={{ width: "100%" }}/>
                            <div className="text">
                                <p>{template.title}</p>
                                <button onClick={()=>navigate(`/templates/${index+1}`)}>TRY</button>
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>

        </DefaultLayout>
    )
}

export default Home