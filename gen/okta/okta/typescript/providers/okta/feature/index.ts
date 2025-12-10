// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Okta API for feature only reads and updates therefore the okta_feature resource needs to act as a quasi data source. Do this by setting feature_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/feature#feature_id Feature#feature_id}
  */
  readonly featureId: string;
  /**
  * Whether to `ENABLE` or `DISABLE` the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/feature#life_cycle Feature#life_cycle}
  */
  readonly lifeCycle?: string;
  /**
  * Indicates if you want to force enable or disable a feature. Value is `true` meaning force
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/feature#mode Feature#mode}
  */
  readonly mode?: boolean | cdktf.IResolvable;
}
export interface FeatureStage {
}

export function featureStageToTerraform(struct?: FeatureStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function featureStageToHclTerraform(struct?: FeatureStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FeatureStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/feature okta_feature}
*/
export class Feature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Feature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Feature to import
  * @param importFromId The id of the existing Feature that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Feature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/feature okta_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_feature',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureId = config.featureId;
    this._lifeCycle = config.lifeCycle;
    this._mode = config.mode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // feature_id - computed: false, optional: false, required: true
  private _featureId?: string; 
  public get featureId() {
    return this.getStringAttribute('feature_id');
  }
  public set featureId(value: string) {
    this._featureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureIdInput() {
    return this._featureId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // life_cycle - computed: false, optional: true, required: false
  private _lifeCycle?: string; 
  public get lifeCycle() {
    return this.getStringAttribute('life_cycle');
  }
  public set lifeCycle(value: string) {
    this._lifeCycle = value;
  }
  public resetLifeCycle() {
    this._lifeCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleInput() {
    return this._lifeCycle;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: boolean | cdktf.IResolvable; 
  public get mode() {
    return this.getBooleanAttribute('mode');
  }
  public set mode(value: boolean | cdktf.IResolvable) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stage - computed: true, optional: false, required: false
  private _stage = new FeatureStageOutputReference(this, "stage");
  public get stage() {
    return this._stage;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_id: cdktf.stringToTerraform(this._featureId),
      life_cycle: cdktf.stringToTerraform(this._lifeCycle),
      mode: cdktf.booleanToTerraform(this._mode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_id: {
        value: cdktf.stringToHclTerraform(this._featureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      life_cycle: {
        value: cdktf.stringToHclTerraform(this._lifeCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.booleanToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
