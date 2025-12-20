// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfsShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Share Export Policy to use in the Share.
  * Note that if this is set to an empty string, the Share can only be mounted in read only by 
  * clients with IPs matching the IP ACL of the Resource Pool hosting this Share. 
  * You can also assign a Share Export Policy after creating the Share
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share#export_policy SfsShare#export_policy}
  */
  readonly exportPolicy: string;
  /**
  * Name of the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share#name SfsShare#name}
  */
  readonly name: string;
  /**
  * STACKIT project ID to which the share is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share#project_id SfsShare#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share#region SfsShare#region}
  */
  readonly region?: string;
  /**
  * The ID of the resource pool for the SFS share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share#resource_pool_id SfsShare#resource_pool_id}
  */
  readonly resourcePoolId: string;
  /**
  * Space hard limit for the Share. 
  * 				If zero, the Share will have access to the full space of the Resource Pool it lives in.
  * 				(unit: gigabytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share#space_hard_limit_gigabytes SfsShare#space_hard_limit_gigabytes}
  */
  readonly spaceHardLimitGigabytes: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share stackit_sfs_share}
*/
export class SfsShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_sfs_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SfsShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SfsShare to import
  * @param importFromId The id of the existing SfsShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SfsShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_sfs_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_share stackit_sfs_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfsShareConfig
  */
  public constructor(scope: Construct, id: string, config: SfsShareConfig) {
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
    this._exportPolicy = config.exportPolicy;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._resourcePoolId = config.resourcePoolId;
    this._spaceHardLimitGigabytes = config.spaceHardLimitGigabytes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_policy - computed: false, optional: false, required: true
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
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

  // share_id - computed: true, optional: false, required: false
  public get shareId() {
    return this.getStringAttribute('share_id');
  }

  // space_hard_limit_gigabytes - computed: false, optional: false, required: true
  private _spaceHardLimitGigabytes?: number; 
  public get spaceHardLimitGigabytes() {
    return this.getNumberAttribute('space_hard_limit_gigabytes');
  }
  public set spaceHardLimitGigabytes(value: number) {
    this._spaceHardLimitGigabytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceHardLimitGigabytesInput() {
    return this._spaceHardLimitGigabytes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_policy: cdktf.stringToTerraform(this._exportPolicy),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      resource_pool_id: cdktf.stringToTerraform(this._resourcePoolId),
      space_hard_limit_gigabytes: cdktf.numberToTerraform(this._spaceHardLimitGigabytes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_policy: {
        value: cdktf.stringToHclTerraform(this._exportPolicy),
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
      space_hard_limit_gigabytes: {
        value: cdktf.numberToHclTerraform(this._spaceHardLimitGigabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
