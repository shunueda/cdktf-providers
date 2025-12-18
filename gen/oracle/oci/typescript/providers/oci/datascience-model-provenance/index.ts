// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceModelProvenanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#git_branch DatascienceModelProvenance#git_branch}
  */
  readonly gitBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#git_commit DatascienceModelProvenance#git_commit}
  */
  readonly gitCommit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#id DatascienceModelProvenance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#model_id DatascienceModelProvenance#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#repository_url DatascienceModelProvenance#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#script_dir DatascienceModelProvenance#script_dir}
  */
  readonly scriptDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#training_id DatascienceModelProvenance#training_id}
  */
  readonly trainingId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#training_script DatascienceModelProvenance#training_script}
  */
  readonly trainingScript?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#timeouts DatascienceModelProvenance#timeouts}
  */
  readonly timeouts?: DatascienceModelProvenanceTimeouts;
}
export interface DatascienceModelProvenanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#create DatascienceModelProvenance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#delete DatascienceModelProvenance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#update DatascienceModelProvenance#update}
  */
  readonly update?: string;
}

export function datascienceModelProvenanceTimeoutsToTerraform(struct?: DatascienceModelProvenanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function datascienceModelProvenanceTimeoutsToHclTerraform(struct?: DatascienceModelProvenanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelProvenanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceModelProvenanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelProvenanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance oci_datascience_model_provenance}
*/
export class DatascienceModelProvenance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_model_provenance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceModelProvenance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceModelProvenance to import
  * @param importFromId The id of the existing DatascienceModelProvenance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceModelProvenance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_model_provenance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_provenance oci_datascience_model_provenance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceModelProvenanceConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceModelProvenanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model_provenance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gitBranch = config.gitBranch;
    this._gitCommit = config.gitCommit;
    this._id = config.id;
    this._modelId = config.modelId;
    this._repositoryUrl = config.repositoryUrl;
    this._scriptDir = config.scriptDir;
    this._trainingId = config.trainingId;
    this._trainingScript = config.trainingScript;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git_branch - computed: true, optional: true, required: false
  private _gitBranch?: string; 
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string) {
    this._gitBranch = value;
  }
  public resetGitBranch() {
    this._gitBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBranchInput() {
    return this._gitBranch;
  }

  // git_commit - computed: true, optional: true, required: false
  private _gitCommit?: string; 
  public get gitCommit() {
    return this.getStringAttribute('git_commit');
  }
  public set gitCommit(value: string) {
    this._gitCommit = value;
  }
  public resetGitCommit() {
    this._gitCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCommitInput() {
    return this._gitCommit;
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

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // repository_url - computed: true, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // script_dir - computed: true, optional: true, required: false
  private _scriptDir?: string; 
  public get scriptDir() {
    return this.getStringAttribute('script_dir');
  }
  public set scriptDir(value: string) {
    this._scriptDir = value;
  }
  public resetScriptDir() {
    this._scriptDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptDirInput() {
    return this._scriptDir;
  }

  // training_id - computed: true, optional: true, required: false
  private _trainingId?: string; 
  public get trainingId() {
    return this.getStringAttribute('training_id');
  }
  public set trainingId(value: string) {
    this._trainingId = value;
  }
  public resetTrainingId() {
    this._trainingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingIdInput() {
    return this._trainingId;
  }

  // training_script - computed: true, optional: true, required: false
  private _trainingScript?: string; 
  public get trainingScript() {
    return this.getStringAttribute('training_script');
  }
  public set trainingScript(value: string) {
    this._trainingScript = value;
  }
  public resetTrainingScript() {
    this._trainingScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingScriptInput() {
    return this._trainingScript;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceModelProvenanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceModelProvenanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      git_branch: cdktf.stringToTerraform(this._gitBranch),
      git_commit: cdktf.stringToTerraform(this._gitCommit),
      id: cdktf.stringToTerraform(this._id),
      model_id: cdktf.stringToTerraform(this._modelId),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
      script_dir: cdktf.stringToTerraform(this._scriptDir),
      training_id: cdktf.stringToTerraform(this._trainingId),
      training_script: cdktf.stringToTerraform(this._trainingScript),
      timeouts: datascienceModelProvenanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      git_branch: {
        value: cdktf.stringToHclTerraform(this._gitBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_commit: {
        value: cdktf.stringToHclTerraform(this._gitCommit),
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
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_url: {
        value: cdktf.stringToHclTerraform(this._repositoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_dir: {
        value: cdktf.stringToHclTerraform(this._scriptDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      training_id: {
        value: cdktf.stringToHclTerraform(this._trainingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      training_script: {
        value: cdktf.stringToHclTerraform(this._trainingScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: datascienceModelProvenanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceModelProvenanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
