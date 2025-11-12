// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsdhcpparams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsdhcpparamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsdhcpparams#dhcpclient Nsdhcpparams#dhcpclient}
  */
  readonly dhcpclient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsdhcpparams#id Nsdhcpparams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsdhcpparams#saveroute Nsdhcpparams#saveroute}
  */
  readonly saveroute?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsdhcpparams citrixadc_nsdhcpparams}
*/
export class Nsdhcpparams extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsdhcpparams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsdhcpparams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsdhcpparams to import
  * @param importFromId The id of the existing Nsdhcpparams that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsdhcpparams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsdhcpparams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsdhcpparams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsdhcpparams citrixadc_nsdhcpparams} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsdhcpparamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsdhcpparamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsdhcpparams',
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
    this._dhcpclient = config.dhcpclient;
    this._id = config.id;
    this._saveroute = config.saveroute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcpclient - computed: true, optional: true, required: false
  private _dhcpclient?: string; 
  public get dhcpclient() {
    return this.getStringAttribute('dhcpclient');
  }
  public set dhcpclient(value: string) {
    this._dhcpclient = value;
  }
  public resetDhcpclient() {
    this._dhcpclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpclientInput() {
    return this._dhcpclient;
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

  // saveroute - computed: true, optional: true, required: false
  private _saveroute?: string; 
  public get saveroute() {
    return this.getStringAttribute('saveroute');
  }
  public set saveroute(value: string) {
    this._saveroute = value;
  }
  public resetSaveroute() {
    this._saveroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saverouteInput() {
    return this._saveroute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcpclient: cdktf.stringToTerraform(this._dhcpclient),
      id: cdktf.stringToTerraform(this._id),
      saveroute: cdktf.stringToTerraform(this._saveroute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcpclient: {
        value: cdktf.stringToHclTerraform(this._dhcpclient),
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
      saveroute: {
        value: cdktf.stringToHclTerraform(this._saveroute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
