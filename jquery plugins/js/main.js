$(`.animsition`).animsition({
  inClass: `fade-in-right-lg`,
  outClass: `fade-out-right-lg`,
  linkElement: `header a`,
  inDuration: 1000,
  outDuration: 500
});

$(`.header`).sticky({
  getWidthFrom: `.container`,
  responsiveWidth: true
})

$(`.work`).sticky({
  topSpacing:64,
  getWidthFrom: `.container`,
  responsiveWidth: true
})

$(`.header`).on(`sticky-start`, function() {
  $(`.description`).html(`We build <strong>great</strong> apps`)
}).on(`sticky-end`, function() {
  $(`.description`).html(`We build apps`)
})

$(`.work`).on(`sticky-start`, function() {
  $(this).html(`Want us to work on your project? <a href="mailto:stephen@stephenwright.co.uk">Email us</a>`)
}).on(`sticky-end`, function() {
  $(this).html(`Want us to work on your project?`)
})

// add another sticky element to work html, sticking want us to work on the project, then modifying html to add email us link
// add topspacing to make sure it's sat below the heading
