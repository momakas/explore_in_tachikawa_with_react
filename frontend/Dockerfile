# ベースイメージを指定
FROM node:19.4.0
# コンテナ内の作業ディレクトリを設定
WORKDIR /usr/app/explore_in_tachikawa_with_react

COPY ./explore_in_tachikawa_with_react/package*.json /usr/app/explore_in_tachikawa_with_react/
COPY ./explore_in_tachikawa_with_react/tsconfig*.json /usr/app/explore_in_tachikawa_with_react/
COPY ./explore_in_tachikawa_with_react/vite.config.ts /usr/app/explore_in_tachikawa_with_react/
COPY ./explore_in_tachikawa_with_react/index.html /usr/app/explore_in_tachikawa_with_react/
RUN npm i

EXPOSE 5173
CMD ["npm", "run", "dev" ]