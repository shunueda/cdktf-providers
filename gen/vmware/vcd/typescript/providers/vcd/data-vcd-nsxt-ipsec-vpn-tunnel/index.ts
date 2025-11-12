// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_ipsec_vpn_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtIpsecVpnTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge gateway name in which IP Sec VPN configuration is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_ipsec_vpn_tunnel#edge_gateway_id DataVcdNsxtIpsecVpnTunnel#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_ipsec_vpn_tunnel#id DataVcdNsxtIpsecVpnTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of IP Sec VPN configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_ipsec_vpn_tunnel#name DataVcdNsxtIpsecVpnTunnel#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_ipsec_vpn_tunnel#org DataVcdNsxtIpsecVpnTunnel#org}
  */
  readonly org?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_ipsec_vpn_tunnel#vdc DataVcdNsxtIpsecVpnTunnel#vdc}
  */
  readonly vdc?: string;
}
export interface DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomization {
}

export function dataVcdNsxtIpsecVpnTunnelSecurityProfileCustomizationToTerraform(struct?: DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtIpsecVpnTunnelSecurityProfileCustomizationToHclTerraform(struct?: DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dpd_probe_internal - computed: true, optional: false, required: false
  public get dpdProbeInternal() {
    return this.getNumberAttribute('dpd_probe_internal');
  }

  // ike_dh_groups - computed: true, optional: false, required: false
  public get ikeDhGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('ike_dh_groups'));
  }

  // ike_digest_algorithms - computed: true, optional: false, required: false
  public get ikeDigestAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('ike_digest_algorithms'));
  }

  // ike_encryption_algorithms - computed: true, optional: false, required: false
  public get ikeEncryptionAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('ike_encryption_algorithms'));
  }

  // ike_sa_lifetime - computed: true, optional: false, required: false
  public get ikeSaLifetime() {
    return this.getNumberAttribute('ike_sa_lifetime');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }

  // tunnel_df_policy - computed: true, optional: false, required: false
  public get tunnelDfPolicy() {
    return this.getStringAttribute('tunnel_df_policy');
  }

  // tunnel_dh_groups - computed: true, optional: false, required: false
  public get tunnelDhGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_dh_groups'));
  }

  // tunnel_digest_algorithms - computed: true, optional: false, required: false
  public get tunnelDigestAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_digest_algorithms'));
  }

  // tunnel_encryption_algorithms - computed: true, optional: false, required: false
  public get tunnelEncryptionAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_encryption_algorithms'));
  }

  // tunnel_pfs_enabled - computed: true, optional: false, required: false
  public get tunnelPfsEnabled() {
    return this.getBooleanAttribute('tunnel_pfs_enabled');
  }

  // tunnel_sa_lifetime - computed: true, optional: false, required: false
  public get tunnelSaLifetime() {
    return this.getNumberAttribute('tunnel_sa_lifetime');
  }
}

export class DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomizationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomizationOutputReference {
    return new DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_ipsec_vpn_tunnel vcd_nsxt_ipsec_vpn_tunnel}
*/
export class DataVcdNsxtIpsecVpnTunnel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_ipsec_vpn_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtIpsecVpnTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtIpsecVpnTunnel to import
  * @param importFromId The id of the existing DataVcdNsxtIpsecVpnTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_ipsec_vpn_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtIpsecVpnTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_ipsec_vpn_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_ipsec_vpn_tunnel vcd_nsxt_ipsec_vpn_tunnel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtIpsecVpnTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtIpsecVpnTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_ipsec_vpn_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGatewayId = config.edgeGatewayId;
    this._id = config.id;
    this._name = config.name;
    this._org = config.org;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_mode - computed: true, optional: false, required: false
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }

  // ca_certificate_id - computed: true, optional: false, required: false
  public get caCertificateId() {
    return this.getStringAttribute('ca_certificate_id');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // ike_fail_reason - computed: true, optional: false, required: false
  public get ikeFailReason() {
    return this.getStringAttribute('ike_fail_reason');
  }

  // ike_service_status - computed: true, optional: false, required: false
  public get ikeServiceStatus() {
    return this.getStringAttribute('ike_service_status');
  }

  // local_ip_address - computed: true, optional: false, required: false
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }

  // local_networks - computed: true, optional: false, required: false
  public get localNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('local_networks'));
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.getBooleanAttribute('logging');
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // pre_shared_key - computed: true, optional: false, required: false
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // remote_ip_address - computed: true, optional: false, required: false
  public get remoteIpAddress() {
    return this.getStringAttribute('remote_ip_address');
  }

  // remote_networks - computed: true, optional: false, required: false
  public get remoteNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_networks'));
  }

  // security_profile - computed: true, optional: false, required: false
  public get securityProfile() {
    return this.getStringAttribute('security_profile');
  }

  // security_profile_customization - computed: true, optional: false, required: false
  private _securityProfileCustomization = new DataVcdNsxtIpsecVpnTunnelSecurityProfileCustomizationList(this, "security_profile_customization", false);
  public get securityProfileCustomization() {
    return this._securityProfileCustomization;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
