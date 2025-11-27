// https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#action Replication#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#copy_by_chunk Replication#copy_by_chunk}
  */
  readonly copyByChunk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#deletion Replication#deletion}
  */
  readonly deletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#description Replication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#dest_namespace Replication#dest_namespace}
  */
  readonly destNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#dest_namespace_replace Replication#dest_namespace_replace}
  */
  readonly destNamespaceReplace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#enabled Replication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#execute_on_changed Replication#execute_on_changed}
  */
  readonly executeOnChanged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#id Replication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#name Replication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#override Replication#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#registry_id Replication#registry_id}
  */
  readonly registryId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#schedule Replication#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#single_active_replication Replication#single_active_replication}
  */
  readonly singleActiveReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#speed Replication#speed}
  */
  readonly speed?: number;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#filters Replication#filters}
  */
  readonly filters?: ReplicationFilters[] | cdktf.IResolvable;
}
export interface ReplicationFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#decoration Replication#decoration}
  */
  readonly decoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#labels Replication#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#name Replication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#resource Replication#resource}
  */
  readonly resource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#tag Replication#tag}
  */
  readonly tag?: string;
}

export function replicationFiltersToTerraform(struct?: ReplicationFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decoration: cdktf.stringToTerraform(struct!.decoration),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    resource: cdktf.stringToTerraform(struct!.resource),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function replicationFiltersToHclTerraform(struct?: ReplicationFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decoration: {
      value: cdktf.stringToHclTerraform(struct!.decoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReplicationFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ReplicationFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoration = this._decoration;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReplicationFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decoration = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._resource = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decoration = value.decoration;
      this._labels = value.labels;
      this._name = value.name;
      this._resource = value.resource;
      this._tag = value.tag;
    }
  }

  // decoration - computed: false, optional: true, required: false
  private _decoration?: string; 
  public get decoration() {
    return this.getStringAttribute('decoration');
  }
  public set decoration(value: string) {
    this._decoration = value;
  }
  public resetDecoration() {
    this._decoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decorationInput() {
    return this._decoration;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class ReplicationFiltersList extends cdktf.ComplexList {
  public internalValue? : ReplicationFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ReplicationFiltersOutputReference {
    return new ReplicationFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication harbor_replication}
*/
export class Replication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Replication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Replication to import
  * @param importFromId The id of the existing Replication that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Replication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/replication harbor_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_replication',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.3',
        providerVersionConstraint: '3.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._copyByChunk = config.copyByChunk;
    this._deletion = config.deletion;
    this._description = config.description;
    this._destNamespace = config.destNamespace;
    this._destNamespaceReplace = config.destNamespaceReplace;
    this._enabled = config.enabled;
    this._executeOnChanged = config.executeOnChanged;
    this._id = config.id;
    this._name = config.name;
    this._override = config.override;
    this._registryId = config.registryId;
    this._schedule = config.schedule;
    this._singleActiveReplication = config.singleActiveReplication;
    this._speed = config.speed;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // copy_by_chunk - computed: false, optional: true, required: false
  private _copyByChunk?: boolean | cdktf.IResolvable; 
  public get copyByChunk() {
    return this.getBooleanAttribute('copy_by_chunk');
  }
  public set copyByChunk(value: boolean | cdktf.IResolvable) {
    this._copyByChunk = value;
  }
  public resetCopyByChunk() {
    this._copyByChunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyByChunkInput() {
    return this._copyByChunk;
  }

  // deletion - computed: false, optional: true, required: false
  private _deletion?: boolean | cdktf.IResolvable; 
  public get deletion() {
    return this.getBooleanAttribute('deletion');
  }
  public set deletion(value: boolean | cdktf.IResolvable) {
    this._deletion = value;
  }
  public resetDeletion() {
    this._deletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionInput() {
    return this._deletion;
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

  // dest_namespace - computed: false, optional: true, required: false
  private _destNamespace?: string; 
  public get destNamespace() {
    return this.getStringAttribute('dest_namespace');
  }
  public set destNamespace(value: string) {
    this._destNamespace = value;
  }
  public resetDestNamespace() {
    this._destNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNamespaceInput() {
    return this._destNamespace;
  }

  // dest_namespace_replace - computed: false, optional: true, required: false
  private _destNamespaceReplace?: number; 
  public get destNamespaceReplace() {
    return this.getNumberAttribute('dest_namespace_replace');
  }
  public set destNamespaceReplace(value: number) {
    this._destNamespaceReplace = value;
  }
  public resetDestNamespaceReplace() {
    this._destNamespaceReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNamespaceReplaceInput() {
    return this._destNamespaceReplace;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // execute_on_changed - computed: false, optional: true, required: false
  private _executeOnChanged?: boolean | cdktf.IResolvable; 
  public get executeOnChanged() {
    return this.getBooleanAttribute('execute_on_changed');
  }
  public set executeOnChanged(value: boolean | cdktf.IResolvable) {
    this._executeOnChanged = value;
  }
  public resetExecuteOnChanged() {
    this._executeOnChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnChangedInput() {
    return this._executeOnChanged;
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

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: number; 
  public get registryId() {
    return this.getNumberAttribute('registry_id');
  }
  public set registryId(value: number) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // replication_policy_id - computed: true, optional: false, required: false
  public get replicationPolicyId() {
    return this.getNumberAttribute('replication_policy_id');
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // single_active_replication - computed: false, optional: true, required: false
  private _singleActiveReplication?: boolean | cdktf.IResolvable; 
  public get singleActiveReplication() {
    return this.getBooleanAttribute('single_active_replication');
  }
  public set singleActiveReplication(value: boolean | cdktf.IResolvable) {
    this._singleActiveReplication = value;
  }
  public resetSingleActiveReplication() {
    this._singleActiveReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleActiveReplicationInput() {
    return this._singleActiveReplication;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: number; 
  public get speed() {
    return this.getNumberAttribute('speed');
  }
  public set speed(value: number) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new ReplicationFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ReplicationFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      copy_by_chunk: cdktf.booleanToTerraform(this._copyByChunk),
      deletion: cdktf.booleanToTerraform(this._deletion),
      description: cdktf.stringToTerraform(this._description),
      dest_namespace: cdktf.stringToTerraform(this._destNamespace),
      dest_namespace_replace: cdktf.numberToTerraform(this._destNamespaceReplace),
      enabled: cdktf.booleanToTerraform(this._enabled),
      execute_on_changed: cdktf.booleanToTerraform(this._executeOnChanged),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      override: cdktf.booleanToTerraform(this._override),
      registry_id: cdktf.numberToTerraform(this._registryId),
      schedule: cdktf.stringToTerraform(this._schedule),
      single_active_replication: cdktf.booleanToTerraform(this._singleActiveReplication),
      speed: cdktf.numberToTerraform(this._speed),
      filters: cdktf.listMapper(replicationFiltersToTerraform, true)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_by_chunk: {
        value: cdktf.booleanToHclTerraform(this._copyByChunk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion: {
        value: cdktf.booleanToHclTerraform(this._deletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_namespace: {
        value: cdktf.stringToHclTerraform(this._destNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_namespace_replace: {
        value: cdktf.numberToHclTerraform(this._destNamespaceReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execute_on_changed: {
        value: cdktf.booleanToHclTerraform(this._executeOnChanged),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktf.booleanToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registry_id: {
        value: cdktf.numberToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_active_replication: {
        value: cdktf.booleanToHclTerraform(this._singleActiveReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed: {
        value: cdktf.numberToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filters: {
        value: cdktf.listMapperHcl(replicationFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReplicationFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
