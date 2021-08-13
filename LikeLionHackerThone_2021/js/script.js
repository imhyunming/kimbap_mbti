const slideAnswer1_1 = document.querySelector("#slide-1 answer1");
const slideAnswer2_1 = document.querySelector("#slide-2 answer1");
const slideAnswer3_1 = document.querySelector("#slide-3 answer1");
const slideAnswer4_1 = document.querySelector("#slide-4 answer1");
const slideAnswer5_1 = document.querySelector("#slide-5 answer1");
const slideAnswer6_1 = document.querySelector("#slide-6 answer1");
const slideAnswer7_1 = document.querySelector("#slide-7 answer1");
const slideAnswer8_1 = document.querySelector("#slide-8 answer1");
const slideAnswer9_1 = document.querySelector("#slide-9 answer1");
const slideAnswer10_1 = document.querySelector("#slide-10 answer1");
const slideAnswer11_1 = document.querySelector("#slide-11 answer1");
const slideAnswer12_1 = document.querySelector("#slide-12 answer1");

const slideAnswer1_2 = document.querySelector("#slide-1 answer2");
const slideAnswer2_2 = document.querySelector("#slide-2 answer2");
const slideAnswer3_2 = document.querySelector("#slide-3 answer2");
const slideAnswer4_2 = document.querySelector("#slide-4 answer2");
const slideAnswer5_2 = document.querySelector("#slide-5 answer2");
const slideAnswer6_2 = document.querySelector("#slide-6 answer2");
const slideAnswer7_2 = document.querySelector("#slide-7 answer2");
const slideAnswer8_2 = document.querySelector("#slide-8 answer2");
const slideAnswer9_2 = document.querySelector("#slide-9 answer2");
const slideAnswer10_2 = document.querySelector("#slide-10 answer2");
const slideAnswer11_2 = document.querySelector("#slide-11 answer2");
const slideAnswer12_2 = document.querySelector("#slide-12 answer2");

const familyWork1=document.querySelector("#familyWork1");
const familyWork2=document.querySelector("#familyWork2");
const familyWork3=document.querySelector("#familyWork3");
const familyWork4=document.querySelector("#familyWork4");

const resultImg = document.querySelector("#resultImg");

const answers = document.querySelectorAll('answer1');

var familyActivity =new Set();
const finishBtn = document.querySelector("#finishBtn");

const r={
    ESTP:{"personality":"오이","img":"img/cucumber.jpg" ,"title":"당신은 도전적인 오이네요!","typeDes":"다양함을 선호하는 성격의 당신은 ‘도전적인 오이’입니다.","content":"김밥 매니아들은 사랑하고 오이를 싫어하는 이들에게는 호불호가 갈리기도 하지만 언제나 새로움에 도전하는 모습이군요. \n\n대담하고 실용적인 마인드로 새로운 아이디어와 솔루션을 실험하기를 좋아하는 타입이네요! 모험이나 위험에 앞장서는 경향이 있고, 주변에서 일어나는 모든 일에 관심을 가지는 당신!", "activity":"다만 참을성이 없고 조급함으로 인해 위험을 발생시키기도 하는 당신, 오늘은 새로운 곳으로 “캠핑”을 떠나보는건 어떨까요?","recommend":"오이유형이 있군요! 캠핑을 추천합니다"},

    ESFP:{"personality":"햄","img":"img/ham.jpg" ,"title":"당신은 분위기메이커 햄이네요!","typeDes":"분위기를 고조시키는 우호적인 성격의 당신은 ‘분위기메이커 햄’입니다.","content":" 다른 재료들보다 가장 맛을 돋궈주고 누구에게나 사랑받는 햄과 비슷한 당신은 대담하고 독창적이며 말이 많아 특유의 위트로 사람들과 보내는 시간을 즐깁니다. 에너지가 많고 활동적이며 사교적인 당신은 변화에 잘 적응하는 편이군요! 다만 민감하고 쉽게 실증나는 성격으로 장기적인 계획을 세우기보다는 순간의 즐거움에 집착하는 경향이 조금 있네요.", "activity":"오늘은 끈기 있는 도전을 위해 가족 다 같이 으쌰으쌰 “러닝”을 통해 분위기를 업 시켜보는건 어떨까요?","recommend":"햄유형이 있군요! 러닝을 추천합니다"},

    ENFP:{"personality":"양파","img":"img/onion.jpg" ,"title":"당신은 까도까도 새로운 양파네요!","typeDes":"당신은 ‘까도까도 새로운 양파’ 타입입니다.","content":" 재기발랄한 활동가인 당신은 감정 시복이 심하기도 하고 감정이 풍부하네요! \n\n새로운 사람을 만나기를 좋아하지만, 흥미 없는 새로운 만남은 꺼리는군요. 정열적이고 활기가 넘칠 뿐만 아니라 상상력이 풍부하고 재능이 많은 당신! \n\n당신의 사교적인 성향은 사람이 많은 모임에서 진가를 발휘한답니다. ", "activity":"그렇다면 친숙하면서도 낯선 이들을 만날 수 있는 가족 활동을 추천해드릴게요.오늘은 “애견 카페”나 “키즈 카페”에서 새로운 가족들을 만나 놀아보는건 어떨까요?",
    "recommend":"양파유형이 있군요! 애견카페, 키즈 카페 방문을 추천합니다"},

    ENTP:{"personality":"돈까스","img":"img/dongas.jpg" ,"title":"당신은 흔한건 싫어! 마이웨이 돈까스네요!","typeDes":"풍부한 상상력으로 새로운 것에 도전하는 성격의 당신은 ‘마이웨이 돈까스’네요!","content":" 아는 것이 많고 매우 유연하여 노력하지 않아도 새로운 것으로 전환이 빠른 편이에요! \n\n무엇을 하든 간에 평균 이상으로는 해내고 호불호가 확실합니다. 흥미를 느끼는 것에는 열정과 에너지를 보여주지만, 금세 지루함을 느끼기도 해요. \n\n남들과 차별화된 삶을 추구하기 때문에, 남들이 가는 길을 가기보다는 개척하는 것을 원하는 당신! ", "activity":"그런 당신에게는 새로운 자극이 될 수 있는 놀이가 필요하겠네요.오늘은 바다로 떠나 “서핑”에 도전해보는건 어떨까요?","recommend":"돈까스유형이 있군요! 서핑을 추천합니다"},

    ESTJ:{"personality":"시금치","img":"img/spinach.jpg" ,"title":"당신은 알아서 딱딱! 시금치네요!","typeDes":"사무적, 실용적, 현실적인 스타일의 당신은 ‘알아서 딱딱! 시금치’ 타입이네요.","content":"효율적인 것을 좋아하며 계획과 목표를 실행하면서 활동하는 것을 좋아해요. 외향적이고 사교적이라 일머리가 좋다는 칭찬도 종종 듣곤 하네요. \n\n더불어, 어려운 상황에서도 포기하지 않는 강한 의지와 영감을 지닌 성향입니다. 가끔은 참을성이 없고 미숙한 감정을 다루기 어려워하네요.", "activity":"현실적이고 체계적인 것을 선호하며 현재에 충실한 삶을 추구하는 당신!집에 둘 수 있는 연필꽂이, 그릇 등을 만들 수 있는 “도자기 공예 체험”을 해보는건 어떨까요?","recommend":"시금치 유형이 있군요! 도자기 공예 체험을 추천합니다"},

    ESFJ:{"personality":"애호박","img":"img/pumpkin.jpg" ,"title":"당신은 친절한 애호박씨네요!","typeDes":"친절, 현실감을 바탕으로 타인에게 봉사하는 당신은 ‘친절한 애호박씨’입니다.","content":"타인을 돕고 싶은 욕구가 높으며 집단의 일을 개인보다 우선시하는 경향이 있어요. 타인의 인정을 받고자하는 욕구가 있으며 준비성이 철저하네요! \n\n한편, 빠른 실행에 집착하는 한편 진득한 노력보다는 행동 요령에 특화되어 있어요. 게다가 외향성과 계획성이 뛰어날 수록 잡생각이 많아요. \n\n규칙과 절차를 좋아하며 안정감이 있는 상황을 좋아하네요. 그럴 때일 수록 하나의 일에 진득하게 몰두해보는 것도 좋겠죠.", "activity":"오늘은 가족 다함께 “뜨개질”은 어떨까요?\n\n세이브더칠드런 신생아와 산모의 건강을 지키는 신생아 살리기 캠페인에도 참여할 수 있어요!","recommend":"애호박 유형이 있군요! 뜨개질을 추천합니다."},

    ENFJ:{"personality":"참치","img":"img/tuna.jpg" ,"title":"당신은 신뢰의 참치네요!","typeDes":"타인의 성장을 도모하고 협동적인 사람인 당신은 ‘신뢰의 참치’에요.","content":"당신을 가장 화나게 하는 건 사람을 실망시키는 것이죠. 당신은 진정한 팀 플레이어로, 상대방의 의견을 경청하며 이타적입니다. \n\n그러나 지나치게 이상주의적이거나 이타적으로 굴어, 때로는 스스로를 잃을지도 몰라요. 전형적인 사회운동가, 리더의 자질을 타고난 당신은 사람들을 독려하는 일에 천부적인 능력이 있어요! ", "activity":"특유의 강한 추진력과 다른 사람들과의 소통을 살린 활동을 해보는 것이 좋겠네요.서로서로 자세를 봐주며 더 높은 곳에 도전하는 “클라이밍”에 도전해보는 것은 어떨까요?","recommend":"참치 유형이 있군요! 클라이밍을 추천합니다"},

    ENTJ:{"personality":"당근","img":"img/carrot.jpg" ,"title":"당신은 해피 당근이네요!","typeDes":"비전을 갖고 타인을 활력적으로 인도하는 당신은 ‘해피 당근’입니다!","content":"리더형, 논리적, 결단력, 창의적, 조직적, 활동적, 강인함 등이 당신을 대표하는 키워드에요! 자기애가 강하며, 활동적이고, 사교적입니다. \n\n전체적인 측면에서 시야가 넓으며 팀원들과 쉽게 어울리는 타입이네요! 우호적이고 사교적이며 활력이 넘쳐 많은 사람들 속에서도 원만하게 잘 지낼 수 있는 성격이에요. ", "activity":"다만 감정적인 공감이 부족하거나, 주변에 귀를 잘 기울이지 않곤 해요. 행동이 앞서는 당신!오늘은 곁에 있는 가족들과 함께 새로운 포토존을 찾아 “벽화마을”의 구석구석을 살펴보며 걸어보면 어떨까요?","recommend":"당근 유형이 있군요! 벽화마을을 추천합니다"},

    ISFP:{"personality":"김치","img":"img/kimchi.jpg" ,"title":"당신은 무한변신 김치네요!","typeDes":"자유로운 영혼의 어디로 튈지 모르는 당신은 ‘무한변신 김치’입니다!\n각양각색의 모습으로 변하는 당신은 마치 겉절이, 묵은지, 신김치 등 다양한 변신을 즐기는 김치와 닮았군요.","content":"개방성과 적응력이 강한 당신은 다양한 유형의 사람들과 잘 어울리는 성격의 소유자입니다.\n\n타인을 배려하는 따뜻한 마음씨와 겸손함 덕분에 크게 나서는 성격이 아님에도 인기가 많은 유형입니다.\n\n또한 이 유형은 자신을 잘 꾸밀 줄 알고, 예술감각이 뛰어난 사람들이 많습니다.\n\n하지만, 새로움에 대한 욕구가 커서, 반복되는 루틴을 못 버텨 하고, 이는 자칫 어떤 일이든 쉽게 포기하는 경향으로도 이어질 수 있으니 주의하면 좋을 듯 해요!", "activity":"오늘은 가족과 함께 예술감각을 마음껏 표현해낼 수 있는 “꽃꽂이 클래스” 활동을 해보는건 어떨까요?","recommend":"김치 유형이 있군요! 꽃꽂이 클래스를 추천합니다"},

    ISTJ:{"personality":"깨소금","img":"img/salt.jpg" ,"title":"당신은 뒷심왕 깨소금이네요!","typeDes":"한번 시작한 건 끝까지 해내는 성격의 당신은 ‘뒷심왕 깨소금’ 입니다!\n\n김밥 싸기의 마무리를 담당하는 깨소금처럼, 모든 일은 마무리를 보아야 직성이 풀리는 타입입니다.","content":"철저한 분석과 계획, 뛰어난 현실감각으로 한번 목표로 정했으면 끝까지 이끌고 가는 뒷심이 센 사람이군요!\n\n그러다 보니, 당신을 믿고 따르는 사람들이 항상 주변에 많고 사람들에게 강한 신뢰감을 심어주는 이미지입니다.\n\n또한 쉽게 감정에 휘둘리지 않고, 위기의 상황에서도 침착하게 행동할 줄 아는 유형으로, 주변 사람들에게도 든든한 버팀목 같은 존재입니다.\n\n하지만, 가끔은 너무 이성적인 나머지 감성적인 상대와 만났을 때 의도치 않은 상처를 주기도 하는데요.\n\n때로는 이성과 감성을 함께 아우를 줄 아는 것도 필요한 것 같아요!", "activity":"오늘은 가족과 함께 뒷심이 필요한 “낚시”하러 가는 건 어떨까요?","recommend":"깨소금 유형이 있군요! 낚시를 추천합니다"},

    ISTP:{"personality":"치즈","img":"img/cheese.jpg" ,"title":"당신은 말랑말랑 융통성갑 치즈네요!","typeDes":"논리적이고 뛰어난 상황 적응력을 지닌 당신은 ‘말랑말랑 융통성갑 치즈’입니다.\n\n빠른 두뇌회전과 임기응변이 강한 유형으로, 마치 말랑말랑 하다가도 딱딱하게 굳고 다시 말랑말랑 해지기도 하는 유연한 치즈같군요!","content":"실용적이고, 현실적인 것에 관심이 많고 좋아하는 분야나 사람에 있어서는 무한 애정을 쏟는 사람입니다.\n\n그러다보니, 뜬구름 잡는 소리나 비현실적인 주제를 두고 계속 이야기하는 것을 싫어하기도 해요.\n\n가끔 사람과의 관계에서 감성적인 센스가 부족하기도 하지만, 특유의 유머러스한 입담과 융통성 때문에 미워할 수가 없는 유형이랍니다!", "activity":"오늘은 빠른 적응력과 두뇌회전으로 가족과 함께 협력할 수 있는 “방탈출 게임”하러 가는 건 어떨까요?","recommend":"치즈 유형이 있군요! 방탈출 게임을 추천합니다"},

    ISFJ:{"personality":"참기름","img":"img/oil.jpg" ,"title":"당신은 우아한 참기름이네요!","typeDes":"당신은 성실하고 온화한 성격으로, 언제 어디서나 은은하게 빛나는 ‘우아한 참기름’입니다!\n\n부드러운 성격으로 주변 사람들을 빛나게 하는 당신은 마치 참기름과 같은 사람이에요.","content":"수용력과 배려심이 강한 당신은 밝고 긍정적이며, 누구도 따라할 수 없는 순수한 느낌이 바로 매력 포인트입니다.\n\n또한, 계획적이고 성실한 성격때문에 주변 사람들이 자연스레 당신을 믿고 따르게 되는 일이 많아요.\n\n어른스러운 느낌의 사람이다 보니, 때로는 이런 자신의 모습 때문에 속앓이를 하거나 스트레스를 안으로 삭히는 경우가 있어요. \n\n가끔은 주변의 사람들에게 의지하는 것도 괜찮지 않을까요? 당신의 투정 정도는 귀여운 애교처럼 느껴질거에요!", "activity":"오늘은 당신의 부드러움을 충전해줄 “산책”을 가족과 함께 즐기는 건 어떨까요?","recommend":"참기름 유형이 있군요! 산책을 추천합니다"},

    INTP:{"personality":"단무지","img":"img/pickledradish.jpg" ,"title":"당신은 똑똑한 단무지네요!","typeDes":"비평적인 관점을 지닌 뛰어난 전략가 같은 당신은 김밥의 시그니처 재료 ‘똑똑한 단무지’입니다.\n\n적응력이 뛰어나고, 남다른 시선으로 우리 사회를 이끌어 가는 당신은 세상에 없어서는 안 될 존재로, 마치 김밥에게 꼭 필요한 단무지와 같은 사람이군요.","content":"호기심이 많고, 지식을 쌓는 것에 즐거움을 느낄 줄 아는 유형으로, 똑똑한 브레인 느낌의 사람이에요.\n\n하지만, 항상 바쁜 머리와는 다르게 은근 게으른 당신!\n\n이제는 머릿속의 통통 튀는 아이디어들을 몸소 실천해보는 것은 어떨까요?", "activity":"오늘은 다양한 전략을 세우고 즐기는 “보드게임”을 추천합니다!","recommend":"단무지 유형이 있군요! 보드게임을 추천합니다!"},

    INTJ:{"personality":"깻잎","img":"img/perillaleaf.jpg" ,"title":"당신은 부드러운 카리스마 깻잎이네요!","typeDes":"부드러운 카리스마로 비전을 제시하는 당신은 ‘부드러운 카리스마 깻잎’입니다.\n\n부드러운 카리스마로 비전을 제시하며 전체를 조화시키는 모습이, 마치 맛은 쌉사름하지만 김밥 속 재료를 모두 감싸 안는 깻잎과 닮았군요.","content":"감정보단 이성, 즉흥보단 계획이 우선인 당신은 주변 사람들에게 현명한 해답을 알려주는 경우가 많아요.\n\n첫인상은 과묵해 보일 수도 있지만, 자신이 관심있거나 좋아하는 분야에서는 수다쟁이가 되는 유형으로 반전매력의 소유자입니다.\n\n하지만 주변에 약간 무관심한 편이기도 해서, 종종 이런 모습에 서운해하는 사람들이 있기도 한답니다.\n\n때로는 관심있는 분야 이외에도 더 넓게 살펴보는 보는 건 어떨까요? 새로운 재미가 찾아올지도 몰라요!", "activity":"오늘은 가족들 개개인의 성격을 잘 조화시킬 줄 아는 깻잎 유형과 함께, 당장 “가족여행”을 즐기러 가보세요!",
    "recommend":"깻잎 유형이 있군요! 가족여행을 추천합니다"},

    INFJ:{"personality":"어묵","img":"img/fishcake.jpg" ,"title":"당신은 친화력갑 어묵이네요!","typeDes":"생각도 깊고 누구와도 잘 어울리는 같은 당신은 ‘친화력갑 어묵’입니다!\n\n마치 떡볶이에도, 무침에도, 핫바에도, 술 안주로도 어디에나 잘 어울리는 어묵의 모습과 닮았군요!","content":"누구보다 정직하고, 사려깊은 당신은 아마 어딜가도 ‘좋은 사람’이라는 이미지의 소유자일 거에요.\n\n주변에 대한 관심도 많고, 그만큼 생각도 많아서 남다른 통찰력을 지닌 유형이랍니다.\n\n하지만 가끔은 생각이 너무 많아서 스스로에게 지치기도 합니다.\n\n때로는 아무 생각하지 않고, 스스로에게 쉼을 주는 건 어떨까요?", "activity":"오늘은 남다른 눈썰미와 통찰력을 지닌 어묵 유형과 함께 온가족이 “숨은 그림 찾기”를 하며 즐거운 대결을 펼쳐보는 걸 추천합니다!","recommend":"어묵 유형이 있군요! 숨은 그림 찾기를 추천합니다"},

    INFP:{"personality":"계란말이","img":"img/egg.jpg" ,"title":"당신은 순둥순둥 계란말이네요!","typeDes":"부드럽고 순수한 이미지의 당신은 마치 부드러운 식감을 더해주는 ‘순둥순둥 계란말이’입니다.","content":"풍부한 감수성과 여린 마음을 지닌 당신은 배려심이 깊고, 어딜가도 ‘착하다’는 소리를 듣는 사람입니다.\n\n하지만 여린 겉모습과 달리, 내면에는 자신만의 굳은 신념과 불타오르는 열정을 지니고 있으면서 보다 좋은 세상을 만들어가고자 노력하는 사람이에요.\n\n본투비 선한 심성을 가진 타입으로, 못되고 싶어도 못될 수 없는 사람이에요.\n\n그래서 주위 사람들을 너무 배려하다 보니, 때로는 너무 눈치를 보거나 속앓이를 하는 경우도 많군요.\n\n타인을 배려해 나의 속마음을 숨기는 모습이, 때로는 가족이나 연인 등 가까운 사람들의 입장에서는 서운할 수 있어요.", "activity":"오늘은 가족끼리 따뜻한 마음을 나눌 수 있는 “마니또”활동을 해보는건 어떨까요?","recommend":"계란말이 유형이 있군요! 마니또를 추천합니다!"},
}
var ISFJscore =[0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var ENTPscore =[0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];


function count1_1(event){
    ISFJscore[1] = 1;
    ENTPscore[1] = 0;
}

function count2_1(){
    ISFJscore[2] = 1;
    ENTPscore[2] = 0;
}
function count3_1(){
    ISFJscore[3] = 1;
    ENTPscore[3] = 0;
}
function count4_1(){
    ISFJscore[4] = 1;
    ENTPscore[4] = 0;
}
function count5_1(){
    ISFJscore[5] = 1;
    ENTPscore[5] = 0;
}
function count6_1(){
    ISFJscore[6] = 1;
    ENTPscore[6] = 0;
}
function count7_1(){
    ISFJscore[7] = 1;
    ENTPscore[7] = 0;
}
function count8_1(){
    ISFJscore[8] = 1;
    ENTPscore[8] = 0;
}
function count9_1(){
    ISFJscore[9] = 1;
    ENTPscore[9] = 0;
}
function count10_1(){
    ISFJscore[10] = 1;
    ENTPscore[10] = 0;
}
function count11_1(){
    ISFJscore[11] = 1;
    ENTPscore[11] = 0;
}
function count12_1(){
    ISFJscore[12] = 1;
    ENTPscore[12] = 0;
    showResult();
}

//2번버튼
function count1_2(event){
    console.log(event);
    ISFJscore[1] = 0;
    ENTPscore[1] = 1;
}

function count2_2(){
    ISFJscore[2] = 0;
    ENTPscore[2] = 1;
}
function count3_2(){
    ISFJscore[3] = 0;
    ENTPscore[3] = 1;
}
function count4_2(){
    ISFJscore[4] =0;
    ENTPscore[4] = 1;
}
function count5_2(){
    ISFJscore[5] = 0;
    ENTPscore[5] = 1;
}
function count6_2(){
    ISFJscore[6] = 0;
    ENTPscore[6] = 1;
}
function count7_2(){
    ISFJscore[7] = 0;
    ENTPscore[7] = 1;
}
function count8_2(){
    ISFJscore[8] = 0;
    ENTPscore[8] = 1;
}
function count9_2(){
    ISFJscore[9] = 0;
    ENTPscore[9] = 1;
}
function count10_2(){
    ISFJscore[10] = 0;
    ENTPscore[10] = 1;
}
function count11_2(){
    ISFJscore[11] = 0;
    ENTPscore[11] = 1;
}
function count12_2(){
    ISFJscore[12] = 0;
    ENTPscore[12] = 1;
    showResult();
}

function showResult(){
    const sumI = ISFJscore[1] +ISFJscore[2]+ISFJscore[3];
    const sumS = ISFJscore[4] +ISFJscore[5]+ISFJscore[6];
    const sumF = ISFJscore[7] +ISFJscore[8]+ISFJscore[9];
    const sumJ = ISFJscore[10] +ISFJscore[11]+ISFJscore[12];

    if (sumI >= 2){
        var typeIE = "I";
    }else{
        var typeIE = "E";
    }
    if (sumS >= 2){
        var typeSN = "S";
    }else{
        var typeSN = "N";
    }
    if (sumF >= 2){
        var typeFT = "F";
    }else{
        var typeFT = "T";
    }
    if (sumJ >= 2){
        var typeJP = "J";
    }else{
        var typeJP = "P";
    }

    const mbti = typeIE.concat(typeSN,typeFT,typeJP);
    resultImg.src = r[`${mbti}`]["img"];
    console.log(mbti);

    title.innerText = r[`${mbti}`]["title"];
    content1.innerText = r[`${mbti}`]["typeDes"];
    content2.innerText = r[`${mbti}`]["content"];
    content3.innerText = r[`${mbti}`]["activity"];

}

function typeChosen(event){
    const typeClicked = event.target.className;
    if(typeClicked !==""){
        familyTitle.innerText += `${r[typeClicked]["personality"]}`;
        var activity=`${r[typeClicked]["recommend"]}`;
        familyActivity.add(activity);
        newArray = Array.from(familyActivity);
        familyWork1.innerHTML ="";
        for (i=0;i<newArray.length;i++){
            var temp = newArray[i];
            
            familyWork1.innerHTML +=`<h2>${temp}</h2>`;
        }
    }
}
function clearResult(){
    familyTitle.innerHTML="여러분의 가족 김밥 유형은?<br>";
    familyWork1.innerHTML="";
}
slideAnswer1_1.addEventListener("click",count1_1);
slideAnswer2_1.addEventListener("click",count2_1);
slideAnswer3_1.addEventListener("click",count3_1);
slideAnswer4_1.addEventListener("click",count4_1);
slideAnswer5_1.addEventListener("click",count5_1);
slideAnswer6_1.addEventListener("click",count6_1);
slideAnswer7_1.addEventListener("click",count7_1);
slideAnswer8_1.addEventListener("click",count8_1);
slideAnswer9_1.addEventListener("click",count9_1);
slideAnswer10_1.addEventListener("click",count10_1);
slideAnswer11_1.addEventListener("click",count11_1);
slideAnswer12_1.addEventListener("click",count12_1);

slideAnswer1_2.addEventListener("click",count1_2);
slideAnswer2_2.addEventListener("click",count2_2);
slideAnswer3_2.addEventListener("click",count3_2);
slideAnswer4_2.addEventListener("click",count4_2);
slideAnswer5_2.addEventListener("click",count5_2);
slideAnswer6_2.addEventListener("click",count6_2);
slideAnswer7_2.addEventListener("click",count7_2);
slideAnswer8_2.addEventListener("click",count8_2);
slideAnswer9_2.addEventListener("click",count9_2);
slideAnswer10_2.addEventListener("click",count10_2);
slideAnswer11_2.addEventListener("click",count11_2);
slideAnswer12_2.addEventListener("click",count12_2);


answers.forEach(answer => {answer.addEventListener("click",typeChosen)});
finishBtn.addEventListener("click",clearResult);
