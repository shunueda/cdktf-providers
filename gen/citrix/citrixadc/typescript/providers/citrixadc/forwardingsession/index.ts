// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingsessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#acl6name Forwardingsession#acl6name}
  */
  readonly acl6Name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#aclname Forwardingsession#aclname}
  */
  readonly aclname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#connfailover Forwardingsession#connfailover}
  */
  readonly connfailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#id Forwardingsession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#name Forwardingsession#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#netmask Forwardingsession#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#network Forwardingsession#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#processlocal Forwardingsession#processlocal}
  */
  readonly processlocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#sourceroutecache Forwardingsession#sourceroutecache}
  */
  readonly sourceroutecache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#td Forwardingsession#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession citrixadc_forwardingsession}
*/
export class Forwardingsession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_forwardingsession";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Forwardingsession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Forwardingsession to import
  * @param importFromId The id of the existing Forwardingsession that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Forwardingsession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_forwardingsession", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/forwardingsession citrixadc_forwardingsession} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingsessionConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardingsessionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_forwardingsession',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl6Name = config.acl6Name;
    this._aclname = config.aclname;
    this._connfailover = config.connfailover;
    this._id = config.id;
    this._name = config.name;
    this._netmask = config.netmask;
    this._network = config.network;
    this._processlocal = config.processlocal;
    this._sourceroutecache = config.sourceroutecache;
    this._td = config.td;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl6name - computed: true, optional: true, required: false
  private _acl6Name?: string; 
  public get acl6Name() {
    return this.getStringAttribute('acl6name');
  }
  public set acl6Name(value: string) {
    this._acl6Name = value;
  }
  public resetAcl6Name() {
    this._acl6Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acl6NameInput() {
    return this._acl6Name;
  }

  // aclname - computed: true, optional: true, required: false
  private _aclname?: string; 
  public get aclname() {
    return this.getStringAttribute('aclname');
  }
  public set aclname(value: string) {
    this._aclname = value;
  }
  public resetAclname() {
    this._aclname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclnameInput() {
    return this._aclname;
  }

  // connfailover - computed: true, optional: true, required: false
  private _connfailover?: string; 
  public get connfailover() {
    return this.getStringAttribute('connfailover');
  }
  public set connfailover(value: string) {
    this._connfailover = value;
  }
  public resetConnfailover() {
    this._connfailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connfailoverInput() {
    return this._connfailover;
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

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // processlocal - computed: true, optional: true, required: false
  private _processlocal?: string; 
  public get processlocal() {
    return this.getStringAttribute('processlocal');
  }
  public set processlocal(value: string) {
    this._processlocal = value;
  }
  public resetProcesslocal() {
    this._processlocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processlocalInput() {
    return this._processlocal;
  }

  // sourceroutecache - computed: true, optional: true, required: false
  private _sourceroutecache?: string; 
  public get sourceroutecache() {
    return this.getStringAttribute('sourceroutecache');
  }
  public set sourceroutecache(value: string) {
    this._sourceroutecache = value;
  }
  public resetSourceroutecache() {
    this._sourceroutecache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceroutecacheInput() {
    return this._sourceroutecache;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl6name: cdktf.stringToTerraform(this._acl6Name),
      aclname: cdktf.stringToTerraform(this._aclname),
      connfailover: cdktf.stringToTerraform(this._connfailover),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.stringToTerraform(this._netmask),
      network: cdktf.stringToTerraform(this._network),
      processlocal: cdktf.stringToTerraform(this._processlocal),
      sourceroutecache: cdktf.stringToTerraform(this._sourceroutecache),
      td: cdktf.numberToTerraform(this._td),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl6name: {
        value: cdktf.stringToHclTerraform(this._acl6Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aclname: {
        value: cdktf.stringToHclTerraform(this._aclname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connfailover: {
        value: cdktf.stringToHclTerraform(this._connfailover),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processlocal: {
        value: cdktf.stringToHclTerraform(this._processlocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sourceroutecache: {
        value: cdktf.stringToHclTerraform(this._sourceroutecache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
