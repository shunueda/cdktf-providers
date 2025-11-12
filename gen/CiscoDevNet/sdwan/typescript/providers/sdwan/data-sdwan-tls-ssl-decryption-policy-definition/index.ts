// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_decryption_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTlsSslDecryptionPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_decryption_policy_definition#id DataSdwanTlsSslDecryptionPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration {
}

export function dataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationToTerraform(struct?: DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationToHclTerraform(struct?: DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  public get option() {
    return this.getStringAttribute('option');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationOutputReference {
    return new DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRules {
}

export function dataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesToTerraform(struct?: DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesToHclTerraform(struct?: DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_action - computed: true, optional: false, required: false
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // source_and_destination_configuration - computed: true, optional: false, required: false
  private _sourceAndDestinationConfiguration = new DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesSourceAndDestinationConfigurationList(this, "source_and_destination_configuration", false);
  public get sourceAndDestinationConfiguration() {
    return this._sourceAndDestinationConfiguration;
  }
}

export class DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesOutputReference {
    return new DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTlsSslDecryptionPolicyDefinitionUrlRules {
}

export function dataSdwanTlsSslDecryptionPolicyDefinitionUrlRulesToTerraform(struct?: DataSdwanTlsSslDecryptionPolicyDefinitionUrlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTlsSslDecryptionPolicyDefinitionUrlRulesToHclTerraform(struct?: DataSdwanTlsSslDecryptionPolicyDefinitionUrlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTlsSslDecryptionPolicyDefinitionUrlRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSdwanTlsSslDecryptionPolicyDefinitionUrlRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTlsSslDecryptionPolicyDefinitionUrlRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // target_vpns - computed: true, optional: false, required: false
  public get targetVpns() {
    return cdktf.Fn.tolist(this.getListAttribute('target_vpns'));
  }

  // tls_ssl_profile_policy_id - computed: true, optional: false, required: false
  public get tlsSslProfilePolicyId() {
    return this.getStringAttribute('tls_ssl_profile_policy_id');
  }

  // tls_ssl_profile_policy_version - computed: true, optional: false, required: false
  public get tlsSslProfilePolicyVersion() {
    return this.getNumberAttribute('tls_ssl_profile_policy_version');
  }
}

export class DataSdwanTlsSslDecryptionPolicyDefinitionUrlRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTlsSslDecryptionPolicyDefinitionUrlRulesOutputReference {
    return new DataSdwanTlsSslDecryptionPolicyDefinitionUrlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_decryption_policy_definition sdwan_tls_ssl_decryption_policy_definition}
*/
export class DataSdwanTlsSslDecryptionPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_tls_ssl_decryption_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTlsSslDecryptionPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTlsSslDecryptionPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanTlsSslDecryptionPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_decryption_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTlsSslDecryptionPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_tls_ssl_decryption_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_decryption_policy_definition sdwan_tls_ssl_decryption_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTlsSslDecryptionPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTlsSslDecryptionPolicyDefinitionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_lifetime_in_days - computed: true, optional: false, required: false
  public get certificateLifetimeInDays() {
    return this.getNumberAttribute('certificate_lifetime_in_days');
  }

  // certificate_revocation_status - computed: true, optional: false, required: false
  public get certificateRevocationStatus() {
    return this.getStringAttribute('certificate_revocation_status');
  }

  // default_action - computed: true, optional: false, required: false
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ec_key_type - computed: true, optional: false, required: false
  public get ecKeyType() {
    return this.getStringAttribute('ec_key_type');
  }

  // expired_certificate - computed: true, optional: false, required: false
  public get expiredCertificate() {
    return this.getStringAttribute('expired_certificate');
  }

  // failure_mode - computed: true, optional: false, required: false
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // minimal_tls_version - computed: true, optional: false, required: false
  public get minimalTlsVersion() {
    return this.getStringAttribute('minimal_tls_version');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_rules - computed: true, optional: false, required: false
  private _networkRules = new DataSdwanTlsSslDecryptionPolicyDefinitionNetworkRulesList(this, "network_rules", false);
  public get networkRules() {
    return this._networkRules;
  }

  // rsa_key_pair_modulus - computed: true, optional: false, required: false
  public get rsaKeyPairModulus() {
    return this.getStringAttribute('rsa_key_pair_modulus');
  }

  // ssl_decryption_enabled - computed: true, optional: false, required: false
  public get sslDecryptionEnabled() {
    return this.getStringAttribute('ssl_decryption_enabled');
  }

  // unknown_revocation_status - computed: true, optional: false, required: false
  public get unknownRevocationStatus() {
    return this.getStringAttribute('unknown_revocation_status');
  }

  // unsupported_cipher_suites - computed: true, optional: false, required: false
  public get unsupportedCipherSuites() {
    return this.getStringAttribute('unsupported_cipher_suites');
  }

  // unsupported_protocol_versions - computed: true, optional: false, required: false
  public get unsupportedProtocolVersions() {
    return this.getStringAttribute('unsupported_protocol_versions');
  }

  // untrusted_certificate - computed: true, optional: false, required: false
  public get untrustedCertificate() {
    return this.getStringAttribute('untrusted_certificate');
  }

  // url_rules - computed: true, optional: false, required: false
  private _urlRules = new DataSdwanTlsSslDecryptionPolicyDefinitionUrlRulesList(this, "url_rules", false);
  public get urlRules() {
    return this._urlRules;
  }

  // use_default_ca_cert_bundle - computed: true, optional: false, required: false
  public get useDefaultCaCertBundle() {
    return this.getBooleanAttribute('use_default_ca_cert_bundle');
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
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
