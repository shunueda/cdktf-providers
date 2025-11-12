// https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/recommendations_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecommendationsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * WARNING: contact Grafana Cloud support before use. This feature is in private preview and may change without notice, including in ways that may break your configuration. Configurations related to auto-applying recommendations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/recommendations_config#auto_apply RecommendationsConfig#auto_apply}
  */
  readonly autoApply?: RecommendationsConfigAutoApply;
  /**
  * The array of labels to keep; labels not in this array will be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/recommendations_config#keep_labels RecommendationsConfig#keep_labels}
  */
  readonly keepLabels?: string[];
}
export interface RecommendationsConfigAutoApply {
  /**
  * WARNING: contact Grafana Cloud support before use. This feature is in private preview and may change without notice, including in ways that may break your configuration. Whether to automatically apply the generated recommendations in the default segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/recommendations_config#enabled RecommendationsConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function recommendationsConfigAutoApplyToTerraform(struct?: RecommendationsConfigAutoApply | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function recommendationsConfigAutoApplyToHclTerraform(struct?: RecommendationsConfigAutoApply | cdktf.IResolvable): any {
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

export class RecommendationsConfigAutoApplyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RecommendationsConfigAutoApply | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RecommendationsConfigAutoApply | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/recommendations_config grafana-adaptive-metrics_recommendations_config}
*/
export class RecommendationsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana-adaptive-metrics_recommendations_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecommendationsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecommendationsConfig to import
  * @param importFromId The id of the existing RecommendationsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/recommendations_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecommendationsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana-adaptive-metrics_recommendations_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/recommendations_config grafana-adaptive-metrics_recommendations_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecommendationsConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RecommendationsConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana-adaptive-metrics_recommendations_config',
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
    this._keepLabels = config.keepLabels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_apply - computed: false, optional: true, required: false
  private _autoApply = new RecommendationsConfigAutoApplyOutputReference(this, "auto_apply");
  public get autoApply() {
    return this._autoApply;
  }
  public putAutoApply(value: RecommendationsConfigAutoApply) {
    this._autoApply.internalValue = value;
  }
  public resetAutoApply() {
    this._autoApply.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyInput() {
    return this._autoApply.internalValue;
  }

  // keep_labels - computed: true, optional: true, required: false
  private _keepLabels?: string[]; 
  public get keepLabels() {
    return this.getListAttribute('keep_labels');
  }
  public set keepLabels(value: string[]) {
    this._keepLabels = value;
  }
  public resetKeepLabels() {
    this._keepLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLabelsInput() {
    return this._keepLabels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_apply: recommendationsConfigAutoApplyToTerraform(this._autoApply.internalValue),
      keep_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keepLabels),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_apply: {
        value: recommendationsConfigAutoApplyToHclTerraform(this._autoApply.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RecommendationsConfigAutoApply",
      },
      keep_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keepLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
