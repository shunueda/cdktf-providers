// https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume_access_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElementswVolumeAccessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume_access_group#attributes ElementswVolumeAccessGroup#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume_access_group#id ElementswVolumeAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume_access_group#name ElementswVolumeAccessGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume_access_group#volumes ElementswVolumeAccessGroup#volumes}
  */
  readonly volumes?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume_access_group elementsw_volume_access_group}
*/
export class ElementswVolumeAccessGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elementsw_volume_access_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElementswVolumeAccessGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElementswVolumeAccessGroup to import
  * @param importFromId The id of the existing ElementswVolumeAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume_access_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElementswVolumeAccessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elementsw_volume_access_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume_access_group elementsw_volume_access_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElementswVolumeAccessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ElementswVolumeAccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'elementsw_volume_access_group',
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
    this._attributes = config.attributes;
    this._id = config.id;
    this._name = config.name;
    this._volumes = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // initiators - computed: true, optional: false, required: false
  public get initiators() {
    return this.getListAttribute('initiators');
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

  // volumes - computed: false, optional: true, required: false
  private _volumes?: number[]; 
  public get volumes() {
    return this.getNumberListAttribute('volumes');
  }
  public set volumes(value: number[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributes),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      volumes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._volumes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volumes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._volumes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
