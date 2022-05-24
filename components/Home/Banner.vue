<template>
    <div class="container">
        <header class="home-banner">
            <div class="home-banner__content">
                <h1 class="heading-1">
                    Walking with you
                    <br>
                    towards your goals
                </h1>
                <h3 class="heading-3">
                    The digital marketing agency that walks
                    <br>
                    <span class="text-highlight">
                        in your shoes ‘till you succeed
                    </span>
                </h3>
                <div class="home-banner__cta">
                    <div class="home-banner__arrow">
                        <img src="@/assets/images/home-banner-arrow.svg" class="u-image-contain">
                    </div>
                    <UiButton
                        placeholder="Let's talk"
                        type="router-link"
                        link="/contact"
                    />
                </div>
            </div>
            <div class="home-banner__image">
                <img src="@/assets/images/home-banner.svg" alt="Marketing Consulting Team" class="u-image-contain">    
            </div>
        </header>
    </div>
</template>