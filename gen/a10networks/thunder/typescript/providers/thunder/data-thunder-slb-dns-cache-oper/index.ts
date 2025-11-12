// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbDnsCacheOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#id DataThunderSlbDnsCacheOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#oper DataThunderSlbDnsCacheOper#oper}
  */
  readonly oper?: DataThunderSlbDnsCacheOperOper;
}
export interface DataThunderSlbDnsCacheOperOperCacheClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#address DataThunderSlbDnsCacheOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#curr_rate DataThunderSlbDnsCacheOper#curr_rate}
  */
  readonly currRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#domain DataThunderSlbDnsCacheOper#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#lockup DataThunderSlbDnsCacheOper#lockup}
  */
  readonly lockup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#lockup_time DataThunderSlbDnsCacheOper#lockup_time}
  */
  readonly lockupTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#over_rate_limit_times DataThunderSlbDnsCacheOper#over_rate_limit_times}
  */
  readonly overRateLimitTimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#unit_type DataThunderSlbDnsCacheOper#unit_type}
  */
  readonly unitType?: string;
}

export function dataThunderSlbDnsCacheOperOperCacheClientToTerraform(struct?: DataThunderSlbDnsCacheOperOperCacheClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    curr_rate: cdktf.numberToTerraform(struct!.currRate),
    domain: cdktf.stringToTerraform(struct!.domain),
    lockup: cdktf.numberToTerraform(struct!.lockup),
    lockup_time: cdktf.numberToTerraform(struct!.lockupTime),
    over_rate_limit_times: cdktf.numberToTerraform(struct!.overRateLimitTimes),
    unit_type: cdktf.stringToTerraform(struct!.unitType),
  }
}


export function dataThunderSlbDnsCacheOperOperCacheClientToHclTerraform(struct?: DataThunderSlbDnsCacheOperOperCacheClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curr_rate: {
      value: cdktf.numberToHclTerraform(struct!.currRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockup: {
      value: cdktf.numberToHclTerraform(struct!.lockup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_time: {
      value: cdktf.numberToHclTerraform(struct!.lockupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_rate_limit_times: {
      value: cdktf.numberToHclTerraform(struct!.overRateLimitTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit_type: {
      value: cdktf.stringToHclTerraform(struct!.unitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsCacheOperOperCacheClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbDnsCacheOperOperCacheClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._currRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currRate = this._currRate;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._lockup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockup = this._lockup;
    }
    if (this._lockupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTime = this._lockupTime;
    }
    if (this._overRateLimitTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.overRateLimitTimes = this._overRateLimitTimes;
    }
    if (this._unitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitType = this._unitType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsCacheOperOperCacheClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._currRate = undefined;
      this._domain = undefined;
      this._lockup = undefined;
      this._lockupTime = undefined;
      this._overRateLimitTimes = undefined;
      this._unitType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._currRate = value.currRate;
      this._domain = value.domain;
      this._lockup = value.lockup;
      this._lockupTime = value.lockupTime;
      this._overRateLimitTimes = value.overRateLimitTimes;
      this._unitType = value.unitType;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // curr_rate - computed: false, optional: true, required: false
  private _currRate?: number; 
  public get currRate() {
    return this.getNumberAttribute('curr_rate');
  }
  public set currRate(value: number) {
    this._currRate = value;
  }
  public resetCurrRate() {
    this._currRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currRateInput() {
    return this._currRate;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // lockup - computed: false, optional: true, required: false
  private _lockup?: number; 
  public get lockup() {
    return this.getNumberAttribute('lockup');
  }
  public set lockup(value: number) {
    this._lockup = value;
  }
  public resetLockup() {
    this._lockup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupInput() {
    return this._lockup;
  }

  // lockup_time - computed: false, optional: true, required: false
  private _lockupTime?: number; 
  public get lockupTime() {
    return this.getNumberAttribute('lockup_time');
  }
  public set lockupTime(value: number) {
    this._lockupTime = value;
  }
  public resetLockupTime() {
    this._lockupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeInput() {
    return this._lockupTime;
  }

  // over_rate_limit_times - computed: false, optional: true, required: false
  private _overRateLimitTimes?: number; 
  public get overRateLimitTimes() {
    return this.getNumberAttribute('over_rate_limit_times');
  }
  public set overRateLimitTimes(value: number) {
    this._overRateLimitTimes = value;
  }
  public resetOverRateLimitTimes() {
    this._overRateLimitTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overRateLimitTimesInput() {
    return this._overRateLimitTimes;
  }

  // unit_type - computed: false, optional: true, required: false
  private _unitType?: string; 
  public get unitType() {
    return this.getStringAttribute('unit_type');
  }
  public set unitType(value: string) {
    this._unitType = value;
  }
  public resetUnitType() {
    this._unitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitTypeInput() {
    return this._unitType;
  }
}

export class DataThunderSlbDnsCacheOperOperCacheClientList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbDnsCacheOperOperCacheClient[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbDnsCacheOperOperCacheClientOutputReference {
    return new DataThunderSlbDnsCacheOperOperCacheClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbDnsCacheOperOperCacheEntryEntryRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#record_class DataThunderSlbDnsCacheOper#record_class}
  */
  readonly recordClass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#record_rdata DataThunderSlbDnsCacheOper#record_rdata}
  */
  readonly recordRdata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#record_rdata_tc DataThunderSlbDnsCacheOper#record_rdata_tc}
  */
  readonly recordRdataTc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#record_rdlen DataThunderSlbDnsCacheOper#record_rdlen}
  */
  readonly recordRdlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#record_ttl DataThunderSlbDnsCacheOper#record_ttl}
  */
  readonly recordTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#record_type DataThunderSlbDnsCacheOper#record_type}
  */
  readonly recordType?: number;
}

export function dataThunderSlbDnsCacheOperOperCacheEntryEntryRecordToTerraform(struct?: DataThunderSlbDnsCacheOperOperCacheEntryEntryRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_class: cdktf.numberToTerraform(struct!.recordClass),
    record_rdata: cdktf.stringToTerraform(struct!.recordRdata),
    record_rdata_tc: cdktf.numberToTerraform(struct!.recordRdataTc),
    record_rdlen: cdktf.numberToTerraform(struct!.recordRdlen),
    record_ttl: cdktf.numberToTerraform(struct!.recordTtl),
    record_type: cdktf.numberToTerraform(struct!.recordType),
  }
}


export function dataThunderSlbDnsCacheOperOperCacheEntryEntryRecordToHclTerraform(struct?: DataThunderSlbDnsCacheOperOperCacheEntryEntryRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_class: {
      value: cdktf.numberToHclTerraform(struct!.recordClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_rdata: {
      value: cdktf.stringToHclTerraform(struct!.recordRdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_rdata_tc: {
      value: cdktf.numberToHclTerraform(struct!.recordRdataTc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_rdlen: {
      value: cdktf.numberToHclTerraform(struct!.recordRdlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_ttl: {
      value: cdktf.numberToHclTerraform(struct!.recordTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_type: {
      value: cdktf.numberToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsCacheOperOperCacheEntryEntryRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbDnsCacheOperOperCacheEntryEntryRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordClass = this._recordClass;
    }
    if (this._recordRdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRdata = this._recordRdata;
    }
    if (this._recordRdataTc !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRdataTc = this._recordRdataTc;
    }
    if (this._recordRdlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRdlen = this._recordRdlen;
    }
    if (this._recordTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTtl = this._recordTtl;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsCacheOperOperCacheEntryEntryRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordClass = undefined;
      this._recordRdata = undefined;
      this._recordRdataTc = undefined;
      this._recordRdlen = undefined;
      this._recordTtl = undefined;
      this._recordType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordClass = value.recordClass;
      this._recordRdata = value.recordRdata;
      this._recordRdataTc = value.recordRdataTc;
      this._recordRdlen = value.recordRdlen;
      this._recordTtl = value.recordTtl;
      this._recordType = value.recordType;
    }
  }

  // record_class - computed: false, optional: true, required: false
  private _recordClass?: number; 
  public get recordClass() {
    return this.getNumberAttribute('record_class');
  }
  public set recordClass(value: number) {
    this._recordClass = value;
  }
  public resetRecordClass() {
    this._recordClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordClassInput() {
    return this._recordClass;
  }

  // record_rdata - computed: false, optional: true, required: false
  private _recordRdata?: string; 
  public get recordRdata() {
    return this.getStringAttribute('record_rdata');
  }
  public set recordRdata(value: string) {
    this._recordRdata = value;
  }
  public resetRecordRdata() {
    this._recordRdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRdataInput() {
    return this._recordRdata;
  }

  // record_rdata_tc - computed: false, optional: true, required: false
  private _recordRdataTc?: number; 
  public get recordRdataTc() {
    return this.getNumberAttribute('record_rdata_tc');
  }
  public set recordRdataTc(value: number) {
    this._recordRdataTc = value;
  }
  public resetRecordRdataTc() {
    this._recordRdataTc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRdataTcInput() {
    return this._recordRdataTc;
  }

  // record_rdlen - computed: false, optional: true, required: false
  private _recordRdlen?: number; 
  public get recordRdlen() {
    return this.getNumberAttribute('record_rdlen');
  }
  public set recordRdlen(value: number) {
    this._recordRdlen = value;
  }
  public resetRecordRdlen() {
    this._recordRdlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRdlenInput() {
    return this._recordRdlen;
  }

  // record_ttl - computed: false, optional: true, required: false
  private _recordTtl?: number; 
  public get recordTtl() {
    return this.getNumberAttribute('record_ttl');
  }
  public set recordTtl(value: number) {
    this._recordTtl = value;
  }
  public resetRecordTtl() {
    this._recordTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTtlInput() {
    return this._recordTtl;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: number; 
  public get recordType() {
    return this.getNumberAttribute('record_type');
  }
  public set recordType(value: number) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }
}

export class DataThunderSlbDnsCacheOperOperCacheEntryEntryRecordList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbDnsCacheOperOperCacheEntryEntryRecord[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbDnsCacheOperOperCacheEntryEntryRecordOutputReference {
    return new DataThunderSlbDnsCacheOperOperCacheEntryEntryRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbDnsCacheOperOperCacheEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#age DataThunderSlbDnsCacheOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#an_count DataThunderSlbDnsCacheOper#an_count}
  */
  readonly anCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#ar_count DataThunderSlbDnsCacheOper#ar_count}
  */
  readonly arCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#cache_class DataThunderSlbDnsCacheOper#cache_class}
  */
  readonly cacheClass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#cache_negative DataThunderSlbDnsCacheOper#cache_negative}
  */
  readonly cacheNegative?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#cache_type DataThunderSlbDnsCacheOper#cache_type}
  */
  readonly cacheType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#dnssec DataThunderSlbDnsCacheOper#dnssec}
  */
  readonly dnssec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#domain DataThunderSlbDnsCacheOper#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#hits DataThunderSlbDnsCacheOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#name DataThunderSlbDnsCacheOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#ns_count DataThunderSlbDnsCacheOper#ns_count}
  */
  readonly nsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#q_length DataThunderSlbDnsCacheOper#q_length}
  */
  readonly qLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#r_length DataThunderSlbDnsCacheOper#r_length}
  */
  readonly rLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#ttl DataThunderSlbDnsCacheOper#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#weight DataThunderSlbDnsCacheOper#weight}
  */
  readonly weight?: number;
  /**
  * entry_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#entry_record DataThunderSlbDnsCacheOper#entry_record}
  */
  readonly entryRecord?: DataThunderSlbDnsCacheOperOperCacheEntryEntryRecord[] | cdktf.IResolvable;
}

export function dataThunderSlbDnsCacheOperOperCacheEntryToTerraform(struct?: DataThunderSlbDnsCacheOperOperCacheEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    an_count: cdktf.numberToTerraform(struct!.anCount),
    ar_count: cdktf.numberToTerraform(struct!.arCount),
    cache_class: cdktf.numberToTerraform(struct!.cacheClass),
    cache_negative: cdktf.numberToTerraform(struct!.cacheNegative),
    cache_type: cdktf.numberToTerraform(struct!.cacheType),
    dnssec: cdktf.numberToTerraform(struct!.dnssec),
    domain: cdktf.stringToTerraform(struct!.domain),
    hits: cdktf.numberToTerraform(struct!.hits),
    name: cdktf.stringToTerraform(struct!.name),
    ns_count: cdktf.numberToTerraform(struct!.nsCount),
    q_length: cdktf.numberToTerraform(struct!.qLength),
    r_length: cdktf.numberToTerraform(struct!.rLength),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    weight: cdktf.numberToTerraform(struct!.weight),
    entry_record: cdktf.listMapper(dataThunderSlbDnsCacheOperOperCacheEntryEntryRecordToTerraform, true)(struct!.entryRecord),
  }
}


export function dataThunderSlbDnsCacheOperOperCacheEntryToHclTerraform(struct?: DataThunderSlbDnsCacheOperOperCacheEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    an_count: {
      value: cdktf.numberToHclTerraform(struct!.anCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ar_count: {
      value: cdktf.numberToHclTerraform(struct!.arCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_class: {
      value: cdktf.numberToHclTerraform(struct!.cacheClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_negative: {
      value: cdktf.numberToHclTerraform(struct!.cacheNegative),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_type: {
      value: cdktf.numberToHclTerraform(struct!.cacheType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnssec: {
      value: cdktf.numberToHclTerraform(struct!.dnssec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ns_count: {
      value: cdktf.numberToHclTerraform(struct!.nsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    q_length: {
      value: cdktf.numberToHclTerraform(struct!.qLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    r_length: {
      value: cdktf.numberToHclTerraform(struct!.rLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_record: {
      value: cdktf.listMapperHcl(dataThunderSlbDnsCacheOperOperCacheEntryEntryRecordToHclTerraform, true)(struct!.entryRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbDnsCacheOperOperCacheEntryEntryRecordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsCacheOperOperCacheEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbDnsCacheOperOperCacheEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._anCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.anCount = this._anCount;
    }
    if (this._arCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.arCount = this._arCount;
    }
    if (this._cacheClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheClass = this._cacheClass;
    }
    if (this._cacheNegative !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheNegative = this._cacheNegative;
    }
    if (this._cacheType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheType = this._cacheType;
    }
    if (this._dnssec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssec = this._dnssec;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsCount = this._nsCount;
    }
    if (this._qLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.qLength = this._qLength;
    }
    if (this._rLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.rLength = this._rLength;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._entryRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryRecord = this._entryRecord?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsCacheOperOperCacheEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._anCount = undefined;
      this._arCount = undefined;
      this._cacheClass = undefined;
      this._cacheNegative = undefined;
      this._cacheType = undefined;
      this._dnssec = undefined;
      this._domain = undefined;
      this._hits = undefined;
      this._name = undefined;
      this._nsCount = undefined;
      this._qLength = undefined;
      this._rLength = undefined;
      this._ttl = undefined;
      this._weight = undefined;
      this._entryRecord.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._anCount = value.anCount;
      this._arCount = value.arCount;
      this._cacheClass = value.cacheClass;
      this._cacheNegative = value.cacheNegative;
      this._cacheType = value.cacheType;
      this._dnssec = value.dnssec;
      this._domain = value.domain;
      this._hits = value.hits;
      this._name = value.name;
      this._nsCount = value.nsCount;
      this._qLength = value.qLength;
      this._rLength = value.rLength;
      this._ttl = value.ttl;
      this._weight = value.weight;
      this._entryRecord.internalValue = value.entryRecord;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // an_count - computed: false, optional: true, required: false
  private _anCount?: number; 
  public get anCount() {
    return this.getNumberAttribute('an_count');
  }
  public set anCount(value: number) {
    this._anCount = value;
  }
  public resetAnCount() {
    this._anCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anCountInput() {
    return this._anCount;
  }

  // ar_count - computed: false, optional: true, required: false
  private _arCount?: number; 
  public get arCount() {
    return this.getNumberAttribute('ar_count');
  }
  public set arCount(value: number) {
    this._arCount = value;
  }
  public resetArCount() {
    this._arCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arCountInput() {
    return this._arCount;
  }

  // cache_class - computed: false, optional: true, required: false
  private _cacheClass?: number; 
  public get cacheClass() {
    return this.getNumberAttribute('cache_class');
  }
  public set cacheClass(value: number) {
    this._cacheClass = value;
  }
  public resetCacheClass() {
    this._cacheClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheClassInput() {
    return this._cacheClass;
  }

  // cache_negative - computed: false, optional: true, required: false
  private _cacheNegative?: number; 
  public get cacheNegative() {
    return this.getNumberAttribute('cache_negative');
  }
  public set cacheNegative(value: number) {
    this._cacheNegative = value;
  }
  public resetCacheNegative() {
    this._cacheNegative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNegativeInput() {
    return this._cacheNegative;
  }

  // cache_type - computed: false, optional: true, required: false
  private _cacheType?: number; 
  public get cacheType() {
    return this.getNumberAttribute('cache_type');
  }
  public set cacheType(value: number) {
    this._cacheType = value;
  }
  public resetCacheType() {
    this._cacheType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTypeInput() {
    return this._cacheType;
  }

  // dnssec - computed: false, optional: true, required: false
  private _dnssec?: number; 
  public get dnssec() {
    return this.getNumberAttribute('dnssec');
  }
  public set dnssec(value: number) {
    this._dnssec = value;
  }
  public resetDnssec() {
    this._dnssec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecInput() {
    return this._dnssec;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ns_count - computed: false, optional: true, required: false
  private _nsCount?: number; 
  public get nsCount() {
    return this.getNumberAttribute('ns_count');
  }
  public set nsCount(value: number) {
    this._nsCount = value;
  }
  public resetNsCount() {
    this._nsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsCountInput() {
    return this._nsCount;
  }

  // q_length - computed: false, optional: true, required: false
  private _qLength?: number; 
  public get qLength() {
    return this.getNumberAttribute('q_length');
  }
  public set qLength(value: number) {
    this._qLength = value;
  }
  public resetQLength() {
    this._qLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qLengthInput() {
    return this._qLength;
  }

  // r_length - computed: false, optional: true, required: false
  private _rLength?: number; 
  public get rLength() {
    return this.getNumberAttribute('r_length');
  }
  public set rLength(value: number) {
    this._rLength = value;
  }
  public resetRLength() {
    this._rLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rLengthInput() {
    return this._rLength;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // entry_record - computed: false, optional: true, required: false
  private _entryRecord = new DataThunderSlbDnsCacheOperOperCacheEntryEntryRecordList(this, "entry_record", false);
  public get entryRecord() {
    return this._entryRecord;
  }
  public putEntryRecord(value: DataThunderSlbDnsCacheOperOperCacheEntryEntryRecord[] | cdktf.IResolvable) {
    this._entryRecord.internalValue = value;
  }
  public resetEntryRecord() {
    this._entryRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryRecordInput() {
    return this._entryRecord.internalValue;
  }
}

export class DataThunderSlbDnsCacheOperOperCacheEntryList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbDnsCacheOperOperCacheEntry[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbDnsCacheOperOperCacheEntryOutputReference {
    return new DataThunderSlbDnsCacheOperOperCacheEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbDnsCacheOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#cache_content DataThunderSlbDnsCacheOper#cache_content}
  */
  readonly cacheContent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#class_string DataThunderSlbDnsCacheOper#class_string}
  */
  readonly classString?: string;
  /**
  * type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#class_value DataThunderSlbDnsCacheOper#class_value}
  */
  readonly classValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#client DataThunderSlbDnsCacheOper#client}
  */
  readonly client?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#content_mode DataThunderSlbDnsCacheOper#content_mode}
  */
  readonly contentMode?: string;
  /**
  * domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#domain_name DataThunderSlbDnsCacheOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#entry DataThunderSlbDnsCacheOper#entry}
  */
  readonly entry?: number;
  /**
  * domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#fqdn_domain DataThunderSlbDnsCacheOper#fqdn_domain}
  */
  readonly fqdnDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#global DataThunderSlbDnsCacheOper#global}
  */
  readonly global?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#port_num DataThunderSlbDnsCacheOper#port_num}
  */
  readonly portNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#port_type DataThunderSlbDnsCacheOper#port_type}
  */
  readonly portType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#rdata_all DataThunderSlbDnsCacheOper#rdata_all}
  */
  readonly rdataAll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#rdata_size_value DataThunderSlbDnsCacheOper#rdata_size_value}
  */
  readonly rdataSizeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#record_all DataThunderSlbDnsCacheOper#record_all}
  */
  readonly recordAll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#record_num_value DataThunderSlbDnsCacheOper#record_num_value}
  */
  readonly recordNumValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#total DataThunderSlbDnsCacheOper#total}
  */
  readonly total?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#type_string DataThunderSlbDnsCacheOper#type_string}
  */
  readonly typeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#type_value DataThunderSlbDnsCacheOper#type_value}
  */
  readonly typeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#vport DataThunderSlbDnsCacheOper#vport}
  */
  readonly vport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#vs_name DataThunderSlbDnsCacheOper#vs_name}
  */
  readonly vsName?: string;
  /**
  * cache_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#cache_client DataThunderSlbDnsCacheOper#cache_client}
  */
  readonly cacheClient?: DataThunderSlbDnsCacheOperOperCacheClient[] | cdktf.IResolvable;
  /**
  * cache_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#cache_entry DataThunderSlbDnsCacheOper#cache_entry}
  */
  readonly cacheEntry?: DataThunderSlbDnsCacheOperOperCacheEntry[] | cdktf.IResolvable;
}

export function dataThunderSlbDnsCacheOperOperToTerraform(struct?: DataThunderSlbDnsCacheOperOperOutputReference | DataThunderSlbDnsCacheOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_content: cdktf.numberToTerraform(struct!.cacheContent),
    class_string: cdktf.stringToTerraform(struct!.classString),
    class_value: cdktf.numberToTerraform(struct!.classValue),
    client: cdktf.numberToTerraform(struct!.client),
    content_mode: cdktf.stringToTerraform(struct!.contentMode),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    entry: cdktf.numberToTerraform(struct!.entry),
    fqdn_domain: cdktf.stringToTerraform(struct!.fqdnDomain),
    global: cdktf.numberToTerraform(struct!.global),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    port_type: cdktf.stringToTerraform(struct!.portType),
    rdata_all: cdktf.numberToTerraform(struct!.rdataAll),
    rdata_size_value: cdktf.numberToTerraform(struct!.rdataSizeValue),
    record_all: cdktf.numberToTerraform(struct!.recordAll),
    record_num_value: cdktf.numberToTerraform(struct!.recordNumValue),
    total: cdktf.numberToTerraform(struct!.total),
    type_string: cdktf.stringToTerraform(struct!.typeString),
    type_value: cdktf.numberToTerraform(struct!.typeValue),
    vport: cdktf.numberToTerraform(struct!.vport),
    vs_name: cdktf.stringToTerraform(struct!.vsName),
    cache_client: cdktf.listMapper(dataThunderSlbDnsCacheOperOperCacheClientToTerraform, true)(struct!.cacheClient),
    cache_entry: cdktf.listMapper(dataThunderSlbDnsCacheOperOperCacheEntryToTerraform, true)(struct!.cacheEntry),
  }
}


export function dataThunderSlbDnsCacheOperOperToHclTerraform(struct?: DataThunderSlbDnsCacheOperOperOutputReference | DataThunderSlbDnsCacheOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_content: {
      value: cdktf.numberToHclTerraform(struct!.cacheContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_string: {
      value: cdktf.stringToHclTerraform(struct!.classString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_value: {
      value: cdktf.numberToHclTerraform(struct!.classValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client: {
      value: cdktf.numberToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_mode: {
      value: cdktf.stringToHclTerraform(struct!.contentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry: {
      value: cdktf.numberToHclTerraform(struct!.entry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_domain: {
      value: cdktf.stringToHclTerraform(struct!.fqdnDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.numberToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_type: {
      value: cdktf.stringToHclTerraform(struct!.portType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata_all: {
      value: cdktf.numberToHclTerraform(struct!.rdataAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdata_size_value: {
      value: cdktf.numberToHclTerraform(struct!.rdataSizeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_all: {
      value: cdktf.numberToHclTerraform(struct!.recordAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_num_value: {
      value: cdktf.numberToHclTerraform(struct!.recordNumValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_string: {
      value: cdktf.stringToHclTerraform(struct!.typeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_value: {
      value: cdktf.numberToHclTerraform(struct!.typeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vport: {
      value: cdktf.numberToHclTerraform(struct!.vport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vs_name: {
      value: cdktf.stringToHclTerraform(struct!.vsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_client: {
      value: cdktf.listMapperHcl(dataThunderSlbDnsCacheOperOperCacheClientToHclTerraform, true)(struct!.cacheClient),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbDnsCacheOperOperCacheClientList",
    },
    cache_entry: {
      value: cdktf.listMapperHcl(dataThunderSlbDnsCacheOperOperCacheEntryToHclTerraform, true)(struct!.cacheEntry),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbDnsCacheOperOperCacheEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsCacheOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbDnsCacheOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheContent = this._cacheContent;
    }
    if (this._classString !== undefined) {
      hasAnyValues = true;
      internalValueResult.classString = this._classString;
    }
    if (this._classValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classValue = this._classValue;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._contentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentMode = this._contentMode;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._entry !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry;
    }
    if (this._fqdnDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnDomain = this._fqdnDomain;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._portType !== undefined) {
      hasAnyValues = true;
      internalValueResult.portType = this._portType;
    }
    if (this._rdataAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdataAll = this._rdataAll;
    }
    if (this._rdataSizeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdataSizeValue = this._rdataSizeValue;
    }
    if (this._recordAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordAll = this._recordAll;
    }
    if (this._recordNumValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordNumValue = this._recordNumValue;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._typeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeString = this._typeString;
    }
    if (this._typeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeValue = this._typeValue;
    }
    if (this._vport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vport = this._vport;
    }
    if (this._vsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsName = this._vsName;
    }
    if (this._cacheClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheClient = this._cacheClient?.internalValue;
    }
    if (this._cacheEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEntry = this._cacheEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsCacheOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheContent = undefined;
      this._classString = undefined;
      this._classValue = undefined;
      this._client = undefined;
      this._contentMode = undefined;
      this._domainName = undefined;
      this._entry = undefined;
      this._fqdnDomain = undefined;
      this._global = undefined;
      this._portNum = undefined;
      this._portType = undefined;
      this._rdataAll = undefined;
      this._rdataSizeValue = undefined;
      this._recordAll = undefined;
      this._recordNumValue = undefined;
      this._total = undefined;
      this._typeString = undefined;
      this._typeValue = undefined;
      this._vport = undefined;
      this._vsName = undefined;
      this._cacheClient.internalValue = undefined;
      this._cacheEntry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheContent = value.cacheContent;
      this._classString = value.classString;
      this._classValue = value.classValue;
      this._client = value.client;
      this._contentMode = value.contentMode;
      this._domainName = value.domainName;
      this._entry = value.entry;
      this._fqdnDomain = value.fqdnDomain;
      this._global = value.global;
      this._portNum = value.portNum;
      this._portType = value.portType;
      this._rdataAll = value.rdataAll;
      this._rdataSizeValue = value.rdataSizeValue;
      this._recordAll = value.recordAll;
      this._recordNumValue = value.recordNumValue;
      this._total = value.total;
      this._typeString = value.typeString;
      this._typeValue = value.typeValue;
      this._vport = value.vport;
      this._vsName = value.vsName;
      this._cacheClient.internalValue = value.cacheClient;
      this._cacheEntry.internalValue = value.cacheEntry;
    }
  }

  // cache_content - computed: false, optional: true, required: false
  private _cacheContent?: number; 
  public get cacheContent() {
    return this.getNumberAttribute('cache_content');
  }
  public set cacheContent(value: number) {
    this._cacheContent = value;
  }
  public resetCacheContent() {
    this._cacheContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheContentInput() {
    return this._cacheContent;
  }

  // class_string - computed: false, optional: true, required: false
  private _classString?: string; 
  public get classString() {
    return this.getStringAttribute('class_string');
  }
  public set classString(value: string) {
    this._classString = value;
  }
  public resetClassString() {
    this._classString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classStringInput() {
    return this._classString;
  }

  // class_value - computed: false, optional: true, required: false
  private _classValue?: number; 
  public get classValue() {
    return this.getNumberAttribute('class_value');
  }
  public set classValue(value: number) {
    this._classValue = value;
  }
  public resetClassValue() {
    this._classValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classValueInput() {
    return this._classValue;
  }

  // client - computed: false, optional: true, required: false
  private _client?: number; 
  public get client() {
    return this.getNumberAttribute('client');
  }
  public set client(value: number) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // content_mode - computed: false, optional: true, required: false
  private _contentMode?: string; 
  public get contentMode() {
    return this.getStringAttribute('content_mode');
  }
  public set contentMode(value: string) {
    this._contentMode = value;
  }
  public resetContentMode() {
    this._contentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentModeInput() {
    return this._contentMode;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // entry - computed: false, optional: true, required: false
  private _entry?: number; 
  public get entry() {
    return this.getNumberAttribute('entry');
  }
  public set entry(value: number) {
    this._entry = value;
  }
  public resetEntry() {
    this._entry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry;
  }

  // fqdn_domain - computed: false, optional: true, required: false
  private _fqdnDomain?: string; 
  public get fqdnDomain() {
    return this.getStringAttribute('fqdn_domain');
  }
  public set fqdnDomain(value: string) {
    this._fqdnDomain = value;
  }
  public resetFqdnDomain() {
    this._fqdnDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnDomainInput() {
    return this._fqdnDomain;
  }

  // global - computed: false, optional: true, required: false
  private _global?: number; 
  public get global() {
    return this.getNumberAttribute('global');
  }
  public set global(value: number) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // port_num - computed: false, optional: true, required: false
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  public resetPortNum() {
    this._portNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // port_type - computed: false, optional: true, required: false
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  public resetPortType() {
    this._portType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // rdata_all - computed: false, optional: true, required: false
  private _rdataAll?: number; 
  public get rdataAll() {
    return this.getNumberAttribute('rdata_all');
  }
  public set rdataAll(value: number) {
    this._rdataAll = value;
  }
  public resetRdataAll() {
    this._rdataAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataAllInput() {
    return this._rdataAll;
  }

  // rdata_size_value - computed: false, optional: true, required: false
  private _rdataSizeValue?: number; 
  public get rdataSizeValue() {
    return this.getNumberAttribute('rdata_size_value');
  }
  public set rdataSizeValue(value: number) {
    this._rdataSizeValue = value;
  }
  public resetRdataSizeValue() {
    this._rdataSizeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataSizeValueInput() {
    return this._rdataSizeValue;
  }

  // record_all - computed: false, optional: true, required: false
  private _recordAll?: number; 
  public get recordAll() {
    return this.getNumberAttribute('record_all');
  }
  public set recordAll(value: number) {
    this._recordAll = value;
  }
  public resetRecordAll() {
    this._recordAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordAllInput() {
    return this._recordAll;
  }

  // record_num_value - computed: false, optional: true, required: false
  private _recordNumValue?: number; 
  public get recordNumValue() {
    return this.getNumberAttribute('record_num_value');
  }
  public set recordNumValue(value: number) {
    this._recordNumValue = value;
  }
  public resetRecordNumValue() {
    this._recordNumValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNumValueInput() {
    return this._recordNumValue;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // type_string - computed: false, optional: true, required: false
  private _typeString?: string; 
  public get typeString() {
    return this.getStringAttribute('type_string');
  }
  public set typeString(value: string) {
    this._typeString = value;
  }
  public resetTypeString() {
    this._typeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeStringInput() {
    return this._typeString;
  }

  // type_value - computed: false, optional: true, required: false
  private _typeValue?: number; 
  public get typeValue() {
    return this.getNumberAttribute('type_value');
  }
  public set typeValue(value: number) {
    this._typeValue = value;
  }
  public resetTypeValue() {
    this._typeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeValueInput() {
    return this._typeValue;
  }

  // vport - computed: false, optional: true, required: false
  private _vport?: number; 
  public get vport() {
    return this.getNumberAttribute('vport');
  }
  public set vport(value: number) {
    this._vport = value;
  }
  public resetVport() {
    this._vport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportInput() {
    return this._vport;
  }

  // vs_name - computed: false, optional: true, required: false
  private _vsName?: string; 
  public get vsName() {
    return this.getStringAttribute('vs_name');
  }
  public set vsName(value: string) {
    this._vsName = value;
  }
  public resetVsName() {
    this._vsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsNameInput() {
    return this._vsName;
  }

  // cache_client - computed: false, optional: true, required: false
  private _cacheClient = new DataThunderSlbDnsCacheOperOperCacheClientList(this, "cache_client", false);
  public get cacheClient() {
    return this._cacheClient;
  }
  public putCacheClient(value: DataThunderSlbDnsCacheOperOperCacheClient[] | cdktf.IResolvable) {
    this._cacheClient.internalValue = value;
  }
  public resetCacheClient() {
    this._cacheClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheClientInput() {
    return this._cacheClient.internalValue;
  }

  // cache_entry - computed: false, optional: true, required: false
  private _cacheEntry = new DataThunderSlbDnsCacheOperOperCacheEntryList(this, "cache_entry", false);
  public get cacheEntry() {
    return this._cacheEntry;
  }
  public putCacheEntry(value: DataThunderSlbDnsCacheOperOperCacheEntry[] | cdktf.IResolvable) {
    this._cacheEntry.internalValue = value;
  }
  public resetCacheEntry() {
    this._cacheEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEntryInput() {
    return this._cacheEntry.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper thunder_slb_dns_cache_oper}
*/
export class DataThunderSlbDnsCacheOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_dns_cache_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbDnsCacheOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbDnsCacheOper to import
  * @param importFromId The id of the existing DataThunderSlbDnsCacheOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbDnsCacheOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_dns_cache_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_cache_oper thunder_slb_dns_cache_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbDnsCacheOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbDnsCacheOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_dns_cache_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbDnsCacheOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbDnsCacheOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbDnsCacheOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbDnsCacheOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbDnsCacheOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
