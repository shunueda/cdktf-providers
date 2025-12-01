// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackOnsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance#cluster ApsarastackOnsInstance#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance#id ApsarastackOnsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance#independent_naming ApsarastackOnsInstance#independent_naming}
  */
  readonly independentNaming: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance#name ApsarastackOnsInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance#remark ApsarastackOnsInstance#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance#topic_capacity ApsarastackOnsInstance#topic_capacity}
  */
  readonly topicCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance#tps_receive_max ApsarastackOnsInstance#tps_receive_max}
  */
  readonly tpsReceiveMax: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance#tps_send_max ApsarastackOnsInstance#tps_send_max}
  */
  readonly tpsSendMax: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance apsarastack_ons_instance}
*/
export class ApsarastackOnsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ons_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackOnsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackOnsInstance to import
  * @param importFromId The id of the existing ApsarastackOnsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackOnsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ons_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ons_instance apsarastack_ons_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackOnsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackOnsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ons_instance',
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
    this._cluster = config.cluster;
    this._id = config.id;
    this._independentNaming = config.independentNaming;
    this._name = config.name;
    this._remark = config.remark;
    this._topicCapacity = config.topicCapacity;
    this._tpsReceiveMax = config.tpsReceiveMax;
    this._tpsSendMax = config.tpsSendMax;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // independent_naming - computed: false, optional: false, required: true
  private _independentNaming?: string; 
  public get independentNaming() {
    return this.getStringAttribute('independent_naming');
  }
  public set independentNaming(value: string) {
    this._independentNaming = value;
  }
  // Temporarily expose input value. Use with caution.
  public get independentNamingInput() {
    return this._independentNaming;
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getNumberAttribute('instance_status');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getNumberAttribute('instance_type');
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

  // topic_capacity - computed: false, optional: false, required: true
  private _topicCapacity?: number; 
  public get topicCapacity() {
    return this.getNumberAttribute('topic_capacity');
  }
  public set topicCapacity(value: number) {
    this._topicCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicCapacityInput() {
    return this._topicCapacity;
  }

  // tps_receive_max - computed: false, optional: false, required: true
  private _tpsReceiveMax?: number; 
  public get tpsReceiveMax() {
    return this.getNumberAttribute('tps_receive_max');
  }
  public set tpsReceiveMax(value: number) {
    this._tpsReceiveMax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tpsReceiveMaxInput() {
    return this._tpsReceiveMax;
  }

  // tps_send_max - computed: false, optional: false, required: true
  private _tpsSendMax?: number; 
  public get tpsSendMax() {
    return this.getNumberAttribute('tps_send_max');
  }
  public set tpsSendMax(value: number) {
    this._tpsSendMax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tpsSendMaxInput() {
    return this._tpsSendMax;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      id: cdktf.stringToTerraform(this._id),
      independent_naming: cdktf.stringToTerraform(this._independentNaming),
      name: cdktf.stringToTerraform(this._name),
      remark: cdktf.stringToTerraform(this._remark),
      topic_capacity: cdktf.numberToTerraform(this._topicCapacity),
      tps_receive_max: cdktf.numberToTerraform(this._tpsReceiveMax),
      tps_send_max: cdktf.numberToTerraform(this._tpsSendMax),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
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
        value: cdktf.stringToHclTerraform(this._independentNaming),
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
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_capacity: {
        value: cdktf.numberToHclTerraform(this._topicCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tps_receive_max: {
        value: cdktf.numberToHclTerraform(this._tpsReceiveMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tps_send_max: {
        value: cdktf.numberToHclTerraform(this._tpsSendMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
