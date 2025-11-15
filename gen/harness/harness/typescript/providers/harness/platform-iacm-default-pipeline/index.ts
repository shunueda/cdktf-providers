// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformIacmDefaultPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline#id PlatformIacmDefaultPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The operation associated with this default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline#operation PlatformIacmDefaultPipeline#operation}
  */
  readonly operation: string;
  /**
  * Organization identifier of the organization the default pipelines resides in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline#org_id PlatformIacmDefaultPipeline#org_id}
  */
  readonly orgId: string;
  /**
  * The pipeline associated with this default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline#pipeline PlatformIacmDefaultPipeline#pipeline}
  */
  readonly pipeline: string;
  /**
  * Project identifier of the project the default pipelines resides in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline#project_id PlatformIacmDefaultPipeline#project_id}
  */
  readonly projectId: string;
  /**
  * The provisioner associated with this default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline#provisioner_type PlatformIacmDefaultPipeline#provisioner_type}
  */
  readonly provisionerType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline harness_platform_iacm_default_pipeline}
*/
export class PlatformIacmDefaultPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_iacm_default_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformIacmDefaultPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformIacmDefaultPipeline to import
  * @param importFromId The id of the existing PlatformIacmDefaultPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformIacmDefaultPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_iacm_default_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_iacm_default_pipeline harness_platform_iacm_default_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformIacmDefaultPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformIacmDefaultPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_iacm_default_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
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
    this._operation = config.operation;
    this._orgId = config.orgId;
    this._pipeline = config.pipeline;
    this._projectId = config.projectId;
    this._provisionerType = config.provisionerType;
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

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // pipeline - computed: false, optional: false, required: true
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // provisioner_type - computed: false, optional: false, required: true
  private _provisionerType?: string; 
  public get provisionerType() {
    return this.getStringAttribute('provisioner_type');
  }
  public set provisionerType(value: string) {
    this._provisionerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerTypeInput() {
    return this._provisionerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      operation: cdktf.stringToTerraform(this._operation),
      org_id: cdktf.stringToTerraform(this._orgId),
      pipeline: cdktf.stringToTerraform(this._pipeline),
      project_id: cdktf.stringToTerraform(this._projectId),
      provisioner_type: cdktf.stringToTerraform(this._provisionerType),
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
      operation: {
        value: cdktf.stringToHclTerraform(this._operation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline: {
        value: cdktf.stringToHclTerraform(this._pipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioner_type: {
        value: cdktf.stringToHclTerraform(this._provisionerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
