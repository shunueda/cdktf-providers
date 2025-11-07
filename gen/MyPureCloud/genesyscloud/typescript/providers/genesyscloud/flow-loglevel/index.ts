// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/flow_loglevel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowLoglevelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The flowId for this characteristics set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/flow_loglevel#flow_id FlowLoglevel#flow_id}
  */
  readonly flowId: string;
  /**
  * The logLevel for this characteristics set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/flow_loglevel#flow_log_level FlowLoglevel#flow_log_level}
  */
  readonly flowLogLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/flow_loglevel#id FlowLoglevel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/flow_loglevel genesyscloud_flow_loglevel}
*/
export class FlowLoglevel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_flow_loglevel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowLoglevel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowLoglevel to import
  * @param importFromId The id of the existing FlowLoglevel that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/flow_loglevel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowLoglevel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_flow_loglevel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/flow_loglevel genesyscloud_flow_loglevel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowLoglevelConfig
  */
  public constructor(scope: Construct, id: string, config: FlowLoglevelConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_flow_loglevel',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flowId = config.flowId;
    this._flowLogLevel = config.flowLogLevel;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flow_id - computed: false, optional: false, required: true
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // flow_log_level - computed: false, optional: false, required: true
  private _flowLogLevel?: string; 
  public get flowLogLevel() {
    return this.getStringAttribute('flow_log_level');
  }
  public set flowLogLevel(value: string) {
    this._flowLogLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogLevelInput() {
    return this._flowLogLevel;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flow_id: cdktf.stringToTerraform(this._flowId),
      flow_log_level: cdktf.stringToTerraform(this._flowLogLevel),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flow_id: {
        value: cdktf.stringToHclTerraform(this._flowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_log_level: {
        value: cdktf.stringToHclTerraform(this._flowLogLevel),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
