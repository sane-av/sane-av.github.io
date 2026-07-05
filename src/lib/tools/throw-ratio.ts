export function initThrowRatioCalculator() {
  const ratioIn = document.getElementById('tr-ratio') as HTMLInputElement;
  const distIn  = document.getElementById('tr-dist')  as HTMLInputElement;
  const widthIn = document.getElementById('tr-width') as HTMLInputElement;
  const calcBtn = document.getElementById('tr-calc')  as HTMLButtonElement;
  const resultEl    = document.getElementById('tr-result')!;
  const resultValue = document.getElementById('tr-result-value')!;
  const resultSub   = document.getElementById('tr-result-sub')!;
  const errorEl     = document.getElementById('tr-error')!;

  function val(el: HTMLInputElement) {
    const n = parseFloat(el.value);
    return isNaN(n) || n <= 0 ? null : n;
  }

  calcBtn.addEventListener('click', () => {
    errorEl.classList.add('hidden');
    resultEl.classList.add('hidden');

    const tr = val(ratioIn);
    const d  = val(distIn);
    const w  = val(widthIn);
    const enoughInputs = [tr, d, w].filter((v) => v !== null).length >= 2;

    if (!enoughInputs) {
      errorEl.textContent = 'Please enter at least two values.';
      errorEl.classList.remove('hidden');
      return;
    }

    let solvedLabel = '';
    let solvedValue = 0;
    let extra = '';

    if (tr === null) {
      // Solve for TR
      solvedValue = d! / w!;
      solvedLabel = 'Throw Ratio';
      ratioIn.value = solvedValue.toFixed(3);
      extra = `${d} m distance ÷ ${w} m width`;
    } else if (d === null) {
      // Solve for distance
      solvedValue = tr * w!;
      solvedLabel = 'Throw Distance';
      distIn.value = solvedValue.toFixed(3);
      extra = `TR ${tr} × ${w} m wide = ${solvedValue.toFixed(2)} m`;
    } else {
      // Solve for width
      solvedValue = d / tr;
      solvedLabel = 'Screen Width';
      widthIn.value = solvedValue.toFixed(3);
      extra = `${d} m ÷ TR ${tr} = ${solvedValue.toFixed(2)} m wide`;
    }

    resultValue.textContent = `${solvedLabel}: ${solvedValue.toFixed(3)}${solvedLabel !== 'Throw Ratio' ? ' m' : ''}`;
    resultSub.textContent = extra;
    resultEl.classList.remove('hidden');
  });
}
