// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrismacloudProviderConfig {
  /**
  * Customer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#customer_name PrismacloudProvider#customer_name}
  */
  readonly customerName?: string;
  /**
  * Disable reconnecting on JWT expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#disable_reconnect PrismacloudProvider#disable_reconnect}
  */
  readonly disableReconnect?: boolean | cdktf.IResolvable;
  /**
  * Retrieve the provider configuration from this JSON file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#json_config_file PrismacloudProvider#json_config_file}
  */
  readonly jsonConfigFile?: string;
  /**
  * JSON web token to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#json_web_token PrismacloudProvider#json_web_token}
  */
  readonly jsonWebToken?: string;
  /**
  * Logging options for the API connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#logging PrismacloudProvider#logging}
  */
  readonly logging?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Maximum number of retries to be performed in case of rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#max_retries PrismacloudProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#password PrismacloudProvider#password}
  */
  readonly password?: string;
  /**
  * If the port is non-standard for the protocol, the port number to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#port PrismacloudProvider#port}
  */
  readonly port?: number;
  /**
  * The protocol (https or http)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#protocol PrismacloudProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * Maximum delay for exponential backoff strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#retry_max_delay PrismacloudProvider#retry_max_delay}
  */
  readonly retryMaxDelay?: number;
  /**
  * Retry type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#retry_type PrismacloudProvider#retry_type}
  */
  readonly retryType?: string;
  /**
  * Skip SSL certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#skip_ssl_cert_verification PrismacloudProvider#skip_ssl_cert_verification}
  */
  readonly skipSslCertVerification?: boolean | cdktf.IResolvable;
  /**
  * The timeout in seconds for all communications with Prisma Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#timeout PrismacloudProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * The API URL without the leading protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#url PrismacloudProvider#url}
  */
  readonly url?: string;
  /**
  * Access key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#username PrismacloudProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#alias PrismacloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs prismacloud}
*/
export class PrismacloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrismacloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrismacloudProvider to import
  * @param importFromId The id of the existing PrismacloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrismacloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs prismacloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrismacloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PrismacloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloud',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      terraformProviderSource: 'PaloAltoNetworks/prismacloud'
    });
    this._customerName = config.customerName;
    this._disableReconnect = config.disableReconnect;
    this._jsonConfigFile = config.jsonConfigFile;
    this._jsonWebToken = config.jsonWebToken;
    this._logging = config.logging;
    this._maxRetries = config.maxRetries;
    this._password = config.password;
    this._port = config.port;
    this._protocol = config.protocol;
    this._retryMaxDelay = config.retryMaxDelay;
    this._retryType = config.retryType;
    this._skipSslCertVerification = config.skipSslCertVerification;
    this._timeout = config.timeout;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_name - computed: false, optional: true, required: false
  private _customerName?: string; 
  public get customerName() {
    return this._customerName;
  }
  public set customerName(value: string | undefined) {
    this._customerName = value;
  }
  public resetCustomerName() {
    this._customerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerNameInput() {
    return this._customerName;
  }

  // disable_reconnect - computed: false, optional: true, required: false
  private _disableReconnect?: boolean | cdktf.IResolvable; 
  public get disableReconnect() {
    return this._disableReconnect;
  }
  public set disableReconnect(value: boolean | cdktf.IResolvable | undefined) {
    this._disableReconnect = value;
  }
  public resetDisableReconnect() {
    this._disableReconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReconnectInput() {
    return this._disableReconnect;
  }

  // json_config_file - computed: false, optional: true, required: false
  private _jsonConfigFile?: string; 
  public get jsonConfigFile() {
    return this._jsonConfigFile;
  }
  public set jsonConfigFile(value: string | undefined) {
    this._jsonConfigFile = value;
  }
  public resetJsonConfigFile() {
    this._jsonConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonConfigFileInput() {
    return this._jsonConfigFile;
  }

  // json_web_token - computed: false, optional: true, required: false
  private _jsonWebToken?: string; 
  public get jsonWebToken() {
    return this._jsonWebToken;
  }
  public set jsonWebToken(value: string | undefined) {
    this._jsonWebToken = value;
  }
  public resetJsonWebToken() {
    this._jsonWebToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonWebTokenInput() {
    return this._jsonWebToken;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get logging() {
    return this._logging;
  }
  public set logging(value: { [key: string]: (boolean | cdktf.IResolvable) } | undefined) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // retry_max_delay - computed: false, optional: true, required: false
  private _retryMaxDelay?: number; 
  public get retryMaxDelay() {
    return this._retryMaxDelay;
  }
  public set retryMaxDelay(value: number | undefined) {
    this._retryMaxDelay = value;
  }
  public resetRetryMaxDelay() {
    this._retryMaxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxDelayInput() {
    return this._retryMaxDelay;
  }

  // retry_type - computed: false, optional: true, required: false
  private _retryType?: string; 
  public get retryType() {
    return this._retryType;
  }
  public set retryType(value: string | undefined) {
    this._retryType = value;
  }
  public resetRetryType() {
    this._retryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTypeInput() {
    return this._retryType;
  }

  // skip_ssl_cert_verification - computed: false, optional: true, required: false
  private _skipSslCertVerification?: boolean | cdktf.IResolvable; 
  public get skipSslCertVerification() {
    return this._skipSslCertVerification;
  }
  public set skipSslCertVerification(value: boolean | cdktf.IResolvable | undefined) {
    this._skipSslCertVerification = value;
  }
  public resetSkipSslCertVerification() {
    this._skipSslCertVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSslCertVerificationInput() {
    return this._skipSslCertVerification;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      customer_name: cdktf.stringToTerraform(this._customerName),
      disable_reconnect: cdktf.booleanToTerraform(this._disableReconnect),
      json_config_file: cdktf.stringToTerraform(this._jsonConfigFile),
      json_web_token: cdktf.stringToTerraform(this._jsonWebToken),
      logging: cdktf.hashMapper(cdktf.booleanToTerraform)(this._logging),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      retry_max_delay: cdktf.numberToTerraform(this._retryMaxDelay),
      retry_type: cdktf.stringToTerraform(this._retryType),
      skip_ssl_cert_verification: cdktf.booleanToTerraform(this._skipSslCertVerification),
      timeout: cdktf.numberToTerraform(this._timeout),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_name: {
        value: cdktf.stringToHclTerraform(this._customerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_reconnect: {
        value: cdktf.booleanToHclTerraform(this._disableReconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      json_config_file: {
        value: cdktf.stringToHclTerraform(this._jsonConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_web_token: {
        value: cdktf.stringToHclTerraform(this._jsonWebToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._logging),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_max_delay: {
        value: cdktf.numberToHclTerraform(this._retryMaxDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_type: {
        value: cdktf.stringToHclTerraform(this._retryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_ssl_cert_verification: {
        value: cdktf.booleanToHclTerraform(this._skipSslCertVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
