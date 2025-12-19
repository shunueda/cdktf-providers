// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbRpzOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#id DataThunderSlbRpzOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#oper DataThunderSlbRpzOper#oper}
  */
  readonly oper?: DataThunderSlbRpzOperOper;
}
export interface DataThunderSlbRpzOperOperDnsEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#dns_glid DataThunderSlbRpzOper#dns_glid}
  */
  readonly dnsGlid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#dns_hit_count DataThunderSlbRpzOper#dns_hit_count}
  */
  readonly dnsHitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#dns_lid DataThunderSlbRpzOper#dns_lid}
  */
  readonly dnsLid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#dns_match_string DataThunderSlbRpzOper#dns_match_string}
  */
  readonly dnsMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#dns_match_type DataThunderSlbRpzOper#dns_match_type}
  */
  readonly dnsMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#dns_rpz_type DataThunderSlbRpzOper#dns_rpz_type}
  */
  readonly dnsRpzType?: number;
}

export function dataThunderSlbRpzOperOperDnsEntriesToTerraform(struct?: DataThunderSlbRpzOperOperDnsEntries | cdktf.IResolvable): any {
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
    dns_rpz_type: cdktf.numberToTerraform(struct!.dnsRpzType),
  }
}


export function dataThunderSlbRpzOperOperDnsEntriesToHclTerraform(struct?: DataThunderSlbRpzOperOperDnsEntries | cdktf.IResolvable): any {
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
    dns_rpz_type: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRpzOperOperDnsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbRpzOperOperDnsEntries | cdktf.IResolvable | undefined {
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
    if (this._dnsRpzType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzType = this._dnsRpzType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRpzOperOperDnsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsGlid = undefined;
      this._dnsHitCount = undefined;
      this._dnsLid = undefined;
      this._dnsMatchString = undefined;
      this._dnsMatchType = undefined;
      this._dnsRpzType = undefined;
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
      this._dnsRpzType = value.dnsRpzType;
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

  // dns_rpz_type - computed: false, optional: true, required: false
  private _dnsRpzType?: number; 
  public get dnsRpzType() {
    return this.getNumberAttribute('dns_rpz_type');
  }
  public set dnsRpzType(value: number) {
    this._dnsRpzType = value;
  }
  public resetDnsRpzType() {
    this._dnsRpzType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzTypeInput() {
    return this._dnsRpzType;
  }
}

export class DataThunderSlbRpzOperOperDnsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbRpzOperOperDnsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbRpzOperOperDnsEntriesOutputReference {
    return new DataThunderSlbRpzOperOperDnsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbRpzOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#dns_template_bound DataThunderSlbRpzOper#dns_template_bound}
  */
  readonly dnsTemplateBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#file DataThunderSlbRpzOper#file}
  */
  readonly file?: string;
}

export function dataThunderSlbRpzOperOperFileListStructToTerraform(struct?: DataThunderSlbRpzOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_template_bound: cdktf.stringToTerraform(struct!.dnsTemplateBound),
    file: cdktf.stringToTerraform(struct!.file),
  }
}


export function dataThunderSlbRpzOperOperFileListStructToHclTerraform(struct?: DataThunderSlbRpzOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_template_bound: {
      value: cdktf.stringToHclTerraform(struct!.dnsTemplateBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRpzOperOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbRpzOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsTemplateBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTemplateBound = this._dnsTemplateBound;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRpzOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsTemplateBound = undefined;
      this._file = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsTemplateBound = value.dnsTemplateBound;
      this._file = value.file;
    }
  }

  // dns_template_bound - computed: false, optional: true, required: false
  private _dnsTemplateBound?: string; 
  public get dnsTemplateBound() {
    return this.getStringAttribute('dns_template_bound');
  }
  public set dnsTemplateBound(value: string) {
    this._dnsTemplateBound = value;
  }
  public resetDnsTemplateBound() {
    this._dnsTemplateBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTemplateBoundInput() {
    return this._dnsTemplateBound;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }
}

export class DataThunderSlbRpzOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbRpzOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbRpzOperOperFileListStructOutputReference {
    return new DataThunderSlbRpzOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbRpzOperOperIpv4Entries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_addr DataThunderSlbRpzOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_age DataThunderSlbRpzOper#ipv4_age}
  */
  readonly ipv4Age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_glid DataThunderSlbRpzOper#ipv4_glid}
  */
  readonly ipv4Glid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_gtp_policy DataThunderSlbRpzOper#ipv4_gtp_policy}
  */
  readonly ipv4GtpPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_hit_count DataThunderSlbRpzOper#ipv4_hit_count}
  */
  readonly ipv4HitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_lid DataThunderSlbRpzOper#ipv4_lid}
  */
  readonly ipv4Lid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_lsn_lid DataThunderSlbRpzOper#ipv4_lsn_lid}
  */
  readonly ipv4LsnLid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_lsn_radius_profile DataThunderSlbRpzOper#ipv4_lsn_radius_profile}
  */
  readonly ipv4LsnRadiusProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_rpz_type DataThunderSlbRpzOper#ipv4_rpz_type}
  */
  readonly ipv4RpzType?: number;
}

export function dataThunderSlbRpzOperOperIpv4EntriesToTerraform(struct?: DataThunderSlbRpzOperOperIpv4Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv4_age: cdktf.numberToTerraform(struct!.ipv4Age),
    ipv4_glid: cdktf.numberToTerraform(struct!.ipv4Glid),
    ipv4_gtp_policy: cdktf.stringToTerraform(struct!.ipv4GtpPolicy),
    ipv4_hit_count: cdktf.numberToTerraform(struct!.ipv4HitCount),
    ipv4_lid: cdktf.numberToTerraform(struct!.ipv4Lid),
    ipv4_lsn_lid: cdktf.numberToTerraform(struct!.ipv4LsnLid),
    ipv4_lsn_radius_profile: cdktf.numberToTerraform(struct!.ipv4LsnRadiusProfile),
    ipv4_rpz_type: cdktf.numberToTerraform(struct!.ipv4RpzType),
  }
}


export function dataThunderSlbRpzOperOperIpv4EntriesToHclTerraform(struct?: DataThunderSlbRpzOperOperIpv4Entries | cdktf.IResolvable): any {
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
    ipv4_gtp_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipv4GtpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    ipv4_rpz_type: {
      value: cdktf.numberToHclTerraform(struct!.ipv4RpzType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRpzOperOperIpv4EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbRpzOperOperIpv4Entries | cdktf.IResolvable | undefined {
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
    if (this._ipv4GtpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4GtpPolicy = this._ipv4GtpPolicy;
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
    if (this._ipv4RpzType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4RpzType = this._ipv4RpzType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRpzOperOperIpv4Entries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv4Age = undefined;
      this._ipv4Glid = undefined;
      this._ipv4GtpPolicy = undefined;
      this._ipv4HitCount = undefined;
      this._ipv4Lid = undefined;
      this._ipv4LsnLid = undefined;
      this._ipv4LsnRadiusProfile = undefined;
      this._ipv4RpzType = undefined;
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
      this._ipv4GtpPolicy = value.ipv4GtpPolicy;
      this._ipv4HitCount = value.ipv4HitCount;
      this._ipv4Lid = value.ipv4Lid;
      this._ipv4LsnLid = value.ipv4LsnLid;
      this._ipv4LsnRadiusProfile = value.ipv4LsnRadiusProfile;
      this._ipv4RpzType = value.ipv4RpzType;
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

  // ipv4_gtp_policy - computed: false, optional: true, required: false
  private _ipv4GtpPolicy?: string; 
  public get ipv4GtpPolicy() {
    return this.getStringAttribute('ipv4_gtp_policy');
  }
  public set ipv4GtpPolicy(value: string) {
    this._ipv4GtpPolicy = value;
  }
  public resetIpv4GtpPolicy() {
    this._ipv4GtpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GtpPolicyInput() {
    return this._ipv4GtpPolicy;
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

  // ipv4_rpz_type - computed: false, optional: true, required: false
  private _ipv4RpzType?: number; 
  public get ipv4RpzType() {
    return this.getNumberAttribute('ipv4_rpz_type');
  }
  public set ipv4RpzType(value: number) {
    this._ipv4RpzType = value;
  }
  public resetIpv4RpzType() {
    this._ipv4RpzType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RpzTypeInput() {
    return this._ipv4RpzType;
  }
}

export class DataThunderSlbRpzOperOperIpv4EntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbRpzOperOperIpv4Entries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbRpzOperOperIpv4EntriesOutputReference {
    return new DataThunderSlbRpzOperOperIpv4EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbRpzOperOperIpv6Entries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_age DataThunderSlbRpzOper#ipv6_age}
  */
  readonly ipv6Age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_glid DataThunderSlbRpzOper#ipv6_glid}
  */
  readonly ipv6Glid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_gtp_policy DataThunderSlbRpzOper#ipv6_gtp_policy}
  */
  readonly ipv6GtpPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_hit_count DataThunderSlbRpzOper#ipv6_hit_count}
  */
  readonly ipv6HitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_lid DataThunderSlbRpzOper#ipv6_lid}
  */
  readonly ipv6Lid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_lsn_lid DataThunderSlbRpzOper#ipv6_lsn_lid}
  */
  readonly ipv6LsnLid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_lsn_radius_profile DataThunderSlbRpzOper#ipv6_lsn_radius_profile}
  */
  readonly ipv6LsnRadiusProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_rpz_type DataThunderSlbRpzOper#ipv6_rpz_type}
  */
  readonly ipv6RpzType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6addr DataThunderSlbRpzOper#ipv6addr}
  */
  readonly ipv6Addr?: string;
}

export function dataThunderSlbRpzOperOperIpv6EntriesToTerraform(struct?: DataThunderSlbRpzOperOperIpv6Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_age: cdktf.numberToTerraform(struct!.ipv6Age),
    ipv6_glid: cdktf.numberToTerraform(struct!.ipv6Glid),
    ipv6_gtp_policy: cdktf.stringToTerraform(struct!.ipv6GtpPolicy),
    ipv6_hit_count: cdktf.numberToTerraform(struct!.ipv6HitCount),
    ipv6_lid: cdktf.numberToTerraform(struct!.ipv6Lid),
    ipv6_lsn_lid: cdktf.numberToTerraform(struct!.ipv6LsnLid),
    ipv6_lsn_radius_profile: cdktf.numberToTerraform(struct!.ipv6LsnRadiusProfile),
    ipv6_rpz_type: cdktf.numberToTerraform(struct!.ipv6RpzType),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
  }
}


export function dataThunderSlbRpzOperOperIpv6EntriesToHclTerraform(struct?: DataThunderSlbRpzOperOperIpv6Entries | cdktf.IResolvable): any {
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
    ipv6_gtp_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipv6GtpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    ipv6_rpz_type: {
      value: cdktf.numberToHclTerraform(struct!.ipv6RpzType),
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

export class DataThunderSlbRpzOperOperIpv6EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbRpzOperOperIpv6Entries | cdktf.IResolvable | undefined {
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
    if (this._ipv6GtpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GtpPolicy = this._ipv6GtpPolicy;
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
    if (this._ipv6RpzType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6RpzType = this._ipv6RpzType;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRpzOperOperIpv6Entries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Age = undefined;
      this._ipv6Glid = undefined;
      this._ipv6GtpPolicy = undefined;
      this._ipv6HitCount = undefined;
      this._ipv6Lid = undefined;
      this._ipv6LsnLid = undefined;
      this._ipv6LsnRadiusProfile = undefined;
      this._ipv6RpzType = undefined;
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
      this._ipv6GtpPolicy = value.ipv6GtpPolicy;
      this._ipv6HitCount = value.ipv6HitCount;
      this._ipv6Lid = value.ipv6Lid;
      this._ipv6LsnLid = value.ipv6LsnLid;
      this._ipv6LsnRadiusProfile = value.ipv6LsnRadiusProfile;
      this._ipv6RpzType = value.ipv6RpzType;
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

  // ipv6_gtp_policy - computed: false, optional: true, required: false
  private _ipv6GtpPolicy?: string; 
  public get ipv6GtpPolicy() {
    return this.getStringAttribute('ipv6_gtp_policy');
  }
  public set ipv6GtpPolicy(value: string) {
    this._ipv6GtpPolicy = value;
  }
  public resetIpv6GtpPolicy() {
    this._ipv6GtpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GtpPolicyInput() {
    return this._ipv6GtpPolicy;
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

  // ipv6_rpz_type - computed: false, optional: true, required: false
  private _ipv6RpzType?: number; 
  public get ipv6RpzType() {
    return this.getNumberAttribute('ipv6_rpz_type');
  }
  public set ipv6RpzType(value: number) {
    this._ipv6RpzType = value;
  }
  public resetIpv6RpzType() {
    this._ipv6RpzType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RpzTypeInput() {
    return this._ipv6RpzType;
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

export class DataThunderSlbRpzOperOperIpv6EntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbRpzOperOperIpv6Entries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbRpzOperOperIpv6EntriesOutputReference {
    return new DataThunderSlbRpzOperOperIpv6EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbRpzOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ac_total_entries DataThunderSlbRpzOper#ac_total_entries}
  */
  readonly acTotalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#class_list DataThunderSlbRpzOper#class_list}
  */
  readonly classList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#dns_total_entries DataThunderSlbRpzOper#dns_total_entries}
  */
  readonly dnsTotalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#file_or_string DataThunderSlbRpzOper#file_or_string}
  */
  readonly fileOrString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#filter_entry DataThunderSlbRpzOper#filter_entry}
  */
  readonly filterEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#geo_location_total_entries DataThunderSlbRpzOper#geo_location_total_entries}
  */
  readonly geoLocationTotalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_total_single_ip DataThunderSlbRpzOper#ipv4_total_single_ip}
  */
  readonly ipv4TotalSingleIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_total_subnet DataThunderSlbRpzOper#ipv4_total_subnet}
  */
  readonly ipv4TotalSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_total_single_ip DataThunderSlbRpzOper#ipv6_total_single_ip}
  */
  readonly ipv6TotalSingleIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_total_subnet DataThunderSlbRpzOper#ipv6_total_subnet}
  */
  readonly ipv6TotalSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#rpz_count DataThunderSlbRpzOper#rpz_count}
  */
  readonly rpzCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#rpz_file_size_max DataThunderSlbRpzOper#rpz_file_size_max}
  */
  readonly rpzFileSizeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#rpz_rule_count DataThunderSlbRpzOper#rpz_rule_count}
  */
  readonly rpzRuleCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#string_total_entries DataThunderSlbRpzOper#string_total_entries}
  */
  readonly stringTotalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#type DataThunderSlbRpzOper#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#user_tag DataThunderSlbRpzOper#user_tag}
  */
  readonly userTag?: string;
  /**
  * dns_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#dns_entries DataThunderSlbRpzOper#dns_entries}
  */
  readonly dnsEntries?: DataThunderSlbRpzOperOperDnsEntries[] | cdktf.IResolvable;
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#file_list DataThunderSlbRpzOper#file_list}
  */
  readonly fileList?: DataThunderSlbRpzOperOperFileListStruct[] | cdktf.IResolvable;
  /**
  * ipv4_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv4_entries DataThunderSlbRpzOper#ipv4_entries}
  */
  readonly ipv4Entries?: DataThunderSlbRpzOperOperIpv4Entries[] | cdktf.IResolvable;
  /**
  * ipv6_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#ipv6_entries DataThunderSlbRpzOper#ipv6_entries}
  */
  readonly ipv6Entries?: DataThunderSlbRpzOperOperIpv6Entries[] | cdktf.IResolvable;
}

export function dataThunderSlbRpzOperOperToTerraform(struct?: DataThunderSlbRpzOperOperOutputReference | DataThunderSlbRpzOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_total_entries: cdktf.numberToTerraform(struct!.acTotalEntries),
    class_list: cdktf.stringToTerraform(struct!.classList),
    dns_total_entries: cdktf.numberToTerraform(struct!.dnsTotalEntries),
    file_or_string: cdktf.stringToTerraform(struct!.fileOrString),
    filter_entry: cdktf.stringToTerraform(struct!.filterEntry),
    geo_location_total_entries: cdktf.numberToTerraform(struct!.geoLocationTotalEntries),
    ipv4_total_single_ip: cdktf.numberToTerraform(struct!.ipv4TotalSingleIp),
    ipv4_total_subnet: cdktf.numberToTerraform(struct!.ipv4TotalSubnet),
    ipv6_total_single_ip: cdktf.numberToTerraform(struct!.ipv6TotalSingleIp),
    ipv6_total_subnet: cdktf.numberToTerraform(struct!.ipv6TotalSubnet),
    rpz_count: cdktf.numberToTerraform(struct!.rpzCount),
    rpz_file_size_max: cdktf.numberToTerraform(struct!.rpzFileSizeMax),
    rpz_rule_count: cdktf.numberToTerraform(struct!.rpzRuleCount),
    string_total_entries: cdktf.numberToTerraform(struct!.stringTotalEntries),
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    dns_entries: cdktf.listMapper(dataThunderSlbRpzOperOperDnsEntriesToTerraform, true)(struct!.dnsEntries),
    file_list: cdktf.listMapper(dataThunderSlbRpzOperOperFileListStructToTerraform, true)(struct!.fileList),
    ipv4_entries: cdktf.listMapper(dataThunderSlbRpzOperOperIpv4EntriesToTerraform, true)(struct!.ipv4Entries),
    ipv6_entries: cdktf.listMapper(dataThunderSlbRpzOperOperIpv6EntriesToTerraform, true)(struct!.ipv6Entries),
  }
}


export function dataThunderSlbRpzOperOperToHclTerraform(struct?: DataThunderSlbRpzOperOperOutputReference | DataThunderSlbRpzOperOper): any {
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
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    filter_entry: {
      value: cdktf.stringToHclTerraform(struct!.filterEntry),
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
    rpz_count: {
      value: cdktf.numberToHclTerraform(struct!.rpzCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_file_size_max: {
      value: cdktf.numberToHclTerraform(struct!.rpzFileSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_rule_count: {
      value: cdktf.numberToHclTerraform(struct!.rpzRuleCount),
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
    dns_entries: {
      value: cdktf.listMapperHcl(dataThunderSlbRpzOperOperDnsEntriesToHclTerraform, true)(struct!.dnsEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbRpzOperOperDnsEntriesList",
    },
    file_list: {
      value: cdktf.listMapperHcl(dataThunderSlbRpzOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbRpzOperOperFileListStructList",
    },
    ipv4_entries: {
      value: cdktf.listMapperHcl(dataThunderSlbRpzOperOperIpv4EntriesToHclTerraform, true)(struct!.ipv4Entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbRpzOperOperIpv4EntriesList",
    },
    ipv6_entries: {
      value: cdktf.listMapperHcl(dataThunderSlbRpzOperOperIpv6EntriesToHclTerraform, true)(struct!.ipv6Entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbRpzOperOperIpv6EntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRpzOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbRpzOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acTotalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.acTotalEntries = this._acTotalEntries;
    }
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._dnsTotalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTotalEntries = this._dnsTotalEntries;
    }
    if (this._fileOrString !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileOrString = this._fileOrString;
    }
    if (this._filterEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEntry = this._filterEntry;
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
    if (this._rpzCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzCount = this._rpzCount;
    }
    if (this._rpzFileSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzFileSizeMax = this._rpzFileSizeMax;
    }
    if (this._rpzRuleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzRuleCount = this._rpzRuleCount;
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
    if (this._dnsEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsEntries = this._dnsEntries?.internalValue;
    }
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    if (this._ipv4Entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Entries = this._ipv4Entries?.internalValue;
    }
    if (this._ipv6Entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Entries = this._ipv6Entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRpzOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acTotalEntries = undefined;
      this._classList = undefined;
      this._dnsTotalEntries = undefined;
      this._fileOrString = undefined;
      this._filterEntry = undefined;
      this._geoLocationTotalEntries = undefined;
      this._ipv4TotalSingleIp = undefined;
      this._ipv4TotalSubnet = undefined;
      this._ipv6TotalSingleIp = undefined;
      this._ipv6TotalSubnet = undefined;
      this._rpzCount = undefined;
      this._rpzFileSizeMax = undefined;
      this._rpzRuleCount = undefined;
      this._stringTotalEntries = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._dnsEntries.internalValue = undefined;
      this._fileList.internalValue = undefined;
      this._ipv4Entries.internalValue = undefined;
      this._ipv6Entries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acTotalEntries = value.acTotalEntries;
      this._classList = value.classList;
      this._dnsTotalEntries = value.dnsTotalEntries;
      this._fileOrString = value.fileOrString;
      this._filterEntry = value.filterEntry;
      this._geoLocationTotalEntries = value.geoLocationTotalEntries;
      this._ipv4TotalSingleIp = value.ipv4TotalSingleIp;
      this._ipv4TotalSubnet = value.ipv4TotalSubnet;
      this._ipv6TotalSingleIp = value.ipv6TotalSingleIp;
      this._ipv6TotalSubnet = value.ipv6TotalSubnet;
      this._rpzCount = value.rpzCount;
      this._rpzFileSizeMax = value.rpzFileSizeMax;
      this._rpzRuleCount = value.rpzRuleCount;
      this._stringTotalEntries = value.stringTotalEntries;
      this._type = value.type;
      this._userTag = value.userTag;
      this._dnsEntries.internalValue = value.dnsEntries;
      this._fileList.internalValue = value.fileList;
      this._ipv4Entries.internalValue = value.ipv4Entries;
      this._ipv6Entries.internalValue = value.ipv6Entries;
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

  // filter_entry - computed: false, optional: true, required: false
  private _filterEntry?: string; 
  public get filterEntry() {
    return this.getStringAttribute('filter_entry');
  }
  public set filterEntry(value: string) {
    this._filterEntry = value;
  }
  public resetFilterEntry() {
    this._filterEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEntryInput() {
    return this._filterEntry;
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

  // rpz_count - computed: false, optional: true, required: false
  private _rpzCount?: number; 
  public get rpzCount() {
    return this.getNumberAttribute('rpz_count');
  }
  public set rpzCount(value: number) {
    this._rpzCount = value;
  }
  public resetRpzCount() {
    this._rpzCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzCountInput() {
    return this._rpzCount;
  }

  // rpz_file_size_max - computed: false, optional: true, required: false
  private _rpzFileSizeMax?: number; 
  public get rpzFileSizeMax() {
    return this.getNumberAttribute('rpz_file_size_max');
  }
  public set rpzFileSizeMax(value: number) {
    this._rpzFileSizeMax = value;
  }
  public resetRpzFileSizeMax() {
    this._rpzFileSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzFileSizeMaxInput() {
    return this._rpzFileSizeMax;
  }

  // rpz_rule_count - computed: false, optional: true, required: false
  private _rpzRuleCount?: number; 
  public get rpzRuleCount() {
    return this.getNumberAttribute('rpz_rule_count');
  }
  public set rpzRuleCount(value: number) {
    this._rpzRuleCount = value;
  }
  public resetRpzRuleCount() {
    this._rpzRuleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzRuleCountInput() {
    return this._rpzRuleCount;
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

  // dns_entries - computed: false, optional: true, required: false
  private _dnsEntries = new DataThunderSlbRpzOperOperDnsEntriesList(this, "dns_entries", false);
  public get dnsEntries() {
    return this._dnsEntries;
  }
  public putDnsEntries(value: DataThunderSlbRpzOperOperDnsEntries[] | cdktf.IResolvable) {
    this._dnsEntries.internalValue = value;
  }
  public resetDnsEntries() {
    this._dnsEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsEntriesInput() {
    return this._dnsEntries.internalValue;
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new DataThunderSlbRpzOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: DataThunderSlbRpzOperOperFileListStruct[] | cdktf.IResolvable) {
    this._fileList.internalValue = value;
  }
  public resetFileList() {
    this._fileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileListInput() {
    return this._fileList.internalValue;
  }

  // ipv4_entries - computed: false, optional: true, required: false
  private _ipv4Entries = new DataThunderSlbRpzOperOperIpv4EntriesList(this, "ipv4_entries", false);
  public get ipv4Entries() {
    return this._ipv4Entries;
  }
  public putIpv4Entries(value: DataThunderSlbRpzOperOperIpv4Entries[] | cdktf.IResolvable) {
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
  private _ipv6Entries = new DataThunderSlbRpzOperOperIpv6EntriesList(this, "ipv6_entries", false);
  public get ipv6Entries() {
    return this._ipv6Entries;
  }
  public putIpv6Entries(value: DataThunderSlbRpzOperOperIpv6Entries[] | cdktf.IResolvable) {
    this._ipv6Entries.internalValue = value;
  }
  public resetIpv6Entries() {
    this._ipv6Entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EntriesInput() {
    return this._ipv6Entries.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper thunder_slb_rpz_oper}
*/
export class DataThunderSlbRpzOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_rpz_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbRpzOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbRpzOper to import
  * @param importFromId The id of the existing DataThunderSlbRpzOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbRpzOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_rpz_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_rpz_oper thunder_slb_rpz_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbRpzOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbRpzOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_rpz_oper',
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
  private _oper = new DataThunderSlbRpzOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbRpzOperOper) {
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
      oper: dataThunderSlbRpzOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbRpzOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbRpzOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
