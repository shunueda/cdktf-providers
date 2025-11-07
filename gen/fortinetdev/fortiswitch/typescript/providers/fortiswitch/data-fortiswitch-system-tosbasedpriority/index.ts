// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_tosbasedpriority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemTosbasedpriorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_tosbasedpriority#fswid DataFortiswitchSystemTosbasedpriority#fswid}
  */
  readonly fswid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_tosbasedpriority#id DataFortiswitchSystemTosbasedpriority#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_tosbasedpriority fortiswitch_system_tosbasedpriority}
*/
export class DataFortiswitchSystemTosbasedpriority extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_tosbasedpriority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemTosbasedpriority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemTosbasedpriority to import
  * @param importFromId The id of the existing DataFortiswitchSystemTosbasedpriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_tosbasedpriority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemTosbasedpriority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_tosbasedpriority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_tosbasedpriority fortiswitch_system_tosbasedpriority} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemTosbasedpriorityConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemTosbasedpriorityConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_tosbasedpriority',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fswid = config.fswid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fswid - computed: false, optional: false, required: true
  private _fswid?: number; 
  public get fswid() {
    return this.getNumberAttribute('fswid');
  }
  public set fswid(value: number) {
    this._fswid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fswidInput() {
    return this._fswid;
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // tos - computed: true, optional: false, required: false
  public get tos() {
    return this.getNumberAttribute('tos');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fswid: cdktf.numberToTerraform(this._fswid),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fswid: {
        value: cdktf.numberToHclTerraform(this._fswid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
