import { http, HttpResponse } from "msw";

export const handlers = [

  // portfolio
  http.get("/api/portfolio", () => {
    return HttpResponse.json([
      { id: 1, title: "portfolio 프로젝트 1", description: "설명 1" },
      { id: 2, title: "portfolio 프로젝트 2", description: "설명 2" },
      { id: 3, title: "portfolio 프로젝트 3", description: "설명 3" },
      { id: 4, title: "portfolio 프로젝트 4", description: "설명 4" },
      { id: 5, title: "portfolio 프로젝트 5", description: "설명 5" },
      { id: 6, title: "portfolio 프로젝트 6", description: "설명 6" },
      { id: 7, title: "portfolio 프로젝트 7", description: "설명 7" },
      { id: 8, title: "portfolio 프로젝트 8", description: "설명 8" },
      { id: 9, title: "portfolio 프로젝트 9", description: "설명 9" },
      { id: 10, title: "portfolio 프로젝트 10", description: "설명 10" },
      { id: 11, title: "portfolio 프로젝트 11", description: "설명 11" },
      { id: 12, title: "portfolio 프로젝트 12", description: "설명 12" },
      { id: 13, title: "portfolio 프로젝트 13", description: "설명 13" },
      { id: 14, title: "portfolio 프로젝트 14", description: "설명 14" },
      { id: 15, title: "portfolio 프로젝트 15", description: "설명 15" },
      { id: 16, title: "portfolio 프로젝트 16", description: "설명 16" },
      { id: 17, title: "portfolio 프로젝트 17", description: "설명 17" },
      { id: 18, title: "portfolio 프로젝트 18", description: "설명 18" },
      { id: 19, title: "portfolio 프로젝트 19", description: "설명 19" },
      { id: 20, title: "portfolio 프로젝트 20", description: "설명 20" },
    ]);
  }),

  // practice
  http.get("/api/practice", () => {
    return HttpResponse.json([
      { id: 1, title: "practice 프로젝트 1", description: "설명 1" },
      { id: 2, title: "practice 프로젝트 2", description: "설명 2" },
      { id: 3, title: "practice 프로젝트 3", description: "설명 3" },
      { id: 4, title: "practice 프로젝트 4", description: "설명 4" },
      { id: 5, title: "practice 프로젝트 5", description: "설명 5" },
      { id: 6, title: "practice 프로젝트 6", description: "설명 6" },
      { id: 7, title: "practice 프로젝트 7", description: "설명 7" },
      { id: 8, title: "practice 프로젝트 8", description: "설명 8" },
      { id: 9, title: "practice 프로젝트 9", description: "설명 9" },
      { id: 10, title: "practice 프로젝트 10", description: "설명 10" },
      { id: 11, title: "practice 프로젝트 11", description: "설명 11" },
      { id: 12, title: "practice 프로젝트 12", description: "설명 12" },
      { id: 13, title: "practice 프로젝트 13", description: "설명 13" },
      { id: 14, title: "practice 프로젝트 14", description: "설명 14" },
      { id: 15, title: "practice 프로젝트 15", description: "설명 15" },
      { id: 16, title: "practice 프로젝트 16", description: "설명 16" },
      { id: 17, title: "practice 프로젝트 17", description: "설명 17" },
      { id: 18, title: "practice 프로젝트 18", description: "설명 18" },
      { id: 19, title: "practice 프로젝트 19", description: "설명 19" },
      { id: 20, title: "practice 프로젝트 20", description: "설명 20" },
    ]);
  }),
];
