import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import * as enums from "../../helpers/enums";

import Carousel from "react-material-ui-carousel";
import byc from "../../styles/byc.png";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(5),
      maxWidth: "50px",
    },
  },
  reviews: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
var items = [
  {
    name: "#1",
    description: `ספר איכותי, המעורר עניין בקרב ילדים ומבוגרים כאחד. זהו ספר חינוכי המציג חוויה רגשית ובו מסר לחיים. הספר כתוב נפלא ומעורר התרגשות אצל הילדים וזו סיבה מספיק טובה להתעקש לקרוא את הספר.\n
   ~ סיגלית מאורר, אמא , סבתא ומורה לספרות ~ `,
  },
  {
    name: "#2",
    description: `הליצן שפחד לרכב על חד אופן הוא שיעור מקסים על אתגרים, הכח של חברות והאפשרות לצמוח דרך התמודדות עם הפחד. לכולנו יש את החד אופן שלנו, האתגר שמגיע אלינו כמתנה שיכול בהתחלה להפחיד אותנו אבל אם נכיר באמת שכל מי שאנחנו מכירים ואוהבים מתמודד עם אתגרים נוכל לראות בפחד הזדמנות לצמיחה. אם נסכים לאתגרים שהחיים מציבים בפנינו ולא נברח מפניהם נוכל לגלות את הכוחות הטמונים בנו ולהגדיל את היכולות שלנו לשמוח ולשמח.  \n
    ~ איתי נייגר, פסיכותרפיסט ומורה למיינדפולנס ~`,
  },
  {
    name: "#3",
    description: `הספר מקסים לילדים! והמסר מתאים גם למבוגרים :) ממש נהניתי לקרוא והאיורים מתוקים ויפים\n
    ~ שיר בלומנפלד ~`,
  },
  {
    name: "#4",
    description: `רכשתי לבת ה-7 ובן ה- 3 את הספר "הליצן שפחד לרכוב על חד אופן". עוד לפני שהתחלנו בקריאת הספר הילדים הגיבו בהתלהבות רבה לעטיפה הצבעונית ולציורים המרהיבים. הספר מדבר על הצבת מטרות ועל עמידה ביעדים למרות האתגרים העומדים בדרך. שניהם ביקשו לשוב ולקרוא את הספר פעם נוספת מיד בתום הקריאה הראשונה. הדמויות כולן מגוונות ושונות הן בכישרונות ששויכו להם והן במראה. בספר מסרים רבים וחשובים ביניהם, חברות, תמיכה, אמפתיות, שמירה על נחישות, התמדה והתגברות על קשיים. למרות הפחד והחששות, בעזרת חבריו של לירן הוא לא מתייאש ומצליח לבסוף לרכוב על החד אופן. הספר מותאם ומומלץ לטווח גילאים רחב. בכל גיל ניתן להנות מתוכנו באופן שונה ולהעמיק במסרים השונים.\n
    ~ גיתית סברו, אמא ל 2 ומורה ~`,
  },
  {
    name: "#5",
    description: `
הספר מלמד על כוח רצון, התמדה, חברות עמוקה ותומכת. כבר בפעם הראשונה כשהקראנו את הסיפור, הילדים התלהבו כשלירן הצליח לרכוב אחרי הרבה ניסיונות. הילדים התרגשו כאשר כל חבר של לירן הגיע לנחם אותו. מאז, כל פעם שהם לא מצליחים או חוששים ממשהו חדש, הם יודעים שכדי להצליח צריך להתמיד, ממש כמו לירן. תודה רבה על סיפור מקסים, מלמד וסוחף.\n
~  שני איוון, אמא ל-2 ומורה ~`,
  },
  {
    name: "#6",
    description: `בתבונה וברגישות, חבריו של לירן מניעים אותו להתגבר על פחד, ללמוד מניסיונם ולהתנסות בעצמו. הקסם של הסיפור המחורז הוא בחיבור הפשוט והחכם בין ילדים, חברות וחד אופן אחד.  
ומהם רגעי האושר שלנו אם לא חברות גדולה, הצלחות קטנות ומתנות מפתיעות? \n
~ סיון שריד, אמא, מנחת מורים ודוקטור לספרות ~`,
  },
  {
    name: "#7",
    description: `היום השתמשתי בליצן כדי ללמד את אימרי לרכוב בלי גלגלי עזר. אימרי התאמן נפל וקם,
    בדיוק כמו בסיפור והצליח לרכוב בלי גלגלי העזר.
    אז תודה שוב על ספר מעולה וחג שמח 😘
    \n
    ~ אדיר זריף, אבא ל-3 ~`,
  },
  {
    name: "#8",
    description: `קולעת לקטנה צמה בבוקר ואומרת לה: ״ מצטערת ממי, אמא טובה בהרבה דברים אבל גרועה בצמות״.
    ענתה לי הקטנה: ״ אז פשוט תנסי ותנסי עד שתצליחי, כמו הליצן שלא ידע לרכוב ״\n
    ~ אמא ל-5 ~`,
  },
  {
    name: "#9",
    description: `"רק שתדעי, שמאז שהבאת לנו את הספר, שי מבקש אותו כל ערב לפני השינה. הוא ממש אוהב אותו וזה בא גם ממש טוב לפני החזרה לגן כשהוא קצת מפחד ולא רוצה ללכת לגן. כי יש לנו ממש שיח כל ערב על איך הליצן מפחד אבל בסוף מתגבר ומצליח. בקיצור, ממש מוצלח. תודה !"`,
  },
  {
    name: "#10",
    description: `"וואוו חייבת לשתף , הבנות שלי (רוני 9 וגאיה 5) ממש נהנו מהספר, כל אחת מנקודת המבט שלה. הבנות התפעלו גם מהציורים המדהימים ושאלו אין ספור שאלות (כך אני יודעת שהן בטוח נהנו❤️)"`,
  },
];
const image = "../../styles/byc.png";
function ReviewCarousel() {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "3%" }}
    >
      <img src={byc} className={classes.img} />
      <Grid xl={3} md={8} xs={12}>
        <Typography
          className={classes.reviews}
          style={{
            textAlign: "center",
            color: "white",
            textDecorationLine: "underline",
          }}
          variant="h5"
        >
          {enums.strings.REVIEWS}
        </Typography>
        <Carousel animation="slide">
          {items.map((item, i) => (
            <Grid
              className={classes.root}
              container
              justifyContent="center"
              direction="row"
            >
              <p
                variant="h5"
                style={{
                  fontSize: "25px",
                  whiteSpace: "pre-line",
                  textAlign: "center  ",
                }}
              >
                {item.description}
              </p>
            </Grid>
          ))}
        </Carousel>
      </Grid>

      <img src={byc} className={classes.img} />
    </Grid>
  );
}

export default ReviewCarousel;
