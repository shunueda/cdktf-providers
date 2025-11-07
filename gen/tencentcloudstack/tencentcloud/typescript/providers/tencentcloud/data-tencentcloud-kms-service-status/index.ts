// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kms_service_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudKmsServiceStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kms_service_status#id DataTencentcloudKmsServiceStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kms_service_status#result_output_file DataTencentcloudKmsServiceStatus#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudKmsServiceStatusExclusiveHsmListStruct {
}

export function dataTencentcloudKmsServiceStatusExclusiveHsmListStructToTerraform(struct?: DataTencentcloudKmsServiceStatusExclusiveHsmListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKmsServiceStatusExclusiveHsmListStructToHclTerraform(struct?: DataTencentcloudKmsServiceStatusExclusiveHsmListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKmsServiceStatusExclusiveHsmListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKmsServiceStatusExclusiveHsmListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKmsServiceStatusExclusiveHsmListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hsm_cluster_id - computed: true, optional: false, required: false
  public get hsmClusterId() {
    return this.getStringAttribute('hsm_cluster_id');
  }

  // hsm_cluster_name - computed: true, optional: false, required: false
  public get hsmClusterName() {
    return this.getStringAttribute('hsm_cluster_name');
  }
}

export class DataTencentcloudKmsServiceStatusExclusiveHsmListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKmsServiceStatusExclusiveHsmListStructOutputReference {
    return new DataTencentcloudKmsServiceStatusExclusiveHsmListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kms_service_status tencentcloud_kms_service_status}
*/
export class DataTencentcloudKmsServiceStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kms_service_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudKmsServiceStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudKmsServiceStatus to import
  * @param importFromId The id of the existing DataTencentcloudKmsServiceStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kms_service_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudKmsServiceStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kms_service_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kms_service_status tencentcloud_kms_service_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudKmsServiceStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudKmsServiceStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kms_service_status',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmk_limit - computed: true, optional: false, required: false
  public get cmkLimit() {
    return this.getNumberAttribute('cmk_limit');
  }

  // cmk_user_count - computed: true, optional: false, required: false
  public get cmkUserCount() {
    return this.getNumberAttribute('cmk_user_count');
  }

  // exclusive_hsm_enabled - computed: true, optional: false, required: false
  public get exclusiveHsmEnabled() {
    return this.getBooleanAttribute('exclusive_hsm_enabled');
  }

  // exclusive_hsm_list - computed: true, optional: false, required: false
  private _exclusiveHsmList = new DataTencentcloudKmsServiceStatusExclusiveHsmListStructList(this, "exclusive_hsm_list", false);
  public get exclusiveHsmList() {
    return this._exclusiveHsmList;
  }

  // exclusive_vsm_enabled - computed: true, optional: false, required: false
  public get exclusiveVsmEnabled() {
    return this.getBooleanAttribute('exclusive_vsm_enabled');
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

  // invalid_type - computed: true, optional: false, required: false
  public get invalidType() {
    return this.getNumberAttribute('invalid_type');
  }

  // pro_expire_time - computed: true, optional: false, required: false
  public get proExpireTime() {
    return this.getNumberAttribute('pro_expire_time');
  }

  // pro_renew_flag - computed: true, optional: false, required: false
  public get proRenewFlag() {
    return this.getNumberAttribute('pro_renew_flag');
  }

  // pro_resource_id - computed: true, optional: false, required: false
  public get proResourceId() {
    return this.getStringAttribute('pro_resource_id');
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

  // service_enabled - computed: true, optional: false, required: false
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }

  // subscription_info - computed: true, optional: false, required: false
  public get subscriptionInfo() {
    return this.getStringAttribute('subscription_info');
  }

  // user_level - computed: true, optional: false, required: false
  public get userLevel() {
    return this.getNumberAttribute('user_level');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
