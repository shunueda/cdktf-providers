// https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_codebuild_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsCodebuildTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_codebuild_trigger#id AwsCodebuildTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_codebuild_trigger#project AwsCodebuildTrigger#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_codebuild_trigger#release_id AwsCodebuildTrigger#release_id}
  */
  readonly releaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_codebuild_trigger#version AwsCodebuildTrigger#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_codebuild_trigger mcaf_aws_codebuild_trigger}
*/
export class AwsCodebuildTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mcaf_aws_codebuild_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsCodebuildTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCodebuildTrigger to import
  * @param importFromId The id of the existing AwsCodebuildTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_codebuild_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCodebuildTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mcaf_aws_codebuild_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_codebuild_trigger mcaf_aws_codebuild_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCodebuildTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCodebuildTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'mcaf_aws_codebuild_trigger',
      terraformGeneratorMetadata: {
        providerName: 'mcaf',
        providerVersion: '0.4.3'
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
    this._project = config.project;
    this._releaseId = config.releaseId;
    this._version = config.version;
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

  // release_id - computed: false, optional: false, required: true
  private _releaseId?: string; 
  public get releaseId() {
    return this.getStringAttribute('release_id');
  }
  public set releaseId(value: string) {
    this._releaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseIdInput() {
    return this._releaseId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      release_id: cdktf.stringToTerraform(this._releaseId),
      version: cdktf.stringToTerraform(this._version),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_id: {
        value: cdktf.stringToHclTerraform(this._releaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
