<template>
<q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

            <q-toolbar-title>
                Notes App
            </q-toolbar-title>
            <q-btn flat round icon="translate">
                <q-menu>
                    <q-list style="min-width: 100px">
                        <q-item @click="lang = language.value" clickable v-close-popup v-for="language in languages">
                            <q-item-section>{{ language.label }}</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
        <q-list>
            <q-item-label header class="text-grey-8">
                Menu
            </q-item-label>
            <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
    </q-drawer>

    <q-page-container>
        <div class="row q-ma-md">
            <div class="col-12">
                <router-view />
            </div>
        </div>
    </q-page-container>
</q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [{
    title: 'Home',
    caption: 'layout.home.caption',
    icon: 'home',
    link: '#/'
}];

export default {
    name: 'MainLayout',
    components: {
        EssentialLink
    },
    data() {
        return {
            leftDrawerOpen: false,
            essentialLinks: linksData,
            lang: this.$i18n.locale,
            languages: [{
                    value: 'en-us',
                    label: 'English'
                },
                {
                    value: 'pt-br',
                    label: 'Português'
                },
                {
                    value: 'es-es',
                    label: 'Español'
                }
            ]
        }
    },
    watch: {
        lang(lang) {
            localStorage.setItem('lang', lang);
            this.$i18n.locale = lang
        }
    }
}
</script>
