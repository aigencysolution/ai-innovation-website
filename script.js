      // Parallax stars effect
      window.addEventListener('scroll', () => {
        const stars = document.querySelector('.stars');
        if (stars) {
          const scrolled = window.pageYOffset;
          stars.style.transform = 'translateY(' + scrolled * 0.3 + 'px)';
        }
      });

      // Smooth scroll for navigation
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      // Add hover glow effect to cards
      const cards = document.querySelectorAll('.stat-card, .feature-item, .dual-card, .cta-feature, .adv-feature');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
        
