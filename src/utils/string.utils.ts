import dayjs from 'dayjs';

export class StringUtils {
  static readonly EmailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  static isBlank(str: string): boolean {
    return !str || str.trim().length === 0;
  }

  static formatAmount(src: number): string {
    if (src) {
      return String(src).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return null;
  }
  /**
   * タイムゾーンを除いた日付文字列を返却
   * @param datetime データタイム
   */
  static dateWithoutTimezone(datetime: Date, containTime: boolean = false): string {
    if (datetime && datetime instanceof Date) {
      return containTime ? datetime.toISOString() : datetime.toISOString().slice(0, 10);
    }
    return null;
  }

  static dateFormat(datetime: Date, format: string = 'YYYY/MM/DD') {
    if (datetime && datetime instanceof Date) {
      return dayjs(datetime).format(format);
    }
    return null;
  }

  static datetimeFormat(datetime: Date, format: string = 'YYYY/MM/DD HH:mm:ss') {
    if (datetime && datetime instanceof Date) {
      return dayjs(datetime).format(format);
    }
    return null;
  }

  /**
   * パスワードチェック（大文字、小文字、数値含めて桁以上）
   * @param value
   */
  static isValidPassword(value: string): boolean {
    return /[A-Z]+/.test(value) && /[a-z]+/.test(value) && /[\d]+/.test(value) && value.length >= 8;
  }

  /**
   * 有効メールアドレス
   * @param value
   */
  static isValidEmail(value: string): boolean {
    return StringUtils.EmailReg.test(value);
  }

  /**
   * 文字列分割
   * @param value 対象文字列
   * @param separator 分割キー文字列
   */
  static splitBy(value: string, separator: string): string {
    if (!value || !separator) {
      return;
    }
    return value.split(separator).join('\n');
  }

  /**
   * 文字列をboolean型に変換する
   * @param value
   */
  static parseBool(value: string | null): boolean | null {
    if (value == null || value === '') {
      return null;
    }
    return value === 'true';
  }

  static getCurrentISODate(): string {
    return new Date().toISOString();
  }
}
