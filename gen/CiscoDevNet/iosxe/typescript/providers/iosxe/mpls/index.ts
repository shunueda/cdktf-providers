// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MplsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#delete_mode Mpls#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#device Mpls#device}
  */
  readonly device?: string;
  /**
  * Per CE label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_all_afs_per_ce Mpls#label_mode_all_vrfs_all_afs_per_ce}
  */
  readonly labelModeAllVrfsAllAfsPerCe?: boolean | cdktf.IResolvable;
  /**
  * Per prefix label (default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_all_afs_per_prefix Mpls#label_mode_all_vrfs_all_afs_per_prefix}
  */
  readonly labelModeAllVrfsAllAfsPerPrefix?: boolean | cdktf.IResolvable;
  /**
  * Per VRF label for entire VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_all_afs_per_vrf Mpls#label_mode_all_vrfs_all_afs_per_vrf}
  */
  readonly labelModeAllVrfsAllAfsPerVrf?: boolean | cdktf.IResolvable;
  /**
  * Per VRF label for connected and BGP aggregates in VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_all_afs_vrf_conn_aggr Mpls#label_mode_all_vrfs_all_afs_vrf_conn_aggr}
  */
  readonly labelModeAllVrfsAllAfsVrfConnAggr?: boolean | cdktf.IResolvable;
  /**
  * Per CE label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_bgp_vpnv4_per_ce Mpls#label_mode_all_vrfs_bgp_vpnv4_per_ce}
  */
  readonly labelModeAllVrfsBgpVpnv4PerCe?: boolean | cdktf.IResolvable;
  /**
  * Per prefix label (default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_bgp_vpnv4_per_prefix Mpls#label_mode_all_vrfs_bgp_vpnv4_per_prefix}
  */
  readonly labelModeAllVrfsBgpVpnv4PerPrefix?: boolean | cdktf.IResolvable;
  /**
  * Per VRF label for entire VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_bgp_vpnv4_per_vrf Mpls#label_mode_all_vrfs_bgp_vpnv4_per_vrf}
  */
  readonly labelModeAllVrfsBgpVpnv4PerVrf?: boolean | cdktf.IResolvable;
  /**
  * Per VRF label for connected and BGP aggregates in VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_bgp_vpnv4_vrf_conn_aggr Mpls#label_mode_all_vrfs_bgp_vpnv4_vrf_conn_aggr}
  */
  readonly labelModeAllVrfsBgpVpnv4VrfConnAggr?: boolean | cdktf.IResolvable;
  /**
  * Per CE label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_bgp_vpnv6_per_ce Mpls#label_mode_all_vrfs_bgp_vpnv6_per_ce}
  */
  readonly labelModeAllVrfsBgpVpnv6PerCe?: boolean | cdktf.IResolvable;
  /**
  * Per prefix label (default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_bgp_vpnv6_per_prefix Mpls#label_mode_all_vrfs_bgp_vpnv6_per_prefix}
  */
  readonly labelModeAllVrfsBgpVpnv6PerPrefix?: boolean | cdktf.IResolvable;
  /**
  * Per VRF label for entire VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_bgp_vpnv6_per_vrf Mpls#label_mode_all_vrfs_bgp_vpnv6_per_vrf}
  */
  readonly labelModeAllVrfsBgpVpnv6PerVrf?: boolean | cdktf.IResolvable;
  /**
  * Per VRF label for connected and BGP aggregates in VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_mode_all_vrfs_bgp_vpnv6_vrf_conn_aggr Mpls#label_mode_all_vrfs_bgp_vpnv6_vrf_conn_aggr}
  */
  readonly labelModeAllVrfsBgpVpnv6VrfConnAggr?: boolean | cdktf.IResolvable;
  /**
  * Set platform default label distribution protocol
  *   - Choices: `ldp`, `tdp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#label_protocol Mpls#label_protocol}
  */
  readonly labelProtocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls iosxe_mpls}
*/
export class Mpls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_mpls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mpls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mpls to import
  * @param importFromId The id of the existing Mpls that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mpls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_mpls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/mpls iosxe_mpls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MplsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MplsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_mpls',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._labelModeAllVrfsAllAfsPerCe = config.labelModeAllVrfsAllAfsPerCe;
    this._labelModeAllVrfsAllAfsPerPrefix = config.labelModeAllVrfsAllAfsPerPrefix;
    this._labelModeAllVrfsAllAfsPerVrf = config.labelModeAllVrfsAllAfsPerVrf;
    this._labelModeAllVrfsAllAfsVrfConnAggr = config.labelModeAllVrfsAllAfsVrfConnAggr;
    this._labelModeAllVrfsBgpVpnv4PerCe = config.labelModeAllVrfsBgpVpnv4PerCe;
    this._labelModeAllVrfsBgpVpnv4PerPrefix = config.labelModeAllVrfsBgpVpnv4PerPrefix;
    this._labelModeAllVrfsBgpVpnv4PerVrf = config.labelModeAllVrfsBgpVpnv4PerVrf;
    this._labelModeAllVrfsBgpVpnv4VrfConnAggr = config.labelModeAllVrfsBgpVpnv4VrfConnAggr;
    this._labelModeAllVrfsBgpVpnv6PerCe = config.labelModeAllVrfsBgpVpnv6PerCe;
    this._labelModeAllVrfsBgpVpnv6PerPrefix = config.labelModeAllVrfsBgpVpnv6PerPrefix;
    this._labelModeAllVrfsBgpVpnv6PerVrf = config.labelModeAllVrfsBgpVpnv6PerVrf;
    this._labelModeAllVrfsBgpVpnv6VrfConnAggr = config.labelModeAllVrfsBgpVpnv6VrfConnAggr;
    this._labelProtocol = config.labelProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // label_mode_all_vrfs_all_afs_per_ce - computed: false, optional: true, required: false
  private _labelModeAllVrfsAllAfsPerCe?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsAllAfsPerCe() {
    return this.getBooleanAttribute('label_mode_all_vrfs_all_afs_per_ce');
  }
  public set labelModeAllVrfsAllAfsPerCe(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsAllAfsPerCe = value;
  }
  public resetLabelModeAllVrfsAllAfsPerCe() {
    this._labelModeAllVrfsAllAfsPerCe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsAllAfsPerCeInput() {
    return this._labelModeAllVrfsAllAfsPerCe;
  }

  // label_mode_all_vrfs_all_afs_per_prefix - computed: false, optional: true, required: false
  private _labelModeAllVrfsAllAfsPerPrefix?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsAllAfsPerPrefix() {
    return this.getBooleanAttribute('label_mode_all_vrfs_all_afs_per_prefix');
  }
  public set labelModeAllVrfsAllAfsPerPrefix(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsAllAfsPerPrefix = value;
  }
  public resetLabelModeAllVrfsAllAfsPerPrefix() {
    this._labelModeAllVrfsAllAfsPerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsAllAfsPerPrefixInput() {
    return this._labelModeAllVrfsAllAfsPerPrefix;
  }

  // label_mode_all_vrfs_all_afs_per_vrf - computed: false, optional: true, required: false
  private _labelModeAllVrfsAllAfsPerVrf?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsAllAfsPerVrf() {
    return this.getBooleanAttribute('label_mode_all_vrfs_all_afs_per_vrf');
  }
  public set labelModeAllVrfsAllAfsPerVrf(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsAllAfsPerVrf = value;
  }
  public resetLabelModeAllVrfsAllAfsPerVrf() {
    this._labelModeAllVrfsAllAfsPerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsAllAfsPerVrfInput() {
    return this._labelModeAllVrfsAllAfsPerVrf;
  }

  // label_mode_all_vrfs_all_afs_vrf_conn_aggr - computed: false, optional: true, required: false
  private _labelModeAllVrfsAllAfsVrfConnAggr?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsAllAfsVrfConnAggr() {
    return this.getBooleanAttribute('label_mode_all_vrfs_all_afs_vrf_conn_aggr');
  }
  public set labelModeAllVrfsAllAfsVrfConnAggr(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsAllAfsVrfConnAggr = value;
  }
  public resetLabelModeAllVrfsAllAfsVrfConnAggr() {
    this._labelModeAllVrfsAllAfsVrfConnAggr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsAllAfsVrfConnAggrInput() {
    return this._labelModeAllVrfsAllAfsVrfConnAggr;
  }

  // label_mode_all_vrfs_bgp_vpnv4_per_ce - computed: false, optional: true, required: false
  private _labelModeAllVrfsBgpVpnv4PerCe?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsBgpVpnv4PerCe() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv4_per_ce');
  }
  public set labelModeAllVrfsBgpVpnv4PerCe(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsBgpVpnv4PerCe = value;
  }
  public resetLabelModeAllVrfsBgpVpnv4PerCe() {
    this._labelModeAllVrfsBgpVpnv4PerCe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsBgpVpnv4PerCeInput() {
    return this._labelModeAllVrfsBgpVpnv4PerCe;
  }

  // label_mode_all_vrfs_bgp_vpnv4_per_prefix - computed: false, optional: true, required: false
  private _labelModeAllVrfsBgpVpnv4PerPrefix?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsBgpVpnv4PerPrefix() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv4_per_prefix');
  }
  public set labelModeAllVrfsBgpVpnv4PerPrefix(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsBgpVpnv4PerPrefix = value;
  }
  public resetLabelModeAllVrfsBgpVpnv4PerPrefix() {
    this._labelModeAllVrfsBgpVpnv4PerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsBgpVpnv4PerPrefixInput() {
    return this._labelModeAllVrfsBgpVpnv4PerPrefix;
  }

  // label_mode_all_vrfs_bgp_vpnv4_per_vrf - computed: false, optional: true, required: false
  private _labelModeAllVrfsBgpVpnv4PerVrf?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsBgpVpnv4PerVrf() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv4_per_vrf');
  }
  public set labelModeAllVrfsBgpVpnv4PerVrf(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsBgpVpnv4PerVrf = value;
  }
  public resetLabelModeAllVrfsBgpVpnv4PerVrf() {
    this._labelModeAllVrfsBgpVpnv4PerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsBgpVpnv4PerVrfInput() {
    return this._labelModeAllVrfsBgpVpnv4PerVrf;
  }

  // label_mode_all_vrfs_bgp_vpnv4_vrf_conn_aggr - computed: false, optional: true, required: false
  private _labelModeAllVrfsBgpVpnv4VrfConnAggr?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsBgpVpnv4VrfConnAggr() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv4_vrf_conn_aggr');
  }
  public set labelModeAllVrfsBgpVpnv4VrfConnAggr(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsBgpVpnv4VrfConnAggr = value;
  }
  public resetLabelModeAllVrfsBgpVpnv4VrfConnAggr() {
    this._labelModeAllVrfsBgpVpnv4VrfConnAggr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsBgpVpnv4VrfConnAggrInput() {
    return this._labelModeAllVrfsBgpVpnv4VrfConnAggr;
  }

  // label_mode_all_vrfs_bgp_vpnv6_per_ce - computed: false, optional: true, required: false
  private _labelModeAllVrfsBgpVpnv6PerCe?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsBgpVpnv6PerCe() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv6_per_ce');
  }
  public set labelModeAllVrfsBgpVpnv6PerCe(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsBgpVpnv6PerCe = value;
  }
  public resetLabelModeAllVrfsBgpVpnv6PerCe() {
    this._labelModeAllVrfsBgpVpnv6PerCe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsBgpVpnv6PerCeInput() {
    return this._labelModeAllVrfsBgpVpnv6PerCe;
  }

  // label_mode_all_vrfs_bgp_vpnv6_per_prefix - computed: false, optional: true, required: false
  private _labelModeAllVrfsBgpVpnv6PerPrefix?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsBgpVpnv6PerPrefix() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv6_per_prefix');
  }
  public set labelModeAllVrfsBgpVpnv6PerPrefix(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsBgpVpnv6PerPrefix = value;
  }
  public resetLabelModeAllVrfsBgpVpnv6PerPrefix() {
    this._labelModeAllVrfsBgpVpnv6PerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsBgpVpnv6PerPrefixInput() {
    return this._labelModeAllVrfsBgpVpnv6PerPrefix;
  }

  // label_mode_all_vrfs_bgp_vpnv6_per_vrf - computed: false, optional: true, required: false
  private _labelModeAllVrfsBgpVpnv6PerVrf?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsBgpVpnv6PerVrf() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv6_per_vrf');
  }
  public set labelModeAllVrfsBgpVpnv6PerVrf(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsBgpVpnv6PerVrf = value;
  }
  public resetLabelModeAllVrfsBgpVpnv6PerVrf() {
    this._labelModeAllVrfsBgpVpnv6PerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsBgpVpnv6PerVrfInput() {
    return this._labelModeAllVrfsBgpVpnv6PerVrf;
  }

  // label_mode_all_vrfs_bgp_vpnv6_vrf_conn_aggr - computed: false, optional: true, required: false
  private _labelModeAllVrfsBgpVpnv6VrfConnAggr?: boolean | cdktf.IResolvable; 
  public get labelModeAllVrfsBgpVpnv6VrfConnAggr() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv6_vrf_conn_aggr');
  }
  public set labelModeAllVrfsBgpVpnv6VrfConnAggr(value: boolean | cdktf.IResolvable) {
    this._labelModeAllVrfsBgpVpnv6VrfConnAggr = value;
  }
  public resetLabelModeAllVrfsBgpVpnv6VrfConnAggr() {
    this._labelModeAllVrfsBgpVpnv6VrfConnAggr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeAllVrfsBgpVpnv6VrfConnAggrInput() {
    return this._labelModeAllVrfsBgpVpnv6VrfConnAggr;
  }

  // label_protocol - computed: false, optional: true, required: false
  private _labelProtocol?: string; 
  public get labelProtocol() {
    return this.getStringAttribute('label_protocol');
  }
  public set labelProtocol(value: string) {
    this._labelProtocol = value;
  }
  public resetLabelProtocol() {
    this._labelProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelProtocolInput() {
    return this._labelProtocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      label_mode_all_vrfs_all_afs_per_ce: cdktf.booleanToTerraform(this._labelModeAllVrfsAllAfsPerCe),
      label_mode_all_vrfs_all_afs_per_prefix: cdktf.booleanToTerraform(this._labelModeAllVrfsAllAfsPerPrefix),
      label_mode_all_vrfs_all_afs_per_vrf: cdktf.booleanToTerraform(this._labelModeAllVrfsAllAfsPerVrf),
      label_mode_all_vrfs_all_afs_vrf_conn_aggr: cdktf.booleanToTerraform(this._labelModeAllVrfsAllAfsVrfConnAggr),
      label_mode_all_vrfs_bgp_vpnv4_per_ce: cdktf.booleanToTerraform(this._labelModeAllVrfsBgpVpnv4PerCe),
      label_mode_all_vrfs_bgp_vpnv4_per_prefix: cdktf.booleanToTerraform(this._labelModeAllVrfsBgpVpnv4PerPrefix),
      label_mode_all_vrfs_bgp_vpnv4_per_vrf: cdktf.booleanToTerraform(this._labelModeAllVrfsBgpVpnv4PerVrf),
      label_mode_all_vrfs_bgp_vpnv4_vrf_conn_aggr: cdktf.booleanToTerraform(this._labelModeAllVrfsBgpVpnv4VrfConnAggr),
      label_mode_all_vrfs_bgp_vpnv6_per_ce: cdktf.booleanToTerraform(this._labelModeAllVrfsBgpVpnv6PerCe),
      label_mode_all_vrfs_bgp_vpnv6_per_prefix: cdktf.booleanToTerraform(this._labelModeAllVrfsBgpVpnv6PerPrefix),
      label_mode_all_vrfs_bgp_vpnv6_per_vrf: cdktf.booleanToTerraform(this._labelModeAllVrfsBgpVpnv6PerVrf),
      label_mode_all_vrfs_bgp_vpnv6_vrf_conn_aggr: cdktf.booleanToTerraform(this._labelModeAllVrfsBgpVpnv6VrfConnAggr),
      label_protocol: cdktf.stringToTerraform(this._labelProtocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      label_mode_all_vrfs_all_afs_per_ce: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsAllAfsPerCe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_all_afs_per_prefix: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsAllAfsPerPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_all_afs_per_vrf: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsAllAfsPerVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_all_afs_vrf_conn_aggr: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsAllAfsVrfConnAggr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_bgp_vpnv4_per_ce: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsBgpVpnv4PerCe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_bgp_vpnv4_per_prefix: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsBgpVpnv4PerPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_bgp_vpnv4_per_vrf: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsBgpVpnv4PerVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_bgp_vpnv4_vrf_conn_aggr: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsBgpVpnv4VrfConnAggr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_bgp_vpnv6_per_ce: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsBgpVpnv6PerCe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_bgp_vpnv6_per_prefix: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsBgpVpnv6PerPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_bgp_vpnv6_per_vrf: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsBgpVpnv6PerVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_all_vrfs_bgp_vpnv6_vrf_conn_aggr: {
        value: cdktf.booleanToHclTerraform(this._labelModeAllVrfsBgpVpnv6VrfConnAggr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_protocol: {
        value: cdktf.stringToHclTerraform(this._labelProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
