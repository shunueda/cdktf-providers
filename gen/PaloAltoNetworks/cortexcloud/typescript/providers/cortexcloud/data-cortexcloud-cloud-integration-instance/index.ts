// https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCortexcloudCloudIntegrationInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instance#id DataCortexcloudCloudIntegrationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesRegistryScanningOptions {
}

export function dataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesRegistryScanningOptionsToTerraform(struct?: DataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesRegistryScanningOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesRegistryScanningOptionsToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesRegistryScanningOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesRegistryScanningOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesRegistryScanningOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesRegistryScanningOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_days - computed: true, optional: false, required: false
  public get lastDays() {
    return this.getNumberAttribute('last_days');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCortexcloudCloudIntegrationInstanceAdditionalCapabilities {
}

export function dataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesToTerraform(struct?: DataCortexcloudCloudIntegrationInstanceAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstanceAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCortexcloudCloudIntegrationInstanceAdditionalCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstanceAdditionalCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentless_disk_scanning - computed: true, optional: false, required: false
  public get agentlessDiskScanning() {
    return this.getBooleanAttribute('agentless_disk_scanning');
  }

  // data_security_posture_management - computed: true, optional: false, required: false
  public get dataSecurityPostureManagement() {
    return this.getBooleanAttribute('data_security_posture_management');
  }

  // registry_scanning - computed: true, optional: false, required: false
  public get registryScanning() {
    return this.getBooleanAttribute('registry_scanning');
  }

  // registry_scanning_options - computed: true, optional: false, required: false
  private _registryScanningOptions = new DataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesRegistryScanningOptionsOutputReference(this, "registry_scanning_options");
  public get registryScanningOptions() {
    return this._registryScanningOptions;
  }

  // serverless_scanning - computed: true, optional: false, required: false
  public get serverlessScanning() {
    return this.getBooleanAttribute('serverless_scanning');
  }

  // xsiam_analytics - computed: true, optional: false, required: false
  public get xsiamAnalytics() {
    return this.getBooleanAttribute('xsiam_analytics');
  }
}
export interface DataCortexcloudCloudIntegrationInstanceCollectionConfigurationAuditLogs {
}

export function dataCortexcloudCloudIntegrationInstanceCollectionConfigurationAuditLogsToTerraform(struct?: DataCortexcloudCloudIntegrationInstanceCollectionConfigurationAuditLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstanceCollectionConfigurationAuditLogsToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstanceCollectionConfigurationAuditLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstanceCollectionConfigurationAuditLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCortexcloudCloudIntegrationInstanceCollectionConfigurationAuditLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstanceCollectionConfigurationAuditLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection_method - computed: true, optional: false, required: false
  public get collectionMethod() {
    return this.getStringAttribute('collection_method');
  }

  // data_events - computed: true, optional: false, required: false
  public get dataEvents() {
    return this.getBooleanAttribute('data_events');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataCortexcloudCloudIntegrationInstanceCollectionConfiguration {
}

export function dataCortexcloudCloudIntegrationInstanceCollectionConfigurationToTerraform(struct?: DataCortexcloudCloudIntegrationInstanceCollectionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstanceCollectionConfigurationToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstanceCollectionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstanceCollectionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCortexcloudCloudIntegrationInstanceCollectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstanceCollectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_logs - computed: true, optional: false, required: false
  private _auditLogs = new DataCortexcloudCloudIntegrationInstanceCollectionConfigurationAuditLogsOutputReference(this, "audit_logs");
  public get auditLogs() {
    return this._auditLogs;
  }
}
export interface DataCortexcloudCloudIntegrationInstanceCustomResourcesTags {
}

export function dataCortexcloudCloudIntegrationInstanceCustomResourcesTagsToTerraform(struct?: DataCortexcloudCloudIntegrationInstanceCustomResourcesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstanceCustomResourcesTagsToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstanceCustomResourcesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstanceCustomResourcesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCortexcloudCloudIntegrationInstanceCustomResourcesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstanceCustomResourcesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCortexcloudCloudIntegrationInstanceCustomResourcesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataCortexcloudCloudIntegrationInstanceCustomResourcesTagsOutputReference {
    return new DataCortexcloudCloudIntegrationInstanceCustomResourcesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCortexcloudCloudIntegrationInstanceScan {
}

export function dataCortexcloudCloudIntegrationInstanceScanToTerraform(struct?: DataCortexcloudCloudIntegrationInstanceScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstanceScanToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstanceScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstanceScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCortexcloudCloudIntegrationInstanceScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstanceScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // outpost_id - computed: true, optional: false, required: false
  public get outpostId() {
    return this.getStringAttribute('outpost_id');
  }

  // scan_method - computed: true, optional: false, required: false
  public get scanMethod() {
    return this.getStringAttribute('scan_method');
  }

  // status_ui - computed: true, optional: false, required: false
  public get statusUi() {
    return this.getNumberAttribute('status_ui');
  }
}
export interface DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesLastScanCoverage {
}

export function dataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesLastScanCoverageToTerraform(struct?: DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesLastScanCoverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesLastScanCoverageToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesLastScanCoverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesLastScanCoverageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesLastScanCoverage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesLastScanCoverage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded - computed: true, optional: false, required: false
  public get excluded() {
    return this.getNumberAttribute('excluded');
  }

  // issues - computed: true, optional: false, required: false
  public get issues() {
    return this.getNumberAttribute('issues');
  }

  // pending - computed: true, optional: false, required: false
  public get pending() {
    return this.getNumberAttribute('pending');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getNumberAttribute('success');
  }

  // unsupported - computed: true, optional: false, required: false
  public get unsupported() {
    return this.getNumberAttribute('unsupported');
  }
}
export interface DataCortexcloudCloudIntegrationInstanceSecurityCapabilities {
}

export function dataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesToTerraform(struct?: DataCortexcloudCloudIntegrationInstanceSecurityCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstanceSecurityCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCortexcloudCloudIntegrationInstanceSecurityCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstanceSecurityCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // last_scan_coverage - computed: true, optional: false, required: false
  private _lastScanCoverage = new DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesLastScanCoverageOutputReference(this, "last_scan_coverage");
  public get lastScanCoverage() {
    return this._lastScanCoverage;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
}

export class DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesOutputReference {
    return new DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instance cortexcloud_cloud_integration_instance}
*/
export class DataCortexcloudCloudIntegrationInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cortexcloud_cloud_integration_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCortexcloudCloudIntegrationInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCortexcloudCloudIntegrationInstance to import
  * @param importFromId The id of the existing DataCortexcloudCloudIntegrationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCortexcloudCloudIntegrationInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cortexcloud_cloud_integration_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instance cortexcloud_cloud_integration_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCortexcloudCloudIntegrationInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataCortexcloudCloudIntegrationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'cortexcloud_cloud_integration_instance',
      terraformGeneratorMetadata: {
        providerName: 'cortexcloud',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_capabilities - computed: true, optional: false, required: false
  private _additionalCapabilities = new DataCortexcloudCloudIntegrationInstanceAdditionalCapabilitiesOutputReference(this, "additional_capabilities");
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // collection_configuration - computed: true, optional: false, required: false
  private _collectionConfiguration = new DataCortexcloudCloudIntegrationInstanceCollectionConfigurationOutputReference(this, "collection_configuration");
  public get collectionConfiguration() {
    return this._collectionConfiguration;
  }

  // collector - computed: true, optional: false, required: false
  public get collector() {
    return this.getStringAttribute('collector');
  }

  // custom_resources_tags - computed: true, optional: false, required: false
  private _customResourcesTags = new DataCortexcloudCloudIntegrationInstanceCustomResourcesTagsList(this, "custom_resources_tags", true);
  public get customResourcesTags() {
    return this._customResourcesTags;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // scan - computed: true, optional: false, required: false
  private _scan = new DataCortexcloudCloudIntegrationInstanceScanOutputReference(this, "scan");
  public get scan() {
    return this._scan;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // security_capabilities - computed: true, optional: false, required: false
  private _securityCapabilities = new DataCortexcloudCloudIntegrationInstanceSecurityCapabilitiesList(this, "security_capabilities", true);
  public get securityCapabilities() {
    return this._securityCapabilities;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // upgrade_available - computed: true, optional: false, required: false
  public get upgradeAvailable() {
    return this.getBooleanAttribute('upgrade_available');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
