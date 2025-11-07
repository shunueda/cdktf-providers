// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/app_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoAppOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom filters to scope specific results. Usage: filter = app_access_type==agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/app_onboarding#filter DataProsimoAppOnboarding#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/app_onboarding#id DataProsimoAppOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataProsimoAppOnboardingOnboardedAppsAppurlsDnsservice {
}

export function dataProsimoAppOnboardingOnboardedAppsAppurlsDnsserviceToTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsDnsservice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoAppOnboardingOnboardedAppsAppurlsDnsserviceToHclTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsDnsservice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsDnsserviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoAppOnboardingOnboardedAppsAppurlsDnsservice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoAppOnboardingOnboardedAppsAppurlsDnsservice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configured - computed: true, optional: false, required: false
  public get configured() {
    return this.getBooleanAttribute('configured');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsDnsserviceList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoAppOnboardingOnboardedAppsAppurlsDnsserviceOutputReference {
    return new DataProsimoAppOnboardingOnboardedAppsAppurlsDnsserviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocols {
}

export function dataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocolsToTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocolsToHclTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocolsOutputReference {
    return new DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfo {
}

export function dataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfoToTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfoToHclTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfoList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfoOutputReference {
    return new DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoAppOnboardingOnboardedAppsAppurlsProtocols {
}

export function dataProsimoAppOnboardingOnboardedAppsAppurlsProtocolsToTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoAppOnboardingOnboardedAppsAppurlsProtocolsToHclTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoAppOnboardingOnboardedAppsAppurlsProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoAppOnboardingOnboardedAppsAppurlsProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // isvalidprotocolport - computed: true, optional: false, required: false
  public get isvalidprotocolport() {
    return this.getBooleanAttribute('isvalidprotocolport');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // portlist - computed: true, optional: false, required: false
  public get portlist() {
    return this.getListAttribute('portlist');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // websocketenabled - computed: true, optional: false, required: false
  public get websocketenabled() {
    return this.getBooleanAttribute('websocketenabled');
  }
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoAppOnboardingOnboardedAppsAppurlsProtocolsOutputReference {
    return new DataProsimoAppOnboardingOnboardedAppsAppurlsProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpoints {
}

export function dataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpointsToTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpointsToHclTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // appip - computed: true, optional: false, required: false
  public get appip() {
    return this.getStringAttribute('appip');
  }

  // appnetworkid - computed: true, optional: false, required: false
  public get appnetworkid() {
    return this.getStringAttribute('appnetworkid');
  }
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpointsOutputReference {
    return new DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoAppOnboardingOnboardedAppsAppurlsRegions {
}

export function dataProsimoAppOnboardingOnboardedAppsAppurlsRegionsToTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoAppOnboardingOnboardedAppsAppurlsRegionsToHclTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurlsRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoAppOnboardingOnboardedAppsAppurlsRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoAppOnboardingOnboardedAppsAppurlsRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connoption - computed: true, optional: false, required: false
  public get connoption() {
    return this.getStringAttribute('connoption');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsEndpointsList(this, "endpoints", true);
  public get endpoints() {
    return this._endpoints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // regiontype - computed: true, optional: false, required: false
  public get regiontype() {
    return this.getStringAttribute('regiontype');
  }
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsOutputReference {
    return new DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoAppOnboardingOnboardedAppsAppurls {
}

export function dataProsimoAppOnboardingOnboardedAppsAppurlsToTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoAppOnboardingOnboardedAppsAppurlsToHclTerraform(struct?: DataProsimoAppOnboardingOnboardedAppsAppurls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoAppOnboardingOnboardedAppsAppurls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoAppOnboardingOnboardedAppsAppurls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // appfqdn - computed: true, optional: false, required: false
  public get appfqdn() {
    return this.getStringAttribute('appfqdn');
  }

  // cacheruleid - computed: true, optional: false, required: false
  public get cacheruleid() {
    return this.getStringAttribute('cacheruleid');
  }

  // certid - computed: true, optional: false, required: false
  public get certid() {
    return this.getStringAttribute('certid');
  }

  // cloudkeyid - computed: true, optional: false, required: false
  public get cloudkeyid() {
    return this.getStringAttribute('cloudkeyid');
  }

  // connectionoption - computed: true, optional: false, required: false
  public get connectionoption() {
    return this.getStringAttribute('connectionoption');
  }

  // dnsservice - computed: true, optional: false, required: false
  private _dnsservice = new DataProsimoAppOnboardingOnboardedAppsAppurlsDnsserviceList(this, "dnsservice", true);
  public get dnsservice() {
    return this._dnsservice;
  }

  // domaintype - computed: true, optional: false, required: false
  public get domaintype() {
    return this.getStringAttribute('domaintype');
  }

  // ext_protocols - computed: true, optional: false, required: false
  private _extProtocols = new DataProsimoAppOnboardingOnboardedAppsAppurlsExtProtocolsList(this, "ext_protocols", true);
  public get extProtocols() {
    return this._extProtocols;
  }

  // healthcheckinfo - computed: true, optional: false, required: false
  private _healthcheckinfo = new DataProsimoAppOnboardingOnboardedAppsAppurlsHealthcheckinfoList(this, "healthcheckinfo", true);
  public get healthcheckinfo() {
    return this._healthcheckinfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internaldomain - computed: true, optional: false, required: false
  public get internaldomain() {
    return this.getStringAttribute('internaldomain');
  }

  // pappfqdn - computed: true, optional: false, required: false
  public get pappfqdn() {
    return this.getStringAttribute('pappfqdn');
  }

  // protocols - computed: true, optional: false, required: false
  private _protocols = new DataProsimoAppOnboardingOnboardedAppsAppurlsProtocolsList(this, "protocols", true);
  public get protocols() {
    return this._protocols;
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DataProsimoAppOnboardingOnboardedAppsAppurlsRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }

  // subdomainincluded - computed: true, optional: false, required: false
  public get subdomainincluded() {
    return this.getBooleanAttribute('subdomainincluded');
  }

  // teamid - computed: true, optional: false, required: false
  public get teamid() {
    return this.getStringAttribute('teamid');
  }
}

export class DataProsimoAppOnboardingOnboardedAppsAppurlsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoAppOnboardingOnboardedAppsAppurlsOutputReference {
    return new DataProsimoAppOnboardingOnboardedAppsAppurlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoAppOnboardingOnboardedApps {
}

export function dataProsimoAppOnboardingOnboardedAppsToTerraform(struct?: DataProsimoAppOnboardingOnboardedApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoAppOnboardingOnboardedAppsToHclTerraform(struct?: DataProsimoAppOnboardingOnboardedApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoAppOnboardingOnboardedAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoAppOnboardingOnboardedApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoAppOnboardingOnboardedApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addresstype - computed: true, optional: false, required: false
  public get addresstype() {
    return this.getStringAttribute('addresstype');
  }

  // app_access_type - computed: true, optional: false, required: false
  public get appAccessType() {
    return this.getStringAttribute('app_access_type');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // appid - computed: true, optional: false, required: false
  public get appid() {
    return this.getStringAttribute('appid');
  }

  // apponboardtype - computed: true, optional: false, required: false
  public get apponboardtype() {
    return this.getStringAttribute('apponboardtype');
  }

  // appsamlrewrite - computed: true, optional: false, required: false
  public get appsamlrewrite() {
    return this.getStringAttribute('appsamlrewrite');
  }

  // apptype - computed: true, optional: false, required: false
  public get apptype() {
    return this.getStringAttribute('apptype');
  }

  // appurls - computed: true, optional: false, required: false
  private _appurls = new DataProsimoAppOnboardingOnboardedAppsAppurlsList(this, "appurls", true);
  public get appurls() {
    return this._appurls;
  }

  // deployed - computed: true, optional: false, required: false
  public get deployed() {
    return this.getBooleanAttribute('deployed');
  }

  // dns_discovery - computed: true, optional: false, required: false
  public get dnsDiscovery() {
    return this.getBooleanAttribute('dns_discovery');
  }

  // enablemulticloud - computed: true, optional: false, required: false
  public get enablemulticloud() {
    return this.getBooleanAttribute('enablemulticloud');
  }

  // idp_id - computed: true, optional: false, required: false
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }

  // interactiontype - computed: true, optional: false, required: false
  public get interactiontype() {
    return this.getStringAttribute('interactiontype');
  }

  // onboardtype - computed: true, optional: false, required: false
  public get onboardtype() {
    return this.getStringAttribute('onboardtype');
  }

  // optimize_app_experience - computed: true, optional: false, required: false
  public get optimizeAppExperience() {
    return this.getBooleanAttribute('optimize_app_experience');
  }

  // optoption - computed: true, optional: false, required: false
  public get optoption() {
    return this.getStringAttribute('optoption');
  }

  // policy_updated - computed: true, optional: false, required: false
  public get policyUpdated() {
    return this.getBooleanAttribute('policy_updated');
  }

  // policygroupid - computed: true, optional: false, required: false
  public get policygroupid() {
    return this.getStringAttribute('policygroupid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
}

export class DataProsimoAppOnboardingOnboardedAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoAppOnboardingOnboardedAppsOutputReference {
    return new DataProsimoAppOnboardingOnboardedAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/app_onboarding prosimo_app_onboarding}
*/
export class DataProsimoAppOnboarding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_app_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoAppOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoAppOnboarding to import
  * @param importFromId The id of the existing DataProsimoAppOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/app_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoAppOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_app_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/app_onboarding prosimo_app_onboarding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoAppOnboardingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProsimoAppOnboardingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prosimo_app_onboarding',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_count - computed: true, optional: false, required: false
  public get appCount() {
    return this.getNumberAttribute('app_count');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // onboarded_apps - computed: true, optional: false, required: false
  private _onboardedApps = new DataProsimoAppOnboardingOnboardedAppsList(this, "onboarded_apps", true);
  public get onboardedApps() {
    return this._onboardedApps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
