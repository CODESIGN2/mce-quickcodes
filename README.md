# mce-quickcodes
TinyMCE 4.x plugin to transform quickcodes {code} into html &amp; back

> Needs to be renamed plugin.min.js for use in TinyMCE environment @ CD2

## Description

```liquid
{code}
```

gets replaced with

```html
<div class="cd2-mce-view cd2-quick-code" data-sc="{btoaofquickcode}"><div class="inner" contenteditable="false">&nbsp;</div></div>
```

On ~~Clipboard copy~~ *(Deprecated for now)* or getContent() Event, returns original text including quickcode, so that updated details can be presented

On Paste, converts all valid quickcodes into html element (with plan to load view data via third-party mechanism)

## Intent
This is a poor-mans version of WordPress ShortCode Views for now, but the idea will be to produce a platform agnostic TinyMCE view render to make editing experience more visual; without being so opinionated as WP team have been. 

Comments, PR's, Issues welcome!

## Warranty etc
The author accepts no liability, and offers no warranty, or expectation of service or support for this code, any effects it may have. If you run it, you do so at your own risk. Help us to make it better by contributing by telling us of problems you have, suggestion, submitting pull requests with code changes. CD2 is a small business, we are not Microsoft, please bear this in mind with response times etc. Premium support and integration advice can be provided, go to [our website](https://www.codesign2.co.uk), and contact us.
