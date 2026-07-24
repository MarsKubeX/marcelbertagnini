import { nextTick } from 'vue'
import type { Router, RouteLocationNormalizedLoaded } from 'vue-router'

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export async function goToSection(
  router: Router,
  route: RouteLocationNormalizedLoaded,
  id: string
) {
  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
  }
  scrollToSection(id)
}
