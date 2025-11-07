// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/quickcreate_aws_workspaces_cloudformation_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixQuickcreateAwsWorkspacesCloudformationTemplateConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/quickcreate_aws_workspaces_cloudformation_template citrix_quickcreate_aws_workspaces_cloudformation_template}
*/
export class DataCitrixQuickcreateAwsWorkspacesCloudformationTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_quickcreate_aws_workspaces_cloudformation_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixQuickcreateAwsWorkspacesCloudformationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixQuickcreateAwsWorkspacesCloudformationTemplate to import
  * @param importFromId The id of the existing DataCitrixQuickcreateAwsWorkspacesCloudformationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/quickcreate_aws_workspaces_cloudformation_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixQuickcreateAwsWorkspacesCloudformationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_quickcreate_aws_workspaces_cloudformation_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/quickcreate_aws_workspaces_cloudformation_template citrix_quickcreate_aws_workspaces_cloudformation_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixQuickcreateAwsWorkspacesCloudformationTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCitrixQuickcreateAwsWorkspacesCloudformationTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_quickcreate_aws_workspaces_cloudformation_template',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
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

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
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
