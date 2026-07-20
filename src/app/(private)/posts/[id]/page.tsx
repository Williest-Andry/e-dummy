"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Item, ItemMedia, ItemContent, ItemTitle } from "@/components/ui/item";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@/components/ui/message";
import { Textarea } from "@/components/ui/textarea";
import { useCommentsByPostId } from "@/hooks/comment/use-comment";
import { usePost } from "@/hooks/post/use-post";
import { useUser } from "@/hooks/user/use-user";
import { ThumbsUp, ThumbsDown, Eye } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function PostDetails() {
  const { id } = useParams();

  const { data } = usePost(Number(id));

  const { data: user } = useUser(Number(data?.userId));

  const { data: comments } = useCommentsByPostId(Number(id));

  return (
    <section className="pl-100 flex flex-col mt-10 gap-20">
      <div className="w-full">
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <div>
          {data?.tags.map((t) => (
            <Badge key={t} variant={"secondary"}>
              {t}
            </Badge>
          ))}
        </div>

        <Item>
          <ItemMedia variant="icon">
            <Image
              src={user ? user?.image : "/empty-user.jpg"}
              alt="user image"
              width={50}
              height={50}
            />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{user?.username}</ItemTitle>
          </ItemContent>
        </Item>

        <div className="flex">
          <Item className="w-40">
            <ItemMedia variant="icon">
              <ThumbsUp />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{data?.reactions.likes}</ItemTitle>
            </ItemContent>
          </Item>
          <Item className="w-40">
            <ItemMedia variant="icon">
              <ThumbsDown />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{data?.reactions.dislikes}</ItemTitle>
            </ItemContent>
          </Item>
          <Item className="w-40">
            <ItemMedia variant="icon">
              <Eye />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{data?.views}</ItemTitle>
            </ItemContent>
          </Item>
        </div>
      </div>

      <article className="w-200 italic">{data?.body}</article>

      <div className="w-200 flex flex-col gap-6">
        <p className="text-2xl font-bold">Comments</p>
        <Textarea placeholder="Write a comment" />
      </div>

      <div className="flex w-full max-w-sm flex-col gap-6 py-12">
        {comments?.comments.map((c) => (
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>
                  {c.user.username[0] + c.user.username[1]}
                </AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="secondary">
                <BubbleContent>{c.body}</BubbleContent>
              </Bubble>
              <MessageFooter className="flex gap-4 items-center">
                <ThumbsUp />
                {c.likes}
              </MessageFooter>
            </MessageContent>
          </Message>
        ))}
      </div>
    </section>
  );
}
