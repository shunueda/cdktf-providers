// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAwsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#account_id CloudAwsAccount#account_id}
  */
  readonly accountId: string;
  /**
  * The AWS account type. Value is 'commercial' for Commercial cloud accounts. For GovCloud environments, value can be either 'commercial' or 'gov' depending on the account type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#account_type CloudAwsAccount#account_type}
  */
  readonly accountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#asset_inventory CloudAwsAccount#asset_inventory}
  */
  readonly assetInventory?: CloudAwsAccountAssetInventory;
  /**
  * How the account was deployed. Valid values are 'terraform-native' and 'terraform-cft'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#deployment_method CloudAwsAccount#deployment_method}
  */
  readonly deploymentMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#dspm CloudAwsAccount#dspm}
  */
  readonly dspm?: CloudAwsAccountDspm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#idp CloudAwsAccount#idp}
  */
  readonly idp?: CloudAwsAccountIdp;
  /**
  * The AWS Organization ID (starts with `o-`). When specified, accounts within the organization will be registered. If `target_ous` is empty, all accounts in the organization will be registered. The `account_id` must be the organization's management account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#organization_id CloudAwsAccount#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Configuration for real-time visibility and detection. When not specified, defaults to disabled (enabled=false) with cloudtrail_region set based on account_type (us-gov-west-1 for gov accounts, us-east-1 for commercial accounts) and use_existing_cloudtrail=true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#realtime_visibility CloudAwsAccount#realtime_visibility}
  */
  readonly realtimeVisibility?: CloudAwsAccountRealtimeVisibility;
  /**
  * The prefix to be added to all resource names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#resource_name_prefix CloudAwsAccount#resource_name_prefix}
  */
  readonly resourceNamePrefix?: string;
  /**
  * The suffix to be added to all resource names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#resource_name_suffix CloudAwsAccount#resource_name_suffix}
  */
  readonly resourceNameSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#sensor_management CloudAwsAccount#sensor_management}
  */
  readonly sensorManagement?: CloudAwsAccountSensorManagement;
  /**
  * The list of target Organizational Units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#target_ous CloudAwsAccount#target_ous}
  */
  readonly targetOus?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#vulnerability_scanning CloudAwsAccount#vulnerability_scanning}
  */
  readonly vulnerabilityScanning?: CloudAwsAccountVulnerabilityScanning;
}
export interface CloudAwsAccountAssetInventory {
  /**
  * Enable asset inventory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#enabled CloudAwsAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Custom AWS IAM role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#role_name CloudAwsAccount#role_name}
  */
  readonly roleName?: string;
}

export function cloudAwsAccountAssetInventoryToTerraform(struct?: CloudAwsAccountAssetInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function cloudAwsAccountAssetInventoryToHclTerraform(struct?: CloudAwsAccountAssetInventory | cdktf.IResolvable): any {
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
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsAccountAssetInventoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAwsAccountAssetInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsAccountAssetInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._roleName = value.roleName;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface CloudAwsAccountDspm {
  /**
  * Enable Data Security Posture Management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#enabled CloudAwsAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Custom AWS IAM role name for Data Security Posture Management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#role_name CloudAwsAccount#role_name}
  */
  readonly roleName?: string;
}

export function cloudAwsAccountDspmToTerraform(struct?: CloudAwsAccountDspm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function cloudAwsAccountDspmToHclTerraform(struct?: CloudAwsAccountDspm | cdktf.IResolvable): any {
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
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsAccountDspmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAwsAccountDspm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsAccountDspm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._roleName = value.roleName;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface CloudAwsAccountIdp {
  /**
  * Enable Identity Protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#enabled CloudAwsAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudAwsAccountIdpToTerraform(struct?: CloudAwsAccountIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudAwsAccountIdpToHclTerraform(struct?: CloudAwsAccountIdp | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsAccountIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAwsAccountIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsAccountIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface CloudAwsAccountRealtimeVisibility {
  /**
  * The AWS region of the CloudTrail bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#cloudtrail_region CloudAwsAccount#cloudtrail_region}
  */
  readonly cloudtrailRegion: string;
  /**
  * Enable real-time visibility and detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#enabled CloudAwsAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Optional KMS key ARN for S3 bucket encryption when log_ingestion_method is 's3'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#log_ingestion_kms_key_arn CloudAwsAccount#log_ingestion_kms_key_arn}
  */
  readonly logIngestionKmsKeyArn?: string;
  /**
  * Log ingestion method for real-time visibility. Valid values are 'eventbridge' or 's3'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#log_ingestion_method CloudAwsAccount#log_ingestion_method}
  */
  readonly logIngestionMethod?: string;
  /**
  * S3 bucket name for CloudTrail log ingestion when log_ingestion_method is 's3'. Required when using S3 method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#log_ingestion_s3_bucket_name CloudAwsAccount#log_ingestion_s3_bucket_name}
  */
  readonly logIngestionS3BucketName?: string;
  /**
  * Optional S3 bucket prefix (a prefix used for filter log files with the prefix present in their key) for CloudTrail logs when log_ingestion_method is 's3'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#log_ingestion_s3_bucket_prefix CloudAwsAccount#log_ingestion_s3_bucket_prefix}
  */
  readonly logIngestionS3BucketPrefix?: string;
  /**
  * SNS topic ARN for S3 CloudTrail log notifications when log_ingestion_method is 's3'. Required when using S3 method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#log_ingestion_sns_topic_arn CloudAwsAccount#log_ingestion_sns_topic_arn}
  */
  readonly logIngestionSnsTopicArn?: string;
  /**
  * List of AWS regions for Real-Time Visibility and Detection. If not specified, defaults to all regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#regions CloudAwsAccount#regions}
  */
  readonly regions?: string[];
  /**
  * Set to true if a CloudTrail already exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#use_existing_cloudtrail CloudAwsAccount#use_existing_cloudtrail}
  */
  readonly useExistingCloudtrail?: boolean | cdktf.IResolvable;
}

export function cloudAwsAccountRealtimeVisibilityToTerraform(struct?: CloudAwsAccountRealtimeVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudtrail_region: cdktf.stringToTerraform(struct!.cloudtrailRegion),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_ingestion_kms_key_arn: cdktf.stringToTerraform(struct!.logIngestionKmsKeyArn),
    log_ingestion_method: cdktf.stringToTerraform(struct!.logIngestionMethod),
    log_ingestion_s3_bucket_name: cdktf.stringToTerraform(struct!.logIngestionS3BucketName),
    log_ingestion_s3_bucket_prefix: cdktf.stringToTerraform(struct!.logIngestionS3BucketPrefix),
    log_ingestion_sns_topic_arn: cdktf.stringToTerraform(struct!.logIngestionSnsTopicArn),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    use_existing_cloudtrail: cdktf.booleanToTerraform(struct!.useExistingCloudtrail),
  }
}


export function cloudAwsAccountRealtimeVisibilityToHclTerraform(struct?: CloudAwsAccountRealtimeVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudtrail_region: {
      value: cdktf.stringToHclTerraform(struct!.cloudtrailRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_ingestion_kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.logIngestionKmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_ingestion_method: {
      value: cdktf.stringToHclTerraform(struct!.logIngestionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_ingestion_s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.logIngestionS3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_ingestion_s3_bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logIngestionS3BucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_ingestion_sns_topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.logIngestionSnsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_existing_cloudtrail: {
      value: cdktf.booleanToHclTerraform(struct!.useExistingCloudtrail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsAccountRealtimeVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAwsAccountRealtimeVisibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudtrailRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudtrailRegion = this._cloudtrailRegion;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logIngestionKmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logIngestionKmsKeyArn = this._logIngestionKmsKeyArn;
    }
    if (this._logIngestionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.logIngestionMethod = this._logIngestionMethod;
    }
    if (this._logIngestionS3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logIngestionS3BucketName = this._logIngestionS3BucketName;
    }
    if (this._logIngestionS3BucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logIngestionS3BucketPrefix = this._logIngestionS3BucketPrefix;
    }
    if (this._logIngestionSnsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logIngestionSnsTopicArn = this._logIngestionSnsTopicArn;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._useExistingCloudtrail !== undefined) {
      hasAnyValues = true;
      internalValueResult.useExistingCloudtrail = this._useExistingCloudtrail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsAccountRealtimeVisibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudtrailRegion = undefined;
      this._enabled = undefined;
      this._logIngestionKmsKeyArn = undefined;
      this._logIngestionMethod = undefined;
      this._logIngestionS3BucketName = undefined;
      this._logIngestionS3BucketPrefix = undefined;
      this._logIngestionSnsTopicArn = undefined;
      this._regions = undefined;
      this._useExistingCloudtrail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudtrailRegion = value.cloudtrailRegion;
      this._enabled = value.enabled;
      this._logIngestionKmsKeyArn = value.logIngestionKmsKeyArn;
      this._logIngestionMethod = value.logIngestionMethod;
      this._logIngestionS3BucketName = value.logIngestionS3BucketName;
      this._logIngestionS3BucketPrefix = value.logIngestionS3BucketPrefix;
      this._logIngestionSnsTopicArn = value.logIngestionSnsTopicArn;
      this._regions = value.regions;
      this._useExistingCloudtrail = value.useExistingCloudtrail;
    }
  }

  // cloudtrail_region - computed: true, optional: false, required: true
  private _cloudtrailRegion?: string; 
  public get cloudtrailRegion() {
    return this.getStringAttribute('cloudtrail_region');
  }
  public set cloudtrailRegion(value: string) {
    this._cloudtrailRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudtrailRegionInput() {
    return this._cloudtrailRegion;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_ingestion_kms_key_arn - computed: true, optional: true, required: false
  private _logIngestionKmsKeyArn?: string; 
  public get logIngestionKmsKeyArn() {
    return this.getStringAttribute('log_ingestion_kms_key_arn');
  }
  public set logIngestionKmsKeyArn(value: string) {
    this._logIngestionKmsKeyArn = value;
  }
  public resetLogIngestionKmsKeyArn() {
    this._logIngestionKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIngestionKmsKeyArnInput() {
    return this._logIngestionKmsKeyArn;
  }

  // log_ingestion_method - computed: true, optional: true, required: false
  private _logIngestionMethod?: string; 
  public get logIngestionMethod() {
    return this.getStringAttribute('log_ingestion_method');
  }
  public set logIngestionMethod(value: string) {
    this._logIngestionMethod = value;
  }
  public resetLogIngestionMethod() {
    this._logIngestionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIngestionMethodInput() {
    return this._logIngestionMethod;
  }

  // log_ingestion_s3_bucket_name - computed: true, optional: true, required: false
  private _logIngestionS3BucketName?: string; 
  public get logIngestionS3BucketName() {
    return this.getStringAttribute('log_ingestion_s3_bucket_name');
  }
  public set logIngestionS3BucketName(value: string) {
    this._logIngestionS3BucketName = value;
  }
  public resetLogIngestionS3BucketName() {
    this._logIngestionS3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIngestionS3BucketNameInput() {
    return this._logIngestionS3BucketName;
  }

  // log_ingestion_s3_bucket_prefix - computed: true, optional: true, required: false
  private _logIngestionS3BucketPrefix?: string; 
  public get logIngestionS3BucketPrefix() {
    return this.getStringAttribute('log_ingestion_s3_bucket_prefix');
  }
  public set logIngestionS3BucketPrefix(value: string) {
    this._logIngestionS3BucketPrefix = value;
  }
  public resetLogIngestionS3BucketPrefix() {
    this._logIngestionS3BucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIngestionS3BucketPrefixInput() {
    return this._logIngestionS3BucketPrefix;
  }

  // log_ingestion_sns_topic_arn - computed: true, optional: true, required: false
  private _logIngestionSnsTopicArn?: string; 
  public get logIngestionSnsTopicArn() {
    return this.getStringAttribute('log_ingestion_sns_topic_arn');
  }
  public set logIngestionSnsTopicArn(value: string) {
    this._logIngestionSnsTopicArn = value;
  }
  public resetLogIngestionSnsTopicArn() {
    this._logIngestionSnsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIngestionSnsTopicArnInput() {
    return this._logIngestionSnsTopicArn;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // use_existing_cloudtrail - computed: true, optional: true, required: false
  private _useExistingCloudtrail?: boolean | cdktf.IResolvable; 
  public get useExistingCloudtrail() {
    return this.getBooleanAttribute('use_existing_cloudtrail');
  }
  public set useExistingCloudtrail(value: boolean | cdktf.IResolvable) {
    this._useExistingCloudtrail = value;
  }
  public resetUseExistingCloudtrail() {
    this._useExistingCloudtrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExistingCloudtrailInput() {
    return this._useExistingCloudtrail;
  }
}
export interface CloudAwsAccountSensorManagement {
  /**
  * Enable 1-click sensor deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#enabled CloudAwsAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudAwsAccountSensorManagementToTerraform(struct?: CloudAwsAccountSensorManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudAwsAccountSensorManagementToHclTerraform(struct?: CloudAwsAccountSensorManagement | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsAccountSensorManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAwsAccountSensorManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsAccountSensorManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CloudAwsAccountVulnerabilityScanning {
  /**
  * Enable Vulnerability Scanning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#enabled CloudAwsAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Custom AWS IAM role name for Vulnerability Scanning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#role_name CloudAwsAccount#role_name}
  */
  readonly roleName?: string;
}

export function cloudAwsAccountVulnerabilityScanningToTerraform(struct?: CloudAwsAccountVulnerabilityScanning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function cloudAwsAccountVulnerabilityScanningToHclTerraform(struct?: CloudAwsAccountVulnerabilityScanning | cdktf.IResolvable): any {
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
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsAccountVulnerabilityScanningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAwsAccountVulnerabilityScanning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsAccountVulnerabilityScanning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._roleName = value.roleName;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account crowdstrike_cloud_aws_account}
*/
export class CloudAwsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_aws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAwsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAwsAccount to import
  * @param importFromId The id of the existing CloudAwsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAwsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_aws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_aws_account crowdstrike_cloud_aws_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAwsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAwsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_aws_account',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.53',
        providerVersionConstraint: '0.0.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._accountType = config.accountType;
    this._assetInventory.internalValue = config.assetInventory;
    this._deploymentMethod = config.deploymentMethod;
    this._dspm.internalValue = config.dspm;
    this._idp.internalValue = config.idp;
    this._organizationId = config.organizationId;
    this._realtimeVisibility.internalValue = config.realtimeVisibility;
    this._resourceNamePrefix = config.resourceNamePrefix;
    this._resourceNameSuffix = config.resourceNameSuffix;
    this._sensorManagement.internalValue = config.sensorManagement;
    this._targetOus = config.targetOus;
    this._vulnerabilityScanning.internalValue = config.vulnerabilityScanning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_type - computed: true, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // agentless_scanning_role_name - computed: true, optional: false, required: false
  public get agentlessScanningRoleName() {
    return this.getStringAttribute('agentless_scanning_role_name');
  }

  // asset_inventory - computed: true, optional: true, required: false
  private _assetInventory = new CloudAwsAccountAssetInventoryOutputReference(this, "asset_inventory");
  public get assetInventory() {
    return this._assetInventory;
  }
  public putAssetInventory(value: CloudAwsAccountAssetInventory) {
    this._assetInventory.internalValue = value;
  }
  public resetAssetInventory() {
    this._assetInventory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInventoryInput() {
    return this._assetInventory.internalValue;
  }

  // cloudtrail_bucket_name - computed: true, optional: false, required: false
  public get cloudtrailBucketName() {
    return this.getStringAttribute('cloudtrail_bucket_name');
  }

  // deployment_method - computed: true, optional: true, required: false
  private _deploymentMethod?: string; 
  public get deploymentMethod() {
    return this.getStringAttribute('deployment_method');
  }
  public set deploymentMethod(value: string) {
    this._deploymentMethod = value;
  }
  public resetDeploymentMethod() {
    this._deploymentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMethodInput() {
    return this._deploymentMethod;
  }

  // dspm - computed: true, optional: true, required: false
  private _dspm = new CloudAwsAccountDspmOutputReference(this, "dspm");
  public get dspm() {
    return this._dspm;
  }
  public putDspm(value: CloudAwsAccountDspm) {
    this._dspm.internalValue = value;
  }
  public resetDspm() {
    this._dspm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dspmInput() {
    return this._dspm.internalValue;
  }

  // dspm_role_arn - computed: true, optional: false, required: false
  public get dspmRoleArn() {
    return this.getStringAttribute('dspm_role_arn');
  }

  // dspm_role_name - computed: true, optional: false, required: false
  public get dspmRoleName() {
    return this.getStringAttribute('dspm_role_name');
  }

  // eventbus_arn - computed: true, optional: false, required: false
  public get eventbusArn() {
    return this.getStringAttribute('eventbus_arn');
  }

  // eventbus_name - computed: true, optional: false, required: false
  public get eventbusName() {
    return this.getStringAttribute('eventbus_name');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // iam_role_name - computed: true, optional: false, required: false
  public get iamRoleName() {
    return this.getStringAttribute('iam_role_name');
  }

  // idp - computed: true, optional: true, required: false
  private _idp = new CloudAwsAccountIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }
  public putIdp(value: CloudAwsAccountIdp) {
    this._idp.internalValue = value;
  }
  public resetIdp() {
    this._idp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp.internalValue;
  }

  // intermediate_role_arn - computed: true, optional: false, required: false
  public get intermediateRoleArn() {
    return this.getStringAttribute('intermediate_role_arn');
  }

  // is_organization_management_account - computed: true, optional: false, required: false
  public get isOrganizationManagementAccount() {
    return this.getBooleanAttribute('is_organization_management_account');
  }

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // realtime_visibility - computed: true, optional: true, required: false
  private _realtimeVisibility = new CloudAwsAccountRealtimeVisibilityOutputReference(this, "realtime_visibility");
  public get realtimeVisibility() {
    return this._realtimeVisibility;
  }
  public putRealtimeVisibility(value: CloudAwsAccountRealtimeVisibility) {
    this._realtimeVisibility.internalValue = value;
  }
  public resetRealtimeVisibility() {
    this._realtimeVisibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeVisibilityInput() {
    return this._realtimeVisibility.internalValue;
  }

  // resource_name_prefix - computed: true, optional: true, required: false
  private _resourceNamePrefix?: string; 
  public get resourceNamePrefix() {
    return this.getStringAttribute('resource_name_prefix');
  }
  public set resourceNamePrefix(value: string) {
    this._resourceNamePrefix = value;
  }
  public resetResourceNamePrefix() {
    this._resourceNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamePrefixInput() {
    return this._resourceNamePrefix;
  }

  // resource_name_suffix - computed: true, optional: true, required: false
  private _resourceNameSuffix?: string; 
  public get resourceNameSuffix() {
    return this.getStringAttribute('resource_name_suffix');
  }
  public set resourceNameSuffix(value: string) {
    this._resourceNameSuffix = value;
  }
  public resetResourceNameSuffix() {
    this._resourceNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameSuffixInput() {
    return this._resourceNameSuffix;
  }

  // sensor_management - computed: true, optional: true, required: false
  private _sensorManagement = new CloudAwsAccountSensorManagementOutputReference(this, "sensor_management");
  public get sensorManagement() {
    return this._sensorManagement;
  }
  public putSensorManagement(value: CloudAwsAccountSensorManagement) {
    this._sensorManagement.internalValue = value;
  }
  public resetSensorManagement() {
    this._sensorManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorManagementInput() {
    return this._sensorManagement.internalValue;
  }

  // target_ous - computed: true, optional: true, required: false
  private _targetOus?: string[]; 
  public get targetOus() {
    return this.getListAttribute('target_ous');
  }
  public set targetOus(value: string[]) {
    this._targetOus = value;
  }
  public resetTargetOus() {
    this._targetOus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOusInput() {
    return this._targetOus;
  }

  // vulnerability_scanning - computed: true, optional: true, required: false
  private _vulnerabilityScanning = new CloudAwsAccountVulnerabilityScanningOutputReference(this, "vulnerability_scanning");
  public get vulnerabilityScanning() {
    return this._vulnerabilityScanning;
  }
  public putVulnerabilityScanning(value: CloudAwsAccountVulnerabilityScanning) {
    this._vulnerabilityScanning.internalValue = value;
  }
  public resetVulnerabilityScanning() {
    this._vulnerabilityScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityScanningInput() {
    return this._vulnerabilityScanning.internalValue;
  }

  // vulnerability_scanning_role_arn - computed: true, optional: false, required: false
  public get vulnerabilityScanningRoleArn() {
    return this.getStringAttribute('vulnerability_scanning_role_arn');
  }

  // vulnerability_scanning_role_name - computed: true, optional: false, required: false
  public get vulnerabilityScanningRoleName() {
    return this.getStringAttribute('vulnerability_scanning_role_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      account_type: cdktf.stringToTerraform(this._accountType),
      asset_inventory: cloudAwsAccountAssetInventoryToTerraform(this._assetInventory.internalValue),
      deployment_method: cdktf.stringToTerraform(this._deploymentMethod),
      dspm: cloudAwsAccountDspmToTerraform(this._dspm.internalValue),
      idp: cloudAwsAccountIdpToTerraform(this._idp.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      realtime_visibility: cloudAwsAccountRealtimeVisibilityToTerraform(this._realtimeVisibility.internalValue),
      resource_name_prefix: cdktf.stringToTerraform(this._resourceNamePrefix),
      resource_name_suffix: cdktf.stringToTerraform(this._resourceNameSuffix),
      sensor_management: cloudAwsAccountSensorManagementToTerraform(this._sensorManagement.internalValue),
      target_ous: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetOus),
      vulnerability_scanning: cloudAwsAccountVulnerabilityScanningToTerraform(this._vulnerabilityScanning.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_inventory: {
        value: cloudAwsAccountAssetInventoryToHclTerraform(this._assetInventory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAwsAccountAssetInventory",
      },
      deployment_method: {
        value: cdktf.stringToHclTerraform(this._deploymentMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dspm: {
        value: cloudAwsAccountDspmToHclTerraform(this._dspm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAwsAccountDspm",
      },
      idp: {
        value: cloudAwsAccountIdpToHclTerraform(this._idp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAwsAccountIdp",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realtime_visibility: {
        value: cloudAwsAccountRealtimeVisibilityToHclTerraform(this._realtimeVisibility.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAwsAccountRealtimeVisibility",
      },
      resource_name_prefix: {
        value: cdktf.stringToHclTerraform(this._resourceNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name_suffix: {
        value: cdktf.stringToHclTerraform(this._resourceNameSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensor_management: {
        value: cloudAwsAccountSensorManagementToHclTerraform(this._sensorManagement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAwsAccountSensorManagement",
      },
      target_ous: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetOus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vulnerability_scanning: {
        value: cloudAwsAccountVulnerabilityScanningToHclTerraform(this._vulnerabilityScanning.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAwsAccountVulnerabilityScanning",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
