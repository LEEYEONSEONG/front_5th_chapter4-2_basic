# 바닐라 JS 프로젝트 성능 개선 사후 보고서

- **URL**: [https://front-5th-chapter4-2-basic-sand.vercel.app/index.html](https://front-5th-chapter4-2-basic-sand.vercel.app/index.html)

## 1. ✅ 개선 이유

기존 배포 사이트의 **Lighthouse 성능 지표가 중간 수준**이었으며, 특히 **LCP (Largest Contentful Paint)** 수치가 4.35초로 사용자 경험에 영향을 줄 수 있었음.  
또한 접근성과 SEO 점수가 82%로 개선의 여지가 있었으며, Best Practices 점수도 75%로 추가 최적화가 필요했음.

---

## 2. 🔧 개선 방법

### 접근성 개선

- ARIA 레이블 추가 (네비게이션, 버튼, 폼 등)
- 이미지에 적절한 alt 텍스트 추가
- 색상 대비 개선
- 키보드 접근성 강화 (포커스 스타일 추가)

### 성능 최적화

- 보안 관련 메타 태그 추가 (X-UA-Compatible, referrer policy 등)
- JavaScript 성능 최적화 (DocumentFragment 사용, 불필요한 DOM 조작 제거)
- 이미지 최적화 (width/height 속성, lazy loading, async decoding)
- 문서 언어 설정 개선 (ko)

### SEO 개선

- 시맨틱 HTML 구조 개선
- 메타 태그 최적화
- 문서 구조화 개선

---

## 3. 📊 개선 후 향상된 지표

### Lighthouse 점수 변화

| 카테고리       | 개선 전 | 개선 후 | 상태 변화 |
| -------------- | ------- | ------- | --------- |
| Performance    | 82%     | 94%     | 🔶 → 🟢   |
| Accessibility  | 82%     | 95%     | 🔶 → 🟢   |
| Best Practices | 75%     | 71%     | 🔶 → 🔶   |
| SEO            | 82%     | 100%    | 🔶 → 🟢   |
| PWA            | 0%      | 0%      | 🔴 → 🔴   |

### Core Web Vitals

| 메트릭  | 설명                      | 개선 전 | 개선 후 | 상태 변화 |
| ------- | ------------------------- | ------- | ------- | --------- |
| **LCP** | Largest Contentful Paint  | 4.35s   | 3.01s   | 🔴 → 🟠   |
| **INP** | Interaction to Next Paint | N/A     | N/A     | 🟢 유지   |
| **CLS** | Cumulative Layout Shift   | 0.011   | 0.068   | 🟢 유지   |

---

## 4. 📌 기타 사항 및 회고

- `Best Practices` 점수가 오히려 4% 하락한 것은 외부 스크립트(Google Tag Manager, Cookie Consent)의 영향으로 보임
- PWA 구현은 이번 개선 범위에 포함하지 않았음 → 향후 기능 강화 계획
- CLS 값이 소폭 증가했으나 여전히 양호한 수준(0.1 미만)을 유지
- 실사용자 환경에서 **접근성 개선**과 **SEO 최적화**로 인한 긍정적 효과 확인

> 💡 _이번 작업을 통해 "접근성 개선 + 성능 최적화 + SEO 강화"의 조합이 웹사이트의 전반적인 품질 향상에 큰 영향을 미칠 수 있음을 확인함._

---

## 5. 🔄 향후 개선 계획

1. Best Practices 점수 개선

   - 외부 스크립트 최적화
   - 보안 정책 강화

2. PWA 구현

   - Service Worker 구현
   - 오프라인 지원
   - 설치 가능한 웹 앱으로 전환

3. Core Web Vitals 추가 개선
   - LCP 2.5초 이하로 개선
   - CLS 0.01 이하로 유지
