// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixAccessControlPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy#access_control_policy_id DataNutanixAccessControlPolicy#access_control_policy_id}
  */
  readonly accessControlPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy#access_control_policy_name DataNutanixAccessControlPolicy#access_control_policy_name}
  */
  readonly accessControlPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy#id DataNutanixAccessControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy#categories DataNutanixAccessControlPolicy#categories}
  */
  readonly categories?: DataNutanixAccessControlPolicyCategories[] | cdktf.IResolvable;
}
export interface DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories {
}

export function dataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesToTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesToHclTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesOutputReference {
    return new DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide {
}

export function dataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideToTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideToHclTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // uuid_list - computed: true, optional: false, required: false
  public get uuidList() {
    return cdktf.Fn.tolist(this.getListAttribute('uuid_list'));
  }
}

export class DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideOutputReference {
    return new DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStruct {
}

export function dataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStructToTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStructToHclTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // left_hand_side_entity_type - computed: true, optional: false, required: false
  public get leftHandSideEntityType() {
    return this.getStringAttribute('left_hand_side_entity_type');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // right_hand_side - computed: true, optional: false, required: false
  private _rightHandSide = new DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideList(this, "right_hand_side", false);
  public get rightHandSide() {
    return this._rightHandSide;
  }
}

export class DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStructOutputReference {
    return new DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories {
}

export function dataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesToTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesToHclTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesOutputReference {
    return new DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide {
}

export function dataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideToTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideToHclTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // uuid_list - computed: true, optional: false, required: false
  public get uuidList() {
    return cdktf.Fn.tolist(this.getListAttribute('uuid_list'));
  }
}

export class DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideOutputReference {
    return new DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStruct {
}

export function dataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStructToTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStructToHclTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // left_hand_side - computed: true, optional: false, required: false
  public get leftHandSide() {
    return this.getStringAttribute('left_hand_side');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // right_hand_side - computed: true, optional: false, required: false
  private _rightHandSide = new DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideList(this, "right_hand_side", false);
  public get rightHandSide() {
    return this._rightHandSide;
  }
}

export class DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStructOutputReference {
    return new DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyContextFilterListStruct {
}

export function dataNutanixAccessControlPolicyContextFilterListStructToTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyContextFilterListStructToHclTerraform(struct?: DataNutanixAccessControlPolicyContextFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyContextFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyContextFilterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyContextFilterListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_filter_expression_list - computed: true, optional: false, required: false
  private _entityFilterExpressionList = new DataNutanixAccessControlPolicyContextFilterListEntityFilterExpressionListStructList(this, "entity_filter_expression_list", false);
  public get entityFilterExpressionList() {
    return this._entityFilterExpressionList;
  }

  // scope_filter_expression_list - computed: true, optional: false, required: false
  private _scopeFilterExpressionList = new DataNutanixAccessControlPolicyContextFilterListScopeFilterExpressionListStructList(this, "scope_filter_expression_list", false);
  public get scopeFilterExpressionList() {
    return this._scopeFilterExpressionList;
  }
}

export class DataNutanixAccessControlPolicyContextFilterListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyContextFilterListStructOutputReference {
    return new DataNutanixAccessControlPolicyContextFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyRoleReference {
}

export function dataNutanixAccessControlPolicyRoleReferenceToTerraform(struct?: DataNutanixAccessControlPolicyRoleReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyRoleReferenceToHclTerraform(struct?: DataNutanixAccessControlPolicyRoleReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyRoleReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyRoleReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyRoleReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixAccessControlPolicyRoleReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyRoleReferenceOutputReference {
    return new DataNutanixAccessControlPolicyRoleReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyUserGroupReferenceListStruct {
}

export function dataNutanixAccessControlPolicyUserGroupReferenceListStructToTerraform(struct?: DataNutanixAccessControlPolicyUserGroupReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyUserGroupReferenceListStructToHclTerraform(struct?: DataNutanixAccessControlPolicyUserGroupReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyUserGroupReferenceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyUserGroupReferenceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyUserGroupReferenceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixAccessControlPolicyUserGroupReferenceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyUserGroupReferenceListStructOutputReference {
    return new DataNutanixAccessControlPolicyUserGroupReferenceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyUserReferenceListStruct {
}

export function dataNutanixAccessControlPolicyUserReferenceListStructToTerraform(struct?: DataNutanixAccessControlPolicyUserReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixAccessControlPolicyUserReferenceListStructToHclTerraform(struct?: DataNutanixAccessControlPolicyUserReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixAccessControlPolicyUserReferenceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyUserReferenceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyUserReferenceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixAccessControlPolicyUserReferenceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixAccessControlPolicyUserReferenceListStructOutputReference {
    return new DataNutanixAccessControlPolicyUserReferenceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixAccessControlPolicyCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy#name DataNutanixAccessControlPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy#value DataNutanixAccessControlPolicy#value}
  */
  readonly value?: string;
}

export function dataNutanixAccessControlPolicyCategoriesToTerraform(struct?: DataNutanixAccessControlPolicyCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNutanixAccessControlPolicyCategoriesToHclTerraform(struct?: DataNutanixAccessControlPolicyCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNutanixAccessControlPolicyCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixAccessControlPolicyCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixAccessControlPolicyCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataNutanixAccessControlPolicyCategoriesList extends cdktf.ComplexList {
  public internalValue? : DataNutanixAccessControlPolicyCategories[] | cdktf.IResolvable

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
  public get(index: number): DataNutanixAccessControlPolicyCategoriesOutputReference {
    return new DataNutanixAccessControlPolicyCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy nutanix_access_control_policy}
*/
export class DataNutanixAccessControlPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_access_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixAccessControlPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixAccessControlPolicy to import
  * @param importFromId The id of the existing DataNutanixAccessControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixAccessControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_access_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/access_control_policy nutanix_access_control_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixAccessControlPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixAccessControlPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_access_control_policy',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlPolicyId = config.accessControlPolicyId;
    this._accessControlPolicyName = config.accessControlPolicyName;
    this._id = config.id;
    this._categories.internalValue = config.categories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_policy_id - computed: false, optional: true, required: false
  private _accessControlPolicyId?: string; 
  public get accessControlPolicyId() {
    return this.getStringAttribute('access_control_policy_id');
  }
  public set accessControlPolicyId(value: string) {
    this._accessControlPolicyId = value;
  }
  public resetAccessControlPolicyId() {
    this._accessControlPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlPolicyIdInput() {
    return this._accessControlPolicyId;
  }

  // access_control_policy_name - computed: false, optional: true, required: false
  private _accessControlPolicyName?: string; 
  public get accessControlPolicyName() {
    return this.getStringAttribute('access_control_policy_name');
  }
  public set accessControlPolicyName(value: string) {
    this._accessControlPolicyName = value;
  }
  public resetAccessControlPolicyName() {
    this._accessControlPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlPolicyNameInput() {
    return this._accessControlPolicyName;
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // context_filter_list - computed: true, optional: false, required: false
  private _contextFilterList = new DataNutanixAccessControlPolicyContextFilterListStructList(this, "context_filter_list", false);
  public get contextFilterList() {
    return this._contextFilterList;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_reference - computed: true, optional: false, required: false
  private _ownerReference = new cdktf.StringMap(this, "owner_reference");
  public get ownerReference() {
    return this._ownerReference;
  }

  // project_reference - computed: true, optional: false, required: false
  private _projectReference = new cdktf.StringMap(this, "project_reference");
  public get projectReference() {
    return this._projectReference;
  }

  // role_reference - computed: true, optional: false, required: false
  private _roleReference = new DataNutanixAccessControlPolicyRoleReferenceList(this, "role_reference", false);
  public get roleReference() {
    return this._roleReference;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_group_reference_list - computed: true, optional: false, required: false
  private _userGroupReferenceList = new DataNutanixAccessControlPolicyUserGroupReferenceListStructList(this, "user_group_reference_list", true);
  public get userGroupReferenceList() {
    return this._userGroupReferenceList;
  }

  // user_reference_list - computed: true, optional: false, required: false
  private _userReferenceList = new DataNutanixAccessControlPolicyUserReferenceListStructList(this, "user_reference_list", true);
  public get userReferenceList() {
    return this._userReferenceList;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new DataNutanixAccessControlPolicyCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: DataNutanixAccessControlPolicyCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_policy_id: cdktf.stringToTerraform(this._accessControlPolicyId),
      access_control_policy_name: cdktf.stringToTerraform(this._accessControlPolicyName),
      id: cdktf.stringToTerraform(this._id),
      categories: cdktf.listMapper(dataNutanixAccessControlPolicyCategoriesToTerraform, true)(this._categories.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_policy_id: {
        value: cdktf.stringToHclTerraform(this._accessControlPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_control_policy_name: {
        value: cdktf.stringToHclTerraform(this._accessControlPolicyName),
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
      categories: {
        value: cdktf.listMapperHcl(dataNutanixAccessControlPolicyCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNutanixAccessControlPolicyCategoriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
