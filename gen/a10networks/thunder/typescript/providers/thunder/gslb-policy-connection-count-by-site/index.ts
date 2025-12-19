// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_connection_count_by_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbPolicyConnectionCountBySiteAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable connection-count-by-site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_connection_count_by_site#connection_count_enable GslbPolicyConnectionCountBySiteA#connection_count_enable}
  */
  readonly connectionCountEnable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_connection_count_by_site#id GslbPolicyConnectionCountBySiteA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_connection_count_by_site#policy_name GslbPolicyConnectionCountBySiteA#policy_name}
  */
  readonly policyName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_connection_count_by_site#uuid GslbPolicyConnectionCountBySiteA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_connection_count_by_site thunder_gslb_policy_connection_count_by_site}
*/
export class GslbPolicyConnectionCountBySiteA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_policy_connection_count_by_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbPolicyConnectionCountBySiteA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbPolicyConnectionCountBySiteA to import
  * @param importFromId The id of the existing GslbPolicyConnectionCountBySiteA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_connection_count_by_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbPolicyConnectionCountBySiteA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_policy_connection_count_by_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_connection_count_by_site thunder_gslb_policy_connection_count_by_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbPolicyConnectionCountBySiteAConfig
  */
  public constructor(scope: Construct, id: string, config: GslbPolicyConnectionCountBySiteAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_policy_connection_count_by_site',
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
    this._connectionCountEnable = config.connectionCountEnable;
    this._id = config.id;
    this._policyName = config.policyName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_count_enable - computed: false, optional: true, required: false
  private _connectionCountEnable?: number; 
  public get connectionCountEnable() {
    return this.getNumberAttribute('connection_count_enable');
  }
  public set connectionCountEnable(value: number) {
    this._connectionCountEnable = value;
  }
  public resetConnectionCountEnable() {
    this._connectionCountEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCountEnableInput() {
    return this._connectionCountEnable;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
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
      connection_count_enable: cdktf.numberToTerraform(this._connectionCountEnable),
      id: cdktf.stringToTerraform(this._id),
      policy_name: cdktf.stringToTerraform(this._policyName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_count_enable: {
        value: cdktf.numberToHclTerraform(this._connectionCountEnable),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
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
