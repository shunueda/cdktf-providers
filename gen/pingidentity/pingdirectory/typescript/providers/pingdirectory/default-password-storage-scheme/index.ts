// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultPasswordStorageSchemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The external server with information to use when interacting with the AWS Secrets Manager service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#aws_external_server DefaultPasswordStorageScheme#aws_external_server}
  */
  readonly awsExternalServer?: string;
  /**
  * The mechanism used to authenticate to the Azure service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#azure_authentication_method DefaultPasswordStorageScheme#azure_authentication_method}
  */
  readonly azureAuthenticationMethod?: string;
  /**
  * Specifies the cost factor to use when encoding passwords with Bcrypt. A higher cost factor requires more processing to generate a password, which makes attacks against the password more expensive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#bcrypt_cost_factor DefaultPasswordStorageScheme#bcrypt_cost_factor}
  */
  readonly bcryptCostFactor?: number;
  /**
  * An external server definition with information needed to connect and authenticate to the Conjur instance containing user passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#conjur_external_server DefaultPasswordStorageScheme#conjur_external_server}
  */
  readonly conjurExternalServer?: string;
  /**
  * The default name of the field in JSON objects contained in the AWS Secrets Manager service that contains the password for the target user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#default_field DefaultPasswordStorageScheme#default_field}
  */
  readonly defaultField?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The number of bytes to use for the derived key. The value must be greater than or equal to 8 and less than or equal to 512.
  *   - `pbkdf2`: Specifies the number of bytes to use for the derived key. The value must be greater than or equal to 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#derived_key_length_bytes DefaultPasswordStorageScheme#derived_key_length_bytes}
  */
  readonly derivedKeyLengthBytes?: number;
  /**
  * A description for this Password Storage Scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#description DefaultPasswordStorageScheme#description}
  */
  readonly description?: string;
  /**
  * Specifies the digest algorithm that will be used when encoding passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#digest_algorithm DefaultPasswordStorageScheme#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`salted-sha256`, `argon2d`, `crypt`, `argon2i`, `aes`, `argon2id`, `vault`, `third-party`, `argon2`, `third-party-enhanced`, `pbkdf2`, `salted-sha384`, `aes-256`, `bcrypt`, `blowfish`, `amazon-secrets-manager`, `azure-key-vault`, `conjur`, `salted-sha512`, `scrypt`]: Indicates whether the Password Storage Scheme is enabled for use.
  *   - `base64`: Indicates whether the Base64 Password Storage Scheme is enabled for use.
  *   - `salted-md5`: Indicates whether the Salted MD5 Password Storage Scheme is enabled for use.
  *   - `rc4`: Indicates whether the RC4 Password Storage Scheme is enabled for use.
  *   - `triple-des`: Indicates whether the Triple DES Password Storage Scheme is enabled for use.
  *   - `clear`: Indicates whether the Clear Password Storage Scheme is enabled for use.
  *   - `sha1`: Indicates whether the SHA1 Password Storage Scheme is enabled for use.
  *   - `salted-sha1`: Indicates whether the Salted SHA1 Password Storage Scheme is enabled for use.
  *   - `md5`: Indicates whether the MD5 Password Storage Scheme is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#enabled DefaultPasswordStorageScheme#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.2.0.0+. When the `type` attribute is set to:
  *   - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The maximum number of Argon2-encoded passwords to cache for faster verification.
  *   - `pbkdf2`: The maximum number of PBKDF2-encoded passwords to cache for faster verification.
  *   - `bcrypt`: The maximum number of Bcrypt-encoded passwords to cache for faster verification.
  *   - `scrypt`: The maximum number of scrypt-encoded passwords to cache for faster verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#encoded_password_cache_size DefaultPasswordStorageScheme#encoded_password_cache_size}
  */
  readonly encodedPasswordCacheSize?: number;
  /**
  * The identifier for the encryption settings definition that should be used to derive the encryption key to use when encrypting new passwords. If this is not provided, the server's preferred encryption settings definition will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#encryption_settings_definition_id DefaultPasswordStorageScheme#encryption_settings_definition_id}
  */
  readonly encryptionSettingsDefinitionId?: string;
  /**
  * When the `type` attribute is set to:
  *   - `third-party`: The set of arguments used to customize the behavior for the Third Party Password Storage Scheme. Each configuration property should be given in the form 'name=value'.
  *   - `third-party-enhanced`: The set of arguments used to customize the behavior for the Third Party Enhanced Password Storage Scheme. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#extension_argument DefaultPasswordStorageScheme#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `third-party`: The fully-qualified name of the Java class providing the logic for the Third Party Password Storage Scheme.
  *   - `third-party-enhanced`: The fully-qualified name of the Java class providing the logic for the Third Party Enhanced Password Storage Scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#extension_class DefaultPasswordStorageScheme#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * A reference to an HTTP proxy server that should be used for requests sent to the Azure service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#http_proxy_external_server DefaultPasswordStorageScheme#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The number of rounds of cryptographic processing required in the course of encoding each password.
  *   - `pbkdf2`: Specifies the number of iterations to use when encoding passwords. The value must be greater than or equal to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#iteration_count DefaultPasswordStorageScheme#iteration_count}
  */
  readonly iterationCount?: number;
  /**
  * The URI that identifies the Azure Key Vault from which the secret is to be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#key_vault_uri DefaultPasswordStorageScheme#key_vault_uri}
  */
  readonly keyVaultUri?: string;
  /**
  * Specifies the maximum allowed length, in bytes, for passwords encoded with this scheme, which can help mitigate denial of service attacks from clients that attempt to bind with very long passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#max_password_length DefaultPasswordStorageScheme#max_password_length}
  */
  readonly maxPasswordLength?: number;
  /**
  * The number of kilobytes of memory that must be used in the course of encoding each password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#memory_usage_kb DefaultPasswordStorageScheme#memory_usage_kb}
  */
  readonly memoryUsageKb?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#name DefaultPasswordStorageScheme#name}
  */
  readonly name: string;
  /**
  * Specifies the number of digest rounds to use for the SHA-2 encodings. This will not be used for the legacy or MD5-based encodings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#num_digest_rounds DefaultPasswordStorageScheme#num_digest_rounds}
  */
  readonly numDigestRounds?: number;
  /**
  * The number of concurrent threads that will be used in the course of encoding each password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#parallelism_factor DefaultPasswordStorageScheme#parallelism_factor}
  */
  readonly parallelismFactor?: number;
  /**
  * Specifies the mechanism that should be used to encode clear-text passwords for use with this scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#password_encoding_mechanism DefaultPasswordStorageScheme#password_encoding_mechanism}
  */
  readonly passwordEncodingMechanism?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`salted-sha256`, `salted-md5`, `salted-sha384`, `salted-sha1`, `salted-sha512`]: Specifies the number of bytes to use for the generated salt.
  *   - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The number of bytes to use for the generated salt.
  *   - `pbkdf2`: Specifies the number of bytes to use for the generated salt. The value must be greater than or equal to 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#salt_length_bytes DefaultPasswordStorageScheme#salt_length_bytes}
  */
  readonly saltLengthBytes?: number;
  /**
  * Specifies the block size for the digest that will be used in the course of encoding passwords. Increasing the block size while keeping the CPU/memory cost factor constant will increase the amount of memory required to encode a password, but it also increases the ratio of sequential memory access to random memory access (and sequential memory access is generally faster than random memory access).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#scrypt_block_size DefaultPasswordStorageScheme#scrypt_block_size}
  */
  readonly scryptBlockSize?: number;
  /**
  * Specifies the exponent that should be used for the CPU/memory cost factor. The cost factor must be a power of two, so the value of this property represents the power to which two is raised. The CPU/memory cost factor specifies the number of iterations required for encoding the password, and also affects the amount of memory required during processing. A higher cost factor requires more processing and more memory to generate a password, which makes attacks against the password more expensive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#scrypt_cpu_memory_cost_factor_exponent DefaultPasswordStorageScheme#scrypt_cpu_memory_cost_factor_exponent}
  */
  readonly scryptCpuMemoryCostFactorExponent?: number;
  /**
  * Specifies the number of times that scrypt has to perform the entire encoding process to produce the final result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#scrypt_parallelization_parameter DefaultPasswordStorageScheme#scrypt_parallelization_parameter}
  */
  readonly scryptParallelizationParameter?: number;
  /**
  * An external server definition with information needed to connect and authenticate to the Vault instance containing the passphrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#vault_external_server DefaultPasswordStorageScheme#vault_external_server}
  */
  readonly vaultExternalServer?: string;
}
export interface DefaultPasswordStorageSchemeRequiredActions {
}

export function defaultPasswordStorageSchemeRequiredActionsToTerraform(struct?: DefaultPasswordStorageSchemeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultPasswordStorageSchemeRequiredActionsToHclTerraform(struct?: DefaultPasswordStorageSchemeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultPasswordStorageSchemeRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultPasswordStorageSchemeRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultPasswordStorageSchemeRequiredActions | undefined) {
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

export class DefaultPasswordStorageSchemeRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultPasswordStorageSchemeRequiredActionsOutputReference {
    return new DefaultPasswordStorageSchemeRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme pingdirectory_default_password_storage_scheme}
*/
export class DefaultPasswordStorageScheme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_password_storage_scheme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultPasswordStorageScheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultPasswordStorageScheme to import
  * @param importFromId The id of the existing DefaultPasswordStorageScheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultPasswordStorageScheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_password_storage_scheme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_storage_scheme pingdirectory_default_password_storage_scheme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultPasswordStorageSchemeConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultPasswordStorageSchemeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_password_storage_scheme',
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
    this._awsExternalServer = config.awsExternalServer;
    this._azureAuthenticationMethod = config.azureAuthenticationMethod;
    this._bcryptCostFactor = config.bcryptCostFactor;
    this._conjurExternalServer = config.conjurExternalServer;
    this._defaultField = config.defaultField;
    this._derivedKeyLengthBytes = config.derivedKeyLengthBytes;
    this._description = config.description;
    this._digestAlgorithm = config.digestAlgorithm;
    this._enabled = config.enabled;
    this._encodedPasswordCacheSize = config.encodedPasswordCacheSize;
    this._encryptionSettingsDefinitionId = config.encryptionSettingsDefinitionId;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._iterationCount = config.iterationCount;
    this._keyVaultUri = config.keyVaultUri;
    this._maxPasswordLength = config.maxPasswordLength;
    this._memoryUsageKb = config.memoryUsageKb;
    this._name = config.name;
    this._numDigestRounds = config.numDigestRounds;
    this._parallelismFactor = config.parallelismFactor;
    this._passwordEncodingMechanism = config.passwordEncodingMechanism;
    this._saltLengthBytes = config.saltLengthBytes;
    this._scryptBlockSize = config.scryptBlockSize;
    this._scryptCpuMemoryCostFactorExponent = config.scryptCpuMemoryCostFactorExponent;
    this._scryptParallelizationParameter = config.scryptParallelizationParameter;
    this._vaultExternalServer = config.vaultExternalServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bcrypt_cost_factor - computed: true, optional: true, required: false
  private _bcryptCostFactor?: number; 
  public get bcryptCostFactor() {
    return this.getNumberAttribute('bcrypt_cost_factor');
  }
  public set bcryptCostFactor(value: number) {
    this._bcryptCostFactor = value;
  }
  public resetBcryptCostFactor() {
    this._bcryptCostFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcryptCostFactorInput() {
    return this._bcryptCostFactor;
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

  // default_field - computed: true, optional: true, required: false
  private _defaultField?: string; 
  public get defaultField() {
    return this.getStringAttribute('default_field');
  }
  public set defaultField(value: string) {
    this._defaultField = value;
  }
  public resetDefaultField() {
    this._defaultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFieldInput() {
    return this._defaultField;
  }

  // derived_key_length_bytes - computed: true, optional: true, required: false
  private _derivedKeyLengthBytes?: number; 
  public get derivedKeyLengthBytes() {
    return this.getNumberAttribute('derived_key_length_bytes');
  }
  public set derivedKeyLengthBytes(value: number) {
    this._derivedKeyLengthBytes = value;
  }
  public resetDerivedKeyLengthBytes() {
    this._derivedKeyLengthBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get derivedKeyLengthBytesInput() {
    return this._derivedKeyLengthBytes;
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

  // digest_algorithm - computed: true, optional: true, required: false
  private _digestAlgorithm?: string; 
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }
  public set digestAlgorithm(value: string) {
    this._digestAlgorithm = value;
  }
  public resetDigestAlgorithm() {
    this._digestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgorithmInput() {
    return this._digestAlgorithm;
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

  // encoded_password_cache_size - computed: true, optional: true, required: false
  private _encodedPasswordCacheSize?: number; 
  public get encodedPasswordCacheSize() {
    return this.getNumberAttribute('encoded_password_cache_size');
  }
  public set encodedPasswordCacheSize(value: number) {
    this._encodedPasswordCacheSize = value;
  }
  public resetEncodedPasswordCacheSize() {
    this._encodedPasswordCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedPasswordCacheSizeInput() {
    return this._encodedPasswordCacheSize;
  }

  // encryption_settings_definition_id - computed: true, optional: true, required: false
  private _encryptionSettingsDefinitionId?: string; 
  public get encryptionSettingsDefinitionId() {
    return this.getStringAttribute('encryption_settings_definition_id');
  }
  public set encryptionSettingsDefinitionId(value: string) {
    this._encryptionSettingsDefinitionId = value;
  }
  public resetEncryptionSettingsDefinitionId() {
    this._encryptionSettingsDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSettingsDefinitionIdInput() {
    return this._encryptionSettingsDefinitionId;
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

  // max_password_length - computed: true, optional: true, required: false
  private _maxPasswordLength?: number; 
  public get maxPasswordLength() {
    return this.getNumberAttribute('max_password_length');
  }
  public set maxPasswordLength(value: number) {
    this._maxPasswordLength = value;
  }
  public resetMaxPasswordLength() {
    this._maxPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordLengthInput() {
    return this._maxPasswordLength;
  }

  // memory_usage_kb - computed: true, optional: true, required: false
  private _memoryUsageKb?: number; 
  public get memoryUsageKb() {
    return this.getNumberAttribute('memory_usage_kb');
  }
  public set memoryUsageKb(value: number) {
    this._memoryUsageKb = value;
  }
  public resetMemoryUsageKb() {
    this._memoryUsageKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageKbInput() {
    return this._memoryUsageKb;
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

  // num_digest_rounds - computed: true, optional: true, required: false
  private _numDigestRounds?: number; 
  public get numDigestRounds() {
    return this.getNumberAttribute('num_digest_rounds');
  }
  public set numDigestRounds(value: number) {
    this._numDigestRounds = value;
  }
  public resetNumDigestRounds() {
    this._numDigestRounds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDigestRoundsInput() {
    return this._numDigestRounds;
  }

  // parallelism_factor - computed: true, optional: true, required: false
  private _parallelismFactor?: number; 
  public get parallelismFactor() {
    return this.getNumberAttribute('parallelism_factor');
  }
  public set parallelismFactor(value: number) {
    this._parallelismFactor = value;
  }
  public resetParallelismFactor() {
    this._parallelismFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismFactorInput() {
    return this._parallelismFactor;
  }

  // password_encoding_mechanism - computed: true, optional: true, required: false
  private _passwordEncodingMechanism?: string; 
  public get passwordEncodingMechanism() {
    return this.getStringAttribute('password_encoding_mechanism');
  }
  public set passwordEncodingMechanism(value: string) {
    this._passwordEncodingMechanism = value;
  }
  public resetPasswordEncodingMechanism() {
    this._passwordEncodingMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEncodingMechanismInput() {
    return this._passwordEncodingMechanism;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultPasswordStorageSchemeRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // salt_length_bytes - computed: true, optional: true, required: false
  private _saltLengthBytes?: number; 
  public get saltLengthBytes() {
    return this.getNumberAttribute('salt_length_bytes');
  }
  public set saltLengthBytes(value: number) {
    this._saltLengthBytes = value;
  }
  public resetSaltLengthBytes() {
    this._saltLengthBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltLengthBytesInput() {
    return this._saltLengthBytes;
  }

  // scrypt_block_size - computed: true, optional: true, required: false
  private _scryptBlockSize?: number; 
  public get scryptBlockSize() {
    return this.getNumberAttribute('scrypt_block_size');
  }
  public set scryptBlockSize(value: number) {
    this._scryptBlockSize = value;
  }
  public resetScryptBlockSize() {
    this._scryptBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scryptBlockSizeInput() {
    return this._scryptBlockSize;
  }

  // scrypt_cpu_memory_cost_factor_exponent - computed: true, optional: true, required: false
  private _scryptCpuMemoryCostFactorExponent?: number; 
  public get scryptCpuMemoryCostFactorExponent() {
    return this.getNumberAttribute('scrypt_cpu_memory_cost_factor_exponent');
  }
  public set scryptCpuMemoryCostFactorExponent(value: number) {
    this._scryptCpuMemoryCostFactorExponent = value;
  }
  public resetScryptCpuMemoryCostFactorExponent() {
    this._scryptCpuMemoryCostFactorExponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scryptCpuMemoryCostFactorExponentInput() {
    return this._scryptCpuMemoryCostFactorExponent;
  }

  // scrypt_parallelization_parameter - computed: true, optional: true, required: false
  private _scryptParallelizationParameter?: number; 
  public get scryptParallelizationParameter() {
    return this.getNumberAttribute('scrypt_parallelization_parameter');
  }
  public set scryptParallelizationParameter(value: number) {
    this._scryptParallelizationParameter = value;
  }
  public resetScryptParallelizationParameter() {
    this._scryptParallelizationParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scryptParallelizationParameterInput() {
    return this._scryptParallelizationParameter;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_external_server: cdktf.stringToTerraform(this._awsExternalServer),
      azure_authentication_method: cdktf.stringToTerraform(this._azureAuthenticationMethod),
      bcrypt_cost_factor: cdktf.numberToTerraform(this._bcryptCostFactor),
      conjur_external_server: cdktf.stringToTerraform(this._conjurExternalServer),
      default_field: cdktf.stringToTerraform(this._defaultField),
      derived_key_length_bytes: cdktf.numberToTerraform(this._derivedKeyLengthBytes),
      description: cdktf.stringToTerraform(this._description),
      digest_algorithm: cdktf.stringToTerraform(this._digestAlgorithm),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encoded_password_cache_size: cdktf.numberToTerraform(this._encodedPasswordCacheSize),
      encryption_settings_definition_id: cdktf.stringToTerraform(this._encryptionSettingsDefinitionId),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      iteration_count: cdktf.numberToTerraform(this._iterationCount),
      key_vault_uri: cdktf.stringToTerraform(this._keyVaultUri),
      max_password_length: cdktf.numberToTerraform(this._maxPasswordLength),
      memory_usage_kb: cdktf.numberToTerraform(this._memoryUsageKb),
      name: cdktf.stringToTerraform(this._name),
      num_digest_rounds: cdktf.numberToTerraform(this._numDigestRounds),
      parallelism_factor: cdktf.numberToTerraform(this._parallelismFactor),
      password_encoding_mechanism: cdktf.stringToTerraform(this._passwordEncodingMechanism),
      salt_length_bytes: cdktf.numberToTerraform(this._saltLengthBytes),
      scrypt_block_size: cdktf.numberToTerraform(this._scryptBlockSize),
      scrypt_cpu_memory_cost_factor_exponent: cdktf.numberToTerraform(this._scryptCpuMemoryCostFactorExponent),
      scrypt_parallelization_parameter: cdktf.numberToTerraform(this._scryptParallelizationParameter),
      vault_external_server: cdktf.stringToTerraform(this._vaultExternalServer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_external_server: {
        value: cdktf.stringToHclTerraform(this._awsExternalServer),
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
      bcrypt_cost_factor: {
        value: cdktf.numberToHclTerraform(this._bcryptCostFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conjur_external_server: {
        value: cdktf.stringToHclTerraform(this._conjurExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_field: {
        value: cdktf.stringToHclTerraform(this._defaultField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      derived_key_length_bytes: {
        value: cdktf.numberToHclTerraform(this._derivedKeyLengthBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_algorithm: {
        value: cdktf.stringToHclTerraform(this._digestAlgorithm),
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
      encoded_password_cache_size: {
        value: cdktf.numberToHclTerraform(this._encodedPasswordCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encryption_settings_definition_id: {
        value: cdktf.stringToHclTerraform(this._encryptionSettingsDefinitionId),
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
      key_vault_uri: {
        value: cdktf.stringToHclTerraform(this._keyVaultUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_password_length: {
        value: cdktf.numberToHclTerraform(this._maxPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_usage_kb: {
        value: cdktf.numberToHclTerraform(this._memoryUsageKb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_digest_rounds: {
        value: cdktf.numberToHclTerraform(this._numDigestRounds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parallelism_factor: {
        value: cdktf.numberToHclTerraform(this._parallelismFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_encoding_mechanism: {
        value: cdktf.stringToHclTerraform(this._passwordEncodingMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      salt_length_bytes: {
        value: cdktf.numberToHclTerraform(this._saltLengthBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scrypt_block_size: {
        value: cdktf.numberToHclTerraform(this._scryptBlockSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scrypt_cpu_memory_cost_factor_exponent: {
        value: cdktf.numberToHclTerraform(this._scryptCpuMemoryCostFactorExponent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scrypt_parallelization_parameter: {
        value: cdktf.numberToHclTerraform(this._scryptParallelizationParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vault_external_server: {
        value: cdktf.stringToHclTerraform(this._vaultExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
