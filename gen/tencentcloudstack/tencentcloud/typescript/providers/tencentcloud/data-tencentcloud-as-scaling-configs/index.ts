// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/as_scaling_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudAsScalingConfigsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Launch configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/as_scaling_configs#configuration_id DataTencentcloudAsScalingConfigs#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Launch configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/as_scaling_configs#configuration_name DataTencentcloudAsScalingConfigs#configuration_name}
  */
  readonly configurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/as_scaling_configs#id DataTencentcloudAsScalingConfigs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/as_scaling_configs#result_output_file DataTencentcloudAsScalingConfigs#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudAsScalingConfigsConfigurationListDataDisk {
}

export function dataTencentcloudAsScalingConfigsConfigurationListDataDiskToTerraform(struct?: DataTencentcloudAsScalingConfigsConfigurationListDataDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsScalingConfigsConfigurationListDataDiskToHclTerraform(struct?: DataTencentcloudAsScalingConfigsConfigurationListDataDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsScalingConfigsConfigurationListDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAsScalingConfigsConfigurationListDataDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsScalingConfigsConfigurationListDataDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_with_instance - computed: true, optional: false, required: false
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
}

export class DataTencentcloudAsScalingConfigsConfigurationListDataDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsScalingConfigsConfigurationListDataDiskOutputReference {
    return new DataTencentcloudAsScalingConfigsConfigurationListDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAsScalingConfigsConfigurationListStruct {
}

export function dataTencentcloudAsScalingConfigsConfigurationListStructToTerraform(struct?: DataTencentcloudAsScalingConfigsConfigurationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsScalingConfigsConfigurationListStructToHclTerraform(struct?: DataTencentcloudAsScalingConfigsConfigurationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsScalingConfigsConfigurationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAsScalingConfigsConfigurationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsScalingConfigsConfigurationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // configuration_name - computed: true, optional: false, required: false
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_disk - computed: true, optional: false, required: false
  private _dataDisk = new DataTencentcloudAsScalingConfigsConfigurationListDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }

  // disk_type_policy - computed: true, optional: false, required: false
  public get diskTypePolicy() {
    return this.getStringAttribute('disk_type_policy');
  }

  // enhanced_monitor_service - computed: true, optional: false, required: false
  public get enhancedMonitorService() {
    return this.getBooleanAttribute('enhanced_monitor_service');
  }

  // enhanced_security_service - computed: true, optional: false, required: false
  public get enhancedSecurityService() {
    return this.getBooleanAttribute('enhanced_security_service');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_tags - computed: true, optional: false, required: false
  private _instanceTags = new cdktf.StringMap(this, "instance_tags");
  public get instanceTags() {
    return this._instanceTags;
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // internet_max_bandwidth_out - computed: true, optional: false, required: false
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }

  // key_ids - computed: true, optional: false, required: false
  public get keyIds() {
    return this.getListAttribute('key_ids');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // public_ip_assigned - computed: true, optional: false, required: false
  public get publicIpAssigned() {
    return this.getBooleanAttribute('public_ip_assigned');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_disk_size - computed: true, optional: false, required: false
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }

  // system_disk_type - computed: true, optional: false, required: false
  public get systemDiskType() {
    return this.getStringAttribute('system_disk_type');
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
}

export class DataTencentcloudAsScalingConfigsConfigurationListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsScalingConfigsConfigurationListStructOutputReference {
    return new DataTencentcloudAsScalingConfigsConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/as_scaling_configs tencentcloud_as_scaling_configs}
*/
export class DataTencentcloudAsScalingConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_scaling_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudAsScalingConfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudAsScalingConfigs to import
  * @param importFromId The id of the existing DataTencentcloudAsScalingConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/as_scaling_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudAsScalingConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_scaling_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/as_scaling_configs tencentcloud_as_scaling_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudAsScalingConfigsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudAsScalingConfigsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_scaling_configs',
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
    this._configurationId = config.configurationId;
    this._configurationName = config.configurationName;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: false, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // configuration_list - computed: true, optional: false, required: false
  private _configurationList = new DataTencentcloudAsScalingConfigsConfigurationListStructList(this, "configuration_list", false);
  public get configurationList() {
    return this._configurationList;
  }

  // configuration_name - computed: false, optional: true, required: false
  private _configurationName?: string; 
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }
  public set configurationName(value: string) {
    this._configurationName = value;
  }
  public resetConfigurationName() {
    this._configurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNameInput() {
    return this._configurationName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      configuration_name: cdktf.stringToTerraform(this._configurationName),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_name: {
        value: cdktf.stringToHclTerraform(this._configurationName),
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
