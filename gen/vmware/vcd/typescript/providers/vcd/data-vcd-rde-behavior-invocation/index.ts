// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdRdeBehaviorInvocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The arguments to be passed to the invoked Behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation#arguments DataVcdRdeBehaviorInvocation#arguments}
  */
  readonly arguments?: { [key: string]: string };
  /**
  * The arguments to be passed to the invoked Behavior, as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation#arguments_json DataVcdRdeBehaviorInvocation#arguments_json}
  */
  readonly argumentsJson?: string;
  /**
  * The ID of either a RDE Interface Behavior or RDE Type Behavior to be invoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation#behavior_id DataVcdRdeBehaviorInvocation#behavior_id}
  */
  readonly behaviorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation#id DataVcdRdeBehaviorInvocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If 'true', invokes the Behavior on every refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation#invoke_on_refresh DataVcdRdeBehaviorInvocation#invoke_on_refresh}
  */
  readonly invokeOnRefresh?: boolean | cdktf.IResolvable;
  /**
  * Metadata to be passed to the invoked Behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation#metadata DataVcdRdeBehaviorInvocation#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Metadata to be passed to the invoked Behavior, as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation#metadata_json DataVcdRdeBehaviorInvocation#metadata_json}
  */
  readonly metadataJson?: string;
  /**
  * The ID of the RDE for which the Behavior will be invoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation#rde_id DataVcdRdeBehaviorInvocation#rde_id}
  */
  readonly rdeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation vcd_rde_behavior_invocation}
*/
export class DataVcdRdeBehaviorInvocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_rde_behavior_invocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdRdeBehaviorInvocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdRdeBehaviorInvocation to import
  * @param importFromId The id of the existing DataVcdRdeBehaviorInvocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdRdeBehaviorInvocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_rde_behavior_invocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/rde_behavior_invocation vcd_rde_behavior_invocation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdRdeBehaviorInvocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdRdeBehaviorInvocationConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_rde_behavior_invocation',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arguments = config.arguments;
    this._argumentsJson = config.argumentsJson;
    this._behaviorId = config.behaviorId;
    this._id = config.id;
    this._invokeOnRefresh = config.invokeOnRefresh;
    this._metadata = config.metadata;
    this._metadataJson = config.metadataJson;
    this._rdeId = config.rdeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arguments - computed: false, optional: true, required: false
  private _arguments?: { [key: string]: string }; 
  public get arguments() {
    return this.getStringMapAttribute('arguments');
  }
  public set arguments(value: { [key: string]: string }) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // arguments_json - computed: false, optional: true, required: false
  private _argumentsJson?: string; 
  public get argumentsJson() {
    return this.getStringAttribute('arguments_json');
  }
  public set argumentsJson(value: string) {
    this._argumentsJson = value;
  }
  public resetArgumentsJson() {
    this._argumentsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsJsonInput() {
    return this._argumentsJson;
  }

  // behavior_id - computed: false, optional: false, required: true
  private _behaviorId?: string; 
  public get behaviorId() {
    return this.getStringAttribute('behavior_id');
  }
  public set behaviorId(value: string) {
    this._behaviorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorIdInput() {
    return this._behaviorId;
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

  // invoke_on_refresh - computed: false, optional: true, required: false
  private _invokeOnRefresh?: boolean | cdktf.IResolvable; 
  public get invokeOnRefresh() {
    return this.getBooleanAttribute('invoke_on_refresh');
  }
  public set invokeOnRefresh(value: boolean | cdktf.IResolvable) {
    this._invokeOnRefresh = value;
  }
  public resetInvokeOnRefresh() {
    this._invokeOnRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeOnRefreshInput() {
    return this._invokeOnRefresh;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_json - computed: false, optional: true, required: false
  private _metadataJson?: string; 
  public get metadataJson() {
    return this.getStringAttribute('metadata_json');
  }
  public set metadataJson(value: string) {
    this._metadataJson = value;
  }
  public resetMetadataJson() {
    this._metadataJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataJsonInput() {
    return this._metadataJson;
  }

  // rde_id - computed: false, optional: false, required: true
  private _rdeId?: string; 
  public get rdeId() {
    return this.getStringAttribute('rde_id');
  }
  public set rdeId(value: string) {
    this._rdeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdeIdInput() {
    return this._rdeId;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arguments: cdktf.hashMapper(cdktf.stringToTerraform)(this._arguments),
      arguments_json: cdktf.stringToTerraform(this._argumentsJson),
      behavior_id: cdktf.stringToTerraform(this._behaviorId),
      id: cdktf.stringToTerraform(this._id),
      invoke_on_refresh: cdktf.booleanToTerraform(this._invokeOnRefresh),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      metadata_json: cdktf.stringToTerraform(this._metadataJson),
      rde_id: cdktf.stringToTerraform(this._rdeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arguments: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._arguments),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      arguments_json: {
        value: cdktf.stringToHclTerraform(this._argumentsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      behavior_id: {
        value: cdktf.stringToHclTerraform(this._behaviorId),
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
      invoke_on_refresh: {
        value: cdktf.booleanToHclTerraform(this._invokeOnRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata_json: {
        value: cdktf.stringToHclTerraform(this._metadataJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rde_id: {
        value: cdktf.stringToHclTerraform(this._rdeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
