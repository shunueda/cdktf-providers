// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/aws_flow_logs_s3_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsFlowLogsS3BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/aws_flow_logs_s3_bucket#account_id AwsFlowLogsS3Bucket#account_id}
  */
  readonly accountId: string;
  /**
  * ARN of the AWS S3 bucket containing flow logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/aws_flow_logs_s3_bucket#s3_bucket_arn AwsFlowLogsS3Bucket#s3_bucket_arn}
  */
  readonly s3BucketArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/aws_flow_logs_s3_bucket illumio-cloudsecure_aws_flow_logs_s3_bucket}
*/
export class AwsFlowLogsS3Bucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_aws_flow_logs_s3_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsFlowLogsS3Bucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsFlowLogsS3Bucket to import
  * @param importFromId The id of the existing AwsFlowLogsS3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/aws_flow_logs_s3_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsFlowLogsS3Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_aws_flow_logs_s3_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/aws_flow_logs_s3_bucket illumio-cloudsecure_aws_flow_logs_s3_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsFlowLogsS3BucketConfig
  */
  public constructor(scope: Construct, id: string, config: AwsFlowLogsS3BucketConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_aws_flow_logs_s3_bucket',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.5.3'
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
    this._s3BucketArn = config.s3BucketArn;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // s3_bucket_arn - computed: false, optional: false, required: true
  private _s3BucketArn?: string; 
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }
  public set s3BucketArn(value: string) {
    this._s3BucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketArnInput() {
    return this._s3BucketArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      s3_bucket_arn: cdktf.stringToTerraform(this._s3BucketArn),
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
      s3_bucket_arn: {
        value: cdktf.stringToHclTerraform(this._s3BucketArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
