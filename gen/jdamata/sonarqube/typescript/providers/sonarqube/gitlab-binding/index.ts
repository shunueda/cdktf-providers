// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/gitlab_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GitlabBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * GitLab ALM setting key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/gitlab_binding#alm_setting GitlabBinding#alm_setting}
  */
  readonly almSetting: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/gitlab_binding#id GitlabBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is this project part of a monorepo. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/gitlab_binding#monorepo GitlabBinding#monorepo}
  */
  readonly monorepo?: string;
  /**
  * SonarQube project key. Changing this will force a new resource to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/gitlab_binding#project GitlabBinding#project}
  */
  readonly project: string;
  /**
  * The GitLab project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/gitlab_binding#repository GitlabBinding#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/gitlab_binding sonarqube_gitlab_binding}
*/
export class GitlabBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_gitlab_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GitlabBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GitlabBinding to import
  * @param importFromId The id of the existing GitlabBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/gitlab_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GitlabBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_gitlab_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/gitlab_binding sonarqube_gitlab_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitlabBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GitlabBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_gitlab_binding',
      terraformGeneratorMetadata: {
        providerName: 'sonarqube',
        providerVersion: '0.16.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._almSetting = config.almSetting;
    this._id = config.id;
    this._monorepo = config.monorepo;
    this._project = config.project;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alm_setting - computed: false, optional: false, required: true
  private _almSetting?: string; 
  public get almSetting() {
    return this.getStringAttribute('alm_setting');
  }
  public set almSetting(value: string) {
    this._almSetting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get almSettingInput() {
    return this._almSetting;
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

  // monorepo - computed: false, optional: true, required: false
  private _monorepo?: string; 
  public get monorepo() {
    return this.getStringAttribute('monorepo');
  }
  public set monorepo(value: string) {
    this._monorepo = value;
  }
  public resetMonorepo() {
    this._monorepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monorepoInput() {
    return this._monorepo;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alm_setting: cdktf.stringToTerraform(this._almSetting),
      id: cdktf.stringToTerraform(this._id),
      monorepo: cdktf.stringToTerraform(this._monorepo),
      project: cdktf.stringToTerraform(this._project),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alm_setting: {
        value: cdktf.stringToHclTerraform(this._almSetting),
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
      monorepo: {
        value: cdktf.stringToHclTerraform(this._monorepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
