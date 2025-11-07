// https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCodefreshServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not account admin role is assigned to the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/service_account#assign_admin_role DataCodefreshServiceAccount#assign_admin_role}
  */
  readonly assignAdminRole?: boolean | cdktf.IResolvable;
  /**
  * A list of team IDs the service account is be assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/service_account#assigned_teams DataCodefreshServiceAccount#assigned_teams}
  */
  readonly assignedTeams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/service_account#id DataCodefreshServiceAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/service_account#name DataCodefreshServiceAccount#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/service_account codefresh_service_account}
*/
export class DataCodefreshServiceAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCodefreshServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCodefreshServiceAccount to import
  * @param importFromId The id of the existing DataCodefreshServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCodefreshServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/service_account codefresh_service_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCodefreshServiceAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCodefreshServiceAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'codefresh_service_account',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignAdminRole = config.assignAdminRole;
    this._assignedTeams = config.assignedTeams;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_admin_role - computed: false, optional: true, required: false
  private _assignAdminRole?: boolean | cdktf.IResolvable; 
  public get assignAdminRole() {
    return this.getBooleanAttribute('assign_admin_role');
  }
  public set assignAdminRole(value: boolean | cdktf.IResolvable) {
    this._assignAdminRole = value;
  }
  public resetAssignAdminRole() {
    this._assignAdminRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignAdminRoleInput() {
    return this._assignAdminRole;
  }

  // assigned_teams - computed: false, optional: true, required: false
  private _assignedTeams?: string[]; 
  public get assignedTeams() {
    return cdktf.Fn.tolist(this.getListAttribute('assigned_teams'));
  }
  public set assignedTeams(value: string[]) {
    this._assignedTeams = value;
  }
  public resetAssignedTeams() {
    this._assignedTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedTeamsInput() {
    return this._assignedTeams;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assign_admin_role: cdktf.booleanToTerraform(this._assignAdminRole),
      assigned_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedTeams),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_admin_role: {
        value: cdktf.booleanToHclTerraform(this._assignAdminRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assigned_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedTeams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
