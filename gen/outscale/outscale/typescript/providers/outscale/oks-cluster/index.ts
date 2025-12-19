// https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#admin_lbu OksCluster#admin_lbu}
  */
  readonly adminLbu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#admin_whitelist OksCluster#admin_whitelist}
  */
  readonly adminWhitelist: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#admission_flags OksCluster#admission_flags}
  */
  readonly admissionFlags?: OksClusterAdmissionFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#auto_maintenances OksCluster#auto_maintenances}
  */
  readonly autoMaintenances?: OksClusterAutoMaintenances;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#cidr_pods OksCluster#cidr_pods}
  */
  readonly cidrPods: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#cidr_service OksCluster#cidr_service}
  */
  readonly cidrService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#cluster_dns OksCluster#cluster_dns}
  */
  readonly clusterDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#control_planes OksCluster#control_planes}
  */
  readonly controlPlanes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#cp_multi_az OksCluster#cp_multi_az}
  */
  readonly cpMultiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#cp_subregions OksCluster#cp_subregions}
  */
  readonly cpSubregions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#description OksCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#disable_api_termination OksCluster#disable_api_termination}
  */
  readonly disableApiTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#name OksCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#project_id OksCluster#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#quirks OksCluster#quirks}
  */
  readonly quirks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#tags OksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#version OksCluster#version}
  */
  readonly version: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#timeouts OksCluster#timeouts}
  */
  readonly timeouts?: OksClusterTimeouts;
}
export interface OksClusterAdmissionFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#disable_admission_plugins OksCluster#disable_admission_plugins}
  */
  readonly disableAdmissionPlugins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#enable_admission_plugins OksCluster#enable_admission_plugins}
  */
  readonly enableAdmissionPlugins?: string[];
}

export function oksClusterAdmissionFlagsToTerraform(struct?: OksClusterAdmissionFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_admission_plugins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disableAdmissionPlugins),
    enable_admission_plugins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableAdmissionPlugins),
  }
}


export function oksClusterAdmissionFlagsToHclTerraform(struct?: OksClusterAdmissionFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_admission_plugins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disableAdmissionPlugins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_admission_plugins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableAdmissionPlugins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OksClusterAdmissionFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OksClusterAdmissionFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAdmissionPlugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAdmissionPlugins = this._disableAdmissionPlugins;
    }
    if (this._enableAdmissionPlugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAdmissionPlugins = this._enableAdmissionPlugins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OksClusterAdmissionFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAdmissionPlugins = undefined;
      this._enableAdmissionPlugins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAdmissionPlugins = value.disableAdmissionPlugins;
      this._enableAdmissionPlugins = value.enableAdmissionPlugins;
    }
  }

  // applied_admission_plugins - computed: true, optional: false, required: false
  public get appliedAdmissionPlugins() {
    return cdktf.Fn.tolist(this.getListAttribute('applied_admission_plugins'));
  }

  // disable_admission_plugins - computed: true, optional: true, required: false
  private _disableAdmissionPlugins?: string[]; 
  public get disableAdmissionPlugins() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_admission_plugins'));
  }
  public set disableAdmissionPlugins(value: string[]) {
    this._disableAdmissionPlugins = value;
  }
  public resetDisableAdmissionPlugins() {
    this._disableAdmissionPlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAdmissionPluginsInput() {
    return this._disableAdmissionPlugins;
  }

  // disable_admission_plugins_actual - computed: true, optional: false, required: false
  public get disableAdmissionPluginsActual() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_admission_plugins_actual'));
  }

  // enable_admission_plugins - computed: true, optional: true, required: false
  private _enableAdmissionPlugins?: string[]; 
  public get enableAdmissionPlugins() {
    return cdktf.Fn.tolist(this.getListAttribute('enable_admission_plugins'));
  }
  public set enableAdmissionPlugins(value: string[]) {
    this._enableAdmissionPlugins = value;
  }
  public resetEnableAdmissionPlugins() {
    this._enableAdmissionPlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdmissionPluginsInput() {
    return this._enableAdmissionPlugins;
  }

  // enable_admission_plugins_actual - computed: true, optional: false, required: false
  public get enableAdmissionPluginsActual() {
    return cdktf.Fn.tolist(this.getListAttribute('enable_admission_plugins_actual'));
  }
}
export interface OksClusterAutoMaintenancesMinorUpgradeMaintenance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#duration_hours OksCluster#duration_hours}
  */
  readonly durationHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#enabled OksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#start_hour OksCluster#start_hour}
  */
  readonly startHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#tz OksCluster#tz}
  */
  readonly tz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#week_day OksCluster#week_day}
  */
  readonly weekDay?: string;
}

export function oksClusterAutoMaintenancesMinorUpgradeMaintenanceToTerraform(struct?: OksClusterAutoMaintenancesMinorUpgradeMaintenance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_hours: cdktf.numberToTerraform(struct!.durationHours),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    tz: cdktf.stringToTerraform(struct!.tz),
    week_day: cdktf.stringToTerraform(struct!.weekDay),
  }
}


export function oksClusterAutoMaintenancesMinorUpgradeMaintenanceToHclTerraform(struct?: OksClusterAutoMaintenancesMinorUpgradeMaintenance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_hours: {
      value: cdktf.numberToHclTerraform(struct!.durationHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tz: {
      value: cdktf.stringToHclTerraform(struct!.tz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_day: {
      value: cdktf.stringToHclTerraform(struct!.weekDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OksClusterAutoMaintenancesMinorUpgradeMaintenanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OksClusterAutoMaintenancesMinorUpgradeMaintenance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationHours = this._durationHours;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._tz !== undefined) {
      hasAnyValues = true;
      internalValueResult.tz = this._tz;
    }
    if (this._weekDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDay = this._weekDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OksClusterAutoMaintenancesMinorUpgradeMaintenance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationHours = undefined;
      this._enabled = undefined;
      this._startHour = undefined;
      this._tz = undefined;
      this._weekDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationHours = value.durationHours;
      this._enabled = value.enabled;
      this._startHour = value.startHour;
      this._tz = value.tz;
      this._weekDay = value.weekDay;
    }
  }

  // duration_hours - computed: true, optional: true, required: false
  private _durationHours?: number; 
  public get durationHours() {
    return this.getNumberAttribute('duration_hours');
  }
  public set durationHours(value: number) {
    this._durationHours = value;
  }
  public resetDurationHours() {
    this._durationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationHoursInput() {
    return this._durationHours;
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

  // start_hour - computed: true, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // tz - computed: true, optional: true, required: false
  private _tz?: string; 
  public get tz() {
    return this.getStringAttribute('tz');
  }
  public set tz(value: string) {
    this._tz = value;
  }
  public resetTz() {
    this._tz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tzInput() {
    return this._tz;
  }

  // week_day - computed: true, optional: true, required: false
  private _weekDay?: string; 
  public get weekDay() {
    return this.getStringAttribute('week_day');
  }
  public set weekDay(value: string) {
    this._weekDay = value;
  }
  public resetWeekDay() {
    this._weekDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayInput() {
    return this._weekDay;
  }
}
export interface OksClusterAutoMaintenancesMinorUpgradeMaintenanceActual {
}

export function oksClusterAutoMaintenancesMinorUpgradeMaintenanceActualToTerraform(struct?: OksClusterAutoMaintenancesMinorUpgradeMaintenanceActual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oksClusterAutoMaintenancesMinorUpgradeMaintenanceActualToHclTerraform(struct?: OksClusterAutoMaintenancesMinorUpgradeMaintenanceActual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OksClusterAutoMaintenancesMinorUpgradeMaintenanceActualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OksClusterAutoMaintenancesMinorUpgradeMaintenanceActual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OksClusterAutoMaintenancesMinorUpgradeMaintenanceActual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_hours - computed: true, optional: false, required: false
  public get durationHours() {
    return this.getNumberAttribute('duration_hours');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // start_hour - computed: true, optional: false, required: false
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }

  // tz - computed: true, optional: false, required: false
  public get tz() {
    return this.getStringAttribute('tz');
  }

  // week_day - computed: true, optional: false, required: false
  public get weekDay() {
    return this.getStringAttribute('week_day');
  }
}
export interface OksClusterAutoMaintenancesPatchUpgradeMaintenance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#duration_hours OksCluster#duration_hours}
  */
  readonly durationHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#enabled OksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#start_hour OksCluster#start_hour}
  */
  readonly startHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#tz OksCluster#tz}
  */
  readonly tz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#week_day OksCluster#week_day}
  */
  readonly weekDay?: string;
}

export function oksClusterAutoMaintenancesPatchUpgradeMaintenanceToTerraform(struct?: OksClusterAutoMaintenancesPatchUpgradeMaintenance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_hours: cdktf.numberToTerraform(struct!.durationHours),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    tz: cdktf.stringToTerraform(struct!.tz),
    week_day: cdktf.stringToTerraform(struct!.weekDay),
  }
}


export function oksClusterAutoMaintenancesPatchUpgradeMaintenanceToHclTerraform(struct?: OksClusterAutoMaintenancesPatchUpgradeMaintenance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_hours: {
      value: cdktf.numberToHclTerraform(struct!.durationHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tz: {
      value: cdktf.stringToHclTerraform(struct!.tz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_day: {
      value: cdktf.stringToHclTerraform(struct!.weekDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OksClusterAutoMaintenancesPatchUpgradeMaintenanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OksClusterAutoMaintenancesPatchUpgradeMaintenance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationHours = this._durationHours;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._tz !== undefined) {
      hasAnyValues = true;
      internalValueResult.tz = this._tz;
    }
    if (this._weekDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDay = this._weekDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OksClusterAutoMaintenancesPatchUpgradeMaintenance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationHours = undefined;
      this._enabled = undefined;
      this._startHour = undefined;
      this._tz = undefined;
      this._weekDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationHours = value.durationHours;
      this._enabled = value.enabled;
      this._startHour = value.startHour;
      this._tz = value.tz;
      this._weekDay = value.weekDay;
    }
  }

  // duration_hours - computed: true, optional: true, required: false
  private _durationHours?: number; 
  public get durationHours() {
    return this.getNumberAttribute('duration_hours');
  }
  public set durationHours(value: number) {
    this._durationHours = value;
  }
  public resetDurationHours() {
    this._durationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationHoursInput() {
    return this._durationHours;
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

  // start_hour - computed: true, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // tz - computed: true, optional: true, required: false
  private _tz?: string; 
  public get tz() {
    return this.getStringAttribute('tz');
  }
  public set tz(value: string) {
    this._tz = value;
  }
  public resetTz() {
    this._tz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tzInput() {
    return this._tz;
  }

  // week_day - computed: true, optional: true, required: false
  private _weekDay?: string; 
  public get weekDay() {
    return this.getStringAttribute('week_day');
  }
  public set weekDay(value: string) {
    this._weekDay = value;
  }
  public resetWeekDay() {
    this._weekDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayInput() {
    return this._weekDay;
  }
}
export interface OksClusterAutoMaintenancesPatchUpgradeMaintenanceActual {
}

export function oksClusterAutoMaintenancesPatchUpgradeMaintenanceActualToTerraform(struct?: OksClusterAutoMaintenancesPatchUpgradeMaintenanceActual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oksClusterAutoMaintenancesPatchUpgradeMaintenanceActualToHclTerraform(struct?: OksClusterAutoMaintenancesPatchUpgradeMaintenanceActual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OksClusterAutoMaintenancesPatchUpgradeMaintenanceActualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OksClusterAutoMaintenancesPatchUpgradeMaintenanceActual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OksClusterAutoMaintenancesPatchUpgradeMaintenanceActual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_hours - computed: true, optional: false, required: false
  public get durationHours() {
    return this.getNumberAttribute('duration_hours');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // start_hour - computed: true, optional: false, required: false
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }

  // tz - computed: true, optional: false, required: false
  public get tz() {
    return this.getStringAttribute('tz');
  }

  // week_day - computed: true, optional: false, required: false
  public get weekDay() {
    return this.getStringAttribute('week_day');
  }
}
export interface OksClusterAutoMaintenances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#minor_upgrade_maintenance OksCluster#minor_upgrade_maintenance}
  */
  readonly minorUpgradeMaintenance?: OksClusterAutoMaintenancesMinorUpgradeMaintenance;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#patch_upgrade_maintenance OksCluster#patch_upgrade_maintenance}
  */
  readonly patchUpgradeMaintenance?: OksClusterAutoMaintenancesPatchUpgradeMaintenance;
}

export function oksClusterAutoMaintenancesToTerraform(struct?: OksClusterAutoMaintenances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minor_upgrade_maintenance: oksClusterAutoMaintenancesMinorUpgradeMaintenanceToTerraform(struct!.minorUpgradeMaintenance),
    patch_upgrade_maintenance: oksClusterAutoMaintenancesPatchUpgradeMaintenanceToTerraform(struct!.patchUpgradeMaintenance),
  }
}


export function oksClusterAutoMaintenancesToHclTerraform(struct?: OksClusterAutoMaintenances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minor_upgrade_maintenance: {
      value: oksClusterAutoMaintenancesMinorUpgradeMaintenanceToHclTerraform(struct!.minorUpgradeMaintenance),
      isBlock: true,
      type: "struct",
      storageClassType: "OksClusterAutoMaintenancesMinorUpgradeMaintenance",
    },
    patch_upgrade_maintenance: {
      value: oksClusterAutoMaintenancesPatchUpgradeMaintenanceToHclTerraform(struct!.patchUpgradeMaintenance),
      isBlock: true,
      type: "struct",
      storageClassType: "OksClusterAutoMaintenancesPatchUpgradeMaintenance",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OksClusterAutoMaintenancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OksClusterAutoMaintenances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minorUpgradeMaintenance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorUpgradeMaintenance = this._minorUpgradeMaintenance?.internalValue;
    }
    if (this._patchUpgradeMaintenance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchUpgradeMaintenance = this._patchUpgradeMaintenance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OksClusterAutoMaintenances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minorUpgradeMaintenance.internalValue = undefined;
      this._patchUpgradeMaintenance.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minorUpgradeMaintenance.internalValue = value.minorUpgradeMaintenance;
      this._patchUpgradeMaintenance.internalValue = value.patchUpgradeMaintenance;
    }
  }

  // minor_upgrade_maintenance - computed: true, optional: true, required: false
  private _minorUpgradeMaintenance = new OksClusterAutoMaintenancesMinorUpgradeMaintenanceOutputReference(this, "minor_upgrade_maintenance");
  public get minorUpgradeMaintenance() {
    return this._minorUpgradeMaintenance;
  }
  public putMinorUpgradeMaintenance(value: OksClusterAutoMaintenancesMinorUpgradeMaintenance) {
    this._minorUpgradeMaintenance.internalValue = value;
  }
  public resetMinorUpgradeMaintenance() {
    this._minorUpgradeMaintenance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorUpgradeMaintenanceInput() {
    return this._minorUpgradeMaintenance.internalValue;
  }

  // minor_upgrade_maintenance_actual - computed: true, optional: false, required: false
  private _minorUpgradeMaintenanceActual = new OksClusterAutoMaintenancesMinorUpgradeMaintenanceActualOutputReference(this, "minor_upgrade_maintenance_actual");
  public get minorUpgradeMaintenanceActual() {
    return this._minorUpgradeMaintenanceActual;
  }

  // patch_upgrade_maintenance - computed: true, optional: true, required: false
  private _patchUpgradeMaintenance = new OksClusterAutoMaintenancesPatchUpgradeMaintenanceOutputReference(this, "patch_upgrade_maintenance");
  public get patchUpgradeMaintenance() {
    return this._patchUpgradeMaintenance;
  }
  public putPatchUpgradeMaintenance(value: OksClusterAutoMaintenancesPatchUpgradeMaintenance) {
    this._patchUpgradeMaintenance.internalValue = value;
  }
  public resetPatchUpgradeMaintenance() {
    this._patchUpgradeMaintenance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchUpgradeMaintenanceInput() {
    return this._patchUpgradeMaintenance.internalValue;
  }

  // patch_upgrade_maintenance_actual - computed: true, optional: false, required: false
  private _patchUpgradeMaintenanceActual = new OksClusterAutoMaintenancesPatchUpgradeMaintenanceActualOutputReference(this, "patch_upgrade_maintenance_actual");
  public get patchUpgradeMaintenanceActual() {
    return this._patchUpgradeMaintenanceActual;
  }
}
export interface OksClusterStatuses {
}

export function oksClusterStatusesToTerraform(struct?: OksClusterStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oksClusterStatusesToHclTerraform(struct?: OksClusterStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OksClusterStatusesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OksClusterStatuses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OksClusterStatuses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_upgrade - computed: true, optional: false, required: false
  public get availableUpgrade() {
    return this.getStringAttribute('available_upgrade');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface OksClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#create OksCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#delete OksCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#read OksCluster#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#update OksCluster#update}
  */
  readonly update?: string;
}

export function oksClusterTimeoutsToTerraform(struct?: OksClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function oksClusterTimeoutsToHclTerraform(struct?: OksClusterTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class OksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OksClusterTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OksClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster outscale_oks_cluster}
*/
export class OksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_oks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OksCluster to import
  * @param importFromId The id of the existing OksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_oks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/oks_cluster outscale_oks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: OksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_oks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminLbu = config.adminLbu;
    this._adminWhitelist = config.adminWhitelist;
    this._admissionFlags.internalValue = config.admissionFlags;
    this._autoMaintenances.internalValue = config.autoMaintenances;
    this._cidrPods = config.cidrPods;
    this._cidrService = config.cidrService;
    this._clusterDns = config.clusterDns;
    this._controlPlanes = config.controlPlanes;
    this._cpMultiAz = config.cpMultiAz;
    this._cpSubregions = config.cpSubregions;
    this._description = config.description;
    this._disableApiTermination = config.disableApiTermination;
    this._name = config.name;
    this._projectId = config.projectId;
    this._quirks = config.quirks;
    this._tags = config.tags;
    this._version = config.version;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_lbu - computed: true, optional: true, required: false
  private _adminLbu?: boolean | cdktf.IResolvable; 
  public get adminLbu() {
    return this.getBooleanAttribute('admin_lbu');
  }
  public set adminLbu(value: boolean | cdktf.IResolvable) {
    this._adminLbu = value;
  }
  public resetAdminLbu() {
    this._adminLbu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLbuInput() {
    return this._adminLbu;
  }

  // admin_whitelist - computed: false, optional: false, required: true
  private _adminWhitelist?: string[]; 
  public get adminWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_whitelist'));
  }
  public set adminWhitelist(value: string[]) {
    this._adminWhitelist = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminWhitelistInput() {
    return this._adminWhitelist;
  }

  // admission_flags - computed: true, optional: true, required: false
  private _admissionFlags = new OksClusterAdmissionFlagsOutputReference(this, "admission_flags");
  public get admissionFlags() {
    return this._admissionFlags;
  }
  public putAdmissionFlags(value: OksClusterAdmissionFlags) {
    this._admissionFlags.internalValue = value;
  }
  public resetAdmissionFlags() {
    this._admissionFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionFlagsInput() {
    return this._admissionFlags.internalValue;
  }

  // auto_maintenances - computed: true, optional: true, required: false
  private _autoMaintenances = new OksClusterAutoMaintenancesOutputReference(this, "auto_maintenances");
  public get autoMaintenances() {
    return this._autoMaintenances;
  }
  public putAutoMaintenances(value: OksClusterAutoMaintenances) {
    this._autoMaintenances.internalValue = value;
  }
  public resetAutoMaintenances() {
    this._autoMaintenances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMaintenancesInput() {
    return this._autoMaintenances.internalValue;
  }

  // cidr_pods - computed: false, optional: false, required: true
  private _cidrPods?: string; 
  public get cidrPods() {
    return this.getStringAttribute('cidr_pods');
  }
  public set cidrPods(value: string) {
    this._cidrPods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrPodsInput() {
    return this._cidrPods;
  }

  // cidr_service - computed: false, optional: false, required: true
  private _cidrService?: string; 
  public get cidrService() {
    return this.getStringAttribute('cidr_service');
  }
  public set cidrService(value: string) {
    this._cidrService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrServiceInput() {
    return this._cidrService;
  }

  // cluster_dns - computed: true, optional: true, required: false
  private _clusterDns?: string; 
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }
  public set clusterDns(value: string) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // cni - computed: true, optional: false, required: false
  public get cni() {
    return this.getStringAttribute('cni');
  }

  // control_planes - computed: true, optional: true, required: false
  private _controlPlanes?: string; 
  public get controlPlanes() {
    return this.getStringAttribute('control_planes');
  }
  public set controlPlanes(value: string) {
    this._controlPlanes = value;
  }
  public resetControlPlanes() {
    this._controlPlanes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlanesInput() {
    return this._controlPlanes;
  }

  // cp_multi_az - computed: true, optional: true, required: false
  private _cpMultiAz?: boolean | cdktf.IResolvable; 
  public get cpMultiAz() {
    return this.getBooleanAttribute('cp_multi_az');
  }
  public set cpMultiAz(value: boolean | cdktf.IResolvable) {
    this._cpMultiAz = value;
  }
  public resetCpMultiAz() {
    this._cpMultiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpMultiAzInput() {
    return this._cpMultiAz;
  }

  // cp_subregions - computed: true, optional: true, required: false
  private _cpSubregions?: string[]; 
  public get cpSubregions() {
    return cdktf.Fn.tolist(this.getListAttribute('cp_subregions'));
  }
  public set cpSubregions(value: string[]) {
    this._cpSubregions = value;
  }
  public resetCpSubregions() {
    this._cpSubregions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpSubregionsInput() {
    return this._cpSubregions;
  }

  // description - computed: true, optional: true, required: false
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

  // disable_api_termination - computed: true, optional: true, required: false
  private _disableApiTermination?: boolean | cdktf.IResolvable; 
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean | cdktf.IResolvable) {
    this._disableApiTermination = value;
  }
  public resetDisableApiTermination() {
    this._disableApiTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiTerminationInput() {
    return this._disableApiTermination;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // quirks - computed: false, optional: true, required: false
  private _quirks?: string[]; 
  public get quirks() {
    return cdktf.Fn.tolist(this.getListAttribute('quirks'));
  }
  public set quirks(value: string[]) {
    this._quirks = value;
  }
  public resetQuirks() {
    this._quirks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quirksInput() {
    return this._quirks;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // statuses - computed: true, optional: false, required: false
  private _statuses = new OksClusterStatusesOutputReference(this, "statuses");
  public get statuses() {
    return this._statuses;
  }

  // tags - computed: true, optional: true, required: false
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OksClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OksClusterTimeouts) {
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
      admin_lbu: cdktf.booleanToTerraform(this._adminLbu),
      admin_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminWhitelist),
      admission_flags: oksClusterAdmissionFlagsToTerraform(this._admissionFlags.internalValue),
      auto_maintenances: oksClusterAutoMaintenancesToTerraform(this._autoMaintenances.internalValue),
      cidr_pods: cdktf.stringToTerraform(this._cidrPods),
      cidr_service: cdktf.stringToTerraform(this._cidrService),
      cluster_dns: cdktf.stringToTerraform(this._clusterDns),
      control_planes: cdktf.stringToTerraform(this._controlPlanes),
      cp_multi_az: cdktf.booleanToTerraform(this._cpMultiAz),
      cp_subregions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cpSubregions),
      description: cdktf.stringToTerraform(this._description),
      disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      quirks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._quirks),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      timeouts: oksClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_lbu: {
        value: cdktf.booleanToHclTerraform(this._adminLbu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminWhitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      admission_flags: {
        value: oksClusterAdmissionFlagsToHclTerraform(this._admissionFlags.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OksClusterAdmissionFlags",
      },
      auto_maintenances: {
        value: oksClusterAutoMaintenancesToHclTerraform(this._autoMaintenances.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OksClusterAutoMaintenances",
      },
      cidr_pods: {
        value: cdktf.stringToHclTerraform(this._cidrPods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_service: {
        value: cdktf.stringToHclTerraform(this._cidrService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_dns: {
        value: cdktf.stringToHclTerraform(this._clusterDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_planes: {
        value: cdktf.stringToHclTerraform(this._controlPlanes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cp_multi_az: {
        value: cdktf.booleanToHclTerraform(this._cpMultiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cp_subregions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cpSubregions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_api_termination: {
        value: cdktf.booleanToHclTerraform(this._disableApiTermination),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quirks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._quirks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: oksClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OksClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
