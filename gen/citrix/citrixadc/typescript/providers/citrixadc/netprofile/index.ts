// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#id Netprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#mbf Netprofile#mbf}
  */
  readonly mbf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#name Netprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#overridelsn Netprofile#overridelsn}
  */
  readonly overridelsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#proxyprotocol Netprofile#proxyprotocol}
  */
  readonly proxyprotocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#proxyprotocolaftertlshandshake Netprofile#proxyprotocolaftertlshandshake}
  */
  readonly proxyprotocolaftertlshandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#proxyprotocoltxversion Netprofile#proxyprotocoltxversion}
  */
  readonly proxyprotocoltxversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#srcip Netprofile#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#srcippersistency Netprofile#srcippersistency}
  */
  readonly srcippersistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#td Netprofile#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile citrixadc_netprofile}
*/
export class Netprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_netprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Netprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Netprofile to import
  * @param importFromId The id of the existing Netprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Netprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_netprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/netprofile citrixadc_netprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_netprofile',
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
    this._mbf = config.mbf;
    this._name = config.name;
    this._overridelsn = config.overridelsn;
    this._proxyprotocol = config.proxyprotocol;
    this._proxyprotocolaftertlshandshake = config.proxyprotocolaftertlshandshake;
    this._proxyprotocoltxversion = config.proxyprotocoltxversion;
    this._srcip = config.srcip;
    this._srcippersistency = config.srcippersistency;
    this._td = config.td;
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

  // mbf - computed: true, optional: true, required: false
  private _mbf?: string; 
  public get mbf() {
    return this.getStringAttribute('mbf');
  }
  public set mbf(value: string) {
    this._mbf = value;
  }
  public resetMbf() {
    this._mbf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbfInput() {
    return this._mbf;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overridelsn - computed: true, optional: true, required: false
  private _overridelsn?: string; 
  public get overridelsn() {
    return this.getStringAttribute('overridelsn');
  }
  public set overridelsn(value: string) {
    this._overridelsn = value;
  }
  public resetOverridelsn() {
    this._overridelsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridelsnInput() {
    return this._overridelsn;
  }

  // proxyprotocol - computed: true, optional: true, required: false
  private _proxyprotocol?: string; 
  public get proxyprotocol() {
    return this.getStringAttribute('proxyprotocol');
  }
  public set proxyprotocol(value: string) {
    this._proxyprotocol = value;
  }
  public resetProxyprotocol() {
    this._proxyprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyprotocolInput() {
    return this._proxyprotocol;
  }

  // proxyprotocolaftertlshandshake - computed: true, optional: true, required: false
  private _proxyprotocolaftertlshandshake?: string; 
  public get proxyprotocolaftertlshandshake() {
    return this.getStringAttribute('proxyprotocolaftertlshandshake');
  }
  public set proxyprotocolaftertlshandshake(value: string) {
    this._proxyprotocolaftertlshandshake = value;
  }
  public resetProxyprotocolaftertlshandshake() {
    this._proxyprotocolaftertlshandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyprotocolaftertlshandshakeInput() {
    return this._proxyprotocolaftertlshandshake;
  }

  // proxyprotocoltxversion - computed: true, optional: true, required: false
  private _proxyprotocoltxversion?: string; 
  public get proxyprotocoltxversion() {
    return this.getStringAttribute('proxyprotocoltxversion');
  }
  public set proxyprotocoltxversion(value: string) {
    this._proxyprotocoltxversion = value;
  }
  public resetProxyprotocoltxversion() {
    this._proxyprotocoltxversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyprotocoltxversionInput() {
    return this._proxyprotocoltxversion;
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

  // srcippersistency - computed: true, optional: true, required: false
  private _srcippersistency?: string; 
  public get srcippersistency() {
    return this.getStringAttribute('srcippersistency');
  }
  public set srcippersistency(value: string) {
    this._srcippersistency = value;
  }
  public resetSrcippersistency() {
    this._srcippersistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcippersistencyInput() {
    return this._srcippersistency;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mbf: cdktf.stringToTerraform(this._mbf),
      name: cdktf.stringToTerraform(this._name),
      overridelsn: cdktf.stringToTerraform(this._overridelsn),
      proxyprotocol: cdktf.stringToTerraform(this._proxyprotocol),
      proxyprotocolaftertlshandshake: cdktf.stringToTerraform(this._proxyprotocolaftertlshandshake),
      proxyprotocoltxversion: cdktf.stringToTerraform(this._proxyprotocoltxversion),
      srcip: cdktf.stringToTerraform(this._srcip),
      srcippersistency: cdktf.stringToTerraform(this._srcippersistency),
      td: cdktf.numberToTerraform(this._td),
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
      mbf: {
        value: cdktf.stringToHclTerraform(this._mbf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overridelsn: {
        value: cdktf.stringToHclTerraform(this._overridelsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyprotocol: {
        value: cdktf.stringToHclTerraform(this._proxyprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyprotocolaftertlshandshake: {
        value: cdktf.stringToHclTerraform(this._proxyprotocolaftertlshandshake),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyprotocoltxversion: {
        value: cdktf.stringToHclTerraform(this._proxyprotocoltxversion),
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
      srcippersistency: {
        value: cdktf.stringToHclTerraform(this._srcippersistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
