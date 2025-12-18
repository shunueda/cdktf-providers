// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/clusternode_routemonitor_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusternodeRoutemonitorBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/clusternode_routemonitor_binding#id ClusternodeRoutemonitorBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/clusternode_routemonitor_binding#netmask ClusternodeRoutemonitorBinding#netmask}
  */
  readonly netmask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/clusternode_routemonitor_binding#nodeid ClusternodeRoutemonitorBinding#nodeid}
  */
  readonly nodeid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/clusternode_routemonitor_binding#routemonitor ClusternodeRoutemonitorBinding#routemonitor}
  */
  readonly routemonitor: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/clusternode_routemonitor_binding citrixadc_clusternode_routemonitor_binding}
*/
export class ClusternodeRoutemonitorBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_clusternode_routemonitor_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusternodeRoutemonitorBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusternodeRoutemonitorBinding to import
  * @param importFromId The id of the existing ClusternodeRoutemonitorBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/clusternode_routemonitor_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusternodeRoutemonitorBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_clusternode_routemonitor_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/clusternode_routemonitor_binding citrixadc_clusternode_routemonitor_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusternodeRoutemonitorBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ClusternodeRoutemonitorBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_clusternode_routemonitor_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._netmask = config.netmask;
    this._nodeid = config.nodeid;
    this._routemonitor = config.routemonitor;
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

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // nodeid - computed: false, optional: false, required: true
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // routemonitor - computed: false, optional: false, required: true
  private _routemonitor?: string; 
  public get routemonitor() {
    return this.getStringAttribute('routemonitor');
  }
  public set routemonitor(value: string) {
    this._routemonitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routemonitorInput() {
    return this._routemonitor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      netmask: cdktf.stringToTerraform(this._netmask),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      routemonitor: cdktf.stringToTerraform(this._routemonitor),
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
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routemonitor: {
        value: cdktf.stringToHclTerraform(this._routemonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
