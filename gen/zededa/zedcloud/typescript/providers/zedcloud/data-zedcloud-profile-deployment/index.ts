// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZedcloudProfileDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Detailed description of the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#description DataZedcloudProfileDeployment#description}
  */
  readonly description?: string;
  /**
  * User defined name of the deployment, unique across the enterprise. Once deployment is created, name can’t be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#name DataZedcloudProfileDeployment#name}
  */
  readonly name: string;
  /**
  * project id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#project_id DataZedcloudProfileDeployment#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#status DataZedcloudProfileDeployment#status}
  */
  readonly status?: string;
  /**
  * User defined title of the deployment. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#title DataZedcloudProfileDeployment#title}
  */
  readonly title?: string;
  /**
  * app_profile_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#app_profile_info DataZedcloudProfileDeployment#app_profile_info}
  */
  readonly appProfileInfo: DataZedcloudProfileDeploymentAppProfileInfo[] | cdktf.IResolvable;
  /**
  * target_asset_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#target_asset_group DataZedcloudProfileDeployment#target_asset_group}
  */
  readonly targetAssetGroup: DataZedcloudProfileDeploymentTargetAssetGroup[] | cdktf.IResolvable;
}
export interface DataZedcloudProfileDeploymentAppProfileInfo {
  /**
  * Unique ID of the app profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#app_profile_id DataZedcloudProfileDeployment#app_profile_id}
  */
  readonly appProfileId: string;
  /**
  * Version of the app profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#version DataZedcloudProfileDeployment#version}
  */
  readonly version: number;
}

export function dataZedcloudProfileDeploymentAppProfileInfoToTerraform(struct?: DataZedcloudProfileDeploymentAppProfileInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_profile_id: cdktf.stringToTerraform(struct!.appProfileId),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function dataZedcloudProfileDeploymentAppProfileInfoToHclTerraform(struct?: DataZedcloudProfileDeploymentAppProfileInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.appProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProfileDeploymentAppProfileInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProfileDeploymentAppProfileInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProfileId = this._appProfileId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProfileDeploymentAppProfileInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProfileId = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProfileId = value.appProfileId;
      this._version = value.version;
    }
  }

  // app_profile_id - computed: false, optional: false, required: true
  private _appProfileId?: string; 
  public get appProfileId() {
    return this.getStringAttribute('app_profile_id');
  }
  public set appProfileId(value: string) {
    this._appProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileIdInput() {
    return this._appProfileId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataZedcloudProfileDeploymentAppProfileInfoList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProfileDeploymentAppProfileInfo[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudProfileDeploymentAppProfileInfoOutputReference {
    return new DataZedcloudProfileDeploymentAppProfileInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProfileDeploymentTargetAssetGroup {
  /**
  * unique Id of the asset group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#group_id DataZedcloudProfileDeployment#group_id}
  */
  readonly groupId: string;
}

export function dataZedcloudProfileDeploymentTargetAssetGroupToTerraform(struct?: DataZedcloudProfileDeploymentTargetAssetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function dataZedcloudProfileDeploymentTargetAssetGroupToHclTerraform(struct?: DataZedcloudProfileDeploymentTargetAssetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProfileDeploymentTargetAssetGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProfileDeploymentTargetAssetGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProfileDeploymentTargetAssetGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}

export class DataZedcloudProfileDeploymentTargetAssetGroupList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProfileDeploymentTargetAssetGroup[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudProfileDeploymentTargetAssetGroupOutputReference {
    return new DataZedcloudProfileDeploymentTargetAssetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment zedcloud_profile_deployment}
*/
export class DataZedcloudProfileDeployment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_profile_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudProfileDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudProfileDeployment to import
  * @param importFromId The id of the existing DataZedcloudProfileDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudProfileDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_profile_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/profile_deployment zedcloud_profile_deployment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudProfileDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudProfileDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_profile_deployment',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
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
    this._name = config.name;
    this._projectId = config.projectId;
    this._status = config.status;
    this._title = config.title;
    this._appProfileInfo.internalValue = config.appProfileInfo;
    this._targetAssetGroup.internalValue = config.targetAssetGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // app_profile_info - computed: false, optional: false, required: true
  private _appProfileInfo = new DataZedcloudProfileDeploymentAppProfileInfoList(this, "app_profile_info", false);
  public get appProfileInfo() {
    return this._appProfileInfo;
  }
  public putAppProfileInfo(value: DataZedcloudProfileDeploymentAppProfileInfo[] | cdktf.IResolvable) {
    this._appProfileInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileInfoInput() {
    return this._appProfileInfo.internalValue;
  }

  // target_asset_group - computed: false, optional: false, required: true
  private _targetAssetGroup = new DataZedcloudProfileDeploymentTargetAssetGroupList(this, "target_asset_group", false);
  public get targetAssetGroup() {
    return this._targetAssetGroup;
  }
  public putTargetAssetGroup(value: DataZedcloudProfileDeploymentTargetAssetGroup[] | cdktf.IResolvable) {
    this._targetAssetGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAssetGroupInput() {
    return this._targetAssetGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      status: cdktf.stringToTerraform(this._status),
      title: cdktf.stringToTerraform(this._title),
      app_profile_info: cdktf.listMapper(dataZedcloudProfileDeploymentAppProfileInfoToTerraform, true)(this._appProfileInfo.internalValue),
      target_asset_group: cdktf.listMapper(dataZedcloudProfileDeploymentTargetAssetGroupToTerraform, true)(this._targetAssetGroup.internalValue),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_profile_info: {
        value: cdktf.listMapperHcl(dataZedcloudProfileDeploymentAppProfileInfoToHclTerraform, true)(this._appProfileInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudProfileDeploymentAppProfileInfoList",
      },
      target_asset_group: {
        value: cdktf.listMapperHcl(dataZedcloudProfileDeploymentTargetAssetGroupToHclTerraform, true)(this._targetAssetGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudProfileDeploymentTargetAssetGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
