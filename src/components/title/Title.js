import React from 'react'
import Styles from "./Title.module.scss";

const Title = ({ lightTitle, darkTitle, waveLine, icon, mainClass, className, ENTitle, noneBefore, largeTitle, tagName, inline, article, labelColor, label }) => {
    return (
        <div className={`${Styles[className]} ${mainClass} d-flex align-items-center text-right flex-row`}>
            <div className={`${Styles.icon} ${noneBefore ? Styles.noneBefore : ""} ml-3`}><img src={icon} /></div>
            <div className={`${Styles.title} ${waveLine ? Styles.waveLine : ""}`}>
                {
                    article ?

                        <>
                            <h1 className="d-inline-flex">
                                {
                                    inline ?
                                        <>
                                            <span className="lightBlue h4 yekan-Light ">{lightTitle}</span>
                                            <span className="darkBlue mb-0 h4">{darkTitle}</span>
                                        </>
                                        :
                                        <>
                                            <span className="lightBlue d-block h4 yekan-Light ">{lightTitle}</span>
                                            <span className="darkBlue  mb-0 ml-2 d-block h4 font-weight-750">{darkTitle}</span>
                                            {ENTitle ?
                                                <span className="lightBlue d-block h3">{ENTitle}</span>
                                                : ""
                                            }
                                        </>
                                }
                            </h1>
                            <span className={`${Styles.label} ${Styles[labelColor]} `}>{label}</span>
                        </>
                        :
                        <h2>
                            {
                                inline ?
                                    <>
                                        <span className="lightBlue  h3 yekan-Light ">{lightTitle}</span>
                                        <span className="darkBlue  h3">{darkTitle}</span>
                                    </>
                                    :
                                    <>
                                        <span className="lightBlue d-block h3 yekan-Light mb-0">{lightTitle}</span>
                                        <span className="darkBlue d-block h3 font-weight-bold">{darkTitle}</span>
                                        {ENTitle ?
                                            <span className="lightBlue d-block h3">{ENTitle}</span>
                                            : ""
                                        }
                                    </>
                            }
                        </h2>
                }
            </div>
            {waveLine ? <div className={`${Styles.waveLine}
            854521
            `}>
                <img src="./images/afterTitle.png" />
            </div> : ""}

        </div>
    )
}

export default Title
