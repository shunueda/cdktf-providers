// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_topology
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogTopologyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_topology#id SystemLogTopology#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_topology#max_depth SystemLogTopology#max_depth}
  */
  readonly maxDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_topology#max_depth_share SystemLogTopology#max_depth_share}
  */
  readonly maxDepthShare?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_topology fortianalyzer_system_log_topology}
*/
export class SystemLogTopology extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_log_topology";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogTopology resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogTopology to import
  * @param importFromId The id of the existing SystemLogTopology that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_topology#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogTopology to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_log_topology", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_topology fortianalyzer_system_log_topology} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogTopologyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogTopologyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_log_topology',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
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
    this._maxDepth = config.maxDepth;
    this._maxDepthShare = config.maxDepthShare;
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

  // max_depth - computed: true, optional: true, required: false
  private _maxDepth?: number; 
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }
  public set maxDepth(value: number) {
    this._maxDepth = value;
  }
  public resetMaxDepth() {
    this._maxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDepthInput() {
    return this._maxDepth;
  }

  // max_depth_share - computed: true, optional: true, required: false
  private _maxDepthShare?: number; 
  public get maxDepthShare() {
    return this.getNumberAttribute('max_depth_share');
  }
  public set maxDepthShare(value: number) {
    this._maxDepthShare = value;
  }
  public resetMaxDepthShare() {
    this._maxDepthShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDepthShareInput() {
    return this._maxDepthShare;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_depth: cdktf.numberToTerraform(this._maxDepth),
      max_depth_share: cdktf.numberToTerraform(this._maxDepthShare),
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
      max_depth: {
        value: cdktf.numberToHclTerraform(this._maxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_depth_share: {
        value: cdktf.numberToHclTerraform(this._maxDepthShare),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
