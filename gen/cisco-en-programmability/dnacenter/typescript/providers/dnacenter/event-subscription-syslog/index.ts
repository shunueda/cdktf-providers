// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventSubscriptionSyslogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#id EventSubscriptionSyslog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#parameters EventSubscriptionSyslog#parameters}
  */
  readonly parameters?: EventSubscriptionSyslogParameters[] | cdktf.IResolvable;
}
export interface EventSubscriptionSyslogItemFilterDomainsSubdomains {
}

export function eventSubscriptionSyslogItemFilterDomainsSubdomainsToTerraform(struct?: EventSubscriptionSyslogItemFilterDomainsSubdomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionSyslogItemFilterDomainsSubdomainsToHclTerraform(struct?: EventSubscriptionSyslogItemFilterDomainsSubdomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionSyslogItemFilterDomainsSubdomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogItemFilterDomainsSubdomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogItemFilterDomainsSubdomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // sub_domains - computed: true, optional: false, required: false
  public get subDomains() {
    return this.getListAttribute('sub_domains');
  }
}

export class EventSubscriptionSyslogItemFilterDomainsSubdomainsList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionSyslogItemFilterDomainsSubdomainsOutputReference {
    return new EventSubscriptionSyslogItemFilterDomainsSubdomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogItemFilter {
}

export function eventSubscriptionSyslogItemFilterToTerraform(struct?: EventSubscriptionSyslogItemFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionSyslogItemFilterToHclTerraform(struct?: EventSubscriptionSyslogItemFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionSyslogItemFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogItemFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogItemFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
  }

  // domains_subdomains - computed: true, optional: false, required: false
  private _domainsSubdomains = new EventSubscriptionSyslogItemFilterDomainsSubdomainsList(this, "domains_subdomains", false);
  public get domainsSubdomains() {
    return this._domainsSubdomains;
  }

  // event_ids - computed: true, optional: false, required: false
  public get eventIds() {
    return this.getListAttribute('event_ids');
  }

  // others - computed: true, optional: false, required: false
  public get others() {
    return this.getListAttribute('others');
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return this.getListAttribute('severities');
  }

  // site_ids - computed: true, optional: false, required: false
  public get siteIds() {
    return this.getListAttribute('site_ids');
  }

  // sources - computed: true, optional: false, required: false
  public get sources() {
    return this.getListAttribute('sources');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}

export class EventSubscriptionSyslogItemFilterList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionSyslogItemFilterOutputReference {
    return new EventSubscriptionSyslogItemFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfig {
}

export function eventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfigToTerraform(struct?: EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfigToHclTerraform(struct?: EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfigList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfigOutputReference {
    return new EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetails {
}

export function eventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsToTerraform(struct?: EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsToHclTerraform(struct?: EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // syslog_config - computed: true, optional: false, required: false
  private _syslogConfig = new EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsSyslogConfigList(this, "syslog_config", false);
  public get syslogConfig() {
    return this._syslogConfig;
  }
}

export class EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsOutputReference {
    return new EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogItemSubscriptionEndpoints {
}

export function eventSubscriptionSyslogItemSubscriptionEndpointsToTerraform(struct?: EventSubscriptionSyslogItemSubscriptionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionSyslogItemSubscriptionEndpointsToHclTerraform(struct?: EventSubscriptionSyslogItemSubscriptionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionSyslogItemSubscriptionEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogItemSubscriptionEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogItemSubscriptionEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // subscription_details - computed: true, optional: false, required: false
  private _subscriptionDetails = new EventSubscriptionSyslogItemSubscriptionEndpointsSubscriptionDetailsList(this, "subscription_details", false);
  public get subscriptionDetails() {
    return this._subscriptionDetails;
  }
}

export class EventSubscriptionSyslogItemSubscriptionEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionSyslogItemSubscriptionEndpointsOutputReference {
    return new EventSubscriptionSyslogItemSubscriptionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogItem {
}

export function eventSubscriptionSyslogItemToTerraform(struct?: EventSubscriptionSyslogItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventSubscriptionSyslogItemToHclTerraform(struct?: EventSubscriptionSyslogItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventSubscriptionSyslogItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new EventSubscriptionSyslogItemFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getStringAttribute('is_private');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // subscription_endpoints - computed: true, optional: false, required: false
  private _subscriptionEndpoints = new EventSubscriptionSyslogItemSubscriptionEndpointsList(this, "subscription_endpoints", false);
  public get subscriptionEndpoints() {
    return this._subscriptionEndpoints;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class EventSubscriptionSyslogItemList extends cdktf.ComplexList {

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
  public get(index: number): EventSubscriptionSyslogItemOutputReference {
    return new EventSubscriptionSyslogItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomains {
  /**
  * Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#domain EventSubscriptionSyslog#domain}
  */
  readonly domain?: string;
  /**
  * Sub Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#sub_domains EventSubscriptionSyslog#sub_domains}
  */
  readonly subDomains?: string[];
}

export function eventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsToTerraform(struct?: EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    sub_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subDomains),
  }
}


export function eventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsToHclTerraform(struct?: EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._subDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.subDomains = this._subDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._subDomains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._subDomains = value.subDomains;
    }
  }

  // domain - computed: true, optional: true, required: false
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

  // sub_domains - computed: true, optional: true, required: false
  private _subDomains?: string[]; 
  public get subDomains() {
    return this.getListAttribute('sub_domains');
  }
  public set subDomains(value: string[]) {
    this._subDomains = value;
  }
  public resetSubDomains() {
    this._subDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainsInput() {
    return this._subDomains;
  }
}

export class EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomains[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsOutputReference {
    return new EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogParametersPayloadFilter {
  /**
  * Categories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#categories EventSubscriptionSyslog#categories}
  */
  readonly categories?: string[];
  /**
  * Event Ids (Comma separated event ids)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#event_ids EventSubscriptionSyslog#event_ids}
  */
  readonly eventIds?: string[];
  /**
  * Severities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#severities EventSubscriptionSyslog#severities}
  */
  readonly severities?: string[];
  /**
  * Site Ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#site_ids EventSubscriptionSyslog#site_ids}
  */
  readonly siteIds?: string[];
  /**
  * Sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#sources EventSubscriptionSyslog#sources}
  */
  readonly sources?: string[];
  /**
  * Types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#types EventSubscriptionSyslog#types}
  */
  readonly types?: string[];
  /**
  * domains_subdomains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#domains_subdomains EventSubscriptionSyslog#domains_subdomains}
  */
  readonly domainsSubdomains?: EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomains[] | cdktf.IResolvable;
}

export function eventSubscriptionSyslogParametersPayloadFilterToTerraform(struct?: EventSubscriptionSyslogParametersPayloadFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    event_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventIds),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteIds),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    domains_subdomains: cdktf.listMapper(eventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsToTerraform, true)(struct!.domainsSubdomains),
  }
}


export function eventSubscriptionSyslogParametersPayloadFilterToHclTerraform(struct?: EventSubscriptionSyslogParametersPayloadFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domains_subdomains: {
      value: cdktf.listMapperHcl(eventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsToHclTerraform, true)(struct!.domainsSubdomains),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionSyslogParametersPayloadFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogParametersPayloadFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._eventIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventIds = this._eventIds;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._siteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteIds = this._siteIds;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._domainsSubdomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainsSubdomains = this._domainsSubdomains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogParametersPayloadFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categories = undefined;
      this._eventIds = undefined;
      this._severities = undefined;
      this._siteIds = undefined;
      this._sources = undefined;
      this._types = undefined;
      this._domainsSubdomains.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categories = value.categories;
      this._eventIds = value.eventIds;
      this._severities = value.severities;
      this._siteIds = value.siteIds;
      this._sources = value.sources;
      this._types = value.types;
      this._domainsSubdomains.internalValue = value.domainsSubdomains;
    }
  }

  // categories - computed: true, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // event_ids - computed: true, optional: true, required: false
  private _eventIds?: string[]; 
  public get eventIds() {
    return this.getListAttribute('event_ids');
  }
  public set eventIds(value: string[]) {
    this._eventIds = value;
  }
  public resetEventIds() {
    this._eventIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdsInput() {
    return this._eventIds;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // site_ids - computed: true, optional: true, required: false
  private _siteIds?: string[]; 
  public get siteIds() {
    return this.getListAttribute('site_ids');
  }
  public set siteIds(value: string[]) {
    this._siteIds = value;
  }
  public resetSiteIds() {
    this._siteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdsInput() {
    return this._siteIds;
  }

  // sources - computed: true, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // domains_subdomains - computed: false, optional: true, required: false
  private _domainsSubdomains = new EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomainsList(this, "domains_subdomains", false);
  public get domainsSubdomains() {
    return this._domainsSubdomains;
  }
  public putDomainsSubdomains(value: EventSubscriptionSyslogParametersPayloadFilterDomainsSubdomains[] | cdktf.IResolvable) {
    this._domainsSubdomains.internalValue = value;
  }
  public resetDomainsSubdomains() {
    this._domainsSubdomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsSubdomainsInput() {
    return this._domainsSubdomains.internalValue;
  }
}

export class EventSubscriptionSyslogParametersPayloadFilterList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionSyslogParametersPayloadFilter[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionSyslogParametersPayloadFilterOutputReference {
    return new EventSubscriptionSyslogParametersPayloadFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetails {
  /**
  * Connector Type (Must be SYSLOG)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#connector_type EventSubscriptionSyslog#connector_type}
  */
  readonly connectorType?: string;
}

export function eventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsToTerraform(struct?: EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
  }
}


export function eventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsToHclTerraform(struct?: EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorType = value.connectorType;
    }
  }

  // connector_type - computed: true, optional: true, required: false
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  public resetConnectorType() {
    this._connectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }
}

export class EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetails[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsOutputReference {
    return new EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogParametersPayloadSubscriptionEndpoints {
  /**
  * (From Get Syslog Subscription Details --> pick instanceId)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#instance_id EventSubscriptionSyslog#instance_id}
  */
  readonly instanceId?: string;
  /**
  * subscription_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#subscription_details EventSubscriptionSyslog#subscription_details}
  */
  readonly subscriptionDetails?: EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetails[] | cdktf.IResolvable;
}

export function eventSubscriptionSyslogParametersPayloadSubscriptionEndpointsToTerraform(struct?: EventSubscriptionSyslogParametersPayloadSubscriptionEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    subscription_details: cdktf.listMapper(eventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsToTerraform, true)(struct!.subscriptionDetails),
  }
}


export function eventSubscriptionSyslogParametersPayloadSubscriptionEndpointsToHclTerraform(struct?: EventSubscriptionSyslogParametersPayloadSubscriptionEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_details: {
      value: cdktf.listMapperHcl(eventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsToHclTerraform, true)(struct!.subscriptionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogParametersPayloadSubscriptionEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._subscriptionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionDetails = this._subscriptionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogParametersPayloadSubscriptionEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._subscriptionDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._subscriptionDetails.internalValue = value.subscriptionDetails;
    }
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // subscription_details - computed: false, optional: true, required: false
  private _subscriptionDetails = new EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetailsList(this, "subscription_details", false);
  public get subscriptionDetails() {
    return this._subscriptionDetails;
  }
  public putSubscriptionDetails(value: EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsSubscriptionDetails[] | cdktf.IResolvable) {
    this._subscriptionDetails.internalValue = value;
  }
  public resetSubscriptionDetails() {
    this._subscriptionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionDetailsInput() {
    return this._subscriptionDetails.internalValue;
  }
}

export class EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionSyslogParametersPayloadSubscriptionEndpoints[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsOutputReference {
    return new EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogParametersPayload {
  /**
  * Description
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#description EventSubscriptionSyslog#description}
  */
  readonly description?: string;
  /**
  * Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#name EventSubscriptionSyslog#name}
  */
  readonly name?: string;
  /**
  * Subscription Id (Unique UUID)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#subscription_id EventSubscriptionSyslog#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Version
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#version EventSubscriptionSyslog#version}
  */
  readonly version?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#filter EventSubscriptionSyslog#filter}
  */
  readonly filter?: EventSubscriptionSyslogParametersPayloadFilter[] | cdktf.IResolvable;
  /**
  * subscription_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#subscription_endpoints EventSubscriptionSyslog#subscription_endpoints}
  */
  readonly subscriptionEndpoints?: EventSubscriptionSyslogParametersPayloadSubscriptionEndpoints[] | cdktf.IResolvable;
}

export function eventSubscriptionSyslogParametersPayloadToTerraform(struct?: EventSubscriptionSyslogParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    version: cdktf.stringToTerraform(struct!.version),
    filter: cdktf.listMapper(eventSubscriptionSyslogParametersPayloadFilterToTerraform, true)(struct!.filter),
    subscription_endpoints: cdktf.listMapper(eventSubscriptionSyslogParametersPayloadSubscriptionEndpointsToTerraform, true)(struct!.subscriptionEndpoints),
  }
}


export function eventSubscriptionSyslogParametersPayloadToHclTerraform(struct?: EventSubscriptionSyslogParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(eventSubscriptionSyslogParametersPayloadFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionSyslogParametersPayloadFilterList",
    },
    subscription_endpoints: {
      value: cdktf.listMapperHcl(eventSubscriptionSyslogParametersPayloadSubscriptionEndpointsToHclTerraform, true)(struct!.subscriptionEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionSyslogParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._subscriptionEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionEndpoints = this._subscriptionEndpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._subscriptionId = undefined;
      this._version = undefined;
      this._filter.internalValue = undefined;
      this._subscriptionEndpoints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._subscriptionId = value.subscriptionId;
      this._version = value.version;
      this._filter.internalValue = value.filter;
      this._subscriptionEndpoints.internalValue = value.subscriptionEndpoints;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new EventSubscriptionSyslogParametersPayloadFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: EventSubscriptionSyslogParametersPayloadFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // subscription_endpoints - computed: false, optional: true, required: false
  private _subscriptionEndpoints = new EventSubscriptionSyslogParametersPayloadSubscriptionEndpointsList(this, "subscription_endpoints", false);
  public get subscriptionEndpoints() {
    return this._subscriptionEndpoints;
  }
  public putSubscriptionEndpoints(value: EventSubscriptionSyslogParametersPayloadSubscriptionEndpoints[] | cdktf.IResolvable) {
    this._subscriptionEndpoints.internalValue = value;
  }
  public resetSubscriptionEndpoints() {
    this._subscriptionEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionEndpointsInput() {
    return this._subscriptionEndpoints.internalValue;
  }
}

export class EventSubscriptionSyslogParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionSyslogParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionSyslogParametersPayloadOutputReference {
    return new EventSubscriptionSyslogParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSubscriptionSyslogParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#payload EventSubscriptionSyslog#payload}
  */
  readonly payload?: EventSubscriptionSyslogParametersPayload[] | cdktf.IResolvable;
}

export function eventSubscriptionSyslogParametersToTerraform(struct?: EventSubscriptionSyslogParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(eventSubscriptionSyslogParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function eventSubscriptionSyslogParametersToHclTerraform(struct?: EventSubscriptionSyslogParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(eventSubscriptionSyslogParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "EventSubscriptionSyslogParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSubscriptionSyslogParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSyslogParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSyslogParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new EventSubscriptionSyslogParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: EventSubscriptionSyslogParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

export class EventSubscriptionSyslogParametersList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionSyslogParameters[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionSyslogParametersOutputReference {
    return new EventSubscriptionSyslogParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog dnacenter_event_subscription_syslog}
*/
export class EventSubscriptionSyslog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_event_subscription_syslog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventSubscriptionSyslog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventSubscriptionSyslog to import
  * @param importFromId The id of the existing EventSubscriptionSyslog that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventSubscriptionSyslog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_event_subscription_syslog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_subscription_syslog dnacenter_event_subscription_syslog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventSubscriptionSyslogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EventSubscriptionSyslogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_event_subscription_syslog',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new EventSubscriptionSyslogItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new EventSubscriptionSyslogParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: EventSubscriptionSyslogParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(eventSubscriptionSyslogParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(eventSubscriptionSyslogParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventSubscriptionSyslogParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
