// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NscqaparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#harqretxdelay Nscqaparam#harqretxdelay}
  */
  readonly harqretxdelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#id Nscqaparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#lr1coeflist Nscqaparam#lr1coeflist}
  */
  readonly lr1Coeflist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#lr1probthresh Nscqaparam#lr1probthresh}
  */
  readonly lr1Probthresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#lr2coeflist Nscqaparam#lr2coeflist}
  */
  readonly lr2Coeflist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#lr2probthresh Nscqaparam#lr2probthresh}
  */
  readonly lr2Probthresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#minrttnet1 Nscqaparam#minrttnet1}
  */
  readonly minrttnet1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#minrttnet2 Nscqaparam#minrttnet2}
  */
  readonly minrttnet2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#minrttnet3 Nscqaparam#minrttnet3}
  */
  readonly minrttnet3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net1cclscale Nscqaparam#net1cclscale}
  */
  readonly net1Cclscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net1csqscale Nscqaparam#net1csqscale}
  */
  readonly net1Csqscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net1label Nscqaparam#net1label}
  */
  readonly net1Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net1logcoef Nscqaparam#net1logcoef}
  */
  readonly net1Logcoef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net2cclscale Nscqaparam#net2cclscale}
  */
  readonly net2Cclscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net2csqscale Nscqaparam#net2csqscale}
  */
  readonly net2Csqscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net2label Nscqaparam#net2label}
  */
  readonly net2Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net2logcoef Nscqaparam#net2logcoef}
  */
  readonly net2Logcoef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net3cclscale Nscqaparam#net3cclscale}
  */
  readonly net3Cclscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net3csqscale Nscqaparam#net3csqscale}
  */
  readonly net3Csqscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net3label Nscqaparam#net3label}
  */
  readonly net3Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#net3logcoef Nscqaparam#net3logcoef}
  */
  readonly net3Logcoef?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam citrixadc_nscqaparam}
*/
export class Nscqaparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nscqaparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nscqaparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nscqaparam to import
  * @param importFromId The id of the existing Nscqaparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nscqaparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nscqaparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscqaparam citrixadc_nscqaparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NscqaparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NscqaparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nscqaparam',
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
    this._harqretxdelay = config.harqretxdelay;
    this._id = config.id;
    this._lr1Coeflist = config.lr1Coeflist;
    this._lr1Probthresh = config.lr1Probthresh;
    this._lr2Coeflist = config.lr2Coeflist;
    this._lr2Probthresh = config.lr2Probthresh;
    this._minrttnet1 = config.minrttnet1;
    this._minrttnet2 = config.minrttnet2;
    this._minrttnet3 = config.minrttnet3;
    this._net1Cclscale = config.net1Cclscale;
    this._net1Csqscale = config.net1Csqscale;
    this._net1Label = config.net1Label;
    this._net1Logcoef = config.net1Logcoef;
    this._net2Cclscale = config.net2Cclscale;
    this._net2Csqscale = config.net2Csqscale;
    this._net2Label = config.net2Label;
    this._net2Logcoef = config.net2Logcoef;
    this._net3Cclscale = config.net3Cclscale;
    this._net3Csqscale = config.net3Csqscale;
    this._net3Label = config.net3Label;
    this._net3Logcoef = config.net3Logcoef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // harqretxdelay - computed: true, optional: true, required: false
  private _harqretxdelay?: number; 
  public get harqretxdelay() {
    return this.getNumberAttribute('harqretxdelay');
  }
  public set harqretxdelay(value: number) {
    this._harqretxdelay = value;
  }
  public resetHarqretxdelay() {
    this._harqretxdelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get harqretxdelayInput() {
    return this._harqretxdelay;
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

  // lr1coeflist - computed: true, optional: true, required: false
  private _lr1Coeflist?: string; 
  public get lr1Coeflist() {
    return this.getStringAttribute('lr1coeflist');
  }
  public set lr1Coeflist(value: string) {
    this._lr1Coeflist = value;
  }
  public resetLr1Coeflist() {
    this._lr1Coeflist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lr1CoeflistInput() {
    return this._lr1Coeflist;
  }

  // lr1probthresh - computed: true, optional: true, required: false
  private _lr1Probthresh?: number; 
  public get lr1Probthresh() {
    return this.getNumberAttribute('lr1probthresh');
  }
  public set lr1Probthresh(value: number) {
    this._lr1Probthresh = value;
  }
  public resetLr1Probthresh() {
    this._lr1Probthresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lr1ProbthreshInput() {
    return this._lr1Probthresh;
  }

  // lr2coeflist - computed: true, optional: true, required: false
  private _lr2Coeflist?: string; 
  public get lr2Coeflist() {
    return this.getStringAttribute('lr2coeflist');
  }
  public set lr2Coeflist(value: string) {
    this._lr2Coeflist = value;
  }
  public resetLr2Coeflist() {
    this._lr2Coeflist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lr2CoeflistInput() {
    return this._lr2Coeflist;
  }

  // lr2probthresh - computed: true, optional: true, required: false
  private _lr2Probthresh?: number; 
  public get lr2Probthresh() {
    return this.getNumberAttribute('lr2probthresh');
  }
  public set lr2Probthresh(value: number) {
    this._lr2Probthresh = value;
  }
  public resetLr2Probthresh() {
    this._lr2Probthresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lr2ProbthreshInput() {
    return this._lr2Probthresh;
  }

  // minrttnet1 - computed: true, optional: true, required: false
  private _minrttnet1?: number; 
  public get minrttnet1() {
    return this.getNumberAttribute('minrttnet1');
  }
  public set minrttnet1(value: number) {
    this._minrttnet1 = value;
  }
  public resetMinrttnet1() {
    this._minrttnet1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minrttnet1Input() {
    return this._minrttnet1;
  }

  // minrttnet2 - computed: true, optional: true, required: false
  private _minrttnet2?: number; 
  public get minrttnet2() {
    return this.getNumberAttribute('minrttnet2');
  }
  public set minrttnet2(value: number) {
    this._minrttnet2 = value;
  }
  public resetMinrttnet2() {
    this._minrttnet2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minrttnet2Input() {
    return this._minrttnet2;
  }

  // minrttnet3 - computed: true, optional: true, required: false
  private _minrttnet3?: number; 
  public get minrttnet3() {
    return this.getNumberAttribute('minrttnet3');
  }
  public set minrttnet3(value: number) {
    this._minrttnet3 = value;
  }
  public resetMinrttnet3() {
    this._minrttnet3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minrttnet3Input() {
    return this._minrttnet3;
  }

  // net1cclscale - computed: true, optional: true, required: false
  private _net1Cclscale?: string; 
  public get net1Cclscale() {
    return this.getStringAttribute('net1cclscale');
  }
  public set net1Cclscale(value: string) {
    this._net1Cclscale = value;
  }
  public resetNet1Cclscale() {
    this._net1Cclscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net1CclscaleInput() {
    return this._net1Cclscale;
  }

  // net1csqscale - computed: true, optional: true, required: false
  private _net1Csqscale?: string; 
  public get net1Csqscale() {
    return this.getStringAttribute('net1csqscale');
  }
  public set net1Csqscale(value: string) {
    this._net1Csqscale = value;
  }
  public resetNet1Csqscale() {
    this._net1Csqscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net1CsqscaleInput() {
    return this._net1Csqscale;
  }

  // net1label - computed: true, optional: true, required: false
  private _net1Label?: string; 
  public get net1Label() {
    return this.getStringAttribute('net1label');
  }
  public set net1Label(value: string) {
    this._net1Label = value;
  }
  public resetNet1Label() {
    this._net1Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net1LabelInput() {
    return this._net1Label;
  }

  // net1logcoef - computed: true, optional: true, required: false
  private _net1Logcoef?: string; 
  public get net1Logcoef() {
    return this.getStringAttribute('net1logcoef');
  }
  public set net1Logcoef(value: string) {
    this._net1Logcoef = value;
  }
  public resetNet1Logcoef() {
    this._net1Logcoef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net1LogcoefInput() {
    return this._net1Logcoef;
  }

  // net2cclscale - computed: true, optional: true, required: false
  private _net2Cclscale?: string; 
  public get net2Cclscale() {
    return this.getStringAttribute('net2cclscale');
  }
  public set net2Cclscale(value: string) {
    this._net2Cclscale = value;
  }
  public resetNet2Cclscale() {
    this._net2Cclscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net2CclscaleInput() {
    return this._net2Cclscale;
  }

  // net2csqscale - computed: true, optional: true, required: false
  private _net2Csqscale?: string; 
  public get net2Csqscale() {
    return this.getStringAttribute('net2csqscale');
  }
  public set net2Csqscale(value: string) {
    this._net2Csqscale = value;
  }
  public resetNet2Csqscale() {
    this._net2Csqscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net2CsqscaleInput() {
    return this._net2Csqscale;
  }

  // net2label - computed: true, optional: true, required: false
  private _net2Label?: string; 
  public get net2Label() {
    return this.getStringAttribute('net2label');
  }
  public set net2Label(value: string) {
    this._net2Label = value;
  }
  public resetNet2Label() {
    this._net2Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net2LabelInput() {
    return this._net2Label;
  }

  // net2logcoef - computed: true, optional: true, required: false
  private _net2Logcoef?: string; 
  public get net2Logcoef() {
    return this.getStringAttribute('net2logcoef');
  }
  public set net2Logcoef(value: string) {
    this._net2Logcoef = value;
  }
  public resetNet2Logcoef() {
    this._net2Logcoef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net2LogcoefInput() {
    return this._net2Logcoef;
  }

  // net3cclscale - computed: true, optional: true, required: false
  private _net3Cclscale?: string; 
  public get net3Cclscale() {
    return this.getStringAttribute('net3cclscale');
  }
  public set net3Cclscale(value: string) {
    this._net3Cclscale = value;
  }
  public resetNet3Cclscale() {
    this._net3Cclscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net3CclscaleInput() {
    return this._net3Cclscale;
  }

  // net3csqscale - computed: true, optional: true, required: false
  private _net3Csqscale?: string; 
  public get net3Csqscale() {
    return this.getStringAttribute('net3csqscale');
  }
  public set net3Csqscale(value: string) {
    this._net3Csqscale = value;
  }
  public resetNet3Csqscale() {
    this._net3Csqscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net3CsqscaleInput() {
    return this._net3Csqscale;
  }

  // net3label - computed: true, optional: true, required: false
  private _net3Label?: string; 
  public get net3Label() {
    return this.getStringAttribute('net3label');
  }
  public set net3Label(value: string) {
    this._net3Label = value;
  }
  public resetNet3Label() {
    this._net3Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net3LabelInput() {
    return this._net3Label;
  }

  // net3logcoef - computed: true, optional: true, required: false
  private _net3Logcoef?: string; 
  public get net3Logcoef() {
    return this.getStringAttribute('net3logcoef');
  }
  public set net3Logcoef(value: string) {
    this._net3Logcoef = value;
  }
  public resetNet3Logcoef() {
    this._net3Logcoef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get net3LogcoefInput() {
    return this._net3Logcoef;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      harqretxdelay: cdktf.numberToTerraform(this._harqretxdelay),
      id: cdktf.stringToTerraform(this._id),
      lr1coeflist: cdktf.stringToTerraform(this._lr1Coeflist),
      lr1probthresh: cdktf.numberToTerraform(this._lr1Probthresh),
      lr2coeflist: cdktf.stringToTerraform(this._lr2Coeflist),
      lr2probthresh: cdktf.numberToTerraform(this._lr2Probthresh),
      minrttnet1: cdktf.numberToTerraform(this._minrttnet1),
      minrttnet2: cdktf.numberToTerraform(this._minrttnet2),
      minrttnet3: cdktf.numberToTerraform(this._minrttnet3),
      net1cclscale: cdktf.stringToTerraform(this._net1Cclscale),
      net1csqscale: cdktf.stringToTerraform(this._net1Csqscale),
      net1label: cdktf.stringToTerraform(this._net1Label),
      net1logcoef: cdktf.stringToTerraform(this._net1Logcoef),
      net2cclscale: cdktf.stringToTerraform(this._net2Cclscale),
      net2csqscale: cdktf.stringToTerraform(this._net2Csqscale),
      net2label: cdktf.stringToTerraform(this._net2Label),
      net2logcoef: cdktf.stringToTerraform(this._net2Logcoef),
      net3cclscale: cdktf.stringToTerraform(this._net3Cclscale),
      net3csqscale: cdktf.stringToTerraform(this._net3Csqscale),
      net3label: cdktf.stringToTerraform(this._net3Label),
      net3logcoef: cdktf.stringToTerraform(this._net3Logcoef),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      harqretxdelay: {
        value: cdktf.numberToHclTerraform(this._harqretxdelay),
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
      lr1coeflist: {
        value: cdktf.stringToHclTerraform(this._lr1Coeflist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lr1probthresh: {
        value: cdktf.numberToHclTerraform(this._lr1Probthresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lr2coeflist: {
        value: cdktf.stringToHclTerraform(this._lr2Coeflist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lr2probthresh: {
        value: cdktf.numberToHclTerraform(this._lr2Probthresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minrttnet1: {
        value: cdktf.numberToHclTerraform(this._minrttnet1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minrttnet2: {
        value: cdktf.numberToHclTerraform(this._minrttnet2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minrttnet3: {
        value: cdktf.numberToHclTerraform(this._minrttnet3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      net1cclscale: {
        value: cdktf.stringToHclTerraform(this._net1Cclscale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net1csqscale: {
        value: cdktf.stringToHclTerraform(this._net1Csqscale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net1label: {
        value: cdktf.stringToHclTerraform(this._net1Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net1logcoef: {
        value: cdktf.stringToHclTerraform(this._net1Logcoef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net2cclscale: {
        value: cdktf.stringToHclTerraform(this._net2Cclscale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net2csqscale: {
        value: cdktf.stringToHclTerraform(this._net2Csqscale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net2label: {
        value: cdktf.stringToHclTerraform(this._net2Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net2logcoef: {
        value: cdktf.stringToHclTerraform(this._net2Logcoef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net3cclscale: {
        value: cdktf.stringToHclTerraform(this._net3Cclscale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net3csqscale: {
        value: cdktf.stringToHclTerraform(this._net3Csqscale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net3label: {
        value: cdktf.stringToHclTerraform(this._net3Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net3logcoef: {
        value: cdktf.stringToHclTerraform(this._net3Logcoef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
