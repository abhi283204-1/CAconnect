"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-white" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Insights & Articles"
          title="Latest from Our Blog"
          description="Stay updated with the latest in taxation, compliance, and business advisory."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl border border-border bg-white overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                {/* Image placeholder */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-primary/5 to-secondary/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                      <span className="text-lg font-bold text-primary">
                        {post.category.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-accent">
                      {post.category}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary leading-snug mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-1 text-sm font-semibold text-accent">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
