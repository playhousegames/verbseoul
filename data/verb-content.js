// data/verb-content.js — hand-written learner content for the most common verbs.
//
// Keyed by verb slug (see data/verbs.js). For each verb:
//   examples: one everyday sentence per form, keyed by the form ID used for the
//             page anchors (lib/forms.js) → [hangul, english]. Each sentence must
//             contain that form exactly as the table shows it, so the page can
//             bold it in place.
//   usage:    2–3 sentences on how this particular verb is used.
//   mistake:  one common learner mistake.
//
// Verbs listed here are the ones in sitemap.xml (app/sitemap.js).

const verbContent = {
  meokda: {
    examples: {
      'present-casual': ['나 지금 밥 먹어.', 'I’m eating right now.'],
      'present-polite': ['저는 아침에 빵을 먹어요.', 'I eat bread in the morning.'],
      'present-formal': ['한국 사람들은 설날에 떡국을 먹습니다.', 'Koreans eat rice-cake soup on Lunar New Year.'],
      'past-casual': ['너 밥 먹었어?', 'Have you eaten? (a common way to say “how are you?”)'],
      'past-polite': ['어제 친구하고 삼겹살을 먹었어요.', 'I had grilled pork belly with a friend yesterday.'],
      'past-formal': ['회의 전에 간단히 점심을 먹었습니다.', 'We had a quick lunch before the meeting.'],
      'future-casual': ['오늘은 집에서 라면 먹을 거야.', 'I’m going to have ramyeon at home today.'],
      'future-polite': ['저녁은 뭐 먹을 거예요?', 'What are you going to have for dinner?'],
      'future-formal': ['내일 점심은 회사 식당에서 먹을 겁니다.', 'We will have lunch in the company cafeteria tomorrow.'],
      command: ['식기 전에 먹으세요.', 'Eat it before it gets cold.'],
    },
    usage:
      '먹다 is the everyday verb for eating, and it is also used for taking medicine (약을 먹다) and even for getting older (나이를 먹다). ' +
      'When the eater is someone you respect, switch to the honorific 드시다 (드세요, 드셨어요); 잡수시다 is more deferential still and is mostly used for elderly people. ' +
      'The question 밥 먹었어? (or politely, 식사하셨어요?) is often just a friendly greeting.',
    mistake:
      'Using 먹다 for elders and guests. 먹으세요 is fine with friends and younger people, ' +
      'but 할머니가 먹어요 or telling a guest 많이 먹으세요 sounds off; the respectful choice is 드시다: 할머니가 드세요, 많이 드세요.',
  },

  gada: {
    examples: {
      'present-casual': ['어디 가?', 'Where are you going?'],
      'present-polite': ['저는 매일 버스로 학교에 가요.', 'I go to school by bus every day.'],
      'present-formal': ['이 버스는 서울역까지 갑니다.', 'This bus goes to Seoul Station.'],
      'past-casual': ['주말에 어디 갔어?', 'Where did you go over the weekend?'],
      'past-polite': ['작년에 부산에 갔어요.', 'I went to Busan last year.'],
      'past-formal': ['직원들은 모두 집에 갔습니다.', 'All the employees have gone home.'],
      'future-casual': ['이번 주말에 바다에 갈 거야.', 'I’m going to the beach this weekend.'],
      'future-polite': ['내일 병원에 갈 거예요.', 'I’m going to the hospital tomorrow.'],
      'future-formal': ['다음 달에 일본으로 출장을 갈 겁니다.', 'I will go on a business trip to Japan next month.'],
      command: ['안녕히 가세요.', 'Goodbye. (said to someone who is leaving)'],
    },
    usage:
      '가다 is movement away from where the speaker is; movement toward the speaker uses 오다. ' +
      'The destination takes 에 (학교에 가요), and a purpose takes -(으)러: 밥 먹으러 가요 means “I’m going to eat.” ' +
      '가다 also combines with other verbs to show movement away, as in 들어가다 (to go in) and 가져가다 (to take along).',
    mistake:
      'Marking the destination with 에서: ✗ 학교에서 가요 → ✓ 학교에 가요. ' +
      '에서 marks where you set off from or where an action happens, so 집에서 가요 means “I’m going from home.”',
  },

  oda: {
    examples: {
      'present-casual': ['버스 와! 빨리 뛰어.', 'The bus is coming! Run!'],
      'present-polite': ['밖에 비가 와요.', 'It’s raining outside.'],
      'present-formal': ['매년 많은 관광객이 제주도에 옵니다.', 'Many tourists come to Jeju Island every year.'],
      'past-casual': ['언제 왔어?', 'When did you get here?'],
      'past-polite': ['어제 눈이 많이 왔어요.', 'It snowed a lot yesterday.'],
      'past-formal': ['고객님께 택배가 왔습니다.', 'A package has arrived for you.'],
      'future-casual': ['너도 파티에 올 거야?', 'Are you coming to the party too?'],
      'future-polite': ['주말에 친구가 우리 집에 올 거예요.', 'A friend is coming over this weekend.'],
      'future-formal': ['오후에 다시 올 겁니다.', 'I will come back in the afternoon.'],
      command: ['어서 오세요.', 'Welcome, come on in.'],
    },
    usage:
      '오다 is movement toward the speaker’s current location: 친구가 우리 집에 와요 (“my friend comes to my place”). ' +
      'It is also how Korean talks about weather falling: 비가 오다 (to rain) and 눈이 오다 (to snow). ' +
      'Shops greet every customer with 어서 오세요, the -(으)세요 form of 오다.',
    mistake:
      'Saying 와요 for “I’m coming!” when you are heading toward someone. ' +
      'Korean takes the speaker’s point of view, so you say 지금 가요! (“I’m on my way!”); keep 오다 for movement toward where you are.',
  },

  boda: {
    examples: {
      'present-casual': ['뭐 봐?', 'What are you watching?'],
      'present-polite': ['저는 주말에 보통 영화를 봐요.', 'I usually watch movies over the weekend.'],
      'present-formal': ['저희 가족은 저녁마다 뉴스를 봅니다.', 'My family watches the news every evening.'],
      'past-casual': ['그 드라마 봤어?', 'Did you watch that drama?'],
      'past-polite': ['어제 공원에서 고양이를 봤어요.', 'I saw a cat in the park yesterday.'],
      'past-formal': ['지난주에 면접을 봤습니다.', 'I had a job interview last week.'],
      'future-casual': ['나 내일 시험 볼 거야.', 'I’m taking an exam tomorrow.'],
      'future-polite': ['오늘 밤에 축구 경기를 볼 거예요.', 'I’m going to watch the soccer game tonight.'],
      'future-formal': ['이번 주말에 새 집을 볼 겁니다.', 'I will look at a new apartment this weekend.'],
      command: ['여기 보세요.', 'Please look here.'],
    },
    usage:
      '보다 covers seeing, watching and looking. After the -아/어 form of another verb it means “try doing”: ' +
      '먹어 보세요 (“try eating it”), 입어 봐도 돼요? (“can I try it on?”). ' +
      'It also appears in set phrases such as 시험을 보다 (to take an exam) and 면접을 보다 (to have an interview), ' +
      'and the humble form 뵙다 is used for seeing someone senior: 내일 뵙겠습니다.',
    mistake:
      'Joining “try” with -고 instead of -아/어: ✗ 먹고 봐요 → ✓ 먹어 봐요. ' +
      '먹고 봐요 means “eat, and then watch,” not “try eating.”',
  },

  hada: {
    examples: {
      'present-casual': ['지금 뭐 해?', 'What are you doing right now?'],
      'present-polite': ['저는 매일 아침에 운동을 해요.', 'I exercise every morning.'],
      'present-formal': ['저는 은행에서 일을 합니다.', 'I work at a bank.'],
      'past-casual': ['숙제 다 했어?', 'Have you finished your homework?'],
      'past-polite': ['어제 친구랑 게임을 했어요.', 'I played games with a friend yesterday.'],
      'past-formal': ['오늘 회의에서 중요한 발표를 했습니다.', 'I gave an important presentation at today’s meeting.'],
      'future-casual': ['주말에 집 청소를 할 거야.', 'I’m going to clean the house this weekend.'],
      'future-polite': ['내일부터 다이어트를 할 거예요.', 'I’m starting a diet tomorrow.'],
      'future-formal': ['오후에 회의를 할 겁니다.', 'We will hold a meeting in the afternoon.'],
      command: ['숙제를 먼저 하세요.', 'Do your homework first, please.'],
    },
    usage:
      '하다 turns hundreds of nouns into verbs, such as 공부하다 (to study), 운동하다 (to exercise) and 사랑하다 (to love), and they all conjugate exactly like 하다. ' +
      'With these nouns you can attach 하다 directly (운동해요) or add the object particle (운동을 해요); both are correct. ' +
      'It also turns many nouns and roots into descriptive verbs, as in 깨끗하다 (to be clean) and 피곤하다 (to be tired).',
    mistake:
      'Applying the regular -아/어 rule and writing 하아요 or 하요. ' +
      '하 always becomes 해 before these endings: 해요, 했어요, 해서. You may see the old form 하여 in formal writing, but in speech it is always 해.',
  },

  sada: {
    examples: {
      'present-casual': ['뭐 사?', 'What are you buying?'],
      'present-polite': ['저는 보통 마트에서 과일을 사요.', 'I usually buy fruit at the supermarket.'],
      'present-formal': ['요즘 많은 사람들이 온라인으로 옷을 삽니다.', 'These days many people buy clothes online.'],
      'past-casual': ['새 신발 샀어?', 'Did you buy new shoes?'],
      'past-polite': ['어제 친구 생일 선물을 샀어요.', 'I bought a birthday present for my friend yesterday.'],
      'past-formal': ['작년에 처음으로 차를 샀습니다.', 'I bought a car for the first time last year.'],
      'future-casual': ['이번 달에 노트북 살 거야.', 'I’m going to buy a laptop this month.'],
      'future-polite': ['가는 길에 커피를 살 거예요.', 'I’m going to buy coffee on the way.'],
      'future-formal': ['다음 달에 새 휴대폰을 살 겁니다.', 'I will buy a new phone next month.'],
      command: ['이거 하나 사세요. 정말 싸요.', 'Buy one of these. They’re really cheap.'],
    },
    usage:
      '사다 is the everyday verb for buying; the price takes 에: 만 원에 샀어요 (“I bought it for 10,000 won”). ' +
      'It also means treating someone, especially to food or drinks: 오늘은 내가 살게 means “today it’s on me.” ' +
      'Add 주다 to buy something for someone: 동생한테 책을 사 줬어요.',
    mistake:
      'Mixing up 사다 (to buy) and 살다 (to live): ✗ 빵을 살아요 → ✓ 빵을 사요. ' +
      'Some forms really do overlap, such as 살 거예요 and 사세요, so let the object or the place tell you which verb it is.',
  },

  jada: {
    examples: {
      'present-casual': ['아기 자. 조용히 해.', 'The baby’s asleep. Be quiet.'],
      'present-polite': ['저는 보통 열한 시에 자요.', 'I usually go to bed at eleven.'],
      'present-formal': ['고양이는 하루에 열다섯 시간 정도 잡니다.', 'Cats sleep about fifteen hours a day.'],
      'past-casual': ['어젯밤에 잘 잤어?', 'Did you sleep well last night?'],
      'past-polite': ['어제 너무 피곤해서 일찍 잤어요.', 'I was so tired yesterday that I went to bed early.'],
      'past-formal': ['그날 밤은 호텔에서 잤습니다.', 'That night we slept at a hotel.'],
      'future-casual': ['나 오늘은 일찍 잘 거야.', 'I’m going to bed early tonight.'],
      'future-polite': ['주말에는 늦게까지 잘 거예요.', 'I’m going to sleep in this weekend.'],
      'future-formal': ['오늘 밤은 친구 집에서 잘 겁니다.', 'I will sleep at a friend’s place tonight.'],
      command: ['내일 일찍 일어나야 하니까 일찍 자세요.', 'You have to get up early tomorrow, so go to bed early.'],
    },
    usage:
      '자다 means to sleep or go to bed; 잠을 자다 says the same thing with the noun 잠 (sleep). ' +
      'To fall asleep is 잠들다, and to oversleep is 늦잠을 자다. ' +
      'Friends say 잘 자 (“good night”), but for elders the honorific 주무시다 is used: 안녕히 주무세요.',
    mistake:
      'Saying 안녕히 자세요 to an older person. The respectful good-night is 안녕히 주무세요; 자세요 is fine for friends and younger people.',
  },

  juda: {
    examples: {
      'present-casual': ['그거 나 줘.', 'Give me that.'],
      'present-polite': ['부모님이 매달 용돈을 줘요.', 'My parents give me spending money every month.'],
      'present-formal': ['이 카페는 커피를 사면 쿠키를 하나 줍니다.', 'This café gives you a cookie when you buy a coffee.'],
      'past-casual': ['누가 이 꽃 줬어?', 'Who gave you these flowers?'],
      'past-polite': ['친구가 생일 선물로 책을 줬어요.', 'A friend gave me a book for my birthday.'],
      'past-formal': ['회사가 직원들에게 보너스를 줬습니다.', 'The company gave its employees a bonus.'],
      'future-casual': ['이거 동생한테 줄 거야.', 'I’m going to give this to my younger sibling.'],
      'future-polite': ['남은 음식은 강아지한테 줄 거예요.', 'I’m going to give the leftovers to the dog.'],
      'future-formal': ['참가자 모두에게 기념품을 줄 겁니다.', 'We will give every participant a souvenir.'],
      command: ['물 좀 주세요.', 'Some water, please.'],
    },
    usage:
      '주다 means to give, and 주세요 is the standard way to ask for something: 이거 주세요 (“this one, please”). ' +
      'After the -아/어 form of another verb, 주다 means doing something for someone: 도와주세요 (“please help me”), 사 줄게 (“I’ll buy it for you”). ' +
      'When giving to someone senior, use the humble 드리다 instead.',
    mistake:
      'Using 주다 when the receiver is senior to you: ✗ 할머니께 선물을 줬어요 → ✓ 할머니께 선물을 드렸어요.',
  },

  batda: {
    examples: {
      'present-casual': ['전화 좀 받아.', 'Answer the phone.'],
      'present-polite': ['저는 매달 25일에 월급을 받아요.', 'I get paid on the 25th of every month.'],
      'present-formal': ['이 식당은 현금만 받습니다.', 'This restaurant only takes cash.'],
      'past-casual': ['내 메시지 받았어?', 'Did you get my message?'],
      'past-polite': ['생일에 꽃을 받았어요.', 'I got flowers for my birthday.'],
      'past-formal': ['메일 잘 받았습니다.', 'I received your email, thank you.'],
      'future-casual': ['이번 달 말에 보너스 받을 거야.', 'I’m getting a bonus at the end of this month.'],
      'future-polite': ['다음 주에 건강 검진을 받을 거예요.', 'I’m getting a health checkup next week.'],
      'future-formal': ['내일부터 신청서를 받을 겁니다.', 'We will accept applications starting tomorrow.'],
      command: ['이거 받으세요. 작은 선물이에요.', 'Please take this. It’s a small gift.'],
    },
    usage:
      '받다 means to receive, get or accept, and it covers more than gifts: 전화를 받다 (to answer the phone), 카드를 받다 (to accept cards). ' +
      'It is also used for services and treatment, as in 검사를 받다 (to get a test) and 수술을 받다 (to have surgery). ' +
      'With some nouns it works like an English passive: 칭찬을 받다 (to be praised), 사랑을 받다 (to be loved).',
    mistake:
      'Treating 받다 as a ㄷ-irregular verb: ✗ 발아요 → ✓ 받아요. ' +
      'Only some ㄷ-final verbs, like 듣다 and 걷다, change ㄷ to ㄹ; 받다, 닫다 and 믿다 keep their ㄷ.',
  },

  ikda: {
    examples: {
      'present-casual': ['뭐 읽어?', 'What are you reading?'],
      'present-polite': ['저는 자기 전에 책을 읽어요.', 'I read before going to bed.'],
      'present-formal': ['요즘 사람들은 종이 신문을 잘 안 읽습니다.', 'These days people rarely read print newspapers.'],
      'past-casual': ['내 메시지 읽었어?', 'Did you read my message?'],
      'past-polite': ['그 책은 벌써 두 번 읽었어요.', 'I’ve already read that book twice.'],
      'past-formal': ['보내 주신 자료는 모두 읽었습니다.', 'I’ve read all the materials you sent.'],
      'future-casual': ['쉬는 동안 소설 한 권 읽을 거야.', 'I’m going to read a novel during my time off.'],
      'future-polite': ['오늘은 이 장까지 읽을 거예요.', 'I’m going to read up to this chapter today.'],
      'future-formal': ['다음 시간에는 시를 읽을 겁니다.', 'In the next class we will read poetry.'],
      command: ['큰 소리로 읽으세요.', 'Please read it out loud.'],
    },
    usage:
      '읽다 means to read, whether books, messages or signs; to read something to someone is 읽어 주다: 책 읽어 줄게. ' +
      'Its ㄺ ending changes how it sounds: 읽다 is said [익따], 읽어요 [일거요], and 읽고 [일꼬].',
    mistake:
      'Pronouncing 읽다 as it is spelled. Before a vowel both consonants are heard (읽어요 [일거요]), ' +
      'before most consonants only ㄱ is (읽습니다 [익씀니다]), and before ㄱ only ㄹ is (읽고 [일꼬]).',
  },

  sseuda: {
    examples: {
      'present-casual': ['요즘 무슨 펜 써?', 'What pen are you using these days?'],
      'present-polite': ['저는 매일 일기를 써요.', 'I write in my diary every day.'],
      'present-formal': ['한국에서는 젓가락과 숟가락을 같이 씁니다.', 'In Korea, people use chopsticks and a spoon together.'],
      'past-casual': ['편지 다 썼어?', 'Have you finished writing the letter?'],
      'past-polite': ['이번 달에 돈을 너무 많이 썼어요.', 'I spent too much money this month.'],
      'past-formal': ['그 작가는 이 소설을 2년 동안 썼습니다.', 'The author spent two years writing this novel.'],
      'future-casual': ['이 돈은 여행에 쓸 거야.', 'I’m going to use this money for a trip.'],
      'future-polite': ['오늘 밤에 보고서를 쓸 거예요.', 'I’m going to write the report tonight.'],
      'future-formal': ['이 공간은 회의실로 쓸 겁니다.', 'We will use this space as a meeting room.'],
      command: ['여기에 이름을 쓰세요.', 'Please write your name here.'],
    },
    usage:
      '쓰다 has several everyday meanings: to write (편지를 쓰다), to use (컴퓨터를 쓰다), and to spend (돈을 쓰다). ' +
      'It is also the verb for putting on anything worn on the head or face: 모자를 쓰다, 안경을 쓰다, 마스크를 쓰다. ' +
      'A separate adjective 쓰다 means “bitter”: 이 약은 너무 써요.',
    mistake:
      'Using 입다 for hats and glasses: ✗ 모자를 입어요 → ✓ 모자를 써요. ' +
      'Korean uses 입다 for clothes, 신다 for shoes and socks, and 쓰다 for things on your head or face.',
  },

  deutda: {
    examples: {
      'present-casual': ['너 내 말 들어?', 'Are you listening to me?'],
      'present-polite': ['저는 운전할 때 음악을 들어요.', 'I listen to music when I drive.'],
      'present-formal': ['많은 학생들이 이 수업을 듣습니다.', 'Many students take this class.'],
      'past-casual': ['그 소식 들었어?', 'Did you hear the news?'],
      'past-polite': ['밖에서 이상한 소리를 들었어요.', 'I heard a strange noise outside.'],
      'past-formal': ['회의에서 고객들의 의견을 들었습니다.', 'We heard the clients’ feedback at the meeting.'],
      'future-casual': ['이번 학기에 한국어 수업 들을 거야.', 'I’m going to take a Korean class this semester.'],
      'future-polite': ['오늘은 집에서 팟캐스트를 들을 거예요.', 'I’m going to listen to a podcast at home today.'],
      'future-formal': ['다음 주에 전문가의 강의를 들을 겁니다.', 'Next week we will attend a lecture by an expert.'],
      command: ['잘 들으세요.', 'Listen carefully.'],
    },
    usage:
      '듣다 means both to listen and to hear, and students also use it for taking a class: 수업을 듣다. ' +
      '말을 듣다 means to do as you are told: 엄마 말 잘 들어 (“listen to your mother”). ' +
      'As a ㄷ-irregular verb, its ㄷ becomes ㄹ before a vowel (들어요, 들으세요) but stays before a consonant (듣고, 듣습니다).',
    mistake:
      'Keeping the ㄷ before a vowel: ✗ 듣어요 → ✓ 들어요. ' +
      'Note that 들어요 is also the polite form of 들다 (to hold, to carry), so 음악을 들어요 is “I listen to music” but 가방을 들어요 is “I carry a bag.”',
  },

  geotda: {
    examples: {
      'present-casual': ['나 매일 회사까지 걸어.', 'I walk to work every day.'],
      'present-polite': ['저는 저녁마다 공원에서 걸어요.', 'I walk in the park every evening.'],
      'present-formal': ['이 길은 하루에 수천 명이 걷습니다.', 'Thousands of people walk this path every day.'],
      'past-casual': ['오늘 만 보 걸었어.', 'I walked ten thousand steps today.'],
      'past-polite': ['비가 와서 우산을 쓰고 걸었어요.', 'It was raining, so I walked with an umbrella.'],
      'past-formal': ['우리는 해변을 따라 한 시간 동안 걸었습니다.', 'We walked along the beach for an hour.'],
      'future-casual': ['날씨 좋으니까 집까지 걸을 거야.', 'The weather’s nice, so I’m going to walk home.'],
      'future-polite': ['내일은 한강을 따라 걸을 거예요.', 'Tomorrow I’m going to walk along the Han River.'],
      'future-formal': ['다음 코스에서는 약 3km를 걸을 겁니다.', 'On the next route we will walk about 3 km.'],
      command: ['천천히 걸으세요.', 'Walk slowly, please.'],
    },
    usage:
      '걷다 means to walk. To say you go somewhere on foot, use 걸어서 with 가다 or 오다: 걸어서 10분 걸려요 (“it’s a ten-minute walk”). ' +
      'It is ㄷ-irregular: 걸어요, 걸었어요, but 걷고, 걷습니다. ' +
      'A different, regular 걷다 means to roll up or collect: 소매를 걷어요 (“I roll up my sleeves”).',
    mistake:
      'Putting the destination straight onto 걷다: ✗ 학교에 걸어요 → ✓ 학교에 걸어서 가요. ' +
      '걷다 describes the walking itself; to say where you walk to, use 걸어서 가다.',
  },

  mutda: {
    examples: {
      'present-casual': ['모르면 나한테 물어.', 'If you don’t know, ask me.'],
      'present-polite': ['길을 모르면 사람들한테 물어요.', 'When I don’t know the way, I ask people.'],
      'present-formal': ['기자들이 같은 질문을 계속 묻습니다.', 'Reporters keep asking the same question.'],
      'past-casual': ['걔한테 이유 물었어?', 'Did you ask them why?'],
      'past-polite': ['직원에게 출구가 어디인지 물었어요.', 'I asked an employee where the exit was.'],
      'past-formal': ['의사가 저에게 증상을 자세히 물었습니다.', 'The doctor asked me about my symptoms in detail.'],
      'future-casual': ['내일 친구한테 물을 거야.', 'I’m going to ask my friend tomorrow.'],
      'future-polite': ['면접에서 연봉에 대해 물을 거예요.', 'I’m going to ask about the salary in the interview.'],
      'future-formal': ['설문 조사에서 몇 가지를 물을 겁니다.', 'We will ask you a few questions in the survey.'],
      command: ['궁금한 게 있으면 언제든지 물으세요.', 'If you have any questions, feel free to ask.'],
    },
    usage:
      '묻다 (to ask) is ㄷ-irregular: 물어요, 물었어요, but 묻고, 묻습니다. ' +
      'In everyday speech 물어보다 is more common than plain 묻다: 물어볼게요 (“I’ll ask”). ' +
      'To ask someone senior, use the humble 여쭤보다: 선생님께 여쭤볼게요.',
    mistake:
      'Mixing up the three verbs spelled 묻다. Only “to ask” is irregular (물어요); ' +
      '묻다 “to bury” and 묻다 “to get on, to stain” are regular: 옷에 커피가 묻었어요 (“I got coffee on my clothes”).',
  },

  salda: {
    examples: {
      'present-casual': ['너 어디 살아?', 'Where do you live?'],
      'present-polite': ['저는 서울에 살아요.', 'I live in Seoul.'],
      'present-formal': ['이 섬에는 백 명 정도가 삽니다.', 'About a hundred people live on this island.'],
      'past-casual': ['어릴 때 어디서 살았어?', 'Where did you live when you were little?'],
      'past-polite': ['학생 때 기숙사에서 살았어요.', 'I lived in a dorm when I was a student.'],
      'past-formal': ['그 가족은 이 집에서 30년 동안 살았습니다.', 'That family lived in this house for 30 years.'],
      'future-casual': ['나중에 바닷가에서 살 거야.', 'One day I’m going to live by the sea.'],
      'future-polite': ['내년부터 혼자 살 거예요.', 'I’m going to live on my own starting next year.'],
      'future-formal': ['은퇴 후에는 시골에서 살 겁니다.', 'After retiring, I will live in the countryside.'],
      command: ['어디 사세요?', 'Where do you live? (polite)'],
    },
    usage:
      '살다 means to live, both to reside somewhere and to be alive; 살아 있다 means “to be alive.” ' +
      'The place can take either 에 or 에서: 서울에 살아요 and 서울에서 살아요 are both correct. ' +
      'As an ㄹ-stem verb it drops ㄹ before ㄴ, ㅂ and ㅅ: 삽니다, 사세요, 사는 곳 (“the place where I live”).',
    mistake:
      'Keeping the ㄹ where it drops: ✗ 어디 살세요? / 살습니다 → ✓ 어디 사세요? / 삽니다. ' +
      '사세요 can look like 사다 (to buy), but in 어디 사세요? it can only mean “live.”',
  },

  alda: {
    examples: {
      'present-casual': ['나도 알아.', 'I know.'],
      'present-polite': ['저 그 사람 알아요.', 'I know that person.'],
      'present-formal': ['그 문제는 저도 잘 압니다.', 'I’m well aware of that problem.'],
      'past-casual': ['알았어, 지금 갈게.', 'Okay, I’m on my way.'],
      'past-polite': ['네, 알았어요.', 'Okay, got it.'],
      'past-formal': ['네, 잘 알았습니다.', 'Yes, understood.'],
      'future-casual': ['민수도 그 얘기 알 거야.', 'Minsu probably knows about that too.'],
      'future-polite': ['그 식당은 유명해서 다들 알 거예요.', 'That restaurant is famous, so everyone probably knows it.'],
      'future-formal': ['결과는 다음 주에 알 겁니다.', 'We will know the results next week.'],
      command: ['혹시 이 근처에 약국이 어디 있는지 아세요?', 'Do you happen to know where there’s a pharmacy around here?'],
    },
    usage:
      '알다 means to know a fact or a person. The past 알았어(요) is used to mean “okay, got it,” and the formal 알겠습니다 means “understood.” ' +
      'To say you know how to do something, use -(으)ㄹ 줄 알다: 운전할 줄 알아요 (“I can drive”). ' +
      'As an ㄹ-stem verb it drops ㄹ before ㄴ, ㅂ and ㅅ: 압니다, 아세요, 아는 사람.',
    mistake:
      'Negating 알다 with 안: ✗ 안 알아요 → ✓ 몰라요. Korean has a separate verb for “not know,” 모르다.',
  },

  moreuda: {
    examples: {
      'present-casual': ['나도 몰라.', 'I don’t know either.'],
      'present-polite': ['죄송해요, 잘 몰라요.', 'Sorry, I’m not sure.'],
      'present-formal': ['저는 그 일에 대해 아무것도 모릅니다.', 'I know nothing about that.'],
      'past-casual': ['오늘이 네 생일인 줄 몰랐어.', 'I didn’t know today was your birthday.'],
      'past-polite': ['여기가 이렇게 유명한 줄 몰랐어요.', 'I didn’t know this place was so famous.'],
      'past-formal': ['그때는 그 사실을 몰랐습니다.', 'At the time, I didn’t know that.'],
      'future-casual': ['걔는 아마 아직 모를 거야.', 'They probably don’t know yet.'],
      'future-polite': ['이 길은 동네 사람들도 잘 모를 거예요.', 'Even locals probably don’t know this road well.'],
      'future-formal': ['결과는 끝까지 아무도 모를 겁니다.', 'No one will know the outcome until the very end.'],
      command: ['혹시 이 사람 모르세요?', 'Do you happen to know this person?'],
    },
    usage:
      '모르다 means “not to know” and is the normal negative of 알다. ' +
      'With -(으)ㄴ/는 줄 it means “had no idea that”: 비가 오는 줄 몰랐어요 (“I had no idea it was raining”). ' +
      'It is 르-irregular: 몰라요, 몰랐어요, but 모르고, 모릅니다.',
    mistake:
      'Conjugating it regularly: ✗ 모르어요 or 모라요 → ✓ 몰라요. ' +
      'In 르-irregular verbs, 르 becomes 라 or 러 and adds an extra ㄹ to the syllable before.',
  },

  bureuda: {
    examples: {
      'present-casual': ['누가 나 불러?', 'Is someone calling me?'],
      'present-polite': ['저는 샤워할 때 노래를 불러요.', 'I sing in the shower.'],
      'present-formal': ['한국에서는 선생님을 이름 대신 ‘선생님’이라고 부릅니다.', 'In Korea, people call teachers “선생님” instead of using their name.'],
      'past-casual': ['택시 불렀어?', 'Did you call a taxi?'],
      'past-polite': ['노래방에서 친구들하고 노래를 불렀어요.', 'I sang karaoke with friends.'],
      'past-formal': ['응급 상황이라 바로 구급차를 불렀습니다.', 'It was an emergency, so we called an ambulance right away.'],
      'future-casual': ['결혼식에서 내가 축가 부를 거야.', 'I’m going to sing at the wedding.'],
      'future-polite': ['이사할 때 친구들을 부를 거예요.', 'I’ll call some friends over when I move.'],
      'future-formal': ['지금부터 이름을 부를 겁니다.', 'I will now call out your names.'],
      command: ['필요하면 언제든지 저를 부르세요.', 'Call me any time you need me.'],
    },
    usage:
      '부르다 means to call someone over or call for something (택시를 부르다), to call something by a name (A를 B라고 부르다), and to sing (노래를 부르다). ' +
      'A separate adjective 부르다 means “full”: 배가 불러요 (“I’m full”). ' +
      'It is 르-irregular: 불러요, 불렀어요, but 부르고, 부릅니다.',
    mistake:
      'Using 부르다 for phone calls. 친구를 불렀어요 means “I called my friend over”; to say you phoned them, use 전화하다: 친구에게 전화했어요.',
  },

  masida: {
    examples: {
      'present-casual': ['뭐 마셔?', 'What are you drinking?'],
      'present-polite': ['저는 아침마다 커피를 마셔요.', 'I drink coffee every morning.'],
      'present-formal': ['저는 하루에 물을 여덟 잔 정도 마십니다.', 'I drink about eight glasses of water a day.'],
      'past-casual': ['어제 술 많이 마셨어?', 'Did you drink a lot last night?'],
      'past-polite': ['카페에서 녹차를 마셨어요.', 'I had green tea at a café.'],
      'past-formal': ['회식에서 맥주를 조금 마셨습니다.', 'I had a little beer at the company dinner.'],
      'future-casual': ['나 아이스 아메리카노 마실 거야.', 'I’m going to have an iced Americano.'],
      'future-polite': ['오늘은 술 안 마실 거예요.', 'I’m not going to drink today.'],
      'future-formal': ['건배할 때는 샴페인을 마실 겁니다.', 'We will drink champagne for the toast.'],
      command: ['물 많이 마시세요.', 'Drink plenty of water.'],
    },
    usage:
      '마시다 is used for drinks of every kind; 술을 마시다 specifically means drinking alcohol. ' +
      'The honorific is 드시다, which covers both eating and drinking: 커피 드실래요? (“would you like some coffee?”). ' +
      'Casually, 한잔하다 means to have a drink together: 오늘 한잔할까?',
    mistake:
      'Using 마시다 for soup or pills: ✗ 국을 마셔요, 약을 마셔요 → ✓ 국을 먹어요, 약을 먹어요. Korean “eats” both.',
  },

  baeuda: {
    examples: {
      'present-casual': ['요즘 뭐 배워?', 'What are you learning these days?'],
      'present-polite': ['저는 주말마다 기타를 배워요.', 'I take guitar lessons every weekend.'],
      'present-formal': ['학생들은 이 수업에서 한글을 배웁니다.', 'In this class, students learn Hangul.'],
      'past-casual': ['수영 언제 배웠어?', 'When did you learn to swim?'],
      'past-polite': ['할머니한테서 김치 만드는 법을 배웠어요.', 'I learned how to make kimchi from my grandmother.'],
      'past-formal': ['이번 프로젝트를 통해 많은 것을 배웠습니다.', 'I learned a lot from this project.'],
      'future-casual': ['올해는 운전 배울 거야.', 'I’m going to learn to drive this year.'],
      'future-polite': ['다음 달부터 요가를 배울 거예요.', 'I’m going to start learning yoga next month.'],
      'future-formal': ['오늘은 존댓말을 배울 겁니다.', 'Today we will learn honorific speech.'],
      command: ['젊을 때 많이 배우세요.', 'Learn as much as you can while you’re young.'],
    },
    usage:
      '배우다 means to learn, usually from a teacher, a class or someone with experience; the teacher takes 한테서 or 에게서. ' +
      'To learn how to do something, use -는 법을 배우다: 요리하는 법을 배워요. ' +
      'For studying on your own with books, 공부하다 is the usual verb.',
    mistake:
      'Using 배우다 for studying on your own: ✗ 도서관에서 배워요 → ✓ 도서관에서 공부해요. ' +
      '배우다 suggests someone or something is teaching you.',
  },

  gareuchida: {
    examples: {
      'present-casual': ['너 아직도 학원에서 영어 가르쳐?', 'Are you still teaching English at the academy?'],
      'present-polite': ['저는 학교에서 음악을 가르쳐요.', 'I teach music at a school.'],
      'present-formal': ['이 학교는 외국인에게 한국어를 가르칩니다.', 'This school teaches Korean to foreigners.'],
      'past-casual': ['누가 너한테 요리 가르쳤어?', 'Who taught you to cook?'],
      'past-polite': ['동생한테 자전거 타는 법을 가르쳤어요.', 'I taught my younger sibling to ride a bike.'],
      'past-formal': ['저는 10년 동안 고등학교에서 과학을 가르쳤습니다.', 'I taught science at a high school for ten years.'],
      'future-casual': ['이번 여름에 아이들한테 수영 가르칠 거야.', 'This summer I’m going to teach kids to swim.'],
      'future-polite': ['다음 학기에는 신입생을 가르칠 거예요.', 'Next semester I’m going to teach new students.'],
      'future-formal': ['이 과정에서는 기초 문법을 가르칠 겁니다.', 'In this course we will teach basic grammar.'],
      command: ['선생님은 무슨 과목을 가르치세요?', 'What subject do you teach?'],
    },
    usage:
      '가르치다 means to teach; the learner takes 에게 or 한테: 아이들에게 영어를 가르쳐요. ' +
      '가르쳐 주다 is also used for telling someone information, though 알려 주다 is more common: 전화번호 좀 알려 주세요.',
    mistake:
      'Confusing 가르치다 (to teach) with 가리키다 (to point at): ✗ 손가락으로 지도를 가르쳤어요 → ✓ 손가락으로 지도를 가리켰어요. ' +
      'Native speakers often mix them up in speech, but they are different words.',
  },

  ilhada: {
    examples: {
      'present-casual': ['너 요즘 어디서 일해?', 'Where are you working these days?'],
      'present-polite': ['저는 병원에서 일해요.', 'I work at a hospital.'],
      'present-formal': ['저희 회사는 주 4일 일합니다.', 'Our company works a four-day week.'],
      'past-casual': ['어제 몇 시까지 일했어?', 'How late did you work yesterday?'],
      'past-polite': ['학생 때 카페에서 일했어요.', 'I worked at a café when I was a student.'],
      'past-formal': ['저는 5년 동안 마케팅 분야에서 일했습니다.', 'I worked in marketing for five years.'],
      'future-casual': ['이번 주말에도 일할 거야.', 'I’m working this weekend too.'],
      'future-polite': ['졸업하면 해외에서 일할 거예요.', 'After I graduate, I’m going to work abroad.'],
      'future-formal': ['새 직원은 다음 주부터 일할 겁니다.', 'The new employee will start work next week.'],
      command: ['무리하지 말고 쉬면서 일하세요.', 'Don’t overdo it. Take breaks while you work.'],
    },
    usage:
      '일하다 means to work at a job; the workplace takes 에서: 은행에서 일해요. ' +
      'Like other noun + 하다 verbs it can also be split: 일을 해요. ' +
      'To ask what someone does for a living, Koreans usually say 무슨 일 하세요?',
    mistake:
      'Using 일하다 for machines: ✗ 컴퓨터가 일 안 해요 → ✓ 컴퓨터가 안 돼요 (or 작동이 안 돼요). 일하다 is only for people doing work.',
  },

  gongbuhada: {
    examples: {
      'present-casual': ['너 지금 공부해?', 'Are you studying right now?'],
      'present-polite': ['저는 도서관에서 공부해요.', 'I study at the library.'],
      'present-formal': ['한국 고등학생들은 밤늦게까지 공부합니다.', 'Korean high school students study late into the night.'],
      'past-casual': ['어제 몇 시간 공부했어?', 'How many hours did you study yesterday?'],
      'past-polite': ['혼자서 한국어를 공부했어요.', 'I studied Korean on my own.'],
      'past-formal': ['저는 3년 동안 일본에서 공부했습니다.', 'I studied in Japan for three years.'],
      'future-casual': ['오늘은 밤새 공부할 거야.', 'I’m going to study all night tonight.'],
      'future-polite': ['시험이 끝나도 계속 공부할 거예요.', 'I’m going to keep studying even after the exam.'],
      'future-formal': ['다음 시간에는 동사 활용을 공부할 겁니다.', 'In the next class we will study verb conjugation.'],
      command: ['열심히 공부하세요.', 'Study hard.'],
    },
    usage:
      '공부하다 is 공부 (study) + 하다, so it conjugates exactly like 하다. ' +
      'You can say 한국어를 공부해요 or 한국어 공부를 해요; both are natural. ' +
      'It means studying in general, often on your own; for learning a skill from someone, 배우다 is more natural.',
    mistake:
      'Using the object particle twice: ✗ 한국어를 공부를 해요 → ✓ 한국어를 공부해요 or 한국어 공부를 해요.',
  },

  saranghada: {
    examples: {
      'present-casual': ['사랑해. 잘 자.', 'I love you. Good night.'],
      'present-polite': ['저는 부모님을 정말 사랑해요.', 'I really love my parents.'],
      'present-formal': ['여러분, 사랑합니다!', 'I love you all!'],
      'past-casual': ['나 정말 너 사랑했어.', 'I really loved you.'],
      'past-polite': ['그 사람을 많이 사랑했어요.', 'I loved that person very much.'],
      'past-formal': ['우리 가족은 그 강아지를 정말 사랑했습니다.', 'Our family truly loved that dog.'],
      'future-casual': ['평생 너만 사랑할 거야.', 'I’ll love only you for the rest of my life.'],
      'future-polite': ['앞으로도 이 도시를 사랑할 거예요.', 'I’ll always love this city.'],
      'future-formal': ['팬들은 이 노래를 오래 사랑할 겁니다.', 'Fans will love this song for a long time.'],
      command: ['서로 사랑하세요.', 'Love one another.'],
    },
    usage:
      '사랑하다 is strong, heartfelt love, said to partners and family and shouted at concerts (사랑합니다!). ' +
      'In conversation the object is often dropped: 사랑해 alone means “I love you.” ' +
      'For things you enjoy, such as food and hobbies, 좋아하다 is the natural choice.',
    mistake:
      'Using 사랑하다 for liking things: 김치를 사랑해요 sounds like a dramatic declaration. ' +
      'What people actually say is 김치를 정말 좋아해요.',
  },

  joahada: {
    examples: {
      'present-casual': ['너 매운 음식 좋아해?', 'Do you like spicy food?'],
      'present-polite': ['저는 고양이를 좋아해요.', 'I like cats.'],
      'present-formal': ['많은 한국 사람들이 등산을 좋아합니다.', 'Many Koreans enjoy hiking.'],
      'past-casual': ['어렸을 때 무슨 만화 좋아했어?', 'What cartoons did you like as a kid?'],
      'past-polite': ['어렸을 때 공룡을 정말 좋아했어요.', 'I really loved dinosaurs as a kid.'],
      'past-formal': ['손님들이 새 메뉴를 많이 좋아했습니다.', 'Customers really liked the new menu.'],
      'future-casual': ['이 게임 너도 좋아할 거야.', 'You’ll like this game too.'],
      'future-polite': ['아이들이 이 공원을 좋아할 거예요.', 'The kids will like this park.'],
      'future-formal': ['젊은 고객들이 이 디자인을 좋아할 겁니다.', 'Younger customers will like this design.'],
      command: ['어떤 음식을 좋아하세요?', 'What kind of food do you like?'],
    },
    usage:
      '좋아하다 is a verb meaning to like, and the thing you like takes 을/를: 커피를 좋아해요. ' +
      'It is also how people confess romantic feelings: 너 좋아해 (“I like you”). ' +
      'Compare the adjective 좋다, which takes 이/가: 커피가 좋아요 also means “I like coffee.”',
    mistake:
      'Mixing the particles of 좋다 and 좋아하다: ✗ 커피가 좋아해요 or 커피를 좋아요 → ✓ 커피를 좋아해요 or 커피가 좋아요.',
  },

  mannada: {
    examples: {
      'present-casual': ['우리 몇 시에 만나?', 'What time are we meeting?'],
      'present-polite': ['저는 주말마다 친구들을 만나요.', 'I meet up with friends every weekend.'],
      'present-formal': ['두 정상은 내일 서울에서 만납니다.', 'The two leaders meet in Seoul tomorrow.'],
      'past-casual': ['어제 누구 만났어?', 'Who did you meet up with yesterday?'],
      'past-polite': ['길에서 우연히 고등학교 친구를 만났어요.', 'I ran into a high school friend on the street.'],
      'past-formal': ['저희는 학생 때 처음 만났습니다.', 'We first met as students.'],
      'future-casual': ['내일 여자 친구 만날 거야.', 'I’m meeting my girlfriend tomorrow.'],
      'future-polite': ['오후에 고객을 만날 거예요.', 'I’m meeting a client this afternoon.'],
      'future-formal': ['다음 주에 투자자들을 만날 겁니다.', 'We will meet with investors next week.'],
      command: ['두 분 다음에 꼭 한번 만나세요.', 'You two should definitely meet sometime.'],
    },
    usage:
      '만나다 means to meet, both by plan and by chance; the person takes 을/를 (친구를 만나요) or 하고/와 (친구하고 만나요). ' +
      'It can also mean dating someone: 우리 만나는 사이야 (“we’re seeing each other”). ' +
      'When meeting someone senior, the humble 뵙다 is used: 처음 뵙겠습니다 (“nice to meet you”).',
    mistake:
      'Marking the person with 에게: ✗ 친구에게 만났어요 → ✓ 친구를 만났어요 or 친구하고 만났어요.',
  },

  gidarida: {
    examples: {
      'present-casual': ['잠깐만 기다려.', 'Wait a sec.'],
      'present-polite': ['매일 아침 여기서 버스를 기다려요.', 'I wait for the bus here every morning.'],
      'present-formal': ['많은 팬들이 새 앨범을 기다립니다.', 'Many fans are waiting for the new album.'],
      'past-casual': ['많이 기다렸어?', 'Have you been waiting long?'],
      'past-polite': ['30분 동안 친구를 기다렸어요.', 'I waited for my friend for thirty minutes.'],
      'past-formal': ['저희는 이 날을 오래 기다렸습니다.', 'We have waited a long time for this day.'],
      'future-casual': ['끝날 때까지 밖에서 기다릴 거야.', 'I’ll wait outside until you’re done.'],
      'future-polite': ['연락 기다릴 거예요.', 'I’ll be waiting to hear from you.'],
      'future-formal': ['결과가 나올 때까지 기다릴 겁니다.', 'We will wait until the results come out.'],
      command: ['잠시만 기다리세요.', 'Please wait a moment.'],
    },
    usage:
      '기다리다 means to wait, and what you wait for is simply its object: 버스를 기다려요. ' +
      'In shops and on the phone you will hear the softer request 잠시만 기다려 주세요. ' +
      'To look forward to something, use 기대하다 instead.',
    mistake:
      'Adding a word for “for”: ✗ 버스를 위해 기다려요 → ✓ 버스를 기다려요. 위해 means “for the sake of.”',
  },

  nolda: {
    examples: {
      'present-casual': ['애들 밖에서 놀아.', 'The kids are playing outside.'],
      'present-polite': ['주말에는 보통 친구들이랑 놀아요.', 'Most weekends I hang out with friends.'],
      'present-formal': ['이 공원에서는 아이들이 안전하게 놉니다.', 'Children can play safely in this park.'],
      'past-casual': ['어제 누구랑 놀았어?', 'Who did you hang out with yesterday?'],
      'past-polite': ['바닷가에서 하루 종일 놀았어요.', 'I spent all day having fun at the beach.'],
      'past-formal': ['학생들은 쉬는 시간에 운동장에서 놀았습니다.', 'The students played in the schoolyard during the break.'],
      'future-casual': ['시험 끝나면 실컷 놀 거야.', 'Once exams are over, I’m going to have all the fun I want.'],
      'future-polite': ['내일은 하루 종일 놀 거예요.', 'I’m going to have fun all day tomorrow.'],
      'future-formal': ['이번 연휴에는 아이들과 캠핑장에서 놀 겁니다.', 'This holiday we will spend time with the kids at a campsite.'],
      command: ['재미있게 노세요!', 'Have fun!'],
    },
    usage:
      '놀다 covers children playing, adults hanging out, and simply being off work: 오늘 놀아요 (“I have the day off”). ' +
      '놀러 가다 and 놀러 오다 mean to visit for fun: 우리 집에 놀러 와 (“come over to my place”). ' +
      'As an ㄹ-stem verb it drops ㄹ before ㄴ, ㅂ and ㅅ: 놉니다, 노세요, 노는 아이들.',
    mistake:
      'Using 놀다 with a sport or instrument: ✗ 축구를 놀아요, 피아노를 놀아요 → ✓ 축구를 해요, 피아노를 쳐요.',
  },

  ulda: {
    examples: {
      'present-casual': ['왜 울어?', 'Why are you crying?'],
      'present-polite': ['아기가 배고프면 울어요.', 'The baby cries when it’s hungry.'],
      'present-formal': ['매미는 여름에 웁니다.', 'Cicadas sing in summer.'],
      'past-casual': ['그 영화 보고 울었어?', 'Did you cry at that movie?'],
      'past-polite': ['너무 감동해서 울었어요.', 'I was so moved that I cried.'],
      'past-formal': ['결승전이 끝나고 선수들은 모두 울었습니다.', 'When the final ended, all the players cried.'],
      'future-casual': ['그 장면 보면 너도 울 거야.', 'You’ll cry when you see that scene.'],
      'future-polite': ['이 책 마지막 장에서 분명히 울 거예요.', 'You’ll definitely cry at the last chapter of this book.'],
      'future-formal': ['이 장면에서 관객들은 모두 울 겁니다.', 'The whole audience will cry at this scene.'],
      command: ['실컷 우세요. 괜찮아요.', 'Go ahead and cry. It’s okay.'],
    },
    usage:
      '울다 means to cry, and it is also used for some animal and insect sounds: 새가 울어요 (“a bird is singing”), 매미가 울어요. ' +
      'Its opposite is 웃다 (to laugh). ' +
      'As an ㄹ-stem verb it drops ㄹ before ㄴ, ㅂ and ㅅ: 웁니다, 우세요, 우는 아이.',
    mistake:
      'Keeping the ㄹ before ㄴ: ✗ 울는 아이 → ✓ 우는 아이 (“a crying child”).',
  },

  utda: {
    examples: {
      'present-casual': ['왜 웃어?', 'Why are you laughing?'],
      'present-polite': ['우리 아기는 하루 종일 웃어요.', 'Our baby smiles all day long.'],
      'present-formal': ['그 코미디언이 나오면 관객들이 크게 웃습니다.', 'The audience laughs out loud whenever that comedian comes on.'],
      'past-casual': ['너 지금 웃었어?', 'Did you just laugh?'],
      'past-polite': ['친구 농담에 크게 웃었어요.', 'I laughed hard at my friend’s joke.'],
      'past-formal': ['사진을 찍을 때 모두 환하게 웃었습니다.', 'Everyone smiled brightly for the photo.'],
      'future-casual': ['이 영상 보면 너도 웃을 거야.', 'You’ll laugh when you see this video.'],
      'future-polite': ['힘들어도 계속 웃을 거예요.', 'Even when things are hard, I’m going to keep smiling.'],
      'future-formal': ['이 이야기를 들으면 모두 웃을 겁니다.', 'Everyone will laugh when they hear this story.'],
      command: ['자, 웃으세요! 하나, 둘, 셋!', 'Okay, smile! One, two, three!'],
    },
    usage:
      '웃다 covers both laughing and smiling; for a quiet smile you can also say 미소를 짓다. ' +
      '비웃다 means to laugh at someone, to mock. ' +
      'The related verb 웃기다 (literally “to make laugh”) is how you say something is funny: 그 영화 진짜 웃겨요.',
    mistake:
      'Using 웃다 to mean “funny”: ✗ 그 영상 웃어요 → ✓ 그 영상 웃겨요. 웃다 is what you do; 웃기다 is what makes you do it.',
  },

  antda: {
    examples: {
      'present-casual': ['여기 앉아.', 'Sit here.'],
      'present-polite': ['저는 보통 창가 자리에 앉아요.', 'I usually sit by the window.'],
      'present-formal': ['한국의 전통 식당에서는 바닥에 앉습니다.', 'In traditional Korean restaurants, people sit on the floor.'],
      'past-casual': ['어디 앉았어?', 'Where did you sit?'],
      'past-polite': ['너무 피곤해서 바닥에 앉았어요.', 'I was so tired that I sat down on the floor.'],
      'past-formal': ['손님들은 모두 자리에 앉았습니다.', 'All the guests took their seats.'],
      'future-casual': ['나 맨 앞자리에 앉을 거야.', 'I’m going to sit in the front row.'],
      'future-polite': ['우리는 뒤쪽에 앉을 거예요.', 'We’re going to sit at the back.'],
      'future-formal': ['신랑 가족은 오른쪽에 앉을 겁니다.', 'The groom’s family will sit on the right.'],
      command: ['이쪽으로 앉으세요.', 'Please sit over here.'],
    },
    usage:
      '앉다 is the action of sitting down; the place takes 에: 의자에 앉아요. ' +
      'To describe being seated, use 앉아 있다: 지금 앉아 있어요 (“I’m sitting down now”). ' +
      'Its ㄵ ending is pronounced [안따] in 앉다 and [안자요] in 앉아요.',
    mistake:
      'Using -고 있다 for “is sitting”: ✗ 의자에 앉고 있어요 → ✓ 의자에 앉아 있어요. ' +
      'For the state that results from sitting, standing or lying down, Korean uses -아/어 있다.',
  },

  seoda: {
    examples: {
      'present-casual': ['버스가 저기 서.', 'The bus stops over there.'],
      'present-polite': ['이 열차는 모든 역에 서요.', 'This train stops at every station.'],
      'present-formal': ['주말에는 이 앞에 장이 섭니다.', 'Every weekend, a market sets up out front.'],
      'past-casual': ['시계가 섰어.', 'The clock has stopped.'],
      'past-polite': ['한 시간 동안 줄을 섰어요.', 'I stood in line for an hour.'],
      'past-formal': ['그 가수는 처음으로 큰 무대에 섰습니다.', 'The singer performed on a big stage for the first time.'],
      'future-casual': ['나 맨 앞에 설 거야.', 'I’m going to stand at the very front.'],
      'future-polite': ['사진 찍을 때 제가 가운데에 설 거예요.', 'I’ll stand in the middle for the photo.'],
      'future-formal': ['택시는 건물 정문 앞에 설 겁니다.', 'The taxi will stop in front of the main entrance.'],
      command: ['한 줄로 서세요.', 'Please form a single line.'],
    },
    usage:
      '서다 means both to stand and, for vehicles and machines, to stop. ' +
      'Common phrases include 줄을 서다 (to line up) and 무대에 서다 (to perform on stage). ' +
      'Being on your feet is 서 있다, and getting up from sitting is 일어서다 or 일어나다.',
    mistake:
      'Using 서다 for the state of standing: ✗ 지금 서요 → ✓ 지금 서 있어요 (“I’m standing right now”).',
  },

  nupda: {
    examples: {
      'present-casual': ['피곤하면 좀 누워.', 'If you’re tired, lie down for a bit.'],
      'present-polite': ['저는 집에 오면 바로 소파에 누워요.', 'When I get home, I lie down on the couch right away.'],
      'present-formal': ['검사할 때 환자는 이 침대에 눕습니다.', 'During the test, the patient lies on this bed.'],
      'past-casual': ['벌써 누웠어?', 'Are you in bed already?'],
      'past-polite': ['머리가 아파서 일찍 누웠어요.', 'I had a headache, so I lay down early.'],
      'past-formal': ['아이들은 잔디밭에 누웠습니다.', 'The children lay down on the grass.'],
      'future-casual': ['집에 가자마자 누울 거야.', 'I’m lying down as soon as I get home.'],
      'future-polite': ['점심 먹고 잠깐 누울 거예요.', 'I’m going to lie down for a bit after lunch.'],
      'future-formal': ['마사지를 받을 때는 이 침대에 누울 겁니다.', 'You will lie on this bed for the massage.'],
      command: ['여기 누우세요.', 'Please lie down here.'],
    },
    usage:
      '눕다 is the action of lying down; being in a lying position is 누워 있다. ' +
      'It is ㅂ-irregular, so the ㅂ becomes 우 before a vowel: 누워요, 누우세요, but 눕고, 눕습니다. ' +
      '드러눕다 means to sprawl out or to take to your bed.',
    mistake:
      'Conjugating it regularly: ✗ 눕어요 → ✓ 누워요. ' +
      'And for “I’m lying in bed,” use 침대에 누워 있어요, not 침대에 눕고 있어요.',
  },

  dopda: {
    examples: {
      'present-casual': ['엄마 좀 도와.', 'Help your mother out a bit.'],
      'present-polite': ['저는 주말마다 부모님 가게 일을 도와요.', 'I help out at my parents’ shop every weekend.'],
      'present-formal': ['이 단체는 어려운 사람들을 돕습니다.', 'This charity helps people in need.'],
      'past-casual': ['이사할 때 누가 도왔어?', 'Who helped you move?'],
      'past-polite': ['주말에 친구 이사를 도왔어요.', 'I helped a friend move this weekend.'],
      'past-formal': ['많은 자원봉사자들이 피해 지역을 도왔습니다.', 'Many volunteers helped the affected area.'],
      'future-casual': ['내가 도울 거야, 걱정 마.', 'I’ll help, don’t worry.'],
      'future-polite': ['시간이 되면 행사 준비를 도울 거예요.', 'If I have time, I’m going to help get the event ready.'],
      'future-formal': ['저희 팀이 끝까지 도울 겁니다.', 'Our team will help you all the way.'],
      command: ['할 수 있을 때 서로 도우세요.', 'Help each other when you can.'],
    },
    usage:
      '돕다 means to help; in everyday speech 도와주다 is even more common: 도와주세요! (“help me, please!”). ' +
      'To offer help to someone senior, use the humble 도와드리다: 제가 도와드릴게요. ' +
      'It is ㅂ-irregular, and unlike most of its class it takes 와: 도와요, 도왔어요.',
    mistake:
      'Using 워 like other ㅂ-irregulars: ✗ 도워요 → ✓ 도와요. ' +
      'Most ㅂ-irregular verbs take 워 (추워요, 쉬워요), but 돕다 and 곱다 take 와.',
  },

  chupda: {
    examples: {
      'present-casual': ['아, 추워!', 'Brr, I’m cold!'],
      'present-polite': ['오늘 정말 추워요.', 'It’s really cold today.'],
      'present-formal': ['서울의 겨울은 꽤 춥습니다.', 'Winters in Seoul are quite cold.'],
      'past-casual': ['어제 밖에 많이 추웠어?', 'Was it really cold out yesterday?'],
      'past-polite': ['스키장에서 너무 추웠어요.', 'It was freezing at the ski resort.'],
      'past-formal': ['올해 1월은 유난히 추웠습니다.', 'This January was unusually cold.'],
      'future-casual': ['밤에는 추울 거야. 겉옷 챙겨.', 'It’ll be cold at night. Bring a jacket.'],
      'future-polite': ['내일은 오늘보다 추울 거예요.', 'Tomorrow will be colder than today.'],
      'future-formal': ['이번 주말에는 기온이 영하로 떨어져 매우 추울 겁니다.', 'This weekend temperatures will drop below zero, so it will be very cold.'],
      command: ['안 추우세요?', 'Aren’t you cold?'],
    },
    usage:
      '춥다 is for cold weather and for feeling cold yourself: 저 추워요 (“I’m cold”). ' +
      'It is ㅂ-irregular: 추워요, 추웠어요, 추운 날씨, but 춥고, 춥습니다. ' +
      'Because it is an adjective, its -(으)세요 form is an honorific statement or question (안 추우세요?), not a command.',
    mistake:
      'Using 춥다 for cold things: ✗ 커피가 추워요 → ✓ 커피가 차가워요. ' +
      'Objects and food are 차갑다; if something hot has gone cold, say 식었어요.',
  },

  deopda: {
    examples: {
      'present-casual': ['너무 더워. 에어컨 좀 켜.', 'It’s so hot. Turn on the air conditioning.'],
      'present-polite': ['한국의 여름은 정말 더워요.', 'Summers in Korea are really hot.'],
      'present-formal': ['오늘 낮 기온이 35도까지 올라 매우 덥습니다.', 'Today’s high will reach 35°C, so it will be very hot.'],
      'past-casual': ['어제 밖에 더웠어?', 'Was it hot out yesterday?'],
      'past-polite': ['방이 너무 더웠어요.', 'The room was way too hot.'],
      'past-formal': ['작년 여름은 기록적으로 더웠습니다.', 'Last summer was record-breakingly hot.'],
      'future-casual': ['내일 엄청 더울 거야.', 'It’s going to be really hot tomorrow.'],
      'future-polite': ['오후에는 더 더울 거예요.', 'It’ll be even hotter in the afternoon.'],
      'future-formal': ['다음 주까지 계속 더울 겁니다.', 'It will stay hot through next week.'],
      command: ['더우세요? 창문 열까요?', 'Are you hot? Want me to open the window?'],
    },
    usage:
      '덥다 is for hot weather and for feeling hot. ' +
      'It is ㅂ-irregular: 더워요, 더웠어요, 더운 날, but 덥고, 덥습니다. ' +
      'Hot to the touch is a different word, 뜨겁다, and spicy is 맵다.',
    mistake:
      'Using 덥다 for hot food or drinks: ✗ 커피가 더워요 → ✓ 커피가 뜨거워요. And for spicy food: 이 음식은 매워요.',
  },

  swipda: {
    examples: {
      'present-casual': ['이거 진짜 쉬워.', 'This is really easy.'],
      'present-polite': ['한글은 배우기 쉬워요.', 'Hangul is easy to learn.'],
      'present-formal': ['이 앱은 누구나 쓰기 쉽습니다.', 'This app is easy for anyone to use.'],
      'past-casual': ['시험 쉬웠어?', 'Was the test easy?'],
      'past-polite': ['생각보다 운전이 쉬웠어요.', 'Driving was easier than I thought.'],
      'past-formal': ['이번 문제는 비교적 쉬웠습니다.', 'This question was relatively easy.'],
      'future-casual': ['걱정 마, 쉬울 거야.', 'Don’t worry, it’ll be easy.'],
      'future-polite': ['두 번째는 훨씬 쉬울 거예요.', 'The second time will be much easier.'],
      'future-formal': ['설명서를 보면 조립이 쉬울 겁니다.', 'With the manual, assembly will be easy.'],
      command: ['선생님은 요리가 쉬우세요?', 'Do you find cooking easy?'],
    },
    usage:
      '쉽다 means easy; with -기 it means “easy to do”: 만들기 쉬워요 (“it’s easy to make”). ' +
      'It can also mean “likely to”: 겨울에는 감기에 걸리기 쉬워요 (“it’s easy to catch a cold in winter”). ' +
      'It is ㅂ-irregular: 쉬워요, 쉬운 문제, but 쉽고, 쉽습니다.',
    mistake:
      'Confusing 쉽다 (easy) with 쉬다 (to rest): 쉬워요 means “it’s easy,” while 쉬어요 means “I’m resting.”',
  },

  eoryeopda: {
    examples: {
      'present-casual': ['이 문제 너무 어려워.', 'This problem is too hard.'],
      'present-polite': ['한국어 발음이 좀 어려워요.', 'Korean pronunciation is a bit difficult.'],
      'present-formal': ['이 질문에는 답하기 어렵습니다.', 'This question is hard to answer.'],
      'past-casual': ['시험 어려웠어?', 'Was the exam hard?'],
      'past-polite': ['처음에는 한국 생활이 어려웠어요.', 'Life in Korea was hard at first.'],
      'past-formal': ['작년에는 회사 사정이 어려웠습니다.', 'Last year the company went through a difficult time.'],
      'future-casual': ['처음엔 좀 어려울 거야.', 'It’ll be a bit hard at first.'],
      'future-polite': ['오늘 안에 끝내기는 어려울 거예요.', 'It’ll be hard to finish by the end of today.'],
      'future-formal': ['이번 주 안에 배송은 어려울 겁니다.', 'Delivery within this week will be difficult.'],
      command: ['한국어 공부가 어려우세요?', 'Do you find studying Korean difficult?'],
    },
    usage:
      '어렵다 means difficult, and with -기 it means “hard to do”: 이해하기 어려워요. ' +
      '어려운 사람들 refers to people in need, and 사정이 어렵다 means to be going through hard times. ' +
      'It is ㅂ-irregular: 어려워요, 어려운, but 어렵고, 어렵습니다.',
    mistake:
      'Taking 좀 어려울 것 같아요 literally. When someone says a request “seems a bit difficult,” it is usually a polite no, so don’t keep pushing.',
  },

  yeppeuda: {
    examples: {
      'present-casual': ['와, 이 꽃 진짜 예뻐.', 'Wow, this flower is so pretty.'],
      'present-polite': ['이 옷 정말 예뻐요.', 'This outfit is really pretty.'],
      'present-formal': ['제주도는 봄에 특히 예쁩니다.', 'Jeju Island is especially beautiful in spring.'],
      'past-casual': ['어제 노을 진짜 예뻤어.', 'The sunset yesterday was gorgeous.'],
      'past-polite': ['결혼식장이 정말 예뻤어요.', 'The wedding venue was really beautiful.'],
      'past-formal': ['이번 공연 무대가 아주 예뻤습니다.', 'The stage for this show was very pretty.'],
      'future-casual': ['이 원피스 너한테 예쁠 거야.', 'This dress will look pretty on you.'],
      'future-polite': ['벚꽃이 피면 이 길이 정말 예쁠 거예요.', 'When the cherry blossoms bloom, this street will be really pretty.'],
      'future-formal': ['완성되면 정원이 아주 예쁠 겁니다.', 'Once it’s finished, the garden will be very pretty.'],
      command: ['어머님이 정말 예쁘세요.', 'Your mother is really beautiful.'],
    },
    usage:
      '예쁘다 means pretty and is used for people, places and things; it can also praise how someone speaks or acts: 말을 예쁘게 하네요. ' +
      '아름답다 is a more formal or poetic “beautiful,” and for handsome men people usually say 잘생겼어요. ' +
      'It is 으-irregular: 예뻐요, 예뻤어요, but 예쁘고, 예쁩니다.',
    mistake:
      'Keeping the ㅡ: ✗ 예쁘어요 → ✓ 예뻐요. In 으-irregular words, ㅡ drops before -아/어.',
  },

  bappeuda: {
    examples: {
      'present-casual': ['미안, 나 지금 바빠.', 'Sorry, I’m busy right now.'],
      'present-polite': ['요즘 회사 일 때문에 너무 바빠요.', 'I’m really busy with work these days.'],
      'present-formal': ['연말에는 모든 직원이 바쁩니다.', 'Every employee is busy at the end of the year.'],
      'past-casual': ['어제 왜 이렇게 바빴어?', 'Why were you so busy yesterday?'],
      'past-polite': ['지난주에 이사 때문에 바빴어요.', 'I was busy with my move last week.'],
      'past-formal': ['이번 분기는 정말 바빴습니다.', 'This quarter was really busy.'],
      'future-casual': ['다음 주는 좀 바쁠 거야.', 'Next week is going to be a bit busy.'],
      'future-polite': ['이번 달은 계속 바쁠 거예요.', 'I’ll be busy all month.'],
      'future-formal': ['명절 전에는 우체국이 아주 바쁠 겁니다.', 'The post office will be very busy before the holidays.'],
      command: ['요즘 바쁘세요?', 'Have you been busy lately?'],
    },
    usage:
      '바쁘다 means busy, for people, places and schedules. ' +
      'It often softens a refusal or an apology: 요즘 좀 바빠서 연락을 못 했어요 (“I’ve been a bit busy, so I didn’t get in touch”). ' +
      'It is 으-irregular: 바빠요, 바빴어요, but 바쁘고, 바쁜 사람.',
    mistake:
      'Picking the wrong vowel after ㅡ drops: ✗ 바쁘어요 or 바뻐요 → ✓ 바빠요. ' +
      'The new vowel follows the syllable before: 바 has ㅏ, so it becomes 바빠요.',
  },

  apeuda: {
    examples: {
      'present-casual': ['머리 아파.', 'My head hurts.'],
      'present-polite': ['어제부터 목이 아파요.', 'My throat has been sore since yesterday.'],
      'present-formal': ['계단을 오를 때마다 무릎이 아픕니다.', 'My knee hurts every time I climb stairs.'],
      'past-casual': ['많이 아팠어?', 'Were you really sick?'],
      'past-polite': ['지난주에 감기 때문에 많이 아팠어요.', 'I was really sick with a cold last week.'],
      'past-formal': ['주사를 맞을 때 조금 아팠습니다.', 'It hurt a little when I got the injection.'],
      'future-casual': ['조금 아플 거야. 참아.', 'It’ll hurt a little. Hang in there.'],
      'future-polite': ['처음 며칠은 근육이 아플 거예요.', 'Your muscles will be sore for the first few days.'],
      'future-formal': ['마취가 풀리면 조금 아플 겁니다.', 'It will hurt a little once the numbness wears off.'],
      command: ['어디가 아프세요?', 'Where does it hurt?'],
    },
    usage:
      '아프다 means both “to hurt” and “to be sick.” The body part is the subject: 배가 아파요 (“my stomach hurts”). ' +
      'It is also used for emotional pain: 마음이 아파요 (“it breaks my heart”). ' +
      'For someone senior who is ill, use 편찮으시다: 할머니가 편찮으세요.',
    mistake:
      'Making the body part the object: ✗ 저는 머리를 아파요 → ✓ 저는 머리가 아파요.',
  },

  keuda: {
    examples: {
      'present-casual': ['이 신발 나한테 너무 커.', 'These shoes are too big for me.'],
      'present-polite': ['우리 집 강아지는 정말 커요.', 'Our dog is really big.'],
      'present-formal': ['이 공원은 생각보다 훨씬 큽니다.', 'This park is much bigger than you’d think.'],
      'past-casual': ['어릴 때도 키 컸어?', 'Were you tall as a kid too?'],
      'past-polite': ['방이 생각보다 컸어요.', 'The room was bigger than I expected.'],
      'past-formal': ['이번 태풍은 피해가 컸습니다.', 'This typhoon caused major damage.'],
      'future-casual': ['이 옷 너한테 좀 클 거야.', 'This top will probably be a bit big on you.'],
      'future-polite': ['아이들은 금방 클 거예요.', 'Kids grow up fast.'],
      'future-formal': ['이번 결정의 영향은 클 겁니다.', 'This decision will have a big impact.'],
      command: ['아버님이 키가 크세요.', 'Your father is tall.'],
    },
    usage:
      '크다 means big, and with 키 it means tall: 키가 커요. It also describes loud sounds: 소리가 커요. ' +
      'It can be used as a verb meaning to grow up: 아이가 많이 컸네요 (“your child has grown so much”). ' +
      'It is 으-irregular: 커요, 컸어요, but 크고, 큽니다.',
    mistake:
      'Using 높다 for tall people: ✗ 그 사람은 높아요 → ✓ 그 사람은 키가 커요. 높다 is for buildings and mountains.',
  },

  nappeuda: {
    examples: {
      'present-casual': ['너 진짜 나빠!', 'You’re so mean!'],
      'present-polite': ['오늘 공기가 나빠요.', 'The air quality is bad today.'],
      'present-formal': ['담배는 건강에 나쁩니다.', 'Smoking is bad for your health.'],
      'past-casual': ['어제 기분 나빴어?', 'Were you upset yesterday?'],
      'past-polite': ['여행 중에 날씨가 계속 나빴어요.', 'The weather was bad the whole trip.'],
      'past-formal': ['지난 분기 실적은 예상보다 나빴습니다.', 'Last quarter’s results were worse than expected.'],
      'future-casual': ['내일 날씨 나쁠 거야. 우산 챙겨.', 'The weather will be bad tomorrow. Take an umbrella.'],
      'future-polite': ['이 시간에는 연결 상태가 나쁠 거예요.', 'The connection will probably be bad at this time of day.'],
      'future-formal': ['미세먼지 때문에 내일 공기가 나쁠 겁니다.', 'Because of fine dust, air quality will be poor tomorrow.'],
      command: ['할아버지가 요즘 눈이 나쁘세요.', 'Grandpa’s eyesight has been poor lately.'],
    },
    usage:
      '나쁘다 means bad, and for a person it means mean or unkind. ' +
      'Common phrases: 기분이 나쁘다 (to be upset or offended), 눈이 나쁘다 (to have poor eyesight), 건강에 나쁘다 (bad for your health). ' +
      'In everyday speech 안 좋다 is a softer alternative: 오늘 컨디션이 안 좋아요.',
    mistake:
      'Saying 기분이 나빠요 when you just feel down. It suggests you were offended or annoyed; for feeling low, say 기분이 안 좋아요 or 우울해요.',
  },

  jota: {
    examples: {
      'present-casual': ['그래, 좋아!', 'Sure, sounds good!'],
      'present-polite': ['오늘 날씨가 정말 좋아요.', 'The weather is really nice today.'],
      'present-formal': ['이 호텔은 위치가 아주 좋습니다.', 'This hotel is in a great location.'],
      'past-casual': ['어제 공연 좋았어?', 'Was the show good last night?'],
      'past-polite': ['제주도 여행이 정말 좋았어요.', 'My trip to Jeju was really great.'],
      'past-formal': ['이번 행사 반응이 아주 좋았습니다.', 'The response to this event was very positive.'],
      'future-casual': ['같이 가면 더 좋을 거야.', 'It’ll be more fun if we go together.'],
      'future-polite': ['우산을 가져가는 게 좋을 거예요.', 'You’d better take an umbrella.'],
      'future-formal': ['내일은 날씨가 좋을 겁니다.', 'The weather will be nice tomorrow.'],
      command: ['어떤 게 더 좋으세요?', 'Which one do you prefer?'],
    },
    usage:
      '좋다 means good or nice, and 좋아요 on its own is an everyday “okay” or “sounds good.” ' +
      'With 이/가 it also expresses liking: 저는 여름이 좋아요 (“I like summer”). ' +
      '-는 게 좋을 거예요 is a gentle way to give advice: 일찍 가는 게 좋을 거예요 (“you’d better go early”).',
    mistake:
      'Using 을/를 with 좋다: ✗ 저는 커피를 좋아요 → ✓ 커피가 좋아요. ' +
      '좋다 is an adjective, so the thing you like is its subject; with 을/를, use the verb 좋아하다: 커피를 좋아해요.',
  },

  masitda: {
    examples: {
      'present-casual': ['이거 진짜 맛있어!', 'This is so good!'],
      'present-polite': ['이 집 떡볶이가 정말 맛있어요.', 'The tteokbokki here is really good.'],
      'present-formal': ['이 식당은 가격도 싸고 음식도 맛있습니다.', 'This restaurant is cheap and the food is delicious.'],
      'past-casual': ['어제 저녁 맛있었어?', 'Was dinner good last night?'],
      'past-polite': ['잘 먹었습니다. 정말 맛있었어요.', 'Thank you for the meal. It was delicious.'],
      'past-formal': ['오늘 식사 정말 맛있었습니다.', 'Today’s meal was really delicious.'],
      'future-casual': ['직접 만든 거니까 맛있을 거야.', 'I made it myself, so it’ll be good.'],
      'future-polite': ['이 소스를 넣으면 더 맛있을 거예요.', 'It’ll taste even better with this sauce.'],
      'future-formal': ['하루 지나면 김치가 더 맛있을 겁니다.', 'The kimchi will taste better after a day.'],
      command: ['할머니, 국 맛있으세요?', 'Grandma, is the soup good?'],
    },
    usage:
      '맛있다 is 맛 (taste) + 있다, literally “to have taste,” and its opposite is 맛없다. ' +
      'It is pronounced [마싣따] or [마딛따], and both are standard. ' +
      'Around meals you will hear 맛있게 드세요 (“enjoy your meal”) and, afterwards, 잘 먹었습니다.',
    mistake:
      'Making the negative with 안: 안 맛있어요 is understood, but the normal word is 맛없어요.',
  },

  jaemiitda: {
    examples: {
      'present-casual': ['이 게임 진짜 재미있어.', 'This game is really fun.'],
      'present-polite': ['한국어 공부는 재미있어요.', 'Studying Korean is fun.'],
      'present-formal': ['이 책은 아이들이 읽기에도 재미있습니다.', 'This book is fun for kids to read too.'],
      'past-casual': ['어제 파티 재미있었어?', 'Was the party fun last night?'],
      'past-polite': ['그 영화 정말 재미있었어요.', 'That movie was really good.'],
      'past-formal': ['오늘 강의 정말 재미있었습니다.', 'Today’s lecture was really interesting.'],
      'future-casual': ['같이 가자, 재미있을 거야.', 'Come with us, it’ll be fun.'],
      'future-polite': ['이 드라마 분명히 재미있을 거예요.', 'This drama is sure to be good.'],
      'future-formal': ['다음 시간은 더 재미있을 겁니다.', 'Next class will be even more fun.'],
      command: ['요즘 일은 재미있으세요?', 'Are you enjoying work these days?'],
    },
    usage:
      '재미있다 means fun or entertaining, and in speech it is often shortened to 재밌다. ' +
      'Its opposite, 재미없다, means boring. ' +
      'For “interesting” in the sense of thought-provoking, 흥미롭다 is closer; 재미있게 보내세요 means “have fun.”',
    mistake:
      'Saying 저는 재미있어요 to mean “I’m having fun”; it actually means “I’m a funny person.” ' +
      'Say the activity is fun (파티가 재미있어요) or use 재미있게 놀고 있어요.',
  },

  yeolda: {
    examples: {
      'present-casual': ['문 좀 열어.', 'Open the door.'],
      'present-polite': ['이 가게는 아침 9시에 문을 열어요.', 'This shop opens at 9 a.m.'],
      'present-formal': ['박물관은 월요일을 제외하고 매일 문을 엽니다.', 'The museum is open every day except Monday.'],
      'past-casual': ['누가 내 가방 열었어?', 'Who opened my bag?'],
      'past-polite': ['더워서 창문을 열었어요.', 'It was hot, so I opened the window.'],
      'past-formal': ['시청 앞에서 큰 축제를 열었습니다.', 'A big festival was held in front of City Hall.'],
      'future-casual': ['나중에 내 카페 열 거야.', 'Someday I’m going to open my own café.'],
      'future-polite': ['다음 달에 생일 파티를 열 거예요.', 'I’m going to throw a birthday party next month.'],
      'future-formal': ['내일 오후에 기자 회견을 열 겁니다.', 'We will hold a press conference tomorrow afternoon.'],
      command: ['답답하면 창문을 여세요.', 'If it’s stuffy, open the window.'],
    },
    usage:
      '열다 means to open doors, windows and boxes, to open a business, and to hold an event: 파티를 열다, 회의를 열다. ' +
      'For something that opens by itself or is opened, use 열리다: 문이 열려요. ' +
      'As an ㄹ-stem verb it drops ㄹ before ㄴ, ㅂ and ㅅ: 엽니다, 여세요, 여는 시간.',
    mistake:
      'Using 열다 without someone doing the opening: ✗ 문이 열어요 → ✓ 문이 열려요 (“the door opens”).',
  },

  datda: {
    examples: {
      'present-casual': ['창문 닫아. 추워.', 'Close the window. It’s cold.'],
      'present-polite': ['이 식당은 매주 월요일에 문을 닫아요.', 'This restaurant is closed every Monday.'],
      'present-formal': ['은행은 오후 4시에 문을 닫습니다.', 'The bank closes at 4 p.m.'],
      'past-casual': ['나올 때 문 닫았어?', 'Did you close the door when you left?'],
      'past-polite': ['바람이 불어서 창문을 닫았어요.', 'It was windy, so I closed the window.'],
      'past-formal': ['그 가게는 작년에 문을 닫았습니다.', 'That shop closed down last year.'],
      'future-casual': ['이거 끝나면 가게 닫을 거야.', 'I’m closing the shop once this is done.'],
      'future-polite': ['비가 오면 창문을 닫을 거예요.', 'I’ll close the windows if it rains.'],
      'future-formal': ['공사 때문에 내일은 이 출구를 닫을 겁니다.', 'This exit will be closed tomorrow because of construction.'],
      command: ['나가실 때 문을 닫으세요.', 'Please close the door on your way out.'],
    },
    usage:
      '닫다 means to close or shut. 문을 닫다 also means a business closing, either for the day or for good. ' +
      'For something that closes by itself or is closed, use 닫히다: 문이 닫혀요.',
    mistake:
      'Treating 닫다 as ㄷ-irregular: ✗ 달아요 → ✓ 닫아요. Like 받다, 닫다 keeps its ㄷ before a vowel.',
  },

  palda: {
    examples: {
      'present-casual': ['이 가게 김밥도 팔아?', 'Does this place sell gimbap too?'],
      'present-polite': ['저기 편의점에서 우산을 팔아요.', 'The convenience store over there sells umbrellas.'],
      'present-formal': ['이 시장에서는 신선한 해산물을 팝니다.', 'This market sells fresh seafood.'],
      'past-casual': ['너 차 팔았어?', 'Did you sell your car?'],
      'past-polite': ['안 쓰는 물건을 중고로 팔았어요.', 'I sold the things I don’t use secondhand.'],
      'past-formal': ['그 출판사는 첫 달에 만 권을 팔았습니다.', 'The publisher sold ten thousand copies in the first month.'],
      'future-casual': ['이사 가기 전에 소파 팔 거야.', 'I’m going to sell the couch before I move.'],
      'future-polite': ['주말 시장에서 직접 만든 쿠키를 팔 거예요.', 'I’m going to sell homemade cookies at the weekend market.'],
      'future-formal': ['신제품은 다음 달부터 온라인에서 팔 겁니다.', 'The new product will be sold online starting next month.'],
      command: ['이 가방 얼마에 파세요?', 'How much are you selling this bag for?'],
    },
    usage:
      '팔다 means to sell; the buyer takes 에게 and the price takes 에: 만 원에 팔아요. ' +
      'Its passive 팔리다 means “to sell” in the sense of being bought: 이 책은 잘 팔려요 (“this book sells well”). ' +
      'As an ㄹ-stem verb it drops ㄹ before ㄴ, ㅂ and ㅅ: 팝니다, 파세요, 파는 곳.',
    mistake:
      'Keeping the ㄹ in the honorific: ✗ 얼마에 팔세요? → ✓ 얼마에 파세요?',
  },

  ipda: {
    examples: {
      'present-casual': ['오늘 뭐 입어?', 'What are you wearing today?'],
      'present-polite': ['저는 회사에 정장을 입어요.', 'I wear a suit to work.'],
      'present-formal': ['한국 사람들은 명절에 한복을 입습니다.', 'Koreans wear hanbok on traditional holidays.'],
      'past-casual': ['새 옷 입었어?', 'Is that a new outfit?'],
      'past-polite': ['오늘은 따뜻하게 입었어요.', 'I dressed warmly today.'],
      'past-formal': ['신부는 하얀 드레스를 입었습니다.', 'The bride wore a white dress.'],
      'future-casual': ['파티에 이 원피스 입을 거야.', 'I’m going to wear this dress to the party.'],
      'future-polite': ['면접 때 검은색 정장을 입을 거예요.', 'I’m going to wear a black suit to the interview.'],
      'future-formal': ['모든 직원은 내일부터 새 유니폼을 입을 겁니다.', 'All employees will wear the new uniforms starting tomorrow.'],
      command: ['밖에 추우니까 코트 입으세요.', 'It’s cold out, so put on a coat.'],
    },
    usage:
      '입다 means to put on or wear clothes on your body. ' +
      'Korean has separate verbs for other items: 신다 for shoes and socks, 쓰다 for hats and glasses, 끼다 for rings and gloves, and 차다 for watches. ' +
      'To say what someone has on, use 입고 있다 or the past 입었다: 빨간 코트를 입었어요 can mean “I’m wearing a red coat.”',
    mistake:
      'Using 입다 for shoes: ✗ 신발을 입어요 → ✓ 신발을 신어요.',
  },
};

module.exports = { verbContent };
