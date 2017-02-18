$(`.loc`).hover(
  function() {
    $(this).html(`<strong>Location:</strong> Your house?`)
  },
  function() {
    $(this).html(`<strong>Location:</strong> Treehouse Adoption Center`)
  });

$(`#add-pet`).on(`click`, () => {
  // grab info from the form
  const $name = $(`#pet-name`).val();
  const $species = $(`#pet-species`).val();
  const $notes = $(`#pet-notes`).val();

  const $newPet = $(
     '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name +
     '</p><p><strong>Species:</strong> ' + $species +
     '</p><p><strong>Notes:</strong> ' + $notes +
     '</p><span class="close">&times;</span></div></section>'
  );

  $(`#posted-pets`).append($newPet)

  // make the x close the window it appears in. 
  $(`.close`).on(`click`, function() {
    $(this).parent().remove()
  })

  // reset form fields

  $name.val(``);
  $species.val(``);
  $notes.val()``;
})

// images fade in

$(`img`).css(`display`, `none`).fadeIn(1600);

$(`.card`).on(`click`, function() {
  $(this).toggleClass(`selected`);
})
