function refFreqForCable(value: string): number {
  // Returns reference frequency in MHz
  if (value === '22.0' || value === '19.0') return 100;
  if (value === '0.5') return 0.02;
  return 1000;
}

export function initCableLossCalculator() {
  const cableSelect = document.getElementById('cl-cable') as HTMLSelectElement;
  const lengthIn = document.getElementById('cl-length') as HTMLInputElement;
  const unitSelect = document.getElementById('cl-unit') as HTMLSelectElement;
  const freqIn = document.getElementById('cl-freq') as HTMLInputElement;
  const freqUnitSelect = document.getElementById('cl-freq-unit') as HTMLSelectElement;
  const calcBtn = document.getElementById('cl-calc') as HTMLButtonElement;
  const resultEl = document.getElementById('cl-result')!;
  const resultValue = document.getElementById('cl-result-value')!;
  const resultSub = document.getElementById('cl-result-sub')!;
  const errorEl = document.getElementById('cl-error')!;

  calcBtn.addEventListener('click', () => {
    errorEl.classList.add('hidden');
    resultEl.classList.add('hidden');

    const lossPer100mAtRef = parseFloat(cableSelect.value);
    const length = parseFloat(lengthIn.value);
    const freq = parseFloat(freqIn.value);

    if (isNaN(length) || length <= 0 || isNaN(freq) || freq <= 0) {
      errorEl.textContent = 'Please enter a valid length and frequency.';
      errorEl.classList.remove('hidden');
      return;
    }

    const lengthMeters = unitSelect.value === 'ft' ? length * 0.3048 : length;
    const freqMHz = freqUnitSelect.value === 'GHz' ? freq * 1000 : freqUnitSelect.value === 'kHz' ? freq / 1000 : freq;
    const refFreqMHz = refFreqForCable(cableSelect.value);

    const lossPerMeterAtRef = lossPer100mAtRef / 100;
    const scaling = Math.sqrt(freqMHz / refFreqMHz);
    const totalLoss = lossPerMeterAtRef * lengthMeters * scaling;

    const lengthDisplay = unitSelect.value === 'ft' ? `${length} ft (${lengthMeters.toFixed(1)} m)` : `${lengthMeters.toFixed(1)} m`;
    const remaining = Math.pow(10, -totalLoss / 20) * 100;

    resultValue.textContent = `${totalLoss.toFixed(2)} dB`;
    resultSub.textContent = `${cableSelect.options[cableSelect.selectedIndex].text.split('(')[0].trim()}, ${lengthDisplay} at ${freqMHz >= 1000 ? (freqMHz / 1000).toFixed(2) + ' GHz' : freqMHz.toFixed(2) + ' MHz'} - approximately ${remaining.toFixed(1)}% of signal remains.`;
    resultEl.classList.remove('hidden');
  });
}
