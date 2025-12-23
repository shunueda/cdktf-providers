// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#description Space#description}
  */
  readonly description?: string;
  /**
  * ID of the space. Must be globally unique. If the provider has a space configured and this field is empty, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#id Space#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#name Space#name}
  */
  readonly name?: string;
  /**
  * ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#org_id Space#org_id}
  */
  readonly orgId: string;
  /**
  * Space settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#space_settings Space#space_settings}
  */
  readonly spaceSettings?: SpaceSpaceSettings;
}
export interface SpaceSpaceSettingsCasesConfiguration {
  /**
  * Aggregate findings for the same asset within this window. The value is specified in hours. 0 means no aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#aggregation_window Space#aggregation_window}
  */
  readonly aggregationWindow?: number;
  /**
  * Whether to enable auto-create cases on drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#auto_create Space#auto_create}
  */
  readonly autoCreate?: boolean | cdktf.IResolvable;
}

export function spaceSpaceSettingsCasesConfigurationToTerraform(struct?: SpaceSpaceSettingsCasesConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_window: cdktf.numberToTerraform(struct!.aggregationWindow),
    auto_create: cdktf.booleanToTerraform(struct!.autoCreate),
  }
}


export function spaceSpaceSettingsCasesConfigurationToHclTerraform(struct?: SpaceSpaceSettingsCasesConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_window: {
      value: cdktf.numberToHclTerraform(struct!.aggregationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_create: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpaceSpaceSettingsCasesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpaceSpaceSettingsCasesConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationWindow = this._aggregationWindow;
    }
    if (this._autoCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreate = this._autoCreate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpaceSpaceSettingsCasesConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregationWindow = undefined;
      this._autoCreate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregationWindow = value.aggregationWindow;
      this._autoCreate = value.autoCreate;
    }
  }

  // aggregation_window - computed: true, optional: true, required: false
  private _aggregationWindow?: number; 
  public get aggregationWindow() {
    return this.getNumberAttribute('aggregation_window');
  }
  public set aggregationWindow(value: number) {
    this._aggregationWindow = value;
  }
  public resetAggregationWindow() {
    this._aggregationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationWindowInput() {
    return this._aggregationWindow;
  }

  // auto_create - computed: true, optional: true, required: false
  private _autoCreate?: boolean | cdktf.IResolvable; 
  public get autoCreate() {
    return this.getBooleanAttribute('auto_create');
  }
  public set autoCreate(value: boolean | cdktf.IResolvable) {
    this._autoCreate = value;
  }
  public resetAutoCreate() {
    this._autoCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateInput() {
    return this._autoCreate;
  }
}
export interface SpaceSpaceSettingsEolAssetsConfiguration {
  /**
  * Whether to enable EOL assets analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#enabled Space#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How many months in advance should EOL be applied as risk factor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#months_in_advance Space#months_in_advance}
  */
  readonly monthsInAdvance?: number;
}

export function spaceSpaceSettingsEolAssetsConfigurationToTerraform(struct?: SpaceSpaceSettingsEolAssetsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    months_in_advance: cdktf.numberToTerraform(struct!.monthsInAdvance),
  }
}


export function spaceSpaceSettingsEolAssetsConfigurationToHclTerraform(struct?: SpaceSpaceSettingsEolAssetsConfiguration | cdktf.IResolvable): any {
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
    months_in_advance: {
      value: cdktf.numberToHclTerraform(struct!.monthsInAdvance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpaceSpaceSettingsEolAssetsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpaceSpaceSettingsEolAssetsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._monthsInAdvance !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthsInAdvance = this._monthsInAdvance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpaceSpaceSettingsEolAssetsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._monthsInAdvance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._monthsInAdvance = value.monthsInAdvance;
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

  // months_in_advance - computed: true, optional: true, required: false
  private _monthsInAdvance?: number; 
  public get monthsInAdvance() {
    return this.getNumberAttribute('months_in_advance');
  }
  public set monthsInAdvance(value: number) {
    this._monthsInAdvance = value;
  }
  public resetMonthsInAdvance() {
    this._monthsInAdvance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInAdvanceInput() {
    return this._monthsInAdvance;
  }
}
export interface SpaceSpaceSettingsExceptionsConfiguration {
  /**
  * Whether to allow creation of exception groups with indefinite valid until.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#allow_indefinite_valid_until Space#allow_indefinite_valid_until}
  */
  readonly allowIndefiniteValidUntil?: boolean | cdktf.IResolvable;
  /**
  * Whether a user can approve their own exception requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#allow_self_approval Space#allow_self_approval}
  */
  readonly allowSelfApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether to require approval for exceptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#require_approval Space#require_approval}
  */
  readonly requireApproval?: boolean | cdktf.IResolvable;
}

export function spaceSpaceSettingsExceptionsConfigurationToTerraform(struct?: SpaceSpaceSettingsExceptionsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_indefinite_valid_until: cdktf.booleanToTerraform(struct!.allowIndefiniteValidUntil),
    allow_self_approval: cdktf.booleanToTerraform(struct!.allowSelfApproval),
    require_approval: cdktf.booleanToTerraform(struct!.requireApproval),
  }
}


export function spaceSpaceSettingsExceptionsConfigurationToHclTerraform(struct?: SpaceSpaceSettingsExceptionsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_indefinite_valid_until: {
      value: cdktf.booleanToHclTerraform(struct!.allowIndefiniteValidUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_self_approval: {
      value: cdktf.booleanToHclTerraform(struct!.allowSelfApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpaceSpaceSettingsExceptionsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpaceSpaceSettingsExceptionsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowIndefiniteValidUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIndefiniteValidUntil = this._allowIndefiniteValidUntil;
    }
    if (this._allowSelfApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSelfApproval = this._allowSelfApproval;
    }
    if (this._requireApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireApproval = this._requireApproval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpaceSpaceSettingsExceptionsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowIndefiniteValidUntil = undefined;
      this._allowSelfApproval = undefined;
      this._requireApproval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowIndefiniteValidUntil = value.allowIndefiniteValidUntil;
      this._allowSelfApproval = value.allowSelfApproval;
      this._requireApproval = value.requireApproval;
    }
  }

  // allow_indefinite_valid_until - computed: true, optional: true, required: false
  private _allowIndefiniteValidUntil?: boolean | cdktf.IResolvable; 
  public get allowIndefiniteValidUntil() {
    return this.getBooleanAttribute('allow_indefinite_valid_until');
  }
  public set allowIndefiniteValidUntil(value: boolean | cdktf.IResolvable) {
    this._allowIndefiniteValidUntil = value;
  }
  public resetAllowIndefiniteValidUntil() {
    this._allowIndefiniteValidUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIndefiniteValidUntilInput() {
    return this._allowIndefiniteValidUntil;
  }

  // allow_self_approval - computed: true, optional: true, required: false
  private _allowSelfApproval?: boolean | cdktf.IResolvable; 
  public get allowSelfApproval() {
    return this.getBooleanAttribute('allow_self_approval');
  }
  public set allowSelfApproval(value: boolean | cdktf.IResolvable) {
    this._allowSelfApproval = value;
  }
  public resetAllowSelfApproval() {
    this._allowSelfApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSelfApprovalInput() {
    return this._allowSelfApproval;
  }

  // require_approval - computed: true, optional: true, required: false
  private _requireApproval?: boolean | cdktf.IResolvable; 
  public get requireApproval() {
    return this.getBooleanAttribute('require_approval');
  }
  public set requireApproval(value: boolean | cdktf.IResolvable) {
    this._requireApproval = value;
  }
  public resetRequireApproval() {
    this._requireApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApprovalInput() {
    return this._requireApproval;
  }
}
export interface SpaceSpaceSettingsGarbageCollectAssetsConfiguration {
  /**
  * After how many days to garbage collect. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#after_days Space#after_days}
  */
  readonly afterDays?: number;
  /**
  * Whether to enable garbage collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#enabled Space#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function spaceSpaceSettingsGarbageCollectAssetsConfigurationToTerraform(struct?: SpaceSpaceSettingsGarbageCollectAssetsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_days: cdktf.numberToTerraform(struct!.afterDays),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function spaceSpaceSettingsGarbageCollectAssetsConfigurationToHclTerraform(struct?: SpaceSpaceSettingsGarbageCollectAssetsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_days: {
      value: cdktf.numberToHclTerraform(struct!.afterDays),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpaceSpaceSettingsGarbageCollectAssetsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpaceSpaceSettingsGarbageCollectAssetsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterDays = this._afterDays;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpaceSpaceSettingsGarbageCollectAssetsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterDays = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterDays = value.afterDays;
      this._enabled = value.enabled;
    }
  }

  // after_days - computed: true, optional: true, required: false
  private _afterDays?: number; 
  public get afterDays() {
    return this.getNumberAttribute('after_days');
  }
  public set afterDays(value: number) {
    this._afterDays = value;
  }
  public resetAfterDays() {
    this._afterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterDaysInput() {
    return this._afterDays;
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
}
export interface SpaceSpaceSettingsPlatformVulnerabilityConfiguration {
  /**
  * Whether to enable platform vulnerability analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#enabled Space#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function spaceSpaceSettingsPlatformVulnerabilityConfigurationToTerraform(struct?: SpaceSpaceSettingsPlatformVulnerabilityConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function spaceSpaceSettingsPlatformVulnerabilityConfigurationToHclTerraform(struct?: SpaceSpaceSettingsPlatformVulnerabilityConfiguration | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpaceSpaceSettingsPlatformVulnerabilityConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpaceSpaceSettingsPlatformVulnerabilityConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpaceSpaceSettingsPlatformVulnerabilityConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface SpaceSpaceSettingsTerminatedAssetsConfiguration {
  /**
  * Whether to cleanup terminated assets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#cleanup Space#cleanup}
  */
  readonly cleanup?: boolean | cdktf.IResolvable;
}

export function spaceSpaceSettingsTerminatedAssetsConfigurationToTerraform(struct?: SpaceSpaceSettingsTerminatedAssetsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup: cdktf.booleanToTerraform(struct!.cleanup),
  }
}


export function spaceSpaceSettingsTerminatedAssetsConfigurationToHclTerraform(struct?: SpaceSpaceSettingsTerminatedAssetsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup: {
      value: cdktf.booleanToHclTerraform(struct!.cleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpaceSpaceSettingsTerminatedAssetsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpaceSpaceSettingsTerminatedAssetsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpaceSpaceSettingsTerminatedAssetsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanup = value.cleanup;
    }
  }

  // cleanup - computed: true, optional: true, required: false
  private _cleanup?: boolean | cdktf.IResolvable; 
  public get cleanup() {
    return this.getBooleanAttribute('cleanup');
  }
  public set cleanup(value: boolean | cdktf.IResolvable) {
    this._cleanup = value;
  }
  public resetCleanup() {
    this._cleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup;
  }
}
export interface SpaceSpaceSettingsUnusedServiceAccountsConfiguration {
  /**
  * Whether to cleanup unused service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#cleanup Space#cleanup}
  */
  readonly cleanup?: boolean | cdktf.IResolvable;
}

export function spaceSpaceSettingsUnusedServiceAccountsConfigurationToTerraform(struct?: SpaceSpaceSettingsUnusedServiceAccountsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup: cdktf.booleanToTerraform(struct!.cleanup),
  }
}


export function spaceSpaceSettingsUnusedServiceAccountsConfigurationToHclTerraform(struct?: SpaceSpaceSettingsUnusedServiceAccountsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup: {
      value: cdktf.booleanToHclTerraform(struct!.cleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpaceSpaceSettingsUnusedServiceAccountsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpaceSpaceSettingsUnusedServiceAccountsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpaceSpaceSettingsUnusedServiceAccountsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanup = value.cleanup;
    }
  }

  // cleanup - computed: true, optional: true, required: false
  private _cleanup?: boolean | cdktf.IResolvable; 
  public get cleanup() {
    return this.getBooleanAttribute('cleanup');
  }
  public set cleanup(value: boolean | cdktf.IResolvable) {
    this._cleanup = value;
  }
  public resetCleanup() {
    this._cleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup;
  }
}
export interface SpaceSpaceSettings {
  /**
  * Cases configuration for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#cases_configuration Space#cases_configuration}
  */
  readonly casesConfiguration?: SpaceSpaceSettingsCasesConfiguration;
  /**
  * EOL platform configuration for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#eol_assets_configuration Space#eol_assets_configuration}
  */
  readonly eolAssetsConfiguration?: SpaceSpaceSettingsEolAssetsConfiguration;
  /**
  * Exceptions configuration for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#exceptions_configuration Space#exceptions_configuration}
  */
  readonly exceptionsConfiguration?: SpaceSpaceSettingsExceptionsConfiguration;
  /**
  * Garbage collect assets configuration for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#garbage_collect_assets_configuration Space#garbage_collect_assets_configuration}
  */
  readonly garbageCollectAssetsConfiguration?: SpaceSpaceSettingsGarbageCollectAssetsConfiguration;
  /**
  * Platform vulnerability configuration for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#platform_vulnerability_configuration Space#platform_vulnerability_configuration}
  */
  readonly platformVulnerabilityConfiguration?: SpaceSpaceSettingsPlatformVulnerabilityConfiguration;
  /**
  * Terminated assets configuration for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#terminated_assets_configuration Space#terminated_assets_configuration}
  */
  readonly terminatedAssetsConfiguration?: SpaceSpaceSettingsTerminatedAssetsConfiguration;
  /**
  * Unused service accounts configuration for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#unused_service_accounts_configuration Space#unused_service_accounts_configuration}
  */
  readonly unusedServiceAccountsConfiguration?: SpaceSpaceSettingsUnusedServiceAccountsConfiguration;
}

export function spaceSpaceSettingsToTerraform(struct?: SpaceSpaceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases_configuration: spaceSpaceSettingsCasesConfigurationToTerraform(struct!.casesConfiguration),
    eol_assets_configuration: spaceSpaceSettingsEolAssetsConfigurationToTerraform(struct!.eolAssetsConfiguration),
    exceptions_configuration: spaceSpaceSettingsExceptionsConfigurationToTerraform(struct!.exceptionsConfiguration),
    garbage_collect_assets_configuration: spaceSpaceSettingsGarbageCollectAssetsConfigurationToTerraform(struct!.garbageCollectAssetsConfiguration),
    platform_vulnerability_configuration: spaceSpaceSettingsPlatformVulnerabilityConfigurationToTerraform(struct!.platformVulnerabilityConfiguration),
    terminated_assets_configuration: spaceSpaceSettingsTerminatedAssetsConfigurationToTerraform(struct!.terminatedAssetsConfiguration),
    unused_service_accounts_configuration: spaceSpaceSettingsUnusedServiceAccountsConfigurationToTerraform(struct!.unusedServiceAccountsConfiguration),
  }
}


export function spaceSpaceSettingsToHclTerraform(struct?: SpaceSpaceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cases_configuration: {
      value: spaceSpaceSettingsCasesConfigurationToHclTerraform(struct!.casesConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SpaceSpaceSettingsCasesConfiguration",
    },
    eol_assets_configuration: {
      value: spaceSpaceSettingsEolAssetsConfigurationToHclTerraform(struct!.eolAssetsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SpaceSpaceSettingsEolAssetsConfiguration",
    },
    exceptions_configuration: {
      value: spaceSpaceSettingsExceptionsConfigurationToHclTerraform(struct!.exceptionsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SpaceSpaceSettingsExceptionsConfiguration",
    },
    garbage_collect_assets_configuration: {
      value: spaceSpaceSettingsGarbageCollectAssetsConfigurationToHclTerraform(struct!.garbageCollectAssetsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SpaceSpaceSettingsGarbageCollectAssetsConfiguration",
    },
    platform_vulnerability_configuration: {
      value: spaceSpaceSettingsPlatformVulnerabilityConfigurationToHclTerraform(struct!.platformVulnerabilityConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SpaceSpaceSettingsPlatformVulnerabilityConfiguration",
    },
    terminated_assets_configuration: {
      value: spaceSpaceSettingsTerminatedAssetsConfigurationToHclTerraform(struct!.terminatedAssetsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SpaceSpaceSettingsTerminatedAssetsConfiguration",
    },
    unused_service_accounts_configuration: {
      value: spaceSpaceSettingsUnusedServiceAccountsConfigurationToHclTerraform(struct!.unusedServiceAccountsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SpaceSpaceSettingsUnusedServiceAccountsConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpaceSpaceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpaceSpaceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._casesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.casesConfiguration = this._casesConfiguration?.internalValue;
    }
    if (this._eolAssetsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eolAssetsConfiguration = this._eolAssetsConfiguration?.internalValue;
    }
    if (this._exceptionsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionsConfiguration = this._exceptionsConfiguration?.internalValue;
    }
    if (this._garbageCollectAssetsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.garbageCollectAssetsConfiguration = this._garbageCollectAssetsConfiguration?.internalValue;
    }
    if (this._platformVulnerabilityConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformVulnerabilityConfiguration = this._platformVulnerabilityConfiguration?.internalValue;
    }
    if (this._terminatedAssetsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminatedAssetsConfiguration = this._terminatedAssetsConfiguration?.internalValue;
    }
    if (this._unusedServiceAccountsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unusedServiceAccountsConfiguration = this._unusedServiceAccountsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpaceSpaceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._casesConfiguration.internalValue = undefined;
      this._eolAssetsConfiguration.internalValue = undefined;
      this._exceptionsConfiguration.internalValue = undefined;
      this._garbageCollectAssetsConfiguration.internalValue = undefined;
      this._platformVulnerabilityConfiguration.internalValue = undefined;
      this._terminatedAssetsConfiguration.internalValue = undefined;
      this._unusedServiceAccountsConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._casesConfiguration.internalValue = value.casesConfiguration;
      this._eolAssetsConfiguration.internalValue = value.eolAssetsConfiguration;
      this._exceptionsConfiguration.internalValue = value.exceptionsConfiguration;
      this._garbageCollectAssetsConfiguration.internalValue = value.garbageCollectAssetsConfiguration;
      this._platformVulnerabilityConfiguration.internalValue = value.platformVulnerabilityConfiguration;
      this._terminatedAssetsConfiguration.internalValue = value.terminatedAssetsConfiguration;
      this._unusedServiceAccountsConfiguration.internalValue = value.unusedServiceAccountsConfiguration;
    }
  }

  // cases_configuration - computed: true, optional: true, required: false
  private _casesConfiguration = new SpaceSpaceSettingsCasesConfigurationOutputReference(this, "cases_configuration");
  public get casesConfiguration() {
    return this._casesConfiguration;
  }
  public putCasesConfiguration(value: SpaceSpaceSettingsCasesConfiguration) {
    this._casesConfiguration.internalValue = value;
  }
  public resetCasesConfiguration() {
    this._casesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casesConfigurationInput() {
    return this._casesConfiguration.internalValue;
  }

  // eol_assets_configuration - computed: true, optional: true, required: false
  private _eolAssetsConfiguration = new SpaceSpaceSettingsEolAssetsConfigurationOutputReference(this, "eol_assets_configuration");
  public get eolAssetsConfiguration() {
    return this._eolAssetsConfiguration;
  }
  public putEolAssetsConfiguration(value: SpaceSpaceSettingsEolAssetsConfiguration) {
    this._eolAssetsConfiguration.internalValue = value;
  }
  public resetEolAssetsConfiguration() {
    this._eolAssetsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eolAssetsConfigurationInput() {
    return this._eolAssetsConfiguration.internalValue;
  }

  // exceptions_configuration - computed: true, optional: true, required: false
  private _exceptionsConfiguration = new SpaceSpaceSettingsExceptionsConfigurationOutputReference(this, "exceptions_configuration");
  public get exceptionsConfiguration() {
    return this._exceptionsConfiguration;
  }
  public putExceptionsConfiguration(value: SpaceSpaceSettingsExceptionsConfiguration) {
    this._exceptionsConfiguration.internalValue = value;
  }
  public resetExceptionsConfiguration() {
    this._exceptionsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsConfigurationInput() {
    return this._exceptionsConfiguration.internalValue;
  }

  // garbage_collect_assets_configuration - computed: true, optional: true, required: false
  private _garbageCollectAssetsConfiguration = new SpaceSpaceSettingsGarbageCollectAssetsConfigurationOutputReference(this, "garbage_collect_assets_configuration");
  public get garbageCollectAssetsConfiguration() {
    return this._garbageCollectAssetsConfiguration;
  }
  public putGarbageCollectAssetsConfiguration(value: SpaceSpaceSettingsGarbageCollectAssetsConfiguration) {
    this._garbageCollectAssetsConfiguration.internalValue = value;
  }
  public resetGarbageCollectAssetsConfiguration() {
    this._garbageCollectAssetsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get garbageCollectAssetsConfigurationInput() {
    return this._garbageCollectAssetsConfiguration.internalValue;
  }

  // platform_vulnerability_configuration - computed: true, optional: true, required: false
  private _platformVulnerabilityConfiguration = new SpaceSpaceSettingsPlatformVulnerabilityConfigurationOutputReference(this, "platform_vulnerability_configuration");
  public get platformVulnerabilityConfiguration() {
    return this._platformVulnerabilityConfiguration;
  }
  public putPlatformVulnerabilityConfiguration(value: SpaceSpaceSettingsPlatformVulnerabilityConfiguration) {
    this._platformVulnerabilityConfiguration.internalValue = value;
  }
  public resetPlatformVulnerabilityConfiguration() {
    this._platformVulnerabilityConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVulnerabilityConfigurationInput() {
    return this._platformVulnerabilityConfiguration.internalValue;
  }

  // terminated_assets_configuration - computed: true, optional: true, required: false
  private _terminatedAssetsConfiguration = new SpaceSpaceSettingsTerminatedAssetsConfigurationOutputReference(this, "terminated_assets_configuration");
  public get terminatedAssetsConfiguration() {
    return this._terminatedAssetsConfiguration;
  }
  public putTerminatedAssetsConfiguration(value: SpaceSpaceSettingsTerminatedAssetsConfiguration) {
    this._terminatedAssetsConfiguration.internalValue = value;
  }
  public resetTerminatedAssetsConfiguration() {
    this._terminatedAssetsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedAssetsConfigurationInput() {
    return this._terminatedAssetsConfiguration.internalValue;
  }

  // unused_service_accounts_configuration - computed: true, optional: true, required: false
  private _unusedServiceAccountsConfiguration = new SpaceSpaceSettingsUnusedServiceAccountsConfigurationOutputReference(this, "unused_service_accounts_configuration");
  public get unusedServiceAccountsConfiguration() {
    return this._unusedServiceAccountsConfiguration;
  }
  public putUnusedServiceAccountsConfiguration(value: SpaceSpaceSettingsUnusedServiceAccountsConfiguration) {
    this._unusedServiceAccountsConfiguration.internalValue = value;
  }
  public resetUnusedServiceAccountsConfiguration() {
    this._unusedServiceAccountsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedServiceAccountsConfigurationInput() {
    return this._unusedServiceAccountsConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space mondoo_space}
*/
export class Space extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Space resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Space to import
  * @param importFromId The id of the existing Space that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Space to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/space mondoo_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpaceConfig
  */
  public constructor(scope: Construct, id: string, config: SpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_space',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.3',
        providerVersionConstraint: '0.35.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._spaceSettings.internalValue = config.spaceSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // space_settings - computed: true, optional: true, required: false
  private _spaceSettings = new SpaceSpaceSettingsOutputReference(this, "space_settings");
  public get spaceSettings() {
    return this._spaceSettings;
  }
  public putSpaceSettings(value: SpaceSpaceSettings) {
    this._spaceSettings.internalValue = value;
  }
  public resetSpaceSettings() {
    this._spaceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceSettingsInput() {
    return this._spaceSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      space_settings: spaceSpaceSettingsToTerraform(this._spaceSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_settings: {
        value: spaceSpaceSettingsToHclTerraform(this._spaceSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpaceSpaceSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
