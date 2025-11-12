// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosAntiSpywareSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#botnet_domains DataPanosAntiSpywareSecurityProfile#botnet_domains}
  */
  readonly botnetDomains?: DataPanosAntiSpywareSecurityProfileBotnetDomains;
  /**
  * Enable cloud inline analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#cloud_inline_analysis DataPanosAntiSpywareSecurityProfile#cloud_inline_analysis}
  */
  readonly cloudInlineAnalysis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#description DataPanosAntiSpywareSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#disable_override DataPanosAntiSpywareSecurityProfile#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#inline_exception_edl_url DataPanosAntiSpywareSecurityProfile#inline_exception_edl_url}
  */
  readonly inlineExceptionEdlUrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#inline_exception_ip_address DataPanosAntiSpywareSecurityProfile#inline_exception_ip_address}
  */
  readonly inlineExceptionIpAddress?: string[];
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#location DataPanosAntiSpywareSecurityProfile#location}
  */
  readonly location: DataPanosAntiSpywareSecurityProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#mica_engine_spyware_enabled DataPanosAntiSpywareSecurityProfile#mica_engine_spyware_enabled}
  */
  readonly micaEngineSpywareEnabled?: DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabled[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#rules DataPanosAntiSpywareSecurityProfile#rules}
  */
  readonly rules?: DataPanosAntiSpywareSecurityProfileRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#threat_exception DataPanosAntiSpywareSecurityProfile#threat_exception}
  */
  readonly threatException?: DataPanosAntiSpywareSecurityProfileThreatException[] | cdktf.IResolvable;
}
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#action DataPanosAntiSpywareSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#log_level DataPanosAntiSpywareSecurityProfile#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#packet_capture DataPanosAntiSpywareSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable): any {
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


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesOutputReference {
    return new DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlert {
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlertToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlertToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlert | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllow {
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllowToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllowToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllow | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlock {
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlockToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlockToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlock | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole {
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkholeToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkholeToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkholeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsListsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#alert DataPanosAntiSpywareSecurityProfile#alert}
  */
  readonly alert?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#allow DataPanosAntiSpywareSecurityProfile#allow}
  */
  readonly allow?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#block DataPanosAntiSpywareSecurityProfile#block}
  */
  readonly block?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#sinkhole DataPanosAntiSpywareSecurityProfile#sinkhole}
  */
  readonly sinkhole?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole;
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlertToTerraform(struct!.alert),
    allow: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllowToTerraform(struct!.allow),
    block: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlockToTerraform(struct!.block),
    sinkhole: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkholeToTerraform(struct!.sinkhole),
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlert",
    },
    allow: {
      value: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllow",
    },
    block: {
      value: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlock",
    },
    sinkhole: {
      value: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkholeToHclTerraform(struct!.sinkhole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsAction | cdktf.IResolvable | undefined) {
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

  // alert - computed: true, optional: true, required: false
  private _alert = new DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // allow - computed: true, optional: true, required: false
  private _allow = new DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: true, optional: true, required: false
  private _block = new DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // sinkhole - computed: true, optional: true, required: false
  private _sinkhole = new DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkholeOutputReference(this, "sinkhole");
  public get sinkhole() {
    return this._sinkhole;
  }
  public putSinkhole(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionSinkhole) {
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
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsLists {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#action DataPanosAntiSpywareSecurityProfile#action}
  */
  readonly action?: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#packet_capture DataPanosAntiSpywareSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsListsToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsListsAction",
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsLists | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: true, required: false
  private _action = new DataPanosAntiSpywareSecurityProfileBotnetDomainsListsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsListsAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsListsList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntiSpywareSecurityProfileBotnetDomainsLists[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntiSpywareSecurityProfileBotnetDomainsListsOutputReference {
    return new DataPanosAntiSpywareSecurityProfileBotnetDomainsListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeAction {
  /**
  * ANY(255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#any DataPanosAntiSpywareSecurityProfile#any}
  */
  readonly any?: string;
  /**
  * HTTPS(65)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#https DataPanosAntiSpywareSecurityProfile#https}
  */
  readonly https?: string;
  /**
  * SVCB(64)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#svcb DataPanosAntiSpywareSecurityProfile#svcb}
  */
  readonly svcb?: string;
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeActionToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeAction | cdktf.IResolvable): any {
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


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeActionToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeAction | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeAction | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkhole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#ipv4_address DataPanosAntiSpywareSecurityProfile#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#ipv6_address DataPanosAntiSpywareSecurityProfile#ipv6_address}
  */
  readonly ipv6Address?: string;
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsSinkholeToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsSinkholeToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkholeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkhole | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatException {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name: string;
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatException | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatException | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatException | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatException[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionOutputReference {
    return new DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#description DataPanosAntiSpywareSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name: string;
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStruct | cdktf.IResolvable | undefined) {
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

  // description - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructOutputReference {
    return new DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntiSpywareSecurityProfileBotnetDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#dns_security_categories DataPanosAntiSpywareSecurityProfile#dns_security_categories}
  */
  readonly dnsSecurityCategories?: DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#lists DataPanosAntiSpywareSecurityProfile#lists}
  */
  readonly lists?: DataPanosAntiSpywareSecurityProfileBotnetDomainsLists[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#rtype_action DataPanosAntiSpywareSecurityProfile#rtype_action}
  */
  readonly rtypeAction?: DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#sinkhole DataPanosAntiSpywareSecurityProfile#sinkhole}
  */
  readonly sinkhole?: DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkhole;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#threat_exception DataPanosAntiSpywareSecurityProfile#threat_exception}
  */
  readonly threatException?: DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatException[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#whitelist DataPanosAntiSpywareSecurityProfile#whitelist}
  */
  readonly whitelist?: DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStruct[] | cdktf.IResolvable;
}

export function dataPanosAntiSpywareSecurityProfileBotnetDomainsToTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_security_categories: cdktf.listMapper(dataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesToTerraform, false)(struct!.dnsSecurityCategories),
    lists: cdktf.listMapper(dataPanosAntiSpywareSecurityProfileBotnetDomainsListsToTerraform, false)(struct!.lists),
    rtype_action: dataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeActionToTerraform(struct!.rtypeAction),
    sinkhole: dataPanosAntiSpywareSecurityProfileBotnetDomainsSinkholeToTerraform(struct!.sinkhole),
    threat_exception: cdktf.listMapper(dataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionToTerraform, false)(struct!.threatException),
    whitelist: cdktf.listMapper(dataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructToTerraform, false)(struct!.whitelist),
  }
}


export function dataPanosAntiSpywareSecurityProfileBotnetDomainsToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileBotnetDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_security_categories: {
      value: cdktf.listMapperHcl(dataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesToHclTerraform, false)(struct!.dnsSecurityCategories),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesList",
    },
    lists: {
      value: cdktf.listMapperHcl(dataPanosAntiSpywareSecurityProfileBotnetDomainsListsToHclTerraform, false)(struct!.lists),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsListsList",
    },
    rtype_action: {
      value: dataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeActionToHclTerraform(struct!.rtypeAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeAction",
    },
    sinkhole: {
      value: dataPanosAntiSpywareSecurityProfileBotnetDomainsSinkholeToHclTerraform(struct!.sinkhole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkhole",
    },
    threat_exception: {
      value: cdktf.listMapperHcl(dataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionToHclTerraform, false)(struct!.threatException),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionList",
    },
    whitelist: {
      value: cdktf.listMapperHcl(dataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructToHclTerraform, false)(struct!.whitelist),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAntiSpywareSecurityProfileBotnetDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileBotnetDomains | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileBotnetDomains | cdktf.IResolvable | undefined) {
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

  // dns_security_categories - computed: true, optional: true, required: false
  private _dnsSecurityCategories = new DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategoriesList(this, "dns_security_categories", false);
  public get dnsSecurityCategories() {
    return this._dnsSecurityCategories;
  }
  public putDnsSecurityCategories(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsDnsSecurityCategories[] | cdktf.IResolvable) {
    this._dnsSecurityCategories.internalValue = value;
  }
  public resetDnsSecurityCategories() {
    this._dnsSecurityCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecurityCategoriesInput() {
    return this._dnsSecurityCategories.internalValue;
  }

  // lists - computed: true, optional: true, required: false
  private _lists = new DataPanosAntiSpywareSecurityProfileBotnetDomainsListsList(this, "lists", false);
  public get lists() {
    return this._lists;
  }
  public putLists(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsLists[] | cdktf.IResolvable) {
    this._lists.internalValue = value;
  }
  public resetLists() {
    this._lists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listsInput() {
    return this._lists.internalValue;
  }

  // rtype_action - computed: true, optional: true, required: false
  private _rtypeAction = new DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeActionOutputReference(this, "rtype_action");
  public get rtypeAction() {
    return this._rtypeAction;
  }
  public putRtypeAction(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsRtypeAction) {
    this._rtypeAction.internalValue = value;
  }
  public resetRtypeAction() {
    this._rtypeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtypeActionInput() {
    return this._rtypeAction.internalValue;
  }

  // sinkhole - computed: true, optional: true, required: false
  private _sinkhole = new DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkholeOutputReference(this, "sinkhole");
  public get sinkhole() {
    return this._sinkhole;
  }
  public putSinkhole(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsSinkhole) {
    this._sinkhole.internalValue = value;
  }
  public resetSinkhole() {
    this._sinkhole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkholeInput() {
    return this._sinkhole.internalValue;
  }

  // threat_exception - computed: true, optional: true, required: false
  private _threatException = new DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatExceptionList(this, "threat_exception", false);
  public get threatException() {
    return this._threatException;
  }
  public putThreatException(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsThreatException[] | cdktf.IResolvable) {
    this._threatException.internalValue = value;
  }
  public resetThreatException() {
    this._threatException.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatExceptionInput() {
    return this._threatException.internalValue;
  }

  // whitelist - computed: true, optional: true, required: false
  private _whitelist = new DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStructList(this, "whitelist", false);
  public get whitelist() {
    return this._whitelist;
  }
  public putWhitelist(value: DataPanosAntiSpywareSecurityProfileBotnetDomainsWhitelistStruct[] | cdktf.IResolvable) {
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
export interface DataPanosAntiSpywareSecurityProfileLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#panorama_device DataPanosAntiSpywareSecurityProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosAntiSpywareSecurityProfileLocationDeviceGroupToTerraform(struct?: DataPanosAntiSpywareSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosAntiSpywareSecurityProfileLocationDeviceGroupToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileLocationShared {
}

export function dataPanosAntiSpywareSecurityProfileLocationSharedToTerraform(struct?: DataPanosAntiSpywareSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileLocationSharedToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileLocationShared | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#ngfw_device DataPanosAntiSpywareSecurityProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosAntiSpywareSecurityProfileLocationVsysToTerraform(struct?: DataPanosAntiSpywareSecurityProfileLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosAntiSpywareSecurityProfileLocationVsysToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#device_group DataPanosAntiSpywareSecurityProfile#device_group}
  */
  readonly deviceGroup?: DataPanosAntiSpywareSecurityProfileLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#shared DataPanosAntiSpywareSecurityProfile#shared}
  */
  readonly shared?: DataPanosAntiSpywareSecurityProfileLocationShared;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#vsys DataPanosAntiSpywareSecurityProfile#vsys}
  */
  readonly vsys?: DataPanosAntiSpywareSecurityProfileLocationVsys;
}

export function dataPanosAntiSpywareSecurityProfileLocationToTerraform(struct?: DataPanosAntiSpywareSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosAntiSpywareSecurityProfileLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosAntiSpywareSecurityProfileLocationSharedToTerraform(struct!.shared),
    vsys: dataPanosAntiSpywareSecurityProfileLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosAntiSpywareSecurityProfileLocationToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosAntiSpywareSecurityProfileLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileLocationDeviceGroup",
    },
    shared: {
      value: dataPanosAntiSpywareSecurityProfileLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileLocationShared",
    },
    vsys: {
      value: dataPanosAntiSpywareSecurityProfileLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAntiSpywareSecurityProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new DataPanosAntiSpywareSecurityProfileLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosAntiSpywareSecurityProfileLocationDeviceGroup) {
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
  private _shared = new DataPanosAntiSpywareSecurityProfileLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosAntiSpywareSecurityProfileLocationShared) {
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
  private _vsys = new DataPanosAntiSpywareSecurityProfileLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosAntiSpywareSecurityProfileLocationVsys) {
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
export interface DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#inline_policy_action DataPanosAntiSpywareSecurityProfile#inline_policy_action}
  */
  readonly inlinePolicyAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name: string;
}

export function dataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledToTerraform(struct?: DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline_policy_action: cdktf.stringToTerraform(struct!.inlinePolicyAction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabled | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabled | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabled | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabled[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledOutputReference {
    return new DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntiSpywareSecurityProfileRulesActionAlert {
}

export function dataPanosAntiSpywareSecurityProfileRulesActionAlertToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesActionAlertToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileRulesActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRulesActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRulesActionAlert | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileRulesActionAllow {
}

export function dataPanosAntiSpywareSecurityProfileRulesActionAllowToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesActionAllowToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileRulesActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRulesActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRulesActionAllow | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileRulesActionBlockIp {
  /**
  * Duration for block ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#duration DataPanosAntiSpywareSecurityProfile#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#track_by DataPanosAntiSpywareSecurityProfile#track_by}
  */
  readonly trackBy?: string;
}

export function dataPanosAntiSpywareSecurityProfileRulesActionBlockIpToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    track_by: cdktf.stringToTerraform(struct!.trackBy),
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesActionBlockIpToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionBlockIp | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileRulesActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRulesActionBlockIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRulesActionBlockIp | cdktf.IResolvable | undefined) {
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

  // duration - computed: true, optional: true, required: false
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

  // track_by - computed: true, optional: true, required: false
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
export interface DataPanosAntiSpywareSecurityProfileRulesActionDefault {
}

export function dataPanosAntiSpywareSecurityProfileRulesActionDefaultToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesActionDefaultToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileRulesActionDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRulesActionDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRulesActionDefault | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileRulesActionDrop {
}

export function dataPanosAntiSpywareSecurityProfileRulesActionDropToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesActionDropToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileRulesActionDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRulesActionDrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRulesActionDrop | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileRulesActionResetBoth {
}

export function dataPanosAntiSpywareSecurityProfileRulesActionResetBothToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesActionResetBothToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileRulesActionResetBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRulesActionResetBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRulesActionResetBoth | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileRulesActionResetClient {
}

export function dataPanosAntiSpywareSecurityProfileRulesActionResetClientToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesActionResetClientToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileRulesActionResetClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRulesActionResetClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRulesActionResetClient | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileRulesActionResetServer {
}

export function dataPanosAntiSpywareSecurityProfileRulesActionResetServerToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesActionResetServerToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileRulesActionResetServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRulesActionResetServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRulesActionResetServer | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#alert DataPanosAntiSpywareSecurityProfile#alert}
  */
  readonly alert?: DataPanosAntiSpywareSecurityProfileRulesActionAlert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#allow DataPanosAntiSpywareSecurityProfile#allow}
  */
  readonly allow?: DataPanosAntiSpywareSecurityProfileRulesActionAllow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#block_ip DataPanosAntiSpywareSecurityProfile#block_ip}
  */
  readonly blockIp?: DataPanosAntiSpywareSecurityProfileRulesActionBlockIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#default DataPanosAntiSpywareSecurityProfile#default}
  */
  readonly default?: DataPanosAntiSpywareSecurityProfileRulesActionDefault;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#drop DataPanosAntiSpywareSecurityProfile#drop}
  */
  readonly drop?: DataPanosAntiSpywareSecurityProfileRulesActionDrop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#reset_both DataPanosAntiSpywareSecurityProfile#reset_both}
  */
  readonly resetBoth?: DataPanosAntiSpywareSecurityProfileRulesActionResetBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#reset_client DataPanosAntiSpywareSecurityProfile#reset_client}
  */
  readonly resetClient?: DataPanosAntiSpywareSecurityProfileRulesActionResetClient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#reset_server DataPanosAntiSpywareSecurityProfile#reset_server}
  */
  readonly resetServer?: DataPanosAntiSpywareSecurityProfileRulesActionResetServer;
}

export function dataPanosAntiSpywareSecurityProfileRulesActionToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: dataPanosAntiSpywareSecurityProfileRulesActionAlertToTerraform(struct!.alert),
    allow: dataPanosAntiSpywareSecurityProfileRulesActionAllowToTerraform(struct!.allow),
    block_ip: dataPanosAntiSpywareSecurityProfileRulesActionBlockIpToTerraform(struct!.blockIp),
    default: dataPanosAntiSpywareSecurityProfileRulesActionDefaultToTerraform(struct!.default),
    drop: dataPanosAntiSpywareSecurityProfileRulesActionDropToTerraform(struct!.drop),
    reset_both: dataPanosAntiSpywareSecurityProfileRulesActionResetBothToTerraform(struct!.resetBoth),
    reset_client: dataPanosAntiSpywareSecurityProfileRulesActionResetClientToTerraform(struct!.resetClient),
    reset_server: dataPanosAntiSpywareSecurityProfileRulesActionResetServerToTerraform(struct!.resetServer),
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesActionToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: dataPanosAntiSpywareSecurityProfileRulesActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileRulesActionAlert",
    },
    allow: {
      value: dataPanosAntiSpywareSecurityProfileRulesActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileRulesActionAllow",
    },
    block_ip: {
      value: dataPanosAntiSpywareSecurityProfileRulesActionBlockIpToHclTerraform(struct!.blockIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileRulesActionBlockIp",
    },
    default: {
      value: dataPanosAntiSpywareSecurityProfileRulesActionDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileRulesActionDefault",
    },
    drop: {
      value: dataPanosAntiSpywareSecurityProfileRulesActionDropToHclTerraform(struct!.drop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileRulesActionDrop",
    },
    reset_both: {
      value: dataPanosAntiSpywareSecurityProfileRulesActionResetBothToHclTerraform(struct!.resetBoth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileRulesActionResetBoth",
    },
    reset_client: {
      value: dataPanosAntiSpywareSecurityProfileRulesActionResetClientToHclTerraform(struct!.resetClient),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileRulesActionResetClient",
    },
    reset_server: {
      value: dataPanosAntiSpywareSecurityProfileRulesActionResetServerToHclTerraform(struct!.resetServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileRulesActionResetServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAntiSpywareSecurityProfileRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRulesAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRulesAction | cdktf.IResolvable | undefined) {
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

  // alert - computed: true, optional: true, required: false
  private _alert = new DataPanosAntiSpywareSecurityProfileRulesActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: DataPanosAntiSpywareSecurityProfileRulesActionAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // allow - computed: true, optional: true, required: false
  private _allow = new DataPanosAntiSpywareSecurityProfileRulesActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataPanosAntiSpywareSecurityProfileRulesActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block_ip - computed: true, optional: true, required: false
  private _blockIp = new DataPanosAntiSpywareSecurityProfileRulesActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
  public putBlockIp(value: DataPanosAntiSpywareSecurityProfileRulesActionBlockIp) {
    this._blockIp.internalValue = value;
  }
  public resetBlockIp() {
    this._blockIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp.internalValue;
  }

  // default - computed: true, optional: true, required: false
  private _default = new DataPanosAntiSpywareSecurityProfileRulesActionDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataPanosAntiSpywareSecurityProfileRulesActionDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // drop - computed: true, optional: true, required: false
  private _drop = new DataPanosAntiSpywareSecurityProfileRulesActionDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }
  public putDrop(value: DataPanosAntiSpywareSecurityProfileRulesActionDrop) {
    this._drop.internalValue = value;
  }
  public resetDrop() {
    this._drop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop.internalValue;
  }

  // reset_both - computed: true, optional: true, required: false
  private _resetBoth = new DataPanosAntiSpywareSecurityProfileRulesActionResetBothOutputReference(this, "reset_both");
  public get resetBoth() {
    return this._resetBoth;
  }
  public putResetBoth(value: DataPanosAntiSpywareSecurityProfileRulesActionResetBoth) {
    this._resetBoth.internalValue = value;
  }
  public resetResetBoth() {
    this._resetBoth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetBothInput() {
    return this._resetBoth.internalValue;
  }

  // reset_client - computed: true, optional: true, required: false
  private _resetClient = new DataPanosAntiSpywareSecurityProfileRulesActionResetClientOutputReference(this, "reset_client");
  public get resetClient() {
    return this._resetClient;
  }
  public putResetClient(value: DataPanosAntiSpywareSecurityProfileRulesActionResetClient) {
    this._resetClient.internalValue = value;
  }
  public resetResetClient() {
    this._resetClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetClientInput() {
    return this._resetClient.internalValue;
  }

  // reset_server - computed: true, optional: true, required: false
  private _resetServer = new DataPanosAntiSpywareSecurityProfileRulesActionResetServerOutputReference(this, "reset_server");
  public get resetServer() {
    return this._resetServer;
  }
  public putResetServer(value: DataPanosAntiSpywareSecurityProfileRulesActionResetServer) {
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
export interface DataPanosAntiSpywareSecurityProfileRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#action DataPanosAntiSpywareSecurityProfile#action}
  */
  readonly action?: DataPanosAntiSpywareSecurityProfileRulesAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#category DataPanosAntiSpywareSecurityProfile#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#packet_capture DataPanosAntiSpywareSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#severity DataPanosAntiSpywareSecurityProfile#severity}
  */
  readonly severity?: string[];
  /**
  * Threat name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#threat_name DataPanosAntiSpywareSecurityProfile#threat_name}
  */
  readonly threatName?: string;
}

export function dataPanosAntiSpywareSecurityProfileRulesToTerraform(struct?: DataPanosAntiSpywareSecurityProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPanosAntiSpywareSecurityProfileRulesActionToTerraform(struct!.action),
    category: cdktf.stringToTerraform(struct!.category),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
    severity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severity),
    threat_name: cdktf.stringToTerraform(struct!.threatName),
  }
}


export function dataPanosAntiSpywareSecurityProfileRulesToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPanosAntiSpywareSecurityProfileRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileRulesAction",
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

export class DataPanosAntiSpywareSecurityProfileRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntiSpywareSecurityProfileRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileRules | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: true, required: false
  private _action = new DataPanosAntiSpywareSecurityProfileRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPanosAntiSpywareSecurityProfileRulesAction) {
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

  // name - computed: true, optional: false, required: true
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

  // severity - computed: true, optional: true, required: false
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

export class DataPanosAntiSpywareSecurityProfileRulesList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntiSpywareSecurityProfileRules[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntiSpywareSecurityProfileRulesOutputReference {
    return new DataPanosAntiSpywareSecurityProfileRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlert {
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionAlertToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionAlertToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlert | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllow {
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionAllowToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionAllowToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllow | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIp {
  /**
  * Duration for block ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#duration DataPanosAntiSpywareSecurityProfile#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#track_by DataPanosAntiSpywareSecurityProfile#track_by}
  */
  readonly trackBy?: string;
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIpToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    track_by: cdktf.stringToTerraform(struct!.trackBy),
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIpToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIp | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIp | cdktf.IResolvable | undefined) {
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

  // duration - computed: true, optional: true, required: false
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

  // track_by - computed: true, optional: true, required: false
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
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefault {
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionDefaultToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionDefaultToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefault | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionActionDrop {
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionDropToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionDropToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileThreatExceptionActionDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionActionDrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDrop | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBoth {
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBothToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBothToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBoth | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClient {
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClientToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClientToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClient | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServer {
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServerToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServerToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServer | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#alert DataPanosAntiSpywareSecurityProfile#alert}
  */
  readonly alert?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#allow DataPanosAntiSpywareSecurityProfile#allow}
  */
  readonly allow?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#block_ip DataPanosAntiSpywareSecurityProfile#block_ip}
  */
  readonly blockIp?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#default DataPanosAntiSpywareSecurityProfile#default}
  */
  readonly default?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefault;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#drop DataPanosAntiSpywareSecurityProfile#drop}
  */
  readonly drop?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDrop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#reset_both DataPanosAntiSpywareSecurityProfile#reset_both}
  */
  readonly resetBoth?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#reset_client DataPanosAntiSpywareSecurityProfile#reset_client}
  */
  readonly resetClient?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#reset_server DataPanosAntiSpywareSecurityProfile#reset_server}
  */
  readonly resetServer?: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServer;
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: dataPanosAntiSpywareSecurityProfileThreatExceptionActionAlertToTerraform(struct!.alert),
    allow: dataPanosAntiSpywareSecurityProfileThreatExceptionActionAllowToTerraform(struct!.allow),
    block_ip: dataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIpToTerraform(struct!.blockIp),
    default: dataPanosAntiSpywareSecurityProfileThreatExceptionActionDefaultToTerraform(struct!.default),
    drop: dataPanosAntiSpywareSecurityProfileThreatExceptionActionDropToTerraform(struct!.drop),
    reset_both: dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBothToTerraform(struct!.resetBoth),
    reset_client: dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClientToTerraform(struct!.resetClient),
    reset_server: dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServerToTerraform(struct!.resetServer),
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionActionToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: dataPanosAntiSpywareSecurityProfileThreatExceptionActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlert",
    },
    allow: {
      value: dataPanosAntiSpywareSecurityProfileThreatExceptionActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllow",
    },
    block_ip: {
      value: dataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIpToHclTerraform(struct!.blockIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIp",
    },
    default: {
      value: dataPanosAntiSpywareSecurityProfileThreatExceptionActionDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefault",
    },
    drop: {
      value: dataPanosAntiSpywareSecurityProfileThreatExceptionActionDropToHclTerraform(struct!.drop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionActionDrop",
    },
    reset_both: {
      value: dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBothToHclTerraform(struct!.resetBoth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBoth",
    },
    reset_client: {
      value: dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClientToHclTerraform(struct!.resetClient),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClient",
    },
    reset_server: {
      value: dataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServerToHclTerraform(struct!.resetServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAntiSpywareSecurityProfileThreatExceptionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionAction | cdktf.IResolvable | undefined) {
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

  // alert - computed: true, optional: true, required: false
  private _alert = new DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // allow - computed: true, optional: true, required: false
  private _allow = new DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block_ip - computed: true, optional: true, required: false
  private _blockIp = new DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
  public putBlockIp(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionBlockIp) {
    this._blockIp.internalValue = value;
  }
  public resetBlockIp() {
    this._blockIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp.internalValue;
  }

  // default - computed: true, optional: true, required: false
  private _default = new DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // drop - computed: true, optional: true, required: false
  private _drop = new DataPanosAntiSpywareSecurityProfileThreatExceptionActionDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }
  public putDrop(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionDrop) {
    this._drop.internalValue = value;
  }
  public resetDrop() {
    this._drop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop.internalValue;
  }

  // reset_both - computed: true, optional: true, required: false
  private _resetBoth = new DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBothOutputReference(this, "reset_both");
  public get resetBoth() {
    return this._resetBoth;
  }
  public putResetBoth(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetBoth) {
    this._resetBoth.internalValue = value;
  }
  public resetResetBoth() {
    this._resetBoth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetBothInput() {
    return this._resetBoth.internalValue;
  }

  // reset_client - computed: true, optional: true, required: false
  private _resetClient = new DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClientOutputReference(this, "reset_client");
  public get resetClient() {
    return this._resetClient;
  }
  public putResetClient(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetClient) {
    this._resetClient.internalValue = value;
  }
  public resetResetClient() {
    this._resetClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetClientInput() {
    return this._resetClient.internalValue;
  }

  // reset_server - computed: true, optional: true, required: false
  private _resetServer = new DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServerOutputReference(this, "reset_server");
  public get resetServer() {
    return this._resetServer;
  }
  public putResetServer(value: DataPanosAntiSpywareSecurityProfileThreatExceptionActionResetServer) {
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
export interface DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name: string;
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIp | cdktf.IResolvable): any {
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

export class DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIp | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIp[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpOutputReference {
    return new DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntiSpywareSecurityProfileThreatException {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#action DataPanosAntiSpywareSecurityProfile#action}
  */
  readonly action?: DataPanosAntiSpywareSecurityProfileThreatExceptionAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#exempt_ip DataPanosAntiSpywareSecurityProfile#exempt_ip}
  */
  readonly exemptIp?: DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#name DataPanosAntiSpywareSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#packet_capture DataPanosAntiSpywareSecurityProfile#packet_capture}
  */
  readonly packetCapture?: string;
}

export function dataPanosAntiSpywareSecurityProfileThreatExceptionToTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPanosAntiSpywareSecurityProfileThreatExceptionActionToTerraform(struct!.action),
    exempt_ip: cdktf.listMapper(dataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpToTerraform, false)(struct!.exemptIp),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
  }
}


export function dataPanosAntiSpywareSecurityProfileThreatExceptionToHclTerraform(struct?: DataPanosAntiSpywareSecurityProfileThreatException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPanosAntiSpywareSecurityProfileThreatExceptionActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionAction",
    },
    exempt_ip: {
      value: cdktf.listMapperHcl(dataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpToHclTerraform, false)(struct!.exemptIp),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpList",
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

export class DataPanosAntiSpywareSecurityProfileThreatExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntiSpywareSecurityProfileThreatException | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntiSpywareSecurityProfileThreatException | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: true, required: false
  private _action = new DataPanosAntiSpywareSecurityProfileThreatExceptionActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPanosAntiSpywareSecurityProfileThreatExceptionAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // exempt_ip - computed: true, optional: true, required: false
  private _exemptIp = new DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIpList(this, "exempt_ip", false);
  public get exemptIp() {
    return this._exemptIp;
  }
  public putExemptIp(value: DataPanosAntiSpywareSecurityProfileThreatExceptionExemptIp[] | cdktf.IResolvable) {
    this._exemptIp.internalValue = value;
  }
  public resetExemptIp() {
    this._exemptIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptIpInput() {
    return this._exemptIp.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

export class DataPanosAntiSpywareSecurityProfileThreatExceptionList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntiSpywareSecurityProfileThreatException[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntiSpywareSecurityProfileThreatExceptionOutputReference {
    return new DataPanosAntiSpywareSecurityProfileThreatExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile panos_anti_spyware_security_profile}
*/
export class DataPanosAntiSpywareSecurityProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_anti_spyware_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosAntiSpywareSecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosAntiSpywareSecurityProfile to import
  * @param importFromId The id of the existing DataPanosAntiSpywareSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosAntiSpywareSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_anti_spyware_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/anti_spyware_security_profile panos_anti_spyware_security_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosAntiSpywareSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosAntiSpywareSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_anti_spyware_security_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5',
        providerVersionConstraint: '2.0.5'
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

  // botnet_domains - computed: true, optional: true, required: false
  private _botnetDomains = new DataPanosAntiSpywareSecurityProfileBotnetDomainsOutputReference(this, "botnet_domains");
  public get botnetDomains() {
    return this._botnetDomains;
  }
  public putBotnetDomains(value: DataPanosAntiSpywareSecurityProfileBotnetDomains) {
    this._botnetDomains.internalValue = value;
  }
  public resetBotnetDomains() {
    this._botnetDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botnetDomainsInput() {
    return this._botnetDomains.internalValue;
  }

  // cloud_inline_analysis - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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

  // disable_override - computed: true, optional: true, required: false
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

  // inline_exception_edl_url - computed: true, optional: true, required: false
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

  // inline_exception_ip_address - computed: true, optional: true, required: false
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
  private _location = new DataPanosAntiSpywareSecurityProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosAntiSpywareSecurityProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // mica_engine_spyware_enabled - computed: true, optional: true, required: false
  private _micaEngineSpywareEnabled = new DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledList(this, "mica_engine_spyware_enabled", false);
  public get micaEngineSpywareEnabled() {
    return this._micaEngineSpywareEnabled;
  }
  public putMicaEngineSpywareEnabled(value: DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabled[] | cdktf.IResolvable) {
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

  // rules - computed: true, optional: true, required: false
  private _rules = new DataPanosAntiSpywareSecurityProfileRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataPanosAntiSpywareSecurityProfileRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // threat_exception - computed: true, optional: true, required: false
  private _threatException = new DataPanosAntiSpywareSecurityProfileThreatExceptionList(this, "threat_exception", false);
  public get threatException() {
    return this._threatException;
  }
  public putThreatException(value: DataPanosAntiSpywareSecurityProfileThreatException[] | cdktf.IResolvable) {
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
      botnet_domains: dataPanosAntiSpywareSecurityProfileBotnetDomainsToTerraform(this._botnetDomains.internalValue),
      cloud_inline_analysis: cdktf.booleanToTerraform(this._cloudInlineAnalysis),
      description: cdktf.stringToTerraform(this._description),
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      inline_exception_edl_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inlineExceptionEdlUrl),
      inline_exception_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inlineExceptionIpAddress),
      location: dataPanosAntiSpywareSecurityProfileLocationToTerraform(this._location.internalValue),
      mica_engine_spyware_enabled: cdktf.listMapper(dataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledToTerraform, false)(this._micaEngineSpywareEnabled.internalValue),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(dataPanosAntiSpywareSecurityProfileRulesToTerraform, false)(this._rules.internalValue),
      threat_exception: cdktf.listMapper(dataPanosAntiSpywareSecurityProfileThreatExceptionToTerraform, false)(this._threatException.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      botnet_domains: {
        value: dataPanosAntiSpywareSecurityProfileBotnetDomainsToHclTerraform(this._botnetDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosAntiSpywareSecurityProfileBotnetDomains",
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
        value: dataPanosAntiSpywareSecurityProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosAntiSpywareSecurityProfileLocation",
      },
      mica_engine_spyware_enabled: {
        value: cdktf.listMapperHcl(dataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledToHclTerraform, false)(this._micaEngineSpywareEnabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosAntiSpywareSecurityProfileMicaEngineSpywareEnabledList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(dataPanosAntiSpywareSecurityProfileRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosAntiSpywareSecurityProfileRulesList",
      },
      threat_exception: {
        value: cdktf.listMapperHcl(dataPanosAntiSpywareSecurityProfileThreatExceptionToHclTerraform, false)(this._threatException.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosAntiSpywareSecurityProfileThreatExceptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
