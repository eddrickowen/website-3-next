import Skeleton from "@/components/ui/Skeleton";

export default function ProjectsLoading() {
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

        {/* Filters Skeleton */}
        <div className="flex flex-col lg:flex-row gap-6 mb-20 p-8 bg-surface border border-outline/30 rounded-[40px]">
          <div className="flex-1 space-y-4">
            <Skeleton className="h-4 w-20" />
            <div className="flex gap-2"><Skeleton className="h-10 w-16" /><Skeleton className="h-10 w-16" /><Skeleton className="h-10 w-16" /></div>
          </div>
          <div className="flex-[1.5] space-y-4">
            <Skeleton className="h-4 w-20" />
            <div className="flex gap-2"><Skeleton className="h-10 w-full" /></div>
          </div>
          <div className="flex-1 space-y-4">
            <Skeleton className="h-4 w-20" />
            <div className="flex gap-2"><Skeleton className="h-10 w-full" /></div>
          </div>
        </div>

        {/* Project Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-background border border-outline/30 rounded-[32px] p-8 h-[400px] flex flex-col">
              <div className="flex justify-between mb-8">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
                <Skeleton className="h-12 w-12 rounded-2xl" />
              </div>
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-1/2 mb-8" />
              <Skeleton className="h-24 w-full rounded-2xl mb-8" />
              <div className="mt-auto flex justify-between items-center">
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
