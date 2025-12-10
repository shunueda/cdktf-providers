// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dayu_ddos_policy_cases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDayuDdosPolicyCasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dayu_ddos_policy_cases#id DataTencentcloudDayuDdosPolicyCases#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the resource that the DDoS policy case works for, valid values are `bgpip`, `bgp`, `bgp-multip` and `net`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dayu_ddos_policy_cases#resource_type DataTencentcloudDayuDdosPolicyCases#resource_type}
  */
  readonly resourceType: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dayu_ddos_policy_cases#result_output_file DataTencentcloudDayuDdosPolicyCases#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * ID of the DDoS policy case to be query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dayu_ddos_policy_cases#scene_id DataTencentcloudDayuDdosPolicyCases#scene_id}
  */
  readonly sceneId: string;
}
export interface DataTencentcloudDayuDdosPolicyCasesListStruct {
}

export function dataTencentcloudDayuDdosPolicyCasesListStructToTerraform(struct?: DataTencentcloudDayuDdosPolicyCasesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDayuDdosPolicyCasesListStructToHclTerraform(struct?: DataTencentcloudDayuDdosPolicyCasesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDayuDdosPolicyCasesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDayuDdosPolicyCasesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDayuDdosPolicyCasesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_protocols - computed: true, optional: false, required: false
  public get appProtocols() {
    return this.getListAttribute('app_protocols');
  }

  // app_type - computed: true, optional: false, required: false
  public get appType() {
    return this.getStringAttribute('app_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // has_abroad - computed: true, optional: false, required: false
  public get hasAbroad() {
    return this.getStringAttribute('has_abroad');
  }

  // has_initiate_tcp - computed: true, optional: false, required: false
  public get hasInitiateTcp() {
    return this.getStringAttribute('has_initiate_tcp');
  }

  // has_initiate_udp - computed: true, optional: false, required: false
  public get hasInitiateUdp() {
    return this.getStringAttribute('has_initiate_udp');
  }

  // has_vpn - computed: true, optional: false, required: false
  public get hasVpn() {
    return this.getStringAttribute('has_vpn');
  }

  // max_tcp_package_len - computed: true, optional: false, required: false
  public get maxTcpPackageLen() {
    return this.getStringAttribute('max_tcp_package_len');
  }

  // max_udp_package_len - computed: true, optional: false, required: false
  public get maxUdpPackageLen() {
    return this.getStringAttribute('max_udp_package_len');
  }

  // min_tcp_package_len - computed: true, optional: false, required: false
  public get minTcpPackageLen() {
    return this.getStringAttribute('min_tcp_package_len');
  }

  // min_udp_package_len - computed: true, optional: false, required: false
  public get minUdpPackageLen() {
    return this.getStringAttribute('min_udp_package_len');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_tcp_port - computed: true, optional: false, required: false
  public get peerTcpPort() {
    return this.getStringAttribute('peer_tcp_port');
  }

  // peer_udp_port - computed: true, optional: false, required: false
  public get peerUdpPort() {
    return this.getStringAttribute('peer_udp_port');
  }

  // platform_types - computed: true, optional: false, required: false
  public get platformTypes() {
    return this.getListAttribute('platform_types');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // scene_id - computed: true, optional: false, required: false
  public get sceneId() {
    return this.getStringAttribute('scene_id');
  }

  // tcp_end_port - computed: true, optional: false, required: false
  public get tcpEndPort() {
    return this.getStringAttribute('tcp_end_port');
  }

  // tcp_footprint - computed: true, optional: false, required: false
  public get tcpFootprint() {
    return this.getStringAttribute('tcp_footprint');
  }

  // tcp_start_port - computed: true, optional: false, required: false
  public get tcpStartPort() {
    return this.getStringAttribute('tcp_start_port');
  }

  // udp_end_port - computed: true, optional: false, required: false
  public get udpEndPort() {
    return this.getStringAttribute('udp_end_port');
  }

  // udp_footprint - computed: true, optional: false, required: false
  public get udpFootprint() {
    return this.getStringAttribute('udp_footprint');
  }

  // udp_start_port - computed: true, optional: false, required: false
  public get udpStartPort() {
    return this.getStringAttribute('udp_start_port');
  }

  // web_api_urls - computed: true, optional: false, required: false
  public get webApiUrls() {
    return this.getListAttribute('web_api_urls');
  }
}

export class DataTencentcloudDayuDdosPolicyCasesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDayuDdosPolicyCasesListStructOutputReference {
    return new DataTencentcloudDayuDdosPolicyCasesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dayu_ddos_policy_cases tencentcloud_dayu_ddos_policy_cases}
*/
export class DataTencentcloudDayuDdosPolicyCases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_ddos_policy_cases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDayuDdosPolicyCases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDayuDdosPolicyCases to import
  * @param importFromId The id of the existing DataTencentcloudDayuDdosPolicyCases that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dayu_ddos_policy_cases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDayuDdosPolicyCases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_ddos_policy_cases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dayu_ddos_policy_cases tencentcloud_dayu_ddos_policy_cases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDayuDdosPolicyCasesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDayuDdosPolicyCasesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_ddos_policy_cases',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._resourceType = config.resourceType;
    this._resultOutputFile = config.resultOutputFile;
    this._sceneId = config.sceneId;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudDayuDdosPolicyCasesListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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

  // scene_id - computed: false, optional: false, required: true
  private _sceneId?: string; 
  public get sceneId() {
    return this.getStringAttribute('scene_id');
  }
  public set sceneId(value: string) {
    this._sceneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneIdInput() {
    return this._sceneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      scene_id: cdktf.stringToTerraform(this._sceneId),
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
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
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
      scene_id: {
        value: cdktf.stringToHclTerraform(this._sceneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
