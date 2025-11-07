// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#automaticconfigsync Gslbparameter#automaticconfigsync}
  */
  readonly automaticconfigsync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#dropldnsreq Gslbparameter#dropldnsreq}
  */
  readonly dropldnsreq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#gslbconfigsyncmonitor Gslbparameter#gslbconfigsyncmonitor}
  */
  readonly gslbconfigsyncmonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#gslbsvcstatedelaytime Gslbparameter#gslbsvcstatedelaytime}
  */
  readonly gslbsvcstatedelaytime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#gslbsyncinterval Gslbparameter#gslbsyncinterval}
  */
  readonly gslbsyncinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#gslbsynclocfiles Gslbparameter#gslbsynclocfiles}
  */
  readonly gslbsynclocfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#gslbsyncmode Gslbparameter#gslbsyncmode}
  */
  readonly gslbsyncmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#id Gslbparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#ldnsentrytimeout Gslbparameter#ldnsentrytimeout}
  */
  readonly ldnsentrytimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#ldnsmask Gslbparameter#ldnsmask}
  */
  readonly ldnsmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#ldnsprobeorder Gslbparameter#ldnsprobeorder}
  */
  readonly ldnsprobeorder?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#mepkeepalivetimeout Gslbparameter#mepkeepalivetimeout}
  */
  readonly mepkeepalivetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#rtttolerance Gslbparameter#rtttolerance}
  */
  readonly rtttolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#svcstatelearningtime Gslbparameter#svcstatelearningtime}
  */
  readonly svcstatelearningtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#v6ldnsmasklen Gslbparameter#v6ldnsmasklen}
  */
  readonly v6Ldnsmasklen?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter citrixadc_gslbparameter}
*/
export class Gslbparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslbparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslbparameter to import
  * @param importFromId The id of the existing Gslbparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslbparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbparameter citrixadc_gslbparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbparameter',
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
    this._automaticconfigsync = config.automaticconfigsync;
    this._dropldnsreq = config.dropldnsreq;
    this._gslbconfigsyncmonitor = config.gslbconfigsyncmonitor;
    this._gslbsvcstatedelaytime = config.gslbsvcstatedelaytime;
    this._gslbsyncinterval = config.gslbsyncinterval;
    this._gslbsynclocfiles = config.gslbsynclocfiles;
    this._gslbsyncmode = config.gslbsyncmode;
    this._id = config.id;
    this._ldnsentrytimeout = config.ldnsentrytimeout;
    this._ldnsmask = config.ldnsmask;
    this._ldnsprobeorder = config.ldnsprobeorder;
    this._mepkeepalivetimeout = config.mepkeepalivetimeout;
    this._rtttolerance = config.rtttolerance;
    this._svcstatelearningtime = config.svcstatelearningtime;
    this._v6Ldnsmasklen = config.v6Ldnsmasklen;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automaticconfigsync - computed: true, optional: true, required: false
  private _automaticconfigsync?: string; 
  public get automaticconfigsync() {
    return this.getStringAttribute('automaticconfigsync');
  }
  public set automaticconfigsync(value: string) {
    this._automaticconfigsync = value;
  }
  public resetAutomaticconfigsync() {
    this._automaticconfigsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticconfigsyncInput() {
    return this._automaticconfigsync;
  }

  // dropldnsreq - computed: true, optional: true, required: false
  private _dropldnsreq?: string; 
  public get dropldnsreq() {
    return this.getStringAttribute('dropldnsreq');
  }
  public set dropldnsreq(value: string) {
    this._dropldnsreq = value;
  }
  public resetDropldnsreq() {
    this._dropldnsreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropldnsreqInput() {
    return this._dropldnsreq;
  }

  // gslbconfigsyncmonitor - computed: true, optional: true, required: false
  private _gslbconfigsyncmonitor?: string; 
  public get gslbconfigsyncmonitor() {
    return this.getStringAttribute('gslbconfigsyncmonitor');
  }
  public set gslbconfigsyncmonitor(value: string) {
    this._gslbconfigsyncmonitor = value;
  }
  public resetGslbconfigsyncmonitor() {
    this._gslbconfigsyncmonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbconfigsyncmonitorInput() {
    return this._gslbconfigsyncmonitor;
  }

  // gslbsvcstatedelaytime - computed: true, optional: true, required: false
  private _gslbsvcstatedelaytime?: number; 
  public get gslbsvcstatedelaytime() {
    return this.getNumberAttribute('gslbsvcstatedelaytime');
  }
  public set gslbsvcstatedelaytime(value: number) {
    this._gslbsvcstatedelaytime = value;
  }
  public resetGslbsvcstatedelaytime() {
    this._gslbsvcstatedelaytime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbsvcstatedelaytimeInput() {
    return this._gslbsvcstatedelaytime;
  }

  // gslbsyncinterval - computed: true, optional: true, required: false
  private _gslbsyncinterval?: number; 
  public get gslbsyncinterval() {
    return this.getNumberAttribute('gslbsyncinterval');
  }
  public set gslbsyncinterval(value: number) {
    this._gslbsyncinterval = value;
  }
  public resetGslbsyncinterval() {
    this._gslbsyncinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbsyncintervalInput() {
    return this._gslbsyncinterval;
  }

  // gslbsynclocfiles - computed: true, optional: true, required: false
  private _gslbsynclocfiles?: string; 
  public get gslbsynclocfiles() {
    return this.getStringAttribute('gslbsynclocfiles');
  }
  public set gslbsynclocfiles(value: string) {
    this._gslbsynclocfiles = value;
  }
  public resetGslbsynclocfiles() {
    this._gslbsynclocfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbsynclocfilesInput() {
    return this._gslbsynclocfiles;
  }

  // gslbsyncmode - computed: true, optional: true, required: false
  private _gslbsyncmode?: string; 
  public get gslbsyncmode() {
    return this.getStringAttribute('gslbsyncmode');
  }
  public set gslbsyncmode(value: string) {
    this._gslbsyncmode = value;
  }
  public resetGslbsyncmode() {
    this._gslbsyncmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbsyncmodeInput() {
    return this._gslbsyncmode;
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

  // ldnsentrytimeout - computed: true, optional: true, required: false
  private _ldnsentrytimeout?: number; 
  public get ldnsentrytimeout() {
    return this.getNumberAttribute('ldnsentrytimeout');
  }
  public set ldnsentrytimeout(value: number) {
    this._ldnsentrytimeout = value;
  }
  public resetLdnsentrytimeout() {
    this._ldnsentrytimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldnsentrytimeoutInput() {
    return this._ldnsentrytimeout;
  }

  // ldnsmask - computed: true, optional: true, required: false
  private _ldnsmask?: string; 
  public get ldnsmask() {
    return this.getStringAttribute('ldnsmask');
  }
  public set ldnsmask(value: string) {
    this._ldnsmask = value;
  }
  public resetLdnsmask() {
    this._ldnsmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldnsmaskInput() {
    return this._ldnsmask;
  }

  // ldnsprobeorder - computed: true, optional: true, required: false
  private _ldnsprobeorder?: string[]; 
  public get ldnsprobeorder() {
    return this.getListAttribute('ldnsprobeorder');
  }
  public set ldnsprobeorder(value: string[]) {
    this._ldnsprobeorder = value;
  }
  public resetLdnsprobeorder() {
    this._ldnsprobeorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldnsprobeorderInput() {
    return this._ldnsprobeorder;
  }

  // mepkeepalivetimeout - computed: true, optional: true, required: false
  private _mepkeepalivetimeout?: number; 
  public get mepkeepalivetimeout() {
    return this.getNumberAttribute('mepkeepalivetimeout');
  }
  public set mepkeepalivetimeout(value: number) {
    this._mepkeepalivetimeout = value;
  }
  public resetMepkeepalivetimeout() {
    this._mepkeepalivetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mepkeepalivetimeoutInput() {
    return this._mepkeepalivetimeout;
  }

  // rtttolerance - computed: true, optional: true, required: false
  private _rtttolerance?: number; 
  public get rtttolerance() {
    return this.getNumberAttribute('rtttolerance');
  }
  public set rtttolerance(value: number) {
    this._rtttolerance = value;
  }
  public resetRtttolerance() {
    this._rtttolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtttoleranceInput() {
    return this._rtttolerance;
  }

  // svcstatelearningtime - computed: true, optional: true, required: false
  private _svcstatelearningtime?: number; 
  public get svcstatelearningtime() {
    return this.getNumberAttribute('svcstatelearningtime');
  }
  public set svcstatelearningtime(value: number) {
    this._svcstatelearningtime = value;
  }
  public resetSvcstatelearningtime() {
    this._svcstatelearningtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svcstatelearningtimeInput() {
    return this._svcstatelearningtime;
  }

  // v6ldnsmasklen - computed: true, optional: true, required: false
  private _v6Ldnsmasklen?: number; 
  public get v6Ldnsmasklen() {
    return this.getNumberAttribute('v6ldnsmasklen');
  }
  public set v6Ldnsmasklen(value: number) {
    this._v6Ldnsmasklen = value;
  }
  public resetV6Ldnsmasklen() {
    this._v6Ldnsmasklen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6LdnsmasklenInput() {
    return this._v6Ldnsmasklen;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automaticconfigsync: cdktf.stringToTerraform(this._automaticconfigsync),
      dropldnsreq: cdktf.stringToTerraform(this._dropldnsreq),
      gslbconfigsyncmonitor: cdktf.stringToTerraform(this._gslbconfigsyncmonitor),
      gslbsvcstatedelaytime: cdktf.numberToTerraform(this._gslbsvcstatedelaytime),
      gslbsyncinterval: cdktf.numberToTerraform(this._gslbsyncinterval),
      gslbsynclocfiles: cdktf.stringToTerraform(this._gslbsynclocfiles),
      gslbsyncmode: cdktf.stringToTerraform(this._gslbsyncmode),
      id: cdktf.stringToTerraform(this._id),
      ldnsentrytimeout: cdktf.numberToTerraform(this._ldnsentrytimeout),
      ldnsmask: cdktf.stringToTerraform(this._ldnsmask),
      ldnsprobeorder: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ldnsprobeorder),
      mepkeepalivetimeout: cdktf.numberToTerraform(this._mepkeepalivetimeout),
      rtttolerance: cdktf.numberToTerraform(this._rtttolerance),
      svcstatelearningtime: cdktf.numberToTerraform(this._svcstatelearningtime),
      v6ldnsmasklen: cdktf.numberToTerraform(this._v6Ldnsmasklen),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automaticconfigsync: {
        value: cdktf.stringToHclTerraform(this._automaticconfigsync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropldnsreq: {
        value: cdktf.stringToHclTerraform(this._dropldnsreq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslbconfigsyncmonitor: {
        value: cdktf.stringToHclTerraform(this._gslbconfigsyncmonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslbsvcstatedelaytime: {
        value: cdktf.numberToHclTerraform(this._gslbsvcstatedelaytime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslbsyncinterval: {
        value: cdktf.numberToHclTerraform(this._gslbsyncinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslbsynclocfiles: {
        value: cdktf.stringToHclTerraform(this._gslbsynclocfiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslbsyncmode: {
        value: cdktf.stringToHclTerraform(this._gslbsyncmode),
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
      ldnsentrytimeout: {
        value: cdktf.numberToHclTerraform(this._ldnsentrytimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldnsmask: {
        value: cdktf.stringToHclTerraform(this._ldnsmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldnsprobeorder: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ldnsprobeorder),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mepkeepalivetimeout: {
        value: cdktf.numberToHclTerraform(this._mepkeepalivetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtttolerance: {
        value: cdktf.numberToHclTerraform(this._rtttolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svcstatelearningtime: {
        value: cdktf.numberToHclTerraform(this._svcstatelearningtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v6ldnsmasklen: {
        value: cdktf.numberToHclTerraform(this._v6Ldnsmasklen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
