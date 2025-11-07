// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WantempSystemSdwanHealthcheckSlaAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#adom WantempSystemSdwanHealthcheckSlaA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#fosid WantempSystemSdwanHealthcheckSlaA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#health_check WantempSystemSdwanHealthcheckSlaA#health_check}
  */
  readonly healthCheck: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#id WantempSystemSdwanHealthcheckSlaA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#jitter_threshold WantempSystemSdwanHealthcheckSlaA#jitter_threshold}
  */
  readonly jitterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#latency_threshold WantempSystemSdwanHealthcheckSlaA#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#link_cost_factor WantempSystemSdwanHealthcheckSlaA#link_cost_factor}
  */
  readonly linkCostFactor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#mos_threshold WantempSystemSdwanHealthcheckSlaA#mos_threshold}
  */
  readonly mosThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#packetloss_threshold WantempSystemSdwanHealthcheckSlaA#packetloss_threshold}
  */
  readonly packetlossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#priority_in_sla WantempSystemSdwanHealthcheckSlaA#priority_in_sla}
  */
  readonly priorityInSla?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#priority_out_sla WantempSystemSdwanHealthcheckSlaA#priority_out_sla}
  */
  readonly priorityOutSla?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#scopetype WantempSystemSdwanHealthcheckSlaA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#wanprof WantempSystemSdwanHealthcheckSlaA#wanprof}
  */
  readonly wanprof: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla fortimanager_wantemp_system_sdwan_healthcheck_sla}
*/
export class WantempSystemSdwanHealthcheckSlaA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_wantemp_system_sdwan_healthcheck_sla";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WantempSystemSdwanHealthcheckSlaA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WantempSystemSdwanHealthcheckSlaA to import
  * @param importFromId The id of the existing WantempSystemSdwanHealthcheckSlaA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WantempSystemSdwanHealthcheckSlaA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_wantemp_system_sdwan_healthcheck_sla", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_sdwan_healthcheck_sla fortimanager_wantemp_system_sdwan_healthcheck_sla} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WantempSystemSdwanHealthcheckSlaAConfig
  */
  public constructor(scope: Construct, id: string, config: WantempSystemSdwanHealthcheckSlaAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_wantemp_system_sdwan_healthcheck_sla',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._fosid = config.fosid;
    this._healthCheck = config.healthCheck;
    this._id = config.id;
    this._jitterThreshold = config.jitterThreshold;
    this._latencyThreshold = config.latencyThreshold;
    this._linkCostFactor = config.linkCostFactor;
    this._mosThreshold = config.mosThreshold;
    this._packetlossThreshold = config.packetlossThreshold;
    this._priorityInSla = config.priorityInSla;
    this._priorityOutSla = config.priorityOutSla;
    this._scopetype = config.scopetype;
    this._wanprof = config.wanprof;
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

  // health_check - computed: false, optional: false, required: true
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
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

  // jitter_threshold - computed: true, optional: true, required: false
  private _jitterThreshold?: number; 
  public get jitterThreshold() {
    return this.getNumberAttribute('jitter_threshold');
  }
  public set jitterThreshold(value: number) {
    this._jitterThreshold = value;
  }
  public resetJitterThreshold() {
    this._jitterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterThresholdInput() {
    return this._jitterThreshold;
  }

  // latency_threshold - computed: true, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // link_cost_factor - computed: true, optional: true, required: false
  private _linkCostFactor?: string[]; 
  public get linkCostFactor() {
    return cdktf.Fn.tolist(this.getListAttribute('link_cost_factor'));
  }
  public set linkCostFactor(value: string[]) {
    this._linkCostFactor = value;
  }
  public resetLinkCostFactor() {
    this._linkCostFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostFactorInput() {
    return this._linkCostFactor;
  }

  // mos_threshold - computed: true, optional: true, required: false
  private _mosThreshold?: string; 
  public get mosThreshold() {
    return this.getStringAttribute('mos_threshold');
  }
  public set mosThreshold(value: string) {
    this._mosThreshold = value;
  }
  public resetMosThreshold() {
    this._mosThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mosThresholdInput() {
    return this._mosThreshold;
  }

  // packetloss_threshold - computed: false, optional: true, required: false
  private _packetlossThreshold?: number; 
  public get packetlossThreshold() {
    return this.getNumberAttribute('packetloss_threshold');
  }
  public set packetlossThreshold(value: number) {
    this._packetlossThreshold = value;
  }
  public resetPacketlossThreshold() {
    this._packetlossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetlossThresholdInput() {
    return this._packetlossThreshold;
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

  // wanprof - computed: false, optional: false, required: true
  private _wanprof?: string; 
  public get wanprof() {
    return this.getStringAttribute('wanprof');
  }
  public set wanprof(value: string) {
    this._wanprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanprofInput() {
    return this._wanprof;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      fosid: cdktf.numberToTerraform(this._fosid),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      id: cdktf.stringToTerraform(this._id),
      jitter_threshold: cdktf.numberToTerraform(this._jitterThreshold),
      latency_threshold: cdktf.numberToTerraform(this._latencyThreshold),
      link_cost_factor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._linkCostFactor),
      mos_threshold: cdktf.stringToTerraform(this._mosThreshold),
      packetloss_threshold: cdktf.numberToTerraform(this._packetlossThreshold),
      priority_in_sla: cdktf.numberToTerraform(this._priorityInSla),
      priority_out_sla: cdktf.numberToTerraform(this._priorityOutSla),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      wanprof: cdktf.stringToTerraform(this._wanprof),
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
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
      jitter_threshold: {
        value: cdktf.numberToHclTerraform(this._jitterThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      latency_threshold: {
        value: cdktf.numberToHclTerraform(this._latencyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_cost_factor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._linkCostFactor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mos_threshold: {
        value: cdktf.stringToHclTerraform(this._mosThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packetloss_threshold: {
        value: cdktf.numberToHclTerraform(this._packetlossThreshold),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanprof: {
        value: cdktf.stringToHclTerraform(this._wanprof),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
