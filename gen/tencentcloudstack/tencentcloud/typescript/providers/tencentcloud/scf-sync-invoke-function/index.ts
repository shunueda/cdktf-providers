// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScfSyncInvokeFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Function running parameter, which is in the JSON format. Maximum parameter size is 6 MB. This field corresponds to event input parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function#event ScfSyncInvokeFunction#event}
  */
  readonly event?: string;
  /**
  * Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function#function_name ScfSyncInvokeFunction#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function#id ScfSyncInvokeFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Valid value: None (default) or Tail. If the value is Tail, log in the response will contain the corresponding function execution log (up to 4KB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function#log_type ScfSyncInvokeFunction#log_type}
  */
  readonly logType?: string;
  /**
  * Namespace. default is used if it's left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function#namespace ScfSyncInvokeFunction#namespace}
  */
  readonly namespace?: string;
  /**
  * Version or alias of the function. It defaults to $DEFAULT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function#qualifier ScfSyncInvokeFunction#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Traffic routing config in json format, e.g., {k:v}. Please note that both k and v must be strings. Up to 1024 bytes allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function#routing_key ScfSyncInvokeFunction#routing_key}
  */
  readonly routingKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function tencentcloud_scf_sync_invoke_function}
*/
export class ScfSyncInvokeFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_sync_invoke_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScfSyncInvokeFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScfSyncInvokeFunction to import
  * @param importFromId The id of the existing ScfSyncInvokeFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScfSyncInvokeFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_sync_invoke_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/scf_sync_invoke_function tencentcloud_scf_sync_invoke_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScfSyncInvokeFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: ScfSyncInvokeFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_sync_invoke_function',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._event = config.event;
    this._functionName = config.functionName;
    this._id = config.id;
    this._logType = config.logType;
    this._namespace = config.namespace;
    this._qualifier = config.qualifier;
    this._routingKey = config.routingKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // routing_key - computed: false, optional: true, required: false
  private _routingKey?: string; 
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }
  public set routingKey(value: string) {
    this._routingKey = value;
  }
  public resetRoutingKey() {
    this._routingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event: cdktf.stringToTerraform(this._event),
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      log_type: cdktf.stringToTerraform(this._logType),
      namespace: cdktf.stringToTerraform(this._namespace),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      routing_key: cdktf.stringToTerraform(this._routingKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event: {
        value: cdktf.stringToHclTerraform(this._event),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualifier: {
        value: cdktf.stringToHclTerraform(this._qualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_key: {
        value: cdktf.stringToHclTerraform(this._routingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
