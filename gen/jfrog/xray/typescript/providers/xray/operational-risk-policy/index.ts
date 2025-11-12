// https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OperationalRiskPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * More verbose description of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#description OperationalRiskPolicy#description}
  */
  readonly description?: string;
  /**
  * Name of the policy (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#name OperationalRiskPolicy#name}
  */
  readonly name: string;
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#project_key OperationalRiskPolicy#project_key}
  */
  readonly projectKey?: string;
  /**
  * Type of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#type OperationalRiskPolicy#type}
  */
  readonly type: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#rule OperationalRiskPolicy#rule}
  */
  readonly rule?: OperationalRiskPolicyRule[] | cdktf.IResolvable;
}
export interface OperationalRiskPolicyRuleActionsBlockDownload {
  /**
  * Whether or not to block download of artifacts that meet the artifact and severity `filters` for the associated `xray_watch` resource. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#active OperationalRiskPolicy#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to block download of artifacts that meet the artifact `filters` for the associated `xray_watch` resource but have not been scanned yet. Can not be set to `true` if attribute `active` is `false`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#unscanned OperationalRiskPolicy#unscanned}
  */
  readonly unscanned?: boolean | cdktf.IResolvable;
}

export function operationalRiskPolicyRuleActionsBlockDownloadToTerraform(struct?: OperationalRiskPolicyRuleActionsBlockDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    unscanned: cdktf.booleanToTerraform(struct!.unscanned),
  }
}


export function operationalRiskPolicyRuleActionsBlockDownloadToHclTerraform(struct?: OperationalRiskPolicyRuleActionsBlockDownload | cdktf.IResolvable): any {
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

export class OperationalRiskPolicyRuleActionsBlockDownloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRiskPolicyRuleActionsBlockDownload | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRiskPolicyRuleActionsBlockDownload | cdktf.IResolvable | undefined) {
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

export class OperationalRiskPolicyRuleActionsBlockDownloadList extends cdktf.ComplexList {
  public internalValue? : OperationalRiskPolicyRuleActionsBlockDownload[] | cdktf.IResolvable

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
  public get(index: number): OperationalRiskPolicyRuleActionsBlockDownloadOutputReference {
    return new OperationalRiskPolicyRuleActionsBlockDownloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRiskPolicyRuleActions {
  /**
  * Blocks Release Bundle distribution to Edge nodes if a violation is found. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#block_release_bundle_distribution OperationalRiskPolicy#block_release_bundle_distribution}
  */
  readonly blockReleaseBundleDistribution?: boolean | cdktf.IResolvable;
  /**
  * Blocks Release Bundle promotion if a violation is found. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#block_release_bundle_promotion OperationalRiskPolicy#block_release_bundle_promotion}
  */
  readonly blockReleaseBundlePromotion?: boolean | cdktf.IResolvable;
  /**
  * Allow grace period for certain number of days. All violations will be ignored during this time. To be used only if `fail_build` is enabled. Default value is `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#build_failure_grace_period_in_days OperationalRiskPolicy#build_failure_grace_period_in_days}
  */
  readonly buildFailureGracePeriodInDays?: number;
  /**
  * Create Jira Ticket for this Policy Violation. Requires configured Jira integration. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#create_ticket_enabled OperationalRiskPolicy#create_ticket_enabled}
  */
  readonly createTicketEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the related CI build should be marked as failed if a violation is triggered. This option is only available when the policy is applied to an `xray_watch` resource with a `type` of `builds`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#fail_build OperationalRiskPolicy#fail_build}
  */
  readonly failBuild?: boolean | cdktf.IResolvable;
  /**
  * A list of email addressed that will get emailed when a violation is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#mails OperationalRiskPolicy#mails}
  */
  readonly mails?: string[];
  /**
  * Sends an email message to component deployer with details about the generated Violations. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#notify_deployer OperationalRiskPolicy#notify_deployer}
  */
  readonly notifyDeployer?: boolean | cdktf.IResolvable;
  /**
  * Sends an email message to all configured recipients inside a specific watch with details about the generated Violations. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#notify_watch_recipients OperationalRiskPolicy#notify_watch_recipients}
  */
  readonly notifyWatchRecipients?: boolean | cdktf.IResolvable;
  /**
  * A list of Xray-configured webhook URLs to be invoked if a violation is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#webhooks OperationalRiskPolicy#webhooks}
  */
  readonly webhooks?: string[];
  /**
  * block_download block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#block_download OperationalRiskPolicy#block_download}
  */
  readonly blockDownload?: OperationalRiskPolicyRuleActionsBlockDownload[] | cdktf.IResolvable;
}

export function operationalRiskPolicyRuleActionsToTerraform(struct?: OperationalRiskPolicyRuleActions | cdktf.IResolvable): any {
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
    block_download: cdktf.listMapper(operationalRiskPolicyRuleActionsBlockDownloadToTerraform, true)(struct!.blockDownload),
  }
}


export function operationalRiskPolicyRuleActionsToHclTerraform(struct?: OperationalRiskPolicyRuleActions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(operationalRiskPolicyRuleActionsBlockDownloadToHclTerraform, true)(struct!.blockDownload),
      isBlock: true,
      type: "set",
      storageClassType: "OperationalRiskPolicyRuleActionsBlockDownloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OperationalRiskPolicyRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRiskPolicyRuleActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRiskPolicyRuleActions | cdktf.IResolvable | undefined) {
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
  private _blockDownload = new OperationalRiskPolicyRuleActionsBlockDownloadList(this, "block_download", true);
  public get blockDownload() {
    return this._blockDownload;
  }
  public putBlockDownload(value: OperationalRiskPolicyRuleActionsBlockDownload[] | cdktf.IResolvable) {
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

export class OperationalRiskPolicyRuleActionsList extends cdktf.ComplexList {
  public internalValue? : OperationalRiskPolicyRuleActions[] | cdktf.IResolvable

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
  public get(index: number): OperationalRiskPolicyRuleActionsOutputReference {
    return new OperationalRiskPolicyRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRiskPolicyRuleCriteriaOpRiskCustom {
  /**
  * Number of commits less than per year: 10, 25, 50, or 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#commits_less_than OperationalRiskPolicy#commits_less_than}
  */
  readonly commitsLessThan?: number;
  /**
  * Number of committers less than per year: 1, 2, 3, 4, or 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#committers_less_than OperationalRiskPolicy#committers_less_than}
  */
  readonly committersLessThan?: number;
  /**
  * Is End-of-Life?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#is_eol OperationalRiskPolicy#is_eol}
  */
  readonly isEol?: boolean | cdktf.IResolvable;
  /**
  * Number of releases since greater than: 1, 2, 3, 4, or 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#newer_versions_greater_than OperationalRiskPolicy#newer_versions_greater_than}
  */
  readonly newerVersionsGreaterThan?: number;
  /**
  * Release cadence less than per year: 1, 2, 3, 4, or 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#release_cadence_per_year_less_than OperationalRiskPolicy#release_cadence_per_year_less_than}
  */
  readonly releaseCadencePerYearLessThan?: number;
  /**
  * Release age greater than (in months): any value between 1 and 999
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#release_date_greater_than_months OperationalRiskPolicy#release_date_greater_than_months}
  */
  readonly releaseDateGreaterThanMonths?: number;
  /**
  * Risk severity: Low, Medium, High
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#risk OperationalRiskPolicy#risk}
  */
  readonly risk?: string;
  /**
  * Use `AND` between conditions (true) or `OR` condition (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#use_and_condition OperationalRiskPolicy#use_and_condition}
  */
  readonly useAndCondition: boolean | cdktf.IResolvable;
}

export function operationalRiskPolicyRuleCriteriaOpRiskCustomToTerraform(struct?: OperationalRiskPolicyRuleCriteriaOpRiskCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commits_less_than: cdktf.numberToTerraform(struct!.commitsLessThan),
    committers_less_than: cdktf.numberToTerraform(struct!.committersLessThan),
    is_eol: cdktf.booleanToTerraform(struct!.isEol),
    newer_versions_greater_than: cdktf.numberToTerraform(struct!.newerVersionsGreaterThan),
    release_cadence_per_year_less_than: cdktf.numberToTerraform(struct!.releaseCadencePerYearLessThan),
    release_date_greater_than_months: cdktf.numberToTerraform(struct!.releaseDateGreaterThanMonths),
    risk: cdktf.stringToTerraform(struct!.risk),
    use_and_condition: cdktf.booleanToTerraform(struct!.useAndCondition),
  }
}


export function operationalRiskPolicyRuleCriteriaOpRiskCustomToHclTerraform(struct?: OperationalRiskPolicyRuleCriteriaOpRiskCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commits_less_than: {
      value: cdktf.numberToHclTerraform(struct!.commitsLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    committers_less_than: {
      value: cdktf.numberToHclTerraform(struct!.committersLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_eol: {
      value: cdktf.booleanToHclTerraform(struct!.isEol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    newer_versions_greater_than: {
      value: cdktf.numberToHclTerraform(struct!.newerVersionsGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    release_cadence_per_year_less_than: {
      value: cdktf.numberToHclTerraform(struct!.releaseCadencePerYearLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    release_date_greater_than_months: {
      value: cdktf.numberToHclTerraform(struct!.releaseDateGreaterThanMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    risk: {
      value: cdktf.stringToHclTerraform(struct!.risk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_and_condition: {
      value: cdktf.booleanToHclTerraform(struct!.useAndCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OperationalRiskPolicyRuleCriteriaOpRiskCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRiskPolicyRuleCriteriaOpRiskCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitsLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitsLessThan = this._commitsLessThan;
    }
    if (this._committersLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.committersLessThan = this._committersLessThan;
    }
    if (this._isEol !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEol = this._isEol;
    }
    if (this._newerVersionsGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerVersionsGreaterThan = this._newerVersionsGreaterThan;
    }
    if (this._releaseCadencePerYearLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseCadencePerYearLessThan = this._releaseCadencePerYearLessThan;
    }
    if (this._releaseDateGreaterThanMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseDateGreaterThanMonths = this._releaseDateGreaterThanMonths;
    }
    if (this._risk !== undefined) {
      hasAnyValues = true;
      internalValueResult.risk = this._risk;
    }
    if (this._useAndCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAndCondition = this._useAndCondition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OperationalRiskPolicyRuleCriteriaOpRiskCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commitsLessThan = undefined;
      this._committersLessThan = undefined;
      this._isEol = undefined;
      this._newerVersionsGreaterThan = undefined;
      this._releaseCadencePerYearLessThan = undefined;
      this._releaseDateGreaterThanMonths = undefined;
      this._risk = undefined;
      this._useAndCondition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commitsLessThan = value.commitsLessThan;
      this._committersLessThan = value.committersLessThan;
      this._isEol = value.isEol;
      this._newerVersionsGreaterThan = value.newerVersionsGreaterThan;
      this._releaseCadencePerYearLessThan = value.releaseCadencePerYearLessThan;
      this._releaseDateGreaterThanMonths = value.releaseDateGreaterThanMonths;
      this._risk = value.risk;
      this._useAndCondition = value.useAndCondition;
    }
  }

  // commits_less_than - computed: false, optional: true, required: false
  private _commitsLessThan?: number; 
  public get commitsLessThan() {
    return this.getNumberAttribute('commits_less_than');
  }
  public set commitsLessThan(value: number) {
    this._commitsLessThan = value;
  }
  public resetCommitsLessThan() {
    this._commitsLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitsLessThanInput() {
    return this._commitsLessThan;
  }

  // committers_less_than - computed: false, optional: true, required: false
  private _committersLessThan?: number; 
  public get committersLessThan() {
    return this.getNumberAttribute('committers_less_than');
  }
  public set committersLessThan(value: number) {
    this._committersLessThan = value;
  }
  public resetCommittersLessThan() {
    this._committersLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get committersLessThanInput() {
    return this._committersLessThan;
  }

  // is_eol - computed: true, optional: true, required: false
  private _isEol?: boolean | cdktf.IResolvable; 
  public get isEol() {
    return this.getBooleanAttribute('is_eol');
  }
  public set isEol(value: boolean | cdktf.IResolvable) {
    this._isEol = value;
  }
  public resetIsEol() {
    this._isEol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEolInput() {
    return this._isEol;
  }

  // newer_versions_greater_than - computed: false, optional: true, required: false
  private _newerVersionsGreaterThan?: number; 
  public get newerVersionsGreaterThan() {
    return this.getNumberAttribute('newer_versions_greater_than');
  }
  public set newerVersionsGreaterThan(value: number) {
    this._newerVersionsGreaterThan = value;
  }
  public resetNewerVersionsGreaterThan() {
    this._newerVersionsGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerVersionsGreaterThanInput() {
    return this._newerVersionsGreaterThan;
  }

  // release_cadence_per_year_less_than - computed: false, optional: true, required: false
  private _releaseCadencePerYearLessThan?: number; 
  public get releaseCadencePerYearLessThan() {
    return this.getNumberAttribute('release_cadence_per_year_less_than');
  }
  public set releaseCadencePerYearLessThan(value: number) {
    this._releaseCadencePerYearLessThan = value;
  }
  public resetReleaseCadencePerYearLessThan() {
    this._releaseCadencePerYearLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCadencePerYearLessThanInput() {
    return this._releaseCadencePerYearLessThan;
  }

  // release_date_greater_than_months - computed: false, optional: true, required: false
  private _releaseDateGreaterThanMonths?: number; 
  public get releaseDateGreaterThanMonths() {
    return this.getNumberAttribute('release_date_greater_than_months');
  }
  public set releaseDateGreaterThanMonths(value: number) {
    this._releaseDateGreaterThanMonths = value;
  }
  public resetReleaseDateGreaterThanMonths() {
    this._releaseDateGreaterThanMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseDateGreaterThanMonthsInput() {
    return this._releaseDateGreaterThanMonths;
  }

  // risk - computed: true, optional: true, required: false
  private _risk?: string; 
  public get risk() {
    return this.getStringAttribute('risk');
  }
  public set risk(value: string) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // use_and_condition - computed: false, optional: false, required: true
  private _useAndCondition?: boolean | cdktf.IResolvable; 
  public get useAndCondition() {
    return this.getBooleanAttribute('use_and_condition');
  }
  public set useAndCondition(value: boolean | cdktf.IResolvable) {
    this._useAndCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useAndConditionInput() {
    return this._useAndCondition;
  }
}

export class OperationalRiskPolicyRuleCriteriaOpRiskCustomList extends cdktf.ComplexList {
  public internalValue? : OperationalRiskPolicyRuleCriteriaOpRiskCustom[] | cdktf.IResolvable

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
  public get(index: number): OperationalRiskPolicyRuleCriteriaOpRiskCustomOutputReference {
    return new OperationalRiskPolicyRuleCriteriaOpRiskCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRiskPolicyRuleCriteria {
  /**
  * The minimum operational risk that will be impacted by the policy: High, Medium, Low
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#op_risk_min_risk OperationalRiskPolicy#op_risk_min_risk}
  */
  readonly opRiskMinRisk?: string;
  /**
  * op_risk_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#op_risk_custom OperationalRiskPolicy#op_risk_custom}
  */
  readonly opRiskCustom?: OperationalRiskPolicyRuleCriteriaOpRiskCustom[] | cdktf.IResolvable;
}

export function operationalRiskPolicyRuleCriteriaToTerraform(struct?: OperationalRiskPolicyRuleCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op_risk_min_risk: cdktf.stringToTerraform(struct!.opRiskMinRisk),
    op_risk_custom: cdktf.listMapper(operationalRiskPolicyRuleCriteriaOpRiskCustomToTerraform, true)(struct!.opRiskCustom),
  }
}


export function operationalRiskPolicyRuleCriteriaToHclTerraform(struct?: OperationalRiskPolicyRuleCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op_risk_min_risk: {
      value: cdktf.stringToHclTerraform(struct!.opRiskMinRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op_risk_custom: {
      value: cdktf.listMapperHcl(operationalRiskPolicyRuleCriteriaOpRiskCustomToHclTerraform, true)(struct!.opRiskCustom),
      isBlock: true,
      type: "list",
      storageClassType: "OperationalRiskPolicyRuleCriteriaOpRiskCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OperationalRiskPolicyRuleCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRiskPolicyRuleCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opRiskMinRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.opRiskMinRisk = this._opRiskMinRisk;
    }
    if (this._opRiskCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opRiskCustom = this._opRiskCustom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OperationalRiskPolicyRuleCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._opRiskMinRisk = undefined;
      this._opRiskCustom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._opRiskMinRisk = value.opRiskMinRisk;
      this._opRiskCustom.internalValue = value.opRiskCustom;
    }
  }

  // op_risk_min_risk - computed: false, optional: true, required: false
  private _opRiskMinRisk?: string; 
  public get opRiskMinRisk() {
    return this.getStringAttribute('op_risk_min_risk');
  }
  public set opRiskMinRisk(value: string) {
    this._opRiskMinRisk = value;
  }
  public resetOpRiskMinRisk() {
    this._opRiskMinRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opRiskMinRiskInput() {
    return this._opRiskMinRisk;
  }

  // op_risk_custom - computed: false, optional: true, required: false
  private _opRiskCustom = new OperationalRiskPolicyRuleCriteriaOpRiskCustomList(this, "op_risk_custom", false);
  public get opRiskCustom() {
    return this._opRiskCustom;
  }
  public putOpRiskCustom(value: OperationalRiskPolicyRuleCriteriaOpRiskCustom[] | cdktf.IResolvable) {
    this._opRiskCustom.internalValue = value;
  }
  public resetOpRiskCustom() {
    this._opRiskCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opRiskCustomInput() {
    return this._opRiskCustom.internalValue;
  }
}

export class OperationalRiskPolicyRuleCriteriaList extends cdktf.ComplexList {
  public internalValue? : OperationalRiskPolicyRuleCriteria[] | cdktf.IResolvable

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
  public get(index: number): OperationalRiskPolicyRuleCriteriaOutputReference {
    return new OperationalRiskPolicyRuleCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRiskPolicyRule {
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#name OperationalRiskPolicy#name}
  */
  readonly name: string;
  /**
  * Integer describing the rule priority. Must be at least 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#priority OperationalRiskPolicy#priority}
  */
  readonly priority: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#actions OperationalRiskPolicy#actions}
  */
  readonly actions?: OperationalRiskPolicyRuleActions[] | cdktf.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#criteria OperationalRiskPolicy#criteria}
  */
  readonly criteria?: OperationalRiskPolicyRuleCriteria[] | cdktf.IResolvable;
}

export function operationalRiskPolicyRuleToTerraform(struct?: OperationalRiskPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    actions: cdktf.listMapper(operationalRiskPolicyRuleActionsToTerraform, true)(struct!.actions),
    criteria: cdktf.listMapper(operationalRiskPolicyRuleCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function operationalRiskPolicyRuleToHclTerraform(struct?: OperationalRiskPolicyRule | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(operationalRiskPolicyRuleActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "set",
      storageClassType: "OperationalRiskPolicyRuleActionsList",
    },
    criteria: {
      value: cdktf.listMapperHcl(operationalRiskPolicyRuleCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "OperationalRiskPolicyRuleCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OperationalRiskPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRiskPolicyRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRiskPolicyRule | cdktf.IResolvable | undefined) {
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
  private _actions = new OperationalRiskPolicyRuleActionsList(this, "actions", true);
  public get actions() {
    return this._actions;
  }
  public putActions(value: OperationalRiskPolicyRuleActions[] | cdktf.IResolvable) {
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
  private _criteria = new OperationalRiskPolicyRuleCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: OperationalRiskPolicyRuleCriteria[] | cdktf.IResolvable) {
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

export class OperationalRiskPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : OperationalRiskPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): OperationalRiskPolicyRuleOutputReference {
    return new OperationalRiskPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy xray_operational_risk_policy}
*/
export class OperationalRiskPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_operational_risk_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OperationalRiskPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OperationalRiskPolicy to import
  * @param importFromId The id of the existing OperationalRiskPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OperationalRiskPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_operational_risk_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/operational_risk_policy xray_operational_risk_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OperationalRiskPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OperationalRiskPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_operational_risk_policy',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.2',
        providerVersionConstraint: '3.1.2'
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
  private _rule = new OperationalRiskPolicyRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: OperationalRiskPolicyRule[] | cdktf.IResolvable) {
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
      rule: cdktf.listMapper(operationalRiskPolicyRuleToTerraform, true)(this._rule.internalValue),
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
        value: cdktf.listMapperHcl(operationalRiskPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OperationalRiskPolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
