import React from 'react';
import {EmblaOptionsType} from 'embla-carousel';
import {DotButton, useDotButton} from './EmblaCarouselDotButton';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Tilt from 'react-parallax-tilt';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = props => {
  const {options} = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide" key={1}>
            <div className="">
              <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <figure className="app-frame mac dark borderless shadow--tl">
                  <img
                    src="/img/screenshots/distr-deployments-dark.png"
                    alt="Distr"
                  />
                </figure>
              </Tilt>
              Deployment Overview Status Dashboard incl. Logs
            </div>
          </div>
          <div className="embla__slide" key={0}>
            <div className="">
              <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <figure className="app-frame mac dark borderless shadow--tl">
                  <img
                    src="/img/screenshots/distr-deployments-dark.png"
                    alt="Distr"
                  />
                </figure>
              </Tilt>
              Deployment Overview Status Dashboard incl. Logs
            </div>
          </div>
          <div className="embla__slide" key={1}>
            <div className="">
              <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <figure className="app-frame mac dark borderless shadow--tl">
                  <img
                    src="/img/screenshots/distr-deployments-dark.png"
                    alt="Distr"
                  />
                </figure>
              </Tilt>
              Deployment Overview Status Dashboard incl. Logs
            </div>
          </div>
          <div className="embla__slide" key={2}>
            <div className="">
              <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <figure className="app-frame mac dark borderless shadow--tl">
                  <img
                    src="/img/screenshots/distr-deployments-dark.png"
                    alt="Distr"
                  />
                </figure>
              </Tilt>
              Deployment Overview Status Dashboard incl. Logs
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
