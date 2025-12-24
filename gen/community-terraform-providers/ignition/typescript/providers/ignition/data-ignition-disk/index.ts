// https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIgnitionDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#device DataIgnitionDisk#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#id DataIgnitionDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#wipe_table DataIgnitionDisk#wipe_table}
  */
  readonly wipeTable?: boolean | cdktf.IResolvable;
  /**
  * partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#partition DataIgnitionDisk#partition}
  */
  readonly partition?: DataIgnitionDiskPartition[] | cdktf.IResolvable;
}
export interface DataIgnitionDiskPartition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#guid DataIgnitionDisk#guid}
  */
  readonly guid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#label DataIgnitionDisk#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#number DataIgnitionDisk#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#resize DataIgnitionDisk#resize}
  */
  readonly resize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#should_exist DataIgnitionDisk#should_exist}
  */
  readonly shouldExist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#sizemib DataIgnitionDisk#sizemib}
  */
  readonly sizemib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#startmib DataIgnitionDisk#startmib}
  */
  readonly startmib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#type_guid DataIgnitionDisk#type_guid}
  */
  readonly typeGuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#wipe_partition_entry DataIgnitionDisk#wipe_partition_entry}
  */
  readonly wipePartitionEntry?: boolean | cdktf.IResolvable;
}

export function dataIgnitionDiskPartitionToTerraform(struct?: DataIgnitionDiskPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guid: cdktf.stringToTerraform(struct!.guid),
    label: cdktf.stringToTerraform(struct!.label),
    number: cdktf.numberToTerraform(struct!.number),
    resize: cdktf.booleanToTerraform(struct!.resize),
    should_exist: cdktf.booleanToTerraform(struct!.shouldExist),
    sizemib: cdktf.numberToTerraform(struct!.sizemib),
    startmib: cdktf.numberToTerraform(struct!.startmib),
    type_guid: cdktf.stringToTerraform(struct!.typeGuid),
    wipe_partition_entry: cdktf.booleanToTerraform(struct!.wipePartitionEntry),
  }
}


export function dataIgnitionDiskPartitionToHclTerraform(struct?: DataIgnitionDiskPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guid: {
      value: cdktf.stringToHclTerraform(struct!.guid),
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
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resize: {
      value: cdktf.booleanToHclTerraform(struct!.resize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_exist: {
      value: cdktf.booleanToHclTerraform(struct!.shouldExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sizemib: {
      value: cdktf.numberToHclTerraform(struct!.sizemib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    startmib: {
      value: cdktf.numberToHclTerraform(struct!.startmib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_guid: {
      value: cdktf.stringToHclTerraform(struct!.typeGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wipe_partition_entry: {
      value: cdktf.booleanToHclTerraform(struct!.wipePartitionEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionDiskPartitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIgnitionDiskPartition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._resize !== undefined) {
      hasAnyValues = true;
      internalValueResult.resize = this._resize;
    }
    if (this._shouldExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldExist = this._shouldExist;
    }
    if (this._sizemib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizemib = this._sizemib;
    }
    if (this._startmib !== undefined) {
      hasAnyValues = true;
      internalValueResult.startmib = this._startmib;
    }
    if (this._typeGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeGuid = this._typeGuid;
    }
    if (this._wipePartitionEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.wipePartitionEntry = this._wipePartitionEntry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionDiskPartition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guid = undefined;
      this._label = undefined;
      this._number = undefined;
      this._resize = undefined;
      this._shouldExist = undefined;
      this._sizemib = undefined;
      this._startmib = undefined;
      this._typeGuid = undefined;
      this._wipePartitionEntry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guid = value.guid;
      this._label = value.label;
      this._number = value.number;
      this._resize = value.resize;
      this._shouldExist = value.shouldExist;
      this._sizemib = value.sizemib;
      this._startmib = value.startmib;
      this._typeGuid = value.typeGuid;
      this._wipePartitionEntry = value.wipePartitionEntry;
    }
  }

  // guid - computed: false, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // resize - computed: false, optional: true, required: false
  private _resize?: boolean | cdktf.IResolvable; 
  public get resize() {
    return this.getBooleanAttribute('resize');
  }
  public set resize(value: boolean | cdktf.IResolvable) {
    this._resize = value;
  }
  public resetResize() {
    this._resize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInput() {
    return this._resize;
  }

  // should_exist - computed: false, optional: true, required: false
  private _shouldExist?: boolean | cdktf.IResolvable; 
  public get shouldExist() {
    return this.getBooleanAttribute('should_exist');
  }
  public set shouldExist(value: boolean | cdktf.IResolvable) {
    this._shouldExist = value;
  }
  public resetShouldExist() {
    this._shouldExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldExistInput() {
    return this._shouldExist;
  }

  // sizemib - computed: false, optional: true, required: false
  private _sizemib?: number; 
  public get sizemib() {
    return this.getNumberAttribute('sizemib');
  }
  public set sizemib(value: number) {
    this._sizemib = value;
  }
  public resetSizemib() {
    this._sizemib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizemibInput() {
    return this._sizemib;
  }

  // startmib - computed: false, optional: true, required: false
  private _startmib?: number; 
  public get startmib() {
    return this.getNumberAttribute('startmib');
  }
  public set startmib(value: number) {
    this._startmib = value;
  }
  public resetStartmib() {
    this._startmib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startmibInput() {
    return this._startmib;
  }

  // type_guid - computed: false, optional: true, required: false
  private _typeGuid?: string; 
  public get typeGuid() {
    return this.getStringAttribute('type_guid');
  }
  public set typeGuid(value: string) {
    this._typeGuid = value;
  }
  public resetTypeGuid() {
    this._typeGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeGuidInput() {
    return this._typeGuid;
  }

  // wipe_partition_entry - computed: false, optional: true, required: false
  private _wipePartitionEntry?: boolean | cdktf.IResolvable; 
  public get wipePartitionEntry() {
    return this.getBooleanAttribute('wipe_partition_entry');
  }
  public set wipePartitionEntry(value: boolean | cdktf.IResolvable) {
    this._wipePartitionEntry = value;
  }
  public resetWipePartitionEntry() {
    this._wipePartitionEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wipePartitionEntryInput() {
    return this._wipePartitionEntry;
  }
}

export class DataIgnitionDiskPartitionList extends cdktf.ComplexList {
  public internalValue? : DataIgnitionDiskPartition[] | cdktf.IResolvable

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
  public get(index: number): DataIgnitionDiskPartitionOutputReference {
    return new DataIgnitionDiskPartitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk ignition_disk}
*/
export class DataIgnitionDisk extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ignition_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIgnitionDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIgnitionDisk to import
  * @param importFromId The id of the existing DataIgnitionDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIgnitionDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ignition_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/disk ignition_disk} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIgnitionDiskConfig
  */
  public constructor(scope: Construct, id: string, config: DataIgnitionDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'ignition_disk',
      terraformGeneratorMetadata: {
        providerName: 'ignition',
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
    this._device = config.device;
    this._id = config.id;
    this._wipeTable = config.wipeTable;
    this._partition.internalValue = config.partition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // wipe_table - computed: false, optional: true, required: false
  private _wipeTable?: boolean | cdktf.IResolvable; 
  public get wipeTable() {
    return this.getBooleanAttribute('wipe_table');
  }
  public set wipeTable(value: boolean | cdktf.IResolvable) {
    this._wipeTable = value;
  }
  public resetWipeTable() {
    this._wipeTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wipeTableInput() {
    return this._wipeTable;
  }

  // partition - computed: false, optional: true, required: false
  private _partition = new DataIgnitionDiskPartitionList(this, "partition", false);
  public get partition() {
    return this._partition;
  }
  public putPartition(value: DataIgnitionDiskPartition[] | cdktf.IResolvable) {
    this._partition.internalValue = value;
  }
  public resetPartition() {
    this._partition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      id: cdktf.stringToTerraform(this._id),
      wipe_table: cdktf.booleanToTerraform(this._wipeTable),
      partition: cdktf.listMapper(dataIgnitionDiskPartitionToTerraform, true)(this._partition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      wipe_table: {
        value: cdktf.booleanToHclTerraform(this._wipeTable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partition: {
        value: cdktf.listMapperHcl(dataIgnitionDiskPartitionToHclTerraform, true)(this._partition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIgnitionDiskPartitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
