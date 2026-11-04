
import HomeHero from './HomeHero'
import HomeMarquee from './HomeMarquee'
import HomeIntro from './HomeIntro'
import HomeConsultation from './HomeConsultation'
import HomeStatsFounder from './HomeStatsFounder'
import HomeBrandServices from './HomeBrandServices'
import HomeCaseStudies from './HomeCaseStudies'
import HomeTestimonials from './HomeTestimonials'
import HomePricing from './HomePricing'
import HomeFAQ from './HomeFAQ'
import HomeBlogPortfolio from './HomeBlogPortfolio'
import HomeFinalCTA from './HomeFinalCTA'
import HomeContact from './HomeContact'

function Home() {
  return (
    <main className="home-page">
      <HomeHero />
      <HomeMarquee />
      <HomeIntro />
      <HomeConsultation />
      <HomeStatsFounder />
      <HomeBrandServices />
      <HomeCaseStudies />
      <HomeTestimonials />
      <HomePricing />
      <HomeFAQ />
      <HomeBlogPortfolio />
      <HomeFinalCTA />
      <HomeContact />
    </main>
  )
}

export default Home
