// https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing email to apply to the account's Stripe customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#billing_email Account#billing_email}
  */
  readonly billingEmail?: string;
  /**
  * The list of domain names for enabling SSO in Prefect Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#domain_names Account#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Unique handle of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#handle Account#handle}
  */
  readonly handle: string;
  /**
  * An optional for an external url associated with the account, e.g. https://prefect.io/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#link Account#link}
  */
  readonly link?: string;
  /**
  * An optional physical location for the account, e.g. Washington, D.C.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#location Account#location}
  */
  readonly location?: string;
  /**
  * Name of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#name Account#name}
  */
  readonly name: string;
  /**
  * Group of settings related to accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#settings Account#settings}
  */
  readonly settings?: AccountSettings;
}
export interface AccountSettings {
  /**
  * Whether to use AI to generate log summaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#ai_log_summaries Account#ai_log_summaries}
  */
  readonly aiLogSummaries?: boolean | cdktf.IResolvable;
  /**
  * Whether or not this account allows public workspaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#allow_public_workspaces Account#allow_public_workspaces}
  */
  readonly allowPublicWorkspaces?: boolean | cdktf.IResolvable;
  /**
  * Whether to enforce webhook authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#enforce_webhook_authentication Account#enforce_webhook_authentication}
  */
  readonly enforceWebhookAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the use of managed work pools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#managed_execution Account#managed_execution}
  */
  readonly managedExecution?: boolean | cdktf.IResolvable;
}

export function accountSettingsToTerraform(struct?: AccountSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_log_summaries: cdktf.booleanToTerraform(struct!.aiLogSummaries),
    allow_public_workspaces: cdktf.booleanToTerraform(struct!.allowPublicWorkspaces),
    enforce_webhook_authentication: cdktf.booleanToTerraform(struct!.enforceWebhookAuthentication),
    managed_execution: cdktf.booleanToTerraform(struct!.managedExecution),
  }
}


export function accountSettingsToHclTerraform(struct?: AccountSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_log_summaries: {
      value: cdktf.booleanToHclTerraform(struct!.aiLogSummaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_public_workspaces: {
      value: cdktf.booleanToHclTerraform(struct!.allowPublicWorkspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_webhook_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.enforceWebhookAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed_execution: {
      value: cdktf.booleanToHclTerraform(struct!.managedExecution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiLogSummaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiLogSummaries = this._aiLogSummaries;
    }
    if (this._allowPublicWorkspaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPublicWorkspaces = this._allowPublicWorkspaces;
    }
    if (this._enforceWebhookAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceWebhookAuthentication = this._enforceWebhookAuthentication;
    }
    if (this._managedExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedExecution = this._managedExecution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiLogSummaries = undefined;
      this._allowPublicWorkspaces = undefined;
      this._enforceWebhookAuthentication = undefined;
      this._managedExecution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiLogSummaries = value.aiLogSummaries;
      this._allowPublicWorkspaces = value.allowPublicWorkspaces;
      this._enforceWebhookAuthentication = value.enforceWebhookAuthentication;
      this._managedExecution = value.managedExecution;
    }
  }

  // ai_log_summaries - computed: true, optional: true, required: false
  private _aiLogSummaries?: boolean | cdktf.IResolvable; 
  public get aiLogSummaries() {
    return this.getBooleanAttribute('ai_log_summaries');
  }
  public set aiLogSummaries(value: boolean | cdktf.IResolvable) {
    this._aiLogSummaries = value;
  }
  public resetAiLogSummaries() {
    this._aiLogSummaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiLogSummariesInput() {
    return this._aiLogSummaries;
  }

  // allow_public_workspaces - computed: true, optional: true, required: false
  private _allowPublicWorkspaces?: boolean | cdktf.IResolvable; 
  public get allowPublicWorkspaces() {
    return this.getBooleanAttribute('allow_public_workspaces');
  }
  public set allowPublicWorkspaces(value: boolean | cdktf.IResolvable) {
    this._allowPublicWorkspaces = value;
  }
  public resetAllowPublicWorkspaces() {
    this._allowPublicWorkspaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPublicWorkspacesInput() {
    return this._allowPublicWorkspaces;
  }

  // enforce_webhook_authentication - computed: true, optional: true, required: false
  private _enforceWebhookAuthentication?: boolean | cdktf.IResolvable; 
  public get enforceWebhookAuthentication() {
    return this.getBooleanAttribute('enforce_webhook_authentication');
  }
  public set enforceWebhookAuthentication(value: boolean | cdktf.IResolvable) {
    this._enforceWebhookAuthentication = value;
  }
  public resetEnforceWebhookAuthentication() {
    this._enforceWebhookAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceWebhookAuthenticationInput() {
    return this._enforceWebhookAuthentication;
  }

  // managed_execution - computed: true, optional: true, required: false
  private _managedExecution?: boolean | cdktf.IResolvable; 
  public get managedExecution() {
    return this.getBooleanAttribute('managed_execution');
  }
  public set managedExecution(value: boolean | cdktf.IResolvable) {
    this._managedExecution = value;
  }
  public resetManagedExecution() {
    this._managedExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedExecutionInput() {
    return this._managedExecution;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account prefect_account}
*/
export class Account extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Account to import
  * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Account to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/account prefect_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountConfig
  */
  public constructor(scope: Construct, id: string, config: AccountConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_account',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.4',
        providerVersionConstraint: '2.90.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingEmail = config.billingEmail;
    this._domainNames = config.domainNames;
    this._handle = config.handle;
    this._link = config.link;
    this._location = config.location;
    this._name = config.name;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_email - computed: true, optional: true, required: false
  private _billingEmail?: string; 
  public get billingEmail() {
    return this.getStringAttribute('billing_email');
  }
  public set billingEmail(value: string) {
    this._billingEmail = value;
  }
  public resetBillingEmail() {
    this._billingEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingEmailInput() {
    return this._billingEmail;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
  private _settings = new AccountSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: AccountSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_email: cdktf.stringToTerraform(this._billingEmail),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      handle: cdktf.stringToTerraform(this._handle),
      link: cdktf.stringToTerraform(this._link),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      settings: accountSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_email: {
        value: cdktf.stringToHclTerraform(this._billingEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      settings: {
        value: accountSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
