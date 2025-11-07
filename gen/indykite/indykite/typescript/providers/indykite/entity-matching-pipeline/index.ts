// https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntityMatchingPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your own description of the resource. Must be less than or equal to 256 UTF-8 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#description EntityMatchingPipeline#description}
  */
  readonly description?: string;
  /**
  * The display name for the instance. Can be updated without creating a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#display_name EntityMatchingPipeline#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#id EntityMatchingPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of Location, where to create resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#location EntityMatchingPipeline#location}
  */
  readonly location: string;
  /**
  * Unique client assigned immutable identifier. Can not be updated without creating a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#name EntityMatchingPipeline#name}
  */
  readonly name: string;
  /**
  * RerunInterval is the time between scheduled re-runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#rerun_interval EntityMatchingPipeline#rerun_interval}
  */
  readonly rerunInterval?: string;
  /**
  * Similarity score cutoff to be used in the entity matching pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#similarity_score_cutoff EntityMatchingPipeline#similarity_score_cutoff}
  */
  readonly similarityScoreCutoff?: number;
  /**
  * List of source node types to be used in the entity matching pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#source_node_filter EntityMatchingPipeline#source_node_filter}
  */
  readonly sourceNodeFilter: string[];
  /**
  * List of target node types to be used in the entity matching pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#target_node_filter EntityMatchingPipeline#target_node_filter}
  */
  readonly targetNodeFilter: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#timeouts EntityMatchingPipeline#timeouts}
  */
  readonly timeouts?: EntityMatchingPipelineTimeouts;
}
export interface EntityMatchingPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#create EntityMatchingPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#default EntityMatchingPipeline#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#delete EntityMatchingPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#read EntityMatchingPipeline#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#update EntityMatchingPipeline#update}
  */
  readonly update?: string;
}

export function entityMatchingPipelineTimeoutsToTerraform(struct?: EntityMatchingPipelineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function entityMatchingPipelineTimeoutsToHclTerraform(struct?: EntityMatchingPipelineTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class EntityMatchingPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EntityMatchingPipelineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityMatchingPipelineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline indykite_entity_matching_pipeline}
*/
export class EntityMatchingPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "indykite_entity_matching_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EntityMatchingPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntityMatchingPipeline to import
  * @param importFromId The id of the existing EntityMatchingPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntityMatchingPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "indykite_entity_matching_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/entity_matching_pipeline indykite_entity_matching_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntityMatchingPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: EntityMatchingPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'indykite_entity_matching_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'indykite',
        providerVersion: '0.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._rerunInterval = config.rerunInterval;
    this._similarityScoreCutoff = config.similarityScoreCutoff;
    this._sourceNodeFilter = config.sourceNodeFilter;
    this._targetNodeFilter = config.targetNodeFilter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_space_id - computed: true, optional: false, required: false
  public get appSpaceId() {
    return this.getStringAttribute('app_space_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rerun_interval - computed: false, optional: true, required: false
  private _rerunInterval?: string; 
  public get rerunInterval() {
    return this.getStringAttribute('rerun_interval');
  }
  public set rerunInterval(value: string) {
    this._rerunInterval = value;
  }
  public resetRerunInterval() {
    this._rerunInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rerunIntervalInput() {
    return this._rerunInterval;
  }

  // similarity_score_cutoff - computed: false, optional: true, required: false
  private _similarityScoreCutoff?: number; 
  public get similarityScoreCutoff() {
    return this.getNumberAttribute('similarity_score_cutoff');
  }
  public set similarityScoreCutoff(value: number) {
    this._similarityScoreCutoff = value;
  }
  public resetSimilarityScoreCutoff() {
    this._similarityScoreCutoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get similarityScoreCutoffInput() {
    return this._similarityScoreCutoff;
  }

  // source_node_filter - computed: false, optional: false, required: true
  private _sourceNodeFilter?: string[]; 
  public get sourceNodeFilter() {
    return this.getListAttribute('source_node_filter');
  }
  public set sourceNodeFilter(value: string[]) {
    this._sourceNodeFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNodeFilterInput() {
    return this._sourceNodeFilter;
  }

  // target_node_filter - computed: false, optional: false, required: true
  private _targetNodeFilter?: string[]; 
  public get targetNodeFilter() {
    return this.getListAttribute('target_node_filter');
  }
  public set targetNodeFilter(value: string[]) {
    this._targetNodeFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNodeFilterInput() {
    return this._targetNodeFilter;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EntityMatchingPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EntityMatchingPipelineTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      rerun_interval: cdktf.stringToTerraform(this._rerunInterval),
      similarity_score_cutoff: cdktf.numberToTerraform(this._similarityScoreCutoff),
      source_node_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceNodeFilter),
      target_node_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetNodeFilter),
      timeouts: entityMatchingPipelineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rerun_interval: {
        value: cdktf.stringToHclTerraform(this._rerunInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      similarity_score_cutoff: {
        value: cdktf.numberToHclTerraform(this._similarityScoreCutoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_node_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceNodeFilter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_node_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetNodeFilter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: entityMatchingPipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EntityMatchingPipelineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
