// https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerscomBandwidthOrderOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options#id DataServerscomBandwidthOrderOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options#location_id DataServerscomBandwidthOrderOptions#location_id}
  */
  readonly locationId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options#server_model_id DataServerscomBandwidthOrderOptions#server_model_id}
  */
  readonly serverModelId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options#uplink_model_id DataServerscomBandwidthOrderOptions#uplink_model_id}
  */
  readonly uplinkModelId: number;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options#filter DataServerscomBandwidthOrderOptions#filter}
  */
  readonly filter?: DataServerscomBandwidthOrderOptionsFilter[] | cdktf.IResolvable;
}
export interface DataServerscomBandwidthOrderOptionsBandwidthOptions {
}

export function dataServerscomBandwidthOrderOptionsBandwidthOptionsToTerraform(struct?: DataServerscomBandwidthOrderOptionsBandwidthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataServerscomBandwidthOrderOptionsBandwidthOptionsToHclTerraform(struct?: DataServerscomBandwidthOrderOptionsBandwidthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataServerscomBandwidthOrderOptionsBandwidthOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerscomBandwidthOrderOptionsBandwidthOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerscomBandwidthOrderOptionsBandwidthOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commit - computed: true, optional: false, required: false
  public get commit() {
    return this.getNumberAttribute('commit');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataServerscomBandwidthOrderOptionsBandwidthOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataServerscomBandwidthOrderOptionsBandwidthOptionsOutputReference {
    return new DataServerscomBandwidthOrderOptionsBandwidthOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataServerscomBandwidthOrderOptionsFilter {
  /**
  * This parameter filters output according to the bandwidth option's type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options#type DataServerscomBandwidthOrderOptions#type}
  */
  readonly type?: string;
}

export function dataServerscomBandwidthOrderOptionsFilterToTerraform(struct?: DataServerscomBandwidthOrderOptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataServerscomBandwidthOrderOptionsFilterToHclTerraform(struct?: DataServerscomBandwidthOrderOptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataServerscomBandwidthOrderOptionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerscomBandwidthOrderOptionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerscomBandwidthOrderOptionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
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
}

export class DataServerscomBandwidthOrderOptionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataServerscomBandwidthOrderOptionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataServerscomBandwidthOrderOptionsFilterOutputReference {
    return new DataServerscomBandwidthOrderOptionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options serverscom_bandwidth_order_options}
*/
export class DataServerscomBandwidthOrderOptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_bandwidth_order_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerscomBandwidthOrderOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerscomBandwidthOrderOptions to import
  * @param importFromId The id of the existing DataServerscomBandwidthOrderOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerscomBandwidthOrderOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_bandwidth_order_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/bandwidth_order_options serverscom_bandwidth_order_options} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerscomBandwidthOrderOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerscomBandwidthOrderOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_bandwidth_order_options',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.2'
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
    this._serverModelId = config.serverModelId;
    this._uplinkModelId = config.uplinkModelId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_options - computed: true, optional: false, required: false
  private _bandwidthOptions = new DataServerscomBandwidthOrderOptionsBandwidthOptionsList(this, "bandwidth_options", false);
  public get bandwidthOptions() {
    return this._bandwidthOptions;
  }

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

  // server_model_id - computed: false, optional: false, required: true
  private _serverModelId?: number; 
  public get serverModelId() {
    return this.getNumberAttribute('server_model_id');
  }
  public set serverModelId(value: number) {
    this._serverModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModelIdInput() {
    return this._serverModelId;
  }

  // uplink_model_id - computed: false, optional: false, required: true
  private _uplinkModelId?: number; 
  public get uplinkModelId() {
    return this.getNumberAttribute('uplink_model_id');
  }
  public set uplinkModelId(value: number) {
    this._uplinkModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkModelIdInput() {
    return this._uplinkModelId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataServerscomBandwidthOrderOptionsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataServerscomBandwidthOrderOptionsFilter[] | cdktf.IResolvable) {
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
      server_model_id: cdktf.numberToTerraform(this._serverModelId),
      uplink_model_id: cdktf.numberToTerraform(this._uplinkModelId),
      filter: cdktf.listMapper(dataServerscomBandwidthOrderOptionsFilterToTerraform, true)(this._filter.internalValue),
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
      server_model_id: {
        value: cdktf.numberToHclTerraform(this._serverModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_model_id: {
        value: cdktf.numberToHclTerraform(this._uplinkModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.listMapperHcl(dataServerscomBandwidthOrderOptionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataServerscomBandwidthOrderOptionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
