// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccountAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) associated with the AWS resource. This is used for identifying resources in AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#arn CloudaccountAws#arn}
  */
  readonly arn?: string;
  /**
  * The AWS access key used to authenticate. **Deprecated:** Use `aws_secured_access_key` instead for enhanced security. **Note:** This field is mutually exclusive with `aws_secured_access_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#aws_access_key CloudaccountAws#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * The AWS secret key used in conjunction with the access key for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#aws_secret_key CloudaccountAws#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * The AWS access key used to authenticate. This is a secure alternative to `aws_access_key` with sensitive attribute enabled. **Note:** This field is mutually exclusive with `aws_access_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#aws_secured_access_key CloudaccountAws#aws_secured_access_key}
  */
  readonly awsSecuredAccessKey?: string;
  /**
  * The context of the AWS configuration. Allowed values are `project` or `tenant`. Default value is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#context CloudaccountAws#context}
  */
  readonly context?: string;
  /**
  * An optional external ID that can be used for cross-account access in AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#external_id CloudaccountAws#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#id CloudaccountAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#name CloudaccountAws#name}
  */
  readonly name: string;
  /**
  * The AWS partition in which the cloud account is located. 
  * Can be 'aws' for standard AWS regions or 'aws-us-gov' for AWS GovCloud (US) regions.
  * Default is 'aws'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#partition CloudaccountAws#partition}
  */
  readonly partition?: string;
  /**
  * A set of ARNs for the IAM policies that should be associated with the cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#policy_arns CloudaccountAws#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * ID of the private cloud gateway. This is the ID of the private cloud gateway that is used to connect to the private cluster endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#private_cloud_gateway_id CloudaccountAws#private_cloud_gateway_id}
  */
  readonly privateCloudGatewayId?: string;
  /**
  * The type of AWS credentials to use. Can be `secret` or `sts`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#type CloudaccountAws#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws spectrocloud_cloudaccount_aws}
*/
export class CloudaccountAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cloudaccount_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccountAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccountAws to import
  * @param importFromId The id of the existing CloudaccountAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccountAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cloudaccount_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_aws spectrocloud_cloudaccount_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccountAwsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccountAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cloudaccount_aws',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.25.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arn = config.arn;
    this._awsAccessKey = config.awsAccessKey;
    this._awsSecretKey = config.awsSecretKey;
    this._awsSecuredAccessKey = config.awsSecuredAccessKey;
    this._context = config.context;
    this._externalId = config.externalId;
    this._id = config.id;
    this._name = config.name;
    this._partition = config.partition;
    this._policyArns = config.policyArns;
    this._privateCloudGatewayId = config.privateCloudGatewayId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_secret_key - computed: false, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // aws_secured_access_key - computed: false, optional: true, required: false
  private _awsSecuredAccessKey?: string; 
  public get awsSecuredAccessKey() {
    return this.getStringAttribute('aws_secured_access_key');
  }
  public set awsSecuredAccessKey(value: string) {
    this._awsSecuredAccessKey = value;
  }
  public resetAwsSecuredAccessKey() {
    this._awsSecuredAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecuredAccessKeyInput() {
    return this._awsSecuredAccessKey;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // policy_arns - computed: false, optional: true, required: false
  private _policyArns?: string[]; 
  public get policyArns() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_arns'));
  }
  public set policyArns(value: string[]) {
    this._policyArns = value;
  }
  public resetPolicyArns() {
    this._policyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnsInput() {
    return this._policyArns;
  }

  // private_cloud_gateway_id - computed: false, optional: true, required: false
  private _privateCloudGatewayId?: string; 
  public get privateCloudGatewayId() {
    return this.getStringAttribute('private_cloud_gateway_id');
  }
  public set privateCloudGatewayId(value: string) {
    this._privateCloudGatewayId = value;
  }
  public resetPrivateCloudGatewayId() {
    this._privateCloudGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudGatewayIdInput() {
    return this._privateCloudGatewayId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      aws_secured_access_key: cdktf.stringToTerraform(this._awsSecuredAccessKey),
      context: cdktf.stringToTerraform(this._context),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyArns),
      private_cloud_gateway_id: cdktf.stringToTerraform(this._privateCloudGatewayId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secured_access_key: {
        value: cdktf.stringToHclTerraform(this._awsSecuredAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      private_cloud_gateway_id: {
        value: cdktf.stringToHclTerraform(this._privateCloudGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
