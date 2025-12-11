// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSnmpSysinfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#contact_info SystemSnmpSysinfo#contact_info}
  */
  readonly contactInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#description SystemSnmpSysinfo#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#engine_id SystemSnmpSysinfo#engine_id}
  */
  readonly engineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#fortianalyzer_legacy_sysoid SystemSnmpSysinfo#fortianalyzer_legacy_sysoid}
  */
  readonly fortianalyzerLegacySysoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#id SystemSnmpSysinfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#location SystemSnmpSysinfo#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#status SystemSnmpSysinfo#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#trap_cpu_high_exclude_nice_threshold SystemSnmpSysinfo#trap_cpu_high_exclude_nice_threshold}
  */
  readonly trapCpuHighExcludeNiceThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#trap_high_cpu_threshold SystemSnmpSysinfo#trap_high_cpu_threshold}
  */
  readonly trapHighCpuThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#trap_low_memory_threshold SystemSnmpSysinfo#trap_low_memory_threshold}
  */
  readonly trapLowMemoryThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo fortianalyzer_system_snmp_sysinfo}
*/
export class SystemSnmpSysinfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_snmp_sysinfo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSnmpSysinfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSnmpSysinfo to import
  * @param importFromId The id of the existing SystemSnmpSysinfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSnmpSysinfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_snmp_sysinfo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_snmp_sysinfo fortianalyzer_system_snmp_sysinfo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSnmpSysinfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSnmpSysinfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_snmp_sysinfo',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactInfo = config.contactInfo;
    this._description = config.description;
    this._engineId = config.engineId;
    this._fortianalyzerLegacySysoid = config.fortianalyzerLegacySysoid;
    this._id = config.id;
    this._location = config.location;
    this._status = config.status;
    this._trapCpuHighExcludeNiceThreshold = config.trapCpuHighExcludeNiceThreshold;
    this._trapHighCpuThreshold = config.trapHighCpuThreshold;
    this._trapLowMemoryThreshold = config.trapLowMemoryThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_info - computed: false, optional: true, required: false
  private _contactInfo?: string; 
  public get contactInfo() {
    return this.getStringAttribute('contact_info');
  }
  public set contactInfo(value: string) {
    this._contactInfo = value;
  }
  public resetContactInfo() {
    this._contactInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInfoInput() {
    return this._contactInfo;
  }

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

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // fortianalyzer_legacy_sysoid - computed: true, optional: true, required: false
  private _fortianalyzerLegacySysoid?: string; 
  public get fortianalyzerLegacySysoid() {
    return this.getStringAttribute('fortianalyzer_legacy_sysoid');
  }
  public set fortianalyzerLegacySysoid(value: string) {
    this._fortianalyzerLegacySysoid = value;
  }
  public resetFortianalyzerLegacySysoid() {
    this._fortianalyzerLegacySysoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortianalyzerLegacySysoidInput() {
    return this._fortianalyzerLegacySysoid;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // trap_cpu_high_exclude_nice_threshold - computed: true, optional: true, required: false
  private _trapCpuHighExcludeNiceThreshold?: number; 
  public get trapCpuHighExcludeNiceThreshold() {
    return this.getNumberAttribute('trap_cpu_high_exclude_nice_threshold');
  }
  public set trapCpuHighExcludeNiceThreshold(value: number) {
    this._trapCpuHighExcludeNiceThreshold = value;
  }
  public resetTrapCpuHighExcludeNiceThreshold() {
    this._trapCpuHighExcludeNiceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapCpuHighExcludeNiceThresholdInput() {
    return this._trapCpuHighExcludeNiceThreshold;
  }

  // trap_high_cpu_threshold - computed: true, optional: true, required: false
  private _trapHighCpuThreshold?: number; 
  public get trapHighCpuThreshold() {
    return this.getNumberAttribute('trap_high_cpu_threshold');
  }
  public set trapHighCpuThreshold(value: number) {
    this._trapHighCpuThreshold = value;
  }
  public resetTrapHighCpuThreshold() {
    this._trapHighCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapHighCpuThresholdInput() {
    return this._trapHighCpuThreshold;
  }

  // trap_low_memory_threshold - computed: true, optional: true, required: false
  private _trapLowMemoryThreshold?: number; 
  public get trapLowMemoryThreshold() {
    return this.getNumberAttribute('trap_low_memory_threshold');
  }
  public set trapLowMemoryThreshold(value: number) {
    this._trapLowMemoryThreshold = value;
  }
  public resetTrapLowMemoryThreshold() {
    this._trapLowMemoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapLowMemoryThresholdInput() {
    return this._trapLowMemoryThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_info: cdktf.stringToTerraform(this._contactInfo),
      description: cdktf.stringToTerraform(this._description),
      engine_id: cdktf.stringToTerraform(this._engineId),
      fortianalyzer_legacy_sysoid: cdktf.stringToTerraform(this._fortianalyzerLegacySysoid),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      status: cdktf.stringToTerraform(this._status),
      trap_cpu_high_exclude_nice_threshold: cdktf.numberToTerraform(this._trapCpuHighExcludeNiceThreshold),
      trap_high_cpu_threshold: cdktf.numberToTerraform(this._trapHighCpuThreshold),
      trap_low_memory_threshold: cdktf.numberToTerraform(this._trapLowMemoryThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_info: {
        value: cdktf.stringToHclTerraform(this._contactInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortianalyzer_legacy_sysoid: {
        value: cdktf.stringToHclTerraform(this._fortianalyzerLegacySysoid),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_cpu_high_exclude_nice_threshold: {
        value: cdktf.numberToHclTerraform(this._trapCpuHighExcludeNiceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_high_cpu_threshold: {
        value: cdktf.numberToHclTerraform(this._trapHighCpuThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_low_memory_threshold: {
        value: cdktf.numberToHclTerraform(this._trapLowMemoryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
