// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean value. When enabled, it sets the subnet gateway IP address as the default gateway for the machine the interface belongs to. This option can only be used with the `AUTO` and `STATIC` modes. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link#default_gateway NetworkInterfaceLink#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * The identifier (system ID, hostname, or FQDN) of the device with the network interface. Either `machine` or `device` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link#device NetworkInterfaceLink#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link#id NetworkInterfaceLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Valid IP address (from the given subnet) to be configured on the network interface. Only used when `mode` is set to `STATIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link#ip_address NetworkInterfaceLink#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The identifier (system ID, hostname, or FQDN) of the machine with the network interface. Either `machine` or `device` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link#machine NetworkInterfaceLink#machine}
  */
  readonly machine?: string;
  /**
  * Connection mode to subnet. It defaults to `AUTO`. Valid options are:
  * 	* `AUTO` - Random static IP address from the subnet.
  * 	* `DHCP` - IP address from the DHCP on the given subnet.
  * 	* `STATIC` - Use `ip_address` as static IP address.
  * 	* `LINK_UP` - Bring the interface up only on the given subnet. No IP address will be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link#mode NetworkInterfaceLink#mode}
  */
  readonly mode?: string;
  /**
  * The identifier (MAC address, name, or ID) of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link#network_interface NetworkInterfaceLink#network_interface}
  */
  readonly networkInterface: string;
  /**
  * The identifier (CIDR or ID) of the subnet to be connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link#subnet NetworkInterfaceLink#subnet}
  */
  readonly subnet: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link maas_network_interface_link}
*/
export class NetworkInterfaceLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_network_interface_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkInterfaceLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkInterfaceLink to import
  * @param importFromId The id of the existing NetworkInterfaceLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkInterfaceLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_network_interface_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_link maas_network_interface_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceLinkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_network_interface_link',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultGateway = config.defaultGateway;
    this._device = config.device;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._machine = config.machine;
    this._mode = config.mode;
    this._networkInterface = config.networkInterface;
    this._subnet = config.subnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // machine - computed: false, optional: true, required: false
  private _machine?: string; 
  public get machine() {
    return this.getStringAttribute('machine');
  }
  public set machine(value: string) {
    this._machine = value;
  }
  public resetMachine() {
    this._machine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface?: string; 
  public get networkInterface() {
    return this.getStringAttribute('network_interface');
  }
  public set networkInterface(value: string) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_gateway: cdktf.booleanToTerraform(this._defaultGateway),
      device: cdktf.stringToTerraform(this._device),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      machine: cdktf.stringToTerraform(this._machine),
      mode: cdktf.stringToTerraform(this._mode),
      network_interface: cdktf.stringToTerraform(this._networkInterface),
      subnet: cdktf.stringToTerraform(this._subnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_gateway: {
        value: cdktf.booleanToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine: {
        value: cdktf.stringToHclTerraform(this._machine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface: {
        value: cdktf.stringToHclTerraform(this._networkInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
