// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciConcreteInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#annotation DataAciConcreteInterface#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#concrete_device_dn DataAciConcreteInterface#concrete_device_dn}
  */
  readonly concreteDeviceDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#description DataAciConcreteInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#encap DataAciConcreteInterface#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#id DataAciConcreteInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#name DataAciConcreteInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#name_alias DataAciConcreteInterface#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Create relation to fabric:PathEp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#relation_vns_rs_c_if_path_att DataAciConcreteInterface#relation_vns_rs_c_if_path_att}
  */
  readonly relationVnsRsCIfPathAtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#vnic_name DataAciConcreteInterface#vnic_name}
  */
  readonly vnicName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface aci_concrete_interface}
*/
export class DataAciConcreteInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_concrete_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciConcreteInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciConcreteInterface to import
  * @param importFromId The id of the existing DataAciConcreteInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciConcreteInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_concrete_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/concrete_interface aci_concrete_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciConcreteInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciConcreteInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_concrete_interface',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._concreteDeviceDn = config.concreteDeviceDn;
    this._description = config.description;
    this._encap = config.encap;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationVnsRsCIfPathAtt = config.relationVnsRsCIfPathAtt;
    this._vnicName = config.vnicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // concrete_device_dn - computed: false, optional: false, required: true
  private _concreteDeviceDn?: string; 
  public get concreteDeviceDn() {
    return this.getStringAttribute('concrete_device_dn');
  }
  public set concreteDeviceDn(value: string) {
    this._concreteDeviceDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concreteDeviceDnInput() {
    return this._concreteDeviceDn;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encap - computed: true, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // relation_vns_rs_c_if_path_att - computed: false, optional: true, required: false
  private _relationVnsRsCIfPathAtt?: string; 
  public get relationVnsRsCIfPathAtt() {
    return this.getStringAttribute('relation_vns_rs_c_if_path_att');
  }
  public set relationVnsRsCIfPathAtt(value: string) {
    this._relationVnsRsCIfPathAtt = value;
  }
  public resetRelationVnsRsCIfPathAtt() {
    this._relationVnsRsCIfPathAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsCIfPathAttInput() {
    return this._relationVnsRsCIfPathAtt;
  }

  // vnic_name - computed: true, optional: true, required: false
  private _vnicName?: string; 
  public get vnicName() {
    return this.getStringAttribute('vnic_name');
  }
  public set vnicName(value: string) {
    this._vnicName = value;
  }
  public resetVnicName() {
    this._vnicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicNameInput() {
    return this._vnicName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      concrete_device_dn: cdktf.stringToTerraform(this._concreteDeviceDn),
      description: cdktf.stringToTerraform(this._description),
      encap: cdktf.stringToTerraform(this._encap),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_vns_rs_c_if_path_att: cdktf.stringToTerraform(this._relationVnsRsCIfPathAtt),
      vnic_name: cdktf.stringToTerraform(this._vnicName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concrete_device_dn: {
        value: cdktf.stringToHclTerraform(this._concreteDeviceDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_c_if_path_att: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsCIfPathAtt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnic_name: {
        value: cdktf.stringToHclTerraform(this._vnicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
