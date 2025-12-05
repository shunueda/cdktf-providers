// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayUpstreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Load balancing algorithm, value range: ROUND-ROBIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#algorithm ApiGatewayUpstream#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#id ApiGatewayUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Request retry count, default to 3 times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#retries ApiGatewayUpstream#retries}
  */
  readonly retries?: number;
  /**
  * Backend protocol, value range: HTTP, HTTPS, gRPC, gRPCs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#scheme ApiGatewayUpstream#scheme}
  */
  readonly scheme: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#tags ApiGatewayUpstream#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * VPC Unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#uniq_vpc_id ApiGatewayUpstream#uniq_vpc_id}
  */
  readonly uniqVpcId: string;
  /**
  * Backend channel description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#upstream_description ApiGatewayUpstream#upstream_description}
  */
  readonly upstreamDescription?: string;
  /**
  * Host request header forwarded by gateway to backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#upstream_host ApiGatewayUpstream#upstream_host}
  */
  readonly upstreamHost?: string;
  /**
  * Backend channel name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#upstream_name ApiGatewayUpstream#upstream_name}
  */
  readonly upstreamName?: string;
  /**
  * Backend access type, value range: IP_PORT, K8S.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#upstream_type ApiGatewayUpstream#upstream_type}
  */
  readonly upstreamType?: string;
  /**
  * health_checker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#health_checker ApiGatewayUpstream#health_checker}
  */
  readonly healthChecker?: ApiGatewayUpstreamHealthChecker;
  /**
  * k8s_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#k8s_service ApiGatewayUpstream#k8s_service}
  */
  readonly k8SService?: ApiGatewayUpstreamK8SService[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#nodes ApiGatewayUpstream#nodes}
  */
  readonly nodes?: ApiGatewayUpstreamNodes[] | cdktf.IResolvable;
}
export interface ApiGatewayUpstreamHealthChecker {
  /**
  * Detect the requested path during active health checks. The default is&#39;/&#39;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#active_check_http_path ApiGatewayUpstream#active_check_http_path}
  */
  readonly activeCheckHttpPath?: string;
  /**
  * The time interval for active health checks is 5 seconds by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#active_check_interval ApiGatewayUpstream#active_check_interval}
  */
  readonly activeCheckInterval?: number;
  /**
  * The detection request for active health check timed out in seconds. The default is 5 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#active_check_timeout ApiGatewayUpstream#active_check_timeout}
  */
  readonly activeCheckTimeout?: number;
  /**
  * Identify whether active health checks are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#enable_active_check ApiGatewayUpstream#enable_active_check}
  */
  readonly enableActiveCheck: boolean | cdktf.IResolvable;
  /**
  * Identify whether passive health checks are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#enable_passive_check ApiGatewayUpstream#enable_passive_check}
  */
  readonly enablePassiveCheck: boolean | cdktf.IResolvable;
  /**
  * The HTTP status code that determines a successful request during a health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#healthy_http_status ApiGatewayUpstream#healthy_http_status}
  */
  readonly healthyHttpStatus: string;
  /**
  * HTTP continuous error threshold. 0 means HTTP checking is disabled. Value range: [0, 254].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#http_failure_threshold ApiGatewayUpstream#http_failure_threshold}
  */
  readonly httpFailureThreshold: number;
  /**
  * TCP continuous error threshold. 0 indicates disabling TCP checking. Value range: [0, 254].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#tcp_failure_threshold ApiGatewayUpstream#tcp_failure_threshold}
  */
  readonly tcpFailureThreshold: number;
  /**
  * Continuous timeout threshold. 0 indicates disabling timeout checking. Value range: [0, 254].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#timeout_threshold ApiGatewayUpstream#timeout_threshold}
  */
  readonly timeoutThreshold: number;
  /**
  * The HTTP status code that determines a failed request during a health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#unhealthy_http_status ApiGatewayUpstream#unhealthy_http_status}
  */
  readonly unhealthyHttpStatus: string;
  /**
  * The automatic recovery time of abnormal node status, in seconds. When only passive checking is enabled, it must be set to a value&gt;0, otherwise the passive exception node will not be able to recover. The default is 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#unhealthy_timeout ApiGatewayUpstream#unhealthy_timeout}
  */
  readonly unhealthyTimeout?: number;
}

export function apiGatewayUpstreamHealthCheckerToTerraform(struct?: ApiGatewayUpstreamHealthCheckerOutputReference | ApiGatewayUpstreamHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_check_http_path: cdktf.stringToTerraform(struct!.activeCheckHttpPath),
    active_check_interval: cdktf.numberToTerraform(struct!.activeCheckInterval),
    active_check_timeout: cdktf.numberToTerraform(struct!.activeCheckTimeout),
    enable_active_check: cdktf.booleanToTerraform(struct!.enableActiveCheck),
    enable_passive_check: cdktf.booleanToTerraform(struct!.enablePassiveCheck),
    healthy_http_status: cdktf.stringToTerraform(struct!.healthyHttpStatus),
    http_failure_threshold: cdktf.numberToTerraform(struct!.httpFailureThreshold),
    tcp_failure_threshold: cdktf.numberToTerraform(struct!.tcpFailureThreshold),
    timeout_threshold: cdktf.numberToTerraform(struct!.timeoutThreshold),
    unhealthy_http_status: cdktf.stringToTerraform(struct!.unhealthyHttpStatus),
    unhealthy_timeout: cdktf.numberToTerraform(struct!.unhealthyTimeout),
  }
}


export function apiGatewayUpstreamHealthCheckerToHclTerraform(struct?: ApiGatewayUpstreamHealthCheckerOutputReference | ApiGatewayUpstreamHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_check_http_path: {
      value: cdktf.stringToHclTerraform(struct!.activeCheckHttpPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_check_interval: {
      value: cdktf.numberToHclTerraform(struct!.activeCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_check_timeout: {
      value: cdktf.numberToHclTerraform(struct!.activeCheckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_active_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableActiveCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_passive_check: {
      value: cdktf.booleanToHclTerraform(struct!.enablePassiveCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    healthy_http_status: {
      value: cdktf.stringToHclTerraform(struct!.healthyHttpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.httpFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_threshold: {
      value: cdktf.numberToHclTerraform(struct!.timeoutThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_http_status: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyHttpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_timeout: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayUpstreamHealthCheckerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayUpstreamHealthChecker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeCheckHttpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeCheckHttpPath = this._activeCheckHttpPath;
    }
    if (this._activeCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeCheckInterval = this._activeCheckInterval;
    }
    if (this._activeCheckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeCheckTimeout = this._activeCheckTimeout;
    }
    if (this._enableActiveCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableActiveCheck = this._enableActiveCheck;
    }
    if (this._enablePassiveCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePassiveCheck = this._enablePassiveCheck;
    }
    if (this._healthyHttpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyHttpStatus = this._healthyHttpStatus;
    }
    if (this._httpFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailureThreshold = this._httpFailureThreshold;
    }
    if (this._tcpFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailureThreshold = this._tcpFailureThreshold;
    }
    if (this._timeoutThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutThreshold = this._timeoutThreshold;
    }
    if (this._unhealthyHttpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyHttpStatus = this._unhealthyHttpStatus;
    }
    if (this._unhealthyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyTimeout = this._unhealthyTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayUpstreamHealthChecker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeCheckHttpPath = undefined;
      this._activeCheckInterval = undefined;
      this._activeCheckTimeout = undefined;
      this._enableActiveCheck = undefined;
      this._enablePassiveCheck = undefined;
      this._healthyHttpStatus = undefined;
      this._httpFailureThreshold = undefined;
      this._tcpFailureThreshold = undefined;
      this._timeoutThreshold = undefined;
      this._unhealthyHttpStatus = undefined;
      this._unhealthyTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeCheckHttpPath = value.activeCheckHttpPath;
      this._activeCheckInterval = value.activeCheckInterval;
      this._activeCheckTimeout = value.activeCheckTimeout;
      this._enableActiveCheck = value.enableActiveCheck;
      this._enablePassiveCheck = value.enablePassiveCheck;
      this._healthyHttpStatus = value.healthyHttpStatus;
      this._httpFailureThreshold = value.httpFailureThreshold;
      this._tcpFailureThreshold = value.tcpFailureThreshold;
      this._timeoutThreshold = value.timeoutThreshold;
      this._unhealthyHttpStatus = value.unhealthyHttpStatus;
      this._unhealthyTimeout = value.unhealthyTimeout;
    }
  }

  // active_check_http_path - computed: false, optional: true, required: false
  private _activeCheckHttpPath?: string; 
  public get activeCheckHttpPath() {
    return this.getStringAttribute('active_check_http_path');
  }
  public set activeCheckHttpPath(value: string) {
    this._activeCheckHttpPath = value;
  }
  public resetActiveCheckHttpPath() {
    this._activeCheckHttpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeCheckHttpPathInput() {
    return this._activeCheckHttpPath;
  }

  // active_check_interval - computed: false, optional: true, required: false
  private _activeCheckInterval?: number; 
  public get activeCheckInterval() {
    return this.getNumberAttribute('active_check_interval');
  }
  public set activeCheckInterval(value: number) {
    this._activeCheckInterval = value;
  }
  public resetActiveCheckInterval() {
    this._activeCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeCheckIntervalInput() {
    return this._activeCheckInterval;
  }

  // active_check_timeout - computed: false, optional: true, required: false
  private _activeCheckTimeout?: number; 
  public get activeCheckTimeout() {
    return this.getNumberAttribute('active_check_timeout');
  }
  public set activeCheckTimeout(value: number) {
    this._activeCheckTimeout = value;
  }
  public resetActiveCheckTimeout() {
    this._activeCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeCheckTimeoutInput() {
    return this._activeCheckTimeout;
  }

  // enable_active_check - computed: false, optional: false, required: true
  private _enableActiveCheck?: boolean | cdktf.IResolvable; 
  public get enableActiveCheck() {
    return this.getBooleanAttribute('enable_active_check');
  }
  public set enableActiveCheck(value: boolean | cdktf.IResolvable) {
    this._enableActiveCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableActiveCheckInput() {
    return this._enableActiveCheck;
  }

  // enable_passive_check - computed: false, optional: false, required: true
  private _enablePassiveCheck?: boolean | cdktf.IResolvable; 
  public get enablePassiveCheck() {
    return this.getBooleanAttribute('enable_passive_check');
  }
  public set enablePassiveCheck(value: boolean | cdktf.IResolvable) {
    this._enablePassiveCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePassiveCheckInput() {
    return this._enablePassiveCheck;
  }

  // healthy_http_status - computed: false, optional: false, required: true
  private _healthyHttpStatus?: string; 
  public get healthyHttpStatus() {
    return this.getStringAttribute('healthy_http_status');
  }
  public set healthyHttpStatus(value: string) {
    this._healthyHttpStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyHttpStatusInput() {
    return this._healthyHttpStatus;
  }

  // http_failure_threshold - computed: false, optional: false, required: true
  private _httpFailureThreshold?: number; 
  public get httpFailureThreshold() {
    return this.getNumberAttribute('http_failure_threshold');
  }
  public set httpFailureThreshold(value: number) {
    this._httpFailureThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailureThresholdInput() {
    return this._httpFailureThreshold;
  }

  // tcp_failure_threshold - computed: false, optional: false, required: true
  private _tcpFailureThreshold?: number; 
  public get tcpFailureThreshold() {
    return this.getNumberAttribute('tcp_failure_threshold');
  }
  public set tcpFailureThreshold(value: number) {
    this._tcpFailureThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailureThresholdInput() {
    return this._tcpFailureThreshold;
  }

  // timeout_threshold - computed: false, optional: false, required: true
  private _timeoutThreshold?: number; 
  public get timeoutThreshold() {
    return this.getNumberAttribute('timeout_threshold');
  }
  public set timeoutThreshold(value: number) {
    this._timeoutThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutThresholdInput() {
    return this._timeoutThreshold;
  }

  // unhealthy_http_status - computed: false, optional: false, required: true
  private _unhealthyHttpStatus?: string; 
  public get unhealthyHttpStatus() {
    return this.getStringAttribute('unhealthy_http_status');
  }
  public set unhealthyHttpStatus(value: string) {
    this._unhealthyHttpStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyHttpStatusInput() {
    return this._unhealthyHttpStatus;
  }

  // unhealthy_timeout - computed: false, optional: true, required: false
  private _unhealthyTimeout?: number; 
  public get unhealthyTimeout() {
    return this.getNumberAttribute('unhealthy_timeout');
  }
  public set unhealthyTimeout(value: number) {
    this._unhealthyTimeout = value;
  }
  public resetUnhealthyTimeout() {
    this._unhealthyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyTimeoutInput() {
    return this._unhealthyTimeout;
  }
}
export interface ApiGatewayUpstreamK8SServiceExtraLabels {
  /**
  * Key of Label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#key ApiGatewayUpstream#key}
  */
  readonly key: string;
  /**
  * Value of Label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#value ApiGatewayUpstream#value}
  */
  readonly value: string;
}

export function apiGatewayUpstreamK8SServiceExtraLabelsToTerraform(struct?: ApiGatewayUpstreamK8SServiceExtraLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayUpstreamK8SServiceExtraLabelsToHclTerraform(struct?: ApiGatewayUpstreamK8SServiceExtraLabels | cdktf.IResolvable): any {
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

export class ApiGatewayUpstreamK8SServiceExtraLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayUpstreamK8SServiceExtraLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayUpstreamK8SServiceExtraLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiGatewayUpstreamK8SServiceExtraLabelsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayUpstreamK8SServiceExtraLabels[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayUpstreamK8SServiceExtraLabelsOutputReference {
    return new ApiGatewayUpstreamK8SServiceExtraLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayUpstreamK8SService {
  /**
  * K8s cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#cluster_id ApiGatewayUpstream#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Customized service name, optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#name ApiGatewayUpstream#name}
  */
  readonly name?: string;
  /**
  * Container namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#namespace ApiGatewayUpstream#namespace}
  */
  readonly namespace: string;
  /**
  * Port of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#port ApiGatewayUpstream#port}
  */
  readonly port: number;
  /**
  * The name of the container service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#service_name ApiGatewayUpstream#service_name}
  */
  readonly serviceName: string;
  /**
  * weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#weight ApiGatewayUpstream#weight}
  */
  readonly weight: number;
  /**
  * extra_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#extra_labels ApiGatewayUpstream#extra_labels}
  */
  readonly extraLabels: ApiGatewayUpstreamK8SServiceExtraLabels[] | cdktf.IResolvable;
}

export function apiGatewayUpstreamK8SServiceToTerraform(struct?: ApiGatewayUpstreamK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    weight: cdktf.numberToTerraform(struct!.weight),
    extra_labels: cdktf.listMapper(apiGatewayUpstreamK8SServiceExtraLabelsToTerraform, true)(struct!.extraLabels),
  }
}


export function apiGatewayUpstreamK8SServiceToHclTerraform(struct?: ApiGatewayUpstreamK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
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
    extra_labels: {
      value: cdktf.listMapperHcl(apiGatewayUpstreamK8SServiceExtraLabelsToHclTerraform, true)(struct!.extraLabels),
      isBlock: true,
      type: "list",
      storageClassType: "ApiGatewayUpstreamK8SServiceExtraLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayUpstreamK8SServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayUpstreamK8SService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._extraLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraLabels = this._extraLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayUpstreamK8SService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._serviceName = undefined;
      this._weight = undefined;
      this._extraLabels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._name = value.name;
      this._namespace = value.namespace;
      this._port = value.port;
      this._serviceName = value.serviceName;
      this._weight = value.weight;
      this._extraLabels.internalValue = value.extraLabels;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // extra_labels - computed: false, optional: false, required: true
  private _extraLabels = new ApiGatewayUpstreamK8SServiceExtraLabelsList(this, "extra_labels", false);
  public get extraLabels() {
    return this._extraLabels;
  }
  public putExtraLabels(value: ApiGatewayUpstreamK8SServiceExtraLabels[] | cdktf.IResolvable) {
    this._extraLabels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extraLabelsInput() {
    return this._extraLabels.internalValue;
  }
}

export class ApiGatewayUpstreamK8SServiceList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayUpstreamK8SService[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayUpstreamK8SServiceOutputReference {
    return new ApiGatewayUpstreamK8SServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayUpstreamNodes {
  /**
  * The ID of the TKE clusterNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#cluster_id ApiGatewayUpstream#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * IP or domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#host ApiGatewayUpstream#host}
  */
  readonly host: string;
  /**
  * K8S namespaceNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#name_space ApiGatewayUpstream#name_space}
  */
  readonly nameSpace?: string;
  /**
  * Port [0, 65535].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#port ApiGatewayUpstream#port}
  */
  readonly port: number;
  /**
  * K8S container service nameNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#service_name ApiGatewayUpstream#service_name}
  */
  readonly serviceName?: string;
  /**
  * Source of Node, value range: K8SNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#source ApiGatewayUpstream#source}
  */
  readonly source?: string;
  /**
  * Dye labelNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#tags ApiGatewayUpstream#tags}
  */
  readonly tags?: string[];
  /**
  * Unique service name recorded internally by API gatewayNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#unique_service_name ApiGatewayUpstream#unique_service_name}
  */
  readonly uniqueServiceName?: string;
  /**
  * CVM instance IDNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#vm_instance_id ApiGatewayUpstream#vm_instance_id}
  */
  readonly vmInstanceId?: string;
  /**
  * Weight [0, 100], 0 is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#weight ApiGatewayUpstream#weight}
  */
  readonly weight: number;
}

export function apiGatewayUpstreamNodesToTerraform(struct?: ApiGatewayUpstreamNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    host: cdktf.stringToTerraform(struct!.host),
    name_space: cdktf.stringToTerraform(struct!.nameSpace),
    port: cdktf.numberToTerraform(struct!.port),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    source: cdktf.stringToTerraform(struct!.source),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    unique_service_name: cdktf.stringToTerraform(struct!.uniqueServiceName),
    vm_instance_id: cdktf.stringToTerraform(struct!.vmInstanceId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function apiGatewayUpstreamNodesToHclTerraform(struct?: ApiGatewayUpstreamNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_space: {
      value: cdktf.stringToHclTerraform(struct!.nameSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unique_service_name: {
      value: cdktf.stringToHclTerraform(struct!.uniqueServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.vmInstanceId),
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

export class ApiGatewayUpstreamNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayUpstreamNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._nameSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSpace = this._nameSpace;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._uniqueServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueServiceName = this._uniqueServiceName;
    }
    if (this._vmInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmInstanceId = this._vmInstanceId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayUpstreamNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._host = undefined;
      this._nameSpace = undefined;
      this._port = undefined;
      this._serviceName = undefined;
      this._source = undefined;
      this._tags = undefined;
      this._uniqueServiceName = undefined;
      this._vmInstanceId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._host = value.host;
      this._nameSpace = value.nameSpace;
      this._port = value.port;
      this._serviceName = value.serviceName;
      this._source = value.source;
      this._tags = value.tags;
      this._uniqueServiceName = value.uniqueServiceName;
      this._vmInstanceId = value.vmInstanceId;
      this._weight = value.weight;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // name_space - computed: false, optional: true, required: false
  private _nameSpace?: string; 
  public get nameSpace() {
    return this.getStringAttribute('name_space');
  }
  public set nameSpace(value: string) {
    this._nameSpace = value;
  }
  public resetNameSpace() {
    this._nameSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSpaceInput() {
    return this._nameSpace;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // unique_service_name - computed: false, optional: true, required: false
  private _uniqueServiceName?: string; 
  public get uniqueServiceName() {
    return this.getStringAttribute('unique_service_name');
  }
  public set uniqueServiceName(value: string) {
    this._uniqueServiceName = value;
  }
  public resetUniqueServiceName() {
    this._uniqueServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueServiceNameInput() {
    return this._uniqueServiceName;
  }

  // vm_instance_id - computed: false, optional: true, required: false
  private _vmInstanceId?: string; 
  public get vmInstanceId() {
    return this.getStringAttribute('vm_instance_id');
  }
  public set vmInstanceId(value: string) {
    this._vmInstanceId = value;
  }
  public resetVmInstanceId() {
    this._vmInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInstanceIdInput() {
    return this._vmInstanceId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ApiGatewayUpstreamNodesList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayUpstreamNodes[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayUpstreamNodesOutputReference {
    return new ApiGatewayUpstreamNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream tencentcloud_api_gateway_upstream}
*/
export class ApiGatewayUpstream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_upstream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayUpstream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayUpstream to import
  * @param importFromId The id of the existing ApiGatewayUpstream that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayUpstream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_upstream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/api_gateway_upstream tencentcloud_api_gateway_upstream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayUpstreamConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayUpstreamConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_upstream',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._id = config.id;
    this._retries = config.retries;
    this._scheme = config.scheme;
    this._tags = config.tags;
    this._uniqVpcId = config.uniqVpcId;
    this._upstreamDescription = config.upstreamDescription;
    this._upstreamHost = config.upstreamHost;
    this._upstreamName = config.upstreamName;
    this._upstreamType = config.upstreamType;
    this._healthChecker.internalValue = config.healthChecker;
    this._k8SService.internalValue = config.k8SService;
    this._nodes.internalValue = config.nodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // scheme - computed: false, optional: false, required: true
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // uniq_vpc_id - computed: false, optional: false, required: true
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // upstream_description - computed: false, optional: true, required: false
  private _upstreamDescription?: string; 
  public get upstreamDescription() {
    return this.getStringAttribute('upstream_description');
  }
  public set upstreamDescription(value: string) {
    this._upstreamDescription = value;
  }
  public resetUpstreamDescription() {
    this._upstreamDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamDescriptionInput() {
    return this._upstreamDescription;
  }

  // upstream_host - computed: false, optional: true, required: false
  private _upstreamHost?: string; 
  public get upstreamHost() {
    return this.getStringAttribute('upstream_host');
  }
  public set upstreamHost(value: string) {
    this._upstreamHost = value;
  }
  public resetUpstreamHost() {
    this._upstreamHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamHostInput() {
    return this._upstreamHost;
  }

  // upstream_name - computed: false, optional: true, required: false
  private _upstreamName?: string; 
  public get upstreamName() {
    return this.getStringAttribute('upstream_name');
  }
  public set upstreamName(value: string) {
    this._upstreamName = value;
  }
  public resetUpstreamName() {
    this._upstreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNameInput() {
    return this._upstreamName;
  }

  // upstream_type - computed: false, optional: true, required: false
  private _upstreamType?: string; 
  public get upstreamType() {
    return this.getStringAttribute('upstream_type');
  }
  public set upstreamType(value: string) {
    this._upstreamType = value;
  }
  public resetUpstreamType() {
    this._upstreamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamTypeInput() {
    return this._upstreamType;
  }

  // health_checker - computed: false, optional: true, required: false
  private _healthChecker = new ApiGatewayUpstreamHealthCheckerOutputReference(this, "health_checker");
  public get healthChecker() {
    return this._healthChecker;
  }
  public putHealthChecker(value: ApiGatewayUpstreamHealthChecker) {
    this._healthChecker.internalValue = value;
  }
  public resetHealthChecker() {
    this._healthChecker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckerInput() {
    return this._healthChecker.internalValue;
  }

  // k8s_service - computed: false, optional: true, required: false
  private _k8SService = new ApiGatewayUpstreamK8SServiceList(this, "k8s_service", false);
  public get k8SService() {
    return this._k8SService;
  }
  public putK8SService(value: ApiGatewayUpstreamK8SService[] | cdktf.IResolvable) {
    this._k8SService.internalValue = value;
  }
  public resetK8SService() {
    this._k8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceInput() {
    return this._k8SService.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new ApiGatewayUpstreamNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: ApiGatewayUpstreamNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      id: cdktf.stringToTerraform(this._id),
      retries: cdktf.numberToTerraform(this._retries),
      scheme: cdktf.stringToTerraform(this._scheme),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      uniq_vpc_id: cdktf.stringToTerraform(this._uniqVpcId),
      upstream_description: cdktf.stringToTerraform(this._upstreamDescription),
      upstream_host: cdktf.stringToTerraform(this._upstreamHost),
      upstream_name: cdktf.stringToTerraform(this._upstreamName),
      upstream_type: cdktf.stringToTerraform(this._upstreamType),
      health_checker: apiGatewayUpstreamHealthCheckerToTerraform(this._healthChecker.internalValue),
      k8s_service: cdktf.listMapper(apiGatewayUpstreamK8SServiceToTerraform, true)(this._k8SService.internalValue),
      nodes: cdktf.listMapper(apiGatewayUpstreamNodesToTerraform, true)(this._nodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
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
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      uniq_vpc_id: {
        value: cdktf.stringToHclTerraform(this._uniqVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_description: {
        value: cdktf.stringToHclTerraform(this._upstreamDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_host: {
        value: cdktf.stringToHclTerraform(this._upstreamHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_name: {
        value: cdktf.stringToHclTerraform(this._upstreamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_type: {
        value: cdktf.stringToHclTerraform(this._upstreamType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_checker: {
        value: apiGatewayUpstreamHealthCheckerToHclTerraform(this._healthChecker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayUpstreamHealthCheckerList",
      },
      k8s_service: {
        value: cdktf.listMapperHcl(apiGatewayUpstreamK8SServiceToHclTerraform, true)(this._k8SService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayUpstreamK8SServiceList",
      },
      nodes: {
        value: cdktf.listMapperHcl(apiGatewayUpstreamNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayUpstreamNodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
