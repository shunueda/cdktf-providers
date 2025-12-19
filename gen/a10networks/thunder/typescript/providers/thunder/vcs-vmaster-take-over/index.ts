// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vmaster_take_over
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsVmasterTakeOverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vmaster_take_over#id VcsVmasterTakeOver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * vMaster take over priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vmaster_take_over#vmaster_take_over VcsVmasterTakeOver#vmaster_take_over}
  */
  readonly vmasterTakeOver?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vmaster_take_over thunder_vcs_vmaster_take_over}
*/
export class VcsVmasterTakeOver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_vmaster_take_over";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsVmasterTakeOver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsVmasterTakeOver to import
  * @param importFromId The id of the existing VcsVmasterTakeOver that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vmaster_take_over#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsVmasterTakeOver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_vmaster_take_over", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vmaster_take_over thunder_vcs_vmaster_take_over} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsVmasterTakeOverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VcsVmasterTakeOverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_vmaster_take_over',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._vmasterTakeOver = config.vmasterTakeOver;
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

  // vmaster_take_over - computed: false, optional: true, required: false
  private _vmasterTakeOver?: number; 
  public get vmasterTakeOver() {
    return this.getNumberAttribute('vmaster_take_over');
  }
  public set vmasterTakeOver(value: number) {
    this._vmasterTakeOver = value;
  }
  public resetVmasterTakeOver() {
    this._vmasterTakeOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmasterTakeOverInput() {
    return this._vmasterTakeOver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vmaster_take_over: cdktf.numberToTerraform(this._vmasterTakeOver),
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
      vmaster_take_over: {
        value: cdktf.numberToHclTerraform(this._vmasterTakeOver),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
