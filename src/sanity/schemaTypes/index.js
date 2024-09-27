import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { blogType } from "./blogType";
import { authorType } from "./authorType";
import { projectType } from "./projectType";
import { skillType } from "./skillType";
import { contactType } from "./contactType";

export const schema = {
  name: "default",
  types: [
    projectType,
    skillType,
    contactType,
    blogType,
    categoryType,
    authorType,
    blockContentType,
  ],
};
