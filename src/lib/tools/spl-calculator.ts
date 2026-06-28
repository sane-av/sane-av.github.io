// 0 dBu = 0.7746 V (referenced to 1 mW into 600 Ω)
const DBU_REF = 0.7746;
const DBV_REF = 1.0;

function vToDBu(v: number) { return 20 * Math.log10(v / DBU_REF); }
function vToDBv(v: number) { return 20 * Math.log10(v / DBV_REF); }
function dbuToV(d: number) { return DBU_REF * Math.pow(10, d / 20); }
function dbvToV(d: number) { return DBV_REF * Math.pow(10, d / 20); }

function fmt(n: number, decimals = 3) { return n.toFixed(decimals); }

export function initSplCalculator() {
  const fields = {
    dbu: document.getElementById('inp-dbu') as HTMLInputElement,
    dbv: document.getElementById('inp-dbv') as HTMLInputElement,
    v:   document.getElementById('inp-v')   as HTMLInputElement,
    mv:  document.getElementById('inp-mv')  as HTMLInputElement,
  };
  const result = document.getElementById('level-result')!;
  const resultText = document.getElementById('level-result-text')!;

  let updating = false;

  function updateFrom(source: keyof typeof fields) {
    if (updating) return;
    updating = true;
    const inputValue = parseFloat(fields[source].value);
    if (isNaN(inputValue)) { updating = false; return; }

    let voltage: number;
    if (source === 'dbu')  voltage = dbuToV(inputValue);
    else if (source === 'dbv') voltage = dbvToV(inputValue);
    else if (source === 'mv')  voltage = inputValue / 1000;
    else voltage = inputValue;

    fields.dbu.value = fmt(vToDBu(voltage));
    fields.dbv.value = fmt(vToDBv(voltage));
    fields.v.value   = fmt(voltage);
    fields.mv.value  = fmt(voltage * 1000, 2);

    result.classList.remove('hidden');
    resultText.innerHTML = '';
    const summary = document.createElement('span');
    summary.className = 'result-value';
    summary.textContent = `${fmt(vToDBu(voltage), 2)} dBu`;
    resultText.appendChild(summary);
    resultText.appendChild(document.createTextNode(` / ${fmt(vToDBv(voltage), 2)} dBV / ${fmt(voltage, 4)} V RMS`));
    updating = false;
  }

  fields.dbu.addEventListener('input', () => updateFrom('dbu'));
  fields.dbv.addEventListener('input', () => updateFrom('dbv'));
  fields.v.addEventListener('input',   () => updateFrom('v'));
  fields.mv.addEventListener('input',  () => updateFrom('mv'));

  // Ratio calculator
  const rv1 = document.getElementById('ratio-v1') as HTMLInputElement;
  const rv2 = document.getElementById('ratio-v2') as HTMLInputElement;
  const ratioResult = document.getElementById('ratio-result')!;
  const ratioText = document.getElementById('ratio-result-text')!;

  function calcRatio() {
    const v1 = parseFloat(rv1.value);
    const v2 = parseFloat(rv2.value);
    if (!isNaN(v1) && !isNaN(v2) && v1 > 0 && v2 > 0) {
      const diff = 20 * Math.log10(v1 / v2);
      ratioResult.classList.remove('hidden');
      ratioText.textContent = `${diff >= 0 ? '+' : ''}${fmt(diff, 2)} dB`;
    }
  }

  rv1.addEventListener('input', calcRatio);
  rv2.addEventListener('input', calcRatio);
}
