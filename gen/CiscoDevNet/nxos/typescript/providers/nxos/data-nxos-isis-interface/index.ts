// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/isis_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosIsisInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/isis_interface#device DataNxosIsisInterface#device}
  */
  readonly device?: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/isis_interface#interface_id DataNxosIsisInterface#interface_id}
  */
  readonly interfaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/isis_interface nxos_isis_interface}
*/
export class DataNxosIsisInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_isis_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosIsisInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosIsisInterface to import
  * @param importFromId The id of the existing DataNxosIsisInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/isis_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosIsisInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_isis_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/isis_interface nxos_isis_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosIsisInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosIsisInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_isis_interface',
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
    this._interfaceId = config.interfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_check - computed: true, optional: false, required: false
  public get authenticationCheck() {
    return this.getBooleanAttribute('authentication_check');
  }

  // authentication_check_l1 - computed: true, optional: false, required: false
  public get authenticationCheckL1() {
    return this.getBooleanAttribute('authentication_check_l1');
  }

  // authentication_check_l2 - computed: true, optional: false, required: false
  public get authenticationCheckL2() {
    return this.getBooleanAttribute('authentication_check_l2');
  }

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }

  // authentication_key_l1 - computed: true, optional: false, required: false
  public get authenticationKeyL1() {
    return this.getStringAttribute('authentication_key_l1');
  }

  // authentication_key_l2 - computed: true, optional: false, required: false
  public get authenticationKeyL2() {
    return this.getStringAttribute('authentication_key_l2');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // authentication_type_l1 - computed: true, optional: false, required: false
  public get authenticationTypeL1() {
    return this.getStringAttribute('authentication_type_l1');
  }

  // authentication_type_l2 - computed: true, optional: false, required: false
  public get authenticationTypeL2() {
    return this.getStringAttribute('authentication_type_l2');
  }

  // circuit_type - computed: true, optional: false, required: false
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
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

  // enable_ipv4 - computed: true, optional: false, required: false
  public get enableIpv4() {
    return this.getBooleanAttribute('enable_ipv4');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // hello_interval_l1 - computed: true, optional: false, required: false
  public get helloIntervalL1() {
    return this.getNumberAttribute('hello_interval_l1');
  }

  // hello_interval_l2 - computed: true, optional: false, required: false
  public get helloIntervalL2() {
    return this.getNumberAttribute('hello_interval_l2');
  }

  // hello_multiplier - computed: true, optional: false, required: false
  public get helloMultiplier() {
    return this.getNumberAttribute('hello_multiplier');
  }

  // hello_multiplier_l1 - computed: true, optional: false, required: false
  public get helloMultiplierL1() {
    return this.getNumberAttribute('hello_multiplier_l1');
  }

  // hello_multiplier_l2 - computed: true, optional: false, required: false
  public get helloMultiplierL2() {
    return this.getNumberAttribute('hello_multiplier_l2');
  }

  // hello_padding - computed: true, optional: false, required: false
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // metric_l1 - computed: true, optional: false, required: false
  public get metricL1() {
    return this.getNumberAttribute('metric_l1');
  }

  // metric_l2 - computed: true, optional: false, required: false
  public get metricL2() {
    return this.getNumberAttribute('metric_l2');
  }

  // mtu_check - computed: true, optional: false, required: false
  public get mtuCheck() {
    return this.getBooleanAttribute('mtu_check');
  }

  // mtu_check_l1 - computed: true, optional: false, required: false
  public get mtuCheckL1() {
    return this.getBooleanAttribute('mtu_check_l1');
  }

  // mtu_check_l2 - computed: true, optional: false, required: false
  public get mtuCheckL2() {
    return this.getBooleanAttribute('mtu_check_l2');
  }

  // network_type_p2p - computed: true, optional: false, required: false
  public get networkTypeP2P() {
    return this.getStringAttribute('network_type_p2p');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getStringAttribute('passive');
  }

  // priority_l1 - computed: true, optional: false, required: false
  public get priorityL1() {
    return this.getNumberAttribute('priority_l1');
  }

  // priority_l2 - computed: true, optional: false, required: false
  public get priorityL2() {
    return this.getNumberAttribute('priority_l2');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
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
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
