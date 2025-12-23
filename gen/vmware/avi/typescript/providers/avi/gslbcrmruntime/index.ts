// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbcrmruntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#cluster_uuid Gslbcrmruntime#cluster_uuid}
  */
  readonly clusterUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#id Gslbcrmruntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#name Gslbcrmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#obj_uuid Gslbcrmruntime#obj_uuid}
  */
  readonly objUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#site_name Gslbcrmruntime#site_name}
  */
  readonly siteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#tenant_ref Gslbcrmruntime#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#uuid Gslbcrmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#events Gslbcrmruntime#events}
  */
  readonly events?: GslbcrmruntimeEvents[] | cdktf.IResolvable;
  /**
  * fds_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#fds_info Gslbcrmruntime#fds_info}
  */
  readonly fdsInfo?: GslbcrmruntimeFdsInfo[] | cdktf.IResolvable;
  /**
  * local_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#local_info Gslbcrmruntime#local_info}
  */
  readonly localInfo?: GslbcrmruntimeLocalInfo[] | cdktf.IResolvable;
  /**
  * remote_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#remote_info Gslbcrmruntime#remote_info}
  */
  readonly remoteInfo?: GslbcrmruntimeRemoteInfo[] | cdktf.IResolvable;
  /**
  * replication_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#replication_policy Gslbcrmruntime#replication_policy}
  */
  readonly replicationPolicy?: GslbcrmruntimeReplicationPolicy[] | cdktf.IResolvable;
  /**
  * status_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#status_info Gslbcrmruntime#status_info}
  */
  readonly statusInfo?: GslbcrmruntimeStatusInfo[] | cdktf.IResolvable;
}
export interface GslbcrmruntimeEventsTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#secs Gslbcrmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#usecs Gslbcrmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbcrmruntimeEventsTimestampToTerraform(struct?: GslbcrmruntimeEventsTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbcrmruntimeEventsTimestampToHclTerraform(struct?: GslbcrmruntimeEventsTimestamp | cdktf.IResolvable): any {
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

export class GslbcrmruntimeEventsTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeEventsTimestamp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeEventsTimestamp | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeEventsTimestampList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeEventsTimestamp[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeEventsTimestampOutputReference {
    return new GslbcrmruntimeEventsTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#agent_id Gslbcrmruntime#agent_id}
  */
  readonly agentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#msg Gslbcrmruntime#msg}
  */
  readonly msg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#name Gslbcrmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#uuid Gslbcrmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#timestamp Gslbcrmruntime#timestamp}
  */
  readonly timestamp?: GslbcrmruntimeEventsTimestamp[] | cdktf.IResolvable;
}

export function gslbcrmruntimeEventsToTerraform(struct?: GslbcrmruntimeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    msg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.msg),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    timestamp: cdktf.listMapper(gslbcrmruntimeEventsTimestampToTerraform, true)(struct!.timestamp),
  }
}


export function gslbcrmruntimeEventsToHclTerraform(struct?: GslbcrmruntimeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_id: {
      value: cdktf.stringToHclTerraform(struct!.agentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
      value: cdktf.listMapperHcl(gslbcrmruntimeEventsTimestampToHclTerraform, true)(struct!.timestamp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeEventsTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
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

  public set internalValue(value: GslbcrmruntimeEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentId = undefined;
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
      this._agentId = value.agentId;
      this._msg = value.msg;
      this._name = value.name;
      this._uuid = value.uuid;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // agent_id - computed: true, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
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
  private _timestamp = new GslbcrmruntimeEventsTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: GslbcrmruntimeEventsTimestamp[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeEventsList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeEvents[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeEventsOutputReference {
    return new GslbcrmruntimeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeFdsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#objects Gslbcrmruntime#objects}
  */
  readonly objects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#timeline Gslbcrmruntime#timeline}
  */
  readonly timeline?: string;
}

export function gslbcrmruntimeFdsInfoToTerraform(struct?: GslbcrmruntimeFdsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.objects),
    timeline: cdktf.stringToTerraform(struct!.timeline),
  }
}


export function gslbcrmruntimeFdsInfoToHclTerraform(struct?: GslbcrmruntimeFdsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.objects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeline: {
      value: cdktf.stringToHclTerraform(struct!.timeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeFdsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeFdsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects;
    }
    if (this._timeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeline = this._timeline;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbcrmruntimeFdsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objects = undefined;
      this._timeline = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objects = value.objects;
      this._timeline = value.timeline;
    }
  }

  // objects - computed: false, optional: true, required: false
  private _objects?: string[]; 
  public get objects() {
    return this.getListAttribute('objects');
  }
  public set objects(value: string[]) {
    this._objects = value;
  }
  public resetObjects() {
    this._objects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects;
  }

  // timeline - computed: true, optional: true, required: false
  private _timeline?: string; 
  public get timeline() {
    return this.getStringAttribute('timeline');
  }
  public set timeline(value: string) {
    this._timeline = value;
  }
  public resetTimeline() {
    this._timeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timelineInput() {
    return this._timeline;
  }
}

export class GslbcrmruntimeFdsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeFdsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeFdsInfoOutputReference {
    return new GslbcrmruntimeFdsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeLocalInfoGsStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#secs Gslbcrmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#usecs Gslbcrmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbcrmruntimeLocalInfoGsStatusLastChangedTimeToTerraform(struct?: GslbcrmruntimeLocalInfoGsStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbcrmruntimeLocalInfoGsStatusLastChangedTimeToHclTerraform(struct?: GslbcrmruntimeLocalInfoGsStatusLastChangedTime | cdktf.IResolvable): any {
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

export class GslbcrmruntimeLocalInfoGsStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeLocalInfoGsStatusLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeLocalInfoGsStatusLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeLocalInfoGsStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeLocalInfoGsStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeLocalInfoGsStatusLastChangedTimeOutputReference {
    return new GslbcrmruntimeLocalInfoGsStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeLocalInfoGsStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#num_partial_updates Gslbcrmruntime#num_partial_updates}
  */
  readonly numPartialUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#partial_update_threshold Gslbcrmruntime#partial_update_threshold}
  */
  readonly partialUpdateThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#state Gslbcrmruntime#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#type Gslbcrmruntime#type}
  */
  readonly type?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#last_changed_time Gslbcrmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbcrmruntimeLocalInfoGsStatusLastChangedTime[] | cdktf.IResolvable;
}

export function gslbcrmruntimeLocalInfoGsStatusToTerraform(struct?: GslbcrmruntimeLocalInfoGsStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_partial_updates: cdktf.stringToTerraform(struct!.numPartialUpdates),
    partial_update_threshold: cdktf.stringToTerraform(struct!.partialUpdateThreshold),
    state: cdktf.stringToTerraform(struct!.state),
    type: cdktf.stringToTerraform(struct!.type),
    last_changed_time: cdktf.listMapper(gslbcrmruntimeLocalInfoGsStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function gslbcrmruntimeLocalInfoGsStatusToHclTerraform(struct?: GslbcrmruntimeLocalInfoGsStatus | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gslbcrmruntimeLocalInfoGsStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeLocalInfoGsStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeLocalInfoGsStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeLocalInfoGsStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeLocalInfoGsStatus | cdktf.IResolvable | undefined) {
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
  private _lastChangedTime = new GslbcrmruntimeLocalInfoGsStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbcrmruntimeLocalInfoGsStatusLastChangedTime[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeLocalInfoGsStatusList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeLocalInfoGsStatus[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeLocalInfoGsStatusOutputReference {
    return new GslbcrmruntimeLocalInfoGsStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#secs Gslbcrmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#usecs Gslbcrmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToHclTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
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

export class GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeOutputReference {
    return new GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#secs Gslbcrmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#usecs Gslbcrmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
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

export class GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference {
    return new GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#dnsvs_uuid Gslbcrmruntime#dnsvs_uuid}
  */
  readonly dnsvsUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#ops Gslbcrmruntime#ops}
  */
  readonly ops?: string;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#timestamp Gslbcrmruntime#timestamp}
  */
  readonly timestamp?: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable;
}

export function gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dnsvs_uuid: cdktf.stringToTerraform(struct!.dnsvsUuid),
    ops: cdktf.stringToTerraform(struct!.ops),
    timestamp: cdktf.listMapper(gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform, true)(struct!.timestamp),
  }
}


export function gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform, true)(struct!.timestamp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined) {
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
  private _timestamp = new GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference {
    return new GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfig {
  /**
  * vsgs_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#vsgs_info Gslbcrmruntime#vsgs_info}
  */
  readonly vsgsInfo?: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable;
}

export function gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigToTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vsgs_info: cdktf.listMapper(gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform, true)(struct!.vsgsInfo),
  }
}


export function gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigToHclTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vsgs_info: {
      value: cdktf.listMapperHcl(gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform, true)(struct!.vsgsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined) {
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
  private _vsgsInfo = new GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoList(this, "vsgs_info", false);
  public get vsgsInfo() {
    return this._vsgsInfo;
  }
  public putVsgsInfo(value: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigOutputReference {
    return new GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeLocalInfoGslbInfoReplState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#cfg_version Gslbcrmruntime#cfg_version}
  */
  readonly cfgVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#cfg_version_in_flight Gslbcrmruntime#cfg_version_in_flight}
  */
  readonly cfgVersionInFlight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#reason Gslbcrmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#site_uuid Gslbcrmruntime#site_uuid}
  */
  readonly siteUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#status Gslbcrmruntime#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#uuid Gslbcrmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#last_changed_time Gslbcrmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable;
  /**
  * local_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#local_config Gslbcrmruntime#local_config}
  */
  readonly localConfig?: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable;
}

export function gslbcrmruntimeLocalInfoGslbInfoReplStateToTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplState | cdktf.IResolvable): any {
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
    last_changed_time: cdktf.listMapper(gslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
    local_config: cdktf.listMapper(gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigToTerraform, true)(struct!.localConfig),
  }
}


export function gslbcrmruntimeLocalInfoGslbInfoReplStateToHclTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfoReplState | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeList",
    },
    local_config: {
      value: cdktf.listMapperHcl(gslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigToHclTerraform, true)(struct!.localConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeLocalInfoGslbInfoReplStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeLocalInfoGslbInfoReplState | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeLocalInfoGslbInfoReplState | cdktf.IResolvable | undefined) {
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
  private _lastChangedTime = new GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbcrmruntimeLocalInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable) {
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
  private _localConfig = new GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfigList(this, "local_config", true);
  public get localConfig() {
    return this._localConfig;
  }
  public putLocalConfig(value: GslbcrmruntimeLocalInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeLocalInfoGslbInfoReplStateList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeLocalInfoGslbInfoReplState[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeLocalInfoGslbInfoReplStateOutputReference {
    return new GslbcrmruntimeLocalInfoGslbInfoReplStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeLocalInfoGslbInfo {
  /**
  * repl_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#repl_state Gslbcrmruntime#repl_state}
  */
  readonly replState?: GslbcrmruntimeLocalInfoGslbInfoReplState[] | cdktf.IResolvable;
}

export function gslbcrmruntimeLocalInfoGslbInfoToTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repl_state: cdktf.listMapper(gslbcrmruntimeLocalInfoGslbInfoReplStateToTerraform, true)(struct!.replState),
  }
}


export function gslbcrmruntimeLocalInfoGslbInfoToHclTerraform(struct?: GslbcrmruntimeLocalInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repl_state: {
      value: cdktf.listMapperHcl(gslbcrmruntimeLocalInfoGslbInfoReplStateToHclTerraform, true)(struct!.replState),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeLocalInfoGslbInfoReplStateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeLocalInfoGslbInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeLocalInfoGslbInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeLocalInfoGslbInfo | cdktf.IResolvable | undefined) {
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
  private _replState = new GslbcrmruntimeLocalInfoGslbInfoReplStateList(this, "repl_state", true);
  public get replState() {
    return this._replState;
  }
  public putReplState(value: GslbcrmruntimeLocalInfoGslbInfoReplState[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeLocalInfoGslbInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeLocalInfoGslbInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeLocalInfoGslbInfoOutputReference {
    return new GslbcrmruntimeLocalInfoGslbInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeLocalInfo {
  /**
  * gs_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#gs_status Gslbcrmruntime#gs_status}
  */
  readonly gsStatus?: GslbcrmruntimeLocalInfoGsStatus[] | cdktf.IResolvable;
  /**
  * gslb_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#gslb_info Gslbcrmruntime#gslb_info}
  */
  readonly gslbInfo?: GslbcrmruntimeLocalInfoGslbInfo[] | cdktf.IResolvable;
}

export function gslbcrmruntimeLocalInfoToTerraform(struct?: GslbcrmruntimeLocalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gs_status: cdktf.listMapper(gslbcrmruntimeLocalInfoGsStatusToTerraform, true)(struct!.gsStatus),
    gslb_info: cdktf.listMapper(gslbcrmruntimeLocalInfoGslbInfoToTerraform, true)(struct!.gslbInfo),
  }
}


export function gslbcrmruntimeLocalInfoToHclTerraform(struct?: GslbcrmruntimeLocalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gs_status: {
      value: cdktf.listMapperHcl(gslbcrmruntimeLocalInfoGsStatusToHclTerraform, true)(struct!.gsStatus),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeLocalInfoGsStatusList",
    },
    gslb_info: {
      value: cdktf.listMapperHcl(gslbcrmruntimeLocalInfoGslbInfoToHclTerraform, true)(struct!.gslbInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeLocalInfoGslbInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeLocalInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeLocalInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeLocalInfo | cdktf.IResolvable | undefined) {
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
  private _gsStatus = new GslbcrmruntimeLocalInfoGsStatusList(this, "gs_status", true);
  public get gsStatus() {
    return this._gsStatus;
  }
  public putGsStatus(value: GslbcrmruntimeLocalInfoGsStatus[] | cdktf.IResolvable) {
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
  private _gslbInfo = new GslbcrmruntimeLocalInfoGslbInfoList(this, "gslb_info", true);
  public get gslbInfo() {
    return this._gslbInfo;
  }
  public putGslbInfo(value: GslbcrmruntimeLocalInfoGslbInfo[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeLocalInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeLocalInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeLocalInfoOutputReference {
    return new GslbcrmruntimeLocalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#secs Gslbcrmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#usecs Gslbcrmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToHclTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
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

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference {
    return new GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#secs Gslbcrmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#usecs Gslbcrmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
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

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference {
    return new GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#dnsvs_uuid Gslbcrmruntime#dnsvs_uuid}
  */
  readonly dnsvsUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#ops Gslbcrmruntime#ops}
  */
  readonly ops?: string;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#timestamp Gslbcrmruntime#timestamp}
  */
  readonly timestamp?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable;
}

export function gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dnsvs_uuid: cdktf.stringToTerraform(struct!.dnsvsUuid),
    ops: cdktf.stringToTerraform(struct!.ops),
    timestamp: cdktf.listMapper(gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform, true)(struct!.timestamp),
  }
}


export function gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform, true)(struct!.timestamp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined) {
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
  private _timestamp = new GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference {
    return new GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfig {
  /**
  * vsgs_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#vsgs_info Gslbcrmruntime#vsgs_info}
  */
  readonly vsgsInfo?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable;
}

export function gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigToTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vsgs_info: cdktf.listMapper(gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform, true)(struct!.vsgsInfo),
  }
}


export function gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigToHclTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vsgs_info: {
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform, true)(struct!.vsgsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined) {
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
  private _vsgsInfo = new GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList(this, "vsgs_info", false);
  public get vsgsInfo() {
    return this._vsgsInfo;
  }
  public putVsgsInfo(value: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference {
    return new GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoGslbInfoReplState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#cfg_version Gslbcrmruntime#cfg_version}
  */
  readonly cfgVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#cfg_version_in_flight Gslbcrmruntime#cfg_version_in_flight}
  */
  readonly cfgVersionInFlight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#reason Gslbcrmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#site_uuid Gslbcrmruntime#site_uuid}
  */
  readonly siteUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#status Gslbcrmruntime#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#uuid Gslbcrmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#last_changed_time Gslbcrmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable;
  /**
  * local_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#local_config Gslbcrmruntime#local_config}
  */
  readonly localConfig?: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable;
}

export function gslbcrmruntimeRemoteInfoGslbInfoReplStateToTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable): any {
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
    last_changed_time: cdktf.listMapper(gslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
    local_config: cdktf.listMapper(gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigToTerraform, true)(struct!.localConfig),
  }
}


export function gslbcrmruntimeRemoteInfoGslbInfoReplStateToHclTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList",
    },
    local_config: {
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigToHclTerraform, true)(struct!.localConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable | undefined) {
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
  private _lastChangedTime = new GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbcrmruntimeRemoteInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable) {
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
  private _localConfig = new GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfigList(this, "local_config", true);
  public get localConfig() {
    return this._localConfig;
  }
  public putLocalConfig(value: GslbcrmruntimeRemoteInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeRemoteInfoGslbInfoReplStateList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoGslbInfoReplState[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoGslbInfoReplStateOutputReference {
    return new GslbcrmruntimeRemoteInfoGslbInfoReplStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoGslbInfo {
  /**
  * repl_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#repl_state Gslbcrmruntime#repl_state}
  */
  readonly replState?: GslbcrmruntimeRemoteInfoGslbInfoReplState[] | cdktf.IResolvable;
}

export function gslbcrmruntimeRemoteInfoGslbInfoToTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repl_state: cdktf.listMapper(gslbcrmruntimeRemoteInfoGslbInfoReplStateToTerraform, true)(struct!.replState),
  }
}


export function gslbcrmruntimeRemoteInfoGslbInfoToHclTerraform(struct?: GslbcrmruntimeRemoteInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repl_state: {
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoGslbInfoReplStateToHclTerraform, true)(struct!.replState),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoGslbInfoReplStateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeRemoteInfoGslbInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoGslbInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoGslbInfo | cdktf.IResolvable | undefined) {
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
  private _replState = new GslbcrmruntimeRemoteInfoGslbInfoReplStateList(this, "repl_state", true);
  public get replState() {
    return this._replState;
  }
  public putReplState(value: GslbcrmruntimeRemoteInfoGslbInfoReplState[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeRemoteInfoGslbInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoGslbInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoGslbInfoOutputReference {
    return new GslbcrmruntimeRemoteInfoGslbInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoOpsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#rrtoken Gslbcrmruntime#rrtoken}
  */
  readonly rrtoken?: string[];
}

export function gslbcrmruntimeRemoteInfoOpsInfoToTerraform(struct?: GslbcrmruntimeRemoteInfoOpsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rrtoken: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rrtoken),
  }
}


export function gslbcrmruntimeRemoteInfoOpsInfoToHclTerraform(struct?: GslbcrmruntimeRemoteInfoOpsInfo | cdktf.IResolvable): any {
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

export class GslbcrmruntimeRemoteInfoOpsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoOpsInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoOpsInfo | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeRemoteInfoOpsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoOpsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoOpsInfoOutputReference {
    return new GslbcrmruntimeRemoteInfoOpsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoSyncInfoErroredObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#ds_name Gslbcrmruntime#ds_name}
  */
  readonly dsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#name Gslbcrmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#ops Gslbcrmruntime#ops}
  */
  readonly ops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#reason Gslbcrmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#status Gslbcrmruntime#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#uuid Gslbcrmruntime#uuid}
  */
  readonly uuid?: string;
}

export function gslbcrmruntimeRemoteInfoSyncInfoErroredObjectsToTerraform(struct?: GslbcrmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable): any {
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


export function gslbcrmruntimeRemoteInfoSyncInfoErroredObjectsToHclTerraform(struct?: GslbcrmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable): any {
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

export class GslbcrmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeRemoteInfoSyncInfoErroredObjectsList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoSyncInfoErroredObjects[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference {
    return new GslbcrmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoSyncInfoLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#secs Gslbcrmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#usecs Gslbcrmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeToTerraform(struct?: GslbcrmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeToHclTerraform(struct?: GslbcrmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable): any {
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

export class GslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoSyncInfoLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference {
    return new GslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoSyncInfoLastFailObj {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#event_type Gslbcrmruntime#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#obj_name Gslbcrmruntime#obj_name}
  */
  readonly objName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#obj_uuid Gslbcrmruntime#obj_uuid}
  */
  readonly objUuid?: string;
}

export function gslbcrmruntimeRemoteInfoSyncInfoLastFailObjToTerraform(struct?: GslbcrmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable): any {
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


export function gslbcrmruntimeRemoteInfoSyncInfoLastFailObjToHclTerraform(struct?: GslbcrmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable): any {
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

export class GslbcrmruntimeRemoteInfoSyncInfoLastFailObjOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeRemoteInfoSyncInfoLastFailObjList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoSyncInfoLastFailObj[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoSyncInfoLastFailObjOutputReference {
    return new GslbcrmruntimeRemoteInfoSyncInfoLastFailObjOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoSyncInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#prev_target_version Gslbcrmruntime#prev_target_version}
  */
  readonly prevTargetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#reason Gslbcrmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#recommendation Gslbcrmruntime#recommendation}
  */
  readonly recommendation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#site_version Gslbcrmruntime#site_version}
  */
  readonly siteVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#sync_state Gslbcrmruntime#sync_state}
  */
  readonly syncState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#target_version Gslbcrmruntime#target_version}
  */
  readonly targetVersion?: string;
  /**
  * errored_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#errored_objects Gslbcrmruntime#errored_objects}
  */
  readonly erroredObjects?: GslbcrmruntimeRemoteInfoSyncInfoErroredObjects[] | cdktf.IResolvable;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#last_changed_time Gslbcrmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbcrmruntimeRemoteInfoSyncInfoLastChangedTime[] | cdktf.IResolvable;
  /**
  * last_fail_obj block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#last_fail_obj Gslbcrmruntime#last_fail_obj}
  */
  readonly lastFailObj?: GslbcrmruntimeRemoteInfoSyncInfoLastFailObj[] | cdktf.IResolvable;
}

export function gslbcrmruntimeRemoteInfoSyncInfoToTerraform(struct?: GslbcrmruntimeRemoteInfoSyncInfo | cdktf.IResolvable): any {
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
    errored_objects: cdktf.listMapper(gslbcrmruntimeRemoteInfoSyncInfoErroredObjectsToTerraform, true)(struct!.erroredObjects),
    last_changed_time: cdktf.listMapper(gslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
    last_fail_obj: cdktf.listMapper(gslbcrmruntimeRemoteInfoSyncInfoLastFailObjToTerraform, true)(struct!.lastFailObj),
  }
}


export function gslbcrmruntimeRemoteInfoSyncInfoToHclTerraform(struct?: GslbcrmruntimeRemoteInfoSyncInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoSyncInfoErroredObjectsToHclTerraform, true)(struct!.erroredObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GslbcrmruntimeRemoteInfoSyncInfoErroredObjectsList",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeList",
    },
    last_fail_obj: {
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoSyncInfoLastFailObjToHclTerraform, true)(struct!.lastFailObj),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoSyncInfoLastFailObjList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeRemoteInfoSyncInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoSyncInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoSyncInfo | cdktf.IResolvable | undefined) {
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
  private _erroredObjects = new GslbcrmruntimeRemoteInfoSyncInfoErroredObjectsList(this, "errored_objects", false);
  public get erroredObjects() {
    return this._erroredObjects;
  }
  public putErroredObjects(value: GslbcrmruntimeRemoteInfoSyncInfoErroredObjects[] | cdktf.IResolvable) {
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
  private _lastChangedTime = new GslbcrmruntimeRemoteInfoSyncInfoLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbcrmruntimeRemoteInfoSyncInfoLastChangedTime[] | cdktf.IResolvable) {
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
  private _lastFailObj = new GslbcrmruntimeRemoteInfoSyncInfoLastFailObjList(this, "last_fail_obj", true);
  public get lastFailObj() {
    return this._lastFailObj;
  }
  public putLastFailObj(value: GslbcrmruntimeRemoteInfoSyncInfoLastFailObj[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeRemoteInfoSyncInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoSyncInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoSyncInfoOutputReference {
    return new GslbcrmruntimeRemoteInfoSyncInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfoSyncStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#acknowledged_version Gslbcrmruntime#acknowledged_version}
  */
  readonly acknowledgedVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#pending_object_count Gslbcrmruntime#pending_object_count}
  */
  readonly pendingObjectCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#received_version Gslbcrmruntime#received_version}
  */
  readonly receivedVersion?: string;
}

export function gslbcrmruntimeRemoteInfoSyncStatsToTerraform(struct?: GslbcrmruntimeRemoteInfoSyncStats | cdktf.IResolvable): any {
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


export function gslbcrmruntimeRemoteInfoSyncStatsToHclTerraform(struct?: GslbcrmruntimeRemoteInfoSyncStats | cdktf.IResolvable): any {
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

export class GslbcrmruntimeRemoteInfoSyncStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfoSyncStats | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfoSyncStats | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeRemoteInfoSyncStatsList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfoSyncStats[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoSyncStatsOutputReference {
    return new GslbcrmruntimeRemoteInfoSyncStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeRemoteInfo {
  /**
  * gslb_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#gslb_info Gslbcrmruntime#gslb_info}
  */
  readonly gslbInfo?: GslbcrmruntimeRemoteInfoGslbInfo[] | cdktf.IResolvable;
  /**
  * ops_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#ops_info Gslbcrmruntime#ops_info}
  */
  readonly opsInfo?: GslbcrmruntimeRemoteInfoOpsInfo[] | cdktf.IResolvable;
  /**
  * sync_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#sync_info Gslbcrmruntime#sync_info}
  */
  readonly syncInfo?: GslbcrmruntimeRemoteInfoSyncInfo[] | cdktf.IResolvable;
  /**
  * sync_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#sync_stats Gslbcrmruntime#sync_stats}
  */
  readonly syncStats?: GslbcrmruntimeRemoteInfoSyncStats[] | cdktf.IResolvable;
}

export function gslbcrmruntimeRemoteInfoToTerraform(struct?: GslbcrmruntimeRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_info: cdktf.listMapper(gslbcrmruntimeRemoteInfoGslbInfoToTerraform, true)(struct!.gslbInfo),
    ops_info: cdktf.listMapper(gslbcrmruntimeRemoteInfoOpsInfoToTerraform, true)(struct!.opsInfo),
    sync_info: cdktf.listMapper(gslbcrmruntimeRemoteInfoSyncInfoToTerraform, true)(struct!.syncInfo),
    sync_stats: cdktf.listMapper(gslbcrmruntimeRemoteInfoSyncStatsToTerraform, true)(struct!.syncStats),
  }
}


export function gslbcrmruntimeRemoteInfoToHclTerraform(struct?: GslbcrmruntimeRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_info: {
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoGslbInfoToHclTerraform, true)(struct!.gslbInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoGslbInfoList",
    },
    ops_info: {
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoOpsInfoToHclTerraform, true)(struct!.opsInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoOpsInfoList",
    },
    sync_info: {
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoSyncInfoToHclTerraform, true)(struct!.syncInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoSyncInfoList",
    },
    sync_stats: {
      value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoSyncStatsToHclTerraform, true)(struct!.syncStats),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeRemoteInfoSyncStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeRemoteInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeRemoteInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeRemoteInfo | cdktf.IResolvable | undefined) {
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
  private _gslbInfo = new GslbcrmruntimeRemoteInfoGslbInfoList(this, "gslb_info", true);
  public get gslbInfo() {
    return this._gslbInfo;
  }
  public putGslbInfo(value: GslbcrmruntimeRemoteInfoGslbInfo[] | cdktf.IResolvable) {
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
  private _opsInfo = new GslbcrmruntimeRemoteInfoOpsInfoList(this, "ops_info", true);
  public get opsInfo() {
    return this._opsInfo;
  }
  public putOpsInfo(value: GslbcrmruntimeRemoteInfoOpsInfo[] | cdktf.IResolvable) {
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
  private _syncInfo = new GslbcrmruntimeRemoteInfoSyncInfoList(this, "sync_info", true);
  public get syncInfo() {
    return this._syncInfo;
  }
  public putSyncInfo(value: GslbcrmruntimeRemoteInfoSyncInfo[] | cdktf.IResolvable) {
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
  private _syncStats = new GslbcrmruntimeRemoteInfoSyncStatsList(this, "sync_stats", true);
  public get syncStats() {
    return this._syncStats;
  }
  public putSyncStats(value: GslbcrmruntimeRemoteInfoSyncStats[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeRemoteInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeRemoteInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeRemoteInfoOutputReference {
    return new GslbcrmruntimeRemoteInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeReplicationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#replication_mode Gslbcrmruntime#replication_mode}
  */
  readonly replicationMode?: string;
}

export function gslbcrmruntimeReplicationPolicyToTerraform(struct?: GslbcrmruntimeReplicationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replication_mode: cdktf.stringToTerraform(struct!.replicationMode),
  }
}


export function gslbcrmruntimeReplicationPolicyToHclTerraform(struct?: GslbcrmruntimeReplicationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replication_mode: {
      value: cdktf.stringToHclTerraform(struct!.replicationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeReplicationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeReplicationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationMode = this._replicationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbcrmruntimeReplicationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicationMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicationMode = value.replicationMode;
    }
  }

  // replication_mode - computed: false, optional: true, required: false
  private _replicationMode?: string; 
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }
  public set replicationMode(value: string) {
    this._replicationMode = value;
  }
  public resetReplicationMode() {
    this._replicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationModeInput() {
    return this._replicationMode;
  }
}

export class GslbcrmruntimeReplicationPolicyList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeReplicationPolicy[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeReplicationPolicyOutputReference {
    return new GslbcrmruntimeReplicationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeStatusInfoLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#secs Gslbcrmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#usecs Gslbcrmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbcrmruntimeStatusInfoLastChangedTimeToTerraform(struct?: GslbcrmruntimeStatusInfoLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbcrmruntimeStatusInfoLastChangedTimeToHclTerraform(struct?: GslbcrmruntimeStatusInfoLastChangedTime | cdktf.IResolvable): any {
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

export class GslbcrmruntimeStatusInfoLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeStatusInfoLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbcrmruntimeStatusInfoLastChangedTime | cdktf.IResolvable | undefined) {
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

export class GslbcrmruntimeStatusInfoLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeStatusInfoLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeStatusInfoLastChangedTimeOutputReference {
    return new GslbcrmruntimeStatusInfoLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbcrmruntimeStatusInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#num_vs_completed Gslbcrmruntime#num_vs_completed}
  */
  readonly numVsCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#num_vs_failed Gslbcrmruntime#num_vs_failed}
  */
  readonly numVsFailed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#num_vs_total Gslbcrmruntime#num_vs_total}
  */
  readonly numVsTotal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#reason Gslbcrmruntime#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#reason_code Gslbcrmruntime#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#reason_code_string Gslbcrmruntime#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#state Gslbcrmruntime#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#last_changed_time Gslbcrmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbcrmruntimeStatusInfoLastChangedTime[] | cdktf.IResolvable;
}

export function gslbcrmruntimeStatusInfoToTerraform(struct?: GslbcrmruntimeStatusInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_vs_completed: cdktf.stringToTerraform(struct!.numVsCompleted),
    num_vs_failed: cdktf.stringToTerraform(struct!.numVsFailed),
    num_vs_total: cdktf.stringToTerraform(struct!.numVsTotal),
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(gslbcrmruntimeStatusInfoLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function gslbcrmruntimeStatusInfoToHclTerraform(struct?: GslbcrmruntimeStatusInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_vs_completed: {
      value: cdktf.stringToHclTerraform(struct!.numVsCompleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs_failed: {
      value: cdktf.stringToHclTerraform(struct!.numVsFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs_total: {
      value: cdktf.stringToHclTerraform(struct!.numVsTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
      value: cdktf.listMapperHcl(gslbcrmruntimeStatusInfoLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbcrmruntimeStatusInfoLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbcrmruntimeStatusInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbcrmruntimeStatusInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numVsCompleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVsCompleted = this._numVsCompleted;
    }
    if (this._numVsFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVsFailed = this._numVsFailed;
    }
    if (this._numVsTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVsTotal = this._numVsTotal;
    }
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

  public set internalValue(value: GslbcrmruntimeStatusInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numVsCompleted = undefined;
      this._numVsFailed = undefined;
      this._numVsTotal = undefined;
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
      this._numVsCompleted = value.numVsCompleted;
      this._numVsFailed = value.numVsFailed;
      this._numVsTotal = value.numVsTotal;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // num_vs_completed - computed: true, optional: true, required: false
  private _numVsCompleted?: string; 
  public get numVsCompleted() {
    return this.getStringAttribute('num_vs_completed');
  }
  public set numVsCompleted(value: string) {
    this._numVsCompleted = value;
  }
  public resetNumVsCompleted() {
    this._numVsCompleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsCompletedInput() {
    return this._numVsCompleted;
  }

  // num_vs_failed - computed: true, optional: true, required: false
  private _numVsFailed?: string; 
  public get numVsFailed() {
    return this.getStringAttribute('num_vs_failed');
  }
  public set numVsFailed(value: string) {
    this._numVsFailed = value;
  }
  public resetNumVsFailed() {
    this._numVsFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsFailedInput() {
    return this._numVsFailed;
  }

  // num_vs_total - computed: true, optional: true, required: false
  private _numVsTotal?: string; 
  public get numVsTotal() {
    return this.getStringAttribute('num_vs_total');
  }
  public set numVsTotal(value: string) {
    this._numVsTotal = value;
  }
  public resetNumVsTotal() {
    this._numVsTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsTotalInput() {
    return this._numVsTotal;
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
  private _lastChangedTime = new GslbcrmruntimeStatusInfoLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbcrmruntimeStatusInfoLastChangedTime[] | cdktf.IResolvable) {
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

export class GslbcrmruntimeStatusInfoList extends cdktf.ComplexList {
  public internalValue? : GslbcrmruntimeStatusInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbcrmruntimeStatusInfoOutputReference {
    return new GslbcrmruntimeStatusInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime avi_gslbcrmruntime}
*/
export class Gslbcrmruntime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_gslbcrmruntime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslbcrmruntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslbcrmruntime to import
  * @param importFromId The id of the existing Gslbcrmruntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslbcrmruntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_gslbcrmruntime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslbcrmruntime avi_gslbcrmruntime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbcrmruntimeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbcrmruntimeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_gslbcrmruntime',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
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
    this._id = config.id;
    this._name = config.name;
    this._objUuid = config.objUuid;
    this._siteName = config.siteName;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._events.internalValue = config.events;
    this._fdsInfo.internalValue = config.fdsInfo;
    this._localInfo.internalValue = config.localInfo;
    this._remoteInfo.internalValue = config.remoteInfo;
    this._replicationPolicy.internalValue = config.replicationPolicy;
    this._statusInfo.internalValue = config.statusInfo;
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
  private _events = new GslbcrmruntimeEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: GslbcrmruntimeEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // fds_info - computed: false, optional: true, required: false
  private _fdsInfo = new GslbcrmruntimeFdsInfoList(this, "fds_info", true);
  public get fdsInfo() {
    return this._fdsInfo;
  }
  public putFdsInfo(value: GslbcrmruntimeFdsInfo[] | cdktf.IResolvable) {
    this._fdsInfo.internalValue = value;
  }
  public resetFdsInfo() {
    this._fdsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsInfoInput() {
    return this._fdsInfo.internalValue;
  }

  // local_info - computed: false, optional: true, required: false
  private _localInfo = new GslbcrmruntimeLocalInfoList(this, "local_info", true);
  public get localInfo() {
    return this._localInfo;
  }
  public putLocalInfo(value: GslbcrmruntimeLocalInfo[] | cdktf.IResolvable) {
    this._localInfo.internalValue = value;
  }
  public resetLocalInfo() {
    this._localInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInfoInput() {
    return this._localInfo.internalValue;
  }

  // remote_info - computed: false, optional: true, required: false
  private _remoteInfo = new GslbcrmruntimeRemoteInfoList(this, "remote_info", true);
  public get remoteInfo() {
    return this._remoteInfo;
  }
  public putRemoteInfo(value: GslbcrmruntimeRemoteInfo[] | cdktf.IResolvable) {
    this._remoteInfo.internalValue = value;
  }
  public resetRemoteInfo() {
    this._remoteInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInfoInput() {
    return this._remoteInfo.internalValue;
  }

  // replication_policy - computed: false, optional: true, required: false
  private _replicationPolicy = new GslbcrmruntimeReplicationPolicyList(this, "replication_policy", true);
  public get replicationPolicy() {
    return this._replicationPolicy;
  }
  public putReplicationPolicy(value: GslbcrmruntimeReplicationPolicy[] | cdktf.IResolvable) {
    this._replicationPolicy.internalValue = value;
  }
  public resetReplicationPolicy() {
    this._replicationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationPolicyInput() {
    return this._replicationPolicy.internalValue;
  }

  // status_info - computed: false, optional: true, required: false
  private _statusInfo = new GslbcrmruntimeStatusInfoList(this, "status_info", true);
  public get statusInfo() {
    return this._statusInfo;
  }
  public putStatusInfo(value: GslbcrmruntimeStatusInfo[] | cdktf.IResolvable) {
    this._statusInfo.internalValue = value;
  }
  public resetStatusInfo() {
    this._statusInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInfoInput() {
    return this._statusInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      obj_uuid: cdktf.stringToTerraform(this._objUuid),
      site_name: cdktf.stringToTerraform(this._siteName),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      events: cdktf.listMapper(gslbcrmruntimeEventsToTerraform, true)(this._events.internalValue),
      fds_info: cdktf.listMapper(gslbcrmruntimeFdsInfoToTerraform, true)(this._fdsInfo.internalValue),
      local_info: cdktf.listMapper(gslbcrmruntimeLocalInfoToTerraform, true)(this._localInfo.internalValue),
      remote_info: cdktf.listMapper(gslbcrmruntimeRemoteInfoToTerraform, true)(this._remoteInfo.internalValue),
      replication_policy: cdktf.listMapper(gslbcrmruntimeReplicationPolicyToTerraform, true)(this._replicationPolicy.internalValue),
      status_info: cdktf.listMapper(gslbcrmruntimeStatusInfoToTerraform, true)(this._statusInfo.internalValue),
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
        value: cdktf.listMapperHcl(gslbcrmruntimeEventsToHclTerraform, true)(this._events.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbcrmruntimeEventsList",
      },
      fds_info: {
        value: cdktf.listMapperHcl(gslbcrmruntimeFdsInfoToHclTerraform, true)(this._fdsInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbcrmruntimeFdsInfoList",
      },
      local_info: {
        value: cdktf.listMapperHcl(gslbcrmruntimeLocalInfoToHclTerraform, true)(this._localInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbcrmruntimeLocalInfoList",
      },
      remote_info: {
        value: cdktf.listMapperHcl(gslbcrmruntimeRemoteInfoToHclTerraform, true)(this._remoteInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbcrmruntimeRemoteInfoList",
      },
      replication_policy: {
        value: cdktf.listMapperHcl(gslbcrmruntimeReplicationPolicyToHclTerraform, true)(this._replicationPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbcrmruntimeReplicationPolicyList",
      },
      status_info: {
        value: cdktf.listMapperHcl(gslbcrmruntimeStatusInfoToHclTerraform, true)(this._statusInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbcrmruntimeStatusInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
