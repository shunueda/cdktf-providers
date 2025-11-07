// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLoginUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Login class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#class SystemLoginUser#class}
  */
  readonly class: string;
  /**
  * Cli prompt name for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#cli_prompt SystemLoginUser#cli_prompt}
  */
  readonly cliPrompt?: string;
  /**
  * Full name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#full_name SystemLoginUser#full_name}
  */
  readonly fullName?: string;
  /**
  * The name of system login user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#name SystemLoginUser#name}
  */
  readonly name: string;
  /**
  * User identifier (uid).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#uid SystemLoginUser#uid}
  */
  readonly uid?: number;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#authentication SystemLoginUser#authentication}
  */
  readonly authentication?: SystemLoginUserAuthentication;
}
export interface SystemLoginUserAuthentication {
  /**
  * Encrypted password string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#encrypted_password SystemLoginUser#encrypted_password}
  */
  readonly encryptedPassword?: string;
  /**
  * Disables ssh public key based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#no_public_keys SystemLoginUser#no_public_keys}
  */
  readonly noPublicKeys?: boolean | cdktf.IResolvable;
  /**
  * Plain text password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#plain_text_password SystemLoginUser#plain_text_password}
  */
  readonly plainTextPassword?: string;
  /**
  * Secure shell (ssh) public key string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#ssh_public_keys SystemLoginUser#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
}

export function systemLoginUserAuthenticationToTerraform(struct?: SystemLoginUserAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_password: cdktf.stringToTerraform(struct!.encryptedPassword),
    no_public_keys: cdktf.booleanToTerraform(struct!.noPublicKeys),
    plain_text_password: cdktf.stringToTerraform(struct!.plainTextPassword),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
  }
}


export function systemLoginUserAuthenticationToHclTerraform(struct?: SystemLoginUserAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_password: {
      value: cdktf.stringToHclTerraform(struct!.encryptedPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_public_keys: {
      value: cdktf.booleanToHclTerraform(struct!.noPublicKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plain_text_password: {
      value: cdktf.stringToHclTerraform(struct!.plainTextPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLoginUserAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemLoginUserAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPassword = this._encryptedPassword;
    }
    if (this._noPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPublicKeys = this._noPublicKeys;
    }
    if (this._plainTextPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextPassword = this._plainTextPassword;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLoginUserAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedPassword = undefined;
      this._noPublicKeys = undefined;
      this._plainTextPassword = undefined;
      this._sshPublicKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedPassword = value.encryptedPassword;
      this._noPublicKeys = value.noPublicKeys;
      this._plainTextPassword = value.plainTextPassword;
      this._sshPublicKeys = value.sshPublicKeys;
    }
  }

  // encrypted_password - computed: false, optional: true, required: false
  private _encryptedPassword?: string; 
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }
  public set encryptedPassword(value: string) {
    this._encryptedPassword = value;
  }
  public resetEncryptedPassword() {
    this._encryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPasswordInput() {
    return this._encryptedPassword;
  }

  // no_public_keys - computed: false, optional: true, required: false
  private _noPublicKeys?: boolean | cdktf.IResolvable; 
  public get noPublicKeys() {
    return this.getBooleanAttribute('no_public_keys');
  }
  public set noPublicKeys(value: boolean | cdktf.IResolvable) {
    this._noPublicKeys = value;
  }
  public resetNoPublicKeys() {
    this._noPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPublicKeysInput() {
    return this._noPublicKeys;
  }

  // plain_text_password - computed: false, optional: true, required: false
  private _plainTextPassword?: string; 
  public get plainTextPassword() {
    return this.getStringAttribute('plain_text_password');
  }
  public set plainTextPassword(value: string) {
    this._plainTextPassword = value;
  }
  public resetPlainTextPassword() {
    this._plainTextPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextPasswordInput() {
    return this._plainTextPassword;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_public_keys'));
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user junos_system_login_user}
*/
export class SystemLoginUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system_login_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLoginUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLoginUser to import
  * @param importFromId The id of the existing SystemLoginUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLoginUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system_login_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_login_user junos_system_login_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLoginUserConfig
  */
  public constructor(scope: Construct, id: string, config: SystemLoginUserConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_system_login_user',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._class = config.class;
    this._cliPrompt = config.cliPrompt;
    this._fullName = config.fullName;
    this._name = config.name;
    this._uid = config.uid;
    this._authentication.internalValue = config.authentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // cli_prompt - computed: false, optional: true, required: false
  private _cliPrompt?: string; 
  public get cliPrompt() {
    return this.getStringAttribute('cli_prompt');
  }
  public set cliPrompt(value: string) {
    this._cliPrompt = value;
  }
  public resetCliPrompt() {
    this._cliPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliPromptInput() {
    return this._cliPrompt;
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // uid - computed: true, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new SystemLoginUserAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: SystemLoginUserAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class: cdktf.stringToTerraform(this._class),
      cli_prompt: cdktf.stringToTerraform(this._cliPrompt),
      full_name: cdktf.stringToTerraform(this._fullName),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.numberToTerraform(this._uid),
      authentication: systemLoginUserAuthenticationToTerraform(this._authentication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class: {
        value: cdktf.stringToHclTerraform(this._class),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_prompt: {
        value: cdktf.stringToHclTerraform(this._cliPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      uid: {
        value: cdktf.numberToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication: {
        value: systemLoginUserAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemLoginUserAuthentication",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
