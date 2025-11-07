// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsfilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#block_action DnsfilterProfile#block_action}
  */
  readonly blockAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#block_botnet DnsfilterProfile#block_botnet}
  */
  readonly blockBotnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#comment DnsfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#dynamic_sort_subtable DnsfilterProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#get_all_tables DnsfilterProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#id DnsfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#log_all_domain DnsfilterProfile#log_all_domain}
  */
  readonly logAllDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#name DnsfilterProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#redirect_portal DnsfilterProfile#redirect_portal}
  */
  readonly redirectPortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#redirect_portal6 DnsfilterProfile#redirect_portal6}
  */
  readonly redirectPortal6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#safe_search DnsfilterProfile#safe_search}
  */
  readonly safeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#sdns_domain_log DnsfilterProfile#sdns_domain_log}
  */
  readonly sdnsDomainLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#sdns_ftgd_err_log DnsfilterProfile#sdns_ftgd_err_log}
  */
  readonly sdnsFtgdErrLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#strip_ech DnsfilterProfile#strip_ech}
  */
  readonly stripEch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#vdomparam DnsfilterProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#youtube_restrict DnsfilterProfile#youtube_restrict}
  */
  readonly youtubeRestrict?: string;
  /**
  * dns_translation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#dns_translation DnsfilterProfile#dns_translation}
  */
  readonly dnsTranslation?: DnsfilterProfileDnsTranslation[] | cdktf.IResolvable;
  /**
  * domain_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#domain_filter DnsfilterProfile#domain_filter}
  */
  readonly domainFilter?: DnsfilterProfileDomainFilter;
  /**
  * external_ip_blocklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#external_ip_blocklist DnsfilterProfile#external_ip_blocklist}
  */
  readonly externalIpBlocklist?: DnsfilterProfileExternalIpBlocklistStruct[] | cdktf.IResolvable;
  /**
  * ftgd_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#ftgd_dns DnsfilterProfile#ftgd_dns}
  */
  readonly ftgdDns?: DnsfilterProfileFtgdDns;
  /**
  * transparent_dns_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#transparent_dns_database DnsfilterProfile#transparent_dns_database}
  */
  readonly transparentDnsDatabase?: DnsfilterProfileTransparentDnsDatabase[] | cdktf.IResolvable;
}
export interface DnsfilterProfileDnsTranslation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#addr_type DnsfilterProfile#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#dst DnsfilterProfile#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#dst6 DnsfilterProfile#dst6}
  */
  readonly dst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#id DnsfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#netmask DnsfilterProfile#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#prefix DnsfilterProfile#prefix}
  */
  readonly prefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#src DnsfilterProfile#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#src6 DnsfilterProfile#src6}
  */
  readonly src6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#status DnsfilterProfile#status}
  */
  readonly status?: string;
}

export function dnsfilterProfileDnsTranslationToTerraform(struct?: DnsfilterProfileDnsTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_type: cdktf.stringToTerraform(struct!.addrType),
    dst: cdktf.stringToTerraform(struct!.dst),
    dst6: cdktf.stringToTerraform(struct!.dst6),
    id: cdktf.numberToTerraform(struct!.id),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    prefix: cdktf.numberToTerraform(struct!.prefix),
    src: cdktf.stringToTerraform(struct!.src),
    src6: cdktf.stringToTerraform(struct!.src6),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dnsfilterProfileDnsTranslationToHclTerraform(struct?: DnsfilterProfileDnsTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_type: {
      value: cdktf.stringToHclTerraform(struct!.addrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst: {
      value: cdktf.stringToHclTerraform(struct!.dst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst6: {
      value: cdktf.stringToHclTerraform(struct!.dst6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src: {
      value: cdktf.stringToHclTerraform(struct!.src),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src6: {
      value: cdktf.stringToHclTerraform(struct!.src6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsfilterProfileDnsTranslationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsfilterProfileDnsTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrType = this._addrType;
    }
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._dst6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst6 = this._dst6;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._src !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src;
    }
    if (this._src6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.src6 = this._src6;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsfilterProfileDnsTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrType = undefined;
      this._dst = undefined;
      this._dst6 = undefined;
      this._id = undefined;
      this._netmask = undefined;
      this._prefix = undefined;
      this._src = undefined;
      this._src6 = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrType = value.addrType;
      this._dst = value.dst;
      this._dst6 = value.dst6;
      this._id = value.id;
      this._netmask = value.netmask;
      this._prefix = value.prefix;
      this._src = value.src;
      this._src6 = value.src6;
      this._status = value.status;
    }
  }

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst6 - computed: true, optional: true, required: false
  private _dst6?: string; 
  public get dst6() {
    return this.getStringAttribute('dst6');
  }
  public set dst6(value: string) {
    this._dst6 = value;
  }
  public resetDst6() {
    this._dst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst6Input() {
    return this._dst6;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // src6 - computed: true, optional: true, required: false
  private _src6?: string; 
  public get src6() {
    return this.getStringAttribute('src6');
  }
  public set src6(value: string) {
    this._src6 = value;
  }
  public resetSrc6() {
    this._src6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get src6Input() {
    return this._src6;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DnsfilterProfileDnsTranslationList extends cdktf.ComplexList {
  public internalValue? : DnsfilterProfileDnsTranslation[] | cdktf.IResolvable

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
  public get(index: number): DnsfilterProfileDnsTranslationOutputReference {
    return new DnsfilterProfileDnsTranslationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsfilterProfileDomainFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#domain_filter_table DnsfilterProfile#domain_filter_table}
  */
  readonly domainFilterTable?: number;
}

export function dnsfilterProfileDomainFilterToTerraform(struct?: DnsfilterProfileDomainFilterOutputReference | DnsfilterProfileDomainFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_filter_table: cdktf.numberToTerraform(struct!.domainFilterTable),
  }
}


export function dnsfilterProfileDomainFilterToHclTerraform(struct?: DnsfilterProfileDomainFilterOutputReference | DnsfilterProfileDomainFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_filter_table: {
      value: cdktf.numberToHclTerraform(struct!.domainFilterTable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsfilterProfileDomainFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsfilterProfileDomainFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainFilterTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainFilterTable = this._domainFilterTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsfilterProfileDomainFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainFilterTable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainFilterTable = value.domainFilterTable;
    }
  }

  // domain_filter_table - computed: false, optional: true, required: false
  private _domainFilterTable?: number; 
  public get domainFilterTable() {
    return this.getNumberAttribute('domain_filter_table');
  }
  public set domainFilterTable(value: number) {
    this._domainFilterTable = value;
  }
  public resetDomainFilterTable() {
    this._domainFilterTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFilterTableInput() {
    return this._domainFilterTable;
  }
}
export interface DnsfilterProfileExternalIpBlocklistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#name DnsfilterProfile#name}
  */
  readonly name?: string;
}

export function dnsfilterProfileExternalIpBlocklistStructToTerraform(struct?: DnsfilterProfileExternalIpBlocklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsfilterProfileExternalIpBlocklistStructToHclTerraform(struct?: DnsfilterProfileExternalIpBlocklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsfilterProfileExternalIpBlocklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsfilterProfileExternalIpBlocklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsfilterProfileExternalIpBlocklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DnsfilterProfileExternalIpBlocklistStructList extends cdktf.ComplexList {
  public internalValue? : DnsfilterProfileExternalIpBlocklistStruct[] | cdktf.IResolvable

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
  public get(index: number): DnsfilterProfileExternalIpBlocklistStructOutputReference {
    return new DnsfilterProfileExternalIpBlocklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsfilterProfileFtgdDnsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#action DnsfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#category DnsfilterProfile#category}
  */
  readonly category?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#id DnsfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#log DnsfilterProfile#log}
  */
  readonly log?: string;
}

export function dnsfilterProfileFtgdDnsFiltersToTerraform(struct?: DnsfilterProfileFtgdDnsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: cdktf.numberToTerraform(struct!.category),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
  }
}


export function dnsfilterProfileFtgdDnsFiltersToHclTerraform(struct?: DnsfilterProfileFtgdDnsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.numberToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsfilterProfileFtgdDnsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsfilterProfileFtgdDnsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsfilterProfileFtgdDnsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category = undefined;
      this._id = undefined;
      this._log = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category = value.category;
      this._id = value.id;
      this._log = value.log;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // category - computed: false, optional: true, required: false
  private _category?: number; 
  public get category() {
    return this.getNumberAttribute('category');
  }
  public set category(value: number) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }
}

export class DnsfilterProfileFtgdDnsFiltersList extends cdktf.ComplexList {
  public internalValue? : DnsfilterProfileFtgdDnsFilters[] | cdktf.IResolvable

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
  public get(index: number): DnsfilterProfileFtgdDnsFiltersOutputReference {
    return new DnsfilterProfileFtgdDnsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsfilterProfileFtgdDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#options DnsfilterProfile#options}
  */
  readonly options?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#filters DnsfilterProfile#filters}
  */
  readonly filters?: DnsfilterProfileFtgdDnsFilters[] | cdktf.IResolvable;
}

export function dnsfilterProfileFtgdDnsToTerraform(struct?: DnsfilterProfileFtgdDnsOutputReference | DnsfilterProfileFtgdDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.stringToTerraform(struct!.options),
    filters: cdktf.listMapper(dnsfilterProfileFtgdDnsFiltersToTerraform, true)(struct!.filters),
  }
}


export function dnsfilterProfileFtgdDnsToHclTerraform(struct?: DnsfilterProfileFtgdDnsOutputReference | DnsfilterProfileFtgdDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(dnsfilterProfileFtgdDnsFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DnsfilterProfileFtgdDnsFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsfilterProfileFtgdDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsfilterProfileFtgdDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsfilterProfileFtgdDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._options = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._options = value.options;
      this._filters.internalValue = value.filters;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DnsfilterProfileFtgdDnsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DnsfilterProfileFtgdDnsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface DnsfilterProfileTransparentDnsDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#name DnsfilterProfile#name}
  */
  readonly name?: string;
}

export function dnsfilterProfileTransparentDnsDatabaseToTerraform(struct?: DnsfilterProfileTransparentDnsDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsfilterProfileTransparentDnsDatabaseToHclTerraform(struct?: DnsfilterProfileTransparentDnsDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsfilterProfileTransparentDnsDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsfilterProfileTransparentDnsDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsfilterProfileTransparentDnsDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DnsfilterProfileTransparentDnsDatabaseList extends cdktf.ComplexList {
  public internalValue? : DnsfilterProfileTransparentDnsDatabase[] | cdktf.IResolvable

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
  public get(index: number): DnsfilterProfileTransparentDnsDatabaseOutputReference {
    return new DnsfilterProfileTransparentDnsDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile fortios_dnsfilter_profile}
*/
export class DnsfilterProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_dnsfilter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsfilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsfilterProfile to import
  * @param importFromId The id of the existing DnsfilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsfilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_dnsfilter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dnsfilter_profile fortios_dnsfilter_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsfilterProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DnsfilterProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_dnsfilter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockAction = config.blockAction;
    this._blockBotnet = config.blockBotnet;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._logAllDomain = config.logAllDomain;
    this._name = config.name;
    this._redirectPortal = config.redirectPortal;
    this._redirectPortal6 = config.redirectPortal6;
    this._safeSearch = config.safeSearch;
    this._sdnsDomainLog = config.sdnsDomainLog;
    this._sdnsFtgdErrLog = config.sdnsFtgdErrLog;
    this._stripEch = config.stripEch;
    this._vdomparam = config.vdomparam;
    this._youtubeRestrict = config.youtubeRestrict;
    this._dnsTranslation.internalValue = config.dnsTranslation;
    this._domainFilter.internalValue = config.domainFilter;
    this._externalIpBlocklist.internalValue = config.externalIpBlocklist;
    this._ftgdDns.internalValue = config.ftgdDns;
    this._transparentDnsDatabase.internalValue = config.transparentDnsDatabase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_action - computed: true, optional: true, required: false
  private _blockAction?: string; 
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }
  public set blockAction(value: string) {
    this._blockAction = value;
  }
  public resetBlockAction() {
    this._blockAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockActionInput() {
    return this._blockAction;
  }

  // block_botnet - computed: true, optional: true, required: false
  private _blockBotnet?: string; 
  public get blockBotnet() {
    return this.getStringAttribute('block_botnet');
  }
  public set blockBotnet(value: string) {
    this._blockBotnet = value;
  }
  public resetBlockBotnet() {
    this._blockBotnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockBotnetInput() {
    return this._blockBotnet;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // log_all_domain - computed: true, optional: true, required: false
  private _logAllDomain?: string; 
  public get logAllDomain() {
    return this.getStringAttribute('log_all_domain');
  }
  public set logAllDomain(value: string) {
    this._logAllDomain = value;
  }
  public resetLogAllDomain() {
    this._logAllDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllDomainInput() {
    return this._logAllDomain;
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

  // redirect_portal - computed: true, optional: true, required: false
  private _redirectPortal?: string; 
  public get redirectPortal() {
    return this.getStringAttribute('redirect_portal');
  }
  public set redirectPortal(value: string) {
    this._redirectPortal = value;
  }
  public resetRedirectPortal() {
    this._redirectPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectPortalInput() {
    return this._redirectPortal;
  }

  // redirect_portal6 - computed: true, optional: true, required: false
  private _redirectPortal6?: string; 
  public get redirectPortal6() {
    return this.getStringAttribute('redirect_portal6');
  }
  public set redirectPortal6(value: string) {
    this._redirectPortal6 = value;
  }
  public resetRedirectPortal6() {
    this._redirectPortal6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectPortal6Input() {
    return this._redirectPortal6;
  }

  // safe_search - computed: true, optional: true, required: false
  private _safeSearch?: string; 
  public get safeSearch() {
    return this.getStringAttribute('safe_search');
  }
  public set safeSearch(value: string) {
    this._safeSearch = value;
  }
  public resetSafeSearch() {
    this._safeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchInput() {
    return this._safeSearch;
  }

  // sdns_domain_log - computed: true, optional: true, required: false
  private _sdnsDomainLog?: string; 
  public get sdnsDomainLog() {
    return this.getStringAttribute('sdns_domain_log');
  }
  public set sdnsDomainLog(value: string) {
    this._sdnsDomainLog = value;
  }
  public resetSdnsDomainLog() {
    this._sdnsDomainLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnsDomainLogInput() {
    return this._sdnsDomainLog;
  }

  // sdns_ftgd_err_log - computed: true, optional: true, required: false
  private _sdnsFtgdErrLog?: string; 
  public get sdnsFtgdErrLog() {
    return this.getStringAttribute('sdns_ftgd_err_log');
  }
  public set sdnsFtgdErrLog(value: string) {
    this._sdnsFtgdErrLog = value;
  }
  public resetSdnsFtgdErrLog() {
    this._sdnsFtgdErrLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnsFtgdErrLogInput() {
    return this._sdnsFtgdErrLog;
  }

  // strip_ech - computed: true, optional: true, required: false
  private _stripEch?: string; 
  public get stripEch() {
    return this.getStringAttribute('strip_ech');
  }
  public set stripEch(value: string) {
    this._stripEch = value;
  }
  public resetStripEch() {
    this._stripEch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripEchInput() {
    return this._stripEch;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // youtube_restrict - computed: true, optional: true, required: false
  private _youtubeRestrict?: string; 
  public get youtubeRestrict() {
    return this.getStringAttribute('youtube_restrict');
  }
  public set youtubeRestrict(value: string) {
    this._youtubeRestrict = value;
  }
  public resetYoutubeRestrict() {
    this._youtubeRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get youtubeRestrictInput() {
    return this._youtubeRestrict;
  }

  // dns_translation - computed: false, optional: true, required: false
  private _dnsTranslation = new DnsfilterProfileDnsTranslationList(this, "dns_translation", false);
  public get dnsTranslation() {
    return this._dnsTranslation;
  }
  public putDnsTranslation(value: DnsfilterProfileDnsTranslation[] | cdktf.IResolvable) {
    this._dnsTranslation.internalValue = value;
  }
  public resetDnsTranslation() {
    this._dnsTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTranslationInput() {
    return this._dnsTranslation.internalValue;
  }

  // domain_filter - computed: false, optional: true, required: false
  private _domainFilter = new DnsfilterProfileDomainFilterOutputReference(this, "domain_filter");
  public get domainFilter() {
    return this._domainFilter;
  }
  public putDomainFilter(value: DnsfilterProfileDomainFilter) {
    this._domainFilter.internalValue = value;
  }
  public resetDomainFilter() {
    this._domainFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFilterInput() {
    return this._domainFilter.internalValue;
  }

  // external_ip_blocklist - computed: false, optional: true, required: false
  private _externalIpBlocklist = new DnsfilterProfileExternalIpBlocklistStructList(this, "external_ip_blocklist", true);
  public get externalIpBlocklist() {
    return this._externalIpBlocklist;
  }
  public putExternalIpBlocklist(value: DnsfilterProfileExternalIpBlocklistStruct[] | cdktf.IResolvable) {
    this._externalIpBlocklist.internalValue = value;
  }
  public resetExternalIpBlocklist() {
    this._externalIpBlocklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpBlocklistInput() {
    return this._externalIpBlocklist.internalValue;
  }

  // ftgd_dns - computed: false, optional: true, required: false
  private _ftgdDns = new DnsfilterProfileFtgdDnsOutputReference(this, "ftgd_dns");
  public get ftgdDns() {
    return this._ftgdDns;
  }
  public putFtgdDns(value: DnsfilterProfileFtgdDns) {
    this._ftgdDns.internalValue = value;
  }
  public resetFtgdDns() {
    this._ftgdDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftgdDnsInput() {
    return this._ftgdDns.internalValue;
  }

  // transparent_dns_database - computed: false, optional: true, required: false
  private _transparentDnsDatabase = new DnsfilterProfileTransparentDnsDatabaseList(this, "transparent_dns_database", true);
  public get transparentDnsDatabase() {
    return this._transparentDnsDatabase;
  }
  public putTransparentDnsDatabase(value: DnsfilterProfileTransparentDnsDatabase[] | cdktf.IResolvable) {
    this._transparentDnsDatabase.internalValue = value;
  }
  public resetTransparentDnsDatabase() {
    this._transparentDnsDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentDnsDatabaseInput() {
    return this._transparentDnsDatabase.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_action: cdktf.stringToTerraform(this._blockAction),
      block_botnet: cdktf.stringToTerraform(this._blockBotnet),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      log_all_domain: cdktf.stringToTerraform(this._logAllDomain),
      name: cdktf.stringToTerraform(this._name),
      redirect_portal: cdktf.stringToTerraform(this._redirectPortal),
      redirect_portal6: cdktf.stringToTerraform(this._redirectPortal6),
      safe_search: cdktf.stringToTerraform(this._safeSearch),
      sdns_domain_log: cdktf.stringToTerraform(this._sdnsDomainLog),
      sdns_ftgd_err_log: cdktf.stringToTerraform(this._sdnsFtgdErrLog),
      strip_ech: cdktf.stringToTerraform(this._stripEch),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      youtube_restrict: cdktf.stringToTerraform(this._youtubeRestrict),
      dns_translation: cdktf.listMapper(dnsfilterProfileDnsTranslationToTerraform, true)(this._dnsTranslation.internalValue),
      domain_filter: dnsfilterProfileDomainFilterToTerraform(this._domainFilter.internalValue),
      external_ip_blocklist: cdktf.listMapper(dnsfilterProfileExternalIpBlocklistStructToTerraform, true)(this._externalIpBlocklist.internalValue),
      ftgd_dns: dnsfilterProfileFtgdDnsToTerraform(this._ftgdDns.internalValue),
      transparent_dns_database: cdktf.listMapper(dnsfilterProfileTransparentDnsDatabaseToTerraform, true)(this._transparentDnsDatabase.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_action: {
        value: cdktf.stringToHclTerraform(this._blockAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_botnet: {
        value: cdktf.stringToHclTerraform(this._blockBotnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      log_all_domain: {
        value: cdktf.stringToHclTerraform(this._logAllDomain),
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
      redirect_portal: {
        value: cdktf.stringToHclTerraform(this._redirectPortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_portal6: {
        value: cdktf.stringToHclTerraform(this._redirectPortal6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safe_search: {
        value: cdktf.stringToHclTerraform(this._safeSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdns_domain_log: {
        value: cdktf.stringToHclTerraform(this._sdnsDomainLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdns_ftgd_err_log: {
        value: cdktf.stringToHclTerraform(this._sdnsFtgdErrLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_ech: {
        value: cdktf.stringToHclTerraform(this._stripEch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      youtube_restrict: {
        value: cdktf.stringToHclTerraform(this._youtubeRestrict),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_translation: {
        value: cdktf.listMapperHcl(dnsfilterProfileDnsTranslationToHclTerraform, true)(this._dnsTranslation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsfilterProfileDnsTranslationList",
      },
      domain_filter: {
        value: dnsfilterProfileDomainFilterToHclTerraform(this._domainFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsfilterProfileDomainFilterList",
      },
      external_ip_blocklist: {
        value: cdktf.listMapperHcl(dnsfilterProfileExternalIpBlocklistStructToHclTerraform, true)(this._externalIpBlocklist.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsfilterProfileExternalIpBlocklistStructList",
      },
      ftgd_dns: {
        value: dnsfilterProfileFtgdDnsToHclTerraform(this._ftgdDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsfilterProfileFtgdDnsList",
      },
      transparent_dns_database: {
        value: cdktf.listMapperHcl(dnsfilterProfileTransparentDnsDatabaseToHclTerraform, true)(this._transparentDnsDatabase.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsfilterProfileTransparentDnsDatabaseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
