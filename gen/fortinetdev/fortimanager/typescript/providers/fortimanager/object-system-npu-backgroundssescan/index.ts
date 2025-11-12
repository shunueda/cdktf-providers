// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuBackgroundssescanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#adom ObjectSystemNpuBackgroundssescan#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#id ObjectSystemNpuBackgroundssescan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#scan ObjectSystemNpuBackgroundssescan#scan}
  */
  readonly scan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#scan_stale ObjectSystemNpuBackgroundssescan#scan_stale}
  */
  readonly scanStale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#scan_vt ObjectSystemNpuBackgroundssescan#scan_vt}
  */
  readonly scanVt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#scopetype ObjectSystemNpuBackgroundssescan#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#stats_qual_access ObjectSystemNpuBackgroundssescan#stats_qual_access}
  */
  readonly statsQualAccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#stats_qual_duration ObjectSystemNpuBackgroundssescan#stats_qual_duration}
  */
  readonly statsQualDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#stats_update_interval ObjectSystemNpuBackgroundssescan#stats_update_interval}
  */
  readonly statsUpdateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#udp_keepalive_interval ObjectSystemNpuBackgroundssescan#udp_keepalive_interval}
  */
  readonly udpKeepaliveInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#udp_qual_access ObjectSystemNpuBackgroundssescan#udp_qual_access}
  */
  readonly udpQualAccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#udp_qual_duration ObjectSystemNpuBackgroundssescan#udp_qual_duration}
  */
  readonly udpQualDuration?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan fortimanager_object_system_npu_backgroundssescan}
*/
export class ObjectSystemNpuBackgroundssescan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_backgroundssescan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuBackgroundssescan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuBackgroundssescan to import
  * @param importFromId The id of the existing ObjectSystemNpuBackgroundssescan that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuBackgroundssescan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_backgroundssescan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_backgroundssescan fortimanager_object_system_npu_backgroundssescan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuBackgroundssescanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuBackgroundssescanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_backgroundssescan',
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
    this._id = config.id;
    this._scan = config.scan;
    this._scanStale = config.scanStale;
    this._scanVt = config.scanVt;
    this._scopetype = config.scopetype;
    this._statsQualAccess = config.statsQualAccess;
    this._statsQualDuration = config.statsQualDuration;
    this._statsUpdateInterval = config.statsUpdateInterval;
    this._udpKeepaliveInterval = config.udpKeepaliveInterval;
    this._udpQualAccess = config.udpQualAccess;
    this._udpQualDuration = config.udpQualDuration;
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

  // scan - computed: false, optional: true, required: false
  private _scan?: string; 
  public get scan() {
    return this.getStringAttribute('scan');
  }
  public set scan(value: string) {
    this._scan = value;
  }
  public resetScan() {
    this._scan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanInput() {
    return this._scan;
  }

  // scan_stale - computed: false, optional: true, required: false
  private _scanStale?: number; 
  public get scanStale() {
    return this.getNumberAttribute('scan_stale');
  }
  public set scanStale(value: number) {
    this._scanStale = value;
  }
  public resetScanStale() {
    this._scanStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanStaleInput() {
    return this._scanStale;
  }

  // scan_vt - computed: false, optional: true, required: false
  private _scanVt?: number; 
  public get scanVt() {
    return this.getNumberAttribute('scan_vt');
  }
  public set scanVt(value: number) {
    this._scanVt = value;
  }
  public resetScanVt() {
    this._scanVt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanVtInput() {
    return this._scanVt;
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

  // stats_qual_access - computed: false, optional: true, required: false
  private _statsQualAccess?: number; 
  public get statsQualAccess() {
    return this.getNumberAttribute('stats_qual_access');
  }
  public set statsQualAccess(value: number) {
    this._statsQualAccess = value;
  }
  public resetStatsQualAccess() {
    this._statsQualAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsQualAccessInput() {
    return this._statsQualAccess;
  }

  // stats_qual_duration - computed: false, optional: true, required: false
  private _statsQualDuration?: number; 
  public get statsQualDuration() {
    return this.getNumberAttribute('stats_qual_duration');
  }
  public set statsQualDuration(value: number) {
    this._statsQualDuration = value;
  }
  public resetStatsQualDuration() {
    this._statsQualDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsQualDurationInput() {
    return this._statsQualDuration;
  }

  // stats_update_interval - computed: false, optional: true, required: false
  private _statsUpdateInterval?: number; 
  public get statsUpdateInterval() {
    return this.getNumberAttribute('stats_update_interval');
  }
  public set statsUpdateInterval(value: number) {
    this._statsUpdateInterval = value;
  }
  public resetStatsUpdateInterval() {
    this._statsUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsUpdateIntervalInput() {
    return this._statsUpdateInterval;
  }

  // udp_keepalive_interval - computed: false, optional: true, required: false
  private _udpKeepaliveInterval?: number; 
  public get udpKeepaliveInterval() {
    return this.getNumberAttribute('udp_keepalive_interval');
  }
  public set udpKeepaliveInterval(value: number) {
    this._udpKeepaliveInterval = value;
  }
  public resetUdpKeepaliveInterval() {
    this._udpKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpKeepaliveIntervalInput() {
    return this._udpKeepaliveInterval;
  }

  // udp_qual_access - computed: false, optional: true, required: false
  private _udpQualAccess?: number; 
  public get udpQualAccess() {
    return this.getNumberAttribute('udp_qual_access');
  }
  public set udpQualAccess(value: number) {
    this._udpQualAccess = value;
  }
  public resetUdpQualAccess() {
    this._udpQualAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpQualAccessInput() {
    return this._udpQualAccess;
  }

  // udp_qual_duration - computed: false, optional: true, required: false
  private _udpQualDuration?: number; 
  public get udpQualDuration() {
    return this.getNumberAttribute('udp_qual_duration');
  }
  public set udpQualDuration(value: number) {
    this._udpQualDuration = value;
  }
  public resetUdpQualDuration() {
    this._udpQualDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpQualDurationInput() {
    return this._udpQualDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      scan: cdktf.stringToTerraform(this._scan),
      scan_stale: cdktf.numberToTerraform(this._scanStale),
      scan_vt: cdktf.numberToTerraform(this._scanVt),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      stats_qual_access: cdktf.numberToTerraform(this._statsQualAccess),
      stats_qual_duration: cdktf.numberToTerraform(this._statsQualDuration),
      stats_update_interval: cdktf.numberToTerraform(this._statsUpdateInterval),
      udp_keepalive_interval: cdktf.numberToTerraform(this._udpKeepaliveInterval),
      udp_qual_access: cdktf.numberToTerraform(this._udpQualAccess),
      udp_qual_duration: cdktf.numberToTerraform(this._udpQualDuration),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan: {
        value: cdktf.stringToHclTerraform(this._scan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_stale: {
        value: cdktf.numberToHclTerraform(this._scanStale),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_vt: {
        value: cdktf.numberToHclTerraform(this._scanVt),
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
      stats_qual_access: {
        value: cdktf.numberToHclTerraform(this._statsQualAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats_qual_duration: {
        value: cdktf.numberToHclTerraform(this._statsQualDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats_update_interval: {
        value: cdktf.numberToHclTerraform(this._statsUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._udpKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_qual_access: {
        value: cdktf.numberToHclTerraform(this._udpQualAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_qual_duration: {
        value: cdktf.numberToHclTerraform(this._udpQualDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
