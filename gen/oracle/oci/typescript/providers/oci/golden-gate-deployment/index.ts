// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoldenGateDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#availability_domain GoldenGateDeployment#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#byol_cpu_core_count_limit GoldenGateDeployment#byol_cpu_core_count_limit}
  */
  readonly byolCpuCoreCountLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#cluster_placement_group_id GoldenGateDeployment#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}
  */
  readonly deploymentBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}
  */
  readonly environmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#fault_domain GoldenGateDeployment#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}
  */
  readonly isAutoScalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#is_byol_cpu_core_count_limit_enabled GoldenGateDeployment#is_byol_cpu_core_count_limit_enabled}
  */
  readonly isByolCpuCoreCountLimitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}
  */
  readonly loadBalancerSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#security_attributes GoldenGateDeployment#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#source_deployment_id GoldenGateDeployment#source_deployment_id}
  */
  readonly sourceDeploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#subscription_id GoldenGateDeployment#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#backup_schedule GoldenGateDeployment#backup_schedule}
  */
  readonly backupSchedule?: GoldenGateDeploymentBackupSchedule;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#locks GoldenGateDeployment#locks}
  */
  readonly locks?: GoldenGateDeploymentLocks[] | cdktf.IResolvable;
  /**
  * maintenance_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#maintenance_configuration GoldenGateDeployment#maintenance_configuration}
  */
  readonly maintenanceConfiguration?: GoldenGateDeploymentMaintenanceConfiguration;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#maintenance_window GoldenGateDeployment#maintenance_window}
  */
  readonly maintenanceWindow?: GoldenGateDeploymentMaintenanceWindow;
  /**
  * ogg_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#ogg_data GoldenGateDeployment#ogg_data}
  */
  readonly oggData?: GoldenGateDeploymentOggData;
  /**
  * placements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#placements GoldenGateDeployment#placements}
  */
  readonly placements?: GoldenGateDeploymentPlacements[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#timeouts GoldenGateDeployment#timeouts}
  */
  readonly timeouts?: GoldenGateDeploymentTimeouts;
}
export interface GoldenGateDeploymentDeploymentDiagnosticData {
}

export function goldenGateDeploymentDeploymentDiagnosticDataToTerraform(struct?: GoldenGateDeploymentDeploymentDiagnosticData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function goldenGateDeploymentDeploymentDiagnosticDataToHclTerraform(struct?: GoldenGateDeploymentDeploymentDiagnosticData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoldenGateDeploymentDeploymentDiagnosticDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenGateDeploymentDeploymentDiagnosticData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentDeploymentDiagnosticData | undefined) {
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

export class GoldenGateDeploymentDeploymentDiagnosticDataList extends cdktf.ComplexList {

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
  public get(index: number): GoldenGateDeploymentDeploymentDiagnosticDataOutputReference {
    return new GoldenGateDeploymentDeploymentDiagnosticDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGateDeploymentIngressIps {
}

export function goldenGateDeploymentIngressIpsToTerraform(struct?: GoldenGateDeploymentIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function goldenGateDeploymentIngressIpsToHclTerraform(struct?: GoldenGateDeploymentIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoldenGateDeploymentIngressIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenGateDeploymentIngressIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentIngressIps | undefined) {
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

export class GoldenGateDeploymentIngressIpsList extends cdktf.ComplexList {

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
  public get(index: number): GoldenGateDeploymentIngressIpsOutputReference {
    return new GoldenGateDeploymentIngressIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGateDeploymentBackupSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#bucket GoldenGateDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#frequency_backup_scheduled GoldenGateDeployment#frequency_backup_scheduled}
  */
  readonly frequencyBackupScheduled: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#is_metadata_only GoldenGateDeployment#is_metadata_only}
  */
  readonly isMetadataOnly: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#namespace GoldenGateDeployment#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#time_backup_scheduled GoldenGateDeployment#time_backup_scheduled}
  */
  readonly timeBackupScheduled: string;
}

export function goldenGateDeploymentBackupScheduleToTerraform(struct?: GoldenGateDeploymentBackupScheduleOutputReference | GoldenGateDeploymentBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    frequency_backup_scheduled: cdktf.stringToTerraform(struct!.frequencyBackupScheduled),
    is_metadata_only: cdktf.booleanToTerraform(struct!.isMetadataOnly),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    time_backup_scheduled: cdktf.stringToTerraform(struct!.timeBackupScheduled),
  }
}


export function goldenGateDeploymentBackupScheduleToHclTerraform(struct?: GoldenGateDeploymentBackupScheduleOutputReference | GoldenGateDeploymentBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency_backup_scheduled: {
      value: cdktf.stringToHclTerraform(struct!.frequencyBackupScheduled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_metadata_only: {
      value: cdktf.booleanToHclTerraform(struct!.isMetadataOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_backup_scheduled: {
      value: cdktf.stringToHclTerraform(struct!.timeBackupScheduled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateDeploymentBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGateDeploymentBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._frequencyBackupScheduled !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyBackupScheduled = this._frequencyBackupScheduled;
    }
    if (this._isMetadataOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetadataOnly = this._isMetadataOnly;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._timeBackupScheduled !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBackupScheduled = this._timeBackupScheduled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._compartmentId = undefined;
      this._frequencyBackupScheduled = undefined;
      this._isMetadataOnly = undefined;
      this._namespace = undefined;
      this._timeBackupScheduled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._compartmentId = value.compartmentId;
      this._frequencyBackupScheduled = value.frequencyBackupScheduled;
      this._isMetadataOnly = value.isMetadataOnly;
      this._namespace = value.namespace;
      this._timeBackupScheduled = value.timeBackupScheduled;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // frequency_backup_scheduled - computed: false, optional: false, required: true
  private _frequencyBackupScheduled?: string; 
  public get frequencyBackupScheduled() {
    return this.getStringAttribute('frequency_backup_scheduled');
  }
  public set frequencyBackupScheduled(value: string) {
    this._frequencyBackupScheduled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyBackupScheduledInput() {
    return this._frequencyBackupScheduled;
  }

  // is_metadata_only - computed: false, optional: false, required: true
  private _isMetadataOnly?: boolean | cdktf.IResolvable; 
  public get isMetadataOnly() {
    return this.getBooleanAttribute('is_metadata_only');
  }
  public set isMetadataOnly(value: boolean | cdktf.IResolvable) {
    this._isMetadataOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetadataOnlyInput() {
    return this._isMetadataOnly;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // time_backup_scheduled - computed: false, optional: false, required: true
  private _timeBackupScheduled?: string; 
  public get timeBackupScheduled() {
    return this.getStringAttribute('time_backup_scheduled');
  }
  public set timeBackupScheduled(value: string) {
    this._timeBackupScheduled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBackupScheduledInput() {
    return this._timeBackupScheduled;
  }
}
export interface GoldenGateDeploymentLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#message GoldenGateDeployment#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#type GoldenGateDeployment#type}
  */
  readonly type: string;
}

export function goldenGateDeploymentLocksToTerraform(struct?: GoldenGateDeploymentLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function goldenGateDeploymentLocksToHclTerraform(struct?: GoldenGateDeploymentLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateDeploymentLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenGateDeploymentLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GoldenGateDeploymentLocksList extends cdktf.ComplexList {
  public internalValue? : GoldenGateDeploymentLocks[] | cdktf.IResolvable

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
  public get(index: number): GoldenGateDeploymentLocksOutputReference {
    return new GoldenGateDeploymentLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGateDeploymentMaintenanceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}
  */
  readonly bundleReleaseUpgradePeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}
  */
  readonly interimReleaseUpgradePeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}
  */
  readonly isInterimReleaseAutoUpgradeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}
  */
  readonly majorReleaseUpgradePeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}
  */
  readonly securityPatchUpgradePeriodInDays?: number;
}

export function goldenGateDeploymentMaintenanceConfigurationToTerraform(struct?: GoldenGateDeploymentMaintenanceConfigurationOutputReference | GoldenGateDeploymentMaintenanceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_release_upgrade_period_in_days: cdktf.numberToTerraform(struct!.bundleReleaseUpgradePeriodInDays),
    interim_release_upgrade_period_in_days: cdktf.numberToTerraform(struct!.interimReleaseUpgradePeriodInDays),
    is_interim_release_auto_upgrade_enabled: cdktf.booleanToTerraform(struct!.isInterimReleaseAutoUpgradeEnabled),
    major_release_upgrade_period_in_days: cdktf.numberToTerraform(struct!.majorReleaseUpgradePeriodInDays),
    security_patch_upgrade_period_in_days: cdktf.numberToTerraform(struct!.securityPatchUpgradePeriodInDays),
  }
}


export function goldenGateDeploymentMaintenanceConfigurationToHclTerraform(struct?: GoldenGateDeploymentMaintenanceConfigurationOutputReference | GoldenGateDeploymentMaintenanceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_release_upgrade_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.bundleReleaseUpgradePeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interim_release_upgrade_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.interimReleaseUpgradePeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_interim_release_auto_upgrade_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isInterimReleaseAutoUpgradeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    major_release_upgrade_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.majorReleaseUpgradePeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_patch_upgrade_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.securityPatchUpgradePeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateDeploymentMaintenanceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGateDeploymentMaintenanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleReleaseUpgradePeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleReleaseUpgradePeriodInDays = this._bundleReleaseUpgradePeriodInDays;
    }
    if (this._interimReleaseUpgradePeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.interimReleaseUpgradePeriodInDays = this._interimReleaseUpgradePeriodInDays;
    }
    if (this._isInterimReleaseAutoUpgradeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInterimReleaseAutoUpgradeEnabled = this._isInterimReleaseAutoUpgradeEnabled;
    }
    if (this._majorReleaseUpgradePeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorReleaseUpgradePeriodInDays = this._majorReleaseUpgradePeriodInDays;
    }
    if (this._securityPatchUpgradePeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPatchUpgradePeriodInDays = this._securityPatchUpgradePeriodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentMaintenanceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bundleReleaseUpgradePeriodInDays = undefined;
      this._interimReleaseUpgradePeriodInDays = undefined;
      this._isInterimReleaseAutoUpgradeEnabled = undefined;
      this._majorReleaseUpgradePeriodInDays = undefined;
      this._securityPatchUpgradePeriodInDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bundleReleaseUpgradePeriodInDays = value.bundleReleaseUpgradePeriodInDays;
      this._interimReleaseUpgradePeriodInDays = value.interimReleaseUpgradePeriodInDays;
      this._isInterimReleaseAutoUpgradeEnabled = value.isInterimReleaseAutoUpgradeEnabled;
      this._majorReleaseUpgradePeriodInDays = value.majorReleaseUpgradePeriodInDays;
      this._securityPatchUpgradePeriodInDays = value.securityPatchUpgradePeriodInDays;
    }
  }

  // bundle_release_upgrade_period_in_days - computed: true, optional: true, required: false
  private _bundleReleaseUpgradePeriodInDays?: number; 
  public get bundleReleaseUpgradePeriodInDays() {
    return this.getNumberAttribute('bundle_release_upgrade_period_in_days');
  }
  public set bundleReleaseUpgradePeriodInDays(value: number) {
    this._bundleReleaseUpgradePeriodInDays = value;
  }
  public resetBundleReleaseUpgradePeriodInDays() {
    this._bundleReleaseUpgradePeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleReleaseUpgradePeriodInDaysInput() {
    return this._bundleReleaseUpgradePeriodInDays;
  }

  // interim_release_upgrade_period_in_days - computed: true, optional: true, required: false
  private _interimReleaseUpgradePeriodInDays?: number; 
  public get interimReleaseUpgradePeriodInDays() {
    return this.getNumberAttribute('interim_release_upgrade_period_in_days');
  }
  public set interimReleaseUpgradePeriodInDays(value: number) {
    this._interimReleaseUpgradePeriodInDays = value;
  }
  public resetInterimReleaseUpgradePeriodInDays() {
    this._interimReleaseUpgradePeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimReleaseUpgradePeriodInDaysInput() {
    return this._interimReleaseUpgradePeriodInDays;
  }

  // is_interim_release_auto_upgrade_enabled - computed: true, optional: true, required: false
  private _isInterimReleaseAutoUpgradeEnabled?: boolean | cdktf.IResolvable; 
  public get isInterimReleaseAutoUpgradeEnabled() {
    return this.getBooleanAttribute('is_interim_release_auto_upgrade_enabled');
  }
  public set isInterimReleaseAutoUpgradeEnabled(value: boolean | cdktf.IResolvable) {
    this._isInterimReleaseAutoUpgradeEnabled = value;
  }
  public resetIsInterimReleaseAutoUpgradeEnabled() {
    this._isInterimReleaseAutoUpgradeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInterimReleaseAutoUpgradeEnabledInput() {
    return this._isInterimReleaseAutoUpgradeEnabled;
  }

  // major_release_upgrade_period_in_days - computed: true, optional: true, required: false
  private _majorReleaseUpgradePeriodInDays?: number; 
  public get majorReleaseUpgradePeriodInDays() {
    return this.getNumberAttribute('major_release_upgrade_period_in_days');
  }
  public set majorReleaseUpgradePeriodInDays(value: number) {
    this._majorReleaseUpgradePeriodInDays = value;
  }
  public resetMajorReleaseUpgradePeriodInDays() {
    this._majorReleaseUpgradePeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorReleaseUpgradePeriodInDaysInput() {
    return this._majorReleaseUpgradePeriodInDays;
  }

  // security_patch_upgrade_period_in_days - computed: true, optional: true, required: false
  private _securityPatchUpgradePeriodInDays?: number; 
  public get securityPatchUpgradePeriodInDays() {
    return this.getNumberAttribute('security_patch_upgrade_period_in_days');
  }
  public set securityPatchUpgradePeriodInDays(value: number) {
    this._securityPatchUpgradePeriodInDays = value;
  }
  public resetSecurityPatchUpgradePeriodInDays() {
    this._securityPatchUpgradePeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPatchUpgradePeriodInDaysInput() {
    return this._securityPatchUpgradePeriodInDays;
  }
}
export interface GoldenGateDeploymentMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}
  */
  readonly day: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}
  */
  readonly startHour: number;
}

export function goldenGateDeploymentMaintenanceWindowToTerraform(struct?: GoldenGateDeploymentMaintenanceWindowOutputReference | GoldenGateDeploymentMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
  }
}


export function goldenGateDeploymentMaintenanceWindowToHclTerraform(struct?: GoldenGateDeploymentMaintenanceWindowOutputReference | GoldenGateDeploymentMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateDeploymentMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGateDeploymentMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._startHour = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._startHour = value.startHour;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }
}
export interface GoldenGateDeploymentOggDataGroupToRolesMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}
  */
  readonly administratorGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}
  */
  readonly operatorGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}
  */
  readonly userGroupId?: string;
}

export function goldenGateDeploymentOggDataGroupToRolesMappingToTerraform(struct?: GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference | GoldenGateDeploymentOggDataGroupToRolesMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_group_id: cdktf.stringToTerraform(struct!.administratorGroupId),
    operator_group_id: cdktf.stringToTerraform(struct!.operatorGroupId),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    user_group_id: cdktf.stringToTerraform(struct!.userGroupId),
  }
}


export function goldenGateDeploymentOggDataGroupToRolesMappingToHclTerraform(struct?: GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference | GoldenGateDeploymentOggDataGroupToRolesMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrator_group_id: {
      value: cdktf.stringToHclTerraform(struct!.administratorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator_group_id: {
      value: cdktf.stringToHclTerraform(struct!.operatorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group_id: {
      value: cdktf.stringToHclTerraform(struct!.userGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGateDeploymentOggDataGroupToRolesMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administratorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorGroupId = this._administratorGroupId;
    }
    if (this._operatorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorGroupId = this._operatorGroupId;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._userGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupId = this._userGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentOggDataGroupToRolesMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._administratorGroupId = undefined;
      this._operatorGroupId = undefined;
      this._securityGroupId = undefined;
      this._userGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._administratorGroupId = value.administratorGroupId;
      this._operatorGroupId = value.operatorGroupId;
      this._securityGroupId = value.securityGroupId;
      this._userGroupId = value.userGroupId;
    }
  }

  // administrator_group_id - computed: true, optional: true, required: false
  private _administratorGroupId?: string; 
  public get administratorGroupId() {
    return this.getStringAttribute('administrator_group_id');
  }
  public set administratorGroupId(value: string) {
    this._administratorGroupId = value;
  }
  public resetAdministratorGroupId() {
    this._administratorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorGroupIdInput() {
    return this._administratorGroupId;
  }

  // operator_group_id - computed: true, optional: true, required: false
  private _operatorGroupId?: string; 
  public get operatorGroupId() {
    return this.getStringAttribute('operator_group_id');
  }
  public set operatorGroupId(value: string) {
    this._operatorGroupId = value;
  }
  public resetOperatorGroupId() {
    this._operatorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorGroupIdInput() {
    return this._operatorGroupId;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // user_group_id - computed: true, optional: true, required: false
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  public resetUserGroupId() {
    this._userGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }
}
export interface GoldenGateDeploymentOggData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}
  */
  readonly credentialStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}
  */
  readonly deploymentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}
  */
  readonly identityDomainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}
  */
  readonly oggVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * group_to_roles_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#group_to_roles_mapping GoldenGateDeployment#group_to_roles_mapping}
  */
  readonly groupToRolesMapping?: GoldenGateDeploymentOggDataGroupToRolesMapping;
}

export function goldenGateDeploymentOggDataToTerraform(struct?: GoldenGateDeploymentOggDataOutputReference | GoldenGateDeploymentOggData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    credential_store: cdktf.stringToTerraform(struct!.credentialStore),
    deployment_name: cdktf.stringToTerraform(struct!.deploymentName),
    identity_domain_id: cdktf.stringToTerraform(struct!.identityDomainId),
    key: cdktf.stringToTerraform(struct!.key),
    ogg_version: cdktf.stringToTerraform(struct!.oggVersion),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    group_to_roles_mapping: goldenGateDeploymentOggDataGroupToRolesMappingToTerraform(struct!.groupToRolesMapping),
  }
}


export function goldenGateDeploymentOggDataToHclTerraform(struct?: GoldenGateDeploymentOggDataOutputReference | GoldenGateDeploymentOggData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_store: {
      value: cdktf.stringToHclTerraform(struct!.credentialStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.deploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_domain_id: {
      value: cdktf.stringToHclTerraform(struct!.identityDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ogg_version: {
      value: cdktf.stringToHclTerraform(struct!.oggVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_to_roles_mapping: {
      value: goldenGateDeploymentOggDataGroupToRolesMappingToHclTerraform(struct!.groupToRolesMapping),
      isBlock: true,
      type: "list",
      storageClassType: "GoldenGateDeploymentOggDataGroupToRolesMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateDeploymentOggDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGateDeploymentOggData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._credentialStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialStore = this._credentialStore;
    }
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._identityDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityDomainId = this._identityDomainId;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._oggVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.oggVersion = this._oggVersion;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._groupToRolesMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupToRolesMapping = this._groupToRolesMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentOggData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._certificate = undefined;
      this._credentialStore = undefined;
      this._deploymentName = undefined;
      this._identityDomainId = undefined;
      this._key = undefined;
      this._oggVersion = undefined;
      this._passwordSecretId = undefined;
      this._groupToRolesMapping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._certificate = value.certificate;
      this._credentialStore = value.credentialStore;
      this._deploymentName = value.deploymentName;
      this._identityDomainId = value.identityDomainId;
      this._key = value.key;
      this._oggVersion = value.oggVersion;
      this._passwordSecretId = value.passwordSecretId;
      this._groupToRolesMapping.internalValue = value.groupToRolesMapping;
    }
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: true, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // credential_store - computed: true, optional: true, required: false
  private _credentialStore?: string; 
  public get credentialStore() {
    return this.getStringAttribute('credential_store');
  }
  public set credentialStore(value: string) {
    this._credentialStore = value;
  }
  public resetCredentialStore() {
    this._credentialStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialStoreInput() {
    return this._credentialStore;
  }

  // deployment_name - computed: false, optional: false, required: true
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
  }

  // identity_domain_id - computed: true, optional: true, required: false
  private _identityDomainId?: string; 
  public get identityDomainId() {
    return this.getStringAttribute('identity_domain_id');
  }
  public set identityDomainId(value: string) {
    this._identityDomainId = value;
  }
  public resetIdentityDomainId() {
    this._identityDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDomainIdInput() {
    return this._identityDomainId;
  }

  // key - computed: true, optional: true, required: false
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

  // ogg_version - computed: true, optional: true, required: false
  private _oggVersion?: string; 
  public get oggVersion() {
    return this.getStringAttribute('ogg_version');
  }
  public set oggVersion(value: string) {
    this._oggVersion = value;
  }
  public resetOggVersion() {
    this._oggVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oggVersionInput() {
    return this._oggVersion;
  }

  // password_secret_id - computed: true, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // group_to_roles_mapping - computed: false, optional: true, required: false
  private _groupToRolesMapping = new GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference(this, "group_to_roles_mapping");
  public get groupToRolesMapping() {
    return this._groupToRolesMapping;
  }
  public putGroupToRolesMapping(value: GoldenGateDeploymentOggDataGroupToRolesMapping) {
    this._groupToRolesMapping.internalValue = value;
  }
  public resetGroupToRolesMapping() {
    this._groupToRolesMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupToRolesMappingInput() {
    return this._groupToRolesMapping.internalValue;
  }
}
export interface GoldenGateDeploymentPlacements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#availability_domain GoldenGateDeployment#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#fault_domain GoldenGateDeployment#fault_domain}
  */
  readonly faultDomain?: string;
}

export function goldenGateDeploymentPlacementsToTerraform(struct?: GoldenGateDeploymentPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    fault_domain: cdktf.stringToTerraform(struct!.faultDomain),
  }
}


export function goldenGateDeploymentPlacementsToHclTerraform(struct?: GoldenGateDeploymentPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fault_domain: {
      value: cdktf.stringToHclTerraform(struct!.faultDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateDeploymentPlacementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenGateDeploymentPlacements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._faultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomain = this._faultDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentPlacements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityDomain = undefined;
      this._faultDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityDomain = value.availabilityDomain;
      this._faultDomain = value.faultDomain;
    }
  }

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }
}

export class GoldenGateDeploymentPlacementsList extends cdktf.ComplexList {
  public internalValue? : GoldenGateDeploymentPlacements[] | cdktf.IResolvable

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
  public get(index: number): GoldenGateDeploymentPlacementsOutputReference {
    return new GoldenGateDeploymentPlacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGateDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}
  */
  readonly update?: string;
}

export function goldenGateDeploymentTimeoutsToTerraform(struct?: GoldenGateDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function goldenGateDeploymentTimeoutsToHclTerraform(struct?: GoldenGateDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGateDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoldenGateDeploymentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment oci_golden_gate_deployment}
*/
export class GoldenGateDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoldenGateDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoldenGateDeployment to import
  * @param importFromId The id of the existing GoldenGateDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoldenGateDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/golden_gate_deployment oci_golden_gate_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoldenGateDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: GoldenGateDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_deployment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._byolCpuCoreCountLimit = config.byolCpuCoreCountLimit;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._cpuCoreCount = config.cpuCoreCount;
    this._definedTags = config.definedTags;
    this._deploymentBackupId = config.deploymentBackupId;
    this._deploymentType = config.deploymentType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._environmentType = config.environmentType;
    this._faultDomain = config.faultDomain;
    this._fqdn = config.fqdn;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutoScalingEnabled = config.isAutoScalingEnabled;
    this._isByolCpuCoreCountLimitEnabled = config.isByolCpuCoreCountLimitEnabled;
    this._isLockOverride = config.isLockOverride;
    this._isPublic = config.isPublic;
    this._licenseModel = config.licenseModel;
    this._loadBalancerSubnetId = config.loadBalancerSubnetId;
    this._nsgIds = config.nsgIds;
    this._securityAttributes = config.securityAttributes;
    this._sourceDeploymentId = config.sourceDeploymentId;
    this._state = config.state;
    this._subnetId = config.subnetId;
    this._subscriptionId = config.subscriptionId;
    this._backupSchedule.internalValue = config.backupSchedule;
    this._locks.internalValue = config.locks;
    this._maintenanceConfiguration.internalValue = config.maintenanceConfiguration;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._oggData.internalValue = config.oggData;
    this._placements.internalValue = config.placements;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // byol_cpu_core_count_limit - computed: true, optional: true, required: false
  private _byolCpuCoreCountLimit?: number; 
  public get byolCpuCoreCountLimit() {
    return this.getNumberAttribute('byol_cpu_core_count_limit');
  }
  public set byolCpuCoreCountLimit(value: number) {
    this._byolCpuCoreCountLimit = value;
  }
  public resetByolCpuCoreCountLimit() {
    this._byolCpuCoreCountLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byolCpuCoreCountLimitInput() {
    return this._byolCpuCoreCountLimit;
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
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

  // cpu_core_count - computed: true, optional: true, required: false
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  public resetCpuCoreCount() {
    this._cpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deployment_backup_id - computed: true, optional: true, required: false
  private _deploymentBackupId?: string; 
  public get deploymentBackupId() {
    return this.getStringAttribute('deployment_backup_id');
  }
  public set deploymentBackupId(value: string) {
    this._deploymentBackupId = value;
  }
  public resetDeploymentBackupId() {
    this._deploymentBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentBackupIdInput() {
    return this._deploymentBackupId;
  }

  // deployment_diagnostic_data - computed: true, optional: false, required: false
  private _deploymentDiagnosticData = new GoldenGateDeploymentDeploymentDiagnosticDataList(this, "deployment_diagnostic_data", false);
  public get deploymentDiagnosticData() {
    return this._deploymentDiagnosticData;
  }

  // deployment_role - computed: true, optional: false, required: false
  public get deploymentRole() {
    return this.getStringAttribute('deployment_role');
  }

  // deployment_type - computed: true, optional: true, required: false
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

  // deployment_url - computed: true, optional: false, required: false
  public get deploymentUrl() {
    return this.getStringAttribute('deployment_url');
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // environment_type - computed: true, optional: true, required: false
  private _environmentType?: string; 
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }
  public set environmentType(value: string) {
    this._environmentType = value;
  }
  public resetEnvironmentType() {
    this._environmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTypeInput() {
    return this._environmentType;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }

  // fqdn - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // ingress_ips - computed: true, optional: false, required: false
  private _ingressIps = new GoldenGateDeploymentIngressIpsList(this, "ingress_ips", false);
  public get ingressIps() {
    return this._ingressIps;
  }

  // is_auto_scaling_enabled - computed: true, optional: true, required: false
  private _isAutoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }
  public set isAutoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoScalingEnabled = value;
  }
  public resetIsAutoScalingEnabled() {
    this._isAutoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScalingEnabledInput() {
    return this._isAutoScalingEnabled;
  }

  // is_byol_cpu_core_count_limit_enabled - computed: true, optional: true, required: false
  private _isByolCpuCoreCountLimitEnabled?: boolean | cdktf.IResolvable; 
  public get isByolCpuCoreCountLimitEnabled() {
    return this.getBooleanAttribute('is_byol_cpu_core_count_limit_enabled');
  }
  public set isByolCpuCoreCountLimitEnabled(value: boolean | cdktf.IResolvable) {
    this._isByolCpuCoreCountLimitEnabled = value;
  }
  public resetIsByolCpuCoreCountLimitEnabled() {
    this._isByolCpuCoreCountLimitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isByolCpuCoreCountLimitEnabledInput() {
    return this._isByolCpuCoreCountLimitEnabled;
  }

  // is_healthy - computed: true, optional: false, required: false
  public get isHealthy() {
    return this.getBooleanAttribute('is_healthy');
  }

  // is_latest_version - computed: true, optional: false, required: false
  public get isLatestVersion() {
    return this.getBooleanAttribute('is_latest_version');
  }

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // is_storage_utilization_limit_exceeded - computed: true, optional: false, required: false
  public get isStorageUtilizationLimitExceeded() {
    return this.getBooleanAttribute('is_storage_utilization_limit_exceeded');
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
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

  // load_balancer_subnet_id - computed: true, optional: true, required: false
  private _loadBalancerSubnetId?: string; 
  public get loadBalancerSubnetId() {
    return this.getStringAttribute('load_balancer_subnet_id');
  }
  public set loadBalancerSubnetId(value: string) {
    this._loadBalancerSubnetId = value;
  }
  public resetLoadBalancerSubnetId() {
    this._loadBalancerSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSubnetIdInput() {
    return this._loadBalancerSubnetId;
  }

  // next_maintenance_action_type - computed: true, optional: false, required: false
  public get nextMaintenanceActionType() {
    return this.getStringAttribute('next_maintenance_action_type');
  }

  // next_maintenance_description - computed: true, optional: false, required: false
  public get nextMaintenanceDescription() {
    return this.getStringAttribute('next_maintenance_description');
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // source_deployment_id - computed: true, optional: true, required: false
  private _sourceDeploymentId?: string; 
  public get sourceDeploymentId() {
    return this.getStringAttribute('source_deployment_id');
  }
  public set sourceDeploymentId(value: string) {
    this._sourceDeploymentId = value;
  }
  public resetSourceDeploymentId() {
    this._sourceDeploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeploymentIdInput() {
    return this._sourceDeploymentId;
  }

  // state - computed: true, optional: true, required: false
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

  // storage_utilization_in_bytes - computed: true, optional: false, required: false
  public get storageUtilizationInBytes() {
    return this.getStringAttribute('storage_utilization_in_bytes');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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

  // backup_schedule - computed: false, optional: true, required: false
  private _backupSchedule = new GoldenGateDeploymentBackupScheduleOutputReference(this, "backup_schedule");
  public get backupSchedule() {
    return this._backupSchedule;
  }
  public putBackupSchedule(value: GoldenGateDeploymentBackupSchedule) {
    this._backupSchedule.internalValue = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule.internalValue;
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new GoldenGateDeploymentLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: GoldenGateDeploymentLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // maintenance_configuration - computed: false, optional: true, required: false
  private _maintenanceConfiguration = new GoldenGateDeploymentMaintenanceConfigurationOutputReference(this, "maintenance_configuration");
  public get maintenanceConfiguration() {
    return this._maintenanceConfiguration;
  }
  public putMaintenanceConfiguration(value: GoldenGateDeploymentMaintenanceConfiguration) {
    this._maintenanceConfiguration.internalValue = value;
  }
  public resetMaintenanceConfiguration() {
    this._maintenanceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationInput() {
    return this._maintenanceConfiguration.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new GoldenGateDeploymentMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: GoldenGateDeploymentMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // ogg_data - computed: false, optional: true, required: false
  private _oggData = new GoldenGateDeploymentOggDataOutputReference(this, "ogg_data");
  public get oggData() {
    return this._oggData;
  }
  public putOggData(value: GoldenGateDeploymentOggData) {
    this._oggData.internalValue = value;
  }
  public resetOggData() {
    this._oggData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oggDataInput() {
    return this._oggData.internalValue;
  }

  // placements - computed: false, optional: true, required: false
  private _placements = new GoldenGateDeploymentPlacementsList(this, "placements", false);
  public get placements() {
    return this._placements;
  }
  public putPlacements(value: GoldenGateDeploymentPlacements[] | cdktf.IResolvable) {
    this._placements.internalValue = value;
  }
  public resetPlacements() {
    this._placements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementsInput() {
    return this._placements.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoldenGateDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoldenGateDeploymentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      byol_cpu_core_count_limit: cdktf.numberToTerraform(this._byolCpuCoreCountLimit),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deployment_backup_id: cdktf.stringToTerraform(this._deploymentBackupId),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      environment_type: cdktf.stringToTerraform(this._environmentType),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_auto_scaling_enabled: cdktf.booleanToTerraform(this._isAutoScalingEnabled),
      is_byol_cpu_core_count_limit_enabled: cdktf.booleanToTerraform(this._isByolCpuCoreCountLimitEnabled),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      load_balancer_subnet_id: cdktf.stringToTerraform(this._loadBalancerSubnetId),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      source_deployment_id: cdktf.stringToTerraform(this._sourceDeploymentId),
      state: cdktf.stringToTerraform(this._state),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      backup_schedule: goldenGateDeploymentBackupScheduleToTerraform(this._backupSchedule.internalValue),
      locks: cdktf.listMapper(goldenGateDeploymentLocksToTerraform, true)(this._locks.internalValue),
      maintenance_configuration: goldenGateDeploymentMaintenanceConfigurationToTerraform(this._maintenanceConfiguration.internalValue),
      maintenance_window: goldenGateDeploymentMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      ogg_data: goldenGateDeploymentOggDataToTerraform(this._oggData.internalValue),
      placements: cdktf.listMapper(goldenGateDeploymentPlacementsToTerraform, true)(this._placements.internalValue),
      timeouts: goldenGateDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      byol_cpu_core_count_limit: {
        value: cdktf.numberToHclTerraform(this._byolCpuCoreCountLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterPlacementGroupId),
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
      cpu_core_count: {
        value: cdktf.numberToHclTerraform(this._cpuCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deployment_backup_id: {
        value: cdktf.stringToHclTerraform(this._deploymentBackupId),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      environment_type: {
        value: cdktf.stringToHclTerraform(this._environmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_domain: {
        value: cdktf.stringToHclTerraform(this._faultDomain),
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
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_scaling_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutoScalingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_byol_cpu_core_count_limit_enabled: {
        value: cdktf.booleanToHclTerraform(this._isByolCpuCoreCountLimitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_subnet_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      source_deployment_id: {
        value: cdktf.stringToHclTerraform(this._sourceDeploymentId),
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
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_schedule: {
        value: goldenGateDeploymentBackupScheduleToHclTerraform(this._backupSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateDeploymentBackupScheduleList",
      },
      locks: {
        value: cdktf.listMapperHcl(goldenGateDeploymentLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateDeploymentLocksList",
      },
      maintenance_configuration: {
        value: goldenGateDeploymentMaintenanceConfigurationToHclTerraform(this._maintenanceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateDeploymentMaintenanceConfigurationList",
      },
      maintenance_window: {
        value: goldenGateDeploymentMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateDeploymentMaintenanceWindowList",
      },
      ogg_data: {
        value: goldenGateDeploymentOggDataToHclTerraform(this._oggData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateDeploymentOggDataList",
      },
      placements: {
        value: cdktf.listMapperHcl(goldenGateDeploymentPlacementsToHclTerraform, true)(this._placements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGateDeploymentPlacementsList",
      },
      timeouts: {
        value: goldenGateDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoldenGateDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
