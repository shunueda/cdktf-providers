// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/netprofile_natrule_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetprofileNatruleBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/netprofile_natrule_binding#id NetprofileNatruleBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/netprofile_natrule_binding#name NetprofileNatruleBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/netprofile_natrule_binding#natrule NetprofileNatruleBinding#natrule}
  */
  readonly natrule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/netprofile_natrule_binding#netmask NetprofileNatruleBinding#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/netprofile_natrule_binding#rewriteip NetprofileNatruleBinding#rewriteip}
  */
  readonly rewriteip?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/netprofile_natrule_binding citrixadc_netprofile_natrule_binding}
*/
export class NetprofileNatruleBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_netprofile_natrule_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetprofileNatruleBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetprofileNatruleBinding to import
  * @param importFromId The id of the existing NetprofileNatruleBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/netprofile_natrule_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetprofileNatruleBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_netprofile_natrule_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/netprofile_natrule_binding citrixadc_netprofile_natrule_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetprofileNatruleBindingConfig
  */
  public constructor(scope: Construct, id: string, config: NetprofileNatruleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_netprofile_natrule_binding',
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
    this._id = config.id;
    this._name = config.name;
    this._natrule = config.natrule;
    this._netmask = config.netmask;
    this._rewriteip = config.rewriteip;
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

  // natrule - computed: false, optional: false, required: true
  private _natrule?: string; 
  public get natrule() {
    return this.getStringAttribute('natrule');
  }
  public set natrule(value: string) {
    this._natrule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natruleInput() {
    return this._natrule;
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

  // rewriteip - computed: true, optional: true, required: false
  private _rewriteip?: string; 
  public get rewriteip() {
    return this.getStringAttribute('rewriteip');
  }
  public set rewriteip(value: string) {
    this._rewriteip = value;
  }
  public resetRewriteip() {
    this._rewriteip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteipInput() {
    return this._rewriteip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      natrule: cdktf.stringToTerraform(this._natrule),
      netmask: cdktf.stringToTerraform(this._netmask),
      rewriteip: cdktf.stringToTerraform(this._rewriteip),
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
      natrule: {
        value: cdktf.stringToHclTerraform(this._natrule),
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
      rewriteip: {
        value: cdktf.stringToHclTerraform(this._rewriteip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
