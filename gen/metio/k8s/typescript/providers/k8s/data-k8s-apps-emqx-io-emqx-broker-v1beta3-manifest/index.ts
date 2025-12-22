// generated from terraform resource schema

import { DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadata, 
dataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadataToTerraform, 
dataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadataToHclTerraform, 
DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadataOutputReference, 
DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpec, 
dataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpecToTerraform, 
dataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpecToHclTerraform, 
DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpecOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_emqx_io_emqx_broker_v1beta3_manifest#metadata DataK8SAppsEmqxIoEmqxBrokerV1Beta3Manifest#metadata}
  */
  readonly metadata: DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_emqx_io_emqx_broker_v1beta3_manifest#spec DataK8SAppsEmqxIoEmqxBrokerV1Beta3Manifest#spec}
  */
  readonly spec?: DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpec;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_emqx_io_emqx_broker_v1beta3_manifest k8s_apps_emqx_io_emqx_broker_v1beta3_manifest}
*/
export class DataK8SAppsEmqxIoEmqxBrokerV1Beta3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_emqx_io_emqx_broker_v1beta3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsEmqxIoEmqxBrokerV1Beta3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsEmqxIoEmqxBrokerV1Beta3Manifest to import
  * @param importFromId The id of the existing DataK8SAppsEmqxIoEmqxBrokerV1Beta3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_emqx_io_emqx_broker_v1beta3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsEmqxIoEmqxBrokerV1Beta3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_emqx_io_emqx_broker_v1beta3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_emqx_io_emqx_broker_v1beta3_manifest k8s_apps_emqx_io_emqx_broker_v1beta3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_emqx_io_emqx_broker_v1beta3_manifest',
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
  private _metadata = new DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpec) {
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
      metadata: dataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsEmqxIoEmqxBrokerV1Beta3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
