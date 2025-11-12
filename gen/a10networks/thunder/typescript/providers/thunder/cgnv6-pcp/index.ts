// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_pcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6PcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bind the default template for PCP (Bind a PCP template)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_pcp#default_template Cgnv6Pcp#default_template}
  */
  readonly defaultTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_pcp#id Cgnv6Pcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_pcp#uuid Cgnv6Pcp#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_pcp#sampling_enable Cgnv6Pcp#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6PcpSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6PcpSamplingEnable {
  /**
  * 'all': all; 'packets-rcv': Packets Received; 'lsn-map-process-success': PCP MAP Request Processing Success (NAT44); 'dslite-map-process-success': PCP MAP Request Processing Success (DS-Lite); 'nat64-map-process-success': PCP MAP Request Processing Success (NAT64); 'lsn-peer-process-success': PCP PEER Request Processing Success (NAT44); 'dslite-peer-process-success': PCP PEER Request Processing Success (DS-Lite); 'nat64-peer-process-success': PCP PEER Request Processing Success (NAT64); 'lsn-announce-process-success': PCP ANNOUNCE Request Processing Success (NAT44); 'dslite-announce-process-success': PCP ANNOUNCE Request Processing Success (DS-Lite); 'nat64-announce-process-success': PCP ANNOUNCE Request Processing Success (NAT64); 'pkt-not-request-drop': Packet Not a PCP Request; 'pkt-too-short-drop': Packet Too Short; 'noroute-drop': Response No Route; 'unsupported-version': Unsupported PCP version; 'not-authorized': PCP Request Not Authorized; 'malform-request': PCP Request Malformed; 'unsupp-opcode': Unsupported PCP Opcode; 'unsupp-option': Unsupported PCP Option; 'malform-option': PCP Option Malformed; 'no-resources': No System or NAT Resources; 'unsupp-protocol': Unsupported Mapping Protocol; 'user-quota-exceeded': User Quota Exceeded; 'cannot-provide-suggest': Cannot Provide Suggested Port When PREFER_FAILURE; 'address-mismatch': PCP Client Address Mismatch; 'excessive-remote-peers': Excessive Remote Peers; 'pkt-not-from-nat-inside': Packet Dropped For Not Coming From NAT Inside; 'l4-process-error': L3/L4 Process Error; 'internal-error-drop': Internal Error; 'unsol_ance_sent_succ': Unsolicited Announce Sent; 'unsol_ance_sent_fail': Unsolicited Announce Send Failure; 'ha_sync_epoch_sent': HA Sync PCP Epoch Sent; 'ha_sync_epoch_rcv': HA Sync PCP Epoch Recv; 'fullcone-ext-alloc': PCP Fullcone Extension Alloc; 'fullcone-ext-free': PCP Fullcone Extension Free; 'fullcone-ext-alloc-failure': PCP Fullcone Extension Alloc Failure; 'fullcone-ext-notfound': PCP Fullcone Extension Not Found; 'fullcone-ext-reuse': PCP Fullcone Extension Reuse; 'client-nonce-mismatch': PCP Client Nonce Mismatch; 'map-filter-set': PCP MAP Filter Set; 'map-filter-deny': PCP MAP Filter Deny Inbound; 'inter-board-pkts': PCP Inter board packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_pcp#counters1 Cgnv6Pcp#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6PcpSamplingEnableToTerraform(struct?: Cgnv6PcpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6PcpSamplingEnableToHclTerraform(struct?: Cgnv6PcpSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6PcpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6PcpSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6PcpSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6PcpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6PcpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6PcpSamplingEnableOutputReference {
    return new Cgnv6PcpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_pcp thunder_cgnv6_pcp}
*/
export class Cgnv6Pcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_pcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Pcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Pcp to import
  * @param importFromId The id of the existing Cgnv6Pcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_pcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Pcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_pcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_pcp thunder_cgnv6_pcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6PcpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6PcpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_pcp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultTemplate = config.defaultTemplate;
    this._id = config.id;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_template - computed: false, optional: true, required: false
  private _defaultTemplate?: string; 
  public get defaultTemplate() {
    return this.getStringAttribute('default_template');
  }
  public set defaultTemplate(value: string) {
    this._defaultTemplate = value;
  }
  public resetDefaultTemplate() {
    this._defaultTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTemplateInput() {
    return this._defaultTemplate;
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
  private _samplingEnable = new Cgnv6PcpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6PcpSamplingEnable[] | cdktf.IResolvable) {
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
      default_template: cdktf.stringToTerraform(this._defaultTemplate),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(cgnv6PcpSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_template: {
        value: cdktf.stringToHclTerraform(this._defaultTemplate),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6PcpSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6PcpSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
