// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileFqdnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#description ProfileFqdn#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#fqdn_group_ids ProfileFqdn#fqdn_group_ids}
  */
  readonly fqdnGroupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#group_member_ids ProfileFqdn#group_member_ids}
  */
  readonly groupMemberIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#id ProfileFqdn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#mode ProfileFqdn#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#name ProfileFqdn#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#no_fqdn_deny ProfileFqdn#no_fqdn_deny}
  */
  readonly noFqdnDeny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#type ProfileFqdn#type}
  */
  readonly type?: string;
  /**
  * default_fqdn_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#default_fqdn_filter ProfileFqdn#default_fqdn_filter}
  */
  readonly defaultFqdnFilter?: ProfileFqdnDefaultFqdnFilter;
  /**
  * fqdn_filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#fqdn_filter_list ProfileFqdn#fqdn_filter_list}
  */
  readonly fqdnFilterList?: ProfileFqdnFqdnFilterListStruct[] | cdktf.IResolvable;
  /**
  * uncategorized_fqdn_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#uncategorized_fqdn_filter ProfileFqdn#uncategorized_fqdn_filter}
  */
  readonly uncategorizedFqdnFilter?: ProfileFqdnUncategorizedFqdnFilter;
}
export interface ProfileFqdnDefaultFqdnFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#cert_validation ProfileFqdn#cert_validation}
  */
  readonly certValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#decryption_exception ProfileFqdn#decryption_exception}
  */
  readonly decryptionException?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#policy ProfileFqdn#policy}
  */
  readonly policy: string;
}

export function profileFqdnDefaultFqdnFilterToTerraform(struct?: ProfileFqdnDefaultFqdnFilterOutputReference | ProfileFqdnDefaultFqdnFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_validation: cdktf.stringToTerraform(struct!.certValidation),
    decryption_exception: cdktf.booleanToTerraform(struct!.decryptionException),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function profileFqdnDefaultFqdnFilterToHclTerraform(struct?: ProfileFqdnDefaultFqdnFilterOutputReference | ProfileFqdnDefaultFqdnFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_validation: {
      value: cdktf.stringToHclTerraform(struct!.certValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_exception: {
      value: cdktf.booleanToHclTerraform(struct!.decryptionException),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileFqdnDefaultFqdnFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProfileFqdnDefaultFqdnFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidation = this._certValidation;
    }
    if (this._decryptionException !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionException = this._decryptionException;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileFqdnDefaultFqdnFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certValidation = undefined;
      this._decryptionException = undefined;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certValidation = value.certValidation;
      this._decryptionException = value.decryptionException;
      this._policy = value.policy;
    }
  }

  // cert_validation - computed: false, optional: true, required: false
  private _certValidation?: string; 
  public get certValidation() {
    return this.getStringAttribute('cert_validation');
  }
  public set certValidation(value: string) {
    this._certValidation = value;
  }
  public resetCertValidation() {
    this._certValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationInput() {
    return this._certValidation;
  }

  // decryption_exception - computed: false, optional: true, required: false
  private _decryptionException?: boolean | cdktf.IResolvable; 
  public get decryptionException() {
    return this.getBooleanAttribute('decryption_exception');
  }
  public set decryptionException(value: boolean | cdktf.IResolvable) {
    this._decryptionException = value;
  }
  public resetDecryptionException() {
    this._decryptionException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionExceptionInput() {
    return this._decryptionException;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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
}
export interface ProfileFqdnFqdnFilterListVendorCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#categories ProfileFqdn#categories}
  */
  readonly categories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#vendor ProfileFqdn#vendor}
  */
  readonly vendor?: string;
}

export function profileFqdnFqdnFilterListVendorCategoryListStructToTerraform(struct?: ProfileFqdnFqdnFilterListVendorCategoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function profileFqdnFqdnFilterListVendorCategoryListStructToHclTerraform(struct?: ProfileFqdnFqdnFilterListVendorCategoryListStruct | cdktf.IResolvable): any {
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

export class ProfileFqdnFqdnFilterListVendorCategoryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileFqdnFqdnFilterListVendorCategoryListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProfileFqdnFqdnFilterListVendorCategoryListStruct | cdktf.IResolvable | undefined) {
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

export class ProfileFqdnFqdnFilterListVendorCategoryListStructList extends cdktf.ComplexList {
  public internalValue? : ProfileFqdnFqdnFilterListVendorCategoryListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProfileFqdnFqdnFilterListVendorCategoryListStructOutputReference {
    return new ProfileFqdnFqdnFilterListVendorCategoryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileFqdnFqdnFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#cert_validation ProfileFqdn#cert_validation}
  */
  readonly certValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#decryption_exception ProfileFqdn#decryption_exception}
  */
  readonly decryptionException?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#fqdn_list ProfileFqdn#fqdn_list}
  */
  readonly fqdnList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#policy ProfileFqdn#policy}
  */
  readonly policy?: string;
  /**
  * vendor_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#vendor_category_list ProfileFqdn#vendor_category_list}
  */
  readonly vendorCategoryList?: ProfileFqdnFqdnFilterListVendorCategoryListStruct[] | cdktf.IResolvable;
}

export function profileFqdnFqdnFilterListStructToTerraform(struct?: ProfileFqdnFqdnFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_validation: cdktf.stringToTerraform(struct!.certValidation),
    decryption_exception: cdktf.booleanToTerraform(struct!.decryptionException),
    fqdn_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdnList),
    policy: cdktf.stringToTerraform(struct!.policy),
    vendor_category_list: cdktf.listMapper(profileFqdnFqdnFilterListVendorCategoryListStructToTerraform, true)(struct!.vendorCategoryList),
  }
}


export function profileFqdnFqdnFilterListStructToHclTerraform(struct?: ProfileFqdnFqdnFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_validation: {
      value: cdktf.stringToHclTerraform(struct!.certValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_exception: {
      value: cdktf.booleanToHclTerraform(struct!.decryptionException),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fqdn_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdnList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_category_list: {
      value: cdktf.listMapperHcl(profileFqdnFqdnFilterListVendorCategoryListStructToHclTerraform, true)(struct!.vendorCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "ProfileFqdnFqdnFilterListVendorCategoryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileFqdnFqdnFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileFqdnFqdnFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidation = this._certValidation;
    }
    if (this._decryptionException !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionException = this._decryptionException;
    }
    if (this._fqdnList !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnList = this._fqdnList;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._vendorCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorCategoryList = this._vendorCategoryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileFqdnFqdnFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certValidation = undefined;
      this._decryptionException = undefined;
      this._fqdnList = undefined;
      this._policy = undefined;
      this._vendorCategoryList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certValidation = value.certValidation;
      this._decryptionException = value.decryptionException;
      this._fqdnList = value.fqdnList;
      this._policy = value.policy;
      this._vendorCategoryList.internalValue = value.vendorCategoryList;
    }
  }

  // cert_validation - computed: false, optional: true, required: false
  private _certValidation?: string; 
  public get certValidation() {
    return this.getStringAttribute('cert_validation');
  }
  public set certValidation(value: string) {
    this._certValidation = value;
  }
  public resetCertValidation() {
    this._certValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationInput() {
    return this._certValidation;
  }

  // decryption_exception - computed: false, optional: true, required: false
  private _decryptionException?: boolean | cdktf.IResolvable; 
  public get decryptionException() {
    return this.getBooleanAttribute('decryption_exception');
  }
  public set decryptionException(value: boolean | cdktf.IResolvable) {
    this._decryptionException = value;
  }
  public resetDecryptionException() {
    this._decryptionException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionExceptionInput() {
    return this._decryptionException;
  }

  // fqdn_list - computed: false, optional: true, required: false
  private _fqdnList?: string[]; 
  public get fqdnList() {
    return this.getListAttribute('fqdn_list');
  }
  public set fqdnList(value: string[]) {
    this._fqdnList = value;
  }
  public resetFqdnList() {
    this._fqdnList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnListInput() {
    return this._fqdnList;
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // vendor_category_list - computed: false, optional: true, required: false
  private _vendorCategoryList = new ProfileFqdnFqdnFilterListVendorCategoryListStructList(this, "vendor_category_list", false);
  public get vendorCategoryList() {
    return this._vendorCategoryList;
  }
  public putVendorCategoryList(value: ProfileFqdnFqdnFilterListVendorCategoryListStruct[] | cdktf.IResolvable) {
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

export class ProfileFqdnFqdnFilterListStructList extends cdktf.ComplexList {
  public internalValue? : ProfileFqdnFqdnFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProfileFqdnFqdnFilterListStructOutputReference {
    return new ProfileFqdnFqdnFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileFqdnUncategorizedFqdnFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#cert_validation ProfileFqdn#cert_validation}
  */
  readonly certValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#decryption_exception ProfileFqdn#decryption_exception}
  */
  readonly decryptionException?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#policy ProfileFqdn#policy}
  */
  readonly policy?: string;
}

export function profileFqdnUncategorizedFqdnFilterToTerraform(struct?: ProfileFqdnUncategorizedFqdnFilterOutputReference | ProfileFqdnUncategorizedFqdnFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_validation: cdktf.stringToTerraform(struct!.certValidation),
    decryption_exception: cdktf.booleanToTerraform(struct!.decryptionException),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function profileFqdnUncategorizedFqdnFilterToHclTerraform(struct?: ProfileFqdnUncategorizedFqdnFilterOutputReference | ProfileFqdnUncategorizedFqdnFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_validation: {
      value: cdktf.stringToHclTerraform(struct!.certValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_exception: {
      value: cdktf.booleanToHclTerraform(struct!.decryptionException),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileFqdnUncategorizedFqdnFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProfileFqdnUncategorizedFqdnFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.certValidation = this._certValidation;
    }
    if (this._decryptionException !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionException = this._decryptionException;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileFqdnUncategorizedFqdnFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certValidation = undefined;
      this._decryptionException = undefined;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certValidation = value.certValidation;
      this._decryptionException = value.decryptionException;
      this._policy = value.policy;
    }
  }

  // cert_validation - computed: false, optional: true, required: false
  private _certValidation?: string; 
  public get certValidation() {
    return this.getStringAttribute('cert_validation');
  }
  public set certValidation(value: string) {
    this._certValidation = value;
  }
  public resetCertValidation() {
    this._certValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationInput() {
    return this._certValidation;
  }

  // decryption_exception - computed: false, optional: true, required: false
  private _decryptionException?: boolean | cdktf.IResolvable; 
  public get decryptionException() {
    return this.getBooleanAttribute('decryption_exception');
  }
  public set decryptionException(value: boolean | cdktf.IResolvable) {
    this._decryptionException = value;
  }
  public resetDecryptionException() {
    this._decryptionException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionExceptionInput() {
    return this._decryptionException;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn ciscomcd_profile_fqdn}
*/
export class ProfileFqdn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_profile_fqdn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileFqdn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileFqdn to import
  * @param importFromId The id of the existing ProfileFqdn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileFqdn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_profile_fqdn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_fqdn ciscomcd_profile_fqdn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileFqdnConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileFqdnConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_profile_fqdn',
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
    this._description = config.description;
    this._fqdnGroupIds = config.fqdnGroupIds;
    this._groupMemberIds = config.groupMemberIds;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._noFqdnDeny = config.noFqdnDeny;
    this._type = config.type;
    this._defaultFqdnFilter.internalValue = config.defaultFqdnFilter;
    this._fqdnFilterList.internalValue = config.fqdnFilterList;
    this._uncategorizedFqdnFilter.internalValue = config.uncategorizedFqdnFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fqdn_group_ids - computed: false, optional: true, required: false
  private _fqdnGroupIds?: number[]; 
  public get fqdnGroupIds() {
    return this.getNumberListAttribute('fqdn_group_ids');
  }
  public set fqdnGroupIds(value: number[]) {
    this._fqdnGroupIds = value;
  }
  public resetFqdnGroupIds() {
    this._fqdnGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnGroupIdsInput() {
    return this._fqdnGroupIds;
  }

  // group_member_ids - computed: false, optional: true, required: false
  private _groupMemberIds?: number[]; 
  public get groupMemberIds() {
    return this.getNumberListAttribute('group_member_ids');
  }
  public set groupMemberIds(value: number[]) {
    this._groupMemberIds = value;
  }
  public resetGroupMemberIds() {
    this._groupMemberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberIdsInput() {
    return this._groupMemberIds;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // no_fqdn_deny - computed: false, optional: true, required: false
  private _noFqdnDeny?: boolean | cdktf.IResolvable; 
  public get noFqdnDeny() {
    return this.getBooleanAttribute('no_fqdn_deny');
  }
  public set noFqdnDeny(value: boolean | cdktf.IResolvable) {
    this._noFqdnDeny = value;
  }
  public resetNoFqdnDeny() {
    this._noFqdnDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFqdnDenyInput() {
    return this._noFqdnDeny;
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
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

  // default_fqdn_filter - computed: false, optional: true, required: false
  private _defaultFqdnFilter = new ProfileFqdnDefaultFqdnFilterOutputReference(this, "default_fqdn_filter");
  public get defaultFqdnFilter() {
    return this._defaultFqdnFilter;
  }
  public putDefaultFqdnFilter(value: ProfileFqdnDefaultFqdnFilter) {
    this._defaultFqdnFilter.internalValue = value;
  }
  public resetDefaultFqdnFilter() {
    this._defaultFqdnFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFqdnFilterInput() {
    return this._defaultFqdnFilter.internalValue;
  }

  // fqdn_filter_list - computed: false, optional: true, required: false
  private _fqdnFilterList = new ProfileFqdnFqdnFilterListStructList(this, "fqdn_filter_list", false);
  public get fqdnFilterList() {
    return this._fqdnFilterList;
  }
  public putFqdnFilterList(value: ProfileFqdnFqdnFilterListStruct[] | cdktf.IResolvable) {
    this._fqdnFilterList.internalValue = value;
  }
  public resetFqdnFilterList() {
    this._fqdnFilterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnFilterListInput() {
    return this._fqdnFilterList.internalValue;
  }

  // uncategorized_fqdn_filter - computed: false, optional: true, required: false
  private _uncategorizedFqdnFilter = new ProfileFqdnUncategorizedFqdnFilterOutputReference(this, "uncategorized_fqdn_filter");
  public get uncategorizedFqdnFilter() {
    return this._uncategorizedFqdnFilter;
  }
  public putUncategorizedFqdnFilter(value: ProfileFqdnUncategorizedFqdnFilter) {
    this._uncategorizedFqdnFilter.internalValue = value;
  }
  public resetUncategorizedFqdnFilter() {
    this._uncategorizedFqdnFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncategorizedFqdnFilterInput() {
    return this._uncategorizedFqdnFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      fqdn_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._fqdnGroupIds),
      group_member_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupMemberIds),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      no_fqdn_deny: cdktf.booleanToTerraform(this._noFqdnDeny),
      type: cdktf.stringToTerraform(this._type),
      default_fqdn_filter: profileFqdnDefaultFqdnFilterToTerraform(this._defaultFqdnFilter.internalValue),
      fqdn_filter_list: cdktf.listMapper(profileFqdnFqdnFilterListStructToTerraform, true)(this._fqdnFilterList.internalValue),
      uncategorized_fqdn_filter: profileFqdnUncategorizedFqdnFilterToTerraform(this._uncategorizedFqdnFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._fqdnGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      group_member_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupMemberIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      no_fqdn_deny: {
        value: cdktf.booleanToHclTerraform(this._noFqdnDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_fqdn_filter: {
        value: profileFqdnDefaultFqdnFilterToHclTerraform(this._defaultFqdnFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileFqdnDefaultFqdnFilterList",
      },
      fqdn_filter_list: {
        value: cdktf.listMapperHcl(profileFqdnFqdnFilterListStructToHclTerraform, true)(this._fqdnFilterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileFqdnFqdnFilterListStructList",
      },
      uncategorized_fqdn_filter: {
        value: profileFqdnUncategorizedFqdnFilterToHclTerraform(this._uncategorizedFqdnFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileFqdnUncategorizedFqdnFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
