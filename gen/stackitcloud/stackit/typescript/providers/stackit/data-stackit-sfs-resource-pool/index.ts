// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitSfsResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * STACKIT project ID to which the resource pool is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool#project_id DataStackitSfsResourcePool#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. Read-only attribute that reflects the provider region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool#region DataStackitSfsResourcePool#region}
  */
  readonly region?: string;
  /**
  * Resourcepool ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool#resource_pool_id DataStackitSfsResourcePool#resource_pool_id}
  */
  readonly resourcePoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool stackit_sfs_resource_pool}
*/
export class DataStackitSfsResourcePool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_sfs_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitSfsResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitSfsResourcePool to import
  * @param importFromId The id of the existing DataStackitSfsResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitSfsResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_sfs_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool stackit_sfs_resource_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitSfsResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitSfsResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_sfs_resource_pool',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_acl - computed: true, optional: false, required: false
  public get ipAcl() {
    return this.getListAttribute('ip_acl');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // performance_class - computed: true, optional: false, required: false
  public get performanceClass() {
    return this.getStringAttribute('performance_class');
  }

  // performance_class_downgradable_at - computed: true, optional: false, required: false
  public get performanceClassDowngradableAt() {
    return this.getStringAttribute('performance_class_downgradable_at');
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

  // size_gigabytes - computed: true, optional: false, required: false
  public get sizeGigabytes() {
    return this.getNumberAttribute('size_gigabytes');
  }

  // size_reducible_at - computed: true, optional: false, required: false
  public get sizeReducibleAt() {
    return this.getStringAttribute('size_reducible_at');
  }

  // snapshots_are_visible - computed: true, optional: false, required: false
  public get snapshotsAreVisible() {
    return this.getBooleanAttribute('snapshots_are_visible');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      resource_pool_id: cdktf.stringToTerraform(this._resourcePoolId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
