// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdpserverprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile#id Rdpserverprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile#name Rdpserverprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile#psk Rdpserverprofile#psk}
  */
  readonly psk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile#rdpip Rdpserverprofile#rdpip}
  */
  readonly rdpip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile#rdpport Rdpserverprofile#rdpport}
  */
  readonly rdpport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile#rdpredirection Rdpserverprofile#rdpredirection}
  */
  readonly rdpredirection?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile citrixadc_rdpserverprofile}
*/
export class Rdpserverprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rdpserverprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rdpserverprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rdpserverprofile to import
  * @param importFromId The id of the existing Rdpserverprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rdpserverprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rdpserverprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/rdpserverprofile citrixadc_rdpserverprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdpserverprofileConfig
  */
  public constructor(scope: Construct, id: string, config: RdpserverprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rdpserverprofile',
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
    this._name = config.name;
    this._psk = config.psk;
    this._rdpip = config.rdpip;
    this._rdpport = config.rdpport;
    this._rdpredirection = config.rdpredirection;
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

  // psk - computed: true, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // rdpip - computed: true, optional: true, required: false
  private _rdpip?: string; 
  public get rdpip() {
    return this.getStringAttribute('rdpip');
  }
  public set rdpip(value: string) {
    this._rdpip = value;
  }
  public resetRdpip() {
    this._rdpip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpipInput() {
    return this._rdpip;
  }

  // rdpport - computed: true, optional: true, required: false
  private _rdpport?: number; 
  public get rdpport() {
    return this.getNumberAttribute('rdpport');
  }
  public set rdpport(value: number) {
    this._rdpport = value;
  }
  public resetRdpport() {
    this._rdpport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpportInput() {
    return this._rdpport;
  }

  // rdpredirection - computed: true, optional: true, required: false
  private _rdpredirection?: string; 
  public get rdpredirection() {
    return this.getStringAttribute('rdpredirection');
  }
  public set rdpredirection(value: string) {
    this._rdpredirection = value;
  }
  public resetRdpredirection() {
    this._rdpredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpredirectionInput() {
    return this._rdpredirection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      psk: cdktf.stringToTerraform(this._psk),
      rdpip: cdktf.stringToTerraform(this._rdpip),
      rdpport: cdktf.numberToTerraform(this._rdpport),
      rdpredirection: cdktf.stringToTerraform(this._rdpredirection),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdpip: {
        value: cdktf.stringToHclTerraform(this._rdpip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdpport: {
        value: cdktf.numberToHclTerraform(this._rdpport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rdpredirection: {
        value: cdktf.stringToHclTerraform(this._rdpredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
