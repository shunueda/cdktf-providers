// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_a10_proprietary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SflowPollingA10ProprietaryAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Export deprecated counters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_a10_proprietary#export_deprecated_counters SflowPollingA10ProprietaryA#export_deprecated_counters}
  */
  readonly exportDeprecatedCounters?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_a10_proprietary#id SflowPollingA10ProprietaryA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_a10_proprietary#uuid SflowPollingA10ProprietaryA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_a10_proprietary thunder_sflow_polling_a10_proprietary}
*/
export class SflowPollingA10ProprietaryA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_polling_a10_proprietary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SflowPollingA10ProprietaryA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SflowPollingA10ProprietaryA to import
  * @param importFromId The id of the existing SflowPollingA10ProprietaryA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_a10_proprietary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SflowPollingA10ProprietaryA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_polling_a10_proprietary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_a10_proprietary thunder_sflow_polling_a10_proprietary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SflowPollingA10ProprietaryAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SflowPollingA10ProprietaryAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_polling_a10_proprietary',
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
    this._exportDeprecatedCounters = config.exportDeprecatedCounters;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_deprecated_counters - computed: false, optional: true, required: false
  private _exportDeprecatedCounters?: number; 
  public get exportDeprecatedCounters() {
    return this.getNumberAttribute('export_deprecated_counters');
  }
  public set exportDeprecatedCounters(value: number) {
    this._exportDeprecatedCounters = value;
  }
  public resetExportDeprecatedCounters() {
    this._exportDeprecatedCounters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDeprecatedCountersInput() {
    return this._exportDeprecatedCounters;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_deprecated_counters: cdktf.numberToTerraform(this._exportDeprecatedCounters),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_deprecated_counters: {
        value: cdktf.numberToHclTerraform(this._exportDeprecatedCounters),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
