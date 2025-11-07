// https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/start_nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StartNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path of the lab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/start_nodes#lab_path StartNodes#lab_path}
  */
  readonly labPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/start_nodes eveng_start_nodes}
*/
export class StartNodes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "eveng_start_nodes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StartNodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StartNodes to import
  * @param importFromId The id of the existing StartNodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/start_nodes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StartNodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "eveng_start_nodes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/start_nodes eveng_start_nodes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StartNodesConfig
  */
  public constructor(scope: Construct, id: string, config: StartNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'eveng_start_nodes',
      terraformGeneratorMetadata: {
        providerName: 'eveng',
        providerVersion: '0.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labPath = config.labPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // lab_path - computed: false, optional: false, required: true
  private _labPath?: string; 
  public get labPath() {
    return this.getStringAttribute('lab_path');
  }
  public set labPath(value: string) {
    this._labPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labPathInput() {
    return this._labPath;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lab_path: cdktf.stringToTerraform(this._labPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lab_path: {
        value: cdktf.stringToHclTerraform(this._labPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
