// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#description BlockStorage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#disk_detail_type BlockStorage#disk_detail_type}
  */
  readonly diskDetailType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#hypervisor_type BlockStorage#hypervisor_type}
  */
  readonly hypervisorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#id BlockStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#name BlockStorage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#return_protection BlockStorage#return_protection}
  */
  readonly returnProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#server_instance_no BlockStorage#server_instance_no}
  */
  readonly serverInstanceNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#size BlockStorage#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#snapshot_no BlockStorage#snapshot_no}
  */
  readonly snapshotNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#stop_instance_before_detaching BlockStorage#stop_instance_before_detaching}
  */
  readonly stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#volume_type BlockStorage#volume_type}
  */
  readonly volumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#zone BlockStorage#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#timeouts BlockStorage#timeouts}
  */
  readonly timeouts?: BlockStorageTimeouts;
}
export interface BlockStorageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#create BlockStorage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#delete BlockStorage#delete}
  */
  readonly delete?: string;
}

export function blockStorageTimeoutsToTerraform(struct?: BlockStorageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function blockStorageTimeoutsToHclTerraform(struct?: BlockStorageTimeouts | cdktf.IResolvable): any {
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

export class BlockStorageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BlockStorageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BlockStorageTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage ncloud_block_storage}
*/
export class BlockStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_block_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockStorage to import
  * @param importFromId The id of the existing BlockStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_block_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/block_storage ncloud_block_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockStorageConfig
  */
  public constructor(scope: Construct, id: string, config: BlockStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_block_storage',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._diskDetailType = config.diskDetailType;
    this._hypervisorType = config.hypervisorType;
    this._id = config.id;
    this._name = config.name;
    this._returnProtection = config.returnProtection;
    this._serverInstanceNo = config.serverInstanceNo;
    this._size = config.size;
    this._snapshotNo = config.snapshotNo;
    this._stopInstanceBeforeDetaching = config.stopInstanceBeforeDetaching;
    this._volumeType = config.volumeType;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_storage_no - computed: true, optional: false, required: false
  public get blockStorageNo() {
    return this.getStringAttribute('block_storage_no');
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

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_detail_type - computed: true, optional: true, required: false
  private _diskDetailType?: string; 
  public get diskDetailType() {
    return this.getStringAttribute('disk_detail_type');
  }
  public set diskDetailType(value: string) {
    this._diskDetailType = value;
  }
  public resetDiskDetailType() {
    this._diskDetailType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskDetailTypeInput() {
    return this._diskDetailType;
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // encrypted_volume - computed: true, optional: false, required: false
  public get encryptedVolume() {
    return this.getBooleanAttribute('encrypted_volume');
  }

  // hypervisor_type - computed: true, optional: true, required: false
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  public resetHypervisorType() {
    this._hypervisorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
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

  // max_iops - computed: true, optional: false, required: false
  public get maxIops() {
    return this.getNumberAttribute('max_iops');
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

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // return_protection - computed: true, optional: true, required: false
  private _returnProtection?: boolean | cdktf.IResolvable; 
  public get returnProtection() {
    return this.getBooleanAttribute('return_protection');
  }
  public set returnProtection(value: boolean | cdktf.IResolvable) {
    this._returnProtection = value;
  }
  public resetReturnProtection() {
    this._returnProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnProtectionInput() {
    return this._returnProtection;
  }

  // server_instance_no - computed: false, optional: true, required: false
  private _serverInstanceNo?: string; 
  public get serverInstanceNo() {
    return this.getStringAttribute('server_instance_no');
  }
  public set serverInstanceNo(value: string) {
    this._serverInstanceNo = value;
  }
  public resetServerInstanceNo() {
    this._serverInstanceNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceNoInput() {
    return this._serverInstanceNo;
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_no - computed: false, optional: true, required: false
  private _snapshotNo?: string; 
  public get snapshotNo() {
    return this.getStringAttribute('snapshot_no');
  }
  public set snapshotNo(value: string) {
    this._snapshotNo = value;
  }
  public resetSnapshotNo() {
    this._snapshotNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNoInput() {
    return this._snapshotNo;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stop_instance_before_detaching - computed: false, optional: true, required: false
  private _stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable; 
  public get stopInstanceBeforeDetaching() {
    return this.getBooleanAttribute('stop_instance_before_detaching');
  }
  public set stopInstanceBeforeDetaching(value: boolean | cdktf.IResolvable) {
    this._stopInstanceBeforeDetaching = value;
  }
  public resetStopInstanceBeforeDetaching() {
    this._stopInstanceBeforeDetaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopInstanceBeforeDetachingInput() {
    return this._stopInstanceBeforeDetaching;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BlockStorageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BlockStorageTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      disk_detail_type: cdktf.stringToTerraform(this._diskDetailType),
      hypervisor_type: cdktf.stringToTerraform(this._hypervisorType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      return_protection: cdktf.booleanToTerraform(this._returnProtection),
      server_instance_no: cdktf.stringToTerraform(this._serverInstanceNo),
      size: cdktf.numberToTerraform(this._size),
      snapshot_no: cdktf.stringToTerraform(this._snapshotNo),
      stop_instance_before_detaching: cdktf.booleanToTerraform(this._stopInstanceBeforeDetaching),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: blockStorageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_detail_type: {
        value: cdktf.stringToHclTerraform(this._diskDetailType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_type: {
        value: cdktf.stringToHclTerraform(this._hypervisorType),
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
      return_protection: {
        value: cdktf.booleanToHclTerraform(this._returnProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_instance_no: {
        value: cdktf.stringToHclTerraform(this._serverInstanceNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_no: {
        value: cdktf.stringToHclTerraform(this._snapshotNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_instance_before_detaching: {
        value: cdktf.booleanToHclTerraform(this._stopInstanceBeforeDetaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: blockStorageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BlockStorageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
