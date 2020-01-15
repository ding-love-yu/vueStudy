import router from '@/router'

export default {
    router: {
        go2page(url) {
            router.push({
                path: url
            });
        }
    }
}