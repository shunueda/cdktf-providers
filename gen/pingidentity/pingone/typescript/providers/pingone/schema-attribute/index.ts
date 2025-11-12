// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the attribute. If provided, it must not be an empty string. Valid characters consists of any Unicode letter, mark (for example, accent or umlaut), numeric character, punctuation character, or space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#description SchemaAttribute#description}
  */
  readonly description?: string;
  /**
  * The display name of the attribute such as 'T-shirt size'. If provided, it must not be an empty string. Valid characters consist of any Unicode letter, mark (for example, accent or umlaut), numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#display_name SchemaAttribute#display_name}
  */
  readonly displayName?: string;
  /**
  * Indicates whether or not the attribute is enabled.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#enabled SchemaAttribute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A set of one or more enumerated values for the attribute. If provided, it must not be an empty set.  Can only be set where the attribute type is `STRING` and cannot be set alongside `regex_validation`.  If the attribute has been created without enumerated values and this parameter is added later, this will trigger a replacement plan of the attribute resource.  If the attribute has been created with enumerated values that are subsequently removed, this will update without needing to replace the attribute resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#enumerated_values SchemaAttribute#enumerated_values}
  */
  readonly enumeratedValues?: SchemaAttributeEnumeratedValues[] | cdktf.IResolvable;
  /**
  * The ID of the environment to create the schema attribute in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#environment_id SchemaAttribute#environment_id}
  */
  readonly environmentId: string;
  /**
  * Indicates whether the attribute has multiple values or a single one. Maximum number of values stored is 1,000.  This field is immutable and cannot be changed once defined.  To protect against accidental data loss, this resource must be replaced manually (for example, by using Terraform's [plan `-replace` command option](https://developer.hashicorp.com/terraform/cli/commands/plan#replace-address)).  Any data that is stored against this resource must be manually exported before the resource is removed and re-imported once the resource has been replaced.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#multivalued SchemaAttribute#multivalued}
  */
  readonly multivalued?: boolean | cdktf.IResolvable;
  /**
  * The system name of the schema attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#name SchemaAttribute#name}
  */
  readonly name: string;
  /**
  * A single object representation of the optional regular expression representation of this attribute.  Can only be set where the attribute type is `STRING` and cannot be set alongside `enumerated_values`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#regex_validation SchemaAttribute#regex_validation}
  */
  readonly regexValidation?: SchemaAttributeRegexValidation;
  /**
  * The type of the attribute.  Options are `BOOLEAN`, `COMPLEX`, `JSON`, `STRING`.  `COMPLEX` and `BOOLEAN` attributes cannot be created, but standard attributes of those types may be updated. `JSON` attributes are limited by size (total size must not exceed 16KB).  This field is immutable and cannot be changed once defined.  To protect against accidental data loss, this resource must be replaced manually (for example, by using Terraform's [plan `-replace` command option](https://developer.hashicorp.com/terraform/cli/commands/plan#replace-address)).  Any data that is stored against this resource must be manually exported before the resource is removed and re-imported once the resource has been replaced.  Defaults to `STRING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#type SchemaAttribute#type}
  */
  readonly type?: string;
  /**
  * Indicates whether or not the attribute must have a unique value within the PingOne environment.  This field is immutable and cannot be changed once defined.  To protect against accidental data loss, this resource must be replaced manually (for example, by using Terraform's [plan `-replace` command option](https://developer.hashicorp.com/terraform/cli/commands/plan#replace-address)).  Any data that is stored against this resource must be manually exported before the resource is removed and re-imported once the resource has been replaced.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#unique SchemaAttribute#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
}
export interface SchemaAttributeEnumeratedValues {
  /**
  * A boolean that specifies whether the enumerated value is archived. Archived values cannot be added to a user, but existing archived values are preserved. This allows clients that read the schema to know all possible values of an attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#archived SchemaAttribute#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the description of the enumerated value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#description SchemaAttribute#description}
  */
  readonly description?: string;
  /**
  * A string that specifies the value of the enumerated value item. If provided, it must not be an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#value SchemaAttribute#value}
  */
  readonly value: string;
}

export function schemaAttributeEnumeratedValuesToTerraform(struct?: SchemaAttributeEnumeratedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archived: cdktf.booleanToTerraform(struct!.archived),
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function schemaAttributeEnumeratedValuesToHclTerraform(struct?: SchemaAttributeEnumeratedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archived: {
      value: cdktf.booleanToHclTerraform(struct!.archived),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaAttributeEnumeratedValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SchemaAttributeEnumeratedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archived !== undefined) {
      hasAnyValues = true;
      internalValueResult.archived = this._archived;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaAttributeEnumeratedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archived = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archived = value.archived;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // archived - computed: true, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SchemaAttributeEnumeratedValuesList extends cdktf.ComplexList {
  public internalValue? : SchemaAttributeEnumeratedValues[] | cdktf.IResolvable

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
  public get(index: number): SchemaAttributeEnumeratedValuesOutputReference {
    return new SchemaAttributeEnumeratedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchemaAttributeRegexValidation {
  /**
  * A string that specifies the regular expression to which the attribute must conform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#pattern SchemaAttribute#pattern}
  */
  readonly pattern: string;
  /**
  * A string that specifies a developer friendly description of the regular expression requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#requirements SchemaAttribute#requirements}
  */
  readonly requirements: string;
  /**
  * A set of one or more strings matching the regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#values_pattern_should_match SchemaAttribute#values_pattern_should_match}
  */
  readonly valuesPatternShouldMatch?: string[];
  /**
  * A set of one or more strings that do not match the regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#values_pattern_should_not_match SchemaAttribute#values_pattern_should_not_match}
  */
  readonly valuesPatternShouldNotMatch?: string[];
}

export function schemaAttributeRegexValidationToTerraform(struct?: SchemaAttributeRegexValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    values_pattern_should_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valuesPatternShouldMatch),
    values_pattern_should_not_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valuesPatternShouldNotMatch),
  }
}


export function schemaAttributeRegexValidationToHclTerraform(struct?: SchemaAttributeRegexValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements: {
      value: cdktf.stringToHclTerraform(struct!.requirements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_pattern_should_match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valuesPatternShouldMatch),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values_pattern_should_not_match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valuesPatternShouldNotMatch),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaAttributeRegexValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchemaAttributeRegexValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._requirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements;
    }
    if (this._valuesPatternShouldMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesPatternShouldMatch = this._valuesPatternShouldMatch;
    }
    if (this._valuesPatternShouldNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesPatternShouldNotMatch = this._valuesPatternShouldNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaAttributeRegexValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._requirements = undefined;
      this._valuesPatternShouldMatch = undefined;
      this._valuesPatternShouldNotMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._requirements = value.requirements;
      this._valuesPatternShouldMatch = value.valuesPatternShouldMatch;
      this._valuesPatternShouldNotMatch = value.valuesPatternShouldNotMatch;
    }
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // requirements - computed: false, optional: false, required: true
  private _requirements?: string; 
  public get requirements() {
    return this.getStringAttribute('requirements');
  }
  public set requirements(value: string) {
    this._requirements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements;
  }

  // values_pattern_should_match - computed: false, optional: true, required: false
  private _valuesPatternShouldMatch?: string[]; 
  public get valuesPatternShouldMatch() {
    return cdktf.Fn.tolist(this.getListAttribute('values_pattern_should_match'));
  }
  public set valuesPatternShouldMatch(value: string[]) {
    this._valuesPatternShouldMatch = value;
  }
  public resetValuesPatternShouldMatch() {
    this._valuesPatternShouldMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesPatternShouldMatchInput() {
    return this._valuesPatternShouldMatch;
  }

  // values_pattern_should_not_match - computed: false, optional: true, required: false
  private _valuesPatternShouldNotMatch?: string[]; 
  public get valuesPatternShouldNotMatch() {
    return cdktf.Fn.tolist(this.getListAttribute('values_pattern_should_not_match'));
  }
  public set valuesPatternShouldNotMatch(value: string[]) {
    this._valuesPatternShouldNotMatch = value;
  }
  public resetValuesPatternShouldNotMatch() {
    this._valuesPatternShouldNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesPatternShouldNotMatchInput() {
    return this._valuesPatternShouldNotMatch;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute pingone_schema_attribute}
*/
export class SchemaAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_schema_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaAttribute to import
  * @param importFromId The id of the existing SchemaAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_schema_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/schema_attribute pingone_schema_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_schema_attribute',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._enumeratedValues.internalValue = config.enumeratedValues;
    this._environmentId = config.environmentId;
    this._multivalued = config.multivalued;
    this._name = config.name;
    this._regexValidation.internalValue = config.regexValidation;
    this._type = config.type;
    this._unique = config.unique;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // enumerated_values - computed: false, optional: true, required: false
  private _enumeratedValues = new SchemaAttributeEnumeratedValuesList(this, "enumerated_values", true);
  public get enumeratedValues() {
    return this._enumeratedValues;
  }
  public putEnumeratedValues(value: SchemaAttributeEnumeratedValues[] | cdktf.IResolvable) {
    this._enumeratedValues.internalValue = value;
  }
  public resetEnumeratedValues() {
    this._enumeratedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumeratedValuesInput() {
    return this._enumeratedValues.internalValue;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_attribute - computed: true, optional: false, required: false
  public get ldapAttribute() {
    return this.getStringAttribute('ldap_attribute');
  }

  // multivalued - computed: true, optional: true, required: false
  private _multivalued?: boolean | cdktf.IResolvable; 
  public get multivalued() {
    return this.getBooleanAttribute('multivalued');
  }
  public set multivalued(value: boolean | cdktf.IResolvable) {
    this._multivalued = value;
  }
  public resetMultivalued() {
    this._multivalued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multivaluedInput() {
    return this._multivalued;
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

  // regex_validation - computed: false, optional: true, required: false
  private _regexValidation = new SchemaAttributeRegexValidationOutputReference(this, "regex_validation");
  public get regexValidation() {
    return this._regexValidation;
  }
  public putRegexValidation(value: SchemaAttributeRegexValidation) {
    this._regexValidation.internalValue = value;
  }
  public resetRegexValidation() {
    this._regexValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValidationInput() {
    return this._regexValidation.internalValue;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // schema_id - computed: true, optional: false, required: false
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }

  // schema_type - computed: true, optional: false, required: false
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique - computed: true, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enumerated_values: cdktf.listMapper(schemaAttributeEnumeratedValuesToTerraform, false)(this._enumeratedValues.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      multivalued: cdktf.booleanToTerraform(this._multivalued),
      name: cdktf.stringToTerraform(this._name),
      regex_validation: schemaAttributeRegexValidationToTerraform(this._regexValidation.internalValue),
      type: cdktf.stringToTerraform(this._type),
      unique: cdktf.booleanToTerraform(this._unique),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      enumerated_values: {
        value: cdktf.listMapperHcl(schemaAttributeEnumeratedValuesToHclTerraform, false)(this._enumeratedValues.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SchemaAttributeEnumeratedValuesList",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multivalued: {
        value: cdktf.booleanToHclTerraform(this._multivalued),
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
      regex_validation: {
        value: schemaAttributeRegexValidationToHclTerraform(this._regexValidation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchemaAttributeRegexValidation",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unique: {
        value: cdktf.booleanToHclTerraform(this._unique),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
