interface DetailProps {
  title: string
  detail_fields: Field[]
}

type Field = {
  type: string,
  label?: string,
  value?: string,
  hyperlink?: string
}