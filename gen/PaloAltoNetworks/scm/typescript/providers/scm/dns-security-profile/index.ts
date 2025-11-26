// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Botnet domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#botnet_domains DnsSecurityProfile#botnet_domains}
  */
  readonly botnetDomains?: DnsSecurityProfileBotnetDomains;
  /**
  * The description of the DNS security profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#description DnsSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#device DnsSecurityProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#folder DnsSecurityProfile#folder}
  */
  readonly folder?: string;
  /**
  * The name of the DNS security profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#name DnsSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#snippet DnsSecurityProfile#snippet}
  */
  readonly snippet?: string;
}
export interface DnsSecurityProfileBotnetDomainsDnsSecurityCategories {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#action DnsSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * Log level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#log_level DnsSecurityProfile#log_level}
  */
  readonly logLevel?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#name DnsSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * Packet capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#packet_capture DnsSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
}

export function dnsSecurityProfileBotnetDomainsDnsSecurityCategoriesToTerraform(struct?: DnsSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable): any {
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


export function dnsSecurityProfileBotnetDomainsDnsSecurityCategoriesToHclTerraform(struct?: DnsSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable): any {
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

export class DnsSecurityProfileBotnetDomainsDnsSecurityCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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

  // packet_capture - computed: false, optional: true, required: false
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

export class DnsSecurityProfileBotnetDomainsDnsSecurityCategoriesList extends cdktf.ComplexList {
  public internalValue? : DnsSecurityProfileBotnetDomainsDnsSecurityCategories[] | cdktf.IResolvable

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
  public get(index: number): DnsSecurityProfileBotnetDomainsDnsSecurityCategoriesOutputReference {
    return new DnsSecurityProfileBotnetDomainsDnsSecurityCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsSecurityProfileBotnetDomainsListsActionAlert {
}

export function dnsSecurityProfileBotnetDomainsListsActionAlertToTerraform(struct?: DnsSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsSecurityProfileBotnetDomainsListsActionAlertToHclTerraform(struct?: DnsSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsSecurityProfileBotnetDomainsListsActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable | undefined) {
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
export interface DnsSecurityProfileBotnetDomainsListsActionAllow {
}

export function dnsSecurityProfileBotnetDomainsListsActionAllowToTerraform(struct?: DnsSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsSecurityProfileBotnetDomainsListsActionAllowToHclTerraform(struct?: DnsSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsSecurityProfileBotnetDomainsListsActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable | undefined) {
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
export interface DnsSecurityProfileBotnetDomainsListsActionBlock {
}

export function dnsSecurityProfileBotnetDomainsListsActionBlockToTerraform(struct?: DnsSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsSecurityProfileBotnetDomainsListsActionBlockToHclTerraform(struct?: DnsSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsSecurityProfileBotnetDomainsListsActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable | undefined) {
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
export interface DnsSecurityProfileBotnetDomainsListsActionSinkhole {
}

export function dnsSecurityProfileBotnetDomainsListsActionSinkholeToTerraform(struct?: DnsSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsSecurityProfileBotnetDomainsListsActionSinkholeToHclTerraform(struct?: DnsSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsSecurityProfileBotnetDomainsListsActionSinkholeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable | undefined) {
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
export interface DnsSecurityProfileBotnetDomainsListsAction {
  /**
  * Alert
  * 
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block`, and `sinkhole`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#alert DnsSecurityProfile#alert}
  */
  readonly alert?: DnsSecurityProfileBotnetDomainsListsActionAlert;
  /**
  * Allow
  * 
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block`, and `sinkhole`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#allow DnsSecurityProfile#allow}
  */
  readonly allow?: DnsSecurityProfileBotnetDomainsListsActionAllow;
  /**
  * Block
  * 
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block`, and `sinkhole`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#block DnsSecurityProfile#block}
  */
  readonly block?: DnsSecurityProfileBotnetDomainsListsActionBlock;
  /**
  * Sinkhole
  * 
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block`, and `sinkhole`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#sinkhole DnsSecurityProfile#sinkhole}
  */
  readonly sinkhole?: DnsSecurityProfileBotnetDomainsListsActionSinkhole;
}

export function dnsSecurityProfileBotnetDomainsListsActionToTerraform(struct?: DnsSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: dnsSecurityProfileBotnetDomainsListsActionAlertToTerraform(struct!.alert),
    allow: dnsSecurityProfileBotnetDomainsListsActionAllowToTerraform(struct!.allow),
    block: dnsSecurityProfileBotnetDomainsListsActionBlockToTerraform(struct!.block),
    sinkhole: dnsSecurityProfileBotnetDomainsListsActionSinkholeToTerraform(struct!.sinkhole),
  }
}


export function dnsSecurityProfileBotnetDomainsListsActionToHclTerraform(struct?: DnsSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: dnsSecurityProfileBotnetDomainsListsActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsSecurityProfileBotnetDomainsListsActionAlert",
    },
    allow: {
      value: dnsSecurityProfileBotnetDomainsListsActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsSecurityProfileBotnetDomainsListsActionAllow",
    },
    block: {
      value: dnsSecurityProfileBotnetDomainsListsActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsSecurityProfileBotnetDomainsListsActionBlock",
    },
    sinkhole: {
      value: dnsSecurityProfileBotnetDomainsListsActionSinkholeToHclTerraform(struct!.sinkhole),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsSecurityProfileBotnetDomainsListsActionSinkhole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSecurityProfileBotnetDomainsListsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable | undefined) {
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
  private _alert = new DnsSecurityProfileBotnetDomainsListsActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: DnsSecurityProfileBotnetDomainsListsActionAlert) {
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
  private _allow = new DnsSecurityProfileBotnetDomainsListsActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DnsSecurityProfileBotnetDomainsListsActionAllow) {
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
  private _block = new DnsSecurityProfileBotnetDomainsListsActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: DnsSecurityProfileBotnetDomainsListsActionBlock) {
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
  private _sinkhole = new DnsSecurityProfileBotnetDomainsListsActionSinkholeOutputReference(this, "sinkhole");
  public get sinkhole() {
    return this._sinkhole;
  }
  public putSinkhole(value: DnsSecurityProfileBotnetDomainsListsActionSinkhole) {
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
export interface DnsSecurityProfileBotnetDomainsLists {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#action DnsSecurityProfile#action}
  */
  readonly action?: DnsSecurityProfileBotnetDomainsListsAction;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#name DnsSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Packet capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#packet_capture DnsSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
}

export function dnsSecurityProfileBotnetDomainsListsToTerraform(struct?: DnsSecurityProfileBotnetDomainsLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dnsSecurityProfileBotnetDomainsListsActionToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
  }
}


export function dnsSecurityProfileBotnetDomainsListsToHclTerraform(struct?: DnsSecurityProfileBotnetDomainsLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dnsSecurityProfileBotnetDomainsListsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsSecurityProfileBotnetDomainsListsAction",
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

export class DnsSecurityProfileBotnetDomainsListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSecurityProfileBotnetDomainsLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsSecurityProfileBotnetDomainsLists | cdktf.IResolvable | undefined) {
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
  private _action = new DnsSecurityProfileBotnetDomainsListsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DnsSecurityProfileBotnetDomainsListsAction) {
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

  // packet_capture - computed: false, optional: true, required: false
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

export class DnsSecurityProfileBotnetDomainsListsList extends cdktf.ComplexList {
  public internalValue? : DnsSecurityProfileBotnetDomainsLists[] | cdktf.IResolvable

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
  public get(index: number): DnsSecurityProfileBotnetDomainsListsOutputReference {
    return new DnsSecurityProfileBotnetDomainsListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsSecurityProfileBotnetDomainsSinkhole {
  /**
  * Ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#ipv4_address DnsSecurityProfile#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#ipv6_address DnsSecurityProfile#ipv6_address}
  */
  readonly ipv6Address?: string;
}

export function dnsSecurityProfileBotnetDomainsSinkholeToTerraform(struct?: DnsSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
  }
}


export function dnsSecurityProfileBotnetDomainsSinkholeToHclTerraform(struct?: DnsSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable): any {
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

export class DnsSecurityProfileBotnetDomainsSinkholeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable | undefined) {
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

  // ipv4_address - computed: false, optional: true, required: false
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

  // ipv6_address - computed: false, optional: true, required: false
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
export interface DnsSecurityProfileBotnetDomainsWhitelistStruct {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#description DnsSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * DNS domain or FQDN to be whitelisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#name DnsSecurityProfile#name}
  */
  readonly name: string;
}

export function dnsSecurityProfileBotnetDomainsWhitelistStructToTerraform(struct?: DnsSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsSecurityProfileBotnetDomainsWhitelistStructToHclTerraform(struct?: DnsSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable): any {
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

export class DnsSecurityProfileBotnetDomainsWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable | undefined) {
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

export class DnsSecurityProfileBotnetDomainsWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : DnsSecurityProfileBotnetDomainsWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): DnsSecurityProfileBotnetDomainsWhitelistStructOutputReference {
    return new DnsSecurityProfileBotnetDomainsWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsSecurityProfileBotnetDomains {
  /**
  * DNS categories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#dns_security_categories DnsSecurityProfile#dns_security_categories}
  */
  readonly dnsSecurityCategories?: DnsSecurityProfileBotnetDomainsDnsSecurityCategories[] | cdktf.IResolvable;
  /**
  * Dynamic lists of DNS domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#lists DnsSecurityProfile#lists}
  */
  readonly lists?: DnsSecurityProfileBotnetDomainsLists[] | cdktf.IResolvable;
  /**
  * DNS sinkhole settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#sinkhole DnsSecurityProfile#sinkhole}
  */
  readonly sinkhole?: DnsSecurityProfileBotnetDomainsSinkhole;
  /**
  * DNS security overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#whitelist DnsSecurityProfile#whitelist}
  */
  readonly whitelist?: DnsSecurityProfileBotnetDomainsWhitelistStruct[] | cdktf.IResolvable;
}

export function dnsSecurityProfileBotnetDomainsToTerraform(struct?: DnsSecurityProfileBotnetDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_security_categories: cdktf.listMapper(dnsSecurityProfileBotnetDomainsDnsSecurityCategoriesToTerraform, false)(struct!.dnsSecurityCategories),
    lists: cdktf.listMapper(dnsSecurityProfileBotnetDomainsListsToTerraform, false)(struct!.lists),
    sinkhole: dnsSecurityProfileBotnetDomainsSinkholeToTerraform(struct!.sinkhole),
    whitelist: cdktf.listMapper(dnsSecurityProfileBotnetDomainsWhitelistStructToTerraform, false)(struct!.whitelist),
  }
}


export function dnsSecurityProfileBotnetDomainsToHclTerraform(struct?: DnsSecurityProfileBotnetDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_security_categories: {
      value: cdktf.listMapperHcl(dnsSecurityProfileBotnetDomainsDnsSecurityCategoriesToHclTerraform, false)(struct!.dnsSecurityCategories),
      isBlock: true,
      type: "list",
      storageClassType: "DnsSecurityProfileBotnetDomainsDnsSecurityCategoriesList",
    },
    lists: {
      value: cdktf.listMapperHcl(dnsSecurityProfileBotnetDomainsListsToHclTerraform, false)(struct!.lists),
      isBlock: true,
      type: "list",
      storageClassType: "DnsSecurityProfileBotnetDomainsListsList",
    },
    sinkhole: {
      value: dnsSecurityProfileBotnetDomainsSinkholeToHclTerraform(struct!.sinkhole),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsSecurityProfileBotnetDomainsSinkhole",
    },
    whitelist: {
      value: cdktf.listMapperHcl(dnsSecurityProfileBotnetDomainsWhitelistStructToHclTerraform, false)(struct!.whitelist),
      isBlock: true,
      type: "list",
      storageClassType: "DnsSecurityProfileBotnetDomainsWhitelistStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSecurityProfileBotnetDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSecurityProfileBotnetDomains | cdktf.IResolvable | undefined {
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
    if (this._sinkhole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkhole = this._sinkhole?.internalValue;
    }
    if (this._whitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSecurityProfileBotnetDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsSecurityCategories.internalValue = undefined;
      this._lists.internalValue = undefined;
      this._sinkhole.internalValue = undefined;
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
      this._sinkhole.internalValue = value.sinkhole;
      this._whitelist.internalValue = value.whitelist;
    }
  }

  // dns_security_categories - computed: false, optional: true, required: false
  private _dnsSecurityCategories = new DnsSecurityProfileBotnetDomainsDnsSecurityCategoriesList(this, "dns_security_categories", false);
  public get dnsSecurityCategories() {
    return this._dnsSecurityCategories;
  }
  public putDnsSecurityCategories(value: DnsSecurityProfileBotnetDomainsDnsSecurityCategories[] | cdktf.IResolvable) {
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
  private _lists = new DnsSecurityProfileBotnetDomainsListsList(this, "lists", false);
  public get lists() {
    return this._lists;
  }
  public putLists(value: DnsSecurityProfileBotnetDomainsLists[] | cdktf.IResolvable) {
    this._lists.internalValue = value;
  }
  public resetLists() {
    this._lists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listsInput() {
    return this._lists.internalValue;
  }

  // sinkhole - computed: false, optional: true, required: false
  private _sinkhole = new DnsSecurityProfileBotnetDomainsSinkholeOutputReference(this, "sinkhole");
  public get sinkhole() {
    return this._sinkhole;
  }
  public putSinkhole(value: DnsSecurityProfileBotnetDomainsSinkhole) {
    this._sinkhole.internalValue = value;
  }
  public resetSinkhole() {
    this._sinkhole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkholeInput() {
    return this._sinkhole.internalValue;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist = new DnsSecurityProfileBotnetDomainsWhitelistStructList(this, "whitelist", false);
  public get whitelist() {
    return this._whitelist;
  }
  public putWhitelist(value: DnsSecurityProfileBotnetDomainsWhitelistStruct[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile scm_dns_security_profile}
*/
export class DnsSecurityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_dns_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsSecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsSecurityProfile to import
  * @param importFromId The id of the existing DnsSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_dns_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dns_security_profile scm_dns_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsSecurityProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnsSecurityProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_dns_security_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
    this._description = config.description;
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // botnet_domains - computed: false, optional: true, required: false
  private _botnetDomains = new DnsSecurityProfileBotnetDomainsOutputReference(this, "botnet_domains");
  public get botnetDomains() {
    return this._botnetDomains;
  }
  public putBotnetDomains(value: DnsSecurityProfileBotnetDomains) {
    this._botnetDomains.internalValue = value;
  }
  public resetBotnetDomains() {
    this._botnetDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botnetDomainsInput() {
    return this._botnetDomains.internalValue;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      botnet_domains: dnsSecurityProfileBotnetDomainsToTerraform(this._botnetDomains.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      botnet_domains: {
        value: dnsSecurityProfileBotnetDomainsToHclTerraform(this._botnetDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsSecurityProfileBotnetDomains",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
