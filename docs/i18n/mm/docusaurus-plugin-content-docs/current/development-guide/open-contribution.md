---
sidebar_position: 1
---

# Open Contribution

Open contribution သည်အက္ခရာအဖွဲ့၏ source available အမျိုးအစားပရောဂျက်များ၌ ဝိုင်းဝင်းကူညီမှု ပံပိုးမူကိုဆိုလိုသည်။ 
ဤနေရာတွင့် အက္ခရာအဖွဲ့စီမံသော ပရောဂျက်များအားလုံးပါဝင်ပါသည်။

များသောအားဖြင့် open contributor တို့၏အလုပ်သည် ကိုယ်ပိုင်ဆုံးဖြတ်ပိုင်ခွင့်ဖြင့် သုံးသပ်၍လုပ်သော အလုပ်တို့ဖြစ်သည် (voluntary)။ ဥပမာအားဖြင့် ပရောဂျက်တစ်ခု၌ performance အပိုင်း လိုအပ်နေခြင်းကိုတွေ့ရှိ၍ ပြုပြင်မှုများထည့်ခြင်း၊ မလိုအပ်ဘဲ အပိုဖြစ်နေသောကုဒ်များကို ပြင်ရေးခြင်း၊ bug များစစ်စေးဖယ်ရှားခြင်း။

သို့သော တစ်ခါတစ်လေတွင် ပရောဂျက်တစ်ခု၏လိုအပ်ချက်များကို ထုတ်ဖော်ရေးသားထားသောစရင်းရှိသည်၊ contributor တစ်ယောက် ပေါ်မှုတည်၍ သည်လိုအပ်ချက်များကို ဖြည့်စည်းပေးလို့လဲသည်။ 

## Project Maintainer

ပရောဂျက်တစ်ခုရှိ လုပ်ဆောင်မှုများအားလုံးကို ကြီးကြပ်သော ထိန်းသိမ်းသူ တစ်ယောက်ရှိသည်။ ထိုသူသည် open contributor တစ်ယောက်လဲဖြစ်နိုင်သည်။ ၎၎်းမှာ pull requests၊ merging နှင့်အခြား ပရောဂျက်ဆိုင်ရာ တာဝန်များနှင့်ပက်သက်ပြီး ပရောဂျက် ဦးတည်ချက်တစ်ခုလုံး ကိုလည်း ထိန်းသိမ်းဆောင်ရွက်သူဖြစ်သည်။

## Create a docs version

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
