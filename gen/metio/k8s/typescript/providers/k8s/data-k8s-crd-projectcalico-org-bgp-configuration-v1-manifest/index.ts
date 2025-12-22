// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#metadata DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadata;
  /**
  * BGPConfigurationSpec contains the values of the BGP configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#spec DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#annotations DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#labels DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#name DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunities {
  /**
  * Name given to community value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#name DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value must be of format 'aa:nn' or 'aa:nn:mm'. For standard community use 'aa:nn' format, where 'aa' and 'nn' are 16 bit number. For large community use 'aa:nn:mm' format, where 'aa', 'nn' and 'mm' are 32 bit number. Where, 'aa' is an AS Number, 'nn' and 'mm' are per-AS identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#value DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunities | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunities | cdktf.IResolvable | undefined) {
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

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesOutputReference {
    return new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#key DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#name DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#optional DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRefToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRefToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPassword {
  /**
  * Selects a key of a secret in the node pod's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#secret_key_ref DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRef;
}

export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisements {
  /**
  * CIDR for which properties should be advertised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#cidr DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Communities can be list of either community names already defined in 'Specs.Communities' or community value of format 'aa:nn' or 'aa:nn:mm'. For standard community use 'aa:nn' format, where 'aa' and 'nn' are 16 bit number. For large community use 'aa:nn:mm' format, where 'aa', 'nn' and 'mm' are 32 bit number. Where,'aa' is an AS Number, 'nn' and 'mm' are per-AS identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#communities DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#communities}
  */
  readonly communities?: string[];
}

export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    communities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.communities),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    communities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.communities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._communities !== undefined) {
      hasAnyValues = true;
      internalValueResult.communities = this._communities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._communities = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._communities = value.communities;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // communities - computed: false, optional: true, required: false
  private _communities?: string[]; 
  public get communities() {
    return this.getListAttribute('communities');
  }
  public set communities(value: string[]) {
    this._communities = value;
  }
  public resetCommunities() {
    this._communities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitiesInput() {
    return this._communities;
  }
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisements[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsOutputReference {
    return new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#cidr DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#cidr}
  */
  readonly cidr?: string;
}

export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsOutputReference {
    return new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#cidr DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#cidr}
  */
  readonly cidr?: string;
}

export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsOutputReference {
    return new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#cidr DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#cidr}
  */
  readonly cidr?: string;
}

export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsOutputReference {
    return new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpec {
  /**
  * ASNumber is the default AS number used by a node. [Default: 64512]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#as_number DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#as_number}
  */
  readonly asNumber?: number;
  /**
  * BindMode indicates whether to listen for BGP connections on all addresses (None) or only on the node's canonical IP address Node.Spec.BGP.IPvXAddress (NodeIP). Default behaviour is to listen for BGP connections on all addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#bind_mode DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#bind_mode}
  */
  readonly bindMode?: string;
  /**
  * Communities is a list of BGP community values and their arbitrary names for tagging routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#communities DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#communities}
  */
  readonly communities?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunities[] | cdktf.IResolvable;
  /**
  * IgnoredInterfaces indicates the network interfaces that needs to be excluded when reading device routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#ignored_interfaces DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#ignored_interfaces}
  */
  readonly ignoredInterfaces?: string[];
  /**
  * ListenPort is the port where BGP protocol should listen. Defaults to 179
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#listen_port DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#listen_port}
  */
  readonly listenPort?: number;
  /**
  * LogSeverityScreen is the log severity above which logs are sent to the stdout. [Default: INFO]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#log_severity_screen DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#log_severity_screen}
  */
  readonly logSeverityScreen?: string;
  /**
  * Time to allow for software restart for node-to-mesh peerings. When specified, this is configured as the graceful restart timeout. When not specified, the BIRD default of 120s is used. This field can only be set on the default BGPConfiguration instance and requires that NodeMesh is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#node_mesh_max_restart_time DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#node_mesh_max_restart_time}
  */
  readonly nodeMeshMaxRestartTime?: string;
  /**
  * Optional BGP password for full node-to-mesh peerings. This field can only be set on the default BGPConfiguration instance and requires that NodeMesh is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#node_mesh_password DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#node_mesh_password}
  */
  readonly nodeMeshPassword?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPassword;
  /**
  * NodeToNodeMeshEnabled sets whether full node to node BGP mesh is enabled. [Default: true]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#node_to_node_mesh_enabled DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#node_to_node_mesh_enabled}
  */
  readonly nodeToNodeMeshEnabled?: boolean | cdktf.IResolvable;
  /**
  * PrefixAdvertisements contains per-prefix advertisement configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#prefix_advertisements DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#prefix_advertisements}
  */
  readonly prefixAdvertisements?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisements[] | cdktf.IResolvable;
  /**
  * ServiceClusterIPs are the CIDR blocks from which service cluster IPs are allocated. If specified, Calico will advertise these blocks, as well as any cluster IPs within them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#service_cluster_i_ps DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#service_cluster_i_ps}
  */
  readonly serviceClusterIPs?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPs[] | cdktf.IResolvable;
  /**
  * ServiceExternalIPs are the CIDR blocks for Kubernetes Service External IPs. Kubernetes Service ExternalIPs will only be advertised if they are within one of these blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#service_external_i_ps DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#service_external_i_ps}
  */
  readonly serviceExternalIPs?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPs[] | cdktf.IResolvable;
  /**
  * ServiceLoadBalancerIPs are the CIDR blocks for Kubernetes Service LoadBalancer IPs. Kubernetes Service status.LoadBalancer.Ingress IPs will only be advertised if they are within one of these blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#service_load_balancer_i_ps DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest#service_load_balancer_i_ps}
  */
  readonly serviceLoadBalancerIPs?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPs[] | cdktf.IResolvable;
}

export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    bind_mode: cdktf.stringToTerraform(struct!.bindMode),
    communities: cdktf.listMapper(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesToTerraform, false)(struct!.communities),
    ignored_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredInterfaces),
    listen_port: cdktf.numberToTerraform(struct!.listenPort),
    log_severity_screen: cdktf.stringToTerraform(struct!.logSeverityScreen),
    node_mesh_max_restart_time: cdktf.stringToTerraform(struct!.nodeMeshMaxRestartTime),
    node_mesh_password: dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordToTerraform(struct!.nodeMeshPassword),
    node_to_node_mesh_enabled: cdktf.booleanToTerraform(struct!.nodeToNodeMeshEnabled),
    prefix_advertisements: cdktf.listMapper(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsToTerraform, false)(struct!.prefixAdvertisements),
    service_cluster_i_ps: cdktf.listMapper(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsToTerraform, false)(struct!.serviceClusterIPs),
    service_external_i_ps: cdktf.listMapper(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsToTerraform, false)(struct!.serviceExternalIPs),
    service_load_balancer_i_ps: cdktf.listMapper(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsToTerraform, false)(struct!.serviceLoadBalancerIPs),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bind_mode: {
      value: cdktf.stringToHclTerraform(struct!.bindMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    communities: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesToHclTerraform, false)(struct!.communities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesList",
    },
    ignored_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    listen_port: {
      value: cdktf.numberToHclTerraform(struct!.listenPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_severity_screen: {
      value: cdktf.stringToHclTerraform(struct!.logSeverityScreen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_mesh_max_restart_time: {
      value: cdktf.stringToHclTerraform(struct!.nodeMeshMaxRestartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_mesh_password: {
      value: dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordToHclTerraform(struct!.nodeMeshPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPassword",
    },
    node_to_node_mesh_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nodeToNodeMeshEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_advertisements: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsToHclTerraform, false)(struct!.prefixAdvertisements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsList",
    },
    service_cluster_i_ps: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsToHclTerraform, false)(struct!.serviceClusterIPs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsList",
    },
    service_external_i_ps: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsToHclTerraform, false)(struct!.serviceExternalIPs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsList",
    },
    service_load_balancer_i_ps: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsToHclTerraform, false)(struct!.serviceLoadBalancerIPs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._bindMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindMode = this._bindMode;
    }
    if (this._communities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.communities = this._communities?.internalValue;
    }
    if (this._ignoredInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredInterfaces = this._ignoredInterfaces;
    }
    if (this._listenPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenPort = this._listenPort;
    }
    if (this._logSeverityScreen !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSeverityScreen = this._logSeverityScreen;
    }
    if (this._nodeMeshMaxRestartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeMeshMaxRestartTime = this._nodeMeshMaxRestartTime;
    }
    if (this._nodeMeshPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeMeshPassword = this._nodeMeshPassword?.internalValue;
    }
    if (this._nodeToNodeMeshEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeToNodeMeshEnabled = this._nodeToNodeMeshEnabled;
    }
    if (this._prefixAdvertisements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixAdvertisements = this._prefixAdvertisements?.internalValue;
    }
    if (this._serviceClusterIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceClusterIPs = this._serviceClusterIPs?.internalValue;
    }
    if (this._serviceExternalIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceExternalIPs = this._serviceExternalIPs?.internalValue;
    }
    if (this._serviceLoadBalancerIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLoadBalancerIPs = this._serviceLoadBalancerIPs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumber = undefined;
      this._bindMode = undefined;
      this._communities.internalValue = undefined;
      this._ignoredInterfaces = undefined;
      this._listenPort = undefined;
      this._logSeverityScreen = undefined;
      this._nodeMeshMaxRestartTime = undefined;
      this._nodeMeshPassword.internalValue = undefined;
      this._nodeToNodeMeshEnabled = undefined;
      this._prefixAdvertisements.internalValue = undefined;
      this._serviceClusterIPs.internalValue = undefined;
      this._serviceExternalIPs.internalValue = undefined;
      this._serviceLoadBalancerIPs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asNumber = value.asNumber;
      this._bindMode = value.bindMode;
      this._communities.internalValue = value.communities;
      this._ignoredInterfaces = value.ignoredInterfaces;
      this._listenPort = value.listenPort;
      this._logSeverityScreen = value.logSeverityScreen;
      this._nodeMeshMaxRestartTime = value.nodeMeshMaxRestartTime;
      this._nodeMeshPassword.internalValue = value.nodeMeshPassword;
      this._nodeToNodeMeshEnabled = value.nodeToNodeMeshEnabled;
      this._prefixAdvertisements.internalValue = value.prefixAdvertisements;
      this._serviceClusterIPs.internalValue = value.serviceClusterIPs;
      this._serviceExternalIPs.internalValue = value.serviceExternalIPs;
      this._serviceLoadBalancerIPs.internalValue = value.serviceLoadBalancerIPs;
    }
  }

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // bind_mode - computed: false, optional: true, required: false
  private _bindMode?: string; 
  public get bindMode() {
    return this.getStringAttribute('bind_mode');
  }
  public set bindMode(value: string) {
    this._bindMode = value;
  }
  public resetBindMode() {
    this._bindMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindModeInput() {
    return this._bindMode;
  }

  // communities - computed: false, optional: true, required: false
  private _communities = new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunitiesList(this, "communities", false);
  public get communities() {
    return this._communities;
  }
  public putCommunities(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecCommunities[] | cdktf.IResolvable) {
    this._communities.internalValue = value;
  }
  public resetCommunities() {
    this._communities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitiesInput() {
    return this._communities.internalValue;
  }

  // ignored_interfaces - computed: false, optional: true, required: false
  private _ignoredInterfaces?: string[]; 
  public get ignoredInterfaces() {
    return this.getListAttribute('ignored_interfaces');
  }
  public set ignoredInterfaces(value: string[]) {
    this._ignoredInterfaces = value;
  }
  public resetIgnoredInterfaces() {
    this._ignoredInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredInterfacesInput() {
    return this._ignoredInterfaces;
  }

  // listen_port - computed: false, optional: true, required: false
  private _listenPort?: number; 
  public get listenPort() {
    return this.getNumberAttribute('listen_port');
  }
  public set listenPort(value: number) {
    this._listenPort = value;
  }
  public resetListenPort() {
    this._listenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenPortInput() {
    return this._listenPort;
  }

  // log_severity_screen - computed: false, optional: true, required: false
  private _logSeverityScreen?: string; 
  public get logSeverityScreen() {
    return this.getStringAttribute('log_severity_screen');
  }
  public set logSeverityScreen(value: string) {
    this._logSeverityScreen = value;
  }
  public resetLogSeverityScreen() {
    this._logSeverityScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSeverityScreenInput() {
    return this._logSeverityScreen;
  }

  // node_mesh_max_restart_time - computed: false, optional: true, required: false
  private _nodeMeshMaxRestartTime?: string; 
  public get nodeMeshMaxRestartTime() {
    return this.getStringAttribute('node_mesh_max_restart_time');
  }
  public set nodeMeshMaxRestartTime(value: string) {
    this._nodeMeshMaxRestartTime = value;
  }
  public resetNodeMeshMaxRestartTime() {
    this._nodeMeshMaxRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMeshMaxRestartTimeInput() {
    return this._nodeMeshMaxRestartTime;
  }

  // node_mesh_password - computed: false, optional: true, required: false
  private _nodeMeshPassword = new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPasswordOutputReference(this, "node_mesh_password");
  public get nodeMeshPassword() {
    return this._nodeMeshPassword;
  }
  public putNodeMeshPassword(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecNodeMeshPassword) {
    this._nodeMeshPassword.internalValue = value;
  }
  public resetNodeMeshPassword() {
    this._nodeMeshPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMeshPasswordInput() {
    return this._nodeMeshPassword.internalValue;
  }

  // node_to_node_mesh_enabled - computed: false, optional: true, required: false
  private _nodeToNodeMeshEnabled?: boolean | cdktf.IResolvable; 
  public get nodeToNodeMeshEnabled() {
    return this.getBooleanAttribute('node_to_node_mesh_enabled');
  }
  public set nodeToNodeMeshEnabled(value: boolean | cdktf.IResolvable) {
    this._nodeToNodeMeshEnabled = value;
  }
  public resetNodeToNodeMeshEnabled() {
    this._nodeToNodeMeshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeToNodeMeshEnabledInput() {
    return this._nodeToNodeMeshEnabled;
  }

  // prefix_advertisements - computed: false, optional: true, required: false
  private _prefixAdvertisements = new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisementsList(this, "prefix_advertisements", false);
  public get prefixAdvertisements() {
    return this._prefixAdvertisements;
  }
  public putPrefixAdvertisements(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecPrefixAdvertisements[] | cdktf.IResolvable) {
    this._prefixAdvertisements.internalValue = value;
  }
  public resetPrefixAdvertisements() {
    this._prefixAdvertisements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixAdvertisementsInput() {
    return this._prefixAdvertisements.internalValue;
  }

  // service_cluster_i_ps - computed: false, optional: true, required: false
  private _serviceClusterIPs = new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPsList(this, "service_cluster_i_ps", false);
  public get serviceClusterIPs() {
    return this._serviceClusterIPs;
  }
  public putServiceClusterIPs(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceClusterIPs[] | cdktf.IResolvable) {
    this._serviceClusterIPs.internalValue = value;
  }
  public resetServiceClusterIPs() {
    this._serviceClusterIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClusterIPsInput() {
    return this._serviceClusterIPs.internalValue;
  }

  // service_external_i_ps - computed: false, optional: true, required: false
  private _serviceExternalIPs = new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPsList(this, "service_external_i_ps", false);
  public get serviceExternalIPs() {
    return this._serviceExternalIPs;
  }
  public putServiceExternalIPs(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceExternalIPs[] | cdktf.IResolvable) {
    this._serviceExternalIPs.internalValue = value;
  }
  public resetServiceExternalIPs() {
    this._serviceExternalIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExternalIPsInput() {
    return this._serviceExternalIPs.internalValue;
  }

  // service_load_balancer_i_ps - computed: false, optional: true, required: false
  private _serviceLoadBalancerIPs = new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPsList(this, "service_load_balancer_i_ps", false);
  public get serviceLoadBalancerIPs() {
    return this._serviceLoadBalancerIPs;
  }
  public putServiceLoadBalancerIPs(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecServiceLoadBalancerIPs[] | cdktf.IResolvable) {
    this._serviceLoadBalancerIPs.internalValue = value;
  }
  public resetServiceLoadBalancerIPs() {
    this._serviceLoadBalancerIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLoadBalancerIPsInput() {
    return this._serviceLoadBalancerIPs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest k8s_crd_projectcalico_org_bgp_configuration_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_bgp_configuration_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgBgpConfigurationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_bgp_configuration_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/crd_projectcalico_org_bgp_configuration_v1_manifest k8s_crd_projectcalico_org_bgp_configuration_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_bgp_configuration_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgBgpConfigurationV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
