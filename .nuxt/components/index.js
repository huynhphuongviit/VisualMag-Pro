export { default as Advertising } from '../..\\components\\Advertising.vue'
export { default as AlbumImages } from '../..\\components\\AlbumImages.vue'
export { default as Banner } from '../..\\components\\Banner.vue'
export { default as BigContent } from '../..\\components\\BigContent.vue'
export { default as Blogging } from '../..\\components\\Blogging.vue'
export { default as Business } from '../..\\components\\Business.vue'
export { default as Content } from '../..\\components\\Content.vue'
export { default as Fashion } from '../..\\components\\Fashion.vue'
export { default as FilterByTag } from '../..\\components\\FilterByTag.vue'
export { default as FollowUs } from '../..\\components\\FollowUs.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as HeaderMobile } from '../..\\components\\HeaderMobile.vue'
export { default as HeaderSection } from '../..\\components\\HeaderSection.vue'
export { default as Lifestyle } from '../..\\components\\Lifestyle.vue'
export { default as Marketing } from '../..\\components\\Marketing.vue'
export { default as MediumContent } from '../..\\components\\MediumContent.vue'
export { default as News } from '../..\\components\\News.vue'
export { default as Reviews } from '../..\\components\\Reviews.vue'
export { default as SmallContentWithImages } from '../..\\components\\SmallContentWithImages.vue'
export { default as SmallTechnology } from '../..\\components\\SmallTechnology.vue'
export { default as SocialMedia } from '../..\\components\\SocialMedia.vue'
export { default as Technology } from '../..\\components\\Technology.vue'
export { default as WebDesign } from '../..\\components\\WebDesign.vue'
export { default as WordPress } from '../..\\components\\WordPress.vue'

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
