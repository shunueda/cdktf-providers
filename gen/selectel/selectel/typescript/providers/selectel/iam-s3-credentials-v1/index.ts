// https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_s3_credentials_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamS3CredentialsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_s3_credentials_v1#id IamS3CredentialsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the S3 Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_s3_credentials_v1#name IamS3CredentialsV1#name}
  */
  readonly name: string;
  /**
  * Project ID to associate S3 Credentials with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_s3_credentials_v1#project_id IamS3CredentialsV1#project_id}
  */
  readonly projectId: string;
  /**
  * Service User ID to assign S3 Credentials to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_s3_credentials_v1#user_id IamS3CredentialsV1#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_s3_credentials_v1 selectel_iam_s3_credentials_v1}
*/
export class IamS3CredentialsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_iam_s3_credentials_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamS3CredentialsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamS3CredentialsV1 to import
  * @param importFromId The id of the existing IamS3CredentialsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_s3_credentials_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamS3CredentialsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_iam_s3_credentials_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/iam_s3_credentials_v1 selectel_iam_s3_credentials_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamS3CredentialsV1Config
  */
  public constructor(scope: Construct, id: string, config: IamS3CredentialsV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_iam_s3_credentials_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.2.1',
        providerVersionConstraint: '7.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
