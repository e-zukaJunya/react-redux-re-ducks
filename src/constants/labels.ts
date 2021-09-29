// 画面上に表示する文言を定義
// 別にlabelタグ専用というわけではなく、画面上に表示するちょっとした文言の定義（なのでフォーム要素と無関係なとこにlabelタグ付けないこと）
// かなり多くなるならコンポーネントとかページ単位で分割してもいいが、ロジックも無いので肥大化してもいいかな

// ログイン画面
export const loginLabels = {
    TITLE: 'ログイン',
    MAIL_ADDRESS: 'メールアドレス',
    PASSWORD: 'パスワード',
    LOGIN_BUTTON: 'ログイン',
    LINK_RESET_TITLE: 'パスワードをお忘れの方は',
    LINK_RESET_HERE: 'こちら',
}

//ヘッダー
export const headerLabels = {
    APP_TITLE: 'アプリタイトル',
    ROOT: 'トップ',
    PAGE2: 'フォーム',
    PAGE3: 'リスト',
    OTHER: 'その他',
}

//ヘッダー
export const accountMenuLabels = {
    LOGOUT: 'ログアウト',
    CHANGE_PASSWORD: 'パスワード変更',
}

// 共通.通知ポップアップボタン名称
export const dialogButton = {
    CLOSE: '閉じる',
    OK: 'OK',
    BACK: '戻る',
}

// フォームのページのタブ
export const formPageTabs = {
    CHECKBOX: 'チェックボックス',
    RADIO: 'ラジオボタン',
    TEXT: 'テキストボックス',
    INDETERMINATE_CHECKBOX: '不定チェックボックス',
}
