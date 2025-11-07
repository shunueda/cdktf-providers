// https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/data-sources/caller_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsutilsCallerIdentityConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/data-sources/caller_identity awsutils_caller_identity}
*/
export class DataAwsutilsCallerIdentity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsutils_caller_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsutilsCallerIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsutilsCallerIdentity to import
  * @param importFromId The id of the existing DataAwsutilsCallerIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/data-sources/caller_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsutilsCallerIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsutils_caller_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/data-sources/caller_identity awsutils_caller_identity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsutilsCallerIdentityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsutilsCallerIdentityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awsutils_caller_identity',
      terraformGeneratorMetadata: {
        providerName: 'awsutils',
        providerVersion: '0.20.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // eks_role_arn - computed: true, optional: false, required: false
  public get eksRoleArn() {
    return this.getStringAttribute('eks_role_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
