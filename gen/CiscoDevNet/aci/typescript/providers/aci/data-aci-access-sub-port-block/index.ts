// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciAccessSubPortBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#access_port_selector_dn DataAciAccessSubPortBlock#access_port_selector_dn}
  */
  readonly accessPortSelectorDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#annotation DataAciAccessSubPortBlock#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#description DataAciAccessSubPortBlock#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#from_card DataAciAccessSubPortBlock#from_card}
  */
  readonly fromCard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#from_port DataAciAccessSubPortBlock#from_port}
  */
  readonly fromPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#from_sub_port DataAciAccessSubPortBlock#from_sub_port}
  */
  readonly fromSubPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#id DataAciAccessSubPortBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#name DataAciAccessSubPortBlock#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#name_alias DataAciAccessSubPortBlock#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#to_card DataAciAccessSubPortBlock#to_card}
  */
  readonly toCard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#to_port DataAciAccessSubPortBlock#to_port}
  */
  readonly toPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#to_sub_port DataAciAccessSubPortBlock#to_sub_port}
  */
  readonly toSubPort?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block aci_access_sub_port_block}
*/
export class DataAciAccessSubPortBlock extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_access_sub_port_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciAccessSubPortBlock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciAccessSubPortBlock to import
  * @param importFromId The id of the existing DataAciAccessSubPortBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciAccessSubPortBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_access_sub_port_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/access_sub_port_block aci_access_sub_port_block} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciAccessSubPortBlockConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciAccessSubPortBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_access_sub_port_block',
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
    this._accessPortSelectorDn = config.accessPortSelectorDn;
    this._annotation = config.annotation;
    this._description = config.description;
    this._fromCard = config.fromCard;
    this._fromPort = config.fromPort;
    this._fromSubPort = config.fromSubPort;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._toCard = config.toCard;
    this._toPort = config.toPort;
    this._toSubPort = config.toSubPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_port_selector_dn - computed: false, optional: false, required: true
  private _accessPortSelectorDn?: string; 
  public get accessPortSelectorDn() {
    return this.getStringAttribute('access_port_selector_dn');
  }
  public set accessPortSelectorDn(value: string) {
    this._accessPortSelectorDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPortSelectorDnInput() {
    return this._accessPortSelectorDn;
  }

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

  // from_card - computed: true, optional: true, required: false
  private _fromCard?: string; 
  public get fromCard() {
    return this.getStringAttribute('from_card');
  }
  public set fromCard(value: string) {
    this._fromCard = value;
  }
  public resetFromCard() {
    this._fromCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCardInput() {
    return this._fromCard;
  }

  // from_port - computed: true, optional: true, required: false
  private _fromPort?: string; 
  public get fromPort() {
    return this.getStringAttribute('from_port');
  }
  public set fromPort(value: string) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // from_sub_port - computed: true, optional: true, required: false
  private _fromSubPort?: string; 
  public get fromSubPort() {
    return this.getStringAttribute('from_sub_port');
  }
  public set fromSubPort(value: string) {
    this._fromSubPort = value;
  }
  public resetFromSubPort() {
    this._fromSubPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSubPortInput() {
    return this._fromSubPort;
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

  // to_card - computed: true, optional: true, required: false
  private _toCard?: string; 
  public get toCard() {
    return this.getStringAttribute('to_card');
  }
  public set toCard(value: string) {
    this._toCard = value;
  }
  public resetToCard() {
    this._toCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toCardInput() {
    return this._toCard;
  }

  // to_port - computed: true, optional: true, required: false
  private _toPort?: string; 
  public get toPort() {
    return this.getStringAttribute('to_port');
  }
  public set toPort(value: string) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }

  // to_sub_port - computed: true, optional: true, required: false
  private _toSubPort?: string; 
  public get toSubPort() {
    return this.getStringAttribute('to_sub_port');
  }
  public set toSubPort(value: string) {
    this._toSubPort = value;
  }
  public resetToSubPort() {
    this._toSubPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toSubPortInput() {
    return this._toSubPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_port_selector_dn: cdktf.stringToTerraform(this._accessPortSelectorDn),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      from_card: cdktf.stringToTerraform(this._fromCard),
      from_port: cdktf.stringToTerraform(this._fromPort),
      from_sub_port: cdktf.stringToTerraform(this._fromSubPort),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      to_card: cdktf.stringToTerraform(this._toCard),
      to_port: cdktf.stringToTerraform(this._toPort),
      to_sub_port: cdktf.stringToTerraform(this._toSubPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_port_selector_dn: {
        value: cdktf.stringToHclTerraform(this._accessPortSelectorDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      from_card: {
        value: cdktf.stringToHclTerraform(this._fromCard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_port: {
        value: cdktf.stringToHclTerraform(this._fromPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_sub_port: {
        value: cdktf.stringToHclTerraform(this._fromSubPort),
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
      to_card: {
        value: cdktf.stringToHclTerraform(this._toCard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_port: {
        value: cdktf.stringToHclTerraform(this._toPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_sub_port: {
        value: cdktf.stringToHclTerraform(this._toSubPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
