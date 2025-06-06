import HeroFeature from './HeroFeature.svelte';
import CaseStudy from './CaseStudy.svelte';
import ProductOverview from './ProductOverview.svelte';
import CreativeCampaign from './CreativeCampaign.svelte';
import ComponentShowcase from './ComponentShowcase.svelte';
import InteractiveDemo from './InteractiveDemo.svelte';
import ResourceCenter from './ResourceCenter.svelte';
import EventsWebinars from './EventsWebinars.svelte';
import Pricing from './Pricing.svelte';
import Blog from './Blog.svelte';

export const templates = [
  { id: 'hero-feature', name: 'Hero + Feature Grid', component: HeroFeature },
  { id: 'case-study', name: 'Case Study', component: CaseStudy },
  { id: 'product-overview', name: 'Product Overview', component: ProductOverview },
  { id: 'creative-campaign', name: 'Creative Campaign', component: CreativeCampaign },
  { id: 'component-showcase', name: 'Component Library Showcase', component: ComponentShowcase },
  { id: 'interactive-demo', name: 'Interactive Demo', component: InteractiveDemo },
  { id: 'resource-center', name: 'Download/Resource Center', component: ResourceCenter },
  { id: 'events-webinars', name: 'Events and Webinars', component: EventsWebinars },
  { id: 'pricing', name: 'Pricing or Services Overview', component: Pricing },
  { id: 'blog', name: 'Blog/News Section', component: Blog }
];
