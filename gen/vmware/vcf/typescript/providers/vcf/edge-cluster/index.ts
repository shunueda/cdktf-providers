// https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrator password for the NSX manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#admin_password EdgeCluster#admin_password}
  */
  readonly adminPassword: string;
  /**
  * ASN for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#asn EdgeCluster#asn}
  */
  readonly asn?: string;
  /**
  * Audit user password for the NSX manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#audit_password EdgeCluster#audit_password}
  */
  readonly auditPassword: string;
  /**
  * One among: XLARGE, LARGE, MEDIUM, SMALL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#form_factor EdgeCluster#form_factor}
  */
  readonly formFactor: string;
  /**
  * One among: ACTIVE_ACTIVE, ACTIVE_STANDBY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#high_availability EdgeCluster#high_availability}
  */
  readonly highAvailability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#id EdgeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Subnet addresses in CIDR notation that are used to assign addresses to logical links connecting service routers and distributed routers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#internal_transit_subnets EdgeCluster#internal_transit_subnets}
  */
  readonly internalTransitSubnets?: string[];
  /**
  * Maximum transmission unit size for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#mtu EdgeCluster#mtu}
  */
  readonly mtu: number;
  /**
  * The name of the edge cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#name EdgeCluster#name}
  */
  readonly name: string;
  /**
  * One among: DEFAULT, CUSTOM. If set to CUSTOM a 'profile' must be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#profile_type EdgeCluster#profile_type}
  */
  readonly profileType: string;
  /**
  * Root user password for the NSX manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#root_password EdgeCluster#root_password}
  */
  readonly rootPassword: string;
  /**
  * One among: EBGP, STATIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#routing_type EdgeCluster#routing_type}
  */
  readonly routingType?: string;
  /**
  * Set to true to bypass normal ICMP-based check of Edge TEP / host TEP routability (default is false, meaning do check)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#skip_tep_routability_check EdgeCluster#skip_tep_routability_check}
  */
  readonly skipTepRoutabilityCheck?: boolean | cdktf.IResolvable;
  /**
  * Name for the Tier-0 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#tier0_name EdgeCluster#tier0_name}
  */
  readonly tier0Name?: string;
  /**
  * Name for the Tier-1 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#tier1_name EdgeCluster#tier1_name}
  */
  readonly tier1Name?: string;
  /**
  * Select whether Tier-1 being created per this spec is hosted on the new Edge cluster or not (default value is false, meaning hosted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#tier1_unhosted EdgeCluster#tier1_unhosted}
  */
  readonly tier1Unhosted?: boolean | cdktf.IResolvable;
  /**
  * Transit subnet addresses in CIDR notation that are used to assign addresses to logical links connecting Tier-0 and Tier-1s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#transit_subnets EdgeCluster#transit_subnets}
  */
  readonly transitSubnets?: string[];
  /**
  * edge_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#edge_node EdgeCluster#edge_node}
  */
  readonly edgeNode: EdgeClusterEdgeNode[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#profile EdgeCluster#profile}
  */
  readonly profile?: EdgeClusterProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#timeouts EdgeCluster#timeouts}
  */
  readonly timeouts?: EdgeClusterTimeouts;
}
export interface EdgeClusterEdgeNodeManagementNetwork {
  /**
  * The name of the portgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#portgroup_name EdgeCluster#portgroup_name}
  */
  readonly portgroupName: string;
  /**
  * The VLAN ID for the portgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#vlan_id EdgeCluster#vlan_id}
  */
  readonly vlanId: number;
}

export function edgeClusterEdgeNodeManagementNetworkToTerraform(struct?: EdgeClusterEdgeNodeManagementNetworkOutputReference | EdgeClusterEdgeNodeManagementNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    portgroup_name: cdktf.stringToTerraform(struct!.portgroupName),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function edgeClusterEdgeNodeManagementNetworkToHclTerraform(struct?: EdgeClusterEdgeNodeManagementNetworkOutputReference | EdgeClusterEdgeNodeManagementNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    portgroup_name: {
      value: cdktf.stringToHclTerraform(struct!.portgroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeClusterEdgeNodeManagementNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeClusterEdgeNodeManagementNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portgroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portgroupName = this._portgroupName;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeClusterEdgeNodeManagementNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portgroupName = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portgroupName = value.portgroupName;
      this._vlanId = value.vlanId;
    }
  }

  // portgroup_name - computed: false, optional: false, required: true
  private _portgroupName?: string; 
  public get portgroupName() {
    return this.getStringAttribute('portgroup_name');
  }
  public set portgroupName(value: string) {
    this._portgroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portgroupNameInput() {
    return this._portgroupName;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface EdgeClusterEdgeNodeUplinkBgpPeer {
  /**
  * ASN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#asn EdgeCluster#asn}
  */
  readonly asn: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#ip EdgeCluster#ip}
  */
  readonly ip: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#password EdgeCluster#password}
  */
  readonly password: string;
}

export function edgeClusterEdgeNodeUplinkBgpPeerToTerraform(struct?: EdgeClusterEdgeNodeUplinkBgpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.stringToTerraform(struct!.asn),
    ip: cdktf.stringToTerraform(struct!.ip),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function edgeClusterEdgeNodeUplinkBgpPeerToHclTerraform(struct?: EdgeClusterEdgeNodeUplinkBgpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeClusterEdgeNodeUplinkBgpPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeClusterEdgeNodeUplinkBgpPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeClusterEdgeNodeUplinkBgpPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._ip = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._ip = value.ip;
      this._password = value.password;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class EdgeClusterEdgeNodeUplinkBgpPeerList extends cdktf.ComplexList {
  public internalValue? : EdgeClusterEdgeNodeUplinkBgpPeer[] | cdktf.IResolvable

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
  public get(index: number): EdgeClusterEdgeNodeUplinkBgpPeerOutputReference {
    return new EdgeClusterEdgeNodeUplinkBgpPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeClusterEdgeNodeUplink {
  /**
  * The IP address (CIDR) for the distributed switch uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#interface_ip EdgeCluster#interface_ip}
  */
  readonly interfaceIp: string;
  /**
  * The VLAN ID for the distributed switch uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#vlan EdgeCluster#vlan}
  */
  readonly vlan: number;
  /**
  * bgp_peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#bgp_peer EdgeCluster#bgp_peer}
  */
  readonly bgpPeer: EdgeClusterEdgeNodeUplinkBgpPeer[] | cdktf.IResolvable;
}

export function edgeClusterEdgeNodeUplinkToTerraform(struct?: EdgeClusterEdgeNodeUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip: cdktf.stringToTerraform(struct!.interfaceIp),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    bgp_peer: cdktf.listMapper(edgeClusterEdgeNodeUplinkBgpPeerToTerraform, true)(struct!.bgpPeer),
  }
}


export function edgeClusterEdgeNodeUplinkToHclTerraform(struct?: EdgeClusterEdgeNodeUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip: {
      value: cdktf.stringToHclTerraform(struct!.interfaceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_peer: {
      value: cdktf.listMapperHcl(edgeClusterEdgeNodeUplinkBgpPeerToHclTerraform, true)(struct!.bgpPeer),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeClusterEdgeNodeUplinkBgpPeerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeClusterEdgeNodeUplinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeClusterEdgeNodeUplink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIp = this._interfaceIp;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._bgpPeer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeer = this._bgpPeer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeClusterEdgeNodeUplink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceIp = undefined;
      this._vlan = undefined;
      this._bgpPeer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceIp = value.interfaceIp;
      this._vlan = value.vlan;
      this._bgpPeer.internalValue = value.bgpPeer;
    }
  }

  // interface_ip - computed: false, optional: false, required: true
  private _interfaceIp?: string; 
  public get interfaceIp() {
    return this.getStringAttribute('interface_ip');
  }
  public set interfaceIp(value: string) {
    this._interfaceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpInput() {
    return this._interfaceIp;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // bgp_peer - computed: false, optional: false, required: true
  private _bgpPeer = new EdgeClusterEdgeNodeUplinkBgpPeerList(this, "bgp_peer", false);
  public get bgpPeer() {
    return this._bgpPeer;
  }
  public putBgpPeer(value: EdgeClusterEdgeNodeUplinkBgpPeer[] | cdktf.IResolvable) {
    this._bgpPeer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerInput() {
    return this._bgpPeer.internalValue;
  }
}

export class EdgeClusterEdgeNodeUplinkList extends cdktf.ComplexList {
  public internalValue? : EdgeClusterEdgeNodeUplink[] | cdktf.IResolvable

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
  public get(index: number): EdgeClusterEdgeNodeUplinkOutputReference {
    return new EdgeClusterEdgeNodeUplinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeClusterEdgeNode {
  /**
  * The administrator password for the edge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#admin_password EdgeCluster#admin_password}
  */
  readonly adminPassword: string;
  /**
  * The audit password for the edge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#audit_password EdgeCluster#audit_password}
  */
  readonly auditPassword: string;
  /**
  * The id of the compute cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#compute_cluster_id EdgeCluster#compute_cluster_id}
  */
  readonly computeClusterId?: string;
  /**
  * The name of the compute cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#compute_cluster_name EdgeCluster#compute_cluster_name}
  */
  readonly computeClusterName?: string;
  /**
  * The name of the first NSX-enabled VDS uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#first_nsx_vds_uplink EdgeCluster#first_nsx_vds_uplink}
  */
  readonly firstNsxVdsUplink?: string;
  /**
  * Whether or not this is an inter-rack cluster. True for L2 non-uniform and L3, false for L2 uniform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#inter_rack_cluster EdgeCluster#inter_rack_cluster}
  */
  readonly interRackCluster: boolean | cdktf.IResolvable;
  /**
  * The gateway address for the management network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#management_gateway EdgeCluster#management_gateway}
  */
  readonly managementGateway: string;
  /**
  * The IP address (CIDR) for the management network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#management_ip EdgeCluster#management_ip}
  */
  readonly managementIp: string;
  /**
  * The name of the edge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#name EdgeCluster#name}
  */
  readonly name: string;
  /**
  * The root user password for the edge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#root_password EdgeCluster#root_password}
  */
  readonly rootPassword: string;
  /**
  * The name of the second NSX-enabled VDS uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#second_nsx_vds_uplink EdgeCluster#second_nsx_vds_uplink}
  */
  readonly secondNsxVdsUplink?: string;
  /**
  * The IP address (CIDR) of the first tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#tep1_ip EdgeCluster#tep1_ip}
  */
  readonly tep1Ip: string;
  /**
  * The IP address (CIDR) of the second tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#tep2_ip EdgeCluster#tep2_ip}
  */
  readonly tep2Ip: string;
  /**
  * The gateway for the tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#tep_gateway EdgeCluster#tep_gateway}
  */
  readonly tepGateway: string;
  /**
  * The VLAN ID for the tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#tep_vlan EdgeCluster#tep_vlan}
  */
  readonly tepVlan: number;
  /**
  * management_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#management_network EdgeCluster#management_network}
  */
  readonly managementNetwork?: EdgeClusterEdgeNodeManagementNetwork;
  /**
  * uplink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#uplink EdgeCluster#uplink}
  */
  readonly uplink?: EdgeClusterEdgeNodeUplink[] | cdktf.IResolvable;
}

export function edgeClusterEdgeNodeToTerraform(struct?: EdgeClusterEdgeNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    audit_password: cdktf.stringToTerraform(struct!.auditPassword),
    compute_cluster_id: cdktf.stringToTerraform(struct!.computeClusterId),
    compute_cluster_name: cdktf.stringToTerraform(struct!.computeClusterName),
    first_nsx_vds_uplink: cdktf.stringToTerraform(struct!.firstNsxVdsUplink),
    inter_rack_cluster: cdktf.booleanToTerraform(struct!.interRackCluster),
    management_gateway: cdktf.stringToTerraform(struct!.managementGateway),
    management_ip: cdktf.stringToTerraform(struct!.managementIp),
    name: cdktf.stringToTerraform(struct!.name),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
    second_nsx_vds_uplink: cdktf.stringToTerraform(struct!.secondNsxVdsUplink),
    tep1_ip: cdktf.stringToTerraform(struct!.tep1Ip),
    tep2_ip: cdktf.stringToTerraform(struct!.tep2Ip),
    tep_gateway: cdktf.stringToTerraform(struct!.tepGateway),
    tep_vlan: cdktf.numberToTerraform(struct!.tepVlan),
    management_network: edgeClusterEdgeNodeManagementNetworkToTerraform(struct!.managementNetwork),
    uplink: cdktf.listMapper(edgeClusterEdgeNodeUplinkToTerraform, true)(struct!.uplink),
  }
}


export function edgeClusterEdgeNodeToHclTerraform(struct?: EdgeClusterEdgeNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_password: {
      value: cdktf.stringToHclTerraform(struct!.auditPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.computeClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.computeClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_nsx_vds_uplink: {
      value: cdktf.stringToHclTerraform(struct!.firstNsxVdsUplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inter_rack_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.interRackCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    management_gateway: {
      value: cdktf.stringToHclTerraform(struct!.managementGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementIp),
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
    root_password: {
      value: cdktf.stringToHclTerraform(struct!.rootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    second_nsx_vds_uplink: {
      value: cdktf.stringToHclTerraform(struct!.secondNsxVdsUplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tep1_ip: {
      value: cdktf.stringToHclTerraform(struct!.tep1Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tep2_ip: {
      value: cdktf.stringToHclTerraform(struct!.tep2Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tep_gateway: {
      value: cdktf.stringToHclTerraform(struct!.tepGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tep_vlan: {
      value: cdktf.numberToHclTerraform(struct!.tepVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_network: {
      value: edgeClusterEdgeNodeManagementNetworkToHclTerraform(struct!.managementNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeClusterEdgeNodeManagementNetworkList",
    },
    uplink: {
      value: cdktf.listMapperHcl(edgeClusterEdgeNodeUplinkToHclTerraform, true)(struct!.uplink),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeClusterEdgeNodeUplinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeClusterEdgeNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeClusterEdgeNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._auditPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditPassword = this._auditPassword;
    }
    if (this._computeClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeClusterId = this._computeClusterId;
    }
    if (this._computeClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeClusterName = this._computeClusterName;
    }
    if (this._firstNsxVdsUplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstNsxVdsUplink = this._firstNsxVdsUplink;
    }
    if (this._interRackCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.interRackCluster = this._interRackCluster;
    }
    if (this._managementGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementGateway = this._managementGateway;
    }
    if (this._managementIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIp = this._managementIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    if (this._secondNsxVdsUplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondNsxVdsUplink = this._secondNsxVdsUplink;
    }
    if (this._tep1Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tep1Ip = this._tep1Ip;
    }
    if (this._tep2Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tep2Ip = this._tep2Ip;
    }
    if (this._tepGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.tepGateway = this._tepGateway;
    }
    if (this._tepVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tepVlan = this._tepVlan;
    }
    if (this._managementNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementNetwork = this._managementNetwork?.internalValue;
    }
    if (this._uplink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeClusterEdgeNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._auditPassword = undefined;
      this._computeClusterId = undefined;
      this._computeClusterName = undefined;
      this._firstNsxVdsUplink = undefined;
      this._interRackCluster = undefined;
      this._managementGateway = undefined;
      this._managementIp = undefined;
      this._name = undefined;
      this._rootPassword = undefined;
      this._secondNsxVdsUplink = undefined;
      this._tep1Ip = undefined;
      this._tep2Ip = undefined;
      this._tepGateway = undefined;
      this._tepVlan = undefined;
      this._managementNetwork.internalValue = undefined;
      this._uplink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPassword = value.adminPassword;
      this._auditPassword = value.auditPassword;
      this._computeClusterId = value.computeClusterId;
      this._computeClusterName = value.computeClusterName;
      this._firstNsxVdsUplink = value.firstNsxVdsUplink;
      this._interRackCluster = value.interRackCluster;
      this._managementGateway = value.managementGateway;
      this._managementIp = value.managementIp;
      this._name = value.name;
      this._rootPassword = value.rootPassword;
      this._secondNsxVdsUplink = value.secondNsxVdsUplink;
      this._tep1Ip = value.tep1Ip;
      this._tep2Ip = value.tep2Ip;
      this._tepGateway = value.tepGateway;
      this._tepVlan = value.tepVlan;
      this._managementNetwork.internalValue = value.managementNetwork;
      this._uplink.internalValue = value.uplink;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // audit_password - computed: false, optional: false, required: true
  private _auditPassword?: string; 
  public get auditPassword() {
    return this.getStringAttribute('audit_password');
  }
  public set auditPassword(value: string) {
    this._auditPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditPasswordInput() {
    return this._auditPassword;
  }

  // compute_cluster_id - computed: true, optional: true, required: false
  private _computeClusterId?: string; 
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }
  public set computeClusterId(value: string) {
    this._computeClusterId = value;
  }
  public resetComputeClusterId() {
    this._computeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterIdInput() {
    return this._computeClusterId;
  }

  // compute_cluster_name - computed: true, optional: true, required: false
  private _computeClusterName?: string; 
  public get computeClusterName() {
    return this.getStringAttribute('compute_cluster_name');
  }
  public set computeClusterName(value: string) {
    this._computeClusterName = value;
  }
  public resetComputeClusterName() {
    this._computeClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterNameInput() {
    return this._computeClusterName;
  }

  // first_nsx_vds_uplink - computed: false, optional: true, required: false
  private _firstNsxVdsUplink?: string; 
  public get firstNsxVdsUplink() {
    return this.getStringAttribute('first_nsx_vds_uplink');
  }
  public set firstNsxVdsUplink(value: string) {
    this._firstNsxVdsUplink = value;
  }
  public resetFirstNsxVdsUplink() {
    this._firstNsxVdsUplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNsxVdsUplinkInput() {
    return this._firstNsxVdsUplink;
  }

  // inter_rack_cluster - computed: false, optional: false, required: true
  private _interRackCluster?: boolean | cdktf.IResolvable; 
  public get interRackCluster() {
    return this.getBooleanAttribute('inter_rack_cluster');
  }
  public set interRackCluster(value: boolean | cdktf.IResolvable) {
    this._interRackCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interRackClusterInput() {
    return this._interRackCluster;
  }

  // management_gateway - computed: false, optional: false, required: true
  private _managementGateway?: string; 
  public get managementGateway() {
    return this.getStringAttribute('management_gateway');
  }
  public set managementGateway(value: string) {
    this._managementGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGatewayInput() {
    return this._managementGateway;
  }

  // management_ip - computed: false, optional: false, required: true
  private _managementIp?: string; 
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }
  public set managementIp(value: string) {
    this._managementIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpInput() {
    return this._managementIp;
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

  // root_password - computed: false, optional: false, required: true
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // second_nsx_vds_uplink - computed: false, optional: true, required: false
  private _secondNsxVdsUplink?: string; 
  public get secondNsxVdsUplink() {
    return this.getStringAttribute('second_nsx_vds_uplink');
  }
  public set secondNsxVdsUplink(value: string) {
    this._secondNsxVdsUplink = value;
  }
  public resetSecondNsxVdsUplink() {
    this._secondNsxVdsUplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondNsxVdsUplinkInput() {
    return this._secondNsxVdsUplink;
  }

  // tep1_ip - computed: false, optional: false, required: true
  private _tep1Ip?: string; 
  public get tep1Ip() {
    return this.getStringAttribute('tep1_ip');
  }
  public set tep1Ip(value: string) {
    this._tep1Ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tep1IpInput() {
    return this._tep1Ip;
  }

  // tep2_ip - computed: false, optional: false, required: true
  private _tep2Ip?: string; 
  public get tep2Ip() {
    return this.getStringAttribute('tep2_ip');
  }
  public set tep2Ip(value: string) {
    this._tep2Ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tep2IpInput() {
    return this._tep2Ip;
  }

  // tep_gateway - computed: false, optional: false, required: true
  private _tepGateway?: string; 
  public get tepGateway() {
    return this.getStringAttribute('tep_gateway');
  }
  public set tepGateway(value: string) {
    this._tepGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tepGatewayInput() {
    return this._tepGateway;
  }

  // tep_vlan - computed: false, optional: false, required: true
  private _tepVlan?: number; 
  public get tepVlan() {
    return this.getNumberAttribute('tep_vlan');
  }
  public set tepVlan(value: number) {
    this._tepVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tepVlanInput() {
    return this._tepVlan;
  }

  // management_network - computed: false, optional: true, required: false
  private _managementNetwork = new EdgeClusterEdgeNodeManagementNetworkOutputReference(this, "management_network");
  public get managementNetwork() {
    return this._managementNetwork;
  }
  public putManagementNetwork(value: EdgeClusterEdgeNodeManagementNetwork) {
    this._managementNetwork.internalValue = value;
  }
  public resetManagementNetwork() {
    this._managementNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementNetworkInput() {
    return this._managementNetwork.internalValue;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink = new EdgeClusterEdgeNodeUplinkList(this, "uplink", false);
  public get uplink() {
    return this._uplink;
  }
  public putUplink(value: EdgeClusterEdgeNodeUplink[] | cdktf.IResolvable) {
    this._uplink.internalValue = value;
  }
  public resetUplink() {
    this._uplink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink.internalValue;
  }
}

export class EdgeClusterEdgeNodeList extends cdktf.ComplexList {
  public internalValue? : EdgeClusterEdgeNode[] | cdktf.IResolvable

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
  public get(index: number): EdgeClusterEdgeNodeOutputReference {
    return new EdgeClusterEdgeNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeClusterProfile {
  /**
  * BFD allowed hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#bfd_allowed_hop EdgeCluster#bfd_allowed_hop}
  */
  readonly bfdAllowedHop: number;
  /**
  * BFD declare dead multiple
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#bfd_declare_dead_multiple EdgeCluster#bfd_declare_dead_multiple}
  */
  readonly bfdDeclareDeadMultiple: number;
  /**
  * BFD probe interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#bfd_probe_interval EdgeCluster#bfd_probe_interval}
  */
  readonly bfdProbeInterval: number;
  /**
  * The name of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#name EdgeCluster#name}
  */
  readonly name: string;
  /**
  * Standby relocation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#standby_relocation_threshold EdgeCluster#standby_relocation_threshold}
  */
  readonly standbyRelocationThreshold: number;
}

export function edgeClusterProfileToTerraform(struct?: EdgeClusterProfileOutputReference | EdgeClusterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_allowed_hop: cdktf.numberToTerraform(struct!.bfdAllowedHop),
    bfd_declare_dead_multiple: cdktf.numberToTerraform(struct!.bfdDeclareDeadMultiple),
    bfd_probe_interval: cdktf.numberToTerraform(struct!.bfdProbeInterval),
    name: cdktf.stringToTerraform(struct!.name),
    standby_relocation_threshold: cdktf.numberToTerraform(struct!.standbyRelocationThreshold),
  }
}


export function edgeClusterProfileToHclTerraform(struct?: EdgeClusterProfileOutputReference | EdgeClusterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_allowed_hop: {
      value: cdktf.numberToHclTerraform(struct!.bfdAllowedHop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_declare_dead_multiple: {
      value: cdktf.numberToHclTerraform(struct!.bfdDeclareDeadMultiple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_probe_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdProbeInterval),
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
    standby_relocation_threshold: {
      value: cdktf.numberToHclTerraform(struct!.standbyRelocationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeClusterProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeClusterProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdAllowedHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdAllowedHop = this._bfdAllowedHop;
    }
    if (this._bfdDeclareDeadMultiple !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdDeclareDeadMultiple = this._bfdDeclareDeadMultiple;
    }
    if (this._bfdProbeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdProbeInterval = this._bfdProbeInterval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._standbyRelocationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyRelocationThreshold = this._standbyRelocationThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeClusterProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfdAllowedHop = undefined;
      this._bfdDeclareDeadMultiple = undefined;
      this._bfdProbeInterval = undefined;
      this._name = undefined;
      this._standbyRelocationThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfdAllowedHop = value.bfdAllowedHop;
      this._bfdDeclareDeadMultiple = value.bfdDeclareDeadMultiple;
      this._bfdProbeInterval = value.bfdProbeInterval;
      this._name = value.name;
      this._standbyRelocationThreshold = value.standbyRelocationThreshold;
    }
  }

  // bfd_allowed_hop - computed: false, optional: false, required: true
  private _bfdAllowedHop?: number; 
  public get bfdAllowedHop() {
    return this.getNumberAttribute('bfd_allowed_hop');
  }
  public set bfdAllowedHop(value: number) {
    this._bfdAllowedHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdAllowedHopInput() {
    return this._bfdAllowedHop;
  }

  // bfd_declare_dead_multiple - computed: false, optional: false, required: true
  private _bfdDeclareDeadMultiple?: number; 
  public get bfdDeclareDeadMultiple() {
    return this.getNumberAttribute('bfd_declare_dead_multiple');
  }
  public set bfdDeclareDeadMultiple(value: number) {
    this._bfdDeclareDeadMultiple = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDeclareDeadMultipleInput() {
    return this._bfdDeclareDeadMultiple;
  }

  // bfd_probe_interval - computed: false, optional: false, required: true
  private _bfdProbeInterval?: number; 
  public get bfdProbeInterval() {
    return this.getNumberAttribute('bfd_probe_interval');
  }
  public set bfdProbeInterval(value: number) {
    this._bfdProbeInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdProbeIntervalInput() {
    return this._bfdProbeInterval;
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

  // standby_relocation_threshold - computed: false, optional: false, required: true
  private _standbyRelocationThreshold?: number; 
  public get standbyRelocationThreshold() {
    return this.getNumberAttribute('standby_relocation_threshold');
  }
  public set standbyRelocationThreshold(value: number) {
    this._standbyRelocationThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyRelocationThresholdInput() {
    return this._standbyRelocationThreshold;
  }
}
export interface EdgeClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#create EdgeCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#update EdgeCluster#update}
  */
  readonly update?: string;
}

export function edgeClusterTimeoutsToTerraform(struct?: EdgeClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function edgeClusterTimeoutsToHclTerraform(struct?: EdgeClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EdgeClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster vcf_edge_cluster}
*/
export class EdgeCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcf_edge_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeCluster to import
  * @param importFromId The id of the existing EdgeCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcf_edge_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/edge_cluster vcf_edge_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'vcf_edge_cluster',
      terraformGeneratorMetadata: {
        providerName: 'vcf',
        providerVersion: '0.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._asn = config.asn;
    this._auditPassword = config.auditPassword;
    this._formFactor = config.formFactor;
    this._highAvailability = config.highAvailability;
    this._id = config.id;
    this._internalTransitSubnets = config.internalTransitSubnets;
    this._mtu = config.mtu;
    this._name = config.name;
    this._profileType = config.profileType;
    this._rootPassword = config.rootPassword;
    this._routingType = config.routingType;
    this._skipTepRoutabilityCheck = config.skipTepRoutabilityCheck;
    this._tier0Name = config.tier0Name;
    this._tier1Name = config.tier1Name;
    this._tier1Unhosted = config.tier1Unhosted;
    this._transitSubnets = config.transitSubnets;
    this._edgeNode.internalValue = config.edgeNode;
    this._profile.internalValue = config.profile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // audit_password - computed: false, optional: false, required: true
  private _auditPassword?: string; 
  public get auditPassword() {
    return this.getStringAttribute('audit_password');
  }
  public set auditPassword(value: string) {
    this._auditPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditPasswordInput() {
    return this._auditPassword;
  }

  // form_factor - computed: false, optional: false, required: true
  private _formFactor?: string; 
  public get formFactor() {
    return this.getStringAttribute('form_factor');
  }
  public set formFactor(value: string) {
    this._formFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formFactorInput() {
    return this._formFactor;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: string; 
  public get highAvailability() {
    return this.getStringAttribute('high_availability');
  }
  public set highAvailability(value: string) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
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

  // internal_transit_subnets - computed: false, optional: true, required: false
  private _internalTransitSubnets?: string[]; 
  public get internalTransitSubnets() {
    return this.getListAttribute('internal_transit_subnets');
  }
  public set internalTransitSubnets(value: string[]) {
    this._internalTransitSubnets = value;
  }
  public resetInternalTransitSubnets() {
    this._internalTransitSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTransitSubnetsInput() {
    return this._internalTransitSubnets;
  }

  // mtu - computed: false, optional: false, required: true
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // profile_type - computed: false, optional: false, required: true
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // root_password - computed: false, optional: false, required: true
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // routing_type - computed: false, optional: true, required: false
  private _routingType?: string; 
  public get routingType() {
    return this.getStringAttribute('routing_type');
  }
  public set routingType(value: string) {
    this._routingType = value;
  }
  public resetRoutingType() {
    this._routingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTypeInput() {
    return this._routingType;
  }

  // skip_tep_routability_check - computed: false, optional: true, required: false
  private _skipTepRoutabilityCheck?: boolean | cdktf.IResolvable; 
  public get skipTepRoutabilityCheck() {
    return this.getBooleanAttribute('skip_tep_routability_check');
  }
  public set skipTepRoutabilityCheck(value: boolean | cdktf.IResolvable) {
    this._skipTepRoutabilityCheck = value;
  }
  public resetSkipTepRoutabilityCheck() {
    this._skipTepRoutabilityCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTepRoutabilityCheckInput() {
    return this._skipTepRoutabilityCheck;
  }

  // tier0_name - computed: false, optional: true, required: false
  private _tier0Name?: string; 
  public get tier0Name() {
    return this.getStringAttribute('tier0_name');
  }
  public set tier0Name(value: string) {
    this._tier0Name = value;
  }
  public resetTier0Name() {
    this._tier0Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tier0NameInput() {
    return this._tier0Name;
  }

  // tier1_name - computed: false, optional: true, required: false
  private _tier1Name?: string; 
  public get tier1Name() {
    return this.getStringAttribute('tier1_name');
  }
  public set tier1Name(value: string) {
    this._tier1Name = value;
  }
  public resetTier1Name() {
    this._tier1Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tier1NameInput() {
    return this._tier1Name;
  }

  // tier1_unhosted - computed: false, optional: true, required: false
  private _tier1Unhosted?: boolean | cdktf.IResolvable; 
  public get tier1Unhosted() {
    return this.getBooleanAttribute('tier1_unhosted');
  }
  public set tier1Unhosted(value: boolean | cdktf.IResolvable) {
    this._tier1Unhosted = value;
  }
  public resetTier1Unhosted() {
    this._tier1Unhosted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tier1UnhostedInput() {
    return this._tier1Unhosted;
  }

  // transit_subnets - computed: false, optional: true, required: false
  private _transitSubnets?: string[]; 
  public get transitSubnets() {
    return this.getListAttribute('transit_subnets');
  }
  public set transitSubnets(value: string[]) {
    this._transitSubnets = value;
  }
  public resetTransitSubnets() {
    this._transitSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitSubnetsInput() {
    return this._transitSubnets;
  }

  // edge_node - computed: false, optional: false, required: true
  private _edgeNode = new EdgeClusterEdgeNodeList(this, "edge_node", false);
  public get edgeNode() {
    return this._edgeNode;
  }
  public putEdgeNode(value: EdgeClusterEdgeNode[] | cdktf.IResolvable) {
    this._edgeNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodeInput() {
    return this._edgeNode.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new EdgeClusterProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: EdgeClusterProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EdgeClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EdgeClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      asn: cdktf.stringToTerraform(this._asn),
      audit_password: cdktf.stringToTerraform(this._auditPassword),
      form_factor: cdktf.stringToTerraform(this._formFactor),
      high_availability: cdktf.stringToTerraform(this._highAvailability),
      id: cdktf.stringToTerraform(this._id),
      internal_transit_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalTransitSubnets),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      profile_type: cdktf.stringToTerraform(this._profileType),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      routing_type: cdktf.stringToTerraform(this._routingType),
      skip_tep_routability_check: cdktf.booleanToTerraform(this._skipTepRoutabilityCheck),
      tier0_name: cdktf.stringToTerraform(this._tier0Name),
      tier1_name: cdktf.stringToTerraform(this._tier1Name),
      tier1_unhosted: cdktf.booleanToTerraform(this._tier1Unhosted),
      transit_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitSubnets),
      edge_node: cdktf.listMapper(edgeClusterEdgeNodeToTerraform, true)(this._edgeNode.internalValue),
      profile: edgeClusterProfileToTerraform(this._profile.internalValue),
      timeouts: edgeClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_password: {
        value: cdktf.stringToHclTerraform(this._auditPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      form_factor: {
        value: cdktf.stringToHclTerraform(this._formFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_availability: {
        value: cdktf.stringToHclTerraform(this._highAvailability),
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
      internal_transit_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalTransitSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_password: {
        value: cdktf.stringToHclTerraform(this._rootPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_type: {
        value: cdktf.stringToHclTerraform(this._routingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_tep_routability_check: {
        value: cdktf.booleanToHclTerraform(this._skipTepRoutabilityCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tier0_name: {
        value: cdktf.stringToHclTerraform(this._tier0Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier1_name: {
        value: cdktf.stringToHclTerraform(this._tier1Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier1_unhosted: {
        value: cdktf.booleanToHclTerraform(this._tier1Unhosted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transit_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      edge_node: {
        value: cdktf.listMapperHcl(edgeClusterEdgeNodeToHclTerraform, true)(this._edgeNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeClusterEdgeNodeList",
      },
      profile: {
        value: edgeClusterProfileToHclTerraform(this._profile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeClusterProfileList",
      },
      timeouts: {
        value: edgeClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EdgeClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
