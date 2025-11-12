// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchProviderConfig {
  /**
  * The access key for use with AWS Elasticsearch Service domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#aws_access_key ElasticsearchProvider#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making AWS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#aws_assume_role_arn ElasticsearchProvider#aws_assume_role_arn}
  */
  readonly awsAssumeRoleArn?: string;
  /**
  * The AWS profile for use with AWS Elasticsearch Service domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#aws_profile ElasticsearchProvider#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * The AWS region for use in signing of AWS elasticsearch requests. Must be specified in order to use AWS URL signing with AWS ElasticSearch endpoint exposed on a custom DNS domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#aws_region ElasticsearchProvider#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The secret key for use with AWS Elasticsearch Service domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#aws_secret_key ElasticsearchProvider#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * AWS service name used in the credential scope of signed requests to ElasticSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#aws_signature_service ElasticsearchProvider#aws_signature_service}
  */
  readonly awsSignatureService?: string;
  /**
  * The session token for use with AWS Elasticsearch Service domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#aws_token ElasticsearchProvider#aws_token}
  */
  readonly awsToken?: string;
  /**
  * A Custom CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#cacert_file ElasticsearchProvider#cacert_file}
  */
  readonly cacertFile?: string;
  /**
  * A X509 certificate to connect to elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#client_cert_path ElasticsearchProvider#client_cert_path}
  */
  readonly clientCertPath?: string;
  /**
  * A X509 key to connect to elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#client_key_path ElasticsearchProvider#client_key_path}
  */
  readonly clientKeyPath?: string;
  /**
  * ElasticSearch Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#elasticsearch_version ElasticsearchProvider#elasticsearch_version}
  */
  readonly elasticsearchVersion?: string;
  /**
  * Set the client healthcheck option for the elastic client. Healthchecking is designed for direct access to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#healthcheck ElasticsearchProvider#healthcheck}
  */
  readonly healthcheck?: boolean | cdktf.IResolvable;
  /**
  * If provided, sets the 'Host' header of requests and the 'ServerName' for certificate validation to this value. See the documentation on connecting to Elasticsearch via an SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#host_override ElasticsearchProvider#host_override}
  */
  readonly hostOverride?: string;
  /**
  * Disable SSL verification of API calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#insecure ElasticsearchProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * URL to reach the Kibana API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#kibana_url ElasticsearchProvider#kibana_url}
  */
  readonly kibanaUrl?: string;
  /**
  * Password to use to connect to elasticsearch using basic auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#password ElasticsearchProvider#password}
  */
  readonly password?: string;
  /**
  * Enable signing of AWS elasticsearch requests. The `url` must refer to AWS ES domain (`*.<region>.es.amazonaws.com`), or `aws_region` must be specified explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#sign_aws_requests ElasticsearchProvider#sign_aws_requests}
  */
  readonly signAwsRequests?: boolean | cdktf.IResolvable;
  /**
  * Set the node sniffing option for the elastic client. Client won't work with sniffing if nodes are not routable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#sniff ElasticsearchProvider#sniff}
  */
  readonly sniff?: boolean | cdktf.IResolvable;
  /**
  * A bearer token or ApiKey for an Authorization header, e.g. Active Directory API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#token ElasticsearchProvider#token}
  */
  readonly token?: string;
  /**
  * The type of token, usually ApiKey or Bearer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#token_name ElasticsearchProvider#token_name}
  */
  readonly tokenName?: string;
  /**
  * Elasticsearch URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#url ElasticsearchProvider#url}
  */
  readonly url: string;
  /**
  * Username to use to connect to elasticsearch using basic auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#username ElasticsearchProvider#username}
  */
  readonly username?: string;
  /**
  * Version ping timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#version_ping_timeout ElasticsearchProvider#version_ping_timeout}
  */
  readonly versionPingTimeout?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#alias ElasticsearchProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs elasticsearch}
*/
export class ElasticsearchProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchProvider to import
  * @param importFromId The id of the existing ElasticsearchProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs elasticsearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      terraformProviderSource: 'phillbaker/elasticsearch'
    });
    this._awsAccessKey = config.awsAccessKey;
    this._awsAssumeRoleArn = config.awsAssumeRoleArn;
    this._awsProfile = config.awsProfile;
    this._awsRegion = config.awsRegion;
    this._awsSecretKey = config.awsSecretKey;
    this._awsSignatureService = config.awsSignatureService;
    this._awsToken = config.awsToken;
    this._cacertFile = config.cacertFile;
    this._clientCertPath = config.clientCertPath;
    this._clientKeyPath = config.clientKeyPath;
    this._elasticsearchVersion = config.elasticsearchVersion;
    this._healthcheck = config.healthcheck;
    this._hostOverride = config.hostOverride;
    this._insecure = config.insecure;
    this._kibanaUrl = config.kibanaUrl;
    this._password = config.password;
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

  // elasticsearch_version - computed: false, optional: true, required: false
  private _elasticsearchVersion?: string; 
  public get elasticsearchVersion() {
    return this._elasticsearchVersion;
  }
  public set elasticsearchVersion(value: string | undefined) {
    this._elasticsearchVersion = value;
  }
  public resetElasticsearchVersion() {
    this._elasticsearchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchVersionInput() {
    return this._elasticsearchVersion;
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

  // kibana_url - computed: false, optional: true, required: false
  private _kibanaUrl?: string; 
  public get kibanaUrl() {
    return this._kibanaUrl;
  }
  public set kibanaUrl(value: string | undefined) {
    this._kibanaUrl = value;
  }
  public resetKibanaUrl() {
    this._kibanaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaUrlInput() {
    return this._kibanaUrl;
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
      aws_profile: cdktf.stringToTerraform(this._awsProfile),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      aws_signature_service: cdktf.stringToTerraform(this._awsSignatureService),
      aws_token: cdktf.stringToTerraform(this._awsToken),
      cacert_file: cdktf.stringToTerraform(this._cacertFile),
      client_cert_path: cdktf.stringToTerraform(this._clientCertPath),
      client_key_path: cdktf.stringToTerraform(this._clientKeyPath),
      elasticsearch_version: cdktf.stringToTerraform(this._elasticsearchVersion),
      healthcheck: cdktf.booleanToTerraform(this._healthcheck),
      host_override: cdktf.stringToTerraform(this._hostOverride),
      insecure: cdktf.booleanToTerraform(this._insecure),
      kibana_url: cdktf.stringToTerraform(this._kibanaUrl),
      password: cdktf.stringToTerraform(this._password),
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
      elasticsearch_version: {
        value: cdktf.stringToHclTerraform(this._elasticsearchVersion),
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
      kibana_url: {
        value: cdktf.stringToHclTerraform(this._kibanaUrl),
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
