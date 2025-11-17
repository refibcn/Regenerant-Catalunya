function setupCarousel() {
  const carouselTrack = document.querySelector(".carousel-track") as HTMLElement
  const carouselIndicators = document.querySelector(".carousel-indicators") as HTMLElement
  const carouselContainer = document.querySelector(".projects-carousel") as HTMLElement

  if (!carouselTrack || !carouselIndicators || !carouselContainer) {
    return // Elements not ready yet
  }

  // Projects data with condensed one-sentence summaries
  const projects = [
    // Miceli Social network projects
    {
      name: "Regeneració.XYZ",
      summary:
        "A creative agency crafting new narratives for regeneration through artistic expression.",
      network: "Miceli Social",
      image: "/static/projects/regeneracio-xyz.jpg",
    },
    {
      name: "Resilience Earth & Simbiosi Fluvial",
      summary:
        "Worker cooperative applying blockchain and AI systems to improve environmental data collection for the Fluvià River basin.",
      network: "Miceli Social",
      image: "/static/projects/resilience-earth.jpg",
      url: "https://resilience.earth/",
    },
    {
      name: "De Bat a Bat",
      summary:
        "Developing a regenerative model of community health that is holistic, participatory, and rooted in nature.",
      network: "Miceli Social",
      image: "/static/projects/de-bat-a-bat.jpg",
      url: "http://www.debatabat.org/",
    },
    {
      name: "Chapter#2",
      summary:
        "Bringing regenerative storytelling into schools, helping them recover their link with place and co-create artistic figures.",
      network: "Miceli Social",
      image: "/static/projects/chapter2.jpg",
      url: "https://chapter2.cat/",
    },
    {
      name: "Anigami",
      summary:
        "Advancing regenerative tourism models in Catalonia, combining Erasmus+ funding with training programs.",
      network: "Miceli Social",
      image: "/static/projects/anigami.jpg",
      url: "https://www.anigami.cat/",
    },
    {
      name: "Mixité",
      summary:
        "Designing new policies and strategies for rural housing, offering support services for municipalities and community groups.",
      network: "Miceli Social",
      image: "/static/projects/mixite.jpg",
      url: "https://www.mixite.cat/",
    },
    // Keras Buti network projects
    {
      name: "Laurel 31",
      summary:
        "A space for textile creation and production guided by principles of environmental sustainability and political thought.",
      network: "Keras Buti",
      image: "/static/projects/laurel-31.png",
      url: "https://www.instagram.com/laurel31_economiassilvestres/?hl=es",
    },
    {
      name: "La Marmita",
      summary:
        "Implementing a system for producing low-cost, healthy, and ecological meals using thermopol cooking technology.",
      network: "Keras Buti",
      image: "/static/projects/la-marmita.png",
    },
    {
      name: "Les Juntes",
      summary:
        "Cooperative housing project under a 'use-right' model, recovering housing from investment funds to guarantee housing sovereignty.",
      network: "Keras Buti",
      image: "/static/projects/les-juntes.png",
      url: "https://www.lesjuntes.coop/",
    },
    {
      name: "La Suculenta",
      summary:
        "Community dining initiative offering affordable meals prepared with ecological and locally sourced ingredients.",
      network: "Keras Buti",
      image: "/static/projects/la-suculenta.png",
      url: "https://www.instagram.com/suculentalh/?hl=es",
    },
    {
      name: "La Granja del Tilo",
      summary:
        "Worker cooperative running an organic egg farm in the Parc Agrari del Baix Llobregat, ensuring generational renewal in farming.",
      network: "Keras Buti",
      image: "/static/projects/la-granja-del-tilo.png",
    },
  ]

  // Clear existing content
  carouselTrack.innerHTML = ""
  carouselIndicators.innerHTML = ""

  let slidesPerView = 3 // Show 3 projects at a time on desktop
  let isPaused = false
  let scrollPosition = 0
  let animationFrameId: number | null = null
  const scrollSpeed = 0.5 // pixels per frame (adjust for speed)

  // Helper function to get slides per view based on screen size
  function getSlidesPerView(): number {
    const width = window.innerWidth
    if (width < 768) {
      return 1
    } else if (width < 1024) {
      return 2
    }
    return 3
  }

  // Create slides - duplicate for infinite loop
  function createSlides() {
    carouselTrack.innerHTML = ""

    // Create original slides
    projects.forEach((project) => {
      const slide = document.createElement("div")
      slide.className = "carousel-slide"
      const slideWidth = 100 / slidesPerView
      slide.style.minWidth = `${slideWidth}%`
      slide.style.padding = "0 0.5rem"

      // Create slug for image path
      const imageSlug =
        project.image ||
        `/static/projects/${project.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}.jpg`

      // Determine network tag color
      const networkColor =
        project.network === "Miceli Social"
          ? "var(--miceli-terracotta)"
          : project.network === "Keras Buti"
            ? "var(--fundicio-purple)"
            : "var(--green-dark)"

      slide.innerHTML = `
        <div class="carousel-card" style="border: 2px solid var(--green-dark); background: var(--light); height: 100%; transition: all .2s; display: flex; flex-direction: column; overflow: visible; position: relative; box-sizing: border-box;">
          <div style="position: relative; width: 100%; height: 180px; background: var(--green-highlight); overflow: hidden; flex-shrink: 0; margin: 0; padding: 0;">
            <img src="${imageSlug}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover; display: block; margin: 0; padding: 0;" onerror="this.style.display='none'; this.parentElement.style.background='var(--green-highlight)';">
            <div style="position: absolute; top: 0.5rem; left: 0.5rem;">
              <span style="background: ${networkColor}; color: var(--light); padding: 0.2rem 0.4rem; font-size: 0.65rem; font-weight: 600; display: inline-block;">${project.network}</span>
            </div>
          </div>
          <div style="padding: 0.6rem; flex-grow: 1; display: flex; flex-direction: column; box-sizing: border-box;">
            <h4 style="margin-top: 0; margin-bottom: 0.4rem; color: var(--darkgray); font-size: 0.95rem;">${project.name}</h4>
            <p style="color: var(--darkgray); font-size: 0.8rem; line-height: 1.35; flex-grow: 1; margin-bottom: 0.6rem;">${project.summary}</p>
            ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener" style="font-weight: 600; font-size: 0.75rem; color: var(--green-dark);">Learn more →</a>` : ""}
          </div>
        </div>
      `
      carouselTrack.appendChild(slide)
    })

    // Duplicate slides multiple times for seamless infinite loop (at least 3x for smooth scrolling)
    const originalSlides = Array.from(carouselTrack.children)
    for (let i = 0; i < 3; i++) {
      originalSlides.forEach((slide) => {
        const clone = slide.cloneNode(true) as HTMLElement
        carouselTrack.appendChild(clone)
      })
    }
  }

  // Create indicators
  function createIndicators() {
    carouselIndicators.innerHTML = ""
    projects.forEach((_, index) => {
      const indicator = document.createElement("button")
      indicator.className = "carousel-indicator"
      indicator.setAttribute("aria-label", `Go to slide ${index + 1}`)
      indicator.addEventListener("click", () => {
        pauseAutoScroll()
        // Calculate position to show this slide
        const slideWidth = carouselTrack.children[0]?.clientWidth || 0
        scrollPosition = index * slideWidth
        updateCarouselPosition()
        resumeAutoScrollAfterDelay()
      })
      carouselIndicators.appendChild(indicator)
    })
  }

  // Update carousel position
  function updateCarouselPosition() {
    const slideWidth = carouselTrack.children[0]?.clientWidth || 0
    if (slideWidth === 0) return

    const singleSetWidth = slideWidth * projects.length

    // Reset position seamlessly when reaching end of first set (before visible jump)
    // We reset when we've scrolled past one full set, jumping back to start invisibly
    if (scrollPosition >= singleSetWidth) {
      scrollPosition = scrollPosition - singleSetWidth
    }

    // Also handle negative scroll (for prev button)
    if (scrollPosition < 0) {
      scrollPosition = singleSetWidth + scrollPosition
    }

    // Use transform for smooth continuous movement
    carouselTrack.style.transform = `translateX(-${scrollPosition}px)`

    // Update indicators based on visible slides
    const visibleIndex = Math.floor(scrollPosition / slideWidth) % projects.length
    document.querySelectorAll(".carousel-indicator").forEach((indicator, index) => {
      const el = indicator as HTMLElement
      const isActive =
        index === visibleIndex ||
        (index === (visibleIndex + 1) % projects.length && slidesPerView > 1) ||
        (index === (visibleIndex + 2) % projects.length && slidesPerView > 2)
      el.style.background = isActive ? "rgba(33, 64, 51, 0.5)" : "transparent"
      el.style.borderColor = isActive ? "rgba(33, 64, 51, 0.5)" : "rgba(33, 64, 51, 0.3)"
    })
  }

  // Continuous scroll animation
  function animate() {
    if (!isPaused) {
      scrollPosition += scrollSpeed
      updateCarouselPosition()
    }
    animationFrameId = requestAnimationFrame(animate)
  }

  function startAutoScroll() {
    isPaused = false
    if (animationFrameId === null) {
      animate()
    }
  }

  function pauseAutoScroll() {
    isPaused = true
  }

  let resumeTimer: number | null = null
  function resumeAutoScrollAfterDelay() {
    if (resumeTimer !== null) {
      clearTimeout(resumeTimer)
    }
    resumeTimer = window.setTimeout(() => {
      startAutoScroll()
    }, 2000)
  }

  // Setup navigation buttons
  const nextBtn = document.querySelector(".carousel-btn-next") as HTMLElement
  const prevBtn = document.querySelector(".carousel-btn-prev") as HTMLElement

  if (nextBtn) {
    const handleNext = () => {
      pauseAutoScroll()
      const slideWidth = carouselTrack.children[0]?.clientWidth || 0
      scrollPosition += slideWidth
      updateCarouselPosition()
      resumeAutoScrollAfterDelay()
    }
    nextBtn.addEventListener("click", handleNext)
    if (typeof window.addCleanup === "function") {
      window.addCleanup(() => nextBtn.removeEventListener("click", handleNext))
    }
  }

  if (prevBtn) {
    const handlePrev = () => {
      pauseAutoScroll()
      const slideWidth = carouselTrack.children[0]?.clientWidth || 0
      if (slideWidth > 0) {
        scrollPosition -= slideWidth
        updateCarouselPosition()
      }
      resumeAutoScrollAfterDelay()
    }
    prevBtn.addEventListener("click", handlePrev)
    if (typeof window.addCleanup === "function") {
      window.addCleanup(() => prevBtn.removeEventListener("click", handlePrev))
    }
  }

  // Pause on hover
  const handleMouseEnter = () => {
    pauseAutoScroll()
  }

  const handleMouseLeave = () => {
    startAutoScroll()
  }

  carouselContainer.addEventListener("mouseenter", handleMouseEnter)
  carouselContainer.addEventListener("mouseleave", handleMouseLeave)
  if (typeof window.addCleanup === "function") {
    window.addCleanup(() => {
      carouselContainer.removeEventListener("mouseenter", handleMouseEnter)
      carouselContainer.removeEventListener("mouseleave", handleMouseLeave)
    })
  }

  // Responsive: adjust slides per view
  function handleResize() {
    slidesPerView = getSlidesPerView()
    const slideWidth = 100 / slidesPerView
    document.querySelectorAll(".carousel-slide").forEach((slide) => {
      const el = slide as HTMLElement
      el.style.minWidth = `${slideWidth}%`
    })
    updateCarouselPosition()
  }

  window.addEventListener("resize", handleResize)
  if (typeof window.addCleanup === "function") {
    window.addCleanup(() => window.removeEventListener("resize", handleResize))
  }

  // Touch/swipe support for mobile
  let touchStartX = 0
  let touchEndX = 0
  const carouselContainerEl = document.querySelector(".carousel-container") as HTMLElement

  if (carouselContainerEl) {
    const handleTouchStart = (e: TouchEvent) => {
      pauseAutoScroll()
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
      resumeAutoScrollAfterDelay()
    }

    carouselContainerEl.addEventListener("touchstart", handleTouchStart)
    carouselContainerEl.addEventListener("touchend", handleTouchEnd)
    if (typeof window.addCleanup === "function") {
      window.addCleanup(() => {
        carouselContainerEl.removeEventListener("touchstart", handleTouchStart)
        carouselContainerEl.removeEventListener("touchend", handleTouchEnd)
      })
    }
  }

  function handleSwipe() {
    const slideWidth = carouselTrack.children[0]?.clientWidth || 0
    if (slideWidth > 0) {
      if (touchEndX < touchStartX - 50) {
        scrollPosition += slideWidth
        updateCarouselPosition()
      }
      if (touchEndX > touchStartX + 50) {
        scrollPosition -= slideWidth
        updateCarouselPosition()
      }
    }
  }

  // Initialize
  slidesPerView = getSlidesPerView()
  createSlides()
  createIndicators()
  // Start immediately - use requestAnimationFrame to ensure DOM is ready
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      handleResize()
      startAutoScroll()
    })
  })

  // Cleanup on navigation
  if (typeof window.addCleanup === "function") {
    window.addCleanup(() => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
      if (resumeTimer !== null) {
        clearTimeout(resumeTimer)
      }
    })
  }
}

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupCarousel)
} else {
  setupCarousel()
}

document.addEventListener("nav", setupCarousel)
