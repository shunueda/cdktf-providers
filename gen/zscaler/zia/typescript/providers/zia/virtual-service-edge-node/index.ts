// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualServiceEdgeNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Virtual Service Edge cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#cluster_name VirtualServiceEdgeNode#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The IP address of the default gateway to the internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#default_gateway VirtualServiceEdgeNode#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Specifies the deployment mode. Select either STANDALONE or CLUSTER if you have the VMware ESXi platform. Otherwise, select only STANDALONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#deployment_mode VirtualServiceEdgeNode#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * A Boolean value that indicates whether or not a support tunnel for Zscaler Support is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#establish_support_tunnel_enabled VirtualServiceEdgeNode#establish_support_tunnel_enabled}
  */
  readonly establishSupportTunnelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Represents the Virtual Service Edge instances deployed for production purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#in_production VirtualServiceEdgeNode#in_production}
  */
  readonly inProduction?: boolean | cdktf.IResolvable;
  /**
  * The Virtual Service Edge cluster IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#ip_address VirtualServiceEdgeNode#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * A Boolean value that specifies whether to terminate IPSec traffic from the client at selected Virtual Service Edge instances for the Virtual Service Edge cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#ip_sec_enabled VirtualServiceEdgeNode#ip_sec_enabled}
  */
  readonly ipSecEnabled?: boolean | cdktf.IResolvable;
  /**
  * The IP address of the load balancer. This field is applicable only when the 'deploymentMode' field is set to CLUSTER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#load_balancer_ip_address VirtualServiceEdgeNode#load_balancer_ip_address}
  */
  readonly loadBalancerIpAddress?: string;
  /**
  * Name of the Virtual Service Edge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#name VirtualServiceEdgeNode#name}
  */
  readonly name?: string;
  /**
  * A Boolean value that indicates whether or not the On-Demand Support Tunnel is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#on_demand_support_tunnel_enabled VirtualServiceEdgeNode#on_demand_support_tunnel_enabled}
  */
  readonly onDemandSupportTunnelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the status of the Virtual Service Edge cluster. The status is set to ENABLED by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#status VirtualServiceEdgeNode#status}
  */
  readonly status?: string;
  /**
  * The Virtual Service Edge cluster subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#subnet_mask VirtualServiceEdgeNode#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * The Virtual Service Edge cluster type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#type VirtualServiceEdgeNode#type}
  */
  readonly type?: string;
  /**
  * The Virtual Service Edge SKU type. Supported Values: SMALL, MEDIUM, LARGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#vzen_sku_type VirtualServiceEdgeNode#vzen_sku_type}
  */
  readonly vzenSkuType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node zia_virtual_service_edge_node}
*/
export class VirtualServiceEdgeNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_virtual_service_edge_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualServiceEdgeNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualServiceEdgeNode to import
  * @param importFromId The id of the existing VirtualServiceEdgeNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualServiceEdgeNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_virtual_service_edge_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/virtual_service_edge_node zia_virtual_service_edge_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualServiceEdgeNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VirtualServiceEdgeNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_virtual_service_edge_node',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._defaultGateway = config.defaultGateway;
    this._deploymentMode = config.deploymentMode;
    this._establishSupportTunnelEnabled = config.establishSupportTunnelEnabled;
    this._inProduction = config.inProduction;
    this._ipAddress = config.ipAddress;
    this._ipSecEnabled = config.ipSecEnabled;
    this._loadBalancerIpAddress = config.loadBalancerIpAddress;
    this._name = config.name;
    this._onDemandSupportTunnelEnabled = config.onDemandSupportTunnelEnabled;
    this._status = config.status;
    this._subnetMask = config.subnetMask;
    this._type = config.type;
    this._vzenSkuType = config.vzenSkuType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // deployment_mode - computed: false, optional: true, required: false
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
  }

  // establish_support_tunnel_enabled - computed: false, optional: true, required: false
  private _establishSupportTunnelEnabled?: boolean | cdktf.IResolvable; 
  public get establishSupportTunnelEnabled() {
    return this.getBooleanAttribute('establish_support_tunnel_enabled');
  }
  public set establishSupportTunnelEnabled(value: boolean | cdktf.IResolvable) {
    this._establishSupportTunnelEnabled = value;
  }
  public resetEstablishSupportTunnelEnabled() {
    this._establishSupportTunnelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get establishSupportTunnelEnabledInput() {
    return this._establishSupportTunnelEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_production - computed: false, optional: true, required: false
  private _inProduction?: boolean | cdktf.IResolvable; 
  public get inProduction() {
    return this.getBooleanAttribute('in_production');
  }
  public set inProduction(value: boolean | cdktf.IResolvable) {
    this._inProduction = value;
  }
  public resetInProduction() {
    this._inProduction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inProductionInput() {
    return this._inProduction;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_sec_enabled - computed: false, optional: true, required: false
  private _ipSecEnabled?: boolean | cdktf.IResolvable; 
  public get ipSecEnabled() {
    return this.getBooleanAttribute('ip_sec_enabled');
  }
  public set ipSecEnabled(value: boolean | cdktf.IResolvable) {
    this._ipSecEnabled = value;
  }
  public resetIpSecEnabled() {
    this._ipSecEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSecEnabledInput() {
    return this._ipSecEnabled;
  }

  // load_balancer_ip_address - computed: false, optional: true, required: false
  private _loadBalancerIpAddress?: string; 
  public get loadBalancerIpAddress() {
    return this.getStringAttribute('load_balancer_ip_address');
  }
  public set loadBalancerIpAddress(value: string) {
    this._loadBalancerIpAddress = value;
  }
  public resetLoadBalancerIpAddress() {
    this._loadBalancerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIpAddressInput() {
    return this._loadBalancerIpAddress;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }

  // on_demand_support_tunnel_enabled - computed: false, optional: true, required: false
  private _onDemandSupportTunnelEnabled?: boolean | cdktf.IResolvable; 
  public get onDemandSupportTunnelEnabled() {
    return this.getBooleanAttribute('on_demand_support_tunnel_enabled');
  }
  public set onDemandSupportTunnelEnabled(value: boolean | cdktf.IResolvable) {
    this._onDemandSupportTunnelEnabled = value;
  }
  public resetOnDemandSupportTunnelEnabled() {
    this._onDemandSupportTunnelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandSupportTunnelEnabledInput() {
    return this._onDemandSupportTunnelEnabled;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vzen_sku_type - computed: false, optional: true, required: false
  private _vzenSkuType?: string; 
  public get vzenSkuType() {
    return this.getStringAttribute('vzen_sku_type');
  }
  public set vzenSkuType(value: string) {
    this._vzenSkuType = value;
  }
  public resetVzenSkuType() {
    this._vzenSkuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vzenSkuTypeInput() {
    return this._vzenSkuType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      establish_support_tunnel_enabled: cdktf.booleanToTerraform(this._establishSupportTunnelEnabled),
      in_production: cdktf.booleanToTerraform(this._inProduction),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_sec_enabled: cdktf.booleanToTerraform(this._ipSecEnabled),
      load_balancer_ip_address: cdktf.stringToTerraform(this._loadBalancerIpAddress),
      name: cdktf.stringToTerraform(this._name),
      on_demand_support_tunnel_enabled: cdktf.booleanToTerraform(this._onDemandSupportTunnelEnabled),
      status: cdktf.stringToTerraform(this._status),
      subnet_mask: cdktf.stringToTerraform(this._subnetMask),
      type: cdktf.stringToTerraform(this._type),
      vzen_sku_type: cdktf.stringToTerraform(this._vzenSkuType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_mode: {
        value: cdktf.stringToHclTerraform(this._deploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      establish_support_tunnel_enabled: {
        value: cdktf.booleanToHclTerraform(this._establishSupportTunnelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      in_production: {
        value: cdktf.booleanToHclTerraform(this._inProduction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_sec_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipSecEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_balancer_ip_address: {
        value: cdktf.stringToHclTerraform(this._loadBalancerIpAddress),
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
      on_demand_support_tunnel_enabled: {
        value: cdktf.booleanToHclTerraform(this._onDemandSupportTunnelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_mask: {
        value: cdktf.stringToHclTerraform(this._subnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vzen_sku_type: {
        value: cdktf.stringToHclTerraform(this._vzenSkuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
