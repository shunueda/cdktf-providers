// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiaccesscontrolPrivilegedApiControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#approver_group_id_list ApiaccesscontrolPrivilegedApiControl#approver_group_id_list}
  */
  readonly approverGroupIdList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#compartment_id ApiaccesscontrolPrivilegedApiControl#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#defined_tags ApiaccesscontrolPrivilegedApiControl#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#description ApiaccesscontrolPrivilegedApiControl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#display_name ApiaccesscontrolPrivilegedApiControl#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#freeform_tags ApiaccesscontrolPrivilegedApiControl#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#id ApiaccesscontrolPrivilegedApiControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#notification_topic_id ApiaccesscontrolPrivilegedApiControl#notification_topic_id}
  */
  readonly notificationTopicId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#number_of_approvers ApiaccesscontrolPrivilegedApiControl#number_of_approvers}
  */
  readonly numberOfApprovers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#resource_type ApiaccesscontrolPrivilegedApiControl#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#resources ApiaccesscontrolPrivilegedApiControl#resources}
  */
  readonly resources: string[];
  /**
  * privileged_operation_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#privileged_operation_list ApiaccesscontrolPrivilegedApiControl#privileged_operation_list}
  */
  readonly privilegedOperationList: ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#timeouts ApiaccesscontrolPrivilegedApiControl#timeouts}
  */
  readonly timeouts?: ApiaccesscontrolPrivilegedApiControlTimeouts;
}
export interface ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#api_name ApiaccesscontrolPrivilegedApiControl#api_name}
  */
  readonly apiName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#attribute_names ApiaccesscontrolPrivilegedApiControl#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#entity_type ApiaccesscontrolPrivilegedApiControl#entity_type}
  */
  readonly entityType?: string;
}

export function apiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructToTerraform(struct?: ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_name: cdktf.stringToTerraform(struct!.apiName),
    attribute_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeNames),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
  }
}


export function apiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructToHclTerraform(struct?: ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_name: {
      value: cdktf.stringToHclTerraform(struct!.apiName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiName = this._apiName;
    }
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiName = undefined;
      this._attributeNames = undefined;
      this._entityType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiName = value.apiName;
      this._attributeNames = value.attributeNames;
      this._entityType = value.entityType;
    }
  }

  // api_name - computed: false, optional: false, required: true
  private _apiName?: string; 
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName;
  }

  // attribute_names - computed: true, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }
}

export class ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructList extends cdktf.ComplexList {
  public internalValue? : ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct[] | cdktf.IResolvable

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
  public get(index: number): ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructOutputReference {
    return new ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiaccesscontrolPrivilegedApiControlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#create ApiaccesscontrolPrivilegedApiControl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#delete ApiaccesscontrolPrivilegedApiControl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#update ApiaccesscontrolPrivilegedApiControl#update}
  */
  readonly update?: string;
}

export function apiaccesscontrolPrivilegedApiControlTimeoutsToTerraform(struct?: ApiaccesscontrolPrivilegedApiControlTimeouts | cdktf.IResolvable): any {
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


export function apiaccesscontrolPrivilegedApiControlTimeoutsToHclTerraform(struct?: ApiaccesscontrolPrivilegedApiControlTimeouts | cdktf.IResolvable): any {
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

export class ApiaccesscontrolPrivilegedApiControlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiaccesscontrolPrivilegedApiControlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiaccesscontrolPrivilegedApiControlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control oci_apiaccesscontrol_privileged_api_control}
*/
export class ApiaccesscontrolPrivilegedApiControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apiaccesscontrol_privileged_api_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiaccesscontrolPrivilegedApiControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiaccesscontrolPrivilegedApiControl to import
  * @param importFromId The id of the existing ApiaccesscontrolPrivilegedApiControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiaccesscontrolPrivilegedApiControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apiaccesscontrol_privileged_api_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apiaccesscontrol_privileged_api_control oci_apiaccesscontrol_privileged_api_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiaccesscontrolPrivilegedApiControlConfig
  */
  public constructor(scope: Construct, id: string, config: ApiaccesscontrolPrivilegedApiControlConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apiaccesscontrol_privileged_api_control',
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
    this._approverGroupIdList = config.approverGroupIdList;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._notificationTopicId = config.notificationTopicId;
    this._numberOfApprovers = config.numberOfApprovers;
    this._resourceType = config.resourceType;
    this._resources = config.resources;
    this._privilegedOperationList.internalValue = config.privilegedOperationList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approver_group_id_list - computed: false, optional: false, required: true
  private _approverGroupIdList?: string[]; 
  public get approverGroupIdList() {
    return this.getListAttribute('approver_group_id_list');
  }
  public set approverGroupIdList(value: string[]) {
    this._approverGroupIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approverGroupIdListInput() {
    return this._approverGroupIdList;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // notification_topic_id - computed: false, optional: false, required: true
  private _notificationTopicId?: string; 
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }
  public set notificationTopicId(value: string) {
    this._notificationTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicIdInput() {
    return this._notificationTopicId;
  }

  // number_of_approvers - computed: true, optional: true, required: false
  private _numberOfApprovers?: number; 
  public get numberOfApprovers() {
    return this.getNumberAttribute('number_of_approvers');
  }
  public set numberOfApprovers(value: number) {
    this._numberOfApprovers = value;
  }
  public resetNumberOfApprovers() {
    this._numberOfApprovers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfApproversInput() {
    return this._numberOfApprovers;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_deleted - computed: true, optional: false, required: false
  public get timeDeleted() {
    return this.getStringAttribute('time_deleted');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // privileged_operation_list - computed: false, optional: false, required: true
  private _privilegedOperationList = new ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructList(this, "privileged_operation_list", false);
  public get privilegedOperationList() {
    return this._privilegedOperationList;
  }
  public putPrivilegedOperationList(value: ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct[] | cdktf.IResolvable) {
    this._privilegedOperationList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedOperationListInput() {
    return this._privilegedOperationList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiaccesscontrolPrivilegedApiControlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiaccesscontrolPrivilegedApiControlTimeouts) {
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
      approver_group_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approverGroupIdList),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      notification_topic_id: cdktf.stringToTerraform(this._notificationTopicId),
      number_of_approvers: cdktf.numberToTerraform(this._numberOfApprovers),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      privileged_operation_list: cdktf.listMapper(apiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructToTerraform, true)(this._privilegedOperationList.internalValue),
      timeouts: apiaccesscontrolPrivilegedApiControlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approver_group_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approverGroupIdList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_topic_id: {
        value: cdktf.stringToHclTerraform(this._notificationTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_approvers: {
        value: cdktf.numberToHclTerraform(this._numberOfApprovers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      privileged_operation_list: {
        value: cdktf.listMapperHcl(apiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructToHclTerraform, true)(this._privilegedOperationList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructList",
      },
      timeouts: {
        value: apiaccesscontrolPrivilegedApiControlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiaccesscontrolPrivilegedApiControlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
