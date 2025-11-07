// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnrtspalgprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnrtspalgprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnrtspalgprofile#id Lsnrtspalgprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnrtspalgprofile#rtspalgprofilename Lsnrtspalgprofile#rtspalgprofilename}
  */
  readonly rtspalgprofilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnrtspalgprofile#rtspidletimeout Lsnrtspalgprofile#rtspidletimeout}
  */
  readonly rtspidletimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnrtspalgprofile#rtspportrange Lsnrtspalgprofile#rtspportrange}
  */
  readonly rtspportrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnrtspalgprofile#rtsptransportprotocol Lsnrtspalgprofile#rtsptransportprotocol}
  */
  readonly rtsptransportprotocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnrtspalgprofile citrixadc_lsnrtspalgprofile}
*/
export class Lsnrtspalgprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnrtspalgprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsnrtspalgprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsnrtspalgprofile to import
  * @param importFromId The id of the existing Lsnrtspalgprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnrtspalgprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsnrtspalgprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnrtspalgprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnrtspalgprofile citrixadc_lsnrtspalgprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnrtspalgprofileConfig
  */
  public constructor(scope: Construct, id: string, config: LsnrtspalgprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnrtspalgprofile',
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
    this._id = config.id;
    this._rtspalgprofilename = config.rtspalgprofilename;
    this._rtspidletimeout = config.rtspidletimeout;
    this._rtspportrange = config.rtspportrange;
    this._rtsptransportprotocol = config.rtsptransportprotocol;
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

  // rtspalgprofilename - computed: false, optional: false, required: true
  private _rtspalgprofilename?: string; 
  public get rtspalgprofilename() {
    return this.getStringAttribute('rtspalgprofilename');
  }
  public set rtspalgprofilename(value: string) {
    this._rtspalgprofilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspalgprofilenameInput() {
    return this._rtspalgprofilename;
  }

  // rtspidletimeout - computed: true, optional: true, required: false
  private _rtspidletimeout?: number; 
  public get rtspidletimeout() {
    return this.getNumberAttribute('rtspidletimeout');
  }
  public set rtspidletimeout(value: number) {
    this._rtspidletimeout = value;
  }
  public resetRtspidletimeout() {
    this._rtspidletimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspidletimeoutInput() {
    return this._rtspidletimeout;
  }

  // rtspportrange - computed: true, optional: true, required: false
  private _rtspportrange?: string; 
  public get rtspportrange() {
    return this.getStringAttribute('rtspportrange');
  }
  public set rtspportrange(value: string) {
    this._rtspportrange = value;
  }
  public resetRtspportrange() {
    this._rtspportrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspportrangeInput() {
    return this._rtspportrange;
  }

  // rtsptransportprotocol - computed: true, optional: true, required: false
  private _rtsptransportprotocol?: string; 
  public get rtsptransportprotocol() {
    return this.getStringAttribute('rtsptransportprotocol');
  }
  public set rtsptransportprotocol(value: string) {
    this._rtsptransportprotocol = value;
  }
  public resetRtsptransportprotocol() {
    this._rtsptransportprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsptransportprotocolInput() {
    return this._rtsptransportprotocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rtspalgprofilename: cdktf.stringToTerraform(this._rtspalgprofilename),
      rtspidletimeout: cdktf.numberToTerraform(this._rtspidletimeout),
      rtspportrange: cdktf.stringToTerraform(this._rtspportrange),
      rtsptransportprotocol: cdktf.stringToTerraform(this._rtsptransportprotocol),
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
      rtspalgprofilename: {
        value: cdktf.stringToHclTerraform(this._rtspalgprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtspidletimeout: {
        value: cdktf.numberToHclTerraform(this._rtspidletimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtspportrange: {
        value: cdktf.stringToHclTerraform(this._rtspportrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtsptransportprotocol: {
        value: cdktf.stringToHclTerraform(this._rtsptransportprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
