// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#id DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortRangeEnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#port_range_end DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#port_range_end}
  */
  readonly portRangeEnd: string;
  /**
  * PortRangeStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#port_range_start DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#port_range_start}
  */
  readonly portRangeStart: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#protocol DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#protocol}
  */
  readonly protocol: string;
  /**
  * name for virtualhost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#vhost DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#vhost}
  */
  readonly vhost: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#zone_name DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#oper DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOper;
}
export interface DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_http_filter_rate DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_http_filter_rate}
  */
  readonly currentHttpFilterRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#http_filter_rate_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#http_filter_rate_limit}
  */
  readonly httpFilterRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#http_filter_rate_name DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#http_filter_rate_name}
  */
  readonly httpFilterRateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_http_filter_rate_limit_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_http_filter_rate_limit_exceed}
  */
  readonly isHttpFilterRateLimitExceed?: number;
}

export function dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesToTerraform(struct?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_http_filter_rate: cdktf.stringToTerraform(struct!.currentHttpFilterRate),
    http_filter_rate_limit: cdktf.stringToTerraform(struct!.httpFilterRateLimit),
    http_filter_rate_name: cdktf.stringToTerraform(struct!.httpFilterRateName),
    is_http_filter_rate_limit_exceed: cdktf.numberToTerraform(struct!.isHttpFilterRateLimitExceed),
  }
}


export function dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesToHclTerraform(struct?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_http_filter_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentHttpFilterRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_rate_name: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_http_filter_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isHttpFilterRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentHttpFilterRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentHttpFilterRate = this._currentHttpFilterRate;
    }
    if (this._httpFilterRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRateLimit = this._httpFilterRateLimit;
    }
    if (this._httpFilterRateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRateName = this._httpFilterRateName;
    }
    if (this._isHttpFilterRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHttpFilterRateLimitExceed = this._isHttpFilterRateLimitExceed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentHttpFilterRate = undefined;
      this._httpFilterRateLimit = undefined;
      this._httpFilterRateName = undefined;
      this._isHttpFilterRateLimitExceed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentHttpFilterRate = value.currentHttpFilterRate;
      this._httpFilterRateLimit = value.httpFilterRateLimit;
      this._httpFilterRateName = value.httpFilterRateName;
      this._isHttpFilterRateLimitExceed = value.isHttpFilterRateLimitExceed;
    }
  }

  // current_http_filter_rate - computed: false, optional: true, required: false
  private _currentHttpFilterRate?: string; 
  public get currentHttpFilterRate() {
    return this.getStringAttribute('current_http_filter_rate');
  }
  public set currentHttpFilterRate(value: string) {
    this._currentHttpFilterRate = value;
  }
  public resetCurrentHttpFilterRate() {
    this._currentHttpFilterRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentHttpFilterRateInput() {
    return this._currentHttpFilterRate;
  }

  // http_filter_rate_limit - computed: false, optional: true, required: false
  private _httpFilterRateLimit?: string; 
  public get httpFilterRateLimit() {
    return this.getStringAttribute('http_filter_rate_limit');
  }
  public set httpFilterRateLimit(value: string) {
    this._httpFilterRateLimit = value;
  }
  public resetHttpFilterRateLimit() {
    this._httpFilterRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRateLimitInput() {
    return this._httpFilterRateLimit;
  }

  // http_filter_rate_name - computed: false, optional: true, required: false
  private _httpFilterRateName?: string; 
  public get httpFilterRateName() {
    return this.getStringAttribute('http_filter_rate_name');
  }
  public set httpFilterRateName(value: string) {
    this._httpFilterRateName = value;
  }
  public resetHttpFilterRateName() {
    this._httpFilterRateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRateNameInput() {
    return this._httpFilterRateName;
  }

  // is_http_filter_rate_limit_exceed - computed: false, optional: true, required: false
  private _isHttpFilterRateLimitExceed?: number; 
  public get isHttpFilterRateLimitExceed() {
    return this.getNumberAttribute('is_http_filter_rate_limit_exceed');
  }
  public set isHttpFilterRateLimitExceed(value: number) {
    this._isHttpFilterRateLimitExceed = value;
  }
  public resetIsHttpFilterRateLimitExceed() {
    this._isHttpFilterRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpFilterRateLimitExceedInput() {
    return this._isHttpFilterRateLimitExceed;
  }
}

export class DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRates[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesOutputReference {
    return new DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_response_size_rate DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_response_size_rate}
  */
  readonly currentResponseSizeRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_response_size_rate_limit_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_response_size_rate_limit_exceed}
  */
  readonly isResponseSizeRateLimitExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#response_size_rate_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#response_size_rate_limit}
  */
  readonly responseSizeRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#response_size_rate_name DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#response_size_rate_name}
  */
  readonly responseSizeRateName?: string;
}

export function dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesToTerraform(struct?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_response_size_rate: cdktf.stringToTerraform(struct!.currentResponseSizeRate),
    is_response_size_rate_limit_exceed: cdktf.numberToTerraform(struct!.isResponseSizeRateLimitExceed),
    response_size_rate_limit: cdktf.stringToTerraform(struct!.responseSizeRateLimit),
    response_size_rate_name: cdktf.stringToTerraform(struct!.responseSizeRateName),
  }
}


export function dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesToHclTerraform(struct?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_response_size_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentResponseSizeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_response_size_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isResponseSizeRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_size_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.responseSizeRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_size_rate_name: {
      value: cdktf.stringToHclTerraform(struct!.responseSizeRateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentResponseSizeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentResponseSizeRate = this._currentResponseSizeRate;
    }
    if (this._isResponseSizeRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponseSizeRateLimitExceed = this._isResponseSizeRateLimitExceed;
    }
    if (this._responseSizeRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeRateLimit = this._responseSizeRateLimit;
    }
    if (this._responseSizeRateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeRateName = this._responseSizeRateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentResponseSizeRate = undefined;
      this._isResponseSizeRateLimitExceed = undefined;
      this._responseSizeRateLimit = undefined;
      this._responseSizeRateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentResponseSizeRate = value.currentResponseSizeRate;
      this._isResponseSizeRateLimitExceed = value.isResponseSizeRateLimitExceed;
      this._responseSizeRateLimit = value.responseSizeRateLimit;
      this._responseSizeRateName = value.responseSizeRateName;
    }
  }

  // current_response_size_rate - computed: false, optional: true, required: false
  private _currentResponseSizeRate?: string; 
  public get currentResponseSizeRate() {
    return this.getStringAttribute('current_response_size_rate');
  }
  public set currentResponseSizeRate(value: string) {
    this._currentResponseSizeRate = value;
  }
  public resetCurrentResponseSizeRate() {
    this._currentResponseSizeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentResponseSizeRateInput() {
    return this._currentResponseSizeRate;
  }

  // is_response_size_rate_limit_exceed - computed: false, optional: true, required: false
  private _isResponseSizeRateLimitExceed?: number; 
  public get isResponseSizeRateLimitExceed() {
    return this.getNumberAttribute('is_response_size_rate_limit_exceed');
  }
  public set isResponseSizeRateLimitExceed(value: number) {
    this._isResponseSizeRateLimitExceed = value;
  }
  public resetIsResponseSizeRateLimitExceed() {
    this._isResponseSizeRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponseSizeRateLimitExceedInput() {
    return this._isResponseSizeRateLimitExceed;
  }

  // response_size_rate_limit - computed: false, optional: true, required: false
  private _responseSizeRateLimit?: string; 
  public get responseSizeRateLimit() {
    return this.getStringAttribute('response_size_rate_limit');
  }
  public set responseSizeRateLimit(value: string) {
    this._responseSizeRateLimit = value;
  }
  public resetResponseSizeRateLimit() {
    this._responseSizeRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeRateLimitInput() {
    return this._responseSizeRateLimit;
  }

  // response_size_rate_name - computed: false, optional: true, required: false
  private _responseSizeRateName?: string; 
  public get responseSizeRateName() {
    return this.getStringAttribute('response_size_rate_name');
  }
  public set responseSizeRateName(value: string) {
    this._responseSizeRateName = value;
  }
  public resetResponseSizeRateName() {
    this._responseSizeRateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeRateNameInput() {
    return this._responseSizeRateName;
  }
}

export class DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRates[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesOutputReference {
    return new DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#age DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#app_stat1_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#app_stat1_limit}
  */
  readonly appStat1Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#app_stat2_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#app_stat2_limit}
  */
  readonly appStat2Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#app_stat3_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#app_stat3_limit}
  */
  readonly appStat3Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#app_stat4_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#app_stat4_limit}
  */
  readonly appStat4Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#app_stat5_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#app_stat5_limit}
  */
  readonly appStat5Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#app_stat6_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#app_stat6_limit}
  */
  readonly appStat6Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#app_stat7_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#app_stat7_limit}
  */
  readonly appStat7Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#app_stat8_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#app_stat8_limit}
  */
  readonly appStat8Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#bl_reasoning_rcode DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#bl_reasoning_rcode}
  */
  readonly blReasoningRcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#bl_reasoning_timestamp DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#bl_reasoning_timestamp}
  */
  readonly blReasoningTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#bw_state DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#bw_state}
  */
  readonly bwState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#connection_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#connection_rate_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_app_stat1 DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_app_stat1}
  */
  readonly currentAppStat1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_app_stat2 DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_app_stat2}
  */
  readonly currentAppStat2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_app_stat3 DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_app_stat3}
  */
  readonly currentAppStat3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_app_stat4 DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_app_stat4}
  */
  readonly currentAppStat4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_app_stat5 DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_app_stat5}
  */
  readonly currentAppStat5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_app_stat6 DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_app_stat6}
  */
  readonly currentAppStat6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_app_stat7 DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_app_stat7}
  */
  readonly currentAppStat7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_app_stat8 DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_app_stat8}
  */
  readonly currentAppStat8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_connection_rate DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_connections DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_frag_packet_rate DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_kbit_rate DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#current_packet_rate DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#debug_str DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#dst_address_str DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#dst_address_str}
  */
  readonly dstAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#dynamic_entry_count DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#dynamic_entry_count}
  */
  readonly dynamicEntryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#dynamic_entry_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#dynamic_entry_limit}
  */
  readonly dynamicEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#dynamic_entry_warn_state DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#dynamic_entry_warn_state}
  */
  readonly dynamicEntryWarnState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#frag_packet_rate_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_app_stat1_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_app_stat1_exceed}
  */
  readonly isAppStat1Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_app_stat2_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_app_stat2_exceed}
  */
  readonly isAppStat2Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_app_stat3_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_app_stat3_exceed}
  */
  readonly isAppStat3Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_app_stat4_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_app_stat4_exceed}
  */
  readonly isAppStat4Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_app_stat5_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_app_stat5_exceed}
  */
  readonly isAppStat5Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_app_stat6_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_app_stat6_exceed}
  */
  readonly isAppStat6Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_app_stat7_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_app_stat7_exceed}
  */
  readonly isAppStat7Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_app_stat8_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_app_stat8_exceed}
  */
  readonly isAppStat8Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_auth_passed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_auth_passed}
  */
  readonly isAuthPassed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_connection_rate_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_connection_rate_exceed}
  */
  readonly isConnectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_connections_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_connections_exceed}
  */
  readonly isConnectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_frag_packet_rate_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_frag_packet_rate_exceed}
  */
  readonly isFragPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_kbit_rate_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_kbit_rate_exceed}
  */
  readonly isKbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#is_packet_rate_exceed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#is_packet_rate_exceed}
  */
  readonly isPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#kbit_rate_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#level DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#lockup_time DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#lockup_time}
  */
  readonly lockupTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#packet_rate_limit DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#sflow_source_id DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#sflow_source_id}
  */
  readonly sflowSourceId?: number;
  /**
  * http_filter_rates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#http_filter_rates DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#http_filter_rates}
  */
  readonly httpFilterRates?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRates[] | cdktf.IResolvable;
  /**
  * response_size_rates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#response_size_rates DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#response_size_rates}
  */
  readonly responseSizeRates?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRates[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructToTerraform(struct?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    app_stat1_limit: cdktf.stringToTerraform(struct!.appStat1Limit),
    app_stat2_limit: cdktf.stringToTerraform(struct!.appStat2Limit),
    app_stat3_limit: cdktf.stringToTerraform(struct!.appStat3Limit),
    app_stat4_limit: cdktf.stringToTerraform(struct!.appStat4Limit),
    app_stat5_limit: cdktf.stringToTerraform(struct!.appStat5Limit),
    app_stat6_limit: cdktf.stringToTerraform(struct!.appStat6Limit),
    app_stat7_limit: cdktf.stringToTerraform(struct!.appStat7Limit),
    app_stat8_limit: cdktf.stringToTerraform(struct!.appStat8Limit),
    bl_reasoning_rcode: cdktf.stringToTerraform(struct!.blReasoningRcode),
    bl_reasoning_timestamp: cdktf.stringToTerraform(struct!.blReasoningTimestamp),
    bw_state: cdktf.stringToTerraform(struct!.bwState),
    connection_limit: cdktf.stringToTerraform(struct!.connectionLimit),
    connection_rate_limit: cdktf.stringToTerraform(struct!.connectionRateLimit),
    current_app_stat1: cdktf.stringToTerraform(struct!.currentAppStat1),
    current_app_stat2: cdktf.stringToTerraform(struct!.currentAppStat2),
    current_app_stat3: cdktf.stringToTerraform(struct!.currentAppStat3),
    current_app_stat4: cdktf.stringToTerraform(struct!.currentAppStat4),
    current_app_stat5: cdktf.stringToTerraform(struct!.currentAppStat5),
    current_app_stat6: cdktf.stringToTerraform(struct!.currentAppStat6),
    current_app_stat7: cdktf.stringToTerraform(struct!.currentAppStat7),
    current_app_stat8: cdktf.stringToTerraform(struct!.currentAppStat8),
    current_connection_rate: cdktf.stringToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.stringToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.stringToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.stringToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.stringToTerraform(struct!.currentPacketRate),
    debug_str: cdktf.stringToTerraform(struct!.debugStr),
    dst_address_str: cdktf.stringToTerraform(struct!.dstAddressStr),
    dynamic_entry_count: cdktf.stringToTerraform(struct!.dynamicEntryCount),
    dynamic_entry_limit: cdktf.stringToTerraform(struct!.dynamicEntryLimit),
    dynamic_entry_warn_state: cdktf.stringToTerraform(struct!.dynamicEntryWarnState),
    frag_packet_rate_limit: cdktf.stringToTerraform(struct!.fragPacketRateLimit),
    is_app_stat1_exceed: cdktf.numberToTerraform(struct!.isAppStat1Exceed),
    is_app_stat2_exceed: cdktf.numberToTerraform(struct!.isAppStat2Exceed),
    is_app_stat3_exceed: cdktf.numberToTerraform(struct!.isAppStat3Exceed),
    is_app_stat4_exceed: cdktf.numberToTerraform(struct!.isAppStat4Exceed),
    is_app_stat5_exceed: cdktf.numberToTerraform(struct!.isAppStat5Exceed),
    is_app_stat6_exceed: cdktf.numberToTerraform(struct!.isAppStat6Exceed),
    is_app_stat7_exceed: cdktf.numberToTerraform(struct!.isAppStat7Exceed),
    is_app_stat8_exceed: cdktf.numberToTerraform(struct!.isAppStat8Exceed),
    is_auth_passed: cdktf.stringToTerraform(struct!.isAuthPassed),
    is_connection_rate_exceed: cdktf.numberToTerraform(struct!.isConnectionRateExceed),
    is_connections_exceed: cdktf.numberToTerraform(struct!.isConnectionsExceed),
    is_frag_packet_rate_exceed: cdktf.numberToTerraform(struct!.isFragPacketRateExceed),
    is_kbit_rate_exceed: cdktf.numberToTerraform(struct!.isKbitRateExceed),
    is_packet_rate_exceed: cdktf.numberToTerraform(struct!.isPacketRateExceed),
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    level: cdktf.numberToTerraform(struct!.level),
    lockup_time: cdktf.numberToTerraform(struct!.lockupTime),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
    sflow_source_id: cdktf.numberToTerraform(struct!.sflowSourceId),
    http_filter_rates: cdktf.listMapper(dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesToTerraform, true)(struct!.httpFilterRates),
    response_size_rates: cdktf.listMapper(dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesToTerraform, true)(struct!.responseSizeRates),
  }
}


export function dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructToHclTerraform(struct?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStruct | cdktf.IResolvable): any {
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
    app_stat1_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat1Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat2_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat2Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat3_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat3Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat4_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat4Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat5_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat5Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat6_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat7_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat7Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat8_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat8Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bl_reasoning_rcode: {
      value: cdktf.stringToHclTerraform(struct!.blReasoningRcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bl_reasoning_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.blReasoningTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bw_state: {
      value: cdktf.stringToHclTerraform(struct!.bwState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat1: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat2: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat3: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat4: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat5: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat6: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat7: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat8: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connection_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.stringToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_frag_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_kbit_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_str: {
      value: cdktf.stringToHclTerraform(struct!.debugStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_address_str: {
      value: cdktf.stringToHclTerraform(struct!.dstAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_count: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_limit: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_warn_state: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryWarnState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_app_stat1_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat1Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat3_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat3Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat4_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat4Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat5_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat5Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat6_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat6Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat7_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat7Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat8_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat8Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_auth_passed: {
      value: cdktf.stringToHclTerraform(struct!.isAuthPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_frag_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isFragPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
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
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.numberToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_filter_rates: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesToHclTerraform, true)(struct!.httpFilterRates),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesList",
    },
    response_size_rates: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesToHclTerraform, true)(struct!.responseSizeRates),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._appStat1Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat1Limit = this._appStat1Limit;
    }
    if (this._appStat2Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat2Limit = this._appStat2Limit;
    }
    if (this._appStat3Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat3Limit = this._appStat3Limit;
    }
    if (this._appStat4Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat4Limit = this._appStat4Limit;
    }
    if (this._appStat5Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat5Limit = this._appStat5Limit;
    }
    if (this._appStat6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat6Limit = this._appStat6Limit;
    }
    if (this._appStat7Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat7Limit = this._appStat7Limit;
    }
    if (this._appStat8Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat8Limit = this._appStat8Limit;
    }
    if (this._blReasoningRcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blReasoningRcode = this._blReasoningRcode;
    }
    if (this._blReasoningTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.blReasoningTimestamp = this._blReasoningTimestamp;
    }
    if (this._bwState !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwState = this._bwState;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._currentAppStat1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat1 = this._currentAppStat1;
    }
    if (this._currentAppStat2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat2 = this._currentAppStat2;
    }
    if (this._currentAppStat3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat3 = this._currentAppStat3;
    }
    if (this._currentAppStat4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat4 = this._currentAppStat4;
    }
    if (this._currentAppStat5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat5 = this._currentAppStat5;
    }
    if (this._currentAppStat6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat6 = this._currentAppStat6;
    }
    if (this._currentAppStat7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat7 = this._currentAppStat7;
    }
    if (this._currentAppStat8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat8 = this._currentAppStat8;
    }
    if (this._currentConnectionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnectionRate = this._currentConnectionRate;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._currentFragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentFragPacketRate = this._currentFragPacketRate;
    }
    if (this._currentKbitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKbitRate = this._currentKbitRate;
    }
    if (this._currentPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPacketRate = this._currentPacketRate;
    }
    if (this._debugStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugStr = this._debugStr;
    }
    if (this._dstAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddressStr = this._dstAddressStr;
    }
    if (this._dynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryCount = this._dynamicEntryCount;
    }
    if (this._dynamicEntryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryLimit = this._dynamicEntryLimit;
    }
    if (this._dynamicEntryWarnState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryWarnState = this._dynamicEntryWarnState;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._isAppStat1Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat1Exceed = this._isAppStat1Exceed;
    }
    if (this._isAppStat2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat2Exceed = this._isAppStat2Exceed;
    }
    if (this._isAppStat3Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat3Exceed = this._isAppStat3Exceed;
    }
    if (this._isAppStat4Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat4Exceed = this._isAppStat4Exceed;
    }
    if (this._isAppStat5Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat5Exceed = this._isAppStat5Exceed;
    }
    if (this._isAppStat6Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat6Exceed = this._isAppStat6Exceed;
    }
    if (this._isAppStat7Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat7Exceed = this._isAppStat7Exceed;
    }
    if (this._isAppStat8Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat8Exceed = this._isAppStat8Exceed;
    }
    if (this._isAuthPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthPassed = this._isAuthPassed;
    }
    if (this._isConnectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionRateExceed = this._isConnectionRateExceed;
    }
    if (this._isConnectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionsExceed = this._isConnectionsExceed;
    }
    if (this._isFragPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragPacketRateExceed = this._isFragPacketRateExceed;
    }
    if (this._isKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKbitRateExceed = this._isKbitRateExceed;
    }
    if (this._isPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacketRateExceed = this._isPacketRateExceed;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._lockupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTime = this._lockupTime;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._httpFilterRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRates = this._httpFilterRates?.internalValue;
    }
    if (this._responseSizeRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeRates = this._responseSizeRates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._appStat1Limit = undefined;
      this._appStat2Limit = undefined;
      this._appStat3Limit = undefined;
      this._appStat4Limit = undefined;
      this._appStat5Limit = undefined;
      this._appStat6Limit = undefined;
      this._appStat7Limit = undefined;
      this._appStat8Limit = undefined;
      this._blReasoningRcode = undefined;
      this._blReasoningTimestamp = undefined;
      this._bwState = undefined;
      this._connectionLimit = undefined;
      this._connectionRateLimit = undefined;
      this._currentAppStat1 = undefined;
      this._currentAppStat2 = undefined;
      this._currentAppStat3 = undefined;
      this._currentAppStat4 = undefined;
      this._currentAppStat5 = undefined;
      this._currentAppStat6 = undefined;
      this._currentAppStat7 = undefined;
      this._currentAppStat8 = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._debugStr = undefined;
      this._dstAddressStr = undefined;
      this._dynamicEntryCount = undefined;
      this._dynamicEntryLimit = undefined;
      this._dynamicEntryWarnState = undefined;
      this._fragPacketRateLimit = undefined;
      this._isAppStat1Exceed = undefined;
      this._isAppStat2Exceed = undefined;
      this._isAppStat3Exceed = undefined;
      this._isAppStat4Exceed = undefined;
      this._isAppStat5Exceed = undefined;
      this._isAppStat6Exceed = undefined;
      this._isAppStat7Exceed = undefined;
      this._isAppStat8Exceed = undefined;
      this._isAuthPassed = undefined;
      this._isConnectionRateExceed = undefined;
      this._isConnectionsExceed = undefined;
      this._isFragPacketRateExceed = undefined;
      this._isKbitRateExceed = undefined;
      this._isPacketRateExceed = undefined;
      this._kbitRateLimit = undefined;
      this._level = undefined;
      this._lockupTime = undefined;
      this._packetRateLimit = undefined;
      this._sflowSourceId = undefined;
      this._httpFilterRates.internalValue = undefined;
      this._responseSizeRates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._appStat1Limit = value.appStat1Limit;
      this._appStat2Limit = value.appStat2Limit;
      this._appStat3Limit = value.appStat3Limit;
      this._appStat4Limit = value.appStat4Limit;
      this._appStat5Limit = value.appStat5Limit;
      this._appStat6Limit = value.appStat6Limit;
      this._appStat7Limit = value.appStat7Limit;
      this._appStat8Limit = value.appStat8Limit;
      this._blReasoningRcode = value.blReasoningRcode;
      this._blReasoningTimestamp = value.blReasoningTimestamp;
      this._bwState = value.bwState;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateLimit = value.connectionRateLimit;
      this._currentAppStat1 = value.currentAppStat1;
      this._currentAppStat2 = value.currentAppStat2;
      this._currentAppStat3 = value.currentAppStat3;
      this._currentAppStat4 = value.currentAppStat4;
      this._currentAppStat5 = value.currentAppStat5;
      this._currentAppStat6 = value.currentAppStat6;
      this._currentAppStat7 = value.currentAppStat7;
      this._currentAppStat8 = value.currentAppStat8;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._debugStr = value.debugStr;
      this._dstAddressStr = value.dstAddressStr;
      this._dynamicEntryCount = value.dynamicEntryCount;
      this._dynamicEntryLimit = value.dynamicEntryLimit;
      this._dynamicEntryWarnState = value.dynamicEntryWarnState;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._isAppStat1Exceed = value.isAppStat1Exceed;
      this._isAppStat2Exceed = value.isAppStat2Exceed;
      this._isAppStat3Exceed = value.isAppStat3Exceed;
      this._isAppStat4Exceed = value.isAppStat4Exceed;
      this._isAppStat5Exceed = value.isAppStat5Exceed;
      this._isAppStat6Exceed = value.isAppStat6Exceed;
      this._isAppStat7Exceed = value.isAppStat7Exceed;
      this._isAppStat8Exceed = value.isAppStat8Exceed;
      this._isAuthPassed = value.isAuthPassed;
      this._isConnectionRateExceed = value.isConnectionRateExceed;
      this._isConnectionsExceed = value.isConnectionsExceed;
      this._isFragPacketRateExceed = value.isFragPacketRateExceed;
      this._isKbitRateExceed = value.isKbitRateExceed;
      this._isPacketRateExceed = value.isPacketRateExceed;
      this._kbitRateLimit = value.kbitRateLimit;
      this._level = value.level;
      this._lockupTime = value.lockupTime;
      this._packetRateLimit = value.packetRateLimit;
      this._sflowSourceId = value.sflowSourceId;
      this._httpFilterRates.internalValue = value.httpFilterRates;
      this._responseSizeRates.internalValue = value.responseSizeRates;
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

  // app_stat1_limit - computed: false, optional: true, required: false
  private _appStat1Limit?: string; 
  public get appStat1Limit() {
    return this.getStringAttribute('app_stat1_limit');
  }
  public set appStat1Limit(value: string) {
    this._appStat1Limit = value;
  }
  public resetAppStat1Limit() {
    this._appStat1Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat1LimitInput() {
    return this._appStat1Limit;
  }

  // app_stat2_limit - computed: false, optional: true, required: false
  private _appStat2Limit?: string; 
  public get appStat2Limit() {
    return this.getStringAttribute('app_stat2_limit');
  }
  public set appStat2Limit(value: string) {
    this._appStat2Limit = value;
  }
  public resetAppStat2Limit() {
    this._appStat2Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat2LimitInput() {
    return this._appStat2Limit;
  }

  // app_stat3_limit - computed: false, optional: true, required: false
  private _appStat3Limit?: string; 
  public get appStat3Limit() {
    return this.getStringAttribute('app_stat3_limit');
  }
  public set appStat3Limit(value: string) {
    this._appStat3Limit = value;
  }
  public resetAppStat3Limit() {
    this._appStat3Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat3LimitInput() {
    return this._appStat3Limit;
  }

  // app_stat4_limit - computed: false, optional: true, required: false
  private _appStat4Limit?: string; 
  public get appStat4Limit() {
    return this.getStringAttribute('app_stat4_limit');
  }
  public set appStat4Limit(value: string) {
    this._appStat4Limit = value;
  }
  public resetAppStat4Limit() {
    this._appStat4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat4LimitInput() {
    return this._appStat4Limit;
  }

  // app_stat5_limit - computed: false, optional: true, required: false
  private _appStat5Limit?: string; 
  public get appStat5Limit() {
    return this.getStringAttribute('app_stat5_limit');
  }
  public set appStat5Limit(value: string) {
    this._appStat5Limit = value;
  }
  public resetAppStat5Limit() {
    this._appStat5Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat5LimitInput() {
    return this._appStat5Limit;
  }

  // app_stat6_limit - computed: false, optional: true, required: false
  private _appStat6Limit?: string; 
  public get appStat6Limit() {
    return this.getStringAttribute('app_stat6_limit');
  }
  public set appStat6Limit(value: string) {
    this._appStat6Limit = value;
  }
  public resetAppStat6Limit() {
    this._appStat6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat6LimitInput() {
    return this._appStat6Limit;
  }

  // app_stat7_limit - computed: false, optional: true, required: false
  private _appStat7Limit?: string; 
  public get appStat7Limit() {
    return this.getStringAttribute('app_stat7_limit');
  }
  public set appStat7Limit(value: string) {
    this._appStat7Limit = value;
  }
  public resetAppStat7Limit() {
    this._appStat7Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat7LimitInput() {
    return this._appStat7Limit;
  }

  // app_stat8_limit - computed: false, optional: true, required: false
  private _appStat8Limit?: string; 
  public get appStat8Limit() {
    return this.getStringAttribute('app_stat8_limit');
  }
  public set appStat8Limit(value: string) {
    this._appStat8Limit = value;
  }
  public resetAppStat8Limit() {
    this._appStat8Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat8LimitInput() {
    return this._appStat8Limit;
  }

  // bl_reasoning_rcode - computed: false, optional: true, required: false
  private _blReasoningRcode?: string; 
  public get blReasoningRcode() {
    return this.getStringAttribute('bl_reasoning_rcode');
  }
  public set blReasoningRcode(value: string) {
    this._blReasoningRcode = value;
  }
  public resetBlReasoningRcode() {
    this._blReasoningRcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blReasoningRcodeInput() {
    return this._blReasoningRcode;
  }

  // bl_reasoning_timestamp - computed: false, optional: true, required: false
  private _blReasoningTimestamp?: string; 
  public get blReasoningTimestamp() {
    return this.getStringAttribute('bl_reasoning_timestamp');
  }
  public set blReasoningTimestamp(value: string) {
    this._blReasoningTimestamp = value;
  }
  public resetBlReasoningTimestamp() {
    this._blReasoningTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blReasoningTimestampInput() {
    return this._blReasoningTimestamp;
  }

  // bw_state - computed: false, optional: true, required: false
  private _bwState?: string; 
  public get bwState() {
    return this.getStringAttribute('bw_state');
  }
  public set bwState(value: string) {
    this._bwState = value;
  }
  public resetBwState() {
    this._bwState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwStateInput() {
    return this._bwState;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // current_app_stat1 - computed: false, optional: true, required: false
  private _currentAppStat1?: string; 
  public get currentAppStat1() {
    return this.getStringAttribute('current_app_stat1');
  }
  public set currentAppStat1(value: string) {
    this._currentAppStat1 = value;
  }
  public resetCurrentAppStat1() {
    this._currentAppStat1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat1Input() {
    return this._currentAppStat1;
  }

  // current_app_stat2 - computed: false, optional: true, required: false
  private _currentAppStat2?: string; 
  public get currentAppStat2() {
    return this.getStringAttribute('current_app_stat2');
  }
  public set currentAppStat2(value: string) {
    this._currentAppStat2 = value;
  }
  public resetCurrentAppStat2() {
    this._currentAppStat2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat2Input() {
    return this._currentAppStat2;
  }

  // current_app_stat3 - computed: false, optional: true, required: false
  private _currentAppStat3?: string; 
  public get currentAppStat3() {
    return this.getStringAttribute('current_app_stat3');
  }
  public set currentAppStat3(value: string) {
    this._currentAppStat3 = value;
  }
  public resetCurrentAppStat3() {
    this._currentAppStat3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat3Input() {
    return this._currentAppStat3;
  }

  // current_app_stat4 - computed: false, optional: true, required: false
  private _currentAppStat4?: string; 
  public get currentAppStat4() {
    return this.getStringAttribute('current_app_stat4');
  }
  public set currentAppStat4(value: string) {
    this._currentAppStat4 = value;
  }
  public resetCurrentAppStat4() {
    this._currentAppStat4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat4Input() {
    return this._currentAppStat4;
  }

  // current_app_stat5 - computed: false, optional: true, required: false
  private _currentAppStat5?: string; 
  public get currentAppStat5() {
    return this.getStringAttribute('current_app_stat5');
  }
  public set currentAppStat5(value: string) {
    this._currentAppStat5 = value;
  }
  public resetCurrentAppStat5() {
    this._currentAppStat5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat5Input() {
    return this._currentAppStat5;
  }

  // current_app_stat6 - computed: false, optional: true, required: false
  private _currentAppStat6?: string; 
  public get currentAppStat6() {
    return this.getStringAttribute('current_app_stat6');
  }
  public set currentAppStat6(value: string) {
    this._currentAppStat6 = value;
  }
  public resetCurrentAppStat6() {
    this._currentAppStat6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat6Input() {
    return this._currentAppStat6;
  }

  // current_app_stat7 - computed: false, optional: true, required: false
  private _currentAppStat7?: string; 
  public get currentAppStat7() {
    return this.getStringAttribute('current_app_stat7');
  }
  public set currentAppStat7(value: string) {
    this._currentAppStat7 = value;
  }
  public resetCurrentAppStat7() {
    this._currentAppStat7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat7Input() {
    return this._currentAppStat7;
  }

  // current_app_stat8 - computed: false, optional: true, required: false
  private _currentAppStat8?: string; 
  public get currentAppStat8() {
    return this.getStringAttribute('current_app_stat8');
  }
  public set currentAppStat8(value: string) {
    this._currentAppStat8 = value;
  }
  public resetCurrentAppStat8() {
    this._currentAppStat8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat8Input() {
    return this._currentAppStat8;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: string; 
  public get currentConnectionRate() {
    return this.getStringAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: string) {
    this._currentConnectionRate = value;
  }
  public resetCurrentConnectionRate() {
    this._currentConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionRateInput() {
    return this._currentConnectionRate;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: string; 
  public get currentConnections() {
    return this.getStringAttribute('current_connections');
  }
  public set currentConnections(value: string) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // current_frag_packet_rate - computed: false, optional: true, required: false
  private _currentFragPacketRate?: string; 
  public get currentFragPacketRate() {
    return this.getStringAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: string) {
    this._currentFragPacketRate = value;
  }
  public resetCurrentFragPacketRate() {
    this._currentFragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentFragPacketRateInput() {
    return this._currentFragPacketRate;
  }

  // current_kbit_rate - computed: false, optional: true, required: false
  private _currentKbitRate?: string; 
  public get currentKbitRate() {
    return this.getStringAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: string) {
    this._currentKbitRate = value;
  }
  public resetCurrentKbitRate() {
    this._currentKbitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKbitRateInput() {
    return this._currentKbitRate;
  }

  // current_packet_rate - computed: false, optional: true, required: false
  private _currentPacketRate?: string; 
  public get currentPacketRate() {
    return this.getStringAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: string) {
    this._currentPacketRate = value;
  }
  public resetCurrentPacketRate() {
    this._currentPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPacketRateInput() {
    return this._currentPacketRate;
  }

  // debug_str - computed: false, optional: true, required: false
  private _debugStr?: string; 
  public get debugStr() {
    return this.getStringAttribute('debug_str');
  }
  public set debugStr(value: string) {
    this._debugStr = value;
  }
  public resetDebugStr() {
    this._debugStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugStrInput() {
    return this._debugStr;
  }

  // dst_address_str - computed: false, optional: true, required: false
  private _dstAddressStr?: string; 
  public get dstAddressStr() {
    return this.getStringAttribute('dst_address_str');
  }
  public set dstAddressStr(value: string) {
    this._dstAddressStr = value;
  }
  public resetDstAddressStr() {
    this._dstAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressStrInput() {
    return this._dstAddressStr;
  }

  // dynamic_entry_count - computed: false, optional: true, required: false
  private _dynamicEntryCount?: string; 
  public get dynamicEntryCount() {
    return this.getStringAttribute('dynamic_entry_count');
  }
  public set dynamicEntryCount(value: string) {
    this._dynamicEntryCount = value;
  }
  public resetDynamicEntryCount() {
    this._dynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryCountInput() {
    return this._dynamicEntryCount;
  }

  // dynamic_entry_limit - computed: false, optional: true, required: false
  private _dynamicEntryLimit?: string; 
  public get dynamicEntryLimit() {
    return this.getStringAttribute('dynamic_entry_limit');
  }
  public set dynamicEntryLimit(value: string) {
    this._dynamicEntryLimit = value;
  }
  public resetDynamicEntryLimit() {
    this._dynamicEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryLimitInput() {
    return this._dynamicEntryLimit;
  }

  // dynamic_entry_warn_state - computed: false, optional: true, required: false
  private _dynamicEntryWarnState?: string; 
  public get dynamicEntryWarnState() {
    return this.getStringAttribute('dynamic_entry_warn_state');
  }
  public set dynamicEntryWarnState(value: string) {
    this._dynamicEntryWarnState = value;
  }
  public resetDynamicEntryWarnState() {
    this._dynamicEntryWarnState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryWarnStateInput() {
    return this._dynamicEntryWarnState;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: string; 
  public get fragPacketRateLimit() {
    return this.getStringAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: string) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // is_app_stat1_exceed - computed: false, optional: true, required: false
  private _isAppStat1Exceed?: number; 
  public get isAppStat1Exceed() {
    return this.getNumberAttribute('is_app_stat1_exceed');
  }
  public set isAppStat1Exceed(value: number) {
    this._isAppStat1Exceed = value;
  }
  public resetIsAppStat1Exceed() {
    this._isAppStat1Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat1ExceedInput() {
    return this._isAppStat1Exceed;
  }

  // is_app_stat2_exceed - computed: false, optional: true, required: false
  private _isAppStat2Exceed?: number; 
  public get isAppStat2Exceed() {
    return this.getNumberAttribute('is_app_stat2_exceed');
  }
  public set isAppStat2Exceed(value: number) {
    this._isAppStat2Exceed = value;
  }
  public resetIsAppStat2Exceed() {
    this._isAppStat2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat2ExceedInput() {
    return this._isAppStat2Exceed;
  }

  // is_app_stat3_exceed - computed: false, optional: true, required: false
  private _isAppStat3Exceed?: number; 
  public get isAppStat3Exceed() {
    return this.getNumberAttribute('is_app_stat3_exceed');
  }
  public set isAppStat3Exceed(value: number) {
    this._isAppStat3Exceed = value;
  }
  public resetIsAppStat3Exceed() {
    this._isAppStat3Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat3ExceedInput() {
    return this._isAppStat3Exceed;
  }

  // is_app_stat4_exceed - computed: false, optional: true, required: false
  private _isAppStat4Exceed?: number; 
  public get isAppStat4Exceed() {
    return this.getNumberAttribute('is_app_stat4_exceed');
  }
  public set isAppStat4Exceed(value: number) {
    this._isAppStat4Exceed = value;
  }
  public resetIsAppStat4Exceed() {
    this._isAppStat4Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat4ExceedInput() {
    return this._isAppStat4Exceed;
  }

  // is_app_stat5_exceed - computed: false, optional: true, required: false
  private _isAppStat5Exceed?: number; 
  public get isAppStat5Exceed() {
    return this.getNumberAttribute('is_app_stat5_exceed');
  }
  public set isAppStat5Exceed(value: number) {
    this._isAppStat5Exceed = value;
  }
  public resetIsAppStat5Exceed() {
    this._isAppStat5Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat5ExceedInput() {
    return this._isAppStat5Exceed;
  }

  // is_app_stat6_exceed - computed: false, optional: true, required: false
  private _isAppStat6Exceed?: number; 
  public get isAppStat6Exceed() {
    return this.getNumberAttribute('is_app_stat6_exceed');
  }
  public set isAppStat6Exceed(value: number) {
    this._isAppStat6Exceed = value;
  }
  public resetIsAppStat6Exceed() {
    this._isAppStat6Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat6ExceedInput() {
    return this._isAppStat6Exceed;
  }

  // is_app_stat7_exceed - computed: false, optional: true, required: false
  private _isAppStat7Exceed?: number; 
  public get isAppStat7Exceed() {
    return this.getNumberAttribute('is_app_stat7_exceed');
  }
  public set isAppStat7Exceed(value: number) {
    this._isAppStat7Exceed = value;
  }
  public resetIsAppStat7Exceed() {
    this._isAppStat7Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat7ExceedInput() {
    return this._isAppStat7Exceed;
  }

  // is_app_stat8_exceed - computed: false, optional: true, required: false
  private _isAppStat8Exceed?: number; 
  public get isAppStat8Exceed() {
    return this.getNumberAttribute('is_app_stat8_exceed');
  }
  public set isAppStat8Exceed(value: number) {
    this._isAppStat8Exceed = value;
  }
  public resetIsAppStat8Exceed() {
    this._isAppStat8Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat8ExceedInput() {
    return this._isAppStat8Exceed;
  }

  // is_auth_passed - computed: false, optional: true, required: false
  private _isAuthPassed?: string; 
  public get isAuthPassed() {
    return this.getStringAttribute('is_auth_passed');
  }
  public set isAuthPassed(value: string) {
    this._isAuthPassed = value;
  }
  public resetIsAuthPassed() {
    this._isAuthPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthPassedInput() {
    return this._isAuthPassed;
  }

  // is_connection_rate_exceed - computed: false, optional: true, required: false
  private _isConnectionRateExceed?: number; 
  public get isConnectionRateExceed() {
    return this.getNumberAttribute('is_connection_rate_exceed');
  }
  public set isConnectionRateExceed(value: number) {
    this._isConnectionRateExceed = value;
  }
  public resetIsConnectionRateExceed() {
    this._isConnectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionRateExceedInput() {
    return this._isConnectionRateExceed;
  }

  // is_connections_exceed - computed: false, optional: true, required: false
  private _isConnectionsExceed?: number; 
  public get isConnectionsExceed() {
    return this.getNumberAttribute('is_connections_exceed');
  }
  public set isConnectionsExceed(value: number) {
    this._isConnectionsExceed = value;
  }
  public resetIsConnectionsExceed() {
    this._isConnectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionsExceedInput() {
    return this._isConnectionsExceed;
  }

  // is_frag_packet_rate_exceed - computed: false, optional: true, required: false
  private _isFragPacketRateExceed?: number; 
  public get isFragPacketRateExceed() {
    return this.getNumberAttribute('is_frag_packet_rate_exceed');
  }
  public set isFragPacketRateExceed(value: number) {
    this._isFragPacketRateExceed = value;
  }
  public resetIsFragPacketRateExceed() {
    this._isFragPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragPacketRateExceedInput() {
    return this._isFragPacketRateExceed;
  }

  // is_kbit_rate_exceed - computed: false, optional: true, required: false
  private _isKbitRateExceed?: number; 
  public get isKbitRateExceed() {
    return this.getNumberAttribute('is_kbit_rate_exceed');
  }
  public set isKbitRateExceed(value: number) {
    this._isKbitRateExceed = value;
  }
  public resetIsKbitRateExceed() {
    this._isKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKbitRateExceedInput() {
    return this._isKbitRateExceed;
  }

  // is_packet_rate_exceed - computed: false, optional: true, required: false
  private _isPacketRateExceed?: number; 
  public get isPacketRateExceed() {
    return this.getNumberAttribute('is_packet_rate_exceed');
  }
  public set isPacketRateExceed(value: number) {
    this._isPacketRateExceed = value;
  }
  public resetIsPacketRateExceed() {
    this._isPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacketRateExceedInput() {
    return this._isPacketRateExceed;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: string; 
  public get kbitRateLimit() {
    return this.getStringAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: string) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: string; 
  public get packetRateLimit() {
    return this.getStringAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: string) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: number; 
  public get sflowSourceId() {
    return this.getNumberAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: number) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }

  // http_filter_rates - computed: false, optional: true, required: false
  private _httpFilterRates = new DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRatesList(this, "http_filter_rates", false);
  public get httpFilterRates() {
    return this._httpFilterRates;
  }
  public putHttpFilterRates(value: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListHttpFilterRates[] | cdktf.IResolvable) {
    this._httpFilterRates.internalValue = value;
  }
  public resetHttpFilterRates() {
    this._httpFilterRates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRatesInput() {
    return this._httpFilterRates.internalValue;
  }

  // response_size_rates - computed: false, optional: true, required: false
  private _responseSizeRates = new DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRatesList(this, "response_size_rates", false);
  public get responseSizeRates() {
    return this._responseSizeRates;
  }
  public putResponseSizeRates(value: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListResponseSizeRates[] | cdktf.IResolvable) {
    this._responseSizeRates.internalValue = value;
  }
  public resetResponseSizeRates() {
    this._responseSizeRates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeRatesInput() {
    return this._responseSizeRates.internalValue;
  }
}

export class DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructOutputReference {
    return new DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#app_stat DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#app_stat}
  */
  readonly appStat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#authenticated DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#authenticated}
  */
  readonly authenticated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#black_listed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#black_listed}
  */
  readonly blackListed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#class_list DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#class_list}
  */
  readonly classList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#domain_name DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#entry_displayed_count DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#entry_displayed_count}
  */
  readonly entryDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#exceeded DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#exceeded}
  */
  readonly exceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#hw_blacklisted DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#hw_blacklisted}
  */
  readonly hwBlacklisted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#indicator_detail DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#indicator_detail}
  */
  readonly indicatorDetail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#indicators DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#indicators}
  */
  readonly indicators?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#ipv6 DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#l4_ext_rate DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#l4_ext_rate}
  */
  readonly l4ExtRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#level DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#overflow_policy DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#overflow_policy}
  */
  readonly overflowPolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#reporting_status DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#reporting_status}
  */
  readonly reportingStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#service_displayed_count DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#service_displayed_count}
  */
  readonly serviceDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#sources DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#sources}
  */
  readonly sources?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#sources_all_entries DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#sources_all_entries}
  */
  readonly sourcesAllEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#subnet_ip_addr DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#subnet_ipv6_addr DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#suffix_request_rate DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#suffix_request_rate}
  */
  readonly suffixRequestRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#white_listed DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#white_listed}
  */
  readonly whiteListed?: number;
  /**
  * ddos_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#ddos_entry_list DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper#ddos_entry_list}
  */
  readonly ddosEntryList?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperToTerraform(struct?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperOutputReference | DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_stat: cdktf.numberToTerraform(struct!.appStat),
    authenticated: cdktf.numberToTerraform(struct!.authenticated),
    black_listed: cdktf.numberToTerraform(struct!.blackListed),
    class_list: cdktf.stringToTerraform(struct!.classList),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    entry_displayed_count: cdktf.numberToTerraform(struct!.entryDisplayedCount),
    exceeded: cdktf.numberToTerraform(struct!.exceeded),
    hw_blacklisted: cdktf.numberToTerraform(struct!.hwBlacklisted),
    indicator_detail: cdktf.numberToTerraform(struct!.indicatorDetail),
    indicators: cdktf.numberToTerraform(struct!.indicators),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    l4_ext_rate: cdktf.numberToTerraform(struct!.l4ExtRate),
    level: cdktf.numberToTerraform(struct!.level),
    overflow_policy: cdktf.numberToTerraform(struct!.overflowPolicy),
    reporting_status: cdktf.numberToTerraform(struct!.reportingStatus),
    service_displayed_count: cdktf.numberToTerraform(struct!.serviceDisplayedCount),
    sources: cdktf.numberToTerraform(struct!.sources),
    sources_all_entries: cdktf.numberToTerraform(struct!.sourcesAllEntries),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    suffix_request_rate: cdktf.numberToTerraform(struct!.suffixRequestRate),
    white_listed: cdktf.numberToTerraform(struct!.whiteListed),
    ddos_entry_list: cdktf.listMapper(dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructToTerraform, true)(struct!.ddosEntryList),
  }
}


export function dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperToHclTerraform(struct?: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperOutputReference | DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_stat: {
      value: cdktf.numberToHclTerraform(struct!.appStat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authenticated: {
      value: cdktf.numberToHclTerraform(struct!.authenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    black_listed: {
      value: cdktf.numberToHclTerraform(struct!.blackListed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
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
    entry_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.entryDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceeded: {
      value: cdktf.numberToHclTerraform(struct!.exceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_blacklisted: {
      value: cdktf.numberToHclTerraform(struct!.hwBlacklisted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_detail: {
      value: cdktf.numberToHclTerraform(struct!.indicatorDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicators: {
      value: cdktf.numberToHclTerraform(struct!.indicators),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_ext_rate: {
      value: cdktf.numberToHclTerraform(struct!.l4ExtRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overflow_policy: {
      value: cdktf.numberToHclTerraform(struct!.overflowPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reporting_status: {
      value: cdktf.numberToHclTerraform(struct!.reportingStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.numberToHclTerraform(struct!.sources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources_all_entries: {
      value: cdktf.numberToHclTerraform(struct!.sourcesAllEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_request_rate: {
      value: cdktf.numberToHclTerraform(struct!.suffixRequestRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    white_listed: {
      value: cdktf.numberToHclTerraform(struct!.whiteListed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructToHclTerraform, true)(struct!.ddosEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat = this._appStat;
    }
    if (this._authenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticated = this._authenticated;
    }
    if (this._blackListed !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackListed = this._blackListed;
    }
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._entryDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDisplayedCount = this._entryDisplayedCount;
    }
    if (this._exceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceeded = this._exceeded;
    }
    if (this._hwBlacklisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlacklisted = this._hwBlacklisted;
    }
    if (this._indicatorDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorDetail = this._indicatorDetail;
    }
    if (this._indicators !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._l4ExtRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ExtRate = this._l4ExtRate;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._overflowPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.overflowPolicy = this._overflowPolicy;
    }
    if (this._reportingStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingStatus = this._reportingStatus;
    }
    if (this._serviceDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDisplayedCount = this._serviceDisplayedCount;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._sourcesAllEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcesAllEntries = this._sourcesAllEntries;
    }
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    if (this._suffixRequestRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixRequestRate = this._suffixRequestRate;
    }
    if (this._whiteListed !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListed = this._whiteListed;
    }
    if (this._ddosEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryList = this._ddosEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appStat = undefined;
      this._authenticated = undefined;
      this._blackListed = undefined;
      this._classList = undefined;
      this._domainName = undefined;
      this._entryDisplayedCount = undefined;
      this._exceeded = undefined;
      this._hwBlacklisted = undefined;
      this._indicatorDetail = undefined;
      this._indicators = undefined;
      this._ipv6 = undefined;
      this._l4ExtRate = undefined;
      this._level = undefined;
      this._overflowPolicy = undefined;
      this._reportingStatus = undefined;
      this._serviceDisplayedCount = undefined;
      this._sources = undefined;
      this._sourcesAllEntries = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._suffixRequestRate = undefined;
      this._whiteListed = undefined;
      this._ddosEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appStat = value.appStat;
      this._authenticated = value.authenticated;
      this._blackListed = value.blackListed;
      this._classList = value.classList;
      this._domainName = value.domainName;
      this._entryDisplayedCount = value.entryDisplayedCount;
      this._exceeded = value.exceeded;
      this._hwBlacklisted = value.hwBlacklisted;
      this._indicatorDetail = value.indicatorDetail;
      this._indicators = value.indicators;
      this._ipv6 = value.ipv6;
      this._l4ExtRate = value.l4ExtRate;
      this._level = value.level;
      this._overflowPolicy = value.overflowPolicy;
      this._reportingStatus = value.reportingStatus;
      this._serviceDisplayedCount = value.serviceDisplayedCount;
      this._sources = value.sources;
      this._sourcesAllEntries = value.sourcesAllEntries;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._suffixRequestRate = value.suffixRequestRate;
      this._whiteListed = value.whiteListed;
      this._ddosEntryList.internalValue = value.ddosEntryList;
    }
  }

  // app_stat - computed: false, optional: true, required: false
  private _appStat?: number; 
  public get appStat() {
    return this.getNumberAttribute('app_stat');
  }
  public set appStat(value: number) {
    this._appStat = value;
  }
  public resetAppStat() {
    this._appStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStatInput() {
    return this._appStat;
  }

  // authenticated - computed: false, optional: true, required: false
  private _authenticated?: number; 
  public get authenticated() {
    return this.getNumberAttribute('authenticated');
  }
  public set authenticated(value: number) {
    this._authenticated = value;
  }
  public resetAuthenticated() {
    this._authenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedInput() {
    return this._authenticated;
  }

  // black_listed - computed: false, optional: true, required: false
  private _blackListed?: number; 
  public get blackListed() {
    return this.getNumberAttribute('black_listed');
  }
  public set blackListed(value: number) {
    this._blackListed = value;
  }
  public resetBlackListed() {
    this._blackListed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListedInput() {
    return this._blackListed;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
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

  // entry_displayed_count - computed: false, optional: true, required: false
  private _entryDisplayedCount?: number; 
  public get entryDisplayedCount() {
    return this.getNumberAttribute('entry_displayed_count');
  }
  public set entryDisplayedCount(value: number) {
    this._entryDisplayedCount = value;
  }
  public resetEntryDisplayedCount() {
    this._entryDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDisplayedCountInput() {
    return this._entryDisplayedCount;
  }

  // exceeded - computed: false, optional: true, required: false
  private _exceeded?: number; 
  public get exceeded() {
    return this.getNumberAttribute('exceeded');
  }
  public set exceeded(value: number) {
    this._exceeded = value;
  }
  public resetExceeded() {
    this._exceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceededInput() {
    return this._exceeded;
  }

  // hw_blacklisted - computed: false, optional: true, required: false
  private _hwBlacklisted?: number; 
  public get hwBlacklisted() {
    return this.getNumberAttribute('hw_blacklisted');
  }
  public set hwBlacklisted(value: number) {
    this._hwBlacklisted = value;
  }
  public resetHwBlacklisted() {
    this._hwBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistedInput() {
    return this._hwBlacklisted;
  }

  // indicator_detail - computed: false, optional: true, required: false
  private _indicatorDetail?: number; 
  public get indicatorDetail() {
    return this.getNumberAttribute('indicator_detail');
  }
  public set indicatorDetail(value: number) {
    this._indicatorDetail = value;
  }
  public resetIndicatorDetail() {
    this._indicatorDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorDetailInput() {
    return this._indicatorDetail;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators?: number; 
  public get indicators() {
    return this.getNumberAttribute('indicators');
  }
  public set indicators(value: number) {
    this._indicators = value;
  }
  public resetIndicators() {
    this._indicators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // l4_ext_rate - computed: false, optional: true, required: false
  private _l4ExtRate?: number; 
  public get l4ExtRate() {
    return this.getNumberAttribute('l4_ext_rate');
  }
  public set l4ExtRate(value: number) {
    this._l4ExtRate = value;
  }
  public resetL4ExtRate() {
    this._l4ExtRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ExtRateInput() {
    return this._l4ExtRate;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // overflow_policy - computed: false, optional: true, required: false
  private _overflowPolicy?: number; 
  public get overflowPolicy() {
    return this.getNumberAttribute('overflow_policy');
  }
  public set overflowPolicy(value: number) {
    this._overflowPolicy = value;
  }
  public resetOverflowPolicy() {
    this._overflowPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowPolicyInput() {
    return this._overflowPolicy;
  }

  // reporting_status - computed: false, optional: true, required: false
  private _reportingStatus?: number; 
  public get reportingStatus() {
    return this.getNumberAttribute('reporting_status');
  }
  public set reportingStatus(value: number) {
    this._reportingStatus = value;
  }
  public resetReportingStatus() {
    this._reportingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingStatusInput() {
    return this._reportingStatus;
  }

  // service_displayed_count - computed: false, optional: true, required: false
  private _serviceDisplayedCount?: number; 
  public get serviceDisplayedCount() {
    return this.getNumberAttribute('service_displayed_count');
  }
  public set serviceDisplayedCount(value: number) {
    this._serviceDisplayedCount = value;
  }
  public resetServiceDisplayedCount() {
    this._serviceDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDisplayedCountInput() {
    return this._serviceDisplayedCount;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: number; 
  public get sources() {
    return this.getNumberAttribute('sources');
  }
  public set sources(value: number) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // sources_all_entries - computed: false, optional: true, required: false
  private _sourcesAllEntries?: number; 
  public get sourcesAllEntries() {
    return this.getNumberAttribute('sources_all_entries');
  }
  public set sourcesAllEntries(value: number) {
    this._sourcesAllEntries = value;
  }
  public resetSourcesAllEntries() {
    this._sourcesAllEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesAllEntriesInput() {
    return this._sourcesAllEntries;
  }

  // subnet_ip_addr - computed: false, optional: true, required: false
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  public resetSubnetIpAddr() {
    this._subnetIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
  }

  // subnet_ipv6_addr - computed: false, optional: true, required: false
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  public resetSubnetIpv6Addr() {
    this._subnetIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }

  // suffix_request_rate - computed: false, optional: true, required: false
  private _suffixRequestRate?: number; 
  public get suffixRequestRate() {
    return this.getNumberAttribute('suffix_request_rate');
  }
  public set suffixRequestRate(value: number) {
    this._suffixRequestRate = value;
  }
  public resetSuffixRequestRate() {
    this._suffixRequestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixRequestRateInput() {
    return this._suffixRequestRate;
  }

  // white_listed - computed: false, optional: true, required: false
  private _whiteListed?: number; 
  public get whiteListed() {
    return this.getNumberAttribute('white_listed');
  }
  public set whiteListed(value: number) {
    this._whiteListed = value;
  }
  public resetWhiteListed() {
    this._whiteListed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedInput() {
    return this._whiteListed;
  }

  // ddos_entry_list - computed: false, optional: true, required: false
  private _ddosEntryList = new DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStructList(this, "ddos_entry_list", false);
  public get ddosEntryList() {
    return this._ddosEntryList;
  }
  public putDdosEntryList(value: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperDdosEntryListStruct[] | cdktf.IResolvable) {
    this._ddosEntryList.internalValue = value;
  }
  public resetDdosEntryList() {
    this._ddosEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryListInput() {
    return this._ddosEntryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_oper}
*/
export class DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_virtualhosts_virtualhost_oper thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_oper',
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
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
    this._protocol = config.protocol;
    this._vhost = config.vhost;
    this._zoneName = config.zoneName;
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

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: string; 
  public get portRangeEnd() {
    return this.getStringAttribute('port_range_end');
  }
  public set portRangeEnd(value: string) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: string; 
  public get portRangeStart() {
    return this.getStringAttribute('port_range_start');
  }
  public set portRangeStart(value: string) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // vhost - computed: false, optional: false, required: true
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOper) {
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
      port_range_end: cdktf.stringToTerraform(this._portRangeEnd),
      port_range_start: cdktf.stringToTerraform(this._portRangeStart),
      protocol: cdktf.stringToTerraform(this._protocol),
      vhost: cdktf.stringToTerraform(this._vhost),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperToTerraform(this._oper.internalValue),
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
      port_range_end: {
        value: cdktf.stringToHclTerraform(this._portRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_start: {
        value: cdktf.stringToHclTerraform(this._portRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vhost: {
        value: cdktf.stringToHclTerraform(this._vhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortRangeVirtualhostsVirtualhostOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
