// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cloud_services_kafka_server_profile_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCloudServicesKafkaServerProfileOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cloud_services_kafka_server_profile_oper#id DataThunderCloudServicesKafkaServerProfileOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cloud_services_kafka_server_profile_oper#oper DataThunderCloudServicesKafkaServerProfileOper#oper}
  */
  readonly oper?: DataThunderCloudServicesKafkaServerProfileOperOper;
}
export interface DataThunderCloudServicesKafkaServerProfileOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cloud_services_kafka_server_profile_oper#active_namespace DataThunderCloudServicesKafkaServerProfileOper#active_namespace}
  */
  readonly activeNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cloud_services_kafka_server_profile_oper#kafka_broker_state DataThunderCloudServicesKafkaServerProfileOper#kafka_broker_state}
  */
  readonly kafkaBrokerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cloud_services_kafka_server_profile_oper#registration_status DataThunderCloudServicesKafkaServerProfileOper#registration_status}
  */
  readonly registrationStatus?: string;
}

export function dataThunderCloudServicesKafkaServerProfileOperOperToTerraform(struct?: DataThunderCloudServicesKafkaServerProfileOperOperOutputReference | DataThunderCloudServicesKafkaServerProfileOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_namespace: cdktf.stringToTerraform(struct!.activeNamespace),
    kafka_broker_state: cdktf.stringToTerraform(struct!.kafkaBrokerState),
    registration_status: cdktf.stringToTerraform(struct!.registrationStatus),
  }
}


export function dataThunderCloudServicesKafkaServerProfileOperOperToHclTerraform(struct?: DataThunderCloudServicesKafkaServerProfileOperOperOutputReference | DataThunderCloudServicesKafkaServerProfileOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_namespace: {
      value: cdktf.stringToHclTerraform(struct!.activeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_broker_state: {
      value: cdktf.stringToHclTerraform(struct!.kafkaBrokerState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_status: {
      value: cdktf.stringToHclTerraform(struct!.registrationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCloudServicesKafkaServerProfileOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCloudServicesKafkaServerProfileOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNamespace = this._activeNamespace;
    }
    if (this._kafkaBrokerState !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaBrokerState = this._kafkaBrokerState;
    }
    if (this._registrationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationStatus = this._registrationStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCloudServicesKafkaServerProfileOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeNamespace = undefined;
      this._kafkaBrokerState = undefined;
      this._registrationStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeNamespace = value.activeNamespace;
      this._kafkaBrokerState = value.kafkaBrokerState;
      this._registrationStatus = value.registrationStatus;
    }
  }

  // active_namespace - computed: false, optional: true, required: false
  private _activeNamespace?: string; 
  public get activeNamespace() {
    return this.getStringAttribute('active_namespace');
  }
  public set activeNamespace(value: string) {
    this._activeNamespace = value;
  }
  public resetActiveNamespace() {
    this._activeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNamespaceInput() {
    return this._activeNamespace;
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

  // registration_status - computed: false, optional: true, required: false
  private _registrationStatus?: string; 
  public get registrationStatus() {
    return this.getStringAttribute('registration_status');
  }
  public set registrationStatus(value: string) {
    this._registrationStatus = value;
  }
  public resetRegistrationStatus() {
    this._registrationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationStatusInput() {
    return this._registrationStatus;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cloud_services_kafka_server_profile_oper thunder_cloud_services_kafka_server_profile_oper}
*/
export class DataThunderCloudServicesKafkaServerProfileOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cloud_services_kafka_server_profile_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCloudServicesKafkaServerProfileOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCloudServicesKafkaServerProfileOper to import
  * @param importFromId The id of the existing DataThunderCloudServicesKafkaServerProfileOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cloud_services_kafka_server_profile_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCloudServicesKafkaServerProfileOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cloud_services_kafka_server_profile_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cloud_services_kafka_server_profile_oper thunder_cloud_services_kafka_server_profile_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCloudServicesKafkaServerProfileOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCloudServicesKafkaServerProfileOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cloud_services_kafka_server_profile_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _oper = new DataThunderCloudServicesKafkaServerProfileOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCloudServicesKafkaServerProfileOperOper) {
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
      oper: dataThunderCloudServicesKafkaServerProfileOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCloudServicesKafkaServerProfileOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCloudServicesKafkaServerProfileOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
