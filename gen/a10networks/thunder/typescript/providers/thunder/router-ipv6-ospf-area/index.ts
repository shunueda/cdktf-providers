// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIpv6OspfAreaConfig extends cdktf.TerraformMetaArguments {
  /**
  * OSPFv3 area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#area_ipv4 RouterIpv6OspfArea#area_ipv4}
  */
  readonly areaIpv4: string;
  /**
  * OSPFv3 area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#area_num RouterIpv6OspfArea#area_num}
  */
  readonly areaNum: number;
  /**
  * Set the summary-default cost of a NSSA or stub area (Stub's advertised default summary cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#default_cost RouterIpv6OspfArea#default_cost}
  */
  readonly defaultCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#id RouterIpv6OspfArea#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Do not inject inter-area routes into area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#no_summary RouterIpv6OspfArea#no_summary}
  */
  readonly noSummary?: number;
  /**
  * ProcessId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#process_id RouterIpv6OspfArea#process_id}
  */
  readonly processId: string;
  /**
  * Configure OSPFv3 area as stub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#stub RouterIpv6OspfArea#stub}
  */
  readonly stub?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#uuid RouterIpv6OspfArea#uuid}
  */
  readonly uuid?: string;
  /**
  * range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#range_list RouterIpv6OspfArea#range_list}
  */
  readonly rangeList?: RouterIpv6OspfAreaRangeListStruct[] | cdktf.IResolvable;
  /**
  * virtual_link_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#virtual_link_list RouterIpv6OspfArea#virtual_link_list}
  */
  readonly virtualLinkList?: RouterIpv6OspfAreaVirtualLinkListStruct[] | cdktf.IResolvable;
}
export interface RouterIpv6OspfAreaRangeListStruct {
  /**
  * 'advertise': Advertise this range (default); 'not-advertise': DoNotAdvertise this range;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#option RouterIpv6OspfArea#option}
  */
  readonly option?: string;
  /**
  * Area range for IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#value RouterIpv6OspfArea#value}
  */
  readonly value?: string;
}

export function routerIpv6OspfAreaRangeListStructToTerraform(struct?: RouterIpv6OspfAreaRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routerIpv6OspfAreaRangeListStructToHclTerraform(struct?: RouterIpv6OspfAreaRangeListStruct | cdktf.IResolvable): any {
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

export class RouterIpv6OspfAreaRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfAreaRangeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterIpv6OspfAreaRangeListStruct | cdktf.IResolvable | undefined) {
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

export class RouterIpv6OspfAreaRangeListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfAreaRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfAreaRangeListStructOutputReference {
    return new RouterIpv6OspfAreaRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfAreaVirtualLinkListStruct {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#bfd RouterIpv6OspfArea#bfd}
  */
  readonly bfd?: number;
  /**
  * Dead router detection time (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#dead_interval RouterIpv6OspfArea#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Hello packet interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#hello_interval RouterIpv6OspfArea#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#instance_id RouterIpv6OspfArea#instance_id}
  */
  readonly instanceId?: number;
  /**
  * LSA retransmit interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#retransmit_interval RouterIpv6OspfArea#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * LSA transmission delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#transmit_delay RouterIpv6OspfArea#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * ID (IP addr) associated with virtual link neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#value RouterIpv6OspfArea#value}
  */
  readonly value?: string;
}

export function routerIpv6OspfAreaVirtualLinkListStructToTerraform(struct?: RouterIpv6OspfAreaVirtualLinkListStruct | cdktf.IResolvable): any {
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


export function routerIpv6OspfAreaVirtualLinkListStructToHclTerraform(struct?: RouterIpv6OspfAreaVirtualLinkListStruct | cdktf.IResolvable): any {
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

export class RouterIpv6OspfAreaVirtualLinkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfAreaVirtualLinkListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterIpv6OspfAreaVirtualLinkListStruct | cdktf.IResolvable | undefined) {
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

export class RouterIpv6OspfAreaVirtualLinkListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfAreaVirtualLinkListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfAreaVirtualLinkListStructOutputReference {
    return new RouterIpv6OspfAreaVirtualLinkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area thunder_router_ipv6_ospf_area}
*/
export class RouterIpv6OspfArea extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ipv6_ospf_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIpv6OspfArea resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIpv6OspfArea to import
  * @param importFromId The id of the existing RouterIpv6OspfArea that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIpv6OspfArea to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ipv6_ospf_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_area thunder_router_ipv6_ospf_area} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIpv6OspfAreaConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIpv6OspfAreaConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ipv6_ospf_area',
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
    this._areaIpv4 = config.areaIpv4;
    this._areaNum = config.areaNum;
    this._defaultCost = config.defaultCost;
    this._id = config.id;
    this._noSummary = config.noSummary;
    this._processId = config.processId;
    this._stub = config.stub;
    this._uuid = config.uuid;
    this._rangeList.internalValue = config.rangeList;
    this._virtualLinkList.internalValue = config.virtualLinkList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _rangeList = new RouterIpv6OspfAreaRangeListStructList(this, "range_list", false);
  public get rangeList() {
    return this._rangeList;
  }
  public putRangeList(value: RouterIpv6OspfAreaRangeListStruct[] | cdktf.IResolvable) {
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
  private _virtualLinkList = new RouterIpv6OspfAreaVirtualLinkListStructList(this, "virtual_link_list", false);
  public get virtualLinkList() {
    return this._virtualLinkList;
  }
  public putVirtualLinkList(value: RouterIpv6OspfAreaVirtualLinkListStruct[] | cdktf.IResolvable) {
    this._virtualLinkList.internalValue = value;
  }
  public resetVirtualLinkList() {
    this._virtualLinkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkListInput() {
    return this._virtualLinkList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_ipv4: cdktf.stringToTerraform(this._areaIpv4),
      area_num: cdktf.numberToTerraform(this._areaNum),
      default_cost: cdktf.numberToTerraform(this._defaultCost),
      id: cdktf.stringToTerraform(this._id),
      no_summary: cdktf.numberToTerraform(this._noSummary),
      process_id: cdktf.stringToTerraform(this._processId),
      stub: cdktf.numberToTerraform(this._stub),
      uuid: cdktf.stringToTerraform(this._uuid),
      range_list: cdktf.listMapper(routerIpv6OspfAreaRangeListStructToTerraform, true)(this._rangeList.internalValue),
      virtual_link_list: cdktf.listMapper(routerIpv6OspfAreaVirtualLinkListStructToTerraform, true)(this._virtualLinkList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_ipv4: {
        value: cdktf.stringToHclTerraform(this._areaIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_num: {
        value: cdktf.numberToHclTerraform(this._areaNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_cost: {
        value: cdktf.numberToHclTerraform(this._defaultCost),
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
      no_summary: {
        value: cdktf.numberToHclTerraform(this._noSummary),
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
      stub: {
        value: cdktf.numberToHclTerraform(this._stub),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range_list: {
        value: cdktf.listMapperHcl(routerIpv6OspfAreaRangeListStructToHclTerraform, true)(this._rangeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfAreaRangeListStructList",
      },
      virtual_link_list: {
        value: cdktf.listMapperHcl(routerIpv6OspfAreaVirtualLinkListStructToHclTerraform, true)(this._virtualLinkList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfAreaVirtualLinkListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
