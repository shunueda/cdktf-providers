// generated from terraform resource schema

import { DataK8SMinioMinIoTenantV2ManifestMetadata, 
dataK8SMinioMinIoTenantV2ManifestMetadataToTerraform, 
dataK8SMinioMinIoTenantV2ManifestMetadataToHclTerraform, 
DataK8SMinioMinIoTenantV2ManifestMetadataOutputReference, 
DataK8SMinioMinIoTenantV2ManifestScheduler, 
dataK8SMinioMinIoTenantV2ManifestSchedulerToTerraform, 
dataK8SMinioMinIoTenantV2ManifestSchedulerToHclTerraform, 
DataK8SMinioMinIoTenantV2ManifestSchedulerOutputReference, 
DataK8SMinioMinIoTenantV2ManifestSpec, 
dataK8SMinioMinIoTenantV2ManifestSpecToTerraform, 
dataK8SMinioMinIoTenantV2ManifestSpecToHclTerraform, 
DataK8SMinioMinIoTenantV2ManifestSpecOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataK8SMinioMinIoTenantV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/minio_min_io_tenant_v2_manifest#metadata DataK8SMinioMinIoTenantV2Manifest#metadata}
  */
  readonly metadata: DataK8SMinioMinIoTenantV2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/minio_min_io_tenant_v2_manifest#scheduler DataK8SMinioMinIoTenantV2Manifest#scheduler}
  */
  readonly scheduler?: DataK8SMinioMinIoTenantV2ManifestScheduler;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/minio_min_io_tenant_v2_manifest#spec DataK8SMinioMinIoTenantV2Manifest#spec}
  */
  readonly spec: DataK8SMinioMinIoTenantV2ManifestSpec;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/minio_min_io_tenant_v2_manifest k8s_minio_min_io_tenant_v2_manifest}
*/
export class DataK8SMinioMinIoTenantV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_minio_min_io_tenant_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMinioMinIoTenantV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMinioMinIoTenantV2Manifest to import
  * @param importFromId The id of the existing DataK8SMinioMinIoTenantV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/minio_min_io_tenant_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMinioMinIoTenantV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_minio_min_io_tenant_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/minio_min_io_tenant_v2_manifest k8s_minio_min_io_tenant_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMinioMinIoTenantV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMinioMinIoTenantV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_minio_min_io_tenant_v2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
    this._scheduler.internalValue = config.scheduler;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SMinioMinIoTenantV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMinioMinIoTenantV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler = new DataK8SMinioMinIoTenantV2ManifestSchedulerOutputReference(this, "scheduler");
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: DataK8SMinioMinIoTenantV2ManifestScheduler) {
    this._scheduler.internalValue = value;
  }
  public resetScheduler() {
    this._scheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SMinioMinIoTenantV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMinioMinIoTenantV2ManifestSpec) {
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
      metadata: dataK8SMinioMinIoTenantV2ManifestMetadataToTerraform(this._metadata.internalValue),
      scheduler: dataK8SMinioMinIoTenantV2ManifestSchedulerToTerraform(this._scheduler.internalValue),
      spec: dataK8SMinioMinIoTenantV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMinioMinIoTenantV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMinioMinIoTenantV2ManifestMetadata",
      },
      scheduler: {
        value: dataK8SMinioMinIoTenantV2ManifestSchedulerToHclTerraform(this._scheduler.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMinioMinIoTenantV2ManifestScheduler",
      },
      spec: {
        value: dataK8SMinioMinIoTenantV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMinioMinIoTenantV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
