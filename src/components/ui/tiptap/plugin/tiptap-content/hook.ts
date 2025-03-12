import { create } from 'zustand';

type TiptapContent = {
  content: string;
  tempContent: string;

  saveTempContent: (key: string, content: string) => void;
  setContent: (content: string) => void;
  getLocalContent: (key: string) => void;
};

export const useContentStore = create<TiptapContent>((set) => ({
  content: '', // 초기 콘텐츠 값 설정
  tempContent: '',

  saveTempContent: (key: string, content: string) => {
    set({ tempContent: content });
    localStorage.setItem(`${key}content`, content); // 로컬 스토리지에 저장
    alert('임시 저장되었습니다.');
  },
  getLocalContent: (key: string) => {
    const localTempContent = localStorage.getItem(`${key}content`);
    if (localTempContent) set({ tempContent: localTempContent });
  },
  setContent: (content: string) => set({ content }), // 실시간 콘텐츠 업데이트
}));
