// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerResourceShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#allow_external_targets ResourceManagerResourceShare#allow_external_targets}
  */
  readonly allowExternalTargets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#id ResourceManagerResourceShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#permission_names ResourceManagerResourceShare#permission_names}
  */
  readonly permissionNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#resource_group_id ResourceManagerResourceShare#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#resource_share_name ResourceManagerResourceShare#resource_share_name}
  */
  readonly resourceShareName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#tags ResourceManagerResourceShare#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#targets ResourceManagerResourceShare#targets}
  */
  readonly targets?: string[];
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#resources ResourceManagerResourceShare#resources}
  */
  readonly resources?: ResourceManagerResourceShareResources[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#timeouts ResourceManagerResourceShare#timeouts}
  */
  readonly timeouts?: ResourceManagerResourceShareTimeouts;
}
export interface ResourceManagerResourceShareResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#resource_id ResourceManagerResourceShare#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#resource_type ResourceManagerResourceShare#resource_type}
  */
  readonly resourceType?: string;
}

export function resourceManagerResourceShareResourcesToTerraform(struct?: ResourceManagerResourceShareResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function resourceManagerResourceShareResourcesToHclTerraform(struct?: ResourceManagerResourceShareResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerResourceShareResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceManagerResourceShareResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerResourceShareResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class ResourceManagerResourceShareResourcesList extends cdktf.ComplexList {
  public internalValue? : ResourceManagerResourceShareResources[] | cdktf.IResolvable

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
  public get(index: number): ResourceManagerResourceShareResourcesOutputReference {
    return new ResourceManagerResourceShareResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceManagerResourceShareTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#create ResourceManagerResourceShare#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#delete ResourceManagerResourceShare#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#update ResourceManagerResourceShare#update}
  */
  readonly update?: string;
}

export function resourceManagerResourceShareTimeoutsToTerraform(struct?: ResourceManagerResourceShareTimeouts | cdktf.IResolvable): any {
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


export function resourceManagerResourceShareTimeoutsToHclTerraform(struct?: ResourceManagerResourceShareTimeouts | cdktf.IResolvable): any {
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

export class ResourceManagerResourceShareTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceManagerResourceShareTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceManagerResourceShareTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share alicloud_resource_manager_resource_share}
*/
export class ResourceManagerResourceShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_resource_manager_resource_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerResourceShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerResourceShare to import
  * @param importFromId The id of the existing ResourceManagerResourceShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerResourceShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_resource_manager_resource_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/resource_manager_resource_share alicloud_resource_manager_resource_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerResourceShareConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerResourceShareConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_resource_manager_resource_share',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowExternalTargets = config.allowExternalTargets;
    this._id = config.id;
    this._permissionNames = config.permissionNames;
    this._resourceGroupId = config.resourceGroupId;
    this._resourceShareName = config.resourceShareName;
    this._tags = config.tags;
    this._targets = config.targets;
    this._resources.internalValue = config.resources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_external_targets - computed: false, optional: true, required: false
  private _allowExternalTargets?: boolean | cdktf.IResolvable; 
  public get allowExternalTargets() {
    return this.getBooleanAttribute('allow_external_targets');
  }
  public set allowExternalTargets(value: boolean | cdktf.IResolvable) {
    this._allowExternalTargets = value;
  }
  public resetAllowExternalTargets() {
    this._allowExternalTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExternalTargetsInput() {
    return this._allowExternalTargets;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // permission_names - computed: false, optional: true, required: false
  private _permissionNames?: string[]; 
  public get permissionNames() {
    return this.getListAttribute('permission_names');
  }
  public set permissionNames(value: string[]) {
    this._permissionNames = value;
  }
  public resetPermissionNames() {
    this._permissionNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionNamesInput() {
    return this._permissionNames;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_share_name - computed: false, optional: false, required: true
  private _resourceShareName?: string; 
  public get resourceShareName() {
    return this.getStringAttribute('resource_share_name');
  }
  public set resourceShareName(value: string) {
    this._resourceShareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceShareNameInput() {
    return this._resourceShareName;
  }

  // resource_share_owner - computed: true, optional: false, required: false
  public get resourceShareOwner() {
    return this.getStringAttribute('resource_share_owner');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ResourceManagerResourceShareResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ResourceManagerResourceShareResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceManagerResourceShareTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceManagerResourceShareTimeouts) {
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
      allow_external_targets: cdktf.booleanToTerraform(this._allowExternalTargets),
      id: cdktf.stringToTerraform(this._id),
      permission_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissionNames),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      resource_share_name: cdktf.stringToTerraform(this._resourceShareName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
      resources: cdktf.listMapper(resourceManagerResourceShareResourcesToTerraform, true)(this._resources.internalValue),
      timeouts: resourceManagerResourceShareTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_external_targets: {
        value: cdktf.booleanToHclTerraform(this._allowExternalTargets),
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
      permission_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissionNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_share_name: {
        value: cdktf.stringToHclTerraform(this._resourceShareName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resources: {
        value: cdktf.listMapperHcl(resourceManagerResourceShareResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceManagerResourceShareResourcesList",
      },
      timeouts: {
        value: resourceManagerResourceShareTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceManagerResourceShareTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
