// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#id AwsAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ec_2_candidate_high_cpu_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#ec_2_candidate_high_cpu_detection AwsAnomalies#ec_2_candidate_high_cpu_detection}
  */
  readonly ec2CandidateHighCpuDetection: AwsAnomaliesEc2CandidateHighCpuDetection;
  /**
  * elb_high_connection_errors_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#elb_high_connection_errors_detection AwsAnomalies#elb_high_connection_errors_detection}
  */
  readonly elbHighConnectionErrorsDetection: AwsAnomaliesElbHighConnectionErrorsDetection;
  /**
  * lambda_high_error_rate_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#lambda_high_error_rate_detection AwsAnomalies#lambda_high_error_rate_detection}
  */
  readonly lambdaHighErrorRateDetection: AwsAnomaliesLambdaHighErrorRateDetection;
  /**
  * rds_high_cpu_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#rds_high_cpu_detection AwsAnomalies#rds_high_cpu_detection}
  */
  readonly rdsHighCpuDetection: AwsAnomaliesRdsHighCpuDetection;
  /**
  * rds_high_memory_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#rds_high_memory_detection AwsAnomalies#rds_high_memory_detection}
  */
  readonly rdsHighMemoryDetection: AwsAnomaliesRdsHighMemoryDetection;
  /**
  * rds_high_write_read_latency_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#rds_high_write_read_latency_detection AwsAnomalies#rds_high_write_read_latency_detection}
  */
  readonly rdsHighWriteReadLatencyDetection: AwsAnomaliesRdsHighWriteReadLatencyDetection;
  /**
  * rds_low_storage_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#rds_low_storage_detection AwsAnomalies#rds_low_storage_detection}
  */
  readonly rdsLowStorageDetection: AwsAnomaliesRdsLowStorageDetection;
  /**
  * rds_restarts_sequence_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#rds_restarts_sequence_detection AwsAnomalies#rds_restarts_sequence_detection}
  */
  readonly rdsRestartsSequenceDetection: AwsAnomaliesRdsRestartsSequenceDetection;
}
export interface AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholds {
  /**
  * CPU usage is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#cpu_usage AwsAnomalies#cpu_usage}
  */
  readonly cpuUsage: number;
}

export function awsAnomaliesEc2CandidateHighCpuDetectionCustomThresholdsToTerraform(struct?: AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholdsOutputReference | AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_usage: cdktf.numberToTerraform(struct!.cpuUsage),
  }
}


export function awsAnomaliesEc2CandidateHighCpuDetectionCustomThresholdsToHclTerraform(struct?: AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholdsOutputReference | AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_usage: {
      value: cdktf.numberToHclTerraform(struct!.cpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsage = this._cpuUsage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUsage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUsage = value.cpuUsage;
    }
  }

  // cpu_usage - computed: false, optional: false, required: true
  private _cpuUsage?: number; 
  public get cpuUsage() {
    return this.getNumberAttribute('cpu_usage');
  }
  public set cpuUsage(value: number) {
    this._cpuUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage;
  }
}
export interface AwsAnomaliesEc2CandidateHighCpuDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#detection_mode AwsAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#enabled AwsAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#custom_thresholds AwsAnomalies#custom_thresholds}
  */
  readonly customThresholds?: AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholds;
}

export function awsAnomaliesEc2CandidateHighCpuDetectionToTerraform(struct?: AwsAnomaliesEc2CandidateHighCpuDetectionOutputReference | AwsAnomaliesEc2CandidateHighCpuDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: awsAnomaliesEc2CandidateHighCpuDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function awsAnomaliesEc2CandidateHighCpuDetectionToHclTerraform(struct?: AwsAnomaliesEc2CandidateHighCpuDetectionOutputReference | AwsAnomaliesEc2CandidateHighCpuDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
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
    custom_thresholds: {
      value: awsAnomaliesEc2CandidateHighCpuDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesEc2CandidateHighCpuDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesEc2CandidateHighCpuDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesEc2CandidateHighCpuDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // enabled - computed: false, optional: false, required: true
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: AwsAnomaliesEc2CandidateHighCpuDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholds {
  /**
  * Number of backend connection errors is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#connection_errors_per_minute AwsAnomalies#connection_errors_per_minute}
  */
  readonly connectionErrorsPerMinute: number;
}

export function awsAnomaliesElbHighConnectionErrorsDetectionCustomThresholdsToTerraform(struct?: AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholdsOutputReference | AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_errors_per_minute: cdktf.numberToTerraform(struct!.connectionErrorsPerMinute),
  }
}


export function awsAnomaliesElbHighConnectionErrorsDetectionCustomThresholdsToHclTerraform(struct?: AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholdsOutputReference | AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_errors_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.connectionErrorsPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionErrorsPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionErrorsPerMinute = this._connectionErrorsPerMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionErrorsPerMinute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionErrorsPerMinute = value.connectionErrorsPerMinute;
    }
  }

  // connection_errors_per_minute - computed: false, optional: false, required: true
  private _connectionErrorsPerMinute?: number; 
  public get connectionErrorsPerMinute() {
    return this.getNumberAttribute('connection_errors_per_minute');
  }
  public set connectionErrorsPerMinute(value: number) {
    this._connectionErrorsPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionErrorsPerMinuteInput() {
    return this._connectionErrorsPerMinute;
  }
}
export interface AwsAnomaliesElbHighConnectionErrorsDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#detection_mode AwsAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#enabled AwsAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#custom_thresholds AwsAnomalies#custom_thresholds}
  */
  readonly customThresholds?: AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholds;
}

export function awsAnomaliesElbHighConnectionErrorsDetectionToTerraform(struct?: AwsAnomaliesElbHighConnectionErrorsDetectionOutputReference | AwsAnomaliesElbHighConnectionErrorsDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: awsAnomaliesElbHighConnectionErrorsDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function awsAnomaliesElbHighConnectionErrorsDetectionToHclTerraform(struct?: AwsAnomaliesElbHighConnectionErrorsDetectionOutputReference | AwsAnomaliesElbHighConnectionErrorsDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
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
    custom_thresholds: {
      value: awsAnomaliesElbHighConnectionErrorsDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesElbHighConnectionErrorsDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesElbHighConnectionErrorsDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesElbHighConnectionErrorsDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // enabled - computed: false, optional: false, required: true
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: AwsAnomaliesElbHighConnectionErrorsDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholds {
  /**
  * Failed invocations rate is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#failed_invocations_rate AwsAnomalies#failed_invocations_rate}
  */
  readonly failedInvocationsRate: number;
}

export function awsAnomaliesLambdaHighErrorRateDetectionCustomThresholdsToTerraform(struct?: AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholdsOutputReference | AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_invocations_rate: cdktf.numberToTerraform(struct!.failedInvocationsRate),
  }
}


export function awsAnomaliesLambdaHighErrorRateDetectionCustomThresholdsToHclTerraform(struct?: AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholdsOutputReference | AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_invocations_rate: {
      value: cdktf.numberToHclTerraform(struct!.failedInvocationsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedInvocationsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedInvocationsRate = this._failedInvocationsRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failedInvocationsRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failedInvocationsRate = value.failedInvocationsRate;
    }
  }

  // failed_invocations_rate - computed: false, optional: false, required: true
  private _failedInvocationsRate?: number; 
  public get failedInvocationsRate() {
    return this.getNumberAttribute('failed_invocations_rate');
  }
  public set failedInvocationsRate(value: number) {
    this._failedInvocationsRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInvocationsRateInput() {
    return this._failedInvocationsRate;
  }
}
export interface AwsAnomaliesLambdaHighErrorRateDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#detection_mode AwsAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#enabled AwsAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#custom_thresholds AwsAnomalies#custom_thresholds}
  */
  readonly customThresholds?: AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholds;
}

export function awsAnomaliesLambdaHighErrorRateDetectionToTerraform(struct?: AwsAnomaliesLambdaHighErrorRateDetectionOutputReference | AwsAnomaliesLambdaHighErrorRateDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: awsAnomaliesLambdaHighErrorRateDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function awsAnomaliesLambdaHighErrorRateDetectionToHclTerraform(struct?: AwsAnomaliesLambdaHighErrorRateDetectionOutputReference | AwsAnomaliesLambdaHighErrorRateDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
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
    custom_thresholds: {
      value: awsAnomaliesLambdaHighErrorRateDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesLambdaHighErrorRateDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesLambdaHighErrorRateDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesLambdaHighErrorRateDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // enabled - computed: false, optional: false, required: true
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: AwsAnomaliesLambdaHighErrorRateDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface AwsAnomaliesRdsHighCpuDetectionCustomThresholds {
  /**
  * CPU usage is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#cpu_usage AwsAnomalies#cpu_usage}
  */
  readonly cpuUsage: number;
}

export function awsAnomaliesRdsHighCpuDetectionCustomThresholdsToTerraform(struct?: AwsAnomaliesRdsHighCpuDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsHighCpuDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_usage: cdktf.numberToTerraform(struct!.cpuUsage),
  }
}


export function awsAnomaliesRdsHighCpuDetectionCustomThresholdsToHclTerraform(struct?: AwsAnomaliesRdsHighCpuDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsHighCpuDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_usage: {
      value: cdktf.numberToHclTerraform(struct!.cpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsHighCpuDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsHighCpuDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsage = this._cpuUsage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsHighCpuDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUsage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUsage = value.cpuUsage;
    }
  }

  // cpu_usage - computed: false, optional: false, required: true
  private _cpuUsage?: number; 
  public get cpuUsage() {
    return this.getNumberAttribute('cpu_usage');
  }
  public set cpuUsage(value: number) {
    this._cpuUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage;
  }
}
export interface AwsAnomaliesRdsHighCpuDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#detection_mode AwsAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#enabled AwsAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#custom_thresholds AwsAnomalies#custom_thresholds}
  */
  readonly customThresholds?: AwsAnomaliesRdsHighCpuDetectionCustomThresholds;
}

export function awsAnomaliesRdsHighCpuDetectionToTerraform(struct?: AwsAnomaliesRdsHighCpuDetectionOutputReference | AwsAnomaliesRdsHighCpuDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: awsAnomaliesRdsHighCpuDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function awsAnomaliesRdsHighCpuDetectionToHclTerraform(struct?: AwsAnomaliesRdsHighCpuDetectionOutputReference | AwsAnomaliesRdsHighCpuDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
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
    custom_thresholds: {
      value: awsAnomaliesRdsHighCpuDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAnomaliesRdsHighCpuDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsHighCpuDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsHighCpuDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsHighCpuDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // enabled - computed: false, optional: false, required: true
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new AwsAnomaliesRdsHighCpuDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: AwsAnomaliesRdsHighCpuDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface AwsAnomaliesRdsHighMemoryDetectionCustomThresholds {
  /**
  * Freeable memory is lower than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#free_memory AwsAnomalies#free_memory}
  */
  readonly freeMemory: number;
  /**
  * Swap usage is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#swap_usage AwsAnomalies#swap_usage}
  */
  readonly swapUsage: number;
}

export function awsAnomaliesRdsHighMemoryDetectionCustomThresholdsToTerraform(struct?: AwsAnomaliesRdsHighMemoryDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsHighMemoryDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_memory: cdktf.numberToTerraform(struct!.freeMemory),
    swap_usage: cdktf.numberToTerraform(struct!.swapUsage),
  }
}


export function awsAnomaliesRdsHighMemoryDetectionCustomThresholdsToHclTerraform(struct?: AwsAnomaliesRdsHighMemoryDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsHighMemoryDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    free_memory: {
      value: cdktf.numberToHclTerraform(struct!.freeMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swap_usage: {
      value: cdktf.numberToHclTerraform(struct!.swapUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsHighMemoryDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsHighMemoryDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeMemory = this._freeMemory;
    }
    if (this._swapUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapUsage = this._swapUsage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsHighMemoryDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeMemory = undefined;
      this._swapUsage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeMemory = value.freeMemory;
      this._swapUsage = value.swapUsage;
    }
  }

  // free_memory - computed: false, optional: false, required: true
  private _freeMemory?: number; 
  public get freeMemory() {
    return this.getNumberAttribute('free_memory');
  }
  public set freeMemory(value: number) {
    this._freeMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freeMemoryInput() {
    return this._freeMemory;
  }

  // swap_usage - computed: false, optional: false, required: true
  private _swapUsage?: number; 
  public get swapUsage() {
    return this.getNumberAttribute('swap_usage');
  }
  public set swapUsage(value: number) {
    this._swapUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get swapUsageInput() {
    return this._swapUsage;
  }
}
export interface AwsAnomaliesRdsHighMemoryDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#detection_mode AwsAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#enabled AwsAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#custom_thresholds AwsAnomalies#custom_thresholds}
  */
  readonly customThresholds?: AwsAnomaliesRdsHighMemoryDetectionCustomThresholds;
}

export function awsAnomaliesRdsHighMemoryDetectionToTerraform(struct?: AwsAnomaliesRdsHighMemoryDetectionOutputReference | AwsAnomaliesRdsHighMemoryDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: awsAnomaliesRdsHighMemoryDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function awsAnomaliesRdsHighMemoryDetectionToHclTerraform(struct?: AwsAnomaliesRdsHighMemoryDetectionOutputReference | AwsAnomaliesRdsHighMemoryDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
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
    custom_thresholds: {
      value: awsAnomaliesRdsHighMemoryDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAnomaliesRdsHighMemoryDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsHighMemoryDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsHighMemoryDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsHighMemoryDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // enabled - computed: false, optional: false, required: true
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new AwsAnomaliesRdsHighMemoryDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: AwsAnomaliesRdsHighMemoryDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholds {
  /**
  * Read/write latency is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#read_write_latency AwsAnomalies#read_write_latency}
  */
  readonly readWriteLatency: number;
}

export function awsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholdsToTerraform(struct?: AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_write_latency: cdktf.numberToTerraform(struct!.readWriteLatency),
  }
}


export function awsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholdsToHclTerraform(struct?: AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_write_latency: {
      value: cdktf.numberToHclTerraform(struct!.readWriteLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readWriteLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWriteLatency = this._readWriteLatency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._readWriteLatency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._readWriteLatency = value.readWriteLatency;
    }
  }

  // read_write_latency - computed: false, optional: false, required: true
  private _readWriteLatency?: number; 
  public get readWriteLatency() {
    return this.getNumberAttribute('read_write_latency');
  }
  public set readWriteLatency(value: number) {
    this._readWriteLatency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteLatencyInput() {
    return this._readWriteLatency;
  }
}
export interface AwsAnomaliesRdsHighWriteReadLatencyDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#detection_mode AwsAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#enabled AwsAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#custom_thresholds AwsAnomalies#custom_thresholds}
  */
  readonly customThresholds?: AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholds;
}

export function awsAnomaliesRdsHighWriteReadLatencyDetectionToTerraform(struct?: AwsAnomaliesRdsHighWriteReadLatencyDetectionOutputReference | AwsAnomaliesRdsHighWriteReadLatencyDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: awsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function awsAnomaliesRdsHighWriteReadLatencyDetectionToHclTerraform(struct?: AwsAnomaliesRdsHighWriteReadLatencyDetectionOutputReference | AwsAnomaliesRdsHighWriteReadLatencyDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
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
    custom_thresholds: {
      value: awsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsHighWriteReadLatencyDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsHighWriteReadLatencyDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsHighWriteReadLatencyDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // enabled - computed: false, optional: false, required: true
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: AwsAnomaliesRdsHighWriteReadLatencyDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface AwsAnomaliesRdsLowStorageDetectionCustomThresholds {
  /**
  * Free storage space divided by allocated storage is lower than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#free_storage_percentage AwsAnomalies#free_storage_percentage}
  */
  readonly freeStoragePercentage: number;
}

export function awsAnomaliesRdsLowStorageDetectionCustomThresholdsToTerraform(struct?: AwsAnomaliesRdsLowStorageDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsLowStorageDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_storage_percentage: cdktf.numberToTerraform(struct!.freeStoragePercentage),
  }
}


export function awsAnomaliesRdsLowStorageDetectionCustomThresholdsToHclTerraform(struct?: AwsAnomaliesRdsLowStorageDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsLowStorageDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    free_storage_percentage: {
      value: cdktf.numberToHclTerraform(struct!.freeStoragePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsLowStorageDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsLowStorageDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeStoragePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeStoragePercentage = this._freeStoragePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsLowStorageDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeStoragePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeStoragePercentage = value.freeStoragePercentage;
    }
  }

  // free_storage_percentage - computed: false, optional: false, required: true
  private _freeStoragePercentage?: number; 
  public get freeStoragePercentage() {
    return this.getNumberAttribute('free_storage_percentage');
  }
  public set freeStoragePercentage(value: number) {
    this._freeStoragePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freeStoragePercentageInput() {
    return this._freeStoragePercentage;
  }
}
export interface AwsAnomaliesRdsLowStorageDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#detection_mode AwsAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#enabled AwsAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#custom_thresholds AwsAnomalies#custom_thresholds}
  */
  readonly customThresholds?: AwsAnomaliesRdsLowStorageDetectionCustomThresholds;
}

export function awsAnomaliesRdsLowStorageDetectionToTerraform(struct?: AwsAnomaliesRdsLowStorageDetectionOutputReference | AwsAnomaliesRdsLowStorageDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: awsAnomaliesRdsLowStorageDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function awsAnomaliesRdsLowStorageDetectionToHclTerraform(struct?: AwsAnomaliesRdsLowStorageDetectionOutputReference | AwsAnomaliesRdsLowStorageDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
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
    custom_thresholds: {
      value: awsAnomaliesRdsLowStorageDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAnomaliesRdsLowStorageDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsLowStorageDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsLowStorageDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsLowStorageDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // enabled - computed: false, optional: false, required: true
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new AwsAnomaliesRdsLowStorageDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: AwsAnomaliesRdsLowStorageDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}
export interface AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholds {
  /**
  * Number of restarts per minute is equal or higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#restarts_per_minute AwsAnomalies#restarts_per_minute}
  */
  readonly restartsPerMinute: number;
}

export function awsAnomaliesRdsRestartsSequenceDetectionCustomThresholdsToTerraform(struct?: AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restarts_per_minute: cdktf.numberToTerraform(struct!.restartsPerMinute),
  }
}


export function awsAnomaliesRdsRestartsSequenceDetectionCustomThresholdsToHclTerraform(struct?: AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholdsOutputReference | AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restarts_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.restartsPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restartsPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartsPerMinute = this._restartsPerMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restartsPerMinute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restartsPerMinute = value.restartsPerMinute;
    }
  }

  // restarts_per_minute - computed: false, optional: false, required: true
  private _restartsPerMinute?: number; 
  public get restartsPerMinute() {
    return this.getNumberAttribute('restarts_per_minute');
  }
  public set restartsPerMinute(value: number) {
    this._restartsPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restartsPerMinuteInput() {
    return this._restartsPerMinute;
  }
}
export interface AwsAnomaliesRdsRestartsSequenceDetection {
  /**
  * Possible Values: `Auto`, `Custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#detection_mode AwsAnomalies#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#enabled AwsAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * custom_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#custom_thresholds AwsAnomalies#custom_thresholds}
  */
  readonly customThresholds?: AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholds;
}

export function awsAnomaliesRdsRestartsSequenceDetectionToTerraform(struct?: AwsAnomaliesRdsRestartsSequenceDetectionOutputReference | AwsAnomaliesRdsRestartsSequenceDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    custom_thresholds: awsAnomaliesRdsRestartsSequenceDetectionCustomThresholdsToTerraform(struct!.customThresholds),
  }
}


export function awsAnomaliesRdsRestartsSequenceDetectionToHclTerraform(struct?: AwsAnomaliesRdsRestartsSequenceDetectionOutputReference | AwsAnomaliesRdsRestartsSequenceDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
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
    custom_thresholds: {
      value: awsAnomaliesRdsRestartsSequenceDetectionCustomThresholdsToHclTerraform(struct!.customThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAnomaliesRdsRestartsSequenceDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAnomaliesRdsRestartsSequenceDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._customThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customThresholds = this._customThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAnomaliesRdsRestartsSequenceDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._customThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._customThresholds.internalValue = value.customThresholds;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // enabled - computed: false, optional: false, required: true
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

  // custom_thresholds - computed: false, optional: true, required: false
  private _customThresholds = new AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholdsOutputReference(this, "custom_thresholds");
  public get customThresholds() {
    return this._customThresholds;
  }
  public putCustomThresholds(value: AwsAnomaliesRdsRestartsSequenceDetectionCustomThresholds) {
    this._customThresholds.internalValue = value;
  }
  public resetCustomThresholds() {
    this._customThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThresholdsInput() {
    return this._customThresholds.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies dynatrace_aws_anomalies}
*/
export class AwsAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_aws_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAnomalies to import
  * @param importFromId The id of the existing AwsAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_aws_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_anomalies dynatrace_aws_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_aws_anomalies',
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
    this._id = config.id;
    this._ec2CandidateHighCpuDetection.internalValue = config.ec2CandidateHighCpuDetection;
    this._elbHighConnectionErrorsDetection.internalValue = config.elbHighConnectionErrorsDetection;
    this._lambdaHighErrorRateDetection.internalValue = config.lambdaHighErrorRateDetection;
    this._rdsHighCpuDetection.internalValue = config.rdsHighCpuDetection;
    this._rdsHighMemoryDetection.internalValue = config.rdsHighMemoryDetection;
    this._rdsHighWriteReadLatencyDetection.internalValue = config.rdsHighWriteReadLatencyDetection;
    this._rdsLowStorageDetection.internalValue = config.rdsLowStorageDetection;
    this._rdsRestartsSequenceDetection.internalValue = config.rdsRestartsSequenceDetection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ec_2_candidate_high_cpu_detection - computed: false, optional: false, required: true
  private _ec2CandidateHighCpuDetection = new AwsAnomaliesEc2CandidateHighCpuDetectionOutputReference(this, "ec_2_candidate_high_cpu_detection");
  public get ec2CandidateHighCpuDetection() {
    return this._ec2CandidateHighCpuDetection;
  }
  public putEc2CandidateHighCpuDetection(value: AwsAnomaliesEc2CandidateHighCpuDetection) {
    this._ec2CandidateHighCpuDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2CandidateHighCpuDetectionInput() {
    return this._ec2CandidateHighCpuDetection.internalValue;
  }

  // elb_high_connection_errors_detection - computed: false, optional: false, required: true
  private _elbHighConnectionErrorsDetection = new AwsAnomaliesElbHighConnectionErrorsDetectionOutputReference(this, "elb_high_connection_errors_detection");
  public get elbHighConnectionErrorsDetection() {
    return this._elbHighConnectionErrorsDetection;
  }
  public putElbHighConnectionErrorsDetection(value: AwsAnomaliesElbHighConnectionErrorsDetection) {
    this._elbHighConnectionErrorsDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elbHighConnectionErrorsDetectionInput() {
    return this._elbHighConnectionErrorsDetection.internalValue;
  }

  // lambda_high_error_rate_detection - computed: false, optional: false, required: true
  private _lambdaHighErrorRateDetection = new AwsAnomaliesLambdaHighErrorRateDetectionOutputReference(this, "lambda_high_error_rate_detection");
  public get lambdaHighErrorRateDetection() {
    return this._lambdaHighErrorRateDetection;
  }
  public putLambdaHighErrorRateDetection(value: AwsAnomaliesLambdaHighErrorRateDetection) {
    this._lambdaHighErrorRateDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaHighErrorRateDetectionInput() {
    return this._lambdaHighErrorRateDetection.internalValue;
  }

  // rds_high_cpu_detection - computed: false, optional: false, required: true
  private _rdsHighCpuDetection = new AwsAnomaliesRdsHighCpuDetectionOutputReference(this, "rds_high_cpu_detection");
  public get rdsHighCpuDetection() {
    return this._rdsHighCpuDetection;
  }
  public putRdsHighCpuDetection(value: AwsAnomaliesRdsHighCpuDetection) {
    this._rdsHighCpuDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsHighCpuDetectionInput() {
    return this._rdsHighCpuDetection.internalValue;
  }

  // rds_high_memory_detection - computed: false, optional: false, required: true
  private _rdsHighMemoryDetection = new AwsAnomaliesRdsHighMemoryDetectionOutputReference(this, "rds_high_memory_detection");
  public get rdsHighMemoryDetection() {
    return this._rdsHighMemoryDetection;
  }
  public putRdsHighMemoryDetection(value: AwsAnomaliesRdsHighMemoryDetection) {
    this._rdsHighMemoryDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsHighMemoryDetectionInput() {
    return this._rdsHighMemoryDetection.internalValue;
  }

  // rds_high_write_read_latency_detection - computed: false, optional: false, required: true
  private _rdsHighWriteReadLatencyDetection = new AwsAnomaliesRdsHighWriteReadLatencyDetectionOutputReference(this, "rds_high_write_read_latency_detection");
  public get rdsHighWriteReadLatencyDetection() {
    return this._rdsHighWriteReadLatencyDetection;
  }
  public putRdsHighWriteReadLatencyDetection(value: AwsAnomaliesRdsHighWriteReadLatencyDetection) {
    this._rdsHighWriteReadLatencyDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsHighWriteReadLatencyDetectionInput() {
    return this._rdsHighWriteReadLatencyDetection.internalValue;
  }

  // rds_low_storage_detection - computed: false, optional: false, required: true
  private _rdsLowStorageDetection = new AwsAnomaliesRdsLowStorageDetectionOutputReference(this, "rds_low_storage_detection");
  public get rdsLowStorageDetection() {
    return this._rdsLowStorageDetection;
  }
  public putRdsLowStorageDetection(value: AwsAnomaliesRdsLowStorageDetection) {
    this._rdsLowStorageDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsLowStorageDetectionInput() {
    return this._rdsLowStorageDetection.internalValue;
  }

  // rds_restarts_sequence_detection - computed: false, optional: false, required: true
  private _rdsRestartsSequenceDetection = new AwsAnomaliesRdsRestartsSequenceDetectionOutputReference(this, "rds_restarts_sequence_detection");
  public get rdsRestartsSequenceDetection() {
    return this._rdsRestartsSequenceDetection;
  }
  public putRdsRestartsSequenceDetection(value: AwsAnomaliesRdsRestartsSequenceDetection) {
    this._rdsRestartsSequenceDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsRestartsSequenceDetectionInput() {
    return this._rdsRestartsSequenceDetection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ec_2_candidate_high_cpu_detection: awsAnomaliesEc2CandidateHighCpuDetectionToTerraform(this._ec2CandidateHighCpuDetection.internalValue),
      elb_high_connection_errors_detection: awsAnomaliesElbHighConnectionErrorsDetectionToTerraform(this._elbHighConnectionErrorsDetection.internalValue),
      lambda_high_error_rate_detection: awsAnomaliesLambdaHighErrorRateDetectionToTerraform(this._lambdaHighErrorRateDetection.internalValue),
      rds_high_cpu_detection: awsAnomaliesRdsHighCpuDetectionToTerraform(this._rdsHighCpuDetection.internalValue),
      rds_high_memory_detection: awsAnomaliesRdsHighMemoryDetectionToTerraform(this._rdsHighMemoryDetection.internalValue),
      rds_high_write_read_latency_detection: awsAnomaliesRdsHighWriteReadLatencyDetectionToTerraform(this._rdsHighWriteReadLatencyDetection.internalValue),
      rds_low_storage_detection: awsAnomaliesRdsLowStorageDetectionToTerraform(this._rdsLowStorageDetection.internalValue),
      rds_restarts_sequence_detection: awsAnomaliesRdsRestartsSequenceDetectionToTerraform(this._rdsRestartsSequenceDetection.internalValue),
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
      ec_2_candidate_high_cpu_detection: {
        value: awsAnomaliesEc2CandidateHighCpuDetectionToHclTerraform(this._ec2CandidateHighCpuDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAnomaliesEc2CandidateHighCpuDetectionList",
      },
      elb_high_connection_errors_detection: {
        value: awsAnomaliesElbHighConnectionErrorsDetectionToHclTerraform(this._elbHighConnectionErrorsDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAnomaliesElbHighConnectionErrorsDetectionList",
      },
      lambda_high_error_rate_detection: {
        value: awsAnomaliesLambdaHighErrorRateDetectionToHclTerraform(this._lambdaHighErrorRateDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAnomaliesLambdaHighErrorRateDetectionList",
      },
      rds_high_cpu_detection: {
        value: awsAnomaliesRdsHighCpuDetectionToHclTerraform(this._rdsHighCpuDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAnomaliesRdsHighCpuDetectionList",
      },
      rds_high_memory_detection: {
        value: awsAnomaliesRdsHighMemoryDetectionToHclTerraform(this._rdsHighMemoryDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAnomaliesRdsHighMemoryDetectionList",
      },
      rds_high_write_read_latency_detection: {
        value: awsAnomaliesRdsHighWriteReadLatencyDetectionToHclTerraform(this._rdsHighWriteReadLatencyDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAnomaliesRdsHighWriteReadLatencyDetectionList",
      },
      rds_low_storage_detection: {
        value: awsAnomaliesRdsLowStorageDetectionToHclTerraform(this._rdsLowStorageDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAnomaliesRdsLowStorageDetectionList",
      },
      rds_restarts_sequence_detection: {
        value: awsAnomaliesRdsRestartsSequenceDetectionToHclTerraform(this._rdsRestartsSequenceDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAnomaliesRdsRestartsSequenceDetectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
