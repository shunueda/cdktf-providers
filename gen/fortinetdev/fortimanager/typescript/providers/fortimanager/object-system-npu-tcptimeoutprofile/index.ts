// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuTcptimeoutprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#adom ObjectSystemNpuTcptimeoutprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#close_wait ObjectSystemNpuTcptimeoutprofile#close_wait}
  */
  readonly closeWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#fin_wait ObjectSystemNpuTcptimeoutprofile#fin_wait}
  */
  readonly finWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#fosid ObjectSystemNpuTcptimeoutprofile#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#id ObjectSystemNpuTcptimeoutprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#scopetype ObjectSystemNpuTcptimeoutprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#syn_sent ObjectSystemNpuTcptimeoutprofile#syn_sent}
  */
  readonly synSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#syn_wait ObjectSystemNpuTcptimeoutprofile#syn_wait}
  */
  readonly synWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#tcp_idle ObjectSystemNpuTcptimeoutprofile#tcp_idle}
  */
  readonly tcpIdle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#time_wait ObjectSystemNpuTcptimeoutprofile#time_wait}
  */
  readonly timeWait?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile fortimanager_object_system_npu_tcptimeoutprofile}
*/
export class ObjectSystemNpuTcptimeoutprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_tcptimeoutprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuTcptimeoutprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuTcptimeoutprofile to import
  * @param importFromId The id of the existing ObjectSystemNpuTcptimeoutprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuTcptimeoutprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_tcptimeoutprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_tcptimeoutprofile fortimanager_object_system_npu_tcptimeoutprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuTcptimeoutprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuTcptimeoutprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_tcptimeoutprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._closeWait = config.closeWait;
    this._finWait = config.finWait;
    this._fosid = config.fosid;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._synSent = config.synSent;
    this._synWait = config.synWait;
    this._tcpIdle = config.tcpIdle;
    this._timeWait = config.timeWait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // close_wait - computed: false, optional: true, required: false
  private _closeWait?: number; 
  public get closeWait() {
    return this.getNumberAttribute('close_wait');
  }
  public set closeWait(value: number) {
    this._closeWait = value;
  }
  public resetCloseWait() {
    this._closeWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeWaitInput() {
    return this._closeWait;
  }

  // fin_wait - computed: false, optional: true, required: false
  private _finWait?: number; 
  public get finWait() {
    return this.getNumberAttribute('fin_wait');
  }
  public set finWait(value: number) {
    this._finWait = value;
  }
  public resetFinWait() {
    this._finWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finWaitInput() {
    return this._finWait;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // syn_sent - computed: false, optional: true, required: false
  private _synSent?: number; 
  public get synSent() {
    return this.getNumberAttribute('syn_sent');
  }
  public set synSent(value: number) {
    this._synSent = value;
  }
  public resetSynSent() {
    this._synSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synSentInput() {
    return this._synSent;
  }

  // syn_wait - computed: false, optional: true, required: false
  private _synWait?: number; 
  public get synWait() {
    return this.getNumberAttribute('syn_wait');
  }
  public set synWait(value: number) {
    this._synWait = value;
  }
  public resetSynWait() {
    this._synWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synWaitInput() {
    return this._synWait;
  }

  // tcp_idle - computed: false, optional: true, required: false
  private _tcpIdle?: number; 
  public get tcpIdle() {
    return this.getNumberAttribute('tcp_idle');
  }
  public set tcpIdle(value: number) {
    this._tcpIdle = value;
  }
  public resetTcpIdle() {
    this._tcpIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIdleInput() {
    return this._tcpIdle;
  }

  // time_wait - computed: false, optional: true, required: false
  private _timeWait?: number; 
  public get timeWait() {
    return this.getNumberAttribute('time_wait');
  }
  public set timeWait(value: number) {
    this._timeWait = value;
  }
  public resetTimeWait() {
    this._timeWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWaitInput() {
    return this._timeWait;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      close_wait: cdktf.numberToTerraform(this._closeWait),
      fin_wait: cdktf.numberToTerraform(this._finWait),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      syn_sent: cdktf.numberToTerraform(this._synSent),
      syn_wait: cdktf.numberToTerraform(this._synWait),
      tcp_idle: cdktf.numberToTerraform(this._tcpIdle),
      time_wait: cdktf.numberToTerraform(this._timeWait),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      close_wait: {
        value: cdktf.numberToHclTerraform(this._closeWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fin_wait: {
        value: cdktf.numberToHclTerraform(this._finWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syn_sent: {
        value: cdktf.numberToHclTerraform(this._synSent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_wait: {
        value: cdktf.numberToHclTerraform(this._synWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_idle: {
        value: cdktf.numberToHclTerraform(this._tcpIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_wait: {
        value: cdktf.numberToHclTerraform(this._timeWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
