// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbEventConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * connector name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#connection_name EbEventConnector#connection_name}
  */
  readonly connectionName: string;
  /**
  * description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#description EbEventConnector#description}
  */
  readonly description?: string;
  /**
  * switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#enable EbEventConnector#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * event bus Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#event_bus_id EbEventConnector#event_bus_id}
  */
  readonly eventBusId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#id EbEventConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#type EbEventConnector#type}
  */
  readonly type?: string;
  /**
  * connection_description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#connection_description EbEventConnector#connection_description}
  */
  readonly connectionDescription: EbEventConnectorConnectionDescription;
}
export interface EbEventConnectorConnectionDescriptionApiGwParams {
  /**
  * POST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#method EbEventConnector#method}
  */
  readonly method: string;
  /**
  * HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#protocol EbEventConnector#protocol}
  */
  readonly protocol: string;
}

export function ebEventConnectorConnectionDescriptionApiGwParamsToTerraform(struct?: EbEventConnectorConnectionDescriptionApiGwParamsOutputReference | EbEventConnectorConnectionDescriptionApiGwParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function ebEventConnectorConnectionDescriptionApiGwParamsToHclTerraform(struct?: EbEventConnectorConnectionDescriptionApiGwParamsOutputReference | EbEventConnectorConnectionDescriptionApiGwParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventConnectorConnectionDescriptionApiGwParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventConnectorConnectionDescriptionApiGwParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventConnectorConnectionDescriptionApiGwParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._protocol = value.protocol;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface EbEventConnectorConnectionDescriptionCkafkaParams {
  /**
  * kafka offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#offset EbEventConnector#offset}
  */
  readonly offset: string;
  /**
  * ckafka  topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#topic_name EbEventConnector#topic_name}
  */
  readonly topicName: string;
}

export function ebEventConnectorConnectionDescriptionCkafkaParamsToTerraform(struct?: EbEventConnectorConnectionDescriptionCkafkaParamsOutputReference | EbEventConnectorConnectionDescriptionCkafkaParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktf.stringToTerraform(struct!.offset),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function ebEventConnectorConnectionDescriptionCkafkaParamsToHclTerraform(struct?: EbEventConnectorConnectionDescriptionCkafkaParamsOutputReference | EbEventConnectorConnectionDescriptionCkafkaParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offset: {
      value: cdktf.stringToHclTerraform(struct!.offset),
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

export class EbEventConnectorConnectionDescriptionCkafkaParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventConnectorConnectionDescriptionCkafkaParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventConnectorConnectionDescriptionCkafkaParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offset = undefined;
      this._topicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offset = value.offset;
      this._topicName = value.topicName;
    }
  }

  // offset - computed: false, optional: false, required: true
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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
export interface EbEventConnectorConnectionDescription {
  /**
  * Resource qcs six-segment style, more reference [resource six-segment style](https://cloud.tencent.com/document/product/598/10606).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#resource_description EbEventConnector#resource_description}
  */
  readonly resourceDescription: string;
  /**
  * api_gw_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#api_gw_params EbEventConnector#api_gw_params}
  */
  readonly apiGwParams?: EbEventConnectorConnectionDescriptionApiGwParams;
  /**
  * ckafka_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#ckafka_params EbEventConnector#ckafka_params}
  */
  readonly ckafkaParams?: EbEventConnectorConnectionDescriptionCkafkaParams;
}

export function ebEventConnectorConnectionDescriptionToTerraform(struct?: EbEventConnectorConnectionDescriptionOutputReference | EbEventConnectorConnectionDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_description: cdktf.stringToTerraform(struct!.resourceDescription),
    api_gw_params: ebEventConnectorConnectionDescriptionApiGwParamsToTerraform(struct!.apiGwParams),
    ckafka_params: ebEventConnectorConnectionDescriptionCkafkaParamsToTerraform(struct!.ckafkaParams),
  }
}


export function ebEventConnectorConnectionDescriptionToHclTerraform(struct?: EbEventConnectorConnectionDescriptionOutputReference | EbEventConnectorConnectionDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_description: {
      value: cdktf.stringToHclTerraform(struct!.resourceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_gw_params: {
      value: ebEventConnectorConnectionDescriptionApiGwParamsToHclTerraform(struct!.apiGwParams),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventConnectorConnectionDescriptionApiGwParamsList",
    },
    ckafka_params: {
      value: ebEventConnectorConnectionDescriptionCkafkaParamsToHclTerraform(struct!.ckafkaParams),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventConnectorConnectionDescriptionCkafkaParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventConnectorConnectionDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventConnectorConnectionDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceDescription = this._resourceDescription;
    }
    if (this._apiGwParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGwParams = this._apiGwParams?.internalValue;
    }
    if (this._ckafkaParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ckafkaParams = this._ckafkaParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventConnectorConnectionDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceDescription = undefined;
      this._apiGwParams.internalValue = undefined;
      this._ckafkaParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceDescription = value.resourceDescription;
      this._apiGwParams.internalValue = value.apiGwParams;
      this._ckafkaParams.internalValue = value.ckafkaParams;
    }
  }

  // resource_description - computed: false, optional: false, required: true
  private _resourceDescription?: string; 
  public get resourceDescription() {
    return this.getStringAttribute('resource_description');
  }
  public set resourceDescription(value: string) {
    this._resourceDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDescriptionInput() {
    return this._resourceDescription;
  }

  // api_gw_params - computed: false, optional: true, required: false
  private _apiGwParams = new EbEventConnectorConnectionDescriptionApiGwParamsOutputReference(this, "api_gw_params");
  public get apiGwParams() {
    return this._apiGwParams;
  }
  public putApiGwParams(value: EbEventConnectorConnectionDescriptionApiGwParams) {
    this._apiGwParams.internalValue = value;
  }
  public resetApiGwParams() {
    this._apiGwParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGwParamsInput() {
    return this._apiGwParams.internalValue;
  }

  // ckafka_params - computed: false, optional: true, required: false
  private _ckafkaParams = new EbEventConnectorConnectionDescriptionCkafkaParamsOutputReference(this, "ckafka_params");
  public get ckafkaParams() {
    return this._ckafkaParams;
  }
  public putCkafkaParams(value: EbEventConnectorConnectionDescriptionCkafkaParams) {
    this._ckafkaParams.internalValue = value;
  }
  public resetCkafkaParams() {
    this._ckafkaParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ckafkaParamsInput() {
    return this._ckafkaParams.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector tencentcloud_eb_event_connector}
*/
export class EbEventConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eb_event_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbEventConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbEventConnector to import
  * @param importFromId The id of the existing EbEventConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbEventConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eb_event_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/eb_event_connector tencentcloud_eb_event_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbEventConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: EbEventConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eb_event_connector',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionName = config.connectionName;
    this._description = config.description;
    this._enable = config.enable;
    this._eventBusId = config.eventBusId;
    this._id = config.id;
    this._type = config.type;
    this._connectionDescription.internalValue = config.connectionDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // event_bus_id - computed: false, optional: false, required: true
  private _eventBusId?: string; 
  public get eventBusId() {
    return this.getStringAttribute('event_bus_id');
  }
  public set eventBusId(value: string) {
    this._eventBusId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusIdInput() {
    return this._eventBusId;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // connection_description - computed: false, optional: false, required: true
  private _connectionDescription = new EbEventConnectorConnectionDescriptionOutputReference(this, "connection_description");
  public get connectionDescription() {
    return this._connectionDescription;
  }
  public putConnectionDescription(value: EbEventConnectorConnectionDescription) {
    this._connectionDescription.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDescriptionInput() {
    return this._connectionDescription.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_name: cdktf.stringToTerraform(this._connectionName),
      description: cdktf.stringToTerraform(this._description),
      enable: cdktf.booleanToTerraform(this._enable),
      event_bus_id: cdktf.stringToTerraform(this._eventBusId),
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
      connection_description: ebEventConnectorConnectionDescriptionToTerraform(this._connectionDescription.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_bus_id: {
        value: cdktf.stringToHclTerraform(this._eventBusId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_description: {
        value: ebEventConnectorConnectionDescriptionToHclTerraform(this._connectionDescription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbEventConnectorConnectionDescriptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
