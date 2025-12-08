// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#metadata DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadata;
  /**
  * Spec defines the desired state of the NginxProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#spec DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpec;
}
export interface DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#annotations DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#labels DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#name DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
}
export interface DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLogging {
  /**
  * ErrorLevel defines the error log level. Possible log levels listed in order of increasing severity are debug, info, notice, warn, error, crit, alert, and emerg. Setting a certain log level will cause all messages of the specified and more severe log levels to be logged. For example, the log level 'error' will cause error, crit, alert, and emerg messages to be logged. https://nginx.org/en/docs/ngx_core_module.html#error_log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#error_level DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#error_level}
  */
  readonly errorLevel?: string;
}

export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLoggingToTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_level: cdktf.stringToTerraform(struct!.errorLevel),
  }
}


export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLoggingToHclTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_level: {
      value: cdktf.stringToHclTerraform(struct!.errorLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLevel = this._errorLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorLevel = value.errorLevel;
    }
  }

  // error_level - computed: false, optional: true, required: false
  private _errorLevel?: string; 
  public get errorLevel() {
    return this.getStringAttribute('error_level');
  }
  public set errorLevel(value: string) {
    this._errorLevel = value;
  }
  public resetErrorLevel() {
    this._errorLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLevelInput() {
    return this._errorLevel;
  }
}
export interface DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddresses {
  /**
  * Type specifies the type of address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#type DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Value specifies the address value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#value DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesToTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesToHclTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesOutputReference {
    return new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIp {
  /**
  * Mode defines how NGINX will rewrite the client's IP address. There are two possible modes: - ProxyProtocol: NGINX will rewrite the client's IP using the PROXY protocol header. - XForwardedFor: NGINX will rewrite the client's IP using the X-Forwarded-For header. Sets NGINX directive real_ip_header: https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#mode DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * SetIPRecursively configures whether recursive search is used when selecting the client's address from the X-Forwarded-For header. It is used in conjunction with TrustedAddresses. If enabled, NGINX will recurse on the values in X-Forwarded-Header from the end of array to start of array and select the first untrusted IP. For example, if X-Forwarded-For is [11.11.11.11, 22.22.22.22, 55.55.55.1], and TrustedAddresses is set to 55.55.55.1/32, NGINX will rewrite the client IP to 22.22.22.22. If disabled, NGINX will select the IP at the end of the array. In the previous example, 55.55.55.1 would be selected. Sets NGINX directive real_ip_recursive: https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_recursive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#set_ip_recursively DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#set_ip_recursively}
  */
  readonly setIpRecursively?: boolean | cdktf.IResolvable;
  /**
  * TrustedAddresses specifies the addresses that are trusted to send correct client IP information. If a request comes from a trusted address, NGINX will rewrite the client IP information, and forward it to the backend in the X-Forwarded-For* and X-Real-IP headers. If the request does not come from a trusted address, NGINX will not rewrite the client IP information. TrustedAddresses only supports CIDR blocks: 192.33.21.1/24, fe80::1/64. To trust all addresses (not recommended for production), set to 0.0.0.0/0. If no addresses are provided, NGINX will not rewrite the client IP information. Sets NGINX directive set_real_ip_from: https://nginx.org/en/docs/http/ngx_http_realip_module.html#set_real_ip_from This field is required if mode is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#trusted_addresses DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#trusted_addresses}
  */
  readonly trustedAddresses?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddresses[] | cdktf.IResolvable;
}

export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpToTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    set_ip_recursively: cdktf.booleanToTerraform(struct!.setIpRecursively),
    trusted_addresses: cdktf.listMapper(dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesToTerraform, false)(struct!.trustedAddresses),
  }
}


export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpToHclTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIp | cdktf.IResolvable): any {
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
    set_ip_recursively: {
      value: cdktf.booleanToHclTerraform(struct!.setIpRecursively),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_addresses: {
      value: cdktf.listMapperHcl(dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesToHclTerraform, false)(struct!.trustedAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._setIpRecursively !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpRecursively = this._setIpRecursively;
    }
    if (this._trustedAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedAddresses = this._trustedAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._setIpRecursively = undefined;
      this._trustedAddresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._setIpRecursively = value.setIpRecursively;
      this._trustedAddresses.internalValue = value.trustedAddresses;
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

  // set_ip_recursively - computed: false, optional: true, required: false
  private _setIpRecursively?: boolean | cdktf.IResolvable; 
  public get setIpRecursively() {
    return this.getBooleanAttribute('set_ip_recursively');
  }
  public set setIpRecursively(value: boolean | cdktf.IResolvable) {
    this._setIpRecursively = value;
  }
  public resetSetIpRecursively() {
    this._setIpRecursively = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpRecursivelyInput() {
    return this._setIpRecursively;
  }

  // trusted_addresses - computed: false, optional: true, required: false
  private _trustedAddresses = new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddressesList(this, "trusted_addresses", false);
  public get trustedAddresses() {
    return this._trustedAddresses;
  }
  public putTrustedAddresses(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpTrustedAddresses[] | cdktf.IResolvable) {
    this._trustedAddresses.internalValue = value;
  }
  public resetTrustedAddresses() {
    this._trustedAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedAddressesInput() {
    return this._trustedAddresses.internalValue;
  }
}
export interface DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporter {
  /**
  * BatchCount is the number of pending batches per worker, spans exceeding the limit are dropped. Default: https://nginx.org/en/docs/ngx_otel_module.html#otel_exporter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#batch_count DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#batch_count}
  */
  readonly batchCount?: number;
  /**
  * BatchSize is the maximum number of spans to be sent in one batch per worker. Default: https://nginx.org/en/docs/ngx_otel_module.html#otel_exporter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#batch_size DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Endpoint is the address of OTLP/gRPC endpoint that will accept telemetry data. Format: alphanumeric hostname with optional http scheme and optional port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#endpoint DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#endpoint}
  */
  readonly endpoint: string;
  /**
  * Interval is the maximum interval between two exports. Default: https://nginx.org/en/docs/ngx_otel_module.html#otel_exporter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#interval DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
}

export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporterToTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_count: cdktf.numberToTerraform(struct!.batchCount),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporterToHclTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_count: {
      value: cdktf.numberToHclTerraform(struct!.batchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCount = this._batchCount;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchCount = undefined;
      this._batchSize = undefined;
      this._endpoint = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchCount = value.batchCount;
      this._batchSize = value.batchSize;
      this._endpoint = value.endpoint;
      this._interval = value.interval;
    }
  }

  // batch_count - computed: false, optional: true, required: false
  private _batchCount?: number; 
  public get batchCount() {
    return this.getNumberAttribute('batch_count');
  }
  public set batchCount(value: number) {
    this._batchCount = value;
  }
  public resetBatchCount() {
    this._batchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCountInput() {
    return this._batchCount;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributes {
  /**
  * Key is the key for a span attribute. Format: must have all ``` escaped and must not contain any '$' or end with an unescaped ''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#key DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the value for a span attribute. Format: must have all ``` escaped and must not contain any '$' or end with an unescaped ''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#value DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesToTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesToHclTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesOutputReference {
    return new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetry {
  /**
  * Exporter specifies OpenTelemetry export parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#exporter DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#exporter}
  */
  readonly exporter?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporter;
  /**
  * ServiceName is the 'service.name' attribute of the OpenTelemetry resource. Default is 'ngf:<gateway-namespace>:<gateway-name>'. If a value is provided by the user, then the default becomes a prefix to that value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#service_name DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#service_name}
  */
  readonly serviceName?: string;
  /**
  * SpanAttributes are custom key/value attributes that are added to each span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#span_attributes DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#span_attributes}
  */
  readonly spanAttributes?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributes[] | cdktf.IResolvable;
}

export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryToTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exporter: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporterToTerraform(struct!.exporter),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    span_attributes: cdktf.listMapper(dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesToTerraform, false)(struct!.spanAttributes),
  }
}


export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryToHclTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exporter: {
      value: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporterToHclTerraform(struct!.exporter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporter",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    span_attributes: {
      value: cdktf.listMapperHcl(dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesToHclTerraform, false)(struct!.spanAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exporter = this._exporter?.internalValue;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._spanAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanAttributes = this._spanAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exporter.internalValue = undefined;
      this._serviceName = undefined;
      this._spanAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exporter.internalValue = value.exporter;
      this._serviceName = value.serviceName;
      this._spanAttributes.internalValue = value.spanAttributes;
    }
  }

  // exporter - computed: false, optional: true, required: false
  private _exporter = new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporterOutputReference(this, "exporter");
  public get exporter() {
    return this._exporter;
  }
  public putExporter(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryExporter) {
    this._exporter.internalValue = value;
  }
  public resetExporter() {
    this._exporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exporterInput() {
    return this._exporter.internalValue;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // span_attributes - computed: false, optional: true, required: false
  private _spanAttributes = new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributesList(this, "span_attributes", false);
  public get spanAttributes() {
    return this._spanAttributes;
  }
  public putSpanAttributes(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetrySpanAttributes[] | cdktf.IResolvable) {
    this._spanAttributes.internalValue = value;
  }
  public resetSpanAttributes() {
    this._spanAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanAttributesInput() {
    return this._spanAttributes.internalValue;
  }
}
export interface DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpec {
  /**
  * DisableHTTP2 defines if http2 should be disabled for all servers. Default is false, meaning http2 will be enabled for all servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#disable_http2 DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#disable_http2}
  */
  readonly disableHttp2?: boolean | cdktf.IResolvable;
  /**
  * IPFamily specifies the IP family to be used by the NGINX. Default is 'dual', meaning the server will use both IPv4 and IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#ip_family DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Logging defines logging related settings for NGINX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#logging DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLogging;
  /**
  * RewriteClientIP defines configuration for rewriting the client IP to the original client's IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#rewrite_client_ip DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#rewrite_client_ip}
  */
  readonly rewriteClientIp?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIp;
  /**
  * Telemetry specifies the OpenTelemetry configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#telemetry DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest#telemetry}
  */
  readonly telemetry?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetry;
}

export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_http2: cdktf.booleanToTerraform(struct!.disableHttp2),
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    logging: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLoggingToTerraform(struct!.logging),
    rewrite_client_ip: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpToTerraform(struct!.rewriteClientIp),
    telemetry: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryToTerraform(struct!.telemetry),
  }
}


export function dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_http2: {
      value: cdktf.booleanToHclTerraform(struct!.disableHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_family: {
      value: cdktf.stringToHclTerraform(struct!.ipFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLogging",
    },
    rewrite_client_ip: {
      value: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpToHclTerraform(struct!.rewriteClientIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIp",
    },
    telemetry: {
      value: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryToHclTerraform(struct!.telemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetry",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHttp2 = this._disableHttp2;
    }
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._rewriteClientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteClientIp = this._rewriteClientIp?.internalValue;
    }
    if (this._telemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableHttp2 = undefined;
      this._ipFamily = undefined;
      this._logging.internalValue = undefined;
      this._rewriteClientIp.internalValue = undefined;
      this._telemetry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableHttp2 = value.disableHttp2;
      this._ipFamily = value.ipFamily;
      this._logging.internalValue = value.logging;
      this._rewriteClientIp.internalValue = value.rewriteClientIp;
      this._telemetry.internalValue = value.telemetry;
    }
  }

  // disable_http2 - computed: false, optional: true, required: false
  private _disableHttp2?: boolean | cdktf.IResolvable; 
  public get disableHttp2() {
    return this.getBooleanAttribute('disable_http2');
  }
  public set disableHttp2(value: boolean | cdktf.IResolvable) {
    this._disableHttp2 = value;
  }
  public resetDisableHttp2() {
    this._disableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHttp2Input() {
    return this._disableHttp2;
  }

  // ip_family - computed: false, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // rewrite_client_ip - computed: false, optional: true, required: false
  private _rewriteClientIp = new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIpOutputReference(this, "rewrite_client_ip");
  public get rewriteClientIp() {
    return this._rewriteClientIp;
  }
  public putRewriteClientIp(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecRewriteClientIp) {
    this._rewriteClientIp.internalValue = value;
  }
  public resetRewriteClientIp() {
    this._rewriteClientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteClientIpInput() {
    return this._rewriteClientIp.internalValue;
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry = new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetryOutputReference(this, "telemetry");
  public get telemetry() {
    return this._telemetry;
  }
  public putTelemetry(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecTelemetry) {
    this._telemetry.internalValue = value;
  }
  public resetTelemetry() {
    this._telemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest k8s_gateway_nginx_org_nginx_proxy_v1alpha1_manifest}
*/
export class DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_nginx_org_nginx_proxy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewayNginxOrgNginxProxyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_nginx_org_nginx_proxy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/gateway_nginx_org_nginx_proxy_v1alpha1_manifest k8s_gateway_nginx_org_nginx_proxy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_nginx_org_nginx_proxy_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNginxOrgNginxProxyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
