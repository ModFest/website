FROM denoland/deno:alpine

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts
# This is actually a hack just to run the part of the script that creates the css
RUN deno task build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]