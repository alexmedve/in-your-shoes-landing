<template>
    <div>
        <section class="service-about section-m-top section-white">
            <div class="container">
                <div class="service-about__content">
                    <h2 class="heading-2">
                        <span class="text-highlight">
                            Project Management
                        </span>
                    </h2>
                    <p class="body-copy">
                        Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people. For example, the development of software for an improved business process.
                    </p>
                </div>
                <div class="service-about__image">
                    <img src="@/assets/images/project-management.png" alt="Project Management" class="u-image-cover">
                </div>
                <div class="service-about__content service-about__content--second">
                    <h2 class="heading-2">
                        Project Management that
                        breaks through the noise
                    </h2>
                    <p class="body-copy">
                        Setting up a strong strategy and having a clear picture of the process leads to consistent savings and great outcomes. With its experience and many projects conducted end to end, InYourShoes knows what are the best practices to achieve the desired objectives. 
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
                        Cost avoidance
                    </h4>
                </div>
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        37%
                    </div>
                    <h4 class="heading-4">
                        Increased productivity
                    </h4>
                </div>
            </div>
            <div class="service-result__details">
                <div class="service-result__logo">
                    <img src="@/assets/images/testimonials/steer.svg" alt="Steer" class="u-image-contain">
                </div>
                <div class="service-result__line"></div>
                <p class="body-copy">
                    Steer is a global business consultancy company. Being an already big and international company, their main obstacle is project management. Before our partnership they were dealing with a low performance and efficiency in their internal tasks.
                    <br>
                    <br>
                    With our knowledge and help, we individuated those crucial areas and re-imagined their workflows to have a better process organization and visibility, involving a 33% cost avoidance on management fees and a grow of productivity by 37%.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'project-management'
}
</script>