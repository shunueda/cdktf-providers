// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackEcsDedicatedhostsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#dedicated_host_id DataApsarastackEcsDedicatedhosts#dedicated_host_id}
  */
  readonly dedicatedHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#dedicated_host_name DataApsarastackEcsDedicatedhosts#dedicated_host_name}
  */
  readonly dedicatedHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#dedicated_host_type DataApsarastackEcsDedicatedhosts#dedicated_host_type}
  */
  readonly dedicatedHostType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#id DataApsarastackEcsDedicatedhosts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#ids DataApsarastackEcsDedicatedhosts#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#name_regex DataApsarastackEcsDedicatedhosts#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#output_file DataApsarastackEcsDedicatedhosts#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#resource_group_id DataApsarastackEcsDedicatedhosts#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#status DataApsarastackEcsDedicatedhosts#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#tags DataApsarastackEcsDedicatedhosts#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#zone_id DataApsarastackEcsDedicatedhosts#zone_id}
  */
  readonly zoneId?: string;
  /**
  * operation_locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#operation_locks DataApsarastackEcsDedicatedhosts#operation_locks}
  */
  readonly operationLocks?: DataApsarastackEcsDedicatedhostsOperationLocks[] | cdktf.IResolvable;
}
export interface DataApsarastackEcsDedicatedhostsHostsCapacity {
}

export function dataApsarastackEcsDedicatedhostsHostsCapacityToTerraform(struct?: DataApsarastackEcsDedicatedhostsHostsCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackEcsDedicatedhostsHostsCapacityToHclTerraform(struct?: DataApsarastackEcsDedicatedhostsHostsCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackEcsDedicatedhostsHostsCapacityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackEcsDedicatedhostsHostsCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackEcsDedicatedhostsHostsCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_local_storage - computed: true, optional: false, required: false
  public get availableLocalStorage() {
    return this.getNumberAttribute('available_local_storage');
  }

  // available_memory - computed: true, optional: false, required: false
  public get availableMemory() {
    return this.getNumberAttribute('available_memory');
  }

  // available_vcpus - computed: true, optional: false, required: false
  public get availableVcpus() {
    return this.getNumberAttribute('available_vcpus');
  }

  // available_vgpus - computed: true, optional: false, required: false
  public get availableVgpus() {
    return this.getNumberAttribute('available_vgpus');
  }

  // local_storage_category - computed: true, optional: false, required: false
  public get localStorageCategory() {
    return this.getStringAttribute('local_storage_category');
  }

  // total_local_storage - computed: true, optional: false, required: false
  public get totalLocalStorage() {
    return this.getNumberAttribute('total_local_storage');
  }

  // total_memory - computed: true, optional: false, required: false
  public get totalMemory() {
    return this.getNumberAttribute('total_memory');
  }

  // total_vcpus - computed: true, optional: false, required: false
  public get totalVcpus() {
    return this.getNumberAttribute('total_vcpus');
  }

  // total_vgpus - computed: true, optional: false, required: false
  public get totalVgpus() {
    return this.getNumberAttribute('total_vgpus');
  }
}

export class DataApsarastackEcsDedicatedhostsHostsCapacityList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackEcsDedicatedhostsHostsCapacityOutputReference {
    return new DataApsarastackEcsDedicatedhostsHostsCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackEcsDedicatedhostsHostsNetworkAttributes {
}

export function dataApsarastackEcsDedicatedhostsHostsNetworkAttributesToTerraform(struct?: DataApsarastackEcsDedicatedhostsHostsNetworkAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackEcsDedicatedhostsHostsNetworkAttributesToHclTerraform(struct?: DataApsarastackEcsDedicatedhostsHostsNetworkAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackEcsDedicatedhostsHostsNetworkAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackEcsDedicatedhostsHostsNetworkAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackEcsDedicatedhostsHostsNetworkAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // slb_udp_timeout - computed: true, optional: false, required: false
  public get slbUdpTimeout() {
    return this.getNumberAttribute('slb_udp_timeout');
  }

  // udp_timeout - computed: true, optional: false, required: false
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }
}

export class DataApsarastackEcsDedicatedhostsHostsNetworkAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackEcsDedicatedhostsHostsNetworkAttributesOutputReference {
    return new DataApsarastackEcsDedicatedhostsHostsNetworkAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackEcsDedicatedhostsHostsOperationLocks {
}

export function dataApsarastackEcsDedicatedhostsHostsOperationLocksToTerraform(struct?: DataApsarastackEcsDedicatedhostsHostsOperationLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackEcsDedicatedhostsHostsOperationLocksToHclTerraform(struct?: DataApsarastackEcsDedicatedhostsHostsOperationLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackEcsDedicatedhostsHostsOperationLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackEcsDedicatedhostsHostsOperationLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackEcsDedicatedhostsHostsOperationLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lock_reason - computed: true, optional: false, required: false
  public get lockReason() {
    return this.getStringAttribute('lock_reason');
  }
}

export class DataApsarastackEcsDedicatedhostsHostsOperationLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackEcsDedicatedhostsHostsOperationLocksOutputReference {
    return new DataApsarastackEcsDedicatedhostsHostsOperationLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackEcsDedicatedhostsHosts {
}

export function dataApsarastackEcsDedicatedhostsHostsToTerraform(struct?: DataApsarastackEcsDedicatedhostsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackEcsDedicatedhostsHostsToHclTerraform(struct?: DataApsarastackEcsDedicatedhostsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackEcsDedicatedhostsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackEcsDedicatedhostsHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackEcsDedicatedhostsHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_maintenance - computed: true, optional: false, required: false
  public get actionOnMaintenance() {
    return this.getStringAttribute('action_on_maintenance');
  }

  // auto_placement - computed: true, optional: false, required: false
  public get autoPlacement() {
    return this.getStringAttribute('auto_placement');
  }

  // auto_release_time - computed: true, optional: false, required: false
  public get autoReleaseTime() {
    return this.getStringAttribute('auto_release_time');
  }

  // capacity - computed: true, optional: false, required: false
  private _capacity = new DataApsarastackEcsDedicatedhostsHostsCapacityList(this, "capacity", false);
  public get capacity() {
    return this._capacity;
  }

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // cpu_over_commit_ratio - computed: true, optional: false, required: false
  public get cpuOverCommitRatio() {
    return this.getNumberAttribute('cpu_over_commit_ratio');
  }

  // dedicated_host_id - computed: true, optional: false, required: false
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }

  // dedicated_host_name - computed: true, optional: false, required: false
  public get dedicatedHostName() {
    return this.getStringAttribute('dedicated_host_name');
  }

  // dedicated_host_type - computed: true, optional: false, required: false
  public get dedicatedHostType() {
    return this.getStringAttribute('dedicated_host_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // gpu_spec - computed: true, optional: false, required: false
  public get gpuSpec() {
    return this.getStringAttribute('gpu_spec');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_id - computed: true, optional: false, required: false
  public get machineId() {
    return this.getStringAttribute('machine_id');
  }

  // network_attributes - computed: true, optional: false, required: false
  private _networkAttributes = new DataApsarastackEcsDedicatedhostsHostsNetworkAttributesList(this, "network_attributes", false);
  public get networkAttributes() {
    return this._networkAttributes;
  }

  // operation_locks - computed: true, optional: false, required: false
  private _operationLocks = new DataApsarastackEcsDedicatedhostsHostsOperationLocksList(this, "operation_locks", false);
  public get operationLocks() {
    return this._operationLocks;
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // physical_gpus - computed: true, optional: false, required: false
  public get physicalGpus() {
    return this.getNumberAttribute('physical_gpus');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // sale_cycle - computed: true, optional: false, required: false
  public get saleCycle() {
    return this.getStringAttribute('sale_cycle');
  }

  // sockets - computed: true, optional: false, required: false
  public get sockets() {
    return this.getNumberAttribute('sockets');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supported_custom_instance_type_families - computed: true, optional: false, required: false
  public get supportedCustomInstanceTypeFamilies() {
    return this.getListAttribute('supported_custom_instance_type_families');
  }

  // supported_instance_type_families - computed: true, optional: false, required: false
  public get supportedInstanceTypeFamilies() {
    return this.getListAttribute('supported_instance_type_families');
  }

  // supported_instance_types_list - computed: true, optional: false, required: false
  public get supportedInstanceTypesList() {
    return this.getListAttribute('supported_instance_types_list');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataApsarastackEcsDedicatedhostsHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackEcsDedicatedhostsHostsOutputReference {
    return new DataApsarastackEcsDedicatedhostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackEcsDedicatedhostsOperationLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#lock_reason DataApsarastackEcsDedicatedhosts#lock_reason}
  */
  readonly lockReason?: string;
}

export function dataApsarastackEcsDedicatedhostsOperationLocksToTerraform(struct?: DataApsarastackEcsDedicatedhostsOperationLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lock_reason: cdktf.stringToTerraform(struct!.lockReason),
  }
}


export function dataApsarastackEcsDedicatedhostsOperationLocksToHclTerraform(struct?: DataApsarastackEcsDedicatedhostsOperationLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lock_reason: {
      value: cdktf.stringToHclTerraform(struct!.lockReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApsarastackEcsDedicatedhostsOperationLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackEcsDedicatedhostsOperationLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockReason = this._lockReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackEcsDedicatedhostsOperationLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockReason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockReason = value.lockReason;
    }
  }

  // lock_reason - computed: false, optional: true, required: false
  private _lockReason?: string; 
  public get lockReason() {
    return this.getStringAttribute('lock_reason');
  }
  public set lockReason(value: string) {
    this._lockReason = value;
  }
  public resetLockReason() {
    this._lockReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockReasonInput() {
    return this._lockReason;
  }
}

export class DataApsarastackEcsDedicatedhostsOperationLocksList extends cdktf.ComplexList {
  public internalValue? : DataApsarastackEcsDedicatedhostsOperationLocks[] | cdktf.IResolvable

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
  public get(index: number): DataApsarastackEcsDedicatedhostsOperationLocksOutputReference {
    return new DataApsarastackEcsDedicatedhostsOperationLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts apsarastack_ecs_dedicatedhosts}
*/
export class DataApsarastackEcsDedicatedhosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ecs_dedicatedhosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackEcsDedicatedhosts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackEcsDedicatedhosts to import
  * @param importFromId The id of the existing DataApsarastackEcsDedicatedhosts that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackEcsDedicatedhosts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ecs_dedicatedhosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_dedicatedhosts apsarastack_ecs_dedicatedhosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackEcsDedicatedhostsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackEcsDedicatedhostsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ecs_dedicatedhosts',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dedicatedHostId = config.dedicatedHostId;
    this._dedicatedHostName = config.dedicatedHostName;
    this._dedicatedHostType = config.dedicatedHostType;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._resourceGroupId = config.resourceGroupId;
    this._status = config.status;
    this._tags = config.tags;
    this._zoneId = config.zoneId;
    this._operationLocks.internalValue = config.operationLocks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_host_id - computed: false, optional: true, required: false
  private _dedicatedHostId?: string; 
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }
  public set dedicatedHostId(value: string) {
    this._dedicatedHostId = value;
  }
  public resetDedicatedHostId() {
    this._dedicatedHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostIdInput() {
    return this._dedicatedHostId;
  }

  // dedicated_host_name - computed: false, optional: true, required: false
  private _dedicatedHostName?: string; 
  public get dedicatedHostName() {
    return this.getStringAttribute('dedicated_host_name');
  }
  public set dedicatedHostName(value: string) {
    this._dedicatedHostName = value;
  }
  public resetDedicatedHostName() {
    this._dedicatedHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostNameInput() {
    return this._dedicatedHostName;
  }

  // dedicated_host_type - computed: false, optional: true, required: false
  private _dedicatedHostType?: string; 
  public get dedicatedHostType() {
    return this.getStringAttribute('dedicated_host_type');
  }
  public set dedicatedHostType(value: string) {
    this._dedicatedHostType = value;
  }
  public resetDedicatedHostType() {
    this._dedicatedHostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostTypeInput() {
    return this._dedicatedHostType;
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataApsarastackEcsDedicatedhostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // operation_locks - computed: false, optional: true, required: false
  private _operationLocks = new DataApsarastackEcsDedicatedhostsOperationLocksList(this, "operation_locks", false);
  public get operationLocks() {
    return this._operationLocks;
  }
  public putOperationLocks(value: DataApsarastackEcsDedicatedhostsOperationLocks[] | cdktf.IResolvable) {
    this._operationLocks.internalValue = value;
  }
  public resetOperationLocks() {
    this._operationLocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationLocksInput() {
    return this._operationLocks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_host_id: cdktf.stringToTerraform(this._dedicatedHostId),
      dedicated_host_name: cdktf.stringToTerraform(this._dedicatedHostName),
      dedicated_host_type: cdktf.stringToTerraform(this._dedicatedHostType),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      operation_locks: cdktf.listMapper(dataApsarastackEcsDedicatedhostsOperationLocksToTerraform, true)(this._operationLocks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_host_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_host_name: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_host_type: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostType),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_locks: {
        value: cdktf.listMapperHcl(dataApsarastackEcsDedicatedhostsOperationLocksToHclTerraform, true)(this._operationLocks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataApsarastackEcsDedicatedhostsOperationLocksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
