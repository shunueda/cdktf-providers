// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsmodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#bridgebpdus Nsmode#bridgebpdus}
  */
  readonly bridgebpdus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#cka Nsmode#cka}
  */
  readonly cka?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#dradv Nsmode#dradv}
  */
  readonly dradv?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#dradv6 Nsmode#dradv6}
  */
  readonly dradv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#edge Nsmode#edge}
  */
  readonly edge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#fr Nsmode#fr}
  */
  readonly fr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#id Nsmode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#iradv Nsmode#iradv}
  */
  readonly iradv?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#l2 Nsmode#l2}
  */
  readonly l2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#l3 Nsmode#l3}
  */
  readonly l3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#mbf Nsmode#mbf}
  */
  readonly mbf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#mediaclassification Nsmode#mediaclassification}
  */
  readonly mediaclassification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#pmtud Nsmode#pmtud}
  */
  readonly pmtud?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#sradv Nsmode#sradv}
  */
  readonly sradv?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#sradv6 Nsmode#sradv6}
  */
  readonly sradv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#tcpb Nsmode#tcpb}
  */
  readonly tcpb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#ulfd Nsmode#ulfd}
  */
  readonly ulfd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#usip Nsmode#usip}
  */
  readonly usip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#usnip Nsmode#usnip}
  */
  readonly usnip?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode citrixadc_nsmode}
*/
export class Nsmode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsmode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsmode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsmode to import
  * @param importFromId The id of the existing Nsmode that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsmode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsmode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsmode citrixadc_nsmode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsmodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsmodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsmode',
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
    this._bridgebpdus = config.bridgebpdus;
    this._cka = config.cka;
    this._dradv = config.dradv;
    this._dradv6 = config.dradv6;
    this._edge = config.edge;
    this._fr = config.fr;
    this._id = config.id;
    this._iradv = config.iradv;
    this._l2 = config.l2;
    this._l3 = config.l3;
    this._mbf = config.mbf;
    this._mediaclassification = config.mediaclassification;
    this._pmtud = config.pmtud;
    this._sradv = config.sradv;
    this._sradv6 = config.sradv6;
    this._tcpb = config.tcpb;
    this._ulfd = config.ulfd;
    this._usip = config.usip;
    this._usnip = config.usnip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridgebpdus - computed: true, optional: true, required: false
  private _bridgebpdus?: boolean | cdktf.IResolvable; 
  public get bridgebpdus() {
    return this.getBooleanAttribute('bridgebpdus');
  }
  public set bridgebpdus(value: boolean | cdktf.IResolvable) {
    this._bridgebpdus = value;
  }
  public resetBridgebpdus() {
    this._bridgebpdus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgebpdusInput() {
    return this._bridgebpdus;
  }

  // cka - computed: true, optional: true, required: false
  private _cka?: boolean | cdktf.IResolvable; 
  public get cka() {
    return this.getBooleanAttribute('cka');
  }
  public set cka(value: boolean | cdktf.IResolvable) {
    this._cka = value;
  }
  public resetCka() {
    this._cka = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ckaInput() {
    return this._cka;
  }

  // dradv - computed: true, optional: true, required: false
  private _dradv?: boolean | cdktf.IResolvable; 
  public get dradv() {
    return this.getBooleanAttribute('dradv');
  }
  public set dradv(value: boolean | cdktf.IResolvable) {
    this._dradv = value;
  }
  public resetDradv() {
    this._dradv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dradvInput() {
    return this._dradv;
  }

  // dradv6 - computed: true, optional: true, required: false
  private _dradv6?: boolean | cdktf.IResolvable; 
  public get dradv6() {
    return this.getBooleanAttribute('dradv6');
  }
  public set dradv6(value: boolean | cdktf.IResolvable) {
    this._dradv6 = value;
  }
  public resetDradv6() {
    this._dradv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dradv6Input() {
    return this._dradv6;
  }

  // edge - computed: true, optional: true, required: false
  private _edge?: boolean | cdktf.IResolvable; 
  public get edge() {
    return this.getBooleanAttribute('edge');
  }
  public set edge(value: boolean | cdktf.IResolvable) {
    this._edge = value;
  }
  public resetEdge() {
    this._edge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeInput() {
    return this._edge;
  }

  // fr - computed: true, optional: true, required: false
  private _fr?: boolean | cdktf.IResolvable; 
  public get fr() {
    return this.getBooleanAttribute('fr');
  }
  public set fr(value: boolean | cdktf.IResolvable) {
    this._fr = value;
  }
  public resetFr() {
    this._fr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frInput() {
    return this._fr;
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

  // iradv - computed: true, optional: true, required: false
  private _iradv?: boolean | cdktf.IResolvable; 
  public get iradv() {
    return this.getBooleanAttribute('iradv');
  }
  public set iradv(value: boolean | cdktf.IResolvable) {
    this._iradv = value;
  }
  public resetIradv() {
    this._iradv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iradvInput() {
    return this._iradv;
  }

  // l2 - computed: true, optional: true, required: false
  private _l2?: boolean | cdktf.IResolvable; 
  public get l2() {
    return this.getBooleanAttribute('l2');
  }
  public set l2(value: boolean | cdktf.IResolvable) {
    this._l2 = value;
  }
  public resetL2() {
    this._l2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2Input() {
    return this._l2;
  }

  // l3 - computed: true, optional: true, required: false
  private _l3?: boolean | cdktf.IResolvable; 
  public get l3() {
    return this.getBooleanAttribute('l3');
  }
  public set l3(value: boolean | cdktf.IResolvable) {
    this._l3 = value;
  }
  public resetL3() {
    this._l3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3Input() {
    return this._l3;
  }

  // mbf - computed: true, optional: true, required: false
  private _mbf?: boolean | cdktf.IResolvable; 
  public get mbf() {
    return this.getBooleanAttribute('mbf');
  }
  public set mbf(value: boolean | cdktf.IResolvable) {
    this._mbf = value;
  }
  public resetMbf() {
    this._mbf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbfInput() {
    return this._mbf;
  }

  // mediaclassification - computed: true, optional: true, required: false
  private _mediaclassification?: boolean | cdktf.IResolvable; 
  public get mediaclassification() {
    return this.getBooleanAttribute('mediaclassification');
  }
  public set mediaclassification(value: boolean | cdktf.IResolvable) {
    this._mediaclassification = value;
  }
  public resetMediaclassification() {
    this._mediaclassification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaclassificationInput() {
    return this._mediaclassification;
  }

  // pmtud - computed: true, optional: true, required: false
  private _pmtud?: boolean | cdktf.IResolvable; 
  public get pmtud() {
    return this.getBooleanAttribute('pmtud');
  }
  public set pmtud(value: boolean | cdktf.IResolvable) {
    this._pmtud = value;
  }
  public resetPmtud() {
    this._pmtud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtudInput() {
    return this._pmtud;
  }

  // sradv - computed: true, optional: true, required: false
  private _sradv?: boolean | cdktf.IResolvable; 
  public get sradv() {
    return this.getBooleanAttribute('sradv');
  }
  public set sradv(value: boolean | cdktf.IResolvable) {
    this._sradv = value;
  }
  public resetSradv() {
    this._sradv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sradvInput() {
    return this._sradv;
  }

  // sradv6 - computed: true, optional: true, required: false
  private _sradv6?: boolean | cdktf.IResolvable; 
  public get sradv6() {
    return this.getBooleanAttribute('sradv6');
  }
  public set sradv6(value: boolean | cdktf.IResolvable) {
    this._sradv6 = value;
  }
  public resetSradv6() {
    this._sradv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sradv6Input() {
    return this._sradv6;
  }

  // tcpb - computed: true, optional: true, required: false
  private _tcpb?: boolean | cdktf.IResolvable; 
  public get tcpb() {
    return this.getBooleanAttribute('tcpb');
  }
  public set tcpb(value: boolean | cdktf.IResolvable) {
    this._tcpb = value;
  }
  public resetTcpb() {
    this._tcpb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpbInput() {
    return this._tcpb;
  }

  // ulfd - computed: true, optional: true, required: false
  private _ulfd?: boolean | cdktf.IResolvable; 
  public get ulfd() {
    return this.getBooleanAttribute('ulfd');
  }
  public set ulfd(value: boolean | cdktf.IResolvable) {
    this._ulfd = value;
  }
  public resetUlfd() {
    this._ulfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulfdInput() {
    return this._ulfd;
  }

  // usip - computed: true, optional: true, required: false
  private _usip?: boolean | cdktf.IResolvable; 
  public get usip() {
    return this.getBooleanAttribute('usip');
  }
  public set usip(value: boolean | cdktf.IResolvable) {
    this._usip = value;
  }
  public resetUsip() {
    this._usip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usipInput() {
    return this._usip;
  }

  // usnip - computed: true, optional: true, required: false
  private _usnip?: boolean | cdktf.IResolvable; 
  public get usnip() {
    return this.getBooleanAttribute('usnip');
  }
  public set usnip(value: boolean | cdktf.IResolvable) {
    this._usnip = value;
  }
  public resetUsnip() {
    this._usnip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usnipInput() {
    return this._usnip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridgebpdus: cdktf.booleanToTerraform(this._bridgebpdus),
      cka: cdktf.booleanToTerraform(this._cka),
      dradv: cdktf.booleanToTerraform(this._dradv),
      dradv6: cdktf.booleanToTerraform(this._dradv6),
      edge: cdktf.booleanToTerraform(this._edge),
      fr: cdktf.booleanToTerraform(this._fr),
      id: cdktf.stringToTerraform(this._id),
      iradv: cdktf.booleanToTerraform(this._iradv),
      l2: cdktf.booleanToTerraform(this._l2),
      l3: cdktf.booleanToTerraform(this._l3),
      mbf: cdktf.booleanToTerraform(this._mbf),
      mediaclassification: cdktf.booleanToTerraform(this._mediaclassification),
      pmtud: cdktf.booleanToTerraform(this._pmtud),
      sradv: cdktf.booleanToTerraform(this._sradv),
      sradv6: cdktf.booleanToTerraform(this._sradv6),
      tcpb: cdktf.booleanToTerraform(this._tcpb),
      ulfd: cdktf.booleanToTerraform(this._ulfd),
      usip: cdktf.booleanToTerraform(this._usip),
      usnip: cdktf.booleanToTerraform(this._usnip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridgebpdus: {
        value: cdktf.booleanToHclTerraform(this._bridgebpdus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cka: {
        value: cdktf.booleanToHclTerraform(this._cka),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dradv: {
        value: cdktf.booleanToHclTerraform(this._dradv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dradv6: {
        value: cdktf.booleanToHclTerraform(this._dradv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge: {
        value: cdktf.booleanToHclTerraform(this._edge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fr: {
        value: cdktf.booleanToHclTerraform(this._fr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iradv: {
        value: cdktf.booleanToHclTerraform(this._iradv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l2: {
        value: cdktf.booleanToHclTerraform(this._l2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l3: {
        value: cdktf.booleanToHclTerraform(this._l3),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mbf: {
        value: cdktf.booleanToHclTerraform(this._mbf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mediaclassification: {
        value: cdktf.booleanToHclTerraform(this._mediaclassification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pmtud: {
        value: cdktf.booleanToHclTerraform(this._pmtud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sradv: {
        value: cdktf.booleanToHclTerraform(this._sradv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sradv6: {
        value: cdktf.booleanToHclTerraform(this._sradv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcpb: {
        value: cdktf.booleanToHclTerraform(this._tcpb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ulfd: {
        value: cdktf.booleanToHclTerraform(this._ulfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usip: {
        value: cdktf.booleanToHclTerraform(this._usip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usnip: {
        value: cdktf.booleanToHclTerraform(this._usnip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
