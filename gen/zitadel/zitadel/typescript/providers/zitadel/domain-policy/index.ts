// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/domain_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/domain_policy#id DomainPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/domain_policy#org_id DomainPolicy#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/domain_policy#smtp_sender_address_matches_instance_domain DomainPolicy#smtp_sender_address_matches_instance_domain}
  */
  readonly smtpSenderAddressMatchesInstanceDomain: boolean | cdktf.IResolvable;
  /**
  * User login must be domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/domain_policy#user_login_must_be_domain DomainPolicy#user_login_must_be_domain}
  */
  readonly userLoginMustBeDomain: boolean | cdktf.IResolvable;
  /**
  * Validate organization domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/domain_policy#validate_org_domains DomainPolicy#validate_org_domains}
  */
  readonly validateOrgDomains: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/domain_policy zitadel_domain_policy}
*/
export class DomainPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_domain_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainPolicy to import
  * @param importFromId The id of the existing DomainPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/domain_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_domain_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/domain_policy zitadel_domain_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DomainPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_domain_policy',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
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
    this._orgId = config.orgId;
    this._smtpSenderAddressMatchesInstanceDomain = config.smtpSenderAddressMatchesInstanceDomain;
    this._userLoginMustBeDomain = config.userLoginMustBeDomain;
    this._validateOrgDomains = config.validateOrgDomains;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // smtp_sender_address_matches_instance_domain - computed: false, optional: false, required: true
  private _smtpSenderAddressMatchesInstanceDomain?: boolean | cdktf.IResolvable; 
  public get smtpSenderAddressMatchesInstanceDomain() {
    return this.getBooleanAttribute('smtp_sender_address_matches_instance_domain');
  }
  public set smtpSenderAddressMatchesInstanceDomain(value: boolean | cdktf.IResolvable) {
    this._smtpSenderAddressMatchesInstanceDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpSenderAddressMatchesInstanceDomainInput() {
    return this._smtpSenderAddressMatchesInstanceDomain;
  }

  // user_login_must_be_domain - computed: false, optional: false, required: true
  private _userLoginMustBeDomain?: boolean | cdktf.IResolvable; 
  public get userLoginMustBeDomain() {
    return this.getBooleanAttribute('user_login_must_be_domain');
  }
  public set userLoginMustBeDomain(value: boolean | cdktf.IResolvable) {
    this._userLoginMustBeDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginMustBeDomainInput() {
    return this._userLoginMustBeDomain;
  }

  // validate_org_domains - computed: false, optional: false, required: true
  private _validateOrgDomains?: boolean | cdktf.IResolvable; 
  public get validateOrgDomains() {
    return this.getBooleanAttribute('validate_org_domains');
  }
  public set validateOrgDomains(value: boolean | cdktf.IResolvable) {
    this._validateOrgDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validateOrgDomainsInput() {
    return this._validateOrgDomains;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      smtp_sender_address_matches_instance_domain: cdktf.booleanToTerraform(this._smtpSenderAddressMatchesInstanceDomain),
      user_login_must_be_domain: cdktf.booleanToTerraform(this._userLoginMustBeDomain),
      validate_org_domains: cdktf.booleanToTerraform(this._validateOrgDomains),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_sender_address_matches_instance_domain: {
        value: cdktf.booleanToHclTerraform(this._smtpSenderAddressMatchesInstanceDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_login_must_be_domain: {
        value: cdktf.booleanToHclTerraform(this._userLoginMustBeDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validate_org_domains: {
        value: cdktf.booleanToHclTerraform(this._validateOrgDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
