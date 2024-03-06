import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ItemPropsType = {
  id: number;
  title: string;
  description: string;
  coverPath: string;
  isInYellowList: boolean;
  distributionType: number;
  sources: string;
  bundleListTotal: string;
  customPagesTotal: number;
  language: string;
  isActive: boolean;
  titleUpdatedByHuman: boolean;
  materialFiles: Array<{
    createdAt: string;
    type: string;
  }>;
  createdAt: string;
  firstPreviewImage: {
    plain: string;
    watermarked: string;
  };
  world: string;
  price: number;
  inFavorites: number;
  averageRating: number;
  isCompletedByAuthor: boolean;
  bundle: boolean;
  slug: string;
  schoolPrices: Record<string, Record<string, number>>;
  totalFeedbacks: number;
  ccStatus: string;
  descriptionUpdatedByHuman: boolean;
  materialTopCategories: Array<{
    id: number;
    title: string;
  }>;
  author: {
    followersNumber: number;
    becameSellerAt: string;
    searchMode: boolean;
    details: {
      profileBackgroundPath: string;
      imagePath: string;
      needsSellerInfo: false;
      subjects: Array<string>;
      classes: Array<string>;
      instagramProfile: string;
      world: string;
      totalMaterials: number;
      publicName: string;
      featuredPosition: number;
      subtitle: string;
      privateProfile: boolean;
      userType: number;
      teachableCertified: boolean;
    };
    id: number;
    slug: string;
  };
  fileTypes: string;
  tags: Array<string>;
  schoolTypes: Array<{
    id: number;
    title: string;
    interdisciplinary: boolean;
  }>;
  authorFeatured: boolean;
  totalPages: number;
  isShadow: boolean;
  materialTypes: Array<{
    id: number;
    title: string;
  }>;
  isStandaloneInteractive: boolean;
  hasBibPreview: boolean;
  materialClassGrades: Array<{
    id: number;
    title: string;
  }>;
  status: string;
  hasFixedPrice: boolean;
};

type NavigatorParamProps = {
  Search: undefined;
  Details: {
    item: ItemPropsType;
  };
};

export type NavigatorProps = NativeStackNavigationProp<NavigatorParamProps>;
