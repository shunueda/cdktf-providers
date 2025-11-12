// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudpropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cc_vtypes Cloudproperties#cc_vtypes}
  */
  readonly ccVtypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#id Cloudproperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#uuid Cloudproperties#uuid}
  */
  readonly uuid?: string;
  /**
  * cc_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cc_props Cloudproperties#cc_props}
  */
  readonly ccProps?: CloudpropertiesCcProps[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#configpb_attributes Cloudproperties#configpb_attributes}
  */
  readonly configpbAttributes?: CloudpropertiesConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * hyp_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#hyp_props Cloudproperties#hyp_props}
  */
  readonly hypProps?: CloudpropertiesHypProps[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#info Cloudproperties#info}
  */
  readonly info?: CloudpropertiesInfo[] | cdktf.IResolvable;
}
export interface CloudpropertiesCcProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#rpc_poll_interval Cloudproperties#rpc_poll_interval}
  */
  readonly rpcPollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#rpc_queue_size Cloudproperties#rpc_queue_size}
  */
  readonly rpcQueueSize?: string;
}

export function cloudpropertiesCcPropsToTerraform(struct?: CloudpropertiesCcProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rpc_poll_interval: cdktf.stringToTerraform(struct!.rpcPollInterval),
    rpc_queue_size: cdktf.stringToTerraform(struct!.rpcQueueSize),
  }
}


export function cloudpropertiesCcPropsToHclTerraform(struct?: CloudpropertiesCcProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rpc_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.rpcPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpc_queue_size: {
      value: cdktf.stringToHclTerraform(struct!.rpcQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesCcPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesCcProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpcPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpcPollInterval = this._rpcPollInterval;
    }
    if (this._rpcQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpcQueueSize = this._rpcQueueSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesCcProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpcPollInterval = undefined;
      this._rpcQueueSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpcPollInterval = value.rpcPollInterval;
      this._rpcQueueSize = value.rpcQueueSize;
    }
  }

  // rpc_poll_interval - computed: false, optional: true, required: false
  private _rpcPollInterval?: string; 
  public get rpcPollInterval() {
    return this.getStringAttribute('rpc_poll_interval');
  }
  public set rpcPollInterval(value: string) {
    this._rpcPollInterval = value;
  }
  public resetRpcPollInterval() {
    this._rpcPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcPollIntervalInput() {
    return this._rpcPollInterval;
  }

  // rpc_queue_size - computed: false, optional: true, required: false
  private _rpcQueueSize?: string; 
  public get rpcQueueSize() {
    return this.getStringAttribute('rpc_queue_size');
  }
  public set rpcQueueSize(value: string) {
    this._rpcQueueSize = value;
  }
  public resetRpcQueueSize() {
    this._rpcQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcQueueSizeInput() {
    return this._rpcQueueSize;
  }
}

export class CloudpropertiesCcPropsList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesCcProps[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesCcPropsOutputReference {
    return new CloudpropertiesCcPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#version Cloudproperties#version}
  */
  readonly version?: string;
}

export function cloudpropertiesConfigpbAttributesToTerraform(struct?: CloudpropertiesConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cloudpropertiesConfigpbAttributesToHclTerraform(struct?: CloudpropertiesConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CloudpropertiesConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesConfigpbAttributesOutputReference {
    return new CloudpropertiesConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesHypProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#htype Cloudproperties#htype}
  */
  readonly htype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_ips_per_nic Cloudproperties#max_ips_per_nic}
  */
  readonly maxIpsPerNic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_nics Cloudproperties#max_nics}
  */
  readonly maxNics?: string;
}

export function cloudpropertiesHypPropsToTerraform(struct?: CloudpropertiesHypProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    htype: cdktf.stringToTerraform(struct!.htype),
    max_ips_per_nic: cdktf.stringToTerraform(struct!.maxIpsPerNic),
    max_nics: cdktf.stringToTerraform(struct!.maxNics),
  }
}


export function cloudpropertiesHypPropsToHclTerraform(struct?: CloudpropertiesHypProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    htype: {
      value: cdktf.stringToHclTerraform(struct!.htype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ips_per_nic: {
      value: cdktf.stringToHclTerraform(struct!.maxIpsPerNic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_nics: {
      value: cdktf.stringToHclTerraform(struct!.maxNics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesHypPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesHypProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htype !== undefined) {
      hasAnyValues = true;
      internalValueResult.htype = this._htype;
    }
    if (this._maxIpsPerNic !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIpsPerNic = this._maxIpsPerNic;
    }
    if (this._maxNics !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNics = this._maxNics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesHypProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._htype = undefined;
      this._maxIpsPerNic = undefined;
      this._maxNics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._htype = value.htype;
      this._maxIpsPerNic = value.maxIpsPerNic;
      this._maxNics = value.maxNics;
    }
  }

  // htype - computed: false, optional: false, required: true
  private _htype?: string; 
  public get htype() {
    return this.getStringAttribute('htype');
  }
  public set htype(value: string) {
    this._htype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htypeInput() {
    return this._htype;
  }

  // max_ips_per_nic - computed: true, optional: true, required: false
  private _maxIpsPerNic?: string; 
  public get maxIpsPerNic() {
    return this.getStringAttribute('max_ips_per_nic');
  }
  public set maxIpsPerNic(value: string) {
    this._maxIpsPerNic = value;
  }
  public resetMaxIpsPerNic() {
    this._maxIpsPerNic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIpsPerNicInput() {
    return this._maxIpsPerNic;
  }

  // max_nics - computed: true, optional: true, required: false
  private _maxNics?: string; 
  public get maxNics() {
    return this.getStringAttribute('max_nics');
  }
  public set maxNics(value: string) {
    this._maxNics = value;
  }
  public resetMaxNics() {
    this._maxNics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNicsInput() {
    return this._maxNics;
  }
}

export class CloudpropertiesHypPropsList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesHypProps[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesHypPropsOutputReference {
    return new CloudpropertiesHypPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesInfoCcaProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#async_retries Cloudproperties#async_retries}
  */
  readonly asyncRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#async_retries_delay Cloudproperties#async_retries_delay}
  */
  readonly asyncRetriesDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#poll_duration_target Cloudproperties#poll_duration_target}
  */
  readonly pollDurationTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#poll_fast_target Cloudproperties#poll_fast_target}
  */
  readonly pollFastTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#poll_slow_target Cloudproperties#poll_slow_target}
  */
  readonly pollSlowTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vcenter_host_ping_interval Cloudproperties#vcenter_host_ping_interval}
  */
  readonly vcenterHostPingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vcenter_inventory_max_object_updates Cloudproperties#vcenter_inventory_max_object_updates}
  */
  readonly vcenterInventoryMaxObjectUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vcenter_max_datastore_go_routines Cloudproperties#vcenter_max_datastore_go_routines}
  */
  readonly vcenterMaxDatastoreGoRoutines?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vcenter_reconcile_interval Cloudproperties#vcenter_reconcile_interval}
  */
  readonly vcenterReconcileInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vnic_retries Cloudproperties#vnic_retries}
  */
  readonly vnicRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vnic_retries_delay Cloudproperties#vnic_retries_delay}
  */
  readonly vnicRetriesDelay?: string;
}

export function cloudpropertiesInfoCcaPropsToTerraform(struct?: CloudpropertiesInfoCcaProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async_retries: cdktf.stringToTerraform(struct!.asyncRetries),
    async_retries_delay: cdktf.stringToTerraform(struct!.asyncRetriesDelay),
    poll_duration_target: cdktf.stringToTerraform(struct!.pollDurationTarget),
    poll_fast_target: cdktf.stringToTerraform(struct!.pollFastTarget),
    poll_slow_target: cdktf.stringToTerraform(struct!.pollSlowTarget),
    vcenter_host_ping_interval: cdktf.stringToTerraform(struct!.vcenterHostPingInterval),
    vcenter_inventory_max_object_updates: cdktf.stringToTerraform(struct!.vcenterInventoryMaxObjectUpdates),
    vcenter_max_datastore_go_routines: cdktf.stringToTerraform(struct!.vcenterMaxDatastoreGoRoutines),
    vcenter_reconcile_interval: cdktf.stringToTerraform(struct!.vcenterReconcileInterval),
    vnic_retries: cdktf.stringToTerraform(struct!.vnicRetries),
    vnic_retries_delay: cdktf.stringToTerraform(struct!.vnicRetriesDelay),
  }
}


export function cloudpropertiesInfoCcaPropsToHclTerraform(struct?: CloudpropertiesInfoCcaProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async_retries: {
      value: cdktf.stringToHclTerraform(struct!.asyncRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    async_retries_delay: {
      value: cdktf.stringToHclTerraform(struct!.asyncRetriesDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poll_duration_target: {
      value: cdktf.stringToHclTerraform(struct!.pollDurationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poll_fast_target: {
      value: cdktf.stringToHclTerraform(struct!.pollFastTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poll_slow_target: {
      value: cdktf.stringToHclTerraform(struct!.pollSlowTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_host_ping_interval: {
      value: cdktf.stringToHclTerraform(struct!.vcenterHostPingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_inventory_max_object_updates: {
      value: cdktf.stringToHclTerraform(struct!.vcenterInventoryMaxObjectUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_max_datastore_go_routines: {
      value: cdktf.stringToHclTerraform(struct!.vcenterMaxDatastoreGoRoutines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_reconcile_interval: {
      value: cdktf.stringToHclTerraform(struct!.vcenterReconcileInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_retries: {
      value: cdktf.stringToHclTerraform(struct!.vnicRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_retries_delay: {
      value: cdktf.stringToHclTerraform(struct!.vnicRetriesDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesInfoCcaPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesInfoCcaProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asyncRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncRetries = this._asyncRetries;
    }
    if (this._asyncRetriesDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncRetriesDelay = this._asyncRetriesDelay;
    }
    if (this._pollDurationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollDurationTarget = this._pollDurationTarget;
    }
    if (this._pollFastTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollFastTarget = this._pollFastTarget;
    }
    if (this._pollSlowTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollSlowTarget = this._pollSlowTarget;
    }
    if (this._vcenterHostPingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterHostPingInterval = this._vcenterHostPingInterval;
    }
    if (this._vcenterInventoryMaxObjectUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterInventoryMaxObjectUpdates = this._vcenterInventoryMaxObjectUpdates;
    }
    if (this._vcenterMaxDatastoreGoRoutines !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterMaxDatastoreGoRoutines = this._vcenterMaxDatastoreGoRoutines;
    }
    if (this._vcenterReconcileInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterReconcileInterval = this._vcenterReconcileInterval;
    }
    if (this._vnicRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicRetries = this._vnicRetries;
    }
    if (this._vnicRetriesDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicRetriesDelay = this._vnicRetriesDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesInfoCcaProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asyncRetries = undefined;
      this._asyncRetriesDelay = undefined;
      this._pollDurationTarget = undefined;
      this._pollFastTarget = undefined;
      this._pollSlowTarget = undefined;
      this._vcenterHostPingInterval = undefined;
      this._vcenterInventoryMaxObjectUpdates = undefined;
      this._vcenterMaxDatastoreGoRoutines = undefined;
      this._vcenterReconcileInterval = undefined;
      this._vnicRetries = undefined;
      this._vnicRetriesDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asyncRetries = value.asyncRetries;
      this._asyncRetriesDelay = value.asyncRetriesDelay;
      this._pollDurationTarget = value.pollDurationTarget;
      this._pollFastTarget = value.pollFastTarget;
      this._pollSlowTarget = value.pollSlowTarget;
      this._vcenterHostPingInterval = value.vcenterHostPingInterval;
      this._vcenterInventoryMaxObjectUpdates = value.vcenterInventoryMaxObjectUpdates;
      this._vcenterMaxDatastoreGoRoutines = value.vcenterMaxDatastoreGoRoutines;
      this._vcenterReconcileInterval = value.vcenterReconcileInterval;
      this._vnicRetries = value.vnicRetries;
      this._vnicRetriesDelay = value.vnicRetriesDelay;
    }
  }

  // async_retries - computed: false, optional: true, required: false
  private _asyncRetries?: string; 
  public get asyncRetries() {
    return this.getStringAttribute('async_retries');
  }
  public set asyncRetries(value: string) {
    this._asyncRetries = value;
  }
  public resetAsyncRetries() {
    this._asyncRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncRetriesInput() {
    return this._asyncRetries;
  }

  // async_retries_delay - computed: false, optional: true, required: false
  private _asyncRetriesDelay?: string; 
  public get asyncRetriesDelay() {
    return this.getStringAttribute('async_retries_delay');
  }
  public set asyncRetriesDelay(value: string) {
    this._asyncRetriesDelay = value;
  }
  public resetAsyncRetriesDelay() {
    this._asyncRetriesDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncRetriesDelayInput() {
    return this._asyncRetriesDelay;
  }

  // poll_duration_target - computed: false, optional: true, required: false
  private _pollDurationTarget?: string; 
  public get pollDurationTarget() {
    return this.getStringAttribute('poll_duration_target');
  }
  public set pollDurationTarget(value: string) {
    this._pollDurationTarget = value;
  }
  public resetPollDurationTarget() {
    this._pollDurationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollDurationTargetInput() {
    return this._pollDurationTarget;
  }

  // poll_fast_target - computed: false, optional: true, required: false
  private _pollFastTarget?: string; 
  public get pollFastTarget() {
    return this.getStringAttribute('poll_fast_target');
  }
  public set pollFastTarget(value: string) {
    this._pollFastTarget = value;
  }
  public resetPollFastTarget() {
    this._pollFastTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollFastTargetInput() {
    return this._pollFastTarget;
  }

  // poll_slow_target - computed: false, optional: true, required: false
  private _pollSlowTarget?: string; 
  public get pollSlowTarget() {
    return this.getStringAttribute('poll_slow_target');
  }
  public set pollSlowTarget(value: string) {
    this._pollSlowTarget = value;
  }
  public resetPollSlowTarget() {
    this._pollSlowTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollSlowTargetInput() {
    return this._pollSlowTarget;
  }

  // vcenter_host_ping_interval - computed: false, optional: true, required: false
  private _vcenterHostPingInterval?: string; 
  public get vcenterHostPingInterval() {
    return this.getStringAttribute('vcenter_host_ping_interval');
  }
  public set vcenterHostPingInterval(value: string) {
    this._vcenterHostPingInterval = value;
  }
  public resetVcenterHostPingInterval() {
    this._vcenterHostPingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterHostPingIntervalInput() {
    return this._vcenterHostPingInterval;
  }

  // vcenter_inventory_max_object_updates - computed: false, optional: true, required: false
  private _vcenterInventoryMaxObjectUpdates?: string; 
  public get vcenterInventoryMaxObjectUpdates() {
    return this.getStringAttribute('vcenter_inventory_max_object_updates');
  }
  public set vcenterInventoryMaxObjectUpdates(value: string) {
    this._vcenterInventoryMaxObjectUpdates = value;
  }
  public resetVcenterInventoryMaxObjectUpdates() {
    this._vcenterInventoryMaxObjectUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterInventoryMaxObjectUpdatesInput() {
    return this._vcenterInventoryMaxObjectUpdates;
  }

  // vcenter_max_datastore_go_routines - computed: false, optional: true, required: false
  private _vcenterMaxDatastoreGoRoutines?: string; 
  public get vcenterMaxDatastoreGoRoutines() {
    return this.getStringAttribute('vcenter_max_datastore_go_routines');
  }
  public set vcenterMaxDatastoreGoRoutines(value: string) {
    this._vcenterMaxDatastoreGoRoutines = value;
  }
  public resetVcenterMaxDatastoreGoRoutines() {
    this._vcenterMaxDatastoreGoRoutines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterMaxDatastoreGoRoutinesInput() {
    return this._vcenterMaxDatastoreGoRoutines;
  }

  // vcenter_reconcile_interval - computed: false, optional: true, required: false
  private _vcenterReconcileInterval?: string; 
  public get vcenterReconcileInterval() {
    return this.getStringAttribute('vcenter_reconcile_interval');
  }
  public set vcenterReconcileInterval(value: string) {
    this._vcenterReconcileInterval = value;
  }
  public resetVcenterReconcileInterval() {
    this._vcenterReconcileInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterReconcileIntervalInput() {
    return this._vcenterReconcileInterval;
  }

  // vnic_retries - computed: false, optional: true, required: false
  private _vnicRetries?: string; 
  public get vnicRetries() {
    return this.getStringAttribute('vnic_retries');
  }
  public set vnicRetries(value: string) {
    this._vnicRetries = value;
  }
  public resetVnicRetries() {
    this._vnicRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicRetriesInput() {
    return this._vnicRetries;
  }

  // vnic_retries_delay - computed: false, optional: true, required: false
  private _vnicRetriesDelay?: string; 
  public get vnicRetriesDelay() {
    return this.getStringAttribute('vnic_retries_delay');
  }
  public set vnicRetriesDelay(value: string) {
    this._vnicRetriesDelay = value;
  }
  public resetVnicRetriesDelay() {
    this._vnicRetriesDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicRetriesDelayInput() {
    return this._vnicRetriesDelay;
  }
}

export class CloudpropertiesInfoCcaPropsList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesInfoCcaProps[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesInfoCcaPropsOutputReference {
    return new CloudpropertiesInfoCcaPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesInfoControllerPropsConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#version Cloudproperties#version}
  */
  readonly version?: string;
}

export function cloudpropertiesInfoControllerPropsConfigpbAttributesToTerraform(struct?: CloudpropertiesInfoControllerPropsConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cloudpropertiesInfoControllerPropsConfigpbAttributesToHclTerraform(struct?: CloudpropertiesInfoControllerPropsConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesInfoControllerPropsConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesInfoControllerPropsConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesInfoControllerPropsConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CloudpropertiesInfoControllerPropsConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesInfoControllerPropsConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesInfoControllerPropsConfigpbAttributesOutputReference {
    return new CloudpropertiesInfoControllerPropsConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesInfoControllerPropsFalsePositiveLearningConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_apps_supported Cloudproperties#max_apps_supported}
  */
  readonly maxAppsSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#min_monitor_time Cloudproperties#min_monitor_time}
  */
  readonly minMonitorTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#min_trans_per_application Cloudproperties#min_trans_per_application}
  */
  readonly minTransPerApplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#min_trans_per_uri Cloudproperties#min_trans_per_uri}
  */
  readonly minTransPerUri?: string;
}

export function cloudpropertiesInfoControllerPropsFalsePositiveLearningConfigToTerraform(struct?: CloudpropertiesInfoControllerPropsFalsePositiveLearningConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_apps_supported: cdktf.stringToTerraform(struct!.maxAppsSupported),
    min_monitor_time: cdktf.stringToTerraform(struct!.minMonitorTime),
    min_trans_per_application: cdktf.stringToTerraform(struct!.minTransPerApplication),
    min_trans_per_uri: cdktf.stringToTerraform(struct!.minTransPerUri),
  }
}


export function cloudpropertiesInfoControllerPropsFalsePositiveLearningConfigToHclTerraform(struct?: CloudpropertiesInfoControllerPropsFalsePositiveLearningConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_apps_supported: {
      value: cdktf.stringToHclTerraform(struct!.maxAppsSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_monitor_time: {
      value: cdktf.stringToHclTerraform(struct!.minMonitorTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_trans_per_application: {
      value: cdktf.stringToHclTerraform(struct!.minTransPerApplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_trans_per_uri: {
      value: cdktf.stringToHclTerraform(struct!.minTransPerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesInfoControllerPropsFalsePositiveLearningConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesInfoControllerPropsFalsePositiveLearningConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAppsSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAppsSupported = this._maxAppsSupported;
    }
    if (this._minMonitorTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMonitorTime = this._minMonitorTime;
    }
    if (this._minTransPerApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTransPerApplication = this._minTransPerApplication;
    }
    if (this._minTransPerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTransPerUri = this._minTransPerUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesInfoControllerPropsFalsePositiveLearningConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxAppsSupported = undefined;
      this._minMonitorTime = undefined;
      this._minTransPerApplication = undefined;
      this._minTransPerUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxAppsSupported = value.maxAppsSupported;
      this._minMonitorTime = value.minMonitorTime;
      this._minTransPerApplication = value.minTransPerApplication;
      this._minTransPerUri = value.minTransPerUri;
    }
  }

  // max_apps_supported - computed: false, optional: true, required: false
  private _maxAppsSupported?: string; 
  public get maxAppsSupported() {
    return this.getStringAttribute('max_apps_supported');
  }
  public set maxAppsSupported(value: string) {
    this._maxAppsSupported = value;
  }
  public resetMaxAppsSupported() {
    this._maxAppsSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAppsSupportedInput() {
    return this._maxAppsSupported;
  }

  // min_monitor_time - computed: false, optional: true, required: false
  private _minMonitorTime?: string; 
  public get minMonitorTime() {
    return this.getStringAttribute('min_monitor_time');
  }
  public set minMonitorTime(value: string) {
    this._minMonitorTime = value;
  }
  public resetMinMonitorTime() {
    this._minMonitorTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMonitorTimeInput() {
    return this._minMonitorTime;
  }

  // min_trans_per_application - computed: false, optional: true, required: false
  private _minTransPerApplication?: string; 
  public get minTransPerApplication() {
    return this.getStringAttribute('min_trans_per_application');
  }
  public set minTransPerApplication(value: string) {
    this._minTransPerApplication = value;
  }
  public resetMinTransPerApplication() {
    this._minTransPerApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTransPerApplicationInput() {
    return this._minTransPerApplication;
  }

  // min_trans_per_uri - computed: false, optional: true, required: false
  private _minTransPerUri?: string; 
  public get minTransPerUri() {
    return this.getStringAttribute('min_trans_per_uri');
  }
  public set minTransPerUri(value: string) {
    this._minTransPerUri = value;
  }
  public resetMinTransPerUri() {
    this._minTransPerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTransPerUriInput() {
    return this._minTransPerUri;
  }
}

export class CloudpropertiesInfoControllerPropsFalsePositiveLearningConfigList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesInfoControllerPropsFalsePositiveLearningConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesInfoControllerPropsFalsePositiveLearningConfigOutputReference {
    return new CloudpropertiesInfoControllerPropsFalsePositiveLearningConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesInfoControllerPropsUserAgentCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#batch_size Cloudproperties#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#controller_cache_size Cloudproperties#controller_cache_size}
  */
  readonly controllerCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_age Cloudproperties#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_last_hit_time Cloudproperties#max_last_hit_time}
  */
  readonly maxLastHitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_upstream_queries Cloudproperties#max_upstream_queries}
  */
  readonly maxUpstreamQueries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_wait_time Cloudproperties#max_wait_time}
  */
  readonly maxWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#num_entries_upstream_update Cloudproperties#num_entries_upstream_update}
  */
  readonly numEntriesUpstreamUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#percent_reserved_for_bad_bots Cloudproperties#percent_reserved_for_bad_bots}
  */
  readonly percentReservedForBadBots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#percent_reserved_for_browsers Cloudproperties#percent_reserved_for_browsers}
  */
  readonly percentReservedForBrowsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#percent_reserved_for_good_bots Cloudproperties#percent_reserved_for_good_bots}
  */
  readonly percentReservedForGoodBots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#percent_reserved_for_outstanding Cloudproperties#percent_reserved_for_outstanding}
  */
  readonly percentReservedForOutstanding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#se_cache_size Cloudproperties#se_cache_size}
  */
  readonly seCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#upstream_update_interval Cloudproperties#upstream_update_interval}
  */
  readonly upstreamUpdateInterval?: string;
}

export function cloudpropertiesInfoControllerPropsUserAgentCacheConfigToTerraform(struct?: CloudpropertiesInfoControllerPropsUserAgentCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    controller_cache_size: cdktf.stringToTerraform(struct!.controllerCacheSize),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    max_last_hit_time: cdktf.stringToTerraform(struct!.maxLastHitTime),
    max_upstream_queries: cdktf.stringToTerraform(struct!.maxUpstreamQueries),
    max_wait_time: cdktf.stringToTerraform(struct!.maxWaitTime),
    num_entries_upstream_update: cdktf.stringToTerraform(struct!.numEntriesUpstreamUpdate),
    percent_reserved_for_bad_bots: cdktf.stringToTerraform(struct!.percentReservedForBadBots),
    percent_reserved_for_browsers: cdktf.stringToTerraform(struct!.percentReservedForBrowsers),
    percent_reserved_for_good_bots: cdktf.stringToTerraform(struct!.percentReservedForGoodBots),
    percent_reserved_for_outstanding: cdktf.stringToTerraform(struct!.percentReservedForOutstanding),
    se_cache_size: cdktf.stringToTerraform(struct!.seCacheSize),
    upstream_update_interval: cdktf.stringToTerraform(struct!.upstreamUpdateInterval),
  }
}


export function cloudpropertiesInfoControllerPropsUserAgentCacheConfigToHclTerraform(struct?: CloudpropertiesInfoControllerPropsUserAgentCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.controllerCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_last_hit_time: {
      value: cdktf.stringToHclTerraform(struct!.maxLastHitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_upstream_queries: {
      value: cdktf.stringToHclTerraform(struct!.maxUpstreamQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.maxWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_entries_upstream_update: {
      value: cdktf.stringToHclTerraform(struct!.numEntriesUpstreamUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_bad_bots: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForBadBots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_browsers: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForBrowsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_good_bots: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForGoodBots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_outstanding: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForOutstanding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.seCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_update_interval: {
      value: cdktf.stringToHclTerraform(struct!.upstreamUpdateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesInfoControllerPropsUserAgentCacheConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesInfoControllerPropsUserAgentCacheConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._controllerCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerCacheSize = this._controllerCacheSize;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxLastHitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLastHitTime = this._maxLastHitTime;
    }
    if (this._maxUpstreamQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpstreamQueries = this._maxUpstreamQueries;
    }
    if (this._maxWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTime = this._maxWaitTime;
    }
    if (this._numEntriesUpstreamUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.numEntriesUpstreamUpdate = this._numEntriesUpstreamUpdate;
    }
    if (this._percentReservedForBadBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForBadBots = this._percentReservedForBadBots;
    }
    if (this._percentReservedForBrowsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForBrowsers = this._percentReservedForBrowsers;
    }
    if (this._percentReservedForGoodBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForGoodBots = this._percentReservedForGoodBots;
    }
    if (this._percentReservedForOutstanding !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForOutstanding = this._percentReservedForOutstanding;
    }
    if (this._seCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seCacheSize = this._seCacheSize;
    }
    if (this._upstreamUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamUpdateInterval = this._upstreamUpdateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesInfoControllerPropsUserAgentCacheConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._controllerCacheSize = undefined;
      this._maxAge = undefined;
      this._maxLastHitTime = undefined;
      this._maxUpstreamQueries = undefined;
      this._maxWaitTime = undefined;
      this._numEntriesUpstreamUpdate = undefined;
      this._percentReservedForBadBots = undefined;
      this._percentReservedForBrowsers = undefined;
      this._percentReservedForGoodBots = undefined;
      this._percentReservedForOutstanding = undefined;
      this._seCacheSize = undefined;
      this._upstreamUpdateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._controllerCacheSize = value.controllerCacheSize;
      this._maxAge = value.maxAge;
      this._maxLastHitTime = value.maxLastHitTime;
      this._maxUpstreamQueries = value.maxUpstreamQueries;
      this._maxWaitTime = value.maxWaitTime;
      this._numEntriesUpstreamUpdate = value.numEntriesUpstreamUpdate;
      this._percentReservedForBadBots = value.percentReservedForBadBots;
      this._percentReservedForBrowsers = value.percentReservedForBrowsers;
      this._percentReservedForGoodBots = value.percentReservedForGoodBots;
      this._percentReservedForOutstanding = value.percentReservedForOutstanding;
      this._seCacheSize = value.seCacheSize;
      this._upstreamUpdateInterval = value.upstreamUpdateInterval;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // controller_cache_size - computed: false, optional: true, required: false
  private _controllerCacheSize?: string; 
  public get controllerCacheSize() {
    return this.getStringAttribute('controller_cache_size');
  }
  public set controllerCacheSize(value: string) {
    this._controllerCacheSize = value;
  }
  public resetControllerCacheSize() {
    this._controllerCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerCacheSizeInput() {
    return this._controllerCacheSize;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_last_hit_time - computed: false, optional: true, required: false
  private _maxLastHitTime?: string; 
  public get maxLastHitTime() {
    return this.getStringAttribute('max_last_hit_time');
  }
  public set maxLastHitTime(value: string) {
    this._maxLastHitTime = value;
  }
  public resetMaxLastHitTime() {
    this._maxLastHitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLastHitTimeInput() {
    return this._maxLastHitTime;
  }

  // max_upstream_queries - computed: false, optional: true, required: false
  private _maxUpstreamQueries?: string; 
  public get maxUpstreamQueries() {
    return this.getStringAttribute('max_upstream_queries');
  }
  public set maxUpstreamQueries(value: string) {
    this._maxUpstreamQueries = value;
  }
  public resetMaxUpstreamQueries() {
    this._maxUpstreamQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpstreamQueriesInput() {
    return this._maxUpstreamQueries;
  }

  // max_wait_time - computed: false, optional: true, required: false
  private _maxWaitTime?: string; 
  public get maxWaitTime() {
    return this.getStringAttribute('max_wait_time');
  }
  public set maxWaitTime(value: string) {
    this._maxWaitTime = value;
  }
  public resetMaxWaitTime() {
    this._maxWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInput() {
    return this._maxWaitTime;
  }

  // num_entries_upstream_update - computed: false, optional: true, required: false
  private _numEntriesUpstreamUpdate?: string; 
  public get numEntriesUpstreamUpdate() {
    return this.getStringAttribute('num_entries_upstream_update');
  }
  public set numEntriesUpstreamUpdate(value: string) {
    this._numEntriesUpstreamUpdate = value;
  }
  public resetNumEntriesUpstreamUpdate() {
    this._numEntriesUpstreamUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numEntriesUpstreamUpdateInput() {
    return this._numEntriesUpstreamUpdate;
  }

  // percent_reserved_for_bad_bots - computed: false, optional: true, required: false
  private _percentReservedForBadBots?: string; 
  public get percentReservedForBadBots() {
    return this.getStringAttribute('percent_reserved_for_bad_bots');
  }
  public set percentReservedForBadBots(value: string) {
    this._percentReservedForBadBots = value;
  }
  public resetPercentReservedForBadBots() {
    this._percentReservedForBadBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForBadBotsInput() {
    return this._percentReservedForBadBots;
  }

  // percent_reserved_for_browsers - computed: false, optional: true, required: false
  private _percentReservedForBrowsers?: string; 
  public get percentReservedForBrowsers() {
    return this.getStringAttribute('percent_reserved_for_browsers');
  }
  public set percentReservedForBrowsers(value: string) {
    this._percentReservedForBrowsers = value;
  }
  public resetPercentReservedForBrowsers() {
    this._percentReservedForBrowsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForBrowsersInput() {
    return this._percentReservedForBrowsers;
  }

  // percent_reserved_for_good_bots - computed: false, optional: true, required: false
  private _percentReservedForGoodBots?: string; 
  public get percentReservedForGoodBots() {
    return this.getStringAttribute('percent_reserved_for_good_bots');
  }
  public set percentReservedForGoodBots(value: string) {
    this._percentReservedForGoodBots = value;
  }
  public resetPercentReservedForGoodBots() {
    this._percentReservedForGoodBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForGoodBotsInput() {
    return this._percentReservedForGoodBots;
  }

  // percent_reserved_for_outstanding - computed: false, optional: true, required: false
  private _percentReservedForOutstanding?: string; 
  public get percentReservedForOutstanding() {
    return this.getStringAttribute('percent_reserved_for_outstanding');
  }
  public set percentReservedForOutstanding(value: string) {
    this._percentReservedForOutstanding = value;
  }
  public resetPercentReservedForOutstanding() {
    this._percentReservedForOutstanding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForOutstandingInput() {
    return this._percentReservedForOutstanding;
  }

  // se_cache_size - computed: false, optional: true, required: false
  private _seCacheSize?: string; 
  public get seCacheSize() {
    return this.getStringAttribute('se_cache_size');
  }
  public set seCacheSize(value: string) {
    this._seCacheSize = value;
  }
  public resetSeCacheSize() {
    this._seCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seCacheSizeInput() {
    return this._seCacheSize;
  }

  // upstream_update_interval - computed: false, optional: true, required: false
  private _upstreamUpdateInterval?: string; 
  public get upstreamUpdateInterval() {
    return this.getStringAttribute('upstream_update_interval');
  }
  public set upstreamUpdateInterval(value: string) {
    this._upstreamUpdateInterval = value;
  }
  public resetUpstreamUpdateInterval() {
    this._upstreamUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUpdateIntervalInput() {
    return this._upstreamUpdateInterval;
  }
}

export class CloudpropertiesInfoControllerPropsUserAgentCacheConfigList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesInfoControllerPropsUserAgentCacheConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesInfoControllerPropsUserAgentCacheConfigOutputReference {
    return new CloudpropertiesInfoControllerPropsUserAgentCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesInfoControllerProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#alert_manager_use_evms Cloudproperties#alert_manager_use_evms}
  */
  readonly alertManagerUseEvms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#allow_admin_network_updates Cloudproperties#allow_admin_network_updates}
  */
  readonly allowAdminNetworkUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#allow_ip_forwarding Cloudproperties#allow_ip_forwarding}
  */
  readonly allowIpForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#allow_unauthenticated_apis Cloudproperties#allow_unauthenticated_apis}
  */
  readonly allowUnauthenticatedApis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#allow_unauthenticated_nodes Cloudproperties#allow_unauthenticated_nodes}
  */
  readonly allowUnauthenticatedNodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#api_idle_timeout Cloudproperties#api_idle_timeout}
  */
  readonly apiIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#api_perf_logging_threshold Cloudproperties#api_perf_logging_threshold}
  */
  readonly apiPerfLoggingThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#appviewx_compat_mode Cloudproperties#appviewx_compat_mode}
  */
  readonly appviewxCompatMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#async_patch_merge_period Cloudproperties#async_patch_merge_period}
  */
  readonly asyncPatchMergePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#async_patch_request_cleanup_duration Cloudproperties#async_patch_request_cleanup_duration}
  */
  readonly asyncPatchRequestCleanupDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#attach_ip_retry_interval Cloudproperties#attach_ip_retry_interval}
  */
  readonly attachIpRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#attach_ip_retry_limit Cloudproperties#attach_ip_retry_limit}
  */
  readonly attachIpRetryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#bm_use_ansible Cloudproperties#bm_use_ansible}
  */
  readonly bmUseAnsible?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#check_vsvip_fqdn_syntax Cloudproperties#check_vsvip_fqdn_syntax}
  */
  readonly checkVsvipFqdnSyntax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cleanup_expired_authtoken_timeout_period Cloudproperties#cleanup_expired_authtoken_timeout_period}
  */
  readonly cleanupExpiredAuthtokenTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cleanup_sessions_timeout_period Cloudproperties#cleanup_sessions_timeout_period}
  */
  readonly cleanupSessionsTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cloud_discovery_interval Cloudproperties#cloud_discovery_interval}
  */
  readonly cloudDiscoveryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cloud_reconcile Cloudproperties#cloud_reconcile}
  */
  readonly cloudReconcile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cloud_reconcile_interval Cloudproperties#cloud_reconcile_interval}
  */
  readonly cloudReconcileInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cluster_ip_gratuitous_arp_period Cloudproperties#cluster_ip_gratuitous_arp_period}
  */
  readonly clusterIpGratuitousArpPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#consistency_check_timeout_period Cloudproperties#consistency_check_timeout_period}
  */
  readonly consistencyCheckTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#controller_resource_info_collection_period Cloudproperties#controller_resource_info_collection_period}
  */
  readonly controllerResourceInfoCollectionPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#crashed_se_reboot Cloudproperties#crashed_se_reboot}
  */
  readonly crashedSeReboot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#dead_se_detection_timer Cloudproperties#dead_se_detection_timer}
  */
  readonly deadSeDetectionTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#default_minimum_api_timeout Cloudproperties#default_minimum_api_timeout}
  */
  readonly defaultMinimumApiTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#del_offline_se_after_reboot_delay Cloudproperties#del_offline_se_after_reboot_delay}
  */
  readonly delOfflineSeAfterRebootDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#detach_ip_retry_interval Cloudproperties#detach_ip_retry_interval}
  */
  readonly detachIpRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#detach_ip_retry_limit Cloudproperties#detach_ip_retry_limit}
  */
  readonly detachIpRetryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#detach_ip_timeout Cloudproperties#detach_ip_timeout}
  */
  readonly detachIpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#dns_refresh_period Cloudproperties#dns_refresh_period}
  */
  readonly dnsRefreshPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#dummy Cloudproperties#dummy}
  */
  readonly dummy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#edit_system_limits Cloudproperties#edit_system_limits}
  */
  readonly editSystemLimits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#enable_api_sharding Cloudproperties#enable_api_sharding}
  */
  readonly enableApiSharding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#enable_memory_balancer Cloudproperties#enable_memory_balancer}
  */
  readonly enableMemoryBalancer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#enable_per_process_stop Cloudproperties#enable_per_process_stop}
  */
  readonly enablePerProcessStop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#enable_resmgr_log_cache_print Cloudproperties#enable_resmgr_log_cache_print}
  */
  readonly enableResmgrLogCachePrint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#event_manager_max_goroutines Cloudproperties#event_manager_max_goroutines}
  */
  readonly eventManagerMaxGoroutines?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#event_manager_max_subscribers Cloudproperties#event_manager_max_subscribers}
  */
  readonly eventManagerMaxSubscribers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#event_manager_processing_time_threshold Cloudproperties#event_manager_processing_time_threshold}
  */
  readonly eventManagerProcessingTimeThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#fatal_error_lease_time Cloudproperties#fatal_error_lease_time}
  */
  readonly fatalErrorLeaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#federated_datastore_cleanup_duration Cloudproperties#federated_datastore_cleanup_duration}
  */
  readonly federatedDatastoreCleanupDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#file_object_cleanup_period Cloudproperties#file_object_cleanup_period}
  */
  readonly fileObjectCleanupPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#fileobject_max_file_versions Cloudproperties#fileobject_max_file_versions}
  */
  readonly fileobjectMaxFileVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#gslb_purge_batch_size Cloudproperties#gslb_purge_batch_size}
  */
  readonly gslbPurgeBatchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#gslb_purge_sleep_time_ms Cloudproperties#gslb_purge_sleep_time_ms}
  */
  readonly gslbPurgeSleepTimeMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#ignore_vrf_in_networksubnetlist Cloudproperties#ignore_vrf_in_networksubnetlist}
  */
  readonly ignoreVrfInNetworksubnetlist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_dead_se_in_grp Cloudproperties#max_dead_se_in_grp}
  */
  readonly maxDeadSeInGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_pcap_per_tenant Cloudproperties#max_pcap_per_tenant}
  */
  readonly maxPcapPerTenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_se_spawn_interval_delay Cloudproperties#max_se_spawn_interval_delay}
  */
  readonly maxSeSpawnIntervalDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_seq_attach_ip_failures Cloudproperties#max_seq_attach_ip_failures}
  */
  readonly maxSeqAttachIpFailures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_seq_vnic_failures Cloudproperties#max_seq_vnic_failures}
  */
  readonly maxSeqVnicFailures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_threads_cc_vip_bg_worker Cloudproperties#max_threads_cc_vip_bg_worker}
  */
  readonly maxThreadsCcVipBgWorker?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#permission_scoped_shared_admin_networks Cloudproperties#permission_scoped_shared_admin_networks}
  */
  readonly permissionScopedSharedAdminNetworks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#persistence_key_rotate_period Cloudproperties#persistence_key_rotate_period}
  */
  readonly persistenceKeyRotatePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#portal_request_burst_limit Cloudproperties#portal_request_burst_limit}
  */
  readonly portalRequestBurstLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#portal_request_rate_limit Cloudproperties#portal_request_rate_limit}
  */
  readonly portalRequestRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#portal_token Cloudproperties#portal_token}
  */
  readonly portalToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#postgres_vacuum_period Cloudproperties#postgres_vacuum_period}
  */
  readonly postgresVacuumPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#process_locked_useraccounts_timeout_period Cloudproperties#process_locked_useraccounts_timeout_period}
  */
  readonly processLockedUseraccountsTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#process_pki_profile_timeout_period Cloudproperties#process_pki_profile_timeout_period}
  */
  readonly processPkiProfileTimeoutPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#query_host_fail Cloudproperties#query_host_fail}
  */
  readonly queryHostFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#resmgr_log_caching_period Cloudproperties#resmgr_log_caching_period}
  */
  readonly resmgrLogCachingPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#restrict_cloud_read_access Cloudproperties#restrict_cloud_read_access}
  */
  readonly restrictCloudReadAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#safenet_hsm_version Cloudproperties#safenet_hsm_version}
  */
  readonly safenetHsmVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#se_create_timeout Cloudproperties#se_create_timeout}
  */
  readonly seCreateTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#se_failover_attempt_interval Cloudproperties#se_failover_attempt_interval}
  */
  readonly seFailoverAttemptInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#se_from_marketplace Cloudproperties#se_from_marketplace}
  */
  readonly seFromMarketplace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#se_offline_del Cloudproperties#se_offline_del}
  */
  readonly seOfflineDel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#se_spawn_retry_interval Cloudproperties#se_spawn_retry_interval}
  */
  readonly seSpawnRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#se_upgrade_flow_cleanup_timeout Cloudproperties#se_upgrade_flow_cleanup_timeout}
  */
  readonly seUpgradeFlowCleanupTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#se_vnic_cooldown Cloudproperties#se_vnic_cooldown}
  */
  readonly seVnicCooldown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#se_vnic_gc_wait_time Cloudproperties#se_vnic_gc_wait_time}
  */
  readonly seVnicGcWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#secure_channel_cleanup_timeout Cloudproperties#secure_channel_cleanup_timeout}
  */
  readonly secureChannelCleanupTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#secure_channel_controller_token_timeout Cloudproperties#secure_channel_controller_token_timeout}
  */
  readonly secureChannelControllerTokenTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#secure_channel_se_token_timeout Cloudproperties#secure_channel_se_token_timeout}
  */
  readonly secureChannelSeTokenTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#seupgrade_copy_buffer_size Cloudproperties#seupgrade_copy_buffer_size}
  */
  readonly seupgradeCopyBufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#seupgrade_copy_pool_size Cloudproperties#seupgrade_copy_pool_size}
  */
  readonly seupgradeCopyPoolSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#seupgrade_fabric_pool_size Cloudproperties#seupgrade_fabric_pool_size}
  */
  readonly seupgradeFabricPoolSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#seupgrade_segroup_min_dead_timeout Cloudproperties#seupgrade_segroup_min_dead_timeout}
  */
  readonly seupgradeSegroupMinDeadTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#shared_ssl_certificates Cloudproperties#shared_ssl_certificates}
  */
  readonly sharedSslCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#skopeo_retry_interval Cloudproperties#skopeo_retry_interval}
  */
  readonly skopeoRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#skopeo_retry_limit Cloudproperties#skopeo_retry_limit}
  */
  readonly skopeoRetryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#soft_min_mem_per_se_limit Cloudproperties#soft_min_mem_per_se_limit}
  */
  readonly softMinMemPerSeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#ssl_certificate_expiry_warning_days Cloudproperties#ssl_certificate_expiry_warning_days}
  */
  readonly sslCertificateExpiryWarningDays?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#system_report_cleanup_interval Cloudproperties#system_report_cleanup_interval}
  */
  readonly systemReportCleanupInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#system_report_limit Cloudproperties#system_report_limit}
  */
  readonly systemReportLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#unresponsive_se_reboot Cloudproperties#unresponsive_se_reboot}
  */
  readonly unresponsiveSeReboot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#update_dns_entry_retry_limit Cloudproperties#update_dns_entry_retry_limit}
  */
  readonly updateDnsEntryRetryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#update_dns_entry_timeout Cloudproperties#update_dns_entry_timeout}
  */
  readonly updateDnsEntryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#upgrade_dns_ttl Cloudproperties#upgrade_dns_ttl}
  */
  readonly upgradeDnsTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#upgrade_fat_se_lease_time Cloudproperties#upgrade_fat_se_lease_time}
  */
  readonly upgradeFatSeLeaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#upgrade_lease_time Cloudproperties#upgrade_lease_time}
  */
  readonly upgradeLeaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#upgrade_se_per_vs_scale_ops_txn_time Cloudproperties#upgrade_se_per_vs_scale_ops_txn_time}
  */
  readonly upgradeSePerVsScaleOpsTxnTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#uuid Cloudproperties#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vnic_op_fail_time Cloudproperties#vnic_op_fail_time}
  */
  readonly vnicOpFailTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_awaiting_se_timeout Cloudproperties#vs_awaiting_se_timeout}
  */
  readonly vsAwaitingSeTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_key_rotate_period Cloudproperties#vs_key_rotate_period}
  */
  readonly vsKeyRotatePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_scaleout_ready_check_interval Cloudproperties#vs_scaleout_ready_check_interval}
  */
  readonly vsScaleoutReadyCheckInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_se_attach_ip_fail Cloudproperties#vs_se_attach_ip_fail}
  */
  readonly vsSeAttachIpFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_se_bootup_fail Cloudproperties#vs_se_bootup_fail}
  */
  readonly vsSeBootupFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_se_bootup_fail_patch Cloudproperties#vs_se_bootup_fail_patch}
  */
  readonly vsSeBootupFailPatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_se_create_fail Cloudproperties#vs_se_create_fail}
  */
  readonly vsSeCreateFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_se_ping_fail Cloudproperties#vs_se_ping_fail}
  */
  readonly vsSePingFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_se_vnic_fail Cloudproperties#vs_se_vnic_fail}
  */
  readonly vsSeVnicFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vs_se_vnic_ip_fail Cloudproperties#vs_se_vnic_ip_fail}
  */
  readonly vsSeVnicIpFail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vsphere_ha_detection_timeout Cloudproperties#vsphere_ha_detection_timeout}
  */
  readonly vsphereHaDetectionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vsphere_ha_recovery_timeout Cloudproperties#vsphere_ha_recovery_timeout}
  */
  readonly vsphereHaRecoveryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vsphere_ha_timer_interval Cloudproperties#vsphere_ha_timer_interval}
  */
  readonly vsphereHaTimerInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#warmstart_se_reconnect_wait_time Cloudproperties#warmstart_se_reconnect_wait_time}
  */
  readonly warmstartSeReconnectWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#warmstart_vs_resync_wait_time Cloudproperties#warmstart_vs_resync_wait_time}
  */
  readonly warmstartVsResyncWaitTime?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#configpb_attributes Cloudproperties#configpb_attributes}
  */
  readonly configpbAttributes?: CloudpropertiesInfoControllerPropsConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * false_positive_learning_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#false_positive_learning_config Cloudproperties#false_positive_learning_config}
  */
  readonly falsePositiveLearningConfig?: CloudpropertiesInfoControllerPropsFalsePositiveLearningConfig[] | cdktf.IResolvable;
  /**
  * user_agent_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#user_agent_cache_config Cloudproperties#user_agent_cache_config}
  */
  readonly userAgentCacheConfig?: CloudpropertiesInfoControllerPropsUserAgentCacheConfig[] | cdktf.IResolvable;
}

export function cloudpropertiesInfoControllerPropsToTerraform(struct?: CloudpropertiesInfoControllerProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_manager_use_evms: cdktf.stringToTerraform(struct!.alertManagerUseEvms),
    allow_admin_network_updates: cdktf.stringToTerraform(struct!.allowAdminNetworkUpdates),
    allow_ip_forwarding: cdktf.stringToTerraform(struct!.allowIpForwarding),
    allow_unauthenticated_apis: cdktf.stringToTerraform(struct!.allowUnauthenticatedApis),
    allow_unauthenticated_nodes: cdktf.stringToTerraform(struct!.allowUnauthenticatedNodes),
    api_idle_timeout: cdktf.stringToTerraform(struct!.apiIdleTimeout),
    api_perf_logging_threshold: cdktf.stringToTerraform(struct!.apiPerfLoggingThreshold),
    appviewx_compat_mode: cdktf.stringToTerraform(struct!.appviewxCompatMode),
    async_patch_merge_period: cdktf.stringToTerraform(struct!.asyncPatchMergePeriod),
    async_patch_request_cleanup_duration: cdktf.stringToTerraform(struct!.asyncPatchRequestCleanupDuration),
    attach_ip_retry_interval: cdktf.stringToTerraform(struct!.attachIpRetryInterval),
    attach_ip_retry_limit: cdktf.stringToTerraform(struct!.attachIpRetryLimit),
    bm_use_ansible: cdktf.stringToTerraform(struct!.bmUseAnsible),
    check_vsvip_fqdn_syntax: cdktf.stringToTerraform(struct!.checkVsvipFqdnSyntax),
    cleanup_expired_authtoken_timeout_period: cdktf.stringToTerraform(struct!.cleanupExpiredAuthtokenTimeoutPeriod),
    cleanup_sessions_timeout_period: cdktf.stringToTerraform(struct!.cleanupSessionsTimeoutPeriod),
    cloud_discovery_interval: cdktf.stringToTerraform(struct!.cloudDiscoveryInterval),
    cloud_reconcile: cdktf.stringToTerraform(struct!.cloudReconcile),
    cloud_reconcile_interval: cdktf.stringToTerraform(struct!.cloudReconcileInterval),
    cluster_ip_gratuitous_arp_period: cdktf.stringToTerraform(struct!.clusterIpGratuitousArpPeriod),
    consistency_check_timeout_period: cdktf.stringToTerraform(struct!.consistencyCheckTimeoutPeriod),
    controller_resource_info_collection_period: cdktf.stringToTerraform(struct!.controllerResourceInfoCollectionPeriod),
    crashed_se_reboot: cdktf.stringToTerraform(struct!.crashedSeReboot),
    dead_se_detection_timer: cdktf.stringToTerraform(struct!.deadSeDetectionTimer),
    default_minimum_api_timeout: cdktf.stringToTerraform(struct!.defaultMinimumApiTimeout),
    del_offline_se_after_reboot_delay: cdktf.stringToTerraform(struct!.delOfflineSeAfterRebootDelay),
    detach_ip_retry_interval: cdktf.stringToTerraform(struct!.detachIpRetryInterval),
    detach_ip_retry_limit: cdktf.stringToTerraform(struct!.detachIpRetryLimit),
    detach_ip_timeout: cdktf.stringToTerraform(struct!.detachIpTimeout),
    dns_refresh_period: cdktf.stringToTerraform(struct!.dnsRefreshPeriod),
    dummy: cdktf.stringToTerraform(struct!.dummy),
    edit_system_limits: cdktf.stringToTerraform(struct!.editSystemLimits),
    enable_api_sharding: cdktf.stringToTerraform(struct!.enableApiSharding),
    enable_memory_balancer: cdktf.stringToTerraform(struct!.enableMemoryBalancer),
    enable_per_process_stop: cdktf.stringToTerraform(struct!.enablePerProcessStop),
    enable_resmgr_log_cache_print: cdktf.stringToTerraform(struct!.enableResmgrLogCachePrint),
    event_manager_max_goroutines: cdktf.stringToTerraform(struct!.eventManagerMaxGoroutines),
    event_manager_max_subscribers: cdktf.stringToTerraform(struct!.eventManagerMaxSubscribers),
    event_manager_processing_time_threshold: cdktf.stringToTerraform(struct!.eventManagerProcessingTimeThreshold),
    fatal_error_lease_time: cdktf.stringToTerraform(struct!.fatalErrorLeaseTime),
    federated_datastore_cleanup_duration: cdktf.stringToTerraform(struct!.federatedDatastoreCleanupDuration),
    file_object_cleanup_period: cdktf.stringToTerraform(struct!.fileObjectCleanupPeriod),
    fileobject_max_file_versions: cdktf.stringToTerraform(struct!.fileobjectMaxFileVersions),
    gslb_purge_batch_size: cdktf.stringToTerraform(struct!.gslbPurgeBatchSize),
    gslb_purge_sleep_time_ms: cdktf.stringToTerraform(struct!.gslbPurgeSleepTimeMs),
    ignore_vrf_in_networksubnetlist: cdktf.stringToTerraform(struct!.ignoreVrfInNetworksubnetlist),
    max_dead_se_in_grp: cdktf.stringToTerraform(struct!.maxDeadSeInGrp),
    max_pcap_per_tenant: cdktf.stringToTerraform(struct!.maxPcapPerTenant),
    max_se_spawn_interval_delay: cdktf.stringToTerraform(struct!.maxSeSpawnIntervalDelay),
    max_seq_attach_ip_failures: cdktf.stringToTerraform(struct!.maxSeqAttachIpFailures),
    max_seq_vnic_failures: cdktf.stringToTerraform(struct!.maxSeqVnicFailures),
    max_threads_cc_vip_bg_worker: cdktf.stringToTerraform(struct!.maxThreadsCcVipBgWorker),
    permission_scoped_shared_admin_networks: cdktf.stringToTerraform(struct!.permissionScopedSharedAdminNetworks),
    persistence_key_rotate_period: cdktf.stringToTerraform(struct!.persistenceKeyRotatePeriod),
    portal_request_burst_limit: cdktf.stringToTerraform(struct!.portalRequestBurstLimit),
    portal_request_rate_limit: cdktf.stringToTerraform(struct!.portalRequestRateLimit),
    portal_token: cdktf.stringToTerraform(struct!.portalToken),
    postgres_vacuum_period: cdktf.stringToTerraform(struct!.postgresVacuumPeriod),
    process_locked_useraccounts_timeout_period: cdktf.stringToTerraform(struct!.processLockedUseraccountsTimeoutPeriod),
    process_pki_profile_timeout_period: cdktf.stringToTerraform(struct!.processPkiProfileTimeoutPeriod),
    query_host_fail: cdktf.stringToTerraform(struct!.queryHostFail),
    resmgr_log_caching_period: cdktf.stringToTerraform(struct!.resmgrLogCachingPeriod),
    restrict_cloud_read_access: cdktf.stringToTerraform(struct!.restrictCloudReadAccess),
    safenet_hsm_version: cdktf.stringToTerraform(struct!.safenetHsmVersion),
    se_create_timeout: cdktf.stringToTerraform(struct!.seCreateTimeout),
    se_failover_attempt_interval: cdktf.stringToTerraform(struct!.seFailoverAttemptInterval),
    se_from_marketplace: cdktf.stringToTerraform(struct!.seFromMarketplace),
    se_offline_del: cdktf.stringToTerraform(struct!.seOfflineDel),
    se_spawn_retry_interval: cdktf.stringToTerraform(struct!.seSpawnRetryInterval),
    se_upgrade_flow_cleanup_timeout: cdktf.stringToTerraform(struct!.seUpgradeFlowCleanupTimeout),
    se_vnic_cooldown: cdktf.stringToTerraform(struct!.seVnicCooldown),
    se_vnic_gc_wait_time: cdktf.stringToTerraform(struct!.seVnicGcWaitTime),
    secure_channel_cleanup_timeout: cdktf.stringToTerraform(struct!.secureChannelCleanupTimeout),
    secure_channel_controller_token_timeout: cdktf.stringToTerraform(struct!.secureChannelControllerTokenTimeout),
    secure_channel_se_token_timeout: cdktf.stringToTerraform(struct!.secureChannelSeTokenTimeout),
    seupgrade_copy_buffer_size: cdktf.stringToTerraform(struct!.seupgradeCopyBufferSize),
    seupgrade_copy_pool_size: cdktf.stringToTerraform(struct!.seupgradeCopyPoolSize),
    seupgrade_fabric_pool_size: cdktf.stringToTerraform(struct!.seupgradeFabricPoolSize),
    seupgrade_segroup_min_dead_timeout: cdktf.stringToTerraform(struct!.seupgradeSegroupMinDeadTimeout),
    shared_ssl_certificates: cdktf.stringToTerraform(struct!.sharedSslCertificates),
    skopeo_retry_interval: cdktf.stringToTerraform(struct!.skopeoRetryInterval),
    skopeo_retry_limit: cdktf.stringToTerraform(struct!.skopeoRetryLimit),
    soft_min_mem_per_se_limit: cdktf.stringToTerraform(struct!.softMinMemPerSeLimit),
    ssl_certificate_expiry_warning_days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sslCertificateExpiryWarningDays),
    system_report_cleanup_interval: cdktf.stringToTerraform(struct!.systemReportCleanupInterval),
    system_report_limit: cdktf.stringToTerraform(struct!.systemReportLimit),
    unresponsive_se_reboot: cdktf.stringToTerraform(struct!.unresponsiveSeReboot),
    update_dns_entry_retry_limit: cdktf.stringToTerraform(struct!.updateDnsEntryRetryLimit),
    update_dns_entry_timeout: cdktf.stringToTerraform(struct!.updateDnsEntryTimeout),
    upgrade_dns_ttl: cdktf.stringToTerraform(struct!.upgradeDnsTtl),
    upgrade_fat_se_lease_time: cdktf.stringToTerraform(struct!.upgradeFatSeLeaseTime),
    upgrade_lease_time: cdktf.stringToTerraform(struct!.upgradeLeaseTime),
    upgrade_se_per_vs_scale_ops_txn_time: cdktf.stringToTerraform(struct!.upgradeSePerVsScaleOpsTxnTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vnic_op_fail_time: cdktf.stringToTerraform(struct!.vnicOpFailTime),
    vs_awaiting_se_timeout: cdktf.stringToTerraform(struct!.vsAwaitingSeTimeout),
    vs_key_rotate_period: cdktf.stringToTerraform(struct!.vsKeyRotatePeriod),
    vs_scaleout_ready_check_interval: cdktf.stringToTerraform(struct!.vsScaleoutReadyCheckInterval),
    vs_se_attach_ip_fail: cdktf.stringToTerraform(struct!.vsSeAttachIpFail),
    vs_se_bootup_fail: cdktf.stringToTerraform(struct!.vsSeBootupFail),
    vs_se_bootup_fail_patch: cdktf.stringToTerraform(struct!.vsSeBootupFailPatch),
    vs_se_create_fail: cdktf.stringToTerraform(struct!.vsSeCreateFail),
    vs_se_ping_fail: cdktf.stringToTerraform(struct!.vsSePingFail),
    vs_se_vnic_fail: cdktf.stringToTerraform(struct!.vsSeVnicFail),
    vs_se_vnic_ip_fail: cdktf.stringToTerraform(struct!.vsSeVnicIpFail),
    vsphere_ha_detection_timeout: cdktf.stringToTerraform(struct!.vsphereHaDetectionTimeout),
    vsphere_ha_recovery_timeout: cdktf.stringToTerraform(struct!.vsphereHaRecoveryTimeout),
    vsphere_ha_timer_interval: cdktf.stringToTerraform(struct!.vsphereHaTimerInterval),
    warmstart_se_reconnect_wait_time: cdktf.stringToTerraform(struct!.warmstartSeReconnectWaitTime),
    warmstart_vs_resync_wait_time: cdktf.stringToTerraform(struct!.warmstartVsResyncWaitTime),
    configpb_attributes: cdktf.listMapper(cloudpropertiesInfoControllerPropsConfigpbAttributesToTerraform, true)(struct!.configpbAttributes),
    false_positive_learning_config: cdktf.listMapper(cloudpropertiesInfoControllerPropsFalsePositiveLearningConfigToTerraform, true)(struct!.falsePositiveLearningConfig),
    user_agent_cache_config: cdktf.listMapper(cloudpropertiesInfoControllerPropsUserAgentCacheConfigToTerraform, true)(struct!.userAgentCacheConfig),
  }
}


export function cloudpropertiesInfoControllerPropsToHclTerraform(struct?: CloudpropertiesInfoControllerProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_manager_use_evms: {
      value: cdktf.stringToHclTerraform(struct!.alertManagerUseEvms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_admin_network_updates: {
      value: cdktf.stringToHclTerraform(struct!.allowAdminNetworkUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_ip_forwarding: {
      value: cdktf.stringToHclTerraform(struct!.allowIpForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_unauthenticated_apis: {
      value: cdktf.stringToHclTerraform(struct!.allowUnauthenticatedApis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_unauthenticated_nodes: {
      value: cdktf.stringToHclTerraform(struct!.allowUnauthenticatedNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.apiIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_perf_logging_threshold: {
      value: cdktf.stringToHclTerraform(struct!.apiPerfLoggingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appviewx_compat_mode: {
      value: cdktf.stringToHclTerraform(struct!.appviewxCompatMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    async_patch_merge_period: {
      value: cdktf.stringToHclTerraform(struct!.asyncPatchMergePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    async_patch_request_cleanup_duration: {
      value: cdktf.stringToHclTerraform(struct!.asyncPatchRequestCleanupDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attach_ip_retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.attachIpRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attach_ip_retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.attachIpRetryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bm_use_ansible: {
      value: cdktf.stringToHclTerraform(struct!.bmUseAnsible),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_vsvip_fqdn_syntax: {
      value: cdktf.stringToHclTerraform(struct!.checkVsvipFqdnSyntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanup_expired_authtoken_timeout_period: {
      value: cdktf.stringToHclTerraform(struct!.cleanupExpiredAuthtokenTimeoutPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanup_sessions_timeout_period: {
      value: cdktf.stringToHclTerraform(struct!.cleanupSessionsTimeoutPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_discovery_interval: {
      value: cdktf.stringToHclTerraform(struct!.cloudDiscoveryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_reconcile: {
      value: cdktf.stringToHclTerraform(struct!.cloudReconcile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_reconcile_interval: {
      value: cdktf.stringToHclTerraform(struct!.cloudReconcileInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ip_gratuitous_arp_period: {
      value: cdktf.stringToHclTerraform(struct!.clusterIpGratuitousArpPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consistency_check_timeout_period: {
      value: cdktf.stringToHclTerraform(struct!.consistencyCheckTimeoutPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_resource_info_collection_period: {
      value: cdktf.stringToHclTerraform(struct!.controllerResourceInfoCollectionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crashed_se_reboot: {
      value: cdktf.stringToHclTerraform(struct!.crashedSeReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_se_detection_timer: {
      value: cdktf.stringToHclTerraform(struct!.deadSeDetectionTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_minimum_api_timeout: {
      value: cdktf.stringToHclTerraform(struct!.defaultMinimumApiTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    del_offline_se_after_reboot_delay: {
      value: cdktf.stringToHclTerraform(struct!.delOfflineSeAfterRebootDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detach_ip_retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.detachIpRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detach_ip_retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.detachIpRetryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detach_ip_timeout: {
      value: cdktf.stringToHclTerraform(struct!.detachIpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_refresh_period: {
      value: cdktf.stringToHclTerraform(struct!.dnsRefreshPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dummy: {
      value: cdktf.stringToHclTerraform(struct!.dummy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edit_system_limits: {
      value: cdktf.stringToHclTerraform(struct!.editSystemLimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_api_sharding: {
      value: cdktf.stringToHclTerraform(struct!.enableApiSharding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_memory_balancer: {
      value: cdktf.stringToHclTerraform(struct!.enableMemoryBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_per_process_stop: {
      value: cdktf.stringToHclTerraform(struct!.enablePerProcessStop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_resmgr_log_cache_print: {
      value: cdktf.stringToHclTerraform(struct!.enableResmgrLogCachePrint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_manager_max_goroutines: {
      value: cdktf.stringToHclTerraform(struct!.eventManagerMaxGoroutines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_manager_max_subscribers: {
      value: cdktf.stringToHclTerraform(struct!.eventManagerMaxSubscribers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_manager_processing_time_threshold: {
      value: cdktf.stringToHclTerraform(struct!.eventManagerProcessingTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fatal_error_lease_time: {
      value: cdktf.stringToHclTerraform(struct!.fatalErrorLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    federated_datastore_cleanup_duration: {
      value: cdktf.stringToHclTerraform(struct!.federatedDatastoreCleanupDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_object_cleanup_period: {
      value: cdktf.stringToHclTerraform(struct!.fileObjectCleanupPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fileobject_max_file_versions: {
      value: cdktf.stringToHclTerraform(struct!.fileobjectMaxFileVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gslb_purge_batch_size: {
      value: cdktf.stringToHclTerraform(struct!.gslbPurgeBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gslb_purge_sleep_time_ms: {
      value: cdktf.stringToHclTerraform(struct!.gslbPurgeSleepTimeMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_vrf_in_networksubnetlist: {
      value: cdktf.stringToHclTerraform(struct!.ignoreVrfInNetworksubnetlist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_dead_se_in_grp: {
      value: cdktf.stringToHclTerraform(struct!.maxDeadSeInGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_pcap_per_tenant: {
      value: cdktf.stringToHclTerraform(struct!.maxPcapPerTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_se_spawn_interval_delay: {
      value: cdktf.stringToHclTerraform(struct!.maxSeSpawnIntervalDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_seq_attach_ip_failures: {
      value: cdktf.stringToHclTerraform(struct!.maxSeqAttachIpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_seq_vnic_failures: {
      value: cdktf.stringToHclTerraform(struct!.maxSeqVnicFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_threads_cc_vip_bg_worker: {
      value: cdktf.stringToHclTerraform(struct!.maxThreadsCcVipBgWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_scoped_shared_admin_networks: {
      value: cdktf.stringToHclTerraform(struct!.permissionScopedSharedAdminNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistence_key_rotate_period: {
      value: cdktf.stringToHclTerraform(struct!.persistenceKeyRotatePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portal_request_burst_limit: {
      value: cdktf.stringToHclTerraform(struct!.portalRequestBurstLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portal_request_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.portalRequestRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portal_token: {
      value: cdktf.stringToHclTerraform(struct!.portalToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres_vacuum_period: {
      value: cdktf.stringToHclTerraform(struct!.postgresVacuumPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_locked_useraccounts_timeout_period: {
      value: cdktf.stringToHclTerraform(struct!.processLockedUseraccountsTimeoutPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_pki_profile_timeout_period: {
      value: cdktf.stringToHclTerraform(struct!.processPkiProfileTimeoutPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_host_fail: {
      value: cdktf.stringToHclTerraform(struct!.queryHostFail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resmgr_log_caching_period: {
      value: cdktf.stringToHclTerraform(struct!.resmgrLogCachingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_cloud_read_access: {
      value: cdktf.stringToHclTerraform(struct!.restrictCloudReadAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    safenet_hsm_version: {
      value: cdktf.stringToHclTerraform(struct!.safenetHsmVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_create_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seCreateTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_failover_attempt_interval: {
      value: cdktf.stringToHclTerraform(struct!.seFailoverAttemptInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_from_marketplace: {
      value: cdktf.stringToHclTerraform(struct!.seFromMarketplace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_offline_del: {
      value: cdktf.stringToHclTerraform(struct!.seOfflineDel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_spawn_retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.seSpawnRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_upgrade_flow_cleanup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seUpgradeFlowCleanupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_vnic_cooldown: {
      value: cdktf.stringToHclTerraform(struct!.seVnicCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_vnic_gc_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.seVnicGcWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_channel_cleanup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.secureChannelCleanupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_channel_controller_token_timeout: {
      value: cdktf.stringToHclTerraform(struct!.secureChannelControllerTokenTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_channel_se_token_timeout: {
      value: cdktf.stringToHclTerraform(struct!.secureChannelSeTokenTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seupgrade_copy_buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.seupgradeCopyBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seupgrade_copy_pool_size: {
      value: cdktf.stringToHclTerraform(struct!.seupgradeCopyPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seupgrade_fabric_pool_size: {
      value: cdktf.stringToHclTerraform(struct!.seupgradeFabricPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seupgrade_segroup_min_dead_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seupgradeSegroupMinDeadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_ssl_certificates: {
      value: cdktf.stringToHclTerraform(struct!.sharedSslCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skopeo_retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.skopeoRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skopeo_retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.skopeoRetryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_min_mem_per_se_limit: {
      value: cdktf.stringToHclTerraform(struct!.softMinMemPerSeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate_expiry_warning_days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sslCertificateExpiryWarningDays),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    system_report_cleanup_interval: {
      value: cdktf.stringToHclTerraform(struct!.systemReportCleanupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_report_limit: {
      value: cdktf.stringToHclTerraform(struct!.systemReportLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unresponsive_se_reboot: {
      value: cdktf.stringToHclTerraform(struct!.unresponsiveSeReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_dns_entry_retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.updateDnsEntryRetryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_dns_entry_timeout: {
      value: cdktf.stringToHclTerraform(struct!.updateDnsEntryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_dns_ttl: {
      value: cdktf.stringToHclTerraform(struct!.upgradeDnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_fat_se_lease_time: {
      value: cdktf.stringToHclTerraform(struct!.upgradeFatSeLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_lease_time: {
      value: cdktf.stringToHclTerraform(struct!.upgradeLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_se_per_vs_scale_ops_txn_time: {
      value: cdktf.stringToHclTerraform(struct!.upgradeSePerVsScaleOpsTxnTime),
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
    vnic_op_fail_time: {
      value: cdktf.stringToHclTerraform(struct!.vnicOpFailTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_awaiting_se_timeout: {
      value: cdktf.stringToHclTerraform(struct!.vsAwaitingSeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_key_rotate_period: {
      value: cdktf.stringToHclTerraform(struct!.vsKeyRotatePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_scaleout_ready_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.vsScaleoutReadyCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_se_attach_ip_fail: {
      value: cdktf.stringToHclTerraform(struct!.vsSeAttachIpFail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_se_bootup_fail: {
      value: cdktf.stringToHclTerraform(struct!.vsSeBootupFail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_se_bootup_fail_patch: {
      value: cdktf.stringToHclTerraform(struct!.vsSeBootupFailPatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_se_create_fail: {
      value: cdktf.stringToHclTerraform(struct!.vsSeCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_se_ping_fail: {
      value: cdktf.stringToHclTerraform(struct!.vsSePingFail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_se_vnic_fail: {
      value: cdktf.stringToHclTerraform(struct!.vsSeVnicFail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_se_vnic_ip_fail: {
      value: cdktf.stringToHclTerraform(struct!.vsSeVnicIpFail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_ha_detection_timeout: {
      value: cdktf.stringToHclTerraform(struct!.vsphereHaDetectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_ha_recovery_timeout: {
      value: cdktf.stringToHclTerraform(struct!.vsphereHaRecoveryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_ha_timer_interval: {
      value: cdktf.stringToHclTerraform(struct!.vsphereHaTimerInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warmstart_se_reconnect_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.warmstartSeReconnectWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warmstart_vs_resync_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.warmstartVsResyncWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configpb_attributes: {
      value: cdktf.listMapperHcl(cloudpropertiesInfoControllerPropsConfigpbAttributesToHclTerraform, true)(struct!.configpbAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "CloudpropertiesInfoControllerPropsConfigpbAttributesList",
    },
    false_positive_learning_config: {
      value: cdktf.listMapperHcl(cloudpropertiesInfoControllerPropsFalsePositiveLearningConfigToHclTerraform, true)(struct!.falsePositiveLearningConfig),
      isBlock: true,
      type: "set",
      storageClassType: "CloudpropertiesInfoControllerPropsFalsePositiveLearningConfigList",
    },
    user_agent_cache_config: {
      value: cdktf.listMapperHcl(cloudpropertiesInfoControllerPropsUserAgentCacheConfigToHclTerraform, true)(struct!.userAgentCacheConfig),
      isBlock: true,
      type: "set",
      storageClassType: "CloudpropertiesInfoControllerPropsUserAgentCacheConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesInfoControllerPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesInfoControllerProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertManagerUseEvms !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertManagerUseEvms = this._alertManagerUseEvms;
    }
    if (this._allowAdminNetworkUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAdminNetworkUpdates = this._allowAdminNetworkUpdates;
    }
    if (this._allowIpForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIpForwarding = this._allowIpForwarding;
    }
    if (this._allowUnauthenticatedApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnauthenticatedApis = this._allowUnauthenticatedApis;
    }
    if (this._allowUnauthenticatedNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnauthenticatedNodes = this._allowUnauthenticatedNodes;
    }
    if (this._apiIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiIdleTimeout = this._apiIdleTimeout;
    }
    if (this._apiPerfLoggingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPerfLoggingThreshold = this._apiPerfLoggingThreshold;
    }
    if (this._appviewxCompatMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.appviewxCompatMode = this._appviewxCompatMode;
    }
    if (this._asyncPatchMergePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncPatchMergePeriod = this._asyncPatchMergePeriod;
    }
    if (this._asyncPatchRequestCleanupDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncPatchRequestCleanupDuration = this._asyncPatchRequestCleanupDuration;
    }
    if (this._attachIpRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachIpRetryInterval = this._attachIpRetryInterval;
    }
    if (this._attachIpRetryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachIpRetryLimit = this._attachIpRetryLimit;
    }
    if (this._bmUseAnsible !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmUseAnsible = this._bmUseAnsible;
    }
    if (this._checkVsvipFqdnSyntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkVsvipFqdnSyntax = this._checkVsvipFqdnSyntax;
    }
    if (this._cleanupExpiredAuthtokenTimeoutPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupExpiredAuthtokenTimeoutPeriod = this._cleanupExpiredAuthtokenTimeoutPeriod;
    }
    if (this._cleanupSessionsTimeoutPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupSessionsTimeoutPeriod = this._cleanupSessionsTimeoutPeriod;
    }
    if (this._cloudDiscoveryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudDiscoveryInterval = this._cloudDiscoveryInterval;
    }
    if (this._cloudReconcile !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudReconcile = this._cloudReconcile;
    }
    if (this._cloudReconcileInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudReconcileInterval = this._cloudReconcileInterval;
    }
    if (this._clusterIpGratuitousArpPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIpGratuitousArpPeriod = this._clusterIpGratuitousArpPeriod;
    }
    if (this._consistencyCheckTimeoutPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistencyCheckTimeoutPeriod = this._consistencyCheckTimeoutPeriod;
    }
    if (this._controllerResourceInfoCollectionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerResourceInfoCollectionPeriod = this._controllerResourceInfoCollectionPeriod;
    }
    if (this._crashedSeReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.crashedSeReboot = this._crashedSeReboot;
    }
    if (this._deadSeDetectionTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadSeDetectionTimer = this._deadSeDetectionTimer;
    }
    if (this._defaultMinimumApiTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMinimumApiTimeout = this._defaultMinimumApiTimeout;
    }
    if (this._delOfflineSeAfterRebootDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delOfflineSeAfterRebootDelay = this._delOfflineSeAfterRebootDelay;
    }
    if (this._detachIpRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.detachIpRetryInterval = this._detachIpRetryInterval;
    }
    if (this._detachIpRetryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.detachIpRetryLimit = this._detachIpRetryLimit;
    }
    if (this._detachIpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.detachIpTimeout = this._detachIpTimeout;
    }
    if (this._dnsRefreshPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRefreshPeriod = this._dnsRefreshPeriod;
    }
    if (this._dummy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummy = this._dummy;
    }
    if (this._editSystemLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.editSystemLimits = this._editSystemLimits;
    }
    if (this._enableApiSharding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableApiSharding = this._enableApiSharding;
    }
    if (this._enableMemoryBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMemoryBalancer = this._enableMemoryBalancer;
    }
    if (this._enablePerProcessStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePerProcessStop = this._enablePerProcessStop;
    }
    if (this._enableResmgrLogCachePrint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResmgrLogCachePrint = this._enableResmgrLogCachePrint;
    }
    if (this._eventManagerMaxGoroutines !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventManagerMaxGoroutines = this._eventManagerMaxGoroutines;
    }
    if (this._eventManagerMaxSubscribers !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventManagerMaxSubscribers = this._eventManagerMaxSubscribers;
    }
    if (this._eventManagerProcessingTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventManagerProcessingTimeThreshold = this._eventManagerProcessingTimeThreshold;
    }
    if (this._fatalErrorLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fatalErrorLeaseTime = this._fatalErrorLeaseTime;
    }
    if (this._federatedDatastoreCleanupDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.federatedDatastoreCleanupDuration = this._federatedDatastoreCleanupDuration;
    }
    if (this._fileObjectCleanupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileObjectCleanupPeriod = this._fileObjectCleanupPeriod;
    }
    if (this._fileobjectMaxFileVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileobjectMaxFileVersions = this._fileobjectMaxFileVersions;
    }
    if (this._gslbPurgeBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPurgeBatchSize = this._gslbPurgeBatchSize;
    }
    if (this._gslbPurgeSleepTimeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPurgeSleepTimeMs = this._gslbPurgeSleepTimeMs;
    }
    if (this._ignoreVrfInNetworksubnetlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreVrfInNetworksubnetlist = this._ignoreVrfInNetworksubnetlist;
    }
    if (this._maxDeadSeInGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeadSeInGrp = this._maxDeadSeInGrp;
    }
    if (this._maxPcapPerTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPcapPerTenant = this._maxPcapPerTenant;
    }
    if (this._maxSeSpawnIntervalDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSeSpawnIntervalDelay = this._maxSeSpawnIntervalDelay;
    }
    if (this._maxSeqAttachIpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSeqAttachIpFailures = this._maxSeqAttachIpFailures;
    }
    if (this._maxSeqVnicFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSeqVnicFailures = this._maxSeqVnicFailures;
    }
    if (this._maxThreadsCcVipBgWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThreadsCcVipBgWorker = this._maxThreadsCcVipBgWorker;
    }
    if (this._permissionScopedSharedAdminNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionScopedSharedAdminNetworks = this._permissionScopedSharedAdminNetworks;
    }
    if (this._persistenceKeyRotatePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistenceKeyRotatePeriod = this._persistenceKeyRotatePeriod;
    }
    if (this._portalRequestBurstLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalRequestBurstLimit = this._portalRequestBurstLimit;
    }
    if (this._portalRequestRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalRequestRateLimit = this._portalRequestRateLimit;
    }
    if (this._portalToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalToken = this._portalToken;
    }
    if (this._postgresVacuumPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresVacuumPeriod = this._postgresVacuumPeriod;
    }
    if (this._processLockedUseraccountsTimeoutPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.processLockedUseraccountsTimeoutPeriod = this._processLockedUseraccountsTimeoutPeriod;
    }
    if (this._processPkiProfileTimeoutPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.processPkiProfileTimeoutPeriod = this._processPkiProfileTimeoutPeriod;
    }
    if (this._queryHostFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryHostFail = this._queryHostFail;
    }
    if (this._resmgrLogCachingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.resmgrLogCachingPeriod = this._resmgrLogCachingPeriod;
    }
    if (this._restrictCloudReadAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCloudReadAccess = this._restrictCloudReadAccess;
    }
    if (this._safenetHsmVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.safenetHsmVersion = this._safenetHsmVersion;
    }
    if (this._seCreateTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seCreateTimeout = this._seCreateTimeout;
    }
    if (this._seFailoverAttemptInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.seFailoverAttemptInterval = this._seFailoverAttemptInterval;
    }
    if (this._seFromMarketplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.seFromMarketplace = this._seFromMarketplace;
    }
    if (this._seOfflineDel !== undefined) {
      hasAnyValues = true;
      internalValueResult.seOfflineDel = this._seOfflineDel;
    }
    if (this._seSpawnRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.seSpawnRetryInterval = this._seSpawnRetryInterval;
    }
    if (this._seUpgradeFlowCleanupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeFlowCleanupTimeout = this._seUpgradeFlowCleanupTimeout;
    }
    if (this._seVnicCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.seVnicCooldown = this._seVnicCooldown;
    }
    if (this._seVnicGcWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.seVnicGcWaitTime = this._seVnicGcWaitTime;
    }
    if (this._secureChannelCleanupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureChannelCleanupTimeout = this._secureChannelCleanupTimeout;
    }
    if (this._secureChannelControllerTokenTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureChannelControllerTokenTimeout = this._secureChannelControllerTokenTimeout;
    }
    if (this._secureChannelSeTokenTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureChannelSeTokenTimeout = this._secureChannelSeTokenTimeout;
    }
    if (this._seupgradeCopyBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seupgradeCopyBufferSize = this._seupgradeCopyBufferSize;
    }
    if (this._seupgradeCopyPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seupgradeCopyPoolSize = this._seupgradeCopyPoolSize;
    }
    if (this._seupgradeFabricPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seupgradeFabricPoolSize = this._seupgradeFabricPoolSize;
    }
    if (this._seupgradeSegroupMinDeadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seupgradeSegroupMinDeadTimeout = this._seupgradeSegroupMinDeadTimeout;
    }
    if (this._sharedSslCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSslCertificates = this._sharedSslCertificates;
    }
    if (this._skopeoRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.skopeoRetryInterval = this._skopeoRetryInterval;
    }
    if (this._skopeoRetryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.skopeoRetryLimit = this._skopeoRetryLimit;
    }
    if (this._softMinMemPerSeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.softMinMemPerSeLimit = this._softMinMemPerSeLimit;
    }
    if (this._sslCertificateExpiryWarningDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificateExpiryWarningDays = this._sslCertificateExpiryWarningDays;
    }
    if (this._systemReportCleanupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReportCleanupInterval = this._systemReportCleanupInterval;
    }
    if (this._systemReportLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReportLimit = this._systemReportLimit;
    }
    if (this._unresponsiveSeReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.unresponsiveSeReboot = this._unresponsiveSeReboot;
    }
    if (this._updateDnsEntryRetryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDnsEntryRetryLimit = this._updateDnsEntryRetryLimit;
    }
    if (this._updateDnsEntryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDnsEntryTimeout = this._updateDnsEntryTimeout;
    }
    if (this._upgradeDnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeDnsTtl = this._upgradeDnsTtl;
    }
    if (this._upgradeFatSeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeFatSeLeaseTime = this._upgradeFatSeLeaseTime;
    }
    if (this._upgradeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeLeaseTime = this._upgradeLeaseTime;
    }
    if (this._upgradeSePerVsScaleOpsTxnTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSePerVsScaleOpsTxnTime = this._upgradeSePerVsScaleOpsTxnTime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vnicOpFailTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicOpFailTime = this._vnicOpFailTime;
    }
    if (this._vsAwaitingSeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsAwaitingSeTimeout = this._vsAwaitingSeTimeout;
    }
    if (this._vsKeyRotatePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsKeyRotatePeriod = this._vsKeyRotatePeriod;
    }
    if (this._vsScaleoutReadyCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsScaleoutReadyCheckInterval = this._vsScaleoutReadyCheckInterval;
    }
    if (this._vsSeAttachIpFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsSeAttachIpFail = this._vsSeAttachIpFail;
    }
    if (this._vsSeBootupFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsSeBootupFail = this._vsSeBootupFail;
    }
    if (this._vsSeBootupFailPatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsSeBootupFailPatch = this._vsSeBootupFailPatch;
    }
    if (this._vsSeCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsSeCreateFail = this._vsSeCreateFail;
    }
    if (this._vsSePingFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsSePingFail = this._vsSePingFail;
    }
    if (this._vsSeVnicFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsSeVnicFail = this._vsSeVnicFail;
    }
    if (this._vsSeVnicIpFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsSeVnicIpFail = this._vsSeVnicIpFail;
    }
    if (this._vsphereHaDetectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereHaDetectionTimeout = this._vsphereHaDetectionTimeout;
    }
    if (this._vsphereHaRecoveryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereHaRecoveryTimeout = this._vsphereHaRecoveryTimeout;
    }
    if (this._vsphereHaTimerInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereHaTimerInterval = this._vsphereHaTimerInterval;
    }
    if (this._warmstartSeReconnectWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmstartSeReconnectWaitTime = this._warmstartSeReconnectWaitTime;
    }
    if (this._warmstartVsResyncWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmstartVsResyncWaitTime = this._warmstartVsResyncWaitTime;
    }
    if (this._configpbAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configpbAttributes = this._configpbAttributes?.internalValue;
    }
    if (this._falsePositiveLearningConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.falsePositiveLearningConfig = this._falsePositiveLearningConfig?.internalValue;
    }
    if (this._userAgentCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentCacheConfig = this._userAgentCacheConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesInfoControllerProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertManagerUseEvms = undefined;
      this._allowAdminNetworkUpdates = undefined;
      this._allowIpForwarding = undefined;
      this._allowUnauthenticatedApis = undefined;
      this._allowUnauthenticatedNodes = undefined;
      this._apiIdleTimeout = undefined;
      this._apiPerfLoggingThreshold = undefined;
      this._appviewxCompatMode = undefined;
      this._asyncPatchMergePeriod = undefined;
      this._asyncPatchRequestCleanupDuration = undefined;
      this._attachIpRetryInterval = undefined;
      this._attachIpRetryLimit = undefined;
      this._bmUseAnsible = undefined;
      this._checkVsvipFqdnSyntax = undefined;
      this._cleanupExpiredAuthtokenTimeoutPeriod = undefined;
      this._cleanupSessionsTimeoutPeriod = undefined;
      this._cloudDiscoveryInterval = undefined;
      this._cloudReconcile = undefined;
      this._cloudReconcileInterval = undefined;
      this._clusterIpGratuitousArpPeriod = undefined;
      this._consistencyCheckTimeoutPeriod = undefined;
      this._controllerResourceInfoCollectionPeriod = undefined;
      this._crashedSeReboot = undefined;
      this._deadSeDetectionTimer = undefined;
      this._defaultMinimumApiTimeout = undefined;
      this._delOfflineSeAfterRebootDelay = undefined;
      this._detachIpRetryInterval = undefined;
      this._detachIpRetryLimit = undefined;
      this._detachIpTimeout = undefined;
      this._dnsRefreshPeriod = undefined;
      this._dummy = undefined;
      this._editSystemLimits = undefined;
      this._enableApiSharding = undefined;
      this._enableMemoryBalancer = undefined;
      this._enablePerProcessStop = undefined;
      this._enableResmgrLogCachePrint = undefined;
      this._eventManagerMaxGoroutines = undefined;
      this._eventManagerMaxSubscribers = undefined;
      this._eventManagerProcessingTimeThreshold = undefined;
      this._fatalErrorLeaseTime = undefined;
      this._federatedDatastoreCleanupDuration = undefined;
      this._fileObjectCleanupPeriod = undefined;
      this._fileobjectMaxFileVersions = undefined;
      this._gslbPurgeBatchSize = undefined;
      this._gslbPurgeSleepTimeMs = undefined;
      this._ignoreVrfInNetworksubnetlist = undefined;
      this._maxDeadSeInGrp = undefined;
      this._maxPcapPerTenant = undefined;
      this._maxSeSpawnIntervalDelay = undefined;
      this._maxSeqAttachIpFailures = undefined;
      this._maxSeqVnicFailures = undefined;
      this._maxThreadsCcVipBgWorker = undefined;
      this._permissionScopedSharedAdminNetworks = undefined;
      this._persistenceKeyRotatePeriod = undefined;
      this._portalRequestBurstLimit = undefined;
      this._portalRequestRateLimit = undefined;
      this._portalToken = undefined;
      this._postgresVacuumPeriod = undefined;
      this._processLockedUseraccountsTimeoutPeriod = undefined;
      this._processPkiProfileTimeoutPeriod = undefined;
      this._queryHostFail = undefined;
      this._resmgrLogCachingPeriod = undefined;
      this._restrictCloudReadAccess = undefined;
      this._safenetHsmVersion = undefined;
      this._seCreateTimeout = undefined;
      this._seFailoverAttemptInterval = undefined;
      this._seFromMarketplace = undefined;
      this._seOfflineDel = undefined;
      this._seSpawnRetryInterval = undefined;
      this._seUpgradeFlowCleanupTimeout = undefined;
      this._seVnicCooldown = undefined;
      this._seVnicGcWaitTime = undefined;
      this._secureChannelCleanupTimeout = undefined;
      this._secureChannelControllerTokenTimeout = undefined;
      this._secureChannelSeTokenTimeout = undefined;
      this._seupgradeCopyBufferSize = undefined;
      this._seupgradeCopyPoolSize = undefined;
      this._seupgradeFabricPoolSize = undefined;
      this._seupgradeSegroupMinDeadTimeout = undefined;
      this._sharedSslCertificates = undefined;
      this._skopeoRetryInterval = undefined;
      this._skopeoRetryLimit = undefined;
      this._softMinMemPerSeLimit = undefined;
      this._sslCertificateExpiryWarningDays = undefined;
      this._systemReportCleanupInterval = undefined;
      this._systemReportLimit = undefined;
      this._unresponsiveSeReboot = undefined;
      this._updateDnsEntryRetryLimit = undefined;
      this._updateDnsEntryTimeout = undefined;
      this._upgradeDnsTtl = undefined;
      this._upgradeFatSeLeaseTime = undefined;
      this._upgradeLeaseTime = undefined;
      this._upgradeSePerVsScaleOpsTxnTime = undefined;
      this._uuid = undefined;
      this._vnicOpFailTime = undefined;
      this._vsAwaitingSeTimeout = undefined;
      this._vsKeyRotatePeriod = undefined;
      this._vsScaleoutReadyCheckInterval = undefined;
      this._vsSeAttachIpFail = undefined;
      this._vsSeBootupFail = undefined;
      this._vsSeBootupFailPatch = undefined;
      this._vsSeCreateFail = undefined;
      this._vsSePingFail = undefined;
      this._vsSeVnicFail = undefined;
      this._vsSeVnicIpFail = undefined;
      this._vsphereHaDetectionTimeout = undefined;
      this._vsphereHaRecoveryTimeout = undefined;
      this._vsphereHaTimerInterval = undefined;
      this._warmstartSeReconnectWaitTime = undefined;
      this._warmstartVsResyncWaitTime = undefined;
      this._configpbAttributes.internalValue = undefined;
      this._falsePositiveLearningConfig.internalValue = undefined;
      this._userAgentCacheConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertManagerUseEvms = value.alertManagerUseEvms;
      this._allowAdminNetworkUpdates = value.allowAdminNetworkUpdates;
      this._allowIpForwarding = value.allowIpForwarding;
      this._allowUnauthenticatedApis = value.allowUnauthenticatedApis;
      this._allowUnauthenticatedNodes = value.allowUnauthenticatedNodes;
      this._apiIdleTimeout = value.apiIdleTimeout;
      this._apiPerfLoggingThreshold = value.apiPerfLoggingThreshold;
      this._appviewxCompatMode = value.appviewxCompatMode;
      this._asyncPatchMergePeriod = value.asyncPatchMergePeriod;
      this._asyncPatchRequestCleanupDuration = value.asyncPatchRequestCleanupDuration;
      this._attachIpRetryInterval = value.attachIpRetryInterval;
      this._attachIpRetryLimit = value.attachIpRetryLimit;
      this._bmUseAnsible = value.bmUseAnsible;
      this._checkVsvipFqdnSyntax = value.checkVsvipFqdnSyntax;
      this._cleanupExpiredAuthtokenTimeoutPeriod = value.cleanupExpiredAuthtokenTimeoutPeriod;
      this._cleanupSessionsTimeoutPeriod = value.cleanupSessionsTimeoutPeriod;
      this._cloudDiscoveryInterval = value.cloudDiscoveryInterval;
      this._cloudReconcile = value.cloudReconcile;
      this._cloudReconcileInterval = value.cloudReconcileInterval;
      this._clusterIpGratuitousArpPeriod = value.clusterIpGratuitousArpPeriod;
      this._consistencyCheckTimeoutPeriod = value.consistencyCheckTimeoutPeriod;
      this._controllerResourceInfoCollectionPeriod = value.controllerResourceInfoCollectionPeriod;
      this._crashedSeReboot = value.crashedSeReboot;
      this._deadSeDetectionTimer = value.deadSeDetectionTimer;
      this._defaultMinimumApiTimeout = value.defaultMinimumApiTimeout;
      this._delOfflineSeAfterRebootDelay = value.delOfflineSeAfterRebootDelay;
      this._detachIpRetryInterval = value.detachIpRetryInterval;
      this._detachIpRetryLimit = value.detachIpRetryLimit;
      this._detachIpTimeout = value.detachIpTimeout;
      this._dnsRefreshPeriod = value.dnsRefreshPeriod;
      this._dummy = value.dummy;
      this._editSystemLimits = value.editSystemLimits;
      this._enableApiSharding = value.enableApiSharding;
      this._enableMemoryBalancer = value.enableMemoryBalancer;
      this._enablePerProcessStop = value.enablePerProcessStop;
      this._enableResmgrLogCachePrint = value.enableResmgrLogCachePrint;
      this._eventManagerMaxGoroutines = value.eventManagerMaxGoroutines;
      this._eventManagerMaxSubscribers = value.eventManagerMaxSubscribers;
      this._eventManagerProcessingTimeThreshold = value.eventManagerProcessingTimeThreshold;
      this._fatalErrorLeaseTime = value.fatalErrorLeaseTime;
      this._federatedDatastoreCleanupDuration = value.federatedDatastoreCleanupDuration;
      this._fileObjectCleanupPeriod = value.fileObjectCleanupPeriod;
      this._fileobjectMaxFileVersions = value.fileobjectMaxFileVersions;
      this._gslbPurgeBatchSize = value.gslbPurgeBatchSize;
      this._gslbPurgeSleepTimeMs = value.gslbPurgeSleepTimeMs;
      this._ignoreVrfInNetworksubnetlist = value.ignoreVrfInNetworksubnetlist;
      this._maxDeadSeInGrp = value.maxDeadSeInGrp;
      this._maxPcapPerTenant = value.maxPcapPerTenant;
      this._maxSeSpawnIntervalDelay = value.maxSeSpawnIntervalDelay;
      this._maxSeqAttachIpFailures = value.maxSeqAttachIpFailures;
      this._maxSeqVnicFailures = value.maxSeqVnicFailures;
      this._maxThreadsCcVipBgWorker = value.maxThreadsCcVipBgWorker;
      this._permissionScopedSharedAdminNetworks = value.permissionScopedSharedAdminNetworks;
      this._persistenceKeyRotatePeriod = value.persistenceKeyRotatePeriod;
      this._portalRequestBurstLimit = value.portalRequestBurstLimit;
      this._portalRequestRateLimit = value.portalRequestRateLimit;
      this._portalToken = value.portalToken;
      this._postgresVacuumPeriod = value.postgresVacuumPeriod;
      this._processLockedUseraccountsTimeoutPeriod = value.processLockedUseraccountsTimeoutPeriod;
      this._processPkiProfileTimeoutPeriod = value.processPkiProfileTimeoutPeriod;
      this._queryHostFail = value.queryHostFail;
      this._resmgrLogCachingPeriod = value.resmgrLogCachingPeriod;
      this._restrictCloudReadAccess = value.restrictCloudReadAccess;
      this._safenetHsmVersion = value.safenetHsmVersion;
      this._seCreateTimeout = value.seCreateTimeout;
      this._seFailoverAttemptInterval = value.seFailoverAttemptInterval;
      this._seFromMarketplace = value.seFromMarketplace;
      this._seOfflineDel = value.seOfflineDel;
      this._seSpawnRetryInterval = value.seSpawnRetryInterval;
      this._seUpgradeFlowCleanupTimeout = value.seUpgradeFlowCleanupTimeout;
      this._seVnicCooldown = value.seVnicCooldown;
      this._seVnicGcWaitTime = value.seVnicGcWaitTime;
      this._secureChannelCleanupTimeout = value.secureChannelCleanupTimeout;
      this._secureChannelControllerTokenTimeout = value.secureChannelControllerTokenTimeout;
      this._secureChannelSeTokenTimeout = value.secureChannelSeTokenTimeout;
      this._seupgradeCopyBufferSize = value.seupgradeCopyBufferSize;
      this._seupgradeCopyPoolSize = value.seupgradeCopyPoolSize;
      this._seupgradeFabricPoolSize = value.seupgradeFabricPoolSize;
      this._seupgradeSegroupMinDeadTimeout = value.seupgradeSegroupMinDeadTimeout;
      this._sharedSslCertificates = value.sharedSslCertificates;
      this._skopeoRetryInterval = value.skopeoRetryInterval;
      this._skopeoRetryLimit = value.skopeoRetryLimit;
      this._softMinMemPerSeLimit = value.softMinMemPerSeLimit;
      this._sslCertificateExpiryWarningDays = value.sslCertificateExpiryWarningDays;
      this._systemReportCleanupInterval = value.systemReportCleanupInterval;
      this._systemReportLimit = value.systemReportLimit;
      this._unresponsiveSeReboot = value.unresponsiveSeReboot;
      this._updateDnsEntryRetryLimit = value.updateDnsEntryRetryLimit;
      this._updateDnsEntryTimeout = value.updateDnsEntryTimeout;
      this._upgradeDnsTtl = value.upgradeDnsTtl;
      this._upgradeFatSeLeaseTime = value.upgradeFatSeLeaseTime;
      this._upgradeLeaseTime = value.upgradeLeaseTime;
      this._upgradeSePerVsScaleOpsTxnTime = value.upgradeSePerVsScaleOpsTxnTime;
      this._uuid = value.uuid;
      this._vnicOpFailTime = value.vnicOpFailTime;
      this._vsAwaitingSeTimeout = value.vsAwaitingSeTimeout;
      this._vsKeyRotatePeriod = value.vsKeyRotatePeriod;
      this._vsScaleoutReadyCheckInterval = value.vsScaleoutReadyCheckInterval;
      this._vsSeAttachIpFail = value.vsSeAttachIpFail;
      this._vsSeBootupFail = value.vsSeBootupFail;
      this._vsSeBootupFailPatch = value.vsSeBootupFailPatch;
      this._vsSeCreateFail = value.vsSeCreateFail;
      this._vsSePingFail = value.vsSePingFail;
      this._vsSeVnicFail = value.vsSeVnicFail;
      this._vsSeVnicIpFail = value.vsSeVnicIpFail;
      this._vsphereHaDetectionTimeout = value.vsphereHaDetectionTimeout;
      this._vsphereHaRecoveryTimeout = value.vsphereHaRecoveryTimeout;
      this._vsphereHaTimerInterval = value.vsphereHaTimerInterval;
      this._warmstartSeReconnectWaitTime = value.warmstartSeReconnectWaitTime;
      this._warmstartVsResyncWaitTime = value.warmstartVsResyncWaitTime;
      this._configpbAttributes.internalValue = value.configpbAttributes;
      this._falsePositiveLearningConfig.internalValue = value.falsePositiveLearningConfig;
      this._userAgentCacheConfig.internalValue = value.userAgentCacheConfig;
    }
  }

  // alert_manager_use_evms - computed: false, optional: true, required: false
  private _alertManagerUseEvms?: string; 
  public get alertManagerUseEvms() {
    return this.getStringAttribute('alert_manager_use_evms');
  }
  public set alertManagerUseEvms(value: string) {
    this._alertManagerUseEvms = value;
  }
  public resetAlertManagerUseEvms() {
    this._alertManagerUseEvms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertManagerUseEvmsInput() {
    return this._alertManagerUseEvms;
  }

  // allow_admin_network_updates - computed: false, optional: true, required: false
  private _allowAdminNetworkUpdates?: string; 
  public get allowAdminNetworkUpdates() {
    return this.getStringAttribute('allow_admin_network_updates');
  }
  public set allowAdminNetworkUpdates(value: string) {
    this._allowAdminNetworkUpdates = value;
  }
  public resetAllowAdminNetworkUpdates() {
    this._allowAdminNetworkUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdminNetworkUpdatesInput() {
    return this._allowAdminNetworkUpdates;
  }

  // allow_ip_forwarding - computed: false, optional: true, required: false
  private _allowIpForwarding?: string; 
  public get allowIpForwarding() {
    return this.getStringAttribute('allow_ip_forwarding');
  }
  public set allowIpForwarding(value: string) {
    this._allowIpForwarding = value;
  }
  public resetAllowIpForwarding() {
    this._allowIpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpForwardingInput() {
    return this._allowIpForwarding;
  }

  // allow_unauthenticated_apis - computed: false, optional: true, required: false
  private _allowUnauthenticatedApis?: string; 
  public get allowUnauthenticatedApis() {
    return this.getStringAttribute('allow_unauthenticated_apis');
  }
  public set allowUnauthenticatedApis(value: string) {
    this._allowUnauthenticatedApis = value;
  }
  public resetAllowUnauthenticatedApis() {
    this._allowUnauthenticatedApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnauthenticatedApisInput() {
    return this._allowUnauthenticatedApis;
  }

  // allow_unauthenticated_nodes - computed: false, optional: true, required: false
  private _allowUnauthenticatedNodes?: string; 
  public get allowUnauthenticatedNodes() {
    return this.getStringAttribute('allow_unauthenticated_nodes');
  }
  public set allowUnauthenticatedNodes(value: string) {
    this._allowUnauthenticatedNodes = value;
  }
  public resetAllowUnauthenticatedNodes() {
    this._allowUnauthenticatedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnauthenticatedNodesInput() {
    return this._allowUnauthenticatedNodes;
  }

  // api_idle_timeout - computed: false, optional: true, required: false
  private _apiIdleTimeout?: string; 
  public get apiIdleTimeout() {
    return this.getStringAttribute('api_idle_timeout');
  }
  public set apiIdleTimeout(value: string) {
    this._apiIdleTimeout = value;
  }
  public resetApiIdleTimeout() {
    this._apiIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdleTimeoutInput() {
    return this._apiIdleTimeout;
  }

  // api_perf_logging_threshold - computed: false, optional: true, required: false
  private _apiPerfLoggingThreshold?: string; 
  public get apiPerfLoggingThreshold() {
    return this.getStringAttribute('api_perf_logging_threshold');
  }
  public set apiPerfLoggingThreshold(value: string) {
    this._apiPerfLoggingThreshold = value;
  }
  public resetApiPerfLoggingThreshold() {
    this._apiPerfLoggingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPerfLoggingThresholdInput() {
    return this._apiPerfLoggingThreshold;
  }

  // appviewx_compat_mode - computed: false, optional: true, required: false
  private _appviewxCompatMode?: string; 
  public get appviewxCompatMode() {
    return this.getStringAttribute('appviewx_compat_mode');
  }
  public set appviewxCompatMode(value: string) {
    this._appviewxCompatMode = value;
  }
  public resetAppviewxCompatMode() {
    this._appviewxCompatMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appviewxCompatModeInput() {
    return this._appviewxCompatMode;
  }

  // async_patch_merge_period - computed: false, optional: true, required: false
  private _asyncPatchMergePeriod?: string; 
  public get asyncPatchMergePeriod() {
    return this.getStringAttribute('async_patch_merge_period');
  }
  public set asyncPatchMergePeriod(value: string) {
    this._asyncPatchMergePeriod = value;
  }
  public resetAsyncPatchMergePeriod() {
    this._asyncPatchMergePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncPatchMergePeriodInput() {
    return this._asyncPatchMergePeriod;
  }

  // async_patch_request_cleanup_duration - computed: false, optional: true, required: false
  private _asyncPatchRequestCleanupDuration?: string; 
  public get asyncPatchRequestCleanupDuration() {
    return this.getStringAttribute('async_patch_request_cleanup_duration');
  }
  public set asyncPatchRequestCleanupDuration(value: string) {
    this._asyncPatchRequestCleanupDuration = value;
  }
  public resetAsyncPatchRequestCleanupDuration() {
    this._asyncPatchRequestCleanupDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncPatchRequestCleanupDurationInput() {
    return this._asyncPatchRequestCleanupDuration;
  }

  // attach_ip_retry_interval - computed: false, optional: true, required: false
  private _attachIpRetryInterval?: string; 
  public get attachIpRetryInterval() {
    return this.getStringAttribute('attach_ip_retry_interval');
  }
  public set attachIpRetryInterval(value: string) {
    this._attachIpRetryInterval = value;
  }
  public resetAttachIpRetryInterval() {
    this._attachIpRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachIpRetryIntervalInput() {
    return this._attachIpRetryInterval;
  }

  // attach_ip_retry_limit - computed: false, optional: true, required: false
  private _attachIpRetryLimit?: string; 
  public get attachIpRetryLimit() {
    return this.getStringAttribute('attach_ip_retry_limit');
  }
  public set attachIpRetryLimit(value: string) {
    this._attachIpRetryLimit = value;
  }
  public resetAttachIpRetryLimit() {
    this._attachIpRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachIpRetryLimitInput() {
    return this._attachIpRetryLimit;
  }

  // bm_use_ansible - computed: false, optional: true, required: false
  private _bmUseAnsible?: string; 
  public get bmUseAnsible() {
    return this.getStringAttribute('bm_use_ansible');
  }
  public set bmUseAnsible(value: string) {
    this._bmUseAnsible = value;
  }
  public resetBmUseAnsible() {
    this._bmUseAnsible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmUseAnsibleInput() {
    return this._bmUseAnsible;
  }

  // check_vsvip_fqdn_syntax - computed: false, optional: true, required: false
  private _checkVsvipFqdnSyntax?: string; 
  public get checkVsvipFqdnSyntax() {
    return this.getStringAttribute('check_vsvip_fqdn_syntax');
  }
  public set checkVsvipFqdnSyntax(value: string) {
    this._checkVsvipFqdnSyntax = value;
  }
  public resetCheckVsvipFqdnSyntax() {
    this._checkVsvipFqdnSyntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkVsvipFqdnSyntaxInput() {
    return this._checkVsvipFqdnSyntax;
  }

  // cleanup_expired_authtoken_timeout_period - computed: false, optional: true, required: false
  private _cleanupExpiredAuthtokenTimeoutPeriod?: string; 
  public get cleanupExpiredAuthtokenTimeoutPeriod() {
    return this.getStringAttribute('cleanup_expired_authtoken_timeout_period');
  }
  public set cleanupExpiredAuthtokenTimeoutPeriod(value: string) {
    this._cleanupExpiredAuthtokenTimeoutPeriod = value;
  }
  public resetCleanupExpiredAuthtokenTimeoutPeriod() {
    this._cleanupExpiredAuthtokenTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupExpiredAuthtokenTimeoutPeriodInput() {
    return this._cleanupExpiredAuthtokenTimeoutPeriod;
  }

  // cleanup_sessions_timeout_period - computed: false, optional: true, required: false
  private _cleanupSessionsTimeoutPeriod?: string; 
  public get cleanupSessionsTimeoutPeriod() {
    return this.getStringAttribute('cleanup_sessions_timeout_period');
  }
  public set cleanupSessionsTimeoutPeriod(value: string) {
    this._cleanupSessionsTimeoutPeriod = value;
  }
  public resetCleanupSessionsTimeoutPeriod() {
    this._cleanupSessionsTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupSessionsTimeoutPeriodInput() {
    return this._cleanupSessionsTimeoutPeriod;
  }

  // cloud_discovery_interval - computed: false, optional: true, required: false
  private _cloudDiscoveryInterval?: string; 
  public get cloudDiscoveryInterval() {
    return this.getStringAttribute('cloud_discovery_interval');
  }
  public set cloudDiscoveryInterval(value: string) {
    this._cloudDiscoveryInterval = value;
  }
  public resetCloudDiscoveryInterval() {
    this._cloudDiscoveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDiscoveryIntervalInput() {
    return this._cloudDiscoveryInterval;
  }

  // cloud_reconcile - computed: false, optional: true, required: false
  private _cloudReconcile?: string; 
  public get cloudReconcile() {
    return this.getStringAttribute('cloud_reconcile');
  }
  public set cloudReconcile(value: string) {
    this._cloudReconcile = value;
  }
  public resetCloudReconcile() {
    this._cloudReconcile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudReconcileInput() {
    return this._cloudReconcile;
  }

  // cloud_reconcile_interval - computed: false, optional: true, required: false
  private _cloudReconcileInterval?: string; 
  public get cloudReconcileInterval() {
    return this.getStringAttribute('cloud_reconcile_interval');
  }
  public set cloudReconcileInterval(value: string) {
    this._cloudReconcileInterval = value;
  }
  public resetCloudReconcileInterval() {
    this._cloudReconcileInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudReconcileIntervalInput() {
    return this._cloudReconcileInterval;
  }

  // cluster_ip_gratuitous_arp_period - computed: false, optional: true, required: false
  private _clusterIpGratuitousArpPeriod?: string; 
  public get clusterIpGratuitousArpPeriod() {
    return this.getStringAttribute('cluster_ip_gratuitous_arp_period');
  }
  public set clusterIpGratuitousArpPeriod(value: string) {
    this._clusterIpGratuitousArpPeriod = value;
  }
  public resetClusterIpGratuitousArpPeriod() {
    this._clusterIpGratuitousArpPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpGratuitousArpPeriodInput() {
    return this._clusterIpGratuitousArpPeriod;
  }

  // consistency_check_timeout_period - computed: false, optional: true, required: false
  private _consistencyCheckTimeoutPeriod?: string; 
  public get consistencyCheckTimeoutPeriod() {
    return this.getStringAttribute('consistency_check_timeout_period');
  }
  public set consistencyCheckTimeoutPeriod(value: string) {
    this._consistencyCheckTimeoutPeriod = value;
  }
  public resetConsistencyCheckTimeoutPeriod() {
    this._consistencyCheckTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyCheckTimeoutPeriodInput() {
    return this._consistencyCheckTimeoutPeriod;
  }

  // controller_resource_info_collection_period - computed: false, optional: true, required: false
  private _controllerResourceInfoCollectionPeriod?: string; 
  public get controllerResourceInfoCollectionPeriod() {
    return this.getStringAttribute('controller_resource_info_collection_period');
  }
  public set controllerResourceInfoCollectionPeriod(value: string) {
    this._controllerResourceInfoCollectionPeriod = value;
  }
  public resetControllerResourceInfoCollectionPeriod() {
    this._controllerResourceInfoCollectionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerResourceInfoCollectionPeriodInput() {
    return this._controllerResourceInfoCollectionPeriod;
  }

  // crashed_se_reboot - computed: false, optional: true, required: false
  private _crashedSeReboot?: string; 
  public get crashedSeReboot() {
    return this.getStringAttribute('crashed_se_reboot');
  }
  public set crashedSeReboot(value: string) {
    this._crashedSeReboot = value;
  }
  public resetCrashedSeReboot() {
    this._crashedSeReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashedSeRebootInput() {
    return this._crashedSeReboot;
  }

  // dead_se_detection_timer - computed: false, optional: true, required: false
  private _deadSeDetectionTimer?: string; 
  public get deadSeDetectionTimer() {
    return this.getStringAttribute('dead_se_detection_timer');
  }
  public set deadSeDetectionTimer(value: string) {
    this._deadSeDetectionTimer = value;
  }
  public resetDeadSeDetectionTimer() {
    this._deadSeDetectionTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadSeDetectionTimerInput() {
    return this._deadSeDetectionTimer;
  }

  // default_minimum_api_timeout - computed: false, optional: true, required: false
  private _defaultMinimumApiTimeout?: string; 
  public get defaultMinimumApiTimeout() {
    return this.getStringAttribute('default_minimum_api_timeout');
  }
  public set defaultMinimumApiTimeout(value: string) {
    this._defaultMinimumApiTimeout = value;
  }
  public resetDefaultMinimumApiTimeout() {
    this._defaultMinimumApiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMinimumApiTimeoutInput() {
    return this._defaultMinimumApiTimeout;
  }

  // del_offline_se_after_reboot_delay - computed: false, optional: true, required: false
  private _delOfflineSeAfterRebootDelay?: string; 
  public get delOfflineSeAfterRebootDelay() {
    return this.getStringAttribute('del_offline_se_after_reboot_delay');
  }
  public set delOfflineSeAfterRebootDelay(value: string) {
    this._delOfflineSeAfterRebootDelay = value;
  }
  public resetDelOfflineSeAfterRebootDelay() {
    this._delOfflineSeAfterRebootDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delOfflineSeAfterRebootDelayInput() {
    return this._delOfflineSeAfterRebootDelay;
  }

  // detach_ip_retry_interval - computed: false, optional: true, required: false
  private _detachIpRetryInterval?: string; 
  public get detachIpRetryInterval() {
    return this.getStringAttribute('detach_ip_retry_interval');
  }
  public set detachIpRetryInterval(value: string) {
    this._detachIpRetryInterval = value;
  }
  public resetDetachIpRetryInterval() {
    this._detachIpRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachIpRetryIntervalInput() {
    return this._detachIpRetryInterval;
  }

  // detach_ip_retry_limit - computed: false, optional: true, required: false
  private _detachIpRetryLimit?: string; 
  public get detachIpRetryLimit() {
    return this.getStringAttribute('detach_ip_retry_limit');
  }
  public set detachIpRetryLimit(value: string) {
    this._detachIpRetryLimit = value;
  }
  public resetDetachIpRetryLimit() {
    this._detachIpRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachIpRetryLimitInput() {
    return this._detachIpRetryLimit;
  }

  // detach_ip_timeout - computed: false, optional: true, required: false
  private _detachIpTimeout?: string; 
  public get detachIpTimeout() {
    return this.getStringAttribute('detach_ip_timeout');
  }
  public set detachIpTimeout(value: string) {
    this._detachIpTimeout = value;
  }
  public resetDetachIpTimeout() {
    this._detachIpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachIpTimeoutInput() {
    return this._detachIpTimeout;
  }

  // dns_refresh_period - computed: false, optional: true, required: false
  private _dnsRefreshPeriod?: string; 
  public get dnsRefreshPeriod() {
    return this.getStringAttribute('dns_refresh_period');
  }
  public set dnsRefreshPeriod(value: string) {
    this._dnsRefreshPeriod = value;
  }
  public resetDnsRefreshPeriod() {
    this._dnsRefreshPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRefreshPeriodInput() {
    return this._dnsRefreshPeriod;
  }

  // dummy - computed: true, optional: true, required: false
  private _dummy?: string; 
  public get dummy() {
    return this.getStringAttribute('dummy');
  }
  public set dummy(value: string) {
    this._dummy = value;
  }
  public resetDummy() {
    this._dummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyInput() {
    return this._dummy;
  }

  // edit_system_limits - computed: false, optional: true, required: false
  private _editSystemLimits?: string; 
  public get editSystemLimits() {
    return this.getStringAttribute('edit_system_limits');
  }
  public set editSystemLimits(value: string) {
    this._editSystemLimits = value;
  }
  public resetEditSystemLimits() {
    this._editSystemLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editSystemLimitsInput() {
    return this._editSystemLimits;
  }

  // enable_api_sharding - computed: false, optional: true, required: false
  private _enableApiSharding?: string; 
  public get enableApiSharding() {
    return this.getStringAttribute('enable_api_sharding');
  }
  public set enableApiSharding(value: string) {
    this._enableApiSharding = value;
  }
  public resetEnableApiSharding() {
    this._enableApiSharding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApiShardingInput() {
    return this._enableApiSharding;
  }

  // enable_memory_balancer - computed: false, optional: true, required: false
  private _enableMemoryBalancer?: string; 
  public get enableMemoryBalancer() {
    return this.getStringAttribute('enable_memory_balancer');
  }
  public set enableMemoryBalancer(value: string) {
    this._enableMemoryBalancer = value;
  }
  public resetEnableMemoryBalancer() {
    this._enableMemoryBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMemoryBalancerInput() {
    return this._enableMemoryBalancer;
  }

  // enable_per_process_stop - computed: false, optional: true, required: false
  private _enablePerProcessStop?: string; 
  public get enablePerProcessStop() {
    return this.getStringAttribute('enable_per_process_stop');
  }
  public set enablePerProcessStop(value: string) {
    this._enablePerProcessStop = value;
  }
  public resetEnablePerProcessStop() {
    this._enablePerProcessStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerProcessStopInput() {
    return this._enablePerProcessStop;
  }

  // enable_resmgr_log_cache_print - computed: false, optional: true, required: false
  private _enableResmgrLogCachePrint?: string; 
  public get enableResmgrLogCachePrint() {
    return this.getStringAttribute('enable_resmgr_log_cache_print');
  }
  public set enableResmgrLogCachePrint(value: string) {
    this._enableResmgrLogCachePrint = value;
  }
  public resetEnableResmgrLogCachePrint() {
    this._enableResmgrLogCachePrint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResmgrLogCachePrintInput() {
    return this._enableResmgrLogCachePrint;
  }

  // event_manager_max_goroutines - computed: false, optional: true, required: false
  private _eventManagerMaxGoroutines?: string; 
  public get eventManagerMaxGoroutines() {
    return this.getStringAttribute('event_manager_max_goroutines');
  }
  public set eventManagerMaxGoroutines(value: string) {
    this._eventManagerMaxGoroutines = value;
  }
  public resetEventManagerMaxGoroutines() {
    this._eventManagerMaxGoroutines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventManagerMaxGoroutinesInput() {
    return this._eventManagerMaxGoroutines;
  }

  // event_manager_max_subscribers - computed: false, optional: true, required: false
  private _eventManagerMaxSubscribers?: string; 
  public get eventManagerMaxSubscribers() {
    return this.getStringAttribute('event_manager_max_subscribers');
  }
  public set eventManagerMaxSubscribers(value: string) {
    this._eventManagerMaxSubscribers = value;
  }
  public resetEventManagerMaxSubscribers() {
    this._eventManagerMaxSubscribers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventManagerMaxSubscribersInput() {
    return this._eventManagerMaxSubscribers;
  }

  // event_manager_processing_time_threshold - computed: false, optional: true, required: false
  private _eventManagerProcessingTimeThreshold?: string; 
  public get eventManagerProcessingTimeThreshold() {
    return this.getStringAttribute('event_manager_processing_time_threshold');
  }
  public set eventManagerProcessingTimeThreshold(value: string) {
    this._eventManagerProcessingTimeThreshold = value;
  }
  public resetEventManagerProcessingTimeThreshold() {
    this._eventManagerProcessingTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventManagerProcessingTimeThresholdInput() {
    return this._eventManagerProcessingTimeThreshold;
  }

  // fatal_error_lease_time - computed: false, optional: true, required: false
  private _fatalErrorLeaseTime?: string; 
  public get fatalErrorLeaseTime() {
    return this.getStringAttribute('fatal_error_lease_time');
  }
  public set fatalErrorLeaseTime(value: string) {
    this._fatalErrorLeaseTime = value;
  }
  public resetFatalErrorLeaseTime() {
    this._fatalErrorLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fatalErrorLeaseTimeInput() {
    return this._fatalErrorLeaseTime;
  }

  // federated_datastore_cleanup_duration - computed: false, optional: true, required: false
  private _federatedDatastoreCleanupDuration?: string; 
  public get federatedDatastoreCleanupDuration() {
    return this.getStringAttribute('federated_datastore_cleanup_duration');
  }
  public set federatedDatastoreCleanupDuration(value: string) {
    this._federatedDatastoreCleanupDuration = value;
  }
  public resetFederatedDatastoreCleanupDuration() {
    this._federatedDatastoreCleanupDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedDatastoreCleanupDurationInput() {
    return this._federatedDatastoreCleanupDuration;
  }

  // file_object_cleanup_period - computed: false, optional: true, required: false
  private _fileObjectCleanupPeriod?: string; 
  public get fileObjectCleanupPeriod() {
    return this.getStringAttribute('file_object_cleanup_period');
  }
  public set fileObjectCleanupPeriod(value: string) {
    this._fileObjectCleanupPeriod = value;
  }
  public resetFileObjectCleanupPeriod() {
    this._fileObjectCleanupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileObjectCleanupPeriodInput() {
    return this._fileObjectCleanupPeriod;
  }

  // fileobject_max_file_versions - computed: false, optional: true, required: false
  private _fileobjectMaxFileVersions?: string; 
  public get fileobjectMaxFileVersions() {
    return this.getStringAttribute('fileobject_max_file_versions');
  }
  public set fileobjectMaxFileVersions(value: string) {
    this._fileobjectMaxFileVersions = value;
  }
  public resetFileobjectMaxFileVersions() {
    this._fileobjectMaxFileVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileobjectMaxFileVersionsInput() {
    return this._fileobjectMaxFileVersions;
  }

  // gslb_purge_batch_size - computed: false, optional: true, required: false
  private _gslbPurgeBatchSize?: string; 
  public get gslbPurgeBatchSize() {
    return this.getStringAttribute('gslb_purge_batch_size');
  }
  public set gslbPurgeBatchSize(value: string) {
    this._gslbPurgeBatchSize = value;
  }
  public resetGslbPurgeBatchSize() {
    this._gslbPurgeBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPurgeBatchSizeInput() {
    return this._gslbPurgeBatchSize;
  }

  // gslb_purge_sleep_time_ms - computed: false, optional: true, required: false
  private _gslbPurgeSleepTimeMs?: string; 
  public get gslbPurgeSleepTimeMs() {
    return this.getStringAttribute('gslb_purge_sleep_time_ms');
  }
  public set gslbPurgeSleepTimeMs(value: string) {
    this._gslbPurgeSleepTimeMs = value;
  }
  public resetGslbPurgeSleepTimeMs() {
    this._gslbPurgeSleepTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPurgeSleepTimeMsInput() {
    return this._gslbPurgeSleepTimeMs;
  }

  // ignore_vrf_in_networksubnetlist - computed: false, optional: true, required: false
  private _ignoreVrfInNetworksubnetlist?: string; 
  public get ignoreVrfInNetworksubnetlist() {
    return this.getStringAttribute('ignore_vrf_in_networksubnetlist');
  }
  public set ignoreVrfInNetworksubnetlist(value: string) {
    this._ignoreVrfInNetworksubnetlist = value;
  }
  public resetIgnoreVrfInNetworksubnetlist() {
    this._ignoreVrfInNetworksubnetlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreVrfInNetworksubnetlistInput() {
    return this._ignoreVrfInNetworksubnetlist;
  }

  // max_dead_se_in_grp - computed: false, optional: true, required: false
  private _maxDeadSeInGrp?: string; 
  public get maxDeadSeInGrp() {
    return this.getStringAttribute('max_dead_se_in_grp');
  }
  public set maxDeadSeInGrp(value: string) {
    this._maxDeadSeInGrp = value;
  }
  public resetMaxDeadSeInGrp() {
    this._maxDeadSeInGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeadSeInGrpInput() {
    return this._maxDeadSeInGrp;
  }

  // max_pcap_per_tenant - computed: false, optional: true, required: false
  private _maxPcapPerTenant?: string; 
  public get maxPcapPerTenant() {
    return this.getStringAttribute('max_pcap_per_tenant');
  }
  public set maxPcapPerTenant(value: string) {
    this._maxPcapPerTenant = value;
  }
  public resetMaxPcapPerTenant() {
    this._maxPcapPerTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPcapPerTenantInput() {
    return this._maxPcapPerTenant;
  }

  // max_se_spawn_interval_delay - computed: false, optional: true, required: false
  private _maxSeSpawnIntervalDelay?: string; 
  public get maxSeSpawnIntervalDelay() {
    return this.getStringAttribute('max_se_spawn_interval_delay');
  }
  public set maxSeSpawnIntervalDelay(value: string) {
    this._maxSeSpawnIntervalDelay = value;
  }
  public resetMaxSeSpawnIntervalDelay() {
    this._maxSeSpawnIntervalDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSeSpawnIntervalDelayInput() {
    return this._maxSeSpawnIntervalDelay;
  }

  // max_seq_attach_ip_failures - computed: false, optional: true, required: false
  private _maxSeqAttachIpFailures?: string; 
  public get maxSeqAttachIpFailures() {
    return this.getStringAttribute('max_seq_attach_ip_failures');
  }
  public set maxSeqAttachIpFailures(value: string) {
    this._maxSeqAttachIpFailures = value;
  }
  public resetMaxSeqAttachIpFailures() {
    this._maxSeqAttachIpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSeqAttachIpFailuresInput() {
    return this._maxSeqAttachIpFailures;
  }

  // max_seq_vnic_failures - computed: false, optional: true, required: false
  private _maxSeqVnicFailures?: string; 
  public get maxSeqVnicFailures() {
    return this.getStringAttribute('max_seq_vnic_failures');
  }
  public set maxSeqVnicFailures(value: string) {
    this._maxSeqVnicFailures = value;
  }
  public resetMaxSeqVnicFailures() {
    this._maxSeqVnicFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSeqVnicFailuresInput() {
    return this._maxSeqVnicFailures;
  }

  // max_threads_cc_vip_bg_worker - computed: false, optional: true, required: false
  private _maxThreadsCcVipBgWorker?: string; 
  public get maxThreadsCcVipBgWorker() {
    return this.getStringAttribute('max_threads_cc_vip_bg_worker');
  }
  public set maxThreadsCcVipBgWorker(value: string) {
    this._maxThreadsCcVipBgWorker = value;
  }
  public resetMaxThreadsCcVipBgWorker() {
    this._maxThreadsCcVipBgWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThreadsCcVipBgWorkerInput() {
    return this._maxThreadsCcVipBgWorker;
  }

  // permission_scoped_shared_admin_networks - computed: false, optional: true, required: false
  private _permissionScopedSharedAdminNetworks?: string; 
  public get permissionScopedSharedAdminNetworks() {
    return this.getStringAttribute('permission_scoped_shared_admin_networks');
  }
  public set permissionScopedSharedAdminNetworks(value: string) {
    this._permissionScopedSharedAdminNetworks = value;
  }
  public resetPermissionScopedSharedAdminNetworks() {
    this._permissionScopedSharedAdminNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionScopedSharedAdminNetworksInput() {
    return this._permissionScopedSharedAdminNetworks;
  }

  // persistence_key_rotate_period - computed: false, optional: true, required: false
  private _persistenceKeyRotatePeriod?: string; 
  public get persistenceKeyRotatePeriod() {
    return this.getStringAttribute('persistence_key_rotate_period');
  }
  public set persistenceKeyRotatePeriod(value: string) {
    this._persistenceKeyRotatePeriod = value;
  }
  public resetPersistenceKeyRotatePeriod() {
    this._persistenceKeyRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceKeyRotatePeriodInput() {
    return this._persistenceKeyRotatePeriod;
  }

  // portal_request_burst_limit - computed: false, optional: true, required: false
  private _portalRequestBurstLimit?: string; 
  public get portalRequestBurstLimit() {
    return this.getStringAttribute('portal_request_burst_limit');
  }
  public set portalRequestBurstLimit(value: string) {
    this._portalRequestBurstLimit = value;
  }
  public resetPortalRequestBurstLimit() {
    this._portalRequestBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalRequestBurstLimitInput() {
    return this._portalRequestBurstLimit;
  }

  // portal_request_rate_limit - computed: false, optional: true, required: false
  private _portalRequestRateLimit?: string; 
  public get portalRequestRateLimit() {
    return this.getStringAttribute('portal_request_rate_limit');
  }
  public set portalRequestRateLimit(value: string) {
    this._portalRequestRateLimit = value;
  }
  public resetPortalRequestRateLimit() {
    this._portalRequestRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalRequestRateLimitInput() {
    return this._portalRequestRateLimit;
  }

  // portal_token - computed: true, optional: true, required: false
  private _portalToken?: string; 
  public get portalToken() {
    return this.getStringAttribute('portal_token');
  }
  public set portalToken(value: string) {
    this._portalToken = value;
  }
  public resetPortalToken() {
    this._portalToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalTokenInput() {
    return this._portalToken;
  }

  // postgres_vacuum_period - computed: false, optional: true, required: false
  private _postgresVacuumPeriod?: string; 
  public get postgresVacuumPeriod() {
    return this.getStringAttribute('postgres_vacuum_period');
  }
  public set postgresVacuumPeriod(value: string) {
    this._postgresVacuumPeriod = value;
  }
  public resetPostgresVacuumPeriod() {
    this._postgresVacuumPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresVacuumPeriodInput() {
    return this._postgresVacuumPeriod;
  }

  // process_locked_useraccounts_timeout_period - computed: false, optional: true, required: false
  private _processLockedUseraccountsTimeoutPeriod?: string; 
  public get processLockedUseraccountsTimeoutPeriod() {
    return this.getStringAttribute('process_locked_useraccounts_timeout_period');
  }
  public set processLockedUseraccountsTimeoutPeriod(value: string) {
    this._processLockedUseraccountsTimeoutPeriod = value;
  }
  public resetProcessLockedUseraccountsTimeoutPeriod() {
    this._processLockedUseraccountsTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processLockedUseraccountsTimeoutPeriodInput() {
    return this._processLockedUseraccountsTimeoutPeriod;
  }

  // process_pki_profile_timeout_period - computed: false, optional: true, required: false
  private _processPkiProfileTimeoutPeriod?: string; 
  public get processPkiProfileTimeoutPeriod() {
    return this.getStringAttribute('process_pki_profile_timeout_period');
  }
  public set processPkiProfileTimeoutPeriod(value: string) {
    this._processPkiProfileTimeoutPeriod = value;
  }
  public resetProcessPkiProfileTimeoutPeriod() {
    this._processPkiProfileTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPkiProfileTimeoutPeriodInput() {
    return this._processPkiProfileTimeoutPeriod;
  }

  // query_host_fail - computed: false, optional: true, required: false
  private _queryHostFail?: string; 
  public get queryHostFail() {
    return this.getStringAttribute('query_host_fail');
  }
  public set queryHostFail(value: string) {
    this._queryHostFail = value;
  }
  public resetQueryHostFail() {
    this._queryHostFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryHostFailInput() {
    return this._queryHostFail;
  }

  // resmgr_log_caching_period - computed: false, optional: true, required: false
  private _resmgrLogCachingPeriod?: string; 
  public get resmgrLogCachingPeriod() {
    return this.getStringAttribute('resmgr_log_caching_period');
  }
  public set resmgrLogCachingPeriod(value: string) {
    this._resmgrLogCachingPeriod = value;
  }
  public resetResmgrLogCachingPeriod() {
    this._resmgrLogCachingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resmgrLogCachingPeriodInput() {
    return this._resmgrLogCachingPeriod;
  }

  // restrict_cloud_read_access - computed: false, optional: true, required: false
  private _restrictCloudReadAccess?: string; 
  public get restrictCloudReadAccess() {
    return this.getStringAttribute('restrict_cloud_read_access');
  }
  public set restrictCloudReadAccess(value: string) {
    this._restrictCloudReadAccess = value;
  }
  public resetRestrictCloudReadAccess() {
    this._restrictCloudReadAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCloudReadAccessInput() {
    return this._restrictCloudReadAccess;
  }

  // safenet_hsm_version - computed: true, optional: true, required: false
  private _safenetHsmVersion?: string; 
  public get safenetHsmVersion() {
    return this.getStringAttribute('safenet_hsm_version');
  }
  public set safenetHsmVersion(value: string) {
    this._safenetHsmVersion = value;
  }
  public resetSafenetHsmVersion() {
    this._safenetHsmVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safenetHsmVersionInput() {
    return this._safenetHsmVersion;
  }

  // se_create_timeout - computed: false, optional: true, required: false
  private _seCreateTimeout?: string; 
  public get seCreateTimeout() {
    return this.getStringAttribute('se_create_timeout');
  }
  public set seCreateTimeout(value: string) {
    this._seCreateTimeout = value;
  }
  public resetSeCreateTimeout() {
    this._seCreateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seCreateTimeoutInput() {
    return this._seCreateTimeout;
  }

  // se_failover_attempt_interval - computed: false, optional: true, required: false
  private _seFailoverAttemptInterval?: string; 
  public get seFailoverAttemptInterval() {
    return this.getStringAttribute('se_failover_attempt_interval');
  }
  public set seFailoverAttemptInterval(value: string) {
    this._seFailoverAttemptInterval = value;
  }
  public resetSeFailoverAttemptInterval() {
    this._seFailoverAttemptInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seFailoverAttemptIntervalInput() {
    return this._seFailoverAttemptInterval;
  }

  // se_from_marketplace - computed: false, optional: true, required: false
  private _seFromMarketplace?: string; 
  public get seFromMarketplace() {
    return this.getStringAttribute('se_from_marketplace');
  }
  public set seFromMarketplace(value: string) {
    this._seFromMarketplace = value;
  }
  public resetSeFromMarketplace() {
    this._seFromMarketplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seFromMarketplaceInput() {
    return this._seFromMarketplace;
  }

  // se_offline_del - computed: false, optional: true, required: false
  private _seOfflineDel?: string; 
  public get seOfflineDel() {
    return this.getStringAttribute('se_offline_del');
  }
  public set seOfflineDel(value: string) {
    this._seOfflineDel = value;
  }
  public resetSeOfflineDel() {
    this._seOfflineDel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seOfflineDelInput() {
    return this._seOfflineDel;
  }

  // se_spawn_retry_interval - computed: false, optional: true, required: false
  private _seSpawnRetryInterval?: string; 
  public get seSpawnRetryInterval() {
    return this.getStringAttribute('se_spawn_retry_interval');
  }
  public set seSpawnRetryInterval(value: string) {
    this._seSpawnRetryInterval = value;
  }
  public resetSeSpawnRetryInterval() {
    this._seSpawnRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seSpawnRetryIntervalInput() {
    return this._seSpawnRetryInterval;
  }

  // se_upgrade_flow_cleanup_timeout - computed: false, optional: true, required: false
  private _seUpgradeFlowCleanupTimeout?: string; 
  public get seUpgradeFlowCleanupTimeout() {
    return this.getStringAttribute('se_upgrade_flow_cleanup_timeout');
  }
  public set seUpgradeFlowCleanupTimeout(value: string) {
    this._seUpgradeFlowCleanupTimeout = value;
  }
  public resetSeUpgradeFlowCleanupTimeout() {
    this._seUpgradeFlowCleanupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeFlowCleanupTimeoutInput() {
    return this._seUpgradeFlowCleanupTimeout;
  }

  // se_vnic_cooldown - computed: false, optional: true, required: false
  private _seVnicCooldown?: string; 
  public get seVnicCooldown() {
    return this.getStringAttribute('se_vnic_cooldown');
  }
  public set seVnicCooldown(value: string) {
    this._seVnicCooldown = value;
  }
  public resetSeVnicCooldown() {
    this._seVnicCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVnicCooldownInput() {
    return this._seVnicCooldown;
  }

  // se_vnic_gc_wait_time - computed: false, optional: true, required: false
  private _seVnicGcWaitTime?: string; 
  public get seVnicGcWaitTime() {
    return this.getStringAttribute('se_vnic_gc_wait_time');
  }
  public set seVnicGcWaitTime(value: string) {
    this._seVnicGcWaitTime = value;
  }
  public resetSeVnicGcWaitTime() {
    this._seVnicGcWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVnicGcWaitTimeInput() {
    return this._seVnicGcWaitTime;
  }

  // secure_channel_cleanup_timeout - computed: false, optional: true, required: false
  private _secureChannelCleanupTimeout?: string; 
  public get secureChannelCleanupTimeout() {
    return this.getStringAttribute('secure_channel_cleanup_timeout');
  }
  public set secureChannelCleanupTimeout(value: string) {
    this._secureChannelCleanupTimeout = value;
  }
  public resetSecureChannelCleanupTimeout() {
    this._secureChannelCleanupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureChannelCleanupTimeoutInput() {
    return this._secureChannelCleanupTimeout;
  }

  // secure_channel_controller_token_timeout - computed: false, optional: true, required: false
  private _secureChannelControllerTokenTimeout?: string; 
  public get secureChannelControllerTokenTimeout() {
    return this.getStringAttribute('secure_channel_controller_token_timeout');
  }
  public set secureChannelControllerTokenTimeout(value: string) {
    this._secureChannelControllerTokenTimeout = value;
  }
  public resetSecureChannelControllerTokenTimeout() {
    this._secureChannelControllerTokenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureChannelControllerTokenTimeoutInput() {
    return this._secureChannelControllerTokenTimeout;
  }

  // secure_channel_se_token_timeout - computed: false, optional: true, required: false
  private _secureChannelSeTokenTimeout?: string; 
  public get secureChannelSeTokenTimeout() {
    return this.getStringAttribute('secure_channel_se_token_timeout');
  }
  public set secureChannelSeTokenTimeout(value: string) {
    this._secureChannelSeTokenTimeout = value;
  }
  public resetSecureChannelSeTokenTimeout() {
    this._secureChannelSeTokenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureChannelSeTokenTimeoutInput() {
    return this._secureChannelSeTokenTimeout;
  }

  // seupgrade_copy_buffer_size - computed: false, optional: true, required: false
  private _seupgradeCopyBufferSize?: string; 
  public get seupgradeCopyBufferSize() {
    return this.getStringAttribute('seupgrade_copy_buffer_size');
  }
  public set seupgradeCopyBufferSize(value: string) {
    this._seupgradeCopyBufferSize = value;
  }
  public resetSeupgradeCopyBufferSize() {
    this._seupgradeCopyBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seupgradeCopyBufferSizeInput() {
    return this._seupgradeCopyBufferSize;
  }

  // seupgrade_copy_pool_size - computed: false, optional: true, required: false
  private _seupgradeCopyPoolSize?: string; 
  public get seupgradeCopyPoolSize() {
    return this.getStringAttribute('seupgrade_copy_pool_size');
  }
  public set seupgradeCopyPoolSize(value: string) {
    this._seupgradeCopyPoolSize = value;
  }
  public resetSeupgradeCopyPoolSize() {
    this._seupgradeCopyPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seupgradeCopyPoolSizeInput() {
    return this._seupgradeCopyPoolSize;
  }

  // seupgrade_fabric_pool_size - computed: false, optional: true, required: false
  private _seupgradeFabricPoolSize?: string; 
  public get seupgradeFabricPoolSize() {
    return this.getStringAttribute('seupgrade_fabric_pool_size');
  }
  public set seupgradeFabricPoolSize(value: string) {
    this._seupgradeFabricPoolSize = value;
  }
  public resetSeupgradeFabricPoolSize() {
    this._seupgradeFabricPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seupgradeFabricPoolSizeInput() {
    return this._seupgradeFabricPoolSize;
  }

  // seupgrade_segroup_min_dead_timeout - computed: false, optional: true, required: false
  private _seupgradeSegroupMinDeadTimeout?: string; 
  public get seupgradeSegroupMinDeadTimeout() {
    return this.getStringAttribute('seupgrade_segroup_min_dead_timeout');
  }
  public set seupgradeSegroupMinDeadTimeout(value: string) {
    this._seupgradeSegroupMinDeadTimeout = value;
  }
  public resetSeupgradeSegroupMinDeadTimeout() {
    this._seupgradeSegroupMinDeadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seupgradeSegroupMinDeadTimeoutInput() {
    return this._seupgradeSegroupMinDeadTimeout;
  }

  // shared_ssl_certificates - computed: false, optional: true, required: false
  private _sharedSslCertificates?: string; 
  public get sharedSslCertificates() {
    return this.getStringAttribute('shared_ssl_certificates');
  }
  public set sharedSslCertificates(value: string) {
    this._sharedSslCertificates = value;
  }
  public resetSharedSslCertificates() {
    this._sharedSslCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSslCertificatesInput() {
    return this._sharedSslCertificates;
  }

  // skopeo_retry_interval - computed: false, optional: true, required: false
  private _skopeoRetryInterval?: string; 
  public get skopeoRetryInterval() {
    return this.getStringAttribute('skopeo_retry_interval');
  }
  public set skopeoRetryInterval(value: string) {
    this._skopeoRetryInterval = value;
  }
  public resetSkopeoRetryInterval() {
    this._skopeoRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skopeoRetryIntervalInput() {
    return this._skopeoRetryInterval;
  }

  // skopeo_retry_limit - computed: false, optional: true, required: false
  private _skopeoRetryLimit?: string; 
  public get skopeoRetryLimit() {
    return this.getStringAttribute('skopeo_retry_limit');
  }
  public set skopeoRetryLimit(value: string) {
    this._skopeoRetryLimit = value;
  }
  public resetSkopeoRetryLimit() {
    this._skopeoRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skopeoRetryLimitInput() {
    return this._skopeoRetryLimit;
  }

  // soft_min_mem_per_se_limit - computed: false, optional: true, required: false
  private _softMinMemPerSeLimit?: string; 
  public get softMinMemPerSeLimit() {
    return this.getStringAttribute('soft_min_mem_per_se_limit');
  }
  public set softMinMemPerSeLimit(value: string) {
    this._softMinMemPerSeLimit = value;
  }
  public resetSoftMinMemPerSeLimit() {
    this._softMinMemPerSeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softMinMemPerSeLimitInput() {
    return this._softMinMemPerSeLimit;
  }

  // ssl_certificate_expiry_warning_days - computed: false, optional: true, required: false
  private _sslCertificateExpiryWarningDays?: number[]; 
  public get sslCertificateExpiryWarningDays() {
    return this.getNumberListAttribute('ssl_certificate_expiry_warning_days');
  }
  public set sslCertificateExpiryWarningDays(value: number[]) {
    this._sslCertificateExpiryWarningDays = value;
  }
  public resetSslCertificateExpiryWarningDays() {
    this._sslCertificateExpiryWarningDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateExpiryWarningDaysInput() {
    return this._sslCertificateExpiryWarningDays;
  }

  // system_report_cleanup_interval - computed: false, optional: true, required: false
  private _systemReportCleanupInterval?: string; 
  public get systemReportCleanupInterval() {
    return this.getStringAttribute('system_report_cleanup_interval');
  }
  public set systemReportCleanupInterval(value: string) {
    this._systemReportCleanupInterval = value;
  }
  public resetSystemReportCleanupInterval() {
    this._systemReportCleanupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReportCleanupIntervalInput() {
    return this._systemReportCleanupInterval;
  }

  // system_report_limit - computed: false, optional: true, required: false
  private _systemReportLimit?: string; 
  public get systemReportLimit() {
    return this.getStringAttribute('system_report_limit');
  }
  public set systemReportLimit(value: string) {
    this._systemReportLimit = value;
  }
  public resetSystemReportLimit() {
    this._systemReportLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReportLimitInput() {
    return this._systemReportLimit;
  }

  // unresponsive_se_reboot - computed: false, optional: true, required: false
  private _unresponsiveSeReboot?: string; 
  public get unresponsiveSeReboot() {
    return this.getStringAttribute('unresponsive_se_reboot');
  }
  public set unresponsiveSeReboot(value: string) {
    this._unresponsiveSeReboot = value;
  }
  public resetUnresponsiveSeReboot() {
    this._unresponsiveSeReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unresponsiveSeRebootInput() {
    return this._unresponsiveSeReboot;
  }

  // update_dns_entry_retry_limit - computed: false, optional: true, required: false
  private _updateDnsEntryRetryLimit?: string; 
  public get updateDnsEntryRetryLimit() {
    return this.getStringAttribute('update_dns_entry_retry_limit');
  }
  public set updateDnsEntryRetryLimit(value: string) {
    this._updateDnsEntryRetryLimit = value;
  }
  public resetUpdateDnsEntryRetryLimit() {
    this._updateDnsEntryRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsEntryRetryLimitInput() {
    return this._updateDnsEntryRetryLimit;
  }

  // update_dns_entry_timeout - computed: false, optional: true, required: false
  private _updateDnsEntryTimeout?: string; 
  public get updateDnsEntryTimeout() {
    return this.getStringAttribute('update_dns_entry_timeout');
  }
  public set updateDnsEntryTimeout(value: string) {
    this._updateDnsEntryTimeout = value;
  }
  public resetUpdateDnsEntryTimeout() {
    this._updateDnsEntryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsEntryTimeoutInput() {
    return this._updateDnsEntryTimeout;
  }

  // upgrade_dns_ttl - computed: false, optional: true, required: false
  private _upgradeDnsTtl?: string; 
  public get upgradeDnsTtl() {
    return this.getStringAttribute('upgrade_dns_ttl');
  }
  public set upgradeDnsTtl(value: string) {
    this._upgradeDnsTtl = value;
  }
  public resetUpgradeDnsTtl() {
    this._upgradeDnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDnsTtlInput() {
    return this._upgradeDnsTtl;
  }

  // upgrade_fat_se_lease_time - computed: false, optional: true, required: false
  private _upgradeFatSeLeaseTime?: string; 
  public get upgradeFatSeLeaseTime() {
    return this.getStringAttribute('upgrade_fat_se_lease_time');
  }
  public set upgradeFatSeLeaseTime(value: string) {
    this._upgradeFatSeLeaseTime = value;
  }
  public resetUpgradeFatSeLeaseTime() {
    this._upgradeFatSeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeFatSeLeaseTimeInput() {
    return this._upgradeFatSeLeaseTime;
  }

  // upgrade_lease_time - computed: false, optional: true, required: false
  private _upgradeLeaseTime?: string; 
  public get upgradeLeaseTime() {
    return this.getStringAttribute('upgrade_lease_time');
  }
  public set upgradeLeaseTime(value: string) {
    this._upgradeLeaseTime = value;
  }
  public resetUpgradeLeaseTime() {
    this._upgradeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeLeaseTimeInput() {
    return this._upgradeLeaseTime;
  }

  // upgrade_se_per_vs_scale_ops_txn_time - computed: false, optional: true, required: false
  private _upgradeSePerVsScaleOpsTxnTime?: string; 
  public get upgradeSePerVsScaleOpsTxnTime() {
    return this.getStringAttribute('upgrade_se_per_vs_scale_ops_txn_time');
  }
  public set upgradeSePerVsScaleOpsTxnTime(value: string) {
    this._upgradeSePerVsScaleOpsTxnTime = value;
  }
  public resetUpgradeSePerVsScaleOpsTxnTime() {
    this._upgradeSePerVsScaleOpsTxnTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSePerVsScaleOpsTxnTimeInput() {
    return this._upgradeSePerVsScaleOpsTxnTime;
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

  // vnic_op_fail_time - computed: false, optional: true, required: false
  private _vnicOpFailTime?: string; 
  public get vnicOpFailTime() {
    return this.getStringAttribute('vnic_op_fail_time');
  }
  public set vnicOpFailTime(value: string) {
    this._vnicOpFailTime = value;
  }
  public resetVnicOpFailTime() {
    this._vnicOpFailTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicOpFailTimeInput() {
    return this._vnicOpFailTime;
  }

  // vs_awaiting_se_timeout - computed: false, optional: true, required: false
  private _vsAwaitingSeTimeout?: string; 
  public get vsAwaitingSeTimeout() {
    return this.getStringAttribute('vs_awaiting_se_timeout');
  }
  public set vsAwaitingSeTimeout(value: string) {
    this._vsAwaitingSeTimeout = value;
  }
  public resetVsAwaitingSeTimeout() {
    this._vsAwaitingSeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsAwaitingSeTimeoutInput() {
    return this._vsAwaitingSeTimeout;
  }

  // vs_key_rotate_period - computed: false, optional: true, required: false
  private _vsKeyRotatePeriod?: string; 
  public get vsKeyRotatePeriod() {
    return this.getStringAttribute('vs_key_rotate_period');
  }
  public set vsKeyRotatePeriod(value: string) {
    this._vsKeyRotatePeriod = value;
  }
  public resetVsKeyRotatePeriod() {
    this._vsKeyRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsKeyRotatePeriodInput() {
    return this._vsKeyRotatePeriod;
  }

  // vs_scaleout_ready_check_interval - computed: false, optional: true, required: false
  private _vsScaleoutReadyCheckInterval?: string; 
  public get vsScaleoutReadyCheckInterval() {
    return this.getStringAttribute('vs_scaleout_ready_check_interval');
  }
  public set vsScaleoutReadyCheckInterval(value: string) {
    this._vsScaleoutReadyCheckInterval = value;
  }
  public resetVsScaleoutReadyCheckInterval() {
    this._vsScaleoutReadyCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsScaleoutReadyCheckIntervalInput() {
    return this._vsScaleoutReadyCheckInterval;
  }

  // vs_se_attach_ip_fail - computed: false, optional: true, required: false
  private _vsSeAttachIpFail?: string; 
  public get vsSeAttachIpFail() {
    return this.getStringAttribute('vs_se_attach_ip_fail');
  }
  public set vsSeAttachIpFail(value: string) {
    this._vsSeAttachIpFail = value;
  }
  public resetVsSeAttachIpFail() {
    this._vsSeAttachIpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeAttachIpFailInput() {
    return this._vsSeAttachIpFail;
  }

  // vs_se_bootup_fail - computed: false, optional: true, required: false
  private _vsSeBootupFail?: string; 
  public get vsSeBootupFail() {
    return this.getStringAttribute('vs_se_bootup_fail');
  }
  public set vsSeBootupFail(value: string) {
    this._vsSeBootupFail = value;
  }
  public resetVsSeBootupFail() {
    this._vsSeBootupFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeBootupFailInput() {
    return this._vsSeBootupFail;
  }

  // vs_se_bootup_fail_patch - computed: false, optional: true, required: false
  private _vsSeBootupFailPatch?: string; 
  public get vsSeBootupFailPatch() {
    return this.getStringAttribute('vs_se_bootup_fail_patch');
  }
  public set vsSeBootupFailPatch(value: string) {
    this._vsSeBootupFailPatch = value;
  }
  public resetVsSeBootupFailPatch() {
    this._vsSeBootupFailPatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeBootupFailPatchInput() {
    return this._vsSeBootupFailPatch;
  }

  // vs_se_create_fail - computed: false, optional: true, required: false
  private _vsSeCreateFail?: string; 
  public get vsSeCreateFail() {
    return this.getStringAttribute('vs_se_create_fail');
  }
  public set vsSeCreateFail(value: string) {
    this._vsSeCreateFail = value;
  }
  public resetVsSeCreateFail() {
    this._vsSeCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeCreateFailInput() {
    return this._vsSeCreateFail;
  }

  // vs_se_ping_fail - computed: false, optional: true, required: false
  private _vsSePingFail?: string; 
  public get vsSePingFail() {
    return this.getStringAttribute('vs_se_ping_fail');
  }
  public set vsSePingFail(value: string) {
    this._vsSePingFail = value;
  }
  public resetVsSePingFail() {
    this._vsSePingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSePingFailInput() {
    return this._vsSePingFail;
  }

  // vs_se_vnic_fail - computed: false, optional: true, required: false
  private _vsSeVnicFail?: string; 
  public get vsSeVnicFail() {
    return this.getStringAttribute('vs_se_vnic_fail');
  }
  public set vsSeVnicFail(value: string) {
    this._vsSeVnicFail = value;
  }
  public resetVsSeVnicFail() {
    this._vsSeVnicFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeVnicFailInput() {
    return this._vsSeVnicFail;
  }

  // vs_se_vnic_ip_fail - computed: false, optional: true, required: false
  private _vsSeVnicIpFail?: string; 
  public get vsSeVnicIpFail() {
    return this.getStringAttribute('vs_se_vnic_ip_fail');
  }
  public set vsSeVnicIpFail(value: string) {
    this._vsSeVnicIpFail = value;
  }
  public resetVsSeVnicIpFail() {
    this._vsSeVnicIpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeVnicIpFailInput() {
    return this._vsSeVnicIpFail;
  }

  // vsphere_ha_detection_timeout - computed: false, optional: true, required: false
  private _vsphereHaDetectionTimeout?: string; 
  public get vsphereHaDetectionTimeout() {
    return this.getStringAttribute('vsphere_ha_detection_timeout');
  }
  public set vsphereHaDetectionTimeout(value: string) {
    this._vsphereHaDetectionTimeout = value;
  }
  public resetVsphereHaDetectionTimeout() {
    this._vsphereHaDetectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereHaDetectionTimeoutInput() {
    return this._vsphereHaDetectionTimeout;
  }

  // vsphere_ha_recovery_timeout - computed: false, optional: true, required: false
  private _vsphereHaRecoveryTimeout?: string; 
  public get vsphereHaRecoveryTimeout() {
    return this.getStringAttribute('vsphere_ha_recovery_timeout');
  }
  public set vsphereHaRecoveryTimeout(value: string) {
    this._vsphereHaRecoveryTimeout = value;
  }
  public resetVsphereHaRecoveryTimeout() {
    this._vsphereHaRecoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereHaRecoveryTimeoutInput() {
    return this._vsphereHaRecoveryTimeout;
  }

  // vsphere_ha_timer_interval - computed: false, optional: true, required: false
  private _vsphereHaTimerInterval?: string; 
  public get vsphereHaTimerInterval() {
    return this.getStringAttribute('vsphere_ha_timer_interval');
  }
  public set vsphereHaTimerInterval(value: string) {
    this._vsphereHaTimerInterval = value;
  }
  public resetVsphereHaTimerInterval() {
    this._vsphereHaTimerInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereHaTimerIntervalInput() {
    return this._vsphereHaTimerInterval;
  }

  // warmstart_se_reconnect_wait_time - computed: false, optional: true, required: false
  private _warmstartSeReconnectWaitTime?: string; 
  public get warmstartSeReconnectWaitTime() {
    return this.getStringAttribute('warmstart_se_reconnect_wait_time');
  }
  public set warmstartSeReconnectWaitTime(value: string) {
    this._warmstartSeReconnectWaitTime = value;
  }
  public resetWarmstartSeReconnectWaitTime() {
    this._warmstartSeReconnectWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmstartSeReconnectWaitTimeInput() {
    return this._warmstartSeReconnectWaitTime;
  }

  // warmstart_vs_resync_wait_time - computed: false, optional: true, required: false
  private _warmstartVsResyncWaitTime?: string; 
  public get warmstartVsResyncWaitTime() {
    return this.getStringAttribute('warmstart_vs_resync_wait_time');
  }
  public set warmstartVsResyncWaitTime(value: string) {
    this._warmstartVsResyncWaitTime = value;
  }
  public resetWarmstartVsResyncWaitTime() {
    this._warmstartVsResyncWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmstartVsResyncWaitTimeInput() {
    return this._warmstartVsResyncWaitTime;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new CloudpropertiesInfoControllerPropsConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: CloudpropertiesInfoControllerPropsConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // false_positive_learning_config - computed: false, optional: true, required: false
  private _falsePositiveLearningConfig = new CloudpropertiesInfoControllerPropsFalsePositiveLearningConfigList(this, "false_positive_learning_config", true);
  public get falsePositiveLearningConfig() {
    return this._falsePositiveLearningConfig;
  }
  public putFalsePositiveLearningConfig(value: CloudpropertiesInfoControllerPropsFalsePositiveLearningConfig[] | cdktf.IResolvable) {
    this._falsePositiveLearningConfig.internalValue = value;
  }
  public resetFalsePositiveLearningConfig() {
    this._falsePositiveLearningConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falsePositiveLearningConfigInput() {
    return this._falsePositiveLearningConfig.internalValue;
  }

  // user_agent_cache_config - computed: false, optional: true, required: false
  private _userAgentCacheConfig = new CloudpropertiesInfoControllerPropsUserAgentCacheConfigList(this, "user_agent_cache_config", true);
  public get userAgentCacheConfig() {
    return this._userAgentCacheConfig;
  }
  public putUserAgentCacheConfig(value: CloudpropertiesInfoControllerPropsUserAgentCacheConfig[] | cdktf.IResolvable) {
    this._userAgentCacheConfig.internalValue = value;
  }
  public resetUserAgentCacheConfig() {
    this._userAgentCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentCacheConfigInput() {
    return this._userAgentCacheConfig.internalValue;
  }
}

export class CloudpropertiesInfoControllerPropsList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesInfoControllerProps[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesInfoControllerPropsOutputReference {
    return new CloudpropertiesInfoControllerPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesInfoFlavorPropsMeta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#key Cloudproperties#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#value Cloudproperties#value}
  */
  readonly value: string;
}

export function cloudpropertiesInfoFlavorPropsMetaToTerraform(struct?: CloudpropertiesInfoFlavorPropsMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudpropertiesInfoFlavorPropsMetaToHclTerraform(struct?: CloudpropertiesInfoFlavorPropsMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudpropertiesInfoFlavorPropsMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesInfoFlavorPropsMeta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesInfoFlavorPropsMeta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudpropertiesInfoFlavorPropsMetaList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesInfoFlavorPropsMeta[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesInfoFlavorPropsMetaOutputReference {
    return new CloudpropertiesInfoFlavorPropsMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesInfoFlavorProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cost Cloudproperties#cost}
  */
  readonly cost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#disk_gb Cloudproperties#disk_gb}
  */
  readonly diskGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#enhanced_nw Cloudproperties#enhanced_nw}
  */
  readonly enhancedNw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#id Cloudproperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#is_recommended Cloudproperties#is_recommended}
  */
  readonly isRecommended?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_ip6s_per_nic Cloudproperties#max_ip6s_per_nic}
  */
  readonly maxIp6SPerNic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_ips_per_nic Cloudproperties#max_ips_per_nic}
  */
  readonly maxIpsPerNic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#max_nics Cloudproperties#max_nics}
  */
  readonly maxNics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#name Cloudproperties#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#public Cloudproperties#public}
  */
  readonly public?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#ram_mb Cloudproperties#ram_mb}
  */
  readonly ramMb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vcpus Cloudproperties#vcpus}
  */
  readonly vcpus?: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#meta Cloudproperties#meta}
  */
  readonly meta?: CloudpropertiesInfoFlavorPropsMeta[] | cdktf.IResolvable;
}

export function cloudpropertiesInfoFlavorPropsToTerraform(struct?: CloudpropertiesInfoFlavorProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.stringToTerraform(struct!.cost),
    disk_gb: cdktf.stringToTerraform(struct!.diskGb),
    enhanced_nw: cdktf.stringToTerraform(struct!.enhancedNw),
    id: cdktf.stringToTerraform(struct!.id),
    is_recommended: cdktf.stringToTerraform(struct!.isRecommended),
    max_ip6s_per_nic: cdktf.stringToTerraform(struct!.maxIp6SPerNic),
    max_ips_per_nic: cdktf.stringToTerraform(struct!.maxIpsPerNic),
    max_nics: cdktf.stringToTerraform(struct!.maxNics),
    name: cdktf.stringToTerraform(struct!.name),
    public: cdktf.stringToTerraform(struct!.public),
    ram_mb: cdktf.stringToTerraform(struct!.ramMb),
    vcpus: cdktf.stringToTerraform(struct!.vcpus),
    meta: cdktf.listMapper(cloudpropertiesInfoFlavorPropsMetaToTerraform, true)(struct!.meta),
  }
}


export function cloudpropertiesInfoFlavorPropsToHclTerraform(struct?: CloudpropertiesInfoFlavorProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.stringToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_gb: {
      value: cdktf.stringToHclTerraform(struct!.diskGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enhanced_nw: {
      value: cdktf.stringToHclTerraform(struct!.enhancedNw),
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
    is_recommended: {
      value: cdktf.stringToHclTerraform(struct!.isRecommended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ip6s_per_nic: {
      value: cdktf.stringToHclTerraform(struct!.maxIp6SPerNic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ips_per_nic: {
      value: cdktf.stringToHclTerraform(struct!.maxIpsPerNic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_nics: {
      value: cdktf.stringToHclTerraform(struct!.maxNics),
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
    public: {
      value: cdktf.stringToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram_mb: {
      value: cdktf.stringToHclTerraform(struct!.ramMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpus: {
      value: cdktf.stringToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta: {
      value: cdktf.listMapperHcl(cloudpropertiesInfoFlavorPropsMetaToHclTerraform, true)(struct!.meta),
      isBlock: true,
      type: "list",
      storageClassType: "CloudpropertiesInfoFlavorPropsMetaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesInfoFlavorPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesInfoFlavorProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._diskGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGb = this._diskGb;
    }
    if (this._enhancedNw !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedNw = this._enhancedNw;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isRecommended !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRecommended = this._isRecommended;
    }
    if (this._maxIp6SPerNic !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIp6SPerNic = this._maxIp6SPerNic;
    }
    if (this._maxIpsPerNic !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIpsPerNic = this._maxIpsPerNic;
    }
    if (this._maxNics !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNics = this._maxNics;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    if (this._ramMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramMb = this._ramMb;
    }
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesInfoFlavorProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._diskGb = undefined;
      this._enhancedNw = undefined;
      this._id = undefined;
      this._isRecommended = undefined;
      this._maxIp6SPerNic = undefined;
      this._maxIpsPerNic = undefined;
      this._maxNics = undefined;
      this._name = undefined;
      this._public = undefined;
      this._ramMb = undefined;
      this._vcpus = undefined;
      this._meta.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._diskGb = value.diskGb;
      this._enhancedNw = value.enhancedNw;
      this._id = value.id;
      this._isRecommended = value.isRecommended;
      this._maxIp6SPerNic = value.maxIp6SPerNic;
      this._maxIpsPerNic = value.maxIpsPerNic;
      this._maxNics = value.maxNics;
      this._name = value.name;
      this._public = value.public;
      this._ramMb = value.ramMb;
      this._vcpus = value.vcpus;
      this._meta.internalValue = value.meta;
    }
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: string; 
  public get cost() {
    return this.getStringAttribute('cost');
  }
  public set cost(value: string) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // disk_gb - computed: true, optional: true, required: false
  private _diskGb?: string; 
  public get diskGb() {
    return this.getStringAttribute('disk_gb');
  }
  public set diskGb(value: string) {
    this._diskGb = value;
  }
  public resetDiskGb() {
    this._diskGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGbInput() {
    return this._diskGb;
  }

  // enhanced_nw - computed: true, optional: true, required: false
  private _enhancedNw?: string; 
  public get enhancedNw() {
    return this.getStringAttribute('enhanced_nw');
  }
  public set enhancedNw(value: string) {
    this._enhancedNw = value;
  }
  public resetEnhancedNw() {
    this._enhancedNw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedNwInput() {
    return this._enhancedNw;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_recommended - computed: true, optional: true, required: false
  private _isRecommended?: string; 
  public get isRecommended() {
    return this.getStringAttribute('is_recommended');
  }
  public set isRecommended(value: string) {
    this._isRecommended = value;
  }
  public resetIsRecommended() {
    this._isRecommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecommendedInput() {
    return this._isRecommended;
  }

  // max_ip6s_per_nic - computed: true, optional: true, required: false
  private _maxIp6SPerNic?: string; 
  public get maxIp6SPerNic() {
    return this.getStringAttribute('max_ip6s_per_nic');
  }
  public set maxIp6SPerNic(value: string) {
    this._maxIp6SPerNic = value;
  }
  public resetMaxIp6SPerNic() {
    this._maxIp6SPerNic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIp6SPerNicInput() {
    return this._maxIp6SPerNic;
  }

  // max_ips_per_nic - computed: true, optional: true, required: false
  private _maxIpsPerNic?: string; 
  public get maxIpsPerNic() {
    return this.getStringAttribute('max_ips_per_nic');
  }
  public set maxIpsPerNic(value: string) {
    this._maxIpsPerNic = value;
  }
  public resetMaxIpsPerNic() {
    this._maxIpsPerNic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIpsPerNicInput() {
    return this._maxIpsPerNic;
  }

  // max_nics - computed: true, optional: true, required: false
  private _maxNics?: string; 
  public get maxNics() {
    return this.getStringAttribute('max_nics');
  }
  public set maxNics(value: string) {
    this._maxNics = value;
  }
  public resetMaxNics() {
    this._maxNics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNicsInput() {
    return this._maxNics;
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

  // public - computed: false, optional: true, required: false
  private _public?: string; 
  public get public() {
    return this.getStringAttribute('public');
  }
  public set public(value: string) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // ram_mb - computed: true, optional: true, required: false
  private _ramMb?: string; 
  public get ramMb() {
    return this.getStringAttribute('ram_mb');
  }
  public set ramMb(value: string) {
    this._ramMb = value;
  }
  public resetRamMb() {
    this._ramMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramMbInput() {
    return this._ramMb;
  }

  // vcpus - computed: true, optional: true, required: false
  private _vcpus?: string; 
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
  public set vcpus(value: string) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new CloudpropertiesInfoFlavorPropsMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }
  public putMeta(value: CloudpropertiesInfoFlavorPropsMeta[] | cdktf.IResolvable) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }
}

export class CloudpropertiesInfoFlavorPropsList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesInfoFlavorProps[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesInfoFlavorPropsOutputReference {
    return new CloudpropertiesInfoFlavorPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudpropertiesInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#flavor_regex_filter Cloudproperties#flavor_regex_filter}
  */
  readonly flavorRegexFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#htypes Cloudproperties#htypes}
  */
  readonly htypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#vtype Cloudproperties#vtype}
  */
  readonly vtype: string;
  /**
  * cca_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#cca_props Cloudproperties#cca_props}
  */
  readonly ccaProps?: CloudpropertiesInfoCcaProps[] | cdktf.IResolvable;
  /**
  * controller_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#controller_props Cloudproperties#controller_props}
  */
  readonly controllerProps?: CloudpropertiesInfoControllerProps[] | cdktf.IResolvable;
  /**
  * flavor_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#flavor_props Cloudproperties#flavor_props}
  */
  readonly flavorProps?: CloudpropertiesInfoFlavorProps[] | cdktf.IResolvable;
}

export function cloudpropertiesInfoToTerraform(struct?: CloudpropertiesInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor_regex_filter: cdktf.stringToTerraform(struct!.flavorRegexFilter),
    htypes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.htypes),
    vtype: cdktf.stringToTerraform(struct!.vtype),
    cca_props: cdktf.listMapper(cloudpropertiesInfoCcaPropsToTerraform, true)(struct!.ccaProps),
    controller_props: cdktf.listMapper(cloudpropertiesInfoControllerPropsToTerraform, true)(struct!.controllerProps),
    flavor_props: cdktf.listMapper(cloudpropertiesInfoFlavorPropsToTerraform, true)(struct!.flavorProps),
  }
}


export function cloudpropertiesInfoToHclTerraform(struct?: CloudpropertiesInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flavor_regex_filter: {
      value: cdktf.stringToHclTerraform(struct!.flavorRegexFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    htypes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.htypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vtype: {
      value: cdktf.stringToHclTerraform(struct!.vtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cca_props: {
      value: cdktf.listMapperHcl(cloudpropertiesInfoCcaPropsToHclTerraform, true)(struct!.ccaProps),
      isBlock: true,
      type: "set",
      storageClassType: "CloudpropertiesInfoCcaPropsList",
    },
    controller_props: {
      value: cdktf.listMapperHcl(cloudpropertiesInfoControllerPropsToHclTerraform, true)(struct!.controllerProps),
      isBlock: true,
      type: "set",
      storageClassType: "CloudpropertiesInfoControllerPropsList",
    },
    flavor_props: {
      value: cdktf.listMapperHcl(cloudpropertiesInfoFlavorPropsToHclTerraform, true)(struct!.flavorProps),
      isBlock: true,
      type: "list",
      storageClassType: "CloudpropertiesInfoFlavorPropsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudpropertiesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudpropertiesInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavorRegexFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavorRegexFilter = this._flavorRegexFilter;
    }
    if (this._htypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.htypes = this._htypes;
    }
    if (this._vtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtype = this._vtype;
    }
    if (this._ccaProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccaProps = this._ccaProps?.internalValue;
    }
    if (this._controllerProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerProps = this._controllerProps?.internalValue;
    }
    if (this._flavorProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavorProps = this._flavorProps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudpropertiesInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flavorRegexFilter = undefined;
      this._htypes = undefined;
      this._vtype = undefined;
      this._ccaProps.internalValue = undefined;
      this._controllerProps.internalValue = undefined;
      this._flavorProps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flavorRegexFilter = value.flavorRegexFilter;
      this._htypes = value.htypes;
      this._vtype = value.vtype;
      this._ccaProps.internalValue = value.ccaProps;
      this._controllerProps.internalValue = value.controllerProps;
      this._flavorProps.internalValue = value.flavorProps;
    }
  }

  // flavor_regex_filter - computed: true, optional: true, required: false
  private _flavorRegexFilter?: string; 
  public get flavorRegexFilter() {
    return this.getStringAttribute('flavor_regex_filter');
  }
  public set flavorRegexFilter(value: string) {
    this._flavorRegexFilter = value;
  }
  public resetFlavorRegexFilter() {
    this._flavorRegexFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorRegexFilterInput() {
    return this._flavorRegexFilter;
  }

  // htypes - computed: false, optional: true, required: false
  private _htypes?: string[]; 
  public get htypes() {
    return this.getListAttribute('htypes');
  }
  public set htypes(value: string[]) {
    this._htypes = value;
  }
  public resetHtypes() {
    this._htypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htypesInput() {
    return this._htypes;
  }

  // vtype - computed: false, optional: false, required: true
  private _vtype?: string; 
  public get vtype() {
    return this.getStringAttribute('vtype');
  }
  public set vtype(value: string) {
    this._vtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vtypeInput() {
    return this._vtype;
  }

  // cca_props - computed: false, optional: true, required: false
  private _ccaProps = new CloudpropertiesInfoCcaPropsList(this, "cca_props", true);
  public get ccaProps() {
    return this._ccaProps;
  }
  public putCcaProps(value: CloudpropertiesInfoCcaProps[] | cdktf.IResolvable) {
    this._ccaProps.internalValue = value;
  }
  public resetCcaProps() {
    this._ccaProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccaPropsInput() {
    return this._ccaProps.internalValue;
  }

  // controller_props - computed: false, optional: true, required: false
  private _controllerProps = new CloudpropertiesInfoControllerPropsList(this, "controller_props", true);
  public get controllerProps() {
    return this._controllerProps;
  }
  public putControllerProps(value: CloudpropertiesInfoControllerProps[] | cdktf.IResolvable) {
    this._controllerProps.internalValue = value;
  }
  public resetControllerProps() {
    this._controllerProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerPropsInput() {
    return this._controllerProps.internalValue;
  }

  // flavor_props - computed: false, optional: true, required: false
  private _flavorProps = new CloudpropertiesInfoFlavorPropsList(this, "flavor_props", false);
  public get flavorProps() {
    return this._flavorProps;
  }
  public putFlavorProps(value: CloudpropertiesInfoFlavorProps[] | cdktf.IResolvable) {
    this._flavorProps.internalValue = value;
  }
  public resetFlavorProps() {
    this._flavorProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorPropsInput() {
    return this._flavorProps.internalValue;
  }
}

export class CloudpropertiesInfoList extends cdktf.ComplexList {
  public internalValue? : CloudpropertiesInfo[] | cdktf.IResolvable

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
  public get(index: number): CloudpropertiesInfoOutputReference {
    return new CloudpropertiesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties avi_cloudproperties}
*/
export class Cloudproperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_cloudproperties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cloudproperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cloudproperties to import
  * @param importFromId The id of the existing Cloudproperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cloudproperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_cloudproperties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/cloudproperties avi_cloudproperties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudpropertiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudpropertiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_cloudproperties',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccVtypes = config.ccVtypes;
    this._id = config.id;
    this._uuid = config.uuid;
    this._ccProps.internalValue = config.ccProps;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._hypProps.internalValue = config.hypProps;
    this._info.internalValue = config.info;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cc_vtypes - computed: false, optional: true, required: false
  private _ccVtypes?: string[]; 
  public get ccVtypes() {
    return this.getListAttribute('cc_vtypes');
  }
  public set ccVtypes(value: string[]) {
    this._ccVtypes = value;
  }
  public resetCcVtypes() {
    this._ccVtypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccVtypesInput() {
    return this._ccVtypes;
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

  // cc_props - computed: false, optional: true, required: false
  private _ccProps = new CloudpropertiesCcPropsList(this, "cc_props", true);
  public get ccProps() {
    return this._ccProps;
  }
  public putCcProps(value: CloudpropertiesCcProps[] | cdktf.IResolvable) {
    this._ccProps.internalValue = value;
  }
  public resetCcProps() {
    this._ccProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccPropsInput() {
    return this._ccProps.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new CloudpropertiesConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: CloudpropertiesConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // hyp_props - computed: false, optional: true, required: false
  private _hypProps = new CloudpropertiesHypPropsList(this, "hyp_props", false);
  public get hypProps() {
    return this._hypProps;
  }
  public putHypProps(value: CloudpropertiesHypProps[] | cdktf.IResolvable) {
    this._hypProps.internalValue = value;
  }
  public resetHypProps() {
    this._hypProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypPropsInput() {
    return this._hypProps.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new CloudpropertiesInfoList(this, "info", false);
  public get info() {
    return this._info;
  }
  public putInfo(value: CloudpropertiesInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cc_vtypes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ccVtypes),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      cc_props: cdktf.listMapper(cloudpropertiesCcPropsToTerraform, true)(this._ccProps.internalValue),
      configpb_attributes: cdktf.listMapper(cloudpropertiesConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      hyp_props: cdktf.listMapper(cloudpropertiesHypPropsToTerraform, true)(this._hypProps.internalValue),
      info: cdktf.listMapper(cloudpropertiesInfoToTerraform, true)(this._info.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cc_vtypes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ccVtypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      cc_props: {
        value: cdktf.listMapperHcl(cloudpropertiesCcPropsToHclTerraform, true)(this._ccProps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudpropertiesCcPropsList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(cloudpropertiesConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudpropertiesConfigpbAttributesList",
      },
      hyp_props: {
        value: cdktf.listMapperHcl(cloudpropertiesHypPropsToHclTerraform, true)(this._hypProps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudpropertiesHypPropsList",
      },
      info: {
        value: cdktf.listMapperHcl(cloudpropertiesInfoToHclTerraform, true)(this._info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudpropertiesInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
