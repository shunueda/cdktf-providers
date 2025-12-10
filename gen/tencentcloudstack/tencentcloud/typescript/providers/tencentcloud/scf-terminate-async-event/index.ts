// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/scf_terminate_async_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScfTerminateAsyncEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/scf_terminate_async_event#function_name ScfTerminateAsyncEvent#function_name}
  */
  readonly functionName: string;
  /**
  * Whether to enable grace shutdown. If it's true, a SIGTERM signal is sent to the specified request. See [Sending termination signal](https://www.tencentcloud.com/document/product/583/63969?from_cn_redirect=1#.E5.8F.91.E9.80.81.E7.BB.88.E6.AD.A2.E4.BF.A1.E5.8F.B7]. It's set to false by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/scf_terminate_async_event#grace_shutdown ScfTerminateAsyncEvent#grace_shutdown}
  */
  readonly graceShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/scf_terminate_async_event#id ScfTerminateAsyncEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Terminated invocation request ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/scf_terminate_async_event#invoke_request_id ScfTerminateAsyncEvent#invoke_request_id}
  */
  readonly invokeRequestId: string;
  /**
  * Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/scf_terminate_async_event#namespace ScfTerminateAsyncEvent#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/scf_terminate_async_event tencentcloud_scf_terminate_async_event}
*/
export class ScfTerminateAsyncEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_terminate_async_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScfTerminateAsyncEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScfTerminateAsyncEvent to import
  * @param importFromId The id of the existing ScfTerminateAsyncEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/scf_terminate_async_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScfTerminateAsyncEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_terminate_async_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/scf_terminate_async_event tencentcloud_scf_terminate_async_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScfTerminateAsyncEventConfig
  */
  public constructor(scope: Construct, id: string, config: ScfTerminateAsyncEventConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_terminate_async_event',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionName = config.functionName;
    this._graceShutdown = config.graceShutdown;
    this._id = config.id;
    this._invokeRequestId = config.invokeRequestId;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // grace_shutdown - computed: false, optional: true, required: false
  private _graceShutdown?: boolean | cdktf.IResolvable; 
  public get graceShutdown() {
    return this.getBooleanAttribute('grace_shutdown');
  }
  public set graceShutdown(value: boolean | cdktf.IResolvable) {
    this._graceShutdown = value;
  }
  public resetGraceShutdown() {
    this._graceShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceShutdownInput() {
    return this._graceShutdown;
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

  // invoke_request_id - computed: false, optional: false, required: true
  private _invokeRequestId?: string; 
  public get invokeRequestId() {
    return this.getStringAttribute('invoke_request_id');
  }
  public set invokeRequestId(value: string) {
    this._invokeRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeRequestIdInput() {
    return this._invokeRequestId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      grace_shutdown: cdktf.booleanToTerraform(this._graceShutdown),
      id: cdktf.stringToTerraform(this._id),
      invoke_request_id: cdktf.stringToTerraform(this._invokeRequestId),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grace_shutdown: {
        value: cdktf.booleanToHclTerraform(this._graceShutdown),
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
      invoke_request_id: {
        value: cdktf.stringToHclTerraform(this._invokeRequestId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
