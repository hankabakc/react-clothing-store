import React from 'react';

const TransferInfo = () => {

    return (
        <div className="transfer-info">
            <p className="transfer-text">Banka havalesi ile ödeme yapmak için aşağıdaki banka hesaplarımızı kullanabilirsiniz:</p>
            <div className="bank-account">
                <div className="bank-name">Garanti Bankası</div>
                <div>Hesap Sahibi: Şirket Adı</div>
                <div>IBAN: TR00 0000 0000 0000 0000 0000 00</div>
            </div>
            <p className="note-text">
                * Havale/EFT yaptıktan sonra, ödeme onayı için dekont bilgilerinizi bizimle paylaşmanız gerekmektedir.
            </p>
        </div>
    );
};

export default TransferInfo;
