// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DuploServiceLbconfigsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#id DuploServiceLbconfigs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the duplo service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#replication_controller_name DuploServiceLbconfigs#replication_controller_name}
  */
  readonly replicationControllerName: string;
  /**
  * The GUID of the tenant that hosts the duplo service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#tenant_id DuploServiceLbconfigs#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Whether or not to wait until Duplo considers all of the load balancers ready Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#wait_until_ready DuploServiceLbconfigs#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * lbconfigs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#lbconfigs DuploServiceLbconfigs#lbconfigs}
  */
  readonly lbconfigs: DuploServiceLbconfigsLbconfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#timeouts DuploServiceLbconfigs#timeouts}
  */
  readonly timeouts?: DuploServiceLbconfigsTimeouts;
}
export interface DuploServiceLbconfigsLbconfigsExtraSelectorLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#key DuploServiceLbconfigs#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#value DuploServiceLbconfigs#value}
  */
  readonly value: string;
}

export function duploServiceLbconfigsLbconfigsExtraSelectorLabelToTerraform(struct?: DuploServiceLbconfigsLbconfigsExtraSelectorLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function duploServiceLbconfigsLbconfigsExtraSelectorLabelToHclTerraform(struct?: DuploServiceLbconfigsLbconfigsExtraSelectorLabel | cdktf.IResolvable): any {
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

export class DuploServiceLbconfigsLbconfigsExtraSelectorLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DuploServiceLbconfigsLbconfigsExtraSelectorLabel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DuploServiceLbconfigsLbconfigsExtraSelectorLabel | cdktf.IResolvable | undefined) {
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

export class DuploServiceLbconfigsLbconfigsExtraSelectorLabelList extends cdktf.ComplexList {
  public internalValue? : DuploServiceLbconfigsLbconfigsExtraSelectorLabel[] | cdktf.IResolvable

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
  public get(index: number): DuploServiceLbconfigsLbconfigsExtraSelectorLabelOutputReference {
    return new DuploServiceLbconfigsLbconfigsExtraSelectorLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DuploServiceLbconfigsLbconfigsHealthCheck {
  /**
  * Response codes to use when checking for a healthy responses from a target. You can specify multiple values (for example, "0,12" for GRPC) or a range of values (for example, "0-99"). Required for GRPC ALB. Only applies to Application Load Balancers (i.e., GRPC) not Network Load Balancers (i.e., TCP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#grpc_success_codes DuploServiceLbconfigs#grpc_success_codes}
  */
  readonly grpcSuccessCodes?: string;
  /**
  * Number of consecutive health checks successes required before considering an unhealthy target healthy. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#healthy_threshold DuploServiceLbconfigs#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Response codes to use when checking for a healthy responses from a target. You can specify multiple values (for example, "200,202" for HTTP(s)) or a range of values (for example, "200-299"). Required for HTTP/HTTPS ALB. Only applies to Application Load Balancers (i.e., HTTP/HTTPS) not Network Load Balancers (i.e., TCP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#http_success_codes DuploServiceLbconfigs#http_success_codes}
  */
  readonly httpSuccessCodes?: string;
  /**
  * Approximate amount of time, in seconds, between health checks of an individual target. Minimum value 5 seconds, Maximum value 300 seconds. Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#interval DuploServiceLbconfigs#interval}
  */
  readonly interval?: number;
  /**
  * Amount of time, in seconds, during which no response means a failed health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#timeout DuploServiceLbconfigs#timeout}
  */
  readonly timeout?: number;
  /**
  * Number of consecutive health check failures required before considering the target unhealthy. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#unhealthy_threshold DuploServiceLbconfigs#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function duploServiceLbconfigsLbconfigsHealthCheckToTerraform(struct?: DuploServiceLbconfigsLbconfigsHealthCheckOutputReference | DuploServiceLbconfigsLbconfigsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_success_codes: cdktf.stringToTerraform(struct!.grpcSuccessCodes),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    http_success_codes: cdktf.stringToTerraform(struct!.httpSuccessCodes),
    interval: cdktf.numberToTerraform(struct!.interval),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function duploServiceLbconfigsLbconfigsHealthCheckToHclTerraform(struct?: DuploServiceLbconfigsLbconfigsHealthCheckOutputReference | DuploServiceLbconfigsLbconfigsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_success_codes: {
      value: cdktf.stringToHclTerraform(struct!.grpcSuccessCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_success_codes: {
      value: cdktf.stringToHclTerraform(struct!.httpSuccessCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DuploServiceLbconfigsLbconfigsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DuploServiceLbconfigsLbconfigsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcSuccessCodes = this._grpcSuccessCodes;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._httpSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSuccessCodes = this._httpSuccessCodes;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DuploServiceLbconfigsLbconfigsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcSuccessCodes = undefined;
      this._healthyThreshold = undefined;
      this._httpSuccessCodes = undefined;
      this._interval = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcSuccessCodes = value.grpcSuccessCodes;
      this._healthyThreshold = value.healthyThreshold;
      this._httpSuccessCodes = value.httpSuccessCodes;
      this._interval = value.interval;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // grpc_success_codes - computed: true, optional: true, required: false
  private _grpcSuccessCodes?: string; 
  public get grpcSuccessCodes() {
    return this.getStringAttribute('grpc_success_codes');
  }
  public set grpcSuccessCodes(value: string) {
    this._grpcSuccessCodes = value;
  }
  public resetGrpcSuccessCodes() {
    this._grpcSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcSuccessCodesInput() {
    return this._grpcSuccessCodes;
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // http_success_codes - computed: true, optional: true, required: false
  private _httpSuccessCodes?: string; 
  public get httpSuccessCodes() {
    return this.getStringAttribute('http_success_codes');
  }
  public set httpSuccessCodes(value: string) {
    this._httpSuccessCodes = value;
  }
  public resetHttpSuccessCodes() {
    this._httpSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSuccessCodesInput() {
    return this._httpSuccessCodes;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface DuploServiceLbconfigsLbconfigs {
  /**
  * Applicable for internal lb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#allow_global_access DuploServiceLbconfigs#allow_global_access}
  */
  readonly allowGlobalAccess?: boolean | cdktf.IResolvable;
  /**
  * Is used for communication between the load balancer and the target instances. This field is used to set protocol version for ALB load balancer. Only applicable when protocol is HTTP or HTTPS. The protocol version. Specify GRPC to send requests to targets using gRPC. Specify HTTP2 to send requests to targets using HTTP/2. The default is HTTP1, which sends requests to targets using HTTP/1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#backend_protocol_version DuploServiceLbconfigs#backend_protocol_version}
  */
  readonly backendProtocolVersion?: string;
  /**
  * The ARN of an ACM certificate to associate with this load balancer.  Only applicable for HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#certificate_arn DuploServiceLbconfigs#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Specify CIDR Values. This is applicable only for Network Load Balancer if `lb_type` is `6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#custom_cidr DuploServiceLbconfigs#custom_cidr}
  */
  readonly customCidr?: string[];
  /**
  * The frontend port associated with this load balancer configuration. Required if `lb_type` is not `7`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#external_port DuploServiceLbconfigs#external_port}
  */
  readonly externalPort?: number;
  /**
  * Only for K8S Node Port (`lb_type = 4`) or load balancers in Kubernetes.  Set the kubernetes service `externalTrafficPolicy` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#external_traffic_policy DuploServiceLbconfigs#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * The health check URL to associate with this load balancer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#health_check_url DuploServiceLbconfigs#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * (Azure Only) Set only if Azure Shared Application Gateway is used (`lb_type = 5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#host_name DuploServiceLbconfigs#host_name}
  */
  readonly hostName?: string;
  /**
  * Whether or not to create an internal load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#is_internal DuploServiceLbconfigs#is_internal}
  */
  readonly isInternal?: boolean | cdktf.IResolvable;
  /**
  * Set to true if the service for which the load balancer is being created is hosted on a docker native host, which is managed directly by DuploCloud, or false if the service is hosted on a cloud-provided platform like EKS, AKS, GKE, ECS, etc. The `duplocloud_native_hosts` data source lists the native hosts in a DuploCloud Tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#is_native DuploServiceLbconfigs#is_native}
  */
  readonly isNative?: boolean | cdktf.IResolvable;
  /**
  * The numerical index of the type of load balancer configuration to create.
  * Should be one of:
  * 
  *    - `0` : ELB (Classic Load Balancer)
  *    - `1` : ALB (Application Load Balancer)
  *    - `2` : Health-check Only (No Load Balancer)
  *    - `3` : K8S Service w/ Cluster IP (No Load Balancer)
  *    - `4` : K8S Service w/ Node Port (No Load Balancer)
  *    - `5` : Azure Shared Application Gateway
  *    - `6` : NLB (Network Load Balancer)
  *    - `7` : Target Group Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#lb_type DuploServiceLbconfigs#lb_type}
  */
  readonly lbType: number;
  /**
  * The backend port associated with this load balancer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#port DuploServiceLbconfigs#port}
  */
  readonly port: string;
  /**
  * The backend protocol associated with this load balancer configuration.
  * Supported protocol based on lb_type:
  * 
  * 	- `0 (ELB)`: HTTP, HTTPS, TCP, UDP
  * 	- `1 (ALB)` : HTTP, HTTPS
  * 	- `3 (K8S Service w/ Cluster IP)`: TCP, UDP
  * 	- `4 (K8S Service w/ Node Port)` : TCP, UDP
  * 	- `5 (Azure Shared Application Gateway)`: HTTP, HTTPS
  * 	- `6 (NLB)` : TCP, UDP, TLS
  * 	- `7 (Target Group Only)` : HTTP, HTTPS, TCP, UDP, TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#protocol DuploServiceLbconfigs#protocol}
  */
  readonly protocol: string;
  /**
  * Only for K8S services or load balancers in Kubernetes.  Set to `true` to set health check annotations for ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#set_ingress_health_check DuploServiceLbconfigs#set_ingress_health_check}
  */
  readonly setIngressHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Skip http to https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#skip_http_to_https DuploServiceLbconfigs#skip_http_to_https}
  */
  readonly skipHttpToHttps?: boolean | cdktf.IResolvable;
  /**
  * extra_selector_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#extra_selector_label DuploServiceLbconfigs#extra_selector_label}
  */
  readonly extraSelectorLabel?: DuploServiceLbconfigsLbconfigsExtraSelectorLabel[] | cdktf.IResolvable;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#health_check DuploServiceLbconfigs#health_check}
  */
  readonly healthCheck?: DuploServiceLbconfigsLbconfigsHealthCheck;
}

export function duploServiceLbconfigsLbconfigsToTerraform(struct?: DuploServiceLbconfigsLbconfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_global_access: cdktf.booleanToTerraform(struct!.allowGlobalAccess),
    backend_protocol_version: cdktf.stringToTerraform(struct!.backendProtocolVersion),
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    custom_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customCidr),
    external_port: cdktf.numberToTerraform(struct!.externalPort),
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    health_check_url: cdktf.stringToTerraform(struct!.healthCheckUrl),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    is_internal: cdktf.booleanToTerraform(struct!.isInternal),
    is_native: cdktf.booleanToTerraform(struct!.isNative),
    lb_type: cdktf.numberToTerraform(struct!.lbType),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    set_ingress_health_check: cdktf.booleanToTerraform(struct!.setIngressHealthCheck),
    skip_http_to_https: cdktf.booleanToTerraform(struct!.skipHttpToHttps),
    extra_selector_label: cdktf.listMapper(duploServiceLbconfigsLbconfigsExtraSelectorLabelToTerraform, true)(struct!.extraSelectorLabel),
    health_check: duploServiceLbconfigsLbconfigsHealthCheckToTerraform(struct!.healthCheck),
  }
}


export function duploServiceLbconfigsLbconfigsToHclTerraform(struct?: DuploServiceLbconfigsLbconfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_global_access: {
      value: cdktf.booleanToHclTerraform(struct!.allowGlobalAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    custom_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_port: {
      value: cdktf.numberToHclTerraform(struct!.externalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_url: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_internal: {
      value: cdktf.booleanToHclTerraform(struct!.isInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_native: {
      value: cdktf.booleanToHclTerraform(struct!.isNative),
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
    set_ingress_health_check: {
      value: cdktf.booleanToHclTerraform(struct!.setIngressHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_http_to_https: {
      value: cdktf.booleanToHclTerraform(struct!.skipHttpToHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_selector_label: {
      value: cdktf.listMapperHcl(duploServiceLbconfigsLbconfigsExtraSelectorLabelToHclTerraform, true)(struct!.extraSelectorLabel),
      isBlock: true,
      type: "list",
      storageClassType: "DuploServiceLbconfigsLbconfigsExtraSelectorLabelList",
    },
    health_check: {
      value: duploServiceLbconfigsLbconfigsHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "DuploServiceLbconfigsLbconfigsHealthCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DuploServiceLbconfigsLbconfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DuploServiceLbconfigsLbconfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowGlobalAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGlobalAccess = this._allowGlobalAccess;
    }
    if (this._backendProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendProtocolVersion = this._backendProtocolVersion;
    }
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._customCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCidr = this._customCidr;
    }
    if (this._externalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalPort = this._externalPort;
    }
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._healthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckUrl = this._healthCheckUrl;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._isInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInternal = this._isInternal;
    }
    if (this._isNative !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNative = this._isNative;
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
    if (this._setIngressHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIngressHealthCheck = this._setIngressHealthCheck;
    }
    if (this._skipHttpToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipHttpToHttps = this._skipHttpToHttps;
    }
    if (this._extraSelectorLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraSelectorLabel = this._extraSelectorLabel?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DuploServiceLbconfigsLbconfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowGlobalAccess = undefined;
      this._backendProtocolVersion = undefined;
      this._certificateArn = undefined;
      this._customCidr = undefined;
      this._externalPort = undefined;
      this._externalTrafficPolicy = undefined;
      this._healthCheckUrl = undefined;
      this._hostName = undefined;
      this._isInternal = undefined;
      this._isNative = undefined;
      this._lbType = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._setIngressHealthCheck = undefined;
      this._skipHttpToHttps = undefined;
      this._extraSelectorLabel.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowGlobalAccess = value.allowGlobalAccess;
      this._backendProtocolVersion = value.backendProtocolVersion;
      this._certificateArn = value.certificateArn;
      this._customCidr = value.customCidr;
      this._externalPort = value.externalPort;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._healthCheckUrl = value.healthCheckUrl;
      this._hostName = value.hostName;
      this._isInternal = value.isInternal;
      this._isNative = value.isNative;
      this._lbType = value.lbType;
      this._port = value.port;
      this._protocol = value.protocol;
      this._setIngressHealthCheck = value.setIngressHealthCheck;
      this._skipHttpToHttps = value.skipHttpToHttps;
      this._extraSelectorLabel.internalValue = value.extraSelectorLabel;
      this._healthCheck.internalValue = value.healthCheck;
    }
  }

  // allow_global_access - computed: true, optional: true, required: false
  private _allowGlobalAccess?: boolean | cdktf.IResolvable; 
  public get allowGlobalAccess() {
    return this.getBooleanAttribute('allow_global_access');
  }
  public set allowGlobalAccess(value: boolean | cdktf.IResolvable) {
    this._allowGlobalAccess = value;
  }
  public resetAllowGlobalAccess() {
    this._allowGlobalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGlobalAccessInput() {
    return this._allowGlobalAccess;
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

  // certificate_arn - computed: true, optional: true, required: false
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

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // custom_cidr - computed: true, optional: true, required: false
  private _customCidr?: string[]; 
  public get customCidr() {
    return this.getListAttribute('custom_cidr');
  }
  public set customCidr(value: string[]) {
    this._customCidr = value;
  }
  public resetCustomCidr() {
    this._customCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCidrInput() {
    return this._customCidr;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // external_port - computed: true, optional: true, required: false
  private _externalPort?: number; 
  public get externalPort() {
    return this.getNumberAttribute('external_port');
  }
  public set externalPort(value: number) {
    this._externalPort = value;
  }
  public resetExternalPort() {
    this._externalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortInput() {
    return this._externalPort;
  }

  // external_traffic_policy - computed: true, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // frontend_ip - computed: true, optional: false, required: false
  public get frontendIp() {
    return this.getStringAttribute('frontend_ip');
  }

  // health_check_url - computed: true, optional: true, required: false
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

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // is_infra_deployment - computed: true, optional: false, required: false
  public get isInfraDeployment() {
    return this.getBooleanAttribute('is_infra_deployment');
  }

  // is_internal - computed: true, optional: true, required: false
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

  // is_native - computed: true, optional: true, required: false
  private _isNative?: boolean | cdktf.IResolvable; 
  public get isNative() {
    return this.getBooleanAttribute('is_native');
  }
  public set isNative(value: boolean | cdktf.IResolvable) {
    this._isNative = value;
  }
  public resetIsNative() {
    this._isNative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNativeInput() {
    return this._isNative;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // set_ingress_health_check - computed: true, optional: true, required: false
  private _setIngressHealthCheck?: boolean | cdktf.IResolvable; 
  public get setIngressHealthCheck() {
    return this.getBooleanAttribute('set_ingress_health_check');
  }
  public set setIngressHealthCheck(value: boolean | cdktf.IResolvable) {
    this._setIngressHealthCheck = value;
  }
  public resetSetIngressHealthCheck() {
    this._setIngressHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIngressHealthCheckInput() {
    return this._setIngressHealthCheck;
  }

  // skip_http_to_https - computed: true, optional: true, required: false
  private _skipHttpToHttps?: boolean | cdktf.IResolvable; 
  public get skipHttpToHttps() {
    return this.getBooleanAttribute('skip_http_to_https');
  }
  public set skipHttpToHttps(value: boolean | cdktf.IResolvable) {
    this._skipHttpToHttps = value;
  }
  public resetSkipHttpToHttps() {
    this._skipHttpToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHttpToHttpsInput() {
    return this._skipHttpToHttps;
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }

  // extra_selector_label - computed: false, optional: true, required: false
  private _extraSelectorLabel = new DuploServiceLbconfigsLbconfigsExtraSelectorLabelList(this, "extra_selector_label", false);
  public get extraSelectorLabel() {
    return this._extraSelectorLabel;
  }
  public putExtraSelectorLabel(value: DuploServiceLbconfigsLbconfigsExtraSelectorLabel[] | cdktf.IResolvable) {
    this._extraSelectorLabel.internalValue = value;
  }
  public resetExtraSelectorLabel() {
    this._extraSelectorLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraSelectorLabelInput() {
    return this._extraSelectorLabel.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DuploServiceLbconfigsLbconfigsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DuploServiceLbconfigsLbconfigsHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }
}

export class DuploServiceLbconfigsLbconfigsList extends cdktf.ComplexList {
  public internalValue? : DuploServiceLbconfigsLbconfigs[] | cdktf.IResolvable

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
  public get(index: number): DuploServiceLbconfigsLbconfigsOutputReference {
    return new DuploServiceLbconfigsLbconfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DuploServiceLbconfigsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#create DuploServiceLbconfigs#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#delete DuploServiceLbconfigs#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#update DuploServiceLbconfigs#update}
  */
  readonly update?: string;
}

export function duploServiceLbconfigsTimeoutsToTerraform(struct?: DuploServiceLbconfigsTimeouts | cdktf.IResolvable): any {
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


export function duploServiceLbconfigsTimeoutsToHclTerraform(struct?: DuploServiceLbconfigsTimeouts | cdktf.IResolvable): any {
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

export class DuploServiceLbconfigsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DuploServiceLbconfigsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DuploServiceLbconfigsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs duplocloud_duplo_service_lbconfigs}
*/
export class DuploServiceLbconfigs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_duplo_service_lbconfigs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DuploServiceLbconfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DuploServiceLbconfigs to import
  * @param importFromId The id of the existing DuploServiceLbconfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DuploServiceLbconfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_duplo_service_lbconfigs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_lbconfigs duplocloud_duplo_service_lbconfigs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DuploServiceLbconfigsConfig
  */
  public constructor(scope: Construct, id: string, config: DuploServiceLbconfigsConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_duplo_service_lbconfigs',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28',
        providerVersionConstraint: '0.11.28'
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
    this._replicationControllerName = config.replicationControllerName;
    this._tenantId = config.tenantId;
    this._waitUntilReady = config.waitUntilReady;
    this._lbconfigs.internalValue = config.lbconfigs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // replication_controller_name - computed: false, optional: false, required: true
  private _replicationControllerName?: string; 
  public get replicationControllerName() {
    return this.getStringAttribute('replication_controller_name');
  }
  public set replicationControllerName(value: string) {
    this._replicationControllerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationControllerNameInput() {
    return this._replicationControllerName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady?: boolean | cdktf.IResolvable; 
  public get waitUntilReady() {
    return this.getBooleanAttribute('wait_until_ready');
  }
  public set waitUntilReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilReady = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady;
  }

  // lbconfigs - computed: false, optional: false, required: true
  private _lbconfigs = new DuploServiceLbconfigsLbconfigsList(this, "lbconfigs", false);
  public get lbconfigs() {
    return this._lbconfigs;
  }
  public putLbconfigs(value: DuploServiceLbconfigsLbconfigs[] | cdktf.IResolvable) {
    this._lbconfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbconfigsInput() {
    return this._lbconfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DuploServiceLbconfigsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DuploServiceLbconfigsTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      replication_controller_name: cdktf.stringToTerraform(this._replicationControllerName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      lbconfigs: cdktf.listMapper(duploServiceLbconfigsLbconfigsToTerraform, true)(this._lbconfigs.internalValue),
      timeouts: duploServiceLbconfigsTimeoutsToTerraform(this._timeouts.internalValue),
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
      replication_controller_name: {
        value: cdktf.stringToHclTerraform(this._replicationControllerName),
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
      wait_until_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lbconfigs: {
        value: cdktf.listMapperHcl(duploServiceLbconfigsLbconfigsToHclTerraform, true)(this._lbconfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DuploServiceLbconfigsLbconfigsList",
      },
      timeouts: {
        value: duploServiceLbconfigsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DuploServiceLbconfigsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
