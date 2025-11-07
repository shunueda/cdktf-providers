// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexComplianceReportResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#filter DataPowerflexComplianceReportResourceGroup#filter}
  */
  readonly filter?: DataPowerflexComplianceReportResourceGroupFilter;
}
export interface DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsCurrentVersion {
}

export function dataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsCurrentVersionToTerraform(struct?: DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsCurrentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsCurrentVersionToHclTerraform(struct?: DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsCurrentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsCurrentVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsCurrentVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsCurrentVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // firmware_last_update - computed: true, optional: false, required: false
  public get firmwareLastUpdate() {
    return this.getStringAttribute('firmware_last_update');
  }

  // firmware_level - computed: true, optional: false, required: false
  public get firmwareLevel() {
    return this.getStringAttribute('firmware_level');
  }

  // firmware_name - computed: true, optional: false, required: false
  public get firmwareName() {
    return this.getStringAttribute('firmware_name');
  }

  // firmware_type - computed: true, optional: false, required: false
  public get firmwareType() {
    return this.getStringAttribute('firmware_type');
  }

  // firmware_version - computed: true, optional: false, required: false
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsTargetVersion {
}

export function dataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsTargetVersionToTerraform(struct?: DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsTargetVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsTargetVersionToHclTerraform(struct?: DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsTargetVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsTargetVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsTargetVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsTargetVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // firmware_last_update - computed: true, optional: false, required: false
  public get firmwareLastUpdate() {
    return this.getStringAttribute('firmware_last_update');
  }

  // firmware_level - computed: true, optional: false, required: false
  public get firmwareLevel() {
    return this.getStringAttribute('firmware_level');
  }

  // firmware_name - computed: true, optional: false, required: false
  public get firmwareName() {
    return this.getStringAttribute('firmware_name');
  }

  // firmware_type - computed: true, optional: false, required: false
  public get firmwareType() {
    return this.getStringAttribute('firmware_type');
  }

  // firmware_version - computed: true, optional: false, required: false
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponents {
}

export function dataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsToTerraform(struct?: DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsToHclTerraform(struct?: DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliant - computed: true, optional: false, required: false
  public get compliant() {
    return this.getBooleanAttribute('compliant');
  }

  // current_version - computed: true, optional: false, required: false
  private _currentVersion = new DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsCurrentVersionOutputReference(this, "current_version");
  public get currentVersion() {
    return this._currentVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // os_compatible - computed: true, optional: false, required: false
  public get osCompatible() {
    return this.getBooleanAttribute('os_compatible');
  }

  // rpm - computed: true, optional: false, required: false
  public get rpm() {
    return this.getBooleanAttribute('rpm');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getBooleanAttribute('software');
  }

  // target_version - computed: true, optional: false, required: false
  private _targetVersion = new DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsTargetVersionOutputReference(this, "target_version");
  public get targetVersion() {
    return this._targetVersion;
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsOutputReference {
    return new DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexComplianceReportResourceGroupComplianceReports {
}

export function dataPowerflexComplianceReportResourceGroupComplianceReportsToTerraform(struct?: DataPowerflexComplianceReportResourceGroupComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexComplianceReportResourceGroupComplianceReportsToHclTerraform(struct?: DataPowerflexComplianceReportResourceGroupComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexComplianceReportResourceGroupComplianceReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexComplianceReportResourceGroupComplianceReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexComplianceReportResourceGroupComplianceReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // can_update - computed: true, optional: false, required: false
  public get canUpdate() {
    return this.getBooleanAttribute('can_update');
  }

  // compliant - computed: true, optional: false, required: false
  public get compliant() {
    return this.getBooleanAttribute('compliant');
  }

  // device_state - computed: true, optional: false, required: false
  public get deviceState() {
    return this.getStringAttribute('device_state');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // embedded_report - computed: true, optional: false, required: false
  public get embeddedReport() {
    return this.getBooleanAttribute('embedded_report');
  }

  // firmware_compliance_report_components - computed: true, optional: false, required: false
  private _firmwareComplianceReportComponents = new DataPowerflexComplianceReportResourceGroupComplianceReportsFirmwareComplianceReportComponentsList(this, "firmware_compliance_report_components", false);
  public get firmwareComplianceReportComponents() {
    return this._firmwareComplianceReportComponents;
  }

  // firmware_repository_name - computed: true, optional: false, required: false
  public get firmwareRepositoryName() {
    return this.getStringAttribute('firmware_repository_name');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // managed_state - computed: true, optional: false, required: false
  public get managedState() {
    return this.getStringAttribute('managed_state');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }
}

export class DataPowerflexComplianceReportResourceGroupComplianceReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexComplianceReportResourceGroupComplianceReportsOutputReference {
    return new DataPowerflexComplianceReportResourceGroupComplianceReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexComplianceReportResourceGroupFilter {
  /**
  * Value for available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#available DataPowerflexComplianceReportResourceGroup#available}
  */
  readonly available?: boolean | cdktf.IResolvable;
  /**
  * Value for can_update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#can_update DataPowerflexComplianceReportResourceGroup#can_update}
  */
  readonly canUpdate?: boolean | cdktf.IResolvable;
  /**
  * Value for compliant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#compliant DataPowerflexComplianceReportResourceGroup#compliant}
  */
  readonly compliant?: boolean | cdktf.IResolvable;
  /**
  * List of device_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#device_state DataPowerflexComplianceReportResourceGroup#device_state}
  */
  readonly deviceState?: string[];
  /**
  * List of device_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#device_type DataPowerflexComplianceReportResourceGroup#device_type}
  */
  readonly deviceType?: string[];
  /**
  * Value for embedded_report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#embedded_report DataPowerflexComplianceReportResourceGroup#embedded_report}
  */
  readonly embeddedReport?: boolean | cdktf.IResolvable;
  /**
  * List of firmware_repository_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#firmware_repository_name DataPowerflexComplianceReportResourceGroup#firmware_repository_name}
  */
  readonly firmwareRepositoryName?: string[];
  /**
  * List of host_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#host_name DataPowerflexComplianceReportResourceGroup#host_name}
  */
  readonly hostName?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#id DataPowerflexComplianceReportResourceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of ip_address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#ip_address DataPowerflexComplianceReportResourceGroup#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * List of managed_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#managed_state DataPowerflexComplianceReportResourceGroup#managed_state}
  */
  readonly managedState?: string[];
  /**
  * List of model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#model DataPowerflexComplianceReportResourceGroup#model}
  */
  readonly model?: string[];
  /**
  * List of service_tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#service_tag DataPowerflexComplianceReportResourceGroup#service_tag}
  */
  readonly serviceTag?: string[];
}

export function dataPowerflexComplianceReportResourceGroupFilterToTerraform(struct?: DataPowerflexComplianceReportResourceGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available: cdktf.booleanToTerraform(struct!.available),
    can_update: cdktf.booleanToTerraform(struct!.canUpdate),
    compliant: cdktf.booleanToTerraform(struct!.compliant),
    device_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceState),
    device_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceType),
    embedded_report: cdktf.booleanToTerraform(struct!.embeddedReport),
    firmware_repository_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.firmwareRepositoryName),
    host_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostName),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddress),
    managed_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedState),
    model: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.model),
    service_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceTag),
  }
}


export function dataPowerflexComplianceReportResourceGroupFilterToHclTerraform(struct?: DataPowerflexComplianceReportResourceGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available: {
      value: cdktf.booleanToHclTerraform(struct!.available),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_update: {
      value: cdktf.booleanToHclTerraform(struct!.canUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compliant: {
      value: cdktf.booleanToHclTerraform(struct!.compliant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    device_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    embedded_report: {
      value: cdktf.booleanToHclTerraform(struct!.embeddedReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firmware_repository_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.firmwareRepositoryName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    host_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    managed_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    model: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.model),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceTag),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexComplianceReportResourceGroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexComplianceReportResourceGroupFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._available !== undefined) {
      hasAnyValues = true;
      internalValueResult.available = this._available;
    }
    if (this._canUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.canUpdate = this._canUpdate;
    }
    if (this._compliant !== undefined) {
      hasAnyValues = true;
      internalValueResult.compliant = this._compliant;
    }
    if (this._deviceState !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceState = this._deviceState;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._embeddedReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddedReport = this._embeddedReport;
    }
    if (this._firmwareRepositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmwareRepositoryName = this._firmwareRepositoryName;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._managedState !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedState = this._managedState;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._serviceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexComplianceReportResourceGroupFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._available = undefined;
      this._canUpdate = undefined;
      this._compliant = undefined;
      this._deviceState = undefined;
      this._deviceType = undefined;
      this._embeddedReport = undefined;
      this._firmwareRepositoryName = undefined;
      this._hostName = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
      this._managedState = undefined;
      this._model = undefined;
      this._serviceTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._available = value.available;
      this._canUpdate = value.canUpdate;
      this._compliant = value.compliant;
      this._deviceState = value.deviceState;
      this._deviceType = value.deviceType;
      this._embeddedReport = value.embeddedReport;
      this._firmwareRepositoryName = value.firmwareRepositoryName;
      this._hostName = value.hostName;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
      this._managedState = value.managedState;
      this._model = value.model;
      this._serviceTag = value.serviceTag;
    }
  }

  // available - computed: false, optional: true, required: false
  private _available?: boolean | cdktf.IResolvable; 
  public get available() {
    return this.getBooleanAttribute('available');
  }
  public set available(value: boolean | cdktf.IResolvable) {
    this._available = value;
  }
  public resetAvailable() {
    this._available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableInput() {
    return this._available;
  }

  // can_update - computed: false, optional: true, required: false
  private _canUpdate?: boolean | cdktf.IResolvable; 
  public get canUpdate() {
    return this.getBooleanAttribute('can_update');
  }
  public set canUpdate(value: boolean | cdktf.IResolvable) {
    this._canUpdate = value;
  }
  public resetCanUpdate() {
    this._canUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUpdateInput() {
    return this._canUpdate;
  }

  // compliant - computed: false, optional: true, required: false
  private _compliant?: boolean | cdktf.IResolvable; 
  public get compliant() {
    return this.getBooleanAttribute('compliant');
  }
  public set compliant(value: boolean | cdktf.IResolvable) {
    this._compliant = value;
  }
  public resetCompliant() {
    this._compliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compliantInput() {
    return this._compliant;
  }

  // device_state - computed: false, optional: true, required: false
  private _deviceState?: string[]; 
  public get deviceState() {
    return cdktf.Fn.tolist(this.getListAttribute('device_state'));
  }
  public set deviceState(value: string[]) {
    this._deviceState = value;
  }
  public resetDeviceState() {
    this._deviceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceStateInput() {
    return this._deviceState;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string[]; 
  public get deviceType() {
    return cdktf.Fn.tolist(this.getListAttribute('device_type'));
  }
  public set deviceType(value: string[]) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // embedded_report - computed: false, optional: true, required: false
  private _embeddedReport?: boolean | cdktf.IResolvable; 
  public get embeddedReport() {
    return this.getBooleanAttribute('embedded_report');
  }
  public set embeddedReport(value: boolean | cdktf.IResolvable) {
    this._embeddedReport = value;
  }
  public resetEmbeddedReport() {
    this._embeddedReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedReportInput() {
    return this._embeddedReport;
  }

  // firmware_repository_name - computed: false, optional: true, required: false
  private _firmwareRepositoryName?: string[]; 
  public get firmwareRepositoryName() {
    return cdktf.Fn.tolist(this.getListAttribute('firmware_repository_name'));
  }
  public set firmwareRepositoryName(value: string[]) {
    this._firmwareRepositoryName = value;
  }
  public resetFirmwareRepositoryName() {
    this._firmwareRepositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareRepositoryNameInput() {
    return this._firmwareRepositoryName;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string[]; 
  public get hostName() {
    return cdktf.Fn.tolist(this.getListAttribute('host_name'));
  }
  public set hostName(value: string[]) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_address'));
  }
  public set ipAddress(value: string[]) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // managed_state - computed: false, optional: true, required: false
  private _managedState?: string[]; 
  public get managedState() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_state'));
  }
  public set managedState(value: string[]) {
    this._managedState = value;
  }
  public resetManagedState() {
    this._managedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedStateInput() {
    return this._managedState;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string[]; 
  public get model() {
    return cdktf.Fn.tolist(this.getListAttribute('model'));
  }
  public set model(value: string[]) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // service_tag - computed: false, optional: true, required: false
  private _serviceTag?: string[]; 
  public get serviceTag() {
    return cdktf.Fn.tolist(this.getListAttribute('service_tag'));
  }
  public set serviceTag(value: string[]) {
    this._serviceTag = value;
  }
  public resetServiceTag() {
    this._serviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group powerflex_compliance_report_resource_group}
*/
export class DataPowerflexComplianceReportResourceGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_compliance_report_resource_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexComplianceReportResourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexComplianceReportResourceGroup to import
  * @param importFromId The id of the existing DataPowerflexComplianceReportResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexComplianceReportResourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_compliance_report_resource_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/compliance_report_resource_group powerflex_compliance_report_resource_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexComplianceReportResourceGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexComplianceReportResourceGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_compliance_report_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliance_reports - computed: true, optional: false, required: false
  private _complianceReports = new DataPowerflexComplianceReportResourceGroupComplianceReportsList(this, "compliance_reports", false);
  public get complianceReports() {
    return this._complianceReports;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexComplianceReportResourceGroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexComplianceReportResourceGroupFilter) {
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
      filter: dataPowerflexComplianceReportResourceGroupFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexComplianceReportResourceGroupFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexComplianceReportResourceGroupFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
