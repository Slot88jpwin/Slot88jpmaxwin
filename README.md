# Slot Gambling Package

Paket Python sederhana untuk mensimulasikan permainan slot machine. Cocok untuk pembelajaran, simulasi, atau pengembangan dasar game slot.

## Fitur

- Simulasi spin slot 3 reel
- Simbol slot dapat dikustomisasi
- Cek kemenangan otomatis (3 simbol sama = menang)
- Mudah diintegrasikan ke aplikasi lain

## Instalasi

Clone repo, lalu install dengan pip (opsional jika ingin jadi package):

```bash
git clone https://github.com/username/slot_gambling.git
cd slot_gambling
pip install .
```

## Cara Penggunaan

```python
from slot_gambling import SlotMachine

slot = SlotMachine()
result = slot.spin()
print("Hasil:", result)

if slot.check_win(result):
    print("Selamat, Anda menang!")
else:
    print("Coba lagi.")
```

## Struktur File

```
slot_gambling/
├── slot.py           # Kode utama slot machine
├── __init__.py       # Inisialisasi package
└── setup.py          # (Opsional) File setup untuk instalasi package
```

## Contoh Output

```
Hasil: ['🍒', '🍒', '🍒']
Selamat, Anda menang!
```

## Lisensi

MIT License. Hanya untuk edukasi/simulasi, **tidak untuk perjudian ilegal**.

---

> **Catatan:**  
> Untuk aplikasi nyata, perhatikan aspek legal, keamanan, dan fairness (RNG audit).
