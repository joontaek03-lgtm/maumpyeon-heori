# Graph Report - maumpyeon-heori  (2026-11-04)

## Corpus Check
- Corpus is ~5,531 words - fits in a single context window. You may not need a graph.

## Summary
- 75 nodes · 89 edges · 11 communities
- Extraction: 82% EXTRACTED · 16% INFERRED · 2% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.77)
- Token cost: 394,012 input · 0 output

## Community Hubs (Navigation)
- 수업 페이지 작성 규칙
- 노션 DB·영상 처리
- s1 전원주택 사진
- s4 임산부 명상 사진
- s2 거실 인테리어 사진
- s3 요가 코너 사진
- 프로젝트 개요·가이드라인
- 요통 원인·근거 논문
- 화면 렌더링·중단 신호
- 라우팅·인터랙션 함수
- 시기별 운동 프로그램

## God Nodes (most connected - your core abstractions)
1. `수업 페이지 (M/D 수업 내용(부위))` - 10 edges
2. `show() 해시 라우터` - 7 edges
3. `PROGS (시기별 운동 프로그램 데이터)` - 6 edges
4. `homeHTML()` - 6 edges
5. `s2 — Sunlit Living Room Interior` - 6 edges
6. `s3 — Sunlit Home Yoga/Meditation Corner Photo` - 6 edges
7. `운동별 블록 (영상·목적·체크 포인트)` - 5 edges
8. `맘편한 허리 프로젝트 (index.html)` - 5 edges
9. `PAGES (원인·증상·고려사항 세부 화면)` - 5 edges
10. `s1 - Hillside Farmhouse at Sunrise (aerial photo)` - 5 edges

## Surprising Connections (you probably didn't know these)
- `수업 기록 노션 업로드 지침` --conceptually_related_to--> `맘편한 허리 프로젝트 (index.html)`  [AMBIGUOUS]
  CLAUDE.md → index.html
- `운동별 블록 (영상·목적·체크 포인트)` --semantically_similar_to--> `progHTML()`  [INFERRED] [semantically similar]
  CLAUDE.md → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **수업 업로드 흐름 (메모·영상 → 수업 페이지 → 수업 기록·카톡)** — claude_빠른_메모함, claude_영상_업로드_방법, claude_수업_페이지, claude_수업_기록_db, claude_카톡_요약_메시지 [EXTRACTED 1.00]
- **시기별 운동 프로그램 (초기·중기·후기)** — index_progs, index_임신_초기_프로그램, index_임신_중기_프로그램, index_임신_후기_프로그램, index_proghtml [EXTRACTED 1.00]
- **해시 라우팅 SPA 렌더링** — index_show, index_homehtml, index_pages, index_proghtml, index_setweek, index_cine [EXTRACTED 1.00]
- **Farmhouse property scene composition** — media_s1_modern_farmhouse, media_s1_garden_landscape, media_s1_gravel_driveway, media_s1_forested_hills_sunrise [EXTRACTED 1.00]
- **Elements composing the cozy living-room scene** — media_s2_morning_sunlight, media_s2_living_room_furniture, media_s2_houseplants, media_s2_neutral_peach_palette [INFERRED 0.85]
- **Home yoga/meditation practice setup** — media_s3_yoga_mat, media_s3_meditation_cushion, media_s3_exercise_ball [INFERRED 0.85]
- **Home meditation setup props** — media_s4_yoga_mat, media_s4_meditation_cushion, media_s4_exercise_ball [INFERRED 0.85]

## Communities (11 total, 0 thin omitted)

### Community 0 - "수업 페이지 작성 규칙"
Cohesion: 0.20
Nodes (10): 10회 진척 리포트, 구글 캘린더 수업 일정, 노션 회원관리, 부위별 운동 모음 페이지, ⚡ 빠른 메모함, 수업 페이지 (M/D 수업 내용(부위)), 🏋️ 오늘의 수업 준비 (매일 오전), 📈 지난 수업과 비교 callout (+2 more)

### Community 1 - "노션 DB·영상 처리"
Cohesion: 0.32
Nodes (8): ffmpeg, 상담 내용 페이지, 📒 수업 기록 (DB), 영상 업로드 방법 (ffmpeg → Notion file upload), 영상 음성 받아쓰기 (faster-whisper), 운동별 블록 (영상·목적·체크 포인트), 📋 주간 점검 (매주 일요일), 👥 회원 명단 (DB)

### Community 2 - "s1 전원주택 사진"
Cohesion: 0.25
Nodes (8): s1 - Hillside Farmhouse at Sunrise (aerial photo), Forested Hills at Golden-hour Sunrise, Covered Front Porch, Garden Landscape (hydrangeas, grasses, lavender), Two-story Glass Window Bay, Gravel Driveway, Modern Farmhouse (two-story, metal roof, wood & stucco), Peaceful Rural Retreat Mood (마음 편한 휴식 이미지)

### Community 3 - "s4 임산부 명상 사진"
Cohesion: 0.32
Nodes (8): s4 — Prenatal Meditation Lifestyle Photo, Calm Sunlit Home Atmosphere, Exercise / Birthing Ball, Meditation Cushion (Zafu), Pregnant Woman (Subject), Prenatal Meditation / Mindfulness, Prenatal Wellness / Back Comfort Theme, Yoga Mat

### Community 4 - "s2 거실 인테리어 사진"
Cohesion: 0.38
Nodes (7): s2 — Sunlit Living Room Interior, Calm, Comfortable Mood (마음 편한 휴식), Monstera and Fiddle-Leaf Plants, Linen Sofa, Rattan Chair, Wooden Coffee Table, Morning Sunlight Through Sheer Curtains, Neutral Beige and Peach Color Palette, Warm Minimal Interior Style

### Community 5 - "s3 요가 코너 사진"
Cohesion: 0.38
Nodes (7): s3 — Sunlit Home Yoga/Meditation Corner Photo, Calm Mind-Body Wellness Mood (마음편 휴식 이미지), Cream Exercise Ball, Meditation Cushion (Zafu), Potted Monstera Plant, Warm Morning Sunlight Through Sheer Curtains, Sage Green Yoga Mat (partly rolled)

### Community 6 - "프로젝트 개요·가이드라인"
Cohesion: 0.33
Nodes (6): 수업 기록 노션 업로드 지침, 하이엔드짐, ACOG Committee Opinion No. 804 (2020), Davenport et al. 2019 Canadian guideline, 상명대 스포츠건강관리전공 ONE CORE, 맘편한 허리 프로젝트 (index.html)

### Community 7 - "요통 원인·근거 논문"
Cohesion: 0.40
Nodes (5): Aldabe et al. 2012 (relaxin & PGP), Global prevalence of LBP in pregnancy meta-analysis (BMC 2023), FACTORS (요통 유발 여섯 요인), Gutke et al. 2008 (muscle function), PAGES (원인·증상·고려사항 세부 화면)

### Community 8 - "화면 렌더링·중단 신호"
Cohesion: 0.40
Nodes (5): 호흡 따라하기 위젯 (4초 들숨·6초 날숨), homeHTML(), progHTML(), Stafne et al. 2012 RCT, STOP (운동 중단 신호)

### Community 9 - "라우팅·인터랙션 함수"
Cohesion: 0.40
Nodes (5): cine() 시네마틱 스크롤 인트로, countUp() 통계 숫자 애니메이션, setWeek() 주수 찾기, show() 해시 라우터, triOf() 주수→시기 매핑

### Community 10 - "시기별 운동 프로그램"
Cohesion: 0.50
Nodes (4): PROGS (시기별 운동 프로그램 데이터), 임신 중기 프로그램 (14–27주), 임신 초기 프로그램 (1–13주), 임신 후기 프로그램 (28–40주)

## Ambiguous Edges - Review These
- `수업 기록 노션 업로드 지침` → `맘편한 허리 프로젝트 (index.html)`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to
- `Exercise / Birthing Ball` → `Prenatal Wellness / Back Comfort Theme`  [AMBIGUOUS]
  media/s4.webp · relation: conceptually_related_to

## Knowledge Gaps
- **27 isolated node(s):** `하이엔드짐`, `노션 회원관리`, `⚠️ 통증 기록 callout`, `구글 캘린더 수업 일정`, `카톡 요약 메시지` (+22 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 28 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `운동별 블록 (영상·목적·체크 포인트)` connect `노션 DB·영상 처리` to `수업 페이지 작성 규칙`, `화면 렌더링·중단 신호`?**
  _High betweenness centrality (0.194) - this node is a cross-community bridge._
- **What connects `하이엔드짐`, `노션 회원관리`, `⚠️ 통증 기록 callout` to the rest of the system?**
  _27 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `progHTML()` connect `화면 렌더링·중단 신호` to `노션 DB·영상 처리`, `시기별 운동 프로그램`, `라우팅·인터랙션 함수`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Why does `수업 페이지 (M/D 수업 내용(부위))` connect `수업 페이지 작성 규칙` to `노션 DB·영상 처리`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `수업 기록 노션 업로드 지침` and `맘편한 허리 프로젝트 (index.html)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Exercise / Birthing Ball` and `Prenatal Wellness / Back Comfort Theme`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._