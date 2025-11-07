// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanDnsSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy#feature_profile_id DataSdwanDnsSecurityPolicy#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy#id DataSdwanDnsSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanDnsSecurityPolicyTargetVpns {
}

export function dataSdwanDnsSecurityPolicyTargetVpnsToTerraform(struct?: DataSdwanDnsSecurityPolicyTargetVpns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanDnsSecurityPolicyTargetVpnsToHclTerraform(struct?: DataSdwanDnsSecurityPolicyTargetVpns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanDnsSecurityPolicyTargetVpnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanDnsSecurityPolicyTargetVpns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanDnsSecurityPolicyTargetVpns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_server_ip - computed: true, optional: false, required: false
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }

  // local_domain_bypass_enabled - computed: true, optional: false, required: false
  public get localDomainBypassEnabled() {
    return this.getBooleanAttribute('local_domain_bypass_enabled');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // umbrella_default - computed: true, optional: false, required: false
  public get umbrellaDefault() {
    return this.getBooleanAttribute('umbrella_default');
  }

  // vpns - computed: true, optional: false, required: false
  public get vpns() {
    return cdktf.Fn.tolist(this.getListAttribute('vpns'));
  }
}

export class DataSdwanDnsSecurityPolicyTargetVpnsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanDnsSecurityPolicyTargetVpnsOutputReference {
    return new DataSdwanDnsSecurityPolicyTargetVpnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy sdwan_dns_security_policy}
*/
export class DataSdwanDnsSecurityPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_dns_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanDnsSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanDnsSecurityPolicy to import
  * @param importFromId The id of the existing DataSdwanDnsSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanDnsSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_dns_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/dns_security_policy sdwan_dns_security_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanDnsSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanDnsSecurityPolicyConfig) {
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
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_org_id - computed: true, optional: false, required: false
  public get childOrgId() {
    return this.getStringAttribute('child_org_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_crypt - computed: true, optional: false, required: false
  public get dnsCrypt() {
    return this.getBooleanAttribute('dns_crypt');
  }

  // dns_server_ip - computed: true, optional: false, required: false
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
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

  // local_domain_bypass_list_id - computed: true, optional: false, required: false
  public get localDomainBypassListId() {
    return this.getStringAttribute('local_domain_bypass_list_id');
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
  private _targetVpns = new DataSdwanDnsSecurityPolicyTargetVpnsList(this, "target_vpns", false);
  public get targetVpns() {
    return this._targetVpns;
  }

  // umbrella_default - computed: true, optional: false, required: false
  public get umbrellaDefault() {
    return this.getBooleanAttribute('umbrella_default');
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
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
