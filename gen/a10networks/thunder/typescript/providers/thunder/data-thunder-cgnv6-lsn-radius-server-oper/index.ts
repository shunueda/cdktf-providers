// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnRadiusServerOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#id DataThunderCgnv6LsnRadiusServerOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#oper DataThunderCgnv6LsnRadiusServerOper#oper}
  */
  readonly oper?: DataThunderCgnv6LsnRadiusServerOperOper;
}
export interface DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#custom1_attr_value DataThunderCgnv6LsnRadiusServerOper#custom1_attr_value}
  */
  readonly custom1AttrValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#custom2_attr_value DataThunderCgnv6LsnRadiusServerOper#custom2_attr_value}
  */
  readonly custom2AttrValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#custom3_attr_value DataThunderCgnv6LsnRadiusServerOper#custom3_attr_value}
  */
  readonly custom3AttrValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#custom4_attr_value DataThunderCgnv6LsnRadiusServerOper#custom4_attr_value}
  */
  readonly custom4AttrValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#custom5_attr_value DataThunderCgnv6LsnRadiusServerOper#custom5_attr_value}
  */
  readonly custom5AttrValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#custom6_attr_value DataThunderCgnv6LsnRadiusServerOper#custom6_attr_value}
  */
  readonly custom6AttrValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#imei DataThunderCgnv6LsnRadiusServerOper#imei}
  */
  readonly imei?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#imsi DataThunderCgnv6LsnRadiusServerOper#imsi}
  */
  readonly imsi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#inside_ip DataThunderCgnv6LsnRadiusServerOper#inside_ip}
  */
  readonly insideIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#inside_ipv6 DataThunderCgnv6LsnRadiusServerOper#inside_ipv6}
  */
  readonly insideIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#is_obsolete DataThunderCgnv6LsnRadiusServerOper#is_obsolete}
  */
  readonly isObsolete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#msisdn DataThunderCgnv6LsnRadiusServerOper#msisdn}
  */
  readonly msisdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#prefix_len DataThunderCgnv6LsnRadiusServerOper#prefix_len}
  */
  readonly prefixLen?: number;
}

export function dataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructToTerraform(struct?: DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom1_attr_value: cdktf.stringToTerraform(struct!.custom1AttrValue),
    custom2_attr_value: cdktf.stringToTerraform(struct!.custom2AttrValue),
    custom3_attr_value: cdktf.stringToTerraform(struct!.custom3AttrValue),
    custom4_attr_value: cdktf.stringToTerraform(struct!.custom4AttrValue),
    custom5_attr_value: cdktf.stringToTerraform(struct!.custom5AttrValue),
    custom6_attr_value: cdktf.stringToTerraform(struct!.custom6AttrValue),
    imei: cdktf.stringToTerraform(struct!.imei),
    imsi: cdktf.stringToTerraform(struct!.imsi),
    inside_ip: cdktf.stringToTerraform(struct!.insideIp),
    inside_ipv6: cdktf.stringToTerraform(struct!.insideIpv6),
    is_obsolete: cdktf.numberToTerraform(struct!.isObsolete),
    msisdn: cdktf.stringToTerraform(struct!.msisdn),
    prefix_len: cdktf.numberToTerraform(struct!.prefixLen),
  }
}


export function dataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructToHclTerraform(struct?: DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom1_attr_value: {
      value: cdktf.stringToHclTerraform(struct!.custom1AttrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom2_attr_value: {
      value: cdktf.stringToHclTerraform(struct!.custom2AttrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom3_attr_value: {
      value: cdktf.stringToHclTerraform(struct!.custom3AttrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom4_attr_value: {
      value: cdktf.stringToHclTerraform(struct!.custom4AttrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom5_attr_value: {
      value: cdktf.stringToHclTerraform(struct!.custom5AttrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom6_attr_value: {
      value: cdktf.stringToHclTerraform(struct!.custom6AttrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imei: {
      value: cdktf.stringToHclTerraform(struct!.imei),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imsi: {
      value: cdktf.stringToHclTerraform(struct!.imsi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_ip: {
      value: cdktf.stringToHclTerraform(struct!.insideIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.insideIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_obsolete: {
      value: cdktf.numberToHclTerraform(struct!.isObsolete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msisdn: {
      value: cdktf.stringToHclTerraform(struct!.msisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom1AttrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom1AttrValue = this._custom1AttrValue;
    }
    if (this._custom2AttrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom2AttrValue = this._custom2AttrValue;
    }
    if (this._custom3AttrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom3AttrValue = this._custom3AttrValue;
    }
    if (this._custom4AttrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom4AttrValue = this._custom4AttrValue;
    }
    if (this._custom5AttrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom5AttrValue = this._custom5AttrValue;
    }
    if (this._custom6AttrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom6AttrValue = this._custom6AttrValue;
    }
    if (this._imei !== undefined) {
      hasAnyValues = true;
      internalValueResult.imei = this._imei;
    }
    if (this._imsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsi = this._imsi;
    }
    if (this._insideIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideIp = this._insideIp;
    }
    if (this._insideIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideIpv6 = this._insideIpv6;
    }
    if (this._isObsolete !== undefined) {
      hasAnyValues = true;
      internalValueResult.isObsolete = this._isObsolete;
    }
    if (this._msisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdn = this._msisdn;
    }
    if (this._prefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen = this._prefixLen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom1AttrValue = undefined;
      this._custom2AttrValue = undefined;
      this._custom3AttrValue = undefined;
      this._custom4AttrValue = undefined;
      this._custom5AttrValue = undefined;
      this._custom6AttrValue = undefined;
      this._imei = undefined;
      this._imsi = undefined;
      this._insideIp = undefined;
      this._insideIpv6 = undefined;
      this._isObsolete = undefined;
      this._msisdn = undefined;
      this._prefixLen = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom1AttrValue = value.custom1AttrValue;
      this._custom2AttrValue = value.custom2AttrValue;
      this._custom3AttrValue = value.custom3AttrValue;
      this._custom4AttrValue = value.custom4AttrValue;
      this._custom5AttrValue = value.custom5AttrValue;
      this._custom6AttrValue = value.custom6AttrValue;
      this._imei = value.imei;
      this._imsi = value.imsi;
      this._insideIp = value.insideIp;
      this._insideIpv6 = value.insideIpv6;
      this._isObsolete = value.isObsolete;
      this._msisdn = value.msisdn;
      this._prefixLen = value.prefixLen;
    }
  }

  // custom1_attr_value - computed: false, optional: true, required: false
  private _custom1AttrValue?: string; 
  public get custom1AttrValue() {
    return this.getStringAttribute('custom1_attr_value');
  }
  public set custom1AttrValue(value: string) {
    this._custom1AttrValue = value;
  }
  public resetCustom1AttrValue() {
    this._custom1AttrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom1AttrValueInput() {
    return this._custom1AttrValue;
  }

  // custom2_attr_value - computed: false, optional: true, required: false
  private _custom2AttrValue?: string; 
  public get custom2AttrValue() {
    return this.getStringAttribute('custom2_attr_value');
  }
  public set custom2AttrValue(value: string) {
    this._custom2AttrValue = value;
  }
  public resetCustom2AttrValue() {
    this._custom2AttrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom2AttrValueInput() {
    return this._custom2AttrValue;
  }

  // custom3_attr_value - computed: false, optional: true, required: false
  private _custom3AttrValue?: string; 
  public get custom3AttrValue() {
    return this.getStringAttribute('custom3_attr_value');
  }
  public set custom3AttrValue(value: string) {
    this._custom3AttrValue = value;
  }
  public resetCustom3AttrValue() {
    this._custom3AttrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom3AttrValueInput() {
    return this._custom3AttrValue;
  }

  // custom4_attr_value - computed: false, optional: true, required: false
  private _custom4AttrValue?: string; 
  public get custom4AttrValue() {
    return this.getStringAttribute('custom4_attr_value');
  }
  public set custom4AttrValue(value: string) {
    this._custom4AttrValue = value;
  }
  public resetCustom4AttrValue() {
    this._custom4AttrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom4AttrValueInput() {
    return this._custom4AttrValue;
  }

  // custom5_attr_value - computed: false, optional: true, required: false
  private _custom5AttrValue?: string; 
  public get custom5AttrValue() {
    return this.getStringAttribute('custom5_attr_value');
  }
  public set custom5AttrValue(value: string) {
    this._custom5AttrValue = value;
  }
  public resetCustom5AttrValue() {
    this._custom5AttrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom5AttrValueInput() {
    return this._custom5AttrValue;
  }

  // custom6_attr_value - computed: false, optional: true, required: false
  private _custom6AttrValue?: string; 
  public get custom6AttrValue() {
    return this.getStringAttribute('custom6_attr_value');
  }
  public set custom6AttrValue(value: string) {
    this._custom6AttrValue = value;
  }
  public resetCustom6AttrValue() {
    this._custom6AttrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom6AttrValueInput() {
    return this._custom6AttrValue;
  }

  // imei - computed: false, optional: true, required: false
  private _imei?: string; 
  public get imei() {
    return this.getStringAttribute('imei');
  }
  public set imei(value: string) {
    this._imei = value;
  }
  public resetImei() {
    this._imei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiInput() {
    return this._imei;
  }

  // imsi - computed: false, optional: true, required: false
  private _imsi?: string; 
  public get imsi() {
    return this.getStringAttribute('imsi');
  }
  public set imsi(value: string) {
    this._imsi = value;
  }
  public resetImsi() {
    this._imsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi;
  }

  // inside_ip - computed: false, optional: true, required: false
  private _insideIp?: string; 
  public get insideIp() {
    return this.getStringAttribute('inside_ip');
  }
  public set insideIp(value: string) {
    this._insideIp = value;
  }
  public resetInsideIp() {
    this._insideIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideIpInput() {
    return this._insideIp;
  }

  // inside_ipv6 - computed: false, optional: true, required: false
  private _insideIpv6?: string; 
  public get insideIpv6() {
    return this.getStringAttribute('inside_ipv6');
  }
  public set insideIpv6(value: string) {
    this._insideIpv6 = value;
  }
  public resetInsideIpv6() {
    this._insideIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideIpv6Input() {
    return this._insideIpv6;
  }

  // is_obsolete - computed: false, optional: true, required: false
  private _isObsolete?: number; 
  public get isObsolete() {
    return this.getNumberAttribute('is_obsolete');
  }
  public set isObsolete(value: number) {
    this._isObsolete = value;
  }
  public resetIsObsolete() {
    this._isObsolete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isObsoleteInput() {
    return this._isObsolete;
  }

  // msisdn - computed: false, optional: true, required: false
  private _msisdn?: string; 
  public get msisdn() {
    return this.getStringAttribute('msisdn');
  }
  public set msisdn(value: string) {
    this._msisdn = value;
  }
  public resetMsisdn() {
    this._msisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnInput() {
    return this._msisdn;
  }

  // prefix_len - computed: false, optional: true, required: false
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  public resetPrefixLen() {
    this._prefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
  }
}

export class DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructOutputReference {
    return new DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6LsnRadiusServerOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#case_insensitive DataThunderCgnv6LsnRadiusServerOper#case_insensitive}
  */
  readonly caseInsensitive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#custom_attr_name DataThunderCgnv6LsnRadiusServerOper#custom_attr_name}
  */
  readonly customAttrName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#custom_attr_value DataThunderCgnv6LsnRadiusServerOper#custom_attr_value}
  */
  readonly customAttrValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#starts_with DataThunderCgnv6LsnRadiusServerOper#starts_with}
  */
  readonly startsWith?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#total_entries DataThunderCgnv6LsnRadiusServerOper#total_entries}
  */
  readonly totalEntries?: number;
  /**
  * radius_table_entries_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#radius_table_entries_list DataThunderCgnv6LsnRadiusServerOper#radius_table_entries_list}
  */
  readonly radiusTableEntriesList?: DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6LsnRadiusServerOperOperToTerraform(struct?: DataThunderCgnv6LsnRadiusServerOperOperOutputReference | DataThunderCgnv6LsnRadiusServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitive: cdktf.numberToTerraform(struct!.caseInsensitive),
    custom_attr_name: cdktf.stringToTerraform(struct!.customAttrName),
    custom_attr_value: cdktf.stringToTerraform(struct!.customAttrValue),
    starts_with: cdktf.numberToTerraform(struct!.startsWith),
    total_entries: cdktf.numberToTerraform(struct!.totalEntries),
    radius_table_entries_list: cdktf.listMapper(dataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructToTerraform, true)(struct!.radiusTableEntriesList),
  }
}


export function dataThunderCgnv6LsnRadiusServerOperOperToHclTerraform(struct?: DataThunderCgnv6LsnRadiusServerOperOperOutputReference | DataThunderCgnv6LsnRadiusServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_insensitive: {
      value: cdktf.numberToHclTerraform(struct!.caseInsensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_attr_name: {
      value: cdktf.stringToHclTerraform(struct!.customAttrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attr_value: {
      value: cdktf.stringToHclTerraform(struct!.customAttrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starts_with: {
      value: cdktf.numberToHclTerraform(struct!.startsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries: {
      value: cdktf.numberToHclTerraform(struct!.totalEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_entries_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructToHclTerraform, true)(struct!.radiusTableEntriesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnRadiusServerOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnRadiusServerOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitive = this._caseInsensitive;
    }
    if (this._customAttrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttrName = this._customAttrName;
    }
    if (this._customAttrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttrValue = this._customAttrValue;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    if (this._totalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntries = this._totalEntries;
    }
    if (this._radiusTableEntriesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableEntriesList = this._radiusTableEntriesList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnRadiusServerOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseInsensitive = undefined;
      this._customAttrName = undefined;
      this._customAttrValue = undefined;
      this._startsWith = undefined;
      this._totalEntries = undefined;
      this._radiusTableEntriesList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseInsensitive = value.caseInsensitive;
      this._customAttrName = value.customAttrName;
      this._customAttrValue = value.customAttrValue;
      this._startsWith = value.startsWith;
      this._totalEntries = value.totalEntries;
      this._radiusTableEntriesList.internalValue = value.radiusTableEntriesList;
    }
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: number; 
  public get caseInsensitive() {
    return this.getNumberAttribute('case_insensitive');
  }
  public set caseInsensitive(value: number) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
  }

  // custom_attr_name - computed: false, optional: true, required: false
  private _customAttrName?: string; 
  public get customAttrName() {
    return this.getStringAttribute('custom_attr_name');
  }
  public set customAttrName(value: string) {
    this._customAttrName = value;
  }
  public resetCustomAttrName() {
    this._customAttrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttrNameInput() {
    return this._customAttrName;
  }

  // custom_attr_value - computed: false, optional: true, required: false
  private _customAttrValue?: string; 
  public get customAttrValue() {
    return this.getStringAttribute('custom_attr_value');
  }
  public set customAttrValue(value: string) {
    this._customAttrValue = value;
  }
  public resetCustomAttrValue() {
    this._customAttrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttrValueInput() {
    return this._customAttrValue;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: number; 
  public get startsWith() {
    return this.getNumberAttribute('starts_with');
  }
  public set startsWith(value: number) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }

  // total_entries - computed: false, optional: true, required: false
  private _totalEntries?: number; 
  public get totalEntries() {
    return this.getNumberAttribute('total_entries');
  }
  public set totalEntries(value: number) {
    this._totalEntries = value;
  }
  public resetTotalEntries() {
    this._totalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesInput() {
    return this._totalEntries;
  }

  // radius_table_entries_list - computed: false, optional: true, required: false
  private _radiusTableEntriesList = new DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStructList(this, "radius_table_entries_list", false);
  public get radiusTableEntriesList() {
    return this._radiusTableEntriesList;
  }
  public putRadiusTableEntriesList(value: DataThunderCgnv6LsnRadiusServerOperOperRadiusTableEntriesListStruct[] | cdktf.IResolvable) {
    this._radiusTableEntriesList.internalValue = value;
  }
  public resetRadiusTableEntriesList() {
    this._radiusTableEntriesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableEntriesListInput() {
    return this._radiusTableEntriesList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper thunder_cgnv6_lsn_radius_server_oper}
*/
export class DataThunderCgnv6LsnRadiusServerOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_radius_server_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnRadiusServerOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnRadiusServerOper to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnRadiusServerOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnRadiusServerOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_radius_server_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_radius_server_oper thunder_cgnv6_lsn_radius_server_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnRadiusServerOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnRadiusServerOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_radius_server_oper',
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
  private _oper = new DataThunderCgnv6LsnRadiusServerOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6LsnRadiusServerOperOper) {
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
      oper: dataThunderCgnv6LsnRadiusServerOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6LsnRadiusServerOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnRadiusServerOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
