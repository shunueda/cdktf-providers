// https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/default_vpc_deletion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultVpcDeletionConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/default_vpc_deletion awsutils_default_vpc_deletion}
*/
export class DefaultVpcDeletion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsutils_default_vpc_deletion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultVpcDeletion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultVpcDeletion to import
  * @param importFromId The id of the existing DefaultVpcDeletion that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/default_vpc_deletion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultVpcDeletion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsutils_default_vpc_deletion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/default_vpc_deletion awsutils_default_vpc_deletion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultVpcDeletionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultVpcDeletionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awsutils_default_vpc_deletion',
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
