// https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsCloudConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * the AWS account id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration#account_id AwsCloudConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * the CloudTrail bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration#bucket_name AwsCloudConfiguration#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration#id AwsCloudConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name for the cloud configuration for insights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration#name AwsCloudConfiguration#name}
  */
  readonly name: string;
  /**
  * an optional bucket prefix (folder)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration#prefix AwsCloudConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * a list of AWS regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration#regions AwsCloudConfiguration#regions}
  */
  readonly regions: string[];
  /**
  * If 'true' than the prefix will be under 'AWSLogs' folder (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration#should_prefix_under_logs_folder AwsCloudConfiguration#should_prefix_under_logs_folder}
  */
  readonly shouldPrefixUnderLogsFolder?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration env0_aws_cloud_configuration}
*/
export class AwsCloudConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_aws_cloud_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsCloudConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCloudConfiguration to import
  * @param importFromId The id of the existing AwsCloudConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCloudConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_aws_cloud_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/aws_cloud_configuration env0_aws_cloud_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCloudConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCloudConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_aws_cloud_configuration',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.4'
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
    this._bucketName = config.bucketName;
    this._id = config.id;
    this._name = config.name;
    this._prefix = config.prefix;
    this._regions = config.regions;
    this._shouldPrefixUnderLogsFolder = config.shouldPrefixUnderLogsFolder;
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

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getBooleanAttribute('health');
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // should_prefix_under_logs_folder - computed: false, optional: true, required: false
  private _shouldPrefixUnderLogsFolder?: boolean | cdktf.IResolvable; 
  public get shouldPrefixUnderLogsFolder() {
    return this.getBooleanAttribute('should_prefix_under_logs_folder');
  }
  public set shouldPrefixUnderLogsFolder(value: boolean | cdktf.IResolvable) {
    this._shouldPrefixUnderLogsFolder = value;
  }
  public resetShouldPrefixUnderLogsFolder() {
    this._shouldPrefixUnderLogsFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPrefixUnderLogsFolderInput() {
    return this._shouldPrefixUnderLogsFolder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      prefix: cdktf.stringToTerraform(this._prefix),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      should_prefix_under_logs_folder: cdktf.booleanToTerraform(this._shouldPrefixUnderLogsFolder),
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
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
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
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      should_prefix_under_logs_folder: {
        value: cdktf.booleanToHclTerraform(this._shouldPrefixUnderLogsFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
