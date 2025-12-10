// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityFtpuserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether to create the home directory with the user name or to use the existing directory as the home directory. Default is true. Cannot be used together with 'home_dir'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser#create_home_dir SecurityFtpuser#create_home_dir}
  */
  readonly createHomeDir?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object. For valid values for extensible attributes, see {extattrs:values}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser#extattrs SecurityFtpuser#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The absolute path of the FTP user's home directory. set create_home_dir to false to set home_dir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser#home_dir SecurityFtpuser#home_dir}
  */
  readonly homeDir?: string;
  /**
  * The FTP user password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser#password SecurityFtpuser#password}
  */
  readonly password: string;
  /**
  * The FTP user permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser#permission SecurityFtpuser#permission}
  */
  readonly permission?: string;
  /**
  * The FTP user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser#username SecurityFtpuser#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser nios_security_ftpuser}
*/
export class SecurityFtpuser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_security_ftpuser";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityFtpuser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityFtpuser to import
  * @param importFromId The id of the existing SecurityFtpuser that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityFtpuser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_security_ftpuser", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/security_ftpuser nios_security_ftpuser} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityFtpuserConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityFtpuserConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_security_ftpuser',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createHomeDir = config.createHomeDir;
    this._extattrs = config.extattrs;
    this._homeDir = config.homeDir;
    this._password = config.password;
    this._permission = config.permission;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_home_dir - computed: true, optional: true, required: false
  private _createHomeDir?: boolean | cdktf.IResolvable; 
  public get createHomeDir() {
    return this.getBooleanAttribute('create_home_dir');
  }
  public set createHomeDir(value: boolean | cdktf.IResolvable) {
    this._createHomeDir = value;
  }
  public resetCreateHomeDir() {
    this._createHomeDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createHomeDirInput() {
    return this._createHomeDir;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // home_dir - computed: true, optional: true, required: false
  private _homeDir?: string; 
  public get homeDir() {
    return this.getStringAttribute('home_dir');
  }
  public set homeDir(value: string) {
    this._homeDir = value;
  }
  public resetHomeDir() {
    this._homeDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirInput() {
    return this._homeDir;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_home_dir: cdktf.booleanToTerraform(this._createHomeDir),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      home_dir: cdktf.stringToTerraform(this._homeDir),
      password: cdktf.stringToTerraform(this._password),
      permission: cdktf.stringToTerraform(this._permission),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_home_dir: {
        value: cdktf.booleanToHclTerraform(this._createHomeDir),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      home_dir: {
        value: cdktf.stringToHclTerraform(this._homeDir),
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
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
