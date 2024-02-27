import { useState } from "react";
import cl from "./categoryPage.module.css";
import darya from "../../Home/categoryPage/imgs/header/darya.svg";
import loop from "../../Home/categoryPage/imgs/header/loop.svg";
import tool from "../../Home/categoryPage/imgs/header/tool.svg";
import saintPetersburg from "../../Home/categoryPage/imgs/main/section__places/saint-petersburg.png";
import coffee from "../../Home/categoryPage/imgs/main/section__places/icons/coffee.svg";
import circus from "../../Home/categoryPage/imgs/main/section__places/icons/circus.svg";
import woman from "../../Home/categoryPage/imgs/main/section__places/icons/woman.svg";
import castle from "../../Home/categoryPage/imgs/main/section__places/icons/castle.svg";
import tree from "../../Home/categoryPage/imgs/main/section__places/icons/tree.svg";
import loopp from "../../Home/categoryPage/imgs/main/section__places/icons/loop.svg";
import arrowUpRight from "../categoryPage/imgs/main/section__slider/icons/arrow-up-right.svg";
import pic2 from "../categoryPage/imgs/main/section__slider/pic_2.png";
import pic from "../categoryPage/imgs/main/section__slider/pic.png";
import heart from "../categoryPage/imgs/main/section__publications/icons/heart.svg";
import lamp from "../categoryPage/imgs/main/section__publications/lamp.png";
import workshop from "../categoryPage/imgs/main/section__publications/workshop.png";
import figurines from "../categoryPage/imgs/main/section__publications/figurines.png";
import ottoman from "../categoryPage/imgs/main/section__publications/ottoman.png";
import city from "../categoryPage/imgs/main/section__publications/city.png";
import palace from "../categoryPage/imgs/main/section__publications/palace.png";
import food from "../categoryPage/imgs/main/section__publications/food.png";
import telega from "../categoryPage/imgs/footer/icons/telega.svg";
import instagram from "../categoryPage/imgs/footer/icons/instagram.svg";
import globe from "../categoryPage/imgs/footer/icons/globe.svg";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";

const categoryPage = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);

  const handleLoopClick = () => {
    setIsInputOpen(true);
  };

  return (
    <div className={cl.wrapper}>
      <header className={cl.header}>
        {!isInputOpen && (
          <div className={`${cl.header__container} ${cl._container}`}>
            <Link to={"/accountPage"}>
              <div className={cl.header__block__1}>
                <div className={cl.header__block__1__image__block}>
                  <img src={darya} alt="" />
                </div>
                <div className={cl.header__text}>
                  <div className={cl.header__block__1__name}>Дарья</div>
                  <div className={cl.header__block__1__saves}>5 сохранений</div>
                </div>
              </div>
            </Link>

            <div className={cl.header__block__2}>
              <div className={cl.header__block__2__image__block}>
                <img className={cl.header__block__2__img} src={tool} alt="" />
                <Link to={"/searchPage"}>
                  <img
                    className={cl.header__block__2__img}
                    src={loop}
                    alt=""
                    onClick={handleLoopClick}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
        {isInputOpen && <Input />}
      </header>

      <main className={cl.main}>
        <section className={cl.section__places}>
          <div className={`${cl.section__places__container} ${cl._container}`}>
            <h2 className={cl.section__places__header}>КУДА ПОЙДЕМ?</h2>

            <div
              className={`${cl.section__places__image__block} ${cl.image__block}`}
            >
              <img
                className={cl.image__block__img}
                src={saintPetersburg}
                alt=""
              />
            </div>

            <Link to={"/infoPage"}>
              <div className={`${cl.section__places__card__block} ${cl.card}`}>
                <div className={cl.card__item}>
                  <div className={cl.card__item__img}>
                    <img src={coffee} alt="" />
                  </div>
                  <p className={cl.card__item__paragraph}>Где поесть</p>
                </div>

                <div className={cl.card__item}>
                  <div className={cl.card__item__img}>
                    <img src={circus} alt="" />
                  </div>
                  <p className={cl.card__item__paragraph}>Интересные места</p>
                </div>
                <div className={cl.card__item}>
                  <div className={cl.card__item__img}>
                    <img src={woman} alt="" />
                  </div>
                  <p className={cl.card__item__paragraph}>Развлечения</p>
                </div>
                <div className={cl.card__item}>
                  <div className={cl.card__item__img}>
                    <img src={castle} alt="" />
                  </div>
                  <p className={cl.card__item__paragraph}>Музеи и выставки</p>
                </div>
                <div className={cl.card__item}>
                  <div className={cl.card__item__img}>
                    <img src={tree} alt="" />
                  </div>
                  <p className={cl.card__item__paragraph}>Загородом</p>
                </div>
                <div className={cl.card__item}>
                  <div className={cl.card__item__img}>
                    <img src={loopp} alt="" />
                  </div>
                  <p className={cl.card__item__paragraph}>Экскурсии</p>
                </div>
              </div>
            </Link>

            <div className={cl.section__places__button}>
              <button className={cl.section__places__btn}>
                Искать места рядом с вами
              </button>
            </div>
          </div>
        </section>
        <section className={cl.section__slider}>
          <div className={`${cl.section__slider__container} ${cl._container}`}>
            <div
              className={`${cl.section__slider__images} ${cl.slider__images}`}
            >
              <div className={cl.slider__images__1}>
                <div className={cl.section__slider__arrow}>
                  <img className={cl.slider__arrow} src={arrowUpRight} alt="" />
                </div>
                <div
                  className={`${cl.section__slider__text} ${cl.slider__text}`}
                >
                  <p className={cl.slider__text__paragraph}>Подборка</p>
                  <h2 className={cl.slider__text__header}>ТОП 5 КОФЕЕН</h2>
                  <h2 className={cl.slider__text__header}>
                    В ПЕТЕРБУРГЕ ЗА 2023
                  </h2>
                </div>
                <img className={cl.section__slider__img__1} src={pic} alt="" />
              </div>
              <div className={cl.slider__images__2}>
                <div className={cl.section__slider__arrow}>
                  <img className={cl.slider__arrow} src={arrowUpRight} alt="" />
                </div>
                <img className={cl.section__slider__img__2} src={pic2} alt="" />
                <div
                  className={`${cl.section__slider__text} ${cl.slider__text}`}
                >
                  <p className={cl.slider__text__paragraph}>акция</p>
                  <h2 className={cl.slider__text__header}>Ральф кофе дарит</h2>
                  <h2 className={cl.slider__text__header}>скидку 20%</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={cl.section__publications}>
          <div
            className={`${cl.section__publications__container} ${cl._container}`}
          >
            <h2 className={cl.section__publications__header}>
              Последние публикации
            </h2>

            <div
              className={`${cl.section__publications__card__block} ${cl.card__block}`}
            >
              <div className={`${cl.card__block__item} ${cl.block__item}`}>
                <div className={cl.block__item__icons}>
                  <button className={cl.block__item__button}>
                    <img className={cl.block__item__icon} src={heart} alt="" />
                  </button>
                </div>
                <img className={cl.block__item__img} src={lamp} alt="" />
                <div className={cl.block__item__text}>
                  <p className={cl.block__item__paragraph}>Места загород</p>
                  <h4 className={cl.block__item__header}>
                    Гончарная студия на побережье
                  </h4>
                </div>
              </div>
              <div className={`${cl.card__block__item} ${cl.block__item}`}>
                <div className={cl.block__item__icons}>
                  <button className={cl.block__item__button}>
                    <img className={cl.block__item__icon} src={heart} alt="" />
                  </button>
                </div>
                <img className={cl.block__item__img} src={workshop} alt="" />
                <div className={cl.block__item__text}>
                  <p className={cl.block__item__paragraph}>базы отдыха</p>
                  <h4 className={cl.block__item__header}>We Lodge</h4>
                </div>
              </div>
              <div className={`${cl.card__block__item} ${cl.block__item}`}>
                <div className={cl.block__item__icons}>
                  <button className={cl.block__item__button}>
                    <img className={cl.block__item__icon} src={heart} alt="" />
                  </button>
                </div>
                <img className={cl.block__item__img} src={figurines} alt="" />
                <div className={cl.block__item__text}>
                  <p className={cl.block__item__paragraph}>КОНЦЕРТ</p>
                  <h4 className={cl.block__item__header}>
                    Концерт в студии при свечах
                  </h4>
                </div>
              </div>
              <div className={`${cl.card__block__item} ${cl.block__item}`}>
                <div className={cl.block__item__icons}>
                  <button className={cl.block__item__button}>
                    <img className={cl.block__item__icon} src={heart} alt="" />
                  </button>
                </div>
                <img className={cl.block__item__img} src={ottoman} alt="" />
                <div className={cl.block__item__text}>
                  <p className={cl.block__item__paragraph}>КОНЦЕРТ</p>
                  <h4 className={cl.block__item__header}>
                    Вивальди. Времена года
                  </h4>
                </div>
              </div>
              <div
                className={`${cl.card__block__item} ${cl.block__item} ${cl.spanned}`}
              >
                <div className={cl.block__item__icons}>
                  <button className={cl.block__item__button}>
                    <img className={cl.block__item__icon} src={heart} alt="" />
                  </button>
                </div>
                <img className={cl.block__item__img} src={city} alt="" />
                <div
                  className={`${cl.block__item__text} ${cl.block__item__text__spanned}`}
                >
                  <p
                    className={`${cl.block__item__paragraph} ${cl.block__item__text__spanned__paragraph}`}
                  >
                    Кофейня
                  </p>
                  <h4
                    className={`${cl.block__item__header} ${cl.block__item__text__spanned__header}`}
                  >
                    Дом Мюнхаузена
                  </h4>
                </div>
              </div>
              <div className={`${cl.card__block__item} ${cl.block__item}`}>
                <div className={cl.block__item__icons}>
                  <button className={cl.block__item__button}>
                    <img className={cl.block__item__icon} src={heart} alt="" />
                  </button>
                </div>
                <img className={cl.block__item__img} src={palace} alt="" />
                <div className={cl.block__item__text}>
                  <p className={cl.block__item__paragraph}>КОНЦЕРТ</p>
                  <h4 className={cl.block__item__header}>
                    Чайковский. Ноктюрн номер 6
                  </h4>
                </div>
              </div>
              <div className={`${cl.card__block__item} ${cl.block__item}`}>
                <div className={cl.block__item__icons}>
                  <button className={cl.block__item__button}>
                    <img className={cl.block__item__icon} src={heart} alt="" />
                  </button>
                </div>
                <img className={cl.block__item__img} src={food} alt="" />
                <div className={cl.block__item__text}>
                  <p className={cl.block__item__paragraph}>КОНЦЕРТ</p>
                  <h4 className={cl.block__item__header}>Chang cafe</h4>
                </div>
              </div>
            </div>

            <div className={cl.section__publications__button}>
              <button className={cl.section__publications__btn}>
                Загрузить еще
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className={cl.footer}>
        <div className={`${cl.footer__container} ${cl._container}`}>
          <h2 className={cl.footer__header}>связаться с нами</h2>

          <div className={cl.footer__cards}>
            <div className={cl.footer__cards__item}>
              <a href="#">
                <img className={cl.footer__cards__img} src={telega} alt="" />
              </a>
            </div>
            <div className={cl.footer__cards__item}>
              <a href="#">
                <img className={cl.footer__cards__img} src={instagram} alt="" />
              </a>
            </div>
            <div className={cl.footer__cards__item}>
              <a href="#">
                <img className={cl.footer__cards__img} src={globe} alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default categoryPage;
