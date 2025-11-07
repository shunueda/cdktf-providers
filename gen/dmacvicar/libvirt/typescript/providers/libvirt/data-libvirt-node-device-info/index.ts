// https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLibvirtNodeDeviceInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#id DataLibvirtNodeDeviceInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#name DataLibvirtNodeDeviceInfo#name}
  */
  readonly name: string;
  /**
  * capability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#capability DataLibvirtNodeDeviceInfo#capability}
  */
  readonly capability?: DataLibvirtNodeDeviceInfoCapability;
}
export interface DataLibvirtNodeDeviceInfoDevnode {
}

export function dataLibvirtNodeDeviceInfoDevnodeToTerraform(struct?: DataLibvirtNodeDeviceInfoDevnode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLibvirtNodeDeviceInfoDevnodeToHclTerraform(struct?: DataLibvirtNodeDeviceInfoDevnode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLibvirtNodeDeviceInfoDevnodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLibvirtNodeDeviceInfoDevnode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLibvirtNodeDeviceInfoDevnode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLibvirtNodeDeviceInfoDevnodeList extends cdktf.ComplexList {

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
  public get(index: number): DataLibvirtNodeDeviceInfoDevnodeOutputReference {
    return new DataLibvirtNodeDeviceInfoDevnodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLibvirtNodeDeviceInfoCapabilityIommuGroup {
}

export function dataLibvirtNodeDeviceInfoCapabilityIommuGroupToTerraform(struct?: DataLibvirtNodeDeviceInfoCapabilityIommuGroupOutputReference | DataLibvirtNodeDeviceInfoCapabilityIommuGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLibvirtNodeDeviceInfoCapabilityIommuGroupToHclTerraform(struct?: DataLibvirtNodeDeviceInfoCapabilityIommuGroupOutputReference | DataLibvirtNodeDeviceInfoCapabilityIommuGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLibvirtNodeDeviceInfoCapabilityIommuGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLibvirtNodeDeviceInfoCapabilityIommuGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLibvirtNodeDeviceInfoCapabilityIommuGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new cdktf.StringMapList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }
}
export interface DataLibvirtNodeDeviceInfoCapability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#address DataLibvirtNodeDeviceInfo#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#block DataLibvirtNodeDeviceInfo#block}
  */
  readonly block?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#bus DataLibvirtNodeDeviceInfo#bus}
  */
  readonly bus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#capability DataLibvirtNodeDeviceInfo#capability}
  */
  readonly capability?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#class DataLibvirtNodeDeviceInfo#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#description DataLibvirtNodeDeviceInfo#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#device DataLibvirtNodeDeviceInfo#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#domain DataLibvirtNodeDeviceInfo#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#drive_type DataLibvirtNodeDeviceInfo#drive_type}
  */
  readonly driveType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#drm_type DataLibvirtNodeDeviceInfo#drm_type}
  */
  readonly drmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#features DataLibvirtNodeDeviceInfo#features}
  */
  readonly features?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#firmware DataLibvirtNodeDeviceInfo#firmware}
  */
  readonly firmware?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#function DataLibvirtNodeDeviceInfo#function}
  */
  readonly function?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#hardware DataLibvirtNodeDeviceInfo#hardware}
  */
  readonly hardware?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#host DataLibvirtNodeDeviceInfo#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#interface DataLibvirtNodeDeviceInfo#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#link DataLibvirtNodeDeviceInfo#link}
  */
  readonly link?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#logical_block_size DataLibvirtNodeDeviceInfo#logical_block_size}
  */
  readonly logicalBlockSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#lun DataLibvirtNodeDeviceInfo#lun}
  */
  readonly lun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#model DataLibvirtNodeDeviceInfo#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#num_blocks DataLibvirtNodeDeviceInfo#num_blocks}
  */
  readonly numBlocks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#number DataLibvirtNodeDeviceInfo#number}
  */
  readonly number?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#product DataLibvirtNodeDeviceInfo#product}
  */
  readonly product?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#protocol DataLibvirtNodeDeviceInfo#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#scsi_type DataLibvirtNodeDeviceInfo#scsi_type}
  */
  readonly scsiType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#serial DataLibvirtNodeDeviceInfo#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#size DataLibvirtNodeDeviceInfo#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#slot DataLibvirtNodeDeviceInfo#slot}
  */
  readonly slot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#subclass DataLibvirtNodeDeviceInfo#subclass}
  */
  readonly subclass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#target DataLibvirtNodeDeviceInfo#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#type DataLibvirtNodeDeviceInfo#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#unique_id DataLibvirtNodeDeviceInfo#unique_id}
  */
  readonly uniqueId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#vendor DataLibvirtNodeDeviceInfo#vendor}
  */
  readonly vendor?: { [key: string]: string };
  /**
  * iommu_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#iommu_group DataLibvirtNodeDeviceInfo#iommu_group}
  */
  readonly iommuGroup?: DataLibvirtNodeDeviceInfoCapabilityIommuGroup;
}

export function dataLibvirtNodeDeviceInfoCapabilityToTerraform(struct?: DataLibvirtNodeDeviceInfoCapabilityOutputReference | DataLibvirtNodeDeviceInfoCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    block: cdktf.stringToTerraform(struct!.block),
    bus: cdktf.stringToTerraform(struct!.bus),
    capability: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.capability),
    class: cdktf.stringToTerraform(struct!.class),
    description: cdktf.stringToTerraform(struct!.description),
    device: cdktf.stringToTerraform(struct!.device),
    domain: cdktf.stringToTerraform(struct!.domain),
    drive_type: cdktf.stringToTerraform(struct!.driveType),
    drm_type: cdktf.stringToTerraform(struct!.drmType),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    firmware: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.firmware),
    function: cdktf.stringToTerraform(struct!.function),
    hardware: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hardware),
    host: cdktf.stringToTerraform(struct!.host),
    interface: cdktf.stringToTerraform(struct!.interface),
    link: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.link),
    logical_block_size: cdktf.stringToTerraform(struct!.logicalBlockSize),
    lun: cdktf.stringToTerraform(struct!.lun),
    model: cdktf.stringToTerraform(struct!.model),
    num_blocks: cdktf.stringToTerraform(struct!.numBlocks),
    number: cdktf.stringToTerraform(struct!.number),
    product: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.product),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    scsi_type: cdktf.stringToTerraform(struct!.scsiType),
    serial: cdktf.stringToTerraform(struct!.serial),
    size: cdktf.stringToTerraform(struct!.size),
    slot: cdktf.stringToTerraform(struct!.slot),
    subclass: cdktf.stringToTerraform(struct!.subclass),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    unique_id: cdktf.stringToTerraform(struct!.uniqueId),
    vendor: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vendor),
    iommu_group: dataLibvirtNodeDeviceInfoCapabilityIommuGroupToTerraform(struct!.iommuGroup),
  }
}


export function dataLibvirtNodeDeviceInfoCapabilityToHclTerraform(struct?: DataLibvirtNodeDeviceInfoCapabilityOutputReference | DataLibvirtNodeDeviceInfoCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block: {
      value: cdktf.stringToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bus: {
      value: cdktf.stringToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.capability),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
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
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drive_type: {
      value: cdktf.stringToHclTerraform(struct!.driveType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drm_type: {
      value: cdktf.stringToHclTerraform(struct!.drmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    firmware: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.firmware),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hardware),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.link),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    logical_block_size: {
      value: cdktf.stringToHclTerraform(struct!.logicalBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.stringToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_blocks: {
      value: cdktf.stringToHclTerraform(struct!.numBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.product),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scsi_type: {
      value: cdktf.stringToHclTerraform(struct!.scsiType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
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
    slot: {
      value: cdktf.stringToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subclass: {
      value: cdktf.stringToHclTerraform(struct!.subclass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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
    unique_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vendor),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    iommu_group: {
      value: dataLibvirtNodeDeviceInfoCapabilityIommuGroupToHclTerraform(struct!.iommuGroup),
      isBlock: true,
      type: "list",
      storageClassType: "DataLibvirtNodeDeviceInfoCapabilityIommuGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLibvirtNodeDeviceInfoCapabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLibvirtNodeDeviceInfoCapability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._capability !== undefined) {
      hasAnyValues = true;
      internalValueResult.capability = this._capability;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._driveType !== undefined) {
      hasAnyValues = true;
      internalValueResult.driveType = this._driveType;
    }
    if (this._drmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmType = this._drmType;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._firmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmware = this._firmware;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._hardware !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardware = this._hardware;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._logicalBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBlockSize = this._logicalBlockSize;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._numBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.numBlocks = this._numBlocks;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._scsiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsiType = this._scsiType;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    if (this._subclass !== undefined) {
      hasAnyValues = true;
      internalValueResult.subclass = this._subclass;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueId = this._uniqueId;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._iommuGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iommuGroup = this._iommuGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLibvirtNodeDeviceInfoCapability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._block = undefined;
      this._bus = undefined;
      this._capability = undefined;
      this._class = undefined;
      this._description = undefined;
      this._device = undefined;
      this._domain = undefined;
      this._driveType = undefined;
      this._drmType = undefined;
      this._features = undefined;
      this._firmware = undefined;
      this._function = undefined;
      this._hardware = undefined;
      this._host = undefined;
      this._interface = undefined;
      this._link = undefined;
      this._logicalBlockSize = undefined;
      this._lun = undefined;
      this._model = undefined;
      this._numBlocks = undefined;
      this._number = undefined;
      this._product = undefined;
      this._protocol = undefined;
      this._scsiType = undefined;
      this._serial = undefined;
      this._size = undefined;
      this._slot = undefined;
      this._subclass = undefined;
      this._target = undefined;
      this._type = undefined;
      this._uniqueId = undefined;
      this._vendor = undefined;
      this._iommuGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._block = value.block;
      this._bus = value.bus;
      this._capability = value.capability;
      this._class = value.class;
      this._description = value.description;
      this._device = value.device;
      this._domain = value.domain;
      this._driveType = value.driveType;
      this._drmType = value.drmType;
      this._features = value.features;
      this._firmware = value.firmware;
      this._function = value.function;
      this._hardware = value.hardware;
      this._host = value.host;
      this._interface = value.interface;
      this._link = value.link;
      this._logicalBlockSize = value.logicalBlockSize;
      this._lun = value.lun;
      this._model = value.model;
      this._numBlocks = value.numBlocks;
      this._number = value.number;
      this._product = value.product;
      this._protocol = value.protocol;
      this._scsiType = value.scsiType;
      this._serial = value.serial;
      this._size = value.size;
      this._slot = value.slot;
      this._subclass = value.subclass;
      this._target = value.target;
      this._type = value.type;
      this._uniqueId = value.uniqueId;
      this._vendor = value.vendor;
      this._iommuGroup.internalValue = value.iommuGroup;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // block - computed: true, optional: true, required: false
  private _block?: string; 
  public get block() {
    return this.getStringAttribute('block');
  }
  public set block(value: string) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // bus - computed: true, optional: true, required: false
  private _bus?: string; 
  public get bus() {
    return this.getStringAttribute('bus');
  }
  public set bus(value: string) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // capability - computed: false, optional: true, required: false
  private _capability?: { [key: string]: string }; 
  public get capability() {
    return this.getStringMapAttribute('capability');
  }
  public set capability(value: { [key: string]: string }) {
    this._capability = value;
  }
  public resetCapability() {
    this._capability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability;
  }

  // class - computed: true, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
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

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // drive_type - computed: true, optional: true, required: false
  private _driveType?: string; 
  public get driveType() {
    return this.getStringAttribute('drive_type');
  }
  public set driveType(value: string) {
    this._driveType = value;
  }
  public resetDriveType() {
    this._driveType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveTypeInput() {
    return this._driveType;
  }

  // drm_type - computed: true, optional: true, required: false
  private _drmType?: string; 
  public get drmType() {
    return this.getStringAttribute('drm_type');
  }
  public set drmType(value: string) {
    this._drmType = value;
  }
  public resetDrmType() {
    this._drmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmTypeInput() {
    return this._drmType;
  }

  // features - computed: false, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // firmware - computed: false, optional: true, required: false
  private _firmware?: { [key: string]: string }; 
  public get firmware() {
    return this.getStringMapAttribute('firmware');
  }
  public set firmware(value: { [key: string]: string }) {
    this._firmware = value;
  }
  public resetFirmware() {
    this._firmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware;
  }

  // function - computed: true, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware?: { [key: string]: string }; 
  public get hardware() {
    return this.getStringMapAttribute('hardware');
  }
  public set hardware(value: { [key: string]: string }) {
    this._hardware = value;
  }
  public resetHardware() {
    this._hardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // link - computed: false, optional: true, required: false
  private _link?: { [key: string]: string }; 
  public get link() {
    return this.getStringMapAttribute('link');
  }
  public set link(value: { [key: string]: string }) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // logical_block_size - computed: true, optional: true, required: false
  private _logicalBlockSize?: string; 
  public get logicalBlockSize() {
    return this.getStringAttribute('logical_block_size');
  }
  public set logicalBlockSize(value: string) {
    this._logicalBlockSize = value;
  }
  public resetLogicalBlockSize() {
    this._logicalBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBlockSizeInput() {
    return this._logicalBlockSize;
  }

  // lun - computed: true, optional: true, required: false
  private _lun?: string; 
  public get lun() {
    return this.getStringAttribute('lun');
  }
  public set lun(value: string) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // num_blocks - computed: true, optional: true, required: false
  private _numBlocks?: string; 
  public get numBlocks() {
    return this.getStringAttribute('num_blocks');
  }
  public set numBlocks(value: string) {
    this._numBlocks = value;
  }
  public resetNumBlocks() {
    this._numBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBlocksInput() {
    return this._numBlocks;
  }

  // number - computed: true, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // product - computed: false, optional: true, required: false
  private _product?: { [key: string]: string }; 
  public get product() {
    return this.getStringMapAttribute('product');
  }
  public set product(value: { [key: string]: string }) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // scsi_type - computed: true, optional: true, required: false
  private _scsiType?: string; 
  public get scsiType() {
    return this.getStringAttribute('scsi_type');
  }
  public set scsiType(value: string) {
    this._scsiType = value;
  }
  public resetScsiType() {
    this._scsiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiTypeInput() {
    return this._scsiType;
  }

  // serial - computed: true, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // size - computed: true, optional: true, required: false
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

  // slot - computed: true, optional: true, required: false
  private _slot?: string; 
  public get slot() {
    return this.getStringAttribute('slot');
  }
  public set slot(value: string) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // subclass - computed: true, optional: true, required: false
  private _subclass?: string; 
  public get subclass() {
    return this.getStringAttribute('subclass');
  }
  public set subclass(value: string) {
    this._subclass = value;
  }
  public resetSubclass() {
    this._subclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subclassInput() {
    return this._subclass;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

  // unique_id - computed: true, optional: true, required: false
  private _uniqueId?: string; 
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }
  public set uniqueId(value: string) {
    this._uniqueId = value;
  }
  public resetUniqueId() {
    this._uniqueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdInput() {
    return this._uniqueId;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: { [key: string]: string }; 
  public get vendor() {
    return this.getStringMapAttribute('vendor');
  }
  public set vendor(value: { [key: string]: string }) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // iommu_group - computed: false, optional: true, required: false
  private _iommuGroup = new DataLibvirtNodeDeviceInfoCapabilityIommuGroupOutputReference(this, "iommu_group");
  public get iommuGroup() {
    return this._iommuGroup;
  }
  public putIommuGroup(value: DataLibvirtNodeDeviceInfoCapabilityIommuGroup) {
    this._iommuGroup.internalValue = value;
  }
  public resetIommuGroup() {
    this._iommuGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iommuGroupInput() {
    return this._iommuGroup.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info libvirt_node_device_info}
*/
export class DataLibvirtNodeDeviceInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_node_device_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLibvirtNodeDeviceInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLibvirtNodeDeviceInfo to import
  * @param importFromId The id of the existing DataLibvirtNodeDeviceInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLibvirtNodeDeviceInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_node_device_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/node_device_info libvirt_node_device_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLibvirtNodeDeviceInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataLibvirtNodeDeviceInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_node_device_info',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.8.3'
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
    this._name = config.name;
    this._capability.internalValue = config.capability;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // devnode - computed: true, optional: false, required: false
  private _devnode = new DataLibvirtNodeDeviceInfoDevnodeList(this, "devnode", true);
  public get devnode() {
    return this._devnode;
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

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // xml - computed: true, optional: false, required: false
  public get xml() {
    return this.getStringAttribute('xml');
  }

  // capability - computed: false, optional: true, required: false
  private _capability = new DataLibvirtNodeDeviceInfoCapabilityOutputReference(this, "capability");
  public get capability() {
    return this._capability;
  }
  public putCapability(value: DataLibvirtNodeDeviceInfoCapability) {
    this._capability.internalValue = value;
  }
  public resetCapability() {
    this._capability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      capability: dataLibvirtNodeDeviceInfoCapabilityToTerraform(this._capability.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability: {
        value: dataLibvirtNodeDeviceInfoCapabilityToHclTerraform(this._capability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLibvirtNodeDeviceInfoCapabilityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
