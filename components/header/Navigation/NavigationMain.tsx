import { JSX } from "react";
import { categories } from "./NavItem";
import React from "react";
import { NavItem as NavItemType } from "./NavItem";
import NavList from "./Navlist";
import SubCategoryColumn from "./SubCategoryColumn";
import ThirdLevelList from "./ThirdLevelList";
import PromoPanel from "./PromoPanel";

function NavigationMain(): JSX.Element {
  // state
  const [hoveredCategoryId, setHoveredCategoryId] = React.useState<
    string | null
  >(null);
  const [hoveredSubItemId, setHoveredSubItemId] = React.useState<string | null>(
    null
  );

  const activeCategory =
    categories.find((c) => c.id === hoveredCategoryId) ?? null;
  const activeSubItem =
    activeCategory?.children?.find((s) => s.id === hoveredSubItemId) ?? null;

  function handleCategoryEnter(item: NavItemType) {
    setHoveredCategoryId(item.id);
    setHoveredSubItemId(item.children?.[0]?.id ?? null);
  }

  function handleCategoryLeave() {
    setHoveredCategoryId(null);
    setHoveredSubItemId(null);
  }

  return (
    <nav
      className="container mx-auto relative h-full flex items-center"
      aria-label="Main navigation"
      onMouseLeave={handleCategoryLeave}
    >
      <NavList
        items={categories}
        hoveredCategoryId={hoveredCategoryId}
        onCategoryEnter={handleCategoryEnter}
      />

      {activeCategory && activeCategory.children && (
        <div
          className="absolute top-[100%] w-full pt-2 px-[20px]"
          onMouseLeave={() => setHoveredSubItemId(null)}
        >
          <div className="bg-white rounded-2xl shadow-md grid grid-cols-12 overflow-hidden">
            <SubCategoryColumn
              subItems={activeCategory.children}
              activeSubItemId={hoveredSubItemId}
              onHoverSubItem={(id) => setHoveredSubItemId(id)}
            />

            <div className="col-span-6 p-4 flex justify-center items-center">
              <ThirdLevelList items={activeSubItem?.children ?? []} />
            </div>

            <PromoPanel />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavigationMain;