// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_branding_policies_priorities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationBrandingPoliciesPrioritiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * An ordered list of branding policy IDs that determines the priority order of how to apply the policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_branding_policies_priorities#branding_policy_ids OrganizationBrandingPoliciesPriorities#branding_policy_ids}
  */
  readonly brandingPolicyIds?: string[];
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_branding_policies_priorities#organization_id OrganizationBrandingPoliciesPriorities#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_branding_policies_priorities meraki_organization_branding_policies_priorities}
*/
export class OrganizationBrandingPoliciesPriorities extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_branding_policies_priorities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationBrandingPoliciesPriorities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationBrandingPoliciesPriorities to import
  * @param importFromId The id of the existing OrganizationBrandingPoliciesPriorities that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_branding_policies_priorities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationBrandingPoliciesPriorities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_branding_policies_priorities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_branding_policies_priorities meraki_organization_branding_policies_priorities} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationBrandingPoliciesPrioritiesConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationBrandingPoliciesPrioritiesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_branding_policies_priorities',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._brandingPolicyIds = config.brandingPolicyIds;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branding_policy_ids - computed: false, optional: true, required: false
  private _brandingPolicyIds?: string[]; 
  public get brandingPolicyIds() {
    return this.getListAttribute('branding_policy_ids');
  }
  public set brandingPolicyIds(value: string[]) {
    this._brandingPolicyIds = value;
  }
  public resetBrandingPolicyIds() {
    this._brandingPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingPolicyIdsInput() {
    return this._brandingPolicyIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      branding_policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._brandingPolicyIds),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branding_policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._brandingPolicyIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
