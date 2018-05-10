export class EmptyTitleError extends Error {
  constructor(message = 'Title can not be empty', details = null, cause = null) {
    super(message)
    this.cause = cause
    if (details) {
      this.details = details
    }
  }
}

export class NotUniqueTitleError extends Error {
  constructor(message = 'Value is not unique', details = null, cause = null) {
    super(message)
    this.cause = cause
    if (details) {
      this.details = details
    }
  }
}