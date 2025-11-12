// https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElementswInitiatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator#alias ElementswInitiator#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator#attributes ElementswInitiator#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator#id ElementswInitiator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator#iqns ElementswInitiator#iqns}
  */
  readonly iqns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator#name ElementswInitiator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator#volume_access_group_id ElementswInitiator#volume_access_group_id}
  */
  readonly volumeAccessGroupId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator elementsw_initiator}
*/
export class ElementswInitiator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elementsw_initiator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElementswInitiator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElementswInitiator to import
  * @param importFromId The id of the existing ElementswInitiator that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElementswInitiator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elementsw_initiator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_initiator elementsw_initiator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElementswInitiatorConfig
  */
  public constructor(scope: Construct, id: string, config: ElementswInitiatorConfig) {
    super(scope, id, {
      terraformResourceType: 'elementsw_initiator',
      terraformGeneratorMetadata: {
        providerName: 'netapp-elementsw',
        providerVersion: '20.11.0',
        providerVersionConstraint: '20.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._attributes = config.attributes;
    this._id = config.id;
    this._iqns = config.iqns;
    this._name = config.name;
    this._volumeAccessGroupId = config.volumeAccessGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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

  // iqns - computed: false, optional: true, required: false
  private _iqns?: string[]; 
  public get iqns() {
    return this.getListAttribute('iqns');
  }
  public set iqns(value: string[]) {
    this._iqns = value;
  }
  public resetIqns() {
    this._iqns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnsInput() {
    return this._iqns;
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

  // volume_access_group_id - computed: false, optional: true, required: false
  private _volumeAccessGroupId?: number; 
  public get volumeAccessGroupId() {
    return this.getNumberAttribute('volume_access_group_id');
  }
  public set volumeAccessGroupId(value: number) {
    this._volumeAccessGroupId = value;
  }
  public resetVolumeAccessGroupId() {
    this._volumeAccessGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAccessGroupIdInput() {
    return this._volumeAccessGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributes),
      id: cdktf.stringToTerraform(this._id),
      iqns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iqns),
      name: cdktf.stringToTerraform(this._name),
      volume_access_group_id: cdktf.numberToTerraform(this._volumeAccessGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iqns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iqns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_access_group_id: {
        value: cdktf.numberToHclTerraform(this._volumeAccessGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
