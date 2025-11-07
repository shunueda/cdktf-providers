// https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface McsProviderConfig {
  /**
  * The Identity authentication URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#auth_url McsProvider#auth_url}
  */
  readonly authUrl?: string;
  /**
  * A Custom CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#cacert_file McsProvider#cacert_file}
  */
  readonly cacertFile?: string;
  /**
  * A client certificate to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#cert McsProvider#cert}
  */
  readonly cert?: string;
  /**
  * Trust self-signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#insecure McsProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * A client private key to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#key McsProvider#key}
  */
  readonly key?: string;
  /**
  * Password to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#password McsProvider#password}
  */
  readonly password?: string;
  /**
  * The ID of Project to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#project_id McsProvider#project_id}
  */
  readonly projectId?: string;
  /**
  * A region to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#region McsProvider#region}
  */
  readonly region?: string;
  /**
  * User name to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#username McsProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#alias McsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs mcs}
*/
export class McsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mcs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a McsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the McsProvider to import
  * @param importFromId The id of the existing McsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the McsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mcs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs mcs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options McsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: McsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mcs',
      terraformGeneratorMetadata: {
        providerName: 'mcs',
        providerVersion: '0.6.14'
      },
      terraformProviderSource: 'MailRuCloudSolutions/mcs'
    });
    this._authUrl = config.authUrl;
    this._cacertFile = config.cacertFile;
    this._cert = config.cert;
    this._insecure = config.insecure;
    this._key = config.key;
    this._password = config.password;
    this._projectId = config.projectId;
    this._region = config.region;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this._authUrl;
  }
  public set authUrl(value: string | undefined) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // cacert_file - computed: false, optional: true, required: false
  private _cacertFile?: string; 
  public get cacertFile() {
    return this._cacertFile;
  }
  public set cacertFile(value: string | undefined) {
    this._cacertFile = value;
  }
  public resetCacertFile() {
    this._cacertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertFileInput() {
    return this._cacertFile;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this._cert;
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this._projectId;
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      auth_url: cdktf.stringToTerraform(this._authUrl),
      cacert_file: cdktf.stringToTerraform(this._cacertFile),
      cert: cdktf.stringToTerraform(this._cert),
      insecure: cdktf.booleanToTerraform(this._insecure),
      key: cdktf.stringToTerraform(this._key),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacert_file: {
        value: cdktf.stringToHclTerraform(this._cacertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
