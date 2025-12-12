// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterMulticastDomainMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member#connect_attachment_id CenTransitRouterMulticastDomainMember#connect_attachment_id}
  */
  readonly connectAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member#connect_peer_id CenTransitRouterMulticastDomainMember#connect_peer_id}
  */
  readonly connectPeerId?: string;
  /**
  * Multicast IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member#group_ip_address CenTransitRouterMulticastDomainMember#group_ip_address}
  */
  readonly groupIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member#id CenTransitRouterMulticastDomainMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member#network_interface_id CenTransitRouterMulticastDomainMember#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member#resource_type CenTransitRouterMulticastDomainMember#resource_type}
  */
  readonly resourceType: string;
  /**
  * Forwarding router multicast domain ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member#transit_router_multicast_domain_id CenTransitRouterMulticastDomainMember#transit_router_multicast_domain_id}
  */
  readonly transitRouterMulticastDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member#vswitch_id CenTransitRouterMulticastDomainMember#vswitch_id}
  */
  readonly vswitchId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member alibabacloudstack_cen_transit_router_multicast_domain_member}
*/
export class CenTransitRouterMulticastDomainMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cen_transit_router_multicast_domain_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterMulticastDomainMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterMulticastDomainMember to import
  * @param importFromId The id of the existing CenTransitRouterMulticastDomainMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterMulticastDomainMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cen_transit_router_multicast_domain_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/cen_transit_router_multicast_domain_member alibabacloudstack_cen_transit_router_multicast_domain_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterMulticastDomainMemberConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterMulticastDomainMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cen_transit_router_multicast_domain_member',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectAttachmentId = config.connectAttachmentId;
    this._connectPeerId = config.connectPeerId;
    this._groupIpAddress = config.groupIpAddress;
    this._id = config.id;
    this._networkInterfaceId = config.networkInterfaceId;
    this._resourceType = config.resourceType;
    this._transitRouterMulticastDomainId = config.transitRouterMulticastDomainId;
    this._vswitchId = config.vswitchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_attachment_id - computed: true, optional: true, required: false
  private _connectAttachmentId?: string; 
  public get connectAttachmentId() {
    return this.getStringAttribute('connect_attachment_id');
  }
  public set connectAttachmentId(value: string) {
    this._connectAttachmentId = value;
  }
  public resetConnectAttachmentId() {
    this._connectAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectAttachmentIdInput() {
    return this._connectAttachmentId;
  }

  // connect_peer_id - computed: false, optional: true, required: false
  private _connectPeerId?: string; 
  public get connectPeerId() {
    return this.getStringAttribute('connect_peer_id');
  }
  public set connectPeerId(value: string) {
    this._connectPeerId = value;
  }
  public resetConnectPeerId() {
    this._connectPeerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectPeerIdInput() {
    return this._connectPeerId;
  }

  // group_ip_address - computed: false, optional: false, required: true
  private _groupIpAddress?: string; 
  public get groupIpAddress() {
    return this.getStringAttribute('group_ip_address');
  }
  public set groupIpAddress(value: string) {
    this._groupIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIpAddressInput() {
    return this._groupIpAddress;
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

  // network_interface_id - computed: false, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_multicast_domain_id - computed: false, optional: false, required: true
  private _transitRouterMulticastDomainId?: string; 
  public get transitRouterMulticastDomainId() {
    return this.getStringAttribute('transit_router_multicast_domain_id');
  }
  public set transitRouterMulticastDomainId(value: string) {
    this._transitRouterMulticastDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterMulticastDomainIdInput() {
    return this._transitRouterMulticastDomainId;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect_attachment_id: cdktf.stringToTerraform(this._connectAttachmentId),
      connect_peer_id: cdktf.stringToTerraform(this._connectPeerId),
      group_ip_address: cdktf.stringToTerraform(this._groupIpAddress),
      id: cdktf.stringToTerraform(this._id),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      transit_router_multicast_domain_id: cdktf.stringToTerraform(this._transitRouterMulticastDomainId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_attachment_id: {
        value: cdktf.stringToHclTerraform(this._connectAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_peer_id: {
        value: cdktf.stringToHclTerraform(this._connectPeerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_ip_address: {
        value: cdktf.stringToHclTerraform(this._groupIpAddress),
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
      network_interface_id: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_multicast_domain_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterMulticastDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
