// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGoldenGateDeploymentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#assignable_connection_id DataOciGoldenGateDeployments#assignable_connection_id}
  */
  readonly assignableConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#assigned_connection_id DataOciGoldenGateDeployments#assigned_connection_id}
  */
  readonly assignedConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#compartment_id DataOciGoldenGateDeployments#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#deployment_type DataOciGoldenGateDeployments#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#display_name DataOciGoldenGateDeployments#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#fqdn DataOciGoldenGateDeployments#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#id DataOciGoldenGateDeployments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#lifecycle_sub_state DataOciGoldenGateDeployments#lifecycle_sub_state}
  */
  readonly lifecycleSubState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#state DataOciGoldenGateDeployments#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#supported_connection_type DataOciGoldenGateDeployments#supported_connection_type}
  */
  readonly supportedConnectionType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#filter DataOciGoldenGateDeployments#filter}
  */
  readonly filter?: DataOciGoldenGateDeploymentsFilter[] | cdktf.IResolvable;
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupSchedule {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupScheduleToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupScheduleToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupSchedule | undefined) {
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

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // frequency_backup_scheduled - computed: true, optional: false, required: false
  public get frequencyBackupScheduled() {
    return this.getStringAttribute('frequency_backup_scheduled');
  }

  // is_metadata_only - computed: true, optional: false, required: false
  public get isMetadataOnly() {
    return this.getBooleanAttribute('is_metadata_only');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // time_backup_scheduled - computed: true, optional: false, required: false
  public get timeBackupScheduled() {
    return this.getStringAttribute('time_backup_scheduled');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupScheduleOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData | undefined) {
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

  // diagnostic_state - computed: true, optional: false, required: false
  public get diagnosticState() {
    return this.getStringAttribute('diagnostic_state');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // time_diagnostic_end - computed: true, optional: false, required: false
  public get timeDiagnosticEnd() {
    return this.getStringAttribute('time_diagnostic_end');
  }

  // time_diagnostic_start - computed: true, optional: false, required: false
  public get timeDiagnosticStart() {
    return this.getStringAttribute('time_diagnostic_start');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingress_ip - computed: true, optional: false, required: false
  public get ingressIp() {
    return this.getStringAttribute('ingress_ip');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_release_upgrade_period_in_days - computed: true, optional: false, required: false
  public get bundleReleaseUpgradePeriodInDays() {
    return this.getNumberAttribute('bundle_release_upgrade_period_in_days');
  }

  // interim_release_upgrade_period_in_days - computed: true, optional: false, required: false
  public get interimReleaseUpgradePeriodInDays() {
    return this.getNumberAttribute('interim_release_upgrade_period_in_days');
  }

  // is_interim_release_auto_upgrade_enabled - computed: true, optional: false, required: false
  public get isInterimReleaseAutoUpgradeEnabled() {
    return this.getBooleanAttribute('is_interim_release_auto_upgrade_enabled');
  }

  // major_release_upgrade_period_in_days - computed: true, optional: false, required: false
  public get majorReleaseUpgradePeriodInDays() {
    return this.getNumberAttribute('major_release_upgrade_period_in_days');
  }

  // security_patch_upgrade_period_in_days - computed: true, optional: false, required: false
  public get securityPatchUpgradePeriodInDays() {
    return this.getNumberAttribute('security_patch_upgrade_period_in_days');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // start_hour - computed: true, optional: false, required: false
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // administrator_group_id - computed: true, optional: false, required: false
  public get administratorGroupId() {
    return this.getStringAttribute('administrator_group_id');
  }

  // operator_group_id - computed: true, optional: false, required: false
  public get operatorGroupId() {
    return this.getStringAttribute('operator_group_id');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // user_group_id - computed: true, optional: false, required: false
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // credential_store - computed: true, optional: false, required: false
  public get credentialStore() {
    return this.getStringAttribute('credential_store');
  }

  // deployment_name - computed: true, optional: false, required: false
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }

  // group_to_roles_mapping - computed: true, optional: false, required: false
  private _groupToRolesMapping = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList(this, "group_to_roles_mapping", false);
  public get groupToRolesMapping() {
    return this._groupToRolesMapping;
  }

  // identity_domain_id - computed: true, optional: false, required: false
  public get identityDomainId() {
    return this.getStringAttribute('identity_domain_id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // ogg_version - computed: true, optional: false, required: false
  public get oggVersion() {
    return this.getStringAttribute('ogg_version');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacements {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacementsToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacementsToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacementsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacementsOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollectionItems {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionItemsToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_schedule - computed: true, optional: false, required: false
  private _backupSchedule = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsBackupScheduleList(this, "backup_schedule", false);
  public get backupSchedule() {
    return this._backupSchedule;
  }

  // byol_cpu_core_count_limit - computed: true, optional: false, required: false
  public get byolCpuCoreCountLimit() {
    return this.getNumberAttribute('byol_cpu_core_count_limit');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deployment_backup_id - computed: true, optional: false, required: false
  public get deploymentBackupId() {
    return this.getStringAttribute('deployment_backup_id');
  }

  // deployment_diagnostic_data - computed: true, optional: false, required: false
  private _deploymentDiagnosticData = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList(this, "deployment_diagnostic_data", false);
  public get deploymentDiagnosticData() {
    return this._deploymentDiagnosticData;
  }

  // deployment_role - computed: true, optional: false, required: false
  public get deploymentRole() {
    return this.getStringAttribute('deployment_role');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // deployment_url - computed: true, optional: false, required: false
  public get deploymentUrl() {
    return this.getStringAttribute('deployment_url');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // environment_type - computed: true, optional: false, required: false
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_ips - computed: true, optional: false, required: false
  private _ingressIps = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList(this, "ingress_ips", false);
  public get ingressIps() {
    return this._ingressIps;
  }

  // is_auto_scaling_enabled - computed: true, optional: false, required: false
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }

  // is_byol_cpu_core_count_limit_enabled - computed: true, optional: false, required: false
  public get isByolCpuCoreCountLimitEnabled() {
    return this.getBooleanAttribute('is_byol_cpu_core_count_limit_enabled');
  }

  // is_healthy - computed: true, optional: false, required: false
  public get isHealthy() {
    return this.getBooleanAttribute('is_healthy');
  }

  // is_latest_version - computed: true, optional: false, required: false
  public get isLatestVersion() {
    return this.getBooleanAttribute('is_latest_version');
  }

  // is_lock_override - computed: true, optional: false, required: false
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // is_storage_utilization_limit_exceeded - computed: true, optional: false, required: false
  public get isStorageUtilizationLimitExceeded() {
    return this.getBooleanAttribute('is_storage_utilization_limit_exceeded');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // load_balancer_subnet_id - computed: true, optional: false, required: false
  public get loadBalancerSubnetId() {
    return this.getStringAttribute('load_balancer_subnet_id');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // maintenance_configuration - computed: true, optional: false, required: false
  private _maintenanceConfiguration = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList(this, "maintenance_configuration", false);
  public get maintenanceConfiguration() {
    return this._maintenanceConfiguration;
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // next_maintenance_action_type - computed: true, optional: false, required: false
  public get nextMaintenanceActionType() {
    return this.getStringAttribute('next_maintenance_action_type');
  }

  // next_maintenance_description - computed: true, optional: false, required: false
  public get nextMaintenanceDescription() {
    return this.getStringAttribute('next_maintenance_description');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // ogg_data - computed: true, optional: false, required: false
  private _oggData = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList(this, "ogg_data", false);
  public get oggData() {
    return this._oggData;
  }

  // placements - computed: true, optional: false, required: false
  private _placements = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsPlacementsList(this, "placements", false);
  public get placements() {
    return this._placements;
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // source_deployment_id - computed: true, optional: false, required: false
  public get sourceDeploymentId() {
    return this.getStringAttribute('source_deployment_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_utilization_in_bytes - computed: true, optional: false, required: false
  public get storageUtilizationInBytes() {
    return this.getStringAttribute('storage_utilization_in_bytes');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_backup_scheduled - computed: true, optional: false, required: false
  public get timeLastBackupScheduled() {
    return this.getStringAttribute('time_last_backup_scheduled');
  }

  // time_next_backup_scheduled - computed: true, optional: false, required: false
  public get timeNextBackupScheduled() {
    return this.getStringAttribute('time_next_backup_scheduled');
  }

  // time_of_next_maintenance - computed: true, optional: false, required: false
  public get timeOfNextMaintenance() {
    return this.getStringAttribute('time_of_next_maintenance');
  }

  // time_ogg_version_supported_until - computed: true, optional: false, required: false
  public get timeOggVersionSupportedUntil() {
    return this.getStringAttribute('time_ogg_version_supported_until');
  }

  // time_role_changed - computed: true, optional: false, required: false
  public get timeRoleChanged() {
    return this.getStringAttribute('time_role_changed');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_upgrade_required - computed: true, optional: false, required: false
  public get timeUpgradeRequired() {
    return this.getStringAttribute('time_upgrade_required');
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsDeploymentCollection {
}

export function dataOciGoldenGateDeploymentsDeploymentCollectionToTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateDeploymentsDeploymentCollectionToHclTerraform(struct?: DataOciGoldenGateDeploymentsDeploymentCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateDeploymentsDeploymentCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsDeploymentCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciGoldenGateDeploymentsDeploymentCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciGoldenGateDeploymentsDeploymentCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference {
    return new DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateDeploymentsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#name DataOciGoldenGateDeployments#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#regex DataOciGoldenGateDeployments#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#values DataOciGoldenGateDeployments#values}
  */
  readonly values: string[];
}

export function dataOciGoldenGateDeploymentsFilterToTerraform(struct?: DataOciGoldenGateDeploymentsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciGoldenGateDeploymentsFilterToHclTerraform(struct?: DataOciGoldenGateDeploymentsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciGoldenGateDeploymentsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGoldenGateDeploymentsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateDeploymentsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciGoldenGateDeploymentsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciGoldenGateDeploymentsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciGoldenGateDeploymentsFilterOutputReference {
    return new DataOciGoldenGateDeploymentsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments oci_golden_gate_deployments}
*/
export class DataOciGoldenGateDeployments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_deployments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGoldenGateDeployments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGoldenGateDeployments to import
  * @param importFromId The id of the existing DataOciGoldenGateDeployments that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGoldenGateDeployments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_deployments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_deployments oci_golden_gate_deployments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGoldenGateDeploymentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGoldenGateDeploymentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_deployments',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignableConnectionId = config.assignableConnectionId;
    this._assignedConnectionId = config.assignedConnectionId;
    this._compartmentId = config.compartmentId;
    this._deploymentType = config.deploymentType;
    this._displayName = config.displayName;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._lifecycleSubState = config.lifecycleSubState;
    this._state = config.state;
    this._supportedConnectionType = config.supportedConnectionType;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignable_connection_id - computed: false, optional: true, required: false
  private _assignableConnectionId?: string; 
  public get assignableConnectionId() {
    return this.getStringAttribute('assignable_connection_id');
  }
  public set assignableConnectionId(value: string) {
    this._assignableConnectionId = value;
  }
  public resetAssignableConnectionId() {
    this._assignableConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignableConnectionIdInput() {
    return this._assignableConnectionId;
  }

  // assigned_connection_id - computed: false, optional: true, required: false
  private _assignedConnectionId?: string; 
  public get assignedConnectionId() {
    return this.getStringAttribute('assigned_connection_id');
  }
  public set assignedConnectionId(value: string) {
    this._assignedConnectionId = value;
  }
  public resetAssignedConnectionId() {
    this._assignedConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedConnectionIdInput() {
    return this._assignedConnectionId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // deployment_collection - computed: true, optional: false, required: false
  private _deploymentCollection = new DataOciGoldenGateDeploymentsDeploymentCollectionList(this, "deployment_collection", false);
  public get deploymentCollection() {
    return this._deploymentCollection;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // lifecycle_sub_state - computed: false, optional: true, required: false
  private _lifecycleSubState?: string; 
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }
  public set lifecycleSubState(value: string) {
    this._lifecycleSubState = value;
  }
  public resetLifecycleSubState() {
    this._lifecycleSubState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleSubStateInput() {
    return this._lifecycleSubState;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // supported_connection_type - computed: false, optional: true, required: false
  private _supportedConnectionType?: string; 
  public get supportedConnectionType() {
    return this.getStringAttribute('supported_connection_type');
  }
  public set supportedConnectionType(value: string) {
    this._supportedConnectionType = value;
  }
  public resetSupportedConnectionType() {
    this._supportedConnectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedConnectionTypeInput() {
    return this._supportedConnectionType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciGoldenGateDeploymentsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciGoldenGateDeploymentsFilter[] | cdktf.IResolvable) {
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
      assignable_connection_id: cdktf.stringToTerraform(this._assignableConnectionId),
      assigned_connection_id: cdktf.stringToTerraform(this._assignedConnectionId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      display_name: cdktf.stringToTerraform(this._displayName),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_sub_state: cdktf.stringToTerraform(this._lifecycleSubState),
      state: cdktf.stringToTerraform(this._state),
      supported_connection_type: cdktf.stringToTerraform(this._supportedConnectionType),
      filter: cdktf.listMapper(dataOciGoldenGateDeploymentsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignable_connection_id: {
        value: cdktf.stringToHclTerraform(this._assignableConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assigned_connection_id: {
        value: cdktf.stringToHclTerraform(this._assignedConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      lifecycle_sub_state: {
        value: cdktf.stringToHclTerraform(this._lifecycleSubState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_connection_type: {
        value: cdktf.stringToHclTerraform(this._supportedConnectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciGoldenGateDeploymentsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciGoldenGateDeploymentsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
