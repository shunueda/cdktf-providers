// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountAuditLogSinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * A flag indicating whether the audit log sink is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#enabled AccountAuditLogSink#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Kinesis configuration details when destination_type is Kinesis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#kinesis AccountAuditLogSink#kinesis}
  */
  readonly kinesis?: AccountAuditLogSinkKinesis;
  /**
  * The PubSub configuration details when destination_type is PubSub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#pubsub AccountAuditLogSink#pubsub}
  */
  readonly pubsub?: AccountAuditLogSinkPubsub;
  /**
  * The unique name of the audit log sink, it can't be changed once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#sink_name AccountAuditLogSink#sink_name}
  */
  readonly sinkName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#timeouts AccountAuditLogSink#timeouts}
  */
  readonly timeouts?: AccountAuditLogSinkTimeouts;
}
export interface AccountAuditLogSinkKinesis {
  /**
  * The destination URI of the Kinesis stream where Temporal will send data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#destination_uri AccountAuditLogSink#destination_uri}
  */
  readonly destinationUri: string;
  /**
  * The region of the Kinesis stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#region AccountAuditLogSink#region}
  */
  readonly region: string;
  /**
  * The IAM role that Temporal Cloud assumes for writing records to the customer's Kinesis stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#role_name AccountAuditLogSink#role_name}
  */
  readonly roleName: string;
}

export function accountAuditLogSinkKinesisToTerraform(struct?: AccountAuditLogSinkKinesis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_uri: cdktf.stringToTerraform(struct!.destinationUri),
    region: cdktf.stringToTerraform(struct!.region),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function accountAuditLogSinkKinesisToHclTerraform(struct?: AccountAuditLogSinkKinesis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_uri: {
      value: cdktf.stringToHclTerraform(struct!.destinationUri),
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
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountAuditLogSinkKinesisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountAuditLogSinkKinesis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationUri = this._destinationUri;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountAuditLogSinkKinesis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationUri = undefined;
      this._region = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationUri = value.destinationUri;
      this._region = value.region;
      this._roleName = value.roleName;
    }
  }

  // destination_uri - computed: false, optional: false, required: true
  private _destinationUri?: string; 
  public get destinationUri() {
    return this.getStringAttribute('destination_uri');
  }
  public set destinationUri(value: string) {
    this._destinationUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUriInput() {
    return this._destinationUri;
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface AccountAuditLogSinkPubsub {
  /**
  * The GCP project ID of the PubSub topic and service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#gcp_project_id AccountAuditLogSink#gcp_project_id}
  */
  readonly gcpProjectId?: string;
  /**
  * The service account email associated with the PubSub topic and service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#service_account_email AccountAuditLogSink#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The customer service account ID that Temporal Cloud impersonates for writing records to the customer's PubSub topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#service_account_id AccountAuditLogSink#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * The destination PubSub topic name for Temporal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#topic_name AccountAuditLogSink#topic_name}
  */
  readonly topicName: string;
}

export function accountAuditLogSinkPubsubToTerraform(struct?: AccountAuditLogSinkPubsub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_project_id: cdktf.stringToTerraform(struct!.gcpProjectId),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function accountAuditLogSinkPubsubToHclTerraform(struct?: AccountAuditLogSinkPubsub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_project_id: {
      value: cdktf.stringToHclTerraform(struct!.gcpProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountAuditLogSinkPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountAuditLogSinkPubsub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProjectId = this._gcpProjectId;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountAuditLogSinkPubsub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcpProjectId = undefined;
      this._serviceAccountEmail = undefined;
      this._serviceAccountId = undefined;
      this._topicName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcpProjectId = value.gcpProjectId;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._serviceAccountId = value.serviceAccountId;
      this._topicName = value.topicName;
    }
  }

  // gcp_project_id - computed: true, optional: true, required: false
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  public resetGcpProjectId() {
    this._gcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // service_account_email - computed: true, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}
export interface AccountAuditLogSinkTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#create AccountAuditLogSink#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#delete AccountAuditLogSink#delete}
  */
  readonly delete?: string;
}

export function accountAuditLogSinkTimeoutsToTerraform(struct?: AccountAuditLogSinkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function accountAuditLogSinkTimeoutsToHclTerraform(struct?: AccountAuditLogSinkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountAuditLogSinkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountAuditLogSinkTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountAuditLogSinkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink temporalcloud_account_audit_log_sink}
*/
export class AccountAuditLogSink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_account_audit_log_sink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountAuditLogSink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountAuditLogSink to import
  * @param importFromId The id of the existing AccountAuditLogSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountAuditLogSink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_account_audit_log_sink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/account_audit_log_sink temporalcloud_account_audit_log_sink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountAuditLogSinkConfig
  */
  public constructor(scope: Construct, id: string, config: AccountAuditLogSinkConfig) {
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
    this._enabled = config.enabled;
    this._kinesis.internalValue = config.kinesis;
    this._pubsub.internalValue = config.pubsub;
    this._sinkName = config.sinkName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis = new AccountAuditLogSinkKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: AccountAuditLogSinkKinesis) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }

  // pubsub - computed: false, optional: true, required: false
  private _pubsub = new AccountAuditLogSinkPubsubOutputReference(this, "pubsub");
  public get pubsub() {
    return this._pubsub;
  }
  public putPubsub(value: AccountAuditLogSinkPubsub) {
    this._pubsub.internalValue = value;
  }
  public resetPubsub() {
    this._pubsub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubInput() {
    return this._pubsub.internalValue;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccountAuditLogSinkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccountAuditLogSinkTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      kinesis: accountAuditLogSinkKinesisToTerraform(this._kinesis.internalValue),
      pubsub: accountAuditLogSinkPubsubToTerraform(this._pubsub.internalValue),
      sink_name: cdktf.stringToTerraform(this._sinkName),
      timeouts: accountAuditLogSinkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kinesis: {
        value: accountAuditLogSinkKinesisToHclTerraform(this._kinesis.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountAuditLogSinkKinesis",
      },
      pubsub: {
        value: accountAuditLogSinkPubsubToHclTerraform(this._pubsub.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountAuditLogSinkPubsub",
      },
      sink_name: {
        value: cdktf.stringToHclTerraform(this._sinkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: accountAuditLogSinkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountAuditLogSinkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
