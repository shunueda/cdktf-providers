// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScimSubattributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the suggested canonical type values for the sub-attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#canonical_value ScimSubattribute#canonical_value}
  */
  readonly canonicalValue?: string[];
  /**
  * Specifies whether the sub-attribute values are case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#case_exact ScimSubattribute#case_exact}
  */
  readonly caseExact?: boolean | cdktf.IResolvable;
  /**
  * A description for this SCIM Subattribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#description ScimSubattribute#description}
  */
  readonly description?: string;
  /**
  * Specifies whether this attribute may have multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#multi_valued ScimSubattribute#multi_valued}
  */
  readonly multiValued?: boolean | cdktf.IResolvable;
  /**
  * Specifies the circumstances under which the values of the sub-attribute can be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#mutability ScimSubattribute#mutability}
  */
  readonly mutability?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#name ScimSubattribute#name}
  */
  readonly name: string;
  /**
  * Specifies the SCIM resource types that may be referenced. This property is only applicable for sub-attributes that are of type 'reference'. Valid values are: A SCIM resource type (e.g., 'User' or 'Group'), 'external' - indicating the resource is an external resource (e.g., such as a photo), or 'uri' - indicating that the reference is to a service endpoint or an identifier (such as a schema urn).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#reference_type ScimSubattribute#reference_type}
  */
  readonly referenceType?: string[];
  /**
  * Specifies whether this sub-attribute is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#required ScimSubattribute#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The type of SCIM Subattribute resource. Options are ['scim-subattribute']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#resource_type ScimSubattribute#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Specifies the circumstances under which the values of the sub-attribute are returned in response to a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#returned ScimSubattribute#returned}
  */
  readonly returned?: string;
  /**
  * Name of the parent SCIM Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#scim_attribute_name ScimSubattribute#scim_attribute_name}
  */
  readonly scimAttributeName: string;
  /**
  * Name of the parent SCIM Schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#scim_schema_name ScimSubattribute#scim_schema_name}
  */
  readonly scimSchemaName: string;
  /**
  * Specifies the data type for this sub-attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#type ScimSubattribute#type}
  */
  readonly type?: string;
}
export interface ScimSubattributeRequiredActions {
}

export function scimSubattributeRequiredActionsToTerraform(struct?: ScimSubattributeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function scimSubattributeRequiredActionsToHclTerraform(struct?: ScimSubattributeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ScimSubattributeRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScimSubattributeRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScimSubattributeRequiredActions | undefined) {
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

export class ScimSubattributeRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): ScimSubattributeRequiredActionsOutputReference {
    return new ScimSubattributeRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute pingdirectory_scim_subattribute}
*/
export class ScimSubattribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_scim_subattribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScimSubattribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScimSubattribute to import
  * @param importFromId The id of the existing ScimSubattribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScimSubattribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_scim_subattribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/scim_subattribute pingdirectory_scim_subattribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScimSubattributeConfig
  */
  public constructor(scope: Construct, id: string, config: ScimSubattributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_scim_subattribute',
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
    this._canonicalValue = config.canonicalValue;
    this._caseExact = config.caseExact;
    this._description = config.description;
    this._multiValued = config.multiValued;
    this._mutability = config.mutability;
    this._name = config.name;
    this._referenceType = config.referenceType;
    this._required = config.required;
    this._resourceType = config.resourceType;
    this._returned = config.returned;
    this._scimAttributeName = config.scimAttributeName;
    this._scimSchemaName = config.scimSchemaName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical_value - computed: true, optional: true, required: false
  private _canonicalValue?: string[]; 
  public get canonicalValue() {
    return cdktf.Fn.tolist(this.getListAttribute('canonical_value'));
  }
  public set canonicalValue(value: string[]) {
    this._canonicalValue = value;
  }
  public resetCanonicalValue() {
    this._canonicalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalValueInput() {
    return this._canonicalValue;
  }

  // case_exact - computed: true, optional: true, required: false
  private _caseExact?: boolean | cdktf.IResolvable; 
  public get caseExact() {
    return this.getBooleanAttribute('case_exact');
  }
  public set caseExact(value: boolean | cdktf.IResolvable) {
    this._caseExact = value;
  }
  public resetCaseExact() {
    this._caseExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseExactInput() {
    return this._caseExact;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_valued - computed: true, optional: true, required: false
  private _multiValued?: boolean | cdktf.IResolvable; 
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }
  public set multiValued(value: boolean | cdktf.IResolvable) {
    this._multiValued = value;
  }
  public resetMultiValued() {
    this._multiValued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuedInput() {
    return this._multiValued;
  }

  // mutability - computed: true, optional: true, required: false
  private _mutability?: string; 
  public get mutability() {
    return this.getStringAttribute('mutability');
  }
  public set mutability(value: string) {
    this._mutability = value;
  }
  public resetMutability() {
    this._mutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutabilityInput() {
    return this._mutability;
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

  // reference_type - computed: true, optional: true, required: false
  private _referenceType?: string[]; 
  public get referenceType() {
    return cdktf.Fn.tolist(this.getListAttribute('reference_type'));
  }
  public set referenceType(value: string[]) {
    this._referenceType = value;
  }
  public resetReferenceType() {
    this._referenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTypeInput() {
    return this._referenceType;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new ScimSubattributeRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // returned - computed: true, optional: true, required: false
  private _returned?: string; 
  public get returned() {
    return this.getStringAttribute('returned');
  }
  public set returned(value: string) {
    this._returned = value;
  }
  public resetReturned() {
    this._returned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnedInput() {
    return this._returned;
  }

  // scim_attribute_name - computed: false, optional: false, required: true
  private _scimAttributeName?: string; 
  public get scimAttributeName() {
    return this.getStringAttribute('scim_attribute_name');
  }
  public set scimAttributeName(value: string) {
    this._scimAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimAttributeNameInput() {
    return this._scimAttributeName;
  }

  // scim_schema_name - computed: false, optional: false, required: true
  private _scimSchemaName?: string; 
  public get scimSchemaName() {
    return this.getStringAttribute('scim_schema_name');
  }
  public set scimSchemaName(value: string) {
    this._scimSchemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimSchemaNameInput() {
    return this._scimSchemaName;
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
      canonical_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._canonicalValue),
      case_exact: cdktf.booleanToTerraform(this._caseExact),
      description: cdktf.stringToTerraform(this._description),
      multi_valued: cdktf.booleanToTerraform(this._multiValued),
      mutability: cdktf.stringToTerraform(this._mutability),
      name: cdktf.stringToTerraform(this._name),
      reference_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referenceType),
      required: cdktf.booleanToTerraform(this._required),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      returned: cdktf.stringToTerraform(this._returned),
      scim_attribute_name: cdktf.stringToTerraform(this._scimAttributeName),
      scim_schema_name: cdktf.stringToTerraform(this._scimSchemaName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      canonical_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._canonicalValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      case_exact: {
        value: cdktf.booleanToHclTerraform(this._caseExact),
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
      multi_valued: {
        value: cdktf.booleanToHclTerraform(this._multiValued),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mutability: {
        value: cdktf.stringToHclTerraform(this._mutability),
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
      reference_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._referenceType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      returned: {
        value: cdktf.stringToHclTerraform(this._returned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_attribute_name: {
        value: cdktf.stringToHclTerraform(this._scimAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_schema_name: {
        value: cdktf.stringToHclTerraform(this._scimSchemaName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
