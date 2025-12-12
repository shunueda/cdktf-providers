// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressconnectVirtualborderrouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#associated_physical_connections ExpressconnectVirtualborderrouter#associated_physical_connections}
  */
  readonly associatedPhysicalConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#bandwidth ExpressconnectVirtualborderrouter#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#circuit_code ExpressconnectVirtualborderrouter#circuit_code}
  */
  readonly circuitCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#description ExpressconnectVirtualborderrouter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#detect_multiplier ExpressconnectVirtualborderrouter#detect_multiplier}
  */
  readonly detectMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#enable_ipv6 ExpressconnectVirtualborderrouter#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#id ExpressconnectVirtualborderrouter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#local_gateway_ip ExpressconnectVirtualborderrouter#local_gateway_ip}
  */
  readonly localGatewayIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#local_ipv6_gateway_ip ExpressconnectVirtualborderrouter#local_ipv6_gateway_ip}
  */
  readonly localIpv6GatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#min_rx_interval ExpressconnectVirtualborderrouter#min_rx_interval}
  */
  readonly minRxInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#min_tx_interval ExpressconnectVirtualborderrouter#min_tx_interval}
  */
  readonly minTxInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#peer_gateway_ip ExpressconnectVirtualborderrouter#peer_gateway_ip}
  */
  readonly peerGatewayIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#peer_ipv6_gateway_ip ExpressconnectVirtualborderrouter#peer_ipv6_gateway_ip}
  */
  readonly peerIpv6GatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#peering_ipv6_subnet_mask ExpressconnectVirtualborderrouter#peering_ipv6_subnet_mask}
  */
  readonly peeringIpv6SubnetMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#peering_subnet_mask ExpressconnectVirtualborderrouter#peering_subnet_mask}
  */
  readonly peeringSubnetMask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#physical_connection_id ExpressconnectVirtualborderrouter#physical_connection_id}
  */
  readonly physicalConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#status ExpressconnectVirtualborderrouter#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#vbr_owner_id ExpressconnectVirtualborderrouter#vbr_owner_id}
  */
  readonly vbrOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#virtual_border_router_name ExpressconnectVirtualborderrouter#virtual_border_router_name}
  */
  readonly virtualBorderRouterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#vlan_id ExpressconnectVirtualborderrouter#vlan_id}
  */
  readonly vlanId: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#timeouts ExpressconnectVirtualborderrouter#timeouts}
  */
  readonly timeouts?: ExpressconnectVirtualborderrouterTimeouts;
}
export interface ExpressconnectVirtualborderrouterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#update ExpressconnectVirtualborderrouter#update}
  */
  readonly update?: string;
}

export function expressconnectVirtualborderrouterTimeoutsToTerraform(struct?: ExpressconnectVirtualborderrouterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function expressconnectVirtualborderrouterTimeoutsToHclTerraform(struct?: ExpressconnectVirtualborderrouterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ExpressconnectVirtualborderrouterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExpressconnectVirtualborderrouterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressconnectVirtualborderrouterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._update = value.update;
    }
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter alibabacloudstack_expressconnect_virtualborderrouter}
*/
export class ExpressconnectVirtualborderrouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_expressconnect_virtualborderrouter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressconnectVirtualborderrouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressconnectVirtualborderrouter to import
  * @param importFromId The id of the existing ExpressconnectVirtualborderrouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressconnectVirtualborderrouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_expressconnect_virtualborderrouter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/expressconnect_virtualborderrouter alibabacloudstack_expressconnect_virtualborderrouter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressconnectVirtualborderrouterConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressconnectVirtualborderrouterConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_expressconnect_virtualborderrouter',
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
    this._associatedPhysicalConnections = config.associatedPhysicalConnections;
    this._bandwidth = config.bandwidth;
    this._circuitCode = config.circuitCode;
    this._description = config.description;
    this._detectMultiplier = config.detectMultiplier;
    this._enableIpv6 = config.enableIpv6;
    this._id = config.id;
    this._localGatewayIp = config.localGatewayIp;
    this._localIpv6GatewayIp = config.localIpv6GatewayIp;
    this._minRxInterval = config.minRxInterval;
    this._minTxInterval = config.minTxInterval;
    this._peerGatewayIp = config.peerGatewayIp;
    this._peerIpv6GatewayIp = config.peerIpv6GatewayIp;
    this._peeringIpv6SubnetMask = config.peeringIpv6SubnetMask;
    this._peeringSubnetMask = config.peeringSubnetMask;
    this._physicalConnectionId = config.physicalConnectionId;
    this._status = config.status;
    this._vbrOwnerId = config.vbrOwnerId;
    this._virtualBorderRouterName = config.virtualBorderRouterName;
    this._vlanId = config.vlanId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_physical_connections - computed: false, optional: true, required: false
  private _associatedPhysicalConnections?: string; 
  public get associatedPhysicalConnections() {
    return this.getStringAttribute('associated_physical_connections');
  }
  public set associatedPhysicalConnections(value: string) {
    this._associatedPhysicalConnections = value;
  }
  public resetAssociatedPhysicalConnections() {
    this._associatedPhysicalConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedPhysicalConnectionsInput() {
    return this._associatedPhysicalConnections;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // circuit_code - computed: false, optional: true, required: false
  private _circuitCode?: string; 
  public get circuitCode() {
    return this.getStringAttribute('circuit_code');
  }
  public set circuitCode(value: string) {
    this._circuitCode = value;
  }
  public resetCircuitCode() {
    this._circuitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitCodeInput() {
    return this._circuitCode;
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

  // detect_multiplier - computed: true, optional: true, required: false
  private _detectMultiplier?: number; 
  public get detectMultiplier() {
    return this.getNumberAttribute('detect_multiplier');
  }
  public set detectMultiplier(value: number) {
    this._detectMultiplier = value;
  }
  public resetDetectMultiplier() {
    this._detectMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectMultiplierInput() {
    return this._detectMultiplier;
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

  // min_rx_interval - computed: true, optional: true, required: false
  private _minRxInterval?: number; 
  public get minRxInterval() {
    return this.getNumberAttribute('min_rx_interval');
  }
  public set minRxInterval(value: number) {
    this._minRxInterval = value;
  }
  public resetMinRxInterval() {
    this._minRxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxIntervalInput() {
    return this._minRxInterval;
  }

  // min_tx_interval - computed: true, optional: true, required: false
  private _minTxInterval?: number; 
  public get minTxInterval() {
    return this.getNumberAttribute('min_tx_interval');
  }
  public set minTxInterval(value: number) {
    this._minTxInterval = value;
  }
  public resetMinTxInterval() {
    this._minTxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTxIntervalInput() {
    return this._minTxInterval;
  }

  // peer_gateway_ip - computed: false, optional: false, required: true
  private _peerGatewayIp?: string; 
  public get peerGatewayIp() {
    return this.getStringAttribute('peer_gateway_ip');
  }
  public set peerGatewayIp(value: string) {
    this._peerGatewayIp = value;
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

  // peering_subnet_mask - computed: false, optional: false, required: true
  private _peeringSubnetMask?: string; 
  public get peeringSubnetMask() {
    return this.getStringAttribute('peering_subnet_mask');
  }
  public set peeringSubnetMask(value: string) {
    this._peeringSubnetMask = value;
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

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // status - computed: true, optional: true, required: false
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

  // vbr_owner_id - computed: false, optional: true, required: false
  private _vbrOwnerId?: string; 
  public get vbrOwnerId() {
    return this.getStringAttribute('vbr_owner_id');
  }
  public set vbrOwnerId(value: string) {
    this._vbrOwnerId = value;
  }
  public resetVbrOwnerId() {
    this._vbrOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbrOwnerIdInput() {
    return this._vbrOwnerId;
  }

  // virtual_border_router_name - computed: false, optional: true, required: false
  private _virtualBorderRouterName?: string; 
  public get virtualBorderRouterName() {
    return this.getStringAttribute('virtual_border_router_name');
  }
  public set virtualBorderRouterName(value: string) {
    this._virtualBorderRouterName = value;
  }
  public resetVirtualBorderRouterName() {
    this._virtualBorderRouterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualBorderRouterNameInput() {
    return this._virtualBorderRouterName;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressconnectVirtualborderrouterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressconnectVirtualborderrouterTimeouts) {
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
      associated_physical_connections: cdktf.stringToTerraform(this._associatedPhysicalConnections),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      circuit_code: cdktf.stringToTerraform(this._circuitCode),
      description: cdktf.stringToTerraform(this._description),
      detect_multiplier: cdktf.numberToTerraform(this._detectMultiplier),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      id: cdktf.stringToTerraform(this._id),
      local_gateway_ip: cdktf.stringToTerraform(this._localGatewayIp),
      local_ipv6_gateway_ip: cdktf.stringToTerraform(this._localIpv6GatewayIp),
      min_rx_interval: cdktf.numberToTerraform(this._minRxInterval),
      min_tx_interval: cdktf.numberToTerraform(this._minTxInterval),
      peer_gateway_ip: cdktf.stringToTerraform(this._peerGatewayIp),
      peer_ipv6_gateway_ip: cdktf.stringToTerraform(this._peerIpv6GatewayIp),
      peering_ipv6_subnet_mask: cdktf.stringToTerraform(this._peeringIpv6SubnetMask),
      peering_subnet_mask: cdktf.stringToTerraform(this._peeringSubnetMask),
      physical_connection_id: cdktf.stringToTerraform(this._physicalConnectionId),
      status: cdktf.stringToTerraform(this._status),
      vbr_owner_id: cdktf.stringToTerraform(this._vbrOwnerId),
      virtual_border_router_name: cdktf.stringToTerraform(this._virtualBorderRouterName),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      timeouts: expressconnectVirtualborderrouterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_physical_connections: {
        value: cdktf.stringToHclTerraform(this._associatedPhysicalConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      circuit_code: {
        value: cdktf.stringToHclTerraform(this._circuitCode),
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
      detect_multiplier: {
        value: cdktf.numberToHclTerraform(this._detectMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      min_rx_interval: {
        value: cdktf.numberToHclTerraform(this._minRxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_tx_interval: {
        value: cdktf.numberToHclTerraform(this._minTxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vbr_owner_id: {
        value: cdktf.stringToHclTerraform(this._vbrOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_border_router_name: {
        value: cdktf.stringToHclTerraform(this._virtualBorderRouterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: expressconnectVirtualborderrouterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExpressconnectVirtualborderrouterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
