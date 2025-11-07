// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_policy_object_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationPolicyObjectGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Category of a policy object group (one of: NetworkObjectGroup, GeoLocationGroup, PortObjectGroup, ApplicationGroup)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_policy_object_group#category OrganizationPolicyObjectGroup#category}
  */
  readonly category?: string;
  /**
  * A name for the group of network addresses, unique within the organization (alphanumeric, space, dash, or underscore characters only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_policy_object_group#name OrganizationPolicyObjectGroup#name}
  */
  readonly name: string;
  /**
  * A list of Policy Object ID`s that this NetworkObjectGroup should be associated to (note: these ID`s will replace the existing associated Policy Objects)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_policy_object_group#object_ids OrganizationPolicyObjectGroup#object_ids}
  */
  readonly objectIds?: number[];
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_policy_object_group#organization_id OrganizationPolicyObjectGroup#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_policy_object_group meraki_organization_policy_object_group}
*/
export class OrganizationPolicyObjectGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_policy_object_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationPolicyObjectGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationPolicyObjectGroup to import
  * @param importFromId The id of the existing OrganizationPolicyObjectGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_policy_object_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationPolicyObjectGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_policy_object_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_policy_object_group meraki_organization_policy_object_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationPolicyObjectGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationPolicyObjectGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_policy_object_group',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._name = config.name;
    this._objectIds = config.objectIds;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // object_ids - computed: false, optional: true, required: false
  private _objectIds?: number[]; 
  public get objectIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('object_ids')));
  }
  public set objectIds(value: number[]) {
    this._objectIds = value;
  }
  public resetObjectIds() {
    this._objectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdsInput() {
    return this._objectIds;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      name: cdktf.stringToTerraform(this._name),
      object_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._objectIds),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      object_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._objectIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
