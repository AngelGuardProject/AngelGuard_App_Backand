import admin from 'firebase-admin';
import serviceAccount from '../../../firebase-adminsdk.json';

const firebaseKeys = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

admin.initializeApp({
  credential: admin.credential.cert(firebaseKeys),
});


exports.AlertPush = async (req,res) => {
    // const { deviceToken } = req.body; //디바이스의 토큰 값
    const fcmToken = 'FCM토큰';

    const message = {
      notification: {
          title: '시범 데이터 발송',
          body: '클라우드 메시지 전송이 잘 되는지 확인하기 위한, 메시지 입니다.'
      },
      token: fcmToken
  };

    admin
        .messaging()
        .send(message)
        .then(function (response) {
        console.log('Successfully sent message: : ', response)
        return res.status(200).json({success : true})
        })
        .catch(function (err) {
            console.log('Error Sending message!!! : ', err)
            return res.status(400).json({success : false})
        });

}