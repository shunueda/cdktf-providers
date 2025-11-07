// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsUsageTriggersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#callback_method ApiAccountsUsageTriggers#callback_method}
  */
  readonly callbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#callback_url ApiAccountsUsageTriggers#callback_url}
  */
  readonly callbackUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#friendly_name ApiAccountsUsageTriggers#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#id ApiAccountsUsageTriggers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#path_account_sid ApiAccountsUsageTriggers#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#recurring ApiAccountsUsageTriggers#recurring}
  */
  readonly recurring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#trigger_by ApiAccountsUsageTriggers#trigger_by}
  */
  readonly triggerBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#trigger_value ApiAccountsUsageTriggers#trigger_value}
  */
  readonly triggerValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#usage_category ApiAccountsUsageTriggers#usage_category}
  */
  readonly usageCategory: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers twilio_api_accounts_usage_triggers}
*/
export class ApiAccountsUsageTriggers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_usage_triggers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsUsageTriggers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsUsageTriggers to import
  * @param importFromId The id of the existing ApiAccountsUsageTriggers that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsUsageTriggers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_usage_triggers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_usage_triggers twilio_api_accounts_usage_triggers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsUsageTriggersConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsUsageTriggersConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_usage_triggers',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callbackMethod = config.callbackMethod;
    this._callbackUrl = config.callbackUrl;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._pathAccountSid = config.pathAccountSid;
    this._recurring = config.recurring;
    this._triggerBy = config.triggerBy;
    this._triggerValue = config.triggerValue;
    this._usageCategory = config.usageCategory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callback_method - computed: true, optional: true, required: false
  private _callbackMethod?: string; 
  public get callbackMethod() {
    return this.getStringAttribute('callback_method');
  }
  public set callbackMethod(value: string) {
    this._callbackMethod = value;
  }
  public resetCallbackMethod() {
    this._callbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackMethodInput() {
    return this._callbackMethod;
  }

  // callback_url - computed: false, optional: false, required: true
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // path_account_sid - computed: true, optional: true, required: false
  private _pathAccountSid?: string; 
  public get pathAccountSid() {
    return this.getStringAttribute('path_account_sid');
  }
  public set pathAccountSid(value: string) {
    this._pathAccountSid = value;
  }
  public resetPathAccountSid() {
    this._pathAccountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathAccountSidInput() {
    return this._pathAccountSid;
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring?: string; 
  public get recurring() {
    return this.getStringAttribute('recurring');
  }
  public set recurring(value: string) {
    this._recurring = value;
  }
  public resetRecurring() {
    this._recurring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // trigger_by - computed: true, optional: true, required: false
  private _triggerBy?: string; 
  public get triggerBy() {
    return this.getStringAttribute('trigger_by');
  }
  public set triggerBy(value: string) {
    this._triggerBy = value;
  }
  public resetTriggerBy() {
    this._triggerBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerByInput() {
    return this._triggerBy;
  }

  // trigger_value - computed: false, optional: false, required: true
  private _triggerValue?: string; 
  public get triggerValue() {
    return this.getStringAttribute('trigger_value');
  }
  public set triggerValue(value: string) {
    this._triggerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerValueInput() {
    return this._triggerValue;
  }

  // usage_category - computed: false, optional: false, required: true
  private _usageCategory?: string; 
  public get usageCategory() {
    return this.getStringAttribute('usage_category');
  }
  public set usageCategory(value: string) {
    this._usageCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageCategoryInput() {
    return this._usageCategory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      callback_method: cdktf.stringToTerraform(this._callbackMethod),
      callback_url: cdktf.stringToTerraform(this._callbackUrl),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      recurring: cdktf.stringToTerraform(this._recurring),
      trigger_by: cdktf.stringToTerraform(this._triggerBy),
      trigger_value: cdktf.stringToTerraform(this._triggerValue),
      usage_category: cdktf.stringToTerraform(this._usageCategory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callback_method: {
        value: cdktf.stringToHclTerraform(this._callbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      callback_url: {
        value: cdktf.stringToHclTerraform(this._callbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_account_sid: {
        value: cdktf.stringToHclTerraform(this._pathAccountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurring: {
        value: cdktf.stringToHclTerraform(this._recurring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_by: {
        value: cdktf.stringToHclTerraform(this._triggerBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_value: {
        value: cdktf.stringToHclTerraform(this._triggerValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_category: {
        value: cdktf.stringToHclTerraform(this._usageCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
