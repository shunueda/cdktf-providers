// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileAppCrashRateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#application_id MobileAppCrashRate#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#id MobileAppCrashRate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * crash_rate_increase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#crash_rate_increase MobileAppCrashRate#crash_rate_increase}
  */
  readonly crashRateIncrease: MobileAppCrashRateCrashRateIncrease;
}
export interface MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAuto {
  /**
  * Dynatrace learns the typical crash rate for all app versions and will create an alert if the baseline is violated by more than a specified threshold. Analysis happens based on a sliding window of 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#baseline_violation_percentage MobileAppCrashRate#baseline_violation_percentage}
  */
  readonly baselineViolationPercentage: number;
  /**
  * Amount of users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#concurrent_users MobileAppCrashRate#concurrent_users}
  */
  readonly concurrentUsers: number;
  /**
  * Possible Values: `Low`, `Medium`, `High`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#sensitivity MobileAppCrashRate#sensitivity}
  */
  readonly sensitivity: string;
}

export function mobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAutoToTerraform(struct?: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAutoOutputReference | MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_violation_percentage: cdktf.numberToTerraform(struct!.baselineViolationPercentage),
    concurrent_users: cdktf.numberToTerraform(struct!.concurrentUsers),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
  }
}


export function mobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAutoToHclTerraform(struct?: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAutoOutputReference | MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_violation_percentage: {
      value: cdktf.numberToHclTerraform(struct!.baselineViolationPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_users: {
      value: cdktf.numberToHclTerraform(struct!.concurrentUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineViolationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineViolationPercentage = this._baselineViolationPercentage;
    }
    if (this._concurrentUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentUsers = this._concurrentUsers;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineViolationPercentage = undefined;
      this._concurrentUsers = undefined;
      this._sensitivity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineViolationPercentage = value.baselineViolationPercentage;
      this._concurrentUsers = value.concurrentUsers;
      this._sensitivity = value.sensitivity;
    }
  }

  // baseline_violation_percentage - computed: false, optional: false, required: true
  private _baselineViolationPercentage?: number; 
  public get baselineViolationPercentage() {
    return this.getNumberAttribute('baseline_violation_percentage');
  }
  public set baselineViolationPercentage(value: number) {
    this._baselineViolationPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineViolationPercentageInput() {
    return this._baselineViolationPercentage;
  }

  // concurrent_users - computed: false, optional: false, required: true
  private _concurrentUsers?: number; 
  public get concurrentUsers() {
    return this.getNumberAttribute('concurrent_users');
  }
  public set concurrentUsers(value: number) {
    this._concurrentUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentUsersInput() {
    return this._concurrentUsers;
  }

  // sensitivity - computed: false, optional: false, required: true
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }
}
export interface MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixed {
  /**
  * Absolute threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#absolute_crash_rate MobileAppCrashRate#absolute_crash_rate}
  */
  readonly absoluteCrashRate: number;
  /**
  * Amount of users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#concurrent_users MobileAppCrashRate#concurrent_users}
  */
  readonly concurrentUsers: number;
}

export function mobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixedToTerraform(struct?: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixedOutputReference | MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_crash_rate: cdktf.numberToTerraform(struct!.absoluteCrashRate),
    concurrent_users: cdktf.numberToTerraform(struct!.concurrentUsers),
  }
}


export function mobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixedToHclTerraform(struct?: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixedOutputReference | MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_crash_rate: {
      value: cdktf.numberToHclTerraform(struct!.absoluteCrashRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_users: {
      value: cdktf.numberToHclTerraform(struct!.concurrentUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteCrashRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteCrashRate = this._absoluteCrashRate;
    }
    if (this._concurrentUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentUsers = this._concurrentUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absoluteCrashRate = undefined;
      this._concurrentUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absoluteCrashRate = value.absoluteCrashRate;
      this._concurrentUsers = value.concurrentUsers;
    }
  }

  // absolute_crash_rate - computed: false, optional: false, required: true
  private _absoluteCrashRate?: number; 
  public get absoluteCrashRate() {
    return this.getNumberAttribute('absolute_crash_rate');
  }
  public set absoluteCrashRate(value: number) {
    this._absoluteCrashRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteCrashRateInput() {
    return this._absoluteCrashRate;
  }

  // concurrent_users - computed: false, optional: false, required: true
  private _concurrentUsers?: number; 
  public get concurrentUsers() {
    return this.getNumberAttribute('concurrent_users');
  }
  public set concurrentUsers(value: number) {
    this._concurrentUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentUsersInput() {
    return this._concurrentUsers;
  }
}
export interface MobileAppCrashRateCrashRateIncrease {
  /**
  * Possible Values: `Auto`, `Fixed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#detection_mode MobileAppCrashRate#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#enabled MobileAppCrashRate#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * crash_rate_increase_auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#crash_rate_increase_auto MobileAppCrashRate#crash_rate_increase_auto}
  */
  readonly crashRateIncreaseAuto?: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAuto;
  /**
  * crash_rate_increase_fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#crash_rate_increase_fixed MobileAppCrashRate#crash_rate_increase_fixed}
  */
  readonly crashRateIncreaseFixed?: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixed;
}

export function mobileAppCrashRateCrashRateIncreaseToTerraform(struct?: MobileAppCrashRateCrashRateIncreaseOutputReference | MobileAppCrashRateCrashRateIncrease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    crash_rate_increase_auto: mobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAutoToTerraform(struct!.crashRateIncreaseAuto),
    crash_rate_increase_fixed: mobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixedToTerraform(struct!.crashRateIncreaseFixed),
  }
}


export function mobileAppCrashRateCrashRateIncreaseToHclTerraform(struct?: MobileAppCrashRateCrashRateIncreaseOutputReference | MobileAppCrashRateCrashRateIncrease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectionMode),
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
    crash_rate_increase_auto: {
      value: mobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAutoToHclTerraform(struct!.crashRateIncreaseAuto),
      isBlock: true,
      type: "list",
      storageClassType: "MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAutoList",
    },
    crash_rate_increase_fixed: {
      value: mobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixedToHclTerraform(struct!.crashRateIncreaseFixed),
      isBlock: true,
      type: "list",
      storageClassType: "MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileAppCrashRateCrashRateIncreaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileAppCrashRateCrashRateIncrease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._crashRateIncreaseAuto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crashRateIncreaseAuto = this._crashRateIncreaseAuto?.internalValue;
    }
    if (this._crashRateIncreaseFixed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crashRateIncreaseFixed = this._crashRateIncreaseFixed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileAppCrashRateCrashRateIncrease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMode = undefined;
      this._enabled = undefined;
      this._crashRateIncreaseAuto.internalValue = undefined;
      this._crashRateIncreaseFixed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMode = value.detectionMode;
      this._enabled = value.enabled;
      this._crashRateIncreaseAuto.internalValue = value.crashRateIncreaseAuto;
      this._crashRateIncreaseFixed.internalValue = value.crashRateIncreaseFixed;
    }
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
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

  // crash_rate_increase_auto - computed: false, optional: true, required: false
  private _crashRateIncreaseAuto = new MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAutoOutputReference(this, "crash_rate_increase_auto");
  public get crashRateIncreaseAuto() {
    return this._crashRateIncreaseAuto;
  }
  public putCrashRateIncreaseAuto(value: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseAuto) {
    this._crashRateIncreaseAuto.internalValue = value;
  }
  public resetCrashRateIncreaseAuto() {
    this._crashRateIncreaseAuto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashRateIncreaseAutoInput() {
    return this._crashRateIncreaseAuto.internalValue;
  }

  // crash_rate_increase_fixed - computed: false, optional: true, required: false
  private _crashRateIncreaseFixed = new MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixedOutputReference(this, "crash_rate_increase_fixed");
  public get crashRateIncreaseFixed() {
    return this._crashRateIncreaseFixed;
  }
  public putCrashRateIncreaseFixed(value: MobileAppCrashRateCrashRateIncreaseCrashRateIncreaseFixed) {
    this._crashRateIncreaseFixed.internalValue = value;
  }
  public resetCrashRateIncreaseFixed() {
    this._crashRateIncreaseFixed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashRateIncreaseFixedInput() {
    return this._crashRateIncreaseFixed.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate dynatrace_mobile_app_crash_rate}
*/
export class MobileAppCrashRate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_mobile_app_crash_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileAppCrashRate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileAppCrashRate to import
  * @param importFromId The id of the existing MobileAppCrashRate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileAppCrashRate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_mobile_app_crash_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/mobile_app_crash_rate dynatrace_mobile_app_crash_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileAppCrashRateConfig
  */
  public constructor(scope: Construct, id: string, config: MobileAppCrashRateConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_mobile_app_crash_rate',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._crashRateIncrease.internalValue = config.crashRateIncrease;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // crash_rate_increase - computed: false, optional: false, required: true
  private _crashRateIncrease = new MobileAppCrashRateCrashRateIncreaseOutputReference(this, "crash_rate_increase");
  public get crashRateIncrease() {
    return this._crashRateIncrease;
  }
  public putCrashRateIncrease(value: MobileAppCrashRateCrashRateIncrease) {
    this._crashRateIncrease.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crashRateIncreaseInput() {
    return this._crashRateIncrease.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      crash_rate_increase: mobileAppCrashRateCrashRateIncreaseToTerraform(this._crashRateIncrease.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      crash_rate_increase: {
        value: mobileAppCrashRateCrashRateIncreaseToHclTerraform(this._crashRateIncrease.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileAppCrashRateCrashRateIncreaseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
