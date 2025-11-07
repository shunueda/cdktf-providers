// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_behavioral_analysis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SandboxBehavioralAnalysisConfig extends cdktf.TerraformMetaArguments {
  /**
  * A custom list of unique MD5 file hashes that must be blocked by Sandbox. A maximum of 10000 MD5 file hashes can be blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_behavioral_analysis#file_hashes_to_be_blocked SandboxBehavioralAnalysis#file_hashes_to_be_blocked}
  */
  readonly fileHashesToBeBlocked?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_behavioral_analysis#id SandboxBehavioralAnalysis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_behavioral_analysis zia_sandbox_behavioral_analysis}
*/
export class SandboxBehavioralAnalysis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_sandbox_behavioral_analysis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SandboxBehavioralAnalysis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SandboxBehavioralAnalysis to import
  * @param importFromId The id of the existing SandboxBehavioralAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_behavioral_analysis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SandboxBehavioralAnalysis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_sandbox_behavioral_analysis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/sandbox_behavioral_analysis zia_sandbox_behavioral_analysis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SandboxBehavioralAnalysisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SandboxBehavioralAnalysisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_sandbox_behavioral_analysis',
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
    this._fileHashesToBeBlocked = config.fileHashesToBeBlocked;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_hashes_to_be_blocked - computed: false, optional: true, required: false
  private _fileHashesToBeBlocked?: string[]; 
  public get fileHashesToBeBlocked() {
    return cdktf.Fn.tolist(this.getListAttribute('file_hashes_to_be_blocked'));
  }
  public set fileHashesToBeBlocked(value: string[]) {
    this._fileHashesToBeBlocked = value;
  }
  public resetFileHashesToBeBlocked() {
    this._fileHashesToBeBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileHashesToBeBlockedInput() {
    return this._fileHashesToBeBlocked;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_hashes_to_be_blocked: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileHashesToBeBlocked),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_hashes_to_be_blocked: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileHashesToBeBlocked),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
