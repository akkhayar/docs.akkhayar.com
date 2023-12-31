## docs.akkhayar.com

[Docusaurus 2](https://docusaurus.io/) ဖြင့်တည်ဆောက်ထားသည်။

## Quickstart

pnpm ဖြင့် dependencies များကိုသွင်းပါ။

```bash
pnpm i
```

Server စလို့ရပါပြီ။

```bash
pnpm start
```

### Content Writing

အကြောင်းအရာများကို မြန်မာဘာသာ နှင့် English ဘာသာနှစ်ခုဖြင့် ရေးသားရမည်။ English ဘာသာဖြင့်ရေးသားရန် [`/docs`](./docs) ကိုကြည့်ပါ။ မြန်မာဘာသာဖြင့်ရေးသားရန် [`i18n/mm/docusaurus-plugin-content-docs/current`](./i18n/mm/docusaurus-plugin-content-docs/current) ကိုကြည့်ပါ။

> [!NOTE]
>
> မြန်မာဘာသာဖြင့် ရေးသားထားသော အကြောင်းအရာများကို ကိုစမ်းလိုလျှင် ပုံမှန်နည်းဖြင့် စလို့မရပါ။ အောက်ပါ command အတိုင်းသာစပါ။
> ```
> pnpm run start --locale mm
> ```

## Customizing the website

Docusaurus ၏[လမ်းညွှန်](https://docusaurus.io/docs/swizzling)ကိုဖတ်ပါ။
