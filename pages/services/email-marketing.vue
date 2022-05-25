<template>
    <div>
        <section class="service-about section-m-top section-white">
            <div class="container">
                <div class="service-about__content">
                    <h2 class="heading-2">
                        <span class="text-highlight">
                            E-mail Marketing
                        </span>
                    </h2>
                    <p class="body-copy">
                        Email marketing is the act of sending a commercial message, typically to a group of people, using email. In its broadest sense, every email sent to a potential or current customer could be considered email marketing.
                    </p>
                </div>
                <div class="service-about__image">
                    <img src="@/assets/images/email-marketing.png" alt="Email marketing" class="u-image-cover">
                </div>
                <div class="service-about__content service-about__content--second">
                    <h2 class="heading-2">
                        E-mail Marketing that
                        breaks through the noise
                    </h2>
                    <p class="body-copy">
                        General e-mails are boring. At InYourShoes we treat every client in a unique way, providing only relevant information according to their needs.
                        By tracking interests and behaviors we categorize each visitor, planning an exclusive journey of content e-mails that will keep the user engaged.
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
                        33%
                    </div>
                    <h4 class="heading-4">
                        More emails opened
                    </h4>
                </div>
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        20%
                    </div>
                    <h4 class="heading-4">
                        Increase in sales
                    </h4>
                </div>
            </div>
            <div class="service-result__details">
                <div class="service-result__logo">
                    <img src="@/assets/images/testimonials/ghostery.png" alt="Ghostery" class="u-image-contain">
                </div>
                <div class="service-result__line"></div>
                <p class="body-copy">
                    Ghostery is an online privacy company that helps its users to maintain control of their data and to block spamming ads. They keep their users engaged by sending regular e-mails with articles or new features. Seems to be simple. But before our help, they were doing it kinda wrong. Without a proper strategy, those automated e-mails only risk to bore the reader and make him give on the newsletter, potentially losing clients.
                    <br>
                    <br>
                    Together with our consultancy, we set up an automated but preference-targeted nurture strategy that makes each user feel "special". This involved a rise by 33% of e-mails reviewed and an increase by 20% of upselling.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'email-marketing'
}
</script>