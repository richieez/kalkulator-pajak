let income;
let pengurangan;
let tipeKategori;

function copyData(sourceId, targetId) {
  var data = Number(document.getElementById(sourceId).value);
  document.getElementById(targetId).innerHTML = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(data);
}

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

document.querySelector(".hitung").addEventListener("click", function () {
  income = Number(document.querySelector(".penghasilan").value);

  tipeKategori = document.getElementById("pilih-kategori").value;

  if (tipeKategori == 1) {
    pengurangan = 54000000;
  } else if (tipeKategori == 2) {
    pengurangan = 58500000;
  } else if (tipeKategori == 3) {
    pengurangan = 63000000;
  } else if (tipeKategori == 4) {
    pengurangan = 67500000;
  } else if (tipeKategori == 5) {
    pengurangan = 58500000;
  } else if (tipeKategori == 6) {
    pengurangan = 63000000;
  } else if (tipeKategori == 7) {
    pengurangan = 67500000;
  } else if (tipeKategori == 8) {
    pengurangan = 72000000;
  } else if (tipeKategori == 9) {
    pengurangan = 112500000;
  } else if (tipeKategori == 10) {
    pengurangan = 117000000;
  } else if (tipeKategori == 11) {
    pengurangan = 121500000;
  } else if (tipeKategori == 12) {
    pengurangan = 126000000;
  }

  if (income == 0) {
    document.querySelector(".hasil-pajak-tahunan").textContent =
      "Masukkan penghasilan perbulan terlebih dahulu!";
    document.querySelector(".hasil-pajak-bulanan").textContent =
      "Masukkan penghasilan perbulan terlebih dahulu!";
  } else {
    income *= 12;
    income -= pengurangan;

    if (income <= 50000000) {
      income *= 0.05;
      document.querySelector(".hasil-pajak-tahunan").textContent = rupiah(
        Math.trunc(income)
      );
      document.querySelector(".hasil-pajak-bulanan").textContent = rupiah(
        Math.trunc(income / 12)
      );
    } else if (income > 50000000 && income <= 250000000) {
      income -= 50000000;
      income *= 0.15;

      income += 2500000;

      document.querySelector(".hasil-pajak-tahunan").textContent = rupiah(
        Math.trunc(income)
      );
      document.querySelector(".hasil-pajak-bulanan").textContent = rupiah(
        Math.trunc(income / 12)
      );
    } else if (income > 250000000 && income <= 500000000) {
      income -= 250000000;
      income * 0.25;

      income += 32500000;

      document.querySelector(".hasil-pajak-tahunan").textContent = rupiah(
        Math.trunc(income)
      );
      document.querySelector(".hasil-pajak-bulanan").textContent = rupiah(
        Math.trunc(income / 12)
      );
    } else {
      income -= 500000000;
      income *= 0.3;

      income += 95000000;

      document.querySelector(".hasil-pajak-tahunan").textContent = rupiah(
        Math.trunc(income)
      );
      document.querySelector(".hasil-pajak-bulanan").textContent = rupiah(
        Math.trunc(income / 12)
      );
    }
  }
});
