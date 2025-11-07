// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbsipparametersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters#addrportvip Lbsipparameters#addrportvip}
  */
  readonly addrportvip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters#id Lbsipparameters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters#retrydur Lbsipparameters#retrydur}
  */
  readonly retrydur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters#rnatdstport Lbsipparameters#rnatdstport}
  */
  readonly rnatdstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters#rnatsecuredstport Lbsipparameters#rnatsecuredstport}
  */
  readonly rnatsecuredstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters#rnatsecuresrcport Lbsipparameters#rnatsecuresrcport}
  */
  readonly rnatsecuresrcport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters#rnatsrcport Lbsipparameters#rnatsrcport}
  */
  readonly rnatsrcport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters#sip503ratethreshold Lbsipparameters#sip503ratethreshold}
  */
  readonly sip503Ratethreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters citrixadc_lbsipparameters}
*/
export class Lbsipparameters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbsipparameters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lbsipparameters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lbsipparameters to import
  * @param importFromId The id of the existing Lbsipparameters that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lbsipparameters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbsipparameters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lbsipparameters citrixadc_lbsipparameters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbsipparametersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbsipparametersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbsipparameters',
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
    this._addrportvip = config.addrportvip;
    this._id = config.id;
    this._retrydur = config.retrydur;
    this._rnatdstport = config.rnatdstport;
    this._rnatsecuredstport = config.rnatsecuredstport;
    this._rnatsecuresrcport = config.rnatsecuresrcport;
    this._rnatsrcport = config.rnatsrcport;
    this._sip503Ratethreshold = config.sip503Ratethreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addrportvip - computed: true, optional: true, required: false
  private _addrportvip?: string; 
  public get addrportvip() {
    return this.getStringAttribute('addrportvip');
  }
  public set addrportvip(value: string) {
    this._addrportvip = value;
  }
  public resetAddrportvip() {
    this._addrportvip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrportvipInput() {
    return this._addrportvip;
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

  // retrydur - computed: true, optional: true, required: false
  private _retrydur?: number; 
  public get retrydur() {
    return this.getNumberAttribute('retrydur');
  }
  public set retrydur(value: number) {
    this._retrydur = value;
  }
  public resetRetrydur() {
    this._retrydur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrydurInput() {
    return this._retrydur;
  }

  // rnatdstport - computed: true, optional: true, required: false
  private _rnatdstport?: number; 
  public get rnatdstport() {
    return this.getNumberAttribute('rnatdstport');
  }
  public set rnatdstport(value: number) {
    this._rnatdstport = value;
  }
  public resetRnatdstport() {
    this._rnatdstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnatdstportInput() {
    return this._rnatdstport;
  }

  // rnatsecuredstport - computed: true, optional: true, required: false
  private _rnatsecuredstport?: number; 
  public get rnatsecuredstport() {
    return this.getNumberAttribute('rnatsecuredstport');
  }
  public set rnatsecuredstport(value: number) {
    this._rnatsecuredstport = value;
  }
  public resetRnatsecuredstport() {
    this._rnatsecuredstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnatsecuredstportInput() {
    return this._rnatsecuredstport;
  }

  // rnatsecuresrcport - computed: true, optional: true, required: false
  private _rnatsecuresrcport?: number; 
  public get rnatsecuresrcport() {
    return this.getNumberAttribute('rnatsecuresrcport');
  }
  public set rnatsecuresrcport(value: number) {
    this._rnatsecuresrcport = value;
  }
  public resetRnatsecuresrcport() {
    this._rnatsecuresrcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnatsecuresrcportInput() {
    return this._rnatsecuresrcport;
  }

  // rnatsrcport - computed: true, optional: true, required: false
  private _rnatsrcport?: number; 
  public get rnatsrcport() {
    return this.getNumberAttribute('rnatsrcport');
  }
  public set rnatsrcport(value: number) {
    this._rnatsrcport = value;
  }
  public resetRnatsrcport() {
    this._rnatsrcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnatsrcportInput() {
    return this._rnatsrcport;
  }

  // sip503ratethreshold - computed: true, optional: true, required: false
  private _sip503Ratethreshold?: number; 
  public get sip503Ratethreshold() {
    return this.getNumberAttribute('sip503ratethreshold');
  }
  public set sip503Ratethreshold(value: number) {
    this._sip503Ratethreshold = value;
  }
  public resetSip503Ratethreshold() {
    this._sip503Ratethreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sip503RatethresholdInput() {
    return this._sip503Ratethreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addrportvip: cdktf.stringToTerraform(this._addrportvip),
      id: cdktf.stringToTerraform(this._id),
      retrydur: cdktf.numberToTerraform(this._retrydur),
      rnatdstport: cdktf.numberToTerraform(this._rnatdstport),
      rnatsecuredstport: cdktf.numberToTerraform(this._rnatsecuredstport),
      rnatsecuresrcport: cdktf.numberToTerraform(this._rnatsecuresrcport),
      rnatsrcport: cdktf.numberToTerraform(this._rnatsrcport),
      sip503ratethreshold: cdktf.numberToTerraform(this._sip503Ratethreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addrportvip: {
        value: cdktf.stringToHclTerraform(this._addrportvip),
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
      retrydur: {
        value: cdktf.numberToHclTerraform(this._retrydur),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rnatdstport: {
        value: cdktf.numberToHclTerraform(this._rnatdstport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rnatsecuredstport: {
        value: cdktf.numberToHclTerraform(this._rnatsecuredstport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rnatsecuresrcport: {
        value: cdktf.numberToHclTerraform(this._rnatsecuresrcport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rnatsrcport: {
        value: cdktf.numberToHclTerraform(this._rnatsrcport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip503ratethreshold: {
        value: cdktf.numberToHclTerraform(this._sip503Ratethreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
