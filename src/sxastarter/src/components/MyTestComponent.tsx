import { Text, Field, Image, Link, LinkField, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type MyTestComponent = ComponentProps & {
  fields: {
    title: Field<string>;
    subtitle: Field<string>;
    ctaText: Field<string>;
    backgroundImage: ImageField;
    ctaLink: LinkField;
  };
};
export const Default = (props: MyTestComponent): JSX.Element => {
  const { title, subtitle, ctaLink, backgroundImage } = props.fields;
  return (
    <section className="hero-banner-buttonleft mt-4 bg-image mb-2 py-4 h-300">
      <div className="container-fluid p-0 width-118per bg-color">
        <div className="card border-0">
          <div className="card-image h-300">
            <Image field={backgroundImage} className="at-banner h-100" alt="Banner Image" />
          </div>
          <div className="card-img-overlay text-dark text-center top-15 align-middle">
            <div className="position-relative mt-2 p-4">
              <h2 className="card-title mt-4 py-4 mb-4 fs-36 fs-24">
                {' '}
                <Text field={title} />
              </h2>
              <h4 className="card-text mt-4 mb-4 py-2 clr-gry fs-20">
                <Text field={subtitle} />
              </h4>
              <Link
                field={ctaLink}
                showLinkTextWithChildrenPresent={true}
                className="btn btn-lg mt-5 fs-16 text-white border-0 atkoreGreen plain-banner-btn"
                data-otherattributes="pass-through-to-anchor-tag"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
