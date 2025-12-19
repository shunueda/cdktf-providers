// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwRateLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit#id FwRateLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit#uuid FwRateLimit#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit#sampling_enable FwRateLimit#sampling_enable}
  */
  readonly samplingEnable?: FwRateLimitSamplingEnable[] | cdktf.IResolvable;
  /**
  * summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit#summary FwRateLimit#summary}
  */
  readonly summary?: FwRateLimitSummary;
}
export interface FwRateLimitSamplingEnable {
  /**
  * 'all': all; 'ratelimit_used_total_mem': Total Memory Used For Rate-limiting (bytes); 'ratelimit_used_spm_mem': Total SPM Memory Used For Rate-limiting Infra in Bytes; 'ratelimit_used_heap_mem': Total Heap Memory Used For Rate-limiting Infra in Bytes; 'ratelimit_entry_alloc_frm_spm_mem': Total Number of Rate-limit Entries created using SPM Memory; 'ratelimit_high_accurate_entry_alloc_fail': Total Number of Failures to Create Highly Accurate Rate-limit Entries Due to Memory Allocation Failures; 'ratelimit_high_perf_entry_alloc_fail': Total Number of Failures to Create High-Perf Rate-limit Entries Due to Memory Allocation Failures; 'ratelimit_high_perf_entry_secondary_alloc_fail': Total Number of Failures to Allocate Additional Memory to Existing High-Perf Rate-limit Entries; 'ratelimit_entry_alloc_fail_rate_too_high': Total Number of Attempts to Configure Too High Rate Limits; 'ratelimit_entry_alloc_fail_metric_count_gt_supported': Total Number of Failures to Create High-Perf Rate-limit Entries Because of Too Many Metrics; 'ratelimit_entry_count_t2_key': Number of Total Rate-limit Entries; 'ratelimit_entry_count_fw_rule_uid': Number of Rate-limit Entries with Scope Aggregate; 'ratelimit_entry_count_ip_addr': Number of Rate-limit Entries with Scope IPv4 Address; 'ratelimit_entry_count_ip6_addr': Number of Rate-limit Entries with Scope IPv6 Address; 'ratelimit_entry_count_session_id': Number of Rate-limit Entries with Scope Session ID; 'ratelimit_entry_count_rule_ipv4_prefix': Number of Rate-limit Entries with Scope IPv4 Prefix; 'ratelimit_entry_count_rule_ipv6_prefix': Number of Rate-limit Entries with Scope IPv6 Prefix; 'ratelimit_entry_count_parent_uid': Number of Parent Rate-limit Entries with Scope Aggregate; 'ratelimit_entry_count_parent_ipv4_prefix': Number of Parent Rate-limit Entries with Scope IPv4 Prefix; 'ratelimit_entry_count_parent_ipv6_prefix': Number of Parent Rate-limit Entries with Scope IPv6 Prefix; 'ratelimit_infra_generic_errors': Current Number of Generic Errors Encountered in Ratelimit Infra; 'ratelimit_entry_count_allocated': Number of Rate-limit Entries Allocated Totally; 'ratelimit_entry_count_freed': Number of Rate-limit Entries Freed Totally; 'ratelimit_entry_count_rule_ip': Number of Rate-limit Entries with Scope IP; 'ratelimit_entry_count_parent_ip': Number of Parent Rate-limit Entries with Scope IP; 'ratelimit_entry_count_radius_usergroup': The total number of rate-limiting entries with the scope RADIUS user group.; 'ratelimit_entry_count_parent_radius_usergroup': The total number of parent rate-limiting entries with the scope RADIUS user group.; 'ratelimit_entry_count_radius_userid': The total number of rate-limiting entries with the scope RADIUS user ID.; 'ratelimit_entry_count_parent_radius_userid': The total number of parent rate-limiting entries with the scope RADIUS user ID.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit#counters1 FwRateLimit#counters1}
  */
  readonly counters1?: string;
}

export function fwRateLimitSamplingEnableToTerraform(struct?: FwRateLimitSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwRateLimitSamplingEnableToHclTerraform(struct?: FwRateLimitSamplingEnable | cdktf.IResolvable): any {
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

export class FwRateLimitSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwRateLimitSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwRateLimitSamplingEnable | cdktf.IResolvable | undefined) {
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

export class FwRateLimitSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwRateLimitSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwRateLimitSamplingEnableOutputReference {
    return new FwRateLimitSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwRateLimitSummary {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit#uuid FwRateLimit#uuid}
  */
  readonly uuid?: string;
}

export function fwRateLimitSummaryToTerraform(struct?: FwRateLimitSummaryOutputReference | FwRateLimitSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fwRateLimitSummaryToHclTerraform(struct?: FwRateLimitSummaryOutputReference | FwRateLimitSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class FwRateLimitSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwRateLimitSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwRateLimitSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit thunder_fw_rate_limit}
*/
export class FwRateLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_rate_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwRateLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwRateLimit to import
  * @param importFromId The id of the existing FwRateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwRateLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_rate_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_rate_limit thunder_fw_rate_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwRateLimitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwRateLimitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_rate_limit',
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
    this._summary.internalValue = config.summary;
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
  private _samplingEnable = new FwRateLimitSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwRateLimitSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // summary - computed: false, optional: true, required: false
  private _summary = new FwRateLimitSummaryOutputReference(this, "summary");
  public get summary() {
    return this._summary;
  }
  public putSummary(value: FwRateLimitSummary) {
    this._summary.internalValue = value;
  }
  public resetSummary() {
    this._summary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(fwRateLimitSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      summary: fwRateLimitSummaryToTerraform(this._summary.internalValue),
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
        value: cdktf.listMapperHcl(fwRateLimitSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwRateLimitSamplingEnableList",
      },
      summary: {
        value: fwRateLimitSummaryToHclTerraform(this._summary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwRateLimitSummaryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
