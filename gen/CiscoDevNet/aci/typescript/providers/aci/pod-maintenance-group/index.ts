// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PodMaintenanceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group#annotation PodMaintenanceGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group#description PodMaintenanceGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group#fwtype PodMaintenanceGroup#fwtype}
  */
  readonly fwtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group#id PodMaintenanceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group#name PodMaintenanceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group#name_alias PodMaintenanceGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group#pod_maintenance_group_type PodMaintenanceGroup#pod_maintenance_group_type}
  */
  readonly podMaintenanceGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group#relation_maint_rs_mgrpp PodMaintenanceGroup#relation_maint_rs_mgrpp}
  */
  readonly relationMaintRsMgrpp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group aci_pod_maintenance_group}
*/
export class PodMaintenanceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_pod_maintenance_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PodMaintenanceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PodMaintenanceGroup to import
  * @param importFromId The id of the existing PodMaintenanceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PodMaintenanceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_pod_maintenance_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pod_maintenance_group aci_pod_maintenance_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodMaintenanceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PodMaintenanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_pod_maintenance_group',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
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
    this._description = config.description;
    this._fwtype = config.fwtype;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._podMaintenanceGroupType = config.podMaintenanceGroupType;
    this._relationMaintRsMgrpp = config.relationMaintRsMgrpp;
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

  // fwtype - computed: true, optional: true, required: false
  private _fwtype?: string; 
  public get fwtype() {
    return this.getStringAttribute('fwtype');
  }
  public set fwtype(value: string) {
    this._fwtype = value;
  }
  public resetFwtype() {
    this._fwtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwtypeInput() {
    return this._fwtype;
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

  // pod_maintenance_group_type - computed: true, optional: true, required: false
  private _podMaintenanceGroupType?: string; 
  public get podMaintenanceGroupType() {
    return this.getStringAttribute('pod_maintenance_group_type');
  }
  public set podMaintenanceGroupType(value: string) {
    this._podMaintenanceGroupType = value;
  }
  public resetPodMaintenanceGroupType() {
    this._podMaintenanceGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMaintenanceGroupTypeInput() {
    return this._podMaintenanceGroupType;
  }

  // relation_maint_rs_mgrpp - computed: false, optional: true, required: false
  private _relationMaintRsMgrpp?: string; 
  public get relationMaintRsMgrpp() {
    return this.getStringAttribute('relation_maint_rs_mgrpp');
  }
  public set relationMaintRsMgrpp(value: string) {
    this._relationMaintRsMgrpp = value;
  }
  public resetRelationMaintRsMgrpp() {
    this._relationMaintRsMgrpp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationMaintRsMgrppInput() {
    return this._relationMaintRsMgrpp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      fwtype: cdktf.stringToTerraform(this._fwtype),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      pod_maintenance_group_type: cdktf.stringToTerraform(this._podMaintenanceGroupType),
      relation_maint_rs_mgrpp: cdktf.stringToTerraform(this._relationMaintRsMgrpp),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwtype: {
        value: cdktf.stringToHclTerraform(this._fwtype),
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
      pod_maintenance_group_type: {
        value: cdktf.stringToHclTerraform(this._podMaintenanceGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_maint_rs_mgrpp: {
        value: cdktf.stringToHclTerraform(this._relationMaintRsMgrpp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
