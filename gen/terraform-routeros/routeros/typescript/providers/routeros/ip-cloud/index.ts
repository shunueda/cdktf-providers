// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud#___path___ IpCloud#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud#___skip___ IpCloud#___skip___}
  */
  readonly skip?: string;
  /**
  * Enables or revokes and disables the Back to Home service. ddns-enabled has to be set to yes, for BTH to function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud#back_to_home_vpn IpCloud#back_to_home_vpn}
  */
  readonly backToHomeVpn?: string;
  /**
  * If set to yes, then the device will send an encrypted message to the MikroTik's Cloud server. The server will then decrypt the message and verify that the sender is an authentic MikroTik device. If all is OK, then the MikroTik's Cloud server will create a DDNS record for this device and send a response to the device. Every minute the IP/Cloud service on the router will check if WAN IP address matches the one sent to MikroTik's Cloud server and will send encrypted update to cloud server if IP address changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud#ddns_enabled IpCloud#ddns_enabled}
  */
  readonly ddnsEnabled?: string;
  /**
  * If set DDNS will attempt to connect IP Cloud servers at the set interval. If set to none it will continue to internally check IP address update and connect to IP Cloud servers as needed. Useful if IP address used is not on the router itself and thus, cannot be checked as a value internal to the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud#ddns_update_interval IpCloud#ddns_update_interval}
  */
  readonly ddnsUpdateInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud#id IpCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set to yes then router clock will be set to time, provided by cloud server IF there is no NTP or SNTP client enabled. If set to no, then IP/Cloud service will never update the device's clock. If update-time is set to yes, Clock will be updated even when ddns-enabled is set to no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud#update_time IpCloud#update_time}
  */
  readonly updateTime?: string;
  /**
  * You can enter relay code that will be preferred for BTH connection, if not set, relay with smallest RTT will be chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud#vpn_prefer_relay_code IpCloud#vpn_prefer_relay_code}
  */
  readonly vpnPreferRelayCode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud routeros_ip_cloud}
*/
export class IpCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpCloud to import
  * @param importFromId The id of the existing IpCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_cloud routeros_ip_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpCloudConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpCloudConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_cloud',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._backToHomeVpn = config.backToHomeVpn;
    this._ddnsEnabled = config.ddnsEnabled;
    this._ddnsUpdateInterval = config.ddnsUpdateInterval;
    this._id = config.id;
    this._updateTime = config.updateTime;
    this._vpnPreferRelayCode = config.vpnPreferRelayCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // back_to_home_vpn - computed: false, optional: true, required: false
  private _backToHomeVpn?: string; 
  public get backToHomeVpn() {
    return this.getStringAttribute('back_to_home_vpn');
  }
  public set backToHomeVpn(value: string) {
    this._backToHomeVpn = value;
  }
  public resetBackToHomeVpn() {
    this._backToHomeVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backToHomeVpnInput() {
    return this._backToHomeVpn;
  }

  // ddns_enabled - computed: false, optional: true, required: false
  private _ddnsEnabled?: string; 
  public get ddnsEnabled() {
    return this.getStringAttribute('ddns_enabled');
  }
  public set ddnsEnabled(value: string) {
    this._ddnsEnabled = value;
  }
  public resetDdnsEnabled() {
    this._ddnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnabledInput() {
    return this._ddnsEnabled;
  }

  // ddns_update_interval - computed: false, optional: true, required: false
  private _ddnsUpdateInterval?: string; 
  public get ddnsUpdateInterval() {
    return this.getStringAttribute('ddns_update_interval');
  }
  public set ddnsUpdateInterval(value: string) {
    this._ddnsUpdateInterval = value;
  }
  public resetDdnsUpdateInterval() {
    this._ddnsUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateIntervalInput() {
    return this._ddnsUpdateInterval;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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

  // public_address - computed: true, optional: false, required: false
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }

  // public_address_ipv6 - computed: true, optional: false, required: false
  public get publicAddressIpv6() {
    return this.getStringAttribute('public_address_ipv6');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // update_time - computed: false, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // vpn_prefer_relay_code - computed: false, optional: true, required: false
  private _vpnPreferRelayCode?: string; 
  public get vpnPreferRelayCode() {
    return this.getStringAttribute('vpn_prefer_relay_code');
  }
  public set vpnPreferRelayCode(value: string) {
    this._vpnPreferRelayCode = value;
  }
  public resetVpnPreferRelayCode() {
    this._vpnPreferRelayCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnPreferRelayCodeInput() {
    return this._vpnPreferRelayCode;
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      back_to_home_vpn: cdktf.stringToTerraform(this._backToHomeVpn),
      ddns_enabled: cdktf.stringToTerraform(this._ddnsEnabled),
      ddns_update_interval: cdktf.stringToTerraform(this._ddnsUpdateInterval),
      id: cdktf.stringToTerraform(this._id),
      update_time: cdktf.stringToTerraform(this._updateTime),
      vpn_prefer_relay_code: cdktf.stringToTerraform(this._vpnPreferRelayCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      back_to_home_vpn: {
        value: cdktf.stringToHclTerraform(this._backToHomeVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_enabled: {
        value: cdktf.stringToHclTerraform(this._ddnsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_update_interval: {
        value: cdktf.stringToHclTerraform(this._ddnsUpdateInterval),
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
      update_time: {
        value: cdktf.stringToHclTerraform(this._updateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_prefer_relay_code: {
        value: cdktf.stringToHclTerraform(this._vpnPreferRelayCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
