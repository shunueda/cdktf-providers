// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/ssl_describe_host_deploy_record_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSslDescribeHostDeployRecordDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deployment record ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/ssl_describe_host_deploy_record_detail#deploy_record_id DataTencentcloudSslDescribeHostDeployRecordDetail#deploy_record_id}
  */
  readonly deployRecordId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/ssl_describe_host_deploy_record_detail#id DataTencentcloudSslDescribeHostDeployRecordDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/ssl_describe_host_deploy_record_detail#result_output_file DataTencentcloudSslDescribeHostDeployRecordDetail#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStruct {
}

export function dataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStructToTerraform(struct?: DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStructToHclTerraform(struct?: DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // cert_id - computed: true, optional: false, required: false
  public get certId() {
    return this.getStringAttribute('cert_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }

  // env_id - computed: true, optional: false, required: false
  public get envId() {
    return this.getStringAttribute('env_id');
  }

  // error_msg - computed: true, optional: false, required: false
  public get errorMsg() {
    return this.getStringAttribute('error_msg');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // listener_name - computed: true, optional: false, required: false
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // old_cert_id - computed: true, optional: false, required: false
  public get oldCertId() {
    return this.getStringAttribute('old_cert_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // sni_switch - computed: true, optional: false, required: false
  public get sniSwitch() {
    return this.getNumberAttribute('sni_switch');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // tcb_type - computed: true, optional: false, required: false
  public get tcbType() {
    return this.getStringAttribute('tcb_type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStructOutputReference {
    return new DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/ssl_describe_host_deploy_record_detail tencentcloud_ssl_describe_host_deploy_record_detail}
*/
export class DataTencentcloudSslDescribeHostDeployRecordDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_describe_host_deploy_record_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSslDescribeHostDeployRecordDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSslDescribeHostDeployRecordDetail to import
  * @param importFromId The id of the existing DataTencentcloudSslDescribeHostDeployRecordDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/ssl_describe_host_deploy_record_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSslDescribeHostDeployRecordDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_describe_host_deploy_record_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/ssl_describe_host_deploy_record_detail tencentcloud_ssl_describe_host_deploy_record_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSslDescribeHostDeployRecordDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSslDescribeHostDeployRecordDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_describe_host_deploy_record_detail',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployRecordId = config.deployRecordId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_record_detail_list - computed: true, optional: false, required: false
  private _deployRecordDetailList = new DataTencentcloudSslDescribeHostDeployRecordDetailDeployRecordDetailListStructList(this, "deploy_record_detail_list", false);
  public get deployRecordDetailList() {
    return this._deployRecordDetailList;
  }

  // deploy_record_id - computed: false, optional: false, required: true
  private _deployRecordId?: string; 
  public get deployRecordId() {
    return this.getStringAttribute('deploy_record_id');
  }
  public set deployRecordId(value: string) {
    this._deployRecordId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployRecordIdInput() {
    return this._deployRecordId;
  }

  // failed_total_count - computed: true, optional: false, required: false
  public get failedTotalCount() {
    return this.getNumberAttribute('failed_total_count');
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

  // running_total_count - computed: true, optional: false, required: false
  public get runningTotalCount() {
    return this.getNumberAttribute('running_total_count');
  }

  // success_total_count - computed: true, optional: false, required: false
  public get successTotalCount() {
    return this.getNumberAttribute('success_total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy_record_id: cdktf.stringToTerraform(this._deployRecordId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_record_id: {
        value: cdktf.stringToHclTerraform(this._deployRecordId),
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
