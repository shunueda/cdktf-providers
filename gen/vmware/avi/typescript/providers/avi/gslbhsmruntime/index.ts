// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbhsmruntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#cluster_uuid Gslbhsmruntime#cluster_uuid}
  */
  readonly clusterUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#enabled Gslbhsmruntime#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#id Gslbhsmruntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#name Gslbhsmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#obj_uuid Gslbhsmruntime#obj_uuid}
  */
  readonly objUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#send_interval Gslbhsmruntime#send_interval}
  */
  readonly sendInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#site_name Gslbhsmruntime#site_name}
  */
  readonly siteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#tenant_ref Gslbhsmruntime#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#uuid Gslbhsmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#events Gslbhsmruntime#events}
  */
  readonly events?: GslbhsmruntimeEvents[] | cdktf.IResolvable;
  /**
  * local_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#local_info Gslbhsmruntime#local_info}
  */
  readonly localInfo?: GslbhsmruntimeLocalInfo[] | cdktf.IResolvable;
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#oper_status Gslbhsmruntime#oper_status}
  */
  readonly operStatus?: GslbhsmruntimeOperStatus[] | cdktf.IResolvable;
  /**
  * remote_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#remote_info Gslbhsmruntime#remote_info}
  */
  readonly remoteInfo?: GslbhsmruntimeRemoteInfo[] | cdktf.IResolvable;
}
export interface GslbhsmruntimeEventsTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#secs Gslbhsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#usecs Gslbhsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbhsmruntimeEventsTimestampToTerraform(struct?: GslbhsmruntimeEventsTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbhsmruntimeEventsTimestampToHclTerraform(struct?: GslbhsmruntimeEventsTimestamp | cdktf.IResolvable): any {
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

export class GslbhsmruntimeEventsTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeEventsTimestamp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbhsmruntimeEventsTimestamp | cdktf.IResolvable | undefined) {
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

export class GslbhsmruntimeEventsTimestampList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeEventsTimestamp[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeEventsTimestampOutputReference {
    return new GslbhsmruntimeEventsTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#msg Gslbhsmruntime#msg}
  */
  readonly msg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#name Gslbhsmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#uuid Gslbhsmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#timestamp Gslbhsmruntime#timestamp}
  */
  readonly timestamp?: GslbhsmruntimeEventsTimestamp[] | cdktf.IResolvable;
}

export function gslbhsmruntimeEventsToTerraform(struct?: GslbhsmruntimeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.msg),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    timestamp: cdktf.listMapper(gslbhsmruntimeEventsTimestampToTerraform, true)(struct!.timestamp),
  }
}


export function gslbhsmruntimeEventsToHclTerraform(struct?: GslbhsmruntimeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msg: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.msg),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    timestamp: {
      value: cdktf.listMapperHcl(gslbhsmruntimeEventsTimestampToHclTerraform, true)(struct!.timestamp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeEventsTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msg !== undefined) {
      hasAnyValues = true;
      internalValueResult.msg = this._msg;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._msg = undefined;
      this._name = undefined;
      this._uuid = undefined;
      this._timestamp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._msg = value.msg;
      this._name = value.name;
      this._uuid = value.uuid;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // msg - computed: false, optional: true, required: false
  private _msg?: string[]; 
  public get msg() {
    return this.getListAttribute('msg');
  }
  public set msg(value: string[]) {
    this._msg = value;
  }
  public resetMsg() {
    this._msg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgInput() {
    return this._msg;
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

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new GslbhsmruntimeEventsTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: GslbhsmruntimeEventsTimestamp[] | cdktf.IResolvable) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}

export class GslbhsmruntimeEventsList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeEvents[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeEventsOutputReference {
    return new GslbhsmruntimeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeLocalInfoGsStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#secs Gslbhsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#usecs Gslbhsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbhsmruntimeLocalInfoGsStatusLastChangedTimeToTerraform(struct?: GslbhsmruntimeLocalInfoGsStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbhsmruntimeLocalInfoGsStatusLastChangedTimeToHclTerraform(struct?: GslbhsmruntimeLocalInfoGsStatusLastChangedTime | cdktf.IResolvable): any {
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

export class GslbhsmruntimeLocalInfoGsStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeLocalInfoGsStatusLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbhsmruntimeLocalInfoGsStatusLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbhsmruntimeLocalInfoGsStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeLocalInfoGsStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeLocalInfoGsStatusLastChangedTimeOutputReference {
    return new GslbhsmruntimeLocalInfoGsStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeLocalInfoGsStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#num_partial_updates Gslbhsmruntime#num_partial_updates}
  */
  readonly numPartialUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#partial_update_threshold Gslbhsmruntime#partial_update_threshold}
  */
  readonly partialUpdateThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#state Gslbhsmruntime#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#type Gslbhsmruntime#type}
  */
  readonly type?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#last_changed_time Gslbhsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbhsmruntimeLocalInfoGsStatusLastChangedTime[] | cdktf.IResolvable;
}

export function gslbhsmruntimeLocalInfoGsStatusToTerraform(struct?: GslbhsmruntimeLocalInfoGsStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_partial_updates: cdktf.stringToTerraform(struct!.numPartialUpdates),
    partial_update_threshold: cdktf.stringToTerraform(struct!.partialUpdateThreshold),
    state: cdktf.stringToTerraform(struct!.state),
    type: cdktf.stringToTerraform(struct!.type),
    last_changed_time: cdktf.listMapper(gslbhsmruntimeLocalInfoGsStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function gslbhsmruntimeLocalInfoGsStatusToHclTerraform(struct?: GslbhsmruntimeLocalInfoGsStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_partial_updates: {
      value: cdktf.stringToHclTerraform(struct!.numPartialUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_update_threshold: {
      value: cdktf.stringToHclTerraform(struct!.partialUpdateThreshold),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbhsmruntimeLocalInfoGsStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeLocalInfoGsStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeLocalInfoGsStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeLocalInfoGsStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numPartialUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPartialUpdates = this._numPartialUpdates;
    }
    if (this._partialUpdateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialUpdateThreshold = this._partialUpdateThreshold;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeLocalInfoGsStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numPartialUpdates = undefined;
      this._partialUpdateThreshold = undefined;
      this._state = undefined;
      this._type = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numPartialUpdates = value.numPartialUpdates;
      this._partialUpdateThreshold = value.partialUpdateThreshold;
      this._state = value.state;
      this._type = value.type;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // num_partial_updates - computed: true, optional: true, required: false
  private _numPartialUpdates?: string; 
  public get numPartialUpdates() {
    return this.getStringAttribute('num_partial_updates');
  }
  public set numPartialUpdates(value: string) {
    this._numPartialUpdates = value;
  }
  public resetNumPartialUpdates() {
    this._numPartialUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPartialUpdatesInput() {
    return this._numPartialUpdates;
  }

  // partial_update_threshold - computed: false, optional: true, required: false
  private _partialUpdateThreshold?: string; 
  public get partialUpdateThreshold() {
    return this.getStringAttribute('partial_update_threshold');
  }
  public set partialUpdateThreshold(value: string) {
    this._partialUpdateThreshold = value;
  }
  public resetPartialUpdateThreshold() {
    this._partialUpdateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialUpdateThresholdInput() {
    return this._partialUpdateThreshold;
  }

  // state - computed: true, optional: true, required: false
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

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbhsmruntimeLocalInfoGsStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbhsmruntimeLocalInfoGsStatusLastChangedTime[] | cdktf.IResolvable) {
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

export class GslbhsmruntimeLocalInfoGsStatusList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeLocalInfoGsStatus[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeLocalInfoGsStatusOutputReference {
    return new GslbhsmruntimeLocalInfoGsStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#secs Gslbhsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#usecs Gslbhsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToHclTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
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

export class GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeOutputReference {
    return new GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#secs Gslbhsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#usecs Gslbhsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
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

export class GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined) {
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

export class GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference {
    return new GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#dnsvs_uuid Gslbhsmruntime#dnsvs_uuid}
  */
  readonly dnsvsUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#ops Gslbhsmruntime#ops}
  */
  readonly ops?: string;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#timestamp Gslbhsmruntime#timestamp}
  */
  readonly timestamp?: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable;
}

export function gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dnsvs_uuid: cdktf.stringToTerraform(struct!.dnsvsUuid),
    ops: cdktf.stringToTerraform(struct!.ops),
    timestamp: cdktf.listMapper(gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform, true)(struct!.timestamp),
  }
}


export function gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dnsvs_uuid: {
      value: cdktf.stringToHclTerraform(struct!.dnsvsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ops: {
      value: cdktf.stringToHclTerraform(struct!.ops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.listMapperHcl(gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform, true)(struct!.timestamp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsvsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsvsUuid = this._dnsvsUuid;
    }
    if (this._ops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ops = this._ops;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsvsUuid = undefined;
      this._ops = undefined;
      this._timestamp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsvsUuid = value.dnsvsUuid;
      this._ops = value.ops;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // dnsvs_uuid - computed: true, optional: true, required: false
  private _dnsvsUuid?: string; 
  public get dnsvsUuid() {
    return this.getStringAttribute('dnsvs_uuid');
  }
  public set dnsvsUuid(value: string) {
    this._dnsvsUuid = value;
  }
  public resetDnsvsUuid() {
    this._dnsvsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsvsUuidInput() {
    return this._dnsvsUuid;
  }

  // ops - computed: true, optional: true, required: false
  private _ops?: string; 
  public get ops() {
    return this.getStringAttribute('ops');
  }
  public set ops(value: string) {
    this._ops = value;
  }
  public resetOps() {
    this._ops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsInput() {
    return this._ops;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}

export class GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference {
    return new GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig {
  /**
  * vsgs_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#vsgs_info Gslbhsmruntime#vsgs_info}
  */
  readonly vsgsInfo?: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable;
}

export function gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigToTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vsgs_info: cdktf.listMapper(gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform, true)(struct!.vsgsInfo),
  }
}


export function gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigToHclTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vsgs_info: {
      value: cdktf.listMapperHcl(gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform, true)(struct!.vsgsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vsgsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsgsInfo = this._vsgsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vsgsInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vsgsInfo.internalValue = value.vsgsInfo;
    }
  }

  // vsgs_info - computed: false, optional: true, required: false
  private _vsgsInfo = new GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoList(this, "vsgs_info", false);
  public get vsgsInfo() {
    return this._vsgsInfo;
  }
  public putVsgsInfo(value: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable) {
    this._vsgsInfo.internalValue = value;
  }
  public resetVsgsInfo() {
    this._vsgsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsgsInfoInput() {
    return this._vsgsInfo.internalValue;
  }
}

export class GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigOutputReference {
    return new GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeLocalInfoGslbInfoReplState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#cfg_version Gslbhsmruntime#cfg_version}
  */
  readonly cfgVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#cfg_version_in_flight Gslbhsmruntime#cfg_version_in_flight}
  */
  readonly cfgVersionInFlight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#reason Gslbhsmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#site_uuid Gslbhsmruntime#site_uuid}
  */
  readonly siteUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#status Gslbhsmruntime#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#uuid Gslbhsmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#last_changed_time Gslbhsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable;
  /**
  * local_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#local_config Gslbhsmruntime#local_config}
  */
  readonly localConfig?: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable;
}

export function gslbhsmruntimeLocalInfoGslbInfoReplStateToTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfg_version: cdktf.stringToTerraform(struct!.cfgVersion),
    cfg_version_in_flight: cdktf.stringToTerraform(struct!.cfgVersionInFlight),
    reason: cdktf.stringToTerraform(struct!.reason),
    site_uuid: cdktf.stringToTerraform(struct!.siteUuid),
    status: cdktf.stringToTerraform(struct!.status),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    last_changed_time: cdktf.listMapper(gslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
    local_config: cdktf.listMapper(gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigToTerraform, true)(struct!.localConfig),
  }
}


export function gslbhsmruntimeLocalInfoGslbInfoReplStateToHclTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfoReplState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfg_version: {
      value: cdktf.stringToHclTerraform(struct!.cfgVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfg_version_in_flight: {
      value: cdktf.stringToHclTerraform(struct!.cfgVersionInFlight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_uuid: {
      value: cdktf.stringToHclTerraform(struct!.siteUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeList",
    },
    local_config: {
      value: cdktf.listMapperHcl(gslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigToHclTerraform, true)(struct!.localConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeLocalInfoGslbInfoReplStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeLocalInfoGslbInfoReplState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfgVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgVersion = this._cfgVersion;
    }
    if (this._cfgVersionInFlight !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgVersionInFlight = this._cfgVersionInFlight;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._siteUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUuid = this._siteUuid;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    if (this._localConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localConfig = this._localConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeLocalInfoGslbInfoReplState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cfgVersion = undefined;
      this._cfgVersionInFlight = undefined;
      this._reason = undefined;
      this._siteUuid = undefined;
      this._status = undefined;
      this._uuid = undefined;
      this._lastChangedTime.internalValue = undefined;
      this._localConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cfgVersion = value.cfgVersion;
      this._cfgVersionInFlight = value.cfgVersionInFlight;
      this._reason = value.reason;
      this._siteUuid = value.siteUuid;
      this._status = value.status;
      this._uuid = value.uuid;
      this._lastChangedTime.internalValue = value.lastChangedTime;
      this._localConfig.internalValue = value.localConfig;
    }
  }

  // cfg_version - computed: true, optional: true, required: false
  private _cfgVersion?: string; 
  public get cfgVersion() {
    return this.getStringAttribute('cfg_version');
  }
  public set cfgVersion(value: string) {
    this._cfgVersion = value;
  }
  public resetCfgVersion() {
    this._cfgVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgVersionInput() {
    return this._cfgVersion;
  }

  // cfg_version_in_flight - computed: true, optional: true, required: false
  private _cfgVersionInFlight?: string; 
  public get cfgVersionInFlight() {
    return this.getStringAttribute('cfg_version_in_flight');
  }
  public set cfgVersionInFlight(value: string) {
    this._cfgVersionInFlight = value;
  }
  public resetCfgVersionInFlight() {
    this._cfgVersionInFlight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgVersionInFlightInput() {
    return this._cfgVersionInFlight;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // site_uuid - computed: true, optional: true, required: false
  private _siteUuid?: string; 
  public get siteUuid() {
    return this.getStringAttribute('site_uuid');
  }
  public set siteUuid(value: string) {
    this._siteUuid = value;
  }
  public resetSiteUuid() {
    this._siteUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUuidInput() {
    return this._siteUuid;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }

  // local_config - computed: false, optional: true, required: false
  private _localConfig = new GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigList(this, "local_config", true);
  public get localConfig() {
    return this._localConfig;
  }
  public putLocalConfig(value: GslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable) {
    this._localConfig.internalValue = value;
  }
  public resetLocalConfig() {
    this._localConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localConfigInput() {
    return this._localConfig.internalValue;
  }
}

export class GslbhsmruntimeLocalInfoGslbInfoReplStateList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeLocalInfoGslbInfoReplState[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeLocalInfoGslbInfoReplStateOutputReference {
    return new GslbhsmruntimeLocalInfoGslbInfoReplStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeLocalInfoGslbInfo {
  /**
  * repl_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#repl_state Gslbhsmruntime#repl_state}
  */
  readonly replState?: GslbhsmruntimeLocalInfoGslbInfoReplState[] | cdktf.IResolvable;
}

export function gslbhsmruntimeLocalInfoGslbInfoToTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repl_state: cdktf.listMapper(gslbhsmruntimeLocalInfoGslbInfoReplStateToTerraform, true)(struct!.replState),
  }
}


export function gslbhsmruntimeLocalInfoGslbInfoToHclTerraform(struct?: GslbhsmruntimeLocalInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repl_state: {
      value: cdktf.listMapperHcl(gslbhsmruntimeLocalInfoGslbInfoReplStateToHclTerraform, true)(struct!.replState),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeLocalInfoGslbInfoReplStateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeLocalInfoGslbInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeLocalInfoGslbInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replState = this._replState?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeLocalInfoGslbInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replState.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replState.internalValue = value.replState;
    }
  }

  // repl_state - computed: false, optional: true, required: false
  private _replState = new GslbhsmruntimeLocalInfoGslbInfoReplStateList(this, "repl_state", true);
  public get replState() {
    return this._replState;
  }
  public putReplState(value: GslbhsmruntimeLocalInfoGslbInfoReplState[] | cdktf.IResolvable) {
    this._replState.internalValue = value;
  }
  public resetReplState() {
    this._replState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replStateInput() {
    return this._replState.internalValue;
  }
}

export class GslbhsmruntimeLocalInfoGslbInfoList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeLocalInfoGslbInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeLocalInfoGslbInfoOutputReference {
    return new GslbhsmruntimeLocalInfoGslbInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeLocalInfo {
  /**
  * gs_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#gs_status Gslbhsmruntime#gs_status}
  */
  readonly gsStatus?: GslbhsmruntimeLocalInfoGsStatus[] | cdktf.IResolvable;
  /**
  * gslb_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#gslb_info Gslbhsmruntime#gslb_info}
  */
  readonly gslbInfo?: GslbhsmruntimeLocalInfoGslbInfo[] | cdktf.IResolvable;
}

export function gslbhsmruntimeLocalInfoToTerraform(struct?: GslbhsmruntimeLocalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gs_status: cdktf.listMapper(gslbhsmruntimeLocalInfoGsStatusToTerraform, true)(struct!.gsStatus),
    gslb_info: cdktf.listMapper(gslbhsmruntimeLocalInfoGslbInfoToTerraform, true)(struct!.gslbInfo),
  }
}


export function gslbhsmruntimeLocalInfoToHclTerraform(struct?: GslbhsmruntimeLocalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gs_status: {
      value: cdktf.listMapperHcl(gslbhsmruntimeLocalInfoGsStatusToHclTerraform, true)(struct!.gsStatus),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeLocalInfoGsStatusList",
    },
    gslb_info: {
      value: cdktf.listMapperHcl(gslbhsmruntimeLocalInfoGslbInfoToHclTerraform, true)(struct!.gslbInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeLocalInfoGslbInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeLocalInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeLocalInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gsStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsStatus = this._gsStatus?.internalValue;
    }
    if (this._gslbInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbInfo = this._gslbInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeLocalInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gsStatus.internalValue = undefined;
      this._gslbInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gsStatus.internalValue = value.gsStatus;
      this._gslbInfo.internalValue = value.gslbInfo;
    }
  }

  // gs_status - computed: false, optional: true, required: false
  private _gsStatus = new GslbhsmruntimeLocalInfoGsStatusList(this, "gs_status", true);
  public get gsStatus() {
    return this._gsStatus;
  }
  public putGsStatus(value: GslbhsmruntimeLocalInfoGsStatus[] | cdktf.IResolvable) {
    this._gsStatus.internalValue = value;
  }
  public resetGsStatus() {
    this._gsStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsStatusInput() {
    return this._gsStatus.internalValue;
  }

  // gslb_info - computed: false, optional: true, required: false
  private _gslbInfo = new GslbhsmruntimeLocalInfoGslbInfoList(this, "gslb_info", true);
  public get gslbInfo() {
    return this._gslbInfo;
  }
  public putGslbInfo(value: GslbhsmruntimeLocalInfoGslbInfo[] | cdktf.IResolvable) {
    this._gslbInfo.internalValue = value;
  }
  public resetGslbInfo() {
    this._gslbInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbInfoInput() {
    return this._gslbInfo.internalValue;
  }
}

export class GslbhsmruntimeLocalInfoList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeLocalInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeLocalInfoOutputReference {
    return new GslbhsmruntimeLocalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#secs Gslbhsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#usecs Gslbhsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbhsmruntimeOperStatusLastChangedTimeToTerraform(struct?: GslbhsmruntimeOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbhsmruntimeOperStatusLastChangedTimeToHclTerraform(struct?: GslbhsmruntimeOperStatusLastChangedTime | cdktf.IResolvable): any {
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

export class GslbhsmruntimeOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeOperStatusLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbhsmruntimeOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbhsmruntimeOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeOperStatusLastChangedTimeOutputReference {
    return new GslbhsmruntimeOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#reason Gslbhsmruntime#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#reason_code Gslbhsmruntime#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#reason_code_string Gslbhsmruntime#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#state Gslbhsmruntime#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#last_changed_time Gslbhsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbhsmruntimeOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function gslbhsmruntimeOperStatusToTerraform(struct?: GslbhsmruntimeOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(gslbhsmruntimeOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function gslbhsmruntimeOperStatusToHclTerraform(struct?: GslbhsmruntimeOperStatus | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gslbhsmruntimeOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeOperStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbhsmruntimeOperStatus | cdktf.IResolvable | undefined) {
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
  private _lastChangedTime = new GslbhsmruntimeOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbhsmruntimeOperStatusLastChangedTime[] | cdktf.IResolvable) {
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

export class GslbhsmruntimeOperStatusList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeOperStatus[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeOperStatusOutputReference {
    return new GslbhsmruntimeOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#secs Gslbhsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#usecs Gslbhsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToHclTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
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

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference {
    return new GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#secs Gslbhsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#usecs Gslbhsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
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

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined) {
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

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference {
    return new GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#dnsvs_uuid Gslbhsmruntime#dnsvs_uuid}
  */
  readonly dnsvsUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#ops Gslbhsmruntime#ops}
  */
  readonly ops?: string;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#timestamp Gslbhsmruntime#timestamp}
  */
  readonly timestamp?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable;
}

export function gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dnsvs_uuid: cdktf.stringToTerraform(struct!.dnsvsUuid),
    ops: cdktf.stringToTerraform(struct!.ops),
    timestamp: cdktf.listMapper(gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform, true)(struct!.timestamp),
  }
}


export function gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dnsvs_uuid: {
      value: cdktf.stringToHclTerraform(struct!.dnsvsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ops: {
      value: cdktf.stringToHclTerraform(struct!.ops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform, true)(struct!.timestamp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsvsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsvsUuid = this._dnsvsUuid;
    }
    if (this._ops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ops = this._ops;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsvsUuid = undefined;
      this._ops = undefined;
      this._timestamp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsvsUuid = value.dnsvsUuid;
      this._ops = value.ops;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // dnsvs_uuid - computed: true, optional: true, required: false
  private _dnsvsUuid?: string; 
  public get dnsvsUuid() {
    return this.getStringAttribute('dnsvs_uuid');
  }
  public set dnsvsUuid(value: string) {
    this._dnsvsUuid = value;
  }
  public resetDnsvsUuid() {
    this._dnsvsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsvsUuidInput() {
    return this._dnsvsUuid;
  }

  // ops - computed: true, optional: true, required: false
  private _ops?: string; 
  public get ops() {
    return this.getStringAttribute('ops');
  }
  public set ops(value: string) {
    this._ops = value;
  }
  public resetOps() {
    this._ops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsInput() {
    return this._ops;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference {
    return new GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig {
  /**
  * vsgs_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#vsgs_info Gslbhsmruntime#vsgs_info}
  */
  readonly vsgsInfo?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable;
}

export function gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vsgs_info: cdktf.listMapper(gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform, true)(struct!.vsgsInfo),
  }
}


export function gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToHclTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vsgs_info: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform, true)(struct!.vsgsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vsgsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsgsInfo = this._vsgsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vsgsInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vsgsInfo.internalValue = value.vsgsInfo;
    }
  }

  // vsgs_info - computed: false, optional: true, required: false
  private _vsgsInfo = new GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList(this, "vsgs_info", false);
  public get vsgsInfo() {
    return this._vsgsInfo;
  }
  public putVsgsInfo(value: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable) {
    this._vsgsInfo.internalValue = value;
  }
  public resetVsgsInfo() {
    this._vsgsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsgsInfoInput() {
    return this._vsgsInfo.internalValue;
  }
}

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference {
    return new GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoGslbInfoReplState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#cfg_version Gslbhsmruntime#cfg_version}
  */
  readonly cfgVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#cfg_version_in_flight Gslbhsmruntime#cfg_version_in_flight}
  */
  readonly cfgVersionInFlight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#reason Gslbhsmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#site_uuid Gslbhsmruntime#site_uuid}
  */
  readonly siteUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#status Gslbhsmruntime#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#uuid Gslbhsmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#last_changed_time Gslbhsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable;
  /**
  * local_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#local_config Gslbhsmruntime#local_config}
  */
  readonly localConfig?: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable;
}

export function gslbhsmruntimeRemoteInfoGslbInfoReplStateToTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfg_version: cdktf.stringToTerraform(struct!.cfgVersion),
    cfg_version_in_flight: cdktf.stringToTerraform(struct!.cfgVersionInFlight),
    reason: cdktf.stringToTerraform(struct!.reason),
    site_uuid: cdktf.stringToTerraform(struct!.siteUuid),
    status: cdktf.stringToTerraform(struct!.status),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    last_changed_time: cdktf.listMapper(gslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
    local_config: cdktf.listMapper(gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToTerraform, true)(struct!.localConfig),
  }
}


export function gslbhsmruntimeRemoteInfoGslbInfoReplStateToHclTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfg_version: {
      value: cdktf.stringToHclTerraform(struct!.cfgVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfg_version_in_flight: {
      value: cdktf.stringToHclTerraform(struct!.cfgVersionInFlight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_uuid: {
      value: cdktf.stringToHclTerraform(struct!.siteUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList",
    },
    local_config: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToHclTerraform, true)(struct!.localConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfgVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgVersion = this._cfgVersion;
    }
    if (this._cfgVersionInFlight !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgVersionInFlight = this._cfgVersionInFlight;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._siteUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUuid = this._siteUuid;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    if (this._localConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localConfig = this._localConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cfgVersion = undefined;
      this._cfgVersionInFlight = undefined;
      this._reason = undefined;
      this._siteUuid = undefined;
      this._status = undefined;
      this._uuid = undefined;
      this._lastChangedTime.internalValue = undefined;
      this._localConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cfgVersion = value.cfgVersion;
      this._cfgVersionInFlight = value.cfgVersionInFlight;
      this._reason = value.reason;
      this._siteUuid = value.siteUuid;
      this._status = value.status;
      this._uuid = value.uuid;
      this._lastChangedTime.internalValue = value.lastChangedTime;
      this._localConfig.internalValue = value.localConfig;
    }
  }

  // cfg_version - computed: true, optional: true, required: false
  private _cfgVersion?: string; 
  public get cfgVersion() {
    return this.getStringAttribute('cfg_version');
  }
  public set cfgVersion(value: string) {
    this._cfgVersion = value;
  }
  public resetCfgVersion() {
    this._cfgVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgVersionInput() {
    return this._cfgVersion;
  }

  // cfg_version_in_flight - computed: true, optional: true, required: false
  private _cfgVersionInFlight?: string; 
  public get cfgVersionInFlight() {
    return this.getStringAttribute('cfg_version_in_flight');
  }
  public set cfgVersionInFlight(value: string) {
    this._cfgVersionInFlight = value;
  }
  public resetCfgVersionInFlight() {
    this._cfgVersionInFlight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgVersionInFlightInput() {
    return this._cfgVersionInFlight;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // site_uuid - computed: true, optional: true, required: false
  private _siteUuid?: string; 
  public get siteUuid() {
    return this.getStringAttribute('site_uuid');
  }
  public set siteUuid(value: string) {
    this._siteUuid = value;
  }
  public resetSiteUuid() {
    this._siteUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUuidInput() {
    return this._siteUuid;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }

  // local_config - computed: false, optional: true, required: false
  private _localConfig = new GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList(this, "local_config", true);
  public get localConfig() {
    return this._localConfig;
  }
  public putLocalConfig(value: GslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable) {
    this._localConfig.internalValue = value;
  }
  public resetLocalConfig() {
    this._localConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localConfigInput() {
    return this._localConfig.internalValue;
  }
}

export class GslbhsmruntimeRemoteInfoGslbInfoReplStateList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoGslbInfoReplState[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoGslbInfoReplStateOutputReference {
    return new GslbhsmruntimeRemoteInfoGslbInfoReplStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoGslbInfo {
  /**
  * repl_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#repl_state Gslbhsmruntime#repl_state}
  */
  readonly replState?: GslbhsmruntimeRemoteInfoGslbInfoReplState[] | cdktf.IResolvable;
}

export function gslbhsmruntimeRemoteInfoGslbInfoToTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repl_state: cdktf.listMapper(gslbhsmruntimeRemoteInfoGslbInfoReplStateToTerraform, true)(struct!.replState),
  }
}


export function gslbhsmruntimeRemoteInfoGslbInfoToHclTerraform(struct?: GslbhsmruntimeRemoteInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repl_state: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoGslbInfoReplStateToHclTerraform, true)(struct!.replState),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoGslbInfoReplStateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeRemoteInfoGslbInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoGslbInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replState = this._replState?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfoGslbInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replState.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replState.internalValue = value.replState;
    }
  }

  // repl_state - computed: false, optional: true, required: false
  private _replState = new GslbhsmruntimeRemoteInfoGslbInfoReplStateList(this, "repl_state", true);
  public get replState() {
    return this._replState;
  }
  public putReplState(value: GslbhsmruntimeRemoteInfoGslbInfoReplState[] | cdktf.IResolvable) {
    this._replState.internalValue = value;
  }
  public resetReplState() {
    this._replState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replStateInput() {
    return this._replState.internalValue;
  }
}

export class GslbhsmruntimeRemoteInfoGslbInfoList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoGslbInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoGslbInfoOutputReference {
    return new GslbhsmruntimeRemoteInfoGslbInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoOpsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#rrtoken Gslbhsmruntime#rrtoken}
  */
  readonly rrtoken?: string[];
}

export function gslbhsmruntimeRemoteInfoOpsInfoToTerraform(struct?: GslbhsmruntimeRemoteInfoOpsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rrtoken: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rrtoken),
  }
}


export function gslbhsmruntimeRemoteInfoOpsInfoToHclTerraform(struct?: GslbhsmruntimeRemoteInfoOpsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rrtoken: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rrtoken),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeRemoteInfoOpsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoOpsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rrtoken !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrtoken = this._rrtoken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfoOpsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rrtoken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rrtoken = value.rrtoken;
    }
  }

  // rrtoken - computed: false, optional: true, required: false
  private _rrtoken?: string[]; 
  public get rrtoken() {
    return this.getListAttribute('rrtoken');
  }
  public set rrtoken(value: string[]) {
    this._rrtoken = value;
  }
  public resetRrtoken() {
    this._rrtoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrtokenInput() {
    return this._rrtoken;
  }
}

export class GslbhsmruntimeRemoteInfoOpsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoOpsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoOpsInfoOutputReference {
    return new GslbhsmruntimeRemoteInfoOpsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoSyncInfoErroredObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#ds_name Gslbhsmruntime#ds_name}
  */
  readonly dsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#name Gslbhsmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#ops Gslbhsmruntime#ops}
  */
  readonly ops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#reason Gslbhsmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#status Gslbhsmruntime#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#uuid Gslbhsmruntime#uuid}
  */
  readonly uuid?: string;
}

export function gslbhsmruntimeRemoteInfoSyncInfoErroredObjectsToTerraform(struct?: GslbhsmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_name: cdktf.stringToTerraform(struct!.dsName),
    name: cdktf.stringToTerraform(struct!.name),
    ops: cdktf.stringToTerraform(struct!.ops),
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbhsmruntimeRemoteInfoSyncInfoErroredObjectsToHclTerraform(struct?: GslbhsmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_name: {
      value: cdktf.stringToHclTerraform(struct!.dsName),
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
    ops: {
      value: cdktf.stringToHclTerraform(struct!.ops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class GslbhsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsName = this._dsName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ops = this._ops;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsName = undefined;
      this._name = undefined;
      this._ops = undefined;
      this._reason = undefined;
      this._status = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsName = value.dsName;
      this._name = value.name;
      this._ops = value.ops;
      this._reason = value.reason;
      this._status = value.status;
      this._uuid = value.uuid;
    }
  }

  // ds_name - computed: true, optional: true, required: false
  private _dsName?: string; 
  public get dsName() {
    return this.getStringAttribute('ds_name');
  }
  public set dsName(value: string) {
    this._dsName = value;
  }
  public resetDsName() {
    this._dsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsNameInput() {
    return this._dsName;
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

  // ops - computed: true, optional: true, required: false
  private _ops?: string; 
  public get ops() {
    return this.getStringAttribute('ops');
  }
  public set ops(value: string) {
    this._ops = value;
  }
  public resetOps() {
    this._ops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsInput() {
    return this._ops;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
}

export class GslbhsmruntimeRemoteInfoSyncInfoErroredObjectsList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoSyncInfoErroredObjects[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference {
    return new GslbhsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoSyncInfoLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#secs Gslbhsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#usecs Gslbhsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeToTerraform(struct?: GslbhsmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeToHclTerraform(struct?: GslbhsmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable): any {
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

export class GslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbhsmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoSyncInfoLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference {
    return new GslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoSyncInfoLastFailObj {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#event_type Gslbhsmruntime#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#obj_name Gslbhsmruntime#obj_name}
  */
  readonly objName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#obj_uuid Gslbhsmruntime#obj_uuid}
  */
  readonly objUuid?: string;
}

export function gslbhsmruntimeRemoteInfoSyncInfoLastFailObjToTerraform(struct?: GslbhsmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    obj_name: cdktf.stringToTerraform(struct!.objName),
    obj_uuid: cdktf.stringToTerraform(struct!.objUuid),
  }
}


export function gslbhsmruntimeRemoteInfoSyncInfoLastFailObjToHclTerraform(struct?: GslbhsmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obj_name: {
      value: cdktf.stringToHclTerraform(struct!.objName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obj_uuid: {
      value: cdktf.stringToHclTerraform(struct!.objUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._objName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objName = this._objName;
    }
    if (this._objUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.objUuid = this._objUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._objName = undefined;
      this._objUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._objName = value.objName;
      this._objUuid = value.objUuid;
    }
  }

  // event_type - computed: true, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // obj_name - computed: true, optional: true, required: false
  private _objName?: string; 
  public get objName() {
    return this.getStringAttribute('obj_name');
  }
  public set objName(value: string) {
    this._objName = value;
  }
  public resetObjName() {
    this._objName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objNameInput() {
    return this._objName;
  }

  // obj_uuid - computed: true, optional: true, required: false
  private _objUuid?: string; 
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }
  public set objUuid(value: string) {
    this._objUuid = value;
  }
  public resetObjUuid() {
    this._objUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objUuidInput() {
    return this._objUuid;
  }
}

export class GslbhsmruntimeRemoteInfoSyncInfoLastFailObjList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoSyncInfoLastFailObj[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference {
    return new GslbhsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoSyncInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#prev_target_version Gslbhsmruntime#prev_target_version}
  */
  readonly prevTargetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#reason Gslbhsmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#recommendation Gslbhsmruntime#recommendation}
  */
  readonly recommendation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#site_version Gslbhsmruntime#site_version}
  */
  readonly siteVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#sync_state Gslbhsmruntime#sync_state}
  */
  readonly syncState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#target_version Gslbhsmruntime#target_version}
  */
  readonly targetVersion?: string;
  /**
  * errored_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#errored_objects Gslbhsmruntime#errored_objects}
  */
  readonly erroredObjects?: GslbhsmruntimeRemoteInfoSyncInfoErroredObjects[] | cdktf.IResolvable;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#last_changed_time Gslbhsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbhsmruntimeRemoteInfoSyncInfoLastChangedTime[] | cdktf.IResolvable;
  /**
  * last_fail_obj block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#last_fail_obj Gslbhsmruntime#last_fail_obj}
  */
  readonly lastFailObj?: GslbhsmruntimeRemoteInfoSyncInfoLastFailObj[] | cdktf.IResolvable;
}

export function gslbhsmruntimeRemoteInfoSyncInfoToTerraform(struct?: GslbhsmruntimeRemoteInfoSyncInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prev_target_version: cdktf.stringToTerraform(struct!.prevTargetVersion),
    reason: cdktf.stringToTerraform(struct!.reason),
    recommendation: cdktf.stringToTerraform(struct!.recommendation),
    site_version: cdktf.stringToTerraform(struct!.siteVersion),
    sync_state: cdktf.stringToTerraform(struct!.syncState),
    target_version: cdktf.stringToTerraform(struct!.targetVersion),
    errored_objects: cdktf.listMapper(gslbhsmruntimeRemoteInfoSyncInfoErroredObjectsToTerraform, true)(struct!.erroredObjects),
    last_changed_time: cdktf.listMapper(gslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
    last_fail_obj: cdktf.listMapper(gslbhsmruntimeRemoteInfoSyncInfoLastFailObjToTerraform, true)(struct!.lastFailObj),
  }
}


export function gslbhsmruntimeRemoteInfoSyncInfoToHclTerraform(struct?: GslbhsmruntimeRemoteInfoSyncInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prev_target_version: {
      value: cdktf.stringToHclTerraform(struct!.prevTargetVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommendation: {
      value: cdktf.stringToHclTerraform(struct!.recommendation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_version: {
      value: cdktf.stringToHclTerraform(struct!.siteVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_state: {
      value: cdktf.stringToHclTerraform(struct!.syncState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_version: {
      value: cdktf.stringToHclTerraform(struct!.targetVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    errored_objects: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoSyncInfoErroredObjectsToHclTerraform, true)(struct!.erroredObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GslbhsmruntimeRemoteInfoSyncInfoErroredObjectsList",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeList",
    },
    last_fail_obj: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoSyncInfoLastFailObjToHclTerraform, true)(struct!.lastFailObj),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoSyncInfoLastFailObjList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeRemoteInfoSyncInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoSyncInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prevTargetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevTargetVersion = this._prevTargetVersion;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._recommendation !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendation = this._recommendation;
    }
    if (this._siteVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteVersion = this._siteVersion;
    }
    if (this._syncState !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncState = this._syncState;
    }
    if (this._targetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVersion = this._targetVersion;
    }
    if (this._erroredObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.erroredObjects = this._erroredObjects?.internalValue;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    if (this._lastFailObj?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastFailObj = this._lastFailObj?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfoSyncInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prevTargetVersion = undefined;
      this._reason = undefined;
      this._recommendation = undefined;
      this._siteVersion = undefined;
      this._syncState = undefined;
      this._targetVersion = undefined;
      this._erroredObjects.internalValue = undefined;
      this._lastChangedTime.internalValue = undefined;
      this._lastFailObj.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prevTargetVersion = value.prevTargetVersion;
      this._reason = value.reason;
      this._recommendation = value.recommendation;
      this._siteVersion = value.siteVersion;
      this._syncState = value.syncState;
      this._targetVersion = value.targetVersion;
      this._erroredObjects.internalValue = value.erroredObjects;
      this._lastChangedTime.internalValue = value.lastChangedTime;
      this._lastFailObj.internalValue = value.lastFailObj;
    }
  }

  // prev_target_version - computed: true, optional: true, required: false
  private _prevTargetVersion?: string; 
  public get prevTargetVersion() {
    return this.getStringAttribute('prev_target_version');
  }
  public set prevTargetVersion(value: string) {
    this._prevTargetVersion = value;
  }
  public resetPrevTargetVersion() {
    this._prevTargetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevTargetVersionInput() {
    return this._prevTargetVersion;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // recommendation - computed: true, optional: true, required: false
  private _recommendation?: string; 
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }
  public set recommendation(value: string) {
    this._recommendation = value;
  }
  public resetRecommendation() {
    this._recommendation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationInput() {
    return this._recommendation;
  }

  // site_version - computed: true, optional: true, required: false
  private _siteVersion?: string; 
  public get siteVersion() {
    return this.getStringAttribute('site_version');
  }
  public set siteVersion(value: string) {
    this._siteVersion = value;
  }
  public resetSiteVersion() {
    this._siteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteVersionInput() {
    return this._siteVersion;
  }

  // sync_state - computed: true, optional: true, required: false
  private _syncState?: string; 
  public get syncState() {
    return this.getStringAttribute('sync_state');
  }
  public set syncState(value: string) {
    this._syncState = value;
  }
  public resetSyncState() {
    this._syncState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStateInput() {
    return this._syncState;
  }

  // target_version - computed: true, optional: true, required: false
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  public resetTargetVersion() {
    this._targetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // errored_objects - computed: false, optional: true, required: false
  private _erroredObjects = new GslbhsmruntimeRemoteInfoSyncInfoErroredObjectsList(this, "errored_objects", false);
  public get erroredObjects() {
    return this._erroredObjects;
  }
  public putErroredObjects(value: GslbhsmruntimeRemoteInfoSyncInfoErroredObjects[] | cdktf.IResolvable) {
    this._erroredObjects.internalValue = value;
  }
  public resetErroredObjects() {
    this._erroredObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erroredObjectsInput() {
    return this._erroredObjects.internalValue;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbhsmruntimeRemoteInfoSyncInfoLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }

  // last_fail_obj - computed: false, optional: true, required: false
  private _lastFailObj = new GslbhsmruntimeRemoteInfoSyncInfoLastFailObjList(this, "last_fail_obj", true);
  public get lastFailObj() {
    return this._lastFailObj;
  }
  public putLastFailObj(value: GslbhsmruntimeRemoteInfoSyncInfoLastFailObj[] | cdktf.IResolvable) {
    this._lastFailObj.internalValue = value;
  }
  public resetLastFailObj() {
    this._lastFailObj.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastFailObjInput() {
    return this._lastFailObj.internalValue;
  }
}

export class GslbhsmruntimeRemoteInfoSyncInfoList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoSyncInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoSyncInfoOutputReference {
    return new GslbhsmruntimeRemoteInfoSyncInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfoSyncStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#acknowledged_version Gslbhsmruntime#acknowledged_version}
  */
  readonly acknowledgedVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#pending_object_count Gslbhsmruntime#pending_object_count}
  */
  readonly pendingObjectCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#received_version Gslbhsmruntime#received_version}
  */
  readonly receivedVersion?: string;
}

export function gslbhsmruntimeRemoteInfoSyncStatsToTerraform(struct?: GslbhsmruntimeRemoteInfoSyncStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acknowledged_version: cdktf.stringToTerraform(struct!.acknowledgedVersion),
    pending_object_count: cdktf.stringToTerraform(struct!.pendingObjectCount),
    received_version: cdktf.stringToTerraform(struct!.receivedVersion),
  }
}


export function gslbhsmruntimeRemoteInfoSyncStatsToHclTerraform(struct?: GslbhsmruntimeRemoteInfoSyncStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acknowledged_version: {
      value: cdktf.stringToHclTerraform(struct!.acknowledgedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pending_object_count: {
      value: cdktf.stringToHclTerraform(struct!.pendingObjectCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    received_version: {
      value: cdktf.stringToHclTerraform(struct!.receivedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeRemoteInfoSyncStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfoSyncStats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acknowledgedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.acknowledgedVersion = this._acknowledgedVersion;
    }
    if (this._pendingObjectCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingObjectCount = this._pendingObjectCount;
    }
    if (this._receivedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivedVersion = this._receivedVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfoSyncStats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acknowledgedVersion = undefined;
      this._pendingObjectCount = undefined;
      this._receivedVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acknowledgedVersion = value.acknowledgedVersion;
      this._pendingObjectCount = value.pendingObjectCount;
      this._receivedVersion = value.receivedVersion;
    }
  }

  // acknowledged_version - computed: true, optional: true, required: false
  private _acknowledgedVersion?: string; 
  public get acknowledgedVersion() {
    return this.getStringAttribute('acknowledged_version');
  }
  public set acknowledgedVersion(value: string) {
    this._acknowledgedVersion = value;
  }
  public resetAcknowledgedVersion() {
    this._acknowledgedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgedVersionInput() {
    return this._acknowledgedVersion;
  }

  // pending_object_count - computed: true, optional: true, required: false
  private _pendingObjectCount?: string; 
  public get pendingObjectCount() {
    return this.getStringAttribute('pending_object_count');
  }
  public set pendingObjectCount(value: string) {
    this._pendingObjectCount = value;
  }
  public resetPendingObjectCount() {
    this._pendingObjectCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingObjectCountInput() {
    return this._pendingObjectCount;
  }

  // received_version - computed: true, optional: true, required: false
  private _receivedVersion?: string; 
  public get receivedVersion() {
    return this.getStringAttribute('received_version');
  }
  public set receivedVersion(value: string) {
    this._receivedVersion = value;
  }
  public resetReceivedVersion() {
    this._receivedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedVersionInput() {
    return this._receivedVersion;
  }
}

export class GslbhsmruntimeRemoteInfoSyncStatsList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfoSyncStats[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoSyncStatsOutputReference {
    return new GslbhsmruntimeRemoteInfoSyncStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbhsmruntimeRemoteInfo {
  /**
  * gslb_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#gslb_info Gslbhsmruntime#gslb_info}
  */
  readonly gslbInfo?: GslbhsmruntimeRemoteInfoGslbInfo[] | cdktf.IResolvable;
  /**
  * ops_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#ops_info Gslbhsmruntime#ops_info}
  */
  readonly opsInfo?: GslbhsmruntimeRemoteInfoOpsInfo[] | cdktf.IResolvable;
  /**
  * sync_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#sync_info Gslbhsmruntime#sync_info}
  */
  readonly syncInfo?: GslbhsmruntimeRemoteInfoSyncInfo[] | cdktf.IResolvable;
  /**
  * sync_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#sync_stats Gslbhsmruntime#sync_stats}
  */
  readonly syncStats?: GslbhsmruntimeRemoteInfoSyncStats[] | cdktf.IResolvable;
}

export function gslbhsmruntimeRemoteInfoToTerraform(struct?: GslbhsmruntimeRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_info: cdktf.listMapper(gslbhsmruntimeRemoteInfoGslbInfoToTerraform, true)(struct!.gslbInfo),
    ops_info: cdktf.listMapper(gslbhsmruntimeRemoteInfoOpsInfoToTerraform, true)(struct!.opsInfo),
    sync_info: cdktf.listMapper(gslbhsmruntimeRemoteInfoSyncInfoToTerraform, true)(struct!.syncInfo),
    sync_stats: cdktf.listMapper(gslbhsmruntimeRemoteInfoSyncStatsToTerraform, true)(struct!.syncStats),
  }
}


export function gslbhsmruntimeRemoteInfoToHclTerraform(struct?: GslbhsmruntimeRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_info: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoGslbInfoToHclTerraform, true)(struct!.gslbInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoGslbInfoList",
    },
    ops_info: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoOpsInfoToHclTerraform, true)(struct!.opsInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoOpsInfoList",
    },
    sync_info: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoSyncInfoToHclTerraform, true)(struct!.syncInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoSyncInfoList",
    },
    sync_stats: {
      value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoSyncStatsToHclTerraform, true)(struct!.syncStats),
      isBlock: true,
      type: "set",
      storageClassType: "GslbhsmruntimeRemoteInfoSyncStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbhsmruntimeRemoteInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbhsmruntimeRemoteInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbInfo = this._gslbInfo?.internalValue;
    }
    if (this._opsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsInfo = this._opsInfo?.internalValue;
    }
    if (this._syncInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncInfo = this._syncInfo?.internalValue;
    }
    if (this._syncStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncStats = this._syncStats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbhsmruntimeRemoteInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gslbInfo.internalValue = undefined;
      this._opsInfo.internalValue = undefined;
      this._syncInfo.internalValue = undefined;
      this._syncStats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gslbInfo.internalValue = value.gslbInfo;
      this._opsInfo.internalValue = value.opsInfo;
      this._syncInfo.internalValue = value.syncInfo;
      this._syncStats.internalValue = value.syncStats;
    }
  }

  // gslb_info - computed: false, optional: true, required: false
  private _gslbInfo = new GslbhsmruntimeRemoteInfoGslbInfoList(this, "gslb_info", true);
  public get gslbInfo() {
    return this._gslbInfo;
  }
  public putGslbInfo(value: GslbhsmruntimeRemoteInfoGslbInfo[] | cdktf.IResolvable) {
    this._gslbInfo.internalValue = value;
  }
  public resetGslbInfo() {
    this._gslbInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbInfoInput() {
    return this._gslbInfo.internalValue;
  }

  // ops_info - computed: false, optional: true, required: false
  private _opsInfo = new GslbhsmruntimeRemoteInfoOpsInfoList(this, "ops_info", true);
  public get opsInfo() {
    return this._opsInfo;
  }
  public putOpsInfo(value: GslbhsmruntimeRemoteInfoOpsInfo[] | cdktf.IResolvable) {
    this._opsInfo.internalValue = value;
  }
  public resetOpsInfo() {
    this._opsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsInfoInput() {
    return this._opsInfo.internalValue;
  }

  // sync_info - computed: false, optional: true, required: false
  private _syncInfo = new GslbhsmruntimeRemoteInfoSyncInfoList(this, "sync_info", true);
  public get syncInfo() {
    return this._syncInfo;
  }
  public putSyncInfo(value: GslbhsmruntimeRemoteInfoSyncInfo[] | cdktf.IResolvable) {
    this._syncInfo.internalValue = value;
  }
  public resetSyncInfo() {
    this._syncInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInfoInput() {
    return this._syncInfo.internalValue;
  }

  // sync_stats - computed: false, optional: true, required: false
  private _syncStats = new GslbhsmruntimeRemoteInfoSyncStatsList(this, "sync_stats", true);
  public get syncStats() {
    return this._syncStats;
  }
  public putSyncStats(value: GslbhsmruntimeRemoteInfoSyncStats[] | cdktf.IResolvable) {
    this._syncStats.internalValue = value;
  }
  public resetSyncStats() {
    this._syncStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStatsInput() {
    return this._syncStats.internalValue;
  }
}

export class GslbhsmruntimeRemoteInfoList extends cdktf.ComplexList {
  public internalValue? : GslbhsmruntimeRemoteInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbhsmruntimeRemoteInfoOutputReference {
    return new GslbhsmruntimeRemoteInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime avi_gslbhsmruntime}
*/
export class Gslbhsmruntime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_gslbhsmruntime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslbhsmruntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslbhsmruntime to import
  * @param importFromId The id of the existing Gslbhsmruntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslbhsmruntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_gslbhsmruntime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbhsmruntime avi_gslbhsmruntime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbhsmruntimeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbhsmruntimeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_gslbhsmruntime',
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
    this._clusterUuid = config.clusterUuid;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._objUuid = config.objUuid;
    this._sendInterval = config.sendInterval;
    this._siteName = config.siteName;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._events.internalValue = config.events;
    this._localInfo.internalValue = config.localInfo;
    this._operStatus.internalValue = config.operStatus;
    this._remoteInfo.internalValue = config.remoteInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_uuid - computed: true, optional: true, required: false
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  public resetClusterUuid() {
    this._clusterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // obj_uuid - computed: true, optional: true, required: false
  private _objUuid?: string; 
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }
  public set objUuid(value: string) {
    this._objUuid = value;
  }
  public resetObjUuid() {
    this._objUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objUuidInput() {
    return this._objUuid;
  }

  // send_interval - computed: true, optional: true, required: false
  private _sendInterval?: string; 
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }
  public set sendInterval(value: string) {
    this._sendInterval = value;
  }
  public resetSendInterval() {
    this._sendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIntervalInput() {
    return this._sendInterval;
  }

  // site_name - computed: true, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
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

  // events - computed: false, optional: true, required: false
  private _events = new GslbhsmruntimeEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: GslbhsmruntimeEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // local_info - computed: false, optional: true, required: false
  private _localInfo = new GslbhsmruntimeLocalInfoList(this, "local_info", true);
  public get localInfo() {
    return this._localInfo;
  }
  public putLocalInfo(value: GslbhsmruntimeLocalInfo[] | cdktf.IResolvable) {
    this._localInfo.internalValue = value;
  }
  public resetLocalInfo() {
    this._localInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInfoInput() {
    return this._localInfo.internalValue;
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new GslbhsmruntimeOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: GslbhsmruntimeOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }

  // remote_info - computed: false, optional: true, required: false
  private _remoteInfo = new GslbhsmruntimeRemoteInfoList(this, "remote_info", true);
  public get remoteInfo() {
    return this._remoteInfo;
  }
  public putRemoteInfo(value: GslbhsmruntimeRemoteInfo[] | cdktf.IResolvable) {
    this._remoteInfo.internalValue = value;
  }
  public resetRemoteInfo() {
    this._remoteInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInfoInput() {
    return this._remoteInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
      enabled: cdktf.stringToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      obj_uuid: cdktf.stringToTerraform(this._objUuid),
      send_interval: cdktf.stringToTerraform(this._sendInterval),
      site_name: cdktf.stringToTerraform(this._siteName),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      events: cdktf.listMapper(gslbhsmruntimeEventsToTerraform, true)(this._events.internalValue),
      local_info: cdktf.listMapper(gslbhsmruntimeLocalInfoToTerraform, true)(this._localInfo.internalValue),
      oper_status: cdktf.listMapper(gslbhsmruntimeOperStatusToTerraform, true)(this._operStatus.internalValue),
      remote_info: cdktf.listMapper(gslbhsmruntimeRemoteInfoToTerraform, true)(this._remoteInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
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
      obj_uuid: {
        value: cdktf.stringToHclTerraform(this._objUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_interval: {
        value: cdktf.stringToHclTerraform(this._sendInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
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
      events: {
        value: cdktf.listMapperHcl(gslbhsmruntimeEventsToHclTerraform, true)(this._events.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbhsmruntimeEventsList",
      },
      local_info: {
        value: cdktf.listMapperHcl(gslbhsmruntimeLocalInfoToHclTerraform, true)(this._localInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbhsmruntimeLocalInfoList",
      },
      oper_status: {
        value: cdktf.listMapperHcl(gslbhsmruntimeOperStatusToHclTerraform, true)(this._operStatus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbhsmruntimeOperStatusList",
      },
      remote_info: {
        value: cdktf.listMapperHcl(gslbhsmruntimeRemoteInfoToHclTerraform, true)(this._remoteInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbhsmruntimeRemoteInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
