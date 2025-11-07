// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_view#id SnmpView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of SNMP view. Minimum length =  1 Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_view#name SnmpView#name}
  */
  readonly name: string;
  /**
  * Subtree associated with the SNMP view.A particular branch (subtree) of the MIB tree that you want to associate with this view.You must specify the subtree as an SNMP OID. Minimum length =  1 Maximum length =  256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_view#subtree SnmpView#subtree}
  */
  readonly subtree: string;
  /**
  * Include or Exclude the associated subtree . Values. true:Include, false: Exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_view#type SnmpView#type}
  */
  readonly type: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_view netscalersdx_snmp_view}
*/
export class SnmpView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_snmp_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpView to import
  * @param importFromId The id of the existing SnmpView that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_snmp_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_view netscalersdx_snmp_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpViewConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpViewConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_snmp_view',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
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
    this._name = config.name;
    this._subtree = config.subtree;
    this._type = config.type;
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

  // subtree - computed: false, optional: false, required: true
  private _subtree?: string; 
  public get subtree() {
    return this.getStringAttribute('subtree');
  }
  public set subtree(value: string) {
    this._subtree = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subtreeInput() {
    return this._subtree;
  }

  // type - computed: false, optional: false, required: true
  private _type?: boolean | cdktf.IResolvable; 
  public get type() {
    return this.getBooleanAttribute('type');
  }
  public set type(value: boolean | cdktf.IResolvable) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      subtree: cdktf.stringToTerraform(this._subtree),
      type: cdktf.booleanToTerraform(this._type),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subtree: {
        value: cdktf.stringToHclTerraform(this._subtree),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.booleanToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
