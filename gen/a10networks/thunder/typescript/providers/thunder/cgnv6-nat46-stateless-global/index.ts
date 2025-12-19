// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Nat46StatelessGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#id Cgnv6Nat46StatelessGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#uuid Cgnv6Nat46StatelessGlobal#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#sampling_enable Cgnv6Nat46StatelessGlobal#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6Nat46StatelessGlobalSamplingEnable[] | cdktf.IResolvable;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#tcp Cgnv6Nat46StatelessGlobal#tcp}
  */
  readonly tcp?: Cgnv6Nat46StatelessGlobalTcp;
}
export interface Cgnv6Nat46StatelessGlobalSamplingEnable {
  /**
  * 'all': all; 'outbound_ipv4_received': Outbound IPv4 packets received; 'outbound_ipv4_drop': Outbound IPv4 packets dropped; 'outbound_ipv4_fragment_received': Outbound IPv4 fragment packets received; 'outbound_ipv6_unreachable': Outbound IPv6 destination unreachable; 'outbound_ipv6_fragmented': Outbound IPv6 packets fragmented; 'inbound_ipv6_received': Inbound IPv6 packets received; 'inbound_ipv6_drop': Inbound IPv6 packets dropped; 'inbound_ipv6_fragment_received': Inbound IPv6 fragment packets received; 'inbound_ipv4_unreachable': Inbound IPv4 destination unreachable; 'inbound_ipv4_fragmented': Inbound IPv4 packets fragmented; 'packet_too_big': Packet too big; 'fragment_error': Fragment processing errors; 'icmpv6_to_icmp': ICMPv6 to ICMP; 'icmpv6_to_icmp_error': ICMPv6 to ICMP errors; 'icmp_to_icmpv6': ICMP to ICMPv6; 'icmp_to_icmpv6_error': ICMP to ICMPv6 errors; 'ha_standby': HA is standby; 'other_error': Other errors; 'conn_count': conn count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#counters1 Cgnv6Nat46StatelessGlobal#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6Nat46StatelessGlobalSamplingEnableToTerraform(struct?: Cgnv6Nat46StatelessGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6Nat46StatelessGlobalSamplingEnableToHclTerraform(struct?: Cgnv6Nat46StatelessGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat46StatelessGlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6Nat46StatelessGlobalSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat46StatelessGlobalSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Cgnv6Nat46StatelessGlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Nat46StatelessGlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Nat46StatelessGlobalSamplingEnableOutputReference {
    return new Cgnv6Nat46StatelessGlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6Nat46StatelessGlobalTcpMssClamp {
  /**
  * Specify the min value allowed for the TCP MSS (Specify the min value allowed for the TCP MSS (default: ((576 - 60 - 60))))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#min Cgnv6Nat46StatelessGlobal#min}
  */
  readonly min?: number;
  /**
  * 'fixed': Specify a fixed max value for the TCP MSS; 'none': No TCP MSS clamping; 'subtract': Specify the value to subtract from the TCP MSS (default: 20);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#mss_clamp_type Cgnv6Nat46StatelessGlobal#mss_clamp_type}
  */
  readonly mssClampType?: string;
  /**
  * Specify the value to subtract from the TCP MSS (default: 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#mss_subtract Cgnv6Nat46StatelessGlobal#mss_subtract}
  */
  readonly mssSubtract?: number;
  /**
  * The max value allowed for the TCP MSS (default: not configured)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#mss_value Cgnv6Nat46StatelessGlobal#mss_value}
  */
  readonly mssValue?: number;
}

export function cgnv6Nat46StatelessGlobalTcpMssClampToTerraform(struct?: Cgnv6Nat46StatelessGlobalTcpMssClampOutputReference | Cgnv6Nat46StatelessGlobalTcpMssClamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min: cdktf.numberToTerraform(struct!.min),
    mss_clamp_type: cdktf.stringToTerraform(struct!.mssClampType),
    mss_subtract: cdktf.numberToTerraform(struct!.mssSubtract),
    mss_value: cdktf.numberToTerraform(struct!.mssValue),
  }
}


export function cgnv6Nat46StatelessGlobalTcpMssClampToHclTerraform(struct?: Cgnv6Nat46StatelessGlobalTcpMssClampOutputReference | Cgnv6Nat46StatelessGlobalTcpMssClamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_clamp_type: {
      value: cdktf.stringToHclTerraform(struct!.mssClampType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss_subtract: {
      value: cdktf.numberToHclTerraform(struct!.mssSubtract),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_value: {
      value: cdktf.numberToHclTerraform(struct!.mssValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat46StatelessGlobalTcpMssClampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Nat46StatelessGlobalTcpMssClamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._mssClampType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssClampType = this._mssClampType;
    }
    if (this._mssSubtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssSubtract = this._mssSubtract;
    }
    if (this._mssValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssValue = this._mssValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat46StatelessGlobalTcpMssClamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._min = undefined;
      this._mssClampType = undefined;
      this._mssSubtract = undefined;
      this._mssValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._min = value.min;
      this._mssClampType = value.mssClampType;
      this._mssSubtract = value.mssSubtract;
      this._mssValue = value.mssValue;
    }
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // mss_clamp_type - computed: false, optional: true, required: false
  private _mssClampType?: string; 
  public get mssClampType() {
    return this.getStringAttribute('mss_clamp_type');
  }
  public set mssClampType(value: string) {
    this._mssClampType = value;
  }
  public resetMssClampType() {
    this._mssClampType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssClampTypeInput() {
    return this._mssClampType;
  }

  // mss_subtract - computed: false, optional: true, required: false
  private _mssSubtract?: number; 
  public get mssSubtract() {
    return this.getNumberAttribute('mss_subtract');
  }
  public set mssSubtract(value: number) {
    this._mssSubtract = value;
  }
  public resetMssSubtract() {
    this._mssSubtract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssSubtractInput() {
    return this._mssSubtract;
  }

  // mss_value - computed: false, optional: true, required: false
  private _mssValue?: number; 
  public get mssValue() {
    return this.getNumberAttribute('mss_value');
  }
  public set mssValue(value: number) {
    this._mssValue = value;
  }
  public resetMssValue() {
    this._mssValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssValueInput() {
    return this._mssValue;
  }
}
export interface Cgnv6Nat46StatelessGlobalTcp {
  /**
  * mss_clamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#mss_clamp Cgnv6Nat46StatelessGlobal#mss_clamp}
  */
  readonly mssClamp?: Cgnv6Nat46StatelessGlobalTcpMssClamp;
}

export function cgnv6Nat46StatelessGlobalTcpToTerraform(struct?: Cgnv6Nat46StatelessGlobalTcpOutputReference | Cgnv6Nat46StatelessGlobalTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss_clamp: cgnv6Nat46StatelessGlobalTcpMssClampToTerraform(struct!.mssClamp),
  }
}


export function cgnv6Nat46StatelessGlobalTcpToHclTerraform(struct?: Cgnv6Nat46StatelessGlobalTcpOutputReference | Cgnv6Nat46StatelessGlobalTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mss_clamp: {
      value: cgnv6Nat46StatelessGlobalTcpMssClampToHclTerraform(struct!.mssClamp),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6Nat46StatelessGlobalTcpMssClampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat46StatelessGlobalTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Nat46StatelessGlobalTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mssClamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssClamp = this._mssClamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat46StatelessGlobalTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mssClamp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mssClamp.internalValue = value.mssClamp;
    }
  }

  // mss_clamp - computed: false, optional: true, required: false
  private _mssClamp = new Cgnv6Nat46StatelessGlobalTcpMssClampOutputReference(this, "mss_clamp");
  public get mssClamp() {
    return this._mssClamp;
  }
  public putMssClamp(value: Cgnv6Nat46StatelessGlobalTcpMssClamp) {
    this._mssClamp.internalValue = value;
  }
  public resetMssClamp() {
    this._mssClamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssClampInput() {
    return this._mssClamp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global thunder_cgnv6_nat46_stateless_global}
*/
export class Cgnv6Nat46StatelessGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat46_stateless_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Nat46StatelessGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Nat46StatelessGlobal to import
  * @param importFromId The id of the existing Cgnv6Nat46StatelessGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Nat46StatelessGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat46_stateless_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat46_stateless_global thunder_cgnv6_nat46_stateless_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Nat46StatelessGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Nat46StatelessGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat46_stateless_global',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._tcp.internalValue = config.tcp;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6Nat46StatelessGlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6Nat46StatelessGlobalSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new Cgnv6Nat46StatelessGlobalTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: Cgnv6Nat46StatelessGlobalTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(cgnv6Nat46StatelessGlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      tcp: cgnv6Nat46StatelessGlobalTcpToTerraform(this._tcp.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6Nat46StatelessGlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Nat46StatelessGlobalSamplingEnableList",
      },
      tcp: {
        value: cgnv6Nat46StatelessGlobalTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Nat46StatelessGlobalTcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
