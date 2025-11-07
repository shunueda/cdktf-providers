// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L2ParamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#bdggrpproxyarp L2Param#bdggrpproxyarp}
  */
  readonly bdggrpproxyarp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#bdgsetting L2Param#bdgsetting}
  */
  readonly bdgsetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#bridgeagetimeout L2Param#bridgeagetimeout}
  */
  readonly bridgeagetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#garponvridintf L2Param#garponvridintf}
  */
  readonly garponvridintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#garpreply L2Param#garpreply}
  */
  readonly garpreply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#id L2Param#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#macmodefwdmypkt L2Param#macmodefwdmypkt}
  */
  readonly macmodefwdmypkt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#maxbridgecollision L2Param#maxbridgecollision}
  */
  readonly maxbridgecollision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#mbfinstlearning L2Param#mbfinstlearning}
  */
  readonly mbfinstlearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#mbfpeermacupdate L2Param#mbfpeermacupdate}
  */
  readonly mbfpeermacupdate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#proxyarp L2Param#proxyarp}
  */
  readonly proxyarp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#returntoethernetsender L2Param#returntoethernetsender}
  */
  readonly returntoethernetsender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#rstintfonhafo L2Param#rstintfonhafo}
  */
  readonly rstintfonhafo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#skipproxyingbsdtraffic L2Param#skipproxyingbsdtraffic}
  */
  readonly skipproxyingbsdtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#stopmacmoveupdate L2Param#stopmacmoveupdate}
  */
  readonly stopmacmoveupdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#usemymac L2Param#usemymac}
  */
  readonly usemymac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#usenetprofilebsdtraffic L2Param#usenetprofilebsdtraffic}
  */
  readonly usenetprofilebsdtraffic?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param citrixadc_l2param}
*/
export class L2Param extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_l2param";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L2Param resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L2Param to import
  * @param importFromId The id of the existing L2Param that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L2Param to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_l2param", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l2param citrixadc_l2param} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L2ParamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: L2ParamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_l2param',
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
    this._bdggrpproxyarp = config.bdggrpproxyarp;
    this._bdgsetting = config.bdgsetting;
    this._bridgeagetimeout = config.bridgeagetimeout;
    this._garponvridintf = config.garponvridintf;
    this._garpreply = config.garpreply;
    this._id = config.id;
    this._macmodefwdmypkt = config.macmodefwdmypkt;
    this._maxbridgecollision = config.maxbridgecollision;
    this._mbfinstlearning = config.mbfinstlearning;
    this._mbfpeermacupdate = config.mbfpeermacupdate;
    this._proxyarp = config.proxyarp;
    this._returntoethernetsender = config.returntoethernetsender;
    this._rstintfonhafo = config.rstintfonhafo;
    this._skipproxyingbsdtraffic = config.skipproxyingbsdtraffic;
    this._stopmacmoveupdate = config.stopmacmoveupdate;
    this._usemymac = config.usemymac;
    this._usenetprofilebsdtraffic = config.usenetprofilebsdtraffic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bdggrpproxyarp - computed: true, optional: true, required: false
  private _bdggrpproxyarp?: string; 
  public get bdggrpproxyarp() {
    return this.getStringAttribute('bdggrpproxyarp');
  }
  public set bdggrpproxyarp(value: string) {
    this._bdggrpproxyarp = value;
  }
  public resetBdggrpproxyarp() {
    this._bdggrpproxyarp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdggrpproxyarpInput() {
    return this._bdggrpproxyarp;
  }

  // bdgsetting - computed: true, optional: true, required: false
  private _bdgsetting?: string; 
  public get bdgsetting() {
    return this.getStringAttribute('bdgsetting');
  }
  public set bdgsetting(value: string) {
    this._bdgsetting = value;
  }
  public resetBdgsetting() {
    this._bdgsetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdgsettingInput() {
    return this._bdgsetting;
  }

  // bridgeagetimeout - computed: true, optional: true, required: false
  private _bridgeagetimeout?: number; 
  public get bridgeagetimeout() {
    return this.getNumberAttribute('bridgeagetimeout');
  }
  public set bridgeagetimeout(value: number) {
    this._bridgeagetimeout = value;
  }
  public resetBridgeagetimeout() {
    this._bridgeagetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeagetimeoutInput() {
    return this._bridgeagetimeout;
  }

  // garponvridintf - computed: true, optional: true, required: false
  private _garponvridintf?: string; 
  public get garponvridintf() {
    return this.getStringAttribute('garponvridintf');
  }
  public set garponvridintf(value: string) {
    this._garponvridintf = value;
  }
  public resetGarponvridintf() {
    this._garponvridintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get garponvridintfInput() {
    return this._garponvridintf;
  }

  // garpreply - computed: true, optional: true, required: false
  private _garpreply?: string; 
  public get garpreply() {
    return this.getStringAttribute('garpreply');
  }
  public set garpreply(value: string) {
    this._garpreply = value;
  }
  public resetGarpreply() {
    this._garpreply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get garpreplyInput() {
    return this._garpreply;
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

  // macmodefwdmypkt - computed: true, optional: true, required: false
  private _macmodefwdmypkt?: string; 
  public get macmodefwdmypkt() {
    return this.getStringAttribute('macmodefwdmypkt');
  }
  public set macmodefwdmypkt(value: string) {
    this._macmodefwdmypkt = value;
  }
  public resetMacmodefwdmypkt() {
    this._macmodefwdmypkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macmodefwdmypktInput() {
    return this._macmodefwdmypkt;
  }

  // maxbridgecollision - computed: true, optional: true, required: false
  private _maxbridgecollision?: number; 
  public get maxbridgecollision() {
    return this.getNumberAttribute('maxbridgecollision');
  }
  public set maxbridgecollision(value: number) {
    this._maxbridgecollision = value;
  }
  public resetMaxbridgecollision() {
    this._maxbridgecollision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxbridgecollisionInput() {
    return this._maxbridgecollision;
  }

  // mbfinstlearning - computed: true, optional: true, required: false
  private _mbfinstlearning?: string; 
  public get mbfinstlearning() {
    return this.getStringAttribute('mbfinstlearning');
  }
  public set mbfinstlearning(value: string) {
    this._mbfinstlearning = value;
  }
  public resetMbfinstlearning() {
    this._mbfinstlearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbfinstlearningInput() {
    return this._mbfinstlearning;
  }

  // mbfpeermacupdate - computed: true, optional: true, required: false
  private _mbfpeermacupdate?: number; 
  public get mbfpeermacupdate() {
    return this.getNumberAttribute('mbfpeermacupdate');
  }
  public set mbfpeermacupdate(value: number) {
    this._mbfpeermacupdate = value;
  }
  public resetMbfpeermacupdate() {
    this._mbfpeermacupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbfpeermacupdateInput() {
    return this._mbfpeermacupdate;
  }

  // proxyarp - computed: true, optional: true, required: false
  private _proxyarp?: string; 
  public get proxyarp() {
    return this.getStringAttribute('proxyarp');
  }
  public set proxyarp(value: string) {
    this._proxyarp = value;
  }
  public resetProxyarp() {
    this._proxyarp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyarpInput() {
    return this._proxyarp;
  }

  // returntoethernetsender - computed: true, optional: true, required: false
  private _returntoethernetsender?: string; 
  public get returntoethernetsender() {
    return this.getStringAttribute('returntoethernetsender');
  }
  public set returntoethernetsender(value: string) {
    this._returntoethernetsender = value;
  }
  public resetReturntoethernetsender() {
    this._returntoethernetsender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returntoethernetsenderInput() {
    return this._returntoethernetsender;
  }

  // rstintfonhafo - computed: true, optional: true, required: false
  private _rstintfonhafo?: string; 
  public get rstintfonhafo() {
    return this.getStringAttribute('rstintfonhafo');
  }
  public set rstintfonhafo(value: string) {
    this._rstintfonhafo = value;
  }
  public resetRstintfonhafo() {
    this._rstintfonhafo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstintfonhafoInput() {
    return this._rstintfonhafo;
  }

  // skipproxyingbsdtraffic - computed: true, optional: true, required: false
  private _skipproxyingbsdtraffic?: string; 
  public get skipproxyingbsdtraffic() {
    return this.getStringAttribute('skipproxyingbsdtraffic');
  }
  public set skipproxyingbsdtraffic(value: string) {
    this._skipproxyingbsdtraffic = value;
  }
  public resetSkipproxyingbsdtraffic() {
    this._skipproxyingbsdtraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipproxyingbsdtrafficInput() {
    return this._skipproxyingbsdtraffic;
  }

  // stopmacmoveupdate - computed: true, optional: true, required: false
  private _stopmacmoveupdate?: string; 
  public get stopmacmoveupdate() {
    return this.getStringAttribute('stopmacmoveupdate');
  }
  public set stopmacmoveupdate(value: string) {
    this._stopmacmoveupdate = value;
  }
  public resetStopmacmoveupdate() {
    this._stopmacmoveupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopmacmoveupdateInput() {
    return this._stopmacmoveupdate;
  }

  // usemymac - computed: true, optional: true, required: false
  private _usemymac?: string; 
  public get usemymac() {
    return this.getStringAttribute('usemymac');
  }
  public set usemymac(value: string) {
    this._usemymac = value;
  }
  public resetUsemymac() {
    this._usemymac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usemymacInput() {
    return this._usemymac;
  }

  // usenetprofilebsdtraffic - computed: true, optional: true, required: false
  private _usenetprofilebsdtraffic?: string; 
  public get usenetprofilebsdtraffic() {
    return this.getStringAttribute('usenetprofilebsdtraffic');
  }
  public set usenetprofilebsdtraffic(value: string) {
    this._usenetprofilebsdtraffic = value;
  }
  public resetUsenetprofilebsdtraffic() {
    this._usenetprofilebsdtraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usenetprofilebsdtrafficInput() {
    return this._usenetprofilebsdtraffic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bdggrpproxyarp: cdktf.stringToTerraform(this._bdggrpproxyarp),
      bdgsetting: cdktf.stringToTerraform(this._bdgsetting),
      bridgeagetimeout: cdktf.numberToTerraform(this._bridgeagetimeout),
      garponvridintf: cdktf.stringToTerraform(this._garponvridintf),
      garpreply: cdktf.stringToTerraform(this._garpreply),
      id: cdktf.stringToTerraform(this._id),
      macmodefwdmypkt: cdktf.stringToTerraform(this._macmodefwdmypkt),
      maxbridgecollision: cdktf.numberToTerraform(this._maxbridgecollision),
      mbfinstlearning: cdktf.stringToTerraform(this._mbfinstlearning),
      mbfpeermacupdate: cdktf.numberToTerraform(this._mbfpeermacupdate),
      proxyarp: cdktf.stringToTerraform(this._proxyarp),
      returntoethernetsender: cdktf.stringToTerraform(this._returntoethernetsender),
      rstintfonhafo: cdktf.stringToTerraform(this._rstintfonhafo),
      skipproxyingbsdtraffic: cdktf.stringToTerraform(this._skipproxyingbsdtraffic),
      stopmacmoveupdate: cdktf.stringToTerraform(this._stopmacmoveupdate),
      usemymac: cdktf.stringToTerraform(this._usemymac),
      usenetprofilebsdtraffic: cdktf.stringToTerraform(this._usenetprofilebsdtraffic),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bdggrpproxyarp: {
        value: cdktf.stringToHclTerraform(this._bdggrpproxyarp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bdgsetting: {
        value: cdktf.stringToHclTerraform(this._bdgsetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridgeagetimeout: {
        value: cdktf.numberToHclTerraform(this._bridgeagetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      garponvridintf: {
        value: cdktf.stringToHclTerraform(this._garponvridintf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      garpreply: {
        value: cdktf.stringToHclTerraform(this._garpreply),
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
      macmodefwdmypkt: {
        value: cdktf.stringToHclTerraform(this._macmodefwdmypkt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxbridgecollision: {
        value: cdktf.numberToHclTerraform(this._maxbridgecollision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mbfinstlearning: {
        value: cdktf.stringToHclTerraform(this._mbfinstlearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mbfpeermacupdate: {
        value: cdktf.numberToHclTerraform(this._mbfpeermacupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxyarp: {
        value: cdktf.stringToHclTerraform(this._proxyarp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      returntoethernetsender: {
        value: cdktf.stringToHclTerraform(this._returntoethernetsender),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rstintfonhafo: {
        value: cdktf.stringToHclTerraform(this._rstintfonhafo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skipproxyingbsdtraffic: {
        value: cdktf.stringToHclTerraform(this._skipproxyingbsdtraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stopmacmoveupdate: {
        value: cdktf.stringToHclTerraform(this._stopmacmoveupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usemymac: {
        value: cdktf.stringToHclTerraform(this._usemymac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usenetprofilebsdtraffic: {
        value: cdktf.stringToHclTerraform(this._usenetprofilebsdtraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
