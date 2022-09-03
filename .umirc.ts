export default {
  npmClient: "pnpm",
  tailwindcss: {},
  request:{},
  plugins: [],
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',component: '@/pages/index'
        },
        {
          path: '/post/:id',component: '@/pages/post/index'
        }
      ]
    }
  ]
};
