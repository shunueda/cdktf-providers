// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultPasswordGeneratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to capitalize each word used in the generated password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#capitalize_words DefaultPasswordGenerator#capitalize_words}
  */
  readonly capitalizeWords?: boolean | cdktf.IResolvable;
  /**
  * A description for this Password Generator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#description DefaultPasswordGenerator#description}
  */
  readonly description?: string;
  /**
  * The path to the dictionary file that will be used to obtain the words for use in generated passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#dictionary_file DefaultPasswordGenerator#dictionary_file}
  */
  readonly dictionaryFile?: string;
  /**
  * Indicates whether the Password Generator is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#enabled DefaultPasswordGenerator#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Password Generator. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#extension_argument DefaultPasswordGenerator#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Password Generator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#extension_class DefaultPasswordGenerator#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * The minimum number of characters that generated passwords will be required to have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#minimum_password_characters DefaultPasswordGenerator#minimum_password_characters}
  */
  readonly minimumPasswordCharacters?: number;
  /**
  * The minimum number of words that must be concatenated in the course of generating a password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#minimum_password_words DefaultPasswordGenerator#minimum_password_words}
  */
  readonly minimumPasswordWords?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#name DefaultPasswordGenerator#name}
  */
  readonly name: string;
  /**
  * Specifies one or more named character sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#password_character_set DefaultPasswordGenerator#password_character_set}
  */
  readonly passwordCharacterSet?: string[];
  /**
  * Specifies the format to use for the generated password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#password_format DefaultPasswordGenerator#password_format}
  */
  readonly passwordFormat?: string;
  /**
  * The set of arguments used to customize the behavior for the Scripted Password Generator. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#script_argument DefaultPasswordGenerator#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Password Generator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#script_class DefaultPasswordGenerator#script_class}
  */
  readonly scriptClass?: string;
}
export interface DefaultPasswordGeneratorRequiredActions {
}

export function defaultPasswordGeneratorRequiredActionsToTerraform(struct?: DefaultPasswordGeneratorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultPasswordGeneratorRequiredActionsToHclTerraform(struct?: DefaultPasswordGeneratorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultPasswordGeneratorRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultPasswordGeneratorRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultPasswordGeneratorRequiredActions | undefined) {
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

export class DefaultPasswordGeneratorRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultPasswordGeneratorRequiredActionsOutputReference {
    return new DefaultPasswordGeneratorRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator pingdirectory_default_password_generator}
*/
export class DefaultPasswordGenerator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_password_generator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultPasswordGenerator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultPasswordGenerator to import
  * @param importFromId The id of the existing DefaultPasswordGenerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultPasswordGenerator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_password_generator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_generator pingdirectory_default_password_generator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultPasswordGeneratorConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultPasswordGeneratorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_password_generator',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capitalizeWords = config.capitalizeWords;
    this._description = config.description;
    this._dictionaryFile = config.dictionaryFile;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._minimumPasswordCharacters = config.minimumPasswordCharacters;
    this._minimumPasswordWords = config.minimumPasswordWords;
    this._name = config.name;
    this._passwordCharacterSet = config.passwordCharacterSet;
    this._passwordFormat = config.passwordFormat;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capitalize_words - computed: true, optional: true, required: false
  private _capitalizeWords?: boolean | cdktf.IResolvable; 
  public get capitalizeWords() {
    return this.getBooleanAttribute('capitalize_words');
  }
  public set capitalizeWords(value: boolean | cdktf.IResolvable) {
    this._capitalizeWords = value;
  }
  public resetCapitalizeWords() {
    this._capitalizeWords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capitalizeWordsInput() {
    return this._capitalizeWords;
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

  // dictionary_file - computed: true, optional: true, required: false
  private _dictionaryFile?: string; 
  public get dictionaryFile() {
    return this.getStringAttribute('dictionary_file');
  }
  public set dictionaryFile(value: string) {
    this._dictionaryFile = value;
  }
  public resetDictionaryFile() {
    this._dictionaryFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryFileInput() {
    return this._dictionaryFile;
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

  // minimum_password_characters - computed: true, optional: true, required: false
  private _minimumPasswordCharacters?: number; 
  public get minimumPasswordCharacters() {
    return this.getNumberAttribute('minimum_password_characters');
  }
  public set minimumPasswordCharacters(value: number) {
    this._minimumPasswordCharacters = value;
  }
  public resetMinimumPasswordCharacters() {
    this._minimumPasswordCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordCharactersInput() {
    return this._minimumPasswordCharacters;
  }

  // minimum_password_words - computed: true, optional: true, required: false
  private _minimumPasswordWords?: number; 
  public get minimumPasswordWords() {
    return this.getNumberAttribute('minimum_password_words');
  }
  public set minimumPasswordWords(value: number) {
    this._minimumPasswordWords = value;
  }
  public resetMinimumPasswordWords() {
    this._minimumPasswordWords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordWordsInput() {
    return this._minimumPasswordWords;
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

  // password_character_set - computed: true, optional: true, required: false
  private _passwordCharacterSet?: string[]; 
  public get passwordCharacterSet() {
    return cdktf.Fn.tolist(this.getListAttribute('password_character_set'));
  }
  public set passwordCharacterSet(value: string[]) {
    this._passwordCharacterSet = value;
  }
  public resetPasswordCharacterSet() {
    this._passwordCharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCharacterSetInput() {
    return this._passwordCharacterSet;
  }

  // password_format - computed: true, optional: true, required: false
  private _passwordFormat?: string; 
  public get passwordFormat() {
    return this.getStringAttribute('password_format');
  }
  public set passwordFormat(value: string) {
    this._passwordFormat = value;
  }
  public resetPasswordFormat() {
    this._passwordFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFormatInput() {
    return this._passwordFormat;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultPasswordGeneratorRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // script_argument - computed: true, optional: true, required: false
  private _scriptArgument?: string[]; 
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }
  public set scriptArgument(value: string[]) {
    this._scriptArgument = value;
  }
  public resetScriptArgument() {
    this._scriptArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgumentInput() {
    return this._scriptArgument;
  }

  // script_class - computed: true, optional: true, required: false
  private _scriptClass?: string; 
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }
  public set scriptClass(value: string) {
    this._scriptClass = value;
  }
  public resetScriptClass() {
    this._scriptClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptClassInput() {
    return this._scriptClass;
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
      capitalize_words: cdktf.booleanToTerraform(this._capitalizeWords),
      description: cdktf.stringToTerraform(this._description),
      dictionary_file: cdktf.stringToTerraform(this._dictionaryFile),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      minimum_password_characters: cdktf.numberToTerraform(this._minimumPasswordCharacters),
      minimum_password_words: cdktf.numberToTerraform(this._minimumPasswordWords),
      name: cdktf.stringToTerraform(this._name),
      password_character_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwordCharacterSet),
      password_format: cdktf.stringToTerraform(this._passwordFormat),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capitalize_words: {
        value: cdktf.booleanToHclTerraform(this._capitalizeWords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dictionary_file: {
        value: cdktf.stringToHclTerraform(this._dictionaryFile),
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
      minimum_password_characters: {
        value: cdktf.numberToHclTerraform(this._minimumPasswordCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_password_words: {
        value: cdktf.numberToHclTerraform(this._minimumPasswordWords),
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
      password_character_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passwordCharacterSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password_format: {
        value: cdktf.stringToHclTerraform(this._passwordFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scriptArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_class: {
        value: cdktf.stringToHclTerraform(this._scriptClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
