// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKuadrantIoManagedZoneV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#metadata DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadata;
  /**
  * ManagedZoneSpec defines the desired state of ManagedZone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#spec DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpec;
}
export interface DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#annotations DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#labels DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#name DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#namespace DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#name DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRefToTerraform(struct?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRefToHclTerraform(struct?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZone {
  /**
  * 'name' is the name of the managed zone. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#name DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZoneToTerraform(struct?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZoneToHclTerraform(struct?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZone | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZone | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZone | cdktf.IResolvable | undefined) {
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
export interface DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpec {
  /**
  * description for this ManagedZone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#description DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#description}
  */
  readonly description: string;
  /**
  * dnsProviderSecretRef reference to a secret containing credentials to access a dns provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#dns_provider_secret_ref DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#dns_provider_secret_ref}
  */
  readonly dnsProviderSecretRef: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRef;
  /**
  * domainName of this ManagedZone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#domain_name DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#domain_name}
  */
  readonly domainName: string;
  /**
  * id is the provider assigned id of this zone (i.e. route53.HostedZone.ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#id DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parentManagedZone reference to another managed zone that this managed zone belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#parent_managed_zone DataK8SKuadrantIoManagedZoneV1Alpha1Manifest#parent_managed_zone}
  */
  readonly parentManagedZone?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZone;
}

export function dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dns_provider_secret_ref: dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRefToTerraform(struct!.dnsProviderSecretRef),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    id: cdktf.stringToTerraform(struct!.id),
    parent_managed_zone: dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZoneToTerraform(struct!.parentManagedZone),
  }
}


export function dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_provider_secret_ref: {
      value: dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRefToHclTerraform(struct!.dnsProviderSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRef",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_managed_zone: {
      value: dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZoneToHclTerraform(struct!.parentManagedZone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZone",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dnsProviderSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsProviderSecretRef = this._dnsProviderSecretRef?.internalValue;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._parentManagedZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentManagedZone = this._parentManagedZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dnsProviderSecretRef.internalValue = undefined;
      this._domainName = undefined;
      this._id = undefined;
      this._parentManagedZone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dnsProviderSecretRef.internalValue = value.dnsProviderSecretRef;
      this._domainName = value.domainName;
      this._id = value.id;
      this._parentManagedZone.internalValue = value.parentManagedZone;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dns_provider_secret_ref - computed: false, optional: false, required: true
  private _dnsProviderSecretRef = new DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRefOutputReference(this, "dns_provider_secret_ref");
  public get dnsProviderSecretRef() {
    return this._dnsProviderSecretRef;
  }
  public putDnsProviderSecretRef(value: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecDnsProviderSecretRef) {
    this._dnsProviderSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProviderSecretRefInput() {
    return this._dnsProviderSecretRef.internalValue;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // parent_managed_zone - computed: false, optional: true, required: false
  private _parentManagedZone = new DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZoneOutputReference(this, "parent_managed_zone");
  public get parentManagedZone() {
    return this._parentManagedZone;
  }
  public putParentManagedZone(value: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecParentManagedZone) {
    this._parentManagedZone.internalValue = value;
  }
  public resetParentManagedZone() {
    this._parentManagedZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentManagedZoneInput() {
    return this._parentManagedZone.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest k8s_kuadrant_io_managed_zone_v1alpha1_manifest}
*/
export class DataK8SKuadrantIoManagedZoneV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuadrant_io_managed_zone_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKuadrantIoManagedZoneV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKuadrantIoManagedZoneV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKuadrantIoManagedZoneV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKuadrantIoManagedZoneV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuadrant_io_managed_zone_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_managed_zone_v1alpha1_manifest k8s_kuadrant_io_managed_zone_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKuadrantIoManagedZoneV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuadrant_io_managed_zone_v1alpha1_manifest',
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
  private _metadata = new DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKuadrantIoManagedZoneV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKuadrantIoManagedZoneV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
