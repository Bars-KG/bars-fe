interface DetailProps {
  title: string
  detail_fields: Field[]
}

type Field = {
  type: string,
  key?: string,
  value?: string,
  hyperlink?: string
}