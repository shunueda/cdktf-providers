// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The block size of the block device. Defaults to `512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#block_size BlockDevice#block_size}
  */
  readonly blockSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#id BlockDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Only used if `model` and `serial` cannot be provided. This should be a path that is fixed and doesn't change depending on the boot order or kernel version. This argument is computed if it's not given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#id_path BlockDevice#id_path}
  */
  readonly idPath?: string;
  /**
  * Boolean value indicating if the block device is set as the boot device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#is_boot_device BlockDevice#is_boot_device}
  */
  readonly isBootDevice?: boolean | cdktf.IResolvable;
  /**
  * The machine identifier (system ID, hostname, or FQDN) that owns the block device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#machine BlockDevice#machine}
  */
  readonly machine: string;
  /**
  * Model of the block device. Used in conjunction with `serial` argument. Conflicts with `id_path`. This argument is computed if it's not given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#model BlockDevice#model}
  */
  readonly model?: string;
  /**
  * The block device name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#name BlockDevice#name}
  */
  readonly name: string;
  /**
  * Serial number of the block device. Used in conjunction with `model` argument. Conflicts with `id_path`. This argument is computed if it's not given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#serial BlockDevice#serial}
  */
  readonly serial?: string;
  /**
  * The size of the block device (given in GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#size_gigabytes BlockDevice#size_gigabytes}
  */
  readonly sizeGigabytes: number;
  /**
  * A set of tag names assigned to the new block device. This argument is computed if it's not given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#tags BlockDevice#tags}
  */
  readonly tags?: string[];
  /**
  * partitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#partitions BlockDevice#partitions}
  */
  readonly partitions?: BlockDevicePartitions[] | cdktf.IResolvable;
}
export interface BlockDevicePartitions {
  /**
  * Boolean value indicating if the partition is set as bootable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#bootable BlockDevice#bootable}
  */
  readonly bootable?: boolean | cdktf.IResolvable;
  /**
  * The file system type (e.g. `ext4`). If this is not set, the partition is unformatted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#fs_type BlockDevice#fs_type}
  */
  readonly fsType?: string;
  /**
  * The label assigned if the partition is formatted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#label BlockDevice#label}
  */
  readonly label?: string;
  /**
  * The options used for the partition mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#mount_options BlockDevice#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * The mount point used. If this is not set, the partition is not mounted. This is used only the partition is formatted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#mount_point BlockDevice#mount_point}
  */
  readonly mountPoint?: string;
  /**
  * The partition size (given in GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#size_gigabytes BlockDevice#size_gigabytes}
  */
  readonly sizeGigabytes: number;
  /**
  * The tags assigned to the new block device partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#tags BlockDevice#tags}
  */
  readonly tags?: string[];
}

export function blockDevicePartitionsToTerraform(struct?: BlockDevicePartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootable: cdktf.booleanToTerraform(struct!.bootable),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    label: cdktf.stringToTerraform(struct!.label),
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    size_gigabytes: cdktf.numberToTerraform(struct!.sizeGigabytes),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function blockDevicePartitionsToHclTerraform(struct?: BlockDevicePartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootable: {
      value: cdktf.booleanToHclTerraform(struct!.bootable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    mount_options: {
      value: cdktf.stringToHclTerraform(struct!.mountOptions),
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
    size_gigabytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeGigabytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlockDevicePartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockDevicePartitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootable = this._bootable;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._sizeGigabytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGigabytes = this._sizeGigabytes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockDevicePartitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootable = undefined;
      this._fsType = undefined;
      this._label = undefined;
      this._mountOptions = undefined;
      this._mountPoint = undefined;
      this._sizeGigabytes = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootable = value.bootable;
      this._fsType = value.fsType;
      this._label = value.label;
      this._mountOptions = value.mountOptions;
      this._mountPoint = value.mountPoint;
      this._sizeGigabytes = value.sizeGigabytes;
      this._tags = value.tags;
    }
  }

  // bootable - computed: false, optional: true, required: false
  private _bootable?: boolean | cdktf.IResolvable; 
  public get bootable() {
    return this.getBooleanAttribute('bootable');
  }
  public set bootable(value: boolean | cdktf.IResolvable) {
    this._bootable = value;
  }
  public resetBootable() {
    this._bootable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootableInput() {
    return this._bootable;
  }

  // fs_type - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // size_gigabytes - computed: false, optional: false, required: true
  private _sizeGigabytes?: number; 
  public get sizeGigabytes() {
    return this.getNumberAttribute('size_gigabytes');
  }
  public set sizeGigabytes(value: number) {
    this._sizeGigabytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGigabytesInput() {
    return this._sizeGigabytes;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class BlockDevicePartitionsList extends cdktf.ComplexList {
  public internalValue? : BlockDevicePartitions[] | cdktf.IResolvable

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
  public get(index: number): BlockDevicePartitionsOutputReference {
    return new BlockDevicePartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device maas_block_device}
*/
export class BlockDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_block_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockDevice to import
  * @param importFromId The id of the existing BlockDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_block_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/block_device maas_block_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: BlockDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_block_device',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockSize = config.blockSize;
    this._id = config.id;
    this._idPath = config.idPath;
    this._isBootDevice = config.isBootDevice;
    this._machine = config.machine;
    this._model = config.model;
    this._name = config.name;
    this._serial = config.serial;
    this._sizeGigabytes = config.sizeGigabytes;
    this._tags = config.tags;
    this._partitions.internalValue = config.partitions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_size - computed: false, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
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

  // id_path - computed: true, optional: true, required: false
  private _idPath?: string; 
  public get idPath() {
    return this.getStringAttribute('id_path');
  }
  public set idPath(value: string) {
    this._idPath = value;
  }
  public resetIdPath() {
    this._idPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idPathInput() {
    return this._idPath;
  }

  // is_boot_device - computed: false, optional: true, required: false
  private _isBootDevice?: boolean | cdktf.IResolvable; 
  public get isBootDevice() {
    return this.getBooleanAttribute('is_boot_device');
  }
  public set isBootDevice(value: boolean | cdktf.IResolvable) {
    this._isBootDevice = value;
  }
  public resetIsBootDevice() {
    this._isBootDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBootDeviceInput() {
    return this._isBootDevice;
  }

  // machine - computed: false, optional: false, required: true
  private _machine?: string; 
  public get machine() {
    return this.getStringAttribute('machine');
  }
  public set machine(value: string) {
    this._machine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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

  // size_gigabytes - computed: false, optional: false, required: true
  private _sizeGigabytes?: number; 
  public get sizeGigabytes() {
    return this.getNumberAttribute('size_gigabytes');
  }
  public set sizeGigabytes(value: number) {
    this._sizeGigabytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGigabytesInput() {
    return this._sizeGigabytes;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions = new BlockDevicePartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: BlockDevicePartitions[] | cdktf.IResolvable) {
    this._partitions.internalValue = value;
  }
  public resetPartitions() {
    this._partitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_size: cdktf.numberToTerraform(this._blockSize),
      id: cdktf.stringToTerraform(this._id),
      id_path: cdktf.stringToTerraform(this._idPath),
      is_boot_device: cdktf.booleanToTerraform(this._isBootDevice),
      machine: cdktf.stringToTerraform(this._machine),
      model: cdktf.stringToTerraform(this._model),
      name: cdktf.stringToTerraform(this._name),
      serial: cdktf.stringToTerraform(this._serial),
      size_gigabytes: cdktf.numberToTerraform(this._sizeGigabytes),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      partitions: cdktf.listMapper(blockDevicePartitionsToTerraform, true)(this._partitions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_size: {
        value: cdktf.numberToHclTerraform(this._blockSize),
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
      id_path: {
        value: cdktf.stringToHclTerraform(this._idPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_boot_device: {
        value: cdktf.booleanToHclTerraform(this._isBootDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine: {
        value: cdktf.stringToHclTerraform(this._machine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
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
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_gigabytes: {
        value: cdktf.numberToHclTerraform(this._sizeGigabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      partitions: {
        value: cdktf.listMapperHcl(blockDevicePartitionsToHclTerraform, true)(this._partitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlockDevicePartitionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
