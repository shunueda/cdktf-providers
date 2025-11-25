// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dcx_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDcxInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the dedicated tunnels to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dcx_instances#dcx_id DataTencentcloudDcxInstances#dcx_id}
  */
  readonly dcxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dcx_instances#id DataTencentcloudDcxInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the dedicated tunnels to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dcx_instances#name DataTencentcloudDcxInstances#name}
  */
  readonly name?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dcx_instances#result_output_file DataTencentcloudDcxInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudDcxInstancesInstanceListStruct {
}

export function dataTencentcloudDcxInstancesInstanceListStructToTerraform(struct?: DataTencentcloudDcxInstancesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDcxInstancesInstanceListStructToHclTerraform(struct?: DataTencentcloudDcxInstancesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDcxInstancesInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDcxInstancesInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDcxInstancesInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // bgp_asn - computed: true, optional: false, required: false
  public get bgpAsn() {
    return this.getNumberAttribute('bgp_asn');
  }

  // bgp_auth_key - computed: true, optional: false, required: false
  public get bgpAuthKey() {
    return this.getStringAttribute('bgp_auth_key');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_address - computed: true, optional: false, required: false
  public get customerAddress() {
    return this.getStringAttribute('customer_address');
  }

  // dc_id - computed: true, optional: false, required: false
  public get dcId() {
    return this.getStringAttribute('dc_id');
  }

  // dcg_id - computed: true, optional: false, required: false
  public get dcgId() {
    return this.getStringAttribute('dcg_id');
  }

  // dcx_id - computed: true, optional: false, required: false
  public get dcxId() {
    return this.getStringAttribute('dcx_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_region - computed: true, optional: false, required: false
  public get networkRegion() {
    return this.getStringAttribute('network_region');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // route_filter_prefixes - computed: true, optional: false, required: false
  public get routeFilterPrefixes() {
    return this.getListAttribute('route_filter_prefixes');
  }

  // route_type - computed: true, optional: false, required: false
  public get routeType() {
    return this.getStringAttribute('route_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tencent_address - computed: true, optional: false, required: false
  public get tencentAddress() {
    return this.getStringAttribute('tencent_address');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudDcxInstancesInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDcxInstancesInstanceListStructOutputReference {
    return new DataTencentcloudDcxInstancesInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dcx_instances tencentcloud_dcx_instances}
*/
export class DataTencentcloudDcxInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dcx_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDcxInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDcxInstances to import
  * @param importFromId The id of the existing DataTencentcloudDcxInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dcx_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDcxInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dcx_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dcx_instances tencentcloud_dcx_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDcxInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDcxInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dcx_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dcxId = config.dcxId;
    this._id = config.id;
    this._name = config.name;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dcx_id - computed: false, optional: true, required: false
  private _dcxId?: string; 
  public get dcxId() {
    return this.getStringAttribute('dcx_id');
  }
  public set dcxId(value: string) {
    this._dcxId = value;
  }
  public resetDcxId() {
    this._dcxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcxIdInput() {
    return this._dcxId;
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
  private _instanceList = new DataTencentcloudDcxInstancesInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
      dcx_id: cdktf.stringToTerraform(this._dcxId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dcx_id: {
        value: cdktf.stringToHclTerraform(this._dcxId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
