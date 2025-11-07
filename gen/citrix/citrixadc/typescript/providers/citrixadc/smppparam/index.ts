// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmppparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam#addrnpi Smppparam#addrnpi}
  */
  readonly addrnpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam#addrrange Smppparam#addrrange}
  */
  readonly addrrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam#addrton Smppparam#addrton}
  */
  readonly addrton?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam#clientmode Smppparam#clientmode}
  */
  readonly clientmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam#id Smppparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam#msgqueue Smppparam#msgqueue}
  */
  readonly msgqueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam#msgqueuesize Smppparam#msgqueuesize}
  */
  readonly msgqueuesize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam citrixadc_smppparam}
*/
export class Smppparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_smppparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Smppparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Smppparam to import
  * @param importFromId The id of the existing Smppparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Smppparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_smppparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/smppparam citrixadc_smppparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmppparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SmppparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_smppparam',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrnpi = config.addrnpi;
    this._addrrange = config.addrrange;
    this._addrton = config.addrton;
    this._clientmode = config.clientmode;
    this._id = config.id;
    this._msgqueue = config.msgqueue;
    this._msgqueuesize = config.msgqueuesize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addrnpi - computed: true, optional: true, required: false
  private _addrnpi?: number; 
  public get addrnpi() {
    return this.getNumberAttribute('addrnpi');
  }
  public set addrnpi(value: number) {
    this._addrnpi = value;
  }
  public resetAddrnpi() {
    this._addrnpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrnpiInput() {
    return this._addrnpi;
  }

  // addrrange - computed: true, optional: true, required: false
  private _addrrange?: string; 
  public get addrrange() {
    return this.getStringAttribute('addrrange');
  }
  public set addrrange(value: string) {
    this._addrrange = value;
  }
  public resetAddrrange() {
    this._addrrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrrangeInput() {
    return this._addrrange;
  }

  // addrton - computed: true, optional: true, required: false
  private _addrton?: number; 
  public get addrton() {
    return this.getNumberAttribute('addrton');
  }
  public set addrton(value: number) {
    this._addrton = value;
  }
  public resetAddrton() {
    this._addrton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrtonInput() {
    return this._addrton;
  }

  // clientmode - computed: true, optional: true, required: false
  private _clientmode?: string; 
  public get clientmode() {
    return this.getStringAttribute('clientmode');
  }
  public set clientmode(value: string) {
    this._clientmode = value;
  }
  public resetClientmode() {
    this._clientmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientmodeInput() {
    return this._clientmode;
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

  // msgqueue - computed: true, optional: true, required: false
  private _msgqueue?: string; 
  public get msgqueue() {
    return this.getStringAttribute('msgqueue');
  }
  public set msgqueue(value: string) {
    this._msgqueue = value;
  }
  public resetMsgqueue() {
    this._msgqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgqueueInput() {
    return this._msgqueue;
  }

  // msgqueuesize - computed: true, optional: true, required: false
  private _msgqueuesize?: number; 
  public get msgqueuesize() {
    return this.getNumberAttribute('msgqueuesize');
  }
  public set msgqueuesize(value: number) {
    this._msgqueuesize = value;
  }
  public resetMsgqueuesize() {
    this._msgqueuesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgqueuesizeInput() {
    return this._msgqueuesize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addrnpi: cdktf.numberToTerraform(this._addrnpi),
      addrrange: cdktf.stringToTerraform(this._addrrange),
      addrton: cdktf.numberToTerraform(this._addrton),
      clientmode: cdktf.stringToTerraform(this._clientmode),
      id: cdktf.stringToTerraform(this._id),
      msgqueue: cdktf.stringToTerraform(this._msgqueue),
      msgqueuesize: cdktf.numberToTerraform(this._msgqueuesize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addrnpi: {
        value: cdktf.numberToHclTerraform(this._addrnpi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      addrrange: {
        value: cdktf.stringToHclTerraform(this._addrrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addrton: {
        value: cdktf.numberToHclTerraform(this._addrton),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientmode: {
        value: cdktf.stringToHclTerraform(this._clientmode),
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
      msgqueue: {
        value: cdktf.stringToHclTerraform(this._msgqueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msgqueuesize: {
        value: cdktf.numberToHclTerraform(this._msgqueuesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
