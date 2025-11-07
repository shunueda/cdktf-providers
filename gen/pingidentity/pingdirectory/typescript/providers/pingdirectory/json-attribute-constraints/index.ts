// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_attribute_constraints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JsonAttributeConstraintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether JSON objects stored as values of attributes with the associated attribute-type will be permitted to include fields for which there is no subordinate json-field-constraints definition. If unnamed fields are allowed, then no constraints will be imposed on the values of those fields. However, if unnamed fields are not allowed, then the server will reject any attempt to store a JSON object with a field for which there is no corresponding json-fields-constraints definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_attribute_constraints#allow_unnamed_fields JsonAttributeConstraints#allow_unnamed_fields}
  */
  readonly allowUnnamedFields?: boolean | cdktf.IResolvable;
  /**
  * The name or OID of the LDAP attribute type whose values will be subject to the associated field constraints. This attribute type must be defined in the server schema, and it must have a "JSON object" syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_attribute_constraints#attribute_type JsonAttributeConstraints#attribute_type}
  */
  readonly attributeType: string;
  /**
  * A description for this JSON Attribute Constraints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_attribute_constraints#description JsonAttributeConstraints#description}
  */
  readonly description?: string;
  /**
  * Indicates whether this JSON Attribute Constraints is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_attribute_constraints#enabled JsonAttributeConstraints#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The type of JSON Attribute Constraints resource. Options are ['json-attribute-constraints']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_attribute_constraints#type JsonAttributeConstraints#type}
  */
  readonly type?: string;
}
export interface JsonAttributeConstraintsRequiredActions {
}

export function jsonAttributeConstraintsRequiredActionsToTerraform(struct?: JsonAttributeConstraintsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jsonAttributeConstraintsRequiredActionsToHclTerraform(struct?: JsonAttributeConstraintsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JsonAttributeConstraintsRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JsonAttributeConstraintsRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JsonAttributeConstraintsRequiredActions | undefined) {
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

export class JsonAttributeConstraintsRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): JsonAttributeConstraintsRequiredActionsOutputReference {
    return new JsonAttributeConstraintsRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_attribute_constraints pingdirectory_json_attribute_constraints}
*/
export class JsonAttributeConstraints extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_json_attribute_constraints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JsonAttributeConstraints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JsonAttributeConstraints to import
  * @param importFromId The id of the existing JsonAttributeConstraints that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_attribute_constraints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JsonAttributeConstraints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_json_attribute_constraints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_attribute_constraints pingdirectory_json_attribute_constraints} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JsonAttributeConstraintsConfig
  */
  public constructor(scope: Construct, id: string, config: JsonAttributeConstraintsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_json_attribute_constraints',
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
    this._allowUnnamedFields = config.allowUnnamedFields;
    this._attributeType = config.attributeType;
    this._description = config.description;
    this._enabled = config.enabled;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unnamed_fields - computed: true, optional: true, required: false
  private _allowUnnamedFields?: boolean | cdktf.IResolvable; 
  public get allowUnnamedFields() {
    return this.getBooleanAttribute('allow_unnamed_fields');
  }
  public set allowUnnamedFields(value: boolean | cdktf.IResolvable) {
    this._allowUnnamedFields = value;
  }
  public resetAllowUnnamedFields() {
    this._allowUnnamedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnnamedFieldsInput() {
    return this._allowUnnamedFields;
  }

  // attribute_type - computed: false, optional: false, required: true
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new JsonAttributeConstraintsRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unnamed_fields: cdktf.booleanToTerraform(this._allowUnnamedFields),
      attribute_type: cdktf.stringToTerraform(this._attributeType),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unnamed_fields: {
        value: cdktf.booleanToHclTerraform(this._allowUnnamedFields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      attribute_type: {
        value: cdktf.stringToHclTerraform(this._attributeType),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
