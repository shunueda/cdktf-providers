// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmsSlsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#id CmsSlsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#sls_group_description CmsSlsGroup#sls_group_description}
  */
  readonly slsGroupDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#sls_group_name CmsSlsGroup#sls_group_name}
  */
  readonly slsGroupName: string;
  /**
  * sls_group_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#sls_group_config CmsSlsGroup#sls_group_config}
  */
  readonly slsGroupConfig: CmsSlsGroupSlsGroupConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#timeouts CmsSlsGroup#timeouts}
  */
  readonly timeouts?: CmsSlsGroupTimeouts;
}
export interface CmsSlsGroupSlsGroupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#sls_logstore CmsSlsGroup#sls_logstore}
  */
  readonly slsLogstore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#sls_project CmsSlsGroup#sls_project}
  */
  readonly slsProject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#sls_region CmsSlsGroup#sls_region}
  */
  readonly slsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#sls_user_id CmsSlsGroup#sls_user_id}
  */
  readonly slsUserId?: string;
}

export function cmsSlsGroupSlsGroupConfigToTerraform(struct?: CmsSlsGroupSlsGroupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sls_logstore: cdktf.stringToTerraform(struct!.slsLogstore),
    sls_project: cdktf.stringToTerraform(struct!.slsProject),
    sls_region: cdktf.stringToTerraform(struct!.slsRegion),
    sls_user_id: cdktf.stringToTerraform(struct!.slsUserId),
  }
}


export function cmsSlsGroupSlsGroupConfigToHclTerraform(struct?: CmsSlsGroupSlsGroupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sls_logstore: {
      value: cdktf.stringToHclTerraform(struct!.slsLogstore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_project: {
      value: cdktf.stringToHclTerraform(struct!.slsProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_region: {
      value: cdktf.stringToHclTerraform(struct!.slsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_user_id: {
      value: cdktf.stringToHclTerraform(struct!.slsUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsSlsGroupSlsGroupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsSlsGroupSlsGroupConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slsLogstore !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsLogstore = this._slsLogstore;
    }
    if (this._slsProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsProject = this._slsProject;
    }
    if (this._slsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsRegion = this._slsRegion;
    }
    if (this._slsUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsUserId = this._slsUserId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsSlsGroupSlsGroupConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slsLogstore = undefined;
      this._slsProject = undefined;
      this._slsRegion = undefined;
      this._slsUserId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slsLogstore = value.slsLogstore;
      this._slsProject = value.slsProject;
      this._slsRegion = value.slsRegion;
      this._slsUserId = value.slsUserId;
    }
  }

  // sls_logstore - computed: false, optional: false, required: true
  private _slsLogstore?: string; 
  public get slsLogstore() {
    return this.getStringAttribute('sls_logstore');
  }
  public set slsLogstore(value: string) {
    this._slsLogstore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slsLogstoreInput() {
    return this._slsLogstore;
  }

  // sls_project - computed: false, optional: false, required: true
  private _slsProject?: string; 
  public get slsProject() {
    return this.getStringAttribute('sls_project');
  }
  public set slsProject(value: string) {
    this._slsProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slsProjectInput() {
    return this._slsProject;
  }

  // sls_region - computed: false, optional: false, required: true
  private _slsRegion?: string; 
  public get slsRegion() {
    return this.getStringAttribute('sls_region');
  }
  public set slsRegion(value: string) {
    this._slsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slsRegionInput() {
    return this._slsRegion;
  }

  // sls_user_id - computed: false, optional: true, required: false
  private _slsUserId?: string; 
  public get slsUserId() {
    return this.getStringAttribute('sls_user_id');
  }
  public set slsUserId(value: string) {
    this._slsUserId = value;
  }
  public resetSlsUserId() {
    this._slsUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsUserIdInput() {
    return this._slsUserId;
  }
}

export class CmsSlsGroupSlsGroupConfigList extends cdktf.ComplexList {
  public internalValue? : CmsSlsGroupSlsGroupConfig[] | cdktf.IResolvable

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
  public get(index: number): CmsSlsGroupSlsGroupConfigOutputReference {
    return new CmsSlsGroupSlsGroupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsSlsGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#create CmsSlsGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#delete CmsSlsGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#update CmsSlsGroup#update}
  */
  readonly update?: string;
}

export function cmsSlsGroupTimeoutsToTerraform(struct?: CmsSlsGroupTimeouts | cdktf.IResolvable): any {
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


export function cmsSlsGroupTimeoutsToHclTerraform(struct?: CmsSlsGroupTimeouts | cdktf.IResolvable): any {
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

export class CmsSlsGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmsSlsGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CmsSlsGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group alicloud_cms_sls_group}
*/
export class CmsSlsGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cms_sls_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmsSlsGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmsSlsGroup to import
  * @param importFromId The id of the existing CmsSlsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmsSlsGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cms_sls_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_sls_group alicloud_cms_sls_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmsSlsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CmsSlsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cms_sls_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._slsGroupDescription = config.slsGroupDescription;
    this._slsGroupName = config.slsGroupName;
    this._slsGroupConfig.internalValue = config.slsGroupConfig;
    this._timeouts.internalValue = config.timeouts;
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

  // sls_group_description - computed: false, optional: true, required: false
  private _slsGroupDescription?: string; 
  public get slsGroupDescription() {
    return this.getStringAttribute('sls_group_description');
  }
  public set slsGroupDescription(value: string) {
    this._slsGroupDescription = value;
  }
  public resetSlsGroupDescription() {
    this._slsGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsGroupDescriptionInput() {
    return this._slsGroupDescription;
  }

  // sls_group_name - computed: false, optional: false, required: true
  private _slsGroupName?: string; 
  public get slsGroupName() {
    return this.getStringAttribute('sls_group_name');
  }
  public set slsGroupName(value: string) {
    this._slsGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slsGroupNameInput() {
    return this._slsGroupName;
  }

  // sls_group_config - computed: false, optional: false, required: true
  private _slsGroupConfig = new CmsSlsGroupSlsGroupConfigList(this, "sls_group_config", true);
  public get slsGroupConfig() {
    return this._slsGroupConfig;
  }
  public putSlsGroupConfig(value: CmsSlsGroupSlsGroupConfig[] | cdktf.IResolvable) {
    this._slsGroupConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slsGroupConfigInput() {
    return this._slsGroupConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CmsSlsGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CmsSlsGroupTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      sls_group_description: cdktf.stringToTerraform(this._slsGroupDescription),
      sls_group_name: cdktf.stringToTerraform(this._slsGroupName),
      sls_group_config: cdktf.listMapper(cmsSlsGroupSlsGroupConfigToTerraform, true)(this._slsGroupConfig.internalValue),
      timeouts: cmsSlsGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      sls_group_description: {
        value: cdktf.stringToHclTerraform(this._slsGroupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sls_group_name: {
        value: cdktf.stringToHclTerraform(this._slsGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sls_group_config: {
        value: cdktf.listMapperHcl(cmsSlsGroupSlsGroupConfigToHclTerraform, true)(this._slsGroupConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CmsSlsGroupSlsGroupConfigList",
      },
      timeouts: {
        value: cmsSlsGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmsSlsGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
