`use strict`;

{
  //似た文字リスト
  const nitamoji1 = 'b♭オ才チ千テ〒メ×井#宮官日曰鳥烏土士ミ三ハ八ンソ';

  const nitamoji2 = 'b♭オ才チ千テ〒メ×井#宮官日曰鳥烏土士ミ三ハ八ンソlIｌIエ工カ力タ夕ト卜ニ二ヒ匕へヘロ口cϲYҮノ⼃';

  const nitamoji3 = 'lIｌIエ工カ力タ夕ト卜ニ二ヒ匕へヘロ口cϲYҮノ⼃';

  const nitamoji4 = 'lIｌIエ工カ力タ夕ト卜ニ二ヒ匕へヘロ口cϲYҮノ⼃○〇AΑBΒCСEΕHΗIΙKΚMΜNΝOΟPΡTΤXХZΖ乙⼄二⼆人⼈入⼊八⼋刀⼑力⼒ヒ⼔十⼗ト⼘ム⼛又⼜ロ⼝口⼞土⼟士⼠夕⼣大⼤女⼥子⼦寸⼨小⼩山⼭工⼯己⼰巾⼱干⼲弓⼸心⼼戸⼾手⼿支⽀文⽂斗⽃斤⽄方⽅日⽇曰⽈月⽉木⽊欠⽋止⽌比⽐毛⽑氏⽒水⽔火⽕爪⽖父⽗片⽚牙⽛牛⽜犬⽝玄⽞玉⽟瓜⽠瓦⽡甘⽢生⽣用⽤田⽥疋⽦白⽩皮⽪皿⽫目⽬矛⽭矢⽮石⽯示⽰穴⽳立⽴竹⽵米⽶糸⽷缶⽸羊⽺羽⽻老⽼而⽽耳⽿肉⾁臣⾂自⾃至⾄臼⾅舌⾆舛⾇舟⾈艮⾉色⾊艸⾋虫⾍血⾎行⾏衣⾐見⾒角⾓言⾔谷⾕豆⾖貝⾙赤⾚走⾛足⾜身⾝車⾞辛⾟辰⾠邑⾢酉⾣采⾤里⾥金⾦長⾧門⾨阜⾩雨⾬非⾮面⾯革⾰音⾳頁⾴風⾵飛⾶食⾷首⾸香⾹馬⾺骨⾻高⾼鬼⿁魚⿂鳥⿃鹵⿄鹿⿅麥⿆麻⿇黍⿉黒⿊鼎⿍鼓⿎鼠⿏鼻⿐齊⿑龍⿓龜⿔イ⺅巳⺒母⺟民⺠虎⻁西⻄青⻘麦⻨黄⻩斉⻫歯⻭竜⻯亀⻲';

  document.getElementById('input').focus();

  // document.querySelector('#checkButton').addEventListener('click', () => { changeCharactor() });

  document.querySelector('#radiobutton').addEventListener('change', () => { changeCharactor() });

  document.querySelector('#input').addEventListener('keyup', () => { changeCharactor() });

  function changeCharactor() {

      const inputText = document.querySelector('#input').value;
      const outputText = document.querySelector('#output');
      outputText.textContent = "";

      let elements = document.getElementsByName('redhyouji');
      let redValue = '';
      for (let i = 0; i < elements.length; i++) {
        if (elements.item(i).checked) {
          redValue = elements.item(i).value;
        }

      }

      let elements2 = document.getElementsByName('mojilevel');
      let mojiValue = '';
      for (let i = 0; i < elements2.length; i++) {
        if (elements2.item(i).checked) {
          mojiValue = elements2.item(i).value;
        }
        // console.log("mojilevel", mojiValue);
      }

      let nitamoji = "";

      switch (mojiValue) {
        case 'level1':
          nitamoji = nitamoji1;
          break;

        case 'level2':
          nitamoji = nitamoji2;
          break;

        case 'level3':
          nitamoji = nitamoji3;
          break;

        case 'level4':
          nitamoji = nitamoji4;
          break;

      }


      for (let i = 0; i < inputText.length; i++) {
        let c = inputText.substring(i, i + 1);
        let d = inputText.substring(i + 1, i + 2);
        let klass = [], year;

        if (c === "\n") {
          if (d !== "\n") {
            outputText.insertAdjacentHTML('beforeend', '<br>');
          }
          continue;
        }

        if (nitamoji.indexOf(c) % 2 === 0) {
          let niteru = nitamoji.charAt(nitamoji.indexOf(c) + 1);
          c = niteru;
          // hyojunkaText = hyojunkaText + c;

          if (redValue === "redder") {
            klass.push("red");
          }

        }

        else if (nitamoji.indexOf(c) % 2 === 1) {
          let niteru = nitamoji.charAt(nitamoji.indexOf(c) - 1);
          c = niteru;

          if (redValue === "redder") {
            klass.push("red");
          }

        }



        let spanElement = document.createElement("span");
        spanElement.textContent = c;
        let classList = klass.join(" ");
        if (classList) {
          spanElement.className = classList;
        }
        outputText.appendChild(spanElement);

      };

    // });

  }

  // クリアボタン押下の処理
  document.querySelector('#clearButton').addEventListener('click', () => {
    const outputText = document.querySelector('#output');

    document.getElementById('input').value = '';
    document.getElementById('input').focus();
    outputText.textContent = "";

  });



}