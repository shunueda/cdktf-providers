// https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogExporterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration for AWS CloudWatch exporter. Configure authentication using either `role_arn` or `access_key` with `secret_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#cloudwatch LogExporter#cloudwatch}
  */
  readonly cloudwatch?: LogExporterCloudwatch;
  /**
  * Log exporter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#name LogExporter#name}
  */
  readonly name: string;
  /**
  * Region where the exporter will be deployed. Only services running in the same region can be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#region LogExporter#region}
  */
  readonly region: string;
}
export interface LogExporterCloudwatch {
  /**
  * AWS access key ID. If provided, `secret_key` must also be set, and `role_arn` must not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#access_key LogExporter#access_key}
  */
  readonly accessKey?: string;
  /**
  * Name of the CloudWatch Log Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#log_group_name LogExporter#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Name of the CloudWatch Log Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#log_stream_name LogExporter#log_stream_name}
  */
  readonly logStreamName: string;
  /**
  * AWS region for CloudWatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#region LogExporter#region}
  */
  readonly region: string;
  /**
  * ARN of the IAM role to assume for CloudWatch access. If provided, `access_key` and `secret_key` must not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#role_arn LogExporter#role_arn}
  */
  readonly roleArn?: string;
  /**
  * AWS secret access key. If provided, `access_key` must also be set, and `role_arn` must not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#secret_key LogExporter#secret_key}
  */
  readonly secretKey?: string;
}

export function logExporterCloudwatchToTerraform(struct?: LogExporterCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function logExporterCloudwatchToHclTerraform(struct?: LogExporterCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogExporterCloudwatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogExporterCloudwatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogExporterCloudwatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._secretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: false, required: true
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter timescale_log_exporter}
*/
export class LogExporter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timescale_log_exporter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogExporter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogExporter to import
  * @param importFromId The id of the existing LogExporter that should be imported. Refer to the {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogExporter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timescale_log_exporter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/log_exporter timescale_log_exporter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogExporterConfig
  */
  public constructor(scope: Construct, id: string, config: LogExporterConfig) {
    super(scope, id, {
      terraformResourceType: 'timescale_log_exporter',
      terraformGeneratorMetadata: {
        providerName: 'timescale',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudwatch.internalValue = config.cloudwatch;
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new LogExporterCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: LogExporterCloudwatch) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch: logExporterCloudwatchToTerraform(this._cloudwatch.internalValue),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudwatch: {
        value: logExporterCloudwatchToHclTerraform(this._cloudwatch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogExporterCloudwatch",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
