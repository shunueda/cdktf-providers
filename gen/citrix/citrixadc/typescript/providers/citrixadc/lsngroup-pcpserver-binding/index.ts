// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsngroup_pcpserver_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsngroupPcpserverBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsngroup_pcpserver_binding#groupname LsngroupPcpserverBinding#groupname}
  */
  readonly groupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsngroup_pcpserver_binding#id LsngroupPcpserverBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsngroup_pcpserver_binding#pcpserver LsngroupPcpserverBinding#pcpserver}
  */
  readonly pcpserver: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsngroup_pcpserver_binding citrixadc_lsngroup_pcpserver_binding}
*/
export class LsngroupPcpserverBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsngroup_pcpserver_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LsngroupPcpserverBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LsngroupPcpserverBinding to import
  * @param importFromId The id of the existing LsngroupPcpserverBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsngroup_pcpserver_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LsngroupPcpserverBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsngroup_pcpserver_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsngroup_pcpserver_binding citrixadc_lsngroup_pcpserver_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsngroupPcpserverBindingConfig
  */
  public constructor(scope: Construct, id: string, config: LsngroupPcpserverBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsngroup_pcpserver_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupname = config.groupname;
    this._id = config.id;
    this._pcpserver = config.pcpserver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groupname - computed: false, optional: false, required: true
  private _groupname?: string; 
  public get groupname() {
    return this.getStringAttribute('groupname');
  }
  public set groupname(value: string) {
    this._groupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnameInput() {
    return this._groupname;
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

  // pcpserver - computed: false, optional: false, required: true
  private _pcpserver?: string; 
  public get pcpserver() {
    return this.getStringAttribute('pcpserver');
  }
  public set pcpserver(value: string) {
    this._pcpserver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpserverInput() {
    return this._pcpserver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      groupname: cdktf.stringToTerraform(this._groupname),
      id: cdktf.stringToTerraform(this._id),
      pcpserver: cdktf.stringToTerraform(this._pcpserver),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      groupname: {
        value: cdktf.stringToHclTerraform(this._groupname),
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
      pcpserver: {
        value: cdktf.stringToHclTerraform(this._pcpserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
