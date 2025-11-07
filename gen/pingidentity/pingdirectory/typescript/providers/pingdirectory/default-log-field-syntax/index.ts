// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultLogFieldSyntaxConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default behavior that the server should exhibit when logging fields with this syntax. This may be overridden on a per-field basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax#default_behavior DefaultLogFieldSyntax#default_behavior}
  */
  readonly defaultBehavior?: string;
  /**
  * A description for this Log Field Syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax#description DefaultLogFieldSyntax#description}
  */
  readonly description?: string;
  /**
  * The set of attribute types that will not be considered sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax#excluded_sensitive_attribute DefaultLogFieldSyntax#excluded_sensitive_attribute}
  */
  readonly excludedSensitiveAttribute?: string[];
  /**
  * The names of the JSON fields that will not be considered sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax#excluded_sensitive_field DefaultLogFieldSyntax#excluded_sensitive_field}
  */
  readonly excludedSensitiveField?: string[];
  /**
  * The set of attribute types that will be considered sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax#included_sensitive_attribute DefaultLogFieldSyntax#included_sensitive_attribute}
  */
  readonly includedSensitiveAttribute?: string[];
  /**
  * The names of the JSON fields that will be considered sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax#included_sensitive_field DefaultLogFieldSyntax#included_sensitive_field}
  */
  readonly includedSensitiveField?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax#name DefaultLogFieldSyntax#name}
  */
  readonly name: string;
}
export interface DefaultLogFieldSyntaxRequiredActions {
}

export function defaultLogFieldSyntaxRequiredActionsToTerraform(struct?: DefaultLogFieldSyntaxRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultLogFieldSyntaxRequiredActionsToHclTerraform(struct?: DefaultLogFieldSyntaxRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultLogFieldSyntaxRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultLogFieldSyntaxRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLogFieldSyntaxRequiredActions | undefined) {
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

export class DefaultLogFieldSyntaxRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultLogFieldSyntaxRequiredActionsOutputReference {
    return new DefaultLogFieldSyntaxRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax pingdirectory_default_log_field_syntax}
*/
export class DefaultLogFieldSyntax extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_log_field_syntax";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultLogFieldSyntax resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultLogFieldSyntax to import
  * @param importFromId The id of the existing DefaultLogFieldSyntax that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultLogFieldSyntax to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_log_field_syntax", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_syntax pingdirectory_default_log_field_syntax} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultLogFieldSyntaxConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultLogFieldSyntaxConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_log_field_syntax',
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
    this._excludedSensitiveAttribute = config.excludedSensitiveAttribute;
    this._excludedSensitiveField = config.excludedSensitiveField;
    this._includedSensitiveAttribute = config.includedSensitiveAttribute;
    this._includedSensitiveField = config.includedSensitiveField;
    this._name = config.name;
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

  // excluded_sensitive_attribute - computed: true, optional: true, required: false
  private _excludedSensitiveAttribute?: string[]; 
  public get excludedSensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_sensitive_attribute'));
  }
  public set excludedSensitiveAttribute(value: string[]) {
    this._excludedSensitiveAttribute = value;
  }
  public resetExcludedSensitiveAttribute() {
    this._excludedSensitiveAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedSensitiveAttributeInput() {
    return this._excludedSensitiveAttribute;
  }

  // excluded_sensitive_field - computed: true, optional: true, required: false
  private _excludedSensitiveField?: string[]; 
  public get excludedSensitiveField() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_sensitive_field'));
  }
  public set excludedSensitiveField(value: string[]) {
    this._excludedSensitiveField = value;
  }
  public resetExcludedSensitiveField() {
    this._excludedSensitiveField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedSensitiveFieldInput() {
    return this._excludedSensitiveField;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_sensitive_attribute - computed: true, optional: true, required: false
  private _includedSensitiveAttribute?: string[]; 
  public get includedSensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('included_sensitive_attribute'));
  }
  public set includedSensitiveAttribute(value: string[]) {
    this._includedSensitiveAttribute = value;
  }
  public resetIncludedSensitiveAttribute() {
    this._includedSensitiveAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedSensitiveAttributeInput() {
    return this._includedSensitiveAttribute;
  }

  // included_sensitive_field - computed: true, optional: true, required: false
  private _includedSensitiveField?: string[]; 
  public get includedSensitiveField() {
    return cdktf.Fn.tolist(this.getListAttribute('included_sensitive_field'));
  }
  public set includedSensitiveField(value: string[]) {
    this._includedSensitiveField = value;
  }
  public resetIncludedSensitiveField() {
    this._includedSensitiveField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedSensitiveFieldInput() {
    return this._includedSensitiveField;
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
  private _requiredActions = new DefaultLogFieldSyntaxRequiredActionsList(this, "required_actions", true);
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
      default_behavior: cdktf.stringToTerraform(this._defaultBehavior),
      description: cdktf.stringToTerraform(this._description),
      excluded_sensitive_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedSensitiveAttribute),
      excluded_sensitive_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedSensitiveField),
      included_sensitive_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedSensitiveAttribute),
      included_sensitive_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedSensitiveField),
      name: cdktf.stringToTerraform(this._name),
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
      excluded_sensitive_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedSensitiveAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_sensitive_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedSensitiveField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_sensitive_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedSensitiveAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_sensitive_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedSensitiveField),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
