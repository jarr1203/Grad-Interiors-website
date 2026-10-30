// Edit this list to update the reviews carousel. Locations: "Bangalore" or "Tamil Nadu" only.
export type Review = {
  name: string;
  location: "Bangalore" | "Tamil Nadu";
  project: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Priya Venkatesh",
    location: "Tamil Nadu",
    project: "Living Room Interior",
    rating: 5,
    text: "We wanted a modern living room that still felt warm and traditional. The design came out exactly how we imagined, and the team finished before the festival season. Everyone who visits our home compliments it.",
  },
  {
    name: "Karthik Subramanian",
    location: "Bangalore",
    project: "Modular Kitchen",
    rating: 5,
    text: "Our old kitchen was cramped and badly lit. They redesigned it with smart storage and a clean layout, and the quality of work is excellent. Pricing was transparent from day one, with no surprises at the end.",
  },
  {
    name: "Divya Narayanan",
    location: "Bangalore",
    project: "Bedroom & Wardrobe Design",
    rating: 5,
    text: "From the first consultation to the final handover, the process was smooth and professional. They listened to every small requirement, and the wardrobe and bedroom design is beautiful and very practical. Highly recommended!",
  },
  {
    name: "Arun Kumar Rajan",
    location: "Tamil Nadu",
    project: "Kitchen & Dining Interior",
    rating: 5,
    text: "We were worried about managing interiors from a distance, but the team kept us updated with photos and clear timelines at every stage. The final result looks far better than the 3D designs. Great value for the money.",
  },
  {
    name: "Lakshmi Ramesh",
    location: "Bangalore",
    project: "Living Room & TV Unit",
    rating: 5,
    text: "Our apartment is small, and they used the space brilliantly with a clean TV unit and hidden storage. The finish quality is superb and the team was always polite and punctual. We've already recommended them to our relatives.",
  },
  {
    name: "Suresh Babu Natarajan",
    location: "Tamil Nadu",
    project: "Master Bedroom Interior",
    rating: 5,
    text: "Very creative designs and honest suggestions on what to spend on and what to skip. The work was completed on schedule, and the quality of the carpentry is outstanding. Truly happy with the whole experience.",
  },
];
