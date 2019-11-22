# Memory Card Game

## 安裝
```
npm i @re/scratchcard-game
```

## Example
```typescript
import { c, EventEnum } from '@re/scratchcard-game';

const scratchcardGame = createScratchcardGame({
  el: '#app',
  contentHtml: `
    <img src="https://www.myre.life/images/newIndex/img-welcomeLin.png" />
  `,
  backImgSrc: './images/img-scratch-top.png',
});

scratchcardGame.addEventListener(EventEnum.Scratch, () => {
  if (scratchcardGame.scratchedPercentage() > 70) {
    finish();
  }
});


scratchcardGame.addEventListener(EventEnum.Finish, () => {
  
});

```

##  Config
```javascript
const config = {
  el: '#app', // 塞入刮刮樂 selector
  contentHtml: '', // 刮開的內容 html
  backImgSrc: '', // 刮刮卡的圖片
  lineWidth?: 40, // 刮開的線條粗細 px default. 40
}

const scratchcardGame = createScratchcardGame(config);
```

## Method 
| 名稱 | 參數 | 說明 | 回傳 |
|---|---|---|---|
| addEventListener | type: `string`, handler: `Function` | 註冊監聽事件 | |
| removeEventListener | type: `string`, handler: `Function` | 刪除監聽事件 | |
| scratchedPercentage | type: `number` | 現在已經刮開幾%了(0~100) | `number` |
| reset | | 重置刮刮卡 | |
| finish | | 結束遊戲 | |
| supportsCanvas | | 是否支援Canvas | `boolean` |

## Event
| 事件Type | 觸發時機 | 回調參數 | 
|---|---|---|
| `init` | 刮刮樂初始化完成 |  |
| `imageLoaded` | 刮刮卡的圖片載入完成 |  |
| `scratch` | 刮卡時 |  |
| `finish` | 刮刮樂結束 |  |

```typescript
enum EventEnum {
  Init = 'init',
  ImageLoaded = 'imageLoaded',
  Scratch = 'scratch',
  Finish = 'finish',
}
```