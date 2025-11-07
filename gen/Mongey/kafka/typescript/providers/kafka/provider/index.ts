// https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaProviderConfig {
  /**
  * A list of kafka brokers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#bootstrap_servers KafkaProvider#bootstrap_servers}
  */
  readonly bootstrapServers: string[];
  /**
  * CA certificate file to validate the server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#ca_cert KafkaProvider#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Path to a CA certificate file to validate the server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#ca_cert_file KafkaProvider#ca_cert_file}
  */
  readonly caCertFile?: string;
  /**
  * The client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#client_cert KafkaProvider#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Path to a file containing the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#client_cert_file KafkaProvider#client_cert_file}
  */
  readonly clientCertFile?: string;
  /**
  * The private key that the certificate was issued for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#client_key KafkaProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * Path to a file containing the private key that the certificate was issued for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#client_key_file KafkaProvider#client_key_file}
  */
  readonly clientKeyFile?: string;
  /**
  * The passphrase for the private key that the certificate was issued for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#client_key_passphrase KafkaProvider#client_key_passphrase}
  */
  readonly clientKeyPassphrase?: string;
  /**
  * The version of Kafka protocol to use in `$MAJOR.$MINOR.$PATCH` format. Some features may not be available on older versions. Default is 2.7.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#kafka_version KafkaProvider#kafka_version}
  */
  readonly kafkaVersion?: string;
  /**
  * The AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_access_key KafkaProvider#sasl_aws_access_key}
  */
  readonly saslAwsAccessKey?: string;
  /**
  * Path to a file containing the AWS pod identity authorization token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_container_authorization_token_file KafkaProvider#sasl_aws_container_authorization_token_file}
  */
  readonly saslAwsContainerAuthorizationTokenFile?: string;
  /**
  * URI to retrieve AWS credentials from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_container_credentials_full_uri KafkaProvider#sasl_aws_container_credentials_full_uri}
  */
  readonly saslAwsContainerCredentialsFullUri?: string;
  /**
  * Set this to true to turn AWS credentials debug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_creds_debug KafkaProvider#sasl_aws_creds_debug}
  */
  readonly saslAwsCredsDebug?: boolean | cdktf.IResolvable;
  /**
  * External ID of the AWS IAM role to assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_external_id KafkaProvider#sasl_aws_external_id}
  */
  readonly saslAwsExternalId?: string;
  /**
  * AWS profile name to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_profile KafkaProvider#sasl_aws_profile}
  */
  readonly saslAwsProfile?: string;
  /**
  * AWS region where MSK is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_region KafkaProvider#sasl_aws_region}
  */
  readonly saslAwsRegion?: string;
  /**
  * Arn of an AWS IAM role to assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_role_arn KafkaProvider#sasl_aws_role_arn}
  */
  readonly saslAwsRoleArn?: string;
  /**
  * The AWS secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_secret_key KafkaProvider#sasl_aws_secret_key}
  */
  readonly saslAwsSecretKey?: string;
  /**
  * List of paths to AWS shared config files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_shared_config_files KafkaProvider#sasl_aws_shared_config_files}
  */
  readonly saslAwsSharedConfigFiles?: string[];
  /**
  * The AWS session token. Only required if you are using temporary security credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_aws_token KafkaProvider#sasl_aws_token}
  */
  readonly saslAwsToken?: string;
  /**
  * SASL mechanism, can be plain, scram-sha512, scram-sha256, aws-iam
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_mechanism KafkaProvider#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * OAuth scopes to request when using the oauthbearer mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_oauth_scopes KafkaProvider#sasl_oauth_scopes}
  */
  readonly saslOauthScopes?: string[];
  /**
  * Password for SASL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_password KafkaProvider#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * The url to retrieve oauth2 tokens from, when using sasl mechanism oauthbearer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_token_url KafkaProvider#sasl_token_url}
  */
  readonly saslTokenUrl?: string;
  /**
  * Username for SASL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#sasl_username KafkaProvider#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Set this to true only if the target Kafka server is an insecure development instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#skip_tls_verify KafkaProvider#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#timeout KafkaProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * Enable communication with the Kafka Cluster over TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#tls_enabled KafkaProvider#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#alias KafkaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs kafka}
*/
export class KafkaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kafka";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaProvider to import
  * @param importFromId The id of the existing KafkaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kafka", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs kafka} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaProviderConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'kafka',
      terraformGeneratorMetadata: {
        providerName: 'kafka',
        providerVersion: '0.13.1'
      },
      terraformProviderSource: 'Mongey/kafka'
    });
    this._bootstrapServers = config.bootstrapServers;
    this._caCert = config.caCert;
    this._caCertFile = config.caCertFile;
    this._clientCert = config.clientCert;
    this._clientCertFile = config.clientCertFile;
    this._clientKey = config.clientKey;
    this._clientKeyFile = config.clientKeyFile;
    this._clientKeyPassphrase = config.clientKeyPassphrase;
    this._kafkaVersion = config.kafkaVersion;
    this._saslAwsAccessKey = config.saslAwsAccessKey;
    this._saslAwsContainerAuthorizationTokenFile = config.saslAwsContainerAuthorizationTokenFile;
    this._saslAwsContainerCredentialsFullUri = config.saslAwsContainerCredentialsFullUri;
    this._saslAwsCredsDebug = config.saslAwsCredsDebug;
    this._saslAwsExternalId = config.saslAwsExternalId;
    this._saslAwsProfile = config.saslAwsProfile;
    this._saslAwsRegion = config.saslAwsRegion;
    this._saslAwsRoleArn = config.saslAwsRoleArn;
    this._saslAwsSecretKey = config.saslAwsSecretKey;
    this._saslAwsSharedConfigFiles = config.saslAwsSharedConfigFiles;
    this._saslAwsToken = config.saslAwsToken;
    this._saslMechanism = config.saslMechanism;
    this._saslOauthScopes = config.saslOauthScopes;
    this._saslPassword = config.saslPassword;
    this._saslTokenUrl = config.saslTokenUrl;
    this._saslUsername = config.saslUsername;
    this._skipTlsVerify = config.skipTlsVerify;
    this._timeout = config.timeout;
    this._tlsEnabled = config.tlsEnabled;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string[]; 
  public get bootstrapServers() {
    return this._bootstrapServers;
  }
  public set bootstrapServers(value: string[] | undefined) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this._caCert;
  }
  public set caCert(value: string | undefined) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_cert_file - computed: false, optional: true, required: false
  private _caCertFile?: string; 
  public get caCertFile() {
    return this._caCertFile;
  }
  public set caCertFile(value: string | undefined) {
    this._caCertFile = value;
  }
  public resetCaCertFile() {
    this._caCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertFileInput() {
    return this._caCertFile;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this._clientCert;
  }
  public set clientCert(value: string | undefined) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_cert_file - computed: false, optional: true, required: false
  private _clientCertFile?: string; 
  public get clientCertFile() {
    return this._clientCertFile;
  }
  public set clientCertFile(value: string | undefined) {
    this._clientCertFile = value;
  }
  public resetClientCertFile() {
    this._clientCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertFileInput() {
    return this._clientCertFile;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this._clientKey;
  }
  public set clientKey(value: string | undefined) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_key_file - computed: false, optional: true, required: false
  private _clientKeyFile?: string; 
  public get clientKeyFile() {
    return this._clientKeyFile;
  }
  public set clientKeyFile(value: string | undefined) {
    this._clientKeyFile = value;
  }
  public resetClientKeyFile() {
    this._clientKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyFileInput() {
    return this._clientKeyFile;
  }

  // client_key_passphrase - computed: false, optional: true, required: false
  private _clientKeyPassphrase?: string; 
  public get clientKeyPassphrase() {
    return this._clientKeyPassphrase;
  }
  public set clientKeyPassphrase(value: string | undefined) {
    this._clientKeyPassphrase = value;
  }
  public resetClientKeyPassphrase() {
    this._clientKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPassphraseInput() {
    return this._clientKeyPassphrase;
  }

  // kafka_version - computed: false, optional: true, required: false
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this._kafkaVersion;
  }
  public set kafkaVersion(value: string | undefined) {
    this._kafkaVersion = value;
  }
  public resetKafkaVersion() {
    this._kafkaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
  }

  // sasl_aws_access_key - computed: false, optional: true, required: false
  private _saslAwsAccessKey?: string; 
  public get saslAwsAccessKey() {
    return this._saslAwsAccessKey;
  }
  public set saslAwsAccessKey(value: string | undefined) {
    this._saslAwsAccessKey = value;
  }
  public resetSaslAwsAccessKey() {
    this._saslAwsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsAccessKeyInput() {
    return this._saslAwsAccessKey;
  }

  // sasl_aws_container_authorization_token_file - computed: false, optional: true, required: false
  private _saslAwsContainerAuthorizationTokenFile?: string; 
  public get saslAwsContainerAuthorizationTokenFile() {
    return this._saslAwsContainerAuthorizationTokenFile;
  }
  public set saslAwsContainerAuthorizationTokenFile(value: string | undefined) {
    this._saslAwsContainerAuthorizationTokenFile = value;
  }
  public resetSaslAwsContainerAuthorizationTokenFile() {
    this._saslAwsContainerAuthorizationTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsContainerAuthorizationTokenFileInput() {
    return this._saslAwsContainerAuthorizationTokenFile;
  }

  // sasl_aws_container_credentials_full_uri - computed: false, optional: true, required: false
  private _saslAwsContainerCredentialsFullUri?: string; 
  public get saslAwsContainerCredentialsFullUri() {
    return this._saslAwsContainerCredentialsFullUri;
  }
  public set saslAwsContainerCredentialsFullUri(value: string | undefined) {
    this._saslAwsContainerCredentialsFullUri = value;
  }
  public resetSaslAwsContainerCredentialsFullUri() {
    this._saslAwsContainerCredentialsFullUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsContainerCredentialsFullUriInput() {
    return this._saslAwsContainerCredentialsFullUri;
  }

  // sasl_aws_creds_debug - computed: false, optional: true, required: false
  private _saslAwsCredsDebug?: boolean | cdktf.IResolvable; 
  public get saslAwsCredsDebug() {
    return this._saslAwsCredsDebug;
  }
  public set saslAwsCredsDebug(value: boolean | cdktf.IResolvable | undefined) {
    this._saslAwsCredsDebug = value;
  }
  public resetSaslAwsCredsDebug() {
    this._saslAwsCredsDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsCredsDebugInput() {
    return this._saslAwsCredsDebug;
  }

  // sasl_aws_external_id - computed: false, optional: true, required: false
  private _saslAwsExternalId?: string; 
  public get saslAwsExternalId() {
    return this._saslAwsExternalId;
  }
  public set saslAwsExternalId(value: string | undefined) {
    this._saslAwsExternalId = value;
  }
  public resetSaslAwsExternalId() {
    this._saslAwsExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsExternalIdInput() {
    return this._saslAwsExternalId;
  }

  // sasl_aws_profile - computed: false, optional: true, required: false
  private _saslAwsProfile?: string; 
  public get saslAwsProfile() {
    return this._saslAwsProfile;
  }
  public set saslAwsProfile(value: string | undefined) {
    this._saslAwsProfile = value;
  }
  public resetSaslAwsProfile() {
    this._saslAwsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsProfileInput() {
    return this._saslAwsProfile;
  }

  // sasl_aws_region - computed: false, optional: true, required: false
  private _saslAwsRegion?: string; 
  public get saslAwsRegion() {
    return this._saslAwsRegion;
  }
  public set saslAwsRegion(value: string | undefined) {
    this._saslAwsRegion = value;
  }
  public resetSaslAwsRegion() {
    this._saslAwsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsRegionInput() {
    return this._saslAwsRegion;
  }

  // sasl_aws_role_arn - computed: false, optional: true, required: false
  private _saslAwsRoleArn?: string; 
  public get saslAwsRoleArn() {
    return this._saslAwsRoleArn;
  }
  public set saslAwsRoleArn(value: string | undefined) {
    this._saslAwsRoleArn = value;
  }
  public resetSaslAwsRoleArn() {
    this._saslAwsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsRoleArnInput() {
    return this._saslAwsRoleArn;
  }

  // sasl_aws_secret_key - computed: false, optional: true, required: false
  private _saslAwsSecretKey?: string; 
  public get saslAwsSecretKey() {
    return this._saslAwsSecretKey;
  }
  public set saslAwsSecretKey(value: string | undefined) {
    this._saslAwsSecretKey = value;
  }
  public resetSaslAwsSecretKey() {
    this._saslAwsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsSecretKeyInput() {
    return this._saslAwsSecretKey;
  }

  // sasl_aws_shared_config_files - computed: false, optional: true, required: false
  private _saslAwsSharedConfigFiles?: string[]; 
  public get saslAwsSharedConfigFiles() {
    return this._saslAwsSharedConfigFiles;
  }
  public set saslAwsSharedConfigFiles(value: string[] | undefined) {
    this._saslAwsSharedConfigFiles = value;
  }
  public resetSaslAwsSharedConfigFiles() {
    this._saslAwsSharedConfigFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsSharedConfigFilesInput() {
    return this._saslAwsSharedConfigFiles;
  }

  // sasl_aws_token - computed: false, optional: true, required: false
  private _saslAwsToken?: string; 
  public get saslAwsToken() {
    return this._saslAwsToken;
  }
  public set saslAwsToken(value: string | undefined) {
    this._saslAwsToken = value;
  }
  public resetSaslAwsToken() {
    this._saslAwsToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAwsTokenInput() {
    return this._saslAwsToken;
  }

  // sasl_mechanism - computed: false, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this._saslMechanism;
  }
  public set saslMechanism(value: string | undefined) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_oauth_scopes - computed: false, optional: true, required: false
  private _saslOauthScopes?: string[]; 
  public get saslOauthScopes() {
    return this._saslOauthScopes;
  }
  public set saslOauthScopes(value: string[] | undefined) {
    this._saslOauthScopes = value;
  }
  public resetSaslOauthScopes() {
    this._saslOauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslOauthScopesInput() {
    return this._saslOauthScopes;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this._saslPassword;
  }
  public set saslPassword(value: string | undefined) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_token_url - computed: false, optional: true, required: false
  private _saslTokenUrl?: string; 
  public get saslTokenUrl() {
    return this._saslTokenUrl;
  }
  public set saslTokenUrl(value: string | undefined) {
    this._saslTokenUrl = value;
  }
  public resetSaslTokenUrl() {
    this._saslTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslTokenUrlInput() {
    return this._saslTokenUrl;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this._saslUsername;
  }
  public set saslUsername(value: string | undefined) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this._skipTlsVerify;
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
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

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this._tlsEnabled;
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
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
      bootstrap_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bootstrapServers),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      ca_cert_file: cdktf.stringToTerraform(this._caCertFile),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_cert_file: cdktf.stringToTerraform(this._clientCertFile),
      client_key: cdktf.stringToTerraform(this._clientKey),
      client_key_file: cdktf.stringToTerraform(this._clientKeyFile),
      client_key_passphrase: cdktf.stringToTerraform(this._clientKeyPassphrase),
      kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
      sasl_aws_access_key: cdktf.stringToTerraform(this._saslAwsAccessKey),
      sasl_aws_container_authorization_token_file: cdktf.stringToTerraform(this._saslAwsContainerAuthorizationTokenFile),
      sasl_aws_container_credentials_full_uri: cdktf.stringToTerraform(this._saslAwsContainerCredentialsFullUri),
      sasl_aws_creds_debug: cdktf.booleanToTerraform(this._saslAwsCredsDebug),
      sasl_aws_external_id: cdktf.stringToTerraform(this._saslAwsExternalId),
      sasl_aws_profile: cdktf.stringToTerraform(this._saslAwsProfile),
      sasl_aws_region: cdktf.stringToTerraform(this._saslAwsRegion),
      sasl_aws_role_arn: cdktf.stringToTerraform(this._saslAwsRoleArn),
      sasl_aws_secret_key: cdktf.stringToTerraform(this._saslAwsSecretKey),
      sasl_aws_shared_config_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._saslAwsSharedConfigFiles),
      sasl_aws_token: cdktf.stringToTerraform(this._saslAwsToken),
      sasl_mechanism: cdktf.stringToTerraform(this._saslMechanism),
      sasl_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._saslOauthScopes),
      sasl_password: cdktf.stringToTerraform(this._saslPassword),
      sasl_token_url: cdktf.stringToTerraform(this._saslTokenUrl),
      sasl_username: cdktf.stringToTerraform(this._saslUsername),
      skip_tls_verify: cdktf.booleanToTerraform(this._skipTlsVerify),
      timeout: cdktf.numberToTerraform(this._timeout),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bootstrap_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bootstrapServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_file: {
        value: cdktf.stringToHclTerraform(this._caCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert_file: {
        value: cdktf.stringToHclTerraform(this._clientCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktf.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key_file: {
        value: cdktf.stringToHclTerraform(this._clientKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._clientKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_version: {
        value: cdktf.stringToHclTerraform(this._kafkaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_aws_access_key: {
        value: cdktf.stringToHclTerraform(this._saslAwsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_aws_container_authorization_token_file: {
        value: cdktf.stringToHclTerraform(this._saslAwsContainerAuthorizationTokenFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_aws_container_credentials_full_uri: {
        value: cdktf.stringToHclTerraform(this._saslAwsContainerCredentialsFullUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_aws_creds_debug: {
        value: cdktf.booleanToHclTerraform(this._saslAwsCredsDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sasl_aws_external_id: {
        value: cdktf.stringToHclTerraform(this._saslAwsExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_aws_profile: {
        value: cdktf.stringToHclTerraform(this._saslAwsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_aws_region: {
        value: cdktf.stringToHclTerraform(this._saslAwsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_aws_role_arn: {
        value: cdktf.stringToHclTerraform(this._saslAwsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_aws_secret_key: {
        value: cdktf.stringToHclTerraform(this._saslAwsSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_aws_shared_config_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._saslAwsSharedConfigFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sasl_aws_token: {
        value: cdktf.stringToHclTerraform(this._saslAwsToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_mechanism: {
        value: cdktf.stringToHclTerraform(this._saslMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_oauth_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._saslOauthScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sasl_password: {
        value: cdktf.stringToHclTerraform(this._saslPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_token_url: {
        value: cdktf.stringToHclTerraform(this._saslTokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_username: {
        value: cdktf.stringToHclTerraform(this._saslUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_tls_verify: {
        value: cdktf.booleanToHclTerraform(this._skipTlsVerify),
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
      tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
