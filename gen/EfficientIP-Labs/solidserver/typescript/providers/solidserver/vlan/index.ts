// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The class associated to the vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan#class Vlan#class}
  */
  readonly class?: string;
  /**
  * The class parameters associated to vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan#class_parameters Vlan#class_parameters}
  */
  readonly classParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan#id Vlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the vlan to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan#name Vlan#name}
  */
  readonly name: string;
  /**
  * The optionally requested vlan ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan#request_id Vlan#request_id}
  */
  readonly requestId?: number;
  /**
  * The name of the vlan Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan#vlan_domain Vlan#vlan_domain}
  */
  readonly vlanDomain: string;
  /**
  * The name of the vlan Range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan#vlan_range Vlan#vlan_range}
  */
  readonly vlanRange?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan solidserver_vlan}
*/
export class Vlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vlan to import
  * @param importFromId The id of the existing Vlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/vlan solidserver_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanConfig
  */
  public constructor(scope: Construct, id: string, config: VlanConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_vlan',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25'
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
    this._requestId = config.requestId;
    this._vlanDomain = config.vlanDomain;
    this._vlanRange = config.vlanRange;
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

  // request_id - computed: false, optional: true, required: false
  private _requestId?: number; 
  public get requestId() {
    return this.getNumberAttribute('request_id');
  }
  public set requestId(value: number) {
    this._requestId = value;
  }
  public resetRequestId() {
    this._requestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // vlan_domain - computed: false, optional: false, required: true
  private _vlanDomain?: string; 
  public get vlanDomain() {
    return this.getStringAttribute('vlan_domain');
  }
  public set vlanDomain(value: string) {
    this._vlanDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanDomainInput() {
    return this._vlanDomain;
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_range - computed: false, optional: true, required: false
  private _vlanRange?: string; 
  public get vlanRange() {
    return this.getStringAttribute('vlan_range');
  }
  public set vlanRange(value: string) {
    this._vlanRange = value;
  }
  public resetVlanRange() {
    this._vlanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanRangeInput() {
    return this._vlanRange;
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
      request_id: cdktf.numberToTerraform(this._requestId),
      vlan_domain: cdktf.stringToTerraform(this._vlanDomain),
      vlan_range: cdktf.stringToTerraform(this._vlanRange),
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
      request_id: {
        value: cdktf.numberToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_domain: {
        value: cdktf.stringToHclTerraform(this._vlanDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_range: {
        value: cdktf.stringToHclTerraform(this._vlanRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
