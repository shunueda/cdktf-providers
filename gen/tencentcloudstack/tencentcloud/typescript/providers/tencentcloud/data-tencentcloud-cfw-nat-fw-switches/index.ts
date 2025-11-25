// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cfw_nat_fw_switches
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCfwNatFwSwitchesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Switch enable status, 1 open; 0 close.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cfw_nat_fw_switches#enable DataTencentcloudCfwNatFwSwitches#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cfw_nat_fw_switches#id DataTencentcloudCfwNatFwSwitches#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter the NAT firewall instance to which the NAT firewall subnet switch belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cfw_nat_fw_switches#nat_ins_id DataTencentcloudCfwNatFwSwitches#nat_ins_id}
  */
  readonly natInsId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cfw_nat_fw_switches#result_output_file DataTencentcloudCfwNatFwSwitches#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Switch status, 1 open; 0 close.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cfw_nat_fw_switches#status DataTencentcloudCfwNatFwSwitches#status}
  */
  readonly status?: number;
}
export interface DataTencentcloudCfwNatFwSwitchesData {
}

export function dataTencentcloudCfwNatFwSwitchesDataToTerraform(struct?: DataTencentcloudCfwNatFwSwitchesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCfwNatFwSwitchesDataToHclTerraform(struct?: DataTencentcloudCfwNatFwSwitchesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCfwNatFwSwitchesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCfwNatFwSwitchesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCfwNatFwSwitchesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abnormal - computed: true, optional: false, required: false
  public get abnormal() {
    return this.getNumberAttribute('abnormal');
  }

  // cvm_num - computed: true, optional: false, required: false
  public get cvmNum() {
    return this.getNumberAttribute('cvm_num');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getNumberAttribute('enable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // nat_id - computed: true, optional: false, required: false
  public get natId() {
    return this.getStringAttribute('nat_id');
  }

  // nat_ins_id - computed: true, optional: false, required: false
  public get natInsId() {
    return this.getStringAttribute('nat_ins_id');
  }

  // nat_ins_name - computed: true, optional: false, required: false
  public get natInsName() {
    return this.getStringAttribute('nat_ins_name');
  }

  // nat_name - computed: true, optional: false, required: false
  public get natName() {
    return this.getStringAttribute('nat_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // route_id - computed: true, optional: false, required: false
  public get routeId() {
    return this.getStringAttribute('route_id');
  }

  // route_name - computed: true, optional: false, required: false
  public get routeName() {
    return this.getStringAttribute('route_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subnet_cidr - computed: true, optional: false, required: false
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
}

export class DataTencentcloudCfwNatFwSwitchesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCfwNatFwSwitchesDataOutputReference {
    return new DataTencentcloudCfwNatFwSwitchesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cfw_nat_fw_switches tencentcloud_cfw_nat_fw_switches}
*/
export class DataTencentcloudCfwNatFwSwitches extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfw_nat_fw_switches";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCfwNatFwSwitches resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCfwNatFwSwitches to import
  * @param importFromId The id of the existing DataTencentcloudCfwNatFwSwitches that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cfw_nat_fw_switches#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCfwNatFwSwitches to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfw_nat_fw_switches", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cfw_nat_fw_switches tencentcloud_cfw_nat_fw_switches} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCfwNatFwSwitchesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCfwNatFwSwitchesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfw_nat_fw_switches',
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
    this._enable = config.enable;
    this._id = config.id;
    this._natInsId = config.natInsId;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudCfwNatFwSwitchesDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // nat_ins_id - computed: false, optional: true, required: false
  private _natInsId?: string; 
  public get natInsId() {
    return this.getStringAttribute('nat_ins_id');
  }
  public set natInsId(value: string) {
    this._natInsId = value;
  }
  public resetNatInsId() {
    this._natInsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInsIdInput() {
    return this._natInsId;
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

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      nat_ins_id: cdktf.stringToTerraform(this._natInsId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.numberToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ins_id: {
        value: cdktf.stringToHclTerraform(this._natInsId),
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
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
