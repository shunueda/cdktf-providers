// https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriptionAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lists the severity levels of the Patient 0, Secure Alert class, System Alerts class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert#comply_severities SubscriptionAlert#comply_severities}
  */
  readonly complySeverities?: string[];
  /**
  * Enables or disables the status of the alert subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert#description SubscriptionAlert#description}
  */
  readonly description?: string;
  /**
  * The email address of the alert recipient
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert#email SubscriptionAlert#email}
  */
  readonly email?: string;
  /**
  * Lists the severity levels of the Patient 0, Secure Alert class, System Alerts class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert#manage_severities SubscriptionAlert#manage_severities}
  */
  readonly manageSeverities?: string[];
  /**
  * Lists the severity levels of the Patient 0, Secure Alert class, System Alerts class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert#pt0_severities SubscriptionAlert#pt0_severities}
  */
  readonly pt0Severities?: string[];
  /**
  * Lists the severity levels of the Patient 0, Secure Alert class, System Alerts class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert#secure_severities SubscriptionAlert#secure_severities}
  */
  readonly secureSeverities?: string[];
  /**
  * Lists the severity levels of the Patient 0, Secure Alert class, System Alerts class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert#system_severities SubscriptionAlert#system_severities}
  */
  readonly systemSeverities?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert zia_subscription_alert}
*/
export class SubscriptionAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_subscription_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubscriptionAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubscriptionAlert to import
  * @param importFromId The id of the existing SubscriptionAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubscriptionAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_subscription_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/subscription_alert zia_subscription_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriptionAlertConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SubscriptionAlertConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_subscription_alert',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.2',
        providerVersionConstraint: '4.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._complySeverities = config.complySeverities;
    this._description = config.description;
    this._email = config.email;
    this._manageSeverities = config.manageSeverities;
    this._pt0Severities = config.pt0Severities;
    this._secureSeverities = config.secureSeverities;
    this._systemSeverities = config.systemSeverities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_id - computed: true, optional: false, required: false
  public get alertId() {
    return this.getNumberAttribute('alert_id');
  }

  // comply_severities - computed: false, optional: true, required: false
  private _complySeverities?: string[]; 
  public get complySeverities() {
    return cdktf.Fn.tolist(this.getListAttribute('comply_severities'));
  }
  public set complySeverities(value: string[]) {
    this._complySeverities = value;
  }
  public resetComplySeverities() {
    this._complySeverities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complySeveritiesInput() {
    return this._complySeverities;
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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manage_severities - computed: false, optional: true, required: false
  private _manageSeverities?: string[]; 
  public get manageSeverities() {
    return cdktf.Fn.tolist(this.getListAttribute('manage_severities'));
  }
  public set manageSeverities(value: string[]) {
    this._manageSeverities = value;
  }
  public resetManageSeverities() {
    this._manageSeverities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageSeveritiesInput() {
    return this._manageSeverities;
  }

  // pt0_severities - computed: false, optional: true, required: false
  private _pt0Severities?: string[]; 
  public get pt0Severities() {
    return cdktf.Fn.tolist(this.getListAttribute('pt0_severities'));
  }
  public set pt0Severities(value: string[]) {
    this._pt0Severities = value;
  }
  public resetPt0Severities() {
    this._pt0Severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pt0SeveritiesInput() {
    return this._pt0Severities;
  }

  // secure_severities - computed: false, optional: true, required: false
  private _secureSeverities?: string[]; 
  public get secureSeverities() {
    return cdktf.Fn.tolist(this.getListAttribute('secure_severities'));
  }
  public set secureSeverities(value: string[]) {
    this._secureSeverities = value;
  }
  public resetSecureSeverities() {
    this._secureSeverities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSeveritiesInput() {
    return this._secureSeverities;
  }

  // system_severities - computed: false, optional: true, required: false
  private _systemSeverities?: string[]; 
  public get systemSeverities() {
    return cdktf.Fn.tolist(this.getListAttribute('system_severities'));
  }
  public set systemSeverities(value: string[]) {
    this._systemSeverities = value;
  }
  public resetSystemSeverities() {
    this._systemSeverities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSeveritiesInput() {
    return this._systemSeverities;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comply_severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._complySeverities),
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      manage_severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manageSeverities),
      pt0_severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pt0Severities),
      secure_severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secureSeverities),
      system_severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSeverities),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comply_severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._complySeverities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manageSeverities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pt0_severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pt0Severities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secure_severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secureSeverities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSeverities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
