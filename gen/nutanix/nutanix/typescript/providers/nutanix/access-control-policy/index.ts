// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessControlPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#description AccessControlPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#id AccessControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#name AccessControlPolicy#name}
  */
  readonly name?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#categories AccessControlPolicy#categories}
  */
  readonly categories?: AccessControlPolicyCategories[] | cdktf.IResolvable;
  /**
  * context_filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#context_filter_list AccessControlPolicy#context_filter_list}
  */
  readonly contextFilterList?: AccessControlPolicyContextFilterListStruct[] | cdktf.IResolvable;
  /**
  * owner_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#owner_reference AccessControlPolicy#owner_reference}
  */
  readonly ownerReference?: AccessControlPolicyOwnerReference;
  /**
  * role_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#role_reference AccessControlPolicy#role_reference}
  */
  readonly roleReference: AccessControlPolicyRoleReference;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#timeouts AccessControlPolicy#timeouts}
  */
  readonly timeouts?: AccessControlPolicyTimeouts;
  /**
  * user_group_reference_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#user_group_reference_list AccessControlPolicy#user_group_reference_list}
  */
  readonly userGroupReferenceList?: AccessControlPolicyUserGroupReferenceListStruct[] | cdktf.IResolvable;
  /**
  * user_reference_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#user_reference_list AccessControlPolicy#user_reference_list}
  */
  readonly userReferenceList?: AccessControlPolicyUserReferenceListStruct[] | cdktf.IResolvable;
}
export interface AccessControlPolicyCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#name AccessControlPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#value AccessControlPolicy#value}
  */
  readonly value?: string;
}

export function accessControlPolicyCategoriesToTerraform(struct?: AccessControlPolicyCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function accessControlPolicyCategoriesToHclTerraform(struct?: AccessControlPolicyCategories | cdktf.IResolvable): any {
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

export class AccessControlPolicyCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessControlPolicyCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessControlPolicyCategories | cdktf.IResolvable | undefined) {
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

export class AccessControlPolicyCategoriesList extends cdktf.ComplexList {
  public internalValue? : AccessControlPolicyCategories[] | cdktf.IResolvable

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
  public get(index: number): AccessControlPolicyCategoriesOutputReference {
    return new AccessControlPolicyCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#name AccessControlPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#value AccessControlPolicy#value}
  */
  readonly value?: string[];
}

export function accessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesToTerraform(struct?: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesOutputReference | AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function accessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesToHclTerraform(struct?: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesOutputReference | AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories | undefined {
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

  public set internalValue(value: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
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
export interface AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#collection AccessControlPolicy#collection}
  */
  readonly collection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#uuid_list AccessControlPolicy#uuid_list}
  */
  readonly uuidList?: string[];
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#categories AccessControlPolicy#categories}
  */
  readonly categories?: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories;
}

export function accessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideToTerraform(struct?: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideOutputReference | AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    uuid_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uuidList),
    categories: accessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesToTerraform(struct!.categories),
  }
}


export function accessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideToHclTerraform(struct?: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideOutputReference | AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uuidList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    categories: {
      value: accessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesToHclTerraform(struct!.categories),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._uuidList !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuidList = this._uuidList;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection = undefined;
      this._uuidList = undefined;
      this._categories.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection = value.collection;
      this._uuidList = value.uuidList;
      this._categories.internalValue = value.categories;
    }
  }

  // collection - computed: true, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // uuid_list - computed: true, optional: true, required: false
  private _uuidList?: string[]; 
  public get uuidList() {
    return cdktf.Fn.tolist(this.getListAttribute('uuid_list'));
  }
  public set uuidList(value: string[]) {
    this._uuidList = value;
  }
  public resetUuidList() {
    this._uuidList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidListInput() {
    return this._uuidList;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategoriesOutputReference(this, "categories");
  public get categories() {
    return this._categories;
  }
  public putCategories(value: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideCategories) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }
}
export interface AccessControlPolicyContextFilterListEntityFilterExpressionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#left_hand_side_entity_type AccessControlPolicy#left_hand_side_entity_type}
  */
  readonly leftHandSideEntityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#operator AccessControlPolicy#operator}
  */
  readonly operator: string;
  /**
  * right_hand_side block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#right_hand_side AccessControlPolicy#right_hand_side}
  */
  readonly rightHandSide: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide;
}

export function accessControlPolicyContextFilterListEntityFilterExpressionListStructToTerraform(struct?: AccessControlPolicyContextFilterListEntityFilterExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    left_hand_side_entity_type: cdktf.stringToTerraform(struct!.leftHandSideEntityType),
    operator: cdktf.stringToTerraform(struct!.operator),
    right_hand_side: accessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideToTerraform(struct!.rightHandSide),
  }
}


export function accessControlPolicyContextFilterListEntityFilterExpressionListStructToHclTerraform(struct?: AccessControlPolicyContextFilterListEntityFilterExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    left_hand_side_entity_type: {
      value: cdktf.stringToHclTerraform(struct!.leftHandSideEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    right_hand_side: {
      value: accessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideToHclTerraform(struct!.rightHandSide),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyContextFilterListEntityFilterExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessControlPolicyContextFilterListEntityFilterExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leftHandSideEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftHandSideEntityType = this._leftHandSideEntityType;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._rightHandSide?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightHandSide = this._rightHandSide?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyContextFilterListEntityFilterExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._leftHandSideEntityType = undefined;
      this._operator = undefined;
      this._rightHandSide.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._leftHandSideEntityType = value.leftHandSideEntityType;
      this._operator = value.operator;
      this._rightHandSide.internalValue = value.rightHandSide;
    }
  }

  // left_hand_side_entity_type - computed: true, optional: true, required: false
  private _leftHandSideEntityType?: string; 
  public get leftHandSideEntityType() {
    return this.getStringAttribute('left_hand_side_entity_type');
  }
  public set leftHandSideEntityType(value: string) {
    this._leftHandSideEntityType = value;
  }
  public resetLeftHandSideEntityType() {
    this._leftHandSideEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftHandSideEntityTypeInput() {
    return this._leftHandSideEntityType;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // right_hand_side - computed: false, optional: false, required: true
  private _rightHandSide = new AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSideOutputReference(this, "right_hand_side");
  public get rightHandSide() {
    return this._rightHandSide;
  }
  public putRightHandSide(value: AccessControlPolicyContextFilterListEntityFilterExpressionListRightHandSide) {
    this._rightHandSide.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightHandSideInput() {
    return this._rightHandSide.internalValue;
  }
}

export class AccessControlPolicyContextFilterListEntityFilterExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : AccessControlPolicyContextFilterListEntityFilterExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): AccessControlPolicyContextFilterListEntityFilterExpressionListStructOutputReference {
    return new AccessControlPolicyContextFilterListEntityFilterExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#name AccessControlPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#value AccessControlPolicy#value}
  */
  readonly value?: string[];
}

export function accessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesToTerraform(struct?: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesOutputReference | AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function accessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesToHclTerraform(struct?: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesOutputReference | AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories | undefined {
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

  public set internalValue(value: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
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
export interface AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#collection AccessControlPolicy#collection}
  */
  readonly collection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#uuid_list AccessControlPolicy#uuid_list}
  */
  readonly uuidList?: string[];
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#categories AccessControlPolicy#categories}
  */
  readonly categories?: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories;
}

export function accessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideToTerraform(struct?: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideOutputReference | AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    uuid_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uuidList),
    categories: accessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesToTerraform(struct!.categories),
  }
}


export function accessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideToHclTerraform(struct?: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideOutputReference | AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uuidList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    categories: {
      value: accessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesToHclTerraform(struct!.categories),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._uuidList !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuidList = this._uuidList;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection = undefined;
      this._uuidList = undefined;
      this._categories.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection = value.collection;
      this._uuidList = value.uuidList;
      this._categories.internalValue = value.categories;
    }
  }

  // collection - computed: true, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // uuid_list - computed: true, optional: true, required: false
  private _uuidList?: string[]; 
  public get uuidList() {
    return cdktf.Fn.tolist(this.getListAttribute('uuid_list'));
  }
  public set uuidList(value: string[]) {
    this._uuidList = value;
  }
  public resetUuidList() {
    this._uuidList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidListInput() {
    return this._uuidList;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategoriesOutputReference(this, "categories");
  public get categories() {
    return this._categories;
  }
  public putCategories(value: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideCategories) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }
}
export interface AccessControlPolicyContextFilterListScopeFilterExpressionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#left_hand_side AccessControlPolicy#left_hand_side}
  */
  readonly leftHandSide: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#operator AccessControlPolicy#operator}
  */
  readonly operator: string;
  /**
  * right_hand_side block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#right_hand_side AccessControlPolicy#right_hand_side}
  */
  readonly rightHandSide: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide;
}

export function accessControlPolicyContextFilterListScopeFilterExpressionListStructToTerraform(struct?: AccessControlPolicyContextFilterListScopeFilterExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    left_hand_side: cdktf.stringToTerraform(struct!.leftHandSide),
    operator: cdktf.stringToTerraform(struct!.operator),
    right_hand_side: accessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideToTerraform(struct!.rightHandSide),
  }
}


export function accessControlPolicyContextFilterListScopeFilterExpressionListStructToHclTerraform(struct?: AccessControlPolicyContextFilterListScopeFilterExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    left_hand_side: {
      value: cdktf.stringToHclTerraform(struct!.leftHandSide),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    right_hand_side: {
      value: accessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideToHclTerraform(struct!.rightHandSide),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyContextFilterListScopeFilterExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessControlPolicyContextFilterListScopeFilterExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leftHandSide !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftHandSide = this._leftHandSide;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._rightHandSide?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightHandSide = this._rightHandSide?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyContextFilterListScopeFilterExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._leftHandSide = undefined;
      this._operator = undefined;
      this._rightHandSide.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._leftHandSide = value.leftHandSide;
      this._operator = value.operator;
      this._rightHandSide.internalValue = value.rightHandSide;
    }
  }

  // left_hand_side - computed: false, optional: false, required: true
  private _leftHandSide?: string; 
  public get leftHandSide() {
    return this.getStringAttribute('left_hand_side');
  }
  public set leftHandSide(value: string) {
    this._leftHandSide = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftHandSideInput() {
    return this._leftHandSide;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // right_hand_side - computed: false, optional: false, required: true
  private _rightHandSide = new AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSideOutputReference(this, "right_hand_side");
  public get rightHandSide() {
    return this._rightHandSide;
  }
  public putRightHandSide(value: AccessControlPolicyContextFilterListScopeFilterExpressionListRightHandSide) {
    this._rightHandSide.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightHandSideInput() {
    return this._rightHandSide.internalValue;
  }
}

export class AccessControlPolicyContextFilterListScopeFilterExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : AccessControlPolicyContextFilterListScopeFilterExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): AccessControlPolicyContextFilterListScopeFilterExpressionListStructOutputReference {
    return new AccessControlPolicyContextFilterListScopeFilterExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessControlPolicyContextFilterListStruct {
  /**
  * entity_filter_expression_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#entity_filter_expression_list AccessControlPolicy#entity_filter_expression_list}
  */
  readonly entityFilterExpressionList: AccessControlPolicyContextFilterListEntityFilterExpressionListStruct[] | cdktf.IResolvable;
  /**
  * scope_filter_expression_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#scope_filter_expression_list AccessControlPolicy#scope_filter_expression_list}
  */
  readonly scopeFilterExpressionList?: AccessControlPolicyContextFilterListScopeFilterExpressionListStruct[] | cdktf.IResolvable;
}

export function accessControlPolicyContextFilterListStructToTerraform(struct?: AccessControlPolicyContextFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_filter_expression_list: cdktf.listMapper(accessControlPolicyContextFilterListEntityFilterExpressionListStructToTerraform, true)(struct!.entityFilterExpressionList),
    scope_filter_expression_list: cdktf.listMapper(accessControlPolicyContextFilterListScopeFilterExpressionListStructToTerraform, true)(struct!.scopeFilterExpressionList),
  }
}


export function accessControlPolicyContextFilterListStructToHclTerraform(struct?: AccessControlPolicyContextFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_filter_expression_list: {
      value: cdktf.listMapperHcl(accessControlPolicyContextFilterListEntityFilterExpressionListStructToHclTerraform, true)(struct!.entityFilterExpressionList),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlPolicyContextFilterListEntityFilterExpressionListStructList",
    },
    scope_filter_expression_list: {
      value: cdktf.listMapperHcl(accessControlPolicyContextFilterListScopeFilterExpressionListStructToHclTerraform, true)(struct!.scopeFilterExpressionList),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlPolicyContextFilterListScopeFilterExpressionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyContextFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessControlPolicyContextFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityFilterExpressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityFilterExpressionList = this._entityFilterExpressionList?.internalValue;
    }
    if (this._scopeFilterExpressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeFilterExpressionList = this._scopeFilterExpressionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyContextFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityFilterExpressionList.internalValue = undefined;
      this._scopeFilterExpressionList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityFilterExpressionList.internalValue = value.entityFilterExpressionList;
      this._scopeFilterExpressionList.internalValue = value.scopeFilterExpressionList;
    }
  }

  // entity_filter_expression_list - computed: false, optional: false, required: true
  private _entityFilterExpressionList = new AccessControlPolicyContextFilterListEntityFilterExpressionListStructList(this, "entity_filter_expression_list", false);
  public get entityFilterExpressionList() {
    return this._entityFilterExpressionList;
  }
  public putEntityFilterExpressionList(value: AccessControlPolicyContextFilterListEntityFilterExpressionListStruct[] | cdktf.IResolvable) {
    this._entityFilterExpressionList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityFilterExpressionListInput() {
    return this._entityFilterExpressionList.internalValue;
  }

  // scope_filter_expression_list - computed: false, optional: true, required: false
  private _scopeFilterExpressionList = new AccessControlPolicyContextFilterListScopeFilterExpressionListStructList(this, "scope_filter_expression_list", false);
  public get scopeFilterExpressionList() {
    return this._scopeFilterExpressionList;
  }
  public putScopeFilterExpressionList(value: AccessControlPolicyContextFilterListScopeFilterExpressionListStruct[] | cdktf.IResolvable) {
    this._scopeFilterExpressionList.internalValue = value;
  }
  public resetScopeFilterExpressionList() {
    this._scopeFilterExpressionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeFilterExpressionListInput() {
    return this._scopeFilterExpressionList.internalValue;
  }
}

export class AccessControlPolicyContextFilterListStructList extends cdktf.ComplexList {
  public internalValue? : AccessControlPolicyContextFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): AccessControlPolicyContextFilterListStructOutputReference {
    return new AccessControlPolicyContextFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessControlPolicyOwnerReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#kind AccessControlPolicy#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#name AccessControlPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#uuid AccessControlPolicy#uuid}
  */
  readonly uuid?: string;
}

export function accessControlPolicyOwnerReferenceToTerraform(struct?: AccessControlPolicyOwnerReferenceOutputReference | AccessControlPolicyOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function accessControlPolicyOwnerReferenceToHclTerraform(struct?: AccessControlPolicyOwnerReferenceOutputReference | AccessControlPolicyOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyOwnerReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlPolicyOwnerReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyOwnerReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: true, required: false
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

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface AccessControlPolicyRoleReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#kind AccessControlPolicy#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#name AccessControlPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#uuid AccessControlPolicy#uuid}
  */
  readonly uuid: string;
}

export function accessControlPolicyRoleReferenceToTerraform(struct?: AccessControlPolicyRoleReferenceOutputReference | AccessControlPolicyRoleReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function accessControlPolicyRoleReferenceToHclTerraform(struct?: AccessControlPolicyRoleReferenceOutputReference | AccessControlPolicyRoleReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyRoleReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlPolicyRoleReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyRoleReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface AccessControlPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#create AccessControlPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#delete AccessControlPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#update AccessControlPolicy#update}
  */
  readonly update?: string;
}

export function accessControlPolicyTimeoutsToTerraform(struct?: AccessControlPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function accessControlPolicyTimeoutsToHclTerraform(struct?: AccessControlPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessControlPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface AccessControlPolicyUserGroupReferenceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#name AccessControlPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#uuid AccessControlPolicy#uuid}
  */
  readonly uuid: string;
}

export function accessControlPolicyUserGroupReferenceListStructToTerraform(struct?: AccessControlPolicyUserGroupReferenceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function accessControlPolicyUserGroupReferenceListStructToHclTerraform(struct?: AccessControlPolicyUserGroupReferenceListStruct | cdktf.IResolvable): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyUserGroupReferenceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessControlPolicyUserGroupReferenceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyUserGroupReferenceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class AccessControlPolicyUserGroupReferenceListStructList extends cdktf.ComplexList {
  public internalValue? : AccessControlPolicyUserGroupReferenceListStruct[] | cdktf.IResolvable

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
  public get(index: number): AccessControlPolicyUserGroupReferenceListStructOutputReference {
    return new AccessControlPolicyUserGroupReferenceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessControlPolicyUserReferenceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#name AccessControlPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#uuid AccessControlPolicy#uuid}
  */
  readonly uuid: string;
}

export function accessControlPolicyUserReferenceListStructToTerraform(struct?: AccessControlPolicyUserReferenceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function accessControlPolicyUserReferenceListStructToHclTerraform(struct?: AccessControlPolicyUserReferenceListStruct | cdktf.IResolvable): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessControlPolicyUserReferenceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessControlPolicyUserReferenceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlPolicyUserReferenceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class AccessControlPolicyUserReferenceListStructList extends cdktf.ComplexList {
  public internalValue? : AccessControlPolicyUserReferenceListStruct[] | cdktf.IResolvable

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
  public get(index: number): AccessControlPolicyUserReferenceListStructOutputReference {
    return new AccessControlPolicyUserReferenceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy nutanix_access_control_policy}
*/
export class AccessControlPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_access_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessControlPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessControlPolicy to import
  * @param importFromId The id of the existing AccessControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_access_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/access_control_policy nutanix_access_control_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessControlPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccessControlPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_access_control_policy',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
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
    this._id = config.id;
    this._name = config.name;
    this._categories.internalValue = config.categories;
    this._contextFilterList.internalValue = config.contextFilterList;
    this._ownerReference.internalValue = config.ownerReference;
    this._roleReference.internalValue = config.roleReference;
    this._timeouts.internalValue = config.timeouts;
    this._userGroupReferenceList.internalValue = config.userGroupReferenceList;
    this._userReferenceList.internalValue = config.userReferenceList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // description - computed: true, optional: true, required: false
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new AccessControlPolicyCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: AccessControlPolicyCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // context_filter_list - computed: false, optional: true, required: false
  private _contextFilterList = new AccessControlPolicyContextFilterListStructList(this, "context_filter_list", false);
  public get contextFilterList() {
    return this._contextFilterList;
  }
  public putContextFilterList(value: AccessControlPolicyContextFilterListStruct[] | cdktf.IResolvable) {
    this._contextFilterList.internalValue = value;
  }
  public resetContextFilterList() {
    this._contextFilterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextFilterListInput() {
    return this._contextFilterList.internalValue;
  }

  // owner_reference - computed: false, optional: true, required: false
  private _ownerReference = new AccessControlPolicyOwnerReferenceOutputReference(this, "owner_reference");
  public get ownerReference() {
    return this._ownerReference;
  }
  public putOwnerReference(value: AccessControlPolicyOwnerReference) {
    this._ownerReference.internalValue = value;
  }
  public resetOwnerReference() {
    this._ownerReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferenceInput() {
    return this._ownerReference.internalValue;
  }

  // role_reference - computed: false, optional: false, required: true
  private _roleReference = new AccessControlPolicyRoleReferenceOutputReference(this, "role_reference");
  public get roleReference() {
    return this._roleReference;
  }
  public putRoleReference(value: AccessControlPolicyRoleReference) {
    this._roleReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleReferenceInput() {
    return this._roleReference.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessControlPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessControlPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_group_reference_list - computed: false, optional: true, required: false
  private _userGroupReferenceList = new AccessControlPolicyUserGroupReferenceListStructList(this, "user_group_reference_list", true);
  public get userGroupReferenceList() {
    return this._userGroupReferenceList;
  }
  public putUserGroupReferenceList(value: AccessControlPolicyUserGroupReferenceListStruct[] | cdktf.IResolvable) {
    this._userGroupReferenceList.internalValue = value;
  }
  public resetUserGroupReferenceList() {
    this._userGroupReferenceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupReferenceListInput() {
    return this._userGroupReferenceList.internalValue;
  }

  // user_reference_list - computed: false, optional: true, required: false
  private _userReferenceList = new AccessControlPolicyUserReferenceListStructList(this, "user_reference_list", true);
  public get userReferenceList() {
    return this._userReferenceList;
  }
  public putUserReferenceList(value: AccessControlPolicyUserReferenceListStruct[] | cdktf.IResolvable) {
    this._userReferenceList.internalValue = value;
  }
  public resetUserReferenceList() {
    this._userReferenceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userReferenceListInput() {
    return this._userReferenceList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      categories: cdktf.listMapper(accessControlPolicyCategoriesToTerraform, true)(this._categories.internalValue),
      context_filter_list: cdktf.listMapper(accessControlPolicyContextFilterListStructToTerraform, true)(this._contextFilterList.internalValue),
      owner_reference: accessControlPolicyOwnerReferenceToTerraform(this._ownerReference.internalValue),
      role_reference: accessControlPolicyRoleReferenceToTerraform(this._roleReference.internalValue),
      timeouts: accessControlPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      user_group_reference_list: cdktf.listMapper(accessControlPolicyUserGroupReferenceListStructToTerraform, true)(this._userGroupReferenceList.internalValue),
      user_reference_list: cdktf.listMapper(accessControlPolicyUserReferenceListStructToTerraform, true)(this._userReferenceList.internalValue),
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
      categories: {
        value: cdktf.listMapperHcl(accessControlPolicyCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccessControlPolicyCategoriesList",
      },
      context_filter_list: {
        value: cdktf.listMapperHcl(accessControlPolicyContextFilterListStructToHclTerraform, true)(this._contextFilterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessControlPolicyContextFilterListStructList",
      },
      owner_reference: {
        value: accessControlPolicyOwnerReferenceToHclTerraform(this._ownerReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessControlPolicyOwnerReferenceList",
      },
      role_reference: {
        value: accessControlPolicyRoleReferenceToHclTerraform(this._roleReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessControlPolicyRoleReferenceList",
      },
      timeouts: {
        value: accessControlPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessControlPolicyTimeouts",
      },
      user_group_reference_list: {
        value: cdktf.listMapperHcl(accessControlPolicyUserGroupReferenceListStructToHclTerraform, true)(this._userGroupReferenceList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccessControlPolicyUserGroupReferenceListStructList",
      },
      user_reference_list: {
        value: cdktf.listMapperHcl(accessControlPolicyUserReferenceListStructToHclTerraform, true)(this._userReferenceList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccessControlPolicyUserReferenceListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
