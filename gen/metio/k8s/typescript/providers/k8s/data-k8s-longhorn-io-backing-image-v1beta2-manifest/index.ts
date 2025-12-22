// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLonghornIoBackingImageV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#metadata DataK8SLonghornIoBackingImageV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SLonghornIoBackingImageV1Beta2ManifestMetadata;
  /**
  * BackingImageSpec defines the desired state of the Longhorn backing image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#spec DataK8SLonghornIoBackingImageV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SLonghornIoBackingImageV1Beta2ManifestSpec;
}
export interface DataK8SLonghornIoBackingImageV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#annotations DataK8SLonghornIoBackingImageV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#labels DataK8SLonghornIoBackingImageV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#name DataK8SLonghornIoBackingImageV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#namespace DataK8SLonghornIoBackingImageV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLonghornIoBackingImageV1Beta2ManifestMetadataToTerraform(struct?: DataK8SLonghornIoBackingImageV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLonghornIoBackingImageV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SLonghornIoBackingImageV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLonghornIoBackingImageV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoBackingImageV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLonghornIoBackingImageV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#eviction_requested DataK8SLonghornIoBackingImageV1Beta2Manifest#eviction_requested}
  */
  readonly evictionRequested?: boolean | cdktf.IResolvable;
}

export function dataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMapToTerraform(struct?: DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eviction_requested: cdktf.booleanToTerraform(struct!.evictionRequested),
  }
}


export function dataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMapToHclTerraform(struct?: DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eviction_requested: {
      value: cdktf.booleanToHclTerraform(struct!.evictionRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evictionRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionRequested = this._evictionRequested;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evictionRequested = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evictionRequested = value.evictionRequested;
    }
  }

  // eviction_requested - computed: false, optional: true, required: false
  private _evictionRequested?: boolean | cdktf.IResolvable; 
  public get evictionRequested() {
    return this.getBooleanAttribute('eviction_requested');
  }
  public set evictionRequested(value: boolean | cdktf.IResolvable) {
    this._evictionRequested = value;
  }
  public resetEvictionRequested() {
    this._evictionRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionRequestedInput() {
    return this._evictionRequested;
  }
}
export interface DataK8SLonghornIoBackingImageV1Beta2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#checksum DataK8SLonghornIoBackingImageV1Beta2Manifest#checksum}
  */
  readonly checksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#disk_file_spec_map DataK8SLonghornIoBackingImageV1Beta2Manifest#disk_file_spec_map}
  */
  readonly diskFileSpecMap?: DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#disk_selector DataK8SLonghornIoBackingImageV1Beta2Manifest#disk_selector}
  */
  readonly diskSelector?: string[];
  /**
  * Deprecated. We are now using DiskFileSpecMap to assign different spec to the file on different disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#disks DataK8SLonghornIoBackingImageV1Beta2Manifest#disks}
  */
  readonly disks?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#min_number_of_copies DataK8SLonghornIoBackingImageV1Beta2Manifest#min_number_of_copies}
  */
  readonly minNumberOfCopies?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#node_selector DataK8SLonghornIoBackingImageV1Beta2Manifest#node_selector}
  */
  readonly nodeSelector?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#secret DataK8SLonghornIoBackingImageV1Beta2Manifest#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#secret_namespace DataK8SLonghornIoBackingImageV1Beta2Manifest#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#source_parameters DataK8SLonghornIoBackingImageV1Beta2Manifest#source_parameters}
  */
  readonly sourceParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#source_type DataK8SLonghornIoBackingImageV1Beta2Manifest#source_type}
  */
  readonly sourceType?: string;
}

export function dataK8SLonghornIoBackingImageV1Beta2ManifestSpecToTerraform(struct?: DataK8SLonghornIoBackingImageV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    disk_file_spec_map: dataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMapToTerraform(struct!.diskFileSpecMap),
    disk_selector: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.diskSelector),
    disks: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.disks),
    min_number_of_copies: cdktf.numberToTerraform(struct!.minNumberOfCopies),
    node_selector: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeSelector),
    secret: cdktf.stringToTerraform(struct!.secret),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    source_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sourceParameters),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function dataK8SLonghornIoBackingImageV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SLonghornIoBackingImageV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_file_spec_map: {
      value: dataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMapToHclTerraform(struct!.diskFileSpecMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMap",
    },
    disk_selector: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.diskSelector),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disks: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.disks),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_number_of_copies: {
      value: cdktf.numberToHclTerraform(struct!.minNumberOfCopies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_selector: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeSelector),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_namespace: {
      value: cdktf.stringToHclTerraform(struct!.secretNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sourceParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoBackingImageV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoBackingImageV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._diskFileSpecMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskFileSpecMap = this._diskFileSpecMap?.internalValue;
    }
    if (this._diskSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSelector = this._diskSelector;
    }
    if (this._disks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks;
    }
    if (this._minNumberOfCopies !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNumberOfCopies = this._minNumberOfCopies;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNamespace = this._secretNamespace;
    }
    if (this._sourceParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceParameters = this._sourceParameters;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoBackingImageV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksum = undefined;
      this._diskFileSpecMap.internalValue = undefined;
      this._diskSelector = undefined;
      this._disks = undefined;
      this._minNumberOfCopies = undefined;
      this._nodeSelector = undefined;
      this._secret = undefined;
      this._secretNamespace = undefined;
      this._sourceParameters = undefined;
      this._sourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksum = value.checksum;
      this._diskFileSpecMap.internalValue = value.diskFileSpecMap;
      this._diskSelector = value.diskSelector;
      this._disks = value.disks;
      this._minNumberOfCopies = value.minNumberOfCopies;
      this._nodeSelector = value.nodeSelector;
      this._secret = value.secret;
      this._secretNamespace = value.secretNamespace;
      this._sourceParameters = value.sourceParameters;
      this._sourceType = value.sourceType;
    }
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // disk_file_spec_map - computed: false, optional: true, required: false
  private _diskFileSpecMap = new DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMapOutputReference(this, "disk_file_spec_map");
  public get diskFileSpecMap() {
    return this._diskFileSpecMap;
  }
  public putDiskFileSpecMap(value: DataK8SLonghornIoBackingImageV1Beta2ManifestSpecDiskFileSpecMap) {
    this._diskFileSpecMap.internalValue = value;
  }
  public resetDiskFileSpecMap() {
    this._diskFileSpecMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFileSpecMapInput() {
    return this._diskFileSpecMap.internalValue;
  }

  // disk_selector - computed: false, optional: true, required: false
  private _diskSelector?: string[]; 
  public get diskSelector() {
    return this.getListAttribute('disk_selector');
  }
  public set diskSelector(value: string[]) {
    this._diskSelector = value;
  }
  public resetDiskSelector() {
    this._diskSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSelectorInput() {
    return this._diskSelector;
  }

  // disks - computed: false, optional: true, required: false
  private _disks?: { [key: string]: string }; 
  public get disks() {
    return this.getStringMapAttribute('disks');
  }
  public set disks(value: { [key: string]: string }) {
    this._disks = value;
  }
  public resetDisks() {
    this._disks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks;
  }

  // min_number_of_copies - computed: false, optional: true, required: false
  private _minNumberOfCopies?: number; 
  public get minNumberOfCopies() {
    return this.getNumberAttribute('min_number_of_copies');
  }
  public set minNumberOfCopies(value: number) {
    this._minNumberOfCopies = value;
  }
  public resetMinNumberOfCopies() {
    this._minNumberOfCopies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumberOfCopiesInput() {
    return this._minNumberOfCopies;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: string[]; 
  public get nodeSelector() {
    return this.getListAttribute('node_selector');
  }
  public set nodeSelector(value: string[]) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
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

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }

  // source_parameters - computed: false, optional: true, required: false
  private _sourceParameters?: { [key: string]: string }; 
  public get sourceParameters() {
    return this.getStringMapAttribute('source_parameters');
  }
  public set sourceParameters(value: { [key: string]: string }) {
    this._sourceParameters = value;
  }
  public resetSourceParameters() {
    this._sourceParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParametersInput() {
    return this._sourceParameters;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest k8s_longhorn_io_backing_image_v1beta2_manifest}
*/
export class DataK8SLonghornIoBackingImageV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_longhorn_io_backing_image_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLonghornIoBackingImageV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLonghornIoBackingImageV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SLonghornIoBackingImageV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLonghornIoBackingImageV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_longhorn_io_backing_image_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_v1beta2_manifest k8s_longhorn_io_backing_image_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLonghornIoBackingImageV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLonghornIoBackingImageV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_longhorn_io_backing_image_v1beta2_manifest',
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
  private _metadata = new DataK8SLonghornIoBackingImageV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLonghornIoBackingImageV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLonghornIoBackingImageV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLonghornIoBackingImageV1Beta2ManifestSpec) {
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
      metadata: dataK8SLonghornIoBackingImageV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLonghornIoBackingImageV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLonghornIoBackingImageV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoBackingImageV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SLonghornIoBackingImageV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoBackingImageV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
