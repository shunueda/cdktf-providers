// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/iam_role_sharing_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHsdpIamRoleSharingPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/iam_role_sharing_policies#id DataHsdpIamRoleSharingPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/iam_role_sharing_policies#role_id DataHsdpIamRoleSharingPolicies#role_id}
  */
  readonly roleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/iam_role_sharing_policies#sharing_policy DataHsdpIamRoleSharingPolicies#sharing_policy}
  */
  readonly sharingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/iam_role_sharing_policies#target_organization_id DataHsdpIamRoleSharingPolicies#target_organization_id}
  */
  readonly targetOrganizationId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/iam_role_sharing_policies hsdp_iam_role_sharing_policies}
*/
export class DataHsdpIamRoleSharingPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_iam_role_sharing_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHsdpIamRoleSharingPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHsdpIamRoleSharingPolicies to import
  * @param importFromId The id of the existing DataHsdpIamRoleSharingPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/iam_role_sharing_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHsdpIamRoleSharingPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_iam_role_sharing_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/iam_role_sharing_policies hsdp_iam_role_sharing_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHsdpIamRoleSharingPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataHsdpIamRoleSharingPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_iam_role_sharing_policies',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._roleId = config.roleId;
    this._sharingPolicy = config.sharingPolicy;
    this._targetOrganizationId = config.targetOrganizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // purposes - computed: true, optional: false, required: false
  public get purposes() {
    return this.getListAttribute('purposes');
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

  // role_names - computed: true, optional: false, required: false
  public get roleNames() {
    return this.getListAttribute('role_names');
  }

  // sharing_policies - computed: true, optional: false, required: false
  public get sharingPolicies() {
    return this.getListAttribute('sharing_policies');
  }

  // sharing_policy - computed: false, optional: true, required: false
  private _sharingPolicy?: string; 
  public get sharingPolicy() {
    return this.getStringAttribute('sharing_policy');
  }
  public set sharingPolicy(value: string) {
    this._sharingPolicy = value;
  }
  public resetSharingPolicy() {
    this._sharingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingPolicyInput() {
    return this._sharingPolicy;
  }

  // source_organization_ids - computed: true, optional: false, required: false
  public get sourceOrganizationIds() {
    return this.getListAttribute('source_organization_ids');
  }

  // target_organization_id - computed: false, optional: true, required: false
  private _targetOrganizationId?: string; 
  public get targetOrganizationId() {
    return this.getStringAttribute('target_organization_id');
  }
  public set targetOrganizationId(value: string) {
    this._targetOrganizationId = value;
  }
  public resetTargetOrganizationId() {
    this._targetOrganizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOrganizationIdInput() {
    return this._targetOrganizationId;
  }

  // target_organization_ids - computed: true, optional: false, required: false
  public get targetOrganizationIds() {
    return this.getListAttribute('target_organization_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      role_id: cdktf.stringToTerraform(this._roleId),
      sharing_policy: cdktf.stringToTerraform(this._sharingPolicy),
      target_organization_id: cdktf.stringToTerraform(this._targetOrganizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharing_policy: {
        value: cdktf.stringToHclTerraform(this._sharingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_organization_id: {
        value: cdktf.stringToHclTerraform(this._targetOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
