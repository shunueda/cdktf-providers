// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/populations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingonePopulationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Individual data filters to apply to the selection. Allowed attributes to filter: `id`, `name`. Exactly one of the following must be defined: `scim_filter`, `data_filters`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/populations#data_filters DataPingonePopulations#data_filters}
  */
  readonly dataFilters?: DataPingonePopulationsDataFilters[] | cdktf.IResolvable;
  /**
  * The ID of the environment to filter populations from.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/populations#environment_id DataPingonePopulations#environment_id}
  */
  readonly environmentId: string;
  /**
  * A SCIM filter to apply to the selection.  A SCIM filter offers the greatest flexibility in filtering. The SCIM filter can use the following attributes: `id`, `name`. Exactly one of the following must be defined: `scim_filter`, `data_filters`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/populations#scim_filter DataPingonePopulations#scim_filter}
  */
  readonly scimFilter?: string;
}
export interface DataPingonePopulationsDataFilters {
  /**
  * The attribute name to filter on. Must be one of the following values: `id`, `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/populations#name DataPingonePopulations#name}
  */
  readonly name: string;
  /**
  * The possible values (case sensitive) of the attribute defined in the `name` parameter to filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/populations#values DataPingonePopulations#values}
  */
  readonly values: string[];
}

export function dataPingonePopulationsDataFiltersToTerraform(struct?: DataPingonePopulationsDataFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataPingonePopulationsDataFiltersToHclTerraform(struct?: DataPingonePopulationsDataFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingonePopulationsDataFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingonePopulationsDataFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingonePopulationsDataFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataPingonePopulationsDataFiltersList extends cdktf.ComplexList {
  public internalValue? : DataPingonePopulationsDataFilters[] | cdktf.IResolvable

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
  public get(index: number): DataPingonePopulationsDataFiltersOutputReference {
    return new DataPingonePopulationsDataFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/populations pingone_populations}
*/
export class DataPingonePopulations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_populations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingonePopulations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingonePopulations to import
  * @param importFromId The id of the existing DataPingonePopulations that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/populations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingonePopulations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_populations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/populations pingone_populations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingonePopulationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingonePopulationsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_populations',
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
    this._dataFilters.internalValue = config.dataFilters;
    this._environmentId = config.environmentId;
    this._scimFilter = config.scimFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_filters - computed: false, optional: true, required: false
  private _dataFilters = new DataPingonePopulationsDataFiltersList(this, "data_filters", false);
  public get dataFilters() {
    return this._dataFilters;
  }
  public putDataFilters(value: DataPingonePopulationsDataFilters[] | cdktf.IResolvable) {
    this._dataFilters.internalValue = value;
  }
  public resetDataFilters() {
    this._dataFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFiltersInput() {
    return this._dataFilters.internalValue;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // scim_filter - computed: false, optional: true, required: false
  private _scimFilter?: string; 
  public get scimFilter() {
    return this.getStringAttribute('scim_filter');
  }
  public set scimFilter(value: string) {
    this._scimFilter = value;
  }
  public resetScimFilter() {
    this._scimFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimFilterInput() {
    return this._scimFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_filters: cdktf.listMapper(dataPingonePopulationsDataFiltersToTerraform, false)(this._dataFilters.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      scim_filter: cdktf.stringToTerraform(this._scimFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_filters: {
        value: cdktf.listMapperHcl(dataPingonePopulationsDataFiltersToHclTerraform, false)(this._dataFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPingonePopulationsDataFiltersList",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_filter: {
        value: cdktf.stringToHclTerraform(this._scimFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
