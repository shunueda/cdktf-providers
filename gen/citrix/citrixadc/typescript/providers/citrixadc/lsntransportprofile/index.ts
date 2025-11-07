// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsntransportprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#finrsttimeout Lsntransportprofile#finrsttimeout}
  */
  readonly finrsttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#groupsessionlimit Lsntransportprofile#groupsessionlimit}
  */
  readonly groupsessionlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#id Lsntransportprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#portpreserveparity Lsntransportprofile#portpreserveparity}
  */
  readonly portpreserveparity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#portpreserverange Lsntransportprofile#portpreserverange}
  */
  readonly portpreserverange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#portquota Lsntransportprofile#portquota}
  */
  readonly portquota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#sessionquota Lsntransportprofile#sessionquota}
  */
  readonly sessionquota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#sessiontimeout Lsntransportprofile#sessiontimeout}
  */
  readonly sessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#stuntimeout Lsntransportprofile#stuntimeout}
  */
  readonly stuntimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#syncheck Lsntransportprofile#syncheck}
  */
  readonly syncheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#synidletimeout Lsntransportprofile#synidletimeout}
  */
  readonly synidletimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#transportprofilename Lsntransportprofile#transportprofilename}
  */
  readonly transportprofilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#transportprotocol Lsntransportprofile#transportprotocol}
  */
  readonly transportprotocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile citrixadc_lsntransportprofile}
*/
export class Lsntransportprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsntransportprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsntransportprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsntransportprofile to import
  * @param importFromId The id of the existing Lsntransportprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsntransportprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsntransportprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsntransportprofile citrixadc_lsntransportprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsntransportprofileConfig
  */
  public constructor(scope: Construct, id: string, config: LsntransportprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsntransportprofile',
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
    this._finrsttimeout = config.finrsttimeout;
    this._groupsessionlimit = config.groupsessionlimit;
    this._id = config.id;
    this._portpreserveparity = config.portpreserveparity;
    this._portpreserverange = config.portpreserverange;
    this._portquota = config.portquota;
    this._sessionquota = config.sessionquota;
    this._sessiontimeout = config.sessiontimeout;
    this._stuntimeout = config.stuntimeout;
    this._syncheck = config.syncheck;
    this._synidletimeout = config.synidletimeout;
    this._transportprofilename = config.transportprofilename;
    this._transportprotocol = config.transportprotocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // finrsttimeout - computed: true, optional: true, required: false
  private _finrsttimeout?: number; 
  public get finrsttimeout() {
    return this.getNumberAttribute('finrsttimeout');
  }
  public set finrsttimeout(value: number) {
    this._finrsttimeout = value;
  }
  public resetFinrsttimeout() {
    this._finrsttimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finrsttimeoutInput() {
    return this._finrsttimeout;
  }

  // groupsessionlimit - computed: true, optional: true, required: false
  private _groupsessionlimit?: number; 
  public get groupsessionlimit() {
    return this.getNumberAttribute('groupsessionlimit');
  }
  public set groupsessionlimit(value: number) {
    this._groupsessionlimit = value;
  }
  public resetGroupsessionlimit() {
    this._groupsessionlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsessionlimitInput() {
    return this._groupsessionlimit;
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

  // portpreserveparity - computed: true, optional: true, required: false
  private _portpreserveparity?: string; 
  public get portpreserveparity() {
    return this.getStringAttribute('portpreserveparity');
  }
  public set portpreserveparity(value: string) {
    this._portpreserveparity = value;
  }
  public resetPortpreserveparity() {
    this._portpreserveparity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portpreserveparityInput() {
    return this._portpreserveparity;
  }

  // portpreserverange - computed: true, optional: true, required: false
  private _portpreserverange?: string; 
  public get portpreserverange() {
    return this.getStringAttribute('portpreserverange');
  }
  public set portpreserverange(value: string) {
    this._portpreserverange = value;
  }
  public resetPortpreserverange() {
    this._portpreserverange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portpreserverangeInput() {
    return this._portpreserverange;
  }

  // portquota - computed: true, optional: true, required: false
  private _portquota?: number; 
  public get portquota() {
    return this.getNumberAttribute('portquota');
  }
  public set portquota(value: number) {
    this._portquota = value;
  }
  public resetPortquota() {
    this._portquota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portquotaInput() {
    return this._portquota;
  }

  // sessionquota - computed: true, optional: true, required: false
  private _sessionquota?: number; 
  public get sessionquota() {
    return this.getNumberAttribute('sessionquota');
  }
  public set sessionquota(value: number) {
    this._sessionquota = value;
  }
  public resetSessionquota() {
    this._sessionquota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionquotaInput() {
    return this._sessionquota;
  }

  // sessiontimeout - computed: true, optional: true, required: false
  private _sessiontimeout?: number; 
  public get sessiontimeout() {
    return this.getNumberAttribute('sessiontimeout');
  }
  public set sessiontimeout(value: number) {
    this._sessiontimeout = value;
  }
  public resetSessiontimeout() {
    this._sessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessiontimeoutInput() {
    return this._sessiontimeout;
  }

  // stuntimeout - computed: true, optional: true, required: false
  private _stuntimeout?: number; 
  public get stuntimeout() {
    return this.getNumberAttribute('stuntimeout');
  }
  public set stuntimeout(value: number) {
    this._stuntimeout = value;
  }
  public resetStuntimeout() {
    this._stuntimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stuntimeoutInput() {
    return this._stuntimeout;
  }

  // syncheck - computed: true, optional: true, required: false
  private _syncheck?: string; 
  public get syncheck() {
    return this.getStringAttribute('syncheck');
  }
  public set syncheck(value: string) {
    this._syncheck = value;
  }
  public resetSyncheck() {
    this._syncheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncheckInput() {
    return this._syncheck;
  }

  // synidletimeout - computed: true, optional: true, required: false
  private _synidletimeout?: number; 
  public get synidletimeout() {
    return this.getNumberAttribute('synidletimeout');
  }
  public set synidletimeout(value: number) {
    this._synidletimeout = value;
  }
  public resetSynidletimeout() {
    this._synidletimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synidletimeoutInput() {
    return this._synidletimeout;
  }

  // transportprofilename - computed: false, optional: false, required: true
  private _transportprofilename?: string; 
  public get transportprofilename() {
    return this.getStringAttribute('transportprofilename');
  }
  public set transportprofilename(value: string) {
    this._transportprofilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportprofilenameInput() {
    return this._transportprofilename;
  }

  // transportprotocol - computed: false, optional: true, required: false
  private _transportprotocol?: string; 
  public get transportprotocol() {
    return this.getStringAttribute('transportprotocol');
  }
  public set transportprotocol(value: string) {
    this._transportprotocol = value;
  }
  public resetTransportprotocol() {
    this._transportprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportprotocolInput() {
    return this._transportprotocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      finrsttimeout: cdktf.numberToTerraform(this._finrsttimeout),
      groupsessionlimit: cdktf.numberToTerraform(this._groupsessionlimit),
      id: cdktf.stringToTerraform(this._id),
      portpreserveparity: cdktf.stringToTerraform(this._portpreserveparity),
      portpreserverange: cdktf.stringToTerraform(this._portpreserverange),
      portquota: cdktf.numberToTerraform(this._portquota),
      sessionquota: cdktf.numberToTerraform(this._sessionquota),
      sessiontimeout: cdktf.numberToTerraform(this._sessiontimeout),
      stuntimeout: cdktf.numberToTerraform(this._stuntimeout),
      syncheck: cdktf.stringToTerraform(this._syncheck),
      synidletimeout: cdktf.numberToTerraform(this._synidletimeout),
      transportprofilename: cdktf.stringToTerraform(this._transportprofilename),
      transportprotocol: cdktf.stringToTerraform(this._transportprotocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      finrsttimeout: {
        value: cdktf.numberToHclTerraform(this._finrsttimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      groupsessionlimit: {
        value: cdktf.numberToHclTerraform(this._groupsessionlimit),
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
      portpreserveparity: {
        value: cdktf.stringToHclTerraform(this._portpreserveparity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portpreserverange: {
        value: cdktf.stringToHclTerraform(this._portpreserverange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portquota: {
        value: cdktf.numberToHclTerraform(this._portquota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sessionquota: {
        value: cdktf.numberToHclTerraform(this._sessionquota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sessiontimeout: {
        value: cdktf.numberToHclTerraform(this._sessiontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stuntimeout: {
        value: cdktf.numberToHclTerraform(this._stuntimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syncheck: {
        value: cdktf.stringToHclTerraform(this._syncheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synidletimeout: {
        value: cdktf.numberToHclTerraform(this._synidletimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transportprofilename: {
        value: cdktf.stringToHclTerraform(this._transportprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transportprotocol: {
        value: cdktf.stringToHclTerraform(this._transportprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
