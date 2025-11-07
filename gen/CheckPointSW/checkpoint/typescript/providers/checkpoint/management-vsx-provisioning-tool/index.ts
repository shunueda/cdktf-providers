// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementVsxProvisioningToolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#id ManagementVsxProvisioningTool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the provisioning operation to run. Each operation has its own specific parameters.<br> The available operations are:<ul><li><i>add-vsx-gateway</i> - Adds a new VSX gateway</li><li><i>add-vsx-cluster</i> - Adds a new VSX cluster*</li><li><i>add-vsx-cluster-member</i> - Adds a new VSX cluster member*</li><li><i>add-vd</i> - Adds a new Virtual Device (VS/VSB/VSW/VR) to a VSX gateway or VSX cluster</li><li><i>add-vd-interface</i> - Adds a new virtual interface to a Virtual Device</li><li><i>add-physical-interface</i> - Adds a physical interface to a VSX gateway or VSX cluster</li><li><i>add-route</i> - Adds a route to a Virtual Device</li><li><i>attach-bridge</i> - Attaches a bridge interface to a Virtual System</li><li><i>remove-vsx</i> - Removes a VSX gateway or VSX cluster</li><li><i>remove-vd</i> - Removes a Virtual Device</li><li><i>remove-vd-interface</i> - Removes an interface from a Virtual Device</li><li><i>remove-physical-interface</i> - Removes a physical interface from a VSX gateway or VSX cluster</li><li><i>remove-route</i> - Removes a route from a Virtual Device</li><li><i>set-vd</i> - Modifies a Virtual Device</li><li><i>set-vd-interface</i> - Modifies an interface on a Virtual Device</li><li><i>set-physical-interface</i> - Modifies a physical interface on a VSX cluster or VSX gateway</li></ul><br> * When adding a VSX Cluster, you must also add at least 2 cluster members<br> * Adding cluster members is only allowed when adding a new VSX cluster<br> * To add members to an existing cluster, use vsx-run-operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#operation ManagementVsxProvisioningTool#operation}
  */
  readonly operation: string;
  /**
  * add_physical_interface_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#add_physical_interface_params ManagementVsxProvisioningTool#add_physical_interface_params}
  */
  readonly addPhysicalInterfaceParams?: ManagementVsxProvisioningToolAddPhysicalInterfaceParams;
  /**
  * add_route_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#add_route_params ManagementVsxProvisioningTool#add_route_params}
  */
  readonly addRouteParams?: ManagementVsxProvisioningToolAddRouteParams[] | cdktf.IResolvable;
  /**
  * add_vd_interface_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#add_vd_interface_params ManagementVsxProvisioningTool#add_vd_interface_params}
  */
  readonly addVdInterfaceParams?: ManagementVsxProvisioningToolAddVdInterfaceParams[] | cdktf.IResolvable;
  /**
  * add_vd_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#add_vd_params ManagementVsxProvisioningTool#add_vd_params}
  */
  readonly addVdParams?: ManagementVsxProvisioningToolAddVdParams;
  /**
  * add_vsx_cluster_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#add_vsx_cluster_params ManagementVsxProvisioningTool#add_vsx_cluster_params}
  */
  readonly addVsxClusterParams?: ManagementVsxProvisioningToolAddVsxClusterParams;
  /**
  * add_vsx_gateway_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#add_vsx_gateway_params ManagementVsxProvisioningTool#add_vsx_gateway_params}
  */
  readonly addVsxGatewayParams?: ManagementVsxProvisioningToolAddVsxGatewayParams;
  /**
  * attach_bridge_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#attach_bridge_params ManagementVsxProvisioningTool#attach_bridge_params}
  */
  readonly attachBridgeParams?: ManagementVsxProvisioningToolAttachBridgeParams;
  /**
  * remove_physical_interface_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#remove_physical_interface_params ManagementVsxProvisioningTool#remove_physical_interface_params}
  */
  readonly removePhysicalInterfaceParams?: ManagementVsxProvisioningToolRemovePhysicalInterfaceParams;
  /**
  * remove_route_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#remove_route_params ManagementVsxProvisioningTool#remove_route_params}
  */
  readonly removeRouteParams?: ManagementVsxProvisioningToolRemoveRouteParams;
  /**
  * remove_vd_interface_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#remove_vd_interface_params ManagementVsxProvisioningTool#remove_vd_interface_params}
  */
  readonly removeVdInterfaceParams?: ManagementVsxProvisioningToolRemoveVdInterfaceParams;
  /**
  * remove_vd_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#remove_vd_params ManagementVsxProvisioningTool#remove_vd_params}
  */
  readonly removeVdParams?: ManagementVsxProvisioningToolRemoveVdParams;
  /**
  * remove_vsx_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#remove_vsx_params ManagementVsxProvisioningTool#remove_vsx_params}
  */
  readonly removeVsxParams?: ManagementVsxProvisioningToolRemoveVsxParams;
  /**
  * set_physical_interface_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#set_physical_interface_params ManagementVsxProvisioningTool#set_physical_interface_params}
  */
  readonly setPhysicalInterfaceParams?: ManagementVsxProvisioningToolSetPhysicalInterfaceParams;
  /**
  * set_vd_interface_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#set_vd_interface_params ManagementVsxProvisioningTool#set_vd_interface_params}
  */
  readonly setVdInterfaceParams?: ManagementVsxProvisioningToolSetVdInterfaceParams;
  /**
  * set_vd_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#set_vd_params ManagementVsxProvisioningTool#set_vd_params}
  */
  readonly setVdParams?: ManagementVsxProvisioningToolSetVdParams;
}
export interface ManagementVsxProvisioningToolAddPhysicalInterfaceParams {
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#name ManagementVsxProvisioningTool#name}
  */
  readonly name?: string;
  /**
  * True if this interface is a VLAN trunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vlan_trunk ManagementVsxProvisioningTool#vlan_trunk}
  */
  readonly vlanTrunk?: boolean | cdktf.IResolvable;
  /**
  * Name of the VSX Gateway or Cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vsx_name ManagementVsxProvisioningTool#vsx_name}
  */
  readonly vsxName?: string;
}

export function managementVsxProvisioningToolAddPhysicalInterfaceParamsToTerraform(struct?: ManagementVsxProvisioningToolAddPhysicalInterfaceParamsOutputReference | ManagementVsxProvisioningToolAddPhysicalInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlan_trunk: cdktf.booleanToTerraform(struct!.vlanTrunk),
    vsx_name: cdktf.stringToTerraform(struct!.vsxName),
  }
}


export function managementVsxProvisioningToolAddPhysicalInterfaceParamsToHclTerraform(struct?: ManagementVsxProvisioningToolAddPhysicalInterfaceParamsOutputReference | ManagementVsxProvisioningToolAddPhysicalInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_trunk: {
      value: cdktf.booleanToHclTerraform(struct!.vlanTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vsx_name: {
      value: cdktf.stringToHclTerraform(struct!.vsxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddPhysicalInterfaceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddPhysicalInterfaceParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlanTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTrunk = this._vlanTrunk;
    }
    if (this._vsxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsxName = this._vsxName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddPhysicalInterfaceParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._vlanTrunk = undefined;
      this._vsxName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._vlanTrunk = value.vlanTrunk;
      this._vsxName = value.vsxName;
    }
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

  // vlan_trunk - computed: false, optional: true, required: false
  private _vlanTrunk?: boolean | cdktf.IResolvable; 
  public get vlanTrunk() {
    return this.getBooleanAttribute('vlan_trunk');
  }
  public set vlanTrunk(value: boolean | cdktf.IResolvable) {
    this._vlanTrunk = value;
  }
  public resetVlanTrunk() {
    this._vlanTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTrunkInput() {
    return this._vlanTrunk;
  }

  // vsx_name - computed: false, optional: true, required: false
  private _vsxName?: string; 
  public get vsxName() {
    return this.getStringAttribute('vsx_name');
  }
  public set vsxName(value: string) {
    this._vsxName = value;
  }
  public resetVsxName() {
    this._vsxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsxNameInput() {
    return this._vsxName;
  }
}
export interface ManagementVsxProvisioningToolAddRouteParams {
  /**
  * Route destination. To specify the default route, use 'default' for IPv4 and 'default6' for IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#destination ManagementVsxProvisioningTool#destination}
  */
  readonly destination?: string;
  /**
  * Virtual Router for this route<br/>This VD must have an existing connection to the VR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#leads_to ManagementVsxProvisioningTool#leads_to}
  */
  readonly leadsTo?: string;
  /**
  * Subnet mask for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#netmask ManagementVsxProvisioningTool#netmask}
  */
  readonly netmask?: string;
  /**
  * Next hop IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#next_hop ManagementVsxProvisioningTool#next_hop}
  */
  readonly nextHop?: string;
  /**
  * CIDR prefix for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#prefix ManagementVsxProvisioningTool#prefix}
  */
  readonly prefix?: string;
  /**
  * Propagate this route to adjacent virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#propagate ManagementVsxProvisioningTool#propagate}
  */
  readonly propagate?: boolean | cdktf.IResolvable;
  /**
  * Name of the Virtual System, Virtual Switch, or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vd ManagementVsxProvisioningTool#vd}
  */
  readonly vd?: string;
}

export function managementVsxProvisioningToolAddRouteParamsToTerraform(struct?: ManagementVsxProvisioningToolAddRouteParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    leads_to: cdktf.stringToTerraform(struct!.leadsTo),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    propagate: cdktf.booleanToTerraform(struct!.propagate),
    vd: cdktf.stringToTerraform(struct!.vd),
  }
}


export function managementVsxProvisioningToolAddRouteParamsToHclTerraform(struct?: ManagementVsxProvisioningToolAddRouteParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leads_to: {
      value: cdktf.stringToHclTerraform(struct!.leadsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate: {
      value: cdktf.booleanToHclTerraform(struct!.propagate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vd: {
      value: cdktf.stringToHclTerraform(struct!.vd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddRouteParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddRouteParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._leadsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadsTo = this._leadsTo;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._propagate !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagate = this._propagate;
    }
    if (this._vd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vd = this._vd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddRouteParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._leadsTo = undefined;
      this._netmask = undefined;
      this._nextHop = undefined;
      this._prefix = undefined;
      this._propagate = undefined;
      this._vd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._leadsTo = value.leadsTo;
      this._netmask = value.netmask;
      this._nextHop = value.nextHop;
      this._prefix = value.prefix;
      this._propagate = value.propagate;
      this._vd = value.vd;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // leads_to - computed: false, optional: true, required: false
  private _leadsTo?: string; 
  public get leadsTo() {
    return this.getStringAttribute('leads_to');
  }
  public set leadsTo(value: string) {
    this._leadsTo = value;
  }
  public resetLeadsTo() {
    this._leadsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadsToInput() {
    return this._leadsTo;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // propagate - computed: false, optional: true, required: false
  private _propagate?: boolean | cdktf.IResolvable; 
  public get propagate() {
    return this.getBooleanAttribute('propagate');
  }
  public set propagate(value: boolean | cdktf.IResolvable) {
    this._propagate = value;
  }
  public resetPropagate() {
    this._propagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateInput() {
    return this._propagate;
  }

  // vd - computed: false, optional: true, required: false
  private _vd?: string; 
  public get vd() {
    return this.getStringAttribute('vd');
  }
  public set vd(value: string) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }
}

export class ManagementVsxProvisioningToolAddRouteParamsList extends cdktf.ComplexList {
  public internalValue? : ManagementVsxProvisioningToolAddRouteParams[] | cdktf.IResolvable

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
  public get(index: number): ManagementVsxProvisioningToolAddRouteParamsOutputReference {
    return new ManagementVsxProvisioningToolAddRouteParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettings {
  /**
  * The IPv4 address of the VPN tunnel on this Virtual System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#local_ipv4_address ManagementVsxProvisioningTool#local_ipv4_address}
  */
  readonly localIpv4Address?: string;
  /**
  * The name of the remote peer object as defined in the VPN community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#peer_name ManagementVsxProvisioningTool#peer_name}
  */
  readonly peerName?: string;
  /**
  * The IPv4 address of the VPN tunnel on the remote VPN peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#remote_ipv4_address ManagementVsxProvisioningTool#remote_ipv4_address}
  */
  readonly remoteIpv4Address?: string;
  /**
  * Optional unique Tunnel ID.<br/>Automatically assigned by the system if empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#tunnel_id ManagementVsxProvisioningTool#tunnel_id}
  */
  readonly tunnelId?: string;
}

export function managementVsxProvisioningToolAddVdInterfaceParamsVtiSettingsToTerraform(struct?: ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettingsOutputReference | ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ipv4_address: cdktf.stringToTerraform(struct!.localIpv4Address),
    peer_name: cdktf.stringToTerraform(struct!.peerName),
    remote_ipv4_address: cdktf.stringToTerraform(struct!.remoteIpv4Address),
    tunnel_id: cdktf.stringToTerraform(struct!.tunnelId),
  }
}


export function managementVsxProvisioningToolAddVdInterfaceParamsVtiSettingsToHclTerraform(struct?: ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettingsOutputReference | ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_name: {
      value: cdktf.stringToHclTerraform(struct!.peerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_id: {
      value: cdktf.stringToHclTerraform(struct!.tunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpv4Address = this._localIpv4Address;
    }
    if (this._peerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerName = this._peerName;
    }
    if (this._remoteIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpv4Address = this._remoteIpv4Address;
    }
    if (this._tunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelId = this._tunnelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localIpv4Address = undefined;
      this._peerName = undefined;
      this._remoteIpv4Address = undefined;
      this._tunnelId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localIpv4Address = value.localIpv4Address;
      this._peerName = value.peerName;
      this._remoteIpv4Address = value.remoteIpv4Address;
      this._tunnelId = value.tunnelId;
    }
  }

  // local_ipv4_address - computed: false, optional: true, required: false
  private _localIpv4Address?: string; 
  public get localIpv4Address() {
    return this.getStringAttribute('local_ipv4_address');
  }
  public set localIpv4Address(value: string) {
    this._localIpv4Address = value;
  }
  public resetLocalIpv4Address() {
    this._localIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv4AddressInput() {
    return this._localIpv4Address;
  }

  // peer_name - computed: false, optional: true, required: false
  private _peerName?: string; 
  public get peerName() {
    return this.getStringAttribute('peer_name');
  }
  public set peerName(value: string) {
    this._peerName = value;
  }
  public resetPeerName() {
    this._peerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNameInput() {
    return this._peerName;
  }

  // remote_ipv4_address - computed: false, optional: true, required: false
  private _remoteIpv4Address?: string; 
  public get remoteIpv4Address() {
    return this.getStringAttribute('remote_ipv4_address');
  }
  public set remoteIpv4Address(value: string) {
    this._remoteIpv4Address = value;
  }
  public resetRemoteIpv4Address() {
    this._remoteIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv4AddressInput() {
    return this._remoteIpv4Address;
  }

  // tunnel_id - computed: false, optional: true, required: false
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  public resetTunnelId() {
    this._tunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }
}
export interface ManagementVsxProvisioningToolAddVdInterfaceParams {
  /**
  * The anti-spoofing enforcement setting of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#anti_spoofing ManagementVsxProvisioningTool#anti_spoofing}
  */
  readonly antiSpoofing?: string;
  /**
  * The anti-spoofing tracking setting of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#anti_spoofing_tracking ManagementVsxProvisioningTool#anti_spoofing_tracking}
  */
  readonly antiSpoofingTracking?: string;
  /**
  * IPv4 Address of this interface with optional CIDR prefix.<br/>Required if this interface belongs to a Virtual System or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_address ManagementVsxProvisioningTool#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv4 Subnet mask of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_netmask ManagementVsxProvisioningTool#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * IPv4 CIDR prefix of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_prefix ManagementVsxProvisioningTool#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
  /**
  * IPv6 Address of this interface<br/>Required if this interface belongs to a Virtual System or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_address ManagementVsxProvisioningTool#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 Subnet mask of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_netmask ManagementVsxProvisioningTool#ipv6_netmask}
  */
  readonly ipv6Netmask?: string;
  /**
  * IPv6 CIDR prefix of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_prefix ManagementVsxProvisioningTool#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Virtual Switch or Virtual Router for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#leads_to ManagementVsxProvisioningTool#leads_to}
  */
  readonly leadsTo?: string;
  /**
  * MTU of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#mtu ManagementVsxProvisioningTool#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#name ManagementVsxProvisioningTool#name}
  */
  readonly name?: string;
  /**
  * Propagate IPv4 route to adjacent virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#propagate ManagementVsxProvisioningTool#propagate}
  */
  readonly propagate?: boolean | cdktf.IResolvable;
  /**
  * Propagate IPv6 route to adjacent virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#propagate6 ManagementVsxProvisioningTool#propagate6}
  */
  readonly propagate6?: boolean | cdktf.IResolvable;
  /**
  * Specific group for interface topology.<br/>Only for use with topology option 'internal_specific'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#specific_group ManagementVsxProvisioningTool#specific_group}
  */
  readonly specificGroup?: string;
  /**
  * Topology of this interface.<br/>Automatic topology calculation based on routes must be disabled for this VS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#topology ManagementVsxProvisioningTool#topology}
  */
  readonly topology?: string;
  /**
  * Name of the Virtual System, Virtual Switch, or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vd ManagementVsxProvisioningTool#vd}
  */
  readonly vd?: string;
  /**
  * vti_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vti_settings ManagementVsxProvisioningTool#vti_settings}
  */
  readonly vtiSettings?: ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettings;
}

export function managementVsxProvisioningToolAddVdInterfaceParamsToTerraform(struct?: ManagementVsxProvisioningToolAddVdInterfaceParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spoofing: cdktf.stringToTerraform(struct!.antiSpoofing),
    anti_spoofing_tracking: cdktf.stringToTerraform(struct!.antiSpoofingTracking),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_netmask: cdktf.stringToTerraform(struct!.ipv6Netmask),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    leads_to: cdktf.stringToTerraform(struct!.leadsTo),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    propagate: cdktf.booleanToTerraform(struct!.propagate),
    propagate6: cdktf.booleanToTerraform(struct!.propagate6),
    specific_group: cdktf.stringToTerraform(struct!.specificGroup),
    topology: cdktf.stringToTerraform(struct!.topology),
    vd: cdktf.stringToTerraform(struct!.vd),
    vti_settings: managementVsxProvisioningToolAddVdInterfaceParamsVtiSettingsToTerraform(struct!.vtiSettings),
  }
}


export function managementVsxProvisioningToolAddVdInterfaceParamsToHclTerraform(struct?: ManagementVsxProvisioningToolAddVdInterfaceParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_spoofing: {
      value: cdktf.stringToHclTerraform(struct!.antiSpoofing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anti_spoofing_tracking: {
      value: cdktf.stringToHclTerraform(struct!.antiSpoofingTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leads_to: {
      value: cdktf.stringToHclTerraform(struct!.leadsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate: {
      value: cdktf.booleanToHclTerraform(struct!.propagate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagate6: {
      value: cdktf.booleanToHclTerraform(struct!.propagate6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_group: {
      value: cdktf.stringToHclTerraform(struct!.specificGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vd: {
      value: cdktf.stringToHclTerraform(struct!.vd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vti_settings: {
      value: managementVsxProvisioningToolAddVdInterfaceParamsVtiSettingsToHclTerraform(struct!.vtiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddVdInterfaceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddVdInterfaceParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiSpoofing !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpoofing = this._antiSpoofing;
    }
    if (this._antiSpoofingTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpoofingTracking = this._antiSpoofingTracking;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Netmask = this._ipv6Netmask;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._leadsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadsTo = this._leadsTo;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propagate !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagate = this._propagate;
    }
    if (this._propagate6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagate6 = this._propagate6;
    }
    if (this._specificGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificGroup = this._specificGroup;
    }
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    if (this._vd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vd = this._vd;
    }
    if (this._vtiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtiSettings = this._vtiSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddVdInterfaceParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiSpoofing = undefined;
      this._antiSpoofingTracking = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
      this._ipv4Prefix = undefined;
      this._ipv6Address = undefined;
      this._ipv6Netmask = undefined;
      this._ipv6Prefix = undefined;
      this._leadsTo = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._propagate = undefined;
      this._propagate6 = undefined;
      this._specificGroup = undefined;
      this._topology = undefined;
      this._vd = undefined;
      this._vtiSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiSpoofing = value.antiSpoofing;
      this._antiSpoofingTracking = value.antiSpoofingTracking;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
      this._ipv4Prefix = value.ipv4Prefix;
      this._ipv6Address = value.ipv6Address;
      this._ipv6Netmask = value.ipv6Netmask;
      this._ipv6Prefix = value.ipv6Prefix;
      this._leadsTo = value.leadsTo;
      this._mtu = value.mtu;
      this._name = value.name;
      this._propagate = value.propagate;
      this._propagate6 = value.propagate6;
      this._specificGroup = value.specificGroup;
      this._topology = value.topology;
      this._vd = value.vd;
      this._vtiSettings.internalValue = value.vtiSettings;
    }
  }

  // anti_spoofing - computed: false, optional: true, required: false
  private _antiSpoofing?: string; 
  public get antiSpoofing() {
    return this.getStringAttribute('anti_spoofing');
  }
  public set antiSpoofing(value: string) {
    this._antiSpoofing = value;
  }
  public resetAntiSpoofing() {
    this._antiSpoofing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingInput() {
    return this._antiSpoofing;
  }

  // anti_spoofing_tracking - computed: false, optional: true, required: false
  private _antiSpoofingTracking?: string; 
  public get antiSpoofingTracking() {
    return this.getStringAttribute('anti_spoofing_tracking');
  }
  public set antiSpoofingTracking(value: string) {
    this._antiSpoofingTracking = value;
  }
  public resetAntiSpoofingTracking() {
    this._antiSpoofingTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingTrackingInput() {
    return this._antiSpoofingTracking;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_netmask - computed: false, optional: true, required: false
  private _ipv6Netmask?: string; 
  public get ipv6Netmask() {
    return this.getStringAttribute('ipv6_netmask');
  }
  public set ipv6Netmask(value: string) {
    this._ipv6Netmask = value;
  }
  public resetIpv6Netmask() {
    this._ipv6Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetmaskInput() {
    return this._ipv6Netmask;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // leads_to - computed: false, optional: true, required: false
  private _leadsTo?: string; 
  public get leadsTo() {
    return this.getStringAttribute('leads_to');
  }
  public set leadsTo(value: string) {
    this._leadsTo = value;
  }
  public resetLeadsTo() {
    this._leadsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadsToInput() {
    return this._leadsTo;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // propagate - computed: false, optional: true, required: false
  private _propagate?: boolean | cdktf.IResolvable; 
  public get propagate() {
    return this.getBooleanAttribute('propagate');
  }
  public set propagate(value: boolean | cdktf.IResolvable) {
    this._propagate = value;
  }
  public resetPropagate() {
    this._propagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateInput() {
    return this._propagate;
  }

  // propagate6 - computed: false, optional: true, required: false
  private _propagate6?: boolean | cdktf.IResolvable; 
  public get propagate6() {
    return this.getBooleanAttribute('propagate6');
  }
  public set propagate6(value: boolean | cdktf.IResolvable) {
    this._propagate6 = value;
  }
  public resetPropagate6() {
    this._propagate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagate6Input() {
    return this._propagate6;
  }

  // specific_group - computed: false, optional: true, required: false
  private _specificGroup?: string; 
  public get specificGroup() {
    return this.getStringAttribute('specific_group');
  }
  public set specificGroup(value: string) {
    this._specificGroup = value;
  }
  public resetSpecificGroup() {
    this._specificGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificGroupInput() {
    return this._specificGroup;
  }

  // topology - computed: false, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // vd - computed: false, optional: true, required: false
  private _vd?: string; 
  public get vd() {
    return this.getStringAttribute('vd');
  }
  public set vd(value: string) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }

  // vti_settings - computed: false, optional: true, required: false
  private _vtiSettings = new ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettingsOutputReference(this, "vti_settings");
  public get vtiSettings() {
    return this._vtiSettings;
  }
  public putVtiSettings(value: ManagementVsxProvisioningToolAddVdInterfaceParamsVtiSettings) {
    this._vtiSettings.internalValue = value;
  }
  public resetVtiSettings() {
    this._vtiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtiSettingsInput() {
    return this._vtiSettings.internalValue;
  }
}

export class ManagementVsxProvisioningToolAddVdInterfaceParamsList extends cdktf.ComplexList {
  public internalValue? : ManagementVsxProvisioningToolAddVdInterfaceParams[] | cdktf.IResolvable

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
  public get(index: number): ManagementVsxProvisioningToolAddVdInterfaceParamsOutputReference {
    return new ManagementVsxProvisioningToolAddVdInterfaceParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVsxProvisioningToolAddVdParamsInterfaces {
  /**
  * The anti-spoofing enforcement setting of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#anti_spoofing ManagementVsxProvisioningTool#anti_spoofing}
  */
  readonly antiSpoofing?: string;
  /**
  * The anti-spoofing tracking setting of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#anti_spoofing_tracking ManagementVsxProvisioningTool#anti_spoofing_tracking}
  */
  readonly antiSpoofingTracking?: string;
  /**
  * IPv4 Address of this interface with optional CIDR prefix.<br/>Required if this interface belongs to a Virtual System or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_address ManagementVsxProvisioningTool#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv4 Subnet mask of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_netmask ManagementVsxProvisioningTool#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * IPv4 CIDR prefix of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_prefix ManagementVsxProvisioningTool#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
  /**
  * IPv6 Address of this interface<br/>Required if this interface belongs to a Virtual System or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_address ManagementVsxProvisioningTool#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 Subnet mask of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_netmask ManagementVsxProvisioningTool#ipv6_netmask}
  */
  readonly ipv6Netmask?: string;
  /**
  * IPv6 CIDR prefix of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_prefix ManagementVsxProvisioningTool#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Virtual Switch or Virtual Router for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#leads_to ManagementVsxProvisioningTool#leads_to}
  */
  readonly leadsTo?: string;
  /**
  * MTU of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#mtu ManagementVsxProvisioningTool#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#name ManagementVsxProvisioningTool#name}
  */
  readonly name?: string;
  /**
  * Propagate IPv4 route to adjacent virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#propagate ManagementVsxProvisioningTool#propagate}
  */
  readonly propagate?: boolean | cdktf.IResolvable;
  /**
  * Propagate IPv6 route to adjacent virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#propagate6 ManagementVsxProvisioningTool#propagate6}
  */
  readonly propagate6?: boolean | cdktf.IResolvable;
  /**
  * Specific group for interface topology.<br/>Only for use with topology option 'internal_specific'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#specific_group ManagementVsxProvisioningTool#specific_group}
  */
  readonly specificGroup?: string;
  /**
  * Topology of this interface.<br/>Automatic topology calculation based on routes must be disabled for this VS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#topology ManagementVsxProvisioningTool#topology}
  */
  readonly topology?: string;
}

export function managementVsxProvisioningToolAddVdParamsInterfacesToTerraform(struct?: ManagementVsxProvisioningToolAddVdParamsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spoofing: cdktf.stringToTerraform(struct!.antiSpoofing),
    anti_spoofing_tracking: cdktf.stringToTerraform(struct!.antiSpoofingTracking),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_netmask: cdktf.stringToTerraform(struct!.ipv6Netmask),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    leads_to: cdktf.stringToTerraform(struct!.leadsTo),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    propagate: cdktf.booleanToTerraform(struct!.propagate),
    propagate6: cdktf.booleanToTerraform(struct!.propagate6),
    specific_group: cdktf.stringToTerraform(struct!.specificGroup),
    topology: cdktf.stringToTerraform(struct!.topology),
  }
}


export function managementVsxProvisioningToolAddVdParamsInterfacesToHclTerraform(struct?: ManagementVsxProvisioningToolAddVdParamsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_spoofing: {
      value: cdktf.stringToHclTerraform(struct!.antiSpoofing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anti_spoofing_tracking: {
      value: cdktf.stringToHclTerraform(struct!.antiSpoofingTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leads_to: {
      value: cdktf.stringToHclTerraform(struct!.leadsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate: {
      value: cdktf.booleanToHclTerraform(struct!.propagate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagate6: {
      value: cdktf.booleanToHclTerraform(struct!.propagate6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_group: {
      value: cdktf.stringToHclTerraform(struct!.specificGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddVdParamsInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddVdParamsInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiSpoofing !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpoofing = this._antiSpoofing;
    }
    if (this._antiSpoofingTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpoofingTracking = this._antiSpoofingTracking;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Netmask = this._ipv6Netmask;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._leadsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadsTo = this._leadsTo;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propagate !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagate = this._propagate;
    }
    if (this._propagate6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagate6 = this._propagate6;
    }
    if (this._specificGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificGroup = this._specificGroup;
    }
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddVdParamsInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiSpoofing = undefined;
      this._antiSpoofingTracking = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
      this._ipv4Prefix = undefined;
      this._ipv6Address = undefined;
      this._ipv6Netmask = undefined;
      this._ipv6Prefix = undefined;
      this._leadsTo = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._propagate = undefined;
      this._propagate6 = undefined;
      this._specificGroup = undefined;
      this._topology = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiSpoofing = value.antiSpoofing;
      this._antiSpoofingTracking = value.antiSpoofingTracking;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
      this._ipv4Prefix = value.ipv4Prefix;
      this._ipv6Address = value.ipv6Address;
      this._ipv6Netmask = value.ipv6Netmask;
      this._ipv6Prefix = value.ipv6Prefix;
      this._leadsTo = value.leadsTo;
      this._mtu = value.mtu;
      this._name = value.name;
      this._propagate = value.propagate;
      this._propagate6 = value.propagate6;
      this._specificGroup = value.specificGroup;
      this._topology = value.topology;
    }
  }

  // anti_spoofing - computed: false, optional: true, required: false
  private _antiSpoofing?: string; 
  public get antiSpoofing() {
    return this.getStringAttribute('anti_spoofing');
  }
  public set antiSpoofing(value: string) {
    this._antiSpoofing = value;
  }
  public resetAntiSpoofing() {
    this._antiSpoofing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingInput() {
    return this._antiSpoofing;
  }

  // anti_spoofing_tracking - computed: false, optional: true, required: false
  private _antiSpoofingTracking?: string; 
  public get antiSpoofingTracking() {
    return this.getStringAttribute('anti_spoofing_tracking');
  }
  public set antiSpoofingTracking(value: string) {
    this._antiSpoofingTracking = value;
  }
  public resetAntiSpoofingTracking() {
    this._antiSpoofingTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingTrackingInput() {
    return this._antiSpoofingTracking;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_netmask - computed: false, optional: true, required: false
  private _ipv6Netmask?: string; 
  public get ipv6Netmask() {
    return this.getStringAttribute('ipv6_netmask');
  }
  public set ipv6Netmask(value: string) {
    this._ipv6Netmask = value;
  }
  public resetIpv6Netmask() {
    this._ipv6Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetmaskInput() {
    return this._ipv6Netmask;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // leads_to - computed: false, optional: true, required: false
  private _leadsTo?: string; 
  public get leadsTo() {
    return this.getStringAttribute('leads_to');
  }
  public set leadsTo(value: string) {
    this._leadsTo = value;
  }
  public resetLeadsTo() {
    this._leadsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadsToInput() {
    return this._leadsTo;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // propagate - computed: false, optional: true, required: false
  private _propagate?: boolean | cdktf.IResolvable; 
  public get propagate() {
    return this.getBooleanAttribute('propagate');
  }
  public set propagate(value: boolean | cdktf.IResolvable) {
    this._propagate = value;
  }
  public resetPropagate() {
    this._propagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateInput() {
    return this._propagate;
  }

  // propagate6 - computed: false, optional: true, required: false
  private _propagate6?: boolean | cdktf.IResolvable; 
  public get propagate6() {
    return this.getBooleanAttribute('propagate6');
  }
  public set propagate6(value: boolean | cdktf.IResolvable) {
    this._propagate6 = value;
  }
  public resetPropagate6() {
    this._propagate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagate6Input() {
    return this._propagate6;
  }

  // specific_group - computed: false, optional: true, required: false
  private _specificGroup?: string; 
  public get specificGroup() {
    return this.getStringAttribute('specific_group');
  }
  public set specificGroup(value: string) {
    this._specificGroup = value;
  }
  public resetSpecificGroup() {
    this._specificGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificGroupInput() {
    return this._specificGroup;
  }

  // topology - computed: false, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }
}

export class ManagementVsxProvisioningToolAddVdParamsInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementVsxProvisioningToolAddVdParamsInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementVsxProvisioningToolAddVdParamsInterfacesOutputReference {
    return new ManagementVsxProvisioningToolAddVdParamsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVsxProvisioningToolAddVdParamsRoutes {
  /**
  * Route destination. To specify the default route, use 'default' for IPv4 and 'default6' for IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#destination ManagementVsxProvisioningTool#destination}
  */
  readonly destination?: string;
  /**
  * Virtual Router for this route<br/>This VD must have an existing connection to the VR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#leads_to ManagementVsxProvisioningTool#leads_to}
  */
  readonly leadsTo?: string;
  /**
  * Subnet mask for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#netmask ManagementVsxProvisioningTool#netmask}
  */
  readonly netmask?: string;
  /**
  * Next hop IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#next_hop ManagementVsxProvisioningTool#next_hop}
  */
  readonly nextHop?: string;
  /**
  * CIDR prefix for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#prefix ManagementVsxProvisioningTool#prefix}
  */
  readonly prefix?: string;
  /**
  * Propagate this route to adjacent virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#propagate ManagementVsxProvisioningTool#propagate}
  */
  readonly propagate?: boolean | cdktf.IResolvable;
}

export function managementVsxProvisioningToolAddVdParamsRoutesToTerraform(struct?: ManagementVsxProvisioningToolAddVdParamsRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    leads_to: cdktf.stringToTerraform(struct!.leadsTo),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    propagate: cdktf.booleanToTerraform(struct!.propagate),
  }
}


export function managementVsxProvisioningToolAddVdParamsRoutesToHclTerraform(struct?: ManagementVsxProvisioningToolAddVdParamsRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leads_to: {
      value: cdktf.stringToHclTerraform(struct!.leadsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate: {
      value: cdktf.booleanToHclTerraform(struct!.propagate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddVdParamsRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddVdParamsRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._leadsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadsTo = this._leadsTo;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._propagate !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagate = this._propagate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddVdParamsRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._leadsTo = undefined;
      this._netmask = undefined;
      this._nextHop = undefined;
      this._prefix = undefined;
      this._propagate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._leadsTo = value.leadsTo;
      this._netmask = value.netmask;
      this._nextHop = value.nextHop;
      this._prefix = value.prefix;
      this._propagate = value.propagate;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // leads_to - computed: false, optional: true, required: false
  private _leadsTo?: string; 
  public get leadsTo() {
    return this.getStringAttribute('leads_to');
  }
  public set leadsTo(value: string) {
    this._leadsTo = value;
  }
  public resetLeadsTo() {
    this._leadsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadsToInput() {
    return this._leadsTo;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // propagate - computed: false, optional: true, required: false
  private _propagate?: boolean | cdktf.IResolvable; 
  public get propagate() {
    return this.getBooleanAttribute('propagate');
  }
  public set propagate(value: boolean | cdktf.IResolvable) {
    this._propagate = value;
  }
  public resetPropagate() {
    this._propagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateInput() {
    return this._propagate;
  }
}

export class ManagementVsxProvisioningToolAddVdParamsRoutesList extends cdktf.ComplexList {
  public internalValue? : ManagementVsxProvisioningToolAddVdParamsRoutes[] | cdktf.IResolvable

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
  public get(index: number): ManagementVsxProvisioningToolAddVdParamsRoutesOutputReference {
    return new ManagementVsxProvisioningToolAddVdParamsRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVsxProvisioningToolAddVdParams {
  /**
  * Calculate interface topology automatically based on routes.<br/>Relevant only for Virtual Systems.<br/>Do not use for virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#calc_topology_auto ManagementVsxProvisioningTool#calc_topology_auto}
  */
  readonly calcTopologyAuto?: boolean | cdktf.IResolvable;
  /**
  * Main IPv4 Address.<br/>Required if this device is a Virtual System.<br/>Do not use for other virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_address ManagementVsxProvisioningTool#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Number of IPv4 instances for the Virtual System.<br/>Must be greater or equal to 1.<br/>Only relevant for Virtual Systems and Virtual Systems in bridge mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_instances ManagementVsxProvisioningTool#ipv4_instances}
  */
  readonly ipv4Instances?: number;
  /**
  * Main IPv6 Address.<br/>Required if this device is a Virtual System.<br/>Do not use for other virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_address ManagementVsxProvisioningTool#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Number of IPv6 instances for the Virtual System.<br/>Only relevant for Virtual Systems and Virtual Systems in bridge mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_instances ManagementVsxProvisioningTool#ipv6_instances}
  */
  readonly ipv6Instances?: number;
  /**
  * Type of the Virtual Device <br><br>vs - Virtual Firewall<br>vr - Virtual Router<br>vsw - Virtual Switch<br>vsbm - Virtual Firewall in bridge mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#type ManagementVsxProvisioningTool#type}
  */
  readonly type?: string;
  /**
  * Name of the Virtual System, Virtual Switch, or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vd ManagementVsxProvisioningTool#vd}
  */
  readonly vd?: string;
  /**
  * MTU of the Virtual System.<br/>Only relevant for Virtual Systems in bridge mode.<br/>Do not use for other virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vs_mtu ManagementVsxProvisioningTool#vs_mtu}
  */
  readonly vsMtu?: number;
  /**
  * Name of the VSX Gateway or Cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vsx_name ManagementVsxProvisioningTool#vsx_name}
  */
  readonly vsxName?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#interfaces ManagementVsxProvisioningTool#interfaces}
  */
  readonly interfaces: ManagementVsxProvisioningToolAddVdParamsInterfaces[] | cdktf.IResolvable;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#routes ManagementVsxProvisioningTool#routes}
  */
  readonly routes?: ManagementVsxProvisioningToolAddVdParamsRoutes[] | cdktf.IResolvable;
}

export function managementVsxProvisioningToolAddVdParamsToTerraform(struct?: ManagementVsxProvisioningToolAddVdParamsOutputReference | ManagementVsxProvisioningToolAddVdParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calc_topology_auto: cdktf.booleanToTerraform(struct!.calcTopologyAuto),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_instances: cdktf.numberToTerraform(struct!.ipv4Instances),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_instances: cdktf.numberToTerraform(struct!.ipv6Instances),
    type: cdktf.stringToTerraform(struct!.type),
    vd: cdktf.stringToTerraform(struct!.vd),
    vs_mtu: cdktf.numberToTerraform(struct!.vsMtu),
    vsx_name: cdktf.stringToTerraform(struct!.vsxName),
    interfaces: cdktf.listMapper(managementVsxProvisioningToolAddVdParamsInterfacesToTerraform, true)(struct!.interfaces),
    routes: cdktf.listMapper(managementVsxProvisioningToolAddVdParamsRoutesToTerraform, true)(struct!.routes),
  }
}


export function managementVsxProvisioningToolAddVdParamsToHclTerraform(struct?: ManagementVsxProvisioningToolAddVdParamsOutputReference | ManagementVsxProvisioningToolAddVdParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calc_topology_auto: {
      value: cdktf.booleanToHclTerraform(struct!.calcTopologyAuto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_instances: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_instances: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vd: {
      value: cdktf.stringToHclTerraform(struct!.vd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_mtu: {
      value: cdktf.numberToHclTerraform(struct!.vsMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vsx_name: {
      value: cdktf.stringToHclTerraform(struct!.vsxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(managementVsxProvisioningToolAddVdParamsInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVsxProvisioningToolAddVdParamsInterfacesList",
    },
    routes: {
      value: cdktf.listMapperHcl(managementVsxProvisioningToolAddVdParamsRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVsxProvisioningToolAddVdParamsRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddVdParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddVdParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calcTopologyAuto !== undefined) {
      hasAnyValues = true;
      internalValueResult.calcTopologyAuto = this._calcTopologyAuto;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Instances = this._ipv4Instances;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6Instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Instances = this._ipv6Instances;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vd = this._vd;
    }
    if (this._vsMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsMtu = this._vsMtu;
    }
    if (this._vsxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsxName = this._vsxName;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddVdParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calcTopologyAuto = undefined;
      this._ipv4Address = undefined;
      this._ipv4Instances = undefined;
      this._ipv6Address = undefined;
      this._ipv6Instances = undefined;
      this._type = undefined;
      this._vd = undefined;
      this._vsMtu = undefined;
      this._vsxName = undefined;
      this._interfaces.internalValue = undefined;
      this._routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calcTopologyAuto = value.calcTopologyAuto;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Instances = value.ipv4Instances;
      this._ipv6Address = value.ipv6Address;
      this._ipv6Instances = value.ipv6Instances;
      this._type = value.type;
      this._vd = value.vd;
      this._vsMtu = value.vsMtu;
      this._vsxName = value.vsxName;
      this._interfaces.internalValue = value.interfaces;
      this._routes.internalValue = value.routes;
    }
  }

  // calc_topology_auto - computed: false, optional: true, required: false
  private _calcTopologyAuto?: boolean | cdktf.IResolvable; 
  public get calcTopologyAuto() {
    return this.getBooleanAttribute('calc_topology_auto');
  }
  public set calcTopologyAuto(value: boolean | cdktf.IResolvable) {
    this._calcTopologyAuto = value;
  }
  public resetCalcTopologyAuto() {
    this._calcTopologyAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcTopologyAutoInput() {
    return this._calcTopologyAuto;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_instances - computed: false, optional: true, required: false
  private _ipv4Instances?: number; 
  public get ipv4Instances() {
    return this.getNumberAttribute('ipv4_instances');
  }
  public set ipv4Instances(value: number) {
    this._ipv4Instances = value;
  }
  public resetIpv4Instances() {
    this._ipv4Instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InstancesInput() {
    return this._ipv4Instances;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_instances - computed: false, optional: true, required: false
  private _ipv6Instances?: number; 
  public get ipv6Instances() {
    return this.getNumberAttribute('ipv6_instances');
  }
  public set ipv6Instances(value: number) {
    this._ipv6Instances = value;
  }
  public resetIpv6Instances() {
    this._ipv6Instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InstancesInput() {
    return this._ipv6Instances;
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

  // vd - computed: false, optional: true, required: false
  private _vd?: string; 
  public get vd() {
    return this.getStringAttribute('vd');
  }
  public set vd(value: string) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }

  // vs_mtu - computed: false, optional: true, required: false
  private _vsMtu?: number; 
  public get vsMtu() {
    return this.getNumberAttribute('vs_mtu');
  }
  public set vsMtu(value: number) {
    this._vsMtu = value;
  }
  public resetVsMtu() {
    this._vsMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsMtuInput() {
    return this._vsMtu;
  }

  // vsx_name - computed: false, optional: true, required: false
  private _vsxName?: string; 
  public get vsxName() {
    return this.getStringAttribute('vsx_name');
  }
  public set vsxName(value: string) {
    this._vsxName = value;
  }
  public resetVsxName() {
    this._vsxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsxNameInput() {
    return this._vsxName;
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new ManagementVsxProvisioningToolAddVdParamsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ManagementVsxProvisioningToolAddVdParamsInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new ManagementVsxProvisioningToolAddVdParamsRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: ManagementVsxProvisioningToolAddVdParamsRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}
export interface ManagementVsxProvisioningToolAddVsxClusterParamsMembers {
  /**
  * Main IPv4 Address of the VSX Cluster member.<br/>Mandatory if the VSX Cluster has an IPv4 Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_address ManagementVsxProvisioningTool#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Main IPv6 Address of the VSX Cluster member.<br/>Mandatory if the VSX Cluster has an IPv6 Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_address ManagementVsxProvisioningTool#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Name of the new VSX Cluster member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#name ManagementVsxProvisioningTool#name}
  */
  readonly name?: string;
  /**
  * SIC one-time-password of the VSX Gateway or Cluster member.<br/>Password must be between 4-127 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#sic_otp ManagementVsxProvisioningTool#sic_otp}
  */
  readonly sicOtp?: string;
  /**
  * Sync IP address for the VSX Cluster member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#sync_ip ManagementVsxProvisioningTool#sync_ip}
  */
  readonly syncIp?: string;
}

export function managementVsxProvisioningToolAddVsxClusterParamsMembersToTerraform(struct?: ManagementVsxProvisioningToolAddVsxClusterParamsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    name: cdktf.stringToTerraform(struct!.name),
    sic_otp: cdktf.stringToTerraform(struct!.sicOtp),
    sync_ip: cdktf.stringToTerraform(struct!.syncIp),
  }
}


export function managementVsxProvisioningToolAddVsxClusterParamsMembersToHclTerraform(struct?: ManagementVsxProvisioningToolAddVsxClusterParamsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sic_otp: {
      value: cdktf.stringToHclTerraform(struct!.sicOtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_ip: {
      value: cdktf.stringToHclTerraform(struct!.syncIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddVsxClusterParamsMembersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddVsxClusterParamsMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sicOtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sicOtp = this._sicOtp;
    }
    if (this._syncIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncIp = this._syncIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddVsxClusterParamsMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._name = undefined;
      this._sicOtp = undefined;
      this._syncIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._name = value.name;
      this._sicOtp = value.sicOtp;
      this._syncIp = value.syncIp;
    }
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // sic_otp - computed: false, optional: true, required: false
  private _sicOtp?: string; 
  public get sicOtp() {
    return this.getStringAttribute('sic_otp');
  }
  public set sicOtp(value: string) {
    this._sicOtp = value;
  }
  public resetSicOtp() {
    this._sicOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sicOtpInput() {
    return this._sicOtp;
  }

  // sync_ip - computed: false, optional: true, required: false
  private _syncIp?: string; 
  public get syncIp() {
    return this.getStringAttribute('sync_ip');
  }
  public set syncIp(value: string) {
    this._syncIp = value;
  }
  public resetSyncIp() {
    this._syncIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIpInput() {
    return this._syncIp;
  }
}

export class ManagementVsxProvisioningToolAddVsxClusterParamsMembersList extends cdktf.ComplexList {
  public internalValue? : ManagementVsxProvisioningToolAddVsxClusterParamsMembers[] | cdktf.IResolvable

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
  public get(index: number): ManagementVsxProvisioningToolAddVsxClusterParamsMembersOutputReference {
    return new ManagementVsxProvisioningToolAddVsxClusterParamsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVsxProvisioningToolAddVsxClusterParams {
  /**
  * Cluster type for the VSX Cluster Object.<br/>Starting in R81.10, only VSLS can be configured during cluster creation.<br/>To use High Availability ('ha'), first create the cluster as VSLS and then run vsx_util on the Management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#cluster_type ManagementVsxProvisioningTool#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Main IPv4 Address of the VSX Gateway or Cluster object.<br/>Optional if main IPv6 Address is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_address ManagementVsxProvisioningTool#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Main IPv6 Address of the VSX Gateway or Cluster object.<br/>Optional if main IPv4 Address is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_address ManagementVsxProvisioningTool#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Add a default drop rule to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_drop ManagementVsxProvisioningTool#rule_drop}
  */
  readonly ruleDrop?: string;
  /**
  * Add a rule to allow HTTPS traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_https ManagementVsxProvisioningTool#rule_https}
  */
  readonly ruleHttps?: string;
  /**
  * Add a rule to allow ping traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_ping ManagementVsxProvisioningTool#rule_ping}
  */
  readonly rulePing?: string;
  /**
  * Add a rule to allow ping6 traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_ping6 ManagementVsxProvisioningTool#rule_ping6}
  */
  readonly rulePing6?: string;
  /**
  * Add a rule to allow SNMP traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_snmp ManagementVsxProvisioningTool#rule_snmp}
  */
  readonly ruleSnmp?: string;
  /**
  * Add a rule to allow SSH traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_ssh ManagementVsxProvisioningTool#rule_ssh}
  */
  readonly ruleSsh?: string;
  /**
  * Sync interface name for the VSX Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#sync_if_name ManagementVsxProvisioningTool#sync_if_name}
  */
  readonly syncIfName?: string;
  /**
  * Sync interface netmask for the VSX Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#sync_netmask ManagementVsxProvisioningTool#sync_netmask}
  */
  readonly syncNetmask?: string;
  /**
  * Version of the VSX Gateway or Cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#version ManagementVsxProvisioningTool#version}
  */
  readonly version?: string;
  /**
  * Name of the VSX Gateway or Cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vsx_name ManagementVsxProvisioningTool#vsx_name}
  */
  readonly vsxName?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#members ManagementVsxProvisioningTool#members}
  */
  readonly members?: ManagementVsxProvisioningToolAddVsxClusterParamsMembers[] | cdktf.IResolvable;
}

export function managementVsxProvisioningToolAddVsxClusterParamsToTerraform(struct?: ManagementVsxProvisioningToolAddVsxClusterParamsOutputReference | ManagementVsxProvisioningToolAddVsxClusterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    rule_drop: cdktf.stringToTerraform(struct!.ruleDrop),
    rule_https: cdktf.stringToTerraform(struct!.ruleHttps),
    rule_ping: cdktf.stringToTerraform(struct!.rulePing),
    rule_ping6: cdktf.stringToTerraform(struct!.rulePing6),
    rule_snmp: cdktf.stringToTerraform(struct!.ruleSnmp),
    rule_ssh: cdktf.stringToTerraform(struct!.ruleSsh),
    sync_if_name: cdktf.stringToTerraform(struct!.syncIfName),
    sync_netmask: cdktf.stringToTerraform(struct!.syncNetmask),
    version: cdktf.stringToTerraform(struct!.version),
    vsx_name: cdktf.stringToTerraform(struct!.vsxName),
    members: cdktf.listMapper(managementVsxProvisioningToolAddVsxClusterParamsMembersToTerraform, true)(struct!.members),
  }
}


export function managementVsxProvisioningToolAddVsxClusterParamsToHclTerraform(struct?: ManagementVsxProvisioningToolAddVsxClusterParamsOutputReference | ManagementVsxProvisioningToolAddVsxClusterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_drop: {
      value: cdktf.stringToHclTerraform(struct!.ruleDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_https: {
      value: cdktf.stringToHclTerraform(struct!.ruleHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_ping: {
      value: cdktf.stringToHclTerraform(struct!.rulePing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_ping6: {
      value: cdktf.stringToHclTerraform(struct!.rulePing6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_snmp: {
      value: cdktf.stringToHclTerraform(struct!.ruleSnmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_ssh: {
      value: cdktf.stringToHclTerraform(struct!.ruleSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_if_name: {
      value: cdktf.stringToHclTerraform(struct!.syncIfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_netmask: {
      value: cdktf.stringToHclTerraform(struct!.syncNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsx_name: {
      value: cdktf.stringToHclTerraform(struct!.vsxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(managementVsxProvisioningToolAddVsxClusterParamsMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVsxProvisioningToolAddVsxClusterParamsMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddVsxClusterParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddVsxClusterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ruleDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDrop = this._ruleDrop;
    }
    if (this._ruleHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleHttps = this._ruleHttps;
    }
    if (this._rulePing !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePing = this._rulePing;
    }
    if (this._rulePing6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePing6 = this._rulePing6;
    }
    if (this._ruleSnmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSnmp = this._ruleSnmp;
    }
    if (this._ruleSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSsh = this._ruleSsh;
    }
    if (this._syncIfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncIfName = this._syncIfName;
    }
    if (this._syncNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncNetmask = this._syncNetmask;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vsxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsxName = this._vsxName;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddVsxClusterParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterType = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._ruleDrop = undefined;
      this._ruleHttps = undefined;
      this._rulePing = undefined;
      this._rulePing6 = undefined;
      this._ruleSnmp = undefined;
      this._ruleSsh = undefined;
      this._syncIfName = undefined;
      this._syncNetmask = undefined;
      this._version = undefined;
      this._vsxName = undefined;
      this._members.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterType = value.clusterType;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._ruleDrop = value.ruleDrop;
      this._ruleHttps = value.ruleHttps;
      this._rulePing = value.rulePing;
      this._rulePing6 = value.rulePing6;
      this._ruleSnmp = value.ruleSnmp;
      this._ruleSsh = value.ruleSsh;
      this._syncIfName = value.syncIfName;
      this._syncNetmask = value.syncNetmask;
      this._version = value.version;
      this._vsxName = value.vsxName;
      this._members.internalValue = value.members;
    }
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // rule_drop - computed: false, optional: true, required: false
  private _ruleDrop?: string; 
  public get ruleDrop() {
    return this.getStringAttribute('rule_drop');
  }
  public set ruleDrop(value: string) {
    this._ruleDrop = value;
  }
  public resetRuleDrop() {
    this._ruleDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDropInput() {
    return this._ruleDrop;
  }

  // rule_https - computed: false, optional: true, required: false
  private _ruleHttps?: string; 
  public get ruleHttps() {
    return this.getStringAttribute('rule_https');
  }
  public set ruleHttps(value: string) {
    this._ruleHttps = value;
  }
  public resetRuleHttps() {
    this._ruleHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleHttpsInput() {
    return this._ruleHttps;
  }

  // rule_ping - computed: false, optional: true, required: false
  private _rulePing?: string; 
  public get rulePing() {
    return this.getStringAttribute('rule_ping');
  }
  public set rulePing(value: string) {
    this._rulePing = value;
  }
  public resetRulePing() {
    this._rulePing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePingInput() {
    return this._rulePing;
  }

  // rule_ping6 - computed: false, optional: true, required: false
  private _rulePing6?: string; 
  public get rulePing6() {
    return this.getStringAttribute('rule_ping6');
  }
  public set rulePing6(value: string) {
    this._rulePing6 = value;
  }
  public resetRulePing6() {
    this._rulePing6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePing6Input() {
    return this._rulePing6;
  }

  // rule_snmp - computed: false, optional: true, required: false
  private _ruleSnmp?: string; 
  public get ruleSnmp() {
    return this.getStringAttribute('rule_snmp');
  }
  public set ruleSnmp(value: string) {
    this._ruleSnmp = value;
  }
  public resetRuleSnmp() {
    this._ruleSnmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSnmpInput() {
    return this._ruleSnmp;
  }

  // rule_ssh - computed: false, optional: true, required: false
  private _ruleSsh?: string; 
  public get ruleSsh() {
    return this.getStringAttribute('rule_ssh');
  }
  public set ruleSsh(value: string) {
    this._ruleSsh = value;
  }
  public resetRuleSsh() {
    this._ruleSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSshInput() {
    return this._ruleSsh;
  }

  // sync_if_name - computed: false, optional: true, required: false
  private _syncIfName?: string; 
  public get syncIfName() {
    return this.getStringAttribute('sync_if_name');
  }
  public set syncIfName(value: string) {
    this._syncIfName = value;
  }
  public resetSyncIfName() {
    this._syncIfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIfNameInput() {
    return this._syncIfName;
  }

  // sync_netmask - computed: false, optional: true, required: false
  private _syncNetmask?: string; 
  public get syncNetmask() {
    return this.getStringAttribute('sync_netmask');
  }
  public set syncNetmask(value: string) {
    this._syncNetmask = value;
  }
  public resetSyncNetmask() {
    this._syncNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncNetmaskInput() {
    return this._syncNetmask;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vsx_name - computed: false, optional: true, required: false
  private _vsxName?: string; 
  public get vsxName() {
    return this.getStringAttribute('vsx_name');
  }
  public set vsxName(value: string) {
    this._vsxName = value;
  }
  public resetVsxName() {
    this._vsxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsxNameInput() {
    return this._vsxName;
  }

  // members - computed: false, optional: true, required: false
  private _members = new ManagementVsxProvisioningToolAddVsxClusterParamsMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ManagementVsxProvisioningToolAddVsxClusterParamsMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}
export interface ManagementVsxProvisioningToolAddVsxGatewayParams {
  /**
  * Main IPv4 Address of the VSX Gateway or Cluster object.<br/>Optional if main IPv6 Address is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_address ManagementVsxProvisioningTool#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Main IPv6 Address of the VSX Gateway or Cluster object.<br/>Optional if main IPv4 Address is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_address ManagementVsxProvisioningTool#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Add a default drop rule to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_drop ManagementVsxProvisioningTool#rule_drop}
  */
  readonly ruleDrop?: string;
  /**
  * Add a rule to allow HTTPS traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_https ManagementVsxProvisioningTool#rule_https}
  */
  readonly ruleHttps?: string;
  /**
  * Add a rule to allow ping traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_ping ManagementVsxProvisioningTool#rule_ping}
  */
  readonly rulePing?: string;
  /**
  * Add a rule to allow ping6 traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_ping6 ManagementVsxProvisioningTool#rule_ping6}
  */
  readonly rulePing6?: string;
  /**
  * Add a rule to allow SNMP traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_snmp ManagementVsxProvisioningTool#rule_snmp}
  */
  readonly ruleSnmp?: string;
  /**
  * Add a rule to allow SSH traffic to the VSX Gateway or Cluster initial policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#rule_ssh ManagementVsxProvisioningTool#rule_ssh}
  */
  readonly ruleSsh?: string;
  /**
  * SIC one-time-password of the VSX Gateway or Cluster member.<br/>Password must be between 4-127 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#sic_otp ManagementVsxProvisioningTool#sic_otp}
  */
  readonly sicOtp?: string;
  /**
  * Version of the VSX Gateway or Cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#version ManagementVsxProvisioningTool#version}
  */
  readonly version?: string;
  /**
  * Name of the VSX Gateway or Cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vsx_name ManagementVsxProvisioningTool#vsx_name}
  */
  readonly vsxName?: string;
}

export function managementVsxProvisioningToolAddVsxGatewayParamsToTerraform(struct?: ManagementVsxProvisioningToolAddVsxGatewayParamsOutputReference | ManagementVsxProvisioningToolAddVsxGatewayParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    rule_drop: cdktf.stringToTerraform(struct!.ruleDrop),
    rule_https: cdktf.stringToTerraform(struct!.ruleHttps),
    rule_ping: cdktf.stringToTerraform(struct!.rulePing),
    rule_ping6: cdktf.stringToTerraform(struct!.rulePing6),
    rule_snmp: cdktf.stringToTerraform(struct!.ruleSnmp),
    rule_ssh: cdktf.stringToTerraform(struct!.ruleSsh),
    sic_otp: cdktf.stringToTerraform(struct!.sicOtp),
    version: cdktf.stringToTerraform(struct!.version),
    vsx_name: cdktf.stringToTerraform(struct!.vsxName),
  }
}


export function managementVsxProvisioningToolAddVsxGatewayParamsToHclTerraform(struct?: ManagementVsxProvisioningToolAddVsxGatewayParamsOutputReference | ManagementVsxProvisioningToolAddVsxGatewayParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_drop: {
      value: cdktf.stringToHclTerraform(struct!.ruleDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_https: {
      value: cdktf.stringToHclTerraform(struct!.ruleHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_ping: {
      value: cdktf.stringToHclTerraform(struct!.rulePing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_ping6: {
      value: cdktf.stringToHclTerraform(struct!.rulePing6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_snmp: {
      value: cdktf.stringToHclTerraform(struct!.ruleSnmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_ssh: {
      value: cdktf.stringToHclTerraform(struct!.ruleSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sic_otp: {
      value: cdktf.stringToHclTerraform(struct!.sicOtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsx_name: {
      value: cdktf.stringToHclTerraform(struct!.vsxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAddVsxGatewayParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolAddVsxGatewayParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ruleDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDrop = this._ruleDrop;
    }
    if (this._ruleHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleHttps = this._ruleHttps;
    }
    if (this._rulePing !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePing = this._rulePing;
    }
    if (this._rulePing6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePing6 = this._rulePing6;
    }
    if (this._ruleSnmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSnmp = this._ruleSnmp;
    }
    if (this._ruleSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSsh = this._ruleSsh;
    }
    if (this._sicOtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sicOtp = this._sicOtp;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vsxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsxName = this._vsxName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAddVsxGatewayParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._ruleDrop = undefined;
      this._ruleHttps = undefined;
      this._rulePing = undefined;
      this._rulePing6 = undefined;
      this._ruleSnmp = undefined;
      this._ruleSsh = undefined;
      this._sicOtp = undefined;
      this._version = undefined;
      this._vsxName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._ruleDrop = value.ruleDrop;
      this._ruleHttps = value.ruleHttps;
      this._rulePing = value.rulePing;
      this._rulePing6 = value.rulePing6;
      this._ruleSnmp = value.ruleSnmp;
      this._ruleSsh = value.ruleSsh;
      this._sicOtp = value.sicOtp;
      this._version = value.version;
      this._vsxName = value.vsxName;
    }
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // rule_drop - computed: false, optional: true, required: false
  private _ruleDrop?: string; 
  public get ruleDrop() {
    return this.getStringAttribute('rule_drop');
  }
  public set ruleDrop(value: string) {
    this._ruleDrop = value;
  }
  public resetRuleDrop() {
    this._ruleDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDropInput() {
    return this._ruleDrop;
  }

  // rule_https - computed: false, optional: true, required: false
  private _ruleHttps?: string; 
  public get ruleHttps() {
    return this.getStringAttribute('rule_https');
  }
  public set ruleHttps(value: string) {
    this._ruleHttps = value;
  }
  public resetRuleHttps() {
    this._ruleHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleHttpsInput() {
    return this._ruleHttps;
  }

  // rule_ping - computed: false, optional: true, required: false
  private _rulePing?: string; 
  public get rulePing() {
    return this.getStringAttribute('rule_ping');
  }
  public set rulePing(value: string) {
    this._rulePing = value;
  }
  public resetRulePing() {
    this._rulePing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePingInput() {
    return this._rulePing;
  }

  // rule_ping6 - computed: false, optional: true, required: false
  private _rulePing6?: string; 
  public get rulePing6() {
    return this.getStringAttribute('rule_ping6');
  }
  public set rulePing6(value: string) {
    this._rulePing6 = value;
  }
  public resetRulePing6() {
    this._rulePing6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePing6Input() {
    return this._rulePing6;
  }

  // rule_snmp - computed: false, optional: true, required: false
  private _ruleSnmp?: string; 
  public get ruleSnmp() {
    return this.getStringAttribute('rule_snmp');
  }
  public set ruleSnmp(value: string) {
    this._ruleSnmp = value;
  }
  public resetRuleSnmp() {
    this._ruleSnmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSnmpInput() {
    return this._ruleSnmp;
  }

  // rule_ssh - computed: false, optional: true, required: false
  private _ruleSsh?: string; 
  public get ruleSsh() {
    return this.getStringAttribute('rule_ssh');
  }
  public set ruleSsh(value: string) {
    this._ruleSsh = value;
  }
  public resetRuleSsh() {
    this._ruleSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSshInput() {
    return this._ruleSsh;
  }

  // sic_otp - computed: false, optional: true, required: false
  private _sicOtp?: string; 
  public get sicOtp() {
    return this.getStringAttribute('sic_otp');
  }
  public set sicOtp(value: string) {
    this._sicOtp = value;
  }
  public resetSicOtp() {
    this._sicOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sicOtpInput() {
    return this._sicOtp;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vsx_name - computed: false, optional: true, required: false
  private _vsxName?: string; 
  public get vsxName() {
    return this.getStringAttribute('vsx_name');
  }
  public set vsxName(value: string) {
    this._vsxName = value;
  }
  public resetVsxName() {
    this._vsxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsxNameInput() {
    return this._vsxName;
  }
}
export interface ManagementVsxProvisioningToolAttachBridgeParams {
  /**
  * Name of the first interface for the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ifs1 ManagementVsxProvisioningTool#ifs1}
  */
  readonly ifs1?: string;
  /**
  * Name of the second interface for the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ifs2 ManagementVsxProvisioningTool#ifs2}
  */
  readonly ifs2?: string;
  /**
  * Name of the Virtual System, Virtual Switch, or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vd ManagementVsxProvisioningTool#vd}
  */
  readonly vd?: string;
}

export function managementVsxProvisioningToolAttachBridgeParamsToTerraform(struct?: ManagementVsxProvisioningToolAttachBridgeParamsOutputReference | ManagementVsxProvisioningToolAttachBridgeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ifs1: cdktf.stringToTerraform(struct!.ifs1),
    ifs2: cdktf.stringToTerraform(struct!.ifs2),
    vd: cdktf.stringToTerraform(struct!.vd),
  }
}


export function managementVsxProvisioningToolAttachBridgeParamsToHclTerraform(struct?: ManagementVsxProvisioningToolAttachBridgeParamsOutputReference | ManagementVsxProvisioningToolAttachBridgeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ifs1: {
      value: cdktf.stringToHclTerraform(struct!.ifs1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ifs2: {
      value: cdktf.stringToHclTerraform(struct!.ifs2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vd: {
      value: cdktf.stringToHclTerraform(struct!.vd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolAttachBridgeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolAttachBridgeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifs1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifs1 = this._ifs1;
    }
    if (this._ifs2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifs2 = this._ifs2;
    }
    if (this._vd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vd = this._vd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolAttachBridgeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ifs1 = undefined;
      this._ifs2 = undefined;
      this._vd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ifs1 = value.ifs1;
      this._ifs2 = value.ifs2;
      this._vd = value.vd;
    }
  }

  // ifs1 - computed: false, optional: true, required: false
  private _ifs1?: string; 
  public get ifs1() {
    return this.getStringAttribute('ifs1');
  }
  public set ifs1(value: string) {
    this._ifs1 = value;
  }
  public resetIfs1() {
    this._ifs1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifs1Input() {
    return this._ifs1;
  }

  // ifs2 - computed: false, optional: true, required: false
  private _ifs2?: string; 
  public get ifs2() {
    return this.getStringAttribute('ifs2');
  }
  public set ifs2(value: string) {
    this._ifs2 = value;
  }
  public resetIfs2() {
    this._ifs2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifs2Input() {
    return this._ifs2;
  }

  // vd - computed: false, optional: true, required: false
  private _vd?: string; 
  public get vd() {
    return this.getStringAttribute('vd');
  }
  public set vd(value: string) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }
}
export interface ManagementVsxProvisioningToolRemovePhysicalInterfaceParams {
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#name ManagementVsxProvisioningTool#name}
  */
  readonly name?: string;
  /**
  * Name of the VSX Gateway or Cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vsx_name ManagementVsxProvisioningTool#vsx_name}
  */
  readonly vsxName?: string;
}

export function managementVsxProvisioningToolRemovePhysicalInterfaceParamsToTerraform(struct?: ManagementVsxProvisioningToolRemovePhysicalInterfaceParamsOutputReference | ManagementVsxProvisioningToolRemovePhysicalInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vsx_name: cdktf.stringToTerraform(struct!.vsxName),
  }
}


export function managementVsxProvisioningToolRemovePhysicalInterfaceParamsToHclTerraform(struct?: ManagementVsxProvisioningToolRemovePhysicalInterfaceParamsOutputReference | ManagementVsxProvisioningToolRemovePhysicalInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsx_name: {
      value: cdktf.stringToHclTerraform(struct!.vsxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolRemovePhysicalInterfaceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolRemovePhysicalInterfaceParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vsxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsxName = this._vsxName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolRemovePhysicalInterfaceParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._vsxName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._vsxName = value.vsxName;
    }
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

  // vsx_name - computed: false, optional: true, required: false
  private _vsxName?: string; 
  public get vsxName() {
    return this.getStringAttribute('vsx_name');
  }
  public set vsxName(value: string) {
    this._vsxName = value;
  }
  public resetVsxName() {
    this._vsxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsxNameInput() {
    return this._vsxName;
  }
}
export interface ManagementVsxProvisioningToolRemoveRouteParams {
  /**
  * Route destination. To specify the default route, use 'default' for IPv4 and 'default6' for IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#destination ManagementVsxProvisioningTool#destination}
  */
  readonly destination?: string;
  /**
  * Subnet mask for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#netmask ManagementVsxProvisioningTool#netmask}
  */
  readonly netmask?: string;
  /**
  * CIDR prefix for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#prefix ManagementVsxProvisioningTool#prefix}
  */
  readonly prefix?: string;
  /**
  * Name of the Virtual System, Virtual Switch, or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vd ManagementVsxProvisioningTool#vd}
  */
  readonly vd?: string;
}

export function managementVsxProvisioningToolRemoveRouteParamsToTerraform(struct?: ManagementVsxProvisioningToolRemoveRouteParamsOutputReference | ManagementVsxProvisioningToolRemoveRouteParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    vd: cdktf.stringToTerraform(struct!.vd),
  }
}


export function managementVsxProvisioningToolRemoveRouteParamsToHclTerraform(struct?: ManagementVsxProvisioningToolRemoveRouteParamsOutputReference | ManagementVsxProvisioningToolRemoveRouteParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vd: {
      value: cdktf.stringToHclTerraform(struct!.vd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolRemoveRouteParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolRemoveRouteParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._vd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vd = this._vd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolRemoveRouteParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
      this._netmask = undefined;
      this._prefix = undefined;
      this._vd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
      this._netmask = value.netmask;
      this._prefix = value.prefix;
      this._vd = value.vd;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // vd - computed: false, optional: true, required: false
  private _vd?: string; 
  public get vd() {
    return this.getStringAttribute('vd');
  }
  public set vd(value: string) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }
}
export interface ManagementVsxProvisioningToolRemoveVdInterfaceParams {
  /**
  * Virtual Switch or Virtual Router for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#leads_to ManagementVsxProvisioningTool#leads_to}
  */
  readonly leadsTo?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#name ManagementVsxProvisioningTool#name}
  */
  readonly name?: string;
  /**
  * Name of the Virtual System, Virtual Switch, or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vd ManagementVsxProvisioningTool#vd}
  */
  readonly vd?: string;
}

export function managementVsxProvisioningToolRemoveVdInterfaceParamsToTerraform(struct?: ManagementVsxProvisioningToolRemoveVdInterfaceParamsOutputReference | ManagementVsxProvisioningToolRemoveVdInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leads_to: cdktf.stringToTerraform(struct!.leadsTo),
    name: cdktf.stringToTerraform(struct!.name),
    vd: cdktf.stringToTerraform(struct!.vd),
  }
}


export function managementVsxProvisioningToolRemoveVdInterfaceParamsToHclTerraform(struct?: ManagementVsxProvisioningToolRemoveVdInterfaceParamsOutputReference | ManagementVsxProvisioningToolRemoveVdInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    leads_to: {
      value: cdktf.stringToHclTerraform(struct!.leadsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vd: {
      value: cdktf.stringToHclTerraform(struct!.vd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolRemoveVdInterfaceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolRemoveVdInterfaceParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leadsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadsTo = this._leadsTo;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vd = this._vd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolRemoveVdInterfaceParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leadsTo = undefined;
      this._name = undefined;
      this._vd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leadsTo = value.leadsTo;
      this._name = value.name;
      this._vd = value.vd;
    }
  }

  // leads_to - computed: false, optional: true, required: false
  private _leadsTo?: string; 
  public get leadsTo() {
    return this.getStringAttribute('leads_to');
  }
  public set leadsTo(value: string) {
    this._leadsTo = value;
  }
  public resetLeadsTo() {
    this._leadsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadsToInput() {
    return this._leadsTo;
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

  // vd - computed: false, optional: true, required: false
  private _vd?: string; 
  public get vd() {
    return this.getStringAttribute('vd');
  }
  public set vd(value: string) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }
}
export interface ManagementVsxProvisioningToolRemoveVdParams {
  /**
  * Name of the Virtual System, Virtual Switch, or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vd ManagementVsxProvisioningTool#vd}
  */
  readonly vd?: string;
}

export function managementVsxProvisioningToolRemoveVdParamsToTerraform(struct?: ManagementVsxProvisioningToolRemoveVdParamsOutputReference | ManagementVsxProvisioningToolRemoveVdParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vd: cdktf.stringToTerraform(struct!.vd),
  }
}


export function managementVsxProvisioningToolRemoveVdParamsToHclTerraform(struct?: ManagementVsxProvisioningToolRemoveVdParamsOutputReference | ManagementVsxProvisioningToolRemoveVdParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vd: {
      value: cdktf.stringToHclTerraform(struct!.vd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolRemoveVdParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolRemoveVdParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vd = this._vd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolRemoveVdParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vd = value.vd;
    }
  }

  // vd - computed: false, optional: true, required: false
  private _vd?: string; 
  public get vd() {
    return this.getStringAttribute('vd');
  }
  public set vd(value: string) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }
}
export interface ManagementVsxProvisioningToolRemoveVsxParams {
  /**
  * Name of the VSX Gateway or Cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vsx_name ManagementVsxProvisioningTool#vsx_name}
  */
  readonly vsxName?: string;
}

export function managementVsxProvisioningToolRemoveVsxParamsToTerraform(struct?: ManagementVsxProvisioningToolRemoveVsxParamsOutputReference | ManagementVsxProvisioningToolRemoveVsxParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vsx_name: cdktf.stringToTerraform(struct!.vsxName),
  }
}


export function managementVsxProvisioningToolRemoveVsxParamsToHclTerraform(struct?: ManagementVsxProvisioningToolRemoveVsxParamsOutputReference | ManagementVsxProvisioningToolRemoveVsxParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vsx_name: {
      value: cdktf.stringToHclTerraform(struct!.vsxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolRemoveVsxParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolRemoveVsxParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vsxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsxName = this._vsxName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolRemoveVsxParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vsxName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vsxName = value.vsxName;
    }
  }

  // vsx_name - computed: false, optional: true, required: false
  private _vsxName?: string; 
  public get vsxName() {
    return this.getStringAttribute('vsx_name');
  }
  public set vsxName(value: string) {
    this._vsxName = value;
  }
  public resetVsxName() {
    this._vsxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsxNameInput() {
    return this._vsxName;
  }
}
export interface ManagementVsxProvisioningToolSetPhysicalInterfaceParams {
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#name ManagementVsxProvisioningTool#name}
  */
  readonly name?: string;
  /**
  * True if this interface is a VLAN trunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vlan_trunk ManagementVsxProvisioningTool#vlan_trunk}
  */
  readonly vlanTrunk?: boolean | cdktf.IResolvable;
  /**
  * Name of the VSX Gateway or Cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vsx_name ManagementVsxProvisioningTool#vsx_name}
  */
  readonly vsxName?: string;
}

export function managementVsxProvisioningToolSetPhysicalInterfaceParamsToTerraform(struct?: ManagementVsxProvisioningToolSetPhysicalInterfaceParamsOutputReference | ManagementVsxProvisioningToolSetPhysicalInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlan_trunk: cdktf.booleanToTerraform(struct!.vlanTrunk),
    vsx_name: cdktf.stringToTerraform(struct!.vsxName),
  }
}


export function managementVsxProvisioningToolSetPhysicalInterfaceParamsToHclTerraform(struct?: ManagementVsxProvisioningToolSetPhysicalInterfaceParamsOutputReference | ManagementVsxProvisioningToolSetPhysicalInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_trunk: {
      value: cdktf.booleanToHclTerraform(struct!.vlanTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vsx_name: {
      value: cdktf.stringToHclTerraform(struct!.vsxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolSetPhysicalInterfaceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolSetPhysicalInterfaceParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlanTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTrunk = this._vlanTrunk;
    }
    if (this._vsxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsxName = this._vsxName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolSetPhysicalInterfaceParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._vlanTrunk = undefined;
      this._vsxName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._vlanTrunk = value.vlanTrunk;
      this._vsxName = value.vsxName;
    }
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

  // vlan_trunk - computed: false, optional: true, required: false
  private _vlanTrunk?: boolean | cdktf.IResolvable; 
  public get vlanTrunk() {
    return this.getBooleanAttribute('vlan_trunk');
  }
  public set vlanTrunk(value: boolean | cdktf.IResolvable) {
    this._vlanTrunk = value;
  }
  public resetVlanTrunk() {
    this._vlanTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTrunkInput() {
    return this._vlanTrunk;
  }

  // vsx_name - computed: false, optional: true, required: false
  private _vsxName?: string; 
  public get vsxName() {
    return this.getStringAttribute('vsx_name');
  }
  public set vsxName(value: string) {
    this._vsxName = value;
  }
  public resetVsxName() {
    this._vsxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsxNameInput() {
    return this._vsxName;
  }
}
export interface ManagementVsxProvisioningToolSetVdInterfaceParams {
  /**
  * The anti-spoofing enforcement setting of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#anti_spoofing ManagementVsxProvisioningTool#anti_spoofing}
  */
  readonly antiSpoofing?: string;
  /**
  * The anti-spoofing tracking setting of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#anti_spoofing_tracking ManagementVsxProvisioningTool#anti_spoofing_tracking}
  */
  readonly antiSpoofingTracking?: string;
  /**
  * IPv4 Address of this interface with optional CIDR prefix.<br/>Required if this interface belongs to a Virtual System or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_address ManagementVsxProvisioningTool#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 Address of this interface<br/>Required if this interface belongs to a Virtual System or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_address ManagementVsxProvisioningTool#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Virtual Switch or Virtual Router for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#leads_to ManagementVsxProvisioningTool#leads_to}
  */
  readonly leadsTo?: string;
  /**
  * MTU of this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#mtu ManagementVsxProvisioningTool#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#name ManagementVsxProvisioningTool#name}
  */
  readonly name?: string;
  /**
  * New Virtual Switch or Virtual Router for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#new_leads_to ManagementVsxProvisioningTool#new_leads_to}
  */
  readonly newLeadsTo?: string;
  /**
  * Propagate IPv4 route to adjacent virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#propagate ManagementVsxProvisioningTool#propagate}
  */
  readonly propagate?: boolean | cdktf.IResolvable;
  /**
  * Propagate IPv6 route to adjacent virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#propagate6 ManagementVsxProvisioningTool#propagate6}
  */
  readonly propagate6?: boolean | cdktf.IResolvable;
  /**
  * Specific group for interface topology.<br/>Only for use with topology option 'internal_specific'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#specific_group ManagementVsxProvisioningTool#specific_group}
  */
  readonly specificGroup?: string;
  /**
  * Topology of this interface.<br/>Automatic topology calculation based on routes must be disabled for this VS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#topology ManagementVsxProvisioningTool#topology}
  */
  readonly topology?: string;
  /**
  * Name of the Virtual System, Virtual Switch, or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vd ManagementVsxProvisioningTool#vd}
  */
  readonly vd?: string;
}

export function managementVsxProvisioningToolSetVdInterfaceParamsToTerraform(struct?: ManagementVsxProvisioningToolSetVdInterfaceParamsOutputReference | ManagementVsxProvisioningToolSetVdInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spoofing: cdktf.stringToTerraform(struct!.antiSpoofing),
    anti_spoofing_tracking: cdktf.stringToTerraform(struct!.antiSpoofingTracking),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    leads_to: cdktf.stringToTerraform(struct!.leadsTo),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    new_leads_to: cdktf.stringToTerraform(struct!.newLeadsTo),
    propagate: cdktf.booleanToTerraform(struct!.propagate),
    propagate6: cdktf.booleanToTerraform(struct!.propagate6),
    specific_group: cdktf.stringToTerraform(struct!.specificGroup),
    topology: cdktf.stringToTerraform(struct!.topology),
    vd: cdktf.stringToTerraform(struct!.vd),
  }
}


export function managementVsxProvisioningToolSetVdInterfaceParamsToHclTerraform(struct?: ManagementVsxProvisioningToolSetVdInterfaceParamsOutputReference | ManagementVsxProvisioningToolSetVdInterfaceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_spoofing: {
      value: cdktf.stringToHclTerraform(struct!.antiSpoofing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anti_spoofing_tracking: {
      value: cdktf.stringToHclTerraform(struct!.antiSpoofingTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leads_to: {
      value: cdktf.stringToHclTerraform(struct!.leadsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_leads_to: {
      value: cdktf.stringToHclTerraform(struct!.newLeadsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate: {
      value: cdktf.booleanToHclTerraform(struct!.propagate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagate6: {
      value: cdktf.booleanToHclTerraform(struct!.propagate6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_group: {
      value: cdktf.stringToHclTerraform(struct!.specificGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vd: {
      value: cdktf.stringToHclTerraform(struct!.vd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolSetVdInterfaceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolSetVdInterfaceParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiSpoofing !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpoofing = this._antiSpoofing;
    }
    if (this._antiSpoofingTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpoofingTracking = this._antiSpoofingTracking;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._leadsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadsTo = this._leadsTo;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._newLeadsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.newLeadsTo = this._newLeadsTo;
    }
    if (this._propagate !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagate = this._propagate;
    }
    if (this._propagate6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagate6 = this._propagate6;
    }
    if (this._specificGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificGroup = this._specificGroup;
    }
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    if (this._vd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vd = this._vd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolSetVdInterfaceParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antiSpoofing = undefined;
      this._antiSpoofingTracking = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._leadsTo = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._newLeadsTo = undefined;
      this._propagate = undefined;
      this._propagate6 = undefined;
      this._specificGroup = undefined;
      this._topology = undefined;
      this._vd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antiSpoofing = value.antiSpoofing;
      this._antiSpoofingTracking = value.antiSpoofingTracking;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._leadsTo = value.leadsTo;
      this._mtu = value.mtu;
      this._name = value.name;
      this._newLeadsTo = value.newLeadsTo;
      this._propagate = value.propagate;
      this._propagate6 = value.propagate6;
      this._specificGroup = value.specificGroup;
      this._topology = value.topology;
      this._vd = value.vd;
    }
  }

  // anti_spoofing - computed: false, optional: true, required: false
  private _antiSpoofing?: string; 
  public get antiSpoofing() {
    return this.getStringAttribute('anti_spoofing');
  }
  public set antiSpoofing(value: string) {
    this._antiSpoofing = value;
  }
  public resetAntiSpoofing() {
    this._antiSpoofing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingInput() {
    return this._antiSpoofing;
  }

  // anti_spoofing_tracking - computed: false, optional: true, required: false
  private _antiSpoofingTracking?: string; 
  public get antiSpoofingTracking() {
    return this.getStringAttribute('anti_spoofing_tracking');
  }
  public set antiSpoofingTracking(value: string) {
    this._antiSpoofingTracking = value;
  }
  public resetAntiSpoofingTracking() {
    this._antiSpoofingTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingTrackingInput() {
    return this._antiSpoofingTracking;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // leads_to - computed: false, optional: true, required: false
  private _leadsTo?: string; 
  public get leadsTo() {
    return this.getStringAttribute('leads_to');
  }
  public set leadsTo(value: string) {
    this._leadsTo = value;
  }
  public resetLeadsTo() {
    this._leadsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadsToInput() {
    return this._leadsTo;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // new_leads_to - computed: false, optional: true, required: false
  private _newLeadsTo?: string; 
  public get newLeadsTo() {
    return this.getStringAttribute('new_leads_to');
  }
  public set newLeadsTo(value: string) {
    this._newLeadsTo = value;
  }
  public resetNewLeadsTo() {
    this._newLeadsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newLeadsToInput() {
    return this._newLeadsTo;
  }

  // propagate - computed: false, optional: true, required: false
  private _propagate?: boolean | cdktf.IResolvable; 
  public get propagate() {
    return this.getBooleanAttribute('propagate');
  }
  public set propagate(value: boolean | cdktf.IResolvable) {
    this._propagate = value;
  }
  public resetPropagate() {
    this._propagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateInput() {
    return this._propagate;
  }

  // propagate6 - computed: false, optional: true, required: false
  private _propagate6?: boolean | cdktf.IResolvable; 
  public get propagate6() {
    return this.getBooleanAttribute('propagate6');
  }
  public set propagate6(value: boolean | cdktf.IResolvable) {
    this._propagate6 = value;
  }
  public resetPropagate6() {
    this._propagate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagate6Input() {
    return this._propagate6;
  }

  // specific_group - computed: false, optional: true, required: false
  private _specificGroup?: string; 
  public get specificGroup() {
    return this.getStringAttribute('specific_group');
  }
  public set specificGroup(value: string) {
    this._specificGroup = value;
  }
  public resetSpecificGroup() {
    this._specificGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificGroupInput() {
    return this._specificGroup;
  }

  // topology - computed: false, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // vd - computed: false, optional: true, required: false
  private _vd?: string; 
  public get vd() {
    return this.getStringAttribute('vd');
  }
  public set vd(value: string) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }
}
export interface ManagementVsxProvisioningToolSetVdParams {
  /**
  * Calculate interface topology automatically based on routes.<br/>Relevant only for Virtual Systems.<br/>Do not use for virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#calc_topology_auto ManagementVsxProvisioningTool#calc_topology_auto}
  */
  readonly calcTopologyAuto?: boolean | cdktf.IResolvable;
  /**
  * Main IPv4 Address.<br/>Relevant only if this device is a Virtual System.<br/>Do not use for other virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_address ManagementVsxProvisioningTool#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Number of IPv4 instances for the Virtual System.<br/>Must be greater or equal to 1.<br/>Only relevant for Virtual Systems and Virtual Systems in bridge mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv4_instances ManagementVsxProvisioningTool#ipv4_instances}
  */
  readonly ipv4Instances?: number;
  /**
  * Main IPv6 Address.<br/>Relevant only if this device is a Virtual System.<br/>Do not use for other virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_address ManagementVsxProvisioningTool#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Number of IPv6 instances for the Virtual System.<br/>Only relevant for Virtual Systems and Virtual Systems in bridge mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#ipv6_instances ManagementVsxProvisioningTool#ipv6_instances}
  */
  readonly ipv6Instances?: number;
  /**
  * Name of the Virtual System, Virtual Switch, or Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vd ManagementVsxProvisioningTool#vd}
  */
  readonly vd?: string;
  /**
  * MTU of the Virtual System.<br/>Only relevant for Virtual Systems in bridge mode.<br/>Do not use for other virtual devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#vs_mtu ManagementVsxProvisioningTool#vs_mtu}
  */
  readonly vsMtu?: number;
}

export function managementVsxProvisioningToolSetVdParamsToTerraform(struct?: ManagementVsxProvisioningToolSetVdParamsOutputReference | ManagementVsxProvisioningToolSetVdParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calc_topology_auto: cdktf.booleanToTerraform(struct!.calcTopologyAuto),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_instances: cdktf.numberToTerraform(struct!.ipv4Instances),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_instances: cdktf.numberToTerraform(struct!.ipv6Instances),
    vd: cdktf.stringToTerraform(struct!.vd),
    vs_mtu: cdktf.numberToTerraform(struct!.vsMtu),
  }
}


export function managementVsxProvisioningToolSetVdParamsToHclTerraform(struct?: ManagementVsxProvisioningToolSetVdParamsOutputReference | ManagementVsxProvisioningToolSetVdParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calc_topology_auto: {
      value: cdktf.booleanToHclTerraform(struct!.calcTopologyAuto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_instances: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_instances: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vd: {
      value: cdktf.stringToHclTerraform(struct!.vd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_mtu: {
      value: cdktf.numberToHclTerraform(struct!.vsMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVsxProvisioningToolSetVdParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVsxProvisioningToolSetVdParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calcTopologyAuto !== undefined) {
      hasAnyValues = true;
      internalValueResult.calcTopologyAuto = this._calcTopologyAuto;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Instances = this._ipv4Instances;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6Instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Instances = this._ipv6Instances;
    }
    if (this._vd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vd = this._vd;
    }
    if (this._vsMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsMtu = this._vsMtu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVsxProvisioningToolSetVdParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calcTopologyAuto = undefined;
      this._ipv4Address = undefined;
      this._ipv4Instances = undefined;
      this._ipv6Address = undefined;
      this._ipv6Instances = undefined;
      this._vd = undefined;
      this._vsMtu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calcTopologyAuto = value.calcTopologyAuto;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Instances = value.ipv4Instances;
      this._ipv6Address = value.ipv6Address;
      this._ipv6Instances = value.ipv6Instances;
      this._vd = value.vd;
      this._vsMtu = value.vsMtu;
    }
  }

  // calc_topology_auto - computed: false, optional: true, required: false
  private _calcTopologyAuto?: boolean | cdktf.IResolvable; 
  public get calcTopologyAuto() {
    return this.getBooleanAttribute('calc_topology_auto');
  }
  public set calcTopologyAuto(value: boolean | cdktf.IResolvable) {
    this._calcTopologyAuto = value;
  }
  public resetCalcTopologyAuto() {
    this._calcTopologyAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcTopologyAutoInput() {
    return this._calcTopologyAuto;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_instances - computed: false, optional: true, required: false
  private _ipv4Instances?: number; 
  public get ipv4Instances() {
    return this.getNumberAttribute('ipv4_instances');
  }
  public set ipv4Instances(value: number) {
    this._ipv4Instances = value;
  }
  public resetIpv4Instances() {
    this._ipv4Instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InstancesInput() {
    return this._ipv4Instances;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_instances - computed: false, optional: true, required: false
  private _ipv6Instances?: number; 
  public get ipv6Instances() {
    return this.getNumberAttribute('ipv6_instances');
  }
  public set ipv6Instances(value: number) {
    this._ipv6Instances = value;
  }
  public resetIpv6Instances() {
    this._ipv6Instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InstancesInput() {
    return this._ipv6Instances;
  }

  // vd - computed: false, optional: true, required: false
  private _vd?: string; 
  public get vd() {
    return this.getStringAttribute('vd');
  }
  public set vd(value: string) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }

  // vs_mtu - computed: false, optional: true, required: false
  private _vsMtu?: number; 
  public get vsMtu() {
    return this.getNumberAttribute('vs_mtu');
  }
  public set vsMtu(value: number) {
    this._vsMtu = value;
  }
  public resetVsMtu() {
    this._vsMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsMtuInput() {
    return this._vsMtu;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool checkpoint_management_vsx_provisioning_tool}
*/
export class ManagementVsxProvisioningTool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_vsx_provisioning_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementVsxProvisioningTool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementVsxProvisioningTool to import
  * @param importFromId The id of the existing ManagementVsxProvisioningTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementVsxProvisioningTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_vsx_provisioning_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vsx_provisioning_tool checkpoint_management_vsx_provisioning_tool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementVsxProvisioningToolConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementVsxProvisioningToolConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_vsx_provisioning_tool',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._operation = config.operation;
    this._addPhysicalInterfaceParams.internalValue = config.addPhysicalInterfaceParams;
    this._addRouteParams.internalValue = config.addRouteParams;
    this._addVdInterfaceParams.internalValue = config.addVdInterfaceParams;
    this._addVdParams.internalValue = config.addVdParams;
    this._addVsxClusterParams.internalValue = config.addVsxClusterParams;
    this._addVsxGatewayParams.internalValue = config.addVsxGatewayParams;
    this._attachBridgeParams.internalValue = config.attachBridgeParams;
    this._removePhysicalInterfaceParams.internalValue = config.removePhysicalInterfaceParams;
    this._removeRouteParams.internalValue = config.removeRouteParams;
    this._removeVdInterfaceParams.internalValue = config.removeVdInterfaceParams;
    this._removeVdParams.internalValue = config.removeVdParams;
    this._removeVsxParams.internalValue = config.removeVsxParams;
    this._setPhysicalInterfaceParams.internalValue = config.setPhysicalInterfaceParams;
    this._setVdInterfaceParams.internalValue = config.setVdInterfaceParams;
    this._setVdParams.internalValue = config.setVdParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // add_physical_interface_params - computed: false, optional: true, required: false
  private _addPhysicalInterfaceParams = new ManagementVsxProvisioningToolAddPhysicalInterfaceParamsOutputReference(this, "add_physical_interface_params");
  public get addPhysicalInterfaceParams() {
    return this._addPhysicalInterfaceParams;
  }
  public putAddPhysicalInterfaceParams(value: ManagementVsxProvisioningToolAddPhysicalInterfaceParams) {
    this._addPhysicalInterfaceParams.internalValue = value;
  }
  public resetAddPhysicalInterfaceParams() {
    this._addPhysicalInterfaceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPhysicalInterfaceParamsInput() {
    return this._addPhysicalInterfaceParams.internalValue;
  }

  // add_route_params - computed: false, optional: true, required: false
  private _addRouteParams = new ManagementVsxProvisioningToolAddRouteParamsList(this, "add_route_params", false);
  public get addRouteParams() {
    return this._addRouteParams;
  }
  public putAddRouteParams(value: ManagementVsxProvisioningToolAddRouteParams[] | cdktf.IResolvable) {
    this._addRouteParams.internalValue = value;
  }
  public resetAddRouteParams() {
    this._addRouteParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRouteParamsInput() {
    return this._addRouteParams.internalValue;
  }

  // add_vd_interface_params - computed: false, optional: true, required: false
  private _addVdInterfaceParams = new ManagementVsxProvisioningToolAddVdInterfaceParamsList(this, "add_vd_interface_params", false);
  public get addVdInterfaceParams() {
    return this._addVdInterfaceParams;
  }
  public putAddVdInterfaceParams(value: ManagementVsxProvisioningToolAddVdInterfaceParams[] | cdktf.IResolvable) {
    this._addVdInterfaceParams.internalValue = value;
  }
  public resetAddVdInterfaceParams() {
    this._addVdInterfaceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addVdInterfaceParamsInput() {
    return this._addVdInterfaceParams.internalValue;
  }

  // add_vd_params - computed: false, optional: true, required: false
  private _addVdParams = new ManagementVsxProvisioningToolAddVdParamsOutputReference(this, "add_vd_params");
  public get addVdParams() {
    return this._addVdParams;
  }
  public putAddVdParams(value: ManagementVsxProvisioningToolAddVdParams) {
    this._addVdParams.internalValue = value;
  }
  public resetAddVdParams() {
    this._addVdParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addVdParamsInput() {
    return this._addVdParams.internalValue;
  }

  // add_vsx_cluster_params - computed: false, optional: true, required: false
  private _addVsxClusterParams = new ManagementVsxProvisioningToolAddVsxClusterParamsOutputReference(this, "add_vsx_cluster_params");
  public get addVsxClusterParams() {
    return this._addVsxClusterParams;
  }
  public putAddVsxClusterParams(value: ManagementVsxProvisioningToolAddVsxClusterParams) {
    this._addVsxClusterParams.internalValue = value;
  }
  public resetAddVsxClusterParams() {
    this._addVsxClusterParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addVsxClusterParamsInput() {
    return this._addVsxClusterParams.internalValue;
  }

  // add_vsx_gateway_params - computed: false, optional: true, required: false
  private _addVsxGatewayParams = new ManagementVsxProvisioningToolAddVsxGatewayParamsOutputReference(this, "add_vsx_gateway_params");
  public get addVsxGatewayParams() {
    return this._addVsxGatewayParams;
  }
  public putAddVsxGatewayParams(value: ManagementVsxProvisioningToolAddVsxGatewayParams) {
    this._addVsxGatewayParams.internalValue = value;
  }
  public resetAddVsxGatewayParams() {
    this._addVsxGatewayParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addVsxGatewayParamsInput() {
    return this._addVsxGatewayParams.internalValue;
  }

  // attach_bridge_params - computed: false, optional: true, required: false
  private _attachBridgeParams = new ManagementVsxProvisioningToolAttachBridgeParamsOutputReference(this, "attach_bridge_params");
  public get attachBridgeParams() {
    return this._attachBridgeParams;
  }
  public putAttachBridgeParams(value: ManagementVsxProvisioningToolAttachBridgeParams) {
    this._attachBridgeParams.internalValue = value;
  }
  public resetAttachBridgeParams() {
    this._attachBridgeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachBridgeParamsInput() {
    return this._attachBridgeParams.internalValue;
  }

  // remove_physical_interface_params - computed: false, optional: true, required: false
  private _removePhysicalInterfaceParams = new ManagementVsxProvisioningToolRemovePhysicalInterfaceParamsOutputReference(this, "remove_physical_interface_params");
  public get removePhysicalInterfaceParams() {
    return this._removePhysicalInterfaceParams;
  }
  public putRemovePhysicalInterfaceParams(value: ManagementVsxProvisioningToolRemovePhysicalInterfaceParams) {
    this._removePhysicalInterfaceParams.internalValue = value;
  }
  public resetRemovePhysicalInterfaceParams() {
    this._removePhysicalInterfaceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePhysicalInterfaceParamsInput() {
    return this._removePhysicalInterfaceParams.internalValue;
  }

  // remove_route_params - computed: false, optional: true, required: false
  private _removeRouteParams = new ManagementVsxProvisioningToolRemoveRouteParamsOutputReference(this, "remove_route_params");
  public get removeRouteParams() {
    return this._removeRouteParams;
  }
  public putRemoveRouteParams(value: ManagementVsxProvisioningToolRemoveRouteParams) {
    this._removeRouteParams.internalValue = value;
  }
  public resetRemoveRouteParams() {
    this._removeRouteParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeRouteParamsInput() {
    return this._removeRouteParams.internalValue;
  }

  // remove_vd_interface_params - computed: false, optional: true, required: false
  private _removeVdInterfaceParams = new ManagementVsxProvisioningToolRemoveVdInterfaceParamsOutputReference(this, "remove_vd_interface_params");
  public get removeVdInterfaceParams() {
    return this._removeVdInterfaceParams;
  }
  public putRemoveVdInterfaceParams(value: ManagementVsxProvisioningToolRemoveVdInterfaceParams) {
    this._removeVdInterfaceParams.internalValue = value;
  }
  public resetRemoveVdInterfaceParams() {
    this._removeVdInterfaceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVdInterfaceParamsInput() {
    return this._removeVdInterfaceParams.internalValue;
  }

  // remove_vd_params - computed: false, optional: true, required: false
  private _removeVdParams = new ManagementVsxProvisioningToolRemoveVdParamsOutputReference(this, "remove_vd_params");
  public get removeVdParams() {
    return this._removeVdParams;
  }
  public putRemoveVdParams(value: ManagementVsxProvisioningToolRemoveVdParams) {
    this._removeVdParams.internalValue = value;
  }
  public resetRemoveVdParams() {
    this._removeVdParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVdParamsInput() {
    return this._removeVdParams.internalValue;
  }

  // remove_vsx_params - computed: false, optional: true, required: false
  private _removeVsxParams = new ManagementVsxProvisioningToolRemoveVsxParamsOutputReference(this, "remove_vsx_params");
  public get removeVsxParams() {
    return this._removeVsxParams;
  }
  public putRemoveVsxParams(value: ManagementVsxProvisioningToolRemoveVsxParams) {
    this._removeVsxParams.internalValue = value;
  }
  public resetRemoveVsxParams() {
    this._removeVsxParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVsxParamsInput() {
    return this._removeVsxParams.internalValue;
  }

  // set_physical_interface_params - computed: false, optional: true, required: false
  private _setPhysicalInterfaceParams = new ManagementVsxProvisioningToolSetPhysicalInterfaceParamsOutputReference(this, "set_physical_interface_params");
  public get setPhysicalInterfaceParams() {
    return this._setPhysicalInterfaceParams;
  }
  public putSetPhysicalInterfaceParams(value: ManagementVsxProvisioningToolSetPhysicalInterfaceParams) {
    this._setPhysicalInterfaceParams.internalValue = value;
  }
  public resetSetPhysicalInterfaceParams() {
    this._setPhysicalInterfaceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPhysicalInterfaceParamsInput() {
    return this._setPhysicalInterfaceParams.internalValue;
  }

  // set_vd_interface_params - computed: false, optional: true, required: false
  private _setVdInterfaceParams = new ManagementVsxProvisioningToolSetVdInterfaceParamsOutputReference(this, "set_vd_interface_params");
  public get setVdInterfaceParams() {
    return this._setVdInterfaceParams;
  }
  public putSetVdInterfaceParams(value: ManagementVsxProvisioningToolSetVdInterfaceParams) {
    this._setVdInterfaceParams.internalValue = value;
  }
  public resetSetVdInterfaceParams() {
    this._setVdInterfaceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVdInterfaceParamsInput() {
    return this._setVdInterfaceParams.internalValue;
  }

  // set_vd_params - computed: false, optional: true, required: false
  private _setVdParams = new ManagementVsxProvisioningToolSetVdParamsOutputReference(this, "set_vd_params");
  public get setVdParams() {
    return this._setVdParams;
  }
  public putSetVdParams(value: ManagementVsxProvisioningToolSetVdParams) {
    this._setVdParams.internalValue = value;
  }
  public resetSetVdParams() {
    this._setVdParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVdParamsInput() {
    return this._setVdParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      operation: cdktf.stringToTerraform(this._operation),
      add_physical_interface_params: managementVsxProvisioningToolAddPhysicalInterfaceParamsToTerraform(this._addPhysicalInterfaceParams.internalValue),
      add_route_params: cdktf.listMapper(managementVsxProvisioningToolAddRouteParamsToTerraform, true)(this._addRouteParams.internalValue),
      add_vd_interface_params: cdktf.listMapper(managementVsxProvisioningToolAddVdInterfaceParamsToTerraform, true)(this._addVdInterfaceParams.internalValue),
      add_vd_params: managementVsxProvisioningToolAddVdParamsToTerraform(this._addVdParams.internalValue),
      add_vsx_cluster_params: managementVsxProvisioningToolAddVsxClusterParamsToTerraform(this._addVsxClusterParams.internalValue),
      add_vsx_gateway_params: managementVsxProvisioningToolAddVsxGatewayParamsToTerraform(this._addVsxGatewayParams.internalValue),
      attach_bridge_params: managementVsxProvisioningToolAttachBridgeParamsToTerraform(this._attachBridgeParams.internalValue),
      remove_physical_interface_params: managementVsxProvisioningToolRemovePhysicalInterfaceParamsToTerraform(this._removePhysicalInterfaceParams.internalValue),
      remove_route_params: managementVsxProvisioningToolRemoveRouteParamsToTerraform(this._removeRouteParams.internalValue),
      remove_vd_interface_params: managementVsxProvisioningToolRemoveVdInterfaceParamsToTerraform(this._removeVdInterfaceParams.internalValue),
      remove_vd_params: managementVsxProvisioningToolRemoveVdParamsToTerraform(this._removeVdParams.internalValue),
      remove_vsx_params: managementVsxProvisioningToolRemoveVsxParamsToTerraform(this._removeVsxParams.internalValue),
      set_physical_interface_params: managementVsxProvisioningToolSetPhysicalInterfaceParamsToTerraform(this._setPhysicalInterfaceParams.internalValue),
      set_vd_interface_params: managementVsxProvisioningToolSetVdInterfaceParamsToTerraform(this._setVdInterfaceParams.internalValue),
      set_vd_params: managementVsxProvisioningToolSetVdParamsToTerraform(this._setVdParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation: {
        value: cdktf.stringToHclTerraform(this._operation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_physical_interface_params: {
        value: managementVsxProvisioningToolAddPhysicalInterfaceParamsToHclTerraform(this._addPhysicalInterfaceParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolAddPhysicalInterfaceParamsList",
      },
      add_route_params: {
        value: cdktf.listMapperHcl(managementVsxProvisioningToolAddRouteParamsToHclTerraform, true)(this._addRouteParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolAddRouteParamsList",
      },
      add_vd_interface_params: {
        value: cdktf.listMapperHcl(managementVsxProvisioningToolAddVdInterfaceParamsToHclTerraform, true)(this._addVdInterfaceParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolAddVdInterfaceParamsList",
      },
      add_vd_params: {
        value: managementVsxProvisioningToolAddVdParamsToHclTerraform(this._addVdParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolAddVdParamsList",
      },
      add_vsx_cluster_params: {
        value: managementVsxProvisioningToolAddVsxClusterParamsToHclTerraform(this._addVsxClusterParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolAddVsxClusterParamsList",
      },
      add_vsx_gateway_params: {
        value: managementVsxProvisioningToolAddVsxGatewayParamsToHclTerraform(this._addVsxGatewayParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolAddVsxGatewayParamsList",
      },
      attach_bridge_params: {
        value: managementVsxProvisioningToolAttachBridgeParamsToHclTerraform(this._attachBridgeParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolAttachBridgeParamsList",
      },
      remove_physical_interface_params: {
        value: managementVsxProvisioningToolRemovePhysicalInterfaceParamsToHclTerraform(this._removePhysicalInterfaceParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolRemovePhysicalInterfaceParamsList",
      },
      remove_route_params: {
        value: managementVsxProvisioningToolRemoveRouteParamsToHclTerraform(this._removeRouteParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolRemoveRouteParamsList",
      },
      remove_vd_interface_params: {
        value: managementVsxProvisioningToolRemoveVdInterfaceParamsToHclTerraform(this._removeVdInterfaceParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolRemoveVdInterfaceParamsList",
      },
      remove_vd_params: {
        value: managementVsxProvisioningToolRemoveVdParamsToHclTerraform(this._removeVdParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolRemoveVdParamsList",
      },
      remove_vsx_params: {
        value: managementVsxProvisioningToolRemoveVsxParamsToHclTerraform(this._removeVsxParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolRemoveVsxParamsList",
      },
      set_physical_interface_params: {
        value: managementVsxProvisioningToolSetPhysicalInterfaceParamsToHclTerraform(this._setPhysicalInterfaceParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolSetPhysicalInterfaceParamsList",
      },
      set_vd_interface_params: {
        value: managementVsxProvisioningToolSetVdInterfaceParamsToHclTerraform(this._setVdInterfaceParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolSetVdInterfaceParamsList",
      },
      set_vd_params: {
        value: managementVsxProvisioningToolSetVdParamsToHclTerraform(this._setVdParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVsxProvisioningToolSetVdParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
