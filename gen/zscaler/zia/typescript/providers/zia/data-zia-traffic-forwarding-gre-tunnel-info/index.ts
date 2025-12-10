// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/traffic_forwarding_gre_tunnel_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaTrafficForwardingGreTunnelInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/traffic_forwarding_gre_tunnel_info#gre_enabled DataZiaTrafficForwardingGreTunnelInfo#gre_enabled}
  */
  readonly greEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/traffic_forwarding_gre_tunnel_info#id DataZiaTrafficForwardingGreTunnelInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/traffic_forwarding_gre_tunnel_info#ip_address DataZiaTrafficForwardingGreTunnelInfo#ip_address}
  */
  readonly ipAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/traffic_forwarding_gre_tunnel_info zia_traffic_forwarding_gre_tunnel_info}
*/
export class DataZiaTrafficForwardingGreTunnelInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_traffic_forwarding_gre_tunnel_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaTrafficForwardingGreTunnelInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaTrafficForwardingGreTunnelInfo to import
  * @param importFromId The id of the existing DataZiaTrafficForwardingGreTunnelInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/traffic_forwarding_gre_tunnel_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaTrafficForwardingGreTunnelInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_traffic_forwarding_gre_tunnel_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/traffic_forwarding_gre_tunnel_info zia_traffic_forwarding_gre_tunnel_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaTrafficForwardingGreTunnelInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaTrafficForwardingGreTunnelInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_traffic_forwarding_gre_tunnel_info',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._greEnabled = config.greEnabled;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gre_enabled - computed: false, optional: true, required: false
  private _greEnabled?: boolean | cdktf.IResolvable; 
  public get greEnabled() {
    return this.getBooleanAttribute('gre_enabled');
  }
  public set greEnabled(value: boolean | cdktf.IResolvable) {
    this._greEnabled = value;
  }
  public resetGreEnabled() {
    this._greEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greEnabledInput() {
    return this._greEnabled;
  }

  // gre_range_primary - computed: true, optional: false, required: false
  public get greRangePrimary() {
    return this.getStringAttribute('gre_range_primary');
  }

  // gre_range_secondary - computed: true, optional: false, required: false
  public get greRangeSecondary() {
    return this.getStringAttribute('gre_range_secondary');
  }

  // gre_tunnel_ip - computed: true, optional: false, required: false
  public get greTunnelIp() {
    return this.getStringAttribute('gre_tunnel_ip');
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

  // ip_address - computed: false, optional: true, required: false
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

  // primary_gw - computed: true, optional: false, required: false
  public get primaryGw() {
    return this.getStringAttribute('primary_gw');
  }

  // secondary_gw - computed: true, optional: false, required: false
  public get secondaryGw() {
    return this.getStringAttribute('secondary_gw');
  }

  // tun_id - computed: true, optional: false, required: false
  public get tunId() {
    return this.getNumberAttribute('tun_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gre_enabled: cdktf.booleanToTerraform(this._greEnabled),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gre_enabled: {
        value: cdktf.booleanToHclTerraform(this._greEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
