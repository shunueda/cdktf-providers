// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_dns_response_rate_limiting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbCommonDnsResponseRateLimitingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_dns_response_rate_limiting#id SlbCommonDnsResponseRateLimitingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of entries allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_dns_response_rate_limiting#max_table_entries SlbCommonDnsResponseRateLimitingA#max_table_entries}
  */
  readonly maxTableEntries?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_dns_response_rate_limiting#uuid SlbCommonDnsResponseRateLimitingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_dns_response_rate_limiting thunder_slb_common_dns_response_rate_limiting}
*/
export class SlbCommonDnsResponseRateLimitingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_common_dns_response_rate_limiting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbCommonDnsResponseRateLimitingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbCommonDnsResponseRateLimitingA to import
  * @param importFromId The id of the existing SlbCommonDnsResponseRateLimitingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_dns_response_rate_limiting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbCommonDnsResponseRateLimitingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_common_dns_response_rate_limiting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_dns_response_rate_limiting thunder_slb_common_dns_response_rate_limiting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbCommonDnsResponseRateLimitingAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbCommonDnsResponseRateLimitingAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_common_dns_response_rate_limiting',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._maxTableEntries = config.maxTableEntries;
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

  // max_table_entries - computed: false, optional: true, required: false
  private _maxTableEntries?: number; 
  public get maxTableEntries() {
    return this.getNumberAttribute('max_table_entries');
  }
  public set maxTableEntries(value: number) {
    this._maxTableEntries = value;
  }
  public resetMaxTableEntries() {
    this._maxTableEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTableEntriesInput() {
    return this._maxTableEntries;
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
      max_table_entries: cdktf.numberToTerraform(this._maxTableEntries),
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
      max_table_entries: {
        value: cdktf.numberToHclTerraform(this._maxTableEntries),
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
