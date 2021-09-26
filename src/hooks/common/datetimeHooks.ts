import { DateTime } from "luxon";

/**
 * 現在日時取得
 * もしかするとこういうのは普通にただの共通関数にでもしたほうが良いのかもしれない
 */
 export const useDtNow = (): DateTime => DateTime.local().setLocale('ja')
