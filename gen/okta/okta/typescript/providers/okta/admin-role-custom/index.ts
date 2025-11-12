// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/admin_role_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminRoleCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the new Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/admin_role_custom#description AdminRoleCustom#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/admin_role_custom#id AdminRoleCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name given to the new Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/admin_role_custom#label AdminRoleCustom#label}
  */
  readonly label: string;
  /**
  * The permissions that the new Role grants. At least one
  * 				permission must be specified when creating custom role. Valid values: "okta.users.manage",
  * 				"okta.users.create",
  * 				"okta.users.read",
  * 				"okta.users.credentials.manage",
  * 				"okta.users.credentials.resetFactors",
  * 				"okta.users.credentials.resetPassword",
  * 				"okta.users.credentials.expirePassword",
  * 				"okta.users.userprofile.manage",
  * 				"okta.users.lifecycle.manage",
  * 				"okta.users.lifecycle.activate",
  * 				"okta.users.lifecycle.deactivate",
  * 				"okta.users.lifecycle.suspend",
  * 				"okta.users.lifecycle.unsuspend",
  * 				"okta.users.lifecycle.delete",
  * 				"okta.users.lifecycle.unlock",
  * 				"okta.users.lifecycle.clearSessions",
  * 				"okta.users.groupMembership.manage",
  * 				"okta.users.appAssignment.manage",
  * 				"okta.users.apitokens.manage",
  * 				"okta.users.apitokens.read",
  * 				"okta.groups.manage",
  * 				"okta.groups.create",
  * 				"okta.groups.members.manage",
  * 				"okta.groups.read",
  * 				"okta.groups.appAssignment.manage",
  * 				"okta.apps.read",
  * 				"okta.apps.manage",
  * 				"okta.apps.assignment.manage",
  * 				"okta.profilesources.import.run",
  * 				"okta.authzServers.read",
  * 				"okta.users.userprofile.manage",
  * 				"okta.authzServers.manage",
  * 				"okta.customizations.read",
  * 				"okta.customizations.manage",
  * 				"okta.identityProviders.read",
  * 				"okta.identityProviders.manage",
  * 				"okta.workflows.read",
  * 				"okta.workflows.invoke".
  * 				"okta.governance.accessCertifications.manage",
  * 				"okta.governance.accessRequests.manage",
  * 				"okta.apps.manageFirstPartyApps",
  * 				"okta.agents.manage",
  * 				"okta.agents.register",
  * 				"okta.agents.view",
  * 				"okta.directories.manage",
  * 				"okta.directories.read",
  * 				"okta.devices.manage",
  * 				"okta.devices.lifecycle.manage",
  * 				"okta.devices.lifecycle.activate",
  * 				"okta.devices.lifecycle.deactivate",
  * 				"okta.devices.lifecycle.suspend",
  * 				"okta.devices.lifecycle.unsuspend",
  * 				"okta.devices.lifecycle.delete",
  * 				"okta.devices.read",
  * 				"okta.iam.read",
  * 				"okta.support.cases.manage".,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/admin_role_custom#permissions AdminRoleCustom#permissions}
  */
  readonly permissions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/admin_role_custom okta_admin_role_custom}
*/
export class AdminRoleCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_admin_role_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminRoleCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminRoleCustom to import
  * @param importFromId The id of the existing AdminRoleCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/admin_role_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminRoleCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_admin_role_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/admin_role_custom okta_admin_role_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminRoleCustomConfig
  */
  public constructor(scope: Construct, id: string, config: AdminRoleCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_admin_role_custom',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0',
        providerVersionConstraint: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._label = config.label;
    this._permissions = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
