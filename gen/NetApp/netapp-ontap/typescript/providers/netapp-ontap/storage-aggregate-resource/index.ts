// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAggregateResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#cx_profile_name StorageAggregateResource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Class of disk to use to build aggregate. capacity_flash is listed in swagger, but rejected as invalid by ONTAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#disk_class StorageAggregateResource#disk_class}
  */
  readonly diskClass?: string;
  /**
  * Number of disks to place into the aggregate, including parity disks.
  * 				The disks in this newly-created aggregate come from the spare disk pool.
  * 				The smallest disks in this pool join the aggregate first, unless the disk_size argument is provided.
  * 				Modifiable only if specified disk_count is larger than current disk_count.
  * 				If the disk_count % raid_size == 1, only disk_count/raid_size * raid_size will be added.
  * 				If disk_count is 6, raid_type is raid4, raid_size 4, all 6 disks will be added.
  * 				If disk_count is 5, raid_type is raid4, raid_size 4, 5/4 * 4 = 4 will be added. 1 will not be added.
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#disk_count StorageAggregateResource#disk_count}
  */
  readonly diskCount: number;
  /**
  * Disk size to use in 4K block size.  Disks within 10 precent of specified size will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#disk_size StorageAggregateResource#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Disk size to use in the specified unit. This is converted to bytes, assuming K=1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#disk_size_unit StorageAggregateResource#disk_size_unit}
  */
  readonly diskSizeUnit?: string;
  /**
  * Whether to enable software encryption. This is equivalent to -encrypt-with-aggr-key when using the CLI.Requires a VE license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#encryption StorageAggregateResource#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Specifies that the new aggregate be mirrored (have two plexes).
  * 				If set to true, then the indicated disks will be split across the two plexes. By default, the new aggregate will not be mirrored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#is_mirrored StorageAggregateResource#is_mirrored}
  */
  readonly isMirrored?: boolean | cdktf.IResolvable;
  /**
  * The name of the aggregate to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#name StorageAggregateResource#name}
  */
  readonly name: string;
  /**
  * Node for the aggregate to be created on. If no node specified, mgmt lif home will be used. If disk_count is present, node name is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#node StorageAggregateResource#node}
  */
  readonly nodeAttribute: string;
  /**
  * Sets the maximum number of drives per raid group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#raid_size StorageAggregateResource#raid_size}
  */
  readonly raidSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#raid_type StorageAggregateResource#raid_type}
  */
  readonly raidType?: string;
  /**
  * Type of snaplock for the aggregate being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#snaplock_type StorageAggregateResource#snaplock_type}
  */
  readonly snaplockType?: string;
  /**
  * Whether the specified aggregate should be enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#state StorageAggregateResource#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource netapp-ontap_storage_aggregate_resource}
*/
export class StorageAggregateResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_storage_aggregate_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageAggregateResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageAggregateResource to import
  * @param importFromId The id of the existing StorageAggregateResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageAggregateResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_storage_aggregate_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/storage_aggregate_resource netapp-ontap_storage_aggregate_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAggregateResourceConfig
  */
  public constructor(scope: Construct, id: string, config: StorageAggregateResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_storage_aggregate_resource',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._diskClass = config.diskClass;
    this._diskCount = config.diskCount;
    this._diskSize = config.diskSize;
    this._diskSizeUnit = config.diskSizeUnit;
    this._encryption = config.encryption;
    this._isMirrored = config.isMirrored;
    this._name = config.name;
    this._node = config.nodeAttribute;
    this._raidSize = config.raidSize;
    this._raidType = config.raidType;
    this._snaplockType = config.snaplockType;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // disk_class - computed: true, optional: true, required: false
  private _diskClass?: string; 
  public get diskClass() {
    return this.getStringAttribute('disk_class');
  }
  public set diskClass(value: string) {
    this._diskClass = value;
  }
  public resetDiskClass() {
    this._diskClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskClassInput() {
    return this._diskClass;
  }

  // disk_count - computed: false, optional: false, required: true
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_size_unit - computed: false, optional: true, required: false
  private _diskSizeUnit?: string; 
  public get diskSizeUnit() {
    return this.getStringAttribute('disk_size_unit');
  }
  public set diskSizeUnit(value: string) {
    this._diskSizeUnit = value;
  }
  public resetDiskSizeUnit() {
    this._diskSizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeUnitInput() {
    return this._diskSizeUnit;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_mirrored - computed: true, optional: true, required: false
  private _isMirrored?: boolean | cdktf.IResolvable; 
  public get isMirrored() {
    return this.getBooleanAttribute('is_mirrored');
  }
  public set isMirrored(value: boolean | cdktf.IResolvable) {
    this._isMirrored = value;
  }
  public resetIsMirrored() {
    this._isMirrored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMirroredInput() {
    return this._isMirrored;
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

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // raid_size - computed: true, optional: true, required: false
  private _raidSize?: number; 
  public get raidSize() {
    return this.getNumberAttribute('raid_size');
  }
  public set raidSize(value: number) {
    this._raidSize = value;
  }
  public resetRaidSize() {
    this._raidSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidSizeInput() {
    return this._raidSize;
  }

  // raid_type - computed: true, optional: true, required: false
  private _raidType?: string; 
  public get raidType() {
    return this.getStringAttribute('raid_type');
  }
  public set raidType(value: string) {
    this._raidType = value;
  }
  public resetRaidType() {
    this._raidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidTypeInput() {
    return this._raidType;
  }

  // snaplock_type - computed: true, optional: true, required: false
  private _snaplockType?: string; 
  public get snaplockType() {
    return this.getStringAttribute('snaplock_type');
  }
  public set snaplockType(value: string) {
    this._snaplockType = value;
  }
  public resetSnaplockType() {
    this._snaplockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplockTypeInput() {
    return this._snaplockType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      disk_class: cdktf.stringToTerraform(this._diskClass),
      disk_count: cdktf.numberToTerraform(this._diskCount),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      disk_size_unit: cdktf.stringToTerraform(this._diskSizeUnit),
      encryption: cdktf.booleanToTerraform(this._encryption),
      is_mirrored: cdktf.booleanToTerraform(this._isMirrored),
      name: cdktf.stringToTerraform(this._name),
      node: cdktf.stringToTerraform(this._node),
      raid_size: cdktf.numberToTerraform(this._raidSize),
      raid_type: cdktf.stringToTerraform(this._raidType),
      snaplock_type: cdktf.stringToTerraform(this._snaplockType),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_class: {
        value: cdktf.stringToHclTerraform(this._diskClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_count: {
        value: cdktf.numberToHclTerraform(this._diskCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_size_unit: {
        value: cdktf.stringToHclTerraform(this._diskSizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: cdktf.booleanToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_mirrored: {
        value: cdktf.booleanToHclTerraform(this._isMirrored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node: {
        value: cdktf.stringToHclTerraform(this._node),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raid_size: {
        value: cdktf.numberToHclTerraform(this._raidSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      raid_type: {
        value: cdktf.stringToHclTerraform(this._raidType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snaplock_type: {
        value: cdktf.stringToHclTerraform(this._snaplockType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
