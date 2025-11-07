// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv3DefenseTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#defense_scene Wafv3DefenseTemplate#defense_scene}
  */
  readonly defenseScene: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#defense_template_name Wafv3DefenseTemplate#defense_template_name}
  */
  readonly defenseTemplateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#description Wafv3DefenseTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#id Wafv3DefenseTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#instance_id Wafv3DefenseTemplate#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#resource_manager_resource_group_id Wafv3DefenseTemplate#resource_manager_resource_group_id}
  */
  readonly resourceManagerResourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#resources Wafv3DefenseTemplate#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#status Wafv3DefenseTemplate#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#template_origin Wafv3DefenseTemplate#template_origin}
  */
  readonly templateOrigin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#template_type Wafv3DefenseTemplate#template_type}
  */
  readonly templateType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#timeouts Wafv3DefenseTemplate#timeouts}
  */
  readonly timeouts?: Wafv3DefenseTemplateTimeouts;
}
export interface Wafv3DefenseTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#create Wafv3DefenseTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#delete Wafv3DefenseTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#update Wafv3DefenseTemplate#update}
  */
  readonly update?: string;
}

export function wafv3DefenseTemplateTimeoutsToTerraform(struct?: Wafv3DefenseTemplateTimeouts | cdktf.IResolvable): any {
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


export function wafv3DefenseTemplateTimeoutsToHclTerraform(struct?: Wafv3DefenseTemplateTimeouts | cdktf.IResolvable): any {
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

export class Wafv3DefenseTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Wafv3DefenseTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv3DefenseTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template alicloud_wafv3_defense_template}
*/
export class Wafv3DefenseTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_wafv3_defense_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafv3DefenseTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv3DefenseTemplate to import
  * @param importFromId The id of the existing Wafv3DefenseTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv3DefenseTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_wafv3_defense_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/wafv3_defense_template alicloud_wafv3_defense_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv3DefenseTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv3DefenseTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_wafv3_defense_template',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defenseScene = config.defenseScene;
    this._defenseTemplateName = config.defenseTemplateName;
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._resourceManagerResourceGroupId = config.resourceManagerResourceGroupId;
    this._resources = config.resources;
    this._status = config.status;
    this._templateOrigin = config.templateOrigin;
    this._templateType = config.templateType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defense_scene - computed: false, optional: false, required: true
  private _defenseScene?: string; 
  public get defenseScene() {
    return this.getStringAttribute('defense_scene');
  }
  public set defenseScene(value: string) {
    this._defenseScene = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defenseSceneInput() {
    return this._defenseScene;
  }

  // defense_template_id - computed: true, optional: false, required: false
  public get defenseTemplateId() {
    return this.getNumberAttribute('defense_template_id');
  }

  // defense_template_name - computed: false, optional: false, required: true
  private _defenseTemplateName?: string; 
  public get defenseTemplateName() {
    return this.getStringAttribute('defense_template_name');
  }
  public set defenseTemplateName(value: string) {
    this._defenseTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defenseTemplateNameInput() {
    return this._defenseTemplateName;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // resource_manager_resource_group_id - computed: false, optional: true, required: false
  private _resourceManagerResourceGroupId?: string; 
  public get resourceManagerResourceGroupId() {
    return this.getStringAttribute('resource_manager_resource_group_id');
  }
  public set resourceManagerResourceGroupId(value: string) {
    this._resourceManagerResourceGroupId = value;
  }
  public resetResourceManagerResourceGroupId() {
    this._resourceManagerResourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerResourceGroupIdInput() {
    return this._resourceManagerResourceGroupId;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // template_origin - computed: false, optional: false, required: true
  private _templateOrigin?: string; 
  public get templateOrigin() {
    return this.getStringAttribute('template_origin');
  }
  public set templateOrigin(value: string) {
    this._templateOrigin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateOriginInput() {
    return this._templateOrigin;
  }

  // template_type - computed: false, optional: false, required: true
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Wafv3DefenseTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Wafv3DefenseTemplateTimeouts) {
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
      defense_scene: cdktf.stringToTerraform(this._defenseScene),
      defense_template_name: cdktf.stringToTerraform(this._defenseTemplateName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      resource_manager_resource_group_id: cdktf.stringToTerraform(this._resourceManagerResourceGroupId),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      status: cdktf.stringToTerraform(this._status),
      template_origin: cdktf.stringToTerraform(this._templateOrigin),
      template_type: cdktf.stringToTerraform(this._templateType),
      timeouts: wafv3DefenseTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defense_scene: {
        value: cdktf.stringToHclTerraform(this._defenseScene),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defense_template_name: {
        value: cdktf.stringToHclTerraform(this._defenseTemplateName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_manager_resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceManagerResourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_origin: {
        value: cdktf.stringToHclTerraform(this._templateOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_type: {
        value: cdktf.stringToHclTerraform(this._templateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: wafv3DefenseTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Wafv3DefenseTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
