// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciPbrL1L2DestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#annotation DataAciPbrL1L2Destination#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#description DataAciPbrL1L2Destination#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#destination_name DataAciPbrL1L2Destination#destination_name}
  */
  readonly destinationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#id DataAciPbrL1L2Destination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#mac DataAciPbrL1L2Destination#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#name DataAciPbrL1L2Destination#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#name_alias DataAciPbrL1L2Destination#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#pod_id DataAciPbrL1L2Destination#pod_id}
  */
  readonly podId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#policy_based_redirect_dn DataAciPbrL1L2Destination#policy_based_redirect_dn}
  */
  readonly policyBasedRedirectDn: string;
  /**
  * Create relation to vns:RedirectHealthGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#relation_vns_rs_l1_l2_redirect_health_group DataAciPbrL1L2Destination#relation_vns_rs_l1_l2_redirect_health_group}
  */
  readonly relationVnsRsL1L2RedirectHealthGroup?: string;
  /**
  * Create relation to vns:CIf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#relation_vns_rs_to_c_if DataAciPbrL1L2Destination#relation_vns_rs_to_c_if}
  */
  readonly relationVnsRsToCIf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination aci_pbr_l1_l2_destination}
*/
export class DataAciPbrL1L2Destination extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_pbr_l1_l2_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciPbrL1L2Destination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciPbrL1L2Destination to import
  * @param importFromId The id of the existing DataAciPbrL1L2Destination that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciPbrL1L2Destination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_pbr_l1_l2_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/pbr_l1_l2_destination aci_pbr_l1_l2_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciPbrL1L2DestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciPbrL1L2DestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_pbr_l1_l2_destination',
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
    this._destinationName = config.destinationName;
    this._id = config.id;
    this._mac = config.mac;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._podId = config.podId;
    this._policyBasedRedirectDn = config.policyBasedRedirectDn;
    this._relationVnsRsL1L2RedirectHealthGroup = config.relationVnsRsL1L2RedirectHealthGroup;
    this._relationVnsRsToCIf = config.relationVnsRsToCIf;
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

  // destination_name - computed: false, optional: false, required: true
  private _destinationName?: string; 
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }
  public set destinationName(value: string) {
    this._destinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNameInput() {
    return this._destinationName;
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

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // pod_id - computed: true, optional: true, required: false
  private _podId?: string; 
  public get podId() {
    return this.getStringAttribute('pod_id');
  }
  public set podId(value: string) {
    this._podId = value;
  }
  public resetPodId() {
    this._podId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdInput() {
    return this._podId;
  }

  // policy_based_redirect_dn - computed: false, optional: false, required: true
  private _policyBasedRedirectDn?: string; 
  public get policyBasedRedirectDn() {
    return this.getStringAttribute('policy_based_redirect_dn');
  }
  public set policyBasedRedirectDn(value: string) {
    this._policyBasedRedirectDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBasedRedirectDnInput() {
    return this._policyBasedRedirectDn;
  }

  // relation_vns_rs_l1_l2_redirect_health_group - computed: true, optional: true, required: false
  private _relationVnsRsL1L2RedirectHealthGroup?: string; 
  public get relationVnsRsL1L2RedirectHealthGroup() {
    return this.getStringAttribute('relation_vns_rs_l1_l2_redirect_health_group');
  }
  public set relationVnsRsL1L2RedirectHealthGroup(value: string) {
    this._relationVnsRsL1L2RedirectHealthGroup = value;
  }
  public resetRelationVnsRsL1L2RedirectHealthGroup() {
    this._relationVnsRsL1L2RedirectHealthGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsL1L2RedirectHealthGroupInput() {
    return this._relationVnsRsL1L2RedirectHealthGroup;
  }

  // relation_vns_rs_to_c_if - computed: true, optional: true, required: false
  private _relationVnsRsToCIf?: string; 
  public get relationVnsRsToCIf() {
    return this.getStringAttribute('relation_vns_rs_to_c_if');
  }
  public set relationVnsRsToCIf(value: string) {
    this._relationVnsRsToCIf = value;
  }
  public resetRelationVnsRsToCIf() {
    this._relationVnsRsToCIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsToCIfInput() {
    return this._relationVnsRsToCIf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      destination_name: cdktf.stringToTerraform(this._destinationName),
      id: cdktf.stringToTerraform(this._id),
      mac: cdktf.stringToTerraform(this._mac),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      pod_id: cdktf.stringToTerraform(this._podId),
      policy_based_redirect_dn: cdktf.stringToTerraform(this._policyBasedRedirectDn),
      relation_vns_rs_l1_l2_redirect_health_group: cdktf.stringToTerraform(this._relationVnsRsL1L2RedirectHealthGroup),
      relation_vns_rs_to_c_if: cdktf.stringToTerraform(this._relationVnsRsToCIf),
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
      destination_name: {
        value: cdktf.stringToHclTerraform(this._destinationName),
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
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
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
      pod_id: {
        value: cdktf.stringToHclTerraform(this._podId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_based_redirect_dn: {
        value: cdktf.stringToHclTerraform(this._policyBasedRedirectDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l1_l2_redirect_health_group: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsL1L2RedirectHealthGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_to_c_if: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsToCIf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
