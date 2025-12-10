// https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/jaas_access_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JaasAccessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Level of access to grant. Changing this value will replace the Terraform resource. Valid access levels are described at https://canonical-jaas-documentation.readthedocs-hosted.com/latest/howto/manage-permissions/#add-a-permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/jaas_access_group#access JaasAccessGroup#access}
  */
  readonly access: string;
  /**
  * The ID of the group for access management. If this is changed the resource will be deleted and a new resource will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/jaas_access_group#group_id JaasAccessGroup#group_id}
  */
  readonly groupId: string;
  /**
  * List of groups to grant access. A valid group ID is the group's UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/jaas_access_group#groups JaasAccessGroup#groups}
  */
  readonly groups?: string[];
  /**
  * List of service accounts to grant access. A valid service account is the service account's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/jaas_access_group#service_accounts JaasAccessGroup#service_accounts}
  */
  readonly serviceAccounts?: string[];
  /**
  * List of users to grant access. A valid user is the user's name or email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/jaas_access_group#users JaasAccessGroup#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/jaas_access_group juju_jaas_access_group}
*/
export class JaasAccessGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_jaas_access_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JaasAccessGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JaasAccessGroup to import
  * @param importFromId The id of the existing JaasAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/jaas_access_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JaasAccessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_jaas_access_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/jaas_access_group juju_jaas_access_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JaasAccessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: JaasAccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_jaas_access_group',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.1.1',
        providerVersionConstraint: '1.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._groupId = config.groupId;
    this._groups = config.groups;
    this._serviceAccounts = config.serviceAccounts;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts?: string[]; 
  public get serviceAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('service_accounts'));
  }
  public set serviceAccounts(value: string[]) {
    this._serviceAccounts = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      group_id: cdktf.stringToTerraform(this._groupId),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccounts),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
