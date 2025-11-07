// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_cft_generator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrismacloudAwsCftGeneratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_cft_generator#account_id DataPrismacloudAwsCftGenerator#account_id}
  */
  readonly accountId: string;
  /**
  * The aws account type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_cft_generator#account_type DataPrismacloudAwsCftGenerator#account_type}
  */
  readonly accountType: string;
  /**
  * The aws cloud account partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_cft_generator#aws_partition DataPrismacloudAwsCftGenerator#aws_partition}
  */
  readonly awsPartition?: string;
  /**
  * Features applicable for aws account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_cft_generator#features DataPrismacloudAwsCftGenerator#features}
  */
  readonly features?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_cft_generator#id DataPrismacloudAwsCftGenerator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_cft_generator prismacloud_aws_cft_generator}
*/
export class DataPrismacloudAwsCftGenerator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_aws_cft_generator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrismacloudAwsCftGenerator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrismacloudAwsCftGenerator to import
  * @param importFromId The id of the existing DataPrismacloudAwsCftGenerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_cft_generator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrismacloudAwsCftGenerator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_aws_cft_generator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_cft_generator prismacloud_aws_cft_generator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrismacloudAwsCftGeneratorConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrismacloudAwsCftGeneratorConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_aws_cft_generator',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
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
    this._accountType = config.accountType;
    this._awsPartition = config.awsPartition;
    this._features = config.features;
    this._id = config.id;
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

  // account_type - computed: false, optional: false, required: true
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // aws_partition - computed: false, optional: true, required: false
  private _awsPartition?: string; 
  public get awsPartition() {
    return this.getStringAttribute('aws_partition');
  }
  public set awsPartition(value: string) {
    this._awsPartition = value;
  }
  public resetAwsPartition() {
    this._awsPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPartitionInput() {
    return this._awsPartition;
  }

  // create_stack_link_with_s3_presigned_url - computed: true, optional: false, required: false
  public get createStackLinkWithS3PresignedUrl() {
    return this.getStringAttribute('create_stack_link_with_s3_presigned_url');
  }

  // event_bridge_rule_name_prefix - computed: true, optional: false, required: false
  public get eventBridgeRuleNamePrefix() {
    return this.getStringAttribute('event_bridge_rule_name_prefix');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // features - computed: false, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return cdktf.Fn.tolist(this.getListAttribute('features'));
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // s3_presigned_cft_url - computed: true, optional: false, required: false
  public get s3PresignedCftUrl() {
    return this.getStringAttribute('s3_presigned_cft_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      account_type: cdktf.stringToTerraform(this._accountType),
      aws_partition: cdktf.stringToTerraform(this._awsPartition),
      features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._features),
      id: cdktf.stringToTerraform(this._id),
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
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_partition: {
        value: cdktf.stringToHclTerraform(this._awsPartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._features),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
