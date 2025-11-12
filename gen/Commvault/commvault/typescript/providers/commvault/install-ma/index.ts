// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstallMaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the company id to which the installed MA should be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma#company_id InstallMa#company_id}
  */
  readonly companyId?: number;
  /**
  * Specifies the Media Agent Hostname user for the installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma#hostname InstallMa#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma#id InstallMa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies whether OS is Unix or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma#is_unix InstallMa#is_unix}
  */
  readonly isUnix?: boolean | cdktf.IResolvable;
  /**
  * Specifies the Media Agent name used for installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma#mediaagent_name InstallMa#mediaagent_name}
  */
  readonly mediaagentName: string;
  /**
  * Specifies the password for the host computer for the installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma#password InstallMa#password}
  */
  readonly password: string;
  /**
  * Specifies the User name of the host computer for the installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma#user_name InstallMa#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma commvault_install_ma}
*/
export class InstallMa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_install_ma";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstallMa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstallMa to import
  * @param importFromId The id of the existing InstallMa that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstallMa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_install_ma", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/install_ma commvault_install_ma} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstallMaConfig
  */
  public constructor(scope: Construct, id: string, config: InstallMaConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_install_ma',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._companyId = config.companyId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._isUnix = config.isUnix;
    this._mediaagentName = config.mediaagentName;
    this._password = config.password;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_id - computed: false, optional: true, required: false
  private _companyId?: number; 
  public get companyId() {
    return this.getNumberAttribute('company_id');
  }
  public set companyId(value: number) {
    this._companyId = value;
  }
  public resetCompanyId() {
    this._companyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // is_unix - computed: false, optional: true, required: false
  private _isUnix?: boolean | cdktf.IResolvable; 
  public get isUnix() {
    return this.getBooleanAttribute('is_unix');
  }
  public set isUnix(value: boolean | cdktf.IResolvable) {
    this._isUnix = value;
  }
  public resetIsUnix() {
    this._isUnix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnixInput() {
    return this._isUnix;
  }

  // mediaagent_name - computed: false, optional: false, required: true
  private _mediaagentName?: string; 
  public get mediaagentName() {
    return this.getStringAttribute('mediaagent_name');
  }
  public set mediaagentName(value: string) {
    this._mediaagentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaagentNameInput() {
    return this._mediaagentName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company_id: cdktf.numberToTerraform(this._companyId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      is_unix: cdktf.booleanToTerraform(this._isUnix),
      mediaagent_name: cdktf.stringToTerraform(this._mediaagentName),
      password: cdktf.stringToTerraform(this._password),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company_id: {
        value: cdktf.numberToHclTerraform(this._companyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      is_unix: {
        value: cdktf.booleanToHclTerraform(this._isUnix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mediaagent_name: {
        value: cdktf.stringToHclTerraform(this._mediaagentName),
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
