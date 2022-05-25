<template>
    <section class="about-team section-m-top container">
        <h2 class="heading-2">
           The people who make the shoes walk 
        </h2>
        <div
            v-for="(member, i) in members"
            :key="'member' + i"
            class="about-team__card card-white"
        >
            <div class="about-team__card-image">
                <img :src="require(`~/assets/images/team/${member.imageUrl}`)" :alt="member.name + 'photo'" class="u-image-cover">
            </div>
            <h4 class="heading-4">
                {{member.name}}
            </h4>
            <h4 class="heading-4 u-text-secondary">
                {{member.role}}
            </h4>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                members: [
                    {
                        name: 'Alexandru Medvedeu',
                        imageUrl: 'alex.jpg',
                        role: 'CEO, UI/UX Designer'
                    },
                    {
                        name: 'Flavian Babciuc',
                        imageUrl: 'flavian.jpg',
                        role: 'Marketing Specialist'
                    },
                    {
                        name: 'Serban Alexandru',
                        imageUrl: 'serban.jpg',
                        role: 'Head of Development'
                    }
                ]
            }
        }
    }
</script>