// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultAttributeSyntaxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether zero-length (that is, an empty string) values are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#allow_zero_length_values DefaultAttributeSyntax#allow_zero_length_values}
  */
  readonly allowZeroLengthValues?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether values of attributes with this syntax should be compacted when stored in a local DB database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#enable_compaction DefaultAttributeSyntax#enable_compaction}
  */
  readonly enableCompaction?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Attribute Syntax is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#enabled DefaultAttributeSyntax#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the specific attributes (which should be associated with this syntax) whose values should not be compacted. If one or more exclude attributes are specified, then values of those attributes will not have their values compacted. This property takes precedence over the include-attribute-in-compaction property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#exclude_attribute_from_compaction DefaultAttributeSyntax#exclude_attribute_from_compaction}
  */
  readonly excludeAttributeFromCompaction?: string[];
  /**
  * Specifies the specific attributes (which should be associated with this syntax) whose values should be compacted. If one or more include attributes are specified, then only those attributes will have their values compacted. If not set then all attributes will have their values compacted. The exclude-attribute-from-compaction property takes precedence over this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#include_attribute_in_compaction DefaultAttributeSyntax#include_attribute_in_compaction}
  */
  readonly includeAttributeInCompaction?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#name DefaultAttributeSyntax#name}
  */
  readonly name: string;
  /**
  * Indicates whether values of this attribute are required to have a "binary" transfer option as described in RFC 4522. Attributes with this syntax will generally be referenced with names including ";binary" (e.g., "userCertificate;binary").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#require_binary_transfer DefaultAttributeSyntax#require_binary_transfer}
  */
  readonly requireBinaryTransfer?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `telephone-number`: Indicates whether to require telephone number values to strictly comply with the standard definition for this syntax.
  *   - `ldap-url`: Indicates whether values for attributes with this syntax will be required to be in the valid LDAP URL format. If this is set to false, then arbitrary strings will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#strict_format DefaultAttributeSyntax#strict_format}
  */
  readonly strictFormat?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the suggested minimum upper bound appended to an attribute's syntax OID in its schema definition Attribute Type Description should be stripped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#strip_syntax_min_upper_bound DefaultAttributeSyntax#strip_syntax_min_upper_bound}
  */
  readonly stripSyntaxMinUpperBound?: boolean | cdktf.IResolvable;
}
export interface DefaultAttributeSyntaxRequiredActions {
}

export function defaultAttributeSyntaxRequiredActionsToTerraform(struct?: DefaultAttributeSyntaxRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultAttributeSyntaxRequiredActionsToHclTerraform(struct?: DefaultAttributeSyntaxRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultAttributeSyntaxRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultAttributeSyntaxRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultAttributeSyntaxRequiredActions | undefined) {
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

export class DefaultAttributeSyntaxRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultAttributeSyntaxRequiredActionsOutputReference {
    return new DefaultAttributeSyntaxRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax pingdirectory_default_attribute_syntax}
*/
export class DefaultAttributeSyntax extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_attribute_syntax";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultAttributeSyntax resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultAttributeSyntax to import
  * @param importFromId The id of the existing DefaultAttributeSyntax that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultAttributeSyntax to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_attribute_syntax", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_attribute_syntax pingdirectory_default_attribute_syntax} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultAttributeSyntaxConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultAttributeSyntaxConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_attribute_syntax',
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
    this._allowZeroLengthValues = config.allowZeroLengthValues;
    this._enableCompaction = config.enableCompaction;
    this._enabled = config.enabled;
    this._excludeAttributeFromCompaction = config.excludeAttributeFromCompaction;
    this._includeAttributeInCompaction = config.includeAttributeInCompaction;
    this._name = config.name;
    this._requireBinaryTransfer = config.requireBinaryTransfer;
    this._strictFormat = config.strictFormat;
    this._stripSyntaxMinUpperBound = config.stripSyntaxMinUpperBound;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_zero_length_values - computed: true, optional: true, required: false
  private _allowZeroLengthValues?: boolean | cdktf.IResolvable; 
  public get allowZeroLengthValues() {
    return this.getBooleanAttribute('allow_zero_length_values');
  }
  public set allowZeroLengthValues(value: boolean | cdktf.IResolvable) {
    this._allowZeroLengthValues = value;
  }
  public resetAllowZeroLengthValues() {
    this._allowZeroLengthValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowZeroLengthValuesInput() {
    return this._allowZeroLengthValues;
  }

  // enable_compaction - computed: true, optional: true, required: false
  private _enableCompaction?: boolean | cdktf.IResolvable; 
  public get enableCompaction() {
    return this.getBooleanAttribute('enable_compaction');
  }
  public set enableCompaction(value: boolean | cdktf.IResolvable) {
    this._enableCompaction = value;
  }
  public resetEnableCompaction() {
    this._enableCompaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCompactionInput() {
    return this._enableCompaction;
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

  // exclude_attribute_from_compaction - computed: true, optional: true, required: false
  private _excludeAttributeFromCompaction?: string[]; 
  public get excludeAttributeFromCompaction() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_attribute_from_compaction'));
  }
  public set excludeAttributeFromCompaction(value: string[]) {
    this._excludeAttributeFromCompaction = value;
  }
  public resetExcludeAttributeFromCompaction() {
    this._excludeAttributeFromCompaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttributeFromCompactionInput() {
    return this._excludeAttributeFromCompaction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_attribute_in_compaction - computed: true, optional: true, required: false
  private _includeAttributeInCompaction?: string[]; 
  public get includeAttributeInCompaction() {
    return cdktf.Fn.tolist(this.getListAttribute('include_attribute_in_compaction'));
  }
  public set includeAttributeInCompaction(value: string[]) {
    this._includeAttributeInCompaction = value;
  }
  public resetIncludeAttributeInCompaction() {
    this._includeAttributeInCompaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAttributeInCompactionInput() {
    return this._includeAttributeInCompaction;
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

  // require_binary_transfer - computed: true, optional: true, required: false
  private _requireBinaryTransfer?: boolean | cdktf.IResolvable; 
  public get requireBinaryTransfer() {
    return this.getBooleanAttribute('require_binary_transfer');
  }
  public set requireBinaryTransfer(value: boolean | cdktf.IResolvable) {
    this._requireBinaryTransfer = value;
  }
  public resetRequireBinaryTransfer() {
    this._requireBinaryTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireBinaryTransferInput() {
    return this._requireBinaryTransfer;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultAttributeSyntaxRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // strict_format - computed: true, optional: true, required: false
  private _strictFormat?: boolean | cdktf.IResolvable; 
  public get strictFormat() {
    return this.getBooleanAttribute('strict_format');
  }
  public set strictFormat(value: boolean | cdktf.IResolvable) {
    this._strictFormat = value;
  }
  public resetStrictFormat() {
    this._strictFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictFormatInput() {
    return this._strictFormat;
  }

  // strip_syntax_min_upper_bound - computed: true, optional: true, required: false
  private _stripSyntaxMinUpperBound?: boolean | cdktf.IResolvable; 
  public get stripSyntaxMinUpperBound() {
    return this.getBooleanAttribute('strip_syntax_min_upper_bound');
  }
  public set stripSyntaxMinUpperBound(value: boolean | cdktf.IResolvable) {
    this._stripSyntaxMinUpperBound = value;
  }
  public resetStripSyntaxMinUpperBound() {
    this._stripSyntaxMinUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripSyntaxMinUpperBoundInput() {
    return this._stripSyntaxMinUpperBound;
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
      allow_zero_length_values: cdktf.booleanToTerraform(this._allowZeroLengthValues),
      enable_compaction: cdktf.booleanToTerraform(this._enableCompaction),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_attribute_from_compaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeAttributeFromCompaction),
      include_attribute_in_compaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeAttributeInCompaction),
      name: cdktf.stringToTerraform(this._name),
      require_binary_transfer: cdktf.booleanToTerraform(this._requireBinaryTransfer),
      strict_format: cdktf.booleanToTerraform(this._strictFormat),
      strip_syntax_min_upper_bound: cdktf.booleanToTerraform(this._stripSyntaxMinUpperBound),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_zero_length_values: {
        value: cdktf.booleanToHclTerraform(this._allowZeroLengthValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_compaction: {
        value: cdktf.booleanToHclTerraform(this._enableCompaction),
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
      exclude_attribute_from_compaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeAttributeFromCompaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_attribute_in_compaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeAttributeInCompaction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_binary_transfer: {
        value: cdktf.booleanToHclTerraform(this._requireBinaryTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_format: {
        value: cdktf.booleanToHclTerraform(this._strictFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strip_syntax_min_upper_bound: {
        value: cdktf.booleanToHclTerraform(this._stripSyntaxMinUpperBound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
