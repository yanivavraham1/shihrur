import React from "react";

function MoneyExplain() {
  return (
    <div className="p-5 bg-zinc-50 w-fit mx-auto border-2">
      <h1 className="font-bold">איך לחשב את המענק והפיקדון שלי?</h1>
      <ul>
        <li>
          חיילות.ים ששירתו כלוחמים - את מספר חודשי הטירונות יש למלא במחשבון
          כ&quot;תומך לחימה&quot;. את יתר תקופת השירות יש להגדיר במחשבון
          כ&quot;לוחמים&quot;.
        </li>
        <li>
          חיילות.ים ששירתו כתומכי לחימה – את מספר חודשי הטירונות יש למלא במחשבון
          כ&quot;עורפי&quot;. את יתר תקופת השירות יש להגדיר במחשבון כ&quot;תומך
          לחימה&quot;.
        </li>
        <li>
          מסיימי שירות לאומי-אזרחי – יש להגדיר את תקופת השירות במחשבון
          כ&quot;עורפי&quot;.
        </li>
      </ul>
    </div>
  );
}

export default MoneyExplain;
