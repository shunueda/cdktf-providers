// generated from terraform resource schema

import { DataLogicmonitorDeviceGroupCustomProperties, 
dataLogicmonitorDeviceGroupCustomPropertiesToTerraform, 
dataLogicmonitorDeviceGroupCustomPropertiesToHclTerraform, 
DataLogicmonitorDeviceGroupCustomPropertiesList, 
DataLogicmonitorDeviceGroupSubGroups, 
dataLogicmonitorDeviceGroupSubGroupsToTerraform, 
dataLogicmonitorDeviceGroupSubGroupsToHclTerraform, 
DataLogicmonitorDeviceGroupSubGroupsList, 
DataLogicmonitorDeviceGroupAwsTestResult, 
dataLogicmonitorDeviceGroupAwsTestResultToTerraform, 
dataLogicmonitorDeviceGroupAwsTestResultToHclTerraform, 
DataLogicmonitorDeviceGroupAwsTestResultList, 
DataLogicmonitorDeviceGroupAzureTestResult, 
dataLogicmonitorDeviceGroupAzureTestResultToTerraform, 
dataLogicmonitorDeviceGroupAzureTestResultToHclTerraform, 
DataLogicmonitorDeviceGroupAzureTestResultList, 
DataLogicmonitorDeviceGroupExtra, 
dataLogicmonitorDeviceGroupExtraToTerraform, 
dataLogicmonitorDeviceGroupExtraToHclTerraform, 
DataLogicmonitorDeviceGroupExtraList, 
DataLogicmonitorDeviceGroupGcpTestResult, 
dataLogicmonitorDeviceGroupGcpTestResultToTerraform, 
dataLogicmonitorDeviceGroupGcpTestResultToHclTerraform, 
DataLogicmonitorDeviceGroupGcpTestResultList, 
DataLogicmonitorDeviceGroupSaasTestResult, 
dataLogicmonitorDeviceGroupSaasTestResultToTerraform, 
dataLogicmonitorDeviceGroupSaasTestResultToHclTerraform, 
DataLogicmonitorDeviceGroupSaasTestResultList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataLogicmonitorDeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#applies_to DataLogicmonitorDeviceGroup#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#aws_regions_info DataLogicmonitorDeviceGroup#aws_regions_info}
  */
  readonly awsRegionsInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#aws_test_result_code DataLogicmonitorDeviceGroup#aws_test_result_code}
  */
  readonly awsTestResultCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#azure_regions_info DataLogicmonitorDeviceGroup#azure_regions_info}
  */
  readonly azureRegionsInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#azure_test_result_code DataLogicmonitorDeviceGroup#azure_test_result_code}
  */
  readonly azureTestResultCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#created_on DataLogicmonitorDeviceGroup#created_on}
  */
  readonly createdOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#custom_properties DataLogicmonitorDeviceGroup#custom_properties}
  */
  readonly customProperties?: DataLogicmonitorDeviceGroupCustomProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#default_auto_balanced_collector_group_id DataLogicmonitorDeviceGroup#default_auto_balanced_collector_group_id}
  */
  readonly defaultAutoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#default_collector_description DataLogicmonitorDeviceGroup#default_collector_description}
  */
  readonly defaultCollectorDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#default_collector_id DataLogicmonitorDeviceGroup#default_collector_id}
  */
  readonly defaultCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#description DataLogicmonitorDeviceGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#disable_alerting DataLogicmonitorDeviceGroup#disable_alerting}
  */
  readonly disableAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#effective_alert_enabled DataLogicmonitorDeviceGroup#effective_alert_enabled}
  */
  readonly effectiveAlertEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#enable_netflow DataLogicmonitorDeviceGroup#enable_netflow}
  */
  readonly enableNetflow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#filter DataLogicmonitorDeviceGroup#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#full_path DataLogicmonitorDeviceGroup#full_path}
  */
  readonly fullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#gcp_regions_info DataLogicmonitorDeviceGroup#gcp_regions_info}
  */
  readonly gcpRegionsInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#gcp_test_result_code DataLogicmonitorDeviceGroup#gcp_test_result_code}
  */
  readonly gcpTestResultCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#group_status DataLogicmonitorDeviceGroup#group_status}
  */
  readonly groupStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#group_type DataLogicmonitorDeviceGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#has_netflow_enabled_devices DataLogicmonitorDeviceGroup#has_netflow_enabled_devices}
  */
  readonly hasNetflowEnabledDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#id DataLogicmonitorDeviceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#name DataLogicmonitorDeviceGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#num_of_a_w_s_devices DataLogicmonitorDeviceGroup#num_of_a_w_s_devices}
  */
  readonly numOfAWSDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#num_of_azure_devices DataLogicmonitorDeviceGroup#num_of_azure_devices}
  */
  readonly numOfAzureDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#num_of_direct_devices DataLogicmonitorDeviceGroup#num_of_direct_devices}
  */
  readonly numOfDirectDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#num_of_direct_sub_groups DataLogicmonitorDeviceGroup#num_of_direct_sub_groups}
  */
  readonly numOfDirectSubGroups?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#num_of_gcp_devices DataLogicmonitorDeviceGroup#num_of_gcp_devices}
  */
  readonly numOfGcpDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#num_of_hosts DataLogicmonitorDeviceGroup#num_of_hosts}
  */
  readonly numOfHosts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#parent_id DataLogicmonitorDeviceGroup#parent_id}
  */
  readonly parentId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#sub_groups DataLogicmonitorDeviceGroup#sub_groups}
  */
  readonly subGroups?: DataLogicmonitorDeviceGroupSubGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#user_permission DataLogicmonitorDeviceGroup#user_permission}
  */
  readonly userPermission?: string;
  /**
  * aws_test_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#aws_test_result DataLogicmonitorDeviceGroup#aws_test_result}
  */
  readonly awsTestResult?: DataLogicmonitorDeviceGroupAwsTestResult[] | cdktf.IResolvable;
  /**
  * azure_test_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#azure_test_result DataLogicmonitorDeviceGroup#azure_test_result}
  */
  readonly azureTestResult?: DataLogicmonitorDeviceGroupAzureTestResult[] | cdktf.IResolvable;
  /**
  * extra block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#extra DataLogicmonitorDeviceGroup#extra}
  */
  readonly extra?: DataLogicmonitorDeviceGroupExtra[] | cdktf.IResolvable;
  /**
  * gcp_test_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#gcp_test_result DataLogicmonitorDeviceGroup#gcp_test_result}
  */
  readonly gcpTestResult?: DataLogicmonitorDeviceGroupGcpTestResult[] | cdktf.IResolvable;
  /**
  * saas_test_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#saas_test_result DataLogicmonitorDeviceGroup#saas_test_result}
  */
  readonly saasTestResult?: DataLogicmonitorDeviceGroupSaasTestResult[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group logicmonitor_device_group}
*/
export class DataLogicmonitorDeviceGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_device_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorDeviceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorDeviceGroup to import
  * @param importFromId The id of the existing DataLogicmonitorDeviceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorDeviceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_device_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/device_group logicmonitor_device_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorDeviceGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorDeviceGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_device_group',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appliesTo = config.appliesTo;
    this._awsRegionsInfo = config.awsRegionsInfo;
    this._awsTestResultCode = config.awsTestResultCode;
    this._azureRegionsInfo = config.azureRegionsInfo;
    this._azureTestResultCode = config.azureTestResultCode;
    this._createdOn = config.createdOn;
    this._customProperties.internalValue = config.customProperties;
    this._defaultAutoBalancedCollectorGroupId = config.defaultAutoBalancedCollectorGroupId;
    this._defaultCollectorDescription = config.defaultCollectorDescription;
    this._defaultCollectorId = config.defaultCollectorId;
    this._description = config.description;
    this._disableAlerting = config.disableAlerting;
    this._effectiveAlertEnabled = config.effectiveAlertEnabled;
    this._enableNetflow = config.enableNetflow;
    this._filter = config.filter;
    this._fullPath = config.fullPath;
    this._gcpRegionsInfo = config.gcpRegionsInfo;
    this._gcpTestResultCode = config.gcpTestResultCode;
    this._groupStatus = config.groupStatus;
    this._groupType = config.groupType;
    this._hasNetflowEnabledDevices = config.hasNetflowEnabledDevices;
    this._id = config.id;
    this._name = config.name;
    this._numOfAWSDevices = config.numOfAWSDevices;
    this._numOfAzureDevices = config.numOfAzureDevices;
    this._numOfDirectDevices = config.numOfDirectDevices;
    this._numOfDirectSubGroups = config.numOfDirectSubGroups;
    this._numOfGcpDevices = config.numOfGcpDevices;
    this._numOfHosts = config.numOfHosts;
    this._parentId = config.parentId;
    this._subGroups.internalValue = config.subGroups;
    this._userPermission = config.userPermission;
    this._awsTestResult.internalValue = config.awsTestResult;
    this._azureTestResult.internalValue = config.azureTestResult;
    this._extra.internalValue = config.extra;
    this._gcpTestResult.internalValue = config.gcpTestResult;
    this._saasTestResult.internalValue = config.saasTestResult;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applies_to - computed: false, optional: true, required: false
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  public resetAppliesTo() {
    this._appliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // aws_regions_info - computed: false, optional: true, required: false
  private _awsRegionsInfo?: string; 
  public get awsRegionsInfo() {
    return this.getStringAttribute('aws_regions_info');
  }
  public set awsRegionsInfo(value: string) {
    this._awsRegionsInfo = value;
  }
  public resetAwsRegionsInfo() {
    this._awsRegionsInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInfoInput() {
    return this._awsRegionsInfo;
  }

  // aws_test_result_code - computed: false, optional: true, required: false
  private _awsTestResultCode?: number; 
  public get awsTestResultCode() {
    return this.getNumberAttribute('aws_test_result_code');
  }
  public set awsTestResultCode(value: number) {
    this._awsTestResultCode = value;
  }
  public resetAwsTestResultCode() {
    this._awsTestResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTestResultCodeInput() {
    return this._awsTestResultCode;
  }

  // azure_regions_info - computed: false, optional: true, required: false
  private _azureRegionsInfo?: string; 
  public get azureRegionsInfo() {
    return this.getStringAttribute('azure_regions_info');
  }
  public set azureRegionsInfo(value: string) {
    this._azureRegionsInfo = value;
  }
  public resetAzureRegionsInfo() {
    this._azureRegionsInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionsInfoInput() {
    return this._azureRegionsInfo;
  }

  // azure_test_result_code - computed: false, optional: true, required: false
  private _azureTestResultCode?: number; 
  public get azureTestResultCode() {
    return this.getNumberAttribute('azure_test_result_code');
  }
  public set azureTestResultCode(value: number) {
    this._azureTestResultCode = value;
  }
  public resetAzureTestResultCode() {
    this._azureTestResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTestResultCodeInput() {
    return this._azureTestResultCode;
  }

  // created_on - computed: false, optional: true, required: false
  private _createdOn?: number; 
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }
  public set createdOn(value: number) {
    this._createdOn = value;
  }
  public resetCreatedOn() {
    this._createdOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdOnInput() {
    return this._createdOn;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new DataLogicmonitorDeviceGroupCustomPropertiesList(this, "custom_properties", false);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: DataLogicmonitorDeviceGroupCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // default_auto_balanced_collector_group_id - computed: false, optional: true, required: false
  private _defaultAutoBalancedCollectorGroupId?: number; 
  public get defaultAutoBalancedCollectorGroupId() {
    return this.getNumberAttribute('default_auto_balanced_collector_group_id');
  }
  public set defaultAutoBalancedCollectorGroupId(value: number) {
    this._defaultAutoBalancedCollectorGroupId = value;
  }
  public resetDefaultAutoBalancedCollectorGroupId() {
    this._defaultAutoBalancedCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAutoBalancedCollectorGroupIdInput() {
    return this._defaultAutoBalancedCollectorGroupId;
  }

  // default_collector_description - computed: false, optional: true, required: false
  private _defaultCollectorDescription?: string; 
  public get defaultCollectorDescription() {
    return this.getStringAttribute('default_collector_description');
  }
  public set defaultCollectorDescription(value: string) {
    this._defaultCollectorDescription = value;
  }
  public resetDefaultCollectorDescription() {
    this._defaultCollectorDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCollectorDescriptionInput() {
    return this._defaultCollectorDescription;
  }

  // default_collector_id - computed: false, optional: true, required: false
  private _defaultCollectorId?: number; 
  public get defaultCollectorId() {
    return this.getNumberAttribute('default_collector_id');
  }
  public set defaultCollectorId(value: number) {
    this._defaultCollectorId = value;
  }
  public resetDefaultCollectorId() {
    this._defaultCollectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCollectorIdInput() {
    return this._defaultCollectorId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_alerting - computed: false, optional: true, required: false
  private _disableAlerting?: boolean | cdktf.IResolvable; 
  public get disableAlerting() {
    return this.getBooleanAttribute('disable_alerting');
  }
  public set disableAlerting(value: boolean | cdktf.IResolvable) {
    this._disableAlerting = value;
  }
  public resetDisableAlerting() {
    this._disableAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAlertingInput() {
    return this._disableAlerting;
  }

  // effective_alert_enabled - computed: false, optional: true, required: false
  private _effectiveAlertEnabled?: boolean | cdktf.IResolvable; 
  public get effectiveAlertEnabled() {
    return this.getBooleanAttribute('effective_alert_enabled');
  }
  public set effectiveAlertEnabled(value: boolean | cdktf.IResolvable) {
    this._effectiveAlertEnabled = value;
  }
  public resetEffectiveAlertEnabled() {
    this._effectiveAlertEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAlertEnabledInput() {
    return this._effectiveAlertEnabled;
  }

  // enable_netflow - computed: false, optional: true, required: false
  private _enableNetflow?: boolean | cdktf.IResolvable; 
  public get enableNetflow() {
    return this.getBooleanAttribute('enable_netflow');
  }
  public set enableNetflow(value: boolean | cdktf.IResolvable) {
    this._enableNetflow = value;
  }
  public resetEnableNetflow() {
    this._enableNetflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetflowInput() {
    return this._enableNetflow;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // full_path - computed: false, optional: true, required: false
  private _fullPath?: string; 
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }
  public set fullPath(value: string) {
    this._fullPath = value;
  }
  public resetFullPath() {
    this._fullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathInput() {
    return this._fullPath;
  }

  // gcp_regions_info - computed: false, optional: true, required: false
  private _gcpRegionsInfo?: string; 
  public get gcpRegionsInfo() {
    return this.getStringAttribute('gcp_regions_info');
  }
  public set gcpRegionsInfo(value: string) {
    this._gcpRegionsInfo = value;
  }
  public resetGcpRegionsInfo() {
    this._gcpRegionsInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpRegionsInfoInput() {
    return this._gcpRegionsInfo;
  }

  // gcp_test_result_code - computed: false, optional: true, required: false
  private _gcpTestResultCode?: number; 
  public get gcpTestResultCode() {
    return this.getNumberAttribute('gcp_test_result_code');
  }
  public set gcpTestResultCode(value: number) {
    this._gcpTestResultCode = value;
  }
  public resetGcpTestResultCode() {
    this._gcpTestResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpTestResultCodeInput() {
    return this._gcpTestResultCode;
  }

  // group_status - computed: false, optional: true, required: false
  private _groupStatus?: string; 
  public get groupStatus() {
    return this.getStringAttribute('group_status');
  }
  public set groupStatus(value: string) {
    this._groupStatus = value;
  }
  public resetGroupStatus() {
    this._groupStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupStatusInput() {
    return this._groupStatus;
  }

  // group_type - computed: false, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
  }

  // has_netflow_enabled_devices - computed: false, optional: true, required: false
  private _hasNetflowEnabledDevices?: boolean | cdktf.IResolvable; 
  public get hasNetflowEnabledDevices() {
    return this.getBooleanAttribute('has_netflow_enabled_devices');
  }
  public set hasNetflowEnabledDevices(value: boolean | cdktf.IResolvable) {
    this._hasNetflowEnabledDevices = value;
  }
  public resetHasNetflowEnabledDevices() {
    this._hasNetflowEnabledDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasNetflowEnabledDevicesInput() {
    return this._hasNetflowEnabledDevices;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // num_of_a_w_s_devices - computed: false, optional: true, required: false
  private _numOfAWSDevices?: number; 
  public get numOfAWSDevices() {
    return this.getNumberAttribute('num_of_a_w_s_devices');
  }
  public set numOfAWSDevices(value: number) {
    this._numOfAWSDevices = value;
  }
  public resetNumOfAWSDevices() {
    this._numOfAWSDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfAWSDevicesInput() {
    return this._numOfAWSDevices;
  }

  // num_of_azure_devices - computed: false, optional: true, required: false
  private _numOfAzureDevices?: number; 
  public get numOfAzureDevices() {
    return this.getNumberAttribute('num_of_azure_devices');
  }
  public set numOfAzureDevices(value: number) {
    this._numOfAzureDevices = value;
  }
  public resetNumOfAzureDevices() {
    this._numOfAzureDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfAzureDevicesInput() {
    return this._numOfAzureDevices;
  }

  // num_of_direct_devices - computed: false, optional: true, required: false
  private _numOfDirectDevices?: number; 
  public get numOfDirectDevices() {
    return this.getNumberAttribute('num_of_direct_devices');
  }
  public set numOfDirectDevices(value: number) {
    this._numOfDirectDevices = value;
  }
  public resetNumOfDirectDevices() {
    this._numOfDirectDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfDirectDevicesInput() {
    return this._numOfDirectDevices;
  }

  // num_of_direct_sub_groups - computed: false, optional: true, required: false
  private _numOfDirectSubGroups?: number; 
  public get numOfDirectSubGroups() {
    return this.getNumberAttribute('num_of_direct_sub_groups');
  }
  public set numOfDirectSubGroups(value: number) {
    this._numOfDirectSubGroups = value;
  }
  public resetNumOfDirectSubGroups() {
    this._numOfDirectSubGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfDirectSubGroupsInput() {
    return this._numOfDirectSubGroups;
  }

  // num_of_gcp_devices - computed: false, optional: true, required: false
  private _numOfGcpDevices?: number; 
  public get numOfGcpDevices() {
    return this.getNumberAttribute('num_of_gcp_devices');
  }
  public set numOfGcpDevices(value: number) {
    this._numOfGcpDevices = value;
  }
  public resetNumOfGcpDevices() {
    this._numOfGcpDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfGcpDevicesInput() {
    return this._numOfGcpDevices;
  }

  // num_of_hosts - computed: false, optional: true, required: false
  private _numOfHosts?: number; 
  public get numOfHosts() {
    return this.getNumberAttribute('num_of_hosts');
  }
  public set numOfHosts(value: number) {
    this._numOfHosts = value;
  }
  public resetNumOfHosts() {
    this._numOfHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfHostsInput() {
    return this._numOfHosts;
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // sub_groups - computed: false, optional: true, required: false
  private _subGroups = new DataLogicmonitorDeviceGroupSubGroupsList(this, "sub_groups", false);
  public get subGroups() {
    return this._subGroups;
  }
  public putSubGroups(value: DataLogicmonitorDeviceGroupSubGroups[] | cdktf.IResolvable) {
    this._subGroups.internalValue = value;
  }
  public resetSubGroups() {
    this._subGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subGroupsInput() {
    return this._subGroups.internalValue;
  }

  // user_permission - computed: false, optional: true, required: false
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  public resetUserPermission() {
    this._userPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }

  // aws_test_result - computed: false, optional: true, required: false
  private _awsTestResult = new DataLogicmonitorDeviceGroupAwsTestResultList(this, "aws_test_result", false);
  public get awsTestResult() {
    return this._awsTestResult;
  }
  public putAwsTestResult(value: DataLogicmonitorDeviceGroupAwsTestResult[] | cdktf.IResolvable) {
    this._awsTestResult.internalValue = value;
  }
  public resetAwsTestResult() {
    this._awsTestResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTestResultInput() {
    return this._awsTestResult.internalValue;
  }

  // azure_test_result - computed: false, optional: true, required: false
  private _azureTestResult = new DataLogicmonitorDeviceGroupAzureTestResultList(this, "azure_test_result", false);
  public get azureTestResult() {
    return this._azureTestResult;
  }
  public putAzureTestResult(value: DataLogicmonitorDeviceGroupAzureTestResult[] | cdktf.IResolvable) {
    this._azureTestResult.internalValue = value;
  }
  public resetAzureTestResult() {
    this._azureTestResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTestResultInput() {
    return this._azureTestResult.internalValue;
  }

  // extra - computed: false, optional: true, required: false
  private _extra = new DataLogicmonitorDeviceGroupExtraList(this, "extra", false);
  public get extra() {
    return this._extra;
  }
  public putExtra(value: DataLogicmonitorDeviceGroupExtra[] | cdktf.IResolvable) {
    this._extra.internalValue = value;
  }
  public resetExtra() {
    this._extra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInput() {
    return this._extra.internalValue;
  }

  // gcp_test_result - computed: false, optional: true, required: false
  private _gcpTestResult = new DataLogicmonitorDeviceGroupGcpTestResultList(this, "gcp_test_result", false);
  public get gcpTestResult() {
    return this._gcpTestResult;
  }
  public putGcpTestResult(value: DataLogicmonitorDeviceGroupGcpTestResult[] | cdktf.IResolvable) {
    this._gcpTestResult.internalValue = value;
  }
  public resetGcpTestResult() {
    this._gcpTestResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpTestResultInput() {
    return this._gcpTestResult.internalValue;
  }

  // saas_test_result - computed: false, optional: true, required: false
  private _saasTestResult = new DataLogicmonitorDeviceGroupSaasTestResultList(this, "saas_test_result", false);
  public get saasTestResult() {
    return this._saasTestResult;
  }
  public putSaasTestResult(value: DataLogicmonitorDeviceGroupSaasTestResult[] | cdktf.IResolvable) {
    this._saasTestResult.internalValue = value;
  }
  public resetSaasTestResult() {
    this._saasTestResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasTestResultInput() {
    return this._saasTestResult.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applies_to: cdktf.stringToTerraform(this._appliesTo),
      aws_regions_info: cdktf.stringToTerraform(this._awsRegionsInfo),
      aws_test_result_code: cdktf.numberToTerraform(this._awsTestResultCode),
      azure_regions_info: cdktf.stringToTerraform(this._azureRegionsInfo),
      azure_test_result_code: cdktf.numberToTerraform(this._azureTestResultCode),
      created_on: cdktf.numberToTerraform(this._createdOn),
      custom_properties: cdktf.listMapper(dataLogicmonitorDeviceGroupCustomPropertiesToTerraform, false)(this._customProperties.internalValue),
      default_auto_balanced_collector_group_id: cdktf.numberToTerraform(this._defaultAutoBalancedCollectorGroupId),
      default_collector_description: cdktf.stringToTerraform(this._defaultCollectorDescription),
      default_collector_id: cdktf.numberToTerraform(this._defaultCollectorId),
      description: cdktf.stringToTerraform(this._description),
      disable_alerting: cdktf.booleanToTerraform(this._disableAlerting),
      effective_alert_enabled: cdktf.booleanToTerraform(this._effectiveAlertEnabled),
      enable_netflow: cdktf.booleanToTerraform(this._enableNetflow),
      filter: cdktf.stringToTerraform(this._filter),
      full_path: cdktf.stringToTerraform(this._fullPath),
      gcp_regions_info: cdktf.stringToTerraform(this._gcpRegionsInfo),
      gcp_test_result_code: cdktf.numberToTerraform(this._gcpTestResultCode),
      group_status: cdktf.stringToTerraform(this._groupStatus),
      group_type: cdktf.stringToTerraform(this._groupType),
      has_netflow_enabled_devices: cdktf.booleanToTerraform(this._hasNetflowEnabledDevices),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_of_a_w_s_devices: cdktf.numberToTerraform(this._numOfAWSDevices),
      num_of_azure_devices: cdktf.numberToTerraform(this._numOfAzureDevices),
      num_of_direct_devices: cdktf.numberToTerraform(this._numOfDirectDevices),
      num_of_direct_sub_groups: cdktf.numberToTerraform(this._numOfDirectSubGroups),
      num_of_gcp_devices: cdktf.numberToTerraform(this._numOfGcpDevices),
      num_of_hosts: cdktf.numberToTerraform(this._numOfHosts),
      parent_id: cdktf.numberToTerraform(this._parentId),
      sub_groups: cdktf.listMapper(dataLogicmonitorDeviceGroupSubGroupsToTerraform, false)(this._subGroups.internalValue),
      user_permission: cdktf.stringToTerraform(this._userPermission),
      aws_test_result: cdktf.listMapper(dataLogicmonitorDeviceGroupAwsTestResultToTerraform, true)(this._awsTestResult.internalValue),
      azure_test_result: cdktf.listMapper(dataLogicmonitorDeviceGroupAzureTestResultToTerraform, true)(this._azureTestResult.internalValue),
      extra: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraToTerraform, true)(this._extra.internalValue),
      gcp_test_result: cdktf.listMapper(dataLogicmonitorDeviceGroupGcpTestResultToTerraform, true)(this._gcpTestResult.internalValue),
      saas_test_result: cdktf.listMapper(dataLogicmonitorDeviceGroupSaasTestResultToTerraform, true)(this._saasTestResult.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applies_to: {
        value: cdktf.stringToHclTerraform(this._appliesTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_regions_info: {
        value: cdktf.stringToHclTerraform(this._awsRegionsInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_test_result_code: {
        value: cdktf.numberToHclTerraform(this._awsTestResultCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      azure_regions_info: {
        value: cdktf.stringToHclTerraform(this._azureRegionsInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_test_result_code: {
        value: cdktf.numberToHclTerraform(this._azureTestResultCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_on: {
        value: cdktf.numberToHclTerraform(this._createdOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_properties: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupCustomPropertiesToHclTerraform, false)(this._customProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceGroupCustomPropertiesList",
      },
      default_auto_balanced_collector_group_id: {
        value: cdktf.numberToHclTerraform(this._defaultAutoBalancedCollectorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_collector_description: {
        value: cdktf.stringToHclTerraform(this._defaultCollectorDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_collector_id: {
        value: cdktf.numberToHclTerraform(this._defaultCollectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_alerting: {
        value: cdktf.booleanToHclTerraform(this._disableAlerting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      effective_alert_enabled: {
        value: cdktf.booleanToHclTerraform(this._effectiveAlertEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_netflow: {
        value: cdktf.booleanToHclTerraform(this._enableNetflow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_path: {
        value: cdktf.stringToHclTerraform(this._fullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_regions_info: {
        value: cdktf.stringToHclTerraform(this._gcpRegionsInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_test_result_code: {
        value: cdktf.numberToHclTerraform(this._gcpTestResultCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_status: {
        value: cdktf.stringToHclTerraform(this._groupStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_netflow_enabled_devices: {
        value: cdktf.booleanToHclTerraform(this._hasNetflowEnabledDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_of_a_w_s_devices: {
        value: cdktf.numberToHclTerraform(this._numOfAWSDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_azure_devices: {
        value: cdktf.numberToHclTerraform(this._numOfAzureDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_direct_devices: {
        value: cdktf.numberToHclTerraform(this._numOfDirectDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_direct_sub_groups: {
        value: cdktf.numberToHclTerraform(this._numOfDirectSubGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_gcp_devices: {
        value: cdktf.numberToHclTerraform(this._numOfGcpDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_hosts: {
        value: cdktf.numberToHclTerraform(this._numOfHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sub_groups: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupSubGroupsToHclTerraform, false)(this._subGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceGroupSubGroupsList",
      },
      user_permission: {
        value: cdktf.stringToHclTerraform(this._userPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_test_result: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupAwsTestResultToHclTerraform, true)(this._awsTestResult.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceGroupAwsTestResultList",
      },
      azure_test_result: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupAzureTestResultToHclTerraform, true)(this._azureTestResult.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceGroupAzureTestResultList",
      },
      extra: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraToHclTerraform, true)(this._extra.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceGroupExtraList",
      },
      gcp_test_result: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupGcpTestResultToHclTerraform, true)(this._gcpTestResult.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceGroupGcpTestResultList",
      },
      saas_test_result: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupSaasTestResultToHclTerraform, true)(this._saasTestResult.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceGroupSaasTestResultList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
