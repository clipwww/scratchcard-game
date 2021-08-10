# Scratchcard Game

## Example
```typescript
import { createScratchcardGame, EventEnum } from '@re/scratchcard-game';

const scratchcardGame = createScratchcardGame({
  el: '#app',
  contentHtml: `
    <img src="{{ image }}" />
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
  el: '#app', // 刮刮樂內容 selector
  backImgSrc: '', // 刮刮卡的圖片
  lineWidth?: 40, // 刮開的線條粗細 px default. 40
  hideDuration?: 400, // 刮刮樂結束時卡面消失的持續時間 ms default. 400
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
| `destroy` | 刪除 canvas & 事件監聽 |  |

```typescript
enum EventEnum {
  Init = 'init',
  ImageLoaded = 'imageLoaded',
  Scratch = 'scratch',
  Finish = 'finish',
}
```