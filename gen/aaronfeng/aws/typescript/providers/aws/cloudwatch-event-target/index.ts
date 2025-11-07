// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchEventTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#arn CloudwatchEventTarget#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}
  */
  readonly eventBusName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#id CloudwatchEventTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#input CloudwatchEventTarget#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}
  */
  readonly inputPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#rule CloudwatchEventTarget#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}
  */
  readonly targetId?: string;
  /**
  * batch_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#batch_target CloudwatchEventTarget#batch_target}
  */
  readonly batchTarget?: CloudwatchEventTargetBatchTarget;
  /**
  * dead_letter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#dead_letter_config CloudwatchEventTarget#dead_letter_config}
  */
  readonly deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig;
  /**
  * ecs_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#ecs_target CloudwatchEventTarget#ecs_target}
  */
  readonly ecsTarget?: CloudwatchEventTargetEcsTarget;
  /**
  * input_transformer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#input_transformer CloudwatchEventTarget#input_transformer}
  */
  readonly inputTransformer?: CloudwatchEventTargetInputTransformer;
  /**
  * kinesis_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#kinesis_target CloudwatchEventTarget#kinesis_target}
  */
  readonly kinesisTarget?: CloudwatchEventTargetKinesisTarget;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#retry_policy CloudwatchEventTarget#retry_policy}
  */
  readonly retryPolicy?: CloudwatchEventTargetRetryPolicy;
  /**
  * run_command_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#run_command_targets CloudwatchEventTarget#run_command_targets}
  */
  readonly runCommandTargets?: CloudwatchEventTargetRunCommandTargets[] | cdktf.IResolvable;
  /**
  * sqs_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#sqs_target CloudwatchEventTarget#sqs_target}
  */
  readonly sqsTarget?: CloudwatchEventTargetSqsTarget;
}
export interface CloudwatchEventTargetBatchTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}
  */
  readonly arraySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}
  */
  readonly jobAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}
  */
  readonly jobDefinition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}
  */
  readonly jobName: string;
}

export function cloudwatchEventTargetBatchTargetToTerraform(struct?: CloudwatchEventTargetBatchTargetOutputReference | CloudwatchEventTargetBatchTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_size: cdktf.numberToTerraform(struct!.arraySize),
    job_attempts: cdktf.numberToTerraform(struct!.jobAttempts),
    job_definition: cdktf.stringToTerraform(struct!.jobDefinition),
    job_name: cdktf.stringToTerraform(struct!.jobName),
  }
}


export function cloudwatchEventTargetBatchTargetToHclTerraform(struct?: CloudwatchEventTargetBatchTargetOutputReference | CloudwatchEventTargetBatchTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_size: {
      value: cdktf.numberToHclTerraform(struct!.arraySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_attempts: {
      value: cdktf.numberToHclTerraform(struct!.jobAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_definition: {
      value: cdktf.stringToHclTerraform(struct!.jobDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_name: {
      value: cdktf.stringToHclTerraform(struct!.jobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventTargetBatchTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventTargetBatchTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arraySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.arraySize = this._arraySize;
    }
    if (this._jobAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobAttempts = this._jobAttempts;
    }
    if (this._jobDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobDefinition = this._jobDefinition;
    }
    if (this._jobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobName = this._jobName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventTargetBatchTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arraySize = undefined;
      this._jobAttempts = undefined;
      this._jobDefinition = undefined;
      this._jobName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arraySize = value.arraySize;
      this._jobAttempts = value.jobAttempts;
      this._jobDefinition = value.jobDefinition;
      this._jobName = value.jobName;
    }
  }

  // array_size - computed: false, optional: true, required: false
  private _arraySize?: number; 
  public get arraySize() {
    return this.getNumberAttribute('array_size');
  }
  public set arraySize(value: number) {
    this._arraySize = value;
  }
  public resetArraySize() {
    this._arraySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arraySizeInput() {
    return this._arraySize;
  }

  // job_attempts - computed: false, optional: true, required: false
  private _jobAttempts?: number; 
  public get jobAttempts() {
    return this.getNumberAttribute('job_attempts');
  }
  public set jobAttempts(value: number) {
    this._jobAttempts = value;
  }
  public resetJobAttempts() {
    this._jobAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobAttemptsInput() {
    return this._jobAttempts;
  }

  // job_definition - computed: false, optional: false, required: true
  private _jobDefinition?: string; 
  public get jobDefinition() {
    return this.getStringAttribute('job_definition');
  }
  public set jobDefinition(value: string) {
    this._jobDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionInput() {
    return this._jobDefinition;
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }
}
export interface CloudwatchEventTargetDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#arn CloudwatchEventTarget#arn}
  */
  readonly arn?: string;
}

export function cloudwatchEventTargetDeadLetterConfigToTerraform(struct?: CloudwatchEventTargetDeadLetterConfigOutputReference | CloudwatchEventTargetDeadLetterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function cloudwatchEventTargetDeadLetterConfigToHclTerraform(struct?: CloudwatchEventTargetDeadLetterConfigOutputReference | CloudwatchEventTargetDeadLetterConfig): any {
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

export class CloudwatchEventTargetDeadLetterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventTargetDeadLetterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventTargetDeadLetterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface CloudwatchEventTargetEcsTargetNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}
  */
  readonly subnets: string[];
}

export function cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct?: CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference | CloudwatchEventTargetEcsTargetNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function cloudwatchEventTargetEcsTargetNetworkConfigurationToHclTerraform(struct?: CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference | CloudwatchEventTargetEcsTargetNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventTargetEcsTargetNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventTargetEcsTargetNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface CloudwatchEventTargetEcsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#group CloudwatchEventTarget#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}
  */
  readonly taskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}
  */
  readonly taskDefinitionArn: string;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#network_configuration CloudwatchEventTarget#network_configuration}
  */
  readonly networkConfiguration?: CloudwatchEventTargetEcsTargetNetworkConfiguration;
}

export function cloudwatchEventTargetEcsTargetToTerraform(struct?: CloudwatchEventTargetEcsTargetOutputReference | CloudwatchEventTargetEcsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    launch_type: cdktf.stringToTerraform(struct!.launchType),
    platform_version: cdktf.stringToTerraform(struct!.platformVersion),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    task_definition_arn: cdktf.stringToTerraform(struct!.taskDefinitionArn),
    network_configuration: cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct!.networkConfiguration),
  }
}


export function cloudwatchEventTargetEcsTargetToHclTerraform(struct?: CloudwatchEventTargetEcsTargetOutputReference | CloudwatchEventTargetEcsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_type: {
      value: cdktf.stringToHclTerraform(struct!.launchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_version: {
      value: cdktf.stringToHclTerraform(struct!.platformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_count: {
      value: cdktf.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_definition_arn: {
      value: cdktf.stringToHclTerraform(struct!.taskDefinitionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_configuration: {
      value: cloudwatchEventTargetEcsTargetNetworkConfigurationToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventTargetEcsTargetNetworkConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventTargetEcsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventTargetEcsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._launchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchType = this._launchType;
    }
    if (this._platformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformVersion = this._platformVersion;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._taskDefinitionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDefinitionArn = this._taskDefinitionArn;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventTargetEcsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._launchType = undefined;
      this._platformVersion = undefined;
      this._taskCount = undefined;
      this._taskDefinitionArn = undefined;
      this._networkConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._launchType = value.launchType;
      this._platformVersion = value.platformVersion;
      this._taskCount = value.taskCount;
      this._taskDefinitionArn = value.taskDefinitionArn;
      this._networkConfiguration.internalValue = value.networkConfiguration;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // launch_type - computed: false, optional: true, required: false
  private _launchType?: string; 
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType;
  }

  // platform_version - computed: false, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // task_count - computed: false, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // task_definition_arn - computed: false, optional: false, required: true
  private _taskDefinitionArn?: string; 
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }
  public set taskDefinitionArn(value: string) {
    this._taskDefinitionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionArnInput() {
    return this._taskDefinitionArn;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: CloudwatchEventTargetEcsTargetNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }
}
export interface CloudwatchEventTargetInputTransformer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}
  */
  readonly inputPaths?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}
  */
  readonly inputTemplate: string;
}

export function cloudwatchEventTargetInputTransformerToTerraform(struct?: CloudwatchEventTargetInputTransformerOutputReference | CloudwatchEventTargetInputTransformer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_paths: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inputPaths),
    input_template: cdktf.stringToTerraform(struct!.inputTemplate),
  }
}


export function cloudwatchEventTargetInputTransformerToHclTerraform(struct?: CloudwatchEventTargetInputTransformerOutputReference | CloudwatchEventTargetInputTransformer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_paths: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inputPaths),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    input_template: {
      value: cdktf.stringToHclTerraform(struct!.inputTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventTargetInputTransformerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventTargetInputTransformer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPaths = this._inputPaths;
    }
    if (this._inputTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputTemplate = this._inputTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventTargetInputTransformer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputPaths = undefined;
      this._inputTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputPaths = value.inputPaths;
      this._inputTemplate = value.inputTemplate;
    }
  }

  // input_paths - computed: false, optional: true, required: false
  private _inputPaths?: { [key: string]: string }; 
  public get inputPaths() {
    return this.getStringMapAttribute('input_paths');
  }
  public set inputPaths(value: { [key: string]: string }) {
    this._inputPaths = value;
  }
  public resetInputPaths() {
    this._inputPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPathsInput() {
    return this._inputPaths;
  }

  // input_template - computed: false, optional: false, required: true
  private _inputTemplate?: string; 
  public get inputTemplate() {
    return this.getStringAttribute('input_template');
  }
  public set inputTemplate(value: string) {
    this._inputTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTemplateInput() {
    return this._inputTemplate;
  }
}
export interface CloudwatchEventTargetKinesisTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}
  */
  readonly partitionKeyPath?: string;
}

export function cloudwatchEventTargetKinesisTargetToTerraform(struct?: CloudwatchEventTargetKinesisTargetOutputReference | CloudwatchEventTargetKinesisTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_key_path: cdktf.stringToTerraform(struct!.partitionKeyPath),
  }
}


export function cloudwatchEventTargetKinesisTargetToHclTerraform(struct?: CloudwatchEventTargetKinesisTargetOutputReference | CloudwatchEventTargetKinesisTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_key_path: {
      value: cdktf.stringToHclTerraform(struct!.partitionKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventTargetKinesisTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventTargetKinesisTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKeyPath = this._partitionKeyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventTargetKinesisTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionKeyPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionKeyPath = value.partitionKeyPath;
    }
  }

  // partition_key_path - computed: false, optional: true, required: false
  private _partitionKeyPath?: string; 
  public get partitionKeyPath() {
    return this.getStringAttribute('partition_key_path');
  }
  public set partitionKeyPath(value: string) {
    this._partitionKeyPath = value;
  }
  public resetPartitionKeyPath() {
    this._partitionKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyPathInput() {
    return this._partitionKeyPath;
  }
}
export interface CloudwatchEventTargetRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}
  */
  readonly maximumEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}

export function cloudwatchEventTargetRetryPolicyToTerraform(struct?: CloudwatchEventTargetRetryPolicyOutputReference | CloudwatchEventTargetRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_event_age_in_seconds: cdktf.numberToTerraform(struct!.maximumEventAgeInSeconds),
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function cloudwatchEventTargetRetryPolicyToHclTerraform(struct?: CloudwatchEventTargetRetryPolicyOutputReference | CloudwatchEventTargetRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_event_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumEventAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventTargetRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventTargetRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumEventAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEventAgeInSeconds = this._maximumEventAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventTargetRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumEventAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumEventAgeInSeconds = value.maximumEventAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number; 
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }
  public set maximumEventAgeInSeconds(value: number) {
    this._maximumEventAgeInSeconds = value;
  }
  public resetMaximumEventAgeInSeconds() {
    this._maximumEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEventAgeInSecondsInput() {
    return this._maximumEventAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}
export interface CloudwatchEventTargetRunCommandTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#key CloudwatchEventTarget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#values CloudwatchEventTarget#values}
  */
  readonly values: string[];
}

export function cloudwatchEventTargetRunCommandTargetsToTerraform(struct?: CloudwatchEventTargetRunCommandTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function cloudwatchEventTargetRunCommandTargetsToHclTerraform(struct?: CloudwatchEventTargetRunCommandTargets | cdktf.IResolvable): any {
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

export class CloudwatchEventTargetRunCommandTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchEventTargetRunCommandTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventTargetRunCommandTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class CloudwatchEventTargetRunCommandTargetsList extends cdktf.ComplexList {
  public internalValue? : CloudwatchEventTargetRunCommandTargets[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchEventTargetRunCommandTargetsOutputReference {
    return new CloudwatchEventTargetRunCommandTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchEventTargetSqsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}
  */
  readonly messageGroupId?: string;
}

export function cloudwatchEventTargetSqsTargetToTerraform(struct?: CloudwatchEventTargetSqsTargetOutputReference | CloudwatchEventTargetSqsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_group_id: cdktf.stringToTerraform(struct!.messageGroupId),
  }
}


export function cloudwatchEventTargetSqsTargetToHclTerraform(struct?: CloudwatchEventTargetSqsTargetOutputReference | CloudwatchEventTargetSqsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_group_id: {
      value: cdktf.stringToHclTerraform(struct!.messageGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventTargetSqsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventTargetSqsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupId = this._messageGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventTargetSqsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageGroupId = value.messageGroupId;
    }
  }

  // message_group_id - computed: false, optional: true, required: false
  private _messageGroupId?: string; 
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }
  public set messageGroupId(value: string) {
    this._messageGroupId = value;
  }
  public resetMessageGroupId() {
    this._messageGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupIdInput() {
    return this._messageGroupId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target aws_cloudwatch_event_target}
*/
export class CloudwatchEventTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_event_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchEventTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchEventTarget to import
  * @param importFromId The id of the existing CloudwatchEventTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchEventTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_event_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/cloudwatch_event_target aws_cloudwatch_event_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchEventTargetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchEventTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_target',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arn = config.arn;
    this._eventBusName = config.eventBusName;
    this._id = config.id;
    this._input = config.input;
    this._inputPath = config.inputPath;
    this._roleArn = config.roleArn;
    this._rule = config.rule;
    this._targetId = config.targetId;
    this._batchTarget.internalValue = config.batchTarget;
    this._deadLetterConfig.internalValue = config.deadLetterConfig;
    this._ecsTarget.internalValue = config.ecsTarget;
    this._inputTransformer.internalValue = config.inputTransformer;
    this._kinesisTarget.internalValue = config.kinesisTarget;
    this._retryPolicy.internalValue = config.retryPolicy;
    this._runCommandTargets.internalValue = config.runCommandTargets;
    this._sqsTarget.internalValue = config.sqsTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // event_bus_name - computed: false, optional: true, required: false
  private _eventBusName?: string; 
  public get eventBusName() {
    return this.getStringAttribute('event_bus_name');
  }
  public set eventBusName(value: string) {
    this._eventBusName = value;
  }
  public resetEventBusName() {
    this._eventBusName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusNameInput() {
    return this._eventBusName;
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

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // input_path - computed: false, optional: true, required: false
  private _inputPath?: string; 
  public get inputPath() {
    return this.getStringAttribute('input_path');
  }
  public set inputPath(value: string) {
    this._inputPath = value;
  }
  public resetInputPath() {
    this._inputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPathInput() {
    return this._inputPath;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // batch_target - computed: false, optional: true, required: false
  private _batchTarget = new CloudwatchEventTargetBatchTargetOutputReference(this, "batch_target");
  public get batchTarget() {
    return this._batchTarget;
  }
  public putBatchTarget(value: CloudwatchEventTargetBatchTarget) {
    this._batchTarget.internalValue = value;
  }
  public resetBatchTarget() {
    this._batchTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTargetInput() {
    return this._batchTarget.internalValue;
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new CloudwatchEventTargetDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: CloudwatchEventTargetDeadLetterConfig) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }

  // ecs_target - computed: false, optional: true, required: false
  private _ecsTarget = new CloudwatchEventTargetEcsTargetOutputReference(this, "ecs_target");
  public get ecsTarget() {
    return this._ecsTarget;
  }
  public putEcsTarget(value: CloudwatchEventTargetEcsTarget) {
    this._ecsTarget.internalValue = value;
  }
  public resetEcsTarget() {
    this._ecsTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsTargetInput() {
    return this._ecsTarget.internalValue;
  }

  // input_transformer - computed: false, optional: true, required: false
  private _inputTransformer = new CloudwatchEventTargetInputTransformerOutputReference(this, "input_transformer");
  public get inputTransformer() {
    return this._inputTransformer;
  }
  public putInputTransformer(value: CloudwatchEventTargetInputTransformer) {
    this._inputTransformer.internalValue = value;
  }
  public resetInputTransformer() {
    this._inputTransformer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTransformerInput() {
    return this._inputTransformer.internalValue;
  }

  // kinesis_target - computed: false, optional: true, required: false
  private _kinesisTarget = new CloudwatchEventTargetKinesisTargetOutputReference(this, "kinesis_target");
  public get kinesisTarget() {
    return this._kinesisTarget;
  }
  public putKinesisTarget(value: CloudwatchEventTargetKinesisTarget) {
    this._kinesisTarget.internalValue = value;
  }
  public resetKinesisTarget() {
    this._kinesisTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisTargetInput() {
    return this._kinesisTarget.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new CloudwatchEventTargetRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: CloudwatchEventTargetRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // run_command_targets - computed: false, optional: true, required: false
  private _runCommandTargets = new CloudwatchEventTargetRunCommandTargetsList(this, "run_command_targets", false);
  public get runCommandTargets() {
    return this._runCommandTargets;
  }
  public putRunCommandTargets(value: CloudwatchEventTargetRunCommandTargets[] | cdktf.IResolvable) {
    this._runCommandTargets.internalValue = value;
  }
  public resetRunCommandTargets() {
    this._runCommandTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCommandTargetsInput() {
    return this._runCommandTargets.internalValue;
  }

  // sqs_target - computed: false, optional: true, required: false
  private _sqsTarget = new CloudwatchEventTargetSqsTargetOutputReference(this, "sqs_target");
  public get sqsTarget() {
    return this._sqsTarget;
  }
  public putSqsTarget(value: CloudwatchEventTargetSqsTarget) {
    this._sqsTarget.internalValue = value;
  }
  public resetSqsTarget() {
    this._sqsTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsTargetInput() {
    return this._sqsTarget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      event_bus_name: cdktf.stringToTerraform(this._eventBusName),
      id: cdktf.stringToTerraform(this._id),
      input: cdktf.stringToTerraform(this._input),
      input_path: cdktf.stringToTerraform(this._inputPath),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      rule: cdktf.stringToTerraform(this._rule),
      target_id: cdktf.stringToTerraform(this._targetId),
      batch_target: cloudwatchEventTargetBatchTargetToTerraform(this._batchTarget.internalValue),
      dead_letter_config: cloudwatchEventTargetDeadLetterConfigToTerraform(this._deadLetterConfig.internalValue),
      ecs_target: cloudwatchEventTargetEcsTargetToTerraform(this._ecsTarget.internalValue),
      input_transformer: cloudwatchEventTargetInputTransformerToTerraform(this._inputTransformer.internalValue),
      kinesis_target: cloudwatchEventTargetKinesisTargetToTerraform(this._kinesisTarget.internalValue),
      retry_policy: cloudwatchEventTargetRetryPolicyToTerraform(this._retryPolicy.internalValue),
      run_command_targets: cdktf.listMapper(cloudwatchEventTargetRunCommandTargetsToTerraform, true)(this._runCommandTargets.internalValue),
      sqs_target: cloudwatchEventTargetSqsTargetToTerraform(this._sqsTarget.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_bus_name: {
        value: cdktf.stringToHclTerraform(this._eventBusName),
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
      input: {
        value: cdktf.stringToHclTerraform(this._input),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_path: {
        value: cdktf.stringToHclTerraform(this._inputPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batch_target: {
        value: cloudwatchEventTargetBatchTargetToHclTerraform(this._batchTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventTargetBatchTargetList",
      },
      dead_letter_config: {
        value: cloudwatchEventTargetDeadLetterConfigToHclTerraform(this._deadLetterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventTargetDeadLetterConfigList",
      },
      ecs_target: {
        value: cloudwatchEventTargetEcsTargetToHclTerraform(this._ecsTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventTargetEcsTargetList",
      },
      input_transformer: {
        value: cloudwatchEventTargetInputTransformerToHclTerraform(this._inputTransformer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventTargetInputTransformerList",
      },
      kinesis_target: {
        value: cloudwatchEventTargetKinesisTargetToHclTerraform(this._kinesisTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventTargetKinesisTargetList",
      },
      retry_policy: {
        value: cloudwatchEventTargetRetryPolicyToHclTerraform(this._retryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventTargetRetryPolicyList",
      },
      run_command_targets: {
        value: cdktf.listMapperHcl(cloudwatchEventTargetRunCommandTargetsToHclTerraform, true)(this._runCommandTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventTargetRunCommandTargetsList",
      },
      sqs_target: {
        value: cloudwatchEventTargetSqsTargetToHclTerraform(this._sqsTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventTargetSqsTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
