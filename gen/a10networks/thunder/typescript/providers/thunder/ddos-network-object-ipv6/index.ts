// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNetworkObjectIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#id DdosNetworkObjectIpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ObjectName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#object_name DdosNetworkObjectIpv6#object_name}
  */
  readonly objectName: string;
  /**
  * IPV6 Subnet, supported prefix range is from 40 to 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#subnet_ipv6_addr DdosNetworkObjectIpv6#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#user_tag DdosNetworkObjectIpv6#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#uuid DdosNetworkObjectIpv6#uuid}
  */
  readonly uuid?: string;
  /**
  * prefix_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#prefix_anomaly_threshold DdosNetworkObjectIpv6#prefix_anomaly_threshold}
  */
  readonly prefixAnomalyThreshold?: DdosNetworkObjectIpv6PrefixAnomalyThreshold;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#sampling_enable DdosNetworkObjectIpv6#sampling_enable}
  */
  readonly samplingEnable?: DdosNetworkObjectIpv6SamplingEnable[] | cdktf.IResolvable;
}
export interface DdosNetworkObjectIpv6PrefixAnomalyThreshold {
  /**
  * Bit rate of the prefix subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#prefix_bit_rate DdosNetworkObjectIpv6#prefix_bit_rate}
  */
  readonly prefixBitRate?: number;
  /**
  * Packet rate of the prefix subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#prefix_pkt_rate DdosNetworkObjectIpv6#prefix_pkt_rate}
  */
  readonly prefixPktRate?: number;
}

export function ddosNetworkObjectIpv6PrefixAnomalyThresholdToTerraform(struct?: DdosNetworkObjectIpv6PrefixAnomalyThresholdOutputReference | DdosNetworkObjectIpv6PrefixAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_bit_rate: cdktf.numberToTerraform(struct!.prefixBitRate),
    prefix_pkt_rate: cdktf.numberToTerraform(struct!.prefixPktRate),
  }
}


export function ddosNetworkObjectIpv6PrefixAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectIpv6PrefixAnomalyThresholdOutputReference | DdosNetworkObjectIpv6PrefixAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.prefixBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.prefixPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectIpv6PrefixAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectIpv6PrefixAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixBitRate = this._prefixBitRate;
    }
    if (this._prefixPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPktRate = this._prefixPktRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectIpv6PrefixAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixBitRate = undefined;
      this._prefixPktRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixBitRate = value.prefixBitRate;
      this._prefixPktRate = value.prefixPktRate;
    }
  }

  // prefix_bit_rate - computed: false, optional: true, required: false
  private _prefixBitRate?: number; 
  public get prefixBitRate() {
    return this.getNumberAttribute('prefix_bit_rate');
  }
  public set prefixBitRate(value: number) {
    this._prefixBitRate = value;
  }
  public resetPrefixBitRate() {
    this._prefixBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixBitRateInput() {
    return this._prefixBitRate;
  }

  // prefix_pkt_rate - computed: false, optional: true, required: false
  private _prefixPktRate?: number; 
  public get prefixPktRate() {
    return this.getNumberAttribute('prefix_pkt_rate');
  }
  public set prefixPktRate(value: number) {
    this._prefixPktRate = value;
  }
  public resetPrefixPktRate() {
    this._prefixPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPktRateInput() {
    return this._prefixPktRate;
  }
}
export interface DdosNetworkObjectIpv6SamplingEnable {
  /**
  * 'all': all; 'packet_rate': PPS; 'bit_rate': B(bits)PS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#counters1 DdosNetworkObjectIpv6#counters1}
  */
  readonly counters1?: string;
}

export function ddosNetworkObjectIpv6SamplingEnableToTerraform(struct?: DdosNetworkObjectIpv6SamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosNetworkObjectIpv6SamplingEnableToHclTerraform(struct?: DdosNetworkObjectIpv6SamplingEnable | cdktf.IResolvable): any {
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

export class DdosNetworkObjectIpv6SamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectIpv6SamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosNetworkObjectIpv6SamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosNetworkObjectIpv6SamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectIpv6SamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectIpv6SamplingEnableOutputReference {
    return new DdosNetworkObjectIpv6SamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6 thunder_ddos_network_object_ipv6}
*/
export class DdosNetworkObjectIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNetworkObjectIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNetworkObjectIpv6 to import
  * @param importFromId The id of the existing DdosNetworkObjectIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNetworkObjectIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_ipv6 thunder_ddos_network_object_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNetworkObjectIpv6Config
  */
  public constructor(scope: Construct, id: string, config: DdosNetworkObjectIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_ipv6',
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
    this._objectName = config.objectName;
    this._subnetIpv6Addr = config.subnetIpv6Addr;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._prefixAnomalyThreshold.internalValue = config.prefixAnomalyThreshold;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // subnet_ipv6_addr - computed: false, optional: false, required: true
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
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

  // prefix_anomaly_threshold - computed: false, optional: true, required: false
  private _prefixAnomalyThreshold = new DdosNetworkObjectIpv6PrefixAnomalyThresholdOutputReference(this, "prefix_anomaly_threshold");
  public get prefixAnomalyThreshold() {
    return this._prefixAnomalyThreshold;
  }
  public putPrefixAnomalyThreshold(value: DdosNetworkObjectIpv6PrefixAnomalyThreshold) {
    this._prefixAnomalyThreshold.internalValue = value;
  }
  public resetPrefixAnomalyThreshold() {
    this._prefixAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixAnomalyThresholdInput() {
    return this._prefixAnomalyThreshold.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosNetworkObjectIpv6SamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosNetworkObjectIpv6SamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_name: cdktf.stringToTerraform(this._objectName),
      subnet_ipv6_addr: cdktf.stringToTerraform(this._subnetIpv6Addr),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      prefix_anomaly_threshold: ddosNetworkObjectIpv6PrefixAnomalyThresholdToTerraform(this._prefixAnomalyThreshold.internalValue),
      sampling_enable: cdktf.listMapper(ddosNetworkObjectIpv6SamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._subnetIpv6Addr),
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
      prefix_anomaly_threshold: {
        value: ddosNetworkObjectIpv6PrefixAnomalyThresholdToHclTerraform(this._prefixAnomalyThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectIpv6PrefixAnomalyThresholdList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ddosNetworkObjectIpv6SamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectIpv6SamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
