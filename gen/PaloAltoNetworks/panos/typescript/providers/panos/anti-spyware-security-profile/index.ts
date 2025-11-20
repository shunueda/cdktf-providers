// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiSpywareSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#botnet_domains AntiSpywareSecurityProfile#botnet_domains}
  */
  readonly botnetDomains?: AntiSpywareSecurityProfileBotnetDomains;
  /**
  * Enable cloud inline analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#cloud_inline_analysis AntiSpywareSecurityProfile#cloud_inline_analysis}
  */
  readonly cloudInlineAnalysis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#description AntiSpywareSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#disable_override AntiSpywareSecurityProfile#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#inline_exception_edl_url AntiSpywareSecurityProfile#inline_exception_edl_url}
  */
  readonly inlineExceptionEdlUrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#inline_exception_ip_address AntiSpywareSecurityProfile#inline_exception_ip_address}
  */
  readonly inlineExceptionIpAddress?: string[];
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#location AntiSpywareSecurityProfile#location}
  */
  readonly location: AntiSpywareSecurityProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#mica_engine_spyware_enabled AntiSpywareSecurityProfile#mica_engine_spyware_enabled}
  */
  readonly micaEngineSpywareEnabled?: AntiSpywareSecurityProfileMicaEngineSpywareEnabled[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#rules AntiSpywareSecurityProfile#rules}
  */
  readonly rules?: AntiSpywareSecurityProfileRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#threat_exception AntiSpywareSecurityProfile#threat_exception}
  */
  readonly threatException?: AntiSpywareSecurityProfileThreatException[] | cdktf.IResolvable;
}
export interface AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#action AntiSpywareSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#log_level AntiSpywareSecurityProfile#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#packet_capture AntiSpywareSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
}

export function antiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
  }
}


export function antiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_capture: {
      value: cdktf.stringToHclTerraform(struct!.packetCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapture = this._packetCapture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._logLevel = undefined;
      this._name = undefined;
      this._packetCapture = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._logLevel = value.logLevel;
      this._name = value.name;
      this._packetCapture = value.packetCapture;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // packet_capture - computed: true, optional: true, required: false
  private _packetCapture?: string; 
  public get packetCapture() {
    return this.getStringAttribute('packet_capture');
  }
  public set packetCapture(value: string) {
    this._packetCapture = value;
  }
  public resetPacketCapture() {
    this._packetCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture;
  }
}

export class AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesOutputReference {
    return new AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsListsActionAlert {
}

export function antiSpywareSecurityProfileBotnetDomainsListsActionAlertToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileBotnetDomainsListsActionAlertToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileBotnetDomainsListsActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsListsActionAllow {
}

export function antiSpywareSecurityProfileBotnetDomainsListsActionAllowToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileBotnetDomainsListsActionAllowToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileBotnetDomainsListsActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsListsActionBlock {
}

export function antiSpywareSecurityProfileBotnetDomainsListsActionBlockToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileBotnetDomainsListsActionBlockToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileBotnetDomainsListsActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole {
}

export function antiSpywareSecurityProfileBotnetDomainsListsActionSinkholeToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileBotnetDomainsListsActionSinkholeToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileBotnetDomainsListsActionSinkholeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsListsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#alert AntiSpywareSecurityProfile#alert}
  */
  readonly alert?: AntiSpywareSecurityProfileBotnetDomainsListsActionAlert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#allow AntiSpywareSecurityProfile#allow}
  */
  readonly allow?: AntiSpywareSecurityProfileBotnetDomainsListsActionAllow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#block AntiSpywareSecurityProfile#block}
  */
  readonly block?: AntiSpywareSecurityProfileBotnetDomainsListsActionBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#sinkhole AntiSpywareSecurityProfile#sinkhole}
  */
  readonly sinkhole?: AntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole;
}

export function antiSpywareSecurityProfileBotnetDomainsListsActionToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: antiSpywareSecurityProfileBotnetDomainsListsActionAlertToTerraform(struct!.alert),
    allow: antiSpywareSecurityProfileBotnetDomainsListsActionAllowToTerraform(struct!.allow),
    block: antiSpywareSecurityProfileBotnetDomainsListsActionBlockToTerraform(struct!.block),
    sinkhole: antiSpywareSecurityProfileBotnetDomainsListsActionSinkholeToTerraform(struct!.sinkhole),
  }
}


export function antiSpywareSecurityProfileBotnetDomainsListsActionToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: antiSpywareSecurityProfileBotnetDomainsListsActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsListsActionAlert",
    },
    allow: {
      value: antiSpywareSecurityProfileBotnetDomainsListsActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsListsActionAllow",
    },
    block: {
      value: antiSpywareSecurityProfileBotnetDomainsListsActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsListsActionBlock",
    },
    sinkhole: {
      value: antiSpywareSecurityProfileBotnetDomainsListsActionSinkholeToHclTerraform(struct!.sinkhole),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileBotnetDomainsListsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._sinkhole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkhole = this._sinkhole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert.internalValue = undefined;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
      this._sinkhole.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert.internalValue = value.alert;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
      this._sinkhole.internalValue = value.sinkhole;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new AntiSpywareSecurityProfileBotnetDomainsListsActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: AntiSpywareSecurityProfileBotnetDomainsListsActionAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new AntiSpywareSecurityProfileBotnetDomainsListsActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: AntiSpywareSecurityProfileBotnetDomainsListsActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new AntiSpywareSecurityProfileBotnetDomainsListsActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: AntiSpywareSecurityProfileBotnetDomainsListsActionBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // sinkhole - computed: false, optional: true, required: false
  private _sinkhole = new AntiSpywareSecurityProfileBotnetDomainsListsActionSinkholeOutputReference(this, "sinkhole");
  public get sinkhole() {
    return this._sinkhole;
  }
  public putSinkhole(value: AntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole) {
    this._sinkhole.internalValue = value;
  }
  public resetSinkhole() {
    this._sinkhole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkholeInput() {
    return this._sinkhole.internalValue;
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsLists {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#action AntiSpywareSecurityProfile#action}
  */
  readonly action?: AntiSpywareSecurityProfileBotnetDomainsListsAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#packet_capture AntiSpywareSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
}

export function antiSpywareSecurityProfileBotnetDomainsListsToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: antiSpywareSecurityProfileBotnetDomainsListsActionToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
  }
}


export function antiSpywareSecurityProfileBotnetDomainsListsToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: antiSpywareSecurityProfileBotnetDomainsListsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsListsAction",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_capture: {
      value: cdktf.stringToHclTerraform(struct!.packetCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileBotnetDomainsListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapture = this._packetCapture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._name = undefined;
      this._packetCapture = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._name = value.name;
      this._packetCapture = value.packetCapture;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new AntiSpywareSecurityProfileBotnetDomainsListsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AntiSpywareSecurityProfileBotnetDomainsListsAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
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

  // packet_capture - computed: true, optional: true, required: false
  private _packetCapture?: string; 
  public get packetCapture() {
    return this.getStringAttribute('packet_capture');
  }
  public set packetCapture(value: string) {
    this._packetCapture = value;
  }
  public resetPacketCapture() {
    this._packetCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture;
  }
}

export class AntiSpywareSecurityProfileBotnetDomainsListsList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSecurityProfileBotnetDomainsLists[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSecurityProfileBotnetDomainsListsOutputReference {
    return new AntiSpywareSecurityProfileBotnetDomainsListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsRtypeAction {
  /**
  * ANY(255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#any AntiSpywareSecurityProfile#any}
  */
  readonly any?: string;
  /**
  * HTTPS(65)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#https AntiSpywareSecurityProfile#https}
  */
  readonly https?: string;
  /**
  * SVCB(64)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#svcb AntiSpywareSecurityProfile#svcb}
  */
  readonly svcb?: string;
}

export function antiSpywareSecurityProfileBotnetDomainsRtypeActionToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsRtypeAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.stringToTerraform(struct!.any),
    https: cdktf.stringToTerraform(struct!.https),
    svcb: cdktf.stringToTerraform(struct!.svcb),
  }
}


export function antiSpywareSecurityProfileBotnetDomainsRtypeActionToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsRtypeAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.stringToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https: {
      value: cdktf.stringToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svcb: {
      value: cdktf.stringToHclTerraform(struct!.svcb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileBotnetDomainsRtypeActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsRtypeAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    if (this._svcb !== undefined) {
      hasAnyValues = true;
      internalValueResult.svcb = this._svcb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsRtypeAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any = undefined;
      this._https = undefined;
      this._svcb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any = value.any;
      this._https = value.https;
      this._svcb = value.svcb;
    }
  }

  // any - computed: true, optional: true, required: false
  private _any?: string; 
  public get any() {
    return this.getStringAttribute('any');
  }
  public set any(value: string) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // https - computed: true, optional: true, required: false
  private _https?: string; 
  public get https() {
    return this.getStringAttribute('https');
  }
  public set https(value: string) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // svcb - computed: true, optional: true, required: false
  private _svcb?: string; 
  public get svcb() {
    return this.getStringAttribute('svcb');
  }
  public set svcb(value: string) {
    this._svcb = value;
  }
  public resetSvcb() {
    this._svcb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svcbInput() {
    return this._svcb;
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsSinkhole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#ipv4_address AntiSpywareSecurityProfile#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#ipv6_address AntiSpywareSecurityProfile#ipv6_address}
  */
  readonly ipv6Address?: string;
}

export function antiSpywareSecurityProfileBotnetDomainsSinkholeToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
  }
}


export function antiSpywareSecurityProfileBotnetDomainsSinkholeToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileBotnetDomainsSinkholeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
    }
  }

  // ipv4_address - computed: true, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsThreatException {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name: string;
}

export function antiSpywareSecurityProfileBotnetDomainsThreatExceptionToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsThreatException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antiSpywareSecurityProfileBotnetDomainsThreatExceptionToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsThreatException | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileBotnetDomainsThreatExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsThreatException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsThreatException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class AntiSpywareSecurityProfileBotnetDomainsThreatExceptionList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSecurityProfileBotnetDomainsThreatException[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSecurityProfileBotnetDomainsThreatExceptionOutputReference {
    return new AntiSpywareSecurityProfileBotnetDomainsThreatExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSecurityProfileBotnetDomainsWhitelistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#description AntiSpywareSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name: string;
}

export function antiSpywareSecurityProfileBotnetDomainsWhitelistStructToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antiSpywareSecurityProfileBotnetDomainsWhitelistStructToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileBotnetDomainsWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
    }
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
}

export class AntiSpywareSecurityProfileBotnetDomainsWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSecurityProfileBotnetDomainsWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSecurityProfileBotnetDomainsWhitelistStructOutputReference {
    return new AntiSpywareSecurityProfileBotnetDomainsWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSecurityProfileBotnetDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#dns_security_categories AntiSpywareSecurityProfile#dns_security_categories}
  */
  readonly dnsSecurityCategories?: AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#lists AntiSpywareSecurityProfile#lists}
  */
  readonly lists?: AntiSpywareSecurityProfileBotnetDomainsLists[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#rtype_action AntiSpywareSecurityProfile#rtype_action}
  */
  readonly rtypeAction?: AntiSpywareSecurityProfileBotnetDomainsRtypeAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#sinkhole AntiSpywareSecurityProfile#sinkhole}
  */
  readonly sinkhole?: AntiSpywareSecurityProfileBotnetDomainsSinkhole;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#threat_exception AntiSpywareSecurityProfile#threat_exception}
  */
  readonly threatException?: AntiSpywareSecurityProfileBotnetDomainsThreatException[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#whitelist AntiSpywareSecurityProfile#whitelist}
  */
  readonly whitelist?: AntiSpywareSecurityProfileBotnetDomainsWhitelistStruct[] | cdktf.IResolvable;
}

export function antiSpywareSecurityProfileBotnetDomainsToTerraform(struct?: AntiSpywareSecurityProfileBotnetDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_security_categories: cdktf.listMapper(antiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesToTerraform, false)(struct!.dnsSecurityCategories),
    lists: cdktf.listMapper(antiSpywareSecurityProfileBotnetDomainsListsToTerraform, false)(struct!.lists),
    rtype_action: antiSpywareSecurityProfileBotnetDomainsRtypeActionToTerraform(struct!.rtypeAction),
    sinkhole: antiSpywareSecurityProfileBotnetDomainsSinkholeToTerraform(struct!.sinkhole),
    threat_exception: cdktf.listMapper(antiSpywareSecurityProfileBotnetDomainsThreatExceptionToTerraform, false)(struct!.threatException),
    whitelist: cdktf.listMapper(antiSpywareSecurityProfileBotnetDomainsWhitelistStructToTerraform, false)(struct!.whitelist),
  }
}


export function antiSpywareSecurityProfileBotnetDomainsToHclTerraform(struct?: AntiSpywareSecurityProfileBotnetDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_security_categories: {
      value: cdktf.listMapperHcl(antiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesToHclTerraform, false)(struct!.dnsSecurityCategories),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesList",
    },
    lists: {
      value: cdktf.listMapperHcl(antiSpywareSecurityProfileBotnetDomainsListsToHclTerraform, false)(struct!.lists),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsListsList",
    },
    rtype_action: {
      value: antiSpywareSecurityProfileBotnetDomainsRtypeActionToHclTerraform(struct!.rtypeAction),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsRtypeAction",
    },
    sinkhole: {
      value: antiSpywareSecurityProfileBotnetDomainsSinkholeToHclTerraform(struct!.sinkhole),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsSinkhole",
    },
    threat_exception: {
      value: cdktf.listMapperHcl(antiSpywareSecurityProfileBotnetDomainsThreatExceptionToHclTerraform, false)(struct!.threatException),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsThreatExceptionList",
    },
    whitelist: {
      value: cdktf.listMapperHcl(antiSpywareSecurityProfileBotnetDomainsWhitelistStructToHclTerraform, false)(struct!.whitelist),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSecurityProfileBotnetDomainsWhitelistStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileBotnetDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileBotnetDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSecurityCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSecurityCategories = this._dnsSecurityCategories?.internalValue;
    }
    if (this._lists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lists = this._lists?.internalValue;
    }
    if (this._rtypeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtypeAction = this._rtypeAction?.internalValue;
    }
    if (this._sinkhole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkhole = this._sinkhole?.internalValue;
    }
    if (this._threatException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatException = this._threatException?.internalValue;
    }
    if (this._whitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileBotnetDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsSecurityCategories.internalValue = undefined;
      this._lists.internalValue = undefined;
      this._rtypeAction.internalValue = undefined;
      this._sinkhole.internalValue = undefined;
      this._threatException.internalValue = undefined;
      this._whitelist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsSecurityCategories.internalValue = value.dnsSecurityCategories;
      this._lists.internalValue = value.lists;
      this._rtypeAction.internalValue = value.rtypeAction;
      this._sinkhole.internalValue = value.sinkhole;
      this._threatException.internalValue = value.threatException;
      this._whitelist.internalValue = value.whitelist;
    }
  }

  // dns_security_categories - computed: false, optional: true, required: false
  private _dnsSecurityCategories = new AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesList(this, "dns_security_categories", false);
  public get dnsSecurityCategories() {
    return this._dnsSecurityCategories;
  }
  public putDnsSecurityCategories(value: AntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories[] | cdktf.IResolvable) {
    this._dnsSecurityCategories.internalValue = value;
  }
  public resetDnsSecurityCategories() {
    this._dnsSecurityCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecurityCategoriesInput() {
    return this._dnsSecurityCategories.internalValue;
  }

  // lists - computed: false, optional: true, required: false
  private _lists = new AntiSpywareSecurityProfileBotnetDomainsListsList(this, "lists", false);
  public get lists() {
    return this._lists;
  }
  public putLists(value: AntiSpywareSecurityProfileBotnetDomainsLists[] | cdktf.IResolvable) {
    this._lists.internalValue = value;
  }
  public resetLists() {
    this._lists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listsInput() {
    return this._lists.internalValue;
  }

  // rtype_action - computed: false, optional: true, required: false
  private _rtypeAction = new AntiSpywareSecurityProfileBotnetDomainsRtypeActionOutputReference(this, "rtype_action");
  public get rtypeAction() {
    return this._rtypeAction;
  }
  public putRtypeAction(value: AntiSpywareSecurityProfileBotnetDomainsRtypeAction) {
    this._rtypeAction.internalValue = value;
  }
  public resetRtypeAction() {
    this._rtypeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtypeActionInput() {
    return this._rtypeAction.internalValue;
  }

  // sinkhole - computed: false, optional: true, required: false
  private _sinkhole = new AntiSpywareSecurityProfileBotnetDomainsSinkholeOutputReference(this, "sinkhole");
  public get sinkhole() {
    return this._sinkhole;
  }
  public putSinkhole(value: AntiSpywareSecurityProfileBotnetDomainsSinkhole) {
    this._sinkhole.internalValue = value;
  }
  public resetSinkhole() {
    this._sinkhole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkholeInput() {
    return this._sinkhole.internalValue;
  }

  // threat_exception - computed: false, optional: true, required: false
  private _threatException = new AntiSpywareSecurityProfileBotnetDomainsThreatExceptionList(this, "threat_exception", false);
  public get threatException() {
    return this._threatException;
  }
  public putThreatException(value: AntiSpywareSecurityProfileBotnetDomainsThreatException[] | cdktf.IResolvable) {
    this._threatException.internalValue = value;
  }
  public resetThreatException() {
    this._threatException.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatExceptionInput() {
    return this._threatException.internalValue;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist = new AntiSpywareSecurityProfileBotnetDomainsWhitelistStructList(this, "whitelist", false);
  public get whitelist() {
    return this._whitelist;
  }
  public putWhitelist(value: AntiSpywareSecurityProfileBotnetDomainsWhitelistStruct[] | cdktf.IResolvable) {
    this._whitelist.internalValue = value;
  }
  public resetWhitelist() {
    this._whitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist.internalValue;
  }
}
export interface AntiSpywareSecurityProfileLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#panorama_device AntiSpywareSecurityProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function antiSpywareSecurityProfileLocationDeviceGroupToTerraform(struct?: AntiSpywareSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function antiSpywareSecurityProfileLocationDeviceGroupToHclTerraform(struct?: AntiSpywareSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface AntiSpywareSecurityProfileLocationShared {
}

export function antiSpywareSecurityProfileLocationSharedToTerraform(struct?: AntiSpywareSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileLocationSharedToHclTerraform(struct?: AntiSpywareSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#ngfw_device AntiSpywareSecurityProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function antiSpywareSecurityProfileLocationVsysToTerraform(struct?: AntiSpywareSecurityProfileLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function antiSpywareSecurityProfileLocationVsysToHclTerraform(struct?: AntiSpywareSecurityProfileLocationVsys | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileLocationVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileLocationVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface AntiSpywareSecurityProfileLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#device_group AntiSpywareSecurityProfile#device_group}
  */
  readonly deviceGroup?: AntiSpywareSecurityProfileLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#shared AntiSpywareSecurityProfile#shared}
  */
  readonly shared?: AntiSpywareSecurityProfileLocationShared;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#vsys AntiSpywareSecurityProfile#vsys}
  */
  readonly vsys?: AntiSpywareSecurityProfileLocationVsys;
}

export function antiSpywareSecurityProfileLocationToTerraform(struct?: AntiSpywareSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: antiSpywareSecurityProfileLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: antiSpywareSecurityProfileLocationSharedToTerraform(struct!.shared),
    vsys: antiSpywareSecurityProfileLocationVsysToTerraform(struct!.vsys),
  }
}


export function antiSpywareSecurityProfileLocationToHclTerraform(struct?: AntiSpywareSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: antiSpywareSecurityProfileLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileLocationDeviceGroup",
    },
    shared: {
      value: antiSpywareSecurityProfileLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileLocationShared",
    },
    vsys: {
      value: antiSpywareSecurityProfileLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = undefined;
      this._shared.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = value.deviceGroup;
      this._shared.internalValue = value.shared;
      this._vsys.internalValue = value.vsys;
    }
  }

  // device_group - computed: false, optional: true, required: false
  private _deviceGroup = new AntiSpywareSecurityProfileLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: AntiSpywareSecurityProfileLocationDeviceGroup) {
    this._deviceGroup.internalValue = value;
  }
  public resetDeviceGroup() {
    this._deviceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new AntiSpywareSecurityProfileLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: AntiSpywareSecurityProfileLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new AntiSpywareSecurityProfileLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: AntiSpywareSecurityProfileLocationVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}
export interface AntiSpywareSecurityProfileMicaEngineSpywareEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#inline_policy_action AntiSpywareSecurityProfile#inline_policy_action}
  */
  readonly inlinePolicyAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name: string;
}

export function antiSpywareSecurityProfileMicaEngineSpywareEnabledToTerraform(struct?: AntiSpywareSecurityProfileMicaEngineSpywareEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline_policy_action: cdktf.stringToTerraform(struct!.inlinePolicyAction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antiSpywareSecurityProfileMicaEngineSpywareEnabledToHclTerraform(struct?: AntiSpywareSecurityProfileMicaEngineSpywareEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline_policy_action: {
      value: cdktf.stringToHclTerraform(struct!.inlinePolicyAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileMicaEngineSpywareEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSecurityProfileMicaEngineSpywareEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlinePolicyAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlinePolicyAction = this._inlinePolicyAction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileMicaEngineSpywareEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlinePolicyAction = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlinePolicyAction = value.inlinePolicyAction;
      this._name = value.name;
    }
  }

  // inline_policy_action - computed: true, optional: true, required: false
  private _inlinePolicyAction?: string; 
  public get inlinePolicyAction() {
    return this.getStringAttribute('inline_policy_action');
  }
  public set inlinePolicyAction(value: string) {
    this._inlinePolicyAction = value;
  }
  public resetInlinePolicyAction() {
    this._inlinePolicyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePolicyActionInput() {
    return this._inlinePolicyAction;
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
}

export class AntiSpywareSecurityProfileMicaEngineSpywareEnabledList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSecurityProfileMicaEngineSpywareEnabled[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSecurityProfileMicaEngineSpywareEnabledOutputReference {
    return new AntiSpywareSecurityProfileMicaEngineSpywareEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSecurityProfileRulesActionAlert {
}

export function antiSpywareSecurityProfileRulesActionAlertToTerraform(struct?: AntiSpywareSecurityProfileRulesActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileRulesActionAlertToHclTerraform(struct?: AntiSpywareSecurityProfileRulesActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileRulesActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileRulesActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRulesActionAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileRulesActionAllow {
}

export function antiSpywareSecurityProfileRulesActionAllowToTerraform(struct?: AntiSpywareSecurityProfileRulesActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileRulesActionAllowToHclTerraform(struct?: AntiSpywareSecurityProfileRulesActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileRulesActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileRulesActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRulesActionAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileRulesActionBlockIp {
  /**
  * Duration for block ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#duration AntiSpywareSecurityProfile#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#track_by AntiSpywareSecurityProfile#track_by}
  */
  readonly trackBy?: string;
}

export function antiSpywareSecurityProfileRulesActionBlockIpToTerraform(struct?: AntiSpywareSecurityProfileRulesActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    track_by: cdktf.stringToTerraform(struct!.trackBy),
  }
}


export function antiSpywareSecurityProfileRulesActionBlockIpToHclTerraform(struct?: AntiSpywareSecurityProfileRulesActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_by: {
      value: cdktf.stringToHclTerraform(struct!.trackBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileRulesActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileRulesActionBlockIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._trackBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackBy = this._trackBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRulesActionBlockIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._trackBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._trackBy = value.trackBy;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // track_by - computed: false, optional: true, required: false
  private _trackBy?: string; 
  public get trackBy() {
    return this.getStringAttribute('track_by');
  }
  public set trackBy(value: string) {
    this._trackBy = value;
  }
  public resetTrackBy() {
    this._trackBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackByInput() {
    return this._trackBy;
  }
}
export interface AntiSpywareSecurityProfileRulesActionDefault {
}

export function antiSpywareSecurityProfileRulesActionDefaultToTerraform(struct?: AntiSpywareSecurityProfileRulesActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileRulesActionDefaultToHclTerraform(struct?: AntiSpywareSecurityProfileRulesActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileRulesActionDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileRulesActionDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRulesActionDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileRulesActionDrop {
}

export function antiSpywareSecurityProfileRulesActionDropToTerraform(struct?: AntiSpywareSecurityProfileRulesActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileRulesActionDropToHclTerraform(struct?: AntiSpywareSecurityProfileRulesActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileRulesActionDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileRulesActionDrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRulesActionDrop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileRulesActionResetBoth {
}

export function antiSpywareSecurityProfileRulesActionResetBothToTerraform(struct?: AntiSpywareSecurityProfileRulesActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileRulesActionResetBothToHclTerraform(struct?: AntiSpywareSecurityProfileRulesActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileRulesActionResetBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileRulesActionResetBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRulesActionResetBoth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileRulesActionResetClient {
}

export function antiSpywareSecurityProfileRulesActionResetClientToTerraform(struct?: AntiSpywareSecurityProfileRulesActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileRulesActionResetClientToHclTerraform(struct?: AntiSpywareSecurityProfileRulesActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileRulesActionResetClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileRulesActionResetClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRulesActionResetClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileRulesActionResetServer {
}

export function antiSpywareSecurityProfileRulesActionResetServerToTerraform(struct?: AntiSpywareSecurityProfileRulesActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileRulesActionResetServerToHclTerraform(struct?: AntiSpywareSecurityProfileRulesActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileRulesActionResetServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileRulesActionResetServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRulesActionResetServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#alert AntiSpywareSecurityProfile#alert}
  */
  readonly alert?: AntiSpywareSecurityProfileRulesActionAlert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#allow AntiSpywareSecurityProfile#allow}
  */
  readonly allow?: AntiSpywareSecurityProfileRulesActionAllow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#block_ip AntiSpywareSecurityProfile#block_ip}
  */
  readonly blockIp?: AntiSpywareSecurityProfileRulesActionBlockIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#default AntiSpywareSecurityProfile#default}
  */
  readonly default?: AntiSpywareSecurityProfileRulesActionDefault;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#drop AntiSpywareSecurityProfile#drop}
  */
  readonly drop?: AntiSpywareSecurityProfileRulesActionDrop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#reset_both AntiSpywareSecurityProfile#reset_both}
  */
  readonly resetBoth?: AntiSpywareSecurityProfileRulesActionResetBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#reset_client AntiSpywareSecurityProfile#reset_client}
  */
  readonly resetClient?: AntiSpywareSecurityProfileRulesActionResetClient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#reset_server AntiSpywareSecurityProfile#reset_server}
  */
  readonly resetServer?: AntiSpywareSecurityProfileRulesActionResetServer;
}

export function antiSpywareSecurityProfileRulesActionToTerraform(struct?: AntiSpywareSecurityProfileRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: antiSpywareSecurityProfileRulesActionAlertToTerraform(struct!.alert),
    allow: antiSpywareSecurityProfileRulesActionAllowToTerraform(struct!.allow),
    block_ip: antiSpywareSecurityProfileRulesActionBlockIpToTerraform(struct!.blockIp),
    default: antiSpywareSecurityProfileRulesActionDefaultToTerraform(struct!.default),
    drop: antiSpywareSecurityProfileRulesActionDropToTerraform(struct!.drop),
    reset_both: antiSpywareSecurityProfileRulesActionResetBothToTerraform(struct!.resetBoth),
    reset_client: antiSpywareSecurityProfileRulesActionResetClientToTerraform(struct!.resetClient),
    reset_server: antiSpywareSecurityProfileRulesActionResetServerToTerraform(struct!.resetServer),
  }
}


export function antiSpywareSecurityProfileRulesActionToHclTerraform(struct?: AntiSpywareSecurityProfileRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: antiSpywareSecurityProfileRulesActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileRulesActionAlert",
    },
    allow: {
      value: antiSpywareSecurityProfileRulesActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileRulesActionAllow",
    },
    block_ip: {
      value: antiSpywareSecurityProfileRulesActionBlockIpToHclTerraform(struct!.blockIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileRulesActionBlockIp",
    },
    default: {
      value: antiSpywareSecurityProfileRulesActionDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileRulesActionDefault",
    },
    drop: {
      value: antiSpywareSecurityProfileRulesActionDropToHclTerraform(struct!.drop),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileRulesActionDrop",
    },
    reset_both: {
      value: antiSpywareSecurityProfileRulesActionResetBothToHclTerraform(struct!.resetBoth),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileRulesActionResetBoth",
    },
    reset_client: {
      value: antiSpywareSecurityProfileRulesActionResetClientToHclTerraform(struct!.resetClient),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileRulesActionResetClient",
    },
    reset_server: {
      value: antiSpywareSecurityProfileRulesActionResetServerToHclTerraform(struct!.resetServer),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileRulesActionResetServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileRulesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._blockIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp?.internalValue;
    }
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._drop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop?.internalValue;
    }
    if (this._resetBoth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetBoth = this._resetBoth?.internalValue;
    }
    if (this._resetClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetClient = this._resetClient?.internalValue;
    }
    if (this._resetServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetServer = this._resetServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRulesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert.internalValue = undefined;
      this._allow.internalValue = undefined;
      this._blockIp.internalValue = undefined;
      this._default.internalValue = undefined;
      this._drop.internalValue = undefined;
      this._resetBoth.internalValue = undefined;
      this._resetClient.internalValue = undefined;
      this._resetServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert.internalValue = value.alert;
      this._allow.internalValue = value.allow;
      this._blockIp.internalValue = value.blockIp;
      this._default.internalValue = value.default;
      this._drop.internalValue = value.drop;
      this._resetBoth.internalValue = value.resetBoth;
      this._resetClient.internalValue = value.resetClient;
      this._resetServer.internalValue = value.resetServer;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new AntiSpywareSecurityProfileRulesActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: AntiSpywareSecurityProfileRulesActionAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new AntiSpywareSecurityProfileRulesActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: AntiSpywareSecurityProfileRulesActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp = new AntiSpywareSecurityProfileRulesActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
  public putBlockIp(value: AntiSpywareSecurityProfileRulesActionBlockIp) {
    this._blockIp.internalValue = value;
  }
  public resetBlockIp() {
    this._blockIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default = new AntiSpywareSecurityProfileRulesActionDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: AntiSpywareSecurityProfileRulesActionDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // drop - computed: false, optional: true, required: false
  private _drop = new AntiSpywareSecurityProfileRulesActionDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }
  public putDrop(value: AntiSpywareSecurityProfileRulesActionDrop) {
    this._drop.internalValue = value;
  }
  public resetDrop() {
    this._drop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop.internalValue;
  }

  // reset_both - computed: false, optional: true, required: false
  private _resetBoth = new AntiSpywareSecurityProfileRulesActionResetBothOutputReference(this, "reset_both");
  public get resetBoth() {
    return this._resetBoth;
  }
  public putResetBoth(value: AntiSpywareSecurityProfileRulesActionResetBoth) {
    this._resetBoth.internalValue = value;
  }
  public resetResetBoth() {
    this._resetBoth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetBothInput() {
    return this._resetBoth.internalValue;
  }

  // reset_client - computed: false, optional: true, required: false
  private _resetClient = new AntiSpywareSecurityProfileRulesActionResetClientOutputReference(this, "reset_client");
  public get resetClient() {
    return this._resetClient;
  }
  public putResetClient(value: AntiSpywareSecurityProfileRulesActionResetClient) {
    this._resetClient.internalValue = value;
  }
  public resetResetClient() {
    this._resetClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetClientInput() {
    return this._resetClient.internalValue;
  }

  // reset_server - computed: false, optional: true, required: false
  private _resetServer = new AntiSpywareSecurityProfileRulesActionResetServerOutputReference(this, "reset_server");
  public get resetServer() {
    return this._resetServer;
  }
  public putResetServer(value: AntiSpywareSecurityProfileRulesActionResetServer) {
    this._resetServer.internalValue = value;
  }
  public resetResetServer() {
    this._resetServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetServerInput() {
    return this._resetServer.internalValue;
  }
}
export interface AntiSpywareSecurityProfileRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#action AntiSpywareSecurityProfile#action}
  */
  readonly action?: AntiSpywareSecurityProfileRulesAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#category AntiSpywareSecurityProfile#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#packet_capture AntiSpywareSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#severity AntiSpywareSecurityProfile#severity}
  */
  readonly severity?: string[];
  /**
  * Threat name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#threat_name AntiSpywareSecurityProfile#threat_name}
  */
  readonly threatName?: string;
}

export function antiSpywareSecurityProfileRulesToTerraform(struct?: AntiSpywareSecurityProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: antiSpywareSecurityProfileRulesActionToTerraform(struct!.action),
    category: cdktf.stringToTerraform(struct!.category),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
    severity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severity),
    threat_name: cdktf.stringToTerraform(struct!.threatName),
  }
}


export function antiSpywareSecurityProfileRulesToHclTerraform(struct?: AntiSpywareSecurityProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: antiSpywareSecurityProfileRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileRulesAction",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_capture: {
      value: cdktf.stringToHclTerraform(struct!.packetCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threat_name: {
      value: cdktf.stringToHclTerraform(struct!.threatName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSecurityProfileRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapture = this._packetCapture;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._threatName !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatName = this._threatName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._category = undefined;
      this._name = undefined;
      this._packetCapture = undefined;
      this._severity = undefined;
      this._threatName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._category = value.category;
      this._name = value.name;
      this._packetCapture = value.packetCapture;
      this._severity = value.severity;
      this._threatName = value.threatName;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new AntiSpywareSecurityProfileRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AntiSpywareSecurityProfileRulesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // packet_capture - computed: true, optional: true, required: false
  private _packetCapture?: string; 
  public get packetCapture() {
    return this.getStringAttribute('packet_capture');
  }
  public set packetCapture(value: string) {
    this._packetCapture = value;
  }
  public resetPacketCapture() {
    this._packetCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string[]; 
  public get severity() {
    return this.getListAttribute('severity');
  }
  public set severity(value: string[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // threat_name - computed: true, optional: true, required: false
  private _threatName?: string; 
  public get threatName() {
    return this.getStringAttribute('threat_name');
  }
  public set threatName(value: string) {
    this._threatName = value;
  }
  public resetThreatName() {
    this._threatName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatNameInput() {
    return this._threatName;
  }
}

export class AntiSpywareSecurityProfileRulesList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSecurityProfileRules[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSecurityProfileRulesOutputReference {
    return new AntiSpywareSecurityProfileRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionActionAlert {
}

export function antiSpywareSecurityProfileThreatExceptionActionAlertToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileThreatExceptionActionAlertToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileThreatExceptionActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionActionAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionActionAllow {
}

export function antiSpywareSecurityProfileThreatExceptionActionAllowToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileThreatExceptionActionAllowToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileThreatExceptionActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionActionAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionActionBlockIp {
  /**
  * Duration for block ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#duration AntiSpywareSecurityProfile#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#track_by AntiSpywareSecurityProfile#track_by}
  */
  readonly trackBy?: string;
}

export function antiSpywareSecurityProfileThreatExceptionActionBlockIpToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    track_by: cdktf.stringToTerraform(struct!.trackBy),
  }
}


export function antiSpywareSecurityProfileThreatExceptionActionBlockIpToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_by: {
      value: cdktf.stringToHclTerraform(struct!.trackBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileThreatExceptionActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionActionBlockIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._trackBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackBy = this._trackBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionActionBlockIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._trackBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._trackBy = value.trackBy;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // track_by - computed: false, optional: true, required: false
  private _trackBy?: string; 
  public get trackBy() {
    return this.getStringAttribute('track_by');
  }
  public set trackBy(value: string) {
    this._trackBy = value;
  }
  public resetTrackBy() {
    this._trackBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackByInput() {
    return this._trackBy;
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionActionDefault {
}

export function antiSpywareSecurityProfileThreatExceptionActionDefaultToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileThreatExceptionActionDefaultToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileThreatExceptionActionDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionActionDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionActionDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionActionDrop {
}

export function antiSpywareSecurityProfileThreatExceptionActionDropToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileThreatExceptionActionDropToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileThreatExceptionActionDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionActionDrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionActionDrop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionActionResetBoth {
}

export function antiSpywareSecurityProfileThreatExceptionActionResetBothToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileThreatExceptionActionResetBothToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileThreatExceptionActionResetBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionActionResetBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionActionResetBoth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionActionResetClient {
}

export function antiSpywareSecurityProfileThreatExceptionActionResetClientToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileThreatExceptionActionResetClientToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileThreatExceptionActionResetClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionActionResetClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionActionResetClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionActionResetServer {
}

export function antiSpywareSecurityProfileThreatExceptionActionResetServerToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSecurityProfileThreatExceptionActionResetServerToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSecurityProfileThreatExceptionActionResetServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionActionResetServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionActionResetServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#alert AntiSpywareSecurityProfile#alert}
  */
  readonly alert?: AntiSpywareSecurityProfileThreatExceptionActionAlert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#allow AntiSpywareSecurityProfile#allow}
  */
  readonly allow?: AntiSpywareSecurityProfileThreatExceptionActionAllow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#block_ip AntiSpywareSecurityProfile#block_ip}
  */
  readonly blockIp?: AntiSpywareSecurityProfileThreatExceptionActionBlockIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#default AntiSpywareSecurityProfile#default}
  */
  readonly default?: AntiSpywareSecurityProfileThreatExceptionActionDefault;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#drop AntiSpywareSecurityProfile#drop}
  */
  readonly drop?: AntiSpywareSecurityProfileThreatExceptionActionDrop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#reset_both AntiSpywareSecurityProfile#reset_both}
  */
  readonly resetBoth?: AntiSpywareSecurityProfileThreatExceptionActionResetBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#reset_client AntiSpywareSecurityProfile#reset_client}
  */
  readonly resetClient?: AntiSpywareSecurityProfileThreatExceptionActionResetClient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#reset_server AntiSpywareSecurityProfile#reset_server}
  */
  readonly resetServer?: AntiSpywareSecurityProfileThreatExceptionActionResetServer;
}

export function antiSpywareSecurityProfileThreatExceptionActionToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: antiSpywareSecurityProfileThreatExceptionActionAlertToTerraform(struct!.alert),
    allow: antiSpywareSecurityProfileThreatExceptionActionAllowToTerraform(struct!.allow),
    block_ip: antiSpywareSecurityProfileThreatExceptionActionBlockIpToTerraform(struct!.blockIp),
    default: antiSpywareSecurityProfileThreatExceptionActionDefaultToTerraform(struct!.default),
    drop: antiSpywareSecurityProfileThreatExceptionActionDropToTerraform(struct!.drop),
    reset_both: antiSpywareSecurityProfileThreatExceptionActionResetBothToTerraform(struct!.resetBoth),
    reset_client: antiSpywareSecurityProfileThreatExceptionActionResetClientToTerraform(struct!.resetClient),
    reset_server: antiSpywareSecurityProfileThreatExceptionActionResetServerToTerraform(struct!.resetServer),
  }
}


export function antiSpywareSecurityProfileThreatExceptionActionToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: antiSpywareSecurityProfileThreatExceptionActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionActionAlert",
    },
    allow: {
      value: antiSpywareSecurityProfileThreatExceptionActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionActionAllow",
    },
    block_ip: {
      value: antiSpywareSecurityProfileThreatExceptionActionBlockIpToHclTerraform(struct!.blockIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionActionBlockIp",
    },
    default: {
      value: antiSpywareSecurityProfileThreatExceptionActionDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionActionDefault",
    },
    drop: {
      value: antiSpywareSecurityProfileThreatExceptionActionDropToHclTerraform(struct!.drop),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionActionDrop",
    },
    reset_both: {
      value: antiSpywareSecurityProfileThreatExceptionActionResetBothToHclTerraform(struct!.resetBoth),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionActionResetBoth",
    },
    reset_client: {
      value: antiSpywareSecurityProfileThreatExceptionActionResetClientToHclTerraform(struct!.resetClient),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionActionResetClient",
    },
    reset_server: {
      value: antiSpywareSecurityProfileThreatExceptionActionResetServerToHclTerraform(struct!.resetServer),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionActionResetServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileThreatExceptionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._blockIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp?.internalValue;
    }
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._drop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop?.internalValue;
    }
    if (this._resetBoth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetBoth = this._resetBoth?.internalValue;
    }
    if (this._resetClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetClient = this._resetClient?.internalValue;
    }
    if (this._resetServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetServer = this._resetServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert.internalValue = undefined;
      this._allow.internalValue = undefined;
      this._blockIp.internalValue = undefined;
      this._default.internalValue = undefined;
      this._drop.internalValue = undefined;
      this._resetBoth.internalValue = undefined;
      this._resetClient.internalValue = undefined;
      this._resetServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert.internalValue = value.alert;
      this._allow.internalValue = value.allow;
      this._blockIp.internalValue = value.blockIp;
      this._default.internalValue = value.default;
      this._drop.internalValue = value.drop;
      this._resetBoth.internalValue = value.resetBoth;
      this._resetClient.internalValue = value.resetClient;
      this._resetServer.internalValue = value.resetServer;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new AntiSpywareSecurityProfileThreatExceptionActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: AntiSpywareSecurityProfileThreatExceptionActionAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new AntiSpywareSecurityProfileThreatExceptionActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: AntiSpywareSecurityProfileThreatExceptionActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp = new AntiSpywareSecurityProfileThreatExceptionActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
  public putBlockIp(value: AntiSpywareSecurityProfileThreatExceptionActionBlockIp) {
    this._blockIp.internalValue = value;
  }
  public resetBlockIp() {
    this._blockIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default = new AntiSpywareSecurityProfileThreatExceptionActionDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: AntiSpywareSecurityProfileThreatExceptionActionDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // drop - computed: false, optional: true, required: false
  private _drop = new AntiSpywareSecurityProfileThreatExceptionActionDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }
  public putDrop(value: AntiSpywareSecurityProfileThreatExceptionActionDrop) {
    this._drop.internalValue = value;
  }
  public resetDrop() {
    this._drop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop.internalValue;
  }

  // reset_both - computed: false, optional: true, required: false
  private _resetBoth = new AntiSpywareSecurityProfileThreatExceptionActionResetBothOutputReference(this, "reset_both");
  public get resetBoth() {
    return this._resetBoth;
  }
  public putResetBoth(value: AntiSpywareSecurityProfileThreatExceptionActionResetBoth) {
    this._resetBoth.internalValue = value;
  }
  public resetResetBoth() {
    this._resetBoth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetBothInput() {
    return this._resetBoth.internalValue;
  }

  // reset_client - computed: false, optional: true, required: false
  private _resetClient = new AntiSpywareSecurityProfileThreatExceptionActionResetClientOutputReference(this, "reset_client");
  public get resetClient() {
    return this._resetClient;
  }
  public putResetClient(value: AntiSpywareSecurityProfileThreatExceptionActionResetClient) {
    this._resetClient.internalValue = value;
  }
  public resetResetClient() {
    this._resetClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetClientInput() {
    return this._resetClient.internalValue;
  }

  // reset_server - computed: false, optional: true, required: false
  private _resetServer = new AntiSpywareSecurityProfileThreatExceptionActionResetServerOutputReference(this, "reset_server");
  public get resetServer() {
    return this._resetServer;
  }
  public putResetServer(value: AntiSpywareSecurityProfileThreatExceptionActionResetServer) {
    this._resetServer.internalValue = value;
  }
  public resetResetServer() {
    this._resetServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetServerInput() {
    return this._resetServer.internalValue;
  }
}
export interface AntiSpywareSecurityProfileThreatExceptionExemptIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name: string;
}

export function antiSpywareSecurityProfileThreatExceptionExemptIpToTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionExemptIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antiSpywareSecurityProfileThreatExceptionExemptIpToHclTerraform(struct?: AntiSpywareSecurityProfileThreatExceptionExemptIp | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileThreatExceptionExemptIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSecurityProfileThreatExceptionExemptIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatExceptionExemptIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class AntiSpywareSecurityProfileThreatExceptionExemptIpList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSecurityProfileThreatExceptionExemptIp[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSecurityProfileThreatExceptionExemptIpOutputReference {
    return new AntiSpywareSecurityProfileThreatExceptionExemptIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSecurityProfileThreatException {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#action AntiSpywareSecurityProfile#action}
  */
  readonly action?: AntiSpywareSecurityProfileThreatExceptionAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#exempt_ip AntiSpywareSecurityProfile#exempt_ip}
  */
  readonly exemptIp?: AntiSpywareSecurityProfileThreatExceptionExemptIp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#name AntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#packet_capture AntiSpywareSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
}

export function antiSpywareSecurityProfileThreatExceptionToTerraform(struct?: AntiSpywareSecurityProfileThreatException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: antiSpywareSecurityProfileThreatExceptionActionToTerraform(struct!.action),
    exempt_ip: cdktf.listMapper(antiSpywareSecurityProfileThreatExceptionExemptIpToTerraform, false)(struct!.exemptIp),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
  }
}


export function antiSpywareSecurityProfileThreatExceptionToHclTerraform(struct?: AntiSpywareSecurityProfileThreatException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: antiSpywareSecurityProfileThreatExceptionActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionAction",
    },
    exempt_ip: {
      value: cdktf.listMapperHcl(antiSpywareSecurityProfileThreatExceptionExemptIpToHclTerraform, false)(struct!.exemptIp),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSecurityProfileThreatExceptionExemptIpList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_capture: {
      value: cdktf.stringToHclTerraform(struct!.packetCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSecurityProfileThreatExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSecurityProfileThreatException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._exemptIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptIp = this._exemptIp?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapture = this._packetCapture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSecurityProfileThreatException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._exemptIp.internalValue = undefined;
      this._name = undefined;
      this._packetCapture = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._exemptIp.internalValue = value.exemptIp;
      this._name = value.name;
      this._packetCapture = value.packetCapture;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new AntiSpywareSecurityProfileThreatExceptionActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AntiSpywareSecurityProfileThreatExceptionAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // exempt_ip - computed: false, optional: true, required: false
  private _exemptIp = new AntiSpywareSecurityProfileThreatExceptionExemptIpList(this, "exempt_ip", false);
  public get exemptIp() {
    return this._exemptIp;
  }
  public putExemptIp(value: AntiSpywareSecurityProfileThreatExceptionExemptIp[] | cdktf.IResolvable) {
    this._exemptIp.internalValue = value;
  }
  public resetExemptIp() {
    this._exemptIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptIpInput() {
    return this._exemptIp.internalValue;
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

  // packet_capture - computed: true, optional: true, required: false
  private _packetCapture?: string; 
  public get packetCapture() {
    return this.getStringAttribute('packet_capture');
  }
  public set packetCapture(value: string) {
    this._packetCapture = value;
  }
  public resetPacketCapture() {
    this._packetCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture;
  }
}

export class AntiSpywareSecurityProfileThreatExceptionList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSecurityProfileThreatException[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSecurityProfileThreatExceptionOutputReference {
    return new AntiSpywareSecurityProfileThreatExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile panos_anti_spyware_security_profile}
*/
export class AntiSpywareSecurityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_anti_spyware_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiSpywareSecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiSpywareSecurityProfile to import
  * @param importFromId The id of the existing AntiSpywareSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiSpywareSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_anti_spyware_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/anti_spyware_security_profile panos_anti_spyware_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiSpywareSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AntiSpywareSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_anti_spyware_security_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.6',
        providerVersionConstraint: '2.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._botnetDomains.internalValue = config.botnetDomains;
    this._cloudInlineAnalysis = config.cloudInlineAnalysis;
    this._description = config.description;
    this._disableOverride = config.disableOverride;
    this._inlineExceptionEdlUrl = config.inlineExceptionEdlUrl;
    this._inlineExceptionIpAddress = config.inlineExceptionIpAddress;
    this._location.internalValue = config.location;
    this._micaEngineSpywareEnabled.internalValue = config.micaEngineSpywareEnabled;
    this._name = config.name;
    this._rules.internalValue = config.rules;
    this._threatException.internalValue = config.threatException;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // botnet_domains - computed: false, optional: true, required: false
  private _botnetDomains = new AntiSpywareSecurityProfileBotnetDomainsOutputReference(this, "botnet_domains");
  public get botnetDomains() {
    return this._botnetDomains;
  }
  public putBotnetDomains(value: AntiSpywareSecurityProfileBotnetDomains) {
    this._botnetDomains.internalValue = value;
  }
  public resetBotnetDomains() {
    this._botnetDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botnetDomainsInput() {
    return this._botnetDomains.internalValue;
  }

  // cloud_inline_analysis - computed: false, optional: true, required: false
  private _cloudInlineAnalysis?: boolean | cdktf.IResolvable; 
  public get cloudInlineAnalysis() {
    return this.getBooleanAttribute('cloud_inline_analysis');
  }
  public set cloudInlineAnalysis(value: boolean | cdktf.IResolvable) {
    this._cloudInlineAnalysis = value;
  }
  public resetCloudInlineAnalysis() {
    this._cloudInlineAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInlineAnalysisInput() {
    return this._cloudInlineAnalysis;
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

  // disable_override - computed: false, optional: true, required: false
  private _disableOverride?: string; 
  public get disableOverride() {
    return this.getStringAttribute('disable_override');
  }
  public set disableOverride(value: string) {
    this._disableOverride = value;
  }
  public resetDisableOverride() {
    this._disableOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOverrideInput() {
    return this._disableOverride;
  }

  // inline_exception_edl_url - computed: false, optional: true, required: false
  private _inlineExceptionEdlUrl?: string[]; 
  public get inlineExceptionEdlUrl() {
    return this.getListAttribute('inline_exception_edl_url');
  }
  public set inlineExceptionEdlUrl(value: string[]) {
    this._inlineExceptionEdlUrl = value;
  }
  public resetInlineExceptionEdlUrl() {
    this._inlineExceptionEdlUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineExceptionEdlUrlInput() {
    return this._inlineExceptionEdlUrl;
  }

  // inline_exception_ip_address - computed: false, optional: true, required: false
  private _inlineExceptionIpAddress?: string[]; 
  public get inlineExceptionIpAddress() {
    return this.getListAttribute('inline_exception_ip_address');
  }
  public set inlineExceptionIpAddress(value: string[]) {
    this._inlineExceptionIpAddress = value;
  }
  public resetInlineExceptionIpAddress() {
    this._inlineExceptionIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineExceptionIpAddressInput() {
    return this._inlineExceptionIpAddress;
  }

  // location - computed: false, optional: false, required: true
  private _location = new AntiSpywareSecurityProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: AntiSpywareSecurityProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // mica_engine_spyware_enabled - computed: false, optional: true, required: false
  private _micaEngineSpywareEnabled = new AntiSpywareSecurityProfileMicaEngineSpywareEnabledList(this, "mica_engine_spyware_enabled", false);
  public get micaEngineSpywareEnabled() {
    return this._micaEngineSpywareEnabled;
  }
  public putMicaEngineSpywareEnabled(value: AntiSpywareSecurityProfileMicaEngineSpywareEnabled[] | cdktf.IResolvable) {
    this._micaEngineSpywareEnabled.internalValue = value;
  }
  public resetMicaEngineSpywareEnabled() {
    this._micaEngineSpywareEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get micaEngineSpywareEnabledInput() {
    return this._micaEngineSpywareEnabled.internalValue;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new AntiSpywareSecurityProfileRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AntiSpywareSecurityProfileRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // threat_exception - computed: false, optional: true, required: false
  private _threatException = new AntiSpywareSecurityProfileThreatExceptionList(this, "threat_exception", false);
  public get threatException() {
    return this._threatException;
  }
  public putThreatException(value: AntiSpywareSecurityProfileThreatException[] | cdktf.IResolvable) {
    this._threatException.internalValue = value;
  }
  public resetThreatException() {
    this._threatException.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatExceptionInput() {
    return this._threatException.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      botnet_domains: antiSpywareSecurityProfileBotnetDomainsToTerraform(this._botnetDomains.internalValue),
      cloud_inline_analysis: cdktf.booleanToTerraform(this._cloudInlineAnalysis),
      description: cdktf.stringToTerraform(this._description),
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      inline_exception_edl_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inlineExceptionEdlUrl),
      inline_exception_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inlineExceptionIpAddress),
      location: antiSpywareSecurityProfileLocationToTerraform(this._location.internalValue),
      mica_engine_spyware_enabled: cdktf.listMapper(antiSpywareSecurityProfileMicaEngineSpywareEnabledToTerraform, false)(this._micaEngineSpywareEnabled.internalValue),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(antiSpywareSecurityProfileRulesToTerraform, false)(this._rules.internalValue),
      threat_exception: cdktf.listMapper(antiSpywareSecurityProfileThreatExceptionToTerraform, false)(this._threatException.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      botnet_domains: {
        value: antiSpywareSecurityProfileBotnetDomainsToHclTerraform(this._botnetDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AntiSpywareSecurityProfileBotnetDomains",
      },
      cloud_inline_analysis: {
        value: cdktf.booleanToHclTerraform(this._cloudInlineAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_override: {
        value: cdktf.stringToHclTerraform(this._disableOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inline_exception_edl_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inlineExceptionEdlUrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      inline_exception_ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inlineExceptionIpAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: antiSpywareSecurityProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AntiSpywareSecurityProfileLocation",
      },
      mica_engine_spyware_enabled: {
        value: cdktf.listMapperHcl(antiSpywareSecurityProfileMicaEngineSpywareEnabledToHclTerraform, false)(this._micaEngineSpywareEnabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiSpywareSecurityProfileMicaEngineSpywareEnabledList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(antiSpywareSecurityProfileRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiSpywareSecurityProfileRulesList",
      },
      threat_exception: {
        value: cdktf.listMapperHcl(antiSpywareSecurityProfileThreatExceptionToHclTerraform, false)(this._threatException.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiSpywareSecurityProfileThreatExceptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
