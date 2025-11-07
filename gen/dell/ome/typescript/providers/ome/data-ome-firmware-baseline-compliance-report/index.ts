// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_baseline_compliance_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeFirmwareBaselineComplianceReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Baseline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_baseline_compliance_report#baseline_name DataOmeFirmwareBaselineComplianceReport#baseline_name}
  */
  readonly baselineName: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_baseline_compliance_report#filter DataOmeFirmwareBaselineComplianceReport#filter}
  */
  readonly filter?: DataOmeFirmwareBaselineComplianceReportFilter;
}
export interface DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependencies {
}

export function dataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependenciesToTerraform(struct?: DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependenciesToHclTerraform(struct?: DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_dependency_id - computed: true, optional: false, required: false
  public get complianceDependencyId() {
    return this.getStringAttribute('compliance_dependency_id');
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

export class DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependenciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependenciesOutputReference {
    return new DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReports {
}

export function dataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsToTerraform(struct?: DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsToHclTerraform(struct?: DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_dependencies - computed: true, optional: false, required: false
  private _complianceDependencies = new DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsComplianceDependenciesList(this, "compliance_dependencies", false);
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

export class DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsOutputReference {
    return new DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReports {
}

export function dataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsToTerraform(struct?: DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsToHclTerraform(struct?: DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReports | undefined) {
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
  private _componentComplianceReports = new DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsComponentComplianceReportsList(this, "component_compliance_reports", false);
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

export class DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsOutputReference {
    return new DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeFirmwareBaselineComplianceReportFilter {
  /**
  * Firmware Baseline Compliance Reports with filter key and value pair. Supported filter keys are: DeviceName, DeviceModel, ServiceTag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_baseline_compliance_report#key DataOmeFirmwareBaselineComplianceReport#key}
  */
  readonly key?: string;
  /**
  * The value for the filter key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_baseline_compliance_report#value DataOmeFirmwareBaselineComplianceReport#value}
  */
  readonly value?: string;
}

export function dataOmeFirmwareBaselineComplianceReportFilterToTerraform(struct?: DataOmeFirmwareBaselineComplianceReportFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataOmeFirmwareBaselineComplianceReportFilterToHclTerraform(struct?: DataOmeFirmwareBaselineComplianceReportFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOmeFirmwareBaselineComplianceReportFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeFirmwareBaselineComplianceReportFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeFirmwareBaselineComplianceReportFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_baseline_compliance_report ome_firmware_baseline_compliance_report}
*/
export class DataOmeFirmwareBaselineComplianceReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_firmware_baseline_compliance_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeFirmwareBaselineComplianceReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeFirmwareBaselineComplianceReport to import
  * @param importFromId The id of the existing DataOmeFirmwareBaselineComplianceReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_baseline_compliance_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeFirmwareBaselineComplianceReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_firmware_baseline_compliance_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_baseline_compliance_report ome_firmware_baseline_compliance_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeFirmwareBaselineComplianceReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOmeFirmwareBaselineComplianceReportConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_firmware_baseline_compliance_report',
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
    this._baselineName = config.baselineName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_name - computed: false, optional: false, required: true
  private _baselineName?: string; 
  public get baselineName() {
    return this.getStringAttribute('baseline_name');
  }
  public set baselineName(value: string) {
    this._baselineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineNameInput() {
    return this._baselineName;
  }

  // firmware_compliance_reports - computed: true, optional: false, required: false
  private _firmwareComplianceReports = new DataOmeFirmwareBaselineComplianceReportFirmwareComplianceReportsList(this, "firmware_compliance_reports", false);
  public get firmwareComplianceReports() {
    return this._firmwareComplianceReports;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOmeFirmwareBaselineComplianceReportFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOmeFirmwareBaselineComplianceReportFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline_name: cdktf.stringToTerraform(this._baselineName),
      filter: dataOmeFirmwareBaselineComplianceReportFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline_name: {
        value: cdktf.stringToHclTerraform(this._baselineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataOmeFirmwareBaselineComplianceReportFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOmeFirmwareBaselineComplianceReportFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
