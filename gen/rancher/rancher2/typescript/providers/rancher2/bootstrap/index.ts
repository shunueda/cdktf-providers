// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootstrapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap#id Bootstrap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap#initial_password Bootstrap#initial_password}
  */
  readonly initialPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap#password Bootstrap#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap#token_ttl Bootstrap#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap#token_update Bootstrap#token_update}
  */
  readonly tokenUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap#ui_default_landing Bootstrap#ui_default_landing}
  */
  readonly uiDefaultLanding?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap rancher2_bootstrap}
*/
export class Bootstrap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_bootstrap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bootstrap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bootstrap to import
  * @param importFromId The id of the existing Bootstrap that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bootstrap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_bootstrap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/bootstrap rancher2_bootstrap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootstrapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BootstrapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rancher2_bootstrap',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
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
    this._initialPassword = config.initialPassword;
    this._password = config.password;
    this._tokenTtl = config.tokenTtl;
    this._tokenUpdate = config.tokenUpdate;
    this._uiDefaultLanding = config.uiDefaultLanding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_password - computed: true, optional: false, required: false
  public get currentPassword() {
    return this.getStringAttribute('current_password');
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

  // initial_password - computed: false, optional: true, required: false
  private _initialPassword?: string; 
  public get initialPassword() {
    return this.getStringAttribute('initial_password');
  }
  public set initialPassword(value: string) {
    this._initialPassword = value;
  }
  public resetInitialPassword() {
    this._initialPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPasswordInput() {
    return this._initialPassword;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // temp_token - computed: true, optional: false, required: false
  public get tempToken() {
    return this.getStringAttribute('temp_token');
  }

  // temp_token_id - computed: true, optional: false, required: false
  public get tempTokenId() {
    return this.getStringAttribute('temp_token_id');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }

  // token_ttl - computed: false, optional: true, required: false
  private _tokenTtl?: number; 
  public get tokenTtl() {
    return this.getNumberAttribute('token_ttl');
  }
  public set tokenTtl(value: number) {
    this._tokenTtl = value;
  }
  public resetTokenTtl() {
    this._tokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTtlInput() {
    return this._tokenTtl;
  }

  // token_update - computed: false, optional: true, required: false
  private _tokenUpdate?: boolean | cdktf.IResolvable; 
  public get tokenUpdate() {
    return this.getBooleanAttribute('token_update');
  }
  public set tokenUpdate(value: boolean | cdktf.IResolvable) {
    this._tokenUpdate = value;
  }
  public resetTokenUpdate() {
    this._tokenUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUpdateInput() {
    return this._tokenUpdate;
  }

  // ui_default_landing - computed: false, optional: true, required: false
  private _uiDefaultLanding?: string; 
  public get uiDefaultLanding() {
    return this.getStringAttribute('ui_default_landing');
  }
  public set uiDefaultLanding(value: string) {
    this._uiDefaultLanding = value;
  }
  public resetUiDefaultLanding() {
    this._uiDefaultLanding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiDefaultLandingInput() {
    return this._uiDefaultLanding;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      initial_password: cdktf.stringToTerraform(this._initialPassword),
      password: cdktf.stringToTerraform(this._password),
      token_ttl: cdktf.numberToTerraform(this._tokenTtl),
      token_update: cdktf.booleanToTerraform(this._tokenUpdate),
      ui_default_landing: cdktf.stringToTerraform(this._uiDefaultLanding),
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
      initial_password: {
        value: cdktf.stringToHclTerraform(this._initialPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_ttl: {
        value: cdktf.numberToHclTerraform(this._tokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_update: {
        value: cdktf.booleanToHclTerraform(this._tokenUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ui_default_landing: {
        value: cdktf.stringToHclTerraform(this._uiDefaultLanding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
