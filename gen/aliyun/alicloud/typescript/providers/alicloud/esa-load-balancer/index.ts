// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#default_pools EsaLoadBalancer#default_pools}
  */
  readonly defaultPools: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#description EsaLoadBalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#enabled EsaLoadBalancer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#fallback_pool EsaLoadBalancer#fallback_pool}
  */
  readonly fallbackPool: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#id EsaLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#load_balancer_name EsaLoadBalancer#load_balancer_name}
  */
  readonly loadBalancerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#region_pools EsaLoadBalancer#region_pools}
  */
  readonly regionPools?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#session_affinity EsaLoadBalancer#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#site_id EsaLoadBalancer#site_id}
  */
  readonly siteId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#steering_policy EsaLoadBalancer#steering_policy}
  */
  readonly steeringPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#sub_region_pools EsaLoadBalancer#sub_region_pools}
  */
  readonly subRegionPools?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#ttl EsaLoadBalancer#ttl}
  */
  readonly ttl?: number;
  /**
  * adaptive_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#adaptive_routing EsaLoadBalancer#adaptive_routing}
  */
  readonly adaptiveRouting?: EsaLoadBalancerAdaptiveRouting;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#monitor EsaLoadBalancer#monitor}
  */
  readonly monitor: EsaLoadBalancerMonitor;
  /**
  * random_steering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#random_steering EsaLoadBalancer#random_steering}
  */
  readonly randomSteering?: EsaLoadBalancerRandomSteering;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#rules EsaLoadBalancer#rules}
  */
  readonly rules?: EsaLoadBalancerRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#timeouts EsaLoadBalancer#timeouts}
  */
  readonly timeouts?: EsaLoadBalancerTimeouts;
}
export interface EsaLoadBalancerAdaptiveRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#failover_across_pools EsaLoadBalancer#failover_across_pools}
  */
  readonly failoverAcrossPools?: boolean | cdktf.IResolvable;
}

export function esaLoadBalancerAdaptiveRoutingToTerraform(struct?: EsaLoadBalancerAdaptiveRoutingOutputReference | EsaLoadBalancerAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_across_pools: cdktf.booleanToTerraform(struct!.failoverAcrossPools),
  }
}


export function esaLoadBalancerAdaptiveRoutingToHclTerraform(struct?: EsaLoadBalancerAdaptiveRoutingOutputReference | EsaLoadBalancerAdaptiveRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_across_pools: {
      value: cdktf.booleanToHclTerraform(struct!.failoverAcrossPools),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaLoadBalancerAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaLoadBalancerAdaptiveRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverAcrossPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverAcrossPools = this._failoverAcrossPools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaLoadBalancerAdaptiveRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failoverAcrossPools = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failoverAcrossPools = value.failoverAcrossPools;
    }
  }

  // failover_across_pools - computed: false, optional: true, required: false
  private _failoverAcrossPools?: boolean | cdktf.IResolvable; 
  public get failoverAcrossPools() {
    return this.getBooleanAttribute('failover_across_pools');
  }
  public set failoverAcrossPools(value: boolean | cdktf.IResolvable) {
    this._failoverAcrossPools = value;
  }
  public resetFailoverAcrossPools() {
    this._failoverAcrossPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAcrossPoolsInput() {
    return this._failoverAcrossPools;
  }
}
export interface EsaLoadBalancerMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#consecutive_down EsaLoadBalancer#consecutive_down}
  */
  readonly consecutiveDown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#consecutive_up EsaLoadBalancer#consecutive_up}
  */
  readonly consecutiveUp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#expected_codes EsaLoadBalancer#expected_codes}
  */
  readonly expectedCodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#follow_redirects EsaLoadBalancer#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#header EsaLoadBalancer#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#interval EsaLoadBalancer#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#method EsaLoadBalancer#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#monitoring_region EsaLoadBalancer#monitoring_region}
  */
  readonly monitoringRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#path EsaLoadBalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#port EsaLoadBalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#timeout EsaLoadBalancer#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#type EsaLoadBalancer#type}
  */
  readonly type?: string;
}

export function esaLoadBalancerMonitorToTerraform(struct?: EsaLoadBalancerMonitorOutputReference | EsaLoadBalancerMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_down: cdktf.numberToTerraform(struct!.consecutiveDown),
    consecutive_up: cdktf.numberToTerraform(struct!.consecutiveUp),
    expected_codes: cdktf.stringToTerraform(struct!.expectedCodes),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    header: cdktf.stringToTerraform(struct!.header),
    interval: cdktf.numberToTerraform(struct!.interval),
    method: cdktf.stringToTerraform(struct!.method),
    monitoring_region: cdktf.stringToTerraform(struct!.monitoringRegion),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function esaLoadBalancerMonitorToHclTerraform(struct?: EsaLoadBalancerMonitorOutputReference | EsaLoadBalancerMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_down: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_up: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expected_codes: {
      value: cdktf.stringToHclTerraform(struct!.expectedCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
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
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_region: {
      value: cdktf.stringToHclTerraform(struct!.monitoringRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class EsaLoadBalancerMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaLoadBalancerMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveDown = this._consecutiveDown;
    }
    if (this._consecutiveUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveUp = this._consecutiveUp;
    }
    if (this._expectedCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedCodes = this._expectedCodes;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._monitoringRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegion = this._monitoringRegion;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaLoadBalancerMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consecutiveDown = undefined;
      this._consecutiveUp = undefined;
      this._expectedCodes = undefined;
      this._followRedirects = undefined;
      this._header = undefined;
      this._interval = undefined;
      this._method = undefined;
      this._monitoringRegion = undefined;
      this._path = undefined;
      this._port = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consecutiveDown = value.consecutiveDown;
      this._consecutiveUp = value.consecutiveUp;
      this._expectedCodes = value.expectedCodes;
      this._followRedirects = value.followRedirects;
      this._header = value.header;
      this._interval = value.interval;
      this._method = value.method;
      this._monitoringRegion = value.monitoringRegion;
      this._path = value.path;
      this._port = value.port;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // consecutive_down - computed: false, optional: true, required: false
  private _consecutiveDown?: number; 
  public get consecutiveDown() {
    return this.getNumberAttribute('consecutive_down');
  }
  public set consecutiveDown(value: number) {
    this._consecutiveDown = value;
  }
  public resetConsecutiveDown() {
    this._consecutiveDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveDownInput() {
    return this._consecutiveDown;
  }

  // consecutive_up - computed: false, optional: true, required: false
  private _consecutiveUp?: number; 
  public get consecutiveUp() {
    return this.getNumberAttribute('consecutive_up');
  }
  public set consecutiveUp(value: number) {
    this._consecutiveUp = value;
  }
  public resetConsecutiveUp() {
    this._consecutiveUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveUpInput() {
    return this._consecutiveUp;
  }

  // expected_codes - computed: false, optional: true, required: false
  private _expectedCodes?: string; 
  public get expectedCodes() {
    return this.getStringAttribute('expected_codes');
  }
  public set expectedCodes(value: string) {
    this._expectedCodes = value;
  }
  public resetExpectedCodes() {
    this._expectedCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedCodesInput() {
    return this._expectedCodes;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // monitoring_region - computed: true, optional: true, required: false
  private _monitoringRegion?: string; 
  public get monitoringRegion() {
    return this.getStringAttribute('monitoring_region');
  }
  public set monitoringRegion(value: string) {
    this._monitoringRegion = value;
  }
  public resetMonitoringRegion() {
    this._monitoringRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionInput() {
    return this._monitoringRegion;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // timeout - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EsaLoadBalancerRandomSteering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#default_weight EsaLoadBalancer#default_weight}
  */
  readonly defaultWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#pool_weights EsaLoadBalancer#pool_weights}
  */
  readonly poolWeights?: { [key: string]: string };
}

export function esaLoadBalancerRandomSteeringToTerraform(struct?: EsaLoadBalancerRandomSteeringOutputReference | EsaLoadBalancerRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_weight: cdktf.numberToTerraform(struct!.defaultWeight),
    pool_weights: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.poolWeights),
  }
}


export function esaLoadBalancerRandomSteeringToHclTerraform(struct?: EsaLoadBalancerRandomSteeringOutputReference | EsaLoadBalancerRandomSteering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_weight: {
      value: cdktf.numberToHclTerraform(struct!.defaultWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_weights: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.poolWeights),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaLoadBalancerRandomSteeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaLoadBalancerRandomSteering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultWeight = this._defaultWeight;
    }
    if (this._poolWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolWeights = this._poolWeights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaLoadBalancerRandomSteering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultWeight = undefined;
      this._poolWeights = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultWeight = value.defaultWeight;
      this._poolWeights = value.poolWeights;
    }
  }

  // default_weight - computed: false, optional: true, required: false
  private _defaultWeight?: number; 
  public get defaultWeight() {
    return this.getNumberAttribute('default_weight');
  }
  public set defaultWeight(value: number) {
    this._defaultWeight = value;
  }
  public resetDefaultWeight() {
    this._defaultWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWeightInput() {
    return this._defaultWeight;
  }

  // pool_weights - computed: false, optional: true, required: false
  private _poolWeights?: { [key: string]: string }; 
  public get poolWeights() {
    return this.getStringMapAttribute('pool_weights');
  }
  public set poolWeights(value: { [key: string]: string }) {
    this._poolWeights = value;
  }
  public resetPoolWeights() {
    this._poolWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolWeightsInput() {
    return this._poolWeights;
  }
}
export interface EsaLoadBalancerRulesFixedResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#content_type EsaLoadBalancer#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#location EsaLoadBalancer#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#message_body EsaLoadBalancer#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#status_code EsaLoadBalancer#status_code}
  */
  readonly statusCode?: number;
}

export function esaLoadBalancerRulesFixedResponseToTerraform(struct?: EsaLoadBalancerRulesFixedResponseOutputReference | EsaLoadBalancerRulesFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    location: cdktf.stringToTerraform(struct!.location),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function esaLoadBalancerRulesFixedResponseToHclTerraform(struct?: EsaLoadBalancerRulesFixedResponseOutputReference | EsaLoadBalancerRulesFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_body: {
      value: cdktf.stringToHclTerraform(struct!.messageBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaLoadBalancerRulesFixedResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaLoadBalancerRulesFixedResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaLoadBalancerRulesFixedResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._location = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._location = value.location;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // message_body - computed: false, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface EsaLoadBalancerRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#overrides EsaLoadBalancer#overrides}
  */
  readonly overrides?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#rule EsaLoadBalancer#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#rule_enable EsaLoadBalancer#rule_enable}
  */
  readonly ruleEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#rule_name EsaLoadBalancer#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#sequence EsaLoadBalancer#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#terminates EsaLoadBalancer#terminates}
  */
  readonly terminates?: boolean | cdktf.IResolvable;
  /**
  * fixed_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#fixed_response EsaLoadBalancer#fixed_response}
  */
  readonly fixedResponse?: EsaLoadBalancerRulesFixedResponse;
}

export function esaLoadBalancerRulesToTerraform(struct?: EsaLoadBalancerRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overrides: cdktf.stringToTerraform(struct!.overrides),
    rule: cdktf.stringToTerraform(struct!.rule),
    rule_enable: cdktf.stringToTerraform(struct!.ruleEnable),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    sequence: cdktf.numberToTerraform(struct!.sequence),
    terminates: cdktf.booleanToTerraform(struct!.terminates),
    fixed_response: esaLoadBalancerRulesFixedResponseToTerraform(struct!.fixedResponse),
  }
}


export function esaLoadBalancerRulesToHclTerraform(struct?: EsaLoadBalancerRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overrides: {
      value: cdktf.stringToHclTerraform(struct!.overrides),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_enable: {
      value: cdktf.stringToHclTerraform(struct!.ruleEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence: {
      value: cdktf.numberToHclTerraform(struct!.sequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    terminates: {
      value: cdktf.booleanToHclTerraform(struct!.terminates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_response: {
      value: esaLoadBalancerRulesFixedResponseToHclTerraform(struct!.fixedResponse),
      isBlock: true,
      type: "list",
      storageClassType: "EsaLoadBalancerRulesFixedResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaLoadBalancerRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaLoadBalancerRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ruleEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEnable = this._ruleEnable;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._sequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequence = this._sequence;
    }
    if (this._terminates !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminates = this._terminates;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaLoadBalancerRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrides = undefined;
      this._rule = undefined;
      this._ruleEnable = undefined;
      this._ruleName = undefined;
      this._sequence = undefined;
      this._terminates = undefined;
      this._fixedResponse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrides = value.overrides;
      this._rule = value.rule;
      this._ruleEnable = value.ruleEnable;
      this._ruleName = value.ruleName;
      this._sequence = value.sequence;
      this._terminates = value.terminates;
      this._fixedResponse.internalValue = value.fixedResponse;
    }
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides?: string; 
  public get overrides() {
    return this.getStringAttribute('overrides');
  }
  public set overrides(value: string) {
    this._overrides = value;
  }
  public resetOverrides() {
    this._overrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_enable - computed: false, optional: true, required: false
  private _ruleEnable?: string; 
  public get ruleEnable() {
    return this.getStringAttribute('rule_enable');
  }
  public set ruleEnable(value: string) {
    this._ruleEnable = value;
  }
  public resetRuleEnable() {
    this._ruleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEnableInput() {
    return this._ruleEnable;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // sequence - computed: false, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // terminates - computed: false, optional: true, required: false
  private _terminates?: boolean | cdktf.IResolvable; 
  public get terminates() {
    return this.getBooleanAttribute('terminates');
  }
  public set terminates(value: boolean | cdktf.IResolvable) {
    this._terminates = value;
  }
  public resetTerminates() {
    this._terminates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatesInput() {
    return this._terminates;
  }

  // fixed_response - computed: false, optional: true, required: false
  private _fixedResponse = new EsaLoadBalancerRulesFixedResponseOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: EsaLoadBalancerRulesFixedResponse) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }
}

export class EsaLoadBalancerRulesList extends cdktf.ComplexList {
  public internalValue? : EsaLoadBalancerRules[] | cdktf.IResolvable

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
  public get(index: number): EsaLoadBalancerRulesOutputReference {
    return new EsaLoadBalancerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaLoadBalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#create EsaLoadBalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#delete EsaLoadBalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#update EsaLoadBalancer#update}
  */
  readonly update?: string;
}

export function esaLoadBalancerTimeoutsToTerraform(struct?: EsaLoadBalancerTimeouts | cdktf.IResolvable): any {
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


export function esaLoadBalancerTimeoutsToHclTerraform(struct?: EsaLoadBalancerTimeouts | cdktf.IResolvable): any {
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

export class EsaLoadBalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaLoadBalancerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaLoadBalancerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer alicloud_esa_load_balancer}
*/
export class EsaLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaLoadBalancer to import
  * @param importFromId The id of the existing EsaLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_load_balancer alicloud_esa_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: EsaLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultPools = config.defaultPools;
    this._description = config.description;
    this._enabled = config.enabled;
    this._fallbackPool = config.fallbackPool;
    this._id = config.id;
    this._loadBalancerName = config.loadBalancerName;
    this._regionPools = config.regionPools;
    this._sessionAffinity = config.sessionAffinity;
    this._siteId = config.siteId;
    this._steeringPolicy = config.steeringPolicy;
    this._subRegionPools = config.subRegionPools;
    this._ttl = config.ttl;
    this._adaptiveRouting.internalValue = config.adaptiveRouting;
    this._monitor.internalValue = config.monitor;
    this._randomSteering.internalValue = config.randomSteering;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_pools - computed: false, optional: false, required: true
  private _defaultPools?: number[]; 
  public get defaultPools() {
    return this.getNumberListAttribute('default_pools');
  }
  public set defaultPools(value: number[]) {
    this._defaultPools = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolsInput() {
    return this._defaultPools;
  }

  // description - computed: false, optional: true, required: false
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

  // enabled - computed: false, optional: true, required: false
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

  // fallback_pool - computed: false, optional: false, required: true
  private _fallbackPool?: number; 
  public get fallbackPool() {
    return this.getNumberAttribute('fallback_pool');
  }
  public set fallbackPool(value: number) {
    this._fallbackPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPoolInput() {
    return this._fallbackPool;
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

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getNumberAttribute('load_balancer_id');
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // region_pools - computed: false, optional: true, required: false
  private _regionPools?: string; 
  public get regionPools() {
    return this.getStringAttribute('region_pools');
  }
  public set regionPools(value: string) {
    this._regionPools = value;
  }
  public resetRegionPools() {
    this._regionPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPoolsInput() {
    return this._regionPools;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // steering_policy - computed: false, optional: false, required: true
  private _steeringPolicy?: string; 
  public get steeringPolicy() {
    return this.getStringAttribute('steering_policy');
  }
  public set steeringPolicy(value: string) {
    this._steeringPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get steeringPolicyInput() {
    return this._steeringPolicy;
  }

  // sub_region_pools - computed: false, optional: true, required: false
  private _subRegionPools?: string; 
  public get subRegionPools() {
    return this.getStringAttribute('sub_region_pools');
  }
  public set subRegionPools(value: string) {
    this._subRegionPools = value;
  }
  public resetSubRegionPools() {
    this._subRegionPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subRegionPoolsInput() {
    return this._subRegionPools;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // adaptive_routing - computed: false, optional: true, required: false
  private _adaptiveRouting = new EsaLoadBalancerAdaptiveRoutingOutputReference(this, "adaptive_routing");
  public get adaptiveRouting() {
    return this._adaptiveRouting;
  }
  public putAdaptiveRouting(value: EsaLoadBalancerAdaptiveRouting) {
    this._adaptiveRouting.internalValue = value;
  }
  public resetAdaptiveRouting() {
    this._adaptiveRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveRoutingInput() {
    return this._adaptiveRouting.internalValue;
  }

  // monitor - computed: false, optional: false, required: true
  private _monitor = new EsaLoadBalancerMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: EsaLoadBalancerMonitor) {
    this._monitor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // random_steering - computed: false, optional: true, required: false
  private _randomSteering = new EsaLoadBalancerRandomSteeringOutputReference(this, "random_steering");
  public get randomSteering() {
    return this._randomSteering;
  }
  public putRandomSteering(value: EsaLoadBalancerRandomSteering) {
    this._randomSteering.internalValue = value;
  }
  public resetRandomSteering() {
    this._randomSteering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSteeringInput() {
    return this._randomSteering.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new EsaLoadBalancerRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EsaLoadBalancerRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaLoadBalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaLoadBalancerTimeouts) {
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
      default_pools: cdktf.listMapper(cdktf.numberToTerraform, false)(this._defaultPools),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fallback_pool: cdktf.numberToTerraform(this._fallbackPool),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      region_pools: cdktf.stringToTerraform(this._regionPools),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      site_id: cdktf.numberToTerraform(this._siteId),
      steering_policy: cdktf.stringToTerraform(this._steeringPolicy),
      sub_region_pools: cdktf.stringToTerraform(this._subRegionPools),
      ttl: cdktf.numberToTerraform(this._ttl),
      adaptive_routing: esaLoadBalancerAdaptiveRoutingToTerraform(this._adaptiveRouting.internalValue),
      monitor: esaLoadBalancerMonitorToTerraform(this._monitor.internalValue),
      random_steering: esaLoadBalancerRandomSteeringToTerraform(this._randomSteering.internalValue),
      rules: cdktf.listMapper(esaLoadBalancerRulesToTerraform, true)(this._rules.internalValue),
      timeouts: esaLoadBalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_pools: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._defaultPools),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallback_pool: {
        value: cdktf.numberToHclTerraform(this._fallbackPool),
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
      load_balancer_name: {
        value: cdktf.stringToHclTerraform(this._loadBalancerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_pools: {
        value: cdktf.stringToHclTerraform(this._regionPools),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_affinity: {
        value: cdktf.stringToHclTerraform(this._sessionAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      steering_policy: {
        value: cdktf.stringToHclTerraform(this._steeringPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_region_pools: {
        value: cdktf.stringToHclTerraform(this._subRegionPools),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adaptive_routing: {
        value: esaLoadBalancerAdaptiveRoutingToHclTerraform(this._adaptiveRouting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaLoadBalancerAdaptiveRoutingList",
      },
      monitor: {
        value: esaLoadBalancerMonitorToHclTerraform(this._monitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaLoadBalancerMonitorList",
      },
      random_steering: {
        value: esaLoadBalancerRandomSteeringToHclTerraform(this._randomSteering.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaLoadBalancerRandomSteeringList",
      },
      rules: {
        value: cdktf.listMapperHcl(esaLoadBalancerRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaLoadBalancerRulesList",
      },
      timeouts: {
        value: esaLoadBalancerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaLoadBalancerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
