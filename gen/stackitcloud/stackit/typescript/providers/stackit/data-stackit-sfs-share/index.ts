// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitSfsShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * STACKIT project ID to which the share is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_share#project_id DataStackitSfsShare#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. Read-only attribute that reflects the provider region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_share#region DataStackitSfsShare#region}
  */
  readonly region?: string;
  /**
  * The ID of the resource pool for the SFS share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_share#resource_pool_id DataStackitSfsShare#resource_pool_id}
  */
  readonly resourcePoolId: string;
  /**
  * share ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_share#share_id DataStackitSfsShare#share_id}
  */
  readonly shareId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_share stackit_sfs_share}
*/
export class DataStackitSfsShare extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_sfs_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitSfsShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitSfsShare to import
  * @param importFromId The id of the existing DataStackitSfsShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitSfsShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_sfs_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_share stackit_sfs_share} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitSfsShareConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitSfsShareConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_sfs_share',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._region = config.region;
    this._resourcePoolId = config.resourcePoolId;
    this._shareId = config.shareId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_policy - computed: true, optional: false, required: false
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
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

  // resource_pool_id - computed: false, optional: false, required: true
  private _resourcePoolId?: string; 
  public get resourcePoolId() {
    return this.getStringAttribute('resource_pool_id');
  }
  public set resourcePoolId(value: string) {
    this._resourcePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolIdInput() {
    return this._resourcePoolId;
  }

  // share_id - computed: false, optional: false, required: true
  private _shareId?: string; 
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId;
  }

  // space_hard_limit_gigabytes - computed: true, optional: false, required: false
  public get spaceHardLimitGigabytes() {
    return this.getNumberAttribute('space_hard_limit_gigabytes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      resource_pool_id: cdktf.stringToTerraform(this._resourcePoolId),
      share_id: cdktf.stringToTerraform(this._shareId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      resource_pool_id: {
        value: cdktf.stringToHclTerraform(this._resourcePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_id: {
        value: cdktf.stringToHclTerraform(this._shareId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
