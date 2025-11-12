// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagePlacementPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#action ImagePlacementPolicyV2#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#description ImagePlacementPolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#enforcement_state ImagePlacementPolicyV2#enforcement_state}
  */
  readonly enforcementState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#ext_id ImagePlacementPolicyV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#id ImagePlacementPolicyV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#name ImagePlacementPolicyV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#placement_type ImagePlacementPolicyV2#placement_type}
  */
  readonly placementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#should_cancel_running_tasks ImagePlacementPolicyV2#should_cancel_running_tasks}
  */
  readonly shouldCancelRunningTasks?: boolean | cdktf.IResolvable;
  /**
  * cluster_entity_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#cluster_entity_filter ImagePlacementPolicyV2#cluster_entity_filter}
  */
  readonly clusterEntityFilter: ImagePlacementPolicyV2ClusterEntityFilter[] | cdktf.IResolvable;
  /**
  * image_entity_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#image_entity_filter ImagePlacementPolicyV2#image_entity_filter}
  */
  readonly imageEntityFilter: ImagePlacementPolicyV2ImageEntityFilter[] | cdktf.IResolvable;
}
export interface ImagePlacementPolicyV2ClusterEntityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#category_ext_ids ImagePlacementPolicyV2#category_ext_ids}
  */
  readonly categoryExtIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#type ImagePlacementPolicyV2#type}
  */
  readonly type: string;
}

export function imagePlacementPolicyV2ClusterEntityFilterToTerraform(struct?: ImagePlacementPolicyV2ClusterEntityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryExtIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function imagePlacementPolicyV2ClusterEntityFilterToHclTerraform(struct?: ImagePlacementPolicyV2ClusterEntityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_ext_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categoryExtIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagePlacementPolicyV2ClusterEntityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagePlacementPolicyV2ClusterEntityFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryExtIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryExtIds = this._categoryExtIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagePlacementPolicyV2ClusterEntityFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryExtIds = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryExtIds = value.categoryExtIds;
      this._type = value.type;
    }
  }

  // category_ext_ids - computed: true, optional: true, required: false
  private _categoryExtIds?: string[]; 
  public get categoryExtIds() {
    return this.getListAttribute('category_ext_ids');
  }
  public set categoryExtIds(value: string[]) {
    this._categoryExtIds = value;
  }
  public resetCategoryExtIds() {
    this._categoryExtIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryExtIdsInput() {
    return this._categoryExtIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ImagePlacementPolicyV2ClusterEntityFilterList extends cdktf.ComplexList {
  public internalValue? : ImagePlacementPolicyV2ClusterEntityFilter[] | cdktf.IResolvable

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
  public get(index: number): ImagePlacementPolicyV2ClusterEntityFilterOutputReference {
    return new ImagePlacementPolicyV2ClusterEntityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagePlacementPolicyV2ImageEntityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#category_ext_ids ImagePlacementPolicyV2#category_ext_ids}
  */
  readonly categoryExtIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#type ImagePlacementPolicyV2#type}
  */
  readonly type: string;
}

export function imagePlacementPolicyV2ImageEntityFilterToTerraform(struct?: ImagePlacementPolicyV2ImageEntityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryExtIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function imagePlacementPolicyV2ImageEntityFilterToHclTerraform(struct?: ImagePlacementPolicyV2ImageEntityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_ext_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categoryExtIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagePlacementPolicyV2ImageEntityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagePlacementPolicyV2ImageEntityFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryExtIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryExtIds = this._categoryExtIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagePlacementPolicyV2ImageEntityFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryExtIds = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryExtIds = value.categoryExtIds;
      this._type = value.type;
    }
  }

  // category_ext_ids - computed: true, optional: true, required: false
  private _categoryExtIds?: string[]; 
  public get categoryExtIds() {
    return this.getListAttribute('category_ext_ids');
  }
  public set categoryExtIds(value: string[]) {
    this._categoryExtIds = value;
  }
  public resetCategoryExtIds() {
    this._categoryExtIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryExtIdsInput() {
    return this._categoryExtIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ImagePlacementPolicyV2ImageEntityFilterList extends cdktf.ComplexList {
  public internalValue? : ImagePlacementPolicyV2ImageEntityFilter[] | cdktf.IResolvable

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
  public get(index: number): ImagePlacementPolicyV2ImageEntityFilterOutputReference {
    return new ImagePlacementPolicyV2ImageEntityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2 nutanix_image_placement_policy_v2}
*/
export class ImagePlacementPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_image_placement_policy_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImagePlacementPolicyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImagePlacementPolicyV2 to import
  * @param importFromId The id of the existing ImagePlacementPolicyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImagePlacementPolicyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_image_placement_policy_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/image_placement_policy_v2 nutanix_image_placement_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagePlacementPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: ImagePlacementPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_image_placement_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
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
    this._description = config.description;
    this._enforcementState = config.enforcementState;
    this._extId = config.extId;
    this._id = config.id;
    this._name = config.name;
    this._placementType = config.placementType;
    this._shouldCancelRunningTasks = config.shouldCancelRunningTasks;
    this._clusterEntityFilter.internalValue = config.clusterEntityFilter;
    this._imageEntityFilter.internalValue = config.imageEntityFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: true, required: false
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

  // enforcement_state - computed: true, optional: true, required: false
  private _enforcementState?: string; 
  public get enforcementState() {
    return this.getStringAttribute('enforcement_state');
  }
  public set enforcementState(value: string) {
    this._enforcementState = value;
  }
  public resetEnforcementState() {
    this._enforcementState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementStateInput() {
    return this._enforcementState;
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
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

  // owner_ext_id - computed: true, optional: false, required: false
  public get ownerExtId() {
    return this.getStringAttribute('owner_ext_id');
  }

  // placement_type - computed: false, optional: false, required: true
  private _placementType?: string; 
  public get placementType() {
    return this.getStringAttribute('placement_type');
  }
  public set placementType(value: string) {
    this._placementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTypeInput() {
    return this._placementType;
  }

  // should_cancel_running_tasks - computed: false, optional: true, required: false
  private _shouldCancelRunningTasks?: boolean | cdktf.IResolvable; 
  public get shouldCancelRunningTasks() {
    return this.getBooleanAttribute('should_cancel_running_tasks');
  }
  public set shouldCancelRunningTasks(value: boolean | cdktf.IResolvable) {
    this._shouldCancelRunningTasks = value;
  }
  public resetShouldCancelRunningTasks() {
    this._shouldCancelRunningTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldCancelRunningTasksInput() {
    return this._shouldCancelRunningTasks;
  }

  // cluster_entity_filter - computed: false, optional: false, required: true
  private _clusterEntityFilter = new ImagePlacementPolicyV2ClusterEntityFilterList(this, "cluster_entity_filter", false);
  public get clusterEntityFilter() {
    return this._clusterEntityFilter;
  }
  public putClusterEntityFilter(value: ImagePlacementPolicyV2ClusterEntityFilter[] | cdktf.IResolvable) {
    this._clusterEntityFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEntityFilterInput() {
    return this._clusterEntityFilter.internalValue;
  }

  // image_entity_filter - computed: false, optional: false, required: true
  private _imageEntityFilter = new ImagePlacementPolicyV2ImageEntityFilterList(this, "image_entity_filter", false);
  public get imageEntityFilter() {
    return this._imageEntityFilter;
  }
  public putImageEntityFilter(value: ImagePlacementPolicyV2ImageEntityFilter[] | cdktf.IResolvable) {
    this._imageEntityFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageEntityFilterInput() {
    return this._imageEntityFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      enforcement_state: cdktf.stringToTerraform(this._enforcementState),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      placement_type: cdktf.stringToTerraform(this._placementType),
      should_cancel_running_tasks: cdktf.booleanToTerraform(this._shouldCancelRunningTasks),
      cluster_entity_filter: cdktf.listMapper(imagePlacementPolicyV2ClusterEntityFilterToTerraform, true)(this._clusterEntityFilter.internalValue),
      image_entity_filter: cdktf.listMapper(imagePlacementPolicyV2ImageEntityFilterToTerraform, true)(this._imageEntityFilter.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_state: {
        value: cdktf.stringToHclTerraform(this._enforcementState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_type: {
        value: cdktf.stringToHclTerraform(this._placementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_cancel_running_tasks: {
        value: cdktf.booleanToHclTerraform(this._shouldCancelRunningTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_entity_filter: {
        value: cdktf.listMapperHcl(imagePlacementPolicyV2ClusterEntityFilterToHclTerraform, true)(this._clusterEntityFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImagePlacementPolicyV2ClusterEntityFilterList",
      },
      image_entity_filter: {
        value: cdktf.listMapperHcl(imagePlacementPolicyV2ImageEntityFilterToHclTerraform, true)(this._imageEntityFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImagePlacementPolicyV2ImageEntityFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
