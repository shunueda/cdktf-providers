// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the owner of the configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#admin_owner_id ConfigurationTemplate#admin_owner_id}
  */
  readonly adminOwnerId: string;
  /**
  * The IDs of the break glass users linked to the configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#break_glass_user_ids ConfigurationTemplate#break_glass_user_ids}
  */
  readonly breakGlassUserIds?: string[];
  /**
  * Custom request notification sent upon request approval for this configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#custom_request_notification ConfigurationTemplate#custom_request_notification}
  */
  readonly customRequestNotification?: string;
  /**
  * The IDs of the audit message channels linked to the configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#linked_audit_message_channel_ids ConfigurationTemplate#linked_audit_message_channel_ids}
  */
  readonly linkedAuditMessageChannelIds?: string[];
  /**
  * The IDs of the on-call schedules linked to the configuration template. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#member_on_call_schedule_ids ConfigurationTemplate#member_on_call_schedule_ids}
  */
  readonly memberOnCallScheduleIds?: string[];
  /**
  * The name of the configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#name ConfigurationTemplate#name}
  */
  readonly name: string;
  /**
  * The request configuration list of the configuration template. If not provided, the default request configuration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#request_configurations ConfigurationTemplate#request_configurations}
  */
  readonly requestConfigurations?: ConfigurationTemplateRequestConfigurations[] | cdktf.IResolvable;
  /**
  * A bool representing whether or not to require MFA for reviewers to approve requests for this configuration template. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#require_mfa_to_approve ConfigurationTemplate#require_mfa_to_approve}
  */
  readonly requireMfaToApprove?: boolean | cdktf.IResolvable;
  /**
  * A bool representing whether or not to require MFA to connect to resources associated with this configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#require_mfa_to_connect ConfigurationTemplate#require_mfa_to_connect}
  */
  readonly requireMfaToConnect: boolean | cdktf.IResolvable;
  /**
  * Configuration for ticket propagation, when enabled, a ticket will be created for access changes related to the users in this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#ticket_propagation ConfigurationTemplate#ticket_propagation}
  */
  readonly ticketPropagation?: ConfigurationTemplateTicketPropagation;
  /**
  * Visibility infomation of an entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#visibility ConfigurationTemplate#visibility}
  */
  readonly visibility: ConfigurationTemplateVisibility;
}
export interface ConfigurationTemplateRequestConfigurationsCondition {
  /**
  * The list of group IDs to match. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#group_ids ConfigurationTemplate#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * The list of role remote IDs to match. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#role_remote_ids ConfigurationTemplate#role_remote_ids}
  */
  readonly roleRemoteIds?: string[];
}

export function configurationTemplateRequestConfigurationsConditionToTerraform(struct?: ConfigurationTemplateRequestConfigurationsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    role_remote_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roleRemoteIds),
  }
}


export function configurationTemplateRequestConfigurationsConditionToHclTerraform(struct?: ConfigurationTemplateRequestConfigurationsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_remote_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roleRemoteIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateRequestConfigurationsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigurationTemplateRequestConfigurationsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._roleRemoteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleRemoteIds = this._roleRemoteIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateRequestConfigurationsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupIds = undefined;
      this._roleRemoteIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupIds = value.groupIds;
      this._roleRemoteIds = value.roleRemoteIds;
    }
  }

  // group_ids - computed: true, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // role_remote_ids - computed: true, optional: true, required: false
  private _roleRemoteIds?: string[]; 
  public get roleRemoteIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_remote_ids'));
  }
  public set roleRemoteIds(value: string[]) {
    this._roleRemoteIds = value;
  }
  public resetRoleRemoteIds() {
    this._roleRemoteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRemoteIdsInput() {
    return this._roleRemoteIds;
  }
}
export interface ConfigurationTemplateRequestConfigurationsReviewerStages {
  /**
  * The operator of the reviewer stage. Admin and manager approval are also treated as reviewers. Default: "AND"; must be one of ["AND", "OR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#operator ConfigurationTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#owner_ids ConfigurationTemplate#owner_ids}
  */
  readonly ownerIds: string[];
  /**
  * Whether this reviewer stage should require admin approval. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#require_admin_approval ConfigurationTemplate#require_admin_approval}
  */
  readonly requireAdminApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether this reviewer stage should require manager approval. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#require_manager_approval ConfigurationTemplate#require_manager_approval}
  */
  readonly requireManagerApproval?: boolean | cdktf.IResolvable;
}

export function configurationTemplateRequestConfigurationsReviewerStagesToTerraform(struct?: ConfigurationTemplateRequestConfigurationsReviewerStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    owner_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ownerIds),
    require_admin_approval: cdktf.booleanToTerraform(struct!.requireAdminApproval),
    require_manager_approval: cdktf.booleanToTerraform(struct!.requireManagerApproval),
  }
}


export function configurationTemplateRequestConfigurationsReviewerStagesToHclTerraform(struct?: ConfigurationTemplateRequestConfigurationsReviewerStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ownerIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    require_admin_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireAdminApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_manager_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireManagerApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateRequestConfigurationsReviewerStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateRequestConfigurationsReviewerStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._ownerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerIds = this._ownerIds;
    }
    if (this._requireAdminApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAdminApproval = this._requireAdminApproval;
    }
    if (this._requireManagerApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireManagerApproval = this._requireManagerApproval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateRequestConfigurationsReviewerStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._ownerIds = undefined;
      this._requireAdminApproval = undefined;
      this._requireManagerApproval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._ownerIds = value.ownerIds;
      this._requireAdminApproval = value.requireAdminApproval;
      this._requireManagerApproval = value.requireManagerApproval;
    }
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // owner_ids - computed: false, optional: false, required: true
  private _ownerIds?: string[]; 
  public get ownerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('owner_ids'));
  }
  public set ownerIds(value: string[]) {
    this._ownerIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdsInput() {
    return this._ownerIds;
  }

  // require_admin_approval - computed: true, optional: true, required: false
  private _requireAdminApproval?: boolean | cdktf.IResolvable; 
  public get requireAdminApproval() {
    return this.getBooleanAttribute('require_admin_approval');
  }
  public set requireAdminApproval(value: boolean | cdktf.IResolvable) {
    this._requireAdminApproval = value;
  }
  public resetRequireAdminApproval() {
    this._requireAdminApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAdminApprovalInput() {
    return this._requireAdminApproval;
  }

  // require_manager_approval - computed: true, optional: true, required: false
  private _requireManagerApproval?: boolean | cdktf.IResolvable; 
  public get requireManagerApproval() {
    return this.getBooleanAttribute('require_manager_approval');
  }
  public set requireManagerApproval(value: boolean | cdktf.IResolvable) {
    this._requireManagerApproval = value;
  }
  public resetRequireManagerApproval() {
    this._requireManagerApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireManagerApprovalInput() {
    return this._requireManagerApproval;
  }
}

export class ConfigurationTemplateRequestConfigurationsReviewerStagesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateRequestConfigurationsReviewerStages[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateRequestConfigurationsReviewerStagesOutputReference {
    return new ConfigurationTemplateRequestConfigurationsReviewerStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateRequestConfigurations {
  /**
  * A bool representing whether or not to allow requests for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#allow_requests ConfigurationTemplate#allow_requests}
  */
  readonly allowRequests: boolean | cdktf.IResolvable;
  /**
  * A bool representing whether or not to automatically approve requests for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#auto_approval ConfigurationTemplate#auto_approval}
  */
  readonly autoApproval: boolean | cdktf.IResolvable;
  /**
  * The condition for the request configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#condition ConfigurationTemplate#condition}
  */
  readonly condition?: ConfigurationTemplateRequestConfigurationsCondition;
  /**
  * The duration for which access can be extended (in minutes). Set to 0 to disable extensions. When > 0, extensions are enabled for the specified duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#extensions_duration_in_minutes ConfigurationTemplate#extensions_duration_in_minutes}
  */
  readonly extensionsDurationInMinutes?: number;
  /**
  * The maximum duration for which the resource can be requested (in minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#max_duration ConfigurationTemplate#max_duration}
  */
  readonly maxDuration?: number;
  /**
  * The priority of the request configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#priority ConfigurationTemplate#priority}
  */
  readonly priority: number;
  /**
  * The recommended duration for which the resource should be requested (in minutes). -1 represents an indefinite duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#recommended_duration ConfigurationTemplate#recommended_duration}
  */
  readonly recommendedDuration?: number;
  /**
  * The ID of the associated request template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#request_template_id ConfigurationTemplate#request_template_id}
  */
  readonly requestTemplateId?: string;
  /**
  * A bool representing whether or not to require MFA for requesting access to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#require_mfa_to_request ConfigurationTemplate#require_mfa_to_request}
  */
  readonly requireMfaToRequest: boolean | cdktf.IResolvable;
  /**
  * A bool representing whether or not access requests to the resource require an access ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#require_support_ticket ConfigurationTemplate#require_support_ticket}
  */
  readonly requireSupportTicket: boolean | cdktf.IResolvable;
  /**
  * The list of reviewer stages for the request configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#reviewer_stages ConfigurationTemplate#reviewer_stages}
  */
  readonly reviewerStages?: ConfigurationTemplateRequestConfigurationsReviewerStages[] | cdktf.IResolvable;
}

export function configurationTemplateRequestConfigurationsToTerraform(struct?: ConfigurationTemplateRequestConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_requests: cdktf.booleanToTerraform(struct!.allowRequests),
    auto_approval: cdktf.booleanToTerraform(struct!.autoApproval),
    condition: configurationTemplateRequestConfigurationsConditionToTerraform(struct!.condition),
    extensions_duration_in_minutes: cdktf.numberToTerraform(struct!.extensionsDurationInMinutes),
    max_duration: cdktf.numberToTerraform(struct!.maxDuration),
    priority: cdktf.numberToTerraform(struct!.priority),
    recommended_duration: cdktf.numberToTerraform(struct!.recommendedDuration),
    request_template_id: cdktf.stringToTerraform(struct!.requestTemplateId),
    require_mfa_to_request: cdktf.booleanToTerraform(struct!.requireMfaToRequest),
    require_support_ticket: cdktf.booleanToTerraform(struct!.requireSupportTicket),
    reviewer_stages: cdktf.listMapper(configurationTemplateRequestConfigurationsReviewerStagesToTerraform, false)(struct!.reviewerStages),
  }
}


export function configurationTemplateRequestConfigurationsToHclTerraform(struct?: ConfigurationTemplateRequestConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_requests: {
      value: cdktf.booleanToHclTerraform(struct!.allowRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_approval: {
      value: cdktf.booleanToHclTerraform(struct!.autoApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: configurationTemplateRequestConfigurationsConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigurationTemplateRequestConfigurationsCondition",
    },
    extensions_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.extensionsDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration: {
      value: cdktf.numberToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recommended_duration: {
      value: cdktf.numberToHclTerraform(struct!.recommendedDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_template_id: {
      value: cdktf.stringToHclTerraform(struct!.requestTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_mfa_to_request: {
      value: cdktf.booleanToHclTerraform(struct!.requireMfaToRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_support_ticket: {
      value: cdktf.booleanToHclTerraform(struct!.requireSupportTicket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reviewer_stages: {
      value: cdktf.listMapperHcl(configurationTemplateRequestConfigurationsReviewerStagesToHclTerraform, false)(struct!.reviewerStages),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateRequestConfigurationsReviewerStagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateRequestConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateRequestConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRequests = this._allowRequests;
    }
    if (this._autoApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApproval = this._autoApproval;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._extensionsDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionsDurationInMinutes = this._extensionsDurationInMinutes;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._recommendedDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendedDuration = this._recommendedDuration;
    }
    if (this._requestTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTemplateId = this._requestTemplateId;
    }
    if (this._requireMfaToRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMfaToRequest = this._requireMfaToRequest;
    }
    if (this._requireSupportTicket !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSupportTicket = this._requireSupportTicket;
    }
    if (this._reviewerStages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerStages = this._reviewerStages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateRequestConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRequests = undefined;
      this._autoApproval = undefined;
      this._condition.internalValue = undefined;
      this._extensionsDurationInMinutes = undefined;
      this._maxDuration = undefined;
      this._priority = undefined;
      this._recommendedDuration = undefined;
      this._requestTemplateId = undefined;
      this._requireMfaToRequest = undefined;
      this._requireSupportTicket = undefined;
      this._reviewerStages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRequests = value.allowRequests;
      this._autoApproval = value.autoApproval;
      this._condition.internalValue = value.condition;
      this._extensionsDurationInMinutes = value.extensionsDurationInMinutes;
      this._maxDuration = value.maxDuration;
      this._priority = value.priority;
      this._recommendedDuration = value.recommendedDuration;
      this._requestTemplateId = value.requestTemplateId;
      this._requireMfaToRequest = value.requireMfaToRequest;
      this._requireSupportTicket = value.requireSupportTicket;
      this._reviewerStages.internalValue = value.reviewerStages;
    }
  }

  // allow_requests - computed: false, optional: false, required: true
  private _allowRequests?: boolean | cdktf.IResolvable; 
  public get allowRequests() {
    return this.getBooleanAttribute('allow_requests');
  }
  public set allowRequests(value: boolean | cdktf.IResolvable) {
    this._allowRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRequestsInput() {
    return this._allowRequests;
  }

  // auto_approval - computed: false, optional: false, required: true
  private _autoApproval?: boolean | cdktf.IResolvable; 
  public get autoApproval() {
    return this.getBooleanAttribute('auto_approval');
  }
  public set autoApproval(value: boolean | cdktf.IResolvable) {
    this._autoApproval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovalInput() {
    return this._autoApproval;
  }

  // condition - computed: true, optional: true, required: false
  private _condition = new ConfigurationTemplateRequestConfigurationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ConfigurationTemplateRequestConfigurationsCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // extensions_duration_in_minutes - computed: false, optional: true, required: false
  private _extensionsDurationInMinutes?: number; 
  public get extensionsDurationInMinutes() {
    return this.getNumberAttribute('extensions_duration_in_minutes');
  }
  public set extensionsDurationInMinutes(value: number) {
    this._extensionsDurationInMinutes = value;
  }
  public resetExtensionsDurationInMinutes() {
    this._extensionsDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsDurationInMinutesInput() {
    return this._extensionsDurationInMinutes;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: number; 
  public get maxDuration() {
    return this.getNumberAttribute('max_duration');
  }
  public set maxDuration(value: number) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // recommended_duration - computed: false, optional: true, required: false
  private _recommendedDuration?: number; 
  public get recommendedDuration() {
    return this.getNumberAttribute('recommended_duration');
  }
  public set recommendedDuration(value: number) {
    this._recommendedDuration = value;
  }
  public resetRecommendedDuration() {
    this._recommendedDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedDurationInput() {
    return this._recommendedDuration;
  }

  // request_template_id - computed: false, optional: true, required: false
  private _requestTemplateId?: string; 
  public get requestTemplateId() {
    return this.getStringAttribute('request_template_id');
  }
  public set requestTemplateId(value: string) {
    this._requestTemplateId = value;
  }
  public resetRequestTemplateId() {
    this._requestTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateIdInput() {
    return this._requestTemplateId;
  }

  // require_mfa_to_request - computed: false, optional: false, required: true
  private _requireMfaToRequest?: boolean | cdktf.IResolvable; 
  public get requireMfaToRequest() {
    return this.getBooleanAttribute('require_mfa_to_request');
  }
  public set requireMfaToRequest(value: boolean | cdktf.IResolvable) {
    this._requireMfaToRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaToRequestInput() {
    return this._requireMfaToRequest;
  }

  // require_support_ticket - computed: false, optional: false, required: true
  private _requireSupportTicket?: boolean | cdktf.IResolvable; 
  public get requireSupportTicket() {
    return this.getBooleanAttribute('require_support_ticket');
  }
  public set requireSupportTicket(value: boolean | cdktf.IResolvable) {
    this._requireSupportTicket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSupportTicketInput() {
    return this._requireSupportTicket;
  }

  // reviewer_stages - computed: false, optional: true, required: false
  private _reviewerStages = new ConfigurationTemplateRequestConfigurationsReviewerStagesList(this, "reviewer_stages", false);
  public get reviewerStages() {
    return this._reviewerStages;
  }
  public putReviewerStages(value: ConfigurationTemplateRequestConfigurationsReviewerStages[] | cdktf.IResolvable) {
    this._reviewerStages.internalValue = value;
  }
  public resetReviewerStages() {
    this._reviewerStages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerStagesInput() {
    return this._reviewerStages.internalValue;
  }
}

export class ConfigurationTemplateRequestConfigurationsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateRequestConfigurations[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateRequestConfigurationsOutputReference {
    return new ConfigurationTemplateRequestConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateTicketPropagation {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#enabled_on_grant ConfigurationTemplate#enabled_on_grant}
  */
  readonly enabledOnGrant?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#enabled_on_revocation ConfigurationTemplate#enabled_on_revocation}
  */
  readonly enabledOnRevocation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#ticket_project_id ConfigurationTemplate#ticket_project_id}
  */
  readonly ticketProjectId?: string;
  /**
  * The third party ticketing platform provider. must be one of ["JIRA", "LINEAR", "SERVICE_NOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#ticket_provider ConfigurationTemplate#ticket_provider}
  */
  readonly ticketProvider?: string;
}

export function configurationTemplateTicketPropagationToTerraform(struct?: ConfigurationTemplateTicketPropagation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_on_grant: cdktf.booleanToTerraform(struct!.enabledOnGrant),
    enabled_on_revocation: cdktf.booleanToTerraform(struct!.enabledOnRevocation),
    ticket_project_id: cdktf.stringToTerraform(struct!.ticketProjectId),
    ticket_provider: cdktf.stringToTerraform(struct!.ticketProvider),
  }
}


export function configurationTemplateTicketPropagationToHclTerraform(struct?: ConfigurationTemplateTicketPropagation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_on_grant: {
      value: cdktf.booleanToHclTerraform(struct!.enabledOnGrant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_on_revocation: {
      value: cdktf.booleanToHclTerraform(struct!.enabledOnRevocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ticket_project_id: {
      value: cdktf.stringToHclTerraform(struct!.ticketProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ticket_provider: {
      value: cdktf.stringToHclTerraform(struct!.ticketProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateTicketPropagationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigurationTemplateTicketPropagation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledOnGrant !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledOnGrant = this._enabledOnGrant;
    }
    if (this._enabledOnRevocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledOnRevocation = this._enabledOnRevocation;
    }
    if (this._ticketProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketProjectId = this._ticketProjectId;
    }
    if (this._ticketProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketProvider = this._ticketProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateTicketPropagation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledOnGrant = undefined;
      this._enabledOnRevocation = undefined;
      this._ticketProjectId = undefined;
      this._ticketProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledOnGrant = value.enabledOnGrant;
      this._enabledOnRevocation = value.enabledOnRevocation;
      this._ticketProjectId = value.ticketProjectId;
      this._ticketProvider = value.ticketProvider;
    }
  }

  // enabled_on_grant - computed: true, optional: true, required: false
  private _enabledOnGrant?: boolean | cdktf.IResolvable; 
  public get enabledOnGrant() {
    return this.getBooleanAttribute('enabled_on_grant');
  }
  public set enabledOnGrant(value: boolean | cdktf.IResolvable) {
    this._enabledOnGrant = value;
  }
  public resetEnabledOnGrant() {
    this._enabledOnGrant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOnGrantInput() {
    return this._enabledOnGrant;
  }

  // enabled_on_revocation - computed: true, optional: true, required: false
  private _enabledOnRevocation?: boolean | cdktf.IResolvable; 
  public get enabledOnRevocation() {
    return this.getBooleanAttribute('enabled_on_revocation');
  }
  public set enabledOnRevocation(value: boolean | cdktf.IResolvable) {
    this._enabledOnRevocation = value;
  }
  public resetEnabledOnRevocation() {
    this._enabledOnRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOnRevocationInput() {
    return this._enabledOnRevocation;
  }

  // ticket_project_id - computed: true, optional: true, required: false
  private _ticketProjectId?: string; 
  public get ticketProjectId() {
    return this.getStringAttribute('ticket_project_id');
  }
  public set ticketProjectId(value: string) {
    this._ticketProjectId = value;
  }
  public resetTicketProjectId() {
    this._ticketProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketProjectIdInput() {
    return this._ticketProjectId;
  }

  // ticket_provider - computed: true, optional: true, required: false
  private _ticketProvider?: string; 
  public get ticketProvider() {
    return this.getStringAttribute('ticket_provider');
  }
  public set ticketProvider(value: string) {
    this._ticketProvider = value;
  }
  public resetTicketProvider() {
    this._ticketProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketProviderInput() {
    return this._ticketProvider;
  }
}
export interface ConfigurationTemplateVisibility {
  /**
  * The visibility level of the entity. must be one of ["GLOBAL", "LIMITED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#visibility ConfigurationTemplate#visibility}
  */
  readonly visibility: string;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#visibility_group_ids ConfigurationTemplate#visibility_group_ids}
  */
  readonly visibilityGroupIds?: string[];
}

export function configurationTemplateVisibilityToTerraform(struct?: ConfigurationTemplateVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    visibility_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.visibilityGroupIds),
  }
}


export function configurationTemplateVisibilityToHclTerraform(struct?: ConfigurationTemplateVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.visibilityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigurationTemplateVisibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._visibilityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityGroupIds = this._visibilityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateVisibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._visibility = undefined;
      this._visibilityGroupIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._visibility = value.visibility;
      this._visibilityGroupIds = value.visibilityGroupIds;
    }
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // visibility_group_ids - computed: true, optional: true, required: false
  private _visibilityGroupIds?: string[]; 
  public get visibilityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('visibility_group_ids'));
  }
  public set visibilityGroupIds(value: string[]) {
    this._visibilityGroupIds = value;
  }
  public resetVisibilityGroupIds() {
    this._visibilityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityGroupIdsInput() {
    return this._visibilityGroupIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template opal_configuration_template}
*/
export class ConfigurationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_configuration_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationTemplate to import
  * @param importFromId The id of the existing ConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_configuration_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/configuration_template opal_configuration_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_configuration_template',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminOwnerId = config.adminOwnerId;
    this._breakGlassUserIds = config.breakGlassUserIds;
    this._customRequestNotification = config.customRequestNotification;
    this._linkedAuditMessageChannelIds = config.linkedAuditMessageChannelIds;
    this._memberOnCallScheduleIds = config.memberOnCallScheduleIds;
    this._name = config.name;
    this._requestConfigurations.internalValue = config.requestConfigurations;
    this._requireMfaToApprove = config.requireMfaToApprove;
    this._requireMfaToConnect = config.requireMfaToConnect;
    this._ticketPropagation.internalValue = config.ticketPropagation;
    this._visibility.internalValue = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_owner_id - computed: false, optional: false, required: true
  private _adminOwnerId?: string; 
  public get adminOwnerId() {
    return this.getStringAttribute('admin_owner_id');
  }
  public set adminOwnerId(value: string) {
    this._adminOwnerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminOwnerIdInput() {
    return this._adminOwnerId;
  }

  // break_glass_user_ids - computed: true, optional: true, required: false
  private _breakGlassUserIds?: string[]; 
  public get breakGlassUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('break_glass_user_ids'));
  }
  public set breakGlassUserIds(value: string[]) {
    this._breakGlassUserIds = value;
  }
  public resetBreakGlassUserIds() {
    this._breakGlassUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakGlassUserIdsInput() {
    return this._breakGlassUserIds;
  }

  // configuration_template_id - computed: true, optional: false, required: false
  public get configurationTemplateId() {
    return this.getStringAttribute('configuration_template_id');
  }

  // custom_request_notification - computed: true, optional: true, required: false
  private _customRequestNotification?: string; 
  public get customRequestNotification() {
    return this.getStringAttribute('custom_request_notification');
  }
  public set customRequestNotification(value: string) {
    this._customRequestNotification = value;
  }
  public resetCustomRequestNotification() {
    this._customRequestNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestNotificationInput() {
    return this._customRequestNotification;
  }

  // linked_audit_message_channel_ids - computed: true, optional: true, required: false
  private _linkedAuditMessageChannelIds?: string[]; 
  public get linkedAuditMessageChannelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('linked_audit_message_channel_ids'));
  }
  public set linkedAuditMessageChannelIds(value: string[]) {
    this._linkedAuditMessageChannelIds = value;
  }
  public resetLinkedAuditMessageChannelIds() {
    this._linkedAuditMessageChannelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedAuditMessageChannelIdsInput() {
    return this._linkedAuditMessageChannelIds;
  }

  // member_on_call_schedule_ids - computed: true, optional: true, required: false
  private _memberOnCallScheduleIds?: string[]; 
  public get memberOnCallScheduleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_on_call_schedule_ids'));
  }
  public set memberOnCallScheduleIds(value: string[]) {
    this._memberOnCallScheduleIds = value;
  }
  public resetMemberOnCallScheduleIds() {
    this._memberOnCallScheduleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOnCallScheduleIdsInput() {
    return this._memberOnCallScheduleIds;
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

  // request_configuration_id - computed: true, optional: false, required: false
  public get requestConfigurationId() {
    return this.getStringAttribute('request_configuration_id');
  }

  // request_configurations - computed: false, optional: true, required: false
  private _requestConfigurations = new ConfigurationTemplateRequestConfigurationsList(this, "request_configurations", false);
  public get requestConfigurations() {
    return this._requestConfigurations;
  }
  public putRequestConfigurations(value: ConfigurationTemplateRequestConfigurations[] | cdktf.IResolvable) {
    this._requestConfigurations.internalValue = value;
  }
  public resetRequestConfigurations() {
    this._requestConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigurationsInput() {
    return this._requestConfigurations.internalValue;
  }

  // require_mfa_to_approve - computed: true, optional: true, required: false
  private _requireMfaToApprove?: boolean | cdktf.IResolvable; 
  public get requireMfaToApprove() {
    return this.getBooleanAttribute('require_mfa_to_approve');
  }
  public set requireMfaToApprove(value: boolean | cdktf.IResolvable) {
    this._requireMfaToApprove = value;
  }
  public resetRequireMfaToApprove() {
    this._requireMfaToApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaToApproveInput() {
    return this._requireMfaToApprove;
  }

  // require_mfa_to_connect - computed: false, optional: false, required: true
  private _requireMfaToConnect?: boolean | cdktf.IResolvable; 
  public get requireMfaToConnect() {
    return this.getBooleanAttribute('require_mfa_to_connect');
  }
  public set requireMfaToConnect(value: boolean | cdktf.IResolvable) {
    this._requireMfaToConnect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaToConnectInput() {
    return this._requireMfaToConnect;
  }

  // ticket_propagation - computed: true, optional: true, required: false
  private _ticketPropagation = new ConfigurationTemplateTicketPropagationOutputReference(this, "ticket_propagation");
  public get ticketPropagation() {
    return this._ticketPropagation;
  }
  public putTicketPropagation(value: ConfigurationTemplateTicketPropagation) {
    this._ticketPropagation.internalValue = value;
  }
  public resetTicketPropagation() {
    this._ticketPropagation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketPropagationInput() {
    return this._ticketPropagation.internalValue;
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility = new ConfigurationTemplateVisibilityOutputReference(this, "visibility");
  public get visibility() {
    return this._visibility;
  }
  public putVisibility(value: ConfigurationTemplateVisibility) {
    this._visibility.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_owner_id: cdktf.stringToTerraform(this._adminOwnerId),
      break_glass_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._breakGlassUserIds),
      custom_request_notification: cdktf.stringToTerraform(this._customRequestNotification),
      linked_audit_message_channel_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._linkedAuditMessageChannelIds),
      member_on_call_schedule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberOnCallScheduleIds),
      name: cdktf.stringToTerraform(this._name),
      request_configurations: cdktf.listMapper(configurationTemplateRequestConfigurationsToTerraform, false)(this._requestConfigurations.internalValue),
      require_mfa_to_approve: cdktf.booleanToTerraform(this._requireMfaToApprove),
      require_mfa_to_connect: cdktf.booleanToTerraform(this._requireMfaToConnect),
      ticket_propagation: configurationTemplateTicketPropagationToTerraform(this._ticketPropagation.internalValue),
      visibility: configurationTemplateVisibilityToTerraform(this._visibility.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_owner_id: {
        value: cdktf.stringToHclTerraform(this._adminOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      break_glass_user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._breakGlassUserIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_request_notification: {
        value: cdktf.stringToHclTerraform(this._customRequestNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_audit_message_channel_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._linkedAuditMessageChannelIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      member_on_call_schedule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberOnCallScheduleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_configurations: {
        value: cdktf.listMapperHcl(configurationTemplateRequestConfigurationsToHclTerraform, false)(this._requestConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigurationTemplateRequestConfigurationsList",
      },
      require_mfa_to_approve: {
        value: cdktf.booleanToHclTerraform(this._requireMfaToApprove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_mfa_to_connect: {
        value: cdktf.booleanToHclTerraform(this._requireMfaToConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ticket_propagation: {
        value: configurationTemplateTicketPropagationToHclTerraform(this._ticketPropagation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigurationTemplateTicketPropagation",
      },
      visibility: {
        value: configurationTemplateVisibilityToHclTerraform(this._visibility.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigurationTemplateVisibility",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
