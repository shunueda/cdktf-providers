// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_azure_onboarding_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDome9AwpAzureOnboardingDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_azure_onboarding_data#centralized_cloud_account_id DataDome9AwpAzureOnboardingData#centralized_cloud_account_id}
  */
  readonly centralizedCloudAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_azure_onboarding_data#cloud_account_id DataDome9AwpAzureOnboardingData#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_azure_onboarding_data#id DataDome9AwpAzureOnboardingData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_azure_onboarding_data dome9_awp_azure_onboarding_data}
*/
export class DataDome9AwpAzureOnboardingData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_awp_azure_onboarding_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDome9AwpAzureOnboardingData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDome9AwpAzureOnboardingData to import
  * @param importFromId The id of the existing DataDome9AwpAzureOnboardingData that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_azure_onboarding_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDome9AwpAzureOnboardingData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_awp_azure_onboarding_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_azure_onboarding_data dome9_awp_azure_onboarding_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDome9AwpAzureOnboardingDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataDome9AwpAzureOnboardingDataConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_awp_azure_onboarding_data',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._centralizedCloudAccountId = config.centralizedCloudAccountId;
    this._cloudAccountId = config.cloudAccountId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_client_id - computed: true, optional: false, required: false
  public get appClientId() {
    return this.getStringAttribute('app_client_id');
  }

  // awp_centralized_cloud_account_id - computed: true, optional: false, required: false
  public get awpCentralizedCloudAccountId() {
    return this.getStringAttribute('awp_centralized_cloud_account_id');
  }

  // awp_cloud_account_id - computed: true, optional: false, required: false
  public get awpCloudAccountId() {
    return this.getStringAttribute('awp_cloud_account_id');
  }

  // centralized_cloud_account_id - computed: false, optional: true, required: false
  private _centralizedCloudAccountId?: string; 
  public get centralizedCloudAccountId() {
    return this.getStringAttribute('centralized_cloud_account_id');
  }
  public set centralizedCloudAccountId(value: string) {
    this._centralizedCloudAccountId = value;
  }
  public resetCentralizedCloudAccountId() {
    this._centralizedCloudAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralizedCloudAccountIdInput() {
    return this._centralizedCloudAccountId;
  }

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      centralized_cloud_account_id: cdktf.stringToTerraform(this._centralizedCloudAccountId),
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      centralized_cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._centralizedCloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudAccountId),
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
