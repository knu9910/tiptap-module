# Tiptap Module

이 프로젝트는 Tiptap 에디터를 모듈화하여 Next 프로젝트에서 손쉽게 사용할 수 있도록 구성한 라이브러리입니다. 이 모듈은 Tiptap 에디터와 관련된 여러 기능을 분리하여 재사용 가능하게 만들었습니다. 메뉴 버튼 및 Tiptap Viewer 컴포넌트를 모듈화하여, 텍스트 편집 및 미리보기를 손쉽게 구현할 수 있습니다.

## 프로젝트 개요

- **Tiptap 에디터 모듈화**: 다양한 확장 기능을 포함한 Tiptap 에디터를 독립된 모듈로 구성하였으며, 이를 통해 필요에 맞는 커스터마이징이 용이합니다.
- **메뉴 버튼 모듈화**: Tiptap 에디터에서 사용되는 다양한 버튼(서식, 글꼴, 크기, 이미지 등)을 모듈화하여, 필요한 메뉴 버튼을 쉽게 추가하고 수정할 수 있습니다.
- **Tiptap Viewer 컴포넌트화**: Tiptap 에디터에서 작성된 콘텐츠를 미리보기 할 수 있는 Viewer 컴포넌트를 제공하여, 읽기 전용으로 콘텐츠를 표시할 수 있습니다.

## 주요 기능

- **에디터 기능**: Tiptap을 활용하여 텍스트 편집 기능을 구현하고, 다양한 확장 기능(이미지 삽입, 글꼴 설정, 텍스트 서식 등)을 제공
- **메뉴 버튼 모듈화**: 사용자 정의 메뉴 버튼을 쉽게 구성할 수 있으며, 각 버튼의 기능을 확장하거나 수정할 수 있음
- **Tiptap Viewer**: 편집된 콘텐츠를 미리보기할 수 있는 Viewer를 제공, 읽기 전용 모드로 텍스트와 서식을 그대로 렌더링
- **확장성**: 새로운 버튼을 추가하거나 기능을 확장하는 것이 매우 간단하여, 다양한 프로젝트에 쉽게 통합 가능

## 설치

### 1. 의존성 설치

```bash
pnpm install
```

## 사용법

### 1. Tiptap 에디터 컴포넌트 사용

Tiptap 에디터는 `TiptapEditor` 컴포넌트를 통해 사용할 수 있습니다. 이 컴포넌트를 사용하여 텍스트 편집을 구현할 수 있습니다.

```tsx
import { TiptapEditor } from '@/components/tiptap/core';

const MyComponent = () => {
  return (
    <div>
      <EditorProvider>
        <TiptapEditor keyPath='' />
      </EditorProvider>
    </div>
  );
};
```

### 2. Tiptap Viewer 컴포넌트 사용

Tiptap에서 작성한 내용을 미리보기 할 수 있는 `TiptapViewer` 컴포넌트를 제공합니다. 작성한 콘텐츠를 `content` prop을 통해 전달하면, 미리보기 모드로 표시됩니다.

```tsx
import { TiptapViewer } from "@/components/tiptap/core";
import { useContentStore } from "@/components/tiptap/plugin";

const MyComponent = () => {
 const { content } = useContentStore();

  return <TiptapViewer content={content} />;
};
```

### 3. 메뉴 버튼 모듈화

에디터에서 사용하는 다양한 버튼을 `EditorMenu` 모듈을 통해 사용할 수 있습니다. 버튼을 원하는 위치에 배치하여 편집 기능을 쉽게 확장할 수 있습니다.

```tsx
import { TipTapFontColor, Bold } from '@/components/tiptap/menus';

const MyComponent = () => {
  return (
    <div>
     <TipTapFontColor />
     <Bold />
    </div>
  );
};
```

## 폴더 구조

```bash
src/
│
├── components/                      # 컴포넌트들
│   ├── tiptap/                      # Tiptap 관련 컴포넌트들
│   │   ├── context/                 # Tiptap의 Context와 Provider 설정
│   │   │   └── EditorProvider.tsx   # Tiptap 에디터의 상태와 컨텍스트 관리
│   │   ├── core/                    # 핵심 기능을 구현한 컴포넌트들
│   │   │   ├── TiptapEditor.tsx     # Tiptap 에디터 컴포넌트
│   │   │   └── TiptapViewer.tsx     # Tiptap 미리보기(읽기 전용) 컴포넌트
│   │   ├── extended/                # Tiptap 확장 기능들
│   │   │   └── CustomImage.tsx      # 예시 확장: 이미지 삽입 기능
│   │   ├── menus/                   # 에디터 메뉴 모듈화
│   │   │   └── EditorMenu.tsx       # 메뉴 관련 버튼 컴포넌트
│   │   ├── plugin/                  # 커스텀 훅과 플러그인 관련 파일들
│   │   │   └── useTiptapEditor.ts   # Tiptap 에디터 상태 관리 커스텀 훅
│   └── ui/                          # UI 관련 컴포넌트들 (버튼, 아이콘 등)
│       └── ...                      # 기타 UI 요소들
```



