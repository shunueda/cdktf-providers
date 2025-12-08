// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STinkerbellOrgHardwareV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#metadata DataK8STinkerbellOrgHardwareV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#spec DataK8STinkerbellOrgHardwareV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpec;
}
export interface DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#annotations DataK8STinkerbellOrgHardwareV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#labels DataK8STinkerbellOrgHardwareV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#name DataK8STinkerbellOrgHardwareV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#namespace DataK8STinkerbellOrgHardwareV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadataToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#name DataK8STinkerbellOrgHardwareV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRefToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRefToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstance {
  /**
  * Userdata is data with a structure understood by the producer and consumer of the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#userdata DataK8STinkerbellOrgHardwareV1Alpha2Manifest#userdata}
  */
  readonly userdata?: string;
  /**
  * Vendordata is data with a structure understood by the producer and consumer of the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#vendordata DataK8STinkerbellOrgHardwareV1Alpha2Manifest#vendordata}
  */
  readonly vendordata?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstanceToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    userdata: cdktf.stringToTerraform(struct!.userdata),
    vendordata: cdktf.stringToTerraform(struct!.vendordata),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstanceToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    userdata: {
      value: cdktf.stringToHclTerraform(struct!.userdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendordata: {
      value: cdktf.stringToHclTerraform(struct!.vendordata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.userdata = this._userdata;
    }
    if (this._vendordata !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendordata = this._vendordata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userdata = undefined;
      this._vendordata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userdata = value.userdata;
      this._vendordata = value.vendordata;
    }
  }

  // userdata - computed: false, optional: true, required: false
  private _userdata?: string; 
  public get userdata() {
    return this.getStringAttribute('userdata');
  }
  public set userdata(value: string) {
    this._userdata = value;
  }
  public resetUserdata() {
    this._userdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataInput() {
    return this._userdata;
  }

  // vendordata - computed: false, optional: true, required: false
  private _vendordata?: string; 
  public get vendordata() {
    return this.getStringAttribute('vendordata');
  }
  public set vendordata(value: string) {
    this._vendordata = value;
  }
  public resetVendordata() {
    this._vendordata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendordataInput() {
    return this._vendordata;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxe {
  /**
  * Content is an inline iPXE script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#inline DataK8STinkerbellOrgHardwareV1Alpha2Manifest#inline}
  */
  readonly inline?: string;
  /**
  * URL is a URL to a hosted iPXE script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#url DataK8STinkerbellOrgHardwareV1Alpha2Manifest#url}
  */
  readonly url?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxeToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: cdktf.stringToTerraform(struct!.inline),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxeToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: cdktf.stringToHclTerraform(struct!.inline),
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

export class DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline = value.inline;
      this._url = value.url;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline?: string; 
  public get inline() {
    return this.getStringAttribute('inline');
  }
  public set inline(value: string) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // url - computed: false, optional: true, required: false
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
export interface DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcp {
  /**
  * Gateway is the default gateway address to serve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#gateway DataK8STinkerbellOrgHardwareV1Alpha2Manifest#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#hostname DataK8STinkerbellOrgHardwareV1Alpha2Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * IP is an IPv4 address to serve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#ip DataK8STinkerbellOrgHardwareV1Alpha2Manifest#ip}
  */
  readonly ip?: string;
  /**
  * LeaseTimeSeconds to serve. 24h default. Maximum equates to max uint32 as defined by RFC 2132 § 9.2 (https://www.rfc-editor.org/rfc/rfc2132.html#section-9.2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#lease_time_seconds DataK8STinkerbellOrgHardwareV1Alpha2Manifest#lease_time_seconds}
  */
  readonly leaseTimeSeconds?: number;
  /**
  * Nameservers to serve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#nameservers DataK8STinkerbellOrgHardwareV1Alpha2Manifest#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * Netmask is an IPv4 netmask to serve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#netmask DataK8STinkerbellOrgHardwareV1Alpha2Manifest#netmask}
  */
  readonly netmask?: string;
  /**
  * Timeservers to serve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#timeservers DataK8STinkerbellOrgHardwareV1Alpha2Manifest#timeservers}
  */
  readonly timeservers?: string[];
  /**
  * VLANID is a VLAN ID between 0 and 4096.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#vlan_id DataK8STinkerbellOrgHardwareV1Alpha2Manifest#vlan_id}
  */
  readonly vlanId?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcpToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
    lease_time_seconds: cdktf.numberToTerraform(struct!.leaseTimeSeconds),
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    timeservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeservers),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcpToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.leaseTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timeservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._leaseTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeSeconds = this._leaseTimeSeconds;
    }
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._timeservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeservers = this._timeservers;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._hostname = undefined;
      this._ip = undefined;
      this._leaseTimeSeconds = undefined;
      this._nameservers = undefined;
      this._netmask = undefined;
      this._timeservers = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._hostname = value.hostname;
      this._ip = value.ip;
      this._leaseTimeSeconds = value.leaseTimeSeconds;
      this._nameservers = value.nameservers;
      this._netmask = value.netmask;
      this._timeservers = value.timeservers;
      this._vlanId = value.vlanId;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // lease_time_seconds - computed: false, optional: true, required: false
  private _leaseTimeSeconds?: number; 
  public get leaseTimeSeconds() {
    return this.getNumberAttribute('lease_time_seconds');
  }
  public set leaseTimeSeconds(value: number) {
    this._leaseTimeSeconds = value;
  }
  public resetLeaseTimeSeconds() {
    this._leaseTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeSecondsInput() {
    return this._leaseTimeSeconds;
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // netmask - computed: false, optional: true, required: false
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

  // timeservers - computed: false, optional: true, required: false
  private _timeservers?: string[]; 
  public get timeservers() {
    return this.getListAttribute('timeservers');
  }
  public set timeservers(value: string[]) {
    this._timeservers = value;
  }
  public resetTimeservers() {
    this._timeservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeserversInput() {
    return this._timeservers;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfaces {
  /**
  * DHCP is the basic network information for serving DHCP requests. Required when DisbaleDHCP is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#dhcp DataK8STinkerbellOrgHardwareV1Alpha2Manifest#dhcp}
  */
  readonly dhcp?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcp;
  /**
  * DisableDHCP disables DHCP for this interface. Implies DisableNetboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#disable_dhcp DataK8STinkerbellOrgHardwareV1Alpha2Manifest#disable_dhcp}
  */
  readonly disableDhcp?: boolean | cdktf.IResolvable;
  /**
  * DisableNetboot disables netbooting for this interface. The interface will still receive network information specified by DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#disable_netboot DataK8STinkerbellOrgHardwareV1Alpha2Manifest#disable_netboot}
  */
  readonly disableNetboot?: boolean | cdktf.IResolvable;
}

export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcpToTerraform(struct!.dhcp),
    disable_dhcp: cdktf.booleanToTerraform(struct!.disableDhcp),
    disable_netboot: cdktf.booleanToTerraform(struct!.disableNetboot),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcpToHclTerraform(struct!.dhcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcp",
    },
    disable_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.disableDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_netboot: {
      value: cdktf.booleanToHclTerraform(struct!.disableNetboot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp?.internalValue;
    }
    if (this._disableDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDhcp = this._disableDhcp;
    }
    if (this._disableNetboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNetboot = this._disableNetboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp.internalValue = undefined;
      this._disableDhcp = undefined;
      this._disableNetboot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp.internalValue = value.dhcp;
      this._disableDhcp = value.disableDhcp;
      this._disableNetboot = value.disableNetboot;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp = new DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcpOutputReference(this, "dhcp");
  public get dhcp() {
    return this._dhcp;
  }
  public putDhcp(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesDhcp) {
    this._dhcp.internalValue = value;
  }
  public resetDhcp() {
    this._dhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp.internalValue;
  }

  // disable_dhcp - computed: false, optional: true, required: false
  private _disableDhcp?: boolean | cdktf.IResolvable; 
  public get disableDhcp() {
    return this.getBooleanAttribute('disable_dhcp');
  }
  public set disableDhcp(value: boolean | cdktf.IResolvable) {
    this._disableDhcp = value;
  }
  public resetDisableDhcp() {
    this._disableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDhcpInput() {
    return this._disableDhcp;
  }

  // disable_netboot - computed: false, optional: true, required: false
  private _disableNetboot?: boolean | cdktf.IResolvable; 
  public get disableNetboot() {
    return this.getBooleanAttribute('disable_netboot');
  }
  public set disableNetboot(value: boolean | cdktf.IResolvable) {
    this._disableNetboot = value;
  }
  public resetDisableNetboot() {
    this._disableNetboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNetbootInput() {
    return this._disableNetboot;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsie {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#name DataK8STinkerbellOrgHardwareV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsieToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsieToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpec {
  /**
  * BMCRef references a Rufio Machine object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#bmc_ref DataK8STinkerbellOrgHardwareV1Alpha2Manifest#bmc_ref}
  */
  readonly bmcRef?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRef;
  /**
  * Instance describes instance specific data that is generally unused by Tinkerbell core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#instance DataK8STinkerbellOrgHardwareV1Alpha2Manifest#instance}
  */
  readonly instance?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstance;
  /**
  * IPXE provides iPXE script override fields. This is useful for debugging or netboot customization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#ipxe DataK8STinkerbellOrgHardwareV1Alpha2Manifest#ipxe}
  */
  readonly ipxe?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxe;
  /**
  * KernelParams passed to the kernel when launching the OSIE. Parameters are joined with a space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#kernel_params DataK8STinkerbellOrgHardwareV1Alpha2Manifest#kernel_params}
  */
  readonly kernelParams?: string[];
  /**
  * NetworkInterfaces defines the desired DHCP and netboot configuration for a network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#network_interfaces DataK8STinkerbellOrgHardwareV1Alpha2Manifest#network_interfaces}
  */
  readonly networkInterfaces?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfaces;
  /**
  * OSIE describes the Operating System Installation Environment to be netbooted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#osie DataK8STinkerbellOrgHardwareV1Alpha2Manifest#osie}
  */
  readonly osie?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsie;
  /**
  * StorageDevices is a list of storage devices that will be available in the OSIE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#storage_devices DataK8STinkerbellOrgHardwareV1Alpha2Manifest#storage_devices}
  */
  readonly storageDevices?: string[];
}

export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bmc_ref: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRefToTerraform(struct!.bmcRef),
    instance: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstanceToTerraform(struct!.instance),
    ipxe: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxeToTerraform(struct!.ipxe),
    kernel_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kernelParams),
    network_interfaces: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesToTerraform(struct!.networkInterfaces),
    osie: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsieToTerraform(struct!.osie),
    storage_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storageDevices),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bmc_ref: {
      value: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRefToHclTerraform(struct!.bmcRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRef",
    },
    instance: {
      value: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstanceToHclTerraform(struct!.instance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstance",
    },
    ipxe: {
      value: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxeToHclTerraform(struct!.ipxe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxe",
    },
    kernel_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kernelParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_interfaces: {
      value: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesToHclTerraform(struct!.networkInterfaces),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfaces",
    },
    osie: {
      value: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsieToHclTerraform(struct!.osie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsie",
    },
    storage_devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storageDevices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bmcRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmcRef = this._bmcRef?.internalValue;
    }
    if (this._instance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance?.internalValue;
    }
    if (this._ipxe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipxe = this._ipxe?.internalValue;
    }
    if (this._kernelParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelParams = this._kernelParams;
    }
    if (this._networkInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
    }
    if (this._osie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osie = this._osie?.internalValue;
    }
    if (this._storageDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDevices = this._storageDevices;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bmcRef.internalValue = undefined;
      this._instance.internalValue = undefined;
      this._ipxe.internalValue = undefined;
      this._kernelParams = undefined;
      this._networkInterfaces.internalValue = undefined;
      this._osie.internalValue = undefined;
      this._storageDevices = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bmcRef.internalValue = value.bmcRef;
      this._instance.internalValue = value.instance;
      this._ipxe.internalValue = value.ipxe;
      this._kernelParams = value.kernelParams;
      this._networkInterfaces.internalValue = value.networkInterfaces;
      this._osie.internalValue = value.osie;
      this._storageDevices = value.storageDevices;
    }
  }

  // bmc_ref - computed: false, optional: true, required: false
  private _bmcRef = new DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRefOutputReference(this, "bmc_ref");
  public get bmcRef() {
    return this._bmcRef;
  }
  public putBmcRef(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecBmcRef) {
    this._bmcRef.internalValue = value;
  }
  public resetBmcRef() {
    this._bmcRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmcRefInput() {
    return this._bmcRef.internalValue;
  }

  // instance - computed: false, optional: true, required: false
  private _instance = new DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstanceOutputReference(this, "instance");
  public get instance() {
    return this._instance;
  }
  public putInstance(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecInstance) {
    this._instance.internalValue = value;
  }
  public resetInstance() {
    this._instance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // ipxe - computed: false, optional: true, required: false
  private _ipxe = new DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxeOutputReference(this, "ipxe");
  public get ipxe() {
    return this._ipxe;
  }
  public putIpxe(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecIpxe) {
    this._ipxe.internalValue = value;
  }
  public resetIpxe() {
    this._ipxe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeInput() {
    return this._ipxe.internalValue;
  }

  // kernel_params - computed: false, optional: true, required: false
  private _kernelParams?: string[]; 
  public get kernelParams() {
    return this.getListAttribute('kernel_params');
  }
  public set kernelParams(value: string[]) {
    this._kernelParams = value;
  }
  public resetKernelParams() {
    this._kernelParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelParamsInput() {
    return this._kernelParams;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfacesOutputReference(this, "network_interfaces");
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecNetworkInterfaces) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // osie - computed: false, optional: true, required: false
  private _osie = new DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsieOutputReference(this, "osie");
  public get osie() {
    return this._osie;
  }
  public putOsie(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOsie) {
    this._osie.internalValue = value;
  }
  public resetOsie() {
    this._osie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osieInput() {
    return this._osie.internalValue;
  }

  // storage_devices - computed: false, optional: true, required: false
  private _storageDevices?: string[]; 
  public get storageDevices() {
    return this.getListAttribute('storage_devices');
  }
  public set storageDevices(value: string[]) {
    this._storageDevices = value;
  }
  public resetStorageDevices() {
    this._storageDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDevicesInput() {
    return this._storageDevices;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest k8s_tinkerbell_org_hardware_v1alpha2_manifest}
*/
export class DataK8STinkerbellOrgHardwareV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tinkerbell_org_hardware_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STinkerbellOrgHardwareV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STinkerbellOrgHardwareV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8STinkerbellOrgHardwareV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STinkerbellOrgHardwareV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tinkerbell_org_hardware_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tinkerbell_org_hardware_v1alpha2_manifest k8s_tinkerbell_org_hardware_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STinkerbellOrgHardwareV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STinkerbellOrgHardwareV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tinkerbell_org_hardware_v1alpha2_manifest',
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
  private _metadata = new DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
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
      metadata: dataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8STinkerbellOrgHardwareV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
