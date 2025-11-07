// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * String that is a number that corresponds to Umbrella Multi Org, can be empty if not using Umbrella Multi Org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#child_org_id DnsSecurityPolicy#child_org_id}
  */
  readonly childOrgId: string;
  /**
  * The description of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#description DnsSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * If matchAllVpn is false, this field is only true if at least one of the targetVpns entires contains an umbrellaDefault true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#dns_crypt DnsSecurityPolicy#dns_crypt}
  */
  readonly dnsCrypt: boolean | cdktf.IResolvable;
  /**
  * Field will only be under data field if matchAllVpn is true, otherwise field will be under targetVpns and set per entry, Attribute conditional on `match_all_vpn` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#dns_server_ip DnsSecurityPolicy#dns_server_ip}
  */
  readonly dnsServerIp: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#feature_profile_id DnsSecurityPolicy#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Field will only be under data field if matchAllVpn is true, otherwise field will be under targetVpns and set per entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#local_domain_bypass_enabled DnsSecurityPolicy#local_domain_bypass_enabled}
  */
  readonly localDomainBypassEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#local_domain_bypass_list_id DnsSecurityPolicy#local_domain_bypass_list_id}
  */
  readonly localDomainBypassListId: string;
  /**
  * If this is true, there shouldn't be a targetVpns field, if false then targetVpns field should be there
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#match_all_vpn DnsSecurityPolicy#match_all_vpn}
  */
  readonly matchAllVpn: boolean | cdktf.IResolvable;
  /**
  * The name of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#name DnsSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Will be under data field only if matchAllVpn is false, if matchAllVpn is true field should not be in payload, Attribute conditional on `match_all_vpn` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#target_vpns DnsSecurityPolicy#target_vpns}
  */
  readonly targetVpns?: DnsSecurityPolicyTargetVpns[] | cdktf.IResolvable;
  /**
  * Field will only be under data field if matchAllVpn is true, otherwise field will be under targetVpns and set per entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#umbrella_default DnsSecurityPolicy#umbrella_default}
  */
  readonly umbrellaDefault: boolean | cdktf.IResolvable;
}
export interface DnsSecurityPolicyTargetVpns {
  /**
  * Field will only be under data field if matchAllVpn is true, otherwise field will be under targetVpns and set per entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#dns_server_ip DnsSecurityPolicy#dns_server_ip}
  */
  readonly dnsServerIp?: string;
  /**
  * Field will only be under data field if matchAllVpn is true, otherwise field will be under targetVpns and set per entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#local_domain_bypass_enabled DnsSecurityPolicy#local_domain_bypass_enabled}
  */
  readonly localDomainBypassEnabled?: boolean | cdktf.IResolvable;
  /**
  * non empty interger string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#uid DnsSecurityPolicy#uid}
  */
  readonly uid?: string;
  /**
  * Field will only be under data field if matchAllVpn is true, otherwise field will be under targetVpns and set per entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#umbrella_default DnsSecurityPolicy#umbrella_default}
  */
  readonly umbrellaDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#vpns DnsSecurityPolicy#vpns}
  */
  readonly vpns?: string[];
}

export function dnsSecurityPolicyTargetVpnsToTerraform(struct?: DnsSecurityPolicyTargetVpns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_ip: cdktf.stringToTerraform(struct!.dnsServerIp),
    local_domain_bypass_enabled: cdktf.booleanToTerraform(struct!.localDomainBypassEnabled),
    uid: cdktf.stringToTerraform(struct!.uid),
    umbrella_default: cdktf.booleanToTerraform(struct!.umbrellaDefault),
    vpns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpns),
  }
}


export function dnsSecurityPolicyTargetVpnsToHclTerraform(struct?: DnsSecurityPolicyTargetVpns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsServerIp),
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
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    umbrella_default: {
      value: cdktf.booleanToHclTerraform(struct!.umbrellaDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSecurityPolicyTargetVpnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSecurityPolicyTargetVpns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIp = this._dnsServerIp;
    }
    if (this._localDomainBypassEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDomainBypassEnabled = this._localDomainBypassEnabled;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._umbrellaDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.umbrellaDefault = this._umbrellaDefault;
    }
    if (this._vpns !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpns = this._vpns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSecurityPolicyTargetVpns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsServerIp = undefined;
      this._localDomainBypassEnabled = undefined;
      this._uid = undefined;
      this._umbrellaDefault = undefined;
      this._vpns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsServerIp = value.dnsServerIp;
      this._localDomainBypassEnabled = value.localDomainBypassEnabled;
      this._uid = value.uid;
      this._umbrellaDefault = value.umbrellaDefault;
      this._vpns = value.vpns;
    }
  }

  // dns_server_ip - computed: false, optional: true, required: false
  private _dnsServerIp?: string; 
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }
  public set dnsServerIp(value: string) {
    this._dnsServerIp = value;
  }
  public resetDnsServerIp() {
    this._dnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpInput() {
    return this._dnsServerIp;
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

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // umbrella_default - computed: false, optional: true, required: false
  private _umbrellaDefault?: boolean | cdktf.IResolvable; 
  public get umbrellaDefault() {
    return this.getBooleanAttribute('umbrella_default');
  }
  public set umbrellaDefault(value: boolean | cdktf.IResolvable) {
    this._umbrellaDefault = value;
  }
  public resetUmbrellaDefault() {
    this._umbrellaDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaDefaultInput() {
    return this._umbrellaDefault;
  }

  // vpns - computed: false, optional: true, required: false
  private _vpns?: string[]; 
  public get vpns() {
    return cdktf.Fn.tolist(this.getListAttribute('vpns'));
  }
  public set vpns(value: string[]) {
    this._vpns = value;
  }
  public resetVpns() {
    this._vpns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnsInput() {
    return this._vpns;
  }
}

export class DnsSecurityPolicyTargetVpnsList extends cdktf.ComplexList {
  public internalValue? : DnsSecurityPolicyTargetVpns[] | cdktf.IResolvable

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
  public get(index: number): DnsSecurityPolicyTargetVpnsOutputReference {
    return new DnsSecurityPolicyTargetVpnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy sdwan_dns_security_policy}
*/
export class DnsSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_dns_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsSecurityPolicy to import
  * @param importFromId The id of the existing DnsSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_dns_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/dns_security_policy sdwan_dns_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DnsSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_dns_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._childOrgId = config.childOrgId;
    this._description = config.description;
    this._dnsCrypt = config.dnsCrypt;
    this._dnsServerIp = config.dnsServerIp;
    this._featureProfileId = config.featureProfileId;
    this._localDomainBypassEnabled = config.localDomainBypassEnabled;
    this._localDomainBypassListId = config.localDomainBypassListId;
    this._matchAllVpn = config.matchAllVpn;
    this._name = config.name;
    this._targetVpns.internalValue = config.targetVpns;
    this._umbrellaDefault = config.umbrellaDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_org_id - computed: false, optional: false, required: true
  private _childOrgId?: string; 
  public get childOrgId() {
    return this.getStringAttribute('child_org_id');
  }
  public set childOrgId(value: string) {
    this._childOrgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childOrgIdInput() {
    return this._childOrgId;
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

  // dns_crypt - computed: false, optional: false, required: true
  private _dnsCrypt?: boolean | cdktf.IResolvable; 
  public get dnsCrypt() {
    return this.getBooleanAttribute('dns_crypt');
  }
  public set dnsCrypt(value: boolean | cdktf.IResolvable) {
    this._dnsCrypt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCryptInput() {
    return this._dnsCrypt;
  }

  // dns_server_ip - computed: false, optional: false, required: true
  private _dnsServerIp?: string; 
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }
  public set dnsServerIp(value: string) {
    this._dnsServerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpInput() {
    return this._dnsServerIp;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_domain_bypass_enabled - computed: false, optional: false, required: true
  private _localDomainBypassEnabled?: boolean | cdktf.IResolvable; 
  public get localDomainBypassEnabled() {
    return this.getBooleanAttribute('local_domain_bypass_enabled');
  }
  public set localDomainBypassEnabled(value: boolean | cdktf.IResolvable) {
    this._localDomainBypassEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDomainBypassEnabledInput() {
    return this._localDomainBypassEnabled;
  }

  // local_domain_bypass_list_id - computed: false, optional: false, required: true
  private _localDomainBypassListId?: string; 
  public get localDomainBypassListId() {
    return this.getStringAttribute('local_domain_bypass_list_id');
  }
  public set localDomainBypassListId(value: string) {
    this._localDomainBypassListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDomainBypassListIdInput() {
    return this._localDomainBypassListId;
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
  private _targetVpns = new DnsSecurityPolicyTargetVpnsList(this, "target_vpns", false);
  public get targetVpns() {
    return this._targetVpns;
  }
  public putTargetVpns(value: DnsSecurityPolicyTargetVpns[] | cdktf.IResolvable) {
    this._targetVpns.internalValue = value;
  }
  public resetTargetVpns() {
    this._targetVpns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpnsInput() {
    return this._targetVpns.internalValue;
  }

  // umbrella_default - computed: false, optional: false, required: true
  private _umbrellaDefault?: boolean | cdktf.IResolvable; 
  public get umbrellaDefault() {
    return this.getBooleanAttribute('umbrella_default');
  }
  public set umbrellaDefault(value: boolean | cdktf.IResolvable) {
    this._umbrellaDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaDefaultInput() {
    return this._umbrellaDefault;
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
      child_org_id: cdktf.stringToTerraform(this._childOrgId),
      description: cdktf.stringToTerraform(this._description),
      dns_crypt: cdktf.booleanToTerraform(this._dnsCrypt),
      dns_server_ip: cdktf.stringToTerraform(this._dnsServerIp),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      local_domain_bypass_enabled: cdktf.booleanToTerraform(this._localDomainBypassEnabled),
      local_domain_bypass_list_id: cdktf.stringToTerraform(this._localDomainBypassListId),
      match_all_vpn: cdktf.booleanToTerraform(this._matchAllVpn),
      name: cdktf.stringToTerraform(this._name),
      target_vpns: cdktf.listMapper(dnsSecurityPolicyTargetVpnsToTerraform, false)(this._targetVpns.internalValue),
      umbrella_default: cdktf.booleanToTerraform(this._umbrellaDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_org_id: {
        value: cdktf.stringToHclTerraform(this._childOrgId),
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
      dns_crypt: {
        value: cdktf.booleanToHclTerraform(this._dnsCrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_server_ip: {
        value: cdktf.stringToHclTerraform(this._dnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_domain_bypass_enabled: {
        value: cdktf.booleanToHclTerraform(this._localDomainBypassEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_domain_bypass_list_id: {
        value: cdktf.stringToHclTerraform(this._localDomainBypassListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.listMapperHcl(dnsSecurityPolicyTargetVpnsToHclTerraform, false)(this._targetVpns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsSecurityPolicyTargetVpnsList",
      },
      umbrella_default: {
        value: cdktf.booleanToHclTerraform(this._umbrellaDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
