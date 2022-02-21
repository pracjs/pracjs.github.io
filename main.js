prac.config({
    paths: {
        // Add your library dependencies here
        // For example
        // "datepicker": "datepicker" // Put the js file datepicker.js to js/lib directory first
    },
    shim: {
    },
    routes: {
        // Add your routers here
        home: { path: "/", moduleId: "app/home/home" },
        quickStart: { path: "/quick-start", moduleId: "app/quick-start/quick-start" },
        router: { path: "/router", moduleId: "app/router/router" },
        module: { path: "/module", moduleId: "app/module/module" },
        interceptor: { path: "/interceptor", moduleId: "app/interceptor/interceptor" },
        form: { path: "/component/form", moduleId: "app/component/form/form" },
        multiselect: { path: "/component/multiselect", moduleId: "app/component/multiselect/multiselect" },
        cascselect: { path: "/component/cascselect", moduleId: "app/component/cascselect/cascselect" },
        slider: { path: "/component/slider", moduleId: "app/component/slider/slider" },
        stepper: { path: "/component/stepper", moduleId: "app/component/stepper/stepper" },
        dialog: { path: "/component/dialog", moduleId: "app/component/dialog/dialog" },
        pagination: { path: "/component/pagination/:skip/:limit", moduleId: "app/component/pagination/pagination" },
        datepicker: { path: "/component/datepicker", moduleId: "app/component/datepicker/datepicker" },
        uploader: { path: "/component/uploader", moduleId: "app/component/uploader/uploader" },
        mGetStarted: { path: "/m/get-started", moduleId: "app/m/get-started/get-started" },
        mPicker: { path: "/m/form/picker", moduleId: "app/m/picker/picker" },
        mDatepicker: { path: "/m/form/datepicker", moduleId: "app/m/datepicker/datepicker" },
        mTimepicker: { path: "/m/form/timepicker", moduleId: "app/m/timepicker/timepicker" },
        mCalendar: { path: "/m/form/calendar", moduleId: "app/m/calendar/calendar" },
        mSlider: { path: "/m/form/slider", moduleId: "app/m/slider/slider" },
        mStepper: { path: "/m/form/stepper", moduleId: "app/m/stepper/stepper" },
        mRate: { path: "/m/form/rate", moduleId: "app/m/rate/rate" },
        mUploader: { path: "/m/form/uploader", moduleId: "app/m/uploader/uploader" },
        mValidation: { path: "/m/form/validation", moduleId: "app/m/validation/validation" },
        mLoading: { path: "/m/action/loading", moduleId: "app/m/loading/loading" },
        mPullRefresh: { path: "/m/action/pull-refresh", moduleId: "app/m/pull-refresh/pull-refresh" },
        mSwipeCell: { path: "/m/action/swipe-cell", moduleId: "app/m/swipe-cell/swipe-cell" },
        mDialog: { path: "/m/action/dialog", moduleId: "app/m/dialog/dialog" },
        mToast: { path: "/m/action/toast", moduleId: "app/m/toast/toast" },
        mLoadList: { path: "/m/action/load-list", moduleId: "app/m/load-list/load-list" },
        mLazyLoad: { path: "/m/action/lazy-load", moduleId: "app/m/lazy-load/lazy-load" },
        mSlides: { path: "/m/action/slides", moduleId: "app/m/slides/slides" },
        mImagePreview: { path: "/m/action/image-preview", moduleId: "app/m/image-preview/image-preview" },
        mDropdown: { path: "/m/action/dropdown", moduleId: "app/m/dropdown/dropdown" },
        mShare: { path: "/m/action/share", moduleId: "app/m/share/share" },
        mIndexNav: { path: "/m/nav/index-nav", moduleId: "app/m/index-nav/index-nav" },
        mTab: { path: "/m/nav/tab", moduleId: "app/m/tab/tab" },
        mTabBar: { path: "/m/nav/tab-bar", moduleId: "app/m/tab-bar/tab-bar" },
        mCollapse: { path: "/m/nav/collapse", moduleId: "app/m/collapse/collapse" },
        mPagination: { path: "/m/nav/pagination", moduleId: "app/m/pagination/pagination" },
        mTopMenu: { path: "/m/nav/top-menu", moduleId: "app/m/top-menu/top-menu" },
        mSideBar: { path: "/m/nav/side-bar", moduleId: "app/m/side-bar/side-bar" },
        mSteps: { path: "/m/display/steps", moduleId: "app/m/steps/steps" },
        mCell: { path: "/m/display/cell", moduleId: "app/m/cell/cell" },
    },
    interceptor: { // Add your interceptors here
        page: {
            // Before page render
            before: [function (name, uri, args, $, next) {
                next();
            }, function (name, uri, args, $, next) {
                next();
            }],
            // After page render
            after: [function (name, uri, args, $, next) {
                next();
            }],
            // On error
            error: [function (e, $) {
            }]
        },
        request: {
            // On request complete
            complete: [function (xhr, status, $, next) {
                next();
            }]
        }
    }
});