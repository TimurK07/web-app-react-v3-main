import cl from './page2.module.css';

import arrowLeft from './img/header/arrow-left.svg';
import home from './img/header/home.svg';
import beverage from './img/slider/beverage.svg';
import circus from './img/slider/circus.svg';
import dance from './img/slider/dance.svg';
import castle from './img/slider/castle.svg';
import tree from './img/slider/tree.svg';
import search from './img/slider/search.svg';
import tool from './img/slider/tool.svg';
import img1 from './img/food/01.svg';
import img2 from './img/food/02.svg';
import img3 from './img/food/03.svg';
import img4 from './img/food/04.svg';
import img5 from './img/food/05.svg';
import img6 from './img/food/06.svg';
import heart from './img/food/heart.svg';
import map from './img/map/map.svg';
import { Link } from 'react-router-dom';

const InfoPage = () => {
  const changeTab = (tabNumber) => {
    document.querySelectorAll(`.${cl.tabs_box} .${cl.tab}`).forEach((tab) => {
      tab.classList.remove(cl.active);
    });
    document.querySelectorAll(`.${cl.tab_content}`).forEach((content) => {
      content.classList.remove(cl.active);
    });

    const tab = document.querySelector(
        `.${cl.tabs_box} .${cl.tab}:nth-child(${tabNumber})`
    );
    const content = document.querySelector(
        `.${cl.tab_content}:nth-child(${tabNumber})`
    );

    if (tab && content) {
      tab.classList.add(cl.active);
      content.classList.add(cl.active);
    }
  };

  return (
      <>
        <header className={cl.header}>
          <Link to={'/'}>
          <div className={`${cl.header__container} ${cl._container}`}>
            <a href="#" className={cl.header__icon}>
              <img src={arrowLeft} alt="" />
            </a>
            <a href="#" className={cl.header__icon}>
              <img src={home} alt="" />
            </a>
          </div>
          </Link>
        </header>

        <section className={`${cl.page__food} ${cl.food}`}>
          <div className={`${cl.wrapper} ${cl._container}`}>
            <ul className={cl.tabs_box}>
              <li className={`${cl.tab} ${cl.active}`} onClick={() => changeTab(1)}>
                <img src={beverage} alt="" />
                <span className={cl.tab__text}>Еда</span>
              </li>
              <li className={cl.tab} onClick={() => changeTab(2)}>
                <img src={circus} alt="" />
                <span className={cl.tab__text}>Интересные места</span>
              </li>
              <li className={cl.tab} onClick={() => changeTab(3)}>
                <img src={dance} alt="" />
                <span className={cl.tab__text}>Развлечения</span>
              </li>
              <li className={cl.tab} onClick={() => changeTab(4)}>
                <img src={castle} alt="" />
                <span className={cl.tab__text}>Музеи и выставки</span>
              </li>
              <li className={cl.tab} onClick={() => changeTab(5)}>
                <img src={tree} alt="" />
                <span className={cl.tab__text}>Загородом</span>
              </li>
              <li className={cl.tab} onClick={() => changeTab(6)}>
                <img src={search} alt="" />
                <span className={cl.tab__text}>Экскурсии</span>
              </li>
            </ul>

            <div className={`${cl.tab_content} ${cl.active}`} id="tab1"></div>
            <div className={cl.tab_content} id="tab2"></div>
            <div className={cl.tab_content} id="tab3"></div>
          </div>

          <div className={`${cl.food__header} ${cl._container}`}>
            <div className={cl.food__content}>
              <div className={cl.food__title}>Еда</div>
              <div className={cl.food__desc}>
                Нажмите на кнопку «фильтры», чтобы выбрать наиболее подходящее место
              </div>
            </div>
            <div className={cl.food__icon}>
              <img src={tool} alt="" />
            </div>
          </div>

          <Link to={'/previewPage'}>
          <div className={`${cl.food__bottom} ${cl._container}`}>
            <div className={`${cl.food__row} ${cl._container}`}>
              
                <div className={`${cl.food__column}`}>
                  <img src={img1} alt="John Smith"/>
                  <div className={`${cl.main_like}`}>
                    <img src={heart} alt=""/>
                  </div>
                  <h2 className={`${cl.food__name}`}>ПРОСТРАНСТВА</h2>
                  <p className={`${cl.food__position}`}>Севкабель Порт</p>
                </div>
              
              <div className={`${cl.food__column}`}>
                <img className="_ibg" src={img2} alt="John Smith"/>
                <div className={`${cl.main_like}`}>
                  <img src={heart} alt=""/>
                </div>
                <h2 className={`${cl.food__name}`}>ПРОСТРАНСТВА</h2>
                <p className={`${cl.food__position}`}>Третье Место</p>
              </div>

              <div className={`${cl.food__column}`}>
                <img className="_ibg" src={img3} alt="John Smith"/>
                <div className={`${cl.main_like}`}>
                  <img src={heart} alt=""/>
                </div>
                <h2 className={`${cl.food__name}`}>КОНЦЕРТ</h2>
                <p className={`${cl.food__position}`}>Концерт в студии при свечах</p>
              </div>
              <div className={`${cl.food__column}`}>
                <img className="_ibg" src={img4} alt="John Smith"/>
                <div className={`${cl.main_like}`}>
                  <img src={heart} alt=""/>
                </div>
                <h2 className={`${cl.food__name}`}>КОНЦЕРТ</h2>
                <p className={`${cl.food__position}`}>Вивальди. Времена года</p>
              </div>
              <div className={`${cl.food__column}`}>
                <img className="_ibg" src={img1} alt="John Smith"/>
                <div className={`${cl.main_like}`}>
                  <img src={heart} alt=""/>
                </div>
                <h2 className={`${cl.food__name}`}>ПРОСТРАНСТВА</h2>
                <p className={`${cl.food__position}`}>Севкабель Порт</p>
              </div>
              <div className={`${cl.food__column}`}>
                <img src={img2} alt="John Smith"/>
                <div className={`${cl.main_like}`}>
                  <img src={heart} alt=""/>
                </div>
                <h2 className={`${cl.food__name}`}>ПРОСТРАНСТВА</h2>
                <p className={`${cl.food__position}`}>Третье место</p>
              </div>

              <div className={`${cl.food__column}`}>
                <img src={img5} alt="John Smith"/>
                <div className={`${cl.main_like}`}>
                  <img src={heart} alt=""/>
                </div>
                <h2 className={`${cl.food__name}`}>КОНЦЕРТ</h2>
                <p className={`${cl.food__position}`}>Чайковский. Ноктюрн номер 6</p>
              </div>
              <div className={`${cl.food__column}`}>
                <img src={img6} alt="John Smith"/>
                <div className={`${cl.main_like}`}>
                  <img src={heart} alt=""/>
                </div>
                <h2 className={`${cl.food__name}`}>КОНЦЕРТ</h2>
                <p className={`${cl.food__position}`}>Chang cafe</p>
              </div>
            </div>
          </div>
          </Link>
        </section>
        <section className={`${cl.page__map} ${cl.map}`}>
        <div className={`${cl.map__container} ${cl._container}`}>
          <div className={cl.map__content}>
            <div className={cl.map__title}>Онлайн-карта</div>
            <div className={cl.map__desc}>
              Интерактивная карта в Google Maps с местами города. Ищите новые места <p>рядом с вами!</p>
            </div>
          </div>
          <img src={map} alt="" />
          <a className={cl.map_btn}>ОТКРЫТЬ ОНЛАЙН-КАРТУ</a>
        </div>
      </section>
    </>
  );
};

export default InfoPage;