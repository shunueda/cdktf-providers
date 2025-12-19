// https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/aws_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataClumioAwsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the AWS account linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/aws_connection#account_native_id DataClumioAwsConnection#account_native_id}
  */
  readonly accountNativeId: string;
  /**
  * Region of the AWS account linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/aws_connection#aws_region DataClumioAwsConnection#aws_region}
  */
  readonly awsRegion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/aws_connection clumio_aws_connection}
*/
export class DataClumioAwsConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_aws_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataClumioAwsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClumioAwsConnection to import
  * @param importFromId The id of the existing DataClumioAwsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/aws_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClumioAwsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_aws_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/aws_connection clumio_aws_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClumioAwsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataClumioAwsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_aws_connection',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_native_id: cdktf.stringToTerraform(this._accountNativeId),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
