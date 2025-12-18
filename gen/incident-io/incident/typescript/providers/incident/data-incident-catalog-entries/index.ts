// https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/catalog_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncidentCatalogEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The catalog type ID to list entries for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/catalog_entries#catalog_type_id DataIncidentCatalogEntries#catalog_type_id}
  */
  readonly catalogTypeId: string;
}
export interface DataIncidentCatalogEntriesCatalogEntriesAttributeValues {
}

export function dataIncidentCatalogEntriesCatalogEntriesAttributeValuesToTerraform(struct?: DataIncidentCatalogEntriesCatalogEntriesAttributeValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentCatalogEntriesCatalogEntriesAttributeValuesToHclTerraform(struct?: DataIncidentCatalogEntriesCatalogEntriesAttributeValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentCatalogEntriesCatalogEntriesAttributeValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentCatalogEntriesCatalogEntriesAttributeValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentCatalogEntriesCatalogEntriesAttributeValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_value - computed: true, optional: false, required: false
  public get arrayValue() {
    return this.getListAttribute('array_value');
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIncidentCatalogEntriesCatalogEntriesAttributeValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentCatalogEntriesCatalogEntriesAttributeValuesOutputReference {
    return new DataIncidentCatalogEntriesCatalogEntriesAttributeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentCatalogEntriesCatalogEntries {
}

export function dataIncidentCatalogEntriesCatalogEntriesToTerraform(struct?: DataIncidentCatalogEntriesCatalogEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentCatalogEntriesCatalogEntriesToHclTerraform(struct?: DataIncidentCatalogEntriesCatalogEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentCatalogEntriesCatalogEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentCatalogEntriesCatalogEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentCatalogEntriesCatalogEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // attribute_values - computed: true, optional: false, required: false
  private _attributeValues = new DataIncidentCatalogEntriesCatalogEntriesAttributeValuesList(this, "attribute_values", true);
  public get attributeValues() {
    return this._attributeValues;
  }

  // catalog_type_id - computed: true, optional: false, required: false
  public get catalogTypeId() {
    return this.getStringAttribute('catalog_type_id');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }
}

export class DataIncidentCatalogEntriesCatalogEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentCatalogEntriesCatalogEntriesOutputReference {
    return new DataIncidentCatalogEntriesCatalogEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/catalog_entries incident_catalog_entries}
*/
export class DataIncidentCatalogEntries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_catalog_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncidentCatalogEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncidentCatalogEntries to import
  * @param importFromId The id of the existing DataIncidentCatalogEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/catalog_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncidentCatalogEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_catalog_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/catalog_entries incident_catalog_entries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncidentCatalogEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataIncidentCatalogEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_catalog_entries',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.23.0',
        providerVersionConstraint: '5.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogTypeId = config.catalogTypeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_entries - computed: true, optional: false, required: false
  private _catalogEntries = new DataIncidentCatalogEntriesCatalogEntriesList(this, "catalog_entries", false);
  public get catalogEntries() {
    return this._catalogEntries;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_type_id: cdktf.stringToTerraform(this._catalogTypeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_type_id: {
        value: cdktf.stringToHclTerraform(this._catalogTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
