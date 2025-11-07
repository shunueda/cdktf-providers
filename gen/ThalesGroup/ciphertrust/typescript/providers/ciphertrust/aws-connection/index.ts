// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) AWS Key ID of the AWS user. Default is the AWS_ACCESS_KEY_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection#access_key_id AwsConnection#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * (Updateable) AWS IAM role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection#assume_role_arn AwsConnection#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * (Updateable) AWS role external ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection#assume_role_external_id AwsConnection#assume_role_external_id}
  */
  readonly assumeRoleExternalId?: string;
  /**
  * (Updateable) Name of the cloud. Options: aws, aws-us-gov and aws-cn. Default is aws.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection#cloud_name AwsConnection#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * (Updateable) Description of the AWS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection#description AwsConnection#description}
  */
  readonly description?: string;
  /**
  * (Updateable) A list of key:value pairs to store with the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection#meta AwsConnection#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Unique connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection#name AwsConnection#name}
  */
  readonly name: string;
  /**
  * (Updateable) Secret associated with the access key of the AWS user. Default is the AWS_SECRET_ACCESS_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection#secret_access_key AwsConnection#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection ciphertrust_aws_connection}
*/
export class AwsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_aws_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsConnection to import
  * @param importFromId The id of the existing AwsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_aws_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_connection ciphertrust_aws_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_aws_connection',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyId = config.accessKeyId;
    this._assumeRoleArn = config.assumeRoleArn;
    this._assumeRoleExternalId = config.assumeRoleExternalId;
    this._cloudName = config.cloudName;
    this._description = config.description;
    this._meta = config.meta;
    this._name = config.name;
    this._secretAccessKey = config.secretAccessKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // assume_role_arn - computed: false, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
  }

  // assume_role_external_id - computed: false, optional: true, required: false
  private _assumeRoleExternalId?: string; 
  public get assumeRoleExternalId() {
    return this.getStringAttribute('assume_role_external_id');
  }
  public set assumeRoleExternalId(value: string) {
    this._assumeRoleExternalId = value;
  }
  public resetAssumeRoleExternalId() {
    this._assumeRoleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleExternalIdInput() {
    return this._assumeRoleExternalId;
  }

  // cloud_name - computed: false, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
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

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      assume_role_arn: cdktf.stringToTerraform(this._assumeRoleArn),
      assume_role_external_id: cdktf.stringToTerraform(this._assumeRoleExternalId),
      cloud_name: cdktf.stringToTerraform(this._cloudName),
      description: cdktf.stringToTerraform(this._description),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role_arn: {
        value: cdktf.stringToHclTerraform(this._assumeRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role_external_id: {
        value: cdktf.stringToHclTerraform(this._assumeRoleExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_name: {
        value: cdktf.stringToHclTerraform(this._cloudName),
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
      meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._meta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_access_key: {
        value: cdktf.stringToHclTerraform(this._secretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
