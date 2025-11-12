// https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchProviderConfig {
  /**
  * The access key for use with AWS OpenSearch Service domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#aws_access_key OpensearchProvider#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making AWS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#aws_assume_role_arn OpensearchProvider#aws_assume_role_arn}
  */
  readonly awsAssumeRoleArn?: string;
  /**
  * External ID configured in the IAM policy of the IAM Role to assume prior to making AWS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#aws_assume_role_external_id OpensearchProvider#aws_assume_role_external_id}
  */
  readonly awsAssumeRoleExternalId?: string;
  /**
  * The AWS profile for use with AWS OpenSearch Service domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#aws_profile OpensearchProvider#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * The AWS region for use in signing of AWS OpenSearch requests. Must be specified in order to use AWS URL signing with AWS OpenSearch endpoint exposed on a custom DNS domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#aws_region OpensearchProvider#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The secret key for use with AWS OpenSearch Service domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#aws_secret_key OpensearchProvider#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * AWS service name used in the credential scope of signed requests to OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#aws_signature_service OpensearchProvider#aws_signature_service}
  */
  readonly awsSignatureService?: string;
  /**
  * The session token for use with AWS OpenSearch Service domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#aws_token OpensearchProvider#aws_token}
  */
  readonly awsToken?: string;
  /**
  * A Custom CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#cacert_file OpensearchProvider#cacert_file}
  */
  readonly cacertFile?: string;
  /**
  * A X509 certificate to connect to OpenSearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#client_cert_path OpensearchProvider#client_cert_path}
  */
  readonly clientCertPath?: string;
  /**
  * A X509 key to connect to OpenSearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#client_key_path OpensearchProvider#client_key_path}
  */
  readonly clientKeyPath?: string;
  /**
  * Set the client healthcheck option for the OpenSearch client. Healthchecking is designed for direct access to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#healthcheck OpensearchProvider#healthcheck}
  */
  readonly healthcheck?: boolean | cdktf.IResolvable;
  /**
  * If provided, sets the 'Host' header of requests and the 'ServerName' for certificate validation to this value. See the documentation on connecting to OpenSearch via an SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#host_override OpensearchProvider#host_override}
  */
  readonly hostOverride?: string;
  /**
  * Disable SSL verification of API calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#insecure OpensearchProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * OpenSearch Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#opensearch_version OpensearchProvider#opensearch_version}
  */
  readonly opensearchVersion?: string;
  /**
  * Password to use to connect to OpenSearch using basic auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#password OpensearchProvider#password}
  */
  readonly password?: string;
  /**
  * Proxy URL to use for requests to OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#proxy OpensearchProvider#proxy}
  */
  readonly proxy?: string;
  /**
  * Enable signing of AWS OpenSearch requests. The `url` must refer to AWS ES domain (`*.<region>.es.amazonaws.com`), or `aws_region` must be specified explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#sign_aws_requests OpensearchProvider#sign_aws_requests}
  */
  readonly signAwsRequests?: boolean | cdktf.IResolvable;
  /**
  * Set the node sniffing option for the OpenSearch client. Client won't work with sniffing if nodes are not routable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#sniff OpensearchProvider#sniff}
  */
  readonly sniff?: boolean | cdktf.IResolvable;
  /**
  * A bearer token or ApiKey for an Authorization header, e.g. Active Directory API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#token OpensearchProvider#token}
  */
  readonly token?: string;
  /**
  * The type of token, usually ApiKey or Bearer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#token_name OpensearchProvider#token_name}
  */
  readonly tokenName?: string;
  /**
  * OpenSearch URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#url OpensearchProvider#url}
  */
  readonly url: string;
  /**
  * Username to use to connect to OpenSearch using basic auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#username OpensearchProvider#username}
  */
  readonly username?: string;
  /**
  * Version ping timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#version_ping_timeout OpensearchProvider#version_ping_timeout}
  */
  readonly versionPingTimeout?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#alias OpensearchProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs opensearch}
*/
export class OpensearchProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opensearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchProvider to import
  * @param importFromId The id of the existing OpensearchProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opensearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs opensearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchProviderConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'opensearch',
      terraformGeneratorMetadata: {
        providerName: 'opensearch',
        providerVersion: '2.3.2',
        providerVersionConstraint: '2.3.2'
      },
      terraformProviderSource: 'opensearch-project/opensearch'
    });
    this._awsAccessKey = config.awsAccessKey;
    this._awsAssumeRoleArn = config.awsAssumeRoleArn;
    this._awsAssumeRoleExternalId = config.awsAssumeRoleExternalId;
    this._awsProfile = config.awsProfile;
    this._awsRegion = config.awsRegion;
    this._awsSecretKey = config.awsSecretKey;
    this._awsSignatureService = config.awsSignatureService;
    this._awsToken = config.awsToken;
    this._cacertFile = config.cacertFile;
    this._clientCertPath = config.clientCertPath;
    this._clientKeyPath = config.clientKeyPath;
    this._healthcheck = config.healthcheck;
    this._hostOverride = config.hostOverride;
    this._insecure = config.insecure;
    this._opensearchVersion = config.opensearchVersion;
    this._password = config.password;
    this._proxy = config.proxy;
    this._signAwsRequests = config.signAwsRequests;
    this._sniff = config.sniff;
    this._token = config.token;
    this._tokenName = config.tokenName;
    this._url = config.url;
    this._username = config.username;
    this._versionPingTimeout = config.versionPingTimeout;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this._awsAccessKey;
  }
  public set awsAccessKey(value: string | undefined) {
    this._awsAccessKey = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_assume_role_arn - computed: false, optional: true, required: false
  private _awsAssumeRoleArn?: string; 
  public get awsAssumeRoleArn() {
    return this._awsAssumeRoleArn;
  }
  public set awsAssumeRoleArn(value: string | undefined) {
    this._awsAssumeRoleArn = value;
  }
  public resetAwsAssumeRoleArn() {
    this._awsAssumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAssumeRoleArnInput() {
    return this._awsAssumeRoleArn;
  }

  // aws_assume_role_external_id - computed: false, optional: true, required: false
  private _awsAssumeRoleExternalId?: string; 
  public get awsAssumeRoleExternalId() {
    return this._awsAssumeRoleExternalId;
  }
  public set awsAssumeRoleExternalId(value: string | undefined) {
    this._awsAssumeRoleExternalId = value;
  }
  public resetAwsAssumeRoleExternalId() {
    this._awsAssumeRoleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAssumeRoleExternalIdInput() {
    return this._awsAssumeRoleExternalId;
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

  // aws_secret_key - computed: false, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this._awsSecretKey;
  }
  public set awsSecretKey(value: string | undefined) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // aws_signature_service - computed: false, optional: true, required: false
  private _awsSignatureService?: string; 
  public get awsSignatureService() {
    return this._awsSignatureService;
  }
  public set awsSignatureService(value: string | undefined) {
    this._awsSignatureService = value;
  }
  public resetAwsSignatureService() {
    this._awsSignatureService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSignatureServiceInput() {
    return this._awsSignatureService;
  }

  // aws_token - computed: false, optional: true, required: false
  private _awsToken?: string; 
  public get awsToken() {
    return this._awsToken;
  }
  public set awsToken(value: string | undefined) {
    this._awsToken = value;
  }
  public resetAwsToken() {
    this._awsToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTokenInput() {
    return this._awsToken;
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

  // client_cert_path - computed: false, optional: true, required: false
  private _clientCertPath?: string; 
  public get clientCertPath() {
    return this._clientCertPath;
  }
  public set clientCertPath(value: string | undefined) {
    this._clientCertPath = value;
  }
  public resetClientCertPath() {
    this._clientCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertPathInput() {
    return this._clientCertPath;
  }

  // client_key_path - computed: false, optional: true, required: false
  private _clientKeyPath?: string; 
  public get clientKeyPath() {
    return this._clientKeyPath;
  }
  public set clientKeyPath(value: string | undefined) {
    this._clientKeyPath = value;
  }
  public resetClientKeyPath() {
    this._clientKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPathInput() {
    return this._clientKeyPath;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck?: boolean | cdktf.IResolvable; 
  public get healthcheck() {
    return this._healthcheck;
  }
  public set healthcheck(value: boolean | cdktf.IResolvable | undefined) {
    this._healthcheck = value;
  }
  public resetHealthcheck() {
    this._healthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck;
  }

  // host_override - computed: false, optional: true, required: false
  private _hostOverride?: string; 
  public get hostOverride() {
    return this._hostOverride;
  }
  public set hostOverride(value: string | undefined) {
    this._hostOverride = value;
  }
  public resetHostOverride() {
    this._hostOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOverrideInput() {
    return this._hostOverride;
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

  // opensearch_version - computed: false, optional: true, required: false
  private _opensearchVersion?: string; 
  public get opensearchVersion() {
    return this._opensearchVersion;
  }
  public set opensearchVersion(value: string | undefined) {
    this._opensearchVersion = value;
  }
  public resetOpensearchVersion() {
    this._opensearchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchVersionInput() {
    return this._opensearchVersion;
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

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this._proxy;
  }
  public set proxy(value: string | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // sign_aws_requests - computed: false, optional: true, required: false
  private _signAwsRequests?: boolean | cdktf.IResolvable; 
  public get signAwsRequests() {
    return this._signAwsRequests;
  }
  public set signAwsRequests(value: boolean | cdktf.IResolvable | undefined) {
    this._signAwsRequests = value;
  }
  public resetSignAwsRequests() {
    this._signAwsRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAwsRequestsInput() {
    return this._signAwsRequests;
  }

  // sniff - computed: false, optional: true, required: false
  private _sniff?: boolean | cdktf.IResolvable; 
  public get sniff() {
    return this._sniff;
  }
  public set sniff(value: boolean | cdktf.IResolvable | undefined) {
    this._sniff = value;
  }
  public resetSniff() {
    this._sniff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniffInput() {
    return this._sniff;
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

  // token_name - computed: false, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this._tokenName;
  }
  public set tokenName(value: string | undefined) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
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

  // version_ping_timeout - computed: false, optional: true, required: false
  private _versionPingTimeout?: number; 
  public get versionPingTimeout() {
    return this._versionPingTimeout;
  }
  public set versionPingTimeout(value: number | undefined) {
    this._versionPingTimeout = value;
  }
  public resetVersionPingTimeout() {
    this._versionPingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPingTimeoutInput() {
    return this._versionPingTimeout;
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
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_assume_role_arn: cdktf.stringToTerraform(this._awsAssumeRoleArn),
      aws_assume_role_external_id: cdktf.stringToTerraform(this._awsAssumeRoleExternalId),
      aws_profile: cdktf.stringToTerraform(this._awsProfile),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      aws_signature_service: cdktf.stringToTerraform(this._awsSignatureService),
      aws_token: cdktf.stringToTerraform(this._awsToken),
      cacert_file: cdktf.stringToTerraform(this._cacertFile),
      client_cert_path: cdktf.stringToTerraform(this._clientCertPath),
      client_key_path: cdktf.stringToTerraform(this._clientKeyPath),
      healthcheck: cdktf.booleanToTerraform(this._healthcheck),
      host_override: cdktf.stringToTerraform(this._hostOverride),
      insecure: cdktf.booleanToTerraform(this._insecure),
      opensearch_version: cdktf.stringToTerraform(this._opensearchVersion),
      password: cdktf.stringToTerraform(this._password),
      proxy: cdktf.stringToTerraform(this._proxy),
      sign_aws_requests: cdktf.booleanToTerraform(this._signAwsRequests),
      sniff: cdktf.booleanToTerraform(this._sniff),
      token: cdktf.stringToTerraform(this._token),
      token_name: cdktf.stringToTerraform(this._tokenName),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      version_ping_timeout: cdktf.numberToTerraform(this._versionPingTimeout),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_assume_role_arn: {
        value: cdktf.stringToHclTerraform(this._awsAssumeRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_assume_role_external_id: {
        value: cdktf.stringToHclTerraform(this._awsAssumeRoleExternalId),
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
      aws_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_signature_service: {
        value: cdktf.stringToHclTerraform(this._awsSignatureService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_token: {
        value: cdktf.stringToHclTerraform(this._awsToken),
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
      client_cert_path: {
        value: cdktf.stringToHclTerraform(this._clientCertPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key_path: {
        value: cdktf.stringToHclTerraform(this._clientKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthcheck: {
        value: cdktf.booleanToHclTerraform(this._healthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_override: {
        value: cdktf.stringToHclTerraform(this._hostOverride),
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
      opensearch_version: {
        value: cdktf.stringToHclTerraform(this._opensearchVersion),
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
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_aws_requests: {
        value: cdktf.booleanToHclTerraform(this._signAwsRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sniff: {
        value: cdktf.booleanToHclTerraform(this._sniff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_name: {
        value: cdktf.stringToHclTerraform(this._tokenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      version_ping_timeout: {
        value: cdktf.numberToHclTerraform(this._versionPingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
