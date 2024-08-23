import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const S3_BUCKET_NAME = process.env.NEXT_PUBLIC_S3_BUCKET_NAME!
const REGION = process.env.NEXT_PUBLIC_S3_REGION!

export const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY!
  }
})

export const uploadAWS = async (file: File, path: string) => {
  const uploadParams = {
    Bucket: S3_BUCKET_NAME,
    Key: path,
    Body: file
  }

  try {
    const command = new PutObjectCommand(uploadParams)
    const response = await s3Client.send(command)
    const s3Url = `https://${uploadParams.Bucket}.s3.amazonaws.com/${uploadParams.Key}`

    return { response, s3Url }
  } catch (error) {
    console.error('Error uploading to AWS:', error)
    throw new Error('Failed to upload file to AWS S3')
  }
}
