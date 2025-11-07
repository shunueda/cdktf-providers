// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDynamicClassListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#id DataThunderDdosDynamicClassListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#oper DataThunderDdosDynamicClassListOper#oper}
  */
  readonly oper?: DataThunderDdosDynamicClassListOperOper;
}
export interface DataThunderDdosDynamicClassListOperOperAcEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ac_hit_count DataThunderDdosDynamicClassListOper#ac_hit_count}
  */
  readonly acHitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ac_match_string DataThunderDdosDynamicClassListOper#ac_match_string}
  */
  readonly acMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ac_match_type DataThunderDdosDynamicClassListOper#ac_match_type}
  */
  readonly acMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ac_match_value DataThunderDdosDynamicClassListOper#ac_match_value}
  */
  readonly acMatchValue?: string;
}

export function dataThunderDdosDynamicClassListOperOperAcEntriesToTerraform(struct?: DataThunderDdosDynamicClassListOperOperAcEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_hit_count: cdktf.numberToTerraform(struct!.acHitCount),
    ac_match_string: cdktf.stringToTerraform(struct!.acMatchString),
    ac_match_type: cdktf.stringToTerraform(struct!.acMatchType),
    ac_match_value: cdktf.stringToTerraform(struct!.acMatchValue),
  }
}


export function dataThunderDdosDynamicClassListOperOperAcEntriesToHclTerraform(struct?: DataThunderDdosDynamicClassListOperOperAcEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_hit_count: {
      value: cdktf.numberToHclTerraform(struct!.acHitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ac_match_string: {
      value: cdktf.stringToHclTerraform(struct!.acMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ac_match_type: {
      value: cdktf.stringToHclTerraform(struct!.acMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ac_match_value: {
      value: cdktf.stringToHclTerraform(struct!.acMatchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDynamicClassListOperOperAcEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDynamicClassListOperOperAcEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acHitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acHitCount = this._acHitCount;
    }
    if (this._acMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.acMatchString = this._acMatchString;
    }
    if (this._acMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acMatchType = this._acMatchType;
    }
    if (this._acMatchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acMatchValue = this._acMatchValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDynamicClassListOperOperAcEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acHitCount = undefined;
      this._acMatchString = undefined;
      this._acMatchType = undefined;
      this._acMatchValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acHitCount = value.acHitCount;
      this._acMatchString = value.acMatchString;
      this._acMatchType = value.acMatchType;
      this._acMatchValue = value.acMatchValue;
    }
  }

  // ac_hit_count - computed: false, optional: true, required: false
  private _acHitCount?: number; 
  public get acHitCount() {
    return this.getNumberAttribute('ac_hit_count');
  }
  public set acHitCount(value: number) {
    this._acHitCount = value;
  }
  public resetAcHitCount() {
    this._acHitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acHitCountInput() {
    return this._acHitCount;
  }

  // ac_match_string - computed: false, optional: true, required: false
  private _acMatchString?: string; 
  public get acMatchString() {
    return this.getStringAttribute('ac_match_string');
  }
  public set acMatchString(value: string) {
    this._acMatchString = value;
  }
  public resetAcMatchString() {
    this._acMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acMatchStringInput() {
    return this._acMatchString;
  }

  // ac_match_type - computed: false, optional: true, required: false
  private _acMatchType?: string; 
  public get acMatchType() {
    return this.getStringAttribute('ac_match_type');
  }
  public set acMatchType(value: string) {
    this._acMatchType = value;
  }
  public resetAcMatchType() {
    this._acMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acMatchTypeInput() {
    return this._acMatchType;
  }

  // ac_match_value - computed: false, optional: true, required: false
  private _acMatchValue?: string; 
  public get acMatchValue() {
    return this.getStringAttribute('ac_match_value');
  }
  public set acMatchValue(value: string) {
    this._acMatchValue = value;
  }
  public resetAcMatchValue() {
    this._acMatchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acMatchValueInput() {
    return this._acMatchValue;
  }
}

export class DataThunderDdosDynamicClassListOperOperAcEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDynamicClassListOperOperAcEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDynamicClassListOperOperAcEntriesOutputReference {
    return new DataThunderDdosDynamicClassListOperOperAcEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDynamicClassListOperOperDnsEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#dns_glid DataThunderDdosDynamicClassListOper#dns_glid}
  */
  readonly dnsGlid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#dns_hit_count DataThunderDdosDynamicClassListOper#dns_hit_count}
  */
  readonly dnsHitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#dns_lid DataThunderDdosDynamicClassListOper#dns_lid}
  */
  readonly dnsLid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#dns_match_string DataThunderDdosDynamicClassListOper#dns_match_string}
  */
  readonly dnsMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#dns_match_type DataThunderDdosDynamicClassListOper#dns_match_type}
  */
  readonly dnsMatchType?: string;
}

export function dataThunderDdosDynamicClassListOperOperDnsEntriesToTerraform(struct?: DataThunderDdosDynamicClassListOperOperDnsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_glid: cdktf.numberToTerraform(struct!.dnsGlid),
    dns_hit_count: cdktf.numberToTerraform(struct!.dnsHitCount),
    dns_lid: cdktf.numberToTerraform(struct!.dnsLid),
    dns_match_string: cdktf.stringToTerraform(struct!.dnsMatchString),
    dns_match_type: cdktf.stringToTerraform(struct!.dnsMatchType),
  }
}


export function dataThunderDdosDynamicClassListOperOperDnsEntriesToHclTerraform(struct?: DataThunderDdosDynamicClassListOperOperDnsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_glid: {
      value: cdktf.numberToHclTerraform(struct!.dnsGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_hit_count: {
      value: cdktf.numberToHclTerraform(struct!.dnsHitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_lid: {
      value: cdktf.numberToHclTerraform(struct!.dnsLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_match_string: {
      value: cdktf.stringToHclTerraform(struct!.dnsMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_match_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDynamicClassListOperOperDnsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDynamicClassListOperOperDnsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsGlid = this._dnsGlid;
    }
    if (this._dnsHitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsHitCount = this._dnsHitCount;
    }
    if (this._dnsLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsLid = this._dnsLid;
    }
    if (this._dnsMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMatchString = this._dnsMatchString;
    }
    if (this._dnsMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMatchType = this._dnsMatchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDynamicClassListOperOperDnsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsGlid = undefined;
      this._dnsHitCount = undefined;
      this._dnsLid = undefined;
      this._dnsMatchString = undefined;
      this._dnsMatchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsGlid = value.dnsGlid;
      this._dnsHitCount = value.dnsHitCount;
      this._dnsLid = value.dnsLid;
      this._dnsMatchString = value.dnsMatchString;
      this._dnsMatchType = value.dnsMatchType;
    }
  }

  // dns_glid - computed: false, optional: true, required: false
  private _dnsGlid?: number; 
  public get dnsGlid() {
    return this.getNumberAttribute('dns_glid');
  }
  public set dnsGlid(value: number) {
    this._dnsGlid = value;
  }
  public resetDnsGlid() {
    this._dnsGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsGlidInput() {
    return this._dnsGlid;
  }

  // dns_hit_count - computed: false, optional: true, required: false
  private _dnsHitCount?: number; 
  public get dnsHitCount() {
    return this.getNumberAttribute('dns_hit_count');
  }
  public set dnsHitCount(value: number) {
    this._dnsHitCount = value;
  }
  public resetDnsHitCount() {
    this._dnsHitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHitCountInput() {
    return this._dnsHitCount;
  }

  // dns_lid - computed: false, optional: true, required: false
  private _dnsLid?: number; 
  public get dnsLid() {
    return this.getNumberAttribute('dns_lid');
  }
  public set dnsLid(value: number) {
    this._dnsLid = value;
  }
  public resetDnsLid() {
    this._dnsLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLidInput() {
    return this._dnsLid;
  }

  // dns_match_string - computed: false, optional: true, required: false
  private _dnsMatchString?: string; 
  public get dnsMatchString() {
    return this.getStringAttribute('dns_match_string');
  }
  public set dnsMatchString(value: string) {
    this._dnsMatchString = value;
  }
  public resetDnsMatchString() {
    this._dnsMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMatchStringInput() {
    return this._dnsMatchString;
  }

  // dns_match_type - computed: false, optional: true, required: false
  private _dnsMatchType?: string; 
  public get dnsMatchType() {
    return this.getStringAttribute('dns_match_type');
  }
  public set dnsMatchType(value: string) {
    this._dnsMatchType = value;
  }
  public resetDnsMatchType() {
    this._dnsMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMatchTypeInput() {
    return this._dnsMatchType;
  }
}

export class DataThunderDdosDynamicClassListOperOperDnsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDynamicClassListOperOperDnsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDynamicClassListOperOperDnsEntriesOutputReference {
    return new DataThunderDdosDynamicClassListOperOperDnsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDynamicClassListOperOperGeoLocationEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#geo_location DataThunderDdosDynamicClassListOper#geo_location}
  */
  readonly geoLocation?: string;
}

export function dataThunderDdosDynamicClassListOperOperGeoLocationEntriesToTerraform(struct?: DataThunderDdosDynamicClassListOperOperGeoLocationEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location: cdktf.stringToTerraform(struct!.geoLocation),
  }
}


export function dataThunderDdosDynamicClassListOperOperGeoLocationEntriesToHclTerraform(struct?: DataThunderDdosDynamicClassListOperOperGeoLocationEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_location: {
      value: cdktf.stringToHclTerraform(struct!.geoLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDynamicClassListOperOperGeoLocationEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDynamicClassListOperOperGeoLocationEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocation = this._geoLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDynamicClassListOperOperGeoLocationEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoLocation = value.geoLocation;
    }
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation?: string; 
  public get geoLocation() {
    return this.getStringAttribute('geo_location');
  }
  public set geoLocation(value: string) {
    this._geoLocation = value;
  }
  public resetGeoLocation() {
    this._geoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation;
  }
}

export class DataThunderDdosDynamicClassListOperOperGeoLocationEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDynamicClassListOperOperGeoLocationEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDynamicClassListOperOperGeoLocationEntriesOutputReference {
    return new DataThunderDdosDynamicClassListOperOperGeoLocationEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDynamicClassListOperOperIpv4Entries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_addr DataThunderDdosDynamicClassListOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_age DataThunderDdosDynamicClassListOper#ipv4_age}
  */
  readonly ipv4Age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_glid DataThunderDdosDynamicClassListOper#ipv4_glid}
  */
  readonly ipv4Glid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_hit_count DataThunderDdosDynamicClassListOper#ipv4_hit_count}
  */
  readonly ipv4HitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_lid DataThunderDdosDynamicClassListOper#ipv4_lid}
  */
  readonly ipv4Lid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_lsn_lid DataThunderDdosDynamicClassListOper#ipv4_lsn_lid}
  */
  readonly ipv4LsnLid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_lsn_radius_profile DataThunderDdosDynamicClassListOper#ipv4_lsn_radius_profile}
  */
  readonly ipv4LsnRadiusProfile?: number;
}

export function dataThunderDdosDynamicClassListOperOperIpv4EntriesToTerraform(struct?: DataThunderDdosDynamicClassListOperOperIpv4Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv4_age: cdktf.numberToTerraform(struct!.ipv4Age),
    ipv4_glid: cdktf.numberToTerraform(struct!.ipv4Glid),
    ipv4_hit_count: cdktf.numberToTerraform(struct!.ipv4HitCount),
    ipv4_lid: cdktf.numberToTerraform(struct!.ipv4Lid),
    ipv4_lsn_lid: cdktf.numberToTerraform(struct!.ipv4LsnLid),
    ipv4_lsn_radius_profile: cdktf.numberToTerraform(struct!.ipv4LsnRadiusProfile),
  }
}


export function dataThunderDdosDynamicClassListOperOperIpv4EntriesToHclTerraform(struct?: DataThunderDdosDynamicClassListOperOperIpv4Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_age: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_glid: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Glid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_hit_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv4HitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_lid: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Lid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.ipv4LsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_lsn_radius_profile: {
      value: cdktf.numberToHclTerraform(struct!.ipv4LsnRadiusProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDynamicClassListOperOperIpv4EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDynamicClassListOperOperIpv4Entries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv4Age !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Age = this._ipv4Age;
    }
    if (this._ipv4Glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Glid = this._ipv4Glid;
    }
    if (this._ipv4HitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4HitCount = this._ipv4HitCount;
    }
    if (this._ipv4Lid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Lid = this._ipv4Lid;
    }
    if (this._ipv4LsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4LsnLid = this._ipv4LsnLid;
    }
    if (this._ipv4LsnRadiusProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4LsnRadiusProfile = this._ipv4LsnRadiusProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDynamicClassListOperOperIpv4Entries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv4Age = undefined;
      this._ipv4Glid = undefined;
      this._ipv4HitCount = undefined;
      this._ipv4Lid = undefined;
      this._ipv4LsnLid = undefined;
      this._ipv4LsnRadiusProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv4Age = value.ipv4Age;
      this._ipv4Glid = value.ipv4Glid;
      this._ipv4HitCount = value.ipv4HitCount;
      this._ipv4Lid = value.ipv4Lid;
      this._ipv4LsnLid = value.ipv4LsnLid;
      this._ipv4LsnRadiusProfile = value.ipv4LsnRadiusProfile;
    }
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv4_age - computed: false, optional: true, required: false
  private _ipv4Age?: number; 
  public get ipv4Age() {
    return this.getNumberAttribute('ipv4_age');
  }
  public set ipv4Age(value: number) {
    this._ipv4Age = value;
  }
  public resetIpv4Age() {
    this._ipv4Age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AgeInput() {
    return this._ipv4Age;
  }

  // ipv4_glid - computed: false, optional: true, required: false
  private _ipv4Glid?: number; 
  public get ipv4Glid() {
    return this.getNumberAttribute('ipv4_glid');
  }
  public set ipv4Glid(value: number) {
    this._ipv4Glid = value;
  }
  public resetIpv4Glid() {
    this._ipv4Glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GlidInput() {
    return this._ipv4Glid;
  }

  // ipv4_hit_count - computed: false, optional: true, required: false
  private _ipv4HitCount?: number; 
  public get ipv4HitCount() {
    return this.getNumberAttribute('ipv4_hit_count');
  }
  public set ipv4HitCount(value: number) {
    this._ipv4HitCount = value;
  }
  public resetIpv4HitCount() {
    this._ipv4HitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HitCountInput() {
    return this._ipv4HitCount;
  }

  // ipv4_lid - computed: false, optional: true, required: false
  private _ipv4Lid?: number; 
  public get ipv4Lid() {
    return this.getNumberAttribute('ipv4_lid');
  }
  public set ipv4Lid(value: number) {
    this._ipv4Lid = value;
  }
  public resetIpv4Lid() {
    this._ipv4Lid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LidInput() {
    return this._ipv4Lid;
  }

  // ipv4_lsn_lid - computed: false, optional: true, required: false
  private _ipv4LsnLid?: number; 
  public get ipv4LsnLid() {
    return this.getNumberAttribute('ipv4_lsn_lid');
  }
  public set ipv4LsnLid(value: number) {
    this._ipv4LsnLid = value;
  }
  public resetIpv4LsnLid() {
    this._ipv4LsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LsnLidInput() {
    return this._ipv4LsnLid;
  }

  // ipv4_lsn_radius_profile - computed: false, optional: true, required: false
  private _ipv4LsnRadiusProfile?: number; 
  public get ipv4LsnRadiusProfile() {
    return this.getNumberAttribute('ipv4_lsn_radius_profile');
  }
  public set ipv4LsnRadiusProfile(value: number) {
    this._ipv4LsnRadiusProfile = value;
  }
  public resetIpv4LsnRadiusProfile() {
    this._ipv4LsnRadiusProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LsnRadiusProfileInput() {
    return this._ipv4LsnRadiusProfile;
  }
}

export class DataThunderDdosDynamicClassListOperOperIpv4EntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDynamicClassListOperOperIpv4Entries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDynamicClassListOperOperIpv4EntriesOutputReference {
    return new DataThunderDdosDynamicClassListOperOperIpv4EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDynamicClassListOperOperIpv6Entries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6_age DataThunderDdosDynamicClassListOper#ipv6_age}
  */
  readonly ipv6Age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6_glid DataThunderDdosDynamicClassListOper#ipv6_glid}
  */
  readonly ipv6Glid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6_hit_count DataThunderDdosDynamicClassListOper#ipv6_hit_count}
  */
  readonly ipv6HitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6_lid DataThunderDdosDynamicClassListOper#ipv6_lid}
  */
  readonly ipv6Lid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6_lsn_lid DataThunderDdosDynamicClassListOper#ipv6_lsn_lid}
  */
  readonly ipv6LsnLid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6_lsn_radius_profile DataThunderDdosDynamicClassListOper#ipv6_lsn_radius_profile}
  */
  readonly ipv6LsnRadiusProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6addr DataThunderDdosDynamicClassListOper#ipv6addr}
  */
  readonly ipv6Addr?: string;
}

export function dataThunderDdosDynamicClassListOperOperIpv6EntriesToTerraform(struct?: DataThunderDdosDynamicClassListOperOperIpv6Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_age: cdktf.numberToTerraform(struct!.ipv6Age),
    ipv6_glid: cdktf.numberToTerraform(struct!.ipv6Glid),
    ipv6_hit_count: cdktf.numberToTerraform(struct!.ipv6HitCount),
    ipv6_lid: cdktf.numberToTerraform(struct!.ipv6Lid),
    ipv6_lsn_lid: cdktf.numberToTerraform(struct!.ipv6LsnLid),
    ipv6_lsn_radius_profile: cdktf.numberToTerraform(struct!.ipv6LsnRadiusProfile),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
  }
}


export function dataThunderDdosDynamicClassListOperOperIpv6EntriesToHclTerraform(struct?: DataThunderDdosDynamicClassListOperOperIpv6Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_age: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_glid: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Glid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_hit_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6HitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_lid: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Lid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.ipv6LsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_lsn_radius_profile: {
      value: cdktf.numberToHclTerraform(struct!.ipv6LsnRadiusProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDynamicClassListOperOperIpv6EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDynamicClassListOperOperIpv6Entries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Age !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Age = this._ipv6Age;
    }
    if (this._ipv6Glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Glid = this._ipv6Glid;
    }
    if (this._ipv6HitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6HitCount = this._ipv6HitCount;
    }
    if (this._ipv6Lid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Lid = this._ipv6Lid;
    }
    if (this._ipv6LsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LsnLid = this._ipv6LsnLid;
    }
    if (this._ipv6LsnRadiusProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LsnRadiusProfile = this._ipv6LsnRadiusProfile;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDynamicClassListOperOperIpv6Entries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Age = undefined;
      this._ipv6Glid = undefined;
      this._ipv6HitCount = undefined;
      this._ipv6Lid = undefined;
      this._ipv6LsnLid = undefined;
      this._ipv6LsnRadiusProfile = undefined;
      this._ipv6Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Age = value.ipv6Age;
      this._ipv6Glid = value.ipv6Glid;
      this._ipv6HitCount = value.ipv6HitCount;
      this._ipv6Lid = value.ipv6Lid;
      this._ipv6LsnLid = value.ipv6LsnLid;
      this._ipv6LsnRadiusProfile = value.ipv6LsnRadiusProfile;
      this._ipv6Addr = value.ipv6Addr;
    }
  }

  // ipv6_age - computed: false, optional: true, required: false
  private _ipv6Age?: number; 
  public get ipv6Age() {
    return this.getNumberAttribute('ipv6_age');
  }
  public set ipv6Age(value: number) {
    this._ipv6Age = value;
  }
  public resetIpv6Age() {
    this._ipv6Age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AgeInput() {
    return this._ipv6Age;
  }

  // ipv6_glid - computed: false, optional: true, required: false
  private _ipv6Glid?: number; 
  public get ipv6Glid() {
    return this.getNumberAttribute('ipv6_glid');
  }
  public set ipv6Glid(value: number) {
    this._ipv6Glid = value;
  }
  public resetIpv6Glid() {
    this._ipv6Glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GlidInput() {
    return this._ipv6Glid;
  }

  // ipv6_hit_count - computed: false, optional: true, required: false
  private _ipv6HitCount?: number; 
  public get ipv6HitCount() {
    return this.getNumberAttribute('ipv6_hit_count');
  }
  public set ipv6HitCount(value: number) {
    this._ipv6HitCount = value;
  }
  public resetIpv6HitCount() {
    this._ipv6HitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HitCountInput() {
    return this._ipv6HitCount;
  }

  // ipv6_lid - computed: false, optional: true, required: false
  private _ipv6Lid?: number; 
  public get ipv6Lid() {
    return this.getNumberAttribute('ipv6_lid');
  }
  public set ipv6Lid(value: number) {
    this._ipv6Lid = value;
  }
  public resetIpv6Lid() {
    this._ipv6Lid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LidInput() {
    return this._ipv6Lid;
  }

  // ipv6_lsn_lid - computed: false, optional: true, required: false
  private _ipv6LsnLid?: number; 
  public get ipv6LsnLid() {
    return this.getNumberAttribute('ipv6_lsn_lid');
  }
  public set ipv6LsnLid(value: number) {
    this._ipv6LsnLid = value;
  }
  public resetIpv6LsnLid() {
    this._ipv6LsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LsnLidInput() {
    return this._ipv6LsnLid;
  }

  // ipv6_lsn_radius_profile - computed: false, optional: true, required: false
  private _ipv6LsnRadiusProfile?: number; 
  public get ipv6LsnRadiusProfile() {
    return this.getNumberAttribute('ipv6_lsn_radius_profile');
  }
  public set ipv6LsnRadiusProfile(value: number) {
    this._ipv6LsnRadiusProfile = value;
  }
  public resetIpv6LsnRadiusProfile() {
    this._ipv6LsnRadiusProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LsnRadiusProfileInput() {
    return this._ipv6LsnRadiusProfile;
  }

  // ipv6addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }
}

export class DataThunderDdosDynamicClassListOperOperIpv6EntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDynamicClassListOperOperIpv6Entries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDynamicClassListOperOperIpv6EntriesOutputReference {
    return new DataThunderDdosDynamicClassListOperOperIpv6EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDynamicClassListOperOperStringEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#string_glid DataThunderDdosDynamicClassListOper#string_glid}
  */
  readonly stringGlid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#string_hit_count DataThunderDdosDynamicClassListOper#string_hit_count}
  */
  readonly stringHitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#string_key DataThunderDdosDynamicClassListOper#string_key}
  */
  readonly stringKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#string_lid DataThunderDdosDynamicClassListOper#string_lid}
  */
  readonly stringLid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#string_value DataThunderDdosDynamicClassListOper#string_value}
  */
  readonly stringValue?: string;
}

export function dataThunderDdosDynamicClassListOperOperStringEntriesToTerraform(struct?: DataThunderDdosDynamicClassListOperOperStringEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_glid: cdktf.numberToTerraform(struct!.stringGlid),
    string_hit_count: cdktf.numberToTerraform(struct!.stringHitCount),
    string_key: cdktf.stringToTerraform(struct!.stringKey),
    string_lid: cdktf.numberToTerraform(struct!.stringLid),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataThunderDdosDynamicClassListOperOperStringEntriesToHclTerraform(struct?: DataThunderDdosDynamicClassListOperOperStringEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_glid: {
      value: cdktf.numberToHclTerraform(struct!.stringGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_hit_count: {
      value: cdktf.numberToHclTerraform(struct!.stringHitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_key: {
      value: cdktf.stringToHclTerraform(struct!.stringKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_lid: {
      value: cdktf.numberToHclTerraform(struct!.stringLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDynamicClassListOperOperStringEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDynamicClassListOperOperStringEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGlid = this._stringGlid;
    }
    if (this._stringHitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringHitCount = this._stringHitCount;
    }
    if (this._stringKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringKey = this._stringKey;
    }
    if (this._stringLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLid = this._stringLid;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDynamicClassListOperOperStringEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringGlid = undefined;
      this._stringHitCount = undefined;
      this._stringKey = undefined;
      this._stringLid = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringGlid = value.stringGlid;
      this._stringHitCount = value.stringHitCount;
      this._stringKey = value.stringKey;
      this._stringLid = value.stringLid;
      this._stringValue = value.stringValue;
    }
  }

  // string_glid - computed: false, optional: true, required: false
  private _stringGlid?: number; 
  public get stringGlid() {
    return this.getNumberAttribute('string_glid');
  }
  public set stringGlid(value: number) {
    this._stringGlid = value;
  }
  public resetStringGlid() {
    this._stringGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGlidInput() {
    return this._stringGlid;
  }

  // string_hit_count - computed: false, optional: true, required: false
  private _stringHitCount?: number; 
  public get stringHitCount() {
    return this.getNumberAttribute('string_hit_count');
  }
  public set stringHitCount(value: number) {
    this._stringHitCount = value;
  }
  public resetStringHitCount() {
    this._stringHitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringHitCountInput() {
    return this._stringHitCount;
  }

  // string_key - computed: false, optional: true, required: false
  private _stringKey?: string; 
  public get stringKey() {
    return this.getStringAttribute('string_key');
  }
  public set stringKey(value: string) {
    this._stringKey = value;
  }
  public resetStringKey() {
    this._stringKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringKeyInput() {
    return this._stringKey;
  }

  // string_lid - computed: false, optional: true, required: false
  private _stringLid?: number; 
  public get stringLid() {
    return this.getNumberAttribute('string_lid');
  }
  public set stringLid(value: number) {
    this._stringLid = value;
  }
  public resetStringLid() {
    this._stringLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLidInput() {
    return this._stringLid;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class DataThunderDdosDynamicClassListOperOperStringEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDynamicClassListOperOperStringEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDynamicClassListOperOperStringEntriesOutputReference {
    return new DataThunderDdosDynamicClassListOperOperStringEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDynamicClassListOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ac_total_entries DataThunderDdosDynamicClassListOper#ac_total_entries}
  */
  readonly acTotalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#dns_total_entries DataThunderDdosDynamicClassListOper#dns_total_entries}
  */
  readonly dnsTotalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#file_or_string DataThunderDdosDynamicClassListOper#file_or_string}
  */
  readonly fileOrString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#geo_location_total_entries DataThunderDdosDynamicClassListOper#geo_location_total_entries}
  */
  readonly geoLocationTotalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_total_single_ip DataThunderDdosDynamicClassListOper#ipv4_total_single_ip}
  */
  readonly ipv4TotalSingleIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_total_subnet DataThunderDdosDynamicClassListOper#ipv4_total_subnet}
  */
  readonly ipv4TotalSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6_total_single_ip DataThunderDdosDynamicClassListOper#ipv6_total_single_ip}
  */
  readonly ipv6TotalSingleIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6_total_subnet DataThunderDdosDynamicClassListOper#ipv6_total_subnet}
  */
  readonly ipv6TotalSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#string_total_entries DataThunderDdosDynamicClassListOper#string_total_entries}
  */
  readonly stringTotalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#type DataThunderDdosDynamicClassListOper#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#user_tag DataThunderDdosDynamicClassListOper#user_tag}
  */
  readonly userTag?: string;
  /**
  * ac_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ac_entries DataThunderDdosDynamicClassListOper#ac_entries}
  */
  readonly acEntries?: DataThunderDdosDynamicClassListOperOperAcEntries[] | cdktf.IResolvable;
  /**
  * dns_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#dns_entries DataThunderDdosDynamicClassListOper#dns_entries}
  */
  readonly dnsEntries?: DataThunderDdosDynamicClassListOperOperDnsEntries[] | cdktf.IResolvable;
  /**
  * geo_location_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#geo_location_entries DataThunderDdosDynamicClassListOper#geo_location_entries}
  */
  readonly geoLocationEntries?: DataThunderDdosDynamicClassListOperOperGeoLocationEntries[] | cdktf.IResolvable;
  /**
  * ipv4_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv4_entries DataThunderDdosDynamicClassListOper#ipv4_entries}
  */
  readonly ipv4Entries?: DataThunderDdosDynamicClassListOperOperIpv4Entries[] | cdktf.IResolvable;
  /**
  * ipv6_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#ipv6_entries DataThunderDdosDynamicClassListOper#ipv6_entries}
  */
  readonly ipv6Entries?: DataThunderDdosDynamicClassListOperOperIpv6Entries[] | cdktf.IResolvable;
  /**
  * string_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#string_entries DataThunderDdosDynamicClassListOper#string_entries}
  */
  readonly stringEntries?: DataThunderDdosDynamicClassListOperOperStringEntries[] | cdktf.IResolvable;
}

export function dataThunderDdosDynamicClassListOperOperToTerraform(struct?: DataThunderDdosDynamicClassListOperOperOutputReference | DataThunderDdosDynamicClassListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_total_entries: cdktf.numberToTerraform(struct!.acTotalEntries),
    dns_total_entries: cdktf.numberToTerraform(struct!.dnsTotalEntries),
    file_or_string: cdktf.stringToTerraform(struct!.fileOrString),
    geo_location_total_entries: cdktf.numberToTerraform(struct!.geoLocationTotalEntries),
    ipv4_total_single_ip: cdktf.numberToTerraform(struct!.ipv4TotalSingleIp),
    ipv4_total_subnet: cdktf.numberToTerraform(struct!.ipv4TotalSubnet),
    ipv6_total_single_ip: cdktf.numberToTerraform(struct!.ipv6TotalSingleIp),
    ipv6_total_subnet: cdktf.numberToTerraform(struct!.ipv6TotalSubnet),
    string_total_entries: cdktf.numberToTerraform(struct!.stringTotalEntries),
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    ac_entries: cdktf.listMapper(dataThunderDdosDynamicClassListOperOperAcEntriesToTerraform, true)(struct!.acEntries),
    dns_entries: cdktf.listMapper(dataThunderDdosDynamicClassListOperOperDnsEntriesToTerraform, true)(struct!.dnsEntries),
    geo_location_entries: cdktf.listMapper(dataThunderDdosDynamicClassListOperOperGeoLocationEntriesToTerraform, true)(struct!.geoLocationEntries),
    ipv4_entries: cdktf.listMapper(dataThunderDdosDynamicClassListOperOperIpv4EntriesToTerraform, true)(struct!.ipv4Entries),
    ipv6_entries: cdktf.listMapper(dataThunderDdosDynamicClassListOperOperIpv6EntriesToTerraform, true)(struct!.ipv6Entries),
    string_entries: cdktf.listMapper(dataThunderDdosDynamicClassListOperOperStringEntriesToTerraform, true)(struct!.stringEntries),
  }
}


export function dataThunderDdosDynamicClassListOperOperToHclTerraform(struct?: DataThunderDdosDynamicClassListOperOperOutputReference | DataThunderDdosDynamicClassListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_total_entries: {
      value: cdktf.numberToHclTerraform(struct!.acTotalEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_total_entries: {
      value: cdktf.numberToHclTerraform(struct!.dnsTotalEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_or_string: {
      value: cdktf.stringToHclTerraform(struct!.fileOrString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location_total_entries: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationTotalEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_total_single_ip: {
      value: cdktf.numberToHclTerraform(struct!.ipv4TotalSingleIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_total_subnet: {
      value: cdktf.numberToHclTerraform(struct!.ipv4TotalSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_total_single_ip: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TotalSingleIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_total_subnet: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TotalSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_total_entries: {
      value: cdktf.numberToHclTerraform(struct!.stringTotalEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ac_entries: {
      value: cdktf.listMapperHcl(dataThunderDdosDynamicClassListOperOperAcEntriesToHclTerraform, true)(struct!.acEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDynamicClassListOperOperAcEntriesList",
    },
    dns_entries: {
      value: cdktf.listMapperHcl(dataThunderDdosDynamicClassListOperOperDnsEntriesToHclTerraform, true)(struct!.dnsEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDynamicClassListOperOperDnsEntriesList",
    },
    geo_location_entries: {
      value: cdktf.listMapperHcl(dataThunderDdosDynamicClassListOperOperGeoLocationEntriesToHclTerraform, true)(struct!.geoLocationEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDynamicClassListOperOperGeoLocationEntriesList",
    },
    ipv4_entries: {
      value: cdktf.listMapperHcl(dataThunderDdosDynamicClassListOperOperIpv4EntriesToHclTerraform, true)(struct!.ipv4Entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDynamicClassListOperOperIpv4EntriesList",
    },
    ipv6_entries: {
      value: cdktf.listMapperHcl(dataThunderDdosDynamicClassListOperOperIpv6EntriesToHclTerraform, true)(struct!.ipv6Entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDynamicClassListOperOperIpv6EntriesList",
    },
    string_entries: {
      value: cdktf.listMapperHcl(dataThunderDdosDynamicClassListOperOperStringEntriesToHclTerraform, true)(struct!.stringEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDynamicClassListOperOperStringEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDynamicClassListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDynamicClassListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acTotalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.acTotalEntries = this._acTotalEntries;
    }
    if (this._dnsTotalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTotalEntries = this._dnsTotalEntries;
    }
    if (this._fileOrString !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileOrString = this._fileOrString;
    }
    if (this._geoLocationTotalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationTotalEntries = this._geoLocationTotalEntries;
    }
    if (this._ipv4TotalSingleIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4TotalSingleIp = this._ipv4TotalSingleIp;
    }
    if (this._ipv4TotalSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4TotalSubnet = this._ipv4TotalSubnet;
    }
    if (this._ipv6TotalSingleIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TotalSingleIp = this._ipv6TotalSingleIp;
    }
    if (this._ipv6TotalSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TotalSubnet = this._ipv6TotalSubnet;
    }
    if (this._stringTotalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringTotalEntries = this._stringTotalEntries;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._acEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acEntries = this._acEntries?.internalValue;
    }
    if (this._dnsEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsEntries = this._dnsEntries?.internalValue;
    }
    if (this._geoLocationEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationEntries = this._geoLocationEntries?.internalValue;
    }
    if (this._ipv4Entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Entries = this._ipv4Entries?.internalValue;
    }
    if (this._ipv6Entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Entries = this._ipv6Entries?.internalValue;
    }
    if (this._stringEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringEntries = this._stringEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDynamicClassListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acTotalEntries = undefined;
      this._dnsTotalEntries = undefined;
      this._fileOrString = undefined;
      this._geoLocationTotalEntries = undefined;
      this._ipv4TotalSingleIp = undefined;
      this._ipv4TotalSubnet = undefined;
      this._ipv6TotalSingleIp = undefined;
      this._ipv6TotalSubnet = undefined;
      this._stringTotalEntries = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._acEntries.internalValue = undefined;
      this._dnsEntries.internalValue = undefined;
      this._geoLocationEntries.internalValue = undefined;
      this._ipv4Entries.internalValue = undefined;
      this._ipv6Entries.internalValue = undefined;
      this._stringEntries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acTotalEntries = value.acTotalEntries;
      this._dnsTotalEntries = value.dnsTotalEntries;
      this._fileOrString = value.fileOrString;
      this._geoLocationTotalEntries = value.geoLocationTotalEntries;
      this._ipv4TotalSingleIp = value.ipv4TotalSingleIp;
      this._ipv4TotalSubnet = value.ipv4TotalSubnet;
      this._ipv6TotalSingleIp = value.ipv6TotalSingleIp;
      this._ipv6TotalSubnet = value.ipv6TotalSubnet;
      this._stringTotalEntries = value.stringTotalEntries;
      this._type = value.type;
      this._userTag = value.userTag;
      this._acEntries.internalValue = value.acEntries;
      this._dnsEntries.internalValue = value.dnsEntries;
      this._geoLocationEntries.internalValue = value.geoLocationEntries;
      this._ipv4Entries.internalValue = value.ipv4Entries;
      this._ipv6Entries.internalValue = value.ipv6Entries;
      this._stringEntries.internalValue = value.stringEntries;
    }
  }

  // ac_total_entries - computed: false, optional: true, required: false
  private _acTotalEntries?: number; 
  public get acTotalEntries() {
    return this.getNumberAttribute('ac_total_entries');
  }
  public set acTotalEntries(value: number) {
    this._acTotalEntries = value;
  }
  public resetAcTotalEntries() {
    this._acTotalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acTotalEntriesInput() {
    return this._acTotalEntries;
  }

  // dns_total_entries - computed: false, optional: true, required: false
  private _dnsTotalEntries?: number; 
  public get dnsTotalEntries() {
    return this.getNumberAttribute('dns_total_entries');
  }
  public set dnsTotalEntries(value: number) {
    this._dnsTotalEntries = value;
  }
  public resetDnsTotalEntries() {
    this._dnsTotalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTotalEntriesInput() {
    return this._dnsTotalEntries;
  }

  // file_or_string - computed: false, optional: true, required: false
  private _fileOrString?: string; 
  public get fileOrString() {
    return this.getStringAttribute('file_or_string');
  }
  public set fileOrString(value: string) {
    this._fileOrString = value;
  }
  public resetFileOrString() {
    this._fileOrString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileOrStringInput() {
    return this._fileOrString;
  }

  // geo_location_total_entries - computed: false, optional: true, required: false
  private _geoLocationTotalEntries?: number; 
  public get geoLocationTotalEntries() {
    return this.getNumberAttribute('geo_location_total_entries');
  }
  public set geoLocationTotalEntries(value: number) {
    this._geoLocationTotalEntries = value;
  }
  public resetGeoLocationTotalEntries() {
    this._geoLocationTotalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationTotalEntriesInput() {
    return this._geoLocationTotalEntries;
  }

  // ipv4_total_single_ip - computed: false, optional: true, required: false
  private _ipv4TotalSingleIp?: number; 
  public get ipv4TotalSingleIp() {
    return this.getNumberAttribute('ipv4_total_single_ip');
  }
  public set ipv4TotalSingleIp(value: number) {
    this._ipv4TotalSingleIp = value;
  }
  public resetIpv4TotalSingleIp() {
    this._ipv4TotalSingleIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TotalSingleIpInput() {
    return this._ipv4TotalSingleIp;
  }

  // ipv4_total_subnet - computed: false, optional: true, required: false
  private _ipv4TotalSubnet?: number; 
  public get ipv4TotalSubnet() {
    return this.getNumberAttribute('ipv4_total_subnet');
  }
  public set ipv4TotalSubnet(value: number) {
    this._ipv4TotalSubnet = value;
  }
  public resetIpv4TotalSubnet() {
    this._ipv4TotalSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TotalSubnetInput() {
    return this._ipv4TotalSubnet;
  }

  // ipv6_total_single_ip - computed: false, optional: true, required: false
  private _ipv6TotalSingleIp?: number; 
  public get ipv6TotalSingleIp() {
    return this.getNumberAttribute('ipv6_total_single_ip');
  }
  public set ipv6TotalSingleIp(value: number) {
    this._ipv6TotalSingleIp = value;
  }
  public resetIpv6TotalSingleIp() {
    this._ipv6TotalSingleIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TotalSingleIpInput() {
    return this._ipv6TotalSingleIp;
  }

  // ipv6_total_subnet - computed: false, optional: true, required: false
  private _ipv6TotalSubnet?: number; 
  public get ipv6TotalSubnet() {
    return this.getNumberAttribute('ipv6_total_subnet');
  }
  public set ipv6TotalSubnet(value: number) {
    this._ipv6TotalSubnet = value;
  }
  public resetIpv6TotalSubnet() {
    this._ipv6TotalSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TotalSubnetInput() {
    return this._ipv6TotalSubnet;
  }

  // string_total_entries - computed: false, optional: true, required: false
  private _stringTotalEntries?: number; 
  public get stringTotalEntries() {
    return this.getNumberAttribute('string_total_entries');
  }
  public set stringTotalEntries(value: number) {
    this._stringTotalEntries = value;
  }
  public resetStringTotalEntries() {
    this._stringTotalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTotalEntriesInput() {
    return this._stringTotalEntries;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // ac_entries - computed: false, optional: true, required: false
  private _acEntries = new DataThunderDdosDynamicClassListOperOperAcEntriesList(this, "ac_entries", false);
  public get acEntries() {
    return this._acEntries;
  }
  public putAcEntries(value: DataThunderDdosDynamicClassListOperOperAcEntries[] | cdktf.IResolvable) {
    this._acEntries.internalValue = value;
  }
  public resetAcEntries() {
    this._acEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acEntriesInput() {
    return this._acEntries.internalValue;
  }

  // dns_entries - computed: false, optional: true, required: false
  private _dnsEntries = new DataThunderDdosDynamicClassListOperOperDnsEntriesList(this, "dns_entries", false);
  public get dnsEntries() {
    return this._dnsEntries;
  }
  public putDnsEntries(value: DataThunderDdosDynamicClassListOperOperDnsEntries[] | cdktf.IResolvable) {
    this._dnsEntries.internalValue = value;
  }
  public resetDnsEntries() {
    this._dnsEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsEntriesInput() {
    return this._dnsEntries.internalValue;
  }

  // geo_location_entries - computed: false, optional: true, required: false
  private _geoLocationEntries = new DataThunderDdosDynamicClassListOperOperGeoLocationEntriesList(this, "geo_location_entries", false);
  public get geoLocationEntries() {
    return this._geoLocationEntries;
  }
  public putGeoLocationEntries(value: DataThunderDdosDynamicClassListOperOperGeoLocationEntries[] | cdktf.IResolvable) {
    this._geoLocationEntries.internalValue = value;
  }
  public resetGeoLocationEntries() {
    this._geoLocationEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationEntriesInput() {
    return this._geoLocationEntries.internalValue;
  }

  // ipv4_entries - computed: false, optional: true, required: false
  private _ipv4Entries = new DataThunderDdosDynamicClassListOperOperIpv4EntriesList(this, "ipv4_entries", false);
  public get ipv4Entries() {
    return this._ipv4Entries;
  }
  public putIpv4Entries(value: DataThunderDdosDynamicClassListOperOperIpv4Entries[] | cdktf.IResolvable) {
    this._ipv4Entries.internalValue = value;
  }
  public resetIpv4Entries() {
    this._ipv4Entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EntriesInput() {
    return this._ipv4Entries.internalValue;
  }

  // ipv6_entries - computed: false, optional: true, required: false
  private _ipv6Entries = new DataThunderDdosDynamicClassListOperOperIpv6EntriesList(this, "ipv6_entries", false);
  public get ipv6Entries() {
    return this._ipv6Entries;
  }
  public putIpv6Entries(value: DataThunderDdosDynamicClassListOperOperIpv6Entries[] | cdktf.IResolvable) {
    this._ipv6Entries.internalValue = value;
  }
  public resetIpv6Entries() {
    this._ipv6Entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EntriesInput() {
    return this._ipv6Entries.internalValue;
  }

  // string_entries - computed: false, optional: true, required: false
  private _stringEntries = new DataThunderDdosDynamicClassListOperOperStringEntriesList(this, "string_entries", false);
  public get stringEntries() {
    return this._stringEntries;
  }
  public putStringEntries(value: DataThunderDdosDynamicClassListOperOperStringEntries[] | cdktf.IResolvable) {
    this._stringEntries.internalValue = value;
  }
  public resetStringEntries() {
    this._stringEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringEntriesInput() {
    return this._stringEntries.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper thunder_ddos_dynamic_class_list_oper}
*/
export class DataThunderDdosDynamicClassListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dynamic_class_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDynamicClassListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDynamicClassListOper to import
  * @param importFromId The id of the existing DataThunderDdosDynamicClassListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDynamicClassListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dynamic_class_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dynamic_class_list_oper thunder_ddos_dynamic_class_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDynamicClassListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDynamicClassListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dynamic_class_list_oper',
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
  private _oper = new DataThunderDdosDynamicClassListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDynamicClassListOperOper) {
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
      oper: dataThunderDdosDynamicClassListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosDynamicClassListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDynamicClassListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
