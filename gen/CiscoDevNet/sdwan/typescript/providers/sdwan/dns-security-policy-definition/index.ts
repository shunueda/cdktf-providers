// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSecurityPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Credentials feature template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#cisco_sig_credentials_feature_template_id DnsSecurityPolicyDefinition#cisco_sig_credentials_feature_template_id}
  */
  readonly ciscoSigCredentialsFeatureTemplateId: string;
  /**
  * Credentials feature template version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#cisco_sig_credentials_feature_template_version DnsSecurityPolicyDefinition#cisco_sig_credentials_feature_template_version}
  */
  readonly ciscoSigCredentialsFeatureTemplateVersion?: number;
  /**
  * Only relevant when `umbrella_dns_default` is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#custom_dns_server_ip DnsSecurityPolicyDefinition#custom_dns_server_ip}
  */
  readonly customDnsServerIp?: string;
  /**
  * The description of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#description DnsSecurityPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * Should DNSCrypt be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#dnscrypt DnsSecurityPolicyDefinition#dnscrypt}
  */
  readonly dnscrypt?: boolean | cdktf.IResolvable;
  /**
  * Local domain bypass list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#domain_list_id DnsSecurityPolicyDefinition#domain_list_id}
  */
  readonly domainListId?: string;
  /**
  * Local domain bypass list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#domain_list_version DnsSecurityPolicyDefinition#domain_list_version}
  */
  readonly domainListVersion?: number;
  /**
  * Should the local domain bypass list be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#local_domain_bypass_enabled DnsSecurityPolicyDefinition#local_domain_bypass_enabled}
  */
  readonly localDomainBypassEnabled?: boolean | cdktf.IResolvable;
  /**
  * Should use match all VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#match_all_vpn DnsSecurityPolicyDefinition#match_all_vpn}
  */
  readonly matchAllVpn: boolean | cdktf.IResolvable;
  /**
  * The name of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#name DnsSecurityPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * Only relevant when `match_all_vpn` is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#target_vpns DnsSecurityPolicyDefinition#target_vpns}
  */
  readonly targetVpns?: DnsSecurityPolicyDefinitionTargetVpns[] | cdktf.IResolvable;
  /**
  * Should use umbrella as DNS Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#umbrella_dns_default DnsSecurityPolicyDefinition#umbrella_dns_default}
  */
  readonly umbrellaDnsDefault: boolean | cdktf.IResolvable;
}
export interface DnsSecurityPolicyDefinitionTargetVpns {
  /**
  * Only relevant when `umbrella_dns_default` is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#custom_dns_server_ip DnsSecurityPolicyDefinition#custom_dns_server_ip}
  */
  readonly customDnsServerIp?: string;
  /**
  * Should the local domain bypass list be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#local_domain_bypass_enabled DnsSecurityPolicyDefinition#local_domain_bypass_enabled}
  */
  readonly localDomainBypassEnabled?: boolean | cdktf.IResolvable;
  /**
  * Should use umbrella as DNS Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#umbrella_dns_default DnsSecurityPolicyDefinition#umbrella_dns_default}
  */
  readonly umbrellaDnsDefault?: boolean | cdktf.IResolvable;
  /**
  * VPN ID's separated by Comma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#vpn_ids DnsSecurityPolicyDefinition#vpn_ids}
  */
  readonly vpnIds?: string[];
}

export function dnsSecurityPolicyDefinitionTargetVpnsToTerraform(struct?: DnsSecurityPolicyDefinitionTargetVpns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_dns_server_ip: cdktf.stringToTerraform(struct!.customDnsServerIp),
    local_domain_bypass_enabled: cdktf.booleanToTerraform(struct!.localDomainBypassEnabled),
    umbrella_dns_default: cdktf.booleanToTerraform(struct!.umbrellaDnsDefault),
    vpn_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnIds),
  }
}


export function dnsSecurityPolicyDefinitionTargetVpnsToHclTerraform(struct?: DnsSecurityPolicyDefinitionTargetVpns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_dns_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.customDnsServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_domain_bypass_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.localDomainBypassEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    umbrella_dns_default: {
      value: cdktf.booleanToHclTerraform(struct!.umbrellaDnsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpnIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSecurityPolicyDefinitionTargetVpnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSecurityPolicyDefinitionTargetVpns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDnsServerIp = this._customDnsServerIp;
    }
    if (this._localDomainBypassEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDomainBypassEnabled = this._localDomainBypassEnabled;
    }
    if (this._umbrellaDnsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.umbrellaDnsDefault = this._umbrellaDnsDefault;
    }
    if (this._vpnIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIds = this._vpnIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSecurityPolicyDefinitionTargetVpns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customDnsServerIp = undefined;
      this._localDomainBypassEnabled = undefined;
      this._umbrellaDnsDefault = undefined;
      this._vpnIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customDnsServerIp = value.customDnsServerIp;
      this._localDomainBypassEnabled = value.localDomainBypassEnabled;
      this._umbrellaDnsDefault = value.umbrellaDnsDefault;
      this._vpnIds = value.vpnIds;
    }
  }

  // custom_dns_server_ip - computed: false, optional: true, required: false
  private _customDnsServerIp?: string; 
  public get customDnsServerIp() {
    return this.getStringAttribute('custom_dns_server_ip');
  }
  public set customDnsServerIp(value: string) {
    this._customDnsServerIp = value;
  }
  public resetCustomDnsServerIp() {
    this._customDnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsServerIpInput() {
    return this._customDnsServerIp;
  }

  // local_domain_bypass_enabled - computed: false, optional: true, required: false
  private _localDomainBypassEnabled?: boolean | cdktf.IResolvable; 
  public get localDomainBypassEnabled() {
    return this.getBooleanAttribute('local_domain_bypass_enabled');
  }
  public set localDomainBypassEnabled(value: boolean | cdktf.IResolvable) {
    this._localDomainBypassEnabled = value;
  }
  public resetLocalDomainBypassEnabled() {
    this._localDomainBypassEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDomainBypassEnabledInput() {
    return this._localDomainBypassEnabled;
  }

  // umbrella_dns_default - computed: false, optional: true, required: false
  private _umbrellaDnsDefault?: boolean | cdktf.IResolvable; 
  public get umbrellaDnsDefault() {
    return this.getBooleanAttribute('umbrella_dns_default');
  }
  public set umbrellaDnsDefault(value: boolean | cdktf.IResolvable) {
    this._umbrellaDnsDefault = value;
  }
  public resetUmbrellaDnsDefault() {
    this._umbrellaDnsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaDnsDefaultInput() {
    return this._umbrellaDnsDefault;
  }

  // vpn_ids - computed: false, optional: true, required: false
  private _vpnIds?: string[]; 
  public get vpnIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_ids'));
  }
  public set vpnIds(value: string[]) {
    this._vpnIds = value;
  }
  public resetVpnIds() {
    this._vpnIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdsInput() {
    return this._vpnIds;
  }
}

export class DnsSecurityPolicyDefinitionTargetVpnsList extends cdktf.ComplexList {
  public internalValue? : DnsSecurityPolicyDefinitionTargetVpns[] | cdktf.IResolvable

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
  public get(index: number): DnsSecurityPolicyDefinitionTargetVpnsOutputReference {
    return new DnsSecurityPolicyDefinitionTargetVpnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition sdwan_dns_security_policy_definition}
*/
export class DnsSecurityPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_dns_security_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsSecurityPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsSecurityPolicyDefinition to import
  * @param importFromId The id of the existing DnsSecurityPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsSecurityPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_dns_security_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy_definition sdwan_dns_security_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsSecurityPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DnsSecurityPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_dns_security_policy_definition',
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
    this._ciscoSigCredentialsFeatureTemplateId = config.ciscoSigCredentialsFeatureTemplateId;
    this._ciscoSigCredentialsFeatureTemplateVersion = config.ciscoSigCredentialsFeatureTemplateVersion;
    this._customDnsServerIp = config.customDnsServerIp;
    this._description = config.description;
    this._dnscrypt = config.dnscrypt;
    this._domainListId = config.domainListId;
    this._domainListVersion = config.domainListVersion;
    this._localDomainBypassEnabled = config.localDomainBypassEnabled;
    this._matchAllVpn = config.matchAllVpn;
    this._name = config.name;
    this._targetVpns.internalValue = config.targetVpns;
    this._umbrellaDnsDefault = config.umbrellaDnsDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cisco_sig_credentials_feature_template_id - computed: false, optional: false, required: true
  private _ciscoSigCredentialsFeatureTemplateId?: string; 
  public get ciscoSigCredentialsFeatureTemplateId() {
    return this.getStringAttribute('cisco_sig_credentials_feature_template_id');
  }
  public set ciscoSigCredentialsFeatureTemplateId(value: string) {
    this._ciscoSigCredentialsFeatureTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoSigCredentialsFeatureTemplateIdInput() {
    return this._ciscoSigCredentialsFeatureTemplateId;
  }

  // cisco_sig_credentials_feature_template_version - computed: false, optional: true, required: false
  private _ciscoSigCredentialsFeatureTemplateVersion?: number; 
  public get ciscoSigCredentialsFeatureTemplateVersion() {
    return this.getNumberAttribute('cisco_sig_credentials_feature_template_version');
  }
  public set ciscoSigCredentialsFeatureTemplateVersion(value: number) {
    this._ciscoSigCredentialsFeatureTemplateVersion = value;
  }
  public resetCiscoSigCredentialsFeatureTemplateVersion() {
    this._ciscoSigCredentialsFeatureTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoSigCredentialsFeatureTemplateVersionInput() {
    return this._ciscoSigCredentialsFeatureTemplateVersion;
  }

  // custom_dns_server_ip - computed: false, optional: true, required: false
  private _customDnsServerIp?: string; 
  public get customDnsServerIp() {
    return this.getStringAttribute('custom_dns_server_ip');
  }
  public set customDnsServerIp(value: string) {
    this._customDnsServerIp = value;
  }
  public resetCustomDnsServerIp() {
    this._customDnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsServerIpInput() {
    return this._customDnsServerIp;
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

  // dnscrypt - computed: false, optional: true, required: false
  private _dnscrypt?: boolean | cdktf.IResolvable; 
  public get dnscrypt() {
    return this.getBooleanAttribute('dnscrypt');
  }
  public set dnscrypt(value: boolean | cdktf.IResolvable) {
    this._dnscrypt = value;
  }
  public resetDnscrypt() {
    this._dnscrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnscryptInput() {
    return this._dnscrypt;
  }

  // domain_list_id - computed: false, optional: true, required: false
  private _domainListId?: string; 
  public get domainListId() {
    return this.getStringAttribute('domain_list_id');
  }
  public set domainListId(value: string) {
    this._domainListId = value;
  }
  public resetDomainListId() {
    this._domainListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListIdInput() {
    return this._domainListId;
  }

  // domain_list_version - computed: false, optional: true, required: false
  private _domainListVersion?: number; 
  public get domainListVersion() {
    return this.getNumberAttribute('domain_list_version');
  }
  public set domainListVersion(value: number) {
    this._domainListVersion = value;
  }
  public resetDomainListVersion() {
    this._domainListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListVersionInput() {
    return this._domainListVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_domain_bypass_enabled - computed: false, optional: true, required: false
  private _localDomainBypassEnabled?: boolean | cdktf.IResolvable; 
  public get localDomainBypassEnabled() {
    return this.getBooleanAttribute('local_domain_bypass_enabled');
  }
  public set localDomainBypassEnabled(value: boolean | cdktf.IResolvable) {
    this._localDomainBypassEnabled = value;
  }
  public resetLocalDomainBypassEnabled() {
    this._localDomainBypassEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDomainBypassEnabledInput() {
    return this._localDomainBypassEnabled;
  }

  // match_all_vpn - computed: false, optional: false, required: true
  private _matchAllVpn?: boolean | cdktf.IResolvable; 
  public get matchAllVpn() {
    return this.getBooleanAttribute('match_all_vpn');
  }
  public set matchAllVpn(value: boolean | cdktf.IResolvable) {
    this._matchAllVpn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllVpnInput() {
    return this._matchAllVpn;
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

  // target_vpns - computed: false, optional: true, required: false
  private _targetVpns = new DnsSecurityPolicyDefinitionTargetVpnsList(this, "target_vpns", false);
  public get targetVpns() {
    return this._targetVpns;
  }
  public putTargetVpns(value: DnsSecurityPolicyDefinitionTargetVpns[] | cdktf.IResolvable) {
    this._targetVpns.internalValue = value;
  }
  public resetTargetVpns() {
    this._targetVpns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpnsInput() {
    return this._targetVpns.internalValue;
  }

  // umbrella_dns_default - computed: false, optional: false, required: true
  private _umbrellaDnsDefault?: boolean | cdktf.IResolvable; 
  public get umbrellaDnsDefault() {
    return this.getBooleanAttribute('umbrella_dns_default');
  }
  public set umbrellaDnsDefault(value: boolean | cdktf.IResolvable) {
    this._umbrellaDnsDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaDnsDefaultInput() {
    return this._umbrellaDnsDefault;
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
      cisco_sig_credentials_feature_template_id: cdktf.stringToTerraform(this._ciscoSigCredentialsFeatureTemplateId),
      cisco_sig_credentials_feature_template_version: cdktf.numberToTerraform(this._ciscoSigCredentialsFeatureTemplateVersion),
      custom_dns_server_ip: cdktf.stringToTerraform(this._customDnsServerIp),
      description: cdktf.stringToTerraform(this._description),
      dnscrypt: cdktf.booleanToTerraform(this._dnscrypt),
      domain_list_id: cdktf.stringToTerraform(this._domainListId),
      domain_list_version: cdktf.numberToTerraform(this._domainListVersion),
      local_domain_bypass_enabled: cdktf.booleanToTerraform(this._localDomainBypassEnabled),
      match_all_vpn: cdktf.booleanToTerraform(this._matchAllVpn),
      name: cdktf.stringToTerraform(this._name),
      target_vpns: cdktf.listMapper(dnsSecurityPolicyDefinitionTargetVpnsToTerraform, false)(this._targetVpns.internalValue),
      umbrella_dns_default: cdktf.booleanToTerraform(this._umbrellaDnsDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cisco_sig_credentials_feature_template_id: {
        value: cdktf.stringToHclTerraform(this._ciscoSigCredentialsFeatureTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_sig_credentials_feature_template_version: {
        value: cdktf.numberToHclTerraform(this._ciscoSigCredentialsFeatureTemplateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_dns_server_ip: {
        value: cdktf.stringToHclTerraform(this._customDnsServerIp),
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
      dnscrypt: {
        value: cdktf.booleanToHclTerraform(this._dnscrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_list_id: {
        value: cdktf.stringToHclTerraform(this._domainListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_list_version: {
        value: cdktf.numberToHclTerraform(this._domainListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_domain_bypass_enabled: {
        value: cdktf.booleanToHclTerraform(this._localDomainBypassEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_all_vpn: {
        value: cdktf.booleanToHclTerraform(this._matchAllVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vpns: {
        value: cdktf.listMapperHcl(dnsSecurityPolicyDefinitionTargetVpnsToHclTerraform, false)(this._targetVpns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsSecurityPolicyDefinitionTargetVpnsList",
      },
      umbrella_dns_default: {
        value: cdktf.booleanToHclTerraform(this._umbrellaDnsDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
