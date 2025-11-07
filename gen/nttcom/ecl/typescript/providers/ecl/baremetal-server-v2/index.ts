// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BaremetalServerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#admin_pass BaremetalServerV2#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#availability_zone BaremetalServerV2#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#flavor_id BaremetalServerV2#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#flavor_name BaremetalServerV2#flavor_name}
  */
  readonly flavorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#id BaremetalServerV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#image_id BaremetalServerV2#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#image_name BaremetalServerV2#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#key_pair BaremetalServerV2#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#metadata BaremetalServerV2#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#name BaremetalServerV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#user_data BaremetalServerV2#user_data}
  */
  readonly userData?: string;
  /**
  * filesystems block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#filesystems BaremetalServerV2#filesystems}
  */
  readonly filesystems?: BaremetalServerV2Filesystems[] | cdktf.IResolvable;
  /**
  * lvm_volume_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#lvm_volume_groups BaremetalServerV2#lvm_volume_groups}
  */
  readonly lvmVolumeGroups?: BaremetalServerV2LvmVolumeGroups[] | cdktf.IResolvable;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#networks BaremetalServerV2#networks}
  */
  readonly networks?: BaremetalServerV2Networks[] | cdktf.IResolvable;
  /**
  * personality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#personality BaremetalServerV2#personality}
  */
  readonly personality?: BaremetalServerV2Personality[] | cdktf.IResolvable;
  /**
  * raid_arrays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#raid_arrays BaremetalServerV2#raid_arrays}
  */
  readonly raidArrays?: BaremetalServerV2RaidArrays[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#timeouts BaremetalServerV2#timeouts}
  */
  readonly timeouts?: BaremetalServerV2Timeouts;
}
export interface BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIps {
}

export function baremetalServerV2NicPhysicalPortsAttachedPortsFixedIpsToTerraform(struct?: BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function baremetalServerV2NicPhysicalPortsAttachedPortsFixedIpsToHclTerraform(struct?: BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIpsList extends cdktf.ComplexList {

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
  public get(index: number): BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIpsOutputReference {
    return new BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2NicPhysicalPortsAttachedPorts {
}

export function baremetalServerV2NicPhysicalPortsAttachedPortsToTerraform(struct?: BaremetalServerV2NicPhysicalPortsAttachedPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function baremetalServerV2NicPhysicalPortsAttachedPortsToHclTerraform(struct?: BaremetalServerV2NicPhysicalPortsAttachedPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BaremetalServerV2NicPhysicalPortsAttachedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2NicPhysicalPortsAttachedPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2NicPhysicalPortsAttachedPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fixed_ips - computed: true, optional: false, required: false
  private _fixedIps = new BaremetalServerV2NicPhysicalPortsAttachedPortsFixedIpsList(this, "fixed_ips", false);
  public get fixedIps() {
    return this._fixedIps;
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }
}

export class BaremetalServerV2NicPhysicalPortsAttachedPortsList extends cdktf.ComplexList {

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
  public get(index: number): BaremetalServerV2NicPhysicalPortsAttachedPortsOutputReference {
    return new BaremetalServerV2NicPhysicalPortsAttachedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2NicPhysicalPorts {
}

export function baremetalServerV2NicPhysicalPortsToTerraform(struct?: BaremetalServerV2NicPhysicalPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function baremetalServerV2NicPhysicalPortsToHclTerraform(struct?: BaremetalServerV2NicPhysicalPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BaremetalServerV2NicPhysicalPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2NicPhysicalPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2NicPhysicalPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attached_ports - computed: true, optional: false, required: false
  private _attachedPorts = new BaremetalServerV2NicPhysicalPortsAttachedPortsList(this, "attached_ports", false);
  public get attachedPorts() {
    return this._attachedPorts;
  }

  // hardware_id - computed: true, optional: false, required: false
  public get hardwareId() {
    return this.getStringAttribute('hardware_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mac_addr - computed: true, optional: false, required: false
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }

  // network_physical_port_id - computed: true, optional: false, required: false
  public get networkPhysicalPortId() {
    return this.getStringAttribute('network_physical_port_id');
  }

  // plane - computed: true, optional: false, required: false
  public get plane() {
    return this.getStringAttribute('plane');
  }
}

export class BaremetalServerV2NicPhysicalPortsList extends cdktf.ComplexList {

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
  public get(index: number): BaremetalServerV2NicPhysicalPortsOutputReference {
    return new BaremetalServerV2NicPhysicalPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2Filesystems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#fs_type BaremetalServerV2#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#label BaremetalServerV2#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#mount_point BaremetalServerV2#mount_point}
  */
  readonly mountPoint?: string;
}

export function baremetalServerV2FilesystemsToTerraform(struct?: BaremetalServerV2Filesystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    label: cdktf.stringToTerraform(struct!.label),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function baremetalServerV2FilesystemsToHclTerraform(struct?: BaremetalServerV2Filesystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BaremetalServerV2FilesystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2Filesystems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2Filesystems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._label = undefined;
      this._mountPoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._label = value.label;
      this._mountPoint = value.mountPoint;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // mount_point - computed: false, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }
}

export class BaremetalServerV2FilesystemsList extends cdktf.ComplexList {
  public internalValue? : BaremetalServerV2Filesystems[] | cdktf.IResolvable

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
  public get(index: number): BaremetalServerV2FilesystemsOutputReference {
    return new BaremetalServerV2FilesystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2LvmVolumeGroupsLogicalVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#lv_label BaremetalServerV2#lv_label}
  */
  readonly lvLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#size BaremetalServerV2#size}
  */
  readonly size?: string;
}

export function baremetalServerV2LvmVolumeGroupsLogicalVolumesToTerraform(struct?: BaremetalServerV2LvmVolumeGroupsLogicalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lv_label: cdktf.stringToTerraform(struct!.lvLabel),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function baremetalServerV2LvmVolumeGroupsLogicalVolumesToHclTerraform(struct?: BaremetalServerV2LvmVolumeGroupsLogicalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lv_label: {
      value: cdktf.stringToHclTerraform(struct!.lvLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BaremetalServerV2LvmVolumeGroupsLogicalVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2LvmVolumeGroupsLogicalVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lvLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lvLabel = this._lvLabel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2LvmVolumeGroupsLogicalVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lvLabel = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lvLabel = value.lvLabel;
      this._size = value.size;
    }
  }

  // lv_label - computed: false, optional: true, required: false
  private _lvLabel?: string; 
  public get lvLabel() {
    return this.getStringAttribute('lv_label');
  }
  public set lvLabel(value: string) {
    this._lvLabel = value;
  }
  public resetLvLabel() {
    this._lvLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lvLabelInput() {
    return this._lvLabel;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class BaremetalServerV2LvmVolumeGroupsLogicalVolumesList extends cdktf.ComplexList {
  public internalValue? : BaremetalServerV2LvmVolumeGroupsLogicalVolumes[] | cdktf.IResolvable

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
  public get(index: number): BaremetalServerV2LvmVolumeGroupsLogicalVolumesOutputReference {
    return new BaremetalServerV2LvmVolumeGroupsLogicalVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2LvmVolumeGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#physical_volume_partition_labels BaremetalServerV2#physical_volume_partition_labels}
  */
  readonly physicalVolumePartitionLabels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#vg_label BaremetalServerV2#vg_label}
  */
  readonly vgLabel?: string;
  /**
  * logical_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#logical_volumes BaremetalServerV2#logical_volumes}
  */
  readonly logicalVolumes?: BaremetalServerV2LvmVolumeGroupsLogicalVolumes[] | cdktf.IResolvable;
}

export function baremetalServerV2LvmVolumeGroupsToTerraform(struct?: BaremetalServerV2LvmVolumeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    physical_volume_partition_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.physicalVolumePartitionLabels),
    vg_label: cdktf.stringToTerraform(struct!.vgLabel),
    logical_volumes: cdktf.listMapper(baremetalServerV2LvmVolumeGroupsLogicalVolumesToTerraform, true)(struct!.logicalVolumes),
  }
}


export function baremetalServerV2LvmVolumeGroupsToHclTerraform(struct?: BaremetalServerV2LvmVolumeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    physical_volume_partition_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.physicalVolumePartitionLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vg_label: {
      value: cdktf.stringToHclTerraform(struct!.vgLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_volumes: {
      value: cdktf.listMapperHcl(baremetalServerV2LvmVolumeGroupsLogicalVolumesToHclTerraform, true)(struct!.logicalVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "BaremetalServerV2LvmVolumeGroupsLogicalVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BaremetalServerV2LvmVolumeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2LvmVolumeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._physicalVolumePartitionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalVolumePartitionLabels = this._physicalVolumePartitionLabels;
    }
    if (this._vgLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.vgLabel = this._vgLabel;
    }
    if (this._logicalVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalVolumes = this._logicalVolumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2LvmVolumeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._physicalVolumePartitionLabels = undefined;
      this._vgLabel = undefined;
      this._logicalVolumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._physicalVolumePartitionLabels = value.physicalVolumePartitionLabels;
      this._vgLabel = value.vgLabel;
      this._logicalVolumes.internalValue = value.logicalVolumes;
    }
  }

  // physical_volume_partition_labels - computed: false, optional: true, required: false
  private _physicalVolumePartitionLabels?: string[]; 
  public get physicalVolumePartitionLabels() {
    return this.getListAttribute('physical_volume_partition_labels');
  }
  public set physicalVolumePartitionLabels(value: string[]) {
    this._physicalVolumePartitionLabels = value;
  }
  public resetPhysicalVolumePartitionLabels() {
    this._physicalVolumePartitionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalVolumePartitionLabelsInput() {
    return this._physicalVolumePartitionLabels;
  }

  // vg_label - computed: false, optional: true, required: false
  private _vgLabel?: string; 
  public get vgLabel() {
    return this.getStringAttribute('vg_label');
  }
  public set vgLabel(value: string) {
    this._vgLabel = value;
  }
  public resetVgLabel() {
    this._vgLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgLabelInput() {
    return this._vgLabel;
  }

  // logical_volumes - computed: false, optional: true, required: false
  private _logicalVolumes = new BaremetalServerV2LvmVolumeGroupsLogicalVolumesList(this, "logical_volumes", false);
  public get logicalVolumes() {
    return this._logicalVolumes;
  }
  public putLogicalVolumes(value: BaremetalServerV2LvmVolumeGroupsLogicalVolumes[] | cdktf.IResolvable) {
    this._logicalVolumes.internalValue = value;
  }
  public resetLogicalVolumes() {
    this._logicalVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalVolumesInput() {
    return this._logicalVolumes.internalValue;
  }
}

export class BaremetalServerV2LvmVolumeGroupsList extends cdktf.ComplexList {
  public internalValue? : BaremetalServerV2LvmVolumeGroups[] | cdktf.IResolvable

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
  public get(index: number): BaremetalServerV2LvmVolumeGroupsOutputReference {
    return new BaremetalServerV2LvmVolumeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2Networks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#fixed_ip BaremetalServerV2#fixed_ip}
  */
  readonly fixedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#plane BaremetalServerV2#plane}
  */
  readonly plane?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#port BaremetalServerV2#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#uuid BaremetalServerV2#uuid}
  */
  readonly uuid?: string;
}

export function baremetalServerV2NetworksToTerraform(struct?: BaremetalServerV2Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_ip: cdktf.stringToTerraform(struct!.fixedIp),
    plane: cdktf.stringToTerraform(struct!.plane),
    port: cdktf.stringToTerraform(struct!.port),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function baremetalServerV2NetworksToHclTerraform(struct?: BaremetalServerV2Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_ip: {
      value: cdktf.stringToHclTerraform(struct!.fixedIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plane: {
      value: cdktf.stringToHclTerraform(struct!.plane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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

export class BaremetalServerV2NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2Networks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIp = this._fixedIp;
    }
    if (this._plane !== undefined) {
      hasAnyValues = true;
      internalValueResult.plane = this._plane;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2Networks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedIp = undefined;
      this._plane = undefined;
      this._port = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedIp = value.fixedIp;
      this._plane = value.plane;
      this._port = value.port;
      this._uuid = value.uuid;
    }
  }

  // fixed_ip - computed: false, optional: true, required: false
  private _fixedIp?: string; 
  public get fixedIp() {
    return this.getStringAttribute('fixed_ip');
  }
  public set fixedIp(value: string) {
    this._fixedIp = value;
  }
  public resetFixedIp() {
    this._fixedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpInput() {
    return this._fixedIp;
  }

  // plane - computed: false, optional: true, required: false
  private _plane?: string; 
  public get plane() {
    return this.getStringAttribute('plane');
  }
  public set plane(value: string) {
    this._plane = value;
  }
  public resetPlane() {
    this._plane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planeInput() {
    return this._plane;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

export class BaremetalServerV2NetworksList extends cdktf.ComplexList {
  public internalValue? : BaremetalServerV2Networks[] | cdktf.IResolvable

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
  public get(index: number): BaremetalServerV2NetworksOutputReference {
    return new BaremetalServerV2NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2Personality {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#contents BaremetalServerV2#contents}
  */
  readonly contents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#path BaremetalServerV2#path}
  */
  readonly path?: string;
}

export function baremetalServerV2PersonalityToTerraform(struct?: BaremetalServerV2Personality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function baremetalServerV2PersonalityToHclTerraform(struct?: BaremetalServerV2Personality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BaremetalServerV2PersonalityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2Personality | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2Personality | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: true, required: false
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  public resetContents() {
    this._contents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class BaremetalServerV2PersonalityList extends cdktf.ComplexList {
  public internalValue? : BaremetalServerV2Personality[] | cdktf.IResolvable

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
  public get(index: number): BaremetalServerV2PersonalityOutputReference {
    return new BaremetalServerV2PersonalityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2RaidArraysPartitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#lvm BaremetalServerV2#lvm}
  */
  readonly lvm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#partition_label BaremetalServerV2#partition_label}
  */
  readonly partitionLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#size BaremetalServerV2#size}
  */
  readonly size?: string;
}

export function baremetalServerV2RaidArraysPartitionsToTerraform(struct?: BaremetalServerV2RaidArraysPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lvm: cdktf.booleanToTerraform(struct!.lvm),
    partition_label: cdktf.stringToTerraform(struct!.partitionLabel),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function baremetalServerV2RaidArraysPartitionsToHclTerraform(struct?: BaremetalServerV2RaidArraysPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lvm: {
      value: cdktf.booleanToHclTerraform(struct!.lvm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partition_label: {
      value: cdktf.stringToHclTerraform(struct!.partitionLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BaremetalServerV2RaidArraysPartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2RaidArraysPartitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lvm !== undefined) {
      hasAnyValues = true;
      internalValueResult.lvm = this._lvm;
    }
    if (this._partitionLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionLabel = this._partitionLabel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2RaidArraysPartitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lvm = undefined;
      this._partitionLabel = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lvm = value.lvm;
      this._partitionLabel = value.partitionLabel;
      this._size = value.size;
    }
  }

  // lvm - computed: false, optional: true, required: false
  private _lvm?: boolean | cdktf.IResolvable; 
  public get lvm() {
    return this.getBooleanAttribute('lvm');
  }
  public set lvm(value: boolean | cdktf.IResolvable) {
    this._lvm = value;
  }
  public resetLvm() {
    this._lvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lvmInput() {
    return this._lvm;
  }

  // partition_label - computed: false, optional: true, required: false
  private _partitionLabel?: string; 
  public get partitionLabel() {
    return this.getStringAttribute('partition_label');
  }
  public set partitionLabel(value: string) {
    this._partitionLabel = value;
  }
  public resetPartitionLabel() {
    this._partitionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionLabelInput() {
    return this._partitionLabel;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class BaremetalServerV2RaidArraysPartitionsList extends cdktf.ComplexList {
  public internalValue? : BaremetalServerV2RaidArraysPartitions[] | cdktf.IResolvable

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
  public get(index: number): BaremetalServerV2RaidArraysPartitionsOutputReference {
    return new BaremetalServerV2RaidArraysPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2RaidArrays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#disk_hardware_ids BaremetalServerV2#disk_hardware_ids}
  */
  readonly diskHardwareIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#primary_storage BaremetalServerV2#primary_storage}
  */
  readonly primaryStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#raid_card_hardware_id BaremetalServerV2#raid_card_hardware_id}
  */
  readonly raidCardHardwareId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#raid_level BaremetalServerV2#raid_level}
  */
  readonly raidLevel?: number;
  /**
  * partitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#partitions BaremetalServerV2#partitions}
  */
  readonly partitions?: BaremetalServerV2RaidArraysPartitions[] | cdktf.IResolvable;
}

export function baremetalServerV2RaidArraysToTerraform(struct?: BaremetalServerV2RaidArrays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_hardware_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.diskHardwareIds),
    primary_storage: cdktf.booleanToTerraform(struct!.primaryStorage),
    raid_card_hardware_id: cdktf.stringToTerraform(struct!.raidCardHardwareId),
    raid_level: cdktf.numberToTerraform(struct!.raidLevel),
    partitions: cdktf.listMapper(baremetalServerV2RaidArraysPartitionsToTerraform, true)(struct!.partitions),
  }
}


export function baremetalServerV2RaidArraysToHclTerraform(struct?: BaremetalServerV2RaidArrays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_hardware_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.diskHardwareIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_storage: {
      value: cdktf.booleanToHclTerraform(struct!.primaryStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    raid_card_hardware_id: {
      value: cdktf.stringToHclTerraform(struct!.raidCardHardwareId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raid_level: {
      value: cdktf.numberToHclTerraform(struct!.raidLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partitions: {
      value: cdktf.listMapperHcl(baremetalServerV2RaidArraysPartitionsToHclTerraform, true)(struct!.partitions),
      isBlock: true,
      type: "list",
      storageClassType: "BaremetalServerV2RaidArraysPartitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BaremetalServerV2RaidArraysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BaremetalServerV2RaidArrays | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskHardwareIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskHardwareIds = this._diskHardwareIds;
    }
    if (this._primaryStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryStorage = this._primaryStorage;
    }
    if (this._raidCardHardwareId !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidCardHardwareId = this._raidCardHardwareId;
    }
    if (this._raidLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidLevel = this._raidLevel;
    }
    if (this._partitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2RaidArrays | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskHardwareIds = undefined;
      this._primaryStorage = undefined;
      this._raidCardHardwareId = undefined;
      this._raidLevel = undefined;
      this._partitions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskHardwareIds = value.diskHardwareIds;
      this._primaryStorage = value.primaryStorage;
      this._raidCardHardwareId = value.raidCardHardwareId;
      this._raidLevel = value.raidLevel;
      this._partitions.internalValue = value.partitions;
    }
  }

  // disk_hardware_ids - computed: false, optional: true, required: false
  private _diskHardwareIds?: string[]; 
  public get diskHardwareIds() {
    return this.getListAttribute('disk_hardware_ids');
  }
  public set diskHardwareIds(value: string[]) {
    this._diskHardwareIds = value;
  }
  public resetDiskHardwareIds() {
    this._diskHardwareIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskHardwareIdsInput() {
    return this._diskHardwareIds;
  }

  // primary_storage - computed: false, optional: true, required: false
  private _primaryStorage?: boolean | cdktf.IResolvable; 
  public get primaryStorage() {
    return this.getBooleanAttribute('primary_storage');
  }
  public set primaryStorage(value: boolean | cdktf.IResolvable) {
    this._primaryStorage = value;
  }
  public resetPrimaryStorage() {
    this._primaryStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryStorageInput() {
    return this._primaryStorage;
  }

  // raid_card_hardware_id - computed: false, optional: true, required: false
  private _raidCardHardwareId?: string; 
  public get raidCardHardwareId() {
    return this.getStringAttribute('raid_card_hardware_id');
  }
  public set raidCardHardwareId(value: string) {
    this._raidCardHardwareId = value;
  }
  public resetRaidCardHardwareId() {
    this._raidCardHardwareId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidCardHardwareIdInput() {
    return this._raidCardHardwareId;
  }

  // raid_level - computed: false, optional: true, required: false
  private _raidLevel?: number; 
  public get raidLevel() {
    return this.getNumberAttribute('raid_level');
  }
  public set raidLevel(value: number) {
    this._raidLevel = value;
  }
  public resetRaidLevel() {
    this._raidLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidLevelInput() {
    return this._raidLevel;
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions = new BaremetalServerV2RaidArraysPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: BaremetalServerV2RaidArraysPartitions[] | cdktf.IResolvable) {
    this._partitions.internalValue = value;
  }
  public resetPartitions() {
    this._partitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions.internalValue;
  }
}

export class BaremetalServerV2RaidArraysList extends cdktf.ComplexList {
  public internalValue? : BaremetalServerV2RaidArrays[] | cdktf.IResolvable

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
  public get(index: number): BaremetalServerV2RaidArraysOutputReference {
    return new BaremetalServerV2RaidArraysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BaremetalServerV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#create BaremetalServerV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#delete BaremetalServerV2#delete}
  */
  readonly delete?: string;
}

export function baremetalServerV2TimeoutsToTerraform(struct?: BaremetalServerV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function baremetalServerV2TimeoutsToHclTerraform(struct?: BaremetalServerV2Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BaremetalServerV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BaremetalServerV2Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaremetalServerV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2 ecl_baremetal_server_v2}
*/
export class BaremetalServerV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_baremetal_server_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BaremetalServerV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BaremetalServerV2 to import
  * @param importFromId The id of the existing BaremetalServerV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BaremetalServerV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_baremetal_server_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/baremetal_server_v2 ecl_baremetal_server_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BaremetalServerV2Config
  */
  public constructor(scope: Construct, id: string, config: BaremetalServerV2Config) {
    super(scope, id, {
      terraformResourceType: 'ecl_baremetal_server_v2',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPass = config.adminPass;
    this._availabilityZone = config.availabilityZone;
    this._flavorId = config.flavorId;
    this._flavorName = config.flavorName;
    this._id = config.id;
    this._imageId = config.imageId;
    this._imageName = config.imageName;
    this._keyPair = config.keyPair;
    this._metadata = config.metadata;
    this._name = config.name;
    this._userData = config.userData;
    this._filesystems.internalValue = config.filesystems;
    this._lvmVolumeGroups.internalValue = config.lvmVolumeGroups;
    this._networks.internalValue = config.networks;
    this._personality.internalValue = config.personality;
    this._raidArrays.internalValue = config.raidArrays;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_pass - computed: false, optional: true, required: false
  private _adminPass?: string; 
  public get adminPass() {
    return this.getStringAttribute('admin_pass');
  }
  public set adminPass(value: string) {
    this._adminPass = value;
  }
  public resetAdminPass() {
    this._adminPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPassInput() {
    return this._adminPass;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // flavor_id - computed: false, optional: true, required: false
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // flavor_name - computed: false, optional: true, required: false
  private _flavorName?: string; 
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
  }
  public set flavorName(value: string) {
    this._flavorName = value;
  }
  public resetFlavorName() {
    this._flavorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorNameInput() {
    return this._flavorName;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // nic_physical_ports - computed: true, optional: false, required: false
  private _nicPhysicalPorts = new BaremetalServerV2NicPhysicalPortsList(this, "nic_physical_ports", false);
  public get nicPhysicalPorts() {
    return this._nicPhysicalPorts;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // filesystems - computed: false, optional: true, required: false
  private _filesystems = new BaremetalServerV2FilesystemsList(this, "filesystems", false);
  public get filesystems() {
    return this._filesystems;
  }
  public putFilesystems(value: BaremetalServerV2Filesystems[] | cdktf.IResolvable) {
    this._filesystems.internalValue = value;
  }
  public resetFilesystems() {
    this._filesystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemsInput() {
    return this._filesystems.internalValue;
  }

  // lvm_volume_groups - computed: false, optional: true, required: false
  private _lvmVolumeGroups = new BaremetalServerV2LvmVolumeGroupsList(this, "lvm_volume_groups", false);
  public get lvmVolumeGroups() {
    return this._lvmVolumeGroups;
  }
  public putLvmVolumeGroups(value: BaremetalServerV2LvmVolumeGroups[] | cdktf.IResolvable) {
    this._lvmVolumeGroups.internalValue = value;
  }
  public resetLvmVolumeGroups() {
    this._lvmVolumeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lvmVolumeGroupsInput() {
    return this._lvmVolumeGroups.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new BaremetalServerV2NetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: BaremetalServerV2Networks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // personality - computed: false, optional: true, required: false
  private _personality = new BaremetalServerV2PersonalityList(this, "personality", false);
  public get personality() {
    return this._personality;
  }
  public putPersonality(value: BaremetalServerV2Personality[] | cdktf.IResolvable) {
    this._personality.internalValue = value;
  }
  public resetPersonality() {
    this._personality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalityInput() {
    return this._personality.internalValue;
  }

  // raid_arrays - computed: false, optional: true, required: false
  private _raidArrays = new BaremetalServerV2RaidArraysList(this, "raid_arrays", false);
  public get raidArrays() {
    return this._raidArrays;
  }
  public putRaidArrays(value: BaremetalServerV2RaidArrays[] | cdktf.IResolvable) {
    this._raidArrays.internalValue = value;
  }
  public resetRaidArrays() {
    this._raidArrays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidArraysInput() {
    return this._raidArrays.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BaremetalServerV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BaremetalServerV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      flavor_name: cdktf.stringToTerraform(this._flavorName),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_name: cdktf.stringToTerraform(this._imageName),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      user_data: cdktf.stringToTerraform(this._userData),
      filesystems: cdktf.listMapper(baremetalServerV2FilesystemsToTerraform, true)(this._filesystems.internalValue),
      lvm_volume_groups: cdktf.listMapper(baremetalServerV2LvmVolumeGroupsToTerraform, true)(this._lvmVolumeGroups.internalValue),
      networks: cdktf.listMapper(baremetalServerV2NetworksToTerraform, true)(this._networks.internalValue),
      personality: cdktf.listMapper(baremetalServerV2PersonalityToTerraform, true)(this._personality.internalValue),
      raid_arrays: cdktf.listMapper(baremetalServerV2RaidArraysToTerraform, true)(this._raidArrays.internalValue),
      timeouts: baremetalServerV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_pass: {
        value: cdktf.stringToHclTerraform(this._adminPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_name: {
        value: cdktf.stringToHclTerraform(this._flavorName),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair: {
        value: cdktf.stringToHclTerraform(this._keyPair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filesystems: {
        value: cdktf.listMapperHcl(baremetalServerV2FilesystemsToHclTerraform, true)(this._filesystems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BaremetalServerV2FilesystemsList",
      },
      lvm_volume_groups: {
        value: cdktf.listMapperHcl(baremetalServerV2LvmVolumeGroupsToHclTerraform, true)(this._lvmVolumeGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BaremetalServerV2LvmVolumeGroupsList",
      },
      networks: {
        value: cdktf.listMapperHcl(baremetalServerV2NetworksToHclTerraform, true)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BaremetalServerV2NetworksList",
      },
      personality: {
        value: cdktf.listMapperHcl(baremetalServerV2PersonalityToHclTerraform, true)(this._personality.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BaremetalServerV2PersonalityList",
      },
      raid_arrays: {
        value: cdktf.listMapperHcl(baremetalServerV2RaidArraysToHclTerraform, true)(this._raidArrays.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BaremetalServerV2RaidArraysList",
      },
      timeouts: {
        value: baremetalServerV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BaremetalServerV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
