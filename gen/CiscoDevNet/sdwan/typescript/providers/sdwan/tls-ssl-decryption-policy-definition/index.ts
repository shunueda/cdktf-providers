// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TlsSslDecryptionPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate Lifetime(in Days)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#certificate_lifetime_in_days TlsSslDecryptionPolicyDefinition#certificate_lifetime_in_days}
  */
  readonly certificateLifetimeInDays?: number;
  /**
  * Certificate revocation status
  *   - Choices: `ocsp`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#certificate_revocation_status TlsSslDecryptionPolicyDefinition#certificate_revocation_status}
  */
  readonly certificateRevocationStatus?: string;
  /**
  * Default action (applies when `mode` set to `security`)
  *   - Choices: `noIntent`, `doNotDecrypt`, `decrypt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#default_action TlsSslDecryptionPolicyDefinition#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#description TlsSslDecryptionPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * EC Key Type
  *   - Choices: `P256`, `P384`, `P521`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#ec_key_type TlsSslDecryptionPolicyDefinition#ec_key_type}
  */
  readonly ecKeyType?: string;
  /**
  * Expired certificate action
  *   - Choices: `drop`, `decrypt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#expired_certificate TlsSslDecryptionPolicyDefinition#expired_certificate}
  */
  readonly expiredCertificate?: string;
  /**
  * Failure mode
  *   - Choices: `open`, `close`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#failure_mode TlsSslDecryptionPolicyDefinition#failure_mode}
  */
  readonly failureMode?: string;
  /**
  * Minimal TLS Version
  *   - Choices: `TLSv1.0`, `TLSv1.1`, `TLSv1.2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#minimal_tls_version TlsSslDecryptionPolicyDefinition#minimal_tls_version}
  */
  readonly minimalTlsVersion?: string;
  /**
  * The policy mode
  *   - Choices: `security`, `unified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#mode TlsSslDecryptionPolicyDefinition#mode}
  */
  readonly mode?: string;
  /**
  * The name of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#name TlsSslDecryptionPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of network rules (applies when `mode` set to `security`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#network_rules TlsSslDecryptionPolicyDefinition#network_rules}
  */
  readonly networkRules?: TlsSslDecryptionPolicyDefinitionNetworkRules[] | cdktf.IResolvable;
  /**
  * RSA key pair modules
  *   - Choices: `1024`, `2048`, `4096`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#rsa_key_pair_modulus TlsSslDecryptionPolicyDefinition#rsa_key_pair_modulus}
  */
  readonly rsaKeyPairModulus?: string;
  /**
  * SSL decryption enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#ssl_decryption_enabled TlsSslDecryptionPolicyDefinition#ssl_decryption_enabled}
  */
  readonly sslDecryptionEnabled?: string;
  /**
  * Unknown revocation status action
  *   - Choices: `drop`, `decrypt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#unknown_revocation_status TlsSslDecryptionPolicyDefinition#unknown_revocation_status}
  */
  readonly unknownRevocationStatus?: string;
  /**
  * Unsupported cipher suites action
  *   - Choices: `drop`, `no-decrypt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#unsupported_cipher_suites TlsSslDecryptionPolicyDefinition#unsupported_cipher_suites}
  */
  readonly unsupportedCipherSuites?: string;
  /**
  * Unsupported protocol versions action
  *   - Choices: `drop`, `no-decrypt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#unsupported_protocol_versions TlsSslDecryptionPolicyDefinition#unsupported_protocol_versions}
  */
  readonly unsupportedProtocolVersions?: string;
  /**
  * Untrusted certificate action
  *   - Choices: `drop`, `decrypt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#untrusted_certificate TlsSslDecryptionPolicyDefinition#untrusted_certificate}
  */
  readonly untrustedCertificate?: string;
  /**
  * List of url rules (applies when `mode` set to `security`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#url_rules TlsSslDecryptionPolicyDefinition#url_rules}
  */
  readonly urlRules?: TlsSslDecryptionPolicyDefinitionUrlRules[] | cdktf.IResolvable;
  /**
  * Use default CA certificate bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#use_default_ca_cert_bundle TlsSslDecryptionPolicyDefinition#use_default_ca_cert_bundle}
  */
  readonly useDefaultCaCertBundle?: boolean | cdktf.IResolvable;
}
export interface TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration {
  /**
  * source / destination option
  *   - Choices: `sourceIp`, `sourcePort`, `destinationVpn`, `destinationIp`, `destinationPort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#option TlsSslDecryptionPolicyDefinition#option}
  */
  readonly option?: string;
  /**
  * source / destination option target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#value TlsSslDecryptionPolicyDefinition#value}
  */
  readonly value?: string;
}

export function tlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationToTerraform(struct?: TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationToHclTerraform(struct?: TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._option = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._option = value.option;
      this._value = value.value;
    }
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationList extends cdktf.ComplexList {
  public internalValue? : TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationOutputReference {
    return new TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TlsSslDecryptionPolicyDefinitionNetworkRules {
  /**
  * Rule base action
  *   - Choices: `noIntent`, `doNotDecrypt`, `decrypt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#base_action TlsSslDecryptionPolicyDefinition#base_action}
  */
  readonly baseAction?: string;
  /**
  * Rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#rule_id TlsSslDecryptionPolicyDefinition#rule_id}
  */
  readonly ruleId?: number;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#rule_name TlsSslDecryptionPolicyDefinition#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Rule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#rule_type TlsSslDecryptionPolicyDefinition#rule_type}
  */
  readonly ruleType?: string;
  /**
  * List of network source / destination configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#source_and_destination_configuration TlsSslDecryptionPolicyDefinition#source_and_destination_configuration}
  */
  readonly sourceAndDestinationConfiguration?: TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration[] | cdktf.IResolvable;
}

export function tlsSslDecryptionPolicyDefinitionNetworkRulesToTerraform(struct?: TlsSslDecryptionPolicyDefinitionNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    rule_id: cdktf.numberToTerraform(struct!.ruleId),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    source_and_destination_configuration: cdktf.listMapper(tlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationToTerraform, false)(struct!.sourceAndDestinationConfiguration),
  }
}


export function tlsSslDecryptionPolicyDefinitionNetworkRulesToHclTerraform(struct?: TlsSslDecryptionPolicyDefinitionNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.numberToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_and_destination_configuration: {
      value: cdktf.listMapperHcl(tlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationToHclTerraform, false)(struct!.sourceAndDestinationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TlsSslDecryptionPolicyDefinitionNetworkRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TlsSslDecryptionPolicyDefinitionNetworkRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._sourceAndDestinationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAndDestinationConfiguration = this._sourceAndDestinationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsSslDecryptionPolicyDefinitionNetworkRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseAction = undefined;
      this._ruleId = undefined;
      this._ruleName = undefined;
      this._ruleType = undefined;
      this._sourceAndDestinationConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseAction = value.baseAction;
      this._ruleId = value.ruleId;
      this._ruleName = value.ruleName;
      this._ruleType = value.ruleType;
      this._sourceAndDestinationConfiguration.internalValue = value.sourceAndDestinationConfiguration;
    }
  }

  // base_action - computed: false, optional: true, required: false
  private _baseAction?: string; 
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }
  public set baseAction(value: string) {
    this._baseAction = value;
  }
  public resetBaseAction() {
    this._baseAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseActionInput() {
    return this._baseAction;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // source_and_destination_configuration - computed: false, optional: true, required: false
  private _sourceAndDestinationConfiguration = new TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationList(this, "source_and_destination_configuration", false);
  public get sourceAndDestinationConfiguration() {
    return this._sourceAndDestinationConfiguration;
  }
  public putSourceAndDestinationConfiguration(value: TlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration[] | cdktf.IResolvable) {
    this._sourceAndDestinationConfiguration.internalValue = value;
  }
  public resetSourceAndDestinationConfiguration() {
    this._sourceAndDestinationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAndDestinationConfigurationInput() {
    return this._sourceAndDestinationConfiguration.internalValue;
  }
}

export class TlsSslDecryptionPolicyDefinitionNetworkRulesList extends cdktf.ComplexList {
  public internalValue? : TlsSslDecryptionPolicyDefinitionNetworkRules[] | cdktf.IResolvable

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
  public get(index: number): TlsSslDecryptionPolicyDefinitionNetworkRulesOutputReference {
    return new TlsSslDecryptionPolicyDefinitionNetworkRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TlsSslDecryptionPolicyDefinitionUrlRules {
  /**
  * Country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#rule_name TlsSslDecryptionPolicyDefinition#rule_name}
  */
  readonly ruleName?: string;
  /**
  * List of VPN IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#target_vpns TlsSslDecryptionPolicyDefinition#target_vpns}
  */
  readonly targetVpns?: string[];
  /**
  * TLS SSL Profile Policy ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#tls_ssl_profile_policy_id TlsSslDecryptionPolicyDefinition#tls_ssl_profile_policy_id}
  */
  readonly tlsSslProfilePolicyId?: string;
  /**
  * TLS SSL Profile Policy version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#tls_ssl_profile_policy_version TlsSslDecryptionPolicyDefinition#tls_ssl_profile_policy_version}
  */
  readonly tlsSslProfilePolicyVersion?: number;
}

export function tlsSslDecryptionPolicyDefinitionUrlRulesToTerraform(struct?: TlsSslDecryptionPolicyDefinitionUrlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    target_vpns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetVpns),
    tls_ssl_profile_policy_id: cdktf.stringToTerraform(struct!.tlsSslProfilePolicyId),
    tls_ssl_profile_policy_version: cdktf.numberToTerraform(struct!.tlsSslProfilePolicyVersion),
  }
}


export function tlsSslDecryptionPolicyDefinitionUrlRulesToHclTerraform(struct?: TlsSslDecryptionPolicyDefinitionUrlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_vpns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetVpns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tls_ssl_profile_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.tlsSslProfilePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ssl_profile_policy_version: {
      value: cdktf.numberToHclTerraform(struct!.tlsSslProfilePolicyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TlsSslDecryptionPolicyDefinitionUrlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TlsSslDecryptionPolicyDefinitionUrlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._targetVpns !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVpns = this._targetVpns;
    }
    if (this._tlsSslProfilePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSslProfilePolicyId = this._tlsSslProfilePolicyId;
    }
    if (this._tlsSslProfilePolicyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSslProfilePolicyVersion = this._tlsSslProfilePolicyVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsSslDecryptionPolicyDefinitionUrlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleName = undefined;
      this._targetVpns = undefined;
      this._tlsSslProfilePolicyId = undefined;
      this._tlsSslProfilePolicyVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleName = value.ruleName;
      this._targetVpns = value.targetVpns;
      this._tlsSslProfilePolicyId = value.tlsSslProfilePolicyId;
      this._tlsSslProfilePolicyVersion = value.tlsSslProfilePolicyVersion;
    }
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // target_vpns - computed: false, optional: true, required: false
  private _targetVpns?: string[]; 
  public get targetVpns() {
    return cdktf.Fn.tolist(this.getListAttribute('target_vpns'));
  }
  public set targetVpns(value: string[]) {
    this._targetVpns = value;
  }
  public resetTargetVpns() {
    this._targetVpns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpnsInput() {
    return this._targetVpns;
  }

  // tls_ssl_profile_policy_id - computed: false, optional: true, required: false
  private _tlsSslProfilePolicyId?: string; 
  public get tlsSslProfilePolicyId() {
    return this.getStringAttribute('tls_ssl_profile_policy_id');
  }
  public set tlsSslProfilePolicyId(value: string) {
    this._tlsSslProfilePolicyId = value;
  }
  public resetTlsSslProfilePolicyId() {
    this._tlsSslProfilePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSslProfilePolicyIdInput() {
    return this._tlsSslProfilePolicyId;
  }

  // tls_ssl_profile_policy_version - computed: false, optional: true, required: false
  private _tlsSslProfilePolicyVersion?: number; 
  public get tlsSslProfilePolicyVersion() {
    return this.getNumberAttribute('tls_ssl_profile_policy_version');
  }
  public set tlsSslProfilePolicyVersion(value: number) {
    this._tlsSslProfilePolicyVersion = value;
  }
  public resetTlsSslProfilePolicyVersion() {
    this._tlsSslProfilePolicyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSslProfilePolicyVersionInput() {
    return this._tlsSslProfilePolicyVersion;
  }
}

export class TlsSslDecryptionPolicyDefinitionUrlRulesList extends cdktf.ComplexList {
  public internalValue? : TlsSslDecryptionPolicyDefinitionUrlRules[] | cdktf.IResolvable

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
  public get(index: number): TlsSslDecryptionPolicyDefinitionUrlRulesOutputReference {
    return new TlsSslDecryptionPolicyDefinitionUrlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition sdwan_tls_ssl_decryption_policy_definition}
*/
export class TlsSslDecryptionPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_tls_ssl_decryption_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TlsSslDecryptionPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsSslDecryptionPolicyDefinition to import
  * @param importFromId The id of the existing TlsSslDecryptionPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsSslDecryptionPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_tls_ssl_decryption_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_decryption_policy_definition sdwan_tls_ssl_decryption_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsSslDecryptionPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: TlsSslDecryptionPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_tls_ssl_decryption_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateLifetimeInDays = config.certificateLifetimeInDays;
    this._certificateRevocationStatus = config.certificateRevocationStatus;
    this._defaultAction = config.defaultAction;
    this._description = config.description;
    this._ecKeyType = config.ecKeyType;
    this._expiredCertificate = config.expiredCertificate;
    this._failureMode = config.failureMode;
    this._minimalTlsVersion = config.minimalTlsVersion;
    this._mode = config.mode;
    this._name = config.name;
    this._networkRules.internalValue = config.networkRules;
    this._rsaKeyPairModulus = config.rsaKeyPairModulus;
    this._sslDecryptionEnabled = config.sslDecryptionEnabled;
    this._unknownRevocationStatus = config.unknownRevocationStatus;
    this._unsupportedCipherSuites = config.unsupportedCipherSuites;
    this._unsupportedProtocolVersions = config.unsupportedProtocolVersions;
    this._untrustedCertificate = config.untrustedCertificate;
    this._urlRules.internalValue = config.urlRules;
    this._useDefaultCaCertBundle = config.useDefaultCaCertBundle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_lifetime_in_days - computed: false, optional: true, required: false
  private _certificateLifetimeInDays?: number; 
  public get certificateLifetimeInDays() {
    return this.getNumberAttribute('certificate_lifetime_in_days');
  }
  public set certificateLifetimeInDays(value: number) {
    this._certificateLifetimeInDays = value;
  }
  public resetCertificateLifetimeInDays() {
    this._certificateLifetimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateLifetimeInDaysInput() {
    return this._certificateLifetimeInDays;
  }

  // certificate_revocation_status - computed: false, optional: true, required: false
  private _certificateRevocationStatus?: string; 
  public get certificateRevocationStatus() {
    return this.getStringAttribute('certificate_revocation_status');
  }
  public set certificateRevocationStatus(value: string) {
    this._certificateRevocationStatus = value;
  }
  public resetCertificateRevocationStatus() {
    this._certificateRevocationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRevocationStatusInput() {
    return this._certificateRevocationStatus;
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ec_key_type - computed: false, optional: true, required: false
  private _ecKeyType?: string; 
  public get ecKeyType() {
    return this.getStringAttribute('ec_key_type');
  }
  public set ecKeyType(value: string) {
    this._ecKeyType = value;
  }
  public resetEcKeyType() {
    this._ecKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecKeyTypeInput() {
    return this._ecKeyType;
  }

  // expired_certificate - computed: false, optional: true, required: false
  private _expiredCertificate?: string; 
  public get expiredCertificate() {
    return this.getStringAttribute('expired_certificate');
  }
  public set expiredCertificate(value: string) {
    this._expiredCertificate = value;
  }
  public resetExpiredCertificate() {
    this._expiredCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredCertificateInput() {
    return this._expiredCertificate;
  }

  // failure_mode - computed: false, optional: true, required: false
  private _failureMode?: string; 
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }
  public set failureMode(value: string) {
    this._failureMode = value;
  }
  public resetFailureMode() {
    this._failureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeInput() {
    return this._failureMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimal_tls_version - computed: false, optional: true, required: false
  private _minimalTlsVersion?: string; 
  public get minimalTlsVersion() {
    return this.getStringAttribute('minimal_tls_version');
  }
  public set minimalTlsVersion(value: string) {
    this._minimalTlsVersion = value;
  }
  public resetMinimalTlsVersion() {
    this._minimalTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalTlsVersionInput() {
    return this._minimalTlsVersion;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // network_rules - computed: false, optional: true, required: false
  private _networkRules = new TlsSslDecryptionPolicyDefinitionNetworkRulesList(this, "network_rules", false);
  public get networkRules() {
    return this._networkRules;
  }
  public putNetworkRules(value: TlsSslDecryptionPolicyDefinitionNetworkRules[] | cdktf.IResolvable) {
    this._networkRules.internalValue = value;
  }
  public resetNetworkRules() {
    this._networkRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRulesInput() {
    return this._networkRules.internalValue;
  }

  // rsa_key_pair_modulus - computed: false, optional: true, required: false
  private _rsaKeyPairModulus?: string; 
  public get rsaKeyPairModulus() {
    return this.getStringAttribute('rsa_key_pair_modulus');
  }
  public set rsaKeyPairModulus(value: string) {
    this._rsaKeyPairModulus = value;
  }
  public resetRsaKeyPairModulus() {
    this._rsaKeyPairModulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaKeyPairModulusInput() {
    return this._rsaKeyPairModulus;
  }

  // ssl_decryption_enabled - computed: false, optional: true, required: false
  private _sslDecryptionEnabled?: string; 
  public get sslDecryptionEnabled() {
    return this.getStringAttribute('ssl_decryption_enabled');
  }
  public set sslDecryptionEnabled(value: string) {
    this._sslDecryptionEnabled = value;
  }
  public resetSslDecryptionEnabled() {
    this._sslDecryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDecryptionEnabledInput() {
    return this._sslDecryptionEnabled;
  }

  // unknown_revocation_status - computed: false, optional: true, required: false
  private _unknownRevocationStatus?: string; 
  public get unknownRevocationStatus() {
    return this.getStringAttribute('unknown_revocation_status');
  }
  public set unknownRevocationStatus(value: string) {
    this._unknownRevocationStatus = value;
  }
  public resetUnknownRevocationStatus() {
    this._unknownRevocationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownRevocationStatusInput() {
    return this._unknownRevocationStatus;
  }

  // unsupported_cipher_suites - computed: false, optional: true, required: false
  private _unsupportedCipherSuites?: string; 
  public get unsupportedCipherSuites() {
    return this.getStringAttribute('unsupported_cipher_suites');
  }
  public set unsupportedCipherSuites(value: string) {
    this._unsupportedCipherSuites = value;
  }
  public resetUnsupportedCipherSuites() {
    this._unsupportedCipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCipherSuitesInput() {
    return this._unsupportedCipherSuites;
  }

  // unsupported_protocol_versions - computed: false, optional: true, required: false
  private _unsupportedProtocolVersions?: string; 
  public get unsupportedProtocolVersions() {
    return this.getStringAttribute('unsupported_protocol_versions');
  }
  public set unsupportedProtocolVersions(value: string) {
    this._unsupportedProtocolVersions = value;
  }
  public resetUnsupportedProtocolVersions() {
    this._unsupportedProtocolVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedProtocolVersionsInput() {
    return this._unsupportedProtocolVersions;
  }

  // untrusted_certificate - computed: false, optional: true, required: false
  private _untrustedCertificate?: string; 
  public get untrustedCertificate() {
    return this.getStringAttribute('untrusted_certificate');
  }
  public set untrustedCertificate(value: string) {
    this._untrustedCertificate = value;
  }
  public resetUntrustedCertificate() {
    this._untrustedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedCertificateInput() {
    return this._untrustedCertificate;
  }

  // url_rules - computed: false, optional: true, required: false
  private _urlRules = new TlsSslDecryptionPolicyDefinitionUrlRulesList(this, "url_rules", false);
  public get urlRules() {
    return this._urlRules;
  }
  public putUrlRules(value: TlsSslDecryptionPolicyDefinitionUrlRules[] | cdktf.IResolvable) {
    this._urlRules.internalValue = value;
  }
  public resetUrlRules() {
    this._urlRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRulesInput() {
    return this._urlRules.internalValue;
  }

  // use_default_ca_cert_bundle - computed: false, optional: true, required: false
  private _useDefaultCaCertBundle?: boolean | cdktf.IResolvable; 
  public get useDefaultCaCertBundle() {
    return this.getBooleanAttribute('use_default_ca_cert_bundle');
  }
  public set useDefaultCaCertBundle(value: boolean | cdktf.IResolvable) {
    this._useDefaultCaCertBundle = value;
  }
  public resetUseDefaultCaCertBundle() {
    this._useDefaultCaCertBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultCaCertBundleInput() {
    return this._useDefaultCaCertBundle;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_lifetime_in_days: cdktf.numberToTerraform(this._certificateLifetimeInDays),
      certificate_revocation_status: cdktf.stringToTerraform(this._certificateRevocationStatus),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      ec_key_type: cdktf.stringToTerraform(this._ecKeyType),
      expired_certificate: cdktf.stringToTerraform(this._expiredCertificate),
      failure_mode: cdktf.stringToTerraform(this._failureMode),
      minimal_tls_version: cdktf.stringToTerraform(this._minimalTlsVersion),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      network_rules: cdktf.listMapper(tlsSslDecryptionPolicyDefinitionNetworkRulesToTerraform, false)(this._networkRules.internalValue),
      rsa_key_pair_modulus: cdktf.stringToTerraform(this._rsaKeyPairModulus),
      ssl_decryption_enabled: cdktf.stringToTerraform(this._sslDecryptionEnabled),
      unknown_revocation_status: cdktf.stringToTerraform(this._unknownRevocationStatus),
      unsupported_cipher_suites: cdktf.stringToTerraform(this._unsupportedCipherSuites),
      unsupported_protocol_versions: cdktf.stringToTerraform(this._unsupportedProtocolVersions),
      untrusted_certificate: cdktf.stringToTerraform(this._untrustedCertificate),
      url_rules: cdktf.listMapper(tlsSslDecryptionPolicyDefinitionUrlRulesToTerraform, false)(this._urlRules.internalValue),
      use_default_ca_cert_bundle: cdktf.booleanToTerraform(this._useDefaultCaCertBundle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_lifetime_in_days: {
        value: cdktf.numberToHclTerraform(this._certificateLifetimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate_revocation_status: {
        value: cdktf.stringToHclTerraform(this._certificateRevocationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec_key_type: {
        value: cdktf.stringToHclTerraform(this._ecKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expired_certificate: {
        value: cdktf.stringToHclTerraform(this._expiredCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_mode: {
        value: cdktf.stringToHclTerraform(this._failureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimal_tls_version: {
        value: cdktf.stringToHclTerraform(this._minimalTlsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      network_rules: {
        value: cdktf.listMapperHcl(tlsSslDecryptionPolicyDefinitionNetworkRulesToHclTerraform, false)(this._networkRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TlsSslDecryptionPolicyDefinitionNetworkRulesList",
      },
      rsa_key_pair_modulus: {
        value: cdktf.stringToHclTerraform(this._rsaKeyPairModulus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_decryption_enabled: {
        value: cdktf.stringToHclTerraform(this._sslDecryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_revocation_status: {
        value: cdktf.stringToHclTerraform(this._unknownRevocationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_cipher_suites: {
        value: cdktf.stringToHclTerraform(this._unsupportedCipherSuites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_protocol_versions: {
        value: cdktf.stringToHclTerraform(this._unsupportedProtocolVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untrusted_certificate: {
        value: cdktf.stringToHclTerraform(this._untrustedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_rules: {
        value: cdktf.listMapperHcl(tlsSslDecryptionPolicyDefinitionUrlRulesToHclTerraform, false)(this._urlRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TlsSslDecryptionPolicyDefinitionUrlRulesList",
      },
      use_default_ca_cert_bundle: {
        value: cdktf.booleanToHclTerraform(this._useDefaultCaCertBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
