// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDcPublicDirectConnectTunnelRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * direct connect tunnel id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes#direct_connect_tunnel_id DataTencentcloudDcPublicDirectConnectTunnelRoutes#direct_connect_tunnel_id}
  */
  readonly directConnectTunnelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes#id DataTencentcloudDcPublicDirectConnectTunnelRoutes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes#result_output_file DataTencentcloudDcPublicDirectConnectTunnelRoutes#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes#filters DataTencentcloudDcPublicDirectConnectTunnelRoutes#filters}
  */
  readonly filters?: DataTencentcloudDcPublicDirectConnectTunnelRoutesFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutes {
}

export function dataTencentcloudDcPublicDirectConnectTunnelRoutesRoutesToTerraform(struct?: DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDcPublicDirectConnectTunnelRoutesRoutesToHclTerraform(struct?: DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path - computed: true, optional: false, required: false
  public get asPath() {
    return cdktf.Fn.tolist(this.getListAttribute('as_path'));
  }

  // destination_cidr_block - computed: true, optional: false, required: false
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }

  // route_id - computed: true, optional: false, required: false
  public get routeId() {
    return this.getStringAttribute('route_id');
  }

  // route_type - computed: true, optional: false, required: false
  public get routeType() {
    return this.getStringAttribute('route_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutesOutputReference {
    return new DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDcPublicDirectConnectTunnelRoutesFilters {
  /**
  * Fields to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes#name DataTencentcloudDcPublicDirectConnectTunnelRoutes#name}
  */
  readonly name: string;
  /**
  * filter value of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes#values DataTencentcloudDcPublicDirectConnectTunnelRoutes#values}
  */
  readonly values: string[];
}

export function dataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersToTerraform(struct?: DataTencentcloudDcPublicDirectConnectTunnelRoutesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersToHclTerraform(struct?: DataTencentcloudDcPublicDirectConnectTunnelRoutesFilters | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDcPublicDirectConnectTunnelRoutesFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTencentcloudDcPublicDirectConnectTunnelRoutesFilters | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudDcPublicDirectConnectTunnelRoutesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersOutputReference {
    return new DataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes tencentcloud_dc_public_direct_connect_tunnel_routes}
*/
export class DataTencentcloudDcPublicDirectConnectTunnelRoutes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dc_public_direct_connect_tunnel_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDcPublicDirectConnectTunnelRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDcPublicDirectConnectTunnelRoutes to import
  * @param importFromId The id of the existing DataTencentcloudDcPublicDirectConnectTunnelRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDcPublicDirectConnectTunnelRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dc_public_direct_connect_tunnel_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_public_direct_connect_tunnel_routes tencentcloud_dc_public_direct_connect_tunnel_routes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDcPublicDirectConnectTunnelRoutesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDcPublicDirectConnectTunnelRoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dc_public_direct_connect_tunnel_routes',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directConnectTunnelId = config.directConnectTunnelId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direct_connect_tunnel_id - computed: false, optional: false, required: true
  private _directConnectTunnelId?: string; 
  public get directConnectTunnelId() {
    return this.getStringAttribute('direct_connect_tunnel_id');
  }
  public set directConnectTunnelId(value: string) {
    this._directConnectTunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectTunnelIdInput() {
    return this._directConnectTunnelId;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new DataTencentcloudDcPublicDirectConnectTunnelRoutesRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudDcPublicDirectConnectTunnelRoutesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direct_connect_tunnel_id: cdktf.stringToTerraform(this._directConnectTunnelId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersToTerraform, true)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direct_connect_tunnel_id: {
        value: cdktf.stringToHclTerraform(this._directConnectTunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDcPublicDirectConnectTunnelRoutesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
