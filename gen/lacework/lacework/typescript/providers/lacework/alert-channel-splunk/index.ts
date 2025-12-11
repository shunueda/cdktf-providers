// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertChannelSplunkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Splunk channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#channel AlertChannelSplunk#channel}
  */
  readonly channel?: string;
  /**
  * The state of the external integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#enabled AlertChannelSplunk#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The token you generate when you create a new HEC input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#hec_token AlertChannelSplunk#hec_token}
  */
  readonly hecToken: string;
  /**
  * The hostname of the client from which you're sending data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#host AlertChannelSplunk#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#id AlertChannelSplunk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#name AlertChannelSplunk#name}
  */
  readonly name: string;
  /**
  * The destination port for forwarding events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#port AlertChannelSplunk#port}
  */
  readonly port: number;
  /**
  * Enable or Disable SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#ssl AlertChannelSplunk#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Whether to test the integration of an alert channel upon creation and modification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#test_integration AlertChannelSplunk#test_integration}
  */
  readonly testIntegration?: boolean | cdktf.IResolvable;
  /**
  * event_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#event_data AlertChannelSplunk#event_data}
  */
  readonly eventData: AlertChannelSplunkEventData;
}
export interface AlertChannelSplunkEventData {
  /**
  * Index to store generated events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#index AlertChannelSplunk#index}
  */
  readonly index: string;
  /**
  * The Splunk source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#source AlertChannelSplunk#source}
  */
  readonly source: string;
}

export function alertChannelSplunkEventDataToTerraform(struct?: AlertChannelSplunkEventDataOutputReference | AlertChannelSplunkEventData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function alertChannelSplunkEventDataToHclTerraform(struct?: AlertChannelSplunkEventDataOutputReference | AlertChannelSplunkEventData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertChannelSplunkEventDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertChannelSplunkEventData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertChannelSplunkEventData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._source = value.source;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk lacework_alert_channel_splunk}
*/
export class AlertChannelSplunk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_alert_channel_splunk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertChannelSplunk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertChannelSplunk to import
  * @param importFromId The id of the existing AlertChannelSplunk that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertChannelSplunk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_alert_channel_splunk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_splunk lacework_alert_channel_splunk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertChannelSplunkConfig
  */
  public constructor(scope: Construct, id: string, config: AlertChannelSplunkConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_alert_channel_splunk',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.11',
        providerVersionConstraint: '2.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channel = config.channel;
    this._enabled = config.enabled;
    this._hecToken = config.hecToken;
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._port = config.port;
    this._ssl = config.ssl;
    this._testIntegration = config.testIntegration;
    this._eventData.internalValue = config.eventData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // enabled - computed: false, optional: true, required: false
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

  // hec_token - computed: false, optional: false, required: true
  private _hecToken?: string; 
  public get hecToken() {
    return this.getStringAttribute('hec_token');
  }
  public set hecToken(value: string) {
    this._hecToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hecTokenInput() {
    return this._hecToken;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
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

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // test_integration - computed: false, optional: true, required: false
  private _testIntegration?: boolean | cdktf.IResolvable; 
  public get testIntegration() {
    return this.getBooleanAttribute('test_integration');
  }
  public set testIntegration(value: boolean | cdktf.IResolvable) {
    this._testIntegration = value;
  }
  public resetTestIntegration() {
    this._testIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testIntegrationInput() {
    return this._testIntegration;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // event_data - computed: false, optional: false, required: true
  private _eventData = new AlertChannelSplunkEventDataOutputReference(this, "event_data");
  public get eventData() {
    return this._eventData;
  }
  public putEventData(value: AlertChannelSplunkEventData) {
    this._eventData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDataInput() {
    return this._eventData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel: cdktf.stringToTerraform(this._channel),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hec_token: cdktf.stringToTerraform(this._hecToken),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      ssl: cdktf.booleanToTerraform(this._ssl),
      test_integration: cdktf.booleanToTerraform(this._testIntegration),
      event_data: alertChannelSplunkEventDataToTerraform(this._eventData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hec_token: {
        value: cdktf.stringToHclTerraform(this._hecToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      test_integration: {
        value: cdktf.booleanToHclTerraform(this._testIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_data: {
        value: alertChannelSplunkEventDataToHclTerraform(this._eventData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertChannelSplunkEventDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
