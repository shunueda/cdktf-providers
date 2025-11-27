// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_udp_farm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IploadbalancingUdpFarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human readable name for your backend, this field is for you
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_udp_farm#display_name IploadbalancingUdpFarm#display_name}
  */
  readonly displayName?: string;
  /**
  * Port attached to your farm ([1..49151]). Inherited from frontend if null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_udp_farm#port IploadbalancingUdpFarm#port}
  */
  readonly port: number;
  /**
  * The internal name of your IP load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_udp_farm#service_name IploadbalancingUdpFarm#service_name}
  */
  readonly serviceName: string;
  /**
  * Internal Load Balancer identifier of the vRack private network to attach to your farm, mandatory when your Load Balancer is attached to a vRack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_udp_farm#vrack_network_id IploadbalancingUdpFarm#vrack_network_id}
  */
  readonly vrackNetworkId?: number;
  /**
  * Zone of your farm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_udp_farm#zone IploadbalancingUdpFarm#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_udp_farm ovh_iploadbalancing_udp_farm}
*/
export class IploadbalancingUdpFarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iploadbalancing_udp_farm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IploadbalancingUdpFarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IploadbalancingUdpFarm to import
  * @param importFromId The id of the existing IploadbalancingUdpFarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_udp_farm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IploadbalancingUdpFarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iploadbalancing_udp_farm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_udp_farm ovh_iploadbalancing_udp_farm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IploadbalancingUdpFarmConfig
  */
  public constructor(scope: Construct, id: string, config: IploadbalancingUdpFarmConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_iploadbalancing_udp_farm',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._port = config.port;
    this._serviceName = config.serviceName;
    this._vrackNetworkId = config.vrackNetworkId;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // farm_id - computed: true, optional: false, required: false
  public get farmId() {
    return this.getNumberAttribute('farm_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // vrack_network_id - computed: false, optional: true, required: false
  private _vrackNetworkId?: number; 
  public get vrackNetworkId() {
    return this.getNumberAttribute('vrack_network_id');
  }
  public set vrackNetworkId(value: number) {
    this._vrackNetworkId = value;
  }
  public resetVrackNetworkId() {
    this._vrackNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrackNetworkIdInput() {
    return this._vrackNetworkId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      port: cdktf.numberToTerraform(this._port),
      service_name: cdktf.stringToTerraform(this._serviceName),
      vrack_network_id: cdktf.numberToTerraform(this._vrackNetworkId),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vrack_network_id: {
        value: cdktf.numberToHclTerraform(this._vrackNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
