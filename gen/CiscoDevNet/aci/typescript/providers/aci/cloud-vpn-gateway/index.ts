// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudVpnGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#annotation CloudVpnGateway#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#cloud_context_profile_dn CloudVpnGateway#cloud_context_profile_dn}
  */
  readonly cloudContextProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#cloud_router_profile_type CloudVpnGateway#cloud_router_profile_type}
  */
  readonly cloudRouterProfileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#description CloudVpnGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#id CloudVpnGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#name CloudVpnGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#name_alias CloudVpnGateway#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#num_instances CloudVpnGateway#num_instances}
  */
  readonly numInstances?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#relation_cloud_rs_to_direct_conn_pol CloudVpnGateway#relation_cloud_rs_to_direct_conn_pol}
  */
  readonly relationCloudRsToDirectConnPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#relation_cloud_rs_to_host_router_pol CloudVpnGateway#relation_cloud_rs_to_host_router_pol}
  */
  readonly relationCloudRsToHostRouterPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#relation_cloud_rs_to_vpn_gw_pol CloudVpnGateway#relation_cloud_rs_to_vpn_gw_pol}
  */
  readonly relationCloudRsToVpnGwPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway aci_cloud_vpn_gateway}
*/
export class CloudVpnGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_vpn_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudVpnGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudVpnGateway to import
  * @param importFromId The id of the existing CloudVpnGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudVpnGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_vpn_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_vpn_gateway aci_cloud_vpn_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudVpnGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: CloudVpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_vpn_gateway',
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
    this._cloudContextProfileDn = config.cloudContextProfileDn;
    this._cloudRouterProfileType = config.cloudRouterProfileType;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._numInstances = config.numInstances;
    this._relationCloudRsToDirectConnPol = config.relationCloudRsToDirectConnPol;
    this._relationCloudRsToHostRouterPol = config.relationCloudRsToHostRouterPol;
    this._relationCloudRsToVpnGwPol = config.relationCloudRsToVpnGwPol;
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

  // cloud_context_profile_dn - computed: false, optional: false, required: true
  private _cloudContextProfileDn?: string; 
  public get cloudContextProfileDn() {
    return this.getStringAttribute('cloud_context_profile_dn');
  }
  public set cloudContextProfileDn(value: string) {
    this._cloudContextProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudContextProfileDnInput() {
    return this._cloudContextProfileDn;
  }

  // cloud_router_profile_type - computed: true, optional: true, required: false
  private _cloudRouterProfileType?: string; 
  public get cloudRouterProfileType() {
    return this.getStringAttribute('cloud_router_profile_type');
  }
  public set cloudRouterProfileType(value: string) {
    this._cloudRouterProfileType = value;
  }
  public resetCloudRouterProfileType() {
    this._cloudRouterProfileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRouterProfileTypeInput() {
    return this._cloudRouterProfileType;
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

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: string; 
  public get numInstances() {
    return this.getStringAttribute('num_instances');
  }
  public set numInstances(value: string) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // relation_cloud_rs_to_direct_conn_pol - computed: false, optional: true, required: false
  private _relationCloudRsToDirectConnPol?: string; 
  public get relationCloudRsToDirectConnPol() {
    return this.getStringAttribute('relation_cloud_rs_to_direct_conn_pol');
  }
  public set relationCloudRsToDirectConnPol(value: string) {
    this._relationCloudRsToDirectConnPol = value;
  }
  public resetRelationCloudRsToDirectConnPol() {
    this._relationCloudRsToDirectConnPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsToDirectConnPolInput() {
    return this._relationCloudRsToDirectConnPol;
  }

  // relation_cloud_rs_to_host_router_pol - computed: false, optional: true, required: false
  private _relationCloudRsToHostRouterPol?: string; 
  public get relationCloudRsToHostRouterPol() {
    return this.getStringAttribute('relation_cloud_rs_to_host_router_pol');
  }
  public set relationCloudRsToHostRouterPol(value: string) {
    this._relationCloudRsToHostRouterPol = value;
  }
  public resetRelationCloudRsToHostRouterPol() {
    this._relationCloudRsToHostRouterPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsToHostRouterPolInput() {
    return this._relationCloudRsToHostRouterPol;
  }

  // relation_cloud_rs_to_vpn_gw_pol - computed: false, optional: true, required: false
  private _relationCloudRsToVpnGwPol?: string; 
  public get relationCloudRsToVpnGwPol() {
    return this.getStringAttribute('relation_cloud_rs_to_vpn_gw_pol');
  }
  public set relationCloudRsToVpnGwPol(value: string) {
    this._relationCloudRsToVpnGwPol = value;
  }
  public resetRelationCloudRsToVpnGwPol() {
    this._relationCloudRsToVpnGwPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsToVpnGwPolInput() {
    return this._relationCloudRsToVpnGwPol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      cloud_context_profile_dn: cdktf.stringToTerraform(this._cloudContextProfileDn),
      cloud_router_profile_type: cdktf.stringToTerraform(this._cloudRouterProfileType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      num_instances: cdktf.stringToTerraform(this._numInstances),
      relation_cloud_rs_to_direct_conn_pol: cdktf.stringToTerraform(this._relationCloudRsToDirectConnPol),
      relation_cloud_rs_to_host_router_pol: cdktf.stringToTerraform(this._relationCloudRsToHostRouterPol),
      relation_cloud_rs_to_vpn_gw_pol: cdktf.stringToTerraform(this._relationCloudRsToVpnGwPol),
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
      cloud_context_profile_dn: {
        value: cdktf.stringToHclTerraform(this._cloudContextProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_router_profile_type: {
        value: cdktf.stringToHclTerraform(this._cloudRouterProfileType),
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
      num_instances: {
        value: cdktf.stringToHclTerraform(this._numInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_cloud_rs_to_direct_conn_pol: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsToDirectConnPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_cloud_rs_to_host_router_pol: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsToHostRouterPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_cloud_rs_to_vpn_gw_pol: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsToVpnGwPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
