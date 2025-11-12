// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciL4L7DeployedGraphConnectorVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#annotation DataAciL4L7DeployedGraphConnectorVlan#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#delete_pbr_scenario DataAciL4L7DeployedGraphConnectorVlan#delete_pbr_scenario}
  */
  readonly deletePbrScenario?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#description DataAciL4L7DeployedGraphConnectorVlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#encap DataAciL4L7DeployedGraphConnectorVlan#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#fabric_encap DataAciL4L7DeployedGraphConnectorVlan#fabric_encap}
  */
  readonly fabricEncap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#id DataAciL4L7DeployedGraphConnectorVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#logical_context_dn DataAciL4L7DeployedGraphConnectorVlan#logical_context_dn}
  */
  readonly logicalContextDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#member_type DataAciL4L7DeployedGraphConnectorVlan#member_type}
  */
  readonly memberType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#name DataAciL4L7DeployedGraphConnectorVlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#name_alias DataAciL4L7DeployedGraphConnectorVlan#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#router_id DataAciL4L7DeployedGraphConnectorVlan#router_id}
  */
  readonly routerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan aci_l4_l7_deployed_graph_connector_vlan}
*/
export class DataAciL4L7DeployedGraphConnectorVlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l4_l7_deployed_graph_connector_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciL4L7DeployedGraphConnectorVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciL4L7DeployedGraphConnectorVlan to import
  * @param importFromId The id of the existing DataAciL4L7DeployedGraphConnectorVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciL4L7DeployedGraphConnectorVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l4_l7_deployed_graph_connector_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_deployed_graph_connector_vlan aci_l4_l7_deployed_graph_connector_vlan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciL4L7DeployedGraphConnectorVlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciL4L7DeployedGraphConnectorVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l4_l7_deployed_graph_connector_vlan',
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
    this._deletePbrScenario = config.deletePbrScenario;
    this._description = config.description;
    this._encap = config.encap;
    this._fabricEncap = config.fabricEncap;
    this._id = config.id;
    this._logicalContextDn = config.logicalContextDn;
    this._memberType = config.memberType;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._routerId = config.routerId;
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

  // delete_pbr_scenario - computed: true, optional: true, required: false
  private _deletePbrScenario?: string; 
  public get deletePbrScenario() {
    return this.getStringAttribute('delete_pbr_scenario');
  }
  public set deletePbrScenario(value: string) {
    this._deletePbrScenario = value;
  }
  public resetDeletePbrScenario() {
    this._deletePbrScenario = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePbrScenarioInput() {
    return this._deletePbrScenario;
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

  // encap - computed: true, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // fabric_encap - computed: true, optional: true, required: false
  private _fabricEncap?: string; 
  public get fabricEncap() {
    return this.getStringAttribute('fabric_encap');
  }
  public set fabricEncap(value: string) {
    this._fabricEncap = value;
  }
  public resetFabricEncap() {
    this._fabricEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricEncapInput() {
    return this._fabricEncap;
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

  // logical_context_dn - computed: false, optional: false, required: true
  private _logicalContextDn?: string; 
  public get logicalContextDn() {
    return this.getStringAttribute('logical_context_dn');
  }
  public set logicalContextDn(value: string) {
    this._logicalContextDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalContextDnInput() {
    return this._logicalContextDn;
  }

  // member_type - computed: true, optional: true, required: false
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  public resetMemberType() {
    this._memberType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
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

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      delete_pbr_scenario: cdktf.stringToTerraform(this._deletePbrScenario),
      description: cdktf.stringToTerraform(this._description),
      encap: cdktf.stringToTerraform(this._encap),
      fabric_encap: cdktf.stringToTerraform(this._fabricEncap),
      id: cdktf.stringToTerraform(this._id),
      logical_context_dn: cdktf.stringToTerraform(this._logicalContextDn),
      member_type: cdktf.stringToTerraform(this._memberType),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      router_id: cdktf.stringToTerraform(this._routerId),
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
      delete_pbr_scenario: {
        value: cdktf.stringToHclTerraform(this._deletePbrScenario),
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
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_encap: {
        value: cdktf.stringToHclTerraform(this._fabricEncap),
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
      logical_context_dn: {
        value: cdktf.stringToHclTerraform(this._logicalContextDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_type: {
        value: cdktf.stringToHclTerraform(this._memberType),
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
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
