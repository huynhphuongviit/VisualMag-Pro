export const AlbumImages = () => import('../..\\components\\AlbumImages.vue' /* webpackChunkName: "components/album-images" */).then(c => wrapFunctional(c.default || c))
export const Banner = () => import('../..\\components\\Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const BigContent = () => import('../..\\components\\BigContent.vue' /* webpackChunkName: "components/big-content" */).then(c => wrapFunctional(c.default || c))
export const Blogging = () => import('../..\\components\\Blogging.vue' /* webpackChunkName: "components/blogging" */).then(c => wrapFunctional(c.default || c))
export const Business = () => import('../..\\components\\Business.vue' /* webpackChunkName: "components/business" */).then(c => wrapFunctional(c.default || c))
export const CategoriesDetail = () => import('../..\\components\\CategoriesDetail.vue' /* webpackChunkName: "components/categories-detail" */).then(c => wrapFunctional(c.default || c))
export const Content = () => import('../..\\components\\Content.vue' /* webpackChunkName: "components/content" */).then(c => wrapFunctional(c.default || c))
export const Fashion = () => import('../..\\components\\Fashion.vue' /* webpackChunkName: "components/fashion" */).then(c => wrapFunctional(c.default || c))
export const FilterByTag = () => import('../..\\components\\FilterByTag.vue' /* webpackChunkName: "components/filter-by-tag" */).then(c => wrapFunctional(c.default || c))
export const FollowUs = () => import('../..\\components\\FollowUs.vue' /* webpackChunkName: "components/follow-us" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeaderMobile = () => import('../..\\components\\HeaderMobile.vue' /* webpackChunkName: "components/header-mobile" */).then(c => wrapFunctional(c.default || c))
export const HeaderSection = () => import('../..\\components\\HeaderSection.vue' /* webpackChunkName: "components/header-section" */).then(c => wrapFunctional(c.default || c))
export const LeftContainerCategory = () => import('../..\\components\\LeftContainerCategory.vue' /* webpackChunkName: "components/left-container-category" */).then(c => wrapFunctional(c.default || c))
export const LeftContainerDetail = () => import('../..\\components\\LeftContainerDetail.vue' /* webpackChunkName: "components/left-container-detail" */).then(c => wrapFunctional(c.default || c))
export const Lifestyle = () => import('../..\\components\\Lifestyle.vue' /* webpackChunkName: "components/lifestyle" */).then(c => wrapFunctional(c.default || c))
export const Marketing = () => import('../..\\components\\Marketing.vue' /* webpackChunkName: "components/marketing" */).then(c => wrapFunctional(c.default || c))
export const MediumContent = () => import('../..\\components\\MediumContent.vue' /* webpackChunkName: "components/medium-content" */).then(c => wrapFunctional(c.default || c))
export const News = () => import('../..\\components\\News.vue' /* webpackChunkName: "components/news" */).then(c => wrapFunctional(c.default || c))
export const RecentPosts = () => import('../..\\components\\RecentPosts.vue' /* webpackChunkName: "components/recent-posts" */).then(c => wrapFunctional(c.default || c))
export const Reviews = () => import('../..\\components\\Reviews.vue' /* webpackChunkName: "components/reviews" */).then(c => wrapFunctional(c.default || c))
export const RightContainerDetail = () => import('../..\\components\\RightContainerDetail.vue' /* webpackChunkName: "components/right-container-detail" */).then(c => wrapFunctional(c.default || c))
export const SmallContentWithImages = () => import('../..\\components\\SmallContentWithImages.vue' /* webpackChunkName: "components/small-content-with-images" */).then(c => wrapFunctional(c.default || c))
export const SmallTechnology = () => import('../..\\components\\SmallTechnology.vue' /* webpackChunkName: "components/small-technology" */).then(c => wrapFunctional(c.default || c))
export const SocialMedia = () => import('../..\\components\\SocialMedia.vue' /* webpackChunkName: "components/social-media" */).then(c => wrapFunctional(c.default || c))
export const TagsDetail = () => import('../..\\components\\TagsDetail.vue' /* webpackChunkName: "components/tags-detail" */).then(c => wrapFunctional(c.default || c))
export const Technology = () => import('../..\\components\\Technology.vue' /* webpackChunkName: "components/technology" */).then(c => wrapFunctional(c.default || c))
export const WordPress = () => import('../..\\components\\WordPress.vue' /* webpackChunkName: "components/word-press" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
