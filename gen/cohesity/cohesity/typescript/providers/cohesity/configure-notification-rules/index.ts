// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigureNotificationRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#alert_types ConfigureNotificationRules#alert_types}
  */
  readonly alertTypes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#categories ConfigureNotificationRules#categories}
  */
  readonly categories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#id ConfigureNotificationRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#rule_name ConfigureNotificationRules#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#severities ConfigureNotificationRules#severities}
  */
  readonly severities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#snmp_enabled ConfigureNotificationRules#snmp_enabled}
  */
  readonly snmpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#syslog_enabled ConfigureNotificationRules#syslog_enabled}
  */
  readonly syslogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#tenant_id ConfigureNotificationRules#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * email_delivery_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#email_delivery_targets ConfigureNotificationRules#email_delivery_targets}
  */
  readonly emailDeliveryTargets?: ConfigureNotificationRulesEmailDeliveryTargets[] | cdktf.IResolvable;
  /**
  * webhook_delivery_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#webhook_delivery_targets ConfigureNotificationRules#webhook_delivery_targets}
  */
  readonly webhookDeliveryTargets?: ConfigureNotificationRulesWebhookDeliveryTargets[] | cdktf.IResolvable;
}
export interface ConfigureNotificationRulesEmailDeliveryTargets {
  /**
  * Main recepient email addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#email_address ConfigureNotificationRules#email_address}
  */
  readonly emailAddress: string;
  /**
  * Whether to add recipient as To or CC	// Enum: ['kTo','kCc']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#recipient_type ConfigureNotificationRules#recipient_type}
  */
  readonly recipientType?: string;
}

export function configureNotificationRulesEmailDeliveryTargetsToTerraform(struct?: ConfigureNotificationRulesEmailDeliveryTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    recipient_type: cdktf.stringToTerraform(struct!.recipientType),
  }
}


export function configureNotificationRulesEmailDeliveryTargetsToHclTerraform(struct?: ConfigureNotificationRulesEmailDeliveryTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipient_type: {
      value: cdktf.stringToHclTerraform(struct!.recipientType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigureNotificationRulesEmailDeliveryTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigureNotificationRulesEmailDeliveryTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._recipientType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientType = this._recipientType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigureNotificationRulesEmailDeliveryTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._recipientType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._recipientType = value.recipientType;
    }
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // recipient_type - computed: false, optional: true, required: false
  private _recipientType?: string; 
  public get recipientType() {
    return this.getStringAttribute('recipient_type');
  }
  public set recipientType(value: string) {
    this._recipientType = value;
  }
  public resetRecipientType() {
    this._recipientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientTypeInput() {
    return this._recipientType;
  }
}

export class ConfigureNotificationRulesEmailDeliveryTargetsList extends cdktf.ComplexList {
  public internalValue? : ConfigureNotificationRulesEmailDeliveryTargets[] | cdktf.IResolvable

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
  public get(index: number): ConfigureNotificationRulesEmailDeliveryTargetsOutputReference {
    return new ConfigureNotificationRulesEmailDeliveryTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigureNotificationRulesWebhookDeliveryTargets {
  /**
  * Options for webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#curl_options ConfigureNotificationRules#curl_options}
  */
  readonly curlOptions?: string;
  /**
  * Destination webhook URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#webhook_url ConfigureNotificationRules#webhook_url}
  */
  readonly webhookUrl: string;
}

export function configureNotificationRulesWebhookDeliveryTargetsToTerraform(struct?: ConfigureNotificationRulesWebhookDeliveryTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curl_options: cdktf.stringToTerraform(struct!.curlOptions),
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}


export function configureNotificationRulesWebhookDeliveryTargetsToHclTerraform(struct?: ConfigureNotificationRulesWebhookDeliveryTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curl_options: {
      value: cdktf.stringToHclTerraform(struct!.curlOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.webhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigureNotificationRulesWebhookDeliveryTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigureNotificationRulesWebhookDeliveryTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curlOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.curlOptions = this._curlOptions;
    }
    if (this._webhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrl = this._webhookUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigureNotificationRulesWebhookDeliveryTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curlOptions = undefined;
      this._webhookUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curlOptions = value.curlOptions;
      this._webhookUrl = value.webhookUrl;
    }
  }

  // curl_options - computed: false, optional: true, required: false
  private _curlOptions?: string; 
  public get curlOptions() {
    return this.getStringAttribute('curl_options');
  }
  public set curlOptions(value: string) {
    this._curlOptions = value;
  }
  public resetCurlOptions() {
    this._curlOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curlOptionsInput() {
    return this._curlOptions;
  }

  // webhook_url - computed: false, optional: false, required: true
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }
}

export class ConfigureNotificationRulesWebhookDeliveryTargetsList extends cdktf.ComplexList {
  public internalValue? : ConfigureNotificationRulesWebhookDeliveryTargets[] | cdktf.IResolvable

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
  public get(index: number): ConfigureNotificationRulesWebhookDeliveryTargetsOutputReference {
    return new ConfigureNotificationRulesWebhookDeliveryTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules cohesity_configure_notification_rules}
*/
export class ConfigureNotificationRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity_configure_notification_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigureNotificationRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigureNotificationRules to import
  * @param importFromId The id of the existing ConfigureNotificationRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigureNotificationRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity_configure_notification_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_notification_rules cohesity_configure_notification_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigureNotificationRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigureNotificationRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesity_configure_notification_rules',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3',
        providerVersionConstraint: '2.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertTypes = config.alertTypes;
    this._categories = config.categories;
    this._id = config.id;
    this._ruleName = config.ruleName;
    this._severities = config.severities;
    this._snmpEnabled = config.snmpEnabled;
    this._syslogEnabled = config.syslogEnabled;
    this._tenantId = config.tenantId;
    this._emailDeliveryTargets.internalValue = config.emailDeliveryTargets;
    this._webhookDeliveryTargets.internalValue = config.webhookDeliveryTargets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_types - computed: false, optional: true, required: false
  private _alertTypes?: number[]; 
  public get alertTypes() {
    return this.getNumberListAttribute('alert_types');
  }
  public set alertTypes(value: number[]) {
    this._alertTypes = value;
  }
  public resetAlertTypes() {
    this._alertTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypesInput() {
    return this._alertTypes;
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
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

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // snmp_enabled - computed: false, optional: true, required: false
  private _snmpEnabled?: boolean | cdktf.IResolvable; 
  public get snmpEnabled() {
    return this.getBooleanAttribute('snmp_enabled');
  }
  public set snmpEnabled(value: boolean | cdktf.IResolvable) {
    this._snmpEnabled = value;
  }
  public resetSnmpEnabled() {
    this._snmpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpEnabledInput() {
    return this._snmpEnabled;
  }

  // syslog_enabled - computed: false, optional: true, required: false
  private _syslogEnabled?: boolean | cdktf.IResolvable; 
  public get syslogEnabled() {
    return this.getBooleanAttribute('syslog_enabled');
  }
  public set syslogEnabled(value: boolean | cdktf.IResolvable) {
    this._syslogEnabled = value;
  }
  public resetSyslogEnabled() {
    this._syslogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogEnabledInput() {
    return this._syslogEnabled;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // email_delivery_targets - computed: false, optional: true, required: false
  private _emailDeliveryTargets = new ConfigureNotificationRulesEmailDeliveryTargetsList(this, "email_delivery_targets", false);
  public get emailDeliveryTargets() {
    return this._emailDeliveryTargets;
  }
  public putEmailDeliveryTargets(value: ConfigureNotificationRulesEmailDeliveryTargets[] | cdktf.IResolvable) {
    this._emailDeliveryTargets.internalValue = value;
  }
  public resetEmailDeliveryTargets() {
    this._emailDeliveryTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDeliveryTargetsInput() {
    return this._emailDeliveryTargets.internalValue;
  }

  // webhook_delivery_targets - computed: false, optional: true, required: false
  private _webhookDeliveryTargets = new ConfigureNotificationRulesWebhookDeliveryTargetsList(this, "webhook_delivery_targets", false);
  public get webhookDeliveryTargets() {
    return this._webhookDeliveryTargets;
  }
  public putWebhookDeliveryTargets(value: ConfigureNotificationRulesWebhookDeliveryTargets[] | cdktf.IResolvable) {
    this._webhookDeliveryTargets.internalValue = value;
  }
  public resetWebhookDeliveryTargets() {
    this._webhookDeliveryTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookDeliveryTargetsInput() {
    return this._webhookDeliveryTargets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_types: cdktf.listMapper(cdktf.numberToTerraform, false)(this._alertTypes),
      categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categories),
      id: cdktf.stringToTerraform(this._id),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severities),
      snmp_enabled: cdktf.booleanToTerraform(this._snmpEnabled),
      syslog_enabled: cdktf.booleanToTerraform(this._syslogEnabled),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      email_delivery_targets: cdktf.listMapper(configureNotificationRulesEmailDeliveryTargetsToTerraform, true)(this._emailDeliveryTargets.internalValue),
      webhook_delivery_targets: cdktf.listMapper(configureNotificationRulesWebhookDeliveryTargetsToTerraform, true)(this._webhookDeliveryTargets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_types: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._alertTypes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snmp_enabled: {
        value: cdktf.booleanToHclTerraform(this._snmpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      syslog_enabled: {
        value: cdktf.booleanToHclTerraform(this._syslogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_delivery_targets: {
        value: cdktf.listMapperHcl(configureNotificationRulesEmailDeliveryTargetsToHclTerraform, true)(this._emailDeliveryTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigureNotificationRulesEmailDeliveryTargetsList",
      },
      webhook_delivery_targets: {
        value: cdktf.listMapperHcl(configureNotificationRulesWebhookDeliveryTargetsToHclTerraform, true)(this._webhookDeliveryTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigureNotificationRulesWebhookDeliveryTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
