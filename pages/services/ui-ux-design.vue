<template>
    <div>
        <section class="service-about section-m-top section-white">
            <div class="container">
                <div class="service-about__content">
                    <h2 class="heading-2">
                        <span class="text-highlight">
                            UI/UX Design
                        </span>
                    </h2>
                    <p class="body-copy">
                        A user experience (UX) designer works on a team to create products that provide meaningful and enjoyable experiences for users. They are concerned with the entire process of product design, from branding to design to useability. UI (user interface) designers build interfaces in software or other computerized devices.
                    </p>
                </div>
                <div class="service-about__image">
                    <img src="@/assets/images/ui-ux.png" alt="UI/UX Design" class="u-image-cover">
                </div>
                <div class="service-about__content service-about__content--second">
                    <h2 class="heading-2">
                        UI/UX Design that
                        breaks through the noise
                    </h2>
                    <p class="body-copy">
                        User Interface and User Experience have a key role in communicating your service/product.
                        InYourShoes knows how to create a catchy interface while maintaining it intuitive for the user, granting a smooth platform navigation sustained by user research.
                    </p>
                    <UiButton
                        placeholder="Let's talk"
                        type="router-link"
                        link="/contact"
                    />
                </div>
                <div class="service-about__dots">
                    <img src="@/assets/images/home-about-dots.svg" alt="Digital Marketing" class="u-image-contain">
                </div>
            </div>
        </section>
        <section class="service-result section-m-top container">
            <h2 class="heading-2">
                The numbers don’t lie
            </h2>
            <div class="service-result__numbers">
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        51%
                    </div>
                    <h4 class="heading-4">
                        More visitors
                    </h4>
                </div>
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        39%
                    </div>
                    <h4 class="heading-4">
                        Increase in sales
                    </h4>
                </div>
            </div>
            <div class="service-result__details">
                <div class="service-result__logo">
                    <img src="@/assets/images/testimonials/carli.svg" alt="Carli" class="u-image-contain">
                </div>
                <div class="service-result__line"></div>
                <p class="body-copy">
                    Fratelli Carli is a food company with signature Italian products. Their website allows online shopping and keeps the consumers updated with new products. Before starting a partnership with InYourShoes they were struggling with an always busy customer support line and a low sale conversion. Thanks to our vision and expertise, we managed to find the reason why - an old and cumbersome website that was not intuitive for everyone. Our specialists in UI/UX quickly re-imagined the platform, granting a new impactful look that would attract and impress the client, why also keeping it simple to navigate.
                    <br>
                    <br>
                    Since the beginning of our journey, we brought a sensational 39% raise in sales and 51% more visitors.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ui-ux'
}
</script>