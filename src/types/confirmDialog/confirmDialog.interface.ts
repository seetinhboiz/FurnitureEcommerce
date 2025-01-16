export interface IConfirmDialog {
    isOpen: boolean;
    title: string;
    subTitle: string;
    onConfirm?: () => void;
}
