// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OneagentFeaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features#enabled OneagentFeatures#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Activate this feature also in OneAgents only fulfilling the minimum Opt-In version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features#forcible OneagentFeatures#forcible}
  */
  readonly forcible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features#id OneagentFeatures#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instrumentation enabled (change needs a process restart)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features#instrumentation OneagentFeatures#instrumentation}
  */
  readonly instrumentation?: boolean | cdktf.IResolvable;
  /**
  * Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features#key OneagentFeatures#key}
  */
  readonly key: string;
  /**
  * The scope of this setting (PROCESS_GROUP_INSTANCE, PROCESS_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features#scope OneagentFeatures#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features dynatrace_oneagent_features}
*/
export class OneagentFeatures extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_oneagent_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OneagentFeatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OneagentFeatures to import
  * @param importFromId The id of the existing OneagentFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OneagentFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_oneagent_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/oneagent_features dynatrace_oneagent_features} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OneagentFeaturesConfig
  */
  public constructor(scope: Construct, id: string, config: OneagentFeaturesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_oneagent_features',
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
    this._enabled = config.enabled;
    this._forcible = config.forcible;
    this._id = config.id;
    this._instrumentation = config.instrumentation;
    this._key = config.key;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _restore_ - computed: true, optional: false, required: false
  public get restore() {
    return this.getStringAttribute('_restore_');
  }

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

  // forcible - computed: false, optional: true, required: false
  private _forcible?: boolean | cdktf.IResolvable; 
  public get forcible() {
    return this.getBooleanAttribute('forcible');
  }
  public set forcible(value: boolean | cdktf.IResolvable) {
    this._forcible = value;
  }
  public resetForcible() {
    this._forcible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcibleInput() {
    return this._forcible;
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

  // instrumentation - computed: false, optional: true, required: false
  private _instrumentation?: boolean | cdktf.IResolvable; 
  public get instrumentation() {
    return this.getBooleanAttribute('instrumentation');
  }
  public set instrumentation(value: boolean | cdktf.IResolvable) {
    this._instrumentation = value;
  }
  public resetInstrumentation() {
    this._instrumentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationInput() {
    return this._instrumentation;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      forcible: cdktf.booleanToTerraform(this._forcible),
      id: cdktf.stringToTerraform(this._id),
      instrumentation: cdktf.booleanToTerraform(this._instrumentation),
      key: cdktf.stringToTerraform(this._key),
      scope: cdktf.stringToTerraform(this._scope),
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
      forcible: {
        value: cdktf.booleanToHclTerraform(this._forcible),
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
      instrumentation: {
        value: cdktf.booleanToHclTerraform(this._instrumentation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
