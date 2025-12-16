// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/aws_provider_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageAwsProviderInfoConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/aws_provider_info vantage_aws_provider_info}
*/
export class DataVantageAwsProviderInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_aws_provider_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageAwsProviderInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageAwsProviderInfo to import
  * @param importFromId The id of the existing DataVantageAwsProviderInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/aws_provider_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageAwsProviderInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_aws_provider_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/aws_provider_info vantage_aws_provider_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageAwsProviderInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageAwsProviderInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_aws_provider_info',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.70',
        providerVersionConstraint: '0.1.70'
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

  // additional_resources_policy - computed: true, optional: false, required: false
  public get additionalResourcesPolicy() {
    return this.getStringAttribute('additional_resources_policy');
  }

  // autopilot_policy - computed: true, optional: false, required: false
  public get autopilotPolicy() {
    return this.getStringAttribute('autopilot_policy');
  }

  // cloudwatch_metrics_policy - computed: true, optional: false, required: false
  public get cloudwatchMetricsPolicy() {
    return this.getStringAttribute('cloudwatch_metrics_policy');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // root_policy - computed: true, optional: false, required: false
  public get rootPolicy() {
    return this.getStringAttribute('root_policy');
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
