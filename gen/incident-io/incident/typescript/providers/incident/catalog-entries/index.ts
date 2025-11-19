// https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map of external ID to entry in the catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#entries CatalogEntries#entries}
  */
  readonly entries: { [key: string]: CatalogEntriesEntries } | cdktf.IResolvable;
  /**
  * ID of this catalog type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#id CatalogEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The set of attributes that are managed by this resource. By default, all attributes are managed by this resource.
  * 
  * This can be used to allow other attributes of a catalog entry to be managed elsewhere, for example in another Terraform repository or the incident.io web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#managed_attributes CatalogEntries#managed_attributes}
  */
  readonly managedAttributes?: string[];
}
export interface CatalogEntriesEntriesAttributeValues {
  /**
  * The value of this element of the array, in a format suitable for this attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#array_value CatalogEntries#array_value}
  */
  readonly arrayValue?: string[];
  /**
  * The value of this attribute, in a format suitable for this attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#value CatalogEntries#value}
  */
  readonly value?: string;
}

export function catalogEntriesEntriesAttributeValuesToTerraform(struct?: CatalogEntriesEntriesAttributeValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arrayValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function catalogEntriesEntriesAttributeValuesToHclTerraform(struct?: CatalogEntriesEntriesAttributeValues | cdktf.IResolvable): any {
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

export class CatalogEntriesEntriesAttributeValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CatalogEntriesEntriesAttributeValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogEntriesEntriesAttributeValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue = undefined;
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

export class CatalogEntriesEntriesAttributeValuesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: CatalogEntriesEntriesAttributeValues } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CatalogEntriesEntriesAttributeValuesOutputReference {
    return new CatalogEntriesEntriesAttributeValuesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface CatalogEntriesEntries {
  /**
  * Optional aliases that can be used to reference this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#aliases CatalogEntries#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#attribute_values CatalogEntries#attribute_values}
  */
  readonly attributeValues: { [key: string]: CatalogEntriesEntriesAttributeValues } | cdktf.IResolvable;
  /**
  * Name is the human readable name of this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#name CatalogEntries#name}
  */
  readonly name: string;
  /**
  * When catalog type is ranked, this is used to help order things
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#rank CatalogEntries#rank}
  */
  readonly rank?: number;
}

export function catalogEntriesEntriesToTerraform(struct?: CatalogEntriesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    attribute_values: cdktf.hashMapper(catalogEntriesEntriesAttributeValuesToTerraform)(struct!.attributeValues),
    name: cdktf.stringToTerraform(struct!.name),
    rank: cdktf.numberToTerraform(struct!.rank),
  }
}


export function catalogEntriesEntriesToHclTerraform(struct?: CatalogEntriesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute_values: {
      value: cdktf.hashMapperHcl(catalogEntriesEntriesAttributeValuesToHclTerraform)(struct!.attributeValues),
      isBlock: true,
      type: "map",
      storageClassType: "CatalogEntriesEntriesAttributeValuesMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogEntriesEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CatalogEntriesEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._attributeValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValues = this._attributeValues?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogEntriesEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliases = undefined;
      this._attributeValues.internalValue = undefined;
      this._name = undefined;
      this._rank = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliases = value.aliases;
      this._attributeValues.internalValue = value.attributeValues;
      this._name = value.name;
      this._rank = value.rank;
    }
  }

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
  private _attributeValues = new CatalogEntriesEntriesAttributeValuesMap(this, "attribute_values");
  public get attributeValues() {
    return this._attributeValues;
  }
  public putAttributeValues(value: { [key: string]: CatalogEntriesEntriesAttributeValues } | cdktf.IResolvable) {
    this._attributeValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValuesInput() {
    return this._attributeValues.internalValue;
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
}

export class CatalogEntriesEntriesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: CatalogEntriesEntries } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CatalogEntriesEntriesOutputReference {
    return new CatalogEntriesEntriesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries incident_catalog_entries}
*/
export class CatalogEntries extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_catalog_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogEntries to import
  * @param importFromId The id of the existing CatalogEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_catalog_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/catalog_entries incident_catalog_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_catalog_entries',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.19.0',
        providerVersionConstraint: '5.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entries.internalValue = config.entries;
    this._id = config.id;
    this._managedAttributes = config.managedAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: false, optional: false, required: true
  private _entries = new CatalogEntriesEntriesMap(this, "entries");
  public get entries() {
    return this._entries;
  }
  public putEntries(value: { [key: string]: CatalogEntriesEntries } | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entries: cdktf.hashMapper(catalogEntriesEntriesToTerraform)(this._entries.internalValue),
      id: cdktf.stringToTerraform(this._id),
      managed_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedAttributes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entries: {
        value: cdktf.hashMapperHcl(catalogEntriesEntriesToHclTerraform)(this._entries.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "CatalogEntriesEntriesMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
