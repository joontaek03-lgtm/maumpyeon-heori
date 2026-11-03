# 맘편한 허리 — 앱 출시 안내

## 구성
- `index.html` 등 웹 파일: GitHub Pages 웹사이트이자 앱 화면 (하나만 고치면 둘 다 바뀜)
- `manifest.webmanifest`, `sw.js`, `icons/`: 홈 화면에 설치하는 웹앱(PWA) · 오프라인 지원
- `android/`: 안드로이드 앱 프로젝트 (Capacitor)
- `.github/workflows/android.yml`: 푸시하면 GitHub가 앱을 자동으로 빌드

## 1. 휴대폰에서 테스트하기
1. GitHub 레포 → **Actions** → "안드로이드 앱 빌드" 최근 실행 클릭
2. 아래 **Artifacts**에서 `maumpyeon-heori-test-apk` 받기 → 압축 풀기
3. 안드로이드 폰에서 APK 열기 (출처를 알 수 없는 앱 설치 허용 필요)

## 2. Play 스토어 출시 준비
1. Google Play Console 개발자 계정 만들기 (25달러, 1회)
2. 서명 키 만들기 (한 번만, 잃어버리면 업데이트 불가 → 안전하게 보관)
   ```
   keytool -genkeypair -v -keystore release.keystore -alias momheori -keyalg RSA -keysize 2048 -validity 10000
   base64 -w0 release.keystore > keystore.txt
   ```
3. GitHub 레포 → Settings → Secrets and variables → Actions 에 4개 등록
   - `ANDROID_KEYSTORE_BASE64`: keystore.txt 내용
   - `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`(momheori), `ANDROID_KEY_PASSWORD`
4. Actions에서 다시 빌드 → `maumpyeon-heori-play-aab` 받기 → Play Console에 업로드
5. 새 개인 계정은 **테스터 12명 · 14일 비공개 테스트** 후 프로덕션 출시 가능

## 스토어 등록 때 필요한 것
- 앱 이름: 맘편한 허리 / 패키지명: `kr.onecore.maumpyeonheori` (첫 업로드 후 변경 불가)
- 개인정보처리방침 URL: https://joontaek03-lgtm.github.io/maumpyeon-heori/privacy.html
  (`privacy.html`의 문의 이메일을 먼저 채우기)
- 아이콘 512px: `icons/icon-512.png`
- 데이터 보안 설문: "수집하는 데이터 없음"
- 콘텐츠: 건강 정보 앱 → 의료 조언이 아님을 설명에 명시

## 내용을 고친 뒤
- 웹사이트: `index.html`만 고치고 main에 푸시하면 끝
- 오프라인 저장본도 새로 받게 하려면 `sw.js`의 `VERSION`을 올리기 (v1 → v2)
- 앱: 푸시하면 자동 빌드 → 새 AAB를 Play Console에 업로드
