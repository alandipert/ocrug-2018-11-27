function blinkify($el) {
  if (!$el.data('blinking')) {
    $el.data('blinking', true);
    setInterval(() => {
      $el.toggle();
    }, parseInt($el.data('interval')))
  }
}

$(document).ready(e => {
  $("span.blink").each((i, el) => blinkify($(el)))
});

class BlinkBinding extends Shiny.OutputBinding {
  find(scope) {
    return $(scope).find(".blink");
  }
  renderValue(el, data) {
    $(el).text(data)
  }
}

Shiny.outputBindings.register(new BlinkBinding());