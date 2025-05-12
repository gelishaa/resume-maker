import React, { useRef } from "react";
import { useParams,useNavigate, } from "react-router-dom";
import DefaultLayout from '../../components/DefaultLayout.js';
import Template1 from './Template1';
import Template2 from './Template2';
import { Button } from "antd";

function Templates() {
    const componentRef = useRef();
     const params = useParams();
    const navigate = useNavigate()

    const handlePrint = () => {
    const printContent = componentRef.current;

    const printWindow = window.open('', '_blank', 'width=900,height=650');

    const styles = Array.from(document.styleSheets)
        .map((styleSheet) => {
            try {
                return Array.from(styleSheet.cssRules)
                    .map(rule => rule.cssText)
                    .join('');
            } catch (e) {
                return ''; 
            }
        })
        .join('');

    printWindow.document.write(`
        <html>
            <head>
                <title>Resume</title>
                <style>${styles}</style>
                <style>
                    @page { margin: 20mm; }
                    body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }

                    @media print {
                        @page {
                            margin: 0;
                        }
                        body {
                        zoom: 1.2; 
                    }
                    }
                </style>
            </head>
            <body>
                ${printContent.innerHTML}
            </body>
        </html>
    `);
    printWindow.document.close();

    printWindow.onload = function () {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };
};
    let SelectedComponent;
    switch (params.id) {
        case '1':
            SelectedComponent = Template1;
            break;
        case '2':
            SelectedComponent = Template2;
            break;
        default:
            SelectedComponent = Template1;
    }

    return (
        <DefaultLayout>
            <div className="d-flex justify-content-end my-5 mx-5">
                <Button className="back-btn" onClick={()=>navigate('/home')}>Back</Button>
                <Button className="mx-5" onClick={handlePrint}>Print</Button>
            </div>

            <div ref={componentRef}>
                <SelectedComponent />
            </div>
        </DefaultLayout>
    );
}

export default Templates;
