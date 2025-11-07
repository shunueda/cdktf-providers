// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DsmProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#acct_id DsmProvider#acct_id}
  */
  readonly acctId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#api_key DsmProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#aws_profile DsmProvider#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#aws_region DsmProvider#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#azure_region DsmProvider#azure_region}
  */
  readonly azureRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#endpoint DsmProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#insecure DsmProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#ldap_name DsmProvider#ldap_name}
  */
  readonly ldapName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#password DsmProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#port DsmProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#timeout DsmProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#username DsmProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#alias DsmProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs dsm}
*/
export class DsmProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DsmProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DsmProvider to import
  * @param importFromId The id of the existing DsmProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DsmProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs dsm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DsmProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DsmProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dsm',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36'
      },
      terraformProviderSource: 'fortanix/dsm'
    });
    this._acctId = config.acctId;
    this._apiKey = config.apiKey;
    this._awsProfile = config.awsProfile;
    this._awsRegion = config.awsRegion;
    this._azureRegion = config.azureRegion;
    this._endpoint = config.endpoint;
    this._insecure = config.insecure;
    this._ldapName = config.ldapName;
    this._password = config.password;
    this._port = config.port;
    this._timeout = config.timeout;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: false, optional: true, required: false
  private _acctId?: string; 
  public get acctId() {
    return this._acctId;
  }
  public set acctId(value: string | undefined) {
    this._acctId = value;
  }
  public resetAcctId() {
    this._acctId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctIdInput() {
    return this._acctId;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // aws_profile - computed: false, optional: true, required: false
  private _awsProfile?: string; 
  public get awsProfile() {
    return this._awsProfile;
  }
  public set awsProfile(value: string | undefined) {
    this._awsProfile = value;
  }
  public resetAwsProfile() {
    this._awsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProfileInput() {
    return this._awsProfile;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this._awsRegion;
  }
  public set awsRegion(value: string | undefined) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // azure_region - computed: false, optional: true, required: false
  private _azureRegion?: string; 
  public get azureRegion() {
    return this._azureRegion;
  }
  public set azureRegion(value: string | undefined) {
    this._azureRegion = value;
  }
  public resetAzureRegion() {
    this._azureRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionInput() {
    return this._azureRegion;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // ldap_name - computed: false, optional: true, required: false
  private _ldapName?: string; 
  public get ldapName() {
    return this._ldapName;
  }
  public set ldapName(value: string | undefined) {
    this._ldapName = value;
  }
  public resetLdapName() {
    this._ldapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapNameInput() {
    return this._ldapName;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
      acct_id: cdktf.stringToTerraform(this._acctId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      aws_profile: cdktf.stringToTerraform(this._awsProfile),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      azure_region: cdktf.stringToTerraform(this._azureRegion),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      insecure: cdktf.booleanToTerraform(this._insecure),
      ldap_name: cdktf.stringToTerraform(this._ldapName),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      timeout: cdktf.numberToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acct_id: {
        value: cdktf.stringToHclTerraform(this._acctId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_profile: {
        value: cdktf.stringToHclTerraform(this._awsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_region: {
        value: cdktf.stringToHclTerraform(this._azureRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      ldap_name: {
        value: cdktf.stringToHclTerraform(this._ldapName),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
