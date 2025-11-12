// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create/Edit a domain-list stored as a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#file DomainList#file}
  */
  readonly file?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#id DomainList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the domain list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#name DomainList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#user_tag DomainList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#uuid DomainList#uuid}
  */
  readonly uuid?: string;
  /**
  * domain_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#domain_name_list DomainList#domain_name_list}
  */
  readonly domainNameList?: DomainListDomainNameListStruct[] | cdktf.IResolvable;
  /**
  * match_type_axfr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#match_type_axfr DomainList#match_type_axfr}
  */
  readonly matchTypeAxfr?: DomainListMatchTypeAxfr[] | cdktf.IResolvable;
  /**
  * match_type_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#match_type_equals DomainList#match_type_equals}
  */
  readonly matchTypeEquals?: DomainListMatchTypeEquals[] | cdktf.IResolvable;
  /**
  * match_type_suffix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#match_type_suffix DomainList#match_type_suffix}
  */
  readonly matchTypeSuffix?: DomainListMatchTypeSuffix[] | cdktf.IResolvable;
}
export interface DomainListDomainNameListStruct {
  /**
  * Domain name to be added to this domain list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#domain_name DomainList#domain_name}
  */
  readonly domainName?: string;
  /**
  * DNS query interval (in minute, default is 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#interval DomainList#interval}
  */
  readonly interval?: number;
}

export function domainListDomainNameListStructToTerraform(struct?: DomainListDomainNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function domainListDomainNameListStructToHclTerraform(struct?: DomainListDomainNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainListDomainNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainListDomainNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainListDomainNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._interval = value.interval;
    }
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DomainListDomainNameListStructList extends cdktf.ComplexList {
  public internalValue? : DomainListDomainNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): DomainListDomainNameListStructOutputReference {
    return new DomainListDomainNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainListMatchTypeAxfr {
  /**
  * Import the list of domains via zone-transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#axfr_domain DomainList#axfr_domain}
  */
  readonly axfrDomain?: string;
  /**
  * IP address of the listening DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#axfr_ip_address DomainList#axfr_ip_address}
  */
  readonly axfrIpAddress?: string;
  /**
  * IPv6 address of the listening DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#axfr_ipv6_address DomainList#axfr_ipv6_address}
  */
  readonly axfrIpv6Address?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#ip_axfr_port_num DomainList#ip_axfr_port_num}
  */
  readonly ipAxfrPortNum?: number;
  /**
  * Poll every x minutes to check for an Updated axfr default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#ip_refresh_intvl DomainList#ip_refresh_intvl}
  */
  readonly ipRefreshIntvl?: number;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#ipv6_axfr_port_num DomainList#ipv6_axfr_port_num}
  */
  readonly ipv6AxfrPortNum?: number;
  /**
  * Poll every x minutes to check for an Updated axfr default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#ipv6_refresh_intvl DomainList#ipv6_refresh_intvl}
  */
  readonly ipv6RefreshIntvl?: number;
}

export function domainListMatchTypeAxfrToTerraform(struct?: DomainListMatchTypeAxfr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axfr_domain: cdktf.stringToTerraform(struct!.axfrDomain),
    axfr_ip_address: cdktf.stringToTerraform(struct!.axfrIpAddress),
    axfr_ipv6_address: cdktf.stringToTerraform(struct!.axfrIpv6Address),
    ip_axfr_port_num: cdktf.numberToTerraform(struct!.ipAxfrPortNum),
    ip_refresh_intvl: cdktf.numberToTerraform(struct!.ipRefreshIntvl),
    ipv6_axfr_port_num: cdktf.numberToTerraform(struct!.ipv6AxfrPortNum),
    ipv6_refresh_intvl: cdktf.numberToTerraform(struct!.ipv6RefreshIntvl),
  }
}


export function domainListMatchTypeAxfrToHclTerraform(struct?: DomainListMatchTypeAxfr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    axfr_domain: {
      value: cdktf.stringToHclTerraform(struct!.axfrDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    axfr_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.axfrIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    axfr_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.axfrIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_axfr_port_num: {
      value: cdktf.numberToHclTerraform(struct!.ipAxfrPortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_refresh_intvl: {
      value: cdktf.numberToHclTerraform(struct!.ipRefreshIntvl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_axfr_port_num: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AxfrPortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_refresh_intvl: {
      value: cdktf.numberToHclTerraform(struct!.ipv6RefreshIntvl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainListMatchTypeAxfrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainListMatchTypeAxfr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axfrDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.axfrDomain = this._axfrDomain;
    }
    if (this._axfrIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.axfrIpAddress = this._axfrIpAddress;
    }
    if (this._axfrIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.axfrIpv6Address = this._axfrIpv6Address;
    }
    if (this._ipAxfrPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAxfrPortNum = this._ipAxfrPortNum;
    }
    if (this._ipRefreshIntvl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRefreshIntvl = this._ipRefreshIntvl;
    }
    if (this._ipv6AxfrPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AxfrPortNum = this._ipv6AxfrPortNum;
    }
    if (this._ipv6RefreshIntvl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6RefreshIntvl = this._ipv6RefreshIntvl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainListMatchTypeAxfr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axfrDomain = undefined;
      this._axfrIpAddress = undefined;
      this._axfrIpv6Address = undefined;
      this._ipAxfrPortNum = undefined;
      this._ipRefreshIntvl = undefined;
      this._ipv6AxfrPortNum = undefined;
      this._ipv6RefreshIntvl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axfrDomain = value.axfrDomain;
      this._axfrIpAddress = value.axfrIpAddress;
      this._axfrIpv6Address = value.axfrIpv6Address;
      this._ipAxfrPortNum = value.ipAxfrPortNum;
      this._ipRefreshIntvl = value.ipRefreshIntvl;
      this._ipv6AxfrPortNum = value.ipv6AxfrPortNum;
      this._ipv6RefreshIntvl = value.ipv6RefreshIntvl;
    }
  }

  // axfr_domain - computed: false, optional: true, required: false
  private _axfrDomain?: string; 
  public get axfrDomain() {
    return this.getStringAttribute('axfr_domain');
  }
  public set axfrDomain(value: string) {
    this._axfrDomain = value;
  }
  public resetAxfrDomain() {
    this._axfrDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axfrDomainInput() {
    return this._axfrDomain;
  }

  // axfr_ip_address - computed: false, optional: true, required: false
  private _axfrIpAddress?: string; 
  public get axfrIpAddress() {
    return this.getStringAttribute('axfr_ip_address');
  }
  public set axfrIpAddress(value: string) {
    this._axfrIpAddress = value;
  }
  public resetAxfrIpAddress() {
    this._axfrIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axfrIpAddressInput() {
    return this._axfrIpAddress;
  }

  // axfr_ipv6_address - computed: false, optional: true, required: false
  private _axfrIpv6Address?: string; 
  public get axfrIpv6Address() {
    return this.getStringAttribute('axfr_ipv6_address');
  }
  public set axfrIpv6Address(value: string) {
    this._axfrIpv6Address = value;
  }
  public resetAxfrIpv6Address() {
    this._axfrIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axfrIpv6AddressInput() {
    return this._axfrIpv6Address;
  }

  // ip_axfr_port_num - computed: false, optional: true, required: false
  private _ipAxfrPortNum?: number; 
  public get ipAxfrPortNum() {
    return this.getNumberAttribute('ip_axfr_port_num');
  }
  public set ipAxfrPortNum(value: number) {
    this._ipAxfrPortNum = value;
  }
  public resetIpAxfrPortNum() {
    this._ipAxfrPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAxfrPortNumInput() {
    return this._ipAxfrPortNum;
  }

  // ip_refresh_intvl - computed: false, optional: true, required: false
  private _ipRefreshIntvl?: number; 
  public get ipRefreshIntvl() {
    return this.getNumberAttribute('ip_refresh_intvl');
  }
  public set ipRefreshIntvl(value: number) {
    this._ipRefreshIntvl = value;
  }
  public resetIpRefreshIntvl() {
    this._ipRefreshIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRefreshIntvlInput() {
    return this._ipRefreshIntvl;
  }

  // ipv6_axfr_port_num - computed: false, optional: true, required: false
  private _ipv6AxfrPortNum?: number; 
  public get ipv6AxfrPortNum() {
    return this.getNumberAttribute('ipv6_axfr_port_num');
  }
  public set ipv6AxfrPortNum(value: number) {
    this._ipv6AxfrPortNum = value;
  }
  public resetIpv6AxfrPortNum() {
    this._ipv6AxfrPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AxfrPortNumInput() {
    return this._ipv6AxfrPortNum;
  }

  // ipv6_refresh_intvl - computed: false, optional: true, required: false
  private _ipv6RefreshIntvl?: number; 
  public get ipv6RefreshIntvl() {
    return this.getNumberAttribute('ipv6_refresh_intvl');
  }
  public set ipv6RefreshIntvl(value: number) {
    this._ipv6RefreshIntvl = value;
  }
  public resetIpv6RefreshIntvl() {
    this._ipv6RefreshIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RefreshIntvlInput() {
    return this._ipv6RefreshIntvl;
  }
}

export class DomainListMatchTypeAxfrList extends cdktf.ComplexList {
  public internalValue? : DomainListMatchTypeAxfr[] | cdktf.IResolvable

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
  public get(index: number): DomainListMatchTypeAxfrOutputReference {
    return new DomainListMatchTypeAxfrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainListMatchTypeEquals {
  /**
  * Specify exact match for the Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#equals DomainList#equals}
  */
  readonly equalTo?: string;
}

export function domainListMatchTypeEqualsToTerraform(struct?: DomainListMatchTypeEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equals: cdktf.stringToTerraform(struct!.equalTo),
  }
}


export function domainListMatchTypeEqualsToHclTerraform(struct?: DomainListMatchTypeEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainListMatchTypeEqualsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainListMatchTypeEquals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainListMatchTypeEquals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equals = value.equalTo;
    }
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }
}

export class DomainListMatchTypeEqualsList extends cdktf.ComplexList {
  public internalValue? : DomainListMatchTypeEquals[] | cdktf.IResolvable

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
  public get(index: number): DomainListMatchTypeEqualsOutputReference {
    return new DomainListMatchTypeEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainListMatchTypeSuffix {
  /**
  * Specify suffix matching the Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#suffix DomainList#suffix}
  */
  readonly suffix?: string;
}

export function domainListMatchTypeSuffixToTerraform(struct?: DomainListMatchTypeSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function domainListMatchTypeSuffixToHclTerraform(struct?: DomainListMatchTypeSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainListMatchTypeSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainListMatchTypeSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainListMatchTypeSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suffix = value.suffix;
    }
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class DomainListMatchTypeSuffixList extends cdktf.ComplexList {
  public internalValue? : DomainListMatchTypeSuffix[] | cdktf.IResolvable

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
  public get(index: number): DomainListMatchTypeSuffixOutputReference {
    return new DomainListMatchTypeSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list thunder_domain_list}
*/
export class DomainList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_domain_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainList to import
  * @param importFromId The id of the existing DomainList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_domain_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/domain_list thunder_domain_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainListConfig
  */
  public constructor(scope: Construct, id: string, config: DomainListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_domain_list',
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
    this._file = config.file;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._domainNameList.internalValue = config.domainNameList;
    this._matchTypeAxfr.internalValue = config.matchTypeAxfr;
    this._matchTypeEquals.internalValue = config.matchTypeEquals;
    this._matchTypeSuffix.internalValue = config.matchTypeSuffix;
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

  // domain_name_list - computed: false, optional: true, required: false
  private _domainNameList = new DomainListDomainNameListStructList(this, "domain_name_list", false);
  public get domainNameList() {
    return this._domainNameList;
  }
  public putDomainNameList(value: DomainListDomainNameListStruct[] | cdktf.IResolvable) {
    this._domainNameList.internalValue = value;
  }
  public resetDomainNameList() {
    this._domainNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameListInput() {
    return this._domainNameList.internalValue;
  }

  // match_type_axfr - computed: false, optional: true, required: false
  private _matchTypeAxfr = new DomainListMatchTypeAxfrList(this, "match_type_axfr", false);
  public get matchTypeAxfr() {
    return this._matchTypeAxfr;
  }
  public putMatchTypeAxfr(value: DomainListMatchTypeAxfr[] | cdktf.IResolvable) {
    this._matchTypeAxfr.internalValue = value;
  }
  public resetMatchTypeAxfr() {
    this._matchTypeAxfr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeAxfrInput() {
    return this._matchTypeAxfr.internalValue;
  }

  // match_type_equals - computed: false, optional: true, required: false
  private _matchTypeEquals = new DomainListMatchTypeEqualsList(this, "match_type_equals", false);
  public get matchTypeEquals() {
    return this._matchTypeEquals;
  }
  public putMatchTypeEquals(value: DomainListMatchTypeEquals[] | cdktf.IResolvable) {
    this._matchTypeEquals.internalValue = value;
  }
  public resetMatchTypeEquals() {
    this._matchTypeEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeEqualsInput() {
    return this._matchTypeEquals.internalValue;
  }

  // match_type_suffix - computed: false, optional: true, required: false
  private _matchTypeSuffix = new DomainListMatchTypeSuffixList(this, "match_type_suffix", false);
  public get matchTypeSuffix() {
    return this._matchTypeSuffix;
  }
  public putMatchTypeSuffix(value: DomainListMatchTypeSuffix[] | cdktf.IResolvable) {
    this._matchTypeSuffix.internalValue = value;
  }
  public resetMatchTypeSuffix() {
    this._matchTypeSuffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeSuffixInput() {
    return this._matchTypeSuffix.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file: cdktf.numberToTerraform(this._file),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      domain_name_list: cdktf.listMapper(domainListDomainNameListStructToTerraform, true)(this._domainNameList.internalValue),
      match_type_axfr: cdktf.listMapper(domainListMatchTypeAxfrToTerraform, true)(this._matchTypeAxfr.internalValue),
      match_type_equals: cdktf.listMapper(domainListMatchTypeEqualsToTerraform, true)(this._matchTypeEquals.internalValue),
      match_type_suffix: cdktf.listMapper(domainListMatchTypeSuffixToTerraform, true)(this._matchTypeSuffix.internalValue),
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
      domain_name_list: {
        value: cdktf.listMapperHcl(domainListDomainNameListStructToHclTerraform, true)(this._domainNameList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainListDomainNameListStructList",
      },
      match_type_axfr: {
        value: cdktf.listMapperHcl(domainListMatchTypeAxfrToHclTerraform, true)(this._matchTypeAxfr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainListMatchTypeAxfrList",
      },
      match_type_equals: {
        value: cdktf.listMapperHcl(domainListMatchTypeEqualsToHclTerraform, true)(this._matchTypeEquals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainListMatchTypeEqualsList",
      },
      match_type_suffix: {
        value: cdktf.listMapperHcl(domainListMatchTypeSuffixToHclTerraform, true)(this._matchTypeSuffix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainListMatchTypeSuffixList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
