// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_resource_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamMachineUserResourceRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The machine user the role is assigned to. Can be the machine user’s name or CRN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_resource_role_assignment#machine_user IamMachineUserResourceRoleAssignment#machine_user}
  */
  readonly machineUser: string;
  /**
  * The resource for which the resource role rights are granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_resource_role_assignment#resource_crn IamMachineUserResourceRoleAssignment#resource_crn}
  */
  readonly resourceCrn: string;
  /**
  * The CRN of the resource role to assign to the machine user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_resource_role_assignment#resource_role_crn IamMachineUserResourceRoleAssignment#resource_role_crn}
  */
  readonly resourceRoleCrn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_resource_role_assignment cdp_iam_machine_user_resource_role_assignment}
*/
export class IamMachineUserResourceRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_iam_machine_user_resource_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamMachineUserResourceRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamMachineUserResourceRoleAssignment to import
  * @param importFromId The id of the existing IamMachineUserResourceRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_resource_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamMachineUserResourceRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_iam_machine_user_resource_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_resource_role_assignment cdp_iam_machine_user_resource_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamMachineUserResourceRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: IamMachineUserResourceRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_iam_machine_user_resource_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8',
        providerVersionConstraint: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._machineUser = config.machineUser;
    this._resourceCrn = config.resourceCrn;
    this._resourceRoleCrn = config.resourceRoleCrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_user - computed: false, optional: false, required: true
  private _machineUser?: string; 
  public get machineUser() {
    return this.getStringAttribute('machine_user');
  }
  public set machineUser(value: string) {
    this._machineUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineUserInput() {
    return this._machineUser;
  }

  // resource_crn - computed: false, optional: false, required: true
  private _resourceCrn?: string; 
  public get resourceCrn() {
    return this.getStringAttribute('resource_crn');
  }
  public set resourceCrn(value: string) {
    this._resourceCrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCrnInput() {
    return this._resourceCrn;
  }

  // resource_role_crn - computed: false, optional: false, required: true
  private _resourceRoleCrn?: string; 
  public get resourceRoleCrn() {
    return this.getStringAttribute('resource_role_crn');
  }
  public set resourceRoleCrn(value: string) {
    this._resourceRoleCrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRoleCrnInput() {
    return this._resourceRoleCrn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      machine_user: cdktf.stringToTerraform(this._machineUser),
      resource_crn: cdktf.stringToTerraform(this._resourceCrn),
      resource_role_crn: cdktf.stringToTerraform(this._resourceRoleCrn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      machine_user: {
        value: cdktf.stringToHclTerraform(this._machineUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_crn: {
        value: cdktf.stringToHclTerraform(this._resourceCrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_role_crn: {
        value: cdktf.stringToHclTerraform(this._resourceRoleCrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
