// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#annotations Slo#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#collection_id Slo#collection_id}
  */
  readonly collectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#description Slo#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#id Slo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#labels Slo#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#notification_policy_id Slo#notification_policy_id}
  */
  readonly notificationPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#slug Slo#slug}
  */
  readonly slug?: string;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#definition Slo#definition}
  */
  readonly definition: SloDefinition;
  /**
  * signal_grouping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#signal_grouping Slo#signal_grouping}
  */
  readonly signalGrouping?: SloSignalGrouping;
  /**
  * sli block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#sli Slo#sli}
  */
  readonly sli: SloSli;
}
export interface SloDefinitionBurnRateAlertingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#budget Slo#budget}
  */
  readonly budget: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#labels Slo#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#severity Slo#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#window Slo#window}
  */
  readonly window: string;
}

export function sloDefinitionBurnRateAlertingConfigToTerraform(struct?: SloDefinitionBurnRateAlertingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    budget: cdktf.numberToTerraform(struct!.budget),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    severity: cdktf.stringToTerraform(struct!.severity),
    window: cdktf.stringToTerraform(struct!.window),
  }
}


export function sloDefinitionBurnRateAlertingConfigToHclTerraform(struct?: SloDefinitionBurnRateAlertingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    budget: {
      value: cdktf.numberToHclTerraform(struct!.budget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloDefinitionBurnRateAlertingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloDefinitionBurnRateAlertingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budget !== undefined) {
      hasAnyValues = true;
      internalValueResult.budget = this._budget;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloDefinitionBurnRateAlertingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._budget = undefined;
      this._labels = undefined;
      this._severity = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._budget = value.budget;
      this._labels = value.labels;
      this._severity = value.severity;
      this._window = value.window;
    }
  }

  // budget - computed: false, optional: false, required: true
  private _budget?: number; 
  public get budget() {
    return this.getNumberAttribute('budget');
  }
  public set budget(value: number) {
    this._budget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetInput() {
    return this._budget;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // window - computed: false, optional: false, required: true
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}

export class SloDefinitionBurnRateAlertingConfigList extends cdktf.ComplexList {
  public internalValue? : SloDefinitionBurnRateAlertingConfig[] | cdktf.IResolvable

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
  public get(index: number): SloDefinitionBurnRateAlertingConfigOutputReference {
    return new SloDefinitionBurnRateAlertingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloDefinitionTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#duration Slo#duration}
  */
  readonly duration: string;
}

export function sloDefinitionTimeWindowToTerraform(struct?: SloDefinitionTimeWindowOutputReference | SloDefinitionTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function sloDefinitionTimeWindowToHclTerraform(struct?: SloDefinitionTimeWindowOutputReference | SloDefinitionTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloDefinitionTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloDefinitionTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloDefinitionTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface SloDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#enable_burn_rate_alerting Slo#enable_burn_rate_alerting}
  */
  readonly enableBurnRateAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#objective Slo#objective}
  */
  readonly objective: number;
  /**
  * burn_rate_alerting_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#burn_rate_alerting_config Slo#burn_rate_alerting_config}
  */
  readonly burnRateAlertingConfig?: SloDefinitionBurnRateAlertingConfig[] | cdktf.IResolvable;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#time_window Slo#time_window}
  */
  readonly timeWindow?: SloDefinitionTimeWindow;
}

export function sloDefinitionToTerraform(struct?: SloDefinitionOutputReference | SloDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_burn_rate_alerting: cdktf.booleanToTerraform(struct!.enableBurnRateAlerting),
    objective: cdktf.numberToTerraform(struct!.objective),
    burn_rate_alerting_config: cdktf.listMapper(sloDefinitionBurnRateAlertingConfigToTerraform, true)(struct!.burnRateAlertingConfig),
    time_window: sloDefinitionTimeWindowToTerraform(struct!.timeWindow),
  }
}


export function sloDefinitionToHclTerraform(struct?: SloDefinitionOutputReference | SloDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_burn_rate_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.enableBurnRateAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    objective: {
      value: cdktf.numberToHclTerraform(struct!.objective),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burn_rate_alerting_config: {
      value: cdktf.listMapperHcl(sloDefinitionBurnRateAlertingConfigToHclTerraform, true)(struct!.burnRateAlertingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SloDefinitionBurnRateAlertingConfigList",
    },
    time_window: {
      value: sloDefinitionTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "list",
      storageClassType: "SloDefinitionTimeWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBurnRateAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBurnRateAlerting = this._enableBurnRateAlerting;
    }
    if (this._objective !== undefined) {
      hasAnyValues = true;
      internalValueResult.objective = this._objective;
    }
    if (this._burnRateAlertingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.burnRateAlertingConfig = this._burnRateAlertingConfig?.internalValue;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableBurnRateAlerting = undefined;
      this._objective = undefined;
      this._burnRateAlertingConfig.internalValue = undefined;
      this._timeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableBurnRateAlerting = value.enableBurnRateAlerting;
      this._objective = value.objective;
      this._burnRateAlertingConfig.internalValue = value.burnRateAlertingConfig;
      this._timeWindow.internalValue = value.timeWindow;
    }
  }

  // enable_burn_rate_alerting - computed: true, optional: true, required: false
  private _enableBurnRateAlerting?: boolean | cdktf.IResolvable; 
  public get enableBurnRateAlerting() {
    return this.getBooleanAttribute('enable_burn_rate_alerting');
  }
  public set enableBurnRateAlerting(value: boolean | cdktf.IResolvable) {
    this._enableBurnRateAlerting = value;
  }
  public resetEnableBurnRateAlerting() {
    this._enableBurnRateAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBurnRateAlertingInput() {
    return this._enableBurnRateAlerting;
  }

  // objective - computed: false, optional: false, required: true
  private _objective?: number; 
  public get objective() {
    return this.getNumberAttribute('objective');
  }
  public set objective(value: number) {
    this._objective = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective;
  }

  // burn_rate_alerting_config - computed: false, optional: true, required: false
  private _burnRateAlertingConfig = new SloDefinitionBurnRateAlertingConfigList(this, "burn_rate_alerting_config", false);
  public get burnRateAlertingConfig() {
    return this._burnRateAlertingConfig;
  }
  public putBurnRateAlertingConfig(value: SloDefinitionBurnRateAlertingConfig[] | cdktf.IResolvable) {
    this._burnRateAlertingConfig.internalValue = value;
  }
  public resetBurnRateAlertingConfig() {
    this._burnRateAlertingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burnRateAlertingConfigInput() {
    return this._burnRateAlertingConfig.internalValue;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow = new SloDefinitionTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: SloDefinitionTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  public resetTimeWindow() {
    this._timeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }
}
export interface SloSignalGrouping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#label_names Slo#label_names}
  */
  readonly labelNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#signal_per_series Slo#signal_per_series}
  */
  readonly signalPerSeries?: boolean | cdktf.IResolvable;
}

export function sloSignalGroupingToTerraform(struct?: SloSignalGroupingOutputReference | SloSignalGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelNames),
    signal_per_series: cdktf.booleanToTerraform(struct!.signalPerSeries),
  }
}


export function sloSignalGroupingToHclTerraform(struct?: SloSignalGroupingOutputReference | SloSignalGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    signal_per_series: {
      value: cdktf.booleanToHclTerraform(struct!.signalPerSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloSignalGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloSignalGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNames = this._labelNames;
    }
    if (this._signalPerSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalPerSeries = this._signalPerSeries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloSignalGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelNames = undefined;
      this._signalPerSeries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelNames = value.labelNames;
      this._signalPerSeries = value.signalPerSeries;
    }
  }

  // label_names - computed: false, optional: true, required: false
  private _labelNames?: string[]; 
  public get labelNames() {
    return this.getListAttribute('label_names');
  }
  public set labelNames(value: string[]) {
    this._labelNames = value;
  }
  public resetLabelNames() {
    this._labelNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNamesInput() {
    return this._labelNames;
  }

  // signal_per_series - computed: false, optional: true, required: false
  private _signalPerSeries?: boolean | cdktf.IResolvable; 
  public get signalPerSeries() {
    return this.getBooleanAttribute('signal_per_series');
  }
  public set signalPerSeries(value: boolean | cdktf.IResolvable) {
    this._signalPerSeries = value;
  }
  public resetSignalPerSeries() {
    this._signalPerSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalPerSeriesInput() {
    return this._signalPerSeries;
  }
}
export interface SloSliAdditionalPromqlFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloSliAdditionalPromqlFiltersToTerraform(struct?: SloSliAdditionalPromqlFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloSliAdditionalPromqlFiltersToHclTerraform(struct?: SloSliAdditionalPromqlFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloSliAdditionalPromqlFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloSliAdditionalPromqlFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloSliAdditionalPromqlFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SloSliAdditionalPromqlFiltersList extends cdktf.ComplexList {
  public internalValue? : SloSliAdditionalPromqlFilters[] | cdktf.IResolvable

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
  public get(index: number): SloSliAdditionalPromqlFiltersOutputReference {
    return new SloSliAdditionalPromqlFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloSliCustomIndicator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#bad_query_template Slo#bad_query_template}
  */
  readonly badQueryTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#good_query_template Slo#good_query_template}
  */
  readonly goodQueryTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#total_query_template Slo#total_query_template}
  */
  readonly totalQueryTemplate: string;
}

export function sloSliCustomIndicatorToTerraform(struct?: SloSliCustomIndicatorOutputReference | SloSliCustomIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_query_template: cdktf.stringToTerraform(struct!.badQueryTemplate),
    good_query_template: cdktf.stringToTerraform(struct!.goodQueryTemplate),
    total_query_template: cdktf.stringToTerraform(struct!.totalQueryTemplate),
  }
}


export function sloSliCustomIndicatorToHclTerraform(struct?: SloSliCustomIndicatorOutputReference | SloSliCustomIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_query_template: {
      value: cdktf.stringToHclTerraform(struct!.badQueryTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    good_query_template: {
      value: cdktf.stringToHclTerraform(struct!.goodQueryTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_query_template: {
      value: cdktf.stringToHclTerraform(struct!.totalQueryTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloSliCustomIndicatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloSliCustomIndicator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badQueryTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.badQueryTemplate = this._badQueryTemplate;
    }
    if (this._goodQueryTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodQueryTemplate = this._goodQueryTemplate;
    }
    if (this._totalQueryTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalQueryTemplate = this._totalQueryTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloSliCustomIndicator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badQueryTemplate = undefined;
      this._goodQueryTemplate = undefined;
      this._totalQueryTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badQueryTemplate = value.badQueryTemplate;
      this._goodQueryTemplate = value.goodQueryTemplate;
      this._totalQueryTemplate = value.totalQueryTemplate;
    }
  }

  // bad_query_template - computed: false, optional: true, required: false
  private _badQueryTemplate?: string; 
  public get badQueryTemplate() {
    return this.getStringAttribute('bad_query_template');
  }
  public set badQueryTemplate(value: string) {
    this._badQueryTemplate = value;
  }
  public resetBadQueryTemplate() {
    this._badQueryTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badQueryTemplateInput() {
    return this._badQueryTemplate;
  }

  // good_query_template - computed: false, optional: true, required: false
  private _goodQueryTemplate?: string; 
  public get goodQueryTemplate() {
    return this.getStringAttribute('good_query_template');
  }
  public set goodQueryTemplate(value: string) {
    this._goodQueryTemplate = value;
  }
  public resetGoodQueryTemplate() {
    this._goodQueryTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodQueryTemplateInput() {
    return this._goodQueryTemplate;
  }

  // total_query_template - computed: false, optional: false, required: true
  private _totalQueryTemplate?: string; 
  public get totalQueryTemplate() {
    return this.getStringAttribute('total_query_template');
  }
  public set totalQueryTemplate(value: string) {
    this._totalQueryTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalQueryTemplateInput() {
    return this._totalQueryTemplate;
  }
}
export interface SloSliCustomTimesliceIndicatorCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#op Slo#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#value Slo#value}
  */
  readonly value: number;
}

export function sloSliCustomTimesliceIndicatorConditionToTerraform(struct?: SloSliCustomTimesliceIndicatorConditionOutputReference | SloSliCustomTimesliceIndicatorCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sloSliCustomTimesliceIndicatorConditionToHclTerraform(struct?: SloSliCustomTimesliceIndicatorConditionOutputReference | SloSliCustomTimesliceIndicatorCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloSliCustomTimesliceIndicatorConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloSliCustomTimesliceIndicatorCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloSliCustomTimesliceIndicatorCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._op = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SloSliCustomTimesliceIndicator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#query_template Slo#query_template}
  */
  readonly queryTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#timeslice_size Slo#timeslice_size}
  */
  readonly timesliceSize: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#condition Slo#condition}
  */
  readonly condition: SloSliCustomTimesliceIndicatorCondition;
}

export function sloSliCustomTimesliceIndicatorToTerraform(struct?: SloSliCustomTimesliceIndicatorOutputReference | SloSliCustomTimesliceIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_template: cdktf.stringToTerraform(struct!.queryTemplate),
    timeslice_size: cdktf.stringToTerraform(struct!.timesliceSize),
    condition: sloSliCustomTimesliceIndicatorConditionToTerraform(struct!.condition),
  }
}


export function sloSliCustomTimesliceIndicatorToHclTerraform(struct?: SloSliCustomTimesliceIndicatorOutputReference | SloSliCustomTimesliceIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_template: {
      value: cdktf.stringToHclTerraform(struct!.queryTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeslice_size: {
      value: cdktf.stringToHclTerraform(struct!.timesliceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: sloSliCustomTimesliceIndicatorConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "SloSliCustomTimesliceIndicatorConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloSliCustomTimesliceIndicatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloSliCustomTimesliceIndicator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTemplate = this._queryTemplate;
    }
    if (this._timesliceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.timesliceSize = this._timesliceSize;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloSliCustomTimesliceIndicator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryTemplate = undefined;
      this._timesliceSize = undefined;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryTemplate = value.queryTemplate;
      this._timesliceSize = value.timesliceSize;
      this._condition.internalValue = value.condition;
    }
  }

  // query_template - computed: false, optional: false, required: true
  private _queryTemplate?: string; 
  public get queryTemplate() {
    return this.getStringAttribute('query_template');
  }
  public set queryTemplate(value: string) {
    this._queryTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTemplateInput() {
    return this._queryTemplate;
  }

  // timeslice_size - computed: false, optional: false, required: true
  private _timesliceSize?: string; 
  public get timesliceSize() {
    return this.getStringAttribute('timeslice_size');
  }
  public set timesliceSize(value: string) {
    this._timesliceSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timesliceSizeInput() {
    return this._timesliceSize;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new SloSliCustomTimesliceIndicatorConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: SloSliCustomTimesliceIndicatorCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface SloSli {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#custom_dimension_labels Slo#custom_dimension_labels}
  */
  readonly customDimensionLabels?: string[];
  /**
  * additional_promql_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#additional_promql_filters Slo#additional_promql_filters}
  */
  readonly additionalPromqlFilters?: SloSliAdditionalPromqlFilters[] | cdktf.IResolvable;
  /**
  * custom_indicator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#custom_indicator Slo#custom_indicator}
  */
  readonly customIndicator?: SloSliCustomIndicator;
  /**
  * custom_timeslice_indicator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#custom_timeslice_indicator Slo#custom_timeslice_indicator}
  */
  readonly customTimesliceIndicator?: SloSliCustomTimesliceIndicator;
}

export function sloSliToTerraform(struct?: SloSliOutputReference | SloSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_dimension_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customDimensionLabels),
    additional_promql_filters: cdktf.listMapper(sloSliAdditionalPromqlFiltersToTerraform, true)(struct!.additionalPromqlFilters),
    custom_indicator: sloSliCustomIndicatorToTerraform(struct!.customIndicator),
    custom_timeslice_indicator: sloSliCustomTimesliceIndicatorToTerraform(struct!.customTimesliceIndicator),
  }
}


export function sloSliToHclTerraform(struct?: SloSliOutputReference | SloSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_dimension_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customDimensionLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_promql_filters: {
      value: cdktf.listMapperHcl(sloSliAdditionalPromqlFiltersToHclTerraform, true)(struct!.additionalPromqlFilters),
      isBlock: true,
      type: "set",
      storageClassType: "SloSliAdditionalPromqlFiltersList",
    },
    custom_indicator: {
      value: sloSliCustomIndicatorToHclTerraform(struct!.customIndicator),
      isBlock: true,
      type: "list",
      storageClassType: "SloSliCustomIndicatorList",
    },
    custom_timeslice_indicator: {
      value: sloSliCustomTimesliceIndicatorToHclTerraform(struct!.customTimesliceIndicator),
      isBlock: true,
      type: "list",
      storageClassType: "SloSliCustomTimesliceIndicatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDimensionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDimensionLabels = this._customDimensionLabels;
    }
    if (this._additionalPromqlFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPromqlFilters = this._additionalPromqlFilters?.internalValue;
    }
    if (this._customIndicator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIndicator = this._customIndicator?.internalValue;
    }
    if (this._customTimesliceIndicator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTimesliceIndicator = this._customTimesliceIndicator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customDimensionLabels = undefined;
      this._additionalPromqlFilters.internalValue = undefined;
      this._customIndicator.internalValue = undefined;
      this._customTimesliceIndicator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customDimensionLabels = value.customDimensionLabels;
      this._additionalPromqlFilters.internalValue = value.additionalPromqlFilters;
      this._customIndicator.internalValue = value.customIndicator;
      this._customTimesliceIndicator.internalValue = value.customTimesliceIndicator;
    }
  }

  // custom_dimension_labels - computed: false, optional: true, required: false
  private _customDimensionLabels?: string[]; 
  public get customDimensionLabels() {
    return this.getListAttribute('custom_dimension_labels');
  }
  public set customDimensionLabels(value: string[]) {
    this._customDimensionLabels = value;
  }
  public resetCustomDimensionLabels() {
    this._customDimensionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDimensionLabelsInput() {
    return this._customDimensionLabels;
  }

  // additional_promql_filters - computed: false, optional: true, required: false
  private _additionalPromqlFilters = new SloSliAdditionalPromqlFiltersList(this, "additional_promql_filters", true);
  public get additionalPromqlFilters() {
    return this._additionalPromqlFilters;
  }
  public putAdditionalPromqlFilters(value: SloSliAdditionalPromqlFilters[] | cdktf.IResolvable) {
    this._additionalPromqlFilters.internalValue = value;
  }
  public resetAdditionalPromqlFilters() {
    this._additionalPromqlFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPromqlFiltersInput() {
    return this._additionalPromqlFilters.internalValue;
  }

  // custom_indicator - computed: false, optional: true, required: false
  private _customIndicator = new SloSliCustomIndicatorOutputReference(this, "custom_indicator");
  public get customIndicator() {
    return this._customIndicator;
  }
  public putCustomIndicator(value: SloSliCustomIndicator) {
    this._customIndicator.internalValue = value;
  }
  public resetCustomIndicator() {
    this._customIndicator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIndicatorInput() {
    return this._customIndicator.internalValue;
  }

  // custom_timeslice_indicator - computed: false, optional: true, required: false
  private _customTimesliceIndicator = new SloSliCustomTimesliceIndicatorOutputReference(this, "custom_timeslice_indicator");
  public get customTimesliceIndicator() {
    return this._customTimesliceIndicator;
  }
  public putCustomTimesliceIndicator(value: SloSliCustomTimesliceIndicator) {
    this._customTimesliceIndicator.internalValue = value;
  }
  public resetCustomTimesliceIndicator() {
    this._customTimesliceIndicator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimesliceIndicatorInput() {
    return this._customTimesliceIndicator.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo chronosphere_slo}
*/
export class Slo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_slo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Slo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Slo to import
  * @param importFromId The id of the existing Slo that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Slo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_slo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slo chronosphere_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloConfig
  */
  public constructor(scope: Construct, id: string, config: SloConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_slo',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._collectionId = config.collectionId;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._notificationPolicyId = config.notificationPolicyId;
    this._slug = config.slug;
    this._definition.internalValue = config.definition;
    this._signalGrouping.internalValue = config.signalGrouping;
    this._sli.internalValue = config.sli;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // notification_policy_id - computed: false, optional: true, required: false
  private _notificationPolicyId?: string; 
  public get notificationPolicyId() {
    return this.getStringAttribute('notification_policy_id');
  }
  public set notificationPolicyId(value: string) {
    this._notificationPolicyId = value;
  }
  public resetNotificationPolicyId() {
    this._notificationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPolicyIdInput() {
    return this._notificationPolicyId;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new SloDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: SloDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // signal_grouping - computed: false, optional: true, required: false
  private _signalGrouping = new SloSignalGroupingOutputReference(this, "signal_grouping");
  public get signalGrouping() {
    return this._signalGrouping;
  }
  public putSignalGrouping(value: SloSignalGrouping) {
    this._signalGrouping.internalValue = value;
  }
  public resetSignalGrouping() {
    this._signalGrouping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalGroupingInput() {
    return this._signalGrouping.internalValue;
  }

  // sli - computed: false, optional: false, required: true
  private _sli = new SloSliOutputReference(this, "sli");
  public get sli() {
    return this._sli;
  }
  public putSli(value: SloSli) {
    this._sli.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliInput() {
    return this._sli.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      collection_id: cdktf.stringToTerraform(this._collectionId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      notification_policy_id: cdktf.stringToTerraform(this._notificationPolicyId),
      slug: cdktf.stringToTerraform(this._slug),
      definition: sloDefinitionToTerraform(this._definition.internalValue),
      signal_grouping: sloSignalGroupingToTerraform(this._signalGrouping.internalValue),
      sli: sloSliToTerraform(this._sli.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      collection_id: {
        value: cdktf.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_policy_id: {
        value: cdktf.stringToHclTerraform(this._notificationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      definition: {
        value: sloDefinitionToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloDefinitionList",
      },
      signal_grouping: {
        value: sloSignalGroupingToHclTerraform(this._signalGrouping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloSignalGroupingList",
      },
      sli: {
        value: sloSliToHclTerraform(this._sli.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloSliList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
