// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPrivateAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * private apps id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_app#private_app_id DataNetskopeNpaPrivateApp#private_app_id}
  */
  readonly privateAppId: number;
}
export interface DataNetskopeNpaPrivateAppAppOption {
}

export function dataNetskopeNpaPrivateAppAppOptionToTerraform(struct?: DataNetskopeNpaPrivateAppAppOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppAppOptionToHclTerraform(struct?: DataNetskopeNpaPrivateAppAppOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppAppOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPrivateAppAppOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppAppOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataNetskopeNpaPrivateAppProtocols {
}

export function dataNetskopeNpaPrivateAppProtocolsToTerraform(struct?: DataNetskopeNpaPrivateAppProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppProtocolsToHclTerraform(struct?: DataNetskopeNpaPrivateAppProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPrivateAppProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppProtocols | undefined) {
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

export class DataNetskopeNpaPrivateAppProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPrivateAppProtocolsOutputReference {
    return new DataNetskopeNpaPrivateAppProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaPrivateAppReachability {
}

export function dataNetskopeNpaPrivateAppReachabilityToTerraform(struct?: DataNetskopeNpaPrivateAppReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppReachabilityToHclTerraform(struct?: DataNetskopeNpaPrivateAppReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppReachabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPrivateAppReachability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppReachability | undefined) {
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
export interface DataNetskopeNpaPrivateAppServicePublisherAssignmentsReachability {
}

export function dataNetskopeNpaPrivateAppServicePublisherAssignmentsReachabilityToTerraform(struct?: DataNetskopeNpaPrivateAppServicePublisherAssignmentsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppServicePublisherAssignmentsReachabilityToHclTerraform(struct?: DataNetskopeNpaPrivateAppServicePublisherAssignmentsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppServicePublisherAssignmentsReachabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPrivateAppServicePublisherAssignmentsReachability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppServicePublisherAssignmentsReachability | undefined) {
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
export interface DataNetskopeNpaPrivateAppServicePublisherAssignments {
}

export function dataNetskopeNpaPrivateAppServicePublisherAssignmentsToTerraform(struct?: DataNetskopeNpaPrivateAppServicePublisherAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppServicePublisherAssignmentsToHclTerraform(struct?: DataNetskopeNpaPrivateAppServicePublisherAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppServicePublisherAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPrivateAppServicePublisherAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppServicePublisherAssignments | undefined) {
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
  private _reachability = new DataNetskopeNpaPrivateAppServicePublisherAssignmentsReachabilityOutputReference(this, "reachability");
  public get reachability() {
    return this._reachability;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
}

export class DataNetskopeNpaPrivateAppServicePublisherAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPrivateAppServicePublisherAssignmentsOutputReference {
    return new DataNetskopeNpaPrivateAppServicePublisherAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaPrivateAppTags {
}

export function dataNetskopeNpaPrivateAppTagsToTerraform(struct?: DataNetskopeNpaPrivateAppTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivateAppTagsToHclTerraform(struct?: DataNetskopeNpaPrivateAppTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivateAppTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPrivateAppTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivateAppTags | undefined) {
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

export class DataNetskopeNpaPrivateAppTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPrivateAppTagsOutputReference {
    return new DataNetskopeNpaPrivateAppTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_app netskope_npa_private_app}
*/
export class DataNetskopeNpaPrivateApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_private_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPrivateApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPrivateApp to import
  * @param importFromId The id of the existing DataNetskopeNpaPrivateApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPrivateApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_private_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_app netskope_npa_private_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPrivateAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPrivateAppConfig) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_private_app',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._privateAppId = config.privateAppId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unauthenticated_cors - computed: true, optional: false, required: false
  public get allowUnauthenticatedCors() {
    return this.getBooleanAttribute('allow_unauthenticated_cors');
  }

  // allow_uri_bypass - computed: true, optional: false, required: false
  public get allowUriBypass() {
    return this.getBooleanAttribute('allow_uri_bypass');
  }

  // app_option - computed: true, optional: false, required: false
  private _appOption = new DataNetskopeNpaPrivateAppAppOptionOutputReference(this, "app_option");
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

  // private_app_id - computed: false, optional: false, required: true
  private _privateAppId?: number; 
  public get privateAppId() {
    return this.getNumberAttribute('private_app_id');
  }
  public set privateAppId(value: number) {
    this._privateAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAppIdInput() {
    return this._privateAppId;
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
  private _protocols = new DataNetskopeNpaPrivateAppProtocolsList(this, "protocols", false);
  public get protocols() {
    return this._protocols;
  }

  // public_host - computed: true, optional: false, required: false
  public get publicHost() {
    return this.getStringAttribute('public_host');
  }

  // reachability - computed: true, optional: false, required: false
  private _reachability = new DataNetskopeNpaPrivateAppReachabilityOutputReference(this, "reachability");
  public get reachability() {
    return this._reachability;
  }

  // real_host - computed: true, optional: false, required: false
  public get realHost() {
    return this.getStringAttribute('real_host');
  }

  // service_publisher_assignments - computed: true, optional: false, required: false
  private _servicePublisherAssignments = new DataNetskopeNpaPrivateAppServicePublisherAssignmentsList(this, "service_publisher_assignments", false);
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
  private _tags = new DataNetskopeNpaPrivateAppTagsList(this, "tags", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      private_app_id: cdktf.numberToTerraform(this._privateAppId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      private_app_id: {
        value: cdktf.numberToHclTerraform(this._privateAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
