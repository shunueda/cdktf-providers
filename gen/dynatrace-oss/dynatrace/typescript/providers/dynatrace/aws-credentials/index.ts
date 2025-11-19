// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable monitoring of specified AWS credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#credentials_enabled AwsCredentials#credentials_enabled}
  */
  readonly credentialsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#id AwsCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#label AwsCredentials#label}
  */
  readonly label?: string;
  /**
  * The type of the AWS partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#partition_type AwsCredentials#partition_type}
  */
  readonly partitionType: string;
  /**
  * Instructs the provider to remove the supporting services Dynatrace applies by default to newly created AWS Credentials. Supporting Services applied by via `dynatrace_aws_service` subsequently won't get touched.
  * Note: This attribute is only getting considered during creation of the resource. Changing it afterwards won't have an effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#remove_defaults AwsCredentials#remove_defaults}
  */
  readonly removeDefaults?: boolean | cdktf.IResolvable;
  /**
  * Run credentials on Dynatrace infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#running_on_dynatrace_infrastructure AwsCredentials#running_on_dynatrace_infrastructure}
  */
  readonly runningOnDynatraceInfrastructure?: boolean | cdktf.IResolvable;
  /**
  * If enabled (`true`) the attribute `supporting_services` will not get synchronized with Dynatrace. You will be able to manage them via WebUI without interference by Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#supporting_services_managed_in_dynatrace AwsCredentials#supporting_services_managed_in_dynatrace}
  */
  readonly supportingServicesManagedInDynatrace?: boolean | cdktf.IResolvable;
  /**
  * Monitor only resources which have specified AWS tags (`true`) or all resources (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#tagged_only AwsCredentials#tagged_only}
  */
  readonly taggedOnly: boolean | cdktf.IResolvable;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#unknowns AwsCredentials#unknowns}
  */
  readonly unknowns?: string;
  /**
  * authentication_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#authentication_data AwsCredentials#authentication_data}
  */
  readonly authenticationData: AwsCredentialsAuthenticationData;
  /**
  * supporting_services_to_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#supporting_services_to_monitor AwsCredentials#supporting_services_to_monitor}
  */
  readonly supportingServicesToMonitor?: AwsCredentialsSupportingServicesToMonitor[] | cdktf.IResolvable;
  /**
  * tags_to_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#tags_to_monitor AwsCredentials#tags_to_monitor}
  */
  readonly tagsToMonitor?: AwsCredentialsTagsToMonitor[] | cdktf.IResolvable;
}
export interface AwsCredentialsAuthenticationData {
  /**
  * the access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#access_key AwsCredentials#access_key}
  */
  readonly accessKey?: string;
  /**
  * the ID of the Amazon account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#account_id AwsCredentials#account_id}
  */
  readonly accountId?: string;
  /**
  * the IAM role to be used by Dynatrace to get monitoring data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#iam_role AwsCredentials#iam_role}
  */
  readonly iamRole?: string;
  /**
  * the secret access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#secret_key AwsCredentials#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#unknowns AwsCredentials#unknowns}
  */
  readonly unknowns?: string;
}

export function awsCredentialsAuthenticationDataToTerraform(struct?: AwsCredentialsAuthenticationDataOutputReference | AwsCredentialsAuthenticationData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    iam_role: cdktf.stringToTerraform(struct!.iamRole),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function awsCredentialsAuthenticationDataToHclTerraform(struct?: AwsCredentialsAuthenticationDataOutputReference | AwsCredentialsAuthenticationData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role: {
      value: cdktf.stringToHclTerraform(struct!.iamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCredentialsAuthenticationDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsCredentialsAuthenticationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._iamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCredentialsAuthenticationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._accountId = undefined;
      this._iamRole = undefined;
      this._secretKey = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._accountId = value.accountId;
      this._iamRole = value.iamRole;
      this._secretKey = value.secretKey;
      this._unknowns = value.unknowns;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // iam_role - computed: false, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface AwsCredentialsSupportingServicesToMonitorMonitoredMetrics {
  /**
  * a list of metric's dimensions names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#dimensions AwsCredentials#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * the name of the metric of the supporting service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#name AwsCredentials#name}
  */
  readonly name?: string;
  /**
  * the statistic (aggregation) to be used for the metric. AVG_MIN_MAX value is 3 statistics at once: AVERAGE, MINIMUM and MAXIMUM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#statistic AwsCredentials#statistic}
  */
  readonly statistic?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#unknowns AwsCredentials#unknowns}
  */
  readonly unknowns?: string;
}

export function awsCredentialsSupportingServicesToMonitorMonitoredMetricsToTerraform(struct?: AwsCredentialsSupportingServicesToMonitorMonitoredMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    name: cdktf.stringToTerraform(struct!.name),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function awsCredentialsSupportingServicesToMonitorMonitoredMetricsToHclTerraform(struct?: AwsCredentialsSupportingServicesToMonitorMonitoredMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCredentialsSupportingServicesToMonitorMonitoredMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsCredentialsSupportingServicesToMonitorMonitoredMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCredentialsSupportingServicesToMonitorMonitoredMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._name = undefined;
      this._statistic = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._name = value.name;
      this._statistic = value.statistic;
      this._unknowns = value.unknowns;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

  // statistic - computed: false, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class AwsCredentialsSupportingServicesToMonitorMonitoredMetricsList extends cdktf.ComplexList {
  public internalValue? : AwsCredentialsSupportingServicesToMonitorMonitoredMetrics[] | cdktf.IResolvable

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
  public get(index: number): AwsCredentialsSupportingServicesToMonitorMonitoredMetricsOutputReference {
    return new AwsCredentialsSupportingServicesToMonitorMonitoredMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsCredentialsSupportingServicesToMonitor {
  /**
  * the name of the supporting service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#name AwsCredentials#name}
  */
  readonly name?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#unknowns AwsCredentials#unknowns}
  */
  readonly unknowns?: string;
  /**
  * monitored_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#monitored_metrics AwsCredentials#monitored_metrics}
  */
  readonly monitoredMetrics?: AwsCredentialsSupportingServicesToMonitorMonitoredMetrics[] | cdktf.IResolvable;
}

export function awsCredentialsSupportingServicesToMonitorToTerraform(struct?: AwsCredentialsSupportingServicesToMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    monitored_metrics: cdktf.listMapper(awsCredentialsSupportingServicesToMonitorMonitoredMetricsToTerraform, true)(struct!.monitoredMetrics),
  }
}


export function awsCredentialsSupportingServicesToMonitorToHclTerraform(struct?: AwsCredentialsSupportingServicesToMonitor | cdktf.IResolvable): any {
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitored_metrics: {
      value: cdktf.listMapperHcl(awsCredentialsSupportingServicesToMonitorMonitoredMetricsToHclTerraform, true)(struct!.monitoredMetrics),
      isBlock: true,
      type: "set",
      storageClassType: "AwsCredentialsSupportingServicesToMonitorMonitoredMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCredentialsSupportingServicesToMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsCredentialsSupportingServicesToMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._monitoredMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredMetrics = this._monitoredMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCredentialsSupportingServicesToMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._unknowns = undefined;
      this._monitoredMetrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._unknowns = value.unknowns;
      this._monitoredMetrics.internalValue = value.monitoredMetrics;
    }
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // monitored_metrics - computed: false, optional: true, required: false
  private _monitoredMetrics = new AwsCredentialsSupportingServicesToMonitorMonitoredMetricsList(this, "monitored_metrics", true);
  public get monitoredMetrics() {
    return this._monitoredMetrics;
  }
  public putMonitoredMetrics(value: AwsCredentialsSupportingServicesToMonitorMonitoredMetrics[] | cdktf.IResolvable) {
    this._monitoredMetrics.internalValue = value;
  }
  public resetMonitoredMetrics() {
    this._monitoredMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredMetricsInput() {
    return this._monitoredMetrics.internalValue;
  }
}

export class AwsCredentialsSupportingServicesToMonitorList extends cdktf.ComplexList {
  public internalValue? : AwsCredentialsSupportingServicesToMonitor[] | cdktf.IResolvable

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
  public get(index: number): AwsCredentialsSupportingServicesToMonitorOutputReference {
    return new AwsCredentialsSupportingServicesToMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsCredentialsTagsToMonitor {
  /**
  * the key of the AWS tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#name AwsCredentials#name}
  */
  readonly name?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#unknowns AwsCredentials#unknowns}
  */
  readonly unknowns?: string;
  /**
  * the value of the AWS tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#value AwsCredentials#value}
  */
  readonly value?: string;
}

export function awsCredentialsTagsToMonitorToTerraform(struct?: AwsCredentialsTagsToMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function awsCredentialsTagsToMonitorToHclTerraform(struct?: AwsCredentialsTagsToMonitor | cdktf.IResolvable): any {
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class AwsCredentialsTagsToMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsCredentialsTagsToMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCredentialsTagsToMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
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

export class AwsCredentialsTagsToMonitorList extends cdktf.ComplexList {
  public internalValue? : AwsCredentialsTagsToMonitor[] | cdktf.IResolvable

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
  public get(index: number): AwsCredentialsTagsToMonitorOutputReference {
    return new AwsCredentialsTagsToMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials dynatrace_aws_credentials}
*/
export class AwsCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_aws_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCredentials to import
  * @param importFromId The id of the existing AwsCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_aws_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_credentials dynatrace_aws_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_aws_credentials',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialsEnabled = config.credentialsEnabled;
    this._id = config.id;
    this._label = config.label;
    this._partitionType = config.partitionType;
    this._removeDefaults = config.removeDefaults;
    this._runningOnDynatraceInfrastructure = config.runningOnDynatraceInfrastructure;
    this._supportingServicesManagedInDynatrace = config.supportingServicesManagedInDynatrace;
    this._taggedOnly = config.taggedOnly;
    this._unknowns = config.unknowns;
    this._authenticationData.internalValue = config.authenticationData;
    this._supportingServicesToMonitor.internalValue = config.supportingServicesToMonitor;
    this._tagsToMonitor.internalValue = config.tagsToMonitor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_enabled - computed: false, optional: true, required: false
  private _credentialsEnabled?: boolean | cdktf.IResolvable; 
  public get credentialsEnabled() {
    return this.getBooleanAttribute('credentials_enabled');
  }
  public set credentialsEnabled(value: boolean | cdktf.IResolvable) {
    this._credentialsEnabled = value;
  }
  public resetCredentialsEnabled() {
    this._credentialsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsEnabledInput() {
    return this._credentialsEnabled;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // partition_type - computed: false, optional: false, required: true
  private _partitionType?: string; 
  public get partitionType() {
    return this.getStringAttribute('partition_type');
  }
  public set partitionType(value: string) {
    this._partitionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionTypeInput() {
    return this._partitionType;
  }

  // remove_defaults - computed: false, optional: true, required: false
  private _removeDefaults?: boolean | cdktf.IResolvable; 
  public get removeDefaults() {
    return this.getBooleanAttribute('remove_defaults');
  }
  public set removeDefaults(value: boolean | cdktf.IResolvable) {
    this._removeDefaults = value;
  }
  public resetRemoveDefaults() {
    this._removeDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDefaultsInput() {
    return this._removeDefaults;
  }

  // running_on_dynatrace_infrastructure - computed: false, optional: true, required: false
  private _runningOnDynatraceInfrastructure?: boolean | cdktf.IResolvable; 
  public get runningOnDynatraceInfrastructure() {
    return this.getBooleanAttribute('running_on_dynatrace_infrastructure');
  }
  public set runningOnDynatraceInfrastructure(value: boolean | cdktf.IResolvable) {
    this._runningOnDynatraceInfrastructure = value;
  }
  public resetRunningOnDynatraceInfrastructure() {
    this._runningOnDynatraceInfrastructure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningOnDynatraceInfrastructureInput() {
    return this._runningOnDynatraceInfrastructure;
  }

  // supporting_services_managed_in_dynatrace - computed: false, optional: true, required: false
  private _supportingServicesManagedInDynatrace?: boolean | cdktf.IResolvable; 
  public get supportingServicesManagedInDynatrace() {
    return this.getBooleanAttribute('supporting_services_managed_in_dynatrace');
  }
  public set supportingServicesManagedInDynatrace(value: boolean | cdktf.IResolvable) {
    this._supportingServicesManagedInDynatrace = value;
  }
  public resetSupportingServicesManagedInDynatrace() {
    this._supportingServicesManagedInDynatrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportingServicesManagedInDynatraceInput() {
    return this._supportingServicesManagedInDynatrace;
  }

  // tagged_only - computed: false, optional: false, required: true
  private _taggedOnly?: boolean | cdktf.IResolvable; 
  public get taggedOnly() {
    return this.getBooleanAttribute('tagged_only');
  }
  public set taggedOnly(value: boolean | cdktf.IResolvable) {
    this._taggedOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedOnlyInput() {
    return this._taggedOnly;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // authentication_data - computed: false, optional: false, required: true
  private _authenticationData = new AwsCredentialsAuthenticationDataOutputReference(this, "authentication_data");
  public get authenticationData() {
    return this._authenticationData;
  }
  public putAuthenticationData(value: AwsCredentialsAuthenticationData) {
    this._authenticationData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationDataInput() {
    return this._authenticationData.internalValue;
  }

  // supporting_services_to_monitor - computed: false, optional: true, required: false
  private _supportingServicesToMonitor = new AwsCredentialsSupportingServicesToMonitorList(this, "supporting_services_to_monitor", true);
  public get supportingServicesToMonitor() {
    return this._supportingServicesToMonitor;
  }
  public putSupportingServicesToMonitor(value: AwsCredentialsSupportingServicesToMonitor[] | cdktf.IResolvable) {
    this._supportingServicesToMonitor.internalValue = value;
  }
  public resetSupportingServicesToMonitor() {
    this._supportingServicesToMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportingServicesToMonitorInput() {
    return this._supportingServicesToMonitor.internalValue;
  }

  // tags_to_monitor - computed: false, optional: true, required: false
  private _tagsToMonitor = new AwsCredentialsTagsToMonitorList(this, "tags_to_monitor", true);
  public get tagsToMonitor() {
    return this._tagsToMonitor;
  }
  public putTagsToMonitor(value: AwsCredentialsTagsToMonitor[] | cdktf.IResolvable) {
    this._tagsToMonitor.internalValue = value;
  }
  public resetTagsToMonitor() {
    this._tagsToMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsToMonitorInput() {
    return this._tagsToMonitor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_enabled: cdktf.booleanToTerraform(this._credentialsEnabled),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      partition_type: cdktf.stringToTerraform(this._partitionType),
      remove_defaults: cdktf.booleanToTerraform(this._removeDefaults),
      running_on_dynatrace_infrastructure: cdktf.booleanToTerraform(this._runningOnDynatraceInfrastructure),
      supporting_services_managed_in_dynatrace: cdktf.booleanToTerraform(this._supportingServicesManagedInDynatrace),
      tagged_only: cdktf.booleanToTerraform(this._taggedOnly),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      authentication_data: awsCredentialsAuthenticationDataToTerraform(this._authenticationData.internalValue),
      supporting_services_to_monitor: cdktf.listMapper(awsCredentialsSupportingServicesToMonitorToTerraform, true)(this._supportingServicesToMonitor.internalValue),
      tags_to_monitor: cdktf.listMapper(awsCredentialsTagsToMonitorToTerraform, true)(this._tagsToMonitor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_enabled: {
        value: cdktf.booleanToHclTerraform(this._credentialsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_type: {
        value: cdktf.stringToHclTerraform(this._partitionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_defaults: {
        value: cdktf.booleanToHclTerraform(this._removeDefaults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      running_on_dynatrace_infrastructure: {
        value: cdktf.booleanToHclTerraform(this._runningOnDynatraceInfrastructure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supporting_services_managed_in_dynatrace: {
        value: cdktf.booleanToHclTerraform(this._supportingServicesManagedInDynatrace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tagged_only: {
        value: cdktf.booleanToHclTerraform(this._taggedOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_data: {
        value: awsCredentialsAuthenticationDataToHclTerraform(this._authenticationData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCredentialsAuthenticationDataList",
      },
      supporting_services_to_monitor: {
        value: cdktf.listMapperHcl(awsCredentialsSupportingServicesToMonitorToHclTerraform, true)(this._supportingServicesToMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsCredentialsSupportingServicesToMonitorList",
      },
      tags_to_monitor: {
        value: cdktf.listMapperHcl(awsCredentialsTagsToMonitorToHclTerraform, true)(this._tagsToMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsCredentialsTagsToMonitorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
