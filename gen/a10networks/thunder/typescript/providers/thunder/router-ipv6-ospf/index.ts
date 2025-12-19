// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIpv6OspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'cisco': Alternative ABR, Cisco implementation (RFC3509); 'ibm': Alternative ABR, IBM implementation (RFC3509); 'standard': Standard behavior (RFC2328);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#abr_type_option RouterIpv6Ospf#abr_type_option}
  */
  readonly abrTypeOption?: string;
  /**
  * Use reference bandwidth method to assign OSPF cost (The reference bandwidth in terms of Mbits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#auto_cost_reference_bandwidth RouterIpv6Ospf#auto_cost_reference_bandwidth}
  */
  readonly autoCostReferenceBandwidth?: number;
  /**
  * Enable BFD on all interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#bfd_all_interfaces RouterIpv6Ospf#bfd_all_interfaces}
  */
  readonly bfdAllInterfaces?: number;
  /**
  * Set metric of redistributed routes (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#default_metric RouterIpv6Ospf#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#id RouterIpv6Ospf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'detail': Log changes in adjacency state; 'disable': Disable logging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#log_adjacency_changes RouterIpv6Ospf#log_adjacency_changes}
  */
  readonly logAdjacencyChanges?: string;
  /**
  * Maximum number allowed to process DD concurrently (Number of DD process)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#max_concurrent_dd RouterIpv6Ospf#max_concurrent_dd}
  */
  readonly maxConcurrentDd?: number;
  /**
  * OSPFv3 process tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#process_id RouterIpv6Ospf#process_id}
  */
  readonly processId: string;
  /**
  * router-id for the OSPF process (OSPFv3 router-id in IPv4 address format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#router_id RouterIpv6Ospf#router_id}
  */
  readonly routerId?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#user_tag RouterIpv6Ospf#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#uuid RouterIpv6Ospf#uuid}
  */
  readonly uuid?: string;
  /**
  * area_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#area_list RouterIpv6Ospf#area_list}
  */
  readonly areaList?: RouterIpv6OspfAreaListStruct[] | cdktf.IResolvable;
  /**
  * default_information block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#default_information RouterIpv6Ospf#default_information}
  */
  readonly defaultInformation?: RouterIpv6OspfDefaultInformation;
  /**
  * distribute_internal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#distribute_internal_list RouterIpv6Ospf#distribute_internal_list}
  */
  readonly distributeInternalList?: RouterIpv6OspfDistributeInternalListStruct[] | cdktf.IResolvable;
  /**
  * distribute_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#distribute_list RouterIpv6Ospf#distribute_list}
  */
  readonly distributeList?: RouterIpv6OspfDistributeListStruct;
  /**
  * ha_standby_extra_cost block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ha_standby_extra_cost RouterIpv6Ospf#ha_standby_extra_cost}
  */
  readonly haStandbyExtraCost?: RouterIpv6OspfHaStandbyExtraCost[] | cdktf.IResolvable;
  /**
  * passive_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#passive_interface RouterIpv6Ospf#passive_interface}
  */
  readonly passiveInterface?: RouterIpv6OspfPassiveInterface;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#redistribute RouterIpv6Ospf#redistribute}
  */
  readonly redistribute?: RouterIpv6OspfRedistribute;
  /**
  * timers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#timers RouterIpv6Ospf#timers}
  */
  readonly timers?: RouterIpv6OspfTimers;
}
export interface RouterIpv6OspfAreaListRangeListStruct {
  /**
  * 'advertise': Advertise this range (default); 'not-advertise': DoNotAdvertise this range;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#option RouterIpv6Ospf#option}
  */
  readonly option?: string;
  /**
  * Area range for IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#value RouterIpv6Ospf#value}
  */
  readonly value?: string;
}

export function routerIpv6OspfAreaListRangeListStructToTerraform(struct?: RouterIpv6OspfAreaListRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routerIpv6OspfAreaListRangeListStructToHclTerraform(struct?: RouterIpv6OspfAreaListRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfAreaListRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfAreaListRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfAreaListRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._option = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._option = value.option;
      this._value = value.value;
    }
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RouterIpv6OspfAreaListRangeListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfAreaListRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfAreaListRangeListStructOutputReference {
    return new RouterIpv6OspfAreaListRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfAreaListVirtualLinkListStruct {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#bfd RouterIpv6Ospf#bfd}
  */
  readonly bfd?: number;
  /**
  * Dead router detection time (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#dead_interval RouterIpv6Ospf#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Hello packet interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#hello_interval RouterIpv6Ospf#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#instance_id RouterIpv6Ospf#instance_id}
  */
  readonly instanceId?: number;
  /**
  * LSA retransmit interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#retransmit_interval RouterIpv6Ospf#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * LSA transmission delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#transmit_delay RouterIpv6Ospf#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * ID (IP addr) associated with virtual link neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#value RouterIpv6Ospf#value}
  */
  readonly value?: string;
}

export function routerIpv6OspfAreaListVirtualLinkListStructToTerraform(struct?: RouterIpv6OspfAreaListVirtualLinkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routerIpv6OspfAreaListVirtualLinkListStructToHclTerraform(struct?: RouterIpv6OspfAreaListVirtualLinkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfAreaListVirtualLinkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfAreaListVirtualLinkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfAreaListVirtualLinkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfd = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._instanceId = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfd = value.bfd;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._instanceId = value.instanceId;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._value = value.value;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RouterIpv6OspfAreaListVirtualLinkListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfAreaListVirtualLinkListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfAreaListVirtualLinkListStructOutputReference {
    return new RouterIpv6OspfAreaListVirtualLinkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfAreaListStruct {
  /**
  * OSPFv3 area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#area_ipv4 RouterIpv6Ospf#area_ipv4}
  */
  readonly areaIpv4: string;
  /**
  * OSPFv3 area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#area_num RouterIpv6Ospf#area_num}
  */
  readonly areaNum: number;
  /**
  * Set the summary-default cost of a NSSA or stub area (Stub's advertised default summary cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#default_cost RouterIpv6Ospf#default_cost}
  */
  readonly defaultCost?: number;
  /**
  * Do not inject inter-area routes into area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#no_summary RouterIpv6Ospf#no_summary}
  */
  readonly noSummary?: number;
  /**
  * Configure OSPFv3 area as stub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#stub RouterIpv6Ospf#stub}
  */
  readonly stub?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#uuid RouterIpv6Ospf#uuid}
  */
  readonly uuid?: string;
  /**
  * range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#range_list RouterIpv6Ospf#range_list}
  */
  readonly rangeList?: RouterIpv6OspfAreaListRangeListStruct[] | cdktf.IResolvable;
  /**
  * virtual_link_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#virtual_link_list RouterIpv6Ospf#virtual_link_list}
  */
  readonly virtualLinkList?: RouterIpv6OspfAreaListVirtualLinkListStruct[] | cdktf.IResolvable;
}

export function routerIpv6OspfAreaListStructToTerraform(struct?: RouterIpv6OspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_ipv4: cdktf.stringToTerraform(struct!.areaIpv4),
    area_num: cdktf.numberToTerraform(struct!.areaNum),
    default_cost: cdktf.numberToTerraform(struct!.defaultCost),
    no_summary: cdktf.numberToTerraform(struct!.noSummary),
    stub: cdktf.numberToTerraform(struct!.stub),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    range_list: cdktf.listMapper(routerIpv6OspfAreaListRangeListStructToTerraform, true)(struct!.rangeList),
    virtual_link_list: cdktf.listMapper(routerIpv6OspfAreaListVirtualLinkListStructToTerraform, true)(struct!.virtualLinkList),
  }
}


export function routerIpv6OspfAreaListStructToHclTerraform(struct?: RouterIpv6OspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.areaIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_num: {
      value: cdktf.numberToHclTerraform(struct!.areaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_cost: {
      value: cdktf.numberToHclTerraform(struct!.defaultCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_summary: {
      value: cdktf.numberToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stub: {
      value: cdktf.numberToHclTerraform(struct!.stub),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_list: {
      value: cdktf.listMapperHcl(routerIpv6OspfAreaListRangeListStructToHclTerraform, true)(struct!.rangeList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfAreaListRangeListStructList",
    },
    virtual_link_list: {
      value: cdktf.listMapperHcl(routerIpv6OspfAreaListVirtualLinkListStructToHclTerraform, true)(struct!.virtualLinkList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfAreaListVirtualLinkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfAreaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfAreaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIpv4 = this._areaIpv4;
    }
    if (this._areaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNum = this._areaNum;
    }
    if (this._defaultCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCost = this._defaultCost;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    if (this._stub !== undefined) {
      hasAnyValues = true;
      internalValueResult.stub = this._stub;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._rangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeList = this._rangeList?.internalValue;
    }
    if (this._virtualLinkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLinkList = this._virtualLinkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfAreaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaIpv4 = undefined;
      this._areaNum = undefined;
      this._defaultCost = undefined;
      this._noSummary = undefined;
      this._stub = undefined;
      this._uuid = undefined;
      this._rangeList.internalValue = undefined;
      this._virtualLinkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaIpv4 = value.areaIpv4;
      this._areaNum = value.areaNum;
      this._defaultCost = value.defaultCost;
      this._noSummary = value.noSummary;
      this._stub = value.stub;
      this._uuid = value.uuid;
      this._rangeList.internalValue = value.rangeList;
      this._virtualLinkList.internalValue = value.virtualLinkList;
    }
  }

  // area_ipv4 - computed: false, optional: false, required: true
  private _areaIpv4?: string; 
  public get areaIpv4() {
    return this.getStringAttribute('area_ipv4');
  }
  public set areaIpv4(value: string) {
    this._areaIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIpv4Input() {
    return this._areaIpv4;
  }

  // area_num - computed: false, optional: false, required: true
  private _areaNum?: number; 
  public get areaNum() {
    return this.getNumberAttribute('area_num');
  }
  public set areaNum(value: number) {
    this._areaNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNumInput() {
    return this._areaNum;
  }

  // default_cost - computed: false, optional: true, required: false
  private _defaultCost?: number; 
  public get defaultCost() {
    return this.getNumberAttribute('default_cost');
  }
  public set defaultCost(value: number) {
    this._defaultCost = value;
  }
  public resetDefaultCost() {
    this._defaultCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCostInput() {
    return this._defaultCost;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: number; 
  public get noSummary() {
    return this.getNumberAttribute('no_summary');
  }
  public set noSummary(value: number) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }

  // stub - computed: false, optional: true, required: false
  private _stub?: number; 
  public get stub() {
    return this.getNumberAttribute('stub');
  }
  public set stub(value: number) {
    this._stub = value;
  }
  public resetStub() {
    this._stub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubInput() {
    return this._stub;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // range_list - computed: false, optional: true, required: false
  private _rangeList = new RouterIpv6OspfAreaListRangeListStructList(this, "range_list", false);
  public get rangeList() {
    return this._rangeList;
  }
  public putRangeList(value: RouterIpv6OspfAreaListRangeListStruct[] | cdktf.IResolvable) {
    this._rangeList.internalValue = value;
  }
  public resetRangeList() {
    this._rangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeListInput() {
    return this._rangeList.internalValue;
  }

  // virtual_link_list - computed: false, optional: true, required: false
  private _virtualLinkList = new RouterIpv6OspfAreaListVirtualLinkListStructList(this, "virtual_link_list", false);
  public get virtualLinkList() {
    return this._virtualLinkList;
  }
  public putVirtualLinkList(value: RouterIpv6OspfAreaListVirtualLinkListStruct[] | cdktf.IResolvable) {
    this._virtualLinkList.internalValue = value;
  }
  public resetVirtualLinkList() {
    this._virtualLinkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkListInput() {
    return this._virtualLinkList.internalValue;
  }
}

export class RouterIpv6OspfAreaListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfAreaListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfAreaListStructOutputReference {
    return new RouterIpv6OspfAreaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfDefaultInformation {
  /**
  * Always advertise default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#always RouterIpv6Ospf#always}
  */
  readonly always?: number;
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric RouterIpv6Ospf#metric}
  */
  readonly metric?: number;
  /**
  * OSPF metric type for default routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric_type RouterIpv6Ospf#metric_type}
  */
  readonly metricType?: number;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#originate RouterIpv6Ospf#originate}
  */
  readonly originate?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#route_map RouterIpv6Ospf#route_map}
  */
  readonly routeMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#uuid RouterIpv6Ospf#uuid}
  */
  readonly uuid?: string;
}

export function routerIpv6OspfDefaultInformationToTerraform(struct?: RouterIpv6OspfDefaultInformationOutputReference | RouterIpv6OspfDefaultInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.numberToTerraform(struct!.always),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.numberToTerraform(struct!.metricType),
    originate: cdktf.numberToTerraform(struct!.originate),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerIpv6OspfDefaultInformationToHclTerraform(struct?: RouterIpv6OspfDefaultInformationOutputReference | RouterIpv6OspfDefaultInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.numberToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.numberToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    originate: {
      value: cdktf.numberToHclTerraform(struct!.originate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfDefaultInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6OspfDefaultInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._originate !== undefined) {
      hasAnyValues = true;
      internalValueResult.originate = this._originate;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfDefaultInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._always = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._originate = undefined;
      this._routeMap = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._always = value.always;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._originate = value.originate;
      this._routeMap = value.routeMap;
      this._uuid = value.uuid;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: number; 
  public get always() {
    return this.getNumberAttribute('always');
  }
  public set always(value: number) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: number; 
  public get metricType() {
    return this.getNumberAttribute('metric_type');
  }
  public set metricType(value: number) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // originate - computed: false, optional: true, required: false
  private _originate?: number; 
  public get originate() {
    return this.getNumberAttribute('originate');
  }
  public set originate(value: number) {
    this._originate = value;
  }
  public resetOriginate() {
    this._originate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originateInput() {
    return this._originate;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface RouterIpv6OspfDistributeInternalListStruct {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#area_ipv4 RouterIpv6Ospf#area_ipv4}
  */
  readonly areaIpv4?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#area_num RouterIpv6Ospf#area_num}
  */
  readonly areaNum?: number;
  /**
  * Cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#cost RouterIpv6Ospf#cost}
  */
  readonly cost?: number;
  /**
  * 'lw4o6': LW4O6 Prefix; 'nat64': NAT64 Prefix; 'static-nat': Static NAT; 'public-ip': Public IPv6 Prefixes; 'floating-ip': Floating IP; 'ip-nat': IP NAT; 'ip-nat-list': IP NAT list; 'vip': Only not flagged Virtual IP (VIP); 'vip-only-flagged': Selected Virtual IP (VIP);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#type RouterIpv6Ospf#type}
  */
  readonly type?: string;
}

export function routerIpv6OspfDistributeInternalListStructToTerraform(struct?: RouterIpv6OspfDistributeInternalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_ipv4: cdktf.stringToTerraform(struct!.areaIpv4),
    area_num: cdktf.numberToTerraform(struct!.areaNum),
    cost: cdktf.numberToTerraform(struct!.cost),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerIpv6OspfDistributeInternalListStructToHclTerraform(struct?: RouterIpv6OspfDistributeInternalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.areaIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_num: {
      value: cdktf.numberToHclTerraform(struct!.areaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
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

export class RouterIpv6OspfDistributeInternalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfDistributeInternalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIpv4 = this._areaIpv4;
    }
    if (this._areaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNum = this._areaNum;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfDistributeInternalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaIpv4 = undefined;
      this._areaNum = undefined;
      this._cost = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaIpv4 = value.areaIpv4;
      this._areaNum = value.areaNum;
      this._cost = value.cost;
      this._type = value.type;
    }
  }

  // area_ipv4 - computed: false, optional: true, required: false
  private _areaIpv4?: string; 
  public get areaIpv4() {
    return this.getStringAttribute('area_ipv4');
  }
  public set areaIpv4(value: string) {
    this._areaIpv4 = value;
  }
  public resetAreaIpv4() {
    this._areaIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIpv4Input() {
    return this._areaIpv4;
  }

  // area_num - computed: false, optional: true, required: false
  private _areaNum?: number; 
  public get areaNum() {
    return this.getNumberAttribute('area_num');
  }
  public set areaNum(value: number) {
    this._areaNum = value;
  }
  public resetAreaNum() {
    this._areaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNumInput() {
    return this._areaNum;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
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
}

export class RouterIpv6OspfDistributeInternalListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfDistributeInternalListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfDistributeInternalListStructOutputReference {
    return new RouterIpv6OspfDistributeInternalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfDistributeListPrefixListStruct {
  /**
  * 'in': Filter incoming routing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#direction RouterIpv6Ospf#direction}
  */
  readonly direction?: string;
  /**
  * Prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#value RouterIpv6Ospf#value}
  */
  readonly value?: string;
}

export function routerIpv6OspfDistributeListPrefixListStructToTerraform(struct?: RouterIpv6OspfDistributeListPrefixListStructOutputReference | RouterIpv6OspfDistributeListPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routerIpv6OspfDistributeListPrefixListStructToHclTerraform(struct?: RouterIpv6OspfDistributeListPrefixListStructOutputReference | RouterIpv6OspfDistributeListPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfDistributeListPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6OspfDistributeListPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfDistributeListPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._value = value.value;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouterIpv6OspfDistributeListStruct {
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#prefix_list RouterIpv6Ospf#prefix_list}
  */
  readonly prefixList?: RouterIpv6OspfDistributeListPrefixListStruct;
}

export function routerIpv6OspfDistributeListStructToTerraform(struct?: RouterIpv6OspfDistributeListStructOutputReference | RouterIpv6OspfDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_list: routerIpv6OspfDistributeListPrefixListStructToTerraform(struct!.prefixList),
  }
}


export function routerIpv6OspfDistributeListStructToHclTerraform(struct?: RouterIpv6OspfDistributeListStructOutputReference | RouterIpv6OspfDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_list: {
      value: routerIpv6OspfDistributeListPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfDistributeListPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6OspfDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfDistributeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixList.internalValue = value.prefixList;
    }
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new RouterIpv6OspfDistributeListPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: RouterIpv6OspfDistributeListPrefixListStruct) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}
export interface RouterIpv6OspfHaStandbyExtraCost {
  /**
  * The extra cost value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#extra_cost RouterIpv6Ospf#extra_cost}
  */
  readonly extraCost?: number;
  /**
  * Group (Group ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#group RouterIpv6Ospf#group}
  */
  readonly group?: number;
}

export function routerIpv6OspfHaStandbyExtraCostToTerraform(struct?: RouterIpv6OspfHaStandbyExtraCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_cost: cdktf.numberToTerraform(struct!.extraCost),
    group: cdktf.numberToTerraform(struct!.group),
  }
}


export function routerIpv6OspfHaStandbyExtraCostToHclTerraform(struct?: RouterIpv6OspfHaStandbyExtraCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_cost: {
      value: cdktf.numberToHclTerraform(struct!.extraCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group: {
      value: cdktf.numberToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfHaStandbyExtraCostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfHaStandbyExtraCost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraCost = this._extraCost;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfHaStandbyExtraCost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraCost = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraCost = value.extraCost;
      this._group = value.group;
    }
  }

  // extra_cost - computed: false, optional: true, required: false
  private _extraCost?: number; 
  public get extraCost() {
    return this.getNumberAttribute('extra_cost');
  }
  public set extraCost(value: number) {
    this._extraCost = value;
  }
  public resetExtraCost() {
    this._extraCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraCostInput() {
    return this._extraCost;
  }

  // group - computed: false, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}

export class RouterIpv6OspfHaStandbyExtraCostList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfHaStandbyExtraCost[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfHaStandbyExtraCostOutputReference {
    return new RouterIpv6OspfHaStandbyExtraCostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfPassiveInterfaceEthCfg {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ethernet RouterIpv6Ospf#ethernet}
  */
  readonly ethernet?: number;
}

export function routerIpv6OspfPassiveInterfaceEthCfgToTerraform(struct?: RouterIpv6OspfPassiveInterfaceEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
  }
}


export function routerIpv6OspfPassiveInterfaceEthCfgToHclTerraform(struct?: RouterIpv6OspfPassiveInterfaceEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfPassiveInterfaceEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfPassiveInterfaceEthCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfPassiveInterfaceEthCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }
}

export class RouterIpv6OspfPassiveInterfaceEthCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfPassiveInterfaceEthCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfPassiveInterfaceEthCfgOutputReference {
    return new RouterIpv6OspfPassiveInterfaceEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfPassiveInterfaceLoopbackCfg {
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#loopback RouterIpv6Ospf#loopback}
  */
  readonly loopback?: number;
}

export function routerIpv6OspfPassiveInterfaceLoopbackCfgToTerraform(struct?: RouterIpv6OspfPassiveInterfaceLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loopback: cdktf.numberToTerraform(struct!.loopback),
  }
}


export function routerIpv6OspfPassiveInterfaceLoopbackCfgToHclTerraform(struct?: RouterIpv6OspfPassiveInterfaceLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfPassiveInterfaceLoopbackCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfPassiveInterfaceLoopbackCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfPassiveInterfaceLoopbackCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loopback = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loopback = value.loopback;
    }
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }
}

export class RouterIpv6OspfPassiveInterfaceLoopbackCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfPassiveInterfaceLoopbackCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfPassiveInterfaceLoopbackCfgOutputReference {
    return new RouterIpv6OspfPassiveInterfaceLoopbackCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfPassiveInterfaceTrunkCfg {
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#trunk RouterIpv6Ospf#trunk}
  */
  readonly trunk?: number;
}

export function routerIpv6OspfPassiveInterfaceTrunkCfgToTerraform(struct?: RouterIpv6OspfPassiveInterfaceTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk: cdktf.numberToTerraform(struct!.trunk),
  }
}


export function routerIpv6OspfPassiveInterfaceTrunkCfgToHclTerraform(struct?: RouterIpv6OspfPassiveInterfaceTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfPassiveInterfaceTrunkCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfPassiveInterfaceTrunkCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfPassiveInterfaceTrunkCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunk = value.trunk;
    }
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }
}

export class RouterIpv6OspfPassiveInterfaceTrunkCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfPassiveInterfaceTrunkCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfPassiveInterfaceTrunkCfgOutputReference {
    return new RouterIpv6OspfPassiveInterfaceTrunkCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfPassiveInterfaceTunnelCfg {
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#tunnel RouterIpv6Ospf#tunnel}
  */
  readonly tunnel?: number;
}

export function routerIpv6OspfPassiveInterfaceTunnelCfgToTerraform(struct?: RouterIpv6OspfPassiveInterfaceTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
  }
}


export function routerIpv6OspfPassiveInterfaceTunnelCfgToHclTerraform(struct?: RouterIpv6OspfPassiveInterfaceTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfPassiveInterfaceTunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfPassiveInterfaceTunnelCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfPassiveInterfaceTunnelCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnel = value.tunnel;
    }
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }
}

export class RouterIpv6OspfPassiveInterfaceTunnelCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfPassiveInterfaceTunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfPassiveInterfaceTunnelCfgOutputReference {
    return new RouterIpv6OspfPassiveInterfaceTunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfPassiveInterfaceVeCfg {
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ve RouterIpv6Ospf#ve}
  */
  readonly ve?: number;
}

export function routerIpv6OspfPassiveInterfaceVeCfgToTerraform(struct?: RouterIpv6OspfPassiveInterfaceVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerIpv6OspfPassiveInterfaceVeCfgToHclTerraform(struct?: RouterIpv6OspfPassiveInterfaceVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfPassiveInterfaceVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfPassiveInterfaceVeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfPassiveInterfaceVeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ve = value.ve;
    }
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class RouterIpv6OspfPassiveInterfaceVeCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfPassiveInterfaceVeCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfPassiveInterfaceVeCfgOutputReference {
    return new RouterIpv6OspfPassiveInterfaceVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfPassiveInterface {
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#eth_cfg RouterIpv6Ospf#eth_cfg}
  */
  readonly ethCfg?: RouterIpv6OspfPassiveInterfaceEthCfg[] | cdktf.IResolvable;
  /**
  * loopback_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#loopback_cfg RouterIpv6Ospf#loopback_cfg}
  */
  readonly loopbackCfg?: RouterIpv6OspfPassiveInterfaceLoopbackCfg[] | cdktf.IResolvable;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#trunk_cfg RouterIpv6Ospf#trunk_cfg}
  */
  readonly trunkCfg?: RouterIpv6OspfPassiveInterfaceTrunkCfg[] | cdktf.IResolvable;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#tunnel_cfg RouterIpv6Ospf#tunnel_cfg}
  */
  readonly tunnelCfg?: RouterIpv6OspfPassiveInterfaceTunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ve_cfg RouterIpv6Ospf#ve_cfg}
  */
  readonly veCfg?: RouterIpv6OspfPassiveInterfaceVeCfg[] | cdktf.IResolvable;
}

export function routerIpv6OspfPassiveInterfaceToTerraform(struct?: RouterIpv6OspfPassiveInterfaceOutputReference | RouterIpv6OspfPassiveInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eth_cfg: cdktf.listMapper(routerIpv6OspfPassiveInterfaceEthCfgToTerraform, true)(struct!.ethCfg),
    loopback_cfg: cdktf.listMapper(routerIpv6OspfPassiveInterfaceLoopbackCfgToTerraform, true)(struct!.loopbackCfg),
    trunk_cfg: cdktf.listMapper(routerIpv6OspfPassiveInterfaceTrunkCfgToTerraform, true)(struct!.trunkCfg),
    tunnel_cfg: cdktf.listMapper(routerIpv6OspfPassiveInterfaceTunnelCfgToTerraform, true)(struct!.tunnelCfg),
    ve_cfg: cdktf.listMapper(routerIpv6OspfPassiveInterfaceVeCfgToTerraform, true)(struct!.veCfg),
  }
}


export function routerIpv6OspfPassiveInterfaceToHclTerraform(struct?: RouterIpv6OspfPassiveInterfaceOutputReference | RouterIpv6OspfPassiveInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eth_cfg: {
      value: cdktf.listMapperHcl(routerIpv6OspfPassiveInterfaceEthCfgToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfPassiveInterfaceEthCfgList",
    },
    loopback_cfg: {
      value: cdktf.listMapperHcl(routerIpv6OspfPassiveInterfaceLoopbackCfgToHclTerraform, true)(struct!.loopbackCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfPassiveInterfaceLoopbackCfgList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(routerIpv6OspfPassiveInterfaceTrunkCfgToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfPassiveInterfaceTrunkCfgList",
    },
    tunnel_cfg: {
      value: cdktf.listMapperHcl(routerIpv6OspfPassiveInterfaceTunnelCfgToHclTerraform, true)(struct!.tunnelCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfPassiveInterfaceTunnelCfgList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(routerIpv6OspfPassiveInterfaceVeCfgToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfPassiveInterfaceVeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfPassiveInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6OspfPassiveInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethCfg = this._ethCfg?.internalValue;
    }
    if (this._loopbackCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackCfg = this._loopbackCfg?.internalValue;
    }
    if (this._trunkCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkCfg = this._trunkCfg?.internalValue;
    }
    if (this._tunnelCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelCfg = this._tunnelCfg?.internalValue;
    }
    if (this._veCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veCfg = this._veCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfPassiveInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethCfg.internalValue = undefined;
      this._loopbackCfg.internalValue = undefined;
      this._trunkCfg.internalValue = undefined;
      this._tunnelCfg.internalValue = undefined;
      this._veCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethCfg.internalValue = value.ethCfg;
      this._loopbackCfg.internalValue = value.loopbackCfg;
      this._trunkCfg.internalValue = value.trunkCfg;
      this._tunnelCfg.internalValue = value.tunnelCfg;
      this._veCfg.internalValue = value.veCfg;
    }
  }

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new RouterIpv6OspfPassiveInterfaceEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: RouterIpv6OspfPassiveInterfaceEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // loopback_cfg - computed: false, optional: true, required: false
  private _loopbackCfg = new RouterIpv6OspfPassiveInterfaceLoopbackCfgList(this, "loopback_cfg", false);
  public get loopbackCfg() {
    return this._loopbackCfg;
  }
  public putLoopbackCfg(value: RouterIpv6OspfPassiveInterfaceLoopbackCfg[] | cdktf.IResolvable) {
    this._loopbackCfg.internalValue = value;
  }
  public resetLoopbackCfg() {
    this._loopbackCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackCfgInput() {
    return this._loopbackCfg.internalValue;
  }

  // trunk_cfg - computed: false, optional: true, required: false
  private _trunkCfg = new RouterIpv6OspfPassiveInterfaceTrunkCfgList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: RouterIpv6OspfPassiveInterfaceTrunkCfg[] | cdktf.IResolvable) {
    this._trunkCfg.internalValue = value;
  }
  public resetTrunkCfg() {
    this._trunkCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkCfgInput() {
    return this._trunkCfg.internalValue;
  }

  // tunnel_cfg - computed: false, optional: true, required: false
  private _tunnelCfg = new RouterIpv6OspfPassiveInterfaceTunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: RouterIpv6OspfPassiveInterfaceTunnelCfg[] | cdktf.IResolvable) {
    this._tunnelCfg.internalValue = value;
  }
  public resetTunnelCfg() {
    this._tunnelCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCfgInput() {
    return this._tunnelCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new RouterIpv6OspfPassiveInterfaceVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: RouterIpv6OspfPassiveInterfaceVeCfg[] | cdktf.IResolvable) {
    this._veCfg.internalValue = value;
  }
  public resetVeCfg() {
    this._veCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veCfgInput() {
    return this._veCfg.internalValue;
  }
}
export interface RouterIpv6OspfRedistributeIpNatFloatingListStruct {
  /**
  * Floating-IP as forward address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ip_nat_floating_ip_forward RouterIpv6Ospf#ip_nat_floating_ip_forward}
  */
  readonly ipNatFloatingIpForward?: string;
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ip_nat_prefix RouterIpv6Ospf#ip_nat_prefix}
  */
  readonly ipNatPrefix?: string;
}

export function routerIpv6OspfRedistributeIpNatFloatingListStructToTerraform(struct?: RouterIpv6OspfRedistributeIpNatFloatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat_floating_ip_forward: cdktf.stringToTerraform(struct!.ipNatFloatingIpForward),
    ip_nat_prefix: cdktf.stringToTerraform(struct!.ipNatPrefix),
  }
}


export function routerIpv6OspfRedistributeIpNatFloatingListStructToHclTerraform(struct?: RouterIpv6OspfRedistributeIpNatFloatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_nat_floating_ip_forward: {
      value: cdktf.stringToHclTerraform(struct!.ipNatFloatingIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_nat_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipNatPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeIpNatFloatingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeIpNatFloatingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNatFloatingIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatFloatingIpForward = this._ipNatFloatingIpForward;
    }
    if (this._ipNatPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatPrefix = this._ipNatPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistributeIpNatFloatingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipNatFloatingIpForward = undefined;
      this._ipNatPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipNatFloatingIpForward = value.ipNatFloatingIpForward;
      this._ipNatPrefix = value.ipNatPrefix;
    }
  }

  // ip_nat_floating_ip_forward - computed: false, optional: true, required: false
  private _ipNatFloatingIpForward?: string; 
  public get ipNatFloatingIpForward() {
    return this.getStringAttribute('ip_nat_floating_ip_forward');
  }
  public set ipNatFloatingIpForward(value: string) {
    this._ipNatFloatingIpForward = value;
  }
  public resetIpNatFloatingIpForward() {
    this._ipNatFloatingIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatFloatingIpForwardInput() {
    return this._ipNatFloatingIpForward;
  }

  // ip_nat_prefix - computed: false, optional: true, required: false
  private _ipNatPrefix?: string; 
  public get ipNatPrefix() {
    return this.getStringAttribute('ip_nat_prefix');
  }
  public set ipNatPrefix(value: string) {
    this._ipNatPrefix = value;
  }
  public resetIpNatPrefix() {
    this._ipNatPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatPrefixInput() {
    return this._ipNatPrefix;
  }
}

export class RouterIpv6OspfRedistributeIpNatFloatingListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeIpNatFloatingListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeIpNatFloatingListStructOutputReference {
    return new RouterIpv6OspfRedistributeIpNatFloatingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfRedistributeOspfListStruct {
  /**
  * OSPFV3 default metric (OSPFV3 metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric_ospf RouterIpv6Ospf#metric_ospf}
  */
  readonly metricOspf?: number;
  /**
  * '1': Set OSPFV3 External Type 1 metrics; '2': Set OSPFV3 External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric_type_ospf RouterIpv6Ospf#metric_type_ospf}
  */
  readonly metricTypeOspf?: string;
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ospf RouterIpv6Ospf#ospf}
  */
  readonly ospf?: number;
  /**
  * OSPFV3 process tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#process_id RouterIpv6Ospf#process_id}
  */
  readonly processId?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#route_map_ospf RouterIpv6Ospf#route_map_ospf}
  */
  readonly routeMapOspf?: string;
}

export function routerIpv6OspfRedistributeOspfListStructToTerraform(struct?: RouterIpv6OspfRedistributeOspfListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_ospf: cdktf.numberToTerraform(struct!.metricOspf),
    metric_type_ospf: cdktf.stringToTerraform(struct!.metricTypeOspf),
    ospf: cdktf.numberToTerraform(struct!.ospf),
    process_id: cdktf.stringToTerraform(struct!.processId),
    route_map_ospf: cdktf.stringToTerraform(struct!.routeMapOspf),
  }
}


export function routerIpv6OspfRedistributeOspfListStructToHclTerraform(struct?: RouterIpv6OspfRedistributeOspfListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_ospf: {
      value: cdktf.numberToHclTerraform(struct!.metricOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type_ospf: {
      value: cdktf.stringToHclTerraform(struct!.metricTypeOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf: {
      value: cdktf.numberToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    process_id: {
      value: cdktf.stringToHclTerraform(struct!.processId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_ospf: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeOspfListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeOspfListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricOspf = this._metricOspf;
    }
    if (this._metricTypeOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTypeOspf = this._metricTypeOspf;
    }
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._processId !== undefined) {
      hasAnyValues = true;
      internalValueResult.processId = this._processId;
    }
    if (this._routeMapOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOspf = this._routeMapOspf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistributeOspfListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricOspf = undefined;
      this._metricTypeOspf = undefined;
      this._ospf = undefined;
      this._processId = undefined;
      this._routeMapOspf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricOspf = value.metricOspf;
      this._metricTypeOspf = value.metricTypeOspf;
      this._ospf = value.ospf;
      this._processId = value.processId;
      this._routeMapOspf = value.routeMapOspf;
    }
  }

  // metric_ospf - computed: false, optional: true, required: false
  private _metricOspf?: number; 
  public get metricOspf() {
    return this.getNumberAttribute('metric_ospf');
  }
  public set metricOspf(value: number) {
    this._metricOspf = value;
  }
  public resetMetricOspf() {
    this._metricOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOspfInput() {
    return this._metricOspf;
  }

  // metric_type_ospf - computed: false, optional: true, required: false
  private _metricTypeOspf?: string; 
  public get metricTypeOspf() {
    return this.getStringAttribute('metric_type_ospf');
  }
  public set metricTypeOspf(value: string) {
    this._metricTypeOspf = value;
  }
  public resetMetricTypeOspf() {
    this._metricTypeOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeOspfInput() {
    return this._metricTypeOspf;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf?: number; 
  public get ospf() {
    return this.getNumberAttribute('ospf');
  }
  public set ospf(value: number) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
  }

  // process_id - computed: false, optional: true, required: false
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  public resetProcessId() {
    this._processId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // route_map_ospf - computed: false, optional: true, required: false
  private _routeMapOspf?: string; 
  public get routeMapOspf() {
    return this.getStringAttribute('route_map_ospf');
  }
  public set routeMapOspf(value: string) {
    this._routeMapOspf = value;
  }
  public resetRouteMapOspf() {
    this._routeMapOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOspfInput() {
    return this._routeMapOspf;
  }
}

export class RouterIpv6OspfRedistributeOspfListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeOspfListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeOspfListStructOutputReference {
    return new RouterIpv6OspfRedistributeOspfListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfRedistributeRedistListStruct {
  /**
  * OSPFV3 default metric (OSPFV3 metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric RouterIpv6Ospf#metric}
  */
  readonly metric?: number;
  /**
  * '1': Set OSPFV3 External Type 1 metrics; '2': Set OSPFV3 External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric_type RouterIpv6Ospf#metric_type}
  */
  readonly metricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#route_map RouterIpv6Ospf#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'public-ip': Public IPv6 Prefixes; 'nat64': NAT64 Prefix; 'lw4o6': LW4O6 Prefix; 'isis': ISO IS-IS; 'rip': Routing Information Protocol (RIP); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#type RouterIpv6Ospf#type}
  */
  readonly type?: string;
}

export function routerIpv6OspfRedistributeRedistListStructToTerraform(struct?: RouterIpv6OspfRedistributeRedistListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerIpv6OspfRedistributeRedistListStructToHclTerraform(struct?: RouterIpv6OspfRedistributeRedistListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeRedistListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeRedistListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistributeRedistListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._routeMap = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._routeMap = value.routeMap;
      this._type = value.type;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
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
}

export class RouterIpv6OspfRedistributeRedistListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeRedistListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeRedistListStructOutputReference {
    return new RouterIpv6OspfRedistributeRedistListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfRedistributeVipFloatingListStruct {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#vip_address RouterIpv6Ospf#vip_address}
  */
  readonly vipAddress?: string;
  /**
  * Floating-IP as forward address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#vip_floating_ip_forward RouterIpv6Ospf#vip_floating_ip_forward}
  */
  readonly vipFloatingIpForward?: string;
}

export function routerIpv6OspfRedistributeVipFloatingListStructToTerraform(struct?: RouterIpv6OspfRedistributeVipFloatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_address: cdktf.stringToTerraform(struct!.vipAddress),
    vip_floating_ip_forward: cdktf.stringToTerraform(struct!.vipFloatingIpForward),
  }
}


export function routerIpv6OspfRedistributeVipFloatingListStructToHclTerraform(struct?: RouterIpv6OspfRedistributeVipFloatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_address: {
      value: cdktf.stringToHclTerraform(struct!.vipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_floating_ip_forward: {
      value: cdktf.stringToHclTerraform(struct!.vipFloatingIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeVipFloatingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeVipFloatingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipAddress = this._vipAddress;
    }
    if (this._vipFloatingIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipFloatingIpForward = this._vipFloatingIpForward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistributeVipFloatingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vipAddress = undefined;
      this._vipFloatingIpForward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vipAddress = value.vipAddress;
      this._vipFloatingIpForward = value.vipFloatingIpForward;
    }
  }

  // vip_address - computed: false, optional: true, required: false
  private _vipAddress?: string; 
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }
  public set vipAddress(value: string) {
    this._vipAddress = value;
  }
  public resetVipAddress() {
    this._vipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAddressInput() {
    return this._vipAddress;
  }

  // vip_floating_ip_forward - computed: false, optional: true, required: false
  private _vipFloatingIpForward?: string; 
  public get vipFloatingIpForward() {
    return this.getStringAttribute('vip_floating_ip_forward');
  }
  public set vipFloatingIpForward(value: string) {
    this._vipFloatingIpForward = value;
  }
  public resetVipFloatingIpForward() {
    this._vipFloatingIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipFloatingIpForwardInput() {
    return this._vipFloatingIpForward;
  }
}

export class RouterIpv6OspfRedistributeVipFloatingListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeVipFloatingListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeVipFloatingListStructOutputReference {
    return new RouterIpv6OspfRedistributeVipFloatingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfRedistributeVipListStruct {
  /**
  * '1': Set OSPFV3 External Type 1 metrics; '2': Set OSPFV3 External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric_type_vip RouterIpv6Ospf#metric_type_vip}
  */
  readonly metricTypeVip?: string;
  /**
  * OSPFV3 default metric (OSPFV3 metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric_vip RouterIpv6Ospf#metric_vip}
  */
  readonly metricVip?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#route_map_vip RouterIpv6Ospf#route_map_vip}
  */
  readonly routeMapVip?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#type_vip RouterIpv6Ospf#type_vip}
  */
  readonly typeVip?: string;
}

export function routerIpv6OspfRedistributeVipListStructToTerraform(struct?: RouterIpv6OspfRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type_vip: cdktf.stringToTerraform(struct!.metricTypeVip),
    metric_vip: cdktf.numberToTerraform(struct!.metricVip),
    route_map_vip: cdktf.stringToTerraform(struct!.routeMapVip),
    type_vip: cdktf.stringToTerraform(struct!.typeVip),
  }
}


export function routerIpv6OspfRedistributeVipListStructToHclTerraform(struct?: RouterIpv6OspfRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type_vip: {
      value: cdktf.stringToHclTerraform(struct!.metricTypeVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_vip: {
      value: cdktf.numberToHclTerraform(struct!.metricVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map_vip: {
      value: cdktf.stringToHclTerraform(struct!.routeMapVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_vip: {
      value: cdktf.stringToHclTerraform(struct!.typeVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeVipListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricTypeVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTypeVip = this._metricTypeVip;
    }
    if (this._metricVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricVip = this._metricVip;
    }
    if (this._routeMapVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapVip = this._routeMapVip;
    }
    if (this._typeVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeVip = this._typeVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistributeVipListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricTypeVip = undefined;
      this._metricVip = undefined;
      this._routeMapVip = undefined;
      this._typeVip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricTypeVip = value.metricTypeVip;
      this._metricVip = value.metricVip;
      this._routeMapVip = value.routeMapVip;
      this._typeVip = value.typeVip;
    }
  }

  // metric_type_vip - computed: false, optional: true, required: false
  private _metricTypeVip?: string; 
  public get metricTypeVip() {
    return this.getStringAttribute('metric_type_vip');
  }
  public set metricTypeVip(value: string) {
    this._metricTypeVip = value;
  }
  public resetMetricTypeVip() {
    this._metricTypeVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeVipInput() {
    return this._metricTypeVip;
  }

  // metric_vip - computed: false, optional: true, required: false
  private _metricVip?: number; 
  public get metricVip() {
    return this.getNumberAttribute('metric_vip');
  }
  public set metricVip(value: number) {
    this._metricVip = value;
  }
  public resetMetricVip() {
    this._metricVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricVipInput() {
    return this._metricVip;
  }

  // route_map_vip - computed: false, optional: true, required: false
  private _routeMapVip?: string; 
  public get routeMapVip() {
    return this.getStringAttribute('route_map_vip');
  }
  public set routeMapVip(value: string) {
    this._routeMapVip = value;
  }
  public resetRouteMapVip() {
    this._routeMapVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapVipInput() {
    return this._routeMapVip;
  }

  // type_vip - computed: false, optional: true, required: false
  private _typeVip?: string; 
  public get typeVip() {
    return this.getStringAttribute('type_vip');
  }
  public set typeVip(value: string) {
    this._typeVip = value;
  }
  public resetTypeVip() {
    this._typeVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVipInput() {
    return this._typeVip;
  }
}

export class RouterIpv6OspfRedistributeVipListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeVipListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeVipListStructOutputReference {
    return new RouterIpv6OspfRedistributeVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfRedistribute {
  /**
  * IP-NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ip_nat RouterIpv6Ospf#ip_nat}
  */
  readonly ipNat?: number;
  /**
  * OSPFV3 default metric (OSPFV3 metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric_ip_nat RouterIpv6Ospf#metric_ip_nat}
  */
  readonly metricIpNat?: number;
  /**
  * '1': Set OSPFV3 External Type 1 metrics; '2': Set OSPFV3 External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#metric_type_ip_nat RouterIpv6Ospf#metric_type_ip_nat}
  */
  readonly metricTypeIpNat?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#route_map_ip_nat RouterIpv6Ospf#route_map_ip_nat}
  */
  readonly routeMapIpNat?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#uuid RouterIpv6Ospf#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_nat_floating_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ip_nat_floating_list RouterIpv6Ospf#ip_nat_floating_list}
  */
  readonly ipNatFloatingList?: RouterIpv6OspfRedistributeIpNatFloatingListStruct[] | cdktf.IResolvable;
  /**
  * ospf_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#ospf_list RouterIpv6Ospf#ospf_list}
  */
  readonly ospfList?: RouterIpv6OspfRedistributeOspfListStruct[] | cdktf.IResolvable;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#redist_list RouterIpv6Ospf#redist_list}
  */
  readonly redistList?: RouterIpv6OspfRedistributeRedistListStruct[] | cdktf.IResolvable;
  /**
  * vip_floating_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#vip_floating_list RouterIpv6Ospf#vip_floating_list}
  */
  readonly vipFloatingList?: RouterIpv6OspfRedistributeVipFloatingListStruct[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#vip_list RouterIpv6Ospf#vip_list}
  */
  readonly vipList?: RouterIpv6OspfRedistributeVipListStruct[] | cdktf.IResolvable;
}

export function routerIpv6OspfRedistributeToTerraform(struct?: RouterIpv6OspfRedistributeOutputReference | RouterIpv6OspfRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat: cdktf.numberToTerraform(struct!.ipNat),
    metric_ip_nat: cdktf.numberToTerraform(struct!.metricIpNat),
    metric_type_ip_nat: cdktf.stringToTerraform(struct!.metricTypeIpNat),
    route_map_ip_nat: cdktf.stringToTerraform(struct!.routeMapIpNat),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip_nat_floating_list: cdktf.listMapper(routerIpv6OspfRedistributeIpNatFloatingListStructToTerraform, true)(struct!.ipNatFloatingList),
    ospf_list: cdktf.listMapper(routerIpv6OspfRedistributeOspfListStructToTerraform, true)(struct!.ospfList),
    redist_list: cdktf.listMapper(routerIpv6OspfRedistributeRedistListStructToTerraform, true)(struct!.redistList),
    vip_floating_list: cdktf.listMapper(routerIpv6OspfRedistributeVipFloatingListStructToTerraform, true)(struct!.vipFloatingList),
    vip_list: cdktf.listMapper(routerIpv6OspfRedistributeVipListStructToTerraform, true)(struct!.vipList),
  }
}


export function routerIpv6OspfRedistributeToHclTerraform(struct?: RouterIpv6OspfRedistributeOutputReference | RouterIpv6OspfRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_nat: {
      value: cdktf.numberToHclTerraform(struct!.ipNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_ip_nat: {
      value: cdktf.numberToHclTerraform(struct!.metricIpNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type_ip_nat: {
      value: cdktf.stringToHclTerraform(struct!.metricTypeIpNat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_ip_nat: {
      value: cdktf.stringToHclTerraform(struct!.routeMapIpNat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_nat_floating_list: {
      value: cdktf.listMapperHcl(routerIpv6OspfRedistributeIpNatFloatingListStructToHclTerraform, true)(struct!.ipNatFloatingList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfRedistributeIpNatFloatingListStructList",
    },
    ospf_list: {
      value: cdktf.listMapperHcl(routerIpv6OspfRedistributeOspfListStructToHclTerraform, true)(struct!.ospfList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfRedistributeOspfListStructList",
    },
    redist_list: {
      value: cdktf.listMapperHcl(routerIpv6OspfRedistributeRedistListStructToHclTerraform, true)(struct!.redistList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfRedistributeRedistListStructList",
    },
    vip_floating_list: {
      value: cdktf.listMapperHcl(routerIpv6OspfRedistributeVipFloatingListStructToHclTerraform, true)(struct!.vipFloatingList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfRedistributeVipFloatingListStructList",
    },
    vip_list: {
      value: cdktf.listMapperHcl(routerIpv6OspfRedistributeVipListStructToHclTerraform, true)(struct!.vipList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfRedistributeVipListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6OspfRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNat = this._ipNat;
    }
    if (this._metricIpNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIpNat = this._metricIpNat;
    }
    if (this._metricTypeIpNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTypeIpNat = this._metricTypeIpNat;
    }
    if (this._routeMapIpNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapIpNat = this._routeMapIpNat;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipNatFloatingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatFloatingList = this._ipNatFloatingList?.internalValue;
    }
    if (this._ospfList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfList = this._ospfList?.internalValue;
    }
    if (this._redistList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistList = this._redistList?.internalValue;
    }
    if (this._vipFloatingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipFloatingList = this._vipFloatingList?.internalValue;
    }
    if (this._vipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipList = this._vipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipNat = undefined;
      this._metricIpNat = undefined;
      this._metricTypeIpNat = undefined;
      this._routeMapIpNat = undefined;
      this._uuid = undefined;
      this._ipNatFloatingList.internalValue = undefined;
      this._ospfList.internalValue = undefined;
      this._redistList.internalValue = undefined;
      this._vipFloatingList.internalValue = undefined;
      this._vipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipNat = value.ipNat;
      this._metricIpNat = value.metricIpNat;
      this._metricTypeIpNat = value.metricTypeIpNat;
      this._routeMapIpNat = value.routeMapIpNat;
      this._uuid = value.uuid;
      this._ipNatFloatingList.internalValue = value.ipNatFloatingList;
      this._ospfList.internalValue = value.ospfList;
      this._redistList.internalValue = value.redistList;
      this._vipFloatingList.internalValue = value.vipFloatingList;
      this._vipList.internalValue = value.vipList;
    }
  }

  // ip_nat - computed: false, optional: true, required: false
  private _ipNat?: number; 
  public get ipNat() {
    return this.getNumberAttribute('ip_nat');
  }
  public set ipNat(value: number) {
    this._ipNat = value;
  }
  public resetIpNat() {
    this._ipNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatInput() {
    return this._ipNat;
  }

  // metric_ip_nat - computed: false, optional: true, required: false
  private _metricIpNat?: number; 
  public get metricIpNat() {
    return this.getNumberAttribute('metric_ip_nat');
  }
  public set metricIpNat(value: number) {
    this._metricIpNat = value;
  }
  public resetMetricIpNat() {
    this._metricIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIpNatInput() {
    return this._metricIpNat;
  }

  // metric_type_ip_nat - computed: false, optional: true, required: false
  private _metricTypeIpNat?: string; 
  public get metricTypeIpNat() {
    return this.getStringAttribute('metric_type_ip_nat');
  }
  public set metricTypeIpNat(value: string) {
    this._metricTypeIpNat = value;
  }
  public resetMetricTypeIpNat() {
    this._metricTypeIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeIpNatInput() {
    return this._metricTypeIpNat;
  }

  // route_map_ip_nat - computed: false, optional: true, required: false
  private _routeMapIpNat?: string; 
  public get routeMapIpNat() {
    return this.getStringAttribute('route_map_ip_nat');
  }
  public set routeMapIpNat(value: string) {
    this._routeMapIpNat = value;
  }
  public resetRouteMapIpNat() {
    this._routeMapIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapIpNatInput() {
    return this._routeMapIpNat;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ip_nat_floating_list - computed: false, optional: true, required: false
  private _ipNatFloatingList = new RouterIpv6OspfRedistributeIpNatFloatingListStructList(this, "ip_nat_floating_list", false);
  public get ipNatFloatingList() {
    return this._ipNatFloatingList;
  }
  public putIpNatFloatingList(value: RouterIpv6OspfRedistributeIpNatFloatingListStruct[] | cdktf.IResolvable) {
    this._ipNatFloatingList.internalValue = value;
  }
  public resetIpNatFloatingList() {
    this._ipNatFloatingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatFloatingListInput() {
    return this._ipNatFloatingList.internalValue;
  }

  // ospf_list - computed: false, optional: true, required: false
  private _ospfList = new RouterIpv6OspfRedistributeOspfListStructList(this, "ospf_list", false);
  public get ospfList() {
    return this._ospfList;
  }
  public putOspfList(value: RouterIpv6OspfRedistributeOspfListStruct[] | cdktf.IResolvable) {
    this._ospfList.internalValue = value;
  }
  public resetOspfList() {
    this._ospfList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfListInput() {
    return this._ospfList.internalValue;
  }

  // redist_list - computed: false, optional: true, required: false
  private _redistList = new RouterIpv6OspfRedistributeRedistListStructList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterIpv6OspfRedistributeRedistListStruct[] | cdktf.IResolvable) {
    this._redistList.internalValue = value;
  }
  public resetRedistList() {
    this._redistList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistListInput() {
    return this._redistList.internalValue;
  }

  // vip_floating_list - computed: false, optional: true, required: false
  private _vipFloatingList = new RouterIpv6OspfRedistributeVipFloatingListStructList(this, "vip_floating_list", false);
  public get vipFloatingList() {
    return this._vipFloatingList;
  }
  public putVipFloatingList(value: RouterIpv6OspfRedistributeVipFloatingListStruct[] | cdktf.IResolvable) {
    this._vipFloatingList.internalValue = value;
  }
  public resetVipFloatingList() {
    this._vipFloatingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipFloatingListInput() {
    return this._vipFloatingList.internalValue;
  }

  // vip_list - computed: false, optional: true, required: false
  private _vipList = new RouterIpv6OspfRedistributeVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterIpv6OspfRedistributeVipListStruct[] | cdktf.IResolvable) {
    this._vipList.internalValue = value;
  }
  public resetVipList() {
    this._vipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipListInput() {
    return this._vipList.internalValue;
  }
}
export interface RouterIpv6OspfTimersSpfExp {
  /**
  * Maximum delay between receiving a change to SPF calculation in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#max_delay RouterIpv6Ospf#max_delay}
  */
  readonly maxDelay?: number;
  /**
  * Minimum delay between receiving a change to SPF calculation in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#min_delay RouterIpv6Ospf#min_delay}
  */
  readonly minDelay?: number;
}

export function routerIpv6OspfTimersSpfExpToTerraform(struct?: RouterIpv6OspfTimersSpfExpOutputReference | RouterIpv6OspfTimersSpfExp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_delay: cdktf.numberToTerraform(struct!.maxDelay),
    min_delay: cdktf.numberToTerraform(struct!.minDelay),
  }
}


export function routerIpv6OspfTimersSpfExpToHclTerraform(struct?: RouterIpv6OspfTimersSpfExpOutputReference | RouterIpv6OspfTimersSpfExp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_delay: {
      value: cdktf.numberToHclTerraform(struct!.minDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfTimersSpfExpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6OspfTimersSpfExp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDelay = this._maxDelay;
    }
    if (this._minDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDelay = this._minDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfTimersSpfExp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxDelay = undefined;
      this._minDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxDelay = value.maxDelay;
      this._minDelay = value.minDelay;
    }
  }

  // max_delay - computed: false, optional: true, required: false
  private _maxDelay?: number; 
  public get maxDelay() {
    return this.getNumberAttribute('max_delay');
  }
  public set maxDelay(value: number) {
    this._maxDelay = value;
  }
  public resetMaxDelay() {
    this._maxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayInput() {
    return this._maxDelay;
  }

  // min_delay - computed: false, optional: true, required: false
  private _minDelay?: number; 
  public get minDelay() {
    return this.getNumberAttribute('min_delay');
  }
  public set minDelay(value: number) {
    this._minDelay = value;
  }
  public resetMinDelay() {
    this._minDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayInput() {
    return this._minDelay;
  }
}
export interface RouterIpv6OspfTimersSpf {
  /**
  * exp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#exp RouterIpv6Ospf#exp}
  */
  readonly exp?: RouterIpv6OspfTimersSpfExp;
}

export function routerIpv6OspfTimersSpfToTerraform(struct?: RouterIpv6OspfTimersSpfOutputReference | RouterIpv6OspfTimersSpf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exp: routerIpv6OspfTimersSpfExpToTerraform(struct!.exp),
  }
}


export function routerIpv6OspfTimersSpfToHclTerraform(struct?: RouterIpv6OspfTimersSpfOutputReference | RouterIpv6OspfTimersSpf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exp: {
      value: routerIpv6OspfTimersSpfExpToHclTerraform(struct!.exp),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfTimersSpfExpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfTimersSpfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6OspfTimersSpf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exp = this._exp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfTimersSpf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exp.internalValue = value.exp;
    }
  }

  // exp - computed: false, optional: true, required: false
  private _exp = new RouterIpv6OspfTimersSpfExpOutputReference(this, "exp");
  public get exp() {
    return this._exp;
  }
  public putExp(value: RouterIpv6OspfTimersSpfExp) {
    this._exp.internalValue = value;
  }
  public resetExp() {
    this._exp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expInput() {
    return this._exp.internalValue;
  }
}
export interface RouterIpv6OspfTimers {
  /**
  * spf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#spf RouterIpv6Ospf#spf}
  */
  readonly spf?: RouterIpv6OspfTimersSpf;
}

export function routerIpv6OspfTimersToTerraform(struct?: RouterIpv6OspfTimersOutputReference | RouterIpv6OspfTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spf: routerIpv6OspfTimersSpfToTerraform(struct!.spf),
  }
}


export function routerIpv6OspfTimersToHclTerraform(struct?: RouterIpv6OspfTimersOutputReference | RouterIpv6OspfTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spf: {
      value: routerIpv6OspfTimersSpfToHclTerraform(struct!.spf),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6OspfTimersSpfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6OspfTimers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spf = this._spf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfTimers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._spf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._spf.internalValue = value.spf;
    }
  }

  // spf - computed: false, optional: true, required: false
  private _spf = new RouterIpv6OspfTimersSpfOutputReference(this, "spf");
  public get spf() {
    return this._spf;
  }
  public putSpf(value: RouterIpv6OspfTimersSpf) {
    this._spf.internalValue = value;
  }
  public resetSpf() {
    this._spf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfInput() {
    return this._spf.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf thunder_router_ipv6_ospf}
*/
export class RouterIpv6Ospf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ipv6_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIpv6Ospf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIpv6Ospf to import
  * @param importFromId The id of the existing RouterIpv6Ospf that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIpv6Ospf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ipv6_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf thunder_router_ipv6_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIpv6OspfConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIpv6OspfConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ipv6_ospf',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abrTypeOption = config.abrTypeOption;
    this._autoCostReferenceBandwidth = config.autoCostReferenceBandwidth;
    this._bfdAllInterfaces = config.bfdAllInterfaces;
    this._defaultMetric = config.defaultMetric;
    this._id = config.id;
    this._logAdjacencyChanges = config.logAdjacencyChanges;
    this._maxConcurrentDd = config.maxConcurrentDd;
    this._processId = config.processId;
    this._routerId = config.routerId;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._areaList.internalValue = config.areaList;
    this._defaultInformation.internalValue = config.defaultInformation;
    this._distributeInternalList.internalValue = config.distributeInternalList;
    this._distributeList.internalValue = config.distributeList;
    this._haStandbyExtraCost.internalValue = config.haStandbyExtraCost;
    this._passiveInterface.internalValue = config.passiveInterface;
    this._redistribute.internalValue = config.redistribute;
    this._timers.internalValue = config.timers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abr_type_option - computed: false, optional: true, required: false
  private _abrTypeOption?: string; 
  public get abrTypeOption() {
    return this.getStringAttribute('abr_type_option');
  }
  public set abrTypeOption(value: string) {
    this._abrTypeOption = value;
  }
  public resetAbrTypeOption() {
    this._abrTypeOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrTypeOptionInput() {
    return this._abrTypeOption;
  }

  // auto_cost_reference_bandwidth - computed: false, optional: true, required: false
  private _autoCostReferenceBandwidth?: number; 
  public get autoCostReferenceBandwidth() {
    return this.getNumberAttribute('auto_cost_reference_bandwidth');
  }
  public set autoCostReferenceBandwidth(value: number) {
    this._autoCostReferenceBandwidth = value;
  }
  public resetAutoCostReferenceBandwidth() {
    this._autoCostReferenceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCostReferenceBandwidthInput() {
    return this._autoCostReferenceBandwidth;
  }

  // bfd_all_interfaces - computed: false, optional: true, required: false
  private _bfdAllInterfaces?: number; 
  public get bfdAllInterfaces() {
    return this.getNumberAttribute('bfd_all_interfaces');
  }
  public set bfdAllInterfaces(value: number) {
    this._bfdAllInterfaces = value;
  }
  public resetBfdAllInterfaces() {
    this._bfdAllInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdAllInterfacesInput() {
    return this._bfdAllInterfaces;
  }

  // default_metric - computed: false, optional: true, required: false
  private _defaultMetric?: number; 
  public get defaultMetric() {
    return this.getNumberAttribute('default_metric');
  }
  public set defaultMetric(value: number) {
    this._defaultMetric = value;
  }
  public resetDefaultMetric() {
    this._defaultMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMetricInput() {
    return this._defaultMetric;
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

  // log_adjacency_changes - computed: false, optional: true, required: false
  private _logAdjacencyChanges?: string; 
  public get logAdjacencyChanges() {
    return this.getStringAttribute('log_adjacency_changes');
  }
  public set logAdjacencyChanges(value: string) {
    this._logAdjacencyChanges = value;
  }
  public resetLogAdjacencyChanges() {
    this._logAdjacencyChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAdjacencyChangesInput() {
    return this._logAdjacencyChanges;
  }

  // max_concurrent_dd - computed: false, optional: true, required: false
  private _maxConcurrentDd?: number; 
  public get maxConcurrentDd() {
    return this.getNumberAttribute('max_concurrent_dd');
  }
  public set maxConcurrentDd(value: number) {
    this._maxConcurrentDd = value;
  }
  public resetMaxConcurrentDd() {
    this._maxConcurrentDd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentDdInput() {
    return this._maxConcurrentDd;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // area_list - computed: false, optional: true, required: false
  private _areaList = new RouterIpv6OspfAreaListStructList(this, "area_list", false);
  public get areaList() {
    return this._areaList;
  }
  public putAreaList(value: RouterIpv6OspfAreaListStruct[] | cdktf.IResolvable) {
    this._areaList.internalValue = value;
  }
  public resetAreaList() {
    this._areaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList.internalValue;
  }

  // default_information - computed: false, optional: true, required: false
  private _defaultInformation = new RouterIpv6OspfDefaultInformationOutputReference(this, "default_information");
  public get defaultInformation() {
    return this._defaultInformation;
  }
  public putDefaultInformation(value: RouterIpv6OspfDefaultInformation) {
    this._defaultInformation.internalValue = value;
  }
  public resetDefaultInformation() {
    this._defaultInformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationInput() {
    return this._defaultInformation.internalValue;
  }

  // distribute_internal_list - computed: false, optional: true, required: false
  private _distributeInternalList = new RouterIpv6OspfDistributeInternalListStructList(this, "distribute_internal_list", false);
  public get distributeInternalList() {
    return this._distributeInternalList;
  }
  public putDistributeInternalList(value: RouterIpv6OspfDistributeInternalListStruct[] | cdktf.IResolvable) {
    this._distributeInternalList.internalValue = value;
  }
  public resetDistributeInternalList() {
    this._distributeInternalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeInternalListInput() {
    return this._distributeInternalList.internalValue;
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList = new RouterIpv6OspfDistributeListStructOutputReference(this, "distribute_list");
  public get distributeList() {
    return this._distributeList;
  }
  public putDistributeList(value: RouterIpv6OspfDistributeListStruct) {
    this._distributeList.internalValue = value;
  }
  public resetDistributeList() {
    this._distributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList.internalValue;
  }

  // ha_standby_extra_cost - computed: false, optional: true, required: false
  private _haStandbyExtraCost = new RouterIpv6OspfHaStandbyExtraCostList(this, "ha_standby_extra_cost", false);
  public get haStandbyExtraCost() {
    return this._haStandbyExtraCost;
  }
  public putHaStandbyExtraCost(value: RouterIpv6OspfHaStandbyExtraCost[] | cdktf.IResolvable) {
    this._haStandbyExtraCost.internalValue = value;
  }
  public resetHaStandbyExtraCost() {
    this._haStandbyExtraCost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStandbyExtraCostInput() {
    return this._haStandbyExtraCost.internalValue;
  }

  // passive_interface - computed: false, optional: true, required: false
  private _passiveInterface = new RouterIpv6OspfPassiveInterfaceOutputReference(this, "passive_interface");
  public get passiveInterface() {
    return this._passiveInterface;
  }
  public putPassiveInterface(value: RouterIpv6OspfPassiveInterface) {
    this._passiveInterface.internalValue = value;
  }
  public resetPassiveInterface() {
    this._passiveInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceInput() {
    return this._passiveInterface.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterIpv6OspfRedistributeOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterIpv6OspfRedistribute) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // timers - computed: false, optional: true, required: false
  private _timers = new RouterIpv6OspfTimersOutputReference(this, "timers");
  public get timers() {
    return this._timers;
  }
  public putTimers(value: RouterIpv6OspfTimers) {
    this._timers.internalValue = value;
  }
  public resetTimers() {
    this._timers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abr_type_option: cdktf.stringToTerraform(this._abrTypeOption),
      auto_cost_reference_bandwidth: cdktf.numberToTerraform(this._autoCostReferenceBandwidth),
      bfd_all_interfaces: cdktf.numberToTerraform(this._bfdAllInterfaces),
      default_metric: cdktf.numberToTerraform(this._defaultMetric),
      id: cdktf.stringToTerraform(this._id),
      log_adjacency_changes: cdktf.stringToTerraform(this._logAdjacencyChanges),
      max_concurrent_dd: cdktf.numberToTerraform(this._maxConcurrentDd),
      process_id: cdktf.stringToTerraform(this._processId),
      router_id: cdktf.stringToTerraform(this._routerId),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      area_list: cdktf.listMapper(routerIpv6OspfAreaListStructToTerraform, true)(this._areaList.internalValue),
      default_information: routerIpv6OspfDefaultInformationToTerraform(this._defaultInformation.internalValue),
      distribute_internal_list: cdktf.listMapper(routerIpv6OspfDistributeInternalListStructToTerraform, true)(this._distributeInternalList.internalValue),
      distribute_list: routerIpv6OspfDistributeListStructToTerraform(this._distributeList.internalValue),
      ha_standby_extra_cost: cdktf.listMapper(routerIpv6OspfHaStandbyExtraCostToTerraform, true)(this._haStandbyExtraCost.internalValue),
      passive_interface: routerIpv6OspfPassiveInterfaceToTerraform(this._passiveInterface.internalValue),
      redistribute: routerIpv6OspfRedistributeToTerraform(this._redistribute.internalValue),
      timers: routerIpv6OspfTimersToTerraform(this._timers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abr_type_option: {
        value: cdktf.stringToHclTerraform(this._abrTypeOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_cost_reference_bandwidth: {
        value: cdktf.numberToHclTerraform(this._autoCostReferenceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_all_interfaces: {
        value: cdktf.numberToHclTerraform(this._bfdAllInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_metric: {
        value: cdktf.numberToHclTerraform(this._defaultMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_adjacency_changes: {
        value: cdktf.stringToHclTerraform(this._logAdjacencyChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_dd: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentDd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_list: {
        value: cdktf.listMapperHcl(routerIpv6OspfAreaListStructToHclTerraform, true)(this._areaList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfAreaListStructList",
      },
      default_information: {
        value: routerIpv6OspfDefaultInformationToHclTerraform(this._defaultInformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfDefaultInformationList",
      },
      distribute_internal_list: {
        value: cdktf.listMapperHcl(routerIpv6OspfDistributeInternalListStructToHclTerraform, true)(this._distributeInternalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfDistributeInternalListStructList",
      },
      distribute_list: {
        value: routerIpv6OspfDistributeListStructToHclTerraform(this._distributeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfDistributeListStructList",
      },
      ha_standby_extra_cost: {
        value: cdktf.listMapperHcl(routerIpv6OspfHaStandbyExtraCostToHclTerraform, true)(this._haStandbyExtraCost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfHaStandbyExtraCostList",
      },
      passive_interface: {
        value: routerIpv6OspfPassiveInterfaceToHclTerraform(this._passiveInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfPassiveInterfaceList",
      },
      redistribute: {
        value: routerIpv6OspfRedistributeToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfRedistributeList",
      },
      timers: {
        value: routerIpv6OspfTimersToHclTerraform(this._timers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfTimersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
