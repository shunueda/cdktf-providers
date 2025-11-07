// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSdwanMembersAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#comment SystemSdwanMembersA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#cost SystemSdwanMembersA#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#device_name SystemSdwanMembersA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#device_vdom SystemSdwanMembersA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#gateway SystemSdwanMembersA#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#gateway6 SystemSdwanMembersA#gateway6}
  */
  readonly gateway6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#id SystemSdwanMembersA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#ingress_spillover_threshold SystemSdwanMembersA#ingress_spillover_threshold}
  */
  readonly ingressSpilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#interface SystemSdwanMembersA#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#preferred_source SystemSdwanMembersA#preferred_source}
  */
  readonly preferredSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#priority SystemSdwanMembersA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#priority6 SystemSdwanMembersA#priority6}
  */
  readonly priority6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#priority_in_sla SystemSdwanMembersA#priority_in_sla}
  */
  readonly priorityInSla?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#priority_out_sla SystemSdwanMembersA#priority_out_sla}
  */
  readonly priorityOutSla?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#seq_num SystemSdwanMembersA#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#source SystemSdwanMembersA#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#source6 SystemSdwanMembersA#source6}
  */
  readonly source6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#spillover_threshold SystemSdwanMembersA#spillover_threshold}
  */
  readonly spilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#status SystemSdwanMembersA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#transport_group SystemSdwanMembersA#transport_group}
  */
  readonly transportGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#volume_ratio SystemSdwanMembersA#volume_ratio}
  */
  readonly volumeRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#weight SystemSdwanMembersA#weight}
  */
  readonly weight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#zone SystemSdwanMembersA#zone}
  */
  readonly zone?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members fmgdevice_system_sdwan_members}
*/
export class SystemSdwanMembersA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_sdwan_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSdwanMembersA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSdwanMembersA to import
  * @param importFromId The id of the existing SystemSdwanMembersA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSdwanMembersA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_sdwan_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_members fmgdevice_system_sdwan_members} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSdwanMembersAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSdwanMembersAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_sdwan_members',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._cost = config.cost;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._gateway = config.gateway;
    this._gateway6 = config.gateway6;
    this._id = config.id;
    this._ingressSpilloverThreshold = config.ingressSpilloverThreshold;
    this._interface = config.interface;
    this._preferredSource = config.preferredSource;
    this._priority = config.priority;
    this._priority6 = config.priority6;
    this._priorityInSla = config.priorityInSla;
    this._priorityOutSla = config.priorityOutSla;
    this._seqNum = config.seqNum;
    this._source = config.source;
    this._source6 = config.source6;
    this._spilloverThreshold = config.spilloverThreshold;
    this._status = config.status;
    this._transportGroup = config.transportGroup;
    this._volumeRatio = config.volumeRatio;
    this._weight = config.weight;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: true, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
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

  // ingress_spillover_threshold - computed: false, optional: true, required: false
  private _ingressSpilloverThreshold?: number; 
  public get ingressSpilloverThreshold() {
    return this.getNumberAttribute('ingress_spillover_threshold');
  }
  public set ingressSpilloverThreshold(value: number) {
    this._ingressSpilloverThreshold = value;
  }
  public resetIngressSpilloverThreshold() {
    this._ingressSpilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSpilloverThresholdInput() {
    return this._ingressSpilloverThreshold;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // preferred_source - computed: true, optional: true, required: false
  private _preferredSource?: string; 
  public get preferredSource() {
    return this.getStringAttribute('preferred_source');
  }
  public set preferredSource(value: string) {
    this._preferredSource = value;
  }
  public resetPreferredSource() {
    this._preferredSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSourceInput() {
    return this._preferredSource;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority6 - computed: true, optional: true, required: false
  private _priority6?: number; 
  public get priority6() {
    return this.getNumberAttribute('priority6');
  }
  public set priority6(value: number) {
    this._priority6 = value;
  }
  public resetPriority6() {
    this._priority6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority6Input() {
    return this._priority6;
  }

  // priority_in_sla - computed: false, optional: true, required: false
  private _priorityInSla?: number; 
  public get priorityInSla() {
    return this.getNumberAttribute('priority_in_sla');
  }
  public set priorityInSla(value: number) {
    this._priorityInSla = value;
  }
  public resetPriorityInSla() {
    this._priorityInSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInSlaInput() {
    return this._priorityInSla;
  }

  // priority_out_sla - computed: false, optional: true, required: false
  private _priorityOutSla?: number; 
  public get priorityOutSla() {
    return this.getNumberAttribute('priority_out_sla');
  }
  public set priorityOutSla(value: number) {
    this._priorityOutSla = value;
  }
  public resetPriorityOutSla() {
    this._priorityOutSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOutSlaInput() {
    return this._priorityOutSla;
  }

  // seq_num - computed: false, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source6 - computed: true, optional: true, required: false
  private _source6?: string; 
  public get source6() {
    return this.getStringAttribute('source6');
  }
  public set source6(value: string) {
    this._source6 = value;
  }
  public resetSource6() {
    this._source6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source6Input() {
    return this._source6;
  }

  // spillover_threshold - computed: false, optional: true, required: false
  private _spilloverThreshold?: number; 
  public get spilloverThreshold() {
    return this.getNumberAttribute('spillover_threshold');
  }
  public set spilloverThreshold(value: number) {
    this._spilloverThreshold = value;
  }
  public resetSpilloverThreshold() {
    this._spilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spilloverThresholdInput() {
    return this._spilloverThreshold;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // transport_group - computed: false, optional: true, required: false
  private _transportGroup?: number; 
  public get transportGroup() {
    return this.getNumberAttribute('transport_group');
  }
  public set transportGroup(value: number) {
    this._transportGroup = value;
  }
  public resetTransportGroup() {
    this._transportGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGroupInput() {
    return this._transportGroup;
  }

  // volume_ratio - computed: false, optional: true, required: false
  private _volumeRatio?: number; 
  public get volumeRatio() {
    return this.getNumberAttribute('volume_ratio');
  }
  public set volumeRatio(value: number) {
    this._volumeRatio = value;
  }
  public resetVolumeRatio() {
    this._volumeRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeRatioInput() {
    return this._volumeRatio;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string[]; 
  public get zone() {
    return cdktf.Fn.tolist(this.getListAttribute('zone'));
  }
  public set zone(value: string[]) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      cost: cdktf.numberToTerraform(this._cost),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      gateway: cdktf.stringToTerraform(this._gateway),
      gateway6: cdktf.stringToTerraform(this._gateway6),
      id: cdktf.stringToTerraform(this._id),
      ingress_spillover_threshold: cdktf.numberToTerraform(this._ingressSpilloverThreshold),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      preferred_source: cdktf.stringToTerraform(this._preferredSource),
      priority: cdktf.numberToTerraform(this._priority),
      priority6: cdktf.numberToTerraform(this._priority6),
      priority_in_sla: cdktf.numberToTerraform(this._priorityInSla),
      priority_out_sla: cdktf.numberToTerraform(this._priorityOutSla),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      source: cdktf.stringToTerraform(this._source),
      source6: cdktf.stringToTerraform(this._source6),
      spillover_threshold: cdktf.numberToTerraform(this._spilloverThreshold),
      status: cdktf.stringToTerraform(this._status),
      transport_group: cdktf.numberToTerraform(this._transportGroup),
      volume_ratio: cdktf.numberToTerraform(this._volumeRatio),
      weight: cdktf.numberToTerraform(this._weight),
      zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway6: {
        value: cdktf.stringToHclTerraform(this._gateway6),
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
      ingress_spillover_threshold: {
        value: cdktf.numberToHclTerraform(this._ingressSpilloverThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preferred_source: {
        value: cdktf.stringToHclTerraform(this._preferredSource),
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
      priority6: {
        value: cdktf.numberToHclTerraform(this._priority6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_in_sla: {
        value: cdktf.numberToHclTerraform(this._priorityInSla),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_out_sla: {
        value: cdktf.numberToHclTerraform(this._priorityOutSla),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seq_num: {
        value: cdktf.numberToHclTerraform(this._seqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source6: {
        value: cdktf.stringToHclTerraform(this._source6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spillover_threshold: {
        value: cdktf.numberToHclTerraform(this._spilloverThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_group: {
        value: cdktf.numberToHclTerraform(this._transportGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_ratio: {
        value: cdktf.numberToHclTerraform(this._volumeRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zone),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
