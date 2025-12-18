// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/account_audit_log_sink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTemporalcloudAccountAuditLogSinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique name of the audit log sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/account_audit_log_sink#sink_name DataTemporalcloudAccountAuditLogSink#sink_name}
  */
  readonly sinkName: string;
}
export interface DataTemporalcloudAccountAuditLogSinkKinesis {
}

export function dataTemporalcloudAccountAuditLogSinkKinesisToTerraform(struct?: DataTemporalcloudAccountAuditLogSinkKinesis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudAccountAuditLogSinkKinesisToHclTerraform(struct?: DataTemporalcloudAccountAuditLogSinkKinesis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudAccountAuditLogSinkKinesisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudAccountAuditLogSinkKinesis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudAccountAuditLogSinkKinesis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_uri - computed: true, optional: false, required: false
  public get destinationUri() {
    return this.getStringAttribute('destination_uri');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}
export interface DataTemporalcloudAccountAuditLogSinkPubsub {
}

export function dataTemporalcloudAccountAuditLogSinkPubsubToTerraform(struct?: DataTemporalcloudAccountAuditLogSinkPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudAccountAuditLogSinkPubsubToHclTerraform(struct?: DataTemporalcloudAccountAuditLogSinkPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudAccountAuditLogSinkPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudAccountAuditLogSinkPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudAccountAuditLogSinkPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_project_id - computed: true, optional: false, required: false
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // topic_name - computed: true, optional: false, required: false
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/account_audit_log_sink temporalcloud_account_audit_log_sink}
*/
export class DataTemporalcloudAccountAuditLogSink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_account_audit_log_sink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTemporalcloudAccountAuditLogSink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTemporalcloudAccountAuditLogSink to import
  * @param importFromId The id of the existing DataTemporalcloudAccountAuditLogSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/account_audit_log_sink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTemporalcloudAccountAuditLogSink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_account_audit_log_sink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/data-sources/account_audit_log_sink temporalcloud_account_audit_log_sink} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTemporalcloudAccountAuditLogSinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataTemporalcloudAccountAuditLogSinkConfig) {
    super(scope, id, {
      terraformResourceType: 'temporalcloud_account_audit_log_sink',
      terraformGeneratorMetadata: {
        providerName: 'temporalcloud',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sinkName = config.sinkName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // kinesis - computed: true, optional: false, required: false
  private _kinesis = new DataTemporalcloudAccountAuditLogSinkKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }

  // pubsub - computed: true, optional: false, required: false
  private _pubsub = new DataTemporalcloudAccountAuditLogSinkPubsubOutputReference(this, "pubsub");
  public get pubsub() {
    return this._pubsub;
  }

  // sink_name - computed: false, optional: false, required: true
  private _sinkName?: string; 
  public get sinkName() {
    return this.getStringAttribute('sink_name');
  }
  public set sinkName(value: string) {
    this._sinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkNameInput() {
    return this._sinkName;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sink_name: cdktf.stringToTerraform(this._sinkName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sink_name: {
        value: cdktf.stringToHclTerraform(this._sinkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
