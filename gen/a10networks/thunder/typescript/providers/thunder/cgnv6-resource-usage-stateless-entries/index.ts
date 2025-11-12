// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage_stateless_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6ResourceUsageStatelessEntriesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage_stateless_entries#id Cgnv6ResourceUsageStatelessEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Helper size for CGN Stateless Technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage_stateless_entries#l4_session_count Cgnv6ResourceUsageStatelessEntriesA#l4_session_count}
  */
  readonly l4SessionCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage_stateless_entries#uuid Cgnv6ResourceUsageStatelessEntriesA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage_stateless_entries thunder_cgnv6_resource_usage_stateless_entries}
*/
export class Cgnv6ResourceUsageStatelessEntriesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_resource_usage_stateless_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6ResourceUsageStatelessEntriesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6ResourceUsageStatelessEntriesA to import
  * @param importFromId The id of the existing Cgnv6ResourceUsageStatelessEntriesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage_stateless_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6ResourceUsageStatelessEntriesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_resource_usage_stateless_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_resource_usage_stateless_entries thunder_cgnv6_resource_usage_stateless_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6ResourceUsageStatelessEntriesAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6ResourceUsageStatelessEntriesAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_resource_usage_stateless_entries',
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
    this._id = config.id;
    this._l4SessionCount = config.l4SessionCount;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // l4_session_count - computed: false, optional: true, required: false
  private _l4SessionCount?: number; 
  public get l4SessionCount() {
    return this.getNumberAttribute('l4_session_count');
  }
  public set l4SessionCount(value: number) {
    this._l4SessionCount = value;
  }
  public resetL4SessionCount() {
    this._l4SessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionCountInput() {
    return this._l4SessionCount;
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
      id: cdktf.stringToTerraform(this._id),
      l4_session_count: cdktf.numberToTerraform(this._l4SessionCount),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_session_count: {
        value: cdktf.numberToHclTerraform(this._l4SessionCount),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
