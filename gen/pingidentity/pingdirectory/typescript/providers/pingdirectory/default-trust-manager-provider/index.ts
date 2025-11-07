// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultTrustManagerProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Supported in PingDirectory product version 10.1.0.3+. Indicates whether trust manager providers should cache trust managers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#enable_trust_manager_caching DefaultTrustManagerProvider#enable_trust_manager_caching}
  */
  readonly enableTrustManagerCaching?: boolean | cdktf.IResolvable;
  /**
  * Indicate whether the Trust Manager Provider is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#enabled DefaultTrustManagerProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Trust Manager Provider. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#extension_argument DefaultTrustManagerProvider#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Trust Manager Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#extension_class DefaultTrustManagerProvider#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Indicates whether certificates issued by an authority included in the JVM's set of default issuers should be automatically trusted, even if they would not otherwise be trusted by this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#include_jvm_default_issuers DefaultTrustManagerProvider#include_jvm_default_issuers}
  */
  readonly includeJvmDefaultIssuers?: boolean | cdktf.IResolvable;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#name DefaultTrustManagerProvider#name}
  */
  readonly name: string;
  /**
  * Specifies the path to the file containing the trust information. It can be an absolute path or a path that is relative to the Directory Server instance root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#trust_store_file DefaultTrustManagerProvider#trust_store_file}
  */
  readonly trustStoreFile?: string;
  /**
  * Specifies the clear-text PIN needed to access the File Based Trust Manager Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#trust_store_pin DefaultTrustManagerProvider#trust_store_pin}
  */
  readonly trustStorePin?: string;
  /**
  * Specifies the path to the text file whose only contents should be a single line containing the clear-text PIN needed to access the File Based Trust Manager Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#trust_store_pin_file DefaultTrustManagerProvider#trust_store_pin_file}
  */
  readonly trustStorePinFile?: string;
  /**
  * The passphrase provider to use to obtain the clear-text PIN needed to access the File Based Trust Manager Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#trust_store_pin_passphrase_provider DefaultTrustManagerProvider#trust_store_pin_passphrase_provider}
  */
  readonly trustStorePinPassphraseProvider?: string;
  /**
  * Specifies the format for the data in the trust store file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#trust_store_type DefaultTrustManagerProvider#trust_store_type}
  */
  readonly trustStoreType?: string;
}
export interface DefaultTrustManagerProviderRequiredActions {
}

export function defaultTrustManagerProviderRequiredActionsToTerraform(struct?: DefaultTrustManagerProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultTrustManagerProviderRequiredActionsToHclTerraform(struct?: DefaultTrustManagerProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultTrustManagerProviderRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultTrustManagerProviderRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultTrustManagerProviderRequiredActions | undefined) {
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

export class DefaultTrustManagerProviderRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultTrustManagerProviderRequiredActionsOutputReference {
    return new DefaultTrustManagerProviderRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider pingdirectory_default_trust_manager_provider}
*/
export class DefaultTrustManagerProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_trust_manager_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultTrustManagerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultTrustManagerProvider to import
  * @param importFromId The id of the existing DefaultTrustManagerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultTrustManagerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_trust_manager_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_trust_manager_provider pingdirectory_default_trust_manager_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultTrustManagerProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultTrustManagerProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_trust_manager_provider',
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
    this._enableTrustManagerCaching = config.enableTrustManagerCaching;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._includeJvmDefaultIssuers = config.includeJvmDefaultIssuers;
    this._name = config.name;
    this._trustStoreFile = config.trustStoreFile;
    this._trustStorePin = config.trustStorePin;
    this._trustStorePinFile = config.trustStorePinFile;
    this._trustStorePinPassphraseProvider = config.trustStorePinPassphraseProvider;
    this._trustStoreType = config.trustStoreType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_trust_manager_caching - computed: true, optional: true, required: false
  private _enableTrustManagerCaching?: boolean | cdktf.IResolvable; 
  public get enableTrustManagerCaching() {
    return this.getBooleanAttribute('enable_trust_manager_caching');
  }
  public set enableTrustManagerCaching(value: boolean | cdktf.IResolvable) {
    this._enableTrustManagerCaching = value;
  }
  public resetEnableTrustManagerCaching() {
    this._enableTrustManagerCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrustManagerCachingInput() {
    return this._enableTrustManagerCaching;
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

  // include_jvm_default_issuers - computed: true, optional: true, required: false
  private _includeJvmDefaultIssuers?: boolean | cdktf.IResolvable; 
  public get includeJvmDefaultIssuers() {
    return this.getBooleanAttribute('include_jvm_default_issuers');
  }
  public set includeJvmDefaultIssuers(value: boolean | cdktf.IResolvable) {
    this._includeJvmDefaultIssuers = value;
  }
  public resetIncludeJvmDefaultIssuers() {
    this._includeJvmDefaultIssuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeJvmDefaultIssuersInput() {
    return this._includeJvmDefaultIssuers;
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

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultTrustManagerProviderRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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

  // trust_store_pin_file - computed: true, optional: true, required: false
  private _trustStorePinFile?: string; 
  public get trustStorePinFile() {
    return this.getStringAttribute('trust_store_pin_file');
  }
  public set trustStorePinFile(value: string) {
    this._trustStorePinFile = value;
  }
  public resetTrustStorePinFile() {
    this._trustStorePinFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePinFileInput() {
    return this._trustStorePinFile;
  }

  // trust_store_pin_passphrase_provider - computed: true, optional: true, required: false
  private _trustStorePinPassphraseProvider?: string; 
  public get trustStorePinPassphraseProvider() {
    return this.getStringAttribute('trust_store_pin_passphrase_provider');
  }
  public set trustStorePinPassphraseProvider(value: string) {
    this._trustStorePinPassphraseProvider = value;
  }
  public resetTrustStorePinPassphraseProvider() {
    this._trustStorePinPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePinPassphraseProviderInput() {
    return this._trustStorePinPassphraseProvider;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_trust_manager_caching: cdktf.booleanToTerraform(this._enableTrustManagerCaching),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      include_jvm_default_issuers: cdktf.booleanToTerraform(this._includeJvmDefaultIssuers),
      name: cdktf.stringToTerraform(this._name),
      trust_store_file: cdktf.stringToTerraform(this._trustStoreFile),
      trust_store_pin: cdktf.stringToTerraform(this._trustStorePin),
      trust_store_pin_file: cdktf.stringToTerraform(this._trustStorePinFile),
      trust_store_pin_passphrase_provider: cdktf.stringToTerraform(this._trustStorePinPassphraseProvider),
      trust_store_type: cdktf.stringToTerraform(this._trustStoreType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_trust_manager_caching: {
        value: cdktf.booleanToHclTerraform(this._enableTrustManagerCaching),
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
      include_jvm_default_issuers: {
        value: cdktf.booleanToHclTerraform(this._includeJvmDefaultIssuers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      trust_store_pin_file: {
        value: cdktf.stringToHclTerraform(this._trustStorePinFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_pin_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._trustStorePinPassphraseProvider),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
