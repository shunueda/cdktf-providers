// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_apps_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPrivateAppsListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of results to limit the output by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_apps_list#limit DataNetskopeNpaPrivateAppsList#limit}
  */
  readonly limit?: number;
  /**
  * Query offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_apps_list#offset DataNetskopeNpaPrivateAppsList#offset}
  */
  readonly offset?: number;
  /**
  * Return filtered result based on query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_apps_list#query DataNetskopeNpaPrivateAppsList#query}
  */
  readonly query?: string;
}
export interface DataNetskopeNpaPrivateAppsListPrivateAppsAppOption {
}

export function dataNetskopeNpaPrivateAppsListPrivateAppsAppOptionToTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsAppOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppsListPrivateAppsAppOptionToHclTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsAppOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsAppOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPrivateAppsListPrivateAppsAppOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppsListPrivateAppsAppOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataNetskopeNpaPrivateAppsListPrivateAppsProtocols {
}

export function dataNetskopeNpaPrivateAppsListPrivateAppsProtocolsToTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppsListPrivateAppsProtocolsToHclTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPrivateAppsListPrivateAppsProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppsListPrivateAppsProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPrivateAppsListPrivateAppsProtocolsOutputReference {
    return new DataNetskopeNpaPrivateAppsListPrivateAppsProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaPrivateAppsListPrivateAppsReachability {
}

export function dataNetskopeNpaPrivateAppsListPrivateAppsReachabilityToTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppsListPrivateAppsReachabilityToHclTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsReachabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPrivateAppsListPrivateAppsReachability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppsListPrivateAppsReachability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // error_string - computed: true, optional: false, required: false
  public get errorString() {
    return this.getStringAttribute('error_string');
  }

  // reachable - computed: true, optional: false, required: false
  public get reachable() {
    return this.getBooleanAttribute('reachable');
  }
}
export interface DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsReachability {
}

export function dataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsReachabilityToTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsReachabilityToHclTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsReachabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsReachability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsReachability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // error_string - computed: true, optional: false, required: false
  public get errorString() {
    return this.getStringAttribute('error_string');
  }

  // reachable - computed: true, optional: false, required: false
  public get reachable() {
    return this.getBooleanAttribute('reachable');
  }
}
export interface DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignments {
}

export function dataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsToTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsToHclTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getNumberAttribute('publisher_id');
  }

  // publisher_name - computed: true, optional: false, required: false
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // reachability - computed: true, optional: false, required: false
  private _reachability = new DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsReachabilityOutputReference(this, "reachability");
  public get reachability() {
    return this._reachability;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsOutputReference {
    return new DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaPrivateAppsListPrivateAppsTags {
}

export function dataNetskopeNpaPrivateAppsListPrivateAppsTagsToTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppsListPrivateAppsTagsToHclTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateAppsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPrivateAppsListPrivateAppsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppsListPrivateAppsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPrivateAppsListPrivateAppsTagsOutputReference {
    return new DataNetskopeNpaPrivateAppsListPrivateAppsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaPrivateAppsListPrivateApps {
}

export function dataNetskopeNpaPrivateAppsListPrivateAppsToTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppsListPrivateAppsToHclTerraform(struct?: DataNetskopeNpaPrivateAppsListPrivateApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPrivateAppsListPrivateApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppsListPrivateApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_unauthenticated_cors - computed: true, optional: false, required: false
  public get allowUnauthenticatedCors() {
    return this.getBooleanAttribute('allow_unauthenticated_cors');
  }

  // allow_uri_bypass - computed: true, optional: false, required: false
  public get allowUriBypass() {
    return this.getBooleanAttribute('allow_uri_bypass');
  }

  // app_option - computed: true, optional: false, required: false
  private _appOption = new DataNetskopeNpaPrivateAppsListPrivateAppsAppOptionOutputReference(this, "app_option");
  public get appOption() {
    return this._appOption;
  }

  // bypass_uris - computed: true, optional: false, required: false
  public get bypassUris() {
    return this.getListAttribute('bypass_uris');
  }

  // clientless_access - computed: true, optional: false, required: false
  public get clientlessAccess() {
    return this.getBooleanAttribute('clientless_access');
  }

  // is_user_portal_app - computed: true, optional: false, required: false
  public get isUserPortalApp() {
    return this.getBooleanAttribute('is_user_portal_app');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }

  // private_app_hostname - computed: true, optional: false, required: false
  public get privateAppHostname() {
    return this.getStringAttribute('private_app_hostname');
  }

  // private_app_id - computed: true, optional: false, required: false
  public get privateAppId() {
    return this.getNumberAttribute('private_app_id');
  }

  // private_app_name - computed: true, optional: false, required: false
  public get privateAppName() {
    return this.getStringAttribute('private_app_name');
  }

  // private_app_protocol - computed: true, optional: false, required: false
  public get privateAppProtocol() {
    return this.getStringAttribute('private_app_protocol');
  }

  // protocols - computed: true, optional: false, required: false
  private _protocols = new DataNetskopeNpaPrivateAppsListPrivateAppsProtocolsList(this, "protocols", false);
  public get protocols() {
    return this._protocols;
  }

  // public_host - computed: true, optional: false, required: false
  public get publicHost() {
    return this.getStringAttribute('public_host');
  }

  // reachability - computed: true, optional: false, required: false
  private _reachability = new DataNetskopeNpaPrivateAppsListPrivateAppsReachabilityOutputReference(this, "reachability");
  public get reachability() {
    return this._reachability;
  }

  // real_host - computed: true, optional: false, required: false
  public get realHost() {
    return this.getStringAttribute('real_host');
  }

  // service_publisher_assignments - computed: true, optional: false, required: false
  private _servicePublisherAssignments = new DataNetskopeNpaPrivateAppsListPrivateAppsServicePublisherAssignmentsList(this, "service_publisher_assignments", false);
  public get servicePublisherAssignments() {
    return this._servicePublisherAssignments;
  }

  // steering_configs - computed: true, optional: false, required: false
  public get steeringConfigs() {
    return this.getListAttribute('steering_configs');
  }

  // supplement_dns_for_osx - computed: true, optional: false, required: false
  public get supplementDnsForOsx() {
    return this.getBooleanAttribute('supplement_dns_for_osx');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataNetskopeNpaPrivateAppsListPrivateAppsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // trust_self_signed_certs - computed: true, optional: false, required: false
  public get trustSelfSignedCerts() {
    return this.getBooleanAttribute('trust_self_signed_certs');
  }

  // uribypass_header_value - computed: true, optional: false, required: false
  public get uribypassHeaderValue() {
    return this.getStringAttribute('uribypass_header_value');
  }

  // use_publisher_dns - computed: true, optional: false, required: false
  public get usePublisherDns() {
    return this.getBooleanAttribute('use_publisher_dns');
  }
}

export class DataNetskopeNpaPrivateAppsListPrivateAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPrivateAppsListPrivateAppsOutputReference {
    return new DataNetskopeNpaPrivateAppsListPrivateAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_apps_list netskope_npa_private_apps_list}
*/
export class DataNetskopeNpaPrivateAppsList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_private_apps_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPrivateAppsList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPrivateAppsList to import
  * @param importFromId The id of the existing DataNetskopeNpaPrivateAppsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_apps_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPrivateAppsList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_private_apps_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_apps_list netskope_npa_private_apps_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPrivateAppsListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPrivateAppsListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_private_apps_list',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._limit = config.limit;
    this._offset = config.offset;
    this._query = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // private_apps - computed: true, optional: false, required: false
  private _privateApps = new DataNetskopeNpaPrivateAppsListPrivateAppsList(this, "private_apps", false);
  public get privateApps() {
    return this._privateApps;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      query: cdktf.stringToTerraform(this._query),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
