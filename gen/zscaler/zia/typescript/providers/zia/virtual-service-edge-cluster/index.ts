// https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualServiceEdgeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address of the default gateway to the internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#default_gateway VirtualServiceEdgeCluster#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * The Virtual Service Edge cluster IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#ip_address VirtualServiceEdgeCluster#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * A Boolean value that specifies whether to terminate IPSec traffic from the client at selected Virtual Service Edge instances for the Virtual Service Edge cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#ip_sec_enabled VirtualServiceEdgeCluster#ip_sec_enabled}
  */
  readonly ipSecEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the Virtual Service Edge cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#name VirtualServiceEdgeCluster#name}
  */
  readonly name?: string;
  /**
  * Specifies the status of the Virtual Service Edge cluster. The status is set to ENABLED by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#status VirtualServiceEdgeCluster#status}
  */
  readonly status?: string;
  /**
  * The Virtual Service Edge cluster subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#subnet_mask VirtualServiceEdgeCluster#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * The Virtual Service Edge cluster subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#type VirtualServiceEdgeCluster#type}
  */
  readonly type?: string;
  /**
  * virtual_zen_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#virtual_zen_nodes VirtualServiceEdgeCluster#virtual_zen_nodes}
  */
  readonly virtualZenNodes?: VirtualServiceEdgeClusterVirtualZenNodes;
}
export interface VirtualServiceEdgeClusterVirtualZenNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#id VirtualServiceEdgeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number[];
}

export function virtualServiceEdgeClusterVirtualZenNodesToTerraform(struct?: VirtualServiceEdgeClusterVirtualZenNodesOutputReference | VirtualServiceEdgeClusterVirtualZenNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function virtualServiceEdgeClusterVirtualZenNodesToHclTerraform(struct?: VirtualServiceEdgeClusterVirtualZenNodesOutputReference | VirtualServiceEdgeClusterVirtualZenNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServiceEdgeClusterVirtualZenNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualServiceEdgeClusterVirtualZenNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServiceEdgeClusterVirtualZenNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number[]; 
  public get id() {
    return this.getNumberListAttribute('id');
  }
  public set id(value: number[]) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster zia_virtual_service_edge_cluster}
*/
export class VirtualServiceEdgeCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_virtual_service_edge_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualServiceEdgeCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualServiceEdgeCluster to import
  * @param importFromId The id of the existing VirtualServiceEdgeCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualServiceEdgeCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_virtual_service_edge_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/virtual_service_edge_cluster zia_virtual_service_edge_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualServiceEdgeClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VirtualServiceEdgeClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_virtual_service_edge_cluster',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.0',
        providerVersionConstraint: '4.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultGateway = config.defaultGateway;
    this._ipAddress = config.ipAddress;
    this._ipSecEnabled = config.ipSecEnabled;
    this._name = config.name;
    this._status = config.status;
    this._subnetMask = config.subnetMask;
    this._type = config.type;
    this._virtualZenNodes.internalValue = config.virtualZenNodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // virtual_zen_nodes - computed: false, optional: true, required: false
  private _virtualZenNodes = new VirtualServiceEdgeClusterVirtualZenNodesOutputReference(this, "virtual_zen_nodes");
  public get virtualZenNodes() {
    return this._virtualZenNodes;
  }
  public putVirtualZenNodes(value: VirtualServiceEdgeClusterVirtualZenNodes) {
    this._virtualZenNodes.internalValue = value;
  }
  public resetVirtualZenNodes() {
    this._virtualZenNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualZenNodesInput() {
    return this._virtualZenNodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_sec_enabled: cdktf.booleanToTerraform(this._ipSecEnabled),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      subnet_mask: cdktf.stringToTerraform(this._subnetMask),
      type: cdktf.stringToTerraform(this._type),
      virtual_zen_nodes: virtualServiceEdgeClusterVirtualZenNodesToTerraform(this._virtualZenNodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      virtual_zen_nodes: {
        value: virtualServiceEdgeClusterVirtualZenNodesToHclTerraform(this._virtualZenNodes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualServiceEdgeClusterVirtualZenNodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
