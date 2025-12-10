// https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional aliases that can be used to reference this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#aliases CatalogEntry#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#attribute_values CatalogEntry#attribute_values}
  */
  readonly attributeValues: CatalogEntryAttributeValues[] | cdktf.IResolvable;
  /**
  * ID of this catalog type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#catalog_type_id CatalogEntry#catalog_type_id}
  */
  readonly catalogTypeId: string;
  /**
  * An optional alternative ID for this entry, which is ensured to be unique for the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#external_id CatalogEntry#external_id}
  */
  readonly externalId?: string;
  /**
  * The set of attributes that are managed by this resource. By default, all attributes are managed by this resource.
  * 
  * This can be used to allow other attributes of a catalog entry to be managed elsewhere, for example in another Terraform repository or the incident.io web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#managed_attributes CatalogEntry#managed_attributes}
  */
  readonly managedAttributes?: string[];
  /**
  * Name is the human readable name of this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#name CatalogEntry#name}
  */
  readonly name: string;
  /**
  * When catalog type is ranked, this is used to help order things
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#rank CatalogEntry#rank}
  */
  readonly rank?: number;
}
export interface CatalogEntryAttributeValues {
  /**
  * The value of this element of the array, in a format suitable for this attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#array_value CatalogEntry#array_value}
  */
  readonly arrayValue?: string[];
  /**
  * The ID of this attribute, usually loaded from the incident_catalog_type_attribute resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#attribute CatalogEntry#attribute}
  */
  readonly attribute: string;
  /**
  * The value of this attribute, in a format suitable for this attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#value CatalogEntry#value}
  */
  readonly value?: string;
}

export function catalogEntryAttributeValuesToTerraform(struct?: CatalogEntryAttributeValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arrayValue),
    attribute: cdktf.stringToTerraform(struct!.attribute),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function catalogEntryAttributeValuesToHclTerraform(struct?: CatalogEntryAttributeValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arrayValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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

export class CatalogEntryAttributeValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CatalogEntryAttributeValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogEntryAttributeValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue = undefined;
      this._attribute = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue = value.arrayValue;
      this._attribute = value.attribute;
      this._value = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue?: string[]; 
  public get arrayValue() {
    return this.getListAttribute('array_value');
  }
  public set arrayValue(value: string[]) {
    this._arrayValue = value;
  }
  public resetArrayValue() {
    this._arrayValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CatalogEntryAttributeValuesList extends cdktf.ComplexList {
  public internalValue? : CatalogEntryAttributeValues[] | cdktf.IResolvable

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
  public get(index: number): CatalogEntryAttributeValuesOutputReference {
    return new CatalogEntryAttributeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry incident_catalog_entry}
*/
export class CatalogEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_catalog_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogEntry to import
  * @param importFromId The id of the existing CatalogEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_catalog_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/catalog_entry incident_catalog_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogEntryConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_catalog_entry',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.21.1',
        providerVersionConstraint: '5.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliases = config.aliases;
    this._attributeValues.internalValue = config.attributeValues;
    this._catalogTypeId = config.catalogTypeId;
    this._externalId = config.externalId;
    this._managedAttributes = config.managedAttributes;
    this._name = config.name;
    this._rank = config.rank;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: true, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // attribute_values - computed: false, optional: false, required: true
  private _attributeValues = new CatalogEntryAttributeValuesList(this, "attribute_values", true);
  public get attributeValues() {
    return this._attributeValues;
  }
  public putAttributeValues(value: CatalogEntryAttributeValues[] | cdktf.IResolvable) {
    this._attributeValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValuesInput() {
    return this._attributeValues.internalValue;
  }

  // catalog_type_id - computed: false, optional: false, required: true
  private _catalogTypeId?: string; 
  public get catalogTypeId() {
    return this.getStringAttribute('catalog_type_id');
  }
  public set catalogTypeId(value: string) {
    this._catalogTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeIdInput() {
    return this._catalogTypeId;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_attributes - computed: false, optional: true, required: false
  private _managedAttributes?: string[]; 
  public get managedAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_attributes'));
  }
  public set managedAttributes(value: string[]) {
    this._managedAttributes = value;
  }
  public resetManagedAttributes() {
    this._managedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAttributesInput() {
    return this._managedAttributes;
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

  // rank - computed: true, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      attribute_values: cdktf.listMapper(catalogEntryAttributeValuesToTerraform, false)(this._attributeValues.internalValue),
      catalog_type_id: cdktf.stringToTerraform(this._catalogTypeId),
      external_id: cdktf.stringToTerraform(this._externalId),
      managed_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedAttributes),
      name: cdktf.stringToTerraform(this._name),
      rank: cdktf.numberToTerraform(this._rank),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attribute_values: {
        value: cdktf.listMapperHcl(catalogEntryAttributeValuesToHclTerraform, false)(this._attributeValues.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CatalogEntryAttributeValuesList",
      },
      catalog_type_id: {
        value: cdktf.stringToHclTerraform(this._catalogTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedAttributes),
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
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
