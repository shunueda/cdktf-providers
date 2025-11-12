// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemDnsCacheStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#id DataThunderSystemDnsCacheStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#stats DataThunderSystemDnsCacheStats#stats}
  */
  readonly stats?: DataThunderSystemDnsCacheStatsStats;
}
export interface DataThunderSystemDnsCacheStatsStats {
  /**
  * Total aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#ageout DataThunderSystemDnsCacheStats#ageout}
  */
  readonly ageout?: number;
  /**
  * Total aged for lower weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#ageout_weight DataThunderSystemDnsCacheStats#ageout_weight}
  */
  readonly ageoutWeight?: number;
  /**
  * Response with multiple answers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#answer_r DataThunderSystemDnsCacheStats#answer_r}
  */
  readonly answerR?: number;
  /**
  * Bad Answer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#bad_answer DataThunderSystemDnsCacheStats#bad_answer}
  */
  readonly badAnswer?: number;
  /**
  * Query not passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#bad_q DataThunderSystemDnsCacheStats#bad_q}
  */
  readonly badQ?: number;
  /**
  * Response not passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#bad_r DataThunderSystemDnsCacheStats#bad_r}
  */
  readonly badR?: number;
  /**
  * Current allocate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#current_allocate DataThunderSystemDnsCacheStats#current_allocate}
  */
  readonly currentAllocate?: number;
  /**
  * Current data allocate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#current_data_allocate DataThunderSystemDnsCacheStats#current_data_allocate}
  */
  readonly currentDataAllocate?: number;
  /**
  * Query encoded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#encode_q DataThunderSystemDnsCacheStats#encode_q}
  */
  readonly encodeQ?: number;
  /**
  * Response encoded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#encode_r DataThunderSystemDnsCacheStats#encode_r}
  */
  readonly encodeR?: number;
  /**
  * Total cache hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#hit DataThunderSystemDnsCacheStats#hit}
  */
  readonly hit?: number;
  /**
  * Query with multiple questions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#multiple_q DataThunderSystemDnsCacheStats#multiple_q}
  */
  readonly multipleQ?: number;
  /**
  * Response with multiple questions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#multiple_r DataThunderSystemDnsCacheStats#multiple_r}
  */
  readonly multipleR?: number;
  /**
  * Query exceed cache size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#oversize_q DataThunderSystemDnsCacheStats#oversize_q}
  */
  readonly oversizeQ?: number;
  /**
  * Response exceed cache size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#oversize_r DataThunderSystemDnsCacheStats#oversize_r}
  */
  readonly oversizeR?: number;
  /**
  * Resolver task queue full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#resolver_queue_full DataThunderSystemDnsCacheStats#resolver_queue_full}
  */
  readonly resolverQueueFull?: number;
  /**
  * Total allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#total_alloc DataThunderSystemDnsCacheStats#total_alloc}
  */
  readonly totalAlloc?: number;
  /**
  * Total freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#total_freed DataThunderSystemDnsCacheStats#total_freed}
  */
  readonly totalFreed?: number;
  /**
  * Total stats log sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#total_log DataThunderSystemDnsCacheStats#total_log}
  */
  readonly totalLog?: number;
  /**
  * Total query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#total_q DataThunderSystemDnsCacheStats#total_q}
  */
  readonly totalQ?: number;
  /**
  * Total server response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#total_r DataThunderSystemDnsCacheStats#total_r}
  */
  readonly totalR?: number;
  /**
  * Response with Truncation bit set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#truncated_r DataThunderSystemDnsCacheStats#truncated_r}
  */
  readonly truncatedR?: number;
  /**
  * Response with short TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#ttl_r DataThunderSystemDnsCacheStats#ttl_r}
  */
  readonly ttlR?: number;
}

export function dataThunderSystemDnsCacheStatsStatsToTerraform(struct?: DataThunderSystemDnsCacheStatsStatsOutputReference | DataThunderSystemDnsCacheStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ageout: cdktf.numberToTerraform(struct!.ageout),
    ageout_weight: cdktf.numberToTerraform(struct!.ageoutWeight),
    answer_r: cdktf.numberToTerraform(struct!.answerR),
    bad_answer: cdktf.numberToTerraform(struct!.badAnswer),
    bad_q: cdktf.numberToTerraform(struct!.badQ),
    bad_r: cdktf.numberToTerraform(struct!.badR),
    current_allocate: cdktf.numberToTerraform(struct!.currentAllocate),
    current_data_allocate: cdktf.numberToTerraform(struct!.currentDataAllocate),
    encode_q: cdktf.numberToTerraform(struct!.encodeQ),
    encode_r: cdktf.numberToTerraform(struct!.encodeR),
    hit: cdktf.numberToTerraform(struct!.hit),
    multiple_q: cdktf.numberToTerraform(struct!.multipleQ),
    multiple_r: cdktf.numberToTerraform(struct!.multipleR),
    oversize_q: cdktf.numberToTerraform(struct!.oversizeQ),
    oversize_r: cdktf.numberToTerraform(struct!.oversizeR),
    resolver_queue_full: cdktf.numberToTerraform(struct!.resolverQueueFull),
    total_alloc: cdktf.numberToTerraform(struct!.totalAlloc),
    total_freed: cdktf.numberToTerraform(struct!.totalFreed),
    total_log: cdktf.numberToTerraform(struct!.totalLog),
    total_q: cdktf.numberToTerraform(struct!.totalQ),
    total_r: cdktf.numberToTerraform(struct!.totalR),
    truncated_r: cdktf.numberToTerraform(struct!.truncatedR),
    ttl_r: cdktf.numberToTerraform(struct!.ttlR),
  }
}


export function dataThunderSystemDnsCacheStatsStatsToHclTerraform(struct?: DataThunderSystemDnsCacheStatsStatsOutputReference | DataThunderSystemDnsCacheStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ageout: {
      value: cdktf.numberToHclTerraform(struct!.ageout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ageout_weight: {
      value: cdktf.numberToHclTerraform(struct!.ageoutWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    answer_r: {
      value: cdktf.numberToHclTerraform(struct!.answerR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_answer: {
      value: cdktf.numberToHclTerraform(struct!.badAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_q: {
      value: cdktf.numberToHclTerraform(struct!.badQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_r: {
      value: cdktf.numberToHclTerraform(struct!.badR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_allocate: {
      value: cdktf.numberToHclTerraform(struct!.currentAllocate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_data_allocate: {
      value: cdktf.numberToHclTerraform(struct!.currentDataAllocate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encode_q: {
      value: cdktf.numberToHclTerraform(struct!.encodeQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encode_r: {
      value: cdktf.numberToHclTerraform(struct!.encodeR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit: {
      value: cdktf.numberToHclTerraform(struct!.hit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiple_q: {
      value: cdktf.numberToHclTerraform(struct!.multipleQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiple_r: {
      value: cdktf.numberToHclTerraform(struct!.multipleR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oversize_q: {
      value: cdktf.numberToHclTerraform(struct!.oversizeQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oversize_r: {
      value: cdktf.numberToHclTerraform(struct!.oversizeR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolver_queue_full: {
      value: cdktf.numberToHclTerraform(struct!.resolverQueueFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_alloc: {
      value: cdktf.numberToHclTerraform(struct!.totalAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_log: {
      value: cdktf.numberToHclTerraform(struct!.totalLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_q: {
      value: cdktf.numberToHclTerraform(struct!.totalQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_r: {
      value: cdktf.numberToHclTerraform(struct!.totalR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    truncated_r: {
      value: cdktf.numberToHclTerraform(struct!.truncatedR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_r: {
      value: cdktf.numberToHclTerraform(struct!.ttlR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemDnsCacheStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemDnsCacheStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ageout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ageout = this._ageout;
    }
    if (this._ageoutWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.ageoutWeight = this._ageoutWeight;
    }
    if (this._answerR !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerR = this._answerR;
    }
    if (this._badAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.badAnswer = this._badAnswer;
    }
    if (this._badQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.badQ = this._badQ;
    }
    if (this._badR !== undefined) {
      hasAnyValues = true;
      internalValueResult.badR = this._badR;
    }
    if (this._currentAllocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAllocate = this._currentAllocate;
    }
    if (this._currentDataAllocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentDataAllocate = this._currentDataAllocate;
    }
    if (this._encodeQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodeQ = this._encodeQ;
    }
    if (this._encodeR !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodeR = this._encodeR;
    }
    if (this._hit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hit = this._hit;
    }
    if (this._multipleQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleQ = this._multipleQ;
    }
    if (this._multipleR !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleR = this._multipleR;
    }
    if (this._oversizeQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeQ = this._oversizeQ;
    }
    if (this._oversizeR !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeR = this._oversizeR;
    }
    if (this._resolverQueueFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverQueueFull = this._resolverQueueFull;
    }
    if (this._totalAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalAlloc = this._totalAlloc;
    }
    if (this._totalFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFreed = this._totalFreed;
    }
    if (this._totalLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLog = this._totalLog;
    }
    if (this._totalQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalQ = this._totalQ;
    }
    if (this._totalR !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalR = this._totalR;
    }
    if (this._truncatedR !== undefined) {
      hasAnyValues = true;
      internalValueResult.truncatedR = this._truncatedR;
    }
    if (this._ttlR !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlR = this._ttlR;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemDnsCacheStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ageout = undefined;
      this._ageoutWeight = undefined;
      this._answerR = undefined;
      this._badAnswer = undefined;
      this._badQ = undefined;
      this._badR = undefined;
      this._currentAllocate = undefined;
      this._currentDataAllocate = undefined;
      this._encodeQ = undefined;
      this._encodeR = undefined;
      this._hit = undefined;
      this._multipleQ = undefined;
      this._multipleR = undefined;
      this._oversizeQ = undefined;
      this._oversizeR = undefined;
      this._resolverQueueFull = undefined;
      this._totalAlloc = undefined;
      this._totalFreed = undefined;
      this._totalLog = undefined;
      this._totalQ = undefined;
      this._totalR = undefined;
      this._truncatedR = undefined;
      this._ttlR = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ageout = value.ageout;
      this._ageoutWeight = value.ageoutWeight;
      this._answerR = value.answerR;
      this._badAnswer = value.badAnswer;
      this._badQ = value.badQ;
      this._badR = value.badR;
      this._currentAllocate = value.currentAllocate;
      this._currentDataAllocate = value.currentDataAllocate;
      this._encodeQ = value.encodeQ;
      this._encodeR = value.encodeR;
      this._hit = value.hit;
      this._multipleQ = value.multipleQ;
      this._multipleR = value.multipleR;
      this._oversizeQ = value.oversizeQ;
      this._oversizeR = value.oversizeR;
      this._resolverQueueFull = value.resolverQueueFull;
      this._totalAlloc = value.totalAlloc;
      this._totalFreed = value.totalFreed;
      this._totalLog = value.totalLog;
      this._totalQ = value.totalQ;
      this._totalR = value.totalR;
      this._truncatedR = value.truncatedR;
      this._ttlR = value.ttlR;
    }
  }

  // ageout - computed: false, optional: true, required: false
  private _ageout?: number; 
  public get ageout() {
    return this.getNumberAttribute('ageout');
  }
  public set ageout(value: number) {
    this._ageout = value;
  }
  public resetAgeout() {
    this._ageout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageoutInput() {
    return this._ageout;
  }

  // ageout_weight - computed: false, optional: true, required: false
  private _ageoutWeight?: number; 
  public get ageoutWeight() {
    return this.getNumberAttribute('ageout_weight');
  }
  public set ageoutWeight(value: number) {
    this._ageoutWeight = value;
  }
  public resetAgeoutWeight() {
    this._ageoutWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageoutWeightInput() {
    return this._ageoutWeight;
  }

  // answer_r - computed: false, optional: true, required: false
  private _answerR?: number; 
  public get answerR() {
    return this.getNumberAttribute('answer_r');
  }
  public set answerR(value: number) {
    this._answerR = value;
  }
  public resetAnswerR() {
    this._answerR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerRInput() {
    return this._answerR;
  }

  // bad_answer - computed: false, optional: true, required: false
  private _badAnswer?: number; 
  public get badAnswer() {
    return this.getNumberAttribute('bad_answer');
  }
  public set badAnswer(value: number) {
    this._badAnswer = value;
  }
  public resetBadAnswer() {
    this._badAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badAnswerInput() {
    return this._badAnswer;
  }

  // bad_q - computed: false, optional: true, required: false
  private _badQ?: number; 
  public get badQ() {
    return this.getNumberAttribute('bad_q');
  }
  public set badQ(value: number) {
    this._badQ = value;
  }
  public resetBadQ() {
    this._badQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badQInput() {
    return this._badQ;
  }

  // bad_r - computed: false, optional: true, required: false
  private _badR?: number; 
  public get badR() {
    return this.getNumberAttribute('bad_r');
  }
  public set badR(value: number) {
    this._badR = value;
  }
  public resetBadR() {
    this._badR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRInput() {
    return this._badR;
  }

  // current_allocate - computed: false, optional: true, required: false
  private _currentAllocate?: number; 
  public get currentAllocate() {
    return this.getNumberAttribute('current_allocate');
  }
  public set currentAllocate(value: number) {
    this._currentAllocate = value;
  }
  public resetCurrentAllocate() {
    this._currentAllocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAllocateInput() {
    return this._currentAllocate;
  }

  // current_data_allocate - computed: false, optional: true, required: false
  private _currentDataAllocate?: number; 
  public get currentDataAllocate() {
    return this.getNumberAttribute('current_data_allocate');
  }
  public set currentDataAllocate(value: number) {
    this._currentDataAllocate = value;
  }
  public resetCurrentDataAllocate() {
    this._currentDataAllocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentDataAllocateInput() {
    return this._currentDataAllocate;
  }

  // encode_q - computed: false, optional: true, required: false
  private _encodeQ?: number; 
  public get encodeQ() {
    return this.getNumberAttribute('encode_q');
  }
  public set encodeQ(value: number) {
    this._encodeQ = value;
  }
  public resetEncodeQ() {
    this._encodeQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeQInput() {
    return this._encodeQ;
  }

  // encode_r - computed: false, optional: true, required: false
  private _encodeR?: number; 
  public get encodeR() {
    return this.getNumberAttribute('encode_r');
  }
  public set encodeR(value: number) {
    this._encodeR = value;
  }
  public resetEncodeR() {
    this._encodeR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeRInput() {
    return this._encodeR;
  }

  // hit - computed: false, optional: true, required: false
  private _hit?: number; 
  public get hit() {
    return this.getNumberAttribute('hit');
  }
  public set hit(value: number) {
    this._hit = value;
  }
  public resetHit() {
    this._hit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitInput() {
    return this._hit;
  }

  // multiple_q - computed: false, optional: true, required: false
  private _multipleQ?: number; 
  public get multipleQ() {
    return this.getNumberAttribute('multiple_q');
  }
  public set multipleQ(value: number) {
    this._multipleQ = value;
  }
  public resetMultipleQ() {
    this._multipleQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleQInput() {
    return this._multipleQ;
  }

  // multiple_r - computed: false, optional: true, required: false
  private _multipleR?: number; 
  public get multipleR() {
    return this.getNumberAttribute('multiple_r');
  }
  public set multipleR(value: number) {
    this._multipleR = value;
  }
  public resetMultipleR() {
    this._multipleR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleRInput() {
    return this._multipleR;
  }

  // oversize_q - computed: false, optional: true, required: false
  private _oversizeQ?: number; 
  public get oversizeQ() {
    return this.getNumberAttribute('oversize_q');
  }
  public set oversizeQ(value: number) {
    this._oversizeQ = value;
  }
  public resetOversizeQ() {
    this._oversizeQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeQInput() {
    return this._oversizeQ;
  }

  // oversize_r - computed: false, optional: true, required: false
  private _oversizeR?: number; 
  public get oversizeR() {
    return this.getNumberAttribute('oversize_r');
  }
  public set oversizeR(value: number) {
    this._oversizeR = value;
  }
  public resetOversizeR() {
    this._oversizeR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeRInput() {
    return this._oversizeR;
  }

  // resolver_queue_full - computed: false, optional: true, required: false
  private _resolverQueueFull?: number; 
  public get resolverQueueFull() {
    return this.getNumberAttribute('resolver_queue_full');
  }
  public set resolverQueueFull(value: number) {
    this._resolverQueueFull = value;
  }
  public resetResolverQueueFull() {
    this._resolverQueueFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverQueueFullInput() {
    return this._resolverQueueFull;
  }

  // total_alloc - computed: false, optional: true, required: false
  private _totalAlloc?: number; 
  public get totalAlloc() {
    return this.getNumberAttribute('total_alloc');
  }
  public set totalAlloc(value: number) {
    this._totalAlloc = value;
  }
  public resetTotalAlloc() {
    this._totalAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalAllocInput() {
    return this._totalAlloc;
  }

  // total_freed - computed: false, optional: true, required: false
  private _totalFreed?: number; 
  public get totalFreed() {
    return this.getNumberAttribute('total_freed');
  }
  public set totalFreed(value: number) {
    this._totalFreed = value;
  }
  public resetTotalFreed() {
    this._totalFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFreedInput() {
    return this._totalFreed;
  }

  // total_log - computed: false, optional: true, required: false
  private _totalLog?: number; 
  public get totalLog() {
    return this.getNumberAttribute('total_log');
  }
  public set totalLog(value: number) {
    this._totalLog = value;
  }
  public resetTotalLog() {
    this._totalLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLogInput() {
    return this._totalLog;
  }

  // total_q - computed: false, optional: true, required: false
  private _totalQ?: number; 
  public get totalQ() {
    return this.getNumberAttribute('total_q');
  }
  public set totalQ(value: number) {
    this._totalQ = value;
  }
  public resetTotalQ() {
    this._totalQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalQInput() {
    return this._totalQ;
  }

  // total_r - computed: false, optional: true, required: false
  private _totalR?: number; 
  public get totalR() {
    return this.getNumberAttribute('total_r');
  }
  public set totalR(value: number) {
    this._totalR = value;
  }
  public resetTotalR() {
    this._totalR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRInput() {
    return this._totalR;
  }

  // truncated_r - computed: false, optional: true, required: false
  private _truncatedR?: number; 
  public get truncatedR() {
    return this.getNumberAttribute('truncated_r');
  }
  public set truncatedR(value: number) {
    this._truncatedR = value;
  }
  public resetTruncatedR() {
    this._truncatedR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncatedRInput() {
    return this._truncatedR;
  }

  // ttl_r - computed: false, optional: true, required: false
  private _ttlR?: number; 
  public get ttlR() {
    return this.getNumberAttribute('ttl_r');
  }
  public set ttlR(value: number) {
    this._ttlR = value;
  }
  public resetTtlR() {
    this._ttlR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlRInput() {
    return this._ttlR;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats thunder_system_dns_cache_stats}
*/
export class DataThunderSystemDnsCacheStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_dns_cache_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemDnsCacheStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemDnsCacheStats to import
  * @param importFromId The id of the existing DataThunderSystemDnsCacheStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemDnsCacheStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_dns_cache_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dns_cache_stats thunder_system_dns_cache_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemDnsCacheStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemDnsCacheStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_dns_cache_stats',
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
    this._id = config.id;
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSystemDnsCacheStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemDnsCacheStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSystemDnsCacheStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSystemDnsCacheStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemDnsCacheStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
