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
                        61%
                    </div>
                    <h4 class="heading-4">
                        Visits with conversion
                    </h4>
                </div>
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        127%
                    </div>
                    <h4 class="heading-4">
                        More traffic
                    </h4>
                </div>
            </div>
            <div class="service-result__details">
                <div class="service-result__logo">

                </div>
                <div class="service-result__line"></div>
                <p class="body-copy">
                    Descriere digital marketing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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