
type PackageCategoryProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const PackageCategory = ({
  title,
  description,
  children,
}: PackageCategoryProps) => (
  <div className="mb-16">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  </div>
);

export default PackageCategory;
