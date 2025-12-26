// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTcrImageManifestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests#id DataTencentcloudTcrImageManifests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * mirror version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests#image_version DataTencentcloudTcrImageManifests#image_version}
  */
  readonly imageVersion: string;
  /**
  * namespace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests#namespace_name DataTencentcloudTcrImageManifests#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests#registry_id DataTencentcloudTcrImageManifests#registry_id}
  */
  readonly registryId: string;
  /**
  * mirror warehouse name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests#repository_name DataTencentcloudTcrImageManifests#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests#result_output_file DataTencentcloudTcrImageManifests#result_output_file}
  */
  readonly resultOutputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests tencentcloud_tcr_image_manifests}
*/
export class DataTencentcloudTcrImageManifests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_image_manifests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTcrImageManifests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTcrImageManifests to import
  * @param importFromId The id of the existing DataTencentcloudTcrImageManifests that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTcrImageManifests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_image_manifests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_image_manifests tencentcloud_tcr_image_manifests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTcrImageManifestsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTcrImageManifestsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_image_manifests',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._imageVersion = config.imageVersion;
    this._namespaceName = config.namespaceName;
    this._registryId = config.registryId;
    this._repositoryName = config.repositoryName;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // id - computed: true, optional: true, required: false
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

  // image_version - computed: false, optional: false, required: true
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // manifest - computed: true, optional: false, required: false
  public get manifest() {
    return this.getStringAttribute('manifest');
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      image_version: cdktf.stringToTerraform(this._imageVersion),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      registry_id: cdktf.stringToTerraform(this._registryId),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_version: {
        value: cdktf.stringToHclTerraform(this._imageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_name: {
        value: cdktf.stringToHclTerraform(this._repositoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
