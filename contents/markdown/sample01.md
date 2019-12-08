---
name: sample01
title: What is Lorem Ipsum?
tags:
  - タグ1
category: その他
created_at: '2019-02-16 00:08:00'
updated_at: '2019-02-16 00:00:00'
---

# TEST MESSAGE

- TEST
  複素数体であれば、任意の CM-タイプの A は、実際、数体である定義体（英語版）(field of definition)を持っている。自己準同型環の可能なタイプは、対合（ロサチの対合（英語版）(Rosati involution）をもつ環として既に分類されていて、CM-タイプのアーベル多様体の分類を導き出す。楕円曲線と同じような方法で CM-タイプの多様体を構成するには、Cd の中の格子 Λ から始め、アーベル多様体のリーマンの関係式（英語版）(Riemann relations)を考えに入れる必要がある。 CM-タイプ(CM-type)は、単位元での A の正則接空間上にある EndQ(A) の（最大）可換部分環 L の作用を記述したものである。単純な種類のスペクトル理論が適応され、L が固有ベクトルの基底を通して作用することを示すことができる。言い換えると、L は A の正則ベクトル場の上の対角行列を通した作用を持っている。L 自体がある複数の体の積というよりも数体であるという単純な場合には、CM-タイプは L の複素埋め込み（英語版）(complex embedding)のリストである。複素共役をなすペアとして、2d 個の複素埋め込みがあり、CM-タイプは各々のペアのから一つを選択する。そのような CM-タイプの全てが実現されることが知られている。

```js
const posts = await client.getEntries({
  content_type: process.env.CTF_BLOG_POST_TYPE_ID,
  'fields.slug': slug
})
```

```rb
$foo = 5;
class InstTest
  def set_foo(n)
    @foo = n
  end
  def set_bar(n)
    @bar = n
  end
end
```

```ruby
class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]

  PER = 8

  # GET /articles
  def index
    @articles = Article.select('id, title, tag, created_at').page(params[:page]).per(PER)
    render json: @articles
  end

  # GET /articles/1
  def show
    render json: @article
  end

  # GET /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created, location: @user
    else
      render json: @article.errors, status: :unprocessable_entry
    end
  end

  # PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entry
    end
  end

  # DELETE /articles/1
  def destroy
    @articles.destroy
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.fetch(:article, {})
  end
end
```
