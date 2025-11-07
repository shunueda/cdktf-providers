// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device_compliance_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeDeviceComplianceReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group names is the list of group names that you want to that you want get the compliance report for. One of device_ids or device_service_tags or device_group_names is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device_compliance_report#device_group_names DataOmeDeviceComplianceReport#device_group_names}
  */
  readonly deviceGroupNames?: string[];
  /**
  * Device Ids is the list of device ids that you want get the compliance report for. One of device_ids or device_service_tags or device_group_names is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device_compliance_report#device_ids DataOmeDeviceComplianceReport#device_ids}
  */
  readonly deviceIds?: number[];
  /**
  * Device service tags is the list of device service tags that you want get the compliance report for. One of device_ids or device_service_tags or device_group_names is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device_compliance_report#device_service_tags DataOmeDeviceComplianceReport#device_service_tags}
  */
  readonly deviceServiceTags?: string[];
}
export interface DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependencies {
}

export function dataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependenciesToTerraform(struct?: DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependenciesToHclTerraform(struct?: DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_dependency_id - computed: true, optional: false, required: false
  public get complianceDependencyId() {
    return this.getNumberAttribute('compliance_dependency_id');
  }

  // is_hard_dependency - computed: true, optional: false, required: false
  public get isHardDependency() {
    return this.getBooleanAttribute('is_hard_dependency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // reboot_required - computed: true, optional: false, required: false
  public get rebootRequired() {
    return this.getBooleanAttribute('reboot_required');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // unique_identifier - computed: true, optional: false, required: false
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // update_action - computed: true, optional: false, required: false
  public get updateAction() {
    return this.getStringAttribute('update_action');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependenciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependenciesOutputReference {
    return new DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReports {
}

export function dataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsToTerraform(struct?: DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsToHclTerraform(struct?: DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_dependencies - computed: true, optional: false, required: false
  private _complianceDependencies = new DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsComplianceDependenciesList(this, "compliance_dependencies", false);
  public get complianceDependencies() {
    return this._complianceDependencies;
  }

  // compliance_status - computed: true, optional: false, required: false
  public get complianceStatus() {
    return this.getStringAttribute('compliance_status');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // criticality - computed: true, optional: false, required: false
  public get criticality() {
    return this.getStringAttribute('criticality');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // dependency_upgrade_required - computed: true, optional: false, required: false
  public get dependencyUpgradeRequired() {
    return this.getBooleanAttribute('dependency_upgrade_required');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // impact_assessment - computed: true, optional: false, required: false
  public get impactAssessment() {
    return this.getStringAttribute('impact_assessment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // prerequisite_info - computed: true, optional: false, required: false
  public get prerequisiteInfo() {
    return this.getStringAttribute('prerequisite_info');
  }

  // reboot_required - computed: true, optional: false, required: false
  public get rebootRequired() {
    return this.getBooleanAttribute('reboot_required');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // target_identifier - computed: true, optional: false, required: false
  public get targetIdentifier() {
    return this.getStringAttribute('target_identifier');
  }

  // unique_identifier - computed: true, optional: false, required: false
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // update_action - computed: true, optional: false, required: false
  public get updateAction() {
    return this.getStringAttribute('update_action');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsOutputReference {
    return new DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceComplianceReportDeviceComplianceReports {
}

export function dataOmeDeviceComplianceReportDeviceComplianceReportsToTerraform(struct?: DataOmeDeviceComplianceReportDeviceComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceComplianceReportDeviceComplianceReportsToHclTerraform(struct?: DataOmeDeviceComplianceReportDeviceComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceComplianceReportDeviceComplianceReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceComplianceReportDeviceComplianceReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceComplianceReportDeviceComplianceReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_status - computed: true, optional: false, required: false
  public get complianceStatus() {
    return this.getStringAttribute('compliance_status');
  }

  // component_compliance_reports - computed: true, optional: false, required: false
  private _componentComplianceReports = new DataOmeDeviceComplianceReportDeviceComplianceReportsComponentComplianceReportsList(this, "component_compliance_reports", false);
  public get componentComplianceReports() {
    return this._componentComplianceReports;
  }

  // device_firmware_update_capable - computed: true, optional: false, required: false
  public get deviceFirmwareUpdateCapable() {
    return this.getBooleanAttribute('device_firmware_update_capable');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // device_type_id - computed: true, optional: false, required: false
  public get deviceTypeId() {
    return this.getNumberAttribute('device_type_id');
  }

  // device_type_name - computed: true, optional: false, required: false
  public get deviceTypeName() {
    return this.getStringAttribute('device_type_name');
  }

  // device_user_firmware_update_capable - computed: true, optional: false, required: false
  public get deviceUserFirmwareUpdateCapable() {
    return this.getBooleanAttribute('device_user_firmware_update_capable');
  }

  // firmware_status - computed: true, optional: false, required: false
  public get firmwareStatus() {
    return this.getStringAttribute('firmware_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // reboot_required - computed: true, optional: false, required: false
  public get rebootRequired() {
    return this.getBooleanAttribute('reboot_required');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }
}

export class DataOmeDeviceComplianceReportDeviceComplianceReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceComplianceReportDeviceComplianceReportsOutputReference {
    return new DataOmeDeviceComplianceReportDeviceComplianceReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device_compliance_report ome_device_compliance_report}
*/
export class DataOmeDeviceComplianceReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_device_compliance_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeDeviceComplianceReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeDeviceComplianceReport to import
  * @param importFromId The id of the existing DataOmeDeviceComplianceReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device_compliance_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeDeviceComplianceReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_device_compliance_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device_compliance_report ome_device_compliance_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeDeviceComplianceReportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOmeDeviceComplianceReportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ome_device_compliance_report',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceGroupNames = config.deviceGroupNames;
    this._deviceIds = config.deviceIds;
    this._deviceServiceTags = config.deviceServiceTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_compliance_reports - computed: true, optional: false, required: false
  private _deviceComplianceReports = new DataOmeDeviceComplianceReportDeviceComplianceReportsList(this, "device_compliance_reports", false);
  public get deviceComplianceReports() {
    return this._deviceComplianceReports;
  }

  // device_group_names - computed: false, optional: true, required: false
  private _deviceGroupNames?: string[]; 
  public get deviceGroupNames() {
    return this.getListAttribute('device_group_names');
  }
  public set deviceGroupNames(value: string[]) {
    this._deviceGroupNames = value;
  }
  public resetDeviceGroupNames() {
    this._deviceGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupNamesInput() {
    return this._deviceGroupNames;
  }

  // device_ids - computed: false, optional: true, required: false
  private _deviceIds?: number[]; 
  public get deviceIds() {
    return this.getNumberListAttribute('device_ids');
  }
  public set deviceIds(value: number[]) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // device_service_tags - computed: false, optional: true, required: false
  private _deviceServiceTags?: string[]; 
  public get deviceServiceTags() {
    return this.getListAttribute('device_service_tags');
  }
  public set deviceServiceTags(value: string[]) {
    this._deviceServiceTags = value;
  }
  public resetDeviceServiceTags() {
    this._deviceServiceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceServiceTagsInput() {
    return this._deviceServiceTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceGroupNames),
      device_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._deviceIds),
      device_service_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceServiceTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._deviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      device_service_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceServiceTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
