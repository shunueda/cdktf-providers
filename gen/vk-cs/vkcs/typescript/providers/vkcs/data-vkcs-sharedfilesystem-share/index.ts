// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsSharedfilesystemShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable description for the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share#description DataVkcsSharedfilesystemShare#description}
  */
  readonly description?: string;
  /**
  * The export location path of the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share#export_location_path DataVkcsSharedfilesystemShare#export_location_path}
  */
  readonly exportLocationPath?: string;
  /**
  * The name of the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share#name DataVkcsSharedfilesystemShare#name}
  */
  readonly name?: string;
  /**
  * The region in which to obtain the Shared File System client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share#region DataVkcsSharedfilesystemShare#region}
  */
  readonly region?: string;
  /**
  * The UUID of the share's share network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share#share_network_id DataVkcsSharedfilesystemShare#share_network_id}
  */
  readonly shareNetworkId: string;
  /**
  * The UUID of the share's base snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share#snapshot_id DataVkcsSharedfilesystemShare#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * A share status filter. A valid value is `creating`, `error`, `available`, `deleting`, `error_deleting`, `manage_starting`, `manage_error`, `unmanage_starting`, `unmanage_error`, `unmanaged`, `extending`, `extending_error`, `shrinking`, `shrinking_error`, or `shrinking_possible_data_loss_error`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share#status DataVkcsSharedfilesystemShare#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share vkcs_sharedfilesystem_share}
*/
export class DataVkcsSharedfilesystemShare extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_sharedfilesystem_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsSharedfilesystemShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsSharedfilesystemShare to import
  * @param importFromId The id of the existing DataVkcsSharedfilesystemShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsSharedfilesystemShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_sharedfilesystem_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_share vkcs_sharedfilesystem_share} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsSharedfilesystemShareConfig
  */
  public constructor(scope: Construct, id: string, config: DataVkcsSharedfilesystemShareConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_sharedfilesystem_share',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
    this._exportLocationPath = config.exportLocationPath;
    this._name = config.name;
    this._region = config.region;
    this._shareNetworkId = config.shareNetworkId;
    this._snapshotId = config.snapshotId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
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

  // export_location_path - computed: true, optional: true, required: false
  private _exportLocationPath?: string; 
  public get exportLocationPath() {
    return this.getStringAttribute('export_location_path');
  }
  public set exportLocationPath(value: string) {
    this._exportLocationPath = value;
  }
  public resetExportLocationPath() {
    this._exportLocationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportLocationPathInput() {
    return this._exportLocationPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // share_network_id - computed: false, optional: false, required: true
  private _shareNetworkId?: string; 
  public get shareNetworkId() {
    return this.getStringAttribute('share_network_id');
  }
  public set shareNetworkId(value: string) {
    this._shareNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNetworkIdInput() {
    return this._shareNetworkId;
  }

  // share_proto - computed: true, optional: false, required: false
  public get shareProto() {
    return this.getStringAttribute('share_proto');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // status - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      export_location_path: cdktf.stringToTerraform(this._exportLocationPath),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      share_network_id: cdktf.stringToTerraform(this._shareNetworkId),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      status: cdktf.stringToTerraform(this._status),
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
      export_location_path: {
        value: cdktf.stringToHclTerraform(this._exportLocationPath),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_network_id: {
        value: cdktf.stringToHclTerraform(this._shareNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
