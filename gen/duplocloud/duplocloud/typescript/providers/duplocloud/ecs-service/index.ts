// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DNS prefix to assign to this service's load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#dns_prfx EcsService#dns_prfx}
  */
  readonly dnsPrfx?: string;
  /**
  * Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}
  */
  readonly healthCheckGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#id EcsService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#is_target_group_only EcsService#is_target_group_only}
  */
  readonly isTargetGroupOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of the service to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#name EcsService#name}
  */
  readonly name: string;
  /**
  * The number of older task definitions to retain in AWS. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#old_task_definition_buffer_size EcsService#old_task_definition_buffer_size}
  */
  readonly oldTaskDefinitionBufferSize?: number;
  /**
  * The number of container replicas to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#replicas EcsService#replicas}
  */
  readonly replicas: number;
  /**
  * The ARN of the task definition to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#task_definition EcsService#task_definition}
  */
  readonly taskDefinition: string;
  /**
  * The GUID of the tenant that the service will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#tenant_id EcsService#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Whether or not to wait until all target groups are created for ecs service, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#wait_until_targets_ready EcsService#wait_until_targets_ready}
  */
  readonly waitUntilTargetsReady?: boolean | cdktf.IResolvable;
  /**
  * capacity_provider_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#capacity_provider_strategy EcsService#capacity_provider_strategy}
  */
  readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[] | cdktf.IResolvable;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#load_balancer EcsService#load_balancer}
  */
  readonly loadBalancer?: EcsServiceLoadBalancer[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#timeouts EcsService#timeouts}
  */
  readonly timeouts?: EcsServiceTimeouts;
}
export interface EcsServiceCapacityProviderStrategy {
  /**
  * The number of tasks, at a minimum, to run on the specified capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#base EcsService#base}
  */
  readonly base?: number;
  /**
  * Name of the capacity provider. Should be one of:
  *  	- FARGATE
  *  	- FARGATE_SPOT
  *  	- ASG fullname: Used when asg created with agent platform ECS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#capacity_provider EcsService#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * The relative percentage of the total number of launched tasks that should use the specified capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#weight EcsService#weight}
  */
  readonly weight?: number;
}

export function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function ecsServiceCapacityProviderStrategyToHclTerraform(struct?: EcsServiceCapacityProviderStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_provider: {
      value: cdktf.stringToHclTerraform(struct!.capacityProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsServiceCapacityProviderStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._capacityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProvider = this._capacityProvider;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceCapacityProviderStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._capacityProvider = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._capacityProvider = value.capacityProvider;
      this._weight = value.weight;
    }
  }

  // base - computed: true, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // capacity_provider - computed: false, optional: false, required: true
  private _capacityProvider?: string; 
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }
  public set capacityProvider(value: string) {
    this._capacityProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderInput() {
    return this._capacityProvider;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class EcsServiceCapacityProviderStrategyList extends cdktf.ComplexList {
  public internalValue? : EcsServiceCapacityProviderStrategy[] | cdktf.IResolvable

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
  public get(index: number): EcsServiceCapacityProviderStrategyOutputReference {
    return new EcsServiceCapacityProviderStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsServiceLoadBalancerHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#grpc_success_code EcsService#grpc_success_code}
  */
  readonly grpcSuccessCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#health_check_interval_seconds EcsService#health_check_interval_seconds}
  */
  readonly healthCheckIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#health_check_timeout_seconds EcsService#health_check_timeout_seconds}
  */
  readonly healthCheckTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#healthy_threshold_count EcsService#healthy_threshold_count}
  */
  readonly healthyThresholdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#http_success_code EcsService#http_success_code}
  */
  readonly httpSuccessCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#unhealthy_threshold_count EcsService#unhealthy_threshold_count}
  */
  readonly unhealthyThresholdCount?: number;
}

export function ecsServiceLoadBalancerHealthCheckConfigToTerraform(struct?: EcsServiceLoadBalancerHealthCheckConfigOutputReference | EcsServiceLoadBalancerHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_success_code: cdktf.stringToTerraform(struct!.grpcSuccessCode),
    health_check_interval_seconds: cdktf.numberToTerraform(struct!.healthCheckIntervalSeconds),
    health_check_timeout_seconds: cdktf.numberToTerraform(struct!.healthCheckTimeoutSeconds),
    healthy_threshold_count: cdktf.numberToTerraform(struct!.healthyThresholdCount),
    http_success_code: cdktf.stringToTerraform(struct!.httpSuccessCode),
    unhealthy_threshold_count: cdktf.numberToTerraform(struct!.unhealthyThresholdCount),
  }
}


export function ecsServiceLoadBalancerHealthCheckConfigToHclTerraform(struct?: EcsServiceLoadBalancerHealthCheckConfigOutputReference | EcsServiceLoadBalancerHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_success_code: {
      value: cdktf.stringToHclTerraform(struct!.grpcSuccessCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.healthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_success_code: {
      value: cdktf.stringToHclTerraform(struct!.httpSuccessCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceLoadBalancerHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceLoadBalancerHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcSuccessCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcSuccessCode = this._grpcSuccessCode;
    }
    if (this._healthCheckIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckIntervalSeconds = this._healthCheckIntervalSeconds;
    }
    if (this._healthCheckTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckTimeoutSeconds = this._healthCheckTimeoutSeconds;
    }
    if (this._healthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThresholdCount = this._healthyThresholdCount;
    }
    if (this._httpSuccessCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSuccessCode = this._httpSuccessCode;
    }
    if (this._unhealthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThresholdCount = this._unhealthyThresholdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceLoadBalancerHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcSuccessCode = undefined;
      this._healthCheckIntervalSeconds = undefined;
      this._healthCheckTimeoutSeconds = undefined;
      this._healthyThresholdCount = undefined;
      this._httpSuccessCode = undefined;
      this._unhealthyThresholdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcSuccessCode = value.grpcSuccessCode;
      this._healthCheckIntervalSeconds = value.healthCheckIntervalSeconds;
      this._healthCheckTimeoutSeconds = value.healthCheckTimeoutSeconds;
      this._healthyThresholdCount = value.healthyThresholdCount;
      this._httpSuccessCode = value.httpSuccessCode;
      this._unhealthyThresholdCount = value.unhealthyThresholdCount;
    }
  }

  // grpc_success_code - computed: true, optional: true, required: false
  private _grpcSuccessCode?: string; 
  public get grpcSuccessCode() {
    return this.getStringAttribute('grpc_success_code');
  }
  public set grpcSuccessCode(value: string) {
    this._grpcSuccessCode = value;
  }
  public resetGrpcSuccessCode() {
    this._grpcSuccessCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcSuccessCodeInput() {
    return this._grpcSuccessCode;
  }

  // health_check_interval_seconds - computed: true, optional: true, required: false
  private _healthCheckIntervalSeconds?: number; 
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }
  public set healthCheckIntervalSeconds(value: number) {
    this._healthCheckIntervalSeconds = value;
  }
  public resetHealthCheckIntervalSeconds() {
    this._healthCheckIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalSecondsInput() {
    return this._healthCheckIntervalSeconds;
  }

  // health_check_timeout_seconds - computed: true, optional: true, required: false
  private _healthCheckTimeoutSeconds?: number; 
  public get healthCheckTimeoutSeconds() {
    return this.getNumberAttribute('health_check_timeout_seconds');
  }
  public set healthCheckTimeoutSeconds(value: number) {
    this._healthCheckTimeoutSeconds = value;
  }
  public resetHealthCheckTimeoutSeconds() {
    this._healthCheckTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeoutSecondsInput() {
    return this._healthCheckTimeoutSeconds;
  }

  // healthy_threshold_count - computed: true, optional: true, required: false
  private _healthyThresholdCount?: number; 
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
  }
  public set healthyThresholdCount(value: number) {
    this._healthyThresholdCount = value;
  }
  public resetHealthyThresholdCount() {
    this._healthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdCountInput() {
    return this._healthyThresholdCount;
  }

  // http_success_code - computed: true, optional: true, required: false
  private _httpSuccessCode?: string; 
  public get httpSuccessCode() {
    return this.getStringAttribute('http_success_code');
  }
  public set httpSuccessCode(value: string) {
    this._httpSuccessCode = value;
  }
  public resetHttpSuccessCode() {
    this._httpSuccessCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSuccessCodeInput() {
    return this._httpSuccessCode;
  }

  // unhealthy_threshold_count - computed: true, optional: true, required: false
  private _unhealthyThresholdCount?: number; 
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
  }
  public set unhealthyThresholdCount(value: number) {
    this._unhealthyThresholdCount = value;
  }
  public resetUnhealthyThresholdCount() {
    this._unhealthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdCountInput() {
    return this._unhealthyThresholdCount;
  }
}
export interface EcsServiceLoadBalancer {
  /**
  * The backend protocol associated with this load balancer configuration. Use 'backend_protocol_version' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#backend_protocol EcsService#backend_protocol}
  */
  readonly backendProtocol?: string;
  /**
  * The backend protocol version associated with this load balancer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#backend_protocol_version EcsService#backend_protocol_version}
  */
  readonly backendProtocolVersion?: string;
  /**
  * The ARN of an ACM certificate to associate with this load balancer.  Only applicable for HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#certificate_arn EcsService#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Whether or not to drop invalid HTTP headers received by the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#drop_invalid_headers EcsService#drop_invalid_headers}
  */
  readonly dropInvalidHeaders?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable access logs.  When enabled, Duplo will send access logs to a centralized S3 bucket per plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#enable_access_logs EcsService#enable_access_logs}
  */
  readonly enableAccessLogs?: boolean | cdktf.IResolvable;
  /**
  * The frontend port associated with this load balancer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#external_port EcsService#external_port}
  */
  readonly externalPort: number;
  /**
  * The health check URL to associate with this load balancer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#health_check_url EcsService#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * Whether or not the load balancer should redirect HTTP to HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#http_to_https_redirect EcsService#http_to_https_redirect}
  */
  readonly httpToHttpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The time in seconds that the connection is allowed to be idle. Only valid for Load Balancers of type `application`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#idle_timeout EcsService#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Whether or not to create an internal load balancer. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#is_internal EcsService#is_internal}
  */
  readonly isInternal?: boolean | cdktf.IResolvable;
  /**
  * The numerical index of the type of load balancer configuration to create.
  * Should be one of:
  * 
  *    - `0` : ELB (Classic Load Balancer)
  *    - `1` : ALB (Application Load Balancer)
  *    - `2` : Health-check Only (No Load Balancer)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#lb_type EcsService#lb_type}
  */
  readonly lbType: number;
  /**
  * The backend port associated with this load balancer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#port EcsService#port}
  */
  readonly port: string;
  /**
  * The frontend protocol associated with this load balancer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#protocol EcsService#protocol}
  */
  readonly protocol: string;
  /**
  * Number of Load Balancer target group to associate with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#target_group_count EcsService#target_group_count}
  */
  readonly targetGroupCount: number;
  /**
  * The ARN of a web application firewall to associate this load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#webaclid EcsService#webaclid}
  */
  readonly webaclid?: string;
  /**
  * health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#health_check_config EcsService#health_check_config}
  */
  readonly healthCheckConfig?: EcsServiceLoadBalancerHealthCheckConfig;
}

export function ecsServiceLoadBalancerToTerraform(struct?: EcsServiceLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_protocol: cdktf.stringToTerraform(struct!.backendProtocol),
    backend_protocol_version: cdktf.stringToTerraform(struct!.backendProtocolVersion),
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    drop_invalid_headers: cdktf.booleanToTerraform(struct!.dropInvalidHeaders),
    enable_access_logs: cdktf.booleanToTerraform(struct!.enableAccessLogs),
    external_port: cdktf.numberToTerraform(struct!.externalPort),
    health_check_url: cdktf.stringToTerraform(struct!.healthCheckUrl),
    http_to_https_redirect: cdktf.booleanToTerraform(struct!.httpToHttpsRedirect),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    is_internal: cdktf.booleanToTerraform(struct!.isInternal),
    lb_type: cdktf.numberToTerraform(struct!.lbType),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_group_count: cdktf.numberToTerraform(struct!.targetGroupCount),
    webaclid: cdktf.stringToTerraform(struct!.webaclid),
    health_check_config: ecsServiceLoadBalancerHealthCheckConfigToTerraform(struct!.healthCheckConfig),
  }
}


export function ecsServiceLoadBalancerToHclTerraform(struct?: EcsServiceLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_protocol: {
      value: cdktf.stringToHclTerraform(struct!.backendProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.backendProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_arn: {
      value: cdktf.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_invalid_headers: {
      value: cdktf.booleanToHclTerraform(struct!.dropInvalidHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_access_logs: {
      value: cdktf.booleanToHclTerraform(struct!.enableAccessLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_port: {
      value: cdktf.numberToHclTerraform(struct!.externalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_url: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_to_https_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpToHttpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_internal: {
      value: cdktf.booleanToHclTerraform(struct!.isInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lb_type: {
      value: cdktf.numberToHclTerraform(struct!.lbType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group_count: {
      value: cdktf.numberToHclTerraform(struct!.targetGroupCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    webaclid: {
      value: cdktf.stringToHclTerraform(struct!.webaclid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_config: {
      value: ecsServiceLoadBalancerHealthCheckConfigToHclTerraform(struct!.healthCheckConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EcsServiceLoadBalancerHealthCheckConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsServiceLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendProtocol = this._backendProtocol;
    }
    if (this._backendProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendProtocolVersion = this._backendProtocolVersion;
    }
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._dropInvalidHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropInvalidHeaders = this._dropInvalidHeaders;
    }
    if (this._enableAccessLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAccessLogs = this._enableAccessLogs;
    }
    if (this._externalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalPort = this._externalPort;
    }
    if (this._healthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckUrl = this._healthCheckUrl;
    }
    if (this._httpToHttpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpToHttpsRedirect = this._httpToHttpsRedirect;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._isInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInternal = this._isInternal;
    }
    if (this._lbType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbType = this._lbType;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetGroupCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupCount = this._targetGroupCount;
    }
    if (this._webaclid !== undefined) {
      hasAnyValues = true;
      internalValueResult.webaclid = this._webaclid;
    }
    if (this._healthCheckConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckConfig = this._healthCheckConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendProtocol = undefined;
      this._backendProtocolVersion = undefined;
      this._certificateArn = undefined;
      this._dropInvalidHeaders = undefined;
      this._enableAccessLogs = undefined;
      this._externalPort = undefined;
      this._healthCheckUrl = undefined;
      this._httpToHttpsRedirect = undefined;
      this._idleTimeout = undefined;
      this._isInternal = undefined;
      this._lbType = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetGroupCount = undefined;
      this._webaclid = undefined;
      this._healthCheckConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendProtocol = value.backendProtocol;
      this._backendProtocolVersion = value.backendProtocolVersion;
      this._certificateArn = value.certificateArn;
      this._dropInvalidHeaders = value.dropInvalidHeaders;
      this._enableAccessLogs = value.enableAccessLogs;
      this._externalPort = value.externalPort;
      this._healthCheckUrl = value.healthCheckUrl;
      this._httpToHttpsRedirect = value.httpToHttpsRedirect;
      this._idleTimeout = value.idleTimeout;
      this._isInternal = value.isInternal;
      this._lbType = value.lbType;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetGroupCount = value.targetGroupCount;
      this._webaclid = value.webaclid;
      this._healthCheckConfig.internalValue = value.healthCheckConfig;
    }
  }

  // backend_protocol - computed: true, optional: true, required: false
  private _backendProtocol?: string; 
  public get backendProtocol() {
    return this.getStringAttribute('backend_protocol');
  }
  public set backendProtocol(value: string) {
    this._backendProtocol = value;
  }
  public resetBackendProtocol() {
    this._backendProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendProtocolInput() {
    return this._backendProtocol;
  }

  // backend_protocol_version - computed: true, optional: true, required: false
  private _backendProtocolVersion?: string; 
  public get backendProtocolVersion() {
    return this.getStringAttribute('backend_protocol_version');
  }
  public set backendProtocolVersion(value: string) {
    this._backendProtocolVersion = value;
  }
  public resetBackendProtocolVersion() {
    this._backendProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendProtocolVersionInput() {
    return this._backendProtocolVersion;
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // drop_invalid_headers - computed: true, optional: true, required: false
  private _dropInvalidHeaders?: boolean | cdktf.IResolvable; 
  public get dropInvalidHeaders() {
    return this.getBooleanAttribute('drop_invalid_headers');
  }
  public set dropInvalidHeaders(value: boolean | cdktf.IResolvable) {
    this._dropInvalidHeaders = value;
  }
  public resetDropInvalidHeaders() {
    this._dropInvalidHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInvalidHeadersInput() {
    return this._dropInvalidHeaders;
  }

  // enable_access_logs - computed: true, optional: true, required: false
  private _enableAccessLogs?: boolean | cdktf.IResolvable; 
  public get enableAccessLogs() {
    return this.getBooleanAttribute('enable_access_logs');
  }
  public set enableAccessLogs(value: boolean | cdktf.IResolvable) {
    this._enableAccessLogs = value;
  }
  public resetEnableAccessLogs() {
    this._enableAccessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessLogsInput() {
    return this._enableAccessLogs;
  }

  // external_port - computed: false, optional: false, required: true
  private _externalPort?: number; 
  public get externalPort() {
    return this.getNumberAttribute('external_port');
  }
  public set externalPort(value: number) {
    this._externalPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortInput() {
    return this._externalPort;
  }

  // health_check_url - computed: false, optional: true, required: false
  private _healthCheckUrl?: string; 
  public get healthCheckUrl() {
    return this.getStringAttribute('health_check_url');
  }
  public set healthCheckUrl(value: string) {
    this._healthCheckUrl = value;
  }
  public resetHealthCheckUrl() {
    this._healthCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUrlInput() {
    return this._healthCheckUrl;
  }

  // http_to_https_redirect - computed: true, optional: true, required: false
  private _httpToHttpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpToHttpsRedirect() {
    return this.getBooleanAttribute('http_to_https_redirect');
  }
  public set httpToHttpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpToHttpsRedirect = value;
  }
  public resetHttpToHttpsRedirect() {
    this._httpToHttpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpToHttpsRedirectInput() {
    return this._httpToHttpsRedirect;
  }

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // is_internal - computed: false, optional: true, required: false
  private _isInternal?: boolean | cdktf.IResolvable; 
  public get isInternal() {
    return this.getBooleanAttribute('is_internal');
  }
  public set isInternal(value: boolean | cdktf.IResolvable) {
    this._isInternal = value;
  }
  public resetIsInternal() {
    this._isInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInternalInput() {
    return this._isInternal;
  }

  // lb_type - computed: false, optional: false, required: true
  private _lbType?: number; 
  public get lbType() {
    return this.getNumberAttribute('lb_type');
  }
  public set lbType(value: number) {
    this._lbType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbTypeInput() {
    return this._lbType;
  }

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // replication_controller_name - computed: true, optional: false, required: false
  public get replicationControllerName() {
    return this.getStringAttribute('replication_controller_name');
  }

  // target_group_count - computed: false, optional: false, required: true
  private _targetGroupCount?: number; 
  public get targetGroupCount() {
    return this.getNumberAttribute('target_group_count');
  }
  public set targetGroupCount(value: number) {
    this._targetGroupCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupCountInput() {
    return this._targetGroupCount;
  }

  // webaclid - computed: true, optional: true, required: false
  private _webaclid?: string; 
  public get webaclid() {
    return this.getStringAttribute('webaclid');
  }
  public set webaclid(value: string) {
    this._webaclid = value;
  }
  public resetWebaclid() {
    this._webaclid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webaclidInput() {
    return this._webaclid;
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig = new EcsServiceLoadBalancerHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: EcsServiceLoadBalancerHealthCheckConfig) {
    this._healthCheckConfig.internalValue = value;
  }
  public resetHealthCheckConfig() {
    this._healthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig.internalValue;
  }
}

export class EcsServiceLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : EcsServiceLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): EcsServiceLoadBalancerOutputReference {
    return new EcsServiceLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#create EcsService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#delete EcsService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#update EcsService#update}
  */
  readonly update?: string;
}

export function ecsServiceTimeoutsToTerraform(struct?: EcsServiceTimeouts | cdktf.IResolvable): any {
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


export function ecsServiceTimeoutsToHclTerraform(struct?: EcsServiceTimeouts | cdktf.IResolvable): any {
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

export class EcsServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcsServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service duplocloud_ecs_service}
*/
export class EcsService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_ecs_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsService to import
  * @param importFromId The id of the existing EcsService that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_ecs_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecs_service duplocloud_ecs_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: EcsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_ecs_service',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsPrfx = config.dnsPrfx;
    this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
    this._id = config.id;
    this._isTargetGroupOnly = config.isTargetGroupOnly;
    this._name = config.name;
    this._oldTaskDefinitionBufferSize = config.oldTaskDefinitionBufferSize;
    this._replicas = config.replicas;
    this._taskDefinition = config.taskDefinition;
    this._tenantId = config.tenantId;
    this._waitUntilTargetsReady = config.waitUntilTargetsReady;
    this._capacityProviderStrategy.internalValue = config.capacityProviderStrategy;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_prfx - computed: false, optional: true, required: false
  private _dnsPrfx?: string; 
  public get dnsPrfx() {
    return this.getStringAttribute('dns_prfx');
  }
  public set dnsPrfx(value: string) {
    this._dnsPrfx = value;
  }
  public resetDnsPrfx() {
    this._dnsPrfx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrfxInput() {
    return this._dnsPrfx;
  }

  // health_check_grace_period_seconds - computed: false, optional: true, required: false
  private _healthCheckGracePeriodSeconds?: number; 
  public get healthCheckGracePeriodSeconds() {
    return this.getNumberAttribute('health_check_grace_period_seconds');
  }
  public set healthCheckGracePeriodSeconds(value: number) {
    this._healthCheckGracePeriodSeconds = value;
  }
  public resetHealthCheckGracePeriodSeconds() {
    this._healthCheckGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodSecondsInput() {
    return this._healthCheckGracePeriodSeconds;
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

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // is_target_group_only - computed: false, optional: true, required: false
  private _isTargetGroupOnly?: boolean | cdktf.IResolvable; 
  public get isTargetGroupOnly() {
    return this.getBooleanAttribute('is_target_group_only');
  }
  public set isTargetGroupOnly(value: boolean | cdktf.IResolvable) {
    this._isTargetGroupOnly = value;
  }
  public resetIsTargetGroupOnly() {
    this._isTargetGroupOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTargetGroupOnlyInput() {
    return this._isTargetGroupOnly;
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

  // old_task_definition_buffer_size - computed: false, optional: true, required: false
  private _oldTaskDefinitionBufferSize?: number; 
  public get oldTaskDefinitionBufferSize() {
    return this.getNumberAttribute('old_task_definition_buffer_size');
  }
  public set oldTaskDefinitionBufferSize(value: number) {
    this._oldTaskDefinitionBufferSize = value;
  }
  public resetOldTaskDefinitionBufferSize() {
    this._oldTaskDefinitionBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldTaskDefinitionBufferSizeInput() {
    return this._oldTaskDefinitionBufferSize;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // target_group_arns - computed: true, optional: false, required: false
  public get targetGroupArns() {
    return cdktf.Fn.tolist(this.getListAttribute('target_group_arns'));
  }

  // task_definition - computed: false, optional: false, required: true
  private _taskDefinition?: string; 
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }
  public set taskDefinition(value: string) {
    this._taskDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionInput() {
    return this._taskDefinition;
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

  // wait_until_targets_ready - computed: false, optional: true, required: false
  private _waitUntilTargetsReady?: boolean | cdktf.IResolvable; 
  public get waitUntilTargetsReady() {
    return this.getBooleanAttribute('wait_until_targets_ready');
  }
  public set waitUntilTargetsReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilTargetsReady = value;
  }
  public resetWaitUntilTargetsReady() {
    this._waitUntilTargetsReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilTargetsReadyInput() {
    return this._waitUntilTargetsReady;
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy = new EcsServiceCapacityProviderStrategyList(this, "capacity_provider_strategy", false);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }
  public putCapacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[] | cdktf.IResolvable) {
    this._capacityProviderStrategy.internalValue = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new EcsServiceLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: EcsServiceLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsServiceTimeouts) {
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
      dns_prfx: cdktf.stringToTerraform(this._dnsPrfx),
      health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
      id: cdktf.stringToTerraform(this._id),
      is_target_group_only: cdktf.booleanToTerraform(this._isTargetGroupOnly),
      name: cdktf.stringToTerraform(this._name),
      old_task_definition_buffer_size: cdktf.numberToTerraform(this._oldTaskDefinitionBufferSize),
      replicas: cdktf.numberToTerraform(this._replicas),
      task_definition: cdktf.stringToTerraform(this._taskDefinition),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      wait_until_targets_ready: cdktf.booleanToTerraform(this._waitUntilTargetsReady),
      capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform, true)(this._capacityProviderStrategy.internalValue),
      load_balancer: cdktf.listMapper(ecsServiceLoadBalancerToTerraform, true)(this._loadBalancer.internalValue),
      timeouts: ecsServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_prfx: {
        value: cdktf.stringToHclTerraform(this._dnsPrfx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_grace_period_seconds: {
        value: cdktf.numberToHclTerraform(this._healthCheckGracePeriodSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_target_group_only: {
        value: cdktf.booleanToHclTerraform(this._isTargetGroupOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      old_task_definition_buffer_size: {
        value: cdktf.numberToHclTerraform(this._oldTaskDefinitionBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_definition: {
        value: cdktf.stringToHclTerraform(this._taskDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_targets_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilTargetsReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity_provider_strategy: {
        value: cdktf.listMapperHcl(ecsServiceCapacityProviderStrategyToHclTerraform, true)(this._capacityProviderStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceCapacityProviderStrategyList",
      },
      load_balancer: {
        value: cdktf.listMapperHcl(ecsServiceLoadBalancerToHclTerraform, true)(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceLoadBalancerList",
      },
      timeouts: {
        value: ecsServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
