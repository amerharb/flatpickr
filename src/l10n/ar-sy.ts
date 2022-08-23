/**
 * Syrian Arabic locals for flatpickr, also included others local in the region: Lebanon, Jordan, Palestine and Iraq
 */
import { CustomLocale } from "../types/locale";
import { FlatpickrFn } from "../types/instance";

const fp =
  typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : ({
      l10ns: {},
    } as FlatpickrFn);

export const SyrianArabic: CustomLocale = {
  weekdays: {
    shorthand: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    longhand: [
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ],
  },

  months: {
    shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    longhand: [
      "كانون الثاني",
      "شباط",
      "آذار",
      "نيسان",
      " أيار",
      "حزيران",
      "تموز",
      "آب",
      "أيلول",
      "تشرين الأول",
      "تشرين الثاني",
      "كانون الأول",
    ],
  },
  firstDayOfWeek: 0,
  rangeSeparator: " إلى ",
  weekAbbreviation: "Wk",
  scrollTitle: "قم بالتمرير للزيادة",
  toggleTitle: "اضغط للتبديل",
  yearAriaLabel: "سنة",
  monthAriaLabel: "شهر",
  hourAriaLabel: "ساعة",
  minuteAriaLabel: "دقيقة",
  time_24hr: true,
};

fp.l10ns.ar = SyrianArabic;

export default fp.l10ns;
