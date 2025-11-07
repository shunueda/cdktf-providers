// generated from terraform resource schema

import { DeviceGroupAwsTestResultList, 
DeviceGroupAzureTestResultList, 
DeviceGroupCustomProperties, 
deviceGroupCustomPropertiesToTerraform, 
deviceGroupCustomPropertiesToHclTerraform, 
DeviceGroupCustomPropertiesList, 
DeviceGroupGcpTestResultList, 
DeviceGroupSaasTestResultList, 
DeviceGroupSubGroupsList, 
DeviceGroupExtra, 
deviceGroupExtraToTerraform, 
deviceGroupExtraToHclTerraform, 
DeviceGroupExtraList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#applies_to DeviceGroup#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#custom_properties DeviceGroup#custom_properties}
  */
  readonly customProperties?: DeviceGroupCustomProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#default_auto_balanced_collector_group_id DeviceGroup#default_auto_balanced_collector_group_id}
  */
  readonly defaultAutoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#default_collector_id DeviceGroup#default_collector_id}
  */
  readonly defaultCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#description DeviceGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#disable_alerting DeviceGroup#disable_alerting}
  */
  readonly disableAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#enable_netflow DeviceGroup#enable_netflow}
  */
  readonly enableNetflow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#group_type DeviceGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#name DeviceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#parent_id DeviceGroup#parent_id}
  */
  readonly parentId?: number;
  /**
  * extra block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#extra DeviceGroup#extra}
  */
  readonly extra?: DeviceGroupExtra[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group logicmonitor_device_group}
*/
export class DeviceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_device_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceGroup to import
  * @param importFromId The id of the existing DeviceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_device_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group logicmonitor_device_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceGroupConfig) {
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
    this._customProperties.internalValue = config.customProperties;
    this._defaultAutoBalancedCollectorGroupId = config.defaultAutoBalancedCollectorGroupId;
    this._defaultCollectorId = config.defaultCollectorId;
    this._description = config.description;
    this._disableAlerting = config.disableAlerting;
    this._enableNetflow = config.enableNetflow;
    this._groupType = config.groupType;
    this._name = config.name;
    this._parentId = config.parentId;
    this._extra.internalValue = config.extra;
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

  // aws_regions_info - computed: true, optional: false, required: false
  public get awsRegionsInfo() {
    return this.getStringAttribute('aws_regions_info');
  }

  // aws_test_result - computed: true, optional: false, required: false
  private _awsTestResult = new DeviceGroupAwsTestResultList(this, "aws_test_result", false);
  public get awsTestResult() {
    return this._awsTestResult;
  }

  // aws_test_result_code - computed: true, optional: false, required: false
  public get awsTestResultCode() {
    return this.getNumberAttribute('aws_test_result_code');
  }

  // azure_regions_info - computed: true, optional: false, required: false
  public get azureRegionsInfo() {
    return this.getStringAttribute('azure_regions_info');
  }

  // azure_test_result - computed: true, optional: false, required: false
  private _azureTestResult = new DeviceGroupAzureTestResultList(this, "azure_test_result", false);
  public get azureTestResult() {
    return this._azureTestResult;
  }

  // azure_test_result_code - computed: true, optional: false, required: false
  public get azureTestResultCode() {
    return this.getNumberAttribute('azure_test_result_code');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new DeviceGroupCustomPropertiesList(this, "custom_properties", true);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: DeviceGroupCustomProperties[] | cdktf.IResolvable) {
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

  // default_collector_description - computed: true, optional: false, required: false
  public get defaultCollectorDescription() {
    return this.getStringAttribute('default_collector_description');
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

  // effective_alert_enabled - computed: true, optional: false, required: false
  public get effectiveAlertEnabled() {
    return this.getBooleanAttribute('effective_alert_enabled');
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

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }

  // gcp_regions_info - computed: true, optional: false, required: false
  public get gcpRegionsInfo() {
    return this.getStringAttribute('gcp_regions_info');
  }

  // gcp_test_result - computed: true, optional: false, required: false
  private _gcpTestResult = new DeviceGroupGcpTestResultList(this, "gcp_test_result", false);
  public get gcpTestResult() {
    return this._gcpTestResult;
  }

  // gcp_test_result_code - computed: true, optional: false, required: false
  public get gcpTestResultCode() {
    return this.getNumberAttribute('gcp_test_result_code');
  }

  // group_status - computed: true, optional: false, required: false
  public get groupStatus() {
    return this.getStringAttribute('group_status');
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

  // has_netflow_enabled_devices - computed: true, optional: false, required: false
  public get hasNetflowEnabledDevices() {
    return this.getBooleanAttribute('has_netflow_enabled_devices');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // num_of_a_w_s_devices - computed: true, optional: false, required: false
  public get numOfAWSDevices() {
    return this.getNumberAttribute('num_of_a_w_s_devices');
  }

  // num_of_azure_devices - computed: true, optional: false, required: false
  public get numOfAzureDevices() {
    return this.getNumberAttribute('num_of_azure_devices');
  }

  // num_of_direct_devices - computed: true, optional: false, required: false
  public get numOfDirectDevices() {
    return this.getNumberAttribute('num_of_direct_devices');
  }

  // num_of_direct_sub_groups - computed: true, optional: false, required: false
  public get numOfDirectSubGroups() {
    return this.getNumberAttribute('num_of_direct_sub_groups');
  }

  // num_of_gcp_devices - computed: true, optional: false, required: false
  public get numOfGcpDevices() {
    return this.getNumberAttribute('num_of_gcp_devices');
  }

  // num_of_hosts - computed: true, optional: false, required: false
  public get numOfHosts() {
    return this.getNumberAttribute('num_of_hosts');
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

  // saas_test_result - computed: true, optional: false, required: false
  private _saasTestResult = new DeviceGroupSaasTestResultList(this, "saas_test_result", false);
  public get saasTestResult() {
    return this._saasTestResult;
  }

  // sub_groups - computed: true, optional: false, required: false
  private _subGroups = new DeviceGroupSubGroupsList(this, "sub_groups", false);
  public get subGroups() {
    return this._subGroups;
  }

  // user_permission - computed: true, optional: false, required: false
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }

  // extra - computed: false, optional: true, required: false
  private _extra = new DeviceGroupExtraList(this, "extra", false);
  public get extra() {
    return this._extra;
  }
  public putExtra(value: DeviceGroupExtra[] | cdktf.IResolvable) {
    this._extra.internalValue = value;
  }
  public resetExtra() {
    this._extra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInput() {
    return this._extra.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applies_to: cdktf.stringToTerraform(this._appliesTo),
      custom_properties: cdktf.listMapper(deviceGroupCustomPropertiesToTerraform, false)(this._customProperties.internalValue),
      default_auto_balanced_collector_group_id: cdktf.numberToTerraform(this._defaultAutoBalancedCollectorGroupId),
      default_collector_id: cdktf.numberToTerraform(this._defaultCollectorId),
      description: cdktf.stringToTerraform(this._description),
      disable_alerting: cdktf.booleanToTerraform(this._disableAlerting),
      enable_netflow: cdktf.booleanToTerraform(this._enableNetflow),
      group_type: cdktf.stringToTerraform(this._groupType),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.numberToTerraform(this._parentId),
      extra: cdktf.listMapper(deviceGroupExtraToTerraform, true)(this._extra.internalValue),
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
      custom_properties: {
        value: cdktf.listMapperHcl(deviceGroupCustomPropertiesToHclTerraform, false)(this._customProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeviceGroupCustomPropertiesList",
      },
      default_auto_balanced_collector_group_id: {
        value: cdktf.numberToHclTerraform(this._defaultAutoBalancedCollectorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      enable_netflow: {
        value: cdktf.booleanToHclTerraform(this._enableNetflow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
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
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extra: {
        value: cdktf.listMapperHcl(deviceGroupExtraToHclTerraform, true)(this._extra.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceGroupExtraList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
