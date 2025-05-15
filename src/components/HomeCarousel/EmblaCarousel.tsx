import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {EmblaOptionsType} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import {DotButton, useDotButton} from './EmblaCarouselDotButton';

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
          <div className="embla__slide" key={0}>
            <figure>
              <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <div
                  className="app-frame mac dark borderless shadow--tl"
                  data-url="app.distr.sh">
                  <ThemedImage
                    alt="Distr Deployment Overview Status Dashboard incl. Logs"
                    sources={{
                      light: useBaseUrl(
                        '/img/screenshots/distr/distr-deployments-light.webp',
                      ),
                      dark: useBaseUrl(
                        '/img/screenshots/distr/distr-deployments-dark.webp',
                      ),
                    }}
                  />
                </div>
              </Tilt>
              <figcaption className="embla__caption">
                Deployment Overview Status Dashboard incl. Logs
              </figcaption>
            </figure>
          </div>
          <div className="embla__slide" key={1}>
            <figure>
              <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <div
                  className="app-frame mac dark borderless shadow--tl"
                  data-url="app.distr.sh">
                  <ThemedImage
                    alt="Distr OCI registry for self-managed artifact distribution"
                    sources={{
                      light: useBaseUrl(
                        '/img/screenshots/distr/distr-artifacts-light.webp',
                      ),
                      dark: useBaseUrl(
                        '/img/screenshots/distr/distr-artifacts-dark.webp',
                      ),
                    }}
                  />
                </div>
              </Tilt>
              <figcaption className="embla__caption">
                OCI registry for self-managed artifact distribution
              </figcaption>
            </figure>
          </div>
          <div className="embla__slide" key={2}>
            <figure>
              <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <div
                  className="app-frame mac dark borderless shadow--tl"
                  data-url="app.distr.sh">
                  <ThemedImage
                    alt="Distr Artifact Licenses allow software vendors to restrict specific tags per customer"
                    sources={{
                      light: useBaseUrl(
                        '/img/screenshots/distr/distr-artifact-licenses-light.webp',
                      ),
                      dark: useBaseUrl(
                        '/img/screenshots/distr/distr-artifact-licenses-dark.webp',
                      ),
                    }}
                  />
                </div>
              </Tilt>
              <figcaption className="embla__caption">
                Artifact Licenses allow software vendors to restrict specific
                tags per customer
              </figcaption>
            </figure>
          </div>
          <div className="embla__slide" key={3}>
            <figure>
              <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <div
                  className="app-frame mac dark borderless shadow--tl"
                  data-url="app.distr.sh">
                  <ThemedImage
                    alt="Distr White-labeled Customer Portal for Artifact Downloads"
                    sources={{
                      light: useBaseUrl(
                        '/img/screenshots/distr/distr-customer-portal-artifacts-light.webp',
                      ),
                      dark: useBaseUrl(
                        '/img/screenshots/distr/distr-customer-portal-artifacts-dark.webp',
                      ),
                    }}
                  />
                </div>
              </Tilt>
              <figcaption className="embla__caption">
                White-labeled Customer Portal for Artifact Downloads
              </figcaption>
            </figure>
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
