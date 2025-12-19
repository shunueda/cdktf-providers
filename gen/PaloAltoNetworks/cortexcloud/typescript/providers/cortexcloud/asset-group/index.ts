// https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the asset group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#description AssetGroup#description}
  */
  readonly description?: string;
  /**
  * The membership predicate for the asset group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#membership_predicate AssetGroup#membership_predicate}
  */
  readonly membershipPredicate?: AssetGroupMembershipPredicate;
  /**
  * The name of the asset group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#name AssetGroup#name}
  */
  readonly name: string;
  /**
  * The type of the asset group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#type AssetGroup#type}
  */
  readonly type: string;
}
export interface AssetGroupMembershipPredicateAndOr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#and AssetGroup#and}
  */
  readonly and?: AssetGroupMembershipPredicateAnd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#or AssetGroup#or}
  */
  readonly or?: AssetGroupMembershipPredicateAndOr[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_field AssetGroup#search_field}
  */
  readonly searchField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_type AssetGroup#search_type}
  */
  readonly searchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_value AssetGroup#search_value}
  */
  readonly searchValue?: string;
}

export function assetGroupMembershipPredicateAndOrToTerraform(struct?: AssetGroupMembershipPredicateAndOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(assetGroupMembershipPredicateAndToTerraform, false)(struct!.and),
    or: cdktf.listMapper(assetGroupMembershipPredicateAndOrToTerraform, false)(struct!.or),
    search_field: cdktf.stringToTerraform(struct!.searchField),
    search_type: cdktf.stringToTerraform(struct!.searchType),
    search_value: cdktf.stringToTerraform(struct!.searchValue),
  }
}


export function assetGroupMembershipPredicateAndOrToHclTerraform(struct?: AssetGroupMembershipPredicateAndOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateAndToHclTerraform, false)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateAndList",
    },
    or: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateAndOrToHclTerraform, false)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateAndOrList",
    },
    search_field: {
      value: cdktf.stringToHclTerraform(struct!.searchField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_type: {
      value: cdktf.stringToHclTerraform(struct!.searchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_value: {
      value: cdktf.stringToHclTerraform(struct!.searchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetGroupMembershipPredicateAndOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetGroupMembershipPredicateAndOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._searchField !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchField = this._searchField;
    }
    if (this._searchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchType = this._searchType;
    }
    if (this._searchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchValue = this._searchValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetGroupMembershipPredicateAndOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._or.internalValue = undefined;
      this._searchField = undefined;
      this._searchType = undefined;
      this._searchValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._or.internalValue = value.or;
      this._searchField = value.searchField;
      this._searchType = value.searchType;
      this._searchValue = value.searchValue;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new AssetGroupMembershipPredicateAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: AssetGroupMembershipPredicateAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new AssetGroupMembershipPredicateAndOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: AssetGroupMembershipPredicateAndOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // search_field - computed: false, optional: true, required: false
  private _searchField?: string; 
  public get searchField() {
    return this.getStringAttribute('search_field');
  }
  public set searchField(value: string) {
    this._searchField = value;
  }
  public resetSearchField() {
    this._searchField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFieldInput() {
    return this._searchField;
  }

  // search_type - computed: false, optional: true, required: false
  private _searchType?: string; 
  public get searchType() {
    return this.getStringAttribute('search_type');
  }
  public set searchType(value: string) {
    this._searchType = value;
  }
  public resetSearchType() {
    this._searchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
  }

  // search_value - computed: false, optional: true, required: false
  private _searchValue?: string; 
  public get searchValue() {
    return this.getStringAttribute('search_value');
  }
  public set searchValue(value: string) {
    this._searchValue = value;
  }
  public resetSearchValue() {
    this._searchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchValueInput() {
    return this._searchValue;
  }
}

export class AssetGroupMembershipPredicateAndOrList extends cdktf.ComplexList {
  public internalValue? : AssetGroupMembershipPredicateAndOr[] | cdktf.IResolvable

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
  public get(index: number): AssetGroupMembershipPredicateAndOrOutputReference {
    return new AssetGroupMembershipPredicateAndOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetGroupMembershipPredicateAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#and AssetGroup#and}
  */
  readonly and?: AssetGroupMembershipPredicateAnd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#or AssetGroup#or}
  */
  readonly or?: AssetGroupMembershipPredicateAndOr[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_field AssetGroup#search_field}
  */
  readonly searchField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_type AssetGroup#search_type}
  */
  readonly searchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_value AssetGroup#search_value}
  */
  readonly searchValue?: string;
}

export function assetGroupMembershipPredicateAndToTerraform(struct?: AssetGroupMembershipPredicateAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(assetGroupMembershipPredicateAndToTerraform, false)(struct!.and),
    or: cdktf.listMapper(assetGroupMembershipPredicateAndOrToTerraform, false)(struct!.or),
    search_field: cdktf.stringToTerraform(struct!.searchField),
    search_type: cdktf.stringToTerraform(struct!.searchType),
    search_value: cdktf.stringToTerraform(struct!.searchValue),
  }
}


export function assetGroupMembershipPredicateAndToHclTerraform(struct?: AssetGroupMembershipPredicateAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateAndToHclTerraform, false)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateAndList",
    },
    or: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateAndOrToHclTerraform, false)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateAndOrList",
    },
    search_field: {
      value: cdktf.stringToHclTerraform(struct!.searchField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_type: {
      value: cdktf.stringToHclTerraform(struct!.searchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_value: {
      value: cdktf.stringToHclTerraform(struct!.searchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetGroupMembershipPredicateAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetGroupMembershipPredicateAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._searchField !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchField = this._searchField;
    }
    if (this._searchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchType = this._searchType;
    }
    if (this._searchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchValue = this._searchValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetGroupMembershipPredicateAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._or.internalValue = undefined;
      this._searchField = undefined;
      this._searchType = undefined;
      this._searchValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._or.internalValue = value.or;
      this._searchField = value.searchField;
      this._searchType = value.searchType;
      this._searchValue = value.searchValue;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new AssetGroupMembershipPredicateAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: AssetGroupMembershipPredicateAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new AssetGroupMembershipPredicateAndOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: AssetGroupMembershipPredicateAndOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // search_field - computed: false, optional: true, required: false
  private _searchField?: string; 
  public get searchField() {
    return this.getStringAttribute('search_field');
  }
  public set searchField(value: string) {
    this._searchField = value;
  }
  public resetSearchField() {
    this._searchField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFieldInput() {
    return this._searchField;
  }

  // search_type - computed: false, optional: true, required: false
  private _searchType?: string; 
  public get searchType() {
    return this.getStringAttribute('search_type');
  }
  public set searchType(value: string) {
    this._searchType = value;
  }
  public resetSearchType() {
    this._searchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
  }

  // search_value - computed: false, optional: true, required: false
  private _searchValue?: string; 
  public get searchValue() {
    return this.getStringAttribute('search_value');
  }
  public set searchValue(value: string) {
    this._searchValue = value;
  }
  public resetSearchValue() {
    this._searchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchValueInput() {
    return this._searchValue;
  }
}

export class AssetGroupMembershipPredicateAndList extends cdktf.ComplexList {
  public internalValue? : AssetGroupMembershipPredicateAnd[] | cdktf.IResolvable

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
  public get(index: number): AssetGroupMembershipPredicateAndOutputReference {
    return new AssetGroupMembershipPredicateAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetGroupMembershipPredicateOrAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#and AssetGroup#and}
  */
  readonly and?: AssetGroupMembershipPredicateOrAnd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#or AssetGroup#or}
  */
  readonly or?: AssetGroupMembershipPredicateOr[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_field AssetGroup#search_field}
  */
  readonly searchField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_type AssetGroup#search_type}
  */
  readonly searchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_value AssetGroup#search_value}
  */
  readonly searchValue?: string;
}

export function assetGroupMembershipPredicateOrAndToTerraform(struct?: AssetGroupMembershipPredicateOrAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(assetGroupMembershipPredicateOrAndToTerraform, false)(struct!.and),
    or: cdktf.listMapper(assetGroupMembershipPredicateOrToTerraform, false)(struct!.or),
    search_field: cdktf.stringToTerraform(struct!.searchField),
    search_type: cdktf.stringToTerraform(struct!.searchType),
    search_value: cdktf.stringToTerraform(struct!.searchValue),
  }
}


export function assetGroupMembershipPredicateOrAndToHclTerraform(struct?: AssetGroupMembershipPredicateOrAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateOrAndToHclTerraform, false)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateOrAndList",
    },
    or: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateOrToHclTerraform, false)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateOrList",
    },
    search_field: {
      value: cdktf.stringToHclTerraform(struct!.searchField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_type: {
      value: cdktf.stringToHclTerraform(struct!.searchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_value: {
      value: cdktf.stringToHclTerraform(struct!.searchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetGroupMembershipPredicateOrAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetGroupMembershipPredicateOrAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._searchField !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchField = this._searchField;
    }
    if (this._searchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchType = this._searchType;
    }
    if (this._searchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchValue = this._searchValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetGroupMembershipPredicateOrAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._or.internalValue = undefined;
      this._searchField = undefined;
      this._searchType = undefined;
      this._searchValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._or.internalValue = value.or;
      this._searchField = value.searchField;
      this._searchType = value.searchType;
      this._searchValue = value.searchValue;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new AssetGroupMembershipPredicateOrAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: AssetGroupMembershipPredicateOrAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new AssetGroupMembershipPredicateOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: AssetGroupMembershipPredicateOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // search_field - computed: false, optional: true, required: false
  private _searchField?: string; 
  public get searchField() {
    return this.getStringAttribute('search_field');
  }
  public set searchField(value: string) {
    this._searchField = value;
  }
  public resetSearchField() {
    this._searchField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFieldInput() {
    return this._searchField;
  }

  // search_type - computed: false, optional: true, required: false
  private _searchType?: string; 
  public get searchType() {
    return this.getStringAttribute('search_type');
  }
  public set searchType(value: string) {
    this._searchType = value;
  }
  public resetSearchType() {
    this._searchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
  }

  // search_value - computed: false, optional: true, required: false
  private _searchValue?: string; 
  public get searchValue() {
    return this.getStringAttribute('search_value');
  }
  public set searchValue(value: string) {
    this._searchValue = value;
  }
  public resetSearchValue() {
    this._searchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchValueInput() {
    return this._searchValue;
  }
}

export class AssetGroupMembershipPredicateOrAndList extends cdktf.ComplexList {
  public internalValue? : AssetGroupMembershipPredicateOrAnd[] | cdktf.IResolvable

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
  public get(index: number): AssetGroupMembershipPredicateOrAndOutputReference {
    return new AssetGroupMembershipPredicateOrAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetGroupMembershipPredicateOr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#and AssetGroup#and}
  */
  readonly and?: AssetGroupMembershipPredicateOrAnd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#or AssetGroup#or}
  */
  readonly or?: AssetGroupMembershipPredicateOr[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_field AssetGroup#search_field}
  */
  readonly searchField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_type AssetGroup#search_type}
  */
  readonly searchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#search_value AssetGroup#search_value}
  */
  readonly searchValue?: string;
}

export function assetGroupMembershipPredicateOrToTerraform(struct?: AssetGroupMembershipPredicateOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(assetGroupMembershipPredicateOrAndToTerraform, false)(struct!.and),
    or: cdktf.listMapper(assetGroupMembershipPredicateOrToTerraform, false)(struct!.or),
    search_field: cdktf.stringToTerraform(struct!.searchField),
    search_type: cdktf.stringToTerraform(struct!.searchType),
    search_value: cdktf.stringToTerraform(struct!.searchValue),
  }
}


export function assetGroupMembershipPredicateOrToHclTerraform(struct?: AssetGroupMembershipPredicateOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateOrAndToHclTerraform, false)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateOrAndList",
    },
    or: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateOrToHclTerraform, false)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateOrList",
    },
    search_field: {
      value: cdktf.stringToHclTerraform(struct!.searchField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_type: {
      value: cdktf.stringToHclTerraform(struct!.searchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_value: {
      value: cdktf.stringToHclTerraform(struct!.searchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetGroupMembershipPredicateOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetGroupMembershipPredicateOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._searchField !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchField = this._searchField;
    }
    if (this._searchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchType = this._searchType;
    }
    if (this._searchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchValue = this._searchValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetGroupMembershipPredicateOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._or.internalValue = undefined;
      this._searchField = undefined;
      this._searchType = undefined;
      this._searchValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._or.internalValue = value.or;
      this._searchField = value.searchField;
      this._searchType = value.searchType;
      this._searchValue = value.searchValue;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new AssetGroupMembershipPredicateOrAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: AssetGroupMembershipPredicateOrAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new AssetGroupMembershipPredicateOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: AssetGroupMembershipPredicateOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // search_field - computed: false, optional: true, required: false
  private _searchField?: string; 
  public get searchField() {
    return this.getStringAttribute('search_field');
  }
  public set searchField(value: string) {
    this._searchField = value;
  }
  public resetSearchField() {
    this._searchField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFieldInput() {
    return this._searchField;
  }

  // search_type - computed: false, optional: true, required: false
  private _searchType?: string; 
  public get searchType() {
    return this.getStringAttribute('search_type');
  }
  public set searchType(value: string) {
    this._searchType = value;
  }
  public resetSearchType() {
    this._searchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
  }

  // search_value - computed: false, optional: true, required: false
  private _searchValue?: string; 
  public get searchValue() {
    return this.getStringAttribute('search_value');
  }
  public set searchValue(value: string) {
    this._searchValue = value;
  }
  public resetSearchValue() {
    this._searchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchValueInput() {
    return this._searchValue;
  }
}

export class AssetGroupMembershipPredicateOrList extends cdktf.ComplexList {
  public internalValue? : AssetGroupMembershipPredicateOr[] | cdktf.IResolvable

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
  public get(index: number): AssetGroupMembershipPredicateOrOutputReference {
    return new AssetGroupMembershipPredicateOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetGroupMembershipPredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#and AssetGroup#and}
  */
  readonly and?: AssetGroupMembershipPredicateAnd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#or AssetGroup#or}
  */
  readonly or?: AssetGroupMembershipPredicateOr[] | cdktf.IResolvable;
}

export function assetGroupMembershipPredicateToTerraform(struct?: AssetGroupMembershipPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(assetGroupMembershipPredicateAndToTerraform, false)(struct!.and),
    or: cdktf.listMapper(assetGroupMembershipPredicateOrToTerraform, false)(struct!.or),
  }
}


export function assetGroupMembershipPredicateToHclTerraform(struct?: AssetGroupMembershipPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateAndToHclTerraform, false)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateAndList",
    },
    or: {
      value: cdktf.listMapperHcl(assetGroupMembershipPredicateOrToHclTerraform, false)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "AssetGroupMembershipPredicateOrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetGroupMembershipPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetGroupMembershipPredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetGroupMembershipPredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._or.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._or.internalValue = value.or;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new AssetGroupMembershipPredicateAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: AssetGroupMembershipPredicateAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new AssetGroupMembershipPredicateOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: AssetGroupMembershipPredicateOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group cortexcloud_asset_group}
*/
export class AssetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cortexcloud_asset_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssetGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssetGroup to import
  * @param importFromId The id of the existing AssetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cortexcloud_asset_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/asset_group cortexcloud_asset_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AssetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'cortexcloud_asset_group',
      terraformGeneratorMetadata: {
        providerName: 'cortexcloud',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
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
    this._membershipPredicate.internalValue = config.membershipPredicate;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // membership_predicate - computed: false, optional: true, required: false
  private _membershipPredicate = new AssetGroupMembershipPredicateOutputReference(this, "membership_predicate");
  public get membershipPredicate() {
    return this._membershipPredicate;
  }
  public putMembershipPredicate(value: AssetGroupMembershipPredicate) {
    this._membershipPredicate.internalValue = value;
  }
  public resetMembershipPredicate() {
    this._membershipPredicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipPredicateInput() {
    return this._membershipPredicate.internalValue;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      membership_predicate: assetGroupMembershipPredicateToTerraform(this._membershipPredicate.internalValue),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
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
      membership_predicate: {
        value: assetGroupMembershipPredicateToHclTerraform(this._membershipPredicate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssetGroupMembershipPredicate",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
