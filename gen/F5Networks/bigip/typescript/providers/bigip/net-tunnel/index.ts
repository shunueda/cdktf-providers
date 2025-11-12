// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application service that the object belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#app_service NetTunnel#app_service}
  */
  readonly appService?: string;
  /**
  * Specifies whether auto lasthop is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#auto_last_hop NetTunnel#auto_last_hop}
  */
  readonly autoLastHop?: string;
  /**
  * User defined description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#description NetTunnel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#id NetTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies an idle timeout for wildcard tunnels in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#idle_timeout NetTunnel#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * The key field may represent different values depending on the type of the tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#key NetTunnel#key}
  */
  readonly key?: number;
  /**
  * Specifies a local IP address. This option is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#local_address NetTunnel#local_address}
  */
  readonly localAddress: string;
  /**
  * Specifies how the tunnel carries traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#mode NetTunnel#mode}
  */
  readonly mode?: string;
  /**
  * Specifies the maximum transmission unit (MTU) of the tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#mtu NetTunnel#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the TUNNEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#name NetTunnel#name}
  */
  readonly name: string;
  /**
  * Displays the admin-partition within which this component resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#partition NetTunnel#partition}
  */
  readonly partition?: string;
  /**
  * Specifies the profile that you want to associate with the tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#profile NetTunnel#profile}
  */
  readonly profile: string;
  /**
  * Specifies a remote IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#remote_address NetTunnel#remote_address}
  */
  readonly remoteAddress?: string;
  /**
  * Specifies a secondary non-floating IP address when the local-address is set to a floating address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#secondary_address NetTunnel#secondary_address}
  */
  readonly secondaryAddress?: string;
  /**
  * Specifies a value for insertion into the Type of Service (ToS) octet within the IP header of the encapsulating header of transmitted packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#tos NetTunnel#tos}
  */
  readonly tos?: string;
  /**
  * Specifies a traffic-group for use with the tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#traffic_group NetTunnel#traffic_group}
  */
  readonly trafficGroup?: string;
  /**
  * Enables or disables the tunnel to be transparent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#transparent NetTunnel#transparent}
  */
  readonly transparent?: string;
  /**
  * Enables or disables the tunnel to use the PMTU (Path MTU) information provided by ICMP NeedFrag error messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#use_pmtu NetTunnel#use_pmtu}
  */
  readonly usePmtu?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel bigip_net_tunnel}
*/
export class NetTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_net_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetTunnel to import
  * @param importFromId The id of the existing NetTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_net_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_tunnel bigip_net_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: NetTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_net_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appService = config.appService;
    this._autoLastHop = config.autoLastHop;
    this._description = config.description;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._key = config.key;
    this._localAddress = config.localAddress;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._name = config.name;
    this._partition = config.partition;
    this._profile = config.profile;
    this._remoteAddress = config.remoteAddress;
    this._secondaryAddress = config.secondaryAddress;
    this._tos = config.tos;
    this._trafficGroup = config.trafficGroup;
    this._transparent = config.transparent;
    this._usePmtu = config.usePmtu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service - computed: false, optional: true, required: false
  private _appService?: string; 
  public get appService() {
    return this.getStringAttribute('app_service');
  }
  public set appService(value: string) {
    this._appService = value;
  }
  public resetAppService() {
    this._appService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService;
  }

  // auto_last_hop - computed: false, optional: true, required: false
  private _autoLastHop?: string; 
  public get autoLastHop() {
    return this.getStringAttribute('auto_last_hop');
  }
  public set autoLastHop(value: string) {
    this._autoLastHop = value;
  }
  public resetAutoLastHop() {
    this._autoLastHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLastHopInput() {
    return this._autoLastHop;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // local_address - computed: false, optional: false, required: true
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // secondary_address - computed: false, optional: true, required: false
  private _secondaryAddress?: string; 
  public get secondaryAddress() {
    return this.getStringAttribute('secondary_address');
  }
  public set secondaryAddress(value: string) {
    this._secondaryAddress = value;
  }
  public resetSecondaryAddress() {
    this._secondaryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAddressInput() {
    return this._secondaryAddress;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // traffic_group - computed: false, optional: true, required: false
  private _trafficGroup?: string; 
  public get trafficGroup() {
    return this.getStringAttribute('traffic_group');
  }
  public set trafficGroup(value: string) {
    this._trafficGroup = value;
  }
  public resetTrafficGroup() {
    this._trafficGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficGroupInput() {
    return this._trafficGroup;
  }

  // transparent - computed: false, optional: true, required: false
  private _transparent?: string; 
  public get transparent() {
    return this.getStringAttribute('transparent');
  }
  public set transparent(value: string) {
    this._transparent = value;
  }
  public resetTransparent() {
    this._transparent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentInput() {
    return this._transparent;
  }

  // use_pmtu - computed: false, optional: true, required: false
  private _usePmtu?: string; 
  public get usePmtu() {
    return this.getStringAttribute('use_pmtu');
  }
  public set usePmtu(value: string) {
    this._usePmtu = value;
  }
  public resetUsePmtu() {
    this._usePmtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePmtuInput() {
    return this._usePmtu;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service: cdktf.stringToTerraform(this._appService),
      auto_last_hop: cdktf.stringToTerraform(this._autoLastHop),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      key: cdktf.numberToTerraform(this._key),
      local_address: cdktf.stringToTerraform(this._localAddress),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      profile: cdktf.stringToTerraform(this._profile),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      secondary_address: cdktf.stringToTerraform(this._secondaryAddress),
      tos: cdktf.stringToTerraform(this._tos),
      traffic_group: cdktf.stringToTerraform(this._trafficGroup),
      transparent: cdktf.stringToTerraform(this._transparent),
      use_pmtu: cdktf.stringToTerraform(this._usePmtu),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service: {
        value: cdktf.stringToHclTerraform(this._appService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_last_hop: {
        value: cdktf.stringToHclTerraform(this._autoLastHop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key: {
        value: cdktf.numberToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_address: {
        value: cdktf.stringToHclTerraform(this._secondaryAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos: {
        value: cdktf.stringToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_group: {
        value: cdktf.stringToHclTerraform(this._trafficGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transparent: {
        value: cdktf.stringToHclTerraform(this._transparent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_pmtu: {
        value: cdktf.stringToHclTerraform(this._usePmtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
