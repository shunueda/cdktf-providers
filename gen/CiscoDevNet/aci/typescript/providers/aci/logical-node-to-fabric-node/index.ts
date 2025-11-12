// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalNodeToFabricNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node#annotation LogicalNodeToFabricNode#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node#config_issues LogicalNodeToFabricNode#config_issues}
  */
  readonly configIssues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node#description LogicalNodeToFabricNode#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node#id LogicalNodeToFabricNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node#logical_node_profile_dn LogicalNodeToFabricNode#logical_node_profile_dn}
  */
  readonly logicalNodeProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node#rtr_id LogicalNodeToFabricNode#rtr_id}
  */
  readonly rtrId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node#rtr_id_loop_back LogicalNodeToFabricNode#rtr_id_loop_back}
  */
  readonly rtrIdLoopBack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node#tdn LogicalNodeToFabricNode#tdn}
  */
  readonly tdn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node aci_logical_node_to_fabric_node}
*/
export class LogicalNodeToFabricNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_logical_node_to_fabric_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalNodeToFabricNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalNodeToFabricNode to import
  * @param importFromId The id of the existing LogicalNodeToFabricNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalNodeToFabricNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_logical_node_to_fabric_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_node_to_fabric_node aci_logical_node_to_fabric_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalNodeToFabricNodeConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalNodeToFabricNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_logical_node_to_fabric_node',
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
    this._configIssues = config.configIssues;
    this._description = config.description;
    this._id = config.id;
    this._logicalNodeProfileDn = config.logicalNodeProfileDn;
    this._rtrId = config.rtrId;
    this._rtrIdLoopBack = config.rtrIdLoopBack;
    this._tdn = config.tdn;
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

  // config_issues - computed: true, optional: true, required: false
  private _configIssues?: string; 
  public get configIssues() {
    return this.getStringAttribute('config_issues');
  }
  public set configIssues(value: string) {
    this._configIssues = value;
  }
  public resetConfigIssues() {
    this._configIssues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIssuesInput() {
    return this._configIssues;
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

  // logical_node_profile_dn - computed: false, optional: false, required: true
  private _logicalNodeProfileDn?: string; 
  public get logicalNodeProfileDn() {
    return this.getStringAttribute('logical_node_profile_dn');
  }
  public set logicalNodeProfileDn(value: string) {
    this._logicalNodeProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNodeProfileDnInput() {
    return this._logicalNodeProfileDn;
  }

  // rtr_id - computed: true, optional: true, required: false
  private _rtrId?: string; 
  public get rtrId() {
    return this.getStringAttribute('rtr_id');
  }
  public set rtrId(value: string) {
    this._rtrId = value;
  }
  public resetRtrId() {
    this._rtrId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtrIdInput() {
    return this._rtrId;
  }

  // rtr_id_loop_back - computed: true, optional: true, required: false
  private _rtrIdLoopBack?: string; 
  public get rtrIdLoopBack() {
    return this.getStringAttribute('rtr_id_loop_back');
  }
  public set rtrIdLoopBack(value: string) {
    this._rtrIdLoopBack = value;
  }
  public resetRtrIdLoopBack() {
    this._rtrIdLoopBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtrIdLoopBackInput() {
    return this._rtrIdLoopBack;
  }

  // tdn - computed: false, optional: false, required: true
  private _tdn?: string; 
  public get tdn() {
    return this.getStringAttribute('tdn');
  }
  public set tdn(value: string) {
    this._tdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tdnInput() {
    return this._tdn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      config_issues: cdktf.stringToTerraform(this._configIssues),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      logical_node_profile_dn: cdktf.stringToTerraform(this._logicalNodeProfileDn),
      rtr_id: cdktf.stringToTerraform(this._rtrId),
      rtr_id_loop_back: cdktf.stringToTerraform(this._rtrIdLoopBack),
      tdn: cdktf.stringToTerraform(this._tdn),
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
      config_issues: {
        value: cdktf.stringToHclTerraform(this._configIssues),
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
      logical_node_profile_dn: {
        value: cdktf.stringToHclTerraform(this._logicalNodeProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtr_id: {
        value: cdktf.stringToHclTerraform(this._rtrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtr_id_loop_back: {
        value: cdktf.stringToHclTerraform(this._rtrIdLoopBack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tdn: {
        value: cdktf.stringToHclTerraform(this._tdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
