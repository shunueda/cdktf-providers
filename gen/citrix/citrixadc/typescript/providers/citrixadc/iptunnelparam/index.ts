// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IptunnelparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#dropfrag Iptunnelparam#dropfrag}
  */
  readonly dropfrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#dropfragcputhreshold Iptunnelparam#dropfragcputhreshold}
  */
  readonly dropfragcputhreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#enablestrictrx Iptunnelparam#enablestrictrx}
  */
  readonly enablestrictrx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#enablestricttx Iptunnelparam#enablestricttx}
  */
  readonly enablestricttx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#id Iptunnelparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#mac Iptunnelparam#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#srcip Iptunnelparam#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#srciproundrobin Iptunnelparam#srciproundrobin}
  */
  readonly srciproundrobin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#useclientsourceip Iptunnelparam#useclientsourceip}
  */
  readonly useclientsourceip?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam citrixadc_iptunnelparam}
*/
export class Iptunnelparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_iptunnelparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Iptunnelparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Iptunnelparam to import
  * @param importFromId The id of the existing Iptunnelparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Iptunnelparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_iptunnelparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/iptunnelparam citrixadc_iptunnelparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IptunnelparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IptunnelparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_iptunnelparam',
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
    this._dropfrag = config.dropfrag;
    this._dropfragcputhreshold = config.dropfragcputhreshold;
    this._enablestrictrx = config.enablestrictrx;
    this._enablestricttx = config.enablestricttx;
    this._id = config.id;
    this._mac = config.mac;
    this._srcip = config.srcip;
    this._srciproundrobin = config.srciproundrobin;
    this._useclientsourceip = config.useclientsourceip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dropfrag - computed: true, optional: true, required: false
  private _dropfrag?: string; 
  public get dropfrag() {
    return this.getStringAttribute('dropfrag');
  }
  public set dropfrag(value: string) {
    this._dropfrag = value;
  }
  public resetDropfrag() {
    this._dropfrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropfragInput() {
    return this._dropfrag;
  }

  // dropfragcputhreshold - computed: true, optional: true, required: false
  private _dropfragcputhreshold?: number; 
  public get dropfragcputhreshold() {
    return this.getNumberAttribute('dropfragcputhreshold');
  }
  public set dropfragcputhreshold(value: number) {
    this._dropfragcputhreshold = value;
  }
  public resetDropfragcputhreshold() {
    this._dropfragcputhreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropfragcputhresholdInput() {
    return this._dropfragcputhreshold;
  }

  // enablestrictrx - computed: true, optional: true, required: false
  private _enablestrictrx?: string; 
  public get enablestrictrx() {
    return this.getStringAttribute('enablestrictrx');
  }
  public set enablestrictrx(value: string) {
    this._enablestrictrx = value;
  }
  public resetEnablestrictrx() {
    this._enablestrictrx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablestrictrxInput() {
    return this._enablestrictrx;
  }

  // enablestricttx - computed: true, optional: true, required: false
  private _enablestricttx?: string; 
  public get enablestricttx() {
    return this.getStringAttribute('enablestricttx');
  }
  public set enablestricttx(value: string) {
    this._enablestricttx = value;
  }
  public resetEnablestricttx() {
    this._enablestricttx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablestricttxInput() {
    return this._enablestricttx;
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

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // srciproundrobin - computed: true, optional: true, required: false
  private _srciproundrobin?: string; 
  public get srciproundrobin() {
    return this.getStringAttribute('srciproundrobin');
  }
  public set srciproundrobin(value: string) {
    this._srciproundrobin = value;
  }
  public resetSrciproundrobin() {
    this._srciproundrobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srciproundrobinInput() {
    return this._srciproundrobin;
  }

  // useclientsourceip - computed: true, optional: true, required: false
  private _useclientsourceip?: string; 
  public get useclientsourceip() {
    return this.getStringAttribute('useclientsourceip');
  }
  public set useclientsourceip(value: string) {
    this._useclientsourceip = value;
  }
  public resetUseclientsourceip() {
    this._useclientsourceip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useclientsourceipInput() {
    return this._useclientsourceip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dropfrag: cdktf.stringToTerraform(this._dropfrag),
      dropfragcputhreshold: cdktf.numberToTerraform(this._dropfragcputhreshold),
      enablestrictrx: cdktf.stringToTerraform(this._enablestrictrx),
      enablestricttx: cdktf.stringToTerraform(this._enablestricttx),
      id: cdktf.stringToTerraform(this._id),
      mac: cdktf.stringToTerraform(this._mac),
      srcip: cdktf.stringToTerraform(this._srcip),
      srciproundrobin: cdktf.stringToTerraform(this._srciproundrobin),
      useclientsourceip: cdktf.stringToTerraform(this._useclientsourceip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dropfrag: {
        value: cdktf.stringToHclTerraform(this._dropfrag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropfragcputhreshold: {
        value: cdktf.numberToHclTerraform(this._dropfragcputhreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enablestrictrx: {
        value: cdktf.stringToHclTerraform(this._enablestrictrx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablestricttx: {
        value: cdktf.stringToHclTerraform(this._enablestricttx),
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
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcip: {
        value: cdktf.stringToHclTerraform(this._srcip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srciproundrobin: {
        value: cdktf.stringToHclTerraform(this._srciproundrobin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useclientsourceip: {
        value: cdktf.stringToHclTerraform(this._useclientsourceip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
