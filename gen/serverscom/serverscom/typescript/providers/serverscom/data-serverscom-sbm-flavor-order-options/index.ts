// https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerscomSbmFlavorOrderOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_options#id DataServerscomSbmFlavorOrderOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_options#location_id DataServerscomSbmFlavorOrderOptions#location_id}
  */
  readonly locationId: number;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_options#filter DataServerscomSbmFlavorOrderOptions#filter}
  */
  readonly filter?: DataServerscomSbmFlavorOrderOptionsFilter[] | cdktf.IResolvable;
}
export interface DataServerscomSbmFlavorOrderOptionsSbmFlavors {
}

export function dataServerscomSbmFlavorOrderOptionsSbmFlavorsToTerraform(struct?: DataServerscomSbmFlavorOrderOptionsSbmFlavors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataServerscomSbmFlavorOrderOptionsSbmFlavorsToHclTerraform(struct?: DataServerscomSbmFlavorOrderOptionsSbmFlavors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataServerscomSbmFlavorOrderOptionsSbmFlavorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerscomSbmFlavorOrderOptionsSbmFlavors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerscomSbmFlavorOrderOptionsSbmFlavors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_id - computed: true, optional: false, required: false
  public get bandwidthId() {
    return this.getNumberAttribute('bandwidth_id');
  }

  // bandwidth_name - computed: true, optional: false, required: false
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
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
    return this.getStringAttribute('cpu_frequency');
  }

  // cpu_name - computed: true, optional: false, required: false
  public get cpuName() {
    return this.getStringAttribute('cpu_name');
  }

  // drives_configuration - computed: true, optional: false, required: false
  public get drivesConfiguration() {
    return this.getStringAttribute('drives_configuration');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_uplink_model_id - computed: true, optional: false, required: false
  public get privateUplinkModelId() {
    return this.getNumberAttribute('private_uplink_model_id');
  }

  // private_uplink_model_name - computed: true, optional: false, required: false
  public get privateUplinkModelName() {
    return this.getStringAttribute('private_uplink_model_name');
  }

  // public_uplink_model_id - computed: true, optional: false, required: false
  public get publicUplinkModelId() {
    return this.getNumberAttribute('public_uplink_model_id');
  }

  // public_uplink_model_name - computed: true, optional: false, required: false
  public get publicUplinkModelName() {
    return this.getStringAttribute('public_uplink_model_name');
  }

  // ram_size - computed: true, optional: false, required: false
  public get ramSize() {
    return this.getNumberAttribute('ram_size');
  }
}

export class DataServerscomSbmFlavorOrderOptionsSbmFlavorsList extends cdktf.ComplexList {

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
  public get(index: number): DataServerscomSbmFlavorOrderOptionsSbmFlavorsOutputReference {
    return new DataServerscomSbmFlavorOrderOptionsSbmFlavorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataServerscomSbmFlavorOrderOptionsFilter {
  /**
  * This pattern is used to return resources containing the parameter value in its name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_options#search_pattern DataServerscomSbmFlavorOrderOptions#search_pattern}
  */
  readonly searchPattern?: string;
  /**
  * If true, all flavors including unavailable ones will be shown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_options#show_all DataServerscomSbmFlavorOrderOptions#show_all}
  */
  readonly showAll?: boolean | cdktf.IResolvable;
}

export function dataServerscomSbmFlavorOrderOptionsFilterToTerraform(struct?: DataServerscomSbmFlavorOrderOptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_pattern: cdktf.stringToTerraform(struct!.searchPattern),
    show_all: cdktf.booleanToTerraform(struct!.showAll),
  }
}


export function dataServerscomSbmFlavorOrderOptionsFilterToHclTerraform(struct?: DataServerscomSbmFlavorOrderOptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_pattern: {
      value: cdktf.stringToHclTerraform(struct!.searchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_all: {
      value: cdktf.booleanToHclTerraform(struct!.showAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataServerscomSbmFlavorOrderOptionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerscomSbmFlavorOrderOptionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchPattern = this._searchPattern;
    }
    if (this._showAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAll = this._showAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerscomSbmFlavorOrderOptionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._searchPattern = undefined;
      this._showAll = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._searchPattern = value.searchPattern;
      this._showAll = value.showAll;
    }
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

  // show_all - computed: false, optional: true, required: false
  private _showAll?: boolean | cdktf.IResolvable; 
  public get showAll() {
    return this.getBooleanAttribute('show_all');
  }
  public set showAll(value: boolean | cdktf.IResolvable) {
    this._showAll = value;
  }
  public resetShowAll() {
    this._showAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAllInput() {
    return this._showAll;
  }
}

export class DataServerscomSbmFlavorOrderOptionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataServerscomSbmFlavorOrderOptionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataServerscomSbmFlavorOrderOptionsFilterOutputReference {
    return new DataServerscomSbmFlavorOrderOptionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_options serverscom_sbm_flavor_order_options}
*/
export class DataServerscomSbmFlavorOrderOptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_sbm_flavor_order_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerscomSbmFlavorOrderOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerscomSbmFlavorOrderOptions to import
  * @param importFromId The id of the existing DataServerscomSbmFlavorOrderOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerscomSbmFlavorOrderOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_sbm_flavor_order_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_flavor_order_options serverscom_sbm_flavor_order_options} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerscomSbmFlavorOrderOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerscomSbmFlavorOrderOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_sbm_flavor_order_options',
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

  // sbm_flavors - computed: true, optional: false, required: false
  private _sbmFlavors = new DataServerscomSbmFlavorOrderOptionsSbmFlavorsList(this, "sbm_flavors", false);
  public get sbmFlavors() {
    return this._sbmFlavors;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataServerscomSbmFlavorOrderOptionsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataServerscomSbmFlavorOrderOptionsFilter[] | cdktf.IResolvable) {
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
      filter: cdktf.listMapper(dataServerscomSbmFlavorOrderOptionsFilterToTerraform, true)(this._filter.internalValue),
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
        value: cdktf.listMapperHcl(dataServerscomSbmFlavorOrderOptionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataServerscomSbmFlavorOrderOptionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
