// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#application_name TemApplication#application_name}
  */
  readonly applicationName: string;
  /**
  * program language, like JAVA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#coding_language TemApplication#coding_language}
  */
  readonly codingLanguage: string;
  /**
  * application description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#description TemApplication#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#id TemApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * tcr instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#instance_id TemApplication#instance_id}
  */
  readonly instanceId?: string;
  /**
  * repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#repo_name TemApplication#repo_name}
  */
  readonly repoName?: string;
  /**
  * registry address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#repo_server TemApplication#repo_server}
  */
  readonly repoServer?: string;
  /**
  * repo type, 0: tcr personal, 1: tcr enterprise, 2: public repository, 3: tcr hosted by tem, 4: demo image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#repo_type TemApplication#repo_type}
  */
  readonly repoType?: number;
  /**
  * application tag list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#tags TemApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * create image repo or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#use_default_image_service TemApplication#use_default_image_service}
  */
  readonly useDefaultImageService?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application tencentcloud_tem_application}
*/
export class TemApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tem_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemApplication to import
  * @param importFromId The id of the existing TemApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tem_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tem_application tencentcloud_tem_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: TemApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tem_application',
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
    this._applicationName = config.applicationName;
    this._codingLanguage = config.codingLanguage;
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._repoName = config.repoName;
    this._repoServer = config.repoServer;
    this._repoType = config.repoType;
    this._tags = config.tags;
    this._useDefaultImageService = config.useDefaultImageService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // coding_language - computed: false, optional: false, required: true
  private _codingLanguage?: string; 
  public get codingLanguage() {
    return this.getStringAttribute('coding_language');
  }
  public set codingLanguage(value: string) {
    this._codingLanguage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codingLanguageInput() {
    return this._codingLanguage;
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

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // repo_server - computed: false, optional: true, required: false
  private _repoServer?: string; 
  public get repoServer() {
    return this.getStringAttribute('repo_server');
  }
  public set repoServer(value: string) {
    this._repoServer = value;
  }
  public resetRepoServer() {
    this._repoServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoServerInput() {
    return this._repoServer;
  }

  // repo_type - computed: false, optional: true, required: false
  private _repoType?: number; 
  public get repoType() {
    return this.getNumberAttribute('repo_type');
  }
  public set repoType(value: number) {
    this._repoType = value;
  }
  public resetRepoType() {
    this._repoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_default_image_service - computed: false, optional: true, required: false
  private _useDefaultImageService?: number; 
  public get useDefaultImageService() {
    return this.getNumberAttribute('use_default_image_service');
  }
  public set useDefaultImageService(value: number) {
    this._useDefaultImageService = value;
  }
  public resetUseDefaultImageService() {
    this._useDefaultImageService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultImageServiceInput() {
    return this._useDefaultImageService;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_name: cdktf.stringToTerraform(this._applicationName),
      coding_language: cdktf.stringToTerraform(this._codingLanguage),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      repo_name: cdktf.stringToTerraform(this._repoName),
      repo_server: cdktf.stringToTerraform(this._repoServer),
      repo_type: cdktf.numberToTerraform(this._repoType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_default_image_service: cdktf.numberToTerraform(this._useDefaultImageService),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coding_language: {
        value: cdktf.stringToHclTerraform(this._codingLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_name: {
        value: cdktf.stringToHclTerraform(this._repoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_server: {
        value: cdktf.stringToHclTerraform(this._repoServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_type: {
        value: cdktf.numberToHclTerraform(this._repoType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_default_image_service: {
        value: cdktf.numberToHclTerraform(this._useDefaultImageService),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
