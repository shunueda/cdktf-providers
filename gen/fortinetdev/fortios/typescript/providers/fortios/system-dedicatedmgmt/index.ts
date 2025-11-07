// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDedicatedmgmtConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#default_gateway SystemDedicatedmgmt#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#dhcp_end_ip SystemDedicatedmgmt#dhcp_end_ip}
  */
  readonly dhcpEndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#dhcp_netmask SystemDedicatedmgmt#dhcp_netmask}
  */
  readonly dhcpNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#dhcp_server SystemDedicatedmgmt#dhcp_server}
  */
  readonly dhcpServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#dhcp_start_ip SystemDedicatedmgmt#dhcp_start_ip}
  */
  readonly dhcpStartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#id SystemDedicatedmgmt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#interface SystemDedicatedmgmt#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#status SystemDedicatedmgmt#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#vdomparam SystemDedicatedmgmt#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt fortios_system_dedicatedmgmt}
*/
export class SystemDedicatedmgmt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_dedicatedmgmt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDedicatedmgmt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDedicatedmgmt to import
  * @param importFromId The id of the existing SystemDedicatedmgmt that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDedicatedmgmt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_dedicatedmgmt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dedicatedmgmt fortios_system_dedicatedmgmt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDedicatedmgmtConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDedicatedmgmtConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_dedicatedmgmt',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._dhcpEndIp = config.dhcpEndIp;
    this._dhcpNetmask = config.dhcpNetmask;
    this._dhcpServer = config.dhcpServer;
    this._dhcpStartIp = config.dhcpStartIp;
    this._id = config.id;
    this._interface = config.interface;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // dhcp_end_ip - computed: true, optional: true, required: false
  private _dhcpEndIp?: string; 
  public get dhcpEndIp() {
    return this.getStringAttribute('dhcp_end_ip');
  }
  public set dhcpEndIp(value: string) {
    this._dhcpEndIp = value;
  }
  public resetDhcpEndIp() {
    this._dhcpEndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEndIpInput() {
    return this._dhcpEndIp;
  }

  // dhcp_netmask - computed: true, optional: true, required: false
  private _dhcpNetmask?: string; 
  public get dhcpNetmask() {
    return this.getStringAttribute('dhcp_netmask');
  }
  public set dhcpNetmask(value: string) {
    this._dhcpNetmask = value;
  }
  public resetDhcpNetmask() {
    this._dhcpNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetmaskInput() {
    return this._dhcpNetmask;
  }

  // dhcp_server - computed: true, optional: true, required: false
  private _dhcpServer?: string; 
  public get dhcpServer() {
    return this.getStringAttribute('dhcp_server');
  }
  public set dhcpServer(value: string) {
    this._dhcpServer = value;
  }
  public resetDhcpServer() {
    this._dhcpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer;
  }

  // dhcp_start_ip - computed: true, optional: true, required: false
  private _dhcpStartIp?: string; 
  public get dhcpStartIp() {
    return this.getStringAttribute('dhcp_start_ip');
  }
  public set dhcpStartIp(value: string) {
    this._dhcpStartIp = value;
  }
  public resetDhcpStartIp() {
    this._dhcpStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStartIpInput() {
    return this._dhcpStartIp;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      dhcp_end_ip: cdktf.stringToTerraform(this._dhcpEndIp),
      dhcp_netmask: cdktf.stringToTerraform(this._dhcpNetmask),
      dhcp_server: cdktf.stringToTerraform(this._dhcpServer),
      dhcp_start_ip: cdktf.stringToTerraform(this._dhcpStartIp),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_end_ip: {
        value: cdktf.stringToHclTerraform(this._dhcpEndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_netmask: {
        value: cdktf.stringToHclTerraform(this._dhcpNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_server: {
        value: cdktf.stringToHclTerraform(this._dhcpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_start_ip: {
        value: cdktf.stringToHclTerraform(this._dhcpStartIp),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
