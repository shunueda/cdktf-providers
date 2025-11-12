// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_apps_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPublisherAppsListConfig extends cdktf.TerraformMetaArguments {
  /**
  * publisher id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_apps_list#publisher_id DataNetskopeNpaPublisherAppsList#publisher_id}
  */
  readonly publisherId: number;
}
export interface DataNetskopeNpaPublisherAppsListDataAppOption {
}

export function dataNetskopeNpaPublisherAppsListDataAppOptionToTerraform(struct?: DataNetskopeNpaPublisherAppsListDataAppOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherAppsListDataAppOptionToHclTerraform(struct?: DataNetskopeNpaPublisherAppsListDataAppOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherAppsListDataAppOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherAppsListDataAppOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherAppsListDataAppOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataNetskopeNpaPublisherAppsListDataProtocols {
}

export function dataNetskopeNpaPublisherAppsListDataProtocolsToTerraform(struct?: DataNetskopeNpaPublisherAppsListDataProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherAppsListDataProtocolsToHclTerraform(struct?: DataNetskopeNpaPublisherAppsListDataProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherAppsListDataProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPublisherAppsListDataProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherAppsListDataProtocols | undefined) {
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

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // transport - computed: true, optional: false, required: false
  public get transport() {
    return this.getStringAttribute('transport');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataNetskopeNpaPublisherAppsListDataProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPublisherAppsListDataProtocolsOutputReference {
    return new DataNetskopeNpaPublisherAppsListDataProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaPublisherAppsListDataReachability {
}

export function dataNetskopeNpaPublisherAppsListDataReachabilityToTerraform(struct?: DataNetskopeNpaPublisherAppsListDataReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherAppsListDataReachabilityToHclTerraform(struct?: DataNetskopeNpaPublisherAppsListDataReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherAppsListDataReachabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherAppsListDataReachability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherAppsListDataReachability | undefined) {
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
export interface DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsReachability {
}

export function dataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsReachabilityToTerraform(struct?: DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsReachabilityToHclTerraform(struct?: DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsReachabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsReachability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsReachability | undefined) {
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
export interface DataNetskopeNpaPublisherAppsListDataServicePublisherAssignments {
}

export function dataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsToTerraform(struct?: DataNetskopeNpaPublisherAppsListDataServicePublisherAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsToHclTerraform(struct?: DataNetskopeNpaPublisherAppsListDataServicePublisherAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPublisherAppsListDataServicePublisherAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherAppsListDataServicePublisherAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // publisher_external_id - computed: true, optional: false, required: false
  public get publisherExternalId() {
    return this.getNumberAttribute('publisher_external_id');
  }

  // publisher_name - computed: true, optional: false, required: false
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // reachability - computed: true, optional: false, required: false
  private _reachability = new DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsReachabilityOutputReference(this, "reachability");
  public get reachability() {
    return this._reachability;
  }

  // service_external_id - computed: true, optional: false, required: false
  public get serviceExternalId() {
    return this.getNumberAttribute('service_external_id');
  }
}

export class DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsOutputReference {
    return new DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaPublisherAppsListData {
}

export function dataNetskopeNpaPublisherAppsListDataToTerraform(struct?: DataNetskopeNpaPublisherAppsListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherAppsListDataToHclTerraform(struct?: DataNetskopeNpaPublisherAppsListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherAppsListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPublisherAppsListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherAppsListData | undefined) {
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

  // app_option - computed: true, optional: false, required: false
  private _appOption = new DataNetskopeNpaPublisherAppsListDataAppOptionOutputReference(this, "app_option");
  public get appOption() {
    return this._appOption;
  }

  // clientless_access - computed: true, optional: false, required: false
  public get clientlessAccess() {
    return this.getBooleanAttribute('clientless_access');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getNumberAttribute('external_id');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_user_portal_app - computed: true, optional: false, required: false
  public get isUserPortalApp() {
    return this.getBooleanAttribute('is_user_portal_app');
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
  private _protocols = new DataNetskopeNpaPublisherAppsListDataProtocolsList(this, "protocols", false);
  public get protocols() {
    return this._protocols;
  }

  // public_host - computed: true, optional: false, required: false
  public get publicHost() {
    return this.getStringAttribute('public_host');
  }

  // reachability - computed: true, optional: false, required: false
  private _reachability = new DataNetskopeNpaPublisherAppsListDataReachabilityOutputReference(this, "reachability");
  public get reachability() {
    return this._reachability;
  }

  // real_host - computed: true, optional: false, required: false
  public get realHost() {
    return this.getStringAttribute('real_host');
  }

  // service_publisher_assignments - computed: true, optional: false, required: false
  private _servicePublisherAssignments = new DataNetskopeNpaPublisherAppsListDataServicePublisherAssignmentsList(this, "service_publisher_assignments", false);
  public get servicePublisherAssignments() {
    return this._servicePublisherAssignments;
  }

  // suppliment_dns_for_osx - computed: true, optional: false, required: false
  public get supplimentDnsForOsx() {
    return this.getBooleanAttribute('suppliment_dns_for_osx');
  }

  // trust_self_signed_certs - computed: true, optional: false, required: false
  public get trustSelfSignedCerts() {
    return this.getBooleanAttribute('trust_self_signed_certs');
  }

  // use_publisher_dns - computed: true, optional: false, required: false
  public get usePublisherDns() {
    return this.getBooleanAttribute('use_publisher_dns');
  }
}

export class DataNetskopeNpaPublisherAppsListDataList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPublisherAppsListDataOutputReference {
    return new DataNetskopeNpaPublisherAppsListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_apps_list netskope_npa_publisher_apps_list}
*/
export class DataNetskopeNpaPublisherAppsList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publisher_apps_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPublisherAppsList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPublisherAppsList to import
  * @param importFromId The id of the existing DataNetskopeNpaPublisherAppsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_apps_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPublisherAppsList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publisher_apps_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_apps_list netskope_npa_publisher_apps_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPublisherAppsListConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPublisherAppsListConfig) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publisher_apps_list',
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
    this._publisherId = config.publisherId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataNetskopeNpaPublisherAppsListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // publisher_id - computed: false, optional: false, required: true
  private _publisherId?: number; 
  public get publisherId() {
    return this.getNumberAttribute('publisher_id');
  }
  public set publisherId(value: number) {
    this._publisherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherIdInput() {
    return this._publisherId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      publisher_id: cdktf.numberToTerraform(this._publisherId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      publisher_id: {
        value: cdktf.numberToHclTerraform(this._publisherId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
