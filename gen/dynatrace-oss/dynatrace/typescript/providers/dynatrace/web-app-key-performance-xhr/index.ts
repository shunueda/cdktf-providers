// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppKeyPerformanceXhrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#id WebAppKeyPerformanceXhr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible Values: `RESPONSE_END`, `RESPONSE_START`, `USER_ACTION_DURATION`, `VISUALLY_COMPLETE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#kpm WebAppKeyPerformanceXhr#kpm}
  */
  readonly kpm: string;
  /**
  * The scope of this setting (APPLICATION_METHOD, APPLICATION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#scope WebAppKeyPerformanceXhr#scope}
  */
  readonly scope: string;
  /**
  * fallback_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#fallback_thresholds WebAppKeyPerformanceXhr#fallback_thresholds}
  */
  readonly fallbackThresholds?: WebAppKeyPerformanceXhrFallbackThresholds;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#thresholds WebAppKeyPerformanceXhr#thresholds}
  */
  readonly thresholds: WebAppKeyPerformanceXhrThresholds;
}
export interface WebAppKeyPerformanceXhrFallbackThresholds {
  /**
  * If **User action duration** is above this value, the action is assigned to the Frustrated performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#frustrating_fallback_threshold_seconds WebAppKeyPerformanceXhr#frustrating_fallback_threshold_seconds}
  */
  readonly frustratingFallbackThresholdSeconds: number;
  /**
  * If **User action duration** is below this value, the action is assigned to the Satisfied performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#tolerated_fallback_threshold_seconds WebAppKeyPerformanceXhr#tolerated_fallback_threshold_seconds}
  */
  readonly toleratedFallbackThresholdSeconds: number;
}

export function webAppKeyPerformanceXhrFallbackThresholdsToTerraform(struct?: WebAppKeyPerformanceXhrFallbackThresholdsOutputReference | WebAppKeyPerformanceXhrFallbackThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrating_fallback_threshold_seconds: cdktf.numberToTerraform(struct!.frustratingFallbackThresholdSeconds),
    tolerated_fallback_threshold_seconds: cdktf.numberToTerraform(struct!.toleratedFallbackThresholdSeconds),
  }
}


export function webAppKeyPerformanceXhrFallbackThresholdsToHclTerraform(struct?: WebAppKeyPerformanceXhrFallbackThresholdsOutputReference | WebAppKeyPerformanceXhrFallbackThresholds): any {
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

export class WebAppKeyPerformanceXhrFallbackThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppKeyPerformanceXhrFallbackThresholds | undefined {
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

  public set internalValue(value: WebAppKeyPerformanceXhrFallbackThresholds | undefined) {
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
export interface WebAppKeyPerformanceXhrThresholds {
  /**
  * If the key performance metric is above this value, the action is assigned to the Frustrated performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#frustrating_threshold_seconds WebAppKeyPerformanceXhr#frustrating_threshold_seconds}
  */
  readonly frustratingThresholdSeconds: number;
  /**
  * If the key performance metric is below this value, the action is assigned to the Satisfied performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#tolerated_threshold_seconds WebAppKeyPerformanceXhr#tolerated_threshold_seconds}
  */
  readonly toleratedThresholdSeconds: number;
}

export function webAppKeyPerformanceXhrThresholdsToTerraform(struct?: WebAppKeyPerformanceXhrThresholdsOutputReference | WebAppKeyPerformanceXhrThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrating_threshold_seconds: cdktf.numberToTerraform(struct!.frustratingThresholdSeconds),
    tolerated_threshold_seconds: cdktf.numberToTerraform(struct!.toleratedThresholdSeconds),
  }
}


export function webAppKeyPerformanceXhrThresholdsToHclTerraform(struct?: WebAppKeyPerformanceXhrThresholdsOutputReference | WebAppKeyPerformanceXhrThresholds): any {
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

export class WebAppKeyPerformanceXhrThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppKeyPerformanceXhrThresholds | undefined {
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

  public set internalValue(value: WebAppKeyPerformanceXhrThresholds | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr dynatrace_web_app_key_performance_xhr}
*/
export class WebAppKeyPerformanceXhr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_key_performance_xhr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppKeyPerformanceXhr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppKeyPerformanceXhr to import
  * @param importFromId The id of the existing WebAppKeyPerformanceXhr that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppKeyPerformanceXhr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_key_performance_xhr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/web_app_key_performance_xhr dynatrace_web_app_key_performance_xhr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppKeyPerformanceXhrConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppKeyPerformanceXhrConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_key_performance_xhr',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
  private _fallbackThresholds = new WebAppKeyPerformanceXhrFallbackThresholdsOutputReference(this, "fallback_thresholds");
  public get fallbackThresholds() {
    return this._fallbackThresholds;
  }
  public putFallbackThresholds(value: WebAppKeyPerformanceXhrFallbackThresholds) {
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
  private _thresholds = new WebAppKeyPerformanceXhrThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: WebAppKeyPerformanceXhrThresholds) {
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
      fallback_thresholds: webAppKeyPerformanceXhrFallbackThresholdsToTerraform(this._fallbackThresholds.internalValue),
      thresholds: webAppKeyPerformanceXhrThresholdsToTerraform(this._thresholds.internalValue),
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
        value: webAppKeyPerformanceXhrFallbackThresholdsToHclTerraform(this._fallbackThresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppKeyPerformanceXhrFallbackThresholdsList",
      },
      thresholds: {
        value: webAppKeyPerformanceXhrThresholdsToHclTerraform(this._thresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppKeyPerformanceXhrThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
