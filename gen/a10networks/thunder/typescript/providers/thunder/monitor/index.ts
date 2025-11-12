// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Monitor buffer drop threshold (Threshold value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#buffer_drop Monitor#buffer_drop}
  */
  readonly bufferDrop?: number;
  /**
  * Monitor IO buffer usage threshold (Threshold value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#buffer_usage Monitor#buffer_usage}
  */
  readonly bufferUsage?: number;
  /**
  * Conn resource type 0 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#conn_type0 Monitor#conn_type0}
  */
  readonly connType0?: number;
  /**
  * Conn resource type 1 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#conn_type1 Monitor#conn_type1}
  */
  readonly connType1?: number;
  /**
  * Conn resource type 2 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#conn_type2 Monitor#conn_type2}
  */
  readonly connType2?: number;
  /**
  * Conn resource type 3 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#conn_type3 Monitor#conn_type3}
  */
  readonly connType3?: number;
  /**
  * Conn resource type 4 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#conn_type4 Monitor#conn_type4}
  */
  readonly connType4?: number;
  /**
  * Monitor control CPU threshold (Threshold value in percentage, default 90)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#ctrl_cpu Monitor#ctrl_cpu}
  */
  readonly ctrlCpu?: number;
  /**
  * Monitor data CPU threshold (Threshold value in percentage, default 90)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#data_cpu Monitor#data_cpu}
  */
  readonly dataCpu?: number;
  /**
  * Monitor hard disk usage threshold (Threshold value in percentage, default 85)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#disk Monitor#disk}
  */
  readonly disk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#id Monitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor memory usage threshold (Threshold value in percentage, default 95)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#memory Monitor#memory}
  */
  readonly memory?: number;
  /**
  * SMP resource type 0 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#smp_type0 Monitor#smp_type0}
  */
  readonly smpType0?: number;
  /**
  * SMP resource type 1 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#smp_type1 Monitor#smp_type1}
  */
  readonly smpType1?: number;
  /**
  * SMP resource type 2 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#smp_type2 Monitor#smp_type2}
  */
  readonly smpType2?: number;
  /**
  * SMP resource type 3 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#smp_type3 Monitor#smp_type3}
  */
  readonly smpType3?: number;
  /**
  * SMP resource type 4 (Threshold value, default 32767)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#smp_type4 Monitor#smp_type4}
  */
  readonly smpType4?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#uuid Monitor#uuid}
  */
  readonly uuid?: string;
  /**
  * Monitor warning system temperature threshold (Threshold value in Celsius, default 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#warn_temp Monitor#warn_temp}
  */
  readonly warnTemp?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor thunder_monitor}
*/
export class Monitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Monitor to import
  * @param importFromId The id of the existing Monitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Monitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/monitor thunder_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_monitor',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bufferDrop = config.bufferDrop;
    this._bufferUsage = config.bufferUsage;
    this._connType0 = config.connType0;
    this._connType1 = config.connType1;
    this._connType2 = config.connType2;
    this._connType3 = config.connType3;
    this._connType4 = config.connType4;
    this._ctrlCpu = config.ctrlCpu;
    this._dataCpu = config.dataCpu;
    this._disk = config.disk;
    this._id = config.id;
    this._memory = config.memory;
    this._smpType0 = config.smpType0;
    this._smpType1 = config.smpType1;
    this._smpType2 = config.smpType2;
    this._smpType3 = config.smpType3;
    this._smpType4 = config.smpType4;
    this._uuid = config.uuid;
    this._warnTemp = config.warnTemp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffer_drop - computed: false, optional: true, required: false
  private _bufferDrop?: number; 
  public get bufferDrop() {
    return this.getNumberAttribute('buffer_drop');
  }
  public set bufferDrop(value: number) {
    this._bufferDrop = value;
  }
  public resetBufferDrop() {
    this._bufferDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferDropInput() {
    return this._bufferDrop;
  }

  // buffer_usage - computed: false, optional: true, required: false
  private _bufferUsage?: number; 
  public get bufferUsage() {
    return this.getNumberAttribute('buffer_usage');
  }
  public set bufferUsage(value: number) {
    this._bufferUsage = value;
  }
  public resetBufferUsage() {
    this._bufferUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferUsageInput() {
    return this._bufferUsage;
  }

  // conn_type0 - computed: false, optional: true, required: false
  private _connType0?: number; 
  public get connType0() {
    return this.getNumberAttribute('conn_type0');
  }
  public set connType0(value: number) {
    this._connType0 = value;
  }
  public resetConnType0() {
    this._connType0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType0Input() {
    return this._connType0;
  }

  // conn_type1 - computed: false, optional: true, required: false
  private _connType1?: number; 
  public get connType1() {
    return this.getNumberAttribute('conn_type1');
  }
  public set connType1(value: number) {
    this._connType1 = value;
  }
  public resetConnType1() {
    this._connType1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType1Input() {
    return this._connType1;
  }

  // conn_type2 - computed: false, optional: true, required: false
  private _connType2?: number; 
  public get connType2() {
    return this.getNumberAttribute('conn_type2');
  }
  public set connType2(value: number) {
    this._connType2 = value;
  }
  public resetConnType2() {
    this._connType2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType2Input() {
    return this._connType2;
  }

  // conn_type3 - computed: false, optional: true, required: false
  private _connType3?: number; 
  public get connType3() {
    return this.getNumberAttribute('conn_type3');
  }
  public set connType3(value: number) {
    this._connType3 = value;
  }
  public resetConnType3() {
    this._connType3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType3Input() {
    return this._connType3;
  }

  // conn_type4 - computed: false, optional: true, required: false
  private _connType4?: number; 
  public get connType4() {
    return this.getNumberAttribute('conn_type4');
  }
  public set connType4(value: number) {
    this._connType4 = value;
  }
  public resetConnType4() {
    this._connType4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType4Input() {
    return this._connType4;
  }

  // ctrl_cpu - computed: false, optional: true, required: false
  private _ctrlCpu?: number; 
  public get ctrlCpu() {
    return this.getNumberAttribute('ctrl_cpu');
  }
  public set ctrlCpu(value: number) {
    this._ctrlCpu = value;
  }
  public resetCtrlCpu() {
    this._ctrlCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlCpuInput() {
    return this._ctrlCpu;
  }

  // data_cpu - computed: false, optional: true, required: false
  private _dataCpu?: number; 
  public get dataCpu() {
    return this.getNumberAttribute('data_cpu');
  }
  public set dataCpu(value: number) {
    this._dataCpu = value;
  }
  public resetDataCpu() {
    this._dataCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCpuInput() {
    return this._dataCpu;
  }

  // disk - computed: false, optional: true, required: false
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
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

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // smp_type0 - computed: false, optional: true, required: false
  private _smpType0?: number; 
  public get smpType0() {
    return this.getNumberAttribute('smp_type0');
  }
  public set smpType0(value: number) {
    this._smpType0 = value;
  }
  public resetSmpType0() {
    this._smpType0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpType0Input() {
    return this._smpType0;
  }

  // smp_type1 - computed: false, optional: true, required: false
  private _smpType1?: number; 
  public get smpType1() {
    return this.getNumberAttribute('smp_type1');
  }
  public set smpType1(value: number) {
    this._smpType1 = value;
  }
  public resetSmpType1() {
    this._smpType1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpType1Input() {
    return this._smpType1;
  }

  // smp_type2 - computed: false, optional: true, required: false
  private _smpType2?: number; 
  public get smpType2() {
    return this.getNumberAttribute('smp_type2');
  }
  public set smpType2(value: number) {
    this._smpType2 = value;
  }
  public resetSmpType2() {
    this._smpType2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpType2Input() {
    return this._smpType2;
  }

  // smp_type3 - computed: false, optional: true, required: false
  private _smpType3?: number; 
  public get smpType3() {
    return this.getNumberAttribute('smp_type3');
  }
  public set smpType3(value: number) {
    this._smpType3 = value;
  }
  public resetSmpType3() {
    this._smpType3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpType3Input() {
    return this._smpType3;
  }

  // smp_type4 - computed: false, optional: true, required: false
  private _smpType4?: number; 
  public get smpType4() {
    return this.getNumberAttribute('smp_type4');
  }
  public set smpType4(value: number) {
    this._smpType4 = value;
  }
  public resetSmpType4() {
    this._smpType4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpType4Input() {
    return this._smpType4;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // warn_temp - computed: false, optional: true, required: false
  private _warnTemp?: number; 
  public get warnTemp() {
    return this.getNumberAttribute('warn_temp');
  }
  public set warnTemp(value: number) {
    this._warnTemp = value;
  }
  public resetWarnTemp() {
    this._warnTemp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnTempInput() {
    return this._warnTemp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      buffer_drop: cdktf.numberToTerraform(this._bufferDrop),
      buffer_usage: cdktf.numberToTerraform(this._bufferUsage),
      conn_type0: cdktf.numberToTerraform(this._connType0),
      conn_type1: cdktf.numberToTerraform(this._connType1),
      conn_type2: cdktf.numberToTerraform(this._connType2),
      conn_type3: cdktf.numberToTerraform(this._connType3),
      conn_type4: cdktf.numberToTerraform(this._connType4),
      ctrl_cpu: cdktf.numberToTerraform(this._ctrlCpu),
      data_cpu: cdktf.numberToTerraform(this._dataCpu),
      disk: cdktf.numberToTerraform(this._disk),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.numberToTerraform(this._memory),
      smp_type0: cdktf.numberToTerraform(this._smpType0),
      smp_type1: cdktf.numberToTerraform(this._smpType1),
      smp_type2: cdktf.numberToTerraform(this._smpType2),
      smp_type3: cdktf.numberToTerraform(this._smpType3),
      smp_type4: cdktf.numberToTerraform(this._smpType4),
      uuid: cdktf.stringToTerraform(this._uuid),
      warn_temp: cdktf.numberToTerraform(this._warnTemp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buffer_drop: {
        value: cdktf.numberToHclTerraform(this._bufferDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      buffer_usage: {
        value: cdktf.numberToHclTerraform(this._bufferUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_type0: {
        value: cdktf.numberToHclTerraform(this._connType0),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_type1: {
        value: cdktf.numberToHclTerraform(this._connType1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_type2: {
        value: cdktf.numberToHclTerraform(this._connType2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_type3: {
        value: cdktf.numberToHclTerraform(this._connType3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_type4: {
        value: cdktf.numberToHclTerraform(this._connType4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ctrl_cpu: {
        value: cdktf.numberToHclTerraform(this._ctrlCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_cpu: {
        value: cdktf.numberToHclTerraform(this._dataCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk: {
        value: cdktf.numberToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_type0: {
        value: cdktf.numberToHclTerraform(this._smpType0),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_type1: {
        value: cdktf.numberToHclTerraform(this._smpType1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_type2: {
        value: cdktf.numberToHclTerraform(this._smpType2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_type3: {
        value: cdktf.numberToHclTerraform(this._smpType3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_type4: {
        value: cdktf.numberToHclTerraform(this._smpType4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warn_temp: {
        value: cdktf.numberToHclTerraform(this._warnTemp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
