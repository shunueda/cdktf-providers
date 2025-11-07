// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the domain that the object is part of. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#domain UserGroup#domain}
  */
  readonly domain?: string;
  /**
  * Specifies a numeric user group identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#gid UserGroup#gid}
  */
  readonly gid?: number;
  /**
  * Specifies list members of group within the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#groups UserGroup#groups}
  */
  readonly groups?: string[];
  /**
  * Specifies a user group name. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#name UserGroup#name}
  */
  readonly name: string;
  /**
  * If true, skip validation checks when creating user group. Need to be true, when changing group GID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#query_force UserGroup#query_force}
  */
  readonly queryForce?: boolean | cdktf.IResolvable;
  /**
  * Specifies the provider type. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#query_provider UserGroup#query_provider}
  */
  readonly queryProvider?: string;
  /**
  * Specifies the zone that the object belongs to. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#query_zone UserGroup#query_zone}
  */
  readonly queryZone?: string;
  /**
  * List of roles, the user is assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#roles UserGroup#roles}
  */
  readonly roles?: string[];
  /**
  * Specifies a security identifier. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#sid UserGroup#sid}
  */
  readonly sid?: string;
  /**
  * Specifies list members of user within the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#users UserGroup#users}
  */
  readonly users?: string[];
  /**
  * Specifies list members of well_known within the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#well_knowns UserGroup#well_knowns}
  */
  readonly wellKnowns?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group powerscale_user_group}
*/
export class UserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroup to import
  * @param importFromId The id of the existing UserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_group powerscale_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: UserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_user_group',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._gid = config.gid;
    this._groups = config.groups;
    this._name = config.name;
    this._queryForce = config.queryForce;
    this._queryProvider = config.queryProvider;
    this._queryZone = config.queryZone;
    this._roles = config.roles;
    this._sid = config.sid;
    this._users = config.users;
    this._wellKnowns = config.wellKnowns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // dns_domain - computed: true, optional: false, required: false
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // generated_gid - computed: true, optional: false, required: false
  public get generatedGid() {
    return this.getBooleanAttribute('generated_gid');
  }

  // gid - computed: true, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // query_force - computed: false, optional: true, required: false
  private _queryForce?: boolean | cdktf.IResolvable; 
  public get queryForce() {
    return this.getBooleanAttribute('query_force');
  }
  public set queryForce(value: boolean | cdktf.IResolvable) {
    this._queryForce = value;
  }
  public resetQueryForce() {
    this._queryForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryForceInput() {
    return this._queryForce;
  }

  // query_provider - computed: false, optional: true, required: false
  private _queryProvider?: string; 
  public get queryProvider() {
    return this.getStringAttribute('query_provider');
  }
  public set queryProvider(value: string) {
    this._queryProvider = value;
  }
  public resetQueryProvider() {
    this._queryProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryProviderInput() {
    return this._queryProvider;
  }

  // query_zone - computed: false, optional: true, required: false
  private _queryZone?: string; 
  public get queryZone() {
    return this.getStringAttribute('query_zone');
  }
  public set queryZone(value: string) {
    this._queryZone = value;
  }
  public resetQueryZone() {
    this._queryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryZoneInput() {
    return this._queryZone;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // sam_account_name - computed: true, optional: false, required: false
  public get samAccountName() {
    return this.getStringAttribute('sam_account_name');
  }

  // sid - computed: true, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
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

  // well_knowns - computed: false, optional: true, required: false
  private _wellKnowns?: string[]; 
  public get wellKnowns() {
    return this.getListAttribute('well_knowns');
  }
  public set wellKnowns(value: string[]) {
    this._wellKnowns = value;
  }
  public resetWellKnowns() {
    this._wellKnowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownsInput() {
    return this._wellKnowns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      gid: cdktf.numberToTerraform(this._gid),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      name: cdktf.stringToTerraform(this._name),
      query_force: cdktf.booleanToTerraform(this._queryForce),
      query_provider: cdktf.stringToTerraform(this._queryProvider),
      query_zone: cdktf.stringToTerraform(this._queryZone),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      sid: cdktf.stringToTerraform(this._sid),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      well_knowns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wellKnowns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gid: {
        value: cdktf.numberToHclTerraform(this._gid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_force: {
        value: cdktf.booleanToHclTerraform(this._queryForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query_provider: {
        value: cdktf.stringToHclTerraform(this._queryProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_zone: {
        value: cdktf.stringToHclTerraform(this._queryZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sid: {
        value: cdktf.stringToHclTerraform(this._sid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      well_knowns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wellKnowns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
