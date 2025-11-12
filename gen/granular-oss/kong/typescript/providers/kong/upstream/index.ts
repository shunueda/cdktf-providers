// https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpstreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#client_certificate_id Upstream#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#hash_fallback Upstream#hash_fallback}
  */
  readonly hashFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#hash_fallback_header Upstream#hash_fallback_header}
  */
  readonly hashFallbackHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#hash_on Upstream#hash_on}
  */
  readonly hashOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#hash_on_cookie Upstream#hash_on_cookie}
  */
  readonly hashOnCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#hash_on_cookie_path Upstream#hash_on_cookie_path}
  */
  readonly hashOnCookiePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#hash_on_header Upstream#hash_on_header}
  */
  readonly hashOnHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#healthchecks Upstream#healthchecks}
  */
  readonly healthchecks?: UpstreamHealthchecks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#host_header Upstream#host_header}
  */
  readonly hostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#name Upstream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#slots Upstream#slots}
  */
  readonly slots?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#tags Upstream#tags}
  */
  readonly tags?: string[];
}
export interface UpstreamHealthchecksActiveHealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#http_statuses Upstream#http_statuses}
  */
  readonly httpStatuses?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#interval Upstream#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#successes Upstream#successes}
  */
  readonly successes?: number;
}

export function upstreamHealthchecksActiveHealthyToTerraform(struct?: UpstreamHealthchecksActiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpStatuses),
    interval: cdktf.numberToTerraform(struct!.interval),
    successes: cdktf.numberToTerraform(struct!.successes),
  }
}


export function upstreamHealthchecksActiveHealthyToHclTerraform(struct?: UpstreamHealthchecksActiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    successes: {
      value: cdktf.numberToHclTerraform(struct!.successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpstreamHealthchecksActiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpstreamHealthchecksActiveHealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successes = this._successes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpstreamHealthchecksActiveHealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpStatuses = undefined;
      this._interval = undefined;
      this._successes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpStatuses = value.httpStatuses;
      this._interval = value.interval;
      this._successes = value.successes;
    }
  }

  // http_statuses - computed: true, optional: true, required: false
  private _httpStatuses?: number[]; 
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }
  public set httpStatuses(value: number[]) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // interval - computed: true, optional: true, required: false
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

  // successes - computed: true, optional: true, required: false
  private _successes?: number; 
  public get successes() {
    return this.getNumberAttribute('successes');
  }
  public set successes(value: number) {
    this._successes = value;
  }
  public resetSuccesses() {
    this._successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successesInput() {
    return this._successes;
  }
}
export interface UpstreamHealthchecksActiveUnhealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#http_failures Upstream#http_failures}
  */
  readonly httpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#http_statuses Upstream#http_statuses}
  */
  readonly httpStatuses?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#interval Upstream#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#tcp_failures Upstream#tcp_failures}
  */
  readonly tcpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#timeouts Upstream#timeouts}
  */
  readonly timeouts?: number;
}

export function upstreamHealthchecksActiveUnhealthyToTerraform(struct?: UpstreamHealthchecksActiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_failures: cdktf.numberToTerraform(struct!.httpFailures),
    http_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpStatuses),
    interval: cdktf.numberToTerraform(struct!.interval),
    tcp_failures: cdktf.numberToTerraform(struct!.tcpFailures),
    timeouts: cdktf.numberToTerraform(struct!.timeouts),
  }
}


export function upstreamHealthchecksActiveUnhealthyToHclTerraform(struct?: UpstreamHealthchecksActiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_failures: {
      value: cdktf.numberToHclTerraform(struct!.httpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_failures: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeouts: {
      value: cdktf.numberToHclTerraform(struct!.timeouts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpstreamHealthchecksActiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpstreamHealthchecksActiveUnhealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailures = this._httpFailures;
    }
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._tcpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailures = this._tcpFailures;
    }
    if (this._timeouts !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpstreamHealthchecksActiveUnhealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFailures = undefined;
      this._httpStatuses = undefined;
      this._interval = undefined;
      this._tcpFailures = undefined;
      this._timeouts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFailures = value.httpFailures;
      this._httpStatuses = value.httpStatuses;
      this._interval = value.interval;
      this._tcpFailures = value.tcpFailures;
      this._timeouts = value.timeouts;
    }
  }

  // http_failures - computed: true, optional: true, required: false
  private _httpFailures?: number; 
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }
  public set httpFailures(value: number) {
    this._httpFailures = value;
  }
  public resetHttpFailures() {
    this._httpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailuresInput() {
    return this._httpFailures;
  }

  // http_statuses - computed: true, optional: true, required: false
  private _httpStatuses?: number[]; 
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }
  public set httpStatuses(value: number[]) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // interval - computed: true, optional: true, required: false
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

  // tcp_failures - computed: true, optional: true, required: false
  private _tcpFailures?: number; 
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }
  public set tcpFailures(value: number) {
    this._tcpFailures = value;
  }
  public resetTcpFailures() {
    this._tcpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailuresInput() {
    return this._tcpFailures;
  }

  // timeouts - computed: true, optional: true, required: false
  private _timeouts?: number; 
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
  public set timeouts(value: number) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
  }
}
export interface UpstreamHealthchecksActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#concurrency Upstream#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#healthy Upstream#healthy}
  */
  readonly healthy?: UpstreamHealthchecksActiveHealthy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#http_path Upstream#http_path}
  */
  readonly httpPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#https_sni Upstream#https_sni}
  */
  readonly httpsSni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#https_verify_certificate Upstream#https_verify_certificate}
  */
  readonly httpsVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#timeout Upstream#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#type Upstream#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#unhealthy Upstream#unhealthy}
  */
  readonly unhealthy?: UpstreamHealthchecksActiveUnhealthy;
}

export function upstreamHealthchecksActiveToTerraform(struct?: UpstreamHealthchecksActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    healthy: upstreamHealthchecksActiveHealthyToTerraform(struct!.healthy),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
    https_sni: cdktf.stringToTerraform(struct!.httpsSni),
    https_verify_certificate: cdktf.booleanToTerraform(struct!.httpsVerifyCertificate),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    unhealthy: upstreamHealthchecksActiveUnhealthyToTerraform(struct!.unhealthy),
  }
}


export function upstreamHealthchecksActiveToHclTerraform(struct?: UpstreamHealthchecksActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy: {
      value: upstreamHealthchecksActiveHealthyToHclTerraform(struct!.healthy),
      isBlock: true,
      type: "struct",
      storageClassType: "UpstreamHealthchecksActiveHealthy",
    },
    http_path: {
      value: cdktf.stringToHclTerraform(struct!.httpPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_sni: {
      value: cdktf.stringToHclTerraform(struct!.httpsSni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.httpsVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    unhealthy: {
      value: upstreamHealthchecksActiveUnhealthyToHclTerraform(struct!.unhealthy),
      isBlock: true,
      type: "struct",
      storageClassType: "UpstreamHealthchecksActiveUnhealthy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpstreamHealthchecksActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpstreamHealthchecksActive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._healthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy?.internalValue;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    if (this._httpsSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsSni = this._httpsSni;
    }
    if (this._httpsVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsVerifyCertificate = this._httpsVerifyCertificate;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unhealthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpstreamHealthchecksActive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._healthy.internalValue = undefined;
      this._httpPath = undefined;
      this._httpsSni = undefined;
      this._httpsVerifyCertificate = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._unhealthy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._healthy.internalValue = value.healthy;
      this._httpPath = value.httpPath;
      this._httpsSni = value.httpsSni;
      this._httpsVerifyCertificate = value.httpsVerifyCertificate;
      this._timeout = value.timeout;
      this._type = value.type;
      this._unhealthy.internalValue = value.unhealthy;
    }
  }

  // concurrency - computed: true, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // healthy - computed: true, optional: true, required: false
  private _healthy = new UpstreamHealthchecksActiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }
  public putHealthy(value: UpstreamHealthchecksActiveHealthy) {
    this._healthy.internalValue = value;
  }
  public resetHealthy() {
    this._healthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy.internalValue;
  }

  // http_path - computed: true, optional: true, required: false
  private _httpPath?: string; 
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
  public set httpPath(value: string) {
    this._httpPath = value;
  }
  public resetHttpPath() {
    this._httpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPathInput() {
    return this._httpPath;
  }

  // https_sni - computed: true, optional: true, required: false
  private _httpsSni?: string; 
  public get httpsSni() {
    return this.getStringAttribute('https_sni');
  }
  public set httpsSni(value: string) {
    this._httpsSni = value;
  }
  public resetHttpsSni() {
    this._httpsSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsSniInput() {
    return this._httpsSni;
  }

  // https_verify_certificate - computed: true, optional: true, required: false
  private _httpsVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get httpsVerifyCertificate() {
    return this.getBooleanAttribute('https_verify_certificate');
  }
  public set httpsVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._httpsVerifyCertificate = value;
  }
  public resetHttpsVerifyCertificate() {
    this._httpsVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsVerifyCertificateInput() {
    return this._httpsVerifyCertificate;
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

  // type - computed: true, optional: true, required: false
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

  // unhealthy - computed: true, optional: true, required: false
  private _unhealthy = new UpstreamHealthchecksActiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
  public putUnhealthy(value: UpstreamHealthchecksActiveUnhealthy) {
    this._unhealthy.internalValue = value;
  }
  public resetUnhealthy() {
    this._unhealthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy.internalValue;
  }
}
export interface UpstreamHealthchecksPassiveHealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#http_statuses Upstream#http_statuses}
  */
  readonly httpStatuses?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#successes Upstream#successes}
  */
  readonly successes?: number;
}

export function upstreamHealthchecksPassiveHealthyToTerraform(struct?: UpstreamHealthchecksPassiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpStatuses),
    successes: cdktf.numberToTerraform(struct!.successes),
  }
}


export function upstreamHealthchecksPassiveHealthyToHclTerraform(struct?: UpstreamHealthchecksPassiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    successes: {
      value: cdktf.numberToHclTerraform(struct!.successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpstreamHealthchecksPassiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpstreamHealthchecksPassiveHealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successes = this._successes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpstreamHealthchecksPassiveHealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpStatuses = undefined;
      this._successes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpStatuses = value.httpStatuses;
      this._successes = value.successes;
    }
  }

  // http_statuses - computed: true, optional: true, required: false
  private _httpStatuses?: number[]; 
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }
  public set httpStatuses(value: number[]) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // successes - computed: true, optional: true, required: false
  private _successes?: number; 
  public get successes() {
    return this.getNumberAttribute('successes');
  }
  public set successes(value: number) {
    this._successes = value;
  }
  public resetSuccesses() {
    this._successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successesInput() {
    return this._successes;
  }
}
export interface UpstreamHealthchecksPassiveUnhealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#http_failures Upstream#http_failures}
  */
  readonly httpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#http_statuses Upstream#http_statuses}
  */
  readonly httpStatuses?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#tcp_failures Upstream#tcp_failures}
  */
  readonly tcpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#timeouts Upstream#timeouts}
  */
  readonly timeouts?: number;
}

export function upstreamHealthchecksPassiveUnhealthyToTerraform(struct?: UpstreamHealthchecksPassiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_failures: cdktf.numberToTerraform(struct!.httpFailures),
    http_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpStatuses),
    tcp_failures: cdktf.numberToTerraform(struct!.tcpFailures),
    timeouts: cdktf.numberToTerraform(struct!.timeouts),
  }
}


export function upstreamHealthchecksPassiveUnhealthyToHclTerraform(struct?: UpstreamHealthchecksPassiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_failures: {
      value: cdktf.numberToHclTerraform(struct!.httpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    tcp_failures: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeouts: {
      value: cdktf.numberToHclTerraform(struct!.timeouts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpstreamHealthchecksPassiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpstreamHealthchecksPassiveUnhealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailures = this._httpFailures;
    }
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._tcpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailures = this._tcpFailures;
    }
    if (this._timeouts !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpstreamHealthchecksPassiveUnhealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpFailures = undefined;
      this._httpStatuses = undefined;
      this._tcpFailures = undefined;
      this._timeouts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpFailures = value.httpFailures;
      this._httpStatuses = value.httpStatuses;
      this._tcpFailures = value.tcpFailures;
      this._timeouts = value.timeouts;
    }
  }

  // http_failures - computed: true, optional: true, required: false
  private _httpFailures?: number; 
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }
  public set httpFailures(value: number) {
    this._httpFailures = value;
  }
  public resetHttpFailures() {
    this._httpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailuresInput() {
    return this._httpFailures;
  }

  // http_statuses - computed: true, optional: true, required: false
  private _httpStatuses?: number[]; 
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }
  public set httpStatuses(value: number[]) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // tcp_failures - computed: true, optional: true, required: false
  private _tcpFailures?: number; 
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }
  public set tcpFailures(value: number) {
    this._tcpFailures = value;
  }
  public resetTcpFailures() {
    this._tcpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailuresInput() {
    return this._tcpFailures;
  }

  // timeouts - computed: true, optional: true, required: false
  private _timeouts?: number; 
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
  public set timeouts(value: number) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
  }
}
export interface UpstreamHealthchecksPassive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#healthy Upstream#healthy}
  */
  readonly healthy?: UpstreamHealthchecksPassiveHealthy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#type Upstream#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#unhealthy Upstream#unhealthy}
  */
  readonly unhealthy?: UpstreamHealthchecksPassiveUnhealthy;
}

export function upstreamHealthchecksPassiveToTerraform(struct?: UpstreamHealthchecksPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy: upstreamHealthchecksPassiveHealthyToTerraform(struct!.healthy),
    type: cdktf.stringToTerraform(struct!.type),
    unhealthy: upstreamHealthchecksPassiveUnhealthyToTerraform(struct!.unhealthy),
  }
}


export function upstreamHealthchecksPassiveToHclTerraform(struct?: UpstreamHealthchecksPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy: {
      value: upstreamHealthchecksPassiveHealthyToHclTerraform(struct!.healthy),
      isBlock: true,
      type: "struct",
      storageClassType: "UpstreamHealthchecksPassiveHealthy",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy: {
      value: upstreamHealthchecksPassiveUnhealthyToHclTerraform(struct!.unhealthy),
      isBlock: true,
      type: "struct",
      storageClassType: "UpstreamHealthchecksPassiveUnhealthy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpstreamHealthchecksPassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpstreamHealthchecksPassive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unhealthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpstreamHealthchecksPassive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthy.internalValue = undefined;
      this._type = undefined;
      this._unhealthy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthy.internalValue = value.healthy;
      this._type = value.type;
      this._unhealthy.internalValue = value.unhealthy;
    }
  }

  // healthy - computed: true, optional: true, required: false
  private _healthy = new UpstreamHealthchecksPassiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }
  public putHealthy(value: UpstreamHealthchecksPassiveHealthy) {
    this._healthy.internalValue = value;
  }
  public resetHealthy() {
    this._healthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy.internalValue;
  }

  // type - computed: true, optional: true, required: false
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

  // unhealthy - computed: true, optional: true, required: false
  private _unhealthy = new UpstreamHealthchecksPassiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
  public putUnhealthy(value: UpstreamHealthchecksPassiveUnhealthy) {
    this._unhealthy.internalValue = value;
  }
  public resetUnhealthy() {
    this._unhealthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy.internalValue;
  }
}
export interface UpstreamHealthchecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#active Upstream#active}
  */
  readonly active?: UpstreamHealthchecksActive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#passive Upstream#passive}
  */
  readonly passive?: UpstreamHealthchecksPassive;
}

export function upstreamHealthchecksToTerraform(struct?: UpstreamHealthchecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: upstreamHealthchecksActiveToTerraform(struct!.active),
    passive: upstreamHealthchecksPassiveToTerraform(struct!.passive),
  }
}


export function upstreamHealthchecksToHclTerraform(struct?: UpstreamHealthchecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: upstreamHealthchecksActiveToHclTerraform(struct!.active),
      isBlock: true,
      type: "struct",
      storageClassType: "UpstreamHealthchecksActive",
    },
    passive: {
      value: upstreamHealthchecksPassiveToHclTerraform(struct!.passive),
      isBlock: true,
      type: "struct",
      storageClassType: "UpstreamHealthchecksPassive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpstreamHealthchecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpstreamHealthchecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active?.internalValue;
    }
    if (this._passive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpstreamHealthchecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active.internalValue = undefined;
      this._passive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active.internalValue = value.active;
      this._passive.internalValue = value.passive;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active = new UpstreamHealthchecksActiveOutputReference(this, "active");
  public get active() {
    return this._active;
  }
  public putActive(value: UpstreamHealthchecksActive) {
    this._active.internalValue = value;
  }
  public resetActive() {
    this._active.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active.internalValue;
  }

  // passive - computed: true, optional: true, required: false
  private _passive = new UpstreamHealthchecksPassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }
  public putPassive(value: UpstreamHealthchecksPassive) {
    this._passive.internalValue = value;
  }
  public resetPassive() {
    this._passive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream kong_upstream}
*/
export class Upstream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong_upstream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Upstream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Upstream to import
  * @param importFromId The id of the existing Upstream that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Upstream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong_upstream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/upstream kong_upstream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpstreamConfig
  */
  public constructor(scope: Construct, id: string, config: UpstreamConfig) {
    super(scope, id, {
      terraformResourceType: 'kong_upstream',
      terraformGeneratorMetadata: {
        providerName: 'kong',
        providerVersion: '8.1.0',
        providerVersionConstraint: '8.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientCertificateId = config.clientCertificateId;
    this._hashFallback = config.hashFallback;
    this._hashFallbackHeader = config.hashFallbackHeader;
    this._hashOn = config.hashOn;
    this._hashOnCookie = config.hashOnCookie;
    this._hashOnCookiePath = config.hashOnCookiePath;
    this._hashOnHeader = config.hashOnHeader;
    this._healthchecks.internalValue = config.healthchecks;
    this._hostHeader = config.hostHeader;
    this._name = config.name;
    this._slots = config.slots;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // hash_fallback - computed: true, optional: true, required: false
  private _hashFallback?: string; 
  public get hashFallback() {
    return this.getStringAttribute('hash_fallback');
  }
  public set hashFallback(value: string) {
    this._hashFallback = value;
  }
  public resetHashFallback() {
    this._hashFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFallbackInput() {
    return this._hashFallback;
  }

  // hash_fallback_header - computed: false, optional: true, required: false
  private _hashFallbackHeader?: string; 
  public get hashFallbackHeader() {
    return this.getStringAttribute('hash_fallback_header');
  }
  public set hashFallbackHeader(value: string) {
    this._hashFallbackHeader = value;
  }
  public resetHashFallbackHeader() {
    this._hashFallbackHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFallbackHeaderInput() {
    return this._hashFallbackHeader;
  }

  // hash_on - computed: true, optional: true, required: false
  private _hashOn?: string; 
  public get hashOn() {
    return this.getStringAttribute('hash_on');
  }
  public set hashOn(value: string) {
    this._hashOn = value;
  }
  public resetHashOn() {
    this._hashOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnInput() {
    return this._hashOn;
  }

  // hash_on_cookie - computed: false, optional: true, required: false
  private _hashOnCookie?: string; 
  public get hashOnCookie() {
    return this.getStringAttribute('hash_on_cookie');
  }
  public set hashOnCookie(value: string) {
    this._hashOnCookie = value;
  }
  public resetHashOnCookie() {
    this._hashOnCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnCookieInput() {
    return this._hashOnCookie;
  }

  // hash_on_cookie_path - computed: true, optional: true, required: false
  private _hashOnCookiePath?: string; 
  public get hashOnCookiePath() {
    return this.getStringAttribute('hash_on_cookie_path');
  }
  public set hashOnCookiePath(value: string) {
    this._hashOnCookiePath = value;
  }
  public resetHashOnCookiePath() {
    this._hashOnCookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnCookiePathInput() {
    return this._hashOnCookiePath;
  }

  // hash_on_header - computed: false, optional: true, required: false
  private _hashOnHeader?: string; 
  public get hashOnHeader() {
    return this.getStringAttribute('hash_on_header');
  }
  public set hashOnHeader(value: string) {
    this._hashOnHeader = value;
  }
  public resetHashOnHeader() {
    this._hashOnHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnHeaderInput() {
    return this._hashOnHeader;
  }

  // healthchecks - computed: true, optional: true, required: false
  private _healthchecks = new UpstreamHealthchecksOutputReference(this, "healthchecks");
  public get healthchecks() {
    return this._healthchecks;
  }
  public putHealthchecks(value: UpstreamHealthchecks) {
    this._healthchecks.internalValue = value;
  }
  public resetHealthchecks() {
    this._healthchecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthchecksInput() {
    return this._healthchecks.internalValue;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // slots - computed: true, optional: true, required: false
  private _slots?: number; 
  public get slots() {
    return this.getNumberAttribute('slots');
  }
  public set slots(value: number) {
    this._slots = value;
  }
  public resetSlots() {
    this._slots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotsInput() {
    return this._slots;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
      hash_fallback: cdktf.stringToTerraform(this._hashFallback),
      hash_fallback_header: cdktf.stringToTerraform(this._hashFallbackHeader),
      hash_on: cdktf.stringToTerraform(this._hashOn),
      hash_on_cookie: cdktf.stringToTerraform(this._hashOnCookie),
      hash_on_cookie_path: cdktf.stringToTerraform(this._hashOnCookiePath),
      hash_on_header: cdktf.stringToTerraform(this._hashOnHeader),
      healthchecks: upstreamHealthchecksToTerraform(this._healthchecks.internalValue),
      host_header: cdktf.stringToTerraform(this._hostHeader),
      name: cdktf.stringToTerraform(this._name),
      slots: cdktf.numberToTerraform(this._slots),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_certificate_id: {
        value: cdktf.stringToHclTerraform(this._clientCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_fallback: {
        value: cdktf.stringToHclTerraform(this._hashFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_fallback_header: {
        value: cdktf.stringToHclTerraform(this._hashFallbackHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on: {
        value: cdktf.stringToHclTerraform(this._hashOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on_cookie: {
        value: cdktf.stringToHclTerraform(this._hashOnCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on_cookie_path: {
        value: cdktf.stringToHclTerraform(this._hashOnCookiePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_on_header: {
        value: cdktf.stringToHclTerraform(this._hashOnHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthchecks: {
        value: upstreamHealthchecksToHclTerraform(this._healthchecks.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UpstreamHealthchecks",
      },
      host_header: {
        value: cdktf.stringToHclTerraform(this._hostHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slots: {
        value: cdktf.numberToHclTerraform(this._slots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
