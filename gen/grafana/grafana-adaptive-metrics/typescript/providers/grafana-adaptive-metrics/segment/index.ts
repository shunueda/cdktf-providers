// https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * WARNING: contact Grafana Cloud support before use. This feature is in private preview and may change without notice, including in ways that may break your configuration. Configurations related to auto-applying recommendations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment#auto_apply Segment#auto_apply}
  */
  readonly autoApply?: SegmentAutoApply;
  /**
  * Whether to fallback to the default segment if the selector does not match any segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment#fallback_to_default Segment#fallback_to_default}
  */
  readonly fallbackToDefault?: boolean | cdktf.IResolvable;
  /**
  * The name of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment#name Segment#name}
  */
  readonly name: string;
  /**
  * WARNING: contact Grafana Cloud support before use. This feature is in private preview and may change without notice, including in ways that may break your configuration. ID of the policy applied to this segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment#policy_id Segment#policy_id}
  */
  readonly policyId?: string;
  /**
  * The selector that defines the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment#selector Segment#selector}
  */
  readonly selector: string;
}
export interface SegmentAutoApply {
  /**
  * WARNING: contact Grafana Cloud support before use. This feature is in private preview and may change without notice, including in ways that may break your configuration. Whether to automatically apply the generated recommendations in this segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment#enabled Segment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function segmentAutoApplyToTerraform(struct?: SegmentAutoApply | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function segmentAutoApplyToHclTerraform(struct?: SegmentAutoApply | cdktf.IResolvable): any {
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

export class SegmentAutoApplyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SegmentAutoApply | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SegmentAutoApply | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment grafana-adaptive-metrics_segment}
*/
export class Segment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana-adaptive-metrics_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Segment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Segment to import
  * @param importFromId The id of the existing Segment that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Segment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana-adaptive-metrics_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/segment grafana-adaptive-metrics_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentConfig
  */
  public constructor(scope: Construct, id: string, config: SegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana-adaptive-metrics_segment',
      terraformGeneratorMetadata: {
        providerName: 'grafana-adaptive-metrics',
        providerVersion: '0.3.3',
        providerVersionConstraint: '0.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoApply.internalValue = config.autoApply;
    this._fallbackToDefault = config.fallbackToDefault;
    this._name = config.name;
    this._policyId = config.policyId;
    this._selector = config.selector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_apply - computed: false, optional: true, required: false
  private _autoApply = new SegmentAutoApplyOutputReference(this, "auto_apply");
  public get autoApply() {
    return this._autoApply;
  }
  public putAutoApply(value: SegmentAutoApply) {
    this._autoApply.internalValue = value;
  }
  public resetAutoApply() {
    this._autoApply.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyInput() {
    return this._autoApply.internalValue;
  }

  // fallback_to_default - computed: true, optional: true, required: false
  private _fallbackToDefault?: boolean | cdktf.IResolvable; 
  public get fallbackToDefault() {
    return this.getBooleanAttribute('fallback_to_default');
  }
  public set fallbackToDefault(value: boolean | cdktf.IResolvable) {
    this._fallbackToDefault = value;
  }
  public resetFallbackToDefault() {
    this._fallbackToDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToDefaultInput() {
    return this._fallbackToDefault;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_apply: segmentAutoApplyToTerraform(this._autoApply.internalValue),
      fallback_to_default: cdktf.booleanToTerraform(this._fallbackToDefault),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.stringToTerraform(this._policyId),
      selector: cdktf.stringToTerraform(this._selector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_apply: {
        value: segmentAutoApplyToHclTerraform(this._autoApply.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SegmentAutoApply",
      },
      fallback_to_default: {
        value: cdktf.booleanToHclTerraform(this._fallbackToDefault),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selector: {
        value: cdktf.stringToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
