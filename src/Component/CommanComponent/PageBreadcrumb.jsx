import { ChevronsRight } from "lucide-react";
import { Link } from "react-router";

const PageBreadcrumb = ({ pageTitle }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <nav>
        <ol className="flex items-center gap-1.5 me-2">
          <li>
            <Link
              className="inline-flex items-center gap-1.5 text-sm text-black"
              to="/"
            >
              Home
              <ChevronsRight className="w-5 h-5 text-gray-800 dark:text-white/90" />
            </Link>
          </li>
          <li className="text-sm text-gray-800 dark:text-white/90">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
