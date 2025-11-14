// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbMaintenanceTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task#dbserver_cluster NdbMaintenanceTask#dbserver_cluster}
  */
  readonly dbserverCluster?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task#dbserver_id NdbMaintenanceTask#dbserver_id}
  */
  readonly dbserverId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task#id NdbMaintenanceTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task#maintenance_window_id NdbMaintenanceTask#maintenance_window_id}
  */
  readonly maintenanceWindowId: string;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task#tasks NdbMaintenanceTask#tasks}
  */
  readonly tasks?: NdbMaintenanceTaskTasks[] | cdktf.IResolvable;
}
export interface NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommand {
}

export function ndbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommandToTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommandToHclTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // post_command - computed: true, optional: false, required: false
  public get postCommand() {
    return this.getStringAttribute('post_command');
  }

  // pre_command - computed: true, optional: false, required: false
  public get preCommand() {
    return this.getStringAttribute('pre_command');
  }
}

export class NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommandList extends cdktf.ComplexList {

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
  public get(index: number): NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommandOutputReference {
    return new NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbMaintenanceTaskEntityTaskAssociationPayload {
}

export function ndbMaintenanceTaskEntityTaskAssociationPayloadToTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociationPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbMaintenanceTaskEntityTaskAssociationPayloadToHclTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociationPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbMaintenanceTaskEntityTaskAssociationPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NdbMaintenanceTaskEntityTaskAssociationPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbMaintenanceTaskEntityTaskAssociationPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pre_post_command - computed: true, optional: false, required: false
  private _prePostCommand = new NdbMaintenanceTaskEntityTaskAssociationPayloadPrePostCommandList(this, "pre_post_command", false);
  public get prePostCommand() {
    return this._prePostCommand;
  }
}

export class NdbMaintenanceTaskEntityTaskAssociationPayloadList extends cdktf.ComplexList {

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
  public get(index: number): NdbMaintenanceTaskEntityTaskAssociationPayloadOutputReference {
    return new NdbMaintenanceTaskEntityTaskAssociationPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbMaintenanceTaskEntityTaskAssociationProperties {
}

export function ndbMaintenanceTaskEntityTaskAssociationPropertiesToTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbMaintenanceTaskEntityTaskAssociationPropertiesToHclTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbMaintenanceTaskEntityTaskAssociationPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NdbMaintenanceTaskEntityTaskAssociationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbMaintenanceTaskEntityTaskAssociationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbMaintenanceTaskEntityTaskAssociationPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbMaintenanceTaskEntityTaskAssociationPropertiesOutputReference {
    return new NdbMaintenanceTaskEntityTaskAssociationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbMaintenanceTaskEntityTaskAssociationTags {
}

export function ndbMaintenanceTaskEntityTaskAssociationTagsToTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociationTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbMaintenanceTaskEntityTaskAssociationTagsToHclTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociationTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbMaintenanceTaskEntityTaskAssociationTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NdbMaintenanceTaskEntityTaskAssociationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbMaintenanceTaskEntityTaskAssociationTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbMaintenanceTaskEntityTaskAssociationTagsList extends cdktf.ComplexList {

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
  public get(index: number): NdbMaintenanceTaskEntityTaskAssociationTagsOutputReference {
    return new NdbMaintenanceTaskEntityTaskAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbMaintenanceTaskEntityTaskAssociation {
}

export function ndbMaintenanceTaskEntityTaskAssociationToTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbMaintenanceTaskEntityTaskAssociationToHclTerraform(struct?: NdbMaintenanceTaskEntityTaskAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbMaintenanceTaskEntityTaskAssociationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NdbMaintenanceTaskEntityTaskAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbMaintenanceTaskEntityTaskAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level - computed: true, optional: false, required: false
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entity - computed: true, optional: false, required: false
  public get entity() {
    return this.getStringAttribute('entity');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenance_window_id - computed: true, optional: false, required: false
  public get maintenanceWindowId() {
    return this.getStringAttribute('maintenance_window_id');
  }

  // maintenance_window_owner_id - computed: true, optional: false, required: false
  public get maintenanceWindowOwnerId() {
    return this.getStringAttribute('maintenance_window_owner_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new NdbMaintenanceTaskEntityTaskAssociationPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbMaintenanceTaskEntityTaskAssociationPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new NdbMaintenanceTaskEntityTaskAssociationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
}

export class NdbMaintenanceTaskEntityTaskAssociationList extends cdktf.ComplexList {

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
  public get(index: number): NdbMaintenanceTaskEntityTaskAssociationOutputReference {
    return new NdbMaintenanceTaskEntityTaskAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbMaintenanceTaskTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task#post_command NdbMaintenanceTask#post_command}
  */
  readonly postCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task#pre_command NdbMaintenanceTask#pre_command}
  */
  readonly preCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task#task_type NdbMaintenanceTask#task_type}
  */
  readonly taskType?: string;
}

export function ndbMaintenanceTaskTasksToTerraform(struct?: NdbMaintenanceTaskTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_command: cdktf.stringToTerraform(struct!.postCommand),
    pre_command: cdktf.stringToTerraform(struct!.preCommand),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function ndbMaintenanceTaskTasksToHclTerraform(struct?: NdbMaintenanceTaskTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_command: {
      value: cdktf.stringToHclTerraform(struct!.postCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_command: {
      value: cdktf.stringToHclTerraform(struct!.preCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbMaintenanceTaskTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbMaintenanceTaskTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.postCommand = this._postCommand;
    }
    if (this._preCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.preCommand = this._preCommand;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbMaintenanceTaskTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postCommand = undefined;
      this._preCommand = undefined;
      this._taskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postCommand = value.postCommand;
      this._preCommand = value.preCommand;
      this._taskType = value.taskType;
    }
  }

  // post_command - computed: false, optional: true, required: false
  private _postCommand?: string; 
  public get postCommand() {
    return this.getStringAttribute('post_command');
  }
  public set postCommand(value: string) {
    this._postCommand = value;
  }
  public resetPostCommand() {
    this._postCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCommandInput() {
    return this._postCommand;
  }

  // pre_command - computed: false, optional: true, required: false
  private _preCommand?: string; 
  public get preCommand() {
    return this.getStringAttribute('pre_command');
  }
  public set preCommand(value: string) {
    this._preCommand = value;
  }
  public resetPreCommand() {
    this._preCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCommandInput() {
    return this._preCommand;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }
}

export class NdbMaintenanceTaskTasksList extends cdktf.ComplexList {
  public internalValue? : NdbMaintenanceTaskTasks[] | cdktf.IResolvable

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
  public get(index: number): NdbMaintenanceTaskTasksOutputReference {
    return new NdbMaintenanceTaskTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task nutanix_ndb_maintenance_task}
*/
export class NdbMaintenanceTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_maintenance_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbMaintenanceTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbMaintenanceTask to import
  * @param importFromId The id of the existing NdbMaintenanceTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbMaintenanceTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_maintenance_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_maintenance_task nutanix_ndb_maintenance_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbMaintenanceTaskConfig
  */
  public constructor(scope: Construct, id: string, config: NdbMaintenanceTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_maintenance_task',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbserverCluster = config.dbserverCluster;
    this._dbserverId = config.dbserverId;
    this._id = config.id;
    this._maintenanceWindowId = config.maintenanceWindowId;
    this._tasks.internalValue = config.tasks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dbserver_cluster - computed: false, optional: true, required: false
  private _dbserverCluster?: string[]; 
  public get dbserverCluster() {
    return this.getListAttribute('dbserver_cluster');
  }
  public set dbserverCluster(value: string[]) {
    this._dbserverCluster = value;
  }
  public resetDbserverCluster() {
    this._dbserverCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserverClusterInput() {
    return this._dbserverCluster;
  }

  // dbserver_id - computed: false, optional: true, required: false
  private _dbserverId?: string[]; 
  public get dbserverId() {
    return this.getListAttribute('dbserver_id');
  }
  public set dbserverId(value: string[]) {
    this._dbserverId = value;
  }
  public resetDbserverId() {
    this._dbserverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserverIdInput() {
    return this._dbserverId;
  }

  // entity_task_association - computed: true, optional: false, required: false
  private _entityTaskAssociation = new NdbMaintenanceTaskEntityTaskAssociationList(this, "entity_task_association", false);
  public get entityTaskAssociation() {
    return this._entityTaskAssociation;
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

  // maintenance_window_id - computed: false, optional: false, required: true
  private _maintenanceWindowId?: string; 
  public get maintenanceWindowId() {
    return this.getStringAttribute('maintenance_window_id');
  }
  public set maintenanceWindowId(value: string) {
    this._maintenanceWindowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowIdInput() {
    return this._maintenanceWindowId;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new NdbMaintenanceTaskTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: NdbMaintenanceTaskTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dbserver_cluster: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbserverCluster),
      dbserver_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbserverId),
      id: cdktf.stringToTerraform(this._id),
      maintenance_window_id: cdktf.stringToTerraform(this._maintenanceWindowId),
      tasks: cdktf.listMapper(ndbMaintenanceTaskTasksToTerraform, true)(this._tasks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dbserver_cluster: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbserverCluster),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dbserver_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbserverId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_id: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tasks: {
        value: cdktf.listMapperHcl(ndbMaintenanceTaskTasksToHclTerraform, true)(this._tasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbMaintenanceTaskTasksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
