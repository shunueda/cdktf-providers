// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IonoscloudProviderConfig {
  /**
  * To be set only for reseller accounts. Allows to run terraform on a contract number under a reseller account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#contract_number IonoscloudProvider#contract_number}
  */
  readonly contractNumber?: string;
  /**
  * IonosCloud REST API URL. Usually not necessary to be set, SDKs know internally how to route requests to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#endpoint IonoscloudProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * This field is to be set only for testing purposes. It is not recommended to set this field in production environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#insecure IonoscloudProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * IonosCloud password for API operations. If token is provided, token is preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#password IonoscloudProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#retries IonoscloudProvider#retries}
  */
  readonly retries?: number;
  /**
  * Access key for IONOS Object Storage operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#s3_access_key IonoscloudProvider#s3_access_key}
  */
  readonly s3AccessKey?: string;
  /**
  * Region for IONOS Object Storage operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#s3_region IonoscloudProvider#s3_region}
  */
  readonly s3Region?: string;
  /**
  * Secret key for IONOS Object Storage operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#s3_secret_key IonoscloudProvider#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * IonosCloud bearer token for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#token IonoscloudProvider#token}
  */
  readonly token?: string;
  /**
  * IonosCloud username for API operations. If token is provided, token is preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#username IonoscloudProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#alias IonoscloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs ionoscloud}
*/
export class IonoscloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IonoscloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IonoscloudProvider to import
  * @param importFromId The id of the existing IonoscloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IonoscloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs ionoscloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IonoscloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IonoscloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.20'
      },
      terraformProviderSource: 'ionos-cloud/ionoscloud'
    });
    this._contractNumber = config.contractNumber;
    this._endpoint = config.endpoint;
    this._insecure = config.insecure;
    this._password = config.password;
    this._retries = config.retries;
    this._s3AccessKey = config.s3AccessKey;
    this._s3Region = config.s3Region;
    this._s3SecretKey = config.s3SecretKey;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract_number - computed: false, optional: true, required: false
  private _contractNumber?: string; 
  public get contractNumber() {
    return this._contractNumber;
  }
  public set contractNumber(value: string | undefined) {
    this._contractNumber = value;
  }
  public resetContractNumber() {
    this._contractNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNumberInput() {
    return this._contractNumber;
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

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // s3_access_key - computed: false, optional: true, required: false
  private _s3AccessKey?: string; 
  public get s3AccessKey() {
    return this._s3AccessKey;
  }
  public set s3AccessKey(value: string | undefined) {
    this._s3AccessKey = value;
  }
  public resetS3AccessKey() {
    this._s3AccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessKeyInput() {
    return this._s3AccessKey;
  }

  // s3_region - computed: false, optional: true, required: false
  private _s3Region?: string; 
  public get s3Region() {
    return this._s3Region;
  }
  public set s3Region(value: string | undefined) {
    this._s3Region = value;
  }
  public resetS3Region() {
    this._s3Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this._s3SecretKey;
  }
  public set s3SecretKey(value: string | undefined) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
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
      contract_number: cdktf.stringToTerraform(this._contractNumber),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      retries: cdktf.numberToTerraform(this._retries),
      s3_access_key: cdktf.stringToTerraform(this._s3AccessKey),
      s3_region: cdktf.stringToTerraform(this._s3Region),
      s3_secret_key: cdktf.stringToTerraform(this._s3SecretKey),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_number: {
        value: cdktf.stringToHclTerraform(this._contractNumber),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      s3_access_key: {
        value: cdktf.stringToHclTerraform(this._s3AccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_region: {
        value: cdktf.stringToHclTerraform(this._s3Region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_secret_key: {
        value: cdktf.stringToHclTerraform(this._s3SecretKey),
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
