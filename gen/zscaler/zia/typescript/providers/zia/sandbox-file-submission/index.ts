// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_file_submission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SandboxFileSubmissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_file_submission#file_path SandboxFileSubmission#file_path}
  */
  readonly filePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_file_submission#force SandboxFileSubmission#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_file_submission#id SandboxFileSubmission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_file_submission#submission_method SandboxFileSubmission#submission_method}
  */
  readonly submissionMethod: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_file_submission zia_sandbox_file_submission}
*/
export class SandboxFileSubmission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_sandbox_file_submission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SandboxFileSubmission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SandboxFileSubmission to import
  * @param importFromId The id of the existing SandboxFileSubmission that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_file_submission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SandboxFileSubmission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_sandbox_file_submission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_file_submission zia_sandbox_file_submission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SandboxFileSubmissionConfig
  */
  public constructor(scope: Construct, id: string, config: SandboxFileSubmissionConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_sandbox_file_submission',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filePath = config.filePath;
    this._force = config.force;
    this._id = config.id;
    this._submissionMethod = config.submissionMethod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // md5 - computed: true, optional: false, required: false
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // sandbox_submission - computed: true, optional: false, required: false
  public get sandboxSubmission() {
    return this.getStringAttribute('sandbox_submission');
  }

  // submission_method - computed: false, optional: false, required: true
  private _submissionMethod?: string; 
  public get submissionMethod() {
    return this.getStringAttribute('submission_method');
  }
  public set submissionMethod(value: string) {
    this._submissionMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get submissionMethodInput() {
    return this._submissionMethod;
  }

  // virus_name - computed: true, optional: false, required: false
  public get virusName() {
    return this.getStringAttribute('virus_name');
  }

  // virus_type - computed: true, optional: false, required: false
  public get virusType() {
    return this.getStringAttribute('virus_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_path: cdktf.stringToTerraform(this._filePath),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      submission_method: cdktf.stringToTerraform(this._submissionMethod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      submission_method: {
        value: cdktf.stringToHclTerraform(this._submissionMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
