// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_group_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamMachineUserGroupAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_group_assignment#group IamMachineUserGroupAssignment#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_group_assignment#machine_user IamMachineUserGroupAssignment#machine_user}
  */
  readonly machineUser: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_group_assignment cdp_iam_machine_user_group_assignment}
*/
export class IamMachineUserGroupAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_iam_machine_user_group_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamMachineUserGroupAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamMachineUserGroupAssignment to import
  * @param importFromId The id of the existing IamMachineUserGroupAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_group_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamMachineUserGroupAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_iam_machine_user_group_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user_group_assignment cdp_iam_machine_user_group_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamMachineUserGroupAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: IamMachineUserGroupAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_iam_machine_user_group_assignment',
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
    this._group = config.group;
    this._machineUser = config.machineUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      machine_user: cdktf.stringToTerraform(this._machineUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_user: {
        value: cdktf.stringToHclTerraform(this._machineUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
