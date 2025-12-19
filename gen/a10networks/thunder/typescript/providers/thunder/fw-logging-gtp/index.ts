// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging_gtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwLoggingGtpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging_gtp#id FwLoggingGtpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging_gtp#uuid FwLoggingGtpA#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging_gtp#sampling_enable FwLoggingGtpA#sampling_enable}
  */
  readonly samplingEnable?: FwLoggingGtpSamplingEnableA[] | cdktf.IResolvable;
}
export interface FwLoggingGtpSamplingEnableA {
  /**
  * 'all': all; 'log_type_gtp_invalid_teid': Log Event Type GTP Invalid TEID; 'log_gtp_type_reserved_ie_present': Log Event Type GTP Reserved IE Present; 'log_type_gtp_mandatory_ie_missing': Log Event Type GTP Mandatory IE Missing; 'log_type_gtp_mandatory_ie_inside_grouped_ie_missing': Log Event Type GTP Mandatory IE Missing Inside Grouped IE; 'log_type_gtp_msisdn_filtering': Log Event Type GTP MSISDN Filtering; 'log_type_gtp_out_of_order_ie': Log Event Type GTP Out of Order IE V1; 'log_type_gtp_out_of_state_ie': Log Event Type GTP Out of State IE; 'log_type_enduser_ip_spoofed': Log Event Type GTP Enduser IP Spoofed; 'log_type_crosslayer_correlation': Log Event GTP Crosslayer Correlation; 'log_type_message_not_supported': Log Event GTP Reserved Message Found; 'log_type_out_of_state': Log Event GTP Out of State Message; 'log_type_max_msg_length': Log Event GTP Message Length Exceeded Max; 'log_type_gtp_message_filtering': Log Event Type GTP Message Filtering; 'log_type_gtp_apn_filtering': Log Event Type GTP Apn Filtering; 'log_type_gtp_rat_type_filtering': Log Event GTP RAT Type Filtering; 'log_type_country_code_mismatch': Log Event GTP Country Code Mismatch; 'log_type_gtp_in_gtp_filtering': Log Event GTP in GTP Filtering; 'log_type_gtp_node_restart': Log Event GTP SGW/PGW restarted; 'log_type_gtp_seq_num_mismatch': Log Event GTP Response Sequence number Mismatch; 'log_type_gtp_rate_limit_periodic': Log Event GTP Rate Limit Periodic; 'log_type_gtp_invalid_message_length': Log Event GTP Invalid message length across layers; 'log_type_gtp_hdr_invalid_protocol_flag': Log Event GTP Protocol flag in header; 'log_type_gtp_hdr_invalid_spare_bits': Log Event GTP invalid spare bits in header; 'log_type_gtp_hdr_invalid_piggy_flag': Log Event GTP invalid piggyback flag in header; 'log_type_gtp_invalid_version': Log Event invalid GTP version; 'log_type_gtp_invalid_ports': Log Event mismatch of GTP message and ports;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging_gtp#counters1 FwLoggingGtpA#counters1}
  */
  readonly counters1?: string;
}

export function fwLoggingGtpSamplingEnableAToTerraform(struct?: FwLoggingGtpSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwLoggingGtpSamplingEnableAToHclTerraform(struct?: FwLoggingGtpSamplingEnableA | cdktf.IResolvable): any {
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

export class FwLoggingGtpSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwLoggingGtpSamplingEnableA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwLoggingGtpSamplingEnableA | cdktf.IResolvable | undefined) {
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

export class FwLoggingGtpSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : FwLoggingGtpSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): FwLoggingGtpSamplingEnableAOutputReference {
    return new FwLoggingGtpSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging_gtp thunder_fw_logging_gtp}
*/
export class FwLoggingGtpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_logging_gtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwLoggingGtpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwLoggingGtpA to import
  * @param importFromId The id of the existing FwLoggingGtpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging_gtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwLoggingGtpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_logging_gtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging_gtp thunder_fw_logging_gtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwLoggingGtpAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwLoggingGtpAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_logging_gtp',
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
  private _samplingEnable = new FwLoggingGtpSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwLoggingGtpSamplingEnableA[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(fwLoggingGtpSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(fwLoggingGtpSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwLoggingGtpSamplingEnableAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
