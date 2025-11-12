// https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/data-sources/signed_pipeline_steps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBuildkiteSignedPipelineStepsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JSON Web Key Set (JWKS) to use for signing.
  * All double-quotes in the JSON object must be escaped `\"`.
  * If `jwks_key_id` is not specified, and the set contains exactly one key, that key will
  * be used.
  * 
  * ~> **Security Notice** The secret key in the `jwks` attribute will be stored
  * *unencrypted* in your Terraform state file. This attribute is designed for
  * users that have systems to to securely manage their state files. If you wish
  * to avoid this, use the `jwks_file` attribute instead.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/data-sources/signed_pipeline_steps#jwks DataBuildkiteSignedPipelineSteps#jwks}
  */
  readonly jwks?: string;
  /**
  * The path to a file containing the JSON Web Key Set (JWKS) to use for
  * signing. Users will have to ensure that the JWKS file is present on systems
  * running Terraform. If `jwks` is specified, this will be ignored and the
  * JWKS will be parsed from that value instead. If `jwks_key_id` is not specified, and the
  * set contains exactly one key, that key will be used.
  * 
  * ~> **Security Notice** The secret key referenced in the `jwks_file` attribute is
  * expected to be stored *unencrypted* as a file on the system running
  * Terraform. You are responsible for securing it on this system while
  * Terraform is running, and cleaning it up after it has finished running.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/data-sources/signed_pipeline_steps#jwks_file DataBuildkiteSignedPipelineSteps#jwks_file}
  */
  readonly jwksFile?: string;
  /**
  * The ID of the key in the JSON Web Key Set (JWKS) to use for signing.
  * If this is not specified, and the key set contains exactly one key, that key
  * will be used.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/data-sources/signed_pipeline_steps#jwks_key_id DataBuildkiteSignedPipelineSteps#jwks_key_id}
  */
  readonly jwksKeyId?: string;
  /**
  * The repository that will be checked out in a build of the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/data-sources/signed_pipeline_steps#repository DataBuildkiteSignedPipelineSteps#repository}
  */
  readonly repository: string;
  /**
  * The steps to sign in YAML format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/data-sources/signed_pipeline_steps#unsigned_steps DataBuildkiteSignedPipelineSteps#unsigned_steps}
  */
  readonly unsignedSteps: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/data-sources/signed_pipeline_steps buildkite_signed_pipeline_steps}
*/
export class DataBuildkiteSignedPipelineSteps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_signed_pipeline_steps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBuildkiteSignedPipelineSteps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBuildkiteSignedPipelineSteps to import
  * @param importFromId The id of the existing DataBuildkiteSignedPipelineSteps that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/data-sources/signed_pipeline_steps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBuildkiteSignedPipelineSteps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_signed_pipeline_steps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/data-sources/signed_pipeline_steps buildkite_signed_pipeline_steps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBuildkiteSignedPipelineStepsConfig
  */
  public constructor(scope: Construct, id: string, config: DataBuildkiteSignedPipelineStepsConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_signed_pipeline_steps',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.26.0',
        providerVersionConstraint: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jwks = config.jwks;
    this._jwksFile = config.jwksFile;
    this._jwksKeyId = config.jwksKeyId;
    this._repository = config.repository;
    this._unsignedSteps = config.unsignedSteps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // jwks_file - computed: false, optional: true, required: false
  private _jwksFile?: string; 
  public get jwksFile() {
    return this.getStringAttribute('jwks_file');
  }
  public set jwksFile(value: string) {
    this._jwksFile = value;
  }
  public resetJwksFile() {
    this._jwksFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksFileInput() {
    return this._jwksFile;
  }

  // jwks_key_id - computed: false, optional: true, required: false
  private _jwksKeyId?: string; 
  public get jwksKeyId() {
    return this.getStringAttribute('jwks_key_id');
  }
  public set jwksKeyId(value: string) {
    this._jwksKeyId = value;
  }
  public resetJwksKeyId() {
    this._jwksKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksKeyIdInput() {
    return this._jwksKeyId;
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

  // steps - computed: true, optional: false, required: false
  public get steps() {
    return this.getStringAttribute('steps');
  }

  // unsigned_steps - computed: false, optional: false, required: true
  private _unsignedSteps?: string; 
  public get unsignedSteps() {
    return this.getStringAttribute('unsigned_steps');
  }
  public set unsignedSteps(value: string) {
    this._unsignedSteps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unsignedStepsInput() {
    return this._unsignedSteps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jwks: cdktf.stringToTerraform(this._jwks),
      jwks_file: cdktf.stringToTerraform(this._jwksFile),
      jwks_key_id: cdktf.stringToTerraform(this._jwksKeyId),
      repository: cdktf.stringToTerraform(this._repository),
      unsigned_steps: cdktf.stringToTerraform(this._unsignedSteps),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jwks: {
        value: cdktf.stringToHclTerraform(this._jwks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_file: {
        value: cdktf.stringToHclTerraform(this._jwksFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_key_id: {
        value: cdktf.stringToHclTerraform(this._jwksKeyId),
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
      unsigned_steps: {
        value: cdktf.stringToHclTerraform(this._unsignedSteps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
