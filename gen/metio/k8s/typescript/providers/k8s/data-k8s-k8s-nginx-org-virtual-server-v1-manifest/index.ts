// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SNginxOrgVirtualServerV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#metadata DataK8SK8SNginxOrgVirtualServerV1Manifest#metadata}
  */
  readonly metadata: DataK8SK8SNginxOrgVirtualServerV1ManifestMetadata;
  /**
  * VirtualServerSpec is the spec of the VirtualServer resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#spec DataK8SK8SNginxOrgVirtualServerV1Manifest#spec}
  */
  readonly spec?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpec;
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#annotations DataK8SK8SNginxOrgVirtualServerV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#labels DataK8SK8SNginxOrgVirtualServerV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#namespace DataK8SK8SNginxOrgVirtualServerV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestMetadataToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SNginxOrgVirtualServerV1ManifestMetadataToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecific {
  /**
  * Name of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecific | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecific | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecific | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecific | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecific[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Labels stores labels defined for the Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#labels DataK8SK8SNginxOrgVirtualServerV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * ProviderSpecific stores provider specific config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#provider_specific DataK8SK8SNginxOrgVirtualServerV1Manifest#provider_specific}
  */
  readonly providerSpecific?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecific[] | cdktf.IResolvable;
  /**
  * TTL for the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#record_ttl DataK8SK8SNginxOrgVirtualServerV1Manifest#record_ttl}
  */
  readonly recordTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#record_type DataK8SK8SNginxOrgVirtualServerV1Manifest#record_type}
  */
  readonly recordType?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    provider_specific: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificToTerraform, false)(struct!.providerSpecific),
    record_ttl: cdktf.numberToTerraform(struct!.recordTtl),
    record_type: cdktf.stringToTerraform(struct!.recordType),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider_specific: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificToHclTerraform, false)(struct!.providerSpecific),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificList",
    },
    record_ttl: {
      value: cdktf.numberToHclTerraform(struct!.recordTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._providerSpecific?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerSpecific = this._providerSpecific?.internalValue;
    }
    if (this._recordTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTtl = this._recordTtl;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._labels = undefined;
      this._providerSpecific.internalValue = undefined;
      this._recordTtl = undefined;
      this._recordType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._labels = value.labels;
      this._providerSpecific.internalValue = value.providerSpecific;
      this._recordTtl = value.recordTtl;
      this._recordType = value.recordType;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // provider_specific - computed: false, optional: true, required: false
  private _providerSpecific = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecificList(this, "provider_specific", false);
  public get providerSpecific() {
    return this._providerSpecific;
  }
  public putProviderSpecific(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsProviderSpecific[] | cdktf.IResolvable) {
    this._providerSpecific.internalValue = value;
  }
  public resetProviderSpecific() {
    this._providerSpecific.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerSpecificInput() {
    return this._providerSpecific.internalValue;
  }

  // record_ttl - computed: false, optional: true, required: false
  private _recordTtl?: number; 
  public get recordTtl() {
    return this.getNumberAttribute('record_ttl');
  }
  public set recordTtl(value: number) {
    this._recordTtl = value;
  }
  public resetRecordTtl() {
    this._recordTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTtlInput() {
    return this._recordTtl;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListener {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#http DataK8SK8SNginxOrgVirtualServerV1Manifest#http}
  */
  readonly http?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#https DataK8SK8SNginxOrgVirtualServerV1Manifest#https}
  */
  readonly https?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecListenerToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: cdktf.stringToTerraform(struct!.http),
    https: cdktf.stringToTerraform(struct!.https),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecListenerToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https: {
      value: cdktf.stringToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http = undefined;
      this._https = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http = value.http;
      this._https = value.https;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // https - computed: false, optional: true, required: false
  private _https?: string; 
  public get https() {
    return this.getStringAttribute('https');
  }
  public set https(value: string) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#namespace DataK8SK8SNginxOrgVirtualServerV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPolicies | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#set DataK8SK8SNginxOrgVirtualServerV1Manifest#set}
  */
  readonly set?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.booleanToTerraform(struct!.pass),
    set: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.booleanToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._set.internalValue = value.set;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: boolean | cdktf.IResolvable; 
  public get pass() {
    return this.getBooleanAttribute('pass');
  }
  public set pass(value: boolean | cdktf.IResolvable) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#always DataK8SK8SNginxOrgVirtualServerV1Manifest#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._always = value.always;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#add DataK8SK8SNginxOrgVirtualServerV1Manifest#add}
  */
  readonly add?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#hide DataK8SK8SNginxOrgVirtualServerV1Manifest#hide}
  */
  readonly hide?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#ignore DataK8SK8SNginxOrgVirtualServerV1Manifest#ignore}
  */
  readonly ignore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: string[];
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddToTerraform, false)(struct!.add),
    hide: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hide),
    ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignore),
    pass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pass),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddList",
    },
    hide: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hide),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignore),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._hide = undefined;
      this._ignore = undefined;
      this._pass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._hide = value.hide;
      this._ignore = value.ignore;
      this._pass = value.pass;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string[]; 
  public get hide() {
    return this.getListAttribute('hide');
  }
  public set hide(value: string[]) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string[]; 
  public get ignore() {
    return this.getListAttribute('ignore');
  }
  public set ignore(value: string[]) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string[]; 
  public get pass() {
    return this.getListAttribute('pass');
  }
  public set pass(value: string[]) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxy {
  /**
  * ProxyRequestHeaders defines the request headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#request_headers DataK8SK8SNginxOrgVirtualServerV1Manifest#request_headers}
  */
  readonly requestHeaders?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeaders;
  /**
  * ProxyResponseHeaders defines the response headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#response_headers DataK8SK8SNginxOrgVirtualServerV1Manifest#response_headers}
  */
  readonly responseHeaders?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#rewrite_path DataK8SK8SNginxOrgVirtualServerV1Manifest#rewrite_path}
  */
  readonly rewritePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#upstream DataK8SK8SNginxOrgVirtualServerV1Manifest#upstream}
  */
  readonly upstream?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersToTerraform(struct!.responseHeaders),
    rewrite_path: cdktf.stringToTerraform(struct!.rewritePath),
    upstream: cdktf.stringToTerraform(struct!.upstream),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeaders",
    },
    response_headers: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeaders",
    },
    rewrite_path: {
      value: cdktf.stringToHclTerraform(struct!.rewritePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream: {
      value: cdktf.stringToHclTerraform(struct!.upstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    if (this._rewritePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePath = this._rewritePath;
    }
    if (this._upstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
      this._rewritePath = undefined;
      this._upstream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
      this._rewritePath = value.rewritePath;
      this._upstream = value.upstream;
    }
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }

  // rewrite_path - computed: false, optional: true, required: false
  private _rewritePath?: string; 
  public get rewritePath() {
    return this.getStringAttribute('rewrite_path');
  }
  public set rewritePath(value: string) {
    this._rewritePath = value;
  }
  public resetRewritePath() {
    this._rewritePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePathInput() {
    return this._rewritePath;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: string; 
  public get upstream() {
    return this.getStringAttribute('upstream');
  }
  public set upstream(value: string) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#url DataK8SK8SNginxOrgVirtualServerV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#body DataK8SK8SNginxOrgVirtualServerV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#type DataK8SK8SNginxOrgVirtualServerV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: string;
  /**
  * ActionProxy defines a proxy in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#proxy DataK8SK8SNginxOrgVirtualServerV1Manifest#proxy}
  */
  readonly proxy?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxy;
  /**
  * ActionRedirect defines a redirect in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirect;
  /**
  * ActionReturn defines a return in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#return DataK8SK8SNginxOrgVirtualServerV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturn;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.stringToTerraform(struct!.pass),
    proxy: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyToTerraform(struct!.proxy),
    redirect: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxy",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._proxy.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._proxy.internalValue = value.proxy;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#url DataK8SK8SNginxOrgVirtualServerV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#body DataK8SK8SNginxOrgVirtualServerV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#type DataK8SK8SNginxOrgVirtualServerV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#codes DataK8SK8SNginxOrgVirtualServerV1Manifest#codes}
  */
  readonly codes?: string[];
  /**
  * ErrorPageRedirect defines a redirect for an ErrorPage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirect;
  /**
  * ErrorPageReturn defines a return for an ErrorPage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#return DataK8SK8SNginxOrgVirtualServerV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturn;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.codes),
    redirect: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.codes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codes !== undefined) {
      hasAnyValues = true;
      internalValueResult.codes = this._codes;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codes = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codes = value.codes;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // codes - computed: false, optional: true, required: false
  private _codes?: string[]; 
  public get codes() {
    return this.getListAttribute('codes');
  }
  public set codes(value: string[]) {
    this._codes = value;
  }
  public resetCodes() {
    this._codes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesInput() {
    return this._codes;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#set DataK8SK8SNginxOrgVirtualServerV1Manifest#set}
  */
  readonly set?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.booleanToTerraform(struct!.pass),
    set: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.booleanToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._set.internalValue = value.set;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: boolean | cdktf.IResolvable; 
  public get pass() {
    return this.getBooleanAttribute('pass');
  }
  public set pass(value: boolean | cdktf.IResolvable) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#always DataK8SK8SNginxOrgVirtualServerV1Manifest#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._always = value.always;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#add DataK8SK8SNginxOrgVirtualServerV1Manifest#add}
  */
  readonly add?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#hide DataK8SK8SNginxOrgVirtualServerV1Manifest#hide}
  */
  readonly hide?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#ignore DataK8SK8SNginxOrgVirtualServerV1Manifest#ignore}
  */
  readonly ignore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: string[];
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddToTerraform, false)(struct!.add),
    hide: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hide),
    ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignore),
    pass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pass),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddList",
    },
    hide: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hide),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignore),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._hide = undefined;
      this._ignore = undefined;
      this._pass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._hide = value.hide;
      this._ignore = value.ignore;
      this._pass = value.pass;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string[]; 
  public get hide() {
    return this.getListAttribute('hide');
  }
  public set hide(value: string[]) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string[]; 
  public get ignore() {
    return this.getListAttribute('ignore');
  }
  public set ignore(value: string[]) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string[]; 
  public get pass() {
    return this.getListAttribute('pass');
  }
  public set pass(value: string[]) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxy {
  /**
  * ProxyRequestHeaders defines the request headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#request_headers DataK8SK8SNginxOrgVirtualServerV1Manifest#request_headers}
  */
  readonly requestHeaders?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeaders;
  /**
  * ProxyResponseHeaders defines the response headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#response_headers DataK8SK8SNginxOrgVirtualServerV1Manifest#response_headers}
  */
  readonly responseHeaders?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#rewrite_path DataK8SK8SNginxOrgVirtualServerV1Manifest#rewrite_path}
  */
  readonly rewritePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#upstream DataK8SK8SNginxOrgVirtualServerV1Manifest#upstream}
  */
  readonly upstream?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersToTerraform(struct!.responseHeaders),
    rewrite_path: cdktf.stringToTerraform(struct!.rewritePath),
    upstream: cdktf.stringToTerraform(struct!.upstream),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeaders",
    },
    response_headers: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeaders",
    },
    rewrite_path: {
      value: cdktf.stringToHclTerraform(struct!.rewritePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream: {
      value: cdktf.stringToHclTerraform(struct!.upstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    if (this._rewritePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePath = this._rewritePath;
    }
    if (this._upstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
      this._rewritePath = undefined;
      this._upstream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
      this._rewritePath = value.rewritePath;
      this._upstream = value.upstream;
    }
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }

  // rewrite_path - computed: false, optional: true, required: false
  private _rewritePath?: string; 
  public get rewritePath() {
    return this.getStringAttribute('rewrite_path');
  }
  public set rewritePath(value: string) {
    this._rewritePath = value;
  }
  public resetRewritePath() {
    this._rewritePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePathInput() {
    return this._rewritePath;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: string; 
  public get upstream() {
    return this.getStringAttribute('upstream');
  }
  public set upstream(value: string) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#url DataK8SK8SNginxOrgVirtualServerV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#body DataK8SK8SNginxOrgVirtualServerV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#type DataK8SK8SNginxOrgVirtualServerV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: string;
  /**
  * ActionProxy defines a proxy in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#proxy DataK8SK8SNginxOrgVirtualServerV1Manifest#proxy}
  */
  readonly proxy?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxy;
  /**
  * ActionRedirect defines a redirect in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirect;
  /**
  * ActionReturn defines a return in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#return DataK8SK8SNginxOrgVirtualServerV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturn;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.stringToTerraform(struct!.pass),
    proxy: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyToTerraform(struct!.proxy),
    redirect: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxy",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._proxy.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._proxy.internalValue = value.proxy;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#argument DataK8SK8SNginxOrgVirtualServerV1Manifest#argument}
  */
  readonly argument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#cookie DataK8SK8SNginxOrgVirtualServerV1Manifest#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#header DataK8SK8SNginxOrgVirtualServerV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#variable DataK8SK8SNginxOrgVirtualServerV1Manifest#variable}
  */
  readonly variable?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argument: cdktf.stringToTerraform(struct!.argument),
    cookie: cdktf.stringToTerraform(struct!.cookie),
    header: cdktf.stringToTerraform(struct!.header),
    value: cdktf.stringToTerraform(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argument: {
      value: cdktf.stringToHclTerraform(struct!.argument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
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
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argument !== undefined) {
      hasAnyValues = true;
      internalValueResult.argument = this._argument;
    }
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argument = undefined;
      this._cookie = undefined;
      this._header = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argument = value.argument;
      this._cookie = value.cookie;
      this._header = value.header;
      this._value = value.value;
      this._variable = value.variable;
    }
  }

  // argument - computed: false, optional: true, required: false
  private _argument?: string; 
  public get argument() {
    return this.getStringAttribute('argument');
  }
  public set argument(value: string) {
    this._argument = value;
  }
  public resetArgument() {
    this._argument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentInput() {
    return this._argument;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#set DataK8SK8SNginxOrgVirtualServerV1Manifest#set}
  */
  readonly set?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.booleanToTerraform(struct!.pass),
    set: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.booleanToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._set.internalValue = value.set;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: boolean | cdktf.IResolvable; 
  public get pass() {
    return this.getBooleanAttribute('pass');
  }
  public set pass(value: boolean | cdktf.IResolvable) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#always DataK8SK8SNginxOrgVirtualServerV1Manifest#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._always = value.always;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#add DataK8SK8SNginxOrgVirtualServerV1Manifest#add}
  */
  readonly add?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#hide DataK8SK8SNginxOrgVirtualServerV1Manifest#hide}
  */
  readonly hide?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#ignore DataK8SK8SNginxOrgVirtualServerV1Manifest#ignore}
  */
  readonly ignore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: string[];
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddToTerraform, false)(struct!.add),
    hide: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hide),
    ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignore),
    pass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pass),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddList",
    },
    hide: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hide),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignore),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._hide = undefined;
      this._ignore = undefined;
      this._pass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._hide = value.hide;
      this._ignore = value.ignore;
      this._pass = value.pass;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string[]; 
  public get hide() {
    return this.getListAttribute('hide');
  }
  public set hide(value: string[]) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string[]; 
  public get ignore() {
    return this.getListAttribute('ignore');
  }
  public set ignore(value: string[]) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string[]; 
  public get pass() {
    return this.getListAttribute('pass');
  }
  public set pass(value: string[]) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxy {
  /**
  * ProxyRequestHeaders defines the request headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#request_headers DataK8SK8SNginxOrgVirtualServerV1Manifest#request_headers}
  */
  readonly requestHeaders?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeaders;
  /**
  * ProxyResponseHeaders defines the response headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#response_headers DataK8SK8SNginxOrgVirtualServerV1Manifest#response_headers}
  */
  readonly responseHeaders?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#rewrite_path DataK8SK8SNginxOrgVirtualServerV1Manifest#rewrite_path}
  */
  readonly rewritePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#upstream DataK8SK8SNginxOrgVirtualServerV1Manifest#upstream}
  */
  readonly upstream?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersToTerraform(struct!.responseHeaders),
    rewrite_path: cdktf.stringToTerraform(struct!.rewritePath),
    upstream: cdktf.stringToTerraform(struct!.upstream),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeaders",
    },
    response_headers: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeaders",
    },
    rewrite_path: {
      value: cdktf.stringToHclTerraform(struct!.rewritePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream: {
      value: cdktf.stringToHclTerraform(struct!.upstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    if (this._rewritePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePath = this._rewritePath;
    }
    if (this._upstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
      this._rewritePath = undefined;
      this._upstream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
      this._rewritePath = value.rewritePath;
      this._upstream = value.upstream;
    }
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }

  // rewrite_path - computed: false, optional: true, required: false
  private _rewritePath?: string; 
  public get rewritePath() {
    return this.getStringAttribute('rewrite_path');
  }
  public set rewritePath(value: string) {
    this._rewritePath = value;
  }
  public resetRewritePath() {
    this._rewritePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePathInput() {
    return this._rewritePath;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: string; 
  public get upstream() {
    return this.getStringAttribute('upstream');
  }
  public set upstream(value: string) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#url DataK8SK8SNginxOrgVirtualServerV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#body DataK8SK8SNginxOrgVirtualServerV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#type DataK8SK8SNginxOrgVirtualServerV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: string;
  /**
  * ActionProxy defines a proxy in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#proxy DataK8SK8SNginxOrgVirtualServerV1Manifest#proxy}
  */
  readonly proxy?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxy;
  /**
  * ActionRedirect defines a redirect in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirect;
  /**
  * ActionReturn defines a return in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#return DataK8SK8SNginxOrgVirtualServerV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturn;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.stringToTerraform(struct!.pass),
    proxy: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyToTerraform(struct!.proxy),
    redirect: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxy",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._proxy.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._proxy.internalValue = value.proxy;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplits {
  /**
  * Action defines an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#action DataK8SK8SNginxOrgVirtualServerV1Manifest#action}
  */
  readonly action?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#weight DataK8SK8SNginxOrgVirtualServerV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionToTerraform(struct!.action),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsAction",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._weight = value.weight;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplits[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatches {
  /**
  * Action defines an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#action DataK8SK8SNginxOrgVirtualServerV1Manifest#action}
  */
  readonly action?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#conditions DataK8SK8SNginxOrgVirtualServerV1Manifest#conditions}
  */
  readonly conditions?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#splits DataK8SK8SNginxOrgVirtualServerV1Manifest#splits}
  */
  readonly splits?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplits[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionToTerraform(struct!.action),
    conditions: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsToTerraform, false)(struct!.conditions),
    splits: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsToTerraform, false)(struct!.splits),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesAction",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsList",
    },
    splits: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsToHclTerraform, false)(struct!.splits),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._splits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splits = this._splits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._conditions.internalValue = undefined;
      this._splits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._conditions.internalValue = value.conditions;
      this._splits.internalValue = value.splits;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // splits - computed: false, optional: true, required: false
  private _splits = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplitsList(this, "splits", false);
  public get splits() {
    return this._splits;
  }
  public putSplits(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesSplits[] | cdktf.IResolvable) {
    this._splits.internalValue = value;
  }
  public resetSplits() {
    this._splits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitsInput() {
    return this._splits.internalValue;
  }
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#namespace DataK8SK8SNginxOrgVirtualServerV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPolicies | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#set DataK8SK8SNginxOrgVirtualServerV1Manifest#set}
  */
  readonly set?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.booleanToTerraform(struct!.pass),
    set: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.booleanToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._set.internalValue = value.set;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: boolean | cdktf.IResolvable; 
  public get pass() {
    return this.getBooleanAttribute('pass');
  }
  public set pass(value: boolean | cdktf.IResolvable) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#always DataK8SK8SNginxOrgVirtualServerV1Manifest#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._always = value.always;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#add DataK8SK8SNginxOrgVirtualServerV1Manifest#add}
  */
  readonly add?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#hide DataK8SK8SNginxOrgVirtualServerV1Manifest#hide}
  */
  readonly hide?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#ignore DataK8SK8SNginxOrgVirtualServerV1Manifest#ignore}
  */
  readonly ignore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: string[];
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddToTerraform, false)(struct!.add),
    hide: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hide),
    ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignore),
    pass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pass),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddList",
    },
    hide: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hide),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignore),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._hide = undefined;
      this._ignore = undefined;
      this._pass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._hide = value.hide;
      this._ignore = value.ignore;
      this._pass = value.pass;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string[]; 
  public get hide() {
    return this.getListAttribute('hide');
  }
  public set hide(value: string[]) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string[]; 
  public get ignore() {
    return this.getListAttribute('ignore');
  }
  public set ignore(value: string[]) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string[]; 
  public get pass() {
    return this.getListAttribute('pass');
  }
  public set pass(value: string[]) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxy {
  /**
  * ProxyRequestHeaders defines the request headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#request_headers DataK8SK8SNginxOrgVirtualServerV1Manifest#request_headers}
  */
  readonly requestHeaders?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeaders;
  /**
  * ProxyResponseHeaders defines the response headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#response_headers DataK8SK8SNginxOrgVirtualServerV1Manifest#response_headers}
  */
  readonly responseHeaders?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#rewrite_path DataK8SK8SNginxOrgVirtualServerV1Manifest#rewrite_path}
  */
  readonly rewritePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#upstream DataK8SK8SNginxOrgVirtualServerV1Manifest#upstream}
  */
  readonly upstream?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersToTerraform(struct!.responseHeaders),
    rewrite_path: cdktf.stringToTerraform(struct!.rewritePath),
    upstream: cdktf.stringToTerraform(struct!.upstream),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeaders",
    },
    response_headers: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeaders",
    },
    rewrite_path: {
      value: cdktf.stringToHclTerraform(struct!.rewritePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream: {
      value: cdktf.stringToHclTerraform(struct!.upstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    if (this._rewritePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePath = this._rewritePath;
    }
    if (this._upstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
      this._rewritePath = undefined;
      this._upstream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
      this._rewritePath = value.rewritePath;
      this._upstream = value.upstream;
    }
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }

  // rewrite_path - computed: false, optional: true, required: false
  private _rewritePath?: string; 
  public get rewritePath() {
    return this.getStringAttribute('rewrite_path');
  }
  public set rewritePath(value: string) {
    this._rewritePath = value;
  }
  public resetRewritePath() {
    this._rewritePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePathInput() {
    return this._rewritePath;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: string; 
  public get upstream() {
    return this.getStringAttribute('upstream');
  }
  public set upstream(value: string) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#url DataK8SK8SNginxOrgVirtualServerV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#body DataK8SK8SNginxOrgVirtualServerV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#type DataK8SK8SNginxOrgVirtualServerV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerV1Manifest#pass}
  */
  readonly pass?: string;
  /**
  * ActionProxy defines a proxy in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#proxy DataK8SK8SNginxOrgVirtualServerV1Manifest#proxy}
  */
  readonly proxy?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxy;
  /**
  * ActionRedirect defines a redirect in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirect;
  /**
  * ActionReturn defines a return in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#return DataK8SK8SNginxOrgVirtualServerV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturn;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.stringToTerraform(struct!.pass),
    proxy: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyToTerraform(struct!.proxy),
    redirect: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxy",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._proxy.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._proxy.internalValue = value.proxy;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplits {
  /**
  * Action defines an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#action DataK8SK8SNginxOrgVirtualServerV1Manifest#action}
  */
  readonly action?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#weight DataK8SK8SNginxOrgVirtualServerV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionToTerraform(struct!.action),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsAction",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._weight = value.weight;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplits[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutes {
  /**
  * Action defines an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#action DataK8SK8SNginxOrgVirtualServerV1Manifest#action}
  */
  readonly action?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#dos DataK8SK8SNginxOrgVirtualServerV1Manifest#dos}
  */
  readonly dos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#error_pages DataK8SK8SNginxOrgVirtualServerV1Manifest#error_pages}
  */
  readonly errorPages?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPages[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#location_snippets DataK8SK8SNginxOrgVirtualServerV1Manifest#location_snippets}
  */
  readonly locationSnippets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#matches DataK8SK8SNginxOrgVirtualServerV1Manifest#matches}
  */
  readonly matches?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatches[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#path DataK8SK8SNginxOrgVirtualServerV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#policies DataK8SK8SNginxOrgVirtualServerV1Manifest#policies}
  */
  readonly policies?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPolicies[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#route DataK8SK8SNginxOrgVirtualServerV1Manifest#route}
  */
  readonly route?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#splits DataK8SK8SNginxOrgVirtualServerV1Manifest#splits}
  */
  readonly splits?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplits[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionToTerraform(struct!.action),
    dos: cdktf.stringToTerraform(struct!.dos),
    error_pages: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesToTerraform, false)(struct!.errorPages),
    location_snippets: cdktf.stringToTerraform(struct!.locationSnippets),
    matches: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesToTerraform, false)(struct!.matches),
    path: cdktf.stringToTerraform(struct!.path),
    policies: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesToTerraform, false)(struct!.policies),
    route: cdktf.stringToTerraform(struct!.route),
    splits: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsToTerraform, false)(struct!.splits),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesAction",
    },
    dos: {
      value: cdktf.stringToHclTerraform(struct!.dos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_pages: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesToHclTerraform, false)(struct!.errorPages),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesList",
    },
    location_snippets: {
      value: cdktf.stringToHclTerraform(struct!.locationSnippets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matches: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesToHclTerraform, false)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesList",
    },
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splits: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsToHclTerraform, false)(struct!.splits),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._dos !== undefined) {
      hasAnyValues = true;
      internalValueResult.dos = this._dos;
    }
    if (this._errorPages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPages = this._errorPages?.internalValue;
    }
    if (this._locationSnippets !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationSnippets = this._locationSnippets;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    if (this._splits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splits = this._splits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._dos = undefined;
      this._errorPages.internalValue = undefined;
      this._locationSnippets = undefined;
      this._matches.internalValue = undefined;
      this._path = undefined;
      this._policies.internalValue = undefined;
      this._route = undefined;
      this._splits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._dos = value.dos;
      this._errorPages.internalValue = value.errorPages;
      this._locationSnippets = value.locationSnippets;
      this._matches.internalValue = value.matches;
      this._path = value.path;
      this._policies.internalValue = value.policies;
      this._route = value.route;
      this._splits.internalValue = value.splits;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // dos - computed: false, optional: true, required: false
  private _dos?: string; 
  public get dos() {
    return this.getStringAttribute('dos');
  }
  public set dos(value: string) {
    this._dos = value;
  }
  public resetDos() {
    this._dos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosInput() {
    return this._dos;
  }

  // error_pages - computed: false, optional: true, required: false
  private _errorPages = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPagesList(this, "error_pages", false);
  public get errorPages() {
    return this._errorPages;
  }
  public putErrorPages(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesErrorPages[] | cdktf.IResolvable) {
    this._errorPages.internalValue = value;
  }
  public resetErrorPages() {
    this._errorPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPagesInput() {
    return this._errorPages.internalValue;
  }

  // location_snippets - computed: false, optional: true, required: false
  private _locationSnippets?: string; 
  public get locationSnippets() {
    return this.getStringAttribute('location_snippets');
  }
  public set locationSnippets(value: string) {
    this._locationSnippets = value;
  }
  public resetLocationSnippets() {
    this._locationSnippets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationSnippetsInput() {
    return this._locationSnippets;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // splits - computed: false, optional: true, required: false
  private _splits = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplitsList(this, "splits", false);
  public get splits() {
    return this._splits;
  }
  public putSplits(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesSplits[] | cdktf.IResolvable) {
    this._splits.internalValue = value;
  }
  public resetSplits() {
    this._splits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitsInput() {
    return this._splits.internalValue;
  }
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManager {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#cluster_issuer DataK8SK8SNginxOrgVirtualServerV1Manifest#cluster_issuer}
  */
  readonly clusterIssuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#common_name DataK8SK8SNginxOrgVirtualServerV1Manifest#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#duration DataK8SK8SNginxOrgVirtualServerV1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#issue_temp_cert DataK8SK8SNginxOrgVirtualServerV1Manifest#issue_temp_cert}
  */
  readonly issueTempCert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#issuer DataK8SK8SNginxOrgVirtualServerV1Manifest#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#issuer_group DataK8SK8SNginxOrgVirtualServerV1Manifest#issuer_group}
  */
  readonly issuerGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#issuer_kind DataK8SK8SNginxOrgVirtualServerV1Manifest#issuer_kind}
  */
  readonly issuerKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#renew_before DataK8SK8SNginxOrgVirtualServerV1Manifest#renew_before}
  */
  readonly renewBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#usages DataK8SK8SNginxOrgVirtualServerV1Manifest#usages}
  */
  readonly usages?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManagerToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_issuer: cdktf.stringToTerraform(struct!.clusterIssuer),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    duration: cdktf.stringToTerraform(struct!.duration),
    issue_temp_cert: cdktf.booleanToTerraform(struct!.issueTempCert),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuer_group: cdktf.stringToTerraform(struct!.issuerGroup),
    issuer_kind: cdktf.stringToTerraform(struct!.issuerKind),
    renew_before: cdktf.stringToTerraform(struct!.renewBefore),
    usages: cdktf.stringToTerraform(struct!.usages),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManagerToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_issuer: {
      value: cdktf.stringToHclTerraform(struct!.clusterIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_temp_cert: {
      value: cdktf.booleanToHclTerraform(struct!.issueTempCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_group: {
      value: cdktf.stringToHclTerraform(struct!.issuerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_kind: {
      value: cdktf.stringToHclTerraform(struct!.issuerKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_before: {
      value: cdktf.stringToHclTerraform(struct!.renewBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usages: {
      value: cdktf.stringToHclTerraform(struct!.usages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIssuer = this._clusterIssuer;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._issueTempCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueTempCert = this._issueTempCert;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerGroup = this._issuerGroup;
    }
    if (this._issuerKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerKind = this._issuerKind;
    }
    if (this._renewBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewBefore = this._renewBefore;
    }
    if (this._usages !== undefined) {
      hasAnyValues = true;
      internalValueResult.usages = this._usages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIssuer = undefined;
      this._commonName = undefined;
      this._duration = undefined;
      this._issueTempCert = undefined;
      this._issuer = undefined;
      this._issuerGroup = undefined;
      this._issuerKind = undefined;
      this._renewBefore = undefined;
      this._usages = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIssuer = value.clusterIssuer;
      this._commonName = value.commonName;
      this._duration = value.duration;
      this._issueTempCert = value.issueTempCert;
      this._issuer = value.issuer;
      this._issuerGroup = value.issuerGroup;
      this._issuerKind = value.issuerKind;
      this._renewBefore = value.renewBefore;
      this._usages = value.usages;
    }
  }

  // cluster_issuer - computed: false, optional: true, required: false
  private _clusterIssuer?: string; 
  public get clusterIssuer() {
    return this.getStringAttribute('cluster_issuer');
  }
  public set clusterIssuer(value: string) {
    this._clusterIssuer = value;
  }
  public resetClusterIssuer() {
    this._clusterIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIssuerInput() {
    return this._clusterIssuer;
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

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // issue_temp_cert - computed: false, optional: true, required: false
  private _issueTempCert?: boolean | cdktf.IResolvable; 
  public get issueTempCert() {
    return this.getBooleanAttribute('issue_temp_cert');
  }
  public set issueTempCert(value: boolean | cdktf.IResolvable) {
    this._issueTempCert = value;
  }
  public resetIssueTempCert() {
    this._issueTempCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTempCertInput() {
    return this._issueTempCert;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuer_group - computed: false, optional: true, required: false
  private _issuerGroup?: string; 
  public get issuerGroup() {
    return this.getStringAttribute('issuer_group');
  }
  public set issuerGroup(value: string) {
    this._issuerGroup = value;
  }
  public resetIssuerGroup() {
    this._issuerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerGroupInput() {
    return this._issuerGroup;
  }

  // issuer_kind - computed: false, optional: true, required: false
  private _issuerKind?: string; 
  public get issuerKind() {
    return this.getStringAttribute('issuer_kind');
  }
  public set issuerKind(value: string) {
    this._issuerKind = value;
  }
  public resetIssuerKind() {
    this._issuerKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerKindInput() {
    return this._issuerKind;
  }

  // renew_before - computed: false, optional: true, required: false
  private _renewBefore?: string; 
  public get renewBefore() {
    return this.getStringAttribute('renew_before');
  }
  public set renewBefore(value: string) {
    this._renewBefore = value;
  }
  public resetRenewBefore() {
    this._renewBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeInput() {
    return this._renewBefore;
  }

  // usages - computed: false, optional: true, required: false
  private _usages?: string; 
  public get usages() {
    return this.getStringAttribute('usages');
  }
  public set usages(value: string) {
    this._usages = value;
  }
  public resetUsages() {
    this._usages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#based_on DataK8SK8SNginxOrgVirtualServerV1Manifest#based_on}
  */
  readonly basedOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#code DataK8SK8SNginxOrgVirtualServerV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    based_on: cdktf.stringToTerraform(struct!.basedOn),
    code: cdktf.numberToTerraform(struct!.code),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    based_on: {
      value: cdktf.stringToHclTerraform(struct!.basedOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basedOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.basedOn = this._basedOn;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basedOn = undefined;
      this._code = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basedOn = value.basedOn;
      this._code = value.code;
      this._enable = value.enable;
    }
  }

  // based_on - computed: false, optional: true, required: false
  private _basedOn?: string; 
  public get basedOn() {
    return this.getStringAttribute('based_on');
  }
  public set basedOn(value: string) {
    this._basedOn = value;
  }
  public resetBasedOn() {
    this._basedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basedOnInput() {
    return this._basedOn;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTls {
  /**
  * CertManager defines a cert manager config for a TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#cert_manager DataK8SK8SNginxOrgVirtualServerV1Manifest#cert_manager}
  */
  readonly certManager?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManager;
  /**
  * TLSRedirect defines a redirect for a TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#secret DataK8SK8SNginxOrgVirtualServerV1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_manager: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManagerToTerraform(struct!.certManager),
    redirect: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirectToTerraform(struct!.redirect),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_manager: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManagerToHclTerraform(struct!.certManager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManager",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirect",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certManager = this._certManager?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certManager.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certManager.internalValue = value.certManager;
      this._redirect.internalValue = value.redirect;
      this._secret = value.secret;
    }
  }

  // cert_manager - computed: false, optional: true, required: false
  private _certManager = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManagerOutputReference(this, "cert_manager");
  public get certManager() {
    return this._certManager;
  }
  public putCertManager(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsCertManager) {
    this._certManager.internalValue = value;
  }
  public resetCertManager() {
    this._certManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certManagerInput() {
    return this._certManager.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#number DataK8SK8SNginxOrgVirtualServerV1Manifest#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#size DataK8SK8SNginxOrgVirtualServerV1Manifest#size}
  */
  readonly size?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._size = value.size;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#value DataK8SK8SNginxOrgVirtualServerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTlsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTlsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#connect_timeout DataK8SK8SNginxOrgVirtualServerV1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#fails DataK8SK8SNginxOrgVirtualServerV1Manifest#fails}
  */
  readonly fails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#grpc_service DataK8SK8SNginxOrgVirtualServerV1Manifest#grpc_service}
  */
  readonly grpcService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#grpc_status DataK8SK8SNginxOrgVirtualServerV1Manifest#grpc_status}
  */
  readonly grpcStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#interval DataK8SK8SNginxOrgVirtualServerV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#jitter DataK8SK8SNginxOrgVirtualServerV1Manifest#jitter}
  */
  readonly jitter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#keepalive_time DataK8SK8SNginxOrgVirtualServerV1Manifest#keepalive_time}
  */
  readonly keepaliveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#mandatory DataK8SK8SNginxOrgVirtualServerV1Manifest#mandatory}
  */
  readonly mandatory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#passes DataK8SK8SNginxOrgVirtualServerV1Manifest#passes}
  */
  readonly passes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#path DataK8SK8SNginxOrgVirtualServerV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#persistent DataK8SK8SNginxOrgVirtualServerV1Manifest#persistent}
  */
  readonly persistent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#port DataK8SK8SNginxOrgVirtualServerV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#read_timeout DataK8SK8SNginxOrgVirtualServerV1Manifest#read_timeout}
  */
  readonly readTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#send_timeout DataK8SK8SNginxOrgVirtualServerV1Manifest#send_timeout}
  */
  readonly sendTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#status_match DataK8SK8SNginxOrgVirtualServerV1Manifest#status_match}
  */
  readonly statusMatch?: string;
  /**
  * UpstreamTLS defines a TLS configuration for an Upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#tls DataK8SK8SNginxOrgVirtualServerV1Manifest#tls}
  */
  readonly tls?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTls;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    enable: cdktf.booleanToTerraform(struct!.enable),
    fails: cdktf.numberToTerraform(struct!.fails),
    grpc_service: cdktf.stringToTerraform(struct!.grpcService),
    grpc_status: cdktf.numberToTerraform(struct!.grpcStatus),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersToTerraform, false)(struct!.headers),
    interval: cdktf.stringToTerraform(struct!.interval),
    jitter: cdktf.stringToTerraform(struct!.jitter),
    keepalive_time: cdktf.stringToTerraform(struct!.keepaliveTime),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
    passes: cdktf.numberToTerraform(struct!.passes),
    path: cdktf.stringToTerraform(struct!.path),
    persistent: cdktf.booleanToTerraform(struct!.persistent),
    port: cdktf.numberToTerraform(struct!.port),
    read_timeout: cdktf.stringToTerraform(struct!.readTimeout),
    send_timeout: cdktf.stringToTerraform(struct!.sendTimeout),
    status_match: cdktf.stringToTerraform(struct!.statusMatch),
    tls: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTlsToTerraform(struct!.tls),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fails: {
      value: cdktf.numberToHclTerraform(struct!.fails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc_service: {
      value: cdktf.stringToHclTerraform(struct!.grpcService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grpc_status: {
      value: cdktf.numberToHclTerraform(struct!.grpcStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jitter: {
      value: cdktf.stringToHclTerraform(struct!.jitter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory: {
      value: cdktf.booleanToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passes: {
      value: cdktf.numberToHclTerraform(struct!.passes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent: {
      value: cdktf.booleanToHclTerraform(struct!.persistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_timeout: {
      value: cdktf.stringToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_match: {
      value: cdktf.stringToHclTerraform(struct!.statusMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._fails !== undefined) {
      hasAnyValues = true;
      internalValueResult.fails = this._fails;
    }
    if (this._grpcService !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcService = this._grpcService;
    }
    if (this._grpcStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcStatus = this._grpcStatus;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    if (this._passes !== undefined) {
      hasAnyValues = true;
      internalValueResult.passes = this._passes;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._persistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistent = this._persistent;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._statusMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusMatch = this._statusMatch;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._enable = undefined;
      this._fails = undefined;
      this._grpcService = undefined;
      this._grpcStatus = undefined;
      this._headers.internalValue = undefined;
      this._interval = undefined;
      this._jitter = undefined;
      this._keepaliveTime = undefined;
      this._mandatory = undefined;
      this._passes = undefined;
      this._path = undefined;
      this._persistent = undefined;
      this._port = undefined;
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._statusMatch = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._enable = value.enable;
      this._fails = value.fails;
      this._grpcService = value.grpcService;
      this._grpcStatus = value.grpcStatus;
      this._headers.internalValue = value.headers;
      this._interval = value.interval;
      this._jitter = value.jitter;
      this._keepaliveTime = value.keepaliveTime;
      this._mandatory = value.mandatory;
      this._passes = value.passes;
      this._path = value.path;
      this._persistent = value.persistent;
      this._port = value.port;
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._statusMatch = value.statusMatch;
      this._tls.internalValue = value.tls;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // fails - computed: false, optional: true, required: false
  private _fails?: number; 
  public get fails() {
    return this.getNumberAttribute('fails');
  }
  public set fails(value: number) {
    this._fails = value;
  }
  public resetFails() {
    this._fails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failsInput() {
    return this._fails;
  }

  // grpc_service - computed: false, optional: true, required: false
  private _grpcService?: string; 
  public get grpcService() {
    return this.getStringAttribute('grpc_service');
  }
  public set grpcService(value: string) {
    this._grpcService = value;
  }
  public resetGrpcService() {
    this._grpcService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceInput() {
    return this._grpcService;
  }

  // grpc_status - computed: false, optional: true, required: false
  private _grpcStatus?: number; 
  public get grpcStatus() {
    return this.getNumberAttribute('grpc_status');
  }
  public set grpcStatus(value: number) {
    this._grpcStatus = value;
  }
  public resetGrpcStatus() {
    this._grpcStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcStatusInput() {
    return this._grpcStatus;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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

  // jitter - computed: false, optional: true, required: false
  private _jitter?: string; 
  public get jitter() {
    return this.getStringAttribute('jitter');
  }
  public set jitter(value: string) {
    this._jitter = value;
  }
  public resetJitter() {
    this._jitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: string; 
  public get keepaliveTime() {
    return this.getStringAttribute('keepalive_time');
  }
  public set keepaliveTime(value: string) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // mandatory - computed: false, optional: true, required: false
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  public resetMandatory() {
    this._mandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }

  // passes - computed: false, optional: true, required: false
  private _passes?: number; 
  public get passes() {
    return this.getNumberAttribute('passes');
  }
  public set passes(value: number) {
    this._passes = value;
  }
  public resetPasses() {
    this._passes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passesInput() {
    return this._passes;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // persistent - computed: false, optional: true, required: false
  private _persistent?: boolean | cdktf.IResolvable; 
  public get persistent() {
    return this.getBooleanAttribute('persistent');
  }
  public set persistent(value: boolean | cdktf.IResolvable) {
    this._persistent = value;
  }
  public resetPersistent() {
    this._persistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentInput() {
    return this._persistent;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: string; 
  public get readTimeout() {
    return this.getStringAttribute('read_timeout');
  }
  public set readTimeout(value: string) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // send_timeout - computed: false, optional: true, required: false
  private _sendTimeout?: string; 
  public get sendTimeout() {
    return this.getStringAttribute('send_timeout');
  }
  public set sendTimeout(value: string) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // status_match - computed: false, optional: true, required: false
  private _statusMatch?: string; 
  public get statusMatch() {
    return this.getStringAttribute('status_match');
  }
  public set statusMatch(value: string) {
    this._statusMatch = value;
  }
  public resetStatusMatch() {
    this._statusMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusMatchInput() {
    return this._statusMatch;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#size DataK8SK8SNginxOrgVirtualServerV1Manifest#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#timeout DataK8SK8SNginxOrgVirtualServerV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueueToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueueToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._timeout = value.timeout;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#domain DataK8SK8SNginxOrgVirtualServerV1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#expires DataK8SK8SNginxOrgVirtualServerV1Manifest#expires}
  */
  readonly expires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#http_only DataK8SK8SNginxOrgVirtualServerV1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#path DataK8SK8SNginxOrgVirtualServerV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#samesite DataK8SK8SNginxOrgVirtualServerV1Manifest#samesite}
  */
  readonly samesite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#secure DataK8SK8SNginxOrgVirtualServerV1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookieToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    enable: cdktf.booleanToTerraform(struct!.enable),
    expires: cdktf.stringToTerraform(struct!.expires),
    http_only: cdktf.booleanToTerraform(struct!.httpOnly),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    samesite: cdktf.stringToTerraform(struct!.samesite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookieToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookie | cdktf.IResolvable): any {
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
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expires: {
      value: cdktf.stringToHclTerraform(struct!.expires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samesite: {
      value: cdktf.stringToHclTerraform(struct!.samesite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._samesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesite = this._samesite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._enable = undefined;
      this._expires = undefined;
      this._httpOnly = undefined;
      this._name = undefined;
      this._path = undefined;
      this._samesite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._enable = value.enable;
      this._expires = value.expires;
      this._httpOnly = value.httpOnly;
      this._name = value.name;
      this._path = value.path;
      this._samesite = value.samesite;
      this._secure = value.secure;
    }
  }

  // domain - computed: false, optional: true, required: false
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // samesite - computed: false, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTlsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTlsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#backup DataK8SK8SNginxOrgVirtualServerV1Manifest#backup}
  */
  readonly backup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#backup_port DataK8SK8SNginxOrgVirtualServerV1Manifest#backup_port}
  */
  readonly backupPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#buffer_size DataK8SK8SNginxOrgVirtualServerV1Manifest#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#buffering DataK8SK8SNginxOrgVirtualServerV1Manifest#buffering}
  */
  readonly buffering?: boolean | cdktf.IResolvable;
  /**
  * UpstreamBuffers defines Buffer Configuration for an Upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#buffers DataK8SK8SNginxOrgVirtualServerV1Manifest#buffers}
  */
  readonly buffers?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffers;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#client_max_body_size DataK8SK8SNginxOrgVirtualServerV1Manifest#client_max_body_size}
  */
  readonly clientMaxBodySize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#connect_timeout DataK8SK8SNginxOrgVirtualServerV1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#fail_timeout DataK8SK8SNginxOrgVirtualServerV1Manifest#fail_timeout}
  */
  readonly failTimeout?: string;
  /**
  * HealthCheck defines the parameters for active Upstream HealthChecks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#health_check DataK8SK8SNginxOrgVirtualServerV1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#keepalive DataK8SK8SNginxOrgVirtualServerV1Manifest#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#lb_method DataK8SK8SNginxOrgVirtualServerV1Manifest#lb_method}
  */
  readonly lbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#max_conns DataK8SK8SNginxOrgVirtualServerV1Manifest#max_conns}
  */
  readonly maxConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#max_fails DataK8SK8SNginxOrgVirtualServerV1Manifest#max_fails}
  */
  readonly maxFails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#name DataK8SK8SNginxOrgVirtualServerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#next_upstream DataK8SK8SNginxOrgVirtualServerV1Manifest#next_upstream}
  */
  readonly nextUpstream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#next_upstream_timeout DataK8SK8SNginxOrgVirtualServerV1Manifest#next_upstream_timeout}
  */
  readonly nextUpstreamTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#next_upstream_tries DataK8SK8SNginxOrgVirtualServerV1Manifest#next_upstream_tries}
  */
  readonly nextUpstreamTries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#ntlm DataK8SK8SNginxOrgVirtualServerV1Manifest#ntlm}
  */
  readonly ntlm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#port DataK8SK8SNginxOrgVirtualServerV1Manifest#port}
  */
  readonly port?: number;
  /**
  * UpstreamQueue defines Queue Configuration for an Upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#queue DataK8SK8SNginxOrgVirtualServerV1Manifest#queue}
  */
  readonly queue?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#read_timeout DataK8SK8SNginxOrgVirtualServerV1Manifest#read_timeout}
  */
  readonly readTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#send_timeout DataK8SK8SNginxOrgVirtualServerV1Manifest#send_timeout}
  */
  readonly sendTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#service DataK8SK8SNginxOrgVirtualServerV1Manifest#service}
  */
  readonly service?: string;
  /**
  * SessionCookie defines the parameters for session persistence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#session_cookie DataK8SK8SNginxOrgVirtualServerV1Manifest#session_cookie}
  */
  readonly sessionCookie?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookie;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#slow_start DataK8SK8SNginxOrgVirtualServerV1Manifest#slow_start}
  */
  readonly slowStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#subselector DataK8SK8SNginxOrgVirtualServerV1Manifest#subselector}
  */
  readonly subselector?: { [key: string]: string };
  /**
  * UpstreamTLS defines a TLS configuration for an Upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#tls DataK8SK8SNginxOrgVirtualServerV1Manifest#tls}
  */
  readonly tls?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#type DataK8SK8SNginxOrgVirtualServerV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#use_cluster_ip DataK8SK8SNginxOrgVirtualServerV1Manifest#use_cluster_ip}
  */
  readonly useClusterIp?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.stringToTerraform(struct!.backup),
    backup_port: cdktf.numberToTerraform(struct!.backupPort),
    buffer_size: cdktf.stringToTerraform(struct!.bufferSize),
    buffering: cdktf.booleanToTerraform(struct!.buffering),
    buffers: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffersToTerraform(struct!.buffers),
    client_max_body_size: cdktf.stringToTerraform(struct!.clientMaxBodySize),
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    fail_timeout: cdktf.stringToTerraform(struct!.failTimeout),
    health_check: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckToTerraform(struct!.healthCheck),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    lb_method: cdktf.stringToTerraform(struct!.lbMethod),
    max_conns: cdktf.numberToTerraform(struct!.maxConns),
    max_fails: cdktf.numberToTerraform(struct!.maxFails),
    name: cdktf.stringToTerraform(struct!.name),
    next_upstream: cdktf.stringToTerraform(struct!.nextUpstream),
    next_upstream_timeout: cdktf.stringToTerraform(struct!.nextUpstreamTimeout),
    next_upstream_tries: cdktf.numberToTerraform(struct!.nextUpstreamTries),
    ntlm: cdktf.booleanToTerraform(struct!.ntlm),
    port: cdktf.numberToTerraform(struct!.port),
    queue: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueueToTerraform(struct!.queue),
    read_timeout: cdktf.stringToTerraform(struct!.readTimeout),
    send_timeout: cdktf.stringToTerraform(struct!.sendTimeout),
    service: cdktf.stringToTerraform(struct!.service),
    session_cookie: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookieToTerraform(struct!.sessionCookie),
    slow_start: cdktf.stringToTerraform(struct!.slowStart),
    subselector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.subselector),
    tls: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
    use_cluster_ip: cdktf.booleanToTerraform(struct!.useClusterIp),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.stringToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_port: {
      value: cdktf.numberToHclTerraform(struct!.backupPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering: {
      value: cdktf.booleanToHclTerraform(struct!.buffering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    buffers: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffersToHclTerraform(struct!.buffers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffers",
    },
    client_max_body_size: {
      value: cdktf.stringToHclTerraform(struct!.clientMaxBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_timeout: {
      value: cdktf.stringToHclTerraform(struct!.failTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheck",
    },
    keepalive: {
      value: cdktf.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_method: {
      value: cdktf.stringToHclTerraform(struct!.lbMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_conns: {
      value: cdktf.numberToHclTerraform(struct!.maxConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_fails: {
      value: cdktf.numberToHclTerraform(struct!.maxFails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_upstream: {
      value: cdktf.stringToHclTerraform(struct!.nextUpstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_upstream_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nextUpstreamTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_upstream_tries: {
      value: cdktf.numberToHclTerraform(struct!.nextUpstreamTries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm: {
      value: cdktf.booleanToHclTerraform(struct!.ntlm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueueToHclTerraform(struct!.queue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueue",
    },
    read_timeout: {
      value: cdktf.stringToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookieToHclTerraform(struct!.sessionCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookie",
    },
    slow_start: {
      value: cdktf.stringToHclTerraform(struct!.slowStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subselector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.subselector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tls: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTls",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cluster_ip: {
      value: cdktf.booleanToHclTerraform(struct!.useClusterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._backupPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPort = this._backupPort;
    }
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._buffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffering = this._buffering;
    }
    if (this._buffers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffers = this._buffers?.internalValue;
    }
    if (this._clientMaxBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMaxBodySize = this._clientMaxBodySize;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._failTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.failTimeout = this._failTimeout;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._lbMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbMethod = this._lbMethod;
    }
    if (this._maxConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConns = this._maxConns;
    }
    if (this._maxFails !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFails = this._maxFails;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextUpstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpstream = this._nextUpstream;
    }
    if (this._nextUpstreamTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpstreamTimeout = this._nextUpstreamTimeout;
    }
    if (this._nextUpstreamTries !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpstreamTries = this._nextUpstreamTries;
    }
    if (this._ntlm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlm = this._ntlm;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._queue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue?.internalValue;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._sessionCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookie = this._sessionCookie?.internalValue;
    }
    if (this._slowStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStart = this._slowStart;
    }
    if (this._subselector !== undefined) {
      hasAnyValues = true;
      internalValueResult.subselector = this._subselector;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useClusterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClusterIp = this._useClusterIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup = undefined;
      this._backupPort = undefined;
      this._bufferSize = undefined;
      this._buffering = undefined;
      this._buffers.internalValue = undefined;
      this._clientMaxBodySize = undefined;
      this._connectTimeout = undefined;
      this._failTimeout = undefined;
      this._healthCheck.internalValue = undefined;
      this._keepalive = undefined;
      this._lbMethod = undefined;
      this._maxConns = undefined;
      this._maxFails = undefined;
      this._name = undefined;
      this._nextUpstream = undefined;
      this._nextUpstreamTimeout = undefined;
      this._nextUpstreamTries = undefined;
      this._ntlm = undefined;
      this._port = undefined;
      this._queue.internalValue = undefined;
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._service = undefined;
      this._sessionCookie.internalValue = undefined;
      this._slowStart = undefined;
      this._subselector = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
      this._useClusterIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup = value.backup;
      this._backupPort = value.backupPort;
      this._bufferSize = value.bufferSize;
      this._buffering = value.buffering;
      this._buffers.internalValue = value.buffers;
      this._clientMaxBodySize = value.clientMaxBodySize;
      this._connectTimeout = value.connectTimeout;
      this._failTimeout = value.failTimeout;
      this._healthCheck.internalValue = value.healthCheck;
      this._keepalive = value.keepalive;
      this._lbMethod = value.lbMethod;
      this._maxConns = value.maxConns;
      this._maxFails = value.maxFails;
      this._name = value.name;
      this._nextUpstream = value.nextUpstream;
      this._nextUpstreamTimeout = value.nextUpstreamTimeout;
      this._nextUpstreamTries = value.nextUpstreamTries;
      this._ntlm = value.ntlm;
      this._port = value.port;
      this._queue.internalValue = value.queue;
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._service = value.service;
      this._sessionCookie.internalValue = value.sessionCookie;
      this._slowStart = value.slowStart;
      this._subselector = value.subselector;
      this._tls.internalValue = value.tls;
      this._type = value.type;
      this._useClusterIp = value.useClusterIp;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: string; 
  public get backup() {
    return this.getStringAttribute('backup');
  }
  public set backup(value: string) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // backup_port - computed: false, optional: true, required: false
  private _backupPort?: number; 
  public get backupPort() {
    return this.getNumberAttribute('backup_port');
  }
  public set backupPort(value: number) {
    this._backupPort = value;
  }
  public resetBackupPort() {
    this._backupPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPortInput() {
    return this._backupPort;
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // buffering - computed: false, optional: true, required: false
  private _buffering?: boolean | cdktf.IResolvable; 
  public get buffering() {
    return this.getBooleanAttribute('buffering');
  }
  public set buffering(value: boolean | cdktf.IResolvable) {
    this._buffering = value;
  }
  public resetBuffering() {
    this._buffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingInput() {
    return this._buffering;
  }

  // buffers - computed: false, optional: true, required: false
  private _buffers = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffersOutputReference(this, "buffers");
  public get buffers() {
    return this._buffers;
  }
  public putBuffers(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsBuffers) {
    this._buffers.internalValue = value;
  }
  public resetBuffers() {
    this._buffers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffersInput() {
    return this._buffers.internalValue;
  }

  // client_max_body_size - computed: false, optional: true, required: false
  private _clientMaxBodySize?: string; 
  public get clientMaxBodySize() {
    return this.getStringAttribute('client_max_body_size');
  }
  public set clientMaxBodySize(value: string) {
    this._clientMaxBodySize = value;
  }
  public resetClientMaxBodySize() {
    this._clientMaxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMaxBodySizeInput() {
    return this._clientMaxBodySize;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // fail_timeout - computed: false, optional: true, required: false
  private _failTimeout?: string; 
  public get failTimeout() {
    return this.getStringAttribute('fail_timeout');
  }
  public set failTimeout(value: string) {
    this._failTimeout = value;
  }
  public resetFailTimeout() {
    this._failTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTimeoutInput() {
    return this._failTimeout;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // lb_method - computed: false, optional: true, required: false
  private _lbMethod?: string; 
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }
  public set lbMethod(value: string) {
    this._lbMethod = value;
  }
  public resetLbMethod() {
    this._lbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbMethodInput() {
    return this._lbMethod;
  }

  // max_conns - computed: false, optional: true, required: false
  private _maxConns?: number; 
  public get maxConns() {
    return this.getNumberAttribute('max_conns');
  }
  public set maxConns(value: number) {
    this._maxConns = value;
  }
  public resetMaxConns() {
    this._maxConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnsInput() {
    return this._maxConns;
  }

  // max_fails - computed: false, optional: true, required: false
  private _maxFails?: number; 
  public get maxFails() {
    return this.getNumberAttribute('max_fails');
  }
  public set maxFails(value: number) {
    this._maxFails = value;
  }
  public resetMaxFails() {
    this._maxFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailsInput() {
    return this._maxFails;
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

  // next_upstream - computed: false, optional: true, required: false
  private _nextUpstream?: string; 
  public get nextUpstream() {
    return this.getStringAttribute('next_upstream');
  }
  public set nextUpstream(value: string) {
    this._nextUpstream = value;
  }
  public resetNextUpstream() {
    this._nextUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpstreamInput() {
    return this._nextUpstream;
  }

  // next_upstream_timeout - computed: false, optional: true, required: false
  private _nextUpstreamTimeout?: string; 
  public get nextUpstreamTimeout() {
    return this.getStringAttribute('next_upstream_timeout');
  }
  public set nextUpstreamTimeout(value: string) {
    this._nextUpstreamTimeout = value;
  }
  public resetNextUpstreamTimeout() {
    this._nextUpstreamTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpstreamTimeoutInput() {
    return this._nextUpstreamTimeout;
  }

  // next_upstream_tries - computed: false, optional: true, required: false
  private _nextUpstreamTries?: number; 
  public get nextUpstreamTries() {
    return this.getNumberAttribute('next_upstream_tries');
  }
  public set nextUpstreamTries(value: number) {
    this._nextUpstreamTries = value;
  }
  public resetNextUpstreamTries() {
    this._nextUpstreamTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpstreamTriesInput() {
    return this._nextUpstreamTries;
  }

  // ntlm - computed: false, optional: true, required: false
  private _ntlm?: boolean | cdktf.IResolvable; 
  public get ntlm() {
    return this.getBooleanAttribute('ntlm');
  }
  public set ntlm(value: boolean | cdktf.IResolvable) {
    this._ntlm = value;
  }
  public resetNtlm() {
    this._ntlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmInput() {
    return this._ntlm;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // queue - computed: false, optional: true, required: false
  private _queue = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsQueue) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: string; 
  public get readTimeout() {
    return this.getStringAttribute('read_timeout');
  }
  public set readTimeout(value: string) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // send_timeout - computed: false, optional: true, required: false
  private _sendTimeout?: string; 
  public get sendTimeout() {
    return this.getStringAttribute('send_timeout');
  }
  public set sendTimeout(value: string) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // session_cookie - computed: false, optional: true, required: false
  private _sessionCookie = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookieOutputReference(this, "session_cookie");
  public get sessionCookie() {
    return this._sessionCookie;
  }
  public putSessionCookie(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsSessionCookie) {
    this._sessionCookie.internalValue = value;
  }
  public resetSessionCookie() {
    this._sessionCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieInput() {
    return this._sessionCookie.internalValue;
  }

  // slow_start - computed: false, optional: true, required: false
  private _slowStart?: string; 
  public get slowStart() {
    return this.getStringAttribute('slow_start');
  }
  public set slowStart(value: string) {
    this._slowStart = value;
  }
  public resetSlowStart() {
    this._slowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartInput() {
    return this._slowStart;
  }

  // subselector - computed: false, optional: true, required: false
  private _subselector?: { [key: string]: string }; 
  public get subselector() {
    return this.getStringMapAttribute('subselector');
  }
  public set subselector(value: { [key: string]: string }) {
    this._subselector = value;
  }
  public resetSubselector() {
    this._subselector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subselectorInput() {
    return this._subselector;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_cluster_ip - computed: false, optional: true, required: false
  private _useClusterIp?: boolean | cdktf.IResolvable; 
  public get useClusterIp() {
    return this.getBooleanAttribute('use_cluster_ip');
  }
  public set useClusterIp(value: boolean | cdktf.IResolvable) {
    this._useClusterIp = value;
  }
  public resetUseClusterIp() {
    this._useClusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClusterIpInput() {
    return this._useClusterIp;
  }
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#dos DataK8SK8SNginxOrgVirtualServerV1Manifest#dos}
  */
  readonly dos?: string;
  /**
  * ExternalDNS defines externaldns sub-resource of a virtual server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#external_dns DataK8SK8SNginxOrgVirtualServerV1Manifest#external_dns}
  */
  readonly externalDns?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDns;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#gunzip DataK8SK8SNginxOrgVirtualServerV1Manifest#gunzip}
  */
  readonly gunzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#host DataK8SK8SNginxOrgVirtualServerV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#http_snippets DataK8SK8SNginxOrgVirtualServerV1Manifest#http_snippets}
  */
  readonly httpSnippets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#ingress_class_name DataK8SK8SNginxOrgVirtualServerV1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * InternalRoute allows for the configuration of internal routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#internal_route DataK8SK8SNginxOrgVirtualServerV1Manifest#internal_route}
  */
  readonly internalRoute?: boolean | cdktf.IResolvable;
  /**
  * VirtualServerListener references a custom http and/or https listener defined in GlobalConfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#listener DataK8SK8SNginxOrgVirtualServerV1Manifest#listener}
  */
  readonly listener?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListener;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#policies DataK8SK8SNginxOrgVirtualServerV1Manifest#policies}
  */
  readonly policies?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPolicies[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#routes DataK8SK8SNginxOrgVirtualServerV1Manifest#routes}
  */
  readonly routes?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#server_snippets DataK8SK8SNginxOrgVirtualServerV1Manifest#server_snippets}
  */
  readonly serverSnippets?: string;
  /**
  * TLS defines TLS configuration for a VirtualServer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#tls DataK8SK8SNginxOrgVirtualServerV1Manifest#tls}
  */
  readonly tls?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#upstreams DataK8SK8SNginxOrgVirtualServerV1Manifest#upstreams}
  */
  readonly upstreams?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreams[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dos: cdktf.stringToTerraform(struct!.dos),
    external_dns: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsToTerraform(struct!.externalDns),
    gunzip: cdktf.booleanToTerraform(struct!.gunzip),
    host: cdktf.stringToTerraform(struct!.host),
    http_snippets: cdktf.stringToTerraform(struct!.httpSnippets),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    internal_route: cdktf.booleanToTerraform(struct!.internalRoute),
    listener: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecListenerToTerraform(struct!.listener),
    policies: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesToTerraform, false)(struct!.policies),
    routes: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesToTerraform, false)(struct!.routes),
    server_snippets: cdktf.stringToTerraform(struct!.serverSnippets),
    tls: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsToTerraform(struct!.tls),
    upstreams: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsToTerraform, false)(struct!.upstreams),
  }
}


export function dataK8SK8SNginxOrgVirtualServerV1ManifestSpecToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dos: {
      value: cdktf.stringToHclTerraform(struct!.dos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_dns: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsToHclTerraform(struct!.externalDns),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDns",
    },
    gunzip: {
      value: cdktf.booleanToHclTerraform(struct!.gunzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_snippets: {
      value: cdktf.stringToHclTerraform(struct!.httpSnippets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_route: {
      value: cdktf.booleanToHclTerraform(struct!.internalRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    listener: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListener",
    },
    policies: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesList",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesList",
    },
    server_snippets: {
      value: cdktf.stringToHclTerraform(struct!.serverSnippets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTls",
    },
    upstreams: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsToHclTerraform, false)(struct!.upstreams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dos !== undefined) {
      hasAnyValues = true;
      internalValueResult.dos = this._dos;
    }
    if (this._externalDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDns = this._externalDns?.internalValue;
    }
    if (this._gunzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.gunzip = this._gunzip;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpSnippets !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSnippets = this._httpSnippets;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._internalRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalRoute = this._internalRoute;
    }
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    if (this._serverSnippets !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSnippets = this._serverSnippets;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._upstreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreams = this._upstreams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dos = undefined;
      this._externalDns.internalValue = undefined;
      this._gunzip = undefined;
      this._host = undefined;
      this._httpSnippets = undefined;
      this._ingressClassName = undefined;
      this._internalRoute = undefined;
      this._listener.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._routes.internalValue = undefined;
      this._serverSnippets = undefined;
      this._tls.internalValue = undefined;
      this._upstreams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dos = value.dos;
      this._externalDns.internalValue = value.externalDns;
      this._gunzip = value.gunzip;
      this._host = value.host;
      this._httpSnippets = value.httpSnippets;
      this._ingressClassName = value.ingressClassName;
      this._internalRoute = value.internalRoute;
      this._listener.internalValue = value.listener;
      this._policies.internalValue = value.policies;
      this._routes.internalValue = value.routes;
      this._serverSnippets = value.serverSnippets;
      this._tls.internalValue = value.tls;
      this._upstreams.internalValue = value.upstreams;
    }
  }

  // dos - computed: false, optional: true, required: false
  private _dos?: string; 
  public get dos() {
    return this.getStringAttribute('dos');
  }
  public set dos(value: string) {
    this._dos = value;
  }
  public resetDos() {
    this._dos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosInput() {
    return this._dos;
  }

  // external_dns - computed: false, optional: true, required: false
  private _externalDns = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDnsOutputReference(this, "external_dns");
  public get externalDns() {
    return this._externalDns;
  }
  public putExternalDns(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecExternalDns) {
    this._externalDns.internalValue = value;
  }
  public resetExternalDns() {
    this._externalDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDnsInput() {
    return this._externalDns.internalValue;
  }

  // gunzip - computed: false, optional: true, required: false
  private _gunzip?: boolean | cdktf.IResolvable; 
  public get gunzip() {
    return this.getBooleanAttribute('gunzip');
  }
  public set gunzip(value: boolean | cdktf.IResolvable) {
    this._gunzip = value;
  }
  public resetGunzip() {
    this._gunzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gunzipInput() {
    return this._gunzip;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_snippets - computed: false, optional: true, required: false
  private _httpSnippets?: string; 
  public get httpSnippets() {
    return this.getStringAttribute('http_snippets');
  }
  public set httpSnippets(value: string) {
    this._httpSnippets = value;
  }
  public resetHttpSnippets() {
    this._httpSnippets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSnippetsInput() {
    return this._httpSnippets;
  }

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }

  // internal_route - computed: false, optional: true, required: false
  private _internalRoute?: boolean | cdktf.IResolvable; 
  public get internalRoute() {
    return this.getBooleanAttribute('internal_route');
  }
  public set internalRoute(value: boolean | cdktf.IResolvable) {
    this._internalRoute = value;
  }
  public resetInternalRoute() {
    this._internalRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalRouteInput() {
    return this._internalRoute;
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecListener) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // server_snippets - computed: false, optional: true, required: false
  private _serverSnippets?: string; 
  public get serverSnippets() {
    return this.getStringAttribute('server_snippets');
  }
  public set serverSnippets(value: string) {
    this._serverSnippets = value;
  }
  public resetServerSnippets() {
    this._serverSnippets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSnippetsInput() {
    return this._serverSnippets;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // upstreams - computed: false, optional: true, required: false
  private _upstreams = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreamsList(this, "upstreams", false);
  public get upstreams() {
    return this._upstreams;
  }
  public putUpstreams(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpecUpstreams[] | cdktf.IResolvable) {
    this._upstreams.internalValue = value;
  }
  public resetUpstreams() {
    this._upstreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest k8s_k8s_nginx_org_virtual_server_v1_manifest}
*/
export class DataK8SK8SNginxOrgVirtualServerV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_nginx_org_virtual_server_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SNginxOrgVirtualServerV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SNginxOrgVirtualServerV1Manifest to import
  * @param importFromId The id of the existing DataK8SK8SNginxOrgVirtualServerV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SNginxOrgVirtualServerV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_nginx_org_virtual_server_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_v1_manifest k8s_k8s_nginx_org_virtual_server_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SNginxOrgVirtualServerV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SNginxOrgVirtualServerV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_nginx_org_virtual_server_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SK8SNginxOrgVirtualServerV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SNginxOrgVirtualServerV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SNginxOrgVirtualServerV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SNginxOrgVirtualServerV1ManifestSpec) {
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
      metadata: dataK8SK8SNginxOrgVirtualServerV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SNginxOrgVirtualServerV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SNginxOrgVirtualServerV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgVirtualServerV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
