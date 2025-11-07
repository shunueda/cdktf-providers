// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IploadbalancingUdpFarmServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv4 address (e.g., 192.0.2.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server#address IploadbalancingUdpFarmServer#address}
  */
  readonly address: string;
  /**
  * Human readable name for your server, this field is for you
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server#display_name IploadbalancingUdpFarmServer#display_name}
  */
  readonly displayName?: string;
  /**
  * Id of your farm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server#farm_id IploadbalancingUdpFarmServer#farm_id}
  */
  readonly farmId: number;
  /**
  * Port attached to your server ([1..49151]). Inherited from farm if null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server#port IploadbalancingUdpFarmServer#port}
  */
  readonly port?: number;
  /**
  * The internal name of your IP load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server#service_name IploadbalancingUdpFarmServer#service_name}
  */
  readonly serviceName: string;
  /**
  * Possible values for server status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server#status IploadbalancingUdpFarmServer#status}
  */
  readonly status: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server ovh_iploadbalancing_udp_farm_server}
*/
export class IploadbalancingUdpFarmServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iploadbalancing_udp_farm_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IploadbalancingUdpFarmServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IploadbalancingUdpFarmServer to import
  * @param importFromId The id of the existing IploadbalancingUdpFarmServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IploadbalancingUdpFarmServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iploadbalancing_udp_farm_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_farm_server ovh_iploadbalancing_udp_farm_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IploadbalancingUdpFarmServerConfig
  */
  public constructor(scope: Construct, id: string, config: IploadbalancingUdpFarmServerConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_iploadbalancing_udp_farm_server',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._displayName = config.displayName;
    this._farmId = config.farmId;
    this._port = config.port;
    this._serviceName = config.serviceName;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // backend_id - computed: true, optional: false, required: false
  public get backendId() {
    return this.getNumberAttribute('backend_id');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // farm_id - computed: false, optional: false, required: true
  private _farmId?: number; 
  public get farmId() {
    return this.getNumberAttribute('farm_id');
  }
  public set farmId(value: number) {
    this._farmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get farmIdInput() {
    return this._farmId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getNumberAttribute('server_id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      display_name: cdktf.stringToTerraform(this._displayName),
      farm_id: cdktf.numberToTerraform(this._farmId),
      port: cdktf.numberToTerraform(this._port),
      service_name: cdktf.stringToTerraform(this._serviceName),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      farm_id: {
        value: cdktf.numberToHclTerraform(this._farmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
