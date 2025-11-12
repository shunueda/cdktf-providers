// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityDnsFilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#allow_dns_requests_on_rating_error DataFortisaseSecurityDnsFilterProfile#allow_dns_requests_on_rating_error}
  */
  readonly allowDnsRequestsOnRatingError?: string;
  /**
  * The direction of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#direction DataFortisaseSecurityDnsFilterProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#dns_translation_entries DataFortisaseSecurityDnsFilterProfile#dns_translation_entries}
  */
  readonly dnsTranslationEntries?: DataFortisaseSecurityDnsFilterProfileDnsTranslationEntries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#domain_filters DataFortisaseSecurityDnsFilterProfile#domain_filters}
  */
  readonly domainFilters?: DataFortisaseSecurityDnsFilterProfileDomainFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#domain_threat_feed_filters DataFortisaseSecurityDnsFilterProfile#domain_threat_feed_filters}
  */
  readonly domainThreatFeedFilters?: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#enable_all_logs DataFortisaseSecurityDnsFilterProfile#enable_all_logs}
  */
  readonly enableAllLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#enable_botnet_blocking DataFortisaseSecurityDnsFilterProfile#enable_botnet_blocking}
  */
  readonly enableBotnetBlocking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#enable_safe_search DataFortisaseSecurityDnsFilterProfile#enable_safe_search}
  */
  readonly enableSafeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#fortiguard_filters DataFortisaseSecurityDnsFilterProfile#fortiguard_filters}
  */
  readonly fortiguardFilters?: DataFortisaseSecurityDnsFilterProfileFortiguardFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#primary_key DataFortisaseSecurityDnsFilterProfile#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#use_for_edge_devices DataFortisaseSecurityDnsFilterProfile#use_for_edge_devices}
  */
  readonly useForEdgeDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#use_fortiguard_filters DataFortisaseSecurityDnsFilterProfile#use_fortiguard_filters}
  */
  readonly useFortiguardFilters?: string;
}
export interface DataFortisaseSecurityDnsFilterProfileDnsTranslationEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#dst DataFortisaseSecurityDnsFilterProfile#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#netmask DataFortisaseSecurityDnsFilterProfile#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#src DataFortisaseSecurityDnsFilterProfile#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#status DataFortisaseSecurityDnsFilterProfile#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesToTerraform(struct?: DataFortisaseSecurityDnsFilterProfileDnsTranslationEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst: cdktf.stringToTerraform(struct!.dst),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    src: cdktf.stringToTerraform(struct!.src),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesToHclTerraform(struct?: DataFortisaseSecurityDnsFilterProfileDnsTranslationEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst: {
      value: cdktf.stringToHclTerraform(struct!.dst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src: {
      value: cdktf.stringToHclTerraform(struct!.src),
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

export class DataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityDnsFilterProfileDnsTranslationEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._src !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDnsFilterProfileDnsTranslationEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dst = undefined;
      this._netmask = undefined;
      this._src = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dst = value.dst;
      this._netmask = value.netmask;
      this._src = value.src;
      this._status = value.status;
    }
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

export class DataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityDnsFilterProfileDnsTranslationEntries[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesOutputReference {
    return new DataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityDnsFilterProfileDomainFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#action DataFortisaseSecurityDnsFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#enabled DataFortisaseSecurityDnsFilterProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#type DataFortisaseSecurityDnsFilterProfile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#url DataFortisaseSecurityDnsFilterProfile#url}
  */
  readonly url?: string;
}

export function dataFortisaseSecurityDnsFilterProfileDomainFiltersToTerraform(struct?: DataFortisaseSecurityDnsFilterProfileDomainFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataFortisaseSecurityDnsFilterProfileDomainFiltersToHclTerraform(struct?: DataFortisaseSecurityDnsFilterProfileDomainFilters | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityDnsFilterProfileDomainFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityDnsFilterProfileDomainFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDnsFilterProfileDomainFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._type = value.type;
      this._url = value.url;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // type - computed: true, optional: true, required: false
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

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataFortisaseSecurityDnsFilterProfileDomainFiltersList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityDnsFilterProfileDomainFilters[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityDnsFilterProfileDomainFiltersOutputReference {
    return new DataFortisaseSecurityDnsFilterProfileDomainFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#datasource DataFortisaseSecurityDnsFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#primary_key DataFortisaseSecurityDnsFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategoryToTerraform(struct?: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategoryToHclTerraform(struct?: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#action DataFortisaseSecurityDnsFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#category DataFortisaseSecurityDnsFilterProfile#category}
  */
  readonly category?: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategory;
}

export function dataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersToTerraform(struct?: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: dataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategoryToTerraform(struct!.category),
  }
}


export function dataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersToHclTerraform(struct?: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFilters | cdktf.IResolvable): any {
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
      value: dataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category.internalValue = value.category;
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

  // category - computed: true, optional: true, required: false
  private _category = new DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}

export class DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFilters[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersOutputReference {
    return new DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#datasource DataFortisaseSecurityDnsFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#primary_key DataFortisaseSecurityDnsFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategoryToTerraform(struct?: DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategoryToHclTerraform(struct?: DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityDnsFilterProfileFortiguardFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#action DataFortisaseSecurityDnsFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#category DataFortisaseSecurityDnsFilterProfile#category}
  */
  readonly category?: DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategory;
}

export function dataFortisaseSecurityDnsFilterProfileFortiguardFiltersToTerraform(struct?: DataFortisaseSecurityDnsFilterProfileFortiguardFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: dataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategoryToTerraform(struct!.category),
  }
}


export function dataFortisaseSecurityDnsFilterProfileFortiguardFiltersToHclTerraform(struct?: DataFortisaseSecurityDnsFilterProfileFortiguardFilters | cdktf.IResolvable): any {
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
      value: dataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityDnsFilterProfileFortiguardFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityDnsFilterProfileFortiguardFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDnsFilterProfileFortiguardFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category.internalValue = value.category;
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

  // category - computed: true, optional: true, required: false
  private _category = new DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: DataFortisaseSecurityDnsFilterProfileFortiguardFiltersCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}

export class DataFortisaseSecurityDnsFilterProfileFortiguardFiltersList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityDnsFilterProfileFortiguardFilters[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityDnsFilterProfileFortiguardFiltersOutputReference {
    return new DataFortisaseSecurityDnsFilterProfileFortiguardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile fortisase_security_dns_filter_profile}
*/
export class DataFortisaseSecurityDnsFilterProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_dns_filter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityDnsFilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityDnsFilterProfile to import
  * @param importFromId The id of the existing DataFortisaseSecurityDnsFilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityDnsFilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_dns_filter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dns_filter_profile fortisase_security_dns_filter_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityDnsFilterProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityDnsFilterProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_dns_filter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
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
    this._allowDnsRequestsOnRatingError = config.allowDnsRequestsOnRatingError;
    this._direction = config.direction;
    this._dnsTranslationEntries.internalValue = config.dnsTranslationEntries;
    this._domainFilters.internalValue = config.domainFilters;
    this._domainThreatFeedFilters.internalValue = config.domainThreatFeedFilters;
    this._enableAllLogs = config.enableAllLogs;
    this._enableBotnetBlocking = config.enableBotnetBlocking;
    this._enableSafeSearch = config.enableSafeSearch;
    this._fortiguardFilters.internalValue = config.fortiguardFilters;
    this._primaryKey = config.primaryKey;
    this._useForEdgeDevices = config.useForEdgeDevices;
    this._useFortiguardFilters = config.useFortiguardFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_dns_requests_on_rating_error - computed: true, optional: true, required: false
  private _allowDnsRequestsOnRatingError?: string; 
  public get allowDnsRequestsOnRatingError() {
    return this.getStringAttribute('allow_dns_requests_on_rating_error');
  }
  public set allowDnsRequestsOnRatingError(value: string) {
    this._allowDnsRequestsOnRatingError = value;
  }
  public resetAllowDnsRequestsOnRatingError() {
    this._allowDnsRequestsOnRatingError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDnsRequestsOnRatingErrorInput() {
    return this._allowDnsRequestsOnRatingError;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // dns_translation_entries - computed: true, optional: true, required: false
  private _dnsTranslationEntries = new DataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesList(this, "dns_translation_entries", false);
  public get dnsTranslationEntries() {
    return this._dnsTranslationEntries;
  }
  public putDnsTranslationEntries(value: DataFortisaseSecurityDnsFilterProfileDnsTranslationEntries[] | cdktf.IResolvable) {
    this._dnsTranslationEntries.internalValue = value;
  }
  public resetDnsTranslationEntries() {
    this._dnsTranslationEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTranslationEntriesInput() {
    return this._dnsTranslationEntries.internalValue;
  }

  // domain_filters - computed: true, optional: true, required: false
  private _domainFilters = new DataFortisaseSecurityDnsFilterProfileDomainFiltersList(this, "domain_filters", false);
  public get domainFilters() {
    return this._domainFilters;
  }
  public putDomainFilters(value: DataFortisaseSecurityDnsFilterProfileDomainFilters[] | cdktf.IResolvable) {
    this._domainFilters.internalValue = value;
  }
  public resetDomainFilters() {
    this._domainFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFiltersInput() {
    return this._domainFilters.internalValue;
  }

  // domain_threat_feed_filters - computed: true, optional: true, required: false
  private _domainThreatFeedFilters = new DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersList(this, "domain_threat_feed_filters", false);
  public get domainThreatFeedFilters() {
    return this._domainThreatFeedFilters;
  }
  public putDomainThreatFeedFilters(value: DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFilters[] | cdktf.IResolvable) {
    this._domainThreatFeedFilters.internalValue = value;
  }
  public resetDomainThreatFeedFilters() {
    this._domainThreatFeedFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainThreatFeedFiltersInput() {
    return this._domainThreatFeedFilters.internalValue;
  }

  // enable_all_logs - computed: true, optional: true, required: false
  private _enableAllLogs?: string; 
  public get enableAllLogs() {
    return this.getStringAttribute('enable_all_logs');
  }
  public set enableAllLogs(value: string) {
    this._enableAllLogs = value;
  }
  public resetEnableAllLogs() {
    this._enableAllLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAllLogsInput() {
    return this._enableAllLogs;
  }

  // enable_botnet_blocking - computed: true, optional: true, required: false
  private _enableBotnetBlocking?: string; 
  public get enableBotnetBlocking() {
    return this.getStringAttribute('enable_botnet_blocking');
  }
  public set enableBotnetBlocking(value: string) {
    this._enableBotnetBlocking = value;
  }
  public resetEnableBotnetBlocking() {
    this._enableBotnetBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBotnetBlockingInput() {
    return this._enableBotnetBlocking;
  }

  // enable_safe_search - computed: true, optional: true, required: false
  private _enableSafeSearch?: string; 
  public get enableSafeSearch() {
    return this.getStringAttribute('enable_safe_search');
  }
  public set enableSafeSearch(value: string) {
    this._enableSafeSearch = value;
  }
  public resetEnableSafeSearch() {
    this._enableSafeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSafeSearchInput() {
    return this._enableSafeSearch;
  }

  // fortiguard_filters - computed: true, optional: true, required: false
  private _fortiguardFilters = new DataFortisaseSecurityDnsFilterProfileFortiguardFiltersList(this, "fortiguard_filters", false);
  public get fortiguardFilters() {
    return this._fortiguardFilters;
  }
  public putFortiguardFilters(value: DataFortisaseSecurityDnsFilterProfileFortiguardFilters[] | cdktf.IResolvable) {
    this._fortiguardFilters.internalValue = value;
  }
  public resetFortiguardFilters() {
    this._fortiguardFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardFiltersInput() {
    return this._fortiguardFilters.internalValue;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // use_for_edge_devices - computed: true, optional: true, required: false
  private _useForEdgeDevices?: boolean | cdktf.IResolvable; 
  public get useForEdgeDevices() {
    return this.getBooleanAttribute('use_for_edge_devices');
  }
  public set useForEdgeDevices(value: boolean | cdktf.IResolvable) {
    this._useForEdgeDevices = value;
  }
  public resetUseForEdgeDevices() {
    this._useForEdgeDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForEdgeDevicesInput() {
    return this._useForEdgeDevices;
  }

  // use_fortiguard_filters - computed: true, optional: true, required: false
  private _useFortiguardFilters?: string; 
  public get useFortiguardFilters() {
    return this.getStringAttribute('use_fortiguard_filters');
  }
  public set useFortiguardFilters(value: string) {
    this._useFortiguardFilters = value;
  }
  public resetUseFortiguardFilters() {
    this._useFortiguardFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFortiguardFiltersInput() {
    return this._useFortiguardFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_dns_requests_on_rating_error: cdktf.stringToTerraform(this._allowDnsRequestsOnRatingError),
      direction: cdktf.stringToTerraform(this._direction),
      dns_translation_entries: cdktf.listMapper(dataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesToTerraform, false)(this._dnsTranslationEntries.internalValue),
      domain_filters: cdktf.listMapper(dataFortisaseSecurityDnsFilterProfileDomainFiltersToTerraform, false)(this._domainFilters.internalValue),
      domain_threat_feed_filters: cdktf.listMapper(dataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersToTerraform, false)(this._domainThreatFeedFilters.internalValue),
      enable_all_logs: cdktf.stringToTerraform(this._enableAllLogs),
      enable_botnet_blocking: cdktf.stringToTerraform(this._enableBotnetBlocking),
      enable_safe_search: cdktf.stringToTerraform(this._enableSafeSearch),
      fortiguard_filters: cdktf.listMapper(dataFortisaseSecurityDnsFilterProfileFortiguardFiltersToTerraform, false)(this._fortiguardFilters.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      use_for_edge_devices: cdktf.booleanToTerraform(this._useForEdgeDevices),
      use_fortiguard_filters: cdktf.stringToTerraform(this._useFortiguardFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_dns_requests_on_rating_error: {
        value: cdktf.stringToHclTerraform(this._allowDnsRequestsOnRatingError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_translation_entries: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesToHclTerraform, false)(this._dnsTranslationEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityDnsFilterProfileDnsTranslationEntriesList",
      },
      domain_filters: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityDnsFilterProfileDomainFiltersToHclTerraform, false)(this._domainFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityDnsFilterProfileDomainFiltersList",
      },
      domain_threat_feed_filters: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersToHclTerraform, false)(this._domainThreatFeedFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityDnsFilterProfileDomainThreatFeedFiltersList",
      },
      enable_all_logs: {
        value: cdktf.stringToHclTerraform(this._enableAllLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_botnet_blocking: {
        value: cdktf.stringToHclTerraform(this._enableBotnetBlocking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_safe_search: {
        value: cdktf.stringToHclTerraform(this._enableSafeSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_filters: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityDnsFilterProfileFortiguardFiltersToHclTerraform, false)(this._fortiguardFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityDnsFilterProfileFortiguardFiltersList",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_for_edge_devices: {
        value: cdktf.booleanToHclTerraform(this._useForEdgeDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_fortiguard_filters: {
        value: cdktf.stringToHclTerraform(this._useFortiguardFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
