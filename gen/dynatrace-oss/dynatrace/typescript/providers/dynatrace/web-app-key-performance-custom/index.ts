// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppKeyPerformanceCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_custom#id WebAppKeyPerformanceCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (APPLICATION_METHOD, APPLICATION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_custom#scope WebAppKeyPerformanceCustom#scope}
  */
  readonly scope: string;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_custom#thresholds WebAppKeyPerformanceCustom#thresholds}
  */
  readonly thresholds: WebAppKeyPerformanceCustomThresholds;
}
export interface WebAppKeyPerformanceCustomThresholds {
  /**
  * If **User action duration** is above this value, the action is assigned to the Frustrated performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_custom#frustrating_threshold_seconds WebAppKeyPerformanceCustom#frustrating_threshold_seconds}
  */
  readonly frustratingThresholdSeconds: number;
  /**
  * If **User action duration** is below this value, the action is assigned to the Satisfied performance zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_custom#tolerated_threshold_seconds WebAppKeyPerformanceCustom#tolerated_threshold_seconds}
  */
  readonly toleratedThresholdSeconds: number;
}

export function webAppKeyPerformanceCustomThresholdsToTerraform(struct?: WebAppKeyPerformanceCustomThresholdsOutputReference | WebAppKeyPerformanceCustomThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrating_threshold_seconds: cdktf.numberToTerraform(struct!.frustratingThresholdSeconds),
    tolerated_threshold_seconds: cdktf.numberToTerraform(struct!.toleratedThresholdSeconds),
  }
}


export function webAppKeyPerformanceCustomThresholdsToHclTerraform(struct?: WebAppKeyPerformanceCustomThresholdsOutputReference | WebAppKeyPerformanceCustomThresholds): any {
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

export class WebAppKeyPerformanceCustomThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppKeyPerformanceCustomThresholds | undefined {
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

  public set internalValue(value: WebAppKeyPerformanceCustomThresholds | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_custom dynatrace_web_app_key_performance_custom}
*/
export class WebAppKeyPerformanceCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_key_performance_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppKeyPerformanceCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppKeyPerformanceCustom to import
  * @param importFromId The id of the existing WebAppKeyPerformanceCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppKeyPerformanceCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_key_performance_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_key_performance_custom dynatrace_web_app_key_performance_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppKeyPerformanceCustomConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppKeyPerformanceCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_key_performance_custom',
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
    this._scope = config.scope;
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
  private _thresholds = new WebAppKeyPerformanceCustomThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: WebAppKeyPerformanceCustomThresholds) {
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
      scope: cdktf.stringToTerraform(this._scope),
      thresholds: webAppKeyPerformanceCustomThresholdsToTerraform(this._thresholds.internalValue),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thresholds: {
        value: webAppKeyPerformanceCustomThresholdsToHclTerraform(this._thresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppKeyPerformanceCustomThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
