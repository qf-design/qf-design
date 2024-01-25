export interface FileItem {
  id: number;
  name: string;
  thumbUrl?: string;
}

export interface UploadProps {
  multiple?: boolean;
  accept?: string;
  maxFiles?: number;
  action: (payload: { file: File; formData: FormData }) => Promise<FileItem>;
  modelValue: FileItem[];
}
