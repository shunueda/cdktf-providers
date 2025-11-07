// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_icmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6IcmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_icmp#id Cgnv6Icmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_icmp#uuid Cgnv6Icmp#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_icmp#sampling_enable Cgnv6Icmp#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6IcmpSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6IcmpSamplingEnable {
  /**
  * 'all': all; 'icmp-unknown-type': ICMP Unknown Type; 'icmp-no-port-info': ICMP Port Info Not Included; 'icmp-no-session-drop': ICMP No Matching Session Drop; 'icmpv6-unknown-type': ICMPv6 Unknown Type; 'icmpv6-no-port-info': ICMPv6 Port Info Not Included; 'icmpv6-no-session-drop': ICMPv6 No Matching Session Drop; 'icmp-to-icmp': ICMP to ICMP Conversion; 'icmp-to-icmpv6': ICMP to ICMPv6 Conversion; 'icmpv6-to-icmp': ICMPv6 to ICMP Conversion; 'icmpv6-to-icmpv6': ICMPv6 to ICMPv6 Conversion; 'icmp-bad-type': Bad Embedded ICMP Type; 'icmpv6-bad-type': Bad Embedded ICMPv6 Type; '64-known-drop': NAT64 Forward Known ICMPv6 Drop; '64-unknown-drop': NAT64 Forward Unknown ICMPv6 Drop; '64-midpoint-hop': NAT64 Forward Unknown Source Drop; '46-known-drop': NAT64 Reverse Known ICMP Drop; '46-unknown-drop': NAT64 Reverse Known ICMPv6 Drop; '46-no-prefix-for-ipv4': NAT64 Reverse No Prefix Match for IPv4; '46-bad-encap-ip-header-len': 4to6 Bad Encapsulated IP Header Length; 'icmp-to-icmp-err': ICMP to ICMP Conversion Error; 'icmp-to-icmpv6-err': ICMP to ICMPv6 Conversion Error; 'icmpv6-to-icmp-err': ICMPv6 to ICMP Conversion Error; 'icmpv6-to-icmpv6-err': ICMPv6 to ICMPv6 Conversion Error; 'encap-cross-cpu-no-match': ICMP Embedded Cross CPU No Matching Session; 'encap-cross-cpu-preprocess-err': ICMP Embedded Cross CPU Preprocess Error; 'icmp-to-icmp-unknown-l4': ICMP Embedded Unknown L4 Protocol; 'icmp-to-icmpv6-unknown-l4': ICMP to ICMPv6 Embedded Unknown L4 Protocol; 'icmpv6-to-icmp-unknown-l4': ICMPv6 to ICMP Embedded Unknown L4 Protocol; 'icmpv6-to-icmpv6-unknown-l4': ICMPv6 to ICMPv6 Embedded Unknown L4 Protocol; 'static-nat': ICMP Static NAT; 'echo-to-pool-reply': Ping to Pool Reply; 'echo-to-pool-drop': Ping to Pool Drop; 'error-to-pool-drop': Error to Pool Drop; 'echo-to-pool-reply-v6': Ping6 to Pool Reply; 'echo-to-pool-drop-v6': Ping6 to Pool Drop; 'error-to-pool-drop-v6': Error to IPv6 Pool Drop; 'error-ip-mismatch': ICMP IP address mismatch;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_icmp#counters1 Cgnv6Icmp#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6IcmpSamplingEnableToTerraform(struct?: Cgnv6IcmpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6IcmpSamplingEnableToHclTerraform(struct?: Cgnv6IcmpSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6IcmpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6IcmpSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6IcmpSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6IcmpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6IcmpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6IcmpSamplingEnableOutputReference {
    return new Cgnv6IcmpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_icmp thunder_cgnv6_icmp}
*/
export class Cgnv6Icmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_icmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Icmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Icmp to import
  * @param importFromId The id of the existing Cgnv6Icmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_icmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Icmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_icmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_icmp thunder_cgnv6_icmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6IcmpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6IcmpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_icmp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _samplingEnable = new Cgnv6IcmpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6IcmpSamplingEnable[] | cdktf.IResolvable) {
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
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(cgnv6IcmpSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(cgnv6IcmpSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6IcmpSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
