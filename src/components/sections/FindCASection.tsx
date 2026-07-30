"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Star, MessageCircle, Filter } from "lucide-react";
import { sampleCAs, cities, specializations, industries } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FindCASection() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCAs = sampleCAs.filter((ca) => {
    if (selectedCity && ca.city !== selectedCity) return false;
    if (selectedSpec && !ca.specialization.includes(selectedSpec)) return false;
    return true;
  });

  const displayedCAs = showAll ? filteredCAs : filteredCAs.slice(0, 4);

  return (
    <section id="find-ca" className="relative py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Find a CA"
          title="Browse Verified Chartered Accountants"
          description="Search from 2500+ verified CAs across India. Filter by city, specialization, or industry."
        />

        {/* Search Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl border border-border bg-background p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-primary">Filter CAs</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* City */}
            <div>
              <label htmlFor="filter-city" className="block text-xs font-medium text-muted mb-1.5">
                City
              </label>
              <select
                id="filter-city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                <option value="">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Specialization */}
            <div>
              <label htmlFor="filter-spec" className="block text-xs font-medium text-muted mb-1.5">
                Specialization
              </label>
              <select
                id="filter-spec"
                value={selectedSpec}
                onChange={(e) => setSelectedSpec(e.target.value)}
                className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                <option value="">All Specializations</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Industry */}
            <div>
              <label htmlFor="filter-industry" className="block text-xs font-medium text-muted mb-1.5">
                Industry
              </label>
              <select
                id="filter-industry"
                className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                <option value="">All Industries</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-secondary transition-colors">
                <Search className="h-4 w-4" />
                Search CAs
              </button>
            </div>
          </div>
        </motion.div>

        {/* CA Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedCAs.map((ca, index) => (
            <motion.div
              key={ca.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            >
              {/* Avatar & Rating */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-premium flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">
                      {ca.name.split(" ").slice(1).map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">{ca.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted">
                      <MapPin className="h-3 w-3" />
                      {ca.city}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 rounded-lg bg-accent/10 px-2 py-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="text-xs font-bold text-accent">{ca.rating}</span>
                </div>
              </div>

              {/* Experience */}
              <p className="text-xs text-muted mb-3">
                <span className="font-medium text-text">{ca.experience}</span> experience • {ca.reviews} reviews
              </p>

              {/* Specializations */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {ca.specialization.map((spec) => (
                  <span
                    key={spec}
                    className="inline-block rounded-md bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Languages */}
              <p className="text-xs text-muted mb-4">
                🗣️ {ca.languages.join(", ")}
              </p>

              {/* Book Button */}
              <a
                href="#lead-form"
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-accent bg-accent/5 py-2.5 text-sm font-semibold text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                Book Consultation
              </a>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {filteredCAs.length > 4 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
            >
              View All {filteredCAs.length} CAs
              <Search className="h-4 w-4" />
            </button>
          </motion.div>
        )}

        {filteredCAs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No CAs found matching your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
