// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_root_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemRootAuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Encrypted password string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_root_authentication#encrypted_password SystemRootAuthentication#encrypted_password}
  */
  readonly encryptedPassword?: string;
  /**
  * Disables ssh public key based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_root_authentication#no_public_keys SystemRootAuthentication#no_public_keys}
  */
  readonly noPublicKeys?: boolean | cdktf.IResolvable;
  /**
  * Plain text password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_root_authentication#plain_text_password SystemRootAuthentication#plain_text_password}
  */
  readonly plainTextPassword?: string;
  /**
  * Secure shell (ssh) public key string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_root_authentication#ssh_public_keys SystemRootAuthentication#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_root_authentication junos_system_root_authentication}
*/
export class SystemRootAuthentication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system_root_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemRootAuthentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemRootAuthentication to import
  * @param importFromId The id of the existing SystemRootAuthentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_root_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemRootAuthentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system_root_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_root_authentication junos_system_root_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemRootAuthenticationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemRootAuthenticationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_system_root_authentication',
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
    this._encryptedPassword = config.encryptedPassword;
    this._noPublicKeys = config.noPublicKeys;
    this._plainTextPassword = config.plainTextPassword;
    this._sshPublicKeys = config.sshPublicKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encrypted_password: cdktf.stringToTerraform(this._encryptedPassword),
      no_public_keys: cdktf.booleanToTerraform(this._noPublicKeys),
      plain_text_password: cdktf.stringToTerraform(this._plainTextPassword),
      ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKeys),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encrypted_password: {
        value: cdktf.stringToHclTerraform(this._encryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_public_keys: {
        value: cdktf.booleanToHclTerraform(this._noPublicKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      plain_text_password: {
        value: cdktf.stringToHclTerraform(this._plainTextPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
