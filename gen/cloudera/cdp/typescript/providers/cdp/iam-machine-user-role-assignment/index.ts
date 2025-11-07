// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamMachineUserRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The machine user the role is assigned to. Can be the machine user’s name or CRN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_role_assignment#machine_user IamMachineUserRoleAssignment#machine_user}
  */
  readonly machineUser: string;
  /**
  * The role to assign to the machine user. Can be the role’s name or CRN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_role_assignment#role IamMachineUserRoleAssignment#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_role_assignment cdp_iam_machine_user_role_assignment}
*/
export class IamMachineUserRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_iam_machine_user_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamMachineUserRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamMachineUserRoleAssignment to import
  * @param importFromId The id of the existing IamMachineUserRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamMachineUserRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_iam_machine_user_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_role_assignment cdp_iam_machine_user_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamMachineUserRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: IamMachineUserRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_iam_machine_user_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
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
    this._role = config.role;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      machine_user: cdktf.stringToTerraform(this._machineUser),
      role: cdktf.stringToTerraform(this._role),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
