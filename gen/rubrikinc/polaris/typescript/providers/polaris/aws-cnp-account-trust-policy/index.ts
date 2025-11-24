// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/aws_cnp_account_trust_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsCnpAccountTrustPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC cloud account ID (UUID). Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/aws_cnp_account_trust_policy#account_id AwsCnpAccountTrustPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * Trust policy external ID. If not specified, RSC will generate an external ID. Note, once the external ID has been set it cannot be changed. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/aws_cnp_account_trust_policy#external_id AwsCnpAccountTrustPolicy#external_id}
  */
  readonly externalId?: string;
  /**
  * RSC features. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `CLOUD_NATIVE_DYNAMODB_PROTECTION`, `KUBERNETES_PROTECTION`, `CLOUD_NATIVE_S3_PROTECTION`, `SERVERS_AND_APPS`, `EXOCOMPUTE` and `RDS_PROTECTION`. **Deprecated:** no longer used by the provider, any value set is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/aws_cnp_account_trust_policy#features AwsCnpAccountTrustPolicy#features}
  */
  readonly features?: string[];
  /**
  * RSC artifact key for the AWS role. Possible values are `CROSSACCOUNT`, `EXOCOMPUTE_EKS_MASTERNODE`, `EXOCOMPUTE_EKS_WORKERNODE` and `EXOCOMPUTE_EKS_LAMBDA`. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/aws_cnp_account_trust_policy#role_key AwsCnpAccountTrustPolicy#role_key}
  */
  readonly roleKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/aws_cnp_account_trust_policy polaris_aws_cnp_account_trust_policy}
*/
export class AwsCnpAccountTrustPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_cnp_account_trust_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsCnpAccountTrustPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCnpAccountTrustPolicy to import
  * @param importFromId The id of the existing AwsCnpAccountTrustPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/aws_cnp_account_trust_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCnpAccountTrustPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_cnp_account_trust_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/aws_cnp_account_trust_policy polaris_aws_cnp_account_trust_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCnpAccountTrustPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCnpAccountTrustPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_cnp_account_trust_policy',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
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
    this._externalId = config.externalId;
    this._features = config.features;
    this._roleKey = config.roleKey;
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

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // features - computed: false, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return cdktf.Fn.tolist(this.getListAttribute('features'));
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // role_key - computed: false, optional: false, required: true
  private _roleKey?: string; 
  public get roleKey() {
    return this.getStringAttribute('role_key');
  }
  public set roleKey(value: string) {
    this._roleKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleKeyInput() {
    return this._roleKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      external_id: cdktf.stringToTerraform(this._externalId),
      features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._features),
      role_key: cdktf.stringToTerraform(this._roleKey),
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
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._features),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_key: {
        value: cdktf.stringToHclTerraform(this._roleKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
