// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalFeedCreateReleaseTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the channel in which the release will be created if the action type is CreateRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#channel_id ExternalFeedCreateReleaseTrigger#channel_id}
  */
  readonly channelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#id ExternalFeedCreateReleaseTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disables the trigger from being run when set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#is_disabled ExternalFeedCreateReleaseTrigger#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#name ExternalFeedCreateReleaseTrigger#name}
  */
  readonly name: string;
  /**
  * The ID of the project to attach the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#project_id ExternalFeedCreateReleaseTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * The space ID associated with the project to attach the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#space_id ExternalFeedCreateReleaseTrigger#space_id}
  */
  readonly spaceId?: string;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#package ExternalFeedCreateReleaseTrigger#package}
  */
  readonly package?: ExternalFeedCreateReleaseTriggerPackage[] | cdktf.IResolvable;
  /**
  * primary_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#primary_package ExternalFeedCreateReleaseTrigger#primary_package}
  */
  readonly primaryPackage?: ExternalFeedCreateReleaseTriggerPrimaryPackage[] | cdktf.IResolvable;
}
export interface ExternalFeedCreateReleaseTriggerPackage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#deployment_action_slug ExternalFeedCreateReleaseTrigger#deployment_action_slug}
  */
  readonly deploymentActionSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#package_reference ExternalFeedCreateReleaseTrigger#package_reference}
  */
  readonly packageReference: string;
}

export function externalFeedCreateReleaseTriggerPackageToTerraform(struct?: ExternalFeedCreateReleaseTriggerPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_action_slug: cdktf.stringToTerraform(struct!.deploymentActionSlug),
    package_reference: cdktf.stringToTerraform(struct!.packageReference),
  }
}


export function externalFeedCreateReleaseTriggerPackageToHclTerraform(struct?: ExternalFeedCreateReleaseTriggerPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_action_slug: {
      value: cdktf.stringToHclTerraform(struct!.deploymentActionSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_reference: {
      value: cdktf.stringToHclTerraform(struct!.packageReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalFeedCreateReleaseTriggerPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalFeedCreateReleaseTriggerPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentActionSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentActionSlug = this._deploymentActionSlug;
    }
    if (this._packageReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageReference = this._packageReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalFeedCreateReleaseTriggerPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentActionSlug = undefined;
      this._packageReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentActionSlug = value.deploymentActionSlug;
      this._packageReference = value.packageReference;
    }
  }

  // deployment_action_slug - computed: false, optional: false, required: true
  private _deploymentActionSlug?: string; 
  public get deploymentActionSlug() {
    return this.getStringAttribute('deployment_action_slug');
  }
  public set deploymentActionSlug(value: string) {
    this._deploymentActionSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentActionSlugInput() {
    return this._deploymentActionSlug;
  }

  // package_reference - computed: false, optional: false, required: true
  private _packageReference?: string; 
  public get packageReference() {
    return this.getStringAttribute('package_reference');
  }
  public set packageReference(value: string) {
    this._packageReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageReferenceInput() {
    return this._packageReference;
  }
}

export class ExternalFeedCreateReleaseTriggerPackageList extends cdktf.ComplexList {
  public internalValue? : ExternalFeedCreateReleaseTriggerPackage[] | cdktf.IResolvable

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
  public get(index: number): ExternalFeedCreateReleaseTriggerPackageOutputReference {
    return new ExternalFeedCreateReleaseTriggerPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalFeedCreateReleaseTriggerPrimaryPackage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#deployment_action_slug ExternalFeedCreateReleaseTrigger#deployment_action_slug}
  */
  readonly deploymentActionSlug: string;
}

export function externalFeedCreateReleaseTriggerPrimaryPackageToTerraform(struct?: ExternalFeedCreateReleaseTriggerPrimaryPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_action_slug: cdktf.stringToTerraform(struct!.deploymentActionSlug),
  }
}


export function externalFeedCreateReleaseTriggerPrimaryPackageToHclTerraform(struct?: ExternalFeedCreateReleaseTriggerPrimaryPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_action_slug: {
      value: cdktf.stringToHclTerraform(struct!.deploymentActionSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalFeedCreateReleaseTriggerPrimaryPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalFeedCreateReleaseTriggerPrimaryPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentActionSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentActionSlug = this._deploymentActionSlug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalFeedCreateReleaseTriggerPrimaryPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentActionSlug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentActionSlug = value.deploymentActionSlug;
    }
  }

  // deployment_action_slug - computed: false, optional: false, required: true
  private _deploymentActionSlug?: string; 
  public get deploymentActionSlug() {
    return this.getStringAttribute('deployment_action_slug');
  }
  public set deploymentActionSlug(value: string) {
    this._deploymentActionSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentActionSlugInput() {
    return this._deploymentActionSlug;
  }
}

export class ExternalFeedCreateReleaseTriggerPrimaryPackageList extends cdktf.ComplexList {
  public internalValue? : ExternalFeedCreateReleaseTriggerPrimaryPackage[] | cdktf.IResolvable

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
  public get(index: number): ExternalFeedCreateReleaseTriggerPrimaryPackageOutputReference {
    return new ExternalFeedCreateReleaseTriggerPrimaryPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger octopusdeploy_external_feed_create_release_trigger}
*/
export class ExternalFeedCreateReleaseTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_external_feed_create_release_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalFeedCreateReleaseTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalFeedCreateReleaseTrigger to import
  * @param importFromId The id of the existing ExternalFeedCreateReleaseTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalFeedCreateReleaseTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_external_feed_create_release_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/external_feed_create_release_trigger octopusdeploy_external_feed_create_release_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalFeedCreateReleaseTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalFeedCreateReleaseTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_external_feed_create_release_trigger',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelId = config.channelId;
    this._id = config.id;
    this._isDisabled = config.isDisabled;
    this._name = config.name;
    this._projectId = config.projectId;
    this._spaceId = config.spaceId;
    this._package.internalValue = config.package;
    this._primaryPackage.internalValue = config.primaryPackage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
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

  // is_disabled - computed: false, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
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

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // package - computed: false, optional: true, required: false
  private _package = new ExternalFeedCreateReleaseTriggerPackageList(this, "package", false);
  public get package() {
    return this._package;
  }
  public putPackage(value: ExternalFeedCreateReleaseTriggerPackage[] | cdktf.IResolvable) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // primary_package - computed: false, optional: true, required: false
  private _primaryPackage = new ExternalFeedCreateReleaseTriggerPrimaryPackageList(this, "primary_package", false);
  public get primaryPackage() {
    return this._primaryPackage;
  }
  public putPrimaryPackage(value: ExternalFeedCreateReleaseTriggerPrimaryPackage[] | cdktf.IResolvable) {
    this._primaryPackage.internalValue = value;
  }
  public resetPrimaryPackage() {
    this._primaryPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPackageInput() {
    return this._primaryPackage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_id: cdktf.stringToTerraform(this._channelId),
      id: cdktf.stringToTerraform(this._id),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      package: cdktf.listMapper(externalFeedCreateReleaseTriggerPackageToTerraform, true)(this._package.internalValue),
      primary_package: cdktf.listMapper(externalFeedCreateReleaseTriggerPrimaryPackageToTerraform, true)(this._primaryPackage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_id: {
        value: cdktf.stringToHclTerraform(this._channelId),
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
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package: {
        value: cdktf.listMapperHcl(externalFeedCreateReleaseTriggerPackageToHclTerraform, true)(this._package.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalFeedCreateReleaseTriggerPackageList",
      },
      primary_package: {
        value: cdktf.listMapperHcl(externalFeedCreateReleaseTriggerPrimaryPackageToHclTerraform, true)(this._primaryPackage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalFeedCreateReleaseTriggerPrimaryPackageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
