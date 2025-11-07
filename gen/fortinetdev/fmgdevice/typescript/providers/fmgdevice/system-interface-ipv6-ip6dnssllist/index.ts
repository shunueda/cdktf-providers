// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6dnssllist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemInterfaceIpv6Ip6DnssllistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6dnssllist#device_name SystemInterfaceIpv6Ip6Dnssllist#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6dnssllist#dnssl_life_time SystemInterfaceIpv6Ip6Dnssllist#dnssl_life_time}
  */
  readonly dnsslLifeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6dnssllist#domain SystemInterfaceIpv6Ip6Dnssllist#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6dnssllist#id SystemInterfaceIpv6Ip6Dnssllist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6dnssllist#interface SystemInterfaceIpv6Ip6Dnssllist#interface}
  */
  readonly interface: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6dnssllist fmgdevice_system_interface_ipv6_ip6dnssllist}
*/
export class SystemInterfaceIpv6Ip6Dnssllist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_interface_ipv6_ip6dnssllist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemInterfaceIpv6Ip6Dnssllist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemInterfaceIpv6Ip6Dnssllist to import
  * @param importFromId The id of the existing SystemInterfaceIpv6Ip6Dnssllist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6dnssllist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemInterfaceIpv6Ip6Dnssllist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_interface_ipv6_ip6dnssllist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6dnssllist fmgdevice_system_interface_ipv6_ip6dnssllist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemInterfaceIpv6Ip6DnssllistConfig
  */
  public constructor(scope: Construct, id: string, config: SystemInterfaceIpv6Ip6DnssllistConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_interface_ipv6_ip6dnssllist',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._dnsslLifeTime = config.dnsslLifeTime;
    this._domain = config.domain;
    this._id = config.id;
    this._interface = config.interface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // dnssl_life_time - computed: true, optional: true, required: false
  private _dnsslLifeTime?: number; 
  public get dnsslLifeTime() {
    return this.getNumberAttribute('dnssl_life_time');
  }
  public set dnsslLifeTime(value: number) {
    this._dnsslLifeTime = value;
  }
  public resetDnsslLifeTime() {
    this._dnsslLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsslLifeTimeInput() {
    return this._dnsslLifeTime;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      dnssl_life_time: cdktf.numberToTerraform(this._dnsslLifeTime),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssl_life_time: {
        value: cdktf.numberToHclTerraform(this._dnsslLifeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
