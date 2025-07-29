document.getElementById("zakatForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const amountInput = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  // أسعار تقريبية — حدثها لو حبيت
  const goldPrice = 4800;   // سعر جرام الذهب
  const silverPrice = 60;   // سعر جرام الفضة

  const nisabGold = 85 * goldPrice;
  const nisabSilver = 595 * silverPrice;

  let moneyValue = amountInput;

  // تحويل لو ذهب أو فضة
  if (type === "gold") {
    moneyValue = amountInput * goldPrice;
  } else if (type === "silver") {
    moneyValue = amountInput * silverPrice;
  }

  // احسب الزكاة
  const zakat = moneyValue * 0.025;

  // الزكاة المقابلة بجرامات الذهب والفضة
  const zakatGold = zakat / goldPrice;
  const zakatSilver = zakat / silverPrice;

  const resultHTML = `
    <p>✅ <strong>قيمة المال بعد التحويل:</strong> ${moneyValue.toFixed(2)} جنيه</p>
    <p>💰 <strong>الزكاة الواجبة (2.5%):</strong> ${zakat.toFixed(2)} جنيه</p>
    <p>🥇 <strong>تعادل:</strong> ${zakatGold.toFixed(2)} جرام ذهب</p>
    <p>🥈 <strong>تعادل:</strong> ${zakatSilver.toFixed(2)} جرام فضة</p>
    <hr>
   
  `;

  document.getElementById("result").innerHTML = resultHTML;
});
