// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualityprofile_project_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QualityprofileProjectAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualityprofile_project_association#id QualityprofileProjectAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Quality profile language. Must be a langauge in this list https://next.sonarqube.com/sonarqube/web_api/api/languages/list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualityprofile_project_association#language QualityprofileProjectAssociation#language}
  */
  readonly language: string;
  /**
  * Name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualityprofile_project_association#project QualityprofileProjectAssociation#project}
  */
  readonly project: string;
  /**
  * Name of the Quality Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualityprofile_project_association#quality_profile QualityprofileProjectAssociation#quality_profile}
  */
  readonly qualityProfile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualityprofile_project_association sonarqube_qualityprofile_project_association}
*/
export class QualityprofileProjectAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_qualityprofile_project_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QualityprofileProjectAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QualityprofileProjectAssociation to import
  * @param importFromId The id of the existing QualityprofileProjectAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualityprofile_project_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QualityprofileProjectAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_qualityprofile_project_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualityprofile_project_association sonarqube_qualityprofile_project_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QualityprofileProjectAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: QualityprofileProjectAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_qualityprofile_project_association',
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
    this._id = config.id;
    this._language = config.language;
    this._project = config.project;
    this._qualityProfile = config.qualityProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // quality_profile - computed: false, optional: false, required: true
  private _qualityProfile?: string; 
  public get qualityProfile() {
    return this.getStringAttribute('quality_profile');
  }
  public set qualityProfile(value: string) {
    this._qualityProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityProfileInput() {
    return this._qualityProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      project: cdktf.stringToTerraform(this._project),
      quality_profile: cdktf.stringToTerraform(this._qualityProfile),
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
      language: {
        value: cdktf.stringToHclTerraform(this._language),
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
      quality_profile: {
        value: cdktf.stringToHclTerraform(this._qualityProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
