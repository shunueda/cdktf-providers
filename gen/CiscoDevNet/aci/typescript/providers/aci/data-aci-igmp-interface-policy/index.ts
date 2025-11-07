// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciIgmpInterfacePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy#annotation DataAciIgmpInterfacePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy#description DataAciIgmpInterfacePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy#id DataAciIgmpInterfacePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy#name DataAciIgmpInterfacePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy#name_alias DataAciIgmpInterfacePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy#tenant_dn DataAciIgmpInterfacePolicy#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy aci_igmp_interface_policy}
*/
export class DataAciIgmpInterfacePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_igmp_interface_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciIgmpInterfacePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciIgmpInterfacePolicy to import
  * @param importFromId The id of the existing DataAciIgmpInterfacePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciIgmpInterfacePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_igmp_interface_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/igmp_interface_policy aci_igmp_interface_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciIgmpInterfacePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciIgmpInterfacePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_igmp_interface_policy',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._tenantDn = config.tenantDn;
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

  // control - computed: true, optional: false, required: false
  public get control() {
    return this.getListAttribute('control');
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

  // group_timeout - computed: true, optional: false, required: false
  public get groupTimeout() {
    return this.getStringAttribute('group_timeout');
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

  // last_member_count - computed: true, optional: false, required: false
  public get lastMemberCount() {
    return this.getStringAttribute('last_member_count');
  }

  // last_member_response_time - computed: true, optional: false, required: false
  public get lastMemberResponseTime() {
    return this.getStringAttribute('last_member_response_time');
  }

  // maximum_mulitcast_entries - computed: true, optional: false, required: false
  public get maximumMulitcastEntries() {
    return this.getStringAttribute('maximum_mulitcast_entries');
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

  // querier_timeout - computed: true, optional: false, required: false
  public get querierTimeout() {
    return this.getStringAttribute('querier_timeout');
  }

  // query_interval - computed: true, optional: false, required: false
  public get queryInterval() {
    return this.getStringAttribute('query_interval');
  }

  // report_policy_route_map - computed: true, optional: false, required: false
  public get reportPolicyRouteMap() {
    return this.getStringAttribute('report_policy_route_map');
  }

  // reserved_mulitcast_entries - computed: true, optional: false, required: false
  public get reservedMulitcastEntries() {
    return this.getStringAttribute('reserved_mulitcast_entries');
  }

  // response_interval - computed: true, optional: false, required: false
  public get responseInterval() {
    return this.getStringAttribute('response_interval');
  }

  // robustness_variable - computed: true, optional: false, required: false
  public get robustnessVariable() {
    return this.getStringAttribute('robustness_variable');
  }

  // startup_query_count - computed: true, optional: false, required: false
  public get startupQueryCount() {
    return this.getStringAttribute('startup_query_count');
  }

  // startup_query_interval - computed: true, optional: false, required: false
  public get startupQueryInterval() {
    return this.getStringAttribute('startup_query_interval');
  }

  // state_limit_route_map - computed: true, optional: false, required: false
  public get stateLimitRouteMap() {
    return this.getStringAttribute('state_limit_route_map');
  }

  // static_report_route_map - computed: true, optional: false, required: false
  public get staticReportRouteMap() {
    return this.getStringAttribute('static_report_route_map');
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
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
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
