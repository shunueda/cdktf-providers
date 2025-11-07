// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IsisAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address family type.
  *   - Choices: `v4`, `v6`
  *   - Default value: `v4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family#address_family IsisAddressFamily#address_family}
  */
  readonly addressFamily: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family#device IsisAddressFamily#device}
  */
  readonly device?: string;
  /**
  * Enabling BFD on all ISIS domain interfaces.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family#enable_bfd IsisAddressFamily#enable_bfd}
  */
  readonly enableBfd?: boolean | cdktf.IResolvable;
  /**
  * IS-IS instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family#instance_name IsisAddressFamily#instance_name}
  */
  readonly instanceName: string;
  /**
  * Prefix advertise passive only for level-1
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family#prefix_advertise_passive_l1 IsisAddressFamily#prefix_advertise_passive_l1}
  */
  readonly prefixAdvertisePassiveL1?: boolean | cdktf.IResolvable;
  /**
  * Prefix advertise passive only level-2
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family#prefix_advertise_passive_l2 IsisAddressFamily#prefix_advertise_passive_l2}
  */
  readonly prefixAdvertisePassiveL2?: boolean | cdktf.IResolvable;
  /**
  * Segment routing for MPLS	
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family#segment_routing_mpls IsisAddressFamily#segment_routing_mpls}
  */
  readonly segmentRoutingMpls?: boolean | cdktf.IResolvable;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family#vrf IsisAddressFamily#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family nxos_isis_address_family}
*/
export class IsisAddressFamily extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_isis_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IsisAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IsisAddressFamily to import
  * @param importFromId The id of the existing IsisAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IsisAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_isis_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_address_family nxos_isis_address_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IsisAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: IsisAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_isis_address_family',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamily = config.addressFamily;
    this._device = config.device;
    this._enableBfd = config.enableBfd;
    this._instanceName = config.instanceName;
    this._prefixAdvertisePassiveL1 = config.prefixAdvertisePassiveL1;
    this._prefixAdvertisePassiveL2 = config.prefixAdvertisePassiveL2;
    this._segmentRoutingMpls = config.segmentRoutingMpls;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
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

  // enable_bfd - computed: true, optional: true, required: false
  private _enableBfd?: boolean | cdktf.IResolvable; 
  public get enableBfd() {
    return this.getBooleanAttribute('enable_bfd');
  }
  public set enableBfd(value: boolean | cdktf.IResolvable) {
    this._enableBfd = value;
  }
  public resetEnableBfd() {
    this._enableBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBfdInput() {
    return this._enableBfd;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // prefix_advertise_passive_l1 - computed: true, optional: true, required: false
  private _prefixAdvertisePassiveL1?: boolean | cdktf.IResolvable; 
  public get prefixAdvertisePassiveL1() {
    return this.getBooleanAttribute('prefix_advertise_passive_l1');
  }
  public set prefixAdvertisePassiveL1(value: boolean | cdktf.IResolvable) {
    this._prefixAdvertisePassiveL1 = value;
  }
  public resetPrefixAdvertisePassiveL1() {
    this._prefixAdvertisePassiveL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixAdvertisePassiveL1Input() {
    return this._prefixAdvertisePassiveL1;
  }

  // prefix_advertise_passive_l2 - computed: true, optional: true, required: false
  private _prefixAdvertisePassiveL2?: boolean | cdktf.IResolvable; 
  public get prefixAdvertisePassiveL2() {
    return this.getBooleanAttribute('prefix_advertise_passive_l2');
  }
  public set prefixAdvertisePassiveL2(value: boolean | cdktf.IResolvable) {
    this._prefixAdvertisePassiveL2 = value;
  }
  public resetPrefixAdvertisePassiveL2() {
    this._prefixAdvertisePassiveL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixAdvertisePassiveL2Input() {
    return this._prefixAdvertisePassiveL2;
  }

  // segment_routing_mpls - computed: true, optional: true, required: false
  private _segmentRoutingMpls?: boolean | cdktf.IResolvable; 
  public get segmentRoutingMpls() {
    return this.getBooleanAttribute('segment_routing_mpls');
  }
  public set segmentRoutingMpls(value: boolean | cdktf.IResolvable) {
    this._segmentRoutingMpls = value;
  }
  public resetSegmentRoutingMpls() {
    this._segmentRoutingMpls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingMplsInput() {
    return this._segmentRoutingMpls;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      device: cdktf.stringToTerraform(this._device),
      enable_bfd: cdktf.booleanToTerraform(this._enableBfd),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      prefix_advertise_passive_l1: cdktf.booleanToTerraform(this._prefixAdvertisePassiveL1),
      prefix_advertise_passive_l2: cdktf.booleanToTerraform(this._prefixAdvertisePassiveL2),
      segment_routing_mpls: cdktf.booleanToTerraform(this._segmentRoutingMpls),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktf.stringToHclTerraform(this._addressFamily),
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
      enable_bfd: {
        value: cdktf.booleanToHclTerraform(this._enableBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_advertise_passive_l1: {
        value: cdktf.booleanToHclTerraform(this._prefixAdvertisePassiveL1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prefix_advertise_passive_l2: {
        value: cdktf.booleanToHclTerraform(this._prefixAdvertisePassiveL2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      segment_routing_mpls: {
        value: cdktf.booleanToHclTerraform(this._segmentRoutingMpls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
