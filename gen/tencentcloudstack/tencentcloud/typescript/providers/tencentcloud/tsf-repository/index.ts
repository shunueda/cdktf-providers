// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * the name of the bucket where the warehouse is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository#bucket_name TsfRepository#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Bucket region where the warehouse is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository#bucket_region TsfRepository#bucket_region}
  */
  readonly bucketRegion: string;
  /**
  * directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository#directory TsfRepository#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository#id TsfRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * warehouse description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository#repository_desc TsfRepository#repository_desc}
  */
  readonly repositoryDesc?: string;
  /**
  * warehouse name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository#repository_name TsfRepository#repository_name}
  */
  readonly repositoryName: string;
  /**
  * warehouse type (default warehouse: default, private warehouse: private).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository#repository_type TsfRepository#repository_type}
  */
  readonly repositoryType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository tencentcloud_tsf_repository}
*/
export class TsfRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfRepository to import
  * @param importFromId The id of the existing TsfRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_repository tencentcloud_tsf_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: TsfRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_repository',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._bucketRegion = config.bucketRegion;
    this._directory = config.directory;
    this._id = config.id;
    this._repositoryDesc = config.repositoryDesc;
    this._repositoryName = config.repositoryName;
    this._repositoryType = config.repositoryType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_region - computed: false, optional: false, required: true
  private _bucketRegion?: string; 
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // directory - computed: true, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
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

  // is_used - computed: true, optional: false, required: false
  public get isUsed() {
    return this.getBooleanAttribute('is_used');
  }

  // repository_desc - computed: true, optional: true, required: false
  private _repositoryDesc?: string; 
  public get repositoryDesc() {
    return this.getStringAttribute('repository_desc');
  }
  public set repositoryDesc(value: string) {
    this._repositoryDesc = value;
  }
  public resetRepositoryDesc() {
    this._repositoryDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryDescInput() {
    return this._repositoryDesc;
  }

  // repository_id - computed: true, optional: false, required: false
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
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

  // repository_type - computed: false, optional: false, required: true
  private _repositoryType?: string; 
  public get repositoryType() {
    return this.getStringAttribute('repository_type');
  }
  public set repositoryType(value: string) {
    this._repositoryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryTypeInput() {
    return this._repositoryType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bucket_region: cdktf.stringToTerraform(this._bucketRegion),
      directory: cdktf.stringToTerraform(this._directory),
      id: cdktf.stringToTerraform(this._id),
      repository_desc: cdktf.stringToTerraform(this._repositoryDesc),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
      repository_type: cdktf.stringToTerraform(this._repositoryType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_region: {
        value: cdktf.stringToHclTerraform(this._bucketRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_desc: {
        value: cdktf.stringToHclTerraform(this._repositoryDesc),
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
      repository_type: {
        value: cdktf.stringToHclTerraform(this._repositoryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
