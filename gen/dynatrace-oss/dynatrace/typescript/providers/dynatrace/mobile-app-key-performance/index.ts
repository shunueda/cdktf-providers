// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileAppKeyPerformanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Treat user actions with reported errors or web request errors as erroneous and rate their performance as Frustrating. Turn off this setting if errors should not affect the Apdex rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance#frustrating_if_reported_or_web_request_error MobileAppKeyPerformance#frustrating_if_reported_or_web_request_error}
  */
  readonly frustratingIfReportedOrWebRequestError: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance#id MobileAppKeyPerformance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (DEVICE_APPLICATION_METHOD, MOBILE_APPLICATION, CUSTOM_APPLICATION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance#scope MobileAppKeyPerformance#scope}
  */
  readonly scope: string;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance#thresholds MobileAppKeyPerformance#thresholds}
  */
  readonly thresholds: MobileAppKeyPerformanceThresholds;
}
export interface MobileAppKeyPerformanceThresholds {
  /**
  * If the action duration is above this value, the Apdex is considered to be **Frustrating**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance#frustrating_threshold_seconds MobileAppKeyPerformance#frustrating_threshold_seconds}
  */
  readonly frustratingThresholdSeconds: number;
  /**
  * If the action duration is below this value, the Apdex is considered to be **Satisfactory**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance#tolerable_threshold_seconds MobileAppKeyPerformance#tolerable_threshold_seconds}
  */
  readonly tolerableThresholdSeconds: number;
}

export function mobileAppKeyPerformanceThresholdsToTerraform(struct?: MobileAppKeyPerformanceThresholdsOutputReference | MobileAppKeyPerformanceThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrating_threshold_seconds: cdktf.numberToTerraform(struct!.frustratingThresholdSeconds),
    tolerable_threshold_seconds: cdktf.numberToTerraform(struct!.tolerableThresholdSeconds),
  }
}


export function mobileAppKeyPerformanceThresholdsToHclTerraform(struct?: MobileAppKeyPerformanceThresholdsOutputReference | MobileAppKeyPerformanceThresholds): any {
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
    tolerable_threshold_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerableThresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileAppKeyPerformanceThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileAppKeyPerformanceThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frustratingThresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratingThresholdSeconds = this._frustratingThresholdSeconds;
    }
    if (this._tolerableThresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerableThresholdSeconds = this._tolerableThresholdSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileAppKeyPerformanceThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frustratingThresholdSeconds = undefined;
      this._tolerableThresholdSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frustratingThresholdSeconds = value.frustratingThresholdSeconds;
      this._tolerableThresholdSeconds = value.tolerableThresholdSeconds;
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

  // tolerable_threshold_seconds - computed: false, optional: false, required: true
  private _tolerableThresholdSeconds?: number; 
  public get tolerableThresholdSeconds() {
    return this.getNumberAttribute('tolerable_threshold_seconds');
  }
  public set tolerableThresholdSeconds(value: number) {
    this._tolerableThresholdSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerableThresholdSecondsInput() {
    return this._tolerableThresholdSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance dynatrace_mobile_app_key_performance}
*/
export class MobileAppKeyPerformance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_mobile_app_key_performance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileAppKeyPerformance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileAppKeyPerformance to import
  * @param importFromId The id of the existing MobileAppKeyPerformance that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileAppKeyPerformance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_mobile_app_key_performance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_key_performance dynatrace_mobile_app_key_performance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileAppKeyPerformanceConfig
  */
  public constructor(scope: Construct, id: string, config: MobileAppKeyPerformanceConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_mobile_app_key_performance',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._frustratingIfReportedOrWebRequestError = config.frustratingIfReportedOrWebRequestError;
    this._id = config.id;
    this._scope = config.scope;
    this._thresholds.internalValue = config.thresholds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frustrating_if_reported_or_web_request_error - computed: false, optional: false, required: true
  private _frustratingIfReportedOrWebRequestError?: boolean | cdktf.IResolvable; 
  public get frustratingIfReportedOrWebRequestError() {
    return this.getBooleanAttribute('frustrating_if_reported_or_web_request_error');
  }
  public set frustratingIfReportedOrWebRequestError(value: boolean | cdktf.IResolvable) {
    this._frustratingIfReportedOrWebRequestError = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratingIfReportedOrWebRequestErrorInput() {
    return this._frustratingIfReportedOrWebRequestError;
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

  // thresholds - computed: false, optional: false, required: true
  private _thresholds = new MobileAppKeyPerformanceThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: MobileAppKeyPerformanceThresholds) {
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
      frustrating_if_reported_or_web_request_error: cdktf.booleanToTerraform(this._frustratingIfReportedOrWebRequestError),
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      thresholds: mobileAppKeyPerformanceThresholdsToTerraform(this._thresholds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      frustrating_if_reported_or_web_request_error: {
        value: cdktf.booleanToHclTerraform(this._frustratingIfReportedOrWebRequestError),
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
        value: mobileAppKeyPerformanceThresholdsToHclTerraform(this._thresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileAppKeyPerformanceThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
