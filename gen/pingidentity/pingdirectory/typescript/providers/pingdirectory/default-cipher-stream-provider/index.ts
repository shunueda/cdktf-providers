// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultCipherStreamProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access key ID that will be used if this cipher stream provider will authenticate to the Amazon Key Management Service using an access key rather than an IAM role associated with an EC2 instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#aws_access_key_id DefaultCipherStreamProvider#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * When the `type` attribute is set to:
  *   - `amazon-key-management-service`: The external server with information to use when interacting with the Amazon Key Management Service.
  *   - `amazon-secrets-manager`: The external server with information to use when interacting with the AWS Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#aws_external_server DefaultCipherStreamProvider#aws_external_server}
  */
  readonly awsExternalServer?: string;
  /**
  * The name of the Amazon Web Services region that holds the encryption key. This is optional, and if it is not provided, then the server will attempt to determine the region from the key ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#aws_region_name DefaultCipherStreamProvider#aws_region_name}
  */
  readonly awsRegionName?: string;
  /**
  * The secret access key that will be used if this cipher stream provider will authenticate to the Amazon Key Management Service using an access key rather than an IAM role associated with an EC2 instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#aws_secret_access_key DefaultCipherStreamProvider#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * The mechanism used to authenticate to the Azure service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#azure_authentication_method DefaultCipherStreamProvider#azure_authentication_method}
  */
  readonly azureAuthenticationMethod?: string;
  /**
  * An external server definition with information needed to connect and authenticate to the Conjur server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#conjur_external_server DefaultCipherStreamProvider#conjur_external_server}
  */
  readonly conjurExternalServer?: string;
  /**
  * The portion of the path that follows the account name in the URI needed to obtain the secret passphrase to use to generate the encryption key. Any special characters in the path must be URL-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#conjur_secret_relative_path DefaultCipherStreamProvider#conjur_secret_relative_path}
  */
  readonly conjurSecretRelativePath?: string;
  /**
  * A description for this Cipher Stream Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#description DefaultCipherStreamProvider#description}
  */
  readonly description?: string;
  /**
  * Indicates whether this Cipher Stream Provider is enabled for use in the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#enabled DefaultCipherStreamProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The path to a file that will hold the encrypted passphrase used by this cipher stream provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#encrypted_passphrase_file DefaultCipherStreamProvider#encrypted_passphrase_file}
  */
  readonly encryptedPassphraseFile?: string;
  /**
  * When the `type` attribute is set to:
  *   - `amazon-secrets-manager`: The path to a file that will hold metadata about the encryption performed by this Amazon Secrets Manager Cipher Stream Provider.
  *   - `azure-key-vault`: The path to a file that will hold metadata about the encryption performed by this Azure Key Vault Cipher Stream Provider.
  *   - `file-based`: The path to a file that will hold metadata about the encryption performed by this File Based Cipher Stream Provider.
  *   - `conjur`: The path to a file that will hold metadata about the encryption performed by this Conjur Cipher Stream Provider.
  *   - `pkcs11`: The path to a file that will hold metadata about the encryption performed by this PKCS11 Cipher Stream Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#encryption_metadata_file DefaultCipherStreamProvider#encryption_metadata_file}
  */
  readonly encryptionMetadataFile?: string;
  /**
  * The set of arguments used to customize the behavior for the Third Party Cipher Stream Provider. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#extension_argument DefaultCipherStreamProvider#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Cipher Stream Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#extension_class DefaultCipherStreamProvider#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * A reference to an HTTP proxy server that should be used for requests sent to the Azure service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#http_proxy_external_server DefaultCipherStreamProvider#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * The PBKDF2 iteration count that will be used when deriving the encryption key used to protect the encryption settings database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#iteration_count DefaultCipherStreamProvider#iteration_count}
  */
  readonly iterationCount?: number;
  /**
  * The clear-text user PIN needed to interact with the PKCS #11 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#key_store_pin DefaultCipherStreamProvider#key_store_pin}
  */
  readonly keyStorePin?: string;
  /**
  * The name of an environment variable whose value is the user PIN needed to interact with the PKCS #11 token. The environment variable must be defined and must contain a clear-text representation of the PIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#key_store_pin_environment_variable DefaultCipherStreamProvider#key_store_pin_environment_variable}
  */
  readonly keyStorePinEnvironmentVariable?: string;
  /**
  * The path to a file containing the user PIN needed to interact with the PKCS #11 token. The file must exist and must contain exactly one line with a clear-text representation of the PIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#key_store_pin_file DefaultCipherStreamProvider#key_store_pin_file}
  */
  readonly keyStorePinFile?: string;
  /**
  * The URI that identifies the Azure Key Vault from which the secret is to be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#key_vault_uri DefaultCipherStreamProvider#key_vault_uri}
  */
  readonly keyVaultUri?: string;
  /**
  * Supported in PingDirectory product version 10.1.0.0+. The cipher transformation that will be used to wrap and unwrap the encryption key. If no key wrapping transformation is defined, then the server will select a transformation based on the type of certificate being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#key_wrapping_transformation DefaultCipherStreamProvider#key_wrapping_transformation}
  */
  readonly keyWrappingTransformation?: string;
  /**
  * The Amazon resource name (ARN) for the KMS key that will be used to encrypt the contents of the passphrase file. This key must exist, and the AWS client must have access to encrypt and decrypt data using this key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#kms_encryption_key_arn DefaultCipherStreamProvider#kms_encryption_key_arn}
  */
  readonly kmsEncryptionKeyArn?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#name DefaultCipherStreamProvider#name}
  */
  readonly name: string;
  /**
  * The path to the file containing the password to use when generating ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#password_file DefaultCipherStreamProvider#password_file}
  */
  readonly passwordFile?: string;
  /**
  * The key store type to use when obtaining an instance of a key store for interacting with a PKCS #11 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#pkcs11_key_store_type DefaultCipherStreamProvider#pkcs11_key_store_type}
  */
  readonly pkcs11KeyStoreType?: string;
  /**
  * The fully-qualified name of the Java security provider class that implements support for interacting with PKCS #11 tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#pkcs11_provider_class DefaultCipherStreamProvider#pkcs11_provider_class}
  */
  readonly pkcs11ProviderClass?: string;
  /**
  * The path to the file to use to configure the security provider that implements support for interacting with PKCS #11 tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#pkcs11_provider_configuration_file DefaultCipherStreamProvider#pkcs11_provider_configuration_file}
  */
  readonly pkcs11ProviderConfigurationFile?: string;
  /**
  * The name of the JSON field whose value is the passphrase that will be used to generate the encryption key for protecting the contents of the encryption settings database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#secret_field_name DefaultCipherStreamProvider#secret_field_name}
  */
  readonly secretFieldName?: string;
  /**
  * The Amazon Resource Name (ARN) or the user-friendly name of the secret to be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#secret_id DefaultCipherStreamProvider#secret_id}
  */
  readonly secretId?: string;
  /**
  * The name of the secret to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#secret_name DefaultCipherStreamProvider#secret_name}
  */
  readonly secretName?: string;
  /**
  * The unique identifier for the version of the secret to be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#secret_version_id DefaultCipherStreamProvider#secret_version_id}
  */
  readonly secretVersionId?: string;
  /**
  * The staging label for the version of the secret to be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#secret_version_stage DefaultCipherStreamProvider#secret_version_stage}
  */
  readonly secretVersionStage?: string;
  /**
  * The alias for the certificate in the PKCS #11 token that will be used to wrap the encryption key. The target certificate must exist in the PKCS #11 token, and it must have an RSA key pair because the JVM does not currently provide adequate key wrapping support for elliptic curve key pairs.  If you have also configured the server to use a PKCS #11 token for accessing listener certificates, we strongly recommend that you use a different certificate to protect the contents of the encryption settings database than you use for negotiating TLS sessions with clients. It is imperative that the certificate used by this PKCS11 Cipher Stream Provider remain constant for the life of the provider because if the certificate were to be replaced, then the contents of the encryption settings database could become inaccessible. Unlike with listener certificates used for TLS negotiation that need to be replaced on a regular basis, this PKCS11 Cipher Stream Provider does not consider the validity period for the associated certificate, and it will continue to function even after the certificate has expired.  If you need to rotate the certificate used to protect the server's encryption settings database, you should first install the desired new certificate in the PKCS #11 token under a different alias. Then, you should create a new instance of this PKCS11 Cipher Stream Provider that is configured to use that certificate, and that also uses a different value for the encryption-metadata-file because the information in that file is tied to the certificate used to generate it. Finally, you will need to update the global configuration so that the encryption-settings-cipher-stream-provider property references the new cipher stream provider rather than this one. The update to the global configuration must be done with the server online so that it can properly re-encrypt the contents of the encryption settings database with the correct key tied to the new certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#ssl_cert_nickname DefaultCipherStreamProvider#ssl_cert_nickname}
  */
  readonly sslCertNickname?: string;
  /**
  * The path to a file containing the information needed to trust the certificate presented by the Vault servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#trust_store_file DefaultCipherStreamProvider#trust_store_file}
  */
  readonly trustStoreFile?: string;
  /**
  * The passphrase needed to access the contents of the trust store. This is only required if a trust store file is required, and if that trust store requires a PIN to access its contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#trust_store_pin DefaultCipherStreamProvider#trust_store_pin}
  */
  readonly trustStorePin?: string;
  /**
  * The store type for the specified trust store file. The value should likely be one of "JKS" or "PKCS12".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#trust_store_type DefaultCipherStreamProvider#trust_store_type}
  */
  readonly trustStoreType?: string;
  /**
  * The mechanism used to authenticate to the Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#vault_authentication_method DefaultCipherStreamProvider#vault_authentication_method}
  */
  readonly vaultAuthenticationMethod?: string;
  /**
  * The path to a file that will hold metadata about the encryption performed by this Vault Cipher Stream Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#vault_encryption_metadata_file DefaultCipherStreamProvider#vault_encryption_metadata_file}
  */
  readonly vaultEncryptionMetadataFile?: string;
  /**
  * An external server definition with information needed to connect and authenticate to the Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#vault_external_server DefaultCipherStreamProvider#vault_external_server}
  */
  readonly vaultExternalServer?: string;
  /**
  * The name of the field in the Vault secret record that contains the passphrase to use to generate the encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#vault_secret_field_name DefaultCipherStreamProvider#vault_secret_field_name}
  */
  readonly vaultSecretFieldName?: string;
  /**
  * The path to the desired secret in the Vault service. This will be appended to the value of the base-url property for the associated Vault external server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#vault_secret_path DefaultCipherStreamProvider#vault_secret_path}
  */
  readonly vaultSecretPath?: string;
  /**
  * The base URL needed to access the Vault server. The base URL should consist of the protocol ("http" or "https"), the server address (resolvable name or IP address), and the port number. For example, "https://vault.example.com:8200/".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#vault_server_base_uri DefaultCipherStreamProvider#vault_server_base_uri}
  */
  readonly vaultServerBaseUri?: string[];
  /**
  * Indicates whether the server should wait for the password file to become available if it does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#wait_for_password_file DefaultCipherStreamProvider#wait_for_password_file}
  */
  readonly waitForPasswordFile?: boolean | cdktf.IResolvable;
}
export interface DefaultCipherStreamProviderRequiredActions {
}

export function defaultCipherStreamProviderRequiredActionsToTerraform(struct?: DefaultCipherStreamProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultCipherStreamProviderRequiredActionsToHclTerraform(struct?: DefaultCipherStreamProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultCipherStreamProviderRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultCipherStreamProviderRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCipherStreamProviderRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultCipherStreamProviderRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultCipherStreamProviderRequiredActionsOutputReference {
    return new DefaultCipherStreamProviderRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider pingdirectory_default_cipher_stream_provider}
*/
export class DefaultCipherStreamProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_cipher_stream_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultCipherStreamProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultCipherStreamProvider to import
  * @param importFromId The id of the existing DefaultCipherStreamProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultCipherStreamProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_cipher_stream_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_stream_provider pingdirectory_default_cipher_stream_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultCipherStreamProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultCipherStreamProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_cipher_stream_provider',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsExternalServer = config.awsExternalServer;
    this._awsRegionName = config.awsRegionName;
    this._awsSecretAccessKey = config.awsSecretAccessKey;
    this._azureAuthenticationMethod = config.azureAuthenticationMethod;
    this._conjurExternalServer = config.conjurExternalServer;
    this._conjurSecretRelativePath = config.conjurSecretRelativePath;
    this._description = config.description;
    this._enabled = config.enabled;
    this._encryptedPassphraseFile = config.encryptedPassphraseFile;
    this._encryptionMetadataFile = config.encryptionMetadataFile;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._iterationCount = config.iterationCount;
    this._keyStorePin = config.keyStorePin;
    this._keyStorePinEnvironmentVariable = config.keyStorePinEnvironmentVariable;
    this._keyStorePinFile = config.keyStorePinFile;
    this._keyVaultUri = config.keyVaultUri;
    this._keyWrappingTransformation = config.keyWrappingTransformation;
    this._kmsEncryptionKeyArn = config.kmsEncryptionKeyArn;
    this._name = config.name;
    this._passwordFile = config.passwordFile;
    this._pkcs11KeyStoreType = config.pkcs11KeyStoreType;
    this._pkcs11ProviderClass = config.pkcs11ProviderClass;
    this._pkcs11ProviderConfigurationFile = config.pkcs11ProviderConfigurationFile;
    this._secretFieldName = config.secretFieldName;
    this._secretId = config.secretId;
    this._secretName = config.secretName;
    this._secretVersionId = config.secretVersionId;
    this._secretVersionStage = config.secretVersionStage;
    this._sslCertNickname = config.sslCertNickname;
    this._trustStoreFile = config.trustStoreFile;
    this._trustStorePin = config.trustStorePin;
    this._trustStoreType = config.trustStoreType;
    this._vaultAuthenticationMethod = config.vaultAuthenticationMethod;
    this._vaultEncryptionMetadataFile = config.vaultEncryptionMetadataFile;
    this._vaultExternalServer = config.vaultExternalServer;
    this._vaultSecretFieldName = config.vaultSecretFieldName;
    this._vaultSecretPath = config.vaultSecretPath;
    this._vaultServerBaseUri = config.vaultServerBaseUri;
    this._waitForPasswordFile = config.waitForPasswordFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key_id - computed: true, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_external_server - computed: true, optional: true, required: false
  private _awsExternalServer?: string; 
  public get awsExternalServer() {
    return this.getStringAttribute('aws_external_server');
  }
  public set awsExternalServer(value: string) {
    this._awsExternalServer = value;
  }
  public resetAwsExternalServer() {
    this._awsExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsExternalServerInput() {
    return this._awsExternalServer;
  }

  // aws_region_name - computed: true, optional: true, required: false
  private _awsRegionName?: string; 
  public get awsRegionName() {
    return this.getStringAttribute('aws_region_name');
  }
  public set awsRegionName(value: string) {
    this._awsRegionName = value;
  }
  public resetAwsRegionName() {
    this._awsRegionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionNameInput() {
    return this._awsRegionName;
  }

  // aws_secret_access_key - computed: true, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // azure_authentication_method - computed: true, optional: true, required: false
  private _azureAuthenticationMethod?: string; 
  public get azureAuthenticationMethod() {
    return this.getStringAttribute('azure_authentication_method');
  }
  public set azureAuthenticationMethod(value: string) {
    this._azureAuthenticationMethod = value;
  }
  public resetAzureAuthenticationMethod() {
    this._azureAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAuthenticationMethodInput() {
    return this._azureAuthenticationMethod;
  }

  // conjur_external_server - computed: true, optional: true, required: false
  private _conjurExternalServer?: string; 
  public get conjurExternalServer() {
    return this.getStringAttribute('conjur_external_server');
  }
  public set conjurExternalServer(value: string) {
    this._conjurExternalServer = value;
  }
  public resetConjurExternalServer() {
    this._conjurExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conjurExternalServerInput() {
    return this._conjurExternalServer;
  }

  // conjur_secret_relative_path - computed: true, optional: true, required: false
  private _conjurSecretRelativePath?: string; 
  public get conjurSecretRelativePath() {
    return this.getStringAttribute('conjur_secret_relative_path');
  }
  public set conjurSecretRelativePath(value: string) {
    this._conjurSecretRelativePath = value;
  }
  public resetConjurSecretRelativePath() {
    this._conjurSecretRelativePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conjurSecretRelativePathInput() {
    return this._conjurSecretRelativePath;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encrypted_passphrase_file - computed: true, optional: true, required: false
  private _encryptedPassphraseFile?: string; 
  public get encryptedPassphraseFile() {
    return this.getStringAttribute('encrypted_passphrase_file');
  }
  public set encryptedPassphraseFile(value: string) {
    this._encryptedPassphraseFile = value;
  }
  public resetEncryptedPassphraseFile() {
    this._encryptedPassphraseFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPassphraseFileInput() {
    return this._encryptedPassphraseFile;
  }

  // encryption_metadata_file - computed: true, optional: true, required: false
  private _encryptionMetadataFile?: string; 
  public get encryptionMetadataFile() {
    return this.getStringAttribute('encryption_metadata_file');
  }
  public set encryptionMetadataFile(value: string) {
    this._encryptionMetadataFile = value;
  }
  public resetEncryptionMetadataFile() {
    this._encryptionMetadataFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionMetadataFileInput() {
    return this._encryptionMetadataFile;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: true, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // http_proxy_external_server - computed: true, optional: true, required: false
  private _httpProxyExternalServer?: string; 
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }
  public set httpProxyExternalServer(value: string) {
    this._httpProxyExternalServer = value;
  }
  public resetHttpProxyExternalServer() {
    this._httpProxyExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyExternalServerInput() {
    return this._httpProxyExternalServer;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iteration_count - computed: true, optional: true, required: false
  private _iterationCount?: number; 
  public get iterationCount() {
    return this.getNumberAttribute('iteration_count');
  }
  public set iterationCount(value: number) {
    this._iterationCount = value;
  }
  public resetIterationCount() {
    this._iterationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationCountInput() {
    return this._iterationCount;
  }

  // key_store_pin - computed: true, optional: true, required: false
  private _keyStorePin?: string; 
  public get keyStorePin() {
    return this.getStringAttribute('key_store_pin');
  }
  public set keyStorePin(value: string) {
    this._keyStorePin = value;
  }
  public resetKeyStorePin() {
    this._keyStorePin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePinInput() {
    return this._keyStorePin;
  }

  // key_store_pin_environment_variable - computed: true, optional: true, required: false
  private _keyStorePinEnvironmentVariable?: string; 
  public get keyStorePinEnvironmentVariable() {
    return this.getStringAttribute('key_store_pin_environment_variable');
  }
  public set keyStorePinEnvironmentVariable(value: string) {
    this._keyStorePinEnvironmentVariable = value;
  }
  public resetKeyStorePinEnvironmentVariable() {
    this._keyStorePinEnvironmentVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePinEnvironmentVariableInput() {
    return this._keyStorePinEnvironmentVariable;
  }

  // key_store_pin_file - computed: true, optional: true, required: false
  private _keyStorePinFile?: string; 
  public get keyStorePinFile() {
    return this.getStringAttribute('key_store_pin_file');
  }
  public set keyStorePinFile(value: string) {
    this._keyStorePinFile = value;
  }
  public resetKeyStorePinFile() {
    this._keyStorePinFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePinFileInput() {
    return this._keyStorePinFile;
  }

  // key_vault_uri - computed: true, optional: true, required: false
  private _keyVaultUri?: string; 
  public get keyVaultUri() {
    return this.getStringAttribute('key_vault_uri');
  }
  public set keyVaultUri(value: string) {
    this._keyVaultUri = value;
  }
  public resetKeyVaultUri() {
    this._keyVaultUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultUriInput() {
    return this._keyVaultUri;
  }

  // key_wrapping_transformation - computed: true, optional: true, required: false
  private _keyWrappingTransformation?: string; 
  public get keyWrappingTransformation() {
    return this.getStringAttribute('key_wrapping_transformation');
  }
  public set keyWrappingTransformation(value: string) {
    this._keyWrappingTransformation = value;
  }
  public resetKeyWrappingTransformation() {
    this._keyWrappingTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWrappingTransformationInput() {
    return this._keyWrappingTransformation;
  }

  // kms_encryption_key_arn - computed: true, optional: true, required: false
  private _kmsEncryptionKeyArn?: string; 
  public get kmsEncryptionKeyArn() {
    return this.getStringAttribute('kms_encryption_key_arn');
  }
  public set kmsEncryptionKeyArn(value: string) {
    this._kmsEncryptionKeyArn = value;
  }
  public resetKmsEncryptionKeyArn() {
    this._kmsEncryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionKeyArnInput() {
    return this._kmsEncryptionKeyArn;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // password_file - computed: true, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // pkcs11_key_store_type - computed: true, optional: true, required: false
  private _pkcs11KeyStoreType?: string; 
  public get pkcs11KeyStoreType() {
    return this.getStringAttribute('pkcs11_key_store_type');
  }
  public set pkcs11KeyStoreType(value: string) {
    this._pkcs11KeyStoreType = value;
  }
  public resetPkcs11KeyStoreType() {
    this._pkcs11KeyStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs11KeyStoreTypeInput() {
    return this._pkcs11KeyStoreType;
  }

  // pkcs11_provider_class - computed: true, optional: true, required: false
  private _pkcs11ProviderClass?: string; 
  public get pkcs11ProviderClass() {
    return this.getStringAttribute('pkcs11_provider_class');
  }
  public set pkcs11ProviderClass(value: string) {
    this._pkcs11ProviderClass = value;
  }
  public resetPkcs11ProviderClass() {
    this._pkcs11ProviderClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs11ProviderClassInput() {
    return this._pkcs11ProviderClass;
  }

  // pkcs11_provider_configuration_file - computed: true, optional: true, required: false
  private _pkcs11ProviderConfigurationFile?: string; 
  public get pkcs11ProviderConfigurationFile() {
    return this.getStringAttribute('pkcs11_provider_configuration_file');
  }
  public set pkcs11ProviderConfigurationFile(value: string) {
    this._pkcs11ProviderConfigurationFile = value;
  }
  public resetPkcs11ProviderConfigurationFile() {
    this._pkcs11ProviderConfigurationFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs11ProviderConfigurationFileInput() {
    return this._pkcs11ProviderConfigurationFile;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultCipherStreamProviderRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // secret_field_name - computed: true, optional: true, required: false
  private _secretFieldName?: string; 
  public get secretFieldName() {
    return this.getStringAttribute('secret_field_name');
  }
  public set secretFieldName(value: string) {
    this._secretFieldName = value;
  }
  public resetSecretFieldName() {
    this._secretFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFieldNameInput() {
    return this._secretFieldName;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // secret_name - computed: true, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_version_id - computed: true, optional: true, required: false
  private _secretVersionId?: string; 
  public get secretVersionId() {
    return this.getStringAttribute('secret_version_id');
  }
  public set secretVersionId(value: string) {
    this._secretVersionId = value;
  }
  public resetSecretVersionId() {
    this._secretVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionIdInput() {
    return this._secretVersionId;
  }

  // secret_version_stage - computed: true, optional: true, required: false
  private _secretVersionStage?: string; 
  public get secretVersionStage() {
    return this.getStringAttribute('secret_version_stage');
  }
  public set secretVersionStage(value: string) {
    this._secretVersionStage = value;
  }
  public resetSecretVersionStage() {
    this._secretVersionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionStageInput() {
    return this._secretVersionStage;
  }

  // ssl_cert_nickname - computed: true, optional: true, required: false
  private _sslCertNickname?: string; 
  public get sslCertNickname() {
    return this.getStringAttribute('ssl_cert_nickname');
  }
  public set sslCertNickname(value: string) {
    this._sslCertNickname = value;
  }
  public resetSslCertNickname() {
    this._sslCertNickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertNicknameInput() {
    return this._sslCertNickname;
  }

  // trust_store_file - computed: true, optional: true, required: false
  private _trustStoreFile?: string; 
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }
  public set trustStoreFile(value: string) {
    this._trustStoreFile = value;
  }
  public resetTrustStoreFile() {
    this._trustStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreFileInput() {
    return this._trustStoreFile;
  }

  // trust_store_pin - computed: true, optional: true, required: false
  private _trustStorePin?: string; 
  public get trustStorePin() {
    return this.getStringAttribute('trust_store_pin');
  }
  public set trustStorePin(value: string) {
    this._trustStorePin = value;
  }
  public resetTrustStorePin() {
    this._trustStorePin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePinInput() {
    return this._trustStorePin;
  }

  // trust_store_type - computed: true, optional: true, required: false
  private _trustStoreType?: string; 
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
  }
  public set trustStoreType(value: string) {
    this._trustStoreType = value;
  }
  public resetTrustStoreType() {
    this._trustStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreTypeInput() {
    return this._trustStoreType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vault_authentication_method - computed: true, optional: true, required: false
  private _vaultAuthenticationMethod?: string; 
  public get vaultAuthenticationMethod() {
    return this.getStringAttribute('vault_authentication_method');
  }
  public set vaultAuthenticationMethod(value: string) {
    this._vaultAuthenticationMethod = value;
  }
  public resetVaultAuthenticationMethod() {
    this._vaultAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAuthenticationMethodInput() {
    return this._vaultAuthenticationMethod;
  }

  // vault_encryption_metadata_file - computed: true, optional: true, required: false
  private _vaultEncryptionMetadataFile?: string; 
  public get vaultEncryptionMetadataFile() {
    return this.getStringAttribute('vault_encryption_metadata_file');
  }
  public set vaultEncryptionMetadataFile(value: string) {
    this._vaultEncryptionMetadataFile = value;
  }
  public resetVaultEncryptionMetadataFile() {
    this._vaultEncryptionMetadataFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultEncryptionMetadataFileInput() {
    return this._vaultEncryptionMetadataFile;
  }

  // vault_external_server - computed: true, optional: true, required: false
  private _vaultExternalServer?: string; 
  public get vaultExternalServer() {
    return this.getStringAttribute('vault_external_server');
  }
  public set vaultExternalServer(value: string) {
    this._vaultExternalServer = value;
  }
  public resetVaultExternalServer() {
    this._vaultExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultExternalServerInput() {
    return this._vaultExternalServer;
  }

  // vault_secret_field_name - computed: true, optional: true, required: false
  private _vaultSecretFieldName?: string; 
  public get vaultSecretFieldName() {
    return this.getStringAttribute('vault_secret_field_name');
  }
  public set vaultSecretFieldName(value: string) {
    this._vaultSecretFieldName = value;
  }
  public resetVaultSecretFieldName() {
    this._vaultSecretFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretFieldNameInput() {
    return this._vaultSecretFieldName;
  }

  // vault_secret_path - computed: true, optional: true, required: false
  private _vaultSecretPath?: string; 
  public get vaultSecretPath() {
    return this.getStringAttribute('vault_secret_path');
  }
  public set vaultSecretPath(value: string) {
    this._vaultSecretPath = value;
  }
  public resetVaultSecretPath() {
    this._vaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretPathInput() {
    return this._vaultSecretPath;
  }

  // vault_server_base_uri - computed: true, optional: true, required: false
  private _vaultServerBaseUri?: string[]; 
  public get vaultServerBaseUri() {
    return cdktf.Fn.tolist(this.getListAttribute('vault_server_base_uri'));
  }
  public set vaultServerBaseUri(value: string[]) {
    this._vaultServerBaseUri = value;
  }
  public resetVaultServerBaseUri() {
    this._vaultServerBaseUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultServerBaseUriInput() {
    return this._vaultServerBaseUri;
  }

  // wait_for_password_file - computed: true, optional: true, required: false
  private _waitForPasswordFile?: boolean | cdktf.IResolvable; 
  public get waitForPasswordFile() {
    return this.getBooleanAttribute('wait_for_password_file');
  }
  public set waitForPasswordFile(value: boolean | cdktf.IResolvable) {
    this._waitForPasswordFile = value;
  }
  public resetWaitForPasswordFile() {
    this._waitForPasswordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForPasswordFileInput() {
    return this._waitForPasswordFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_external_server: cdktf.stringToTerraform(this._awsExternalServer),
      aws_region_name: cdktf.stringToTerraform(this._awsRegionName),
      aws_secret_access_key: cdktf.stringToTerraform(this._awsSecretAccessKey),
      azure_authentication_method: cdktf.stringToTerraform(this._azureAuthenticationMethod),
      conjur_external_server: cdktf.stringToTerraform(this._conjurExternalServer),
      conjur_secret_relative_path: cdktf.stringToTerraform(this._conjurSecretRelativePath),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encrypted_passphrase_file: cdktf.stringToTerraform(this._encryptedPassphraseFile),
      encryption_metadata_file: cdktf.stringToTerraform(this._encryptionMetadataFile),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      iteration_count: cdktf.numberToTerraform(this._iterationCount),
      key_store_pin: cdktf.stringToTerraform(this._keyStorePin),
      key_store_pin_environment_variable: cdktf.stringToTerraform(this._keyStorePinEnvironmentVariable),
      key_store_pin_file: cdktf.stringToTerraform(this._keyStorePinFile),
      key_vault_uri: cdktf.stringToTerraform(this._keyVaultUri),
      key_wrapping_transformation: cdktf.stringToTerraform(this._keyWrappingTransformation),
      kms_encryption_key_arn: cdktf.stringToTerraform(this._kmsEncryptionKeyArn),
      name: cdktf.stringToTerraform(this._name),
      password_file: cdktf.stringToTerraform(this._passwordFile),
      pkcs11_key_store_type: cdktf.stringToTerraform(this._pkcs11KeyStoreType),
      pkcs11_provider_class: cdktf.stringToTerraform(this._pkcs11ProviderClass),
      pkcs11_provider_configuration_file: cdktf.stringToTerraform(this._pkcs11ProviderConfigurationFile),
      secret_field_name: cdktf.stringToTerraform(this._secretFieldName),
      secret_id: cdktf.stringToTerraform(this._secretId),
      secret_name: cdktf.stringToTerraform(this._secretName),
      secret_version_id: cdktf.stringToTerraform(this._secretVersionId),
      secret_version_stage: cdktf.stringToTerraform(this._secretVersionStage),
      ssl_cert_nickname: cdktf.stringToTerraform(this._sslCertNickname),
      trust_store_file: cdktf.stringToTerraform(this._trustStoreFile),
      trust_store_pin: cdktf.stringToTerraform(this._trustStorePin),
      trust_store_type: cdktf.stringToTerraform(this._trustStoreType),
      vault_authentication_method: cdktf.stringToTerraform(this._vaultAuthenticationMethod),
      vault_encryption_metadata_file: cdktf.stringToTerraform(this._vaultEncryptionMetadataFile),
      vault_external_server: cdktf.stringToTerraform(this._vaultExternalServer),
      vault_secret_field_name: cdktf.stringToTerraform(this._vaultSecretFieldName),
      vault_secret_path: cdktf.stringToTerraform(this._vaultSecretPath),
      vault_server_base_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vaultServerBaseUri),
      wait_for_password_file: cdktf.booleanToTerraform(this._waitForPasswordFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._awsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_external_server: {
        value: cdktf.stringToHclTerraform(this._awsExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region_name: {
        value: cdktf.stringToHclTerraform(this._awsRegionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_authentication_method: {
        value: cdktf.stringToHclTerraform(this._azureAuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conjur_external_server: {
        value: cdktf.stringToHclTerraform(this._conjurExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conjur_secret_relative_path: {
        value: cdktf.stringToHclTerraform(this._conjurSecretRelativePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypted_passphrase_file: {
        value: cdktf.stringToHclTerraform(this._encryptedPassphraseFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_metadata_file: {
        value: cdktf.stringToHclTerraform(this._encryptionMetadataFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy_external_server: {
        value: cdktf.stringToHclTerraform(this._httpProxyExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iteration_count: {
        value: cdktf.numberToHclTerraform(this._iterationCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_store_pin: {
        value: cdktf.stringToHclTerraform(this._keyStorePin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_store_pin_environment_variable: {
        value: cdktf.stringToHclTerraform(this._keyStorePinEnvironmentVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_store_pin_file: {
        value: cdktf.stringToHclTerraform(this._keyStorePinFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_vault_uri: {
        value: cdktf.stringToHclTerraform(this._keyVaultUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_wrapping_transformation: {
        value: cdktf.stringToHclTerraform(this._keyWrappingTransformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encryption_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptionKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_file: {
        value: cdktf.stringToHclTerraform(this._passwordFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkcs11_key_store_type: {
        value: cdktf.stringToHclTerraform(this._pkcs11KeyStoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkcs11_provider_class: {
        value: cdktf.stringToHclTerraform(this._pkcs11ProviderClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkcs11_provider_configuration_file: {
        value: cdktf.stringToHclTerraform(this._pkcs11ProviderConfigurationFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_field_name: {
        value: cdktf.stringToHclTerraform(this._secretFieldName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_version_id: {
        value: cdktf.stringToHclTerraform(this._secretVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_version_stage: {
        value: cdktf.stringToHclTerraform(this._secretVersionStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert_nickname: {
        value: cdktf.stringToHclTerraform(this._sslCertNickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_file: {
        value: cdktf.stringToHclTerraform(this._trustStoreFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_pin: {
        value: cdktf.stringToHclTerraform(this._trustStorePin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_type: {
        value: cdktf.stringToHclTerraform(this._trustStoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_authentication_method: {
        value: cdktf.stringToHclTerraform(this._vaultAuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_encryption_metadata_file: {
        value: cdktf.stringToHclTerraform(this._vaultEncryptionMetadataFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_external_server: {
        value: cdktf.stringToHclTerraform(this._vaultExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_secret_field_name: {
        value: cdktf.stringToHclTerraform(this._vaultSecretFieldName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_secret_path: {
        value: cdktf.stringToHclTerraform(this._vaultSecretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_server_base_uri: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vaultServerBaseUri),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wait_for_password_file: {
        value: cdktf.booleanToHclTerraform(this._waitForPasswordFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
