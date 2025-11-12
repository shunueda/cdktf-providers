// https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DavinciProviderConfig {
  /**
  * PingOne DaVinci specific access token. Must be authorized for environment_id.  Default value can be set with the `PINGONE_DAVINCI_ACCESS_TOKEN` environment variable. Must provide username and password, or access_token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs#access_token DavinciProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Environment ID PingOne User Login. Default value can be set with the `PINGONE_ENVIRONMENT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs#environment_id DavinciProvider#environment_id}
  */
  readonly environmentId?: string;
  /**
  * To override the default region-based url, provide a PingOne DaVinci API host url. Default value can be set with the `PINGONE_DAVINCI_HOST_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs#host_url DavinciProvider#host_url}
  */
  readonly hostUrl?: string;
  /**
  * The PingOne password used for SSO into a Davinci tenant.  Default value can be set with the `PINGONE_PASSWORD` environment variable. Must provide username and password, or access_token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs#password DavinciProvider#password}
  */
  readonly password?: string;
  /**
  * The PingOne region to use.  Options are `Australia-AsiaPacific` (for `.com.au` tenants) `AsiaPacific` (for `.asia` tenants) `Canada` (for `.ca` tenants) `Europe` (for `.eu` tenants) and `NorthAmerica` (for `.com` tenants).  Default value can be set with the `PINGONE_REGION` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs#region DavinciProvider#region}
  */
  readonly region?: string;
  /**
  * The PingOne username used for SSO into a Davinci tenant.  Default value can be set with the `PINGONE_USERNAME` environment variable. Must provide username and password, or access_token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs#username DavinciProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs#alias DavinciProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs davinci}
*/
export class DavinciProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "davinci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DavinciProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DavinciProvider to import
  * @param importFromId The id of the existing DavinciProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DavinciProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "davinci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs davinci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DavinciProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DavinciProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'davinci',
      terraformGeneratorMetadata: {
        providerName: 'davinci',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
      },
      terraformProviderSource: 'pingidentity/davinci'
    });
    this._accessToken = config.accessToken;
    this._environmentId = config.environmentId;
    this._hostUrl = config.hostUrl;
    this._password = config.password;
    this._region = config.region;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this._environmentId;
  }
  public set environmentId(value: string | undefined) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // host_url - computed: false, optional: true, required: false
  private _hostUrl?: string; 
  public get hostUrl() {
    return this._hostUrl;
  }
  public set hostUrl(value: string | undefined) {
    this._hostUrl = value;
  }
  public resetHostUrl() {
    this._hostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlInput() {
    return this._hostUrl;
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      host_url: cdktf.stringToTerraform(this._hostUrl),
      password: cdktf.stringToTerraform(this._password),
      region: cdktf.stringToTerraform(this._region),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_url: {
        value: cdktf.stringToHclTerraform(this._hostUrl),
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
