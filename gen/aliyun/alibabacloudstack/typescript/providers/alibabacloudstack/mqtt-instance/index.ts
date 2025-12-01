// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MqttInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#cluster_name MqttInstance#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#id MqttInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#independent_naming MqttInstance#independent_naming}
  */
  readonly independentNaming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#instance_name MqttInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#max_conn MqttInstance#max_conn}
  */
  readonly maxConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#max_down_tps MqttInstance#max_down_tps}
  */
  readonly maxDownTps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#max_sub MqttInstance#max_sub}
  */
  readonly maxSub?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#max_up_tps MqttInstance#max_up_tps}
  */
  readonly maxUpTps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#remark MqttInstance#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#store_instance_id MqttInstance#store_instance_id}
  */
  readonly storeInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#store_type MqttInstance#store_type}
  */
  readonly storeType?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance alibabacloudstack_mqtt_instance}
*/
export class MqttInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_mqtt_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MqttInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MqttInstance to import
  * @param importFromId The id of the existing MqttInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MqttInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_mqtt_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_instance alibabacloudstack_mqtt_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MqttInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MqttInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_mqtt_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._independentNaming = config.independentNaming;
    this._instanceName = config.instanceName;
    this._maxConn = config.maxConn;
    this._maxDownTps = config.maxDownTps;
    this._maxSub = config.maxSub;
    this._maxUpTps = config.maxUpTps;
    this._remark = config.remark;
    this._storeInstanceId = config.storeInstanceId;
    this._storeType = config.storeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new cdktf.StringMap(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
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

  // independent_naming - computed: false, optional: true, required: false
  private _independentNaming?: boolean | cdktf.IResolvable; 
  public get independentNaming() {
    return this.getBooleanAttribute('independent_naming');
  }
  public set independentNaming(value: boolean | cdktf.IResolvable) {
    this._independentNaming = value;
  }
  public resetIndependentNaming() {
    this._independentNaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get independentNamingInput() {
    return this._independentNaming;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // max_conn - computed: false, optional: true, required: false
  private _maxConn?: number; 
  public get maxConn() {
    return this.getNumberAttribute('max_conn');
  }
  public set maxConn(value: number) {
    this._maxConn = value;
  }
  public resetMaxConn() {
    this._maxConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnInput() {
    return this._maxConn;
  }

  // max_down_tps - computed: false, optional: true, required: false
  private _maxDownTps?: number; 
  public get maxDownTps() {
    return this.getNumberAttribute('max_down_tps');
  }
  public set maxDownTps(value: number) {
    this._maxDownTps = value;
  }
  public resetMaxDownTps() {
    this._maxDownTps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDownTpsInput() {
    return this._maxDownTps;
  }

  // max_sub - computed: false, optional: true, required: false
  private _maxSub?: number; 
  public get maxSub() {
    return this.getNumberAttribute('max_sub');
  }
  public set maxSub(value: number) {
    this._maxSub = value;
  }
  public resetMaxSub() {
    this._maxSub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSubInput() {
    return this._maxSub;
  }

  // max_up_tps - computed: false, optional: true, required: false
  private _maxUpTps?: number; 
  public get maxUpTps() {
    return this.getNumberAttribute('max_up_tps');
  }
  public set maxUpTps(value: number) {
    this._maxUpTps = value;
  }
  public resetMaxUpTps() {
    this._maxUpTps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpTpsInput() {
    return this._maxUpTps;
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // store_instance_id - computed: true, optional: true, required: false
  private _storeInstanceId?: string; 
  public get storeInstanceId() {
    return this.getStringAttribute('store_instance_id');
  }
  public set storeInstanceId(value: string) {
    this._storeInstanceId = value;
  }
  public resetStoreInstanceId() {
    this._storeInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInstanceIdInput() {
    return this._storeInstanceId;
  }

  // store_type - computed: false, optional: true, required: false
  private _storeType?: number; 
  public get storeType() {
    return this.getNumberAttribute('store_type');
  }
  public set storeType(value: number) {
    this._storeType = value;
  }
  public resetStoreType() {
    this._storeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeTypeInput() {
    return this._storeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      independent_naming: cdktf.booleanToTerraform(this._independentNaming),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      max_conn: cdktf.numberToTerraform(this._maxConn),
      max_down_tps: cdktf.numberToTerraform(this._maxDownTps),
      max_sub: cdktf.numberToTerraform(this._maxSub),
      max_up_tps: cdktf.numberToTerraform(this._maxUpTps),
      remark: cdktf.stringToTerraform(this._remark),
      store_instance_id: cdktf.stringToTerraform(this._storeInstanceId),
      store_type: cdktf.numberToTerraform(this._storeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      independent_naming: {
        value: cdktf.booleanToHclTerraform(this._independentNaming),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_conn: {
        value: cdktf.numberToHclTerraform(this._maxConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_down_tps: {
        value: cdktf.numberToHclTerraform(this._maxDownTps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_sub: {
        value: cdktf.numberToHclTerraform(this._maxSub),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_up_tps: {
        value: cdktf.numberToHclTerraform(this._maxUpTps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_instance_id: {
        value: cdktf.stringToHclTerraform(this._storeInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_type: {
        value: cdktf.numberToHclTerraform(this._storeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
