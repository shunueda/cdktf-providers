// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.16/docs/data-sources/cloud_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCplnCloudAccountConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.16/docs/data-sources/cloud_account cpln_cloud_account}
*/
export class DataCplnCloudAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_cloud_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCplnCloudAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCplnCloudAccount to import
  * @param importFromId The id of the existing DataCplnCloudAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.16/docs/data-sources/cloud_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCplnCloudAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_cloud_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.16/docs/data-sources/cloud_account cpln_cloud_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCplnCloudAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCplnCloudAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cpln_cloud_account',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.16',
        providerVersionConstraint: '1.2.16'
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

  // aws_identifiers - computed: true, optional: false, required: false
  public get awsIdentifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('aws_identifiers'));
  }

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
