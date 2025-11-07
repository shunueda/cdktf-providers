// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressconnectVbrPconnAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#enable_ipv6 ExpressconnectVbrPconnAssociation#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#id ExpressconnectVbrPconnAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#local_gateway_ip ExpressconnectVbrPconnAssociation#local_gateway_ip}
  */
  readonly localGatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#local_ipv6_gateway_ip ExpressconnectVbrPconnAssociation#local_ipv6_gateway_ip}
  */
  readonly localIpv6GatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#peer_gateway_ip ExpressconnectVbrPconnAssociation#peer_gateway_ip}
  */
  readonly peerGatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#peer_ipv6_gateway_ip ExpressconnectVbrPconnAssociation#peer_ipv6_gateway_ip}
  */
  readonly peerIpv6GatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#peering_ipv6_subnet_mask ExpressconnectVbrPconnAssociation#peering_ipv6_subnet_mask}
  */
  readonly peeringIpv6SubnetMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#peering_subnet_mask ExpressconnectVbrPconnAssociation#peering_subnet_mask}
  */
  readonly peeringSubnetMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#physical_connection_id ExpressconnectVbrPconnAssociation#physical_connection_id}
  */
  readonly physicalConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#vbr_id ExpressconnectVbrPconnAssociation#vbr_id}
  */
  readonly vbrId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#vlan_id ExpressconnectVbrPconnAssociation#vlan_id}
  */
  readonly vlanId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association alibabacloudstack_expressconnect_vbr_pconn_association}
*/
export class ExpressconnectVbrPconnAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_expressconnect_vbr_pconn_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressconnectVbrPconnAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressconnectVbrPconnAssociation to import
  * @param importFromId The id of the existing ExpressconnectVbrPconnAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressconnectVbrPconnAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_expressconnect_vbr_pconn_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/expressconnect_vbr_pconn_association alibabacloudstack_expressconnect_vbr_pconn_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressconnectVbrPconnAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressconnectVbrPconnAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_expressconnect_vbr_pconn_association',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableIpv6 = config.enableIpv6;
    this._id = config.id;
    this._localGatewayIp = config.localGatewayIp;
    this._localIpv6GatewayIp = config.localIpv6GatewayIp;
    this._peerGatewayIp = config.peerGatewayIp;
    this._peerIpv6GatewayIp = config.peerIpv6GatewayIp;
    this._peeringIpv6SubnetMask = config.peeringIpv6SubnetMask;
    this._peeringSubnetMask = config.peeringSubnetMask;
    this._physicalConnectionId = config.physicalConnectionId;
    this._vbrId = config.vbrId;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // circuit_code - computed: true, optional: false, required: false
  public get circuitCode() {
    return this.getStringAttribute('circuit_code');
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
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

  // local_gateway_ip - computed: false, optional: true, required: false
  private _localGatewayIp?: string; 
  public get localGatewayIp() {
    return this.getStringAttribute('local_gateway_ip');
  }
  public set localGatewayIp(value: string) {
    this._localGatewayIp = value;
  }
  public resetLocalGatewayIp() {
    this._localGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayIpInput() {
    return this._localGatewayIp;
  }

  // local_ipv6_gateway_ip - computed: false, optional: true, required: false
  private _localIpv6GatewayIp?: string; 
  public get localIpv6GatewayIp() {
    return this.getStringAttribute('local_ipv6_gateway_ip');
  }
  public set localIpv6GatewayIp(value: string) {
    this._localIpv6GatewayIp = value;
  }
  public resetLocalIpv6GatewayIp() {
    this._localIpv6GatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv6GatewayIpInput() {
    return this._localIpv6GatewayIp;
  }

  // peer_gateway_ip - computed: false, optional: true, required: false
  private _peerGatewayIp?: string; 
  public get peerGatewayIp() {
    return this.getStringAttribute('peer_gateway_ip');
  }
  public set peerGatewayIp(value: string) {
    this._peerGatewayIp = value;
  }
  public resetPeerGatewayIp() {
    this._peerGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGatewayIpInput() {
    return this._peerGatewayIp;
  }

  // peer_ipv6_gateway_ip - computed: false, optional: true, required: false
  private _peerIpv6GatewayIp?: string; 
  public get peerIpv6GatewayIp() {
    return this.getStringAttribute('peer_ipv6_gateway_ip');
  }
  public set peerIpv6GatewayIp(value: string) {
    this._peerIpv6GatewayIp = value;
  }
  public resetPeerIpv6GatewayIp() {
    this._peerIpv6GatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpv6GatewayIpInput() {
    return this._peerIpv6GatewayIp;
  }

  // peering_ipv6_subnet_mask - computed: false, optional: true, required: false
  private _peeringIpv6SubnetMask?: string; 
  public get peeringIpv6SubnetMask() {
    return this.getStringAttribute('peering_ipv6_subnet_mask');
  }
  public set peeringIpv6SubnetMask(value: string) {
    this._peeringIpv6SubnetMask = value;
  }
  public resetPeeringIpv6SubnetMask() {
    this._peeringIpv6SubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringIpv6SubnetMaskInput() {
    return this._peeringIpv6SubnetMask;
  }

  // peering_subnet_mask - computed: false, optional: true, required: false
  private _peeringSubnetMask?: string; 
  public get peeringSubnetMask() {
    return this.getStringAttribute('peering_subnet_mask');
  }
  public set peeringSubnetMask(value: string) {
    this._peeringSubnetMask = value;
  }
  public resetPeeringSubnetMask() {
    this._peeringSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringSubnetMaskInput() {
    return this._peeringSubnetMask;
  }

  // physical_connection_id - computed: false, optional: false, required: true
  private _physicalConnectionId?: string; 
  public get physicalConnectionId() {
    return this.getStringAttribute('physical_connection_id');
  }
  public set physicalConnectionId(value: string) {
    this._physicalConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalConnectionIdInput() {
    return this._physicalConnectionId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vbr_id - computed: false, optional: false, required: true
  private _vbrId?: string; 
  public get vbrId() {
    return this.getStringAttribute('vbr_id');
  }
  public set vbrId(value: string) {
    this._vbrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vbrIdInput() {
    return this._vbrId;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      id: cdktf.stringToTerraform(this._id),
      local_gateway_ip: cdktf.stringToTerraform(this._localGatewayIp),
      local_ipv6_gateway_ip: cdktf.stringToTerraform(this._localIpv6GatewayIp),
      peer_gateway_ip: cdktf.stringToTerraform(this._peerGatewayIp),
      peer_ipv6_gateway_ip: cdktf.stringToTerraform(this._peerIpv6GatewayIp),
      peering_ipv6_subnet_mask: cdktf.stringToTerraform(this._peeringIpv6SubnetMask),
      peering_subnet_mask: cdktf.stringToTerraform(this._peeringSubnetMask),
      physical_connection_id: cdktf.stringToTerraform(this._physicalConnectionId),
      vbr_id: cdktf.stringToTerraform(this._vbrId),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
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
      local_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._localGatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ipv6_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._localIpv6GatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._peerGatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ipv6_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._peerIpv6GatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ipv6_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._peeringIpv6SubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._peeringSubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_connection_id: {
        value: cdktf.stringToHclTerraform(this._physicalConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vbr_id: {
        value: cdktf.stringToHclTerraform(this._vbrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
