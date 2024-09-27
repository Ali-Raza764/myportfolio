export const structure = (S) =>
  S.list()
    .title("Admin")
    .items([
      ...S.documentTypeListItems().map((item) =>
        S.documentTypeListItem(item.getId())
          .title(item.getTitle())
          .icon(item.getIcon())
      ),
    ]);
