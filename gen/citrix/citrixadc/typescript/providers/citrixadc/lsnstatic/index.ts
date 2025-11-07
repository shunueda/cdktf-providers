// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnstaticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#destip Lsnstatic#destip}
  */
  readonly destip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#dsttd Lsnstatic#dsttd}
  */
  readonly dsttd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#id Lsnstatic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#name Lsnstatic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#natip Lsnstatic#natip}
  */
  readonly natip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#natport Lsnstatic#natport}
  */
  readonly natport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#nattype Lsnstatic#nattype}
  */
  readonly nattype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#network6 Lsnstatic#network6}
  */
  readonly network6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#subscrip Lsnstatic#subscrip}
  */
  readonly subscrip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#subscrport Lsnstatic#subscrport}
  */
  readonly subscrport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#td Lsnstatic#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#transportprotocol Lsnstatic#transportprotocol}
  */
  readonly transportprotocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic citrixadc_lsnstatic}
*/
export class Lsnstatic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnstatic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsnstatic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsnstatic to import
  * @param importFromId The id of the existing Lsnstatic that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsnstatic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnstatic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnstatic citrixadc_lsnstatic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnstaticConfig
  */
  public constructor(scope: Construct, id: string, config: LsnstaticConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnstatic',
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
    this._destip = config.destip;
    this._dsttd = config.dsttd;
    this._id = config.id;
    this._name = config.name;
    this._natip = config.natip;
    this._natport = config.natport;
    this._nattype = config.nattype;
    this._network6 = config.network6;
    this._subscrip = config.subscrip;
    this._subscrport = config.subscrport;
    this._td = config.td;
    this._transportprotocol = config.transportprotocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destip - computed: false, optional: true, required: false
  private _destip?: string; 
  public get destip() {
    return this.getStringAttribute('destip');
  }
  public set destip(value: string) {
    this._destip = value;
  }
  public resetDestip() {
    this._destip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipInput() {
    return this._destip;
  }

  // dsttd - computed: false, optional: true, required: false
  private _dsttd?: number; 
  public get dsttd() {
    return this.getNumberAttribute('dsttd');
  }
  public set dsttd(value: number) {
    this._dsttd = value;
  }
  public resetDsttd() {
    this._dsttd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsttdInput() {
    return this._dsttd;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // natip - computed: false, optional: true, required: false
  private _natip?: string; 
  public get natip() {
    return this.getStringAttribute('natip');
  }
  public set natip(value: string) {
    this._natip = value;
  }
  public resetNatip() {
    this._natip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natipInput() {
    return this._natip;
  }

  // natport - computed: false, optional: true, required: false
  private _natport?: number; 
  public get natport() {
    return this.getNumberAttribute('natport');
  }
  public set natport(value: number) {
    this._natport = value;
  }
  public resetNatport() {
    this._natport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natportInput() {
    return this._natport;
  }

  // nattype - computed: false, optional: true, required: false
  private _nattype?: string; 
  public get nattype() {
    return this.getStringAttribute('nattype');
  }
  public set nattype(value: string) {
    this._nattype = value;
  }
  public resetNattype() {
    this._nattype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nattypeInput() {
    return this._nattype;
  }

  // network6 - computed: false, optional: true, required: false
  private _network6?: string; 
  public get network6() {
    return this.getStringAttribute('network6');
  }
  public set network6(value: string) {
    this._network6 = value;
  }
  public resetNetwork6() {
    this._network6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get network6Input() {
    return this._network6;
  }

  // subscrip - computed: false, optional: true, required: false
  private _subscrip?: string; 
  public get subscrip() {
    return this.getStringAttribute('subscrip');
  }
  public set subscrip(value: string) {
    this._subscrip = value;
  }
  public resetSubscrip() {
    this._subscrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscripInput() {
    return this._subscrip;
  }

  // subscrport - computed: false, optional: true, required: false
  private _subscrport?: number; 
  public get subscrport() {
    return this.getNumberAttribute('subscrport');
  }
  public set subscrport(value: number) {
    this._subscrport = value;
  }
  public resetSubscrport() {
    this._subscrport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscrportInput() {
    return this._subscrport;
  }

  // td - computed: false, optional: true, required: false
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
      destip: cdktf.stringToTerraform(this._destip),
      dsttd: cdktf.numberToTerraform(this._dsttd),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      natip: cdktf.stringToTerraform(this._natip),
      natport: cdktf.numberToTerraform(this._natport),
      nattype: cdktf.stringToTerraform(this._nattype),
      network6: cdktf.stringToTerraform(this._network6),
      subscrip: cdktf.stringToTerraform(this._subscrip),
      subscrport: cdktf.numberToTerraform(this._subscrport),
      td: cdktf.numberToTerraform(this._td),
      transportprotocol: cdktf.stringToTerraform(this._transportprotocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destip: {
        value: cdktf.stringToHclTerraform(this._destip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsttd: {
        value: cdktf.numberToHclTerraform(this._dsttd),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      natip: {
        value: cdktf.stringToHclTerraform(this._natip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      natport: {
        value: cdktf.numberToHclTerraform(this._natport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nattype: {
        value: cdktf.stringToHclTerraform(this._nattype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network6: {
        value: cdktf.stringToHclTerraform(this._network6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscrip: {
        value: cdktf.stringToHclTerraform(this._subscrip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscrport: {
        value: cdktf.numberToHclTerraform(this._subscrport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
