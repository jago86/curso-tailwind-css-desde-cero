Vue.component('link-cascadia', {
    template: `
        <a class="group flex items-center text-do-blue-light hover:text-do-blue-medium font-cascadia text-lg font-bold" href="">
            <slot></slot>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-all duration-300 group-hover:ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </a>
    `
})

Vue.component('panel-blog', {
    template: `
        <div class="flex flex-col bg-white transition-shadow duration-300 shadow-lg hover:shadow-2xl rounded-lg">
            <div>
                <slot name="image"></slot>
            </div>

            <div class="flex flex-col justify-between border py-6 px-6">
                <div class="uppercase text-sky-500 tracking-widest">
                    <slot name="type"></slot>
                </div>
                <div class="font-medium text-lg my-5">
                    <slot name="title"></slot>
                </div>
                <div class="flex text-gray-500 text-sm">
                    <div class="w-2/3 shrink-0">
                        <slot name="date"></slot>
                    </div>
                    <div v-if="$slots.visits" class="flex items-center w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <slot name="visits"></slot>
                    </div>
                </div>
            </div>
        </div>
    `
})

new Vue({
    el: '#app',

    data: {
        theme: 'light',
    },

    mounted() {
        this.theme = localStorage.theme ?? 'system'
        this.applyTheme()
    },

    methods: {
        setDarkMode() {
            localStorage.theme = 'dark'
            document.getElementById('app').classList.add('dark')
            this.theme = 'dark'
            this.applyTheme()
        },
        setLightMode() {
            localStorage.theme = 'light'
            document.getElementById('app').classList.remove('dark')
            this.theme = 'light'
            this.applyTheme()
        },
        setSystemMode() {
            localStorage.removeItem('theme')
            document.getElementById('app').classList.remove('dark')
            this.theme = 'system'
            this.applyTheme()
        },

        applyTheme() {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }
})
