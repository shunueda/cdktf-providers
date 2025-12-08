// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#metadata DataK8SMetal3IoHardwareDataV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadata;
  /**
  * HardwareDataSpec defines the desired state of HardwareData.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#spec DataK8SMetal3IoHardwareDataV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpec;
}
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#annotations DataK8SMetal3IoHardwareDataV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#labels DataK8SMetal3IoHardwareDataV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#name DataK8SMetal3IoHardwareDataV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#namespace DataK8SMetal3IoHardwareDataV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#arch DataK8SMetal3IoHardwareDataV1Alpha1Manifest#arch}
  */
  readonly arch?: string;
  /**
  * ClockSpeed is a clock speed in MHz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#clock_megahertz DataK8SMetal3IoHardwareDataV1Alpha1Manifest#clock_megahertz}
  */
  readonly clockMegahertz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#count DataK8SMetal3IoHardwareDataV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#flags DataK8SMetal3IoHardwareDataV1Alpha1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#model DataK8SMetal3IoHardwareDataV1Alpha1Manifest#model}
  */
  readonly model?: string;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpuToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    clock_megahertz: cdktf.numberToTerraform(struct!.clockMegahertz),
    count: cdktf.numberToTerraform(struct!.count),
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpuToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clock_megahertz: {
      value: cdktf.numberToHclTerraform(struct!.clockMegahertz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._clockMegahertz !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockMegahertz = this._clockMegahertz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._clockMegahertz = undefined;
      this._count = undefined;
      this._flags = undefined;
      this._model = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._clockMegahertz = value.clockMegahertz;
      this._count = value.count;
      this._flags = value.flags;
      this._model = value.model;
    }
  }

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // clock_megahertz - computed: false, optional: true, required: false
  private _clockMegahertz?: number; 
  public get clockMegahertz() {
    return this.getNumberAttribute('clock_megahertz');
  }
  public set clockMegahertz(value: number) {
    this._clockMegahertz = value;
  }
  public resetClockMegahertz() {
    this._clockMegahertz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockMegahertzInput() {
    return this._clockMegahertz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBios {
  /**
  * The release/build date for this BIOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#date DataK8SMetal3IoHardwareDataV1Alpha1Manifest#date}
  */
  readonly date?: string;
  /**
  * The vendor name for this BIOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#vendor DataK8SMetal3IoHardwareDataV1Alpha1Manifest#vendor}
  */
  readonly vendor?: string;
  /**
  * The version of the BIOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#version DataK8SMetal3IoHardwareDataV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBiosToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBios | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBiosToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBios | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBiosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBios | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBios | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._vendor = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._vendor = value.vendor;
      this._version = value.version;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmware {
  /**
  * The BIOS for this firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#bios DataK8SMetal3IoHardwareDataV1Alpha1Manifest#bios}
  */
  readonly bios?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBios;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bios: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBiosToTerraform(struct!.bios),
  }
}


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bios: {
      value: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBiosToHclTerraform(struct!.bios),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBios",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bios?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bios = this._bios?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bios.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bios.internalValue = value.bios;
    }
  }

  // bios - computed: false, optional: true, required: false
  private _bios = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBiosOutputReference(this, "bios");
  public get bios() {
    return this._bios;
  }
  public putBios(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareBios) {
    this._bios.internalValue = value;
  }
  public resetBios() {
    this._bios.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosInput() {
    return this._bios.internalValue;
  }
}
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlans {
  /**
  * VLANID is a 12-bit 802.1Q VLAN identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#id DataK8SMetal3IoHardwareDataV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#name DataK8SMetal3IoHardwareDataV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlans[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansOutputReference {
    return new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNics {
  /**
  * The IP address of the interface. This will be an IPv4 or IPv6 address if one is present. If both IPv4 and IPv6 addresses are present in a dual-stack environment, two nics will be output, one with each IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#ip DataK8SMetal3IoHardwareDataV1Alpha1Manifest#ip}
  */
  readonly ip?: string;
  /**
  * The device MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#mac DataK8SMetal3IoHardwareDataV1Alpha1Manifest#mac}
  */
  readonly mac?: string;
  /**
  * The vendor and product IDs of the NIC, e.g. '0x8086 0x1572'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#model DataK8SMetal3IoHardwareDataV1Alpha1Manifest#model}
  */
  readonly model?: string;
  /**
  * The name of the network interface, e.g. 'en0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#name DataK8SMetal3IoHardwareDataV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Whether the NIC is PXE Bootable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#pxe DataK8SMetal3IoHardwareDataV1Alpha1Manifest#pxe}
  */
  readonly pxe?: boolean | cdktf.IResolvable;
  /**
  * The speed of the device in Gigabits per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#speed_gbps DataK8SMetal3IoHardwareDataV1Alpha1Manifest#speed_gbps}
  */
  readonly speedGbps?: number;
  /**
  * The untagged VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#vlan_id DataK8SMetal3IoHardwareDataV1Alpha1Manifest#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * The VLANs available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#vlans DataK8SMetal3IoHardwareDataV1Alpha1Manifest#vlans}
  */
  readonly vlans?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlans[] | cdktf.IResolvable;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mac: cdktf.stringToTerraform(struct!.mac),
    model: cdktf.stringToTerraform(struct!.model),
    name: cdktf.stringToTerraform(struct!.name),
    pxe: cdktf.booleanToTerraform(struct!.pxe),
    speed_gbps: cdktf.numberToTerraform(struct!.speedGbps),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlans: cdktf.listMapper(dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansToTerraform, false)(struct!.vlans),
  }
}


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
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
    pxe: {
      value: cdktf.booleanToHclTerraform(struct!.pxe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    speed_gbps: {
      value: cdktf.numberToHclTerraform(struct!.speedGbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlans: {
      value: cdktf.listMapperHcl(dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansToHclTerraform, false)(struct!.vlans),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pxe !== undefined) {
      hasAnyValues = true;
      internalValueResult.pxe = this._pxe;
    }
    if (this._speedGbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedGbps = this._speedGbps;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._mac = undefined;
      this._model = undefined;
      this._name = undefined;
      this._pxe = undefined;
      this._speedGbps = undefined;
      this._vlanId = undefined;
      this._vlans.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._mac = value.mac;
      this._model = value.model;
      this._name = value.name;
      this._pxe = value.pxe;
      this._speedGbps = value.speedGbps;
      this._vlanId = value.vlanId;
      this._vlans.internalValue = value.vlans;
    }
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

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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

  // pxe - computed: false, optional: true, required: false
  private _pxe?: boolean | cdktf.IResolvable; 
  public get pxe() {
    return this.getBooleanAttribute('pxe');
  }
  public set pxe(value: boolean | cdktf.IResolvable) {
    this._pxe = value;
  }
  public resetPxe() {
    this._pxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxeInput() {
    return this._pxe;
  }

  // speed_gbps - computed: false, optional: true, required: false
  private _speedGbps?: number; 
  public get speedGbps() {
    return this.getNumberAttribute('speed_gbps');
  }
  public set speedGbps(value: number) {
    this._speedGbps = value;
  }
  public resetSpeedGbps() {
    this._speedGbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedGbpsInput() {
    return this._speedGbps;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsOutputReference {
    return new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorage {
  /**
  * A list of alternate Linux device names of the disk, e.g. '/dev/sda'. Note that this list is not exhaustive, and names may not be stable across reboots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#alternate_names DataK8SMetal3IoHardwareDataV1Alpha1Manifest#alternate_names}
  */
  readonly alternateNames?: string[];
  /**
  * The SCSI location of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#hctl DataK8SMetal3IoHardwareDataV1Alpha1Manifest#hctl}
  */
  readonly hctl?: string;
  /**
  * Hardware model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#model DataK8SMetal3IoHardwareDataV1Alpha1Manifest#model}
  */
  readonly model?: string;
  /**
  * A Linux device name of the disk, e.g. '/dev/disk/by-path/pci-0000:01:00.0-scsi-0:2:0:0'. This will be a name that is stable across reboots if one is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#name DataK8SMetal3IoHardwareDataV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Whether this disk represents rotational storage. This field is not recommended for usage, please prefer using 'Type' field instead, this field will be deprecated eventually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#rotational DataK8SMetal3IoHardwareDataV1Alpha1Manifest#rotational}
  */
  readonly rotational?: boolean | cdktf.IResolvable;
  /**
  * The serial number of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#serial_number DataK8SMetal3IoHardwareDataV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * The size of the disk in Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#size_bytes DataK8SMetal3IoHardwareDataV1Alpha1Manifest#size_bytes}
  */
  readonly sizeBytes?: number;
  /**
  * Device type, one of: HDD, SSD, NVME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#type DataK8SMetal3IoHardwareDataV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * The name of the vendor of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#vendor DataK8SMetal3IoHardwareDataV1Alpha1Manifest#vendor}
  */
  readonly vendor?: string;
  /**
  * The WWN of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#wwn DataK8SMetal3IoHardwareDataV1Alpha1Manifest#wwn}
  */
  readonly wwn?: string;
  /**
  * The WWN Vendor extension of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#wwn_vendor_extension DataK8SMetal3IoHardwareDataV1Alpha1Manifest#wwn_vendor_extension}
  */
  readonly wwnVendorExtension?: string;
  /**
  * The WWN with the extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#wwn_with_extension DataK8SMetal3IoHardwareDataV1Alpha1Manifest#wwn_with_extension}
  */
  readonly wwnWithExtension?: string;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alternateNames),
    hctl: cdktf.stringToTerraform(struct!.hctl),
    model: cdktf.stringToTerraform(struct!.model),
    name: cdktf.stringToTerraform(struct!.name),
    rotational: cdktf.booleanToTerraform(struct!.rotational),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    size_bytes: cdktf.numberToTerraform(struct!.sizeBytes),
    type: cdktf.stringToTerraform(struct!.type),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    wwn: cdktf.stringToTerraform(struct!.wwn),
    wwn_vendor_extension: cdktf.stringToTerraform(struct!.wwnVendorExtension),
    wwn_with_extension: cdktf.stringToTerraform(struct!.wwnWithExtension),
  }
}


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alternateNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hctl: {
      value: cdktf.stringToHclTerraform(struct!.hctl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
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
    rotational: {
      value: cdktf.booleanToHclTerraform(struct!.rotational),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn: {
      value: cdktf.stringToHclTerraform(struct!.wwn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn_vendor_extension: {
      value: cdktf.stringToHclTerraform(struct!.wwnVendorExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn_with_extension: {
      value: cdktf.stringToHclTerraform(struct!.wwnWithExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNames = this._alternateNames;
    }
    if (this._hctl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hctl = this._hctl;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rotational !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotational = this._rotational;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._sizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeBytes = this._sizeBytes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._wwn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwn = this._wwn;
    }
    if (this._wwnVendorExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwnVendorExtension = this._wwnVendorExtension;
    }
    if (this._wwnWithExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwnWithExtension = this._wwnWithExtension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateNames = undefined;
      this._hctl = undefined;
      this._model = undefined;
      this._name = undefined;
      this._rotational = undefined;
      this._serialNumber = undefined;
      this._sizeBytes = undefined;
      this._type = undefined;
      this._vendor = undefined;
      this._wwn = undefined;
      this._wwnVendorExtension = undefined;
      this._wwnWithExtension = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateNames = value.alternateNames;
      this._hctl = value.hctl;
      this._model = value.model;
      this._name = value.name;
      this._rotational = value.rotational;
      this._serialNumber = value.serialNumber;
      this._sizeBytes = value.sizeBytes;
      this._type = value.type;
      this._vendor = value.vendor;
      this._wwn = value.wwn;
      this._wwnVendorExtension = value.wwnVendorExtension;
      this._wwnWithExtension = value.wwnWithExtension;
    }
  }

  // alternate_names - computed: false, optional: true, required: false
  private _alternateNames?: string[]; 
  public get alternateNames() {
    return this.getListAttribute('alternate_names');
  }
  public set alternateNames(value: string[]) {
    this._alternateNames = value;
  }
  public resetAlternateNames() {
    this._alternateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNamesInput() {
    return this._alternateNames;
  }

  // hctl - computed: false, optional: true, required: false
  private _hctl?: string; 
  public get hctl() {
    return this.getStringAttribute('hctl');
  }
  public set hctl(value: string) {
    this._hctl = value;
  }
  public resetHctl() {
    this._hctl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hctlInput() {
    return this._hctl;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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

  // rotational - computed: false, optional: true, required: false
  private _rotational?: boolean | cdktf.IResolvable; 
  public get rotational() {
    return this.getBooleanAttribute('rotational');
  }
  public set rotational(value: boolean | cdktf.IResolvable) {
    this._rotational = value;
  }
  public resetRotational() {
    this._rotational = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationalInput() {
    return this._rotational;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // size_bytes - computed: false, optional: true, required: false
  private _sizeBytes?: number; 
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }
  public set sizeBytes(value: number) {
    this._sizeBytes = value;
  }
  public resetSizeBytes() {
    this._sizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeBytesInput() {
    return this._sizeBytes;
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

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // wwn - computed: false, optional: true, required: false
  private _wwn?: string; 
  public get wwn() {
    return this.getStringAttribute('wwn');
  }
  public set wwn(value: string) {
    this._wwn = value;
  }
  public resetWwn() {
    this._wwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnInput() {
    return this._wwn;
  }

  // wwn_vendor_extension - computed: false, optional: true, required: false
  private _wwnVendorExtension?: string; 
  public get wwnVendorExtension() {
    return this.getStringAttribute('wwn_vendor_extension');
  }
  public set wwnVendorExtension(value: string) {
    this._wwnVendorExtension = value;
  }
  public resetWwnVendorExtension() {
    this._wwnVendorExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnVendorExtensionInput() {
    return this._wwnVendorExtension;
  }

  // wwn_with_extension - computed: false, optional: true, required: false
  private _wwnWithExtension?: string; 
  public get wwnWithExtension() {
    return this.getStringAttribute('wwn_with_extension');
  }
  public set wwnWithExtension(value: string) {
    this._wwnWithExtension = value;
  }
  public resetWwnWithExtension() {
    this._wwnWithExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnWithExtensionInput() {
    return this._wwnWithExtension;
  }
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorage[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageOutputReference {
    return new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#manufacturer DataK8SMetal3IoHardwareDataV1Alpha1Manifest#manufacturer}
  */
  readonly manufacturer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#product_name DataK8SMetal3IoHardwareDataV1Alpha1Manifest#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#serial_number DataK8SMetal3IoHardwareDataV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: string;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendorToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manufacturer: cdktf.stringToTerraform(struct!.manufacturer),
    product_name: cdktf.stringToTerraform(struct!.productName),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
  }
}


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendorToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manufacturer: {
      value: cdktf.stringToHclTerraform(struct!.manufacturer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_name: {
      value: cdktf.stringToHclTerraform(struct!.productName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manufacturer !== undefined) {
      hasAnyValues = true;
      internalValueResult.manufacturer = this._manufacturer;
    }
    if (this._productName !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manufacturer = undefined;
      this._productName = undefined;
      this._serialNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manufacturer = value.manufacturer;
      this._productName = value.productName;
      this._serialNumber = value.serialNumber;
    }
  }

  // manufacturer - computed: false, optional: true, required: false
  private _manufacturer?: string; 
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }
  public set manufacturer(value: string) {
    this._manufacturer = value;
  }
  public resetManufacturer() {
    this._manufacturer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerInput() {
    return this._manufacturer;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }
}
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardware {
  /**
  * Details of the CPU(s) in the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#cpu DataK8SMetal3IoHardwareDataV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpu;
  /**
  * System firmware information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#firmware DataK8SMetal3IoHardwareDataV1Alpha1Manifest#firmware}
  */
  readonly firmware?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmware;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#hostname DataK8SMetal3IoHardwareDataV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * List of network interfaces for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#nics DataK8SMetal3IoHardwareDataV1Alpha1Manifest#nics}
  */
  readonly nics?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNics[] | cdktf.IResolvable;
  /**
  * The host's amount of memory in Mebibytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#ram_mebibytes DataK8SMetal3IoHardwareDataV1Alpha1Manifest#ram_mebibytes}
  */
  readonly ramMebibytes?: number;
  /**
  * List of storage (disk, SSD, etc.) available to the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#storage DataK8SMetal3IoHardwareDataV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorage[] | cdktf.IResolvable;
  /**
  * System vendor information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#system_vendor DataK8SMetal3IoHardwareDataV1Alpha1Manifest#system_vendor}
  */
  readonly systemVendor?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendor;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpuToTerraform(struct!.cpu),
    firmware: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareToTerraform(struct!.firmware),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    nics: cdktf.listMapper(dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsToTerraform, false)(struct!.nics),
    ram_mebibytes: cdktf.numberToTerraform(struct!.ramMebibytes),
    storage: cdktf.listMapper(dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageToTerraform, false)(struct!.storage),
    system_vendor: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendorToTerraform(struct!.systemVendor),
  }
}


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpu",
    },
    firmware: {
      value: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareToHclTerraform(struct!.firmware),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmware",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nics: {
      value: cdktf.listMapperHcl(dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsToHclTerraform, false)(struct!.nics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsList",
    },
    ram_mebibytes: {
      value: cdktf.numberToHclTerraform(struct!.ramMebibytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.listMapperHcl(dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageToHclTerraform, false)(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageList",
    },
    system_vendor: {
      value: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendorToHclTerraform(struct!.systemVendor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._firmware?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmware = this._firmware?.internalValue;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._nics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nics = this._nics?.internalValue;
    }
    if (this._ramMebibytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramMebibytes = this._ramMebibytes;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._systemVendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemVendor = this._systemVendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._firmware.internalValue = undefined;
      this._hostname = undefined;
      this._nics.internalValue = undefined;
      this._ramMebibytes = undefined;
      this._storage.internalValue = undefined;
      this._systemVendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._firmware.internalValue = value.firmware;
      this._hostname = value.hostname;
      this._nics.internalValue = value.nics;
      this._ramMebibytes = value.ramMebibytes;
      this._storage.internalValue = value.storage;
      this._systemVendor.internalValue = value.systemVendor;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // firmware - computed: false, optional: true, required: false
  private _firmware = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmwareOutputReference(this, "firmware");
  public get firmware() {
    return this._firmware;
  }
  public putFirmware(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareFirmware) {
    this._firmware.internalValue = value;
  }
  public resetFirmware() {
    this._firmware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware.internalValue;
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

  // nics - computed: false, optional: true, required: false
  private _nics = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }
  public putNics(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareNics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // ram_mebibytes - computed: false, optional: true, required: false
  private _ramMebibytes?: number; 
  public get ramMebibytes() {
    return this.getNumberAttribute('ram_mebibytes');
  }
  public set ramMebibytes(value: number) {
    this._ramMebibytes = value;
  }
  public resetRamMebibytes() {
    this._ramMebibytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramMebibytesInput() {
    return this._ramMebibytes;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // system_vendor - computed: false, optional: true, required: false
  private _systemVendor = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendorOutputReference(this, "system_vendor");
  public get systemVendor() {
    return this._systemVendor;
  }
  public putSystemVendor(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareSystemVendor) {
    this._systemVendor.internalValue = value;
  }
  public resetSystemVendor() {
    this._systemVendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemVendorInput() {
    return this._systemVendor.internalValue;
  }
}
export interface DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpec {
  /**
  * The hardware discovered on the host during its inspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#hardware DataK8SMetal3IoHardwareDataV1Alpha1Manifest#hardware}
  */
  readonly hardware?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardware;
}

export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareToTerraform(struct!.hardware),
  }
}


export function dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware: {
      value: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareToHclTerraform(struct!.hardware),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardware",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardware?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardware = this._hardware?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardware.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardware.internalValue = value.hardware;
    }
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardwareOutputReference(this, "hardware");
  public get hardware() {
    return this._hardware;
  }
  public putHardware(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecHardware) {
    this._hardware.internalValue = value;
  }
  public resetHardware() {
    this._hardware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest k8s_metal3_io_hardware_data_v1alpha1_manifest}
*/
export class DataK8SMetal3IoHardwareDataV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_metal3_io_hardware_data_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMetal3IoHardwareDataV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMetal3IoHardwareDataV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMetal3IoHardwareDataV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMetal3IoHardwareDataV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_metal3_io_hardware_data_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_hardware_data_v1alpha1_manifest k8s_metal3_io_hardware_data_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMetal3IoHardwareDataV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMetal3IoHardwareDataV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_metal3_io_hardware_data_v1alpha1_manifest',
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
  private _metadata = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMetal3IoHardwareDataV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMetal3IoHardwareDataV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
