// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether feature flags created under the project should be available to client-side SDKs by default. Please migrate to `default_client_side_availability` to maintain future compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#include_in_snippet Project#include_in_snippet}
  */
  readonly includeInSnippet?: boolean | cdktf.IResolvable;
  /**
  * The project's unique key. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#key Project#key}
  */
  readonly key: string;
  /**
  * The project's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Tags associated with your resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#tags Project#tags}
  */
  readonly tags?: string[];
  /**
  * default_client_side_availability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#default_client_side_availability Project#default_client_side_availability}
  */
  readonly defaultClientSideAvailability?: ProjectDefaultClientSideAvailability[] | cdktf.IResolvable;
  /**
  * environments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#environments Project#environments}
  */
  readonly environments: ProjectEnvironments[] | cdktf.IResolvable;
}
export interface ProjectDefaultClientSideAvailability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#using_environment_id Project#using_environment_id}
  */
  readonly usingEnvironmentId: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#using_mobile_key Project#using_mobile_key}
  */
  readonly usingMobileKey: boolean | cdktf.IResolvable;
}

export function projectDefaultClientSideAvailabilityToTerraform(struct?: ProjectDefaultClientSideAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    using_environment_id: cdktf.booleanToTerraform(struct!.usingEnvironmentId),
    using_mobile_key: cdktf.booleanToTerraform(struct!.usingMobileKey),
  }
}


export function projectDefaultClientSideAvailabilityToHclTerraform(struct?: ProjectDefaultClientSideAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    using_environment_id: {
      value: cdktf.booleanToHclTerraform(struct!.usingEnvironmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    using_mobile_key: {
      value: cdktf.booleanToHclTerraform(struct!.usingMobileKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectDefaultClientSideAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectDefaultClientSideAvailability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usingEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingEnvironmentId = this._usingEnvironmentId;
    }
    if (this._usingMobileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingMobileKey = this._usingMobileKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectDefaultClientSideAvailability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._usingEnvironmentId = undefined;
      this._usingMobileKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._usingEnvironmentId = value.usingEnvironmentId;
      this._usingMobileKey = value.usingMobileKey;
    }
  }

  // using_environment_id - computed: false, optional: false, required: true
  private _usingEnvironmentId?: boolean | cdktf.IResolvable; 
  public get usingEnvironmentId() {
    return this.getBooleanAttribute('using_environment_id');
  }
  public set usingEnvironmentId(value: boolean | cdktf.IResolvable) {
    this._usingEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usingEnvironmentIdInput() {
    return this._usingEnvironmentId;
  }

  // using_mobile_key - computed: false, optional: false, required: true
  private _usingMobileKey?: boolean | cdktf.IResolvable; 
  public get usingMobileKey() {
    return this.getBooleanAttribute('using_mobile_key');
  }
  public set usingMobileKey(value: boolean | cdktf.IResolvable) {
    this._usingMobileKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usingMobileKeyInput() {
    return this._usingMobileKey;
  }
}

export class ProjectDefaultClientSideAvailabilityList extends cdktf.ComplexList {
  public internalValue? : ProjectDefaultClientSideAvailability[] | cdktf.IResolvable

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
  public get(index: number): ProjectDefaultClientSideAvailabilityOutputReference {
    return new ProjectDefaultClientSideAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectEnvironmentsApprovalSettings {
  /**
  * Automatically apply changes that have been approved by all reviewers. This field is only applicable for approval service kinds other than `launchdarkly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#auto_apply_approved_changes Project#auto_apply_approved_changes}
  */
  readonly autoApplyApprovedChanges?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#can_apply_declined_changes Project#can_apply_declined_changes}
  */
  readonly canApplyDeclinedChanges?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#can_review_own_request Project#can_review_own_request}
  */
  readonly canReviewOwnRequest?: boolean | cdktf.IResolvable;
  /**
  * The number of approvals required before an approval request can be applied. This number must be between 1 and 5. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#min_num_approvals Project#min_num_approvals}
  */
  readonly minNumApprovals?: number;
  /**
  * Set to `true` for changes to flags in this environment to require approval. You may only set `required` to true if `required_approval_tags` is not set and vice versa. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#required Project#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * An array of tags used to specify which flags with those tags require approval. You may only set `required_approval_tags` if `required` is set to `false` and vice versa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#required_approval_tags Project#required_approval_tags}
  */
  readonly requiredApprovalTags?: string[];
  /**
  * The configuration for the service associated with this approval. This is specific to each approval service. For a `service_kind` of `servicenow`, the following fields apply:
  * 
  * 	 - `template` (String) The sys_id of the Standard Change Request Template in ServiceNow that LaunchDarkly will use when creating the change request.
  * 	 - `detail_column` (String) The name of the ServiceNow Change Request column LaunchDarkly uses to populate detailed approval request information. This is most commonly "justification".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#service_config Project#service_config}
  */
  readonly serviceConfig?: { [key: string]: string };
  /**
  * The kind of service associated with this approval. This determines which platform is used for requesting approval. Valid values are `servicenow`, `launchdarkly`. If you use a value other than `launchdarkly`, you must have already configured the integration in the LaunchDarkly UI or your apply will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#service_kind Project#service_kind}
  */
  readonly serviceKind?: string;
}

export function projectEnvironmentsApprovalSettingsToTerraform(struct?: ProjectEnvironmentsApprovalSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_apply_approved_changes: cdktf.booleanToTerraform(struct!.autoApplyApprovedChanges),
    can_apply_declined_changes: cdktf.booleanToTerraform(struct!.canApplyDeclinedChanges),
    can_review_own_request: cdktf.booleanToTerraform(struct!.canReviewOwnRequest),
    min_num_approvals: cdktf.numberToTerraform(struct!.minNumApprovals),
    required: cdktf.booleanToTerraform(struct!.required),
    required_approval_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredApprovalTags),
    service_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceConfig),
    service_kind: cdktf.stringToTerraform(struct!.serviceKind),
  }
}


export function projectEnvironmentsApprovalSettingsToHclTerraform(struct?: ProjectEnvironmentsApprovalSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_apply_approved_changes: {
      value: cdktf.booleanToHclTerraform(struct!.autoApplyApprovedChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_apply_declined_changes: {
      value: cdktf.booleanToHclTerraform(struct!.canApplyDeclinedChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_review_own_request: {
      value: cdktf.booleanToHclTerraform(struct!.canReviewOwnRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_num_approvals: {
      value: cdktf.numberToHclTerraform(struct!.minNumApprovals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_approval_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredApprovalTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_kind: {
      value: cdktf.stringToHclTerraform(struct!.serviceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectEnvironmentsApprovalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectEnvironmentsApprovalSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoApplyApprovedChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApplyApprovedChanges = this._autoApplyApprovedChanges;
    }
    if (this._canApplyDeclinedChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.canApplyDeclinedChanges = this._canApplyDeclinedChanges;
    }
    if (this._canReviewOwnRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.canReviewOwnRequest = this._canReviewOwnRequest;
    }
    if (this._minNumApprovals !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNumApprovals = this._minNumApprovals;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._requiredApprovalTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredApprovalTags = this._requiredApprovalTags;
    }
    if (this._serviceConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConfig = this._serviceConfig;
    }
    if (this._serviceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKind = this._serviceKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectEnvironmentsApprovalSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoApplyApprovedChanges = undefined;
      this._canApplyDeclinedChanges = undefined;
      this._canReviewOwnRequest = undefined;
      this._minNumApprovals = undefined;
      this._required = undefined;
      this._requiredApprovalTags = undefined;
      this._serviceConfig = undefined;
      this._serviceKind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoApplyApprovedChanges = value.autoApplyApprovedChanges;
      this._canApplyDeclinedChanges = value.canApplyDeclinedChanges;
      this._canReviewOwnRequest = value.canReviewOwnRequest;
      this._minNumApprovals = value.minNumApprovals;
      this._required = value.required;
      this._requiredApprovalTags = value.requiredApprovalTags;
      this._serviceConfig = value.serviceConfig;
      this._serviceKind = value.serviceKind;
    }
  }

  // auto_apply_approved_changes - computed: false, optional: true, required: false
  private _autoApplyApprovedChanges?: boolean | cdktf.IResolvable; 
  public get autoApplyApprovedChanges() {
    return this.getBooleanAttribute('auto_apply_approved_changes');
  }
  public set autoApplyApprovedChanges(value: boolean | cdktf.IResolvable) {
    this._autoApplyApprovedChanges = value;
  }
  public resetAutoApplyApprovedChanges() {
    this._autoApplyApprovedChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyApprovedChangesInput() {
    return this._autoApplyApprovedChanges;
  }

  // can_apply_declined_changes - computed: false, optional: true, required: false
  private _canApplyDeclinedChanges?: boolean | cdktf.IResolvable; 
  public get canApplyDeclinedChanges() {
    return this.getBooleanAttribute('can_apply_declined_changes');
  }
  public set canApplyDeclinedChanges(value: boolean | cdktf.IResolvable) {
    this._canApplyDeclinedChanges = value;
  }
  public resetCanApplyDeclinedChanges() {
    this._canApplyDeclinedChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canApplyDeclinedChangesInput() {
    return this._canApplyDeclinedChanges;
  }

  // can_review_own_request - computed: false, optional: true, required: false
  private _canReviewOwnRequest?: boolean | cdktf.IResolvable; 
  public get canReviewOwnRequest() {
    return this.getBooleanAttribute('can_review_own_request');
  }
  public set canReviewOwnRequest(value: boolean | cdktf.IResolvable) {
    this._canReviewOwnRequest = value;
  }
  public resetCanReviewOwnRequest() {
    this._canReviewOwnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canReviewOwnRequestInput() {
    return this._canReviewOwnRequest;
  }

  // min_num_approvals - computed: false, optional: true, required: false
  private _minNumApprovals?: number; 
  public get minNumApprovals() {
    return this.getNumberAttribute('min_num_approvals');
  }
  public set minNumApprovals(value: number) {
    this._minNumApprovals = value;
  }
  public resetMinNumApprovals() {
    this._minNumApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumApprovalsInput() {
    return this._minNumApprovals;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // required_approval_tags - computed: false, optional: true, required: false
  private _requiredApprovalTags?: string[]; 
  public get requiredApprovalTags() {
    return this.getListAttribute('required_approval_tags');
  }
  public set requiredApprovalTags(value: string[]) {
    this._requiredApprovalTags = value;
  }
  public resetRequiredApprovalTags() {
    this._requiredApprovalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovalTagsInput() {
    return this._requiredApprovalTags;
  }

  // service_config - computed: false, optional: true, required: false
  private _serviceConfig?: { [key: string]: string }; 
  public get serviceConfig() {
    return this.getStringMapAttribute('service_config');
  }
  public set serviceConfig(value: { [key: string]: string }) {
    this._serviceConfig = value;
  }
  public resetServiceConfig() {
    this._serviceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigInput() {
    return this._serviceConfig;
  }

  // service_kind - computed: false, optional: true, required: false
  private _serviceKind?: string; 
  public get serviceKind() {
    return this.getStringAttribute('service_kind');
  }
  public set serviceKind(value: string) {
    this._serviceKind = value;
  }
  public resetServiceKind() {
    this._serviceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKindInput() {
    return this._serviceKind;
  }
}

export class ProjectEnvironmentsApprovalSettingsList extends cdktf.ComplexList {
  public internalValue? : ProjectEnvironmentsApprovalSettings[] | cdktf.IResolvable

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
  public get(index: number): ProjectEnvironmentsApprovalSettingsOutputReference {
    return new ProjectEnvironmentsApprovalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectEnvironments {
  /**
  * The color swatch as an RGB hex value with no leading `#`. For example: `000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#color Project#color}
  */
  readonly color: string;
  /**
  * Set to `true` if this environment requires confirmation for flag and segment changes. This field will default to `false` when not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#confirm_changes Project#confirm_changes}
  */
  readonly confirmChanges?: boolean | cdktf.IResolvable;
  /**
  * Denotes whether the environment is critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#critical Project#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to enable data export for every flag created in this environment after you configure this argument. This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#default_track_events Project#default_track_events}
  */
  readonly defaultTrackEvents?: boolean | cdktf.IResolvable;
  /**
  * The TTL for the environment. This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#default_ttl Project#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * The project-unique key for the environment. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#key Project#key}
  */
  readonly key: string;
  /**
  * The name of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Set to `true` if this environment requires comments for flag and segment changes. This field will default to `false` when not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#require_comments Project#require_comments}
  */
  readonly requireComments?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. This field will default to `false` when not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#secure_mode Project#secure_mode}
  */
  readonly secureMode?: boolean | cdktf.IResolvable;
  /**
  * Tags associated with your resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#tags Project#tags}
  */
  readonly tags?: string[];
  /**
  * approval_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#approval_settings Project#approval_settings}
  */
  readonly approvalSettings?: ProjectEnvironmentsApprovalSettings[] | cdktf.IResolvable;
}

export function projectEnvironmentsToTerraform(struct?: ProjectEnvironments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    confirm_changes: cdktf.booleanToTerraform(struct!.confirmChanges),
    critical: cdktf.booleanToTerraform(struct!.critical),
    default_track_events: cdktf.booleanToTerraform(struct!.defaultTrackEvents),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    require_comments: cdktf.booleanToTerraform(struct!.requireComments),
    secure_mode: cdktf.booleanToTerraform(struct!.secureMode),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    approval_settings: cdktf.listMapper(projectEnvironmentsApprovalSettingsToTerraform, true)(struct!.approvalSettings),
  }
}


export function projectEnvironmentsToHclTerraform(struct?: ProjectEnvironments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirm_changes: {
      value: cdktf.booleanToHclTerraform(struct!.confirmChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    critical: {
      value: cdktf.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_track_events: {
      value: cdktf.booleanToHclTerraform(struct!.defaultTrackEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    require_comments: {
      value: cdktf.booleanToHclTerraform(struct!.requireComments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secure_mode: {
      value: cdktf.booleanToHclTerraform(struct!.secureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    approval_settings: {
      value: cdktf.listMapperHcl(projectEnvironmentsApprovalSettingsToHclTerraform, true)(struct!.approvalSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectEnvironmentsApprovalSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectEnvironmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectEnvironments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._confirmChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmChanges = this._confirmChanges;
    }
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._defaultTrackEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTrackEvents = this._defaultTrackEvents;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requireComments !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireComments = this._requireComments;
    }
    if (this._secureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureMode = this._secureMode;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._approvalSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalSettings = this._approvalSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectEnvironments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._confirmChanges = undefined;
      this._critical = undefined;
      this._defaultTrackEvents = undefined;
      this._defaultTtl = undefined;
      this._key = undefined;
      this._name = undefined;
      this._requireComments = undefined;
      this._secureMode = undefined;
      this._tags = undefined;
      this._approvalSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._confirmChanges = value.confirmChanges;
      this._critical = value.critical;
      this._defaultTrackEvents = value.defaultTrackEvents;
      this._defaultTtl = value.defaultTtl;
      this._key = value.key;
      this._name = value.name;
      this._requireComments = value.requireComments;
      this._secureMode = value.secureMode;
      this._tags = value.tags;
      this._approvalSettings.internalValue = value.approvalSettings;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // client_side_id - computed: true, optional: false, required: false
  public get clientSideId() {
    return this.getStringAttribute('client_side_id');
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // confirm_changes - computed: false, optional: true, required: false
  private _confirmChanges?: boolean | cdktf.IResolvable; 
  public get confirmChanges() {
    return this.getBooleanAttribute('confirm_changes');
  }
  public set confirmChanges(value: boolean | cdktf.IResolvable) {
    this._confirmChanges = value;
  }
  public resetConfirmChanges() {
    this._confirmChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmChangesInput() {
    return this._confirmChanges;
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // default_track_events - computed: false, optional: true, required: false
  private _defaultTrackEvents?: boolean | cdktf.IResolvable; 
  public get defaultTrackEvents() {
    return this.getBooleanAttribute('default_track_events');
  }
  public set defaultTrackEvents(value: boolean | cdktf.IResolvable) {
    this._defaultTrackEvents = value;
  }
  public resetDefaultTrackEvents() {
    this._defaultTrackEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTrackEventsInput() {
    return this._defaultTrackEvents;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mobile_key - computed: true, optional: false, required: false
  public get mobileKey() {
    return this.getStringAttribute('mobile_key');
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

  // require_comments - computed: false, optional: true, required: false
  private _requireComments?: boolean | cdktf.IResolvable; 
  public get requireComments() {
    return this.getBooleanAttribute('require_comments');
  }
  public set requireComments(value: boolean | cdktf.IResolvable) {
    this._requireComments = value;
  }
  public resetRequireComments() {
    this._requireComments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCommentsInput() {
    return this._requireComments;
  }

  // secure_mode - computed: false, optional: true, required: false
  private _secureMode?: boolean | cdktf.IResolvable; 
  public get secureMode() {
    return this.getBooleanAttribute('secure_mode');
  }
  public set secureMode(value: boolean | cdktf.IResolvable) {
    this._secureMode = value;
  }
  public resetSecureMode() {
    this._secureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureModeInput() {
    return this._secureMode;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // approval_settings - computed: false, optional: true, required: false
  private _approvalSettings = new ProjectEnvironmentsApprovalSettingsList(this, "approval_settings", false);
  public get approvalSettings() {
    return this._approvalSettings;
  }
  public putApprovalSettings(value: ProjectEnvironmentsApprovalSettings[] | cdktf.IResolvable) {
    this._approvalSettings.internalValue = value;
  }
  public resetApprovalSettings() {
    this._approvalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalSettingsInput() {
    return this._approvalSettings.internalValue;
  }
}

export class ProjectEnvironmentsList extends cdktf.ComplexList {
  public internalValue? : ProjectEnvironments[] | cdktf.IResolvable

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
  public get(index: number): ProjectEnvironmentsOutputReference {
    return new ProjectEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project launchdarkly_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/project launchdarkly_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_project',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.26.0',
        providerVersionConstraint: '2.26.0'
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
    this._includeInSnippet = config.includeInSnippet;
    this._key = config.key;
    this._name = config.name;
    this._tags = config.tags;
    this._defaultClientSideAvailability.internalValue = config.defaultClientSideAvailability;
    this._environments.internalValue = config.environments;
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

  // include_in_snippet - computed: true, optional: true, required: false
  private _includeInSnippet?: boolean | cdktf.IResolvable; 
  public get includeInSnippet() {
    return this.getBooleanAttribute('include_in_snippet');
  }
  public set includeInSnippet(value: boolean | cdktf.IResolvable) {
    this._includeInSnippet = value;
  }
  public resetIncludeInSnippet() {
    this._includeInSnippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInSnippetInput() {
    return this._includeInSnippet;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // default_client_side_availability - computed: false, optional: true, required: false
  private _defaultClientSideAvailability = new ProjectDefaultClientSideAvailabilityList(this, "default_client_side_availability", false);
  public get defaultClientSideAvailability() {
    return this._defaultClientSideAvailability;
  }
  public putDefaultClientSideAvailability(value: ProjectDefaultClientSideAvailability[] | cdktf.IResolvable) {
    this._defaultClientSideAvailability.internalValue = value;
  }
  public resetDefaultClientSideAvailability() {
    this._defaultClientSideAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClientSideAvailabilityInput() {
    return this._defaultClientSideAvailability.internalValue;
  }

  // environments - computed: false, optional: false, required: true
  private _environments = new ProjectEnvironmentsList(this, "environments", false);
  public get environments() {
    return this._environments;
  }
  public putEnvironments(value: ProjectEnvironments[] | cdktf.IResolvable) {
    this._environments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_in_snippet: cdktf.booleanToTerraform(this._includeInSnippet),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      default_client_side_availability: cdktf.listMapper(projectDefaultClientSideAvailabilityToTerraform, true)(this._defaultClientSideAvailability.internalValue),
      environments: cdktf.listMapper(projectEnvironmentsToTerraform, true)(this._environments.internalValue),
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
      include_in_snippet: {
        value: cdktf.booleanToHclTerraform(this._includeInSnippet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_client_side_availability: {
        value: cdktf.listMapperHcl(projectDefaultClientSideAvailabilityToHclTerraform, true)(this._defaultClientSideAvailability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectDefaultClientSideAvailabilityList",
      },
      environments: {
        value: cdktf.listMapperHcl(projectEnvironmentsToHclTerraform, true)(this._environments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectEnvironmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
