// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vridparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VridparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vridparam#deadinterval Vridparam#deadinterval}
  */
  readonly deadinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vridparam#hellointerval Vridparam#hellointerval}
  */
  readonly hellointerval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vridparam#id Vridparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vridparam#sendtomaster Vridparam#sendtomaster}
  */
  readonly sendtomaster?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vridparam citrixadc_vridparam}
*/
export class Vridparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vridparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vridparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vridparam to import
  * @param importFromId The id of the existing Vridparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vridparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vridparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vridparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vridparam citrixadc_vridparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VridparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VridparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vridparam',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deadinterval = config.deadinterval;
    this._hellointerval = config.hellointerval;
    this._id = config.id;
    this._sendtomaster = config.sendtomaster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deadinterval - computed: true, optional: true, required: false
  private _deadinterval?: number; 
  public get deadinterval() {
    return this.getNumberAttribute('deadinterval');
  }
  public set deadinterval(value: number) {
    this._deadinterval = value;
  }
  public resetDeadinterval() {
    this._deadinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadintervalInput() {
    return this._deadinterval;
  }

  // hellointerval - computed: true, optional: true, required: false
  private _hellointerval?: number; 
  public get hellointerval() {
    return this.getNumberAttribute('hellointerval');
  }
  public set hellointerval(value: number) {
    this._hellointerval = value;
  }
  public resetHellointerval() {
    this._hellointerval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hellointervalInput() {
    return this._hellointerval;
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

  // sendtomaster - computed: true, optional: true, required: false
  private _sendtomaster?: string; 
  public get sendtomaster() {
    return this.getStringAttribute('sendtomaster');
  }
  public set sendtomaster(value: string) {
    this._sendtomaster = value;
  }
  public resetSendtomaster() {
    this._sendtomaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendtomasterInput() {
    return this._sendtomaster;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deadinterval: cdktf.numberToTerraform(this._deadinterval),
      hellointerval: cdktf.numberToTerraform(this._hellointerval),
      id: cdktf.stringToTerraform(this._id),
      sendtomaster: cdktf.stringToTerraform(this._sendtomaster),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deadinterval: {
        value: cdktf.numberToHclTerraform(this._deadinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hellointerval: {
        value: cdktf.numberToHclTerraform(this._hellointerval),
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
      sendtomaster: {
        value: cdktf.stringToHclTerraform(this._sendtomaster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
