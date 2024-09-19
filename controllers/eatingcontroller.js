const EatM = require('../models/eatingmodel'); // 쿼리 모델
const BabyM = require('../models/babymodel');


//const userre = await User.MgetUserDetails(bodyid);

// 섭취량 입력
exports.Babyeating = async (req,res) => {
    const today_date = new Date();
    console.log(today_date);
    console.log(req.body);
    const {feed_amount,feed_memo,baby_name} = req.body;
    console.log(feed_amount,feed_memo,baby_name);

    const bName = await BabyM.Selectbabyid(baby_name);
    console.log("baby_id : ",bName);

    if(!bName < 0){
        res.status(400).json({result:false,message:'아이 이름 오류'});
    }else{
        const babyeat = {...req.body,today:today_date,baby_id:bName};
        console.log(babyeat);

        if(!feed_amount || !feed_memo){
            res.status(400).json({result:false,message:'값을다 입력해 주세요.'});
        }
        else{
            const beating = await EatM.Meating(babyeat);
            console.log(beating);
            if(beating.length < 1){
                res.status(403).json({ result: false ,message:'실패'});
            }else{
                res.status(500).json({ result: true,message:'성공' });
            }
        }
    }

};

// 유축량 입력
exports.Pumping = async (req,res) => {
    const today_date = new Date();
    console.log(today_date);
    console.log(req.body);
    const {intake_amount,intake_memo,baby_name} = req.body;
    console.log(intake_amount,intake_memo,baby_name);

    const baby_id = await BabyM.Selectbabyid(baby_name);
    

    if(!baby_id){
        res.status(400).json({result:false,message:'아이 이름을 찾을 수 없습니다.'});
    }else{
        const intake = {...req.body,today:today_date,baby_id:baby_id};
        console.log(intake);

        if(!intake_amount || !intake_memo){
            res.status(400).json({result:false,message:'값을다 입력해 주세요.'});
        }
        else{
            const bintake = await EatM.Mpumping(intake);
            console.log(bintake);
            if(bintake.length < 1){
                res.status(403).json({ result: false ,message:'실패'});
            }else{
                res.status(500).json({ result: true,message:'성공' });
            }
        }
    }


};

//모유수유 시간 입력
exports.InsertMS = async (req,res) => {
    const today_date = new Date();

    const { m_time,m_memo,baby_name } = req.body;

    const baby_id = await BabyM.Selectbabyid(baby_name);

    if(!baby_id){
        res.status(400).json({result:false,message:'아이 이름을 찾을 수 없습니다.'});
    }else{

        const ms_time =  {...req.body,today:today_date,baby_id:baby_id};
        console.log(ms_time);

        if(!m_time || !m_memo){
            res.status(400).json({result:false,message:'값을다 입력해 주세요.'});
        }else{
            const insetime = await EatM.MMs(ms_time);
            console.log(insetime);
            if(insetime.length <1){
                res.status(403).json({ result: false ,message:'실패'});
            }else{
                res.status(500).json({ result: true,message:'성공' });
            }
        }
    }


}



//섭취량 조회
exports.SelectEat = async (req,res) => {
    console.log(req.body);
    const {baby_name} = req.body;

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month  + '-' + day;

    // const sel_day = -1;
    // Bday.setDate(Bday.getDate() + sel_day);

    const baby_id = await BabyM.Selectbabyid(baby_name);
    console.log(dateString);

    const sel_eat = {y_date:dateString,baby_id:baby_id};
    

    if(!baby_id){
        res.status(400).json({result:false,message:"아이 이름을 찾을 수 없습니다."})
    }else{
        const group_eat = await EatM.MselectEating(sel_eat);
        console.log(group_eat);
        if(!group_eat){//실패
            res.status(200).json({message:"조회된 결과가 없습니다."});
        }else{
            res.status(500).json({result:group_eat});
        }
    }

    

}

//유축량 조회 
exports.Selectpum = async (req,res) => {
    console.log(req.body);
    const {baby_name} = req.body;

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month  + '-' + day;

    // const sel_day = -1;
    // Bday.setDate(Bday.getDate() + sel_day);

    const baby_id = await BabyM.Selectbabyid(baby_name);
    console.log(dateString);

    const sel_eat = {y_date:dateString,baby_id:baby_id};

    if(!baby_id){
        res.status(400).json({result:false,message:"아이 이름을 찾을 수 없습니다."})
    }else{
        const group_eat = await EatM.Mpum(sel_eat);
        console.log(group_eat);
        if(!group_eat){//실패

        }else{
            res.status(500).json({result:group_eat});
        }
    }
}


//모유수유 시간 조회
exports.SelectMS = async (req,res) => {
    const {baby_name} = req.body;

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month  + '-' + day;

    // const sel_day = -1;
    // Bday.setDate(Bday.getDate() + sel_day);

    const baby_id = await BabyM.Selectbabyid(baby_name);
    console.log(dateString);

    const sel_eat = {y_date:dateString,baby_id:baby_id};

    if(!baby_id){
        res.status(400).json({result:false,message:"아이 이름을 찾을 수 없습니다."})
    }else{
        const group_time = await EatM.MselectMS(sel_eat);
        console.log(group_time);
        if(!group_time){//실패

        }else{
            res.status(500).json({result:group_time});
        }
    }

}

// 유축량,섭취량,시간 전날 기준 조회
exports.BeforeDa = async (req,res) => {

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month  + '-' + day;

    const {baby_name} = req.body;

    const baby_id = await BabyM.Selectbabyid(baby_name);
    console.log(dateString);

    const sel_eat = {y_date:dateString,baby_id:baby_id};

    if(!baby_id){
        res.status(400).json({result:false,message:"아이 이름을 찾을 수 없습니다."})
    }else{
        const eat = await EatM.MselectEating(sel_eat);
        const intake = await EatM.Mpum(sel_eat);
        const time = await EatM.MselectMS(sel_eat);
        console.log(eat);
        console.log(intake);
        console.log(time);

        const beforeData = {"섭취량":eat,"유축량":intake,"시간":time};

        res.status(500).json({result:beforeData});
    }
}