// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTemporalcloudNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, Temporal Cloud will use API key authentication for this namespace. If false, mutual TLS (mTLS) authentication will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#api_key_auth DataTemporalcloudNamespace#api_key_auth}
  */
  readonly apiKeyAuth?: boolean | cdktf.IResolvable;
  /**
  * A list of filters to apply to client certificates when initiating a connection Temporal Cloud. If present, connections will only be allowed from client certificates whose distinguished name properties match at least one of the filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#certificate_filters DataTemporalcloudNamespace#certificate_filters}
  */
  readonly certificateFilters?: DataTemporalcloudNamespaceCertificateFilters[] | cdktf.IResolvable;
  /**
  * A codec server is used by the Temporal Cloud UI to decode payloads for all users interacting with this namespace, even if the workflow history itself is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#codec_server DataTemporalcloudNamespace#codec_server}
  */
  readonly codecServer?: DataTemporalcloudNamespaceCodecServer;
  /**
  * The IDs of the connectivity rules for this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#connectivity_rule_ids DataTemporalcloudNamespace#connectivity_rule_ids}
  */
  readonly connectivityRuleIds?: string[];
  /**
  * The custom search attributes to use for the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#custom_search_attributes DataTemporalcloudNamespace#custom_search_attributes}
  */
  readonly customSearchAttributes?: { [key: string]: string };
  /**
  * The unique identifier of the namespace across all Temporal Cloud tenants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#id DataTemporalcloudNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The date and time when the namespace was last modified. Will not be set if the namespace has never been modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#last_modified_time DataTemporalcloudNamespace#last_modified_time}
  */
  readonly lastModifiedTime?: string;
  /**
  * The private connectivities for the namespace, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#private_connectivities DataTemporalcloudNamespace#private_connectivities}
  */
  readonly privateConnectivities?: DataTemporalcloudNamespacePrivateConnectivities[] | cdktf.IResolvable;
  /**
  * The tags for the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#tags DataTemporalcloudNamespace#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataTemporalcloudNamespaceCertificateFilters {
}

export function dataTemporalcloudNamespaceCertificateFiltersToTerraform(struct?: DataTemporalcloudNamespaceCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespaceCertificateFiltersToHclTerraform(struct?: DataTemporalcloudNamespaceCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespaceCertificateFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTemporalcloudNamespaceCertificateFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespaceCertificateFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // subject_alternative_name - computed: true, optional: false, required: false
  public get subjectAlternativeName() {
    return this.getStringAttribute('subject_alternative_name');
  }
}

export class DataTemporalcloudNamespaceCertificateFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTemporalcloudNamespaceCertificateFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTemporalcloudNamespaceCertificateFiltersOutputReference {
    return new DataTemporalcloudNamespaceCertificateFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTemporalcloudNamespaceCodecServer {
}

export function dataTemporalcloudNamespaceCodecServerToTerraform(struct?: DataTemporalcloudNamespaceCodecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespaceCodecServerToHclTerraform(struct?: DataTemporalcloudNamespaceCodecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespaceCodecServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespaceCodecServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespaceCodecServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // include_cross_origin_credentials - computed: true, optional: false, required: false
  public get includeCrossOriginCredentials() {
    return this.getBooleanAttribute('include_cross_origin_credentials');
  }

  // pass_access_token - computed: true, optional: false, required: false
  public get passAccessToken() {
    return this.getBooleanAttribute('pass_access_token');
  }
}
export interface DataTemporalcloudNamespaceEndpoints {
}

export function dataTemporalcloudNamespaceEndpointsToTerraform(struct?: DataTemporalcloudNamespaceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespaceEndpointsToHclTerraform(struct?: DataTemporalcloudNamespaceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespaceEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespaceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespaceEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grpc_address - computed: true, optional: false, required: false
  public get grpcAddress() {
    return this.getStringAttribute('grpc_address');
  }

  // web_address - computed: true, optional: false, required: false
  public get webAddress() {
    return this.getStringAttribute('web_address');
  }
}
export interface DataTemporalcloudNamespaceLimits {
}

export function dataTemporalcloudNamespaceLimitsToTerraform(struct?: DataTemporalcloudNamespaceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespaceLimitsToHclTerraform(struct?: DataTemporalcloudNamespaceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespaceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespaceLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespaceLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions_per_second_limit - computed: true, optional: false, required: false
  public get actionsPerSecondLimit() {
    return this.getNumberAttribute('actions_per_second_limit');
  }
}
export interface DataTemporalcloudNamespaceNamespaceLifecycle {
}

export function dataTemporalcloudNamespaceNamespaceLifecycleToTerraform(struct?: DataTemporalcloudNamespaceNamespaceLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespaceNamespaceLifecycleToHclTerraform(struct?: DataTemporalcloudNamespaceNamespaceLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespaceNamespaceLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespaceNamespaceLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespaceNamespaceLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_delete_protection - computed: true, optional: false, required: false
  public get enableDeleteProtection() {
    return this.getBooleanAttribute('enable_delete_protection');
  }
}
export interface DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfo {
}

export function dataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfoToTerraform(struct?: DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfoToHclTerraform(struct?: DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // allowed_principal_arns - computed: true, optional: false, required: false
  public get allowedPrincipalArns() {
    return this.getListAttribute('allowed_principal_arns');
  }

  // vpc_endpoint_service_names - computed: true, optional: false, required: false
  public get vpcEndpointServiceNames() {
    return this.getListAttribute('vpc_endpoint_service_names');
  }
}
export interface DataTemporalcloudNamespacePrivateConnectivities {
  /**
  * The AWS PrivateLink info. This will only be set for namespaces whose cloud provider is AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#aws_private_link_info DataTemporalcloudNamespace#aws_private_link_info}
  */
  readonly awsPrivateLinkInfo?: DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfo;
}

export function dataTemporalcloudNamespacePrivateConnectivitiesToTerraform(struct?: DataTemporalcloudNamespacePrivateConnectivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_private_link_info: dataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfoToTerraform(struct!.awsPrivateLinkInfo),
  }
}


export function dataTemporalcloudNamespacePrivateConnectivitiesToHclTerraform(struct?: DataTemporalcloudNamespacePrivateConnectivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_private_link_info: {
      value: dataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfoToHclTerraform(struct!.awsPrivateLinkInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTemporalcloudNamespacePrivateConnectivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTemporalcloudNamespacePrivateConnectivities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsPrivateLinkInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPrivateLinkInfo = this._awsPrivateLinkInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespacePrivateConnectivities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsPrivateLinkInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsPrivateLinkInfo.internalValue = value.awsPrivateLinkInfo;
    }
  }

  // aws_private_link_info - computed: true, optional: true, required: false
  private _awsPrivateLinkInfo = new DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfoOutputReference(this, "aws_private_link_info");
  public get awsPrivateLinkInfo() {
    return this._awsPrivateLinkInfo;
  }
  public putAwsPrivateLinkInfo(value: DataTemporalcloudNamespacePrivateConnectivitiesAwsPrivateLinkInfo) {
    this._awsPrivateLinkInfo.internalValue = value;
  }
  public resetAwsPrivateLinkInfo() {
    this._awsPrivateLinkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateLinkInfoInput() {
    return this._awsPrivateLinkInfo.internalValue;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTemporalcloudNamespacePrivateConnectivitiesList extends cdktf.ComplexList {
  public internalValue? : DataTemporalcloudNamespacePrivateConnectivities[] | cdktf.IResolvable

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
  public get(index: number): DataTemporalcloudNamespacePrivateConnectivitiesOutputReference {
    return new DataTemporalcloudNamespacePrivateConnectivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace temporalcloud_namespace}
*/
export class DataTemporalcloudNamespace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTemporalcloudNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTemporalcloudNamespace to import
  * @param importFromId The id of the existing DataTemporalcloudNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTemporalcloudNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespace temporalcloud_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTemporalcloudNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTemporalcloudNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'temporalcloud_namespace',
      terraformGeneratorMetadata: {
        providerName: 'temporalcloud',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKeyAuth = config.apiKeyAuth;
    this._certificateFilters.internalValue = config.certificateFilters;
    this._codecServer.internalValue = config.codecServer;
    this._connectivityRuleIds = config.connectivityRuleIds;
    this._customSearchAttributes = config.customSearchAttributes;
    this._id = config.id;
    this._lastModifiedTime = config.lastModifiedTime;
    this._privateConnectivities.internalValue = config.privateConnectivities;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_client_ca - computed: true, optional: false, required: false
  public get acceptedClientCa() {
    return this.getStringAttribute('accepted_client_ca');
  }

  // active_region - computed: true, optional: false, required: false
  public get activeRegion() {
    return this.getStringAttribute('active_region');
  }

  // api_key_auth - computed: false, optional: true, required: false
  private _apiKeyAuth?: boolean | cdktf.IResolvable; 
  public get apiKeyAuth() {
    return this.getBooleanAttribute('api_key_auth');
  }
  public set apiKeyAuth(value: boolean | cdktf.IResolvable) {
    this._apiKeyAuth = value;
  }
  public resetApiKeyAuth() {
    this._apiKeyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAuthInput() {
    return this._apiKeyAuth;
  }

  // certificate_filters - computed: true, optional: true, required: false
  private _certificateFilters = new DataTemporalcloudNamespaceCertificateFiltersList(this, "certificate_filters", false);
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: DataTemporalcloudNamespaceCertificateFilters[] | cdktf.IResolvable) {
    this._certificateFilters.internalValue = value;
  }
  public resetCertificateFilters() {
    this._certificateFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFiltersInput() {
    return this._certificateFilters.internalValue;
  }

  // codec_server - computed: true, optional: true, required: false
  private _codecServer = new DataTemporalcloudNamespaceCodecServerOutputReference(this, "codec_server");
  public get codecServer() {
    return this._codecServer;
  }
  public putCodecServer(value: DataTemporalcloudNamespaceCodecServer) {
    this._codecServer.internalValue = value;
  }
  public resetCodecServer() {
    this._codecServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecServerInput() {
    return this._codecServer.internalValue;
  }

  // connectivity_rule_ids - computed: true, optional: true, required: false
  private _connectivityRuleIds?: string[]; 
  public get connectivityRuleIds() {
    return this.getListAttribute('connectivity_rule_ids');
  }
  public set connectivityRuleIds(value: string[]) {
    this._connectivityRuleIds = value;
  }
  public resetConnectivityRuleIds() {
    this._connectivityRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityRuleIdsInput() {
    return this._connectivityRuleIds;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // custom_search_attributes - computed: true, optional: true, required: false
  private _customSearchAttributes?: { [key: string]: string }; 
  public get customSearchAttributes() {
    return this.getStringMapAttribute('custom_search_attributes');
  }
  public set customSearchAttributes(value: { [key: string]: string }) {
    this._customSearchAttributes = value;
  }
  public resetCustomSearchAttributes() {
    this._customSearchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSearchAttributesInput() {
    return this._customSearchAttributes;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataTemporalcloudNamespaceEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified_time - computed: true, optional: true, required: false
  private _lastModifiedTime?: string; 
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }
  public set lastModifiedTime(value: string) {
    this._lastModifiedTime = value;
  }
  public resetLastModifiedTime() {
    this._lastModifiedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedTimeInput() {
    return this._lastModifiedTime;
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new DataTemporalcloudNamespaceLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_lifecycle - computed: true, optional: false, required: false
  private _namespaceLifecycle = new DataTemporalcloudNamespaceNamespaceLifecycleOutputReference(this, "namespace_lifecycle");
  public get namespaceLifecycle() {
    return this._namespaceLifecycle;
  }

  // private_connectivities - computed: true, optional: true, required: false
  private _privateConnectivities = new DataTemporalcloudNamespacePrivateConnectivitiesList(this, "private_connectivities", false);
  public get privateConnectivities() {
    return this._privateConnectivities;
  }
  public putPrivateConnectivities(value: DataTemporalcloudNamespacePrivateConnectivities[] | cdktf.IResolvable) {
    this._privateConnectivities.internalValue = value;
  }
  public resetPrivateConnectivities() {
    this._privateConnectivities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivitiesInput() {
    return this._privateConnectivities.internalValue;
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_auth: cdktf.booleanToTerraform(this._apiKeyAuth),
      certificate_filters: cdktf.listMapper(dataTemporalcloudNamespaceCertificateFiltersToTerraform, false)(this._certificateFilters.internalValue),
      codec_server: dataTemporalcloudNamespaceCodecServerToTerraform(this._codecServer.internalValue),
      connectivity_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectivityRuleIds),
      custom_search_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customSearchAttributes),
      id: cdktf.stringToTerraform(this._id),
      last_modified_time: cdktf.stringToTerraform(this._lastModifiedTime),
      private_connectivities: cdktf.listMapper(dataTemporalcloudNamespacePrivateConnectivitiesToTerraform, false)(this._privateConnectivities.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key_auth: {
        value: cdktf.booleanToHclTerraform(this._apiKeyAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_filters: {
        value: cdktf.listMapperHcl(dataTemporalcloudNamespaceCertificateFiltersToHclTerraform, false)(this._certificateFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTemporalcloudNamespaceCertificateFiltersList",
      },
      codec_server: {
        value: dataTemporalcloudNamespaceCodecServerToHclTerraform(this._codecServer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataTemporalcloudNamespaceCodecServer",
      },
      connectivity_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectivityRuleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_search_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customSearchAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_modified_time: {
        value: cdktf.stringToHclTerraform(this._lastModifiedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_connectivities: {
        value: cdktf.listMapperHcl(dataTemporalcloudNamespacePrivateConnectivitiesToHclTerraform, false)(this._privateConnectivities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTemporalcloudNamespacePrivateConnectivitiesList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
