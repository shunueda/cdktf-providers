// https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The backup settings for a cluster.
  *  Each cluster has backup settings that determine if backups are enabled, how frequently they are taken, and how long they are retained for. Use this attribute to manage those settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#backup_config Cluster#backup_config}
  */
  readonly backupConfig?: ClusterBackupConfig;
  /**
  * Cloud provider used to host the cluster. Allowed values are:
  *   * GCP
  *   * AWS
  *   * AZURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#cloud_provider Cluster#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * The major version of CockroachDB running on the cluster. This value can be used to orchestrate version upgrades. Supported for ADVANCED and STANDARD clusters (when `serverless.upgrade_type` set to 'MANUAL'). (e.g. v25.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#cockroach_version Cluster#cockroach_version}
  */
  readonly cockroachVersion?: string;
  /**
  * Cloud-specific details required to host the cluster in your own cloud account. Only one of `aws`, `gcp`, or `azure` may be specified. This feature is available in [Private Preview](https://www.cockroachlabs.com/docs/stable/cockroachdb-feature-availability). Contact your Cockroach Labs account team to enable this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#customer_cloud_account Cluster#customer_cloud_account}
  */
  readonly customerCloudAccount?: ClusterCustomerCloudAccount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#dedicated Cluster#dedicated}
  */
  readonly dedicated?: ClusterDedicated;
  /**
  * Set to true to enable delete protection on the cluster. If unset, the server chooses the value on cluster creation, and preserves the value on cluster update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#delete_protection Cluster#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Map of key-value pairs used to organize and categorize resources. If unset, labels will not be managed by Terraform. If set, labels defined in Terraform will overwrite any labels configured outside this platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#labels Cluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * The ID of the cluster's parent folder. 'root' is used for a cluster at the root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#parent_id Cluster#parent_id}
  */
  readonly parentId?: string;
  /**
  * Denotes cluster plan type: 'BASIC' or 'STANDARD' or 'ADVANCED'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#plan Cluster#plan}
  */
  readonly plan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#regions Cluster#regions}
  */
  readonly regions: ClusterRegions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#serverless Cluster#serverless}
  */
  readonly serverless?: ClusterServerless;
}
export interface ClusterBackupConfig {
  /**
  * Indicates whether backups are enabled. If set to false, no backups will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The frequency of backups in minutes.  Valid values are [5, 10, 15, 30, 60, 240, 1440]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#frequency_minutes Cluster#frequency_minutes}
  */
  readonly frequencyMinutes?: number;
  /**
  * The number of days to retain backups for.  Valid values are [2, 7, 30, 90, 365]. Can only be set once, further changes require opening a support ticket. See [Updating backup retention](../guides/updating-backup-retention) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#retention_days Cluster#retention_days}
  */
  readonly retentionDays?: number;
}

export function clusterBackupConfigToTerraform(struct?: ClusterBackupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    frequency_minutes: cdktf.numberToTerraform(struct!.frequencyMinutes),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function clusterBackupConfigToHclTerraform(struct?: ClusterBackupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frequency_minutes: {
      value: cdktf.numberToHclTerraform(struct!.frequencyMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterBackupConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._frequencyMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyMinutes = this._frequencyMinutes;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterBackupConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._frequencyMinutes = undefined;
      this._retentionDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._frequencyMinutes = value.frequencyMinutes;
      this._retentionDays = value.retentionDays;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // frequency_minutes - computed: true, optional: true, required: false
  private _frequencyMinutes?: number; 
  public get frequencyMinutes() {
    return this.getNumberAttribute('frequency_minutes');
  }
  public set frequencyMinutes(value: number) {
    this._frequencyMinutes = value;
  }
  public resetFrequencyMinutes() {
    this._frequencyMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyMinutesInput() {
    return this._frequencyMinutes;
  }

  // retention_days - computed: true, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface ClusterCustomerCloudAccountAws {
  /**
  * The AWS IAM Role ARN that CockroachDB Cloud will assume in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#arn Cluster#arn}
  */
  readonly arn: string;
}

export function clusterCustomerCloudAccountAwsToTerraform(struct?: ClusterCustomerCloudAccountAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function clusterCustomerCloudAccountAwsToHclTerraform(struct?: ClusterCustomerCloudAccountAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomerCloudAccountAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterCustomerCloudAccountAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCustomerCloudAccountAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface ClusterCustomerCloudAccountAzure {
  /**
  * The Azure subscription ID in the customer-owned tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#subscription_id Cluster#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The customer-owned Azure tenant ID that contains the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#tenant_id Cluster#tenant_id}
  */
  readonly tenantId: string;
}

export function clusterCustomerCloudAccountAzureToTerraform(struct?: ClusterCustomerCloudAccountAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function clusterCustomerCloudAccountAzureToHclTerraform(struct?: ClusterCustomerCloudAccountAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomerCloudAccountAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterCustomerCloudAccountAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCustomerCloudAccountAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
    }
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface ClusterCustomerCloudAccountGcp {
  /**
  * The customer-owned GCP service account email CockroachDB Cloud will impersonate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#service_account_email Cluster#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function clusterCustomerCloudAccountGcpToTerraform(struct?: ClusterCustomerCloudAccountGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function clusterCustomerCloudAccountGcpToHclTerraform(struct?: ClusterCustomerCloudAccountGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomerCloudAccountGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterCustomerCloudAccountGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCustomerCloudAccountGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface ClusterCustomerCloudAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#aws Cluster#aws}
  */
  readonly aws?: ClusterCustomerCloudAccountAws;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#azure Cluster#azure}
  */
  readonly azure?: ClusterCustomerCloudAccountAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#gcp Cluster#gcp}
  */
  readonly gcp?: ClusterCustomerCloudAccountGcp;
}

export function clusterCustomerCloudAccountToTerraform(struct?: ClusterCustomerCloudAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: clusterCustomerCloudAccountAwsToTerraform(struct!.aws),
    azure: clusterCustomerCloudAccountAzureToTerraform(struct!.azure),
    gcp: clusterCustomerCloudAccountGcpToTerraform(struct!.gcp),
  }
}


export function clusterCustomerCloudAccountToHclTerraform(struct?: ClusterCustomerCloudAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: clusterCustomerCloudAccountAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterCustomerCloudAccountAws",
    },
    azure: {
      value: clusterCustomerCloudAccountAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterCustomerCloudAccountAzure",
    },
    gcp: {
      value: clusterCustomerCloudAccountGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterCustomerCloudAccountGcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomerCloudAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterCustomerCloudAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCustomerCloudAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._gcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._gcp.internalValue = value.gcp;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new ClusterCustomerCloudAccountAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: ClusterCustomerCloudAccountAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new ClusterCustomerCloudAccountAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ClusterCustomerCloudAccountAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new ClusterCustomerCloudAccountGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: ClusterCustomerCloudAccountGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }
}
export interface ClusterDedicated {
  /**
  * The IPv4 range in CIDR format that will be used by the cluster. This is supported only on GCP, and must have a subnet mask no larger than /19. Defaults to "172.28.0.0/14". This cannot be changed after cluster creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#cidr_range Cluster#cidr_range}
  */
  readonly cidrRange?: string;
  /**
  * Number of disk I/O operations per second that are permitted on each node in the cluster. Omitting this attribute will result in the cloud provider-specific default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#disk_iops Cluster#disk_iops}
  */
  readonly diskIops?: number;
  /**
  * Machine type identifier within the given cloud provider, e.g., m6.xlarge, n2-standard-4. This attribute requires a feature flag to be enabled. It is recommended to leave this empty and use `num_virtual_cpus` to control the machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#machine_type Cluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * Number of virtual CPUs per node in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#num_virtual_cpus Cluster#num_virtual_cpus}
  */
  readonly numVirtualCpus?: number;
  /**
  * Set to true to assign private IP addresses to nodes. Required for CMEK and other advanced networking features. Clusters created with this flag will have advanced security features enabled.  This cannot be changed after cluster creation and incurs additional charges.  See [Create an Advanced Cluster](https://www.cockroachlabs.com/docs/cockroachcloud/create-an-advanced-cluster.html#step-6-configure-advanced-security-features) and [Pricing](https://www.cockroachlabs.com/pricing/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#private_network_visibility Cluster#private_network_visibility}
  */
  readonly privateNetworkVisibility?: boolean | cdktf.IResolvable;
  /**
  * Storage amount per node in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#storage_gib Cluster#storage_gib}
  */
  readonly storageGib?: number;
  /**
  * supports_cluster_virtualization specifies whether an Advanced cluster is started with a virtual cluster architecture. This field is restricted to Private Preview usage; see our documentation for details: https://www.cockroachlabs.com/docs/stable/cluster-virtualization-overview
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#supports_cluster_virtualization Cluster#supports_cluster_virtualization}
  */
  readonly supportsClusterVirtualization?: boolean | cdktf.IResolvable;
}

export function clusterDedicatedToTerraform(struct?: ClusterDedicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_range: cdktf.stringToTerraform(struct!.cidrRange),
    disk_iops: cdktf.numberToTerraform(struct!.diskIops),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    num_virtual_cpus: cdktf.numberToTerraform(struct!.numVirtualCpus),
    private_network_visibility: cdktf.booleanToTerraform(struct!.privateNetworkVisibility),
    storage_gib: cdktf.numberToTerraform(struct!.storageGib),
    supports_cluster_virtualization: cdktf.booleanToTerraform(struct!.supportsClusterVirtualization),
  }
}


export function clusterDedicatedToHclTerraform(struct?: ClusterDedicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_range: {
      value: cdktf.stringToHclTerraform(struct!.cidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_iops: {
      value: cdktf.numberToHclTerraform(struct!.diskIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_virtual_cpus: {
      value: cdktf.numberToHclTerraform(struct!.numVirtualCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_network_visibility: {
      value: cdktf.booleanToHclTerraform(struct!.privateNetworkVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_gib: {
      value: cdktf.numberToHclTerraform(struct!.storageGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    supports_cluster_virtualization: {
      value: cdktf.booleanToHclTerraform(struct!.supportsClusterVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterDedicatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterDedicated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRange = this._cidrRange;
    }
    if (this._diskIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskIops = this._diskIops;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._numVirtualCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVirtualCpus = this._numVirtualCpus;
    }
    if (this._privateNetworkVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkVisibility = this._privateNetworkVisibility;
    }
    if (this._storageGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageGib = this._storageGib;
    }
    if (this._supportsClusterVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportsClusterVirtualization = this._supportsClusterVirtualization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterDedicated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrRange = undefined;
      this._diskIops = undefined;
      this._machineType = undefined;
      this._numVirtualCpus = undefined;
      this._privateNetworkVisibility = undefined;
      this._storageGib = undefined;
      this._supportsClusterVirtualization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrRange = value.cidrRange;
      this._diskIops = value.diskIops;
      this._machineType = value.machineType;
      this._numVirtualCpus = value.numVirtualCpus;
      this._privateNetworkVisibility = value.privateNetworkVisibility;
      this._storageGib = value.storageGib;
      this._supportsClusterVirtualization = value.supportsClusterVirtualization;
    }
  }

  // cidr_range - computed: true, optional: true, required: false
  private _cidrRange?: string; 
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }
  public set cidrRange(value: string) {
    this._cidrRange = value;
  }
  public resetCidrRange() {
    this._cidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangeInput() {
    return this._cidrRange;
  }

  // disk_iops - computed: true, optional: true, required: false
  private _diskIops?: number; 
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }
  public set diskIops(value: number) {
    this._diskIops = value;
  }
  public resetDiskIops() {
    this._diskIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsInput() {
    return this._diskIops;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // memory_gib - computed: true, optional: false, required: false
  public get memoryGib() {
    return this.getNumberAttribute('memory_gib');
  }

  // num_virtual_cpus - computed: true, optional: true, required: false
  private _numVirtualCpus?: number; 
  public get numVirtualCpus() {
    return this.getNumberAttribute('num_virtual_cpus');
  }
  public set numVirtualCpus(value: number) {
    this._numVirtualCpus = value;
  }
  public resetNumVirtualCpus() {
    this._numVirtualCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVirtualCpusInput() {
    return this._numVirtualCpus;
  }

  // private_network_visibility - computed: true, optional: true, required: false
  private _privateNetworkVisibility?: boolean | cdktf.IResolvable; 
  public get privateNetworkVisibility() {
    return this.getBooleanAttribute('private_network_visibility');
  }
  public set privateNetworkVisibility(value: boolean | cdktf.IResolvable) {
    this._privateNetworkVisibility = value;
  }
  public resetPrivateNetworkVisibility() {
    this._privateNetworkVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkVisibilityInput() {
    return this._privateNetworkVisibility;
  }

  // storage_gib - computed: true, optional: true, required: false
  private _storageGib?: number; 
  public get storageGib() {
    return this.getNumberAttribute('storage_gib');
  }
  public set storageGib(value: number) {
    this._storageGib = value;
  }
  public resetStorageGib() {
    this._storageGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageGibInput() {
    return this._storageGib;
  }

  // supports_cluster_virtualization - computed: false, optional: true, required: false
  private _supportsClusterVirtualization?: boolean | cdktf.IResolvable; 
  public get supportsClusterVirtualization() {
    return this.getBooleanAttribute('supports_cluster_virtualization');
  }
  public set supportsClusterVirtualization(value: boolean | cdktf.IResolvable) {
    this._supportsClusterVirtualization = value;
  }
  public resetSupportsClusterVirtualization() {
    this._supportsClusterVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsClusterVirtualizationInput() {
    return this._supportsClusterVirtualization;
  }
}
export interface ClusterRegions {
  /**
  * Name of the region. Should match the region code used by the cluster's cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Number of nodes in the region. Valid for Advanced clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#node_count Cluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Set to true to mark this region as the primary for a serverless cluster. Exactly one region must be primary. Dedicated clusters expect to have no primary region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#primary Cluster#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
}

export function clusterRegionsToTerraform(struct?: ClusterRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    primary: cdktf.booleanToTerraform(struct!.primary),
  }
}


export function clusterRegionsToHclTerraform(struct?: ClusterRegions | cdktf.IResolvable): any {
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
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nodeCount = undefined;
      this._primary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nodeCount = value.nodeCount;
      this._primary = value.primary;
    }
  }

  // internal_dns - computed: true, optional: false, required: false
  public get internalDns() {
    return this.getStringAttribute('internal_dns');
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // private_endpoint_dns - computed: true, optional: false, required: false
  public get privateEndpointDns() {
    return this.getStringAttribute('private_endpoint_dns');
  }

  // sql_dns - computed: true, optional: false, required: false
  public get sqlDns() {
    return this.getStringAttribute('sql_dns');
  }

  // ui_dns - computed: true, optional: false, required: false
  public get uiDns() {
    return this.getStringAttribute('ui_dns');
  }
}

export class ClusterRegionsList extends cdktf.ComplexList {
  public internalValue? : ClusterRegions[] | cdktf.IResolvable

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
  public get(index: number): ClusterRegionsOutputReference {
    return new ClusterRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterServerlessUsageLimits {
  /**
  * Maximum number of vCPUs that the cluster can use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#provisioned_virtual_cpus Cluster#provisioned_virtual_cpus}
  */
  readonly provisionedVirtualCpus?: number;
  /**
  * Maximum number of Request Units that the cluster can consume during the month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#request_unit_limit Cluster#request_unit_limit}
  */
  readonly requestUnitLimit?: number;
  /**
  * Maximum amount of storage (in MiB) that the cluster can have at any time during the month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#storage_mib_limit Cluster#storage_mib_limit}
  */
  readonly storageMibLimit?: number;
}

export function clusterServerlessUsageLimitsToTerraform(struct?: ClusterServerlessUsageLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provisioned_virtual_cpus: cdktf.numberToTerraform(struct!.provisionedVirtualCpus),
    request_unit_limit: cdktf.numberToTerraform(struct!.requestUnitLimit),
    storage_mib_limit: cdktf.numberToTerraform(struct!.storageMibLimit),
  }
}


export function clusterServerlessUsageLimitsToHclTerraform(struct?: ClusterServerlessUsageLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provisioned_virtual_cpus: {
      value: cdktf.numberToHclTerraform(struct!.provisionedVirtualCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_unit_limit: {
      value: cdktf.numberToHclTerraform(struct!.requestUnitLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_mib_limit: {
      value: cdktf.numberToHclTerraform(struct!.storageMibLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServerlessUsageLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterServerlessUsageLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisionedVirtualCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedVirtualCpus = this._provisionedVirtualCpus;
    }
    if (this._requestUnitLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUnitLimit = this._requestUnitLimit;
    }
    if (this._storageMibLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMibLimit = this._storageMibLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServerlessUsageLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provisionedVirtualCpus = undefined;
      this._requestUnitLimit = undefined;
      this._storageMibLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provisionedVirtualCpus = value.provisionedVirtualCpus;
      this._requestUnitLimit = value.requestUnitLimit;
      this._storageMibLimit = value.storageMibLimit;
    }
  }

  // provisioned_virtual_cpus - computed: false, optional: true, required: false
  private _provisionedVirtualCpus?: number; 
  public get provisionedVirtualCpus() {
    return this.getNumberAttribute('provisioned_virtual_cpus');
  }
  public set provisionedVirtualCpus(value: number) {
    this._provisionedVirtualCpus = value;
  }
  public resetProvisionedVirtualCpus() {
    this._provisionedVirtualCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedVirtualCpusInput() {
    return this._provisionedVirtualCpus;
  }

  // request_unit_limit - computed: false, optional: true, required: false
  private _requestUnitLimit?: number; 
  public get requestUnitLimit() {
    return this.getNumberAttribute('request_unit_limit');
  }
  public set requestUnitLimit(value: number) {
    this._requestUnitLimit = value;
  }
  public resetRequestUnitLimit() {
    this._requestUnitLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUnitLimitInput() {
    return this._requestUnitLimit;
  }

  // storage_mib_limit - computed: false, optional: true, required: false
  private _storageMibLimit?: number; 
  public get storageMibLimit() {
    return this.getNumberAttribute('storage_mib_limit');
  }
  public set storageMibLimit(value: number) {
    this._storageMibLimit = value;
  }
  public resetStorageMibLimit() {
    this._storageMibLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMibLimitInput() {
    return this._storageMibLimit;
  }
}
export interface ClusterServerless {
  /**
  * Spend limit in US cents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#spend_limit Cluster#spend_limit}
  */
  readonly spendLimit?: number;
  /**
  * Dictates the behavior of CockroachDB major version upgrades. Manual upgrades are not supported on CockroachDB Basic. Manual or automatic upgrades are supported on CockroachDB Standard. If you omit the field, it defaults to `AUTOMATIC`. Allowed values are:
  *   * MANUAL
  *   * AUTOMATIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#upgrade_type Cluster#upgrade_type}
  */
  readonly upgradeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#usage_limits Cluster#usage_limits}
  */
  readonly usageLimits?: ClusterServerlessUsageLimits;
}

export function clusterServerlessToTerraform(struct?: ClusterServerless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spend_limit: cdktf.numberToTerraform(struct!.spendLimit),
    upgrade_type: cdktf.stringToTerraform(struct!.upgradeType),
    usage_limits: clusterServerlessUsageLimitsToTerraform(struct!.usageLimits),
  }
}


export function clusterServerlessToHclTerraform(struct?: ClusterServerless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spend_limit: {
      value: cdktf.numberToHclTerraform(struct!.spendLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upgrade_type: {
      value: cdktf.stringToHclTerraform(struct!.upgradeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_limits: {
      value: clusterServerlessUsageLimitsToHclTerraform(struct!.usageLimits),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterServerlessUsageLimits",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServerlessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterServerless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spendLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.spendLimit = this._spendLimit;
    }
    if (this._upgradeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeType = this._upgradeType;
    }
    if (this._usageLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageLimits = this._usageLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServerless | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spendLimit = undefined;
      this._upgradeType = undefined;
      this._usageLimits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spendLimit = value.spendLimit;
      this._upgradeType = value.upgradeType;
      this._usageLimits.internalValue = value.usageLimits;
    }
  }

  // routing_id - computed: true, optional: false, required: false
  public get routingId() {
    return this.getStringAttribute('routing_id');
  }

  // spend_limit - computed: false, optional: true, required: false
  private _spendLimit?: number; 
  public get spendLimit() {
    return this.getNumberAttribute('spend_limit');
  }
  public set spendLimit(value: number) {
    this._spendLimit = value;
  }
  public resetSpendLimit() {
    this._spendLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spendLimitInput() {
    return this._spendLimit;
  }

  // upgrade_type - computed: true, optional: true, required: false
  private _upgradeType?: string; 
  public get upgradeType() {
    return this.getStringAttribute('upgrade_type');
  }
  public set upgradeType(value: string) {
    this._upgradeType = value;
  }
  public resetUpgradeType() {
    this._upgradeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypeInput() {
    return this._upgradeType;
  }

  // usage_limits - computed: false, optional: true, required: false
  private _usageLimits = new ClusterServerlessUsageLimitsOutputReference(this, "usage_limits");
  public get usageLimits() {
    return this._usageLimits;
  }
  public putUsageLimits(value: ClusterServerlessUsageLimits) {
    this._usageLimits.internalValue = value;
  }
  public resetUsageLimits() {
    this._usageLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageLimitsInput() {
    return this._usageLimits.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster cockroach_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/cluster cockroach_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_cluster',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupConfig.internalValue = config.backupConfig;
    this._cloudProvider = config.cloudProvider;
    this._cockroachVersion = config.cockroachVersion;
    this._customerCloudAccount.internalValue = config.customerCloudAccount;
    this._dedicated.internalValue = config.dedicated;
    this._deleteProtection = config.deleteProtection;
    this._labels = config.labels;
    this._name = config.name;
    this._parentId = config.parentId;
    this._plan = config.plan;
    this._regions.internalValue = config.regions;
    this._serverless.internalValue = config.serverless;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // backup_config - computed: true, optional: true, required: false
  private _backupConfig = new ClusterBackupConfigOutputReference(this, "backup_config");
  public get backupConfig() {
    return this._backupConfig;
  }
  public putBackupConfig(value: ClusterBackupConfig) {
    this._backupConfig.internalValue = value;
  }
  public resetBackupConfig() {
    this._backupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigInput() {
    return this._backupConfig.internalValue;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cockroach_version - computed: true, optional: true, required: false
  private _cockroachVersion?: string; 
  public get cockroachVersion() {
    return this.getStringAttribute('cockroach_version');
  }
  public set cockroachVersion(value: string) {
    this._cockroachVersion = value;
  }
  public resetCockroachVersion() {
    this._cockroachVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cockroachVersionInput() {
    return this._cockroachVersion;
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getStringAttribute('creator_id');
  }

  // customer_cloud_account - computed: false, optional: true, required: false
  private _customerCloudAccount = new ClusterCustomerCloudAccountOutputReference(this, "customer_cloud_account");
  public get customerCloudAccount() {
    return this._customerCloudAccount;
  }
  public putCustomerCloudAccount(value: ClusterCustomerCloudAccount) {
    this._customerCloudAccount.internalValue = value;
  }
  public resetCustomerCloudAccount() {
    this._customerCloudAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerCloudAccountInput() {
    return this._customerCloudAccount.internalValue;
  }

  // dedicated - computed: false, optional: true, required: false
  private _dedicated = new ClusterDedicatedOutputReference(this, "dedicated");
  public get dedicated() {
    return this._dedicated;
  }
  public putDedicated(value: ClusterDedicated) {
    this._dedicated.internalValue = value;
  }
  public resetDedicated() {
    this._dedicated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInput() {
    return this._dedicated.internalValue;
  }

  // delete_protection - computed: true, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // full_version - computed: true, optional: false, required: false
  public get fullVersion() {
    return this.getStringAttribute('full_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // operation_status - computed: true, optional: false, required: false
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // plan - computed: true, optional: true, required: false
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // regions - computed: false, optional: false, required: true
  private _regions = new ClusterRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
  public putRegions(value: ClusterRegions[] | cdktf.IResolvable) {
    this._regions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }

  // serverless - computed: false, optional: true, required: false
  private _serverless = new ClusterServerlessOutputReference(this, "serverless");
  public get serverless() {
    return this._serverless;
  }
  public putServerless(value: ClusterServerless) {
    this._serverless.internalValue = value;
  }
  public resetServerless() {
    this._serverless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // upgrade_status - computed: true, optional: false, required: false
  public get upgradeStatus() {
    return this.getStringAttribute('upgrade_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_config: clusterBackupConfigToTerraform(this._backupConfig.internalValue),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cockroach_version: cdktf.stringToTerraform(this._cockroachVersion),
      customer_cloud_account: clusterCustomerCloudAccountToTerraform(this._customerCloudAccount.internalValue),
      dedicated: clusterDedicatedToTerraform(this._dedicated.internalValue),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      plan: cdktf.stringToTerraform(this._plan),
      regions: cdktf.listMapper(clusterRegionsToTerraform, false)(this._regions.internalValue),
      serverless: clusterServerlessToTerraform(this._serverless.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_config: {
        value: clusterBackupConfigToHclTerraform(this._backupConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterBackupConfig",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cockroach_version: {
        value: cdktf.stringToHclTerraform(this._cockroachVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_cloud_account: {
        value: clusterCustomerCloudAccountToHclTerraform(this._customerCloudAccount.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterCustomerCloudAccount",
      },
      dedicated: {
        value: clusterDedicatedToHclTerraform(this._dedicated.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterDedicated",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(clusterRegionsToHclTerraform, false)(this._regions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterRegionsList",
      },
      serverless: {
        value: clusterServerlessToHclTerraform(this._serverless.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterServerless",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
