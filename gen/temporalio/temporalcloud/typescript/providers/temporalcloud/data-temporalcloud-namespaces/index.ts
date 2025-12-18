// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTemporalcloudNamespacesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataTemporalcloudNamespacesNamespacesCertificateFilters {
}

export function dataTemporalcloudNamespacesNamespacesCertificateFiltersToTerraform(struct?: DataTemporalcloudNamespacesNamespacesCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespacesNamespacesCertificateFiltersToHclTerraform(struct?: DataTemporalcloudNamespacesNamespacesCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespacesNamespacesCertificateFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTemporalcloudNamespacesNamespacesCertificateFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespacesNamespacesCertificateFilters | cdktf.IResolvable | undefined) {
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

export class DataTemporalcloudNamespacesNamespacesCertificateFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTemporalcloudNamespacesNamespacesCertificateFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTemporalcloudNamespacesNamespacesCertificateFiltersOutputReference {
    return new DataTemporalcloudNamespacesNamespacesCertificateFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTemporalcloudNamespacesNamespacesCodecServer {
}

export function dataTemporalcloudNamespacesNamespacesCodecServerToTerraform(struct?: DataTemporalcloudNamespacesNamespacesCodecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespacesNamespacesCodecServerToHclTerraform(struct?: DataTemporalcloudNamespacesNamespacesCodecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespacesNamespacesCodecServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespacesNamespacesCodecServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespacesNamespacesCodecServer | cdktf.IResolvable | undefined) {
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
export interface DataTemporalcloudNamespacesNamespacesEndpoints {
}

export function dataTemporalcloudNamespacesNamespacesEndpointsToTerraform(struct?: DataTemporalcloudNamespacesNamespacesEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespacesNamespacesEndpointsToHclTerraform(struct?: DataTemporalcloudNamespacesNamespacesEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespacesNamespacesEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespacesNamespacesEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespacesNamespacesEndpoints | undefined) {
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
export interface DataTemporalcloudNamespacesNamespacesLimits {
}

export function dataTemporalcloudNamespacesNamespacesLimitsToTerraform(struct?: DataTemporalcloudNamespacesNamespacesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespacesNamespacesLimitsToHclTerraform(struct?: DataTemporalcloudNamespacesNamespacesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespacesNamespacesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespacesNamespacesLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespacesNamespacesLimits | undefined) {
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
export interface DataTemporalcloudNamespacesNamespacesNamespaceLifecycle {
}

export function dataTemporalcloudNamespacesNamespacesNamespaceLifecycleToTerraform(struct?: DataTemporalcloudNamespacesNamespacesNamespaceLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespacesNamespacesNamespaceLifecycleToHclTerraform(struct?: DataTemporalcloudNamespacesNamespacesNamespaceLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespacesNamespacesNamespaceLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespacesNamespacesNamespaceLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespacesNamespacesNamespaceLifecycle | undefined) {
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
export interface DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfo {
}

export function dataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfoToTerraform(struct?: DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfoToHclTerraform(struct?: DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfo | cdktf.IResolvable | undefined) {
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
export interface DataTemporalcloudNamespacesNamespacesPrivateConnectivities {
  /**
  * The AWS PrivateLink info. This will only be set for namespaces whose cloud provider is AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#aws_private_link_info DataTemporalcloudNamespaces#aws_private_link_info}
  */
  readonly awsPrivateLinkInfo?: DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfo;
}

export function dataTemporalcloudNamespacesNamespacesPrivateConnectivitiesToTerraform(struct?: DataTemporalcloudNamespacesNamespacesPrivateConnectivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_private_link_info: dataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfoToTerraform(struct!.awsPrivateLinkInfo),
  }
}


export function dataTemporalcloudNamespacesNamespacesPrivateConnectivitiesToHclTerraform(struct?: DataTemporalcloudNamespacesNamespacesPrivateConnectivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_private_link_info: {
      value: dataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfoToHclTerraform(struct!.awsPrivateLinkInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTemporalcloudNamespacesNamespacesPrivateConnectivities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTemporalcloudNamespacesNamespacesPrivateConnectivities | cdktf.IResolvable | undefined) {
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
  private _awsPrivateLinkInfo = new DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfoOutputReference(this, "aws_private_link_info");
  public get awsPrivateLinkInfo() {
    return this._awsPrivateLinkInfo;
  }
  public putAwsPrivateLinkInfo(value: DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesAwsPrivateLinkInfo) {
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

export class DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesList extends cdktf.ComplexList {
  public internalValue? : DataTemporalcloudNamespacesNamespacesPrivateConnectivities[] | cdktf.IResolvable

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
  public get(index: number): DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesOutputReference {
    return new DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTemporalcloudNamespacesNamespaces {
  /**
  * If true, Temporal Cloud will use API key authentication for this namespace. If false, mutual TLS (mTLS) authentication will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#api_key_auth DataTemporalcloudNamespaces#api_key_auth}
  */
  readonly apiKeyAuth?: boolean | cdktf.IResolvable;
  /**
  * A list of filters to apply to client certificates when initiating a connection Temporal Cloud. If present, connections will only be allowed from client certificates whose distinguished name properties match at least one of the filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#certificate_filters DataTemporalcloudNamespaces#certificate_filters}
  */
  readonly certificateFilters?: DataTemporalcloudNamespacesNamespacesCertificateFilters[] | cdktf.IResolvable;
  /**
  * A codec server is used by the Temporal Cloud UI to decode payloads for all users interacting with this namespace, even if the workflow history itself is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#codec_server DataTemporalcloudNamespaces#codec_server}
  */
  readonly codecServer?: DataTemporalcloudNamespacesNamespacesCodecServer;
  /**
  * The IDs of the connectivity rules for this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#connectivity_rule_ids DataTemporalcloudNamespaces#connectivity_rule_ids}
  */
  readonly connectivityRuleIds?: string[];
  /**
  * The custom search attributes to use for the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#custom_search_attributes DataTemporalcloudNamespaces#custom_search_attributes}
  */
  readonly customSearchAttributes?: { [key: string]: string };
  /**
  * The date and time when the namespace was last modified. Will not be set if the namespace has never been modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#last_modified_time DataTemporalcloudNamespaces#last_modified_time}
  */
  readonly lastModifiedTime?: string;
  /**
  * The private connectivities for the namespace, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#private_connectivities DataTemporalcloudNamespaces#private_connectivities}
  */
  readonly privateConnectivities?: DataTemporalcloudNamespacesNamespacesPrivateConnectivities[] | cdktf.IResolvable;
  /**
  * The tags for the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#tags DataTemporalcloudNamespaces#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataTemporalcloudNamespacesNamespacesToTerraform(struct?: DataTemporalcloudNamespacesNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_auth: cdktf.booleanToTerraform(struct!.apiKeyAuth),
    certificate_filters: cdktf.listMapper(dataTemporalcloudNamespacesNamespacesCertificateFiltersToTerraform, false)(struct!.certificateFilters),
    codec_server: dataTemporalcloudNamespacesNamespacesCodecServerToTerraform(struct!.codecServer),
    connectivity_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connectivityRuleIds),
    custom_search_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customSearchAttributes),
    last_modified_time: cdktf.stringToTerraform(struct!.lastModifiedTime),
    private_connectivities: cdktf.listMapper(dataTemporalcloudNamespacesNamespacesPrivateConnectivitiesToTerraform, false)(struct!.privateConnectivities),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataTemporalcloudNamespacesNamespacesToHclTerraform(struct?: DataTemporalcloudNamespacesNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_auth: {
      value: cdktf.booleanToHclTerraform(struct!.apiKeyAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_filters: {
      value: cdktf.listMapperHcl(dataTemporalcloudNamespacesNamespacesCertificateFiltersToHclTerraform, false)(struct!.certificateFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataTemporalcloudNamespacesNamespacesCertificateFiltersList",
    },
    codec_server: {
      value: dataTemporalcloudNamespacesNamespacesCodecServerToHclTerraform(struct!.codecServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTemporalcloudNamespacesNamespacesCodecServer",
    },
    connectivity_rule_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connectivityRuleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_search_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customSearchAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    last_modified_time: {
      value: cdktf.stringToHclTerraform(struct!.lastModifiedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_connectivities: {
      value: cdktf.listMapperHcl(dataTemporalcloudNamespacesNamespacesPrivateConnectivitiesToHclTerraform, false)(struct!.privateConnectivities),
      isBlock: true,
      type: "list",
      storageClassType: "DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTemporalcloudNamespacesNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTemporalcloudNamespacesNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAuth = this._apiKeyAuth;
    }
    if (this._certificateFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateFilters = this._certificateFilters?.internalValue;
    }
    if (this._codecServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codecServer = this._codecServer?.internalValue;
    }
    if (this._connectivityRuleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityRuleIds = this._connectivityRuleIds;
    }
    if (this._customSearchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSearchAttributes = this._customSearchAttributes;
    }
    if (this._lastModifiedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModifiedTime = this._lastModifiedTime;
    }
    if (this._privateConnectivities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnectivities = this._privateConnectivities?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNamespacesNamespaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyAuth = undefined;
      this._certificateFilters.internalValue = undefined;
      this._codecServer.internalValue = undefined;
      this._connectivityRuleIds = undefined;
      this._customSearchAttributes = undefined;
      this._lastModifiedTime = undefined;
      this._privateConnectivities.internalValue = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyAuth = value.apiKeyAuth;
      this._certificateFilters.internalValue = value.certificateFilters;
      this._codecServer.internalValue = value.codecServer;
      this._connectivityRuleIds = value.connectivityRuleIds;
      this._customSearchAttributes = value.customSearchAttributes;
      this._lastModifiedTime = value.lastModifiedTime;
      this._privateConnectivities.internalValue = value.privateConnectivities;
      this._tags = value.tags;
    }
  }

  // accepted_client_ca - computed: true, optional: false, required: false
  public get acceptedClientCa() {
    return this.getStringAttribute('accepted_client_ca');
  }

  // active_region - computed: true, optional: false, required: false
  public get activeRegion() {
    return this.getStringAttribute('active_region');
  }

  // api_key_auth - computed: true, optional: true, required: false
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
  private _certificateFilters = new DataTemporalcloudNamespacesNamespacesCertificateFiltersList(this, "certificate_filters", false);
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: DataTemporalcloudNamespacesNamespacesCertificateFilters[] | cdktf.IResolvable) {
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
  private _codecServer = new DataTemporalcloudNamespacesNamespacesCodecServerOutputReference(this, "codec_server");
  public get codecServer() {
    return this._codecServer;
  }
  public putCodecServer(value: DataTemporalcloudNamespacesNamespacesCodecServer) {
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
  private _endpoints = new DataTemporalcloudNamespacesNamespacesEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _limits = new DataTemporalcloudNamespacesNamespacesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_lifecycle - computed: true, optional: false, required: false
  private _namespaceLifecycle = new DataTemporalcloudNamespacesNamespacesNamespaceLifecycleOutputReference(this, "namespace_lifecycle");
  public get namespaceLifecycle() {
    return this._namespaceLifecycle;
  }

  // private_connectivities - computed: true, optional: true, required: false
  private _privateConnectivities = new DataTemporalcloudNamespacesNamespacesPrivateConnectivitiesList(this, "private_connectivities", false);
  public get privateConnectivities() {
    return this._privateConnectivities;
  }
  public putPrivateConnectivities(value: DataTemporalcloudNamespacesNamespacesPrivateConnectivities[] | cdktf.IResolvable) {
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
}

export class DataTemporalcloudNamespacesNamespacesList extends cdktf.ComplexList {
  public internalValue? : DataTemporalcloudNamespacesNamespaces[] | cdktf.IResolvable

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
  public get(index: number): DataTemporalcloudNamespacesNamespacesOutputReference {
    return new DataTemporalcloudNamespacesNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces temporalcloud_namespaces}
*/
export class DataTemporalcloudNamespaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_namespaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTemporalcloudNamespaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTemporalcloudNamespaces to import
  * @param importFromId The id of the existing DataTemporalcloudNamespaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTemporalcloudNamespaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_namespaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/namespaces temporalcloud_namespaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTemporalcloudNamespacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTemporalcloudNamespacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'temporalcloud_namespaces',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespaces - computed: true, optional: false, required: false
  private _namespaces = new DataTemporalcloudNamespacesNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
