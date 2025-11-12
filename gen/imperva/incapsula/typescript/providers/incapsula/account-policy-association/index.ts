// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_policy_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountPolicyAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_policy_association#account_id AccountPolicyAssociation#account_id}
  */
  readonly accountId: string;
  /**
  * Comma separated list of The account’s available policies. These policies can be applied to the websites in the account. e.g. available_policy_ids = format("%s,%s", incapsula_policy.acl1-policy.id, incapsula_policy.waf3-policy.id) Specify this argument only if you are a parent account trying to update your child account policies availability in order to remove availability for all policies please specify "NO_AVAILABLE_POLICIES".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_policy_association#available_policy_ids AccountPolicyAssociation#available_policy_ids}
  */
  readonly availablePolicyIds?: string;
  /**
  * This list is currently relevant to whitelist and acl policies. More than one policy can be set as default. providing an empty list or omitting this argument will clear all the non mandatory default policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_policy_association#default_non_mandatory_policy_ids AccountPolicyAssociation#default_non_mandatory_policy_ids}
  */
  readonly defaultNonMandatoryPolicyIds?: string[];
  /**
  * The WAF policy which is set as default to the account. The account can only have 1 such id.
  *  The Default policy will be applied automatically to sites that were create after setting it to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_policy_association#default_waf_policy_id AccountPolicyAssociation#default_waf_policy_id}
  */
  readonly defaultWafPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_policy_association#id AccountPolicyAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_policy_association incapsula_account_policy_association}
*/
export class AccountPolicyAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_account_policy_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountPolicyAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountPolicyAssociation to import
  * @param importFromId The id of the existing AccountPolicyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_policy_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountPolicyAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_account_policy_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_policy_association incapsula_account_policy_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountPolicyAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AccountPolicyAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_account_policy_association',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._availablePolicyIds = config.availablePolicyIds;
    this._defaultNonMandatoryPolicyIds = config.defaultNonMandatoryPolicyIds;
    this._defaultWafPolicyId = config.defaultWafPolicyId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // available_policy_ids - computed: false, optional: true, required: false
  private _availablePolicyIds?: string; 
  public get availablePolicyIds() {
    return this.getStringAttribute('available_policy_ids');
  }
  public set availablePolicyIds(value: string) {
    this._availablePolicyIds = value;
  }
  public resetAvailablePolicyIds() {
    this._availablePolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availablePolicyIdsInput() {
    return this._availablePolicyIds;
  }

  // default_non_mandatory_policy_ids - computed: false, optional: true, required: false
  private _defaultNonMandatoryPolicyIds?: string[]; 
  public get defaultNonMandatoryPolicyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('default_non_mandatory_policy_ids'));
  }
  public set defaultNonMandatoryPolicyIds(value: string[]) {
    this._defaultNonMandatoryPolicyIds = value;
  }
  public resetDefaultNonMandatoryPolicyIds() {
    this._defaultNonMandatoryPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNonMandatoryPolicyIdsInput() {
    return this._defaultNonMandatoryPolicyIds;
  }

  // default_waf_policy_id - computed: false, optional: true, required: false
  private _defaultWafPolicyId?: string; 
  public get defaultWafPolicyId() {
    return this.getStringAttribute('default_waf_policy_id');
  }
  public set defaultWafPolicyId(value: string) {
    this._defaultWafPolicyId = value;
  }
  public resetDefaultWafPolicyId() {
    this._defaultWafPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWafPolicyIdInput() {
    return this._defaultWafPolicyId;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      available_policy_ids: cdktf.stringToTerraform(this._availablePolicyIds),
      default_non_mandatory_policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultNonMandatoryPolicyIds),
      default_waf_policy_id: cdktf.stringToTerraform(this._defaultWafPolicyId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_policy_ids: {
        value: cdktf.stringToHclTerraform(this._availablePolicyIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_non_mandatory_policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultNonMandatoryPolicyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_waf_policy_id: {
        value: cdktf.stringToHclTerraform(this._defaultWafPolicyId),
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
