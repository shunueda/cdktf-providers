// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RequestConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the approval sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#approval_sequence_id RequestCondition#approval_sequence_id}
  */
  readonly approvalSequenceId: string;
  /**
  * The description of the request condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#description RequestCondition#description}
  */
  readonly description?: string;
  /**
  * The name of the request condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#name RequestCondition#name}
  */
  readonly name: string;
  /**
  * The priority of the condition. The smaller the number, the higher the priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#priority RequestCondition#priority}
  */
  readonly priority?: number;
  /**
  * The id of the resource in Okta ID format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#resource_id RequestCondition#resource_id}
  */
  readonly resourceId: string;
  /**
  * access_duration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#access_duration_settings RequestCondition#access_duration_settings}
  */
  readonly accessDurationSettings?: RequestConditionAccessDurationSettings;
  /**
  * access_scope_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#access_scope_settings RequestCondition#access_scope_settings}
  */
  readonly accessScopeSettings?: RequestConditionAccessScopeSettings;
  /**
  * requester_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#requester_settings RequestCondition#requester_settings}
  */
  readonly requesterSettings?: RequestConditionRequesterSettings;
}
export interface RequestConditionAccessDurationSettings {
  /**
  * The duration set by the admin for access durations. Use ISO8061 notation for duration values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#duration RequestCondition#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#type RequestCondition#type}
  */
  readonly type?: string;
}

export function requestConditionAccessDurationSettingsToTerraform(struct?: RequestConditionAccessDurationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function requestConditionAccessDurationSettingsToHclTerraform(struct?: RequestConditionAccessDurationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
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

export class RequestConditionAccessDurationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RequestConditionAccessDurationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestConditionAccessDurationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._type = value.type;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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
}
export interface RequestConditionAccessScopeSettingsIds {
  /**
  * The group/entitlement bundle ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#id RequestCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function requestConditionAccessScopeSettingsIdsToTerraform(struct?: RequestConditionAccessScopeSettingsIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function requestConditionAccessScopeSettingsIdsToHclTerraform(struct?: RequestConditionAccessScopeSettingsIds | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestConditionAccessScopeSettingsIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RequestConditionAccessScopeSettingsIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestConditionAccessScopeSettingsIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class RequestConditionAccessScopeSettingsIdsList extends cdktf.ComplexList {
  public internalValue? : RequestConditionAccessScopeSettingsIds[] | cdktf.IResolvable

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
  public get(index: number): RequestConditionAccessScopeSettingsIdsOutputReference {
    return new RequestConditionAccessScopeSettingsIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RequestConditionAccessScopeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#type RequestCondition#type}
  */
  readonly type: string;
  /**
  * ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#ids RequestCondition#ids}
  */
  readonly ids?: RequestConditionAccessScopeSettingsIds[] | cdktf.IResolvable;
}

export function requestConditionAccessScopeSettingsToTerraform(struct?: RequestConditionAccessScopeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    ids: cdktf.listMapper(requestConditionAccessScopeSettingsIdsToTerraform, true)(struct!.ids),
  }
}


export function requestConditionAccessScopeSettingsToHclTerraform(struct?: RequestConditionAccessScopeSettings | cdktf.IResolvable): any {
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
    ids: {
      value: cdktf.listMapperHcl(requestConditionAccessScopeSettingsIdsToHclTerraform, true)(struct!.ids),
      isBlock: true,
      type: "list",
      storageClassType: "RequestConditionAccessScopeSettingsIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestConditionAccessScopeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RequestConditionAccessScopeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._ids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestConditionAccessScopeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._ids.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._ids.internalValue = value.ids;
    }
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

  // ids - computed: false, optional: true, required: false
  private _ids = new RequestConditionAccessScopeSettingsIdsList(this, "ids", false);
  public get ids() {
    return this._ids;
  }
  public putIds(value: RequestConditionAccessScopeSettingsIds[] | cdktf.IResolvable) {
    this._ids.internalValue = value;
  }
  public resetIds() {
    this._ids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids.internalValue;
  }
}
export interface RequestConditionRequesterSettingsIds {
  /**
  * The group/team ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#id RequestCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function requestConditionRequesterSettingsIdsToTerraform(struct?: RequestConditionRequesterSettingsIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function requestConditionRequesterSettingsIdsToHclTerraform(struct?: RequestConditionRequesterSettingsIds | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestConditionRequesterSettingsIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RequestConditionRequesterSettingsIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestConditionRequesterSettingsIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class RequestConditionRequesterSettingsIdsList extends cdktf.ComplexList {
  public internalValue? : RequestConditionRequesterSettingsIds[] | cdktf.IResolvable

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
  public get(index: number): RequestConditionRequesterSettingsIdsOutputReference {
    return new RequestConditionRequesterSettingsIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RequestConditionRequesterSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#type RequestCondition#type}
  */
  readonly type: string;
  /**
  * ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#ids RequestCondition#ids}
  */
  readonly ids?: RequestConditionRequesterSettingsIds[] | cdktf.IResolvable;
}

export function requestConditionRequesterSettingsToTerraform(struct?: RequestConditionRequesterSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    ids: cdktf.listMapper(requestConditionRequesterSettingsIdsToTerraform, true)(struct!.ids),
  }
}


export function requestConditionRequesterSettingsToHclTerraform(struct?: RequestConditionRequesterSettings | cdktf.IResolvable): any {
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
    ids: {
      value: cdktf.listMapperHcl(requestConditionRequesterSettingsIdsToHclTerraform, true)(struct!.ids),
      isBlock: true,
      type: "list",
      storageClassType: "RequestConditionRequesterSettingsIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestConditionRequesterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RequestConditionRequesterSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._ids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestConditionRequesterSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._ids.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._ids.internalValue = value.ids;
    }
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

  // ids - computed: false, optional: true, required: false
  private _ids = new RequestConditionRequesterSettingsIdsList(this, "ids", false);
  public get ids() {
    return this._ids;
  }
  public putIds(value: RequestConditionRequesterSettingsIds[] | cdktf.IResolvable) {
    this._ids.internalValue = value;
  }
  public resetIds() {
    this._ids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition okta_request_condition}
*/
export class RequestCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_request_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RequestCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RequestCondition to import
  * @param importFromId The id of the existing RequestCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RequestCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_request_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_condition okta_request_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RequestConditionConfig
  */
  public constructor(scope: Construct, id: string, config: RequestConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_request_condition',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvalSequenceId = config.approvalSequenceId;
    this._description = config.description;
    this._name = config.name;
    this._priority = config.priority;
    this._resourceId = config.resourceId;
    this._accessDurationSettings.internalValue = config.accessDurationSettings;
    this._accessScopeSettings.internalValue = config.accessScopeSettings;
    this._requesterSettings.internalValue = config.requesterSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_sequence_id - computed: false, optional: false, required: true
  private _approvalSequenceId?: string; 
  public get approvalSequenceId() {
    return this.getStringAttribute('approval_sequence_id');
  }
  public set approvalSequenceId(value: string) {
    this._approvalSequenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalSequenceIdInput() {
    return this._approvalSequenceId;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // access_duration_settings - computed: false, optional: true, required: false
  private _accessDurationSettings = new RequestConditionAccessDurationSettingsOutputReference(this, "access_duration_settings");
  public get accessDurationSettings() {
    return this._accessDurationSettings;
  }
  public putAccessDurationSettings(value: RequestConditionAccessDurationSettings) {
    this._accessDurationSettings.internalValue = value;
  }
  public resetAccessDurationSettings() {
    this._accessDurationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDurationSettingsInput() {
    return this._accessDurationSettings.internalValue;
  }

  // access_scope_settings - computed: false, optional: true, required: false
  private _accessScopeSettings = new RequestConditionAccessScopeSettingsOutputReference(this, "access_scope_settings");
  public get accessScopeSettings() {
    return this._accessScopeSettings;
  }
  public putAccessScopeSettings(value: RequestConditionAccessScopeSettings) {
    this._accessScopeSettings.internalValue = value;
  }
  public resetAccessScopeSettings() {
    this._accessScopeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessScopeSettingsInput() {
    return this._accessScopeSettings.internalValue;
  }

  // requester_settings - computed: false, optional: true, required: false
  private _requesterSettings = new RequestConditionRequesterSettingsOutputReference(this, "requester_settings");
  public get requesterSettings() {
    return this._requesterSettings;
  }
  public putRequesterSettings(value: RequestConditionRequesterSettings) {
    this._requesterSettings.internalValue = value;
  }
  public resetRequesterSettings() {
    this._requesterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterSettingsInput() {
    return this._requesterSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_sequence_id: cdktf.stringToTerraform(this._approvalSequenceId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      access_duration_settings: requestConditionAccessDurationSettingsToTerraform(this._accessDurationSettings.internalValue),
      access_scope_settings: requestConditionAccessScopeSettingsToTerraform(this._accessScopeSettings.internalValue),
      requester_settings: requestConditionRequesterSettingsToTerraform(this._requesterSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_sequence_id: {
        value: cdktf.stringToHclTerraform(this._approvalSequenceId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_duration_settings: {
        value: requestConditionAccessDurationSettingsToHclTerraform(this._accessDurationSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RequestConditionAccessDurationSettings",
      },
      access_scope_settings: {
        value: requestConditionAccessScopeSettingsToHclTerraform(this._accessScopeSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RequestConditionAccessScopeSettings",
      },
      requester_settings: {
        value: requestConditionRequesterSettingsToHclTerraform(this._requesterSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RequestConditionRequesterSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
