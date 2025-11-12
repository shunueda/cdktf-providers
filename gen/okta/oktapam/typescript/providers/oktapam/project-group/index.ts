// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, creates a local (unix or windows) group on enrolled Project servers and adds all relevant users to the local group. This does not impact user creation. Server Users are always created as long as `create_server_users` is set to `true` for the Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group#create_server_group ProjectGroup#create_server_group}
  */
  readonly createServerGroup?: boolean | cdktf.IResolvable;
  /**
  * The human-readable name of an existing Group. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group#group_name ProjectGroup#group_name}
  */
  readonly groupName: string;
  /**
  * The human-readable name of the Project. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group#project_name ProjectGroup#project_name}
  */
  readonly projectName: string;
  /**
  * If `true`, members of this Group have access to the servers enrolled in the Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group#server_access ProjectGroup#server_access}
  */
  readonly serverAccess?: boolean | cdktf.IResolvable;
  /**
  * If `true`, provides sudo permissions to members of this Group on servers enrolled in this Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group#server_admin ProjectGroup#server_admin}
  */
  readonly serverAdmin?: boolean | cdktf.IResolvable;
  /**
  * Enables access to servers with labels matching all selectors. Only available to Teams with the Early Access Policy Sync feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group#servers_selector ProjectGroup#servers_selector}
  */
  readonly serversSelector?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group oktapam_project_group}
*/
export class ProjectGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_project_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectGroup to import
  * @param importFromId The id of the existing ProjectGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_project_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project_group oktapam_project_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_project_group',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
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
    this._projectName = config.projectName;
    this._serverAccess = config.serverAccess;
    this._serverAdmin = config.serverAdmin;
    this._serversSelector = config.serversSelector;
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

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // removed_at - computed: true, optional: false, required: false
  public get removedAt() {
    return this.getStringAttribute('removed_at');
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

  // servers_selector - computed: false, optional: true, required: false
  private _serversSelector?: { [key: string]: string }; 
  public get serversSelector() {
    return this.getStringMapAttribute('servers_selector');
  }
  public set serversSelector(value: { [key: string]: string }) {
    this._serversSelector = value;
  }
  public resetServersSelector() {
    this._serversSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversSelectorInput() {
    return this._serversSelector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_server_group: cdktf.booleanToTerraform(this._createServerGroup),
      group_name: cdktf.stringToTerraform(this._groupName),
      project_name: cdktf.stringToTerraform(this._projectName),
      server_access: cdktf.booleanToTerraform(this._serverAccess),
      server_admin: cdktf.booleanToTerraform(this._serverAdmin),
      servers_selector: cdktf.hashMapper(cdktf.stringToTerraform)(this._serversSelector),
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
      servers_selector: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._serversSelector),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
