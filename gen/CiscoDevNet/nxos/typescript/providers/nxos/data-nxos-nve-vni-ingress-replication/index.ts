// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni_ingress_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosNveVniIngressReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni_ingress_replication#device DataNxosNveVniIngressReplication#device}
  */
  readonly device?: string;
  /**
  * Virtual Network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni_ingress_replication#vni DataNxosNveVniIngressReplication#vni}
  */
  readonly vni: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni_ingress_replication nxos_nve_vni_ingress_replication}
*/
export class DataNxosNveVniIngressReplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_nve_vni_ingress_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosNveVniIngressReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosNveVniIngressReplication to import
  * @param importFromId The id of the existing DataNxosNveVniIngressReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni_ingress_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosNveVniIngressReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_nve_vni_ingress_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/nve_vni_ingress_replication nxos_nve_vni_ingress_replication} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosNveVniIngressReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosNveVniIngressReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_nve_vni_ingress_replication',
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
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
