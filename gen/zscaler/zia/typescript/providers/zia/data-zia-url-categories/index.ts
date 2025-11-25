// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaUrlCategoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories#configured_name DataZiaUrlCategories#configured_name}
  */
  readonly configuredName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories#custom_category DataZiaUrlCategories#custom_category}
  */
  readonly customCategory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories#custom_ip_ranges_count DataZiaUrlCategories#custom_ip_ranges_count}
  */
  readonly customIpRangesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories#id DataZiaUrlCategories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories#super_category DataZiaUrlCategories#super_category}
  */
  readonly superCategory?: string;
  /**
  * Type of URL categories to retrieve. Valid values: ALL (default - includes all types), URL_CATEGORY, TLD_CATEGORY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories#type DataZiaUrlCategories#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories#val DataZiaUrlCategories#val}
  */
  readonly val?: number;
}
export interface DataZiaUrlCategoriesScopesScopeEntities {
}

export function dataZiaUrlCategoriesScopesScopeEntitiesToTerraform(struct?: DataZiaUrlCategoriesScopesScopeEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaUrlCategoriesScopesScopeEntitiesToHclTerraform(struct?: DataZiaUrlCategoriesScopesScopeEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaUrlCategoriesScopesScopeEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaUrlCategoriesScopesScopeEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaUrlCategoriesScopesScopeEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaUrlCategoriesScopesScopeEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaUrlCategoriesScopesScopeEntitiesOutputReference {
    return new DataZiaUrlCategoriesScopesScopeEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaUrlCategoriesScopesScopeGroupMemberEntities {
}

export function dataZiaUrlCategoriesScopesScopeGroupMemberEntitiesToTerraform(struct?: DataZiaUrlCategoriesScopesScopeGroupMemberEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaUrlCategoriesScopesScopeGroupMemberEntitiesToHclTerraform(struct?: DataZiaUrlCategoriesScopesScopeGroupMemberEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaUrlCategoriesScopesScopeGroupMemberEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaUrlCategoriesScopesScopeGroupMemberEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaUrlCategoriesScopesScopeGroupMemberEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaUrlCategoriesScopesScopeGroupMemberEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaUrlCategoriesScopesScopeGroupMemberEntitiesOutputReference {
    return new DataZiaUrlCategoriesScopesScopeGroupMemberEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaUrlCategoriesScopes {
}

export function dataZiaUrlCategoriesScopesToTerraform(struct?: DataZiaUrlCategoriesScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaUrlCategoriesScopesToHclTerraform(struct?: DataZiaUrlCategoriesScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaUrlCategoriesScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaUrlCategoriesScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaUrlCategoriesScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scope_entities - computed: true, optional: false, required: false
  private _scopeEntities = new DataZiaUrlCategoriesScopesScopeEntitiesList(this, "scope_entities", false);
  public get scopeEntities() {
    return this._scopeEntities;
  }

  // scope_group_member_entities - computed: true, optional: false, required: false
  private _scopeGroupMemberEntities = new DataZiaUrlCategoriesScopesScopeGroupMemberEntitiesList(this, "scope_group_member_entities", false);
  public get scopeGroupMemberEntities() {
    return this._scopeGroupMemberEntities;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZiaUrlCategoriesScopesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaUrlCategoriesScopesOutputReference {
    return new DataZiaUrlCategoriesScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaUrlCategoriesUrlKeywordCounts {
}

export function dataZiaUrlCategoriesUrlKeywordCountsToTerraform(struct?: DataZiaUrlCategoriesUrlKeywordCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaUrlCategoriesUrlKeywordCountsToHclTerraform(struct?: DataZiaUrlCategoriesUrlKeywordCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaUrlCategoriesUrlKeywordCountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaUrlCategoriesUrlKeywordCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaUrlCategoriesUrlKeywordCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retain_parent_keyword_count - computed: true, optional: false, required: false
  public get retainParentKeywordCount() {
    return this.getNumberAttribute('retain_parent_keyword_count');
  }

  // retain_parent_url_count - computed: true, optional: false, required: false
  public get retainParentUrlCount() {
    return this.getNumberAttribute('retain_parent_url_count');
  }

  // total_keyword_count - computed: true, optional: false, required: false
  public get totalKeywordCount() {
    return this.getNumberAttribute('total_keyword_count');
  }

  // total_url_count - computed: true, optional: false, required: false
  public get totalUrlCount() {
    return this.getNumberAttribute('total_url_count');
  }
}

export class DataZiaUrlCategoriesUrlKeywordCountsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaUrlCategoriesUrlKeywordCountsOutputReference {
    return new DataZiaUrlCategoriesUrlKeywordCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories zia_url_categories}
*/
export class DataZiaUrlCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_url_categories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaUrlCategories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaUrlCategories to import
  * @param importFromId The id of the existing DataZiaUrlCategories that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaUrlCategories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_url_categories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/url_categories zia_url_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaUrlCategoriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaUrlCategoriesConfig = {}) {
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
    this._id = config.id;
    this._superCategory = config.superCategory;
    this._type = config.type;
    this._val = config.val;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configured_name - computed: true, optional: true, required: false
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

  // custom_category - computed: true, optional: true, required: false
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

  // custom_ip_ranges_count - computed: false, optional: true, required: false
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

  // custom_urls_count - computed: true, optional: false, required: false
  public get customUrlsCount() {
    return this.getNumberAttribute('custom_urls_count');
  }

  // db_categorized_urls - computed: true, optional: false, required: false
  public get dbCategorizedUrls() {
    return this.getListAttribute('db_categorized_urls');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // editable - computed: true, optional: false, required: false
  public get editable() {
    return this.getBooleanAttribute('editable');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_ranges - computed: true, optional: false, required: false
  public get ipRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_ranges'));
  }

  // ip_ranges_retaining_parent_category - computed: true, optional: false, required: false
  public get ipRangesRetainingParentCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_ranges_retaining_parent_category'));
  }

  // ip_ranges_retaining_parent_category_count - computed: true, optional: false, required: false
  public get ipRangesRetainingParentCategoryCount() {
    return this.getNumberAttribute('ip_ranges_retaining_parent_category_count');
  }

  // keywords - computed: true, optional: false, required: false
  public get keywords() {
    return this.getListAttribute('keywords');
  }

  // keywords_retaining_parent_category - computed: true, optional: false, required: false
  public get keywordsRetainingParentCategory() {
    return this.getListAttribute('keywords_retaining_parent_category');
  }

  // scopes - computed: true, optional: false, required: false
  private _scopes = new DataZiaUrlCategoriesScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }

  // super_category - computed: false, optional: true, required: false
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

  // url_keyword_counts - computed: true, optional: false, required: false
  private _urlKeywordCounts = new DataZiaUrlCategoriesUrlKeywordCountsList(this, "url_keyword_counts", false);
  public get urlKeywordCounts() {
    return this._urlKeywordCounts;
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }

  // urls_retaining_parent_category_count - computed: true, optional: false, required: false
  public get urlsRetainingParentCategoryCount() {
    return this.getNumberAttribute('urls_retaining_parent_category_count');
  }

  // val - computed: true, optional: true, required: false
  private _val?: number; 
  public get val() {
    return this.getNumberAttribute('val');
  }
  public set val(value: number) {
    this._val = value;
  }
  public resetVal() {
    this._val = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valInput() {
    return this._val;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configured_name: cdktf.stringToTerraform(this._configuredName),
      custom_category: cdktf.booleanToTerraform(this._customCategory),
      custom_ip_ranges_count: cdktf.numberToTerraform(this._customIpRangesCount),
      id: cdktf.stringToTerraform(this._id),
      super_category: cdktf.stringToTerraform(this._superCategory),
      type: cdktf.stringToTerraform(this._type),
      val: cdktf.numberToTerraform(this._val),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      val: {
        value: cdktf.numberToHclTerraform(this._val),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
