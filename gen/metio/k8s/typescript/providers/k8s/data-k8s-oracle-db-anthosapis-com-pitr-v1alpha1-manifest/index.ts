// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#metadata DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadata;
  /**
  * PITRSpec defines the desired state of PITR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#spec DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpec;
}
export interface DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#annotations DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#labels DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#namespace DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRef {
  /**
  * 'name' is the name of a database instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRefToTerraform(struct?: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRefToHclTerraform(struct?: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRef | cdktf.IResolvable): any {
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

export class DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpec {
  /**
  * Schedule is a cron-style expression of the schedule on which Backup will be created for PITR. For allowed syntax, see en.wikipedia.org/wiki/Cron and godoc.org/github.com/robfig/cron. Default to backup every 4 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#backup_schedule DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#backup_schedule}
  */
  readonly backupSchedule?: string;
  /**
  * Images defines PITR service agent images. This is a required map that allows a customer to specify GCR images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#images DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#images}
  */
  readonly images: { [key: string]: string };
  /**
  * InstanceRef references to the instance that the PITR applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#instance_ref DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#instance_ref}
  */
  readonly instanceRef: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRef;
  /**
  * StorageURI is the URI to store PITR backups and redo logs. Currently only gs:// (GCS) schemes are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#storage_uri DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest#storage_uri}
  */
  readonly storageUri?: string;
}

export function dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_schedule: cdktf.stringToTerraform(struct!.backupSchedule),
    images: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.images),
    instance_ref: dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRefToTerraform(struct!.instanceRef),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
  }
}


export function dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_schedule: {
      value: cdktf.stringToHclTerraform(struct!.backupSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    images: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.images),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    instance_ref: {
      value: dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRefToHclTerraform(struct!.instanceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRef",
    },
    storage_uri: {
      value: cdktf.stringToHclTerraform(struct!.storageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSchedule = this._backupSchedule;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._instanceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRef = this._instanceRef?.internalValue;
    }
    if (this._storageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageUri = this._storageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupSchedule = undefined;
      this._images = undefined;
      this._instanceRef.internalValue = undefined;
      this._storageUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupSchedule = value.backupSchedule;
      this._images = value.images;
      this._instanceRef.internalValue = value.instanceRef;
      this._storageUri = value.storageUri;
    }
  }

  // backup_schedule - computed: false, optional: true, required: false
  private _backupSchedule?: string; 
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
  }
  public set backupSchedule(value: string) {
    this._backupSchedule = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule;
  }

  // images - computed: false, optional: false, required: true
  private _images?: { [key: string]: string }; 
  public get images() {
    return this.getStringMapAttribute('images');
  }
  public set images(value: { [key: string]: string }) {
    this._images = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // instance_ref - computed: false, optional: false, required: true
  private _instanceRef = new DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRefOutputReference(this, "instance_ref");
  public get instanceRef() {
    return this._instanceRef;
  }
  public putInstanceRef(value: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecInstanceRef) {
    this._instanceRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRefInput() {
    return this._instanceRef.internalValue;
  }

  // storage_uri - computed: false, optional: true, required: false
  private _storageUri?: string; 
  public get storageUri() {
    return this.getStringAttribute('storage_uri');
  }
  public set storageUri(value: string) {
    this._storageUri = value;
  }
  public resetStorageUri() {
    this._storageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUriInput() {
    return this._storageUri;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest k8s_oracle_db_anthosapis_com_pitr_v1alpha1_manifest}
*/
export class DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_oracle_db_anthosapis_com_pitr_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOracleDbAnthosapisComPitrV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_oracle_db_anthosapis_com_pitr_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_pitr_v1alpha1_manifest k8s_oracle_db_anthosapis_com_pitr_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_oracle_db_anthosapis_com_pitr_v1alpha1_manifest',
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
  private _metadata = new DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComPitrV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
