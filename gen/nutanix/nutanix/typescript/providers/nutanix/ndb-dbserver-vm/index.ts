// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbDbserverVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#compute_profile_id NdbDbserverVm#compute_profile_id}
  */
  readonly computeProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#database_type NdbDbserverVm#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#delete NdbDbserverVm#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#delete_vgs NdbDbserverVm#delete_vgs}
  */
  readonly deleteVgs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#delete_vm_snapshots NdbDbserverVm#delete_vm_snapshots}
  */
  readonly deleteVmSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#description NdbDbserverVm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#id NdbDbserverVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#latest_snapshot NdbDbserverVm#latest_snapshot}
  */
  readonly latestSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#network_profile_id NdbDbserverVm#network_profile_id}
  */
  readonly networkProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#nx_cluster_id NdbDbserverVm#nx_cluster_id}
  */
  readonly nxClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#remove NdbDbserverVm#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#snapshot_id NdbDbserverVm#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#soft_remove NdbDbserverVm#soft_remove}
  */
  readonly softRemove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#software_profile_id NdbDbserverVm#software_profile_id}
  */
  readonly softwareProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#software_profile_version_id NdbDbserverVm#software_profile_version_id}
  */
  readonly softwareProfileVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#time_machine_id NdbDbserverVm#time_machine_id}
  */
  readonly timeMachineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#timezone NdbDbserverVm#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#vm_password NdbDbserverVm#vm_password}
  */
  readonly vmPassword?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#credentials NdbDbserverVm#credentials}
  */
  readonly credentials?: NdbDbserverVmCredentials[] | cdktf.IResolvable;
  /**
  * maintenance_tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#maintenance_tasks NdbDbserverVm#maintenance_tasks}
  */
  readonly maintenanceTasks?: NdbDbserverVmMaintenanceTasks;
  /**
  * postgres_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#postgres_database NdbDbserverVm#postgres_database}
  */
  readonly postgresDatabase?: NdbDbserverVmPostgresDatabase[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#tags NdbDbserverVm#tags}
  */
  readonly tags?: NdbDbserverVmTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#timeouts NdbDbserverVm#timeouts}
  */
  readonly timeouts?: NdbDbserverVmTimeouts;
}
export interface NdbDbserverVmProperties {
}

export function ndbDbserverVmPropertiesToTerraform(struct?: NdbDbserverVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDbserverVmPropertiesToHclTerraform(struct?: NdbDbserverVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDbserverVmPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDbserverVmProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDbserverVmProperties | undefined) {
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

export class NdbDbserverVmPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDbserverVmPropertiesOutputReference {
    return new NdbDbserverVmPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDbserverVmCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#label NdbDbserverVm#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#password NdbDbserverVm#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#username NdbDbserverVm#username}
  */
  readonly username: string;
}

export function ndbDbserverVmCredentialsToTerraform(struct?: NdbDbserverVmCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function ndbDbserverVmCredentialsToHclTerraform(struct?: NdbDbserverVmCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDbserverVmCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDbserverVmCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDbserverVmCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class NdbDbserverVmCredentialsList extends cdktf.ComplexList {
  public internalValue? : NdbDbserverVmCredentials[] | cdktf.IResolvable

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
  public get(index: number): NdbDbserverVmCredentialsOutputReference {
    return new NdbDbserverVmCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDbserverVmMaintenanceTasksTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#post_command NdbDbserverVm#post_command}
  */
  readonly postCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#pre_command NdbDbserverVm#pre_command}
  */
  readonly preCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#task_type NdbDbserverVm#task_type}
  */
  readonly taskType?: string;
}

export function ndbDbserverVmMaintenanceTasksTasksToTerraform(struct?: NdbDbserverVmMaintenanceTasksTasks | cdktf.IResolvable): any {
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


export function ndbDbserverVmMaintenanceTasksTasksToHclTerraform(struct?: NdbDbserverVmMaintenanceTasksTasks | cdktf.IResolvable): any {
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

export class NdbDbserverVmMaintenanceTasksTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDbserverVmMaintenanceTasksTasks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NdbDbserverVmMaintenanceTasksTasks | cdktf.IResolvable | undefined) {
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

export class NdbDbserverVmMaintenanceTasksTasksList extends cdktf.ComplexList {
  public internalValue? : NdbDbserverVmMaintenanceTasksTasks[] | cdktf.IResolvable

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
  public get(index: number): NdbDbserverVmMaintenanceTasksTasksOutputReference {
    return new NdbDbserverVmMaintenanceTasksTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDbserverVmMaintenanceTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#maintenance_window_id NdbDbserverVm#maintenance_window_id}
  */
  readonly maintenanceWindowId?: string;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#tasks NdbDbserverVm#tasks}
  */
  readonly tasks?: NdbDbserverVmMaintenanceTasksTasks[] | cdktf.IResolvable;
}

export function ndbDbserverVmMaintenanceTasksToTerraform(struct?: NdbDbserverVmMaintenanceTasksOutputReference | NdbDbserverVmMaintenanceTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window_id: cdktf.stringToTerraform(struct!.maintenanceWindowId),
    tasks: cdktf.listMapper(ndbDbserverVmMaintenanceTasksTasksToTerraform, true)(struct!.tasks),
  }
}


export function ndbDbserverVmMaintenanceTasksToHclTerraform(struct?: NdbDbserverVmMaintenanceTasksOutputReference | NdbDbserverVmMaintenanceTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window_id: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tasks: {
      value: cdktf.listMapperHcl(ndbDbserverVmMaintenanceTasksTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "NdbDbserverVmMaintenanceTasksTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDbserverVmMaintenanceTasksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NdbDbserverVmMaintenanceTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowId = this._maintenanceWindowId;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDbserverVmMaintenanceTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindowId = undefined;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindowId = value.maintenanceWindowId;
      this._tasks.internalValue = value.tasks;
    }
  }

  // maintenance_window_id - computed: false, optional: true, required: false
  private _maintenanceWindowId?: string; 
  public get maintenanceWindowId() {
    return this.getStringAttribute('maintenance_window_id');
  }
  public set maintenanceWindowId(value: string) {
    this._maintenanceWindowId = value;
  }
  public resetMaintenanceWindowId() {
    this._maintenanceWindowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowIdInput() {
    return this._maintenanceWindowId;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new NdbDbserverVmMaintenanceTasksTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: NdbDbserverVmMaintenanceTasksTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface NdbDbserverVmPostgresDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#client_public_key NdbDbserverVm#client_public_key}
  */
  readonly clientPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#vm_name NdbDbserverVm#vm_name}
  */
  readonly vmName: string;
}

export function ndbDbserverVmPostgresDatabaseToTerraform(struct?: NdbDbserverVmPostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_public_key: cdktf.stringToTerraform(struct!.clientPublicKey),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
  }
}


export function ndbDbserverVmPostgresDatabaseToHclTerraform(struct?: NdbDbserverVmPostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_public_key: {
      value: cdktf.stringToHclTerraform(struct!.clientPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDbserverVmPostgresDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDbserverVmPostgresDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPublicKey = this._clientPublicKey;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDbserverVmPostgresDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientPublicKey = undefined;
      this._vmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientPublicKey = value.clientPublicKey;
      this._vmName = value.vmName;
    }
  }

  // client_public_key - computed: false, optional: true, required: false
  private _clientPublicKey?: string; 
  public get clientPublicKey() {
    return this.getStringAttribute('client_public_key');
  }
  public set clientPublicKey(value: string) {
    this._clientPublicKey = value;
  }
  public resetClientPublicKey() {
    this._clientPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPublicKeyInput() {
    return this._clientPublicKey;
  }

  // vm_name - computed: false, optional: false, required: true
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }
}

export class NdbDbserverVmPostgresDatabaseList extends cdktf.ComplexList {
  public internalValue? : NdbDbserverVmPostgresDatabase[] | cdktf.IResolvable

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
  public get(index: number): NdbDbserverVmPostgresDatabaseOutputReference {
    return new NdbDbserverVmPostgresDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDbserverVmTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#tag_id NdbDbserverVm#tag_id}
  */
  readonly tagId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#tag_name NdbDbserverVm#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#value NdbDbserverVm#value}
  */
  readonly value?: string;
}

export function ndbDbserverVmTagsToTerraform(struct?: NdbDbserverVmTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_id: cdktf.stringToTerraform(struct!.tagId),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ndbDbserverVmTagsToHclTerraform(struct?: NdbDbserverVmTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_id: {
      value: cdktf.stringToHclTerraform(struct!.tagId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDbserverVmTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDbserverVmTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagId = this._tagId;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDbserverVmTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagId = undefined;
      this._tagName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagId = value.tagId;
      this._tagName = value.tagName;
      this._value = value.value;
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

  // tag_id - computed: true, optional: true, required: false
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  public resetTagId() {
    this._tagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NdbDbserverVmTagsList extends cdktf.ComplexList {
  public internalValue? : NdbDbserverVmTags[] | cdktf.IResolvable

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
  public get(index: number): NdbDbserverVmTagsOutputReference {
    return new NdbDbserverVmTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDbserverVmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#create NdbDbserverVm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#delete NdbDbserverVm#delete}
  */
  readonly delete?: string;
}

export function ndbDbserverVmTimeoutsToTerraform(struct?: NdbDbserverVmTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ndbDbserverVmTimeoutsToHclTerraform(struct?: NdbDbserverVmTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDbserverVmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NdbDbserverVmTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDbserverVmTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm nutanix_ndb_dbserver_vm}
*/
export class NdbDbserverVm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_dbserver_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbDbserverVm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbDbserverVm to import
  * @param importFromId The id of the existing NdbDbserverVm that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbDbserverVm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_dbserver_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_dbserver_vm nutanix_ndb_dbserver_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbDbserverVmConfig
  */
  public constructor(scope: Construct, id: string, config: NdbDbserverVmConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_dbserver_vm',
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
    this._computeProfileId = config.computeProfileId;
    this._databaseType = config.databaseType;
    this._delete = config.delete;
    this._deleteVgs = config.deleteVgs;
    this._deleteVmSnapshots = config.deleteVmSnapshots;
    this._description = config.description;
    this._id = config.id;
    this._latestSnapshot = config.latestSnapshot;
    this._networkProfileId = config.networkProfileId;
    this._nxClusterId = config.nxClusterId;
    this._remove = config.remove;
    this._snapshotId = config.snapshotId;
    this._softRemove = config.softRemove;
    this._softwareProfileId = config.softwareProfileId;
    this._softwareProfileVersionId = config.softwareProfileVersionId;
    this._timeMachineId = config.timeMachineId;
    this._timezone = config.timezone;
    this._vmPassword = config.vmPassword;
    this._credentials.internalValue = config.credentials;
    this._maintenanceTasks.internalValue = config.maintenanceTasks;
    this._postgresDatabase.internalValue = config.postgresDatabase;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // compute_profile_id - computed: false, optional: false, required: true
  private _computeProfileId?: string; 
  public get computeProfileId() {
    return this.getStringAttribute('compute_profile_id');
  }
  public set computeProfileId(value: string) {
    this._computeProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeProfileIdInput() {
    return this._computeProfileId;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // dbserver_cluster_id - computed: true, optional: false, required: false
  public get dbserverClusterId() {
    return this.getStringAttribute('dbserver_cluster_id');
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // delete_vgs - computed: false, optional: true, required: false
  private _deleteVgs?: boolean | cdktf.IResolvable; 
  public get deleteVgs() {
    return this.getBooleanAttribute('delete_vgs');
  }
  public set deleteVgs(value: boolean | cdktf.IResolvable) {
    this._deleteVgs = value;
  }
  public resetDeleteVgs() {
    this._deleteVgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVgsInput() {
    return this._deleteVgs;
  }

  // delete_vm_snapshots - computed: false, optional: true, required: false
  private _deleteVmSnapshots?: boolean | cdktf.IResolvable; 
  public get deleteVmSnapshots() {
    return this.getBooleanAttribute('delete_vm_snapshots');
  }
  public set deleteVmSnapshots(value: boolean | cdktf.IResolvable) {
    this._deleteVmSnapshots = value;
  }
  public resetDeleteVmSnapshots() {
    this._deleteVmSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVmSnapshotsInput() {
    return this._deleteVmSnapshots;
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

  // era_drive_id - computed: true, optional: false, required: false
  public get eraDriveId() {
    return this.getStringAttribute('era_drive_id');
  }

  // era_version - computed: true, optional: false, required: false
  public get eraVersion() {
    return this.getStringAttribute('era_version');
  }

  // fqdns - computed: true, optional: false, required: false
  public get fqdns() {
    return this.getStringAttribute('fqdns');
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

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // latest_snapshot - computed: false, optional: true, required: false
  private _latestSnapshot?: boolean | cdktf.IResolvable; 
  public get latestSnapshot() {
    return this.getBooleanAttribute('latest_snapshot');
  }
  public set latestSnapshot(value: boolean | cdktf.IResolvable) {
    this._latestSnapshot = value;
  }
  public resetLatestSnapshot() {
    this._latestSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestSnapshotInput() {
    return this._latestSnapshot;
  }

  // mac_addresses - computed: true, optional: false, required: false
  public get macAddresses() {
    return this.getListAttribute('mac_addresses');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_profile_id - computed: false, optional: false, required: true
  private _networkProfileId?: string; 
  public get networkProfileId() {
    return this.getStringAttribute('network_profile_id');
  }
  public set networkProfileId(value: string) {
    this._networkProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileIdInput() {
    return this._networkProfileId;
  }

  // nx_cluster_id - computed: false, optional: false, required: true
  private _nxClusterId?: string; 
  public get nxClusterId() {
    return this.getStringAttribute('nx_cluster_id');
  }
  public set nxClusterId(value: string) {
    this._nxClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nxClusterIdInput() {
    return this._nxClusterId;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbDbserverVmPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove');
  }
  public set remove(value: boolean | cdktf.IResolvable) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // soft_remove - computed: false, optional: true, required: false
  private _softRemove?: boolean | cdktf.IResolvable; 
  public get softRemove() {
    return this.getBooleanAttribute('soft_remove');
  }
  public set softRemove(value: boolean | cdktf.IResolvable) {
    this._softRemove = value;
  }
  public resetSoftRemove() {
    this._softRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softRemoveInput() {
    return this._softRemove;
  }

  // software_profile_id - computed: false, optional: true, required: false
  private _softwareProfileId?: string; 
  public get softwareProfileId() {
    return this.getStringAttribute('software_profile_id');
  }
  public set softwareProfileId(value: string) {
    this._softwareProfileId = value;
  }
  public resetSoftwareProfileId() {
    this._softwareProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareProfileIdInput() {
    return this._softwareProfileId;
  }

  // software_profile_version_id - computed: false, optional: true, required: false
  private _softwareProfileVersionId?: string; 
  public get softwareProfileVersionId() {
    return this.getStringAttribute('software_profile_version_id');
  }
  public set softwareProfileVersionId(value: string) {
    this._softwareProfileVersionId = value;
  }
  public resetSoftwareProfileVersionId() {
    this._softwareProfileVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareProfileVersionIdInput() {
    return this._softwareProfileVersionId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_machine_id - computed: false, optional: true, required: false
  private _timeMachineId?: string; 
  public get timeMachineId() {
    return this.getStringAttribute('time_machine_id');
  }
  public set timeMachineId(value: string) {
    this._timeMachineId = value;
  }
  public resetTimeMachineId() {
    this._timeMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineIdInput() {
    return this._timeMachineId;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vm_cluster_name - computed: true, optional: false, required: false
  public get vmClusterName() {
    return this.getStringAttribute('vm_cluster_name');
  }

  // vm_cluster_uuid - computed: true, optional: false, required: false
  public get vmClusterUuid() {
    return this.getStringAttribute('vm_cluster_uuid');
  }

  // vm_password - computed: false, optional: true, required: false
  private _vmPassword?: string; 
  public get vmPassword() {
    return this.getStringAttribute('vm_password');
  }
  public set vmPassword(value: string) {
    this._vmPassword = value;
  }
  public resetVmPassword() {
    this._vmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmPasswordInput() {
    return this._vmPassword;
  }

  // vm_timezone - computed: true, optional: false, required: false
  public get vmTimezone() {
    return this.getStringAttribute('vm_timezone');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new NdbDbserverVmCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: NdbDbserverVmCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // maintenance_tasks - computed: false, optional: true, required: false
  private _maintenanceTasks = new NdbDbserverVmMaintenanceTasksOutputReference(this, "maintenance_tasks");
  public get maintenanceTasks() {
    return this._maintenanceTasks;
  }
  public putMaintenanceTasks(value: NdbDbserverVmMaintenanceTasks) {
    this._maintenanceTasks.internalValue = value;
  }
  public resetMaintenanceTasks() {
    this._maintenanceTasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTasksInput() {
    return this._maintenanceTasks.internalValue;
  }

  // postgres_database - computed: false, optional: true, required: false
  private _postgresDatabase = new NdbDbserverVmPostgresDatabaseList(this, "postgres_database", false);
  public get postgresDatabase() {
    return this._postgresDatabase;
  }
  public putPostgresDatabase(value: NdbDbserverVmPostgresDatabase[] | cdktf.IResolvable) {
    this._postgresDatabase.internalValue = value;
  }
  public resetPostgresDatabase() {
    this._postgresDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresDatabaseInput() {
    return this._postgresDatabase.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NdbDbserverVmTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NdbDbserverVmTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NdbDbserverVmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NdbDbserverVmTimeouts) {
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
      compute_profile_id: cdktf.stringToTerraform(this._computeProfileId),
      database_type: cdktf.stringToTerraform(this._databaseType),
      delete: cdktf.booleanToTerraform(this._delete),
      delete_vgs: cdktf.booleanToTerraform(this._deleteVgs),
      delete_vm_snapshots: cdktf.booleanToTerraform(this._deleteVmSnapshots),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      latest_snapshot: cdktf.booleanToTerraform(this._latestSnapshot),
      network_profile_id: cdktf.stringToTerraform(this._networkProfileId),
      nx_cluster_id: cdktf.stringToTerraform(this._nxClusterId),
      remove: cdktf.booleanToTerraform(this._remove),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      soft_remove: cdktf.booleanToTerraform(this._softRemove),
      software_profile_id: cdktf.stringToTerraform(this._softwareProfileId),
      software_profile_version_id: cdktf.stringToTerraform(this._softwareProfileVersionId),
      time_machine_id: cdktf.stringToTerraform(this._timeMachineId),
      timezone: cdktf.stringToTerraform(this._timezone),
      vm_password: cdktf.stringToTerraform(this._vmPassword),
      credentials: cdktf.listMapper(ndbDbserverVmCredentialsToTerraform, true)(this._credentials.internalValue),
      maintenance_tasks: ndbDbserverVmMaintenanceTasksToTerraform(this._maintenanceTasks.internalValue),
      postgres_database: cdktf.listMapper(ndbDbserverVmPostgresDatabaseToTerraform, true)(this._postgresDatabase.internalValue),
      tags: cdktf.listMapper(ndbDbserverVmTagsToTerraform, true)(this._tags.internalValue),
      timeouts: ndbDbserverVmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_profile_id: {
        value: cdktf.stringToHclTerraform(this._computeProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete: {
        value: cdktf.booleanToHclTerraform(this._delete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_vgs: {
        value: cdktf.booleanToHclTerraform(this._deleteVgs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_vm_snapshots: {
        value: cdktf.booleanToHclTerraform(this._deleteVmSnapshots),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latest_snapshot: {
        value: cdktf.booleanToHclTerraform(this._latestSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_profile_id: {
        value: cdktf.stringToHclTerraform(this._networkProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nx_cluster_id: {
        value: cdktf.stringToHclTerraform(this._nxClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove: {
        value: cdktf.booleanToHclTerraform(this._remove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_remove: {
        value: cdktf.booleanToHclTerraform(this._softRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      software_profile_id: {
        value: cdktf.stringToHclTerraform(this._softwareProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_profile_version_id: {
        value: cdktf.stringToHclTerraform(this._softwareProfileVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_machine_id: {
        value: cdktf.stringToHclTerraform(this._timeMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_password: {
        value: cdktf.stringToHclTerraform(this._vmPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.listMapperHcl(ndbDbserverVmCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDbserverVmCredentialsList",
      },
      maintenance_tasks: {
        value: ndbDbserverVmMaintenanceTasksToHclTerraform(this._maintenanceTasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDbserverVmMaintenanceTasksList",
      },
      postgres_database: {
        value: cdktf.listMapperHcl(ndbDbserverVmPostgresDatabaseToHclTerraform, true)(this._postgresDatabase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDbserverVmPostgresDatabaseList",
      },
      tags: {
        value: cdktf.listMapperHcl(ndbDbserverVmTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDbserverVmTagsList",
      },
      timeouts: {
        value: ndbDbserverVmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NdbDbserverVmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
