// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/harmony_controller_profile_re_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HarmonyControllerProfileReSyncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * re-sync analtyics bus connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/harmony_controller_profile_re_sync#analytics_bus HarmonyControllerProfileReSyncA#analytics_bus}
  */
  readonly analyticsBus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/harmony_controller_profile_re_sync#id HarmonyControllerProfileReSyncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * re-sync the schema registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/harmony_controller_profile_re_sync#schema_registry HarmonyControllerProfileReSyncA#schema_registry}
  */
  readonly schemaRegistry?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/harmony_controller_profile_re_sync thunder_harmony_controller_profile_re_sync}
*/
export class HarmonyControllerProfileReSyncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_harmony_controller_profile_re_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HarmonyControllerProfileReSyncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HarmonyControllerProfileReSyncA to import
  * @param importFromId The id of the existing HarmonyControllerProfileReSyncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/harmony_controller_profile_re_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HarmonyControllerProfileReSyncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_harmony_controller_profile_re_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/harmony_controller_profile_re_sync thunder_harmony_controller_profile_re_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HarmonyControllerProfileReSyncAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HarmonyControllerProfileReSyncAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_harmony_controller_profile_re_sync',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsBus = config.analyticsBus;
    this._id = config.id;
    this._schemaRegistry = config.schemaRegistry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_bus - computed: false, optional: true, required: false
  private _analyticsBus?: number; 
  public get analyticsBus() {
    return this.getNumberAttribute('analytics_bus');
  }
  public set analyticsBus(value: number) {
    this._analyticsBus = value;
  }
  public resetAnalyticsBus() {
    this._analyticsBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsBusInput() {
    return this._analyticsBus;
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

  // schema_registry - computed: false, optional: true, required: false
  private _schemaRegistry?: number; 
  public get schemaRegistry() {
    return this.getNumberAttribute('schema_registry');
  }
  public set schemaRegistry(value: number) {
    this._schemaRegistry = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_bus: cdktf.numberToTerraform(this._analyticsBus),
      id: cdktf.stringToTerraform(this._id),
      schema_registry: cdktf.numberToTerraform(this._schemaRegistry),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_bus: {
        value: cdktf.numberToHclTerraform(this._analyticsBus),
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
      schema_registry: {
        value: cdktf.numberToHclTerraform(this._schemaRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
