// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudBridgeAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}
  */
  readonly assetSourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}
  */
  readonly assetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}
  */
  readonly externalAssetKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}
  */
  readonly inventoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}
  */
  readonly sourceKey: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#compute CloudBridgeAsset#compute}
  */
  readonly compute?: CloudBridgeAssetCompute;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#timeouts CloudBridgeAsset#timeouts}
  */
  readonly timeouts?: CloudBridgeAssetTimeouts;
  /**
  * vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#vm CloudBridgeAsset#vm}
  */
  readonly vm?: CloudBridgeAssetVm;
  /**
  * vmware_vcenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#vmware_vcenter CloudBridgeAsset#vmware_vcenter}
  */
  readonly vmwareVcenter?: CloudBridgeAssetVmwareVcenter;
  /**
  * vmware_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#vmware_vm CloudBridgeAsset#vmware_vm}
  */
  readonly vmwareVm?: CloudBridgeAssetVmwareVm;
}
export interface CloudBridgeAssetComputeDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}
  */
  readonly bootOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}
  */
  readonly persistentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}
  */
  readonly sizeInMbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}
  */
  readonly uuidLun?: string;
}

export function cloudBridgeAssetComputeDisksToTerraform(struct?: CloudBridgeAssetComputeDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_order: cdktf.numberToTerraform(struct!.bootOrder),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_mode: cdktf.stringToTerraform(struct!.persistentMode),
    size_in_mbs: cdktf.stringToTerraform(struct!.sizeInMbs),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    uuid_lun: cdktf.stringToTerraform(struct!.uuidLun),
  }
}


export function cloudBridgeAssetComputeDisksToHclTerraform(struct?: CloudBridgeAssetComputeDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_order: {
      value: cdktf.numberToHclTerraform(struct!.bootOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    persistent_mode: {
      value: cdktf.stringToHclTerraform(struct!.persistentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_mbs: {
      value: cdktf.stringToHclTerraform(struct!.sizeInMbs),
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
    uuid_lun: {
      value: cdktf.stringToHclTerraform(struct!.uuidLun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetComputeDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudBridgeAssetComputeDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentMode = this._persistentMode;
    }
    if (this._sizeInMbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInMbs = this._sizeInMbs;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._uuidLun !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuidLun = this._uuidLun;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetComputeDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootOrder = undefined;
      this._location = undefined;
      this._name = undefined;
      this._persistentMode = undefined;
      this._sizeInMbs = undefined;
      this._uuid = undefined;
      this._uuidLun = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootOrder = value.bootOrder;
      this._location = value.location;
      this._name = value.name;
      this._persistentMode = value.persistentMode;
      this._sizeInMbs = value.sizeInMbs;
      this._uuid = value.uuid;
      this._uuidLun = value.uuidLun;
    }
  }

  // boot_order - computed: true, optional: true, required: false
  private _bootOrder?: number; 
  public get bootOrder() {
    return this.getNumberAttribute('boot_order');
  }
  public set bootOrder(value: number) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // persistent_mode - computed: true, optional: true, required: false
  private _persistentMode?: string; 
  public get persistentMode() {
    return this.getStringAttribute('persistent_mode');
  }
  public set persistentMode(value: string) {
    this._persistentMode = value;
  }
  public resetPersistentMode() {
    this._persistentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentModeInput() {
    return this._persistentMode;
  }

  // size_in_mbs - computed: true, optional: true, required: false
  private _sizeInMbs?: string; 
  public get sizeInMbs() {
    return this.getStringAttribute('size_in_mbs');
  }
  public set sizeInMbs(value: string) {
    this._sizeInMbs = value;
  }
  public resetSizeInMbs() {
    this._sizeInMbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInMbsInput() {
    return this._sizeInMbs;
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

  // uuid_lun - computed: true, optional: true, required: false
  private _uuidLun?: string; 
  public get uuidLun() {
    return this.getStringAttribute('uuid_lun');
  }
  public set uuidLun(value: string) {
    this._uuidLun = value;
  }
  public resetUuidLun() {
    this._uuidLun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidLunInput() {
    return this._uuidLun;
  }
}

export class CloudBridgeAssetComputeDisksList extends cdktf.ComplexList {
  public internalValue? : CloudBridgeAssetComputeDisks[] | cdktf.IResolvable

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
  public get(index: number): CloudBridgeAssetComputeDisksOutputReference {
    return new CloudBridgeAssetComputeDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudBridgeAssetComputeGpuDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}
  */
  readonly coresCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}
  */
  readonly manufacturer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}
  */
  readonly memoryInMbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}
  */
  readonly name?: string;
}

export function cloudBridgeAssetComputeGpuDevicesToTerraform(struct?: CloudBridgeAssetComputeGpuDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores_count: cdktf.numberToTerraform(struct!.coresCount),
    description: cdktf.stringToTerraform(struct!.description),
    manufacturer: cdktf.stringToTerraform(struct!.manufacturer),
    memory_in_mbs: cdktf.stringToTerraform(struct!.memoryInMbs),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudBridgeAssetComputeGpuDevicesToHclTerraform(struct?: CloudBridgeAssetComputeGpuDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores_count: {
      value: cdktf.numberToHclTerraform(struct!.coresCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manufacturer: {
      value: cdktf.stringToHclTerraform(struct!.manufacturer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_mbs: {
      value: cdktf.stringToHclTerraform(struct!.memoryInMbs),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetComputeGpuDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudBridgeAssetComputeGpuDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coresCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coresCount = this._coresCount;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._manufacturer !== undefined) {
      hasAnyValues = true;
      internalValueResult.manufacturer = this._manufacturer;
    }
    if (this._memoryInMbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInMbs = this._memoryInMbs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetComputeGpuDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coresCount = undefined;
      this._description = undefined;
      this._manufacturer = undefined;
      this._memoryInMbs = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coresCount = value.coresCount;
      this._description = value.description;
      this._manufacturer = value.manufacturer;
      this._memoryInMbs = value.memoryInMbs;
      this._name = value.name;
    }
  }

  // cores_count - computed: true, optional: true, required: false
  private _coresCount?: number; 
  public get coresCount() {
    return this.getNumberAttribute('cores_count');
  }
  public set coresCount(value: number) {
    this._coresCount = value;
  }
  public resetCoresCount() {
    this._coresCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresCountInput() {
    return this._coresCount;
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

  // manufacturer - computed: true, optional: true, required: false
  private _manufacturer?: string; 
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }
  public set manufacturer(value: string) {
    this._manufacturer = value;
  }
  public resetManufacturer() {
    this._manufacturer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerInput() {
    return this._manufacturer;
  }

  // memory_in_mbs - computed: true, optional: true, required: false
  private _memoryInMbs?: string; 
  public get memoryInMbs() {
    return this.getStringAttribute('memory_in_mbs');
  }
  public set memoryInMbs(value: string) {
    this._memoryInMbs = value;
  }
  public resetMemoryInMbs() {
    this._memoryInMbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInMbsInput() {
    return this._memoryInMbs;
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
}

export class CloudBridgeAssetComputeGpuDevicesList extends cdktf.ComplexList {
  public internalValue? : CloudBridgeAssetComputeGpuDevices[] | cdktf.IResolvable

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
  public get(index: number): CloudBridgeAssetComputeGpuDevicesOutputReference {
    return new CloudBridgeAssetComputeGpuDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudBridgeAssetComputeNics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}
  */
  readonly macAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}
  */
  readonly networkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}
  */
  readonly switchName?: string;
}

export function cloudBridgeAssetComputeNicsToTerraform(struct?: CloudBridgeAssetComputeNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    label: cdktf.stringToTerraform(struct!.label),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mac_address_type: cdktf.stringToTerraform(struct!.macAddressType),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    switch_name: cdktf.stringToTerraform(struct!.switchName),
  }
}


export function cloudBridgeAssetComputeNicsToHclTerraform(struct?: CloudBridgeAssetComputeNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address_type: {
      value: cdktf.stringToHclTerraform(struct!.macAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_name: {
      value: cdktf.stringToHclTerraform(struct!.switchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetComputeNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudBridgeAssetComputeNics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._macAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressType = this._macAddressType;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._switchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchName = this._switchName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetComputeNics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddresses = undefined;
      this._label = undefined;
      this._macAddress = undefined;
      this._macAddressType = undefined;
      this._networkName = undefined;
      this._switchName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddresses = value.ipAddresses;
      this._label = value.label;
      this._macAddress = value.macAddress;
      this._macAddressType = value.macAddressType;
      this._networkName = value.networkName;
      this._switchName = value.switchName;
    }
  }

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // label - computed: true, optional: true, required: false
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

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mac_address_type - computed: true, optional: true, required: false
  private _macAddressType?: string; 
  public get macAddressType() {
    return this.getStringAttribute('mac_address_type');
  }
  public set macAddressType(value: string) {
    this._macAddressType = value;
  }
  public resetMacAddressType() {
    this._macAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressTypeInput() {
    return this._macAddressType;
  }

  // network_name - computed: true, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // switch_name - computed: true, optional: true, required: false
  private _switchName?: string; 
  public get switchName() {
    return this.getStringAttribute('switch_name');
  }
  public set switchName(value: string) {
    this._switchName = value;
  }
  public resetSwitchName() {
    this._switchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchNameInput() {
    return this._switchName;
  }
}

export class CloudBridgeAssetComputeNicsList extends cdktf.ComplexList {
  public internalValue? : CloudBridgeAssetComputeNics[] | cdktf.IResolvable

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
  public get(index: number): CloudBridgeAssetComputeNicsOutputReference {
    return new CloudBridgeAssetComputeNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudBridgeAssetComputeNvdimmController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}
  */
  readonly busNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}
  */
  readonly label?: string;
}

export function cloudBridgeAssetComputeNvdimmControllerToTerraform(struct?: CloudBridgeAssetComputeNvdimmControllerOutputReference | CloudBridgeAssetComputeNvdimmController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_number: cdktf.numberToTerraform(struct!.busNumber),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function cloudBridgeAssetComputeNvdimmControllerToHclTerraform(struct?: CloudBridgeAssetComputeNvdimmControllerOutputReference | CloudBridgeAssetComputeNvdimmController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_number: {
      value: cdktf.numberToHclTerraform(struct!.busNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetComputeNvdimmControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBridgeAssetComputeNvdimmController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.busNumber = this._busNumber;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetComputeNvdimmController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._busNumber = undefined;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._busNumber = value.busNumber;
      this._label = value.label;
    }
  }

  // bus_number - computed: true, optional: true, required: false
  private _busNumber?: number; 
  public get busNumber() {
    return this.getNumberAttribute('bus_number');
  }
  public set busNumber(value: number) {
    this._busNumber = value;
  }
  public resetBusNumber() {
    this._busNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busNumberInput() {
    return this._busNumber;
  }

  // label - computed: true, optional: true, required: false
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
}
export interface CloudBridgeAssetComputeNvdimms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}
  */
  readonly controllerKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}
  */
  readonly unitNumber?: number;
}

export function cloudBridgeAssetComputeNvdimmsToTerraform(struct?: CloudBridgeAssetComputeNvdimms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_key: cdktf.numberToTerraform(struct!.controllerKey),
    label: cdktf.stringToTerraform(struct!.label),
    unit_number: cdktf.numberToTerraform(struct!.unitNumber),
  }
}


export function cloudBridgeAssetComputeNvdimmsToHclTerraform(struct?: CloudBridgeAssetComputeNvdimms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_key: {
      value: cdktf.numberToHclTerraform(struct!.controllerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_number: {
      value: cdktf.numberToHclTerraform(struct!.unitNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetComputeNvdimmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudBridgeAssetComputeNvdimms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerKey = this._controllerKey;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._unitNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitNumber = this._unitNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetComputeNvdimms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerKey = undefined;
      this._label = undefined;
      this._unitNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerKey = value.controllerKey;
      this._label = value.label;
      this._unitNumber = value.unitNumber;
    }
  }

  // controller_key - computed: true, optional: true, required: false
  private _controllerKey?: number; 
  public get controllerKey() {
    return this.getNumberAttribute('controller_key');
  }
  public set controllerKey(value: number) {
    this._controllerKey = value;
  }
  public resetControllerKey() {
    this._controllerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerKeyInput() {
    return this._controllerKey;
  }

  // label - computed: true, optional: true, required: false
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

  // unit_number - computed: true, optional: true, required: false
  private _unitNumber?: number; 
  public get unitNumber() {
    return this.getNumberAttribute('unit_number');
  }
  public set unitNumber(value: number) {
    this._unitNumber = value;
  }
  public resetUnitNumber() {
    this._unitNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNumberInput() {
    return this._unitNumber;
  }
}

export class CloudBridgeAssetComputeNvdimmsList extends cdktf.ComplexList {
  public internalValue? : CloudBridgeAssetComputeNvdimms[] | cdktf.IResolvable

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
  public get(index: number): CloudBridgeAssetComputeNvdimmsOutputReference {
    return new CloudBridgeAssetComputeNvdimmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudBridgeAssetComputeScsiController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}
  */
  readonly sharedBus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}
  */
  readonly unitNumber?: number;
}

export function cloudBridgeAssetComputeScsiControllerToTerraform(struct?: CloudBridgeAssetComputeScsiControllerOutputReference | CloudBridgeAssetComputeScsiController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    shared_bus: cdktf.stringToTerraform(struct!.sharedBus),
    unit_number: cdktf.numberToTerraform(struct!.unitNumber),
  }
}


export function cloudBridgeAssetComputeScsiControllerToHclTerraform(struct?: CloudBridgeAssetComputeScsiControllerOutputReference | CloudBridgeAssetComputeScsiController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_bus: {
      value: cdktf.stringToHclTerraform(struct!.sharedBus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_number: {
      value: cdktf.numberToHclTerraform(struct!.unitNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetComputeScsiControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBridgeAssetComputeScsiController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._sharedBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedBus = this._sharedBus;
    }
    if (this._unitNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitNumber = this._unitNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetComputeScsiController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._sharedBus = undefined;
      this._unitNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._sharedBus = value.sharedBus;
      this._unitNumber = value.unitNumber;
    }
  }

  // label - computed: true, optional: true, required: false
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

  // shared_bus - computed: true, optional: true, required: false
  private _sharedBus?: string; 
  public get sharedBus() {
    return this.getStringAttribute('shared_bus');
  }
  public set sharedBus(value: string) {
    this._sharedBus = value;
  }
  public resetSharedBus() {
    this._sharedBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedBusInput() {
    return this._sharedBus;
  }

  // unit_number - computed: true, optional: true, required: false
  private _unitNumber?: number; 
  public get unitNumber() {
    return this.getNumberAttribute('unit_number');
  }
  public set unitNumber(value: number) {
    this._unitNumber = value;
  }
  public resetUnitNumber() {
    this._unitNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNumberInput() {
    return this._unitNumber;
  }
}
export interface CloudBridgeAssetCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}
  */
  readonly connectedNetworks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}
  */
  readonly coresCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}
  */
  readonly cpuModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}
  */
  readonly disksCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}
  */
  readonly firmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}
  */
  readonly gpuDevicesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}
  */
  readonly guestState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}
  */
  readonly hardwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}
  */
  readonly isPmemEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}
  */
  readonly isTpmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}
  */
  readonly latencySensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}
  */
  readonly memoryInMbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}
  */
  readonly nicsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}
  */
  readonly pmemInMbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}
  */
  readonly powerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}
  */
  readonly primaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}
  */
  readonly storageProvisionedInMbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}
  */
  readonly threadsPerCoreCount?: number;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#disks CloudBridgeAsset#disks}
  */
  readonly disks?: CloudBridgeAssetComputeDisks[] | cdktf.IResolvable;
  /**
  * gpu_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#gpu_devices CloudBridgeAsset#gpu_devices}
  */
  readonly gpuDevices?: CloudBridgeAssetComputeGpuDevices[] | cdktf.IResolvable;
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#nics CloudBridgeAsset#nics}
  */
  readonly nics?: CloudBridgeAssetComputeNics[] | cdktf.IResolvable;
  /**
  * nvdimm_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#nvdimm_controller CloudBridgeAsset#nvdimm_controller}
  */
  readonly nvdimmController?: CloudBridgeAssetComputeNvdimmController;
  /**
  * nvdimms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#nvdimms CloudBridgeAsset#nvdimms}
  */
  readonly nvdimms?: CloudBridgeAssetComputeNvdimms[] | cdktf.IResolvable;
  /**
  * scsi_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#scsi_controller CloudBridgeAsset#scsi_controller}
  */
  readonly scsiController?: CloudBridgeAssetComputeScsiController;
}

export function cloudBridgeAssetComputeToTerraform(struct?: CloudBridgeAssetComputeOutputReference | CloudBridgeAssetCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected_networks: cdktf.numberToTerraform(struct!.connectedNetworks),
    cores_count: cdktf.numberToTerraform(struct!.coresCount),
    cpu_model: cdktf.stringToTerraform(struct!.cpuModel),
    description: cdktf.stringToTerraform(struct!.description),
    disks_count: cdktf.numberToTerraform(struct!.disksCount),
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    firmware: cdktf.stringToTerraform(struct!.firmware),
    gpu_devices_count: cdktf.numberToTerraform(struct!.gpuDevicesCount),
    guest_state: cdktf.stringToTerraform(struct!.guestState),
    hardware_version: cdktf.stringToTerraform(struct!.hardwareVersion),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    is_pmem_enabled: cdktf.booleanToTerraform(struct!.isPmemEnabled),
    is_tpm_enabled: cdktf.booleanToTerraform(struct!.isTpmEnabled),
    latency_sensitivity: cdktf.stringToTerraform(struct!.latencySensitivity),
    memory_in_mbs: cdktf.stringToTerraform(struct!.memoryInMbs),
    nics_count: cdktf.numberToTerraform(struct!.nicsCount),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    operating_system_version: cdktf.stringToTerraform(struct!.operatingSystemVersion),
    pmem_in_mbs: cdktf.stringToTerraform(struct!.pmemInMbs),
    power_state: cdktf.stringToTerraform(struct!.powerState),
    primary_ip: cdktf.stringToTerraform(struct!.primaryIp),
    storage_provisioned_in_mbs: cdktf.stringToTerraform(struct!.storageProvisionedInMbs),
    threads_per_core_count: cdktf.numberToTerraform(struct!.threadsPerCoreCount),
    disks: cdktf.listMapper(cloudBridgeAssetComputeDisksToTerraform, true)(struct!.disks),
    gpu_devices: cdktf.listMapper(cloudBridgeAssetComputeGpuDevicesToTerraform, true)(struct!.gpuDevices),
    nics: cdktf.listMapper(cloudBridgeAssetComputeNicsToTerraform, true)(struct!.nics),
    nvdimm_controller: cloudBridgeAssetComputeNvdimmControllerToTerraform(struct!.nvdimmController),
    nvdimms: cdktf.listMapper(cloudBridgeAssetComputeNvdimmsToTerraform, true)(struct!.nvdimms),
    scsi_controller: cloudBridgeAssetComputeScsiControllerToTerraform(struct!.scsiController),
  }
}


export function cloudBridgeAssetComputeToHclTerraform(struct?: CloudBridgeAssetComputeOutputReference | CloudBridgeAssetCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected_networks: {
      value: cdktf.numberToHclTerraform(struct!.connectedNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cores_count: {
      value: cdktf.numberToHclTerraform(struct!.coresCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_model: {
      value: cdktf.stringToHclTerraform(struct!.cpuModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disks_count: {
      value: cdktf.numberToHclTerraform(struct!.disksCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware: {
      value: cdktf.stringToHclTerraform(struct!.firmware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_devices_count: {
      value: cdktf.numberToHclTerraform(struct!.gpuDevicesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    guest_state: {
      value: cdktf.stringToHclTerraform(struct!.guestState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_version: {
      value: cdktf.stringToHclTerraform(struct!.hardwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_pmem_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPmemEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_tpm_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isTpmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    latency_sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.latencySensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_mbs: {
      value: cdktf.stringToHclTerraform(struct!.memoryInMbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nics_count: {
      value: cdktf.numberToHclTerraform(struct!.nicsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system_version: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pmem_in_mbs: {
      value: cdktf.stringToHclTerraform(struct!.pmemInMbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_state: {
      value: cdktf.stringToHclTerraform(struct!.powerState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_ip: {
      value: cdktf.stringToHclTerraform(struct!.primaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_provisioned_in_mbs: {
      value: cdktf.stringToHclTerraform(struct!.storageProvisionedInMbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threads_per_core_count: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disks: {
      value: cdktf.listMapperHcl(cloudBridgeAssetComputeDisksToHclTerraform, true)(struct!.disks),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBridgeAssetComputeDisksList",
    },
    gpu_devices: {
      value: cdktf.listMapperHcl(cloudBridgeAssetComputeGpuDevicesToHclTerraform, true)(struct!.gpuDevices),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBridgeAssetComputeGpuDevicesList",
    },
    nics: {
      value: cdktf.listMapperHcl(cloudBridgeAssetComputeNicsToHclTerraform, true)(struct!.nics),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBridgeAssetComputeNicsList",
    },
    nvdimm_controller: {
      value: cloudBridgeAssetComputeNvdimmControllerToHclTerraform(struct!.nvdimmController),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBridgeAssetComputeNvdimmControllerList",
    },
    nvdimms: {
      value: cdktf.listMapperHcl(cloudBridgeAssetComputeNvdimmsToHclTerraform, true)(struct!.nvdimms),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBridgeAssetComputeNvdimmsList",
    },
    scsi_controller: {
      value: cloudBridgeAssetComputeScsiControllerToHclTerraform(struct!.scsiController),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBridgeAssetComputeScsiControllerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBridgeAssetCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectedNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedNetworks = this._connectedNetworks;
    }
    if (this._coresCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coresCount = this._coresCount;
    }
    if (this._cpuModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuModel = this._cpuModel;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disksCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.disksCount = this._disksCount;
    }
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._firmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmware = this._firmware;
    }
    if (this._gpuDevicesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDevicesCount = this._gpuDevicesCount;
    }
    if (this._guestState !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestState = this._guestState;
    }
    if (this._hardwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareVersion = this._hardwareVersion;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._isPmemEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPmemEnabled = this._isPmemEnabled;
    }
    if (this._isTpmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTpmEnabled = this._isTpmEnabled;
    }
    if (this._latencySensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencySensitivity = this._latencySensitivity;
    }
    if (this._memoryInMbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInMbs = this._memoryInMbs;
    }
    if (this._nicsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicsCount = this._nicsCount;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._operatingSystemVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemVersion = this._operatingSystemVersion;
    }
    if (this._pmemInMbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmemInMbs = this._pmemInMbs;
    }
    if (this._powerState !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerState = this._powerState;
    }
    if (this._primaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIp = this._primaryIp;
    }
    if (this._storageProvisionedInMbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageProvisionedInMbs = this._storageProvisionedInMbs;
    }
    if (this._threadsPerCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCoreCount = this._threadsPerCoreCount;
    }
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._gpuDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDevices = this._gpuDevices?.internalValue;
    }
    if (this._nics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nics = this._nics?.internalValue;
    }
    if (this._nvdimmController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvdimmController = this._nvdimmController?.internalValue;
    }
    if (this._nvdimms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvdimms = this._nvdimms?.internalValue;
    }
    if (this._scsiController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsiController = this._scsiController?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectedNetworks = undefined;
      this._coresCount = undefined;
      this._cpuModel = undefined;
      this._description = undefined;
      this._disksCount = undefined;
      this._dnsName = undefined;
      this._firmware = undefined;
      this._gpuDevicesCount = undefined;
      this._guestState = undefined;
      this._hardwareVersion = undefined;
      this._hostName = undefined;
      this._isPmemEnabled = undefined;
      this._isTpmEnabled = undefined;
      this._latencySensitivity = undefined;
      this._memoryInMbs = undefined;
      this._nicsCount = undefined;
      this._operatingSystem = undefined;
      this._operatingSystemVersion = undefined;
      this._pmemInMbs = undefined;
      this._powerState = undefined;
      this._primaryIp = undefined;
      this._storageProvisionedInMbs = undefined;
      this._threadsPerCoreCount = undefined;
      this._disks.internalValue = undefined;
      this._gpuDevices.internalValue = undefined;
      this._nics.internalValue = undefined;
      this._nvdimmController.internalValue = undefined;
      this._nvdimms.internalValue = undefined;
      this._scsiController.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectedNetworks = value.connectedNetworks;
      this._coresCount = value.coresCount;
      this._cpuModel = value.cpuModel;
      this._description = value.description;
      this._disksCount = value.disksCount;
      this._dnsName = value.dnsName;
      this._firmware = value.firmware;
      this._gpuDevicesCount = value.gpuDevicesCount;
      this._guestState = value.guestState;
      this._hardwareVersion = value.hardwareVersion;
      this._hostName = value.hostName;
      this._isPmemEnabled = value.isPmemEnabled;
      this._isTpmEnabled = value.isTpmEnabled;
      this._latencySensitivity = value.latencySensitivity;
      this._memoryInMbs = value.memoryInMbs;
      this._nicsCount = value.nicsCount;
      this._operatingSystem = value.operatingSystem;
      this._operatingSystemVersion = value.operatingSystemVersion;
      this._pmemInMbs = value.pmemInMbs;
      this._powerState = value.powerState;
      this._primaryIp = value.primaryIp;
      this._storageProvisionedInMbs = value.storageProvisionedInMbs;
      this._threadsPerCoreCount = value.threadsPerCoreCount;
      this._disks.internalValue = value.disks;
      this._gpuDevices.internalValue = value.gpuDevices;
      this._nics.internalValue = value.nics;
      this._nvdimmController.internalValue = value.nvdimmController;
      this._nvdimms.internalValue = value.nvdimms;
      this._scsiController.internalValue = value.scsiController;
    }
  }

  // connected_networks - computed: true, optional: true, required: false
  private _connectedNetworks?: number; 
  public get connectedNetworks() {
    return this.getNumberAttribute('connected_networks');
  }
  public set connectedNetworks(value: number) {
    this._connectedNetworks = value;
  }
  public resetConnectedNetworks() {
    this._connectedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedNetworksInput() {
    return this._connectedNetworks;
  }

  // cores_count - computed: true, optional: true, required: false
  private _coresCount?: number; 
  public get coresCount() {
    return this.getNumberAttribute('cores_count');
  }
  public set coresCount(value: number) {
    this._coresCount = value;
  }
  public resetCoresCount() {
    this._coresCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresCountInput() {
    return this._coresCount;
  }

  // cpu_model - computed: true, optional: true, required: false
  private _cpuModel?: string; 
  public get cpuModel() {
    return this.getStringAttribute('cpu_model');
  }
  public set cpuModel(value: string) {
    this._cpuModel = value;
  }
  public resetCpuModel() {
    this._cpuModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuModelInput() {
    return this._cpuModel;
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

  // disks_count - computed: true, optional: true, required: false
  private _disksCount?: number; 
  public get disksCount() {
    return this.getNumberAttribute('disks_count');
  }
  public set disksCount(value: number) {
    this._disksCount = value;
  }
  public resetDisksCount() {
    this._disksCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksCountInput() {
    return this._disksCount;
  }

  // dns_name - computed: true, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // firmware - computed: true, optional: true, required: false
  private _firmware?: string; 
  public get firmware() {
    return this.getStringAttribute('firmware');
  }
  public set firmware(value: string) {
    this._firmware = value;
  }
  public resetFirmware() {
    this._firmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware;
  }

  // gpu_devices_count - computed: true, optional: true, required: false
  private _gpuDevicesCount?: number; 
  public get gpuDevicesCount() {
    return this.getNumberAttribute('gpu_devices_count');
  }
  public set gpuDevicesCount(value: number) {
    this._gpuDevicesCount = value;
  }
  public resetGpuDevicesCount() {
    this._gpuDevicesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDevicesCountInput() {
    return this._gpuDevicesCount;
  }

  // guest_state - computed: true, optional: true, required: false
  private _guestState?: string; 
  public get guestState() {
    return this.getStringAttribute('guest_state');
  }
  public set guestState(value: string) {
    this._guestState = value;
  }
  public resetGuestState() {
    this._guestState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestStateInput() {
    return this._guestState;
  }

  // hardware_version - computed: true, optional: true, required: false
  private _hardwareVersion?: string; 
  public get hardwareVersion() {
    return this.getStringAttribute('hardware_version');
  }
  public set hardwareVersion(value: string) {
    this._hardwareVersion = value;
  }
  public resetHardwareVersion() {
    this._hardwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareVersionInput() {
    return this._hardwareVersion;
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // is_pmem_enabled - computed: true, optional: true, required: false
  private _isPmemEnabled?: boolean | cdktf.IResolvable; 
  public get isPmemEnabled() {
    return this.getBooleanAttribute('is_pmem_enabled');
  }
  public set isPmemEnabled(value: boolean | cdktf.IResolvable) {
    this._isPmemEnabled = value;
  }
  public resetIsPmemEnabled() {
    this._isPmemEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPmemEnabledInput() {
    return this._isPmemEnabled;
  }

  // is_tpm_enabled - computed: true, optional: true, required: false
  private _isTpmEnabled?: boolean | cdktf.IResolvable; 
  public get isTpmEnabled() {
    return this.getBooleanAttribute('is_tpm_enabled');
  }
  public set isTpmEnabled(value: boolean | cdktf.IResolvable) {
    this._isTpmEnabled = value;
  }
  public resetIsTpmEnabled() {
    this._isTpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTpmEnabledInput() {
    return this._isTpmEnabled;
  }

  // latency_sensitivity - computed: true, optional: true, required: false
  private _latencySensitivity?: string; 
  public get latencySensitivity() {
    return this.getStringAttribute('latency_sensitivity');
  }
  public set latencySensitivity(value: string) {
    this._latencySensitivity = value;
  }
  public resetLatencySensitivity() {
    this._latencySensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencySensitivityInput() {
    return this._latencySensitivity;
  }

  // memory_in_mbs - computed: true, optional: true, required: false
  private _memoryInMbs?: string; 
  public get memoryInMbs() {
    return this.getStringAttribute('memory_in_mbs');
  }
  public set memoryInMbs(value: string) {
    this._memoryInMbs = value;
  }
  public resetMemoryInMbs() {
    this._memoryInMbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInMbsInput() {
    return this._memoryInMbs;
  }

  // nics_count - computed: true, optional: true, required: false
  private _nicsCount?: number; 
  public get nicsCount() {
    return this.getNumberAttribute('nics_count');
  }
  public set nicsCount(value: number) {
    this._nicsCount = value;
  }
  public resetNicsCount() {
    this._nicsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsCountInput() {
    return this._nicsCount;
  }

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // operating_system_version - computed: true, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }

  // pmem_in_mbs - computed: true, optional: true, required: false
  private _pmemInMbs?: string; 
  public get pmemInMbs() {
    return this.getStringAttribute('pmem_in_mbs');
  }
  public set pmemInMbs(value: string) {
    this._pmemInMbs = value;
  }
  public resetPmemInMbs() {
    this._pmemInMbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmemInMbsInput() {
    return this._pmemInMbs;
  }

  // power_state - computed: true, optional: true, required: false
  private _powerState?: string; 
  public get powerState() {
    return this.getStringAttribute('power_state');
  }
  public set powerState(value: string) {
    this._powerState = value;
  }
  public resetPowerState() {
    this._powerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState;
  }

  // primary_ip - computed: true, optional: true, required: false
  private _primaryIp?: string; 
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
  public set primaryIp(value: string) {
    this._primaryIp = value;
  }
  public resetPrimaryIp() {
    this._primaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpInput() {
    return this._primaryIp;
  }

  // storage_provisioned_in_mbs - computed: true, optional: true, required: false
  private _storageProvisionedInMbs?: string; 
  public get storageProvisionedInMbs() {
    return this.getStringAttribute('storage_provisioned_in_mbs');
  }
  public set storageProvisionedInMbs(value: string) {
    this._storageProvisionedInMbs = value;
  }
  public resetStorageProvisionedInMbs() {
    this._storageProvisionedInMbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProvisionedInMbsInput() {
    return this._storageProvisionedInMbs;
  }

  // threads_per_core_count - computed: true, optional: true, required: false
  private _threadsPerCoreCount?: number; 
  public get threadsPerCoreCount() {
    return this.getNumberAttribute('threads_per_core_count');
  }
  public set threadsPerCoreCount(value: number) {
    this._threadsPerCoreCount = value;
  }
  public resetThreadsPerCoreCount() {
    this._threadsPerCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreCountInput() {
    return this._threadsPerCoreCount;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new CloudBridgeAssetComputeDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: CloudBridgeAssetComputeDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // gpu_devices - computed: false, optional: true, required: false
  private _gpuDevices = new CloudBridgeAssetComputeGpuDevicesList(this, "gpu_devices", false);
  public get gpuDevices() {
    return this._gpuDevices;
  }
  public putGpuDevices(value: CloudBridgeAssetComputeGpuDevices[] | cdktf.IResolvable) {
    this._gpuDevices.internalValue = value;
  }
  public resetGpuDevices() {
    this._gpuDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDevicesInput() {
    return this._gpuDevices.internalValue;
  }

  // nics - computed: false, optional: true, required: false
  private _nics = new CloudBridgeAssetComputeNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }
  public putNics(value: CloudBridgeAssetComputeNics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // nvdimm_controller - computed: false, optional: true, required: false
  private _nvdimmController = new CloudBridgeAssetComputeNvdimmControllerOutputReference(this, "nvdimm_controller");
  public get nvdimmController() {
    return this._nvdimmController;
  }
  public putNvdimmController(value: CloudBridgeAssetComputeNvdimmController) {
    this._nvdimmController.internalValue = value;
  }
  public resetNvdimmController() {
    this._nvdimmController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvdimmControllerInput() {
    return this._nvdimmController.internalValue;
  }

  // nvdimms - computed: false, optional: true, required: false
  private _nvdimms = new CloudBridgeAssetComputeNvdimmsList(this, "nvdimms", false);
  public get nvdimms() {
    return this._nvdimms;
  }
  public putNvdimms(value: CloudBridgeAssetComputeNvdimms[] | cdktf.IResolvable) {
    this._nvdimms.internalValue = value;
  }
  public resetNvdimms() {
    this._nvdimms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvdimmsInput() {
    return this._nvdimms.internalValue;
  }

  // scsi_controller - computed: false, optional: true, required: false
  private _scsiController = new CloudBridgeAssetComputeScsiControllerOutputReference(this, "scsi_controller");
  public get scsiController() {
    return this._scsiController;
  }
  public putScsiController(value: CloudBridgeAssetComputeScsiController) {
    this._scsiController.internalValue = value;
  }
  public resetScsiController() {
    this._scsiController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiControllerInput() {
    return this._scsiController.internalValue;
  }
}
export interface CloudBridgeAssetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}
  */
  readonly update?: string;
}

export function cloudBridgeAssetTimeoutsToTerraform(struct?: CloudBridgeAssetTimeouts | cdktf.IResolvable): any {
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


export function cloudBridgeAssetTimeoutsToHclTerraform(struct?: CloudBridgeAssetTimeouts | cdktf.IResolvable): any {
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

export class CloudBridgeAssetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudBridgeAssetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudBridgeAssetTimeouts | cdktf.IResolvable | undefined) {
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
export interface CloudBridgeAssetVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}
  */
  readonly hypervisorHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}
  */
  readonly hypervisorVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}
  */
  readonly hypervisorVersion?: string;
}

export function cloudBridgeAssetVmToTerraform(struct?: CloudBridgeAssetVmOutputReference | CloudBridgeAssetVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hypervisor_host: cdktf.stringToTerraform(struct!.hypervisorHost),
    hypervisor_vendor: cdktf.stringToTerraform(struct!.hypervisorVendor),
    hypervisor_version: cdktf.stringToTerraform(struct!.hypervisorVersion),
  }
}


export function cloudBridgeAssetVmToHclTerraform(struct?: CloudBridgeAssetVmOutputReference | CloudBridgeAssetVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hypervisor_host: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_vendor: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_version: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBridgeAssetVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hypervisorHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorHost = this._hypervisorHost;
    }
    if (this._hypervisorVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorVendor = this._hypervisorVendor;
    }
    if (this._hypervisorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorVersion = this._hypervisorVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hypervisorHost = undefined;
      this._hypervisorVendor = undefined;
      this._hypervisorVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hypervisorHost = value.hypervisorHost;
      this._hypervisorVendor = value.hypervisorVendor;
      this._hypervisorVersion = value.hypervisorVersion;
    }
  }

  // hypervisor_host - computed: true, optional: true, required: false
  private _hypervisorHost?: string; 
  public get hypervisorHost() {
    return this.getStringAttribute('hypervisor_host');
  }
  public set hypervisorHost(value: string) {
    this._hypervisorHost = value;
  }
  public resetHypervisorHost() {
    this._hypervisorHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorHostInput() {
    return this._hypervisorHost;
  }

  // hypervisor_vendor - computed: true, optional: true, required: false
  private _hypervisorVendor?: string; 
  public get hypervisorVendor() {
    return this.getStringAttribute('hypervisor_vendor');
  }
  public set hypervisorVendor(value: string) {
    this._hypervisorVendor = value;
  }
  public resetHypervisorVendor() {
    this._hypervisorVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorVendorInput() {
    return this._hypervisorVendor;
  }

  // hypervisor_version - computed: true, optional: true, required: false
  private _hypervisorVersion?: string; 
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }
  public set hypervisorVersion(value: string) {
    this._hypervisorVersion = value;
  }
  public resetHypervisorVersion() {
    this._hypervisorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorVersionInput() {
    return this._hypervisorVersion;
  }
}
export interface CloudBridgeAssetVmwareVcenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}
  */
  readonly dataCenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}
  */
  readonly vcenterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}
  */
  readonly vcenterVersion?: string;
}

export function cloudBridgeAssetVmwareVcenterToTerraform(struct?: CloudBridgeAssetVmwareVcenterOutputReference | CloudBridgeAssetVmwareVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_center: cdktf.stringToTerraform(struct!.dataCenter),
    vcenter_key: cdktf.stringToTerraform(struct!.vcenterKey),
    vcenter_version: cdktf.stringToTerraform(struct!.vcenterVersion),
  }
}


export function cloudBridgeAssetVmwareVcenterToHclTerraform(struct?: CloudBridgeAssetVmwareVcenterOutputReference | CloudBridgeAssetVmwareVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_center: {
      value: cdktf.stringToHclTerraform(struct!.dataCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_key: {
      value: cdktf.stringToHclTerraform(struct!.vcenterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_version: {
      value: cdktf.stringToHclTerraform(struct!.vcenterVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetVmwareVcenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBridgeAssetVmwareVcenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCenter = this._dataCenter;
    }
    if (this._vcenterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterKey = this._vcenterKey;
    }
    if (this._vcenterVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterVersion = this._vcenterVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetVmwareVcenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCenter = undefined;
      this._vcenterKey = undefined;
      this._vcenterVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCenter = value.dataCenter;
      this._vcenterKey = value.vcenterKey;
      this._vcenterVersion = value.vcenterVersion;
    }
  }

  // data_center - computed: true, optional: true, required: false
  private _dataCenter?: string; 
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }
  public set dataCenter(value: string) {
    this._dataCenter = value;
  }
  public resetDataCenter() {
    this._dataCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterInput() {
    return this._dataCenter;
  }

  // vcenter_key - computed: true, optional: true, required: false
  private _vcenterKey?: string; 
  public get vcenterKey() {
    return this.getStringAttribute('vcenter_key');
  }
  public set vcenterKey(value: string) {
    this._vcenterKey = value;
  }
  public resetVcenterKey() {
    this._vcenterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterKeyInput() {
    return this._vcenterKey;
  }

  // vcenter_version - computed: true, optional: true, required: false
  private _vcenterVersion?: string; 
  public get vcenterVersion() {
    return this.getStringAttribute('vcenter_version');
  }
  public set vcenterVersion(value: string) {
    this._vcenterVersion = value;
  }
  public resetVcenterVersion() {
    this._vcenterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterVersionInput() {
    return this._vcenterVersion;
  }
}
export interface CloudBridgeAssetVmwareVmCustomerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}
  */
  readonly name?: string;
}

export function cloudBridgeAssetVmwareVmCustomerTagsToTerraform(struct?: CloudBridgeAssetVmwareVmCustomerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudBridgeAssetVmwareVmCustomerTagsToHclTerraform(struct?: CloudBridgeAssetVmwareVmCustomerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetVmwareVmCustomerTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudBridgeAssetVmwareVmCustomerTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetVmwareVmCustomerTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
    }
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
}

export class CloudBridgeAssetVmwareVmCustomerTagsList extends cdktf.ComplexList {
  public internalValue? : CloudBridgeAssetVmwareVmCustomerTags[] | cdktf.IResolvable

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
  public get(index: number): CloudBridgeAssetVmwareVmCustomerTagsOutputReference {
    return new CloudBridgeAssetVmwareVmCustomerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudBridgeAssetVmwareVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}
  */
  readonly customerFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}
  */
  readonly faultToleranceBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}
  */
  readonly faultToleranceSecondaryLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}
  */
  readonly faultToleranceState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}
  */
  readonly instanceUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}
  */
  readonly isDisksCbtEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}
  */
  readonly isDisksUuidEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}
  */
  readonly vmwareToolsStatus?: string;
  /**
  * customer_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#customer_tags CloudBridgeAsset#customer_tags}
  */
  readonly customerTags?: CloudBridgeAssetVmwareVmCustomerTags[] | cdktf.IResolvable;
}

export function cloudBridgeAssetVmwareVmToTerraform(struct?: CloudBridgeAssetVmwareVmOutputReference | CloudBridgeAssetVmwareVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    customer_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customerFields),
    fault_tolerance_bandwidth: cdktf.numberToTerraform(struct!.faultToleranceBandwidth),
    fault_tolerance_secondary_latency: cdktf.numberToTerraform(struct!.faultToleranceSecondaryLatency),
    fault_tolerance_state: cdktf.stringToTerraform(struct!.faultToleranceState),
    instance_uuid: cdktf.stringToTerraform(struct!.instanceUuid),
    is_disks_cbt_enabled: cdktf.booleanToTerraform(struct!.isDisksCbtEnabled),
    is_disks_uuid_enabled: cdktf.booleanToTerraform(struct!.isDisksUuidEnabled),
    path: cdktf.stringToTerraform(struct!.path),
    vmware_tools_status: cdktf.stringToTerraform(struct!.vmwareToolsStatus),
    customer_tags: cdktf.listMapper(cloudBridgeAssetVmwareVmCustomerTagsToTerraform, true)(struct!.customerTags),
  }
}


export function cloudBridgeAssetVmwareVmToHclTerraform(struct?: CloudBridgeAssetVmwareVmOutputReference | CloudBridgeAssetVmwareVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customerFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fault_tolerance_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.faultToleranceBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fault_tolerance_secondary_latency: {
      value: cdktf.numberToHclTerraform(struct!.faultToleranceSecondaryLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fault_tolerance_state: {
      value: cdktf.stringToHclTerraform(struct!.faultToleranceState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_uuid: {
      value: cdktf.stringToHclTerraform(struct!.instanceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disks_cbt_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisksCbtEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_disks_uuid_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisksUuidEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmware_tools_status: {
      value: cdktf.stringToHclTerraform(struct!.vmwareToolsStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_tags: {
      value: cdktf.listMapperHcl(cloudBridgeAssetVmwareVmCustomerTagsToHclTerraform, true)(struct!.customerTags),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBridgeAssetVmwareVmCustomerTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBridgeAssetVmwareVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBridgeAssetVmwareVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._customerFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerFields = this._customerFields;
    }
    if (this._faultToleranceBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultToleranceBandwidth = this._faultToleranceBandwidth;
    }
    if (this._faultToleranceSecondaryLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultToleranceSecondaryLatency = this._faultToleranceSecondaryLatency;
    }
    if (this._faultToleranceState !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultToleranceState = this._faultToleranceState;
    }
    if (this._instanceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUuid = this._instanceUuid;
    }
    if (this._isDisksCbtEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisksCbtEnabled = this._isDisksCbtEnabled;
    }
    if (this._isDisksUuidEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisksUuidEnabled = this._isDisksUuidEnabled;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._vmwareToolsStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmwareToolsStatus = this._vmwareToolsStatus;
    }
    if (this._customerTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerTags = this._customerTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetVmwareVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._customerFields = undefined;
      this._faultToleranceBandwidth = undefined;
      this._faultToleranceSecondaryLatency = undefined;
      this._faultToleranceState = undefined;
      this._instanceUuid = undefined;
      this._isDisksCbtEnabled = undefined;
      this._isDisksUuidEnabled = undefined;
      this._path = undefined;
      this._vmwareToolsStatus = undefined;
      this._customerTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._customerFields = value.customerFields;
      this._faultToleranceBandwidth = value.faultToleranceBandwidth;
      this._faultToleranceSecondaryLatency = value.faultToleranceSecondaryLatency;
      this._faultToleranceState = value.faultToleranceState;
      this._instanceUuid = value.instanceUuid;
      this._isDisksCbtEnabled = value.isDisksCbtEnabled;
      this._isDisksUuidEnabled = value.isDisksUuidEnabled;
      this._path = value.path;
      this._vmwareToolsStatus = value.vmwareToolsStatus;
      this._customerTags.internalValue = value.customerTags;
    }
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // customer_fields - computed: true, optional: true, required: false
  private _customerFields?: string[]; 
  public get customerFields() {
    return this.getListAttribute('customer_fields');
  }
  public set customerFields(value: string[]) {
    this._customerFields = value;
  }
  public resetCustomerFields() {
    this._customerFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerFieldsInput() {
    return this._customerFields;
  }

  // fault_tolerance_bandwidth - computed: true, optional: true, required: false
  private _faultToleranceBandwidth?: number; 
  public get faultToleranceBandwidth() {
    return this.getNumberAttribute('fault_tolerance_bandwidth');
  }
  public set faultToleranceBandwidth(value: number) {
    this._faultToleranceBandwidth = value;
  }
  public resetFaultToleranceBandwidth() {
    this._faultToleranceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultToleranceBandwidthInput() {
    return this._faultToleranceBandwidth;
  }

  // fault_tolerance_secondary_latency - computed: true, optional: true, required: false
  private _faultToleranceSecondaryLatency?: number; 
  public get faultToleranceSecondaryLatency() {
    return this.getNumberAttribute('fault_tolerance_secondary_latency');
  }
  public set faultToleranceSecondaryLatency(value: number) {
    this._faultToleranceSecondaryLatency = value;
  }
  public resetFaultToleranceSecondaryLatency() {
    this._faultToleranceSecondaryLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultToleranceSecondaryLatencyInput() {
    return this._faultToleranceSecondaryLatency;
  }

  // fault_tolerance_state - computed: true, optional: true, required: false
  private _faultToleranceState?: string; 
  public get faultToleranceState() {
    return this.getStringAttribute('fault_tolerance_state');
  }
  public set faultToleranceState(value: string) {
    this._faultToleranceState = value;
  }
  public resetFaultToleranceState() {
    this._faultToleranceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultToleranceStateInput() {
    return this._faultToleranceState;
  }

  // instance_uuid - computed: true, optional: true, required: false
  private _instanceUuid?: string; 
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }
  public set instanceUuid(value: string) {
    this._instanceUuid = value;
  }
  public resetInstanceUuid() {
    this._instanceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUuidInput() {
    return this._instanceUuid;
  }

  // is_disks_cbt_enabled - computed: true, optional: true, required: false
  private _isDisksCbtEnabled?: boolean | cdktf.IResolvable; 
  public get isDisksCbtEnabled() {
    return this.getBooleanAttribute('is_disks_cbt_enabled');
  }
  public set isDisksCbtEnabled(value: boolean | cdktf.IResolvable) {
    this._isDisksCbtEnabled = value;
  }
  public resetIsDisksCbtEnabled() {
    this._isDisksCbtEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisksCbtEnabledInput() {
    return this._isDisksCbtEnabled;
  }

  // is_disks_uuid_enabled - computed: true, optional: true, required: false
  private _isDisksUuidEnabled?: boolean | cdktf.IResolvable; 
  public get isDisksUuidEnabled() {
    return this.getBooleanAttribute('is_disks_uuid_enabled');
  }
  public set isDisksUuidEnabled(value: boolean | cdktf.IResolvable) {
    this._isDisksUuidEnabled = value;
  }
  public resetIsDisksUuidEnabled() {
    this._isDisksUuidEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisksUuidEnabledInput() {
    return this._isDisksUuidEnabled;
  }

  // path - computed: true, optional: true, required: false
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

  // vmware_tools_status - computed: true, optional: true, required: false
  private _vmwareToolsStatus?: string; 
  public get vmwareToolsStatus() {
    return this.getStringAttribute('vmware_tools_status');
  }
  public set vmwareToolsStatus(value: string) {
    this._vmwareToolsStatus = value;
  }
  public resetVmwareToolsStatus() {
    this._vmwareToolsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareToolsStatusInput() {
    return this._vmwareToolsStatus;
  }

  // customer_tags - computed: false, optional: true, required: false
  private _customerTags = new CloudBridgeAssetVmwareVmCustomerTagsList(this, "customer_tags", false);
  public get customerTags() {
    return this._customerTags;
  }
  public putCustomerTags(value: CloudBridgeAssetVmwareVmCustomerTags[] | cdktf.IResolvable) {
    this._customerTags.internalValue = value;
  }
  public resetCustomerTags() {
    this._customerTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerTagsInput() {
    return this._customerTags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset oci_cloud_bridge_asset}
*/
export class CloudBridgeAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_bridge_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudBridgeAsset to import
  * @param importFromId The id of the existing CloudBridgeAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudBridgeAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_bridge_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_bridge_asset oci_cloud_bridge_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudBridgeAssetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudBridgeAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_bridge_asset',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetSourceIds = config.assetSourceIds;
    this._assetType = config.assetType;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._externalAssetKey = config.externalAssetKey;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._inventoryId = config.inventoryId;
    this._sourceKey = config.sourceKey;
    this._compute.internalValue = config.compute;
    this._timeouts.internalValue = config.timeouts;
    this._vm.internalValue = config.vm;
    this._vmwareVcenter.internalValue = config.vmwareVcenter;
    this._vmwareVm.internalValue = config.vmwareVm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_source_ids - computed: true, optional: true, required: false
  private _assetSourceIds?: string[]; 
  public get assetSourceIds() {
    return this.getListAttribute('asset_source_ids');
  }
  public set assetSourceIds(value: string[]) {
    this._assetSourceIds = value;
  }
  public resetAssetSourceIds() {
    this._assetSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetSourceIdsInput() {
    return this._assetSourceIds;
  }

  // asset_type - computed: false, optional: false, required: true
  private _assetType?: string; 
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }
  public set assetType(value: string) {
    this._assetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypeInput() {
    return this._assetType;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_asset_key - computed: false, optional: false, required: true
  private _externalAssetKey?: string; 
  public get externalAssetKey() {
    return this.getStringAttribute('external_asset_key');
  }
  public set externalAssetKey(value: string) {
    this._externalAssetKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAssetKeyInput() {
    return this._externalAssetKey;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // inventory_id - computed: false, optional: false, required: true
  private _inventoryId?: string; 
  public get inventoryId() {
    return this.getStringAttribute('inventory_id');
  }
  public set inventoryId(value: string) {
    this._inventoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIdInput() {
    return this._inventoryId;
  }

  // source_key - computed: false, optional: false, required: true
  private _sourceKey?: string; 
  public get sourceKey() {
    return this.getStringAttribute('source_key');
  }
  public set sourceKey(value: string) {
    this._sourceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyInput() {
    return this._sourceKey;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new CloudBridgeAssetComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: CloudBridgeAssetCompute) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudBridgeAssetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudBridgeAssetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vm - computed: false, optional: true, required: false
  private _vm = new CloudBridgeAssetVmOutputReference(this, "vm");
  public get vm() {
    return this._vm;
  }
  public putVm(value: CloudBridgeAssetVm) {
    this._vm.internalValue = value;
  }
  public resetVm() {
    this._vm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm.internalValue;
  }

  // vmware_vcenter - computed: false, optional: true, required: false
  private _vmwareVcenter = new CloudBridgeAssetVmwareVcenterOutputReference(this, "vmware_vcenter");
  public get vmwareVcenter() {
    return this._vmwareVcenter;
  }
  public putVmwareVcenter(value: CloudBridgeAssetVmwareVcenter) {
    this._vmwareVcenter.internalValue = value;
  }
  public resetVmwareVcenter() {
    this._vmwareVcenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareVcenterInput() {
    return this._vmwareVcenter.internalValue;
  }

  // vmware_vm - computed: false, optional: true, required: false
  private _vmwareVm = new CloudBridgeAssetVmwareVmOutputReference(this, "vmware_vm");
  public get vmwareVm() {
    return this._vmwareVm;
  }
  public putVmwareVm(value: CloudBridgeAssetVmwareVm) {
    this._vmwareVm.internalValue = value;
  }
  public resetVmwareVm() {
    this._vmwareVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareVmInput() {
    return this._vmwareVm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assetSourceIds),
      asset_type: cdktf.stringToTerraform(this._assetType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_asset_key: cdktf.stringToTerraform(this._externalAssetKey),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      inventory_id: cdktf.stringToTerraform(this._inventoryId),
      source_key: cdktf.stringToTerraform(this._sourceKey),
      compute: cloudBridgeAssetComputeToTerraform(this._compute.internalValue),
      timeouts: cloudBridgeAssetTimeoutsToTerraform(this._timeouts.internalValue),
      vm: cloudBridgeAssetVmToTerraform(this._vm.internalValue),
      vmware_vcenter: cloudBridgeAssetVmwareVcenterToTerraform(this._vmwareVcenter.internalValue),
      vmware_vm: cloudBridgeAssetVmwareVmToTerraform(this._vmwareVm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assetSourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      asset_type: {
        value: cdktf.stringToHclTerraform(this._assetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_asset_key: {
        value: cdktf.stringToHclTerraform(this._externalAssetKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_id: {
        value: cdktf.stringToHclTerraform(this._inventoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_key: {
        value: cdktf.stringToHclTerraform(this._sourceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute: {
        value: cloudBridgeAssetComputeToHclTerraform(this._compute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBridgeAssetComputeList",
      },
      timeouts: {
        value: cloudBridgeAssetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudBridgeAssetTimeouts",
      },
      vm: {
        value: cloudBridgeAssetVmToHclTerraform(this._vm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBridgeAssetVmList",
      },
      vmware_vcenter: {
        value: cloudBridgeAssetVmwareVcenterToHclTerraform(this._vmwareVcenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBridgeAssetVmwareVcenterList",
      },
      vmware_vm: {
        value: cloudBridgeAssetVmwareVmToHclTerraform(this._vmwareVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBridgeAssetVmwareVmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
