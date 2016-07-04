define(function(require) {
    var $ = require('jquery'),
        header = require('./header.js'),
        nav = require('./nav.js'),
        lessonFocus = require('./lesson-focus.js'),
        smallFocus = require('./small-focus.js'),
        recommend = require('./recommend.js'),
        professionRoute = require('./profession-route.js'),
        knowledgeSystem = require('./knowledge-system.js'),
        boutiqueCourse = require('./boutique-course.js'),
        cooperationCompany = require('./cooperation-company.js'),
        media = require('./media.js'),
        contactMethod = require('./contact-method.js'),
        wiki = require('./wiki.js'),
        goTop = require('./go-top.js');

    //头部
    header.onFocusAndBlur();
    header.onHoverAndOut();

    //导航
    nav.onHoverAndOut();

    //大的焦点轮播图
    lessonFocus.animationMove();
    lessonFocus.onHoverAndOut();
    lessonFocus.onClick();

    //小的焦点图
    smallFocus.onHoverAndOut();
    smallFocus.onClick();

    //课程推荐
    recommend.onHover();

    // 职业路径图
    professionRoute.onEnterAndLeave();

    // 知识体系图
    knowledgeSystem.onEnterAndLeave();

    // 精品课程
    boutiqueCourse.onHoverAndOut();

    // 企业合作
    cooperationCompany.onHoverAndOut();
    cooperationCompany.onClick();

    // 媒体报道
    media.onHoverAndOut();
    media.onClick();

    // 极客联系方式
    contactMethod.onHoverAndOut();

    // Wiki
    wiki.onHoverAndOut();

    // 回到顶部
    goTop.goTop();

})
