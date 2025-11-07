// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviatrixAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account name. This can be used for logging in to CloudN console or UserConnect controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/account#account_name DataAviatrixAccount#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/account#id DataAviatrixAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/account aviatrix_account}
*/
export class DataAviatrixAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviatrixAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviatrixAccount to import
  * @param importFromId The id of the existing DataAviatrixAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviatrixAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/account aviatrix_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviatrixAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataAviatrixAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_account',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // alicloud_account_id - computed: true, optional: false, required: false
  public get alicloudAccountId() {
    return this.getStringAttribute('alicloud_account_id');
  }

  // arm_subscription_id - computed: true, optional: false, required: false
  public get armSubscriptionId() {
    return this.getStringAttribute('arm_subscription_id');
  }

  // aws_account_number - computed: true, optional: false, required: false
  public get awsAccountNumber() {
    return this.getStringAttribute('aws_account_number');
  }

  // aws_gateway_role_app - computed: true, optional: false, required: false
  public get awsGatewayRoleApp() {
    return this.getStringAttribute('aws_gateway_role_app');
  }

  // aws_gateway_role_ec2 - computed: true, optional: false, required: false
  public get awsGatewayRoleEc2() {
    return this.getStringAttribute('aws_gateway_role_ec2');
  }

  // aws_role_arn - computed: true, optional: false, required: false
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }

  // aws_role_ec2 - computed: true, optional: false, required: false
  public get awsRoleEc2() {
    return this.getStringAttribute('aws_role_ec2');
  }

  // awschina_account_number - computed: true, optional: false, required: false
  public get awschinaAccountNumber() {
    return this.getStringAttribute('awschina_account_number');
  }

  // awschina_iam - computed: true, optional: false, required: false
  public get awschinaIam() {
    return this.getBooleanAttribute('awschina_iam');
  }

  // awschina_role_app - computed: true, optional: false, required: false
  public get awschinaRoleApp() {
    return this.getStringAttribute('awschina_role_app');
  }

  // awschina_role_ec2 - computed: true, optional: false, required: false
  public get awschinaRoleEc2() {
    return this.getStringAttribute('awschina_role_ec2');
  }

  // awsgov_account_number - computed: true, optional: false, required: false
  public get awsgovAccountNumber() {
    return this.getStringAttribute('awsgov_account_number');
  }

  // awsgov_iam - computed: true, optional: false, required: false
  public get awsgovIam() {
    return this.getBooleanAttribute('awsgov_iam');
  }

  // awsgov_role_app - computed: true, optional: false, required: false
  public get awsgovRoleApp() {
    return this.getStringAttribute('awsgov_role_app');
  }

  // awsgov_role_ec2 - computed: true, optional: false, required: false
  public get awsgovRoleEc2() {
    return this.getStringAttribute('awsgov_role_ec2');
  }

  // azurechina_subscription_id - computed: true, optional: false, required: false
  public get azurechinaSubscriptionId() {
    return this.getStringAttribute('azurechina_subscription_id');
  }

  // azuregov_subscription_id - computed: true, optional: false, required: false
  public get azuregovSubscriptionId() {
    return this.getStringAttribute('azuregov_subscription_id');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }

  // gcloud_project_id - computed: true, optional: false, required: false
  public get gcloudProjectId() {
    return this.getStringAttribute('gcloud_project_id');
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
      account_name: cdktf.stringToTerraform(this._accountName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
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
