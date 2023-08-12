# MaloneGen

## Rozetler
![GitHub last commit](https://img.shields.io/github/last-commit/blazsmaster/discord-gen-bot?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/blazsmaster/discord-gen-bot?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/blazsmaster/discord-gen-bot?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/blazsmaster/discord-gen-bot?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/blazsmaster/discord-gen-bot?style=for-the-badge)
![GitHub watchers](https://img.shields.io/github/watchers/blazsmaster/discord-gen-bot?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/blazsmaster/discord-gen-bot?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/blazsmaster/discord-gen-bot/discord.js?style=for-the-badge)

## Yükleme
Tüm bağımlılıkları yükle:
```
$ npm install
```

### Yapılandırma
Botu başlatmadan önce `config.json` dosyasını doldurman gerek.

#### Orjinal
```json
{
    "token": "",
    "prefix": "gen!",
    "genChannel": "",
    "genCooldown": "1000",
    "color": {
        "green": "0x57F287",
        "yellow": "0xFEE75C",
        "red": "0xED4245",
        "default": "0x5865F2"
    },
    "command": {
        "notfound_message": true,
        "error_message": true
    }
}
```
- `token`: Discord botunun tokeni
- `prefix`: Botun komut prefix'i *(örnek: !yardım | ?yardım | gen!yardım)*
- `genChannel`: gen!generate komutunu kullanıcağın kanalın id'si
- `genCooldown`: `Generate` komutunun çalıştırmak için bekliyeceğin süre * (milisaniye kullanın)*
- `notfound_message`: bir prefix denedin ancak mevcut değilse kanala bir mesaj gönderir
- `error_message`: Bir hata oluştuysa ve bu ayar "true" ise kanala bir mesaj gönderir.

`Yeşil`, `sarı`, `kırmızı` ve `varsayılan` renkleri başka bir renge değiştirebilirsiniz.

---

## Nasıl çalışır?

### Hesap / veri ekleme
'Ekle' komutuyla bir hesap veya veri ekleyin. Veri parametresindeki boşluk karakteri yazmayı yanlış yapar.
- Örnek: 'example_service abcd ekle`
- Yanlış örnek: 'example_service abcd ekle' ~~'efg hijk' ~~ <-- son 2 argüman saklanmaz

---

### Hesap / veri oluşturma
`Oluştur` komutunu kullanarak bota hesap ekleyebilirsiniz.
- Örnek: 'example_service oluştur`

---

### Hizmet oluşturma
`Oluşur` komutuyla bir hizmet oluşturun.
- Örnek: 'oluşur örneği_hizmet`

### Servis stokunu kontrol edin
Stok klasörünün içeriğini kontrol edin.
- Örnek: 'stok`

### Komut listesini kontrol et
Bot komutlarını listeleyin.
- Örnek: 'yardım`
