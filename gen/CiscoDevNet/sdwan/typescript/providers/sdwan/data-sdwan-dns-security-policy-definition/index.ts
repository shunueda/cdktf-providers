// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanDnsSecurityPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy_definition#id DataSdwanDnsSecurityPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanDnsSecurityPolicyDefinitionTargetVpns {
}

export function dataSdwanDnsSecurityPolicyDefinitionTargetVpnsToTerraform(struct?: DataSdwanDnsSecurityPolicyDefinitionTargetVpns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanDnsSecurityPolicyDefinitionTargetVpnsToHclTerraform(struct?: DataSdwanDnsSecurityPolicyDefinitionTargetVpns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanDnsSecurityPolicyDefinitionTargetVpnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanDnsSecurityPolicyDefinitionTargetVpns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanDnsSecurityPolicyDefinitionTargetVpns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_dns_server_ip - computed: true, optional: false, required: false
  public get customDnsServerIp() {
    return this.getStringAttribute('custom_dns_server_ip');
  }

  // local_domain_bypass_enabled - computed: true, optional: false, required: false
  public get localDomainBypassEnabled() {
    return this.getBooleanAttribute('local_domain_bypass_enabled');
  }

  // umbrella_dns_default - computed: true, optional: false, required: false
  public get umbrellaDnsDefault() {
    return this.getBooleanAttribute('umbrella_dns_default');
  }

  // vpn_ids - computed: true, optional: false, required: false
  public get vpnIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_ids'));
  }
}

export class DataSdwanDnsSecurityPolicyDefinitionTargetVpnsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanDnsSecurityPolicyDefinitionTargetVpnsOutputReference {
    return new DataSdwanDnsSecurityPolicyDefinitionTargetVpnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy_definition sdwan_dns_security_policy_definition}
*/
export class DataSdwanDnsSecurityPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_dns_security_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanDnsSecurityPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanDnsSecurityPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanDnsSecurityPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanDnsSecurityPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_dns_security_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy_definition sdwan_dns_security_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanDnsSecurityPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanDnsSecurityPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_dns_security_policy_definition',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cisco_sig_credentials_feature_template_id - computed: true, optional: false, required: false
  public get ciscoSigCredentialsFeatureTemplateId() {
    return this.getStringAttribute('cisco_sig_credentials_feature_template_id');
  }

  // cisco_sig_credentials_feature_template_version - computed: true, optional: false, required: false
  public get ciscoSigCredentialsFeatureTemplateVersion() {
    return this.getNumberAttribute('cisco_sig_credentials_feature_template_version');
  }

  // custom_dns_server_ip - computed: true, optional: false, required: false
  public get customDnsServerIp() {
    return this.getStringAttribute('custom_dns_server_ip');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dnscrypt - computed: true, optional: false, required: false
  public get dnscrypt() {
    return this.getBooleanAttribute('dnscrypt');
  }

  // domain_list_id - computed: true, optional: false, required: false
  public get domainListId() {
    return this.getStringAttribute('domain_list_id');
  }

  // domain_list_version - computed: true, optional: false, required: false
  public get domainListVersion() {
    return this.getNumberAttribute('domain_list_version');
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

  // local_domain_bypass_enabled - computed: true, optional: false, required: false
  public get localDomainBypassEnabled() {
    return this.getBooleanAttribute('local_domain_bypass_enabled');
  }

  // match_all_vpn - computed: true, optional: false, required: false
  public get matchAllVpn() {
    return this.getBooleanAttribute('match_all_vpn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_vpns - computed: true, optional: false, required: false
  private _targetVpns = new DataSdwanDnsSecurityPolicyDefinitionTargetVpnsList(this, "target_vpns", false);
  public get targetVpns() {
    return this._targetVpns;
  }

  // umbrella_dns_default - computed: true, optional: false, required: false
  public get umbrellaDnsDefault() {
    return this.getBooleanAttribute('umbrella_dns_default');
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
