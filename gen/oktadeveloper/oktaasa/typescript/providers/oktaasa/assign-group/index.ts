// https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssignGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group#create_server_group AssignGroup#create_server_group}
  */
  readonly createServerGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group#group_name AssignGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group#id AssignGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group#project_name AssignGroup#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group#server_access AssignGroup#server_access}
  */
  readonly serverAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group#server_admin AssignGroup#server_admin}
  */
  readonly serverAdmin?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group oktaasa_assign_group}
*/
export class AssignGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktaasa_assign_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssignGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssignGroup to import
  * @param importFromId The id of the existing AssignGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssignGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktaasa_assign_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/assign_group oktaasa_assign_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssignGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AssignGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oktaasa_assign_group',
      terraformGeneratorMetadata: {
        providerName: 'oktaasa',
        providerVersion: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createServerGroup = config.createServerGroup;
    this._groupName = config.groupName;
    this._id = config.id;
    this._projectName = config.projectName;
    this._serverAccess = config.serverAccess;
    this._serverAdmin = config.serverAdmin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_server_group - computed: false, optional: true, required: false
  private _createServerGroup?: boolean | cdktf.IResolvable; 
  public get createServerGroup() {
    return this.getBooleanAttribute('create_server_group');
  }
  public set createServerGroup(value: boolean | cdktf.IResolvable) {
    this._createServerGroup = value;
  }
  public resetCreateServerGroup() {
    this._createServerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createServerGroupInput() {
    return this._createServerGroup;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // server_access - computed: false, optional: true, required: false
  private _serverAccess?: boolean | cdktf.IResolvable; 
  public get serverAccess() {
    return this.getBooleanAttribute('server_access');
  }
  public set serverAccess(value: boolean | cdktf.IResolvable) {
    this._serverAccess = value;
  }
  public resetServerAccess() {
    this._serverAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAccessInput() {
    return this._serverAccess;
  }

  // server_admin - computed: false, optional: true, required: false
  private _serverAdmin?: boolean | cdktf.IResolvable; 
  public get serverAdmin() {
    return this.getBooleanAttribute('server_admin');
  }
  public set serverAdmin(value: boolean | cdktf.IResolvable) {
    this._serverAdmin = value;
  }
  public resetServerAdmin() {
    this._serverAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAdminInput() {
    return this._serverAdmin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_server_group: cdktf.booleanToTerraform(this._createServerGroup),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
      server_access: cdktf.booleanToTerraform(this._serverAccess),
      server_admin: cdktf.booleanToTerraform(this._serverAdmin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_server_group: {
        value: cdktf.booleanToHclTerraform(this._createServerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_access: {
        value: cdktf.booleanToHclTerraform(this._serverAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_admin: {
        value: cdktf.booleanToHclTerraform(this._serverAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
