// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group#description VlanGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group#id VlanGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group#name VlanGroup#name}
  */
  readonly name: string;
  /**
  * Required when `scope_type` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group#scope_id VlanGroup#scope_id}
  */
  readonly scopeId?: number;
  /**
  * Valid values are `dcim.location`, `dcim.site`, `dcim.sitegroup`, `dcim.region`, `dcim.rack`, `virtualization.cluster` and `virtualization.clustergroup`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group#scope_type VlanGroup#scope_type}
  */
  readonly scopeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group#slug VlanGroup#slug}
  */
  readonly slug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group#tags VlanGroup#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group#vid_ranges VlanGroup#vid_ranges}
  */
  readonly vidRanges: number[][] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group netbox_vlan_group}
*/
export class VlanGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_vlan_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanGroup to import
  * @param importFromId The id of the existing VlanGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_vlan_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/vlan_group netbox_vlan_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VlanGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_vlan_group',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._scopeType = config.scopeType;
    this._slug = config.slug;
    this._tags = config.tags;
    this._vidRanges = config.vidRanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // scope_id - computed: false, optional: true, required: false
  private _scopeId?: number; 
  public get scopeId() {
    return this.getNumberAttribute('scope_id');
  }
  public set scopeId(value: number) {
    this._scopeId = value;
  }
  public resetScopeId() {
    this._scopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // scope_type - computed: false, optional: true, required: false
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  public resetScopeType() {
    this._scopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // vid_ranges - computed: false, optional: false, required: true
  private _vidRanges?: number[][] | cdktf.IResolvable; 
  public get vidRanges() {
    return this.interpolationForAttribute('vid_ranges');
  }
  public set vidRanges(value: number[][] | cdktf.IResolvable) {
    this._vidRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vidRangesInput() {
    return this._vidRanges;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.numberToTerraform(this._scopeId),
      scope_type: cdktf.stringToTerraform(this._scopeType),
      slug: cdktf.stringToTerraform(this._slug),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vid_ranges: cdktf.listMapper(cdktf.listMapper(cdktf.numberToTerraform, false), false)(this._vidRanges),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      scope_id: {
        value: cdktf.numberToHclTerraform(this._scopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scope_type: {
        value: cdktf.stringToHclTerraform(this._scopeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vid_ranges: {
        value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.numberToHclTerraform, false), false)(this._vidRanges),
        isBlock: false,
        type: "list",
        storageClassType: "numberListList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
