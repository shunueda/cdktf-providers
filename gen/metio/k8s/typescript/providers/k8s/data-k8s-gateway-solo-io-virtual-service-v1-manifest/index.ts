// generated from terraform resource schema

import { DataK8SGatewaySoloIoVirtualServiceV1ManifestMetadata, 
dataK8SGatewaySoloIoVirtualServiceV1ManifestMetadataToTerraform, 
dataK8SGatewaySoloIoVirtualServiceV1ManifestMetadataToHclTerraform, 
DataK8SGatewaySoloIoVirtualServiceV1ManifestMetadataOutputReference, 
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpec, 
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecToTerraform, 
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecToHclTerraform, 
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#metadata DataK8SGatewaySoloIoVirtualServiceV1Manifest#metadata}
  */
  readonly metadata: DataK8SGatewaySoloIoVirtualServiceV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#spec DataK8SGatewaySoloIoVirtualServiceV1Manifest#spec}
  */
  readonly spec?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpec;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest k8s_gateway_solo_io_virtual_service_v1_manifest}
*/
export class DataK8SGatewaySoloIoVirtualServiceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_solo_io_virtual_service_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewaySoloIoVirtualServiceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewaySoloIoVirtualServiceV1Manifest to import
  * @param importFromId The id of the existing DataK8SGatewaySoloIoVirtualServiceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewaySoloIoVirtualServiceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_solo_io_virtual_service_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest k8s_gateway_solo_io_virtual_service_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewaySoloIoVirtualServiceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewaySoloIoVirtualServiceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_solo_io_virtual_service_v1_manifest',
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
  private _metadata = new DataK8SGatewaySoloIoVirtualServiceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpec) {
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
      metadata: dataK8SGatewaySoloIoVirtualServiceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewaySoloIoVirtualServiceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
