// https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackAwsRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS IAM role session duration in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role#duration_seconds StackAwsRole#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Custom external ID (works only for private workers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role#external_id StackAwsRole#external_id}
  */
  readonly externalId?: string;
  /**
  * Generate AWS credentials in the private worker. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role#generate_credentials_in_worker StackAwsRole#generate_credentials_in_worker}
  */
  readonly generateCredentialsInWorker?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role#id StackAwsRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the module which assumes the AWS IAM role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role#module_id StackAwsRole#module_id}
  */
  readonly moduleId?: string;
  /**
  * AWS region to select a regional AWS STS endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role#region StackAwsRole#region}
  */
  readonly region?: string;
  /**
  * ARN of the AWS IAM role to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role#role_arn StackAwsRole#role_arn}
  */
  readonly roleArn: string;
  /**
  * ID of the stack which assumes the AWS IAM role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role#stack_id StackAwsRole#stack_id}
  */
  readonly stackId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role spacelift_stack_aws_role}
*/
export class StackAwsRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_stack_aws_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackAwsRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackAwsRole to import
  * @param importFromId The id of the existing StackAwsRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackAwsRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_stack_aws_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/stack_aws_role spacelift_stack_aws_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackAwsRoleConfig
  */
  public constructor(scope: Construct, id: string, config: StackAwsRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_stack_aws_role',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.41.0',
        providerVersionConstraint: '1.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._durationSeconds = config.durationSeconds;
    this._externalId = config.externalId;
    this._generateCredentialsInWorker = config.generateCredentialsInWorker;
    this._id = config.id;
    this._moduleId = config.moduleId;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duration_seconds - computed: true, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
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

  // generate_credentials_in_worker - computed: false, optional: true, required: false
  private _generateCredentialsInWorker?: boolean | cdktf.IResolvable; 
  public get generateCredentialsInWorker() {
    return this.getBooleanAttribute('generate_credentials_in_worker');
  }
  public set generateCredentialsInWorker(value: boolean | cdktf.IResolvable) {
    this._generateCredentialsInWorker = value;
  }
  public resetGenerateCredentialsInWorker() {
    this._generateCredentialsInWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateCredentialsInWorkerInput() {
    return this._generateCredentialsInWorker;
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

  // module_id - computed: false, optional: true, required: false
  private _moduleId?: string; 
  public get moduleId() {
    return this.getStringAttribute('module_id');
  }
  public set moduleId(value: string) {
    this._moduleId = value;
  }
  public resetModuleId() {
    this._moduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stack_id - computed: false, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration_seconds: cdktf.numberToTerraform(this._durationSeconds),
      external_id: cdktf.stringToTerraform(this._externalId),
      generate_credentials_in_worker: cdktf.booleanToTerraform(this._generateCredentialsInWorker),
      id: cdktf.stringToTerraform(this._id),
      module_id: cdktf.stringToTerraform(this._moduleId),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stack_id: cdktf.stringToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration_seconds: {
        value: cdktf.numberToHclTerraform(this._durationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_credentials_in_worker: {
        value: cdktf.booleanToHclTerraform(this._generateCredentialsInWorker),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_id: {
        value: cdktf.stringToHclTerraform(this._moduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
