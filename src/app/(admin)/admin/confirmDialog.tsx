import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from '@mui/material';

export default function ConfirmDialog(props: any) {
    const { confirmDialog, setConfirmDialog } = props;

    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle sx={{ textAlign: 'center' }}>
                <IconButton disableRipple>
                    <HighlightOffIcon color="error" sx={{ fontSize: '60px' }} />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ textAlign: 'left' }}>
                <Typography variant="h6">{confirmDialog.title}</Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'right' }}>
                <Button
                    onClick={() =>
                        setConfirmDialog({ ...confirmDialog, isOpen: false })
                    }
                >
                    HUỶ
                </Button>
                <Button
                    onClick={() => {
                        confirmDialog.onConfirm();
                        setConfirmDialog({ ...confirmDialog, isOpen: false });
                    }}
                    color="error"
                >
                    XOÁ
                </Button>
            </DialogActions>
        </Dialog>
    );
}
