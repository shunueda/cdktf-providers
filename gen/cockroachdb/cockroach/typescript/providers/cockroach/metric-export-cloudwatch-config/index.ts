// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_cloudwatch_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricExportCloudwatchConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The external ID to use when assuming the IAM role for CloudWatch metric export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_cloudwatch_config#external_id MetricExportCloudwatchConfig#external_id}
  */
  readonly externalId?: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_cloudwatch_config#id MetricExportCloudwatchConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The customized AWS CloudWatch log group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_cloudwatch_config#log_group_name MetricExportCloudwatchConfig#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The IAM role used to upload metric segments to the target AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_cloudwatch_config#role_arn MetricExportCloudwatchConfig#role_arn}
  */
  readonly roleArn: string;
  /**
  * The specific AWS region that the metrics will be exported to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_cloudwatch_config#target_region MetricExportCloudwatchConfig#target_region}
  */
  readonly targetRegion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_cloudwatch_config cockroach_metric_export_cloudwatch_config}
*/
export class MetricExportCloudwatchConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_metric_export_cloudwatch_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricExportCloudwatchConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricExportCloudwatchConfig to import
  * @param importFromId The id of the existing MetricExportCloudwatchConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_cloudwatch_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricExportCloudwatchConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_metric_export_cloudwatch_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_cloudwatch_config cockroach_metric_export_cloudwatch_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricExportCloudwatchConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MetricExportCloudwatchConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_metric_export_cloudwatch_config',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalId = config.externalId;
    this._id = config.id;
    this._logGroupName = config.logGroupName;
    this._roleArn = config.roleArn;
    this._targetRegion = config.targetRegion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_region - computed: false, optional: true, required: false
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  public resetTargetRegion() {
    this._targetRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }

  // user_message - computed: true, optional: false, required: false
  public get userMessage() {
    return this.getStringAttribute('user_message');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      target_region: cdktf.stringToTerraform(this._targetRegion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      log_group_name: {
        value: cdktf.stringToHclTerraform(this._logGroupName),
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
      target_region: {
        value: cdktf.stringToHclTerraform(this._targetRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
