// https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerscomServerModelOrderOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_options#id DataServerscomServerModelOrderOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_options#location_id DataServerscomServerModelOrderOptions#location_id}
  */
  readonly locationId: number;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_options#filter DataServerscomServerModelOrderOptions#filter}
  */
  readonly filter?: DataServerscomServerModelOrderOptionsFilter[] | cdktf.IResolvable;
}
export interface DataServerscomServerModelOrderOptionsServerModels {
}

export function dataServerscomServerModelOrderOptionsServerModelsToTerraform(struct?: DataServerscomServerModelOrderOptionsServerModels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataServerscomServerModelOrderOptionsServerModelsToHclTerraform(struct?: DataServerscomServerModelOrderOptionsServerModels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataServerscomServerModelOrderOptionsServerModelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerscomServerModelOrderOptionsServerModels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerscomServerModelOrderOptionsServerModels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_cores_count - computed: true, optional: false, required: false
  public get cpuCoresCount() {
    return this.getNumberAttribute('cpu_cores_count');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // cpu_frequency - computed: true, optional: false, required: false
  public get cpuFrequency() {
    return this.getNumberAttribute('cpu_frequency');
  }

  // cpu_name - computed: true, optional: false, required: false
  public get cpuName() {
    return this.getStringAttribute('cpu_name');
  }

  // drive_slots_count - computed: true, optional: false, required: false
  public get driveSlotsCount() {
    return this.getNumberAttribute('drive_slots_count');
  }

  // has_raid_controller - computed: true, optional: false, required: false
  public get hasRaidController() {
    return this.getBooleanAttribute('has_raid_controller');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // max_ram - computed: true, optional: false, required: false
  public get maxRam() {
    return this.getNumberAttribute('max_ram');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // raid_controller_name - computed: true, optional: false, required: false
  public get raidControllerName() {
    return this.getStringAttribute('raid_controller_name');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // ram_type - computed: true, optional: false, required: false
  public get ramType() {
    return this.getStringAttribute('ram_type');
  }
}

export class DataServerscomServerModelOrderOptionsServerModelsList extends cdktf.ComplexList {

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
  public get(index: number): DataServerscomServerModelOrderOptionsServerModelsOutputReference {
    return new DataServerscomServerModelOrderOptionsServerModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataServerscomServerModelOrderOptionsFilter {
  /**
  * Specify by true or false value, if only servers with RAID controller should be taken to an output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_options#has_raid_controller DataServerscomServerModelOrderOptions#has_raid_controller}
  */
  readonly hasRaidController?: boolean | cdktf.IResolvable;
  /**
  * This pattern is used to return resources containing the parameter value in its name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_options#search_pattern DataServerscomServerModelOrderOptions#search_pattern}
  */
  readonly searchPattern?: string;
}

export function dataServerscomServerModelOrderOptionsFilterToTerraform(struct?: DataServerscomServerModelOrderOptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    has_raid_controller: cdktf.booleanToTerraform(struct!.hasRaidController),
    search_pattern: cdktf.stringToTerraform(struct!.searchPattern),
  }
}


export function dataServerscomServerModelOrderOptionsFilterToHclTerraform(struct?: DataServerscomServerModelOrderOptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    has_raid_controller: {
      value: cdktf.booleanToHclTerraform(struct!.hasRaidController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    search_pattern: {
      value: cdktf.stringToHclTerraform(struct!.searchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataServerscomServerModelOrderOptionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerscomServerModelOrderOptionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hasRaidController !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasRaidController = this._hasRaidController;
    }
    if (this._searchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchPattern = this._searchPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerscomServerModelOrderOptionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hasRaidController = undefined;
      this._searchPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hasRaidController = value.hasRaidController;
      this._searchPattern = value.searchPattern;
    }
  }

  // has_raid_controller - computed: false, optional: true, required: false
  private _hasRaidController?: boolean | cdktf.IResolvable; 
  public get hasRaidController() {
    return this.getBooleanAttribute('has_raid_controller');
  }
  public set hasRaidController(value: boolean | cdktf.IResolvable) {
    this._hasRaidController = value;
  }
  public resetHasRaidController() {
    this._hasRaidController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasRaidControllerInput() {
    return this._hasRaidController;
  }

  // search_pattern - computed: false, optional: true, required: false
  private _searchPattern?: string; 
  public get searchPattern() {
    return this.getStringAttribute('search_pattern');
  }
  public set searchPattern(value: string) {
    this._searchPattern = value;
  }
  public resetSearchPattern() {
    this._searchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPatternInput() {
    return this._searchPattern;
  }
}

export class DataServerscomServerModelOrderOptionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataServerscomServerModelOrderOptionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataServerscomServerModelOrderOptionsFilterOutputReference {
    return new DataServerscomServerModelOrderOptionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_options serverscom_server_model_order_options}
*/
export class DataServerscomServerModelOrderOptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_server_model_order_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerscomServerModelOrderOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerscomServerModelOrderOptions to import
  * @param importFromId The id of the existing DataServerscomServerModelOrderOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerscomServerModelOrderOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_server_model_order_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_options serverscom_server_model_order_options} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerscomServerModelOrderOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerscomServerModelOrderOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_server_model_order_options',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._locationId = config.locationId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // server_models - computed: true, optional: false, required: false
  private _serverModels = new DataServerscomServerModelOrderOptionsServerModelsList(this, "server_models", false);
  public get serverModels() {
    return this._serverModels;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataServerscomServerModelOrderOptionsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataServerscomServerModelOrderOptionsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.numberToTerraform(this._locationId),
      filter: cdktf.listMapper(dataServerscomServerModelOrderOptionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.listMapperHcl(dataServerscomServerModelOrderOptionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataServerscomServerModelOrderOptionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
