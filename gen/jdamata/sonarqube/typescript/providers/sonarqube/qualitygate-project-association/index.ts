// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualitygate_project_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QualitygateProjectAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualitygate_project_association#gateid QualitygateProjectAssociation#gateid}
  */
  readonly gateid?: string;
  /**
  * The name of the Quality Gate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualitygate_project_association#gatename QualitygateProjectAssociation#gatename}
  */
  readonly gatename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualitygate_project_association#id QualitygateProjectAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualitygate_project_association#projectkey QualitygateProjectAssociation#projectkey}
  */
  readonly projectkey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualitygate_project_association sonarqube_qualitygate_project_association}
*/
export class QualitygateProjectAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_qualitygate_project_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QualitygateProjectAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QualitygateProjectAssociation to import
  * @param importFromId The id of the existing QualitygateProjectAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualitygate_project_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QualitygateProjectAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_qualitygate_project_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/qualitygate_project_association sonarqube_qualitygate_project_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QualitygateProjectAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: QualitygateProjectAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_qualitygate_project_association',
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
    this._gateid = config.gateid;
    this._gatename = config.gatename;
    this._id = config.id;
    this._projectkey = config.projectkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateid - computed: false, optional: true, required: false
  private _gateid?: string; 
  public get gateid() {
    return this.getStringAttribute('gateid');
  }
  public set gateid(value: string) {
    this._gateid = value;
  }
  public resetGateid() {
    this._gateid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateidInput() {
    return this._gateid;
  }

  // gatename - computed: false, optional: true, required: false
  private _gatename?: string; 
  public get gatename() {
    return this.getStringAttribute('gatename');
  }
  public set gatename(value: string) {
    this._gatename = value;
  }
  public resetGatename() {
    this._gatename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatenameInput() {
    return this._gatename;
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

  // projectkey - computed: false, optional: false, required: true
  private _projectkey?: string; 
  public get projectkey() {
    return this.getStringAttribute('projectkey');
  }
  public set projectkey(value: string) {
    this._projectkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectkeyInput() {
    return this._projectkey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateid: cdktf.stringToTerraform(this._gateid),
      gatename: cdktf.stringToTerraform(this._gatename),
      id: cdktf.stringToTerraform(this._id),
      projectkey: cdktf.stringToTerraform(this._projectkey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateid: {
        value: cdktf.stringToHclTerraform(this._gateid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gatename: {
        value: cdktf.stringToHclTerraform(this._gatename),
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
      projectkey: {
        value: cdktf.stringToHclTerraform(this._projectkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
