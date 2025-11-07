// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultLogFieldBehaviorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default behavior that the server should exhibit for fields for which no explicit behavior is defined. If no default behavior is defined, the server will fall back to using the default behavior configured for the syntax used for each log field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#default_behavior DefaultLogFieldBehavior#default_behavior}
  */
  readonly defaultBehavior?: string;
  /**
  * A description for this Log Field Behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#description DefaultLogFieldBehavior#description}
  */
  readonly description?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#name DefaultLogFieldBehavior#name}
  */
  readonly name: string;
  /**
  * The log fields that should be omitted entirely from log messages. Neither the field name nor value will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#omit_field DefaultLogFieldBehavior#omit_field}
  */
  readonly omitField?: string[];
  /**
  * The names of any custom fields that should be omitted from log messages. This should generally only be used for fields that are not available through the omit-field property (for example, custom log fields defined in Server SDK extensions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#omit_field_name DefaultLogFieldBehavior#omit_field_name}
  */
  readonly omitFieldName?: string[];
  /**
  * The log fields whose values should be logged with the intended value. The values for these fields will be preserved, although they may be sanitized for parsability or safety purposes (for example, to escape special characters in the value), and values that are too long may be truncated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#preserve_field DefaultLogFieldBehavior#preserve_field}
  */
  readonly preserveField?: string[];
  /**
  * The names of any custom fields whose values should be preserved. This should generally only be used for fields that are not available through the preserve-field property (for example, custom log fields defined in Server SDK extensions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#preserve_field_name DefaultLogFieldBehavior#preserve_field_name}
  */
  readonly preserveFieldName?: string[];
  /**
  * The log fields whose values should be completely redacted in log messages. The field name will be included, but with a fixed value that does not reflect the actual value for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#redact_entire_value_field DefaultLogFieldBehavior#redact_entire_value_field}
  */
  readonly redactEntireValueField?: string[];
  /**
  * The names of any custom fields whose values should be completely redacted. This should generally only be used for fields that are not available through the redact-entire-value-field property (for example, custom log fields defined in Server SDK extensions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#redact_entire_value_field_name DefaultLogFieldBehavior#redact_entire_value_field_name}
  */
  readonly redactEntireValueFieldName?: string[];
  /**
  * The log fields whose values will include redacted components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#redact_value_components_field DefaultLogFieldBehavior#redact_value_components_field}
  */
  readonly redactValueComponentsField?: string[];
  /**
  * The names of any custom fields for which to redact components within the value. This should generally only be used for fields that are not available through the redact-value-components-field property (for example, custom log fields defined in Server SDK extensions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#redact_value_components_field_name DefaultLogFieldBehavior#redact_value_components_field_name}
  */
  readonly redactValueComponentsFieldName?: string[];
  /**
  * The log fields whose values should be completely tokenized in log messages. The field name will be included, but the value will be replaced with a token that does not reveal the actual value, but that is generated from the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#tokenize_entire_value_field DefaultLogFieldBehavior#tokenize_entire_value_field}
  */
  readonly tokenizeEntireValueField?: string[];
  /**
  * The names of any custom fields whose values should be completely tokenized. This should generally only be used for fields that are not available through the tokenize-entire-value-field property (for example, custom log fields defined in Server SDK extensions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#tokenize_entire_value_field_name DefaultLogFieldBehavior#tokenize_entire_value_field_name}
  */
  readonly tokenizeEntireValueFieldName?: string[];
  /**
  * The log fields whose values will include tokenized components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#tokenize_value_components_field DefaultLogFieldBehavior#tokenize_value_components_field}
  */
  readonly tokenizeValueComponentsField?: string[];
  /**
  * The names of any custom fields for which to tokenize components within the value. This should generally only be used for fields that are not available through the tokenize-value-components-field property (for example, custom log fields defined in Server SDK extensions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#tokenize_value_components_field_name DefaultLogFieldBehavior#tokenize_value_components_field_name}
  */
  readonly tokenizeValueComponentsFieldName?: string[];
}
export interface DefaultLogFieldBehaviorRequiredActions {
}

export function defaultLogFieldBehaviorRequiredActionsToTerraform(struct?: DefaultLogFieldBehaviorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultLogFieldBehaviorRequiredActionsToHclTerraform(struct?: DefaultLogFieldBehaviorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultLogFieldBehaviorRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultLogFieldBehaviorRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLogFieldBehaviorRequiredActions | undefined) {
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

export class DefaultLogFieldBehaviorRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultLogFieldBehaviorRequiredActionsOutputReference {
    return new DefaultLogFieldBehaviorRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior pingdirectory_default_log_field_behavior}
*/
export class DefaultLogFieldBehavior extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_log_field_behavior";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultLogFieldBehavior resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultLogFieldBehavior to import
  * @param importFromId The id of the existing DefaultLogFieldBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultLogFieldBehavior to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_log_field_behavior", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_behavior pingdirectory_default_log_field_behavior} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultLogFieldBehaviorConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultLogFieldBehaviorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_log_field_behavior',
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
    this._defaultBehavior = config.defaultBehavior;
    this._description = config.description;
    this._name = config.name;
    this._omitField = config.omitField;
    this._omitFieldName = config.omitFieldName;
    this._preserveField = config.preserveField;
    this._preserveFieldName = config.preserveFieldName;
    this._redactEntireValueField = config.redactEntireValueField;
    this._redactEntireValueFieldName = config.redactEntireValueFieldName;
    this._redactValueComponentsField = config.redactValueComponentsField;
    this._redactValueComponentsFieldName = config.redactValueComponentsFieldName;
    this._tokenizeEntireValueField = config.tokenizeEntireValueField;
    this._tokenizeEntireValueFieldName = config.tokenizeEntireValueFieldName;
    this._tokenizeValueComponentsField = config.tokenizeValueComponentsField;
    this._tokenizeValueComponentsFieldName = config.tokenizeValueComponentsFieldName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_behavior - computed: true, optional: true, required: false
  private _defaultBehavior?: string; 
  public get defaultBehavior() {
    return this.getStringAttribute('default_behavior');
  }
  public set defaultBehavior(value: string) {
    this._defaultBehavior = value;
  }
  public resetDefaultBehavior() {
    this._defaultBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBehaviorInput() {
    return this._defaultBehavior;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // omit_field - computed: true, optional: true, required: false
  private _omitField?: string[]; 
  public get omitField() {
    return cdktf.Fn.tolist(this.getListAttribute('omit_field'));
  }
  public set omitField(value: string[]) {
    this._omitField = value;
  }
  public resetOmitField() {
    this._omitField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitFieldInput() {
    return this._omitField;
  }

  // omit_field_name - computed: true, optional: true, required: false
  private _omitFieldName?: string[]; 
  public get omitFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('omit_field_name'));
  }
  public set omitFieldName(value: string[]) {
    this._omitFieldName = value;
  }
  public resetOmitFieldName() {
    this._omitFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitFieldNameInput() {
    return this._omitFieldName;
  }

  // preserve_field - computed: true, optional: true, required: false
  private _preserveField?: string[]; 
  public get preserveField() {
    return cdktf.Fn.tolist(this.getListAttribute('preserve_field'));
  }
  public set preserveField(value: string[]) {
    this._preserveField = value;
  }
  public resetPreserveField() {
    this._preserveField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveFieldInput() {
    return this._preserveField;
  }

  // preserve_field_name - computed: true, optional: true, required: false
  private _preserveFieldName?: string[]; 
  public get preserveFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('preserve_field_name'));
  }
  public set preserveFieldName(value: string[]) {
    this._preserveFieldName = value;
  }
  public resetPreserveFieldName() {
    this._preserveFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveFieldNameInput() {
    return this._preserveFieldName;
  }

  // redact_entire_value_field - computed: true, optional: true, required: false
  private _redactEntireValueField?: string[]; 
  public get redactEntireValueField() {
    return cdktf.Fn.tolist(this.getListAttribute('redact_entire_value_field'));
  }
  public set redactEntireValueField(value: string[]) {
    this._redactEntireValueField = value;
  }
  public resetRedactEntireValueField() {
    this._redactEntireValueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactEntireValueFieldInput() {
    return this._redactEntireValueField;
  }

  // redact_entire_value_field_name - computed: true, optional: true, required: false
  private _redactEntireValueFieldName?: string[]; 
  public get redactEntireValueFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('redact_entire_value_field_name'));
  }
  public set redactEntireValueFieldName(value: string[]) {
    this._redactEntireValueFieldName = value;
  }
  public resetRedactEntireValueFieldName() {
    this._redactEntireValueFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactEntireValueFieldNameInput() {
    return this._redactEntireValueFieldName;
  }

  // redact_value_components_field - computed: true, optional: true, required: false
  private _redactValueComponentsField?: string[]; 
  public get redactValueComponentsField() {
    return cdktf.Fn.tolist(this.getListAttribute('redact_value_components_field'));
  }
  public set redactValueComponentsField(value: string[]) {
    this._redactValueComponentsField = value;
  }
  public resetRedactValueComponentsField() {
    this._redactValueComponentsField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactValueComponentsFieldInput() {
    return this._redactValueComponentsField;
  }

  // redact_value_components_field_name - computed: true, optional: true, required: false
  private _redactValueComponentsFieldName?: string[]; 
  public get redactValueComponentsFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('redact_value_components_field_name'));
  }
  public set redactValueComponentsFieldName(value: string[]) {
    this._redactValueComponentsFieldName = value;
  }
  public resetRedactValueComponentsFieldName() {
    this._redactValueComponentsFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactValueComponentsFieldNameInput() {
    return this._redactValueComponentsFieldName;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultLogFieldBehaviorRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // tokenize_entire_value_field - computed: true, optional: true, required: false
  private _tokenizeEntireValueField?: string[]; 
  public get tokenizeEntireValueField() {
    return cdktf.Fn.tolist(this.getListAttribute('tokenize_entire_value_field'));
  }
  public set tokenizeEntireValueField(value: string[]) {
    this._tokenizeEntireValueField = value;
  }
  public resetTokenizeEntireValueField() {
    this._tokenizeEntireValueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizeEntireValueFieldInput() {
    return this._tokenizeEntireValueField;
  }

  // tokenize_entire_value_field_name - computed: true, optional: true, required: false
  private _tokenizeEntireValueFieldName?: string[]; 
  public get tokenizeEntireValueFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('tokenize_entire_value_field_name'));
  }
  public set tokenizeEntireValueFieldName(value: string[]) {
    this._tokenizeEntireValueFieldName = value;
  }
  public resetTokenizeEntireValueFieldName() {
    this._tokenizeEntireValueFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizeEntireValueFieldNameInput() {
    return this._tokenizeEntireValueFieldName;
  }

  // tokenize_value_components_field - computed: true, optional: true, required: false
  private _tokenizeValueComponentsField?: string[]; 
  public get tokenizeValueComponentsField() {
    return cdktf.Fn.tolist(this.getListAttribute('tokenize_value_components_field'));
  }
  public set tokenizeValueComponentsField(value: string[]) {
    this._tokenizeValueComponentsField = value;
  }
  public resetTokenizeValueComponentsField() {
    this._tokenizeValueComponentsField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizeValueComponentsFieldInput() {
    return this._tokenizeValueComponentsField;
  }

  // tokenize_value_components_field_name - computed: true, optional: true, required: false
  private _tokenizeValueComponentsFieldName?: string[]; 
  public get tokenizeValueComponentsFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('tokenize_value_components_field_name'));
  }
  public set tokenizeValueComponentsFieldName(value: string[]) {
    this._tokenizeValueComponentsFieldName = value;
  }
  public resetTokenizeValueComponentsFieldName() {
    this._tokenizeValueComponentsFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizeValueComponentsFieldNameInput() {
    return this._tokenizeValueComponentsFieldName;
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
      default_behavior: cdktf.stringToTerraform(this._defaultBehavior),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      omit_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._omitField),
      omit_field_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._omitFieldName),
      preserve_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preserveField),
      preserve_field_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preserveFieldName),
      redact_entire_value_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redactEntireValueField),
      redact_entire_value_field_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redactEntireValueFieldName),
      redact_value_components_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redactValueComponentsField),
      redact_value_components_field_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redactValueComponentsFieldName),
      tokenize_entire_value_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenizeEntireValueField),
      tokenize_entire_value_field_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenizeEntireValueFieldName),
      tokenize_value_components_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenizeValueComponentsField),
      tokenize_value_components_field_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenizeValueComponentsFieldName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_behavior: {
        value: cdktf.stringToHclTerraform(this._defaultBehavior),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omit_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._omitField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      omit_field_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._omitFieldName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preserve_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preserveField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preserve_field_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preserveFieldName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redact_entire_value_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redactEntireValueField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redact_entire_value_field_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redactEntireValueFieldName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redact_value_components_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redactValueComponentsField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redact_value_components_field_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redactValueComponentsFieldName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tokenize_entire_value_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenizeEntireValueField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tokenize_entire_value_field_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenizeEntireValueFieldName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tokenize_value_components_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenizeValueComponentsField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tokenize_value_components_field_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenizeValueComponentsFieldName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
