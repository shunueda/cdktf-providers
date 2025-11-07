// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_storage_uuid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrismacloudAwsStorageUuidConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_storage_uuid#account_id DataPrismacloudAwsStorageUuid#account_id}
  */
  readonly accountId: string;
  /**
  * External id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_storage_uuid#external_id DataPrismacloudAwsStorageUuid#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_storage_uuid#id DataPrismacloudAwsStorageUuid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * AWS Role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_storage_uuid#role_arn DataPrismacloudAwsStorageUuid#role_arn}
  */
  readonly roleArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_storage_uuid prismacloud_aws_storage_uuid}
*/
export class DataPrismacloudAwsStorageUuid extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_aws_storage_uuid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrismacloudAwsStorageUuid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrismacloudAwsStorageUuid to import
  * @param importFromId The id of the existing DataPrismacloudAwsStorageUuid that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_storage_uuid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrismacloudAwsStorageUuid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_aws_storage_uuid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/aws_storage_uuid prismacloud_aws_storage_uuid} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrismacloudAwsStorageUuidConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrismacloudAwsStorageUuidConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_aws_storage_uuid',
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
    this._externalId = config.externalId;
    this._id = config.id;
    this._roleArn = config.roleArn;
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

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
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

  // storage_uuid - computed: true, optional: false, required: false
  public get storageUuid() {
    return this.getStringAttribute('storage_uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      role_arn: cdktf.stringToTerraform(this._roleArn),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
