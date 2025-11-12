// https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#auth_plugin User#auth_plugin}
  */
  readonly authPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#auth_string_hashed User#auth_string_hashed}
  */
  readonly authStringHashed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#auth_string_hex User#auth_string_hex}
  */
  readonly authStringHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#discard_old_password User#discard_old_password}
  */
  readonly discardOldPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#host User#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#plaintext_password User#plaintext_password}
  */
  readonly plaintextPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#retain_old_password User#retain_old_password}
  */
  readonly retainOldPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#tls_option User#tls_option}
  */
  readonly tlsOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#user User#user}
  */
  readonly user: string;
  /**
  * aad_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#aad_identity User#aad_identity}
  */
  readonly aadIdentity?: UserAadIdentity;
}
export interface UserAadIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#identity User#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#type User#type}
  */
  readonly type?: string;
}

export function userAadIdentityToTerraform(struct?: UserAadIdentityOutputReference | UserAadIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity: cdktf.stringToTerraform(struct!.identity),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userAadIdentityToHclTerraform(struct?: UserAadIdentityOutputReference | UserAadIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserAadIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAadIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identity = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identity = value.identity;
      this._type = value.type;
    }
  }

  // identity - computed: false, optional: false, required: true
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user mysql_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mysql_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mysql_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/user mysql_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'mysql_user',
      terraformGeneratorMetadata: {
        providerName: 'mysql',
        providerVersion: '3.0.84',
        providerVersionConstraint: '3.0.84'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authPlugin = config.authPlugin;
    this._authStringHashed = config.authStringHashed;
    this._authStringHex = config.authStringHex;
    this._discardOldPassword = config.discardOldPassword;
    this._host = config.host;
    this._id = config.id;
    this._password = config.password;
    this._plaintextPassword = config.plaintextPassword;
    this._retainOldPassword = config.retainOldPassword;
    this._tlsOption = config.tlsOption;
    this._user = config.user;
    this._aadIdentity.internalValue = config.aadIdentity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_plugin - computed: false, optional: true, required: false
  private _authPlugin?: string; 
  public get authPlugin() {
    return this.getStringAttribute('auth_plugin');
  }
  public set authPlugin(value: string) {
    this._authPlugin = value;
  }
  public resetAuthPlugin() {
    this._authPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPluginInput() {
    return this._authPlugin;
  }

  // auth_string_hashed - computed: false, optional: true, required: false
  private _authStringHashed?: string; 
  public get authStringHashed() {
    return this.getStringAttribute('auth_string_hashed');
  }
  public set authStringHashed(value: string) {
    this._authStringHashed = value;
  }
  public resetAuthStringHashed() {
    this._authStringHashed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStringHashedInput() {
    return this._authStringHashed;
  }

  // auth_string_hex - computed: false, optional: true, required: false
  private _authStringHex?: string; 
  public get authStringHex() {
    return this.getStringAttribute('auth_string_hex');
  }
  public set authStringHex(value: string) {
    this._authStringHex = value;
  }
  public resetAuthStringHex() {
    this._authStringHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStringHexInput() {
    return this._authStringHex;
  }

  // discard_old_password - computed: false, optional: true, required: false
  private _discardOldPassword?: boolean | cdktf.IResolvable; 
  public get discardOldPassword() {
    return this.getBooleanAttribute('discard_old_password');
  }
  public set discardOldPassword(value: boolean | cdktf.IResolvable) {
    this._discardOldPassword = value;
  }
  public resetDiscardOldPassword() {
    this._discardOldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardOldPasswordInput() {
    return this._discardOldPassword;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // password - computed: false, optional: true, required: false
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

  // plaintext_password - computed: false, optional: true, required: false
  private _plaintextPassword?: string; 
  public get plaintextPassword() {
    return this.getStringAttribute('plaintext_password');
  }
  public set plaintextPassword(value: string) {
    this._plaintextPassword = value;
  }
  public resetPlaintextPassword() {
    this._plaintextPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextPasswordInput() {
    return this._plaintextPassword;
  }

  // retain_old_password - computed: false, optional: true, required: false
  private _retainOldPassword?: boolean | cdktf.IResolvable; 
  public get retainOldPassword() {
    return this.getBooleanAttribute('retain_old_password');
  }
  public set retainOldPassword(value: boolean | cdktf.IResolvable) {
    this._retainOldPassword = value;
  }
  public resetRetainOldPassword() {
    this._retainOldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainOldPasswordInput() {
    return this._retainOldPassword;
  }

  // tls_option - computed: false, optional: true, required: false
  private _tlsOption?: string; 
  public get tlsOption() {
    return this.getStringAttribute('tls_option');
  }
  public set tlsOption(value: string) {
    this._tlsOption = value;
  }
  public resetTlsOption() {
    this._tlsOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsOptionInput() {
    return this._tlsOption;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // aad_identity - computed: false, optional: true, required: false
  private _aadIdentity = new UserAadIdentityOutputReference(this, "aad_identity");
  public get aadIdentity() {
    return this._aadIdentity;
  }
  public putAadIdentity(value: UserAadIdentity) {
    this._aadIdentity.internalValue = value;
  }
  public resetAadIdentity() {
    this._aadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadIdentityInput() {
    return this._aadIdentity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_plugin: cdktf.stringToTerraform(this._authPlugin),
      auth_string_hashed: cdktf.stringToTerraform(this._authStringHashed),
      auth_string_hex: cdktf.stringToTerraform(this._authStringHex),
      discard_old_password: cdktf.booleanToTerraform(this._discardOldPassword),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      plaintext_password: cdktf.stringToTerraform(this._plaintextPassword),
      retain_old_password: cdktf.booleanToTerraform(this._retainOldPassword),
      tls_option: cdktf.stringToTerraform(this._tlsOption),
      user: cdktf.stringToTerraform(this._user),
      aad_identity: userAadIdentityToTerraform(this._aadIdentity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_plugin: {
        value: cdktf.stringToHclTerraform(this._authPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_string_hashed: {
        value: cdktf.stringToHclTerraform(this._authStringHashed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_string_hex: {
        value: cdktf.stringToHclTerraform(this._authStringHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discard_old_password: {
        value: cdktf.booleanToHclTerraform(this._discardOldPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plaintext_password: {
        value: cdktf.stringToHclTerraform(this._plaintextPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_old_password: {
        value: cdktf.booleanToHclTerraform(this._retainOldPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_option: {
        value: cdktf.stringToHclTerraform(this._tlsOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aad_identity: {
        value: userAadIdentityToHclTerraform(this._aadIdentity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserAadIdentityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
