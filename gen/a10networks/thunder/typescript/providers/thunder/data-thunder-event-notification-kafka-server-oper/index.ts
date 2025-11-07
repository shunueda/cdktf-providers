// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/event_notification_kafka_server_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderEventNotificationKafkaServerOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/event_notification_kafka_server_oper#id DataThunderEventNotificationKafkaServerOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/event_notification_kafka_server_oper#oper DataThunderEventNotificationKafkaServerOper#oper}
  */
  readonly oper?: DataThunderEventNotificationKafkaServerOperOper;
}
export interface DataThunderEventNotificationKafkaServerOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/event_notification_kafka_server_oper#kafka_broker_state DataThunderEventNotificationKafkaServerOper#kafka_broker_state}
  */
  readonly kafkaBrokerState?: string;
}

export function dataThunderEventNotificationKafkaServerOperOperToTerraform(struct?: DataThunderEventNotificationKafkaServerOperOperOutputReference | DataThunderEventNotificationKafkaServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_broker_state: cdktf.stringToTerraform(struct!.kafkaBrokerState),
  }
}


export function dataThunderEventNotificationKafkaServerOperOperToHclTerraform(struct?: DataThunderEventNotificationKafkaServerOperOperOutputReference | DataThunderEventNotificationKafkaServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_broker_state: {
      value: cdktf.stringToHclTerraform(struct!.kafkaBrokerState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderEventNotificationKafkaServerOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderEventNotificationKafkaServerOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaBrokerState !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaBrokerState = this._kafkaBrokerState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderEventNotificationKafkaServerOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafkaBrokerState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafkaBrokerState = value.kafkaBrokerState;
    }
  }

  // kafka_broker_state - computed: false, optional: true, required: false
  private _kafkaBrokerState?: string; 
  public get kafkaBrokerState() {
    return this.getStringAttribute('kafka_broker_state');
  }
  public set kafkaBrokerState(value: string) {
    this._kafkaBrokerState = value;
  }
  public resetKafkaBrokerState() {
    this._kafkaBrokerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaBrokerStateInput() {
    return this._kafkaBrokerState;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/event_notification_kafka_server_oper thunder_event_notification_kafka_server_oper}
*/
export class DataThunderEventNotificationKafkaServerOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_event_notification_kafka_server_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderEventNotificationKafkaServerOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderEventNotificationKafkaServerOper to import
  * @param importFromId The id of the existing DataThunderEventNotificationKafkaServerOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/event_notification_kafka_server_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderEventNotificationKafkaServerOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_event_notification_kafka_server_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/event_notification_kafka_server_oper thunder_event_notification_kafka_server_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderEventNotificationKafkaServerOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderEventNotificationKafkaServerOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_event_notification_kafka_server_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderEventNotificationKafkaServerOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderEventNotificationKafkaServerOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderEventNotificationKafkaServerOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderEventNotificationKafkaServerOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderEventNotificationKafkaServerOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
