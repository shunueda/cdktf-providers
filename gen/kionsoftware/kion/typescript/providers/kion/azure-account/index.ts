// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account alias is an optional short unique name that helps identify the account within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#account_alias AzureAccount#account_alias}
  */
  readonly accountAlias?: string;
  /**
  * An ID representing the account type within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#account_type_id AzureAccount#account_type_id}
  */
  readonly accountTypeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#id AzureAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map of labels to assign to the account. The labels must already exist in Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#labels AzureAccount#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#last_updated AzureAccount#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * The name of the Azure account within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#name AzureAccount#name}
  */
  readonly name: string;
  /**
  * The parent management group ID when creating an Azure subscription. If provided, the subscription will be created under the provided management group.  If not provided, the subscription will be created at the root level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#parent_management_group_id AzureAccount#parent_management_group_id}
  */
  readonly parentManagementGroupId?: string;
  /**
  * The ID of the billing source containing billing data for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#payer_id AzureAccount#payer_id}
  */
  readonly payerId: number;
  /**
  * The ID of the Kion project to place this account within.  If empty, the account will be placed within the account cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#project_id AzureAccount#project_id}
  */
  readonly projectId?: number;
  /**
  * True to skip periodic access checking on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#skip_access_checking AzureAccount#skip_access_checking}
  */
  readonly skipAccessChecking?: boolean | cdktf.IResolvable;
  /**
  * Date when the Azure account will starting submitting payments against a funding source (YYYY-MM).  Required if placing an account within a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#start_datecode AzureAccount#start_datecode}
  */
  readonly startDatecode?: string;
  /**
  * Name of the subscription as it appears in Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#subscription_name AzureAccount#subscription_name}
  */
  readonly subscriptionName?: string;
  /**
  * The UUID of the Azure subscription.  If subscription_uuid is provided, the existing subscription will be imported into Kion.  If subscription_uuid is omitted, a new subscription will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#subscription_uuid AzureAccount#subscription_uuid}
  */
  readonly subscriptionUuid?: string;
  /**
  * csp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#csp AzureAccount#csp}
  */
  readonly csp?: AzureAccountCsp;
  /**
  * ea block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#ea AzureAccount#ea}
  */
  readonly ea?: AzureAccountEa;
  /**
  * mca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#mca AzureAccount#mca}
  */
  readonly mca?: AzureAccountMca;
  /**
  * move_project_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#move_project_settings AzureAccount#move_project_settings}
  */
  readonly moveProjectSettings?: AzureAccountMoveProjectSettings;
}
export interface AzureAccountCsp {
  /**
  * Azure CSP billing cycle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#billing_cycle AzureAccount#billing_cycle}
  */
  readonly billingCycle?: string;
  /**
  * Azure CSP offer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#offer_id AzureAccount#offer_id}
  */
  readonly offerId: string;
}

export function azureAccountCspToTerraform(struct?: AzureAccountCspOutputReference | AzureAccountCsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_cycle: cdktf.stringToTerraform(struct!.billingCycle),
    offer_id: cdktf.stringToTerraform(struct!.offerId),
  }
}


export function azureAccountCspToHclTerraform(struct?: AzureAccountCspOutputReference | AzureAccountCsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_cycle: {
      value: cdktf.stringToHclTerraform(struct!.billingCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offer_id: {
      value: cdktf.stringToHclTerraform(struct!.offerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureAccountCspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureAccountCsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingCycle = this._billingCycle;
    }
    if (this._offerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.offerId = this._offerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureAccountCsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingCycle = undefined;
      this._offerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingCycle = value.billingCycle;
      this._offerId = value.offerId;
    }
  }

  // billing_cycle - computed: false, optional: true, required: false
  private _billingCycle?: string; 
  public get billingCycle() {
    return this.getStringAttribute('billing_cycle');
  }
  public set billingCycle(value: string) {
    this._billingCycle = value;
  }
  public resetBillingCycle() {
    this._billingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCycleInput() {
    return this._billingCycle;
  }

  // offer_id - computed: false, optional: false, required: true
  private _offerId?: string; 
  public get offerId() {
    return this.getStringAttribute('offer_id');
  }
  public set offerId(value: string) {
    this._offerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerIdInput() {
    return this._offerId;
  }
}
export interface AzureAccountEa {
  /**
  * Azure EA account number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#account AzureAccount#account}
  */
  readonly account: string;
  /**
  * Azure billing account number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#billing_account AzureAccount#billing_account}
  */
  readonly billingAccount: string;
}

export function azureAccountEaToTerraform(struct?: AzureAccountEaOutputReference | AzureAccountEa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    billing_account: cdktf.stringToTerraform(struct!.billingAccount),
  }
}


export function azureAccountEaToHclTerraform(struct?: AzureAccountEaOutputReference | AzureAccountEa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    billing_account: {
      value: cdktf.stringToHclTerraform(struct!.billingAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureAccountEaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureAccountEa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._billingAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingAccount = this._billingAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureAccountEa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._billingAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._billingAccount = value.billingAccount;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // billing_account - computed: false, optional: false, required: true
  private _billingAccount?: string; 
  public get billingAccount() {
    return this.getStringAttribute('billing_account');
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountInput() {
    return this._billingAccount;
  }
}
export interface AzureAccountMca {
  /**
  * Azure MCA billing account number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#billing_account AzureAccount#billing_account}
  */
  readonly billingAccount: string;
  /**
  * Azure MCA billing profile number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#billing_profile AzureAccount#billing_profile}
  */
  readonly billingProfile: string;
  /**
  * Azure MCA billing profile invoice section number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#billing_profile_invoice AzureAccount#billing_profile_invoice}
  */
  readonly billingProfileInvoice: string;
}

export function azureAccountMcaToTerraform(struct?: AzureAccountMcaOutputReference | AzureAccountMca): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_account: cdktf.stringToTerraform(struct!.billingAccount),
    billing_profile: cdktf.stringToTerraform(struct!.billingProfile),
    billing_profile_invoice: cdktf.stringToTerraform(struct!.billingProfileInvoice),
  }
}


export function azureAccountMcaToHclTerraform(struct?: AzureAccountMcaOutputReference | AzureAccountMca): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_account: {
      value: cdktf.stringToHclTerraform(struct!.billingAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    billing_profile: {
      value: cdktf.stringToHclTerraform(struct!.billingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    billing_profile_invoice: {
      value: cdktf.stringToHclTerraform(struct!.billingProfileInvoice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureAccountMcaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureAccountMca | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingAccount = this._billingAccount;
    }
    if (this._billingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingProfile = this._billingProfile;
    }
    if (this._billingProfileInvoice !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingProfileInvoice = this._billingProfileInvoice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureAccountMca | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingAccount = undefined;
      this._billingProfile = undefined;
      this._billingProfileInvoice = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingAccount = value.billingAccount;
      this._billingProfile = value.billingProfile;
      this._billingProfileInvoice = value.billingProfileInvoice;
    }
  }

  // billing_account - computed: false, optional: false, required: true
  private _billingAccount?: string; 
  public get billingAccount() {
    return this.getStringAttribute('billing_account');
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountInput() {
    return this._billingAccount;
  }

  // billing_profile - computed: false, optional: false, required: true
  private _billingProfile?: string; 
  public get billingProfile() {
    return this.getStringAttribute('billing_profile');
  }
  public set billingProfile(value: string) {
    this._billingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProfileInput() {
    return this._billingProfile;
  }

  // billing_profile_invoice - computed: false, optional: false, required: true
  private _billingProfileInvoice?: string; 
  public get billingProfileInvoice() {
    return this.getStringAttribute('billing_profile_invoice');
  }
  public set billingProfileInvoice(value: string) {
    this._billingProfileInvoice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProfileInvoiceInput() {
    return this._billingProfileInvoice;
  }
}
export interface AzureAccountMoveProjectSettings {
  /**
  * One of "move" or "preserve".  If "move", financial history will be moved to the new project beginning on the date specified by the move_datecode parameter.  If "preserve", financial history will be preserved on the current project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#financials AzureAccount#financials}
  */
  readonly financials?: string;
  /**
  * The start date to use when moving financial data in YYYYMM format.  This only applies when financials is set to move.  If provided, only financial data from this date to the current month will be moved to the new project.  If omitted or 0, all financial data will be moved to the new project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#move_datecode AzureAccount#move_datecode}
  */
  readonly moveDatecode?: number;
}

export function azureAccountMoveProjectSettingsToTerraform(struct?: AzureAccountMoveProjectSettingsOutputReference | AzureAccountMoveProjectSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    financials: cdktf.stringToTerraform(struct!.financials),
    move_datecode: cdktf.numberToTerraform(struct!.moveDatecode),
  }
}


export function azureAccountMoveProjectSettingsToHclTerraform(struct?: AzureAccountMoveProjectSettingsOutputReference | AzureAccountMoveProjectSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    financials: {
      value: cdktf.stringToHclTerraform(struct!.financials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    move_datecode: {
      value: cdktf.numberToHclTerraform(struct!.moveDatecode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureAccountMoveProjectSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureAccountMoveProjectSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._financials !== undefined) {
      hasAnyValues = true;
      internalValueResult.financials = this._financials;
    }
    if (this._moveDatecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveDatecode = this._moveDatecode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureAccountMoveProjectSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._financials = undefined;
      this._moveDatecode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._financials = value.financials;
      this._moveDatecode = value.moveDatecode;
    }
  }

  // financials - computed: false, optional: true, required: false
  private _financials?: string; 
  public get financials() {
    return this.getStringAttribute('financials');
  }
  public set financials(value: string) {
    this._financials = value;
  }
  public resetFinancials() {
    this._financials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialsInput() {
    return this._financials;
  }

  // move_datecode - computed: false, optional: true, required: false
  private _moveDatecode?: number; 
  public get moveDatecode() {
    return this.getNumberAttribute('move_datecode');
  }
  public set moveDatecode(value: number) {
    this._moveDatecode = value;
  }
  public resetMoveDatecode() {
    this._moveDatecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveDatecodeInput() {
    return this._moveDatecode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account kion_azure_account}
*/
export class AzureAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_azure_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureAccount to import
  * @param importFromId The id of the existing AzureAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_azure_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/azure_account kion_azure_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AzureAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_azure_account',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountAlias = config.accountAlias;
    this._accountTypeId = config.accountTypeId;
    this._id = config.id;
    this._labels = config.labels;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._parentManagementGroupId = config.parentManagementGroupId;
    this._payerId = config.payerId;
    this._projectId = config.projectId;
    this._skipAccessChecking = config.skipAccessChecking;
    this._startDatecode = config.startDatecode;
    this._subscriptionName = config.subscriptionName;
    this._subscriptionUuid = config.subscriptionUuid;
    this._csp.internalValue = config.csp;
    this._ea.internalValue = config.ea;
    this._mca.internalValue = config.mca;
    this._moveProjectSettings.internalValue = config.moveProjectSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_alias - computed: false, optional: true, required: false
  private _accountAlias?: string; 
  public get accountAlias() {
    return this.getStringAttribute('account_alias');
  }
  public set accountAlias(value: string) {
    this._accountAlias = value;
  }
  public resetAccountAlias() {
    this._accountAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAliasInput() {
    return this._accountAlias;
  }

  // account_type_id - computed: true, optional: true, required: false
  private _accountTypeId?: number; 
  public get accountTypeId() {
    return this.getNumberAttribute('account_type_id');
  }
  public set accountTypeId(value: number) {
    this._accountTypeId = value;
  }
  public resetAccountTypeId() {
    this._accountTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeIdInput() {
    return this._accountTypeId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // parent_management_group_id - computed: false, optional: true, required: false
  private _parentManagementGroupId?: string; 
  public get parentManagementGroupId() {
    return this.getStringAttribute('parent_management_group_id');
  }
  public set parentManagementGroupId(value: string) {
    this._parentManagementGroupId = value;
  }
  public resetParentManagementGroupId() {
    this._parentManagementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentManagementGroupIdInput() {
    return this._parentManagementGroupId;
  }

  // payer_id - computed: false, optional: false, required: true
  private _payerId?: number; 
  public get payerId() {
    return this.getNumberAttribute('payer_id');
  }
  public set payerId(value: number) {
    this._payerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payerIdInput() {
    return this._payerId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // skip_access_checking - computed: true, optional: true, required: false
  private _skipAccessChecking?: boolean | cdktf.IResolvable; 
  public get skipAccessChecking() {
    return this.getBooleanAttribute('skip_access_checking');
  }
  public set skipAccessChecking(value: boolean | cdktf.IResolvable) {
    this._skipAccessChecking = value;
  }
  public resetSkipAccessChecking() {
    this._skipAccessChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAccessCheckingInput() {
    return this._skipAccessChecking;
  }

  // start_datecode - computed: true, optional: true, required: false
  private _startDatecode?: string; 
  public get startDatecode() {
    return this.getStringAttribute('start_datecode');
  }
  public set startDatecode(value: string) {
    this._startDatecode = value;
  }
  public resetStartDatecode() {
    this._startDatecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDatecodeInput() {
    return this._startDatecode;
  }

  // subscription_name - computed: false, optional: true, required: false
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  public resetSubscriptionName() {
    this._subscriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
  }

  // subscription_uuid - computed: true, optional: true, required: false
  private _subscriptionUuid?: string; 
  public get subscriptionUuid() {
    return this.getStringAttribute('subscription_uuid');
  }
  public set subscriptionUuid(value: string) {
    this._subscriptionUuid = value;
  }
  public resetSubscriptionUuid() {
    this._subscriptionUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionUuidInput() {
    return this._subscriptionUuid;
  }

  // csp - computed: false, optional: true, required: false
  private _csp = new AzureAccountCspOutputReference(this, "csp");
  public get csp() {
    return this._csp;
  }
  public putCsp(value: AzureAccountCsp) {
    this._csp.internalValue = value;
  }
  public resetCsp() {
    this._csp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspInput() {
    return this._csp.internalValue;
  }

  // ea - computed: false, optional: true, required: false
  private _ea = new AzureAccountEaOutputReference(this, "ea");
  public get ea() {
    return this._ea;
  }
  public putEa(value: AzureAccountEa) {
    this._ea.internalValue = value;
  }
  public resetEa() {
    this._ea.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eaInput() {
    return this._ea.internalValue;
  }

  // mca - computed: false, optional: true, required: false
  private _mca = new AzureAccountMcaOutputReference(this, "mca");
  public get mca() {
    return this._mca;
  }
  public putMca(value: AzureAccountMca) {
    this._mca.internalValue = value;
  }
  public resetMca() {
    this._mca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcaInput() {
    return this._mca.internalValue;
  }

  // move_project_settings - computed: false, optional: true, required: false
  private _moveProjectSettings = new AzureAccountMoveProjectSettingsOutputReference(this, "move_project_settings");
  public get moveProjectSettings() {
    return this._moveProjectSettings;
  }
  public putMoveProjectSettings(value: AzureAccountMoveProjectSettings) {
    this._moveProjectSettings.internalValue = value;
  }
  public resetMoveProjectSettings() {
    this._moveProjectSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveProjectSettingsInput() {
    return this._moveProjectSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_alias: cdktf.stringToTerraform(this._accountAlias),
      account_type_id: cdktf.numberToTerraform(this._accountTypeId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      parent_management_group_id: cdktf.stringToTerraform(this._parentManagementGroupId),
      payer_id: cdktf.numberToTerraform(this._payerId),
      project_id: cdktf.numberToTerraform(this._projectId),
      skip_access_checking: cdktf.booleanToTerraform(this._skipAccessChecking),
      start_datecode: cdktf.stringToTerraform(this._startDatecode),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      subscription_uuid: cdktf.stringToTerraform(this._subscriptionUuid),
      csp: azureAccountCspToTerraform(this._csp.internalValue),
      ea: azureAccountEaToTerraform(this._ea.internalValue),
      mca: azureAccountMcaToTerraform(this._mca.internalValue),
      move_project_settings: azureAccountMoveProjectSettingsToTerraform(this._moveProjectSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_alias: {
        value: cdktf.stringToHclTerraform(this._accountAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_type_id: {
        value: cdktf.numberToHclTerraform(this._accountTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
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
      parent_management_group_id: {
        value: cdktf.stringToHclTerraform(this._parentManagementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payer_id: {
        value: cdktf.numberToHclTerraform(this._payerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_access_checking: {
        value: cdktf.booleanToHclTerraform(this._skipAccessChecking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_datecode: {
        value: cdktf.stringToHclTerraform(this._startDatecode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_name: {
        value: cdktf.stringToHclTerraform(this._subscriptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_uuid: {
        value: cdktf.stringToHclTerraform(this._subscriptionUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp: {
        value: azureAccountCspToHclTerraform(this._csp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureAccountCspList",
      },
      ea: {
        value: azureAccountEaToHclTerraform(this._ea.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureAccountEaList",
      },
      mca: {
        value: azureAccountMcaToHclTerraform(this._mca.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureAccountMcaList",
      },
      move_project_settings: {
        value: azureAccountMoveProjectSettingsToHclTerraform(this._moveProjectSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureAccountMoveProjectSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
