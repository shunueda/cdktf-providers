// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bridge_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosBridgeDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bridge_domain#device DataNxosBridgeDomain#device}
  */
  readonly device?: string;
  /**
  * Fabric encapsulation. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bridge_domain#fabric_encap DataNxosBridgeDomain#fabric_encap}
  */
  readonly fabricEncap: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bridge_domain nxos_bridge_domain}
*/
export class DataNxosBridgeDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bridge_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosBridgeDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosBridgeDomain to import
  * @param importFromId The id of the existing DataNxosBridgeDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bridge_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosBridgeDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bridge_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bridge_domain nxos_bridge_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosBridgeDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosBridgeDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bridge_domain',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._fabricEncap = config.fabricEncap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_encap - computed: true, optional: false, required: false
  public get accessEncap() {
    return this.getStringAttribute('access_encap');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // fabric_encap - computed: false, optional: false, required: true
  private _fabricEncap?: string; 
  public get fabricEncap() {
    return this.getStringAttribute('fabric_encap');
  }
  public set fabricEncap(value: string) {
    this._fabricEncap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricEncapInput() {
    return this._fabricEncap;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      fabric_encap: cdktf.stringToTerraform(this._fabricEncap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_encap: {
        value: cdktf.stringToHclTerraform(this._fabricEncap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
