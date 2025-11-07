// https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Customer Gateway ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#cgw_id AwsVpn#cgw_id}
  */
  readonly cgwId: string;
  /**
  * Segment/VRF ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#cnps AwsVpn#cnps}
  */
  readonly cnps: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#id AwsVpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * tf_id of the CloudEOS Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#router_id AwsVpn#router_id}
  */
  readonly routerId: string;
  /**
  * Transit Gateway ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tgw_id AwsVpn#tgw_id}
  */
  readonly tgwId?: string;
  /**
  * Public IP address of the AWS VPN Connection endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel1_aws_endpoint_ip AwsVpn#tunnel1_aws_endpoint_ip}
  */
  readonly tunnel1AwsEndpointIp: string;
  /**
  * Tunnel IP address of the AWS VPN Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel1_aws_overlay_ip AwsVpn#tunnel1_aws_overlay_ip}
  */
  readonly tunnel1AwsOverlayIp: string;
  /**
  * BGP ASN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel1_bgp_asn AwsVpn#tunnel1_bgp_asn}
  */
  readonly tunnel1BgpAsn: string;
  /**
  * Hold timer value for BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel1_bgp_holdtime AwsVpn#tunnel1_bgp_holdtime}
  */
  readonly tunnel1BgpHoldtime: string;
  /**
  * Ipsec Preshared key for Tunnel1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel1_preshared_key AwsVpn#tunnel1_preshared_key}
  */
  readonly tunnel1PresharedKey: string;
  /**
  * Tunnel Interface overlay IP address for the router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel1_router_overlay_ip AwsVpn#tunnel1_router_overlay_ip}
  */
  readonly tunnel1RouterOverlayIp: string;
  /**
  * Public IP address of the AWS VPN Connection endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel2_aws_endpoint_ip AwsVpn#tunnel2_aws_endpoint_ip}
  */
  readonly tunnel2AwsEndpointIp: string;
  /**
  * Tunnel IP address of the AWS VPN Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel2_aws_overlay_ip AwsVpn#tunnel2_aws_overlay_ip}
  */
  readonly tunnel2AwsOverlayIp: string;
  /**
  * BGP ASN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel2_bgp_asn AwsVpn#tunnel2_bgp_asn}
  */
  readonly tunnel2BgpAsn: string;
  /**
  * Hold timer value for BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel2_bgp_holdtime AwsVpn#tunnel2_bgp_holdtime}
  */
  readonly tunnel2BgpHoldtime: string;
  /**
  * Pre shared key for Tunnel1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel2_preshared_key AwsVpn#tunnel2_preshared_key}
  */
  readonly tunnel2PresharedKey: string;
  /**
  * Tunnel interface IP address for the router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#tunnel2_router_overlay_ip AwsVpn#tunnel2_router_overlay_ip}
  */
  readonly tunnel2RouterOverlayIp: string;
  /**
  * VPC ID for the Router given in "router_id"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#vpc_id AwsVpn#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Vpn connection ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#vpn_connection_id AwsVpn#vpn_connection_id}
  */
  readonly vpnConnectionId: string;
  /**
  * VPN Gateway ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#vpn_gateway_id AwsVpn#vpn_gateway_id}
  */
  readonly vpnGatewayId?: string;
  /**
  * TGW Attachment ID for the VPN connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#vpn_tgw_attachment_id AwsVpn#vpn_tgw_attachment_id}
  */
  readonly vpnTgwAttachmentId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn cloudeos_aws_vpn}
*/
export class AwsVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudeos_aws_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsVpn to import
  * @param importFromId The id of the existing AwsVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudeos_aws_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/aws_vpn cloudeos_aws_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsVpnConfig
  */
  public constructor(scope: Construct, id: string, config: AwsVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudeos_aws_vpn',
      terraformGeneratorMetadata: {
        providerName: 'cloudeos',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cgwId = config.cgwId;
    this._cnps = config.cnps;
    this._id = config.id;
    this._routerId = config.routerId;
    this._tgwId = config.tgwId;
    this._tunnel1AwsEndpointIp = config.tunnel1AwsEndpointIp;
    this._tunnel1AwsOverlayIp = config.tunnel1AwsOverlayIp;
    this._tunnel1BgpAsn = config.tunnel1BgpAsn;
    this._tunnel1BgpHoldtime = config.tunnel1BgpHoldtime;
    this._tunnel1PresharedKey = config.tunnel1PresharedKey;
    this._tunnel1RouterOverlayIp = config.tunnel1RouterOverlayIp;
    this._tunnel2AwsEndpointIp = config.tunnel2AwsEndpointIp;
    this._tunnel2AwsOverlayIp = config.tunnel2AwsOverlayIp;
    this._tunnel2BgpAsn = config.tunnel2BgpAsn;
    this._tunnel2BgpHoldtime = config.tunnel2BgpHoldtime;
    this._tunnel2PresharedKey = config.tunnel2PresharedKey;
    this._tunnel2RouterOverlayIp = config.tunnel2RouterOverlayIp;
    this._vpcId = config.vpcId;
    this._vpnConnectionId = config.vpnConnectionId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._vpnTgwAttachmentId = config.vpnTgwAttachmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cgw_id - computed: false, optional: false, required: true
  private _cgwId?: string; 
  public get cgwId() {
    return this.getStringAttribute('cgw_id');
  }
  public set cgwId(value: string) {
    this._cgwId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cgwIdInput() {
    return this._cgwId;
  }

  // cnps - computed: false, optional: false, required: true
  private _cnps?: string; 
  public get cnps() {
    return this.getStringAttribute('cnps');
  }
  public set cnps(value: string) {
    this._cnps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnpsInput() {
    return this._cnps;
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

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // tf_id - computed: true, optional: false, required: false
  public get tfId() {
    return this.getStringAttribute('tf_id');
  }

  // tgw_id - computed: false, optional: true, required: false
  private _tgwId?: string; 
  public get tgwId() {
    return this.getStringAttribute('tgw_id');
  }
  public set tgwId(value: string) {
    this._tgwId = value;
  }
  public resetTgwId() {
    this._tgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwIdInput() {
    return this._tgwId;
  }

  // tunnel1_aws_endpoint_ip - computed: false, optional: false, required: true
  private _tunnel1AwsEndpointIp?: string; 
  public get tunnel1AwsEndpointIp() {
    return this.getStringAttribute('tunnel1_aws_endpoint_ip');
  }
  public set tunnel1AwsEndpointIp(value: string) {
    this._tunnel1AwsEndpointIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1AwsEndpointIpInput() {
    return this._tunnel1AwsEndpointIp;
  }

  // tunnel1_aws_overlay_ip - computed: false, optional: false, required: true
  private _tunnel1AwsOverlayIp?: string; 
  public get tunnel1AwsOverlayIp() {
    return this.getStringAttribute('tunnel1_aws_overlay_ip');
  }
  public set tunnel1AwsOverlayIp(value: string) {
    this._tunnel1AwsOverlayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1AwsOverlayIpInput() {
    return this._tunnel1AwsOverlayIp;
  }

  // tunnel1_bgp_asn - computed: false, optional: false, required: true
  private _tunnel1BgpAsn?: string; 
  public get tunnel1BgpAsn() {
    return this.getStringAttribute('tunnel1_bgp_asn');
  }
  public set tunnel1BgpAsn(value: string) {
    this._tunnel1BgpAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1BgpAsnInput() {
    return this._tunnel1BgpAsn;
  }

  // tunnel1_bgp_holdtime - computed: false, optional: false, required: true
  private _tunnel1BgpHoldtime?: string; 
  public get tunnel1BgpHoldtime() {
    return this.getStringAttribute('tunnel1_bgp_holdtime');
  }
  public set tunnel1BgpHoldtime(value: string) {
    this._tunnel1BgpHoldtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1BgpHoldtimeInput() {
    return this._tunnel1BgpHoldtime;
  }

  // tunnel1_preshared_key - computed: false, optional: false, required: true
  private _tunnel1PresharedKey?: string; 
  public get tunnel1PresharedKey() {
    return this.getStringAttribute('tunnel1_preshared_key');
  }
  public set tunnel1PresharedKey(value: string) {
    this._tunnel1PresharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1PresharedKeyInput() {
    return this._tunnel1PresharedKey;
  }

  // tunnel1_router_overlay_ip - computed: false, optional: false, required: true
  private _tunnel1RouterOverlayIp?: string; 
  public get tunnel1RouterOverlayIp() {
    return this.getStringAttribute('tunnel1_router_overlay_ip');
  }
  public set tunnel1RouterOverlayIp(value: string) {
    this._tunnel1RouterOverlayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1RouterOverlayIpInput() {
    return this._tunnel1RouterOverlayIp;
  }

  // tunnel2_aws_endpoint_ip - computed: false, optional: false, required: true
  private _tunnel2AwsEndpointIp?: string; 
  public get tunnel2AwsEndpointIp() {
    return this.getStringAttribute('tunnel2_aws_endpoint_ip');
  }
  public set tunnel2AwsEndpointIp(value: string) {
    this._tunnel2AwsEndpointIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2AwsEndpointIpInput() {
    return this._tunnel2AwsEndpointIp;
  }

  // tunnel2_aws_overlay_ip - computed: false, optional: false, required: true
  private _tunnel2AwsOverlayIp?: string; 
  public get tunnel2AwsOverlayIp() {
    return this.getStringAttribute('tunnel2_aws_overlay_ip');
  }
  public set tunnel2AwsOverlayIp(value: string) {
    this._tunnel2AwsOverlayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2AwsOverlayIpInput() {
    return this._tunnel2AwsOverlayIp;
  }

  // tunnel2_bgp_asn - computed: false, optional: false, required: true
  private _tunnel2BgpAsn?: string; 
  public get tunnel2BgpAsn() {
    return this.getStringAttribute('tunnel2_bgp_asn');
  }
  public set tunnel2BgpAsn(value: string) {
    this._tunnel2BgpAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2BgpAsnInput() {
    return this._tunnel2BgpAsn;
  }

  // tunnel2_bgp_holdtime - computed: false, optional: false, required: true
  private _tunnel2BgpHoldtime?: string; 
  public get tunnel2BgpHoldtime() {
    return this.getStringAttribute('tunnel2_bgp_holdtime');
  }
  public set tunnel2BgpHoldtime(value: string) {
    this._tunnel2BgpHoldtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2BgpHoldtimeInput() {
    return this._tunnel2BgpHoldtime;
  }

  // tunnel2_preshared_key - computed: false, optional: false, required: true
  private _tunnel2PresharedKey?: string; 
  public get tunnel2PresharedKey() {
    return this.getStringAttribute('tunnel2_preshared_key');
  }
  public set tunnel2PresharedKey(value: string) {
    this._tunnel2PresharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2PresharedKeyInput() {
    return this._tunnel2PresharedKey;
  }

  // tunnel2_router_overlay_ip - computed: false, optional: false, required: true
  private _tunnel2RouterOverlayIp?: string; 
  public get tunnel2RouterOverlayIp() {
    return this.getStringAttribute('tunnel2_router_overlay_ip');
  }
  public set tunnel2RouterOverlayIp(value: string) {
    this._tunnel2RouterOverlayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2RouterOverlayIpInput() {
    return this._tunnel2RouterOverlayIp;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpn_connection_id - computed: false, optional: false, required: true
  private _vpnConnectionId?: string; 
  public get vpnConnectionId() {
    return this.getStringAttribute('vpn_connection_id');
  }
  public set vpnConnectionId(value: string) {
    this._vpnConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionIdInput() {
    return this._vpnConnectionId;
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  public resetVpnGatewayId() {
    this._vpnGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // vpn_tgw_attachment_id - computed: false, optional: true, required: false
  private _vpnTgwAttachmentId?: string; 
  public get vpnTgwAttachmentId() {
    return this.getStringAttribute('vpn_tgw_attachment_id');
  }
  public set vpnTgwAttachmentId(value: string) {
    this._vpnTgwAttachmentId = value;
  }
  public resetVpnTgwAttachmentId() {
    this._vpnTgwAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTgwAttachmentIdInput() {
    return this._vpnTgwAttachmentId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cgw_id: cdktf.stringToTerraform(this._cgwId),
      cnps: cdktf.stringToTerraform(this._cnps),
      id: cdktf.stringToTerraform(this._id),
      router_id: cdktf.stringToTerraform(this._routerId),
      tgw_id: cdktf.stringToTerraform(this._tgwId),
      tunnel1_aws_endpoint_ip: cdktf.stringToTerraform(this._tunnel1AwsEndpointIp),
      tunnel1_aws_overlay_ip: cdktf.stringToTerraform(this._tunnel1AwsOverlayIp),
      tunnel1_bgp_asn: cdktf.stringToTerraform(this._tunnel1BgpAsn),
      tunnel1_bgp_holdtime: cdktf.stringToTerraform(this._tunnel1BgpHoldtime),
      tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
      tunnel1_router_overlay_ip: cdktf.stringToTerraform(this._tunnel1RouterOverlayIp),
      tunnel2_aws_endpoint_ip: cdktf.stringToTerraform(this._tunnel2AwsEndpointIp),
      tunnel2_aws_overlay_ip: cdktf.stringToTerraform(this._tunnel2AwsOverlayIp),
      tunnel2_bgp_asn: cdktf.stringToTerraform(this._tunnel2BgpAsn),
      tunnel2_bgp_holdtime: cdktf.stringToTerraform(this._tunnel2BgpHoldtime),
      tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
      tunnel2_router_overlay_ip: cdktf.stringToTerraform(this._tunnel2RouterOverlayIp),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpn_connection_id: cdktf.stringToTerraform(this._vpnConnectionId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      vpn_tgw_attachment_id: cdktf.stringToTerraform(this._vpnTgwAttachmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cgw_id: {
        value: cdktf.stringToHclTerraform(this._cgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cnps: {
        value: cdktf.stringToHclTerraform(this._cnps),
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
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_id: {
        value: cdktf.stringToHclTerraform(this._tgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_aws_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._tunnel1AwsEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_aws_overlay_ip: {
        value: cdktf.stringToHclTerraform(this._tunnel1AwsOverlayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_bgp_asn: {
        value: cdktf.stringToHclTerraform(this._tunnel1BgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_bgp_holdtime: {
        value: cdktf.stringToHclTerraform(this._tunnel1BgpHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_preshared_key: {
        value: cdktf.stringToHclTerraform(this._tunnel1PresharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_router_overlay_ip: {
        value: cdktf.stringToHclTerraform(this._tunnel1RouterOverlayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_aws_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._tunnel2AwsEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_aws_overlay_ip: {
        value: cdktf.stringToHclTerraform(this._tunnel2AwsOverlayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_bgp_asn: {
        value: cdktf.stringToHclTerraform(this._tunnel2BgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_bgp_holdtime: {
        value: cdktf.stringToHclTerraform(this._tunnel2BgpHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_preshared_key: {
        value: cdktf.stringToHclTerraform(this._tunnel2PresharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_router_overlay_ip: {
        value: cdktf.stringToHclTerraform(this._tunnel2RouterOverlayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_connection_id: {
        value: cdktf.stringToHclTerraform(this._vpnConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_id: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_tgw_attachment_id: {
        value: cdktf.stringToHclTerraform(this._vpnTgwAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
