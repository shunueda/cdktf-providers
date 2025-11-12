// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6SettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#___path___ Ipv6Settings#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#___skip___ Ipv6Settings#___skip___}
  */
  readonly skip?: string;
  /**
  * Whether to accept ICMP redirect messages. Typically should be enabled on the host and disabled on routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#accept_redirects Ipv6Settings#accept_redirects}
  */
  readonly acceptRedirects?: string;
  /**
  * Accept router advertisement (RA) messages. If enabled, the router will be able to get the address using stateless address configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#accept_router_advertisements Ipv6Settings#accept_router_advertisements}
  */
  readonly acceptRouterAdvertisements?: string;
  /**
  * Allows Fast Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#allow_fast_path Ipv6Settings#allow_fast_path}
  */
  readonly allowFastPath?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable system wide IPv6 settings (prevents LL address generation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#disable_ipv6 Ipv6Settings#disable_ipv6}
  */
  readonly disableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Disable automatic link-local address generation for non-VPN interfaces. This can be used when manually configured link-local addresses are being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#disable_link_local_address Ipv6Settings#disable_link_local_address}
  */
  readonly disableLinkLocalAddress?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable packet forwarding between interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#forward Ipv6Settings#forward}
  */
  readonly forward?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#id Ipv6Settings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A maximum number or IPv6 neighbors. Since RouterOS version 7.1, the default value depends on the installed amount of RAM. It is possible to set a higher value than the default, but it increases the risk of out-of-memory condition. The default values for certain RAM sizes:
  *   * 1024 for 64 MB,
  *   * 2048 for 128 MB,
  *   * 4096 for 256 MB,
  *   * 8192 for 512 MB,
  *   * 16384 for 1024 MB or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#max_neighbor_entries Ipv6Settings#max_neighbor_entries}
  */
  readonly maxNeighborEntries?: number;
  /**
  * Minimal number of IPv6/Neighbor entries, for which device must allocate memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#min_neighbor_entries Ipv6Settings#min_neighbor_entries}
  */
  readonly minNeighborEntries?: number;
  /**
  * IPv6 Hash policy used for ECMP routing in `/ipv6/settings` menu
  *   * l3 -- layer-3 hashing of src IP, dst IP, flow label, IP protocol
  *   * l3-inner -- layer-3 hashing or inner layer-3 hashing if available
  *   * l4 -- layer-4 hashing of src IP, dst IP, IP protocol, src port, dst port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#multipath_hash_policy Ipv6Settings#multipath_hash_policy}
  */
  readonly multipathHashPolicy?: string;
  /**
  * Expected maximum number of IPv6/Neighbor entries which system should handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#soft_max_neighbor_entries Ipv6Settings#soft_max_neighbor_entries}
  */
  readonly softMaxNeighborEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#stale_neighbor_detect_interval Ipv6Settings#stale_neighbor_detect_interval}
  */
  readonly staleNeighborDetectInterval?: string;
  /**
  * Timeout after which stale IPv6/Neighbor entries should be purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#stale_neighbor_timeout Ipv6Settings#stale_neighbor_timeout}
  */
  readonly staleNeighborTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings routeros_ipv6_settings}
*/
export class Ipv6Settings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ipv6_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6Settings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6Settings to import
  * @param importFromId The id of the existing Ipv6Settings that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6Settings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ipv6_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_settings routeros_ipv6_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6SettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv6SettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ipv6_settings',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._acceptRedirects = config.acceptRedirects;
    this._acceptRouterAdvertisements = config.acceptRouterAdvertisements;
    this._allowFastPath = config.allowFastPath;
    this._disableIpv6 = config.disableIpv6;
    this._disableLinkLocalAddress = config.disableLinkLocalAddress;
    this._forward = config.forward;
    this._id = config.id;
    this._maxNeighborEntries = config.maxNeighborEntries;
    this._minNeighborEntries = config.minNeighborEntries;
    this._multipathHashPolicy = config.multipathHashPolicy;
    this._softMaxNeighborEntries = config.softMaxNeighborEntries;
    this._staleNeighborDetectInterval = config.staleNeighborDetectInterval;
    this._staleNeighborTimeout = config.staleNeighborTimeout;
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

  // accept_redirects - computed: false, optional: true, required: false
  private _acceptRedirects?: string; 
  public get acceptRedirects() {
    return this.getStringAttribute('accept_redirects');
  }
  public set acceptRedirects(value: string) {
    this._acceptRedirects = value;
  }
  public resetAcceptRedirects() {
    this._acceptRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRedirectsInput() {
    return this._acceptRedirects;
  }

  // accept_router_advertisements - computed: false, optional: true, required: false
  private _acceptRouterAdvertisements?: string; 
  public get acceptRouterAdvertisements() {
    return this.getStringAttribute('accept_router_advertisements');
  }
  public set acceptRouterAdvertisements(value: string) {
    this._acceptRouterAdvertisements = value;
  }
  public resetAcceptRouterAdvertisements() {
    this._acceptRouterAdvertisements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRouterAdvertisementsInput() {
    return this._acceptRouterAdvertisements;
  }

  // allow_fast_path - computed: false, optional: true, required: false
  private _allowFastPath?: boolean | cdktf.IResolvable; 
  public get allowFastPath() {
    return this.getBooleanAttribute('allow_fast_path');
  }
  public set allowFastPath(value: boolean | cdktf.IResolvable) {
    this._allowFastPath = value;
  }
  public resetAllowFastPath() {
    this._allowFastPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFastPathInput() {
    return this._allowFastPath;
  }

  // disable_ipv6 - computed: false, optional: true, required: false
  private _disableIpv6?: boolean | cdktf.IResolvable; 
  public get disableIpv6() {
    return this.getBooleanAttribute('disable_ipv6');
  }
  public set disableIpv6(value: boolean | cdktf.IResolvable) {
    this._disableIpv6 = value;
  }
  public resetDisableIpv6() {
    this._disableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpv6Input() {
    return this._disableIpv6;
  }

  // disable_link_local_address - computed: false, optional: true, required: false
  private _disableLinkLocalAddress?: boolean | cdktf.IResolvable; 
  public get disableLinkLocalAddress() {
    return this.getBooleanAttribute('disable_link_local_address');
  }
  public set disableLinkLocalAddress(value: boolean | cdktf.IResolvable) {
    this._disableLinkLocalAddress = value;
  }
  public resetDisableLinkLocalAddress() {
    this._disableLinkLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLinkLocalAddressInput() {
    return this._disableLinkLocalAddress;
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: boolean | cdktf.IResolvable; 
  public get forward() {
    return this.getBooleanAttribute('forward');
  }
  public set forward(value: boolean | cdktf.IResolvable) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
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

  // ipv6_fast_path_active - computed: true, optional: false, required: false
  public get ipv6FastPathActive() {
    return this.getBooleanAttribute('ipv6_fast_path_active');
  }

  // ipv6_fasttrack_active - computed: true, optional: false, required: false
  public get ipv6FasttrackActive() {
    return this.getBooleanAttribute('ipv6_fasttrack_active');
  }

  // max_neighbor_entries - computed: false, optional: true, required: false
  private _maxNeighborEntries?: number; 
  public get maxNeighborEntries() {
    return this.getNumberAttribute('max_neighbor_entries');
  }
  public set maxNeighborEntries(value: number) {
    this._maxNeighborEntries = value;
  }
  public resetMaxNeighborEntries() {
    this._maxNeighborEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNeighborEntriesInput() {
    return this._maxNeighborEntries;
  }

  // min_neighbor_entries - computed: false, optional: true, required: false
  private _minNeighborEntries?: number; 
  public get minNeighborEntries() {
    return this.getNumberAttribute('min_neighbor_entries');
  }
  public set minNeighborEntries(value: number) {
    this._minNeighborEntries = value;
  }
  public resetMinNeighborEntries() {
    this._minNeighborEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNeighborEntriesInput() {
    return this._minNeighborEntries;
  }

  // multipath_hash_policy - computed: false, optional: true, required: false
  private _multipathHashPolicy?: string; 
  public get multipathHashPolicy() {
    return this.getStringAttribute('multipath_hash_policy');
  }
  public set multipathHashPolicy(value: string) {
    this._multipathHashPolicy = value;
  }
  public resetMultipathHashPolicy() {
    this._multipathHashPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathHashPolicyInput() {
    return this._multipathHashPolicy;
  }

  // soft_max_neighbor_entries - computed: false, optional: true, required: false
  private _softMaxNeighborEntries?: number; 
  public get softMaxNeighborEntries() {
    return this.getNumberAttribute('soft_max_neighbor_entries');
  }
  public set softMaxNeighborEntries(value: number) {
    this._softMaxNeighborEntries = value;
  }
  public resetSoftMaxNeighborEntries() {
    this._softMaxNeighborEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softMaxNeighborEntriesInput() {
    return this._softMaxNeighborEntries;
  }

  // stale_neighbor_detect_interval - computed: false, optional: true, required: false
  private _staleNeighborDetectInterval?: string; 
  public get staleNeighborDetectInterval() {
    return this.getStringAttribute('stale_neighbor_detect_interval');
  }
  public set staleNeighborDetectInterval(value: string) {
    this._staleNeighborDetectInterval = value;
  }
  public resetStaleNeighborDetectInterval() {
    this._staleNeighborDetectInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleNeighborDetectIntervalInput() {
    return this._staleNeighborDetectInterval;
  }

  // stale_neighbor_timeout - computed: false, optional: true, required: false
  private _staleNeighborTimeout?: string; 
  public get staleNeighborTimeout() {
    return this.getStringAttribute('stale_neighbor_timeout');
  }
  public set staleNeighborTimeout(value: string) {
    this._staleNeighborTimeout = value;
  }
  public resetStaleNeighborTimeout() {
    this._staleNeighborTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleNeighborTimeoutInput() {
    return this._staleNeighborTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      accept_redirects: cdktf.stringToTerraform(this._acceptRedirects),
      accept_router_advertisements: cdktf.stringToTerraform(this._acceptRouterAdvertisements),
      allow_fast_path: cdktf.booleanToTerraform(this._allowFastPath),
      disable_ipv6: cdktf.booleanToTerraform(this._disableIpv6),
      disable_link_local_address: cdktf.booleanToTerraform(this._disableLinkLocalAddress),
      forward: cdktf.booleanToTerraform(this._forward),
      id: cdktf.stringToTerraform(this._id),
      max_neighbor_entries: cdktf.numberToTerraform(this._maxNeighborEntries),
      min_neighbor_entries: cdktf.numberToTerraform(this._minNeighborEntries),
      multipath_hash_policy: cdktf.stringToTerraform(this._multipathHashPolicy),
      soft_max_neighbor_entries: cdktf.numberToTerraform(this._softMaxNeighborEntries),
      stale_neighbor_detect_interval: cdktf.stringToTerraform(this._staleNeighborDetectInterval),
      stale_neighbor_timeout: cdktf.stringToTerraform(this._staleNeighborTimeout),
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
      accept_redirects: {
        value: cdktf.stringToHclTerraform(this._acceptRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accept_router_advertisements: {
        value: cdktf.stringToHclTerraform(this._acceptRouterAdvertisements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_fast_path: {
        value: cdktf.booleanToHclTerraform(this._allowFastPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._disableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_link_local_address: {
        value: cdktf.booleanToHclTerraform(this._disableLinkLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward: {
        value: cdktf.booleanToHclTerraform(this._forward),
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
      max_neighbor_entries: {
        value: cdktf.numberToHclTerraform(this._maxNeighborEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_neighbor_entries: {
        value: cdktf.numberToHclTerraform(this._minNeighborEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multipath_hash_policy: {
        value: cdktf.stringToHclTerraform(this._multipathHashPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_max_neighbor_entries: {
        value: cdktf.numberToHclTerraform(this._softMaxNeighborEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stale_neighbor_detect_interval: {
        value: cdktf.stringToHclTerraform(this._staleNeighborDetectInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stale_neighbor_timeout: {
        value: cdktf.stringToHclTerraform(this._staleNeighborTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
