// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Base64-encoded CA cert in PEM format that clients use when authenticating with Temporal Cloud. This is a required field when a Namespace uses mTLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#accepted_client_ca Namespace#accepted_client_ca}
  */
  readonly acceptedClientCa?: string;
  /**
  * If true, Temporal Cloud will enable API key authentication for this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#api_key_auth Namespace#api_key_auth}
  */
  readonly apiKeyAuth?: boolean | cdktf.IResolvable;
  /**
  * The capacity configuration for the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#capacity Namespace#capacity}
  */
  readonly capacity?: NamespaceCapacity;
  /**
  * A list of filters to apply to client certificates when initiating a connection Temporal Cloud. If present, connections will only be allowed from client certificates whose distinguished name properties match at least one of the filters. Empty lists are not allowed, omit the attribute instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#certificate_filters Namespace#certificate_filters}
  */
  readonly certificateFilters?: NamespaceCertificateFilters[] | cdktf.IResolvable;
  /**
  * A codec server is used by the Temporal Cloud UI to decode payloads for all users interacting with this namespace, even if the workflow history itself is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#codec_server Namespace#codec_server}
  */
  readonly codecServer?: NamespaceCodecServer;
  /**
  * The IDs of the connectivity rules for this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#connectivity_rule_ids Namespace#connectivity_rule_ids}
  */
  readonly connectivityRuleIds?: string[];
  /**
  * The name of the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#name Namespace#name}
  */
  readonly name: string;
  /**
  * The lifecycle configuration for the namespace. Note that this is different from the Terraform resource lifecycle. This controls settings like delete protection within Temporal Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#namespace_lifecycle Namespace#namespace_lifecycle}
  */
  readonly namespaceLifecycle?: NamespaceNamespaceLifecycle;
  /**
  * The list of regions where this namespace is available. Must be one or two regions. See https://docs.temporal.io/cloud/regions for a list of available regions and HA options. Note that regions are prefixed with the cloud provider (aws-us-east-1, not us-east-1). If two regions are specified, the namespace will be replicated across them in a high availability (HA) configuration. Same-region, multi-region, and multi-cloud HA namespaces are supported. Please note that changing, adding, or removing regions for an existing namespace is not currently supported and the provider will throw an error. For HA namespaces the provider will ignore order changes on regions, which can happen if the namespace fails over.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#regions Namespace#regions}
  */
  readonly regions: string[];
  /**
  * The number of days to retain workflow history. Any changes to the retention period will be applied to all new running workflows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#retention_days Namespace#retention_days}
  */
  readonly retentionDays: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#timeouts Namespace#timeouts}
  */
  readonly timeouts?: NamespaceTimeouts;
}
export interface NamespaceCapacity {
  /**
  * The mode of the capacity configuration. Must be one of 'provisioned' or 'on_demand'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#mode Namespace#mode}
  */
  readonly mode?: string;
  /**
  * The value of the capacity configuration. Must be set when mode is 'provisioned'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#value Namespace#value}
  */
  readonly value?: number;
}

export function namespaceCapacityToTerraform(struct?: NamespaceCapacity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function namespaceCapacityToHclTerraform(struct?: NamespaceCapacity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceCapacity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceCapacity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface NamespaceCertificateFilters {
  /**
  * The certificate's common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#common_name Namespace#common_name}
  */
  readonly commonName?: string;
  /**
  * The certificate's organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#organization Namespace#organization}
  */
  readonly organization?: string;
  /**
  * The certificate's organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#organizational_unit Namespace#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * The certificate's subject alternative name (or SAN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#subject_alternative_name Namespace#subject_alternative_name}
  */
  readonly subjectAlternativeName?: string;
}

export function namespaceCertificateFiltersToTerraform(struct?: NamespaceCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    subject_alternative_name: cdktf.stringToTerraform(struct!.subjectAlternativeName),
  }
}


export function namespaceCertificateFiltersToHclTerraform(struct?: NamespaceCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alternative_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectAlternativeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceCertificateFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceCertificateFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._subjectAlternativeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeName = this._subjectAlternativeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceCertificateFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._subjectAlternativeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._subjectAlternativeName = value.subjectAlternativeName;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // subject_alternative_name - computed: false, optional: true, required: false
  private _subjectAlternativeName?: string; 
  public get subjectAlternativeName() {
    return this.getStringAttribute('subject_alternative_name');
  }
  public set subjectAlternativeName(value: string) {
    this._subjectAlternativeName = value;
  }
  public resetSubjectAlternativeName() {
    this._subjectAlternativeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNameInput() {
    return this._subjectAlternativeName;
  }
}

export class NamespaceCertificateFiltersList extends cdktf.ComplexList {
  public internalValue? : NamespaceCertificateFilters[] | cdktf.IResolvable

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
  public get(index: number): NamespaceCertificateFiltersOutputReference {
    return new NamespaceCertificateFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceCodecServer {
  /**
  * The endpoint of the codec server. Must begin with "https".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#endpoint Namespace#endpoint}
  */
  readonly endpoint: string;
  /**
  * If true, Temporal Cloud will include cross-origin credentials in requests to the codec server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#include_cross_origin_credentials Namespace#include_cross_origin_credentials}
  */
  readonly includeCrossOriginCredentials?: boolean | cdktf.IResolvable;
  /**
  * If true, Temporal Cloud will pass the access token to the codec server upon each request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#pass_access_token Namespace#pass_access_token}
  */
  readonly passAccessToken?: boolean | cdktf.IResolvable;
}

export function namespaceCodecServerToTerraform(struct?: NamespaceCodecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    include_cross_origin_credentials: cdktf.booleanToTerraform(struct!.includeCrossOriginCredentials),
    pass_access_token: cdktf.booleanToTerraform(struct!.passAccessToken),
  }
}


export function namespaceCodecServerToHclTerraform(struct?: NamespaceCodecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_cross_origin_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.includeCrossOriginCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_access_token: {
      value: cdktf.booleanToHclTerraform(struct!.passAccessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceCodecServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceCodecServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._includeCrossOriginCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCrossOriginCredentials = this._includeCrossOriginCredentials;
    }
    if (this._passAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.passAccessToken = this._passAccessToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceCodecServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._includeCrossOriginCredentials = undefined;
      this._passAccessToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._includeCrossOriginCredentials = value.includeCrossOriginCredentials;
      this._passAccessToken = value.passAccessToken;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // include_cross_origin_credentials - computed: true, optional: true, required: false
  private _includeCrossOriginCredentials?: boolean | cdktf.IResolvable; 
  public get includeCrossOriginCredentials() {
    return this.getBooleanAttribute('include_cross_origin_credentials');
  }
  public set includeCrossOriginCredentials(value: boolean | cdktf.IResolvable) {
    this._includeCrossOriginCredentials = value;
  }
  public resetIncludeCrossOriginCredentials() {
    this._includeCrossOriginCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCrossOriginCredentialsInput() {
    return this._includeCrossOriginCredentials;
  }

  // pass_access_token - computed: true, optional: true, required: false
  private _passAccessToken?: boolean | cdktf.IResolvable; 
  public get passAccessToken() {
    return this.getBooleanAttribute('pass_access_token');
  }
  public set passAccessToken(value: boolean | cdktf.IResolvable) {
    this._passAccessToken = value;
  }
  public resetPassAccessToken() {
    this._passAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passAccessTokenInput() {
    return this._passAccessToken;
  }
}
export interface NamespaceEndpoints {
}

export function namespaceEndpointsToTerraform(struct?: NamespaceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function namespaceEndpointsToHclTerraform(struct?: NamespaceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NamespaceEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceEndpoints | undefined) {
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

  // mtls_grpc_address - computed: true, optional: false, required: false
  public get mtlsGrpcAddress() {
    return this.getStringAttribute('mtls_grpc_address');
  }

  // web_address - computed: true, optional: false, required: false
  public get webAddress() {
    return this.getStringAttribute('web_address');
  }
}
export interface NamespaceNamespaceLifecycle {
  /**
  * If true, the namespace cannot be deleted. This is a safeguard against accidental deletion. To delete a namespace with this option enabled, you must first set it to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#enable_delete_protection Namespace#enable_delete_protection}
  */
  readonly enableDeleteProtection?: boolean | cdktf.IResolvable;
}

export function namespaceNamespaceLifecycleToTerraform(struct?: NamespaceNamespaceLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_delete_protection: cdktf.booleanToTerraform(struct!.enableDeleteProtection),
  }
}


export function namespaceNamespaceLifecycleToHclTerraform(struct?: NamespaceNamespaceLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_delete_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enableDeleteProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceNamespaceLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceNamespaceLifecycle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDeleteProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDeleteProtection = this._enableDeleteProtection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceNamespaceLifecycle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableDeleteProtection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableDeleteProtection = value.enableDeleteProtection;
    }
  }

  // enable_delete_protection - computed: true, optional: true, required: false
  private _enableDeleteProtection?: boolean | cdktf.IResolvable; 
  public get enableDeleteProtection() {
    return this.getBooleanAttribute('enable_delete_protection');
  }
  public set enableDeleteProtection(value: boolean | cdktf.IResolvable) {
    this._enableDeleteProtection = value;
  }
  public resetEnableDeleteProtection() {
    this._enableDeleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeleteProtectionInput() {
    return this._enableDeleteProtection;
  }
}
export interface NamespaceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#create Namespace#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#delete Namespace#delete}
  */
  readonly delete?: string;
}

export function namespaceTimeoutsToTerraform(struct?: NamespaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function namespaceTimeoutsToHclTerraform(struct?: NamespaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace temporalcloud_namespace}
*/
export class Namespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Namespace to import
  * @param importFromId The id of the existing Namespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Namespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/namespace temporalcloud_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceConfig) {
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
    this._acceptedClientCa = config.acceptedClientCa;
    this._apiKeyAuth = config.apiKeyAuth;
    this._capacity.internalValue = config.capacity;
    this._certificateFilters.internalValue = config.certificateFilters;
    this._codecServer.internalValue = config.codecServer;
    this._connectivityRuleIds = config.connectivityRuleIds;
    this._name = config.name;
    this._namespaceLifecycle.internalValue = config.namespaceLifecycle;
    this._regions = config.regions;
    this._retentionDays = config.retentionDays;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_client_ca - computed: false, optional: true, required: false
  private _acceptedClientCa?: string; 
  public get acceptedClientCa() {
    return this.getStringAttribute('accepted_client_ca');
  }
  public set acceptedClientCa(value: string) {
    this._acceptedClientCa = value;
  }
  public resetAcceptedClientCa() {
    this._acceptedClientCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedClientCaInput() {
    return this._acceptedClientCa;
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

  // capacity - computed: false, optional: true, required: false
  private _capacity = new NamespaceCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: NamespaceCapacity) {
    this._capacity.internalValue = value;
  }
  public resetCapacity() {
    this._capacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // certificate_filters - computed: false, optional: true, required: false
  private _certificateFilters = new NamespaceCertificateFiltersList(this, "certificate_filters", false);
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: NamespaceCertificateFilters[] | cdktf.IResolvable) {
    this._certificateFilters.internalValue = value;
  }
  public resetCertificateFilters() {
    this._certificateFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFiltersInput() {
    return this._certificateFilters.internalValue;
  }

  // codec_server - computed: false, optional: true, required: false
  private _codecServer = new NamespaceCodecServerOutputReference(this, "codec_server");
  public get codecServer() {
    return this._codecServer;
  }
  public putCodecServer(value: NamespaceCodecServer) {
    this._codecServer.internalValue = value;
  }
  public resetCodecServer() {
    this._codecServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecServerInput() {
    return this._codecServer.internalValue;
  }

  // connectivity_rule_ids - computed: false, optional: true, required: false
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

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new NamespaceEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // namespace_lifecycle - computed: false, optional: true, required: false
  private _namespaceLifecycle = new NamespaceNamespaceLifecycleOutputReference(this, "namespace_lifecycle");
  public get namespaceLifecycle() {
    return this._namespaceLifecycle;
  }
  public putNamespaceLifecycle(value: NamespaceNamespaceLifecycle) {
    this._namespaceLifecycle.internalValue = value;
  }
  public resetNamespaceLifecycle() {
    this._namespaceLifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceLifecycleInput() {
    return this._namespaceLifecycle.internalValue;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NamespaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NamespaceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted_client_ca: cdktf.stringToTerraform(this._acceptedClientCa),
      api_key_auth: cdktf.booleanToTerraform(this._apiKeyAuth),
      capacity: namespaceCapacityToTerraform(this._capacity.internalValue),
      certificate_filters: cdktf.listMapper(namespaceCertificateFiltersToTerraform, false)(this._certificateFilters.internalValue),
      codec_server: namespaceCodecServerToTerraform(this._codecServer.internalValue),
      connectivity_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectivityRuleIds),
      name: cdktf.stringToTerraform(this._name),
      namespace_lifecycle: namespaceNamespaceLifecycleToTerraform(this._namespaceLifecycle.internalValue),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      timeouts: namespaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepted_client_ca: {
        value: cdktf.stringToHclTerraform(this._acceptedClientCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_auth: {
        value: cdktf.booleanToHclTerraform(this._apiKeyAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity: {
        value: namespaceCapacityToHclTerraform(this._capacity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NamespaceCapacity",
      },
      certificate_filters: {
        value: cdktf.listMapperHcl(namespaceCertificateFiltersToHclTerraform, false)(this._certificateFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceCertificateFiltersList",
      },
      codec_server: {
        value: namespaceCodecServerToHclTerraform(this._codecServer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NamespaceCodecServer",
      },
      connectivity_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectivityRuleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_lifecycle: {
        value: namespaceNamespaceLifecycleToHclTerraform(this._namespaceLifecycle.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NamespaceNamespaceLifecycle",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: namespaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NamespaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
