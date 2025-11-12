// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileUrlfilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#deny_response ProfileUrlfilter#deny_response}
  */
  readonly denyResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#description ProfileUrlfilter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#id ProfileUrlfilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#name ProfileUrlfilter#name}
  */
  readonly name: string;
  /**
  * default_url_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#default_url_filter ProfileUrlfilter#default_url_filter}
  */
  readonly defaultUrlFilter: ProfileUrlfilterDefaultUrlFilter;
  /**
  * uncategorized_url_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#uncategorized_url_filter ProfileUrlfilter#uncategorized_url_filter}
  */
  readonly uncategorizedUrlFilter: ProfileUrlfilterUncategorizedUrlFilter;
  /**
  * url_filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#url_filter_list ProfileUrlfilter#url_filter_list}
  */
  readonly urlFilterList: ProfileUrlfilterUrlFilterListStruct[] | cdktf.IResolvable;
}
export interface ProfileUrlfilterDefaultUrlFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#policy ProfileUrlfilter#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#return_status ProfileUrlfilter#return_status}
  */
  readonly returnStatus?: number;
}

export function profileUrlfilterDefaultUrlFilterToTerraform(struct?: ProfileUrlfilterDefaultUrlFilterOutputReference | ProfileUrlfilterDefaultUrlFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    return_status: cdktf.numberToTerraform(struct!.returnStatus),
  }
}


export function profileUrlfilterDefaultUrlFilterToHclTerraform(struct?: ProfileUrlfilterDefaultUrlFilterOutputReference | ProfileUrlfilterDefaultUrlFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_status: {
      value: cdktf.numberToHclTerraform(struct!.returnStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileUrlfilterDefaultUrlFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProfileUrlfilterDefaultUrlFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._returnStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnStatus = this._returnStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileUrlfilterDefaultUrlFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
      this._returnStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
      this._returnStatus = value.returnStatus;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // return_status - computed: false, optional: true, required: false
  private _returnStatus?: number; 
  public get returnStatus() {
    return this.getNumberAttribute('return_status');
  }
  public set returnStatus(value: number) {
    this._returnStatus = value;
  }
  public resetReturnStatus() {
    this._returnStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnStatusInput() {
    return this._returnStatus;
  }
}
export interface ProfileUrlfilterUncategorizedUrlFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#policy ProfileUrlfilter#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#return_status ProfileUrlfilter#return_status}
  */
  readonly returnStatus?: number;
}

export function profileUrlfilterUncategorizedUrlFilterToTerraform(struct?: ProfileUrlfilterUncategorizedUrlFilterOutputReference | ProfileUrlfilterUncategorizedUrlFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    return_status: cdktf.numberToTerraform(struct!.returnStatus),
  }
}


export function profileUrlfilterUncategorizedUrlFilterToHclTerraform(struct?: ProfileUrlfilterUncategorizedUrlFilterOutputReference | ProfileUrlfilterUncategorizedUrlFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_status: {
      value: cdktf.numberToHclTerraform(struct!.returnStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileUrlfilterUncategorizedUrlFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProfileUrlfilterUncategorizedUrlFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._returnStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnStatus = this._returnStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileUrlfilterUncategorizedUrlFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
      this._returnStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
      this._returnStatus = value.returnStatus;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // return_status - computed: false, optional: true, required: false
  private _returnStatus?: number; 
  public get returnStatus() {
    return this.getNumberAttribute('return_status');
  }
  public set returnStatus(value: number) {
    this._returnStatus = value;
  }
  public resetReturnStatus() {
    this._returnStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnStatusInput() {
    return this._returnStatus;
  }
}
export interface ProfileUrlfilterUrlFilterListVendorCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#categories ProfileUrlfilter#categories}
  */
  readonly categories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#vendor ProfileUrlfilter#vendor}
  */
  readonly vendor?: string;
}

export function profileUrlfilterUrlFilterListVendorCategoryListStructToTerraform(struct?: ProfileUrlfilterUrlFilterListVendorCategoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function profileUrlfilterUrlFilterListVendorCategoryListStructToHclTerraform(struct?: ProfileUrlfilterUrlFilterListVendorCategoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileUrlfilterUrlFilterListVendorCategoryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileUrlfilterUrlFilterListVendorCategoryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileUrlfilterUrlFilterListVendorCategoryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categories = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categories = value.categories;
      this._vendor = value.vendor;
    }
  }

  // categories - computed: false, optional: false, required: true
  private _categories?: string[]; 
  public get categories() {
    return cdktf.Fn.tolist(this.getListAttribute('categories'));
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

export class ProfileUrlfilterUrlFilterListVendorCategoryListStructList extends cdktf.ComplexList {
  public internalValue? : ProfileUrlfilterUrlFilterListVendorCategoryListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProfileUrlfilterUrlFilterListVendorCategoryListStructOutputReference {
    return new ProfileUrlfilterUrlFilterListVendorCategoryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileUrlfilterUrlFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#filter_methods ProfileUrlfilter#filter_methods}
  */
  readonly filterMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#policy ProfileUrlfilter#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#return_status ProfileUrlfilter#return_status}
  */
  readonly returnStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#url_list ProfileUrlfilter#url_list}
  */
  readonly urlList?: string[];
  /**
  * vendor_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#vendor_category_list ProfileUrlfilter#vendor_category_list}
  */
  readonly vendorCategoryList?: ProfileUrlfilterUrlFilterListVendorCategoryListStruct[] | cdktf.IResolvable;
}

export function profileUrlfilterUrlFilterListStructToTerraform(struct?: ProfileUrlfilterUrlFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterMethods),
    policy: cdktf.stringToTerraform(struct!.policy),
    return_status: cdktf.numberToTerraform(struct!.returnStatus),
    url_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlList),
    vendor_category_list: cdktf.listMapper(profileUrlfilterUrlFilterListVendorCategoryListStructToTerraform, true)(struct!.vendorCategoryList),
  }
}


export function profileUrlfilterUrlFilterListStructToHclTerraform(struct?: ProfileUrlfilterUrlFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_status: {
      value: cdktf.numberToHclTerraform(struct!.returnStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vendor_category_list: {
      value: cdktf.listMapperHcl(profileUrlfilterUrlFilterListVendorCategoryListStructToHclTerraform, true)(struct!.vendorCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "ProfileUrlfilterUrlFilterListVendorCategoryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileUrlfilterUrlFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileUrlfilterUrlFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMethods = this._filterMethods;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._returnStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnStatus = this._returnStatus;
    }
    if (this._urlList !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlList = this._urlList;
    }
    if (this._vendorCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorCategoryList = this._vendorCategoryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileUrlfilterUrlFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterMethods = undefined;
      this._policy = undefined;
      this._returnStatus = undefined;
      this._urlList = undefined;
      this._vendorCategoryList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterMethods = value.filterMethods;
      this._policy = value.policy;
      this._returnStatus = value.returnStatus;
      this._urlList = value.urlList;
      this._vendorCategoryList.internalValue = value.vendorCategoryList;
    }
  }

  // filter_methods - computed: false, optional: true, required: false
  private _filterMethods?: string[]; 
  public get filterMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_methods'));
  }
  public set filterMethods(value: string[]) {
    this._filterMethods = value;
  }
  public resetFilterMethods() {
    this._filterMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMethodsInput() {
    return this._filterMethods;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // return_status - computed: false, optional: true, required: false
  private _returnStatus?: number; 
  public get returnStatus() {
    return this.getNumberAttribute('return_status');
  }
  public set returnStatus(value: number) {
    this._returnStatus = value;
  }
  public resetReturnStatus() {
    this._returnStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnStatusInput() {
    return this._returnStatus;
  }

  // url_list - computed: false, optional: true, required: false
  private _urlList?: string[]; 
  public get urlList() {
    return cdktf.Fn.tolist(this.getListAttribute('url_list'));
  }
  public set urlList(value: string[]) {
    this._urlList = value;
  }
  public resetUrlList() {
    this._urlList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlListInput() {
    return this._urlList;
  }

  // vendor_category_list - computed: false, optional: true, required: false
  private _vendorCategoryList = new ProfileUrlfilterUrlFilterListVendorCategoryListStructList(this, "vendor_category_list", false);
  public get vendorCategoryList() {
    return this._vendorCategoryList;
  }
  public putVendorCategoryList(value: ProfileUrlfilterUrlFilterListVendorCategoryListStruct[] | cdktf.IResolvable) {
    this._vendorCategoryList.internalValue = value;
  }
  public resetVendorCategoryList() {
    this._vendorCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorCategoryListInput() {
    return this._vendorCategoryList.internalValue;
  }
}

export class ProfileUrlfilterUrlFilterListStructList extends cdktf.ComplexList {
  public internalValue? : ProfileUrlfilterUrlFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProfileUrlfilterUrlFilterListStructOutputReference {
    return new ProfileUrlfilterUrlFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter ciscomcd_profile_urlfilter}
*/
export class ProfileUrlfilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_profile_urlfilter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileUrlfilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileUrlfilter to import
  * @param importFromId The id of the existing ProfileUrlfilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileUrlfilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_profile_urlfilter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_urlfilter ciscomcd_profile_urlfilter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileUrlfilterConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileUrlfilterConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_profile_urlfilter',
      terraformGeneratorMetadata: {
        providerName: 'ciscomcd',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._denyResponse = config.denyResponse;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._defaultUrlFilter.internalValue = config.defaultUrlFilter;
    this._uncategorizedUrlFilter.internalValue = config.uncategorizedUrlFilter;
    this._urlFilterList.internalValue = config.urlFilterList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deny_response - computed: false, optional: true, required: false
  private _denyResponse?: string; 
  public get denyResponse() {
    return this.getStringAttribute('deny_response');
  }
  public set denyResponse(value: string) {
    this._denyResponse = value;
  }
  public resetDenyResponse() {
    this._denyResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyResponseInput() {
    return this._denyResponse;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // default_url_filter - computed: false, optional: false, required: true
  private _defaultUrlFilter = new ProfileUrlfilterDefaultUrlFilterOutputReference(this, "default_url_filter");
  public get defaultUrlFilter() {
    return this._defaultUrlFilter;
  }
  public putDefaultUrlFilter(value: ProfileUrlfilterDefaultUrlFilter) {
    this._defaultUrlFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlFilterInput() {
    return this._defaultUrlFilter.internalValue;
  }

  // uncategorized_url_filter - computed: false, optional: false, required: true
  private _uncategorizedUrlFilter = new ProfileUrlfilterUncategorizedUrlFilterOutputReference(this, "uncategorized_url_filter");
  public get uncategorizedUrlFilter() {
    return this._uncategorizedUrlFilter;
  }
  public putUncategorizedUrlFilter(value: ProfileUrlfilterUncategorizedUrlFilter) {
    this._uncategorizedUrlFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uncategorizedUrlFilterInput() {
    return this._uncategorizedUrlFilter.internalValue;
  }

  // url_filter_list - computed: false, optional: false, required: true
  private _urlFilterList = new ProfileUrlfilterUrlFilterListStructList(this, "url_filter_list", false);
  public get urlFilterList() {
    return this._urlFilterList;
  }
  public putUrlFilterList(value: ProfileUrlfilterUrlFilterListStruct[] | cdktf.IResolvable) {
    this._urlFilterList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilterListInput() {
    return this._urlFilterList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deny_response: cdktf.stringToTerraform(this._denyResponse),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      default_url_filter: profileUrlfilterDefaultUrlFilterToTerraform(this._defaultUrlFilter.internalValue),
      uncategorized_url_filter: profileUrlfilterUncategorizedUrlFilterToTerraform(this._uncategorizedUrlFilter.internalValue),
      url_filter_list: cdktf.listMapper(profileUrlfilterUrlFilterListStructToTerraform, true)(this._urlFilterList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deny_response: {
        value: cdktf.stringToHclTerraform(this._denyResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_url_filter: {
        value: profileUrlfilterDefaultUrlFilterToHclTerraform(this._defaultUrlFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileUrlfilterDefaultUrlFilterList",
      },
      uncategorized_url_filter: {
        value: profileUrlfilterUncategorizedUrlFilterToHclTerraform(this._uncategorizedUrlFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileUrlfilterUncategorizedUrlFilterList",
      },
      url_filter_list: {
        value: cdktf.listMapperHcl(profileUrlfilterUrlFilterListStructToHclTerraform, true)(this._urlFilterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileUrlfilterUrlFilterListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
