// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FortimanagerProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#adom FortimanagerProvider#adom}
  */
  readonly adom?: string;
  /**
  * CA Bundle file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#cabundlefile FortimanagerProvider#cabundlefile}
  */
  readonly cabundlefile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#clean_session FortimanagerProvider#clean_session}
  */
  readonly cleanSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#fmg_cloud_token FortimanagerProvider#fmg_cloud_token}
  */
  readonly fmgCloudToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#fmg_type FortimanagerProvider#fmg_type}
  */
  readonly fmgType?: string;
  /**
  * The hostname/IP address of the FORTIMANAGER to be connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#hostname FortimanagerProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#import_options FortimanagerProvider#import_options}
  */
  readonly importOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#insecure FortimanagerProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#logsession FortimanagerProvider#logsession}
  */
  readonly logsession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#password FortimanagerProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#presession FortimanagerProvider#presession}
  */
  readonly presession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#scopetype FortimanagerProvider#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#token FortimanagerProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#username FortimanagerProvider#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#workspace_mode FortimanagerProvider#workspace_mode}
  */
  readonly workspaceMode?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#alias FortimanagerProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs fortimanager}
*/
export class FortimanagerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FortimanagerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FortimanagerProvider to import
  * @param importFromId The id of the existing FortimanagerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FortimanagerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs fortimanager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FortimanagerProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FortimanagerProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      terraformProviderSource: 'fortinetdev/fortimanager'
    });
    this._adom = config.adom;
    this._cabundlefile = config.cabundlefile;
    this._cleanSession = config.cleanSession;
    this._fmgCloudToken = config.fmgCloudToken;
    this._fmgType = config.fmgType;
    this._hostname = config.hostname;
    this._importOptions = config.importOptions;
    this._insecure = config.insecure;
    this._logsession = config.logsession;
    this._password = config.password;
    this._presession = config.presession;
    this._scopetype = config.scopetype;
    this._token = config.token;
    this._username = config.username;
    this._workspaceMode = config.workspaceMode;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this._adom;
  }
  public set adom(value: string | undefined) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // cabundlefile - computed: false, optional: true, required: false
  private _cabundlefile?: string; 
  public get cabundlefile() {
    return this._cabundlefile;
  }
  public set cabundlefile(value: string | undefined) {
    this._cabundlefile = value;
  }
  public resetCabundlefile() {
    this._cabundlefile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cabundlefileInput() {
    return this._cabundlefile;
  }

  // clean_session - computed: false, optional: true, required: false
  private _cleanSession?: boolean | cdktf.IResolvable; 
  public get cleanSession() {
    return this._cleanSession;
  }
  public set cleanSession(value: boolean | cdktf.IResolvable | undefined) {
    this._cleanSession = value;
  }
  public resetCleanSession() {
    this._cleanSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanSessionInput() {
    return this._cleanSession;
  }

  // fmg_cloud_token - computed: false, optional: true, required: false
  private _fmgCloudToken?: string; 
  public get fmgCloudToken() {
    return this._fmgCloudToken;
  }
  public set fmgCloudToken(value: string | undefined) {
    this._fmgCloudToken = value;
  }
  public resetFmgCloudToken() {
    this._fmgCloudToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgCloudTokenInput() {
    return this._fmgCloudToken;
  }

  // fmg_type - computed: false, optional: true, required: false
  private _fmgType?: string; 
  public get fmgType() {
    return this._fmgType;
  }
  public set fmgType(value: string | undefined) {
    this._fmgType = value;
  }
  public resetFmgType() {
    this._fmgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgTypeInput() {
    return this._fmgType;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // import_options - computed: true, optional: true, required: false
  private _importOptions?: string[]; 
  public get importOptions() {
    return this._importOptions;
  }
  public set importOptions(value: string[] | undefined) {
    this._importOptions = value;
  }
  public resetImportOptions() {
    this._importOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importOptionsInput() {
    return this._importOptions;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // logsession - computed: false, optional: true, required: false
  private _logsession?: boolean | cdktf.IResolvable; 
  public get logsession() {
    return this._logsession;
  }
  public set logsession(value: boolean | cdktf.IResolvable | undefined) {
    this._logsession = value;
  }
  public resetLogsession() {
    this._logsession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsessionInput() {
    return this._logsession;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // presession - computed: false, optional: true, required: false
  private _presession?: string; 
  public get presession() {
    return this._presession;
  }
  public set presession(value: string | undefined) {
    this._presession = value;
  }
  public resetPresession() {
    this._presession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presessionInput() {
    return this._presession;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this._scopetype;
  }
  public set scopetype(value: string | undefined) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // workspace_mode - computed: false, optional: true, required: false
  private _workspaceMode?: string; 
  public get workspaceMode() {
    return this._workspaceMode;
  }
  public set workspaceMode(value: string | undefined) {
    this._workspaceMode = value;
  }
  public resetWorkspaceMode() {
    this._workspaceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceModeInput() {
    return this._workspaceMode;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      cabundlefile: cdktf.stringToTerraform(this._cabundlefile),
      clean_session: cdktf.booleanToTerraform(this._cleanSession),
      fmg_cloud_token: cdktf.stringToTerraform(this._fmgCloudToken),
      fmg_type: cdktf.stringToTerraform(this._fmgType),
      hostname: cdktf.stringToTerraform(this._hostname),
      import_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importOptions),
      insecure: cdktf.booleanToTerraform(this._insecure),
      logsession: cdktf.booleanToTerraform(this._logsession),
      password: cdktf.stringToTerraform(this._password),
      presession: cdktf.stringToTerraform(this._presession),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      workspace_mode: cdktf.stringToTerraform(this._workspaceMode),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cabundlefile: {
        value: cdktf.stringToHclTerraform(this._cabundlefile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clean_session: {
        value: cdktf.booleanToHclTerraform(this._cleanSession),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fmg_cloud_token: {
        value: cdktf.stringToHclTerraform(this._fmgCloudToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg_type: {
        value: cdktf.stringToHclTerraform(this._fmgType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logsession: {
        value: cdktf.booleanToHclTerraform(this._logsession),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      presession: {
        value: cdktf.stringToHclTerraform(this._presession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
      workspace_mode: {
        value: cdktf.stringToHclTerraform(this._workspaceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
