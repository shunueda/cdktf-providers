// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessEventrouterConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the bus that the connector belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#bus_id ServerlessEventrouterConnector#bus_id}
  */
  readonly busId: string;
  /**
  * Deletion protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#deletion_protection ServerlessEventrouterConnector#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#description ServerlessEventrouterConnector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#id ServerlessEventrouterConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Connector labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#labels ServerlessEventrouterConnector#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#name ServerlessEventrouterConnector#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#timeouts ServerlessEventrouterConnector#timeouts}
  */
  readonly timeouts?: ServerlessEventrouterConnectorTimeouts;
  /**
  * timer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#timer ServerlessEventrouterConnector#timer}
  */
  readonly timer?: ServerlessEventrouterConnectorTimer[] | cdktf.IResolvable;
  /**
  * yds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#yds ServerlessEventrouterConnector#yds}
  */
  readonly yds?: ServerlessEventrouterConnectorYds[] | cdktf.IResolvable;
  /**
  * ymq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#ymq ServerlessEventrouterConnector#ymq}
  */
  readonly ymq?: ServerlessEventrouterConnectorYmq[] | cdktf.IResolvable;
}
export interface ServerlessEventrouterConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#create ServerlessEventrouterConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#delete ServerlessEventrouterConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#read ServerlessEventrouterConnector#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#update ServerlessEventrouterConnector#update}
  */
  readonly update?: string;
}

export function serverlessEventrouterConnectorTimeoutsToTerraform(struct?: ServerlessEventrouterConnectorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serverlessEventrouterConnectorTimeoutsToHclTerraform(struct?: ServerlessEventrouterConnectorTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerlessEventrouterConnectorTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterConnectorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._read = value.read;
      this._update = value.update;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ServerlessEventrouterConnectorTimer {
  /**
  * Cron expression. Cron expression with seconds. Example: 0 45 16 ? * *
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#cron_expression ServerlessEventrouterConnector#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Payload to be passed to bus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#payload ServerlessEventrouterConnector#payload}
  */
  readonly payload?: string;
  /**
  * Timezone in tz database format. Example: Europe/Moscow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#timezone ServerlessEventrouterConnector#timezone}
  */
  readonly timezone?: string;
}

export function serverlessEventrouterConnectorTimerToTerraform(struct?: ServerlessEventrouterConnectorTimer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    payload: cdktf.stringToTerraform(struct!.payload),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function serverlessEventrouterConnectorTimerToHclTerraform(struct?: ServerlessEventrouterConnectorTimer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterConnectorTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServerlessEventrouterConnectorTimer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterConnectorTimer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._payload = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._payload = value.payload;
      this._timezone = value.timezone;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class ServerlessEventrouterConnectorTimerList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterConnectorTimer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServerlessEventrouterConnectorTimerOutputReference {
    return new ServerlessEventrouterConnectorTimerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessEventrouterConnectorYds {
  /**
  * Consumer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#consumer ServerlessEventrouterConnector#consumer}
  */
  readonly consumer: string;
  /**
  * Stream database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#database ServerlessEventrouterConnector#database}
  */
  readonly database: string;
  /**
  * Service account which has read permission on the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#service_account_id ServerlessEventrouterConnector#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Stream name, absolute or relative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#stream_name ServerlessEventrouterConnector#stream_name}
  */
  readonly streamName: string;
}

export function serverlessEventrouterConnectorYdsToTerraform(struct?: ServerlessEventrouterConnectorYds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer: cdktf.stringToTerraform(struct!.consumer),
    database: cdktf.stringToTerraform(struct!.database),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function serverlessEventrouterConnectorYdsToHclTerraform(struct?: ServerlessEventrouterConnectorYds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer: {
      value: cdktf.stringToHclTerraform(struct!.consumer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterConnectorYdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServerlessEventrouterConnectorYds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumer !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumer = this._consumer;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterConnectorYds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumer = undefined;
      this._database = undefined;
      this._serviceAccountId = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumer = value.consumer;
      this._database = value.database;
      this._serviceAccountId = value.serviceAccountId;
      this._streamName = value.streamName;
    }
  }

  // consumer - computed: false, optional: false, required: true
  private _consumer?: string; 
  public get consumer() {
    return this.getStringAttribute('consumer');
  }
  public set consumer(value: string) {
    this._consumer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class ServerlessEventrouterConnectorYdsList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterConnectorYds[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServerlessEventrouterConnectorYdsOutputReference {
    return new ServerlessEventrouterConnectorYdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessEventrouterConnectorYmq {
  /**
  * Batch size for polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#batch_size ServerlessEventrouterConnector#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Queue polling timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#polling_timeout ServerlessEventrouterConnector#polling_timeout}
  */
  readonly pollingTimeout?: string;
  /**
  * Queue ARN. Example: yrn:yc:ymq:ru-central1:aoe***:test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#queue_arn ServerlessEventrouterConnector#queue_arn}
  */
  readonly queueArn: string;
  /**
  * Service account which has read access to the queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#service_account_id ServerlessEventrouterConnector#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Queue visibility timeout override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#visibility_timeout ServerlessEventrouterConnector#visibility_timeout}
  */
  readonly visibilityTimeout?: string;
}

export function serverlessEventrouterConnectorYmqToTerraform(struct?: ServerlessEventrouterConnectorYmq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    polling_timeout: cdktf.stringToTerraform(struct!.pollingTimeout),
    queue_arn: cdktf.stringToTerraform(struct!.queueArn),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    visibility_timeout: cdktf.stringToTerraform(struct!.visibilityTimeout),
  }
}


export function serverlessEventrouterConnectorYmqToHclTerraform(struct?: ServerlessEventrouterConnectorYmq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_timeout: {
      value: cdktf.stringToHclTerraform(struct!.pollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_arn: {
      value: cdktf.stringToHclTerraform(struct!.queueArn),
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
    visibility_timeout: {
      value: cdktf.stringToHclTerraform(struct!.visibilityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterConnectorYmqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServerlessEventrouterConnectorYmq | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._pollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingTimeout = this._pollingTimeout;
    }
    if (this._queueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueArn = this._queueArn;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._visibilityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityTimeout = this._visibilityTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterConnectorYmq | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._pollingTimeout = undefined;
      this._queueArn = undefined;
      this._serviceAccountId = undefined;
      this._visibilityTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._pollingTimeout = value.pollingTimeout;
      this._queueArn = value.queueArn;
      this._serviceAccountId = value.serviceAccountId;
      this._visibilityTimeout = value.visibilityTimeout;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // polling_timeout - computed: true, optional: true, required: false
  private _pollingTimeout?: string; 
  public get pollingTimeout() {
    return this.getStringAttribute('polling_timeout');
  }
  public set pollingTimeout(value: string) {
    this._pollingTimeout = value;
  }
  public resetPollingTimeout() {
    this._pollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingTimeoutInput() {
    return this._pollingTimeout;
  }

  // queue_arn - computed: false, optional: false, required: true
  private _queueArn?: string; 
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }
  public set queueArn(value: string) {
    this._queueArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueArnInput() {
    return this._queueArn;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // visibility_timeout - computed: true, optional: true, required: false
  private _visibilityTimeout?: string; 
  public get visibilityTimeout() {
    return this.getStringAttribute('visibility_timeout');
  }
  public set visibilityTimeout(value: string) {
    this._visibilityTimeout = value;
  }
  public resetVisibilityTimeout() {
    this._visibilityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutInput() {
    return this._visibilityTimeout;
  }
}

export class ServerlessEventrouterConnectorYmqList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterConnectorYmq[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServerlessEventrouterConnectorYmqOutputReference {
    return new ServerlessEventrouterConnectorYmqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector yandex_serverless_eventrouter_connector}
*/
export class ServerlessEventrouterConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_serverless_eventrouter_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerlessEventrouterConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerlessEventrouterConnector to import
  * @param importFromId The id of the existing ServerlessEventrouterConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerlessEventrouterConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_serverless_eventrouter_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/serverless_eventrouter_connector yandex_serverless_eventrouter_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessEventrouterConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: ServerlessEventrouterConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_serverless_eventrouter_connector',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._busId = config.busId;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
    this._timer.internalValue = config.timer;
    this._yds.internalValue = config.yds;
    this._ymq.internalValue = config.ymq;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bus_id - computed: false, optional: false, required: true
  private _busId?: string; 
  public get busId() {
    return this.getStringAttribute('bus_id');
  }
  public set busId(value: string) {
    this._busId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get busIdInput() {
    return this._busId;
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerlessEventrouterConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerlessEventrouterConnectorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // timer - computed: false, optional: true, required: false
  private _timer = new ServerlessEventrouterConnectorTimerList(this, "timer", false);
  public get timer() {
    return this._timer;
  }
  public putTimer(value: ServerlessEventrouterConnectorTimer[] | cdktf.IResolvable) {
    this._timer.internalValue = value;
  }
  public resetTimer() {
    this._timer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer.internalValue;
  }

  // yds - computed: false, optional: true, required: false
  private _yds = new ServerlessEventrouterConnectorYdsList(this, "yds", false);
  public get yds() {
    return this._yds;
  }
  public putYds(value: ServerlessEventrouterConnectorYds[] | cdktf.IResolvable) {
    this._yds.internalValue = value;
  }
  public resetYds() {
    this._yds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ydsInput() {
    return this._yds.internalValue;
  }

  // ymq - computed: false, optional: true, required: false
  private _ymq = new ServerlessEventrouterConnectorYmqList(this, "ymq", false);
  public get ymq() {
    return this._ymq;
  }
  public putYmq(value: ServerlessEventrouterConnectorYmq[] | cdktf.IResolvable) {
    this._ymq.internalValue = value;
  }
  public resetYmq() {
    this._ymq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqInput() {
    return this._ymq.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bus_id: cdktf.stringToTerraform(this._busId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      timeouts: serverlessEventrouterConnectorTimeoutsToTerraform(this._timeouts.internalValue),
      timer: cdktf.listMapper(serverlessEventrouterConnectorTimerToTerraform, true)(this._timer.internalValue),
      yds: cdktf.listMapper(serverlessEventrouterConnectorYdsToTerraform, true)(this._yds.internalValue),
      ymq: cdktf.listMapper(serverlessEventrouterConnectorYmqToTerraform, true)(this._ymq.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bus_id: {
        value: cdktf.stringToHclTerraform(this._busId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: serverlessEventrouterConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerlessEventrouterConnectorTimeouts",
      },
      timer: {
        value: cdktf.listMapperHcl(serverlessEventrouterConnectorTimerToHclTerraform, true)(this._timer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterConnectorTimerList",
      },
      yds: {
        value: cdktf.listMapperHcl(serverlessEventrouterConnectorYdsToHclTerraform, true)(this._yds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterConnectorYdsList",
      },
      ymq: {
        value: cdktf.listMapperHcl(serverlessEventrouterConnectorYmqToHclTerraform, true)(this._ymq.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterConnectorYmqList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
