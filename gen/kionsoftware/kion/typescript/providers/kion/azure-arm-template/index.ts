// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureArmTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#deployment_mode AzureArmTemplate#deployment_mode}
  */
  readonly deploymentMode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#description AzureArmTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#id AzureArmTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#last_updated AzureArmTemplate#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#name AzureArmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#resource_group_name AzureArmTemplate#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#resource_group_region_id AzureArmTemplate#resource_group_region_id}
  */
  readonly resourceGroupRegionId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#template AzureArmTemplate#template}
  */
  readonly template: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#template_parameters AzureArmTemplate#template_parameters}
  */
  readonly templateParameters?: string;
  /**
  * owner_user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#owner_user_groups AzureArmTemplate#owner_user_groups}
  */
  readonly ownerUserGroups?: AzureArmTemplateOwnerUserGroups[] | cdktf.IResolvable;
  /**
  * owner_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#owner_users AzureArmTemplate#owner_users}
  */
  readonly ownerUsers?: AzureArmTemplateOwnerUsers[] | cdktf.IResolvable;
}
export interface AzureArmTemplateOwnerUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#id AzureArmTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function azureArmTemplateOwnerUserGroupsToTerraform(struct?: AzureArmTemplateOwnerUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function azureArmTemplateOwnerUserGroupsToHclTerraform(struct?: AzureArmTemplateOwnerUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureArmTemplateOwnerUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureArmTemplateOwnerUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureArmTemplateOwnerUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class AzureArmTemplateOwnerUserGroupsList extends cdktf.ComplexList {
  public internalValue? : AzureArmTemplateOwnerUserGroups[] | cdktf.IResolvable

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
  public get(index: number): AzureArmTemplateOwnerUserGroupsOutputReference {
    return new AzureArmTemplateOwnerUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureArmTemplateOwnerUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#id AzureArmTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function azureArmTemplateOwnerUsersToTerraform(struct?: AzureArmTemplateOwnerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function azureArmTemplateOwnerUsersToHclTerraform(struct?: AzureArmTemplateOwnerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureArmTemplateOwnerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureArmTemplateOwnerUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureArmTemplateOwnerUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class AzureArmTemplateOwnerUsersList extends cdktf.ComplexList {
  public internalValue? : AzureArmTemplateOwnerUsers[] | cdktf.IResolvable

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
  public get(index: number): AzureArmTemplateOwnerUsersOutputReference {
    return new AzureArmTemplateOwnerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template kion_azure_arm_template}
*/
export class AzureArmTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_azure_arm_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureArmTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureArmTemplate to import
  * @param importFromId The id of the existing AzureArmTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureArmTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_azure_arm_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_arm_template kion_azure_arm_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureArmTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: AzureArmTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_azure_arm_template',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentMode = config.deploymentMode;
    this._description = config.description;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._resourceGroupRegionId = config.resourceGroupRegionId;
    this._template = config.template;
    this._templateParameters = config.templateParameters;
    this._ownerUserGroups.internalValue = config.ownerUserGroups;
    this._ownerUsers.internalValue = config.ownerUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ct_managed - computed: true, optional: false, required: false
  public get ctManaged() {
    return this.getBooleanAttribute('ct_managed');
  }

  // deployment_mode - computed: false, optional: false, required: true
  private _deploymentMode?: number; 
  public get deploymentMode() {
    return this.getNumberAttribute('deployment_mode');
  }
  public set deploymentMode(value: number) {
    this._deploymentMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // resource_group_region_id - computed: false, optional: false, required: true
  private _resourceGroupRegionId?: number; 
  public get resourceGroupRegionId() {
    return this.getNumberAttribute('resource_group_region_id');
  }
  public set resourceGroupRegionId(value: number) {
    this._resourceGroupRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupRegionIdInput() {
    return this._resourceGroupRegionId;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // template_parameters - computed: true, optional: true, required: false
  private _templateParameters?: string; 
  public get templateParameters() {
    return this.getStringAttribute('template_parameters');
  }
  public set templateParameters(value: string) {
    this._templateParameters = value;
  }
  public resetTemplateParameters() {
    this._templateParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParametersInput() {
    return this._templateParameters;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // owner_user_groups - computed: false, optional: true, required: false
  private _ownerUserGroups = new AzureArmTemplateOwnerUserGroupsList(this, "owner_user_groups", true);
  public get ownerUserGroups() {
    return this._ownerUserGroups;
  }
  public putOwnerUserGroups(value: AzureArmTemplateOwnerUserGroups[] | cdktf.IResolvable) {
    this._ownerUserGroups.internalValue = value;
  }
  public resetOwnerUserGroups() {
    this._ownerUserGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserGroupsInput() {
    return this._ownerUserGroups.internalValue;
  }

  // owner_users - computed: false, optional: true, required: false
  private _ownerUsers = new AzureArmTemplateOwnerUsersList(this, "owner_users", true);
  public get ownerUsers() {
    return this._ownerUsers;
  }
  public putOwnerUsers(value: AzureArmTemplateOwnerUsers[] | cdktf.IResolvable) {
    this._ownerUsers.internalValue = value;
  }
  public resetOwnerUsers() {
    this._ownerUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUsersInput() {
    return this._ownerUsers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_mode: cdktf.numberToTerraform(this._deploymentMode),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      resource_group_region_id: cdktf.numberToTerraform(this._resourceGroupRegionId),
      template: cdktf.stringToTerraform(this._template),
      template_parameters: cdktf.stringToTerraform(this._templateParameters),
      owner_user_groups: cdktf.listMapper(azureArmTemplateOwnerUserGroupsToTerraform, true)(this._ownerUserGroups.internalValue),
      owner_users: cdktf.listMapper(azureArmTemplateOwnerUsersToTerraform, true)(this._ownerUsers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_mode: {
        value: cdktf.numberToHclTerraform(this._deploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_region_id: {
        value: cdktf.numberToHclTerraform(this._resourceGroupRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_parameters: {
        value: cdktf.stringToHclTerraform(this._templateParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_user_groups: {
        value: cdktf.listMapperHcl(azureArmTemplateOwnerUserGroupsToHclTerraform, true)(this._ownerUserGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureArmTemplateOwnerUserGroupsList",
      },
      owner_users: {
        value: cdktf.listMapperHcl(azureArmTemplateOwnerUsersToHclTerraform, true)(this._ownerUsers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureArmTemplateOwnerUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
