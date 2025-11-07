// https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_role_sharing_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamRoleSharingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_role_sharing_policy#id IamRoleSharingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_role_sharing_policy#purpose IamRoleSharingPolicy#purpose}
  */
  readonly purpose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_role_sharing_policy#role_id IamRoleSharingPolicy#role_id}
  */
  readonly roleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_role_sharing_policy#sharing_policy IamRoleSharingPolicy#sharing_policy}
  */
  readonly sharingPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_role_sharing_policy#target_organization_id IamRoleSharingPolicy#target_organization_id}
  */
  readonly targetOrganizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_role_sharing_policy hsdp_iam_role_sharing_policy}
*/
export class IamRoleSharingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_iam_role_sharing_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamRoleSharingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamRoleSharingPolicy to import
  * @param importFromId The id of the existing IamRoleSharingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_role_sharing_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamRoleSharingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_iam_role_sharing_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_role_sharing_policy hsdp_iam_role_sharing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamRoleSharingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IamRoleSharingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_iam_role_sharing_policy',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.70.0'
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
    this._purpose = config.purpose;
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

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
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

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // sharing_policy - computed: false, optional: false, required: true
  private _sharingPolicy?: string; 
  public get sharingPolicy() {
    return this.getStringAttribute('sharing_policy');
  }
  public set sharingPolicy(value: string) {
    this._sharingPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingPolicyInput() {
    return this._sharingPolicy;
  }

  // source_organization_id - computed: true, optional: false, required: false
  public get sourceOrganizationId() {
    return this.getStringAttribute('source_organization_id');
  }

  // target_organization_id - computed: false, optional: false, required: true
  private _targetOrganizationId?: string; 
  public get targetOrganizationId() {
    return this.getStringAttribute('target_organization_id');
  }
  public set targetOrganizationId(value: string) {
    this._targetOrganizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOrganizationIdInput() {
    return this._targetOrganizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      purpose: cdktf.stringToTerraform(this._purpose),
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
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
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
