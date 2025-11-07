// https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of services to be blocked globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#blocked_services Config#blocked_services}
  */
  readonly blockedServices?: string[];
  /**
  * Sets periods of inactivity for filtering blocked services. The schedule contains 7 days (Sunday to Saturday) and a time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#blocked_services_pause_schedule Config#blocked_services_pause_schedule}
  */
  readonly blockedServicesPauseSchedule?: ConfigBlockedServicesPauseSchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#dhcp Config#dhcp}
  */
  readonly dhcp?: ConfigDhcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#dns Config#dns}
  */
  readonly dns?: ConfigDns;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#filtering Config#filtering}
  */
  readonly filtering?: ConfigFiltering;
  /**
  * Whether Parental Control is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#parental_control Config#parental_control}
  */
  readonly parentalControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#querylog Config#querylog}
  */
  readonly querylog?: ConfigQuerylog;
  /**
  * Whether Safe Browsing is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#safebrowsing Config#safebrowsing}
  */
  readonly safebrowsing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#safesearch Config#safesearch}
  */
  readonly safesearch?: ConfigSafesearch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#stats Config#stats}
  */
  readonly stats?: ConfigStats;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#tls Config#tls}
  */
  readonly tls?: ConfigTls;
}
export interface ConfigBlockedServicesPauseScheduleFri {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#end Config#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#start Config#start}
  */
  readonly start?: string;
}

export function configBlockedServicesPauseScheduleFriToTerraform(struct?: ConfigBlockedServicesPauseScheduleFri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function configBlockedServicesPauseScheduleFriToHclTerraform(struct?: ConfigBlockedServicesPauseScheduleFri | cdktf.IResolvable): any {
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

export class ConfigBlockedServicesPauseScheduleFriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigBlockedServicesPauseScheduleFri | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigBlockedServicesPauseScheduleFri | cdktf.IResolvable | undefined) {
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
export interface ConfigBlockedServicesPauseScheduleMon {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#end Config#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#start Config#start}
  */
  readonly start?: string;
}

export function configBlockedServicesPauseScheduleMonToTerraform(struct?: ConfigBlockedServicesPauseScheduleMon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function configBlockedServicesPauseScheduleMonToHclTerraform(struct?: ConfigBlockedServicesPauseScheduleMon | cdktf.IResolvable): any {
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

export class ConfigBlockedServicesPauseScheduleMonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigBlockedServicesPauseScheduleMon | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigBlockedServicesPauseScheduleMon | cdktf.IResolvable | undefined) {
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
export interface ConfigBlockedServicesPauseScheduleSat {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#end Config#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#start Config#start}
  */
  readonly start?: string;
}

export function configBlockedServicesPauseScheduleSatToTerraform(struct?: ConfigBlockedServicesPauseScheduleSat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function configBlockedServicesPauseScheduleSatToHclTerraform(struct?: ConfigBlockedServicesPauseScheduleSat | cdktf.IResolvable): any {
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

export class ConfigBlockedServicesPauseScheduleSatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigBlockedServicesPauseScheduleSat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigBlockedServicesPauseScheduleSat | cdktf.IResolvable | undefined) {
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
export interface ConfigBlockedServicesPauseScheduleSun {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#end Config#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#start Config#start}
  */
  readonly start?: string;
}

export function configBlockedServicesPauseScheduleSunToTerraform(struct?: ConfigBlockedServicesPauseScheduleSun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function configBlockedServicesPauseScheduleSunToHclTerraform(struct?: ConfigBlockedServicesPauseScheduleSun | cdktf.IResolvable): any {
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

export class ConfigBlockedServicesPauseScheduleSunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigBlockedServicesPauseScheduleSun | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigBlockedServicesPauseScheduleSun | cdktf.IResolvable | undefined) {
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
export interface ConfigBlockedServicesPauseScheduleThu {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#end Config#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#start Config#start}
  */
  readonly start?: string;
}

export function configBlockedServicesPauseScheduleThuToTerraform(struct?: ConfigBlockedServicesPauseScheduleThu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function configBlockedServicesPauseScheduleThuToHclTerraform(struct?: ConfigBlockedServicesPauseScheduleThu | cdktf.IResolvable): any {
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

export class ConfigBlockedServicesPauseScheduleThuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigBlockedServicesPauseScheduleThu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigBlockedServicesPauseScheduleThu | cdktf.IResolvable | undefined) {
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
export interface ConfigBlockedServicesPauseScheduleTue {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#end Config#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#start Config#start}
  */
  readonly start?: string;
}

export function configBlockedServicesPauseScheduleTueToTerraform(struct?: ConfigBlockedServicesPauseScheduleTue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function configBlockedServicesPauseScheduleTueToHclTerraform(struct?: ConfigBlockedServicesPauseScheduleTue | cdktf.IResolvable): any {
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

export class ConfigBlockedServicesPauseScheduleTueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigBlockedServicesPauseScheduleTue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigBlockedServicesPauseScheduleTue | cdktf.IResolvable | undefined) {
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
export interface ConfigBlockedServicesPauseScheduleWed {
  /**
  * End of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#end Config#end}
  */
  readonly end?: string;
  /**
  * Start of paused service blocking schedule, in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#start Config#start}
  */
  readonly start?: string;
}

export function configBlockedServicesPauseScheduleWedToTerraform(struct?: ConfigBlockedServicesPauseScheduleWed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function configBlockedServicesPauseScheduleWedToHclTerraform(struct?: ConfigBlockedServicesPauseScheduleWed | cdktf.IResolvable): any {
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

export class ConfigBlockedServicesPauseScheduleWedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigBlockedServicesPauseScheduleWed | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigBlockedServicesPauseScheduleWed | cdktf.IResolvable | undefined) {
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
export interface ConfigBlockedServicesPauseSchedule {
  /**
  * Paused service blocking interval for `Friday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#fri Config#fri}
  */
  readonly fri?: ConfigBlockedServicesPauseScheduleFri;
  /**
  * Paused service blocking interval for `Monday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#mon Config#mon}
  */
  readonly mon?: ConfigBlockedServicesPauseScheduleMon;
  /**
  * Paused service blocking interval for `Saturday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#sat Config#sat}
  */
  readonly sat?: ConfigBlockedServicesPauseScheduleSat;
  /**
  * Paused service blocking interval for `Sunday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#sun Config#sun}
  */
  readonly sun?: ConfigBlockedServicesPauseScheduleSun;
  /**
  * Paused service blocking interval for `Thursday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#thu Config#thu}
  */
  readonly thu?: ConfigBlockedServicesPauseScheduleThu;
  /**
  * Time zone name according to IANA time zone database. For example `America/New_York`. `Local` represents the system's local time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#time_zone Config#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Paused service blocking interval for `Tueday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#tue Config#tue}
  */
  readonly tue?: ConfigBlockedServicesPauseScheduleTue;
  /**
  * Paused service blocking interval for `Wednesday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#wed Config#wed}
  */
  readonly wed?: ConfigBlockedServicesPauseScheduleWed;
}

export function configBlockedServicesPauseScheduleToTerraform(struct?: ConfigBlockedServicesPauseSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fri: configBlockedServicesPauseScheduleFriToTerraform(struct!.fri),
    mon: configBlockedServicesPauseScheduleMonToTerraform(struct!.mon),
    sat: configBlockedServicesPauseScheduleSatToTerraform(struct!.sat),
    sun: configBlockedServicesPauseScheduleSunToTerraform(struct!.sun),
    thu: configBlockedServicesPauseScheduleThuToTerraform(struct!.thu),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    tue: configBlockedServicesPauseScheduleTueToTerraform(struct!.tue),
    wed: configBlockedServicesPauseScheduleWedToTerraform(struct!.wed),
  }
}


export function configBlockedServicesPauseScheduleToHclTerraform(struct?: ConfigBlockedServicesPauseSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fri: {
      value: configBlockedServicesPauseScheduleFriToHclTerraform(struct!.fri),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigBlockedServicesPauseScheduleFri",
    },
    mon: {
      value: configBlockedServicesPauseScheduleMonToHclTerraform(struct!.mon),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigBlockedServicesPauseScheduleMon",
    },
    sat: {
      value: configBlockedServicesPauseScheduleSatToHclTerraform(struct!.sat),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigBlockedServicesPauseScheduleSat",
    },
    sun: {
      value: configBlockedServicesPauseScheduleSunToHclTerraform(struct!.sun),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigBlockedServicesPauseScheduleSun",
    },
    thu: {
      value: configBlockedServicesPauseScheduleThuToHclTerraform(struct!.thu),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigBlockedServicesPauseScheduleThu",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tue: {
      value: configBlockedServicesPauseScheduleTueToHclTerraform(struct!.tue),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigBlockedServicesPauseScheduleTue",
    },
    wed: {
      value: configBlockedServicesPauseScheduleWedToHclTerraform(struct!.wed),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigBlockedServicesPauseScheduleWed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigBlockedServicesPauseScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigBlockedServicesPauseSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigBlockedServicesPauseSchedule | cdktf.IResolvable | undefined) {
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
  private _fri = new ConfigBlockedServicesPauseScheduleFriOutputReference(this, "fri");
  public get fri() {
    return this._fri;
  }
  public putFri(value: ConfigBlockedServicesPauseScheduleFri) {
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
  private _mon = new ConfigBlockedServicesPauseScheduleMonOutputReference(this, "mon");
  public get mon() {
    return this._mon;
  }
  public putMon(value: ConfigBlockedServicesPauseScheduleMon) {
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
  private _sat = new ConfigBlockedServicesPauseScheduleSatOutputReference(this, "sat");
  public get sat() {
    return this._sat;
  }
  public putSat(value: ConfigBlockedServicesPauseScheduleSat) {
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
  private _sun = new ConfigBlockedServicesPauseScheduleSunOutputReference(this, "sun");
  public get sun() {
    return this._sun;
  }
  public putSun(value: ConfigBlockedServicesPauseScheduleSun) {
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
  private _thu = new ConfigBlockedServicesPauseScheduleThuOutputReference(this, "thu");
  public get thu() {
    return this._thu;
  }
  public putThu(value: ConfigBlockedServicesPauseScheduleThu) {
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
  private _tue = new ConfigBlockedServicesPauseScheduleTueOutputReference(this, "tue");
  public get tue() {
    return this._tue;
  }
  public putTue(value: ConfigBlockedServicesPauseScheduleTue) {
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
  private _wed = new ConfigBlockedServicesPauseScheduleWedOutputReference(this, "wed");
  public get wed() {
    return this._wed;
  }
  public putWed(value: ConfigBlockedServicesPauseScheduleWed) {
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
export interface ConfigDhcpIpv4Settings {
  /**
  * The gateway IP for the DHCP server scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#gateway_ip Config#gateway_ip}
  */
  readonly gatewayIp: string;
  /**
  * The lease duration for the DHCP server scope, in seconds. Defaults to `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#lease_duration Config#lease_duration}
  */
  readonly leaseDuration?: number;
  /**
  * The start range for the DHCP server scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#range_end Config#range_end}
  */
  readonly rangeEnd: string;
  /**
  * The start range for the DHCP server scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#range_start Config#range_start}
  */
  readonly rangeStart: string;
  /**
  * The subnet mask for the DHCP server scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#subnet_mask Config#subnet_mask}
  */
  readonly subnetMask: string;
}

export function configDhcpIpv4SettingsToTerraform(struct?: ConfigDhcpIpv4Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    lease_duration: cdktf.numberToTerraform(struct!.leaseDuration),
    range_end: cdktf.stringToTerraform(struct!.rangeEnd),
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
  }
}


export function configDhcpIpv4SettingsToHclTerraform(struct?: ConfigDhcpIpv4Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_duration: {
      value: cdktf.numberToHclTerraform(struct!.leaseDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_end: {
      value: cdktf.stringToHclTerraform(struct!.rangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_start: {
      value: cdktf.stringToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigDhcpIpv4SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigDhcpIpv4Settings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._leaseDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseDuration = this._leaseDuration;
    }
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigDhcpIpv4Settings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayIp = undefined;
      this._leaseDuration = undefined;
      this._rangeEnd = undefined;
      this._rangeStart = undefined;
      this._subnetMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayIp = value.gatewayIp;
      this._leaseDuration = value.leaseDuration;
      this._rangeEnd = value.rangeEnd;
      this._rangeStart = value.rangeStart;
      this._subnetMask = value.subnetMask;
    }
  }

  // gateway_ip - computed: true, optional: false, required: true
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // lease_duration - computed: true, optional: true, required: false
  private _leaseDuration?: number; 
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }
  public set leaseDuration(value: number) {
    this._leaseDuration = value;
  }
  public resetLeaseDuration() {
    this._leaseDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseDurationInput() {
    return this._leaseDuration;
  }

  // range_end - computed: true, optional: false, required: true
  private _rangeEnd?: string; 
  public get rangeEnd() {
    return this.getStringAttribute('range_end');
  }
  public set rangeEnd(value: string) {
    this._rangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_start - computed: true, optional: false, required: true
  private _rangeStart?: string; 
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }
  public set rangeStart(value: string) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }

  // subnet_mask - computed: true, optional: false, required: true
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }
}
export interface ConfigDhcpIpv6Settings {
  /**
  * The lease duration for the DHCP server scope, in seconds. Defaults to `86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#lease_duration Config#lease_duration}
  */
  readonly leaseDuration?: number;
  /**
  * The start range for the DHCP server scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#range_start Config#range_start}
  */
  readonly rangeStart: string;
}

export function configDhcpIpv6SettingsToTerraform(struct?: ConfigDhcpIpv6Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lease_duration: cdktf.numberToTerraform(struct!.leaseDuration),
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
  }
}


export function configDhcpIpv6SettingsToHclTerraform(struct?: ConfigDhcpIpv6Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lease_duration: {
      value: cdktf.numberToHclTerraform(struct!.leaseDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_start: {
      value: cdktf.stringToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigDhcpIpv6SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigDhcpIpv6Settings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leaseDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseDuration = this._leaseDuration;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigDhcpIpv6Settings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._leaseDuration = undefined;
      this._rangeStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._leaseDuration = value.leaseDuration;
      this._rangeStart = value.rangeStart;
    }
  }

  // lease_duration - computed: true, optional: true, required: false
  private _leaseDuration?: number; 
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }
  public set leaseDuration(value: number) {
    this._leaseDuration = value;
  }
  public resetLeaseDuration() {
    this._leaseDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseDurationInput() {
    return this._leaseDuration;
  }

  // range_start - computed: true, optional: false, required: true
  private _rangeStart?: string; 
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }
  public set rangeStart(value: string) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }
}
export interface ConfigDhcpStaticLeases {
  /**
  * Hostname associated with the static lease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#hostname Config#hostname}
  */
  readonly hostname: string;
  /**
  * IP address associated with the static lease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#ip Config#ip}
  */
  readonly ip: string;
  /**
  * MAC address associated with the static lease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#mac Config#mac}
  */
  readonly mac: string;
}

export function configDhcpStaticLeasesToTerraform(struct?: ConfigDhcpStaticLeases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function configDhcpStaticLeasesToHclTerraform(struct?: ConfigDhcpStaticLeases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigDhcpStaticLeasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigDhcpStaticLeases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigDhcpStaticLeases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
      this._mac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
      this._mac = value.mac;
    }
  }

  // hostname - computed: true, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip - computed: true, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mac - computed: true, optional: false, required: true
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }
}

export class ConfigDhcpStaticLeasesList extends cdktf.ComplexList {
  public internalValue? : ConfigDhcpStaticLeases[] | cdktf.IResolvable

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
  public get(index: number): ConfigDhcpStaticLeasesOutputReference {
    return new ConfigDhcpStaticLeasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigDhcp {
  /**
  * Whether the DHCP server is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#enabled Config#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The interface to use for the DHCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#interface Config#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#ipv4_settings Config#ipv4_settings}
  */
  readonly ipv4Settings?: ConfigDhcpIpv4Settings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#ipv6_settings Config#ipv6_settings}
  */
  readonly ipv6Settings?: ConfigDhcpIpv6Settings;
  /**
  * Static leases for the DHCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#static_leases Config#static_leases}
  */
  readonly staticLeases?: ConfigDhcpStaticLeases[] | cdktf.IResolvable;
}

export function configDhcpToTerraform(struct?: ConfigDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4_settings: configDhcpIpv4SettingsToTerraform(struct!.ipv4Settings),
    ipv6_settings: configDhcpIpv6SettingsToTerraform(struct!.ipv6Settings),
    static_leases: cdktf.listMapper(configDhcpStaticLeasesToTerraform, false)(struct!.staticLeases),
  }
}


export function configDhcpToHclTerraform(struct?: ConfigDhcp | cdktf.IResolvable): any {
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
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_settings: {
      value: configDhcpIpv4SettingsToHclTerraform(struct!.ipv4Settings),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigDhcpIpv4Settings",
    },
    ipv6_settings: {
      value: configDhcpIpv6SettingsToHclTerraform(struct!.ipv6Settings),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigDhcpIpv6Settings",
    },
    static_leases: {
      value: cdktf.listMapperHcl(configDhcpStaticLeasesToHclTerraform, false)(struct!.staticLeases),
      isBlock: true,
      type: "set",
      storageClassType: "ConfigDhcpStaticLeasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipv4Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Settings = this._ipv4Settings?.internalValue;
    }
    if (this._ipv6Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Settings = this._ipv6Settings?.internalValue;
    }
    if (this._staticLeases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticLeases = this._staticLeases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._interface = undefined;
      this._ipv4Settings.internalValue = undefined;
      this._ipv6Settings.internalValue = undefined;
      this._staticLeases.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._interface = value.interface;
      this._ipv4Settings.internalValue = value.ipv4Settings;
      this._ipv6Settings.internalValue = value.ipv6Settings;
      this._staticLeases.internalValue = value.staticLeases;
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

  // interface - computed: true, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipv4_settings - computed: true, optional: true, required: false
  private _ipv4Settings = new ConfigDhcpIpv4SettingsOutputReference(this, "ipv4_settings");
  public get ipv4Settings() {
    return this._ipv4Settings;
  }
  public putIpv4Settings(value: ConfigDhcpIpv4Settings) {
    this._ipv4Settings.internalValue = value;
  }
  public resetIpv4Settings() {
    this._ipv4Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SettingsInput() {
    return this._ipv4Settings.internalValue;
  }

  // ipv6_settings - computed: true, optional: true, required: false
  private _ipv6Settings = new ConfigDhcpIpv6SettingsOutputReference(this, "ipv6_settings");
  public get ipv6Settings() {
    return this._ipv6Settings;
  }
  public putIpv6Settings(value: ConfigDhcpIpv6Settings) {
    this._ipv6Settings.internalValue = value;
  }
  public resetIpv6Settings() {
    this._ipv6Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SettingsInput() {
    return this._ipv6Settings.internalValue;
  }

  // static_leases - computed: true, optional: true, required: false
  private _staticLeases = new ConfigDhcpStaticLeasesList(this, "static_leases", true);
  public get staticLeases() {
    return this._staticLeases;
  }
  public putStaticLeases(value: ConfigDhcpStaticLeases[] | cdktf.IResolvable) {
    this._staticLeases.internalValue = value;
  }
  public resetStaticLeases() {
    this._staticLeases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticLeasesInput() {
    return this._staticLeases.internalValue;
  }
}
export interface ConfigDns {
  /**
  * The allowlist of clients: IP addresses, CIDRs, or ClientIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#allowed_clients Config#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * Disallowed domains. Defaults to the ones supplied by the default AdGuard Home configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#blocked_hosts Config#blocked_hosts}
  */
  readonly blockedHosts?: string[];
  /**
  * How many seconds the clients should cache a filtered response. Defaults to `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#blocked_response_ttl Config#blocked_response_ttl}
  */
  readonly blockedResponseTtl?: number;
  /**
  * When `blocking_mode` is set to `custom_ip`, the IPv4 address to be returned for a blocked A request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#blocking_ipv4 Config#blocking_ipv4}
  */
  readonly blockingIpv4?: string;
  /**
  * When `blocking_mode` is set to `custom_ip`, the IPv6 address to be returned for a blocked A request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#blocking_ipv6 Config#blocking_ipv6}
  */
  readonly blockingIpv6?: string;
  /**
  * DNS response sent when request is blocked. Valid values are `default` (the default), `refused`, `nxdomain`, `null_ip` or `custom_ip`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#blocking_mode Config#blocking_mode}
  */
  readonly blockingMode?: string;
  /**
  * Booststrap DNS servers. Defaults to the ones supplied by the default AdGuard Home configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#bootstrap_dns Config#bootstrap_dns}
  */
  readonly bootstrapDns?: string[];
  /**
  * Whether optimistic DNS caching is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#cache_optimistic Config#cache_optimistic}
  */
  readonly cacheOptimistic?: boolean | cdktf.IResolvable;
  /**
  * DNS cache size (in bytes). Defaults to `4194304`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#cache_size Config#cache_size}
  */
  readonly cacheSize?: number;
  /**
  * Overridden maximum TTL (in seconds) received from upstream DNS servers. Defaults to `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#cache_ttl_max Config#cache_ttl_max}
  */
  readonly cacheTtlMax?: number;
  /**
  * Overridden minimum TTL (in seconds) received from upstream DNS servers. Defaults to `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#cache_ttl_min Config#cache_ttl_min}
  */
  readonly cacheTtlMin?: number;
  /**
  * Whether dropping of all IPv6 DNS queries is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#disable_ipv6 Config#disable_ipv6}
  */
  readonly disableIpv6?: boolean | cdktf.IResolvable;
  /**
  * The blocklist of clients: IP addresses, CIDRs, or ClientIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#disallowed_clients Config#disallowed_clients}
  */
  readonly disallowedClients?: string[];
  /**
  * Whether outgoing DNSSEC is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#dnssec_enabled Config#dnssec_enabled}
  */
  readonly dnssecEnabled?: boolean | cdktf.IResolvable;
  /**
  * The custom IP for EDNS Client Subnet (ECS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#edns_cs_custom_ip Config#edns_cs_custom_ip}
  */
  readonly ednsCsCustomIp?: string;
  /**
  * Whether EDNS Client Subnet (ECS) is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#edns_cs_enabled Config#edns_cs_enabled}
  */
  readonly ednsCsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether EDNS Client Subnet (ECS) is using a custom IP. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#edns_cs_use_custom Config#edns_cs_use_custom}
  */
  readonly ednsCsUseCustom?: boolean | cdktf.IResolvable;
  /**
  * Fallback DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#fallback_dns Config#fallback_dns}
  */
  readonly fallbackDns?: string[];
  /**
  * Set of private reverse DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#local_ptr_upstreams Config#local_ptr_upstreams}
  */
  readonly localPtrUpstreams?: string[];
  /**
  * Whether protection is enabled. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#protection_enabled Config#protection_enabled}
  */
  readonly protectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of requests per second allowed per client. Defaults to `20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#rate_limit Config#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Subnet prefix length for IPv4 addresses used for rate limiting. Defaults to `24`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#rate_limit_subnet_len_ipv4 Config#rate_limit_subnet_len_ipv4}
  */
  readonly rateLimitSubnetLenIpv4?: number;
  /**
  * Subnet prefix length for IPv6 addresses used for rate limiting. Defaults to `56`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#rate_limit_subnet_len_ipv6 Config#rate_limit_subnet_len_ipv6}
  */
  readonly rateLimitSubnetLenIpv6?: number;
  /**
  * IP addresses excluded from rate limiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#rate_limit_whitelist Config#rate_limit_whitelist}
  */
  readonly rateLimitWhitelist?: string[];
  /**
  * Whether reverse DNS resolution of clients' IP addresses is enabled. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#resolve_clients Config#resolve_clients}
  */
  readonly resolveClients?: boolean | cdktf.IResolvable;
  /**
  * Upstream DNS servers. Defaults to the ones supplied by the default AdGuard Home configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#upstream_dns Config#upstream_dns}
  */
  readonly upstreamDns?: string[];
  /**
  * Upstream DNS resolvers usage strategy. Valid values are `load_balance` (default), `parallel` and `fastest_addr`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#upstream_mode Config#upstream_mode}
  */
  readonly upstreamMode?: string;
  /**
  * The number of seconds to wait for a response from the upstream server. Defaults to `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#upstream_timeout Config#upstream_timeout}
  */
  readonly upstreamTimeout?: number;
  /**
  * Whether to use private reverse DNS resolvers. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#use_private_ptr_resolvers Config#use_private_ptr_resolvers}
  */
  readonly usePrivatePtrResolvers?: boolean | cdktf.IResolvable;
}

export function configDnsToTerraform(struct?: ConfigDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedClients),
    blocked_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedHosts),
    blocked_response_ttl: cdktf.numberToTerraform(struct!.blockedResponseTtl),
    blocking_ipv4: cdktf.stringToTerraform(struct!.blockingIpv4),
    blocking_ipv6: cdktf.stringToTerraform(struct!.blockingIpv6),
    blocking_mode: cdktf.stringToTerraform(struct!.blockingMode),
    bootstrap_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootstrapDns),
    cache_optimistic: cdktf.booleanToTerraform(struct!.cacheOptimistic),
    cache_size: cdktf.numberToTerraform(struct!.cacheSize),
    cache_ttl_max: cdktf.numberToTerraform(struct!.cacheTtlMax),
    cache_ttl_min: cdktf.numberToTerraform(struct!.cacheTtlMin),
    disable_ipv6: cdktf.booleanToTerraform(struct!.disableIpv6),
    disallowed_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disallowedClients),
    dnssec_enabled: cdktf.booleanToTerraform(struct!.dnssecEnabled),
    edns_cs_custom_ip: cdktf.stringToTerraform(struct!.ednsCsCustomIp),
    edns_cs_enabled: cdktf.booleanToTerraform(struct!.ednsCsEnabled),
    edns_cs_use_custom: cdktf.booleanToTerraform(struct!.ednsCsUseCustom),
    fallback_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fallbackDns),
    local_ptr_upstreams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localPtrUpstreams),
    protection_enabled: cdktf.booleanToTerraform(struct!.protectionEnabled),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    rate_limit_subnet_len_ipv4: cdktf.numberToTerraform(struct!.rateLimitSubnetLenIpv4),
    rate_limit_subnet_len_ipv6: cdktf.numberToTerraform(struct!.rateLimitSubnetLenIpv6),
    rate_limit_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rateLimitWhitelist),
    resolve_clients: cdktf.booleanToTerraform(struct!.resolveClients),
    upstream_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upstreamDns),
    upstream_mode: cdktf.stringToTerraform(struct!.upstreamMode),
    upstream_timeout: cdktf.numberToTerraform(struct!.upstreamTimeout),
    use_private_ptr_resolvers: cdktf.booleanToTerraform(struct!.usePrivatePtrResolvers),
  }
}


export function configDnsToHclTerraform(struct?: ConfigDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedClients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    blocked_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockedHosts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    blocked_response_ttl: {
      value: cdktf.numberToHclTerraform(struct!.blockedResponseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blocking_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.blockingIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocking_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.blockingIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocking_mode: {
      value: cdktf.stringToHclTerraform(struct!.blockingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootstrapDns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_optimistic: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOptimistic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_size: {
      value: cdktf.numberToHclTerraform(struct!.cacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_ttl_max: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtlMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_ttl_min: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtlMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.disableIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disallowed_clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disallowedClients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dnssec_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dnssecEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edns_cs_custom_ip: {
      value: cdktf.stringToHclTerraform(struct!.ednsCsCustomIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edns_cs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ednsCsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edns_cs_use_custom: {
      value: cdktf.booleanToHclTerraform(struct!.ednsCsUseCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fallbackDns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_ptr_upstreams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localPtrUpstreams),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.protectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_subnet_len_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitSubnetLenIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_subnet_len_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitSubnetLenIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rateLimitWhitelist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resolve_clients: {
      value: cdktf.booleanToHclTerraform(struct!.resolveClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upstream_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upstreamDns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upstream_mode: {
      value: cdktf.stringToHclTerraform(struct!.upstreamMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_timeout: {
      value: cdktf.numberToHclTerraform(struct!.upstreamTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_private_ptr_resolvers: {
      value: cdktf.booleanToHclTerraform(struct!.usePrivatePtrResolvers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._blockedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedHosts = this._blockedHosts;
    }
    if (this._blockedResponseTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedResponseTtl = this._blockedResponseTtl;
    }
    if (this._blockingIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingIpv4 = this._blockingIpv4;
    }
    if (this._blockingIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingIpv6 = this._blockingIpv6;
    }
    if (this._blockingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingMode = this._blockingMode;
    }
    if (this._bootstrapDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapDns = this._bootstrapDns;
    }
    if (this._cacheOptimistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOptimistic = this._cacheOptimistic;
    }
    if (this._cacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSize = this._cacheSize;
    }
    if (this._cacheTtlMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlMax = this._cacheTtlMax;
    }
    if (this._cacheTtlMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlMin = this._cacheTtlMin;
    }
    if (this._disableIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIpv6 = this._disableIpv6;
    }
    if (this._disallowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowedClients = this._disallowedClients;
    }
    if (this._dnssecEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecEnabled = this._dnssecEnabled;
    }
    if (this._ednsCsCustomIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsCsCustomIp = this._ednsCsCustomIp;
    }
    if (this._ednsCsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsCsEnabled = this._ednsCsEnabled;
    }
    if (this._ednsCsUseCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsCsUseCustom = this._ednsCsUseCustom;
    }
    if (this._fallbackDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackDns = this._fallbackDns;
    }
    if (this._localPtrUpstreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPtrUpstreams = this._localPtrUpstreams;
    }
    if (this._protectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionEnabled = this._protectionEnabled;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._rateLimitSubnetLenIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitSubnetLenIpv4 = this._rateLimitSubnetLenIpv4;
    }
    if (this._rateLimitSubnetLenIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitSubnetLenIpv6 = this._rateLimitSubnetLenIpv6;
    }
    if (this._rateLimitWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitWhitelist = this._rateLimitWhitelist;
    }
    if (this._resolveClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveClients = this._resolveClients;
    }
    if (this._upstreamDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamDns = this._upstreamDns;
    }
    if (this._upstreamMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamMode = this._upstreamMode;
    }
    if (this._upstreamTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamTimeout = this._upstreamTimeout;
    }
    if (this._usePrivatePtrResolvers !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivatePtrResolvers = this._usePrivatePtrResolvers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedClients = undefined;
      this._blockedHosts = undefined;
      this._blockedResponseTtl = undefined;
      this._blockingIpv4 = undefined;
      this._blockingIpv6 = undefined;
      this._blockingMode = undefined;
      this._bootstrapDns = undefined;
      this._cacheOptimistic = undefined;
      this._cacheSize = undefined;
      this._cacheTtlMax = undefined;
      this._cacheTtlMin = undefined;
      this._disableIpv6 = undefined;
      this._disallowedClients = undefined;
      this._dnssecEnabled = undefined;
      this._ednsCsCustomIp = undefined;
      this._ednsCsEnabled = undefined;
      this._ednsCsUseCustom = undefined;
      this._fallbackDns = undefined;
      this._localPtrUpstreams = undefined;
      this._protectionEnabled = undefined;
      this._rateLimit = undefined;
      this._rateLimitSubnetLenIpv4 = undefined;
      this._rateLimitSubnetLenIpv6 = undefined;
      this._rateLimitWhitelist = undefined;
      this._resolveClients = undefined;
      this._upstreamDns = undefined;
      this._upstreamMode = undefined;
      this._upstreamTimeout = undefined;
      this._usePrivatePtrResolvers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedClients = value.allowedClients;
      this._blockedHosts = value.blockedHosts;
      this._blockedResponseTtl = value.blockedResponseTtl;
      this._blockingIpv4 = value.blockingIpv4;
      this._blockingIpv6 = value.blockingIpv6;
      this._blockingMode = value.blockingMode;
      this._bootstrapDns = value.bootstrapDns;
      this._cacheOptimistic = value.cacheOptimistic;
      this._cacheSize = value.cacheSize;
      this._cacheTtlMax = value.cacheTtlMax;
      this._cacheTtlMin = value.cacheTtlMin;
      this._disableIpv6 = value.disableIpv6;
      this._disallowedClients = value.disallowedClients;
      this._dnssecEnabled = value.dnssecEnabled;
      this._ednsCsCustomIp = value.ednsCsCustomIp;
      this._ednsCsEnabled = value.ednsCsEnabled;
      this._ednsCsUseCustom = value.ednsCsUseCustom;
      this._fallbackDns = value.fallbackDns;
      this._localPtrUpstreams = value.localPtrUpstreams;
      this._protectionEnabled = value.protectionEnabled;
      this._rateLimit = value.rateLimit;
      this._rateLimitSubnetLenIpv4 = value.rateLimitSubnetLenIpv4;
      this._rateLimitSubnetLenIpv6 = value.rateLimitSubnetLenIpv6;
      this._rateLimitWhitelist = value.rateLimitWhitelist;
      this._resolveClients = value.resolveClients;
      this._upstreamDns = value.upstreamDns;
      this._upstreamMode = value.upstreamMode;
      this._upstreamTimeout = value.upstreamTimeout;
      this._usePrivatePtrResolvers = value.usePrivatePtrResolvers;
    }
  }

  // allowed_clients - computed: true, optional: true, required: false
  private _allowedClients?: string[]; 
  public get allowedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_clients'));
  }
  public set allowedClients(value: string[]) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // blocked_hosts - computed: true, optional: true, required: false
  private _blockedHosts?: string[]; 
  public get blockedHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_hosts'));
  }
  public set blockedHosts(value: string[]) {
    this._blockedHosts = value;
  }
  public resetBlockedHosts() {
    this._blockedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedHostsInput() {
    return this._blockedHosts;
  }

  // blocked_response_ttl - computed: true, optional: true, required: false
  private _blockedResponseTtl?: number; 
  public get blockedResponseTtl() {
    return this.getNumberAttribute('blocked_response_ttl');
  }
  public set blockedResponseTtl(value: number) {
    this._blockedResponseTtl = value;
  }
  public resetBlockedResponseTtl() {
    this._blockedResponseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedResponseTtlInput() {
    return this._blockedResponseTtl;
  }

  // blocking_ipv4 - computed: true, optional: true, required: false
  private _blockingIpv4?: string; 
  public get blockingIpv4() {
    return this.getStringAttribute('blocking_ipv4');
  }
  public set blockingIpv4(value: string) {
    this._blockingIpv4 = value;
  }
  public resetBlockingIpv4() {
    this._blockingIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingIpv4Input() {
    return this._blockingIpv4;
  }

  // blocking_ipv6 - computed: true, optional: true, required: false
  private _blockingIpv6?: string; 
  public get blockingIpv6() {
    return this.getStringAttribute('blocking_ipv6');
  }
  public set blockingIpv6(value: string) {
    this._blockingIpv6 = value;
  }
  public resetBlockingIpv6() {
    this._blockingIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingIpv6Input() {
    return this._blockingIpv6;
  }

  // blocking_mode - computed: true, optional: true, required: false
  private _blockingMode?: string; 
  public get blockingMode() {
    return this.getStringAttribute('blocking_mode');
  }
  public set blockingMode(value: string) {
    this._blockingMode = value;
  }
  public resetBlockingMode() {
    this._blockingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingModeInput() {
    return this._blockingMode;
  }

  // bootstrap_dns - computed: true, optional: true, required: false
  private _bootstrapDns?: string[]; 
  public get bootstrapDns() {
    return this.getListAttribute('bootstrap_dns');
  }
  public set bootstrapDns(value: string[]) {
    this._bootstrapDns = value;
  }
  public resetBootstrapDns() {
    this._bootstrapDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapDnsInput() {
    return this._bootstrapDns;
  }

  // cache_optimistic - computed: true, optional: true, required: false
  private _cacheOptimistic?: boolean | cdktf.IResolvable; 
  public get cacheOptimistic() {
    return this.getBooleanAttribute('cache_optimistic');
  }
  public set cacheOptimistic(value: boolean | cdktf.IResolvable) {
    this._cacheOptimistic = value;
  }
  public resetCacheOptimistic() {
    this._cacheOptimistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOptimisticInput() {
    return this._cacheOptimistic;
  }

  // cache_size - computed: true, optional: true, required: false
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // cache_ttl_max - computed: true, optional: true, required: false
  private _cacheTtlMax?: number; 
  public get cacheTtlMax() {
    return this.getNumberAttribute('cache_ttl_max');
  }
  public set cacheTtlMax(value: number) {
    this._cacheTtlMax = value;
  }
  public resetCacheTtlMax() {
    this._cacheTtlMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlMaxInput() {
    return this._cacheTtlMax;
  }

  // cache_ttl_min - computed: true, optional: true, required: false
  private _cacheTtlMin?: number; 
  public get cacheTtlMin() {
    return this.getNumberAttribute('cache_ttl_min');
  }
  public set cacheTtlMin(value: number) {
    this._cacheTtlMin = value;
  }
  public resetCacheTtlMin() {
    this._cacheTtlMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlMinInput() {
    return this._cacheTtlMin;
  }

  // disable_ipv6 - computed: true, optional: true, required: false
  private _disableIpv6?: boolean | cdktf.IResolvable; 
  public get disableIpv6() {
    return this.getBooleanAttribute('disable_ipv6');
  }
  public set disableIpv6(value: boolean | cdktf.IResolvable) {
    this._disableIpv6 = value;
  }
  public resetDisableIpv6() {
    this._disableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpv6Input() {
    return this._disableIpv6;
  }

  // disallowed_clients - computed: true, optional: true, required: false
  private _disallowedClients?: string[]; 
  public get disallowedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('disallowed_clients'));
  }
  public set disallowedClients(value: string[]) {
    this._disallowedClients = value;
  }
  public resetDisallowedClients() {
    this._disallowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedClientsInput() {
    return this._disallowedClients;
  }

  // dnssec_enabled - computed: true, optional: true, required: false
  private _dnssecEnabled?: boolean | cdktf.IResolvable; 
  public get dnssecEnabled() {
    return this.getBooleanAttribute('dnssec_enabled');
  }
  public set dnssecEnabled(value: boolean | cdktf.IResolvable) {
    this._dnssecEnabled = value;
  }
  public resetDnssecEnabled() {
    this._dnssecEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecEnabledInput() {
    return this._dnssecEnabled;
  }

  // edns_cs_custom_ip - computed: true, optional: true, required: false
  private _ednsCsCustomIp?: string; 
  public get ednsCsCustomIp() {
    return this.getStringAttribute('edns_cs_custom_ip');
  }
  public set ednsCsCustomIp(value: string) {
    this._ednsCsCustomIp = value;
  }
  public resetEdnsCsCustomIp() {
    this._ednsCsCustomIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsCsCustomIpInput() {
    return this._ednsCsCustomIp;
  }

  // edns_cs_enabled - computed: true, optional: true, required: false
  private _ednsCsEnabled?: boolean | cdktf.IResolvable; 
  public get ednsCsEnabled() {
    return this.getBooleanAttribute('edns_cs_enabled');
  }
  public set ednsCsEnabled(value: boolean | cdktf.IResolvable) {
    this._ednsCsEnabled = value;
  }
  public resetEdnsCsEnabled() {
    this._ednsCsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsCsEnabledInput() {
    return this._ednsCsEnabled;
  }

  // edns_cs_use_custom - computed: true, optional: true, required: false
  private _ednsCsUseCustom?: boolean | cdktf.IResolvable; 
  public get ednsCsUseCustom() {
    return this.getBooleanAttribute('edns_cs_use_custom');
  }
  public set ednsCsUseCustom(value: boolean | cdktf.IResolvable) {
    this._ednsCsUseCustom = value;
  }
  public resetEdnsCsUseCustom() {
    this._ednsCsUseCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsCsUseCustomInput() {
    return this._ednsCsUseCustom;
  }

  // fallback_dns - computed: true, optional: true, required: false
  private _fallbackDns?: string[]; 
  public get fallbackDns() {
    return this.getListAttribute('fallback_dns');
  }
  public set fallbackDns(value: string[]) {
    this._fallbackDns = value;
  }
  public resetFallbackDns() {
    this._fallbackDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackDnsInput() {
    return this._fallbackDns;
  }

  // local_ptr_upstreams - computed: true, optional: true, required: false
  private _localPtrUpstreams?: string[]; 
  public get localPtrUpstreams() {
    return cdktf.Fn.tolist(this.getListAttribute('local_ptr_upstreams'));
  }
  public set localPtrUpstreams(value: string[]) {
    this._localPtrUpstreams = value;
  }
  public resetLocalPtrUpstreams() {
    this._localPtrUpstreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPtrUpstreamsInput() {
    return this._localPtrUpstreams;
  }

  // protection_enabled - computed: true, optional: true, required: false
  private _protectionEnabled?: boolean | cdktf.IResolvable; 
  public get protectionEnabled() {
    return this.getBooleanAttribute('protection_enabled');
  }
  public set protectionEnabled(value: boolean | cdktf.IResolvable) {
    this._protectionEnabled = value;
  }
  public resetProtectionEnabled() {
    this._protectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionEnabledInput() {
    return this._protectionEnabled;
  }

  // rate_limit - computed: true, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // rate_limit_subnet_len_ipv4 - computed: true, optional: true, required: false
  private _rateLimitSubnetLenIpv4?: number; 
  public get rateLimitSubnetLenIpv4() {
    return this.getNumberAttribute('rate_limit_subnet_len_ipv4');
  }
  public set rateLimitSubnetLenIpv4(value: number) {
    this._rateLimitSubnetLenIpv4 = value;
  }
  public resetRateLimitSubnetLenIpv4() {
    this._rateLimitSubnetLenIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitSubnetLenIpv4Input() {
    return this._rateLimitSubnetLenIpv4;
  }

  // rate_limit_subnet_len_ipv6 - computed: true, optional: true, required: false
  private _rateLimitSubnetLenIpv6?: number; 
  public get rateLimitSubnetLenIpv6() {
    return this.getNumberAttribute('rate_limit_subnet_len_ipv6');
  }
  public set rateLimitSubnetLenIpv6(value: number) {
    this._rateLimitSubnetLenIpv6 = value;
  }
  public resetRateLimitSubnetLenIpv6() {
    this._rateLimitSubnetLenIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitSubnetLenIpv6Input() {
    return this._rateLimitSubnetLenIpv6;
  }

  // rate_limit_whitelist - computed: true, optional: true, required: false
  private _rateLimitWhitelist?: string[]; 
  public get rateLimitWhitelist() {
    return this.getListAttribute('rate_limit_whitelist');
  }
  public set rateLimitWhitelist(value: string[]) {
    this._rateLimitWhitelist = value;
  }
  public resetRateLimitWhitelist() {
    this._rateLimitWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitWhitelistInput() {
    return this._rateLimitWhitelist;
  }

  // resolve_clients - computed: true, optional: true, required: false
  private _resolveClients?: boolean | cdktf.IResolvable; 
  public get resolveClients() {
    return this.getBooleanAttribute('resolve_clients');
  }
  public set resolveClients(value: boolean | cdktf.IResolvable) {
    this._resolveClients = value;
  }
  public resetResolveClients() {
    this._resolveClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveClientsInput() {
    return this._resolveClients;
  }

  // upstream_dns - computed: true, optional: true, required: false
  private _upstreamDns?: string[]; 
  public get upstreamDns() {
    return this.getListAttribute('upstream_dns');
  }
  public set upstreamDns(value: string[]) {
    this._upstreamDns = value;
  }
  public resetUpstreamDns() {
    this._upstreamDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamDnsInput() {
    return this._upstreamDns;
  }

  // upstream_mode - computed: true, optional: true, required: false
  private _upstreamMode?: string; 
  public get upstreamMode() {
    return this.getStringAttribute('upstream_mode');
  }
  public set upstreamMode(value: string) {
    this._upstreamMode = value;
  }
  public resetUpstreamMode() {
    this._upstreamMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamModeInput() {
    return this._upstreamMode;
  }

  // upstream_timeout - computed: true, optional: true, required: false
  private _upstreamTimeout?: number; 
  public get upstreamTimeout() {
    return this.getNumberAttribute('upstream_timeout');
  }
  public set upstreamTimeout(value: number) {
    this._upstreamTimeout = value;
  }
  public resetUpstreamTimeout() {
    this._upstreamTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamTimeoutInput() {
    return this._upstreamTimeout;
  }

  // use_private_ptr_resolvers - computed: true, optional: true, required: false
  private _usePrivatePtrResolvers?: boolean | cdktf.IResolvable; 
  public get usePrivatePtrResolvers() {
    return this.getBooleanAttribute('use_private_ptr_resolvers');
  }
  public set usePrivatePtrResolvers(value: boolean | cdktf.IResolvable) {
    this._usePrivatePtrResolvers = value;
  }
  public resetUsePrivatePtrResolvers() {
    this._usePrivatePtrResolvers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivatePtrResolversInput() {
    return this._usePrivatePtrResolvers;
  }
}
export interface ConfigFiltering {
  /**
  * Whether DNS filtering is enabled. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#enabled Config#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Update interval for all list-based filters, in hours. Defaults to `24`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#update_interval Config#update_interval}
  */
  readonly updateInterval?: number;
}

export function configFilteringToTerraform(struct?: ConfigFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    update_interval: cdktf.numberToTerraform(struct!.updateInterval),
  }
}


export function configFilteringToHclTerraform(struct?: ConfigFiltering | cdktf.IResolvable): any {
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
    update_interval: {
      value: cdktf.numberToHclTerraform(struct!.updateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFilteringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigFiltering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._updateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateInterval = this._updateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFiltering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._updateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._updateInterval = value.updateInterval;
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

  // update_interval - computed: true, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }
}
export interface ConfigQuerylog {
  /**
  * Whether anonymizing clients' IP addresses is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#anonymize_client_ip Config#anonymize_client_ip}
  */
  readonly anonymizeClientIp?: boolean | cdktf.IResolvable;
  /**
  * Whether the query log is enabled. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#enabled Config#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set of host names which should not be written to log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#ignored Config#ignored}
  */
  readonly ignored?: string[];
  /**
  * Time period for query log rotation, in hours. Defaults to `2160` (90 days)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#interval Config#interval}
  */
  readonly interval?: number;
}

export function configQuerylogToTerraform(struct?: ConfigQuerylog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymize_client_ip: cdktf.booleanToTerraform(struct!.anonymizeClientIp),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ignored: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignored),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function configQuerylogToHclTerraform(struct?: ConfigQuerylog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymize_client_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anonymizeClientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignored: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignored),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigQuerylogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigQuerylog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymizeClientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymizeClientIp = this._anonymizeClientIp;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ignored !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignored = this._ignored;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigQuerylog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonymizeClientIp = undefined;
      this._enabled = undefined;
      this._ignored = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonymizeClientIp = value.anonymizeClientIp;
      this._enabled = value.enabled;
      this._ignored = value.ignored;
      this._interval = value.interval;
    }
  }

  // anonymize_client_ip - computed: true, optional: true, required: false
  private _anonymizeClientIp?: boolean | cdktf.IResolvable; 
  public get anonymizeClientIp() {
    return this.getBooleanAttribute('anonymize_client_ip');
  }
  public set anonymizeClientIp(value: boolean | cdktf.IResolvable) {
    this._anonymizeClientIp = value;
  }
  public resetAnonymizeClientIp() {
    this._anonymizeClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymizeClientIpInput() {
    return this._anonymizeClientIp;
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

  // ignored - computed: true, optional: true, required: false
  private _ignored?: string[]; 
  public get ignored() {
    return cdktf.Fn.tolist(this.getListAttribute('ignored'));
  }
  public set ignored(value: string[]) {
    this._ignored = value;
  }
  public resetIgnored() {
    this._ignored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredInput() {
    return this._ignored;
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
}
export interface ConfigSafesearch {
  /**
  * Whether Safe Search is enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#enabled Config#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Services which SafeSearch is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#services Config#services}
  */
  readonly services?: string[];
}

export function configSafesearchToTerraform(struct?: ConfigSafesearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function configSafesearchToHclTerraform(struct?: ConfigSafesearch | cdktf.IResolvable): any {
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

export class ConfigSafesearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigSafesearch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigSafesearch | cdktf.IResolvable | undefined) {
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
export interface ConfigStats {
  /**
  * Whether server statistics are enabled. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#enabled Config#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set of host names which should not be counted in the server statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#ignored Config#ignored}
  */
  readonly ignored?: string[];
  /**
  * Time period for server statistics rotation, in hours. Defaults to `24` (1 day)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#interval Config#interval}
  */
  readonly interval?: number;
}

export function configStatsToTerraform(struct?: ConfigStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ignored: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignored),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function configStatsToHclTerraform(struct?: ConfigStats | cdktf.IResolvable): any {
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
    ignored: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignored),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigStats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ignored !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignored = this._ignored;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigStats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ignored = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ignored = value.ignored;
      this._interval = value.interval;
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

  // ignored - computed: true, optional: true, required: false
  private _ignored?: string[]; 
  public get ignored() {
    return cdktf.Fn.tolist(this.getListAttribute('ignored'));
  }
  public set ignored(value: string[]) {
    this._ignored = value;
  }
  public resetIgnored() {
    this._ignored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredInput() {
    return this._ignored;
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
}
export interface ConfigTls {
  /**
  * The certificates chain. Supply either a path to a file or a base64 encoded string of the certificates chain in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#certificate_chain Config#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Whether encryption (DoT/DoH/HTTPS) is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#enabled Config#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * When `true`, forces HTTP-to-HTTPS redirect. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#force_https Config#force_https}
  */
  readonly forceHttps?: boolean | cdktf.IResolvable;
  /**
  * The DNS-over-Quic (DoQ) port. Set to `0` to disable. Defaults to `853`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#port_dns_over_quic Config#port_dns_over_quic}
  */
  readonly portDnsOverQuic?: number;
  /**
  * The DNS-over-TLS (DoT) port. Set to `0` to disable. Defaults to `853`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#port_dns_over_tls Config#port_dns_over_tls}
  */
  readonly portDnsOverTls?: number;
  /**
  * The HTTPS port. Set to `0` to disable. Defaults to `443`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#port_https Config#port_https}
  */
  readonly portHttps?: number;
  /**
  * The private key. Supply either a path to a file or a base64 encoded string of the private key in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#private_key Config#private_key}
  */
  readonly privateKey: string;
  /**
  * When `true`, plain DNS is allowed for incoming requests. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#serve_plain_dns Config#serve_plain_dns}
  */
  readonly servePlainDns?: boolean | cdktf.IResolvable;
  /**
  * The hostname of the TLS/HTTPS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#server_name Config#server_name}
  */
  readonly serverName: string;
}

export function configTlsToTerraform(struct?: ConfigTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    force_https: cdktf.booleanToTerraform(struct!.forceHttps),
    port_dns_over_quic: cdktf.numberToTerraform(struct!.portDnsOverQuic),
    port_dns_over_tls: cdktf.numberToTerraform(struct!.portDnsOverTls),
    port_https: cdktf.numberToTerraform(struct!.portHttps),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    serve_plain_dns: cdktf.booleanToTerraform(struct!.servePlainDns),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function configTlsToHclTerraform(struct?: ConfigTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
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
    force_https: {
      value: cdktf.booleanToHclTerraform(struct!.forceHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_dns_over_quic: {
      value: cdktf.numberToHclTerraform(struct!.portDnsOverQuic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_dns_over_tls: {
      value: cdktf.numberToHclTerraform(struct!.portDnsOverTls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_https: {
      value: cdktf.numberToHclTerraform(struct!.portHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serve_plain_dns: {
      value: cdktf.booleanToHclTerraform(struct!.servePlainDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._forceHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceHttps = this._forceHttps;
    }
    if (this._portDnsOverQuic !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDnsOverQuic = this._portDnsOverQuic;
    }
    if (this._portDnsOverTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDnsOverTls = this._portDnsOverTls;
    }
    if (this._portHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHttps = this._portHttps;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._servePlainDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.servePlainDns = this._servePlainDns;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain = undefined;
      this._enabled = undefined;
      this._forceHttps = undefined;
      this._portDnsOverQuic = undefined;
      this._portDnsOverTls = undefined;
      this._portHttps = undefined;
      this._privateKey = undefined;
      this._servePlainDns = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain = value.certificateChain;
      this._enabled = value.enabled;
      this._forceHttps = value.forceHttps;
      this._portDnsOverQuic = value.portDnsOverQuic;
      this._portDnsOverTls = value.portDnsOverTls;
      this._portHttps = value.portHttps;
      this._privateKey = value.privateKey;
      this._servePlainDns = value.servePlainDns;
      this._serverName = value.serverName;
    }
  }

  // certificate_chain - computed: true, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return this.getListAttribute('dns_names');
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

  // force_https - computed: true, optional: true, required: false
  private _forceHttps?: boolean | cdktf.IResolvable; 
  public get forceHttps() {
    return this.getBooleanAttribute('force_https');
  }
  public set forceHttps(value: boolean | cdktf.IResolvable) {
    this._forceHttps = value;
  }
  public resetForceHttps() {
    this._forceHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceHttpsInput() {
    return this._forceHttps;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // port_dns_over_quic - computed: true, optional: true, required: false
  private _portDnsOverQuic?: number; 
  public get portDnsOverQuic() {
    return this.getNumberAttribute('port_dns_over_quic');
  }
  public set portDnsOverQuic(value: number) {
    this._portDnsOverQuic = value;
  }
  public resetPortDnsOverQuic() {
    this._portDnsOverQuic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDnsOverQuicInput() {
    return this._portDnsOverQuic;
  }

  // port_dns_over_tls - computed: true, optional: true, required: false
  private _portDnsOverTls?: number; 
  public get portDnsOverTls() {
    return this.getNumberAttribute('port_dns_over_tls');
  }
  public set portDnsOverTls(value: number) {
    this._portDnsOverTls = value;
  }
  public resetPortDnsOverTls() {
    this._portDnsOverTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDnsOverTlsInput() {
    return this._portDnsOverTls;
  }

  // port_https - computed: true, optional: true, required: false
  private _portHttps?: number; 
  public get portHttps() {
    return this.getNumberAttribute('port_https');
  }
  public set portHttps(value: number) {
    this._portHttps = value;
  }
  public resetPortHttps() {
    this._portHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHttpsInput() {
    return this._portHttps;
  }

  // private_key - computed: true, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_saved - computed: true, optional: false, required: false
  public get privateKeySaved() {
    return this.getBooleanAttribute('private_key_saved');
  }

  // serve_plain_dns - computed: true, optional: true, required: false
  private _servePlainDns?: boolean | cdktf.IResolvable; 
  public get servePlainDns() {
    return this.getBooleanAttribute('serve_plain_dns');
  }
  public set servePlainDns(value: boolean | cdktf.IResolvable) {
    this._servePlainDns = value;
  }
  public resetServePlainDns() {
    this._servePlainDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servePlainDnsInput() {
    return this._servePlainDns;
  }

  // server_name - computed: true, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // valid_cert - computed: true, optional: false, required: false
  public get validCert() {
    return this.getBooleanAttribute('valid_cert');
  }

  // valid_chain - computed: true, optional: false, required: false
  public get validChain() {
    return this.getBooleanAttribute('valid_chain');
  }

  // valid_key - computed: true, optional: false, required: false
  public get validKey() {
    return this.getBooleanAttribute('valid_key');
  }

  // valid_pair - computed: true, optional: false, required: false
  public get validPair() {
    return this.getBooleanAttribute('valid_pair');
  }

  // warning_validation - computed: true, optional: false, required: false
  public get warningValidation() {
    return this.getStringAttribute('warning_validation');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config adguard_config}
*/
export class Config extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adguard_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Config resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Config to import
  * @param importFromId The id of the existing Config that should be imported. Refer to the {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Config to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adguard_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/resources/config adguard_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'adguard_config',
      terraformGeneratorMetadata: {
        providerName: 'adguard',
        providerVersion: '1.6.2'
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
    this._dhcp.internalValue = config.dhcp;
    this._dns.internalValue = config.dns;
    this._filtering.internalValue = config.filtering;
    this._parentalControl = config.parentalControl;
    this._querylog.internalValue = config.querylog;
    this._safebrowsing = config.safebrowsing;
    this._safesearch.internalValue = config.safesearch;
    this._stats.internalValue = config.stats;
    this._tls.internalValue = config.tls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_services - computed: true, optional: true, required: false
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
  private _blockedServicesPauseSchedule = new ConfigBlockedServicesPauseScheduleOutputReference(this, "blocked_services_pause_schedule");
  public get blockedServicesPauseSchedule() {
    return this._blockedServicesPauseSchedule;
  }
  public putBlockedServicesPauseSchedule(value: ConfigBlockedServicesPauseSchedule) {
    this._blockedServicesPauseSchedule.internalValue = value;
  }
  public resetBlockedServicesPauseSchedule() {
    this._blockedServicesPauseSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedServicesPauseScheduleInput() {
    return this._blockedServicesPauseSchedule.internalValue;
  }

  // dhcp - computed: true, optional: true, required: false
  private _dhcp = new ConfigDhcpOutputReference(this, "dhcp");
  public get dhcp() {
    return this._dhcp;
  }
  public putDhcp(value: ConfigDhcp) {
    this._dhcp.internalValue = value;
  }
  public resetDhcp() {
    this._dhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp.internalValue;
  }

  // dns - computed: true, optional: true, required: false
  private _dns = new ConfigDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: ConfigDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // filtering - computed: true, optional: true, required: false
  private _filtering = new ConfigFilteringOutputReference(this, "filtering");
  public get filtering() {
    return this._filtering;
  }
  public putFiltering(value: ConfigFiltering) {
    this._filtering.internalValue = value;
  }
  public resetFiltering() {
    this._filtering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringInput() {
    return this._filtering.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parental_control - computed: true, optional: true, required: false
  private _parentalControl?: boolean | cdktf.IResolvable; 
  public get parentalControl() {
    return this.getBooleanAttribute('parental_control');
  }
  public set parentalControl(value: boolean | cdktf.IResolvable) {
    this._parentalControl = value;
  }
  public resetParentalControl() {
    this._parentalControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentalControlInput() {
    return this._parentalControl;
  }

  // querylog - computed: true, optional: true, required: false
  private _querylog = new ConfigQuerylogOutputReference(this, "querylog");
  public get querylog() {
    return this._querylog;
  }
  public putQuerylog(value: ConfigQuerylog) {
    this._querylog.internalValue = value;
  }
  public resetQuerylog() {
    this._querylog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querylogInput() {
    return this._querylog.internalValue;
  }

  // safebrowsing - computed: true, optional: true, required: false
  private _safebrowsing?: boolean | cdktf.IResolvable; 
  public get safebrowsing() {
    return this.getBooleanAttribute('safebrowsing');
  }
  public set safebrowsing(value: boolean | cdktf.IResolvable) {
    this._safebrowsing = value;
  }
  public resetSafebrowsing() {
    this._safebrowsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safebrowsingInput() {
    return this._safebrowsing;
  }

  // safesearch - computed: true, optional: true, required: false
  private _safesearch = new ConfigSafesearchOutputReference(this, "safesearch");
  public get safesearch() {
    return this._safesearch;
  }
  public putSafesearch(value: ConfigSafesearch) {
    this._safesearch.internalValue = value;
  }
  public resetSafesearch() {
    this._safesearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safesearchInput() {
    return this._safesearch.internalValue;
  }

  // stats - computed: true, optional: true, required: false
  private _stats = new ConfigStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: ConfigStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConfigTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConfigTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedServices),
      blocked_services_pause_schedule: configBlockedServicesPauseScheduleToTerraform(this._blockedServicesPauseSchedule.internalValue),
      dhcp: configDhcpToTerraform(this._dhcp.internalValue),
      dns: configDnsToTerraform(this._dns.internalValue),
      filtering: configFilteringToTerraform(this._filtering.internalValue),
      parental_control: cdktf.booleanToTerraform(this._parentalControl),
      querylog: configQuerylogToTerraform(this._querylog.internalValue),
      safebrowsing: cdktf.booleanToTerraform(this._safebrowsing),
      safesearch: configSafesearchToTerraform(this._safesearch.internalValue),
      stats: configStatsToTerraform(this._stats.internalValue),
      tls: configTlsToTerraform(this._tls.internalValue),
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
        value: configBlockedServicesPauseScheduleToHclTerraform(this._blockedServicesPauseSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigBlockedServicesPauseSchedule",
      },
      dhcp: {
        value: configDhcpToHclTerraform(this._dhcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigDhcp",
      },
      dns: {
        value: configDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigDns",
      },
      filtering: {
        value: configFilteringToHclTerraform(this._filtering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigFiltering",
      },
      parental_control: {
        value: cdktf.booleanToHclTerraform(this._parentalControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      querylog: {
        value: configQuerylogToHclTerraform(this._querylog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigQuerylog",
      },
      safebrowsing: {
        value: cdktf.booleanToHclTerraform(this._safebrowsing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      safesearch: {
        value: configSafesearchToHclTerraform(this._safesearch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigSafesearch",
      },
      stats: {
        value: configStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigStats",
      },
      tls: {
        value: configTlsToHclTerraform(this._tls.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigTls",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
