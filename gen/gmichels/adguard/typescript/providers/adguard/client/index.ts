// https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of blocked services for this client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#blocked_services Client#blocked_services}
  */
  readonly blockedServices?: string[];
  /**
  * Sets periods of inactivity for filtering blocked services. The schedule contains 7 days (Sunday to Saturday) and a time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#blocked_services_pause_schedule Client#blocked_services_pause_schedule}
  */
  readonly blockedServicesPauseSchedule?: ClientBlockedServicesPauseSchedule;
  /**
  * Whether to have filtering enabled on this client. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#filtering_enabled Client#filtering_enabled}
  */
  readonly filteringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set of identifiers for this client (IP, CIDR, MAC, or ClientID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#ids Client#ids}
  */
  readonly ids: string[];
  /**
  * Whether to write to the query log. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#ignore_querylog Client#ignore_querylog}
  */
  readonly ignoreQuerylog?: boolean | cdktf.IResolvable;
  /**
  * Whether to be included in the statistics. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#ignore_statistics Client#ignore_statistics}
  */
  readonly ignoreStatistics?: boolean | cdktf.IResolvable;
  /**
  * Name of the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#name Client#name}
  */
  readonly name: string;
  /**
  * Whether to have AdGuard parental controls enabled on this client. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#parental_enabled Client#parental_enabled}
  */
  readonly parentalEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to have AdGuard browsing security enabled on this client. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#safebrowsing_enabled Client#safebrowsing_enabled}
  */
  readonly safebrowsingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#safesearch Client#safesearch}
  */
  readonly safesearch?: ClientSafesearch;
  /**
  * Set of tags for this client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#tags Client#tags}
  */
  readonly tags?: string[];
  /**
  * List of upstream DNS server for this client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#upstreams Client#upstreams}
  */
  readonly upstreams?: string[];
  /**
  * Whether to enable DNS caching for this client's custom upstream configuration. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#upstreams_cache_enabled Client#upstreams_cache_enabled}
  */
  readonly upstreamsCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * The upstreams DNS cache size, in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#upstreams_cache_size Client#upstreams_cache_size}
  */
  readonly upstreamsCacheSize?: number;
  /**
  * Whether to use global settings for blocked services. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#use_global_blocked_services Client#use_global_blocked_services}
  */
  readonly useGlobalBlockedServices?: boolean | cdktf.IResolvable;
  /**
  * Whether to use global settings on this client. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#use_global_settings Client#use_global_settings}
  */
  readonly useGlobalSettings?: boolean | cdktf.IResolvable;
}
export interface ClientBlockedServicesPauseScheduleFri {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#end Client#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#start Client#start}
  */
  readonly start?: string;
}

export function clientBlockedServicesPauseScheduleFriToTerraform(struct?: ClientBlockedServicesPauseScheduleFri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function clientBlockedServicesPauseScheduleFriToHclTerraform(struct?: ClientBlockedServicesPauseScheduleFri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientBlockedServicesPauseScheduleFriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientBlockedServicesPauseScheduleFri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientBlockedServicesPauseScheduleFri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface ClientBlockedServicesPauseScheduleMon {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#end Client#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#start Client#start}
  */
  readonly start?: string;
}

export function clientBlockedServicesPauseScheduleMonToTerraform(struct?: ClientBlockedServicesPauseScheduleMon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function clientBlockedServicesPauseScheduleMonToHclTerraform(struct?: ClientBlockedServicesPauseScheduleMon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientBlockedServicesPauseScheduleMonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientBlockedServicesPauseScheduleMon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientBlockedServicesPauseScheduleMon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface ClientBlockedServicesPauseScheduleSat {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#end Client#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#start Client#start}
  */
  readonly start?: string;
}

export function clientBlockedServicesPauseScheduleSatToTerraform(struct?: ClientBlockedServicesPauseScheduleSat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function clientBlockedServicesPauseScheduleSatToHclTerraform(struct?: ClientBlockedServicesPauseScheduleSat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientBlockedServicesPauseScheduleSatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientBlockedServicesPauseScheduleSat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientBlockedServicesPauseScheduleSat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface ClientBlockedServicesPauseScheduleSun {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#end Client#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#start Client#start}
  */
  readonly start?: string;
}

export function clientBlockedServicesPauseScheduleSunToTerraform(struct?: ClientBlockedServicesPauseScheduleSun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function clientBlockedServicesPauseScheduleSunToHclTerraform(struct?: ClientBlockedServicesPauseScheduleSun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientBlockedServicesPauseScheduleSunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientBlockedServicesPauseScheduleSun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientBlockedServicesPauseScheduleSun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface ClientBlockedServicesPauseScheduleThu {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#end Client#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#start Client#start}
  */
  readonly start?: string;
}

export function clientBlockedServicesPauseScheduleThuToTerraform(struct?: ClientBlockedServicesPauseScheduleThu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function clientBlockedServicesPauseScheduleThuToHclTerraform(struct?: ClientBlockedServicesPauseScheduleThu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientBlockedServicesPauseScheduleThuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientBlockedServicesPauseScheduleThu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientBlockedServicesPauseScheduleThu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface ClientBlockedServicesPauseScheduleTue {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#end Client#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#start Client#start}
  */
  readonly start?: string;
}

export function clientBlockedServicesPauseScheduleTueToTerraform(struct?: ClientBlockedServicesPauseScheduleTue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function clientBlockedServicesPauseScheduleTueToHclTerraform(struct?: ClientBlockedServicesPauseScheduleTue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientBlockedServicesPauseScheduleTueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientBlockedServicesPauseScheduleTue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientBlockedServicesPauseScheduleTue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface ClientBlockedServicesPauseScheduleWed {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#end Client#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#start Client#start}
  */
  readonly start?: string;
}

export function clientBlockedServicesPauseScheduleWedToTerraform(struct?: ClientBlockedServicesPauseScheduleWed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function clientBlockedServicesPauseScheduleWedToHclTerraform(struct?: ClientBlockedServicesPauseScheduleWed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientBlockedServicesPauseScheduleWedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientBlockedServicesPauseScheduleWed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientBlockedServicesPauseScheduleWed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface ClientBlockedServicesPauseSchedule {
  /**
  * Paused service blocking interval for `Friday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#fri Client#fri}
  */
  readonly fri?: ClientBlockedServicesPauseScheduleFri;
  /**
  * Paused service blocking interval for `Monday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#mon Client#mon}
  */
  readonly mon?: ClientBlockedServicesPauseScheduleMon;
  /**
  * Paused service blocking interval for `Saturday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#sat Client#sat}
  */
  readonly sat?: ClientBlockedServicesPauseScheduleSat;
  /**
  * Paused service blocking interval for `Sunday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#sun Client#sun}
  */
  readonly sun?: ClientBlockedServicesPauseScheduleSun;
  /**
  * Paused service blocking interval for `Thursday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#thu Client#thu}
  */
  readonly thu?: ClientBlockedServicesPauseScheduleThu;
  /**
  * Time zone name according to IANA time zone database. For example `America/New_York`. `Local` represents the system's local time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#time_zone Client#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Paused service blocking interval for `Tueday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#tue Client#tue}
  */
  readonly tue?: ClientBlockedServicesPauseScheduleTue;
  /**
  * Paused service blocking interval for `Wednesday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#wed Client#wed}
  */
  readonly wed?: ClientBlockedServicesPauseScheduleWed;
}

export function clientBlockedServicesPauseScheduleToTerraform(struct?: ClientBlockedServicesPauseSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fri: clientBlockedServicesPauseScheduleFriToTerraform(struct!.fri),
    mon: clientBlockedServicesPauseScheduleMonToTerraform(struct!.mon),
    sat: clientBlockedServicesPauseScheduleSatToTerraform(struct!.sat),
    sun: clientBlockedServicesPauseScheduleSunToTerraform(struct!.sun),
    thu: clientBlockedServicesPauseScheduleThuToTerraform(struct!.thu),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    tue: clientBlockedServicesPauseScheduleTueToTerraform(struct!.tue),
    wed: clientBlockedServicesPauseScheduleWedToTerraform(struct!.wed),
  }
}


export function clientBlockedServicesPauseScheduleToHclTerraform(struct?: ClientBlockedServicesPauseSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fri: {
      value: clientBlockedServicesPauseScheduleFriToHclTerraform(struct!.fri),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientBlockedServicesPauseScheduleFri",
    },
    mon: {
      value: clientBlockedServicesPauseScheduleMonToHclTerraform(struct!.mon),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientBlockedServicesPauseScheduleMon",
    },
    sat: {
      value: clientBlockedServicesPauseScheduleSatToHclTerraform(struct!.sat),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientBlockedServicesPauseScheduleSat",
    },
    sun: {
      value: clientBlockedServicesPauseScheduleSunToHclTerraform(struct!.sun),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientBlockedServicesPauseScheduleSun",
    },
    thu: {
      value: clientBlockedServicesPauseScheduleThuToHclTerraform(struct!.thu),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientBlockedServicesPauseScheduleThu",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tue: {
      value: clientBlockedServicesPauseScheduleTueToHclTerraform(struct!.tue),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientBlockedServicesPauseScheduleTue",
    },
    wed: {
      value: clientBlockedServicesPauseScheduleWedToHclTerraform(struct!.wed),
      isBlock: true,
      type: "struct",
      storageClassType: "ClientBlockedServicesPauseScheduleWed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientBlockedServicesPauseScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientBlockedServicesPauseSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fri = this._fri?.internalValue;
    }
    if (this._mon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mon = this._mon?.internalValue;
    }
    if (this._sat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sat = this._sat?.internalValue;
    }
    if (this._sun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sun = this._sun?.internalValue;
    }
    if (this._thu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thu = this._thu?.internalValue;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._tue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tue = this._tue?.internalValue;
    }
    if (this._wed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wed = this._wed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientBlockedServicesPauseSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fri.internalValue = undefined;
      this._mon.internalValue = undefined;
      this._sat.internalValue = undefined;
      this._sun.internalValue = undefined;
      this._thu.internalValue = undefined;
      this._timeZone = undefined;
      this._tue.internalValue = undefined;
      this._wed.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fri.internalValue = value.fri;
      this._mon.internalValue = value.mon;
      this._sat.internalValue = value.sat;
      this._sun.internalValue = value.sun;
      this._thu.internalValue = value.thu;
      this._timeZone = value.timeZone;
      this._tue.internalValue = value.tue;
      this._wed.internalValue = value.wed;
    }
  }

  // fri - computed: true, optional: true, required: false
  private _fri = new ClientBlockedServicesPauseScheduleFriOutputReference(this, "fri");
  public get fri() {
    return this._fri;
  }
  public putFri(value: ClientBlockedServicesPauseScheduleFri) {
    this._fri.internalValue = value;
  }
  public resetFri() {
    this._fri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friInput() {
    return this._fri.internalValue;
  }

  // mon - computed: true, optional: true, required: false
  private _mon = new ClientBlockedServicesPauseScheduleMonOutputReference(this, "mon");
  public get mon() {
    return this._mon;
  }
  public putMon(value: ClientBlockedServicesPauseScheduleMon) {
    this._mon.internalValue = value;
  }
  public resetMon() {
    this._mon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monInput() {
    return this._mon.internalValue;
  }

  // sat - computed: true, optional: true, required: false
  private _sat = new ClientBlockedServicesPauseScheduleSatOutputReference(this, "sat");
  public get sat() {
    return this._sat;
  }
  public putSat(value: ClientBlockedServicesPauseScheduleSat) {
    this._sat.internalValue = value;
  }
  public resetSat() {
    this._sat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satInput() {
    return this._sat.internalValue;
  }

  // sun - computed: true, optional: true, required: false
  private _sun = new ClientBlockedServicesPauseScheduleSunOutputReference(this, "sun");
  public get sun() {
    return this._sun;
  }
  public putSun(value: ClientBlockedServicesPauseScheduleSun) {
    this._sun.internalValue = value;
  }
  public resetSun() {
    this._sun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sunInput() {
    return this._sun.internalValue;
  }

  // thu - computed: true, optional: true, required: false
  private _thu = new ClientBlockedServicesPauseScheduleThuOutputReference(this, "thu");
  public get thu() {
    return this._thu;
  }
  public putThu(value: ClientBlockedServicesPauseScheduleThu) {
    this._thu.internalValue = value;
  }
  public resetThu() {
    this._thu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thuInput() {
    return this._thu.internalValue;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // tue - computed: true, optional: true, required: false
  private _tue = new ClientBlockedServicesPauseScheduleTueOutputReference(this, "tue");
  public get tue() {
    return this._tue;
  }
  public putTue(value: ClientBlockedServicesPauseScheduleTue) {
    this._tue.internalValue = value;
  }
  public resetTue() {
    this._tue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tueInput() {
    return this._tue.internalValue;
  }

  // wed - computed: true, optional: true, required: false
  private _wed = new ClientBlockedServicesPauseScheduleWedOutputReference(this, "wed");
  public get wed() {
    return this._wed;
  }
  public putWed(value: ClientBlockedServicesPauseScheduleWed) {
    this._wed.internalValue = value;
  }
  public resetWed() {
    this._wed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wedInput() {
    return this._wed.internalValue;
  }
}
export interface ClientSafesearch {
  /**
  * Whether Safe Search is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#enabled Client#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Services which SafeSearch is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#services Client#services}
  */
  readonly services?: string[];
}

export function clientSafesearchToTerraform(struct?: ClientSafesearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function clientSafesearchToHclTerraform(struct?: ClientSafesearch | cdktf.IResolvable): any {
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
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientSafesearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClientSafesearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientSafesearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._services = value.services;
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

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client adguard_client}
*/
export class Client extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adguard_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Client resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Client to import
  * @param importFromId The id of the existing Client that should be imported. Refer to the {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Client to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adguard_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/client adguard_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClientConfig
  */
  public constructor(scope: Construct, id: string, config: ClientConfig) {
    super(scope, id, {
      terraformResourceType: 'adguard_client',
      terraformGeneratorMetadata: {
        providerName: 'adguard',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockedServices = config.blockedServices;
    this._blockedServicesPauseSchedule.internalValue = config.blockedServicesPauseSchedule;
    this._filteringEnabled = config.filteringEnabled;
    this._ids = config.ids;
    this._ignoreQuerylog = config.ignoreQuerylog;
    this._ignoreStatistics = config.ignoreStatistics;
    this._name = config.name;
    this._parentalEnabled = config.parentalEnabled;
    this._safebrowsingEnabled = config.safebrowsingEnabled;
    this._safesearch.internalValue = config.safesearch;
    this._tags = config.tags;
    this._upstreams = config.upstreams;
    this._upstreamsCacheEnabled = config.upstreamsCacheEnabled;
    this._upstreamsCacheSize = config.upstreamsCacheSize;
    this._useGlobalBlockedServices = config.useGlobalBlockedServices;
    this._useGlobalSettings = config.useGlobalSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_services - computed: false, optional: true, required: false
  private _blockedServices?: string[]; 
  public get blockedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_services'));
  }
  public set blockedServices(value: string[]) {
    this._blockedServices = value;
  }
  public resetBlockedServices() {
    this._blockedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedServicesInput() {
    return this._blockedServices;
  }

  // blocked_services_pause_schedule - computed: true, optional: true, required: false
  private _blockedServicesPauseSchedule = new ClientBlockedServicesPauseScheduleOutputReference(this, "blocked_services_pause_schedule");
  public get blockedServicesPauseSchedule() {
    return this._blockedServicesPauseSchedule;
  }
  public putBlockedServicesPauseSchedule(value: ClientBlockedServicesPauseSchedule) {
    this._blockedServicesPauseSchedule.internalValue = value;
  }
  public resetBlockedServicesPauseSchedule() {
    this._blockedServicesPauseSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedServicesPauseScheduleInput() {
    return this._blockedServicesPauseSchedule.internalValue;
  }

  // filtering_enabled - computed: true, optional: true, required: false
  private _filteringEnabled?: boolean | cdktf.IResolvable; 
  public get filteringEnabled() {
    return this.getBooleanAttribute('filtering_enabled');
  }
  public set filteringEnabled(value: boolean | cdktf.IResolvable) {
    this._filteringEnabled = value;
  }
  public resetFilteringEnabled() {
    this._filteringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringEnabledInput() {
    return this._filteringEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: false, required: true
  private _ids?: string[]; 
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // ignore_querylog - computed: true, optional: true, required: false
  private _ignoreQuerylog?: boolean | cdktf.IResolvable; 
  public get ignoreQuerylog() {
    return this.getBooleanAttribute('ignore_querylog');
  }
  public set ignoreQuerylog(value: boolean | cdktf.IResolvable) {
    this._ignoreQuerylog = value;
  }
  public resetIgnoreQuerylog() {
    this._ignoreQuerylog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreQuerylogInput() {
    return this._ignoreQuerylog;
  }

  // ignore_statistics - computed: true, optional: true, required: false
  private _ignoreStatistics?: boolean | cdktf.IResolvable; 
  public get ignoreStatistics() {
    return this.getBooleanAttribute('ignore_statistics');
  }
  public set ignoreStatistics(value: boolean | cdktf.IResolvable) {
    this._ignoreStatistics = value;
  }
  public resetIgnoreStatistics() {
    this._ignoreStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreStatisticsInput() {
    return this._ignoreStatistics;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // parental_enabled - computed: true, optional: true, required: false
  private _parentalEnabled?: boolean | cdktf.IResolvable; 
  public get parentalEnabled() {
    return this.getBooleanAttribute('parental_enabled');
  }
  public set parentalEnabled(value: boolean | cdktf.IResolvable) {
    this._parentalEnabled = value;
  }
  public resetParentalEnabled() {
    this._parentalEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentalEnabledInput() {
    return this._parentalEnabled;
  }

  // safebrowsing_enabled - computed: true, optional: true, required: false
  private _safebrowsingEnabled?: boolean | cdktf.IResolvable; 
  public get safebrowsingEnabled() {
    return this.getBooleanAttribute('safebrowsing_enabled');
  }
  public set safebrowsingEnabled(value: boolean | cdktf.IResolvable) {
    this._safebrowsingEnabled = value;
  }
  public resetSafebrowsingEnabled() {
    this._safebrowsingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safebrowsingEnabledInput() {
    return this._safebrowsingEnabled;
  }

  // safesearch - computed: true, optional: true, required: false
  private _safesearch = new ClientSafesearchOutputReference(this, "safesearch");
  public get safesearch() {
    return this._safesearch;
  }
  public putSafesearch(value: ClientSafesearch) {
    this._safesearch.internalValue = value;
  }
  public resetSafesearch() {
    this._safesearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safesearchInput() {
    return this._safesearch.internalValue;
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

  // upstreams - computed: false, optional: true, required: false
  private _upstreams?: string[]; 
  public get upstreams() {
    return this.getListAttribute('upstreams');
  }
  public set upstreams(value: string[]) {
    this._upstreams = value;
  }
  public resetUpstreams() {
    this._upstreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams;
  }

  // upstreams_cache_enabled - computed: true, optional: true, required: false
  private _upstreamsCacheEnabled?: boolean | cdktf.IResolvable; 
  public get upstreamsCacheEnabled() {
    return this.getBooleanAttribute('upstreams_cache_enabled');
  }
  public set upstreamsCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._upstreamsCacheEnabled = value;
  }
  public resetUpstreamsCacheEnabled() {
    this._upstreamsCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsCacheEnabledInput() {
    return this._upstreamsCacheEnabled;
  }

  // upstreams_cache_size - computed: true, optional: true, required: false
  private _upstreamsCacheSize?: number; 
  public get upstreamsCacheSize() {
    return this.getNumberAttribute('upstreams_cache_size');
  }
  public set upstreamsCacheSize(value: number) {
    this._upstreamsCacheSize = value;
  }
  public resetUpstreamsCacheSize() {
    this._upstreamsCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsCacheSizeInput() {
    return this._upstreamsCacheSize;
  }

  // use_global_blocked_services - computed: true, optional: true, required: false
  private _useGlobalBlockedServices?: boolean | cdktf.IResolvable; 
  public get useGlobalBlockedServices() {
    return this.getBooleanAttribute('use_global_blocked_services');
  }
  public set useGlobalBlockedServices(value: boolean | cdktf.IResolvable) {
    this._useGlobalBlockedServices = value;
  }
  public resetUseGlobalBlockedServices() {
    this._useGlobalBlockedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGlobalBlockedServicesInput() {
    return this._useGlobalBlockedServices;
  }

  // use_global_settings - computed: true, optional: true, required: false
  private _useGlobalSettings?: boolean | cdktf.IResolvable; 
  public get useGlobalSettings() {
    return this.getBooleanAttribute('use_global_settings');
  }
  public set useGlobalSettings(value: boolean | cdktf.IResolvable) {
    this._useGlobalSettings = value;
  }
  public resetUseGlobalSettings() {
    this._useGlobalSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGlobalSettingsInput() {
    return this._useGlobalSettings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedServices),
      blocked_services_pause_schedule: clientBlockedServicesPauseScheduleToTerraform(this._blockedServicesPauseSchedule.internalValue),
      filtering_enabled: cdktf.booleanToTerraform(this._filteringEnabled),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      ignore_querylog: cdktf.booleanToTerraform(this._ignoreQuerylog),
      ignore_statistics: cdktf.booleanToTerraform(this._ignoreStatistics),
      name: cdktf.stringToTerraform(this._name),
      parental_enabled: cdktf.booleanToTerraform(this._parentalEnabled),
      safebrowsing_enabled: cdktf.booleanToTerraform(this._safebrowsingEnabled),
      safesearch: clientSafesearchToTerraform(this._safesearch.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      upstreams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._upstreams),
      upstreams_cache_enabled: cdktf.booleanToTerraform(this._upstreamsCacheEnabled),
      upstreams_cache_size: cdktf.numberToTerraform(this._upstreamsCacheSize),
      use_global_blocked_services: cdktf.booleanToTerraform(this._useGlobalBlockedServices),
      use_global_settings: cdktf.booleanToTerraform(this._useGlobalSettings),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_services_pause_schedule: {
        value: clientBlockedServicesPauseScheduleToHclTerraform(this._blockedServicesPauseSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClientBlockedServicesPauseSchedule",
      },
      filtering_enabled: {
        value: cdktf.booleanToHclTerraform(this._filteringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ignore_querylog: {
        value: cdktf.booleanToHclTerraform(this._ignoreQuerylog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_statistics: {
        value: cdktf.booleanToHclTerraform(this._ignoreStatistics),
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
      parental_enabled: {
        value: cdktf.booleanToHclTerraform(this._parentalEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      safebrowsing_enabled: {
        value: cdktf.booleanToHclTerraform(this._safebrowsingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      safesearch: {
        value: clientSafesearchToHclTerraform(this._safesearch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClientSafesearch",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      upstreams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._upstreams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      upstreams_cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._upstreamsCacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upstreams_cache_size: {
        value: cdktf.numberToHclTerraform(this._upstreamsCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_global_blocked_services: {
        value: cdktf.booleanToHclTerraform(this._useGlobalBlockedServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_global_settings: {
        value: cdktf.booleanToHclTerraform(this._useGlobalSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
