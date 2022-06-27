import { Row, Col, Container } from "react-bootstrap";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import Title from "../components/title/Title";
import { rulesData } from "../constant/rules";
import Styles from "../styles/Rules.module.scss";
export default function Rules()  {
  const handleScrollOnRule = (currentRule) => {
    let ruleElement = document.querySelector(`[rule-id=${currentRule}]`);
    window.scroll({
      top: ruleElement.offsetTop + 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-100 py-5">
      <Container>
        <Row className={`align-items-start`}>
          <Col lg={12} className="mb-4">
            <Title
              lightTitle="قوانین و  "
              darkTitle="مقررات"
              inline
              icon="/images/News_ic.png" />
          </Col>
          <Col lg={12}>
            <div className={`${Styles.shadow} p-4`}>
              <Row>
                <Col lg={3} className="d-none d-lg-block">
                  <aside className={` ${Styles.side} text-right`}>
                    <ul className={`p-2`}>
                      {rulesData.map((item, index) => {
                        return (
                          <li
                            className="cursor-pointer mb-3 darkBlue"
                            key={`ruleItem-${index}`}
                            onClick={() => handleScrollOnRule(`rule-${index + 1}`)}
                          >
                            <span className="ml-1"><FiChevronLeft /></span>
                            {item.title}
                          </li>
                        );
                      })}
                    </ul>
                  </aside>
                </Col>

                <Col lg={9}>
                  <div className="text rules text-justify">
                    <ul className={Styles.rules}>
                      {rulesData.map((item, index) => {
                        const { title, desc } = item;
                        return (
                          <li className="mb-3" key={`rule-${index}`}>
                            <h3 className="size-4" rule-id={`rule-${index + 1}`}>
                              {title}
                            </h3>
                            <div className="pr-1">
                              {Array.isArray(desc) ? (
                                <>
                                  {desc.map((desc, index) => (
                                    <p
                                      className="py-0 my-2"
                                      key={`desc-item-${index}`}
                                    >
                                      {desc}
                                    </p>
                                  ))}
                                </>
                              ) : (
                                <p className="text-justify font-weight-light">
                                  {item.desc}
                                </p>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <p className="lightRed my-5 h6 mb-0 text-justify">
                      <BsExclamationCircleFill className="ml-2" size={20} />
                      در صورت رعایت نکردن هر کدام از موارد بالا، اکانت شما مسدود یا به
                      طور کامل حذف خواهد شد.
                    </p>

                  </div>
                </Col>
              </Row>
            </div>
          </Col>


        </Row>
      </Container>
    </div>
  );
};

