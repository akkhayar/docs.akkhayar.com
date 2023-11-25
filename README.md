# akkhayar.com

သည်ပရောဂျက်တွင် [`pnpm`](https://pnpm.io/) ကိုအသုံးပြုထားသည်။ မရှိသေးလျှင် [သည်အညွှန်း](https://pnpm.io/installation) ကိုဖတ်ပြီးထည့်သွင်းပါ။
 `npm` သို့ `yarn` သုံးလို့မရပါ။

## Quickstart

Dependencies များကို ထည့်သွင်းပါ။

```bash
pnpm i
```

Server စလို့ရပါပြီ။

```bash
pnpm run dev
```

```
> Note

မြန်မာဘာသာဖြင့် ရေးသားထားသော website ကိုစမ်းလျှင် ပုံမှန်နည်းဖြင့် စလို့မရပါ။ အောက်ပါ command ကိုသုံး၍စပါ။

pnpm run start --locale mm
```

### Content Writing

အကြောင်းအရာများကို မြန်မာဘာသာ နှင့် English ဘာသာနှစ်ခုဖြင့် ရေးသားရမည်။ English ဘာသာဖြင့်ရေးသားရန် [`/docs`](./docs) ကိုကြည့်ပါ။ မြန်မာဘာသာဖြင့်ရေးသားရန် [`website/i18n/mm/docusaurus-plugin-content-docs/current`](./website/i18n/mm/docusaurus-plugin-content-docs/current) ကိုကြည့်ပါ။


## Customizing the website

Docusaurus ၏[သည်လမ်းညွှန်](https://docusaurus.io/docs/swizzling)ကိုအရင်ဖတ်ပါ။