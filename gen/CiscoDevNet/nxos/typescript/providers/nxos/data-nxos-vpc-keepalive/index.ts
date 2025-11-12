// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_keepalive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosVpcKeepaliveConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_keepalive#device DataNxosVpcKeepalive#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_keepalive nxos_vpc_keepalive}
*/
export class DataNxosVpcKeepalive extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_vpc_keepalive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosVpcKeepalive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosVpcKeepalive to import
  * @param importFromId The id of the existing DataNxosVpcKeepalive that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_keepalive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosVpcKeepalive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_vpc_keepalive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_keepalive nxos_vpc_keepalive} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosVpcKeepaliveConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNxosVpcKeepaliveConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nxos_vpc_keepalive',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_ip - computed: true, optional: false, required: false
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
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

  // flush_timeout - computed: true, optional: false, required: false
  public get flushTimeout() {
    return this.getNumberAttribute('flush_timeout');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // precedence_type - computed: true, optional: false, required: false
  public get precedenceType() {
    return this.getNumberAttribute('precedence_type');
  }

  // precedence_value - computed: true, optional: false, required: false
  public get precedenceValue() {
    return this.getNumberAttribute('precedence_value');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // type_of_service_byte - computed: true, optional: false, required: false
  public get typeOfServiceByte() {
    return this.getNumberAttribute('type_of_service_byte');
  }

  // type_of_service_configuration_type - computed: true, optional: false, required: false
  public get typeOfServiceConfigurationType() {
    return this.getNumberAttribute('type_of_service_configuration_type');
  }

  // type_of_service_type - computed: true, optional: false, required: false
  public get typeOfServiceType() {
    return this.getNumberAttribute('type_of_service_type');
  }

  // type_of_service_value - computed: true, optional: false, required: false
  public get typeOfServiceValue() {
    return this.getNumberAttribute('type_of_service_value');
  }

  // udp_port - computed: true, optional: false, required: false
  public get udpPort() {
    return this.getNumberAttribute('udp_port');
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
