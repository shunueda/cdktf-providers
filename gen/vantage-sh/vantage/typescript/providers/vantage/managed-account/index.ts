// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/managed_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access Credential (aka Integrations) tokens to assign to the Managed Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/managed_account#access_credential_tokens ManagedAccount#access_credential_tokens}
  */
  readonly accessCredentialTokens?: string[];
  /**
  * Billing Rule tokens to assign to the Managed Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/managed_account#billing_rule_tokens ManagedAccount#billing_rule_tokens}
  */
  readonly billingRuleTokens?: string[];
  /**
  * The contact email address for the Managed Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/managed_account#contact_email ManagedAccount#contact_email}
  */
  readonly contactEmail: string;
  /**
  * The name of the Managed Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/managed_account#name ManagedAccount#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/managed_account vantage_managed_account}
*/
export class ManagedAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_managed_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedAccount to import
  * @param importFromId The id of the existing ManagedAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/managed_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_managed_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/managed_account vantage_managed_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_managed_account',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.71',
        providerVersionConstraint: '0.1.71'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessCredentialTokens = config.accessCredentialTokens;
    this._billingRuleTokens = config.billingRuleTokens;
    this._contactEmail = config.contactEmail;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_credential_tokens - computed: true, optional: true, required: false
  private _accessCredentialTokens?: string[]; 
  public get accessCredentialTokens() {
    return this.getListAttribute('access_credential_tokens');
  }
  public set accessCredentialTokens(value: string[]) {
    this._accessCredentialTokens = value;
  }
  public resetAccessCredentialTokens() {
    this._accessCredentialTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessCredentialTokensInput() {
    return this._accessCredentialTokens;
  }

  // billing_rule_tokens - computed: true, optional: true, required: false
  private _billingRuleTokens?: string[]; 
  public get billingRuleTokens() {
    return this.getListAttribute('billing_rule_tokens');
  }
  public set billingRuleTokens(value: string[]) {
    this._billingRuleTokens = value;
  }
  public resetBillingRuleTokens() {
    this._billingRuleTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingRuleTokensInput() {
    return this._billingRuleTokens;
  }

  // contact_email - computed: false, optional: false, required: true
  private _contactEmail?: string; 
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }
  public set contactEmail(value: string) {
    this._contactEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailInput() {
    return this._contactEmail;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // parent_account_token - computed: true, optional: false, required: false
  public get parentAccountToken() {
    return this.getStringAttribute('parent_account_token');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_credential_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessCredentialTokens),
      billing_rule_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._billingRuleTokens),
      contact_email: cdktf.stringToTerraform(this._contactEmail),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_credential_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessCredentialTokens),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      billing_rule_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._billingRuleTokens),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      contact_email: {
        value: cdktf.stringToHclTerraform(this._contactEmail),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
