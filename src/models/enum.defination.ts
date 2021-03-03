export namespace Enums {
  /**
   * レイアウト種別
   */
  export enum LayoutTemplate {
    /**
     * 認証不要レイアウト
     */
    Default = 0,
    /**
     * 認証必須レイアウト
     */
    Authed = 1,
  }

  /**
   * メッセージ種別
   */
  export enum MessageType {
    /**
     * 情報
     */
    Info = 'info',
    /**
     * 成功
     */
    Success = 'success',
    /**
     * 警告
     */
    Warn = 'warn',
    /**
     * エラー
     */
    Error = 'error',
  }

  /**
   * 編集種別
   */
  export enum EditorType {
    /**
     * 新規
     */
    Insert = 1,
    /**
     * 更新
     */
    Update = 2,
  }
}
