// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpAddressFamilyL2VpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  *   - Choices: `evpn`, `vpls`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn#af_name BgpAddressFamilyL2Vpn#af_name}
  */
  readonly afName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn#asn BgpAddressFamilyL2Vpn#asn}
  */
  readonly asn: string;
  /**
  * Set the delay to trigger nexthop tracking
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn#bgp_nexthop_trigger_delay BgpAddressFamilyL2Vpn#bgp_nexthop_trigger_delay}
  */
  readonly bgpNexthopTriggerDelay?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn#delete_mode BgpAddressFamilyL2Vpn#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn#device BgpAddressFamilyL2Vpn#device}
  */
  readonly device?: string;
  /**
  * Enable rewrite RT in the BGP EVPN address-family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn#rewrite_evpn_rt_asn BgpAddressFamilyL2Vpn#rewrite_evpn_rt_asn}
  */
  readonly rewriteEvpnRtAsn?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn iosxe_bgp_address_family_l2vpn}
*/
export class BgpAddressFamilyL2Vpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_address_family_l2vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpAddressFamilyL2Vpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpAddressFamilyL2Vpn to import
  * @param importFromId The id of the existing BgpAddressFamilyL2Vpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpAddressFamilyL2Vpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_address_family_l2vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_address_family_l2vpn iosxe_bgp_address_family_l2vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpAddressFamilyL2VpnConfig
  */
  public constructor(scope: Construct, id: string, config: BgpAddressFamilyL2VpnConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_address_family_l2vpn',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._afName = config.afName;
    this._asn = config.asn;
    this._bgpNexthopTriggerDelay = config.bgpNexthopTriggerDelay;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._rewriteEvpnRtAsn = config.rewriteEvpnRtAsn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // bgp_nexthop_trigger_delay - computed: false, optional: true, required: false
  private _bgpNexthopTriggerDelay?: number; 
  public get bgpNexthopTriggerDelay() {
    return this.getNumberAttribute('bgp_nexthop_trigger_delay');
  }
  public set bgpNexthopTriggerDelay(value: number) {
    this._bgpNexthopTriggerDelay = value;
  }
  public resetBgpNexthopTriggerDelay() {
    this._bgpNexthopTriggerDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNexthopTriggerDelayInput() {
    return this._bgpNexthopTriggerDelay;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rewrite_evpn_rt_asn - computed: false, optional: true, required: false
  private _rewriteEvpnRtAsn?: boolean | cdktf.IResolvable; 
  public get rewriteEvpnRtAsn() {
    return this.getBooleanAttribute('rewrite_evpn_rt_asn');
  }
  public set rewriteEvpnRtAsn(value: boolean | cdktf.IResolvable) {
    this._rewriteEvpnRtAsn = value;
  }
  public resetRewriteEvpnRtAsn() {
    this._rewriteEvpnRtAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteEvpnRtAsnInput() {
    return this._rewriteEvpnRtAsn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      af_name: cdktf.stringToTerraform(this._afName),
      asn: cdktf.stringToTerraform(this._asn),
      bgp_nexthop_trigger_delay: cdktf.numberToTerraform(this._bgpNexthopTriggerDelay),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      rewrite_evpn_rt_asn: cdktf.booleanToTerraform(this._rewriteEvpnRtAsn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_nexthop_trigger_delay: {
        value: cdktf.numberToHclTerraform(this._bgpNexthopTriggerDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_evpn_rt_asn: {
        value: cdktf.booleanToHclTerraform(this._rewriteEvpnRtAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
