// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserManagerAdvancedConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#___path___ UserManagerAdvanced#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#id UserManagerAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An option whether to enable PayPal functionality for User Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#paypal_allow UserManagerAdvanced#paypal_allow}
  */
  readonly paypalAllow?: boolean | cdktf.IResolvable;
  /**
  * The currency related to price setting in which users will be billed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#paypal_currency UserManagerAdvanced#paypal_currency}
  */
  readonly paypalCurrency?: string;
  /**
  * The password of the PayPal API account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#paypal_password UserManagerAdvanced#paypal_password}
  */
  readonly paypalPassword?: string;
  /**
  * The signature of the PayPal API account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#paypal_signature UserManagerAdvanced#paypal_signature}
  */
  readonly paypalSignature?: string;
  /**
  * An option whether to use PayPal's sandbox environment for testing purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#paypal_use_sandbox UserManagerAdvanced#paypal_use_sandbox}
  */
  readonly paypalUseSandbox?: boolean | cdktf.IResolvable;
  /**
  * The username of the PayPal API account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#paypal_user UserManagerAdvanced#paypal_user}
  */
  readonly paypalUser?: string;
  /**
  * The password for accessing `/um/PRIVATE/` section over HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#web_private_password UserManagerAdvanced#web_private_password}
  */
  readonly webPrivatePassword?: string;
  /**
  * The username for accessing `/um/PRIVATE/` section over HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#web_private_username UserManagerAdvanced#web_private_username}
  */
  readonly webPrivateUsername?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced routeros_user_manager_advanced}
*/
export class UserManagerAdvanced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_user_manager_advanced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserManagerAdvanced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserManagerAdvanced to import
  * @param importFromId The id of the existing UserManagerAdvanced that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserManagerAdvanced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_user_manager_advanced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/user_manager_advanced routeros_user_manager_advanced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserManagerAdvancedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserManagerAdvancedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_user_manager_advanced',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._id = config.id;
    this._paypalAllow = config.paypalAllow;
    this._paypalCurrency = config.paypalCurrency;
    this._paypalPassword = config.paypalPassword;
    this._paypalSignature = config.paypalSignature;
    this._paypalUseSandbox = config.paypalUseSandbox;
    this._paypalUser = config.paypalUser;
    this._webPrivatePassword = config.webPrivatePassword;
    this._webPrivateUsername = config.webPrivateUsername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // paypal_allow - computed: false, optional: true, required: false
  private _paypalAllow?: boolean | cdktf.IResolvable; 
  public get paypalAllow() {
    return this.getBooleanAttribute('paypal_allow');
  }
  public set paypalAllow(value: boolean | cdktf.IResolvable) {
    this._paypalAllow = value;
  }
  public resetPaypalAllow() {
    this._paypalAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paypalAllowInput() {
    return this._paypalAllow;
  }

  // paypal_currency - computed: false, optional: true, required: false
  private _paypalCurrency?: string; 
  public get paypalCurrency() {
    return this.getStringAttribute('paypal_currency');
  }
  public set paypalCurrency(value: string) {
    this._paypalCurrency = value;
  }
  public resetPaypalCurrency() {
    this._paypalCurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paypalCurrencyInput() {
    return this._paypalCurrency;
  }

  // paypal_password - computed: false, optional: true, required: false
  private _paypalPassword?: string; 
  public get paypalPassword() {
    return this.getStringAttribute('paypal_password');
  }
  public set paypalPassword(value: string) {
    this._paypalPassword = value;
  }
  public resetPaypalPassword() {
    this._paypalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paypalPasswordInput() {
    return this._paypalPassword;
  }

  // paypal_signature - computed: false, optional: true, required: false
  private _paypalSignature?: string; 
  public get paypalSignature() {
    return this.getStringAttribute('paypal_signature');
  }
  public set paypalSignature(value: string) {
    this._paypalSignature = value;
  }
  public resetPaypalSignature() {
    this._paypalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paypalSignatureInput() {
    return this._paypalSignature;
  }

  // paypal_use_sandbox - computed: false, optional: true, required: false
  private _paypalUseSandbox?: boolean | cdktf.IResolvable; 
  public get paypalUseSandbox() {
    return this.getBooleanAttribute('paypal_use_sandbox');
  }
  public set paypalUseSandbox(value: boolean | cdktf.IResolvable) {
    this._paypalUseSandbox = value;
  }
  public resetPaypalUseSandbox() {
    this._paypalUseSandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paypalUseSandboxInput() {
    return this._paypalUseSandbox;
  }

  // paypal_user - computed: false, optional: true, required: false
  private _paypalUser?: string; 
  public get paypalUser() {
    return this.getStringAttribute('paypal_user');
  }
  public set paypalUser(value: string) {
    this._paypalUser = value;
  }
  public resetPaypalUser() {
    this._paypalUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paypalUserInput() {
    return this._paypalUser;
  }

  // web_private_password - computed: false, optional: true, required: false
  private _webPrivatePassword?: string; 
  public get webPrivatePassword() {
    return this.getStringAttribute('web_private_password');
  }
  public set webPrivatePassword(value: string) {
    this._webPrivatePassword = value;
  }
  public resetWebPrivatePassword() {
    this._webPrivatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPrivatePasswordInput() {
    return this._webPrivatePassword;
  }

  // web_private_username - computed: false, optional: true, required: false
  private _webPrivateUsername?: string; 
  public get webPrivateUsername() {
    return this.getStringAttribute('web_private_username');
  }
  public set webPrivateUsername(value: string) {
    this._webPrivateUsername = value;
  }
  public resetWebPrivateUsername() {
    this._webPrivateUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPrivateUsernameInput() {
    return this._webPrivateUsername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      id: cdktf.stringToTerraform(this._id),
      paypal_allow: cdktf.booleanToTerraform(this._paypalAllow),
      paypal_currency: cdktf.stringToTerraform(this._paypalCurrency),
      paypal_password: cdktf.stringToTerraform(this._paypalPassword),
      paypal_signature: cdktf.stringToTerraform(this._paypalSignature),
      paypal_use_sandbox: cdktf.booleanToTerraform(this._paypalUseSandbox),
      paypal_user: cdktf.stringToTerraform(this._paypalUser),
      web_private_password: cdktf.stringToTerraform(this._webPrivatePassword),
      web_private_username: cdktf.stringToTerraform(this._webPrivateUsername),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
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
      paypal_allow: {
        value: cdktf.booleanToHclTerraform(this._paypalAllow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      paypal_currency: {
        value: cdktf.stringToHclTerraform(this._paypalCurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paypal_password: {
        value: cdktf.stringToHclTerraform(this._paypalPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paypal_signature: {
        value: cdktf.stringToHclTerraform(this._paypalSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paypal_use_sandbox: {
        value: cdktf.booleanToHclTerraform(this._paypalUseSandbox),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      paypal_user: {
        value: cdktf.stringToHclTerraform(this._paypalUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_private_password: {
        value: cdktf.stringToHclTerraform(this._webPrivatePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_private_username: {
        value: cdktf.stringToHclTerraform(this._webPrivateUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
