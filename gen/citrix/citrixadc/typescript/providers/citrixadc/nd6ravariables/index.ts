// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Nd6RavariablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#ceaserouteradv Nd6Ravariables#ceaserouteradv}
  */
  readonly ceaserouteradv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#currhoplimit Nd6Ravariables#currhoplimit}
  */
  readonly currhoplimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#defaultlifetime Nd6Ravariables#defaultlifetime}
  */
  readonly defaultlifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#id Nd6Ravariables#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#linkmtu Nd6Ravariables#linkmtu}
  */
  readonly linkmtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#managedaddrconfig Nd6Ravariables#managedaddrconfig}
  */
  readonly managedaddrconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#maxrtadvinterval Nd6Ravariables#maxrtadvinterval}
  */
  readonly maxrtadvinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#minrtadvinterval Nd6Ravariables#minrtadvinterval}
  */
  readonly minrtadvinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#onlyunicastrtadvresponse Nd6Ravariables#onlyunicastrtadvresponse}
  */
  readonly onlyunicastrtadvresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#otheraddrconfig Nd6Ravariables#otheraddrconfig}
  */
  readonly otheraddrconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#reachabletime Nd6Ravariables#reachabletime}
  */
  readonly reachabletime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#retranstime Nd6Ravariables#retranstime}
  */
  readonly retranstime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#sendrouteradv Nd6Ravariables#sendrouteradv}
  */
  readonly sendrouteradv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#srclinklayeraddroption Nd6Ravariables#srclinklayeraddroption}
  */
  readonly srclinklayeraddroption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#vlan Nd6Ravariables#vlan}
  */
  readonly vlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables citrixadc_nd6ravariables}
*/
export class Nd6Ravariables extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nd6ravariables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nd6Ravariables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nd6Ravariables to import
  * @param importFromId The id of the existing Nd6Ravariables that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nd6Ravariables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nd6ravariables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nd6ravariables citrixadc_nd6ravariables} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Nd6RavariablesConfig
  */
  public constructor(scope: Construct, id: string, config: Nd6RavariablesConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nd6ravariables',
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
    this._ceaserouteradv = config.ceaserouteradv;
    this._currhoplimit = config.currhoplimit;
    this._defaultlifetime = config.defaultlifetime;
    this._id = config.id;
    this._linkmtu = config.linkmtu;
    this._managedaddrconfig = config.managedaddrconfig;
    this._maxrtadvinterval = config.maxrtadvinterval;
    this._minrtadvinterval = config.minrtadvinterval;
    this._onlyunicastrtadvresponse = config.onlyunicastrtadvresponse;
    this._otheraddrconfig = config.otheraddrconfig;
    this._reachabletime = config.reachabletime;
    this._retranstime = config.retranstime;
    this._sendrouteradv = config.sendrouteradv;
    this._srclinklayeraddroption = config.srclinklayeraddroption;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ceaserouteradv - computed: true, optional: true, required: false
  private _ceaserouteradv?: string; 
  public get ceaserouteradv() {
    return this.getStringAttribute('ceaserouteradv');
  }
  public set ceaserouteradv(value: string) {
    this._ceaserouteradv = value;
  }
  public resetCeaserouteradv() {
    this._ceaserouteradv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceaserouteradvInput() {
    return this._ceaserouteradv;
  }

  // currhoplimit - computed: true, optional: true, required: false
  private _currhoplimit?: number; 
  public get currhoplimit() {
    return this.getNumberAttribute('currhoplimit');
  }
  public set currhoplimit(value: number) {
    this._currhoplimit = value;
  }
  public resetCurrhoplimit() {
    this._currhoplimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currhoplimitInput() {
    return this._currhoplimit;
  }

  // defaultlifetime - computed: true, optional: true, required: false
  private _defaultlifetime?: number; 
  public get defaultlifetime() {
    return this.getNumberAttribute('defaultlifetime');
  }
  public set defaultlifetime(value: number) {
    this._defaultlifetime = value;
  }
  public resetDefaultlifetime() {
    this._defaultlifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultlifetimeInput() {
    return this._defaultlifetime;
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

  // linkmtu - computed: true, optional: true, required: false
  private _linkmtu?: number; 
  public get linkmtu() {
    return this.getNumberAttribute('linkmtu');
  }
  public set linkmtu(value: number) {
    this._linkmtu = value;
  }
  public resetLinkmtu() {
    this._linkmtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkmtuInput() {
    return this._linkmtu;
  }

  // managedaddrconfig - computed: true, optional: true, required: false
  private _managedaddrconfig?: string; 
  public get managedaddrconfig() {
    return this.getStringAttribute('managedaddrconfig');
  }
  public set managedaddrconfig(value: string) {
    this._managedaddrconfig = value;
  }
  public resetManagedaddrconfig() {
    this._managedaddrconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedaddrconfigInput() {
    return this._managedaddrconfig;
  }

  // maxrtadvinterval - computed: true, optional: true, required: false
  private _maxrtadvinterval?: number; 
  public get maxrtadvinterval() {
    return this.getNumberAttribute('maxrtadvinterval');
  }
  public set maxrtadvinterval(value: number) {
    this._maxrtadvinterval = value;
  }
  public resetMaxrtadvinterval() {
    this._maxrtadvinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxrtadvintervalInput() {
    return this._maxrtadvinterval;
  }

  // minrtadvinterval - computed: true, optional: true, required: false
  private _minrtadvinterval?: number; 
  public get minrtadvinterval() {
    return this.getNumberAttribute('minrtadvinterval');
  }
  public set minrtadvinterval(value: number) {
    this._minrtadvinterval = value;
  }
  public resetMinrtadvinterval() {
    this._minrtadvinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minrtadvintervalInput() {
    return this._minrtadvinterval;
  }

  // onlyunicastrtadvresponse - computed: true, optional: true, required: false
  private _onlyunicastrtadvresponse?: string; 
  public get onlyunicastrtadvresponse() {
    return this.getStringAttribute('onlyunicastrtadvresponse');
  }
  public set onlyunicastrtadvresponse(value: string) {
    this._onlyunicastrtadvresponse = value;
  }
  public resetOnlyunicastrtadvresponse() {
    this._onlyunicastrtadvresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyunicastrtadvresponseInput() {
    return this._onlyunicastrtadvresponse;
  }

  // otheraddrconfig - computed: true, optional: true, required: false
  private _otheraddrconfig?: string; 
  public get otheraddrconfig() {
    return this.getStringAttribute('otheraddrconfig');
  }
  public set otheraddrconfig(value: string) {
    this._otheraddrconfig = value;
  }
  public resetOtheraddrconfig() {
    this._otheraddrconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otheraddrconfigInput() {
    return this._otheraddrconfig;
  }

  // reachabletime - computed: true, optional: true, required: false
  private _reachabletime?: number; 
  public get reachabletime() {
    return this.getNumberAttribute('reachabletime');
  }
  public set reachabletime(value: number) {
    this._reachabletime = value;
  }
  public resetReachabletime() {
    this._reachabletime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabletimeInput() {
    return this._reachabletime;
  }

  // retranstime - computed: true, optional: true, required: false
  private _retranstime?: number; 
  public get retranstime() {
    return this.getNumberAttribute('retranstime');
  }
  public set retranstime(value: number) {
    this._retranstime = value;
  }
  public resetRetranstime() {
    this._retranstime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retranstimeInput() {
    return this._retranstime;
  }

  // sendrouteradv - computed: true, optional: true, required: false
  private _sendrouteradv?: string; 
  public get sendrouteradv() {
    return this.getStringAttribute('sendrouteradv');
  }
  public set sendrouteradv(value: string) {
    this._sendrouteradv = value;
  }
  public resetSendrouteradv() {
    this._sendrouteradv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendrouteradvInput() {
    return this._sendrouteradv;
  }

  // srclinklayeraddroption - computed: true, optional: true, required: false
  private _srclinklayeraddroption?: string; 
  public get srclinklayeraddroption() {
    return this.getStringAttribute('srclinklayeraddroption');
  }
  public set srclinklayeraddroption(value: string) {
    this._srclinklayeraddroption = value;
  }
  public resetSrclinklayeraddroption() {
    this._srclinklayeraddroption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srclinklayeraddroptionInput() {
    return this._srclinklayeraddroption;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ceaserouteradv: cdktf.stringToTerraform(this._ceaserouteradv),
      currhoplimit: cdktf.numberToTerraform(this._currhoplimit),
      defaultlifetime: cdktf.numberToTerraform(this._defaultlifetime),
      id: cdktf.stringToTerraform(this._id),
      linkmtu: cdktf.numberToTerraform(this._linkmtu),
      managedaddrconfig: cdktf.stringToTerraform(this._managedaddrconfig),
      maxrtadvinterval: cdktf.numberToTerraform(this._maxrtadvinterval),
      minrtadvinterval: cdktf.numberToTerraform(this._minrtadvinterval),
      onlyunicastrtadvresponse: cdktf.stringToTerraform(this._onlyunicastrtadvresponse),
      otheraddrconfig: cdktf.stringToTerraform(this._otheraddrconfig),
      reachabletime: cdktf.numberToTerraform(this._reachabletime),
      retranstime: cdktf.numberToTerraform(this._retranstime),
      sendrouteradv: cdktf.stringToTerraform(this._sendrouteradv),
      srclinklayeraddroption: cdktf.stringToTerraform(this._srclinklayeraddroption),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ceaserouteradv: {
        value: cdktf.stringToHclTerraform(this._ceaserouteradv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      currhoplimit: {
        value: cdktf.numberToHclTerraform(this._currhoplimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaultlifetime: {
        value: cdktf.numberToHclTerraform(this._defaultlifetime),
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
      linkmtu: {
        value: cdktf.numberToHclTerraform(this._linkmtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      managedaddrconfig: {
        value: cdktf.stringToHclTerraform(this._managedaddrconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxrtadvinterval: {
        value: cdktf.numberToHclTerraform(this._maxrtadvinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minrtadvinterval: {
        value: cdktf.numberToHclTerraform(this._minrtadvinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      onlyunicastrtadvresponse: {
        value: cdktf.stringToHclTerraform(this._onlyunicastrtadvresponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      otheraddrconfig: {
        value: cdktf.stringToHclTerraform(this._otheraddrconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachabletime: {
        value: cdktf.numberToHclTerraform(this._reachabletime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retranstime: {
        value: cdktf.numberToHclTerraform(this._retranstime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sendrouteradv: {
        value: cdktf.stringToHclTerraform(this._sendrouteradv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srclinklayeraddroption: {
        value: cdktf.stringToHclTerraform(this._srclinklayeraddroption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
