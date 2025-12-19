// https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/data-sources/integration_aws_iam_permissions_resource_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogIntegrationAwsIamPermissionsResourceCollectionConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/data-sources/integration_aws_iam_permissions_resource_collection datadog_integration_aws_iam_permissions_resource_collection}
*/
export class DataDatadogIntegrationAwsIamPermissionsResourceCollection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_iam_permissions_resource_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogIntegrationAwsIamPermissionsResourceCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogIntegrationAwsIamPermissionsResourceCollection to import
  * @param importFromId The id of the existing DataDatadogIntegrationAwsIamPermissionsResourceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/data-sources/integration_aws_iam_permissions_resource_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogIntegrationAwsIamPermissionsResourceCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_iam_permissions_resource_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/data-sources/integration_aws_iam_permissions_resource_collection datadog_integration_aws_iam_permissions_resource_collection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogIntegrationAwsIamPermissionsResourceCollectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogIntegrationAwsIamPermissionsResourceCollectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_iam_permissions_resource_collection',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.83.0',
        providerVersionConstraint: '3.83.0'
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

  // iam_permissions - computed: true, optional: false, required: false
  public get iamPermissions() {
    return this.getListAttribute('iam_permissions');
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
