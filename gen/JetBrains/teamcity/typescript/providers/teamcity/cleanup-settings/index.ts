// https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CleanupSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#cron CleanupSettings#cron}
  */
  readonly cron?: CleanupSettingsCron;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#daily CleanupSettings#daily}
  */
  readonly daily?: CleanupSettingsDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#enabled CleanupSettings#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#max_duration CleanupSettings#max_duration}
  */
  readonly maxDuration: number;
}
export interface CleanupSettingsCron {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#day CleanupSettings#day}
  */
  readonly day: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#day_week CleanupSettings#day_week}
  */
  readonly dayWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#hour CleanupSettings#hour}
  */
  readonly hour: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#minute CleanupSettings#minute}
  */
  readonly minute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#month CleanupSettings#month}
  */
  readonly month: string;
}

export function cleanupSettingsCronToTerraform(struct?: CleanupSettingsCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    day_week: cdktf.stringToTerraform(struct!.dayWeek),
    hour: cdktf.stringToTerraform(struct!.hour),
    minute: cdktf.stringToTerraform(struct!.minute),
    month: cdktf.stringToTerraform(struct!.month),
  }
}


export function cleanupSettingsCronToHclTerraform(struct?: CleanupSettingsCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_week: {
      value: cdktf.stringToHclTerraform(struct!.dayWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.stringToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minute: {
      value: cdktf.stringToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanupSettingsCronOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanupSettingsCron | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._dayWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayWeek = this._dayWeek;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanupSettingsCron | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._dayWeek = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._month = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._dayWeek = value.dayWeek;
      this._hour = value.hour;
      this._minute = value.minute;
      this._month = value.month;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // day_week - computed: false, optional: false, required: true
  private _dayWeek?: string; 
  public get dayWeek() {
    return this.getStringAttribute('day_week');
  }
  public set dayWeek(value: string) {
    this._dayWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayWeekInput() {
    return this._dayWeek;
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: string; 
  public get hour() {
    return this.getStringAttribute('hour');
  }
  public set hour(value: string) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: string; 
  public get minute() {
    return this.getStringAttribute('minute');
  }
  public set minute(value: string) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // month - computed: false, optional: false, required: true
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }
}
export interface CleanupSettingsDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#hour CleanupSettings#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#minute CleanupSettings#minute}
  */
  readonly minute: number;
}

export function cleanupSettingsDailyToTerraform(struct?: CleanupSettingsDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function cleanupSettingsDailyToHclTerraform(struct?: CleanupSettingsDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanupSettingsDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanupSettingsDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanupSettingsDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hour = undefined;
      this._minute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings teamcity_cleanup_settings}
*/
export class CleanupSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "teamcity_cleanup_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CleanupSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CleanupSettings to import
  * @param importFromId The id of the existing CleanupSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CleanupSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "teamcity_cleanup_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/cleanup_settings teamcity_cleanup_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CleanupSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: CleanupSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'teamcity_cleanup_settings',
      terraformGeneratorMetadata: {
        providerName: 'teamcity',
        providerVersion: '0.0.86',
        providerVersionConstraint: '0.0.86'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cron.internalValue = config.cron;
    this._daily.internalValue = config.daily;
    this._enabled = config.enabled;
    this._maxDuration = config.maxDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron - computed: false, optional: true, required: false
  private _cron = new CleanupSettingsCronOutputReference(this, "cron");
  public get cron() {
    return this._cron;
  }
  public putCron(value: CleanupSettingsCron) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new CleanupSettingsDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: CleanupSettingsDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
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

  // max_duration - computed: false, optional: false, required: true
  private _maxDuration?: number; 
  public get maxDuration() {
    return this.getNumberAttribute('max_duration');
  }
  public set maxDuration(value: number) {
    this._maxDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron: cleanupSettingsCronToTerraform(this._cron.internalValue),
      daily: cleanupSettingsDailyToTerraform(this._daily.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      max_duration: cdktf.numberToTerraform(this._maxDuration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron: {
        value: cleanupSettingsCronToHclTerraform(this._cron.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanupSettingsCron",
      },
      daily: {
        value: cleanupSettingsDailyToHclTerraform(this._daily.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanupSettingsDaily",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_duration: {
        value: cdktf.numberToHclTerraform(this._maxDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
