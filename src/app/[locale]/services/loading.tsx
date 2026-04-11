import Skeleton from "@/components/ui/Skeleton";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ServicesLoading() {
  return (
    <main className="min-h-screen flex flex-col pt-32">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Page Header Skeleton */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <Skeleton className="h-6 w-32 rounded-full mb-8" />
          <Skeleton className="h-16 md:h-24 w-full mb-4" />
          <Skeleton className="h-16 md:h-24 w-3/4 mb-10" />
          <Skeleton className="h-20 w-full rounded-2xl" />
        </div>

        {/* Services Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-surface border border-outline/40 rounded-3xl p-10 h-[450px] flex flex-col">
              <Skeleton className="h-12 w-12 rounded-2xl mb-8" />
              <Skeleton className="h-4 w-24 mb-4" />
              <Skeleton className="h-8 w-3/4 mb-6" />
              <div className="flex-1 space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <div className="mt-8 border-t border-outline/20 pt-8 flex gap-3">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
