// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnsipalgprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#datasessionidletimeout Lsnsipalgprofile#datasessionidletimeout}
  */
  readonly datasessionidletimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#id Lsnsipalgprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#opencontactpinhole Lsnsipalgprofile#opencontactpinhole}
  */
  readonly opencontactpinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#openrecordroutepinhole Lsnsipalgprofile#openrecordroutepinhole}
  */
  readonly openrecordroutepinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#openregisterpinhole Lsnsipalgprofile#openregisterpinhole}
  */
  readonly openregisterpinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#openroutepinhole Lsnsipalgprofile#openroutepinhole}
  */
  readonly openroutepinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#openviapinhole Lsnsipalgprofile#openviapinhole}
  */
  readonly openviapinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#registrationtimeout Lsnsipalgprofile#registrationtimeout}
  */
  readonly registrationtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#rport Lsnsipalgprofile#rport}
  */
  readonly rport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#sipalgprofilename Lsnsipalgprofile#sipalgprofilename}
  */
  readonly sipalgprofilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#sipdstportrange Lsnsipalgprofile#sipdstportrange}
  */
  readonly sipdstportrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#sipsessiontimeout Lsnsipalgprofile#sipsessiontimeout}
  */
  readonly sipsessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#sipsrcportrange Lsnsipalgprofile#sipsrcportrange}
  */
  readonly sipsrcportrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#siptransportprotocol Lsnsipalgprofile#siptransportprotocol}
  */
  readonly siptransportprotocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile citrixadc_lsnsipalgprofile}
*/
export class Lsnsipalgprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnsipalgprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsnsipalgprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsnsipalgprofile to import
  * @param importFromId The id of the existing Lsnsipalgprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsnsipalgprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnsipalgprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnsipalgprofile citrixadc_lsnsipalgprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnsipalgprofileConfig
  */
  public constructor(scope: Construct, id: string, config: LsnsipalgprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnsipalgprofile',
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
    this._datasessionidletimeout = config.datasessionidletimeout;
    this._id = config.id;
    this._opencontactpinhole = config.opencontactpinhole;
    this._openrecordroutepinhole = config.openrecordroutepinhole;
    this._openregisterpinhole = config.openregisterpinhole;
    this._openroutepinhole = config.openroutepinhole;
    this._openviapinhole = config.openviapinhole;
    this._registrationtimeout = config.registrationtimeout;
    this._rport = config.rport;
    this._sipalgprofilename = config.sipalgprofilename;
    this._sipdstportrange = config.sipdstportrange;
    this._sipsessiontimeout = config.sipsessiontimeout;
    this._sipsrcportrange = config.sipsrcportrange;
    this._siptransportprotocol = config.siptransportprotocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datasessionidletimeout - computed: true, optional: true, required: false
  private _datasessionidletimeout?: number; 
  public get datasessionidletimeout() {
    return this.getNumberAttribute('datasessionidletimeout');
  }
  public set datasessionidletimeout(value: number) {
    this._datasessionidletimeout = value;
  }
  public resetDatasessionidletimeout() {
    this._datasessionidletimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasessionidletimeoutInput() {
    return this._datasessionidletimeout;
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

  // opencontactpinhole - computed: true, optional: true, required: false
  private _opencontactpinhole?: string; 
  public get opencontactpinhole() {
    return this.getStringAttribute('opencontactpinhole');
  }
  public set opencontactpinhole(value: string) {
    this._opencontactpinhole = value;
  }
  public resetOpencontactpinhole() {
    this._opencontactpinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opencontactpinholeInput() {
    return this._opencontactpinhole;
  }

  // openrecordroutepinhole - computed: true, optional: true, required: false
  private _openrecordroutepinhole?: string; 
  public get openrecordroutepinhole() {
    return this.getStringAttribute('openrecordroutepinhole');
  }
  public set openrecordroutepinhole(value: string) {
    this._openrecordroutepinhole = value;
  }
  public resetOpenrecordroutepinhole() {
    this._openrecordroutepinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openrecordroutepinholeInput() {
    return this._openrecordroutepinhole;
  }

  // openregisterpinhole - computed: true, optional: true, required: false
  private _openregisterpinhole?: string; 
  public get openregisterpinhole() {
    return this.getStringAttribute('openregisterpinhole');
  }
  public set openregisterpinhole(value: string) {
    this._openregisterpinhole = value;
  }
  public resetOpenregisterpinhole() {
    this._openregisterpinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openregisterpinholeInput() {
    return this._openregisterpinhole;
  }

  // openroutepinhole - computed: true, optional: true, required: false
  private _openroutepinhole?: string; 
  public get openroutepinhole() {
    return this.getStringAttribute('openroutepinhole');
  }
  public set openroutepinhole(value: string) {
    this._openroutepinhole = value;
  }
  public resetOpenroutepinhole() {
    this._openroutepinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openroutepinholeInput() {
    return this._openroutepinhole;
  }

  // openviapinhole - computed: true, optional: true, required: false
  private _openviapinhole?: string; 
  public get openviapinhole() {
    return this.getStringAttribute('openviapinhole');
  }
  public set openviapinhole(value: string) {
    this._openviapinhole = value;
  }
  public resetOpenviapinhole() {
    this._openviapinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openviapinholeInput() {
    return this._openviapinhole;
  }

  // registrationtimeout - computed: true, optional: true, required: false
  private _registrationtimeout?: number; 
  public get registrationtimeout() {
    return this.getNumberAttribute('registrationtimeout');
  }
  public set registrationtimeout(value: number) {
    this._registrationtimeout = value;
  }
  public resetRegistrationtimeout() {
    this._registrationtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationtimeoutInput() {
    return this._registrationtimeout;
  }

  // rport - computed: true, optional: true, required: false
  private _rport?: string; 
  public get rport() {
    return this.getStringAttribute('rport');
  }
  public set rport(value: string) {
    this._rport = value;
  }
  public resetRport() {
    this._rport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rportInput() {
    return this._rport;
  }

  // sipalgprofilename - computed: false, optional: false, required: true
  private _sipalgprofilename?: string; 
  public get sipalgprofilename() {
    return this.getStringAttribute('sipalgprofilename');
  }
  public set sipalgprofilename(value: string) {
    this._sipalgprofilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipalgprofilenameInput() {
    return this._sipalgprofilename;
  }

  // sipdstportrange - computed: true, optional: true, required: false
  private _sipdstportrange?: string; 
  public get sipdstportrange() {
    return this.getStringAttribute('sipdstportrange');
  }
  public set sipdstportrange(value: string) {
    this._sipdstportrange = value;
  }
  public resetSipdstportrange() {
    this._sipdstportrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipdstportrangeInput() {
    return this._sipdstportrange;
  }

  // sipsessiontimeout - computed: true, optional: true, required: false
  private _sipsessiontimeout?: number; 
  public get sipsessiontimeout() {
    return this.getNumberAttribute('sipsessiontimeout');
  }
  public set sipsessiontimeout(value: number) {
    this._sipsessiontimeout = value;
  }
  public resetSipsessiontimeout() {
    this._sipsessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipsessiontimeoutInput() {
    return this._sipsessiontimeout;
  }

  // sipsrcportrange - computed: true, optional: true, required: false
  private _sipsrcportrange?: string; 
  public get sipsrcportrange() {
    return this.getStringAttribute('sipsrcportrange');
  }
  public set sipsrcportrange(value: string) {
    this._sipsrcportrange = value;
  }
  public resetSipsrcportrange() {
    this._sipsrcportrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipsrcportrangeInput() {
    return this._sipsrcportrange;
  }

  // siptransportprotocol - computed: true, optional: true, required: false
  private _siptransportprotocol?: string; 
  public get siptransportprotocol() {
    return this.getStringAttribute('siptransportprotocol');
  }
  public set siptransportprotocol(value: string) {
    this._siptransportprotocol = value;
  }
  public resetSiptransportprotocol() {
    this._siptransportprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siptransportprotocolInput() {
    return this._siptransportprotocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datasessionidletimeout: cdktf.numberToTerraform(this._datasessionidletimeout),
      id: cdktf.stringToTerraform(this._id),
      opencontactpinhole: cdktf.stringToTerraform(this._opencontactpinhole),
      openrecordroutepinhole: cdktf.stringToTerraform(this._openrecordroutepinhole),
      openregisterpinhole: cdktf.stringToTerraform(this._openregisterpinhole),
      openroutepinhole: cdktf.stringToTerraform(this._openroutepinhole),
      openviapinhole: cdktf.stringToTerraform(this._openviapinhole),
      registrationtimeout: cdktf.numberToTerraform(this._registrationtimeout),
      rport: cdktf.stringToTerraform(this._rport),
      sipalgprofilename: cdktf.stringToTerraform(this._sipalgprofilename),
      sipdstportrange: cdktf.stringToTerraform(this._sipdstportrange),
      sipsessiontimeout: cdktf.numberToTerraform(this._sipsessiontimeout),
      sipsrcportrange: cdktf.stringToTerraform(this._sipsrcportrange),
      siptransportprotocol: cdktf.stringToTerraform(this._siptransportprotocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datasessionidletimeout: {
        value: cdktf.numberToHclTerraform(this._datasessionidletimeout),
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
      opencontactpinhole: {
        value: cdktf.stringToHclTerraform(this._opencontactpinhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openrecordroutepinhole: {
        value: cdktf.stringToHclTerraform(this._openrecordroutepinhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openregisterpinhole: {
        value: cdktf.stringToHclTerraform(this._openregisterpinhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openroutepinhole: {
        value: cdktf.stringToHclTerraform(this._openroutepinhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openviapinhole: {
        value: cdktf.stringToHclTerraform(this._openviapinhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registrationtimeout: {
        value: cdktf.numberToHclTerraform(this._registrationtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rport: {
        value: cdktf.stringToHclTerraform(this._rport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sipalgprofilename: {
        value: cdktf.stringToHclTerraform(this._sipalgprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sipdstportrange: {
        value: cdktf.stringToHclTerraform(this._sipdstportrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sipsessiontimeout: {
        value: cdktf.numberToHclTerraform(this._sipsessiontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sipsrcportrange: {
        value: cdktf.stringToHclTerraform(this._sipsrcportrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siptransportprotocol: {
        value: cdktf.stringToHclTerraform(this._siptransportprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
