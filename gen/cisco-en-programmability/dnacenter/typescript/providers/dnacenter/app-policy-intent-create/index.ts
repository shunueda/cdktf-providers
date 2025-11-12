// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppPolicyIntentCreateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id AppPolicyIntentCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#parameters AppPolicyIntentCreate#parameters}
  */
  readonly parameters: AppPolicyIntentCreateParameters;
}
export interface AppPolicyIntentCreateItem {
}

export function appPolicyIntentCreateItemToTerraform(struct?: AppPolicyIntentCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appPolicyIntentCreateItemToHclTerraform(struct?: AppPolicyIntentCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppPolicyIntentCreateItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class AppPolicyIntentCreateItemList extends cdktf.ComplexList {

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
  public get(index: number): AppPolicyIntentCreateItemOutputReference {
    return new AppPolicyIntentCreateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElement {
  /**
  * Group id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#group_id AppPolicyIntentCreate#group_id}
  */
  readonly groupId?: string[];
  /**
  * Ssid
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#ssid AppPolicyIntentCreate#ssid}
  */
  readonly ssid?: string[];
}

export function appPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementToTerraform(struct?: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupId),
    ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ssid),
  }
}


export function appPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ssid),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssid = this._ssid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._ssid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._ssid = value.ssid;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string[]; 
  public get groupId() {
    return this.getListAttribute('group_id');
  }
  public set groupId(value: string[]) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // ssid - computed: true, optional: true, required: false
  private _ssid?: string[]; 
  public get ssid() {
    return this.getListAttribute('ssid');
  }
  public set ssid(value: string[]) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }
}

export class AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElement[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementOutputReference {
    return new AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListAdvancedPolicyScope {
  /**
  * Policy name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#name AppPolicyIntentCreate#name}
  */
  readonly name?: string;
  /**
  * advanced_policy_scope_element block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#advanced_policy_scope_element AppPolicyIntentCreate#advanced_policy_scope_element}
  */
  readonly advancedPolicyScopeElement?: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElement[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersCreateListAdvancedPolicyScopeToTerraform(struct?: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    advanced_policy_scope_element: cdktf.listMapper(appPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementToTerraform, true)(struct!.advancedPolicyScopeElement),
  }
}


export function appPolicyIntentCreateParametersCreateListAdvancedPolicyScopeToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScope | cdktf.IResolvable): any {
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
    advanced_policy_scope_element: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementToHclTerraform, true)(struct!.advancedPolicyScopeElement),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListAdvancedPolicyScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._advancedPolicyScopeElement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedPolicyScopeElement = this._advancedPolicyScopeElement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._advancedPolicyScopeElement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._advancedPolicyScopeElement.internalValue = value.advancedPolicyScopeElement;
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

  // advanced_policy_scope_element - computed: false, optional: true, required: false
  private _advancedPolicyScopeElement = new AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElementList(this, "advanced_policy_scope_element", false);
  public get advancedPolicyScopeElement() {
    return this._advancedPolicyScopeElement;
  }
  public putAdvancedPolicyScopeElement(value: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeAdvancedPolicyScopeElement[] | cdktf.IResolvable) {
    this._advancedPolicyScopeElement.internalValue = value;
  }
  public resetAdvancedPolicyScopeElement() {
    this._advancedPolicyScopeElement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPolicyScopeElementInput() {
    return this._advancedPolicyScopeElement.internalValue;
  }
}

export class AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListAdvancedPolicyScope[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeOutputReference {
    return new AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListConsumerScalableGroup {
  /**
  * Id ref to application Scalable group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id_ref AppPolicyIntentCreate#id_ref}
  */
  readonly idRef?: string;
}

export function appPolicyIntentCreateParametersCreateListConsumerScalableGroupToTerraform(struct?: AppPolicyIntentCreateParametersCreateListConsumerScalableGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_ref: cdktf.stringToTerraform(struct!.idRef),
  }
}


export function appPolicyIntentCreateParametersCreateListConsumerScalableGroupToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListConsumerScalableGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_ref: {
      value: cdktf.stringToHclTerraform(struct!.idRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListConsumerScalableGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListConsumerScalableGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRef = this._idRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListConsumerScalableGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idRef = value.idRef;
    }
  }

  // id_ref - computed: true, optional: true, required: false
  private _idRef?: string; 
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
  public set idRef(value: string) {
    this._idRef = value;
  }
  public resetIdRef() {
    this._idRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRefInput() {
    return this._idRef;
  }
}

export class AppPolicyIntentCreateParametersCreateListConsumerScalableGroupList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListConsumerScalableGroup[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListConsumerScalableGroupOutputReference {
    return new AppPolicyIntentCreateParametersCreateListConsumerScalableGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListConsumer {
  /**
  * scalable_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#scalable_group AppPolicyIntentCreate#scalable_group}
  */
  readonly scalableGroup?: AppPolicyIntentCreateParametersCreateListConsumerScalableGroup[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersCreateListConsumerToTerraform(struct?: AppPolicyIntentCreateParametersCreateListConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scalable_group: cdktf.listMapper(appPolicyIntentCreateParametersCreateListConsumerScalableGroupToTerraform, true)(struct!.scalableGroup),
  }
}


export function appPolicyIntentCreateParametersCreateListConsumerToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scalable_group: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListConsumerScalableGroupToHclTerraform, true)(struct!.scalableGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListConsumerScalableGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListConsumerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scalableGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableGroup = this._scalableGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scalableGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scalableGroup.internalValue = value.scalableGroup;
    }
  }

  // scalable_group - computed: false, optional: true, required: false
  private _scalableGroup = new AppPolicyIntentCreateParametersCreateListConsumerScalableGroupList(this, "scalable_group", false);
  public get scalableGroup() {
    return this._scalableGroup;
  }
  public putScalableGroup(value: AppPolicyIntentCreateParametersCreateListConsumerScalableGroup[] | cdktf.IResolvable) {
    this._scalableGroup.internalValue = value;
  }
  public resetScalableGroup() {
    this._scalableGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableGroupInput() {
    return this._scalableGroup.internalValue;
  }
}

export class AppPolicyIntentCreateParametersCreateListConsumerList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListConsumer[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListConsumerOutputReference {
    return new AppPolicyIntentCreateParametersCreateListConsumerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListContract {
  /**
  * Id ref to Queueing profile
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id_ref AppPolicyIntentCreate#id_ref}
  */
  readonly idRef?: string;
}

export function appPolicyIntentCreateParametersCreateListContractToTerraform(struct?: AppPolicyIntentCreateParametersCreateListContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_ref: cdktf.stringToTerraform(struct!.idRef),
  }
}


export function appPolicyIntentCreateParametersCreateListContractToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_ref: {
      value: cdktf.stringToHclTerraform(struct!.idRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListContractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRef = this._idRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idRef = value.idRef;
    }
  }

  // id_ref - computed: true, optional: true, required: false
  private _idRef?: string; 
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
  public set idRef(value: string) {
    this._idRef = value;
  }
  public resetIdRef() {
    this._idRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRefInput() {
    return this._idRef;
  }
}

export class AppPolicyIntentCreateParametersCreateListContractList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListContract[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListContractOutputReference {
    return new AppPolicyIntentCreateParametersCreateListContractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListExclusiveContractClause {
  /**
  * Device eemoval behavior
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#device_removal_behavior AppPolicyIntentCreate#device_removal_behavior}
  */
  readonly deviceRemovalBehavior?: string;
  /**
  * Is host tracking enabled
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#host_tracking_enabled AppPolicyIntentCreate#host_tracking_enabled}
  */
  readonly hostTrackingEnabled?: string;
  /**
  * Relevance level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#relevance_level AppPolicyIntentCreate#relevance_level}
  */
  readonly relevanceLevel?: string;
  /**
  * Type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#type AppPolicyIntentCreate#type}
  */
  readonly type?: string;
}

export function appPolicyIntentCreateParametersCreateListExclusiveContractClauseToTerraform(struct?: AppPolicyIntentCreateParametersCreateListExclusiveContractClause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_removal_behavior: cdktf.stringToTerraform(struct!.deviceRemovalBehavior),
    host_tracking_enabled: cdktf.stringToTerraform(struct!.hostTrackingEnabled),
    relevance_level: cdktf.stringToTerraform(struct!.relevanceLevel),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appPolicyIntentCreateParametersCreateListExclusiveContractClauseToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListExclusiveContractClause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_removal_behavior: {
      value: cdktf.stringToHclTerraform(struct!.deviceRemovalBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_tracking_enabled: {
      value: cdktf.stringToHclTerraform(struct!.hostTrackingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relevance_level: {
      value: cdktf.stringToHclTerraform(struct!.relevanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListExclusiveContractClauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListExclusiveContractClause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceRemovalBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRemovalBehavior = this._deviceRemovalBehavior;
    }
    if (this._hostTrackingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostTrackingEnabled = this._hostTrackingEnabled;
    }
    if (this._relevanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevanceLevel = this._relevanceLevel;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListExclusiveContractClause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceRemovalBehavior = undefined;
      this._hostTrackingEnabled = undefined;
      this._relevanceLevel = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceRemovalBehavior = value.deviceRemovalBehavior;
      this._hostTrackingEnabled = value.hostTrackingEnabled;
      this._relevanceLevel = value.relevanceLevel;
      this._type = value.type;
    }
  }

  // device_removal_behavior - computed: true, optional: true, required: false
  private _deviceRemovalBehavior?: string; 
  public get deviceRemovalBehavior() {
    return this.getStringAttribute('device_removal_behavior');
  }
  public set deviceRemovalBehavior(value: string) {
    this._deviceRemovalBehavior = value;
  }
  public resetDeviceRemovalBehavior() {
    this._deviceRemovalBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRemovalBehaviorInput() {
    return this._deviceRemovalBehavior;
  }

  // host_tracking_enabled - computed: true, optional: true, required: false
  private _hostTrackingEnabled?: string; 
  public get hostTrackingEnabled() {
    return this.getStringAttribute('host_tracking_enabled');
  }
  public set hostTrackingEnabled(value: string) {
    this._hostTrackingEnabled = value;
  }
  public resetHostTrackingEnabled() {
    this._hostTrackingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTrackingEnabledInput() {
    return this._hostTrackingEnabled;
  }

  // relevance_level - computed: true, optional: true, required: false
  private _relevanceLevel?: string; 
  public get relevanceLevel() {
    return this.getStringAttribute('relevance_level');
  }
  public set relevanceLevel(value: string) {
    this._relevanceLevel = value;
  }
  public resetRelevanceLevel() {
    this._relevanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevanceLevelInput() {
    return this._relevanceLevel;
  }

  // type - computed: true, optional: true, required: false
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
}

export class AppPolicyIntentCreateParametersCreateListExclusiveContractClauseList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListExclusiveContractClause[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListExclusiveContractClauseOutputReference {
    return new AppPolicyIntentCreateParametersCreateListExclusiveContractClauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListExclusiveContract {
  /**
  * clause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#clause AppPolicyIntentCreate#clause}
  */
  readonly clause?: AppPolicyIntentCreateParametersCreateListExclusiveContractClause[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersCreateListExclusiveContractToTerraform(struct?: AppPolicyIntentCreateParametersCreateListExclusiveContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clause: cdktf.listMapper(appPolicyIntentCreateParametersCreateListExclusiveContractClauseToTerraform, true)(struct!.clause),
  }
}


export function appPolicyIntentCreateParametersCreateListExclusiveContractToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListExclusiveContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clause: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListExclusiveContractClauseToHclTerraform, true)(struct!.clause),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListExclusiveContractClauseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListExclusiveContractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListExclusiveContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clause = this._clause?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListExclusiveContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clause.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clause.internalValue = value.clause;
    }
  }

  // clause - computed: false, optional: true, required: false
  private _clause = new AppPolicyIntentCreateParametersCreateListExclusiveContractClauseList(this, "clause", false);
  public get clause() {
    return this._clause;
  }
  public putClause(value: AppPolicyIntentCreateParametersCreateListExclusiveContractClause[] | cdktf.IResolvable) {
    this._clause.internalValue = value;
  }
  public resetClause() {
    this._clause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clauseInput() {
    return this._clause.internalValue;
  }
}

export class AppPolicyIntentCreateParametersCreateListExclusiveContractList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListExclusiveContract[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListExclusiveContractOutputReference {
    return new AppPolicyIntentCreateParametersCreateListExclusiveContractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListProducerScalableGroup {
  /**
  * Id ref to application-set or application Scalable group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id_ref AppPolicyIntentCreate#id_ref}
  */
  readonly idRef?: string;
}

export function appPolicyIntentCreateParametersCreateListProducerScalableGroupToTerraform(struct?: AppPolicyIntentCreateParametersCreateListProducerScalableGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_ref: cdktf.stringToTerraform(struct!.idRef),
  }
}


export function appPolicyIntentCreateParametersCreateListProducerScalableGroupToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListProducerScalableGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_ref: {
      value: cdktf.stringToHclTerraform(struct!.idRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListProducerScalableGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListProducerScalableGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRef = this._idRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListProducerScalableGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idRef = value.idRef;
    }
  }

  // id_ref - computed: true, optional: true, required: false
  private _idRef?: string; 
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
  public set idRef(value: string) {
    this._idRef = value;
  }
  public resetIdRef() {
    this._idRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRefInput() {
    return this._idRef;
  }
}

export class AppPolicyIntentCreateParametersCreateListProducerScalableGroupList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListProducerScalableGroup[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListProducerScalableGroupOutputReference {
    return new AppPolicyIntentCreateParametersCreateListProducerScalableGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListProducer {
  /**
  * scalable_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#scalable_group AppPolicyIntentCreate#scalable_group}
  */
  readonly scalableGroup?: AppPolicyIntentCreateParametersCreateListProducerScalableGroup[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersCreateListProducerToTerraform(struct?: AppPolicyIntentCreateParametersCreateListProducer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scalable_group: cdktf.listMapper(appPolicyIntentCreateParametersCreateListProducerScalableGroupToTerraform, true)(struct!.scalableGroup),
  }
}


export function appPolicyIntentCreateParametersCreateListProducerToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListProducer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scalable_group: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListProducerScalableGroupToHclTerraform, true)(struct!.scalableGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListProducerScalableGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListProducerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListProducer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scalableGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableGroup = this._scalableGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListProducer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scalableGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scalableGroup.internalValue = value.scalableGroup;
    }
  }

  // scalable_group - computed: false, optional: true, required: false
  private _scalableGroup = new AppPolicyIntentCreateParametersCreateListProducerScalableGroupList(this, "scalable_group", false);
  public get scalableGroup() {
    return this._scalableGroup;
  }
  public putScalableGroup(value: AppPolicyIntentCreateParametersCreateListProducerScalableGroup[] | cdktf.IResolvable) {
    this._scalableGroup.internalValue = value;
  }
  public resetScalableGroup() {
    this._scalableGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableGroupInput() {
    return this._scalableGroup.internalValue;
  }
}

export class AppPolicyIntentCreateParametersCreateListProducerList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListProducer[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListProducerOutputReference {
    return new AppPolicyIntentCreateParametersCreateListProducerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersCreateListStruct {
  /**
  * NONE: deployed policy to devices, DELETED: delete policy from devices, RESTORED: restored to original configuration
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#delete_policy_status AppPolicyIntentCreate#delete_policy_status}
  */
  readonly deletePolicyStatus?: string;
  /**
  * Concatination of <polcy name>_<application-set-name> or <polcy name>_global_policy_configuration or <polcy name>_queuing_customization
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#name AppPolicyIntentCreate#name}
  */
  readonly name?: string;
  /**
  * Policy name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#policy_scope AppPolicyIntentCreate#policy_scope}
  */
  readonly policyScope?: string;
  /**
  * Set to 4095 while producer refer to application Scalable group otherwise 100
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#priority AppPolicyIntentCreate#priority}
  */
  readonly priority?: string;
  /**
  * advanced_policy_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#advanced_policy_scope AppPolicyIntentCreate#advanced_policy_scope}
  */
  readonly advancedPolicyScope?: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScope[] | cdktf.IResolvable;
  /**
  * consumer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#consumer AppPolicyIntentCreate#consumer}
  */
  readonly consumer?: AppPolicyIntentCreateParametersCreateListConsumer[] | cdktf.IResolvable;
  /**
  * contract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#contract AppPolicyIntentCreate#contract}
  */
  readonly contract?: AppPolicyIntentCreateParametersCreateListContract[] | cdktf.IResolvable;
  /**
  * exclusive_contract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#exclusive_contract AppPolicyIntentCreate#exclusive_contract}
  */
  readonly exclusiveContract?: AppPolicyIntentCreateParametersCreateListExclusiveContract[] | cdktf.IResolvable;
  /**
  * producer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#producer AppPolicyIntentCreate#producer}
  */
  readonly producer?: AppPolicyIntentCreateParametersCreateListProducer[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersCreateListStructToTerraform(struct?: AppPolicyIntentCreateParametersCreateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_policy_status: cdktf.stringToTerraform(struct!.deletePolicyStatus),
    name: cdktf.stringToTerraform(struct!.name),
    policy_scope: cdktf.stringToTerraform(struct!.policyScope),
    priority: cdktf.stringToTerraform(struct!.priority),
    advanced_policy_scope: cdktf.listMapper(appPolicyIntentCreateParametersCreateListAdvancedPolicyScopeToTerraform, true)(struct!.advancedPolicyScope),
    consumer: cdktf.listMapper(appPolicyIntentCreateParametersCreateListConsumerToTerraform, true)(struct!.consumer),
    contract: cdktf.listMapper(appPolicyIntentCreateParametersCreateListContractToTerraform, true)(struct!.contract),
    exclusive_contract: cdktf.listMapper(appPolicyIntentCreateParametersCreateListExclusiveContractToTerraform, true)(struct!.exclusiveContract),
    producer: cdktf.listMapper(appPolicyIntentCreateParametersCreateListProducerToTerraform, true)(struct!.producer),
  }
}


export function appPolicyIntentCreateParametersCreateListStructToHclTerraform(struct?: AppPolicyIntentCreateParametersCreateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_policy_status: {
      value: cdktf.stringToHclTerraform(struct!.deletePolicyStatus),
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
    policy_scope: {
      value: cdktf.stringToHclTerraform(struct!.policyScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_policy_scope: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListAdvancedPolicyScopeToHclTerraform, true)(struct!.advancedPolicyScope),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeList",
    },
    consumer: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListConsumerToHclTerraform, true)(struct!.consumer),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListConsumerList",
    },
    contract: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListContractToHclTerraform, true)(struct!.contract),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListContractList",
    },
    exclusive_contract: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListExclusiveContractToHclTerraform, true)(struct!.exclusiveContract),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListExclusiveContractList",
    },
    producer: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListProducerToHclTerraform, true)(struct!.producer),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListProducerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersCreateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersCreateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletePolicyStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePolicyStatus = this._deletePolicyStatus;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyScope = this._policyScope;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._advancedPolicyScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedPolicyScope = this._advancedPolicyScope?.internalValue;
    }
    if (this._consumer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumer = this._consumer?.internalValue;
    }
    if (this._contract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contract = this._contract?.internalValue;
    }
    if (this._exclusiveContract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveContract = this._exclusiveContract?.internalValue;
    }
    if (this._producer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.producer = this._producer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersCreateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletePolicyStatus = undefined;
      this._name = undefined;
      this._policyScope = undefined;
      this._priority = undefined;
      this._advancedPolicyScope.internalValue = undefined;
      this._consumer.internalValue = undefined;
      this._contract.internalValue = undefined;
      this._exclusiveContract.internalValue = undefined;
      this._producer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletePolicyStatus = value.deletePolicyStatus;
      this._name = value.name;
      this._policyScope = value.policyScope;
      this._priority = value.priority;
      this._advancedPolicyScope.internalValue = value.advancedPolicyScope;
      this._consumer.internalValue = value.consumer;
      this._contract.internalValue = value.contract;
      this._exclusiveContract.internalValue = value.exclusiveContract;
      this._producer.internalValue = value.producer;
    }
  }

  // delete_policy_status - computed: true, optional: true, required: false
  private _deletePolicyStatus?: string; 
  public get deletePolicyStatus() {
    return this.getStringAttribute('delete_policy_status');
  }
  public set deletePolicyStatus(value: string) {
    this._deletePolicyStatus = value;
  }
  public resetDeletePolicyStatus() {
    this._deletePolicyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePolicyStatusInput() {
    return this._deletePolicyStatus;
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

  // policy_scope - computed: true, optional: true, required: false
  private _policyScope?: string; 
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }
  public set policyScope(value: string) {
    this._policyScope = value;
  }
  public resetPolicyScope() {
    this._policyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyScopeInput() {
    return this._policyScope;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // advanced_policy_scope - computed: false, optional: true, required: false
  private _advancedPolicyScope = new AppPolicyIntentCreateParametersCreateListAdvancedPolicyScopeList(this, "advanced_policy_scope", false);
  public get advancedPolicyScope() {
    return this._advancedPolicyScope;
  }
  public putAdvancedPolicyScope(value: AppPolicyIntentCreateParametersCreateListAdvancedPolicyScope[] | cdktf.IResolvable) {
    this._advancedPolicyScope.internalValue = value;
  }
  public resetAdvancedPolicyScope() {
    this._advancedPolicyScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPolicyScopeInput() {
    return this._advancedPolicyScope.internalValue;
  }

  // consumer - computed: false, optional: true, required: false
  private _consumer = new AppPolicyIntentCreateParametersCreateListConsumerList(this, "consumer", false);
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: AppPolicyIntentCreateParametersCreateListConsumer[] | cdktf.IResolvable) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // contract - computed: false, optional: true, required: false
  private _contract = new AppPolicyIntentCreateParametersCreateListContractList(this, "contract", false);
  public get contract() {
    return this._contract;
  }
  public putContract(value: AppPolicyIntentCreateParametersCreateListContract[] | cdktf.IResolvable) {
    this._contract.internalValue = value;
  }
  public resetContract() {
    this._contract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInput() {
    return this._contract.internalValue;
  }

  // exclusive_contract - computed: false, optional: true, required: false
  private _exclusiveContract = new AppPolicyIntentCreateParametersCreateListExclusiveContractList(this, "exclusive_contract", false);
  public get exclusiveContract() {
    return this._exclusiveContract;
  }
  public putExclusiveContract(value: AppPolicyIntentCreateParametersCreateListExclusiveContract[] | cdktf.IResolvable) {
    this._exclusiveContract.internalValue = value;
  }
  public resetExclusiveContract() {
    this._exclusiveContract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveContractInput() {
    return this._exclusiveContract.internalValue;
  }

  // producer - computed: false, optional: true, required: false
  private _producer = new AppPolicyIntentCreateParametersCreateListProducerList(this, "producer", false);
  public get producer() {
    return this._producer;
  }
  public putProducer(value: AppPolicyIntentCreateParametersCreateListProducer[] | cdktf.IResolvable) {
    this._producer.internalValue = value;
  }
  public resetProducer() {
    this._producer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerInput() {
    return this._producer.internalValue;
  }
}

export class AppPolicyIntentCreateParametersCreateListStructList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersCreateListStruct[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersCreateListStructOutputReference {
    return new AppPolicyIntentCreateParametersCreateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElement {
  /**
  * Group id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#group_id AppPolicyIntentCreate#group_id}
  */
  readonly groupId?: string[];
  /**
  * Id of Advance policy scope element
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id AppPolicyIntentCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ssid
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#ssid AppPolicyIntentCreate#ssid}
  */
  readonly ssid?: string[];
}

export function appPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupId),
    id: cdktf.stringToTerraform(struct!.id),
    ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ssid),
  }
}


export function appPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ssid),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssid = this._ssid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._id = undefined;
      this._ssid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._id = value.id;
      this._ssid = value.ssid;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string[]; 
  public get groupId() {
    return this.getListAttribute('group_id');
  }
  public set groupId(value: string[]) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // ssid - computed: true, optional: true, required: false
  private _ssid?: string[]; 
  public get ssid() {
    return this.getListAttribute('ssid');
  }
  public set ssid(value: string[]) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }
}

export class AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElement[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScope {
  /**
  * Id of Advance policy scope
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id AppPolicyIntentCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#name AppPolicyIntentCreate#name}
  */
  readonly name?: string;
  /**
  * advanced_policy_scope_element block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#advanced_policy_scope_element AppPolicyIntentCreate#advanced_policy_scope_element}
  */
  readonly advancedPolicyScopeElement?: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElement[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    advanced_policy_scope_element: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementToTerraform, true)(struct!.advancedPolicyScopeElement),
  }
}


export function appPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    advanced_policy_scope_element: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementToHclTerraform, true)(struct!.advancedPolicyScopeElement),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._advancedPolicyScopeElement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedPolicyScopeElement = this._advancedPolicyScopeElement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._advancedPolicyScopeElement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._advancedPolicyScopeElement.internalValue = value.advancedPolicyScopeElement;
    }
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

  // advanced_policy_scope_element - computed: false, optional: true, required: false
  private _advancedPolicyScopeElement = new AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElementList(this, "advanced_policy_scope_element", false);
  public get advancedPolicyScopeElement() {
    return this._advancedPolicyScopeElement;
  }
  public putAdvancedPolicyScopeElement(value: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeAdvancedPolicyScopeElement[] | cdktf.IResolvable) {
    this._advancedPolicyScopeElement.internalValue = value;
  }
  public resetAdvancedPolicyScopeElement() {
    this._advancedPolicyScopeElement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPolicyScopeElementInput() {
    return this._advancedPolicyScopeElement.internalValue;
  }
}

export class AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScope[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListConsumerScalableGroup {
  /**
  * Id ref to application Scalable group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id_ref AppPolicyIntentCreate#id_ref}
  */
  readonly idRef?: string;
}

export function appPolicyIntentCreateParametersUpdateListConsumerScalableGroupToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListConsumerScalableGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_ref: cdktf.stringToTerraform(struct!.idRef),
  }
}


export function appPolicyIntentCreateParametersUpdateListConsumerScalableGroupToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListConsumerScalableGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_ref: {
      value: cdktf.stringToHclTerraform(struct!.idRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListConsumerScalableGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListConsumerScalableGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRef = this._idRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListConsumerScalableGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idRef = value.idRef;
    }
  }

  // id_ref - computed: true, optional: true, required: false
  private _idRef?: string; 
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
  public set idRef(value: string) {
    this._idRef = value;
  }
  public resetIdRef() {
    this._idRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRefInput() {
    return this._idRef;
  }
}

export class AppPolicyIntentCreateParametersUpdateListConsumerScalableGroupList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListConsumerScalableGroup[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListConsumerScalableGroupOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListConsumerScalableGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListConsumer {
  /**
  * Id of Consumer
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id AppPolicyIntentCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * scalable_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#scalable_group AppPolicyIntentCreate#scalable_group}
  */
  readonly scalableGroup?: AppPolicyIntentCreateParametersUpdateListConsumerScalableGroup[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersUpdateListConsumerToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    scalable_group: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListConsumerScalableGroupToTerraform, true)(struct!.scalableGroup),
  }
}


export function appPolicyIntentCreateParametersUpdateListConsumerToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalable_group: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListConsumerScalableGroupToHclTerraform, true)(struct!.scalableGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListConsumerScalableGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListConsumerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scalableGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableGroup = this._scalableGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._scalableGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._scalableGroup.internalValue = value.scalableGroup;
    }
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

  // scalable_group - computed: false, optional: true, required: false
  private _scalableGroup = new AppPolicyIntentCreateParametersUpdateListConsumerScalableGroupList(this, "scalable_group", false);
  public get scalableGroup() {
    return this._scalableGroup;
  }
  public putScalableGroup(value: AppPolicyIntentCreateParametersUpdateListConsumerScalableGroup[] | cdktf.IResolvable) {
    this._scalableGroup.internalValue = value;
  }
  public resetScalableGroup() {
    this._scalableGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableGroupInput() {
    return this._scalableGroup.internalValue;
  }
}

export class AppPolicyIntentCreateParametersUpdateListConsumerList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListConsumer[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListConsumerOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListConsumerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListContract {
  /**
  * Id ref to Queueing profile
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id_ref AppPolicyIntentCreate#id_ref}
  */
  readonly idRef?: string;
}

export function appPolicyIntentCreateParametersUpdateListContractToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_ref: cdktf.stringToTerraform(struct!.idRef),
  }
}


export function appPolicyIntentCreateParametersUpdateListContractToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_ref: {
      value: cdktf.stringToHclTerraform(struct!.idRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListContractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRef = this._idRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idRef = value.idRef;
    }
  }

  // id_ref - computed: true, optional: true, required: false
  private _idRef?: string; 
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
  public set idRef(value: string) {
    this._idRef = value;
  }
  public resetIdRef() {
    this._idRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRefInput() {
    return this._idRef;
  }
}

export class AppPolicyIntentCreateParametersUpdateListContractList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListContract[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListContractOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListContractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListExclusiveContractClause {
  /**
  * Device removal behavior
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#device_removal_behavior AppPolicyIntentCreate#device_removal_behavior}
  */
  readonly deviceRemovalBehavior?: string;
  /**
  * Host tracking enabled
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#host_tracking_enabled AppPolicyIntentCreate#host_tracking_enabled}
  */
  readonly hostTrackingEnabled?: string;
  /**
  * Id of Business relevance or Application policy knobs clause
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id AppPolicyIntentCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Relevance level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#relevance_level AppPolicyIntentCreate#relevance_level}
  */
  readonly relevanceLevel?: string;
  /**
  * Type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#type AppPolicyIntentCreate#type}
  */
  readonly type?: string;
}

export function appPolicyIntentCreateParametersUpdateListExclusiveContractClauseToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListExclusiveContractClause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_removal_behavior: cdktf.stringToTerraform(struct!.deviceRemovalBehavior),
    host_tracking_enabled: cdktf.stringToTerraform(struct!.hostTrackingEnabled),
    id: cdktf.stringToTerraform(struct!.id),
    relevance_level: cdktf.stringToTerraform(struct!.relevanceLevel),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appPolicyIntentCreateParametersUpdateListExclusiveContractClauseToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListExclusiveContractClause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_removal_behavior: {
      value: cdktf.stringToHclTerraform(struct!.deviceRemovalBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_tracking_enabled: {
      value: cdktf.stringToHclTerraform(struct!.hostTrackingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relevance_level: {
      value: cdktf.stringToHclTerraform(struct!.relevanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListExclusiveContractClauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListExclusiveContractClause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceRemovalBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRemovalBehavior = this._deviceRemovalBehavior;
    }
    if (this._hostTrackingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostTrackingEnabled = this._hostTrackingEnabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._relevanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevanceLevel = this._relevanceLevel;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListExclusiveContractClause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceRemovalBehavior = undefined;
      this._hostTrackingEnabled = undefined;
      this._id = undefined;
      this._relevanceLevel = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceRemovalBehavior = value.deviceRemovalBehavior;
      this._hostTrackingEnabled = value.hostTrackingEnabled;
      this._id = value.id;
      this._relevanceLevel = value.relevanceLevel;
      this._type = value.type;
    }
  }

  // device_removal_behavior - computed: true, optional: true, required: false
  private _deviceRemovalBehavior?: string; 
  public get deviceRemovalBehavior() {
    return this.getStringAttribute('device_removal_behavior');
  }
  public set deviceRemovalBehavior(value: string) {
    this._deviceRemovalBehavior = value;
  }
  public resetDeviceRemovalBehavior() {
    this._deviceRemovalBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRemovalBehaviorInput() {
    return this._deviceRemovalBehavior;
  }

  // host_tracking_enabled - computed: true, optional: true, required: false
  private _hostTrackingEnabled?: string; 
  public get hostTrackingEnabled() {
    return this.getStringAttribute('host_tracking_enabled');
  }
  public set hostTrackingEnabled(value: string) {
    this._hostTrackingEnabled = value;
  }
  public resetHostTrackingEnabled() {
    this._hostTrackingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTrackingEnabledInput() {
    return this._hostTrackingEnabled;
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

  // relevance_level - computed: true, optional: true, required: false
  private _relevanceLevel?: string; 
  public get relevanceLevel() {
    return this.getStringAttribute('relevance_level');
  }
  public set relevanceLevel(value: string) {
    this._relevanceLevel = value;
  }
  public resetRelevanceLevel() {
    this._relevanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevanceLevelInput() {
    return this._relevanceLevel;
  }

  // type - computed: true, optional: true, required: false
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
}

export class AppPolicyIntentCreateParametersUpdateListExclusiveContractClauseList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListExclusiveContractClause[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListExclusiveContractClauseOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListExclusiveContractClauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListExclusiveContract {
  /**
  * Id of Exclusive contract
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id AppPolicyIntentCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * clause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#clause AppPolicyIntentCreate#clause}
  */
  readonly clause?: AppPolicyIntentCreateParametersUpdateListExclusiveContractClause[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersUpdateListExclusiveContractToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListExclusiveContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    clause: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListExclusiveContractClauseToTerraform, true)(struct!.clause),
  }
}


export function appPolicyIntentCreateParametersUpdateListExclusiveContractToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListExclusiveContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clause: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListExclusiveContractClauseToHclTerraform, true)(struct!.clause),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListExclusiveContractClauseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListExclusiveContractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListExclusiveContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._clause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clause = this._clause?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListExclusiveContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._clause.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._clause.internalValue = value.clause;
    }
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

  // clause - computed: false, optional: true, required: false
  private _clause = new AppPolicyIntentCreateParametersUpdateListExclusiveContractClauseList(this, "clause", false);
  public get clause() {
    return this._clause;
  }
  public putClause(value: AppPolicyIntentCreateParametersUpdateListExclusiveContractClause[] | cdktf.IResolvable) {
    this._clause.internalValue = value;
  }
  public resetClause() {
    this._clause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clauseInput() {
    return this._clause.internalValue;
  }
}

export class AppPolicyIntentCreateParametersUpdateListExclusiveContractList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListExclusiveContract[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListExclusiveContractOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListExclusiveContractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListProducerScalableGroup {
  /**
  * Id ref to application-set or application Scalable group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id_ref AppPolicyIntentCreate#id_ref}
  */
  readonly idRef?: string;
}

export function appPolicyIntentCreateParametersUpdateListProducerScalableGroupToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListProducerScalableGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_ref: cdktf.stringToTerraform(struct!.idRef),
  }
}


export function appPolicyIntentCreateParametersUpdateListProducerScalableGroupToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListProducerScalableGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_ref: {
      value: cdktf.stringToHclTerraform(struct!.idRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListProducerScalableGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListProducerScalableGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRef = this._idRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListProducerScalableGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idRef = value.idRef;
    }
  }

  // id_ref - computed: true, optional: true, required: false
  private _idRef?: string; 
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
  public set idRef(value: string) {
    this._idRef = value;
  }
  public resetIdRef() {
    this._idRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRefInput() {
    return this._idRef;
  }
}

export class AppPolicyIntentCreateParametersUpdateListProducerScalableGroupList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListProducerScalableGroup[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListProducerScalableGroupOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListProducerScalableGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListProducer {
  /**
  * Id of Producer
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id AppPolicyIntentCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * scalable_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#scalable_group AppPolicyIntentCreate#scalable_group}
  */
  readonly scalableGroup?: AppPolicyIntentCreateParametersUpdateListProducerScalableGroup[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersUpdateListProducerToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListProducer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    scalable_group: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListProducerScalableGroupToTerraform, true)(struct!.scalableGroup),
  }
}


export function appPolicyIntentCreateParametersUpdateListProducerToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListProducer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalable_group: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListProducerScalableGroupToHclTerraform, true)(struct!.scalableGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListProducerScalableGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListProducerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListProducer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scalableGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableGroup = this._scalableGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListProducer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._scalableGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._scalableGroup.internalValue = value.scalableGroup;
    }
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

  // scalable_group - computed: false, optional: true, required: false
  private _scalableGroup = new AppPolicyIntentCreateParametersUpdateListProducerScalableGroupList(this, "scalable_group", false);
  public get scalableGroup() {
    return this._scalableGroup;
  }
  public putScalableGroup(value: AppPolicyIntentCreateParametersUpdateListProducerScalableGroup[] | cdktf.IResolvable) {
    this._scalableGroup.internalValue = value;
  }
  public resetScalableGroup() {
    this._scalableGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableGroupInput() {
    return this._scalableGroup.internalValue;
  }
}

export class AppPolicyIntentCreateParametersUpdateListProducerList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListProducer[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListProducerOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListProducerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParametersUpdateListStruct {
  /**
  * NONE: deployed policy to devices, DELETED: delete policy from devices, RESTORED: restored to original configuration
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#delete_policy_status AppPolicyIntentCreate#delete_policy_status}
  */
  readonly deletePolicyStatus?: string;
  /**
  * Id of Group based policy
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#id AppPolicyIntentCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Concatination of <polcy name>_<application-set-name> or <polcy name>_global_policy_configuration or <polcy name>_queuing_customization
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#name AppPolicyIntentCreate#name}
  */
  readonly name?: string;
  /**
  * Policy name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#policy_scope AppPolicyIntentCreate#policy_scope}
  */
  readonly policyScope?: string;
  /**
  * Set to 4095 while producer refer to application Scalable group otherwise 100
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#priority AppPolicyIntentCreate#priority}
  */
  readonly priority?: string;
  /**
  * advanced_policy_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#advanced_policy_scope AppPolicyIntentCreate#advanced_policy_scope}
  */
  readonly advancedPolicyScope?: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScope[] | cdktf.IResolvable;
  /**
  * consumer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#consumer AppPolicyIntentCreate#consumer}
  */
  readonly consumer?: AppPolicyIntentCreateParametersUpdateListConsumer[] | cdktf.IResolvable;
  /**
  * contract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#contract AppPolicyIntentCreate#contract}
  */
  readonly contract?: AppPolicyIntentCreateParametersUpdateListContract[] | cdktf.IResolvable;
  /**
  * exclusive_contract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#exclusive_contract AppPolicyIntentCreate#exclusive_contract}
  */
  readonly exclusiveContract?: AppPolicyIntentCreateParametersUpdateListExclusiveContract[] | cdktf.IResolvable;
  /**
  * producer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#producer AppPolicyIntentCreate#producer}
  */
  readonly producer?: AppPolicyIntentCreateParametersUpdateListProducer[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersUpdateListStructToTerraform(struct?: AppPolicyIntentCreateParametersUpdateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_policy_status: cdktf.stringToTerraform(struct!.deletePolicyStatus),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    policy_scope: cdktf.stringToTerraform(struct!.policyScope),
    priority: cdktf.stringToTerraform(struct!.priority),
    advanced_policy_scope: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeToTerraform, true)(struct!.advancedPolicyScope),
    consumer: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListConsumerToTerraform, true)(struct!.consumer),
    contract: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListContractToTerraform, true)(struct!.contract),
    exclusive_contract: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListExclusiveContractToTerraform, true)(struct!.exclusiveContract),
    producer: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListProducerToTerraform, true)(struct!.producer),
  }
}


export function appPolicyIntentCreateParametersUpdateListStructToHclTerraform(struct?: AppPolicyIntentCreateParametersUpdateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_policy_status: {
      value: cdktf.stringToHclTerraform(struct!.deletePolicyStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    policy_scope: {
      value: cdktf.stringToHclTerraform(struct!.policyScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_policy_scope: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeToHclTerraform, true)(struct!.advancedPolicyScope),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeList",
    },
    consumer: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListConsumerToHclTerraform, true)(struct!.consumer),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListConsumerList",
    },
    contract: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListContractToHclTerraform, true)(struct!.contract),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListContractList",
    },
    exclusive_contract: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListExclusiveContractToHclTerraform, true)(struct!.exclusiveContract),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListExclusiveContractList",
    },
    producer: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListProducerToHclTerraform, true)(struct!.producer),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListProducerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersUpdateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyIntentCreateParametersUpdateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletePolicyStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePolicyStatus = this._deletePolicyStatus;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyScope = this._policyScope;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._advancedPolicyScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedPolicyScope = this._advancedPolicyScope?.internalValue;
    }
    if (this._consumer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumer = this._consumer?.internalValue;
    }
    if (this._contract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contract = this._contract?.internalValue;
    }
    if (this._exclusiveContract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveContract = this._exclusiveContract?.internalValue;
    }
    if (this._producer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.producer = this._producer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParametersUpdateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletePolicyStatus = undefined;
      this._id = undefined;
      this._name = undefined;
      this._policyScope = undefined;
      this._priority = undefined;
      this._advancedPolicyScope.internalValue = undefined;
      this._consumer.internalValue = undefined;
      this._contract.internalValue = undefined;
      this._exclusiveContract.internalValue = undefined;
      this._producer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletePolicyStatus = value.deletePolicyStatus;
      this._id = value.id;
      this._name = value.name;
      this._policyScope = value.policyScope;
      this._priority = value.priority;
      this._advancedPolicyScope.internalValue = value.advancedPolicyScope;
      this._consumer.internalValue = value.consumer;
      this._contract.internalValue = value.contract;
      this._exclusiveContract.internalValue = value.exclusiveContract;
      this._producer.internalValue = value.producer;
    }
  }

  // delete_policy_status - computed: true, optional: true, required: false
  private _deletePolicyStatus?: string; 
  public get deletePolicyStatus() {
    return this.getStringAttribute('delete_policy_status');
  }
  public set deletePolicyStatus(value: string) {
    this._deletePolicyStatus = value;
  }
  public resetDeletePolicyStatus() {
    this._deletePolicyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePolicyStatusInput() {
    return this._deletePolicyStatus;
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

  // policy_scope - computed: true, optional: true, required: false
  private _policyScope?: string; 
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }
  public set policyScope(value: string) {
    this._policyScope = value;
  }
  public resetPolicyScope() {
    this._policyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyScopeInput() {
    return this._policyScope;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // advanced_policy_scope - computed: false, optional: true, required: false
  private _advancedPolicyScope = new AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScopeList(this, "advanced_policy_scope", false);
  public get advancedPolicyScope() {
    return this._advancedPolicyScope;
  }
  public putAdvancedPolicyScope(value: AppPolicyIntentCreateParametersUpdateListAdvancedPolicyScope[] | cdktf.IResolvable) {
    this._advancedPolicyScope.internalValue = value;
  }
  public resetAdvancedPolicyScope() {
    this._advancedPolicyScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPolicyScopeInput() {
    return this._advancedPolicyScope.internalValue;
  }

  // consumer - computed: false, optional: true, required: false
  private _consumer = new AppPolicyIntentCreateParametersUpdateListConsumerList(this, "consumer", false);
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: AppPolicyIntentCreateParametersUpdateListConsumer[] | cdktf.IResolvable) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // contract - computed: false, optional: true, required: false
  private _contract = new AppPolicyIntentCreateParametersUpdateListContractList(this, "contract", false);
  public get contract() {
    return this._contract;
  }
  public putContract(value: AppPolicyIntentCreateParametersUpdateListContract[] | cdktf.IResolvable) {
    this._contract.internalValue = value;
  }
  public resetContract() {
    this._contract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInput() {
    return this._contract.internalValue;
  }

  // exclusive_contract - computed: false, optional: true, required: false
  private _exclusiveContract = new AppPolicyIntentCreateParametersUpdateListExclusiveContractList(this, "exclusive_contract", false);
  public get exclusiveContract() {
    return this._exclusiveContract;
  }
  public putExclusiveContract(value: AppPolicyIntentCreateParametersUpdateListExclusiveContract[] | cdktf.IResolvable) {
    this._exclusiveContract.internalValue = value;
  }
  public resetExclusiveContract() {
    this._exclusiveContract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveContractInput() {
    return this._exclusiveContract.internalValue;
  }

  // producer - computed: false, optional: true, required: false
  private _producer = new AppPolicyIntentCreateParametersUpdateListProducerList(this, "producer", false);
  public get producer() {
    return this._producer;
  }
  public putProducer(value: AppPolicyIntentCreateParametersUpdateListProducer[] | cdktf.IResolvable) {
    this._producer.internalValue = value;
  }
  public resetProducer() {
    this._producer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerInput() {
    return this._producer.internalValue;
  }
}

export class AppPolicyIntentCreateParametersUpdateListStructList extends cdktf.ComplexList {
  public internalValue? : AppPolicyIntentCreateParametersUpdateListStruct[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyIntentCreateParametersUpdateListStructOutputReference {
    return new AppPolicyIntentCreateParametersUpdateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyIntentCreateParameters {
  /**
  * Delete list of Group Based Policy ids
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#delete_list AppPolicyIntentCreate#delete_list}
  */
  readonly deleteList?: string[];
  /**
  * create_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#create_list AppPolicyIntentCreate#create_list}
  */
  readonly createList?: AppPolicyIntentCreateParametersCreateListStruct[] | cdktf.IResolvable;
  /**
  * update_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#update_list AppPolicyIntentCreate#update_list}
  */
  readonly updateList?: AppPolicyIntentCreateParametersUpdateListStruct[] | cdktf.IResolvable;
}

export function appPolicyIntentCreateParametersToTerraform(struct?: AppPolicyIntentCreateParametersOutputReference | AppPolicyIntentCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deleteList),
    create_list: cdktf.listMapper(appPolicyIntentCreateParametersCreateListStructToTerraform, true)(struct!.createList),
    update_list: cdktf.listMapper(appPolicyIntentCreateParametersUpdateListStructToTerraform, true)(struct!.updateList),
  }
}


export function appPolicyIntentCreateParametersToHclTerraform(struct?: AppPolicyIntentCreateParametersOutputReference | AppPolicyIntentCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deleteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    create_list: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersCreateListStructToHclTerraform, true)(struct!.createList),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersCreateListStructList",
    },
    update_list: {
      value: cdktf.listMapperHcl(appPolicyIntentCreateParametersUpdateListStructToHclTerraform, true)(struct!.updateList),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyIntentCreateParametersUpdateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyIntentCreateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppPolicyIntentCreateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteList = this._deleteList;
    }
    if (this._createList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createList = this._createList?.internalValue;
    }
    if (this._updateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateList = this._updateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyIntentCreateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteList = undefined;
      this._createList.internalValue = undefined;
      this._updateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteList = value.deleteList;
      this._createList.internalValue = value.createList;
      this._updateList.internalValue = value.updateList;
    }
  }

  // delete_list - computed: true, optional: true, required: false
  private _deleteList?: string[]; 
  public get deleteList() {
    return this.getListAttribute('delete_list');
  }
  public set deleteList(value: string[]) {
    this._deleteList = value;
  }
  public resetDeleteList() {
    this._deleteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteListInput() {
    return this._deleteList;
  }

  // create_list - computed: false, optional: true, required: false
  private _createList = new AppPolicyIntentCreateParametersCreateListStructList(this, "create_list", false);
  public get createList() {
    return this._createList;
  }
  public putCreateList(value: AppPolicyIntentCreateParametersCreateListStruct[] | cdktf.IResolvable) {
    this._createList.internalValue = value;
  }
  public resetCreateList() {
    this._createList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createListInput() {
    return this._createList.internalValue;
  }

  // update_list - computed: false, optional: true, required: false
  private _updateList = new AppPolicyIntentCreateParametersUpdateListStructList(this, "update_list", false);
  public get updateList() {
    return this._updateList;
  }
  public putUpdateList(value: AppPolicyIntentCreateParametersUpdateListStruct[] | cdktf.IResolvable) {
    this._updateList.internalValue = value;
  }
  public resetUpdateList() {
    this._updateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateListInput() {
    return this._updateList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create dnacenter_app_policy_intent_create}
*/
export class AppPolicyIntentCreate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_app_policy_intent_create";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppPolicyIntentCreate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppPolicyIntentCreate to import
  * @param importFromId The id of the existing AppPolicyIntentCreate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppPolicyIntentCreate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_app_policy_intent_create", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_intent_create dnacenter_app_policy_intent_create} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppPolicyIntentCreateConfig
  */
  public constructor(scope: Construct, id: string, config: AppPolicyIntentCreateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_app_policy_intent_create',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new AppPolicyIntentCreateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new AppPolicyIntentCreateParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: AppPolicyIntentCreateParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: appPolicyIntentCreateParametersToTerraform(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: appPolicyIntentCreateParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppPolicyIntentCreateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
