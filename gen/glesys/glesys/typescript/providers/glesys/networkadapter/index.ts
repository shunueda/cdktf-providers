// https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkadapterConfig extends cdktf.TerraformMetaArguments {
  /**
  * `VMXNET 3` (default) or `E1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter#adaptertype Networkadapter#adaptertype}
  */
  readonly adaptertype?: string;
  /**
  * adapter bandwidth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter#bandwidth Networkadapter#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter#id Networkadapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network Adapter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter#name Networkadapter#name}
  */
  readonly name?: string;
  /**
  * Network ID to connect to. Defaults to `internet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter#networkid Networkadapter#networkid}
  */
  readonly networkid?: string;
  /**
  * Server ID to connect the adapter to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter#serverid Networkadapter#serverid}
  */
  readonly serverid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter glesys_networkadapter}
*/
export class Networkadapter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_networkadapter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Networkadapter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Networkadapter to import
  * @param importFromId The id of the existing Networkadapter that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Networkadapter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_networkadapter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/networkadapter glesys_networkadapter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkadapterConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkadapterConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_networkadapter',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adaptertype = config.adaptertype;
    this._bandwidth = config.bandwidth;
    this._id = config.id;
    this._name = config.name;
    this._networkid = config.networkid;
    this._serverid = config.serverid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adaptertype - computed: true, optional: true, required: false
  private _adaptertype?: string; 
  public get adaptertype() {
    return this.getStringAttribute('adaptertype');
  }
  public set adaptertype(value: string) {
    this._adaptertype = value;
  }
  public resetAdaptertype() {
    this._adaptertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptertypeInput() {
    return this._adaptertype;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
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

  // networkid - computed: true, optional: true, required: false
  private _networkid?: string; 
  public get networkid() {
    return this.getStringAttribute('networkid');
  }
  public set networkid(value: string) {
    this._networkid = value;
  }
  public resetNetworkid() {
    this._networkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkidInput() {
    return this._networkid;
  }

  // serverid - computed: false, optional: false, required: true
  private _serverid?: string; 
  public get serverid() {
    return this.getStringAttribute('serverid');
  }
  public set serverid(value: string) {
    this._serverid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serveridInput() {
    return this._serverid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adaptertype: cdktf.stringToTerraform(this._adaptertype),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      networkid: cdktf.stringToTerraform(this._networkid),
      serverid: cdktf.stringToTerraform(this._serverid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adaptertype: {
        value: cdktf.stringToHclTerraform(this._adaptertype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
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
      networkid: {
        value: cdktf.stringToHclTerraform(this._networkid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverid: {
        value: cdktf.stringToHclTerraform(this._serverid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
