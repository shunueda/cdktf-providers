// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/oauth_security_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeyfactorOauthSecurityRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the security role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/oauth_security_role#name DataKeyfactorOauthSecurityRole#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/oauth_security_role keyfactor_oauth_security_role}
*/
export class DataKeyfactorOauthSecurityRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_oauth_security_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyfactorOauthSecurityRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyfactorOauthSecurityRole to import
  * @param importFromId The id of the existing DataKeyfactorOauthSecurityRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/oauth_security_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyfactorOauthSecurityRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_oauth_security_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/oauth_security_role keyfactor_oauth_security_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyfactorOauthSecurityRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyfactorOauthSecurityRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_oauth_security_role',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // immutable - computed: true, optional: false, required: false
  public get immutable() {
    return this.getBooleanAttribute('immutable');
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

  // permission_set_id - computed: true, optional: false, required: false
  public get permissionSetId() {
    return this.getStringAttribute('permission_set_id');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
