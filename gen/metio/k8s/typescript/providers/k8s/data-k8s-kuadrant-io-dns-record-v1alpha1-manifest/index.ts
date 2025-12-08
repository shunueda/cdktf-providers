// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKuadrantIoDnsRecordV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#metadata DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadata;
  /**
  * DNSRecordSpec defines the desired state of DNSRecord
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#spec DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpec;
}
export interface DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#annotations DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#labels DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#name DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#namespace DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecific {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#name DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#value DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificToTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecific | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificToHclTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecific | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecific | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecific | cdktf.IResolvable | undefined) {
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

export class DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecific[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificOutputReference {
    return new DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpoints {
  /**
  * The hostname of the DNS record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#dns_name DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Labels stores labels defined for the Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#labels DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * ProviderSpecific stores provider specific config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#provider_specific DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#provider_specific}
  */
  readonly providerSpecific?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecific[] | cdktf.IResolvable;
  /**
  * TTL for the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#record_ttl DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#record_ttl}
  */
  readonly recordTtl?: number;
  /**
  * RecordType type of record, e.g. CNAME, A, AAAA, SRV, TXT etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#record_type DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#record_type}
  */
  readonly recordType?: string;
  /**
  * Identifier to distinguish multiple records with the same name and type (e.g. Route53 records with routing policies other than 'simple')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#set_identifier DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#set_identifier}
  */
  readonly setIdentifier?: string;
  /**
  * The targets the DNS record points to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#targets DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#targets}
  */
  readonly targets?: string[];
}

export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsToTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    provider_specific: cdktf.listMapper(dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificToTerraform, false)(struct!.providerSpecific),
    record_ttl: cdktf.numberToTerraform(struct!.recordTtl),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    set_identifier: cdktf.stringToTerraform(struct!.setIdentifier),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
  }
}


export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsToHclTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider_specific: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificToHclTerraform, false)(struct!.providerSpecific),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificList",
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
    set_identifier: {
      value: cdktf.stringToHclTerraform(struct!.setIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
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
    if (this._setIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIdentifier = this._setIdentifier;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsName = undefined;
      this._labels = undefined;
      this._providerSpecific.internalValue = undefined;
      this._recordTtl = undefined;
      this._recordType = undefined;
      this._setIdentifier = undefined;
      this._targets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsName = value.dnsName;
      this._labels = value.labels;
      this._providerSpecific.internalValue = value.providerSpecific;
      this._recordTtl = value.recordTtl;
      this._recordType = value.recordType;
      this._setIdentifier = value.setIdentifier;
      this._targets = value.targets;
    }
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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
  private _providerSpecific = new DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecificList(this, "provider_specific", false);
  public get providerSpecific() {
    return this._providerSpecific;
  }
  public putProviderSpecific(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsProviderSpecific[] | cdktf.IResolvable) {
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

  // set_identifier - computed: false, optional: true, required: false
  private _setIdentifier?: string; 
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }
  public set setIdentifier(value: string) {
    this._setIdentifier = value;
  }
  public resetSetIdentifier() {
    this._setIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdentifierInput() {
    return this._setIdentifier;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }
}

export class DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsOutputReference {
    return new DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#name DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRefToTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRefToHclTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRef | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheck {
  /**
  * AdditionalHeadersRef refers to a secret that contains extra headers to send in the probe request, this is primarily useful if an authentication token is required by the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#additional_headers_ref DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#additional_headers_ref}
  */
  readonly additionalHeadersRef?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRef;
  /**
  * AllowInsecureCertificate will instruct the health check probe to not fail on a self-signed or otherwise invalid SSL certificate this is primarily used in development or testing environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#allow_insecure_certificate DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#allow_insecure_certificate}
  */
  readonly allowInsecureCertificate?: boolean | cdktf.IResolvable;
  /**
  * FailureThreshold is a limit of consecutive failures that must occur for a host to be considered unhealthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#failure_threshold DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Interval defines how frequently this probe should execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#interval DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Path is the path to append to the host to reach the expected health check. Must start with '?' or '/', contain only valid URL characters and end with alphanumeric char or '/'. For example '/' or '/healthz' are common
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#path DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Port to connect to the host on. Must be either 80, 443 or 1024-49151
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#port DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Protocol to use when connecting to the host, valid values are 'HTTP' or 'HTTPS'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#protocol DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckToTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_headers_ref: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRefToTerraform(struct!.additionalHeadersRef),
    allow_insecure_certificate: cdktf.booleanToTerraform(struct!.allowInsecureCertificate),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    interval: cdktf.stringToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckToHclTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_headers_ref: {
      value: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRefToHclTerraform(struct!.additionalHeadersRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRef",
    },
    allow_insecure_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecureCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalHeadersRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalHeadersRef = this._additionalHeadersRef?.internalValue;
    }
    if (this._allowInsecureCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecureCertificate = this._allowInsecureCertificate;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalHeadersRef.internalValue = undefined;
      this._allowInsecureCertificate = undefined;
      this._failureThreshold = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalHeadersRef.internalValue = value.additionalHeadersRef;
      this._allowInsecureCertificate = value.allowInsecureCertificate;
      this._failureThreshold = value.failureThreshold;
      this._interval = value.interval;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // additional_headers_ref - computed: false, optional: true, required: false
  private _additionalHeadersRef = new DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRefOutputReference(this, "additional_headers_ref");
  public get additionalHeadersRef() {
    return this._additionalHeadersRef;
  }
  public putAdditionalHeadersRef(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckAdditionalHeadersRef) {
    this._additionalHeadersRef.internalValue = value;
  }
  public resetAdditionalHeadersRef() {
    this._additionalHeadersRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersRefInput() {
    return this._additionalHeadersRef.internalValue;
  }

  // allow_insecure_certificate - computed: false, optional: true, required: false
  private _allowInsecureCertificate?: boolean | cdktf.IResolvable; 
  public get allowInsecureCertificate() {
    return this.getBooleanAttribute('allow_insecure_certificate');
  }
  public set allowInsecureCertificate(value: boolean | cdktf.IResolvable) {
    this._allowInsecureCertificate = value;
  }
  public resetAllowInsecureCertificate() {
    this._allowInsecureCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureCertificateInput() {
    return this._allowInsecureCertificate;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#name DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRefToTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRefToHclTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRef | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpec {
  /**
  * endpoints is a list of endpoints that will be published into the dns provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#endpoints DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#endpoints}
  */
  readonly endpoints?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpoints[] | cdktf.IResolvable;
  /**
  * HealthCheckSpec configures health checks in the DNS provider. By default this health check will be applied to each unique DNS A Record for the listeners assigned to the target gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#health_check DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheck;
  /**
  * ownerID is a unique string used to identify the owner of this record. If unset or set to an empty string the record UID will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#owner_id DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#owner_id}
  */
  readonly ownerId?: string;
  /**
  * providerRef is a reference to a provider secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#provider_ref DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#provider_ref}
  */
  readonly providerRef: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRef;
  /**
  * rootHost is the single root for all endpoints in a DNSRecord. it is expected all defined endpoints are children of or equal to this rootHost Must contain at least two groups of valid URL characters separated by a '.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#root_host DataK8SKuadrantIoDnsRecordV1Alpha1Manifest#root_host}
  */
  readonly rootHost: string;
}

export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.listMapper(dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsToTerraform, false)(struct!.endpoints),
    health_check: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckToTerraform(struct!.healthCheck),
    owner_id: cdktf.stringToTerraform(struct!.ownerId),
    provider_ref: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRefToTerraform(struct!.providerRef),
    root_host: cdktf.stringToTerraform(struct!.rootHost),
  }
}


export function dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsToHclTerraform, false)(struct!.endpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsList",
    },
    health_check: {
      value: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheck",
    },
    owner_id: {
      value: cdktf.stringToHclTerraform(struct!.ownerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_ref: {
      value: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRefToHclTerraform(struct!.providerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRef",
    },
    root_host: {
      value: cdktf.stringToHclTerraform(struct!.rootHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._ownerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerId = this._ownerId;
    }
    if (this._providerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerRef = this._providerRef?.internalValue;
    }
    if (this._rootHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootHost = this._rootHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._ownerId = undefined;
      this._providerRef.internalValue = undefined;
      this._rootHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints.internalValue = value.endpoints;
      this._healthCheck.internalValue = value.healthCheck;
      this._ownerId = value.ownerId;
      this._providerRef.internalValue = value.providerRef;
      this._rootHost = value.rootHost;
    }
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // owner_id - computed: false, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // provider_ref - computed: false, optional: false, required: true
  private _providerRef = new DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRefOutputReference(this, "provider_ref");
  public get providerRef() {
    return this._providerRef;
  }
  public putProviderRef(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecProviderRef) {
    this._providerRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerRefInput() {
    return this._providerRef.internalValue;
  }

  // root_host - computed: false, optional: false, required: true
  private _rootHost?: string; 
  public get rootHost() {
    return this.getStringAttribute('root_host');
  }
  public set rootHost(value: string) {
    this._rootHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootHostInput() {
    return this._rootHost;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest k8s_kuadrant_io_dns_record_v1alpha1_manifest}
*/
export class DataK8SKuadrantIoDnsRecordV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuadrant_io_dns_record_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKuadrantIoDnsRecordV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKuadrantIoDnsRecordV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKuadrantIoDnsRecordV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKuadrantIoDnsRecordV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuadrant_io_dns_record_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kuadrant_io_dns_record_v1alpha1_manifest k8s_kuadrant_io_dns_record_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKuadrantIoDnsRecordV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuadrant_io_dns_record_v1alpha1_manifest',
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
  private _metadata = new DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKuadrantIoDnsRecordV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKuadrantIoDnsRecordV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
