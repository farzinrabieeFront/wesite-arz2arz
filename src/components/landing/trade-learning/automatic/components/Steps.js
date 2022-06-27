
import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Styles from './Steps.module.scss';
import { AutomaticData } from "../AutomaticData";
import Title from '../../../../title/Title';
import { paths } from './svgData';
const AutomaticSteps = ({ next, prev, step, setIsLearning }) => {

    const totalAutoStep = AutomaticData.length - 1;
    useEffect(() => {
        const Audescription = document.getElementById('AUdescription');
        Audescription.classList.toggle('descriptionAnimation');

        if (document.getElementById("AuSvg-tag")) {
            document.getElementById("AuSvg-tag").remove()
        }
        let parent = document.getElementById("AUsvg-parent");
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path")
        svg.id = "AuSvg-tag";

        if (window.matchMedia("(max-width :  1199.98px)").matches) {
            svg.setAttribute("viewBox", "0 0 600 170");
            svg.setAttribute("class", `${Styles.svg} ${Styles.smSvg} ${step === 4 || step === 5 || step === 6 || step === 7 ? Styles.bottomSvg : null}`);
            path.setAttribute("d", paths.tabletPaths[step - 1]);
        } else{
            svg.setAttribute("viewBox", "0 0 600 170");
            svg.setAttribute("class", `${Styles.svg} ${Styles.lgSvg} ${step === 4 || step === 5 || step === 6 || step === 7 ? Styles.bottomSvg : null}`);
            path.setAttribute("d", paths.desktopPaths[step - 1]);
        }
        path.setAttribute("class", `${Styles.path} path`);
        
        svg.appendChild(path);
        parent.appendChild(svg)

    }, [step])
    return (
        <div className="position-relative pt-5 pl-0 pl-lg-5" id="AUsvg-parent">
            {/* <svg viewBox="0 0 600 170" className={`${Styles.svg} ${Styles.lgSvg} ${step === 4 || step === 5 || step === 6 || step === 7 ? Styles.bottomSvg : null}`} id="AUsvg">
                <path className={`${Styles.path} path`} d={paths.desktopPaths[step - 1]} stroke="white" strokeWidth="3" fill="none" />
            </svg>
            <svg viewBox="0 0 600 170" className={`${Styles.svg} ${Styles.smSvg} ${step === 4 || step === 5 || step === 6 || step === 7 ? Styles.bottomSvg : null}`} id="mdAUSvg">
                <path className={`${Styles.path} path`} d={paths.tabletPaths[step - 1]} stroke="white" strokeWidth="3" fill="none" />
            </svg> */}

            <div className={Styles.box}>
                <h1 className={Styles.title}>
                    <Title lightTitle="معاملات " darkTitle="اتوماتیک ارزها" className="text-right" icon="/images/currency-conversion.png" />
                </h1>


            </div>
            <div className="overflow-hidden" id="AUdescription">
                <div className={`${Styles.description} description d-flex flex-wrap align-items-center mt-3`}>
                    <div className="col-12 px-0 d-flex align-items-center">

                        <p className={`${Styles.desc} mb-0 text-justify`}>
                            {AutomaticData[step].text}
                        </p>

                    </div>

                    {step < totalAutoStep ? <div className="col-12 px-0 mt-2">
                        <span className="pointer size-7 d-inline-flex lign-items-center lightBlue endLearning"
                            onClick={() => { setIsLearning(false) }}    >
                            پایان آموزش   <HiChevronLeft size="20" /></span>
                    </div> : null}

                </div>
            </div>

            <div id="AUprevNext" className={`${Styles.PrevNext} px-1 overflow-hidden mt-3 d-flex justify-content-end justify-content-lg-between py-3`}>

                {step < totalAutoStep ?
                    <Button variant="darkBlue" className={`${Styles.next} next yekan-ExtraBold rounded-10 py-2 px-3`}
                        onClick={() => {
                            next()
                        }}
                    >
                        <HiChevronRight className="ml-1" size="20" />
                        بعدی

                    </Button>
                    :
                    <Button variant="darkBlue" className={`${Styles.next} next yekan-ExtraBold rounded-10 py-2 px-3`}
                        onClick={() => { setIsLearning(false) }} >
                        <HiChevronRight className="ml-1" size="20" />
                        پایان آموزش
                    </Button>
                }
                <Button variant="outline-darkBlue" className={`${Styles.prev} prev yekan-ExtraBold mr-3 mr-lg-0 rounded-10 py-2 px-3`}
                    onClick={() => {
                        prev();
                        if (step === 0) {
                            setIsLearning(false)
                        }
                    }}
                >
                    قبلی
                    <HiChevronLeft className="mr-1" size="20" />
                </Button>
            </div>
        </div>
    )
}

export default AutomaticSteps
