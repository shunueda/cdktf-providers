// https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAdguardConfigConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAdguardConfigBlockedServicesPauseScheduleFri {
}

export function dataAdguardConfigBlockedServicesPauseScheduleFriToTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleFri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigBlockedServicesPauseScheduleFriToHclTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleFri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigBlockedServicesPauseScheduleFriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigBlockedServicesPauseScheduleFri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigBlockedServicesPauseScheduleFri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataAdguardConfigBlockedServicesPauseScheduleMon {
}

export function dataAdguardConfigBlockedServicesPauseScheduleMonToTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleMon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigBlockedServicesPauseScheduleMonToHclTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleMon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigBlockedServicesPauseScheduleMonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigBlockedServicesPauseScheduleMon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigBlockedServicesPauseScheduleMon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataAdguardConfigBlockedServicesPauseScheduleSat {
}

export function dataAdguardConfigBlockedServicesPauseScheduleSatToTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleSat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigBlockedServicesPauseScheduleSatToHclTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleSat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigBlockedServicesPauseScheduleSatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigBlockedServicesPauseScheduleSat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigBlockedServicesPauseScheduleSat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataAdguardConfigBlockedServicesPauseScheduleSun {
}

export function dataAdguardConfigBlockedServicesPauseScheduleSunToTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleSun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigBlockedServicesPauseScheduleSunToHclTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleSun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigBlockedServicesPauseScheduleSunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigBlockedServicesPauseScheduleSun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigBlockedServicesPauseScheduleSun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataAdguardConfigBlockedServicesPauseScheduleThu {
}

export function dataAdguardConfigBlockedServicesPauseScheduleThuToTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleThu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigBlockedServicesPauseScheduleThuToHclTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleThu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigBlockedServicesPauseScheduleThuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigBlockedServicesPauseScheduleThu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigBlockedServicesPauseScheduleThu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataAdguardConfigBlockedServicesPauseScheduleTue {
}

export function dataAdguardConfigBlockedServicesPauseScheduleTueToTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleTue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigBlockedServicesPauseScheduleTueToHclTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleTue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigBlockedServicesPauseScheduleTueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigBlockedServicesPauseScheduleTue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigBlockedServicesPauseScheduleTue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataAdguardConfigBlockedServicesPauseScheduleWed {
}

export function dataAdguardConfigBlockedServicesPauseScheduleWedToTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleWed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigBlockedServicesPauseScheduleWedToHclTerraform(struct?: DataAdguardConfigBlockedServicesPauseScheduleWed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigBlockedServicesPauseScheduleWedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigBlockedServicesPauseScheduleWed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigBlockedServicesPauseScheduleWed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataAdguardConfigBlockedServicesPauseSchedule {
}

export function dataAdguardConfigBlockedServicesPauseScheduleToTerraform(struct?: DataAdguardConfigBlockedServicesPauseSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigBlockedServicesPauseScheduleToHclTerraform(struct?: DataAdguardConfigBlockedServicesPauseSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigBlockedServicesPauseScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigBlockedServicesPauseSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigBlockedServicesPauseSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fri - computed: true, optional: false, required: false
  private _fri = new DataAdguardConfigBlockedServicesPauseScheduleFriOutputReference(this, "fri");
  public get fri() {
    return this._fri;
  }

  // mon - computed: true, optional: false, required: false
  private _mon = new DataAdguardConfigBlockedServicesPauseScheduleMonOutputReference(this, "mon");
  public get mon() {
    return this._mon;
  }

  // sat - computed: true, optional: false, required: false
  private _sat = new DataAdguardConfigBlockedServicesPauseScheduleSatOutputReference(this, "sat");
  public get sat() {
    return this._sat;
  }

  // sun - computed: true, optional: false, required: false
  private _sun = new DataAdguardConfigBlockedServicesPauseScheduleSunOutputReference(this, "sun");
  public get sun() {
    return this._sun;
  }

  // thu - computed: true, optional: false, required: false
  private _thu = new DataAdguardConfigBlockedServicesPauseScheduleThuOutputReference(this, "thu");
  public get thu() {
    return this._thu;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // tue - computed: true, optional: false, required: false
  private _tue = new DataAdguardConfigBlockedServicesPauseScheduleTueOutputReference(this, "tue");
  public get tue() {
    return this._tue;
  }

  // wed - computed: true, optional: false, required: false
  private _wed = new DataAdguardConfigBlockedServicesPauseScheduleWedOutputReference(this, "wed");
  public get wed() {
    return this._wed;
  }
}
export interface DataAdguardConfigDhcpIpv4Settings {
}

export function dataAdguardConfigDhcpIpv4SettingsToTerraform(struct?: DataAdguardConfigDhcpIpv4Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigDhcpIpv4SettingsToHclTerraform(struct?: DataAdguardConfigDhcpIpv4Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigDhcpIpv4SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigDhcpIpv4Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigDhcpIpv4Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway_ip - computed: true, optional: false, required: false
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // range_end - computed: true, optional: false, required: false
  public get rangeEnd() {
    return this.getStringAttribute('range_end');
  }

  // range_start - computed: true, optional: false, required: false
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
}
export interface DataAdguardConfigDhcpIpv6Settings {
}

export function dataAdguardConfigDhcpIpv6SettingsToTerraform(struct?: DataAdguardConfigDhcpIpv6Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigDhcpIpv6SettingsToHclTerraform(struct?: DataAdguardConfigDhcpIpv6Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigDhcpIpv6SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigDhcpIpv6Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigDhcpIpv6Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // range_start - computed: true, optional: false, required: false
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }
}
export interface DataAdguardConfigDhcpLeases {
}

export function dataAdguardConfigDhcpLeasesToTerraform(struct?: DataAdguardConfigDhcpLeases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigDhcpLeasesToHclTerraform(struct?: DataAdguardConfigDhcpLeases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigDhcpLeasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAdguardConfigDhcpLeases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigDhcpLeases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }
}

export class DataAdguardConfigDhcpLeasesList extends cdktf.ComplexList {

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
  public get(index: number): DataAdguardConfigDhcpLeasesOutputReference {
    return new DataAdguardConfigDhcpLeasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAdguardConfigDhcpStaticLeases {
}

export function dataAdguardConfigDhcpStaticLeasesToTerraform(struct?: DataAdguardConfigDhcpStaticLeases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigDhcpStaticLeasesToHclTerraform(struct?: DataAdguardConfigDhcpStaticLeases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigDhcpStaticLeasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAdguardConfigDhcpStaticLeases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigDhcpStaticLeases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }
}

export class DataAdguardConfigDhcpStaticLeasesList extends cdktf.ComplexList {

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
  public get(index: number): DataAdguardConfigDhcpStaticLeasesOutputReference {
    return new DataAdguardConfigDhcpStaticLeasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAdguardConfigDhcp {
}

export function dataAdguardConfigDhcpToTerraform(struct?: DataAdguardConfigDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigDhcpToHclTerraform(struct?: DataAdguardConfigDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigDhcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigDhcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ipv4_settings - computed: true, optional: false, required: false
  private _ipv4Settings = new DataAdguardConfigDhcpIpv4SettingsOutputReference(this, "ipv4_settings");
  public get ipv4Settings() {
    return this._ipv4Settings;
  }

  // ipv6_settings - computed: true, optional: false, required: false
  private _ipv6Settings = new DataAdguardConfigDhcpIpv6SettingsOutputReference(this, "ipv6_settings");
  public get ipv6Settings() {
    return this._ipv6Settings;
  }

  // leases - computed: true, optional: false, required: false
  private _leases = new DataAdguardConfigDhcpLeasesList(this, "leases", false);
  public get leases() {
    return this._leases;
  }

  // static_leases - computed: true, optional: false, required: false
  private _staticLeases = new DataAdguardConfigDhcpStaticLeasesList(this, "static_leases", true);
  public get staticLeases() {
    return this._staticLeases;
  }
}
export interface DataAdguardConfigDns {
}

export function dataAdguardConfigDnsToTerraform(struct?: DataAdguardConfigDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigDnsToHclTerraform(struct?: DataAdguardConfigDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_clients - computed: true, optional: false, required: false
  public get allowedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_clients'));
  }

  // blocked_hosts - computed: true, optional: false, required: false
  public get blockedHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_hosts'));
  }

  // blocked_response_ttl - computed: true, optional: false, required: false
  public get blockedResponseTtl() {
    return this.getNumberAttribute('blocked_response_ttl');
  }

  // blocking_ipv4 - computed: true, optional: false, required: false
  public get blockingIpv4() {
    return this.getStringAttribute('blocking_ipv4');
  }

  // blocking_ipv6 - computed: true, optional: false, required: false
  public get blockingIpv6() {
    return this.getStringAttribute('blocking_ipv6');
  }

  // blocking_mode - computed: true, optional: false, required: false
  public get blockingMode() {
    return this.getStringAttribute('blocking_mode');
  }

  // bootstrap_dns - computed: true, optional: false, required: false
  public get bootstrapDns() {
    return this.getListAttribute('bootstrap_dns');
  }

  // cache_optimistic - computed: true, optional: false, required: false
  public get cacheOptimistic() {
    return this.getBooleanAttribute('cache_optimistic');
  }

  // cache_size - computed: true, optional: false, required: false
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }

  // cache_ttl_max - computed: true, optional: false, required: false
  public get cacheTtlMax() {
    return this.getNumberAttribute('cache_ttl_max');
  }

  // cache_ttl_min - computed: true, optional: false, required: false
  public get cacheTtlMin() {
    return this.getNumberAttribute('cache_ttl_min');
  }

  // disable_ipv6 - computed: true, optional: false, required: false
  public get disableIpv6() {
    return this.getBooleanAttribute('disable_ipv6');
  }

  // disallowed_clients - computed: true, optional: false, required: false
  public get disallowedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('disallowed_clients'));
  }

  // dnssec_enabled - computed: true, optional: false, required: false
  public get dnssecEnabled() {
    return this.getBooleanAttribute('dnssec_enabled');
  }

  // edns_cs_custom_ip - computed: true, optional: false, required: false
  public get ednsCsCustomIp() {
    return this.getStringAttribute('edns_cs_custom_ip');
  }

  // edns_cs_enabled - computed: true, optional: false, required: false
  public get ednsCsEnabled() {
    return this.getBooleanAttribute('edns_cs_enabled');
  }

  // edns_cs_use_custom - computed: true, optional: false, required: false
  public get ednsCsUseCustom() {
    return this.getBooleanAttribute('edns_cs_use_custom');
  }

  // fallback_dns - computed: true, optional: false, required: false
  public get fallbackDns() {
    return this.getListAttribute('fallback_dns');
  }

  // local_ptr_upstreams - computed: true, optional: false, required: false
  public get localPtrUpstreams() {
    return cdktf.Fn.tolist(this.getListAttribute('local_ptr_upstreams'));
  }

  // protection_enabled - computed: true, optional: false, required: false
  public get protectionEnabled() {
    return this.getBooleanAttribute('protection_enabled');
  }

  // rate_limit - computed: true, optional: false, required: false
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }

  // rate_limit_subnet_len_ipv4 - computed: true, optional: false, required: false
  public get rateLimitSubnetLenIpv4() {
    return this.getNumberAttribute('rate_limit_subnet_len_ipv4');
  }

  // rate_limit_subnet_len_ipv6 - computed: true, optional: false, required: false
  public get rateLimitSubnetLenIpv6() {
    return this.getNumberAttribute('rate_limit_subnet_len_ipv6');
  }

  // rate_limit_whitelist - computed: true, optional: false, required: false
  public get rateLimitWhitelist() {
    return this.getListAttribute('rate_limit_whitelist');
  }

  // resolve_clients - computed: true, optional: false, required: false
  public get resolveClients() {
    return this.getBooleanAttribute('resolve_clients');
  }

  // upstream_dns - computed: true, optional: false, required: false
  public get upstreamDns() {
    return this.getListAttribute('upstream_dns');
  }

  // upstream_mode - computed: true, optional: false, required: false
  public get upstreamMode() {
    return this.getStringAttribute('upstream_mode');
  }

  // upstream_timeout - computed: true, optional: false, required: false
  public get upstreamTimeout() {
    return this.getNumberAttribute('upstream_timeout');
  }

  // use_private_ptr_resolvers - computed: true, optional: false, required: false
  public get usePrivatePtrResolvers() {
    return this.getBooleanAttribute('use_private_ptr_resolvers');
  }
}
export interface DataAdguardConfigFiltering {
}

export function dataAdguardConfigFilteringToTerraform(struct?: DataAdguardConfigFiltering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigFilteringToHclTerraform(struct?: DataAdguardConfigFiltering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigFilteringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigFiltering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigFiltering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // update_interval - computed: true, optional: false, required: false
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
}
export interface DataAdguardConfigQuerylog {
}

export function dataAdguardConfigQuerylogToTerraform(struct?: DataAdguardConfigQuerylog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigQuerylogToHclTerraform(struct?: DataAdguardConfigQuerylog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigQuerylogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigQuerylog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigQuerylog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anonymize_client_ip - computed: true, optional: false, required: false
  public get anonymizeClientIp() {
    return this.getBooleanAttribute('anonymize_client_ip');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ignored - computed: true, optional: false, required: false
  public get ignored() {
    return cdktf.Fn.tolist(this.getListAttribute('ignored'));
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }
}
export interface DataAdguardConfigSafesearch {
}

export function dataAdguardConfigSafesearchToTerraform(struct?: DataAdguardConfigSafesearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigSafesearchToHclTerraform(struct?: DataAdguardConfigSafesearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigSafesearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigSafesearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigSafesearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
}
export interface DataAdguardConfigStats {
}

export function dataAdguardConfigStatsToTerraform(struct?: DataAdguardConfigStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigStatsToHclTerraform(struct?: DataAdguardConfigStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ignored - computed: true, optional: false, required: false
  public get ignored() {
    return cdktf.Fn.tolist(this.getListAttribute('ignored'));
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }
}
export interface DataAdguardConfigTls {
}

export function dataAdguardConfigTlsToTerraform(struct?: DataAdguardConfigTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardConfigTlsToHclTerraform(struct?: DataAdguardConfigTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardConfigTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardConfigTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardConfigTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // force_https - computed: true, optional: false, required: false
  public get forceHttps() {
    return this.getBooleanAttribute('force_https');
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

  // port_dns_over_quic - computed: true, optional: false, required: false
  public get portDnsOverQuic() {
    return this.getNumberAttribute('port_dns_over_quic');
  }

  // port_dns_over_tls - computed: true, optional: false, required: false
  public get portDnsOverTls() {
    return this.getNumberAttribute('port_dns_over_tls');
  }

  // port_https - computed: true, optional: false, required: false
  public get portHttps() {
    return this.getNumberAttribute('port_https');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_saved - computed: true, optional: false, required: false
  public get privateKeySaved() {
    return this.getBooleanAttribute('private_key_saved');
  }

  // serve_plain_dns - computed: true, optional: false, required: false
  public get servePlainDns() {
    return this.getBooleanAttribute('serve_plain_dns');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
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
* Represents a {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/config adguard_config}
*/
export class DataAdguardConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adguard_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAdguardConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAdguardConfig to import
  * @param importFromId The id of the existing DataAdguardConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAdguardConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adguard_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/config adguard_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAdguardConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAdguardConfigConfig = {}) {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_services - computed: true, optional: false, required: false
  public get blockedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_services'));
  }

  // blocked_services_pause_schedule - computed: true, optional: false, required: false
  private _blockedServicesPauseSchedule = new DataAdguardConfigBlockedServicesPauseScheduleOutputReference(this, "blocked_services_pause_schedule");
  public get blockedServicesPauseSchedule() {
    return this._blockedServicesPauseSchedule;
  }

  // dhcp - computed: true, optional: false, required: false
  private _dhcp = new DataAdguardConfigDhcpOutputReference(this, "dhcp");
  public get dhcp() {
    return this._dhcp;
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataAdguardConfigDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }

  // filtering - computed: true, optional: false, required: false
  private _filtering = new DataAdguardConfigFilteringOutputReference(this, "filtering");
  public get filtering() {
    return this._filtering;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parental_control - computed: true, optional: false, required: false
  public get parentalControl() {
    return this.getBooleanAttribute('parental_control');
  }

  // querylog - computed: true, optional: false, required: false
  private _querylog = new DataAdguardConfigQuerylogOutputReference(this, "querylog");
  public get querylog() {
    return this._querylog;
  }

  // safebrowsing - computed: true, optional: false, required: false
  public get safebrowsing() {
    return this.getBooleanAttribute('safebrowsing');
  }

  // safesearch - computed: true, optional: false, required: false
  private _safesearch = new DataAdguardConfigSafesearchOutputReference(this, "safesearch");
  public get safesearch() {
    return this._safesearch;
  }

  // stats - computed: true, optional: false, required: false
  private _stats = new DataAdguardConfigStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataAdguardConfigTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
