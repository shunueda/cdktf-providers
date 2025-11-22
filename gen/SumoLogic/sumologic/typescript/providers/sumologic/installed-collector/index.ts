// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstalledCollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#category InstalledCollector#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#cutoff_timestamp InstalledCollector#cutoff_timestamp}
  */
  readonly cutoffTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#description InstalledCollector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#ephemeral InstalledCollector#ephemeral}
  */
  readonly ephemeral: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#fields InstalledCollector#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#host_name InstalledCollector#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#id InstalledCollector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#name InstalledCollector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#source_sync_mode InstalledCollector#source_sync_mode}
  */
  readonly sourceSyncMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#target_cpu InstalledCollector#target_cpu}
  */
  readonly targetCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#timezone InstalledCollector#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector sumologic_installed_collector}
*/
export class InstalledCollector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_installed_collector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstalledCollector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstalledCollector to import
  * @param importFromId The id of the existing InstalledCollector that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstalledCollector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_installed_collector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/installed_collector sumologic_installed_collector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstalledCollectorConfig
  */
  public constructor(scope: Construct, id: string, config: InstalledCollectorConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_installed_collector',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._cutoffTimestamp = config.cutoffTimestamp;
    this._description = config.description;
    this._ephemeral = config.ephemeral;
    this._fields = config.fields;
    this._hostName = config.hostName;
    this._id = config.id;
    this._name = config.name;
    this._sourceSyncMode = config.sourceSyncMode;
    this._targetCpu = config.targetCpu;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alive - computed: true, optional: false, required: false
  public get alive() {
    return this.getBooleanAttribute('alive');
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // collector_version - computed: true, optional: false, required: false
  public get collectorVersion() {
    return this.getStringAttribute('collector_version');
  }

  // cutoff_timestamp - computed: false, optional: true, required: false
  private _cutoffTimestamp?: number; 
  public get cutoffTimestamp() {
    return this.getNumberAttribute('cutoff_timestamp');
  }
  public set cutoffTimestamp(value: number) {
    this._cutoffTimestamp = value;
  }
  public resetCutoffTimestamp() {
    this._cutoffTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffTimestampInput() {
    return this._cutoffTimestamp;
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

  // ephemeral - computed: false, optional: false, required: true
  private _ephemeral?: boolean | cdktf.IResolvable; 
  public get ephemeral() {
    return this.getBooleanAttribute('ephemeral');
  }
  public set ephemeral(value: boolean | cdktf.IResolvable) {
    this._ephemeral = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // last_seen_alive - computed: true, optional: false, required: false
  public get lastSeenAlive() {
    return this.getNumberAttribute('last_seen_alive');
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

  // source_sync_mode - computed: false, optional: true, required: false
  private _sourceSyncMode?: string; 
  public get sourceSyncMode() {
    return this.getStringAttribute('source_sync_mode');
  }
  public set sourceSyncMode(value: string) {
    this._sourceSyncMode = value;
  }
  public resetSourceSyncMode() {
    this._sourceSyncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSyncModeInput() {
    return this._sourceSyncMode;
  }

  // target_cpu - computed: false, optional: true, required: false
  private _targetCpu?: number; 
  public get targetCpu() {
    return this.getNumberAttribute('target_cpu');
  }
  public set targetCpu(value: number) {
    this._targetCpu = value;
  }
  public resetTargetCpu() {
    this._targetCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCpuInput() {
    return this._targetCpu;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      cutoff_timestamp: cdktf.numberToTerraform(this._cutoffTimestamp),
      description: cdktf.stringToTerraform(this._description),
      ephemeral: cdktf.booleanToTerraform(this._ephemeral),
      fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._fields),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      source_sync_mode: cdktf.stringToTerraform(this._sourceSyncMode),
      target_cpu: cdktf.numberToTerraform(this._targetCpu),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cutoff_timestamp: {
        value: cdktf.numberToHclTerraform(this._cutoffTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ephemeral: {
        value: cdktf.booleanToHclTerraform(this._ephemeral),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._fields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_sync_mode: {
        value: cdktf.stringToHclTerraform(this._sourceSyncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_cpu: {
        value: cdktf.numberToHclTerraform(this._targetCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
