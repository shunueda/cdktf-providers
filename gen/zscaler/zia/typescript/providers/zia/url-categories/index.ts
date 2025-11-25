// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UrlCategoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#configured_name UrlCategories#configured_name}
  */
  readonly configuredName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#custom_category UrlCategories#custom_category}
  */
  readonly customCategory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#custom_ip_ranges_count UrlCategories#custom_ip_ranges_count}
  */
  readonly customIpRangesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#custom_urls_count UrlCategories#custom_urls_count}
  */
  readonly customUrlsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#db_categorized_urls UrlCategories#db_categorized_urls}
  */
  readonly dbCategorizedUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#description UrlCategories#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#editable UrlCategories#editable}
  */
  readonly editable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#ip_ranges UrlCategories#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#ip_ranges_retaining_parent_category UrlCategories#ip_ranges_retaining_parent_category}
  */
  readonly ipRangesRetainingParentCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#ip_ranges_retaining_parent_category_count UrlCategories#ip_ranges_retaining_parent_category_count}
  */
  readonly ipRangesRetainingParentCategoryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#keywords UrlCategories#keywords}
  */
  readonly keywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#keywords_retaining_parent_category UrlCategories#keywords_retaining_parent_category}
  */
  readonly keywordsRetainingParentCategory?: string[];
  /**
  * Super Category of the URL category.
  * 				This field is required when creating custom URL categories..
  * 				See the URL Categories API for the list of available super categories:
  * 				https://help.zscaler.com/zia/url-categories#/urlCategories-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#super_category UrlCategories#super_category}
  */
  readonly superCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#type UrlCategories#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#urls UrlCategories#urls}
  */
  readonly urls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#urls_retaining_parent_category_count UrlCategories#urls_retaining_parent_category_count}
  */
  readonly urlsRetainingParentCategoryCount?: number;
  /**
  * scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#scopes UrlCategories#scopes}
  */
  readonly scopes?: UrlCategoriesScopes[] | cdktf.IResolvable;
  /**
  * url_keyword_counts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#url_keyword_counts UrlCategories#url_keyword_counts}
  */
  readonly urlKeywordCounts?: UrlCategoriesUrlKeywordCounts;
}
export interface UrlCategoriesScopesScopeEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#id UrlCategories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number[];
}

export function urlCategoriesScopesScopeEntitiesToTerraform(struct?: UrlCategoriesScopesScopeEntitiesOutputReference | UrlCategoriesScopesScopeEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlCategoriesScopesScopeEntitiesToHclTerraform(struct?: UrlCategoriesScopesScopeEntitiesOutputReference | UrlCategoriesScopesScopeEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlCategoriesScopesScopeEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlCategoriesScopesScopeEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlCategoriesScopesScopeEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number[]; 
  public get id() {
    return this.getNumberListAttribute('id');
  }
  public set id(value: number[]) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlCategoriesScopesScopeGroupMemberEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#id UrlCategories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number[];
}

export function urlCategoriesScopesScopeGroupMemberEntitiesToTerraform(struct?: UrlCategoriesScopesScopeGroupMemberEntitiesOutputReference | UrlCategoriesScopesScopeGroupMemberEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function urlCategoriesScopesScopeGroupMemberEntitiesToHclTerraform(struct?: UrlCategoriesScopesScopeGroupMemberEntitiesOutputReference | UrlCategoriesScopesScopeGroupMemberEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlCategoriesScopesScopeGroupMemberEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlCategoriesScopesScopeGroupMemberEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlCategoriesScopesScopeGroupMemberEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number[]; 
  public get id() {
    return this.getNumberListAttribute('id');
  }
  public set id(value: number[]) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface UrlCategoriesScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#type UrlCategories#type}
  */
  readonly type?: string;
  /**
  * scope_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#scope_entities UrlCategories#scope_entities}
  */
  readonly scopeEntities?: UrlCategoriesScopesScopeEntities;
  /**
  * scope_group_member_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#scope_group_member_entities UrlCategories#scope_group_member_entities}
  */
  readonly scopeGroupMemberEntities?: UrlCategoriesScopesScopeGroupMemberEntities;
}

export function urlCategoriesScopesToTerraform(struct?: UrlCategoriesScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    scope_entities: urlCategoriesScopesScopeEntitiesToTerraform(struct!.scopeEntities),
    scope_group_member_entities: urlCategoriesScopesScopeGroupMemberEntitiesToTerraform(struct!.scopeGroupMemberEntities),
  }
}


export function urlCategoriesScopesToHclTerraform(struct?: UrlCategoriesScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope_entities: {
      value: urlCategoriesScopesScopeEntitiesToHclTerraform(struct!.scopeEntities),
      isBlock: true,
      type: "set",
      storageClassType: "UrlCategoriesScopesScopeEntitiesList",
    },
    scope_group_member_entities: {
      value: urlCategoriesScopesScopeGroupMemberEntitiesToHclTerraform(struct!.scopeGroupMemberEntities),
      isBlock: true,
      type: "set",
      storageClassType: "UrlCategoriesScopesScopeGroupMemberEntitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlCategoriesScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UrlCategoriesScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._scopeEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeEntities = this._scopeEntities?.internalValue;
    }
    if (this._scopeGroupMemberEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeGroupMemberEntities = this._scopeGroupMemberEntities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlCategoriesScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._scopeEntities.internalValue = undefined;
      this._scopeGroupMemberEntities.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._scopeEntities.internalValue = value.scopeEntities;
      this._scopeGroupMemberEntities.internalValue = value.scopeGroupMemberEntities;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // scope_entities - computed: false, optional: true, required: false
  private _scopeEntities = new UrlCategoriesScopesScopeEntitiesOutputReference(this, "scope_entities");
  public get scopeEntities() {
    return this._scopeEntities;
  }
  public putScopeEntities(value: UrlCategoriesScopesScopeEntities) {
    this._scopeEntities.internalValue = value;
  }
  public resetScopeEntities() {
    this._scopeEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeEntitiesInput() {
    return this._scopeEntities.internalValue;
  }

  // scope_group_member_entities - computed: false, optional: true, required: false
  private _scopeGroupMemberEntities = new UrlCategoriesScopesScopeGroupMemberEntitiesOutputReference(this, "scope_group_member_entities");
  public get scopeGroupMemberEntities() {
    return this._scopeGroupMemberEntities;
  }
  public putScopeGroupMemberEntities(value: UrlCategoriesScopesScopeGroupMemberEntities) {
    this._scopeGroupMemberEntities.internalValue = value;
  }
  public resetScopeGroupMemberEntities() {
    this._scopeGroupMemberEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeGroupMemberEntitiesInput() {
    return this._scopeGroupMemberEntities.internalValue;
  }
}

export class UrlCategoriesScopesList extends cdktf.ComplexList {
  public internalValue? : UrlCategoriesScopes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): UrlCategoriesScopesOutputReference {
    return new UrlCategoriesScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlCategoriesUrlKeywordCounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#retain_parent_keyword_count UrlCategories#retain_parent_keyword_count}
  */
  readonly retainParentKeywordCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#retain_parent_url_count UrlCategories#retain_parent_url_count}
  */
  readonly retainParentUrlCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#total_keyword_count UrlCategories#total_keyword_count}
  */
  readonly totalKeywordCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#total_url_count UrlCategories#total_url_count}
  */
  readonly totalUrlCount?: number;
}

export function urlCategoriesUrlKeywordCountsToTerraform(struct?: UrlCategoriesUrlKeywordCountsOutputReference | UrlCategoriesUrlKeywordCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retain_parent_keyword_count: cdktf.numberToTerraform(struct!.retainParentKeywordCount),
    retain_parent_url_count: cdktf.numberToTerraform(struct!.retainParentUrlCount),
    total_keyword_count: cdktf.numberToTerraform(struct!.totalKeywordCount),
    total_url_count: cdktf.numberToTerraform(struct!.totalUrlCount),
  }
}


export function urlCategoriesUrlKeywordCountsToHclTerraform(struct?: UrlCategoriesUrlKeywordCountsOutputReference | UrlCategoriesUrlKeywordCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retain_parent_keyword_count: {
      value: cdktf.numberToHclTerraform(struct!.retainParentKeywordCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retain_parent_url_count: {
      value: cdktf.numberToHclTerraform(struct!.retainParentUrlCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_keyword_count: {
      value: cdktf.numberToHclTerraform(struct!.totalKeywordCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_url_count: {
      value: cdktf.numberToHclTerraform(struct!.totalUrlCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlCategoriesUrlKeywordCountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlCategoriesUrlKeywordCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainParentKeywordCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainParentKeywordCount = this._retainParentKeywordCount;
    }
    if (this._retainParentUrlCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainParentUrlCount = this._retainParentUrlCount;
    }
    if (this._totalKeywordCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalKeywordCount = this._totalKeywordCount;
    }
    if (this._totalUrlCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUrlCount = this._totalUrlCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlCategoriesUrlKeywordCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retainParentKeywordCount = undefined;
      this._retainParentUrlCount = undefined;
      this._totalKeywordCount = undefined;
      this._totalUrlCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retainParentKeywordCount = value.retainParentKeywordCount;
      this._retainParentUrlCount = value.retainParentUrlCount;
      this._totalKeywordCount = value.totalKeywordCount;
      this._totalUrlCount = value.totalUrlCount;
    }
  }

  // retain_parent_keyword_count - computed: true, optional: true, required: false
  private _retainParentKeywordCount?: number; 
  public get retainParentKeywordCount() {
    return this.getNumberAttribute('retain_parent_keyword_count');
  }
  public set retainParentKeywordCount(value: number) {
    this._retainParentKeywordCount = value;
  }
  public resetRetainParentKeywordCount() {
    this._retainParentKeywordCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainParentKeywordCountInput() {
    return this._retainParentKeywordCount;
  }

  // retain_parent_url_count - computed: true, optional: true, required: false
  private _retainParentUrlCount?: number; 
  public get retainParentUrlCount() {
    return this.getNumberAttribute('retain_parent_url_count');
  }
  public set retainParentUrlCount(value: number) {
    this._retainParentUrlCount = value;
  }
  public resetRetainParentUrlCount() {
    this._retainParentUrlCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainParentUrlCountInput() {
    return this._retainParentUrlCount;
  }

  // total_keyword_count - computed: true, optional: true, required: false
  private _totalKeywordCount?: number; 
  public get totalKeywordCount() {
    return this.getNumberAttribute('total_keyword_count');
  }
  public set totalKeywordCount(value: number) {
    this._totalKeywordCount = value;
  }
  public resetTotalKeywordCount() {
    this._totalKeywordCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalKeywordCountInput() {
    return this._totalKeywordCount;
  }

  // total_url_count - computed: true, optional: true, required: false
  private _totalUrlCount?: number; 
  public get totalUrlCount() {
    return this.getNumberAttribute('total_url_count');
  }
  public set totalUrlCount(value: number) {
    this._totalUrlCount = value;
  }
  public resetTotalUrlCount() {
    this._totalUrlCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUrlCountInput() {
    return this._totalUrlCount;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories zia_url_categories}
*/
export class UrlCategories extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_url_categories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UrlCategories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UrlCategories to import
  * @param importFromId The id of the existing UrlCategories that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UrlCategories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_url_categories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/url_categories zia_url_categories} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UrlCategoriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UrlCategoriesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_url_categories',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuredName = config.configuredName;
    this._customCategory = config.customCategory;
    this._customIpRangesCount = config.customIpRangesCount;
    this._customUrlsCount = config.customUrlsCount;
    this._dbCategorizedUrls = config.dbCategorizedUrls;
    this._description = config.description;
    this._editable = config.editable;
    this._ipRanges = config.ipRanges;
    this._ipRangesRetainingParentCategory = config.ipRangesRetainingParentCategory;
    this._ipRangesRetainingParentCategoryCount = config.ipRangesRetainingParentCategoryCount;
    this._keywords = config.keywords;
    this._keywordsRetainingParentCategory = config.keywordsRetainingParentCategory;
    this._superCategory = config.superCategory;
    this._type = config.type;
    this._urls = config.urls;
    this._urlsRetainingParentCategoryCount = config.urlsRetainingParentCategoryCount;
    this._scopes.internalValue = config.scopes;
    this._urlKeywordCounts.internalValue = config.urlKeywordCounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_id - computed: true, optional: false, required: false
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }

  // configured_name - computed: false, optional: true, required: false
  private _configuredName?: string; 
  public get configuredName() {
    return this.getStringAttribute('configured_name');
  }
  public set configuredName(value: string) {
    this._configuredName = value;
  }
  public resetConfiguredName() {
    this._configuredName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredNameInput() {
    return this._configuredName;
  }

  // custom_category - computed: false, optional: true, required: false
  private _customCategory?: boolean | cdktf.IResolvable; 
  public get customCategory() {
    return this.getBooleanAttribute('custom_category');
  }
  public set customCategory(value: boolean | cdktf.IResolvable) {
    this._customCategory = value;
  }
  public resetCustomCategory() {
    this._customCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCategoryInput() {
    return this._customCategory;
  }

  // custom_ip_ranges_count - computed: true, optional: true, required: false
  private _customIpRangesCount?: number; 
  public get customIpRangesCount() {
    return this.getNumberAttribute('custom_ip_ranges_count');
  }
  public set customIpRangesCount(value: number) {
    this._customIpRangesCount = value;
  }
  public resetCustomIpRangesCount() {
    this._customIpRangesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpRangesCountInput() {
    return this._customIpRangesCount;
  }

  // custom_urls_count - computed: true, optional: true, required: false
  private _customUrlsCount?: number; 
  public get customUrlsCount() {
    return this.getNumberAttribute('custom_urls_count');
  }
  public set customUrlsCount(value: number) {
    this._customUrlsCount = value;
  }
  public resetCustomUrlsCount() {
    this._customUrlsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUrlsCountInput() {
    return this._customUrlsCount;
  }

  // db_categorized_urls - computed: false, optional: true, required: false
  private _dbCategorizedUrls?: string[]; 
  public get dbCategorizedUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('db_categorized_urls'));
  }
  public set dbCategorizedUrls(value: string[]) {
    this._dbCategorizedUrls = value;
  }
  public resetDbCategorizedUrls() {
    this._dbCategorizedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbCategorizedUrlsInput() {
    return this._dbCategorizedUrls;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // editable - computed: true, optional: true, required: false
  private _editable?: boolean | cdktf.IResolvable; 
  public get editable() {
    return this.getBooleanAttribute('editable');
  }
  public set editable(value: boolean | cdktf.IResolvable) {
    this._editable = value;
  }
  public resetEditable() {
    this._editable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableInput() {
    return this._editable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_ranges'));
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // ip_ranges_retaining_parent_category - computed: false, optional: true, required: false
  private _ipRangesRetainingParentCategory?: string[]; 
  public get ipRangesRetainingParentCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_ranges_retaining_parent_category'));
  }
  public set ipRangesRetainingParentCategory(value: string[]) {
    this._ipRangesRetainingParentCategory = value;
  }
  public resetIpRangesRetainingParentCategory() {
    this._ipRangesRetainingParentCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesRetainingParentCategoryInput() {
    return this._ipRangesRetainingParentCategory;
  }

  // ip_ranges_retaining_parent_category_count - computed: true, optional: true, required: false
  private _ipRangesRetainingParentCategoryCount?: number; 
  public get ipRangesRetainingParentCategoryCount() {
    return this.getNumberAttribute('ip_ranges_retaining_parent_category_count');
  }
  public set ipRangesRetainingParentCategoryCount(value: number) {
    this._ipRangesRetainingParentCategoryCount = value;
  }
  public resetIpRangesRetainingParentCategoryCount() {
    this._ipRangesRetainingParentCategoryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesRetainingParentCategoryCountInput() {
    return this._ipRangesRetainingParentCategoryCount;
  }

  // keywords - computed: false, optional: true, required: false
  private _keywords?: string[]; 
  public get keywords() {
    return cdktf.Fn.tolist(this.getListAttribute('keywords'));
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // keywords_retaining_parent_category - computed: false, optional: true, required: false
  private _keywordsRetainingParentCategory?: string[]; 
  public get keywordsRetainingParentCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('keywords_retaining_parent_category'));
  }
  public set keywordsRetainingParentCategory(value: string[]) {
    this._keywordsRetainingParentCategory = value;
  }
  public resetKeywordsRetainingParentCategory() {
    this._keywordsRetainingParentCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsRetainingParentCategoryInput() {
    return this._keywordsRetainingParentCategory;
  }

  // super_category - computed: true, optional: true, required: false
  private _superCategory?: string; 
  public get superCategory() {
    return this.getStringAttribute('super_category');
  }
  public set superCategory(value: string) {
    this._superCategory = value;
  }
  public resetSuperCategory() {
    this._superCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superCategoryInput() {
    return this._superCategory;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return cdktf.Fn.tolist(this.getListAttribute('urls'));
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // urls_retaining_parent_category_count - computed: true, optional: true, required: false
  private _urlsRetainingParentCategoryCount?: number; 
  public get urlsRetainingParentCategoryCount() {
    return this.getNumberAttribute('urls_retaining_parent_category_count');
  }
  public set urlsRetainingParentCategoryCount(value: number) {
    this._urlsRetainingParentCategoryCount = value;
  }
  public resetUrlsRetainingParentCategoryCount() {
    this._urlsRetainingParentCategoryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsRetainingParentCategoryCountInput() {
    return this._urlsRetainingParentCategoryCount;
  }

  // val - computed: true, optional: false, required: false
  public get val() {
    return this.getNumberAttribute('val');
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes = new UrlCategoriesScopesList(this, "scopes", true);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: UrlCategoriesScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }

  // url_keyword_counts - computed: false, optional: true, required: false
  private _urlKeywordCounts = new UrlCategoriesUrlKeywordCountsOutputReference(this, "url_keyword_counts");
  public get urlKeywordCounts() {
    return this._urlKeywordCounts;
  }
  public putUrlKeywordCounts(value: UrlCategoriesUrlKeywordCounts) {
    this._urlKeywordCounts.internalValue = value;
  }
  public resetUrlKeywordCounts() {
    this._urlKeywordCounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlKeywordCountsInput() {
    return this._urlKeywordCounts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configured_name: cdktf.stringToTerraform(this._configuredName),
      custom_category: cdktf.booleanToTerraform(this._customCategory),
      custom_ip_ranges_count: cdktf.numberToTerraform(this._customIpRangesCount),
      custom_urls_count: cdktf.numberToTerraform(this._customUrlsCount),
      db_categorized_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbCategorizedUrls),
      description: cdktf.stringToTerraform(this._description),
      editable: cdktf.booleanToTerraform(this._editable),
      ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipRanges),
      ip_ranges_retaining_parent_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipRangesRetainingParentCategory),
      ip_ranges_retaining_parent_category_count: cdktf.numberToTerraform(this._ipRangesRetainingParentCategoryCount),
      keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keywords),
      keywords_retaining_parent_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keywordsRetainingParentCategory),
      super_category: cdktf.stringToTerraform(this._superCategory),
      type: cdktf.stringToTerraform(this._type),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
      urls_retaining_parent_category_count: cdktf.numberToTerraform(this._urlsRetainingParentCategoryCount),
      scopes: cdktf.listMapper(urlCategoriesScopesToTerraform, true)(this._scopes.internalValue),
      url_keyword_counts: urlCategoriesUrlKeywordCountsToTerraform(this._urlKeywordCounts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configured_name: {
        value: cdktf.stringToHclTerraform(this._configuredName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_category: {
        value: cdktf.booleanToHclTerraform(this._customCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_ip_ranges_count: {
        value: cdktf.numberToHclTerraform(this._customIpRangesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_urls_count: {
        value: cdktf.numberToHclTerraform(this._customUrlsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_categorized_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbCategorizedUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      editable: {
        value: cdktf.booleanToHclTerraform(this._editable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_ranges_retaining_parent_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipRangesRetainingParentCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_ranges_retaining_parent_category_count: {
        value: cdktf.numberToHclTerraform(this._ipRangesRetainingParentCategoryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keywords: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keywords),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      keywords_retaining_parent_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keywordsRetainingParentCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      super_category: {
        value: cdktf.stringToHclTerraform(this._superCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      urls_retaining_parent_category_count: {
        value: cdktf.numberToHclTerraform(this._urlsRetainingParentCategoryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopes: {
        value: cdktf.listMapperHcl(urlCategoriesScopesToHclTerraform, true)(this._scopes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlCategoriesScopesList",
      },
      url_keyword_counts: {
        value: urlCategoriesUrlKeywordCountsToHclTerraform(this._urlKeywordCounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UrlCategoriesUrlKeywordCountsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
