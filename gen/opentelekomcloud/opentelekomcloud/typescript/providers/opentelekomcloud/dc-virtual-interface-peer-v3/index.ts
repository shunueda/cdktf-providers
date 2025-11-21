// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcVirtualInterfacePeerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#address_family DcVirtualInterfacePeerV3#address_family}
  */
  readonly addressFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#bgp_asn DcVirtualInterfacePeerV3#bgp_asn}
  */
  readonly bgpAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#bgp_md5 DcVirtualInterfacePeerV3#bgp_md5}
  */
  readonly bgpMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#description DcVirtualInterfacePeerV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#id DcVirtualInterfacePeerV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#local_gateway_ip DcVirtualInterfacePeerV3#local_gateway_ip}
  */
  readonly localGatewayIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#name DcVirtualInterfacePeerV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#remote_ep_group DcVirtualInterfacePeerV3#remote_ep_group}
  */
  readonly remoteEpGroup: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#remote_gateway_ip DcVirtualInterfacePeerV3#remote_gateway_ip}
  */
  readonly remoteGatewayIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#route_mode DcVirtualInterfacePeerV3#route_mode}
  */
  readonly routeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#vif_id DcVirtualInterfacePeerV3#vif_id}
  */
  readonly vifId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3 opentelekomcloud_dc_virtual_interface_peer_v3}
*/
export class DcVirtualInterfacePeerV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dc_virtual_interface_peer_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcVirtualInterfacePeerV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcVirtualInterfacePeerV3 to import
  * @param importFromId The id of the existing DcVirtualInterfacePeerV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcVirtualInterfacePeerV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_dc_virtual_interface_peer_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3 opentelekomcloud_dc_virtual_interface_peer_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcVirtualInterfacePeerV3Config
  */
  public constructor(scope: Construct, id: string, config: DcVirtualInterfacePeerV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dc_virtual_interface_peer_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
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
    this._bgpAsn = config.bgpAsn;
    this._bgpMd5 = config.bgpMd5;
    this._description = config.description;
    this._id = config.id;
    this._localGatewayIp = config.localGatewayIp;
    this._name = config.name;
    this._remoteEpGroup = config.remoteEpGroup;
    this._remoteGatewayIp = config.remoteGatewayIp;
    this._routeMode = config.routeMode;
    this._vifId = config.vifId;
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

  // bgp_asn - computed: false, optional: true, required: false
  private _bgpAsn?: number; 
  public get bgpAsn() {
    return this.getNumberAttribute('bgp_asn');
  }
  public set bgpAsn(value: number) {
    this._bgpAsn = value;
  }
  public resetBgpAsn() {
    this._bgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnInput() {
    return this._bgpAsn;
  }

  // bgp_md5 - computed: false, optional: true, required: false
  private _bgpMd5?: string; 
  public get bgpMd5() {
    return this.getStringAttribute('bgp_md5');
  }
  public set bgpMd5(value: string) {
    this._bgpMd5 = value;
  }
  public resetBgpMd5() {
    this._bgpMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpMd5Input() {
    return this._bgpMd5;
  }

  // bgp_route_limit - computed: true, optional: false, required: false
  public get bgpRouteLimit() {
    return this.getNumberAttribute('bgp_route_limit');
  }

  // bgp_status - computed: true, optional: false, required: false
  public get bgpStatus() {
    return this.getStringAttribute('bgp_status');
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

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // enable_bfd - computed: true, optional: false, required: false
  public get enableBfd() {
    return this.getBooleanAttribute('enable_bfd');
  }

  // enable_nqa - computed: true, optional: false, required: false
  public get enableNqa() {
    return this.getBooleanAttribute('enable_nqa');
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

  // local_gateway_ip - computed: false, optional: false, required: true
  private _localGatewayIp?: string; 
  public get localGatewayIp() {
    return this.getStringAttribute('local_gateway_ip');
  }
  public set localGatewayIp(value: string) {
    this._localGatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayIpInput() {
    return this._localGatewayIp;
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // receive_route_num - computed: true, optional: false, required: false
  public get receiveRouteNum() {
    return this.getNumberAttribute('receive_route_num');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // remote_ep_group - computed: false, optional: false, required: true
  private _remoteEpGroup?: string[]; 
  public get remoteEpGroup() {
    return this.getListAttribute('remote_ep_group');
  }
  public set remoteEpGroup(value: string[]) {
    this._remoteEpGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteEpGroupInput() {
    return this._remoteEpGroup;
  }

  // remote_gateway_ip - computed: false, optional: false, required: true
  private _remoteGatewayIp?: string; 
  public get remoteGatewayIp() {
    return this.getStringAttribute('remote_gateway_ip');
  }
  public set remoteGatewayIp(value: string) {
    this._remoteGatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayIpInput() {
    return this._remoteGatewayIp;
  }

  // route_mode - computed: false, optional: true, required: false
  private _routeMode?: string; 
  public get routeMode() {
    return this.getStringAttribute('route_mode');
  }
  public set routeMode(value: string) {
    this._routeMode = value;
  }
  public resetRouteMode() {
    this._routeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeModeInput() {
    return this._routeMode;
  }

  // service_ep_group - computed: true, optional: false, required: false
  public get serviceEpGroup() {
    return this.getListAttribute('service_ep_group');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vif_id - computed: false, optional: false, required: true
  private _vifId?: string; 
  public get vifId() {
    return this.getStringAttribute('vif_id');
  }
  public set vifId(value: string) {
    this._vifId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vifIdInput() {
    return this._vifId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
      bgp_md5: cdktf.stringToTerraform(this._bgpMd5),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      local_gateway_ip: cdktf.stringToTerraform(this._localGatewayIp),
      name: cdktf.stringToTerraform(this._name),
      remote_ep_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteEpGroup),
      remote_gateway_ip: cdktf.stringToTerraform(this._remoteGatewayIp),
      route_mode: cdktf.stringToTerraform(this._routeMode),
      vif_id: cdktf.stringToTerraform(this._vifId),
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
      bgp_asn: {
        value: cdktf.numberToHclTerraform(this._bgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_md5: {
        value: cdktf.stringToHclTerraform(this._bgpMd5),
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
      local_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._localGatewayIp),
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
      remote_ep_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteEpGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._remoteGatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_mode: {
        value: cdktf.stringToHclTerraform(this._routeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vif_id: {
        value: cdktf.stringToHclTerraform(this._vifId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
