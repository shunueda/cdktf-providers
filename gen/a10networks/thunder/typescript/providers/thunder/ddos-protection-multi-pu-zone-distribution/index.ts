// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_multi_pu_zone_distribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosProtectionMultiPuZoneDistributionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_multi_pu_zone_distribution#id DdosProtectionMultiPuZoneDistributionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_multi_pu_zone_distribution#regular_rebalance DdosProtectionMultiPuZoneDistributionA#regular_rebalance}
  */
  readonly regularRebalance?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_multi_pu_zone_distribution#uuid DdosProtectionMultiPuZoneDistributionA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_multi_pu_zone_distribution thunder_ddos_protection_multi_pu_zone_distribution}
*/
export class DdosProtectionMultiPuZoneDistributionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_protection_multi_pu_zone_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosProtectionMultiPuZoneDistributionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosProtectionMultiPuZoneDistributionA to import
  * @param importFromId The id of the existing DdosProtectionMultiPuZoneDistributionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_multi_pu_zone_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosProtectionMultiPuZoneDistributionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_protection_multi_pu_zone_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_multi_pu_zone_distribution thunder_ddos_protection_multi_pu_zone_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosProtectionMultiPuZoneDistributionAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosProtectionMultiPuZoneDistributionAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_protection_multi_pu_zone_distribution',
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
    this._id = config.id;
    this._regularRebalance = config.regularRebalance;
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

  // regular_rebalance - computed: false, optional: true, required: false
  private _regularRebalance?: string; 
  public get regularRebalance() {
    return this.getStringAttribute('regular_rebalance');
  }
  public set regularRebalance(value: string) {
    this._regularRebalance = value;
  }
  public resetRegularRebalance() {
    this._regularRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularRebalanceInput() {
    return this._regularRebalance;
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
      regular_rebalance: cdktf.stringToTerraform(this._regularRebalance),
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
      regular_rebalance: {
        value: cdktf.stringToHclTerraform(this._regularRebalance),
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
