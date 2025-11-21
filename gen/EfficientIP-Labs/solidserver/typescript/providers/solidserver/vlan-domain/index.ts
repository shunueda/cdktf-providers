// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/vlan_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The class associated to the VLAN Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/vlan_domain#class VlanDomain#class}
  */
  readonly class?: string;
  /**
  * The class parameters associated to VLAN Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/vlan_domain#class_parameters VlanDomain#class_parameters}
  */
  readonly classParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/vlan_domain#id VlanDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the VLAN Domain to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/vlan_domain#name VlanDomain#name}
  */
  readonly name: string;
  /**
  * Specify if the VLAN Domain is a VXLAN Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/vlan_domain#vxlan VlanDomain#vxlan}
  */
  readonly vxlan?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/vlan_domain solidserver_vlan_domain}
*/
export class VlanDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_vlan_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanDomain to import
  * @param importFromId The id of the existing VlanDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/vlan_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_vlan_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/vlan_domain solidserver_vlan_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanDomainConfig
  */
  public constructor(scope: Construct, id: string, config: VlanDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_vlan_domain',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.26',
        providerVersionConstraint: '1.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._class = config.class;
    this._classParameters = config.classParameters;
    this._id = config.id;
    this._name = config.name;
    this._vxlan = config.vxlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // class_parameters - computed: false, optional: true, required: false
  private _classParameters?: { [key: string]: string }; 
  public get classParameters() {
    return this.getStringMapAttribute('class_parameters');
  }
  public set classParameters(value: { [key: string]: string }) {
    this._classParameters = value;
  }
  public resetClassParameters() {
    this._classParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classParametersInput() {
    return this._classParameters;
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

  // vxlan - computed: false, optional: true, required: false
  private _vxlan?: boolean | cdktf.IResolvable; 
  public get vxlan() {
    return this.getBooleanAttribute('vxlan');
  }
  public set vxlan(value: boolean | cdktf.IResolvable) {
    this._vxlan = value;
  }
  public resetVxlan() {
    this._vxlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanInput() {
    return this._vxlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class: cdktf.stringToTerraform(this._class),
      class_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._classParameters),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vxlan: cdktf.booleanToTerraform(this._vxlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class: {
        value: cdktf.stringToHclTerraform(this._class),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._classParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      vxlan: {
        value: cdktf.booleanToHclTerraform(this._vxlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
