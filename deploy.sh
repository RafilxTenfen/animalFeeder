GOOGLE_PROJECT_ID=animalfeeder-81959

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/animalfeeder \
  --project=$GOOGLE_PROJECT_ID

gcloud beta run deploy barkbark-api \
  --image gcr.io/$GOOGLE_PROJECT_ID/animalfeeder \
  --platform managed \
  --region us-central1 \
  --project=$GOOGLE_PROJECT_ID


gcloud builds submit --tag gcr.io/animalfeeder-81959/animalfeeder --project=animalfeeder-81959

gcloud beta run deploy animalfeeder-api --image gcr.io/animalfeeder-81959/animalfeeder --platform managed --region us-central1 --project=animalfeeder-81959