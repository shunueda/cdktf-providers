// https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * More verbose description of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#description LicensePolicy#description}
  */
  readonly description?: string;
  /**
  * Name of the policy (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#name LicensePolicy#name}
  */
  readonly name: string;
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#project_key LicensePolicy#project_key}
  */
  readonly projectKey?: string;
  /**
  * Type of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#type LicensePolicy#type}
  */
  readonly type: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#rule LicensePolicy#rule}
  */
  readonly rule?: LicensePolicyRule[] | cdktf.IResolvable;
}
export interface LicensePolicyRuleActionsBlockDownload {
  /**
  * Whether or not to block download of artifacts that meet the artifact and severity `filters` for the associated `xray_watch` resource. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#active LicensePolicy#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to block download of artifacts that meet the artifact `filters` for the associated `xray_watch` resource but have not been scanned yet. Can not be set to `true` if attribute `active` is `false`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#unscanned LicensePolicy#unscanned}
  */
  readonly unscanned?: boolean | cdktf.IResolvable;
}

export function licensePolicyRuleActionsBlockDownloadToTerraform(struct?: LicensePolicyRuleActionsBlockDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    unscanned: cdktf.booleanToTerraform(struct!.unscanned),
  }
}


export function licensePolicyRuleActionsBlockDownloadToHclTerraform(struct?: LicensePolicyRuleActionsBlockDownload | cdktf.IResolvable): any {
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

export class LicensePolicyRuleActionsBlockDownloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensePolicyRuleActionsBlockDownload | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LicensePolicyRuleActionsBlockDownload | cdktf.IResolvable | undefined) {
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

export class LicensePolicyRuleActionsBlockDownloadList extends cdktf.ComplexList {
  public internalValue? : LicensePolicyRuleActionsBlockDownload[] | cdktf.IResolvable

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
  public get(index: number): LicensePolicyRuleActionsBlockDownloadOutputReference {
    return new LicensePolicyRuleActionsBlockDownloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensePolicyRuleActions {
  /**
  * Blocks Release Bundle distribution to Edge nodes if a violation is found. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#block_release_bundle_distribution LicensePolicy#block_release_bundle_distribution}
  */
  readonly blockReleaseBundleDistribution?: boolean | cdktf.IResolvable;
  /**
  * Blocks Release Bundle promotion if a violation is found. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#block_release_bundle_promotion LicensePolicy#block_release_bundle_promotion}
  */
  readonly blockReleaseBundlePromotion?: boolean | cdktf.IResolvable;
  /**
  * Allow grace period for certain number of days. All violations will be ignored during this time. To be used only if `fail_build` is enabled. Default value is `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#build_failure_grace_period_in_days LicensePolicy#build_failure_grace_period_in_days}
  */
  readonly buildFailureGracePeriodInDays?: number;
  /**
  * Create Jira Ticket for this Policy Violation. Requires configured Jira integration. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#create_ticket_enabled LicensePolicy#create_ticket_enabled}
  */
  readonly createTicketEnabled?: boolean | cdktf.IResolvable;
  /**
  * The severity of violation to be triggered if the `criteria` are met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#custom_severity LicensePolicy#custom_severity}
  */
  readonly customSeverity?: string;
  /**
  * Whether or not the related CI build should be marked as failed if a violation is triggered. This option is only available when the policy is applied to an `xray_watch` resource with a `type` of `builds`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#fail_build LicensePolicy#fail_build}
  */
  readonly failBuild?: boolean | cdktf.IResolvable;
  /**
  * A list of email addressed that will get emailed when a violation is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#mails LicensePolicy#mails}
  */
  readonly mails?: string[];
  /**
  * Sends an email message to component deployer with details about the generated Violations. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#notify_deployer LicensePolicy#notify_deployer}
  */
  readonly notifyDeployer?: boolean | cdktf.IResolvable;
  /**
  * Sends an email message to all configured recipients inside a specific watch with details about the generated Violations. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#notify_watch_recipients LicensePolicy#notify_watch_recipients}
  */
  readonly notifyWatchRecipients?: boolean | cdktf.IResolvable;
  /**
  * A list of Xray-configured webhook URLs to be invoked if a violation is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#webhooks LicensePolicy#webhooks}
  */
  readonly webhooks?: string[];
  /**
  * block_download block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#block_download LicensePolicy#block_download}
  */
  readonly blockDownload?: LicensePolicyRuleActionsBlockDownload[] | cdktf.IResolvable;
}

export function licensePolicyRuleActionsToTerraform(struct?: LicensePolicyRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_release_bundle_distribution: cdktf.booleanToTerraform(struct!.blockReleaseBundleDistribution),
    block_release_bundle_promotion: cdktf.booleanToTerraform(struct!.blockReleaseBundlePromotion),
    build_failure_grace_period_in_days: cdktf.numberToTerraform(struct!.buildFailureGracePeriodInDays),
    create_ticket_enabled: cdktf.booleanToTerraform(struct!.createTicketEnabled),
    custom_severity: cdktf.stringToTerraform(struct!.customSeverity),
    fail_build: cdktf.booleanToTerraform(struct!.failBuild),
    mails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mails),
    notify_deployer: cdktf.booleanToTerraform(struct!.notifyDeployer),
    notify_watch_recipients: cdktf.booleanToTerraform(struct!.notifyWatchRecipients),
    webhooks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webhooks),
    block_download: cdktf.listMapper(licensePolicyRuleActionsBlockDownloadToTerraform, true)(struct!.blockDownload),
  }
}


export function licensePolicyRuleActionsToHclTerraform(struct?: LicensePolicyRuleActions | cdktf.IResolvable): any {
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
    custom_severity: {
      value: cdktf.stringToHclTerraform(struct!.customSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.listMapperHcl(licensePolicyRuleActionsBlockDownloadToHclTerraform, true)(struct!.blockDownload),
      isBlock: true,
      type: "set",
      storageClassType: "LicensePolicyRuleActionsBlockDownloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensePolicyRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensePolicyRuleActions | cdktf.IResolvable | undefined {
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
    if (this._customSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSeverity = this._customSeverity;
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

  public set internalValue(value: LicensePolicyRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockReleaseBundleDistribution = undefined;
      this._blockReleaseBundlePromotion = undefined;
      this._buildFailureGracePeriodInDays = undefined;
      this._createTicketEnabled = undefined;
      this._customSeverity = undefined;
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
      this._customSeverity = value.customSeverity;
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

  // custom_severity - computed: true, optional: true, required: false
  private _customSeverity?: string; 
  public get customSeverity() {
    return this.getStringAttribute('custom_severity');
  }
  public set customSeverity(value: string) {
    this._customSeverity = value;
  }
  public resetCustomSeverity() {
    this._customSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSeverityInput() {
    return this._customSeverity;
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
  private _blockDownload = new LicensePolicyRuleActionsBlockDownloadList(this, "block_download", true);
  public get blockDownload() {
    return this._blockDownload;
  }
  public putBlockDownload(value: LicensePolicyRuleActionsBlockDownload[] | cdktf.IResolvable) {
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

export class LicensePolicyRuleActionsList extends cdktf.ComplexList {
  public internalValue? : LicensePolicyRuleActions[] | cdktf.IResolvable

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
  public get(index: number): LicensePolicyRuleActionsOutputReference {
    return new LicensePolicyRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensePolicyRuleCriteria {
  /**
  * A violation will be generated for artifacts with unknown licenses (`true` or `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#allow_unknown LicensePolicy#allow_unknown}
  */
  readonly allowUnknown?: boolean | cdktf.IResolvable;
  /**
  * A list of OSS license names that may be attached to a component. Supports custom licenses added by the user, but there is no verification if the license exists on the Xray side. If the added license doesn't exist, the policy won't trigger the violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#allowed_licenses LicensePolicy#allowed_licenses}
  */
  readonly allowedLicenses?: string[];
  /**
  * A list of OSS license names that may not be attached to a component. Supports custom licenses added by the user, but there is no verification if the license exists on the Xray side. If the added license doesn't exist, the policy won't trigger the violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#banned_licenses LicensePolicy#banned_licenses}
  */
  readonly bannedLicenses?: string[];
  /**
  * Do not generate a violation if at least one license is valid in cases whereby multiple licenses were detected on the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#multi_license_permissive LicensePolicy#multi_license_permissive}
  */
  readonly multiLicensePermissive?: boolean | cdktf.IResolvable;
}

export function licensePolicyRuleCriteriaToTerraform(struct?: LicensePolicyRuleCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unknown: cdktf.booleanToTerraform(struct!.allowUnknown),
    allowed_licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedLicenses),
    banned_licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bannedLicenses),
    multi_license_permissive: cdktf.booleanToTerraform(struct!.multiLicensePermissive),
  }
}


export function licensePolicyRuleCriteriaToHclTerraform(struct?: LicensePolicyRuleCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_unknown: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_licenses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedLicenses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    banned_licenses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bannedLicenses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multi_license_permissive: {
      value: cdktf.booleanToHclTerraform(struct!.multiLicensePermissive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensePolicyRuleCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensePolicyRuleCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown;
    }
    if (this._allowedLicenses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedLicenses = this._allowedLicenses;
    }
    if (this._bannedLicenses !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannedLicenses = this._bannedLicenses;
    }
    if (this._multiLicensePermissive !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLicensePermissive = this._multiLicensePermissive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensePolicyRuleCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowUnknown = undefined;
      this._allowedLicenses = undefined;
      this._bannedLicenses = undefined;
      this._multiLicensePermissive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowUnknown = value.allowUnknown;
      this._allowedLicenses = value.allowedLicenses;
      this._bannedLicenses = value.bannedLicenses;
      this._multiLicensePermissive = value.multiLicensePermissive;
    }
  }

  // allow_unknown - computed: true, optional: true, required: false
  private _allowUnknown?: boolean | cdktf.IResolvable; 
  public get allowUnknown() {
    return this.getBooleanAttribute('allow_unknown');
  }
  public set allowUnknown(value: boolean | cdktf.IResolvable) {
    this._allowUnknown = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown;
  }

  // allowed_licenses - computed: false, optional: true, required: false
  private _allowedLicenses?: string[]; 
  public get allowedLicenses() {
    return this.getListAttribute('allowed_licenses');
  }
  public set allowedLicenses(value: string[]) {
    this._allowedLicenses = value;
  }
  public resetAllowedLicenses() {
    this._allowedLicenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedLicensesInput() {
    return this._allowedLicenses;
  }

  // banned_licenses - computed: false, optional: true, required: false
  private _bannedLicenses?: string[]; 
  public get bannedLicenses() {
    return this.getListAttribute('banned_licenses');
  }
  public set bannedLicenses(value: string[]) {
    this._bannedLicenses = value;
  }
  public resetBannedLicenses() {
    this._bannedLicenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedLicensesInput() {
    return this._bannedLicenses;
  }

  // multi_license_permissive - computed: true, optional: true, required: false
  private _multiLicensePermissive?: boolean | cdktf.IResolvable; 
  public get multiLicensePermissive() {
    return this.getBooleanAttribute('multi_license_permissive');
  }
  public set multiLicensePermissive(value: boolean | cdktf.IResolvable) {
    this._multiLicensePermissive = value;
  }
  public resetMultiLicensePermissive() {
    this._multiLicensePermissive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLicensePermissiveInput() {
    return this._multiLicensePermissive;
  }
}

export class LicensePolicyRuleCriteriaList extends cdktf.ComplexList {
  public internalValue? : LicensePolicyRuleCriteria[] | cdktf.IResolvable

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
  public get(index: number): LicensePolicyRuleCriteriaOutputReference {
    return new LicensePolicyRuleCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensePolicyRule {
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#name LicensePolicy#name}
  */
  readonly name: string;
  /**
  * Integer describing the rule priority. Must be at least 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#priority LicensePolicy#priority}
  */
  readonly priority: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#actions LicensePolicy#actions}
  */
  readonly actions?: LicensePolicyRuleActions[] | cdktf.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#criteria LicensePolicy#criteria}
  */
  readonly criteria?: LicensePolicyRuleCriteria[] | cdktf.IResolvable;
}

export function licensePolicyRuleToTerraform(struct?: LicensePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    actions: cdktf.listMapper(licensePolicyRuleActionsToTerraform, true)(struct!.actions),
    criteria: cdktf.listMapper(licensePolicyRuleCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function licensePolicyRuleToHclTerraform(struct?: LicensePolicyRule | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(licensePolicyRuleActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "set",
      storageClassType: "LicensePolicyRuleActionsList",
    },
    criteria: {
      value: cdktf.listMapperHcl(licensePolicyRuleCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "LicensePolicyRuleCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensePolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensePolicyRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LicensePolicyRule | cdktf.IResolvable | undefined) {
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
  private _actions = new LicensePolicyRuleActionsList(this, "actions", true);
  public get actions() {
    return this._actions;
  }
  public putActions(value: LicensePolicyRuleActions[] | cdktf.IResolvable) {
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
  private _criteria = new LicensePolicyRuleCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: LicensePolicyRuleCriteria[] | cdktf.IResolvable) {
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

export class LicensePolicyRuleList extends cdktf.ComplexList {
  public internalValue? : LicensePolicyRule[] | cdktf.IResolvable

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
  public get(index: number): LicensePolicyRuleOutputReference {
    return new LicensePolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy xray_license_policy}
*/
export class LicensePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_license_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicensePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicensePolicy to import
  * @param importFromId The id of the existing LicensePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicensePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_license_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/license_policy xray_license_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LicensePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_license_policy',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.3',
        providerVersionConstraint: '3.1.3'
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
  private _rule = new LicensePolicyRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: LicensePolicyRule[] | cdktf.IResolvable) {
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
      rule: cdktf.listMapper(licensePolicyRuleToTerraform, true)(this._rule.internalValue),
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
        value: cdktf.listMapperHcl(licensePolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LicensePolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
