// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosNveVniConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni#device DataNxosNveVni#device}
  */
  readonly device?: string;
  /**
  * Virtual Network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni#vni DataNxosNveVni#vni}
  */
  readonly vni: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni nxos_nve_vni}
*/
export class DataNxosNveVni extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_nve_vni";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosNveVni resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosNveVni to import
  * @param importFromId The id of the existing DataNxosNveVni that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosNveVni to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_nve_vni", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni nxos_nve_vni} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosNveVniConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosNveVniConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_nve_vni',
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
    this._vni = config.vni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associate_vrf - computed: true, optional: false, required: false
  public get associateVrf() {
    return this.getBooleanAttribute('associate_vrf');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multicast_group - computed: true, optional: false, required: false
  public get multicastGroup() {
    return this.getStringAttribute('multicast_group');
  }

  // multisite_ingress_replication - computed: true, optional: false, required: false
  public get multisiteIngressReplication() {
    return this.getStringAttribute('multisite_ingress_replication');
  }

  // suppress_arp - computed: true, optional: false, required: false
  public get suppressArp() {
    return this.getStringAttribute('suppress_arp');
  }

  // vni - computed: false, optional: false, required: true
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      vni: cdktf.numberToTerraform(this._vni),
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
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
