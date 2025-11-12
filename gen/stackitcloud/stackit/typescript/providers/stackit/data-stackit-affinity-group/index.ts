// https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/affinity_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitAffinityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The affinity group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/affinity_group#affinity_group_id DataStackitAffinityGroup#affinity_group_id}
  */
  readonly affinityGroupId: string;
  /**
  * STACKIT Project ID to which the affinity group is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/affinity_group#project_id DataStackitAffinityGroup#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/affinity_group stackit_affinity_group}
*/
export class DataStackitAffinityGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_affinity_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitAffinityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitAffinityGroup to import
  * @param importFromId The id of the existing DataStackitAffinityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/affinity_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitAffinityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_affinity_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/affinity_group stackit_affinity_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitAffinityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitAffinityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_affinity_group',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.69.0',
        providerVersionConstraint: '0.69.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinityGroupId = config.affinityGroupId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_group_id - computed: false, optional: false, required: true
  private _affinityGroupId?: string; 
  public get affinityGroupId() {
    return this.getStringAttribute('affinity_group_id');
  }
  public set affinityGroupId(value: string) {
    this._affinityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupIdInput() {
    return this._affinityGroupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_group_id: cdktf.stringToTerraform(this._affinityGroupId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_group_id: {
        value: cdktf.stringToHclTerraform(this._affinityGroupId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
