// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppKeyPerformanceLoadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#id WebAppKeyPerformanceLoad#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible Values: `CUMULATIVE_LAYOUT_SHIFT`, `DOM_INTERACTIVE`, `FIRST_INPUT_DELAY`, `LARGEST_CONTENTFUL_PAINT`, `LOAD_EVENT_END`, `LOAD_EVENT_START`, `RESPONSE_END`, `RESPONSE_START`, `SPEED_INDEX`, `USER_ACTION_DURATION`, `VISUALLY_COMPLETE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#kpm WebAppKeyPerformanceLoad#kpm}
  */
  readonly kpm: string;
  /**
  * The scope of this setting (APPLICATION_METHOD, APPLICATION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#scope WebAppKeyPerformanceLoad#scope}
  */
  readonly scope: string;
  /**
  * fallback_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#fallback_thresholds WebAppKeyPerformanceLoad#fallback_thresholds}
  */
  readonly fallbackThresholds?: WebAppKeyPerformanceLoadFallbackThresholds;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#thresholds WebAppKeyPerformanceLoad#thresholds}
  */
  readonly thresholds: WebAppKeyPerformanceLoadThresholds;
}
export interface WebAppKeyPerformanceLoadFallbackThresholds {
  /**
  * If **User action duration** is above this value, the action is assigned to the Frustrated performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#frustrating_fallback_threshold_seconds WebAppKeyPerformanceLoad#frustrating_fallback_threshold_seconds}
  */
  readonly frustratingFallbackThresholdSeconds: number;
  /**
  * If **User action duration** is below this value, the action is assigned to the Satisfied performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#tolerated_fallback_threshold_seconds WebAppKeyPerformanceLoad#tolerated_fallback_threshold_seconds}
  */
  readonly toleratedFallbackThresholdSeconds: number;
}

export function webAppKeyPerformanceLoadFallbackThresholdsToTerraform(struct?: WebAppKeyPerformanceLoadFallbackThresholdsOutputReference | WebAppKeyPerformanceLoadFallbackThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrating_fallback_threshold_seconds: cdktf.numberToTerraform(struct!.frustratingFallbackThresholdSeconds),
    tolerated_fallback_threshold_seconds: cdktf.numberToTerraform(struct!.toleratedFallbackThresholdSeconds),
  }
}


export function webAppKeyPerformanceLoadFallbackThresholdsToHclTerraform(struct?: WebAppKeyPerformanceLoadFallbackThresholdsOutputReference | WebAppKeyPerformanceLoadFallbackThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frustrating_fallback_threshold_seconds: {
      value: cdktf.numberToHclTerraform(struct!.frustratingFallbackThresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerated_fallback_threshold_seconds: {
      value: cdktf.numberToHclTerraform(struct!.toleratedFallbackThresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppKeyPerformanceLoadFallbackThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppKeyPerformanceLoadFallbackThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frustratingFallbackThresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratingFallbackThresholdSeconds = this._frustratingFallbackThresholdSeconds;
    }
    if (this._toleratedFallbackThresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratedFallbackThresholdSeconds = this._toleratedFallbackThresholdSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppKeyPerformanceLoadFallbackThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frustratingFallbackThresholdSeconds = undefined;
      this._toleratedFallbackThresholdSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frustratingFallbackThresholdSeconds = value.frustratingFallbackThresholdSeconds;
      this._toleratedFallbackThresholdSeconds = value.toleratedFallbackThresholdSeconds;
    }
  }

  // frustrating_fallback_threshold_seconds - computed: false, optional: false, required: true
  private _frustratingFallbackThresholdSeconds?: number; 
  public get frustratingFallbackThresholdSeconds() {
    return this.getNumberAttribute('frustrating_fallback_threshold_seconds');
  }
  public set frustratingFallbackThresholdSeconds(value: number) {
    this._frustratingFallbackThresholdSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratingFallbackThresholdSecondsInput() {
    return this._frustratingFallbackThresholdSeconds;
  }

  // tolerated_fallback_threshold_seconds - computed: false, optional: false, required: true
  private _toleratedFallbackThresholdSeconds?: number; 
  public get toleratedFallbackThresholdSeconds() {
    return this.getNumberAttribute('tolerated_fallback_threshold_seconds');
  }
  public set toleratedFallbackThresholdSeconds(value: number) {
    this._toleratedFallbackThresholdSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedFallbackThresholdSecondsInput() {
    return this._toleratedFallbackThresholdSeconds;
  }
}
export interface WebAppKeyPerformanceLoadThresholds {
  /**
  * If the key performance metric is above this value, the action is assigned to the Frustrated performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#frustrating_threshold_seconds WebAppKeyPerformanceLoad#frustrating_threshold_seconds}
  */
  readonly frustratingThresholdSeconds: number;
  /**
  * If the key performance metric is below this value, the action is assigned to the Satisfied performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#tolerated_threshold_seconds WebAppKeyPerformanceLoad#tolerated_threshold_seconds}
  */
  readonly toleratedThresholdSeconds: number;
}

export function webAppKeyPerformanceLoadThresholdsToTerraform(struct?: WebAppKeyPerformanceLoadThresholdsOutputReference | WebAppKeyPerformanceLoadThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrating_threshold_seconds: cdktf.numberToTerraform(struct!.frustratingThresholdSeconds),
    tolerated_threshold_seconds: cdktf.numberToTerraform(struct!.toleratedThresholdSeconds),
  }
}


export function webAppKeyPerformanceLoadThresholdsToHclTerraform(struct?: WebAppKeyPerformanceLoadThresholdsOutputReference | WebAppKeyPerformanceLoadThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frustrating_threshold_seconds: {
      value: cdktf.numberToHclTerraform(struct!.frustratingThresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerated_threshold_seconds: {
      value: cdktf.numberToHclTerraform(struct!.toleratedThresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppKeyPerformanceLoadThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppKeyPerformanceLoadThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frustratingThresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratingThresholdSeconds = this._frustratingThresholdSeconds;
    }
    if (this._toleratedThresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratedThresholdSeconds = this._toleratedThresholdSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppKeyPerformanceLoadThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frustratingThresholdSeconds = undefined;
      this._toleratedThresholdSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frustratingThresholdSeconds = value.frustratingThresholdSeconds;
      this._toleratedThresholdSeconds = value.toleratedThresholdSeconds;
    }
  }

  // frustrating_threshold_seconds - computed: false, optional: false, required: true
  private _frustratingThresholdSeconds?: number; 
  public get frustratingThresholdSeconds() {
    return this.getNumberAttribute('frustrating_threshold_seconds');
  }
  public set frustratingThresholdSeconds(value: number) {
    this._frustratingThresholdSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratingThresholdSecondsInput() {
    return this._frustratingThresholdSeconds;
  }

  // tolerated_threshold_seconds - computed: false, optional: false, required: true
  private _toleratedThresholdSeconds?: number; 
  public get toleratedThresholdSeconds() {
    return this.getNumberAttribute('tolerated_threshold_seconds');
  }
  public set toleratedThresholdSeconds(value: number) {
    this._toleratedThresholdSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedThresholdSecondsInput() {
    return this._toleratedThresholdSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load dynatrace_web_app_key_performance_load}
*/
export class WebAppKeyPerformanceLoad extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_key_performance_load";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppKeyPerformanceLoad resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppKeyPerformanceLoad to import
  * @param importFromId The id of the existing WebAppKeyPerformanceLoad that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppKeyPerformanceLoad to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_key_performance_load", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_load dynatrace_web_app_key_performance_load} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppKeyPerformanceLoadConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppKeyPerformanceLoadConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_key_performance_load',
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
    this._id = config.id;
    this._kpm = config.kpm;
    this._scope = config.scope;
    this._fallbackThresholds.internalValue = config.fallbackThresholds;
    this._thresholds.internalValue = config.thresholds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // kpm - computed: false, optional: false, required: true
  private _kpm?: string; 
  public get kpm() {
    return this.getStringAttribute('kpm');
  }
  public set kpm(value: string) {
    this._kpm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kpmInput() {
    return this._kpm;
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

  // fallback_thresholds - computed: false, optional: true, required: false
  private _fallbackThresholds = new WebAppKeyPerformanceLoadFallbackThresholdsOutputReference(this, "fallback_thresholds");
  public get fallbackThresholds() {
    return this._fallbackThresholds;
  }
  public putFallbackThresholds(value: WebAppKeyPerformanceLoadFallbackThresholds) {
    this._fallbackThresholds.internalValue = value;
  }
  public resetFallbackThresholds() {
    this._fallbackThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackThresholdsInput() {
    return this._fallbackThresholds.internalValue;
  }

  // thresholds - computed: false, optional: false, required: true
  private _thresholds = new WebAppKeyPerformanceLoadThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: WebAppKeyPerformanceLoadThresholds) {
    this._thresholds.internalValue = value;
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
      id: cdktf.stringToTerraform(this._id),
      kpm: cdktf.stringToTerraform(this._kpm),
      scope: cdktf.stringToTerraform(this._scope),
      fallback_thresholds: webAppKeyPerformanceLoadFallbackThresholdsToTerraform(this._fallbackThresholds.internalValue),
      thresholds: webAppKeyPerformanceLoadThresholdsToTerraform(this._thresholds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kpm: {
        value: cdktf.stringToHclTerraform(this._kpm),
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
      fallback_thresholds: {
        value: webAppKeyPerformanceLoadFallbackThresholdsToHclTerraform(this._fallbackThresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppKeyPerformanceLoadFallbackThresholdsList",
      },
      thresholds: {
        value: webAppKeyPerformanceLoadThresholdsToHclTerraform(this._thresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppKeyPerformanceLoadThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
