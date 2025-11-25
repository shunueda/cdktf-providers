// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficForwardingVpnCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials#comments TrafficForwardingVpnCredentials#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials#fqdn TrafficForwardingVpnCredentials#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials#id TrafficForwardingVpnCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials#ip_address TrafficForwardingVpnCredentials#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials#pre_shared_key TrafficForwardingVpnCredentials#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials#type TrafficForwardingVpnCredentials#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials zia_traffic_forwarding_vpn_credentials}
*/
export class TrafficForwardingVpnCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_traffic_forwarding_vpn_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficForwardingVpnCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficForwardingVpnCredentials to import
  * @param importFromId The id of the existing TrafficForwardingVpnCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficForwardingVpnCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_traffic_forwarding_vpn_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_forwarding_vpn_credentials zia_traffic_forwarding_vpn_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficForwardingVpnCredentialsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TrafficForwardingVpnCredentialsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_traffic_forwarding_vpn_credentials',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._preSharedKey = config.preSharedKey;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // pre_shared_key - computed: false, optional: true, required: false
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      pre_shared_key: cdktf.stringToTerraform(this._preSharedKey),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._preSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
