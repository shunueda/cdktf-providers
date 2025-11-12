// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowspecDscpConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'eq': Match only packets on a given DSCP; 'gt': Match only packets with a greater DSCP; 'lt': Match only packets with a lower DSCP; 'range': match only packets in the range of DSCPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp#dscp_attribute FlowspecDscp#dscp_attribute}
  */
  readonly dscpAttribute: string;
  /**
  * Specify the DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp#dscp_val FlowspecDscp#dscp_val}
  */
  readonly dscpVal: number;
  /**
  * Specify the DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp#dscp_val_end FlowspecDscp#dscp_val_end}
  */
  readonly dscpValEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp#id FlowspecDscp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp#name FlowspecDscp#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp#uuid FlowspecDscp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp thunder_flowspec_dscp}
*/
export class FlowspecDscp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_flowspec_dscp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowspecDscp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowspecDscp to import
  * @param importFromId The id of the existing FlowspecDscp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowspecDscp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_flowspec_dscp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_dscp thunder_flowspec_dscp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowspecDscpConfig
  */
  public constructor(scope: Construct, id: string, config: FlowspecDscpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_flowspec_dscp',
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
    this._dscpAttribute = config.dscpAttribute;
    this._dscpVal = config.dscpVal;
    this._dscpValEnd = config.dscpValEnd;
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dscp_attribute - computed: false, optional: false, required: true
  private _dscpAttribute?: string; 
  public get dscpAttribute() {
    return this.getStringAttribute('dscp_attribute');
  }
  public set dscpAttribute(value: string) {
    this._dscpAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpAttributeInput() {
    return this._dscpAttribute;
  }

  // dscp_val - computed: false, optional: false, required: true
  private _dscpVal?: number; 
  public get dscpVal() {
    return this.getNumberAttribute('dscp_val');
  }
  public set dscpVal(value: number) {
    this._dscpVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValInput() {
    return this._dscpVal;
  }

  // dscp_val_end - computed: false, optional: true, required: false
  private _dscpValEnd?: number; 
  public get dscpValEnd() {
    return this.getNumberAttribute('dscp_val_end');
  }
  public set dscpValEnd(value: number) {
    this._dscpValEnd = value;
  }
  public resetDscpValEnd() {
    this._dscpValEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValEndInput() {
    return this._dscpValEnd;
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
      dscp_attribute: cdktf.stringToTerraform(this._dscpAttribute),
      dscp_val: cdktf.numberToTerraform(this._dscpVal),
      dscp_val_end: cdktf.numberToTerraform(this._dscpValEnd),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dscp_attribute: {
        value: cdktf.stringToHclTerraform(this._dscpAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_val: {
        value: cdktf.numberToHclTerraform(this._dscpVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp_val_end: {
        value: cdktf.numberToHclTerraform(this._dscpValEnd),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
