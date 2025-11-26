// https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/sso_default_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoDefaultRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/sso_default_roles#id SsoDefaultRoles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of default role names for the SSO configuration. These roles will be assigned by default to users who sign up via SSO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/sso_default_roles#roles SsoDefaultRoles#roles}
  */
  readonly roles: string[];
  /**
  * The ID of the associated SSO configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/sso_default_roles#sso_config_id SsoDefaultRoles#sso_config_id}
  */
  readonly ssoConfigId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/sso_default_roles materialize_sso_default_roles}
*/
export class SsoDefaultRoles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_sso_default_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoDefaultRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoDefaultRoles to import
  * @param importFromId The id of the existing SsoDefaultRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/sso_default_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoDefaultRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_sso_default_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/sso_default_roles materialize_sso_default_roles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoDefaultRolesConfig
  */
  public constructor(scope: Construct, id: string, config: SsoDefaultRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_sso_default_roles',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.5',
        providerVersionConstraint: '0.9.5'
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
    this._roles = config.roles;
    this._ssoConfigId = config.ssoConfigId;
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // sso_config_id - computed: false, optional: false, required: true
  private _ssoConfigId?: string; 
  public get ssoConfigId() {
    return this.getStringAttribute('sso_config_id');
  }
  public set ssoConfigId(value: string) {
    this._ssoConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoConfigIdInput() {
    return this._ssoConfigId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      sso_config_id: cdktf.stringToTerraform(this._ssoConfigId),
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
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sso_config_id: {
        value: cdktf.stringToHclTerraform(this._ssoConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
