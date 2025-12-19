// https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/iam_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCortexcloudIamRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * role_id of the IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/iam_role#role_id DataCortexcloudIamRole#role_id}
  */
  readonly roleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/iam_role cortexcloud_iam_role}
*/
export class DataCortexcloudIamRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cortexcloud_iam_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCortexcloudIamRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCortexcloudIamRole to import
  * @param importFromId The id of the existing DataCortexcloudIamRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/iam_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCortexcloudIamRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cortexcloud_iam_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/iam_role cortexcloud_iam_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCortexcloudIamRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCortexcloudIamRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'cortexcloud_iam_role',
      terraformGeneratorMetadata: {
        providerName: 'cortexcloud',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._roleId = config.roleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_ts - computed: true, optional: false, required: false
  public get createdTs() {
    return this.getNumberAttribute('created_ts');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_custom - computed: true, optional: false, required: false
  public get isCustom() {
    return this.getBooleanAttribute('is_custom');
  }

  // pretty_name - computed: true, optional: false, required: false
  public get prettyName() {
    return this.getStringAttribute('pretty_name');
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // updated_ts - computed: true, optional: false, required: false
  public get updatedTs() {
    return this.getNumberAttribute('updated_ts');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      role_id: cdktf.stringToTerraform(this._roleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
