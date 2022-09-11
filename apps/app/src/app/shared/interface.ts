export interface User {
  id: string,
  firstName: string,
  lastName: string,
  fullName: string,
  email: string,
  documents?: Document[]

}

export interface Document {
  id: string,
  type: "image/jpeg" | "image/png" | "image/jpg" | "image/pdf"
}

