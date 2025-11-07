// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasphereProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Community ID where project would be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#community_id DatasphereProject#community_id}
  */
  readonly communityId: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#description DatasphereProject#description}
  */
  readonly description?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#labels DatasphereProject#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Datasphere Project limits configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#limits DatasphereProject#limits}
  */
  readonly limits?: DatasphereProjectLimits;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#name DatasphereProject#name}
  */
  readonly name: string;
  /**
  * Datasphere Project settings configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#settings DatasphereProject#settings}
  */
  readonly settings?: DatasphereProjectSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#timeouts DatasphereProject#timeouts}
  */
  readonly timeouts?: DatasphereProjectTimeouts;
}
export interface DatasphereProjectLimits {
  /**
  * The number of units available to the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#balance DatasphereProject#balance}
  */
  readonly balance?: number;
  /**
  * The number of units that can be spent on the one execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#max_units_per_execution DatasphereProject#max_units_per_execution}
  */
  readonly maxUnitsPerExecution?: number;
  /**
  * The number of units that can be spent per hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#max_units_per_hour DatasphereProject#max_units_per_hour}
  */
  readonly maxUnitsPerHour?: number;
}

export function datasphereProjectLimitsToTerraform(struct?: DatasphereProjectLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balance: cdktf.numberToTerraform(struct!.balance),
    max_units_per_execution: cdktf.numberToTerraform(struct!.maxUnitsPerExecution),
    max_units_per_hour: cdktf.numberToTerraform(struct!.maxUnitsPerHour),
  }
}


export function datasphereProjectLimitsToHclTerraform(struct?: DatasphereProjectLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balance: {
      value: cdktf.numberToHclTerraform(struct!.balance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_units_per_execution: {
      value: cdktf.numberToHclTerraform(struct!.maxUnitsPerExecution),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_units_per_hour: {
      value: cdktf.numberToHclTerraform(struct!.maxUnitsPerHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasphereProjectLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasphereProjectLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balance !== undefined) {
      hasAnyValues = true;
      internalValueResult.balance = this._balance;
    }
    if (this._maxUnitsPerExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnitsPerExecution = this._maxUnitsPerExecution;
    }
    if (this._maxUnitsPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnitsPerHour = this._maxUnitsPerHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasphereProjectLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balance = undefined;
      this._maxUnitsPerExecution = undefined;
      this._maxUnitsPerHour = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balance = value.balance;
      this._maxUnitsPerExecution = value.maxUnitsPerExecution;
      this._maxUnitsPerHour = value.maxUnitsPerHour;
    }
  }

  // balance - computed: true, optional: true, required: false
  private _balance?: number; 
  public get balance() {
    return this.getNumberAttribute('balance');
  }
  public set balance(value: number) {
    this._balance = value;
  }
  public resetBalance() {
    this._balance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceInput() {
    return this._balance;
  }

  // max_units_per_execution - computed: true, optional: true, required: false
  private _maxUnitsPerExecution?: number; 
  public get maxUnitsPerExecution() {
    return this.getNumberAttribute('max_units_per_execution');
  }
  public set maxUnitsPerExecution(value: number) {
    this._maxUnitsPerExecution = value;
  }
  public resetMaxUnitsPerExecution() {
    this._maxUnitsPerExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnitsPerExecutionInput() {
    return this._maxUnitsPerExecution;
  }

  // max_units_per_hour - computed: true, optional: true, required: false
  private _maxUnitsPerHour?: number; 
  public get maxUnitsPerHour() {
    return this.getNumberAttribute('max_units_per_hour');
  }
  public set maxUnitsPerHour(value: number) {
    this._maxUnitsPerHour = value;
  }
  public resetMaxUnitsPerHour() {
    this._maxUnitsPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnitsPerHourInput() {
    return this._maxUnitsPerHour;
  }
}
export interface DatasphereProjectSettings {
  /**
  * ID of the DataProcessing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#data_proc_cluster_id DatasphereProject#data_proc_cluster_id}
  */
  readonly dataProcClusterId?: string;
  /**
  * Default project folder ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#default_folder_id DatasphereProject#default_folder_id}
  */
  readonly defaultFolderId?: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#security_group_ids DatasphereProject#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * [Service account](https://yandex.cloud/docs/iam/concepts/users/service-accounts) which linked to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#service_account_id DatasphereProject#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * The timeout to automatically stop stale executions. The following modes can be used:
  *  * `ONE_HOUR`: Setting to automatically stop stale execution after one hour with low consumption.
  *   * `THREE_HOURS`: Setting to automatically stop stale execution after three hours with low consumption.
  *   * `NO_TIMEOUT`: Setting to never automatically stop stale executions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#stale_exec_timeout_mode DatasphereProject#stale_exec_timeout_mode}
  */
  readonly staleExecTimeoutMode?: string;
  /**
  * ID of the subnet where the DataProcessing cluster resides. Currently only subnets created in the availability zone `ru-central1-a` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#subnet_id DatasphereProject#subnet_id}
  */
  readonly subnetId?: string;
}

export function datasphereProjectSettingsToTerraform(struct?: DatasphereProjectSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_proc_cluster_id: cdktf.stringToTerraform(struct!.dataProcClusterId),
    default_folder_id: cdktf.stringToTerraform(struct!.defaultFolderId),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    stale_exec_timeout_mode: cdktf.stringToTerraform(struct!.staleExecTimeoutMode),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function datasphereProjectSettingsToHclTerraform(struct?: DatasphereProjectSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_proc_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.dataProcClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_folder_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultFolderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stale_exec_timeout_mode: {
      value: cdktf.stringToHclTerraform(struct!.staleExecTimeoutMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasphereProjectSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasphereProjectSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataProcClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProcClusterId = this._dataProcClusterId;
    }
    if (this._defaultFolderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFolderId = this._defaultFolderId;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._staleExecTimeoutMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleExecTimeoutMode = this._staleExecTimeoutMode;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasphereProjectSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataProcClusterId = undefined;
      this._defaultFolderId = undefined;
      this._securityGroupIds = undefined;
      this._serviceAccountId = undefined;
      this._staleExecTimeoutMode = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataProcClusterId = value.dataProcClusterId;
      this._defaultFolderId = value.defaultFolderId;
      this._securityGroupIds = value.securityGroupIds;
      this._serviceAccountId = value.serviceAccountId;
      this._staleExecTimeoutMode = value.staleExecTimeoutMode;
      this._subnetId = value.subnetId;
    }
  }

  // data_proc_cluster_id - computed: true, optional: true, required: false
  private _dataProcClusterId?: string; 
  public get dataProcClusterId() {
    return this.getStringAttribute('data_proc_cluster_id');
  }
  public set dataProcClusterId(value: string) {
    this._dataProcClusterId = value;
  }
  public resetDataProcClusterId() {
    this._dataProcClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProcClusterIdInput() {
    return this._dataProcClusterId;
  }

  // default_folder_id - computed: true, optional: true, required: false
  private _defaultFolderId?: string; 
  public get defaultFolderId() {
    return this.getStringAttribute('default_folder_id');
  }
  public set defaultFolderId(value: string) {
    this._defaultFolderId = value;
  }
  public resetDefaultFolderId() {
    this._defaultFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFolderIdInput() {
    return this._defaultFolderId;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // stale_exec_timeout_mode - computed: true, optional: true, required: false
  private _staleExecTimeoutMode?: string; 
  public get staleExecTimeoutMode() {
    return this.getStringAttribute('stale_exec_timeout_mode');
  }
  public set staleExecTimeoutMode(value: string) {
    this._staleExecTimeoutMode = value;
  }
  public resetStaleExecTimeoutMode() {
    this._staleExecTimeoutMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleExecTimeoutModeInput() {
    return this._staleExecTimeoutMode;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface DatasphereProjectTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#create DatasphereProject#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#delete DatasphereProject#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#update DatasphereProject#update}
  */
  readonly update?: string;
}

export function datasphereProjectTimeoutsToTerraform(struct?: DatasphereProjectTimeouts | cdktf.IResolvable): any {
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


export function datasphereProjectTimeoutsToHclTerraform(struct?: DatasphereProjectTimeouts | cdktf.IResolvable): any {
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

export class DatasphereProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasphereProjectTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatasphereProjectTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project yandex_datasphere_project}
*/
export class DatasphereProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_datasphere_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasphereProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasphereProject to import
  * @param importFromId The id of the existing DatasphereProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasphereProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_datasphere_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datasphere_project yandex_datasphere_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasphereProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DatasphereProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_datasphere_project',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communityId = config.communityId;
    this._description = config.description;
    this._labels = config.labels;
    this._limits.internalValue = config.limits;
    this._name = config.name;
    this._settings.internalValue = config.settings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // community_id - computed: false, optional: false, required: true
  private _communityId?: string; 
  public get communityId() {
    return this.getStringAttribute('community_id');
  }
  public set communityId(value: string) {
    this._communityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityIdInput() {
    return this._communityId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // limits - computed: true, optional: true, required: false
  private _limits = new DatasphereProjectLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DatasphereProjectLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DatasphereProjectSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DatasphereProjectSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatasphereProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatasphereProjectTimeouts) {
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
      community_id: cdktf.stringToTerraform(this._communityId),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      limits: datasphereProjectLimitsToTerraform(this._limits.internalValue),
      name: cdktf.stringToTerraform(this._name),
      settings: datasphereProjectSettingsToTerraform(this._settings.internalValue),
      timeouts: datasphereProjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      community_id: {
        value: cdktf.stringToHclTerraform(this._communityId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      limits: {
        value: datasphereProjectLimitsToHclTerraform(this._limits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasphereProjectLimits",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: datasphereProjectSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasphereProjectSettings",
      },
      timeouts: {
        value: datasphereProjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasphereProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
