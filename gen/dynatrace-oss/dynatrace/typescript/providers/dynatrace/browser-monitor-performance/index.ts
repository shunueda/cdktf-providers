// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrowserMonitorPerformanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#enabled BrowserMonitorPerformance#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#id BrowserMonitorPerformance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (SYNTHETIC_TEST)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#scope BrowserMonitorPerformance#scope}
  */
  readonly scope: string;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#thresholds BrowserMonitorPerformance#thresholds}
  */
  readonly thresholds?: BrowserMonitorPerformanceThresholds;
}
export interface BrowserMonitorPerformanceThresholdsThreshold {
  /**
  * Number of most recent non-violating executions that closes the problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#dealerting_samples BrowserMonitorPerformance#dealerting_samples}
  */
  readonly dealertingSamples?: number;
  /**
  * Synthetic event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#event BrowserMonitorPerformance#event}
  */
  readonly event: string;
  /**
  * Number of executions in analyzed sliding window (sliding window size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#samples BrowserMonitorPerformance#samples}
  */
  readonly samples?: number;
  /**
  * Threshold (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#threshold BrowserMonitorPerformance#threshold}
  */
  readonly threshold: number;
  /**
  * Number of violating executions in analyzed sliding window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#violating_samples BrowserMonitorPerformance#violating_samples}
  */
  readonly violatingSamples?: number;
}

export function browserMonitorPerformanceThresholdsThresholdToTerraform(struct?: BrowserMonitorPerformanceThresholdsThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    event: cdktf.stringToTerraform(struct!.event),
    samples: cdktf.numberToTerraform(struct!.samples),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function browserMonitorPerformanceThresholdsThresholdToHclTerraform(struct?: BrowserMonitorPerformanceThresholdsThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samples: {
      value: cdktf.numberToHclTerraform(struct!.samples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_samples: {
      value: cdktf.numberToHclTerraform(struct!.violatingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorPerformanceThresholdsThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BrowserMonitorPerformanceThresholdsThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorPerformanceThresholdsThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dealertingSamples = undefined;
      this._event = undefined;
      this._samples = undefined;
      this._threshold = undefined;
      this._violatingSamples = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dealertingSamples = value.dealertingSamples;
      this._event = value.event;
      this._samples = value.samples;
      this._threshold = value.threshold;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // dealerting_samples - computed: false, optional: true, required: false
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  public resetDealertingSamples() {
    this._dealertingSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // event - computed: false, optional: false, required: true
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // samples - computed: false, optional: true, required: false
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  public resetSamples() {
    this._samples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // violating_samples - computed: false, optional: true, required: false
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  public resetViolatingSamples() {
    this._violatingSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}

export class BrowserMonitorPerformanceThresholdsThresholdList extends cdktf.ComplexList {
  public internalValue? : BrowserMonitorPerformanceThresholdsThreshold[] | cdktf.IResolvable

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
  public get(index: number): BrowserMonitorPerformanceThresholdsThresholdOutputReference {
    return new BrowserMonitorPerformanceThresholdsThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BrowserMonitorPerformanceThresholds {
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#threshold BrowserMonitorPerformance#threshold}
  */
  readonly threshold: BrowserMonitorPerformanceThresholdsThreshold[] | cdktf.IResolvable;
}

export function browserMonitorPerformanceThresholdsToTerraform(struct?: BrowserMonitorPerformanceThresholdsOutputReference | BrowserMonitorPerformanceThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.listMapper(browserMonitorPerformanceThresholdsThresholdToTerraform, true)(struct!.threshold),
  }
}


export function browserMonitorPerformanceThresholdsToHclTerraform(struct?: BrowserMonitorPerformanceThresholdsOutputReference | BrowserMonitorPerformanceThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.listMapperHcl(browserMonitorPerformanceThresholdsThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "set",
      storageClassType: "BrowserMonitorPerformanceThresholdsThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrowserMonitorPerformanceThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrowserMonitorPerformanceThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrowserMonitorPerformanceThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold.internalValue = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold = new BrowserMonitorPerformanceThresholdsThresholdList(this, "threshold", true);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: BrowserMonitorPerformanceThresholdsThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance dynatrace_browser_monitor_performance}
*/
export class BrowserMonitorPerformance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_browser_monitor_performance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrowserMonitorPerformance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrowserMonitorPerformance to import
  * @param importFromId The id of the existing BrowserMonitorPerformance that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrowserMonitorPerformance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_browser_monitor_performance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/browser_monitor_performance dynatrace_browser_monitor_performance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrowserMonitorPerformanceConfig
  */
  public constructor(scope: Construct, id: string, config: BrowserMonitorPerformanceConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_browser_monitor_performance',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._scope = config.scope;
    this._thresholds.internalValue = config.thresholds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new BrowserMonitorPerformanceThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: BrowserMonitorPerformanceThresholds) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      thresholds: browserMonitorPerformanceThresholdsToTerraform(this._thresholds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thresholds: {
        value: browserMonitorPerformanceThresholdsToHclTerraform(this._thresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrowserMonitorPerformanceThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
