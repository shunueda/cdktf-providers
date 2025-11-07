// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatediffsnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#gslb_name Statediffsnapshot#gslb_name}
  */
  readonly gslbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#gslb_uuid Statediffsnapshot#gslb_uuid}
  */
  readonly gslbUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#id Statediffsnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#name Statediffsnapshot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#pool_name Statediffsnapshot#pool_name}
  */
  readonly poolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#pool_uuid Statediffsnapshot#pool_uuid}
  */
  readonly poolUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#se_group_name Statediffsnapshot#se_group_name}
  */
  readonly seGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#se_group_uuid Statediffsnapshot#se_group_uuid}
  */
  readonly seGroupUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#se_name Statediffsnapshot#se_name}
  */
  readonly seName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#se_uuid Statediffsnapshot#se_uuid}
  */
  readonly seUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#snapshot_type Statediffsnapshot#snapshot_type}
  */
  readonly snapshotType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#statediff_operation_ref Statediffsnapshot#statediff_operation_ref}
  */
  readonly statediffOperationRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#tenant_ref Statediffsnapshot#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#uuid Statediffsnapshot#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#vs_name Statediffsnapshot#vs_name}
  */
  readonly vsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#vs_uuid Statediffsnapshot#vs_uuid}
  */
  readonly vsUuid?: string;
  /**
  * post_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#post_snapshot Statediffsnapshot#post_snapshot}
  */
  readonly postSnapshot?: StatediffsnapshotPostSnapshot[] | cdktf.IResolvable;
  /**
  * pre_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#pre_snapshot Statediffsnapshot#pre_snapshot}
  */
  readonly preSnapshot?: StatediffsnapshotPreSnapshot[] | cdktf.IResolvable;
}
export interface StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#secs Statediffsnapshot#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#usecs Statediffsnapshot#usecs}
  */
  readonly usecs: string;
}

export function statediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeToTerraform(struct?: StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function statediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeToHclTerraform(struct?: StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeOutputReference {
    return new StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotGssnapshotOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason Statediffsnapshot#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code Statediffsnapshot#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code_string Statediffsnapshot#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#state Statediffsnapshot#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#last_changed_time Statediffsnapshot#last_changed_time}
  */
  readonly lastChangedTime?: StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function statediffsnapshotPostSnapshotGssnapshotOperStatusToTerraform(struct?: StatediffsnapshotPostSnapshotGssnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(statediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function statediffsnapshotPostSnapshotGssnapshotOperStatusToHclTerraform(struct?: StatediffsnapshotPostSnapshotGssnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotGssnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotGssnapshotOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotGssnapshotOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: StatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class StatediffsnapshotPostSnapshotGssnapshotOperStatusList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotGssnapshotOperStatus[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotGssnapshotOperStatusOutputReference {
    return new StatediffsnapshotPostSnapshotGssnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotGssnapshot {
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#oper_status Statediffsnapshot#oper_status}
  */
  readonly operStatus?: StatediffsnapshotPostSnapshotGssnapshotOperStatus[] | cdktf.IResolvable;
}

export function statediffsnapshotPostSnapshotGssnapshotToTerraform(struct?: StatediffsnapshotPostSnapshotGssnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_status: cdktf.listMapper(statediffsnapshotPostSnapshotGssnapshotOperStatusToTerraform, true)(struct!.operStatus),
  }
}


export function statediffsnapshotPostSnapshotGssnapshotToHclTerraform(struct?: StatediffsnapshotPostSnapshotGssnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_status: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotGssnapshotOperStatusToHclTerraform, true)(struct!.operStatus),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotGssnapshotOperStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotGssnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotGssnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotGssnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = value.operStatus;
    }
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new StatediffsnapshotPostSnapshotGssnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: StatediffsnapshotPostSnapshotGssnapshotOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }
}

export class StatediffsnapshotPostSnapshotGssnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotGssnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotGssnapshotOutputReference {
    return new StatediffsnapshotPostSnapshotGssnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#secs Statediffsnapshot#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#usecs Statediffsnapshot#usecs}
  */
  readonly usecs: string;
}

export function statediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeToTerraform(struct?: StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function statediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeToHclTerraform(struct?: StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference {
    return new StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotPoolsnapshotOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason Statediffsnapshot#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code Statediffsnapshot#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code_string Statediffsnapshot#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#state Statediffsnapshot#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#last_changed_time Statediffsnapshot#last_changed_time}
  */
  readonly lastChangedTime?: StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function statediffsnapshotPostSnapshotPoolsnapshotOperStatusToTerraform(struct?: StatediffsnapshotPostSnapshotPoolsnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(statediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function statediffsnapshotPostSnapshotPoolsnapshotOperStatusToHclTerraform(struct?: StatediffsnapshotPostSnapshotPoolsnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotPoolsnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotPoolsnapshotOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotPoolsnapshotOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: StatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class StatediffsnapshotPostSnapshotPoolsnapshotOperStatusList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotPoolsnapshotOperStatus[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotPoolsnapshotOperStatusOutputReference {
    return new StatediffsnapshotPostSnapshotPoolsnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotPoolsnapshot {
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#oper_status Statediffsnapshot#oper_status}
  */
  readonly operStatus?: StatediffsnapshotPostSnapshotPoolsnapshotOperStatus[] | cdktf.IResolvable;
}

export function statediffsnapshotPostSnapshotPoolsnapshotToTerraform(struct?: StatediffsnapshotPostSnapshotPoolsnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_status: cdktf.listMapper(statediffsnapshotPostSnapshotPoolsnapshotOperStatusToTerraform, true)(struct!.operStatus),
  }
}


export function statediffsnapshotPostSnapshotPoolsnapshotToHclTerraform(struct?: StatediffsnapshotPostSnapshotPoolsnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_status: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotPoolsnapshotOperStatusToHclTerraform, true)(struct!.operStatus),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotPoolsnapshotOperStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotPoolsnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotPoolsnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotPoolsnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = value.operStatus;
    }
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new StatediffsnapshotPostSnapshotPoolsnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: StatediffsnapshotPostSnapshotPoolsnapshotOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }
}

export class StatediffsnapshotPostSnapshotPoolsnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotPoolsnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotPoolsnapshotOutputReference {
    return new StatediffsnapshotPostSnapshotPoolsnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#secs Statediffsnapshot#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#usecs Statediffsnapshot#usecs}
  */
  readonly usecs: string;
}

export function statediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeToTerraform(struct?: StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function statediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeToHclTerraform(struct?: StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeOutputReference {
    return new StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotSesnapshotOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason Statediffsnapshot#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code Statediffsnapshot#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code_string Statediffsnapshot#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#state Statediffsnapshot#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#last_changed_time Statediffsnapshot#last_changed_time}
  */
  readonly lastChangedTime?: StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function statediffsnapshotPostSnapshotSesnapshotOperStatusToTerraform(struct?: StatediffsnapshotPostSnapshotSesnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(statediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function statediffsnapshotPostSnapshotSesnapshotOperStatusToHclTerraform(struct?: StatediffsnapshotPostSnapshotSesnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotSesnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotSesnapshotOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotSesnapshotOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: StatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class StatediffsnapshotPostSnapshotSesnapshotOperStatusList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotSesnapshotOperStatus[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotSesnapshotOperStatusOutputReference {
    return new StatediffsnapshotPostSnapshotSesnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotSesnapshot {
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#oper_status Statediffsnapshot#oper_status}
  */
  readonly operStatus?: StatediffsnapshotPostSnapshotSesnapshotOperStatus[] | cdktf.IResolvable;
}

export function statediffsnapshotPostSnapshotSesnapshotToTerraform(struct?: StatediffsnapshotPostSnapshotSesnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_status: cdktf.listMapper(statediffsnapshotPostSnapshotSesnapshotOperStatusToTerraform, true)(struct!.operStatus),
  }
}


export function statediffsnapshotPostSnapshotSesnapshotToHclTerraform(struct?: StatediffsnapshotPostSnapshotSesnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_status: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotSesnapshotOperStatusToHclTerraform, true)(struct!.operStatus),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotSesnapshotOperStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotSesnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotSesnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotSesnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = value.operStatus;
    }
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new StatediffsnapshotPostSnapshotSesnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: StatediffsnapshotPostSnapshotSesnapshotOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }
}

export class StatediffsnapshotPostSnapshotSesnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotSesnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotSesnapshotOutputReference {
    return new StatediffsnapshotPostSnapshotSesnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#secs Statediffsnapshot#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#usecs Statediffsnapshot#usecs}
  */
  readonly usecs: string;
}

export function statediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeToTerraform(struct?: StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function statediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeToHclTerraform(struct?: StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeOutputReference {
    return new StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotVssnapshotOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason Statediffsnapshot#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code Statediffsnapshot#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code_string Statediffsnapshot#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#state Statediffsnapshot#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#last_changed_time Statediffsnapshot#last_changed_time}
  */
  readonly lastChangedTime?: StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function statediffsnapshotPostSnapshotVssnapshotOperStatusToTerraform(struct?: StatediffsnapshotPostSnapshotVssnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(statediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function statediffsnapshotPostSnapshotVssnapshotOperStatusToHclTerraform(struct?: StatediffsnapshotPostSnapshotVssnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotVssnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotVssnapshotOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotVssnapshotOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: StatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class StatediffsnapshotPostSnapshotVssnapshotOperStatusList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotVssnapshotOperStatus[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotVssnapshotOperStatusOutputReference {
    return new StatediffsnapshotPostSnapshotVssnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshotVssnapshot {
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#oper_status Statediffsnapshot#oper_status}
  */
  readonly operStatus?: StatediffsnapshotPostSnapshotVssnapshotOperStatus[] | cdktf.IResolvable;
}

export function statediffsnapshotPostSnapshotVssnapshotToTerraform(struct?: StatediffsnapshotPostSnapshotVssnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_status: cdktf.listMapper(statediffsnapshotPostSnapshotVssnapshotOperStatusToTerraform, true)(struct!.operStatus),
  }
}


export function statediffsnapshotPostSnapshotVssnapshotToHclTerraform(struct?: StatediffsnapshotPostSnapshotVssnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_status: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotVssnapshotOperStatusToHclTerraform, true)(struct!.operStatus),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotVssnapshotOperStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotVssnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshotVssnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshotVssnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = value.operStatus;
    }
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new StatediffsnapshotPostSnapshotVssnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: StatediffsnapshotPostSnapshotVssnapshotOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }
}

export class StatediffsnapshotPostSnapshotVssnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshotVssnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotVssnapshotOutputReference {
    return new StatediffsnapshotPostSnapshotVssnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPostSnapshot {
  /**
  * gssnapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#gssnapshot Statediffsnapshot#gssnapshot}
  */
  readonly gssnapshot?: StatediffsnapshotPostSnapshotGssnapshot[] | cdktf.IResolvable;
  /**
  * poolsnapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#poolsnapshot Statediffsnapshot#poolsnapshot}
  */
  readonly poolsnapshot?: StatediffsnapshotPostSnapshotPoolsnapshot[] | cdktf.IResolvable;
  /**
  * sesnapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#sesnapshot Statediffsnapshot#sesnapshot}
  */
  readonly sesnapshot?: StatediffsnapshotPostSnapshotSesnapshot[] | cdktf.IResolvable;
  /**
  * vssnapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#vssnapshot Statediffsnapshot#vssnapshot}
  */
  readonly vssnapshot?: StatediffsnapshotPostSnapshotVssnapshot[] | cdktf.IResolvable;
}

export function statediffsnapshotPostSnapshotToTerraform(struct?: StatediffsnapshotPostSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gssnapshot: cdktf.listMapper(statediffsnapshotPostSnapshotGssnapshotToTerraform, true)(struct!.gssnapshot),
    poolsnapshot: cdktf.listMapper(statediffsnapshotPostSnapshotPoolsnapshotToTerraform, true)(struct!.poolsnapshot),
    sesnapshot: cdktf.listMapper(statediffsnapshotPostSnapshotSesnapshotToTerraform, true)(struct!.sesnapshot),
    vssnapshot: cdktf.listMapper(statediffsnapshotPostSnapshotVssnapshotToTerraform, true)(struct!.vssnapshot),
  }
}


export function statediffsnapshotPostSnapshotToHclTerraform(struct?: StatediffsnapshotPostSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gssnapshot: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotGssnapshotToHclTerraform, true)(struct!.gssnapshot),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotGssnapshotList",
    },
    poolsnapshot: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotPoolsnapshotToHclTerraform, true)(struct!.poolsnapshot),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotPoolsnapshotList",
    },
    sesnapshot: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotSesnapshotToHclTerraform, true)(struct!.sesnapshot),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotSesnapshotList",
    },
    vssnapshot: {
      value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotVssnapshotToHclTerraform, true)(struct!.vssnapshot),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPostSnapshotVssnapshotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPostSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPostSnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gssnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssnapshot = this._gssnapshot?.internalValue;
    }
    if (this._poolsnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolsnapshot = this._poolsnapshot?.internalValue;
    }
    if (this._sesnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sesnapshot = this._sesnapshot?.internalValue;
    }
    if (this._vssnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vssnapshot = this._vssnapshot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPostSnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gssnapshot.internalValue = undefined;
      this._poolsnapshot.internalValue = undefined;
      this._sesnapshot.internalValue = undefined;
      this._vssnapshot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gssnapshot.internalValue = value.gssnapshot;
      this._poolsnapshot.internalValue = value.poolsnapshot;
      this._sesnapshot.internalValue = value.sesnapshot;
      this._vssnapshot.internalValue = value.vssnapshot;
    }
  }

  // gssnapshot - computed: false, optional: true, required: false
  private _gssnapshot = new StatediffsnapshotPostSnapshotGssnapshotList(this, "gssnapshot", true);
  public get gssnapshot() {
    return this._gssnapshot;
  }
  public putGssnapshot(value: StatediffsnapshotPostSnapshotGssnapshot[] | cdktf.IResolvable) {
    this._gssnapshot.internalValue = value;
  }
  public resetGssnapshot() {
    this._gssnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssnapshotInput() {
    return this._gssnapshot.internalValue;
  }

  // poolsnapshot - computed: false, optional: true, required: false
  private _poolsnapshot = new StatediffsnapshotPostSnapshotPoolsnapshotList(this, "poolsnapshot", true);
  public get poolsnapshot() {
    return this._poolsnapshot;
  }
  public putPoolsnapshot(value: StatediffsnapshotPostSnapshotPoolsnapshot[] | cdktf.IResolvable) {
    this._poolsnapshot.internalValue = value;
  }
  public resetPoolsnapshot() {
    this._poolsnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsnapshotInput() {
    return this._poolsnapshot.internalValue;
  }

  // sesnapshot - computed: false, optional: true, required: false
  private _sesnapshot = new StatediffsnapshotPostSnapshotSesnapshotList(this, "sesnapshot", true);
  public get sesnapshot() {
    return this._sesnapshot;
  }
  public putSesnapshot(value: StatediffsnapshotPostSnapshotSesnapshot[] | cdktf.IResolvable) {
    this._sesnapshot.internalValue = value;
  }
  public resetSesnapshot() {
    this._sesnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnapshotInput() {
    return this._sesnapshot.internalValue;
  }

  // vssnapshot - computed: false, optional: true, required: false
  private _vssnapshot = new StatediffsnapshotPostSnapshotVssnapshotList(this, "vssnapshot", true);
  public get vssnapshot() {
    return this._vssnapshot;
  }
  public putVssnapshot(value: StatediffsnapshotPostSnapshotVssnapshot[] | cdktf.IResolvable) {
    this._vssnapshot.internalValue = value;
  }
  public resetVssnapshot() {
    this._vssnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vssnapshotInput() {
    return this._vssnapshot.internalValue;
  }
}

export class StatediffsnapshotPostSnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPostSnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPostSnapshotOutputReference {
    return new StatediffsnapshotPostSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#secs Statediffsnapshot#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#usecs Statediffsnapshot#usecs}
  */
  readonly usecs: string;
}

export function statediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeToTerraform(struct?: StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function statediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeToHclTerraform(struct?: StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeOutputReference {
    return new StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotGssnapshotOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason Statediffsnapshot#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code Statediffsnapshot#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code_string Statediffsnapshot#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#state Statediffsnapshot#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#last_changed_time Statediffsnapshot#last_changed_time}
  */
  readonly lastChangedTime?: StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function statediffsnapshotPreSnapshotGssnapshotOperStatusToTerraform(struct?: StatediffsnapshotPreSnapshotGssnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(statediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function statediffsnapshotPreSnapshotGssnapshotOperStatusToHclTerraform(struct?: StatediffsnapshotPreSnapshotGssnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotGssnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotGssnapshotOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotGssnapshotOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: StatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class StatediffsnapshotPreSnapshotGssnapshotOperStatusList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotGssnapshotOperStatus[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotGssnapshotOperStatusOutputReference {
    return new StatediffsnapshotPreSnapshotGssnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotGssnapshot {
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#oper_status Statediffsnapshot#oper_status}
  */
  readonly operStatus?: StatediffsnapshotPreSnapshotGssnapshotOperStatus[] | cdktf.IResolvable;
}

export function statediffsnapshotPreSnapshotGssnapshotToTerraform(struct?: StatediffsnapshotPreSnapshotGssnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_status: cdktf.listMapper(statediffsnapshotPreSnapshotGssnapshotOperStatusToTerraform, true)(struct!.operStatus),
  }
}


export function statediffsnapshotPreSnapshotGssnapshotToHclTerraform(struct?: StatediffsnapshotPreSnapshotGssnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_status: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotGssnapshotOperStatusToHclTerraform, true)(struct!.operStatus),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotGssnapshotOperStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotGssnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotGssnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotGssnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = value.operStatus;
    }
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new StatediffsnapshotPreSnapshotGssnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: StatediffsnapshotPreSnapshotGssnapshotOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }
}

export class StatediffsnapshotPreSnapshotGssnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotGssnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotGssnapshotOutputReference {
    return new StatediffsnapshotPreSnapshotGssnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#secs Statediffsnapshot#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#usecs Statediffsnapshot#usecs}
  */
  readonly usecs: string;
}

export function statediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeToTerraform(struct?: StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function statediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeToHclTerraform(struct?: StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference {
    return new StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotPoolsnapshotOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason Statediffsnapshot#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code Statediffsnapshot#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code_string Statediffsnapshot#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#state Statediffsnapshot#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#last_changed_time Statediffsnapshot#last_changed_time}
  */
  readonly lastChangedTime?: StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function statediffsnapshotPreSnapshotPoolsnapshotOperStatusToTerraform(struct?: StatediffsnapshotPreSnapshotPoolsnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(statediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function statediffsnapshotPreSnapshotPoolsnapshotOperStatusToHclTerraform(struct?: StatediffsnapshotPreSnapshotPoolsnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotPoolsnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotPoolsnapshotOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotPoolsnapshotOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: StatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class StatediffsnapshotPreSnapshotPoolsnapshotOperStatusList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotPoolsnapshotOperStatus[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotPoolsnapshotOperStatusOutputReference {
    return new StatediffsnapshotPreSnapshotPoolsnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotPoolsnapshot {
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#oper_status Statediffsnapshot#oper_status}
  */
  readonly operStatus?: StatediffsnapshotPreSnapshotPoolsnapshotOperStatus[] | cdktf.IResolvable;
}

export function statediffsnapshotPreSnapshotPoolsnapshotToTerraform(struct?: StatediffsnapshotPreSnapshotPoolsnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_status: cdktf.listMapper(statediffsnapshotPreSnapshotPoolsnapshotOperStatusToTerraform, true)(struct!.operStatus),
  }
}


export function statediffsnapshotPreSnapshotPoolsnapshotToHclTerraform(struct?: StatediffsnapshotPreSnapshotPoolsnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_status: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotPoolsnapshotOperStatusToHclTerraform, true)(struct!.operStatus),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotPoolsnapshotOperStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotPoolsnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotPoolsnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotPoolsnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = value.operStatus;
    }
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new StatediffsnapshotPreSnapshotPoolsnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: StatediffsnapshotPreSnapshotPoolsnapshotOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }
}

export class StatediffsnapshotPreSnapshotPoolsnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotPoolsnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotPoolsnapshotOutputReference {
    return new StatediffsnapshotPreSnapshotPoolsnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#secs Statediffsnapshot#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#usecs Statediffsnapshot#usecs}
  */
  readonly usecs: string;
}

export function statediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeToTerraform(struct?: StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function statediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeToHclTerraform(struct?: StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeOutputReference {
    return new StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotSesnapshotOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason Statediffsnapshot#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code Statediffsnapshot#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code_string Statediffsnapshot#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#state Statediffsnapshot#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#last_changed_time Statediffsnapshot#last_changed_time}
  */
  readonly lastChangedTime?: StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function statediffsnapshotPreSnapshotSesnapshotOperStatusToTerraform(struct?: StatediffsnapshotPreSnapshotSesnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(statediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function statediffsnapshotPreSnapshotSesnapshotOperStatusToHclTerraform(struct?: StatediffsnapshotPreSnapshotSesnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotSesnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotSesnapshotOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotSesnapshotOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: StatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class StatediffsnapshotPreSnapshotSesnapshotOperStatusList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotSesnapshotOperStatus[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotSesnapshotOperStatusOutputReference {
    return new StatediffsnapshotPreSnapshotSesnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotSesnapshot {
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#oper_status Statediffsnapshot#oper_status}
  */
  readonly operStatus?: StatediffsnapshotPreSnapshotSesnapshotOperStatus[] | cdktf.IResolvable;
}

export function statediffsnapshotPreSnapshotSesnapshotToTerraform(struct?: StatediffsnapshotPreSnapshotSesnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_status: cdktf.listMapper(statediffsnapshotPreSnapshotSesnapshotOperStatusToTerraform, true)(struct!.operStatus),
  }
}


export function statediffsnapshotPreSnapshotSesnapshotToHclTerraform(struct?: StatediffsnapshotPreSnapshotSesnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_status: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotSesnapshotOperStatusToHclTerraform, true)(struct!.operStatus),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotSesnapshotOperStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotSesnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotSesnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotSesnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = value.operStatus;
    }
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new StatediffsnapshotPreSnapshotSesnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: StatediffsnapshotPreSnapshotSesnapshotOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }
}

export class StatediffsnapshotPreSnapshotSesnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotSesnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotSesnapshotOutputReference {
    return new StatediffsnapshotPreSnapshotSesnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#secs Statediffsnapshot#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#usecs Statediffsnapshot#usecs}
  */
  readonly usecs: string;
}

export function statediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeToTerraform(struct?: StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function statediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeToHclTerraform(struct?: StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeOutputReference {
    return new StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotVssnapshotOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason Statediffsnapshot#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code Statediffsnapshot#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#reason_code_string Statediffsnapshot#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#state Statediffsnapshot#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#last_changed_time Statediffsnapshot#last_changed_time}
  */
  readonly lastChangedTime?: StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function statediffsnapshotPreSnapshotVssnapshotOperStatusToTerraform(struct?: StatediffsnapshotPreSnapshotVssnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(statediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function statediffsnapshotPreSnapshotVssnapshotOperStatusToHclTerraform(struct?: StatediffsnapshotPreSnapshotVssnapshotOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotVssnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotVssnapshotOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotVssnapshotOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: StatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class StatediffsnapshotPreSnapshotVssnapshotOperStatusList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotVssnapshotOperStatus[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotVssnapshotOperStatusOutputReference {
    return new StatediffsnapshotPreSnapshotVssnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshotVssnapshot {
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#oper_status Statediffsnapshot#oper_status}
  */
  readonly operStatus?: StatediffsnapshotPreSnapshotVssnapshotOperStatus[] | cdktf.IResolvable;
}

export function statediffsnapshotPreSnapshotVssnapshotToTerraform(struct?: StatediffsnapshotPreSnapshotVssnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_status: cdktf.listMapper(statediffsnapshotPreSnapshotVssnapshotOperStatusToTerraform, true)(struct!.operStatus),
  }
}


export function statediffsnapshotPreSnapshotVssnapshotToHclTerraform(struct?: StatediffsnapshotPreSnapshotVssnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_status: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotVssnapshotOperStatusToHclTerraform, true)(struct!.operStatus),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotVssnapshotOperStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotVssnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshotVssnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshotVssnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operStatus.internalValue = value.operStatus;
    }
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new StatediffsnapshotPreSnapshotVssnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: StatediffsnapshotPreSnapshotVssnapshotOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }
}

export class StatediffsnapshotPreSnapshotVssnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshotVssnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotVssnapshotOutputReference {
    return new StatediffsnapshotPreSnapshotVssnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatediffsnapshotPreSnapshot {
  /**
  * gssnapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#gssnapshot Statediffsnapshot#gssnapshot}
  */
  readonly gssnapshot?: StatediffsnapshotPreSnapshotGssnapshot[] | cdktf.IResolvable;
  /**
  * poolsnapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#poolsnapshot Statediffsnapshot#poolsnapshot}
  */
  readonly poolsnapshot?: StatediffsnapshotPreSnapshotPoolsnapshot[] | cdktf.IResolvable;
  /**
  * sesnapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#sesnapshot Statediffsnapshot#sesnapshot}
  */
  readonly sesnapshot?: StatediffsnapshotPreSnapshotSesnapshot[] | cdktf.IResolvable;
  /**
  * vssnapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#vssnapshot Statediffsnapshot#vssnapshot}
  */
  readonly vssnapshot?: StatediffsnapshotPreSnapshotVssnapshot[] | cdktf.IResolvable;
}

export function statediffsnapshotPreSnapshotToTerraform(struct?: StatediffsnapshotPreSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gssnapshot: cdktf.listMapper(statediffsnapshotPreSnapshotGssnapshotToTerraform, true)(struct!.gssnapshot),
    poolsnapshot: cdktf.listMapper(statediffsnapshotPreSnapshotPoolsnapshotToTerraform, true)(struct!.poolsnapshot),
    sesnapshot: cdktf.listMapper(statediffsnapshotPreSnapshotSesnapshotToTerraform, true)(struct!.sesnapshot),
    vssnapshot: cdktf.listMapper(statediffsnapshotPreSnapshotVssnapshotToTerraform, true)(struct!.vssnapshot),
  }
}


export function statediffsnapshotPreSnapshotToHclTerraform(struct?: StatediffsnapshotPreSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gssnapshot: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotGssnapshotToHclTerraform, true)(struct!.gssnapshot),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotGssnapshotList",
    },
    poolsnapshot: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotPoolsnapshotToHclTerraform, true)(struct!.poolsnapshot),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotPoolsnapshotList",
    },
    sesnapshot: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotSesnapshotToHclTerraform, true)(struct!.sesnapshot),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotSesnapshotList",
    },
    vssnapshot: {
      value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotVssnapshotToHclTerraform, true)(struct!.vssnapshot),
      isBlock: true,
      type: "set",
      storageClassType: "StatediffsnapshotPreSnapshotVssnapshotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatediffsnapshotPreSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatediffsnapshotPreSnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gssnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssnapshot = this._gssnapshot?.internalValue;
    }
    if (this._poolsnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolsnapshot = this._poolsnapshot?.internalValue;
    }
    if (this._sesnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sesnapshot = this._sesnapshot?.internalValue;
    }
    if (this._vssnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vssnapshot = this._vssnapshot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatediffsnapshotPreSnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gssnapshot.internalValue = undefined;
      this._poolsnapshot.internalValue = undefined;
      this._sesnapshot.internalValue = undefined;
      this._vssnapshot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gssnapshot.internalValue = value.gssnapshot;
      this._poolsnapshot.internalValue = value.poolsnapshot;
      this._sesnapshot.internalValue = value.sesnapshot;
      this._vssnapshot.internalValue = value.vssnapshot;
    }
  }

  // gssnapshot - computed: false, optional: true, required: false
  private _gssnapshot = new StatediffsnapshotPreSnapshotGssnapshotList(this, "gssnapshot", true);
  public get gssnapshot() {
    return this._gssnapshot;
  }
  public putGssnapshot(value: StatediffsnapshotPreSnapshotGssnapshot[] | cdktf.IResolvable) {
    this._gssnapshot.internalValue = value;
  }
  public resetGssnapshot() {
    this._gssnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssnapshotInput() {
    return this._gssnapshot.internalValue;
  }

  // poolsnapshot - computed: false, optional: true, required: false
  private _poolsnapshot = new StatediffsnapshotPreSnapshotPoolsnapshotList(this, "poolsnapshot", true);
  public get poolsnapshot() {
    return this._poolsnapshot;
  }
  public putPoolsnapshot(value: StatediffsnapshotPreSnapshotPoolsnapshot[] | cdktf.IResolvable) {
    this._poolsnapshot.internalValue = value;
  }
  public resetPoolsnapshot() {
    this._poolsnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsnapshotInput() {
    return this._poolsnapshot.internalValue;
  }

  // sesnapshot - computed: false, optional: true, required: false
  private _sesnapshot = new StatediffsnapshotPreSnapshotSesnapshotList(this, "sesnapshot", true);
  public get sesnapshot() {
    return this._sesnapshot;
  }
  public putSesnapshot(value: StatediffsnapshotPreSnapshotSesnapshot[] | cdktf.IResolvable) {
    this._sesnapshot.internalValue = value;
  }
  public resetSesnapshot() {
    this._sesnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnapshotInput() {
    return this._sesnapshot.internalValue;
  }

  // vssnapshot - computed: false, optional: true, required: false
  private _vssnapshot = new StatediffsnapshotPreSnapshotVssnapshotList(this, "vssnapshot", true);
  public get vssnapshot() {
    return this._vssnapshot;
  }
  public putVssnapshot(value: StatediffsnapshotPreSnapshotVssnapshot[] | cdktf.IResolvable) {
    this._vssnapshot.internalValue = value;
  }
  public resetVssnapshot() {
    this._vssnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vssnapshotInput() {
    return this._vssnapshot.internalValue;
  }
}

export class StatediffsnapshotPreSnapshotList extends cdktf.ComplexList {
  public internalValue? : StatediffsnapshotPreSnapshot[] | cdktf.IResolvable

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
  public get(index: number): StatediffsnapshotPreSnapshotOutputReference {
    return new StatediffsnapshotPreSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot avi_statediffsnapshot}
*/
export class Statediffsnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_statediffsnapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Statediffsnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Statediffsnapshot to import
  * @param importFromId The id of the existing Statediffsnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Statediffsnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_statediffsnapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/statediffsnapshot avi_statediffsnapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatediffsnapshotConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StatediffsnapshotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_statediffsnapshot',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gslbName = config.gslbName;
    this._gslbUuid = config.gslbUuid;
    this._id = config.id;
    this._name = config.name;
    this._poolName = config.poolName;
    this._poolUuid = config.poolUuid;
    this._seGroupName = config.seGroupName;
    this._seGroupUuid = config.seGroupUuid;
    this._seName = config.seName;
    this._seUuid = config.seUuid;
    this._snapshotType = config.snapshotType;
    this._statediffOperationRef = config.statediffOperationRef;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._vsName = config.vsName;
    this._vsUuid = config.vsUuid;
    this._postSnapshot.internalValue = config.postSnapshot;
    this._preSnapshot.internalValue = config.preSnapshot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gslb_name - computed: true, optional: true, required: false
  private _gslbName?: string; 
  public get gslbName() {
    return this.getStringAttribute('gslb_name');
  }
  public set gslbName(value: string) {
    this._gslbName = value;
  }
  public resetGslbName() {
    this._gslbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbNameInput() {
    return this._gslbName;
  }

  // gslb_uuid - computed: true, optional: true, required: false
  private _gslbUuid?: string; 
  public get gslbUuid() {
    return this.getStringAttribute('gslb_uuid');
  }
  public set gslbUuid(value: string) {
    this._gslbUuid = value;
  }
  public resetGslbUuid() {
    this._gslbUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbUuidInput() {
    return this._gslbUuid;
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

  // pool_name - computed: true, optional: true, required: false
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // pool_uuid - computed: true, optional: true, required: false
  private _poolUuid?: string; 
  public get poolUuid() {
    return this.getStringAttribute('pool_uuid');
  }
  public set poolUuid(value: string) {
    this._poolUuid = value;
  }
  public resetPoolUuid() {
    this._poolUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolUuidInput() {
    return this._poolUuid;
  }

  // se_group_name - computed: true, optional: true, required: false
  private _seGroupName?: string; 
  public get seGroupName() {
    return this.getStringAttribute('se_group_name');
  }
  public set seGroupName(value: string) {
    this._seGroupName = value;
  }
  public resetSeGroupName() {
    this._seGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupNameInput() {
    return this._seGroupName;
  }

  // se_group_uuid - computed: true, optional: true, required: false
  private _seGroupUuid?: string; 
  public get seGroupUuid() {
    return this.getStringAttribute('se_group_uuid');
  }
  public set seGroupUuid(value: string) {
    this._seGroupUuid = value;
  }
  public resetSeGroupUuid() {
    this._seGroupUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupUuidInput() {
    return this._seGroupUuid;
  }

  // se_name - computed: true, optional: true, required: false
  private _seName?: string; 
  public get seName() {
    return this.getStringAttribute('se_name');
  }
  public set seName(value: string) {
    this._seName = value;
  }
  public resetSeName() {
    this._seName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seNameInput() {
    return this._seName;
  }

  // se_uuid - computed: true, optional: true, required: false
  private _seUuid?: string; 
  public get seUuid() {
    return this.getStringAttribute('se_uuid');
  }
  public set seUuid(value: string) {
    this._seUuid = value;
  }
  public resetSeUuid() {
    this._seUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUuidInput() {
    return this._seUuid;
  }

  // snapshot_type - computed: true, optional: true, required: false
  private _snapshotType?: string; 
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
  public set snapshotType(value: string) {
    this._snapshotType = value;
  }
  public resetSnapshotType() {
    this._snapshotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTypeInput() {
    return this._snapshotType;
  }

  // statediff_operation_ref - computed: true, optional: true, required: false
  private _statediffOperationRef?: string; 
  public get statediffOperationRef() {
    return this.getStringAttribute('statediff_operation_ref');
  }
  public set statediffOperationRef(value: string) {
    this._statediffOperationRef = value;
  }
  public resetStatediffOperationRef() {
    this._statediffOperationRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statediffOperationRefInput() {
    return this._statediffOperationRef;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
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

  // vs_name - computed: true, optional: true, required: false
  private _vsName?: string; 
  public get vsName() {
    return this.getStringAttribute('vs_name');
  }
  public set vsName(value: string) {
    this._vsName = value;
  }
  public resetVsName() {
    this._vsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsNameInput() {
    return this._vsName;
  }

  // vs_uuid - computed: true, optional: true, required: false
  private _vsUuid?: string; 
  public get vsUuid() {
    return this.getStringAttribute('vs_uuid');
  }
  public set vsUuid(value: string) {
    this._vsUuid = value;
  }
  public resetVsUuid() {
    this._vsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsUuidInput() {
    return this._vsUuid;
  }

  // post_snapshot - computed: false, optional: true, required: false
  private _postSnapshot = new StatediffsnapshotPostSnapshotList(this, "post_snapshot", true);
  public get postSnapshot() {
    return this._postSnapshot;
  }
  public putPostSnapshot(value: StatediffsnapshotPostSnapshot[] | cdktf.IResolvable) {
    this._postSnapshot.internalValue = value;
  }
  public resetPostSnapshot() {
    this._postSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postSnapshotInput() {
    return this._postSnapshot.internalValue;
  }

  // pre_snapshot - computed: false, optional: true, required: false
  private _preSnapshot = new StatediffsnapshotPreSnapshotList(this, "pre_snapshot", true);
  public get preSnapshot() {
    return this._preSnapshot;
  }
  public putPreSnapshot(value: StatediffsnapshotPreSnapshot[] | cdktf.IResolvable) {
    this._preSnapshot.internalValue = value;
  }
  public resetPreSnapshot() {
    this._preSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSnapshotInput() {
    return this._preSnapshot.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gslb_name: cdktf.stringToTerraform(this._gslbName),
      gslb_uuid: cdktf.stringToTerraform(this._gslbUuid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pool_name: cdktf.stringToTerraform(this._poolName),
      pool_uuid: cdktf.stringToTerraform(this._poolUuid),
      se_group_name: cdktf.stringToTerraform(this._seGroupName),
      se_group_uuid: cdktf.stringToTerraform(this._seGroupUuid),
      se_name: cdktf.stringToTerraform(this._seName),
      se_uuid: cdktf.stringToTerraform(this._seUuid),
      snapshot_type: cdktf.stringToTerraform(this._snapshotType),
      statediff_operation_ref: cdktf.stringToTerraform(this._statediffOperationRef),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      vs_name: cdktf.stringToTerraform(this._vsName),
      vs_uuid: cdktf.stringToTerraform(this._vsUuid),
      post_snapshot: cdktf.listMapper(statediffsnapshotPostSnapshotToTerraform, true)(this._postSnapshot.internalValue),
      pre_snapshot: cdktf.listMapper(statediffsnapshotPreSnapshotToTerraform, true)(this._preSnapshot.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gslb_name: {
        value: cdktf.stringToHclTerraform(this._gslbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_uuid: {
        value: cdktf.stringToHclTerraform(this._gslbUuid),
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
      pool_name: {
        value: cdktf.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_uuid: {
        value: cdktf.stringToHclTerraform(this._poolUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_group_name: {
        value: cdktf.stringToHclTerraform(this._seGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_group_uuid: {
        value: cdktf.stringToHclTerraform(this._seGroupUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_name: {
        value: cdktf.stringToHclTerraform(this._seName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_uuid: {
        value: cdktf.stringToHclTerraform(this._seUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_type: {
        value: cdktf.stringToHclTerraform(this._snapshotType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statediff_operation_ref: {
        value: cdktf.stringToHclTerraform(this._statediffOperationRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_name: {
        value: cdktf.stringToHclTerraform(this._vsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_uuid: {
        value: cdktf.stringToHclTerraform(this._vsUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_snapshot: {
        value: cdktf.listMapperHcl(statediffsnapshotPostSnapshotToHclTerraform, true)(this._postSnapshot.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatediffsnapshotPostSnapshotList",
      },
      pre_snapshot: {
        value: cdktf.listMapperHcl(statediffsnapshotPreSnapshotToHclTerraform, true)(this._preSnapshot.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatediffsnapshotPreSnapshotList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
