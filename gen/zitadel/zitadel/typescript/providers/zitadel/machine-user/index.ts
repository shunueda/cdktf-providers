// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token type, supported values: ACCESS_TOKEN_TYPE_BEARER, ACCESS_TOKEN_TYPE_JWT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user#access_token_type MachineUser#access_token_type}
  */
  readonly accessTokenType?: string;
  /**
  * Description of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user#description MachineUser#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user#id MachineUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the machine user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user#name MachineUser#name}
  */
  readonly name: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user#org_id MachineUser#org_id}
  */
  readonly orgId?: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user#user_name MachineUser#user_name}
  */
  readonly userName: string;
  /**
  * Generate machine secret, only applicable if creation or change from false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user#with_secret MachineUser#with_secret}
  */
  readonly withSecret?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user zitadel_machine_user}
*/
export class MachineUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_machine_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineUser to import
  * @param importFromId The id of the existing MachineUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_machine_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/machine_user zitadel_machine_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineUserConfig
  */
  public constructor(scope: Construct, id: string, config: MachineUserConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_machine_user',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenType = config.accessTokenType;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._userName = config.userName;
    this._withSecret = config.withSecret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_type - computed: false, optional: true, required: false
  private _accessTokenType?: string; 
  public get accessTokenType() {
    return this.getStringAttribute('access_token_type');
  }
  public set accessTokenType(value: string) {
    this._accessTokenType = value;
  }
  public resetAccessTokenType() {
    this._accessTokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTypeInput() {
    return this._accessTokenType;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
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

  // login_names - computed: true, optional: false, required: false
  public get loginNames() {
    return this.getListAttribute('login_names');
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // preferred_login_name - computed: true, optional: false, required: false
  public get preferredLoginName() {
    return this.getStringAttribute('preferred_login_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // with_secret - computed: false, optional: true, required: false
  private _withSecret?: boolean | cdktf.IResolvable; 
  public get withSecret() {
    return this.getBooleanAttribute('with_secret');
  }
  public set withSecret(value: boolean | cdktf.IResolvable) {
    this._withSecret = value;
  }
  public resetWithSecret() {
    this._withSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSecretInput() {
    return this._withSecret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_type: cdktf.stringToTerraform(this._accessTokenType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      user_name: cdktf.stringToTerraform(this._userName),
      with_secret: cdktf.booleanToTerraform(this._withSecret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_type: {
        value: cdktf.stringToHclTerraform(this._accessTokenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_secret: {
        value: cdktf.booleanToHclTerraform(this._withSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
