// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/aws_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the AWS account to be linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/aws_connection#account_native_id AwsConnection#account_native_id}
  */
  readonly accountNativeId: string;
  /**
  * Region of the AWS account to be linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/aws_connection#aws_region AwsConnection#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Brief description to denote details of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/aws_connection#description AwsConnection#description}
  */
  readonly description?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/aws_connection clumio_aws_connection}
*/
export class AwsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_aws_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsConnection to import
  * @param importFromId The id of the existing AwsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/aws_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_aws_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/aws_connection clumio_aws_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_aws_connection',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountNativeId = config.accountNativeId;
    this._awsRegion = config.awsRegion;
    this._description = config.description;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_native_id - computed: false, optional: false, required: true
  private _accountNativeId?: string; 
  public get accountNativeId() {
    return this.getStringAttribute('account_native_id');
  }
  public set accountNativeId(value: string) {
    this._accountNativeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNativeIdInput() {
    return this._accountNativeId;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // clumio_aws_account_id - computed: true, optional: false, required: false
  public get clumioAwsAccountId() {
    return this.getStringAttribute('clumio_aws_account_id');
  }

  // clumio_aws_region - computed: true, optional: false, required: false
  public get clumioAwsRegion() {
    return this.getStringAttribute('clumio_aws_region');
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // data_plane_account_id - computed: true, optional: false, required: false
  public get dataPlaneAccountId() {
    return this.getStringAttribute('data_plane_account_id');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // role_external_id - computed: true, optional: false, required: false
  public get roleExternalId() {
    return this.getStringAttribute('role_external_id');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_native_id: cdktf.stringToTerraform(this._accountNativeId),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      description: cdktf.stringToTerraform(this._description),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_native_id: {
        value: cdktf.stringToHclTerraform(this._accountNativeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
