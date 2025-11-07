// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemsnmpSysinfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#append_index SystemsnmpSysinfo#append_index}
  */
  readonly appendIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#contact_info SystemsnmpSysinfo#contact_info}
  */
  readonly contactInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#description SystemsnmpSysinfo#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#engine_id SystemsnmpSysinfo#engine_id}
  */
  readonly engineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#engine_id_type SystemsnmpSysinfo#engine_id_type}
  */
  readonly engineIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#id SystemsnmpSysinfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#location SystemsnmpSysinfo#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#non_mgmt_vdom_query SystemsnmpSysinfo#non_mgmt_vdom_query}
  */
  readonly nonMgmtVdomQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#status SystemsnmpSysinfo#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#trap_free_memory_threshold SystemsnmpSysinfo#trap_free_memory_threshold}
  */
  readonly trapFreeMemoryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#trap_freeable_memory_threshold SystemsnmpSysinfo#trap_freeable_memory_threshold}
  */
  readonly trapFreeableMemoryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#trap_high_cpu_threshold SystemsnmpSysinfo#trap_high_cpu_threshold}
  */
  readonly trapHighCpuThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#trap_log_full_threshold SystemsnmpSysinfo#trap_log_full_threshold}
  */
  readonly trapLogFullThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#trap_low_memory_threshold SystemsnmpSysinfo#trap_low_memory_threshold}
  */
  readonly trapLowMemoryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#vdomparam SystemsnmpSysinfo#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo fortios_systemsnmp_sysinfo}
*/
export class SystemsnmpSysinfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_systemsnmp_sysinfo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemsnmpSysinfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemsnmpSysinfo to import
  * @param importFromId The id of the existing SystemsnmpSysinfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemsnmpSysinfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_systemsnmp_sysinfo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_sysinfo fortios_systemsnmp_sysinfo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemsnmpSysinfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemsnmpSysinfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_systemsnmp_sysinfo',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appendIndex = config.appendIndex;
    this._contactInfo = config.contactInfo;
    this._description = config.description;
    this._engineId = config.engineId;
    this._engineIdType = config.engineIdType;
    this._id = config.id;
    this._location = config.location;
    this._nonMgmtVdomQuery = config.nonMgmtVdomQuery;
    this._status = config.status;
    this._trapFreeMemoryThreshold = config.trapFreeMemoryThreshold;
    this._trapFreeableMemoryThreshold = config.trapFreeableMemoryThreshold;
    this._trapHighCpuThreshold = config.trapHighCpuThreshold;
    this._trapLogFullThreshold = config.trapLogFullThreshold;
    this._trapLowMemoryThreshold = config.trapLowMemoryThreshold;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_index - computed: true, optional: true, required: false
  private _appendIndex?: string; 
  public get appendIndex() {
    return this.getStringAttribute('append_index');
  }
  public set appendIndex(value: string) {
    this._appendIndex = value;
  }
  public resetAppendIndex() {
    this._appendIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendIndexInput() {
    return this._appendIndex;
  }

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

  // engine_id_type - computed: true, optional: true, required: false
  private _engineIdType?: string; 
  public get engineIdType() {
    return this.getStringAttribute('engine_id_type');
  }
  public set engineIdType(value: string) {
    this._engineIdType = value;
  }
  public resetEngineIdType() {
    this._engineIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdTypeInput() {
    return this._engineIdType;
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

  // non_mgmt_vdom_query - computed: true, optional: true, required: false
  private _nonMgmtVdomQuery?: string; 
  public get nonMgmtVdomQuery() {
    return this.getStringAttribute('non_mgmt_vdom_query');
  }
  public set nonMgmtVdomQuery(value: string) {
    this._nonMgmtVdomQuery = value;
  }
  public resetNonMgmtVdomQuery() {
    this._nonMgmtVdomQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonMgmtVdomQueryInput() {
    return this._nonMgmtVdomQuery;
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

  // trap_free_memory_threshold - computed: true, optional: true, required: false
  private _trapFreeMemoryThreshold?: number; 
  public get trapFreeMemoryThreshold() {
    return this.getNumberAttribute('trap_free_memory_threshold');
  }
  public set trapFreeMemoryThreshold(value: number) {
    this._trapFreeMemoryThreshold = value;
  }
  public resetTrapFreeMemoryThreshold() {
    this._trapFreeMemoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapFreeMemoryThresholdInput() {
    return this._trapFreeMemoryThreshold;
  }

  // trap_freeable_memory_threshold - computed: true, optional: true, required: false
  private _trapFreeableMemoryThreshold?: number; 
  public get trapFreeableMemoryThreshold() {
    return this.getNumberAttribute('trap_freeable_memory_threshold');
  }
  public set trapFreeableMemoryThreshold(value: number) {
    this._trapFreeableMemoryThreshold = value;
  }
  public resetTrapFreeableMemoryThreshold() {
    this._trapFreeableMemoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapFreeableMemoryThresholdInput() {
    return this._trapFreeableMemoryThreshold;
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

  // trap_log_full_threshold - computed: true, optional: true, required: false
  private _trapLogFullThreshold?: number; 
  public get trapLogFullThreshold() {
    return this.getNumberAttribute('trap_log_full_threshold');
  }
  public set trapLogFullThreshold(value: number) {
    this._trapLogFullThreshold = value;
  }
  public resetTrapLogFullThreshold() {
    this._trapLogFullThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapLogFullThresholdInput() {
    return this._trapLogFullThreshold;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append_index: cdktf.stringToTerraform(this._appendIndex),
      contact_info: cdktf.stringToTerraform(this._contactInfo),
      description: cdktf.stringToTerraform(this._description),
      engine_id: cdktf.stringToTerraform(this._engineId),
      engine_id_type: cdktf.stringToTerraform(this._engineIdType),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      non_mgmt_vdom_query: cdktf.stringToTerraform(this._nonMgmtVdomQuery),
      status: cdktf.stringToTerraform(this._status),
      trap_free_memory_threshold: cdktf.numberToTerraform(this._trapFreeMemoryThreshold),
      trap_freeable_memory_threshold: cdktf.numberToTerraform(this._trapFreeableMemoryThreshold),
      trap_high_cpu_threshold: cdktf.numberToTerraform(this._trapHighCpuThreshold),
      trap_log_full_threshold: cdktf.numberToTerraform(this._trapLogFullThreshold),
      trap_low_memory_threshold: cdktf.numberToTerraform(this._trapLowMemoryThreshold),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append_index: {
        value: cdktf.stringToHclTerraform(this._appendIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      engine_id_type: {
        value: cdktf.stringToHclTerraform(this._engineIdType),
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
      non_mgmt_vdom_query: {
        value: cdktf.stringToHclTerraform(this._nonMgmtVdomQuery),
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
      trap_free_memory_threshold: {
        value: cdktf.numberToHclTerraform(this._trapFreeMemoryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_freeable_memory_threshold: {
        value: cdktf.numberToHclTerraform(this._trapFreeableMemoryThreshold),
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
      trap_log_full_threshold: {
        value: cdktf.numberToHclTerraform(this._trapLogFullThreshold),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
