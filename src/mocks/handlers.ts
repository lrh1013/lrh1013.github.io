import { http, HttpResponse } from "msw";

export const handlers = [

  // portfolio
  http.get("/api/portfolio", () => {
    return HttpResponse.json([
      { id: 1, title: "portfolio 프로젝트 1", description: "설명 1" },
      { id: 2, title: "portfolio 프로젝트 2", description: "설명 2" },
      { id: 3, title: "portfolio 프로젝트 3", description: "설명 3" },
    ]);
  }),

  // practice
  http.get("/api/practice", () => {
    return HttpResponse.json([
      { id: 1, title: "practice 프로젝트 1", description: "설명 1" },
      { id: 2, title: "practice 프로젝트 2", description: "설명 2" },
      { id: 3, title: "practice 프로젝트 3", description: "설명 3" },
    ]);
  }),
];
