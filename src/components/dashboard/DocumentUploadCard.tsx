
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Upload, File, X, FileText, Image, FileSpreadsheet, FilePresentationIcon } from "lucide-react";

const DocumentUploadCard = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select files to upload",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    // Mock upload process
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast({
        title: "Upload successful",
        description: `${files.length} file(s) uploaded successfully`,
      });
      setFiles([]);
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "An error occurred during upload. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const getFileIcon = (file: File) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    
    if (extension === "pdf") {
      return <FileText className="h-5 w-5 text-esg-red-600" />;
    } else if (["jpg", "jpeg", "png", "gif"].includes(extension || "")) {
      return <Image className="h-5 w-5 text-esg-blue-600" />;
    } else if (["xls", "xlsx", "csv"].includes(extension || "")) {
      return <FileSpreadsheet className="h-5 w-5 text-esg-green-600" />;
    } else if (["ppt", "pptx"].includes(extension || "")) {
      return <FilePresentationIcon className="h-5 w-5 text-esg-amber-600" />;
    } else {
      return <File className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Upload</CardTitle>
        <CardDescription>
          Upload documents for ESG analysis. We support PDF, Word, Excel, PowerPoint, and image files.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            isDragging ? "border-primary bg-primary/5" : "border-muted"
          }`}
        >
          <div className="flex flex-col items-center">
            <Upload className="h-10 w-10 text-muted-foreground mb-2" />
            <h3 className="text-lg font-medium">Drag files here</h3>
            <p className="text-sm text-muted-foreground mb-4">
              or click to browse files
            </p>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              multiple
              onChange={handleFileInputChange}
            />
            <label htmlFor="file-upload">
              <Button variant="outline" type="button" className="cursor-pointer">
                Select Files
              </Button>
            </label>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium mb-2">Selected Files ({files.length})</h4>
            <ul className="space-y-2 max-h-32 overflow-auto">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-muted/50 p-2 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    {getFileIcon(file)}
                    <span className="text-sm truncate max-w-[200px]">
                      {file.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(index)}
                    className="h-6 w-6"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleUpload}
          className="w-full"
          disabled={files.length === 0 || isUploading}
        >
          {isUploading ? "Uploading..." : "Upload files"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentUploadCard;
