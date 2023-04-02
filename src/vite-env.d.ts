/// <reference types="vite/client" />

interface DayDataSet extends DOMStringMap {
  date: string
  month: string
  year: string
  monthName: string
}

interface DayCell extends HTMLTableCellElement {
  dataset: DayDataSet
}

type DayFnMapper = <T extends DayCell>(cell: T) => void

interface TaskItem {
  subject: string
  person: string
  date: string
  terms: string
}

interface HTMLElementTagNameMap {
  ['type-calendar']: CalendarElement
}
