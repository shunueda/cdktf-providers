// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VnMonitoringPathAnalysiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}
  */
  readonly pathAnalyzerTestId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}
  */
  readonly type: string;
  /**
  * destination_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#destination_endpoint VnMonitoringPathAnalysi#destination_endpoint}
  */
  readonly destinationEndpoint?: VnMonitoringPathAnalysiDestinationEndpoint;
  /**
  * protocol_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#protocol_parameters VnMonitoringPathAnalysi#protocol_parameters}
  */
  readonly protocolParameters?: VnMonitoringPathAnalysiProtocolParameters;
  /**
  * query_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#query_options VnMonitoringPathAnalysi#query_options}
  */
  readonly queryOptions?: VnMonitoringPathAnalysiQueryOptions;
  /**
  * source_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#source_endpoint VnMonitoringPathAnalysi#source_endpoint}
  */
  readonly sourceEndpoint?: VnMonitoringPathAnalysiSourceEndpoint;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#timeouts VnMonitoringPathAnalysi#timeouts}
  */
  readonly timeouts?: VnMonitoringPathAnalysiTimeouts;
}
export interface VnMonitoringPathAnalysiDestinationEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}
  */
  readonly listenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}
  */
  readonly loadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}
  */
  readonly networkLoadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#psa_id VnMonitoringPathAnalysi#psa_id}
  */
  readonly psaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}
  */
  readonly vnicId?: string;
}

export function vnMonitoringPathAnalysiDestinationEndpointToTerraform(struct?: VnMonitoringPathAnalysiDestinationEndpointOutputReference | VnMonitoringPathAnalysiDestinationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    listener_id: cdktf.stringToTerraform(struct!.listenerId),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
    network_load_balancer_id: cdktf.stringToTerraform(struct!.networkLoadBalancerId),
    psa_id: cdktf.stringToTerraform(struct!.psaId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    type: cdktf.stringToTerraform(struct!.type),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vnic_id: cdktf.stringToTerraform(struct!.vnicId),
  }
}


export function vnMonitoringPathAnalysiDestinationEndpointToHclTerraform(struct?: VnMonitoringPathAnalysiDestinationEndpointOutputReference | VnMonitoringPathAnalysiDestinationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_id: {
      value: cdktf.stringToHclTerraform(struct!.listenerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.networkLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psa_id: {
      value: cdktf.stringToHclTerraform(struct!.psaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_id: {
      value: cdktf.stringToHclTerraform(struct!.vnicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnMonitoringPathAnalysiDestinationEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnMonitoringPathAnalysiDestinationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._listenerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerId = this._listenerId;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    if (this._networkLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkLoadBalancerId = this._networkLoadBalancerId;
    }
    if (this._psaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.psaId = this._psaId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vnicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicId = this._vnicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnMonitoringPathAnalysiDestinationEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._instanceId = undefined;
      this._listenerId = undefined;
      this._loadBalancerId = undefined;
      this._networkLoadBalancerId = undefined;
      this._psaId = undefined;
      this._subnetId = undefined;
      this._type = undefined;
      this._vlanId = undefined;
      this._vnicId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._instanceId = value.instanceId;
      this._listenerId = value.listenerId;
      this._loadBalancerId = value.loadBalancerId;
      this._networkLoadBalancerId = value.networkLoadBalancerId;
      this._psaId = value.psaId;
      this._subnetId = value.subnetId;
      this._type = value.type;
      this._vlanId = value.vlanId;
      this._vnicId = value.vnicId;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // listener_id - computed: true, optional: true, required: false
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  public resetListenerId() {
    this._listenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // load_balancer_id - computed: true, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // network_load_balancer_id - computed: true, optional: true, required: false
  private _networkLoadBalancerId?: string; 
  public get networkLoadBalancerId() {
    return this.getStringAttribute('network_load_balancer_id');
  }
  public set networkLoadBalancerId(value: string) {
    this._networkLoadBalancerId = value;
  }
  public resetNetworkLoadBalancerId() {
    this._networkLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerIdInput() {
    return this._networkLoadBalancerId;
  }

  // psa_id - computed: true, optional: true, required: false
  private _psaId?: string; 
  public get psaId() {
    return this.getStringAttribute('psa_id');
  }
  public set psaId(value: string) {
    this._psaId = value;
  }
  public resetPsaId() {
    this._psaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psaIdInput() {
    return this._psaId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vnic_id - computed: true, optional: true, required: false
  private _vnicId?: string; 
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }
  public set vnicId(value: string) {
    this._vnicId = value;
  }
  public resetVnicId() {
    this._vnicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicIdInput() {
    return this._vnicId;
  }
}
export interface VnMonitoringPathAnalysiProtocolParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}
  */
  readonly type: string;
}

export function vnMonitoringPathAnalysiProtocolParametersToTerraform(struct?: VnMonitoringPathAnalysiProtocolParametersOutputReference | VnMonitoringPathAnalysiProtocolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port: cdktf.numberToTerraform(struct!.destinationPort),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vnMonitoringPathAnalysiProtocolParametersToHclTerraform(struct?: VnMonitoringPathAnalysiProtocolParametersOutputReference | VnMonitoringPathAnalysiProtocolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port: {
      value: cdktf.numberToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnMonitoringPathAnalysiProtocolParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnMonitoringPathAnalysiProtocolParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnMonitoringPathAnalysiProtocolParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPort = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._sourcePort = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPort = value.destinationPort;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._sourcePort = value.sourcePort;
      this._type = value.type;
    }
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // icmp_code - computed: true, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: true, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface VnMonitoringPathAnalysiQueryOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}
  */
  readonly isBiDirectionalAnalysis?: boolean | cdktf.IResolvable;
}

export function vnMonitoringPathAnalysiQueryOptionsToTerraform(struct?: VnMonitoringPathAnalysiQueryOptionsOutputReference | VnMonitoringPathAnalysiQueryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_bi_directional_analysis: cdktf.booleanToTerraform(struct!.isBiDirectionalAnalysis),
  }
}


export function vnMonitoringPathAnalysiQueryOptionsToHclTerraform(struct?: VnMonitoringPathAnalysiQueryOptionsOutputReference | VnMonitoringPathAnalysiQueryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_bi_directional_analysis: {
      value: cdktf.booleanToHclTerraform(struct!.isBiDirectionalAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnMonitoringPathAnalysiQueryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnMonitoringPathAnalysiQueryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isBiDirectionalAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBiDirectionalAnalysis = this._isBiDirectionalAnalysis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnMonitoringPathAnalysiQueryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isBiDirectionalAnalysis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isBiDirectionalAnalysis = value.isBiDirectionalAnalysis;
    }
  }

  // is_bi_directional_analysis - computed: true, optional: true, required: false
  private _isBiDirectionalAnalysis?: boolean | cdktf.IResolvable; 
  public get isBiDirectionalAnalysis() {
    return this.getBooleanAttribute('is_bi_directional_analysis');
  }
  public set isBiDirectionalAnalysis(value: boolean | cdktf.IResolvable) {
    this._isBiDirectionalAnalysis = value;
  }
  public resetIsBiDirectionalAnalysis() {
    this._isBiDirectionalAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBiDirectionalAnalysisInput() {
    return this._isBiDirectionalAnalysis;
  }
}
export interface VnMonitoringPathAnalysiSourceEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}
  */
  readonly listenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}
  */
  readonly loadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}
  */
  readonly networkLoadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#psa_id VnMonitoringPathAnalysi#psa_id}
  */
  readonly psaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}
  */
  readonly vnicId?: string;
}

export function vnMonitoringPathAnalysiSourceEndpointToTerraform(struct?: VnMonitoringPathAnalysiSourceEndpointOutputReference | VnMonitoringPathAnalysiSourceEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    listener_id: cdktf.stringToTerraform(struct!.listenerId),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
    network_load_balancer_id: cdktf.stringToTerraform(struct!.networkLoadBalancerId),
    psa_id: cdktf.stringToTerraform(struct!.psaId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    type: cdktf.stringToTerraform(struct!.type),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vnic_id: cdktf.stringToTerraform(struct!.vnicId),
  }
}


export function vnMonitoringPathAnalysiSourceEndpointToHclTerraform(struct?: VnMonitoringPathAnalysiSourceEndpointOutputReference | VnMonitoringPathAnalysiSourceEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_id: {
      value: cdktf.stringToHclTerraform(struct!.listenerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.networkLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psa_id: {
      value: cdktf.stringToHclTerraform(struct!.psaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_id: {
      value: cdktf.stringToHclTerraform(struct!.vnicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnMonitoringPathAnalysiSourceEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnMonitoringPathAnalysiSourceEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._listenerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerId = this._listenerId;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    if (this._networkLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkLoadBalancerId = this._networkLoadBalancerId;
    }
    if (this._psaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.psaId = this._psaId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vnicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicId = this._vnicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnMonitoringPathAnalysiSourceEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._instanceId = undefined;
      this._listenerId = undefined;
      this._loadBalancerId = undefined;
      this._networkLoadBalancerId = undefined;
      this._psaId = undefined;
      this._subnetId = undefined;
      this._type = undefined;
      this._vlanId = undefined;
      this._vnicId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._instanceId = value.instanceId;
      this._listenerId = value.listenerId;
      this._loadBalancerId = value.loadBalancerId;
      this._networkLoadBalancerId = value.networkLoadBalancerId;
      this._psaId = value.psaId;
      this._subnetId = value.subnetId;
      this._type = value.type;
      this._vlanId = value.vlanId;
      this._vnicId = value.vnicId;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // listener_id - computed: true, optional: true, required: false
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  public resetListenerId() {
    this._listenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // load_balancer_id - computed: true, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // network_load_balancer_id - computed: true, optional: true, required: false
  private _networkLoadBalancerId?: string; 
  public get networkLoadBalancerId() {
    return this.getStringAttribute('network_load_balancer_id');
  }
  public set networkLoadBalancerId(value: string) {
    this._networkLoadBalancerId = value;
  }
  public resetNetworkLoadBalancerId() {
    this._networkLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerIdInput() {
    return this._networkLoadBalancerId;
  }

  // psa_id - computed: true, optional: true, required: false
  private _psaId?: string; 
  public get psaId() {
    return this.getStringAttribute('psa_id');
  }
  public set psaId(value: string) {
    this._psaId = value;
  }
  public resetPsaId() {
    this._psaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psaIdInput() {
    return this._psaId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vnic_id - computed: true, optional: true, required: false
  private _vnicId?: string; 
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }
  public set vnicId(value: string) {
    this._vnicId = value;
  }
  public resetVnicId() {
    this._vnicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicIdInput() {
    return this._vnicId;
  }
}
export interface VnMonitoringPathAnalysiTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}
  */
  readonly update?: string;
}

export function vnMonitoringPathAnalysiTimeoutsToTerraform(struct?: VnMonitoringPathAnalysiTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vnMonitoringPathAnalysiTimeoutsToHclTerraform(struct?: VnMonitoringPathAnalysiTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class VnMonitoringPathAnalysiTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VnMonitoringPathAnalysiTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnMonitoringPathAnalysiTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi oci_vn_monitoring_path_analysi}
*/
export class VnMonitoringPathAnalysi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_vn_monitoring_path_analysi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VnMonitoringPathAnalysi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VnMonitoringPathAnalysi to import
  * @param importFromId The id of the existing VnMonitoringPathAnalysi that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VnMonitoringPathAnalysi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_vn_monitoring_path_analysi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/vn_monitoring_path_analysi oci_vn_monitoring_path_analysi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VnMonitoringPathAnalysiConfig
  */
  public constructor(scope: Construct, id: string, config: VnMonitoringPathAnalysiConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_vn_monitoring_path_analysi',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheControl = config.cacheControl;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._pathAnalyzerTestId = config.pathAnalyzerTestId;
    this._protocol = config.protocol;
    this._type = config.type;
    this._destinationEndpoint.internalValue = config.destinationEndpoint;
    this._protocolParameters.internalValue = config.protocolParameters;
    this._queryOptions.internalValue = config.queryOptions;
    this._sourceEndpoint.internalValue = config.sourceEndpoint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_control - computed: true, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // path_analyzer_test_id - computed: true, optional: true, required: false
  private _pathAnalyzerTestId?: string; 
  public get pathAnalyzerTestId() {
    return this.getStringAttribute('path_analyzer_test_id');
  }
  public set pathAnalyzerTestId(value: string) {
    this._pathAnalyzerTestId = value;
  }
  public resetPathAnalyzerTestId() {
    this._pathAnalyzerTestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathAnalyzerTestIdInput() {
    return this._pathAnalyzerTestId;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // destination_endpoint - computed: false, optional: true, required: false
  private _destinationEndpoint = new VnMonitoringPathAnalysiDestinationEndpointOutputReference(this, "destination_endpoint");
  public get destinationEndpoint() {
    return this._destinationEndpoint;
  }
  public putDestinationEndpoint(value: VnMonitoringPathAnalysiDestinationEndpoint) {
    this._destinationEndpoint.internalValue = value;
  }
  public resetDestinationEndpoint() {
    this._destinationEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointInput() {
    return this._destinationEndpoint.internalValue;
  }

  // protocol_parameters - computed: false, optional: true, required: false
  private _protocolParameters = new VnMonitoringPathAnalysiProtocolParametersOutputReference(this, "protocol_parameters");
  public get protocolParameters() {
    return this._protocolParameters;
  }
  public putProtocolParameters(value: VnMonitoringPathAnalysiProtocolParameters) {
    this._protocolParameters.internalValue = value;
  }
  public resetProtocolParameters() {
    this._protocolParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolParametersInput() {
    return this._protocolParameters.internalValue;
  }

  // query_options - computed: false, optional: true, required: false
  private _queryOptions = new VnMonitoringPathAnalysiQueryOptionsOutputReference(this, "query_options");
  public get queryOptions() {
    return this._queryOptions;
  }
  public putQueryOptions(value: VnMonitoringPathAnalysiQueryOptions) {
    this._queryOptions.internalValue = value;
  }
  public resetQueryOptions() {
    this._queryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryOptionsInput() {
    return this._queryOptions.internalValue;
  }

  // source_endpoint - computed: false, optional: true, required: false
  private _sourceEndpoint = new VnMonitoringPathAnalysiSourceEndpointOutputReference(this, "source_endpoint");
  public get sourceEndpoint() {
    return this._sourceEndpoint;
  }
  public putSourceEndpoint(value: VnMonitoringPathAnalysiSourceEndpoint) {
    this._sourceEndpoint.internalValue = value;
  }
  public resetSourceEndpoint() {
    this._sourceEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointInput() {
    return this._sourceEndpoint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VnMonitoringPathAnalysiTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VnMonitoringPathAnalysiTimeouts) {
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
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      path_analyzer_test_id: cdktf.stringToTerraform(this._pathAnalyzerTestId),
      protocol: cdktf.numberToTerraform(this._protocol),
      type: cdktf.stringToTerraform(this._type),
      destination_endpoint: vnMonitoringPathAnalysiDestinationEndpointToTerraform(this._destinationEndpoint.internalValue),
      protocol_parameters: vnMonitoringPathAnalysiProtocolParametersToTerraform(this._protocolParameters.internalValue),
      query_options: vnMonitoringPathAnalysiQueryOptionsToTerraform(this._queryOptions.internalValue),
      source_endpoint: vnMonitoringPathAnalysiSourceEndpointToTerraform(this._sourceEndpoint.internalValue),
      timeouts: vnMonitoringPathAnalysiTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_control: {
        value: cdktf.stringToHclTerraform(this._cacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      path_analyzer_test_id: {
        value: cdktf.stringToHclTerraform(this._pathAnalyzerTestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint: {
        value: vnMonitoringPathAnalysiDestinationEndpointToHclTerraform(this._destinationEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnMonitoringPathAnalysiDestinationEndpointList",
      },
      protocol_parameters: {
        value: vnMonitoringPathAnalysiProtocolParametersToHclTerraform(this._protocolParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnMonitoringPathAnalysiProtocolParametersList",
      },
      query_options: {
        value: vnMonitoringPathAnalysiQueryOptionsToHclTerraform(this._queryOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnMonitoringPathAnalysiQueryOptionsList",
      },
      source_endpoint: {
        value: vnMonitoringPathAnalysiSourceEndpointToHclTerraform(this._sourceEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnMonitoringPathAnalysiSourceEndpointList",
      },
      timeouts: {
        value: vnMonitoringPathAnalysiTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VnMonitoringPathAnalysiTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
