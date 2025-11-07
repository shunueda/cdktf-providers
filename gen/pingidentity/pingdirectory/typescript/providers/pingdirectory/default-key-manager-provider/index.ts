// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultKeyManagerProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for this Key Manager Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#description DefaultKeyManagerProvider#description}
  */
  readonly description?: string;
  /**
  * Supported in PingDirectory product version 10.1.0.3+. Indicates whether key manager providers should cache key managers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#enable_key_manager_caching DefaultKeyManagerProvider#enable_key_manager_caching}
  */
  readonly enableKeyManagerCaching?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Key Manager Provider is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#enabled DefaultKeyManagerProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Key Manager Provider. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#extension_argument DefaultKeyManagerProvider#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Key Manager Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#extension_class DefaultKeyManagerProvider#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the path to the file that contains the private key information. This may be an absolute path, or a path that is relative to the Directory Server instance root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#key_store_file DefaultKeyManagerProvider#key_store_file}
  */
  readonly keyStoreFile?: string;
  /**
  * When the `type` attribute is set to:
  *   - `file-based`: Specifies the PIN needed to access the File Based Key Manager Provider.
  *   - `pkcs11`: Specifies the PIN needed to access the PKCS11 Key Manager Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#key_store_pin DefaultKeyManagerProvider#key_store_pin}
  */
  readonly keyStorePin?: string;
  /**
  * When the `type` attribute is set to:
  *   - `file-based`: Specifies the path to the text file whose only contents should be a single line containing the clear-text PIN needed to access the File Based Key Manager Provider.
  *   - `pkcs11`: Specifies the path to the text file whose only contents should be a single line containing the clear-text PIN needed to access the PKCS11 Key Manager Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#key_store_pin_file DefaultKeyManagerProvider#key_store_pin_file}
  */
  readonly keyStorePinFile?: string;
  /**
  * When the `type` attribute is set to:
  *   - `file-based`: The passphrase provider to use to obtain the clear-text PIN needed to access the File Based Key Manager Provider.
  *   - `pkcs11`: The passphrase provider to use to obtain the clear-text PIN needed to access the PKCS11 Key Manager Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#key_store_pin_passphrase_provider DefaultKeyManagerProvider#key_store_pin_passphrase_provider}
  */
  readonly keyStorePinPassphraseProvider?: string;
  /**
  * Specifies the format for the data in the key store file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#key_store_type DefaultKeyManagerProvider#key_store_type}
  */
  readonly keyStoreType?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#name DefaultKeyManagerProvider#name}
  */
  readonly name: string;
  /**
  * The key store type to use when obtaining an instance of a key store for interacting with a PKCS #11 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#pkcs11_key_store_type DefaultKeyManagerProvider#pkcs11_key_store_type}
  */
  readonly pkcs11KeyStoreType?: string;
  /**
  * The maximum length of time that data retrieved from PKCS #11 tokens may be cached for reuse. Caching might be necessary if there is noticable latency when accessing the token, for example if the token uses a remote key store. A value of zero milliseconds indicates that no caching should be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#pkcs11_max_cache_duration DefaultKeyManagerProvider#pkcs11_max_cache_duration}
  */
  readonly pkcs11MaxCacheDuration?: string;
  /**
  * The fully-qualified name of the Java security provider class that implements support for interacting with PKCS #11 tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#pkcs11_provider_class DefaultKeyManagerProvider#pkcs11_provider_class}
  */
  readonly pkcs11ProviderClass?: string;
  /**
  * The path to the file to use to configure the security provider that implements support for interacting with PKCS #11 tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#pkcs11_provider_configuration_file DefaultKeyManagerProvider#pkcs11_provider_configuration_file}
  */
  readonly pkcs11ProviderConfigurationFile?: string;
  /**
  * Specifies the clear-text PIN needed to access the File Based Key Manager Provider private key. If no private key PIN is specified the PIN defaults to the key store PIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#private_key_pin DefaultKeyManagerProvider#private_key_pin}
  */
  readonly privateKeyPin?: string;
  /**
  * Specifies the path to the text file whose only contents should be a single line containing the clear-text PIN needed to access the File Based Key Manager Provider private key. If no private key PIN is specified the PIN defaults to the key store PIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#private_key_pin_file DefaultKeyManagerProvider#private_key_pin_file}
  */
  readonly privateKeyPinFile?: string;
  /**
  * The passphrase provider to use to obtain the clear-text PIN needed to access the File Based Key Manager Provider private key. If no private key PIN is specified the PIN defaults to the key store PIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#private_key_pin_passphrase_provider DefaultKeyManagerProvider#private_key_pin_passphrase_provider}
  */
  readonly privateKeyPinPassphraseProvider?: string;
}
export interface DefaultKeyManagerProviderRequiredActions {
}

export function defaultKeyManagerProviderRequiredActionsToTerraform(struct?: DefaultKeyManagerProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultKeyManagerProviderRequiredActionsToHclTerraform(struct?: DefaultKeyManagerProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultKeyManagerProviderRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultKeyManagerProviderRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultKeyManagerProviderRequiredActions | undefined) {
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

export class DefaultKeyManagerProviderRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultKeyManagerProviderRequiredActionsOutputReference {
    return new DefaultKeyManagerProviderRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider pingdirectory_default_key_manager_provider}
*/
export class DefaultKeyManagerProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_key_manager_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultKeyManagerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultKeyManagerProvider to import
  * @param importFromId The id of the existing DefaultKeyManagerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultKeyManagerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_key_manager_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_key_manager_provider pingdirectory_default_key_manager_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultKeyManagerProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultKeyManagerProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_key_manager_provider',
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
    this._description = config.description;
    this._enableKeyManagerCaching = config.enableKeyManagerCaching;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._keyStoreFile = config.keyStoreFile;
    this._keyStorePin = config.keyStorePin;
    this._keyStorePinFile = config.keyStorePinFile;
    this._keyStorePinPassphraseProvider = config.keyStorePinPassphraseProvider;
    this._keyStoreType = config.keyStoreType;
    this._name = config.name;
    this._pkcs11KeyStoreType = config.pkcs11KeyStoreType;
    this._pkcs11MaxCacheDuration = config.pkcs11MaxCacheDuration;
    this._pkcs11ProviderClass = config.pkcs11ProviderClass;
    this._pkcs11ProviderConfigurationFile = config.pkcs11ProviderConfigurationFile;
    this._privateKeyPin = config.privateKeyPin;
    this._privateKeyPinFile = config.privateKeyPinFile;
    this._privateKeyPinPassphraseProvider = config.privateKeyPinPassphraseProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable_key_manager_caching - computed: true, optional: true, required: false
  private _enableKeyManagerCaching?: boolean | cdktf.IResolvable; 
  public get enableKeyManagerCaching() {
    return this.getBooleanAttribute('enable_key_manager_caching');
  }
  public set enableKeyManagerCaching(value: boolean | cdktf.IResolvable) {
    this._enableKeyManagerCaching = value;
  }
  public resetEnableKeyManagerCaching() {
    this._enableKeyManagerCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyManagerCachingInput() {
    return this._enableKeyManagerCaching;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_store_file - computed: true, optional: true, required: false
  private _keyStoreFile?: string; 
  public get keyStoreFile() {
    return this.getStringAttribute('key_store_file');
  }
  public set keyStoreFile(value: string) {
    this._keyStoreFile = value;
  }
  public resetKeyStoreFile() {
    this._keyStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreFileInput() {
    return this._keyStoreFile;
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

  // key_store_pin_passphrase_provider - computed: true, optional: true, required: false
  private _keyStorePinPassphraseProvider?: string; 
  public get keyStorePinPassphraseProvider() {
    return this.getStringAttribute('key_store_pin_passphrase_provider');
  }
  public set keyStorePinPassphraseProvider(value: string) {
    this._keyStorePinPassphraseProvider = value;
  }
  public resetKeyStorePinPassphraseProvider() {
    this._keyStorePinPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePinPassphraseProviderInput() {
    return this._keyStorePinPassphraseProvider;
  }

  // key_store_type - computed: true, optional: true, required: false
  private _keyStoreType?: string; 
  public get keyStoreType() {
    return this.getStringAttribute('key_store_type');
  }
  public set keyStoreType(value: string) {
    this._keyStoreType = value;
  }
  public resetKeyStoreType() {
    this._keyStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreTypeInput() {
    return this._keyStoreType;
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

  // pkcs11_max_cache_duration - computed: true, optional: true, required: false
  private _pkcs11MaxCacheDuration?: string; 
  public get pkcs11MaxCacheDuration() {
    return this.getStringAttribute('pkcs11_max_cache_duration');
  }
  public set pkcs11MaxCacheDuration(value: string) {
    this._pkcs11MaxCacheDuration = value;
  }
  public resetPkcs11MaxCacheDuration() {
    this._pkcs11MaxCacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs11MaxCacheDurationInput() {
    return this._pkcs11MaxCacheDuration;
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

  // private_key_pin - computed: true, optional: true, required: false
  private _privateKeyPin?: string; 
  public get privateKeyPin() {
    return this.getStringAttribute('private_key_pin');
  }
  public set privateKeyPin(value: string) {
    this._privateKeyPin = value;
  }
  public resetPrivateKeyPin() {
    this._privateKeyPin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPinInput() {
    return this._privateKeyPin;
  }

  // private_key_pin_file - computed: true, optional: true, required: false
  private _privateKeyPinFile?: string; 
  public get privateKeyPinFile() {
    return this.getStringAttribute('private_key_pin_file');
  }
  public set privateKeyPinFile(value: string) {
    this._privateKeyPinFile = value;
  }
  public resetPrivateKeyPinFile() {
    this._privateKeyPinFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPinFileInput() {
    return this._privateKeyPinFile;
  }

  // private_key_pin_passphrase_provider - computed: true, optional: true, required: false
  private _privateKeyPinPassphraseProvider?: string; 
  public get privateKeyPinPassphraseProvider() {
    return this.getStringAttribute('private_key_pin_passphrase_provider');
  }
  public set privateKeyPinPassphraseProvider(value: string) {
    this._privateKeyPinPassphraseProvider = value;
  }
  public resetPrivateKeyPinPassphraseProvider() {
    this._privateKeyPinPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPinPassphraseProviderInput() {
    return this._privateKeyPinPassphraseProvider;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultKeyManagerProviderRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable_key_manager_caching: cdktf.booleanToTerraform(this._enableKeyManagerCaching),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      key_store_file: cdktf.stringToTerraform(this._keyStoreFile),
      key_store_pin: cdktf.stringToTerraform(this._keyStorePin),
      key_store_pin_file: cdktf.stringToTerraform(this._keyStorePinFile),
      key_store_pin_passphrase_provider: cdktf.stringToTerraform(this._keyStorePinPassphraseProvider),
      key_store_type: cdktf.stringToTerraform(this._keyStoreType),
      name: cdktf.stringToTerraform(this._name),
      pkcs11_key_store_type: cdktf.stringToTerraform(this._pkcs11KeyStoreType),
      pkcs11_max_cache_duration: cdktf.stringToTerraform(this._pkcs11MaxCacheDuration),
      pkcs11_provider_class: cdktf.stringToTerraform(this._pkcs11ProviderClass),
      pkcs11_provider_configuration_file: cdktf.stringToTerraform(this._pkcs11ProviderConfigurationFile),
      private_key_pin: cdktf.stringToTerraform(this._privateKeyPin),
      private_key_pin_file: cdktf.stringToTerraform(this._privateKeyPinFile),
      private_key_pin_passphrase_provider: cdktf.stringToTerraform(this._privateKeyPinPassphraseProvider),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_key_manager_caching: {
        value: cdktf.booleanToHclTerraform(this._enableKeyManagerCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      key_store_file: {
        value: cdktf.stringToHclTerraform(this._keyStoreFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_store_pin: {
        value: cdktf.stringToHclTerraform(this._keyStorePin),
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
      key_store_pin_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._keyStorePinPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_store_type: {
        value: cdktf.stringToHclTerraform(this._keyStoreType),
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
      pkcs11_key_store_type: {
        value: cdktf.stringToHclTerraform(this._pkcs11KeyStoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkcs11_max_cache_duration: {
        value: cdktf.stringToHclTerraform(this._pkcs11MaxCacheDuration),
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
      private_key_pin: {
        value: cdktf.stringToHclTerraform(this._privateKeyPin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_pin_file: {
        value: cdktf.stringToHclTerraform(this._privateKeyPinFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_pin_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._privateKeyPinPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
