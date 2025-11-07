// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAwsRoute53TaskGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS account IDs file's path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#aws_account_ids_file_path CloudAwsRoute53TaskGroup#aws_account_ids_file_path}
  */
  readonly awsAccountIdsFilePath?: string;
  /**
  * Comment for the task group; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#comment CloudAwsRoute53TaskGroup#comment}
  */
  readonly comment?: string;
  /**
  * Indicates if all zones need to be saved into a single view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#consolidate_zones CloudAwsRoute53TaskGroup#consolidate_zones}
  */
  readonly consolidateZones?: boolean | cdktf.IResolvable;
  /**
  * The name of the DNS view for consolidating zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#consolidated_view CloudAwsRoute53TaskGroup#consolidated_view}
  */
  readonly consolidatedView?: string;
  /**
  * Indicates if the task group is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#disabled CloudAwsRoute53TaskGroup#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Member on which the tasks in this task group will be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#grid_member CloudAwsRoute53TaskGroup#grid_member}
  */
  readonly gridMember: string;
  /**
  * Discover all child accounts or Upload child account ids to discover..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#multiple_accounts_sync_policy CloudAwsRoute53TaskGroup#multiple_accounts_sync_policy}
  */
  readonly multipleAccountsSyncPolicy?: string;
  /**
  * The name of this AWS Route53 sync task group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#name CloudAwsRoute53TaskGroup#name}
  */
  readonly name: string;
  /**
  * The name of the tenant's network view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#network_view CloudAwsRoute53TaskGroup#network_view}
  */
  readonly networkView?: string;
  /**
  * The network view mapping policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#network_view_mapping_policy CloudAwsRoute53TaskGroup#network_view_mapping_policy}
  */
  readonly networkViewMappingPolicy?: string;
  /**
  * Role ARN for syncing child accounts; maximum 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#role_arn CloudAwsRoute53TaskGroup#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Synchronizing child accounts is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#sync_child_accounts CloudAwsRoute53TaskGroup#sync_child_accounts}
  */
  readonly syncChildAccounts?: boolean | cdktf.IResolvable;
  /**
  * List of AWS Route53 tasks in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#task_list CloudAwsRoute53TaskGroup#task_list}
  */
  readonly taskList?: CloudAwsRoute53TaskGroupTaskListStruct[] | cdktf.IResolvable;
}
export interface CloudAwsRoute53TaskGroupTaskListStruct {
  /**
  * Reference to associated AWS user whose credentials are to be used for this task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#aws_user CloudAwsRoute53TaskGroup#aws_user}
  */
  readonly awsUser?: string;
  /**
  * Credentials type used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#credentials_type CloudAwsRoute53TaskGroup#credentials_type}
  */
  readonly credentialsType?: string;
  /**
  * Indicates if the task is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#disabled CloudAwsRoute53TaskGroup#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Filter for this task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#filter CloudAwsRoute53TaskGroup#filter}
  */
  readonly filter?: string;
  /**
  * The name of this task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#name CloudAwsRoute53TaskGroup#name}
  */
  readonly name: string;
  /**
  * Periodic interval for this task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#schedule_interval CloudAwsRoute53TaskGroup#schedule_interval}
  */
  readonly scheduleInterval?: number;
  /**
  * Units for the schedule interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#schedule_units CloudAwsRoute53TaskGroup#schedule_units}
  */
  readonly scheduleUnits?: string;
  /**
  * Indicates whether private zones are synchronized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#sync_private_zones CloudAwsRoute53TaskGroup#sync_private_zones}
  */
  readonly syncPrivateZones?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether public zones are synchronized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#sync_public_zones CloudAwsRoute53TaskGroup#sync_public_zones}
  */
  readonly syncPublicZones?: boolean | cdktf.IResolvable;
}

export function cloudAwsRoute53TaskGroupTaskListStructToTerraform(struct?: CloudAwsRoute53TaskGroupTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_user: cdktf.stringToTerraform(struct!.awsUser),
    credentials_type: cdktf.stringToTerraform(struct!.credentialsType),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    schedule_interval: cdktf.numberToTerraform(struct!.scheduleInterval),
    schedule_units: cdktf.stringToTerraform(struct!.scheduleUnits),
    sync_private_zones: cdktf.booleanToTerraform(struct!.syncPrivateZones),
    sync_public_zones: cdktf.booleanToTerraform(struct!.syncPublicZones),
  }
}


export function cloudAwsRoute53TaskGroupTaskListStructToHclTerraform(struct?: CloudAwsRoute53TaskGroupTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_user: {
      value: cdktf.stringToHclTerraform(struct!.awsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_interval: {
      value: cdktf.numberToHclTerraform(struct!.scheduleInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_units: {
      value: cdktf.stringToHclTerraform(struct!.scheduleUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_private_zones: {
      value: cdktf.booleanToHclTerraform(struct!.syncPrivateZones),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_public_zones: {
      value: cdktf.booleanToHclTerraform(struct!.syncPublicZones),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsRoute53TaskGroupTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAwsRoute53TaskGroupTaskListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsUser = this._awsUser;
    }
    if (this._credentialsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsType = this._credentialsType;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scheduleInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleInterval = this._scheduleInterval;
    }
    if (this._scheduleUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleUnits = this._scheduleUnits;
    }
    if (this._syncPrivateZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPrivateZones = this._syncPrivateZones;
    }
    if (this._syncPublicZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPublicZones = this._syncPublicZones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsRoute53TaskGroupTaskListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsUser = undefined;
      this._credentialsType = undefined;
      this._disabled = undefined;
      this._filter = undefined;
      this._name = undefined;
      this._scheduleInterval = undefined;
      this._scheduleUnits = undefined;
      this._syncPrivateZones = undefined;
      this._syncPublicZones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsUser = value.awsUser;
      this._credentialsType = value.credentialsType;
      this._disabled = value.disabled;
      this._filter = value.filter;
      this._name = value.name;
      this._scheduleInterval = value.scheduleInterval;
      this._scheduleUnits = value.scheduleUnits;
      this._syncPrivateZones = value.syncPrivateZones;
      this._syncPublicZones = value.syncPublicZones;
    }
  }

  // aws_user - computed: true, optional: true, required: false
  private _awsUser?: string; 
  public get awsUser() {
    return this.getStringAttribute('aws_user');
  }
  public set awsUser(value: string) {
    this._awsUser = value;
  }
  public resetAwsUser() {
    this._awsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsUserInput() {
    return this._awsUser;
  }

  // credentials_type - computed: true, optional: true, required: false
  private _credentialsType?: string; 
  public get credentialsType() {
    return this.getStringAttribute('credentials_type');
  }
  public set credentialsType(value: string) {
    this._credentialsType = value;
  }
  public resetCredentialsType() {
    this._credentialsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsTypeInput() {
    return this._credentialsType;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // last_run - computed: true, optional: false, required: false
  public get lastRun() {
    return this.getNumberAttribute('last_run');
  }

  // name - computed: true, optional: false, required: true
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

  // schedule_interval - computed: true, optional: true, required: false
  private _scheduleInterval?: number; 
  public get scheduleInterval() {
    return this.getNumberAttribute('schedule_interval');
  }
  public set scheduleInterval(value: number) {
    this._scheduleInterval = value;
  }
  public resetScheduleInterval() {
    this._scheduleInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIntervalInput() {
    return this._scheduleInterval;
  }

  // schedule_units - computed: true, optional: true, required: false
  private _scheduleUnits?: string; 
  public get scheduleUnits() {
    return this.getStringAttribute('schedule_units');
  }
  public set scheduleUnits(value: string) {
    this._scheduleUnits = value;
  }
  public resetScheduleUnits() {
    this._scheduleUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleUnitsInput() {
    return this._scheduleUnits;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_msg - computed: true, optional: false, required: false
  public get stateMsg() {
    return this.getStringAttribute('state_msg');
  }

  // status_timestamp - computed: true, optional: false, required: false
  public get statusTimestamp() {
    return this.getNumberAttribute('status_timestamp');
  }

  // sync_private_zones - computed: true, optional: true, required: false
  private _syncPrivateZones?: boolean | cdktf.IResolvable; 
  public get syncPrivateZones() {
    return this.getBooleanAttribute('sync_private_zones');
  }
  public set syncPrivateZones(value: boolean | cdktf.IResolvable) {
    this._syncPrivateZones = value;
  }
  public resetSyncPrivateZones() {
    this._syncPrivateZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPrivateZonesInput() {
    return this._syncPrivateZones;
  }

  // sync_public_zones - computed: true, optional: true, required: false
  private _syncPublicZones?: boolean | cdktf.IResolvable; 
  public get syncPublicZones() {
    return this.getBooleanAttribute('sync_public_zones');
  }
  public set syncPublicZones(value: boolean | cdktf.IResolvable) {
    this._syncPublicZones = value;
  }
  public resetSyncPublicZones() {
    this._syncPublicZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPublicZonesInput() {
    return this._syncPublicZones;
  }

  // zone_count - computed: true, optional: false, required: false
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
}

export class CloudAwsRoute53TaskGroupTaskListStructList extends cdktf.ComplexList {
  public internalValue? : CloudAwsRoute53TaskGroupTaskListStruct[] | cdktf.IResolvable

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
  public get(index: number): CloudAwsRoute53TaskGroupTaskListStructOutputReference {
    return new CloudAwsRoute53TaskGroupTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group nios_cloud_aws_route53_task_group}
*/
export class CloudAwsRoute53TaskGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_cloud_aws_route53_task_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAwsRoute53TaskGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAwsRoute53TaskGroup to import
  * @param importFromId The id of the existing CloudAwsRoute53TaskGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAwsRoute53TaskGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_cloud_aws_route53_task_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/cloud_aws_route53_task_group nios_cloud_aws_route53_task_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAwsRoute53TaskGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAwsRoute53TaskGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_cloud_aws_route53_task_group',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountIdsFilePath = config.awsAccountIdsFilePath;
    this._comment = config.comment;
    this._consolidateZones = config.consolidateZones;
    this._consolidatedView = config.consolidatedView;
    this._disabled = config.disabled;
    this._gridMember = config.gridMember;
    this._multipleAccountsSyncPolicy = config.multipleAccountsSyncPolicy;
    this._name = config.name;
    this._networkView = config.networkView;
    this._networkViewMappingPolicy = config.networkViewMappingPolicy;
    this._roleArn = config.roleArn;
    this._syncChildAccounts = config.syncChildAccounts;
    this._taskList.internalValue = config.taskList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // accounts_list - computed: true, optional: false, required: false
  public get accountsList() {
    return this.getStringAttribute('accounts_list');
  }

  // aws_account_ids_file_path - computed: false, optional: true, required: false
  private _awsAccountIdsFilePath?: string; 
  public get awsAccountIdsFilePath() {
    return this.getStringAttribute('aws_account_ids_file_path');
  }
  public set awsAccountIdsFilePath(value: string) {
    this._awsAccountIdsFilePath = value;
  }
  public resetAwsAccountIdsFilePath() {
    this._awsAccountIdsFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdsFilePathInput() {
    return this._awsAccountIdsFilePath;
  }

  // aws_account_ids_file_token - computed: true, optional: false, required: false
  public get awsAccountIdsFileToken() {
    return this.getStringAttribute('aws_account_ids_file_token');
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // consolidate_zones - computed: true, optional: true, required: false
  private _consolidateZones?: boolean | cdktf.IResolvable; 
  public get consolidateZones() {
    return this.getBooleanAttribute('consolidate_zones');
  }
  public set consolidateZones(value: boolean | cdktf.IResolvable) {
    this._consolidateZones = value;
  }
  public resetConsolidateZones() {
    this._consolidateZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidateZonesInput() {
    return this._consolidateZones;
  }

  // consolidated_view - computed: true, optional: true, required: false
  private _consolidatedView?: string; 
  public get consolidatedView() {
    return this.getStringAttribute('consolidated_view');
  }
  public set consolidatedView(value: string) {
    this._consolidatedView = value;
  }
  public resetConsolidatedView() {
    this._consolidatedView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidatedViewInput() {
    return this._consolidatedView;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // grid_member - computed: false, optional: false, required: true
  private _gridMember?: string; 
  public get gridMember() {
    return this.getStringAttribute('grid_member');
  }
  public set gridMember(value: string) {
    this._gridMember = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gridMemberInput() {
    return this._gridMember;
  }

  // multiple_accounts_sync_policy - computed: true, optional: true, required: false
  private _multipleAccountsSyncPolicy?: string; 
  public get multipleAccountsSyncPolicy() {
    return this.getStringAttribute('multiple_accounts_sync_policy');
  }
  public set multipleAccountsSyncPolicy(value: string) {
    this._multipleAccountsSyncPolicy = value;
  }
  public resetMultipleAccountsSyncPolicy() {
    this._multipleAccountsSyncPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleAccountsSyncPolicyInput() {
    return this._multipleAccountsSyncPolicy;
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

  // network_view - computed: true, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // network_view_mapping_policy - computed: true, optional: true, required: false
  private _networkViewMappingPolicy?: string; 
  public get networkViewMappingPolicy() {
    return this.getStringAttribute('network_view_mapping_policy');
  }
  public set networkViewMappingPolicy(value: string) {
    this._networkViewMappingPolicy = value;
  }
  public resetNetworkViewMappingPolicy() {
    this._networkViewMappingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewMappingPolicyInput() {
    return this._networkViewMappingPolicy;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // sync_child_accounts - computed: true, optional: true, required: false
  private _syncChildAccounts?: boolean | cdktf.IResolvable; 
  public get syncChildAccounts() {
    return this.getBooleanAttribute('sync_child_accounts');
  }
  public set syncChildAccounts(value: boolean | cdktf.IResolvable) {
    this._syncChildAccounts = value;
  }
  public resetSyncChildAccounts() {
    this._syncChildAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncChildAccountsInput() {
    return this._syncChildAccounts;
  }

  // sync_status - computed: true, optional: false, required: false
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
  }

  // task_list - computed: true, optional: true, required: false
  private _taskList = new CloudAwsRoute53TaskGroupTaskListStructList(this, "task_list", false);
  public get taskList() {
    return this._taskList;
  }
  public putTaskList(value: CloudAwsRoute53TaskGroupTaskListStruct[] | cdktf.IResolvable) {
    this._taskList.internalValue = value;
  }
  public resetTaskList() {
    this._taskList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskListInput() {
    return this._taskList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_ids_file_path: cdktf.stringToTerraform(this._awsAccountIdsFilePath),
      comment: cdktf.stringToTerraform(this._comment),
      consolidate_zones: cdktf.booleanToTerraform(this._consolidateZones),
      consolidated_view: cdktf.stringToTerraform(this._consolidatedView),
      disabled: cdktf.booleanToTerraform(this._disabled),
      grid_member: cdktf.stringToTerraform(this._gridMember),
      multiple_accounts_sync_policy: cdktf.stringToTerraform(this._multipleAccountsSyncPolicy),
      name: cdktf.stringToTerraform(this._name),
      network_view: cdktf.stringToTerraform(this._networkView),
      network_view_mapping_policy: cdktf.stringToTerraform(this._networkViewMappingPolicy),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      sync_child_accounts: cdktf.booleanToTerraform(this._syncChildAccounts),
      task_list: cdktf.listMapper(cloudAwsRoute53TaskGroupTaskListStructToTerraform, false)(this._taskList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_ids_file_path: {
        value: cdktf.stringToHclTerraform(this._awsAccountIdsFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consolidate_zones: {
        value: cdktf.booleanToHclTerraform(this._consolidateZones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consolidated_view: {
        value: cdktf.stringToHclTerraform(this._consolidatedView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grid_member: {
        value: cdktf.stringToHclTerraform(this._gridMember),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_accounts_sync_policy: {
        value: cdktf.stringToHclTerraform(this._multipleAccountsSyncPolicy),
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
      network_view: {
        value: cdktf.stringToHclTerraform(this._networkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_view_mapping_policy: {
        value: cdktf.stringToHclTerraform(this._networkViewMappingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_child_accounts: {
        value: cdktf.booleanToHclTerraform(this._syncChildAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      task_list: {
        value: cdktf.listMapperHcl(cloudAwsRoute53TaskGroupTaskListStructToHclTerraform, false)(this._taskList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsRoute53TaskGroupTaskListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
