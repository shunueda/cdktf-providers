// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagQosPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#description SagQosPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#dest_cidr SagQosPolicy#dest_cidr}
  */
  readonly destCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#dest_port_range SagQosPolicy#dest_port_range}
  */
  readonly destPortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#end_time SagQosPolicy#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#id SagQosPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#ip_protocol SagQosPolicy#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#name SagQosPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#priority SagQosPolicy#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#qos_id SagQosPolicy#qos_id}
  */
  readonly qosId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#source_cidr SagQosPolicy#source_cidr}
  */
  readonly sourceCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#source_port_range SagQosPolicy#source_port_range}
  */
  readonly sourcePortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#start_time SagQosPolicy#start_time}
  */
  readonly startTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy alicloud_sag_qos_policy}
*/
export class SagQosPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sag_qos_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagQosPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagQosPolicy to import
  * @param importFromId The id of the existing SagQosPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagQosPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sag_qos_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sag_qos_policy alicloud_sag_qos_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagQosPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SagQosPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sag_qos_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destCidr = config.destCidr;
    this._destPortRange = config.destPortRange;
    this._endTime = config.endTime;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._name = config.name;
    this._priority = config.priority;
    this._qosId = config.qosId;
    this._sourceCidr = config.sourceCidr;
    this._sourcePortRange = config.sourcePortRange;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dest_cidr - computed: false, optional: false, required: true
  private _destCidr?: string; 
  public get destCidr() {
    return this.getStringAttribute('dest_cidr');
  }
  public set destCidr(value: string) {
    this._destCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destCidrInput() {
    return this._destCidr;
  }

  // dest_port_range - computed: false, optional: false, required: true
  private _destPortRange?: string; 
  public get destPortRange() {
    return this.getStringAttribute('dest_port_range');
  }
  public set destPortRange(value: string) {
    this._destPortRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortRangeInput() {
    return this._destPortRange;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // qos_id - computed: false, optional: false, required: true
  private _qosId?: string; 
  public get qosId() {
    return this.getStringAttribute('qos_id');
  }
  public set qosId(value: string) {
    this._qosId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosIdInput() {
    return this._qosId;
  }

  // source_cidr - computed: false, optional: false, required: true
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // source_port_range - computed: false, optional: false, required: true
  private _sourcePortRange?: string; 
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }
  public set sourcePortRange(value: string) {
    this._sourcePortRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dest_cidr: cdktf.stringToTerraform(this._destCidr),
      dest_port_range: cdktf.stringToTerraform(this._destPortRange),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      qos_id: cdktf.stringToTerraform(this._qosId),
      source_cidr: cdktf.stringToTerraform(this._sourceCidr),
      source_port_range: cdktf.stringToTerraform(this._sourcePortRange),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_cidr: {
        value: cdktf.stringToHclTerraform(this._destCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port_range: {
        value: cdktf.stringToHclTerraform(this._destPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_id: {
        value: cdktf.stringToHclTerraform(this._qosId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_cidr: {
        value: cdktf.stringToHclTerraform(this._sourceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_range: {
        value: cdktf.stringToHclTerraform(this._sourcePortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
