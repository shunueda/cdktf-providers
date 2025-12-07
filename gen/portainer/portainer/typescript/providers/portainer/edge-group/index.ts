// https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group#dynamic EdgeGroup#dynamic}
  */
  readonly dynamic: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group#endpoints EdgeGroup#endpoints}
  */
  readonly endpoints?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group#id EdgeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group#name EdgeGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group#partial_match EdgeGroup#partial_match}
  */
  readonly partialMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group#tag_ids EdgeGroup#tag_ids}
  */
  readonly tagIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group portainer_edge_group}
*/
export class EdgeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_edge_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeGroup to import
  * @param importFromId The id of the existing EdgeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_edge_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_group portainer_edge_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_edge_group',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.20.1',
        providerVersionConstraint: '1.20.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamic = config.dynamic;
    this._endpoints = config.endpoints;
    this._id = config.id;
    this._name = config.name;
    this._partialMatch = config.partialMatch;
    this._tagIds = config.tagIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic - computed: false, optional: false, required: true
  private _dynamic?: boolean | cdktf.IResolvable; 
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }
  public set dynamic(value: boolean | cdktf.IResolvable) {
    this._dynamic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: number[]; 
  public get endpoints() {
    return this.getNumberListAttribute('endpoints');
  }
  public set endpoints(value: number[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
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

  // partial_match - computed: false, optional: true, required: false
  private _partialMatch?: boolean | cdktf.IResolvable; 
  public get partialMatch() {
    return this.getBooleanAttribute('partial_match');
  }
  public set partialMatch(value: boolean | cdktf.IResolvable) {
    this._partialMatch = value;
  }
  public resetPartialMatch() {
    this._partialMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMatchInput() {
    return this._partialMatch;
  }

  // tag_ids - computed: false, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return this.getNumberListAttribute('tag_ids');
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic: cdktf.booleanToTerraform(this._dynamic),
      endpoints: cdktf.listMapper(cdktf.numberToTerraform, false)(this._endpoints),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partial_match: cdktf.booleanToTerraform(this._partialMatch),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic: {
        value: cdktf.booleanToHclTerraform(this._dynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoints: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._endpoints),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
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
      partial_match: {
        value: cdktf.booleanToHclTerraform(this._partialMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
