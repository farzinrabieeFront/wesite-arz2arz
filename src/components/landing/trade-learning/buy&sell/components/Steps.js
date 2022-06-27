
import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Styles from './Steps.module.scss';
import { BuyData } from "../BuyData";
import { SellData } from "../SellData";
import { paths } from './svgData';

const AllSteps = ({ next, prev, step, setIsLearning, activeTransactionType }) => {

    const totalBuyStep = BuyData.length - 1;
    useEffect(() => {

        const description = document.getElementById('description');
        description.classList.toggle('descriptionAnimation');

        
        if (document.getElementById('svg-tag')) {
            document.getElementById('svg-tag').remove()
        }
        let parent = document.getElementById('svg-parent');
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
       
        svg.id = 'svg-tag';
        
        path.setAttribute("class",`${Styles.path} path`);
        
        
       
        
         
        if (window.matchMedia("(max-width: 1199.98px)").matches) {
            svg.setAttribute("viewBox", "0 0 455 90");
            svg.setAttribute("class",`${Styles.svg} ${Styles.smSvg} ${step === 4 || step === 5 ? Styles.bottomSvg : null}`);
            path.setAttribute("d", paths.tabletPaths[step - 1]);
        } else {
            svg.setAttribute("viewBox", "0 0 555 90");
            svg.setAttribute("class",`${Styles.svg} ${Styles.lgSvg} ${step === 4 || step === 5 ? Styles.bottomSvg : null}`);
            path.setAttribute("d", paths.desktopPaths[step - 1]);    
        }
       
        svg.appendChild(path)
        parent.appendChild(svg)
    }, [step])
    return (
        <div className="position-relative pt-5 pr-0 pr-lg-5 " id="svg-parent">
            {/* 
   
            <svg viewBox="0 0 555 90" className={`${Styles.svg} ${Styles.lgSvg} ${step === 4 || step === 5 ? Styles.bottomSvg : null}`} id="svg">
                <path className={`${Styles.path} path`} d={paths.desktopPaths[step - 1]} stroke="white" strokeWidth="3" fill="none" ></path>
            </svg> 
          
            <svg viewBox="0 0 455 90" className={`${Styles.svg} ${Styles.smSvg} ${step === 4 || step === 5 ? Styles.bottomSvg : null}`} id="mdSvg">
                <path className={`${Styles.path} path`} d={paths.tabletPaths[step - 1]} stroke="white" strokeWidth="3" fill="none" />
            </svg> */}

            <div id="head" className={Styles.headBox}>
                <div className={`${Styles.head} pb-2 head d-flex flex-wrap`} >
                    {activeTransactionType === 'buy' ?
                        <>
                            <div className={`${Styles.title} pb-2 mb-3 d-flex justify-content-start align-items-center`}>
                                <span className="text-white h4 mb-0 ml-2">خرید ارز </span>
                                <span className="btn btn-lightGreen pt-2 pb-1 mr-2 yekan-Bold rounded-pill">BUY</span>
                            </div>
                            <div className="col-12 p-0 text-right"><span className="size-7 yekan-Bold lightGreen">اگر می‌خواهید از ما ارز بخرید</span></div>
                        </>
                        :
                        <>
                            <div className={`${Styles.title} ${Styles.sell} pb-2 mb-3 d-flex justify-content-start align-items-center`}>
                                <span className="text-white h4 mb-0 ml-2">فروش ارز </span>
                                <span className="btn btn-lightRed pt-2 pb-1 mr-2 yekan-Bold rounded-pill">SELL</span>
                            </div>
                            <div className="col-12 p-0 text-right"><span className="size-7 yekan-Bold lightRed">اگر می‌خواهید به ما ارز بفروشید</span></div>
                        </>
                    }

                </div>
            </div>
            <div className={`${Styles.descRsp} overflow-hidden`} id="description">
                <div className={`${Styles.description} description d-flex flex-wrap align-items-center text-white mt-3`}>
                    <div className="col-12 px-0 d-flex align-items-center">
                        <span className={`${Styles.img} ${Styles.mdNone} ml-3`}>
                            {activeTransactionType === 'buy' ?
                                <img src={`./images/${BuyData[step].icon}`} />
                                :
                                <img src={`./images/${SellData[step].icon}`} />
                            }
                        </span>

                        {activeTransactionType === 'buy' ?
                            <p className={`${Styles.desc} mb-0 text-justify`}>
                                {BuyData[step].text}
                            </p>
                            :
                            <p className={`${Styles.desc} mb-0 text-justify`}>
                                {SellData[step].text}
                            </p>
                        }
                    </div>
                    {step < totalBuyStep ? <div className="col-12 px-0 mt-2">
                        <span className="pointer size-7 d-inline-flex lign-items-center yellow endLearning"
                            onClick={() => { setIsLearning(false) }}    >
                            پایان آموزش   <HiChevronLeft size="20" /></span>
                    </div> : null}

                </div>
            </div>
            <div id="prevNext" className={`${Styles.PrevNext} px-1 overflow-hidden mt-1 mt-lg-3 d-flex justify-content-end justify-content-lg-between py-3`}>



                {step < totalBuyStep ?
                    <Button variant="light" className={`${Styles.next} next yekan-ExtraBold rounded-10 py-2 px-3`}
                        onClick={() => {
                            next()
                        }}
                    >
                        <HiChevronRight className="ml-1" size="20" />
                        بعدی

                    </Button>
                    :
                    <Button variant="light" className={`${Styles.next} next yekan-ExtraBold rounded-10 py-2 px-3`}
                        onClick={() => { setIsLearning(false) }} >
                        <HiChevronRight className="ml-1" size="20" />
                        پایان آموزش
                    </Button>
                }
                <Button variant="outline-light" className={`${Styles.prev} prev yekan-ExtraBold rounded-10 py-2 px-3 mr-3 mr-lg-0`}
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
        
     
            <svg id="svg-tag" class="Steps_svg__CcrUO Steps_lgSvg__3E4_i null" viewbox="0 0 555 90"><path class="Steps_path__2Yk2P path" d="M 0 145 L 0 225 L 0 185 L 20 185 Q 50 185 50 155 L 50 30 Q 50 0 80 0 L 520 0 Q 550 0 550 30 L 550 85 " stroke="white" strokewidth="3" fill="none"></path></svg>
        
        </div>
    )
}

export default AllSteps
