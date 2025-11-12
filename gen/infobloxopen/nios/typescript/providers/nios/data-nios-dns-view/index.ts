// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDnsViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#extattrfilters DataNiosDnsView#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#filters DataNiosDnsView#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#max_results DataNiosDnsView#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#paging DataNiosDnsView#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDnsViewResultCloudInfoDelegatedMember {
}

export function dataNiosDnsViewResultCloudInfoDelegatedMemberToTerraform(struct?: DataNiosDnsViewResultCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsViewResultCloudInfoDelegatedMemberToHclTerraform(struct?: DataNiosDnsViewResultCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsViewResultCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsViewResultCloudInfoDelegatedMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultCloudInfoDelegatedMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4addr - computed: true, optional: false, required: false
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }

  // ipv6addr - computed: true, optional: false, required: false
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataNiosDnsViewResultCloudInfo {
}

export function dataNiosDnsViewResultCloudInfoToTerraform(struct?: DataNiosDnsViewResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsViewResultCloudInfoToHclTerraform(struct?: DataNiosDnsViewResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsViewResultCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsViewResultCloudInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultCloudInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority_type - computed: true, optional: false, required: false
  public get authorityType() {
    return this.getStringAttribute('authority_type');
  }

  // delegated_member - computed: true, optional: false, required: false
  private _delegatedMember = new DataNiosDnsViewResultCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }

  // delegated_root - computed: true, optional: false, required: false
  public get delegatedRoot() {
    return this.getStringAttribute('delegated_root');
  }

  // delegated_scope - computed: true, optional: false, required: false
  public get delegatedScope() {
    return this.getStringAttribute('delegated_scope');
  }

  // mgmt_platform - computed: true, optional: false, required: false
  public get mgmtPlatform() {
    return this.getStringAttribute('mgmt_platform');
  }

  // owned_by_adaptor - computed: true, optional: false, required: false
  public get ownedByAdaptor() {
    return this.getBooleanAttribute('owned_by_adaptor');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}
export interface DataNiosDnsViewResultCustomRootNameServers {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#address DataNiosDnsView#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#name DataNiosDnsView#name}
  */
  readonly name: string;
}

export function dataNiosDnsViewResultCustomRootNameServersToTerraform(struct?: DataNiosDnsViewResultCustomRootNameServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosDnsViewResultCustomRootNameServersToHclTerraform(struct?: DataNiosDnsViewResultCustomRootNameServers | cdktf.IResolvable): any {
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

export class DataNiosDnsViewResultCustomRootNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultCustomRootNameServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultCustomRootNameServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
    }
  }

  // address - computed: true, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // name - computed: true, optional: false, required: true
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

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: false, required: false
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_alg - computed: true, optional: false, required: false
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }

  // tsig_key_name - computed: true, optional: false, required: false
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }

  // use_tsig_key_name - computed: true, optional: false, required: false
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
}

export class DataNiosDnsViewResultCustomRootNameServersList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultCustomRootNameServers[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultCustomRootNameServersOutputReference {
    return new DataNiosDnsViewResultCustomRootNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResultDnssecTrustedKeys {
  /**
  * The DNSSEC algorithm used to generate the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#algorithm DataNiosDnsView#algorithm}
  */
  readonly algorithm: string;
  /**
  * Responses must be DNSSEC secure for this hierarchy/domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#dnssec_must_be_secure DataNiosDnsView#dnssec_must_be_secure}
  */
  readonly dnssecMustBeSecure?: boolean | cdktf.IResolvable;
  /**
  * The FQDN of the domain for which the member validates responses to recursive queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#fqdn DataNiosDnsView#fqdn}
  */
  readonly fqdn: string;
  /**
  * The DNSSEC key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#key DataNiosDnsView#key}
  */
  readonly key: string;
  /**
  * The secure entry point flag, if set it means this is a KSK configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#secure_entry_point DataNiosDnsView#secure_entry_point}
  */
  readonly secureEntryPoint?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsViewResultDnssecTrustedKeysToTerraform(struct?: DataNiosDnsViewResultDnssecTrustedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    dnssec_must_be_secure: cdktf.booleanToTerraform(struct!.dnssecMustBeSecure),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    key: cdktf.stringToTerraform(struct!.key),
    secure_entry_point: cdktf.booleanToTerraform(struct!.secureEntryPoint),
  }
}


export function dataNiosDnsViewResultDnssecTrustedKeysToHclTerraform(struct?: DataNiosDnsViewResultDnssecTrustedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnssec_must_be_secure: {
      value: cdktf.booleanToHclTerraform(struct!.dnssecMustBeSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_entry_point: {
      value: cdktf.booleanToHclTerraform(struct!.secureEntryPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultDnssecTrustedKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultDnssecTrustedKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._dnssecMustBeSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecMustBeSecure = this._dnssecMustBeSecure;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secureEntryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureEntryPoint = this._secureEntryPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultDnssecTrustedKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._dnssecMustBeSecure = undefined;
      this._fqdn = undefined;
      this._key = undefined;
      this._secureEntryPoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._dnssecMustBeSecure = value.dnssecMustBeSecure;
      this._fqdn = value.fqdn;
      this._key = value.key;
      this._secureEntryPoint = value.secureEntryPoint;
    }
  }

  // algorithm - computed: true, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // dnssec_must_be_secure - computed: true, optional: true, required: false
  private _dnssecMustBeSecure?: boolean | cdktf.IResolvable; 
  public get dnssecMustBeSecure() {
    return this.getBooleanAttribute('dnssec_must_be_secure');
  }
  public set dnssecMustBeSecure(value: boolean | cdktf.IResolvable) {
    this._dnssecMustBeSecure = value;
  }
  public resetDnssecMustBeSecure() {
    this._dnssecMustBeSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecMustBeSecureInput() {
    return this._dnssecMustBeSecure;
  }

  // fqdn - computed: true, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secure_entry_point - computed: true, optional: true, required: false
  private _secureEntryPoint?: boolean | cdktf.IResolvable; 
  public get secureEntryPoint() {
    return this.getBooleanAttribute('secure_entry_point');
  }
  public set secureEntryPoint(value: boolean | cdktf.IResolvable) {
    this._secureEntryPoint = value;
  }
  public resetSecureEntryPoint() {
    this._secureEntryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureEntryPointInput() {
    return this._secureEntryPoint;
  }
}

export class DataNiosDnsViewResultDnssecTrustedKeysList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultDnssecTrustedKeys[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultDnssecTrustedKeysOutputReference {
    return new DataNiosDnsViewResultDnssecTrustedKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResultFilterAaaaListStruct {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#address DataNiosDnsView#address}
  */
  readonly address?: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#permission DataNiosDnsView#permission}
  */
  readonly permission?: string;
  /**
  * The reference to the Named ACL object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ref DataNiosDnsView#ref}
  */
  readonly ref?: string;
}

export function dataNiosDnsViewResultFilterAaaaListStructToTerraform(struct?: DataNiosDnsViewResultFilterAaaaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
    ref: cdktf.stringToTerraform(struct!.ref),
  }
}


export function dataNiosDnsViewResultFilterAaaaListStructToHclTerraform(struct?: DataNiosDnsViewResultFilterAaaaListStruct | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultFilterAaaaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultFilterAaaaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultFilterAaaaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
      this._ref = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._permission = value.permission;
      this._ref = value.ref;
    }
  }

  // address - computed: true, optional: true, required: false
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }
}

export class DataNiosDnsViewResultFilterAaaaListStructList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultFilterAaaaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultFilterAaaaListStructOutputReference {
    return new DataNiosDnsViewResultFilterAaaaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResultFixedRrsetOrderFqdns {
  /**
  * The FQDN of the fixed RRset configuration item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#fqdn DataNiosDnsView#fqdn}
  */
  readonly fqdn: string;
  /**
  * The record type for the specified FQDN in the fixed RRset configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#record_type DataNiosDnsView#record_type}
  */
  readonly recordType?: string;
}

export function dataNiosDnsViewResultFixedRrsetOrderFqdnsToTerraform(struct?: DataNiosDnsViewResultFixedRrsetOrderFqdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    record_type: cdktf.stringToTerraform(struct!.recordType),
  }
}


export function dataNiosDnsViewResultFixedRrsetOrderFqdnsToHclTerraform(struct?: DataNiosDnsViewResultFixedRrsetOrderFqdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultFixedRrsetOrderFqdnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultFixedRrsetOrderFqdns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultFixedRrsetOrderFqdns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._recordType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._recordType = value.recordType;
    }
  }

  // fqdn - computed: true, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // record_type - computed: true, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
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

export class DataNiosDnsViewResultFixedRrsetOrderFqdnsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultFixedRrsetOrderFqdns[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultFixedRrsetOrderFqdnsOutputReference {
    return new DataNiosDnsViewResultFixedRrsetOrderFqdnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResultLastQueriedAcl {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#address DataNiosDnsView#address}
  */
  readonly address: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#permission DataNiosDnsView#permission}
  */
  readonly permission?: string;
}

export function dataNiosDnsViewResultLastQueriedAclToTerraform(struct?: DataNiosDnsViewResultLastQueriedAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDnsViewResultLastQueriedAclToHclTerraform(struct?: DataNiosDnsViewResultLastQueriedAcl | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultLastQueriedAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultLastQueriedAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultLastQueriedAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._permission = value.permission;
    }
  }

  // address - computed: true, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataNiosDnsViewResultLastQueriedAclList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultLastQueriedAcl[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultLastQueriedAclOutputReference {
    return new DataNiosDnsViewResultLastQueriedAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResultMatchClients {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#address DataNiosDnsView#address}
  */
  readonly address?: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#permission DataNiosDnsView#permission}
  */
  readonly permission?: string;
  /**
  * The reference to the Named ACL object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ref DataNiosDnsView#ref}
  */
  readonly ref?: string;
  /**
  * The struct type of the object. The value must be one of 'addressac' and 'tsigac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#struct DataNiosDnsView#struct}
  */
  readonly struct?: string;
  /**
  * A generated TSIG key. If the external primary server is a NIOS appliance running DNS One 2.x code, this can be set to :2xCOMPAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#tsig_key DataNiosDnsView#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#tsig_key_alg DataNiosDnsView#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The name of the TSIG key. If 2.x TSIG compatibility is used, this is set to 'tsig_xfer' on retrieval, and ignored on insert or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#tsig_key_name DataNiosDnsView#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_tsig_key_name DataNiosDnsView#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsViewResultMatchClientsToTerraform(struct?: DataNiosDnsViewResultMatchClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
    ref: cdktf.stringToTerraform(struct!.ref),
    struct: cdktf.stringToTerraform(struct!.struct),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    use_tsig_key_name: cdktf.booleanToTerraform(struct!.useTsigKeyName),
  }
}


export function dataNiosDnsViewResultMatchClientsToHclTerraform(struct?: DataNiosDnsViewResultMatchClients | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    struct: {
      value: cdktf.stringToHclTerraform(struct!.struct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: cdktf.stringToHclTerraform(struct!.tsigKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_alg: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tsig_key_name: {
      value: cdktf.booleanToHclTerraform(struct!.useTsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultMatchClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultMatchClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._struct !== undefined) {
      hasAnyValues = true;
      internalValueResult.struct = this._struct;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyAlg = this._tsigKeyAlg;
    }
    if (this._tsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyName = this._tsigKeyName;
    }
    if (this._useTsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTsigKeyName = this._useTsigKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultMatchClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
      this._ref = undefined;
      this._struct = undefined;
      this._tsigKey = undefined;
      this._tsigKeyAlg = undefined;
      this._tsigKeyName = undefined;
      this._useTsigKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._permission = value.permission;
      this._ref = value.ref;
      this._struct = value.struct;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
      this._useTsigKeyName = value.useTsigKeyName;
    }
  }

  // address - computed: true, optional: true, required: false
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // struct - computed: true, optional: true, required: false
  private _struct?: string; 
  public get struct() {
    return this.getStringAttribute('struct');
  }
  public set struct(value: string) {
    this._struct = value;
  }
  public resetStruct() {
    this._struct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structInput() {
    return this._struct;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey?: string; 
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }
  public set tsigKey(value: string) {
    this._tsigKey = value;
  }
  public resetTsigKey() {
    this._tsigKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey;
  }

  // tsig_key_alg - computed: true, optional: true, required: false
  private _tsigKeyAlg?: string; 
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }
  public set tsigKeyAlg(value: string) {
    this._tsigKeyAlg = value;
  }
  public resetTsigKeyAlg() {
    this._tsigKeyAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyAlgInput() {
    return this._tsigKeyAlg;
  }

  // tsig_key_name - computed: true, optional: true, required: false
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  public resetTsigKeyName() {
    this._tsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }

  // use_tsig_key_name - computed: true, optional: true, required: false
  private _useTsigKeyName?: boolean | cdktf.IResolvable; 
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
  public set useTsigKeyName(value: boolean | cdktf.IResolvable) {
    this._useTsigKeyName = value;
  }
  public resetUseTsigKeyName() {
    this._useTsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTsigKeyNameInput() {
    return this._useTsigKeyName;
  }
}

export class DataNiosDnsViewResultMatchClientsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultMatchClients[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultMatchClientsOutputReference {
    return new DataNiosDnsViewResultMatchClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResultMatchDestinations {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#address DataNiosDnsView#address}
  */
  readonly address?: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#permission DataNiosDnsView#permission}
  */
  readonly permission?: string;
  /**
  * The reference to the Named ACL object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ref DataNiosDnsView#ref}
  */
  readonly ref?: string;
  /**
  * The struct type of the object. The value must be one of 'addressac' and 'tsigac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#struct DataNiosDnsView#struct}
  */
  readonly struct?: string;
  /**
  * A generated TSIG key. If the external primary server is a NIOS appliance running DNS One 2.x code, this can be set to :2xCOMPAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#tsig_key DataNiosDnsView#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#tsig_key_alg DataNiosDnsView#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The name of the TSIG key. If 2.x TSIG compatibility is used, this is set to 'tsig_xfer' on retrieval, and ignored on insert or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#tsig_key_name DataNiosDnsView#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_tsig_key_name DataNiosDnsView#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsViewResultMatchDestinationsToTerraform(struct?: DataNiosDnsViewResultMatchDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
    ref: cdktf.stringToTerraform(struct!.ref),
    struct: cdktf.stringToTerraform(struct!.struct),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    use_tsig_key_name: cdktf.booleanToTerraform(struct!.useTsigKeyName),
  }
}


export function dataNiosDnsViewResultMatchDestinationsToHclTerraform(struct?: DataNiosDnsViewResultMatchDestinations | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    struct: {
      value: cdktf.stringToHclTerraform(struct!.struct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: cdktf.stringToHclTerraform(struct!.tsigKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_alg: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tsig_key_name: {
      value: cdktf.booleanToHclTerraform(struct!.useTsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultMatchDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultMatchDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._struct !== undefined) {
      hasAnyValues = true;
      internalValueResult.struct = this._struct;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyAlg = this._tsigKeyAlg;
    }
    if (this._tsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyName = this._tsigKeyName;
    }
    if (this._useTsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTsigKeyName = this._useTsigKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultMatchDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
      this._ref = undefined;
      this._struct = undefined;
      this._tsigKey = undefined;
      this._tsigKeyAlg = undefined;
      this._tsigKeyName = undefined;
      this._useTsigKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._permission = value.permission;
      this._ref = value.ref;
      this._struct = value.struct;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
      this._useTsigKeyName = value.useTsigKeyName;
    }
  }

  // address - computed: true, optional: true, required: false
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // struct - computed: true, optional: true, required: false
  private _struct?: string; 
  public get struct() {
    return this.getStringAttribute('struct');
  }
  public set struct(value: string) {
    this._struct = value;
  }
  public resetStruct() {
    this._struct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structInput() {
    return this._struct;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey?: string; 
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }
  public set tsigKey(value: string) {
    this._tsigKey = value;
  }
  public resetTsigKey() {
    this._tsigKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey;
  }

  // tsig_key_alg - computed: true, optional: true, required: false
  private _tsigKeyAlg?: string; 
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }
  public set tsigKeyAlg(value: string) {
    this._tsigKeyAlg = value;
  }
  public resetTsigKeyAlg() {
    this._tsigKeyAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyAlgInput() {
    return this._tsigKeyAlg;
  }

  // tsig_key_name - computed: true, optional: true, required: false
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  public resetTsigKeyName() {
    this._tsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }

  // use_tsig_key_name - computed: true, optional: true, required: false
  private _useTsigKeyName?: boolean | cdktf.IResolvable; 
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
  public set useTsigKeyName(value: boolean | cdktf.IResolvable) {
    this._useTsigKeyName = value;
  }
  public resetUseTsigKeyName() {
    this._useTsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTsigKeyNameInput() {
    return this._useTsigKeyName;
  }
}

export class DataNiosDnsViewResultMatchDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultMatchDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultMatchDestinationsOutputReference {
    return new DataNiosDnsViewResultMatchDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResultResponseRateLimiting {
  /**
  * Determines if the response rate limiting is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#enable_rrl DataNiosDnsView#enable_rrl}
  */
  readonly enableRrl?: boolean | cdktf.IResolvable;
  /**
  * Determines if logging for response rate limiting without dropping any requests is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#log_only DataNiosDnsView#log_only}
  */
  readonly logOnly?: boolean | cdktf.IResolvable;
  /**
  * The number of responses per client per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#responses_per_second DataNiosDnsView#responses_per_second}
  */
  readonly responsesPerSecond?: number;
  /**
  * The response rate limiting slip. Note that if slip is not equal to 0 every n-th rate-limited UDP request is sent a truncated response instead of being dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#slip DataNiosDnsView#slip}
  */
  readonly slip?: number;
  /**
  * The time interval in seconds over which responses are tracked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#window DataNiosDnsView#window}
  */
  readonly window?: number;
}

export function dataNiosDnsViewResultResponseRateLimitingToTerraform(struct?: DataNiosDnsViewResultResponseRateLimiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_rrl: cdktf.booleanToTerraform(struct!.enableRrl),
    log_only: cdktf.booleanToTerraform(struct!.logOnly),
    responses_per_second: cdktf.numberToTerraform(struct!.responsesPerSecond),
    slip: cdktf.numberToTerraform(struct!.slip),
    window: cdktf.numberToTerraform(struct!.window),
  }
}


export function dataNiosDnsViewResultResponseRateLimitingToHclTerraform(struct?: DataNiosDnsViewResultResponseRateLimiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_rrl: {
      value: cdktf.booleanToHclTerraform(struct!.enableRrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_only: {
      value: cdktf.booleanToHclTerraform(struct!.logOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    responses_per_second: {
      value: cdktf.numberToHclTerraform(struct!.responsesPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slip: {
      value: cdktf.numberToHclTerraform(struct!.slip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window: {
      value: cdktf.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultResponseRateLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsViewResultResponseRateLimiting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRrl = this._enableRrl;
    }
    if (this._logOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOnly = this._logOnly;
    }
    if (this._responsesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsesPerSecond = this._responsesPerSecond;
    }
    if (this._slip !== undefined) {
      hasAnyValues = true;
      internalValueResult.slip = this._slip;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultResponseRateLimiting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableRrl = undefined;
      this._logOnly = undefined;
      this._responsesPerSecond = undefined;
      this._slip = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableRrl = value.enableRrl;
      this._logOnly = value.logOnly;
      this._responsesPerSecond = value.responsesPerSecond;
      this._slip = value.slip;
      this._window = value.window;
    }
  }

  // enable_rrl - computed: true, optional: true, required: false
  private _enableRrl?: boolean | cdktf.IResolvable; 
  public get enableRrl() {
    return this.getBooleanAttribute('enable_rrl');
  }
  public set enableRrl(value: boolean | cdktf.IResolvable) {
    this._enableRrl = value;
  }
  public resetEnableRrl() {
    this._enableRrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRrlInput() {
    return this._enableRrl;
  }

  // log_only - computed: true, optional: true, required: false
  private _logOnly?: boolean | cdktf.IResolvable; 
  public get logOnly() {
    return this.getBooleanAttribute('log_only');
  }
  public set logOnly(value: boolean | cdktf.IResolvable) {
    this._logOnly = value;
  }
  public resetLogOnly() {
    this._logOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOnlyInput() {
    return this._logOnly;
  }

  // responses_per_second - computed: true, optional: true, required: false
  private _responsesPerSecond?: number; 
  public get responsesPerSecond() {
    return this.getNumberAttribute('responses_per_second');
  }
  public set responsesPerSecond(value: number) {
    this._responsesPerSecond = value;
  }
  public resetResponsesPerSecond() {
    this._responsesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsesPerSecondInput() {
    return this._responsesPerSecond;
  }

  // slip - computed: true, optional: true, required: false
  private _slip?: number; 
  public get slip() {
    return this.getNumberAttribute('slip');
  }
  public set slip(value: number) {
    this._slip = value;
  }
  public resetSlip() {
    this._slip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slipInput() {
    return this._slip;
  }

  // window - computed: true, optional: true, required: false
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface DataNiosDnsViewResultScavengingSettingsEaExpressionListStruct {
  /**
  * The operation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op DataNiosDnsView#op}
  */
  readonly op: string;
  /**
  * The name of the Extensible Attribute Definition object which is used as the first operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op1 DataNiosDnsView#op1}
  */
  readonly op1?: string;
  /**
  * The first operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op1_type DataNiosDnsView#op1_type}
  */
  readonly op1Type?: string;
  /**
  * The second operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op2 DataNiosDnsView#op2}
  */
  readonly op2?: string;
  /**
  * The second operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op2_type DataNiosDnsView#op2_type}
  */
  readonly op2Type?: string;
}

export function dataNiosDnsViewResultScavengingSettingsEaExpressionListStructToTerraform(struct?: DataNiosDnsViewResultScavengingSettingsEaExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    op1: cdktf.stringToTerraform(struct!.op1),
    op1_type: cdktf.stringToTerraform(struct!.op1Type),
    op2: cdktf.stringToTerraform(struct!.op2),
    op2_type: cdktf.stringToTerraform(struct!.op2Type),
  }
}


export function dataNiosDnsViewResultScavengingSettingsEaExpressionListStructToHclTerraform(struct?: DataNiosDnsViewResultScavengingSettingsEaExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1: {
      value: cdktf.stringToHclTerraform(struct!.op1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1_type: {
      value: cdktf.stringToHclTerraform(struct!.op1Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2: {
      value: cdktf.stringToHclTerraform(struct!.op2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2_type: {
      value: cdktf.stringToHclTerraform(struct!.op2Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultScavengingSettingsEaExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultScavengingSettingsEaExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._op1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1 = this._op1;
    }
    if (this._op1Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1Type = this._op1Type;
    }
    if (this._op2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2 = this._op2;
    }
    if (this._op2Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2Type = this._op2Type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultScavengingSettingsEaExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._op1 = undefined;
      this._op1Type = undefined;
      this._op2 = undefined;
      this._op2Type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._op1 = value.op1;
      this._op1Type = value.op1Type;
      this._op2 = value.op2;
      this._op2Type = value.op2Type;
    }
  }

  // op - computed: true, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // op1 - computed: true, optional: true, required: false
  private _op1?: string; 
  public get op1() {
    return this.getStringAttribute('op1');
  }
  public set op1(value: string) {
    this._op1 = value;
  }
  public resetOp1() {
    this._op1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1Input() {
    return this._op1;
  }

  // op1_type - computed: true, optional: true, required: false
  private _op1Type?: string; 
  public get op1Type() {
    return this.getStringAttribute('op1_type');
  }
  public set op1Type(value: string) {
    this._op1Type = value;
  }
  public resetOp1Type() {
    this._op1Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1TypeInput() {
    return this._op1Type;
  }

  // op2 - computed: true, optional: true, required: false
  private _op2?: string; 
  public get op2() {
    return this.getStringAttribute('op2');
  }
  public set op2(value: string) {
    this._op2 = value;
  }
  public resetOp2() {
    this._op2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2Input() {
    return this._op2;
  }

  // op2_type - computed: true, optional: true, required: false
  private _op2Type?: string; 
  public get op2Type() {
    return this.getStringAttribute('op2_type');
  }
  public set op2Type(value: string) {
    this._op2Type = value;
  }
  public resetOp2Type() {
    this._op2Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2TypeInput() {
    return this._op2Type;
  }
}

export class DataNiosDnsViewResultScavengingSettingsEaExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultScavengingSettingsEaExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultScavengingSettingsEaExpressionListStructOutputReference {
    return new DataNiosDnsViewResultScavengingSettingsEaExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResultScavengingSettingsExpressionListStruct {
  /**
  * The operation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op DataNiosDnsView#op}
  */
  readonly op: string;
  /**
  * The first operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op1 DataNiosDnsView#op1}
  */
  readonly op1?: string;
  /**
  * The first operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op1_type DataNiosDnsView#op1_type}
  */
  readonly op1Type?: string;
  /**
  * The second operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op2 DataNiosDnsView#op2}
  */
  readonly op2?: string;
  /**
  * The second operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#op2_type DataNiosDnsView#op2_type}
  */
  readonly op2Type?: string;
}

export function dataNiosDnsViewResultScavengingSettingsExpressionListStructToTerraform(struct?: DataNiosDnsViewResultScavengingSettingsExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    op1: cdktf.stringToTerraform(struct!.op1),
    op1_type: cdktf.stringToTerraform(struct!.op1Type),
    op2: cdktf.stringToTerraform(struct!.op2),
    op2_type: cdktf.stringToTerraform(struct!.op2Type),
  }
}


export function dataNiosDnsViewResultScavengingSettingsExpressionListStructToHclTerraform(struct?: DataNiosDnsViewResultScavengingSettingsExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1: {
      value: cdktf.stringToHclTerraform(struct!.op1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1_type: {
      value: cdktf.stringToHclTerraform(struct!.op1Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2: {
      value: cdktf.stringToHclTerraform(struct!.op2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2_type: {
      value: cdktf.stringToHclTerraform(struct!.op2Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultScavengingSettingsExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultScavengingSettingsExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._op1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1 = this._op1;
    }
    if (this._op1Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1Type = this._op1Type;
    }
    if (this._op2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2 = this._op2;
    }
    if (this._op2Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2Type = this._op2Type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultScavengingSettingsExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._op1 = undefined;
      this._op1Type = undefined;
      this._op2 = undefined;
      this._op2Type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._op1 = value.op1;
      this._op1Type = value.op1Type;
      this._op2 = value.op2;
      this._op2Type = value.op2Type;
    }
  }

  // op - computed: true, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // op1 - computed: true, optional: true, required: false
  private _op1?: string; 
  public get op1() {
    return this.getStringAttribute('op1');
  }
  public set op1(value: string) {
    this._op1 = value;
  }
  public resetOp1() {
    this._op1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1Input() {
    return this._op1;
  }

  // op1_type - computed: true, optional: true, required: false
  private _op1Type?: string; 
  public get op1Type() {
    return this.getStringAttribute('op1_type');
  }
  public set op1Type(value: string) {
    this._op1Type = value;
  }
  public resetOp1Type() {
    this._op1Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1TypeInput() {
    return this._op1Type;
  }

  // op2 - computed: true, optional: true, required: false
  private _op2?: string; 
  public get op2() {
    return this.getStringAttribute('op2');
  }
  public set op2(value: string) {
    this._op2 = value;
  }
  public resetOp2() {
    this._op2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2Input() {
    return this._op2;
  }

  // op2_type - computed: true, optional: true, required: false
  private _op2Type?: string; 
  public get op2Type() {
    return this.getStringAttribute('op2_type');
  }
  public set op2Type(value: string) {
    this._op2Type = value;
  }
  public resetOp2Type() {
    this._op2Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2TypeInput() {
    return this._op2Type;
  }
}

export class DataNiosDnsViewResultScavengingSettingsExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultScavengingSettingsExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultScavengingSettingsExpressionListStructOutputReference {
    return new DataNiosDnsViewResultScavengingSettingsExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResultScavengingSettingsScavengingSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#day_of_month DataNiosDnsView#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#disable DataNiosDnsView#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#every DataNiosDnsView#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#frequency DataNiosDnsView#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#hour_of_day DataNiosDnsView#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#minutes_past_hour DataNiosDnsView#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#month DataNiosDnsView#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#recurring_time DataNiosDnsView#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#repeat DataNiosDnsView#repeat}
  */
  readonly repeat?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#weekdays DataNiosDnsView#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#year DataNiosDnsView#year}
  */
  readonly year?: number;
}

export function dataNiosDnsViewResultScavengingSettingsScavengingScheduleToTerraform(struct?: DataNiosDnsViewResultScavengingSettingsScavengingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    recurring_time: cdktf.numberToTerraform(struct!.recurringTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function dataNiosDnsViewResultScavengingSettingsScavengingScheduleToHclTerraform(struct?: DataNiosDnsViewResultScavengingSettingsScavengingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurring_time: {
      value: cdktf.numberToHclTerraform(struct!.recurringTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultScavengingSettingsScavengingScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsViewResultScavengingSettingsScavengingSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._recurringTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTime = this._recurringTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultScavengingSettingsScavengingSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._recurringTime = undefined;
      this._repeat = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._recurringTime = value.recurringTime;
      this._repeat = value.repeat;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: true, required: false
  private _recurringTime?: number; 
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }
  public set recurringTime(value: number) {
    this._recurringTime = value;
  }
  public resetRecurringTime() {
    this._recurringTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeInput() {
    return this._recurringTime;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface DataNiosDnsViewResultScavengingSettings {
  /**
  * The extensible attributes expression list. The particular record is treated as reclaimable if extensible attributes expression condition evaluates to 'true' for given record if scavenging hasn't been manually disabled on a given resource record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ea_expression_list DataNiosDnsView#ea_expression_list}
  */
  readonly eaExpressionList?: DataNiosDnsViewResultScavengingSettingsEaExpressionListStruct[] | cdktf.IResolvable;
  /**
  * This flag indicates if the automatic resource record scavenging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#enable_auto_reclamation DataNiosDnsView#enable_auto_reclamation}
  */
  readonly enableAutoReclamation?: boolean | cdktf.IResolvable;
  /**
  * This flag indicates if the recurrent resource record scavenging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#enable_recurrent_scavenging DataNiosDnsView#enable_recurrent_scavenging}
  */
  readonly enableRecurrentScavenging?: boolean | cdktf.IResolvable;
  /**
  * This flag indicates if the resource record last queried monitoring in affected zones is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#enable_rr_last_queried DataNiosDnsView#enable_rr_last_queried}
  */
  readonly enableRrLastQueried?: boolean | cdktf.IResolvable;
  /**
  * This flag indicates if the resource record scavenging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#enable_scavenging DataNiosDnsView#enable_scavenging}
  */
  readonly enableScavenging?: boolean | cdktf.IResolvable;
  /**
  * This flag indicates if the last queried monitoring for affected zones is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#enable_zone_last_queried DataNiosDnsView#enable_zone_last_queried}
  */
  readonly enableZoneLastQueried?: boolean | cdktf.IResolvable;
  /**
  * The expression list. The particular record is treated as reclaimable if expression condition evaluates to 'true' for given record if scavenging hasn't been manually disabled on a given resource record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#expression_list DataNiosDnsView#expression_list}
  */
  readonly expressionList?: DataNiosDnsViewResultScavengingSettingsExpressionListStruct[] | cdktf.IResolvable;
  /**
  * This flag indicates if the associated resource record scavenging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#reclaim_associated_records DataNiosDnsView#reclaim_associated_records}
  */
  readonly reclaimAssociatedRecords?: boolean | cdktf.IResolvable;
  /**
  * The scavenging schedule. The scavenging schedule is used to determine when the scavenging should be performed. If not specified, the default scavenging schedule is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#scavenging_schedule DataNiosDnsView#scavenging_schedule}
  */
  readonly scavengingSchedule?: DataNiosDnsViewResultScavengingSettingsScavengingSchedule;
}

export function dataNiosDnsViewResultScavengingSettingsToTerraform(struct?: DataNiosDnsViewResultScavengingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ea_expression_list: cdktf.listMapper(dataNiosDnsViewResultScavengingSettingsEaExpressionListStructToTerraform, false)(struct!.eaExpressionList),
    enable_auto_reclamation: cdktf.booleanToTerraform(struct!.enableAutoReclamation),
    enable_recurrent_scavenging: cdktf.booleanToTerraform(struct!.enableRecurrentScavenging),
    enable_rr_last_queried: cdktf.booleanToTerraform(struct!.enableRrLastQueried),
    enable_scavenging: cdktf.booleanToTerraform(struct!.enableScavenging),
    enable_zone_last_queried: cdktf.booleanToTerraform(struct!.enableZoneLastQueried),
    expression_list: cdktf.listMapper(dataNiosDnsViewResultScavengingSettingsExpressionListStructToTerraform, false)(struct!.expressionList),
    reclaim_associated_records: cdktf.booleanToTerraform(struct!.reclaimAssociatedRecords),
    scavenging_schedule: dataNiosDnsViewResultScavengingSettingsScavengingScheduleToTerraform(struct!.scavengingSchedule),
  }
}


export function dataNiosDnsViewResultScavengingSettingsToHclTerraform(struct?: DataNiosDnsViewResultScavengingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ea_expression_list: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultScavengingSettingsEaExpressionListStructToHclTerraform, false)(struct!.eaExpressionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultScavengingSettingsEaExpressionListStructList",
    },
    enable_auto_reclamation: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoReclamation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_recurrent_scavenging: {
      value: cdktf.booleanToHclTerraform(struct!.enableRecurrentScavenging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rr_last_queried: {
      value: cdktf.booleanToHclTerraform(struct!.enableRrLastQueried),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_scavenging: {
      value: cdktf.booleanToHclTerraform(struct!.enableScavenging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_zone_last_queried: {
      value: cdktf.booleanToHclTerraform(struct!.enableZoneLastQueried),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression_list: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultScavengingSettingsExpressionListStructToHclTerraform, false)(struct!.expressionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultScavengingSettingsExpressionListStructList",
    },
    reclaim_associated_records: {
      value: cdktf.booleanToHclTerraform(struct!.reclaimAssociatedRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scavenging_schedule: {
      value: dataNiosDnsViewResultScavengingSettingsScavengingScheduleToHclTerraform(struct!.scavengingSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDnsViewResultScavengingSettingsScavengingSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultScavengingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsViewResultScavengingSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eaExpressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eaExpressionList = this._eaExpressionList?.internalValue;
    }
    if (this._enableAutoReclamation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoReclamation = this._enableAutoReclamation;
    }
    if (this._enableRecurrentScavenging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRecurrentScavenging = this._enableRecurrentScavenging;
    }
    if (this._enableRrLastQueried !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRrLastQueried = this._enableRrLastQueried;
    }
    if (this._enableScavenging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableScavenging = this._enableScavenging;
    }
    if (this._enableZoneLastQueried !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableZoneLastQueried = this._enableZoneLastQueried;
    }
    if (this._expressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionList = this._expressionList?.internalValue;
    }
    if (this._reclaimAssociatedRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.reclaimAssociatedRecords = this._reclaimAssociatedRecords;
    }
    if (this._scavengingSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scavengingSchedule = this._scavengingSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultScavengingSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eaExpressionList.internalValue = undefined;
      this._enableAutoReclamation = undefined;
      this._enableRecurrentScavenging = undefined;
      this._enableRrLastQueried = undefined;
      this._enableScavenging = undefined;
      this._enableZoneLastQueried = undefined;
      this._expressionList.internalValue = undefined;
      this._reclaimAssociatedRecords = undefined;
      this._scavengingSchedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eaExpressionList.internalValue = value.eaExpressionList;
      this._enableAutoReclamation = value.enableAutoReclamation;
      this._enableRecurrentScavenging = value.enableRecurrentScavenging;
      this._enableRrLastQueried = value.enableRrLastQueried;
      this._enableScavenging = value.enableScavenging;
      this._enableZoneLastQueried = value.enableZoneLastQueried;
      this._expressionList.internalValue = value.expressionList;
      this._reclaimAssociatedRecords = value.reclaimAssociatedRecords;
      this._scavengingSchedule.internalValue = value.scavengingSchedule;
    }
  }

  // ea_expression_list - computed: true, optional: true, required: false
  private _eaExpressionList = new DataNiosDnsViewResultScavengingSettingsEaExpressionListStructList(this, "ea_expression_list", false);
  public get eaExpressionList() {
    return this._eaExpressionList;
  }
  public putEaExpressionList(value: DataNiosDnsViewResultScavengingSettingsEaExpressionListStruct[] | cdktf.IResolvable) {
    this._eaExpressionList.internalValue = value;
  }
  public resetEaExpressionList() {
    this._eaExpressionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eaExpressionListInput() {
    return this._eaExpressionList.internalValue;
  }

  // enable_auto_reclamation - computed: true, optional: true, required: false
  private _enableAutoReclamation?: boolean | cdktf.IResolvable; 
  public get enableAutoReclamation() {
    return this.getBooleanAttribute('enable_auto_reclamation');
  }
  public set enableAutoReclamation(value: boolean | cdktf.IResolvable) {
    this._enableAutoReclamation = value;
  }
  public resetEnableAutoReclamation() {
    this._enableAutoReclamation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoReclamationInput() {
    return this._enableAutoReclamation;
  }

  // enable_recurrent_scavenging - computed: true, optional: true, required: false
  private _enableRecurrentScavenging?: boolean | cdktf.IResolvable; 
  public get enableRecurrentScavenging() {
    return this.getBooleanAttribute('enable_recurrent_scavenging');
  }
  public set enableRecurrentScavenging(value: boolean | cdktf.IResolvable) {
    this._enableRecurrentScavenging = value;
  }
  public resetEnableRecurrentScavenging() {
    this._enableRecurrentScavenging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRecurrentScavengingInput() {
    return this._enableRecurrentScavenging;
  }

  // enable_rr_last_queried - computed: true, optional: true, required: false
  private _enableRrLastQueried?: boolean | cdktf.IResolvable; 
  public get enableRrLastQueried() {
    return this.getBooleanAttribute('enable_rr_last_queried');
  }
  public set enableRrLastQueried(value: boolean | cdktf.IResolvable) {
    this._enableRrLastQueried = value;
  }
  public resetEnableRrLastQueried() {
    this._enableRrLastQueried = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRrLastQueriedInput() {
    return this._enableRrLastQueried;
  }

  // enable_scavenging - computed: true, optional: true, required: false
  private _enableScavenging?: boolean | cdktf.IResolvable; 
  public get enableScavenging() {
    return this.getBooleanAttribute('enable_scavenging');
  }
  public set enableScavenging(value: boolean | cdktf.IResolvable) {
    this._enableScavenging = value;
  }
  public resetEnableScavenging() {
    this._enableScavenging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScavengingInput() {
    return this._enableScavenging;
  }

  // enable_zone_last_queried - computed: true, optional: true, required: false
  private _enableZoneLastQueried?: boolean | cdktf.IResolvable; 
  public get enableZoneLastQueried() {
    return this.getBooleanAttribute('enable_zone_last_queried');
  }
  public set enableZoneLastQueried(value: boolean | cdktf.IResolvable) {
    this._enableZoneLastQueried = value;
  }
  public resetEnableZoneLastQueried() {
    this._enableZoneLastQueried = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableZoneLastQueriedInput() {
    return this._enableZoneLastQueried;
  }

  // expression_list - computed: true, optional: true, required: false
  private _expressionList = new DataNiosDnsViewResultScavengingSettingsExpressionListStructList(this, "expression_list", false);
  public get expressionList() {
    return this._expressionList;
  }
  public putExpressionList(value: DataNiosDnsViewResultScavengingSettingsExpressionListStruct[] | cdktf.IResolvable) {
    this._expressionList.internalValue = value;
  }
  public resetExpressionList() {
    this._expressionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionListInput() {
    return this._expressionList.internalValue;
  }

  // reclaim_associated_records - computed: true, optional: true, required: false
  private _reclaimAssociatedRecords?: boolean | cdktf.IResolvable; 
  public get reclaimAssociatedRecords() {
    return this.getBooleanAttribute('reclaim_associated_records');
  }
  public set reclaimAssociatedRecords(value: boolean | cdktf.IResolvable) {
    this._reclaimAssociatedRecords = value;
  }
  public resetReclaimAssociatedRecords() {
    this._reclaimAssociatedRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimAssociatedRecordsInput() {
    return this._reclaimAssociatedRecords;
  }

  // scavenging_schedule - computed: true, optional: true, required: false
  private _scavengingSchedule = new DataNiosDnsViewResultScavengingSettingsScavengingScheduleOutputReference(this, "scavenging_schedule");
  public get scavengingSchedule() {
    return this._scavengingSchedule;
  }
  public putScavengingSchedule(value: DataNiosDnsViewResultScavengingSettingsScavengingSchedule) {
    this._scavengingSchedule.internalValue = value;
  }
  public resetScavengingSchedule() {
    this._scavengingSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scavengingScheduleInput() {
    return this._scavengingSchedule.internalValue;
  }
}
export interface DataNiosDnsViewResultSortlistStruct {
  /**
  * The source address of a sortlist object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#address DataNiosDnsView#address}
  */
  readonly address: string;
  /**
  * The match list of a sortlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#match_list DataNiosDnsView#match_list}
  */
  readonly matchList?: string[];
}

export function dataNiosDnsViewResultSortlistStructToTerraform(struct?: DataNiosDnsViewResultSortlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    match_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchList),
  }
}


export function dataNiosDnsViewResultSortlistStructToHclTerraform(struct?: DataNiosDnsViewResultSortlistStruct | cdktf.IResolvable): any {
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
    match_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultSortlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsViewResultSortlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._matchList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchList = this._matchList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResultSortlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._matchList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._matchList = value.matchList;
    }
  }

  // address - computed: true, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // match_list - computed: true, optional: true, required: false
  private _matchList?: string[]; 
  public get matchList() {
    return this.getListAttribute('match_list');
  }
  public set matchList(value: string[]) {
    this._matchList = value;
  }
  public resetMatchList() {
    this._matchList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchListInput() {
    return this._matchList;
  }
}

export class DataNiosDnsViewResultSortlistStructList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResultSortlistStruct[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultSortlistStructOutputReference {
    return new DataNiosDnsViewResultSortlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsViewResult {
  /**
  * The action to perform when a domain name matches the pattern defined in a rule that is specified by the blacklist_ruleset method. Valid values are "REDIRECT" or "REFUSE". The default value is "REFUSE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#blacklist_action DataNiosDnsView#blacklist_action}
  */
  readonly blacklistAction?: string;
  /**
  * The flag that indicates whether blacklist redirection queries are logged. Specify "true" to enable logging, or "false" to disable it. The default value is "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#blacklist_log_query DataNiosDnsView#blacklist_log_query}
  */
  readonly blacklistLogQuery?: boolean | cdktf.IResolvable;
  /**
  * The array of IP addresses the appliance includes in the response it sends in place of a blacklisted IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#blacklist_redirect_addresses DataNiosDnsView#blacklist_redirect_addresses}
  */
  readonly blacklistRedirectAddresses?: string[];
  /**
  * The Time To Live (TTL) value of the synthetic DNS responses resulted from blacklist redirection. The TTL value is a 32-bit unsigned integer that represents the TTL in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#blacklist_redirect_ttl DataNiosDnsView#blacklist_redirect_ttl}
  */
  readonly blacklistRedirectTtl?: number;
  /**
  * The name of the Ruleset object assigned at the Grid level for blacklist redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#blacklist_rulesets DataNiosDnsView#blacklist_rulesets}
  */
  readonly blacklistRulesets?: string[];
  /**
  * Comment for the DNS view; maximum 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#comment DataNiosDnsView#comment}
  */
  readonly comment?: string;
  /**
  * The list of customized root name servers. You can either select and use Internet root name servers or specify custom root name servers by providing a host name and IP address to which the Infoblox appliance can send queries. Include the specified parameter to set the attribute value. Omit the parameter to retrieve the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#custom_root_name_servers DataNiosDnsView#custom_root_name_servers}
  */
  readonly customRootNameServers?: DataNiosDnsViewResultCustomRootNameServers[] | cdktf.IResolvable;
  /**
  * Defines whether creation timestamp of RR should be updated ' when DDNS update happens even if there is no change to ' the RR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ddns_force_creation_timestamp_update DataNiosDnsView#ddns_force_creation_timestamp_update}
  */
  readonly ddnsForceCreationTimestampUpdate?: boolean | cdktf.IResolvable;
  /**
  * The DDNS Principal cluster group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ddns_principal_group DataNiosDnsView#ddns_principal_group}
  */
  readonly ddnsPrincipalGroup?: string;
  /**
  * The flag that indicates whether the DDNS principal track is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ddns_principal_tracking DataNiosDnsView#ddns_principal_tracking}
  */
  readonly ddnsPrincipalTracking?: boolean | cdktf.IResolvable;
  /**
  * The flag that indicates whether an option to restrict DDNS update request based on FQDN patterns is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ddns_restrict_patterns DataNiosDnsView#ddns_restrict_patterns}
  */
  readonly ddnsRestrictPatterns?: boolean | cdktf.IResolvable;
  /**
  * The unordered list of restriction patterns for an option of to restrict DDNS updates based on FQDN patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ddns_restrict_patterns_list DataNiosDnsView#ddns_restrict_patterns_list}
  */
  readonly ddnsRestrictPatternsList?: string[];
  /**
  * The flag that indicates whether an option to restrict DDNS update request to protected resource records is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ddns_restrict_protected DataNiosDnsView#ddns_restrict_protected}
  */
  readonly ddnsRestrictProtected?: boolean | cdktf.IResolvable;
  /**
  * The flag that indicates whether DDNS update request for principal other than target resource record's principal is restricted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ddns_restrict_secure DataNiosDnsView#ddns_restrict_secure}
  */
  readonly ddnsRestrictSecure?: boolean | cdktf.IResolvable;
  /**
  * The flag that indicates whether an option to restrict DDNS update request to resource records which are marked as 'STATIC' is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#ddns_restrict_static DataNiosDnsView#ddns_restrict_static}
  */
  readonly ddnsRestrictStatic?: boolean | cdktf.IResolvable;
  /**
  * Determines if the DNS view is disabled or not. When this is set to False, the DNS view is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#disable DataNiosDnsView#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines if the DNS64 s enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#dns64_enabled DataNiosDnsView#dns64_enabled}
  */
  readonly dns64Enabled?: boolean | cdktf.IResolvable;
  /**
  * The list of DNS64 synthesis groups associated with this DNS view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#dns64_groups DataNiosDnsView#dns64_groups}
  */
  readonly dns64Groups?: string[];
  /**
  * Determines if the DNS security extension is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#dnssec_enabled DataNiosDnsView#dnssec_enabled}
  */
  readonly dnssecEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if the DNS security extension accepts expired signatures or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#dnssec_expired_signatures_enabled DataNiosDnsView#dnssec_expired_signatures_enabled}
  */
  readonly dnssecExpiredSignaturesEnabled?: boolean | cdktf.IResolvable;
  /**
  * A list of zones for which the server does not perform DNSSEC validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#dnssec_negative_trust_anchors DataNiosDnsView#dnssec_negative_trust_anchors}
  */
  readonly dnssecNegativeTrustAnchors?: string[];
  /**
  * The list of trusted keys for the DNS security extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#dnssec_trusted_keys DataNiosDnsView#dnssec_trusted_keys}
  */
  readonly dnssecTrustedKeys?: DataNiosDnsViewResultDnssecTrustedKeys[] | cdktf.IResolvable;
  /**
  * Determines if the DNS security validation is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#dnssec_validation_enabled DataNiosDnsView#dnssec_validation_enabled}
  */
  readonly dnssecValidationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Advertises the EDNS0 buffer size to the upstream server. The value should be between 512 and 4096 bytes. The recommended value is between 512 and 1220 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#edns_udp_size DataNiosDnsView#edns_udp_size}
  */
  readonly ednsUdpSize?: number;
  /**
  * Determines if the blacklist in a DNS view is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#enable_blacklist DataNiosDnsView#enable_blacklist}
  */
  readonly enableBlacklist?: boolean | cdktf.IResolvable;
  /**
  * Determines if the fixed RRset order FQDN is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#enable_fixed_rrset_order_fqdns DataNiosDnsView#enable_fixed_rrset_order_fqdns}
  */
  readonly enableFixedRrsetOrderFqdns?: boolean | cdktf.IResolvable;
  /**
  * Determines if the 'match-recursive-only' option in a DNS view is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#enable_match_recursive_only DataNiosDnsView#enable_match_recursive_only}
  */
  readonly enableMatchRecursiveOnly?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#extattrs DataNiosDnsView#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The type of AAAA filtering for this DNS view object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#filter_aaaa DataNiosDnsView#filter_aaaa}
  */
  readonly filterAaaa?: string;
  /**
  * Applies AAAA filtering to a named ACL, or to a list of IPv4/IPv6 addresses and networks from which queries are received. This field does not allow TSIG keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#filter_aaaa_list DataNiosDnsView#filter_aaaa_list}
  */
  readonly filterAaaaList?: DataNiosDnsViewResultFilterAaaaListStruct[] | cdktf.IResolvable;
  /**
  * The fixed RRset order FQDN. If this field does not contain an empty value, the appliance will automatically set the enable_fixed_rrset_order_fqdns field to 'true', unless the same request sets the enable field to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#fixed_rrset_order_fqdns DataNiosDnsView#fixed_rrset_order_fqdns}
  */
  readonly fixedRrsetOrderFqdns?: DataNiosDnsViewResultFixedRrsetOrderFqdns[] | cdktf.IResolvable;
  /**
  * Determines if this DNS view sends queries to forwarders only or not. When the value is True, queries are sent to forwarders only, and not to other internal or Internet root servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#forward_only DataNiosDnsView#forward_only}
  */
  readonly forwardOnly?: boolean | cdktf.IResolvable;
  /**
  * The list of forwarders for the DNS view. A forwarder is a name server to which other name servers first send their off-site queries. The forwarder builds up a cache of information, avoiding the need for other name servers to send queries off-site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#forwarders DataNiosDnsView#forwarders}
  */
  readonly forwarders?: string[];
  /**
  * Determines last queried ACL for the specified IPv4 or IPv6 addresses and networks in scavenging settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#last_queried_acl DataNiosDnsView#last_queried_acl}
  */
  readonly lastQueriedAcl?: DataNiosDnsViewResultLastQueriedAcl[] | cdktf.IResolvable;
  /**
  * A list of forwarders for the match clients. This list specifies a named ACL, or a list of IPv4/IPv6 addresses, networks, TSIG keys of clients that are allowed or denied access to the DNS view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#match_clients DataNiosDnsView#match_clients}
  */
  readonly matchClients?: DataNiosDnsViewResultMatchClients[] | cdktf.IResolvable;
  /**
  * A list of forwarders for the match destinations. This list specifies a name ACL, or a list of IPv4/IPv6 addresses, networks, TSIG keys of clients that are allowed or denied access to the DNS view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#match_destinations DataNiosDnsView#match_destinations}
  */
  readonly matchDestinations?: DataNiosDnsViewResultMatchDestinations[] | cdktf.IResolvable;
  /**
  * The maximum number of seconds to cache ordinary (positive) answers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#max_cache_ttl DataNiosDnsView#max_cache_ttl}
  */
  readonly maxCacheTtl?: number;
  /**
  * The maximum number of seconds to cache negative (NXDOMAIN) answers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#max_ncache_ttl DataNiosDnsView#max_ncache_ttl}
  */
  readonly maxNcacheTtl?: number;
  /**
  * The value is used by authoritative DNS servers to never send DNS responses larger than the configured value. The value should be between 512 and 4096 bytes. The recommended value is between 512 and 1220 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#max_udp_size DataNiosDnsView#max_udp_size}
  */
  readonly maxUdpSize?: number;
  /**
  * Name of the DNS view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#name DataNiosDnsView#name}
  */
  readonly name: string;
  /**
  * The name of the network view object associated with this DNS view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#network_view DataNiosDnsView#network_view}
  */
  readonly networkView?: string;
  /**
  * The number of seconds of delay the notify messages are sent to secondaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#notify_delay DataNiosDnsView#notify_delay}
  */
  readonly notifyDelay?: number;
  /**
  * The flag that indicates whether NXDOMAIN redirection queries are logged. Specify "true" to enable logging, or "false" to disable it. The default value is "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#nxdomain_log_query DataNiosDnsView#nxdomain_log_query}
  */
  readonly nxdomainLogQuery?: boolean | cdktf.IResolvable;
  /**
  * Determines if NXDOMAIN redirection in a DNS view is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#nxdomain_redirect DataNiosDnsView#nxdomain_redirect}
  */
  readonly nxdomainRedirect?: boolean | cdktf.IResolvable;
  /**
  * The array with IPv4 addresses the appliance includes in the response it sends in place of an NXDOMAIN response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#nxdomain_redirect_addresses DataNiosDnsView#nxdomain_redirect_addresses}
  */
  readonly nxdomainRedirectAddresses?: string[];
  /**
  * The array with IPv6 addresses the appliance includes in the response it sends in place of an NXDOMAIN response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#nxdomain_redirect_addresses_v6 DataNiosDnsView#nxdomain_redirect_addresses_v6}
  */
  readonly nxdomainRedirectAddressesV6?: string[];
  /**
  * The Time To Live (TTL) value of the synthetic DNS responses resulted from NXDOMAIN redirection. The TTL value is a 32-bit unsigned integer that represents the TTL in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#nxdomain_redirect_ttl DataNiosDnsView#nxdomain_redirect_ttl}
  */
  readonly nxdomainRedirectTtl?: number;
  /**
  * The names of the Ruleset objects assigned at the grid level for NXDOMAIN redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#nxdomain_rulesets DataNiosDnsView#nxdomain_rulesets}
  */
  readonly nxdomainRulesets?: string[];
  /**
  * Determines if recursion is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#recursion DataNiosDnsView#recursion}
  */
  readonly recursion?: boolean | cdktf.IResolvable;
  /**
  * The response rate limiting settings for the DNS view. This feature is used to limit the number of responses sent to a client in a given time period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#response_rate_limiting DataNiosDnsView#response_rate_limiting}
  */
  readonly responseRateLimiting?: DataNiosDnsViewResultResponseRateLimiting;
  /**
  * Determines the type of root name servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#root_name_server_type DataNiosDnsView#root_name_server_type}
  */
  readonly rootNameServerType?: string;
  /**
  * Enables the appliance to ignore RPZ-IP triggers with prefix lengths less than the specified minimum prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#rpz_drop_ip_rule_enabled DataNiosDnsView#rpz_drop_ip_rule_enabled}
  */
  readonly rpzDropIpRuleEnabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum prefix length for IPv4 RPZ-IP triggers. The appliance ignores RPZ-IP triggers with prefix lengths less than the specified minimum IPv4 prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#rpz_drop_ip_rule_min_prefix_length_ipv4 DataNiosDnsView#rpz_drop_ip_rule_min_prefix_length_ipv4}
  */
  readonly rpzDropIpRuleMinPrefixLengthIpv4?: number;
  /**
  * The minimum prefix length for IPv6 RPZ-IP triggers. The appliance ignores RPZ-IP triggers with prefix lengths less than the specified minimum IPv6 prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#rpz_drop_ip_rule_min_prefix_length_ipv6 DataNiosDnsView#rpz_drop_ip_rule_min_prefix_length_ipv6}
  */
  readonly rpzDropIpRuleMinPrefixLengthIpv6?: number;
  /**
  * The flag that indicates whether recursive RPZ lookups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#rpz_qname_wait_recurse DataNiosDnsView#rpz_qname_wait_recurse}
  */
  readonly rpzQnameWaitRecurse?: boolean | cdktf.IResolvable;
  /**
  * Scavenging settings for the DNS view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#scavenging_settings DataNiosDnsView#scavenging_settings}
  */
  readonly scavengingSettings?: DataNiosDnsViewResultScavengingSettings;
  /**
  * A sort list that determines the order of IP addresses in responses sent to DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#sortlist DataNiosDnsView#sortlist}
  */
  readonly sortlist?: DataNiosDnsViewResultSortlistStruct[] | cdktf.IResolvable;
  /**
  * Use flag for: blacklist_action , blacklist_log_query, blacklist_redirect_addresses, blacklist_redirect_ttl, blacklist_rulesets, enable_blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_blacklist DataNiosDnsView#use_blacklist}
  */
  readonly useBlacklist?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_force_creation_timestamp_update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_ddns_force_creation_timestamp_update DataNiosDnsView#use_ddns_force_creation_timestamp_update}
  */
  readonly useDdnsForceCreationTimestampUpdate?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_restrict_patterns_list , ddns_restrict_patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_ddns_patterns_restriction DataNiosDnsView#use_ddns_patterns_restriction}
  */
  readonly useDdnsPatternsRestriction?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_restrict_secure , ddns_principal_tracking, ddns_principal_group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_ddns_principal_security DataNiosDnsView#use_ddns_principal_security}
  */
  readonly useDdnsPrincipalSecurity?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_restrict_protected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_ddns_restrict_protected DataNiosDnsView#use_ddns_restrict_protected}
  */
  readonly useDdnsRestrictProtected?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_restrict_static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_ddns_restrict_static DataNiosDnsView#use_ddns_restrict_static}
  */
  readonly useDdnsRestrictStatic?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: dns64_enabled , dns64_groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_dns64 DataNiosDnsView#use_dns64}
  */
  readonly useDns64?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: dnssec_enabled , dnssec_expired_signatures_enabled, dnssec_validation_enabled, dnssec_trusted_keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_dnssec DataNiosDnsView#use_dnssec}
  */
  readonly useDnssec?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: edns_udp_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_edns_udp_size DataNiosDnsView#use_edns_udp_size}
  */
  readonly useEdnsUdpSize?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: filter_aaaa , filter_aaaa_list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_filter_aaaa DataNiosDnsView#use_filter_aaaa}
  */
  readonly useFilterAaaa?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: fixed_rrset_order_fqdns , enable_fixed_rrset_order_fqdns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_fixed_rrset_order_fqdns DataNiosDnsView#use_fixed_rrset_order_fqdns}
  */
  readonly useFixedRrsetOrderFqdns?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: forwarders , forward_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_forwarders DataNiosDnsView#use_forwarders}
  */
  readonly useForwarders?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: max_cache_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_max_cache_ttl DataNiosDnsView#use_max_cache_ttl}
  */
  readonly useMaxCacheTtl?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: max_ncache_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_max_ncache_ttl DataNiosDnsView#use_max_ncache_ttl}
  */
  readonly useMaxNcacheTtl?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: max_udp_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_max_udp_size DataNiosDnsView#use_max_udp_size}
  */
  readonly useMaxUdpSize?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: nxdomain_redirect , nxdomain_redirect_addresses, nxdomain_redirect_addresses_v6, nxdomain_redirect_ttl, nxdomain_log_query, nxdomain_rulesets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_nxdomain_redirect DataNiosDnsView#use_nxdomain_redirect}
  */
  readonly useNxdomainRedirect?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: recursion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_recursion DataNiosDnsView#use_recursion}
  */
  readonly useRecursion?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: response_rate_limiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_response_rate_limiting DataNiosDnsView#use_response_rate_limiting}
  */
  readonly useResponseRateLimiting?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: custom_root_name_servers , root_name_server_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_root_name_server DataNiosDnsView#use_root_name_server}
  */
  readonly useRootNameServer?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: rpz_drop_ip_rule_enabled , rpz_drop_ip_rule_min_prefix_length_ipv4, rpz_drop_ip_rule_min_prefix_length_ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_rpz_drop_ip_rule DataNiosDnsView#use_rpz_drop_ip_rule}
  */
  readonly useRpzDropIpRule?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: rpz_qname_wait_recurse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_rpz_qname_wait_recurse DataNiosDnsView#use_rpz_qname_wait_recurse}
  */
  readonly useRpzQnameWaitRecurse?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: scavenging_settings , last_queried_acl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_scavenging_settings DataNiosDnsView#use_scavenging_settings}
  */
  readonly useScavengingSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: sortlist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#use_sortlist DataNiosDnsView#use_sortlist}
  */
  readonly useSortlist?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsViewResultToTerraform(struct?: DataNiosDnsViewResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blacklist_action: cdktf.stringToTerraform(struct!.blacklistAction),
    blacklist_log_query: cdktf.booleanToTerraform(struct!.blacklistLogQuery),
    blacklist_redirect_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blacklistRedirectAddresses),
    blacklist_redirect_ttl: cdktf.numberToTerraform(struct!.blacklistRedirectTtl),
    blacklist_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blacklistRulesets),
    comment: cdktf.stringToTerraform(struct!.comment),
    custom_root_name_servers: cdktf.listMapper(dataNiosDnsViewResultCustomRootNameServersToTerraform, false)(struct!.customRootNameServers),
    ddns_force_creation_timestamp_update: cdktf.booleanToTerraform(struct!.ddnsForceCreationTimestampUpdate),
    ddns_principal_group: cdktf.stringToTerraform(struct!.ddnsPrincipalGroup),
    ddns_principal_tracking: cdktf.booleanToTerraform(struct!.ddnsPrincipalTracking),
    ddns_restrict_patterns: cdktf.booleanToTerraform(struct!.ddnsRestrictPatterns),
    ddns_restrict_patterns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ddnsRestrictPatternsList),
    ddns_restrict_protected: cdktf.booleanToTerraform(struct!.ddnsRestrictProtected),
    ddns_restrict_secure: cdktf.booleanToTerraform(struct!.ddnsRestrictSecure),
    ddns_restrict_static: cdktf.booleanToTerraform(struct!.ddnsRestrictStatic),
    disable: cdktf.booleanToTerraform(struct!.disable),
    dns64_enabled: cdktf.booleanToTerraform(struct!.dns64Enabled),
    dns64_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns64Groups),
    dnssec_enabled: cdktf.booleanToTerraform(struct!.dnssecEnabled),
    dnssec_expired_signatures_enabled: cdktf.booleanToTerraform(struct!.dnssecExpiredSignaturesEnabled),
    dnssec_negative_trust_anchors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnssecNegativeTrustAnchors),
    dnssec_trusted_keys: cdktf.listMapper(dataNiosDnsViewResultDnssecTrustedKeysToTerraform, false)(struct!.dnssecTrustedKeys),
    dnssec_validation_enabled: cdktf.booleanToTerraform(struct!.dnssecValidationEnabled),
    edns_udp_size: cdktf.numberToTerraform(struct!.ednsUdpSize),
    enable_blacklist: cdktf.booleanToTerraform(struct!.enableBlacklist),
    enable_fixed_rrset_order_fqdns: cdktf.booleanToTerraform(struct!.enableFixedRrsetOrderFqdns),
    enable_match_recursive_only: cdktf.booleanToTerraform(struct!.enableMatchRecursiveOnly),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    filter_aaaa: cdktf.stringToTerraform(struct!.filterAaaa),
    filter_aaaa_list: cdktf.listMapper(dataNiosDnsViewResultFilterAaaaListStructToTerraform, false)(struct!.filterAaaaList),
    fixed_rrset_order_fqdns: cdktf.listMapper(dataNiosDnsViewResultFixedRrsetOrderFqdnsToTerraform, false)(struct!.fixedRrsetOrderFqdns),
    forward_only: cdktf.booleanToTerraform(struct!.forwardOnly),
    forwarders: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forwarders),
    last_queried_acl: cdktf.listMapper(dataNiosDnsViewResultLastQueriedAclToTerraform, false)(struct!.lastQueriedAcl),
    match_clients: cdktf.listMapper(dataNiosDnsViewResultMatchClientsToTerraform, false)(struct!.matchClients),
    match_destinations: cdktf.listMapper(dataNiosDnsViewResultMatchDestinationsToTerraform, false)(struct!.matchDestinations),
    max_cache_ttl: cdktf.numberToTerraform(struct!.maxCacheTtl),
    max_ncache_ttl: cdktf.numberToTerraform(struct!.maxNcacheTtl),
    max_udp_size: cdktf.numberToTerraform(struct!.maxUdpSize),
    name: cdktf.stringToTerraform(struct!.name),
    network_view: cdktf.stringToTerraform(struct!.networkView),
    notify_delay: cdktf.numberToTerraform(struct!.notifyDelay),
    nxdomain_log_query: cdktf.booleanToTerraform(struct!.nxdomainLogQuery),
    nxdomain_redirect: cdktf.booleanToTerraform(struct!.nxdomainRedirect),
    nxdomain_redirect_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nxdomainRedirectAddresses),
    nxdomain_redirect_addresses_v6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nxdomainRedirectAddressesV6),
    nxdomain_redirect_ttl: cdktf.numberToTerraform(struct!.nxdomainRedirectTtl),
    nxdomain_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nxdomainRulesets),
    recursion: cdktf.booleanToTerraform(struct!.recursion),
    response_rate_limiting: dataNiosDnsViewResultResponseRateLimitingToTerraform(struct!.responseRateLimiting),
    root_name_server_type: cdktf.stringToTerraform(struct!.rootNameServerType),
    rpz_drop_ip_rule_enabled: cdktf.booleanToTerraform(struct!.rpzDropIpRuleEnabled),
    rpz_drop_ip_rule_min_prefix_length_ipv4: cdktf.numberToTerraform(struct!.rpzDropIpRuleMinPrefixLengthIpv4),
    rpz_drop_ip_rule_min_prefix_length_ipv6: cdktf.numberToTerraform(struct!.rpzDropIpRuleMinPrefixLengthIpv6),
    rpz_qname_wait_recurse: cdktf.booleanToTerraform(struct!.rpzQnameWaitRecurse),
    scavenging_settings: dataNiosDnsViewResultScavengingSettingsToTerraform(struct!.scavengingSettings),
    sortlist: cdktf.listMapper(dataNiosDnsViewResultSortlistStructToTerraform, false)(struct!.sortlist),
    use_blacklist: cdktf.booleanToTerraform(struct!.useBlacklist),
    use_ddns_force_creation_timestamp_update: cdktf.booleanToTerraform(struct!.useDdnsForceCreationTimestampUpdate),
    use_ddns_patterns_restriction: cdktf.booleanToTerraform(struct!.useDdnsPatternsRestriction),
    use_ddns_principal_security: cdktf.booleanToTerraform(struct!.useDdnsPrincipalSecurity),
    use_ddns_restrict_protected: cdktf.booleanToTerraform(struct!.useDdnsRestrictProtected),
    use_ddns_restrict_static: cdktf.booleanToTerraform(struct!.useDdnsRestrictStatic),
    use_dns64: cdktf.booleanToTerraform(struct!.useDns64),
    use_dnssec: cdktf.booleanToTerraform(struct!.useDnssec),
    use_edns_udp_size: cdktf.booleanToTerraform(struct!.useEdnsUdpSize),
    use_filter_aaaa: cdktf.booleanToTerraform(struct!.useFilterAaaa),
    use_fixed_rrset_order_fqdns: cdktf.booleanToTerraform(struct!.useFixedRrsetOrderFqdns),
    use_forwarders: cdktf.booleanToTerraform(struct!.useForwarders),
    use_max_cache_ttl: cdktf.booleanToTerraform(struct!.useMaxCacheTtl),
    use_max_ncache_ttl: cdktf.booleanToTerraform(struct!.useMaxNcacheTtl),
    use_max_udp_size: cdktf.booleanToTerraform(struct!.useMaxUdpSize),
    use_nxdomain_redirect: cdktf.booleanToTerraform(struct!.useNxdomainRedirect),
    use_recursion: cdktf.booleanToTerraform(struct!.useRecursion),
    use_response_rate_limiting: cdktf.booleanToTerraform(struct!.useResponseRateLimiting),
    use_root_name_server: cdktf.booleanToTerraform(struct!.useRootNameServer),
    use_rpz_drop_ip_rule: cdktf.booleanToTerraform(struct!.useRpzDropIpRule),
    use_rpz_qname_wait_recurse: cdktf.booleanToTerraform(struct!.useRpzQnameWaitRecurse),
    use_scavenging_settings: cdktf.booleanToTerraform(struct!.useScavengingSettings),
    use_sortlist: cdktf.booleanToTerraform(struct!.useSortlist),
  }
}


export function dataNiosDnsViewResultToHclTerraform(struct?: DataNiosDnsViewResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blacklist_action: {
      value: cdktf.stringToHclTerraform(struct!.blacklistAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blacklist_log_query: {
      value: cdktf.booleanToHclTerraform(struct!.blacklistLogQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blacklist_redirect_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blacklistRedirectAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    blacklist_redirect_ttl: {
      value: cdktf.numberToHclTerraform(struct!.blacklistRedirectTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blacklist_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blacklistRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_root_name_servers: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultCustomRootNameServersToHclTerraform, false)(struct!.customRootNameServers),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultCustomRootNameServersList",
    },
    ddns_force_creation_timestamp_update: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsForceCreationTimestampUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_principal_group: {
      value: cdktf.stringToHclTerraform(struct!.ddnsPrincipalGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_principal_tracking: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsPrincipalTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_restrict_patterns: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsRestrictPatterns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_restrict_patterns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ddnsRestrictPatternsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ddns_restrict_protected: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsRestrictProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_restrict_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsRestrictSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_restrict_static: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsRestrictStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns64_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dns64Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns64_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns64Groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dnssec_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dnssecEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dnssec_expired_signatures_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dnssecExpiredSignaturesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dnssec_negative_trust_anchors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnssecNegativeTrustAnchors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dnssec_trusted_keys: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultDnssecTrustedKeysToHclTerraform, false)(struct!.dnssecTrustedKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultDnssecTrustedKeysList",
    },
    dnssec_validation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dnssecValidationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edns_udp_size: {
      value: cdktf.numberToHclTerraform(struct!.ednsUdpSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_blacklist: {
      value: cdktf.booleanToHclTerraform(struct!.enableBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_fixed_rrset_order_fqdns: {
      value: cdktf.booleanToHclTerraform(struct!.enableFixedRrsetOrderFqdns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_match_recursive_only: {
      value: cdktf.booleanToHclTerraform(struct!.enableMatchRecursiveOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    filter_aaaa: {
      value: cdktf.stringToHclTerraform(struct!.filterAaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_aaaa_list: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultFilterAaaaListStructToHclTerraform, false)(struct!.filterAaaaList),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultFilterAaaaListStructList",
    },
    fixed_rrset_order_fqdns: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultFixedRrsetOrderFqdnsToHclTerraform, false)(struct!.fixedRrsetOrderFqdns),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultFixedRrsetOrderFqdnsList",
    },
    forward_only: {
      value: cdktf.booleanToHclTerraform(struct!.forwardOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarders: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forwarders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    last_queried_acl: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultLastQueriedAclToHclTerraform, false)(struct!.lastQueriedAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultLastQueriedAclList",
    },
    match_clients: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultMatchClientsToHclTerraform, false)(struct!.matchClients),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultMatchClientsList",
    },
    match_destinations: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultMatchDestinationsToHclTerraform, false)(struct!.matchDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultMatchDestinationsList",
    },
    max_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.maxCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ncache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.maxNcacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_udp_size: {
      value: cdktf.numberToHclTerraform(struct!.maxUdpSize),
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
    network_view: {
      value: cdktf.stringToHclTerraform(struct!.networkView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_delay: {
      value: cdktf.numberToHclTerraform(struct!.notifyDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nxdomain_log_query: {
      value: cdktf.booleanToHclTerraform(struct!.nxdomainLogQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nxdomain_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.nxdomainRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nxdomain_redirect_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nxdomainRedirectAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nxdomain_redirect_addresses_v6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nxdomainRedirectAddressesV6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nxdomain_redirect_ttl: {
      value: cdktf.numberToHclTerraform(struct!.nxdomainRedirectTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nxdomain_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nxdomainRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recursion: {
      value: cdktf.booleanToHclTerraform(struct!.recursion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_rate_limiting: {
      value: dataNiosDnsViewResultResponseRateLimitingToHclTerraform(struct!.responseRateLimiting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDnsViewResultResponseRateLimiting",
    },
    root_name_server_type: {
      value: cdktf.stringToHclTerraform(struct!.rootNameServerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpz_drop_ip_rule_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rpzDropIpRuleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rpz_drop_ip_rule_min_prefix_length_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.rpzDropIpRuleMinPrefixLengthIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_drop_ip_rule_min_prefix_length_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.rpzDropIpRuleMinPrefixLengthIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_qname_wait_recurse: {
      value: cdktf.booleanToHclTerraform(struct!.rpzQnameWaitRecurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scavenging_settings: {
      value: dataNiosDnsViewResultScavengingSettingsToHclTerraform(struct!.scavengingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDnsViewResultScavengingSettings",
    },
    sortlist: {
      value: cdktf.listMapperHcl(dataNiosDnsViewResultSortlistStructToHclTerraform, false)(struct!.sortlist),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsViewResultSortlistStructList",
    },
    use_blacklist: {
      value: cdktf.booleanToHclTerraform(struct!.useBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_force_creation_timestamp_update: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsForceCreationTimestampUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_patterns_restriction: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsPatternsRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_principal_security: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsPrincipalSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_restrict_protected: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsRestrictProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_restrict_static: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsRestrictStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_dns64: {
      value: cdktf.booleanToHclTerraform(struct!.useDns64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_dnssec: {
      value: cdktf.booleanToHclTerraform(struct!.useDnssec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_edns_udp_size: {
      value: cdktf.booleanToHclTerraform(struct!.useEdnsUdpSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_filter_aaaa: {
      value: cdktf.booleanToHclTerraform(struct!.useFilterAaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_fixed_rrset_order_fqdns: {
      value: cdktf.booleanToHclTerraform(struct!.useFixedRrsetOrderFqdns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_forwarders: {
      value: cdktf.booleanToHclTerraform(struct!.useForwarders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_max_cache_ttl: {
      value: cdktf.booleanToHclTerraform(struct!.useMaxCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_max_ncache_ttl: {
      value: cdktf.booleanToHclTerraform(struct!.useMaxNcacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_max_udp_size: {
      value: cdktf.booleanToHclTerraform(struct!.useMaxUdpSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_nxdomain_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.useNxdomainRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_recursion: {
      value: cdktf.booleanToHclTerraform(struct!.useRecursion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_response_rate_limiting: {
      value: cdktf.booleanToHclTerraform(struct!.useResponseRateLimiting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_root_name_server: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNameServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_rpz_drop_ip_rule: {
      value: cdktf.booleanToHclTerraform(struct!.useRpzDropIpRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_rpz_qname_wait_recurse: {
      value: cdktf.booleanToHclTerraform(struct!.useRpzQnameWaitRecurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_scavenging_settings: {
      value: cdktf.booleanToHclTerraform(struct!.useScavengingSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_sortlist: {
      value: cdktf.booleanToHclTerraform(struct!.useSortlist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsViewResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNiosDnsViewResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blacklistAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistAction = this._blacklistAction;
    }
    if (this._blacklistLogQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistLogQuery = this._blacklistLogQuery;
    }
    if (this._blacklistRedirectAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistRedirectAddresses = this._blacklistRedirectAddresses;
    }
    if (this._blacklistRedirectTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistRedirectTtl = this._blacklistRedirectTtl;
    }
    if (this._blacklistRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistRulesets = this._blacklistRulesets;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._customRootNameServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRootNameServers = this._customRootNameServers?.internalValue;
    }
    if (this._ddnsForceCreationTimestampUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsForceCreationTimestampUpdate = this._ddnsForceCreationTimestampUpdate;
    }
    if (this._ddnsPrincipalGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsPrincipalGroup = this._ddnsPrincipalGroup;
    }
    if (this._ddnsPrincipalTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsPrincipalTracking = this._ddnsPrincipalTracking;
    }
    if (this._ddnsRestrictPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictPatterns = this._ddnsRestrictPatterns;
    }
    if (this._ddnsRestrictPatternsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictPatternsList = this._ddnsRestrictPatternsList;
    }
    if (this._ddnsRestrictProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictProtected = this._ddnsRestrictProtected;
    }
    if (this._ddnsRestrictSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictSecure = this._ddnsRestrictSecure;
    }
    if (this._ddnsRestrictStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictStatic = this._ddnsRestrictStatic;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._dns64Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns64Enabled = this._dns64Enabled;
    }
    if (this._dns64Groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns64Groups = this._dns64Groups;
    }
    if (this._dnssecEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecEnabled = this._dnssecEnabled;
    }
    if (this._dnssecExpiredSignaturesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecExpiredSignaturesEnabled = this._dnssecExpiredSignaturesEnabled;
    }
    if (this._dnssecNegativeTrustAnchors !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecNegativeTrustAnchors = this._dnssecNegativeTrustAnchors;
    }
    if (this._dnssecTrustedKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecTrustedKeys = this._dnssecTrustedKeys?.internalValue;
    }
    if (this._dnssecValidationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecValidationEnabled = this._dnssecValidationEnabled;
    }
    if (this._ednsUdpSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsUdpSize = this._ednsUdpSize;
    }
    if (this._enableBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBlacklist = this._enableBlacklist;
    }
    if (this._enableFixedRrsetOrderFqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFixedRrsetOrderFqdns = this._enableFixedRrsetOrderFqdns;
    }
    if (this._enableMatchRecursiveOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMatchRecursiveOnly = this._enableMatchRecursiveOnly;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._filterAaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAaaa = this._filterAaaa;
    }
    if (this._filterAaaaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAaaaList = this._filterAaaaList?.internalValue;
    }
    if (this._fixedRrsetOrderFqdns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedRrsetOrderFqdns = this._fixedRrsetOrderFqdns?.internalValue;
    }
    if (this._forwardOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardOnly = this._forwardOnly;
    }
    if (this._forwarders !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwarders = this._forwarders;
    }
    if (this._lastQueriedAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastQueriedAcl = this._lastQueriedAcl?.internalValue;
    }
    if (this._matchClients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchClients = this._matchClients?.internalValue;
    }
    if (this._matchDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDestinations = this._matchDestinations?.internalValue;
    }
    if (this._maxCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCacheTtl = this._maxCacheTtl;
    }
    if (this._maxNcacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNcacheTtl = this._maxNcacheTtl;
    }
    if (this._maxUdpSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUdpSize = this._maxUdpSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkView !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkView = this._networkView;
    }
    if (this._notifyDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyDelay = this._notifyDelay;
    }
    if (this._nxdomainLogQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainLogQuery = this._nxdomainLogQuery;
    }
    if (this._nxdomainRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainRedirect = this._nxdomainRedirect;
    }
    if (this._nxdomainRedirectAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainRedirectAddresses = this._nxdomainRedirectAddresses;
    }
    if (this._nxdomainRedirectAddressesV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainRedirectAddressesV6 = this._nxdomainRedirectAddressesV6;
    }
    if (this._nxdomainRedirectTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainRedirectTtl = this._nxdomainRedirectTtl;
    }
    if (this._nxdomainRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainRulesets = this._nxdomainRulesets;
    }
    if (this._recursion !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursion = this._recursion;
    }
    if (this._responseRateLimiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseRateLimiting = this._responseRateLimiting?.internalValue;
    }
    if (this._rootNameServerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootNameServerType = this._rootNameServerType;
    }
    if (this._rpzDropIpRuleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzDropIpRuleEnabled = this._rpzDropIpRuleEnabled;
    }
    if (this._rpzDropIpRuleMinPrefixLengthIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzDropIpRuleMinPrefixLengthIpv4 = this._rpzDropIpRuleMinPrefixLengthIpv4;
    }
    if (this._rpzDropIpRuleMinPrefixLengthIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzDropIpRuleMinPrefixLengthIpv6 = this._rpzDropIpRuleMinPrefixLengthIpv6;
    }
    if (this._rpzQnameWaitRecurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzQnameWaitRecurse = this._rpzQnameWaitRecurse;
    }
    if (this._scavengingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scavengingSettings = this._scavengingSettings?.internalValue;
    }
    if (this._sortlist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortlist = this._sortlist?.internalValue;
    }
    if (this._useBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBlacklist = this._useBlacklist;
    }
    if (this._useDdnsForceCreationTimestampUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsForceCreationTimestampUpdate = this._useDdnsForceCreationTimestampUpdate;
    }
    if (this._useDdnsPatternsRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsPatternsRestriction = this._useDdnsPatternsRestriction;
    }
    if (this._useDdnsPrincipalSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsPrincipalSecurity = this._useDdnsPrincipalSecurity;
    }
    if (this._useDdnsRestrictProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsRestrictProtected = this._useDdnsRestrictProtected;
    }
    if (this._useDdnsRestrictStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsRestrictStatic = this._useDdnsRestrictStatic;
    }
    if (this._useDns64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDns64 = this._useDns64;
    }
    if (this._useDnssec !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDnssec = this._useDnssec;
    }
    if (this._useEdnsUdpSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEdnsUdpSize = this._useEdnsUdpSize;
    }
    if (this._useFilterAaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFilterAaaa = this._useFilterAaaa;
    }
    if (this._useFixedRrsetOrderFqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFixedRrsetOrderFqdns = this._useFixedRrsetOrderFqdns;
    }
    if (this._useForwarders !== undefined) {
      hasAnyValues = true;
      internalValueResult.useForwarders = this._useForwarders;
    }
    if (this._useMaxCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMaxCacheTtl = this._useMaxCacheTtl;
    }
    if (this._useMaxNcacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMaxNcacheTtl = this._useMaxNcacheTtl;
    }
    if (this._useMaxUdpSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMaxUdpSize = this._useMaxUdpSize;
    }
    if (this._useNxdomainRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNxdomainRedirect = this._useNxdomainRedirect;
    }
    if (this._useRecursion !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecursion = this._useRecursion;
    }
    if (this._useResponseRateLimiting !== undefined) {
      hasAnyValues = true;
      internalValueResult.useResponseRateLimiting = this._useResponseRateLimiting;
    }
    if (this._useRootNameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRootNameServer = this._useRootNameServer;
    }
    if (this._useRpzDropIpRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRpzDropIpRule = this._useRpzDropIpRule;
    }
    if (this._useRpzQnameWaitRecurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRpzQnameWaitRecurse = this._useRpzQnameWaitRecurse;
    }
    if (this._useScavengingSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.useScavengingSettings = this._useScavengingSettings;
    }
    if (this._useSortlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSortlist = this._useSortlist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsViewResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blacklistAction = undefined;
      this._blacklistLogQuery = undefined;
      this._blacklistRedirectAddresses = undefined;
      this._blacklistRedirectTtl = undefined;
      this._blacklistRulesets = undefined;
      this._comment = undefined;
      this._customRootNameServers.internalValue = undefined;
      this._ddnsForceCreationTimestampUpdate = undefined;
      this._ddnsPrincipalGroup = undefined;
      this._ddnsPrincipalTracking = undefined;
      this._ddnsRestrictPatterns = undefined;
      this._ddnsRestrictPatternsList = undefined;
      this._ddnsRestrictProtected = undefined;
      this._ddnsRestrictSecure = undefined;
      this._ddnsRestrictStatic = undefined;
      this._disable = undefined;
      this._dns64Enabled = undefined;
      this._dns64Groups = undefined;
      this._dnssecEnabled = undefined;
      this._dnssecExpiredSignaturesEnabled = undefined;
      this._dnssecNegativeTrustAnchors = undefined;
      this._dnssecTrustedKeys.internalValue = undefined;
      this._dnssecValidationEnabled = undefined;
      this._ednsUdpSize = undefined;
      this._enableBlacklist = undefined;
      this._enableFixedRrsetOrderFqdns = undefined;
      this._enableMatchRecursiveOnly = undefined;
      this._extattrs = undefined;
      this._filterAaaa = undefined;
      this._filterAaaaList.internalValue = undefined;
      this._fixedRrsetOrderFqdns.internalValue = undefined;
      this._forwardOnly = undefined;
      this._forwarders = undefined;
      this._lastQueriedAcl.internalValue = undefined;
      this._matchClients.internalValue = undefined;
      this._matchDestinations.internalValue = undefined;
      this._maxCacheTtl = undefined;
      this._maxNcacheTtl = undefined;
      this._maxUdpSize = undefined;
      this._name = undefined;
      this._networkView = undefined;
      this._notifyDelay = undefined;
      this._nxdomainLogQuery = undefined;
      this._nxdomainRedirect = undefined;
      this._nxdomainRedirectAddresses = undefined;
      this._nxdomainRedirectAddressesV6 = undefined;
      this._nxdomainRedirectTtl = undefined;
      this._nxdomainRulesets = undefined;
      this._recursion = undefined;
      this._responseRateLimiting.internalValue = undefined;
      this._rootNameServerType = undefined;
      this._rpzDropIpRuleEnabled = undefined;
      this._rpzDropIpRuleMinPrefixLengthIpv4 = undefined;
      this._rpzDropIpRuleMinPrefixLengthIpv6 = undefined;
      this._rpzQnameWaitRecurse = undefined;
      this._scavengingSettings.internalValue = undefined;
      this._sortlist.internalValue = undefined;
      this._useBlacklist = undefined;
      this._useDdnsForceCreationTimestampUpdate = undefined;
      this._useDdnsPatternsRestriction = undefined;
      this._useDdnsPrincipalSecurity = undefined;
      this._useDdnsRestrictProtected = undefined;
      this._useDdnsRestrictStatic = undefined;
      this._useDns64 = undefined;
      this._useDnssec = undefined;
      this._useEdnsUdpSize = undefined;
      this._useFilterAaaa = undefined;
      this._useFixedRrsetOrderFqdns = undefined;
      this._useForwarders = undefined;
      this._useMaxCacheTtl = undefined;
      this._useMaxNcacheTtl = undefined;
      this._useMaxUdpSize = undefined;
      this._useNxdomainRedirect = undefined;
      this._useRecursion = undefined;
      this._useResponseRateLimiting = undefined;
      this._useRootNameServer = undefined;
      this._useRpzDropIpRule = undefined;
      this._useRpzQnameWaitRecurse = undefined;
      this._useScavengingSettings = undefined;
      this._useSortlist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blacklistAction = value.blacklistAction;
      this._blacklistLogQuery = value.blacklistLogQuery;
      this._blacklistRedirectAddresses = value.blacklistRedirectAddresses;
      this._blacklistRedirectTtl = value.blacklistRedirectTtl;
      this._blacklistRulesets = value.blacklistRulesets;
      this._comment = value.comment;
      this._customRootNameServers.internalValue = value.customRootNameServers;
      this._ddnsForceCreationTimestampUpdate = value.ddnsForceCreationTimestampUpdate;
      this._ddnsPrincipalGroup = value.ddnsPrincipalGroup;
      this._ddnsPrincipalTracking = value.ddnsPrincipalTracking;
      this._ddnsRestrictPatterns = value.ddnsRestrictPatterns;
      this._ddnsRestrictPatternsList = value.ddnsRestrictPatternsList;
      this._ddnsRestrictProtected = value.ddnsRestrictProtected;
      this._ddnsRestrictSecure = value.ddnsRestrictSecure;
      this._ddnsRestrictStatic = value.ddnsRestrictStatic;
      this._disable = value.disable;
      this._dns64Enabled = value.dns64Enabled;
      this._dns64Groups = value.dns64Groups;
      this._dnssecEnabled = value.dnssecEnabled;
      this._dnssecExpiredSignaturesEnabled = value.dnssecExpiredSignaturesEnabled;
      this._dnssecNegativeTrustAnchors = value.dnssecNegativeTrustAnchors;
      this._dnssecTrustedKeys.internalValue = value.dnssecTrustedKeys;
      this._dnssecValidationEnabled = value.dnssecValidationEnabled;
      this._ednsUdpSize = value.ednsUdpSize;
      this._enableBlacklist = value.enableBlacklist;
      this._enableFixedRrsetOrderFqdns = value.enableFixedRrsetOrderFqdns;
      this._enableMatchRecursiveOnly = value.enableMatchRecursiveOnly;
      this._extattrs = value.extattrs;
      this._filterAaaa = value.filterAaaa;
      this._filterAaaaList.internalValue = value.filterAaaaList;
      this._fixedRrsetOrderFqdns.internalValue = value.fixedRrsetOrderFqdns;
      this._forwardOnly = value.forwardOnly;
      this._forwarders = value.forwarders;
      this._lastQueriedAcl.internalValue = value.lastQueriedAcl;
      this._matchClients.internalValue = value.matchClients;
      this._matchDestinations.internalValue = value.matchDestinations;
      this._maxCacheTtl = value.maxCacheTtl;
      this._maxNcacheTtl = value.maxNcacheTtl;
      this._maxUdpSize = value.maxUdpSize;
      this._name = value.name;
      this._networkView = value.networkView;
      this._notifyDelay = value.notifyDelay;
      this._nxdomainLogQuery = value.nxdomainLogQuery;
      this._nxdomainRedirect = value.nxdomainRedirect;
      this._nxdomainRedirectAddresses = value.nxdomainRedirectAddresses;
      this._nxdomainRedirectAddressesV6 = value.nxdomainRedirectAddressesV6;
      this._nxdomainRedirectTtl = value.nxdomainRedirectTtl;
      this._nxdomainRulesets = value.nxdomainRulesets;
      this._recursion = value.recursion;
      this._responseRateLimiting.internalValue = value.responseRateLimiting;
      this._rootNameServerType = value.rootNameServerType;
      this._rpzDropIpRuleEnabled = value.rpzDropIpRuleEnabled;
      this._rpzDropIpRuleMinPrefixLengthIpv4 = value.rpzDropIpRuleMinPrefixLengthIpv4;
      this._rpzDropIpRuleMinPrefixLengthIpv6 = value.rpzDropIpRuleMinPrefixLengthIpv6;
      this._rpzQnameWaitRecurse = value.rpzQnameWaitRecurse;
      this._scavengingSettings.internalValue = value.scavengingSettings;
      this._sortlist.internalValue = value.sortlist;
      this._useBlacklist = value.useBlacklist;
      this._useDdnsForceCreationTimestampUpdate = value.useDdnsForceCreationTimestampUpdate;
      this._useDdnsPatternsRestriction = value.useDdnsPatternsRestriction;
      this._useDdnsPrincipalSecurity = value.useDdnsPrincipalSecurity;
      this._useDdnsRestrictProtected = value.useDdnsRestrictProtected;
      this._useDdnsRestrictStatic = value.useDdnsRestrictStatic;
      this._useDns64 = value.useDns64;
      this._useDnssec = value.useDnssec;
      this._useEdnsUdpSize = value.useEdnsUdpSize;
      this._useFilterAaaa = value.useFilterAaaa;
      this._useFixedRrsetOrderFqdns = value.useFixedRrsetOrderFqdns;
      this._useForwarders = value.useForwarders;
      this._useMaxCacheTtl = value.useMaxCacheTtl;
      this._useMaxNcacheTtl = value.useMaxNcacheTtl;
      this._useMaxUdpSize = value.useMaxUdpSize;
      this._useNxdomainRedirect = value.useNxdomainRedirect;
      this._useRecursion = value.useRecursion;
      this._useResponseRateLimiting = value.useResponseRateLimiting;
      this._useRootNameServer = value.useRootNameServer;
      this._useRpzDropIpRule = value.useRpzDropIpRule;
      this._useRpzQnameWaitRecurse = value.useRpzQnameWaitRecurse;
      this._useScavengingSettings = value.useScavengingSettings;
      this._useSortlist = value.useSortlist;
    }
  }

  // blacklist_action - computed: true, optional: true, required: false
  private _blacklistAction?: string; 
  public get blacklistAction() {
    return this.getStringAttribute('blacklist_action');
  }
  public set blacklistAction(value: string) {
    this._blacklistAction = value;
  }
  public resetBlacklistAction() {
    this._blacklistAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistActionInput() {
    return this._blacklistAction;
  }

  // blacklist_log_query - computed: true, optional: true, required: false
  private _blacklistLogQuery?: boolean | cdktf.IResolvable; 
  public get blacklistLogQuery() {
    return this.getBooleanAttribute('blacklist_log_query');
  }
  public set blacklistLogQuery(value: boolean | cdktf.IResolvable) {
    this._blacklistLogQuery = value;
  }
  public resetBlacklistLogQuery() {
    this._blacklistLogQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistLogQueryInput() {
    return this._blacklistLogQuery;
  }

  // blacklist_redirect_addresses - computed: true, optional: true, required: false
  private _blacklistRedirectAddresses?: string[]; 
  public get blacklistRedirectAddresses() {
    return this.getListAttribute('blacklist_redirect_addresses');
  }
  public set blacklistRedirectAddresses(value: string[]) {
    this._blacklistRedirectAddresses = value;
  }
  public resetBlacklistRedirectAddresses() {
    this._blacklistRedirectAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistRedirectAddressesInput() {
    return this._blacklistRedirectAddresses;
  }

  // blacklist_redirect_ttl - computed: true, optional: true, required: false
  private _blacklistRedirectTtl?: number; 
  public get blacklistRedirectTtl() {
    return this.getNumberAttribute('blacklist_redirect_ttl');
  }
  public set blacklistRedirectTtl(value: number) {
    this._blacklistRedirectTtl = value;
  }
  public resetBlacklistRedirectTtl() {
    this._blacklistRedirectTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistRedirectTtlInput() {
    return this._blacklistRedirectTtl;
  }

  // blacklist_rulesets - computed: true, optional: true, required: false
  private _blacklistRulesets?: string[]; 
  public get blacklistRulesets() {
    return this.getListAttribute('blacklist_rulesets');
  }
  public set blacklistRulesets(value: string[]) {
    this._blacklistRulesets = value;
  }
  public resetBlacklistRulesets() {
    this._blacklistRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistRulesetsInput() {
    return this._blacklistRulesets;
  }

  // cloud_info - computed: true, optional: false, required: false
  private _cloudInfo = new DataNiosDnsViewResultCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }

  // comment - computed: true, optional: true, required: false
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

  // custom_root_name_servers - computed: true, optional: true, required: false
  private _customRootNameServers = new DataNiosDnsViewResultCustomRootNameServersList(this, "custom_root_name_servers", false);
  public get customRootNameServers() {
    return this._customRootNameServers;
  }
  public putCustomRootNameServers(value: DataNiosDnsViewResultCustomRootNameServers[] | cdktf.IResolvable) {
    this._customRootNameServers.internalValue = value;
  }
  public resetCustomRootNameServers() {
    this._customRootNameServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootNameServersInput() {
    return this._customRootNameServers.internalValue;
  }

  // ddns_force_creation_timestamp_update - computed: true, optional: true, required: false
  private _ddnsForceCreationTimestampUpdate?: boolean | cdktf.IResolvable; 
  public get ddnsForceCreationTimestampUpdate() {
    return this.getBooleanAttribute('ddns_force_creation_timestamp_update');
  }
  public set ddnsForceCreationTimestampUpdate(value: boolean | cdktf.IResolvable) {
    this._ddnsForceCreationTimestampUpdate = value;
  }
  public resetDdnsForceCreationTimestampUpdate() {
    this._ddnsForceCreationTimestampUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsForceCreationTimestampUpdateInput() {
    return this._ddnsForceCreationTimestampUpdate;
  }

  // ddns_principal_group - computed: true, optional: true, required: false
  private _ddnsPrincipalGroup?: string; 
  public get ddnsPrincipalGroup() {
    return this.getStringAttribute('ddns_principal_group');
  }
  public set ddnsPrincipalGroup(value: string) {
    this._ddnsPrincipalGroup = value;
  }
  public resetDdnsPrincipalGroup() {
    this._ddnsPrincipalGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPrincipalGroupInput() {
    return this._ddnsPrincipalGroup;
  }

  // ddns_principal_tracking - computed: true, optional: true, required: false
  private _ddnsPrincipalTracking?: boolean | cdktf.IResolvable; 
  public get ddnsPrincipalTracking() {
    return this.getBooleanAttribute('ddns_principal_tracking');
  }
  public set ddnsPrincipalTracking(value: boolean | cdktf.IResolvable) {
    this._ddnsPrincipalTracking = value;
  }
  public resetDdnsPrincipalTracking() {
    this._ddnsPrincipalTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPrincipalTrackingInput() {
    return this._ddnsPrincipalTracking;
  }

  // ddns_restrict_patterns - computed: true, optional: true, required: false
  private _ddnsRestrictPatterns?: boolean | cdktf.IResolvable; 
  public get ddnsRestrictPatterns() {
    return this.getBooleanAttribute('ddns_restrict_patterns');
  }
  public set ddnsRestrictPatterns(value: boolean | cdktf.IResolvable) {
    this._ddnsRestrictPatterns = value;
  }
  public resetDdnsRestrictPatterns() {
    this._ddnsRestrictPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictPatternsInput() {
    return this._ddnsRestrictPatterns;
  }

  // ddns_restrict_patterns_list - computed: true, optional: true, required: false
  private _ddnsRestrictPatternsList?: string[]; 
  public get ddnsRestrictPatternsList() {
    return this.getListAttribute('ddns_restrict_patterns_list');
  }
  public set ddnsRestrictPatternsList(value: string[]) {
    this._ddnsRestrictPatternsList = value;
  }
  public resetDdnsRestrictPatternsList() {
    this._ddnsRestrictPatternsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictPatternsListInput() {
    return this._ddnsRestrictPatternsList;
  }

  // ddns_restrict_protected - computed: true, optional: true, required: false
  private _ddnsRestrictProtected?: boolean | cdktf.IResolvable; 
  public get ddnsRestrictProtected() {
    return this.getBooleanAttribute('ddns_restrict_protected');
  }
  public set ddnsRestrictProtected(value: boolean | cdktf.IResolvable) {
    this._ddnsRestrictProtected = value;
  }
  public resetDdnsRestrictProtected() {
    this._ddnsRestrictProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictProtectedInput() {
    return this._ddnsRestrictProtected;
  }

  // ddns_restrict_secure - computed: true, optional: true, required: false
  private _ddnsRestrictSecure?: boolean | cdktf.IResolvable; 
  public get ddnsRestrictSecure() {
    return this.getBooleanAttribute('ddns_restrict_secure');
  }
  public set ddnsRestrictSecure(value: boolean | cdktf.IResolvable) {
    this._ddnsRestrictSecure = value;
  }
  public resetDdnsRestrictSecure() {
    this._ddnsRestrictSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictSecureInput() {
    return this._ddnsRestrictSecure;
  }

  // ddns_restrict_static - computed: true, optional: true, required: false
  private _ddnsRestrictStatic?: boolean | cdktf.IResolvable; 
  public get ddnsRestrictStatic() {
    return this.getBooleanAttribute('ddns_restrict_static');
  }
  public set ddnsRestrictStatic(value: boolean | cdktf.IResolvable) {
    this._ddnsRestrictStatic = value;
  }
  public resetDdnsRestrictStatic() {
    this._ddnsRestrictStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictStaticInput() {
    return this._ddnsRestrictStatic;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns64_enabled - computed: true, optional: true, required: false
  private _dns64Enabled?: boolean | cdktf.IResolvable; 
  public get dns64Enabled() {
    return this.getBooleanAttribute('dns64_enabled');
  }
  public set dns64Enabled(value: boolean | cdktf.IResolvable) {
    this._dns64Enabled = value;
  }
  public resetDns64Enabled() {
    this._dns64Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64EnabledInput() {
    return this._dns64Enabled;
  }

  // dns64_groups - computed: true, optional: true, required: false
  private _dns64Groups?: string[]; 
  public get dns64Groups() {
    return this.getListAttribute('dns64_groups');
  }
  public set dns64Groups(value: string[]) {
    this._dns64Groups = value;
  }
  public resetDns64Groups() {
    this._dns64Groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64GroupsInput() {
    return this._dns64Groups;
  }

  // dnssec_enabled - computed: true, optional: true, required: false
  private _dnssecEnabled?: boolean | cdktf.IResolvable; 
  public get dnssecEnabled() {
    return this.getBooleanAttribute('dnssec_enabled');
  }
  public set dnssecEnabled(value: boolean | cdktf.IResolvable) {
    this._dnssecEnabled = value;
  }
  public resetDnssecEnabled() {
    this._dnssecEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecEnabledInput() {
    return this._dnssecEnabled;
  }

  // dnssec_expired_signatures_enabled - computed: true, optional: true, required: false
  private _dnssecExpiredSignaturesEnabled?: boolean | cdktf.IResolvable; 
  public get dnssecExpiredSignaturesEnabled() {
    return this.getBooleanAttribute('dnssec_expired_signatures_enabled');
  }
  public set dnssecExpiredSignaturesEnabled(value: boolean | cdktf.IResolvable) {
    this._dnssecExpiredSignaturesEnabled = value;
  }
  public resetDnssecExpiredSignaturesEnabled() {
    this._dnssecExpiredSignaturesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecExpiredSignaturesEnabledInput() {
    return this._dnssecExpiredSignaturesEnabled;
  }

  // dnssec_negative_trust_anchors - computed: true, optional: true, required: false
  private _dnssecNegativeTrustAnchors?: string[]; 
  public get dnssecNegativeTrustAnchors() {
    return this.getListAttribute('dnssec_negative_trust_anchors');
  }
  public set dnssecNegativeTrustAnchors(value: string[]) {
    this._dnssecNegativeTrustAnchors = value;
  }
  public resetDnssecNegativeTrustAnchors() {
    this._dnssecNegativeTrustAnchors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecNegativeTrustAnchorsInput() {
    return this._dnssecNegativeTrustAnchors;
  }

  // dnssec_trusted_keys - computed: true, optional: true, required: false
  private _dnssecTrustedKeys = new DataNiosDnsViewResultDnssecTrustedKeysList(this, "dnssec_trusted_keys", false);
  public get dnssecTrustedKeys() {
    return this._dnssecTrustedKeys;
  }
  public putDnssecTrustedKeys(value: DataNiosDnsViewResultDnssecTrustedKeys[] | cdktf.IResolvable) {
    this._dnssecTrustedKeys.internalValue = value;
  }
  public resetDnssecTrustedKeys() {
    this._dnssecTrustedKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecTrustedKeysInput() {
    return this._dnssecTrustedKeys.internalValue;
  }

  // dnssec_validation_enabled - computed: true, optional: true, required: false
  private _dnssecValidationEnabled?: boolean | cdktf.IResolvable; 
  public get dnssecValidationEnabled() {
    return this.getBooleanAttribute('dnssec_validation_enabled');
  }
  public set dnssecValidationEnabled(value: boolean | cdktf.IResolvable) {
    this._dnssecValidationEnabled = value;
  }
  public resetDnssecValidationEnabled() {
    this._dnssecValidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidationEnabledInput() {
    return this._dnssecValidationEnabled;
  }

  // edns_udp_size - computed: true, optional: true, required: false
  private _ednsUdpSize?: number; 
  public get ednsUdpSize() {
    return this.getNumberAttribute('edns_udp_size');
  }
  public set ednsUdpSize(value: number) {
    this._ednsUdpSize = value;
  }
  public resetEdnsUdpSize() {
    this._ednsUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsUdpSizeInput() {
    return this._ednsUdpSize;
  }

  // enable_blacklist - computed: true, optional: true, required: false
  private _enableBlacklist?: boolean | cdktf.IResolvable; 
  public get enableBlacklist() {
    return this.getBooleanAttribute('enable_blacklist');
  }
  public set enableBlacklist(value: boolean | cdktf.IResolvable) {
    this._enableBlacklist = value;
  }
  public resetEnableBlacklist() {
    this._enableBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBlacklistInput() {
    return this._enableBlacklist;
  }

  // enable_fixed_rrset_order_fqdns - computed: true, optional: true, required: false
  private _enableFixedRrsetOrderFqdns?: boolean | cdktf.IResolvable; 
  public get enableFixedRrsetOrderFqdns() {
    return this.getBooleanAttribute('enable_fixed_rrset_order_fqdns');
  }
  public set enableFixedRrsetOrderFqdns(value: boolean | cdktf.IResolvable) {
    this._enableFixedRrsetOrderFqdns = value;
  }
  public resetEnableFixedRrsetOrderFqdns() {
    this._enableFixedRrsetOrderFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFixedRrsetOrderFqdnsInput() {
    return this._enableFixedRrsetOrderFqdns;
  }

  // enable_match_recursive_only - computed: true, optional: true, required: false
  private _enableMatchRecursiveOnly?: boolean | cdktf.IResolvable; 
  public get enableMatchRecursiveOnly() {
    return this.getBooleanAttribute('enable_match_recursive_only');
  }
  public set enableMatchRecursiveOnly(value: boolean | cdktf.IResolvable) {
    this._enableMatchRecursiveOnly = value;
  }
  public resetEnableMatchRecursiveOnly() {
    this._enableMatchRecursiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMatchRecursiveOnlyInput() {
    return this._enableMatchRecursiveOnly;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // filter_aaaa - computed: true, optional: true, required: false
  private _filterAaaa?: string; 
  public get filterAaaa() {
    return this.getStringAttribute('filter_aaaa');
  }
  public set filterAaaa(value: string) {
    this._filterAaaa = value;
  }
  public resetFilterAaaa() {
    this._filterAaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaInput() {
    return this._filterAaaa;
  }

  // filter_aaaa_list - computed: true, optional: true, required: false
  private _filterAaaaList = new DataNiosDnsViewResultFilterAaaaListStructList(this, "filter_aaaa_list", false);
  public get filterAaaaList() {
    return this._filterAaaaList;
  }
  public putFilterAaaaList(value: DataNiosDnsViewResultFilterAaaaListStruct[] | cdktf.IResolvable) {
    this._filterAaaaList.internalValue = value;
  }
  public resetFilterAaaaList() {
    this._filterAaaaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaListInput() {
    return this._filterAaaaList.internalValue;
  }

  // fixed_rrset_order_fqdns - computed: true, optional: true, required: false
  private _fixedRrsetOrderFqdns = new DataNiosDnsViewResultFixedRrsetOrderFqdnsList(this, "fixed_rrset_order_fqdns", false);
  public get fixedRrsetOrderFqdns() {
    return this._fixedRrsetOrderFqdns;
  }
  public putFixedRrsetOrderFqdns(value: DataNiosDnsViewResultFixedRrsetOrderFqdns[] | cdktf.IResolvable) {
    this._fixedRrsetOrderFqdns.internalValue = value;
  }
  public resetFixedRrsetOrderFqdns() {
    this._fixedRrsetOrderFqdns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedRrsetOrderFqdnsInput() {
    return this._fixedRrsetOrderFqdns.internalValue;
  }

  // forward_only - computed: true, optional: true, required: false
  private _forwardOnly?: boolean | cdktf.IResolvable; 
  public get forwardOnly() {
    return this.getBooleanAttribute('forward_only');
  }
  public set forwardOnly(value: boolean | cdktf.IResolvable) {
    this._forwardOnly = value;
  }
  public resetForwardOnly() {
    this._forwardOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardOnlyInput() {
    return this._forwardOnly;
  }

  // forwarders - computed: true, optional: true, required: false
  private _forwarders?: string[]; 
  public get forwarders() {
    return this.getListAttribute('forwarders');
  }
  public set forwarders(value: string[]) {
    this._forwarders = value;
  }
  public resetForwarders() {
    this._forwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // last_queried_acl - computed: true, optional: true, required: false
  private _lastQueriedAcl = new DataNiosDnsViewResultLastQueriedAclList(this, "last_queried_acl", false);
  public get lastQueriedAcl() {
    return this._lastQueriedAcl;
  }
  public putLastQueriedAcl(value: DataNiosDnsViewResultLastQueriedAcl[] | cdktf.IResolvable) {
    this._lastQueriedAcl.internalValue = value;
  }
  public resetLastQueriedAcl() {
    this._lastQueriedAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastQueriedAclInput() {
    return this._lastQueriedAcl.internalValue;
  }

  // match_clients - computed: true, optional: true, required: false
  private _matchClients = new DataNiosDnsViewResultMatchClientsList(this, "match_clients", false);
  public get matchClients() {
    return this._matchClients;
  }
  public putMatchClients(value: DataNiosDnsViewResultMatchClients[] | cdktf.IResolvable) {
    this._matchClients.internalValue = value;
  }
  public resetMatchClients() {
    this._matchClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClientsInput() {
    return this._matchClients.internalValue;
  }

  // match_destinations - computed: true, optional: true, required: false
  private _matchDestinations = new DataNiosDnsViewResultMatchDestinationsList(this, "match_destinations", false);
  public get matchDestinations() {
    return this._matchDestinations;
  }
  public putMatchDestinations(value: DataNiosDnsViewResultMatchDestinations[] | cdktf.IResolvable) {
    this._matchDestinations.internalValue = value;
  }
  public resetMatchDestinations() {
    this._matchDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDestinationsInput() {
    return this._matchDestinations.internalValue;
  }

  // max_cache_ttl - computed: true, optional: true, required: false
  private _maxCacheTtl?: number; 
  public get maxCacheTtl() {
    return this.getNumberAttribute('max_cache_ttl');
  }
  public set maxCacheTtl(value: number) {
    this._maxCacheTtl = value;
  }
  public resetMaxCacheTtl() {
    this._maxCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheTtlInput() {
    return this._maxCacheTtl;
  }

  // max_ncache_ttl - computed: true, optional: true, required: false
  private _maxNcacheTtl?: number; 
  public get maxNcacheTtl() {
    return this.getNumberAttribute('max_ncache_ttl');
  }
  public set maxNcacheTtl(value: number) {
    this._maxNcacheTtl = value;
  }
  public resetMaxNcacheTtl() {
    this._maxNcacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNcacheTtlInput() {
    return this._maxNcacheTtl;
  }

  // max_udp_size - computed: true, optional: true, required: false
  private _maxUdpSize?: number; 
  public get maxUdpSize() {
    return this.getNumberAttribute('max_udp_size');
  }
  public set maxUdpSize(value: number) {
    this._maxUdpSize = value;
  }
  public resetMaxUdpSize() {
    this._maxUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUdpSizeInput() {
    return this._maxUdpSize;
  }

  // name - computed: true, optional: false, required: true
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

  // network_view - computed: true, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // notify_delay - computed: true, optional: true, required: false
  private _notifyDelay?: number; 
  public get notifyDelay() {
    return this.getNumberAttribute('notify_delay');
  }
  public set notifyDelay(value: number) {
    this._notifyDelay = value;
  }
  public resetNotifyDelay() {
    this._notifyDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDelayInput() {
    return this._notifyDelay;
  }

  // nxdomain_log_query - computed: true, optional: true, required: false
  private _nxdomainLogQuery?: boolean | cdktf.IResolvable; 
  public get nxdomainLogQuery() {
    return this.getBooleanAttribute('nxdomain_log_query');
  }
  public set nxdomainLogQuery(value: boolean | cdktf.IResolvable) {
    this._nxdomainLogQuery = value;
  }
  public resetNxdomainLogQuery() {
    this._nxdomainLogQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainLogQueryInput() {
    return this._nxdomainLogQuery;
  }

  // nxdomain_redirect - computed: true, optional: true, required: false
  private _nxdomainRedirect?: boolean | cdktf.IResolvable; 
  public get nxdomainRedirect() {
    return this.getBooleanAttribute('nxdomain_redirect');
  }
  public set nxdomainRedirect(value: boolean | cdktf.IResolvable) {
    this._nxdomainRedirect = value;
  }
  public resetNxdomainRedirect() {
    this._nxdomainRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainRedirectInput() {
    return this._nxdomainRedirect;
  }

  // nxdomain_redirect_addresses - computed: true, optional: true, required: false
  private _nxdomainRedirectAddresses?: string[]; 
  public get nxdomainRedirectAddresses() {
    return this.getListAttribute('nxdomain_redirect_addresses');
  }
  public set nxdomainRedirectAddresses(value: string[]) {
    this._nxdomainRedirectAddresses = value;
  }
  public resetNxdomainRedirectAddresses() {
    this._nxdomainRedirectAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainRedirectAddressesInput() {
    return this._nxdomainRedirectAddresses;
  }

  // nxdomain_redirect_addresses_v6 - computed: true, optional: true, required: false
  private _nxdomainRedirectAddressesV6?: string[]; 
  public get nxdomainRedirectAddressesV6() {
    return this.getListAttribute('nxdomain_redirect_addresses_v6');
  }
  public set nxdomainRedirectAddressesV6(value: string[]) {
    this._nxdomainRedirectAddressesV6 = value;
  }
  public resetNxdomainRedirectAddressesV6() {
    this._nxdomainRedirectAddressesV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainRedirectAddressesV6Input() {
    return this._nxdomainRedirectAddressesV6;
  }

  // nxdomain_redirect_ttl - computed: true, optional: true, required: false
  private _nxdomainRedirectTtl?: number; 
  public get nxdomainRedirectTtl() {
    return this.getNumberAttribute('nxdomain_redirect_ttl');
  }
  public set nxdomainRedirectTtl(value: number) {
    this._nxdomainRedirectTtl = value;
  }
  public resetNxdomainRedirectTtl() {
    this._nxdomainRedirectTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainRedirectTtlInput() {
    return this._nxdomainRedirectTtl;
  }

  // nxdomain_rulesets - computed: true, optional: true, required: false
  private _nxdomainRulesets?: string[]; 
  public get nxdomainRulesets() {
    return this.getListAttribute('nxdomain_rulesets');
  }
  public set nxdomainRulesets(value: string[]) {
    this._nxdomainRulesets = value;
  }
  public resetNxdomainRulesets() {
    this._nxdomainRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainRulesetsInput() {
    return this._nxdomainRulesets;
  }

  // recursion - computed: true, optional: true, required: false
  private _recursion?: boolean | cdktf.IResolvable; 
  public get recursion() {
    return this.getBooleanAttribute('recursion');
  }
  public set recursion(value: boolean | cdktf.IResolvable) {
    this._recursion = value;
  }
  public resetRecursion() {
    this._recursion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionInput() {
    return this._recursion;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // response_rate_limiting - computed: true, optional: true, required: false
  private _responseRateLimiting = new DataNiosDnsViewResultResponseRateLimitingOutputReference(this, "response_rate_limiting");
  public get responseRateLimiting() {
    return this._responseRateLimiting;
  }
  public putResponseRateLimiting(value: DataNiosDnsViewResultResponseRateLimiting) {
    this._responseRateLimiting.internalValue = value;
  }
  public resetResponseRateLimiting() {
    this._responseRateLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseRateLimitingInput() {
    return this._responseRateLimiting.internalValue;
  }

  // root_name_server_type - computed: true, optional: true, required: false
  private _rootNameServerType?: string; 
  public get rootNameServerType() {
    return this.getStringAttribute('root_name_server_type');
  }
  public set rootNameServerType(value: string) {
    this._rootNameServerType = value;
  }
  public resetRootNameServerType() {
    this._rootNameServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootNameServerTypeInput() {
    return this._rootNameServerType;
  }

  // rpz_drop_ip_rule_enabled - computed: true, optional: true, required: false
  private _rpzDropIpRuleEnabled?: boolean | cdktf.IResolvable; 
  public get rpzDropIpRuleEnabled() {
    return this.getBooleanAttribute('rpz_drop_ip_rule_enabled');
  }
  public set rpzDropIpRuleEnabled(value: boolean | cdktf.IResolvable) {
    this._rpzDropIpRuleEnabled = value;
  }
  public resetRpzDropIpRuleEnabled() {
    this._rpzDropIpRuleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzDropIpRuleEnabledInput() {
    return this._rpzDropIpRuleEnabled;
  }

  // rpz_drop_ip_rule_min_prefix_length_ipv4 - computed: true, optional: true, required: false
  private _rpzDropIpRuleMinPrefixLengthIpv4?: number; 
  public get rpzDropIpRuleMinPrefixLengthIpv4() {
    return this.getNumberAttribute('rpz_drop_ip_rule_min_prefix_length_ipv4');
  }
  public set rpzDropIpRuleMinPrefixLengthIpv4(value: number) {
    this._rpzDropIpRuleMinPrefixLengthIpv4 = value;
  }
  public resetRpzDropIpRuleMinPrefixLengthIpv4() {
    this._rpzDropIpRuleMinPrefixLengthIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzDropIpRuleMinPrefixLengthIpv4Input() {
    return this._rpzDropIpRuleMinPrefixLengthIpv4;
  }

  // rpz_drop_ip_rule_min_prefix_length_ipv6 - computed: true, optional: true, required: false
  private _rpzDropIpRuleMinPrefixLengthIpv6?: number; 
  public get rpzDropIpRuleMinPrefixLengthIpv6() {
    return this.getNumberAttribute('rpz_drop_ip_rule_min_prefix_length_ipv6');
  }
  public set rpzDropIpRuleMinPrefixLengthIpv6(value: number) {
    this._rpzDropIpRuleMinPrefixLengthIpv6 = value;
  }
  public resetRpzDropIpRuleMinPrefixLengthIpv6() {
    this._rpzDropIpRuleMinPrefixLengthIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzDropIpRuleMinPrefixLengthIpv6Input() {
    return this._rpzDropIpRuleMinPrefixLengthIpv6;
  }

  // rpz_qname_wait_recurse - computed: true, optional: true, required: false
  private _rpzQnameWaitRecurse?: boolean | cdktf.IResolvable; 
  public get rpzQnameWaitRecurse() {
    return this.getBooleanAttribute('rpz_qname_wait_recurse');
  }
  public set rpzQnameWaitRecurse(value: boolean | cdktf.IResolvable) {
    this._rpzQnameWaitRecurse = value;
  }
  public resetRpzQnameWaitRecurse() {
    this._rpzQnameWaitRecurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzQnameWaitRecurseInput() {
    return this._rpzQnameWaitRecurse;
  }

  // scavenging_settings - computed: true, optional: true, required: false
  private _scavengingSettings = new DataNiosDnsViewResultScavengingSettingsOutputReference(this, "scavenging_settings");
  public get scavengingSettings() {
    return this._scavengingSettings;
  }
  public putScavengingSettings(value: DataNiosDnsViewResultScavengingSettings) {
    this._scavengingSettings.internalValue = value;
  }
  public resetScavengingSettings() {
    this._scavengingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scavengingSettingsInput() {
    return this._scavengingSettings.internalValue;
  }

  // sortlist - computed: true, optional: true, required: false
  private _sortlist = new DataNiosDnsViewResultSortlistStructList(this, "sortlist", false);
  public get sortlist() {
    return this._sortlist;
  }
  public putSortlist(value: DataNiosDnsViewResultSortlistStruct[] | cdktf.IResolvable) {
    this._sortlist.internalValue = value;
  }
  public resetSortlist() {
    this._sortlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortlistInput() {
    return this._sortlist.internalValue;
  }

  // use_blacklist - computed: true, optional: true, required: false
  private _useBlacklist?: boolean | cdktf.IResolvable; 
  public get useBlacklist() {
    return this.getBooleanAttribute('use_blacklist');
  }
  public set useBlacklist(value: boolean | cdktf.IResolvable) {
    this._useBlacklist = value;
  }
  public resetUseBlacklist() {
    this._useBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBlacklistInput() {
    return this._useBlacklist;
  }

  // use_ddns_force_creation_timestamp_update - computed: true, optional: true, required: false
  private _useDdnsForceCreationTimestampUpdate?: boolean | cdktf.IResolvable; 
  public get useDdnsForceCreationTimestampUpdate() {
    return this.getBooleanAttribute('use_ddns_force_creation_timestamp_update');
  }
  public set useDdnsForceCreationTimestampUpdate(value: boolean | cdktf.IResolvable) {
    this._useDdnsForceCreationTimestampUpdate = value;
  }
  public resetUseDdnsForceCreationTimestampUpdate() {
    this._useDdnsForceCreationTimestampUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsForceCreationTimestampUpdateInput() {
    return this._useDdnsForceCreationTimestampUpdate;
  }

  // use_ddns_patterns_restriction - computed: true, optional: true, required: false
  private _useDdnsPatternsRestriction?: boolean | cdktf.IResolvable; 
  public get useDdnsPatternsRestriction() {
    return this.getBooleanAttribute('use_ddns_patterns_restriction');
  }
  public set useDdnsPatternsRestriction(value: boolean | cdktf.IResolvable) {
    this._useDdnsPatternsRestriction = value;
  }
  public resetUseDdnsPatternsRestriction() {
    this._useDdnsPatternsRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsPatternsRestrictionInput() {
    return this._useDdnsPatternsRestriction;
  }

  // use_ddns_principal_security - computed: true, optional: true, required: false
  private _useDdnsPrincipalSecurity?: boolean | cdktf.IResolvable; 
  public get useDdnsPrincipalSecurity() {
    return this.getBooleanAttribute('use_ddns_principal_security');
  }
  public set useDdnsPrincipalSecurity(value: boolean | cdktf.IResolvable) {
    this._useDdnsPrincipalSecurity = value;
  }
  public resetUseDdnsPrincipalSecurity() {
    this._useDdnsPrincipalSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsPrincipalSecurityInput() {
    return this._useDdnsPrincipalSecurity;
  }

  // use_ddns_restrict_protected - computed: true, optional: true, required: false
  private _useDdnsRestrictProtected?: boolean | cdktf.IResolvable; 
  public get useDdnsRestrictProtected() {
    return this.getBooleanAttribute('use_ddns_restrict_protected');
  }
  public set useDdnsRestrictProtected(value: boolean | cdktf.IResolvable) {
    this._useDdnsRestrictProtected = value;
  }
  public resetUseDdnsRestrictProtected() {
    this._useDdnsRestrictProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsRestrictProtectedInput() {
    return this._useDdnsRestrictProtected;
  }

  // use_ddns_restrict_static - computed: true, optional: true, required: false
  private _useDdnsRestrictStatic?: boolean | cdktf.IResolvable; 
  public get useDdnsRestrictStatic() {
    return this.getBooleanAttribute('use_ddns_restrict_static');
  }
  public set useDdnsRestrictStatic(value: boolean | cdktf.IResolvable) {
    this._useDdnsRestrictStatic = value;
  }
  public resetUseDdnsRestrictStatic() {
    this._useDdnsRestrictStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsRestrictStaticInput() {
    return this._useDdnsRestrictStatic;
  }

  // use_dns64 - computed: true, optional: true, required: false
  private _useDns64?: boolean | cdktf.IResolvable; 
  public get useDns64() {
    return this.getBooleanAttribute('use_dns64');
  }
  public set useDns64(value: boolean | cdktf.IResolvable) {
    this._useDns64 = value;
  }
  public resetUseDns64() {
    this._useDns64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDns64Input() {
    return this._useDns64;
  }

  // use_dnssec - computed: true, optional: true, required: false
  private _useDnssec?: boolean | cdktf.IResolvable; 
  public get useDnssec() {
    return this.getBooleanAttribute('use_dnssec');
  }
  public set useDnssec(value: boolean | cdktf.IResolvable) {
    this._useDnssec = value;
  }
  public resetUseDnssec() {
    this._useDnssec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDnssecInput() {
    return this._useDnssec;
  }

  // use_edns_udp_size - computed: true, optional: true, required: false
  private _useEdnsUdpSize?: boolean | cdktf.IResolvable; 
  public get useEdnsUdpSize() {
    return this.getBooleanAttribute('use_edns_udp_size');
  }
  public set useEdnsUdpSize(value: boolean | cdktf.IResolvable) {
    this._useEdnsUdpSize = value;
  }
  public resetUseEdnsUdpSize() {
    this._useEdnsUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdnsUdpSizeInput() {
    return this._useEdnsUdpSize;
  }

  // use_filter_aaaa - computed: true, optional: true, required: false
  private _useFilterAaaa?: boolean | cdktf.IResolvable; 
  public get useFilterAaaa() {
    return this.getBooleanAttribute('use_filter_aaaa');
  }
  public set useFilterAaaa(value: boolean | cdktf.IResolvable) {
    this._useFilterAaaa = value;
  }
  public resetUseFilterAaaa() {
    this._useFilterAaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFilterAaaaInput() {
    return this._useFilterAaaa;
  }

  // use_fixed_rrset_order_fqdns - computed: true, optional: true, required: false
  private _useFixedRrsetOrderFqdns?: boolean | cdktf.IResolvable; 
  public get useFixedRrsetOrderFqdns() {
    return this.getBooleanAttribute('use_fixed_rrset_order_fqdns');
  }
  public set useFixedRrsetOrderFqdns(value: boolean | cdktf.IResolvable) {
    this._useFixedRrsetOrderFqdns = value;
  }
  public resetUseFixedRrsetOrderFqdns() {
    this._useFixedRrsetOrderFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFixedRrsetOrderFqdnsInput() {
    return this._useFixedRrsetOrderFqdns;
  }

  // use_forwarders - computed: true, optional: true, required: false
  private _useForwarders?: boolean | cdktf.IResolvable; 
  public get useForwarders() {
    return this.getBooleanAttribute('use_forwarders');
  }
  public set useForwarders(value: boolean | cdktf.IResolvable) {
    this._useForwarders = value;
  }
  public resetUseForwarders() {
    this._useForwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForwardersInput() {
    return this._useForwarders;
  }

  // use_max_cache_ttl - computed: true, optional: true, required: false
  private _useMaxCacheTtl?: boolean | cdktf.IResolvable; 
  public get useMaxCacheTtl() {
    return this.getBooleanAttribute('use_max_cache_ttl');
  }
  public set useMaxCacheTtl(value: boolean | cdktf.IResolvable) {
    this._useMaxCacheTtl = value;
  }
  public resetUseMaxCacheTtl() {
    this._useMaxCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMaxCacheTtlInput() {
    return this._useMaxCacheTtl;
  }

  // use_max_ncache_ttl - computed: true, optional: true, required: false
  private _useMaxNcacheTtl?: boolean | cdktf.IResolvable; 
  public get useMaxNcacheTtl() {
    return this.getBooleanAttribute('use_max_ncache_ttl');
  }
  public set useMaxNcacheTtl(value: boolean | cdktf.IResolvable) {
    this._useMaxNcacheTtl = value;
  }
  public resetUseMaxNcacheTtl() {
    this._useMaxNcacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMaxNcacheTtlInput() {
    return this._useMaxNcacheTtl;
  }

  // use_max_udp_size - computed: true, optional: true, required: false
  private _useMaxUdpSize?: boolean | cdktf.IResolvable; 
  public get useMaxUdpSize() {
    return this.getBooleanAttribute('use_max_udp_size');
  }
  public set useMaxUdpSize(value: boolean | cdktf.IResolvable) {
    this._useMaxUdpSize = value;
  }
  public resetUseMaxUdpSize() {
    this._useMaxUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMaxUdpSizeInput() {
    return this._useMaxUdpSize;
  }

  // use_nxdomain_redirect - computed: true, optional: true, required: false
  private _useNxdomainRedirect?: boolean | cdktf.IResolvable; 
  public get useNxdomainRedirect() {
    return this.getBooleanAttribute('use_nxdomain_redirect');
  }
  public set useNxdomainRedirect(value: boolean | cdktf.IResolvable) {
    this._useNxdomainRedirect = value;
  }
  public resetUseNxdomainRedirect() {
    this._useNxdomainRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNxdomainRedirectInput() {
    return this._useNxdomainRedirect;
  }

  // use_recursion - computed: true, optional: true, required: false
  private _useRecursion?: boolean | cdktf.IResolvable; 
  public get useRecursion() {
    return this.getBooleanAttribute('use_recursion');
  }
  public set useRecursion(value: boolean | cdktf.IResolvable) {
    this._useRecursion = value;
  }
  public resetUseRecursion() {
    this._useRecursion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecursionInput() {
    return this._useRecursion;
  }

  // use_response_rate_limiting - computed: true, optional: true, required: false
  private _useResponseRateLimiting?: boolean | cdktf.IResolvable; 
  public get useResponseRateLimiting() {
    return this.getBooleanAttribute('use_response_rate_limiting');
  }
  public set useResponseRateLimiting(value: boolean | cdktf.IResolvable) {
    this._useResponseRateLimiting = value;
  }
  public resetUseResponseRateLimiting() {
    this._useResponseRateLimiting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useResponseRateLimitingInput() {
    return this._useResponseRateLimiting;
  }

  // use_root_name_server - computed: true, optional: true, required: false
  private _useRootNameServer?: boolean | cdktf.IResolvable; 
  public get useRootNameServer() {
    return this.getBooleanAttribute('use_root_name_server');
  }
  public set useRootNameServer(value: boolean | cdktf.IResolvable) {
    this._useRootNameServer = value;
  }
  public resetUseRootNameServer() {
    this._useRootNameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRootNameServerInput() {
    return this._useRootNameServer;
  }

  // use_rpz_drop_ip_rule - computed: true, optional: true, required: false
  private _useRpzDropIpRule?: boolean | cdktf.IResolvable; 
  public get useRpzDropIpRule() {
    return this.getBooleanAttribute('use_rpz_drop_ip_rule');
  }
  public set useRpzDropIpRule(value: boolean | cdktf.IResolvable) {
    this._useRpzDropIpRule = value;
  }
  public resetUseRpzDropIpRule() {
    this._useRpzDropIpRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRpzDropIpRuleInput() {
    return this._useRpzDropIpRule;
  }

  // use_rpz_qname_wait_recurse - computed: true, optional: true, required: false
  private _useRpzQnameWaitRecurse?: boolean | cdktf.IResolvable; 
  public get useRpzQnameWaitRecurse() {
    return this.getBooleanAttribute('use_rpz_qname_wait_recurse');
  }
  public set useRpzQnameWaitRecurse(value: boolean | cdktf.IResolvable) {
    this._useRpzQnameWaitRecurse = value;
  }
  public resetUseRpzQnameWaitRecurse() {
    this._useRpzQnameWaitRecurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRpzQnameWaitRecurseInput() {
    return this._useRpzQnameWaitRecurse;
  }

  // use_scavenging_settings - computed: true, optional: true, required: false
  private _useScavengingSettings?: boolean | cdktf.IResolvable; 
  public get useScavengingSettings() {
    return this.getBooleanAttribute('use_scavenging_settings');
  }
  public set useScavengingSettings(value: boolean | cdktf.IResolvable) {
    this._useScavengingSettings = value;
  }
  public resetUseScavengingSettings() {
    this._useScavengingSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useScavengingSettingsInput() {
    return this._useScavengingSettings;
  }

  // use_sortlist - computed: true, optional: true, required: false
  private _useSortlist?: boolean | cdktf.IResolvable; 
  public get useSortlist() {
    return this.getBooleanAttribute('use_sortlist');
  }
  public set useSortlist(value: boolean | cdktf.IResolvable) {
    this._useSortlist = value;
  }
  public resetUseSortlist() {
    this._useSortlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSortlistInput() {
    return this._useSortlist;
  }
}

export class DataNiosDnsViewResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsViewResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsViewResultOutputReference {
    return new DataNiosDnsViewResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view nios_dns_view}
*/
export class DataNiosDnsView extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDnsView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDnsView to import
  * @param importFromId The id of the existing DataNiosDnsView that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDnsView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_view nios_dns_view} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDnsViewConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDnsViewConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_view',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosDnsViewResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
