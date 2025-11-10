export interface Welcome {
    statusCode: number;
    data:       Data;
    tid:        string;
    sid:        string;
    deviceId:   string;
    csrfToken:  string;
}

export interface Data {
    statusMessage:      string;
    pageOffset:         PageOffset;
    cards:              CardElement[];
    firstOffsetRequest: boolean;
    cacheExpiryTime:    number;
    nextFetch:          number;
}

export interface CardElement {
    card: PurpleCard;
}

export interface PurpleCard {
    card: FluffyCard;
}

export interface FluffyCard {
    "@type":          string;
    header?:          HeaderClass;
    layout?:          Layout;
    imageGridCards?:  ImageGridCards;
    id?:              string;
    gridElements?:    GridElements;
    title?:           string;
    sortConfigs?:     SortConfig[];
    restaurantCount?: number;
    facetList?:       FacetList[];
    message?:         string;
    brands?:          Brand[];
    androidAppImage?: string;
    androidAppLink?:  string;
    iosAppImage?:     string;
    iosAppLink?:      string;
    cities?:          Brand[];
    citySlug?:        string;
    lat?:             string;
    lng?:             string;
    userAgent?:       string;
    gandalfRequest?:  string;
    metaInfo?:        MetaInfo;
    screenType?:      string;
    seoParams?:       SEOParams;
    pageContext?:     PageContext;
}

export interface Brand {
    text: string;
    link: string;
}

export interface FacetList {
    label:       string;
    id:          string;
    selection:   string;
    facetInfo:   FacetInfo[];
    viewType:    string;
    subLabel?:   string;
    canSearch?:  boolean;
    openFilter?: boolean;
}

export interface FacetInfo {
    label:       string;
    id:          string;
    analytics:   WidgetPaddingClass;
    openFilter?: boolean;
}

export interface WidgetPaddingClass {
}

export interface GridElements {
    infoWithStyle: InfoWithStyle;
}

export interface InfoWithStyle {
    "@type":       string;
    info?:         InfoElement[];
    style?:        InfoWithStyleStyle;
    restaurants?:  Restaurant[];
    theme?:        string;
    widgetType?:   string;
    collectionId?: string;
}

export interface InfoElement {
    id:                string;
    imageId:           string;
    action:            CtaClass;
    entityType:        EntityType;
    accessibility:     Accessibility;
    entityId:          string;
    frequencyCapping:  WidgetPaddingClass;
    externalMarketing: WidgetPaddingClass;
}

export interface Accessibility {
    altText:    string;
    altTextCta: AltTextCta;
}

export type AltTextCta = "open";

export interface CtaClass {
    link:  string;
    text?: string;
    type:  ActionType;
}

export type ActionType = "WEBLINK";
export type EntityType = "BANNER";

export interface Restaurant {
    info:      RestaurantInfo;
    analytics: Analytics;
    cta:       CtaClass;
    "@type"?:  string;
    widgetId?: string;
}

export interface Analytics {
    context: Context;
}

export type Context = "seo-data-b1666491-84bc-433e-b706-00885a05c0a7";

export interface RestaurantInfo {
    id:                              string;
    name:                            string;
    cloudinaryImageId:               string;
    locality:                        string;
    areaName:                        string;
    costForTwo:                      string;
    cuisines:                        string[];
    avgRating:                       number;
    parentId:                        string;
    avgRatingString:                 string;
    totalRatingsString:              string;
    sla:                             Sla;
    availability:                    Availability;
    badges:                          Badges;
    isOpen:                          boolean;
    type:                            InfoType;
    badgesV2:                        BadgesV2;
    aggregatedDiscountInfoV3:        AggregatedDiscountInfoV3;
    differentiatedUi:                DifferentiatedUI;
    reviewsSummary:                  WidgetPaddingClass;
    displayType:                     InfoDisplayType;
    restaurantOfferPresentationInfo: WidgetPaddingClass;
    externalRatings:                 ExternalRatings;
    ratingsDisplayPreference:        RatingsDisplayPreference;
    veg?:                            boolean;
    orderabilityCommunication?:      OrderabilityCommunication;
    isNewlyOnboarded?:               boolean;
}

export interface AggregatedDiscountInfoV3 {
    header:    HeaderEnum;
    subHeader: string;
}

export type HeaderEnum = "ITEMS" | "20% OFF" | "30% OFF" | "65% OFF";

export interface Availability {
    nextCloseTime: Date;
    opened:        boolean;
}

export interface Badges {
    imageBadges?: ImageBadge[];
}

export interface ImageBadge {
    imageId:     string;
    description: Description;
}

export type Description = "bolt!" | "Delivery!" | "Gourmet" | "pureveg";

export interface BadgesV2 {
    entityBadges: EntityBadges;
}

export interface EntityBadges {
    imageBased:         ImageBased;
    textBased:          WidgetPaddingClass;
    textExtendedBadges: WidgetPaddingClass;
}

export interface ImageBased {
    badgeObject?: BadgeObject[];
}

export interface BadgeObject {
    attributes: ImageBadge;
}

export interface DifferentiatedUI {
    displayType:                  DifferentiatedUIDisplayType;
    differentiatedUiMediaDetails: DifferentiatedUIMediaDetails;
}

export interface DifferentiatedUIMediaDetails {
    lottie:     WidgetPaddingClass;
    video:      WidgetPaddingClass;
    mediaType?: string;
}

export type DifferentiatedUIDisplayType = "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT";
export type InfoDisplayType = "RESTAURANT_DISPLAY_TYPE_DEFAULT";

export interface ExternalRatings {
    aggregatedRating:   AggregatedRating;
    source?:            string;
    sourceIconImageId?: string;
}

export interface AggregatedRating {
    rating:       Rating;
    ratingCount?: string;
}

export type Rating = "--" | "4.1" | "4.7";

export interface OrderabilityCommunication {
    title:      WidgetPaddingClass;
    subTitle:   WidgetPaddingClass;
    message:    WidgetPaddingClass;
    customIcon: WidgetPaddingClass;
}

export type RatingsDisplayPreference = "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY";

export interface Sla {
    deliveryTime:         number;
    lastMileTravel:       number;
    serviceability:       Serviceability;
    slaString:            string;
    lastMileTravelString: string;
    iconType:             IconType;
}

export type IconType = "ICON_TYPE_EMPTY";
export type Serviceability = "SERVICEABLE";
export type InfoType = "F";

export interface InfoWithStyleStyle {
    width:            Height;
    height:           Height;
    layoutAlignment?: string;
}

export interface Height {
    type:      string;
    value:     number;
    reference: string;
}

export interface HeaderClass {
    title:         string;
    headerStyling: HeaderStyling;
    action?:       WidgetPaddingClass;
}

export interface HeaderStyling {
    padding: ContainerPaddingClass;
}

export interface ContainerPaddingClass {
    left:   number;
    top?:   number;
    bottom: number;
    right?: number;
}

export interface ImageGridCards {
    info:  InfoElement[];
    style: ImageGridCardsStyle;
}

export interface ImageGridCardsStyle {
    width:  Height;
    height: Height;
}

export interface Layout {
    rows?:                    number;
    columns:                  number;
    horizontalScrollEnabled?: boolean;
    itemSpacing?:             number;
    widgetPadding?:           WidgetPaddingClass;
    containerStyle?:          ContainerStyle;
    widgetTheme?:             WidgetTheme;
    scrollBar?:               ScrollBar;
}

export interface ContainerStyle {
    containerPadding: ContainerPaddingClass;
}

export interface ScrollBar {
    scrollThumbColor: string;
    scrollTrackColor: string;
    width:            number;
    height:           number;
    scrollStyling:    ScrollStyling;
}

export interface ScrollStyling {
    padding: ScrollStylingPadding;
}

export interface ScrollStylingPadding {
    top:    number;
    bottom: number;
}

export interface WidgetTheme {
    defaultMode: Mode;
    darkMode:    Mode;
}

export interface Mode {
    theme:             string;
    backgroundColour?: string;
}

export interface MetaInfo {
    pageType:            string;
    pageTitle:           string;
    pageMetaDescription: string;
    pageKeywords:        string;
}

export interface PageContext {
    citySlug: string;
    cityName: string;
    pageType: string;
}

export interface SEOParams {
    apiName:      string;
    seoUrl:       string;
    pageType:     string;
    businessLine: string;
}

export interface SortConfig {
    key:               string;
    title:             string;
    selected?:         boolean;
    defaultSelection?: boolean;
}

export interface PageOffset {
    nextOffset:   string;
    widgetOffset: WidgetOffset;
}

export interface WidgetOffset {
    NewListingView_category_bar_chicletranking_TwoRows:           string;
    NewListingView_category_bar_chicletranking_TwoRows_Rendition: string;
    Restaurant_Group_WebView_SEO_PB_Theme:                        string;
    collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:  string;
    inlineFacetFilter:                                            string;
    restaurantCountWidget:                                        string;
}
