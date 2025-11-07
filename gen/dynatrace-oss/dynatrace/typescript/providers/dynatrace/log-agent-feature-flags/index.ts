// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_agent_feature_flags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAgentFeatureFlagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_agent_feature_flags#id LogAgentFeatureFlags#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable OneAgent to collect logs from Journald on Linux systems. 
  * This setting enables:
  * * Detection and to have logs ingested matching ingest rule is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_agent_feature_flags#journald_log_detector LogAgentFeatureFlags#journald_log_detector}
  */
  readonly journaldLogDetector?: boolean | cdktf.IResolvable;
  /**
  * Enable OneAgent to collect all container logs in Kubernetes environments. 
  * This setting enables:
  * * Detection and collection of logs from short-lived containers and processes in Kubernetes.
  * * Detection and collection of logs from any processes in containers in Kubernetes. Up until now only processes detected by OneAgent are covered with the Log module.
  * * Log events decoration according to semantic dictionary.
  *  **Note:** The matcher "Deployment name" in the log sources configuration will be ignored and needs to be replaced with "Workload name", requires **Dynatrace Operator 1.4.2+**.
  * 
  *  For more details, check our [documentation](https://dt-url.net/jn02ey0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_agent_feature_flags#new_container_log_detector LogAgentFeatureFlags#new_container_log_detector}
  */
  readonly newContainerLogDetector: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (HOST, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_agent_feature_flags#scope LogAgentFeatureFlags#scope}
  */
  readonly scope?: string;
  /**
  * Enable OneAgent to collect data from Event Logs in the User Data and Event Data sections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_agent_feature_flags#user_and_event_data LogAgentFeatureFlags#user_and_event_data}
  */
  readonly userAndEventData?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_agent_feature_flags dynatrace_log_agent_feature_flags}
*/
export class LogAgentFeatureFlags extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_log_agent_feature_flags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAgentFeatureFlags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAgentFeatureFlags to import
  * @param importFromId The id of the existing LogAgentFeatureFlags that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_agent_feature_flags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAgentFeatureFlags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_log_agent_feature_flags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_agent_feature_flags dynatrace_log_agent_feature_flags} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAgentFeatureFlagsConfig
  */
  public constructor(scope: Construct, id: string, config: LogAgentFeatureFlagsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_log_agent_feature_flags',
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
    this._id = config.id;
    this._journaldLogDetector = config.journaldLogDetector;
    this._newContainerLogDetector = config.newContainerLogDetector;
    this._scope = config.scope;
    this._userAndEventData = config.userAndEventData;
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

  // journald_log_detector - computed: false, optional: true, required: false
  private _journaldLogDetector?: boolean | cdktf.IResolvable; 
  public get journaldLogDetector() {
    return this.getBooleanAttribute('journald_log_detector');
  }
  public set journaldLogDetector(value: boolean | cdktf.IResolvable) {
    this._journaldLogDetector = value;
  }
  public resetJournaldLogDetector() {
    this._journaldLogDetector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get journaldLogDetectorInput() {
    return this._journaldLogDetector;
  }

  // new_container_log_detector - computed: false, optional: false, required: true
  private _newContainerLogDetector?: boolean | cdktf.IResolvable; 
  public get newContainerLogDetector() {
    return this.getBooleanAttribute('new_container_log_detector');
  }
  public set newContainerLogDetector(value: boolean | cdktf.IResolvable) {
    this._newContainerLogDetector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContainerLogDetectorInput() {
    return this._newContainerLogDetector;
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

  // user_and_event_data - computed: false, optional: true, required: false
  private _userAndEventData?: boolean | cdktf.IResolvable; 
  public get userAndEventData() {
    return this.getBooleanAttribute('user_and_event_data');
  }
  public set userAndEventData(value: boolean | cdktf.IResolvable) {
    this._userAndEventData = value;
  }
  public resetUserAndEventData() {
    this._userAndEventData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAndEventDataInput() {
    return this._userAndEventData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      journald_log_detector: cdktf.booleanToTerraform(this._journaldLogDetector),
      new_container_log_detector: cdktf.booleanToTerraform(this._newContainerLogDetector),
      scope: cdktf.stringToTerraform(this._scope),
      user_and_event_data: cdktf.booleanToTerraform(this._userAndEventData),
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
      journald_log_detector: {
        value: cdktf.booleanToHclTerraform(this._journaldLogDetector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      new_container_log_detector: {
        value: cdktf.booleanToHclTerraform(this._newContainerLogDetector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_and_event_data: {
        value: cdktf.booleanToHclTerraform(this._userAndEventData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
