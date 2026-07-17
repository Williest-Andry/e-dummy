"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardAction,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { usePosts } from "@/hooks/post/use-post";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";

export default function PostsPage() {
  const { data } = usePosts();

  if (!data) return <p>error</p>;

  return (
    <section className="flex flex-col gap-6 mt-6">
      {data.posts.map((p) => (
        <Card className="relative mx-auto 2xl:w-250" key={p.id}>
          <CardHeader>
            <CardAction className="flex gap-2">
              {p.tags.map((t) => (
                <Badge variant={"secondary"} key={t}>
                  {t}
                </Badge>
              ))}
            </CardAction>
            <CardTitle>{p.title}</CardTitle>
            <CardDescription>{p.body}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Item>
              <ItemMedia variant="icon">
                <ThumbsUp />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{p.reactions.likes}</ItemTitle>
              </ItemContent>
            </Item>
            <Item>
              <ItemMedia variant="icon">
                <ThumbsDown />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{p.reactions.dislikes}</ItemTitle>
              </ItemContent>
            </Item>
            <Item>
              <ItemMedia variant="icon">
                <Eye />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{p.views}</ItemTitle>
              </ItemContent>
            </Item>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
