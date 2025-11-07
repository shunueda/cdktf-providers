// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6SixrdDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * 6rd BR IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#br_ipv4_address Cgnv6SixrdDomain#br_ipv4_address}
  */
  readonly brIpv4Address?: string;
  /**
  * Mask length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#ce_ipv4_netmask Cgnv6SixrdDomain#ce_ipv4_netmask}
  */
  readonly ceIpv4Netmask?: string;
  /**
  * Customer Edge IPv4 network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#ce_ipv4_network Cgnv6SixrdDomain#ce_ipv4_network}
  */
  readonly ceIpv4Network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#id Cgnv6SixrdDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#ipv6_prefix Cgnv6SixrdDomain#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Tunnel MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#mtu Cgnv6SixrdDomain#mtu}
  */
  readonly mtu?: number;
  /**
  * 6rd Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#name Cgnv6SixrdDomain#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#user_tag Cgnv6SixrdDomain#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#uuid Cgnv6SixrdDomain#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#sampling_enable Cgnv6SixrdDomain#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6SixrdDomainSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6SixrdDomainSamplingEnable {
  /**
  * 'all': all; 'outbound-tcp-packets-received': Outbound TCP packets received; 'outbound-udp-packets-received': Outbound UDP packets received; 'outbound-icmp-packets-received': Outbound ICMP packets received; 'outbound-other-packets-received': Outbound other packets received; 'outbound-packets-drop': Outbound packets dropped; 'outbound-ipv6-dest-unreachable': Outbound IPv6 destination unreachable; 'outbound-fragment-ipv6': Outbound Fragmented IPv6; 'inbound-tcp-packets-received': Inbound TCP packets received; 'inbound-udp-packets-received': Inbound UDP packets received; 'inbound-icmp-packets-received': Inbound ICMP packets received; 'inbound-other-packets-received': Inbound other packets received; 'inbound-packets-drop': Inbound packets dropped; 'inbound-ipv4-dest-unreachable': Inbound IPv4 destination unreachable; 'inbound-fragment-ipv4': Inbound Fragmented IPv4; 'inbound-tunnel-fragment-ipv6': Inbound Fragmented IPv6 in tunnel; 'vport-matched': Traffic match SLB virtual port; 'unknown-delegated-prefix': Unknown 6rd delegated prefix; 'packet-too-big': Packet too big; 'not-local-ip': Not local IP; 'fragment-error': Fragment processing errors; 'other-error': Other errors;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#counters1 Cgnv6SixrdDomain#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6SixrdDomainSamplingEnableToTerraform(struct?: Cgnv6SixrdDomainSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6SixrdDomainSamplingEnableToHclTerraform(struct?: Cgnv6SixrdDomainSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6SixrdDomainSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6SixrdDomainSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6SixrdDomainSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6SixrdDomainSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6SixrdDomainSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6SixrdDomainSamplingEnableOutputReference {
    return new Cgnv6SixrdDomainSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain thunder_cgnv6_sixrd_domain}
*/
export class Cgnv6SixrdDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_sixrd_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6SixrdDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6SixrdDomain to import
  * @param importFromId The id of the existing Cgnv6SixrdDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6SixrdDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_sixrd_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sixrd_domain thunder_cgnv6_sixrd_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6SixrdDomainConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6SixrdDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_sixrd_domain',
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
    this._brIpv4Address = config.brIpv4Address;
    this._ceIpv4Netmask = config.ceIpv4Netmask;
    this._ceIpv4Network = config.ceIpv4Network;
    this._id = config.id;
    this._ipv6Prefix = config.ipv6Prefix;
    this._mtu = config.mtu;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // br_ipv4_address - computed: false, optional: true, required: false
  private _brIpv4Address?: string; 
  public get brIpv4Address() {
    return this.getStringAttribute('br_ipv4_address');
  }
  public set brIpv4Address(value: string) {
    this._brIpv4Address = value;
  }
  public resetBrIpv4Address() {
    this._brIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brIpv4AddressInput() {
    return this._brIpv4Address;
  }

  // ce_ipv4_netmask - computed: false, optional: true, required: false
  private _ceIpv4Netmask?: string; 
  public get ceIpv4Netmask() {
    return this.getStringAttribute('ce_ipv4_netmask');
  }
  public set ceIpv4Netmask(value: string) {
    this._ceIpv4Netmask = value;
  }
  public resetCeIpv4Netmask() {
    this._ceIpv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceIpv4NetmaskInput() {
    return this._ceIpv4Netmask;
  }

  // ce_ipv4_network - computed: false, optional: true, required: false
  private _ceIpv4Network?: string; 
  public get ceIpv4Network() {
    return this.getStringAttribute('ce_ipv4_network');
  }
  public set ceIpv4Network(value: string) {
    this._ceIpv4Network = value;
  }
  public resetCeIpv4Network() {
    this._ceIpv4Network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceIpv4NetworkInput() {
    return this._ceIpv4Network;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6SixrdDomainSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6SixrdDomainSamplingEnable[] | cdktf.IResolvable) {
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
      br_ipv4_address: cdktf.stringToTerraform(this._brIpv4Address),
      ce_ipv4_netmask: cdktf.stringToTerraform(this._ceIpv4Netmask),
      ce_ipv4_network: cdktf.stringToTerraform(this._ceIpv4Network),
      id: cdktf.stringToTerraform(this._id),
      ipv6_prefix: cdktf.stringToTerraform(this._ipv6Prefix),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(cgnv6SixrdDomainSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      br_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._brIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ce_ipv4_netmask: {
        value: cdktf.stringToHclTerraform(this._ceIpv4Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ce_ipv4_network: {
        value: cdktf.stringToHclTerraform(this._ceIpv4Network),
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
      ipv6_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6SixrdDomainSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6SixrdDomainSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
