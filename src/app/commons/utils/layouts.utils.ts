import { HeaderComponent } from 'src/app/components/partials/header/header.component'


export function ContentOnly(content) {
  return {content}
}

export function HeaderContent(content) {
  return {
    header: HeaderComponent,
    content
  }
}
