// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudngfwawsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#account_id DataCloudngfwawsAccount#account_id}
  */
  readonly accountId?: string;
  /**
  * The CFT URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#cft_url DataCloudngfwawsAccount#cft_url}
  */
  readonly cftUrl?: string;
  /**
  * The external ID of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#external_id DataCloudngfwawsAccount#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#id DataCloudngfwawsAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Account onboarding status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#onboarding_status DataCloudngfwawsAccount#onboarding_status}
  */
  readonly onboardingStatus?: string;
  /**
  * Origin of account onboarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#origin DataCloudngfwawsAccount#origin}
  */
  readonly origin?: string;
  /**
  * The account ID of cloud NGFW service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#service_account_id DataCloudngfwawsAccount#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * The SNS topic ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#sns_topic_arn DataCloudngfwawsAccount#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
  /**
  * The trusted account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#trusted_account DataCloudngfwawsAccount#trusted_account}
  */
  readonly trustedAccount?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account cloudngfwaws_account}
*/
export class DataCloudngfwawsAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudngfwawsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudngfwawsAccount to import
  * @param importFromId The id of the existing DataCloudngfwawsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudngfwawsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/account cloudngfwaws_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudngfwawsAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudngfwawsAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_account',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4',
        providerVersionConstraint: '3.0.4'
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
    this._cftUrl = config.cftUrl;
    this._externalId = config.externalId;
    this._id = config.id;
    this._onboardingStatus = config.onboardingStatus;
    this._origin = config.origin;
    this._serviceAccountId = config.serviceAccountId;
    this._snsTopicArn = config.snsTopicArn;
    this._trustedAccount = config.trustedAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // cft_url - computed: true, optional: true, required: false
  private _cftUrl?: string; 
  public get cftUrl() {
    return this.getStringAttribute('cft_url');
  }
  public set cftUrl(value: string) {
    this._cftUrl = value;
  }
  public resetCftUrl() {
    this._cftUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cftUrlInput() {
    return this._cftUrl;
  }

  // external_id - computed: true, optional: true, required: false
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

  // onboarding_status - computed: true, optional: true, required: false
  private _onboardingStatus?: string; 
  public get onboardingStatus() {
    return this.getStringAttribute('onboarding_status');
  }
  public set onboardingStatus(value: string) {
    this._onboardingStatus = value;
  }
  public resetOnboardingStatus() {
    this._onboardingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingStatusInput() {
    return this._onboardingStatus;
  }

  // origin - computed: true, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // sns_topic_arn - computed: true, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }

  // trusted_account - computed: true, optional: true, required: false
  private _trustedAccount?: string; 
  public get trustedAccount() {
    return this.getStringAttribute('trusted_account');
  }
  public set trustedAccount(value: string) {
    this._trustedAccount = value;
  }
  public resetTrustedAccount() {
    this._trustedAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedAccountInput() {
    return this._trustedAccount;
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      cft_url: cdktf.stringToTerraform(this._cftUrl),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      onboarding_status: cdktf.stringToTerraform(this._onboardingStatus),
      origin: cdktf.stringToTerraform(this._origin),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
      trusted_account: cdktf.stringToTerraform(this._trustedAccount),
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
      cft_url: {
        value: cdktf.stringToHclTerraform(this._cftUrl),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboarding_status: {
        value: cdktf.stringToHclTerraform(this._onboardingStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_topic_arn: {
        value: cdktf.stringToHclTerraform(this._snsTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_account: {
        value: cdktf.stringToHclTerraform(this._trustedAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
