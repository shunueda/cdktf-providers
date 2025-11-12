// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmWafPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The character encoding for the web application. Character encoding determines how the policy processes the character sets. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#application_language CmWafPolicy#application_language}
  */
  readonly applicationLanguage: string;
  /**
  * Specifies whether the blocking setting is to be enabled or not. The default value of blocking_settings is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#blocking_settings CmWafPolicy#blocking_settings}
  */
  readonly blockingSettings?: CmWafPolicyBlockingSettings;
  /**
  * Specifies whether the bot defense for Policy is to be enabled or not. The default value of bot_defense is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#bot_defense CmWafPolicy#bot_defense}
  */
  readonly botDefense?: CmWafPolicyBotDefense;
  /**
  * Specifies the description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#description CmWafPolicy#description}
  */
  readonly description?: string;
  /**
  * Specifies whether the dos protection for Policy is to be enabled or not. The default value of dos_protection is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#dos_protection CmWafPolicy#dos_protection}
  */
  readonly dosProtection?: CmWafPolicyDosProtection;
  /**
  * Specifies How BIG-IP MA processes a request that triggers a security policy violation. 
  * *Blocking: When the enforcement mode is set to blocking, any triggered violation is blocked (configured for blocking).
  * *Transparent: When the enforcement mode is set to transparent, traffic is not blocked even if a violation is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#enforcement_mode CmWafPolicy#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * Specifies whether the bot ip_intelligence for Policy is to be enabled or not. The default value of ip_intelligence is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#ip_intelligence CmWafPolicy#ip_intelligence}
  */
  readonly ipIntelligence?: CmWafPolicyIpIntelligence;
  /**
  * The unique user-given name of the policy. Policy names cannot contain spaces or special characters. Allowed characters are a-z, A-Z, 0-9, dot, dash (-), colon (:) and underscore (_).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#name CmWafPolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the Tags for marking policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#tags CmWafPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * The name of the template used to create the WAF policy. Template cannot be updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#template_name CmWafPolicy#template_name}
  */
  readonly templateName: string;
}
export interface CmWafPolicyBlockingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#enabled CmWafPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cmWafPolicyBlockingSettingsToTerraform(struct?: CmWafPolicyBlockingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cmWafPolicyBlockingSettingsToHclTerraform(struct?: CmWafPolicyBlockingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmWafPolicyBlockingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmWafPolicyBlockingSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmWafPolicyBlockingSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CmWafPolicyBotDefense {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#enabled CmWafPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cmWafPolicyBotDefenseToTerraform(struct?: CmWafPolicyBotDefense | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cmWafPolicyBotDefenseToHclTerraform(struct?: CmWafPolicyBotDefense | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmWafPolicyBotDefenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmWafPolicyBotDefense | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmWafPolicyBotDefense | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CmWafPolicyDosProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#enabled CmWafPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cmWafPolicyDosProtectionToTerraform(struct?: CmWafPolicyDosProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cmWafPolicyDosProtectionToHclTerraform(struct?: CmWafPolicyDosProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmWafPolicyDosProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmWafPolicyDosProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmWafPolicyDosProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CmWafPolicyIpIntelligence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#enabled CmWafPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cmWafPolicyIpIntelligenceToTerraform(struct?: CmWafPolicyIpIntelligence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cmWafPolicyIpIntelligenceToHclTerraform(struct?: CmWafPolicyIpIntelligence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmWafPolicyIpIntelligenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmWafPolicyIpIntelligence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmWafPolicyIpIntelligence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy bigipnext_cm_waf_policy}
*/
export class CmWafPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_waf_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmWafPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmWafPolicy to import
  * @param importFromId The id of the existing CmWafPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmWafPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_waf_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_policy bigipnext_cm_waf_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmWafPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CmWafPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_waf_policy',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationLanguage = config.applicationLanguage;
    this._blockingSettings.internalValue = config.blockingSettings;
    this._botDefense.internalValue = config.botDefense;
    this._description = config.description;
    this._dosProtection.internalValue = config.dosProtection;
    this._enforcementMode = config.enforcementMode;
    this._ipIntelligence.internalValue = config.ipIntelligence;
    this._name = config.name;
    this._tags = config.tags;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_language - computed: false, optional: false, required: true
  private _applicationLanguage?: string; 
  public get applicationLanguage() {
    return this.getStringAttribute('application_language');
  }
  public set applicationLanguage(value: string) {
    this._applicationLanguage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLanguageInput() {
    return this._applicationLanguage;
  }

  // blocking_settings - computed: false, optional: true, required: false
  private _blockingSettings = new CmWafPolicyBlockingSettingsOutputReference(this, "blocking_settings");
  public get blockingSettings() {
    return this._blockingSettings;
  }
  public putBlockingSettings(value: CmWafPolicyBlockingSettings) {
    this._blockingSettings.internalValue = value;
  }
  public resetBlockingSettings() {
    this._blockingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingSettingsInput() {
    return this._blockingSettings.internalValue;
  }

  // bot_defense - computed: false, optional: true, required: false
  private _botDefense = new CmWafPolicyBotDefenseOutputReference(this, "bot_defense");
  public get botDefense() {
    return this._botDefense;
  }
  public putBotDefense(value: CmWafPolicyBotDefense) {
    this._botDefense.internalValue = value;
  }
  public resetBotDefense() {
    this._botDefense.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDefenseInput() {
    return this._botDefense.internalValue;
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

  // dos_protection - computed: false, optional: true, required: false
  private _dosProtection = new CmWafPolicyDosProtectionOutputReference(this, "dos_protection");
  public get dosProtection() {
    return this._dosProtection;
  }
  public putDosProtection(value: CmWafPolicyDosProtection) {
    this._dosProtection.internalValue = value;
  }
  public resetDosProtection() {
    this._dosProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProtectionInput() {
    return this._dosProtection.internalValue;
  }

  // enforcement_mode - computed: false, optional: false, required: true
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_intelligence - computed: false, optional: true, required: false
  private _ipIntelligence = new CmWafPolicyIpIntelligenceOutputReference(this, "ip_intelligence");
  public get ipIntelligence() {
    return this._ipIntelligence;
  }
  public putIpIntelligence(value: CmWafPolicyIpIntelligence) {
    this._ipIntelligence.internalValue = value;
  }
  public resetIpIntelligence() {
    this._ipIntelligence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipIntelligenceInput() {
    return this._ipIntelligence.internalValue;
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
    return this.getListAttribute('tags');
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

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_language: cdktf.stringToTerraform(this._applicationLanguage),
      blocking_settings: cmWafPolicyBlockingSettingsToTerraform(this._blockingSettings.internalValue),
      bot_defense: cmWafPolicyBotDefenseToTerraform(this._botDefense.internalValue),
      description: cdktf.stringToTerraform(this._description),
      dos_protection: cmWafPolicyDosProtectionToTerraform(this._dosProtection.internalValue),
      enforcement_mode: cdktf.stringToTerraform(this._enforcementMode),
      ip_intelligence: cmWafPolicyIpIntelligenceToTerraform(this._ipIntelligence.internalValue),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_language: {
        value: cdktf.stringToHclTerraform(this._applicationLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocking_settings: {
        value: cmWafPolicyBlockingSettingsToHclTerraform(this._blockingSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmWafPolicyBlockingSettings",
      },
      bot_defense: {
        value: cmWafPolicyBotDefenseToHclTerraform(this._botDefense.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmWafPolicyBotDefense",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dos_protection: {
        value: cmWafPolicyDosProtectionToHclTerraform(this._dosProtection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmWafPolicyDosProtection",
      },
      enforcement_mode: {
        value: cdktf.stringToHclTerraform(this._enforcementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_intelligence: {
        value: cmWafPolicyIpIntelligenceToHclTerraform(this._ipIntelligence.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmWafPolicyIpIntelligence",
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
        type: "list",
        storageClassType: "stringList",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
