// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensionExecutionControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller#enabled ExtensionExecutionController#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller#id ExtensionExecutionController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable local HTTP Metric, Log and Event Ingest API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller#ingest_active ExtensionExecutionController#ingest_active}
  */
  readonly ingestActive?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `DEFAULT`, `HIGH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller#performance_profile ExtensionExecutionController#performance_profile}
  */
  readonly performanceProfile?: string;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller#scope ExtensionExecutionController#scope}
  */
  readonly scope?: string;
  /**
  * Enable Dynatrace StatsD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller#statsd_active ExtensionExecutionController#statsd_active}
  */
  readonly statsdActive?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller dynatrace_extension_execution_controller}
*/
export class ExtensionExecutionController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_extension_execution_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtensionExecutionController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtensionExecutionController to import
  * @param importFromId The id of the existing ExtensionExecutionController that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtensionExecutionController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_extension_execution_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/extension_execution_controller dynatrace_extension_execution_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensionExecutionControllerConfig
  */
  public constructor(scope: Construct, id: string, config: ExtensionExecutionControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_extension_execution_controller',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._ingestActive = config.ingestActive;
    this._performanceProfile = config.performanceProfile;
    this._scope = config.scope;
    this._statsdActive = config.statsdActive;
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

  // ingest_active - computed: false, optional: true, required: false
  private _ingestActive?: boolean | cdktf.IResolvable; 
  public get ingestActive() {
    return this.getBooleanAttribute('ingest_active');
  }
  public set ingestActive(value: boolean | cdktf.IResolvable) {
    this._ingestActive = value;
  }
  public resetIngestActive() {
    this._ingestActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestActiveInput() {
    return this._ingestActive;
  }

  // performance_profile - computed: false, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
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

  // statsd_active - computed: false, optional: true, required: false
  private _statsdActive?: boolean | cdktf.IResolvable; 
  public get statsdActive() {
    return this.getBooleanAttribute('statsd_active');
  }
  public set statsdActive(value: boolean | cdktf.IResolvable) {
    this._statsdActive = value;
  }
  public resetStatsdActive() {
    this._statsdActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdActiveInput() {
    return this._statsdActive;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ingest_active: cdktf.booleanToTerraform(this._ingestActive),
      performance_profile: cdktf.stringToTerraform(this._performanceProfile),
      scope: cdktf.stringToTerraform(this._scope),
      statsd_active: cdktf.booleanToTerraform(this._statsdActive),
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
      ingest_active: {
        value: cdktf.booleanToHclTerraform(this._ingestActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      performance_profile: {
        value: cdktf.stringToHclTerraform(this._performanceProfile),
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
      statsd_active: {
        value: cdktf.booleanToHclTerraform(this._statsdActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
