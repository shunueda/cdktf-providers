// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/serverless_eventrouter_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexServerlessEventrouterConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/serverless_eventrouter_connector#connector_id DataYandexServerlessEventrouterConnector#connector_id}
  */
  readonly connectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/serverless_eventrouter_connector#id DataYandexServerlessEventrouterConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/serverless_eventrouter_connector#name DataYandexServerlessEventrouterConnector#name}
  */
  readonly name?: string;
}
export interface DataYandexServerlessEventrouterConnectorTimer {
}

export function dataYandexServerlessEventrouterConnectorTimerToTerraform(struct?: DataYandexServerlessEventrouterConnectorTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterConnectorTimerToHclTerraform(struct?: DataYandexServerlessEventrouterConnectorTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterConnectorTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexServerlessEventrouterConnectorTimer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterConnectorTimer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataYandexServerlessEventrouterConnectorTimerList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterConnectorTimerOutputReference {
    return new DataYandexServerlessEventrouterConnectorTimerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexServerlessEventrouterConnectorYds {
}

export function dataYandexServerlessEventrouterConnectorYdsToTerraform(struct?: DataYandexServerlessEventrouterConnectorYds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterConnectorYdsToHclTerraform(struct?: DataYandexServerlessEventrouterConnectorYds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterConnectorYdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexServerlessEventrouterConnectorYds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterConnectorYds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer - computed: true, optional: false, required: false
  public get consumer() {
    return this.getStringAttribute('consumer');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export class DataYandexServerlessEventrouterConnectorYdsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterConnectorYdsOutputReference {
    return new DataYandexServerlessEventrouterConnectorYdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexServerlessEventrouterConnectorYmq {
}

export function dataYandexServerlessEventrouterConnectorYmqToTerraform(struct?: DataYandexServerlessEventrouterConnectorYmq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterConnectorYmqToHclTerraform(struct?: DataYandexServerlessEventrouterConnectorYmq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterConnectorYmqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexServerlessEventrouterConnectorYmq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterConnectorYmq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // polling_timeout - computed: true, optional: false, required: false
  public get pollingTimeout() {
    return this.getStringAttribute('polling_timeout');
  }

  // queue_arn - computed: true, optional: false, required: false
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // visibility_timeout - computed: true, optional: false, required: false
  public get visibilityTimeout() {
    return this.getStringAttribute('visibility_timeout');
  }
}

export class DataYandexServerlessEventrouterConnectorYmqList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterConnectorYmqOutputReference {
    return new DataYandexServerlessEventrouterConnectorYmqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/serverless_eventrouter_connector yandex_serverless_eventrouter_connector}
*/
export class DataYandexServerlessEventrouterConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_serverless_eventrouter_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexServerlessEventrouterConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexServerlessEventrouterConnector to import
  * @param importFromId The id of the existing DataYandexServerlessEventrouterConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/serverless_eventrouter_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexServerlessEventrouterConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_serverless_eventrouter_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/serverless_eventrouter_connector yandex_serverless_eventrouter_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexServerlessEventrouterConnectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexServerlessEventrouterConnectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_serverless_eventrouter_connector',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorId = config.connectorId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bus_id - computed: true, optional: false, required: false
  public get busId() {
    return this.getStringAttribute('bus_id');
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // connector_id - computed: false, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // timer - computed: true, optional: false, required: false
  private _timer = new DataYandexServerlessEventrouterConnectorTimerList(this, "timer", false);
  public get timer() {
    return this._timer;
  }

  // yds - computed: true, optional: false, required: false
  private _yds = new DataYandexServerlessEventrouterConnectorYdsList(this, "yds", false);
  public get yds() {
    return this._yds;
  }

  // ymq - computed: true, optional: false, required: false
  private _ymq = new DataYandexServerlessEventrouterConnectorYmqList(this, "ymq", false);
  public get ymq() {
    return this._ymq;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_id: cdktf.stringToTerraform(this._connectorId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
