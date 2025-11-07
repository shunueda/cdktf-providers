// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create/Edit a class-list stored as a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#file ClassList#file}
  */
  readonly file?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#id ClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the class list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#name ClassList#name}
  */
  readonly name: string;
  /**
  * 'ac': Make class-list type Aho-Corasick; 'dns': Make class-list type DNS; 'ipv4': Make class-list type IPv4; 'ipv6': Make class-list type IPv6; 'string': Make class-list type String; 'string-case-insensitive': Make class-list type String-case-insensitive. Case insensitive is applied to key string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#type ClassList#type}
  */
  readonly type?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#user_tag ClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#uuid ClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * ac_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#ac_list ClassList#ac_list}
  */
  readonly acList?: ClassListAcListStruct[] | cdktf.IResolvable;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#dns ClassList#dns}
  */
  readonly dns?: ClassListDns[] | cdktf.IResolvable;
  /**
  * geo_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#geo_list ClassList#geo_list}
  */
  readonly geoList?: ClassListGeoListStruct[] | cdktf.IResolvable;
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#ipv4_list ClassList#ipv4_list}
  */
  readonly ipv4List?: ClassListIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#ipv6_list ClassList#ipv6_list}
  */
  readonly ipv6List?: ClassListIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * str_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#str_list ClassList#str_list}
  */
  readonly strList?: ClassListStrListStruct[] | cdktf.IResolvable;
}
export interface ClassListAcListStruct {
  /**
  * Specify key string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#ac_key_string ClassList#ac_key_string}
  */
  readonly acKeyString?: string;
  /**
  * 'contains': String contains another string; 'ends-with': String ends with another string; 'equals': String equals another string; 'starts-with': String starts with another string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#ac_match_type ClassList#ac_match_type}
  */
  readonly acMatchType?: string;
  /**
  * Specify value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#ac_value ClassList#ac_value}
  */
  readonly acValue?: string;
  /**
  * GTP Rate Limit Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#gtp_rate_limit_policy_str ClassList#gtp_rate_limit_policy_str}
  */
  readonly gtpRateLimitPolicyStr?: string;
}

export function classListAcListStructToTerraform(struct?: ClassListAcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_key_string: cdktf.stringToTerraform(struct!.acKeyString),
    ac_match_type: cdktf.stringToTerraform(struct!.acMatchType),
    ac_value: cdktf.stringToTerraform(struct!.acValue),
    gtp_rate_limit_policy_str: cdktf.stringToTerraform(struct!.gtpRateLimitPolicyStr),
  }
}


export function classListAcListStructToHclTerraform(struct?: ClassListAcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_key_string: {
      value: cdktf.stringToHclTerraform(struct!.acKeyString),
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
    ac_value: {
      value: cdktf.stringToHclTerraform(struct!.acValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_rate_limit_policy_str: {
      value: cdktf.stringToHclTerraform(struct!.gtpRateLimitPolicyStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClassListAcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClassListAcListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acKeyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.acKeyString = this._acKeyString;
    }
    if (this._acMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acMatchType = this._acMatchType;
    }
    if (this._acValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acValue = this._acValue;
    }
    if (this._gtpRateLimitPolicyStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitPolicyStr = this._gtpRateLimitPolicyStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClassListAcListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acKeyString = undefined;
      this._acMatchType = undefined;
      this._acValue = undefined;
      this._gtpRateLimitPolicyStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acKeyString = value.acKeyString;
      this._acMatchType = value.acMatchType;
      this._acValue = value.acValue;
      this._gtpRateLimitPolicyStr = value.gtpRateLimitPolicyStr;
    }
  }

  // ac_key_string - computed: false, optional: true, required: false
  private _acKeyString?: string; 
  public get acKeyString() {
    return this.getStringAttribute('ac_key_string');
  }
  public set acKeyString(value: string) {
    this._acKeyString = value;
  }
  public resetAcKeyString() {
    this._acKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acKeyStringInput() {
    return this._acKeyString;
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

  // ac_value - computed: false, optional: true, required: false
  private _acValue?: string; 
  public get acValue() {
    return this.getStringAttribute('ac_value');
  }
  public set acValue(value: string) {
    this._acValue = value;
  }
  public resetAcValue() {
    this._acValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acValueInput() {
    return this._acValue;
  }

  // gtp_rate_limit_policy_str - computed: false, optional: true, required: false
  private _gtpRateLimitPolicyStr?: string; 
  public get gtpRateLimitPolicyStr() {
    return this.getStringAttribute('gtp_rate_limit_policy_str');
  }
  public set gtpRateLimitPolicyStr(value: string) {
    this._gtpRateLimitPolicyStr = value;
  }
  public resetGtpRateLimitPolicyStr() {
    this._gtpRateLimitPolicyStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitPolicyStrInput() {
    return this._gtpRateLimitPolicyStr;
  }
}

export class ClassListAcListStructList extends cdktf.ComplexList {
  public internalValue? : ClassListAcListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClassListAcListStructOutputReference {
    return new ClassListAcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClassListDns {
  /**
  * Use global Limit ID (Specify global LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#dns_glid ClassList#dns_glid}
  */
  readonly dnsGlid?: string;
  /**
  * Use global Limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#dns_glid_shared ClassList#dns_glid_shared}
  */
  readonly dnsGlidShared?: string;
  /**
  * Use Limit ID defined in template (Specify LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#dns_lid ClassList#dns_lid}
  */
  readonly dnsLid?: number;
  /**
  * Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#dns_match_string ClassList#dns_match_string}
  */
  readonly dnsMatchString?: string;
  /**
  * 'contains': Domain contains another string; 'ends-with': Domain ends with another string; 'starts-with': Domain starts-with another string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#dns_match_type ClassList#dns_match_type}
  */
  readonly dnsMatchType?: string;
  /**
  * Reference a glid from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#shared_partition_dns_glid ClassList#shared_partition_dns_glid}
  */
  readonly sharedPartitionDnsGlid?: number;
}

export function classListDnsToTerraform(struct?: ClassListDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_glid: cdktf.stringToTerraform(struct!.dnsGlid),
    dns_glid_shared: cdktf.stringToTerraform(struct!.dnsGlidShared),
    dns_lid: cdktf.numberToTerraform(struct!.dnsLid),
    dns_match_string: cdktf.stringToTerraform(struct!.dnsMatchString),
    dns_match_type: cdktf.stringToTerraform(struct!.dnsMatchType),
    shared_partition_dns_glid: cdktf.numberToTerraform(struct!.sharedPartitionDnsGlid),
  }
}


export function classListDnsToHclTerraform(struct?: ClassListDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_glid: {
      value: cdktf.stringToHclTerraform(struct!.dnsGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_glid_shared: {
      value: cdktf.stringToHclTerraform(struct!.dnsGlidShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    shared_partition_dns_glid: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionDnsGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClassListDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClassListDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsGlid = this._dnsGlid;
    }
    if (this._dnsGlidShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsGlidShared = this._dnsGlidShared;
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
    if (this._sharedPartitionDnsGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionDnsGlid = this._sharedPartitionDnsGlid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClassListDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsGlid = undefined;
      this._dnsGlidShared = undefined;
      this._dnsLid = undefined;
      this._dnsMatchString = undefined;
      this._dnsMatchType = undefined;
      this._sharedPartitionDnsGlid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsGlid = value.dnsGlid;
      this._dnsGlidShared = value.dnsGlidShared;
      this._dnsLid = value.dnsLid;
      this._dnsMatchString = value.dnsMatchString;
      this._dnsMatchType = value.dnsMatchType;
      this._sharedPartitionDnsGlid = value.sharedPartitionDnsGlid;
    }
  }

  // dns_glid - computed: false, optional: true, required: false
  private _dnsGlid?: string; 
  public get dnsGlid() {
    return this.getStringAttribute('dns_glid');
  }
  public set dnsGlid(value: string) {
    this._dnsGlid = value;
  }
  public resetDnsGlid() {
    this._dnsGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsGlidInput() {
    return this._dnsGlid;
  }

  // dns_glid_shared - computed: false, optional: true, required: false
  private _dnsGlidShared?: string; 
  public get dnsGlidShared() {
    return this.getStringAttribute('dns_glid_shared');
  }
  public set dnsGlidShared(value: string) {
    this._dnsGlidShared = value;
  }
  public resetDnsGlidShared() {
    this._dnsGlidShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsGlidSharedInput() {
    return this._dnsGlidShared;
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

  // shared_partition_dns_glid - computed: false, optional: true, required: false
  private _sharedPartitionDnsGlid?: number; 
  public get sharedPartitionDnsGlid() {
    return this.getNumberAttribute('shared_partition_dns_glid');
  }
  public set sharedPartitionDnsGlid(value: number) {
    this._sharedPartitionDnsGlid = value;
  }
  public resetSharedPartitionDnsGlid() {
    this._sharedPartitionDnsGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDnsGlidInput() {
    return this._sharedPartitionDnsGlid;
  }
}

export class ClassListDnsList extends cdktf.ComplexList {
  public internalValue? : ClassListDns[] | cdktf.IResolvable

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
  public get(index: number): ClassListDnsOutputReference {
    return new ClassListDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClassListGeoListStruct {
  /**
  * Specify geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#geo_location ClassList#geo_location}
  */
  readonly geoLocation?: string;
  /**
  * Specify IPv6 geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#geo_location_ipv6 ClassList#geo_location_ipv6}
  */
  readonly geoLocationIpv6?: string;
}

export function classListGeoListStructToTerraform(struct?: ClassListGeoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location: cdktf.stringToTerraform(struct!.geoLocation),
    geo_location_ipv6: cdktf.stringToTerraform(struct!.geoLocationIpv6),
  }
}


export function classListGeoListStructToHclTerraform(struct?: ClassListGeoListStruct | cdktf.IResolvable): any {
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
    geo_location_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClassListGeoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClassListGeoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocation = this._geoLocation;
    }
    if (this._geoLocationIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationIpv6 = this._geoLocationIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClassListGeoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoLocation = undefined;
      this._geoLocationIpv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoLocation = value.geoLocation;
      this._geoLocationIpv6 = value.geoLocationIpv6;
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

  // geo_location_ipv6 - computed: false, optional: true, required: false
  private _geoLocationIpv6?: string; 
  public get geoLocationIpv6() {
    return this.getStringAttribute('geo_location_ipv6');
  }
  public set geoLocationIpv6(value: string) {
    this._geoLocationIpv6 = value;
  }
  public resetGeoLocationIpv6() {
    this._geoLocationIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationIpv6Input() {
    return this._geoLocationIpv6;
  }
}

export class ClassListGeoListStructList extends cdktf.ComplexList {
  public internalValue? : ClassListGeoListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClassListGeoListStructOutputReference {
    return new ClassListGeoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClassListIpv4ListStruct {
  /**
  * Specify age in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#age ClassList#age}
  */
  readonly age?: number;
  /**
  * Use global Limit ID (Specify global LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#glid ClassList#glid}
  */
  readonly glid?: string;
  /**
  * Use global Limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#glid_shared ClassList#glid_shared}
  */
  readonly glidShared?: string;
  /**
  * GTP Rate Limit Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#gtp_rate_limit_policy_v4 ClassList#gtp_rate_limit_policy_v4}
  */
  readonly gtpRateLimitPolicyV4?: string;
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#ipv4addr ClassList#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Use Limit ID defined in template (Specify LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#lid ClassList#lid}
  */
  readonly lid?: number;
  /**
  * LSN Limit ID (LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#lsn_lid ClassList#lsn_lid}
  */
  readonly lsnLid?: number;
  /**
  * LSN RADIUS Profile Index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#lsn_radius_profile ClassList#lsn_radius_profile}
  */
  readonly lsnRadiusProfile?: number;
  /**
  * Reference a glid from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#shared_partition_glid ClassList#shared_partition_glid}
  */
  readonly sharedPartitionGlid?: number;
}

export function classListIpv4ListStructToTerraform(struct?: ClassListIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_shared: cdktf.stringToTerraform(struct!.glidShared),
    gtp_rate_limit_policy_v4: cdktf.stringToTerraform(struct!.gtpRateLimitPolicyV4),
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    lid: cdktf.numberToTerraform(struct!.lid),
    lsn_lid: cdktf.numberToTerraform(struct!.lsnLid),
    lsn_radius_profile: cdktf.numberToTerraform(struct!.lsnRadiusProfile),
    shared_partition_glid: cdktf.numberToTerraform(struct!.sharedPartitionGlid),
  }
}


export function classListIpv4ListStructToHclTerraform(struct?: ClassListIpv4ListStruct | cdktf.IResolvable): any {
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
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_shared: {
      value: cdktf.stringToHclTerraform(struct!.glidShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_rate_limit_policy_v4: {
      value: cdktf.stringToHclTerraform(struct!.gtpRateLimitPolicyV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lid: {
      value: cdktf.numberToHclTerraform(struct!.lid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.lsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_radius_profile: {
      value: cdktf.numberToHclTerraform(struct!.lsnRadiusProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_glid: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClassListIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClassListIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidShared = this._glidShared;
    }
    if (this._gtpRateLimitPolicyV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitPolicyV4 = this._gtpRateLimitPolicyV4;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._lid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lid = this._lid;
    }
    if (this._lsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnLid = this._lsnLid;
    }
    if (this._lsnRadiusProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnRadiusProfile = this._lsnRadiusProfile;
    }
    if (this._sharedPartitionGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionGlid = this._sharedPartitionGlid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClassListIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._glid = undefined;
      this._glidShared = undefined;
      this._gtpRateLimitPolicyV4 = undefined;
      this._ipv4Addr = undefined;
      this._lid = undefined;
      this._lsnLid = undefined;
      this._lsnRadiusProfile = undefined;
      this._sharedPartitionGlid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._glid = value.glid;
      this._glidShared = value.glidShared;
      this._gtpRateLimitPolicyV4 = value.gtpRateLimitPolicyV4;
      this._ipv4Addr = value.ipv4Addr;
      this._lid = value.lid;
      this._lsnLid = value.lsnLid;
      this._lsnRadiusProfile = value.lsnRadiusProfile;
      this._sharedPartitionGlid = value.sharedPartitionGlid;
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

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_shared - computed: false, optional: true, required: false
  private _glidShared?: string; 
  public get glidShared() {
    return this.getStringAttribute('glid_shared');
  }
  public set glidShared(value: string) {
    this._glidShared = value;
  }
  public resetGlidShared() {
    this._glidShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidSharedInput() {
    return this._glidShared;
  }

  // gtp_rate_limit_policy_v4 - computed: false, optional: true, required: false
  private _gtpRateLimitPolicyV4?: string; 
  public get gtpRateLimitPolicyV4() {
    return this.getStringAttribute('gtp_rate_limit_policy_v4');
  }
  public set gtpRateLimitPolicyV4(value: string) {
    this._gtpRateLimitPolicyV4 = value;
  }
  public resetGtpRateLimitPolicyV4() {
    this._gtpRateLimitPolicyV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitPolicyV4Input() {
    return this._gtpRateLimitPolicyV4;
  }

  // ipv4addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
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

  // lid - computed: false, optional: true, required: false
  private _lid?: number; 
  public get lid() {
    return this.getNumberAttribute('lid');
  }
  public set lid(value: number) {
    this._lid = value;
  }
  public resetLid() {
    this._lid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidInput() {
    return this._lid;
  }

  // lsn_lid - computed: false, optional: true, required: false
  private _lsnLid?: number; 
  public get lsnLid() {
    return this.getNumberAttribute('lsn_lid');
  }
  public set lsnLid(value: number) {
    this._lsnLid = value;
  }
  public resetLsnLid() {
    this._lsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnLidInput() {
    return this._lsnLid;
  }

  // lsn_radius_profile - computed: false, optional: true, required: false
  private _lsnRadiusProfile?: number; 
  public get lsnRadiusProfile() {
    return this.getNumberAttribute('lsn_radius_profile');
  }
  public set lsnRadiusProfile(value: number) {
    this._lsnRadiusProfile = value;
  }
  public resetLsnRadiusProfile() {
    this._lsnRadiusProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnRadiusProfileInput() {
    return this._lsnRadiusProfile;
  }

  // shared_partition_glid - computed: false, optional: true, required: false
  private _sharedPartitionGlid?: number; 
  public get sharedPartitionGlid() {
    return this.getNumberAttribute('shared_partition_glid');
  }
  public set sharedPartitionGlid(value: number) {
    this._sharedPartitionGlid = value;
  }
  public resetSharedPartitionGlid() {
    this._sharedPartitionGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionGlidInput() {
    return this._sharedPartitionGlid;
  }
}

export class ClassListIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : ClassListIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClassListIpv4ListStructOutputReference {
    return new ClassListIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClassListIpv6ListStruct {
  /**
  * GTP Rate Limit Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#gtp_rate_limit_policy_v6 ClassList#gtp_rate_limit_policy_v6}
  */
  readonly gtpRateLimitPolicyV6?: string;
  /**
  * Specify IPv6 host or subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#ipv6_addr ClassList#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Reference a glid from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#shared_partition_v6_glid ClassList#shared_partition_v6_glid}
  */
  readonly sharedPartitionV6Glid?: number;
  /**
  * Specify age in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#v6_age ClassList#v6_age}
  */
  readonly v6Age?: number;
  /**
  * Use global Limit ID (Specify global LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#v6_glid ClassList#v6_glid}
  */
  readonly v6Glid?: string;
  /**
  * Use global Limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#v6_glid_shared ClassList#v6_glid_shared}
  */
  readonly v6GlidShared?: string;
  /**
  * Use Limit ID defined in template (Specify LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#v6_lid ClassList#v6_lid}
  */
  readonly v6Lid?: number;
  /**
  * LSN Limit ID (LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#v6_lsn_lid ClassList#v6_lsn_lid}
  */
  readonly v6LsnLid?: number;
  /**
  * LSN RADIUS Profile Index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#v6_lsn_radius_profile ClassList#v6_lsn_radius_profile}
  */
  readonly v6LsnRadiusProfile?: number;
}

export function classListIpv6ListStructToTerraform(struct?: ClassListIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gtp_rate_limit_policy_v6: cdktf.stringToTerraform(struct!.gtpRateLimitPolicyV6),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    shared_partition_v6_glid: cdktf.numberToTerraform(struct!.sharedPartitionV6Glid),
    v6_age: cdktf.numberToTerraform(struct!.v6Age),
    v6_glid: cdktf.stringToTerraform(struct!.v6Glid),
    v6_glid_shared: cdktf.stringToTerraform(struct!.v6GlidShared),
    v6_lid: cdktf.numberToTerraform(struct!.v6Lid),
    v6_lsn_lid: cdktf.numberToTerraform(struct!.v6LsnLid),
    v6_lsn_radius_profile: cdktf.numberToTerraform(struct!.v6LsnRadiusProfile),
  }
}


export function classListIpv6ListStructToHclTerraform(struct?: ClassListIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gtp_rate_limit_policy_v6: {
      value: cdktf.stringToHclTerraform(struct!.gtpRateLimitPolicyV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_partition_v6_glid: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionV6Glid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_age: {
      value: cdktf.numberToHclTerraform(struct!.v6Age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_glid: {
      value: cdktf.stringToHclTerraform(struct!.v6Glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_glid_shared: {
      value: cdktf.stringToHclTerraform(struct!.v6GlidShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_lid: {
      value: cdktf.numberToHclTerraform(struct!.v6Lid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.v6LsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_lsn_radius_profile: {
      value: cdktf.numberToHclTerraform(struct!.v6LsnRadiusProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClassListIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClassListIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gtpRateLimitPolicyV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitPolicyV6 = this._gtpRateLimitPolicyV6;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._sharedPartitionV6Glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionV6Glid = this._sharedPartitionV6Glid;
    }
    if (this._v6Age !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Age = this._v6Age;
    }
    if (this._v6Glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Glid = this._v6Glid;
    }
    if (this._v6GlidShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6GlidShared = this._v6GlidShared;
    }
    if (this._v6Lid !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Lid = this._v6Lid;
    }
    if (this._v6LsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6LsnLid = this._v6LsnLid;
    }
    if (this._v6LsnRadiusProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6LsnRadiusProfile = this._v6LsnRadiusProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClassListIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gtpRateLimitPolicyV6 = undefined;
      this._ipv6Addr = undefined;
      this._sharedPartitionV6Glid = undefined;
      this._v6Age = undefined;
      this._v6Glid = undefined;
      this._v6GlidShared = undefined;
      this._v6Lid = undefined;
      this._v6LsnLid = undefined;
      this._v6LsnRadiusProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gtpRateLimitPolicyV6 = value.gtpRateLimitPolicyV6;
      this._ipv6Addr = value.ipv6Addr;
      this._sharedPartitionV6Glid = value.sharedPartitionV6Glid;
      this._v6Age = value.v6Age;
      this._v6Glid = value.v6Glid;
      this._v6GlidShared = value.v6GlidShared;
      this._v6Lid = value.v6Lid;
      this._v6LsnLid = value.v6LsnLid;
      this._v6LsnRadiusProfile = value.v6LsnRadiusProfile;
    }
  }

  // gtp_rate_limit_policy_v6 - computed: false, optional: true, required: false
  private _gtpRateLimitPolicyV6?: string; 
  public get gtpRateLimitPolicyV6() {
    return this.getStringAttribute('gtp_rate_limit_policy_v6');
  }
  public set gtpRateLimitPolicyV6(value: string) {
    this._gtpRateLimitPolicyV6 = value;
  }
  public resetGtpRateLimitPolicyV6() {
    this._gtpRateLimitPolicyV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitPolicyV6Input() {
    return this._gtpRateLimitPolicyV6;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
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

  // shared_partition_v6_glid - computed: false, optional: true, required: false
  private _sharedPartitionV6Glid?: number; 
  public get sharedPartitionV6Glid() {
    return this.getNumberAttribute('shared_partition_v6_glid');
  }
  public set sharedPartitionV6Glid(value: number) {
    this._sharedPartitionV6Glid = value;
  }
  public resetSharedPartitionV6Glid() {
    this._sharedPartitionV6Glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionV6GlidInput() {
    return this._sharedPartitionV6Glid;
  }

  // v6_age - computed: false, optional: true, required: false
  private _v6Age?: number; 
  public get v6Age() {
    return this.getNumberAttribute('v6_age');
  }
  public set v6Age(value: number) {
    this._v6Age = value;
  }
  public resetV6Age() {
    this._v6Age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AgeInput() {
    return this._v6Age;
  }

  // v6_glid - computed: false, optional: true, required: false
  private _v6Glid?: string; 
  public get v6Glid() {
    return this.getStringAttribute('v6_glid');
  }
  public set v6Glid(value: string) {
    this._v6Glid = value;
  }
  public resetV6Glid() {
    this._v6Glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6GlidInput() {
    return this._v6Glid;
  }

  // v6_glid_shared - computed: false, optional: true, required: false
  private _v6GlidShared?: string; 
  public get v6GlidShared() {
    return this.getStringAttribute('v6_glid_shared');
  }
  public set v6GlidShared(value: string) {
    this._v6GlidShared = value;
  }
  public resetV6GlidShared() {
    this._v6GlidShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6GlidSharedInput() {
    return this._v6GlidShared;
  }

  // v6_lid - computed: false, optional: true, required: false
  private _v6Lid?: number; 
  public get v6Lid() {
    return this.getNumberAttribute('v6_lid');
  }
  public set v6Lid(value: number) {
    this._v6Lid = value;
  }
  public resetV6Lid() {
    this._v6Lid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6LidInput() {
    return this._v6Lid;
  }

  // v6_lsn_lid - computed: false, optional: true, required: false
  private _v6LsnLid?: number; 
  public get v6LsnLid() {
    return this.getNumberAttribute('v6_lsn_lid');
  }
  public set v6LsnLid(value: number) {
    this._v6LsnLid = value;
  }
  public resetV6LsnLid() {
    this._v6LsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6LsnLidInput() {
    return this._v6LsnLid;
  }

  // v6_lsn_radius_profile - computed: false, optional: true, required: false
  private _v6LsnRadiusProfile?: number; 
  public get v6LsnRadiusProfile() {
    return this.getNumberAttribute('v6_lsn_radius_profile');
  }
  public set v6LsnRadiusProfile(value: number) {
    this._v6LsnRadiusProfile = value;
  }
  public resetV6LsnRadiusProfile() {
    this._v6LsnRadiusProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6LsnRadiusProfileInput() {
    return this._v6LsnRadiusProfile;
  }
}

export class ClassListIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : ClassListIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClassListIpv6ListStructOutputReference {
    return new ClassListIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClassListStrListStruct {
  /**
  * Reference a glid from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#shared_partition_str_glid ClassList#shared_partition_str_glid}
  */
  readonly sharedPartitionStrGlid?: number;
  /**
  * Specify key string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#str ClassList#str}
  */
  readonly str?: string;
  /**
  * Global LID index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#str_glid ClassList#str_glid}
  */
  readonly strGlid?: string;
  /**
  * Use global Limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#str_glid_dummy ClassList#str_glid_dummy}
  */
  readonly strGlidDummy?: number;
  /**
  * Use global Limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#str_glid_shared ClassList#str_glid_shared}
  */
  readonly strGlidShared?: string;
  /**
  * LID index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#str_lid ClassList#str_lid}
  */
  readonly strLid?: number;
  /**
  * Use Limit ID defined in template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#str_lid_dummy ClassList#str_lid_dummy}
  */
  readonly strLidDummy?: number;
  /**
  * Specify value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#value_str ClassList#value_str}
  */
  readonly valueStr?: string;
}

export function classListStrListStructToTerraform(struct?: ClassListStrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shared_partition_str_glid: cdktf.numberToTerraform(struct!.sharedPartitionStrGlid),
    str: cdktf.stringToTerraform(struct!.str),
    str_glid: cdktf.stringToTerraform(struct!.strGlid),
    str_glid_dummy: cdktf.numberToTerraform(struct!.strGlidDummy),
    str_glid_shared: cdktf.stringToTerraform(struct!.strGlidShared),
    str_lid: cdktf.numberToTerraform(struct!.strLid),
    str_lid_dummy: cdktf.numberToTerraform(struct!.strLidDummy),
    value_str: cdktf.stringToTerraform(struct!.valueStr),
  }
}


export function classListStrListStructToHclTerraform(struct?: ClassListStrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shared_partition_str_glid: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionStrGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_glid: {
      value: cdktf.stringToHclTerraform(struct!.strGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_glid_dummy: {
      value: cdktf.numberToHclTerraform(struct!.strGlidDummy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_glid_shared: {
      value: cdktf.stringToHclTerraform(struct!.strGlidShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_lid: {
      value: cdktf.numberToHclTerraform(struct!.strLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_lid_dummy: {
      value: cdktf.numberToHclTerraform(struct!.strLidDummy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value_str: {
      value: cdktf.stringToHclTerraform(struct!.valueStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClassListStrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClassListStrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sharedPartitionStrGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionStrGlid = this._sharedPartitionStrGlid;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    if (this._strGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.strGlid = this._strGlid;
    }
    if (this._strGlidDummy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strGlidDummy = this._strGlidDummy;
    }
    if (this._strGlidShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.strGlidShared = this._strGlidShared;
    }
    if (this._strLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.strLid = this._strLid;
    }
    if (this._strLidDummy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strLidDummy = this._strLidDummy;
    }
    if (this._valueStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueStr = this._valueStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClassListStrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sharedPartitionStrGlid = undefined;
      this._str = undefined;
      this._strGlid = undefined;
      this._strGlidDummy = undefined;
      this._strGlidShared = undefined;
      this._strLid = undefined;
      this._strLidDummy = undefined;
      this._valueStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sharedPartitionStrGlid = value.sharedPartitionStrGlid;
      this._str = value.str;
      this._strGlid = value.strGlid;
      this._strGlidDummy = value.strGlidDummy;
      this._strGlidShared = value.strGlidShared;
      this._strLid = value.strLid;
      this._strLidDummy = value.strLidDummy;
      this._valueStr = value.valueStr;
    }
  }

  // shared_partition_str_glid - computed: false, optional: true, required: false
  private _sharedPartitionStrGlid?: number; 
  public get sharedPartitionStrGlid() {
    return this.getNumberAttribute('shared_partition_str_glid');
  }
  public set sharedPartitionStrGlid(value: number) {
    this._sharedPartitionStrGlid = value;
  }
  public resetSharedPartitionStrGlid() {
    this._sharedPartitionStrGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionStrGlidInput() {
    return this._sharedPartitionStrGlid;
  }

  // str - computed: false, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }

  // str_glid - computed: false, optional: true, required: false
  private _strGlid?: string; 
  public get strGlid() {
    return this.getStringAttribute('str_glid');
  }
  public set strGlid(value: string) {
    this._strGlid = value;
  }
  public resetStrGlid() {
    this._strGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strGlidInput() {
    return this._strGlid;
  }

  // str_glid_dummy - computed: false, optional: true, required: false
  private _strGlidDummy?: number; 
  public get strGlidDummy() {
    return this.getNumberAttribute('str_glid_dummy');
  }
  public set strGlidDummy(value: number) {
    this._strGlidDummy = value;
  }
  public resetStrGlidDummy() {
    this._strGlidDummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strGlidDummyInput() {
    return this._strGlidDummy;
  }

  // str_glid_shared - computed: false, optional: true, required: false
  private _strGlidShared?: string; 
  public get strGlidShared() {
    return this.getStringAttribute('str_glid_shared');
  }
  public set strGlidShared(value: string) {
    this._strGlidShared = value;
  }
  public resetStrGlidShared() {
    this._strGlidShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strGlidSharedInput() {
    return this._strGlidShared;
  }

  // str_lid - computed: false, optional: true, required: false
  private _strLid?: number; 
  public get strLid() {
    return this.getNumberAttribute('str_lid');
  }
  public set strLid(value: number) {
    this._strLid = value;
  }
  public resetStrLid() {
    this._strLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strLidInput() {
    return this._strLid;
  }

  // str_lid_dummy - computed: false, optional: true, required: false
  private _strLidDummy?: number; 
  public get strLidDummy() {
    return this.getNumberAttribute('str_lid_dummy');
  }
  public set strLidDummy(value: number) {
    this._strLidDummy = value;
  }
  public resetStrLidDummy() {
    this._strLidDummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strLidDummyInput() {
    return this._strLidDummy;
  }

  // value_str - computed: false, optional: true, required: false
  private _valueStr?: string; 
  public get valueStr() {
    return this.getStringAttribute('value_str');
  }
  public set valueStr(value: string) {
    this._valueStr = value;
  }
  public resetValueStr() {
    this._valueStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStrInput() {
    return this._valueStr;
  }
}

export class ClassListStrListStructList extends cdktf.ComplexList {
  public internalValue? : ClassListStrListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClassListStrListStructOutputReference {
    return new ClassListStrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list thunder_class_list}
*/
export class ClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClassList to import
  * @param importFromId The id of the existing ClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/class_list thunder_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClassListConfig
  */
  public constructor(scope: Construct, id: string, config: ClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_class_list',
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
    this._file = config.file;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._acList.internalValue = config.acList;
    this._dns.internalValue = config.dns;
    this._geoList.internalValue = config.geoList;
    this._ipv4List.internalValue = config.ipv4List;
    this._ipv6List.internalValue = config.ipv6List;
    this._strList.internalValue = config.strList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file - computed: false, optional: true, required: false
  private _file?: number; 
  public get file() {
    return this.getNumberAttribute('file');
  }
  public set file(value: number) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // ac_list - computed: false, optional: true, required: false
  private _acList = new ClassListAcListStructList(this, "ac_list", false);
  public get acList() {
    return this._acList;
  }
  public putAcList(value: ClassListAcListStruct[] | cdktf.IResolvable) {
    this._acList.internalValue = value;
  }
  public resetAcList() {
    this._acList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acListInput() {
    return this._acList.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new ClassListDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }
  public putDns(value: ClassListDns[] | cdktf.IResolvable) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // geo_list - computed: false, optional: true, required: false
  private _geoList = new ClassListGeoListStructList(this, "geo_list", false);
  public get geoList() {
    return this._geoList;
  }
  public putGeoList(value: ClassListGeoListStruct[] | cdktf.IResolvable) {
    this._geoList.internalValue = value;
  }
  public resetGeoList() {
    this._geoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoListInput() {
    return this._geoList.internalValue;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List = new ClassListIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: ClassListIpv4ListStruct[] | cdktf.IResolvable) {
    this._ipv4List.internalValue = value;
  }
  public resetIpv4List() {
    this._ipv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new ClassListIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: ClassListIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }

  // str_list - computed: false, optional: true, required: false
  private _strList = new ClassListStrListStructList(this, "str_list", false);
  public get strList() {
    return this._strList;
  }
  public putStrList(value: ClassListStrListStruct[] | cdktf.IResolvable) {
    this._strList.internalValue = value;
  }
  public resetStrList() {
    this._strList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strListInput() {
    return this._strList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file: cdktf.numberToTerraform(this._file),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      ac_list: cdktf.listMapper(classListAcListStructToTerraform, true)(this._acList.internalValue),
      dns: cdktf.listMapper(classListDnsToTerraform, true)(this._dns.internalValue),
      geo_list: cdktf.listMapper(classListGeoListStructToTerraform, true)(this._geoList.internalValue),
      ipv4_list: cdktf.listMapper(classListIpv4ListStructToTerraform, true)(this._ipv4List.internalValue),
      ipv6_list: cdktf.listMapper(classListIpv6ListStructToTerraform, true)(this._ipv6List.internalValue),
      str_list: cdktf.listMapper(classListStrListStructToTerraform, true)(this._strList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file: {
        value: cdktf.numberToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      ac_list: {
        value: cdktf.listMapperHcl(classListAcListStructToHclTerraform, true)(this._acList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClassListAcListStructList",
      },
      dns: {
        value: cdktf.listMapperHcl(classListDnsToHclTerraform, true)(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClassListDnsList",
      },
      geo_list: {
        value: cdktf.listMapperHcl(classListGeoListStructToHclTerraform, true)(this._geoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClassListGeoListStructList",
      },
      ipv4_list: {
        value: cdktf.listMapperHcl(classListIpv4ListStructToHclTerraform, true)(this._ipv4List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClassListIpv4ListStructList",
      },
      ipv6_list: {
        value: cdktf.listMapperHcl(classListIpv6ListStructToHclTerraform, true)(this._ipv6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClassListIpv6ListStructList",
      },
      str_list: {
        value: cdktf.listMapperHcl(classListStrListStructToHclTerraform, true)(this._strList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClassListStrListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
