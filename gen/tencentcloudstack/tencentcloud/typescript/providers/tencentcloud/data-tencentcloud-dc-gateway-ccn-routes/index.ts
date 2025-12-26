// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_gateway_ccn_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDcGatewayCcnRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address type, supports: IPv4, IPv6. Default is IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_gateway_ccn_routes#address_type DataTencentcloudDcGatewayCcnRoutes#address_type}
  */
  readonly addressType?: string;
  /**
  * Cloud networking routing learning type, optional values: BGP - Automatic Learning; STATIC - User configured. Default is STATIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_gateway_ccn_routes#ccn_route_type DataTencentcloudDcGatewayCcnRoutes#ccn_route_type}
  */
  readonly ccnRouteType?: string;
  /**
  * ID of the DCG to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_gateway_ccn_routes#dcg_id DataTencentcloudDcGatewayCcnRoutes#dcg_id}
  */
  readonly dcgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_gateway_ccn_routes#id DataTencentcloudDcGatewayCcnRoutes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_gateway_ccn_routes#result_output_file DataTencentcloudDcGatewayCcnRoutes#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudDcGatewayCcnRoutesInstanceListStruct {
}

export function dataTencentcloudDcGatewayCcnRoutesInstanceListStructToTerraform(struct?: DataTencentcloudDcGatewayCcnRoutesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDcGatewayCcnRoutesInstanceListStructToHclTerraform(struct?: DataTencentcloudDcGatewayCcnRoutesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDcGatewayCcnRoutesInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDcGatewayCcnRoutesInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDcGatewayCcnRoutesInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path - computed: true, optional: false, required: false
  public get asPath() {
    return this.getListAttribute('as_path');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // dcg_id - computed: true, optional: false, required: false
  public get dcgId() {
    return this.getStringAttribute('dcg_id');
  }

  // route_id - computed: true, optional: false, required: false
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
}

export class DataTencentcloudDcGatewayCcnRoutesInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDcGatewayCcnRoutesInstanceListStructOutputReference {
    return new DataTencentcloudDcGatewayCcnRoutesInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_gateway_ccn_routes tencentcloud_dc_gateway_ccn_routes}
*/
export class DataTencentcloudDcGatewayCcnRoutes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dc_gateway_ccn_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDcGatewayCcnRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDcGatewayCcnRoutes to import
  * @param importFromId The id of the existing DataTencentcloudDcGatewayCcnRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_gateway_ccn_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDcGatewayCcnRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dc_gateway_ccn_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dc_gateway_ccn_routes tencentcloud_dc_gateway_ccn_routes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDcGatewayCcnRoutesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDcGatewayCcnRoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dc_gateway_ccn_routes',
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
    this._addressType = config.addressType;
    this._ccnRouteType = config.ccnRouteType;
    this._dcgId = config.dcgId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // ccn_route_type - computed: false, optional: true, required: false
  private _ccnRouteType?: string; 
  public get ccnRouteType() {
    return this.getStringAttribute('ccn_route_type');
  }
  public set ccnRouteType(value: string) {
    this._ccnRouteType = value;
  }
  public resetCcnRouteType() {
    this._ccnRouteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnRouteTypeInput() {
    return this._ccnRouteType;
  }

  // dcg_id - computed: false, optional: false, required: true
  private _dcgId?: string; 
  public get dcgId() {
    return this.getStringAttribute('dcg_id');
  }
  public set dcgId(value: string) {
    this._dcgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcgIdInput() {
    return this._dcgId;
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

  // instance_list - computed: true, optional: false, required: false
  private _instanceList = new DataTencentcloudDcGatewayCcnRoutesInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_type: cdktf.stringToTerraform(this._addressType),
      ccn_route_type: cdktf.stringToTerraform(this._ccnRouteType),
      dcg_id: cdktf.stringToTerraform(this._dcgId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ccn_route_type: {
        value: cdktf.stringToHclTerraform(this._ccnRouteType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dcg_id: {
        value: cdktf.stringToHclTerraform(this._dcgId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
