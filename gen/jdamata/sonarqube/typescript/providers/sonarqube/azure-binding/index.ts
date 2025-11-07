// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure DevOps setting key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding#alm_setting AzureBinding#alm_setting}
  */
  readonly almSetting: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding#id AzureBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is this project part of a monorepo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding#monorepo AzureBinding#monorepo}
  */
  readonly monorepo?: boolean | cdktf.IResolvable;
  /**
  * SonarQube project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding#project AzureBinding#project}
  */
  readonly project: string;
  /**
  * Azure project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding#project_name AzureBinding#project_name}
  */
  readonly projectName: string;
  /**
  * Azure repository name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding#repository_name AzureBinding#repository_name}
  */
  readonly repositoryName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding sonarqube_azure_binding}
*/
export class AzureBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_azure_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureBinding to import
  * @param importFromId The id of the existing AzureBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_azure_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/azure_binding sonarqube_azure_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AzureBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_azure_binding',
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
    this._projectName = config.projectName;
    this._repositoryName = config.repositoryName;
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
  private _monorepo?: boolean | cdktf.IResolvable; 
  public get monorepo() {
    return this.getBooleanAttribute('monorepo');
  }
  public set monorepo(value: boolean | cdktf.IResolvable) {
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alm_setting: cdktf.stringToTerraform(this._almSetting),
      id: cdktf.stringToTerraform(this._id),
      monorepo: cdktf.booleanToTerraform(this._monorepo),
      project: cdktf.stringToTerraform(this._project),
      project_name: cdktf.stringToTerraform(this._projectName),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
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
        value: cdktf.booleanToHclTerraform(this._monorepo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
