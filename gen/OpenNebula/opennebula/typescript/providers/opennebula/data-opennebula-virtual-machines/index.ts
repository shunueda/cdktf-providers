// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpennebulaVirtualMachinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Amount of CPU quota assigned to the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines#cpu DataOpennebulaVirtualMachines#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines#id DataOpennebulaVirtualMachines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Amount of memory (RAM) in MB assigned to the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines#memory DataOpennebulaVirtualMachines#memory}
  */
  readonly memory?: number;
  /**
  * Filter VMs by name with a RE2 a regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines#name_regex DataOpennebulaVirtualMachines#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Ordering of the sort: ASC or DESC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines#order DataOpennebulaVirtualMachines#order}
  */
  readonly order?: string;
  /**
  * Attribute used to sort the VMs list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines#sort_on DataOpennebulaVirtualMachines#sort_on}
  */
  readonly sortOn?: string;
  /**
  * Add custom tags to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines#tags DataOpennebulaVirtualMachines#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Number of virtual CPUs assigned to the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines#vcpu DataOpennebulaVirtualMachines#vcpu}
  */
  readonly vcpu?: number;
}
export interface DataOpennebulaVirtualMachinesVirtualMachinesDisk {
}

export function dataOpennebulaVirtualMachinesVirtualMachinesDiskToTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachinesDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpennebulaVirtualMachinesVirtualMachinesDiskToHclTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachinesDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpennebulaVirtualMachinesVirtualMachinesDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpennebulaVirtualMachinesVirtualMachinesDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpennebulaVirtualMachinesVirtualMachinesDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache - computed: true, optional: false, required: false
  public get cache() {
    return this.getStringAttribute('cache');
  }

  // dev_prefix - computed: true, optional: false, required: false
  public get devPrefix() {
    return this.getStringAttribute('dev_prefix');
  }

  // discard - computed: true, optional: false, required: false
  public get discard() {
    return this.getStringAttribute('discard');
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getNumberAttribute('image_id');
  }

  // io - computed: true, optional: false, required: false
  public get io() {
    return this.getStringAttribute('io');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // volatile_format - computed: true, optional: false, required: false
  public get volatileFormat() {
    return this.getStringAttribute('volatile_format');
  }

  // volatile_type - computed: true, optional: false, required: false
  public get volatileType() {
    return this.getStringAttribute('volatile_type');
  }
}

export class DataOpennebulaVirtualMachinesVirtualMachinesDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataOpennebulaVirtualMachinesVirtualMachinesDiskOutputReference {
    return new DataOpennebulaVirtualMachinesVirtualMachinesDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpennebulaVirtualMachinesVirtualMachinesNic {
}

export function dataOpennebulaVirtualMachinesVirtualMachinesNicToTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachinesNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpennebulaVirtualMachinesVirtualMachinesNicToHclTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachinesNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpennebulaVirtualMachinesVirtualMachinesNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpennebulaVirtualMachinesVirtualMachinesNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpennebulaVirtualMachinesVirtualMachinesNic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getStringAttribute('dns');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip6 - computed: true, optional: false, required: false
  public get ip6() {
    return this.getStringAttribute('ip6');
  }

  // ip6_global - computed: true, optional: false, required: false
  public get ip6Global() {
    return this.getStringAttribute('ip6_global');
  }

  // ip6_link - computed: true, optional: false, required: false
  public get ip6Link() {
    return this.getStringAttribute('ip6_link');
  }

  // ip6_ula - computed: true, optional: false, required: false
  public get ip6Ula() {
    return this.getStringAttribute('ip6_ula');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }

  // network_mode_auto - computed: true, optional: false, required: false
  public get networkModeAuto() {
    return this.getBooleanAttribute('network_mode_auto');
  }

  // physical_device - computed: true, optional: false, required: false
  public get physicalDevice() {
    return this.getStringAttribute('physical_device');
  }

  // sched_rank - computed: true, optional: false, required: false
  public get schedRank() {
    return this.getStringAttribute('sched_rank');
  }

  // sched_requirements - computed: true, optional: false, required: false
  public get schedRequirements() {
    return this.getStringAttribute('sched_requirements');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getNumberListAttribute('security_groups');
  }

  // virtio_queues - computed: true, optional: false, required: false
  public get virtioQueues() {
    return this.getStringAttribute('virtio_queues');
  }
}

export class DataOpennebulaVirtualMachinesVirtualMachinesNicList extends cdktf.ComplexList {

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
  public get(index: number): DataOpennebulaVirtualMachinesVirtualMachinesNicOutputReference {
    return new DataOpennebulaVirtualMachinesVirtualMachinesNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpennebulaVirtualMachinesVirtualMachinesNicAlias {
}

export function dataOpennebulaVirtualMachinesVirtualMachinesNicAliasToTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachinesNicAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpennebulaVirtualMachinesVirtualMachinesNicAliasToHclTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachinesNicAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpennebulaVirtualMachinesVirtualMachinesNicAliasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpennebulaVirtualMachinesVirtualMachinesNicAlias | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpennebulaVirtualMachinesVirtualMachinesNicAlias | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getStringAttribute('dns');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip6 - computed: true, optional: false, required: false
  public get ip6() {
    return this.getStringAttribute('ip6');
  }

  // ip6_global - computed: true, optional: false, required: false
  public get ip6Global() {
    return this.getStringAttribute('ip6_global');
  }

  // ip6_link - computed: true, optional: false, required: false
  public get ip6Link() {
    return this.getStringAttribute('ip6_link');
  }

  // ip6_ula - computed: true, optional: false, required: false
  public get ip6Ula() {
    return this.getStringAttribute('ip6_ula');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getNumberListAttribute('security_groups');
  }
}

export class DataOpennebulaVirtualMachinesVirtualMachinesNicAliasList extends cdktf.ComplexList {

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
  public get(index: number): DataOpennebulaVirtualMachinesVirtualMachinesNicAliasOutputReference {
    return new DataOpennebulaVirtualMachinesVirtualMachinesNicAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpennebulaVirtualMachinesVirtualMachinesVmgroup {
}

export function dataOpennebulaVirtualMachinesVirtualMachinesVmgroupToTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachinesVmgroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpennebulaVirtualMachinesVirtualMachinesVmgroupToHclTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachinesVmgroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpennebulaVirtualMachinesVirtualMachinesVmgroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpennebulaVirtualMachinesVirtualMachinesVmgroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpennebulaVirtualMachinesVirtualMachinesVmgroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // vmgroup_id - computed: true, optional: false, required: false
  public get vmgroupId() {
    return this.getNumberAttribute('vmgroup_id');
  }
}

export class DataOpennebulaVirtualMachinesVirtualMachinesVmgroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOpennebulaVirtualMachinesVirtualMachinesVmgroupOutputReference {
    return new DataOpennebulaVirtualMachinesVirtualMachinesVmgroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpennebulaVirtualMachinesVirtualMachines {
}

export function dataOpennebulaVirtualMachinesVirtualMachinesToTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpennebulaVirtualMachinesVirtualMachinesToHclTerraform(struct?: DataOpennebulaVirtualMachinesVirtualMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpennebulaVirtualMachinesVirtualMachinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpennebulaVirtualMachinesVirtualMachines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpennebulaVirtualMachinesVirtualMachines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // disk - computed: true, optional: false, required: false
  private _disk = new DataOpennebulaVirtualMachinesVirtualMachinesDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nic - computed: true, optional: false, required: false
  private _nic = new DataOpennebulaVirtualMachinesVirtualMachinesNicList(this, "nic", false);
  public get nic() {
    return this._nic;
  }

  // nic_alias - computed: true, optional: false, required: false
  private _nicAlias = new DataOpennebulaVirtualMachinesVirtualMachinesNicAliasList(this, "nic_alias", false);
  public get nicAlias() {
    return this._nicAlias;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vcpu - computed: true, optional: false, required: false
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }

  // vmgroup - computed: true, optional: false, required: false
  private _vmgroup = new DataOpennebulaVirtualMachinesVirtualMachinesVmgroupList(this, "vmgroup", false);
  public get vmgroup() {
    return this._vmgroup;
  }
}

export class DataOpennebulaVirtualMachinesVirtualMachinesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpennebulaVirtualMachinesVirtualMachinesOutputReference {
    return new DataOpennebulaVirtualMachinesVirtualMachinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines opennebula_virtual_machines}
*/
export class DataOpennebulaVirtualMachines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_virtual_machines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpennebulaVirtualMachines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpennebulaVirtualMachines to import
  * @param importFromId The id of the existing DataOpennebulaVirtualMachines that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpennebulaVirtualMachines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_virtual_machines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_machines opennebula_virtual_machines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpennebulaVirtualMachinesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpennebulaVirtualMachinesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opennebula_virtual_machines',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpu = config.cpu;
    this._id = config.id;
    this._memory = config.memory;
    this._nameRegex = config.nameRegex;
    this._order = config.order;
    this._sortOn = config.sortOn;
    this._tags = config.tags;
    this._vcpu = config.vcpu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
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

  // memory - computed: true, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // sort_on - computed: false, optional: true, required: false
  private _sortOn?: string; 
  public get sortOn() {
    return this.getStringAttribute('sort_on');
  }
  public set sortOn(value: string) {
    this._sortOn = value;
  }
  public resetSortOn() {
    this._sortOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOnInput() {
    return this._sortOn;
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

  // vcpu - computed: true, optional: true, required: false
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }

  // virtual_machines - computed: true, optional: false, required: false
  private _virtualMachines = new DataOpennebulaVirtualMachinesVirtualMachinesList(this, "virtual_machines", false);
  public get virtualMachines() {
    return this._virtualMachines;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu: cdktf.numberToTerraform(this._cpu),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.numberToTerraform(this._memory),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      order: cdktf.stringToTerraform(this._order),
      sort_on: cdktf.stringToTerraform(this._sortOn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vcpu: cdktf.numberToTerraform(this._vcpu),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_on: {
        value: cdktf.stringToHclTerraform(this._sortOn),
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
      vcpu: {
        value: cdktf.numberToHclTerraform(this._vcpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
