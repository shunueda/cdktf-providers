// https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * More verbose description of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#description SecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * Name of the policy (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#project_key SecurityPolicy#project_key}
  */
  readonly projectKey?: string;
  /**
  * Type of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#type SecurityPolicy#type}
  */
  readonly type: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#rule SecurityPolicy#rule}
  */
  readonly rule?: SecurityPolicyRule[] | cdktf.IResolvable;
}
export interface SecurityPolicyRuleActionsBlockDownload {
  /**
  * Whether or not to block download of artifacts that meet the artifact and severity `filters` for the associated `xray_watch` resource. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#active SecurityPolicy#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to block download of artifacts that meet the artifact `filters` for the associated `xray_watch` resource but have not been scanned yet. Can not be set to `true` if attribute `active` is `false`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#unscanned SecurityPolicy#unscanned}
  */
  readonly unscanned?: boolean | cdktf.IResolvable;
}

export function securityPolicyRuleActionsBlockDownloadToTerraform(struct?: SecurityPolicyRuleActionsBlockDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    unscanned: cdktf.booleanToTerraform(struct!.unscanned),
  }
}


export function securityPolicyRuleActionsBlockDownloadToHclTerraform(struct?: SecurityPolicyRuleActionsBlockDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unscanned: {
      value: cdktf.booleanToHclTerraform(struct!.unscanned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleActionsBlockDownloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRuleActionsBlockDownload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._unscanned !== undefined) {
      hasAnyValues = true;
      internalValueResult.unscanned = this._unscanned;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleActionsBlockDownload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._unscanned = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._unscanned = value.unscanned;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // unscanned - computed: true, optional: true, required: false
  private _unscanned?: boolean | cdktf.IResolvable; 
  public get unscanned() {
    return this.getBooleanAttribute('unscanned');
  }
  public set unscanned(value: boolean | cdktf.IResolvable) {
    this._unscanned = value;
  }
  public resetUnscanned() {
    this._unscanned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unscannedInput() {
    return this._unscanned;
  }
}

export class SecurityPolicyRuleActionsBlockDownloadList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRuleActionsBlockDownload[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleActionsBlockDownloadOutputReference {
    return new SecurityPolicyRuleActionsBlockDownloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRuleActions {
  /**
  * Blocks Release Bundle distribution to Edge nodes if a violation is found. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#block_release_bundle_distribution SecurityPolicy#block_release_bundle_distribution}
  */
  readonly blockReleaseBundleDistribution?: boolean | cdktf.IResolvable;
  /**
  * Blocks Release Bundle promotion if a violation is found. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#block_release_bundle_promotion SecurityPolicy#block_release_bundle_promotion}
  */
  readonly blockReleaseBundlePromotion?: boolean | cdktf.IResolvable;
  /**
  * Allow grace period for certain number of days. All violations will be ignored during this time. To be used only if `fail_build` is enabled. Default value is `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#build_failure_grace_period_in_days SecurityPolicy#build_failure_grace_period_in_days}
  */
  readonly buildFailureGracePeriodInDays?: number;
  /**
  * Create Jira Ticket for this Policy Violation. Requires configured Jira integration. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#create_ticket_enabled SecurityPolicy#create_ticket_enabled}
  */
  readonly createTicketEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the related CI build should be marked as failed if a violation is triggered. This option is only available when the policy is applied to an `xray_watch` resource with a `type` of `builds`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#fail_build SecurityPolicy#fail_build}
  */
  readonly failBuild?: boolean | cdktf.IResolvable;
  /**
  * A list of email addressed that will get emailed when a violation is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#mails SecurityPolicy#mails}
  */
  readonly mails?: string[];
  /**
  * Sends an email message to component deployer with details about the generated Violations. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#notify_deployer SecurityPolicy#notify_deployer}
  */
  readonly notifyDeployer?: boolean | cdktf.IResolvable;
  /**
  * Sends an email message to all configured recipients inside a specific watch with details about the generated Violations. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#notify_watch_recipients SecurityPolicy#notify_watch_recipients}
  */
  readonly notifyWatchRecipients?: boolean | cdktf.IResolvable;
  /**
  * A list of Xray-configured webhook URLs to be invoked if a violation is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#webhooks SecurityPolicy#webhooks}
  */
  readonly webhooks?: string[];
  /**
  * block_download block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#block_download SecurityPolicy#block_download}
  */
  readonly blockDownload?: SecurityPolicyRuleActionsBlockDownload[] | cdktf.IResolvable;
}

export function securityPolicyRuleActionsToTerraform(struct?: SecurityPolicyRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_release_bundle_distribution: cdktf.booleanToTerraform(struct!.blockReleaseBundleDistribution),
    block_release_bundle_promotion: cdktf.booleanToTerraform(struct!.blockReleaseBundlePromotion),
    build_failure_grace_period_in_days: cdktf.numberToTerraform(struct!.buildFailureGracePeriodInDays),
    create_ticket_enabled: cdktf.booleanToTerraform(struct!.createTicketEnabled),
    fail_build: cdktf.booleanToTerraform(struct!.failBuild),
    mails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mails),
    notify_deployer: cdktf.booleanToTerraform(struct!.notifyDeployer),
    notify_watch_recipients: cdktf.booleanToTerraform(struct!.notifyWatchRecipients),
    webhooks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webhooks),
    block_download: cdktf.listMapper(securityPolicyRuleActionsBlockDownloadToTerraform, true)(struct!.blockDownload),
  }
}


export function securityPolicyRuleActionsToHclTerraform(struct?: SecurityPolicyRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_release_bundle_distribution: {
      value: cdktf.booleanToHclTerraform(struct!.blockReleaseBundleDistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_release_bundle_promotion: {
      value: cdktf.booleanToHclTerraform(struct!.blockReleaseBundlePromotion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_failure_grace_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.buildFailureGracePeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_ticket_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.createTicketEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_build: {
      value: cdktf.booleanToHclTerraform(struct!.failBuild),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mails),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    notify_deployer: {
      value: cdktf.booleanToHclTerraform(struct!.notifyDeployer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_watch_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.notifyWatchRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webhooks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webhooks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    block_download: {
      value: cdktf.listMapperHcl(securityPolicyRuleActionsBlockDownloadToHclTerraform, true)(struct!.blockDownload),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleActionsBlockDownloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockReleaseBundleDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockReleaseBundleDistribution = this._blockReleaseBundleDistribution;
    }
    if (this._blockReleaseBundlePromotion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockReleaseBundlePromotion = this._blockReleaseBundlePromotion;
    }
    if (this._buildFailureGracePeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildFailureGracePeriodInDays = this._buildFailureGracePeriodInDays;
    }
    if (this._createTicketEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTicketEnabled = this._createTicketEnabled;
    }
    if (this._failBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.failBuild = this._failBuild;
    }
    if (this._mails !== undefined) {
      hasAnyValues = true;
      internalValueResult.mails = this._mails;
    }
    if (this._notifyDeployer !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyDeployer = this._notifyDeployer;
    }
    if (this._notifyWatchRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyWatchRecipients = this._notifyWatchRecipients;
    }
    if (this._webhooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhooks = this._webhooks;
    }
    if (this._blockDownload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDownload = this._blockDownload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockReleaseBundleDistribution = undefined;
      this._blockReleaseBundlePromotion = undefined;
      this._buildFailureGracePeriodInDays = undefined;
      this._createTicketEnabled = undefined;
      this._failBuild = undefined;
      this._mails = undefined;
      this._notifyDeployer = undefined;
      this._notifyWatchRecipients = undefined;
      this._webhooks = undefined;
      this._blockDownload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockReleaseBundleDistribution = value.blockReleaseBundleDistribution;
      this._blockReleaseBundlePromotion = value.blockReleaseBundlePromotion;
      this._buildFailureGracePeriodInDays = value.buildFailureGracePeriodInDays;
      this._createTicketEnabled = value.createTicketEnabled;
      this._failBuild = value.failBuild;
      this._mails = value.mails;
      this._notifyDeployer = value.notifyDeployer;
      this._notifyWatchRecipients = value.notifyWatchRecipients;
      this._webhooks = value.webhooks;
      this._blockDownload.internalValue = value.blockDownload;
    }
  }

  // block_release_bundle_distribution - computed: true, optional: true, required: false
  private _blockReleaseBundleDistribution?: boolean | cdktf.IResolvable; 
  public get blockReleaseBundleDistribution() {
    return this.getBooleanAttribute('block_release_bundle_distribution');
  }
  public set blockReleaseBundleDistribution(value: boolean | cdktf.IResolvable) {
    this._blockReleaseBundleDistribution = value;
  }
  public resetBlockReleaseBundleDistribution() {
    this._blockReleaseBundleDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockReleaseBundleDistributionInput() {
    return this._blockReleaseBundleDistribution;
  }

  // block_release_bundle_promotion - computed: true, optional: true, required: false
  private _blockReleaseBundlePromotion?: boolean | cdktf.IResolvable; 
  public get blockReleaseBundlePromotion() {
    return this.getBooleanAttribute('block_release_bundle_promotion');
  }
  public set blockReleaseBundlePromotion(value: boolean | cdktf.IResolvable) {
    this._blockReleaseBundlePromotion = value;
  }
  public resetBlockReleaseBundlePromotion() {
    this._blockReleaseBundlePromotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockReleaseBundlePromotionInput() {
    return this._blockReleaseBundlePromotion;
  }

  // build_failure_grace_period_in_days - computed: true, optional: true, required: false
  private _buildFailureGracePeriodInDays?: number; 
  public get buildFailureGracePeriodInDays() {
    return this.getNumberAttribute('build_failure_grace_period_in_days');
  }
  public set buildFailureGracePeriodInDays(value: number) {
    this._buildFailureGracePeriodInDays = value;
  }
  public resetBuildFailureGracePeriodInDays() {
    this._buildFailureGracePeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildFailureGracePeriodInDaysInput() {
    return this._buildFailureGracePeriodInDays;
  }

  // create_ticket_enabled - computed: true, optional: true, required: false
  private _createTicketEnabled?: boolean | cdktf.IResolvable; 
  public get createTicketEnabled() {
    return this.getBooleanAttribute('create_ticket_enabled');
  }
  public set createTicketEnabled(value: boolean | cdktf.IResolvable) {
    this._createTicketEnabled = value;
  }
  public resetCreateTicketEnabled() {
    this._createTicketEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTicketEnabledInput() {
    return this._createTicketEnabled;
  }

  // fail_build - computed: true, optional: true, required: false
  private _failBuild?: boolean | cdktf.IResolvable; 
  public get failBuild() {
    return this.getBooleanAttribute('fail_build');
  }
  public set failBuild(value: boolean | cdktf.IResolvable) {
    this._failBuild = value;
  }
  public resetFailBuild() {
    this._failBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failBuildInput() {
    return this._failBuild;
  }

  // mails - computed: false, optional: true, required: false
  private _mails?: string[]; 
  public get mails() {
    return cdktf.Fn.tolist(this.getListAttribute('mails'));
  }
  public set mails(value: string[]) {
    this._mails = value;
  }
  public resetMails() {
    this._mails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailsInput() {
    return this._mails;
  }

  // notify_deployer - computed: true, optional: true, required: false
  private _notifyDeployer?: boolean | cdktf.IResolvable; 
  public get notifyDeployer() {
    return this.getBooleanAttribute('notify_deployer');
  }
  public set notifyDeployer(value: boolean | cdktf.IResolvable) {
    this._notifyDeployer = value;
  }
  public resetNotifyDeployer() {
    this._notifyDeployer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDeployerInput() {
    return this._notifyDeployer;
  }

  // notify_watch_recipients - computed: true, optional: true, required: false
  private _notifyWatchRecipients?: boolean | cdktf.IResolvable; 
  public get notifyWatchRecipients() {
    return this.getBooleanAttribute('notify_watch_recipients');
  }
  public set notifyWatchRecipients(value: boolean | cdktf.IResolvable) {
    this._notifyWatchRecipients = value;
  }
  public resetNotifyWatchRecipients() {
    this._notifyWatchRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWatchRecipientsInput() {
    return this._notifyWatchRecipients;
  }

  // webhooks - computed: false, optional: true, required: false
  private _webhooks?: string[]; 
  public get webhooks() {
    return cdktf.Fn.tolist(this.getListAttribute('webhooks'));
  }
  public set webhooks(value: string[]) {
    this._webhooks = value;
  }
  public resetWebhooks() {
    this._webhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksInput() {
    return this._webhooks;
  }

  // block_download - computed: false, optional: true, required: false
  private _blockDownload = new SecurityPolicyRuleActionsBlockDownloadList(this, "block_download", false);
  public get blockDownload() {
    return this._blockDownload;
  }
  public putBlockDownload(value: SecurityPolicyRuleActionsBlockDownload[] | cdktf.IResolvable) {
    this._blockDownload.internalValue = value;
  }
  public resetBlockDownload() {
    this._blockDownload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDownloadInput() {
    return this._blockDownload.internalValue;
  }
}

export class SecurityPolicyRuleActionsList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRuleActions[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleActionsOutputReference {
    return new SecurityPolicyRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRuleCriteriaCvssRange {
  /**
  * The beginning of the range of CVS scores (from 1-10, float) to flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#from SecurityPolicy#from}
  */
  readonly from: number;
  /**
  * The end of the range of CVS scores (from 1-10, float) to flag. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#to SecurityPolicy#to}
  */
  readonly to: number;
}

export function securityPolicyRuleCriteriaCvssRangeToTerraform(struct?: SecurityPolicyRuleCriteriaCvssRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function securityPolicyRuleCriteriaCvssRangeToHclTerraform(struct?: SecurityPolicyRuleCriteriaCvssRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleCriteriaCvssRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRuleCriteriaCvssRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleCriteriaCvssRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class SecurityPolicyRuleCriteriaCvssRangeList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRuleCriteriaCvssRange[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleCriteriaCvssRangeOutputReference {
    return new SecurityPolicyRuleCriteriaCvssRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRuleCriteriaExposures {
  /**
  * Applications exposures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#applications SecurityPolicy#applications}
  */
  readonly applications?: boolean | cdktf.IResolvable;
  /**
  * Iac exposures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#iac SecurityPolicy#iac}
  */
  readonly iac?: boolean | cdktf.IResolvable;
  /**
  * The minimum security vulnerability severity that will be impacted by the policy. Valid values: `All Severities`, `Critical`, `High`, `Medium`, `Low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#min_severity SecurityPolicy#min_severity}
  */
  readonly minSeverity?: string;
  /**
  * Secrets exposures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#secrets SecurityPolicy#secrets}
  */
  readonly secrets?: boolean | cdktf.IResolvable;
  /**
  * Services exposures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#services SecurityPolicy#services}
  */
  readonly services?: boolean | cdktf.IResolvable;
}

export function securityPolicyRuleCriteriaExposuresToTerraform(struct?: SecurityPolicyRuleCriteriaExposures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.booleanToTerraform(struct!.applications),
    iac: cdktf.booleanToTerraform(struct!.iac),
    min_severity: cdktf.stringToTerraform(struct!.minSeverity),
    secrets: cdktf.booleanToTerraform(struct!.secrets),
    services: cdktf.booleanToTerraform(struct!.services),
  }
}


export function securityPolicyRuleCriteriaExposuresToHclTerraform(struct?: SecurityPolicyRuleCriteriaExposures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.booleanToHclTerraform(struct!.applications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iac: {
      value: cdktf.booleanToHclTerraform(struct!.iac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_severity: {
      value: cdktf.stringToHclTerraform(struct!.minSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.booleanToHclTerraform(struct!.secrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.booleanToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleCriteriaExposuresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRuleCriteriaExposures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._iac !== undefined) {
      hasAnyValues = true;
      internalValueResult.iac = this._iac;
    }
    if (this._minSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSeverity = this._minSeverity;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleCriteriaExposures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._iac = undefined;
      this._minSeverity = undefined;
      this._secrets = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._iac = value.iac;
      this._minSeverity = value.minSeverity;
      this._secrets = value.secrets;
      this._services = value.services;
    }
  }

  // applications - computed: true, optional: true, required: false
  private _applications?: boolean | cdktf.IResolvable; 
  public get applications() {
    return this.getBooleanAttribute('applications');
  }
  public set applications(value: boolean | cdktf.IResolvable) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // iac - computed: true, optional: true, required: false
  private _iac?: boolean | cdktf.IResolvable; 
  public get iac() {
    return this.getBooleanAttribute('iac');
  }
  public set iac(value: boolean | cdktf.IResolvable) {
    this._iac = value;
  }
  public resetIac() {
    this._iac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iacInput() {
    return this._iac;
  }

  // min_severity - computed: true, optional: true, required: false
  private _minSeverity?: string; 
  public get minSeverity() {
    return this.getStringAttribute('min_severity');
  }
  public set minSeverity(value: string) {
    this._minSeverity = value;
  }
  public resetMinSeverity() {
    this._minSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSeverityInput() {
    return this._minSeverity;
  }

  // secrets - computed: true, optional: true, required: false
  private _secrets?: boolean | cdktf.IResolvable; 
  public get secrets() {
    return this.getBooleanAttribute('secrets');
  }
  public set secrets(value: boolean | cdktf.IResolvable) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // services - computed: true, optional: true, required: false
  private _services?: boolean | cdktf.IResolvable; 
  public get services() {
    return this.getBooleanAttribute('services');
  }
  public set services(value: boolean | cdktf.IResolvable) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}

export class SecurityPolicyRuleCriteriaExposuresList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRuleCriteriaExposures[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleCriteriaExposuresOutputReference {
    return new SecurityPolicyRuleCriteriaExposuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRuleCriteria {
  /**
  * Mark to skip CVEs that are not applicable in the context of the artifact. The contextual analysis operation might be long and affect build time if the `fail_build` action is set.
  * 
  * ~>Only supported by JFrog Advanced Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#applicable_cves_only SecurityPolicy#applicable_cves_only}
  */
  readonly applicableCvesOnly?: boolean | cdktf.IResolvable;
  /**
  * Issues that do not have a fixed version are not generated until a fixed version is available. Must be `false` with `malicious_package` enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#fix_version_dependant SecurityPolicy#fix_version_dependant}
  */
  readonly fixVersionDependant?: boolean | cdktf.IResolvable;
  /**
  * Generating a violation on a malicious package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#malicious_package SecurityPolicy#malicious_package}
  */
  readonly maliciousPackage?: boolean | cdktf.IResolvable;
  /**
  * The minimum security vulnerability severity that will be impacted by the policy. Valid values: `All Severities`, `Critical`, `High`, `Medium`, `Low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#min_severity SecurityPolicy#min_severity}
  */
  readonly minSeverity?: string;
  /**
  * The package name to create a rule for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#package_name SecurityPolicy#package_name}
  */
  readonly packageName?: string;
  /**
  * The package type to create a rule for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#package_type SecurityPolicy#package_type}
  */
  readonly packageType?: string;
  /**
  * package versions to apply the rule on can be (,) for any version or an open range (1,4) or closed [1,4] or one version [1]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#package_versions SecurityPolicy#package_versions}
  */
  readonly packageVersions?: string[];
  /**
  * Creates policy rules for specific vulnerability IDs that you input. You can add multiple vulnerabilities IDs. CVEs and Xray IDs are supported. Example - CVE-2015-20107, XRAY-2344
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#vulnerability_ids SecurityPolicy#vulnerability_ids}
  */
  readonly vulnerabilityIds?: string[];
  /**
  * cvss_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#cvss_range SecurityPolicy#cvss_range}
  */
  readonly cvssRange?: SecurityPolicyRuleCriteriaCvssRange[] | cdktf.IResolvable;
  /**
  * exposures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#exposures SecurityPolicy#exposures}
  */
  readonly exposures?: SecurityPolicyRuleCriteriaExposures[] | cdktf.IResolvable;
}

export function securityPolicyRuleCriteriaToTerraform(struct?: SecurityPolicyRuleCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applicable_cves_only: cdktf.booleanToTerraform(struct!.applicableCvesOnly),
    fix_version_dependant: cdktf.booleanToTerraform(struct!.fixVersionDependant),
    malicious_package: cdktf.booleanToTerraform(struct!.maliciousPackage),
    min_severity: cdktf.stringToTerraform(struct!.minSeverity),
    package_name: cdktf.stringToTerraform(struct!.packageName),
    package_type: cdktf.stringToTerraform(struct!.packageType),
    package_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageVersions),
    vulnerability_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vulnerabilityIds),
    cvss_range: cdktf.listMapper(securityPolicyRuleCriteriaCvssRangeToTerraform, true)(struct!.cvssRange),
    exposures: cdktf.listMapper(securityPolicyRuleCriteriaExposuresToTerraform, true)(struct!.exposures),
  }
}


export function securityPolicyRuleCriteriaToHclTerraform(struct?: SecurityPolicyRuleCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applicable_cves_only: {
      value: cdktf.booleanToHclTerraform(struct!.applicableCvesOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fix_version_dependant: {
      value: cdktf.booleanToHclTerraform(struct!.fixVersionDependant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    malicious_package: {
      value: cdktf.booleanToHclTerraform(struct!.maliciousPackage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_severity: {
      value: cdktf.stringToHclTerraform(struct!.minSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_name: {
      value: cdktf.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_type: {
      value: cdktf.stringToHclTerraform(struct!.packageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vulnerability_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vulnerabilityIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cvss_range: {
      value: cdktf.listMapperHcl(securityPolicyRuleCriteriaCvssRangeToHclTerraform, true)(struct!.cvssRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleCriteriaCvssRangeList",
    },
    exposures: {
      value: cdktf.listMapperHcl(securityPolicyRuleCriteriaExposuresToHclTerraform, true)(struct!.exposures),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleCriteriaExposuresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRuleCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicableCvesOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicableCvesOnly = this._applicableCvesOnly;
    }
    if (this._fixVersionDependant !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixVersionDependant = this._fixVersionDependant;
    }
    if (this._maliciousPackage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousPackage = this._maliciousPackage;
    }
    if (this._minSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSeverity = this._minSeverity;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._packageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageType = this._packageType;
    }
    if (this._packageVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageVersions = this._packageVersions;
    }
    if (this._vulnerabilityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityIds = this._vulnerabilityIds;
    }
    if (this._cvssRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvssRange = this._cvssRange?.internalValue;
    }
    if (this._exposures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposures = this._exposures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicableCvesOnly = undefined;
      this._fixVersionDependant = undefined;
      this._maliciousPackage = undefined;
      this._minSeverity = undefined;
      this._packageName = undefined;
      this._packageType = undefined;
      this._packageVersions = undefined;
      this._vulnerabilityIds = undefined;
      this._cvssRange.internalValue = undefined;
      this._exposures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicableCvesOnly = value.applicableCvesOnly;
      this._fixVersionDependant = value.fixVersionDependant;
      this._maliciousPackage = value.maliciousPackage;
      this._minSeverity = value.minSeverity;
      this._packageName = value.packageName;
      this._packageType = value.packageType;
      this._packageVersions = value.packageVersions;
      this._vulnerabilityIds = value.vulnerabilityIds;
      this._cvssRange.internalValue = value.cvssRange;
      this._exposures.internalValue = value.exposures;
    }
  }

  // applicable_cves_only - computed: false, optional: true, required: false
  private _applicableCvesOnly?: boolean | cdktf.IResolvable; 
  public get applicableCvesOnly() {
    return this.getBooleanAttribute('applicable_cves_only');
  }
  public set applicableCvesOnly(value: boolean | cdktf.IResolvable) {
    this._applicableCvesOnly = value;
  }
  public resetApplicableCvesOnly() {
    this._applicableCvesOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicableCvesOnlyInput() {
    return this._applicableCvesOnly;
  }

  // fix_version_dependant - computed: false, optional: true, required: false
  private _fixVersionDependant?: boolean | cdktf.IResolvable; 
  public get fixVersionDependant() {
    return this.getBooleanAttribute('fix_version_dependant');
  }
  public set fixVersionDependant(value: boolean | cdktf.IResolvable) {
    this._fixVersionDependant = value;
  }
  public resetFixVersionDependant() {
    this._fixVersionDependant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixVersionDependantInput() {
    return this._fixVersionDependant;
  }

  // malicious_package - computed: false, optional: true, required: false
  private _maliciousPackage?: boolean | cdktf.IResolvable; 
  public get maliciousPackage() {
    return this.getBooleanAttribute('malicious_package');
  }
  public set maliciousPackage(value: boolean | cdktf.IResolvable) {
    this._maliciousPackage = value;
  }
  public resetMaliciousPackage() {
    this._maliciousPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousPackageInput() {
    return this._maliciousPackage;
  }

  // min_severity - computed: false, optional: true, required: false
  private _minSeverity?: string; 
  public get minSeverity() {
    return this.getStringAttribute('min_severity');
  }
  public set minSeverity(value: string) {
    this._minSeverity = value;
  }
  public resetMinSeverity() {
    this._minSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSeverityInput() {
    return this._minSeverity;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // package_versions - computed: false, optional: true, required: false
  private _packageVersions?: string[]; 
  public get packageVersions() {
    return this.getListAttribute('package_versions');
  }
  public set packageVersions(value: string[]) {
    this._packageVersions = value;
  }
  public resetPackageVersions() {
    this._packageVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionsInput() {
    return this._packageVersions;
  }

  // vulnerability_ids - computed: false, optional: true, required: false
  private _vulnerabilityIds?: string[]; 
  public get vulnerabilityIds() {
    return this.getListAttribute('vulnerability_ids');
  }
  public set vulnerabilityIds(value: string[]) {
    this._vulnerabilityIds = value;
  }
  public resetVulnerabilityIds() {
    this._vulnerabilityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityIdsInput() {
    return this._vulnerabilityIds;
  }

  // cvss_range - computed: false, optional: true, required: false
  private _cvssRange = new SecurityPolicyRuleCriteriaCvssRangeList(this, "cvss_range", false);
  public get cvssRange() {
    return this._cvssRange;
  }
  public putCvssRange(value: SecurityPolicyRuleCriteriaCvssRange[] | cdktf.IResolvable) {
    this._cvssRange.internalValue = value;
  }
  public resetCvssRange() {
    this._cvssRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvssRangeInput() {
    return this._cvssRange.internalValue;
  }

  // exposures - computed: false, optional: true, required: false
  private _exposures = new SecurityPolicyRuleCriteriaExposuresList(this, "exposures", false);
  public get exposures() {
    return this._exposures;
  }
  public putExposures(value: SecurityPolicyRuleCriteriaExposures[] | cdktf.IResolvable) {
    this._exposures.internalValue = value;
  }
  public resetExposures() {
    this._exposures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposuresInput() {
    return this._exposures.internalValue;
  }
}

export class SecurityPolicyRuleCriteriaList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRuleCriteria[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleCriteriaOutputReference {
    return new SecurityPolicyRuleCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRule {
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Integer describing the rule priority. Must be at least 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#priority SecurityPolicy#priority}
  */
  readonly priority: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#actions SecurityPolicy#actions}
  */
  readonly actions?: SecurityPolicyRuleActions[] | cdktf.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#criteria SecurityPolicy#criteria}
  */
  readonly criteria?: SecurityPolicyRuleCriteria[] | cdktf.IResolvable;
}

export function securityPolicyRuleToTerraform(struct?: SecurityPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    actions: cdktf.listMapper(securityPolicyRuleActionsToTerraform, true)(struct!.actions),
    criteria: cdktf.listMapper(securityPolicyRuleCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function securityPolicyRuleToHclTerraform(struct?: SecurityPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    actions: {
      value: cdktf.listMapperHcl(securityPolicyRuleActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleActionsList",
    },
    criteria: {
      value: cdktf.listMapperHcl(securityPolicyRuleCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._actions.internalValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
      this._actions.internalValue = value.actions;
      this._criteria.internalValue = value.criteria;
    }
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

  // actions - computed: false, optional: true, required: false
  private _actions = new SecurityPolicyRuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: SecurityPolicyRuleActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new SecurityPolicyRuleCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: SecurityPolicyRuleCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class SecurityPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleOutputReference {
    return new SecurityPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy xray_security_policy}
*/
export class SecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityPolicy to import
  * @param importFromId The id of the existing SecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/security_policy xray_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.5',
        providerVersionConstraint: '3.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._type = config.type;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
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

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new SecurityPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      type: cdktf.stringToTerraform(this._type),
      rule: cdktf.listMapper(securityPolicyRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(securityPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityPolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
