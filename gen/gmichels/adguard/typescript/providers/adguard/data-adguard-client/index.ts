// https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAdguardClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/client#name DataAdguardClient#name}
  */
  readonly name: string;
}
export interface DataAdguardClientBlockedServicesPauseScheduleFri {
}

export function dataAdguardClientBlockedServicesPauseScheduleFriToTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleFri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardClientBlockedServicesPauseScheduleFriToHclTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleFri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardClientBlockedServicesPauseScheduleFriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardClientBlockedServicesPauseScheduleFri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardClientBlockedServicesPauseScheduleFri | undefined) {
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
export interface DataAdguardClientBlockedServicesPauseScheduleMon {
}

export function dataAdguardClientBlockedServicesPauseScheduleMonToTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleMon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardClientBlockedServicesPauseScheduleMonToHclTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleMon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardClientBlockedServicesPauseScheduleMonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardClientBlockedServicesPauseScheduleMon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardClientBlockedServicesPauseScheduleMon | undefined) {
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
export interface DataAdguardClientBlockedServicesPauseScheduleSat {
}

export function dataAdguardClientBlockedServicesPauseScheduleSatToTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleSat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardClientBlockedServicesPauseScheduleSatToHclTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleSat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardClientBlockedServicesPauseScheduleSatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardClientBlockedServicesPauseScheduleSat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardClientBlockedServicesPauseScheduleSat | undefined) {
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
export interface DataAdguardClientBlockedServicesPauseScheduleSun {
}

export function dataAdguardClientBlockedServicesPauseScheduleSunToTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleSun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardClientBlockedServicesPauseScheduleSunToHclTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleSun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardClientBlockedServicesPauseScheduleSunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardClientBlockedServicesPauseScheduleSun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardClientBlockedServicesPauseScheduleSun | undefined) {
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
export interface DataAdguardClientBlockedServicesPauseScheduleThu {
}

export function dataAdguardClientBlockedServicesPauseScheduleThuToTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleThu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardClientBlockedServicesPauseScheduleThuToHclTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleThu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardClientBlockedServicesPauseScheduleThuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardClientBlockedServicesPauseScheduleThu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardClientBlockedServicesPauseScheduleThu | undefined) {
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
export interface DataAdguardClientBlockedServicesPauseScheduleTue {
}

export function dataAdguardClientBlockedServicesPauseScheduleTueToTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleTue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardClientBlockedServicesPauseScheduleTueToHclTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleTue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardClientBlockedServicesPauseScheduleTueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardClientBlockedServicesPauseScheduleTue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardClientBlockedServicesPauseScheduleTue | undefined) {
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
export interface DataAdguardClientBlockedServicesPauseScheduleWed {
}

export function dataAdguardClientBlockedServicesPauseScheduleWedToTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleWed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardClientBlockedServicesPauseScheduleWedToHclTerraform(struct?: DataAdguardClientBlockedServicesPauseScheduleWed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardClientBlockedServicesPauseScheduleWedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardClientBlockedServicesPauseScheduleWed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardClientBlockedServicesPauseScheduleWed | undefined) {
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
export interface DataAdguardClientBlockedServicesPauseSchedule {
}

export function dataAdguardClientBlockedServicesPauseScheduleToTerraform(struct?: DataAdguardClientBlockedServicesPauseSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardClientBlockedServicesPauseScheduleToHclTerraform(struct?: DataAdguardClientBlockedServicesPauseSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardClientBlockedServicesPauseScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardClientBlockedServicesPauseSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardClientBlockedServicesPauseSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fri - computed: true, optional: false, required: false
  private _fri = new DataAdguardClientBlockedServicesPauseScheduleFriOutputReference(this, "fri");
  public get fri() {
    return this._fri;
  }

  // mon - computed: true, optional: false, required: false
  private _mon = new DataAdguardClientBlockedServicesPauseScheduleMonOutputReference(this, "mon");
  public get mon() {
    return this._mon;
  }

  // sat - computed: true, optional: false, required: false
  private _sat = new DataAdguardClientBlockedServicesPauseScheduleSatOutputReference(this, "sat");
  public get sat() {
    return this._sat;
  }

  // sun - computed: true, optional: false, required: false
  private _sun = new DataAdguardClientBlockedServicesPauseScheduleSunOutputReference(this, "sun");
  public get sun() {
    return this._sun;
  }

  // thu - computed: true, optional: false, required: false
  private _thu = new DataAdguardClientBlockedServicesPauseScheduleThuOutputReference(this, "thu");
  public get thu() {
    return this._thu;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // tue - computed: true, optional: false, required: false
  private _tue = new DataAdguardClientBlockedServicesPauseScheduleTueOutputReference(this, "tue");
  public get tue() {
    return this._tue;
  }

  // wed - computed: true, optional: false, required: false
  private _wed = new DataAdguardClientBlockedServicesPauseScheduleWedOutputReference(this, "wed");
  public get wed() {
    return this._wed;
  }
}
export interface DataAdguardClientSafesearch {
}

export function dataAdguardClientSafesearchToTerraform(struct?: DataAdguardClientSafesearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAdguardClientSafesearchToHclTerraform(struct?: DataAdguardClientSafesearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAdguardClientSafesearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAdguardClientSafesearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAdguardClientSafesearch | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/client adguard_client}
*/
export class DataAdguardClient extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adguard_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAdguardClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAdguardClient to import
  * @param importFromId The id of the existing DataAdguardClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAdguardClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adguard_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/client adguard_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAdguardClientConfig
  */
  public constructor(scope: Construct, id: string, config: DataAdguardClientConfig) {
    super(scope, id, {
      terraformResourceType: 'adguard_client',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_services - computed: true, optional: false, required: false
  public get blockedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_services'));
  }

  // blocked_services_pause_schedule - computed: true, optional: false, required: false
  private _blockedServicesPauseSchedule = new DataAdguardClientBlockedServicesPauseScheduleOutputReference(this, "blocked_services_pause_schedule");
  public get blockedServicesPauseSchedule() {
    return this._blockedServicesPauseSchedule;
  }

  // filtering_enabled - computed: true, optional: false, required: false
  public get filteringEnabled() {
    return this.getBooleanAttribute('filtering_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // ignore_querylog - computed: true, optional: false, required: false
  public get ignoreQuerylog() {
    return this.getBooleanAttribute('ignore_querylog');
  }

  // ignore_statistics - computed: true, optional: false, required: false
  public get ignoreStatistics() {
    return this.getBooleanAttribute('ignore_statistics');
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

  // parental_enabled - computed: true, optional: false, required: false
  public get parentalEnabled() {
    return this.getBooleanAttribute('parental_enabled');
  }

  // safebrowsing_enabled - computed: true, optional: false, required: false
  public get safebrowsingEnabled() {
    return this.getBooleanAttribute('safebrowsing_enabled');
  }

  // safesearch - computed: true, optional: false, required: false
  private _safesearch = new DataAdguardClientSafesearchOutputReference(this, "safesearch");
  public get safesearch() {
    return this._safesearch;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // upstreams - computed: true, optional: false, required: false
  public get upstreams() {
    return this.getListAttribute('upstreams');
  }

  // upstreams_cache_enabled - computed: true, optional: false, required: false
  public get upstreamsCacheEnabled() {
    return this.getBooleanAttribute('upstreams_cache_enabled');
  }

  // upstreams_cache_size - computed: true, optional: false, required: false
  public get upstreamsCacheSize() {
    return this.getNumberAttribute('upstreams_cache_size');
  }

  // use_global_blocked_services - computed: true, optional: false, required: false
  public get useGlobalBlockedServices() {
    return this.getBooleanAttribute('use_global_blocked_services');
  }

  // use_global_settings - computed: true, optional: false, required: false
  public get useGlobalSettings() {
    return this.getBooleanAttribute('use_global_settings');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
