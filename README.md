# file-last-modified-date-time README

Display the last modified date and time of the currently editing text file in the status bar.

## Configuration Options

| Option                                          | Default            | Description                        | Example              |
| ----------------------------------------------- | ------------------ | ---------------------------------- | -------------------- |
| file-last-modified-date-time.statusBarAlignment | right              | Position in status bar             | left                 |
| file-last-modified-date-time.statusBarPriority  | 100                | Priority of the info in status bar | 90                   |
| file-last-modified-date-time.label              | Last Modified      | Text to indicate last Date & time  | Последња измена      |
| file-last-modified-date-time.locale             | en                 | Date & time locale                 | sr-cyrl              |
| file-last-modified-date-time.dateTimeFormat     | MM/DD/YYYY h:m:s a | Format of the Date & Time          | D. M. YYYY [у] H.m.s |

## Custom date & time format

Custom date & time formats can be specified using the following format:

|                            | Token   | Output                                 |
| -------------------------- | ------- | -------------------------------------- |
| Month                      | `M`     | 1 2 ... 11 12                          |
|                            | `MM`    | 01 02 ... 11 12                        |
|                            | `MMM`   | Jan Feb ... Nov Dec                    |
|                            | `MMMM`  | January February ... November December |
| Quarter                    | `Q`     | 1 2 3 4                                |
| Day of Month               | `D`     | 1 2 ... 30 31                          |
|                            | `Do`    | 1st 2nd ... 30th 31st                  |
|                            | `DD`    | 01 02 ... 30 31                        |
| Day of Week                | `d`     | 0 1 ... 5 6                            |
|                            | `dd`    | Su Mo ... Fr Sa                        |
|                            | `ddd`   | Sun Mon ... Fri Sat                    |
|                            | `dddd`  | Sunday Monday ... Friday Saturday      |
| Year                       | `YY`    | 70 71 ... 29 30                        |
|                            | `YYYY`  | 1970 1971 ... 2029 2030                |
| AM/PM                      | `A`     | AM PM                                  |
|                            | `a`     | am pm                                  |
| Hour                       | `H`     | 0 1 ... 22 23                          |
|                            | `HH`    | 00 01 ... 22 23                        |
|                            | `h`     | 1 2 ... 11 12                          |
|                            | `hh`    | 01 02 ... 11 12                        |
| Minute                     | `m`     | 0 1 ... 58 59                          |
|                            | `mm`    | 00 01 ... 58 59                        |
| Second                     | `s`     | 0 1 ... 58 59                          |
|                            | `ss`    | 00 01 ... 58 59                        |
| Fractional Second          | `S`     | 0 1 ... 8 9                            |
|                            | `SS`    | 00 01 ... 98 99                        |
|                            | `SSS`   | 000 001 ... 998 999                    |
| Unix Timestamp             | `X`     | 1360013296                             |
| Unix Millisecond Timestamp | `x`     | 1360013296123                          |
| Timezone with delimiter    | `Z`     | +01:00                                 |
| Timezone w/o delimiter     | `ZZ`    | +0100                                  |
| Escape                     | `[...]` | Text between `[` and `]` is escaped    |

## Date & time locale

The locale can be one of:

* af - *Afrikaans*
* am - *Amharic*
* ar-dz - *Arabic (Algeria)*
* ar-iq - *Arabic (Iraq)*
* ar-kw - *Arabic (Kuwait)*
* ar-ly - *Arabic (Lybia)*
* ar-ma - *Arabic (Morocco)*
* ar-sa - *Arabic (Saudi Arabia)*
* ar-tn - *Arabic (Tunisia)*
* ar - *Arabic*
* az - *Azerbaijani*
* be - *Belarusian*
* bg - *Bulgarian*
* bi - *Bislama*
* bm - *Bambara*
* bn-bd - *Bengali (Bangladesh)*
* bn - *Bengali*
* bo - *Tibetan*
* br - *Breton*
* bs - *Bosnian*
* ca - *Catalan*
* cs - *Czech*
* cv - *Chuvash*
* cy - *Welsh*
* da - *Danish*
* de-at - *German (Austria)*
* de-ch - *German (Switzerland)*
* de - *German*
* dv - *Maldivian*
* el - *Greek*
* en-au - *English (Australia)*
* en-ca - *English (Canada)*
* en-gb - *English (United Kingdom)*
* en-ie - *English (Ireland)*
* en-il - *English (Israel)*
* en-in - *English (India)*
* en-nz - *English (New Zealand)*
* en-sg - *English (Singapore)*
* en-tt - *English (Trinidad & Tobago)*
* en - *English*
* eo - *Esperanto*
* es-do - *Spanish (Dominican Republic)*
* es-mx - *Spanish (Mexico)*
* es-pr - *Spanish (Puerto Rico)*
* es-us - *Spanish (United States)*
* es - *Spanish*
* et - *Estonian*
* eu - *Basque*
* fa - *Persian*
* fi - *Finnish*
* fo - *Faroese*
* fr-ca - *French (Canada)*
* fr-ch - *French (Switzerland)*
* fr - *French*
* fy - *Frisian*
* ga - *Irish or Irish Gaelic*
* gd - *Scottish Gaelic*
* gl - *Galician*
* gom-latn - *Konkani Latin script*
* gu - *Gujarati*
* he - *Hebrew*
* hi - *Hindi*
* hr - *Croatian*
* ht - *Haitian Creole (Haiti)*
* hu - *Hungarian*
* hy-am - *Armenian*
* id - *Indonesian*
* is - *Icelandic*
* it-ch - *Italian (Switzerland)*
* it - *Italian*
* ja - *Japanese*
* jv - *Javanese*
* ka - *Georgian*
* kk - *Kazakh*
* km - *Cambodian*
* kn - *Kannada*
* ko - *Korean*
* ku - *Kurdish*
* ky - *Kyrgyz*
* lb - *Luxembourgish*
* lo - *Lao*
* lt - *Lithuanian*
* lv - *Latvian*
* me - *Montenegrin*
* mi - *Maori*
* mk - *Macedonian*
* ml - *Malayalam*
* mn - *Mongolian*
* mr - *Marathi*
* ms-my - *Malay*
* ms - *Malay*
* mt - *Maltese (Malta)*
* my - *Burmese*
* nb - *Norwegian Bokmål*
* ne - *Nepalese*
* nl-be - *Dutch (Belgium)*
* nl - *Dutch*
* nn - *Nynorsk*
* oc-lnc - *Occitan, lengadocian dialecte*
* pa-in - *Punjabi (India)*
* pl - *Polish*
* pt-br - *Portuguese (Brazil)*
* pt - *Portuguese*
* rn - *Kirundi*
* ro - *Romanian*
* ru - *Russian*
* rw - *Kinyarwanda (Rwanda)*
* sd - *Sindhi*
* se - *Northern Sami*
* si - *Sinhalese*
* sk - *Slovak*
* sl - *Slovenian*
* sq - *Albanian*
* sr-cyrl - *Serbian Cyrillic*
* sr - *Serbian*
* ss - *siSwati*
* sv-fi - *Finland Swedish*
* sv - *Swedish*
* sw - *Swahili*
* ta - *Tamil*
* te - *Telugu*
* tet - *Tetun Dili (East Timor)*
* tg - *Tajik*
* th - *Thai*
* tk - *Turkmen*
* tl-ph - *Tagalog (Philippines)*
* tlh - *Klingon*
* tr - *Turkish*
* tzl - *Talossan*
* tzm-latn - *Central Atlas Tamazight Latin*
* tzm - *Central Atlas Tamazight*
* ug-cn - *Uyghur (China)*
* uk - *Ukrainian*
* ur - *Urdu*
* uz-latn - *Uzbek Latin*
* uz - *Uzbek*
* vi - *Vietnamese*
* yo - *Yoruba Nigeria*
* zh-cn - *Chinese (China)*
* zh-hk - *Chinese (Hong Kong)*
* zh-tw - *Chinese (Taiwan)*
* zh - *Chinese*

## Extension Settings

Default configuration is:

* `file-last-modified-date-time.statusBarAlignment`: `right`
* `file-last-modified-date-time.statusBarPriority`: `100`
* `file-last-modified-date-time.prefix`: `Last Modified`
* `file-last-modified-date-time.locale`: `en`
* `file-last-modified-date-time.dateTimeFormat`: `MM/DD/YYYY h:m:s a`

## Release Notes

### 1.0.0

Initial release
