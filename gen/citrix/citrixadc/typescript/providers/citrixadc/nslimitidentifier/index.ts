// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NslimitidentifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#id Nslimitidentifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#limitidentifier Nslimitidentifier#limitidentifier}
  */
  readonly limitidentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#limittype Nslimitidentifier#limittype}
  */
  readonly limittype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#maxbandwidth Nslimitidentifier#maxbandwidth}
  */
  readonly maxbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#mode Nslimitidentifier#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#selectorname Nslimitidentifier#selectorname}
  */
  readonly selectorname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#threshold Nslimitidentifier#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#timeslice Nslimitidentifier#timeslice}
  */
  readonly timeslice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#trapsintimeslice Nslimitidentifier#trapsintimeslice}
  */
  readonly trapsintimeslice?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier citrixadc_nslimitidentifier}
*/
export class Nslimitidentifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nslimitidentifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nslimitidentifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nslimitidentifier to import
  * @param importFromId The id of the existing Nslimitidentifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nslimitidentifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nslimitidentifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslimitidentifier citrixadc_nslimitidentifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NslimitidentifierConfig
  */
  public constructor(scope: Construct, id: string, config: NslimitidentifierConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nslimitidentifier',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._limitidentifier = config.limitidentifier;
    this._limittype = config.limittype;
    this._maxbandwidth = config.maxbandwidth;
    this._mode = config.mode;
    this._selectorname = config.selectorname;
    this._threshold = config.threshold;
    this._timeslice = config.timeslice;
    this._trapsintimeslice = config.trapsintimeslice;
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

  // limitidentifier - computed: false, optional: false, required: true
  private _limitidentifier?: string; 
  public get limitidentifier() {
    return this.getStringAttribute('limitidentifier');
  }
  public set limitidentifier(value: string) {
    this._limitidentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitidentifierInput() {
    return this._limitidentifier;
  }

  // limittype - computed: true, optional: true, required: false
  private _limittype?: string; 
  public get limittype() {
    return this.getStringAttribute('limittype');
  }
  public set limittype(value: string) {
    this._limittype = value;
  }
  public resetLimittype() {
    this._limittype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limittypeInput() {
    return this._limittype;
  }

  // maxbandwidth - computed: true, optional: true, required: false
  private _maxbandwidth?: number; 
  public get maxbandwidth() {
    return this.getNumberAttribute('maxbandwidth');
  }
  public set maxbandwidth(value: number) {
    this._maxbandwidth = value;
  }
  public resetMaxbandwidth() {
    this._maxbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxbandwidthInput() {
    return this._maxbandwidth;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // selectorname - computed: true, optional: true, required: false
  private _selectorname?: string; 
  public get selectorname() {
    return this.getStringAttribute('selectorname');
  }
  public set selectorname(value: string) {
    this._selectorname = value;
  }
  public resetSelectorname() {
    this._selectorname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectornameInput() {
    return this._selectorname;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // timeslice - computed: true, optional: true, required: false
  private _timeslice?: number; 
  public get timeslice() {
    return this.getNumberAttribute('timeslice');
  }
  public set timeslice(value: number) {
    this._timeslice = value;
  }
  public resetTimeslice() {
    this._timeslice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesliceInput() {
    return this._timeslice;
  }

  // trapsintimeslice - computed: true, optional: true, required: false
  private _trapsintimeslice?: number; 
  public get trapsintimeslice() {
    return this.getNumberAttribute('trapsintimeslice');
  }
  public set trapsintimeslice(value: number) {
    this._trapsintimeslice = value;
  }
  public resetTrapsintimeslice() {
    this._trapsintimeslice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsintimesliceInput() {
    return this._trapsintimeslice;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limitidentifier: cdktf.stringToTerraform(this._limitidentifier),
      limittype: cdktf.stringToTerraform(this._limittype),
      maxbandwidth: cdktf.numberToTerraform(this._maxbandwidth),
      mode: cdktf.stringToTerraform(this._mode),
      selectorname: cdktf.stringToTerraform(this._selectorname),
      threshold: cdktf.numberToTerraform(this._threshold),
      timeslice: cdktf.numberToTerraform(this._timeslice),
      trapsintimeslice: cdktf.numberToTerraform(this._trapsintimeslice),
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
      limitidentifier: {
        value: cdktf.stringToHclTerraform(this._limitidentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limittype: {
        value: cdktf.stringToHclTerraform(this._limittype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxbandwidth: {
        value: cdktf.numberToHclTerraform(this._maxbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selectorname: {
        value: cdktf.stringToHclTerraform(this._selectorname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeslice: {
        value: cdktf.numberToHclTerraform(this._timeslice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trapsintimeslice: {
        value: cdktf.numberToHclTerraform(this._trapsintimeslice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
