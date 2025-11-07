// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PassphraseProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The external server with information to use when interacting with the AWS Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#aws_external_server PassphraseProvider#aws_external_server}
  */
  readonly awsExternalServer?: string;
  /**
  * The mechanism used to authenticate to the Azure service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#azure_authentication_method PassphraseProvider#azure_authentication_method}
  */
  readonly azureAuthenticationMethod?: string;
  /**
  * An external server definition with information needed to connect and authenticate to the Conjur instance containing the passphrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#conjur_external_server PassphraseProvider#conjur_external_server}
  */
  readonly conjurExternalServer?: string;
  /**
  * The portion of the path that follows the account name in the URI needed to obtain the desired secret. Any special characters in the path must be URL-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#conjur_secret_relative_path PassphraseProvider#conjur_secret_relative_path}
  */
  readonly conjurSecretRelativePath?: string;
  /**
  * A description for this Passphrase Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#description PassphraseProvider#description}
  */
  readonly description?: string;
  /**
  * Indicates whether this Passphrase Provider is enabled for use in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#enabled PassphraseProvider#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The name of the environment variable that is expected to hold the passphrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#environment_variable PassphraseProvider#environment_variable}
  */
  readonly environmentVariable?: string;
  /**
  * The set of arguments used to customize the behavior for the Third Party Passphrase Provider. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#extension_argument PassphraseProvider#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Passphrase Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#extension_class PassphraseProvider#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * A reference to an HTTP proxy server that should be used for requests sent to the Azure service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#http_proxy_external_server PassphraseProvider#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * The URI that identifies the Azure Key Vault from which the secret is to be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#key_vault_uri PassphraseProvider#key_vault_uri}
  */
  readonly keyVaultUri?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`amazon-secrets-manager`, `vault`]: The maximum length of time that the passphrase provider may cache the passphrase that has been read from Vault. A value of zero seconds indicates that the provider should always attempt to read the passphrase from Vault.
  *   - `azure-key-vault`: The maximum length of time that the passphrase provider may cache the passphrase that has been read from Azure Key Vault. A value of zero seconds indicates that the provider should always attempt to read the passphrase from the Azure service.
  *   - `file-based`: The maximum length of time that the passphrase provider may cache the passphrase that has been read from the target file. A value of zero seconds indicates that the provider should always attempt to read the passphrase from the file.
  *   - `conjur`: The maximum length of time that the passphrase provider may cache the passphrase that has been read from Conjur. A value of zero seconds indicates that the provider should always attempt to read the passphrase from Conjur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#max_cache_duration PassphraseProvider#max_cache_duration}
  */
  readonly maxCacheDuration?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#name PassphraseProvider#name}
  */
  readonly name: string;
  /**
  * The value to be stored in an obscured form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#obscured_value PassphraseProvider#obscured_value}
  */
  readonly obscuredValue?: string;
  /**
  * The path to the file containing the passphrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#password_file PassphraseProvider#password_file}
  */
  readonly passwordFile?: string;
  /**
  * The name of the JSON field whose value is the passphrase that will be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#secret_field_name PassphraseProvider#secret_field_name}
  */
  readonly secretFieldName?: string;
  /**
  * The Amazon Resource Name (ARN) or the user-friendly name of the secret to be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#secret_id PassphraseProvider#secret_id}
  */
  readonly secretId?: string;
  /**
  * The name of the secret to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#secret_name PassphraseProvider#secret_name}
  */
  readonly secretName?: string;
  /**
  * The unique identifier for the version of the secret to be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#secret_version_id PassphraseProvider#secret_version_id}
  */
  readonly secretVersionId?: string;
  /**
  * The staging label for the version of the secret to be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#secret_version_stage PassphraseProvider#secret_version_stage}
  */
  readonly secretVersionStage?: string;
  /**
  * The type of Passphrase Provider resource. Options are ['environment-variable', 'amazon-secrets-manager', 'obscured-value', 'azure-key-vault', 'file-based', 'conjur', 'vault', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#type PassphraseProvider#type}
  */
  readonly type: string;
  /**
  * An external server definition with information needed to connect and authenticate to the Vault instance containing the passphrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#vault_external_server PassphraseProvider#vault_external_server}
  */
  readonly vaultExternalServer?: string;
  /**
  * The name of the field in the Vault secret record that contains the passphrase to use to generate the encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#vault_secret_field_name PassphraseProvider#vault_secret_field_name}
  */
  readonly vaultSecretFieldName?: string;
  /**
  * The path to the desired secret in the Vault service. This will be appended to the value of the base-url property for the associated Vault external server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#vault_secret_path PassphraseProvider#vault_secret_path}
  */
  readonly vaultSecretPath?: string;
}
export interface PassphraseProviderRequiredActions {
}

export function passphraseProviderRequiredActionsToTerraform(struct?: PassphraseProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function passphraseProviderRequiredActionsToHclTerraform(struct?: PassphraseProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PassphraseProviderRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PassphraseProviderRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PassphraseProviderRequiredActions | undefined) {
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

export class PassphraseProviderRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): PassphraseProviderRequiredActionsOutputReference {
    return new PassphraseProviderRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider pingdirectory_passphrase_provider}
*/
export class PassphraseProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_passphrase_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PassphraseProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PassphraseProvider to import
  * @param importFromId The id of the existing PassphraseProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PassphraseProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_passphrase_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/passphrase_provider pingdirectory_passphrase_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PassphraseProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PassphraseProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_passphrase_provider',
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
    this._conjurExternalServer = config.conjurExternalServer;
    this._conjurSecretRelativePath = config.conjurSecretRelativePath;
    this._description = config.description;
    this._enabled = config.enabled;
    this._environmentVariable = config.environmentVariable;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._keyVaultUri = config.keyVaultUri;
    this._maxCacheDuration = config.maxCacheDuration;
    this._name = config.name;
    this._obscuredValue = config.obscuredValue;
    this._passwordFile = config.passwordFile;
    this._secretFieldName = config.secretFieldName;
    this._secretId = config.secretId;
    this._secretName = config.secretName;
    this._secretVersionId = config.secretVersionId;
    this._secretVersionStage = config.secretVersionStage;
    this._type = config.type;
    this._vaultExternalServer = config.vaultExternalServer;
    this._vaultSecretFieldName = config.vaultSecretFieldName;
    this._vaultSecretPath = config.vaultSecretPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_external_server - computed: false, optional: true, required: false
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

  // azure_authentication_method - computed: false, optional: true, required: false
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

  // conjur_external_server - computed: false, optional: true, required: false
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

  // conjur_secret_relative_path - computed: false, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // environment_variable - computed: false, optional: true, required: false
  private _environmentVariable?: string; 
  public get environmentVariable() {
    return this.getStringAttribute('environment_variable');
  }
  public set environmentVariable(value: string) {
    this._environmentVariable = value;
  }
  public resetEnvironmentVariable() {
    this._environmentVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable;
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

  // extension_class - computed: false, optional: true, required: false
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

  // http_proxy_external_server - computed: false, optional: true, required: false
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

  // key_vault_uri - computed: false, optional: true, required: false
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

  // max_cache_duration - computed: true, optional: true, required: false
  private _maxCacheDuration?: string; 
  public get maxCacheDuration() {
    return this.getStringAttribute('max_cache_duration');
  }
  public set maxCacheDuration(value: string) {
    this._maxCacheDuration = value;
  }
  public resetMaxCacheDuration() {
    this._maxCacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheDurationInput() {
    return this._maxCacheDuration;
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

  // obscured_value - computed: false, optional: true, required: false
  private _obscuredValue?: string; 
  public get obscuredValue() {
    return this.getStringAttribute('obscured_value');
  }
  public set obscuredValue(value: string) {
    this._obscuredValue = value;
  }
  public resetObscuredValue() {
    this._obscuredValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obscuredValueInput() {
    return this._obscuredValue;
  }

  // password_file - computed: false, optional: true, required: false
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

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new PassphraseProviderRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // secret_field_name - computed: false, optional: true, required: false
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

  // secret_id - computed: false, optional: true, required: false
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

  // secret_name - computed: false, optional: true, required: false
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

  // secret_version_id - computed: false, optional: true, required: false
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

  // secret_version_stage - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vault_external_server - computed: false, optional: true, required: false
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

  // vault_secret_field_name - computed: false, optional: true, required: false
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

  // vault_secret_path - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_external_server: cdktf.stringToTerraform(this._awsExternalServer),
      azure_authentication_method: cdktf.stringToTerraform(this._azureAuthenticationMethod),
      conjur_external_server: cdktf.stringToTerraform(this._conjurExternalServer),
      conjur_secret_relative_path: cdktf.stringToTerraform(this._conjurSecretRelativePath),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_variable: cdktf.stringToTerraform(this._environmentVariable),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      key_vault_uri: cdktf.stringToTerraform(this._keyVaultUri),
      max_cache_duration: cdktf.stringToTerraform(this._maxCacheDuration),
      name: cdktf.stringToTerraform(this._name),
      obscured_value: cdktf.stringToTerraform(this._obscuredValue),
      password_file: cdktf.stringToTerraform(this._passwordFile),
      secret_field_name: cdktf.stringToTerraform(this._secretFieldName),
      secret_id: cdktf.stringToTerraform(this._secretId),
      secret_name: cdktf.stringToTerraform(this._secretName),
      secret_version_id: cdktf.stringToTerraform(this._secretVersionId),
      secret_version_stage: cdktf.stringToTerraform(this._secretVersionStage),
      type: cdktf.stringToTerraform(this._type),
      vault_external_server: cdktf.stringToTerraform(this._vaultExternalServer),
      vault_secret_field_name: cdktf.stringToTerraform(this._vaultSecretFieldName),
      vault_secret_path: cdktf.stringToTerraform(this._vaultSecretPath),
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
      environment_variable: {
        value: cdktf.stringToHclTerraform(this._environmentVariable),
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
      key_vault_uri: {
        value: cdktf.stringToHclTerraform(this._keyVaultUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cache_duration: {
        value: cdktf.stringToHclTerraform(this._maxCacheDuration),
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
      obscured_value: {
        value: cdktf.stringToHclTerraform(this._obscuredValue),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
